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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJNY6DXV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIG0Upkaj7h962BYujiUMfde0tldAO%2FSNt7Q7LgywR%2FQiAiEA4RitYpkApCeMomZzgJHo3QBVGsDnba3ttLo%2FhN%2B6Tycq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNqDa90BKwpSy1BnZCrcA1OkHl3nCt8l59cUonLiqcx2XMF43gUSqT3tiq7taodfIrsXDHaU5W5N%2BJdckLV6aTJnw6QD9%2FMOsVGKEyZzuW17zdv1e4CnlnzNCJiJJCCT1O2%2FtVQdu8EkjfrWkWomzvzSkt8ElNKReLV5wloqitshapNwySXhVlnaXcPnzG%2F1HyMEyzG5WbBIDzMkoI8aTs%2FkFjTynE2tRTnoxuXqcPMuTz0d3rbqo3cpESLHVKIkituX15WcD36z8tEZ6LRokkeukuJIm5GYz9O5Ip5kwbGrhijcQWB5worIqrNfKpnFeH3smkh02OZ8bUuLn3FSDhItv0D8n9NIebj8aPKawZkh%2FUkJYCE%2B2QhI1ZqTsqEmkrgh7L%2F7Mv9NfgtlG1jMSljBmzWj%2FU7pf4qmUe2AnvuzgdEhNYLj6WA029ZQPNhALqhfMJOnON9L3qBgkJxD7WlhfQOkymbUeyu8lmOwTUQoxqEX9QTANm54%2F6mzVv5p88nkY%2B4HgrqT7zih5dlY6pHO7TNFWMZbcYbrSTg35UcKBBxKoZhzBQ1RR1d%2BCAf7Ry1jf6Nxn8rj7nVNaCPledT5DHzbJ0ImJ%2FF6xbxsN59GAkqM%2FknvBI0MVuCBAIENWbyRo8LMfzHph26EMLHOy70GOqUBibyfigvsF4Le0rc6SpKdYE%2FN%2B5zjuISCgWzg%2BP6dVvY1w66U7IaBzxtWhdZk6JZCu%2B7zv0xsQQKi%2F10Hq0bOt%2BoW2dM%2Brup%2BRRzzAk4HmMma2kpI7YufrBxzWbhOkfYT8gEHSY7Jrl2TZCIPzYa6zzQmiY9dvj9w3jtp3nOpPiCBZvl1ofQLSm4XgrIjFuuWWVIdh4ea1JClQqMQsNi6AhjtSwCZ&X-Amz-Signature=1225dc242aa8ecea9c97980c18b82d1c788f94f5b3d469cbf0d456ebab7cd274&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYE5JYUE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIH%2FCFwELV4iJFPDxwHwgBxjWIKkG5xaiC1Roc6bpVmgAAiEAhQx4b3FNhC50q6tv9orXVrSSz%2F9UO5UAULpF47O9uCgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGcsXzX%2FxCBjK4S5gyrcAwGVgMlh5FM4UvZzpjKLqh7aDpkty29EIcpbZQJQd6k3LpBDXHxHp8n8rAV4WFAGy5VPWeuFwOxcr%2BlW8OJprH4Ki4f%2FLaw6vRICsrflfddTuYXPYMX4NbHdTWG%2Fb2FW7euAQ6kQIkCQoPm70dnZs0HA7jw7F58rW3N8jEiETLApg8LKHqCpQrlkEKiETdWO7mgx9lYKiiDZINBnwmUkk%2FZyP6eis%2FWoccvvaSDjff7%2FcnVUJByXElolsDLontJRKj44e%2Fx28CIYwHSHbbY7ZDCOEMBw0iq4gHe9%2BovLVTTFZRSy%2Bsrk%2Bzro8bW64fWehKhwlBZ0WzYezZtjEbZYrhStHLmE2fyRogGidB6uG6fT3I%2F5df%2FZ4P34H%2FT8N9jGAAMwz0k8v7drZa4ZmGsaKnfYZzDZvUUnAp93qZ6D8elYPr5CJFxfeGT4qXmhabu5PgRRzfCj9oo%2FiTkSsoO6r0NhxqhIJXuXWgOgVMtQ0bsBxid3MDHml0epIIE6NeWAAGKgDTVilgPVDkifmYyzvE1fzC7KtnR5ZI5xDm9S6PZc2gJlFAmnQOpK3%2FFhPGNbODtBRvsa4hI8cqurX3x7rp4oYvuQa%2BnZbTdaj6aMfNON%2FNkC5TYwEh%2B7bYwTMJbOy70GOqUBaO4EhmezmFAXAqp%2B7JvJo1GnyR7LRQZhInQYdBD9HwBGKICxSsXgPfy1wX%2B7EbmnOehsVxn2MiyIebSVsC144wG2F7NPkz7QTNeBgJBGeB6ElHhLWlf%2BIQQcn12wjchyMXeUJZgj8a0YXGPO0OvtnvWg2OCql4opDs1tgQPDIHZ8VmFKFhsXv5U0WTtLWmckeGOTtshsPv5NraiZlWKynTYE0ocM&X-Amz-Signature=ca51f382e7039006eb2497aaf5d763ba824d4cc607e4cf483e5eb470adf2a321&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
