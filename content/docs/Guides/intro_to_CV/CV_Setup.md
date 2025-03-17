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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4YVTXA5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbWGAmgtKu%2BORLheL1293b92gHfKFT7EPDPfiGCGvNkgIhAO5qsm5chJ9F%2BuMAQ7q1mJcAY7UcMIuLz3zzEew6FXNXKv8DCEoQABoMNjM3NDIzMTgzODA1Igx%2F8TE1By6d8Y%2FeRloq3AMk5jsXV06uQ1ZL6lM5BU1LwSrz3VwNSLcJcQPmfdQyXU3s5UttaKEV5BiGC8pHCtNONMtbBeFZ2kuDw67K8Ao8b6RdXDdmSdveqzCMZ29AbGaDCUmpDJOwkN8Y1%2BVpulYDMUfta2%2FN3rrFYfV3hYNb51zCDobFujcEhGqwnSR2p%2BYhz2kEL2yHw6pff50kxoxY7KPPsh5Z9zyjOgHsrPjyH3Yg%2FPDiw%2FZbDihVNqpomoQS4a8F9ZgJROXU79yhdC17Uxs5X8Blz7V0JsMF%2B2pVUpbNwlOjZXcInhPGxYizz37V77cdEYU2fnX5fMCx8vlSS1MOYZk6eMf6N%2FRFCAkXJaJiGXEAwYv1VO0fESmLULRmEFfUt1cZJQg6qd4B4lldwG7HcncqCg%2BZvXJZSBQ9dWCnFCmhmabqYzhCZup2i5aBjVWL%2BqzmhKjHI4QJC3C9zb3Hd5vxVb%2FFU3IY%2B2iKJB78FVYe07gjAywbg%2FjUhTrtM5HWY49wVfUKfEwj4kghzTre9vA5oavOJ7rbEZmjnCETu8jIInHArnKoBniAybXMbqk%2Bw5DqzUSt%2BUUMq0GAIfO9AU5QYSz%2FlKYlPClm2aKjChhBZELFYGRVXUdOh4wJ%2Fz8fn9hSdO%2B%2B2zC6p%2BG%2BBjqkAQJdzbOveGvH3GYH%2BZfeYihnxVMYvONAEgkBicuBpP35ERVrzM%2F3Y9Fa3IvUKDjdEoVUMEfjJa1ADRBF1J%2FBnjWJ%2Bquaw966sYzTAZbazHiphjVyjIIWB1lLsD44ECLoURNwX4IxfcK8XEQ3Iw2qLt9tMWKMs3%2BTN2XoyXCSwr7qI7y%2F%2FXkxe8txEo9BGsfKu4FyXgoQhar1oWwx8kUFoFfy0riP&X-Amz-Signature=3b581638a49a194e4ef1316b262f29d73a63700c71f1c3e8f854fde40b38fedd&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6EC6UTD%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZS%2FH2pKDg5QEqMXygWTP0ZmKzzW%2B%2FJn%2BnmBgRKTxbUAiEAstJM8ze%2B1V061OSA4sPQv259Nl7SQPjZwK1fcIJcfvkq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDNruMkJtSNBLFxxbmircA0noQwW%2FvrWgReH36jnHLcaNkFk%2FAn94OyL%2FWj8WXSvt1oD4tF5tqSGu6BtmiB%2Btxn4OyColVOBXxruVWoLyYokvfAcva5WAs8P0YjPXFaGUeUhXIlDr2gnfcqePtp7RALIcZ42x3bOUgElhz9ndxxXF3me64fr%2BI5fqzTqRneGRZP944tTPLxP3bgaVAz%2FN2q9Hc4y%2F1EjHDSy0TdCDD2sqawfNbAG1RpRFa6Nax%2BCtfnrJDi7%2BDiY9h722GtpK823hTBR1iIj5qVb5L%2F3YZGBUCAz9a9mrY7ss6LeyPPfBUG4EsCwnpeG8dStF6z2p2IIoohR7HYUUeauWmM%2Fl2C%2Fn8bw5hNU55ge71wAyyFNFgh%2FrepoPLQlg2QgBBbnux5RUpGygxIvd3cl1RPZU6Vypoa%2Fu00olFu%2FelBHYrp21nzsQVEGSSBqtaOykV68iE0OQ4wkkwPqs1XJnkCwMSfqNYt3r6UBc6PVahmu3FY%2FlVz%2BJ7VzYKr3ZCX9uT8lsFIu0KtFZ2bounMiJs2NxK%2BhKSo9kyRg2W1j3MVHAJn%2FPrNDEnk1FJ2fLbkFzYzI3%2Fk7Dx38EuBfeKsN7rWrH81m0T6RsIY4mfXI%2FKA7zgdPKe3zN2ArAQoJp2BueMLin4b4GOqUBhEDpSIk4vcc4Cw36ZI%2FhbmmvpjN5I7it44ZZ%2F5rotylZ35oBzJbTyE5Ug%2BNEpTfx1Q%2BvONLvwgE1QBPa84Y7KIiNXXQLKLSkbBPQheKvb1Ym6rTWQStqU5Q5A53pq4MNIiXDZo6F%2FXQHCQLxPaIQ7MiKSuyPJtsyyy%2FWJ0fMBJ5HHnIVNPLkQ0yrwEO%2B8Hz2LnruSjxBe9GLfF%2FhYzX03AuS6NU1&X-Amz-Signature=ccfd1ebda7962dc5f34485f2260ce6286217023632742ad0db6878ff6d5a89e2&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
