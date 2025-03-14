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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E3C5734%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBDExXlFfcAJn7jopFw9UyisR%2FHS4EJDb9MuOmUTLeUQIgO39V9B8s62JIzKGc66m0YfyPZ2Bd%2FXUsomEtbmYzrswqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFFcJk1JydrbBx8NyrcA1IlxOJxuWNG23hiiFWDmoXGDabPbCDNFU5Ysc%2Fd6qcVmETvoDMpXUAO62Z2mrlYw1oP4Av3m6ROw1pweuxoPWt4AdTxnXpLk8mojJ%2BQRWpo9YSYfEW7y869pxCSu63o6qlHmF%2FKgxnFFIWPWT6ntCgWpi4IKMTiwoyFMVaOLHs%2FX4M0rYPQcr0pb0%2FgBHLp7mKU8oauzdLR6p4Ax4N%2BooIirVym6WbTKsskuNCUFCWPE%2F9X%2Bj8JFya4s9dPgbzyidf4%2B9ZjVBYvpBkjltwMRL4Vg7TOICxNJvY7rkIhwUWwm3203J5HRTLGnUEq4jD%2Bcyb%2BRr1rOhy978DgjgmIgx1bEX%2BH%2B6V3eHfaUfmgbcruMXT%2Frlrf3DDapMSqCe7Iqd1UoI96DWErl1BzQJ7adCUoU2%2FE615%2BnwCIPsrb%2FjaaQkAA6qx8JL5ub%2FrmJ215DwOrFbMWfFC9zQFdkL4fMre2bxeYtpdiCSLebJ6VwPC87wcFyb0%2BERbQ%2FFNEbHKF2NhrnJep80T5CiS18pdSnsnq7IknWgmeho3gXypW4Srml2MEiYuaPDbu6fuanuecncK9pRYnbns2sDwxQpOHFY96KmMONX71CqMMucxDZDlnyw3DC812eT1ZqDF1MIK50L4GOqUBYCjCwBXk%2B2MoI5BG2IxdD80Vy6wvrBO6SnGE7xPalTV0fShYnWVAqTGNo1%2Bh7o1eEO4im7s5QIXAI%2F4GPUUDZ0ay4Msaj0F2ohkskwG1WKroY%2FXZqNPKGX1HRERiQ2Kfzo4ce1M%2BxDm%2B%2BQBdRVgLdPriKlEQy6Oqp4jmGgHzATFchEDlXLGnWc2nGWkZNtQvXUiiyYXc%2BJuIz7nk%2FzkdFTPdHUpu&X-Amz-Signature=bbe736e68696aacbbc5242a69625b4f385c6d5116944a4739ad61a5e689ee311&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS7DPKGV%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYzVZGRZmuWy8dfeEW%2FDkgVh%2Fx%2B2V%2F1Vn0ZPUvhyRpbAIhAIGkBphAh%2FVl2ZamNSAnofw6lMai23yi4w%2F6skNs6QpwKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz08bUG4n%2BMKuApy6Qq3AO9sh94dyBOcbCY%2F8oyXfqiu0jW6aFzLe5y701lhO7AolIDa7QCDxoiwrO4Z0D5hnV7ge052H5UDjozhrkqNSX4WDa62IdhFUUHrx2ZLSsfxhYSVMszuW7%2BG8LfbmFx2s1fxZk5UPHUS76ro5xcBlvov1JmbuABdhKgW6NEEtgk5TUDNXJBUZFFK6uWrzqKwjWUE0LqhWwqRJrnj3koaNuzFz1qyYDVRTpf1HpAX0mnIgTj4ruy5Rd4zY3UZjUvmqLj2633AJNL4EHu2tM%2BkSrj2e6Ie9tx3bfSA05y0AiUWHR3ysFCku0lHpiG0kHoYYx6hd2LmfIEnrVrgcY%2FpRCngIMuunVwoUqLqu%2FyQ%2BBQ1HJ6lsj%2BvLSWOArqNZJmn3AmxvfytR2weQbncFjGcU0xYGgLWhRLJsMx%2Fuxg8uo8HrLf6gmLqkifC5eKxJ7LOJdnmV1gYb8XyJRa9KktiqHcrvCWEUSfnAdzp9GHbRbODOOibiYezIru0JXgtZJ7ZYBRt0%2F2XEq9r8f46%2B7wrKybACN9YLWdUuxjSrVKjlVnJXlicQqmdypJsdyTTIUNwHPjKT27v%2B8lxSMs6oY%2FFx4ZNQ4o4ql42IbUUIjjZ8p5SAI4QPnFh6foBrf5jTCDv9C%2BBjqkAY%2F7jaxs6cUGEBTysX%2FjgU42rw%2BKrKTxxoidTcHl8xXSjbXpEFCezYsZ8zt3rzOoAJSxZ9zQC7BcBAmS60RIYuU5Z7F0OIp7JMP1xg%2FqjMRLI%2FMqdZmFVj9ynNwnaztos6iIM3yxnN9xSivqSYDFgdMkwVGSQ7h%2BgIPjUKeo%2F3p0dHhCVgm11xh2HOv3OTZ6lPBomSdO1JLyhEkumHxldb4MbXWC&X-Amz-Signature=e63a742658973d453f391e0b5e350f989083518b24a314974cb70e181869ce70&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
