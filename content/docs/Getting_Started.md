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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TAQKYFK%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIHPFx0G%2FOGKeF6BnGwL3pB%2FmL8vUPGO%2FZvAW224lSAeiAiA0J77SFC4TlpyHl96bKFFB0MztETqGibqG0I5%2FzbrFxyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMKgfN3Wniew5RrgzzKtwDgo5qPfvQ8dXAQ8IywXIkpj5TwTHzGmuylHjlUWwlyysz2dMZPG%2BFYwGYR0i8IttYV56xN5Ck%2BytfVekdXxmpawIXRQkYvgsfRFzTttNibzy92xqUX3YMMihBVBGIlHTTo47v4gCRnHU7RJzxh96NmE3uTikdAt33npPU%2FxlsAx0Zl5tH7c9HHu%2B6q9wtwo6CVcF1N63NUDQf8EvL26dt1hCivjoJgRpYtTH74D4EHDD9Anm%2Bqo6laLX8oy9kFNnqUIBXGk5tM2VVvBlQ7lXrx3NTszFXSxeAEbIBWiPq0NvqXqqG522QSUlAZIlBWueJdTRY98GD5FfYJ0hFk73od28p0YO%2BlGPs5hjaNBu9bkeAfJb9b8st7hrr1QWFnY0Q6%2BjwvXmmhX4HZ%2FeFtSexvi8p%2FS6tGOEVmeFMqbCbsTOwlMjom4JTPekPLCwDBSjXU47v2CjMLZVS5AlhuJ7%2FiIFj2i7qOtiNYO%2BES1ngitqsg2G0REeKvXU6LdznNt7VIcNcb40BViGqdi8YOlVoEJ%2BPHNzo4ebp3WCK8GP9j9J8jDLlSsMC3NicN3JxeN%2BVFftlAWZQxxsn9ffXDQLZl12gilBs5tF3Y9YbR98qxkwIm8EuBNARbt%2BOupIwg4eSxAY6pgGL%2F4fsf9JrNm4pWHu0dtwPduzVt5M5vVE%2F69FhcsqRaVrMcONP6DB6K8oMI%2Byq8gpPpvjqn9KEWYVIBT2vxEOYz31gVZzelHkNMsx8NUFZCqmXRJ7bRvrgRY7omzOS7KHIVFpFYwWdKjc7%2FQWztRV8A2sM6mTFC5m6XnowACEKW3tJP6V4MsUhjuJlUn79ORUM9k5XViYso3b6xmO66tn2KX5J44Qs&X-Amz-Signature=29607d5053059f31ba41593c7c6ba5688e53f7162d8d526b26e5928eda40f818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TAQKYFK%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIHPFx0G%2FOGKeF6BnGwL3pB%2FmL8vUPGO%2FZvAW224lSAeiAiA0J77SFC4TlpyHl96bKFFB0MztETqGibqG0I5%2FzbrFxyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMKgfN3Wniew5RrgzzKtwDgo5qPfvQ8dXAQ8IywXIkpj5TwTHzGmuylHjlUWwlyysz2dMZPG%2BFYwGYR0i8IttYV56xN5Ck%2BytfVekdXxmpawIXRQkYvgsfRFzTttNibzy92xqUX3YMMihBVBGIlHTTo47v4gCRnHU7RJzxh96NmE3uTikdAt33npPU%2FxlsAx0Zl5tH7c9HHu%2B6q9wtwo6CVcF1N63NUDQf8EvL26dt1hCivjoJgRpYtTH74D4EHDD9Anm%2Bqo6laLX8oy9kFNnqUIBXGk5tM2VVvBlQ7lXrx3NTszFXSxeAEbIBWiPq0NvqXqqG522QSUlAZIlBWueJdTRY98GD5FfYJ0hFk73od28p0YO%2BlGPs5hjaNBu9bkeAfJb9b8st7hrr1QWFnY0Q6%2BjwvXmmhX4HZ%2FeFtSexvi8p%2FS6tGOEVmeFMqbCbsTOwlMjom4JTPekPLCwDBSjXU47v2CjMLZVS5AlhuJ7%2FiIFj2i7qOtiNYO%2BES1ngitqsg2G0REeKvXU6LdznNt7VIcNcb40BViGqdi8YOlVoEJ%2BPHNzo4ebp3WCK8GP9j9J8jDLlSsMC3NicN3JxeN%2BVFftlAWZQxxsn9ffXDQLZl12gilBs5tF3Y9YbR98qxkwIm8EuBNARbt%2BOupIwg4eSxAY6pgGL%2F4fsf9JrNm4pWHu0dtwPduzVt5M5vVE%2F69FhcsqRaVrMcONP6DB6K8oMI%2Byq8gpPpvjqn9KEWYVIBT2vxEOYz31gVZzelHkNMsx8NUFZCqmXRJ7bRvrgRY7omzOS7KHIVFpFYwWdKjc7%2FQWztRV8A2sM6mTFC5m6XnowACEKW3tJP6V4MsUhjuJlUn79ORUM9k5XViYso3b6xmO66tn2KX5J44Qs&X-Amz-Signature=ce01ac56d3ed42fcd8d27fe434abfb97849dbc14bb3df9d2777baa274c3b7006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TAQKYFK%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIHPFx0G%2FOGKeF6BnGwL3pB%2FmL8vUPGO%2FZvAW224lSAeiAiA0J77SFC4TlpyHl96bKFFB0MztETqGibqG0I5%2FzbrFxyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMKgfN3Wniew5RrgzzKtwDgo5qPfvQ8dXAQ8IywXIkpj5TwTHzGmuylHjlUWwlyysz2dMZPG%2BFYwGYR0i8IttYV56xN5Ck%2BytfVekdXxmpawIXRQkYvgsfRFzTttNibzy92xqUX3YMMihBVBGIlHTTo47v4gCRnHU7RJzxh96NmE3uTikdAt33npPU%2FxlsAx0Zl5tH7c9HHu%2B6q9wtwo6CVcF1N63NUDQf8EvL26dt1hCivjoJgRpYtTH74D4EHDD9Anm%2Bqo6laLX8oy9kFNnqUIBXGk5tM2VVvBlQ7lXrx3NTszFXSxeAEbIBWiPq0NvqXqqG522QSUlAZIlBWueJdTRY98GD5FfYJ0hFk73od28p0YO%2BlGPs5hjaNBu9bkeAfJb9b8st7hrr1QWFnY0Q6%2BjwvXmmhX4HZ%2FeFtSexvi8p%2FS6tGOEVmeFMqbCbsTOwlMjom4JTPekPLCwDBSjXU47v2CjMLZVS5AlhuJ7%2FiIFj2i7qOtiNYO%2BES1ngitqsg2G0REeKvXU6LdznNt7VIcNcb40BViGqdi8YOlVoEJ%2BPHNzo4ebp3WCK8GP9j9J8jDLlSsMC3NicN3JxeN%2BVFftlAWZQxxsn9ffXDQLZl12gilBs5tF3Y9YbR98qxkwIm8EuBNARbt%2BOupIwg4eSxAY6pgGL%2F4fsf9JrNm4pWHu0dtwPduzVt5M5vVE%2F69FhcsqRaVrMcONP6DB6K8oMI%2Byq8gpPpvjqn9KEWYVIBT2vxEOYz31gVZzelHkNMsx8NUFZCqmXRJ7bRvrgRY7omzOS7KHIVFpFYwWdKjc7%2FQWztRV8A2sM6mTFC5m6XnowACEKW3tJP6V4MsUhjuJlUn79ORUM9k5XViYso3b6xmO66tn2KX5J44Qs&X-Amz-Signature=b447267e9f68989e356f077479fee6c367645fcde6a131c0599500656b03b2e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPVXMGLH%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIE3AIp6j3kEkawptJqaLIivkFtjOHAp1CJhZlZCDKodBAiBL1AY%2Be9g8EIeQlNv9LJePhek%2BR7ho%2BznF4R7%2BMMHi1Sr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMwMLsuYEC7gM3319TKtwDDp02nwyt8cbSB%2FXOth16GvJ8hBh4Wgop4pyCgV%2BxLUNr7v4o77vZUQYaqVFqFSs4eFJ%2Fw2jCc2Q49Jw9bPeUSWCA%2BGwuxIDGKVRjrU2JBQbEzplYaTvGOFSkz7rhEfR6t01vNif9EeQCkwjyM2i9XJ92WMq0YJT%2Bk47vMbm%2FORa3g0OSki62Umk8a06tDi8KieSLh00kd3lqV5%2BgE0ZpsC15ekEbAbG%2BtxCE3%2Brrh8UfGR4L87nAIcHHbKsC7Mjd%2Bpk8AJ9RtAx85NOBVw6BDydznMSeD1o0XiTICi4n4TjRYKy%2Br44fBrOJSeJY%2FgsMIj9BRfoOC1zgeGv2MiwcjaPFEHMas2tgsq9yytBUb8G3gDksDis1TL1NAOAvvsLy4QQRkduLjKTaX7eOASZNIdN9rq%2F%2Fzdht8mSbMqns16E0P5aDL5bzfmikryQU1ZbTHyJFQeGgCIFWxkFXKNjSGPk3TSu1oJblb7VVSk8LeBNyGXgPgJ6w4J8j6zhC7tF5HRq2Q2r19v7%2BVaVGy5AoX714gD1bJxMZDSP%2B6R7KZpdyaqZrRXju%2BoG%2B7ovCpeE%2FN7wmyV4cPC4IttBK%2FVE0fViW%2FTmmAQqTwAsIuGWSNImQDwtDI%2BxdaDK1X6gwoIaSxAY6pgF%2FGuVRHTQGlnvUX3Vo6%2BwEVI3fdeZ0G1785zmQqnNzr7aLAN7FtIg2HrUk%2FZr9DWroWl6iHodAGaXoH%2FXanZiHSdCnngoGGxKJGsxBwFyK5fti3VFuIZjLy2FZVFohNCE4m6yzXOQo5PZd5ZctNwQTqu%2Bz%2BAWgpZnrTKuMyIu1zXzmd91sh5zImnSmXihumX9WlTZ4iXAzWmytB7wVUSoJE%2BfnXaI4&X-Amz-Signature=80f7149f66fcc2abacfbc29e24e3cddfc006c8a87ee670270fc3f1cf7da7597d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKAXUREP%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIBopOBk0nYF07aj3TR0hQ0PFxlf0vpeAoACRCwwjz7wcAiAKUDl%2BffrCrPPd3sPd0rl1LBfgUOCib5U76RRoHr7Q4ir%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMPL%2B0wGBUlXsnLnSJKtwDlxgQ0rk1ISdDHOir6Fy2VcHvLG2D%2BPMD%2BEDaIrIGlIZvHIfJNAK4b4KUeyyNf3bABHUEskPuvqbuBNOoi6971pRVuarrH7kK7zqI1zSxcV1D%2BeHUWM4TWFQFK0FKf1ZpjYb2yBQ%2BHntvRajPxLJ0%2F4RwQLLyBt1A50CQ%2FdSIMVD6zH8ZMZxWGLAyxzMyLPWR0vdoDL0Zu%2BPHgb1indyJ7vUwvdkSAueAfM%2F6TXj%2F4dXAn5uObrnI7mOMdCbS4gOb13fnLGSkB6digXKqQCY1OkjhdZ7At%2B4GZmq82NaU0KuJxfuI%2FhJYS0%2BobmogqX3NRyDqCTBn%2BSs0ZeLyp0ll3SnxsXVTDW3dtM8mnICjXDOMhIXBXxNPjynCZwG5ph4U2n7LzYdVXk5%2BhTgWAubDvXP8yYlZ2jDlhAPJpBsf6LiG5x4F6%2B8%2BzdT%2BEfg8bHrMN3Dbkb%2BP1QD7HAqJD%2Fa%2FkA9msstJzaXrk9Zkwy5d9eFt7vt%2BRGJX7qqtCGysk8nZ%2FHW7E3KWHGU%2BF3j7EeU0veHgH5W8aXL3VUmDnwxnK0t7xpdJg47%2FKk7OZSrM7UjK5eX81ZQqoYpWzSn65eGJYcBNOP1ZJWaaMH8PsVJaKeJq4wsuGB7BkhsCGJYwtIaSxAY6pgFDbmnib8hApmNDn2sM9cJwSjzg6zhMmPKELY%2B9AZHYATJOnGXs9UNgXlhOBlFuN%2F2ybITFTtj5BiyHbgcBhsuYEbboniR1TnoQbIDIlKP3uoaIYgZQrhDaGQzNbIq8F3jI8nC367aduTd0uwHtFZfLGyzqojoJvw7mWuXRfSEqU0OX5RGHZPj7izlyd1rAqBUc%2FYjKpuvymOUbLKd%2BACa%2FkvHN2%2Bcp&X-Amz-Signature=245b013a79679d4f6fe2d38329e0e6f347be72b7a733b82bfa8462c56a40b650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TAQKYFK%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIHPFx0G%2FOGKeF6BnGwL3pB%2FmL8vUPGO%2FZvAW224lSAeiAiA0J77SFC4TlpyHl96bKFFB0MztETqGibqG0I5%2FzbrFxyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMKgfN3Wniew5RrgzzKtwDgo5qPfvQ8dXAQ8IywXIkpj5TwTHzGmuylHjlUWwlyysz2dMZPG%2BFYwGYR0i8IttYV56xN5Ck%2BytfVekdXxmpawIXRQkYvgsfRFzTttNibzy92xqUX3YMMihBVBGIlHTTo47v4gCRnHU7RJzxh96NmE3uTikdAt33npPU%2FxlsAx0Zl5tH7c9HHu%2B6q9wtwo6CVcF1N63NUDQf8EvL26dt1hCivjoJgRpYtTH74D4EHDD9Anm%2Bqo6laLX8oy9kFNnqUIBXGk5tM2VVvBlQ7lXrx3NTszFXSxeAEbIBWiPq0NvqXqqG522QSUlAZIlBWueJdTRY98GD5FfYJ0hFk73od28p0YO%2BlGPs5hjaNBu9bkeAfJb9b8st7hrr1QWFnY0Q6%2BjwvXmmhX4HZ%2FeFtSexvi8p%2FS6tGOEVmeFMqbCbsTOwlMjom4JTPekPLCwDBSjXU47v2CjMLZVS5AlhuJ7%2FiIFj2i7qOtiNYO%2BES1ngitqsg2G0REeKvXU6LdznNt7VIcNcb40BViGqdi8YOlVoEJ%2BPHNzo4ebp3WCK8GP9j9J8jDLlSsMC3NicN3JxeN%2BVFftlAWZQxxsn9ffXDQLZl12gilBs5tF3Y9YbR98qxkwIm8EuBNARbt%2BOupIwg4eSxAY6pgGL%2F4fsf9JrNm4pWHu0dtwPduzVt5M5vVE%2F69FhcsqRaVrMcONP6DB6K8oMI%2Byq8gpPpvjqn9KEWYVIBT2vxEOYz31gVZzelHkNMsx8NUFZCqmXRJ7bRvrgRY7omzOS7KHIVFpFYwWdKjc7%2FQWztRV8A2sM6mTFC5m6XnowACEKW3tJP6V4MsUhjuJlUn79ORUM9k5XViYso3b6xmO66tn2KX5J44Qs&X-Amz-Signature=fbe7a027768eaf331692a5019f9549abe9191572a148cc3d32a73e59e02348d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
