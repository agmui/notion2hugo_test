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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XDGMNQ7%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCICKyZBfdvHwfrWII3Uuwr%2FoXoAQyO8VnY275RMQssZFjAiEA1q1NEqYOJ9DvMAN9wV4Ka%2FaxhWX%2Brx7hzXJlOC1TFeMq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDFBCi32sRyC9plB9gSrcA2f5qRJo%2BQr38juiBK%2Bzyc5nGCY2Txu44JqDpVyEXicvUU27B2bwkeikMwNwh3KZzhRAhXPupr1s8AEbD8oxat9jnG3Ixgke0QxAc8I2nCsgvuZRiubWlNj9%2BQhJKdiIaY8xcVRm8h%2FzfkKVvCDkZZiat5zonGPGueNyRA10%2B29eUlxK%2Fo0xC%2FynO%2FcnVZ%2F%2FwgMJldV7eTixU2dtqIj7okj%2FQoIq3GZWW4B%2FIhhdxsazfdQAEhnJpzCXOVbV5S%2ButyXYh7H5ju4pCH1fu4LI2WJFaibEXruCpp5hqlJxh%2BfEQ6J7GsEEcdxrqSDHce7n9rDnH1zA9oxPAWQDQ%2FTpM7xqlWSXC3coCjfXi6mGv4JLT4SmI0Y%2FUbAy5wTAntJR%2FfzGYqGflQS4Pt%2BSLiJd%2F%2FpjAnDcP%2BimeRAVC4xi3gi7E3IawDGOd7eeU1H3w0c6npb6NkGDR7uygXgbbvaS4ehBe%2BhqDuXGR7mvyl3LP5JaqJmYHlW2fhINkQ6pzu717CVpH56KxFkgnf3DGFgndjtQN2rsaMs10fDG3xU5QUU9ottLpiLho9y6NfClnfhtmsXMP7PAK%2FbFnPbAbAnFUllq4YXb1YOgok0VleFFvgPgTBXPoCBN3fanmkZ%2FMN7c3MMGOqUBk3TUpgdgfImki6TLDoPOf10nhRwOhAcuHNHmO%2BzCRrj8bSnrFevB%2ByvzLVrqIC0BL6EC%2B2WqVvu3YeWlcKewlxnXziXf8ID0sW%2FzOk%2BxZIN5mUsEAcsTJuNF%2F3ckjf8BrC%2B8APy9hI%2Fcp6ZIdTpxywf%2FutboDWiT2NGkoqlDhjkF63HavJaSzlBid5WsZ3LalBHbHGQNpM4Snww4XUcIs%2FIuSsSU&X-Amz-Signature=0f115411c5fb76dba4b0768ea03ee8e46d7f6048ee709b29adf7635717ad53c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SREXMLNG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQD8wAARmYcOg2Fb7lzhohb%2FCpma3c2KCUI1f95IXByuSgIhAKlvo2LVSlDMGBRARz3PP7kG7V%2FvrWqHTFbesRYsX8zqKv8DCFYQABoMNjM3NDIzMTgzODA1IgxpKmn8z9fc4TFHBWQq3APUQ6ZzuM3BKiCzinCG8k9fUZioBmSJvwb39lbNI5msdeG0ucAQa4RF86KTTmFEPc1D9o36eWczuCqmSlmAnXnB24aA6smeo%2FK28c4SSm32M4nP5JgZcbe5WGm6i7c7GCfRR%2BGLKnJRPtu6DMZVRvINXi%2BWIuq2pr99%2BHgj6uEhbb4BwZP9L51WLVtbNaZTkbiZaxBWVA16%2BOZslrJTB0KhZKStQK8TvJLDwFLfoVVRvGzqzOBwmVngvfsCZ1XSYydUevTK5xC1ClcgUiGIw3RyEB%2Bz%2FY4XQgJqYbx2NfleZLDdW1UwQnN0Pe9KXK3SDG4c8UWttRFyUbXWa%2BNq8P12jthxIHdB1M2JsPD%2BBvJJRjOe4hLVGKmbMt4t0tdxe001oe1T8QMvB7rvxWliCyGuNrRuyJbdLKZYaIV4ma0XB%2FMxtobajU4Uuzkxfk6ZVQR2WQuE8lc00vDkzafkc1JzJbG9Mg8HJN1SfIeY9iKrapjyRa7%2BPNdJRl0FU7pTKEUkMe0dXfAN%2FwrJPs7lA%2FPQyDSmIVctBCQJlk273nJXuM%2F1myZHbn1ItIxW213VGkv7Ike6S%2Bw6bibrK8ZAViwrZogJ0rMyv6bgv1X4EU%2FehYE0tev5EeeYZDFNDTCv3dzDBjqkAWRUl2phXPE35GDjiLoGBU7oosAJdjh%2Fk4Ps4VDH99k7jOWtVu6i1tcz8fFlIQSFFGRopgGVPNJSkbZusBskowClV35newMYFUnbDWd240vbARLRxK3xTQEPjnolt3a2s%2FRz%2FFCl5aPfVkJkKZjcJ49XW6KUpL3qfNtSCMm07fZq0RNgUJc7qGwjjL762DZ8o4YEvoLGBppftuwa3NgtOiAOQU%2BO&X-Amz-Signature=0b34e41ca375983d3b23d392d8a5f7d1bd83cce33d2c6b9520eedf4f099bf810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
