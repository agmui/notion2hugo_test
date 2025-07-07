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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644NOHSS4%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T110823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQC4KfEHXK0twgjYl%2FUUkRzOvWfjNB6QtqNQGBxapoo%2BdQIhALhr2uBVjgyKjD%2FxrMmxaGIMrXPBpbG7%2B2cdEHrThL30Kv8DCHMQABoMNjM3NDIzMTgzODA1IgzmZO3%2FtQZia%2FVmSsQq3AOqAsZgFl%2F41T11bwhvI97ngstUDIYmRz2ugdU3b4jZ9NeTZ9oi0ciKIH%2FQfLYW6cADygMEED%2FhjDpWNzYp3D7I9BYpGhDPG697R2wf%2BetKJghxgecxJ4SRKYIZ8AafEqovW73u7fasJ6T9Io%2BHlM0FEvE6u9HEoJaCZDQFlyZYnLt%2BM%2FSjY7ATC4tkovRnob%2BDVPe8O7SmGOnUkh5LLuHHzVXVFfiyWgTYSLdyFiHNavvGwue3%2B7m1KeoyiL3AstvVTOVFam9VCamPW30lmi4tuPOJtFAF08Gye8QS%2BRViSZ%2FSP0e4hOnapBKT7m1VV9ogjgk2jpEcRTgVg4TLuNEST3iW%2BlY1bWYzpc%2FEbGCWXduWGXwewINJuZQnzXJQs2izuoHC7r5blYqPzRigDEnyApdU8U9b3rCU6W%2Fw2gfr5Ajvuo8OOHqZcrc6xODA%2BYaUAQfy5nasVF10MluzmPt6DInF3RYOsc4Wc72eLifdC2o%2Fkg8WEFXZWbPfKCtzN3wFTLGD%2FjtIsxsqsbIB1JBUGRb6NobIO8XvW8%2BTAfzNeQ%2BpXrtWSt2DV4UZ6B2n7jmGo2Y6t%2BaP1YjWqLziCOIbOQiddddcLmYDWdM6EAL%2B3pqhcXpqYQg2DVONpDDit67DBjqkAbZS9hMJySgqC8AoY31BjlY0EmZnzY1lMX7gyJ4LtvA%2BiKIiOR6X3vKZo75u0dqTfFyzug9TR5uWc08ppMZpUa4GlYXvtnuvFqA2mPm7OgWkJ2nC5Nl65VK5EmmFrciFRuZBqxMw%2BjEmqVD1RHqIxSsnKtEaoC6yMM5esAweE5lSeYZcQIgH5KmAbbZmFTXDRhVSAqSA9TXJMroKEiIk5KvuvUpf&X-Amz-Signature=4deaf05f7bdd3b6a07379c511c22a914b940946879102a37cdbe191b4fe77a97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ERGVWDU%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T110821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCp5rZYteAFB0Bpx%2B2mV8Aqqou219DNqQ9OzFaDDIfLmQIgIvnWwKxv2ZMxp6Ofjv8AS6HkAKY4YvpfLLSq57IwIXcq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNVxMLZeYJFZpYH8jCrcA2yeJvFclLA5Q0mWTnrbA2k%2F0j0%2BNcNIiXonf3zrifRNX7%2FhdQkcwnfXMQD%2Bj41md4iSchq1ZttMWL3d8ehjpVhSkcwYxsk4OckqV88othXB8I5XqqlF0iWjE5UyOFTlPzHcQewan6MwL0FxY80G3Pt%2FZuTGuHshBKjY%2Fxhzh%2BNsvv2%2Bnl0c64azoKpX4%2F38npL16ikuqElAoxtXQVZ0BR9HtNzFWUYsOsGQsHPbVDEiTLrxFPXYMUcQtmDR%2BUrsgtWkoOAA35UHIawPsHGUpYUqXLF1Nd4vEzeizSN7e%2FhmdMLT7cBKV8Sf%2BRBCTYS7AbpCkih0GftHCGS%2BQJdXn4IBp7CmQSINjuWvGwDQ5SmvTXrrV%2FzFYXWG%2F3oKZ0p6tPklNicsnIlI3%2FMh%2F3IQNT%2FtXfMYNfe3y3OugzOvDzfSPA0JayGAdI%2BTxC81q3X%2Bwv36RQfPsVs%2B0wiYWXt8luqk4h%2BZninPbHBZU0TWY4bhJcLoURsRwBvKe%2FqishBqgIOR17oYcW%2FBl%2F5rM0x5jYRptI%2FPihNzsCZjXUAPAuazy9Ul156TgqdJcdws7InDY0724pZ4Z65lTXJVF5M%2FXuYvXb%2F3O%2F65l0c41pdwjriYcM1%2BH3VsSyyCmgSNMMm3rsMGOqUB3bAa9T1P%2FZGoqF2yIXcay3Fr7XLMtmg%2BdPlrrJz%2FLFU9tdaFEat9yXxyfuEuvvPJ%2BdufM5%2FWRWDY1YduAkbNJ4vY2qt21DGCnH6TO0BPkP%2FuQryipJNmSG3WrsrcCAsvakk6cvF8wOISlP3iqpcoFUsZ0kWM2bW%2BbbkUgu6xP3fEX2BsXC6jELsCPqdIjsr2Gd1WpZsgMa004JqhPf1K%2BtYiZvsp&X-Amz-Signature=10462d9030e3209b56004c3ae87a7f7ed9712adae6dbb8cdd372cf5f8d7c263a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
