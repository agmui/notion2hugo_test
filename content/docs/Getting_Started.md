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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5JJJBQB%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDfClRMFH42elxHBJGP7SshvQPfD2ApusaMHH9%2FiTFK0QIhAK8vEHD8edYHEXSit1nNpa15flgREZt6rH5tFs2Mio7BKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0V3ZB3GedmXyDbz8q3AP8J52eiq17b5SG50z7xaYYDfvYx%2Fbi8An%2B%2FP5S%2FFYvhG%2Fsl1NJVe10%2Fs9%2BqzyMPoJEmeVK%2BhET1bD5w%2F0GHLOMZrmMwNt%2FHVI4Stqr8UVIccwZhhTqXLP2DcawGRm%2FY%2BjkB6KtbFfc7VzEKNJfewH9NMOHV0%2B1KnVTs2ITFOeHFXQgzThTSGhFK%2BjQP39bKYUlGM0Yi%2BVuhEnahaHONYCxbzQgEMA13JytctTQGQFeqCpbAbRFj%2FP%2BxUwHOc3srHNyz1dpjYINatm5KooZTYla12q9dN%2FIXt%2BoVm4CHPfRONI3ZnpKOD3mgoe4eVmtjFVMlrH%2FOuXuCKw1fxhv5WyyznzD%2BykxLU7zq%2F%2BT3usBvaTy6vyNU0ENEl2PXaQHnnWKfrcS%2FnTAOe72xzjpdSnfaWTqlNL1S%2BPH7PshCNpuiL3vdms%2BNkEzc%2FPhFyVwL8de%2F4xTccsaVmXUZXGiSAmzkxteWboFxM8V4D9%2F4H7PsyLDts93uir1DOobjWPWgCmawsh%2B7LOzP4mkMhquGrivkxT5feIG3SAsqimxgnuXdxj%2FveLxtMdHMv3rCvBn7Ue527OD8L3UTGWsGl6nV2R9uyAVAKiE9aFRRqbSA4JCol1OsfjL8oSX8jhuiDCv6sfABjqkAW3RtYAp%2FD86rMltXSbqTOsCJ%2F8OX60wSY4cmqs6C3IcdGf6rd2TSz3PCJRr0JRNfTtYPa3RoPIh6aZTRtdyxQ3p4xm%2FhWJ0IG%2F8lTHtA1fHDocb6pbZYUSnRcbLQ6TwfOXUNq6StnZ1l1AiM5Ey7xETRGp238jMwXVmtPEExtimAYj23JMewy2F4wynEEg8MKWg8uFhPISZD%2BwrXQ2iBeZSMg%2Fr&X-Amz-Signature=2875094c13f75e804c0db6b6af42354378cb87992fb146857f586db4cd410e05&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5JJJBQB%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDfClRMFH42elxHBJGP7SshvQPfD2ApusaMHH9%2FiTFK0QIhAK8vEHD8edYHEXSit1nNpa15flgREZt6rH5tFs2Mio7BKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0V3ZB3GedmXyDbz8q3AP8J52eiq17b5SG50z7xaYYDfvYx%2Fbi8An%2B%2FP5S%2FFYvhG%2Fsl1NJVe10%2Fs9%2BqzyMPoJEmeVK%2BhET1bD5w%2F0GHLOMZrmMwNt%2FHVI4Stqr8UVIccwZhhTqXLP2DcawGRm%2FY%2BjkB6KtbFfc7VzEKNJfewH9NMOHV0%2B1KnVTs2ITFOeHFXQgzThTSGhFK%2BjQP39bKYUlGM0Yi%2BVuhEnahaHONYCxbzQgEMA13JytctTQGQFeqCpbAbRFj%2FP%2BxUwHOc3srHNyz1dpjYINatm5KooZTYla12q9dN%2FIXt%2BoVm4CHPfRONI3ZnpKOD3mgoe4eVmtjFVMlrH%2FOuXuCKw1fxhv5WyyznzD%2BykxLU7zq%2F%2BT3usBvaTy6vyNU0ENEl2PXaQHnnWKfrcS%2FnTAOe72xzjpdSnfaWTqlNL1S%2BPH7PshCNpuiL3vdms%2BNkEzc%2FPhFyVwL8de%2F4xTccsaVmXUZXGiSAmzkxteWboFxM8V4D9%2F4H7PsyLDts93uir1DOobjWPWgCmawsh%2B7LOzP4mkMhquGrivkxT5feIG3SAsqimxgnuXdxj%2FveLxtMdHMv3rCvBn7Ue527OD8L3UTGWsGl6nV2R9uyAVAKiE9aFRRqbSA4JCol1OsfjL8oSX8jhuiDCv6sfABjqkAW3RtYAp%2FD86rMltXSbqTOsCJ%2F8OX60wSY4cmqs6C3IcdGf6rd2TSz3PCJRr0JRNfTtYPa3RoPIh6aZTRtdyxQ3p4xm%2FhWJ0IG%2F8lTHtA1fHDocb6pbZYUSnRcbLQ6TwfOXUNq6StnZ1l1AiM5Ey7xETRGp238jMwXVmtPEExtimAYj23JMewy2F4wynEEg8MKWg8uFhPISZD%2BwrXQ2iBeZSMg%2Fr&X-Amz-Signature=4d59e01257478b1a70d6cdf90c96c9a80759d6cddf35500c2fe8be6fb81db582&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5JJJBQB%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDfClRMFH42elxHBJGP7SshvQPfD2ApusaMHH9%2FiTFK0QIhAK8vEHD8edYHEXSit1nNpa15flgREZt6rH5tFs2Mio7BKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0V3ZB3GedmXyDbz8q3AP8J52eiq17b5SG50z7xaYYDfvYx%2Fbi8An%2B%2FP5S%2FFYvhG%2Fsl1NJVe10%2Fs9%2BqzyMPoJEmeVK%2BhET1bD5w%2F0GHLOMZrmMwNt%2FHVI4Stqr8UVIccwZhhTqXLP2DcawGRm%2FY%2BjkB6KtbFfc7VzEKNJfewH9NMOHV0%2B1KnVTs2ITFOeHFXQgzThTSGhFK%2BjQP39bKYUlGM0Yi%2BVuhEnahaHONYCxbzQgEMA13JytctTQGQFeqCpbAbRFj%2FP%2BxUwHOc3srHNyz1dpjYINatm5KooZTYla12q9dN%2FIXt%2BoVm4CHPfRONI3ZnpKOD3mgoe4eVmtjFVMlrH%2FOuXuCKw1fxhv5WyyznzD%2BykxLU7zq%2F%2BT3usBvaTy6vyNU0ENEl2PXaQHnnWKfrcS%2FnTAOe72xzjpdSnfaWTqlNL1S%2BPH7PshCNpuiL3vdms%2BNkEzc%2FPhFyVwL8de%2F4xTccsaVmXUZXGiSAmzkxteWboFxM8V4D9%2F4H7PsyLDts93uir1DOobjWPWgCmawsh%2B7LOzP4mkMhquGrivkxT5feIG3SAsqimxgnuXdxj%2FveLxtMdHMv3rCvBn7Ue527OD8L3UTGWsGl6nV2R9uyAVAKiE9aFRRqbSA4JCol1OsfjL8oSX8jhuiDCv6sfABjqkAW3RtYAp%2FD86rMltXSbqTOsCJ%2F8OX60wSY4cmqs6C3IcdGf6rd2TSz3PCJRr0JRNfTtYPa3RoPIh6aZTRtdyxQ3p4xm%2FhWJ0IG%2F8lTHtA1fHDocb6pbZYUSnRcbLQ6TwfOXUNq6StnZ1l1AiM5Ey7xETRGp238jMwXVmtPEExtimAYj23JMewy2F4wynEEg8MKWg8uFhPISZD%2BwrXQ2iBeZSMg%2Fr&X-Amz-Signature=5ec807a02330fb58f44563cd9c3af9ee9d75cfe4395598e764897d0bfbc5a9c8&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKBYHZWE%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCEuDieKtgaQ33xZhT%2F65CkWHRJh3XrpAI55PXW3coR9AIgKRns8deVR3GW3JBVxhISpqbi%2FfapqOHVF%2FIh8ODMs3wqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrlEEdTmx%2Byw1Ye1SrcAz5GxnDA9seOGxmdrRVyMqYI2vxVMbDPqtLDUUF7mCj6ns5UpX6zhbCITZh3F53lokmR%2B9AJrbbxuDwPs4QOZbzoYk895Pxlwi2c6nJgWLhXMBDIr9B%2BIfVrPjTE7vVnlvPf4gxAjZURX1ev1cA1UzFu8b4fYpy0dfw6fF%2BgFbPbLoY4sazMHRVcw9Ilm%2FCVLQDmWGElt4gjxd6%2BR4QPFzwM1XHn4dWGKVLCshK62zWYNKw3IkyO81ckPqQR0OXte2BQ5ZPTEfRnJa2L6eL9dfnRCa0gYf%2FfnfPhVml7RR0ozyW3V3lccAN%2F0ssHi%2BxzGruQCfNIfNSjxiJT9j4Xl2iLzvbp8XpEOmeGRINlFV7WkfJbeQxbbOT7GEQflOV%2F6SXa52UCY4P0lvl8Tkb%2BJiuuazX5SB1BSKsI6jH21HJABYFZCqXr1ElYMpjOreMPzbKEYgWTm0RgS9T9QYwCjmpeHCsmpX89%2BGVFTdXTfGW0Sli1YZZ9JEuZs4uqgHX93Th0M0XsMSULjm7dUr4xwTf1JjTewKWbaOPuUDVHhhAxwO3cnsGZPSOYmfCt%2Bb9rUwgLp1fiGcjqRDHo0fKJmf3btbJxigMXvO%2FsBrCwk1RVyj8t9vInLnFimiohMM%2Fqx8AGOqUBvm5mOGa%2FkFF6bNQcw%2FtFTl36OUafvN0Hl26lz1462GTGcIl%2BdwjT9RX6jlYfxXzKXHYe6k1IQV3aAYodIOA5nTzFpht0sMexXnNKvRrQ8ufRqSN%2F%2FHE0S0vJu%2F%2B4I7Lul7nOdG3aK2QSRzeKO5nBGFeoS30gdhaSm7xfWgvmJvYuRF%2BW%2F66IzeGKMiIc7qgA6WDSNzGIql1cnPzTFrib84rMntI4&X-Amz-Signature=51794824a5ce0d98008eef73f64a035b8ff921b452ab9dd9795a819db745e965&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUJTHWD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIFdq2boT86mdnyxI3k6n9756h1A7WMXp%2BShuvCKxL9LIAiEAxCfhchZlFll9e8nM%2BN2JvdFYwYRlQ7uibLWgksFpJ5YqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBs4mCFn41%2B2UKgPGCrcAwMb4aG2hx1REL69HJfS3IPWH%2F0IZhGz3TgXwvLfCsp9%2Bnf6Uypq0YfdhCaIJ%2FZCvGXW1f4m0IF4%2FjcZcUAmom%2Fhwu2WQh82mXmibA3LQ%2Bufyog3M%2B70XXF6Rby4q%2B5qQX1TELc8c3bcUThIU9pvFoGH%2FMkXPGXWzCSyiXjh34aZq7i5d6fp%2BG%2ByIl%2F7bHUCsxTMB3PStLzg9pBkZyvYQK7LGnzd9HtiKB1SNWrubwGRESfIwhcCj3RbQ%2FQLT6KMBJNBioRb3jq9VEjhiFd8X5zDawwifbIbIGYIMHz06j6OJpemQnK4OOz35T1n9jLDO%2BXrUZa9AfwqLtwQm4ggUbrdT76Ib8g0uMHlxIKf7OfUrBgQGo%2BIU2x84PKwuz8bYKc7WBKfOE0bItRxPPoZMhHwk7etzR6XO2nhBYEdUDyDaJnFuadQF%2FbqgzzrQ7nh7qTtUKM2pjsxqz9t2ibMKdkKLWaaRDkvWdxuM6ngodm8xiM%2BxEX1JORGd1pNC1AkTuiTh4dAfDrCj42plM3kTrRDjRDO2bRV8TmmYzG58KqaQqJSXVghmtOoa4ntpNdFXjAe2RftcYhButAOv2%2FgH10%2FitSBifi9jso0mvxTVHZhmfQe7RUMcAAeo2IeMNn6x8AGOqUBDqgi5M7AyTw44Ed4y5rGFjH90fGhaskoGvBk86UwVLBTNDgzP1CezSHbVcPFoxkSqI107PN%2FYyg8Ii6vMOHQomAbx1X8%2F6y2Vou8hVtYdTmEqYs4WXmscTfImM8f3EfiE5hGCCfCCeMJswmB0oRvBuPlYMly5B7GMc7IDbE0sE%2BsJYOReyyZAGYaEAug5QulU%2BZ5kpeWcx%2BTQxb20txZCRd4qPe7&X-Amz-Signature=f0963395a5cfac84d2f928d4803e0f62ccd4214ba077b5a9267393210a494998&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5JJJBQB%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDfClRMFH42elxHBJGP7SshvQPfD2ApusaMHH9%2FiTFK0QIhAK8vEHD8edYHEXSit1nNpa15flgREZt6rH5tFs2Mio7BKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0V3ZB3GedmXyDbz8q3AP8J52eiq17b5SG50z7xaYYDfvYx%2Fbi8An%2B%2FP5S%2FFYvhG%2Fsl1NJVe10%2Fs9%2BqzyMPoJEmeVK%2BhET1bD5w%2F0GHLOMZrmMwNt%2FHVI4Stqr8UVIccwZhhTqXLP2DcawGRm%2FY%2BjkB6KtbFfc7VzEKNJfewH9NMOHV0%2B1KnVTs2ITFOeHFXQgzThTSGhFK%2BjQP39bKYUlGM0Yi%2BVuhEnahaHONYCxbzQgEMA13JytctTQGQFeqCpbAbRFj%2FP%2BxUwHOc3srHNyz1dpjYINatm5KooZTYla12q9dN%2FIXt%2BoVm4CHPfRONI3ZnpKOD3mgoe4eVmtjFVMlrH%2FOuXuCKw1fxhv5WyyznzD%2BykxLU7zq%2F%2BT3usBvaTy6vyNU0ENEl2PXaQHnnWKfrcS%2FnTAOe72xzjpdSnfaWTqlNL1S%2BPH7PshCNpuiL3vdms%2BNkEzc%2FPhFyVwL8de%2F4xTccsaVmXUZXGiSAmzkxteWboFxM8V4D9%2F4H7PsyLDts93uir1DOobjWPWgCmawsh%2B7LOzP4mkMhquGrivkxT5feIG3SAsqimxgnuXdxj%2FveLxtMdHMv3rCvBn7Ue527OD8L3UTGWsGl6nV2R9uyAVAKiE9aFRRqbSA4JCol1OsfjL8oSX8jhuiDCv6sfABjqkAW3RtYAp%2FD86rMltXSbqTOsCJ%2F8OX60wSY4cmqs6C3IcdGf6rd2TSz3PCJRr0JRNfTtYPa3RoPIh6aZTRtdyxQ3p4xm%2FhWJ0IG%2F8lTHtA1fHDocb6pbZYUSnRcbLQ6TwfOXUNq6StnZ1l1AiM5Ey7xETRGp238jMwXVmtPEExtimAYj23JMewy2F4wynEEg8MKWg8uFhPISZD%2BwrXQ2iBeZSMg%2Fr&X-Amz-Signature=dd09fb159ef6978136bf3fe0d088d10a44f3d98b95b4064caadb2062c2610435&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
