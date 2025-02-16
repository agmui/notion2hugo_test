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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4FAJQJ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDMndhkEkZYxzSJ4Dp%2BuCM%2Bm807kzoJz63CxrTwEH510QIgXz3Cg8bBoLCDfj3%2FvsQNQIE0yCBSP37imTGJHIiHpLEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGKcmqc4VMvlVuEGAircA4FHKX3OI8%2FfD5I0Nj%2Bg1D4uOGrQNsUKmn15wk2nuSAZzV9OV2asv%2BWQxXpmoDw%2B0Bb5H0g9MGsUviNruZofowWhSSbnqkK%2B4wBHMOYXw4VKOcPnfSj6a5L12MoLwTElfOQCzmWEKWsZ8rtqKQnI1TxrkRs2Wm8k3ZT%2FDCrYYIjo1gQ8ZFi0FR2S9JTRdz7HHSghvDdzr340XQ8upBXCIMh7EmW1jd6qpRj84Ct1PNXz4bJQqq6KsUsRLVc0f9mcvjF0JlkTxbowodbNwM%2BVP6i6uCYUzqzBM8I%2B7w1u9G9JavNtHnWsrAHuRh2ZXwgN7iZ%2FX%2ByzXcFhDifjgqjRhaZy2HD8OIPtu4HEZUpcArr7lvZIiEZm%2FouoWL17dMsW6E1VAyOEyUyeewG7aXXkqRAE5LOA2pdJMGSUdo90xBzGnE4xvmBA9mR%2Bb16FxMsTwCBFBUnRoQ7d%2BT8bLGIF9GrJmiChbFjrNxPNJHGXEcibDUgshf8XLRPvfoPM66QXAC%2Bh%2BW%2FA%2Bc380fhkEAVJ4IpG3JXQxTAkhkacEKkOAsx8wr6FX%2FI74MM1UKAIFupArFq%2FNvzFyO6sIswJDpa1YDFAdk4PTxPw4tfkyTYWITAZ5r8pbFYlk8QRdUdRMLKdx70GOqUBX3DoArDRfv2CF4xH8T4kNHNUwOoHRV%2FwhBKUC6E7GeRB4dOyQ%2BelIDCRJglZlUiwN9wUOStNkJ7LTO9o%2BIEUsVfSB1zEuwK0kjiFgag57hH9wKVrz4C%2FIDKDvrLbVKmwqKB2HPOiyGGuhHZ%2Btr7V%2B5cLSeCxDRpBEr%2FIJe5BXzDKHg%2FLXBIb99cSYDkgqXlm7ijCThZUaS3S7Yui1TQoyxzoiWWD&X-Amz-Signature=0ba42518faecbf40fd2b27763e7705602c34dab0ab663bb3fd8f1731fb3cd79f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4FAJQJ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDMndhkEkZYxzSJ4Dp%2BuCM%2Bm807kzoJz63CxrTwEH510QIgXz3Cg8bBoLCDfj3%2FvsQNQIE0yCBSP37imTGJHIiHpLEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGKcmqc4VMvlVuEGAircA4FHKX3OI8%2FfD5I0Nj%2Bg1D4uOGrQNsUKmn15wk2nuSAZzV9OV2asv%2BWQxXpmoDw%2B0Bb5H0g9MGsUviNruZofowWhSSbnqkK%2B4wBHMOYXw4VKOcPnfSj6a5L12MoLwTElfOQCzmWEKWsZ8rtqKQnI1TxrkRs2Wm8k3ZT%2FDCrYYIjo1gQ8ZFi0FR2S9JTRdz7HHSghvDdzr340XQ8upBXCIMh7EmW1jd6qpRj84Ct1PNXz4bJQqq6KsUsRLVc0f9mcvjF0JlkTxbowodbNwM%2BVP6i6uCYUzqzBM8I%2B7w1u9G9JavNtHnWsrAHuRh2ZXwgN7iZ%2FX%2ByzXcFhDifjgqjRhaZy2HD8OIPtu4HEZUpcArr7lvZIiEZm%2FouoWL17dMsW6E1VAyOEyUyeewG7aXXkqRAE5LOA2pdJMGSUdo90xBzGnE4xvmBA9mR%2Bb16FxMsTwCBFBUnRoQ7d%2BT8bLGIF9GrJmiChbFjrNxPNJHGXEcibDUgshf8XLRPvfoPM66QXAC%2Bh%2BW%2FA%2Bc380fhkEAVJ4IpG3JXQxTAkhkacEKkOAsx8wr6FX%2FI74MM1UKAIFupArFq%2FNvzFyO6sIswJDpa1YDFAdk4PTxPw4tfkyTYWITAZ5r8pbFYlk8QRdUdRMLKdx70GOqUBX3DoArDRfv2CF4xH8T4kNHNUwOoHRV%2FwhBKUC6E7GeRB4dOyQ%2BelIDCRJglZlUiwN9wUOStNkJ7LTO9o%2BIEUsVfSB1zEuwK0kjiFgag57hH9wKVrz4C%2FIDKDvrLbVKmwqKB2HPOiyGGuhHZ%2Btr7V%2B5cLSeCxDRpBEr%2FIJe5BXzDKHg%2FLXBIb99cSYDkgqXlm7ijCThZUaS3S7Yui1TQoyxzoiWWD&X-Amz-Signature=0fb9b77fcb62deb4d637e8a8adc2313cf1701ebe6ac16aca014bb1aa32e94b9d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRU5BF2S%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCDdTj1Cb2OoAKzNboVdpN7todTM2NKxlvRVHAijDhpRAIgAoQn%2FNdYa5y4vx2jJJM3%2F0fCr9ssjBegQTuMhhSKiiwq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDCBnY9gbeQS793X72ircA8XX2pI25xb2%2FVPUAUeIJm2nDnNhDjm%2Flc1WAop6eKf%2Bj1rg8tEkJ1FxftOYQC4c7n%2F%2BVDGymvUKe50biTC6JbJ3q0ibKSThx655U9FC0KzaFv1Gjwtw6Uj1tpRk6ZK4q2%2BRPaoxp%2BFCdV5T6FwIxc3UntP0FZtrqHT5xac4cx0vCXu3a9nklMqkcf1YRmyId8XDjFRq7nRZuIuI0WL40S%2F4VhyhqBfaJjVmiORiOXHwaZQzXCPi25GvcarkVDerwB91jr6f9QviUIQtyU04R4c2rQYYdYQYSvDEaKD3p2AC1bjdQYviroIRpeF%2FjqcUvG%2FjzpfxpJXfSFqGcvD2VvW7e7bO6OJSHdypxRcudDo%2FnNIvRixSPeHpP5pI%2FHxdlfKZfh8BgGLipRl7YPYzwWazcw%2BLzQ8j7ZNfhIqBJQKNbf2bLUIKLx9RcORQfHVExcTJ6gI6RJy12S9TMQTwR2r85yo9Lmuxz0YyZFFNiMCF3T%2BlToR4Yvioa8NmgZwMB4EHGOssJg1SFZRbtMEx7%2FMwozLZcrM7hFs3zekymVjlOHrSMNdWwZY3Tgh2BLjKRdFi4SE3LDKYadtwXIekbNxho88CfJvvdbYxh5T84W4Fa6fLMNar4gj3ibSIMKzHx70GOqUB2VDwAdRl0efUGbnoh2nmYxLTupbuYtxBDEBB6i9%2Bg6Q1l%2FQw%2BLaLM%2Bx0WNdiyYmTlJ40W8E9KnDlU9AHL0yPphDnRfFgBfCMzkVH2BYIOIfBfYrbt0HvKCRHfrELlgGIxgZwPavO2uAIl22n8BOfvxcy2Nwt1xZPIvsC3Na4nyf55B1hTdNdPwTIIUC8ovTZqMp5PhoD9eBdSVbdM39f9V2fMo0b&X-Amz-Signature=90844e8ddb84dce4b89e13e2dd00233e902e60ec8fd8af6b7c646bdc978876fd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UGYDCHO%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICCZoMkTYtGQFlNcpl8LXK4%2B9%2F3szE0b0JFUnkRzE5EFAiEAmsXZ84zFDlpJ9h8K0tMgLAvN44Zh9xesbKKcZUfdigUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDL6DBTlSWMZ2H3b9aSrcA5F24ibJAgoEL1Yi5NiZm%2BIOXx%2BfmufGvrMaToCS8D8aD8Xa%2B6qrLbgkjc3KA7LC4znkjwqSVnDgfviC3hSbwtWt8I8bWXNKZNLt5uvI%2BK3w43UJcxdJ1BBMhC3FgtfDGoOjuOTvnc3plskxBPjsPaE68JMg%2F9BuYDf58XhFQYrDa8T1f3aQBkKcT%2FehOL%2FHmBO7ZW2t5QXHGiC6q%2F51xsNCi6ydwtZX%2FiEVI4TlGve0GeGC6yiwsSmRNRrTBynOnH%2BkffrV7BeuwqJZ4mRn8JfOpR8j9YQ3EzaCImKcuPU0SvAKoQbTK9l0W8eB8cB6YIjh2swvMmPCfnaWOFYHNEKnW3MVcQPBGall2vQO4c0S6EW7%2B4D517RRhCzCLwNjAhTtOodRwWtIubmxMejmhw0KwltwJ1IK953e14bDAq0Nd4ls8YKbJ0mdSeQSKEGQyKxr6DvQtdpykTz6uiq79uZzK4iuepmC3tQVOn6asJXxx%2FGhQGri6JpfnhVFqfzaQ25vo%2BMCKn1NwvntvGVbWg3bELoscLOBBOWkZhqmXighoeL69IDD3kIttIL3ft8RxDwTk3z175vVE8XNF5t1uL%2FgGgQ2R5VxEU%2FU5BjCrUPRJLAT36HQwfEGjFUSMJOex70GOqUB1vFBeESbeeFcQDQkGX%2FzAM8ACibvXRd8bNaXGU%2Ftmk%2B9O8tUhxTSJ7CIaT6s3SDG0%2F4DvyVYwOf3Io9idBKm3qI0EKfJxx0yAo3bj%2FjWPEwB5z3IDI1CbTsC3egQiOOvNaIgYsPYu1flhTb2aC83T56Ty9kOL40Xi3Q6Bxh%2BiXIeP83xrXsJGx7mLTO9jJIQI9OYPxaEUuvA%2B5R8yXRFrDtXq6y9&X-Amz-Signature=974a17572dcfd56ac271a76930b98cfcccd1bc6efaba1507a0e96c3356702bea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4FAJQJ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDMndhkEkZYxzSJ4Dp%2BuCM%2Bm807kzoJz63CxrTwEH510QIgXz3Cg8bBoLCDfj3%2FvsQNQIE0yCBSP37imTGJHIiHpLEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGKcmqc4VMvlVuEGAircA4FHKX3OI8%2FfD5I0Nj%2Bg1D4uOGrQNsUKmn15wk2nuSAZzV9OV2asv%2BWQxXpmoDw%2B0Bb5H0g9MGsUviNruZofowWhSSbnqkK%2B4wBHMOYXw4VKOcPnfSj6a5L12MoLwTElfOQCzmWEKWsZ8rtqKQnI1TxrkRs2Wm8k3ZT%2FDCrYYIjo1gQ8ZFi0FR2S9JTRdz7HHSghvDdzr340XQ8upBXCIMh7EmW1jd6qpRj84Ct1PNXz4bJQqq6KsUsRLVc0f9mcvjF0JlkTxbowodbNwM%2BVP6i6uCYUzqzBM8I%2B7w1u9G9JavNtHnWsrAHuRh2ZXwgN7iZ%2FX%2ByzXcFhDifjgqjRhaZy2HD8OIPtu4HEZUpcArr7lvZIiEZm%2FouoWL17dMsW6E1VAyOEyUyeewG7aXXkqRAE5LOA2pdJMGSUdo90xBzGnE4xvmBA9mR%2Bb16FxMsTwCBFBUnRoQ7d%2BT8bLGIF9GrJmiChbFjrNxPNJHGXEcibDUgshf8XLRPvfoPM66QXAC%2Bh%2BW%2FA%2Bc380fhkEAVJ4IpG3JXQxTAkhkacEKkOAsx8wr6FX%2FI74MM1UKAIFupArFq%2FNvzFyO6sIswJDpa1YDFAdk4PTxPw4tfkyTYWITAZ5r8pbFYlk8QRdUdRMLKdx70GOqUBX3DoArDRfv2CF4xH8T4kNHNUwOoHRV%2FwhBKUC6E7GeRB4dOyQ%2BelIDCRJglZlUiwN9wUOStNkJ7LTO9o%2BIEUsVfSB1zEuwK0kjiFgag57hH9wKVrz4C%2FIDKDvrLbVKmwqKB2HPOiyGGuhHZ%2Btr7V%2B5cLSeCxDRpBEr%2FIJe5BXzDKHg%2FLXBIb99cSYDkgqXlm7ijCThZUaS3S7Yui1TQoyxzoiWWD&X-Amz-Signature=774a1bec87314b2869ddcb8025d5e08e10c566628d50cc07a742d3aa6720328c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
