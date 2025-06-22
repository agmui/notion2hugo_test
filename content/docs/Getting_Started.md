---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I7ACOVI%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIF07W8rC6IOtur4anlCKh43yb13esahxzUZGUaqnQDYwAiBHaloy%2BNlRlSDoiCIMlMQcONyLncn0zwhVmZ0LQklaZSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv6QbJjrLpgoUofuyKtwDlK0PS%2Bm5D6hQSreZIV2hfGcQDb0Bqi%2BX5Lt%2BXZkHtEM27CaI1FPLNw0Zw3hyUD8USF7dTRUYtQmvCBev2EW6fmOIrbRcKRqD5WhjI2xoN6njizGjERBhUHbisKSIPSV7eGbaqDpavtQnRpnVIVE609LoRtkgysb5dErBq%2BpvCmfc0PF1aCrjgW9HqriuTBJVx%2Baii6BkCNgSsMkO9Pa40awCSLU3PTSShYymKKbbLqR3meDoZq4ZJtb16M8b7o0B9ggWUhO2cSuyWofjw2OK%2BMl4oeZNeBHNykmcFXL64Kt%2B9YbIz%2BcaqtYRppQqReFiED9UZMX7J%2FJTBtYeqE7xMp2tnGbtK6qJ73bANJRH%2FYt280xsxW8ffonzXtf78mGLmUS28Q9uGx1tnwX%2FASE%2BuTqK7TQT3gf13DXOjVnxfR%2B43uq7mak2DKeBu%2B27Lv6K5RzuESyt0sDUxzjmu%2BdAL6mxt1W%2F7Uz2fhHMO1akINifiHegzhUK8NiQUIGMpLG0rottHJ5TVKlfroS6rRncZn6HKiFtZne7EnJiSBQb7OBqNwCGOT2uX4g5EW10eyZk4ajiZ%2FLvC%2FLExPm%2FvqwnUC1z0s0CZpyPWOXrO4TElANvd2XO7qiaBbdztUAw6enewgY6pgFFBWXZtcwcfeVVhw1B85XCaZQwm1rvQZbAg8gd1JWUNW9Zf4UFa7MkaT8MKdW%2F413A25E6YBqAk2MMZk%2F%2FtGt3kwMQChHcXx9EH00D5hqJTbZOM4rtXj5kn9TZ6T8XkGm5mdhUDZBl%2FwC7v1AvrCzpp3Dy8Prnzy%2F%2B5s4dQrWFF83iv82meGuIYSs%2F4KbxbYMP3PFcDFKdfVfQFlPRw5jn8pGV3eQX&X-Amz-Signature=011d162e174485e42da664240ef2d6f280335ea1b72da0bcdf22b42b9fcc39d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I7ACOVI%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIF07W8rC6IOtur4anlCKh43yb13esahxzUZGUaqnQDYwAiBHaloy%2BNlRlSDoiCIMlMQcONyLncn0zwhVmZ0LQklaZSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv6QbJjrLpgoUofuyKtwDlK0PS%2Bm5D6hQSreZIV2hfGcQDb0Bqi%2BX5Lt%2BXZkHtEM27CaI1FPLNw0Zw3hyUD8USF7dTRUYtQmvCBev2EW6fmOIrbRcKRqD5WhjI2xoN6njizGjERBhUHbisKSIPSV7eGbaqDpavtQnRpnVIVE609LoRtkgysb5dErBq%2BpvCmfc0PF1aCrjgW9HqriuTBJVx%2Baii6BkCNgSsMkO9Pa40awCSLU3PTSShYymKKbbLqR3meDoZq4ZJtb16M8b7o0B9ggWUhO2cSuyWofjw2OK%2BMl4oeZNeBHNykmcFXL64Kt%2B9YbIz%2BcaqtYRppQqReFiED9UZMX7J%2FJTBtYeqE7xMp2tnGbtK6qJ73bANJRH%2FYt280xsxW8ffonzXtf78mGLmUS28Q9uGx1tnwX%2FASE%2BuTqK7TQT3gf13DXOjVnxfR%2B43uq7mak2DKeBu%2B27Lv6K5RzuESyt0sDUxzjmu%2BdAL6mxt1W%2F7Uz2fhHMO1akINifiHegzhUK8NiQUIGMpLG0rottHJ5TVKlfroS6rRncZn6HKiFtZne7EnJiSBQb7OBqNwCGOT2uX4g5EW10eyZk4ajiZ%2FLvC%2FLExPm%2FvqwnUC1z0s0CZpyPWOXrO4TElANvd2XO7qiaBbdztUAw6enewgY6pgFFBWXZtcwcfeVVhw1B85XCaZQwm1rvQZbAg8gd1JWUNW9Zf4UFa7MkaT8MKdW%2F413A25E6YBqAk2MMZk%2F%2FtGt3kwMQChHcXx9EH00D5hqJTbZOM4rtXj5kn9TZ6T8XkGm5mdhUDZBl%2FwC7v1AvrCzpp3Dy8Prnzy%2F%2B5s4dQrWFF83iv82meGuIYSs%2F4KbxbYMP3PFcDFKdfVfQFlPRw5jn8pGV3eQX&X-Amz-Signature=ef5eb542b28b3c06f840cb6c30523f264528c5bdab30c800f045bf84197ef241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I7ACOVI%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIF07W8rC6IOtur4anlCKh43yb13esahxzUZGUaqnQDYwAiBHaloy%2BNlRlSDoiCIMlMQcONyLncn0zwhVmZ0LQklaZSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv6QbJjrLpgoUofuyKtwDlK0PS%2Bm5D6hQSreZIV2hfGcQDb0Bqi%2BX5Lt%2BXZkHtEM27CaI1FPLNw0Zw3hyUD8USF7dTRUYtQmvCBev2EW6fmOIrbRcKRqD5WhjI2xoN6njizGjERBhUHbisKSIPSV7eGbaqDpavtQnRpnVIVE609LoRtkgysb5dErBq%2BpvCmfc0PF1aCrjgW9HqriuTBJVx%2Baii6BkCNgSsMkO9Pa40awCSLU3PTSShYymKKbbLqR3meDoZq4ZJtb16M8b7o0B9ggWUhO2cSuyWofjw2OK%2BMl4oeZNeBHNykmcFXL64Kt%2B9YbIz%2BcaqtYRppQqReFiED9UZMX7J%2FJTBtYeqE7xMp2tnGbtK6qJ73bANJRH%2FYt280xsxW8ffonzXtf78mGLmUS28Q9uGx1tnwX%2FASE%2BuTqK7TQT3gf13DXOjVnxfR%2B43uq7mak2DKeBu%2B27Lv6K5RzuESyt0sDUxzjmu%2BdAL6mxt1W%2F7Uz2fhHMO1akINifiHegzhUK8NiQUIGMpLG0rottHJ5TVKlfroS6rRncZn6HKiFtZne7EnJiSBQb7OBqNwCGOT2uX4g5EW10eyZk4ajiZ%2FLvC%2FLExPm%2FvqwnUC1z0s0CZpyPWOXrO4TElANvd2XO7qiaBbdztUAw6enewgY6pgFFBWXZtcwcfeVVhw1B85XCaZQwm1rvQZbAg8gd1JWUNW9Zf4UFa7MkaT8MKdW%2F413A25E6YBqAk2MMZk%2F%2FtGt3kwMQChHcXx9EH00D5hqJTbZOM4rtXj5kn9TZ6T8XkGm5mdhUDZBl%2FwC7v1AvrCzpp3Dy8Prnzy%2F%2B5s4dQrWFF83iv82meGuIYSs%2F4KbxbYMP3PFcDFKdfVfQFlPRw5jn8pGV3eQX&X-Amz-Signature=a133d68ec2244189c8e286e44abe4f5b86074aba586a6013bdf40da7aff4d7dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPYRDLTR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCPKjOrqjC1GpytAo5HF0JUNc%2BT9MUV1i1BSll%2BQTJh1wIhAKDR1DJeMvKWPbtX7qboQMPzaCLu1WWZx9uubmk37BwtKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysBHQEaLSp%2BJ7j5vEq3AO9hkxAldWpmCitFDBUpvxOU89wuFItD2YSr43AgvcXHemhyf4i1SoQtQzqPh7OvIyARIdp35M6fuDa%2BL9vbf%2FnCSLIg2NbLQ6dAgpruq0ukuLD6fJHLAZudBTQ4zfH0KNMrAfDY5qZXbyHLcozgAfzkmNqMUhp85rEcbj0zBjz4PjhjAJbFxTbQQpnzVhQOsF8Xdugzg0tO%2F5opKR1XT7s4IqlKVaID8kbQ5MueuaynROuVHI3Zys1QLjWEHFOZ%2FsU99Ujv24Ntwy80fz1KHyl7HwKYJeojrmZFAxCfxSb6NPRk2BWsKWgR3F1tJ8OxAzvvexzg%2FexdFKlBjCww%2BDOcf%2FNC4JfduOoh04yFLt%2BxxuMu5VJLhYMiquZ0mwxKIweECxXUuaCbDhUbeInCBAx6JDIU2rpuLxwprUvmSMl7MH80z5lKAoT0XKYEQV9njaeggAm588AZlF%2Fn9gT08q5NWHbUzO6Ba69dcOK1PJlBVaSlqkE4JvNblduIuMf%2F5y2pleVH4t5rJ5KkA3mC9vzMxqP%2F%2FS3Q5yU7aJTcFAtUkG185%2F%2F9kCLbl4cycvAgo3uIjxRi7a%2BtvBnBH%2FZb2oPJZfldw%2BesDZ3SvAu9LeDUToEYOs9eFARCtpCgTDVz9%2FCBjqkATJpWk0SG9bJjBtSWHSi6rqsDKoEqjY7VythMupIfq8qJXz7RpgU6dCMJoh6Rytf7jTOGnvcljqiYaH4bMdk9zLZTBvTD86TNljHkUSPfhpMWlKqAyQrSYKvcrWi35qAOsU8iXCJMU73bYM8DRg%2BAqX4qiW3d5emq1%2Fe8ksfY2VZfeCfxOcC%2FL7l5JbvAIwjBEVsW7gN7A0dcxUtbeMAhlydjgQJ&X-Amz-Signature=17bd0fddf8cdcc179e2d18bc2420dc5b1137b753e13359d0943494b31c734e46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RR5W7PT%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIG7i5pA8SFv0A04aUEz%2B19V%2Bq5f1FVQtx14W4fdUfdRdAiEA5fOhKxPBWlcR9euzaK4OXMV6cKPZf4VooF9wwD0Hn2MqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDv3fAMKCcKIlwgDlyrcA8MhUQ09n0D%2B2BE9cygQzjC4jm61TOHYwYuPVoeefKrrMkjtaVJzqY2d97sjkb1Gpt8xGhalzKhmvi14CJzxe2Een1QGSabhGtBRyQQ1PW71wEomvO9b8xyYEhZFovq2j%2Fpo7AJFAaHPYDDy9uuPKuF84B4ywq296FOmpvBg%2FM1lGxNU2kxd2SfkvMUGdOu7619BdiiTRM7BZgz6r%2FPBzSUiytpsyiyYYAfZHkPFia5upiCJnQYMxRs2OrAjCJ3a96rSIdqFplvIz7%2FPVfkSXiQNIPfhuWD0xs0kdkLMFt%2ByO6E1iUtXoPUwdja8hteBSysMb0lnFYtFl6mVLtfIRci9AkEdxd8BlVniJipcc8gTuwL8xT5DcMb6ZsvHBpTmVyTkTqw3%2BXxqxA6Xv84jPDxCc7wC4RQNlL5nzu79Es7GEMUcYaDyKJZZgOiKxidOnTTiXK0jH2erLJOYyqJR6SK3N%2B4N8x0MbGoLzuD1xgZfX91EPA%2BYY8AxLZ%2FGHlJNvNBOO1vTfmatyGjrzL%2BKJ7r63jJID6DR3%2BNstQcJj7oBasDk4Ccn0i6PG%2FgXnGr4l%2FNjkKwmy7gaTWthVMdtAfkiQQylw1BoSZZTzk18lRWmH9YNtK%2Bin4wByAatMMSY38IGOqUBkcxDDKSJfaSqESJ%2FgowNO6gox6NAqxK3Vn8RWqMQxHpX%2Fx9FQlr27XfeBqDX17ClfJ5OIfyKLx2gDssFmWW%2Brb5GI%2Bny%2BZeGy7QQO5%2FPpaEOZiWIl4oYKfgla9TRqzZ%2FTf0zZBPcy7y5JcLnpBSU8YiXY53X%2F0pXFl18OtTIXd1s%2BnciPyPWnTwqdPgzeSg%2BfsW6rrcm4sXZgkC6xSp%2F2jwDblBZ&X-Amz-Signature=49bc2f3d1f3a8f932cc346f24cd77dbf6b76c38a57a4ce1499edc721d18d46c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I7ACOVI%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIF07W8rC6IOtur4anlCKh43yb13esahxzUZGUaqnQDYwAiBHaloy%2BNlRlSDoiCIMlMQcONyLncn0zwhVmZ0LQklaZSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv6QbJjrLpgoUofuyKtwDlK0PS%2Bm5D6hQSreZIV2hfGcQDb0Bqi%2BX5Lt%2BXZkHtEM27CaI1FPLNw0Zw3hyUD8USF7dTRUYtQmvCBev2EW6fmOIrbRcKRqD5WhjI2xoN6njizGjERBhUHbisKSIPSV7eGbaqDpavtQnRpnVIVE609LoRtkgysb5dErBq%2BpvCmfc0PF1aCrjgW9HqriuTBJVx%2Baii6BkCNgSsMkO9Pa40awCSLU3PTSShYymKKbbLqR3meDoZq4ZJtb16M8b7o0B9ggWUhO2cSuyWofjw2OK%2BMl4oeZNeBHNykmcFXL64Kt%2B9YbIz%2BcaqtYRppQqReFiED9UZMX7J%2FJTBtYeqE7xMp2tnGbtK6qJ73bANJRH%2FYt280xsxW8ffonzXtf78mGLmUS28Q9uGx1tnwX%2FASE%2BuTqK7TQT3gf13DXOjVnxfR%2B43uq7mak2DKeBu%2B27Lv6K5RzuESyt0sDUxzjmu%2BdAL6mxt1W%2F7Uz2fhHMO1akINifiHegzhUK8NiQUIGMpLG0rottHJ5TVKlfroS6rRncZn6HKiFtZne7EnJiSBQb7OBqNwCGOT2uX4g5EW10eyZk4ajiZ%2FLvC%2FLExPm%2FvqwnUC1z0s0CZpyPWOXrO4TElANvd2XO7qiaBbdztUAw6enewgY6pgFFBWXZtcwcfeVVhw1B85XCaZQwm1rvQZbAg8gd1JWUNW9Zf4UFa7MkaT8MKdW%2F413A25E6YBqAk2MMZk%2F%2FtGt3kwMQChHcXx9EH00D5hqJTbZOM4rtXj5kn9TZ6T8XkGm5mdhUDZBl%2FwC7v1AvrCzpp3Dy8Prnzy%2F%2B5s4dQrWFF83iv82meGuIYSs%2F4KbxbYMP3PFcDFKdfVfQFlPRw5jn8pGV3eQX&X-Amz-Signature=ee74bf4edef68e2c26ffa06d3ec965788ffc62dbe500f52e032129053c4fe3a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
