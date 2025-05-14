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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPVCLWH4%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFC12i0I%2B0Y2hzVvpwcVtJMUfeefImW06mxFllJo18I8AiAuTbopMnVxfUgwyiEickHwI5u3Y%2BPjdfAx%2B%2FC2Y4AAAir%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMiIq5dZPTJiayTmmNKtwDn%2FTKwYHaoJs9paWfLs8nHDRQz3XU1ozTZ%2FJC4Fj8lN6VrZTVDMrAWWYjMzKrESPxCteuUMwknCY4S1u4VhMAceSEsIQFbLfob9WJwaYIsJQdtxDaRMZCdtf753MdPVbcYFfOonbUdzrSp5X2cmlN%2BjrDgCM4V7qUMHRkx0Jkvh6S1Zvq3g0TRdD%2BSAiiOl0RdXUgemT3iXNGaNGmbWJi7V75tbqhwZusCnJkTY7HX15JLJ8Ve8kkyNEgmjBdI7l8TIoXbkOFcXcU5%2FMzcVc%2FnBsbYGLjMK4I%2F4XKHg4mDn535uTdgCAvZndOiEwCdiASuJyoxrtDQ5a4usekkPzIsjavB90raReRIUSIobwfpd7qitG8lRUk90nbWWebPiIqrKf8EykSMKG%2BSusmTvUpiUy7upgNRZVScH%2BBNR%2BGqtqk44lJl4RmxO8LJF3ixQ%2BYZ8fHhiojZJkBs7oMkRkwzhZWlPUoyPC6xfCdrmMwpN4RgdFRsPFy2nsoLzebASoW2UHJnrkBNm7zF4sXHpj9w9SR4nwM3GusfEbRN1TZFysh1x9uCf1tXHS1HReYCImfbftMnwMlxqnX5ykrpGgCj2%2Bjwy%2BRiK8YnGIeqe8c92W%2FIlqCDJSYnx9NcSow9IeTwQY6pgFZPpcWB69InRHI7IOFTLmd2WG3X9UlkYHOhACKO9%2BGq3wg2t9Qsj6VtqEvFms3HRzPt58gv518RLFitrqve8OaViUfSNiDNaDXOfIc4%2FFOB8ZRjIkwBMHvX9xC55ZlyWPeBI8RYXdCLsV0EfFzYwYPkiSP0t2S%2FbUQrzQm6M2%2Bdiuxj5yMVVHO5%2Fc7B0XQsRnjej%2F42Mv1fQex1bZFWIlbavagsj8m&X-Amz-Signature=55e3ef5e943ef8f7b02b0dbad9c8b86cab4cdfc25dd2c3f4c259f601ce30d8d0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPVCLWH4%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFC12i0I%2B0Y2hzVvpwcVtJMUfeefImW06mxFllJo18I8AiAuTbopMnVxfUgwyiEickHwI5u3Y%2BPjdfAx%2B%2FC2Y4AAAir%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMiIq5dZPTJiayTmmNKtwDn%2FTKwYHaoJs9paWfLs8nHDRQz3XU1ozTZ%2FJC4Fj8lN6VrZTVDMrAWWYjMzKrESPxCteuUMwknCY4S1u4VhMAceSEsIQFbLfob9WJwaYIsJQdtxDaRMZCdtf753MdPVbcYFfOonbUdzrSp5X2cmlN%2BjrDgCM4V7qUMHRkx0Jkvh6S1Zvq3g0TRdD%2BSAiiOl0RdXUgemT3iXNGaNGmbWJi7V75tbqhwZusCnJkTY7HX15JLJ8Ve8kkyNEgmjBdI7l8TIoXbkOFcXcU5%2FMzcVc%2FnBsbYGLjMK4I%2F4XKHg4mDn535uTdgCAvZndOiEwCdiASuJyoxrtDQ5a4usekkPzIsjavB90raReRIUSIobwfpd7qitG8lRUk90nbWWebPiIqrKf8EykSMKG%2BSusmTvUpiUy7upgNRZVScH%2BBNR%2BGqtqk44lJl4RmxO8LJF3ixQ%2BYZ8fHhiojZJkBs7oMkRkwzhZWlPUoyPC6xfCdrmMwpN4RgdFRsPFy2nsoLzebASoW2UHJnrkBNm7zF4sXHpj9w9SR4nwM3GusfEbRN1TZFysh1x9uCf1tXHS1HReYCImfbftMnwMlxqnX5ykrpGgCj2%2Bjwy%2BRiK8YnGIeqe8c92W%2FIlqCDJSYnx9NcSow9IeTwQY6pgFZPpcWB69InRHI7IOFTLmd2WG3X9UlkYHOhACKO9%2BGq3wg2t9Qsj6VtqEvFms3HRzPt58gv518RLFitrqve8OaViUfSNiDNaDXOfIc4%2FFOB8ZRjIkwBMHvX9xC55ZlyWPeBI8RYXdCLsV0EfFzYwYPkiSP0t2S%2FbUQrzQm6M2%2Bdiuxj5yMVVHO5%2Fc7B0XQsRnjej%2F42Mv1fQex1bZFWIlbavagsj8m&X-Amz-Signature=056dbcaad220dd08cadac599f8e08107d0ad5c0f4af9ec927f49709b7fa31fc3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPVCLWH4%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFC12i0I%2B0Y2hzVvpwcVtJMUfeefImW06mxFllJo18I8AiAuTbopMnVxfUgwyiEickHwI5u3Y%2BPjdfAx%2B%2FC2Y4AAAir%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMiIq5dZPTJiayTmmNKtwDn%2FTKwYHaoJs9paWfLs8nHDRQz3XU1ozTZ%2FJC4Fj8lN6VrZTVDMrAWWYjMzKrESPxCteuUMwknCY4S1u4VhMAceSEsIQFbLfob9WJwaYIsJQdtxDaRMZCdtf753MdPVbcYFfOonbUdzrSp5X2cmlN%2BjrDgCM4V7qUMHRkx0Jkvh6S1Zvq3g0TRdD%2BSAiiOl0RdXUgemT3iXNGaNGmbWJi7V75tbqhwZusCnJkTY7HX15JLJ8Ve8kkyNEgmjBdI7l8TIoXbkOFcXcU5%2FMzcVc%2FnBsbYGLjMK4I%2F4XKHg4mDn535uTdgCAvZndOiEwCdiASuJyoxrtDQ5a4usekkPzIsjavB90raReRIUSIobwfpd7qitG8lRUk90nbWWebPiIqrKf8EykSMKG%2BSusmTvUpiUy7upgNRZVScH%2BBNR%2BGqtqk44lJl4RmxO8LJF3ixQ%2BYZ8fHhiojZJkBs7oMkRkwzhZWlPUoyPC6xfCdrmMwpN4RgdFRsPFy2nsoLzebASoW2UHJnrkBNm7zF4sXHpj9w9SR4nwM3GusfEbRN1TZFysh1x9uCf1tXHS1HReYCImfbftMnwMlxqnX5ykrpGgCj2%2Bjwy%2BRiK8YnGIeqe8c92W%2FIlqCDJSYnx9NcSow9IeTwQY6pgFZPpcWB69InRHI7IOFTLmd2WG3X9UlkYHOhACKO9%2BGq3wg2t9Qsj6VtqEvFms3HRzPt58gv518RLFitrqve8OaViUfSNiDNaDXOfIc4%2FFOB8ZRjIkwBMHvX9xC55ZlyWPeBI8RYXdCLsV0EfFzYwYPkiSP0t2S%2FbUQrzQm6M2%2Bdiuxj5yMVVHO5%2Fc7B0XQsRnjej%2F42Mv1fQex1bZFWIlbavagsj8m&X-Amz-Signature=5a1be5a1f914ac6ef5051a8d6106d0971223de2066c4b22ff6af6d5a6c8189ee&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6Y5IIIP%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIE0qSUq0mXG%2FPkv5Bw%2FuLk2acaNmh%2F2WaFSZfIlKPsbzAiEA6GAp0MqjMYyXGxG1FcV%2FilEiGpG5X3Bl4Q6qtvXBLyoq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDNdi9DeIlSc5wLiXxCrcA8RIKggy%2Fy7h83%2BWxb5dnzEopAXsq2S3QHCIv6HFIdSVmTQeLsqRbikzmw2WXT2sonzyYLUI5FT3AcV%2FMLYhtEMIqyvc8HKpkNRwdzUXcV%2F%2BsvyRZZd2HrDLGUKbeCUHkskO1t0m%2BJpHnClL63AecKFR%2BZIUdy0mqs2sLU%2BNW3bhKJp10zDLgkjJYi85ziXW3lkPF5HDgs%2BmwWVhcx2ncPX3p5f%2BP4NLLPxKFtholM5jQ015P%2FC%2FJewla0X2UCrXKJl1D1GHgW%2BH8bBNVy%2BCWJFq4QKJvnMEtVlW4DoEeVxOlLW31ptUbhAwyD3jqt7eKj18QD4%2FL0XIKL1y6l5myyXGTXYCo7g5B7g3pqQcb11fWHTqdGKFh03ygsqiibfhuA80Kp92sqm34rnvP5Me6%2BAarLaaPLgSDPvwpBBH6GUiD0IEb4D%2BqsCD1biLDNPCdDSmeR%2FK5378eGvpq3hxxgSPZwGyA62%2FAhBTT80ILwbA9uCLy7aN0LR7nYeZcWcHfqgh%2F15t50t31fbYyPI6LjCFqNM2NUssdwwPZ%2BQ%2BzYFft0%2BSbGB7yVNOcVU1btmmUAIfdeOzNrnmIBZjIIwyHx%2FjN8i5hFVjRI1W9Xi0lydQlICxMgY%2F6kdKe0dwMP%2BHk8EGOqUBt%2BxuOBtC5hy3FMAzEMkUfyKKJ4t4OjVjZ22dthaihhY64Gg2hWtjBsqS2FIB239Xqv%2FM56nsz1bkzy%2BfIcrCpFArFTZiWjwC357B4Xpa%2FUgjhlyS4tLBMrNacTMWiiDVnw4jMiZEDvzhf94wJ0sB1RzOXWzkSaLGKYS9Hg8jPcH0wkcg4Irldai8umJHI3DXg0nZEYdN2Pp4ZoHIIs9Cnil2ZoRM&X-Amz-Signature=3b670c07f4397b22713fe28d9c98cb6caeee6dd87a96352e6ee5fa058f535304&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZOW6I6%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCfDB4Qysckfa8iys%2B7JdvQtIPAGphTdJtNMk1qDn3c3gIgbG5pCb%2BRyybueJylPxpSLP2%2B3kY4%2BcQ1HfSXSXtsVAwq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDEeElAfQUvPFLkmCdCrcA6I7uA750d7uRBoQ%2Byrn6Ks7pVZRMlXmruGHzNsXYB7rvOEV09TXZzS7rdwmg%2F8%2FoFz0HergJjJvIumCYqyM10R9hs6ZrPr1pbNiWcC3SjB8ubVmL3xMZ4Lrv4fxN0bITcVz9A2NAcG1oXJ0Y4y9MqJqJ3K8NadLbOLNTf7jfxm6PW6OfChsOTHyAEAi%2B%2FJD5gRmpDCdjbG1j%2B0VeD7ROEADGmHHfGggko%2FSQUVgGDhfEOEMr7VRFEiChDrKfDznSzlcV5ztHwuMNIcK6P90QVFX54r9Kg68u1WSmgDuz9HTIWE0jDdp2qh1QwfJFBgN7etUHBpI36Shsii%2F4JRUsBmIHWM46dZ2C5WjGMcHSc6RYESoRU4ak%2FXSryIUy16dVRxgxQVsee1szVsK658JwYeRvWJEMk7TuX3Jo0y5iuN7QaIhK%2FjH4fjDXwHCi0unDW0oRpc2pxX0lRi8%2FnVp6jrAv1jEBSgJHN7eZLM6ZjqixD%2FJJRIIqegrOLiEqgwd%2BY0pDg%2BTsufGXVCZSLJtlDVjzBmZqvKK%2BApxkb9cLX358x%2FfHi4pIfn8Xlvnr3CqJQlGiT8OdcQyWQ6TvWR0n7MYoek2EEuv6lh23cd62eIs2qrtY8h226SfLEr5MPiHk8EGOqUBwb2eRscr%2BZCb9ZOl1nnLO%2FLYwx7R%2F1GNtuRaBvYoQk%2BI%2BkK%2B5Nl6aWZUvJTh3dJ7Lz6ZVqpQn%2BdzH54hhi3LBPKk7tRwVTikKReS3vz2bTTrOsgwqhn1HBgGoh4j%2Bcc8SS9gZxTXWn1EVuAfjVf7uxqUa7cEQa0JiEPFCPd3L1U97ZkafKqtwxbiybVdaETiGMNSKVeu257V3AxxSoEmOS3Wev%2B9&X-Amz-Signature=307d45370cd052d2942763ede8ba618455d0b139d0263ff51ab99dd75cbbd963&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPVCLWH4%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFC12i0I%2B0Y2hzVvpwcVtJMUfeefImW06mxFllJo18I8AiAuTbopMnVxfUgwyiEickHwI5u3Y%2BPjdfAx%2B%2FC2Y4AAAir%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMiIq5dZPTJiayTmmNKtwDn%2FTKwYHaoJs9paWfLs8nHDRQz3XU1ozTZ%2FJC4Fj8lN6VrZTVDMrAWWYjMzKrESPxCteuUMwknCY4S1u4VhMAceSEsIQFbLfob9WJwaYIsJQdtxDaRMZCdtf753MdPVbcYFfOonbUdzrSp5X2cmlN%2BjrDgCM4V7qUMHRkx0Jkvh6S1Zvq3g0TRdD%2BSAiiOl0RdXUgemT3iXNGaNGmbWJi7V75tbqhwZusCnJkTY7HX15JLJ8Ve8kkyNEgmjBdI7l8TIoXbkOFcXcU5%2FMzcVc%2FnBsbYGLjMK4I%2F4XKHg4mDn535uTdgCAvZndOiEwCdiASuJyoxrtDQ5a4usekkPzIsjavB90raReRIUSIobwfpd7qitG8lRUk90nbWWebPiIqrKf8EykSMKG%2BSusmTvUpiUy7upgNRZVScH%2BBNR%2BGqtqk44lJl4RmxO8LJF3ixQ%2BYZ8fHhiojZJkBs7oMkRkwzhZWlPUoyPC6xfCdrmMwpN4RgdFRsPFy2nsoLzebASoW2UHJnrkBNm7zF4sXHpj9w9SR4nwM3GusfEbRN1TZFysh1x9uCf1tXHS1HReYCImfbftMnwMlxqnX5ykrpGgCj2%2Bjwy%2BRiK8YnGIeqe8c92W%2FIlqCDJSYnx9NcSow9IeTwQY6pgFZPpcWB69InRHI7IOFTLmd2WG3X9UlkYHOhACKO9%2BGq3wg2t9Qsj6VtqEvFms3HRzPt58gv518RLFitrqve8OaViUfSNiDNaDXOfIc4%2FFOB8ZRjIkwBMHvX9xC55ZlyWPeBI8RYXdCLsV0EfFzYwYPkiSP0t2S%2FbUQrzQm6M2%2Bdiuxj5yMVVHO5%2Fc7B0XQsRnjej%2F42Mv1fQex1bZFWIlbavagsj8m&X-Amz-Signature=1ef4f7b2c805546d641cd9086697ad7093f75b99b23f5287f0cae5c8245bb486&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
