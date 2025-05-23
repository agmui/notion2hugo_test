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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZLQYKN2%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCQ7yz7YT6%2B%2BYanrN8OZYZkspEJil3ZXXSBNRt9ZyYxLAIhAIn%2BWBrbWJcMbvkvrBcsv%2BZFF5I0oMurht2GnPH3lfSHKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfE7Gfw7QwMI9t1ywq3AM6h1KNlxY1rrrLAdny9z2ZRs66Emdj34%2FiDS0dJZDJBn%2BkC3r0yFkkoSKK4eLiwAMgnCpw7KEntEpCXQAR9Ol7dOjjlOyrgIM7kkMa9rMDHHrbtQOkQtp%2FlHLjXqE%2Bp%2Bn0r33%2Baic5Zy9Ajg7ATC85Z81Sm05x3JUNO4ir7Xoqf4WOTBix7V44h2JdfJVUxMzYZT4%2BZuCK3HJvEq25blo0s86RuR%2F4sZbgXsBMaJOkUwcGinYw87kDrByHUhijHa7fP6c%2FAk3awV%2FkUeRAebXy1qf475ybuHlRhYKXlj3w%2Bh9rvMq5u2Qc4bwvg9IfVqAxLLA%2BUnMgc4o5X5IkGs5wrbl9FCI5AcBd3dMRxckFw5g70Ms%2FolkHHQAEs4DheC9Z%2BEBwYN19XhimcUdsgg41505%2FbKBkx0dewcHuQBMj0zYKjNYYNHKTUsmzKZjd9GpRTGtY%2FKZ0m%2FgRxNgTJCJT1UVi4%2FKR3mpZNnGNWL6Qy%2B6C%2FpVD1YliO%2Bag2HFpW2VhLsjVkOmpShW4JjBeAgzz%2B9z2mVYEFy2b0t9UeRfsaOgFzE5hSqVA5aebrKuIuaZ0R%2FlA5S2i18lB9O%2FfLAeqZjr21Y1MqJJFo%2BA5fiQdw2jEoH5EcEwlSxeONzC%2B6L%2FBBjqkAUTvL0hHW%2BkDMsbDq7G687TNXDIq5vpx0CN2oxHxib7NPwa9cF0jPSzq5oQdPZp23F%2FDxYmGvW5ozVxKd7fcuckU7LPFONjGSyRxEGWN43%2Fwfk530eCU%2BbpQ7xZC7671irWtmvsGLILSzMd1qUlc5SlpOMXN7L0AANOMfgYjy4vzP2IaOPmaMHXiurJm3IC0g%2FOeAxspLC6vqDbaIQZaVZ5mm8TF&X-Amz-Signature=2a73efa771ab3a87c07302a39d09f325bda3626b82d63182a14385bf81a5e2e4&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466456YTQHI%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCdYiVH94%2BscSZl%2BLAsSsCVcXRhsSC9X5zt8xRIXQ5RIQIgZkp98S1gdqLA%2BplDcSMOU71LOoY%2BJmCTg4ld5%2FhT2NQqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnB5hjDXVbZB5BOjSrcA5r0DUGu5vAntlfr7Dr5YhvKWEE2YjodijZBt6S88DsioTqZ9w%2B7HxYkUaueHOCVYqLJKMffaHY8zZjkLx24tWYG42Im5Ah4TRl9rJdEEbSVpyoIWUVJVyMP99ptOJqaXnXn%2B%2BVcInTfiqCxTychtRls9IqXZWSO2ok02nPQO8i0wjp6d4g3XtT5Qy2JvVzSArs6pI2WUDNkZh3J4%2BuncnxXACfK19mbOvz%2FWXemCxxWMRjF2KL53KM%2BGFVH0KmR3C9vIWyfB3ANKg9g0uf8P4EE%2FmnGJw9ZAVyiiEkWm%2F1R%2FRxf8pUAfULOLHTO1eY25jC1e2dnRw%2FPRO%2BAiM9s%2B2vWNarHtJ8gLkeeT2PPY9lBPmV8HMSU1eIR4fESXQ3kkzP%2FI6aRMhwXQTqAVIuevD2%2BTVFJ94o3aA2G%2B5SnQiT1cMxo%2F0gkvaks27nqB3ZBACnX0vAb3AFCSWyUeHrHfqKR%2B8%2Fd0YDi62FAE15tqs%2FVHab2hfdTtl4DzIsh4CN4WQA%2BGtOdJuL4Rgg47sUpEheQd0kNWFaBz%2FclD8qgvtXxulIJzUUM3ChHOlrUt5taZwgJDquiS2fZDvF3voy4uHJhRwvOvNXy%2BAsF9SOiY2kQzJgCV5EO5py%2F%2FyZiMJ%2FCv8EGOqUBH2zrRou8EUyQwGgGHOPpxhIJFdbSFw4fRHgDgif3kVM1it3TcsT2WmSKRmzpt%2BKtKL3ELazp7a43RhHkgf3bqNvbj%2BIJsJ%2BfUYQcCEp5I%2BlzBUHMMjqa7fDkOmU%2Fs%2FIF5n8%2FTYJul1LkscW%2Ffh14nyoZf%2BjnDcDAYMCTfu8hIDT6vQlZfgoM5%2BuEHnMvDlAjDZP%2BB8Q8EzDW5o8sGReSV2ExcD8i&X-Amz-Signature=195b34fbea685146f4452381be949b6c5ec2b246242fd7ceed1afa0bd994da57&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
