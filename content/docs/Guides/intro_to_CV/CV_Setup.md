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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSAUFYR2%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIDnlsQyfqX2BHW5qfeZRi%2FTJbQratYjeRiorglWMTtm%2BAiEAycjgqVh7Iblx39KqsaHCbTpr8CZyJJF5gtafA1TB9tgq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDLBeuQKSuPC4tDiNwCrcA5GQdUNULg74r3Z0R3HO4esCsybkCwNWCH3%2FhGYrn03CS59a3ojlrPwQhHOLQBr73OXTcOZNcl7%2FoZNuQcDtE2KKZs9MWR%2BJECcfUufmJCn8epNLBKWGQwMzKuuEqos6%2F7PNTpKLeSWpzKFOCb6QS8DecZswhf39bdYy76sa2U1fddbXPsEqmmgOeQtk1v6%2FS5CiMi8xChoeckC65OEVbJb73JDyY3osNux9mI1pZEFX2Sqm05uJ18dOD7g%2BUtCzhA8xdzSqnj5H8tbhtns%2B%2B7LGtqDZT7Yup1hwZE5sL47eshAS6SQ0ilMoWluHU8LmP1Oe%2BCAe7iSwc1lfcWV%2BvPmxdag463uXOsV1JcurYdcItdUeyhcq3wJ2FQqxVhg2nYWFeWm00V9pBKsKPXPmwVckr1aVl6ZmabJGw9nnZTWjQsQo18WTSuyZP1mcyYG30ke04DcaZkEiOw5PszMHs0JcAFL5cEz2bzERfH2yxKkbKETbpYCEaJZyMjNqdNpvM%2FhnERN3o4lUhh4YttbdudBOINWlIrTDUryoCy1Se0jbsmPxmycWfyIrVoEj4rcQWEu26w8m8oBkFlrHrgnxTaoUIVxemzF%2Fti4SN2uMSCS0Qfdxu4BloxNqHQGLMJfBlr0GOqUBmQvyCamiejp7urx4w9t42ElmGKOlLeIzNaV%2FxDaf24CZn8O3Vnba6HNmqzENJPM%2Fc8keuT133gGJytIc0UZDazFpFZh8HqZlrXcEtWD7ZVVzukzgtPcQtWKLI8EWFsbAs0AOVzituFYJ3tGGma5%2BfjXgpyXHaH72RmfZSKuHDNO2qbiLmvg5IUjzWGcnzqgCu1K%2F30p3ikWKftTlWuZVrkVlMvJh&X-Amz-Signature=aee769546d3ccb043c0b8ca4aebef2f7e90dad064edc775d7691e8a814671258&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QIPLIKE%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDTzPRdPI31UNB0Pc%2F8yACISpr8FPO7Vn1grBVIG7yJSAIgOf5b%2BgEK30zJ7X%2FYuJGBVmWLhZ2ViNDDQbMAExwL4jkq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDKrEdWD4Y9QODSObxSrcA7DBQVM%2BzyNLNd%2Ffqg%2BDGjrltGBrDieWMv5mgcwzdIvCd1iDLIpm5c3ddMxPcFgZUx5JiWQ%2BEftn9fh6%2BL5Uvra28YIbzY8qHM0dRS9JnFYmZD%2FzN1Ea91UAKPvv%2FQQf83ZH9INZpHs%2BEPoVlYDSwXo0oez1zkD%2B3SMTtkQBJvIlxLImBd5mBwiYcp60QVso74s3ZTBlR%2BRdyRgiBEmg%2B4H9w3ArZ5P8YM6%2F1D3IuNp4w5CVkF7xPdqGk1It5cVolNnbIa8kg%2BSYV0KBDA%2B7e%2BVTkIgNrmNnVdOR5AMdD3c6Rma7kDjr9aX6up3q8CpUNSVvIBqXPY4PCIRSXNj051UWkGIvDbQmuU7j93W4McyGHMz3OENqpylSFpCa8spv5ISUai3%2FOgYVt9BFrSWWUXb2rEfBKFA6QjIpvSPZtAosM%2B1A%2F2mz0J6gKwNISpdwbCcMA%2FlKisv9SBTkPLgxleoLRAomqyPRqlOj2UgxEtOIoaZ61vSAa3c68uZL7YoP3FTWqg6cIPO6hm8uppnmYrvIJfMkkAodrTMa2k1pYyrWkZVZ1yWOsIXzFda5UxMSLqtAcnyJVIeLVmH0ZltmPI0A8pAK%2BrYDY5aDlCJL3RVfIMctuW5L%2F7Jl1LB1MMzBlr0GOqUBQyRUDB6aIfWq07bkR9ElqujAoYeYMWETF%2BsH10CGFziEFkwWIakakCKx8hjhBQZ1CXTVDvutOG0uhPl9%2FmxVK5pL2eDOE651qxcXmrKWOl1rZ9UgQoKKRnshs6a7i4Rana1L98v00xeUgv2y8gSGYsDd73ETblLes%2FA7fnzmJeov0cNJJ9kNBD%2B%2FlHZrvK2EHXBeonsF%2BshznE6ykEe15OHT2h4B&X-Amz-Signature=fdfa9975d8e2e9bcdd75b64f73e2339fed63b789e94a7ae8d76fe702c732ee57&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
