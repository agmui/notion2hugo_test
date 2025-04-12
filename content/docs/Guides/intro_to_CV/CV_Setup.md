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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUR4BBYS%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIBwXX6SFWBwYI9ZCAG4Cqz3G7cmyjX67NtTnVL4n5kXJAiEAoyMGlAWdp8AJhDTAkrWwyDTpARn0lg787%2BPhw45pFMsqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdIl%2FFbF40ADsRaWyrcA%2B3%2FoTAmhuG403n%2BTVvAXhF%2BVX7EpetdCwathECdrLiz6K7XnF8auwTJFs%2Bd1%2F3RbSYENqZZjcDgp31fE5LpUckRMT64kMYtf%2F1qvcF%2Bd7q2YGz7LLKnJ%2B00KKb%2F%2FvGtgPrtKkRA13BFeixA2Ae9JU6m5rlQcUUArK6TBsG2%2BhEIvkTiFn%2FHVQKJcqDpGX0TlicmF3cpgn13qljhd%2Fj%2B5KyrRMeDWJe1%2B6jzv1m%2BJ3PVRgNfBJYe1IUk6FuN0NlLz2Lsr9ZqJQMJfHX1%2BVAoz8r2kPdCDVC1H2T71im7Iq%2FDCN8MI%2FIEsvs7%2B3AasKiVUa1pT79enOar9ccfJVuJbBryBekoHWHuW%2FwbiAmawORHHCYxruDC4E7SpKdait6MNLkzoNh%2BmqQgn8%2B%2F3Cg1%2FxXeTvsNZplztmrB2SKlMwvnIKzrAGS9DFnFkqZtYTr3A0MJC%2BBb90GzhRoFTB2BlBQd5OJ%2B9cPop6EFmNtaX1Dp%2B0vFk9szS%2B9265XmGLbe4ocaA78o%2BoT%2BDQadFoDfZbu3O7TlBdjOEIcg3mPLyur5M499Ro%2F8kW%2F2alvgp9QEeS5q0GHTLc%2BInu366XFzk5VnNsKw51e4ICNQzvLMm9MfDUWi3AGYvjNzeP%2F9MJ776b8GOqUB7HR9bM9fIOgYsHstkT3rAcJnd8qhH6RAMdQVdyQJwg%2FhuDycFsP4Q5O3C0e%2FidS95Jblic4qBt0%2B2aiDeWrZayRyHEUzFja%2F6XrsbElg1i8UT8GIIyDNFdEbGmwB43FDDrK4UIJjcvwuKwbzhKXl9kJpus1CS4onUqGdLMB1yNEZwoLoLAZZugGcmUPkKfNuWCF2FErhcyQdbeB5StxJl5%2Bn%2Fxie&X-Amz-Signature=08f6c6d1fd8c989fb3719e58b2a9cd80f072f06128ed67f85cac0a87e6bedf7e&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647PUGBQB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDD8ZJ0rgVxW4Nmk0RO4zNr3CE1G5yx8RPKqRMf7w5WnQIgFfBgsD5SvWdfwdQxCgGeRpYrGKXEY85FDMUFT%2B4P37QqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpnUD6RhX5QQkpCSircAzd8RsR79BhrvvuI%2FodKYF%2FeMDglz71VU7dT5JGF4rymvvh8zdQO5J3195jd4TZkkPsDtETDEIqMUaCeDuXkt2RFWXolMSbGhh66fl1Hl8Tni0GAvKdbkrLXlp22NWJL0N7l2qhxkmqMWb8mjT6u6qQl%2BzcPIUOzezFGAPPZe4NIRwYzktFZHXAKzO92Lh4O1IF7cdCM6i%2FxfuF1QAQyMI4USJbowWbXj%2F24IHnRmwmcaMUO2luNeqNMdu8cDLGArLALxmL%2BpBjYpVbMJhZr9pZM7N7VaIS5QBhZZgToG5cRCWAifb8eM2FO9THRdbPGUYc7ABGBpz%2B5IXbCjbqklokfOyMXvsixzlZ8nOV%2BraocUNdNo2DQewkfCANAwGPCtkR31AELYPfeU8SWohgoXo0tYk6igEw2mnkfOd4VpAdSpqRAw6i1RfNqC6rhr5jVK0QyMAYP4Chz0aR9iAllHFQHHG2clGQpT7ZWrtXb654RgPqh2RUUjGL4FbBJsDyod4zpMf8Pp5%2FNfTIdvV1zfsCJq%2FRNthxMQqpjNC3YjVpVf6nP42CgjhM2N9AJUmWXWNOIWbYte5Xwf0KIi5hJFShZTFayqWNM1ZvrLXrxeKPLXmYlee2qNXDE6YEWMOz76b8GOqUBQ3lSMFct0Jj3nHe3H%2FhOSxfLXoB4gtDu3fDs8vTN9VT1cKvk%2BK5ehfCR0g%2Fc8TRGD%2FU1pdlhIQeOegvqVEM3bJGGjLhkyZ0qyqmgSqDfjiA%2BQe%2FMATbyX%2Fb5nTlaiQdfzeZhbb5JzHYqC6%2BAWQCZ4m6IYEBWiysK839zZi49811OzMWWoCYt2YuHdMA%2FaGyiqvoHK6lh599%2FCjyHZAZzBEZgJpnx&X-Amz-Signature=72deb73e29037d51f472b1b2df6849ab72681af2e7f91ee34b5246dc05991b62&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
