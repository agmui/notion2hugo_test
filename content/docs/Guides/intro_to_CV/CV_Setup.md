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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YUOZU57%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbqff3QDxm%2B%2FvFVEuRhoMnAcKhGNjaC8oN3Jzr6JpmWAiAJCwIYFxuTP3yb%2FWG3xMD4Fi0liIw55DE6ozHKsFVwCyr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMW810EO7b2qylM4D%2BKtwDLqDzqnTjQkezFXt4kM3ZIqQGHlCxv6u%2F5W56BvDXLXIkNFqXhirRVEigbdutN3hRHUk3Q0tOPK%2BrM%2FikrltIlZECY3KRWxsqjPUhvbXcEOgdhVVDmnbq6qkvRaBWOxnXuHmfLxg8bfKCGjT1LupUx4XUmubbzye%2F401f5Jg9ItrD6iRfi3zYOlvRVkdLfuwrMl4vOjKt%2BmT%2Bj4%2Fg0wdJpjeHMe1uDc9n9tjUqvxyLCcf77wlJky96mgkc0ZjYZXOa5eZpa7Hd0J%2BD4pTjnlXAeeVpFmwGJsOYzp9jHwXFosqlLMVtqLJkmU6m5oUyT3xaLAevVReY%2FQ9X0uLy8tBqV2w3dh2tRyg%2F1M9pZ6nuvrlgVTBy9uf3RCWspf%2Bkry2N8Hj2R15AmN4uyZnoBxBCKW7aWn1MlF0XeTca86YrZ%2BNiMP7q1C3WwYFwsAedOaFdzqw%2B8ekmyiL7rHBEwecF54yULSypvM7nE9N0BtmOI5xVYuZZNY%2FTqD0gpZAElIV0EPRPgeVhqbcafpUwySCenhUL26hScnF9lSrMpuBDl7zxEX4PuzLQ%2FcDMWJ74EWmq2uvpmgquiFqY%2BAPmmiClr16v3nm%2FeU7Mua%2BSplF4QRSY9JtHIkpK34jef8w7fCmvgY6pgE9pgZpn0ZFWOMO5nhOED42fE2ubKE1IoUZU4uGIjU4suzXiww4Zw9XVPrAVP02nFD7tJ3Dv2qJswceeVnMd0Faz7WETTa%2F0bp0i%2BnqzIzwpoP6D90eF212TcBYecnTsuzWApegipghtjiPsJ7HSKzITrXWo95jFE7DKgE7XfogH7dgI9k9riClZHC5sGjE7ru6YLTHsel5qIPoAcLnN8S9f8BeMejT&X-Amz-Signature=25974a279d4a9e83aeeb55ec4291f90ce11495d8722078d4a3e8862bddaa245f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXT3C56Z%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9f9cJTUZLaZVOSb2BztYyl3iCTmgh3VQ0PZz%2B5eHzkAiAJ6iNlhCQN1wMVTaibTChRkmgrpx9dPlykjkv1Wzx7qir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMU3hPjyCyf94PoWI9KtwDjLlppQBOieB8Rec2GRbFFLp0P1ivQDzc6cOt9ccYPs6BERrK9rWLf0SVbzOcR0ELmuIKJElvCKFIpdH3XWyBHwJXyMK7sNxW8wV0HjT3QlJs9GG%2F%2F6PM0JRvGZux%2BKjNA7S8sPSab4UnSKDox5KJIuxkcoBWU9POXl3HJP8dtxk9sww8Q3amYJ%2BB6p%2B8CVISD1jX950KATmf2iljaNI2g66yCfi8B%2F%2BEaON4v5kVqJnnT9eBZvx4t02Ui4CkJ5IhxdQn3Zf%2FB5wMIvl5fmaLakgn8tUNMhqFHYpU6zDaoK543U4we6lRzenxmK6gLNQe5hvg0VmkD0q43G85GbXadGptwEwVEmhs%2F2DvJ6biSGexrlqLT0tI%2F5WtkX5%2BJJJt9rokuEQHQVWHbrDwFzai5mBF9lTX%2BJHYUwhihecMol0ZuE5%2FI9Ap2ayhk4WjPZv9%2Fkh9OXksIhZogDtpHN0d3ziVxtgFtdmt%2B65v0rRkmD9wzD9EPaJVfj1By5wWl%2Fcu4Ucj8jQrAy2qKGL9Og14jc8H1%2BamKYLOBnFC7UwlcG%2Fn2CtvOMycil%2FfQYCuVhEgA1SuVg6Q8kY6lJVfp%2FXWJai7e9mrD5cxcDBolq2v6v1T6TNXPbff8SSalzQwkZCnvgY6pgHsWS1lnHQb8BOUmsqV3BOv3hyeShU5jtc%2FRF7En%2FPdtO0SOLzjgjibApc%2BQweTEIkxnf2ElfJgTVwxu04rZ2SM0bhl1OYL2xB8EpzwG3EMGXzO0JgYCv0qus6DjowBI1PnbT%2FYW8OjbhMke0P4Ckm%2BebEOZCSj6d%2BYGerYkeTcJ2oCZQ%2Fa5iQqmcCWhlJlQSiga2MMBL60Xkc0MnFfywWnMLnuTdfM&X-Amz-Signature=c315776c38e4bdba1bc63466c9ee4e59e536e0b0f35f11b10bf56ca3d68be715&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
