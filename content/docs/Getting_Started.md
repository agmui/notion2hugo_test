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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWNYYVUP%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCfxoif2OFiPcXn77z5nu1XJcyFIWS6xCjE47bMTI1IXwIgQIvfhAVsmZIWjtUOBpyelk4qSAk%2BDxSuhXyOqJzCkREq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOdGY0SJ%2FdIH0krEkyrcAwMrT8QioyyV1SP6U8c9zbFspG2uGAg%2B0NR1L5a7zDM%2B%2Fas6iN%2FXiWN11SeAYRwvifrlTuFQmGgsEGsrtcvgvsioZH79hFv5k3zoS%2FSu%2Bps7mXlwkkjnJhn07l3y%2FcHZnZ7U1pi59mIxhI%2BRyEkyARUvqJwqg5X4NS0JByNgfGQywbkGUp5ZsJK7aXl%2BwqR9mLjmkXlLd6Wg1Ws0s7uZUL2VGxAReGPwMGFMEjVyqv8aygaFPVMrceyameVe%2BlAA2mvxPVl8RIWi7HroYTiI%2FlybnK1N4yv6EbthtY28H1thmM46jxeoR%2B0a4UUZcAZ2AuGJbwInPEpkTyDbgHcExMbD8nPOtMN0vL5Y5d4F2AcETTAqHo0ar23dm59rrlbxLTADssaeKEP7TaBejoWyQQNt6bJ96UzTYaimVtiho4dmR4grVxNn%2FGfm22AmzyNRDOhDvEUKBvj7CkxOC9FKx8UN9th%2FNbcMlraue9Vs5xnjnBmBGLwz4ZaK4UDPety0lpRyGnYLctWZTPCResEb73L1N2GqVyeizN8GlTVLua%2FzxZHUe5xQnrwx6mUUM%2FyCUa5crPNNxp1mO%2BRsWsQ%2Bhy3Fh9I5nVOeWGQ%2FBziAqp%2FqKYF3EivIcL%2B61CfLMJnRpMMGOqUBRMveTTvvDIEprvFs7p9VjwEyvIwlbREGqnaYIVIUKkV6MpSLvIMD8bFQ%2Fcf4VHwQy78PxRx70FYHZV2NwSIGeXqLHrTEY0Ciobi423uZo2yOc38nxcjATdIpJP8nds%2F7mc%2BwmPcOO7GA4iJ0gzHaYgdhhPUhel2nQ3p1t0BFgvpQXvmIoG1MfNsLCHgFgfXjHBhHZARLXOOoSG1mncl9UGdMAkVr&X-Amz-Signature=9e02ce20deb7df6bfa5c57c55f63dedcaebfedf1c7025b12adf3c1953097c4ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWNYYVUP%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCfxoif2OFiPcXn77z5nu1XJcyFIWS6xCjE47bMTI1IXwIgQIvfhAVsmZIWjtUOBpyelk4qSAk%2BDxSuhXyOqJzCkREq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOdGY0SJ%2FdIH0krEkyrcAwMrT8QioyyV1SP6U8c9zbFspG2uGAg%2B0NR1L5a7zDM%2B%2Fas6iN%2FXiWN11SeAYRwvifrlTuFQmGgsEGsrtcvgvsioZH79hFv5k3zoS%2FSu%2Bps7mXlwkkjnJhn07l3y%2FcHZnZ7U1pi59mIxhI%2BRyEkyARUvqJwqg5X4NS0JByNgfGQywbkGUp5ZsJK7aXl%2BwqR9mLjmkXlLd6Wg1Ws0s7uZUL2VGxAReGPwMGFMEjVyqv8aygaFPVMrceyameVe%2BlAA2mvxPVl8RIWi7HroYTiI%2FlybnK1N4yv6EbthtY28H1thmM46jxeoR%2B0a4UUZcAZ2AuGJbwInPEpkTyDbgHcExMbD8nPOtMN0vL5Y5d4F2AcETTAqHo0ar23dm59rrlbxLTADssaeKEP7TaBejoWyQQNt6bJ96UzTYaimVtiho4dmR4grVxNn%2FGfm22AmzyNRDOhDvEUKBvj7CkxOC9FKx8UN9th%2FNbcMlraue9Vs5xnjnBmBGLwz4ZaK4UDPety0lpRyGnYLctWZTPCResEb73L1N2GqVyeizN8GlTVLua%2FzxZHUe5xQnrwx6mUUM%2FyCUa5crPNNxp1mO%2BRsWsQ%2Bhy3Fh9I5nVOeWGQ%2FBziAqp%2FqKYF3EivIcL%2B61CfLMJnRpMMGOqUBRMveTTvvDIEprvFs7p9VjwEyvIwlbREGqnaYIVIUKkV6MpSLvIMD8bFQ%2Fcf4VHwQy78PxRx70FYHZV2NwSIGeXqLHrTEY0Ciobi423uZo2yOc38nxcjATdIpJP8nds%2F7mc%2BwmPcOO7GA4iJ0gzHaYgdhhPUhel2nQ3p1t0BFgvpQXvmIoG1MfNsLCHgFgfXjHBhHZARLXOOoSG1mncl9UGdMAkVr&X-Amz-Signature=a6b6c74564f52b5d461bbea3547934dac081d23b0d7d10ec12128786c981c8fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWNYYVUP%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCfxoif2OFiPcXn77z5nu1XJcyFIWS6xCjE47bMTI1IXwIgQIvfhAVsmZIWjtUOBpyelk4qSAk%2BDxSuhXyOqJzCkREq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOdGY0SJ%2FdIH0krEkyrcAwMrT8QioyyV1SP6U8c9zbFspG2uGAg%2B0NR1L5a7zDM%2B%2Fas6iN%2FXiWN11SeAYRwvifrlTuFQmGgsEGsrtcvgvsioZH79hFv5k3zoS%2FSu%2Bps7mXlwkkjnJhn07l3y%2FcHZnZ7U1pi59mIxhI%2BRyEkyARUvqJwqg5X4NS0JByNgfGQywbkGUp5ZsJK7aXl%2BwqR9mLjmkXlLd6Wg1Ws0s7uZUL2VGxAReGPwMGFMEjVyqv8aygaFPVMrceyameVe%2BlAA2mvxPVl8RIWi7HroYTiI%2FlybnK1N4yv6EbthtY28H1thmM46jxeoR%2B0a4UUZcAZ2AuGJbwInPEpkTyDbgHcExMbD8nPOtMN0vL5Y5d4F2AcETTAqHo0ar23dm59rrlbxLTADssaeKEP7TaBejoWyQQNt6bJ96UzTYaimVtiho4dmR4grVxNn%2FGfm22AmzyNRDOhDvEUKBvj7CkxOC9FKx8UN9th%2FNbcMlraue9Vs5xnjnBmBGLwz4ZaK4UDPety0lpRyGnYLctWZTPCResEb73L1N2GqVyeizN8GlTVLua%2FzxZHUe5xQnrwx6mUUM%2FyCUa5crPNNxp1mO%2BRsWsQ%2Bhy3Fh9I5nVOeWGQ%2FBziAqp%2FqKYF3EivIcL%2B61CfLMJnRpMMGOqUBRMveTTvvDIEprvFs7p9VjwEyvIwlbREGqnaYIVIUKkV6MpSLvIMD8bFQ%2Fcf4VHwQy78PxRx70FYHZV2NwSIGeXqLHrTEY0Ciobi423uZo2yOc38nxcjATdIpJP8nds%2F7mc%2BwmPcOO7GA4iJ0gzHaYgdhhPUhel2nQ3p1t0BFgvpQXvmIoG1MfNsLCHgFgfXjHBhHZARLXOOoSG1mncl9UGdMAkVr&X-Amz-Signature=b80e5877d1afc582f3f7567f25e3cd95e3da912f0890d5bab06599fdd28ada1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HZLAWX3%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCICH%2F9%2BszM8NQN%2Fs3uWAaz6ZdKtkJBUBLSGOoOJbvLUTPAiEAvtlHdUndFL6BRXRVU5ptxNGyk38%2B4MK7LmUaXNjxMEEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFTcSiZ4jQvlbs5v9CrcAwV%2B1pbtul%2BZCmCTurXFjwQsnbosakbA7%2FqdQddegbb%2FgL8I4phYDFEwxsK9JPUGuxcuKa%2FYyFs7Hna%2FkOz5vi1vkLlm3NcNXry87HOzUdXkenDxkSlw6iLPSX8Hci44U3Uodyyq9ZzG%2Bn7Vr4Ny48JqD1ZSNBEih6sDkpS2n751ZvwecZVSkugEG0FRuRcK1Fz4wjB3UyE0DIXKd0wJQRWH3R2EfvL3lX%2B1oCFLuXr8XddG37E%2BhaOSLYUyGYaJCvsPsyQ9Q5hj4MmyB7TMDciIBCFsLcq1ZVVQz7wibdZdzmVGfw4z%2FdhWjv6%2Fz6ygVQgYmqmbuc%2Fg0HbS6VBII4flVYUoGhd1dUZb435d%2FdwG9YqjrPhDJre2gRWiptGTfBGiyeIfBC%2F5VFz%2B4ImAMkBltgv7CWScsurMoo5W1CLqpWwozqxKkMnEB4SLYo07vUlLtP4qNMDUpIRkpwzb2IPzB5odlNpH1xKErndMlvgkKXdjXKRm4J6CznIdrhIDWf3HJNk72NMTagdCrd30%2FHXr7B4BwFo8gZre2IGvD8HsXI%2FOR5QCQ9RQ6Qb0V779ADApKuE0Fl8PHRp4uRVFsU0r6gQBwgfpbRMAvGuQuRD4ah41WKHgFfzTrdwpMIXIpMMGOqUB2W5g2DAm8UYvSKJcsGELLlJzUGa8cQN5PSUQo7OA7RE9bDWjNZdnd7m4sOLNDuQZtHKJgq3laj3tPgVGzI89Zg%2BPjUeu9G7jZdmLkMOTyRJnPZX6BP%2Fjoyx%2FHgQU%2FwZBfNvVAhnTZWvPUoTZra9SIMohCcD8RZX9e9NkBtNHnTwLTeoWpeiNh6MUpzHJaQOW9ToJaPEyxp7LfAum6pgwrtqZ4VIw&X-Amz-Signature=bca8030566da8b7b0b8510612fdf480d47e65f7dff1ef5b6213b553e671c6411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIAJHC62%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDY%2BOQS6I2DDfEv6pPa5d0wKXFL8VmKPrqECnY6fImMQAIhAJFIsi%2FL053wCEJLq%2Fceohl4vxVT1%2Beq8Lh7DhgaQ7GqKv8DCEYQABoMNjM3NDIzMTgzODA1IgyF8JaUD92%2B%2F8J2g4Yq3AOdwwFChQ5iOq9rSJ9q5%2BC333IR3omr0PNd%2FfbDbdXs1H1C5tbB4s5g9ysM1jwyhJ1TQEWkIv%2FXRvX7DjOOmN6NSoRsb6lapc37vlbLlsZGGzU57XduA%2ByHwMzXaD2oxs74rR6vfoIyf3ax9nmtZ%2FgV9lF%2BYe9f%2BPTpLs6WD26NnkYo5ze5%2BtknkusgUxW1kboqZFofnHfKesVe9dL2EexGujEZUPx5uPsX9oKO30AYqA0usSua2XQ3ucIKGKihB0Sv3nn42Y5YhfPrz%2FiTzw6MLAIIC7BNGBnK2qmLNKzyzLNJjgoIx5y5Pi19%2FLHY%2FmScAtBXjwL5mC8%2FNEwsVfxwV8VTCnAk1ptF4WlxqDmyNOFz0KOh75ybFHFaunABoJcmuSBXkN7SW08LDSEnjG3%2FGiIjOW%2F7Tl02LVqIUpGXMZ98zV19qwdGxayMpKBf4nzj4t3DlIVm2SLKJRMa4be7QKC6SUwORRgKcR3En3Vg8YoYNkAvzXL2y7FkplhOeaoOZFWuTMw5BDyzkaqMWXIl57p9aZJLGwYaTKsBhYEwupdakesGODUkJ%2BTXf6DRNv4kWY%2BcFS20pag7msK5uX5%2B3z5XVjIB%2FiQw5rroEg86EvA6H4s5NUPVhuof1jCNzKTDBjqkAWRxSa3LnVFymXG65oK6hYMuP1CseX9TOeVfRI1HopGezAAYBmixwX5JlcrGH%2B5dz%2B31JOKMZ8W5U3lYXyv8Rsg9xA4jpEP%2BDH44XgjE2z%2FDg87%2B94QT4INg9i%2FX27GTcyh3xH%2FnaVg0N%2Fik9%2FpAxwVeORh0%2B3Fd96bG2TOpm9XgSPs87Bu769WeOlzkdJ5xo2RNlg5Us9kpabDyryWZTDXtWUmO&X-Amz-Signature=48317c5ffc4f64c56d123d9ce6faac6192418ab385f0af94fe1bd7eec74b56a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWNYYVUP%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCfxoif2OFiPcXn77z5nu1XJcyFIWS6xCjE47bMTI1IXwIgQIvfhAVsmZIWjtUOBpyelk4qSAk%2BDxSuhXyOqJzCkREq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOdGY0SJ%2FdIH0krEkyrcAwMrT8QioyyV1SP6U8c9zbFspG2uGAg%2B0NR1L5a7zDM%2B%2Fas6iN%2FXiWN11SeAYRwvifrlTuFQmGgsEGsrtcvgvsioZH79hFv5k3zoS%2FSu%2Bps7mXlwkkjnJhn07l3y%2FcHZnZ7U1pi59mIxhI%2BRyEkyARUvqJwqg5X4NS0JByNgfGQywbkGUp5ZsJK7aXl%2BwqR9mLjmkXlLd6Wg1Ws0s7uZUL2VGxAReGPwMGFMEjVyqv8aygaFPVMrceyameVe%2BlAA2mvxPVl8RIWi7HroYTiI%2FlybnK1N4yv6EbthtY28H1thmM46jxeoR%2B0a4UUZcAZ2AuGJbwInPEpkTyDbgHcExMbD8nPOtMN0vL5Y5d4F2AcETTAqHo0ar23dm59rrlbxLTADssaeKEP7TaBejoWyQQNt6bJ96UzTYaimVtiho4dmR4grVxNn%2FGfm22AmzyNRDOhDvEUKBvj7CkxOC9FKx8UN9th%2FNbcMlraue9Vs5xnjnBmBGLwz4ZaK4UDPety0lpRyGnYLctWZTPCResEb73L1N2GqVyeizN8GlTVLua%2FzxZHUe5xQnrwx6mUUM%2FyCUa5crPNNxp1mO%2BRsWsQ%2Bhy3Fh9I5nVOeWGQ%2FBziAqp%2FqKYF3EivIcL%2B61CfLMJnRpMMGOqUBRMveTTvvDIEprvFs7p9VjwEyvIwlbREGqnaYIVIUKkV6MpSLvIMD8bFQ%2Fcf4VHwQy78PxRx70FYHZV2NwSIGeXqLHrTEY0Ciobi423uZo2yOc38nxcjATdIpJP8nds%2F7mc%2BwmPcOO7GA4iJ0gzHaYgdhhPUhel2nQ3p1t0BFgvpQXvmIoG1MfNsLCHgFgfXjHBhHZARLXOOoSG1mncl9UGdMAkVr&X-Amz-Signature=51e9f8062dd140632f572d4ce82426779e790470294e66aff825c0866eeeb1d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
