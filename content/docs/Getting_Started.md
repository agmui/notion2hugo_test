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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOVGDJJY%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDvokp9iuvo7Moi35hdjxBmWvuel2ajSl2Sv0%2F6Lmp%2FFwIhAI5ODyHj011KUez1Kx6UQOR9tlxq7IWo6a7tyKoFFQArKv8DCCMQABoMNjM3NDIzMTgzODA1IgzgsH7dgQOxGm3RONkq3AO4W42fuUHMOgZI2LOuO%2Bnu16bISpruLd26kUx7eeCL9evxKj96pJAViA6tXr8N5NHErdriitaxKlladXlqJvp12WqSCTVlg6j9KV6GkdWmHtAtpVj%2FTMsJT%2BojYo8RL0VB1MqZ8Uwp8e4gwWhBtDb20MIewGcwnOQ8tJ6A1SO2PNQbH082m10TQcX4ARokcaE8iFM9AA67fnsoo9lJpytiNxYKN6fhJlLktsqca3bnCNTbMHzAiq3ZRbtI4BmWQAYxKZ%2BW5rcneTAoAHZxi%2BAEHvbTC9fzZN50pU6D8%2FM4gtXu%2B9zzI5jWb35jehdJT7lIbg2FAfab8ZETKRs99J3DJ6xEzQenM13Uthi%2BDBVptcqSQTWaj7NdTkFazbFWcxeTU3D8CDcvBr1XAZpw8M%2FhXUeCrG0zPHONrxW5AHR81H47wkaPzepflZJ7gJUH63MqlN7bPEZm4i%2BOjsj0q%2F6aBjlAdV1UKk%2BNyZBeYLGMhdQF73TLxLqJZjFWKnIoOns1NzSLMnZ6bhzVL09tckZ0UZoPQngBt5kz7ByD7ph4VV1M5Bu1Ld8AWJRK45iniB3%2FH%2BTXLaezdcDMvchgvQIQnHzaL%2F%2FzuoWDbehz0amn068nI3BHdqrg5mUnIzD4%2BrLRBjqkAcQNCjsuE3AO5d26Bim6CW3k%2Bty4q5hdu1cs%2Fx6Y6yzUfr0PwqTh2toWY%2FXbVn05hefPawg2foLFFc3vUsaNcEvtCQMElDFszdfBJJzlrXfqmr7LkH%2BLvFy3K1b%2F%2Fyy%2F06SwvxLR4znxnS%2BD5oJtMa0vNCDwDJXqK5gpT6heD50v6KgUgdDO%2F%2F5NWOoksgBaMEM686BxGqQ3jAtM6eNwzY2qksPT&X-Amz-Signature=ee18171361d598835e07de822d62815150eb9d7b4071df767ef886c4f0ca3cb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOVGDJJY%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDvokp9iuvo7Moi35hdjxBmWvuel2ajSl2Sv0%2F6Lmp%2FFwIhAI5ODyHj011KUez1Kx6UQOR9tlxq7IWo6a7tyKoFFQArKv8DCCMQABoMNjM3NDIzMTgzODA1IgzgsH7dgQOxGm3RONkq3AO4W42fuUHMOgZI2LOuO%2Bnu16bISpruLd26kUx7eeCL9evxKj96pJAViA6tXr8N5NHErdriitaxKlladXlqJvp12WqSCTVlg6j9KV6GkdWmHtAtpVj%2FTMsJT%2BojYo8RL0VB1MqZ8Uwp8e4gwWhBtDb20MIewGcwnOQ8tJ6A1SO2PNQbH082m10TQcX4ARokcaE8iFM9AA67fnsoo9lJpytiNxYKN6fhJlLktsqca3bnCNTbMHzAiq3ZRbtI4BmWQAYxKZ%2BW5rcneTAoAHZxi%2BAEHvbTC9fzZN50pU6D8%2FM4gtXu%2B9zzI5jWb35jehdJT7lIbg2FAfab8ZETKRs99J3DJ6xEzQenM13Uthi%2BDBVptcqSQTWaj7NdTkFazbFWcxeTU3D8CDcvBr1XAZpw8M%2FhXUeCrG0zPHONrxW5AHR81H47wkaPzepflZJ7gJUH63MqlN7bPEZm4i%2BOjsj0q%2F6aBjlAdV1UKk%2BNyZBeYLGMhdQF73TLxLqJZjFWKnIoOns1NzSLMnZ6bhzVL09tckZ0UZoPQngBt5kz7ByD7ph4VV1M5Bu1Ld8AWJRK45iniB3%2FH%2BTXLaezdcDMvchgvQIQnHzaL%2F%2FzuoWDbehz0amn068nI3BHdqrg5mUnIzD4%2BrLRBjqkAcQNCjsuE3AO5d26Bim6CW3k%2Bty4q5hdu1cs%2Fx6Y6yzUfr0PwqTh2toWY%2FXbVn05hefPawg2foLFFc3vUsaNcEvtCQMElDFszdfBJJzlrXfqmr7LkH%2BLvFy3K1b%2F%2Fyy%2F06SwvxLR4znxnS%2BD5oJtMa0vNCDwDJXqK5gpT6heD50v6KgUgdDO%2F%2F5NWOoksgBaMEM686BxGqQ3jAtM6eNwzY2qksPT&X-Amz-Signature=cf5a49d2ba97c86c14f28363de12fdf6520f053b46310309acbf4f0c8b62a209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOVGDJJY%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDvokp9iuvo7Moi35hdjxBmWvuel2ajSl2Sv0%2F6Lmp%2FFwIhAI5ODyHj011KUez1Kx6UQOR9tlxq7IWo6a7tyKoFFQArKv8DCCMQABoMNjM3NDIzMTgzODA1IgzgsH7dgQOxGm3RONkq3AO4W42fuUHMOgZI2LOuO%2Bnu16bISpruLd26kUx7eeCL9evxKj96pJAViA6tXr8N5NHErdriitaxKlladXlqJvp12WqSCTVlg6j9KV6GkdWmHtAtpVj%2FTMsJT%2BojYo8RL0VB1MqZ8Uwp8e4gwWhBtDb20MIewGcwnOQ8tJ6A1SO2PNQbH082m10TQcX4ARokcaE8iFM9AA67fnsoo9lJpytiNxYKN6fhJlLktsqca3bnCNTbMHzAiq3ZRbtI4BmWQAYxKZ%2BW5rcneTAoAHZxi%2BAEHvbTC9fzZN50pU6D8%2FM4gtXu%2B9zzI5jWb35jehdJT7lIbg2FAfab8ZETKRs99J3DJ6xEzQenM13Uthi%2BDBVptcqSQTWaj7NdTkFazbFWcxeTU3D8CDcvBr1XAZpw8M%2FhXUeCrG0zPHONrxW5AHR81H47wkaPzepflZJ7gJUH63MqlN7bPEZm4i%2BOjsj0q%2F6aBjlAdV1UKk%2BNyZBeYLGMhdQF73TLxLqJZjFWKnIoOns1NzSLMnZ6bhzVL09tckZ0UZoPQngBt5kz7ByD7ph4VV1M5Bu1Ld8AWJRK45iniB3%2FH%2BTXLaezdcDMvchgvQIQnHzaL%2F%2FzuoWDbehz0amn068nI3BHdqrg5mUnIzD4%2BrLRBjqkAcQNCjsuE3AO5d26Bim6CW3k%2Bty4q5hdu1cs%2Fx6Y6yzUfr0PwqTh2toWY%2FXbVn05hefPawg2foLFFc3vUsaNcEvtCQMElDFszdfBJJzlrXfqmr7LkH%2BLvFy3K1b%2F%2Fyy%2F06SwvxLR4znxnS%2BD5oJtMa0vNCDwDJXqK5gpT6heD50v6KgUgdDO%2F%2F5NWOoksgBaMEM686BxGqQ3jAtM6eNwzY2qksPT&X-Amz-Signature=481461a1963d9bbe45750afba5786070b1056ad63f2c7a310ec3d87a4fe1a398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFQRFXGN%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDAnKGQ70%2FynazEAHz99N98%2FrImWp6LvIDZiuKyy7fzCgIgWqBYurUnNKuh0DCwUW5lAgJFL1uDVecR3Aa0FVchI%2FQq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDGQ99%2FhFugCFPdSMUSrcA7qQDf2y4GCZcNzzORqGMcEdrttKxEvvum6aodi8owBL9gDWCJ0lKaZho6m2CLdIo%2Fe9L%2BD71rAGbUQmmSZfDa6uesmeIxoljT7FFu01I0AAuDkkb%2F1XHmZS89SAhHThDaj1hVlvqWhUgOeBgYkWrCxZApUwUku3bpxkPe1z500Fxm%2BcXe9whsCqcrTz9ydkq1Rlj903RhIFy0lWqh2%2FxKxw%2FASLotKItvet6PkLh5Bl4sRWb5lxkB%2BdXqycuBv%2BntQqvOtIJR3GkoemZfliDd%2BDL4cCNaL2zN7TA0UZmlnvLJI1XlXdgkjlqnv9vvCr%2Fm2ilOrSTG9Y0flBxlhYzBUZSKcNJ0v6Us%2ByHZLuG2m6GITn%2FmvCnvapj5F3ZrpM6P2TYz%2BxqnFxm4KToeUW9bLvRhCt1Lkm1TlzjaId6nCw8padT9VSMRk4kAixTJc7LSHDk%2FF09tjFNaWm3XbikMMHkZ5BljlYUmHQCajJZF4p2JYrmTcTOMk7IO9Acpr%2F2d7gDo4htsdkFUNIOSg0qdKbqoJjiezhBe%2F%2FdCPqXDLKY9YcD9%2FZJwyc%2BQvW0OBdxQXZ7nXN6w35sb7wtRNIbRA44u38Vs2Nx8xqWMihjL9mphhwizP7hOYBZP%2BrMMH7stEGOqUBRxvZzwh4Qg8wTOLl%2BiqlSkfW7sBN2Xm%2FknHzjytzpkiETCjaeugH4%2FF%2BsLc2jROmbdRv0y%2FWFx%2FANNnzm3g%2FNzkWMyaF3FloVgKU2XgDXF5fnsMmjQswog%2BnCG6anATMQTZnObZwWjSJcOcVW1g6gYZGtLe%2FAINGDF5NOsMePo4G6O8urzaLUSlXCDios50FwgF2lmyVoEijj48Xt8%2Bw5MIU0qzM&X-Amz-Signature=3cfdd40c1816b0bee362d5b42ccf52e70e91d6a9c2cbeb64712ccfecf686edac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEU3WSTH%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEkCZa2yofxO3%2FzCZnSXY5N7Nh8eWPTkMsBREb7vRMqkAiEAmRzwCzqC2jdMn6i4XqOuPbx0WEckYTX7IBgQrTiMZHMq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDLqH84gd7eqx59n9OCrcA6TD9el0hymTBWkDn0kCWsQ9n0EaKy6EI71DPUVWaK2WwovQxfI11UInr6tRXTjt90k%2FKyxkLpT0oXcU9owMxvq7bnXJoyfQ6vNTjHZOdIqKCfayPxWB03WtAT6%2F26oY3Kk7O2ZgBNPgiZzPTmjjDfPcNYkhNAXRK0z0oKSjt5A%2F%2BaL2ULuqBpXD3ruRIUXgPQEvAixz1D%2Bb8Bv6Q4amSvRUii3een24ug1MpSZSpfIXtf2AVHcYlrotHlI50edL2xbWjXY%2B2T6KG8cFABjU9lJEkQwjLZenu4wMJumPOCzH%2BDvJOPDq%2Fp5O%2BR%2Flv5ne%2BJ3mzKme%2FQ9BXKt4kBQa%2FfmXeM5b2Ncj6691KV78Y0OnsYnKqEN4bzQtFsBiLmOmboZflTrV1pbuy41XE73v2c891FHhJ%2F9DUWiQJbsHk4vULpct1GohXyNLPudixbtgAD%2B%2B%2BhW24uHqnvTkTQQP4pDblAda4ExFtQeFRdQUr9A%2BmiGyw%2FEjsMsrctOVhP2yyqN99Hx%2FCdaSTIyqMoKdiw8CuEUzsADaj34VppVG7Lt9dqtQLx0cIZYOsRSwGU1oJsF90eiiia44EU1Vi7p31nc4eVswmEP8ytbKCLMosHl0FKMUpTp17Mrnt0CnMK77stEGOqUB9%2BBGSFUpnDs2d7vyrDmNQSgbm%2BFHR3QRRN2RqU7X8wQuLAcA5y6xPTMfHc%2FbepWVOGPlm7pNHM7QJ5o%2FsWEG7aRTowHP7YesLCLpZowYtFeDlK4DY5rCwYB7pieIHcuN8UBMSj%2FKVY1luLPQfUxup2sNp4SfQTbmbJg4u2XQwBWpqls15prplsqse8VXjaB3hXQh6sVdwyqrFG%2Fy9GU9OecVX%2Fgu&X-Amz-Signature=55ee5e8185b62aee4902e6f39859681b803a12f6c3f77172f2d19775f34db5ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOVGDJJY%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDvokp9iuvo7Moi35hdjxBmWvuel2ajSl2Sv0%2F6Lmp%2FFwIhAI5ODyHj011KUez1Kx6UQOR9tlxq7IWo6a7tyKoFFQArKv8DCCMQABoMNjM3NDIzMTgzODA1IgzgsH7dgQOxGm3RONkq3AO4W42fuUHMOgZI2LOuO%2Bnu16bISpruLd26kUx7eeCL9evxKj96pJAViA6tXr8N5NHErdriitaxKlladXlqJvp12WqSCTVlg6j9KV6GkdWmHtAtpVj%2FTMsJT%2BojYo8RL0VB1MqZ8Uwp8e4gwWhBtDb20MIewGcwnOQ8tJ6A1SO2PNQbH082m10TQcX4ARokcaE8iFM9AA67fnsoo9lJpytiNxYKN6fhJlLktsqca3bnCNTbMHzAiq3ZRbtI4BmWQAYxKZ%2BW5rcneTAoAHZxi%2BAEHvbTC9fzZN50pU6D8%2FM4gtXu%2B9zzI5jWb35jehdJT7lIbg2FAfab8ZETKRs99J3DJ6xEzQenM13Uthi%2BDBVptcqSQTWaj7NdTkFazbFWcxeTU3D8CDcvBr1XAZpw8M%2FhXUeCrG0zPHONrxW5AHR81H47wkaPzepflZJ7gJUH63MqlN7bPEZm4i%2BOjsj0q%2F6aBjlAdV1UKk%2BNyZBeYLGMhdQF73TLxLqJZjFWKnIoOns1NzSLMnZ6bhzVL09tckZ0UZoPQngBt5kz7ByD7ph4VV1M5Bu1Ld8AWJRK45iniB3%2FH%2BTXLaezdcDMvchgvQIQnHzaL%2F%2FzuoWDbehz0amn068nI3BHdqrg5mUnIzD4%2BrLRBjqkAcQNCjsuE3AO5d26Bim6CW3k%2Bty4q5hdu1cs%2Fx6Y6yzUfr0PwqTh2toWY%2FXbVn05hefPawg2foLFFc3vUsaNcEvtCQMElDFszdfBJJzlrXfqmr7LkH%2BLvFy3K1b%2F%2Fyy%2F06SwvxLR4znxnS%2BD5oJtMa0vNCDwDJXqK5gpT6heD50v6KgUgdDO%2F%2F5NWOoksgBaMEM686BxGqQ3jAtM6eNwzY2qksPT&X-Amz-Signature=adcced28d066966e5d611fc1a0af5fd6a4cb8c9b26c3a92dc5bd596feaa820b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
