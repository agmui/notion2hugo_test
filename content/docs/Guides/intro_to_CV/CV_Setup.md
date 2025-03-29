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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6NFINYZ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIAuFYultVeM6YgOnytYV33Itbxw8ga9oWgc0PAKC7hQMAiA1RVImjgeecEy%2BRrVNu4ZguXf8c634Jr4RTSyGPFtcSyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMQrVHmzJwWcd5rT6dKtwDLc6SK11kFhAGSsB6HG0xvkOI1oyvKpLwYO3zb%2Bppkx3qo08eCYobywzGiLSXk4k2%2FDGCirS0Rpgzff7XmC%2FP6a0HwitQ%2F6O1SJ62BS5QYBy%2BTAmekEZIFwmXgedkDc6PuoMNtqXk012CBEwHfyM1RUpPY8n4Tdynlwg1hye1RrVZ0pHPs4cZKkrZ4qmt2FdfoS0jtLXCotiCcyI8PmqZjo0pXpM3XP5tNLdeohlPrA1xQfT1u5qFtefkR8GcCj5JD17qITRtONEOVpC2huVcp89zTE%2FeMubAkZTjgWVgp9SwdFWWqr7GGu7XxiL%2FJnNwpugyk%2FsKJzpWYK2AfBwPUWEHmmLgtlPZ1G90KEFah%2F4Bp921b1NkIww376cTzotXj2EgoANnxEQqoifT2k2VEKyxmMzUtAruOhxqce348xRv4dNXu6%2F36E%2FBkXSNW9iebAD0swkmDTF%2BkcM6jkQ8pwSIBHBInE64GBOPJgvKRV%2BA1PQP5GzQASM1xCCauvUQVA%2BSJkQqcP98h6BbAnO3bKrYkeluMMzNpr1pV3CASx87yWfArNKVkOiVYGA3enpE63oaN%2Bwz%2FlZmD3oh3ZbTa2Dk2avYLcTcn7M0VDLghXXjWonWvgwY0jYEe8Ew%2BtuhvwY6pgGSPxiOfL8JW5b0ooZch7LxHyi4uNf6wHIhAC3tvYUyz8R9ptdUssbFqOx8hBE2LGGUzRC6ek6PV3bVOWjpAAC3WC%2Fvs75PFjdRgnCUEs4ATuBqcKIaFLKWyfwDwzkcW8%2BiKAdQ7LRCNgeTl%2BG7zKifB8LlV2f1uiMuZ%2FwiKYErbEagl1L5f%2FhFx5tsxPo5ivzLQMvV26Ph3INCY8gSIER8ove2E543&X-Amz-Signature=3477976599a9603e903de64fd4693bb0102345d9a988fb43f805e2084f4147da&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7HY22E2%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCzVVkY9GIg4i9MCr2OeIX7hC9bud4CnfY7DAf0dQ9Z%2FAIhALaodI9ZHEPJMF4I5Sjxty7U4B8KXEOXkwbpYuXNy8CmKv8DCH8QABoMNjM3NDIzMTgzODA1IgxBvTPBKYkH1E7DZIUq3AM%2Fk6xDzdjS%2BYx9mMVgyYDHWHRpCyTSUEfx9zIsBuEPL6gO9caTlBeewChgg4gSwNX%2BR5OfZPkZUVx2uhtQ7uJN%2FUOgr0dN4asWpr1vt4otNmmI6RhMM41yJ3YH3y9wac%2Bu9eCa%2B5fOxSf3j6PeUiXRoa%2BReN%2BsLXrSna8lSO9YwNHVVRfYufTAgK%2Bjh1s8pKIaq189cD0OsfdfieJAAq9or8aFJv7iAQHVrB5%2F2hziSg0SffhCsps%2F%2Bjdqg03ihy5uEUtd1JOymXWjHHNanPTiXOgmHNpVobnwDNmVvny1vOFuE73uR8kFys%2B%2BuNA1%2Fm8S3v6IxA%2FJ5Cq5WkYl6H2S6MEFjydkR%2FbfTtMu1MO4jK8XRb3zupjYjAq8r9QcH5uW%2FDRIf4K91YBqX0WRUM6r2T2OlK%2F25haBy651VYCI0JJg2vcBEVLEYLvSKmUQPsv3QPXfQ0iQ%2FN8KTZMrEePpdxemTbq4QHxylJu6FXKkmlAgV607z0fZz%2BxcP2XDy9zMGWT4Hd4WxEi2doAo7aDGUXMDGiR4oUEkEVXzOToq%2Fu2jccLm%2BvnBvHRHk%2BHmGdcfM3OYwVg%2F%2FNlUYPPI%2BEPZbzJ0CoIkp5N%2FhdaWV9HtQLiGKIotbBnyfWdqljCQ3aG%2FBjqkAU56Jqi5MNvJwvr3%2FptP5p%2BbWI55m7yDTOb%2Fc7m4VP2fqXwIH%2FQRlAN6vDxkh4IFoaEk%2F%2BOlr0z9KgysY94eCN6D9M6JHb7SNFpivdvO4LE9BGHzIFXd8V%2B9GYPwCWNj2zPITjlFyFOIar0RC%2BvX40lzK9OCRjFNqUHKFDBsQLsHfbaPqYu71%2BXYid2Xf91qZRQtKac1KjYcpcsIieERXqzdsj9N&X-Amz-Signature=76629ab5f6bfbb80803f279eeea231b8c9b6a4399ead0e9f64943249ac910211&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
