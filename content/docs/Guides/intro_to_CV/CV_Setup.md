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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODSBFUI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCVMn3oGvQIy3LmaMcoYy3v0t8UxfGNPGFRzyTPfAPxBgIhAISRncH3%2F%2FxnKBXWuMLLenlLq3kuSoXHr5i%2FK634RtFhKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhkMrB6SG4kyFxLY4q3AML3TvJ1XFYalsUDy7MURm1Bmau%2FNpfa82IjdYU7VY6OUTVsepXgIIcDKew8xZvqIkPlxqo9BkPkmYN5If4i5AYiXoNyhCwb%2BwM4HoZIRytqL4tEimjeKCFqQr6A03OUTYp1tRt5SptgyjWAMWfbIVbMOzvhBMr91tbJ5iMZbR%2BhwQxCw5DnmDfxjfuodLC516h22zhRmvbB65ZL%2BlD9VKybXXmp0lTEYIWM6xEs5t8XUk3838XpnEk78r5UGnqhjhQf6K6KVgT03PPVV%2BLpH8vPVPHcu3w5wCm%2FoZTW4zp0Otzj4Ta%2FfsBh9Izm05Jln5gTnAZ6btc2wmeVBCdeEDgsChZRtkoThdXu6c6ij2%2B%2FRXkbMpFn%2FrDrR3Hdc1RY8xqInuFkdqABz4%2Bpxik7pVfkaXt8EPMol%2BXgoFUPv%2Bt%2FzWBjsQx0qPxoeP%2BlLbNuFw%2FHQ5fvlWLfUwF433bKMkSQjcIudR83pvSnEuT03%2F5ZoplStWzzmMgjVKu0JQzg7m0hhR5n7PTsdRJaWA1geliNZPFyrWjUtW%2BJOiIiJHsW0KCloHP26RgoAi4PNc0WActlX6XZShWGVSukB%2BqLsezLbKyla%2BZGiastZJXFxKsH4L%2FbB00q88yfpWo%2BDDxodPEBjqkAWmBn9HYNqfEx3yWInZjJmwJdLJLnq%2BIrt25ygAEOdm%2FinMO0hlexhCkuV2LyKNNeT5Dx5lFku95mETB20HjPthD593q7Q%2BYWgM7q%2FlQUvs5p1QSfj0JFQJiLyLigq%2BIzSWwtB8r11F5I2dKN7%2B%2F6UHL%2FZb9XR4L9nQuy5jdQ0Wn9THLn4PYFG68MwFDewPsf%2BnIOXjDqWp6pCpfhN1NZAHijxUv&X-Amz-Signature=5a8d489980ee6b22184b5393f8bd40705ab8802b1722bb70ae795c2671cab303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GWPCN3C%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIG33XbscMfu44oXSANPtcXbJXFBvbCo%2Btz5gzHtf4Az%2FAiEApJyHRaA3ivGIL9rrMBZe7PUYFqh25JqV%2Bcc%2B2IUApbAqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLPaYRxLM2k8d2RhCrcA0OB25%2BeqLByQJAdgrskpMQEBC9j4eYEIbrw%2FY%2BZ6KPnMNm9MbSlgbLnHT0fkgIBZyNxI7cOcH5W%2BkK6cM6piefKDkHmwhe0KmNyt483qYGbyN2rDR8Qd6IE%2BSBAmS8sIBmW5tVmDo51RKFNlHXXqIHbwu24v4ixEsDscDvrolKDoaD1T8f5CMUnTkXUV7tDyeofnJFlTvOkvnfDiU45qip8kl1TAsgUVyy6scJZiw9EnrtYxyxcDYar4ckNUtiL0Lkz0LsetxQDKAMR7r2vHxH6neVeblSTugRxrIDLTPeyJNdfqkjAdmR7aLBPFyGjA1Ybee96PB6CLhF8zpfFrkZTYShAGonGN8Gi%2BVEqrNZl6IDvR%2BVVQ7EEwR5v1Ewf5RHZbWcIXMjYC5MOfHEPnWxQKmgn7DIKxxHll6wMaiTOvwqNNi8VmtWCz744FEm%2FlilTTcudichA2damCDOIag1mhnUFxKL8lAfd62YHMlAn0Ev83qg9zoOe9GrV%2FQO9xoiQml2u756%2BOodFTuMAFAtcxe8JfsjOJyvH34s9o9nFqvoGqUUJdw7weGx%2BhvjeDhMLGPpDBjIO6UGUep%2B9tJ71TWkAvkzbwRS1a4qIDxYlfpFf5969owQEJukKMLmi08QGOqUBwY17N41EnXQ2DNhE%2FiOkMkO6yiaC8XcvNgYtkBtjnXVSN0d8BCcFTqHKANnFdMiHaxk6Wqp0r4WMp3p4eZqHCoKI348J5q%2F%2BYZ53anQvjWnIhyFVhiUPA1vUetmBKsfP9h3v7xHRkM8x7djQNkbFlPu5zSUigCn2oqWLkzFxazzCV2b2JlmHB8tXJAo1tKWEFae7zf4wftDSG2oOJC5Gun1EC%2BUQ&X-Amz-Signature=948d50617f976dd607eafbe7d436b88dd05d7226cfdab2ed9aabd49dc9788788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
