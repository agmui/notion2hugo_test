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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSAGOGES%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGuCTyAAdkKknWvDZUSTsuHlXAI0NCwrEZEX9nU3YPjVAiEAvs2Zb5HBrD4kLmNPyMblUROY%2FLrEWb31tRROhbty1jAqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8cfYmzsc0W7qFubyrcAxMnXc%2B1ByR%2BXRvZE6RVkgZ6%2BUH%2FL2Z77sjl2VQHW7KGEhu0i9o5d0XelCdgYyNwl7OyvFrLvDhtkIQzi6nBJrOm4PgoV9RSzhImn6sgEGXAI0MpcABMGlC3R%2B4AMBsSJpNldutC4J%2BvRs8udhI5%2FSzNy1kEhLIojBTHlGxccQGwwRK%2B1YX6WYhoYBkE1n%2BNXUv3Ykgc6bMYamGzOGWjPFbvWiAvrrxYFtVpdX8HjYhusvBjaiMWbc3RNFLlMK0QDifi%2FN1Snht7GZSS3fS1ZDfhNsxjXwoC7s19aCIPWr2xmEm%2BbwsKOITnFIH6qJ%2FcM5HBznEE9J04v65Sc7Cq2YHgqpdwORXzCA9qJDX9H8Ji%2FQAFUEtkINeO0tY8UGMQfgtYgzVsPoaHbKyDIqoHCtY36VA5Y0LDnJ%2BwCk9Flwfx9h6M7kTCjtmKm7VFykPTVfqsbrqUarTBrmwGSigdaau0F7KIf1%2BO7dOr5XIJDaquXIhztzlQ9PyLmqZkpb%2BF%2FyWvg9dp%2FjPV%2FFee1ViV49TEEk5anlRrbHhQE7rDSyvlEWeSWgyuEevoEdlFOvpNja%2BTWBlK6Ykxj2sH%2Fq2tHqu%2FfX5C3lOftxgukU9taIyhiHiwAEqQ0G93coecMJK95rwGOqUBQo76J6wpqzjlZRUhXU2cNIqFFXtgRFEQAc9JZ7O4x%2BG6Qk7qO0gxIbM8c3%2BCvseWzJwU%2FGuYYr21WWkwkI0y4ccEZEg0G3F%2F3WFnMbqE8CwKv2uM7YbfzepqNvVlJvynPwgGkN3JFoeoRZmGZJaEIx%2FlRQJn29hAZGP5oU291760IGIz3%2Bf6g2eKzRVAz4Unf2XNSH0vzGY9W7EIBvGgCLAb1pi%2F&X-Amz-Signature=77941d255fe910c3d030ad8d2c32faf89bc053499c162f1361f29e60b2fe2d1e&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466453UGCCK%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDrGWbmcv7LcVlVpGOTHfHapSoX%2BM5zdNKgBKRbUvp7bQIgPJpM9uj6Bd4MCZ822IkO1bC1srw2nvhYHowzRcQwPbQqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ136k5TC7aU7lOiaCrcA7v5Y6JsiU3tH8dUESAf0q7LVq7cwmskQEQOG9IGEpNsIHsUNMuComoLzmJmXneoJcR93x4Etn7Cb5lov%2BO%2BLeuoXMTEqDmjfFDPICChpQbBWAp41%2BKXksdibUwmbrXFD29MgIQ4FvPK1ECcoktyb29cBOqVG%2Bd3ahXexO2hWD25Y3g4XXfioZRKwOAJKVRYNToLNGcM839%2FGbLRJ8gvGmbM48LxodsTL8%2ByKG5bPPjtBnQALpRZVF%2BnCNnofvCNLei9pIorwbBgNpG%2FYwWBddeQ78%2Fh4A%2FsAOxRjdxPNPUA3j6dDupgVvPL4kMSeOHeYUdYt3q8hJVD2CDhjSOrJy0uHREAeEscFi24JFcGHnAN3MEIC4elNwAbp%2B4O6xse5gdTDpOW0S%2FXbut4P7PvW4If7trCZNMuiKbUbD6nViFR3UqUAakdKcX37LVXHSKQWB2GRCoFeLUXjlMBGnHSTaQ0LfJpzJnUrNpnHWpm1c%2B4ZfQtqk8r4UTxwGEVajzAb5%2F2Z23H2pAsvSI2xUJc2MUG3GMa%2FcnbdBsK1GLHtudfFX%2BGH%2BMRmyRq3zn%2BN1adjrNsP6Lt6CmL7%2FTUBDw4JAUk3Ml%2FEpzltDvC%2BTM7Ib0mIVGITbRu914c%2Fh9WMN%2B85rwGOqUBYt58mhUNlin2iuAvkKTObr6Gqp6Rm8dS6nOT8Dzmm4YM17zCwd%2Ft8aQGo65SvQvBzZhHOKsnvgOWKHE6fte9Ti4qVf4r5v14Dm4I%2BlGesKR8JDU3qO7R58c0c2Va9ZZb%2FPizfdtWEppkd6hL036wnOkp6qHZLbJ9U5Lns6HTli5STORhM3TInrpjyeoT%2BtP38Voh2edRSoGdfsVvuOt1fgr8mMsJ&X-Amz-Signature=9e18747d585a5900f5d18291024efddc03f12e30e4314dbcf069e383b665319c&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
