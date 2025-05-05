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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDYR2TBO%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtZZ1BOCldJz%2BK24zqlYGD9jIMKFFhfGxfEWA7x74WHwIgdPWkdXUhMCY3go4F7O1eETpbrfW16U3dGKlRLZnQA50q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDH8Fx0A597qyAJs%2BfSrcA90oLqYTkugqJOC5h%2FZU7tkB1H8wcYOtV3GwgArFVO7IJz5d50ChDy7PcLh91CZuu%2Br%2Bq0UdLAV%2BYKswXkClg%2FcPWzAtASs72q9ZKZo1JURDPa4KIiYqZ2okROpPkJww%2B8%2FSOg0f1XHptWYoGRbUnxznNjv%2FfS63jhtiHN6V%2FGNJVLsukqdHS3WDlyFllYyEvM4%2BL4W6EBB69MQunTNBjXIh4if52ysYZ%2BDT9OmKRZGdl8k8%2FXdLsDWF6LdZ4RIoKTwK%2BFSVYatmggpr0uPl%2FmoB6aF5DjNDvakQn%2FyZXCFUTDW5TMrpw7ixC%2FMjkqcE%2F9WvoC9bDJyIvgR4iIpc05Rekbw%2B5sJnrNuLGie93ou1RZTlUftT3Mpr5Y9eF67RD%2B3D69AUE2r6JcP3mBS%2BTwCN1KyAZf%2BITNG5FbZR2VTi8TbgQXMgaKnAwu3zL0W3dIXN2xJ8vX8VxZyLUw4mIVIDziTr2qSqhRUDdhZnCWZOpa%2FjxhVvrfV2EgcsSZNihbo2UMxJKK%2BTEh0gVNhMIxadQduQRtK77N60f%2FF0%2BCzEZv%2FaW3ccfKi389fTRJlslC8xgj2ylSy7swvg%2B3n53NXFmYwOx7Oe6gMl20y1ML7xS7HUVUoT65Xi4ZYeMPaf4sAGOqUBqu5tGX7qGHj5SZnBHe142hUeph%2F7sr3YdgRxi%2Bt2EwMR4CUdM3wBLQrJRsJXcG6AiZp0nA3B4yfO8KqspmAjHhF84wxsiMzUVa26pitzg1%2FdzpZS0rDfqRzVpe8G5BiwuL015jRbhCxmA%2F706WLjhKJKXzQFiRPa1WrPell9hiznhoJvimYiwYY1LhqwNW42TrXVxPDDw%2BdMvBRE5%2FmF%2B09CSiqM&X-Amz-Signature=803d158b366319e1ff4cde3c1ae078d923941fbf8ea3a03d6fd3c56a7c21191f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDYR2TBO%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtZZ1BOCldJz%2BK24zqlYGD9jIMKFFhfGxfEWA7x74WHwIgdPWkdXUhMCY3go4F7O1eETpbrfW16U3dGKlRLZnQA50q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDH8Fx0A597qyAJs%2BfSrcA90oLqYTkugqJOC5h%2FZU7tkB1H8wcYOtV3GwgArFVO7IJz5d50ChDy7PcLh91CZuu%2Br%2Bq0UdLAV%2BYKswXkClg%2FcPWzAtASs72q9ZKZo1JURDPa4KIiYqZ2okROpPkJww%2B8%2FSOg0f1XHptWYoGRbUnxznNjv%2FfS63jhtiHN6V%2FGNJVLsukqdHS3WDlyFllYyEvM4%2BL4W6EBB69MQunTNBjXIh4if52ysYZ%2BDT9OmKRZGdl8k8%2FXdLsDWF6LdZ4RIoKTwK%2BFSVYatmggpr0uPl%2FmoB6aF5DjNDvakQn%2FyZXCFUTDW5TMrpw7ixC%2FMjkqcE%2F9WvoC9bDJyIvgR4iIpc05Rekbw%2B5sJnrNuLGie93ou1RZTlUftT3Mpr5Y9eF67RD%2B3D69AUE2r6JcP3mBS%2BTwCN1KyAZf%2BITNG5FbZR2VTi8TbgQXMgaKnAwu3zL0W3dIXN2xJ8vX8VxZyLUw4mIVIDziTr2qSqhRUDdhZnCWZOpa%2FjxhVvrfV2EgcsSZNihbo2UMxJKK%2BTEh0gVNhMIxadQduQRtK77N60f%2FF0%2BCzEZv%2FaW3ccfKi389fTRJlslC8xgj2ylSy7swvg%2B3n53NXFmYwOx7Oe6gMl20y1ML7xS7HUVUoT65Xi4ZYeMPaf4sAGOqUBqu5tGX7qGHj5SZnBHe142hUeph%2F7sr3YdgRxi%2Bt2EwMR4CUdM3wBLQrJRsJXcG6AiZp0nA3B4yfO8KqspmAjHhF84wxsiMzUVa26pitzg1%2FdzpZS0rDfqRzVpe8G5BiwuL015jRbhCxmA%2F706WLjhKJKXzQFiRPa1WrPell9hiznhoJvimYiwYY1LhqwNW42TrXVxPDDw%2BdMvBRE5%2FmF%2B09CSiqM&X-Amz-Signature=55eda824b9f030484fc9b5097c18b76d1c466d290dbeb832e963f5c11e5dfb9a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDYR2TBO%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtZZ1BOCldJz%2BK24zqlYGD9jIMKFFhfGxfEWA7x74WHwIgdPWkdXUhMCY3go4F7O1eETpbrfW16U3dGKlRLZnQA50q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDH8Fx0A597qyAJs%2BfSrcA90oLqYTkugqJOC5h%2FZU7tkB1H8wcYOtV3GwgArFVO7IJz5d50ChDy7PcLh91CZuu%2Br%2Bq0UdLAV%2BYKswXkClg%2FcPWzAtASs72q9ZKZo1JURDPa4KIiYqZ2okROpPkJww%2B8%2FSOg0f1XHptWYoGRbUnxznNjv%2FfS63jhtiHN6V%2FGNJVLsukqdHS3WDlyFllYyEvM4%2BL4W6EBB69MQunTNBjXIh4if52ysYZ%2BDT9OmKRZGdl8k8%2FXdLsDWF6LdZ4RIoKTwK%2BFSVYatmggpr0uPl%2FmoB6aF5DjNDvakQn%2FyZXCFUTDW5TMrpw7ixC%2FMjkqcE%2F9WvoC9bDJyIvgR4iIpc05Rekbw%2B5sJnrNuLGie93ou1RZTlUftT3Mpr5Y9eF67RD%2B3D69AUE2r6JcP3mBS%2BTwCN1KyAZf%2BITNG5FbZR2VTi8TbgQXMgaKnAwu3zL0W3dIXN2xJ8vX8VxZyLUw4mIVIDziTr2qSqhRUDdhZnCWZOpa%2FjxhVvrfV2EgcsSZNihbo2UMxJKK%2BTEh0gVNhMIxadQduQRtK77N60f%2FF0%2BCzEZv%2FaW3ccfKi389fTRJlslC8xgj2ylSy7swvg%2B3n53NXFmYwOx7Oe6gMl20y1ML7xS7HUVUoT65Xi4ZYeMPaf4sAGOqUBqu5tGX7qGHj5SZnBHe142hUeph%2F7sr3YdgRxi%2Bt2EwMR4CUdM3wBLQrJRsJXcG6AiZp0nA3B4yfO8KqspmAjHhF84wxsiMzUVa26pitzg1%2FdzpZS0rDfqRzVpe8G5BiwuL015jRbhCxmA%2F706WLjhKJKXzQFiRPa1WrPell9hiznhoJvimYiwYY1LhqwNW42TrXVxPDDw%2BdMvBRE5%2FmF%2B09CSiqM&X-Amz-Signature=e075e802c590b8440894ce4f2bf350798671fc97783ae87c365fbf45d7f138b7&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKMGRGFH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIlkxLirE6d0mJ%2Fkej5X%2FCZZz4LM1SAUe%2FC07bh1enPAIgYZkb4iwyTZXMJE0gvH03pcfLnPTVtWGO45PlgyPncoYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDBSqC6ftAK8MemOtYircAxJycmK%2BpIT4yqrfCo6Kf6e1IHHVNWynAaeYjqgKLW58fbx%2FlbbXXGVInVGZ9Gt4B52%2BTAvbFTLlwEMbp%2F%2Fc%2Fe4RjHWTpE6WhKmlnF5IdqjtAfF10j%2BgYK1ZFrb3mqGrStcAwsZhejQTUnFyhLapch8i6QB295vumyKSCjKVZQOaOO0kZKPB1KbmPQLElhzBhi3OyjCzWwwQOgI4FkYnGeJ9G0aI%2BK0gfFN2gqhJ0MAAx5h1um7OrrEM0icieAMwbou%2BaaWMJL4b%2F5VWV75qmQG7sE3Gv3MTqprmiUEHAXbbHpNPj7Se6DsNa3hqXNtXZyg%2BXP8c8t93%2FoB9buiVKnCzMm2I2dM6QRUiFlf%2FU8f42UFNNKhUFdWIRH9beRmelIGZb2biUnw08kGCIkOsMgrv3%2FS%2B4vEdffHF0Iejd4x%2FrYvl%2FIOgzRVHSjFoLEPxbgd2Jk6GDT1V%2BJySYbQDQcV1hP2SJy%2BxkblL%2BYuKdRGMrKWen89HNXqG03I5x2DJeiSbAKQTyf%2BnZs1X6lh4OfDy8QLSzPk5x3pp%2FxxSdldcI0KvQPkBdG0VfucwhBFSVEi9SXMridBoEsFzsjGW7nV2dzdPVRSwIZldv%2BL%2BwB4e8Y1LuZr3ok3%2B2HfNMPGV4sAGOqUBGzTWTv3S6Lq0LzTW3FobaKPKSkR99YTqxKu5Xr16I9nEw8g7uGC%2FT7kBrjV0sq2IkNvtLRBPIshK4twFm4GvxvOV5Ak5Z3yHX1H%2FAaRf54Hk2hHVKQWPAFqOD6bya5g%2Bt8eWD3VFOlEqhPHuYvWED9TcOIfeoNGnsTaCB2%2BLgHJ1ovGXV%2BlN4yeKTM73fWHFs8ltPxBdPW5dogmoZyyvSrdix2HX&X-Amz-Signature=c93e9fff9a7b964925c2170602987b622da008178a306f26de8711cb3e581dd4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6XTPFPU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICto6u2cxeEuloToYcaBgGdSYxoIFelSgT9zEYAOFC1nAiEAoY8eWZKd5PAcFMrQSl%2FWIDxOgqxlHJzVm943fhJpeCwq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFTMILf2BSJKKOmJhyrcA2GFbMyHiYIVJH62GYRtxKPtkYPeE5A64wEMrJcyaDGw30Xoo0VUUqpSXgGn0jPtnCvbGf3mYaF%2FvoQhSaF%2FlKzkf9Ue6wqHLodUqgwqgm1vhS8oGdYuUIxP9kCuc%2Fr3o4oJeIsWnUsWFSo1OOH7X%2FySssgiQScA8TrmW3E7Y8mR0CFYRY1qKEJDVrESKfR7015MEtCxG9Rbhs%2B8WC8svD%2FesifJVLjzDAXBJM2JVfGmrC8G4a7%2FLUsQWhu1kkskDqT69Wb3AI2wxOY%2F3VM51g7USKWu6jxFnC064pUMbjV4lnMo8DvkDVDgxyDOjpn5zuW%2BmjiwKeHZDO7Q6FWBM4aqcYhurVUDus94Nbal3lK8OIucB%2F%2FRz3pzbCpqigpoZvIUPOc3BlElvLCbX5JlDk2E6H6boLlsP%2FP%2B9cIS7DtviWk%2BP91b9pMqpb4Q4FtImn7aUEgLkAZdoEQZBGY3dng1aPHYEziFgb%2BD3425nUUS8xano%2FDnMlgkhDRx24kL%2BkYrNH6WwXJ1KHWbLSuOducdmTvER3yE3f05u1UO7COs8RFXPY1C4MqyHYsA90GPbhLV3rN9CqOsJ7wWWGUb5xqSLgbIeuj%2FP8nq1Rmc9vUPM6smvVtfADVsFveXMNGr4sAGOqUBINKFlOUCmFEQ825z%2FkDdgFQz42NVcHaxrXS8rq3K15lCuqvqvvGSYGEx0nnL1UJF01MDkXWUCDBFQySvdrPHdBnGdC0cwCddAc7NO6yZpLDxsyFsu1kH0BKKB1Y9i3OI1yNsjNdlQyUhO2UqhCzQjz1erU18ZOnoQcdpZx9atX8T%2BSArIOVOZC9QdDbGZr1S2olCP0IyC41HpW5uhz3HHPLk71P2&X-Amz-Signature=307e7b43bba89fe165240631a116357bbc1f603a6dc4377a9d96e25f8fb7f3d6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDYR2TBO%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtZZ1BOCldJz%2BK24zqlYGD9jIMKFFhfGxfEWA7x74WHwIgdPWkdXUhMCY3go4F7O1eETpbrfW16U3dGKlRLZnQA50q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDH8Fx0A597qyAJs%2BfSrcA90oLqYTkugqJOC5h%2FZU7tkB1H8wcYOtV3GwgArFVO7IJz5d50ChDy7PcLh91CZuu%2Br%2Bq0UdLAV%2BYKswXkClg%2FcPWzAtASs72q9ZKZo1JURDPa4KIiYqZ2okROpPkJww%2B8%2FSOg0f1XHptWYoGRbUnxznNjv%2FfS63jhtiHN6V%2FGNJVLsukqdHS3WDlyFllYyEvM4%2BL4W6EBB69MQunTNBjXIh4if52ysYZ%2BDT9OmKRZGdl8k8%2FXdLsDWF6LdZ4RIoKTwK%2BFSVYatmggpr0uPl%2FmoB6aF5DjNDvakQn%2FyZXCFUTDW5TMrpw7ixC%2FMjkqcE%2F9WvoC9bDJyIvgR4iIpc05Rekbw%2B5sJnrNuLGie93ou1RZTlUftT3Mpr5Y9eF67RD%2B3D69AUE2r6JcP3mBS%2BTwCN1KyAZf%2BITNG5FbZR2VTi8TbgQXMgaKnAwu3zL0W3dIXN2xJ8vX8VxZyLUw4mIVIDziTr2qSqhRUDdhZnCWZOpa%2FjxhVvrfV2EgcsSZNihbo2UMxJKK%2BTEh0gVNhMIxadQduQRtK77N60f%2FF0%2BCzEZv%2FaW3ccfKi389fTRJlslC8xgj2ylSy7swvg%2B3n53NXFmYwOx7Oe6gMl20y1ML7xS7HUVUoT65Xi4ZYeMPaf4sAGOqUBqu5tGX7qGHj5SZnBHe142hUeph%2F7sr3YdgRxi%2Bt2EwMR4CUdM3wBLQrJRsJXcG6AiZp0nA3B4yfO8KqspmAjHhF84wxsiMzUVa26pitzg1%2FdzpZS0rDfqRzVpe8G5BiwuL015jRbhCxmA%2F706WLjhKJKXzQFiRPa1WrPell9hiznhoJvimYiwYY1LhqwNW42TrXVxPDDw%2BdMvBRE5%2FmF%2B09CSiqM&X-Amz-Signature=a65f02240ee9c4b3703ef365e10e44587ae2a75f2dc7c6d8f666e45401049e43&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
