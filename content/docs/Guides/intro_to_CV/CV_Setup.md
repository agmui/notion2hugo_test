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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6RLOD4G%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICv5k%2BTRT6BHw2xXLs1%2B5sSQgLpN98flMm%2BKsENBIwguAiA9rXKRwRoEOaNn2nGEhX5m6xwXQmw2JTIRwE9nchjyDCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM85pjXBpSezNXgqEgKtwDWomBQx51cfEW32Qs3n6qD%2FkdyQOIf93tjKxUKIKil60vFZ5Nc%2FqHYkG5oJ7%2B%2BT2O8C1HHSUTTj1UaR5RxgtQlVbMDZwa8qEQTzi4fsr2O%2FwK7z33nLwxbU4uO5MsMSdBKVMOwCqxlOn%2BunA2GJDkDlsHCrOazkZEJPyRCQLGTwNXs%2FxXj8b9p3efQwrPqV5oRsdhl1pP9irz%2FJ0Bzj138VdLLYfQZ3pOn%2Fz2ae5diPmcCtdGWTv%2BVUHGeqoUYZNx8Vm2BLv%2FEvbPLMNMooS3yy2yfP3EfJes6Txm5%2FXq9q4vgqIYmEwFDrvKvohKyvAcUd9XC3NN1Xyx02xvhDCM61aTXbpCyCj9Du6hEXEgiy4aen1dEz706qgsLKW9I9X19%2BXkuU%2Feb51w1wCNYA3re6v%2FzYKpb2%2F4qsNH4xEUF0Vwe6a2nGDy5B%2Bs7%2F3hDIsoZG%2FIY27eVV3jgdquddzD9KEkWqncalpaLoQPByNHMcvO0F77M6SqzqHbvzBCybAZU1buGc1sQRJ6Lc2Ug23assLgzWi8ZcF877bmQuRN78GmPKsjEuZ7mTBJTVFZYrFx35NWQXMJLKi2nSWOUaenoDHCjMPihk6gY7zUnhUnsWlet6zMXAxlhC%2BbDqow0bTpwAY6pgGR5qu6c%2BDxKae6RdyNSdmZ4ixbCTAe9COHqnO%2F88Gbk%2BYaW4Rf%2BUVPq3IhNp4UYX8It6zmSZ6nsjGlJLxGvlHdZusTxTVL%2FJ4HlsqugaiAfx1v%2BA2qdltexpKgbL2S2bkZWAOJWzD6GNInzbBeBIHrxnGm1y0kbji44K3zy3Z2ZeVdFLoqG4epHS2B%2BpFihshBGFE09PiU8aHs0XNviQgAntgs8W7%2B&X-Amz-Signature=6ee40e61407940fa8f3410254716fe14271d38e86f9f22320f4d62810fed865d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL2HR2XB%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKntVAI9NeQQaAkWR3EcpE7VCK%2BvqzWoX%2FoPrLsXfiSAiEA53MKei%2Bzo%2B6eS54kvHumfpYMIiA0sKY15%2FYmp%2Fs2FEAq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAqsR3HJHqWr354eCCrcA4dWpXFS8fImaH%2BEMKIlz1zgX3oPc1MsKjjtWzIUfGx30X7FJopeCllUM5Rj9vNeNAKWUAhiMs0aKvgDr90zYxqMa3LHdY6isWWFGq0W8P3KxC8gkxlSIpFnGe58HBOTn96fkr7zbObZOCR9IHCmYAwgyhGtznaEaZI%2FDb1cuPGG32tuPaQYV6pWxX0GeOkgExwkFXewdmDDZen39lNdpgicxjtjwKtZo%2BL4vidEKtAHKnx82EXh33mWFKxfN%2BkaYpZXXxpk6XB%2BLU9b7C9pEejb0JZ53sRM6afuqnJjl0N2jLtvvkzaDc893OEgk9kXbINCOhJnJ4mD1UVTDM5VpwC6I8A4P8Krnp%2B6CbV%2BG4kJz6pdm9BSxVzmTBR6ETnE54ns5ARZ0H9Tf9vydNs3gsWTIkItMDlHQP9f7JwqOioUVyeiqejF2Vn3EDd283UxKfmFQ5cztHRpQV3FIZMiRtzL1VNIUJ41C3i1PBcWBih9ob6mwIJbJGY8v9jt04UINIMpQtOtbnGPzFXhgDZtMBKPnnD91LcX18BcY0k1XwLTc%2FgmzWYEQ9TFy5%2Bb7zFVp7U8yBXDOWHyHG4oMR1nt3xyfuQWL1X%2FlerICIkvBQKpke%2FSeKjf1DZ8O4qVMOKz6cAGOqUBWpU%2B6uFAehp15nuINCuNO5kvZ%2BprBmCMm0ig%2BohCFPYhTNsCVX2YUHvRWyQvkh9IEpl7MSpFDtrhO8icIyGIceW%2B8hLhnYFeE5P3cjjBoMXrWbXpgWcD26LbuTmG4%2FK%2B4S6xjsxYaWlgbSLljtVzrIQJcLqyeru%2FPQURwW1pJosUl%2BgRpf8eDh9HiaMyPQf0n7bHzPtP2ZHWSWeMEm2AbmEElkpi&X-Amz-Signature=d9231f5f7711830268f41b885d650a523b13e3ecc9d1f30529b9d51ba8e75bab&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
