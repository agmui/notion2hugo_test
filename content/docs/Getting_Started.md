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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7EX2NFV%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSU7JeTSXZxSaQbelEEiH%2FriAv%2Fc4Y8IYWoLXhYpcaUQIhANUKXcibovR2ezJc%2Fd7B0TbGLN7yIhfMqzPv9b7R9q2MKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoatW95LRYedCjyMkq3AMgAD2dHqydWZHzGJu9ZyIW1LMOOm3YMsus5ga7n6mnRWPYOl%2BOwGNWI7lG05iFMWMluVICtmhHRFuB3JE45QXFEYvEspM%2F0aYZbQ1da%2BtQp5Ccpmz%2FAy3iHTKgTs6%2BX2Muu2i891fVqn50LTjHMaUlRAEC5fq0WoGMcA4HxqUiNXSKkgL6NGiNlJUKncn%2FH0kMB9gyEhcMMYLHMFH4KNl%2FSzWfswpSuAiNSNLFRUxu5M%2B9Pp6gDJ3idC15KT8jxBV57ZzhI4ZI8Dgp3po1gOFeSoxP46CcrfY2dy1%2FFfAqSgSYlwaYYUxKPXz2RnsU80NjCgPE6l1fi%2FVe35h3TtSG5Y%2BRMNG9vOieswk6ZjS6IKHcxSW%2FAyY0MwnLkTy7c0Mf9SbcOxZFuqMBQelnJiz%2FFH0aptL7NOy5zsl2bCjfiHIrRA0VBUeUP3DaQJbDnZ%2B%2BBR71uy7qoi4U63DjkYd%2F86bqBNXQp093Yi51sjMAWDblymqtpWBFAaPwgRQFEunT2V6tC6mXrgLSagCJvlmNOUke68I9PsiCkEwuJVkCODzij%2FHIlyg2c20FzAnc04ahhFT5OaViIEteWrh8RKBWRcEDMzw2Ag41JQHcJz9yQORIr8oNfulO%2FqHFpzCxvenBBjqkAdpAdM0wqKJ8lvfHaFwJqary2lgynuVSpls4rFmkVt%2F3OsdygdgDLuiUEgOq0JdvBZKOkjIYMstcCeN2NlZ57AayowGspzJnE0bZcSUuUKrdTctkZtYakCD0XMsJZKNDGhWS0L%2BKZHLYEEsdXY%2BD3bBmSXD5H%2FCFLQtgQR3Px38yRGCOyaK%2F48Qg1uiBx34nW4Tr7d6eXAOP%2FZ57VEtLA5mFnYs%2B&X-Amz-Signature=0d120edf476c320ec3c242b4521bc5f6fb0757061208ed1e0d2e3a3ca5f34de3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7EX2NFV%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSU7JeTSXZxSaQbelEEiH%2FriAv%2Fc4Y8IYWoLXhYpcaUQIhANUKXcibovR2ezJc%2Fd7B0TbGLN7yIhfMqzPv9b7R9q2MKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoatW95LRYedCjyMkq3AMgAD2dHqydWZHzGJu9ZyIW1LMOOm3YMsus5ga7n6mnRWPYOl%2BOwGNWI7lG05iFMWMluVICtmhHRFuB3JE45QXFEYvEspM%2F0aYZbQ1da%2BtQp5Ccpmz%2FAy3iHTKgTs6%2BX2Muu2i891fVqn50LTjHMaUlRAEC5fq0WoGMcA4HxqUiNXSKkgL6NGiNlJUKncn%2FH0kMB9gyEhcMMYLHMFH4KNl%2FSzWfswpSuAiNSNLFRUxu5M%2B9Pp6gDJ3idC15KT8jxBV57ZzhI4ZI8Dgp3po1gOFeSoxP46CcrfY2dy1%2FFfAqSgSYlwaYYUxKPXz2RnsU80NjCgPE6l1fi%2FVe35h3TtSG5Y%2BRMNG9vOieswk6ZjS6IKHcxSW%2FAyY0MwnLkTy7c0Mf9SbcOxZFuqMBQelnJiz%2FFH0aptL7NOy5zsl2bCjfiHIrRA0VBUeUP3DaQJbDnZ%2B%2BBR71uy7qoi4U63DjkYd%2F86bqBNXQp093Yi51sjMAWDblymqtpWBFAaPwgRQFEunT2V6tC6mXrgLSagCJvlmNOUke68I9PsiCkEwuJVkCODzij%2FHIlyg2c20FzAnc04ahhFT5OaViIEteWrh8RKBWRcEDMzw2Ag41JQHcJz9yQORIr8oNfulO%2FqHFpzCxvenBBjqkAdpAdM0wqKJ8lvfHaFwJqary2lgynuVSpls4rFmkVt%2F3OsdygdgDLuiUEgOq0JdvBZKOkjIYMstcCeN2NlZ57AayowGspzJnE0bZcSUuUKrdTctkZtYakCD0XMsJZKNDGhWS0L%2BKZHLYEEsdXY%2BD3bBmSXD5H%2FCFLQtgQR3Px38yRGCOyaK%2F48Qg1uiBx34nW4Tr7d6eXAOP%2FZ57VEtLA5mFnYs%2B&X-Amz-Signature=c828364745cd2ccb38bc60019d00e83178c7baa5fcd49664d18cfd90f725dcf3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7EX2NFV%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSU7JeTSXZxSaQbelEEiH%2FriAv%2Fc4Y8IYWoLXhYpcaUQIhANUKXcibovR2ezJc%2Fd7B0TbGLN7yIhfMqzPv9b7R9q2MKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoatW95LRYedCjyMkq3AMgAD2dHqydWZHzGJu9ZyIW1LMOOm3YMsus5ga7n6mnRWPYOl%2BOwGNWI7lG05iFMWMluVICtmhHRFuB3JE45QXFEYvEspM%2F0aYZbQ1da%2BtQp5Ccpmz%2FAy3iHTKgTs6%2BX2Muu2i891fVqn50LTjHMaUlRAEC5fq0WoGMcA4HxqUiNXSKkgL6NGiNlJUKncn%2FH0kMB9gyEhcMMYLHMFH4KNl%2FSzWfswpSuAiNSNLFRUxu5M%2B9Pp6gDJ3idC15KT8jxBV57ZzhI4ZI8Dgp3po1gOFeSoxP46CcrfY2dy1%2FFfAqSgSYlwaYYUxKPXz2RnsU80NjCgPE6l1fi%2FVe35h3TtSG5Y%2BRMNG9vOieswk6ZjS6IKHcxSW%2FAyY0MwnLkTy7c0Mf9SbcOxZFuqMBQelnJiz%2FFH0aptL7NOy5zsl2bCjfiHIrRA0VBUeUP3DaQJbDnZ%2B%2BBR71uy7qoi4U63DjkYd%2F86bqBNXQp093Yi51sjMAWDblymqtpWBFAaPwgRQFEunT2V6tC6mXrgLSagCJvlmNOUke68I9PsiCkEwuJVkCODzij%2FHIlyg2c20FzAnc04ahhFT5OaViIEteWrh8RKBWRcEDMzw2Ag41JQHcJz9yQORIr8oNfulO%2FqHFpzCxvenBBjqkAdpAdM0wqKJ8lvfHaFwJqary2lgynuVSpls4rFmkVt%2F3OsdygdgDLuiUEgOq0JdvBZKOkjIYMstcCeN2NlZ57AayowGspzJnE0bZcSUuUKrdTctkZtYakCD0XMsJZKNDGhWS0L%2BKZHLYEEsdXY%2BD3bBmSXD5H%2FCFLQtgQR3Px38yRGCOyaK%2F48Qg1uiBx34nW4Tr7d6eXAOP%2FZ57VEtLA5mFnYs%2B&X-Amz-Signature=13218519917e2bfe1ae26b95690b04db0195c209e55a564323f54445396b7cf4&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BHGGWCJ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1o6l360whmgUflKAqBA08Pa421tQSDRWMPek6PfTUIAiEAgeRRqs94QlTa6Sny2obIx27oganMd7lyp7m98joDssUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRvLbRzGoSudODeCSrcA%2Fz0x0zJI3P9DJPcNZ0fQQQRRgvWfh1Eg%2FlB28VxwVCAEnKDzrc5XSRHFPSqRQaQWA7kB27zFDMhPscf4ApdSsDcoQ7lUuL6ZlUn2LtF%2F6ODcXyqlV0Mq9Po3J914X7tqcl5kcI8WzxXasLxqhFVXGe%2B5BM%2FtAYi%2FDHvyPFxUbuW6BdScZS%2FumFfKOMc2mgeD1adkoHqxBHJHfpHR9%2BzJznVR%2FvHQKhYKVQSScI3MLy0bQa8%2F%2F4hRTJjRrSh%2F5XdRcqE9%2B0Rod%2FkD8AiS4QdDU5jxlcl6MlGNYsb7cBXrKbIq9jCLNki08RZVI5ZKAZQ3ScnY2DYxiG2lAT8DRmRQszreYZKzKi%2FTJ3yTEBw4YGxJwYJdbPRfbqvqJbI0UiUU4N%2FwYmQvQYegekVEwn7Q2J3Gcg7SysyaB5iJRyiTMYLJf6nKAS3mO1djrG%2Ba%2FmwmUuFgIn8R%2BUR9DXkMI5zdX7YCFjy2NOsrcO3ZagoDzX0tV2xxB%2Fe3hAZzq%2B%2BS1dAtd6YhNFB0OlJ7KPdnY9yfR2%2BDxA0rNY0w3WCCLWB6eZhgX9bWHly1Ek71xr5aBMz2VTQlf0NYkD8rqqNAjT0M9orSYqPNC5y6CrB5XRxtIC4yjYpRKwYLurFoUzxMJu96cEGOqUB5OyyP02Iy6QfMQlGIOEIcXE4Seg3mc42uIHK4lLB47AGntpD02%2FUHWv8cqyIviLSJqjAUJirr%2FUG3AUt3K1uu8xmqwYzOEcsslrPcoJJ%2FDNqvzv8OwF%2FyhsO2rDnMvEC391%2F%2BwXPjtCcOQutSq9Ri0hIeGK%2FuzPaiU25xnRg7r7OrDVZkU50xNOG53JWnxjPwvLsLYtK6kXCScKWsUoVic5Q86u6&X-Amz-Signature=2974377d6141e04df8043df74e97b458ff77279ac0f96eca2e75567f70a08637&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFPOX6MU%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHK7E0H%2B0%2FBQh6Y7MbIQ13r4RbDWfagkv4ISfTRIq%2BPAiB8NExQ2XbJ%2FxEoYMYfYZ2pxCxlw0UqY0xnTB%2BPqTCWKSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2BNdX0EJdob8c6xpKtwDaYMLp6fHdxzjiiUeCxaxnR155ACyCIN85LeIzpW9R7vfn8QWqK%2FqGpoog4bEiKb3oWnKt8FUmZERu2FgSTsi5xwgiXJMgPinu1JEPAvjr0McsKvg2OOqgkZ0tdcFPuWbL2HatqnHNGzn16s5tguOV0H1EXyX6HFvAMaFW6tG7ECxJH7OItuQygHIVkaolGGFah576Fd%2Fz7o4aPlIF%2F67YpWZKTjvIxX8mfgyWMqM7A7kgSNz5PTefx5CzgApucoJaL0cUMsiIhA7JTFXZQhwMOH%2BB2%2FfPrPP99byOhDkW38AwhWan5tIVQwWkCD%2Bhmbkcr53WJhGSoxhmCgAQ%2F70LUSDXWpm7mM2BLg%2Bo94zHe1SRN3smdZ9FA1qMW48xTX7Jiz%2F1bo18DIrvZy23FigtI0B9bD9YBtOmyCmbGxqA9XfxHpNtgYRIoJIzamHRVA%2BLcUenaX0ncV%2FX5dWbHce74J3B%2FGogM36iinET8SDKrsz%2BIhbt396tFKz8G6pQ2OGhDzLwO23cLz7anPbN6rRBYHIcBrVXvo19xHgyr1JtyqHQJJFN%2FTFMUgikyTJgR0332uvq5RhkUoMYWG1j8qHKuLvHq4IiWes7oWaiWUqDD8bzLLoGmB%2BhGlYdMUwy73pwQY6pgHQDNUuPk3MFmdt3zpL3j50X8tMedcdebY29I2s5mRi1nahppmrMZnrntYrf8qZ2D4E1BYGKeZBXo15JQb9mYcIizKOtuGwlG1t4u6MXcM6%2FYXARxck8RZbyH0vjxyi4POTN9cfDuMmGqwPb7CGIrMz8PeKCcz0FirMU2s6PEpGbb6M5Sz%2FsYI%2BVduxtabqeVvQ5h9APKghVLyy%2FjGLKaqQ3VehJ0h%2F&X-Amz-Signature=d0f6a5dd12dd59046ddd3aaf17ad7417ee55ea8a3305bb711d2974c97a39bc45&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7EX2NFV%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSU7JeTSXZxSaQbelEEiH%2FriAv%2Fc4Y8IYWoLXhYpcaUQIhANUKXcibovR2ezJc%2Fd7B0TbGLN7yIhfMqzPv9b7R9q2MKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoatW95LRYedCjyMkq3AMgAD2dHqydWZHzGJu9ZyIW1LMOOm3YMsus5ga7n6mnRWPYOl%2BOwGNWI7lG05iFMWMluVICtmhHRFuB3JE45QXFEYvEspM%2F0aYZbQ1da%2BtQp5Ccpmz%2FAy3iHTKgTs6%2BX2Muu2i891fVqn50LTjHMaUlRAEC5fq0WoGMcA4HxqUiNXSKkgL6NGiNlJUKncn%2FH0kMB9gyEhcMMYLHMFH4KNl%2FSzWfswpSuAiNSNLFRUxu5M%2B9Pp6gDJ3idC15KT8jxBV57ZzhI4ZI8Dgp3po1gOFeSoxP46CcrfY2dy1%2FFfAqSgSYlwaYYUxKPXz2RnsU80NjCgPE6l1fi%2FVe35h3TtSG5Y%2BRMNG9vOieswk6ZjS6IKHcxSW%2FAyY0MwnLkTy7c0Mf9SbcOxZFuqMBQelnJiz%2FFH0aptL7NOy5zsl2bCjfiHIrRA0VBUeUP3DaQJbDnZ%2B%2BBR71uy7qoi4U63DjkYd%2F86bqBNXQp093Yi51sjMAWDblymqtpWBFAaPwgRQFEunT2V6tC6mXrgLSagCJvlmNOUke68I9PsiCkEwuJVkCODzij%2FHIlyg2c20FzAnc04ahhFT5OaViIEteWrh8RKBWRcEDMzw2Ag41JQHcJz9yQORIr8oNfulO%2FqHFpzCxvenBBjqkAdpAdM0wqKJ8lvfHaFwJqary2lgynuVSpls4rFmkVt%2F3OsdygdgDLuiUEgOq0JdvBZKOkjIYMstcCeN2NlZ57AayowGspzJnE0bZcSUuUKrdTctkZtYakCD0XMsJZKNDGhWS0L%2BKZHLYEEsdXY%2BD3bBmSXD5H%2FCFLQtgQR3Px38yRGCOyaK%2F48Qg1uiBx34nW4Tr7d6eXAOP%2FZ57VEtLA5mFnYs%2B&X-Amz-Signature=0b70f3a7461c20b2ce64a54d00e7ee7fcb1e4496cc4c80f06fe098fedc880510&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
