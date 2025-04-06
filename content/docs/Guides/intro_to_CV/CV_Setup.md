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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T7NOJIK%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEeoJkik30M9eTPGg6ldVadDGY13Dgcx%2F1bJYf7hKXgpAiAFoiF9jfzg7M7k83FRg%2BGABevxFQ3sG%2BEWRu86bM3cwyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMRnlf09vY7VgGcY2bKtwDf7ztNfb7yuUde2dOL1ZwCLb7ek9sAYQ4dVSTDwa%2B1%2BeSDU4xmYlUyPLK1ChNUQaMJ10SvxHvdZusvzUT1docnjXOYlVJShqMy6JluilADOjdH43s5mFhiqbN7Mb6jlslpaoqXV7%2FpJY%2BukcYPH9JkttjqeS%2FOE479IyXJ%2BLhf1jD5fV%2FgcZkMCSUdaw5XxvGA76x2pbiObptuVlhMhwF11Rv5HL1auMewRA2XOEJIDUQO1KctRGwWZkIltJiSIQWRXIp5PdEdAIqC9GhcWwY5WTSyaM%2Fw52pv5DXk9ch5s%2F01Ef6EMeAk19KB6k13yoCKL9IOAK1cEo5GD9IW0IVIIlqGMH4QHPjpvPCcTf%2FCfGfMjMnIxK5ayDNThMqbEeUyh2eTZXzvd7ZoF4GZGIq4KDlSWcPpeWcp2X5PwNGyVwXiNQkekhRHDO4tM71oIeaf70n2mKYMFIDrk2Ar9RivOB4eVacNFdhREXX2V6G36JHFkjOoQPz5ID1zFVNAjgkKhkmzPOhoujzNbGvUUDAmMSxIzv9YRSBxWEYYLq%2B6xSD372GlqqOmJVjFMu42uJTqHWFApOmY2DkQEm1J0C8fa60xvYHxjDSHfswqmiizYnHOB%2FjV9uKzOVzBXYw1r%2FIvwY6pgF50pptJzpNPFcWCE2j2NzPYIXumZOi%2B8ByLdjBjIh4IsNVYFVsFrO3yHIkH3D7qLTDtgrvSxZD1enIqIWUsnFSuj%2F5UUDdKl7rVlwiRAJUgkFWAtoeOHLCpc%2BOoO2kJbQa0sdX7xiPbH6dM10VdQLjvHQPRClqAFh8PlzXiWSHjT%2Bs1HkRJsknG3ve3PN6ilsCAIXAtQvYlUNAvqmiB1rNVLNTHTum&X-Amz-Signature=792abc005f958e92eeeb58e7a0c0d4e761afa3d3af6beac880c6c93984cdd243&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD64U22P%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7IpwOndde5q1bc9TTmqDCnG4We8E%2FzJixId%2FP7pSh4AiEA0J%2FiHcGLD0GPkHn4skuqoFuUDZ8%2BviEcwNI%2Boq4nhtsq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDEB6gfEiIn4B1HYgGCrcAyhbLo7vNyTF7a%2FoCs%2BgWmPZ1MmYEkYK97oOHb%2BVPpUO5zhv5agHvcEqhb1qJaxZvxDL5YG2GnCdLjC0N0gQNLv0kBw8XL2ReNtymy2ECm55NFWp3e3mb9cBSiIIEzrvu82tH%2FtdinFz1w7oCaxpWonyHbxh75NquRuLg1Yz08iyYOarWafImZfXfyCQIYQzBGrnh9X9wZ9pxhDV7O7JD01rkvbgauWMzCFvA2sjQKj%2FiSKAUYdPmAUzkb4WCs8bs85NBsvZyFtvJW6%2BX%2FjNHadWlytWcKhvjQdz4gWwuVntKz6HymxHJj6SQ13Q7wf4ktYXBspGBYdmL1r6n5L4lLw7aAOqYL5XpSL1WTXo2o%2Fp1M46Ajg1O1SJj7LnqEhxojEF6BCMzimzHoRCV3Pscx1IF%2BmhEvXW1ej90f1k9%2FEIevS2039UZoAhhH0yl6%2BFqces1yBX8b9Ou3Q%2F6SlYZMmX%2BioQwJnMYl8K0f6JNxhJHkRk53qce5bjE5reR2mTHKbxnNcBTIaMsCfGzP2YG6zXPuv6j8DyRMLbKAbTlbi9Ta5sJ4Mp%2FZSXpkjBAxiqr24yMcYQE9aVOPcuv0j6odDml1AS%2FJlxPFYyc74wsxyoNcXkQaXfYnCcgH%2F1MOy%2FyL8GOqUB9jxG3URhBG%2F%2BDD%2BI3geD1wRdzJclW6prRBWRTYusIxMWqUu6B5S72hmgBwW86BLeKIAuojeJsCe2%2FVKCl%2Fpa9NI3Oizl5sMWEGo4%2FINins7W8Zp0AKRAktj9dUJXYug2l1yQhKVq5BLxRAkAzYreJ40RoTXuddyCMPw8IQiIiEFdyll01BRmn%2FBuMvGIaDEVm6Nk1zEsve6S0SD0uvCM%2Fa%2B0f0iZ&X-Amz-Signature=f0be1626add968852bcc84e1a4c22a5ef96992f20b446a068422017f0ef9ecde&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
