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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNDSRYPK%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVeHPQjpwzGG87cZqA0pqa2azgd%2F8LPWIne4TQtaDANAiEAoTa3rHxI1ra%2BMq7bf5Dfaq5VLbw%2BE7FtJFrnFcuw778qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFQ25Yi7TZRH6rVkircAwMIc2DTDjPaFaqIdgHTzgC8xWUTnph1HrZYh3kDoKvfQgt7QgiTEgYTpcpS1cmtCKVWw5XfqgvSUo8HelCAzbSkuNTrdHHP8AxKNY5a0DwCmoiyfdv3sBCNzZRnPEIrUTGMkD4vhW5V1pJE0xpfmb8sKr2XyGyeIWloILTPy7MkLucvN88p%2BOHq3UTXh3ba6ARCCSXfbPpBf9UDd8A%2F7G%2BDSdEhElFJ7L%2B5R04eJc%2FK7Mxy6DQdWz9J%2FXtwrR4UyOp1itwezsnSPAYKgxWGARLu1VTNii5zi2giT8r5FMvW2Oy1eV3LPCRGuXLuse0bwGQUumkDy4mx52t757gx79Q2U7E%2FV8NZxUh%2Fpi3Znhzc0bqGQauZdpw4XejwYVeP277aSijgw2%2FpW9UDpQ5NfkeOmYoFlUbP56xSlWJmdCz8r1HR%2BO%2FffK%2BbpjXXEZclWI0FXQMD1lLp0kZ4MVyH410vObrbDLCzF83G1jpmKgzxzAbRrynvnE3NMMeUHvEMAZIDmOtaoWJBkZ7VOQtrtUHj8mzg5iqiFMLhgDU9BZgUbvuyDfyQCLrZ0o1sFVhxpCyR4KpZi4r%2FBmG7yQz%2BL3kP0SyCA5f1fO9Ir366x2X%2F4mLxDKwc3YB8m1fGMLSzqb0GOqUBFQe0rYB4f5a2MzAn9C1CM4D1SqRxE%2F4rPWn5ztOQoEEUnoM%2FhtmdIQpUJ91tPbkPwKgrdF%2FrW%2BMYD17Gn%2BUmYMTwj5JeZngb9wtAYREoR6cf6qPLvA0yMCEw1UsDNabe%2F1nEnOQE6gy9FvX%2B%2FzvBGUG2mBHVw%2FiVA4x0%2FvQuNOJ2DIrTJOj2XsJtLdDpf0a4FZI50zsAGxGzFqUlXDuiFuV%2BdYi2&X-Amz-Signature=01c1dc3d941c57d8d152dfacc1cdac56616bcb6eb57cf68d7b8ca92af3ee0638&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNDSRYPK%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVeHPQjpwzGG87cZqA0pqa2azgd%2F8LPWIne4TQtaDANAiEAoTa3rHxI1ra%2BMq7bf5Dfaq5VLbw%2BE7FtJFrnFcuw778qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFQ25Yi7TZRH6rVkircAwMIc2DTDjPaFaqIdgHTzgC8xWUTnph1HrZYh3kDoKvfQgt7QgiTEgYTpcpS1cmtCKVWw5XfqgvSUo8HelCAzbSkuNTrdHHP8AxKNY5a0DwCmoiyfdv3sBCNzZRnPEIrUTGMkD4vhW5V1pJE0xpfmb8sKr2XyGyeIWloILTPy7MkLucvN88p%2BOHq3UTXh3ba6ARCCSXfbPpBf9UDd8A%2F7G%2BDSdEhElFJ7L%2B5R04eJc%2FK7Mxy6DQdWz9J%2FXtwrR4UyOp1itwezsnSPAYKgxWGARLu1VTNii5zi2giT8r5FMvW2Oy1eV3LPCRGuXLuse0bwGQUumkDy4mx52t757gx79Q2U7E%2FV8NZxUh%2Fpi3Znhzc0bqGQauZdpw4XejwYVeP277aSijgw2%2FpW9UDpQ5NfkeOmYoFlUbP56xSlWJmdCz8r1HR%2BO%2FffK%2BbpjXXEZclWI0FXQMD1lLp0kZ4MVyH410vObrbDLCzF83G1jpmKgzxzAbRrynvnE3NMMeUHvEMAZIDmOtaoWJBkZ7VOQtrtUHj8mzg5iqiFMLhgDU9BZgUbvuyDfyQCLrZ0o1sFVhxpCyR4KpZi4r%2FBmG7yQz%2BL3kP0SyCA5f1fO9Ir366x2X%2F4mLxDKwc3YB8m1fGMLSzqb0GOqUBFQe0rYB4f5a2MzAn9C1CM4D1SqRxE%2F4rPWn5ztOQoEEUnoM%2FhtmdIQpUJ91tPbkPwKgrdF%2FrW%2BMYD17Gn%2BUmYMTwj5JeZngb9wtAYREoR6cf6qPLvA0yMCEw1UsDNabe%2F1nEnOQE6gy9FvX%2B%2FzvBGUG2mBHVw%2FiVA4x0%2FvQuNOJ2DIrTJOj2XsJtLdDpf0a4FZI50zsAGxGzFqUlXDuiFuV%2BdYi2&X-Amz-Signature=5089175e5e347cc3714567f2be03b7eb10bdbcca97db03f4ca3c9034d2735e0a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2AHZAMX%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9rCY750aNH5u3MsJ6118%2FHePCoqDV%2BkzBO3XXTmhJMAiBTESpIbuStuXFnRnlDFNeP4vkMRmAysR6Q2bjZutyPSSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRUMvHJQfPduPq8%2B8KtwDRvf1B71gHn72d%2BjgernuyWMl2yqjbLNPMQJrLmeJT1tKTcUoUGxN9B0vxxgJW%2BNoMBrFj6Rsx%2FgNsCQP1mRNCPTIWI06P87VhdiP6L0ju04g4FxI9QIKTsjknouRSoM2pFPY%2Fldieg4DuV5YUBTOrpEls%2Bys1oqOc8G8QrEvGQLoVC37ve3wu3k3TesXT8Kj2uM2VKgGjtiXTxWNh2GHbUqJzp1gCAFZCfBQ4Sxo6mdHhNsrdYQMe4X%2Fxv8GKi%2BNOIcSvBHDzlPAx%2BtyO%2FUHmbJDu%2B07yM0mJW9OhKnzydv%2BhcYFpYWczyAr9eiyiVqnkYDVO07SO4T3goz1j82grdtP4ZOs15SFyscxeh7X%2BlQC3tfmMl4iROmyTBZRbcDkXXywvtwfIPP2NsBsh%2FD86bnbZkUAK8ZQjEPZ%2F1RX7u1c6x1Sv3Lra5DTo8fnifKGr5sJas5b%2BQvbX%2F44BANp%2F7XMAaB9g0gdVHzJ7Sjxsn88f2vtqn9dB43I1IaGCbxc5cF6dOS24aJe3HShzJF4XNdOP5Hao8DnzAWiwLcsUiX2tDZ%2BzZ55VKA7Cq7yUp2HUwQ792Wgp%2F1xYcOxXd8GzOzVCoT%2FGIY2FAzTCW0fAPqwJ0OIGaTQX4NDu2wwqbOpvQY6pgHrL5HOeYkuWmA8oENGtfW8PkTZWkEO6erTz7wYYhQreaL281IyDPxxiPsQtfSUxVAi9mB7%2BDdaUUhdcOMlyFXSe4uwlLIFTynEuRmVkYxv1tw%2B4HaRcmUvpC%2FkuFTTuYue6Gs9KYsZ5cnhbmfUZk13yrTODeybS9weJh4u62DtTpENG1HzsTuAiuPHvlX7CaSAeXmiL7mNG9JJUEsBMWiR0Py%2FjX7k&X-Amz-Signature=bd986ce32834745c5292cbaecdc7940a164db62e4f7638c507ce9d40e2828a77&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYWYTX3Y%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDiSfjCLz9w4VTnWRLE2xNmfOS2eqUcHx9YzPxZW1huGAiA3Vij63jDt%2BIobikW5uHyugqrOsMhIIO%2BWYWpuPY%2FYzSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoSJkRrkfPtQwfb2CKtwDDjfcEPpZ1XPZ0D5wyit3XoV000Tyd0jkVLF7Kbnu83WBekpY2EGPHPXvgCy8aDGhMnP1M4q%2FHwwATTrenzZs9QhbPqszKzrY8PJjc2smfYNEuGbJVGtTcJAWNPq09ElWoz8sHmEtNp%2BM060kwGM61i7B3o%2F5Kx3bhOyZhy88bY5yoFBJ98todDz8BO9%2FwhAdsc5A63PEdo7ikL%2FtUWLG82a%2FruiYu%2B0bgw7Np0KDtzFqKxErmVABN5frDqIgB3E7d4vB9OoAFXjL%2BrSrI01HRfY9tePPjXGIWwRfRjWmxf%2BOR5C4a1EFu7mwlF0lriXgw%2Bh%2FK21A3GWrG5Tm1ZR1em1R%2B5789%2Bb80ClZKYCYWp3LSa2GTvU6uRNQMJTdtJgKY%2BM7pOm3gF47sI85UoQ4FFC9DlknXtz6lpSdQF2%2FGvhSbtgsEnKaXqLJY0ubw60vRYu9b%2BFqDSq%2FBZ%2FDn%2FBaIeFE7gaqkUcJi30UfU1M%2BVzMp4KPkokr8ndAVOtGB8HkTG3269pQiH4i8JIKGCRT%2BXIydAbOEybSpnwLUxbOBycduBbA%2BEmBBjN1KnXOVM%2Fk3MMFYIyFQKceMN8DSM63Z6G5faKLrqK935B7vWGUv%2BRVEK97GQcSrKxMmqcwl7OpvQY6pgHK0rckorCCFN0VbHoubpw5BLXXdJUQT%2FNAQ%2FKPfQQj2OsIqqvJER0MmzJKT%2BAEIg4KBQIej4IQKW2MTnc77qrvkmM1erjrcqgMAWZEcBAo9sg2Xh7olkxo3HL5AVBMP1A%2FpYcCl9Xp%2F%2Blsg9QwOun%2BBw5RZZwCaFRBziubPPSJydPMoEnqVi%2BngBDA2KjzzUtWejGeXAG9bfCbEttJ9Eo%2FXci0UrKh&X-Amz-Signature=fbb7308cedeece3d340d871ffd71d82fc3a3d073db0735b335a515ecbe24b8ea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNDSRYPK%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVeHPQjpwzGG87cZqA0pqa2azgd%2F8LPWIne4TQtaDANAiEAoTa3rHxI1ra%2BMq7bf5Dfaq5VLbw%2BE7FtJFrnFcuw778qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFQ25Yi7TZRH6rVkircAwMIc2DTDjPaFaqIdgHTzgC8xWUTnph1HrZYh3kDoKvfQgt7QgiTEgYTpcpS1cmtCKVWw5XfqgvSUo8HelCAzbSkuNTrdHHP8AxKNY5a0DwCmoiyfdv3sBCNzZRnPEIrUTGMkD4vhW5V1pJE0xpfmb8sKr2XyGyeIWloILTPy7MkLucvN88p%2BOHq3UTXh3ba6ARCCSXfbPpBf9UDd8A%2F7G%2BDSdEhElFJ7L%2B5R04eJc%2FK7Mxy6DQdWz9J%2FXtwrR4UyOp1itwezsnSPAYKgxWGARLu1VTNii5zi2giT8r5FMvW2Oy1eV3LPCRGuXLuse0bwGQUumkDy4mx52t757gx79Q2U7E%2FV8NZxUh%2Fpi3Znhzc0bqGQauZdpw4XejwYVeP277aSijgw2%2FpW9UDpQ5NfkeOmYoFlUbP56xSlWJmdCz8r1HR%2BO%2FffK%2BbpjXXEZclWI0FXQMD1lLp0kZ4MVyH410vObrbDLCzF83G1jpmKgzxzAbRrynvnE3NMMeUHvEMAZIDmOtaoWJBkZ7VOQtrtUHj8mzg5iqiFMLhgDU9BZgUbvuyDfyQCLrZ0o1sFVhxpCyR4KpZi4r%2FBmG7yQz%2BL3kP0SyCA5f1fO9Ir366x2X%2F4mLxDKwc3YB8m1fGMLSzqb0GOqUBFQe0rYB4f5a2MzAn9C1CM4D1SqRxE%2F4rPWn5ztOQoEEUnoM%2FhtmdIQpUJ91tPbkPwKgrdF%2FrW%2BMYD17Gn%2BUmYMTwj5JeZngb9wtAYREoR6cf6qPLvA0yMCEw1UsDNabe%2F1nEnOQE6gy9FvX%2B%2FzvBGUG2mBHVw%2FiVA4x0%2FvQuNOJ2DIrTJOj2XsJtLdDpf0a4FZI50zsAGxGzFqUlXDuiFuV%2BdYi2&X-Amz-Signature=f0577743c65a1f97c9fb8ef20549297edf4f4064c30b036297423a9fa16166bb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
