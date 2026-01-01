# n8n + Telegram Order Notification Setup

This guide explains how to connect your Sagar Menu ordering system to a Telegram group via n8n webhook, so the chef receives order notifications in real-time.

---

## Architecture Overview

```
Customer scans QR → Places Order → Webhook triggers → n8n receives → Telegram message to Chef
```

---

## Part 1: Telegram Bot Setup

### Step 1: Create a Telegram Bot
1. Open Telegram and search for `@BotFather`
2. Send `/newbot` command
3. Enter a name: `Sagar Cafe Orders`
4. Enter a username: `sagar_cafe_orders_bot` (must end with `bot`)
5. **Save the API Token** - looks like: `7123456789:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw`

### Step 2: Create a Group for Kitchen Staff
1. Create a new Telegram group named "Sagar Kitchen Orders"
2. Add the bot you created to this group
3. Make the bot an admin (so it can send messages)

### Step 3: Get the Group Chat ID
Send this message in the group:
```
/start
```

Then visit this URL in your browser (replace `YOUR_BOT_TOKEN`):
```
https://api.telegram.org/botYOUR_BOT_TOKEN/getUpdates
```

Look for `"chat":{"id":-XXXXXXXXXX}` - this negative number is your **Group Chat ID**.

---

## Part 2: n8n Workflow Setup

### Step 1: Access n8n
- If self-hosted: `http://localhost:5678`
- If using n8n Cloud: `https://your-instance.app.n8n.cloud`

### Step 2: Create New Workflow

**Node 1: Webhook (Trigger)**
1. Add a new node → Search "Webhook"
2. Configure:
   - **HTTP Method**: `POST`
   - **Path**: `sagar-order` (this creates URL like: `https://your-n8n.com/webhook/sagar-order`)
3. Copy the **Production URL** - you'll need this for the website

**Node 2: Telegram**
1. Add a new node → Search "Telegram"
2. Select **Send Message** action
3. Configure credentials:
   - Click "Create New Credential"
   - **Access Token**: Paste your Bot Token from Step 1
4. Configure message:
   - **Chat ID**: Your group chat ID (negative number like `-1001234567890`)
   - **Text**: Use the expression below

### Telegram Message Expression

Click the "Expression" button next to Text field and paste:

```javascript
🍽️ *NEW ORDER RECEIVED!*

📍 *Table:* {{ $json.tableNumber || 'N/A' }}
🕐 *Time:* {{ $now.format('hh:mm A') }}

━━━━━━━━━━━━━━━━━━
📋 *ORDER DETAILS:*
━━━━━━━━━━━━━━━━━━
{{ $json.items.map(item => `• ${item.name} × ${item.quantity}  ₹${item.total}`).join('\n') }}

━━━━━━━━━━━━━━━━━━
💰 *TOTAL:* ₹{{ $json.total }}
━━━━━━━━━━━━━━━━━━

✅ Please prepare this order!
```

5. Set **Parse Mode** to `Markdown`

### Step 3: Connect & Activate
1. Connect the Webhook node to the Telegram node
2. Click "Save" 
3. Toggle the workflow to **Active**
4. Copy the Production Webhook URL

---

## Part 3: Update Website Code

### Modify `app.js`

Find this section in your `app.js` and add the webhook call:

```javascript
// =============================================
// WEBHOOK CONFIGURATION
// =============================================
const WEBHOOK_URL = 'YOUR_N8N_WEBHOOK_URL_HERE'; // Replace with your n8n webhook URL

// Function to send order to webhook
async function sendOrderToWebhook(orderData) {
    try {
        const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData)
        });
        
        if (!response.ok) {
            console.error('Webhook failed:', response.status);
        }
    } catch (error) {
        console.error('Error sending to webhook:', error);
        // Don't show error to customer - order is still valid
    }
}
```

Then update the order confirmation handler. Find the `orderModalConfirm.addEventListener` section and modify it:

```javascript
// Handle confirm button click
orderModalConfirm.addEventListener('click', () => {
    if (isConfirmingOrder) {
        // User confirmed the order
        isConfirmingOrder = false;
        hideOrderModal();
        
        // Prepare order data for webhook
        const orderData = {
            tableNumber: currentTableNumber || 'Walk-in',
            items: cart.map(item => ({
                name: item.name,
                quantity: item.quantity,
                price: item.price,
                total: item.price * item.quantity
            })),
            total: calculateTotal(),
            timestamp: new Date().toISOString()
        };
        
        // Send to webhook (async - don't wait)
        sendOrderToWebhook(orderData);
        
        // Show success message after a brief delay
        setTimeout(() => {
            const tableText = currentTableNumber ? ` for Table ${currentTableNumber}` : '';
            showOrderModal('success', `
                <p class="success-message">
                    Thank you for your order${tableText}!<br><br>
                    Your food will be prepared shortly.<br>
                    Please wait at your table.
                </p>
            `);
            clearCart();
            closeCart();
        }, 200);
    } else {
        // Just closing an info/success modal
        hideOrderModal();
    }
});
```

