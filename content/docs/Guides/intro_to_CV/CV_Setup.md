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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CFQCECQ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSpo6salMmd%2FGSgBjM3wgUD9FmcCBoq5eXb32xg8QRawIhAMi8CI1EPmsa25dD96n%2FhrgU8FNLEGxs%2BkOf4EsfZGk6KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKM3olkDfnSW9WOSwq3AOZtPTWpRZGRtEJHLsL%2FFQpU0B%2Bcw4ooUk9slkBcaf5aefg6ZNtZg3G%2BnqjUqbxaRNqrZcOSnsltoxQwyrEje3HZSnjl5WoxnCylB0vd9xuPld4oINb%2B4ALYo3PgdM335tSdti7tAMxwZdfD9xI0o9gIon6%2FgzXtngsnhG77W9zGYWI5vXMDh7Qb0EiAfRmB%2BYw8eYq%2Bd9bSrOB7KOrhSTJUhtPn1lzob5xjMcdpDBduylNDIi8RorGDMP4yREXY9ckc%2FjzZJnYEcAH3CpxqUbafD286AkXCosHy4wdEcqFwgJLdAFXvCLp54kH2Y0TgZEKbtuDOOg1K728PaG4osIsOtcd9q1rIrl0%2FKodTUPWer5bCoUGY3hCfuNRQjBOGhzo%2BFG%2BT63DGM6lYUvK1eyaOVFbU7MF15%2BZFbWf4x0sZi2S7YJIkxzRFYTeLLwwnHLhpNFxMhx2uRRY2A7d9W1KxKJ6x%2F%2B8YUSpAvoAlRXfKty5usz9Ktw78rBqRYxGoNQPJTamJ7DlkuwGmcTjVxhLB1yreQbazqUzIhVf5akWM7uoacJAM0YWoxZ2DWINkaOUwMTTNIG6Y3r2Nrl%2B0rIjq7YRwyjMg2kI75knyRXk4HHxZ2wx4pm6fLR9gjCD9te9BjqkAUdbB3VvGMQBhmI04bFXbTEXgVbc7Etu7QMWuwWiB84JVbGoPW5uQI9pHRFHz4EwDubqt4Er56a%2FzyIi6flY78yUZbuQwsjj783Y5HpEDUTG7Z2%2B8gt2eZLjnrzsr9rwr2ZhZHcu0Q0dgM9mBtrqq0Ev8anGhrdsPKiWXGPTqS5zFdxsm3HJ%2BQ%2BrqTTmGrGk5K1kRN%2FicHEVx6ryb8vb9B9UUrBo&X-Amz-Signature=79c7ba3c5fda5d42e113ca93bb228b82d380ab3e941ac8afcb5f916591975246&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7HVSKPO%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIEseVo3DTS6LqkU6eXTvocJ9SG5wJJQDz0yRvleoF9agAiBNwVM0zQEzGthMPFFlJxUb0kWAVePbZ%2B8%2FgEX1ScTPWSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFSAbpNfvc97TqHVXKtwDbqEEK4olrY3gVqL%2FtgaKH47Ok1UpogAqxj%2B%2BYE03er2Czq3bjDUCEUGofHdEg5xioNL8CLPzoVlA4mUwiqReY%2BxT57lED6s%2BvM9Zo0uv3LaCt%2BjBpPHiLPH5sc%2Fzeelg0K7FSOv8yuNik1sJ5JQnOu0%2FlpliloZzHj6paX1DWF4VLy0fi9gRtjCjoEqcRtrpUAa647LmiGq3MIgUDhMW%2B1bX5C8vSv3HHJky869zdTuqI8qMYRM%2F%2Bjc5oicAbqUcP%2FXd%2FUsLN%2F7yDKIOT7ftzrCHab8QbAMSQMY9n51EA5vi%2FJy328BqA7nupBbPyGJDJQ4MpyUqYqjXcfFQlS3yNEkoNLF46JWOBtI5Vv%2BSHek6z9zA7grUfTa%2F31XR%2Fq9PjtD6AxyOs6QKOoqFIJF%2FtKfKXwaHgam2Nf7KNgt69evnToQUsPuzHoah66y4GcDjxQJH%2Bxsx6hUbseCjJeSlMXtxvwUN1jFYyvCGbJhxEHpGTQt9E13C45o4feEHPcdLZsdMVlNvTKmIoigoUizVTdjBSlTNdhPa7cU9o8VygWvgN99sKSf5GhoVPMGGahQIWPTjm%2B4FAtnJq14v2zw2XCkFGdBY6NfeZKHhx6XOUU7ZbGYSAG0xHb6yjsYwlvvWvQY6pgHjouiHZEwD75OCG4vOJB2RmWGUkvvU5KK0oevUrF6FDnHNosOFyRKaGB44c7IMWl3Vm27MWTGDG3T3ltS3floaCaQ6ZOPITzLCyFQiSKTLYO9%2Ff9GjA3FWKOhZIr7eGOSltYwzsm8qj4ue628iJ%2BjMxpZMJRC54yR7%2BwrF8EJwFLNh9TSMN5c6iw9u0%2BBURw1Bw3Gp01i4uR5bsUxq5%2BpX5OySm9PZ&X-Amz-Signature=edd9d8f70aab6765c4b6c3784af81acc42350432beb8441eccc32a20d68947b3&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
