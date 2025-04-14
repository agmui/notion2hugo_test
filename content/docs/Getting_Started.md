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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G3KHGUE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICoqHUStCIVQub501F0vuHLMT1IvsEXBz%2BP3YoUWb%2FzIAiBW14mJhNuWBmDMceEs1kxOdTTWB8%2Ffff579TJ7qsNMrSr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMVx%2BLOiWfETYZHpxYKtwDVLAa2EeRqPv6vDhR24UH1O%2Fpm55Uh38Nz%2F%2BkaHvsKlXl37jzQS%2Bc2ajdFcFV9r2rlyaMe%2BCMiIYG%2BMwP%2FuafRt4CdhANUqOFwPluQVaiDKBobwzhXbAKSVBwiIrLiSXqr4FkVLg2Uu0lllEq3oCl%2FurlO8rjMpWvjNdxg89lI%2FsRuz8mw6SAvHwsBEakgErh2gbml0MQVuQblRzWN%2F3VGV6TcxBRcwBsYDR%2B79iW3Qa8r7sIB8VlHFLnrDAklsFZBBQb4DUfvhri9lHK%2BxoQNjO0NVz6wEXF%2B4JzZ%2FigEW6lkrUJmoAHic7jlcQOO4j1TJl6IVsC1btweCDR8pwESw6wWRhmxsK66Os%2FM5E6Cl%2FHd0rsUlcNgJDAmbqC2YcQFzlPGeHDEjcczCUTwjTPA3INBAJspEm3byxsRPINaN9Pyc45R%2Bp9LtIZfraxZc6lqBHGmNa%2B5H3sxCvRF0%2BeVps5wDYaKUAjrBhABPbK%2B1J29G5U7%2Boisz%2Bt6OgwFhoVZwTFE1u5iCAP4oFN7JV%2BWYLprUpiHoYVIfZu0bkgLCGnW2HN4fZQicdHXfgRe493kA3ltlZQv70Doi%2FS8aVk9GnO%2B6Vy0GvNBpP4b4GS4sF7FIszBHd7fAgaixQwh8DzvwY6pgEAvEo8pPXmEd7xR5sMpLCbqWq5ZqkJubWMeDo0Kfa%2BsGXPtSOy1I2fgrYG%2FEFfm9iekMgsQ2WnMg0S5E6Owi1PSJ%2FSF3whEd4FyVs2%2BlPCVHtp8%2Bcj3VxlBlenE7nMl5gf5dWDrW82jUJryhduHRlQvCOFObnYECU7kfmsYHs37RQJ2RFEZJyJtmbGycjCZ%2BChb987pHjJlOhTJj5PfCbdVjjKVLyw&X-Amz-Signature=ee4af734f1ab1ead03a67ef38020c305d8250480f0ccf1cad4770c05f4dffb6e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G3KHGUE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICoqHUStCIVQub501F0vuHLMT1IvsEXBz%2BP3YoUWb%2FzIAiBW14mJhNuWBmDMceEs1kxOdTTWB8%2Ffff579TJ7qsNMrSr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMVx%2BLOiWfETYZHpxYKtwDVLAa2EeRqPv6vDhR24UH1O%2Fpm55Uh38Nz%2F%2BkaHvsKlXl37jzQS%2Bc2ajdFcFV9r2rlyaMe%2BCMiIYG%2BMwP%2FuafRt4CdhANUqOFwPluQVaiDKBobwzhXbAKSVBwiIrLiSXqr4FkVLg2Uu0lllEq3oCl%2FurlO8rjMpWvjNdxg89lI%2FsRuz8mw6SAvHwsBEakgErh2gbml0MQVuQblRzWN%2F3VGV6TcxBRcwBsYDR%2B79iW3Qa8r7sIB8VlHFLnrDAklsFZBBQb4DUfvhri9lHK%2BxoQNjO0NVz6wEXF%2B4JzZ%2FigEW6lkrUJmoAHic7jlcQOO4j1TJl6IVsC1btweCDR8pwESw6wWRhmxsK66Os%2FM5E6Cl%2FHd0rsUlcNgJDAmbqC2YcQFzlPGeHDEjcczCUTwjTPA3INBAJspEm3byxsRPINaN9Pyc45R%2Bp9LtIZfraxZc6lqBHGmNa%2B5H3sxCvRF0%2BeVps5wDYaKUAjrBhABPbK%2B1J29G5U7%2Boisz%2Bt6OgwFhoVZwTFE1u5iCAP4oFN7JV%2BWYLprUpiHoYVIfZu0bkgLCGnW2HN4fZQicdHXfgRe493kA3ltlZQv70Doi%2FS8aVk9GnO%2B6Vy0GvNBpP4b4GS4sF7FIszBHd7fAgaixQwh8DzvwY6pgEAvEo8pPXmEd7xR5sMpLCbqWq5ZqkJubWMeDo0Kfa%2BsGXPtSOy1I2fgrYG%2FEFfm9iekMgsQ2WnMg0S5E6Owi1PSJ%2FSF3whEd4FyVs2%2BlPCVHtp8%2Bcj3VxlBlenE7nMl5gf5dWDrW82jUJryhduHRlQvCOFObnYECU7kfmsYHs37RQJ2RFEZJyJtmbGycjCZ%2BChb987pHjJlOhTJj5PfCbdVjjKVLyw&X-Amz-Signature=d3a96dd86609f26ae93b81db5ee986ae5c561bf9d16256951fabef3d762e5a89&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XRCLMBC%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcQfCQs%2BP5r56EzM%2BRw64bzuax%2FkEiTewugkKYQjO2vAiB%2BFpgbHwdbEAiUgmUcAMR3mbbcYU8Y0tKpICkXLpSkqSr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMcXzGsy%2FEVLSib1AwKtwDBwbW6Oivqzpi7SwdRPblGoVoBoyUVh4%2FAJ0puEH52RdZE%2BJauLE9ky8cGyvGw4Xhqu2L%2BoDQ4JYb276m0J%2BMLKzT1ftiJ9wnx1eSKFHBA%2FolCI3RQdTp0LAakSWomtKvlumEhXx9BpFMl0WB%2BVYfof3PvzHEsc3eNkDQMDbwXF812ePJGRs%2BZhzgzDou91uvHJNl89h75zi0dlymyEcrXP%2BH631uchj6QLS01JS7HgNYBlW1h4qp3Hszs8oHT3HLrJ3dcI7YdkYC7HITzadQNz9h9n%2FBw%2FOXGnP49brjP89OGGAKhhSPNSOnOa8l9EkN2YTMuYcDzO7HRTB6K7aH%2FVRX0E4XBM69q2W9wTHxt35DktLAxRU8juBhbUzs7fee9lJ%2F6SvjdZcZu3zPWGk197FBbA2E%2BaAbFBAIDDircIN0jBMt9eeaiXgEJkkwDeSmzuWwzsLhF0nINI8fd3OQBUbbp8SZmBuSM3sG0H3VfUVs1Gs51G4cU1P%2FBssvU1fr6Q0AkDq%2Bnc3E0M4S3jDaU%2FPb%2BLu%2BJO%2FQm3IiYjKRsDJNlEMeWrTq%2FcgIYagHovIlWEMjqv6iNQxTC0CWeGsJK0lpIK80oAOdhXsl2kQkf9bfApsKDiP1%2FaQV8Q0wl8DzvwY6pgENiHYNh96s9fLeNAU3diWNaKlRDG8ZSLjIxVFltgKG1sas2tfruJ9AzNwDUKJXHwWSqazmUeVSnWkbC66ntyDovJxoyQC26YUaI%2BNPXqzB4phVAaV7B4gojBevD1CjGBJEIvDMZF%2FP37pMhZTAWrIR8oC8yq72stXjFqL9HqWFMAh6xP66n8TzmOsysisNN%2BsepXEMiOcfyY61WXJlkGOdUN1Q4uiC&X-Amz-Signature=b2fd5b3e53b5286aedf23f34fc3c67667ae643e50ec14f15132b3a2dd85258ff&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XGMSK2F%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDOkJzfHqRVxgGfD57zNNy%2F8AmRkp0Ox6HSNrIsBfs8AIgPEGnTm2nJzcU%2B%2FdBbAt%2B%2BU2P0oXE%2F2xOrFfKVvSo5f8q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDP62aPFeNfzJqGabAircA%2Bj1snW1ML3dGq2t%2B7ew80XG7r5AILHCqvbuHXahAa9dEHInaEfBHI0SzsEsw4O4Eag4Na5lu1CPne9dJiY%2Bzu1aT1bxzj5ObTM7xJ4DW0rUUSDBOGL%2Bc2Yek6HQouzUpVL8Z8e8KtQR%2FGlqYHoQQEJGDgMRC9LvHoeqN5zG58rU93%2BRG17IWzcUN6CGx81PDgeDev2%2F%2BiYhtF16wL7Jz%2F0Sk4UbQx%2BJgNYbrEhcRfrOWGo9j22c8B2m9jJCObbGYJ1Kx4AFWbQKNoLwusbZy4yfDdlqvtW%2FOymErlzwe%2F7RAru4Dsyyh8i0B7yYIj%2FuDjlna%2FaIXVzzENSi%2FQds91Fc%2FxWVeU015Bb7sH2gfBDBflK3n59Rszo0zJMpkLwXi2a%2F0palJrPLPQwUy4H%2FXueTVB9g7W2hURnGfazyPhebWJmwJyQ4xHOCzwKO0mPTbHmpBAl%2Fg9W6aa%2BvFTDaQSohl9ZFJRiCRYFCPoDI7u94t6pORijTkmGmXpoyf%2FcV81xeKS76Ta4nyY6kxBA9tGoTPQIRFVSrLAfrbz3fVtevAQeBBQXOWBShDreeyzz7EUsZCRWOpdQLRk2re7%2F1S%2BM9x0nP3nJ8NS%2FLeX7KvBslZMGT3wSOD39eJW6xMI7A878GOqUBqnzuwTJCoTUBOSHKxlbok9K6wQkGxO46BNU8tmVcLZAYwY6PXP%2FqgR3q6g484kvowwyVIDdLeWIdMGCCyqjwdj%2BIoXE1SC7TbTlHSxS9qkkijqwvzK16L764rfZlTq8uU5TaF1qPTTT3t4C1inq2xHVqj2J5KkWIR5JqgL75Q6DrYOm%2F8Z3QHF%2FqPjsRq5Vf9r6DBHxbKIuYKJ6nRG44a6oiDDqk&X-Amz-Signature=1b508ce9ce62b8dd75067bd61433f8c8e4946520143314b9f619e34169c02e01&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G3KHGUE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICoqHUStCIVQub501F0vuHLMT1IvsEXBz%2BP3YoUWb%2FzIAiBW14mJhNuWBmDMceEs1kxOdTTWB8%2Ffff579TJ7qsNMrSr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMVx%2BLOiWfETYZHpxYKtwDVLAa2EeRqPv6vDhR24UH1O%2Fpm55Uh38Nz%2F%2BkaHvsKlXl37jzQS%2Bc2ajdFcFV9r2rlyaMe%2BCMiIYG%2BMwP%2FuafRt4CdhANUqOFwPluQVaiDKBobwzhXbAKSVBwiIrLiSXqr4FkVLg2Uu0lllEq3oCl%2FurlO8rjMpWvjNdxg89lI%2FsRuz8mw6SAvHwsBEakgErh2gbml0MQVuQblRzWN%2F3VGV6TcxBRcwBsYDR%2B79iW3Qa8r7sIB8VlHFLnrDAklsFZBBQb4DUfvhri9lHK%2BxoQNjO0NVz6wEXF%2B4JzZ%2FigEW6lkrUJmoAHic7jlcQOO4j1TJl6IVsC1btweCDR8pwESw6wWRhmxsK66Os%2FM5E6Cl%2FHd0rsUlcNgJDAmbqC2YcQFzlPGeHDEjcczCUTwjTPA3INBAJspEm3byxsRPINaN9Pyc45R%2Bp9LtIZfraxZc6lqBHGmNa%2B5H3sxCvRF0%2BeVps5wDYaKUAjrBhABPbK%2B1J29G5U7%2Boisz%2Bt6OgwFhoVZwTFE1u5iCAP4oFN7JV%2BWYLprUpiHoYVIfZu0bkgLCGnW2HN4fZQicdHXfgRe493kA3ltlZQv70Doi%2FS8aVk9GnO%2B6Vy0GvNBpP4b4GS4sF7FIszBHd7fAgaixQwh8DzvwY6pgEAvEo8pPXmEd7xR5sMpLCbqWq5ZqkJubWMeDo0Kfa%2BsGXPtSOy1I2fgrYG%2FEFfm9iekMgsQ2WnMg0S5E6Owi1PSJ%2FSF3whEd4FyVs2%2BlPCVHtp8%2Bcj3VxlBlenE7nMl5gf5dWDrW82jUJryhduHRlQvCOFObnYECU7kfmsYHs37RQJ2RFEZJyJtmbGycjCZ%2BChb987pHjJlOhTJj5PfCbdVjjKVLyw&X-Amz-Signature=79d3f311ea9cf7f069e7ab1b0d58c319dd07d346c8b5c464991350dbcb700b2f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
