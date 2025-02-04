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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U6WP55D%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIE%2Btu4EiKpVoZxc4c1MlM%2BbkTkxz8SYiPBs%2FhNp%2BIw1OAiEAxD4RhbTZZHnMlt%2BifvTyojfGh2OgeMffVxrPtn5v6Tgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDFunswLnJoROQo%2BgkSrcA1iLx1TkHuufnOXprq9Ehxeo76HXAObD0bkLf4ocaHwcsSjKayXDbK516Nd8t8f%2Fj4GSciewKXraBmFGDqzingQBoDH8ofwVheUpv3W5HdefVr9EWCRbRb6fyf1a6KN6FZTRCSbi9QPJ1Do1%2BGieDzThHqQRsKq1jFaP%2FMWZoLNaFDmmqY3v7d7e6FjIh2Yrs6CzNUHQhJztdcOKZ8%2FkqqoIMlvDUZCSnl5gMBf1UBTgUd2mQtzAp%2FQnhocl5FEFMHziZ1kQl9FWrdg3bqk6DzRq7zDbelFNTfUb9Hkd%2FXy0qH2AcvOjZTzM74l%2B7yqvlwELheE8SR0vHpXdh9%2FD%2BpB1o7Wk%2FCnWiuffYxkV9d%2Bfr10eKRgMRz0lYg7UtaJAalCNubNIwfuPg93H7mn72y0EelU7BwCJ3V3pfUnIo3%2Fqc%2BMhsUyhKNieVFK9e2fl4V3WfZrNWJdGvuUxFrcIFjr9pbYUWg25TlhYVep0UMrvBHFDqKMRNrr5hCCiwyKqibl%2F3%2BABZqhU7TUImlJcWEBkVj5U6uww3NT4%2BYc54x4Pwd8VyrifeE49VwBjAIbXI%2FT7eaVhM%2FZeVSh%2F3We3RFIVWk8aMatnU5HhDdQ86rXNCd7dLmPo2snQiURmMMPLh70GOqUB4l2pir4Hj2a9T5aRUc6d0EoyKZbZShmrd0kYjXeXvP2VD9hICgeovNs2jDY9oaGGj%2BHhExqYtRAjR%2FNdgZi%2F1HbFmoXAvtCKrA%2BG31W8O0SzuQQ1UbXI2CGelCsfpjn%2BfUasqRdkNn78nSI9qFZpMsz7Ql5xcyl6wd5tZi9xRBXlPhwonsL%2Bts3%2Fmj32RCaVFtQLTvGob9aIxoLF1ETIfbIp71Ed&X-Amz-Signature=723f83ae3dea5fbb0743bee99982c10bb9c73048e7e4376b60e13e4e252f8e5f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZY4AUZE%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIFZMAG6ky5w1kYmKN2hDR1umfn5WO9wxYlwdplFDulTlAiBKkkHgUHpYLdaDx5YTOi4GDpBAaGRk2n47ol4jIXmyiCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM6KM1XsjwrjOtpgO5KtwDRS4JXOt4cQYj44H33GglpwS9MYU8EcYSPv9DIRGQElWlXXMhQirZlT4HWO5Guq9TTfwluQCuQ9KGNL%2B62CKEu5W5c7ZqvO%2B1RJ6GcRzB8Q5SFLi54WgCZJEiDDpqC%2BU82QsYpVeng0iL1xSHCGgi1h%2FPY46ZcbuRj7SZwWv54ryja74pwzABMS1i95oGLfQG0AubtZozQNWN2Kf6SWmAmUwdWOHDtnTAbTW6ZgETAu2tkv8OmIexZs2Ld5bKuauX2zwnSKIlQRHQTirU8A%2FH%2FhB7KbsdqJECnDw3m2juJYQFZvVTt2nkwE4jOGWMjpgpZe%2FxGPhX1zO%2BMySeUEhOHboUSkcnxQEnl3Q%2FmjZJND9YDi7VJLMxO8vgLhH47CbB9zYHX5xuijxTqpbyqhFUjt2LWtrV2aVS0D8R44hGyCcoLdoiMsYrgFCV2mbZADz8mU7Fzsfg37hTs4Q%2BcU8YgbjFX1VP3V6sMmHHayMPKFvdxpKyPxKG00XNkWEfkKBZlFXXRaXI5uzlAvuoIfiugoKCwmu23DBJ%2BShXdnXJ1HLG7Cn7up05lPSgShJg986xhoX1YH%2BQ7khYg6KYJx0crAhje9XnJl47TtkanT7AAo3w1aoOTawI5GXxhEUwnsyHvQY6pgHeNlqXvw%2FEkvo9GneqY7E2%2FpEkaVCrPzW99d9VsywD2ukbCLPtfVRjh09ydk9dgE3Ev9Q89RsFHUGwi6f5Dcje0eyQe%2F%2B61ni4alxC8wZfErWUJgLkCYtvHcQt9nPzVpjk5iUNIQXHah3h8u0YiDXEmCXgWD%2F90%2BWr6tl4rQ8W6YwNCRXxPZckHuKLB93EaHAAYnPBKD%2FIcjoGki6AwRNfb%2BjJ5HPK&X-Amz-Signature=5045020ebc513470a33970397beb2aa43946bddfce4991d7b7aa66f4ca8c12fc&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
