---
sidebar_position: 22
title: Manage Two-Factor Authentication
---

# Manage Two-Factor Authentication (2FA)

## Overview

NodeCP supports **Two-Factor Authentication (2FA)**, providing an **extra layer of security** for user accounts. Users can enable **multiple 2FA devices** (Google Authenticator, Microsoft Authenticator, etc.), generate **backup codes**, and manage registered devices.

---

## 1️⃣ **Enabling Two-Factor Authentication**

To enable 2FA:

1. Navigate to **Dashboard > Manage 2FA**.
2. Click on **"Add New Device"**.
3. A QR code will be displayed. Scan it using an **authenticator app** like:
   - 📲 **Google Authenticator**
   - 📲 **Microsoft Authenticator**
   - 📲 **Authy**
4. Alternatively, manually enter the **Secret Key** into your app.

---

## 2️⃣ **Verifying & Adding a Device**

Once scanned, enter:

- **Device Name** (e.g., "My Phone").
- **6-digit code** from the authenticator app.

Click **"Add Device"** to complete the setup.

> 📌 **Tip:** Save your backup codes in case you lose access to your 2FA device.

---

## 3️⃣ **Managing Registered Devices**

### **Viewing & Removing Devices**
- Under **Registered Devices**, you can view all active 2FA devices.
- Click **"Remove"** next to any device to disable 2FA for that device.

---

## 4️⃣ **Generating Backup Codes**
Backup codes allow login access if the authenticator device is unavailable.

- Click **"Generate New Backup Codes"**.
- Store these codes securely.
- Each backup code can only be used once.

---

## 5️⃣ **Disabling Two-Factor Authentication**
To disable 2FA:

1. Click **"Disable Two-Factor Authentication"**.
2. Confirm the action.

> ⚠️ **Warning:** Disabling 2FA reduces account security.

---

## 6️⃣ **Using 2FA During Login**
Once enabled:
- At login, after entering your password, you'll be **prompted to enter a 6-digit 2FA code**.
- Enter the code from your authenticator app to access your account.

> ✅ **Multiple 2FA devices** can be added for convenience.

---

## 🔒 **Security Recommendations**
✔ Always use **multiple 2FA devices** for redundancy.  
✔ Store backup codes **in a safe place**.  
✔ Do not share your **2FA codes** with anyone.  

---

🔹 **NodeCP ensures strong authentication security by supporting multiple 2FA devices and backup recovery methods.** 🚀
