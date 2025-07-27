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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZXM2XO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFt5XWC%2B3wQaYuLdM1fpD5KZXv%2BWp1O1%2FIfNdRfrCQw6AiEAvQ3IiHHyB0UYDOWXVYO1I5yiYM5EqC5RSTZk2htU3egq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJHfyRh5jGiZV2swTircA2zsNErPaAQHjaAE%2FJUhIl0EoQpr7gk3iJJYb0L4Bp%2FV799KX5LlDprXsDlj3aAYMXS2qhxF1vblaihB80VWYHMHmTtDwGbsTPeVGKPaOa9k20uxznVPCSvH98aAhZKsC63d42zDssTgf8JclG9D0zUyC7Wqs3Gu%2BIL9kMJpVyx9gb7YXUJ7legXWsP%2Fx7U7BNSdCgMKEg6T%2FJSeONQCRBxzvOlunZdUDRR4%2FygL2kEd0npxrAcCyOAXLBUp8Hr%2BbSRZKZsjIkMcd6qssmUHCvNGC%2BX4vJzpP7PbEDYFJrz%2FX%2Bmukhw9QlMKc2J7r4DC9jeM7elm5Ur5P%2BT%2FZfYwK%2BxDsoGynrn9dIE2h5v9rEdrLqmPIra%2FREyv%2FpGysnUJSJVlB2GzG5a7bjBK848Kwg8KxGQHdwM5YjhjKsJrBGeUvO%2FqVn1ovL4%2Bs4GnR1VOwAN7yFgXII2dm75bXXAAZYFtXTPwZCkGoqfVK1fsGVCtGV5SKXpYPn8e8cx504R5yeVoPMSBUaVbMDbUvekpQysVtCpSR7rtj6oIkkgpuXqI46KD35zPrup950YW%2Fudxc%2F3iURm7K8l2mzBDhOUQ789EzwQOrUZFIoX34orUModjyd5zUSqZjWLBnEajMPC6lsQGOqUBR%2BcIJ4N605V4JCeM8d55L9xg4wh%2F0nK%2BFN69btSpLJHwNhBrKwV3Aa3j47NbqohNul0h4rEgkxtIlvLzNkBzxYouP09oARn5ood3FldIQjjLs0axbDzNiAKfIiLSDNgaLz2o9Y2My8egKsU%2BGD3ft6nB2FMW04fdnmvQvQJkZ8DtYeBgQ2rDMNiwxdYsjPkt6Q2kyFZNGRaBSDDH12%2B6%2BK%2Fp5DS9&X-Amz-Signature=79140cefb79ac0811a39b18b53d31dc05016c3d81d65f7afce08f970c9a1b275&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AQN2475%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFvwdqa1%2F7w6QCcxEziKZZtDQPYH%2B2JBB2e%2FyP9eljsSAiAiRQCwDYcb7bEFqWML6pMuhsXOColg3tG1ZDZPpby3nir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMQLoKXQvgSZSnrX2lKtwD%2F9JY9XdL95b1JwszJd810n49f69gIwU5%2B%2BSzK1aEOODVrKq6gnt8wNtH72pCI2dtHBdhkewb1AE90cfe0tFGZm0zJWhRvWy%2BeE0DPxGpPERdjE7eoTlw0iXGgnMZuSowVeRMugkUZbv%2BhfvbdctSiBCSAP%2FF48Ng7tKIMq6PkmSPgYb2f3EF%2FWzaywPg68bINerCbVSL5No8fx4YVHf152ENNjHY%2FMaB36mKWriu0Cldwn4UPPzfSu5YhVGm5nBUViApGpQXX3AEjy%2FwWPBerODDyCiDnHvvcVaXg%2BqoMbxPDrN4eTrYGB8TgqWWiBXKYzUWniXp7ZueK627oszK5FYepoMt25Vkr9Ag4Gf%2B4yM80SQrVamM9VboTcKpASa3Av%2FbuzsTxaU1wsrLv2ZYf%2FLXDiel03qssId4TPqq47Q10G18sijeb%2Fq54Vm60TyiWn%2FjUgBz8P0exMj42dPPxqv0Q%2Bh3fKIytFrsfgXnDVZL973Eenx09qVmYbFCxvZ%2FIcTTT%2FkQnvo0rYtJ7MUZLt1JZnLyjiPoTwuWsi8fDP3nXfI57OtBQjv6zMV%2BpBERjF9fET13UQ%2Fl39MKq3Z4trmfqOgTgYg1pl8i%2B2EG3Mu%2BKURrp6zOajBStcYw%2B7qWxAY6pgF%2FN43r3UxZ%2FcHnTVKrR186NivWK%2F8Us7Z7GjHzGz9AD%2B%2BrmbeMizSUdumDUZqDgNpbhOqO1RckhZjt8SLhwfSo9o0%2FQJ8cbxrLN3iE%2BPqwQFE9lphMkPhCmSI2P3%2BunoPZ2EtSerk8QA48J4wF1qZWTso7jg77uykvYhNJ4eEjflnJHxSO8OY%2FAqk4qm4PupeTITKLntKuI9HgmfIIoDDRcw4PYW7n&X-Amz-Signature=0feefabfedf8df405b631b9c96a32558bf937bf59a632a7eeac445aa70526569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
