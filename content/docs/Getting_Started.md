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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7IFVZXP%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhPwhQOeDAD20uvITq7lpzjDD873HIVr26tuBoATtNkAIhAJgewtS0x7ZfYTVZFWZMj1orLsWFq6aKtj0ltMKhhNG8KogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEsaVnor%2BBykkw1Scq3AP6ts9yjWEIcUtAjvACR4e8Xi%2F3QGrJlNtGtfj4Xnz4BL9uVDQoPT5%2BrK41HyOHk8Sou34cTJR50dA5CAr6XLknsRjrwL%2FP%2FIt7s039%2F4CRTCzlv4FOT3HP7GMMg3qExqj%2FjYNf9nvmTjEvaUc%2ByCv9kxJ2cBMBDoSfCupVOPREjrpis1r0474nrPINKdFIGcOu2WEw3Bcasnrt7OcTVsq2dT9ZVSNSvRJqzKlm%2F5Zvw16G9xPwaUw7GRGEOul5ZjKsswPRrP0NRB3peRSReLqpN6H6sosCY0oB02m1LGFHy7cqSzs8mnPRQ9M4GUTrG8zqqi3wxNdeQOZ8D2LsZ8MVIg%2BYgt6YABWzz9IO2laM80GMEcFY8MEp65FNzSZaMe%2B2T9lZxxNYn3BFk6V%2FV70lXDXEPLUSpEZtXxUGRsddWrSPTdAlQ%2FO%2F0ONgei8j4%2FqSGwE0yCoAxpdLMEUs%2Bkl5LY1RykXUTZCxmlielFCY%2BBHTOS4XlODBVSXoJNRPKLvK0ge4BLTb6trzICXkStnET9Fa5%2FfVUcB3O66ytkIWXQ2GNtHVZvbx%2BMUhVssjx3cTnsG47AE6d1mw%2F04f%2B%2FM%2FCmfjfN8U8V4PpYjUlhPPvQzjmXbSm8V9OV0W3TCW8ejBBjqkAecKXYzn7jD75yjMPOt6T1lcOcM6029xlt%2BLP7PcKbNuvHLc06IKaam24XK%2B3zlcNbe91vo6vduA8l8u5nXrqXdD3RKQrSu2rox9U8iduFKgKyYVqB6Lqqx699eRDwK0CuIWvq6Wh346dNvnYLtl8wez7mO3njMGO%2B0oSNsyf2u9kLBaUjgplyDIakU5CLDSolQm649BwC0yQ3sySHPwHyYAj5eW&X-Amz-Signature=6e33a84d1a897e8571eae033b7bb51311ff5fc626710f24374162b4c2b6a9820&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7IFVZXP%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhPwhQOeDAD20uvITq7lpzjDD873HIVr26tuBoATtNkAIhAJgewtS0x7ZfYTVZFWZMj1orLsWFq6aKtj0ltMKhhNG8KogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEsaVnor%2BBykkw1Scq3AP6ts9yjWEIcUtAjvACR4e8Xi%2F3QGrJlNtGtfj4Xnz4BL9uVDQoPT5%2BrK41HyOHk8Sou34cTJR50dA5CAr6XLknsRjrwL%2FP%2FIt7s039%2F4CRTCzlv4FOT3HP7GMMg3qExqj%2FjYNf9nvmTjEvaUc%2ByCv9kxJ2cBMBDoSfCupVOPREjrpis1r0474nrPINKdFIGcOu2WEw3Bcasnrt7OcTVsq2dT9ZVSNSvRJqzKlm%2F5Zvw16G9xPwaUw7GRGEOul5ZjKsswPRrP0NRB3peRSReLqpN6H6sosCY0oB02m1LGFHy7cqSzs8mnPRQ9M4GUTrG8zqqi3wxNdeQOZ8D2LsZ8MVIg%2BYgt6YABWzz9IO2laM80GMEcFY8MEp65FNzSZaMe%2B2T9lZxxNYn3BFk6V%2FV70lXDXEPLUSpEZtXxUGRsddWrSPTdAlQ%2FO%2F0ONgei8j4%2FqSGwE0yCoAxpdLMEUs%2Bkl5LY1RykXUTZCxmlielFCY%2BBHTOS4XlODBVSXoJNRPKLvK0ge4BLTb6trzICXkStnET9Fa5%2FfVUcB3O66ytkIWXQ2GNtHVZvbx%2BMUhVssjx3cTnsG47AE6d1mw%2F04f%2B%2FM%2FCmfjfN8U8V4PpYjUlhPPvQzjmXbSm8V9OV0W3TCW8ejBBjqkAecKXYzn7jD75yjMPOt6T1lcOcM6029xlt%2BLP7PcKbNuvHLc06IKaam24XK%2B3zlcNbe91vo6vduA8l8u5nXrqXdD3RKQrSu2rox9U8iduFKgKyYVqB6Lqqx699eRDwK0CuIWvq6Wh346dNvnYLtl8wez7mO3njMGO%2B0oSNsyf2u9kLBaUjgplyDIakU5CLDSolQm649BwC0yQ3sySHPwHyYAj5eW&X-Amz-Signature=1d93fb7c6d85b0ae9a6399bb497fd71b84aa43c9e5f2afd902fe2813f6c1e862&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7IFVZXP%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhPwhQOeDAD20uvITq7lpzjDD873HIVr26tuBoATtNkAIhAJgewtS0x7ZfYTVZFWZMj1orLsWFq6aKtj0ltMKhhNG8KogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEsaVnor%2BBykkw1Scq3AP6ts9yjWEIcUtAjvACR4e8Xi%2F3QGrJlNtGtfj4Xnz4BL9uVDQoPT5%2BrK41HyOHk8Sou34cTJR50dA5CAr6XLknsRjrwL%2FP%2FIt7s039%2F4CRTCzlv4FOT3HP7GMMg3qExqj%2FjYNf9nvmTjEvaUc%2ByCv9kxJ2cBMBDoSfCupVOPREjrpis1r0474nrPINKdFIGcOu2WEw3Bcasnrt7OcTVsq2dT9ZVSNSvRJqzKlm%2F5Zvw16G9xPwaUw7GRGEOul5ZjKsswPRrP0NRB3peRSReLqpN6H6sosCY0oB02m1LGFHy7cqSzs8mnPRQ9M4GUTrG8zqqi3wxNdeQOZ8D2LsZ8MVIg%2BYgt6YABWzz9IO2laM80GMEcFY8MEp65FNzSZaMe%2B2T9lZxxNYn3BFk6V%2FV70lXDXEPLUSpEZtXxUGRsddWrSPTdAlQ%2FO%2F0ONgei8j4%2FqSGwE0yCoAxpdLMEUs%2Bkl5LY1RykXUTZCxmlielFCY%2BBHTOS4XlODBVSXoJNRPKLvK0ge4BLTb6trzICXkStnET9Fa5%2FfVUcB3O66ytkIWXQ2GNtHVZvbx%2BMUhVssjx3cTnsG47AE6d1mw%2F04f%2B%2FM%2FCmfjfN8U8V4PpYjUlhPPvQzjmXbSm8V9OV0W3TCW8ejBBjqkAecKXYzn7jD75yjMPOt6T1lcOcM6029xlt%2BLP7PcKbNuvHLc06IKaam24XK%2B3zlcNbe91vo6vduA8l8u5nXrqXdD3RKQrSu2rox9U8iduFKgKyYVqB6Lqqx699eRDwK0CuIWvq6Wh346dNvnYLtl8wez7mO3njMGO%2B0oSNsyf2u9kLBaUjgplyDIakU5CLDSolQm649BwC0yQ3sySHPwHyYAj5eW&X-Amz-Signature=0a14e0be83b4d481154e9d2ab79587326a897ce89296f52ccdf1fb68929c18d1&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBK25KIM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2e9Qro8bfK%2B0voU0RtN2IM9%2FJJdJKtjkxTjXePrpgIwIhANi2f3u6%2F%2FaUKFwc4b7rrArNYGZPjY4eadfQKUPiReQoKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzxulhNi7X5CZgXEkq3AOsAZ0AxLHl6q80Dc3wc%2BEmQKeuIvHCFE7cdnXUCWx0YBiNH78Qk%2BZFAbb4Mxr%2F9pFGr2kFSI27xnsxusF6%2Bh46NlTF180svu%2BLRR4Z0EhYzDITnGJlaB9eH8KfxPLXQ6d3sbozZgxLlx4%2FGOUUJFbAJh%2B22H2kfYpztJHdLUCIaShLCUdTNN2NQ6LgVD10Tr59bcmgT3iblC73dPLKeqhoWVuFsduuIP7EuypkCANA743FbtE2dTojpovZCNxTDBYIrOospyenZsvjwmjVT55pcNjmhktjQpOOAquKXW576OplNXARd81aeFpORtBn58TLbubHvZXjBX%2FgLS%2FI7yFdlx4reyilMa7soyO14oiAZG%2BncVAiWD%2FYlykclwtsf3MoDkhCUfrDI9xL5xBTgSli%2BUhj68XgplHM6NPlS7MKm2eur%2FccH1ZGNxxIwo1fckBn4aZtgnH%2Fid9wwwECHOsj172DY5%2Fp5ik%2BwDaUcmTFjjPjS2%2BhT7Bgi6xkXRk03mWUYzoUW7n82AXdiIaRGov7bAtvFeA6VI4rStjnIiWQsUeohqW6IjXCr04v%2F3J3cpBrflvvcHQQRowC%2FGscrtAeLdhJbEYx2IwAo32CsXYzY%2FamHXNDhx8aDZHFlDCH8ejBBjqkAf9FhAYdE%2FV8hRHh%2BqCKe00BZwnkM6p%2BGM3XhiXt2hErcA2bW8O8aJpPRjhDmchvlGhF2yiWFf8sZyQ1VHl1io4brzZ4yN6B607ttoGGNaZDFLeU9clpdENeOpQz50JB0dcGOdIfgRq0ushG6J23lB5U2h63%2BegSjg81YBq10fRJkotX5NhqE0xS37kYNjCkwTP2Y2r8EjtGp8TwbKxVm9eR1yzm&X-Amz-Signature=d678f81fd12ce7e1fcdc92b5a996958f9fb4df39fe89374a52a3097b7c6834fa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XV6NTKS%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDun56pG9v4jvlw8%2Fp9XZ%2FVzfOGOV3qTqPUVBL1G35yygIhAJ%2F2CZgzMt1JJCHOSjGA2HBaSLWer3nLpHvjTMJGwXxnKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0JkBVgJPsJ19QCwUq3AP9dXgChGCSo5k6XFLNolaIA9Yni3aMOPh%2Bf3Miw1LoERIMuTSDN6s%2BnQleQjIiMSHKsVeuDPeLAgJRU8JOZLPU3w8kkgoXRDrJoWpbAe2WT5GrVrD41PmBBc4uY0FsWqazvAb32Obcbmc3CrFSfGX21%2FzCEUzsxxRrpWj41%2BmQXIp6wwligsN2QyJ9jaDHPRY%2BLIa64JNfPZ%2FRdqf3Ht31skmzVhBQ0gM8UUaPzAbqZLEfPwxTez5PNcEEYwAd6Z6A6gx010TQb3NWLyBymCfmsPGP4vak5ZqFc9nfwMN4pyba%2BRICBIMBwEj1QbhlVa8Zg%2B6ix3FthcFgPV2bK5x%2ByJTCkpAKrf%2BTOtsk8kPFRRER5w8Zo5yJWqs%2BjlDPJvZSS7J9M%2BkS2zC%2B%2BXMgVjG8q%2FVLoey9PLyDyFflyEq9SFTJkLKfvu8yLK3yrmwhBBbD0kQuZm6lfVTAeFukF6OQ3No%2F1H9CKqiqfvClFT2yq0mrbg7Ds7D%2F8cm7%2FLMprR1z1QNb03zp099EPIwHmEJoVvpi9uFQc%2B92Cvd9iHfPqRwVG%2FkoShdqqp5CVAeBEbKqYoLOYMi9THVLX72v0npxmiyx5%2BO1ARinhUjyGuIqc%2B2BQY8NAdsbk61pljCB8ejBBjqkAdeb%2FLqUYN5dyYIDDgUaW%2F1labM5%2BA5c1dZON%2B4HX6BBru%2BQ6n97%2FIu78WVOzjTbm5GS7WWlrdLfsfHwT8RO8wa6PD8LstqFTjrmcM6d2rTGkLBmYXTq27AC%2FPRDZZkBeuR3fCdPUL7W%2BKVipuTDMlbw3KUO1mrtaAIucIRdHeVgofaQbjZVgadBv4FH6vDW%2FnO%2F55nIAHLoGTQQlUyx2BATEHpa&X-Amz-Signature=24b2a4cc047b441da18707719cf3fb2d24b9ade72fdfc5f1afef93a34194b078&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7IFVZXP%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhPwhQOeDAD20uvITq7lpzjDD873HIVr26tuBoATtNkAIhAJgewtS0x7ZfYTVZFWZMj1orLsWFq6aKtj0ltMKhhNG8KogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEsaVnor%2BBykkw1Scq3AP6ts9yjWEIcUtAjvACR4e8Xi%2F3QGrJlNtGtfj4Xnz4BL9uVDQoPT5%2BrK41HyOHk8Sou34cTJR50dA5CAr6XLknsRjrwL%2FP%2FIt7s039%2F4CRTCzlv4FOT3HP7GMMg3qExqj%2FjYNf9nvmTjEvaUc%2ByCv9kxJ2cBMBDoSfCupVOPREjrpis1r0474nrPINKdFIGcOu2WEw3Bcasnrt7OcTVsq2dT9ZVSNSvRJqzKlm%2F5Zvw16G9xPwaUw7GRGEOul5ZjKsswPRrP0NRB3peRSReLqpN6H6sosCY0oB02m1LGFHy7cqSzs8mnPRQ9M4GUTrG8zqqi3wxNdeQOZ8D2LsZ8MVIg%2BYgt6YABWzz9IO2laM80GMEcFY8MEp65FNzSZaMe%2B2T9lZxxNYn3BFk6V%2FV70lXDXEPLUSpEZtXxUGRsddWrSPTdAlQ%2FO%2F0ONgei8j4%2FqSGwE0yCoAxpdLMEUs%2Bkl5LY1RykXUTZCxmlielFCY%2BBHTOS4XlODBVSXoJNRPKLvK0ge4BLTb6trzICXkStnET9Fa5%2FfVUcB3O66ytkIWXQ2GNtHVZvbx%2BMUhVssjx3cTnsG47AE6d1mw%2F04f%2B%2FM%2FCmfjfN8U8V4PpYjUlhPPvQzjmXbSm8V9OV0W3TCW8ejBBjqkAecKXYzn7jD75yjMPOt6T1lcOcM6029xlt%2BLP7PcKbNuvHLc06IKaam24XK%2B3zlcNbe91vo6vduA8l8u5nXrqXdD3RKQrSu2rox9U8iduFKgKyYVqB6Lqqx699eRDwK0CuIWvq6Wh346dNvnYLtl8wez7mO3njMGO%2B0oSNsyf2u9kLBaUjgplyDIakU5CLDSolQm649BwC0yQ3sySHPwHyYAj5eW&X-Amz-Signature=b8ab3c64086526d6c13c21ef9f6215b3e3ac37820d00c7c3e2e146da22ed6f4d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
