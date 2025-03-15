---
sidebar_position: 23
title: Admin Password Reset (CLI)
---

# 🔑 Admin Password Reset via Command Line

If you forget your **NodeCP admin password**, you can reset it directly from the command line.

## 🛠 **Steps to Reset Admin Password**

1. **Access your server via SSH**  
   Use an SSH client to connect to your server.

2. **Run the following command**  
   Replace `username` with your actual admin username and `newpassword` with your new password.

   ```bash
   reset-nodecp-password username newpassword
   ```

3. **Example Usage:**  
   If your username is **admin** and you want to set your password to **SecurePass123**, use:

   ```bash
   reset-nodecp-password admin SecurePass123
   ```

4. **Confirmation**  
   After running the command, you should see a success message confirming that the password has been updated.

## 🚀 **Additional Tips**

- Ensure **NodeCP service** is running after resetting the password:
  ```bash
  systemctl restart nodecp
  ```

- If you **cannot access SSH**, you may need to reset your root access or boot into recovery mode.

---

✅ **This method ensures quick and secure password recovery for your NodeCP admin account.**
