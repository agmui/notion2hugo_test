---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPK4TQ5L%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5Jkjp9BTV6psyFyN5DTB0GFkuV%2FRnEJiDta%2FoW5RLfAiEA4EXAm0FvIY%2Fbddr3JCsWchNiiaB8yZnPWioATtdQxY0qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC0uPQHb5qm60%2BdC4SrcA2PRNtoe6GuvWJuFMVNAGOMdA2NLLKBOK6abn1plazqP8QT8WTfv7mvvpLvjCkjuLaizfxB8wAgxcwfJlzxK2kAamlJ3VOijDUpB27BTOcHiGKs%2FYa%2FQtSGRvJ%2B3jFCK12V45MsBO3FbeFx%2FHAnGncAMK%2Bv2U%2BGmuEq%2BsItecpqRwIz6g4EMNnnmEFsBzz4%2BLpuWdHA3Q6Lm5fCorZOSWpBO5uqwQGqwh71QafXXrgTtqr%2B%2B5VUcgL8v5akw2QiHTJNZqFP3fKS0POmw7cTnA6kWc5hEQNQvwf8J7bAK3wOHsLnZO1UuTESGqo6rUiNCmyk3g9Yoq0ZrQRgpIGYdUcib%2Fo1F6Of%2FEIWwj%2BzDQrc009EPStmIgHxwW0N%2FsfIDIW6Osmm1nGZtuG6O7au%2FBkjLsCWALnfNg9jeq%2FE3bHTP3giNsJsDI7XuqQZH4urJaEynDqF5ao9IMzQwKjxAha2vnc5ZNF6CHqV4445NVyCob9YRiOF6xwhTVA4U9lPiGDnoCdgNO0tCSIPzt760NYjEbG5nLU8KWBhBD2DgZQwwL9hbCePZNG5fISURlNb98m7buYqu6IXyjRDpaS4vgmQuzfmP01fFxCqbcxUosxekuVIw%2BA2V3wPM1hwrMLaEm74GOqUBNSvJAewqCIc0eduqcunZGcAI2g5aj%2BQtOL0WpSVWrlZF8a1STIGGT2eFr%2BM0j5z9saAlUzORNiVLXaO1oI3n1%2FB%2BqhHnPnl7INcnQjfEPjKWilT0U0kySaoDmR%2BeZJbfp55iFnx0xnxF7N5ylauRH4dOgvcBIswvTYXjBTKTxcDTrQMtdrAQKQm0Jmse2P8TYiL3gy%2BJZ3dngP1TkjsUjF4DrUFN&X-Amz-Signature=ea07e0d8b4e59ec2554b7800e54d165914bafc81a8cfbdf5db0504f24d7d3773&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPK4TQ5L%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5Jkjp9BTV6psyFyN5DTB0GFkuV%2FRnEJiDta%2FoW5RLfAiEA4EXAm0FvIY%2Fbddr3JCsWchNiiaB8yZnPWioATtdQxY0qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC0uPQHb5qm60%2BdC4SrcA2PRNtoe6GuvWJuFMVNAGOMdA2NLLKBOK6abn1plazqP8QT8WTfv7mvvpLvjCkjuLaizfxB8wAgxcwfJlzxK2kAamlJ3VOijDUpB27BTOcHiGKs%2FYa%2FQtSGRvJ%2B3jFCK12V45MsBO3FbeFx%2FHAnGncAMK%2Bv2U%2BGmuEq%2BsItecpqRwIz6g4EMNnnmEFsBzz4%2BLpuWdHA3Q6Lm5fCorZOSWpBO5uqwQGqwh71QafXXrgTtqr%2B%2B5VUcgL8v5akw2QiHTJNZqFP3fKS0POmw7cTnA6kWc5hEQNQvwf8J7bAK3wOHsLnZO1UuTESGqo6rUiNCmyk3g9Yoq0ZrQRgpIGYdUcib%2Fo1F6Of%2FEIWwj%2BzDQrc009EPStmIgHxwW0N%2FsfIDIW6Osmm1nGZtuG6O7au%2FBkjLsCWALnfNg9jeq%2FE3bHTP3giNsJsDI7XuqQZH4urJaEynDqF5ao9IMzQwKjxAha2vnc5ZNF6CHqV4445NVyCob9YRiOF6xwhTVA4U9lPiGDnoCdgNO0tCSIPzt760NYjEbG5nLU8KWBhBD2DgZQwwL9hbCePZNG5fISURlNb98m7buYqu6IXyjRDpaS4vgmQuzfmP01fFxCqbcxUosxekuVIw%2BA2V3wPM1hwrMLaEm74GOqUBNSvJAewqCIc0eduqcunZGcAI2g5aj%2BQtOL0WpSVWrlZF8a1STIGGT2eFr%2BM0j5z9saAlUzORNiVLXaO1oI3n1%2FB%2BqhHnPnl7INcnQjfEPjKWilT0U0kySaoDmR%2BeZJbfp55iFnx0xnxF7N5ylauRH4dOgvcBIswvTYXjBTKTxcDTrQMtdrAQKQm0Jmse2P8TYiL3gy%2BJZ3dngP1TkjsUjF4DrUFN&X-Amz-Signature=e56c0e1ca3b8ca1f3f635d35c1d3599c6f2887217fffa07e5cc66838340897ed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CUSS27Y%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BgPmT6Ju1jydCTPsObmIMcV8WPFyEGvGUrzuRONpeCQIgOcdd8r0rcJ%2FJHOu637wZngH1BkljCzmNfa28ga%2Fr3n4qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbpCciKi7PRGtTQOCrcA7OKkgLUIXuoziC5ks%2BKEXJujtYHpRUSqWX3unzyH7L8bTmpgsrYktU5GWnIwHufw6Yb4EnCDX36S%2BB6DFqmGzk75iL2VSSFMud%2BG9QSBySd9Us%2Bd9Logp3m71Dv3YCyn0mKDhSkrnetzZvxsELqvLIAUrgPS4XOB%2BK5PXtg0AFDMHOTKYqxl2b9Xr7zuOAE3x%2FNCio9Q5YyxyAmbGG6bxCa8MEaAYudVJSsrMOkK5dg6gH6BM7dCcvUJygXwuQ2e%2Fekr88biECcanpk5LghiwGOOk2%2FEVglhaXpykLSZbGyK6AUuS5aX4OqaPooSCMM3PGW4h1J78Yb3ftNssf1jNJUZJn39IA30uKjyhxd6rtxBtQssi5yK1QYi549xc6VMlS9s2THTy1%2F7W2wSIjfnMkd0ExzRo2t%2BAkPfNPjdvkVsa22WSVoQZ1%2FQgAwKyukKp6f%2BxFavDvD9HhhX8vvopZfMXJV75TowQpqSelqcl1C9qSDLVvVyjJNE5aRqnetuxf9dGMHigej9pBaeo9HM3M7b5KDI2AP6LhdAzV%2BG%2FbIlcJ3MlIE8xj3l18p6KkQHrUiRaFGMZLqWHQ%2Bbr1jv0s7zxqaP5W%2BvuGEXbJ6g0OUWTKm23oPAyhhd0%2BoMLGEm74GOqUBoNmjNYgS5m0ogG24jc4v3z0oA1Zm%2Bf6h%2FBp4sk21KRBD%2FPwECrCFB3HxMUWQ%2Bjku7WFpo8QWBPEBkgi3Wuq%2FXd1jD%2FikC7CWBy3vLcrulTZmtlGT9Ku5JO9P%2FIxA%2BHb1MVz1MAWljETwGP%2F%2BY4F%2FOP4K%2BmABtA7M5HHusd8cReYbLHx7m0GAQMYmqACzBgxckRMC2gULmKQI1%2BZRXZPeg0wMJoQe&X-Amz-Signature=3a82dc4ce85eddb1729cbde993f45a159c2c25a98bc671b5a035f1f138f37f4a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPXEODFZ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0764RPeDRTSBFLDk7Niwa2aoLrfswbl4Pn%2BO5nJlAQQIhAO6O1uwL31vZuptIt189TTx86n%2BUfhRnFWwR2dL%2BrvkyKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmjZTwLleaKjxjtCgq3ANxRJgzmJ15AOa8UbMnYeoMGk75uDqfyZlaNL08U85ksMBcVfi%2F373xC0iJ3syKs%2BZsRgiIlRN0wOOMzjNCz1YFSO55TvQsY1JKq94xHHDA%2BWDXrBkOu%2F8s4iE4VgKGEqdOjgQEnzS7mIY%2F3hnKLpqQYocLrYWZ2uyKZ8CNDYo1HUMvs4oX2GPHQTJBuwjYvHukdBbCriJ0Xd%2Bua8vMi3xNWkGdAGBmdEcou881QLIoJcwm2eIEL9h9yurMTzmiKFF%2BjDJ38a8hj8im6db1ixik1x2XgaTVpniZ%2BiFunnPaNfuaonmgymv1VyvvbHtwzJ5MvRH5PqdGVNCBIpz7eeKR8xjvMPzOL8Dg1c9PcSRbi9PFJ1dsMjnd8WjIc97zfCvNQDyUe4ZY3goTao4Qwy%2FHfAZ2Zo5TqPMEEKyDEDcDu%2BdgJR%2BpROGmKoneHDxOd6a65y1fdg0vrpaRMir9NYu03aoDP3DVz4Q3hJ7V37whUfXIrtqfEwLgmYHB0dV3oc%2Fv33xkm2VYgRc1e3lPvBqa%2FCAi2zK%2F%2BQmRadcZKKGLwc4D0HoVMN2AyNP5ZdQkU%2BqHlHVYwNBdS%2B18cSdlQaTVbqPd7gSRWNxl5VlNLYbKNPc27wmcL6tHdUmlVTDDhJu%2BBjqkAbadALUuEePU4no%2BMJ%2BW%2FEP62OH8A0ngxKrN8KfOMAr%2FzGc3PI94ZXKXTbOSbPpa4eS1OwbAr6pqbIbWvIgQ%2F4GQ5q0gGfiH7mHaOgdHiDfn8ozRD4rKJYzAdHkTP8s%2BGBXr1VUe6FRYJvzJ95KAkIZslOxL31h1%2BqQll%2BVRB%2Fezte65z3K69dNLHElWoMhkI%2F22wpzF9NEM7jB33HQi2WA1SvSm&X-Amz-Signature=552a326e3586b1f1bcfb01d6e060fea3e93cd0da7e07b7d448a445d5d7d865cb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPK4TQ5L%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5Jkjp9BTV6psyFyN5DTB0GFkuV%2FRnEJiDta%2FoW5RLfAiEA4EXAm0FvIY%2Fbddr3JCsWchNiiaB8yZnPWioATtdQxY0qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC0uPQHb5qm60%2BdC4SrcA2PRNtoe6GuvWJuFMVNAGOMdA2NLLKBOK6abn1plazqP8QT8WTfv7mvvpLvjCkjuLaizfxB8wAgxcwfJlzxK2kAamlJ3VOijDUpB27BTOcHiGKs%2FYa%2FQtSGRvJ%2B3jFCK12V45MsBO3FbeFx%2FHAnGncAMK%2Bv2U%2BGmuEq%2BsItecpqRwIz6g4EMNnnmEFsBzz4%2BLpuWdHA3Q6Lm5fCorZOSWpBO5uqwQGqwh71QafXXrgTtqr%2B%2B5VUcgL8v5akw2QiHTJNZqFP3fKS0POmw7cTnA6kWc5hEQNQvwf8J7bAK3wOHsLnZO1UuTESGqo6rUiNCmyk3g9Yoq0ZrQRgpIGYdUcib%2Fo1F6Of%2FEIWwj%2BzDQrc009EPStmIgHxwW0N%2FsfIDIW6Osmm1nGZtuG6O7au%2FBkjLsCWALnfNg9jeq%2FE3bHTP3giNsJsDI7XuqQZH4urJaEynDqF5ao9IMzQwKjxAha2vnc5ZNF6CHqV4445NVyCob9YRiOF6xwhTVA4U9lPiGDnoCdgNO0tCSIPzt760NYjEbG5nLU8KWBhBD2DgZQwwL9hbCePZNG5fISURlNb98m7buYqu6IXyjRDpaS4vgmQuzfmP01fFxCqbcxUosxekuVIw%2BA2V3wPM1hwrMLaEm74GOqUBNSvJAewqCIc0eduqcunZGcAI2g5aj%2BQtOL0WpSVWrlZF8a1STIGGT2eFr%2BM0j5z9saAlUzORNiVLXaO1oI3n1%2FB%2BqhHnPnl7INcnQjfEPjKWilT0U0kySaoDmR%2BeZJbfp55iFnx0xnxF7N5ylauRH4dOgvcBIswvTYXjBTKTxcDTrQMtdrAQKQm0Jmse2P8TYiL3gy%2BJZ3dngP1TkjsUjF4DrUFN&X-Amz-Signature=934f6e5a140268509ae548c397a2d588ada9aa6c8fb78aeca353ab750244222e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
