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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYVWKPBJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH066qPEby54M%2FLh0g41VQGJypITqHbFV3mRE37M%2BZVTAiEA4B%2FwmAE5uXDcpB6JGbfZAJOj9GLnGF8orJATXm5Xm80qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE92kr9GeP4H3cmNBircA9IY3cpyfPitrfzIe%2F5HnLh%2B%2FDeEGef90RskZ7Tpu5png%2Bm0NXr3txstnvxoWwCVWvqcnDt4xKddcoCMtwPj13AaRnE4yhFhLmUgscX%2BZdjZQHO1GWHu%2FLPjKqxwQanVUtvzaO9LVVxeZ8bpHaobYAm1CWaxYQy3T6OiwmNY7W5FnqmXtbWj0g7s%2BlTigtCFcCRbDHZlgcRIyTLaIkgz2FkSGnkDE5lK5wjyz4aBQrrijGL%2FFDbYB7KF8WMAWqpxigkuC2KeWEw4wkiLTqyiB%2FpLBWPX1iEsFhwCjf6161PXIpoPc3R5ColMHnK1mweMGDzxP0fovn59SodWD71WsS%2FmvCk7U%2B7N9P5E%2BA7jXU597%2Fgl8mn1ubjFzcgU6RadrRQTOhzwCay18ELc94douH%2F1wV%2FBOLwbjTQ6iiJHbkQxtlfgET6LCNsI%2BQoBS8Xdiw%2B7Yt%2FYmENF53qpkjhzDtSRD9g%2Ba5KPKwNDy1C%2B55cFXwoQ2a2ZkwQX2zauWSnD7T5QHsdLR45P3iGWS%2B9wKxqg7QEXp%2BnkUNQvFAXc0UxLT2HcRo7vyOWZEXURAbPo2OdU%2BSmU%2Bw5ulD2dBUMvkL9WUjIq%2FPJnn3M%2BAb4M1R7sFgkffxavcDdt5mqNMPGd5cQGOqUB%2FnM%2FZtJgHin63sBIsyj%2BK05p1MdmPuN%2BBgKAJoAJxTHLL5sCj2Axl7F%2BfVsSnJuyFiwsCJPfUSDnjKZaH7itIoS0FxEljdmG3YKfNO6wqr6K0PEwAi8siqE5yx8OExFdOH5EJG8y%2BC4e3999fFgJmC7YKtdAsRi%2FA2bI0yzSZvsda5SA6LgPReKypfmWOOpAhafYaGL23Qfqd%2BhK1fouFEhgTyP7&X-Amz-Signature=79d0a7112cfb065c3a5b9d26b271889fc8058ba26ee6d0f6b2bd8267d9bf2e30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYVWKPBJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH066qPEby54M%2FLh0g41VQGJypITqHbFV3mRE37M%2BZVTAiEA4B%2FwmAE5uXDcpB6JGbfZAJOj9GLnGF8orJATXm5Xm80qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE92kr9GeP4H3cmNBircA9IY3cpyfPitrfzIe%2F5HnLh%2B%2FDeEGef90RskZ7Tpu5png%2Bm0NXr3txstnvxoWwCVWvqcnDt4xKddcoCMtwPj13AaRnE4yhFhLmUgscX%2BZdjZQHO1GWHu%2FLPjKqxwQanVUtvzaO9LVVxeZ8bpHaobYAm1CWaxYQy3T6OiwmNY7W5FnqmXtbWj0g7s%2BlTigtCFcCRbDHZlgcRIyTLaIkgz2FkSGnkDE5lK5wjyz4aBQrrijGL%2FFDbYB7KF8WMAWqpxigkuC2KeWEw4wkiLTqyiB%2FpLBWPX1iEsFhwCjf6161PXIpoPc3R5ColMHnK1mweMGDzxP0fovn59SodWD71WsS%2FmvCk7U%2B7N9P5E%2BA7jXU597%2Fgl8mn1ubjFzcgU6RadrRQTOhzwCay18ELc94douH%2F1wV%2FBOLwbjTQ6iiJHbkQxtlfgET6LCNsI%2BQoBS8Xdiw%2B7Yt%2FYmENF53qpkjhzDtSRD9g%2Ba5KPKwNDy1C%2B55cFXwoQ2a2ZkwQX2zauWSnD7T5QHsdLR45P3iGWS%2B9wKxqg7QEXp%2BnkUNQvFAXc0UxLT2HcRo7vyOWZEXURAbPo2OdU%2BSmU%2Bw5ulD2dBUMvkL9WUjIq%2FPJnn3M%2BAb4M1R7sFgkffxavcDdt5mqNMPGd5cQGOqUB%2FnM%2FZtJgHin63sBIsyj%2BK05p1MdmPuN%2BBgKAJoAJxTHLL5sCj2Axl7F%2BfVsSnJuyFiwsCJPfUSDnjKZaH7itIoS0FxEljdmG3YKfNO6wqr6K0PEwAi8siqE5yx8OExFdOH5EJG8y%2BC4e3999fFgJmC7YKtdAsRi%2FA2bI0yzSZvsda5SA6LgPReKypfmWOOpAhafYaGL23Qfqd%2BhK1fouFEhgTyP7&X-Amz-Signature=3f0169896f092eff57530c181ec85e38439539310f42aac30ce03c5b2abe8534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYVWKPBJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH066qPEby54M%2FLh0g41VQGJypITqHbFV3mRE37M%2BZVTAiEA4B%2FwmAE5uXDcpB6JGbfZAJOj9GLnGF8orJATXm5Xm80qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE92kr9GeP4H3cmNBircA9IY3cpyfPitrfzIe%2F5HnLh%2B%2FDeEGef90RskZ7Tpu5png%2Bm0NXr3txstnvxoWwCVWvqcnDt4xKddcoCMtwPj13AaRnE4yhFhLmUgscX%2BZdjZQHO1GWHu%2FLPjKqxwQanVUtvzaO9LVVxeZ8bpHaobYAm1CWaxYQy3T6OiwmNY7W5FnqmXtbWj0g7s%2BlTigtCFcCRbDHZlgcRIyTLaIkgz2FkSGnkDE5lK5wjyz4aBQrrijGL%2FFDbYB7KF8WMAWqpxigkuC2KeWEw4wkiLTqyiB%2FpLBWPX1iEsFhwCjf6161PXIpoPc3R5ColMHnK1mweMGDzxP0fovn59SodWD71WsS%2FmvCk7U%2B7N9P5E%2BA7jXU597%2Fgl8mn1ubjFzcgU6RadrRQTOhzwCay18ELc94douH%2F1wV%2FBOLwbjTQ6iiJHbkQxtlfgET6LCNsI%2BQoBS8Xdiw%2B7Yt%2FYmENF53qpkjhzDtSRD9g%2Ba5KPKwNDy1C%2B55cFXwoQ2a2ZkwQX2zauWSnD7T5QHsdLR45P3iGWS%2B9wKxqg7QEXp%2BnkUNQvFAXc0UxLT2HcRo7vyOWZEXURAbPo2OdU%2BSmU%2Bw5ulD2dBUMvkL9WUjIq%2FPJnn3M%2BAb4M1R7sFgkffxavcDdt5mqNMPGd5cQGOqUB%2FnM%2FZtJgHin63sBIsyj%2BK05p1MdmPuN%2BBgKAJoAJxTHLL5sCj2Axl7F%2BfVsSnJuyFiwsCJPfUSDnjKZaH7itIoS0FxEljdmG3YKfNO6wqr6K0PEwAi8siqE5yx8OExFdOH5EJG8y%2BC4e3999fFgJmC7YKtdAsRi%2FA2bI0yzSZvsda5SA6LgPReKypfmWOOpAhafYaGL23Qfqd%2BhK1fouFEhgTyP7&X-Amz-Signature=56cf2f0cf41dbd9f4604ceca99a91738a5b0766a7712698453d0e85df97aa93d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MZNGYVX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrdzYahsP8c5iD3Hv9YO2ETap6b%2F%2FUcxfV4H4Brsaz0AIhANi6N1IsCY8KKcsZzlSxXdFEtKzbehUDajzzKC860gzpKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxx%2B3sF1IRDe%2F37fjMq3AN0QEXqlY2AOhS2CQAFNICgqPClunGl%2BGaRLwocsWSqUp5FMk%2BQzv0vFf3qw05599zdwTTzlJ5Mi7MWO6hx3uceftyTq27A5qw2caLTAXmHiEmJjrMbknPl6MBP9sn3cTccMQfLmtEp3K8sY%2B%2BlsMKUtxl1%2BKJTPfSwLeNDhiBH8NKZ1kkIdXHj9TQqX8kf0fHKBKEALiRH%2BFtFsyZg0mL36EBcHXjSOnkRc155guTsfji527%2FAok%2FUc0j7oLlfMtNRjyj%2FB%2BHh2ZcdBTpdJtuooYKz%2B9TYSDuCrMPEBYlVQKU2XdOHMGIRFPeK7s9aNkHfioqTkuZ6vwcazfwzfBOrcSK6R5MnMpNWbfqlHMl9Pcdhk6fYbBeu7xZfkG%2Fxc1U5o%2FQU2Xmhs6OrDy4Mmu8hSQeUpMWgvsBFmq91EseindWK4rm2Yu0XxGLYEwcRnifazBCfl9lyS%2Bc8gbWqKVCWZHOCr8EibpahVnX4SdOqU2L%2BIpCdzhciQs8At62rotH493HGDYXuRcVAF1WAhHQaloaUjNiWRKAdffQuUS4EOP8hN9MNiWi3bW7x8X02zmVKUqdCuXItRHP0DRRLtY3FO6bzxrscQs93e7D8hWa2SCB5rnCok0g%2FGvc3oTDGneXEBjqkAeYnX3XgvUTTHPDqFwPjufXj%2B2y5BTnj07X7jeOHsgt7yd8KlsEjtfn%2FwrEunxXXY9UgycDcvut%2BfCF0lQvm1W02avAlcQRVisyktvsZSilf7Ea%2Bzu49ggnh6tQSvQvZ2FE1ZZly55ORKabvyEhO4yzaG46ehEaa47dfF3BvN3IGrtBVZP3YpkxvZORz9IiaWmEpS8F%2FQkaqUIoRsggyiaCqxw1Q&X-Amz-Signature=0810123022cdc03a5f7d0715e4b552ef9e6cd80220db135c7c6d80660e203bca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MLN4JDM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAThz%2B2Sph05FLz8m7hinENVyCKubLdPMSMHAOk0z8WYAiEAtXLjWUD%2Bkho%2FjY6vQR8C%2BkEK7eu27YbGswwFtFj%2B04QqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6G3DtP3dS%2BZ1JuVircAxwoX70VNXZiJeytZeZyYrMg5lq%2BZjNHCBYnmPYUiIoAj%2FyqUbZNKfcz6DSegWl7MTHvNI73WWQ5Kd4syy1uiEgh%2BPPCTDkejyop2CINI98zcW3zWZXCKJglIHoJ%2FgTaMR8gGJCxUKmpXinWkAPNu8I7garliZhJhWX%2BIHCsbAr00uzDlYjrPyQg7UlLRHzpT%2FByE124yKOvheThGRyynDx9UqQn5DpW5HBeWFKyn6GUdn6P9YgWlf7xq2qLosYlUqIbp2su15WSmN%2BWpfcEsSa5H5sSfAN2F38%2Bz32TP%2BVZxCV2WbbuUFISc1U7hnbYjpAYStNwTA11G1ccWliDg5yHuBNHffxS1uSGaMZwWfsk51mevdKA1aqrmqwDzJj1%2FdXeGYdj8Uy5e9jxs7i0TUfV%2ByBaor6gwyLnqzz4ClC9pZhdwgtz9MA3WIdaA8OuS6u2RocbYg6vPBelogO8mn81tfrCxldWPGycd1YOLb0pr0VpzFBoH2jEkRtGt%2F8y3QLfbr9BugHlX23Z9W6rqw1jl1QRgAVxHxM3tD8r7DfvazVqRjQj90Xy1zbQ4dhMxZI%2FN5ILI%2Bhs4Ls1QYBbkZQx6Il6L2%2B%2FSYCujQFxZS2BEyxGVY6J8%2BOlqoAVMJGd5cQGOqUBWfJDbeChDEl21tas8JxOm2lh%2BSVCDdmzgbwDqCaAxZgA0T19Xn9ZdxtxhHNVcjhoau3sy6JB9%2BSI1yRh2T6MqXAqmmmP8cUH%2Bq5LGonnhCysrdl4%2B477%2B%2Ff69L7QNir75IvnBaZhN%2B%2FX7NE6uXJjGsxNb41MGpQS4OGXpedzoLtqZrq8K%2Fr7akDrg%2Fs1n5HWcFn%2Bihm4c0Wx%2F9M1FVvRHvZYk4oQ&X-Amz-Signature=12fbc68eb70a44254edf1d296f32c520d96a0a15784d4628ccddccc1c658f319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYVWKPBJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH066qPEby54M%2FLh0g41VQGJypITqHbFV3mRE37M%2BZVTAiEA4B%2FwmAE5uXDcpB6JGbfZAJOj9GLnGF8orJATXm5Xm80qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE92kr9GeP4H3cmNBircA9IY3cpyfPitrfzIe%2F5HnLh%2B%2FDeEGef90RskZ7Tpu5png%2Bm0NXr3txstnvxoWwCVWvqcnDt4xKddcoCMtwPj13AaRnE4yhFhLmUgscX%2BZdjZQHO1GWHu%2FLPjKqxwQanVUtvzaO9LVVxeZ8bpHaobYAm1CWaxYQy3T6OiwmNY7W5FnqmXtbWj0g7s%2BlTigtCFcCRbDHZlgcRIyTLaIkgz2FkSGnkDE5lK5wjyz4aBQrrijGL%2FFDbYB7KF8WMAWqpxigkuC2KeWEw4wkiLTqyiB%2FpLBWPX1iEsFhwCjf6161PXIpoPc3R5ColMHnK1mweMGDzxP0fovn59SodWD71WsS%2FmvCk7U%2B7N9P5E%2BA7jXU597%2Fgl8mn1ubjFzcgU6RadrRQTOhzwCay18ELc94douH%2F1wV%2FBOLwbjTQ6iiJHbkQxtlfgET6LCNsI%2BQoBS8Xdiw%2B7Yt%2FYmENF53qpkjhzDtSRD9g%2Ba5KPKwNDy1C%2B55cFXwoQ2a2ZkwQX2zauWSnD7T5QHsdLR45P3iGWS%2B9wKxqg7QEXp%2BnkUNQvFAXc0UxLT2HcRo7vyOWZEXURAbPo2OdU%2BSmU%2Bw5ulD2dBUMvkL9WUjIq%2FPJnn3M%2BAb4M1R7sFgkffxavcDdt5mqNMPGd5cQGOqUB%2FnM%2FZtJgHin63sBIsyj%2BK05p1MdmPuN%2BBgKAJoAJxTHLL5sCj2Axl7F%2BfVsSnJuyFiwsCJPfUSDnjKZaH7itIoS0FxEljdmG3YKfNO6wqr6K0PEwAi8siqE5yx8OExFdOH5EJG8y%2BC4e3999fFgJmC7YKtdAsRi%2FA2bI0yzSZvsda5SA6LgPReKypfmWOOpAhafYaGL23Qfqd%2BhK1fouFEhgTyP7&X-Amz-Signature=6687f3e7959cc9640985589a33c2cd1aef8846f8cf2f9c206f84ea2cf9f13d76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
