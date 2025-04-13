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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXDWNIFT%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T180959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCICKfOEAYQNC6aymy9R3L0VtZMHoxPKexgja33di6%2BT4dAiEA4vz38%2BE3PnOipwT8pUNt6489PXYLLLUAKbSQYf3QRCQqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxc8gJ8p3%2B65SonPSrcAzfb%2FqhwXxXZ7vDlFSlicQoEfLZuJS%2FgTcUZsIoKszdV0AapaU1rXlYdenX5UYMckHbVyNkzjrb7n2u2jxbACwf42mINrf20Cr40omNW%2BvjsCvTgvRLGnS2qq7I37NKIIHF0GO5hTqutwDxaCBVpsicSlQalEU89vuXZ%2FWyqrwM1p98ma7%2BnE5lfLdS7PDSZ%2FJ3eJLtKfq1gxjnnFB1AwCEOXspc4Hfzw5yKXAVLaw10cZ9tPsbvi5qokfdcm0JbrBQxemrdtaAWlL%2BUuT3YTgLijbxlgYE7bvb%2BuR%2Fgle0tNYxJbLDslrSgMnQR1wKjKYcZCMn0w2Q1aYmyo5o7D4qV1NI%2FC%2FPb%2B%2F%2FdB9ksxzq9eGbK7aIt%2B%2B2RWErqg%2BaOsTW43QBWeddiyaG4v27Ecf20XWCbhBi1%2FR3sHAvm%2BRmied0Co2ZnuuAAvejcCUC9uWDDdKJnDBydFgWmlxaK9iwa2ckIpHSxfT1NPFnLNFB741UmG8WiIjxSGf4P%2Fp6Dsjt3s%2F0LEYZmsCdcN3txooNmVOnzegSQCc1IX4wVhKANzXgXNPgK9n2Btz6VNPfzG4CXspWLcEhbfaCBKdSDC5D1tJmR38qHBQrZeczWnxKOmzOOVem6qTXWbJMEMMne778GOqUBDYKrrH5eEeRXBpLk60ojtw4P%2FaTEbM6emIQuWViiAcyRzQxYV%2FP8%2B232hRRFSAXybKYJkSLxF5VNT5AFx6Vj11GeWxgxnMyNI8t91yZQexAUDO2RtIe5rDJIA2nWnloU1g4xXpo171VcbfozAVMr6IEET2o%2FBec6WgzGkCRQAiTC4foDVlElNl2%2BetRW%2Fezk%2Bu087fJ1dV%2FO%2FFWHxdQ31jPnvPGJ&X-Amz-Signature=e797881527533c47bb4931a7cee98d73bc5f062cfe69631e18f775522785569f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXDWNIFT%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T180959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCICKfOEAYQNC6aymy9R3L0VtZMHoxPKexgja33di6%2BT4dAiEA4vz38%2BE3PnOipwT8pUNt6489PXYLLLUAKbSQYf3QRCQqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxc8gJ8p3%2B65SonPSrcAzfb%2FqhwXxXZ7vDlFSlicQoEfLZuJS%2FgTcUZsIoKszdV0AapaU1rXlYdenX5UYMckHbVyNkzjrb7n2u2jxbACwf42mINrf20Cr40omNW%2BvjsCvTgvRLGnS2qq7I37NKIIHF0GO5hTqutwDxaCBVpsicSlQalEU89vuXZ%2FWyqrwM1p98ma7%2BnE5lfLdS7PDSZ%2FJ3eJLtKfq1gxjnnFB1AwCEOXspc4Hfzw5yKXAVLaw10cZ9tPsbvi5qokfdcm0JbrBQxemrdtaAWlL%2BUuT3YTgLijbxlgYE7bvb%2BuR%2Fgle0tNYxJbLDslrSgMnQR1wKjKYcZCMn0w2Q1aYmyo5o7D4qV1NI%2FC%2FPb%2B%2F%2FdB9ksxzq9eGbK7aIt%2B%2B2RWErqg%2BaOsTW43QBWeddiyaG4v27Ecf20XWCbhBi1%2FR3sHAvm%2BRmied0Co2ZnuuAAvejcCUC9uWDDdKJnDBydFgWmlxaK9iwa2ckIpHSxfT1NPFnLNFB741UmG8WiIjxSGf4P%2Fp6Dsjt3s%2F0LEYZmsCdcN3txooNmVOnzegSQCc1IX4wVhKANzXgXNPgK9n2Btz6VNPfzG4CXspWLcEhbfaCBKdSDC5D1tJmR38qHBQrZeczWnxKOmzOOVem6qTXWbJMEMMne778GOqUBDYKrrH5eEeRXBpLk60ojtw4P%2FaTEbM6emIQuWViiAcyRzQxYV%2FP8%2B232hRRFSAXybKYJkSLxF5VNT5AFx6Vj11GeWxgxnMyNI8t91yZQexAUDO2RtIe5rDJIA2nWnloU1g4xXpo171VcbfozAVMr6IEET2o%2FBec6WgzGkCRQAiTC4foDVlElNl2%2BetRW%2Fezk%2Bu087fJ1dV%2FO%2FFWHxdQ31jPnvPGJ&X-Amz-Signature=a153a1baa717a4c7e426a1f1738f2e68a8db83e720dd5d4c4a9015c3a9c41d50&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SV3LSHM%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD9EKQn2XxIvZ7S1ZjFjlkEsvf%2FzFjhmTp%2FCVV%2FllWCugIhAKioy70ZWw9nmtm%2FUCPabGznc1rIP8g0dIZszmB5nd39KogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZbWpwWKpdRD4a2iEq3AOVwuKuJXRWCb9pODxaeGVppjUxmMobfTqRhukZBf1tufoKThV05JM1EVfZbJGkAQQjUCr7yXBl91Ym1dLhp1vQCIyh%2F%2BuAFyhe2OUEx91PFnSg0MTSuvnBnsEVA%2BY6Mngu4TES0vxf4HlqhPu7OMoor6iwoDhIs8CtjMyoR6T%2Bf0UbIJqZ8OhFuVxCvSzfftYFIX4Q6JwEXYJt9P0xCEMQj776U9lXaTK2BAKTYOjxrq48vPvE514Vga%2BWxhBY1Ae7b5ZORwGAMxjZZHn61yGcwgUit2xPX2f0gvxkHRdYqtnPbhehAcyqp89GHxyOthBikKS9OMO5%2BYWNXIJMPF2DL3%2B2uWRRb%2FFG5mf5GmUMDQzD15lSyFcariDvhOAwBkJZULon2bfgkxHnUfeLRX99SMyjYJZ0wxYNmwWbO8Z4drd1bn304UHsOYK%2Bmw2JO%2F7YYkwKortGqoyiJJcPnoydtu1SV7fieQ3tubLcTpozvEjKVY%2BH33WgOtHxJ0GnpGAbRYuTPZD05lmZhFwWbFir%2BCVKFLRgJ5xhFKrbslPB2FpVl95TO%2ByFwD3Xp3fjjv9cay63NFxfepcY10cvOImlJPbCNoTa8rStAiMDMmbGSftff5WjF8HfF2jswDCB4u%2B%2FBjqkATKzcfdQqIT2KYcxXYKkV71bNb%2FoKBA8QqYBdPtZBdFgXxJSIXjSj2hc1aAC9qWkdOoFfKzUivkA9iF7k52r9uW8t3DUvBZ4eOY0RB%2FPZdkMjpDnlvAfx0yjQGbtrY%2FZGEOR5iJ%2BAMlQWri4x%2FL6vs5Mh7KODwtJ9P4PpzNu7tFV8M%2FnplawbzgE0wSIiHRevt8matWJA12lTLTqaTlolHIWnn0x&X-Amz-Signature=59f3d8b57fab36dbecbb8a468959c22e70776271a1a044a3034d3faddfa45cf0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN6GOR54%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQD%2Fw3L5o7uPHZn2nEjcAoyRPWFI90%2BwFZrILhO5HGCFJAIgGCFc6ospmEFrIs7BTRVsa1ORJt%2BKaDwrvpuFmGJrbJ4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BTLST%2B2dnBpjiCvyrcA5C0tWpo0Ml0p77sixo3tEMVIyJ6GXgVz7hlTsYndLRkRBAI2roER3mmyTipPyWwgTBkWbg1RAixisjAmjhbn5NEqtmNrDRNS%2FSN8qe%2FjwyNCZkSM1q5u0e0KL6xcR4ajTcgo6L3F7F5haYwdYxBY%2BYo6pCm90N%2B7N%2BRmOh5xoxCfYbJwKVfjbPZe96%2FR1k61GQyR8fiuELoZKMiitS0QApgqSUTaPHYxJKnjRWp5Vq7nSFaiF9vbIGst2kLsZtkHSQgyI1D614igquaQAgiUP4HWerf%2BCZEizqea%2Fg0cc1pAJRVmgGYNymU6%2B6yXlB5a1kMUsGDXJm81XDCi0Cdie%2FyS6%2FZuVIFpGSGF1aXf8l0XfiQG96S7mZg5Ida9R6dk22WqO5m5IsQ01IBZrvZE07Gi%2BQ1fvStZgmhpOl77cxlQ%2BfuGEw2GJHsOKqpXy63bGyVTiIdgz710WKa98bdXhwj9smHDsrky8DiI1EKA%2FrPsW5N7%2Bd07jP6IBm4ms2JBTx3OUQ61%2FcND5aA8h5dJGCQcmTBMo92HC%2Fc7ZXRFljq2HzeUgCfSiRfMEbklB2UVq1BsXDKlVUqgacxxNHZugt8qSXjkJwtrgiqOZpNxAtLIZyGSgN2GFefEEGzMO%2Fg778GOqUB8pYFJBZNi%2FSeD0HxD4LlTxEu299TeurRNFK3v61XyJIAmsdYsui5SN5VnaP%2Fy2Z2w2ji%2Bt%2BfRpGsrDaI3Jua5o7ltpdGGE3GaQzB3jIIxlaVggWto9V8%2BhAeb%2FsAflAyHo2%2B7L1vwJaZFjE8KlmGQxA9qHutEa7nQ1om7i9xIPic2mChzTbpDhOwgdy9unipnQ%2F72p4PtRFK2cZ38CNa2mtNGlUh&X-Amz-Signature=62b801bfec52090713de2bbf5bf69a4b6ccf0fce341a551bbf5b69fafa4db93c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXDWNIFT%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T180959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCICKfOEAYQNC6aymy9R3L0VtZMHoxPKexgja33di6%2BT4dAiEA4vz38%2BE3PnOipwT8pUNt6489PXYLLLUAKbSQYf3QRCQqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxc8gJ8p3%2B65SonPSrcAzfb%2FqhwXxXZ7vDlFSlicQoEfLZuJS%2FgTcUZsIoKszdV0AapaU1rXlYdenX5UYMckHbVyNkzjrb7n2u2jxbACwf42mINrf20Cr40omNW%2BvjsCvTgvRLGnS2qq7I37NKIIHF0GO5hTqutwDxaCBVpsicSlQalEU89vuXZ%2FWyqrwM1p98ma7%2BnE5lfLdS7PDSZ%2FJ3eJLtKfq1gxjnnFB1AwCEOXspc4Hfzw5yKXAVLaw10cZ9tPsbvi5qokfdcm0JbrBQxemrdtaAWlL%2BUuT3YTgLijbxlgYE7bvb%2BuR%2Fgle0tNYxJbLDslrSgMnQR1wKjKYcZCMn0w2Q1aYmyo5o7D4qV1NI%2FC%2FPb%2B%2F%2FdB9ksxzq9eGbK7aIt%2B%2B2RWErqg%2BaOsTW43QBWeddiyaG4v27Ecf20XWCbhBi1%2FR3sHAvm%2BRmied0Co2ZnuuAAvejcCUC9uWDDdKJnDBydFgWmlxaK9iwa2ckIpHSxfT1NPFnLNFB741UmG8WiIjxSGf4P%2Fp6Dsjt3s%2F0LEYZmsCdcN3txooNmVOnzegSQCc1IX4wVhKANzXgXNPgK9n2Btz6VNPfzG4CXspWLcEhbfaCBKdSDC5D1tJmR38qHBQrZeczWnxKOmzOOVem6qTXWbJMEMMne778GOqUBDYKrrH5eEeRXBpLk60ojtw4P%2FaTEbM6emIQuWViiAcyRzQxYV%2FP8%2B232hRRFSAXybKYJkSLxF5VNT5AFx6Vj11GeWxgxnMyNI8t91yZQexAUDO2RtIe5rDJIA2nWnloU1g4xXpo171VcbfozAVMr6IEET2o%2FBec6WgzGkCRQAiTC4foDVlElNl2%2BetRW%2Fezk%2Bu087fJ1dV%2FO%2FFWHxdQ31jPnvPGJ&X-Amz-Signature=0cc79f681dd95ab1e5702f0ec095fa9b6284d43bf2e3fb27792d974ee89f1546&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
