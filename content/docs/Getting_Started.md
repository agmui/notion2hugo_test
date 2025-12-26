---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKD4CUBB%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICbhkQoCHrNXkG8MxtLkiVpfwQyXISGszPQikG5%2FzMbTAiBQhRZtOOcTx7PQK0sdSZErYoaNPjYNrapn9VBkqjLVOCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMpcWveEuTnIZpXX7lKtwDYsc69573MVS7zJjWmM6g6NfaD89f57dicxSvnOD5pev3GkEpWFV1aOSboCtjh08uFGFWdpnXdadfjedBsHTPEDd0qlNviZ7iJMp39S9rpwTMybRQ27kknEnEZa12v%2BaQLQz7gWMtVnbuGYwPFw7uG%2F0MIUFCViIY8SjaZFA2LUExj8Tw5qZlwKXKAjN2%2BO6yuCzd%2BYa%2BTZ8QYKzBY503vudNW4vjpx6uqjp6Y0QRHP6nqufD3PZAvIl1A05mqi1oor3irgBwZgkEQRprxfLrgjhZqAsksFvoLTsDAVeFjbTZTO24z1PTMKheR0PP23VcWbchPNzSJHkOsJYGVsQU7bYcWZHiErATaIWQQmb5RgKKTOZJH4R1g2yEuQs5if6T2%2FEvhhWauR56kyphLw%2BY66mLEYQyNMIzfeuFPTw%2FLKkZcs5v51gvE7Pl69CEtWx3s%2FbyjB9eXDgEEQ2JeO47Or%2BtNGWTruScGYoVSxBAZbZS68u7SfNX%2BubVsam2YLSl%2FsbHw%2FFGTavlT0rRkNINAwj4Ijx2JrBjcjSTes5q8GBoy5jDF0%2B94LOeXGiZVpqs8iLrdfuvKmEU5Wktqx1IC9lJvqRY1OhufPaXvQebh%2FyAmrKk1mvgDJwAPTYwkq62ygY6pgEampF4Kem%2FFDXsE3NAmu70GkmT%2FeRjE9WQBsilsRy%2BjzLAf%2F7Zv%2FXeipnNcjFGbyrpuB4%2B8OriTfmWvmgYMu48HWy2fsYRgsmtX7PF0fX2zdQWAzHw3y%2FApiuno%2FeA0UOF0vTjCV1MW0PkLAOfslGQwq0YqYfTa4dsY3plgtWNR5xcusrTYHI%2BSFwkKdmgndcJWPg69iApK4fpURcmWSjVAKRX0Eq%2F&X-Amz-Signature=6d05a4eb04b94d9676bf164414c8999cf2b60204396108a79f4cab0fec84b8e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKD4CUBB%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICbhkQoCHrNXkG8MxtLkiVpfwQyXISGszPQikG5%2FzMbTAiBQhRZtOOcTx7PQK0sdSZErYoaNPjYNrapn9VBkqjLVOCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMpcWveEuTnIZpXX7lKtwDYsc69573MVS7zJjWmM6g6NfaD89f57dicxSvnOD5pev3GkEpWFV1aOSboCtjh08uFGFWdpnXdadfjedBsHTPEDd0qlNviZ7iJMp39S9rpwTMybRQ27kknEnEZa12v%2BaQLQz7gWMtVnbuGYwPFw7uG%2F0MIUFCViIY8SjaZFA2LUExj8Tw5qZlwKXKAjN2%2BO6yuCzd%2BYa%2BTZ8QYKzBY503vudNW4vjpx6uqjp6Y0QRHP6nqufD3PZAvIl1A05mqi1oor3irgBwZgkEQRprxfLrgjhZqAsksFvoLTsDAVeFjbTZTO24z1PTMKheR0PP23VcWbchPNzSJHkOsJYGVsQU7bYcWZHiErATaIWQQmb5RgKKTOZJH4R1g2yEuQs5if6T2%2FEvhhWauR56kyphLw%2BY66mLEYQyNMIzfeuFPTw%2FLKkZcs5v51gvE7Pl69CEtWx3s%2FbyjB9eXDgEEQ2JeO47Or%2BtNGWTruScGYoVSxBAZbZS68u7SfNX%2BubVsam2YLSl%2FsbHw%2FFGTavlT0rRkNINAwj4Ijx2JrBjcjSTes5q8GBoy5jDF0%2B94LOeXGiZVpqs8iLrdfuvKmEU5Wktqx1IC9lJvqRY1OhufPaXvQebh%2FyAmrKk1mvgDJwAPTYwkq62ygY6pgEampF4Kem%2FFDXsE3NAmu70GkmT%2FeRjE9WQBsilsRy%2BjzLAf%2F7Zv%2FXeipnNcjFGbyrpuB4%2B8OriTfmWvmgYMu48HWy2fsYRgsmtX7PF0fX2zdQWAzHw3y%2FApiuno%2FeA0UOF0vTjCV1MW0PkLAOfslGQwq0YqYfTa4dsY3plgtWNR5xcusrTYHI%2BSFwkKdmgndcJWPg69iApK4fpURcmWSjVAKRX0Eq%2F&X-Amz-Signature=06ff8cd4eb395ecb14e133b11251fee57284d0024f4ca53383e544731ad5c2c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKD4CUBB%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICbhkQoCHrNXkG8MxtLkiVpfwQyXISGszPQikG5%2FzMbTAiBQhRZtOOcTx7PQK0sdSZErYoaNPjYNrapn9VBkqjLVOCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMpcWveEuTnIZpXX7lKtwDYsc69573MVS7zJjWmM6g6NfaD89f57dicxSvnOD5pev3GkEpWFV1aOSboCtjh08uFGFWdpnXdadfjedBsHTPEDd0qlNviZ7iJMp39S9rpwTMybRQ27kknEnEZa12v%2BaQLQz7gWMtVnbuGYwPFw7uG%2F0MIUFCViIY8SjaZFA2LUExj8Tw5qZlwKXKAjN2%2BO6yuCzd%2BYa%2BTZ8QYKzBY503vudNW4vjpx6uqjp6Y0QRHP6nqufD3PZAvIl1A05mqi1oor3irgBwZgkEQRprxfLrgjhZqAsksFvoLTsDAVeFjbTZTO24z1PTMKheR0PP23VcWbchPNzSJHkOsJYGVsQU7bYcWZHiErATaIWQQmb5RgKKTOZJH4R1g2yEuQs5if6T2%2FEvhhWauR56kyphLw%2BY66mLEYQyNMIzfeuFPTw%2FLKkZcs5v51gvE7Pl69CEtWx3s%2FbyjB9eXDgEEQ2JeO47Or%2BtNGWTruScGYoVSxBAZbZS68u7SfNX%2BubVsam2YLSl%2FsbHw%2FFGTavlT0rRkNINAwj4Ijx2JrBjcjSTes5q8GBoy5jDF0%2B94LOeXGiZVpqs8iLrdfuvKmEU5Wktqx1IC9lJvqRY1OhufPaXvQebh%2FyAmrKk1mvgDJwAPTYwkq62ygY6pgEampF4Kem%2FFDXsE3NAmu70GkmT%2FeRjE9WQBsilsRy%2BjzLAf%2F7Zv%2FXeipnNcjFGbyrpuB4%2B8OriTfmWvmgYMu48HWy2fsYRgsmtX7PF0fX2zdQWAzHw3y%2FApiuno%2FeA0UOF0vTjCV1MW0PkLAOfslGQwq0YqYfTa4dsY3plgtWNR5xcusrTYHI%2BSFwkKdmgndcJWPg69iApK4fpURcmWSjVAKRX0Eq%2F&X-Amz-Signature=bd75ea5b214e45b3897846b35631736bf02a857ae3b3ecc7ae356c0499c7e50c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNPRWPYV%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQC72YUkc1hqI8YxCc8DtC0GVsdw0kFxO2Mwnb4G2s09lAIgBZhho5IvZx212pviD5nZZevitTHUfYTVVntMtVLtNCwq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNFUb9Pewl8x2o%2FcjCrcA%2Ffs5Il9Zr2QtUJvcjagExrG0LtMa7xwodM6nBTiHzY1jDGABn%2B%2FkpPuFx3kvhMoNECtbNkqNCfYQvNh7%2FFH0ZesIWd64qikDSutwcD0Xu2UUaU%2B2ckXNkVw6IbZjtpp6HQFtH9dkgy0bkw3JPlhzZ0ljRf0iwPQ%2FyBjZswK6zq0ns%2BsNW%2BDiFkDU%2F2XjnTuDs3nZhGA7kZLTnGCa5cfqtHal3LlOfEOI%2F%2FJZhNYaIc1%2B7pjvaBAyasi59wWzAgK74b1sp%2FZXx8HQrwrj9t237Z8WaU5Gpll4FYOKHad%2Bb1TtmaZRcbSIC6e6uapOsa8N7Uo8wISW%2B5BMHxYUc%2BesCTA4MBglYRVedt8MoiXrkEPaTgTFSsfKACTNv3%2Fzolm5IHRdGcTHnTDiadgTwyoP8dDf3WLRROD2tt%2Bb9Bj2jSmy7fDXmDhZPWA9C52DgSmQ%2BSUuIeA0ndapW9ndK8BDTn9XC%2F34Y2Ob%2B9CldzWagnp7ihLhmZfy2gTTa8%2F8UbcCM7U%2Fh3PMMBXVCNENZjAvXsvuVibEUrODcO4VCxkEgFhbimv%2BDBCgMlG0UDVknDRGT%2Ftd9CHqSCzc7UgZPya4ML8yh16sVSpSaRWOaVls3QYxhckQqOzDVssOunxMPGrtsoGOqUBsoWVl3PMfaQBCFAiKwl2gC3TcHFeLtBwa9BykyZqcKFWhNFnzbrtk8G%2FJu7W43ZvEri6ph6unqW07e9sQXuWBR1ylp0v8FQC2Kr6r0BOeLgFnART9M6cJ4tPxjPBPlDSwSQK0qNxxC8oAJsruY2tDKgvXHUz5yVtEeUqXsWrQCmeqPoeUtRARPtmy2GxNGtYuucvUVmbnPLyC81lv%2FnI0JRteHFp&X-Amz-Signature=8fa79ca9c5a59df3a3866f7fb2884e365c31216ad1c472b0a14798e0757ab3ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBE3HURD%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDjcz91yKdIlCiLlEsqiZF0RZ1tVg5uXBbz0MitUgLxTgIgQVGIDI6UnBLr5bOhQ%2FlvUqo27BLEzTy3e8ahAnRVmQ0q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLBG%2FNcaKgwo09No4SrcA%2BMoObCEjcGcZmLe57aV26Jh5QWzaI8l9zmpcJ0UuxAEPljwJg4GoBmamr%2BaQgJLlhowLzgjuQFK6YhkegS0%2BKNSKBm1WUU8PkK%2Bl2jivUQIMge%2FpJFpo4b6pB6lGKzzOlDZ8INhXsRY1%2BWtzvBeT3%2BSA%2FX3RktpGRsUG%2BU6eJfy6JraEYiqPWdOmKkKKykuZS4bme9UI7ev%2BOI4iGoHyXUJHtNrbZacYnLuSfilkazCqsXklsfqFuzYr6YftYX3ndRvuIBVbKo2bx%2BoZ%2F9SXUMzr2KI9Ycr2U7QLAAUVXSlawztn7UtA9Epg6ZVBLLpJDOMUW6stI1WDOyUr3wKtJNAkCaDWjt0xfyTYrtkkAGasABRtmkzXdkCqN9ElBtRaN9BvL%2FrV5D48l%2BSzl3XXfYhcrwHe3f44nuOHDe8%2F11taxN3APGuCxQnRi%2FeT7j4xPBJ1fQMubYEOUZXA%2BDLfbYsD1Dy57KcCmX7VUh3qQuBnEzoKjqEZWIqEOK4JxfdJtEMaQQapIe3iW38M505UctTCAntAHUlJyPXw76ELfHqrvM6HI2WDclin5T3oZoSYKFQQlcmL7km9fHfEI5Vv0FBZjPQaWFsesdad5ftjeJfmDso7y1vFTWEqIuTMPmttsoGOqUB63kqtEaY8bTcgSRRnUTVPYPMTfGEcmkDa%2B9iYc64gz%2FiYSu0xDJJK8CG%2F92N2CIbtWOHFyU3NIKZyXNqcRpVv3Hib8piC578hJE%2B7WZ848CMA0WWkY%2Fr3h85xV0PvN7p%2Fon8lnpG4Ljw9aYe0USRafrUITrdqFXiCTvhgGFZCSDdWDEYwZQQ6xF3XSHPQiMFxLYPQhQq55yW9ZfUhvDFKNZh9ZMA&X-Amz-Signature=88aa8d73908296711bd8400176c6cee83bc3284e93dda9d60a3d4a0ac0faa048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKD4CUBB%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICbhkQoCHrNXkG8MxtLkiVpfwQyXISGszPQikG5%2FzMbTAiBQhRZtOOcTx7PQK0sdSZErYoaNPjYNrapn9VBkqjLVOCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMpcWveEuTnIZpXX7lKtwDYsc69573MVS7zJjWmM6g6NfaD89f57dicxSvnOD5pev3GkEpWFV1aOSboCtjh08uFGFWdpnXdadfjedBsHTPEDd0qlNviZ7iJMp39S9rpwTMybRQ27kknEnEZa12v%2BaQLQz7gWMtVnbuGYwPFw7uG%2F0MIUFCViIY8SjaZFA2LUExj8Tw5qZlwKXKAjN2%2BO6yuCzd%2BYa%2BTZ8QYKzBY503vudNW4vjpx6uqjp6Y0QRHP6nqufD3PZAvIl1A05mqi1oor3irgBwZgkEQRprxfLrgjhZqAsksFvoLTsDAVeFjbTZTO24z1PTMKheR0PP23VcWbchPNzSJHkOsJYGVsQU7bYcWZHiErATaIWQQmb5RgKKTOZJH4R1g2yEuQs5if6T2%2FEvhhWauR56kyphLw%2BY66mLEYQyNMIzfeuFPTw%2FLKkZcs5v51gvE7Pl69CEtWx3s%2FbyjB9eXDgEEQ2JeO47Or%2BtNGWTruScGYoVSxBAZbZS68u7SfNX%2BubVsam2YLSl%2FsbHw%2FFGTavlT0rRkNINAwj4Ijx2JrBjcjSTes5q8GBoy5jDF0%2B94LOeXGiZVpqs8iLrdfuvKmEU5Wktqx1IC9lJvqRY1OhufPaXvQebh%2FyAmrKk1mvgDJwAPTYwkq62ygY6pgEampF4Kem%2FFDXsE3NAmu70GkmT%2FeRjE9WQBsilsRy%2BjzLAf%2F7Zv%2FXeipnNcjFGbyrpuB4%2B8OriTfmWvmgYMu48HWy2fsYRgsmtX7PF0fX2zdQWAzHw3y%2FApiuno%2FeA0UOF0vTjCV1MW0PkLAOfslGQwq0YqYfTa4dsY3plgtWNR5xcusrTYHI%2BSFwkKdmgndcJWPg69iApK4fpURcmWSjVAKRX0Eq%2F&X-Amz-Signature=6cfd527d512890019102c61ac5daf4971d97f6d31c2ba23ff9d536df0624274a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
