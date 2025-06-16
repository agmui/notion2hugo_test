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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUMF6CN4%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIGI%2FUCaowZX5ia7dK63Kh5SJKd1PjXKPCoomOpLhgrR5AiBG374Vu0oj4IVysqN4u2WIJ%2BGexoPeMLirwbIUJFBQUCr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMSgdU9W1FzpVd%2FfS%2FKtwD3e1Z%2FnAGkd%2BEqMkrnn0zF3mmYd%2FNWr0XS3U8%2BtHKyP60Iy2yVqalR2%2BCW39zsNf%2Bziy6JBE6meh3IQfKLXEljbbiELaDdnK1OwA195gFzTP2Iyqd5Kg29%2BS1gQ648IG0A1I1Qtawh9ZJiZmI2YxTzj8ePRS5Td2Fn2G3GdsnPVxpRNFRSTwb0wE8Z%2FEpd56jcNvaKybSOAOvoE46IqT0rXyQ8SnainvCII8aWiWED5nAdHBCgl23xIKlpjUEEevgfXuCriuot%2Fk2a7JA1wLKxeQc5B0Ng%2B45ASJYhO5Tjn7aZSDo4H3a7duWnd%2Bwb66B7LvK00aobQGQQVGSw1FWiq03%2FX72dNHQHF%2FNyJ8Bj%2FOWNBRwGDaWudwSc3Oiy3%2F9%2Fhm4pVfv1mP51wiS%2BxhI%2BgNBs%2BdCmwsMDdG87uaE3rJcrUDay4uubSZAwS0mxZBGs62RrF%2BlT49C5lqobhYqxJYrpH%2Bwc8thw1bz3BF31LEDlNTRbe9Mx8L2BQ%2FOIezSnr5sutiIQxttE5hWf9vSflq0tV9mQtTuzNpNhViSU9dCKBf26pXdQvdBy7DnpJ5LRtyfOEuoJaeSsMqTrQ2%2BOUE8SP7%2BxQv2ljRR%2B9rgoVgaUBcV1YotDNbrS%2FowoLjCwgY6pgGn0q401bIg0Z61NtZoGve9xG0LfLpiq3cSK1HopQ6BnknvqI7K%2F7m2gYBL8srWTlUTrf3aXDuZqqtM1HgrBAV2rtHGdwNAMmvn89LUOpNuqU3%2FSLZNdh0O75iN1ooRNE9rdMa66Cjy7oOFHVq8M9EmM83s9ZZxKKmz2BgMVV6zjAXMicpU54fgBDdeZj7lFOG8Ybnydp044k0gjoxNgdRxQQoTpS88&X-Amz-Signature=36a4337f4184042326efe6d7c3ed69b5daca14cf7fe4ad302d6ca05495f080d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTWGNY7G%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIFKXCOx%2B0mFfcPchHf2PIpf8l093GRYRnJl0A%2FKbcaWcAiASUVJ4WxZrNCzifwAU48PO7NlwEWMfrpGxapqSdn9qpyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMmEtS631KDUTWLV3SKtwDUSHRkTm3G%2B7Wb5%2BDq3Y9iqxmKum9HjgbWN%2FCyPN8pQCd4umbnQ5yJK%2BNq%2FoUHE%2B6e4A9oI%2F%2BN3r0GUppTnbA2zOpxDuT0iBvlA5Jq9P%2BPPJ6HP%2FjFw8BeANT6ScX6pZtMDu3I4grGBU8iu1kdFiLd5PIphk23ll1isxZP48Jmv1stc3wnlqFws5WR%2F5DSDA9H5mfXdxT8BOwhb%2FeVIoTrVcMPEr5OyfgHXUJSENSKiBhVewAUunzfshQjtv9a57vz7KkqO4IrfPabOfe1ZZJrchtHb3u2d39ApUD6gKANM7po0GmWW3onkUoFxeBGsc8uVmtrGJZ7pYJc3%2F7pOPTVAdqak0mk3kS%2BjCJtZQQkL8Q3%2FxRI1%2FL1FbN4hmiapJ2lOE74azXpTwhqs51gv8wR2e7IyMvJ1oisrZzvCOrRlLS2Fw5KryqP4qmKhQ%2BqmKgFWUPIGPL4JgGzGPPXPMin653936ExqJRDX3Jc9TXDykVr5U4l6zyRME5jAEPrYMj9gNlJqsR2bXGP4myezI0vTQ9Jv3Fb7b53ePxGb3Ng1RUGDzGJ6U9IknO5dUlaamdZt3Cukyr31kaJEVSKFb34c%2FdFttcvPbmKeYhruwf4Vgjqz6TSJVHBeiO5t8w07jCwgY6pgHE%2FAyq7JtFVGpFfYeljIOj9p1zdXx1dvBhW%2BjHH1519AegejjRUU6uS4hnGBIrxiLJ5G8%2FbSHu%2F%2FFWU2e3phkenJLFgQlx5AN%2BkHPK7AzFecofjGst2LK1%2FuwIGAdnbInBtzjPy5xwotVQaX1kHxst43XwBSizkPET3J7kSooFxORVq2Xf2dkKkwheQN9JmlszwyZCbDihU8SFtP1Tb1weoPvHdcbo&X-Amz-Signature=a367b394ef388c27c44793cf16e092067dcb9dc46bd1fecd8b2a3a21f7b7e29f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
