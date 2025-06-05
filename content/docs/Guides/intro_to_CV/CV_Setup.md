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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP47WFDQ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDUn%2Fdm3O5ShS%2BW8OD24mQbgqMVKywL5MJxCn%2BmKuuPbgIgLJVGTXLewitfS82XZTEQ1gboRAEfTBuV0LpxCmuHUKQq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLHlj0emjSSLG6UGeircA%2BdCR9g%2BdES9UFAqbXXXxXWErby8Jb36cgtFHYZDkKbdGEzTBjWqPpZ%2BoCuepISRNKUnDWDKJjRXMyPLOJhknM4rPKZ5jSm74UDBpG2rDYcaSYz4uoYFg7AsBnCNLp82xhnRKqU3bLrKJtrsNOyp19y3UTVQ1rtTFoxE2HbTHw%2F6qGSroGfdNtAtIcmLlOb3aSGeUkRc2mCta6VWmeN%2Bm%2BaWCT6iKx9F3U1NGsptwZogA2NCmJx1RXDktaOmyWM9ZiecKVkx9Es1uQRV%2Beib%2FW3U5NVJfbRIkeE5K1xEjmk%2F2TeZLU4TFeP2JpR4AIWCUjN1EYwdBcdAAl%2Fp%2FDSC37hBWbdvOgpy9FYS8qqdMXL5wyPyditnz%2FAWuYrIl028lwF9Q45GlOeKBGh6Qrn5oDzuPZGzpyamDm%2BKw8iI5a3b2cRv12SA2Uo7u%2B%2F5i2Lkqm9JLNvreSdJyWY9unvphL7Ha%2BPNabtq8rUzOHanaeg8A29PwTYWQQh1QleXDQfmkNsPU0Dd37L4rmG4W7iExyoDuJ89eFjWxXNqKU%2FINmiPWbx5tXPw429GItfo6BL47xOOjkvwX5kT%2BKl6OKC5plsftUAiqYA%2Fc97sx4aR77qb04QLDE%2FidywoXVi8MLvnhcIGOqUBWn7inqRHecLFh%2BGIjaenNfhkCOJzHoOzilTb%2Fy87%2B2v6UCw29fQluadnDhF0y07KJS9JHga%2FHq5iuRdj8TWIR0XtM0lvP4GmJKcXDlrZpe1pqNDLVuqrtH2s7d0o4kSixUnQKCYzMt3HEyhRoNTOjVmmSFFfc4ksgVTHwUCrA8RvVmACRj5dynGtwecRYOcO0UCLP5BSOjySXzqpNn%2FhKiBb%2FyEs&X-Amz-Signature=a548cc0147a5195c16c7e642cdf672b22a22544605e1654378829c5e4f516712&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7AB53JX%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEz9nqdR7oyqU%2F83X2XqvO5sHoN9glrcSRG%2F0m5N83ZEAiEA3FuFJbX%2B5l7hF%2Bxzenf9CUDXpFAB4fBW8r8b3i0w6TQq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEYUHMdfqVJ4ghulUCrcA9Fi3Vhk6g4nSobAqE2LF7Knl4YXlSu2g%2FJP3iH4APNaHTSsS8CoD6EPVFJEo76dku9THBFgO1KiVN%2FZdy5ncfM97xtCTxq%2BHJ3mRHArDbXNwS%2B1ulPFc%2B22CXSefsin%2Bvo4IBy7F%2FO2k0zU7ubZYkEMOFaZAPZSSQqiPWBx57wkqL1pVVWnPa6OpJihefp7ifKW9Mb1F%2FpgRrdHUAi1n6JnwLBpqGmWS6uL4aLRfJAAfdMuKXsVouCIIPluTlNp9uHCy%2BchRYIMFV1xMHaNk6ojhji4Mjncr9vE1OiSwpDJV3qU%2FgZXWqR4fWUs0fQsmpXpBAivpOWFSPqDaNsd3eEn3lsgsYr5isWWZz2SE7Oy4IcgpAR5mDO1FVd7UoVzcq8Tg7gNrSbqrUToYmz8MSvtepF40yrntG2O4dh3ycLG07mRrSJAy7%2BXXd%2FKSnq2jZ2cIFuf82SlBShJtwcWBdNODbm3AvNt6p%2B%2BqYOkSiCaVsZzeH7kHkyV92nm1RRhzzBNXAH5Fty3HF%2FHOQNg5%2FC2wByc2V8XxOZ8FIcnejtEQH4UzJ1tr11FXRfCIQ2JjD5gRJEf5hTGr0p4mexOnMXUlO89E1Ac1qbEynD5QvUX8mhRpT9UC%2FZd55swMPfehcIGOqUBw0PQDiOZkigxBD%2BBoKcfiPVgdnw%2B3A9ivmLPsw1FGoICFyTJqCJyRHiO8JYkTWNmODmd9ExjMfOBb6lqUC5OdgxTRBXXce7eFY5Z%2B0v8FpKnQsbt%2BUCJUVhvNVfonbrkeUxgmvcb0j57KKqT6DA3DJfDT%2BwdWbvYbJqZsewaC%2FNnmY3Fsz8QQkxjojFYne4HTs68MR7jgA6lV%2BJqmxw%2B6t2PUi%2BX&X-Amz-Signature=5cef28a74b96c61aeab10581aea4d51c317abfec9291128a19af633a98ac9f9d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
