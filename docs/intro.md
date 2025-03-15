---
sidebar_position: 1
---

# Installation of NodeCP

NodeCP is a comprehensive web hosting control panel that simplifies the management of websites, emails, DNS, SSL, files, cron jobs, and more. This guide will walk you through the installation process, enabling you to set up NodeCP in approximately 5 minutes.

## Prerequisites

Before you begin, ensure your server meets the following requirements:

- **Operating System**: Ubuntu 22.04 LTS ,Ubuntu 24.04 or Debian 7,8
- **Architecture**: 64-bit architecture (x86_64) , arm64 supported
- **Memory**: Minimum 2 GB RAM (4 GB recommended)
- **Disk Space**: At least 10 GB of free disk space
- **Mail Ports**: Ports 25, 465, 587, 110, 143, 993, and 995 must be open
- **Access**: Root access via SSH
- **Server State**: A fresh server installation with no existing control panels or conflicting software

*Note*: Replace the above specifications with your specific requirements if they differ.

## Installation Steps

1. **Connect to Your Server via SSH**

   Log in to your server as the root user using SSH. Root access is mandatory; using `sudo` is not sufficient. Obtain your server's login credentials from your web hosting provider.

   ```bash
   ssh root@your_server_ip