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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WNKBPJW%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFeOHEA8v1kvIg6fWJlSATH%2BO7JQ%2FImk2vOTTguyLxsOAiBTPPFY5VPnDSnAI6EsED%2B0lnZDVkjgBE4G5ary92%2FbbyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6rutT3fYTLZntQ%2BfKtwDYLhkUdAhqGvabGzmIQ8eu3oS1PjVUiS2EDkX1YIxUCe%2Fs79vUMIWXxzL%2FbrIqTj8vZTU51br3UGSKDLFmPBua%2Bg5%2B2KYrvl4ig4lcliyirM%2BWqPKtCIhjzZgu3QswQkIBc%2FY03MnOxNbPM6niAujH2kyhBSIuBJ0Tltd6EqhhRtttr9CeU7qexGl1iWgppUmKaDeg9T8bFAfWRXcyJ4rY32Q7XqnSiEnXLR8UamzkZQa95%2BMjBwShsbjtlnylUhC2NCTBhoFp92exbYJHY7BmiLoyA4WmgfIENnORiJDTiO6ncrqpvi53oG1tFQ3T7XYIEpq2GsjzITfkiDMtb%2BmBtiXgJp%2BAvdsyZGhFkRElvgrqaIi7YEQXk7Jj3CHMykyan9DV1MBUYwf8FGA9qKVRCd8n3LfpezBRt2JkEESWzI4VxKpJFJpGpkUCZ466lWyrw0RGDV%2BHbof5FXmKXl44q4I4iEXwVfTZxhq7%2BQaevkFisH437eMjVA6Q62%2FBNw0NHvAghTDHh9NC1cQHBSgwNZi1ktzXOMTdWuqs9TZhwEZ1XGVpVWUOPOjyuSwIs8NAoBj92PHDfm2Eo9KUcfj7YcTIvN77nF40YAn0mBQhItqAWw6uQqEpIDpQ14w3Z2bwgY6pgF7IBFDXFZFqlrIMSiiYicAiWPHz4lXbG2CXhkm1rmfEXMi0tzwVt2UI%2BHylWkTR2EJ9rM0XMFAkWPRBLrGVRCEHlORiHZOBZpX0cYZkYJUUB1dU9k%2B3YQzlQBw27P6uvaL5NUdyJf8GuQV7QyeR2bVFXFMXPg46q0YcjC5wcallMN9LsA%2BSzT3lLFwuNls5G98Lwh079oeP4%2BN4pQFko5PonfoMiEC&X-Amz-Signature=a653b2ff6751e7d64c406c56b48e8f716d71d02225641e8e07a0bb8e0984e881&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYVGWHKZ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBUkbL7BcCLG13GLvRlgke81ToDqrJcBfzjrKOBlTVdAIhAMHzBcS7qabyxICyJ%2FwUvGqpmzCcohFRm1prmeOr4RspKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0A6v6BCUDxVMR%2FQkq3ANNV9FSOTWmnRDAw9lwmtejfUGe4Cnz1NiQyshkx1RzXN6OWAK1xD01zM7kbtYKXDxG4w8x8ouHHV8ilqf26bSYTK4nUzI2AM8sqRjHB6wJHG%2BeDXRA1TY3YPMbXTkBX2IrYdLQdNkPGMyGVZEFuYlGpbs99J32kR61Rmrp6aaO7v9F7C6cwBl9qiBj5z0RNaBwrFnBEf1YnU4DE7Zj2HiFgxwQZ5RF589LA%2Fv2lbZde0wVe5smi%2FStFkP27utMl7NXngQPSAKr%2Fc3KRCKey5v2BwevI1DLmfUd8ZcofYdI6%2Fj1FtPpkmWA3%2FUH3frlDTJr86oC%2FpSGSvp8UDGIKGfuPtkXqPmYs2GOFRMqueQVkbwYDtMvwnMARKjhSyMCZ085FxHcHgCHKA7CxZokohb8wXi2e3qIAtenfjDQCsgWGt7RYAehn%2B%2BvuddYywtxO%2BNLLuMsLqHRDm3RBMqvrbzX5aop2paYn7L2Wyabl9wrGRdTxxmBvPEBe7QSNV8GjTTWgQ9usy5ySL%2BLD5OXSynGnMDp5BnXCfecl1bsyTMe6G4aC6J4Pr8Fb3B2Foc0X%2FckF3Ukn7k5pLRdv%2FN3CJFIAKXsw2Y9oKHLIK0g0v8Q0RQedxQTy0DlJK6QUDDYnZvCBjqkAemlN9%2BV%2FsqzfUEdJ2N%2FypogV41I7S7fFb2UoxD8%2FlgfqiuL1s%2FUC8JATxbXyKXhHW%2Fjz6bAGiOirj%2FI3%2BtTssmwETkG48hSmSdTnt3UYUZ7DYYDBORo80jldNdjz%2Bz8pKDBjnBwWxqHA%2FL3VpllR%2BP4t3Uv1KRociOsAhG8%2FXb886PjX3JbmOAxqh4XfkJBL3kfjZtqkN62I0tx%2By5q7bufLd1X&X-Amz-Signature=c3a0e5f032461c3fef3c96e2865d89e16cc9641e2333d36e6f0bf6f681fc8b08&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
