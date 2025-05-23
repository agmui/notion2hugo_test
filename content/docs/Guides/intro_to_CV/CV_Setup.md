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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQK3GLLT%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIDdSm4o%2Bu%2FaDT0IsLibyzIHIlH%2Bs8gq2t9Hkw0Wvj%2BJNAiASeoHa2l6i96RGUevAqD9pp8FCfN1hxA%2FucgycOWRpGSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FIXknjvl4bxx5kYeKtwDV02908Dzz22aOArhFT2mtKVsyUuu82uCTlooJCTrkIoI%2BqHb%2BvMR98p8%2FVaPAB3OFgwdic7KOP8Mw7T9NzHf7Lq7LgGiIobTQLN%2BpUf6ENqxQB5hBlq%2Bb9fgoWM4oIBmjJURaNvXNsa9JetyNrFuszajMiN%2B3R%2FWO6gosb314%2Bz5QPiTGOgCO1KFVAensZkak7BMkmEMIL4o0U8MIhGJHMhNgnKE8UUeqs%2FhCHxAlM356awVCtZai5CmJ11D76znj6AAtPV10bPl0LftIrbM93Cl6LCByaxzgQSnWl7edKHDfH0TRY0Hk%2FYaQI6kpuMeg8k5uL1p4Qxw1C3rwe57s%2BPNVUDdTzUQBusY5nx0KGa5s2%2BnvLBFRKm6vyFyT3Q9m9bqtM6H%2BjqLYVhpoZIiUDRB3ugnHj%2Bl%2FHDBvJhzW6pjzV4JU0292T8zNM4bl2Qd7C6N8la6HodTxxsr2TRAORhGj9qe94PVh%2F0zSfZKw8%2FCEKoRmUMXLnxXIEGGMVv1E7bUqGIEooOf4FbKKDR%2BoXmH6GWvJcg5H5LZV7BX3zzWZiF3QRvO2uUzrond10mo6lZ9xuWUuZFUdMuq391cg1i7E%2BaxRvBFc8wVT3m1J%2B%2BR2OWbysRGEbAkGcIw3fLDwQY6pgE0CUOXfVXLmL1jsHq7sGtQ1JIsYUap%2B46ULdUT%2BAdGAMIHdMYV0wVK3QcjLjjqbYODHZilwEPBltbj7NvapzMr3bCdDXTjHyDoYidtiXvAeRQSkgb5Mht%2F3CEwZyu554WoVHwByAo90%2F0B5G9oauQCwALv9rrG7rxRRdRsN1Qi3uiPBQYhV%2FISz5aK9mjmwhxMNm87BllPCddrZ09RqR63m4wN5SIg&X-Amz-Signature=f2cff6ae504e298397bf30734c05a47d8b1988cdecf1689c69924dd438b42a00&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RI33UOF%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIHAaXwi0hbnOkeC3ps2u1Il5Glg66P5XykL6K5apguPOAiEA4n7up32IE%2B4yM8GYSPKcpUETzs2OL192a%2BEuI59rDqkqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtj0WEnXS6ok0G2kircA1fiUM0HZ6rM0fPC44YuP8gjihBGidLiDo59KBkYN3wTHe6oB4nWF05%2B3CcP71lQA0YkruU0aI2YVhRjpfjXIeM00StDJ4lW872gmwEvrKNA37t9iPRw6HAIzwjqBhAZpc4rL38Dwe57nUgXeX%2FqdfKlnf9XhKzwDOVlIpgwK%2BE3hsnkqBQEHjCPbWk9LidaauuzKQXCqlQGhQJBwri4GMo1xA1QLgYOPZlwComBPaymx0KoC%2FRWyvqCvMkMKijGVa2hlsJxHE2advMLoHtfH1Leacvh%2B7YPqEnVMQgArZnqa5riH%2F7RWrITDa7MRoY6btgLNkLQlAvgf8S%2BI34yB7RX9AveIXutXUE2uP%2BJkd9IQ3ZKs5bWOc2%2F6hsL9ZLm1x1EEJmWuLObCkCYF%2BcDv5tEIKxtpC5Em5SyAMyCQvxFPnMRfJe4iHoigjeo%2BONnpR53AIDL8ZXo7nY8o8r%2BUA%2Bkx6VBCilBh9jSeIbpoSxNAZMe4DymDL%2FNfuDVzjUIIXvi7SVaXLF4m%2BjoD9JZ6E%2BYfzq70QBW61tQzwbzp39But9k5Epa6Mtb11XADykeApyd1NUO%2B4va0shrN0PnMELsIYzj%2BaPpr4xZBaO1Rtr3YJSJkuDJAwpJdWJGMNHyw8EGOqUBDKOl8fVPxdUR%2BvaGvlRZMyHAa9wJ7uyqIKIkQjUYNhqTdW1cKoWetbFEQLLbMnCt%2BZEoKCBYZJ61W6ugWl1I%2FjJ8tocuz%2F6yWFRJz6V16ZuKlbuY7fKpBzCj%2Fv9M2Covx2gH%2FPLE9gXBXDsavLyG18Mj7lW7QbSdQ7%2Bdwnv%2FtFQoP%2BSSFCXuQ9N1OpRblCzs4NOKAE1VwigSJmI3G6OxS67ayjI2&X-Amz-Signature=8e7f06ccd274e79b899ada837aef27776d9f71854b47534602f47a8d4a2cbb99&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
