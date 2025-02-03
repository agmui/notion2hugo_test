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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFMG25WJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDKnzFMO4hRuFIzJfL%2BuI4AOkSNrwZKcT37RriGcWxLEAIgIRNXH7EmT6uFKsNUZK9PC6GGxy27GFAqQaQU%2By6Of7wq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDBH3bqaqznyfLYVxPCrcA9RybJcI37fnOTSaennJ3EB%2BGggdR7jZEArGErLYaWzkP%2FCNolPRdHdlo4ytP9nfnjf9VzJt98Y0Evv0f6ZRrts%2FhUsuV1oC8wrklM58WnFsap8BEig2gueUX6%2FblHYCRTl6bG%2FZ6%2FW3oVpT%2B%2B9wfSNPEJuD7pXNCpbyfXMHamlle9pyZ8kamtcJSLki8feSVvBTRMhP3YVeSlJxOwlKxY%2FzCfud%2FahqHmipAiJZpxth9HBAXZ2vuaeONLqrcTx9NVh4Mc9YgLRCo5jBs%2FAhS5125hepIiGmkNHQSwkwu5WmMgncQwUE4M9On5003gMH01xtOHm27I6H6v8GQ5qZ4crw61NJwMB%2FbT3tYbG%2BRXBnEhGENbRoz3YS81w1X6SJtgeIlFNWx10U9zdkckA7O7rKDfEhX8%2BmBPQ9J%2BDWiE40uGdiJGrO6TraigNNcozF48puSute%2FMXNMLLFJjQIAf25qLzvYn0kBWvwkE4mhW6WFEWMfD07Fmzj2FpQZ0UwG8TV4txVdX50TUMpB0O%2Btza5pf%2F4%2F4nq%2FFpeZqu4yzL8eW1U%2BYRZ4y9ZqzVIfqTQlemehCyS6WbWdnbz9LimhBMyDGFfzeNkrX%2B82n9v5XeqSqFb4ywdS0mIpLHTMMS%2FhL0GOqUBc5tX0aMjtQJ1h7Xelo9OCly1jk0lMHacUJCW9eqZT0O36CuXmapRmesFmQ2YZOPFGc9xaOym0BgbrDMLi031exWCeLXdnWIxJ1SN5r38GcM4XVDNRGaLjSHUgW%2BxuxxuN3K%2F9BriK91MP%2BISMESLFx1V6NkihVF8qiQem3Pa7nmCBhk4UkrxRJFpDMmRM64fumvmVgOUNK0DRmJp8pGBhMTBuW31&X-Amz-Signature=356d35c67a75c2d4a7f851b2be5b452025b765b37cce165c8644445f5a588fd8&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY66TBYZ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDkPHWTMPfupVyMkFv7e4s4xfyPVqbAwVqh7myH6jgKngIhANfeWEobNjjOpAxKnaZ8s%2FUlt%2BCu6H0OBqMATXU9urypKv8DCB0QABoMNjM3NDIzMTgzODA1IgyqtmrLLDP7fSUm%2Bc0q3AML4PanOmecn5jOaLBn3JedSgbMCv9hKlWh8S0vugpyD%2FouT%2BHL9%2Fo4p7qTzP6FYsGeej6cz%2Bv5Va17nyHHDc6xmecR3FtRXJPNL%2FNRnX66MyaTny9CyvNO%2B4h9hJjiN%2F5a%2FGSDWwG0bigNZBFxw4uumPfD1agKOuZs47%2BldFFxdQd4yQ5rybLkN%2BgfwYEstMeZbdqC2nAzKySaF3kxHsvrd%2F2W3OLcgRJkHaQj0xuVvpHdEgSZJYiIoAIcoCzrZ3%2FQl6Wc2L6W%2Fyt%2Fq6MTodUg3VlY43crAuGsRJcSOxvJ1MeoT6kgzasRVxuYjSnbudmYnxKYzECEZHSRUjr5X0ULOdwCg6BZDL4rf09YckD%2FEXsaRaU95m%2BiLp7jq7Mw9Lm93W6Hp6DSUcuD2o0Rm40gJalB2xUuKvVkv0OvaObVrIHGWlT1rseeEqE%2FjdFp2o6GOZAeQuDjn%2BuVbfaWdnUjuFsRMF2YEb0xnbEKw1xrgX8oL2bxyXnS%2BtLr77wYsVwX9smvJlNSkTqw4EZnOjvDQ0ZQcWAxo7NMiqV4rIEeNCRiPRXs0KYUSzGyRnvPktKXbrZX94Eef4b2iN8pYtGNLycxhzjHOeDTjzL4SXkaV9WE9R5QscRnfS722jDsv4S9BjqkAUiKMW9%2FfCIJe%2F3BXlnRrZEHPk3%2FSzRNaxhttFBJqG%2Bc2X4%2B%2FsiIqsvMDgHu8foWriNPEj8gJYwA0btEnRP%2Fs9ggLfLiWOvn%2F8UXlTO1RPD4vhqLccwIJ4JcahlbiPQY%2BxS7ZZx7y3UzUM82mYtoQEkfwWNal2n2yzNdDNM7KAQtp4Idchqng3OpuEvvCG4o3vQri3ujrAustJEDtpTCnCqMAYBn&X-Amz-Signature=6cbb8fa5f91e1eb518f3ab5fa8d9e6d330300ccd51382e0e4a27e1549087c2fc&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
