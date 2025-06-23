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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646LY3WQR%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCnlTMyG9aSjDZG4YHms8JTCtBpTddOCOhMMHWswJcouQIgK48XWPXIaPYlL7YxstOqtZ%2FR%2BGNAt6uyEYRBPTCdYiIqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxvveu5B9TnG9GBTCrcA3kcuCm4vjxYNCN04W9UqaRB70ItbWdtsUGRS5p3lLw38krhBQlDoNxgpdeJ4SWmg3OTNnECWO%2Fmexoa6Ev2VdHkRxmLfh%2FW3wtmp73Gd5UvB0MIHWYwBt%2BfjSvkquZpn0C9BU2u6LaQzi9%2FNaMjJZ1OoThNhYTnClfgKterPQQHoqt1kQZZGiX%2FrBVMRVnuTl%2FxC12GJ%2BbH1q1Git892lmT5zcUBEpM%2B2byMLSmsgwm9oCPeS3UTF8Yjmye5NTuqGmwWfSTU7UdecWIr%2BU2UHowNh5WGgtfXSBKf90zI96KORJLLtP3djMBZ6prhO86%2BFEjxqrQs3EIHJWfwg5CQ4yR9UqS701ySgqsBwLBzJYv94MGilN7o1%2BjAXmgDU060uS%2FBVjXoUdst1wJcFu%2BJP99Xnd6Ymu3v691H8wHL4ECX4Ka%2FoGDoNqPAeDSp5ySu1bEzx7%2F6diL7UYEgcL0IbkYim5x8HV7Otm1Xt4M%2FkGvXodTWzxynOUt2Wx7Trmj3mQV41Cf4Z%2B31sEsWfec0L9BHnFORm5nx8qfgE5l6mWT5HlRMJMqnYkbC%2BeQMMclP1wFWysN1%2BX04BCZJBsKFfNyhLunRPZ8fuHAg4WwR0kpZ7uBeCg74CbRxRIYMOm%2F4sIGOqUBUJrBg%2BytBwL1Owr%2Fxc4DGHnuXDbrEZ5ZtBO8zavCWcGRC6O%2FoNZjFdeEnRKaseuLVsNgwZARN9ybzxlYyMKd8CFXoW3nWNQOnZa7b0lbW7jS0fsy2GyWkEzBIxH6PhzXBV1SXlR64RLZe5Wtyenr%2BbNoKnittulAMZao7NzDZtZrPgxjrtkv%2Bi3QRwi2bCwok6k%2BV3RpgrD9Ksy8hB3adP1AfJnf&X-Amz-Signature=baf6deb9404b917a32ee0f36afc26f2afc698542ad0bc224a0001bc7afcd6e45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD2PYJCU%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCVB%2FdXJzQIsrjLm9SOSbWD6w0JfgQfHCNtommZGSCmrAIgRplQB2IvyPiEGljMooOLoyrWAYWtK62V8iN%2BVnCHBacqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6sONqyuIcDbvo9EircAzLmlKpMzg7vfxCqFwZTTgCXXIrQcOwFUgH8KUg%2BYbspFfqBWoLLw3p0X7y6vBI%2BCucGI17jCwEOf61lWmdtpbxKnrgTJCD9DSNyjfX4Z70HvuSwneIme4qJaiAGM2Jrhdl2rGPSX3CM0Jw5oHX%2BN8mT9YNOdTnIqS%2Fzf21EqfIt%2FGHjLd0pQC7sINsWZK6dFFCDvgq%2BUDYhmaH8oHAvAUUrOhMr7eosNFAs1QlA%2F2F4k5KyG1Bkt7vlSdvODXn88dWSD3jeaRJS5YbLOw5XyXW3o5y6b3BnITupFbqYPSlWCe43JA3jSECbm%2BIVBC%2FjmFpDvvaXZiqLbBOKcyEXP9psRhA6L7ULA89QQc3lpfRee%2B6Fv7rOesTwD2dCW2h6Uw%2F0zeJ2%2BScYMrWpedffIBaNgWlbH%2FMkrBYRKXgS89DPZRCv7JIfVPOKe6A43l2dJn07UQuxZlkT4lySDNETNo%2FZIOJ114gZLAZYnjgMp3cL70NlOsZAv0uS5ojY5Zr5Ep4K6uCRxgj2Du7atV01fMMWCTnueRoFO9CkZzBjeaIE7ivGg7%2BYmsPLXq9uiWl12QcY9c03Lm1LnF3QSZU0zk6TNIpy4Zfa2TzBXsu1AstzmFFKPPi4iq6TEcy3MPGm4sIGOqUBccJTCUxiZ2qSJeTTJ%2FMQMHbdY005mfztjC8cxa7abJg0aMQkdbOsUQ00TxMepEoHocmjT1iRI5bt7uMSpGr9Ck0TLUCoiHs8qg3YprXDxH3m5xwmnHYEDMzKMayf1f0JVwz7uR1GEnos%2Fop98r%2BifhyeXNG%2FEH4sWPOjKvc7Rt%2FTNJZBKRHv9RoQDE0v45Gk3zs5GgBk5mrcbjXFAijvkQwoFJxd&X-Amz-Signature=57c44a687d652b8d76585ca493d6211ff5f3516dc048e63ffd649944c4b123ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
