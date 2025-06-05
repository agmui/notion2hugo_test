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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ6POABL%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCICtE%2BRN6wXVXh%2FRsg8w90TxU6Od30NyaVCROVm6NZlXaAiAYIgfO3gtKOO6vPF3tLzlRkU2OKgSPa%2BFOgaOV%2BmN5TCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMOVlWnYlWYjlTU6BVKtwDwJE6lku3Doy1t8jVi0mJRAJRGJrammRN7pCY2EpJx9YagUUquMJH6MDzqJt9mc%2BueNMjddSVh5K9wkLMS1jq4v%2FbQ7ZqHrX7T3k%2B%2FVX%2BJxkqECsL7FSS93MrEeiVYPCfihjcAkztDP%2Bqo2wt9UqwWJetPKjSC8LD9s5gD9dkU%2FhlXDyZp4sA85NDbzUBqW4MJmUU%2BAbbOwOmEcsy7byiL%2FSX55%2BHmf69v1J90ixJuv5kTp5B5sXveIzEf22j%2BMqcFRqWOztE8RzApQU5mq0L%2BZTKkJhCWPBX1Tk5V93rRtMIX4J7ciWvVFZC4NDqhyZICV91k0TGjEmY1y3BTSEoTDwOjPnKpKgaA%2FWN7Oh%2BgewZntJWDbXUyfOU9EcXaU0sM3X1Ab4VHvQgBZkDvU%2BVZhtwtbzLPckx4bb%2BQA9oZIpMJMNDs8vZLAAD03E%2FNQAlHEcssJnRoSEiM8Hwga%2FILeLuFfWB%2Fjg2uydhwlw7K8Z830oeAOTQygZQyEr39sKfo%2B3T%2BbDdG88CpjFGbrNoevn91njAFayXC%2B%2F20JyiO9mcZatBb4nZbk9pSdcTqank2U80a7o9RmzKccAnVPGe6ca5kbf0yuMzqeVK3bLGt2Zr79SM8JRbKb1IusEws9iHwgY6pgEbGL0LXG9zb8aTrZmzTX%2F7Q3Frt9hYTbtx49Wdzak%2Fc8ylbxNu48dxIwPfX95ZHTMfHI38eqfGHUYTPuK22RJvO2Md6buASRfT1S1LvGjjjM9IoB%2FmqasXlPBYw%2BMGQVCrOxkHD%2FRjEX99Pt5tX6oAeCl5McaKMp95sN9rOV%2BGyjkZAFs2S1mudfdVRrhlc2%2BCgGL95eDSdjU%2FP9KAFwBPQ%2B2UCUDa&X-Amz-Signature=6e8781b5a2905f3c236079c54d0c950edc19df5f78091ea40c6612bb5ebe5bff&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ6POABL%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCICtE%2BRN6wXVXh%2FRsg8w90TxU6Od30NyaVCROVm6NZlXaAiAYIgfO3gtKOO6vPF3tLzlRkU2OKgSPa%2BFOgaOV%2BmN5TCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMOVlWnYlWYjlTU6BVKtwDwJE6lku3Doy1t8jVi0mJRAJRGJrammRN7pCY2EpJx9YagUUquMJH6MDzqJt9mc%2BueNMjddSVh5K9wkLMS1jq4v%2FbQ7ZqHrX7T3k%2B%2FVX%2BJxkqECsL7FSS93MrEeiVYPCfihjcAkztDP%2Bqo2wt9UqwWJetPKjSC8LD9s5gD9dkU%2FhlXDyZp4sA85NDbzUBqW4MJmUU%2BAbbOwOmEcsy7byiL%2FSX55%2BHmf69v1J90ixJuv5kTp5B5sXveIzEf22j%2BMqcFRqWOztE8RzApQU5mq0L%2BZTKkJhCWPBX1Tk5V93rRtMIX4J7ciWvVFZC4NDqhyZICV91k0TGjEmY1y3BTSEoTDwOjPnKpKgaA%2FWN7Oh%2BgewZntJWDbXUyfOU9EcXaU0sM3X1Ab4VHvQgBZkDvU%2BVZhtwtbzLPckx4bb%2BQA9oZIpMJMNDs8vZLAAD03E%2FNQAlHEcssJnRoSEiM8Hwga%2FILeLuFfWB%2Fjg2uydhwlw7K8Z830oeAOTQygZQyEr39sKfo%2B3T%2BbDdG88CpjFGbrNoevn91njAFayXC%2B%2F20JyiO9mcZatBb4nZbk9pSdcTqank2U80a7o9RmzKccAnVPGe6ca5kbf0yuMzqeVK3bLGt2Zr79SM8JRbKb1IusEws9iHwgY6pgEbGL0LXG9zb8aTrZmzTX%2F7Q3Frt9hYTbtx49Wdzak%2Fc8ylbxNu48dxIwPfX95ZHTMfHI38eqfGHUYTPuK22RJvO2Md6buASRfT1S1LvGjjjM9IoB%2FmqasXlPBYw%2BMGQVCrOxkHD%2FRjEX99Pt5tX6oAeCl5McaKMp95sN9rOV%2BGyjkZAFs2S1mudfdVRrhlc2%2BCgGL95eDSdjU%2FP9KAFwBPQ%2B2UCUDa&X-Amz-Signature=4b026e00a763eccd0b62b4fd2a63aa983252337f34f1e77721216406f1297b43&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ6POABL%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCICtE%2BRN6wXVXh%2FRsg8w90TxU6Od30NyaVCROVm6NZlXaAiAYIgfO3gtKOO6vPF3tLzlRkU2OKgSPa%2BFOgaOV%2BmN5TCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMOVlWnYlWYjlTU6BVKtwDwJE6lku3Doy1t8jVi0mJRAJRGJrammRN7pCY2EpJx9YagUUquMJH6MDzqJt9mc%2BueNMjddSVh5K9wkLMS1jq4v%2FbQ7ZqHrX7T3k%2B%2FVX%2BJxkqECsL7FSS93MrEeiVYPCfihjcAkztDP%2Bqo2wt9UqwWJetPKjSC8LD9s5gD9dkU%2FhlXDyZp4sA85NDbzUBqW4MJmUU%2BAbbOwOmEcsy7byiL%2FSX55%2BHmf69v1J90ixJuv5kTp5B5sXveIzEf22j%2BMqcFRqWOztE8RzApQU5mq0L%2BZTKkJhCWPBX1Tk5V93rRtMIX4J7ciWvVFZC4NDqhyZICV91k0TGjEmY1y3BTSEoTDwOjPnKpKgaA%2FWN7Oh%2BgewZntJWDbXUyfOU9EcXaU0sM3X1Ab4VHvQgBZkDvU%2BVZhtwtbzLPckx4bb%2BQA9oZIpMJMNDs8vZLAAD03E%2FNQAlHEcssJnRoSEiM8Hwga%2FILeLuFfWB%2Fjg2uydhwlw7K8Z830oeAOTQygZQyEr39sKfo%2B3T%2BbDdG88CpjFGbrNoevn91njAFayXC%2B%2F20JyiO9mcZatBb4nZbk9pSdcTqank2U80a7o9RmzKccAnVPGe6ca5kbf0yuMzqeVK3bLGt2Zr79SM8JRbKb1IusEws9iHwgY6pgEbGL0LXG9zb8aTrZmzTX%2F7Q3Frt9hYTbtx49Wdzak%2Fc8ylbxNu48dxIwPfX95ZHTMfHI38eqfGHUYTPuK22RJvO2Md6buASRfT1S1LvGjjjM9IoB%2FmqasXlPBYw%2BMGQVCrOxkHD%2FRjEX99Pt5tX6oAeCl5McaKMp95sN9rOV%2BGyjkZAFs2S1mudfdVRrhlc2%2BCgGL95eDSdjU%2FP9KAFwBPQ%2B2UCUDa&X-Amz-Signature=350f1a6f91df3ee7f8c3a8e334eb80d5b563cc3c57d60a4b02fc807af513ce4c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQDT4HZM%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDj2%2FxzMulj6kUUFfiuVmUy%2FBuQqrcL6TsR4snQXbwzrQIgPP0lqwU7Fk99xE8vpGrYXVR5%2BdrtLaaV5ciwHSFC3J0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJ87I7qjRyEa9uvXkSrcA5sDP56DBUYgXcv4mohLbzrnopaPUE8chfVn9yvL7TYZ1AWPimKPP29HFHr1NVXeAwm5tnwoNBAXxZejL9aQS65e9%2FQ0LfzHhzwmSxJJOCdtYNQ5YfePst6jl1FG9fTJmG%2BCZ6JPe4Y%2FWI3fKfnzdSIu9JAuYI4mhDeHlqGfhuthqc3Exi4ltDG0PfSsxDwjGgENkrmJP2zOZqwGohgfXrU2EV11jFxdzfjYTS45b7pamqimnrzjx9czYCyD5RjBhDMSOJrL4xL%2BpOMBXAzj4xR0dIWvOxYAX6gkCMj1pivxQT9%2BcbrQoKV2BZW5HDXdj2YLAaDrDsJhZ6aeow2xFGENzAcCCCRmrTLZcyMHrqZSULUIu7o%2B69B3Xv5J54XTXA88%2F0I2EAsXXGcV%2FAOjkGN4y3ih0%2B5B%2BNCpL%2Fssys6uHVH2M%2BVx%2BxmOhH8p3Mriv4ZeAK7x5LjFbMOQrk8pSZvlkrx9sAskddUlbIGd1dxcFcL6JwiTik%2FDQrCrcT2h8StYanCph7BnC1Lna%2BG6%2Bxx8RSTOd9mVKXmaj%2FYjixK5igLr8jckEXTf38fpK3dpJSE%2F6Oq3cPSM8RJRTFMatiTvfxmusSBvqXCJAS1x366IQmjocIB7Wrejc35wMJPYh8IGOqUBbY6hC7IdbG23rhAB49PBD8dpt6oDpKeVlHbjWeGXYbHtxobFzE6%2BiBd7qFxzsHaXTuJhV%2FDKZ1vLUf4rzZcVNc5GbJp%2BleXN4PeNA8ck6irMhXLJlFK3BcA3lfUE%2B7OosDkA5Bd8bxAsj2ZGi12g18B6HTO9i2RwFHbfqV0q9HDdTArKuRvHeLaEPeL4%2FiE7yVlXSXmQF8nn35SGhlyFmTqlr1pv&X-Amz-Signature=da3d240a902d30bde1a7334b5158467f077d19e0fb39b409c412695963b215b3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QYEVOK4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIDy%2BqlEsr20lz5qGFjI2A%2FmikBSLaym7CLTH%2BAKENmvFAiEAlt7yEsCm%2FMyWsbEcrf5KeBZZJETguZ2H%2BMBnpwTSRA8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDxL6Veg3i0vbtFFKyrcA6CnHlJNaeuEq444sDjIazE4PEKMJVEGPTqF7M0raw8%2BvVnXiFGbILfOrVUqXLPtUENTLgx5aNwWFvjVJYZWOhv1BDPqeI3sRITIlbjobz6JFPCv4lvbomT4FFOt%2BHJT7JNJvaFopWYc1U5Dp1fIQA88t%2FxkuTVEXhv2muA9f%2FktabFko1BrghbUJFHCiGcB1JvSLq%2B9PxG6VC6dhGET9f3xG0u6dsr%2B%2FrAlSSU%2FO9Z1X20YkiiFYKh1TFEnx75bfod1g58QogV4XiUrje2sKB9v2xaHc7Z2TcFWrIfCJysLZUI8U5Csw0K8c434aawGKeBBrJ1XOdr4dUraZK85rLARldFb3qpDtw%2BZZZ3nO0bGqCYujmL7LOac41seHLJ%2BXDsbCSqINfWODcGiK37Zj6W%2B4WOTuijPqEpBQgygFDmmnz%2FzRIkQpB%2B3F3rn1QIgC7%2BFm8e8v6SXxl8gxBql6l4Em77m2UgwpWNNZnHvU5q3dTEzVDlksK5Ogf7xO3kFtY8W3qMqWs6mBm%2F%2BMqc9xlk1iC0wvupBkKhN3xQPZc3dMV5HJABhmcy6xTjTR6xH5365wKUIyP5rQd8lJFpEiZsWu%2BOWqA6b9bTXnXE0BqoJiL4VkIIjGOyrcW7sMIDYh8IGOqUB4v2yLx0M3sEOtPGtaW7RUgnFrCR8Xw%2F1AcSOpXhxXgxWKUpY7PENvkcAfq28mq%2BYDjdkQfMRx3vZDCeJgVXuzJI2JSBW3i33J1dhKa5n3s8cHBX8vQuLYJMcABgXTD2FhTYlz2fofAplX1sevISlySAu8TcI3bPtMO63mccwD2deSikbdZVJ1pW72dLs4iah7%2BA3qv02HTlqGFVl7cX%2FplqAxCNo&X-Amz-Signature=45e204e29a98e445d767d04b2492eb48bd5850c878e4b4d52da09e88d4f57647&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ6POABL%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCICtE%2BRN6wXVXh%2FRsg8w90TxU6Od30NyaVCROVm6NZlXaAiAYIgfO3gtKOO6vPF3tLzlRkU2OKgSPa%2BFOgaOV%2BmN5TCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMOVlWnYlWYjlTU6BVKtwDwJE6lku3Doy1t8jVi0mJRAJRGJrammRN7pCY2EpJx9YagUUquMJH6MDzqJt9mc%2BueNMjddSVh5K9wkLMS1jq4v%2FbQ7ZqHrX7T3k%2B%2FVX%2BJxkqECsL7FSS93MrEeiVYPCfihjcAkztDP%2Bqo2wt9UqwWJetPKjSC8LD9s5gD9dkU%2FhlXDyZp4sA85NDbzUBqW4MJmUU%2BAbbOwOmEcsy7byiL%2FSX55%2BHmf69v1J90ixJuv5kTp5B5sXveIzEf22j%2BMqcFRqWOztE8RzApQU5mq0L%2BZTKkJhCWPBX1Tk5V93rRtMIX4J7ciWvVFZC4NDqhyZICV91k0TGjEmY1y3BTSEoTDwOjPnKpKgaA%2FWN7Oh%2BgewZntJWDbXUyfOU9EcXaU0sM3X1Ab4VHvQgBZkDvU%2BVZhtwtbzLPckx4bb%2BQA9oZIpMJMNDs8vZLAAD03E%2FNQAlHEcssJnRoSEiM8Hwga%2FILeLuFfWB%2Fjg2uydhwlw7K8Z830oeAOTQygZQyEr39sKfo%2B3T%2BbDdG88CpjFGbrNoevn91njAFayXC%2B%2F20JyiO9mcZatBb4nZbk9pSdcTqank2U80a7o9RmzKccAnVPGe6ca5kbf0yuMzqeVK3bLGt2Zr79SM8JRbKb1IusEws9iHwgY6pgEbGL0LXG9zb8aTrZmzTX%2F7Q3Frt9hYTbtx49Wdzak%2Fc8ylbxNu48dxIwPfX95ZHTMfHI38eqfGHUYTPuK22RJvO2Md6buASRfT1S1LvGjjjM9IoB%2FmqasXlPBYw%2BMGQVCrOxkHD%2FRjEX99Pt5tX6oAeCl5McaKMp95sN9rOV%2BGyjkZAFs2S1mudfdVRrhlc2%2BCgGL95eDSdjU%2FP9KAFwBPQ%2B2UCUDa&X-Amz-Signature=9a2a4c35ee01b28bafb29f5cf9be2f35ead7301512e174553a3293284594d13e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
