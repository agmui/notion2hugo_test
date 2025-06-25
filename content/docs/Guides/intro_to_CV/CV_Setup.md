---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2024-11-03T22:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2024-11-03T22:06:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 161
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

[embed](https://www.rose-hulman.edu/class/csse/csse132/2425a/labs/prelab1-wsl2.html)

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHEUEITO%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCICZHObEjd9uskVpgtXj6hbtmRiPK5Txcn%2FuFv4qk3%2BtvAiEA1Cxc6GUOxM3TapXISZ5O%2BdjbBnncA8f1bd4Mm8WGsmIq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDDhRzmjYGKgSCxXSWyrcA7j21CjOgnREdvSfDEyhzQB3oBXGl57ECJMnNy8Fu3Xb3nft%2BQItqxFHOVts9kKhVWf%2FexZIOHWrdSM%2FC4jNPfHl1VSRdtYy3Kp2ReI0k5GgjqanajmCfGEoFY8nfBuVAiw2WNIkEX46o%2FfQpgvpCyGtP4Gx%2F7EC%2BMmFiNbgxEB9C0l2c9LKYsmdXw0awgoCK3pFz%2Fhi2Qy6nss%2F40saDRxCUq9GUxwzHbdLGJGhaZYth8%2FtqLXx1Dry8DowFde%2B3OedDbbBYbGdZLsNgF51kTOcHzK%2BKB%2FDDSf2M6WaVYvqq8TD4ydMmUUdYKwLSiJMPFMtnQXhtvB%2Fdup2TVRd1EPTc9vU4cbgJVpgIxVWiGiD%2FjKaZ%2B%2FvQUTN3aI9b6XKZtDM%2BTWwvIdhx7K8My53PmsJGIgHSc9hcHBUWN5nMmplf7mWfg05L9LMyiCU76yqS6OPCiHUFnZmh1%2FIY20%2BoV3192tAu6cZAG5D0ouJ5uMSdwu9n5epOJiEqoepoOJfr56gIYDCGKtinGnyuxGwYuCIDmGujDeqhIzcKBjXZGu%2B4cgSlwDYY8KtrhXhptIGeHc%2B1n0yYtqAzgl64iIJtW943DT%2BYqB29SgeaubD4VYkOgAiAcMfuEdC4s8fMJOm7sIGOqUB%2F5fOEHp1rwgvBRMqJi64C3UirQysMyJbDnv3%2BbHxJEvs8oCgqFUl%2BTZu2RTuvkdInDKEm8zEJCTk1vTS6oLIYbZuAGN48kYJdkgKeBl2%2FsqSI0EEPmLKyj4tRVvrBsSrDkeQqyuaFxGssiHFAXmWPtBc9rDgHSaZWNZu9BAbI2sMlIJrOfsU62JuUgv%2BxbR%2FKJxLzMYgrTtForBNS9REUuESnoEq&X-Amz-Signature=67dcd4154fc160c697ad948719b1a0f05f3b94a9dcbf37bea8efb23408cf24fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- Get people
- 

# Cloning the repo

[link_preview](https://github.com/Thornbots/CV/)

```bash
git clone https://github.com/Thornbots/CV.git
```

## install python

```bash
sudo apt install python3.10
```

## installing `requirements.txt` packages

```bash
cd CV
python3 -m venv .venv
pip install -r requirements.txt
source ./.venv/bin/activate
```

### Open the repository in VSCode

```bash
code .
```

## dataset labeling  

**TODO:**

# Running model

**TODO:**

# Congrats! You did it!

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VY47YRF%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T061414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQD7IgLOILG4xQ5YTgPBuOzVlAc51lpeMiCCDKzXQvjoagIgCzwk37QO6XGgjsT2%2F0S9JkKyozrYSK%2BwfTw3U%2BjUZ1Iq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDM5V8Rv9xXMLicx9VircA3tPSdCIdsVS3ozdQlFh1fymn60I6Tu4dHDdFe5OddJ6kbjE121JoIuzOy4tEDNOqv2jnrw8gk55qdHIoLslhTAO%2BzgN4tF%2BxirkR96f90NaNW%2B02oLTqTYG35ReVarRf2we39FlWbXb%2FIZaZEItLnBN%2BBlMS%2FbcYfEKEo02s9eO1HwjwOE7sy1eAy4fxDmagaH4TlLoH4rjEmzU2gmnXbyjWbvFylLUVqwJPTtuIbKWWRL03f1rCqkueuKdssRoKyBDDaJ6KKumKXicFG%2FC8W41gDQ%2F9kLW10iShLU3BRQFNclGcBML8Fuz46eGWMYQNC0PDOZhHPY0GK8iyI4VgjcgTu20Ci6iMwuzdZVdOzKKoqgXu1O6iLf4mnar5VSyOacuuOCyHUwVYTsyITBvySdW1MKrjm2D%2BHLQCtzoK%2BR%2BM79UbUUJ%2BD14KPFtQFeeWUEEgx%2BN89aG7T7B7h%2Fd8%2F%2F5wUfxHL%2FgkwTgUGFNJeRAXjN9TZhtTs%2B9RnWidiVRm9M%2FDZCnNKwCPpI0X%2BYfchXvcDlb75uqipOfChPinaQfNLieecu2o%2F3fZhvrQXjFXeHZE9ZiqXstNtmTTKrX4My7GH%2Ffe6vXkardmUlf0AeN5eT74Wk50gebpo7xMJPD7cIGOqUBVGlapDeoXKE0VRpfUEe8X46uxdGGZX55t%2BILGvzgUjgF4MwdbVeVtf1GdLAy6XTjzta2gEmq6tJPANo0x5E5f3ZTLEYZhJLeqzTAv%2FcKcYZbF79ZGAHtzQOrVVh0FOoeVr%2BxaVkk7trkJ0PqTisrzGqyHcrEHpNvsQMo%2FDUuF62cA6%2FR8ec7YfTWbnAZgvEvLtQx2laL3DLMmOkf%2FG92Y%2BlL%2F9Hq&X-Amz-Signature=02355e056bd55c4a931687f5518e0ef005d031c94dfeec335cf18ce30e822856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
