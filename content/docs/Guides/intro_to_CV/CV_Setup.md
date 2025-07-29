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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMM7WVAB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIELpQ4sawvzqqxo7XwIE8AOBHbE7j%2BDMyLR1kx9goC0nAiBK5bGaBETA5MyDs3gE5WVKpPPe0irERvIIcOR7KBmnTSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg8kUkPzU9M81HjnfKtwDNr77O%2BQ7r63xRJedPYFVo7Da884JKHL7r06A7O4xO%2Fzpca8m1MJKYWXW3yV%2FgBzH7DQNyr3OxJwj0NDy3GyTe%2F6GGDhflTUgJHxq7bPGx218%2FFm0dlpm%2Bw5hvUqa29k8KKZth3Q3b9%2BE79kPBPjJUQaLIFwtl%2B8dOiAf0qcmFgiv3zIh3zAKyImvfD1XmQsWc8f62X0RLdkLKiIihdmuRJ9XTab5jGx%2F0tYFclU17vw61qpHOvzQD%2FGZvDdIFaA0jouupB%2F8vjwI0VutUDCu0WqhNDaAjls0awdpx46a3AaO4KwuOqDgoeX8m2pDC9gzLGVFa8UzoakUz0ZxK%2FJeQ2Ry6Tg9qQ6x7j%2F4Nj1w7re34XVieQc4x%2BUPVopBGrEcAVadIR077iKzHz99C00bO2QGYnGKMQ%2F82T21nkRMdjS6MofF0XKjJd5cHq0oIQoKVFm6h1fbKKtkDCugDM9%2Flmho%2BYLNh%2FOM2zdH6drRujOExbis3wcGNq2rPME4%2FrfSCGNuEI6cNVvNLf2lHKEoVM8XMbmZwSQ8GV8gtP6ZiecouUElY1aUu8p8p%2FUV39llleTGjN%2FFVBtP%2BURKIooUeBqvsiUMHsNVjo9dby5vegZc%2BEtNRDUOrk03uwAw3sygxAY6pgHw1q9QACj5CcEiOyATmQoV6ob43aF5dfrRdV2%2BmiDlifNiX7eXZlCsNGO5SWG%2BBBBXDj3%2Bg%2FT8Wd5HQ%2FaiKc4zZZBiBhSBnTHCfh4Hs%2FGGeDc0bsExww2hCN%2FngGi45ERpn%2FFDlVkuXQcWV3S8RKZCJo5p8QKZV31MNkZjJK4qh4rOpUIyaYl17uYHHEjYdbspGXeznxSNo4S9Mocr0G8qLfJKh2cO&X-Amz-Signature=e1b145e6b592c22f1073c5d1a0fce466e87f276bd3dfef3423208f0ba0b12257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WPRYEZD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIA4Pe8BLEEyvXu%2B0ttQyBokPKqeUoKdycbgDV0eNlgKVAiEAj5WDZTis2rn8%2F33ZIASmi7qV3vZLhNaDN9UtXlT0x%2FkqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEovqOqmt3TKk%2Fb6ircA%2B3%2BVkxDag2FWM3PiEUeB1IJrlsolPxP%2B%2FyYITg6fQDnAxmCBnzhwab3e4noRxcs0aaCep0IBEOS%2BoH1mAlt0%2FbV4zmIr%2BE5ZTpqynC7Ut10d3SXm09Nh2zDeiRbOdbx6FXHMvu2itum2B%2BpOWVa1jS%2BMmQeqe4DjFn491gY1qjV1XVZ3PvX5kI863lea8Ro3pHzIgb2fN7nSiW4LT0TIeQKKO57izLrW21Z1Jw134HAx31t7vfUWWj2iqtNLlHDCnLgEs2WIfnwWad0DUVlr9FIqYnb8LethZTG7cnItfonZn0U0aBdF%2FtidCeQOoC3MZv8OP1AzGTNP8nRY7D49SSSaQBnMK4EoAmaS%2FhcRr51O8ff1Wq5FX5QPDDnjLmKCuR1fFX18%2Bll7s0454RXt%2Ft%2BLbkOXI4OKfRbS153%2BL%2B%2FGzDrM3yqswhAGEH3%2BPcflTLAVbK56DYGh%2BnnmIhtWbzWD5cVdYaPALh%2FtVZux380GuE9zvJACDJlY%2FIoGMsjJRmPYM%2BeHO%2BbKWQmN%2BR8ClIRd9OuHF4x2d9bLj7dmdTKNkr8XWoTmTfce4%2BQ5aZA7MYnpaGNt5%2BeLu4Dc0UtC2YJJazBI%2FFQ7kBq6WTKW1eXXm1toXn%2BCfKjIHGhMO7LoMQGOqUBksSCJA8l%2BPWXLJKPCfi%2Bz7dip1HE4gLH%2FW%2F%2FSrRRS1MwfPE8zDcFc8q5p4UvrA5m%2BABQJMXXWyWXK6ss2WOKerRaUFWZhjNpIJfRJu%2F2DYgKeFBlYbkqgEATWR8fFQfoxtheQsfB3JwMnzWM1LiPMcTMIMtWZHhssqRSXHsiv4gdI8f%2BmHLzBQPyD0CBJz2tCa6nTvlG1McN8zNXBL1ljPS74iCO&X-Amz-Signature=a5e07f238786bc27ee63db48272f366ba9af2ae7f468d5c579b38309d4ac59ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
