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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV2TKFVL%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDF3M%2FjmES9PpzO34D1XDst%2BB%2FpZ6poUApsLI1GRvO1IAIgRqHC%2FuVRqodOKqIdoXet%2F4mH720LvLFRsr9OVEFxK2Yq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDCd1W1thtm3u%2BydOwircA%2BcP9POEJkkKxjUQV5Z%2BmX1XKZtKPGjlBuqZU%2FF3IKpdxuHdmIU1WAUbTzVNekb3tLSxBkc02oMibhb8RhzHy0B1wbMxtItQSgEeRzodVM7i9VzDc4tj8zHIy4N4Gtz0JhGsOkmDNugroOAw4iO9hZE9C2XnUVG%2B97f9Y8Ak9IL%2FlmZ%2FfZnmoRMfJVZDp77mk2Jp9k018hS3GNTshWavjp15fmUu3iQAWWiNgb4ORVpSAGYDQ2NeDGHZLxwXuL8faEA4Dpgv%2FOk8Hq5Tc4Lp96NSxK7EYeyOfAv0aMkXQsoBwxZtKrOchrO7DBkHgstzIMn0fE%2FXoJBGhRJflWOs%2BqGt5o6QuTOsypieT49bDsPNkEIgWQeaLJFNCSwEMbkE9m6Mo%2BD%2F%2Fddxx91PfzGFgAzx04L%2B7yUnHJj8sDptW6cyLpQD7oNJ0Drl7%2F9caj0rU72CXilv%2B66gaAb4giuk0Ms8ATvcZFT33f3gHAyuygZdJomhoSzkptwqhAkT7%2B%2FJJuTL6BV26P3EsDwEOTWDVJ9IpOqN3qD5wWYjwAXwJ2C35Qg2ULBh6GHa%2B8alWbtKKq%2F%2BvnGoATzTauyaNMLn3A8mCPHOohrrbWNS1DlANgSbLl8XZPl3KooEnzD2MM6mzr0GOqUB0kWo%2BKXRQpXWglyQwZDiwnXLPylEBd%2BW3fHLwfKnT7sMi3cvMwJAkfVuFTTSU%2FcWZq3SK2T5ogvV7UPUmvSUFADNEBg2kSRYDhR8MChacmF3RoaVrU9VmCPE5K4Hm%2Fr8NvfgxgKXh69CVqAN%2F0jv6czgYmdEpXQyaKTk3R%2BaqOQj1SXlNKLra%2BHHfGPOh8bJuobl26gPkf620oKKg7Vb%2ByLb6BTW&X-Amz-Signature=c7fd25bd13addd99e3c03eec5f140e27b567b5c88a47dfc6ea383e6d297c915e&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YABDUHIF%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCICG8IFobwp9q%2B0%2BTUaWk1AihkPAEQbAOxwmeUMKizbKbAiEAj4PnkHahKTMqyNiEA84NTzcww24%2BbSFZa6k8driajgYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDF6U3WwRNXg7hFrM0yrcA7X9B4W07T0383Tigy%2FtqEqRbFPEg1R5HdCXeyWT7P3iDLbM7uJn3IX8soWoqeG3lOG%2FCQCt2l2hLZGQT16%2FUBtCTKv6rwTWn7ufUcMRFs8fPBhocJfxvUiT4CJlCA%2BNR8IpcoAMjTfV76ZjWc5b1tVP26eNxtZEZ6Fz%2Fs6ddr0WF%2BEMQGeL50fCIYluA%2F3LxcQZhXDU4Hm7b1qAAEm4SGUN1%2BIqiM%2BqSRUeLoTsyIbJG4c%2BHcJ8ah9WDcjD9%2FWU%2FCNS%2B%2FzuxmtHoztykB8ULx8IkROGlf4WCdYfIpbHD6q4lLCD%2BrXNo97DB65EspRIGt3vgTfEAUwurUlZ8jq6hXTLbdPcHiFbSwnMkHFfzXU3BJWUnbMMpV%2BVD3W%2FINO6qlRkwN9sDJzGFvNVz9VKe1DYY3ZYcJhpzQ5%2FI1rA4SIx%2FP8Qv12Q%2B34FKMZ6Y%2F034jXct9PTGBjpf%2FJL8Szl6Bk97wbsecWkSRD%2BjUU1VaX%2FuOTnFAVBQLbHORaoDMjgCnEIwcC9%2FnLC5juT6magjyvQgQHy1mlVUFQxmev%2BlujLCGY%2Bfg47LP0GJ%2BsafM4k5kABNG3o5P7y7Kw33fKH1s8tnYL6U6uvh5r38Su4UrwdRj2ku8QXev3x8TYaMK%2B9zr0GOqUB9%2FXCKNv8htjrWgV0kcxt6ftaTjEG7%2Ftrz2F0jDqYiHrN06h29RYxkXTrGND6FI8neL%2F%2FV%2BCTO7Z4B7OOjNm07Bj%2FbX%2FssS7%2FjxHMCP%2BeQKMQF4kQWggDPYJiv3GXfNw0m4kona6p0LNU187amxIyWy15DhgejO6%2BJkw3FT5Ggm%2BNjNWQyFN%2BKZbhTA5I6d9kWYyYHoivZgYILJviWnqgJFzrJHhP&X-Amz-Signature=0bed587db4433b1dbf055bf4cbf58f77455d8d8c59fb7d12f689099c93870488&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
