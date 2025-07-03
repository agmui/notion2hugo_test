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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WTJKFLT%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCOXGFlC6DRZdnStNTRx1xwtgoDh6F32gDSSivEs40XIwIgIy6fHJmwc%2FQ74zbxjk5BDW7Yk6Ot2qnOtoUyDeIZYiIq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDG1FpWEp7KXxPEdvHircA5rIFirIkFDVmGVny4Pl2mkuhsuAbsTekQgUtypFbI5tejeq8%2FN38TF4sa7r1eoDtJ8FClME6NU6P1ZPOW8dMBBEsQfeaLbwJjPGd%2Bs2CnHvg9XOtW%2FKgzTqQFfN%2BUZBwpjrFJehXcJNXL0mLI65%2FSaVj4WH1zOGgSmmhfvIAF50UImAbGBBIDVeMCaoK9mr%2B4fY78UMHBmZpQUrtaw7zDsSODvgMjIOIWIQ1%2B7fp31GR03egqmhkhwNOpf7S2Tv%2BbJaZqeckscj5jqRMy3w7ztErfccxjAye01lBhwwf3xVnhysyTJQ9wwPn%2Fw8GP1lfz51eH5jovrRDtDXSlXZdtrNDQOnrkqzyxk9e95PrC3Yz0thNL7ZaMW1gxbFQ4okTGHTjXtwt0BnI4d0087zaEM3Eid%2BkGbYiUUQXBjNBszbO7lZ%2BxJH5%2B0u9wBBnRnJQD6c3K0LiiVIxFtgUalR44VjJfRihTl82cJttZpIr3o5Xs5U2fbBohyWGhXlCOAcyrKMDSqif3J4HwZO5zboig1kOFCyyXhJq58ab6%2BS0XIYRlYzR5%2BcZyq9zR5wgINWK3WIxphig5%2Bu%2F%2FhtB%2FXCMGTbAvXQc6tQgcsUsIOHTE6PyeANcXVBObv%2BFsVTMJKNmsMGOqUBuPrUIy0myId6Bm6dymnoJ5jBBc7cyipyrux1AKL7vKkCw1bb3YOKIH8S3tuBa1AXiXlZB6vMHimcbcPfAByPTVt3fXQg7OLqfA%2B5nzDAZPtXdib5CYPQHmj8b9kseogxU3Kk2bqes%2FxlO0idxE2lu%2Be21psT6o6H5J7dNpaFDJNQmQBmEe51gD2XGnZw1fwzVpk5CxZvtVF393mTkzTnSfLWriX2&X-Amz-Signature=d7390852b5de631371fca2e0d810634da88aaeff3c7f3733d85e4953a9c15332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GEU2MQ4%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDLcAuE%2BcnBRjysmW5Zpe7sn0WJmwlLFPu5CjR2FIwlwwIhAP4%2FCwm8Ur8cGMsYvgzmuvwKa1uZMg1Lfx6StkzV5gRrKv8DCBcQABoMNjM3NDIzMTgzODA1IgzKC%2FTcHRYzhcZca2kq3APL%2FIBwt%2FZ9tuop%2B1YPY1DRpBACTXsneBAmfq4A%2BRkTpUB%2FxKJH2%2B1hZmJgiEfRX19TrG%2BHYrKlti1lKa92%2BEkr1NK7gWXwnYhDKynNnLgM2NNumvxoRSRKFWNal97qFw7JmV1vwhuZyUnmO1JGtlLbD6k%2Bh8k9Zguq2Ysm9wpqkzsPZ6xMw8k0nod3imwfCiUytYykBQpPft8dMO7%2FC1am7qiY5M7N5Mm9VKHXfYGqEZVCgKg7yv%2Bq%2BDCUjS7Wt8RUlBYmumaNPAt3u5mcv%2Fj5cdvLNfmD88FiPMSrEHrGHx659KRzynV%2F%2Fduwr%2BQDkj33AiEg7RivFhK7Jz4SFLR%2BqPLghq8EsIKM9VqdHEl7TPHO9RwxKcm1JQfPF8WO%2B0yLdbFIvJu5eBpNPnDGGAchekgR2ce9jqwmjB0xh8JTVoJ8uF9%2BylTDcybLvfsRGU3Wvl%2FzscfRSzeLQohQkrfPScd3SGcZ9Japia3WT3taCxA3DKQJcpFCsl7jY%2FXYj6Z6XLgS%2Bny2soFb%2FJo5yoR3WvojUkkQzeDNbSToJGx8A9a4EzFSEfADOc8Aoq5bgPUzudgDN4ivqER3fUHeRijP5eW1nQVrKDHwaDylxf3SEatvUKIwO4RsJZ09QDCBjprDBjqkAQqYABDdsCUirZMLqJjtUIfqqXlXn%2FA%2FD%2FoQCtk768PreFfAG%2Frlno8NfSvKPNXDhLWCbTfoRhDhhMLKhrN4NV5isjXsgdlUUqrYX2wPQ%2FNhn6713xyWF4P0%2BeiVYgkuyxx%2FMIXl8TmbPJVW6EbMcXn3Pz1TbgL6TtwL1RZC%2FwpS%2BDQmrBxe0sWb0wE0cypixOoQCRZnU4eFw%2Bj7la10OyQ%2FmDSo&X-Amz-Signature=b230ed4a74dbf977ee9c9f93123ef97933a0505dc3b2329085e1f8ea51fb1e8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
