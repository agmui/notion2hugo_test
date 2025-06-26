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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TY55OXV%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIFAGOeRCEcDk5Xcsv6qjRH5C%2BVMdXsfrEK5ASP2p7So4AiAEJ7vkg7dfH4uCvP2K%2B9egaRNlt2gcMXQHako04LnBIyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMuzJfQEJryKpgFcOJKtwDNS5X6hW2coxHJCZeLqBn14c3qAUtNL5ykG0szUfNaUfqtxuiUMSe%2B5wcIMo8jGDSQCGxj7dSWt3Z0Co%2BM8sNYSBDCMCSYFRCJyfPC0Ba6SmB9Ik%2BeMcL7LAYA9PLfrUcs%2BwvDtQczjm%2BOT3jgrBCoLN7gWT09UZJ9qRg8WdY5pvfP0vBeaim41zMzjA2X%2F4dOI1AKCcSJEHLnRiDyC51%2BUZdTf2guyrxJ8YieCtgw4IgzFQLQFMVRo1LiXa%2Bfqvk1zKULxYdVc%2FiYM%2F1Blnq0jQX8mLc1FegwihN09SR0Q7%2Bm1CY7Zgjh1Mwgj%2BapO2TwoWNaEYRVjoGlfi2%2BQ%2BoLPtDboFJksCrUeJAmNhEEAy%2Fxx83%2FEUoBKiNDdnzvM4dXL1XUFgrmDpU4LaG4GZloIFFAYG6oHKEcr5P3dWpe60GczlWCM7habz3HvPtZoeMGNr2Hr3AyaZ0S0a6FTRCa5kYOEYK8%2FvqSMBVA9Cp7YzFcSR49xjsC%2Fdxk9wrdMrTVqTufXXn%2Bxpd72z8n%2FBEkNuuc8Z5EjVK2z14qZ0ytcJCw2uODohMkuBdMMtORM%2FWr8On0cro1OpAOcfa0sNafYCR4%2BB4aq0xKqOFz8Z4G8zIGbNAZIMx%2FUosZugwxonzwgY6pgFGjGZj7KMZdTOgQGmOVWTlD1nvFWpq6%2BQUF5rnubkbtmVPEyk1YPgNcULwLE5u1Rc%2BjMES%2B%2FSwouSyAjrfirXnQFRZf9RfZ3brxOrm7fyed1ewCPCI5wXrp%2BPm%2BJPsv8DhW69OUFiQJNtEYKQdlcfOC1ZQfmLbMap%2Fy7%2BNMn5iW3JdQ254rWpabbogcvYKDpNL6%2FNzM82WqXgiSFM9V3%2FWnKkumZJA&X-Amz-Signature=f55dada15c51363841f3a4aa56fba04dc74cea6d75bfc9af029c034e4a784163&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQTS53RV%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDbL2UqG%2FWzHZkS%2FkOBcRXvHWPlqVsqp002%2BWSGKBm%2FMQIgZRWSJMVLQhGY%2FdOz5b%2F7XSx3qFq0F6kRYyQVdI7br0Aq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKug68cmVOsZXmnmNSrcA9vhMWGnLEnKIDJbOXF%2B1ediO6U636QzwEkM6nr7VBuF3hUd55so4nwgFsMGDUWm%2F%2F%2FSrzzfef4AZCzmoJukch%2FINX8r8oVwHmbPVMBqFncBeEu3ectjdYm%2BaT0otZq0Sx81wF8qjh5%2FawyUIYvu2XY5QV491VMonyKgW1eDg0iEaXT69VCd5j%2BVw8Yx6gHmHp2OaRK%2BxD73u7jozxduZbcM%2BMfDZuhOj4qOWrfgRa%2BnrxUBDRM0L0Z%2B0e%2BU5d%2F%2FTdYDCKakx%2FYbbz7R714e6wQ3x1r1%2BI4EjM5sdgapgtBEhMqMSxqgf2VssFcKr7fzsOz%2B%2FIgpFRiXq2yDVSgk1jK0sH3NzS10PX%2BmUG08dRtwnzfuYeoH0x%2Bm8Y3GByVJ93W3xafVE2wJfbERAZnP82is6mr5m0MtxPXhfLW96ZWWSfJB958bDHYXmNbmCXXr7NnC4ajo8BtzhALsT48mgN4iV%2BpctYBCNckVqn1KMjpCs2v8VCVd6bCDctjLHoQwchxIhxjipYbYZPPj3XJimFMrRH1QeDpgMgB%2B2uxZjXRI%2F%2BIIDohfELbqUTXkxP2xJNg63M9%2Bu2wYXCmR1N1qi2daP4W3LGkDgJrUOt3IesvOEGifLbtbGdhgDXB4MK2J88IGOqUBQqF3lEZrb4XNQth9DtOewEX0k0mTZPCmYpTSFqkyBMOIYVKjVuH1MtymFRHrhoOkgLf1%2B5WYqzXYFskSQznk12RJraQ8bGo2I%2F2p8gRVa6%2F6p0F9Fx6m8YNut2kvG%2BhsIfT%2F3kWZzuydTk5mTjfQ2wQiuhJV9PirGqAYjNTjWp8OOW1kP6Voi1TiVUwmMAwInHDC%2BisdUV5xevpZblXy3ktc3fac&X-Amz-Signature=3067b58cd7e52cd86e0504c4efb2e2b78b5242bc9d915da1589266695220e36a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
