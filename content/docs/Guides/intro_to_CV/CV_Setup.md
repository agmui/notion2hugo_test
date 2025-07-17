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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTXBQNQO%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIDHvyCgj7TG48e7n157uc2yd4J1t6eduB%2BzKhsOCv0rnAiA2h1ce9x2hRgMbacQUgNS2Ye4B0CJwvyZySLmtCfQuvir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMRaURxuas1P3SV%2BIZKtwDSZqaXjPmfiK%2FJQmSe%2F23mKqhIRsR7HQMz%2FzWJxanBfnscpT61cgPsefC6N3P6CKktSDEo8k5rG15gazKTX8UDpZGk3wgvXD1p3n9FW5MbRQXpSpKi%2FYf5nWmA0voQ3TE5e9TNLyVn2vYrNoOdhP8zjckRvhotf41wUmqMilThJ2jGtajrEUz4Ymh78agpgzD80UqEQLoy8spi3LTKGdZ1Ff%2BPO%2FB%2FUjQSovGoYHbHIFIhyV200%2Fi6bvhjUJQC17bbcbEa1C%2BsFDS6T4JZ54TJtlEtPUrYoYc%2Fi3kqNgNKWpAs6uCCA0eHLGqQMOaILborxZLpRYvhfHr15%2BoNHcSBZv6jJGxTUOHHxRw%2FbkO3RDUSVcXNlFgxVtUI%2Bygn%2BkWC12haApnGFLEPaqUQpwBjw6DmtYz2uGzGbt5PZL%2BRhmXZ8E%2BB8LIk5o8r6GlV3xM9JdAzjyFmlM1iX9tE97aOd%2FkFd8l6LXZiXyYN10RSgbHwXiu7RbSeW98NNfP8mOOls2FOJJZq0xOO019C7Aa6CBRqJYj89G1vb8P9Ef4zYEM5xX0MDfPT1ltWGJWCSwRJSgENfq%2FGyKxm%2BAJzviRMzBqs%2F7qcKGeL%2FlET1JBRsEzZCZqgvRGC7PLc8IwwMDiwwY6pgHGbRdhfg2%2BX8Nv1eXPelLO0JG4Ouc3b0%2BF8szwIvB2LE4GSFeoTDmZXllI6s8SNo0AQ5c1JEaUhHWIyvLnkIvZgIhDflilLyV1%2FW%2F9wkJ1p6uiJpBbJBUBrZlsdknjhPyKWFSL%2BT5sHpBr8z70hnuZZQrFBcijn1luI1A1cdqDIeLr9hhYl8EWefE82t18oFsVSzNQ7kh5fDlKQq0aNRCNlEf6Qymj&X-Amz-Signature=ccd78adea1830836c13a5384a84ec4d4b38a27a8ad2d1e21f883e175fe6e3752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYSEETQ6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDAzuUPEMtr0Lq3QBU%2FcPIB3%2B%2FVZMvDHYqt9H7fD8OsyQIhAL9a56VcwWYl3UaZTkZjK392fQ2l6bbYOweUJgub3DR1Kv8DCHAQABoMNjM3NDIzMTgzODA1IgwaTRQair2zQ%2BQcahwq3APovdNR1E1r2kOhg0%2FrXwWTa2epFwrS6Xb4G6WJ2c%2B8766syc0n0pKwSWPUpBrakzuv5PnYlixdNYAvB%2BhQdkj2O5jtNA9XIQ%2BqFGVE4sRwoKSe6fCUO8WwUUu9pbv5LqQS4RQEZYe4vPk7Gia0vzkzWuruVLrKRJO0qtnrfqeQzJ%2Be2GLbCHyyyM6ggVMAwUUaTIMvzvoYxYD9IfgEGMO3tyZ7UIeHdRefoAh1h4qULGiD6kqGs9LjfiL7yFYF5WmKe1s57CwFvVPeY3nw2fRPej8OgJhq2LNOPxFFPhUeT26CBJ%2Bt2nEhfdJgW3VI%2Bg%2B1OKGXLrdAc0fvYqeVHw2NzOFot4sTHf0NOhDKvtpz%2FtBOY4Ilg5BeyUAUIAmeODlfEv5ob958d0%2FCivnlVN1U9tbvUocqVHl0zc%2FFlOoAK1NTCNHh%2F3abxgV3jxWOHf%2FIOo1Q6QE7BNBBP228gxb2j3Uj6gr%2F7WwFQ8vKIa%2BBXNJcpB64YNu6BoBtGFNLp1jxMOqR1hp6K%2FOiRuxgPGNG34V0ouKPAH3e9wpK4YnAteLULn92B%2BcVqq3yV66CMy08hs6qedpwK%2F5wUax4cNhY1DIWdCOBanC487Z1rqK%2BtCkXtHADZs6hX6bU0DCuwOLDBjqkASTeEAEDFFUSqVMcMRNWCbVZ8iXSH%2F5EvnuZJ0IahJm3I5lk8KROfX3pBn1P9FUCABE8lM%2FN%2BCDPAiy5PVdQTQ63t5mdYUR800FOWWd%2B4dUKY7%2BCUHx3xvcAl08MN2VbMrDllgzJb%2F9uk%2BxfgUUgU86a%2FurlFS2WEoKHnYq6K5%2FPXv8fnNy5YqP1P4UYAaGp0mmgEMx6sRx0Ychr8EUCpiK9AHsL&X-Amz-Signature=0db40eaf0031851ae91f63e0d39a3721854a9014d9499a0ece1f8a5c8bf8ed1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
