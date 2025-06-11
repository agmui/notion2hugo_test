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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2NR5RNE%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDvmkvZNZpC0Iz8sQKmNWn633ObgDNuX3X3Qkz3gVejOAIgI5GsqwMMTrbAHJCYMOKndITrOwsFUiNWakzYdcJiE4QqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZ4URaFiS%2BECD1CWCrcA2j1HT%2BBQXMJ1Gqlgj6hw2u9KadlFCJBGiPcC1lC%2FYA2hW%2Fnyqx73%2BxXD0FeETYfPd3%2Bte5aKyCUEeJwxogylsm9oUMuolP%2FAfhRtU%2BeuyVvCxTSIqn1miXQ1URWRxsrzM8SqbDhj2tEy3ohtCD3AJmDipwirMpOUxuOUceGiSY%2B8Y%2FLbAxdUbCN8gSE9iDlMUzwiYFK9MPNOuLTz3R0CjK6jGdvb69OxA8K9h2ThhBfZbq3dStYSKKPdq3KllBMsDtQl1XEVhkzJndhSkvzrkwxuyA01fkJ%2FgJqb3DXuUSR0S2y9nuhCX4sx1XgJiOeQEL3raNIITM6QxUDG0I1E0D%2F2Ml5V8V9A6g%2F%2B5yw%2BakRfUkAVDecRoYvjwYmdJDn7TZzyUJaW6OnrWBoIYPsn7641Vpp48sTwZh4Xhr%2FRRcmt4qdhiyUSa7aaUkwXxSLA9xkM0oiRqEbygmPZ27qluddrGHd7J1NiiuT2M%2Ba43yrabsdb3EcxiyykWk4v9vfe4BOxzspMNpoQeMA5%2Fag0CUpSzzyzr7iw9lNgVXaAW2HwW9ImSvHLpTiwhVHL2H3aYAOgJXjQVcs0B%2FdhhdJDFCEJLNfXEdlDYLDUQzYyOXOKW7AkFW9q9Q1cHiyML%2FIp8IGOqUBNvVYBzCEzJ%2Bi6hOhYBsKtpEg9TzTup5YPOOYk90JxZsm4JGLSqPJs4Y1m9E7qkRdR1psgIKZmAMp9%2Bm0RUi3eLxPnz2MJ9ul%2BXjXtaYAaSkb03zNSaVnypdKSsFkJOAj7l6HicUqvhuR8szCDAM7Z%2Fut9PaT2cb8anOmcM7KG6XVPjgfOqKGc%2BECSZqVQl1cOGoF8r4QN3jvwfmgQW395r3ImjZA&X-Amz-Signature=511c9c0aac5f0528eb8366d4881023c692eb02570e3c8ae67bdbd8e05bfaba71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHH3GW2J%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCICRGfIiJgLkcAk2IzN4QQbQyna8pQjFsoLGOyiPu06Q2AiBa5XZvDgEIMuTmOhEOYOhnOyLJW0eMgjWltU%2FCQHc8BiqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdprm5bQlWsrxiL1BKtwD%2BVZ5pRrX0pmQDXoZF4BM2cSxLiVolcFDtIPkmk1949ElrocnEyLt%2FuxrGjJlRrncTQ94jAK%2FXYF%2FAMfjyWW0m7ZhkSXWMAsqQ8nLPDuHH1KgYY3wsATZAM3QB9jHWvELk6QVgioVwwEyUhxEh40CK8mMQRhWrzCVXwyR2t%2F84Lv7T1ObmFp%2BrLioR5GTkIaAtD0iUsKer64jy%2BTlqGmfjpnScU%2FnDZAbOz8OZYhvTbtRSmIqeycDrMlCK6bOXxRX0LTXsnVRwEcP2i%2Ft3QghhuCpx%2BuEsbplA14OtAVaHLrW2GXAXWkE3XW1C3On%2F2Tm8tEVDhmhA6RztL8Oujah0JqLtFwOqQlvM5%2FqqYevoZdpd%2BB%2B5aE2JxDjFvXiGYS%2BPBRd3Q6cyb0GnCrsCqGYHGyhgRBdboXidpGrSjtFHskAm9%2BrBwWdHUk2mTYlG3SZY%2F77LWo3U4tBuGMAgSlhlrPMxmPZwEKyg03dhdW9Ein3hlafuz%2FGn3db5FK1AdygxOzGigw4QDDwh%2F0xaD%2FSq8CVHtOxwy6xuhPjNJ66WJl8z10Ug9yqfwN6GdfZLGZmr9PxfQyVw968Cvf46OaKBksWqm%2BklBflTUGlYQ63Uh%2Fnynqy1lJ7lrPJlKYwn8inwgY6pgHrEdUMMJfI5HUrmqO5YiDBH%2BsFU4XO0OjXJddVfJMJokFWTuohI1nhj5Ugcf9kuTwY0G6DKBztymur07V%2Fyu%2FZbQnEteZ4t72oIxNHEzeWVniVdJLMtGXeF57aa4BvajPv2fPuL2ha6U2JhwGx80LitPFgMpzdVmrbh9JvbZVkRwQ%2FH2UpFR4UJ09r55WJiM30LkJ0XlRovdpnsw%2Be7%2B4TWwXQwmkZ&X-Amz-Signature=d5b13173489a83c347297156f5e9adbd626a99a38416beab17686615e9c44964&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
