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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5SLHBZ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCeKU1H7r8KbmNBvhkrQRAuN3g0Svrj%2BX03%2FUXd5ADjewIgGTjIYZjAJAVwStqC4Pz2MnLu892097Msa1TdAsuHZjkqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFI1gYx50tezpQD4CrcA6CdYtDkLUlwSg8iIFNf5U%2FOuz9tNh7BOdOtg7MvD5%2BhxfSIV0D3lrR%2Blqe3ZGWEHBpi6sZP%2B1r2H4qL2vuwM6u%2Ba8jk9cjoBkJNCoch5t9V%2FNmbJ3l6aKeTdGxEGPsRC7Xmrvr5JuxJTXRK4ylCbf1S53QD%2FrxkxEqtP04KpLJK5RymtWcg9TAwQHF3B7lR%2FTp7z2ocBRFbFdoPXnLb75o%2F2AJYazFlidGsD560bCG3GJ25bX9lI5S0%2F6WEI3VfnXH6syCbtz71SQJEQzs7XRPPS6J0Ru4x2O11xt4DZZlUjS3ISEOPFGDRWyeZ4bR5hnVHEma54H9MiMefzW6i8CPGTijxmPEnNEZABsHi%2Bo0WSM0OXji7%2BA%2Bzyf%2FV58njcRnO218Jpiu906B3yABlJOolukmqkG%2BPaO2f7JfvR9ltNWS2dVUMoIHxgQJraSCpoLjXZStj%2BHRYo%2F%2BIYYLUhaatuH085wPgiKs3Ygjj0gxM5%2FUiWnI4DImHoqTAmbFnV8BvEknokB9%2B0LU3f164lwQfJIF2D8nfZf%2F%2B9qcocrBh1h7j%2FyB1jfYc6KMsoe7k%2B9j8EEy%2BdfbN9zEujRq4w4OK%2B3AjwM%2FegVeQgV9Dl%2BGyWnV6RFl%2B%2BqCfxeSeMIL%2Fob8GOqUBMJ%2FWzJDAGO5lKMTnkC6k7vM9ZcAEDnMZmjCr6UAI5LORiSkhPSa48pfyUpYGlz7SgUvCeed%2F%2B8EdPpy23uskqHx8qek2M2C5ZOCl9NcJLEzJ4iqgQ6Sw7izDikUPFl5M8aoRT36IDd2Q5pLWP98r1T%2Fhs1hzMqCOwLVy3S23wqa%2BtJgGA6dBw6JhQuOmTywUB6Vmt471LiQI8ruXwo3T7XhDZtry&X-Amz-Signature=516ba6c07ed83733dfef6b11f8ad25ab12ad4a72638d30074fe1ad8b0c1a83fe&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7Z5BCXL%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCfVYMLd6MlSoMb6vuZqw3KYR%2BQEEIPjpkXXfeYWMyQOwIhAL%2FwugkR7GfDD4AwvPlMbsExzTuKyNj8f5XuVpFV%2BHegKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUy5bJoPq%2BFB8Pigwq3AMM7zcmIvObI7fNY8y1wy%2FhrpFM%2B1kzcKjHY6FYEMpULRqTQdyBik%2BOB9l55t3LFNdqYRVT%2Fp0l5Ta8YTifZ3QtGsDpCcBluX5PWaZtVCBlPAdV%2BcTz%2FNkMWrQZAg8DFAD5flwVBNlxYN0sny1pz%2FKllgESlna6H0qp112Yhzu32wFKQOebI6hHDVjLXLFqnoCZOpcLv%2FlWtr%2FYwJbWGHWtx1b1i%2Ffj5rW43skPqnB%2Bk%2BUbjgz%2B7nixfcWUlLCy9%2FhUdYYh6qyxIm%2Br06TVr86ZngvH7NnpJLJjdc0NO8EZ3tE0JmtA7ZNuA8zi99n%2BRbQ2D6%2BbYNC0mfL8VgnTSEyFwXw9BIpRZkuLYeE9McBHsNLdzU2G2WXQ2ZyMD%2FSLCUlydGGMbG3ei4HyHMg5hgSZyhSC3wQGz50FBXdnRGG7DGYKiVvQ0LzT%2BJSaiiBFTqzqRaLaIfLVXwHnoBjNGzdiAXZnFa36DYJaeem1clXUCilnKs0YbnIGu5GLSN0Oc3f79sibrsCEhikKMS7Thj8M8CSK1jtMLH0UnHeKdaOLLh2CLierIS5lLCHBu22mLuRKLUpQSaryBvbtSbiA%2FdHWr6DGmu0%2FbnLNL2pBryeah7GCfh1hpgbC6P6ryzC6%2FqG%2FBjqkARdDm%2FrI8DOO0Bn6yBkdVa2dDD45Wcn1qK2v%2FE7TYKykDm%2Ftl9KAFzAAfGO3HT63lmpjXtd8jugnZfIpaD4e2e7s914DV5j%2B7YMrDPYDikIyzGNLQjZ%2Bk9dESohBxxi%2BHqsns%2FifSir8JP9iZsumWHT%2F04bknj3IRBIKq0G7soJ1AmdzCvm1lRb5RomfCfyUbI3gB3gSH7qMRd1V5RuP%2FI2o5oO7&X-Amz-Signature=8176b8336ea1b6d1a55c0607235ff54824444a3d20b4c619812c9c1abf022606&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
