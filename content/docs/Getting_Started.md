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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB4TEOX2%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIGyGImJO1wrTPEdfaY2aS0Y0WN8Zlu3%2Bk%2FkB6Yy8MU5uAiBoIuYHF2rnXZ8gbUiuTxHCyvn8104UE3UTySLRudno5yr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMM8hnW00avR%2BRBI%2FFKtwDHA0Lzq3kze0CwC3FPkdDObH8joCaWRXyfRELIrJqSFm0GnuhYO5rDvxue63gK6WBRKjR9pBl2uazUbcAuHKHzfOz2oyiUpJcpCDem%2FGC78uaIDHBO3KztGhtGL6wzWMUc2uMzSh%2BDkw%2FRUfKPTkrM5nhz%2BE4Kp%2FeBZ2eRxEchZijRBZopvACwVKAQO2juZfaZVK7Ga%2Bc4XEbVm%2FkqxTyPaW9bng8ybjoouIZphmvJ%2F36BKWRqTjbKRa7mwrZ6yQ%2BEOnbJamAMisq2mIEzklgVwX%2Bkk28pWPNz%2FvjRuOF8Sevgonj%2FAbyndtBCjGUUuVBXwN%2FRgS3u8HEXXOK3fHESK68Ky2LfpWtdPknnGzwtlNCvqouaslxyEXN4xiRVzJqX%2BkNJQ%2BTRq%2BxXwQsXOvodoErECJo7vEWPA2XQ5HcmjHawPl7OM%2BcoS1FK6Y7yxUzOS2vSXsPnSO41WmaylYDEC%2BilCVnY3XIY3MsHRhfR5Dsgp9z27cGN0MKp39NhHlc81%2FLMDOd907EHgHmgv7KMbGOAmYjHgQYDCRQ2SY1Czpoaw%2B2tHTWDNrnqqiY%2BA91NGOnw%2BYGrdddkxOS%2Fbf6yi1XjfnoVxYIykkmQBjCG4zAvLqPITva%2Bpjmn48w%2BaPVwwY6pgH53RcE%2FLhC14P%2FlyFGC7tblatS1PFAvyADD6SlS0d%2B9ZhMv7DSfIltm5Cw4%2BrNXVJRBLhZy%2B9gFEvbB2KjY7b63Kxj7GQNXUSLH%2BlvMcvgvijENbCAIWN7bzZp4JNjxW%2FU4%2F6iC2phbdJRJGdQNxANvZPCApwLRUB16mZ%2BwpcXiQYqxIw%2Bbi%2B8dTx1ntGL5ELG00vhcfCb5dVWXFz4SQ2eZZU9fTxo&X-Amz-Signature=823be4f1eff5a2d80f11456c1ee8cceb84fc450893974683727e862d4a9471f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB4TEOX2%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIGyGImJO1wrTPEdfaY2aS0Y0WN8Zlu3%2Bk%2FkB6Yy8MU5uAiBoIuYHF2rnXZ8gbUiuTxHCyvn8104UE3UTySLRudno5yr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMM8hnW00avR%2BRBI%2FFKtwDHA0Lzq3kze0CwC3FPkdDObH8joCaWRXyfRELIrJqSFm0GnuhYO5rDvxue63gK6WBRKjR9pBl2uazUbcAuHKHzfOz2oyiUpJcpCDem%2FGC78uaIDHBO3KztGhtGL6wzWMUc2uMzSh%2BDkw%2FRUfKPTkrM5nhz%2BE4Kp%2FeBZ2eRxEchZijRBZopvACwVKAQO2juZfaZVK7Ga%2Bc4XEbVm%2FkqxTyPaW9bng8ybjoouIZphmvJ%2F36BKWRqTjbKRa7mwrZ6yQ%2BEOnbJamAMisq2mIEzklgVwX%2Bkk28pWPNz%2FvjRuOF8Sevgonj%2FAbyndtBCjGUUuVBXwN%2FRgS3u8HEXXOK3fHESK68Ky2LfpWtdPknnGzwtlNCvqouaslxyEXN4xiRVzJqX%2BkNJQ%2BTRq%2BxXwQsXOvodoErECJo7vEWPA2XQ5HcmjHawPl7OM%2BcoS1FK6Y7yxUzOS2vSXsPnSO41WmaylYDEC%2BilCVnY3XIY3MsHRhfR5Dsgp9z27cGN0MKp39NhHlc81%2FLMDOd907EHgHmgv7KMbGOAmYjHgQYDCRQ2SY1Czpoaw%2B2tHTWDNrnqqiY%2BA91NGOnw%2BYGrdddkxOS%2Fbf6yi1XjfnoVxYIykkmQBjCG4zAvLqPITva%2Bpjmn48w%2BaPVwwY6pgH53RcE%2FLhC14P%2FlyFGC7tblatS1PFAvyADD6SlS0d%2B9ZhMv7DSfIltm5Cw4%2BrNXVJRBLhZy%2B9gFEvbB2KjY7b63Kxj7GQNXUSLH%2BlvMcvgvijENbCAIWN7bzZp4JNjxW%2FU4%2F6iC2phbdJRJGdQNxANvZPCApwLRUB16mZ%2BwpcXiQYqxIw%2Bbi%2B8dTx1ntGL5ELG00vhcfCb5dVWXFz4SQ2eZZU9fTxo&X-Amz-Signature=46e1f4a41a03d7ebf6a87c39cb112a66cfd53eeea4c41d7dc1a0d11785ff442a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB4TEOX2%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIGyGImJO1wrTPEdfaY2aS0Y0WN8Zlu3%2Bk%2FkB6Yy8MU5uAiBoIuYHF2rnXZ8gbUiuTxHCyvn8104UE3UTySLRudno5yr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMM8hnW00avR%2BRBI%2FFKtwDHA0Lzq3kze0CwC3FPkdDObH8joCaWRXyfRELIrJqSFm0GnuhYO5rDvxue63gK6WBRKjR9pBl2uazUbcAuHKHzfOz2oyiUpJcpCDem%2FGC78uaIDHBO3KztGhtGL6wzWMUc2uMzSh%2BDkw%2FRUfKPTkrM5nhz%2BE4Kp%2FeBZ2eRxEchZijRBZopvACwVKAQO2juZfaZVK7Ga%2Bc4XEbVm%2FkqxTyPaW9bng8ybjoouIZphmvJ%2F36BKWRqTjbKRa7mwrZ6yQ%2BEOnbJamAMisq2mIEzklgVwX%2Bkk28pWPNz%2FvjRuOF8Sevgonj%2FAbyndtBCjGUUuVBXwN%2FRgS3u8HEXXOK3fHESK68Ky2LfpWtdPknnGzwtlNCvqouaslxyEXN4xiRVzJqX%2BkNJQ%2BTRq%2BxXwQsXOvodoErECJo7vEWPA2XQ5HcmjHawPl7OM%2BcoS1FK6Y7yxUzOS2vSXsPnSO41WmaylYDEC%2BilCVnY3XIY3MsHRhfR5Dsgp9z27cGN0MKp39NhHlc81%2FLMDOd907EHgHmgv7KMbGOAmYjHgQYDCRQ2SY1Czpoaw%2B2tHTWDNrnqqiY%2BA91NGOnw%2BYGrdddkxOS%2Fbf6yi1XjfnoVxYIykkmQBjCG4zAvLqPITva%2Bpjmn48w%2BaPVwwY6pgH53RcE%2FLhC14P%2FlyFGC7tblatS1PFAvyADD6SlS0d%2B9ZhMv7DSfIltm5Cw4%2BrNXVJRBLhZy%2B9gFEvbB2KjY7b63Kxj7GQNXUSLH%2BlvMcvgvijENbCAIWN7bzZp4JNjxW%2FU4%2F6iC2phbdJRJGdQNxANvZPCApwLRUB16mZ%2BwpcXiQYqxIw%2Bbi%2B8dTx1ntGL5ELG00vhcfCb5dVWXFz4SQ2eZZU9fTxo&X-Amz-Signature=dbcda952871d1b8f817e56822815dda077bc41e20e90253c384a466c44cdaf7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RNWMSUC%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIBESpeISMtAQldtHNlLvcJjPHn3TZXouDJnKMh5O4GYVAiBkfl35e1gyvGDO%2BdjJqKlD2rS1w1HoV1bhgMAibY5CcCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMzZkjkXhQ5XAE5YZZKtwDNXA8Dgqk5gkoe8d%2BUvXUhKhaikS9ht0ysHNvq8w8YNgMrbhnc7IXsWfB5NwREGCPG5e27%2FuCIVIIzhNJ5I4SJFhvy3hLlN2hQDd8Uzqv5ne9OYBHqB%2F16kSdZZ1Qua66aaAzViN0ggt%2F%2Bxd5ImmwZGRqbVbAXItPdh7pvCS4igQ%2BUktTFyUc2cyIwUO6Yrduv6D95cDJTwfKV2LRr2rYwhJf2%2Flc5wSbwbb1wHfPzZLWdtDJTduxdXYTt5LRjLgaGv0uFf7FS2rDupmXkWFjx0LyZK1%2BbMXkcBsX0JGlWEkxuPOpx%2BxVZp0qjBrMeFay2Lhji9nThDGp7aUsKh29rpB7%2Fvj42wNSlKKGLYs4vyik1hqohgDKVkHEnHr18mF8KWmL%2Ff5hd2ovYxeSk0Vdw5%2BWBYu%2FiutxCw2Ij2WTT6lhKG1sSQ0Y9Wedng1n95ZU7OaFhbGnKHI611A2YnIaiEE6h0UA83dsXhk4bcHTTZx%2BSw%2FKG%2FjZqOyjOFsNXxATFa%2BJCIO1L80w%2BgjUnFpIym1EhNffbaXcBKp5N%2ByakZbGMp4WJR7l166fptHdTOdU4GZ%2FyK0R6NyaehuU0KRiPbE6%2BEPxg5Trv4KLuwXiGcd3MnzKViQj8sRnI5kw%2FKPVwwY6pgHR3TmWmgzDlr7oU3BCsUVUobCHPZ4YJVJSasjOwGHUDZP3335VGHQAI2995mt%2Br0jwClH6jEL01Edr%2BhdffLPbWq4iFPHn4%2BJ9Jo3hvu0QMFYSzxLPMZHCKddfMFkSVoLgM3LH6eepdkrzgDL14CqT3kfPCmgZuPza%2FlrDbx6CIYx4wSsMyqaLlHKii5bjGQ65frlKh%2BCzfZG9aU8gMhqftaGVNjaQ&X-Amz-Signature=38176f4ada2f1a53c4206bbbf6b53950eec7a7375cd0d7f269a8efbb814f92e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLEMST5Q%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIEDlS4V48to%2FHLEO8wjFk4jOLOo8z9FG%2FpGjuOCkKlkLAiEAjd0JC7hiU2%2BAz8dHIWV6PicEX%2BOYTuduZUnvZuu7w2Uq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGEbVHen%2FHyJsjVHnSrcA9dVpL9f4XSNdRFaqEpWVedmcubDXHJoQRxavyi9lhCHNOkB%2Ff3Co3E8f1%2FfDmHcu%2FhWKWUyiZoD%2Bf0BbpC%2FEiHse8Td7CDWVrRHcXpuXgbKJGT05BNfFxGj4QSv0xJDo9O3Zf%2BxnyocFcDoHb3F7aV91snHDl4TLr%2FvmRBKZd6EqP53hjHjseo44G%2B3muFaUiBupQgzHDG1g8xIwqe2IqBCHTPf0LMCRkBxJUc7T8DnfLRT7iwA8oPoEGXc7HFoR%2F26EWQsc92WmIVuMQW%2FL4TODUUDhh0HHvdUnNe9c2k2HRJv2JUI5EQpSkBLhYI0jMmIs9SJ3aTHxQTZcL6Pyclu938ncjlHgWGMc4uzXgLJGeuCJ3g43kTYpje2AZC07xbEPeoc0sysPtpKsonJmL7vA0vQN8UBo1LXeAY68upqJhPHQJXM9jYbIe1VV9MKgU3p48EGPF1s26HE38PZ6Lr4LoYBOX7nR5rwic08%2BkrS79MMC%2Fc2ga6hq4qRqVGBhH6XOwyr%2FnIlzest%2F5wZkhBYpIRksG%2FnGWmqLc%2BIhu2nELbMeNsV71LbjzwJNLaTugC2R6z7pSKP1kzwLXeMSQrZ%2BnB0BsC6FvmJ5%2FiIR6oCltjrCc1PkfYCyJ3fMPej1cMGOqUBSO8B4BYUS7MApI9%2F16pQHEADxFiYcqdw3ovou5%2F47Yf6DVjAf2D5VYGL1CDLQJoJ5Y0xYZn%2BKv%2FaAAcfFeRuE0108HkdAuY0pZToBo%2BXTLRqBq90B5n4aGFRJaRsiLGVd6Xjitxj7a9zhxE4amEv3vRrJfmOtwSfcSyCc56D%2BekDEuJuznOmmG1iQYiwz%2FkOYpapnCJZEWkYOcriWlmlwak8%2BD93&X-Amz-Signature=aac0724314e05d9b4eb6df3d572986ceb45e5b220bd772356e61f65ebca4fd8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB4TEOX2%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIGyGImJO1wrTPEdfaY2aS0Y0WN8Zlu3%2Bk%2FkB6Yy8MU5uAiBoIuYHF2rnXZ8gbUiuTxHCyvn8104UE3UTySLRudno5yr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMM8hnW00avR%2BRBI%2FFKtwDHA0Lzq3kze0CwC3FPkdDObH8joCaWRXyfRELIrJqSFm0GnuhYO5rDvxue63gK6WBRKjR9pBl2uazUbcAuHKHzfOz2oyiUpJcpCDem%2FGC78uaIDHBO3KztGhtGL6wzWMUc2uMzSh%2BDkw%2FRUfKPTkrM5nhz%2BE4Kp%2FeBZ2eRxEchZijRBZopvACwVKAQO2juZfaZVK7Ga%2Bc4XEbVm%2FkqxTyPaW9bng8ybjoouIZphmvJ%2F36BKWRqTjbKRa7mwrZ6yQ%2BEOnbJamAMisq2mIEzklgVwX%2Bkk28pWPNz%2FvjRuOF8Sevgonj%2FAbyndtBCjGUUuVBXwN%2FRgS3u8HEXXOK3fHESK68Ky2LfpWtdPknnGzwtlNCvqouaslxyEXN4xiRVzJqX%2BkNJQ%2BTRq%2BxXwQsXOvodoErECJo7vEWPA2XQ5HcmjHawPl7OM%2BcoS1FK6Y7yxUzOS2vSXsPnSO41WmaylYDEC%2BilCVnY3XIY3MsHRhfR5Dsgp9z27cGN0MKp39NhHlc81%2FLMDOd907EHgHmgv7KMbGOAmYjHgQYDCRQ2SY1Czpoaw%2B2tHTWDNrnqqiY%2BA91NGOnw%2BYGrdddkxOS%2Fbf6yi1XjfnoVxYIykkmQBjCG4zAvLqPITva%2Bpjmn48w%2BaPVwwY6pgH53RcE%2FLhC14P%2FlyFGC7tblatS1PFAvyADD6SlS0d%2B9ZhMv7DSfIltm5Cw4%2BrNXVJRBLhZy%2B9gFEvbB2KjY7b63Kxj7GQNXUSLH%2BlvMcvgvijENbCAIWN7bzZp4JNjxW%2FU4%2F6iC2phbdJRJGdQNxANvZPCApwLRUB16mZ%2BwpcXiQYqxIw%2Bbi%2B8dTx1ntGL5ELG00vhcfCb5dVWXFz4SQ2eZZU9fTxo&X-Amz-Signature=8dbca44a54f79b8db72803015488b4527ec4ff49d19dcfb4069581b68a371e53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
