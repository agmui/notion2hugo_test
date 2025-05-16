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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLXGXSCK%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADXJ1lv6AQ%2Bgw7SQP79OelBY6K%2F8lYO3PIod4NsJx%2B6AiEAqBNXz6VL1Lp%2FDT30Ew0%2Fwz325DKo5WyP8nllq3%2BXLZ8q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIDeLc5XcfZ4K2nCpCrcAxCNMhxW%2BaukkVjBORlfbAHFHCxgqU%2FkClGgDlxRM%2F4LXlX4C5OGoKmIBuRos1dYWwdsT4HOGn%2BP%2FY9TELjdIpupnxkSRS4IW0%2BtzMZ3sP1cfjiLEZwrB43ckC6igXyYLxppxsUxvZuvizxKow2hzZNX9zxzqtVPN1q7fKZPgkiYjxdtTHZtOF77%2BJtf9k3xuE12jTc6C%2FQKzwUz1y2ksLTrOJ7kHQc%2Bs6TTO8hzbfInSlxgfuTYnWVHdctxsQR8ArBOdSSbaudxAXwX6XmSkicZSqyAIsCQi6twKW5ai%2FikP54o7KRcSzPUa%2BMXSvJXnJCYgIHNlRqf%2Buz3Fw0ER4xFT1wm1MDnRC3sWgwwIN%2FxbbVS5JfZRWR0S5%2BAfHtMmg8N6Ad7E%2FLHIPawsDJg9Hbt2ok5yHAPN5eiDvO4DT0TfyuBzRcDdxzsBlENdB7DNaNKdst2FD6fpJxbxXZwHuS78HDU0TokQX9LG7XZMSTrj1o4dVAcpIyRV1EYubIl5sLQQHndIxM4mWifuxWD0YFqebVQ3MNUuuyIhD%2FgJZdKC094rS0ihF8NjE7xuIS1L8psndd6cv5Vvl1eyArMvWVuGcgX0TCvttCGaPhOOLEGyfdbqf0cKJfPWURCMLjEnsEGOqUBcFJiQ4c3WViHxJQ%2BsIzd8sWTxE%2Fi5cjccVwNONSt20NyNf0%2BCa3fy6TgrkbOOfyl9hFAPMxTXNXVfZvmrlZRv8eHDVn2myDfRrggOZ41QEVwx%2B2WqK7xcb8csFuFnuZkU6m0VyZvj4mnmj28PFocxzJBbN9wxKHyjPuu6ZF2bcrT2nJAaqCGYBRGhP65GKmX5fRow6HXXxWxS9uDIruBE%2B7VAVqm&X-Amz-Signature=3d7ee2321ed40629bc84b24c4440697fbffe08b395cb3214d36a775d5631f8a5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLXGXSCK%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADXJ1lv6AQ%2Bgw7SQP79OelBY6K%2F8lYO3PIod4NsJx%2B6AiEAqBNXz6VL1Lp%2FDT30Ew0%2Fwz325DKo5WyP8nllq3%2BXLZ8q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIDeLc5XcfZ4K2nCpCrcAxCNMhxW%2BaukkVjBORlfbAHFHCxgqU%2FkClGgDlxRM%2F4LXlX4C5OGoKmIBuRos1dYWwdsT4HOGn%2BP%2FY9TELjdIpupnxkSRS4IW0%2BtzMZ3sP1cfjiLEZwrB43ckC6igXyYLxppxsUxvZuvizxKow2hzZNX9zxzqtVPN1q7fKZPgkiYjxdtTHZtOF77%2BJtf9k3xuE12jTc6C%2FQKzwUz1y2ksLTrOJ7kHQc%2Bs6TTO8hzbfInSlxgfuTYnWVHdctxsQR8ArBOdSSbaudxAXwX6XmSkicZSqyAIsCQi6twKW5ai%2FikP54o7KRcSzPUa%2BMXSvJXnJCYgIHNlRqf%2Buz3Fw0ER4xFT1wm1MDnRC3sWgwwIN%2FxbbVS5JfZRWR0S5%2BAfHtMmg8N6Ad7E%2FLHIPawsDJg9Hbt2ok5yHAPN5eiDvO4DT0TfyuBzRcDdxzsBlENdB7DNaNKdst2FD6fpJxbxXZwHuS78HDU0TokQX9LG7XZMSTrj1o4dVAcpIyRV1EYubIl5sLQQHndIxM4mWifuxWD0YFqebVQ3MNUuuyIhD%2FgJZdKC094rS0ihF8NjE7xuIS1L8psndd6cv5Vvl1eyArMvWVuGcgX0TCvttCGaPhOOLEGyfdbqf0cKJfPWURCMLjEnsEGOqUBcFJiQ4c3WViHxJQ%2BsIzd8sWTxE%2Fi5cjccVwNONSt20NyNf0%2BCa3fy6TgrkbOOfyl9hFAPMxTXNXVfZvmrlZRv8eHDVn2myDfRrggOZ41QEVwx%2B2WqK7xcb8csFuFnuZkU6m0VyZvj4mnmj28PFocxzJBbN9wxKHyjPuu6ZF2bcrT2nJAaqCGYBRGhP65GKmX5fRow6HXXxWxS9uDIruBE%2B7VAVqm&X-Amz-Signature=fcafc94bc7335695dbb73a7341a5a6377ed4e505cca83dc97a4643afa3750b3c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLXGXSCK%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADXJ1lv6AQ%2Bgw7SQP79OelBY6K%2F8lYO3PIod4NsJx%2B6AiEAqBNXz6VL1Lp%2FDT30Ew0%2Fwz325DKo5WyP8nllq3%2BXLZ8q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIDeLc5XcfZ4K2nCpCrcAxCNMhxW%2BaukkVjBORlfbAHFHCxgqU%2FkClGgDlxRM%2F4LXlX4C5OGoKmIBuRos1dYWwdsT4HOGn%2BP%2FY9TELjdIpupnxkSRS4IW0%2BtzMZ3sP1cfjiLEZwrB43ckC6igXyYLxppxsUxvZuvizxKow2hzZNX9zxzqtVPN1q7fKZPgkiYjxdtTHZtOF77%2BJtf9k3xuE12jTc6C%2FQKzwUz1y2ksLTrOJ7kHQc%2Bs6TTO8hzbfInSlxgfuTYnWVHdctxsQR8ArBOdSSbaudxAXwX6XmSkicZSqyAIsCQi6twKW5ai%2FikP54o7KRcSzPUa%2BMXSvJXnJCYgIHNlRqf%2Buz3Fw0ER4xFT1wm1MDnRC3sWgwwIN%2FxbbVS5JfZRWR0S5%2BAfHtMmg8N6Ad7E%2FLHIPawsDJg9Hbt2ok5yHAPN5eiDvO4DT0TfyuBzRcDdxzsBlENdB7DNaNKdst2FD6fpJxbxXZwHuS78HDU0TokQX9LG7XZMSTrj1o4dVAcpIyRV1EYubIl5sLQQHndIxM4mWifuxWD0YFqebVQ3MNUuuyIhD%2FgJZdKC094rS0ihF8NjE7xuIS1L8psndd6cv5Vvl1eyArMvWVuGcgX0TCvttCGaPhOOLEGyfdbqf0cKJfPWURCMLjEnsEGOqUBcFJiQ4c3WViHxJQ%2BsIzd8sWTxE%2Fi5cjccVwNONSt20NyNf0%2BCa3fy6TgrkbOOfyl9hFAPMxTXNXVfZvmrlZRv8eHDVn2myDfRrggOZ41QEVwx%2B2WqK7xcb8csFuFnuZkU6m0VyZvj4mnmj28PFocxzJBbN9wxKHyjPuu6ZF2bcrT2nJAaqCGYBRGhP65GKmX5fRow6HXXxWxS9uDIruBE%2B7VAVqm&X-Amz-Signature=96fbfc45379079bcb82d97ba42f423bd2204acfb30364a331b2d99247e4f21ae&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKCAUCSO%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2BzJKQm27NerjoGpaIBGpmoENXJOH9IIdTP0sc%2FHuJAIgHhqOyKg9WUYIIj%2FiytE%2FwyTLPI57EDuvMxeuxBK392Aq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDHz%2FL8uUThNDmNbzlyrcA%2FfcA%2FU2fENOg158VEzCmtJoLJdDbot0wQvpXzknz87%2BncI74bm2GBu3DV6wBnCuTlUbZXerEAKvS4zmXGPhDYRLIMPy8xaKc4Lb96kG7P4Kd2YoffoLpNSnO5139qB6%2FLYKgJsbyhAjxQ1rMVSfMCJlSug0toawn%2FkbtnwlBvkpzeKHL2Z2bTSIKI7MrQL6tlCNFXEINAxzo8MfRmYU7xLmK4UJsRrML2qexpKY9yVD3R%2FQhuE25pV5NdgZ63ITIWte9%2BtOziPyV92ElEuOvow6D3koJDbE8xbal4JGqdJ9KDj55d%2B0WqtgoD3gV0I2prko8h7uMLbt%2Fm2yH7v8zDBPGYrPqZ%2F2URzcFreNi8%2B2JhfVT0KHQyOOFtUrPnLvshWnMrfdpY8TMXLJrpysa60iInrrFduIoBQiLhSk%2FNRaz5e041EIKhW2xUpw%2Frd5FMukAsZm9ulK719DLK5Q%2B0h2fbDeMD5WLbt3%2FLeXxDsoeuZIcUaCnNm7Vlee3dnmG4pnJ898Z1F68zb4YSqoxAhFXzXaK9tHGhfXaf0oSmAWuwkjd%2BD3N8UeKg4ZnaNsXUMyNO5aTP8XrzE%2BYD2waq9NtuD4V%2FgaWnuybZdhDcHFCXexV9sgjGic27UWMOXWnsEGOqUBP3qyByf4LKNMxdh5btcLseNYx7zxx%2Fv8W%2FGUahIQl1Id9mU0IcJT04CCiAzncs59Of00GELXeunfB7xj5vYi8waHeA0ddgJpIR0pdeHDbOk%2Bytfmr2wzLCNG6XaCbEV2m2vL5IpQ9FUB5YOA1E3aE3xCAy29wget0JvpAzI7BZ40F0KTeqeXTLSXYbe8wiaITuNryH9YueZYiyzH86QKHSbR49Kd&X-Amz-Signature=af773df7bfaa8c6d6da0918aae19cb2f00162b61792d87eb9b04708ad845ab20&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCWDQJDC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T220755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNUz9W9seSOhSD1Bd4PWIlr2unz%2BAN%2F3mYz4i3BDm9lAiAiplPJ62WXpN7%2FIvAHrA0XlB3AkTiHY5rANuMFbgY1RCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMfd0ktLvOGfpft5e4KtwDW9JVB0qfyUvv%2BR94GqFv64OJkHdDiyln%2Bwf%2FcPv4UAxRSSPxbHRBzj1tTo27cQwMcjBVpUPuMPLLMTF9OOxm9aXltKroXxa9mc1LN6YitODJ9Yeg0rBk13u8JxQuemlj3smC8FERUBEBmf3FyMW2lG8mU6oOt%2FcPAsg6d%2B8djJnSz8x%2BqfivkJQWyDdCif84j7XNx%2B%2BIJYRdh2%2Fn2F6%2FgXvhU%2BZajMTNnybtN8Lo6XRkAXVKMFELt5yxadOxs0M9DvyAKkuN68k9NfvLJwk5yZVRFbMAKePklLsh8bVYssxOynCb418Cs4goXVQGNRJV%2FyhppbNiSrLiySBs9YWSYsys0K2WGSewcn06pjY8xVADCQ62NkPmlBFLh5SKc8y6Ut6yC4H8dW2dyr5Yj6%2Fbx2vEFWSi%2F1ixYf%2FVrP%2FnMMZJv2Xh6CoQ0PTOSOY5suWz3UQJwRjQvdcKKRHyvBlZp7FvrOd76o%2BG67LArMcrwFxwVinul1Mqqp%2B%2BlpZp%2Fwq25X75nolIT5e334yAcWwR4nULIzlhGVgMRnG6qNkuEcMmg7zw5BbrfuAEI7RMpL5LjwD4EaqwGSDkU99hVPKuGoKeC5GPMmpqh6OeYhtGwect7pD8G9xrhTRm63Ew5sSewQY6pgHv7OiZBAz0jrMLq6Kbg86bSKva70YTfN1XelFPg%2BpGr0dYgsjb7nzmgzcIywJzPXn1Ni9wkDamoAy60%2BhzqoSrQ5E5xGCTHNOZQZ3mPGS2TdLPhrRpg%2FjpdhQ9Ox6jkEZMvecN9vlcC46d3HWzRaaffGls%2BvnoNjBEgA%2F56JQCxlha5RO6mrHLxmoFNqkFU6jh1h4a5lobzzU%2Bl9bb3tCsT68FNz5q&X-Amz-Signature=c6a9e56e5004bee0afa0520cbd034c242fe3de03cc2e96cc125967d5ac3736dd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLXGXSCK%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADXJ1lv6AQ%2Bgw7SQP79OelBY6K%2F8lYO3PIod4NsJx%2B6AiEAqBNXz6VL1Lp%2FDT30Ew0%2Fwz325DKo5WyP8nllq3%2BXLZ8q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIDeLc5XcfZ4K2nCpCrcAxCNMhxW%2BaukkVjBORlfbAHFHCxgqU%2FkClGgDlxRM%2F4LXlX4C5OGoKmIBuRos1dYWwdsT4HOGn%2BP%2FY9TELjdIpupnxkSRS4IW0%2BtzMZ3sP1cfjiLEZwrB43ckC6igXyYLxppxsUxvZuvizxKow2hzZNX9zxzqtVPN1q7fKZPgkiYjxdtTHZtOF77%2BJtf9k3xuE12jTc6C%2FQKzwUz1y2ksLTrOJ7kHQc%2Bs6TTO8hzbfInSlxgfuTYnWVHdctxsQR8ArBOdSSbaudxAXwX6XmSkicZSqyAIsCQi6twKW5ai%2FikP54o7KRcSzPUa%2BMXSvJXnJCYgIHNlRqf%2Buz3Fw0ER4xFT1wm1MDnRC3sWgwwIN%2FxbbVS5JfZRWR0S5%2BAfHtMmg8N6Ad7E%2FLHIPawsDJg9Hbt2ok5yHAPN5eiDvO4DT0TfyuBzRcDdxzsBlENdB7DNaNKdst2FD6fpJxbxXZwHuS78HDU0TokQX9LG7XZMSTrj1o4dVAcpIyRV1EYubIl5sLQQHndIxM4mWifuxWD0YFqebVQ3MNUuuyIhD%2FgJZdKC094rS0ihF8NjE7xuIS1L8psndd6cv5Vvl1eyArMvWVuGcgX0TCvttCGaPhOOLEGyfdbqf0cKJfPWURCMLjEnsEGOqUBcFJiQ4c3WViHxJQ%2BsIzd8sWTxE%2Fi5cjccVwNONSt20NyNf0%2BCa3fy6TgrkbOOfyl9hFAPMxTXNXVfZvmrlZRv8eHDVn2myDfRrggOZ41QEVwx%2B2WqK7xcb8csFuFnuZkU6m0VyZvj4mnmj28PFocxzJBbN9wxKHyjPuu6ZF2bcrT2nJAaqCGYBRGhP65GKmX5fRow6HXXxWxS9uDIruBE%2B7VAVqm&X-Amz-Signature=dbd460a2f0e3d6b840b20bd756d5d7b0b77da1db7e83642b13830893b48052fa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
