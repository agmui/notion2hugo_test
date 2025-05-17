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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6GZLKD3%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFLEhnHcUrPUD8QFSryn8ZjLIMME3W6azHvd24YeMyggIhAL9OEGJnXEp7PFzrhEoM4KkH7oeq32FBKaiqAfVRdOInKv8DCFgQABoMNjM3NDIzMTgzODA1IgwHsO0tN7G3OfC6UFoq3AMWaelKU6ZqLxU8zFr3uKMfh5JeBgC63lw7l%2BEtPh5%2FSShaEkNpGXp1TkEm9F%2FsiiapQPIjb8ORUehQYD%2B6M2M5O%2FfPhhbRWYgqx61rLd06B557kmNzIRB3N5JV34cf0duD15RiIhXvK3Gg4RTOru8kJ4y%2BwgtI%2BnKe8NVhTxy3WCYKQh9gqKFwirASzPsFiAaOnyt4GAB%2B0soSj6hs%2FTjVRLPT%2Bc8ZI73rfKopXgtX7cB5SlaANmDIK0r%2BCfgFUqdtFJLm3YiAYQyVYMA8ckYIt3m%2BsEg40Xmessvmrv%2FKIuyBP5qGq%2FxOvDCzNRAJ%2F4g3Q1Rg0fpd8WSQQbPjstjO8K7A7j9YFhHCJfDFdTkzS%2BX39ecbofFCt3mNJ0c1aeMKyp%2FN6W7Ey%2Bx0Sw4B9IteRdLZNQNuOmYrwZ7uXS5dgwZG8fkqnmpcaUGU1YoNCsgR8DSFn5ndJf04fxyTgS0NpDjCNQtAYuWViNbMrF1uUKTYWYX20VDmcNp0R9dQPqtgkew9R2GdNbXB0vHDQtKUTCexfHvOpKTQpuPE1TmXO1jC4JeyqcdY8zk9cqPTxieJV9aFcvY6lLcgjtul4bI2a7nwLpctyOfPPmLQEF3j%2FaHHftkkcAJsgQ1eJDDl4KDBBjqkAVvObpNFHykN0FCZ6m%2FSjYAhbuetERey5gDYhbQTr3vXtwyxqHzwKr1HwPTv%2BL2hkosv7a1K0ZNwl%2BWCEJWm1XE6%2F%2BVUA2T5k4lD5hPUOpRjC4gW4iibpeIgsmz1NI2mx2V13kuA08xmjMliG5QOqQun%2Bybt5zIXluQ%2F853dxG%2FfSL89cGz6dYEMUqVfh6PciQ3Xy296r0B0mE%2BY%2Bb795n8n3yvI&X-Amz-Signature=c5dbfdb587741c95db0d30cb8219905e1365b39f7d1da985cc74d10929d7a40f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA25GB7N%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGlN7cKfU7wFKnGI1leDq8WcfCSKu%2FFCfy79PqdZn%2FGAiEAzTd02WJHkxHH4Sh2RyNWvH2PI9JMAQWdf5LhiZurwBIq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDPwWIu2aHH7KDdUMayrcA5Ks5mnSU3J%2FwtsLn5pX%2Faj9hKfO0am9kcayj%2Fzb9Wk91BTnyTjYPtohHiN3YPkQCMDRbeO4nHcRxXJuiZizl9l1MxXkcURYERZSX1CiU8KfvH%2BtJlo15kOrBnyv2KgFEw7eDencd3XJLn5QIv3oVV80bysW5ljNHChxEtzeL3p7%2FoWhKtjKNzdi3yQXswGl6zcrcoZWcNgePprl1fRlLdkbX8rc%2BIWe3hXhwjtGiOKUdgQzhFcdN5nz%2FLNPSdcjiOvfEpyeSKKn9t2M1qn5SaGbn0hYsjia%2FZVL7v9tUEkRuL3G8txZZ4jJvfhB54gF3aYHPDAKhef9AK2jF0h9hQIDC7VDzGD4DMRU%2BEPohSgIgJB80uL0n3fJbvxweaglO85cLekthBWoOsJouXMIBa2NCrtN0t7%2Bj0a63l3YmG%2F26xMAi3q1DCn%2BcxI41E3iABN37nrf3ty5OnBPy2uetzRmaHeEedh87TVT6p9zXHbe0Bj1KxyluUepWj9RBzLx21lxOWTRQZ4RceHw%2FFrAsGpO910wvYAifD7B0J%2Fc4BwmfdR%2BrJLCYLlEjtJmW9X1m3jH%2B166zx8B2YHUDsH%2FIa8LuDCHOaBgE4qudQfpovQAuR9F6MUYIi75YXcGMJXhoMEGOqUB5uD29C%2Fdnt2YN7IssibYgPVXi8Rtclj3ArtlcUAsDL3o4%2BMD4W9VPoqLlXTI%2FOV5Blsgvk7SqPhAGDdBDeKSmC9xh%2BhgnE5C4I%2BEgd60bPju70QL9P%2ByH3NeAzdwBYlnL3NxoIj4qmTqh0%2BKk%2FzEC3q7nrLS1Em3phFkeevDl0CQAKYd5wSx1gQGGQFWFmotIFwEDxIMmbNPvLSpcee%2FDXkUk14e&X-Amz-Signature=1f4ed8ee74c0673a799f5e4346aa4626f1726037c2cff17dac48da0d9d77d11a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
