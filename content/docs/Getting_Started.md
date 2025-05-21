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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PD3SRH5%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3vKWaMTh6E6IgUjgzuyoyD%2BIeS4je7vAYivE%2BwSrS9wIhANvDlQwaDXRd55R8BLyf1gZXiwC6LqdiMX%2Fd9QBaMPHeKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1%2FUjwDM0hQPb6tXgq3AOhirq4Sy3PAUVbPdOkj2P%2BG2Ernhh9mYf5XU2S2iF9LtILa%2Fm2YsrH5XYnB%2FXSRQ5MOgVMJg9s3%2FxYYbP%2B3v44rrchNvcghIWfZ6Q4%2FicJ%2B1HUpY0LODQtI4M8AsnqJzueSS96Fz1M2jyOPfEC82BBmdTVFqcwgcvwTyOT6JPhdIMlhRTCVF0QYKYC%2FeRHOX%2BF0T3lsjhMW%2FieSQ1t1w0yr6Wkb5UOH9iMa0osYVrIwbKkKuAEeHCJ5YgRFhY%2FpM%2FF4c%2B7ilw%2FBeYbwkFHPruovfnQFeUtc%2BQvahvPqVMjzfjedGQzB9shdw6Yi752V0%2BhB%2BW%2Fs1F12Yq8uQ4cYjOdUIm0EHfE1lW%2BfUUS0Y%2Bvp%2FEFj4scFbg%2BAUjamn6EeAC0Wr1kOvZ66rLnjewEgRYpzh0kOAA8lu1BKY1y2DhwqpCkvwuJS4VbPetAMvV9IM2v3q2nxmpzFT%2BB21k2fHsAJt4VghJyM%2BZW87EBCJK6GhuGdiwvYzLFQcoFEcdR0aOWZad1ApIs4stvSVgEuA5X%2BV9zezJUOWL9Thvjhjzez%2Fv%2BbA84YVuA9wDx%2B4VWsSJ%2BqYp9RrdQCBaJncftJM2BE3aYYC95ImXdNOf7%2BpAN4SuKtlD0JRCEY0zDADDJrrXBBjqkAV10XQ7Ut5mI6nBRoJrjSCdSqcs46WbPZRp1MDcRF%2Bw5sp4AsgVaVkxosnoGrh7v5cHtEdqplSGc9q%2FqRmQPR28wt%2Fn16cKA%2FiIcWv7pMRwWhkqAn%2BMStkkWBtwVuvFM9MlEYuBge9uI75LPCervHTaMNqZYI%2FxiC40OAU0qCRMFyVCA8kFk7mLqvlgUSACgBQ0ASdFrTNaEHm4eVBWJqbJ50X5z&X-Amz-Signature=5a068e1f1d40bedb64003c6a97545b9f954987b43e653fc5099ea29b17343f1a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PD3SRH5%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3vKWaMTh6E6IgUjgzuyoyD%2BIeS4je7vAYivE%2BwSrS9wIhANvDlQwaDXRd55R8BLyf1gZXiwC6LqdiMX%2Fd9QBaMPHeKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1%2FUjwDM0hQPb6tXgq3AOhirq4Sy3PAUVbPdOkj2P%2BG2Ernhh9mYf5XU2S2iF9LtILa%2Fm2YsrH5XYnB%2FXSRQ5MOgVMJg9s3%2FxYYbP%2B3v44rrchNvcghIWfZ6Q4%2FicJ%2B1HUpY0LODQtI4M8AsnqJzueSS96Fz1M2jyOPfEC82BBmdTVFqcwgcvwTyOT6JPhdIMlhRTCVF0QYKYC%2FeRHOX%2BF0T3lsjhMW%2FieSQ1t1w0yr6Wkb5UOH9iMa0osYVrIwbKkKuAEeHCJ5YgRFhY%2FpM%2FF4c%2B7ilw%2FBeYbwkFHPruovfnQFeUtc%2BQvahvPqVMjzfjedGQzB9shdw6Yi752V0%2BhB%2BW%2Fs1F12Yq8uQ4cYjOdUIm0EHfE1lW%2BfUUS0Y%2Bvp%2FEFj4scFbg%2BAUjamn6EeAC0Wr1kOvZ66rLnjewEgRYpzh0kOAA8lu1BKY1y2DhwqpCkvwuJS4VbPetAMvV9IM2v3q2nxmpzFT%2BB21k2fHsAJt4VghJyM%2BZW87EBCJK6GhuGdiwvYzLFQcoFEcdR0aOWZad1ApIs4stvSVgEuA5X%2BV9zezJUOWL9Thvjhjzez%2Fv%2BbA84YVuA9wDx%2B4VWsSJ%2BqYp9RrdQCBaJncftJM2BE3aYYC95ImXdNOf7%2BpAN4SuKtlD0JRCEY0zDADDJrrXBBjqkAV10XQ7Ut5mI6nBRoJrjSCdSqcs46WbPZRp1MDcRF%2Bw5sp4AsgVaVkxosnoGrh7v5cHtEdqplSGc9q%2FqRmQPR28wt%2Fn16cKA%2FiIcWv7pMRwWhkqAn%2BMStkkWBtwVuvFM9MlEYuBge9uI75LPCervHTaMNqZYI%2FxiC40OAU0qCRMFyVCA8kFk7mLqvlgUSACgBQ0ASdFrTNaEHm4eVBWJqbJ50X5z&X-Amz-Signature=598963a82958d6026452cb8e0a206acac292fc17a006545c20e357d8f8ab7898&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PD3SRH5%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3vKWaMTh6E6IgUjgzuyoyD%2BIeS4je7vAYivE%2BwSrS9wIhANvDlQwaDXRd55R8BLyf1gZXiwC6LqdiMX%2Fd9QBaMPHeKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1%2FUjwDM0hQPb6tXgq3AOhirq4Sy3PAUVbPdOkj2P%2BG2Ernhh9mYf5XU2S2iF9LtILa%2Fm2YsrH5XYnB%2FXSRQ5MOgVMJg9s3%2FxYYbP%2B3v44rrchNvcghIWfZ6Q4%2FicJ%2B1HUpY0LODQtI4M8AsnqJzueSS96Fz1M2jyOPfEC82BBmdTVFqcwgcvwTyOT6JPhdIMlhRTCVF0QYKYC%2FeRHOX%2BF0T3lsjhMW%2FieSQ1t1w0yr6Wkb5UOH9iMa0osYVrIwbKkKuAEeHCJ5YgRFhY%2FpM%2FF4c%2B7ilw%2FBeYbwkFHPruovfnQFeUtc%2BQvahvPqVMjzfjedGQzB9shdw6Yi752V0%2BhB%2BW%2Fs1F12Yq8uQ4cYjOdUIm0EHfE1lW%2BfUUS0Y%2Bvp%2FEFj4scFbg%2BAUjamn6EeAC0Wr1kOvZ66rLnjewEgRYpzh0kOAA8lu1BKY1y2DhwqpCkvwuJS4VbPetAMvV9IM2v3q2nxmpzFT%2BB21k2fHsAJt4VghJyM%2BZW87EBCJK6GhuGdiwvYzLFQcoFEcdR0aOWZad1ApIs4stvSVgEuA5X%2BV9zezJUOWL9Thvjhjzez%2Fv%2BbA84YVuA9wDx%2B4VWsSJ%2BqYp9RrdQCBaJncftJM2BE3aYYC95ImXdNOf7%2BpAN4SuKtlD0JRCEY0zDADDJrrXBBjqkAV10XQ7Ut5mI6nBRoJrjSCdSqcs46WbPZRp1MDcRF%2Bw5sp4AsgVaVkxosnoGrh7v5cHtEdqplSGc9q%2FqRmQPR28wt%2Fn16cKA%2FiIcWv7pMRwWhkqAn%2BMStkkWBtwVuvFM9MlEYuBge9uI75LPCervHTaMNqZYI%2FxiC40OAU0qCRMFyVCA8kFk7mLqvlgUSACgBQ0ASdFrTNaEHm4eVBWJqbJ50X5z&X-Amz-Signature=6fd14c1fac3a80c626fabf2eff8d6471288030ce85b1ac4c96b422a18eb868f8&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6CF35Q7%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOqq1u1uQd0Zrye%2BGhL%2FKi1eNccDJUn3oHMWa2XCj%2BYAIgHrtwLHO1vFCmPhOnsz8PMoDk7MjEuSouV%2BM%2FN%2BuCzIMqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDChSYHAvkjHRKm02YyrcA8Gu5v10Jbo8UuyCaW2NCqiTwi50e6WcrCVlKcNTAo9kPVTo8wlnNDUVqmhjtO0V8gpYY8Br7a%2FhmNonH1X5KhSNvJwlgR0Pdzt1g5Gns%2F9Eh2fn6lMqSpj0bfWPPAvNbm%2Fn3YDIG3gWWZ5SU2hbc0tRcAagkmFk%2BMv2GbVK%2BwB2oKVEPRAM3CjLrHxcbT39aksolM%2BFRkpOWJFR8sKe80rf6jsXJsl3CORz8pTSCOBgbTnjashrtXMjk%2BY7iUVcxQZb%2Ff2YK7U2z0hkgiRGENSJ553YUw%2Bcdki%2FHUqmvvM0eGThW0D%2FlXL0g6OxKB0atma%2FvvJvdhv1qywOGrwKpoIwW7wZe3pnX18aTTCy8WhjxEolmyo3P9lYhCJDuGncLWwuky03ZBdLCCFQsIHXPn5mCnldpS8cJDudNMb23VTPAfv%2FxZNf%2F%2F5KF4XEO0seds9Zoh54L9sO5hEW6jTIBo9iRnwME1%2B8L%2F6BFg6FshAGdn8hlNJranOU8%2BxgnR0N9V2N5yBSODFpuaw13BZPA2SiQLc4jdJpM5OUHiUVROre6%2B6mr7ZQ2REF4QW9IAZOhqXEQpilsgE9p6me%2BuOUtY%2B7aHIFKP%2F3P%2BL5btiP2%2F4SukfPURQEzfuCKC2IMIivtcEGOqUBshLSZgePmQyNHyL0xEmbLCkMVkR%2BF0Jq3Aj3ayjtnpO7LrQguAwXoJnKci1bNNHHF2AZvn%2FdnMLwCLiN6c656jZAef6e9uSczPzp8gKK5WaLfFuS%2B4sDaGWrzZhDyPirqg%2F9iSyZtscRg62VjZr9cWMNA5MjPmV5tD4642Mg%2FfpI1f6o8nUxr0XJLV8fwgqP2ZPYkrPr5AbXcSf7Oe6UWn8n0IE6&X-Amz-Signature=608470579885c7a98df9844af698f3529adce3a00642e57030a054ddd65e0cff&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSOQTMJ6%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD6UDbtSa%2BugaFOOBGGZQszHPKrSDRD2E20T7PG6qCPwIgbwedBWSBMQ6wK7%2BmB0Wf2KXZnKeJrRQh457lq9MUJCwqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BhOI9pmqgqnail4ircA%2BsAhTh3U%2FKvC6t97iAlwGzIcJjmsGyyLPCvEHVkkIKTO0kMxJzRWx8c2Ugvk6TelZD9x4GllQcscBb8EIv9c%2BTnnVkS2PCLKzPL%2BjXmOb3mJ3hLgRz4uhOX%2F8UIXbIkAVscA%2Fla2GQt%2Fh73Qa%2FaSON6ZI1qnFiyw%2BhLWfMLWP2RCanZefqb3iP%2FW4M6s%2FOW30JYqETa4Xu3Y7n%2BO4e9xTMLtdj2iEXf%2BKkhAGZmnVP9PGLx3KXb71FYu9VVLu8AXFzU1D%2BtBp157pMmjHvdWOvqg99LeNnBrxoGTbCRXOtvy0P%2FL5fyD8iXLOJY5SFGnM7zPUs1n16GpaOWezARffALjl4PwqAEOZ%2BYKk8jMsCGfQY%2BvcQ9dfkxs3brrB5vH%2BkOn2KSsRNhQqeHwSIFOpsSh8zXBR784hGMnjeXR%2FnMORVf%2B6V6lPjoLDNRf%2FF3zvm19rTkUyAEFFuTJe2f5iywBjDz5OZYEXdyIsviMHvTIkkmtC0SFjsAN98cotQAIHVS8ZOV49iu7enp8pwdFem%2BrF5mHAyfUtHRn6KKSVz%2BzkXHGVwMhmyLGNM%2F42taWMqrVsFo1RcKGjLf3HlhLokUMaa%2F9NA7ys9Q0NiZhCnhXJ2mIuIwAGSGmAoOML%2BvtcEGOqUBnaCLWprFToQTYIDn2h8K%2FhViPI86c3vzy5oWBo%2BywhLJdhojw3CAI%2BdMYEYq1CzitJOjv8CNCp5U%2FOerKn4qRQ61T48t2H3w%2BBV2y0HCTtmPQwQeWISvcDU3m2ukzek6FBLdfuw4Q%2BspzEQZYvPaogT3ORCtEOCnJjrjhCGnMFp8ICxhzavpz7AEudf%2Fs%2FLQ3pp%2FrAiGAQIFrFK31NMF1Mzq4cxF&X-Amz-Signature=52bd7c43e5533ee13cfc4dde16c4e3af153eb1c3b55e2d994e8cfdfa5a066213&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PD3SRH5%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3vKWaMTh6E6IgUjgzuyoyD%2BIeS4je7vAYivE%2BwSrS9wIhANvDlQwaDXRd55R8BLyf1gZXiwC6LqdiMX%2Fd9QBaMPHeKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1%2FUjwDM0hQPb6tXgq3AOhirq4Sy3PAUVbPdOkj2P%2BG2Ernhh9mYf5XU2S2iF9LtILa%2Fm2YsrH5XYnB%2FXSRQ5MOgVMJg9s3%2FxYYbP%2B3v44rrchNvcghIWfZ6Q4%2FicJ%2B1HUpY0LODQtI4M8AsnqJzueSS96Fz1M2jyOPfEC82BBmdTVFqcwgcvwTyOT6JPhdIMlhRTCVF0QYKYC%2FeRHOX%2BF0T3lsjhMW%2FieSQ1t1w0yr6Wkb5UOH9iMa0osYVrIwbKkKuAEeHCJ5YgRFhY%2FpM%2FF4c%2B7ilw%2FBeYbwkFHPruovfnQFeUtc%2BQvahvPqVMjzfjedGQzB9shdw6Yi752V0%2BhB%2BW%2Fs1F12Yq8uQ4cYjOdUIm0EHfE1lW%2BfUUS0Y%2Bvp%2FEFj4scFbg%2BAUjamn6EeAC0Wr1kOvZ66rLnjewEgRYpzh0kOAA8lu1BKY1y2DhwqpCkvwuJS4VbPetAMvV9IM2v3q2nxmpzFT%2BB21k2fHsAJt4VghJyM%2BZW87EBCJK6GhuGdiwvYzLFQcoFEcdR0aOWZad1ApIs4stvSVgEuA5X%2BV9zezJUOWL9Thvjhjzez%2Fv%2BbA84YVuA9wDx%2B4VWsSJ%2BqYp9RrdQCBaJncftJM2BE3aYYC95ImXdNOf7%2BpAN4SuKtlD0JRCEY0zDADDJrrXBBjqkAV10XQ7Ut5mI6nBRoJrjSCdSqcs46WbPZRp1MDcRF%2Bw5sp4AsgVaVkxosnoGrh7v5cHtEdqplSGc9q%2FqRmQPR28wt%2Fn16cKA%2FiIcWv7pMRwWhkqAn%2BMStkkWBtwVuvFM9MlEYuBge9uI75LPCervHTaMNqZYI%2FxiC40OAU0qCRMFyVCA8kFk7mLqvlgUSACgBQ0ASdFrTNaEHm4eVBWJqbJ50X5z&X-Amz-Signature=63014f68c06feadf45f2bc0b2bd1ca47225244174d03b3de88a0bab312d30661&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
