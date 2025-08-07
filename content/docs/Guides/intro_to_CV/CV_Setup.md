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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPKLX5D7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCICRvZsocQvwwXOorLFOTPl4J4tF3eHlU3KfTjHd3%2BSiFAiEAuXffBTb%2BHkV8a1ut2V0p3Fk%2BBYsmttYPzC5ioyNfth0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsT%2BiNkbcMAhpWcECrcAydjj9LxTKkCfcKU2mjOb7jppqX31Zttm4UW4Os8WtVtzr81J8ufYzZ05E5Yd8JcpYGR%2B6QbaeEvLQyxEQlvp%2BEUGr6rkMIpClUxJPZzffWury9FHlaWEGCh16WsEkvqPwbj4SNCZ7n184r9l5V0uXP8CVOyq5sF%2FrG8CahWWWR6DJdBvzVHJeuPOih6ZduVbw%2FzRBpVtRRG99ETHdU4gDK4qIU7A1YD9IBF3l4VfxgZJn75rJLDI4cE3i9yCzeYrqcnKVAkskbLs1kwNowkSDzoMf9dpfrOdX1RrOWNdUjdaGXy1LxGVGVWkwxyMaeXjPk3rDaO3FIFKoOlY0FoviEw9inG813nHWE0T0G3xXG%2FEaCpY2DdkMW7uG7%2FfFD4w8fAIi3Lx%2Fq5hbF6VRkk8wlCQH88G9Cgwwk5gymb%2B8GNmMMM%2FLVsxdCYyAD8iftGFrbVepN%2B4ggzKSVQSVy%2BHjBm%2BQuSVxHZ188W46IK45aj8ZsmMt3QBFug31LYawcpv%2F0zDfX64Lum5C14TRxgR5yyXRSE%2Bzwcpvyt7S3uLBWZ%2B8Ql%2F%2BeNjw0JdCj9WaheteNYS6Wwl6Yke4Tb0vn3RCCLpZ3XXuy8beQ%2Ffp6ZXpBdwukZRtpwFFgTKpUtMPD50sQGOqUBwDsyUwxWrxoI8ulCIKptKcgBXHv3GMYbFtrSr%2F1qQ9uz0mpHihgRqKYq2dCd6BduCRN4ccqapCgUbwvXW1QqNykyFQ1C8oX2Pa0FhUNcDnTCe%2BhjnrbGOjzFftreBPTRG4wNy%2B%2BHTumwHdlQLlMJgXpxGb7RV32Rc1yBz%2FAlbwxbZJxseBCFmvLw2AowPJDxjmusJFwjbwZxYDtOn18wQSz77KRa&X-Amz-Signature=c6f89a35259750179a810a75c691afe708f31ed21a8b19c40d0f1b496bfae04d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S2GSQRP%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDysFFU4ioe8WA7fw31lRXFgTyf8EAHWYQ0C5Bq5%2FmNQgIgO6UpcF%2FgHycOoxqnVzVqmT%2Fp69BzkeyldyjXizJEXSkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWLMnXg2LszJgz2uCrcA7bLdb2IRf5tjmYQnA6BZvEgipVcV%2BVgahRdJDL5E9AhBovxyBhhTmxrYQaAC07s2NNqSXTVMDTRJaG08l4UVxZHr1j9XbVA1NhGj%2BUciv6eOAX7GFP02JfptMvmBLG7NJoB1bAaDrZi3pEOsqBUtijQPLEUnEzovxHeFLhzLVGDIfyiX5nvXY50AzKAMQxM3V3vrbfMaZ4YoD63H4DwIGjIi5rCCb2NOEc2rVx7FKP%2B%2BxSNhrLKgiCAKoOSdeKCs87Xuhq6VgXGv3QnESM8JElwPSMxrCN2HHQzaLUeAzcXzo85aftsuLO6gbm0FEb%2FeUmgbrjKOPyhh4Y%2BJ9Z2EcB17BDGJeeWNftdvhe612FJl8oRvJxYAkJozfwjOj7ZfgiGL%2BQx5%2BLaEaP1TG%2FBqOMmcvNPKUDRO8sbWKZiktGSdlDGhk3QZMi7bkdwLz%2B16pM%2BREJz4gHTTwKdMJBT%2FB3NskmdFelC297iBBl0TENSkU2eHvv65McOB2bbH%2Fw6y1MiClNWL3a1bWlYCHMdPp%2Ff9NYbkIQdp%2BeijzpCO1RiuDoqUomPj3w440Go5cQisUc%2BtdN1IVfAURW2IIeWczPPjkkZ1jJSgFvsJwVM9AWEqbwkuhpzvldOgz48MN750sQGOqUBzjk2%2BEo0WVSGT294RDiYzJ6Rs%2BR0LXa3uQPG2tUgg8pRfjLW%2Bf87QyGXZP%2BBy0imMrzKNRReMCCOYmtbRGemw0yncmPRzz7vREdyXgPPhVgTY%2BUlIKfsHKCK1JFLQz7emOd4u899S8cOyLB8IULldenfUS0NdvUpgLQRsyAAYDWPVBUrKiMNutCzjB59YR2ekNkiFWMyQwn07P6uujH4HWH9Oep8&X-Amz-Signature=20b23cf0533c2ea71d4acb2ecab9dc53b4d67d237d7867c1c6ded906508ba918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
