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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKMBY57Z%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQC%2FQTvUSKldAok8SjnGtMUgX4JVcgpoAIk%2BSUMfHVh%2F3AIhAPTD9nJrK8hoTWv2jlDQoP5RzvIzBFH%2FdcIwwb90IQ%2FDKv8DCGMQABoMNjM3NDIzMTgzODA1IgydVFeDyzGFNw5MYmcq3AOXf%2BoZZ5XkFFe%2BN7Tt7zpsnN0g4h8Xr2kNc0M4lCS%2BnnEwAvOYI1wKytoUdvNjI5YuLyNfDqiKaaGLDdORZjAKmQ3rH1SZdeDND4NHamlwFJWsVpYy6YYvXuJc6kiea9MLe2l%2BENj2C1L8%2FcceHN6GIBGRz6ntCQ3ZZ03DY3nmjkwq7CHaJEyiEDZVkKyUhHYhggzFk93SWas2cCzYWKIQPNZxsf1F2m%2BmleV1qdnD6bDEqDwOvKE0HSoHY6kXDuR3zHKZGoxA35ww7pyEI4AYRVPDR5UIVltDPMc5mWWSXQQ2mqHSFQN0jjfTBVkXufp5%2BOu64KIUxQhAaOdT1ic0ZzpQo%2FhDXJeZROy8wxm%2FY9sJzBMRkgnVm7D03WjRgDaaLyRVC7Tcyuf6EGrgbaZ%2B1g13OgdB4rAiL%2BaJWyb1TEdfrtPk1tLb5fncnGb3RFAQpwNTjGIPOMS6VLYHoo4qjyDR0WNTJzjhIZllbAtObIUp%2FSsZfp2jtr9p%2BeBhtWckvoXSp8VzCo6eCp8Oi48iVcSaS9DRH%2Fgy8evELmF%2FnSBwypCUKZTipvL5aqQRLME15a4BaE169GJPmPrDVokgi3V2uXaCo6jhxYeFng9KFibh6%2FTnIfqNkmg8%2BDD38KrDBjqkAfO%2F%2BKMBfx%2BpktnQsCAqysYg1oXDko40krPq9W6eRXEedjf15xxf5ZClAqLw4xHErJ%2FO4EG7tXo%2BrS3OGUg1o2ml0bhq4HJ0ZTF6yidb7XX9%2Fq5vp5CXikA2aioRYNpcIkxf%2BwJjDwnnqWKIsYHKvnBCL8wGQWksD49jl6zjsKSlXrzRMvJLp4IGqvbmBZL5qmbkVfEYYdf%2FPL8j6yS8JTfXupvI&X-Amz-Signature=976cd33aaa2a94e0453e336eb6165c156f03fd0b548249e53e7107f926b8093d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKMBY57Z%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQC%2FQTvUSKldAok8SjnGtMUgX4JVcgpoAIk%2BSUMfHVh%2F3AIhAPTD9nJrK8hoTWv2jlDQoP5RzvIzBFH%2FdcIwwb90IQ%2FDKv8DCGMQABoMNjM3NDIzMTgzODA1IgydVFeDyzGFNw5MYmcq3AOXf%2BoZZ5XkFFe%2BN7Tt7zpsnN0g4h8Xr2kNc0M4lCS%2BnnEwAvOYI1wKytoUdvNjI5YuLyNfDqiKaaGLDdORZjAKmQ3rH1SZdeDND4NHamlwFJWsVpYy6YYvXuJc6kiea9MLe2l%2BENj2C1L8%2FcceHN6GIBGRz6ntCQ3ZZ03DY3nmjkwq7CHaJEyiEDZVkKyUhHYhggzFk93SWas2cCzYWKIQPNZxsf1F2m%2BmleV1qdnD6bDEqDwOvKE0HSoHY6kXDuR3zHKZGoxA35ww7pyEI4AYRVPDR5UIVltDPMc5mWWSXQQ2mqHSFQN0jjfTBVkXufp5%2BOu64KIUxQhAaOdT1ic0ZzpQo%2FhDXJeZROy8wxm%2FY9sJzBMRkgnVm7D03WjRgDaaLyRVC7Tcyuf6EGrgbaZ%2B1g13OgdB4rAiL%2BaJWyb1TEdfrtPk1tLb5fncnGb3RFAQpwNTjGIPOMS6VLYHoo4qjyDR0WNTJzjhIZllbAtObIUp%2FSsZfp2jtr9p%2BeBhtWckvoXSp8VzCo6eCp8Oi48iVcSaS9DRH%2Fgy8evELmF%2FnSBwypCUKZTipvL5aqQRLME15a4BaE169GJPmPrDVokgi3V2uXaCo6jhxYeFng9KFibh6%2FTnIfqNkmg8%2BDD38KrDBjqkAfO%2F%2BKMBfx%2BpktnQsCAqysYg1oXDko40krPq9W6eRXEedjf15xxf5ZClAqLw4xHErJ%2FO4EG7tXo%2BrS3OGUg1o2ml0bhq4HJ0ZTF6yidb7XX9%2Fq5vp5CXikA2aioRYNpcIkxf%2BwJjDwnnqWKIsYHKvnBCL8wGQWksD49jl6zjsKSlXrzRMvJLp4IGqvbmBZL5qmbkVfEYYdf%2FPL8j6yS8JTfXupvI&X-Amz-Signature=ea4c13181f402ab1971fab0a05b244f729d02e81a962f0e5aa7607a567f6e346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKMBY57Z%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQC%2FQTvUSKldAok8SjnGtMUgX4JVcgpoAIk%2BSUMfHVh%2F3AIhAPTD9nJrK8hoTWv2jlDQoP5RzvIzBFH%2FdcIwwb90IQ%2FDKv8DCGMQABoMNjM3NDIzMTgzODA1IgydVFeDyzGFNw5MYmcq3AOXf%2BoZZ5XkFFe%2BN7Tt7zpsnN0g4h8Xr2kNc0M4lCS%2BnnEwAvOYI1wKytoUdvNjI5YuLyNfDqiKaaGLDdORZjAKmQ3rH1SZdeDND4NHamlwFJWsVpYy6YYvXuJc6kiea9MLe2l%2BENj2C1L8%2FcceHN6GIBGRz6ntCQ3ZZ03DY3nmjkwq7CHaJEyiEDZVkKyUhHYhggzFk93SWas2cCzYWKIQPNZxsf1F2m%2BmleV1qdnD6bDEqDwOvKE0HSoHY6kXDuR3zHKZGoxA35ww7pyEI4AYRVPDR5UIVltDPMc5mWWSXQQ2mqHSFQN0jjfTBVkXufp5%2BOu64KIUxQhAaOdT1ic0ZzpQo%2FhDXJeZROy8wxm%2FY9sJzBMRkgnVm7D03WjRgDaaLyRVC7Tcyuf6EGrgbaZ%2B1g13OgdB4rAiL%2BaJWyb1TEdfrtPk1tLb5fncnGb3RFAQpwNTjGIPOMS6VLYHoo4qjyDR0WNTJzjhIZllbAtObIUp%2FSsZfp2jtr9p%2BeBhtWckvoXSp8VzCo6eCp8Oi48iVcSaS9DRH%2Fgy8evELmF%2FnSBwypCUKZTipvL5aqQRLME15a4BaE169GJPmPrDVokgi3V2uXaCo6jhxYeFng9KFibh6%2FTnIfqNkmg8%2BDD38KrDBjqkAfO%2F%2BKMBfx%2BpktnQsCAqysYg1oXDko40krPq9W6eRXEedjf15xxf5ZClAqLw4xHErJ%2FO4EG7tXo%2BrS3OGUg1o2ml0bhq4HJ0ZTF6yidb7XX9%2Fq5vp5CXikA2aioRYNpcIkxf%2BwJjDwnnqWKIsYHKvnBCL8wGQWksD49jl6zjsKSlXrzRMvJLp4IGqvbmBZL5qmbkVfEYYdf%2FPL8j6yS8JTfXupvI&X-Amz-Signature=992b704682c91901898e4e564d77606ac1e6b4dd523eb9428844c2f8c4d70a86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IJSV3NS%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDzOWhecbcS6NXDlGQj53zmY8uZejMptJiKqkGGLtNALAIhAKoX5uGLzEC20quxfFThWOHP0CVN89jHpMNIQmq%2Bx5dOKv8DCGMQABoMNjM3NDIzMTgzODA1Igw5C0Jqp4F4VjblGIQq3AOHpONFDTwMKgCyFVwc2j3iVXVswmt1N7T%2Fz9a1EvIdwBn%2BD95Vnt3Oj1zMj%2FRv417gPaQrrVIHsb4OK4dp8d3YgIfRBKvIH0YEt3Wod%2B0a2SY%2FKAV8AVy0bTcJo51r2iTbLzx1ZG9Ap0GjtydTA24khBR%2Fca9hx9%2FA5sTL6TRQHBYtWGc1uEyJG0NaveTiq95F3IrTKzVty7xjInv3HMU9ChZdLEUPRF%2B%2F7Mp0kUoUQ1uDxlKjwDt%2FlYRpTkP70bSqODdtbdHw%2BZn4xp2nFbYQ3yR2xYUVbHwHoV5zl15TPvz1tzWw%2FdvK1j0QiGmQMN3M84WgSzxVYF60mOJKtlWsFBjTaioXO%2B4heVo8AFYDb8vqfQjpt%2FZjshWJ9uQ3XiGCfiIIDP2VUgC0iOEx4%2Fg2J8bAOykOixTvjNEdgJaJr76vjE3Gs7QKTCPNZPo07qhYK4GCasMPrtcagi1uu%2BoCgyR2IQ1YcIGRWNtMqO8EU9cUtA3tfHE4AcnKLXTuFFKBlMOpAgQZniM4oLTcyiJRWqVWdlwbsDaQI009cZrQG48lRQAiV60xjjW3zQuDU2MnYzSjj279rrbviAgGl4aWx0iFOgbNDU29ybgIuJ9OKO%2BOEgionyVNnttInzD77qrDBjqkASQfrGZ1dbqlXKaWybcwmG4JttOaBSCuxyBXAAmfYL30qdlaA0%2FlnPBDfRm1MxhHamYJahBKpxCXCfatS%2Fulx2FNqftQ9t5X57LSYXVubuTpcU8fqzy0FDOxdO3KyUAfvLOhTQeRMoAylIkJZp5x3FTwlszO4352Fl75DfVYYiIMnN4YmwzPzj5RCaZeWdDRdoruIPk8S5CD0w1UaJlZspJh2KuD&X-Amz-Signature=1378de91b23a6c12be61c9e82126ae99bbf951b95d6a39a11373922a4f6d84f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EYYSTUO%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIBaZZXR85TKExWRwlrMVEfNGJy6mO6HQTeLeSdyuelZyAiEA2rh2WDYWEf7Q%2Fgm9vW5%2BYmFl7AGrDHBbJ2X5pYqtthIq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDAS4i%2FA8FQkNSVr1RyrcA7wDbfihzm%2FIVOzI%2FXXnRMkghuT8C75v%2Fu3hRe1gtL3%2FOSPCDA0SG4h4RBnMJY0D2Jn6F8gCrPuWE1EZL6a%2FC2dlBf%2B1MNFdW2NXC2ldQuA6wGp%2BVgfq6Xqbcjd7wbwrYDf5ZJ4TpMy95rTWHjyU2ySEj70gnyswkntrOm22C88l9UX6MEI9WSMDetWPdoHqQWdHEkKyCvA%2FLC7H4vxzx0VUdvSlhj15yZ%2Fk0JVkAguiRX3%2FN6rqePocZm6jpZL7NdMQMaRC5aBz0tx2B6NmfwrhaQ8iU6v7lE3ryb1ZikQ7TDLLDE785BuT8GvPVwXSzDsvRMaWsRcfWH3bVjMVgAYDqzDMvSjI8WRlHmMXvDAzeOaaQUV8v0yL4ceP6SYG1z3s8SIdmkv7tz7R%2FeaA%2BeLWkPdtrQ8penkBSXeUFNODqPRBqsJjhGzXPCtIgOBpWpG%2BU%2BpnnnjtT1%2Ba1p5wnJhnJM2F%2BjsQgop8AJfyl75NyYJh8w7vrMfCtj20hQywKki9Jni%2Bte0aWBsL6mCXAgB8ay4uswyQxLWmk2kj1hBwFHCEKeWjTMJjoOJpUQz%2F%2FK0XokwO3g5zefbaJEd5LTb%2FtB6umVf0FKVOzLT03qn98XnHwiHbXVqWUiKxMLX%2FqsMGOqUB6tDwXro5uA9f0V5bYh8jjE7kntbTCdIqLFMZwAjPeEfkxINkNA0LpeytUQzP1w9T9lCOIFF9URk2Jt%2BbIUwv%2FwHSGuWNPD1z5aYjNIyM%2BHAD93LdNe7n2jcO8nHMeTJD4bRXkXejRcj8N%2B0SpWsj947ZDAzXbVUWzTxqGM1hckz1plMY3pY7C%2BHLnQ1V7IWRNgFdzaXcacD3dhyZFB%2B0LfKE8wBm&X-Amz-Signature=420c7ff79a7f1053a44a7970132595c1362082985d86be4d94d0fea933058f8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKMBY57Z%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQC%2FQTvUSKldAok8SjnGtMUgX4JVcgpoAIk%2BSUMfHVh%2F3AIhAPTD9nJrK8hoTWv2jlDQoP5RzvIzBFH%2FdcIwwb90IQ%2FDKv8DCGMQABoMNjM3NDIzMTgzODA1IgydVFeDyzGFNw5MYmcq3AOXf%2BoZZ5XkFFe%2BN7Tt7zpsnN0g4h8Xr2kNc0M4lCS%2BnnEwAvOYI1wKytoUdvNjI5YuLyNfDqiKaaGLDdORZjAKmQ3rH1SZdeDND4NHamlwFJWsVpYy6YYvXuJc6kiea9MLe2l%2BENj2C1L8%2FcceHN6GIBGRz6ntCQ3ZZ03DY3nmjkwq7CHaJEyiEDZVkKyUhHYhggzFk93SWas2cCzYWKIQPNZxsf1F2m%2BmleV1qdnD6bDEqDwOvKE0HSoHY6kXDuR3zHKZGoxA35ww7pyEI4AYRVPDR5UIVltDPMc5mWWSXQQ2mqHSFQN0jjfTBVkXufp5%2BOu64KIUxQhAaOdT1ic0ZzpQo%2FhDXJeZROy8wxm%2FY9sJzBMRkgnVm7D03WjRgDaaLyRVC7Tcyuf6EGrgbaZ%2B1g13OgdB4rAiL%2BaJWyb1TEdfrtPk1tLb5fncnGb3RFAQpwNTjGIPOMS6VLYHoo4qjyDR0WNTJzjhIZllbAtObIUp%2FSsZfp2jtr9p%2BeBhtWckvoXSp8VzCo6eCp8Oi48iVcSaS9DRH%2Fgy8evELmF%2FnSBwypCUKZTipvL5aqQRLME15a4BaE169GJPmPrDVokgi3V2uXaCo6jhxYeFng9KFibh6%2FTnIfqNkmg8%2BDD38KrDBjqkAfO%2F%2BKMBfx%2BpktnQsCAqysYg1oXDko40krPq9W6eRXEedjf15xxf5ZClAqLw4xHErJ%2FO4EG7tXo%2BrS3OGUg1o2ml0bhq4HJ0ZTF6yidb7XX9%2Fq5vp5CXikA2aioRYNpcIkxf%2BwJjDwnnqWKIsYHKvnBCL8wGQWksD49jl6zjsKSlXrzRMvJLp4IGqvbmBZL5qmbkVfEYYdf%2FPL8j6yS8JTfXupvI&X-Amz-Signature=73328df60545d15269b3789a3de58e499c89ddfa7e8eeefc61e63f009800091d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
