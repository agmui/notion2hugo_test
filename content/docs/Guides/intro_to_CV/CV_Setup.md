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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WATK7BO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIGXEvyn0u3yyhNFZ64D7THxoLLUh6%2FW4jhQs63keeZGFAiBKu401Q%2FpGuZg2IVPEvpgWp9xSIOxlHWiz16wp0I5rOyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMAOW8k74cFKOtNDbEKtwDh%2FT%2F2FknjlV0A%2Fdn%2BSmdwyAMqZ0cej9pZdlqDQEviK7RLWKXbfbKk%2FevCXGW%2BSSCcdkcn0SjhTTH4Dho4rlCZ6BSZJ3AdAzhdEbLdCV%2BUgAPddCr5N3yfUVw11Ib00Kl3gVM479B%2BpjCLczEtXhF%2FVBHv%2FLywyqjZS%2BoqS6jSrZNcbtoqskaqkHO26ZizgTlT4I1kpjlduYkD%2BL1k1X2E4jyOY0bdNdMIkXmoESUeClDHmgC%2FjcHfKGtDazVNupDYGpVPjSo8OF2ohYwcF91NLlC53ihBoPzFN7ol3ZUzdYc5BrWJB0PNUvHCCYfCSchJ4RFe7gaU%2BBE7m4HIl9cim89jqzEmYw2Ijna4CJo1OrwY5vHQ%2B9ZFgApoKPkgCvirKCsoBhZgQTc8xT3oJ4mJq0HNBRq936oHJ546A2b3HvRZJgk9bpPZ8OyxEI8t3X7j2kZyqVlG%2FQYgw9KsKvadHj0H2wJCI7tCP5qYADooKNP5G31hqHIC7lD2DqY0Qjiq35Q%2BrbO8t6QryapLeEno7FEZVxZn3VlbloHRDdHWIx7uS5JRQFN8tM8qpTUacqHnbBJ3AJoGSYwp4aGzaBFyCM8cHu4kbpHfqvf6g6JBdlRSwpcCOjkWd3yiRMw0aSaxAY6pgGcg4gA2iPf1nRIwqRbqIl9iRNkbQvnP1IFJNN93H%2BR28Cr0Hw09aarZNAv1vi6%2FJ4uhpASIvbsSUnCR5J11u18%2F0cey1OxpiGPNOoTHBpw4V%2FTxSyUo5CYRoyBpVJ9gGfAAAgshMI5xlGVJJF%2BCSmyMtYoOOex9Bonzo%2FiZtFGnIG73SXgONqPv%2B84NXHV85Hgk1fVjqGERSKZYA9%2Bv6uzI3c6icPk&X-Amz-Signature=67682c024a240a9c4dc52f8189237798a8f5d82a80187829a9778a33519d4ff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSU3DHBD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIHSbo4SZ1xLbdmQn6EtZNNmcvUKGVREGeMafL0KB81%2FXAiEA5%2B5aGZrQt5mhrPOWp7HoI%2By9JwTePMpYSxNynCrXpXcq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLg4ey80a3VzcL6GHSrcA9tMWAxHfksnQ0Y2RDMcFzydp1WiE%2Fc5FKu2l2kuMQirrFstgoDB6LgEX3xgxsxYYXKaobkpCt%2BMnhOLmEwLegYoyw0RjycZmjdtetrMuz%2ByVakO2Mq9GFvslStTj61UpTMfvrdW6D06xQBVDOswZ8ll%2FmelpcsreRbZtRtCATt7PEKzuj3LjKKlM0SsqgLhhb5EvVWC7CVSEPP5x61EDNTiIMHEgbtOYT9v3ecG%2FuKblPpjr3HKhSfatzwOII8R6aCvlI9n9BrUsWCIKNBaXiZw7twaMbvxGV3Wm%2ByTJFfOHSIgx3tkrk0eadF59aL1Vg6nopDt3Bffw6ozn9mEoaeeXa62%2Ff71MVrU%2Fc8F7O8rFrz%2BVgvo6cF8YYczMLX1nWbrmdZL8%2BtMLphQRBh%2BT8owOwuBK9m0H8Ozm76G2gY8v5rjow1iyHsrkh1XjtaEQ5nWs%2F8lRok9VFl3rKoZTlTu0gzlERQAWLeMa2mCd%2BR9SCdZGfq3ZRgWGwvA8jbTvCNqGLLlFdf7DRpQF9hbSa78fB4uvXjRY4VG79QY4K75WK9bhxbrk3acBwq9oVKZHcGRXJJvJa8nZda6mQwfUwgWpJyNf%2FzsguCfcV5UdDfldSxOmn61zZDHNwBtMM2kmsQGOqUB3%2BQcxbXjMqGH1A5ZWtO6WazpYx%2Bk49vbT7VinUgU3bBcwlqwW0Jqhhzex1ooHbpHcIV07svcOXCPb0tTIsyRVKhM8gukDb9gI2RU0MizQPEctdZZ7E7vB88AkPMa5n9XxwtocnuQ87jgyhWgfaFWvMGeAMlgmE2o6s1FtVICYw5lCLmIZYtffhF4eHI6ZDB2v%2Flw7tZrcEHHAFOotoi4oYeouLUE&X-Amz-Signature=ae01ec455771a0785351e0c2487bfd2ac60189c35968aa7e0a2f01847a14db49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
