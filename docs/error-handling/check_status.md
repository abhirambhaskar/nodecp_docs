---
sidebar_position: 2
---

# Checking NodeCP Status

You can check the **status of NodeCP** on your server using the following command:

```bash
check-nodecp-status
```

## Example Output

```bash
NodeCP is running

Process details:
root     1420237  1.6  1.6 174380 128256 ?       

PID: 1420237
Running since: Fri Mar 14 05:29:55 2025

Last 10 log lines:
Log file not found: /var/log/nodecp.log
```

---

## Available Commands

| Command | Description |
|---------|-------------|
| `check-nodecp-status` | Check if NodeCP is running |
| `check-nodecp-status start` | Start NodeCP if it is not running |
| `check-nodecp-status restart` | Restart NodeCP |
| `check-nodecp-status logs` | Show detailed logs |

## Troubleshooting

- If NodeCP is **not running**, use:
  ```bash
  check-nodecp-status start
  ```

- To restart NodeCP, run:
  ```bash
  check-nodecp-status restart
  ```

- To view logs for debugging:
  ```bash
  check-nodecp-status logs
  ```

---

🔹 If you need further assistance, visit the **[NodeCP Documentation](https://documentation.nodecp.com)**.
