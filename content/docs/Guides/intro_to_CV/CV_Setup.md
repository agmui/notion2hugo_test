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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVQPT7LE%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T131151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIE%2FHBGZFhRyXJ7Jpxvrc4ia6lWkEIjmcTzLy7rkNafbFAiB3uMvBuiafWBZHjhZofbXC5Vjfp6jkqYuW3EP%2FhBoIiSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMzCX9TepfqOaXd1O6KtwD61Z8jXQM6WkfMiF%2FNsYgLPf6zaN7djTDMuiOjxhw%2FGotL0JfZviUbzlRiGRpQZG6%2F3a%2FCXQiW05YTr9DYNOAwb9PfjG8Glu%2BeUKbkFAuLE2eLqy1BphWW5BwIa%2FpWK43pbZH%2FH5%2F1M8TM7rekaCAjVJ5WuLbwkfZwnwWxNqjJ%2F0NBREO3qhfJSLx5u1Bz4uvFuCDR%2F%2BLSj%2FnEjnTEu6XeIqn3liYGNOc9blw4zPh%2FRFkulsyzq2IVFVAUuqwgPEsfQj1Rs0HieT8puvKzxEMZdSu9YfFojwJMiOMW3alc1Kmg5vUNF39gtGlo4EfABZFK3PLSWbNyjG55o03nieyI6JcZff3fvX6o9Lt5C%2F3kwPbFTLt69gNYU4AVP%2F9h1VXyPCNvqVc%2BX1VjAJ5I9Ss2obZepFzh3TlRukv4N7CyIGRe8qgyTXFAabrVWE%2BJz4jLCXTXYgQvgr1Dfrj%2F16gUQLKevalaIAJLSek6sGpx1W2Z%2B%2FL0bN%2F13WIbgcJuzz8pcxHKPznfh3esOyxZPG93sCi%2BziIYx838ZvXzsFyuSi5N21hbvoM9ctfUfwdsvp%2Bk%2Bd8oFAYEXvy%2BaWotj4Wkl%2FLKMaU4Lz8o3HhQoKv14xYylAImSlrtYBuonswvZnHvQY6pgE0ZT0bShwuJIR5AWdWrwMUhGihQIRFln3SR7%2FEZzky%2BYa1ENUtPm4WkThfDniJofBTBZ9yQwJO6RXJ7I2DCXSqndRrBHGSZhoBw0FDZQt5QBdS963E03%2FIpE84ubW%2Fg%2Bof1o7VlHaMNY8okzVUAyiE%2Ft%2FNoZPimB3jFbaSSklQBvTHdraMcBgLI7Eth0FsR%2FnMJs83zMM8ukVWDqNF3ikAGKIytzI9&X-Amz-Signature=8477d9d293f81c76c056265de28144f8585dd1bcfadeb211854c610ef022a9a5&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672IFNEOO%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T131150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIDpu9Tpq9rjWoRJdd4XXzvVryLjJc9WuXAN0k3MOe0v0AiACVTXeB2eDJfivnXopqndK9dKAk5EiZWC2oRAGIEqgzir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMLHnHnvCQhoEzxxxKKtwDkV%2BE%2FFEhrXo%2FORFh7BQqhDWwbmmKbDJOwdmMzfjgmKfL7fRrEEstoDoVoBvtbCoO9KE2ZRMRz6iZqqnGCNyou3OUnKEFCdK%2B1D2g5k1q6HJo%2FWCmAoj0x6hikPHspUXkHU%2FinUlNmk4VnGjJOjAj566Q6L7DZjvE9l%2FbGzryHmmoaDOBxtFhtKNVQVOUAdwSPTZJbwJ%2B9MxSxQ%2Fi4ecB6XLVcYSxcWy89tVmM%2F%2F7I0RWbb27s3lSxms%2FqjN0hf%2Bn7DJO4%2Fs%2Bobh63Dk4utHyTqZLYDHI72RK5KCwmtlWdWLhMBlmET3vh1N22d85HK3KGL1P%2BDzKV7OBkZC6AKWIMj%2BT03hJxs%2FEEpHgSgdzHJoS16KzBRsjAtyuMPgYdjBv3Kvq2F8IYHzZ8vu0j%2BnZ8DBXgjud%2B8tDtDV8RYgnhjXDw%2Bw47XdRCmo7ObAW%2Bi6Gs5elx%2FnkU%2FGBhI%2FRAb0I35FslZKkpK5v3oKD2hmhHADgFURJUOpzLGcu15uPqUIsiEY2pPksJ329qIAoHOZThtmYYEQ4zj6j2SlA28dhW%2BWsinisFd2uDZPN4EI97Fcm8med8gdvo%2Fxk%2FmOHIY%2BfNQBWzAFIny2EG1NM0uWeE%2FUMYf3%2FI7%2Fs%2BLhGjoUwvaHHvQY6pgExD6OvWmvbhTWT7RUuWBmZa1uxJKen%2FiyAu%2FsGVPAKv2j6ZITiMX4VWBy9eAh%2B2SY49UXTxx3M8Mnbf2KYJmgEls%2BGdKDAeVa2T2OUFiMBeeXMP5iRhSn6Yb6bbpbMh5afalO7sTrfYwuss%2FOIC%2BdZwEDGYY9lk19A%2Fu7DDqKeqU8mZlg8xNg8eVPrEzBbW3Wzo7ckUMrZfDqnvJfBmNtb45IG%2F4q7&X-Amz-Signature=c6aed91c8b118211c17ad0eb634e120ff711a4984cd84eb1d65c3cf746570bc6&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
