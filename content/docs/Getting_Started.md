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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KAEXYLP%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtZme0AN%2BL2h3gdI29KI0yaEPmAUda00pHvdT%2FDZHjiAiBg99R42GudF9jNKpc%2FVkj3B2K4Tok4d04CsZihST5NriqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0eXfy4mVcVXmUn1zKtwD5zyLrWw1PinrWwSqyoGzSRg6QOnYX5RMAoGggZQ6WjdCD52UEFNYvJZi%2BIOgzZ4yHwLZBKqt%2FvZlKoRl9JNcgislr08YLqOauBwNYwK2%2FEJds9phy%2FWEwWclEZ8MCafrp8R4Wlab%2BpSTxCPwZdvsWmVphJv94uRd9%2FHas%2B35x7buizLIm1pdoBP3P5oQkePWNLKklV9sE0JLbt2RjLZ%2B%2FChVjktcy6Y08CoMJja537u0PN4lrLELy348EZwkoFsiu%2BYRV4HhtybxG8weXlOsjpOax5Wdzk%2FqP8NAT%2F4%2BgxLrUw8BHCOf7PVZBBEtbtocfdkZX5bdIyHB9qCMqFWKagyFAGE58KxNtVSyQtJkXYHOUE4h47xUQhur7wrhKggk%2F719v9zsk0FuLT3HfQhZ%2BOUJNb63RE0UfZ%2FreiYjD%2B9Xt%2FXz%2FgEpIPaiYEVe3V8OR5Hdtzy%2BRyvN6MLwMkHRYUZs6cFvfy6sdLQZ4rsTFX9HooQJpKyIfSdhP9E2fH93K24UTPfocMvtshlUIqBCyuGPXqVvpnLq3oEn1d7dnhKsnLNysgF7Ta%2FXAG09YnoJJDlCFBCgLTYNjRPJodcKtnxxHLK7idYJc26x8QgUpaG4PWxoEbU%2BuHeR7qsw0umgwgY6pgHzHlOmo4rVCOzHigHIfRnYDWe9gLdzTeONMRTiE1w5kdwgPENHr7%2FIyigVPVRBpFn3vSFGEoc%2BciLoB2LHQppgdYA%2BiJQCfG%2FN%2FbcmO4etNZ3dHWbUDzwrJ1FrFt3zFOB%2Bj1BVWMKecnraU%2BROv8e8s46bBuyEAQ8mq4CZ65hhX6BeO0iiG2YIPNYPkSY7ToDjdkELgE%2FZtt8O7gYA3ythLHjMkcwC&X-Amz-Signature=df7c1e20cb02e11d92bd517064680646a463f257b402d1a5526923f92a0c5536&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KAEXYLP%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtZme0AN%2BL2h3gdI29KI0yaEPmAUda00pHvdT%2FDZHjiAiBg99R42GudF9jNKpc%2FVkj3B2K4Tok4d04CsZihST5NriqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0eXfy4mVcVXmUn1zKtwD5zyLrWw1PinrWwSqyoGzSRg6QOnYX5RMAoGggZQ6WjdCD52UEFNYvJZi%2BIOgzZ4yHwLZBKqt%2FvZlKoRl9JNcgislr08YLqOauBwNYwK2%2FEJds9phy%2FWEwWclEZ8MCafrp8R4Wlab%2BpSTxCPwZdvsWmVphJv94uRd9%2FHas%2B35x7buizLIm1pdoBP3P5oQkePWNLKklV9sE0JLbt2RjLZ%2B%2FChVjktcy6Y08CoMJja537u0PN4lrLELy348EZwkoFsiu%2BYRV4HhtybxG8weXlOsjpOax5Wdzk%2FqP8NAT%2F4%2BgxLrUw8BHCOf7PVZBBEtbtocfdkZX5bdIyHB9qCMqFWKagyFAGE58KxNtVSyQtJkXYHOUE4h47xUQhur7wrhKggk%2F719v9zsk0FuLT3HfQhZ%2BOUJNb63RE0UfZ%2FreiYjD%2B9Xt%2FXz%2FgEpIPaiYEVe3V8OR5Hdtzy%2BRyvN6MLwMkHRYUZs6cFvfy6sdLQZ4rsTFX9HooQJpKyIfSdhP9E2fH93K24UTPfocMvtshlUIqBCyuGPXqVvpnLq3oEn1d7dnhKsnLNysgF7Ta%2FXAG09YnoJJDlCFBCgLTYNjRPJodcKtnxxHLK7idYJc26x8QgUpaG4PWxoEbU%2BuHeR7qsw0umgwgY6pgHzHlOmo4rVCOzHigHIfRnYDWe9gLdzTeONMRTiE1w5kdwgPENHr7%2FIyigVPVRBpFn3vSFGEoc%2BciLoB2LHQppgdYA%2BiJQCfG%2FN%2FbcmO4etNZ3dHWbUDzwrJ1FrFt3zFOB%2Bj1BVWMKecnraU%2BROv8e8s46bBuyEAQ8mq4CZ65hhX6BeO0iiG2YIPNYPkSY7ToDjdkELgE%2FZtt8O7gYA3ythLHjMkcwC&X-Amz-Signature=aacd18a1d9af117758347f4a1d25bf096fbf8fc9c514a741be863b37d3e9e804&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KAEXYLP%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtZme0AN%2BL2h3gdI29KI0yaEPmAUda00pHvdT%2FDZHjiAiBg99R42GudF9jNKpc%2FVkj3B2K4Tok4d04CsZihST5NriqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0eXfy4mVcVXmUn1zKtwD5zyLrWw1PinrWwSqyoGzSRg6QOnYX5RMAoGggZQ6WjdCD52UEFNYvJZi%2BIOgzZ4yHwLZBKqt%2FvZlKoRl9JNcgislr08YLqOauBwNYwK2%2FEJds9phy%2FWEwWclEZ8MCafrp8R4Wlab%2BpSTxCPwZdvsWmVphJv94uRd9%2FHas%2B35x7buizLIm1pdoBP3P5oQkePWNLKklV9sE0JLbt2RjLZ%2B%2FChVjktcy6Y08CoMJja537u0PN4lrLELy348EZwkoFsiu%2BYRV4HhtybxG8weXlOsjpOax5Wdzk%2FqP8NAT%2F4%2BgxLrUw8BHCOf7PVZBBEtbtocfdkZX5bdIyHB9qCMqFWKagyFAGE58KxNtVSyQtJkXYHOUE4h47xUQhur7wrhKggk%2F719v9zsk0FuLT3HfQhZ%2BOUJNb63RE0UfZ%2FreiYjD%2B9Xt%2FXz%2FgEpIPaiYEVe3V8OR5Hdtzy%2BRyvN6MLwMkHRYUZs6cFvfy6sdLQZ4rsTFX9HooQJpKyIfSdhP9E2fH93K24UTPfocMvtshlUIqBCyuGPXqVvpnLq3oEn1d7dnhKsnLNysgF7Ta%2FXAG09YnoJJDlCFBCgLTYNjRPJodcKtnxxHLK7idYJc26x8QgUpaG4PWxoEbU%2BuHeR7qsw0umgwgY6pgHzHlOmo4rVCOzHigHIfRnYDWe9gLdzTeONMRTiE1w5kdwgPENHr7%2FIyigVPVRBpFn3vSFGEoc%2BciLoB2LHQppgdYA%2BiJQCfG%2FN%2FbcmO4etNZ3dHWbUDzwrJ1FrFt3zFOB%2Bj1BVWMKecnraU%2BROv8e8s46bBuyEAQ8mq4CZ65hhX6BeO0iiG2YIPNYPkSY7ToDjdkELgE%2FZtt8O7gYA3ythLHjMkcwC&X-Amz-Signature=47ef36ff695d9d52d5367a15b440b5df27d481dee21a7fed967ce29d2a401683&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ3DJITE%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYqMyF%2Bx8oEET4IPrnAn6pJn%2BYu%2FQhK0CPmTg61vV%2BpAIhANZgWH0voxZ2vGwBVm2LFYBUtr3rLJ8fBsaLClrAZfpZKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmyJWTRZlK7IrGq%2FMq3AMrVrg4WjkUnwObBlFTQxL6ldofpCqURamQpeMNzdGq8C6DJD2ALHFh2p77c9rIGqIq0jgAlmRLoO72%2Bcz2uW0Hbvu9ooelGWFUteZG1BOElxxovdLpZBvepD4iBEVY243hpbYGfQaoSOkASWAM5Cfq2zVD%2Bf2g%2FCD2cUvfzDZx%2BW3lI%2FYgHwfhTKcO1Ve7SepRy4nXkD2XT9efZkSJvwdBc47rl90BIweFtkLozR9URo%2FAk%2FFHMIrF4mxMzrZ%2BHvS3hQ%2F8eDg4AKJn3nDc1qHzt8aDML2h9l5EyTr1Xjc7gZP3hp8d%2Fo%2BSIj6qpl8gsG%2F%2BRYEMFlVs0h8y6Ioer0aF%2FkVgqrbvobhGSLyLIm9b9I8L1inFnoNgVyXcVuEy46WZ3U%2B0VXRlf5m3BKAurOJKTEY2xxZibfT%2FLCipVJUj7vbIntoxGIgfvYXUeJzttO3IWtz%2Fzg8VbhkzX%2B7M143r4ZXQ4QrGENDOZA1%2FS9NdruB82GyeeyS%2BCzEHD6jmZM9F4%2BR727W%2Bdn3nOEozg0%2B268v5v0hDgGvYMxfP%2Ba6bCzAbIDOhLjgXNozJImzLsEHvUYAbQKpacDQ4zJ9Wc%2Bd3HnJAEKSworLrn26fo0fVdaJaMW28hOFh0a%2B3iTDr16DCBjqkAeJYDxUp7AgZmcGzpNt9DnUwmd8b571taI3tNHZsHNedUdfk6ov0GvWgs1IW8FA87YP%2BRXJlgWSnE4t4pCWBJDkRMZjh%2FpJ4I6dpp6wpmuOQImZrpkdj0jJCCFulz5Bx7Vj9Hk86dG8oh6GOtoJFEPdNbaoL3BKO686x4%2BZITDr1nWXzyM9b7a4BTl0lbT9cobVp6e4qWzGQAjIWbRHKCmyoYOa6&X-Amz-Signature=9409122b9ad7d91ce8a5ba5823c74b7b19ca258bedef1d60aa37af26d56c56f3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFW4XCTA%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCGF%2Bb5UZxTkY9gpTCDc19pOB2%2F5SnEeaPkrIzjcrxbAIhAOxk9R5VpwIY5m%2BUl1mYV50SoOju7ZLOXuN8rl8UAh%2BzKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQeQ%2FkLFwW2KvIpSkq3APhAiAgJ3Jch6XRBF71eYNtxrPDEvWR8mcJRrI%2Fi8IY36fS1zFZMNgUJiOoJCUKDCKR%2Bw12ibmXf5CM1QUxCoOW%2FCkRpLfbcGGHqZzi%2BGEKLUp%2FX%2ByQD3%2FiyXT285OfzBr0l%2FxlziyMuxzhwg2A7LFxUmsldjqTHboCmqpYgB4EV8XLr92SItR3q1pjtHUdcdKIgXlea5ulupGfpkVo1fyVePoHwc7tR4xnZjI2cfzAcO%2FGh4DOdR4anFpb9nnucvo10RSLAqUoSK8WafEgySA6H5JRDavRKs6pvEpsC7OOyo1wwcHTL5uer5tx4OjJ%2BMG%2FRFYLCuwnowDotDT9RT0xLw%2Fy2S39q17F9vD21F16mZfMQTlEZak3aerPuTKu0j5ltw6WhCftpC6RLU8e9J9K%2FbLPqp80afn98bFMeJECXab%2B5JL5e2ipoq9cjoye%2Fr6MPwfwMiP3KTHizZi2AixKgXe3ssOxu%2FIi%2FdU%2Fuueb2M09hMmnrgtt7%2BWgvXyJxpnQ91fgUOAR2itzCc1hXnGJ3xEYHZ0C%2BpAvlZ5DD4STjEjVv%2F2%2Bc%2BOsIPCuTsfFDVZS7YShKo8zS0ySGplTFh%2BPt8Ao5xujEzoHOYjkibL07H3vJ3eSAZTP2vOb%2FDC6vqDCBjqkAQ5I6yV0YQEOKvfPipxxTmVuYouYk1rKXtS0jQmbcwNy5JbgttWpUntO5Fzg7pmHUygZajaOOQaMVfBkTesHHIUbGTrmYB%2Bznhu6%2BawcAOFGSseOHYF44VGmDvzdupyAGi%2FtwTudbfl%2FxqgJSGF16NlGPYm0p%2B0vAcDOUBj52m2MW5vpkya0b4lHsef%2BisV8ymYOxsuAX8OtwVkVSbe7963Z4C0x&X-Amz-Signature=a822f522d17721f00c36961af9d0b524d7584ba3ad5c80a31c14f78ef5c1042c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KAEXYLP%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtZme0AN%2BL2h3gdI29KI0yaEPmAUda00pHvdT%2FDZHjiAiBg99R42GudF9jNKpc%2FVkj3B2K4Tok4d04CsZihST5NriqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0eXfy4mVcVXmUn1zKtwD5zyLrWw1PinrWwSqyoGzSRg6QOnYX5RMAoGggZQ6WjdCD52UEFNYvJZi%2BIOgzZ4yHwLZBKqt%2FvZlKoRl9JNcgislr08YLqOauBwNYwK2%2FEJds9phy%2FWEwWclEZ8MCafrp8R4Wlab%2BpSTxCPwZdvsWmVphJv94uRd9%2FHas%2B35x7buizLIm1pdoBP3P5oQkePWNLKklV9sE0JLbt2RjLZ%2B%2FChVjktcy6Y08CoMJja537u0PN4lrLELy348EZwkoFsiu%2BYRV4HhtybxG8weXlOsjpOax5Wdzk%2FqP8NAT%2F4%2BgxLrUw8BHCOf7PVZBBEtbtocfdkZX5bdIyHB9qCMqFWKagyFAGE58KxNtVSyQtJkXYHOUE4h47xUQhur7wrhKggk%2F719v9zsk0FuLT3HfQhZ%2BOUJNb63RE0UfZ%2FreiYjD%2B9Xt%2FXz%2FgEpIPaiYEVe3V8OR5Hdtzy%2BRyvN6MLwMkHRYUZs6cFvfy6sdLQZ4rsTFX9HooQJpKyIfSdhP9E2fH93K24UTPfocMvtshlUIqBCyuGPXqVvpnLq3oEn1d7dnhKsnLNysgF7Ta%2FXAG09YnoJJDlCFBCgLTYNjRPJodcKtnxxHLK7idYJc26x8QgUpaG4PWxoEbU%2BuHeR7qsw0umgwgY6pgHzHlOmo4rVCOzHigHIfRnYDWe9gLdzTeONMRTiE1w5kdwgPENHr7%2FIyigVPVRBpFn3vSFGEoc%2BciLoB2LHQppgdYA%2BiJQCfG%2FN%2FbcmO4etNZ3dHWbUDzwrJ1FrFt3zFOB%2Bj1BVWMKecnraU%2BROv8e8s46bBuyEAQ8mq4CZ65hhX6BeO0iiG2YIPNYPkSY7ToDjdkELgE%2FZtt8O7gYA3ythLHjMkcwC&X-Amz-Signature=fd67e681723233f4404f383c4138436f65505be08afec02ef8fa1d1bf83759e9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