---

## Part 4: Complete n8n Workflow JSON

Copy this JSON and import it directly into n8n (Menu → Import from URL/JSON):

```json
{
  "name": "Sagar Cafe Order Notifications",
  "nodes": [
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "sagar-order",
        "options": {}
      },
      "id": "webhook-node",
      "name": "Order Webhook",
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 2,
      "position": [250, 300]
    },
    {
      "parameters": {
        "chatId": "YOUR_TELEGRAM_GROUP_CHAT_ID",
        "text": "=🍽️ *NEW ORDER RECEIVED!*\n\n📍 *Table:* {{ $json.tableNumber || 'N/A' }}\n🕐 *Time:* {{ $now.format('hh:mm A') }}\n\n━━━━━━━━━━━━━━━━━━\n📋 *ORDER DETAILS:*\n━━━━━━━━━━━━━━━━━━\n{{ $json.items.map(item => `• ${item.name} × ${item.quantity}  ₹${item.total}`).join('\\n') }}\n\n━━━━━━━━━━━━━━━━━━\n💰 *TOTAL:* ₹{{ $json.total }}\n━━━━━━━━━━━━━━━━━━\n\n✅ Please prepare this order!",
        "additionalFields": {
          "parse_mode": "Markdown"
        }
      },
      "id": "telegram-node",
      "name": "Send to Kitchen",
      "type": "n8n-nodes-base.telegram",
      "typeVersion": 1.2,
      "position": [500, 300],
      "credentials": {
        "telegramApi": {
          "id": "YOUR_CREDENTIAL_ID",
          "name": "Telegram Bot"
        }
      }
    }
  ],
  "connections": {
    "Order Webhook": {
      "main": [
        [
          {
            "node": "Send to Kitchen",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  }
}
```

**After importing:**
1. Replace `YOUR_TELEGRAM_GROUP_CHAT_ID` with your actual chat ID
2. Set up Telegram credentials with your bot token
3. Activate the workflow

---

## Part 5: Testing

### Test the Webhook Manually
Use curl or any HTTP client:

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "tableNumber": "5",
    "items": [
      {"name": "Dahi Kebab", "quantity": 2, "price": 230, "total": 460},
      {"name": "Chana Masala", "quantity": 1, "price": 200, "total": 200}
    ],
    "total": 660,
    "timestamp": "2026-01-01T10:00:00.000Z"
  }' \
  YOUR_WEBHOOK_URL
```

You should receive a nicely formatted message in your Telegram group!

---

## Example Telegram Output

```
🍽️ NEW ORDER RECEIVED!

📍 Table: 5
🕐 Time: 10:00 AM

━━━━━━━━━━━━━━━━━━
📋 ORDER DETAILS:
━━━━━━━━━━━━━━━━━━
• Dahi Kebab × 2  ₹460
• Chana Masala × 1  ₹200

━━━━━━━━━━━━━━━━━━
💰 TOTAL: ₹660
━━━━━━━━━━━━━━━━━━

✅ Please prepare this order!
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Bot not sending messages | Make sure bot is admin in the group |
| Wrong chat ID | Chat ID for groups is negative (starts with `-`) |
| Webhook not triggering | Check n8n workflow is set to Active |
| CORS errors | n8n webhooks accept CORS by default, check browser console |
| Messages not formatted | Ensure Parse Mode is set to Markdown |

---

## Security Notes

1. **Keep your Bot Token secret** - never commit it to public repos
2. **Use HTTPS** for production webhook URLs
3. Consider adding authentication to webhook if needed

---

## Quick Checklist

- [ ] Created Telegram bot via @BotFather
- [ ] Got bot token
- [ ] Created kitchen group and added bot as admin
- [ ] Got group chat ID (negative number)
- [ ] Created n8n workflow with Webhook + Telegram nodes
- [ ] Copied production webhook URL
- [ ] Updated app.js with webhook code
- [ ] Tested with a real order
- [ ] Kitchen staff receiving notifications ✅
