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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5YA67JT%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtv6ACmgGsqEcQpHUNqEj60Rw8D%2F76pxlHgDpU3XWLuAiEAymglsxsnGdniQ3XaVf4Sv1sXJjk2fuLgVIRGYgPD%2F04qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbmedTusWEQqLVj8yrcA83tU8xfAnF%2FR%2Fjo8f0JrMDVvEfHP%2FMHuXJMn2LEG9tbEJw0nPb2WUALwNPtJhGZruCM%2FyVGXIskiRkUpM93aRsGQpvkg0IKABdemP1d%2FDGcfFO1%2FlrqLZWAlzYulWIlDx40yXub%2FiUkSdNGwUsrwCTE%2FAQ0TVkHCrtUbUm%2BAls0zaU%2BmexzOgQ2RP9W870ngAD4mXBPmyc%2F1P6gZEtnGTBJ99MGainxFfxjSnKqU6RmMgQdPtF51HoqUNlQyDH440wk5oZfFghbDRrh6zOSwPzGfKsOgNl3wMbTWQ9OCCmaq%2BKC3bp02vHdneSAbznCvy6hlyHxf5r5vu41kCxtf7FgfW6BT8uyFBZfLr9euD1U2%2BjHxvlkmtkpxI7KsrPaEjDdAxSGg96AXzUIpPY5xNYwj0eyby1leIkbVVW%2FSDXpNr%2FvT3Rca12CcMMq48ug5rqL78RagsGD1sxZ5JX4%2FgaaN2pwfiwOsckrHhVJbMbyHCw3AKdMcf5xOMTHesngL0AWfeoKUDn%2FfffqzeLhEzEsmbpltlQg9a6Q0zF8dLmUJysrVYxWUhMdEn6MXWaUgZ6GOxVzvU6KE%2BXZRYCXcD1izwSnxPHnSPT8zH1XVFxFFP2QsIbvhhY3HkdiMJ2k%2BMAGOqUBETB6F9IUILrkxamWr4j0EQT2yxj%2FLFZTI1AFswvI3OjN46VyuzHMpwK8R1oN9sXM45oOzH3DppwfAKZkP0%2Fb0Jg3vzfyVHKaho25%2F8Zl8hLuBZtw2nPRISjC33HNXHN1aZemNiYYmAFDARud5cHlFYMylGVtVIfOtbdwEMEmF2NrnWCSQS27Ivn25B7x2EdEi3y0ENoABs6qgo293uF4vlcjyOcJ&X-Amz-Signature=7ed59300d2e982c7c522bdf074a3d3c50665016ee42366d827c11addacc3a61f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J3OLJ5H%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNZJn2Bbvu5sV9kYlhcvyGIqaau46waFBHADceXCe7WgIhANgRWVZFvvXl%2FnW%2B5RgYjiLHO0ifFDIZ1W3xw%2Fj2%2FKrDKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3JH3rjSTsoj%2FxkKcq3ANblU0Tpl1Z3ZzX4gthRP%2BvphH3rycpYjPsqvQEIzRcOEUjVr5S0%2BI0P1rvF%2BL0JDSJ3grwsuH8Gt8y8ydMz3x35m7sIDd9NNbvQpQfcI82W%2B9FOL2AAxDfBZtYp0oFHAtj66ea2MacGVsArKdBhjB8kulqalWP%2Fk8Fg1zHT1BRFusqB5MGm%2FHAHvzedpldKf5btXFpcZZDqbb8vsBL5O0cxPHbMS8%2F26CPpbupth8qjPlW9nMk47FhWZK8NrDWFNdnJkYVZ%2F7sBgeXdNCPE3SQ5W6jCa8dKE5Nbd38jhKuf2OXR5YBKhSS3NpRTX38YKcM4PYjirrvSVW16ruRmzCp%2B780mz41yBhjK50Z%2Fs963pKoKxMfhvLDso5Gt2kCTKkU6UydJ4ummrA4C1MizOR5JjqXapz6NR%2BWEkMTcC3pgHpzmDI2KW8eKESbuWhYbS%2Bp0sz3CuTK6jpJqrbrLMz69hYRebShRMro6zZ4lcFxCxOGIXKgjKa98h6Rw82PGX47vTiJrQPz6QT0r64dld37xQ5E4J2xSjb8Uw5sv8XMufaTc2hzBLd4z59shkeatboQRBp8ZsmJ2dCknKRX%2Fi0%2BKzr50HKxu21LsFWC6EgdItKSoOrCDbIgv9kG4zDzo%2FjABjqkAdB3rd7d%2FhbH4mCXLqGQR6YQdtnUXxBjuVFldpRbUfVxuZR5O6G%2FgThECTQnySIPrV3CzVbFxoeGd846u4XexY0vMv9%2FQcBaUp3RNuOxGsfUvgrP7aP5XclIiiMna9cj7aHlbGvQkYGs%2FC3yTuXde3o8b7cFBkQ5tgAaDD4TZdnZWI3bfdue0t2adA%2BEcIgKa8BTbYA4gILCW5HnRD%2B3XuCdJSdt&X-Amz-Signature=dd1c0a1841c6c7a999af3a291260dc63f3d16edde44d89a85487dc45ff408c1e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
