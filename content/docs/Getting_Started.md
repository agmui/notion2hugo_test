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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W725X5RV%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCMEGMCdHGVITUErZpMbsnCyDp8n6gzjm6EvFUS6FF1cwIgFIAGTYOe%2FbI97fvTT5xXQooCqA8wfab%2FZoXFia0YCHwqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwKhZnl9%2F3s%2FIlQ2CrcA8hnImwfsb7oq3TdrvQ4x935tNkaCMDJXky1PcPnsnmFNegZLI04N4kP7hNkpC5Um41uVS62WnvpgD8bVwX6RlxgTp5S9RqnYJis1mpz4PZ%2FA3v%2Bki9AfPAE5%2BCTdopyqV9P21X2TxJi3OtaAl1%2FdI6CSvEl7FR93qNtzIFI5AF4PxdygAn6%2Fl6XvjJT4IqQj6zB8FHPuY6bS8ePuOsosBmwet8YZ%2FHaZOiueupJfhqYWdwKUCnAsH54rDQGk5aQA%2B%2BK3MacMydrlgfrR0cDY%2B50FWqOGr28PiiP%2BH%2BXgc0zSesr54kwhxorxg2G%2FWjsU7SoE39T%2FgADwSNI%2BLsVJmKCf5BAjJPueXIR%2BqSY6S2GJBXMtfrK0OEtapnJSJATBihPqqYTVWcdXeSC3VWtT1YRe9QRxuZntgxBbDoaGSkBFCB5MDouSFtQ4wASbRTMtwCMySHMEO7lXr6uWn348KSIWAUBlkPJF331kct1CycnHfIaTVB7uUhOsa%2BheU8ttxv3IV4GjcGuon56jOohFXDqMzwD%2BC%2F6B%2B2XhTmXw0w%2BYikEuS5P6n3jEqiGrVvNri3Y6eP9KgbxtDGqyWT7BD9u5k9%2F3VFg6AU1QIM6oPKi5vjB8oUxo0VqQe8wMOKfkcAGOqUB9QJMc2dEdzFtsNOLR5jH2szhVnjeew%2FgHnK3RwWCJoodn6MSPKtosUlH3a6jitUabAwOwCtcnqUylJ%2Fm1dhbQI92MuXuhacYwG8nysceyXksf0NSiENi8Vveels5Avb7Ddo%2FuGZvJ19PV2nylBuNnhkpZ%2B2A3IgcZEGwsuca%2F7xNdm7%2FQj0JdT0s2IvNvQWcpmScXy0HJrH6%2B%2FIgg6VEqBtxd3%2BU&X-Amz-Signature=d2324dcb21ba6e222d15383951009e19e7f8e08c88c1ffb12681a09a826e979d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W725X5RV%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCMEGMCdHGVITUErZpMbsnCyDp8n6gzjm6EvFUS6FF1cwIgFIAGTYOe%2FbI97fvTT5xXQooCqA8wfab%2FZoXFia0YCHwqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwKhZnl9%2F3s%2FIlQ2CrcA8hnImwfsb7oq3TdrvQ4x935tNkaCMDJXky1PcPnsnmFNegZLI04N4kP7hNkpC5Um41uVS62WnvpgD8bVwX6RlxgTp5S9RqnYJis1mpz4PZ%2FA3v%2Bki9AfPAE5%2BCTdopyqV9P21X2TxJi3OtaAl1%2FdI6CSvEl7FR93qNtzIFI5AF4PxdygAn6%2Fl6XvjJT4IqQj6zB8FHPuY6bS8ePuOsosBmwet8YZ%2FHaZOiueupJfhqYWdwKUCnAsH54rDQGk5aQA%2B%2BK3MacMydrlgfrR0cDY%2B50FWqOGr28PiiP%2BH%2BXgc0zSesr54kwhxorxg2G%2FWjsU7SoE39T%2FgADwSNI%2BLsVJmKCf5BAjJPueXIR%2BqSY6S2GJBXMtfrK0OEtapnJSJATBihPqqYTVWcdXeSC3VWtT1YRe9QRxuZntgxBbDoaGSkBFCB5MDouSFtQ4wASbRTMtwCMySHMEO7lXr6uWn348KSIWAUBlkPJF331kct1CycnHfIaTVB7uUhOsa%2BheU8ttxv3IV4GjcGuon56jOohFXDqMzwD%2BC%2F6B%2B2XhTmXw0w%2BYikEuS5P6n3jEqiGrVvNri3Y6eP9KgbxtDGqyWT7BD9u5k9%2F3VFg6AU1QIM6oPKi5vjB8oUxo0VqQe8wMOKfkcAGOqUB9QJMc2dEdzFtsNOLR5jH2szhVnjeew%2FgHnK3RwWCJoodn6MSPKtosUlH3a6jitUabAwOwCtcnqUylJ%2Fm1dhbQI92MuXuhacYwG8nysceyXksf0NSiENi8Vveels5Avb7Ddo%2FuGZvJ19PV2nylBuNnhkpZ%2B2A3IgcZEGwsuca%2F7xNdm7%2FQj0JdT0s2IvNvQWcpmScXy0HJrH6%2B%2FIgg6VEqBtxd3%2BU&X-Amz-Signature=efb6d00dfe5d7a4eed72e406407e82b023f93e86419743faf1b523eb97ae1f94&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P4SIJHL%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIEv0zpBlkLEoy6DXBVl0FBL41OKuMbpkjxqc9zwSSPFRAiEA5r8VCeHL9jtdtZh1wahf4HeIjxYccgIEm%2BR9LH2nkPoqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2r8qNFjjNHDHNrByrcA9GUm3l6QTec0c7R450bHPS6Ls6WfUc6tQDFbThVAqYZrGNDBXv%2B65p7w3DZioFxB9aW65wBrz4bcGLT739onvUVdjCCWDXMiuWlEhYBXXMYzSfqd%2BagdBOdElq9c5eF%2FMVW3%2F71j0CBGIE9PrOIqyivP0SPCS6mToFXg8ppayJ7qOf5xg3%2FKNaOjtfa8dTZew%2BM%2BWjKcZBWBR76%2FkeNDAe%2FFpzgEuBu97JVzWdMiwfMQvaADkm55MbxPRwtoxuBqOLa6hhc2co5GliIdcWnN%2FF%2BHQprsBUA%2FptfbwZ8oxY1aXUK2ELeIoXSLWT77WhYqgeTHrKDiBiFBlT2H2CZaxXHb8t4IVwhRhv%2BCvomFwMSfKr9JpF1QzA6hdTCEUOXOu5%2BYAvZIuM1XdhARXAVAeQGhkjmsZxWVxERTXDgoqJ5OzkayO1gW7KdMEQ6iqcB%2F0m%2FHm8JUERAPtZBuVgItziHBSAAzg9JkrowqB1xUE%2F7qEVNVUCqWmNpIHZFn0S4BSwqtNubULzkW9fyvgBxJwpYP6I5xUBH5iYS57q7bdhH7dxiT1lfDdnkOhtzs8P6gyzno5NQUy7eBMSAfBCkXCfBHsNyB8aB30EtdCHiyCC8P1L3Mv01isL4x3EzMOaBkcAGOqUBScXmrh6t09bQclNMag0z0d7sF0GShRvQZfqSNw5MsYpBkQi%2BFJhwZHrIrti9in4jQ2BCTMvra6PLr05wJWJWHSvynJ%2BB3iUM7GvS9rCmLU312esamxoFFlXl2MEDIzmBPSgieSRvbsDihtwYGhDgzrmtmpzIfRuI0p3koJMeAX%2FboSezda4gMkP%2FKiMIesSTaukp9Qt6CRkEEQF1X%2FS5vbFJ0flP&X-Amz-Signature=093de13d2c6a64a61a8b75e4268f7764ceae7fc032e4d2341128e7c4acde2a4b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLSVKJNN%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDw0%2BswqsWCyxhEppo2NzH3jnf2LXKLl%2B7LZyIibMLp9wIhAJ56gLaRAKaVp2PryLAFSnU2rVPfMX%2F0Pvd29TTCovVlKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcptLRiG75rYnlc1Iq3APcpRqtFg3jzqloKyiClXtf1GtfSKPAPcuB2s%2BCtiIfKWiNLbPs9LLeof%2BHOUPe66PutmcGlDu9S0d%2FQWoDhIZd1oswvFWAiN6G9iMnrXy5jwyTn1uyR5PNzSn1iWT9HqWUiAdoHtFA5P%2BW1gBTk8SCvbaI7A1XwrWIFMlYUMkHZGkqd09NQLDzNXmL5s2cxLfqSrdstESWOdLfh4%2FJwKQVjB6QmZ4hNNa2JSYAGPNrDGKGZW0kin4L81GqjPyIxMYrS0DRbrZHRzEzA1DvT3jPCp3LW%2FVQIyTFVqy4ddgQp5V%2BlO7SjIG4iwrgF2k8xsknzI6WlU%2B4%2BPLHhVH5xK6YDjUd4hkh8a%2Bx32G1ldveJ2LgC4x3pXMkTklmhFEDR0TYXkXQrEKrU0Zq6dDjcGL11OxTMZUjNv9Hm7hpJA%2BuRPGQyVVc5udaW4NVjeWOuMHxlrFkdgeKtzUCUB09sUkQQxYz5cyLMhImCA5sqD8sXJ2Gz%2BcyYt4uSwg8dsj8lwq90tuvbycgdGsxqxT4zsUQJGfRN2aiO5UzdnhkpVuWHLFpdW%2BhZ7lVoA03Ia6KxqAgJj5zZlmtl2r3%2FpW8m2bC%2BW%2BWRpm9gYR%2Br99usgLdXHG23J3F%2FGaYpkLBmDDugZHABjqkAdrOUz%2BBcRqdDijiql0b7rSFAzo3iDosa1f%2FhEJAeiaPhEo1mqBJPWIoXKzOw7gfwmMvC0G8SNDS1xAOwZzm0syQN%2FtJcNACMeOqSWeqoAGtIL2EECsumURSMKIHATFofh6xXPZFEW%2FDkPwqnf4LFlGyzaYFgmPRtPjxKwAmVBOZwt1mlKbKTaQU0KlDOkOnvCe0d3SFaAt3uc8gMsyKbOtWgyiu&X-Amz-Signature=7633aae852d5b757c0fa695ef64a559c10b6f704afb79221d63287b5199b7293&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W725X5RV%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCMEGMCdHGVITUErZpMbsnCyDp8n6gzjm6EvFUS6FF1cwIgFIAGTYOe%2FbI97fvTT5xXQooCqA8wfab%2FZoXFia0YCHwqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwKhZnl9%2F3s%2FIlQ2CrcA8hnImwfsb7oq3TdrvQ4x935tNkaCMDJXky1PcPnsnmFNegZLI04N4kP7hNkpC5Um41uVS62WnvpgD8bVwX6RlxgTp5S9RqnYJis1mpz4PZ%2FA3v%2Bki9AfPAE5%2BCTdopyqV9P21X2TxJi3OtaAl1%2FdI6CSvEl7FR93qNtzIFI5AF4PxdygAn6%2Fl6XvjJT4IqQj6zB8FHPuY6bS8ePuOsosBmwet8YZ%2FHaZOiueupJfhqYWdwKUCnAsH54rDQGk5aQA%2B%2BK3MacMydrlgfrR0cDY%2B50FWqOGr28PiiP%2BH%2BXgc0zSesr54kwhxorxg2G%2FWjsU7SoE39T%2FgADwSNI%2BLsVJmKCf5BAjJPueXIR%2BqSY6S2GJBXMtfrK0OEtapnJSJATBihPqqYTVWcdXeSC3VWtT1YRe9QRxuZntgxBbDoaGSkBFCB5MDouSFtQ4wASbRTMtwCMySHMEO7lXr6uWn348KSIWAUBlkPJF331kct1CycnHfIaTVB7uUhOsa%2BheU8ttxv3IV4GjcGuon56jOohFXDqMzwD%2BC%2F6B%2B2XhTmXw0w%2BYikEuS5P6n3jEqiGrVvNri3Y6eP9KgbxtDGqyWT7BD9u5k9%2F3VFg6AU1QIM6oPKi5vjB8oUxo0VqQe8wMOKfkcAGOqUB9QJMc2dEdzFtsNOLR5jH2szhVnjeew%2FgHnK3RwWCJoodn6MSPKtosUlH3a6jitUabAwOwCtcnqUylJ%2Fm1dhbQI92MuXuhacYwG8nysceyXksf0NSiENi8Vveels5Avb7Ddo%2FuGZvJ19PV2nylBuNnhkpZ%2B2A3IgcZEGwsuca%2F7xNdm7%2FQj0JdT0s2IvNvQWcpmScXy0HJrH6%2B%2FIgg6VEqBtxd3%2BU&X-Amz-Signature=491fa392bf19d8a698273011a5de26a7ec01439acd1dada4ff72d2430c83b731&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
