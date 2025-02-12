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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDCMEX6N%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDivo8Vv1qXKwVgSFDQ9%2B0ms6wpFUsbyO0SKGFnNw5YnAIgT17tdabp%2Bn%2BnraGAKEPc%2FAm0q8kywzU5h0QG6Wqi%2FPUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5ci0lB19U0hHz6zCrcA%2FNWdFOr2x%2FVxzJd%2BW%2BAj37YHaNaXCXKKKSQbvKB12TKqsE6qMzsFGU0lb2sPKOUMqbOMF252Y0FuOe%2F3ndGcQ4yC%2BjDipw%2FFonEQ6iOSlXok0D1SotjRY6q5ndsBgzKEiKVGub6deuJmbMewPN0x0yQdOdecOQcDzZ7%2FTgfRKry4ick9W7LOSqeyzVfLjPfUMgS2cCQlW8I8FIJ64I2%2Fq9zQhSEwWqeAQpLZwoRMz0okA2YDH1AfmW3iOziXLvLfcihAEspLIEjvSki8QjKZZScdFf%2Bb8L4ULWQ0gezcVB6KFCRm210iEuB1ZQAsNIj%2BeJnh4HowjVCJHY8nsxJYdXtwECv3NSKVj27FKcvJ%2Baip0%2FHAsL5jR01RBnFEyBo9gN38kZzVpgq6bRMaQJieDsMV6SQ7tZpYqdGHEhDDbjGgkf488p6zyTAGJDE8sRC%2BlFERdzztr%2FnZj138nI2LkA3iZJjdKWZ0Wt1Tpxlg7ClT7%2FzG%2Bw2hy7ZymK2t0vRcVrv03E4zySmHVOYjkg8Hw%2FK%2BGPBdK7pNJ8KJOrYvrXqikcbD8O9YD9%2BX%2B0uzzaqjXp6rZeJitD2GCzw5tSKVPE4RGyz8k%2BZ%2FD1tpMgTMqLKNOIjnQHCX3qA1ONMMPfmr70GOqUBcj4Ploc9uTZlULaNigtctc48TFpyQFB3drD6ogwGjDMf1Qcti4FuZkeYxA8ppHJI3aAesliDhTfShfCDFUPS5kk8KIZsacTQwLoRxNui0F5PeS9wyTiYJXDZ09ZdkGxJaL10WflinC%2BWs7aqfqx382jphKn8hrWgvBtLzAOrmu9C8jFhMZIt0OE3tbR6F61Pw3qR%2Fqe0hLVVgupJHD%2FWxmQn1Cni&X-Amz-Signature=17ef74f877faa10ffdf1ac7fdceb648ea149105cdb593a832b875ba60f38ffa7&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN6S4MQC%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnDwT0i0a9ZxKRvVsPGqPUKKM3%2B%2B2PtOwyamS89Lx9RgIgCbE17kvV%2FriuF8O2S%2B6P55w8MHf8EW3HtlwZKr9IDgoqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLP4Tw7C0OT28TwmPCrcA2xoo%2BzF99AuAas3PIuLK4IfBP9pkSNddtRtISjufnuX1vVZIthNIoO3%2BwB6hNT%2FcvL33vsb8h3jEg%2Bsf5%2FjxKQOYwzNzoItNt3s5YhvtOkw6wtrzs2xH4zZS8HJusrwj0Pd%2B4WE1ydB%2FzbR%2BVbKfnDi8ws76Nb2CiI%2BEWSu%2FmV28SFj6E7O1KUAJNE479NCOHfBTdkAyWBUcYFr1wlHyggKG2YMMl56gGBhqAiwYkQCooHwXnIHFkuEY3nGcXKQzjY3K6unzs1nL7ia2rXhymM0Ay8RI54QlBDagNVjQ1ganIOorhLvpzonj3i2IYacRAD3MEnmDwFn1K3N%2FbD3s900dqNEtfIfo41ogKumHgihHDe84EhtqJ9f1O6mTCAFiH3XMb4XnbAj7obtZXJFk5vstCgGZBrwM8z95pIh7feYMpTcpTh%2Bo%2FVZOSLK4m81rQF5uMZI951s%2FxaOyQ4Szpau%2FF1Xf7%2BPoo3QHftFqC9b%2BU7dS3QG1VmzP0zSukZxxWO6XNHAMrkcGmm2E445LY1wqUG0ziRAZT98ZUGj8ckAkw0oAYl%2BAS3g0biO%2BSsAIxi8sks9j5UhOXHp9kQQeXvCtAg%2BtN5ePPlOpxs%2B91IbdAtn9fEUffpROO0WMMbNr70GOqUBtL8Qh9mHZ2b7HG43tbPV3iajqNGVRH%2FfavnwlSFyde0rlmE0SNvIAyeBonjHqToyW1T0nW8HqF8EPQhp8tj4lXg%2BlNif5gSY81vgZrNm%2Boe9J0J27u2axpCI%2BbQ9HAt2oKn5B4d0wx08vb2veoPhk2xmSGolBSLggCg5z7l6Zm%2FtRje45w%2BWhE%2FJQcAYTbBU3AboIqfQElqURKF%2FeLmfWlot5hPw&X-Amz-Signature=859b74b09ec31a7f1ca908f89d612c4e2ad0c0663e2bd4c36309648f1a7fa491&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
