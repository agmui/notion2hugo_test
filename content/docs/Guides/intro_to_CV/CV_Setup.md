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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FFUZMSP%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCLSFcxhQFImEOcmeTa4%2FkCPJAE3drqUV5Ap4JGKAyTLQIhAPzHF34gSxn4JZcPOmrl7sDi3x1FaSsZpjK%2B8LNjQPELKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypwAn5uVhXWM4YEYUq3AM5j7%2BqWW2C9hRv4v6ONxlGq86gpp3bW0qpAseVyLxm0FeYnvYbXVr6iogaZ9Pqfq8BI8ATIsn31pjgOq2SmPM4qvNMom9QWmTEeoSmt5c5juzX5z1Gj0ncfflxs%2B6OTWCfP81sZW%2FqFjZYBiSEVBuu1rnFDbhKGf6Bh12Y5orGvgEo1IGHvYF7BekctvZLCQBMiR8joDXDI07GY85cyDGWpqCWRh948UXbfuCyfmDfVK51YWXGspjoXCcS5nDkZY1vVKPhadQ%2FLmeXnJy3Ez0yyTF01vghzQGOf6yASeQMi7d9suc%2F%2FZ2aiS8dD9YzMxUrZvysPi0WK60ByLUdgOAHin7kjbhWscVmZjMVRHEceMAs%2BFNs%2BGLc7KfqW5cx4Hcfsf5kNv%2BwyT%2B7%2BOos%2B%2FAMPKItwS2hEb%2FIOGLErHLykB4OOB76HuH3rm6zMTHpo78GnjIB1fJxrLwppou%2B%2FVzAqs2ag5F8Qatbnz5XbK7z83AdS12nJI%2FHQgJYvbrThxxVf3RUHfEu2LWGIofndruIO34QqXMYriGczDMFvMXvCcwn6SOI0Z4oEUTsLAnn3Y4aO9Y0oXhx%2FYIYgVdFf64ZgCt55%2B%2BsqMXGN%2B%2BwzJrU4OYpx3M4dNB%2BfXmJ1jCUytPEBjqkAbrDIYA8vkrUOrjyMWycsd%2BO%2FF71cHFiU2F3pyq%2FlA8fuHT2%2FfKiVn%2BMrm9fmLs0ly4pGdN6Ca0eW%2BeRhNlORkVKBURz85FW6hGTSF8ZJg2hP5FGDt%2F2K7rQMGJUWUs2ePtoGarm%2FVGYt8zo4zqZsIzkicBmu6UskAOv11Yflq5mfBQjsU4f7TXOhzkWp3L33rLQKF1LT6hunTbt%2FL791EM39FYP&X-Amz-Signature=4312deff0191874dbc8d915b7ba56cdf584f8409ae8f757516c41c787f6d60f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U24ISND6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIDAE86Cvd2sC3F0uLvo3e2IT11i6zumQdeI2eZzxWUonAiEAvqnC2sA10QKmT5ti%2F%2F%2B7xRm10qaNSbUb23Ht94oNLAcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpLua%2FZpJI6pAlnpSrcA1U%2BiRj%2ByaO6F%2FyHbKFvJSDjA0W58cejCV1nSa1VEYVjw7naxhV0tJv4lOk5Opd%2BviC07q7MzjVY22OSovVeJGhwcLnLJgFIQ8b8MvST7d81kxKkZAApQQc2Vtatd6XgDol4AWmoQNXDotgVMeb20db8E%2FNqo1sW1dfNJK0YZGRE3j0Rwgnzf%2FNTcjGRW41tQLvuWbP9EN2hQreyUeGN0xnRdBRyH6zms70UAxUTEumVKapraeHJlcsv90SVlUIoJdr7mAY%2BvpcyT9gdNhnjU4F0P1wy6MCAKXd10Y19cR7F3zi4%2B5HhT8Di7QYt%2FefTlCvHhMQ%2FSxH5RDPF1E%2F3WooP9eV6H3FsUPA%2BJaV4hmZSztJ52kl2xpqm7QWtdj6gx8bJ2BNDjoHAzE7POrLuNWorcrVT%2F3BWenrGCvtwLlCYQUWIjGujBtkF2Txfbh30J0gowb2u49JGiHSAQTG49KSnEfsJS%2BcBfethQNou8RWBSm52PSO8bETEBWTe5tla8sUvjZ5qDt21ThqDFySUZTr10pf52S0UAWVkgmI2ADTlH5ALjtA3fpHD3hjwZsctVyaqWnimGFqouwnvoGBHGW2Ryh8%2BJkl1RdU0f7dw%2BBUewzU2VuuhDPpSmLhxMJPK08QGOqUBqYwALW0u%2Bv2yBN8QRMGFht5VdI0pFV0gNkG12ciXbLPJgbxRsgbLpW73ITq9l%2Bmg9N8lURkTm6Kr5NcD%2FC1Qnfh621zWSUYWbOwPE3xA3s2AUcLUN0dWA8YxM7AHpGXGGfWWwqu9M9lTRQDxn8MGlc0xOtzEzih4ecIvbBZjvYZoqqqhjiN%2F1UUc%2BAqwJfePFV49Qm6goImWKn1wEThH9P2GJy0i&X-Amz-Signature=4ae919129dc05ff46d3fdec48fee9e8025d3a9fb193c5adfdece3b373379c676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
