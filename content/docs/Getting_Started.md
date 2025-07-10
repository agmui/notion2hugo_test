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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJHGFEZV%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOCkCvU6v0N8PNZqq5UMyfA8ctgxTQrXtpO%2FX1X7zwUQIgGsNNRaJmAmfLHwVl%2BHZjpcyWYIOZyynhtufqoP83k48qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGiwJxSl%2FlnRHNQSyrcA%2FPlkqFrnyyHMA0tKkR5ZCkgWiy1s5pUv7CfveoLXX8%2BTljAW%2F09Hag3ZW8HrMqLbehBkUYvLQfIE0lR7PkO0Fhwkc5FDN8pNt%2FBE6bMP47fYvRj6W30WN%2F4JscVBKBXUAs7s9a8jnUDyd2Ja9v3GeWLzZWXehofjaE24zT2GXY1aE5nrB7xlZ9XEmb9rjRR%2FZCr53EmwT1O%2BzFI4E0uw9lhsmb0ry%2FcwZTy7mxgW8Aub2FZOZFUaR2HkWNvtAW8z5iSaZPiUbW%2Bm%2F3uITbQetleKaJHU2vUA0kDlJWPkH2%2Blrlr2CKFrjawBKkdZBzcmEUSkCotAPbIEwc4%2Bgd5ypWzCPpWl67XXcF6rytWrmni8nh5uPyH6hOYnSQV5TjTxmnRD7kdWauxiKdrIfDEKo4D7K%2FvOu%2BL3JpahwRW9Mn9TLOjjT1uIl%2BPtQpXKnK85b4Oqw7Nxf7EJTmtJN%2Bi%2BKJJmT%2BmMPrDJBUxQPnCa0XZF3dL2iUeYgQRBTj7l%2BnOXYB59ySgHYmuis7wgcHMIG9TdwebcV%2FCrcTJgA%2FyPMLliv7V5beRXaPeahG1eD4E9L0FMpS78p1kiDdumJSP5l3a9uKqwu12Rgysem0jT6KuWJzKW7LDJ8CVAt%2BeMJbQv8MGOqUBmTIYIjmd4CqxA3eO58J%2FwDOel62WTfAZa4puKLi5%2BL6VcDTcx8nBseTcRrNKq1gwCZ%2FO%2BENT52pyCaZxVt1jGBR3Hc5htyPqLDl4xzp4pUWgZbEnnCjWSKAqziFMR59SstvIxgG1gtZPnD8XB%2FPrW%2Bs3GiGIOWYgPGQnFugZAsSjrljhBWZwMIbA2llU9SwabjMd3LBdTfxxCiPG%2Bplkvdye%2BEZr&X-Amz-Signature=1b51974835cb42d03d2bf547720bf347376a1896ae1ff64f2c93f34df0aa2969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJHGFEZV%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOCkCvU6v0N8PNZqq5UMyfA8ctgxTQrXtpO%2FX1X7zwUQIgGsNNRaJmAmfLHwVl%2BHZjpcyWYIOZyynhtufqoP83k48qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGiwJxSl%2FlnRHNQSyrcA%2FPlkqFrnyyHMA0tKkR5ZCkgWiy1s5pUv7CfveoLXX8%2BTljAW%2F09Hag3ZW8HrMqLbehBkUYvLQfIE0lR7PkO0Fhwkc5FDN8pNt%2FBE6bMP47fYvRj6W30WN%2F4JscVBKBXUAs7s9a8jnUDyd2Ja9v3GeWLzZWXehofjaE24zT2GXY1aE5nrB7xlZ9XEmb9rjRR%2FZCr53EmwT1O%2BzFI4E0uw9lhsmb0ry%2FcwZTy7mxgW8Aub2FZOZFUaR2HkWNvtAW8z5iSaZPiUbW%2Bm%2F3uITbQetleKaJHU2vUA0kDlJWPkH2%2Blrlr2CKFrjawBKkdZBzcmEUSkCotAPbIEwc4%2Bgd5ypWzCPpWl67XXcF6rytWrmni8nh5uPyH6hOYnSQV5TjTxmnRD7kdWauxiKdrIfDEKo4D7K%2FvOu%2BL3JpahwRW9Mn9TLOjjT1uIl%2BPtQpXKnK85b4Oqw7Nxf7EJTmtJN%2Bi%2BKJJmT%2BmMPrDJBUxQPnCa0XZF3dL2iUeYgQRBTj7l%2BnOXYB59ySgHYmuis7wgcHMIG9TdwebcV%2FCrcTJgA%2FyPMLliv7V5beRXaPeahG1eD4E9L0FMpS78p1kiDdumJSP5l3a9uKqwu12Rgysem0jT6KuWJzKW7LDJ8CVAt%2BeMJbQv8MGOqUBmTIYIjmd4CqxA3eO58J%2FwDOel62WTfAZa4puKLi5%2BL6VcDTcx8nBseTcRrNKq1gwCZ%2FO%2BENT52pyCaZxVt1jGBR3Hc5htyPqLDl4xzp4pUWgZbEnnCjWSKAqziFMR59SstvIxgG1gtZPnD8XB%2FPrW%2Bs3GiGIOWYgPGQnFugZAsSjrljhBWZwMIbA2llU9SwabjMd3LBdTfxxCiPG%2Bplkvdye%2BEZr&X-Amz-Signature=76330fa5746ef6dc32cbe6c1910aca2ab53010ec89d682576b50125f3106b801&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJHGFEZV%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOCkCvU6v0N8PNZqq5UMyfA8ctgxTQrXtpO%2FX1X7zwUQIgGsNNRaJmAmfLHwVl%2BHZjpcyWYIOZyynhtufqoP83k48qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGiwJxSl%2FlnRHNQSyrcA%2FPlkqFrnyyHMA0tKkR5ZCkgWiy1s5pUv7CfveoLXX8%2BTljAW%2F09Hag3ZW8HrMqLbehBkUYvLQfIE0lR7PkO0Fhwkc5FDN8pNt%2FBE6bMP47fYvRj6W30WN%2F4JscVBKBXUAs7s9a8jnUDyd2Ja9v3GeWLzZWXehofjaE24zT2GXY1aE5nrB7xlZ9XEmb9rjRR%2FZCr53EmwT1O%2BzFI4E0uw9lhsmb0ry%2FcwZTy7mxgW8Aub2FZOZFUaR2HkWNvtAW8z5iSaZPiUbW%2Bm%2F3uITbQetleKaJHU2vUA0kDlJWPkH2%2Blrlr2CKFrjawBKkdZBzcmEUSkCotAPbIEwc4%2Bgd5ypWzCPpWl67XXcF6rytWrmni8nh5uPyH6hOYnSQV5TjTxmnRD7kdWauxiKdrIfDEKo4D7K%2FvOu%2BL3JpahwRW9Mn9TLOjjT1uIl%2BPtQpXKnK85b4Oqw7Nxf7EJTmtJN%2Bi%2BKJJmT%2BmMPrDJBUxQPnCa0XZF3dL2iUeYgQRBTj7l%2BnOXYB59ySgHYmuis7wgcHMIG9TdwebcV%2FCrcTJgA%2FyPMLliv7V5beRXaPeahG1eD4E9L0FMpS78p1kiDdumJSP5l3a9uKqwu12Rgysem0jT6KuWJzKW7LDJ8CVAt%2BeMJbQv8MGOqUBmTIYIjmd4CqxA3eO58J%2FwDOel62WTfAZa4puKLi5%2BL6VcDTcx8nBseTcRrNKq1gwCZ%2FO%2BENT52pyCaZxVt1jGBR3Hc5htyPqLDl4xzp4pUWgZbEnnCjWSKAqziFMR59SstvIxgG1gtZPnD8XB%2FPrW%2Bs3GiGIOWYgPGQnFugZAsSjrljhBWZwMIbA2llU9SwabjMd3LBdTfxxCiPG%2Bplkvdye%2BEZr&X-Amz-Signature=9d6dd5ed508a379bea2a7e92327ab3c8d6e2432672c09565a5fa9ee161ffc8e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPD4RP7Y%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAd8PuoFtyrFc2HzFIZAgPNqeb7lbpd1kSbkvDvbTXl1AiAOOTsZS2yw29d7tQooZVfQoGSz9sDelI9Rod5QnpetJyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnRsm5pW9aYt1FlruKtwD4ASVdfVboSbWFZfUiYLu8USgDxulOA8FIq1f2ikFmjt4H273qDnfsNFlGDhmFppe8e%2BY%2FZelj9dTx2GIGJkG%2FyaZmJvqt0V4J37kmxY0Q9EFUZ9EUouRoz0T91TFFAeONwGcUJQv3H%2FvoEbfrWTnngrTvUZGlwnRhycbxdAuksuMNqqWXo9dtKaelVW2i0%2FaVbAUaakcs%2BkkthDaxbDibwi7f4XBg7Pl5bXS0CyIDaN48wuqdRXHxIbljUJzZHgVz8vtraZks8OxwIcvVwZRdOBJSqSbo%2Fyd8u0vnKZrYQMztBOaG9rbQvZ4R7kTjj5XhXZszXEZT6W8cKdDy0nw06O9nMb0bZ2CaZsPVSi6%2BzEAKxWWUfJVT9wlfrfsl5ZVt%2FfQBA83MqappFL6AqjPYRQ50YFLDfdCvH5s21wyBfUt8cxqXLTen7saa61PdZb1Mfx40s%2BkK2lJ8bhC6niuiSO586wd8uD8%2FvBIwCbXLMyQzPGNteuY3HWDVRYtRPL6GN9m%2F34tUPYIazl%2BmylmlQbkt8IHaKjfqqKsU8DiSTIRMocKcSQQJMKCZYMprnMPIF8Q2EfqxUVlVvTP7CJ%2B4BgwW2vnbBGfz0KjRSFSasmLlNI9su3NJq%2FmFnUw%2B8%2B%2FwwY6pgG9zoamyckZr8zxiRzSW9AU57Dvxk9npgbikZRuUZYJNFPQx1jC%2BWwXwlwt4owX7jv3arJ0WjxkSIO0jV%2FYcEaeZh0u3fRkxqNYUzVaQT7h7O5GyDRhAZA5w%2FPLuJG9u0NI3uKHh2V57s2Uh1mG5GzOC77OL7NIpJL6GgGPGZEg3aszyRAXDJ61bfw2mxRl5HJRQyp%2F4tKLUK01jhBumlhxWaXGKBN9&X-Amz-Signature=291c32ab9bdb9b1fd68840b935f875c2f4f8147b25d277c7d8b398f372232c25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX4LJFD6%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwgkZ33v7h31cjzUjY%2FwpkqE68VTBayeXXZv2JUHepMAiEAudWzKSWJlypKV0%2FUm7SJ2nx%2F9A2bXRx8w3rK8%2FDEtNIqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiuwWPusEMceacU9yrcAwo8LBpklKq%2FKmWXI9BaLedzRabxo1AYFlpLy0F1%2FSM5cxfpc95Evn2oew4BE2kW99Ak54zmaKi4jKSGmm84xnbYMACdA7Od0SLLan3WbGV%2ByfnvNsumfWdiWkw92h7YcUJw2l%2FQAECzyoZqJ8A4PdwVHBv2XvOM0tRnKhEtWk99p%2FmgjbTZbS3xuIO2ka589umTspKUWG6cQgpEFAXOk1yDnAuHhRUj%2FfV9rCTfKLcyzz6Z%2FGpBO9expwOirxiMjPZDIvb1r4HiX%2BnVCYj2KcJFtlbZWyBkowYDpaBUrrpXuBWAeNCT2iRWo0dps1qfDmyqxd3vuKchaLSkxPln9%2F3BzxrhZtyZzQLHyUfPcJQHI28qniTnpjVHC9RvBkB1jsj3Vg9sfq6m5N%2B%2Fff5se32uuH2n%2FgLV17kvEUf2EIUhgWwsUlKuTR4smylVESBAM7SDDqGKwEHHG%2Frnv%2BQdBJ46jCMFenBJeIeExkQrPr%2F0J2Y%2FErNdCx8nlgGQg7vYov9nU6jevwlR7e3X3wU3egTF9fTxY5cWfvdhVacnzWw0qXGdF%2FJBZoXJ1RJltQi9xYh9kLSA5ryPoHjfatASSz2LDikzBWXsuhMGEEm2mhDOmFUoMmxLsipgADqOMKLQv8MGOqUBNjuKz7IpSbjKi6yUNA%2BcdG4dFfnW8H%2B%2BAsYDRAh4a28J6QrMj0LZVZEyVQFxXYymaGnCpozpZSAzG9cjozSN9jPL%2FNCQDtxrljQ%2BS1Yz4zQrX9QU%2Fq9qmoDjYUzSuYyiup1Oemy7vr8Z1jr7HeEzRX%2BIl2bU0xecbUVZrM7dG%2FZjXc2%2FKY2IkAcyscMcCwFOLYCBtkI3D5oZrsVD%2BKHv5cYl83mB&X-Amz-Signature=ff69c74eec1bc1365f25b98e122f936b319dba95b85605933e0a0fdcdc0b9b7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJHGFEZV%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOCkCvU6v0N8PNZqq5UMyfA8ctgxTQrXtpO%2FX1X7zwUQIgGsNNRaJmAmfLHwVl%2BHZjpcyWYIOZyynhtufqoP83k48qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGiwJxSl%2FlnRHNQSyrcA%2FPlkqFrnyyHMA0tKkR5ZCkgWiy1s5pUv7CfveoLXX8%2BTljAW%2F09Hag3ZW8HrMqLbehBkUYvLQfIE0lR7PkO0Fhwkc5FDN8pNt%2FBE6bMP47fYvRj6W30WN%2F4JscVBKBXUAs7s9a8jnUDyd2Ja9v3GeWLzZWXehofjaE24zT2GXY1aE5nrB7xlZ9XEmb9rjRR%2FZCr53EmwT1O%2BzFI4E0uw9lhsmb0ry%2FcwZTy7mxgW8Aub2FZOZFUaR2HkWNvtAW8z5iSaZPiUbW%2Bm%2F3uITbQetleKaJHU2vUA0kDlJWPkH2%2Blrlr2CKFrjawBKkdZBzcmEUSkCotAPbIEwc4%2Bgd5ypWzCPpWl67XXcF6rytWrmni8nh5uPyH6hOYnSQV5TjTxmnRD7kdWauxiKdrIfDEKo4D7K%2FvOu%2BL3JpahwRW9Mn9TLOjjT1uIl%2BPtQpXKnK85b4Oqw7Nxf7EJTmtJN%2Bi%2BKJJmT%2BmMPrDJBUxQPnCa0XZF3dL2iUeYgQRBTj7l%2BnOXYB59ySgHYmuis7wgcHMIG9TdwebcV%2FCrcTJgA%2FyPMLliv7V5beRXaPeahG1eD4E9L0FMpS78p1kiDdumJSP5l3a9uKqwu12Rgysem0jT6KuWJzKW7LDJ8CVAt%2BeMJbQv8MGOqUBmTIYIjmd4CqxA3eO58J%2FwDOel62WTfAZa4puKLi5%2BL6VcDTcx8nBseTcRrNKq1gwCZ%2FO%2BENT52pyCaZxVt1jGBR3Hc5htyPqLDl4xzp4pUWgZbEnnCjWSKAqziFMR59SstvIxgG1gtZPnD8XB%2FPrW%2Bs3GiGIOWYgPGQnFugZAsSjrljhBWZwMIbA2llU9SwabjMd3LBdTfxxCiPG%2Bplkvdye%2BEZr&X-Amz-Signature=d20cd06a09b3c648531e2e96b41e2b4cfa35017fec65c37019f865c461de90b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
