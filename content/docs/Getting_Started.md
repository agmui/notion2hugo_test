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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YBUWSG3%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIGtSR43MnIgRmfYnNDFQyRUmutu58UhCIB5%2BLEgN7WOvAiEAq58BgyyVhypNvgeeIuprRegGMWbeOIMXBuffUFEqlOIqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBavPL1Y9dJtkMyV0yrcA3Ty0V3sre%2FUgaPMA95Dvzc4UzGC6hgla9mYrsPQDQXw3M8xGjcl%2BZL8cCbc6AdGHhu5A%2FzutNEoOzo4iwBNXnr%2BUSUfEX5N4C%2FIcrphR6wydfm8A%2FyJDhkyXOZd5pJUwx50EMKrsy%2Bi9K9MlNnRg5k45Lokr7LMVMAP36yXOIx3u0VCxFXEyq8qEbap%2BYcSTrpnpX8vbp4Nvyzydl3Pw9RR%2FcSB7e9PC2HM1NUnM0ODR9%2BfarNkneYN3OVXqQQVTMLAIDF530OTlMWJhaDGgWcCxyicrhpCAqu28mMppKH4jUnlUaX6HAvN5gSFk1EKZ1kMTLoBjJp29JJiYeaQmvSxRGnfJd5xeh%2FL20ufnl99%2FAu4n6yXaDoIX4Y1CVUyBpADm5QxiE5A9I1Vit6ZcjVRGqXRdWlq8Q9Vfz6lgrXyQCkxfzmnacNrgfOkhnKMZstEQSw%2F59J8%2BPuyuB2SDgTYPyEMyTTpajoEMKZe%2FOPRRpYo8pJ2wCQio7n49RxnxcNCqmJYSuXipPop8wcPWFnQHIYMHaK16NZbgkvcDRJLp3nMVqZV3DsL27RjpZJLWJnUJYWEVRjNmza%2FjaLzBP9BWvapoYN3q8t%2FsH6aAqRPJvBhbHYN0XoSUbSFMOPrwL4GOqUBRXgg2L8TGMQtNB%2FOkhKDKyyK3K1M%2F5XcRKaj%2BTs5dxjsU0mJRJtdasUUKKbFmO2EEzQ2LzJ3bbcmTqBBS%2BBubyqLMIWYYLk3sgH4sTWRFbGJvkVHBidrcCNGd6W7a6XGBtwEFAC3wjcOMUVxm3424UVs0M4Y%2Fe68TQzhgJ1t0zaeIcfIkCtTYnYQKCrjab7H75lcL73zWxEq8rs3J9dfeqg28TUh&X-Amz-Signature=231cc7db7746b3cb6821500076eea1709a69c1cd11d6d82bdada6cc48625ae5a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YBUWSG3%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIGtSR43MnIgRmfYnNDFQyRUmutu58UhCIB5%2BLEgN7WOvAiEAq58BgyyVhypNvgeeIuprRegGMWbeOIMXBuffUFEqlOIqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBavPL1Y9dJtkMyV0yrcA3Ty0V3sre%2FUgaPMA95Dvzc4UzGC6hgla9mYrsPQDQXw3M8xGjcl%2BZL8cCbc6AdGHhu5A%2FzutNEoOzo4iwBNXnr%2BUSUfEX5N4C%2FIcrphR6wydfm8A%2FyJDhkyXOZd5pJUwx50EMKrsy%2Bi9K9MlNnRg5k45Lokr7LMVMAP36yXOIx3u0VCxFXEyq8qEbap%2BYcSTrpnpX8vbp4Nvyzydl3Pw9RR%2FcSB7e9PC2HM1NUnM0ODR9%2BfarNkneYN3OVXqQQVTMLAIDF530OTlMWJhaDGgWcCxyicrhpCAqu28mMppKH4jUnlUaX6HAvN5gSFk1EKZ1kMTLoBjJp29JJiYeaQmvSxRGnfJd5xeh%2FL20ufnl99%2FAu4n6yXaDoIX4Y1CVUyBpADm5QxiE5A9I1Vit6ZcjVRGqXRdWlq8Q9Vfz6lgrXyQCkxfzmnacNrgfOkhnKMZstEQSw%2F59J8%2BPuyuB2SDgTYPyEMyTTpajoEMKZe%2FOPRRpYo8pJ2wCQio7n49RxnxcNCqmJYSuXipPop8wcPWFnQHIYMHaK16NZbgkvcDRJLp3nMVqZV3DsL27RjpZJLWJnUJYWEVRjNmza%2FjaLzBP9BWvapoYN3q8t%2FsH6aAqRPJvBhbHYN0XoSUbSFMOPrwL4GOqUBRXgg2L8TGMQtNB%2FOkhKDKyyK3K1M%2F5XcRKaj%2BTs5dxjsU0mJRJtdasUUKKbFmO2EEzQ2LzJ3bbcmTqBBS%2BBubyqLMIWYYLk3sgH4sTWRFbGJvkVHBidrcCNGd6W7a6XGBtwEFAC3wjcOMUVxm3424UVs0M4Y%2Fe68TQzhgJ1t0zaeIcfIkCtTYnYQKCrjab7H75lcL73zWxEq8rs3J9dfeqg28TUh&X-Amz-Signature=c6d9e144728b155332a53ef3d7f258633ad7de74e3ad210b65145a8c290ce982&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665COTLFYC%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIHrKhhT9I%2BkSmRoqz%2FLvamVyj5IfKLdSZYnzBVsKPf5QAiBJOuResJ1bZMOoNvxAZhCah7cAcVXMB0dS8rPpcSRspSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAIDzpgtoPYzSk5LJKtwD%2F4q9LZ2dora2%2F9Dw7iXhitDrdMmtNCKh47phnZ4qzdH9MEr1kW4%2B899oZDDLgbKazu2D1Z7gyu5xz6ITkuXSamSqU2abqjA3%2FFn3DuW7%2B9977Msghbgdbc%2B8MTtWuP56EdIKMyIcxEo4VBM1z432%2FUGEp%2BAzydaBZylFGTiwpTbmKnWv97kIzt5CpGMJsqWJbstsvzoTfVCjuh%2B%2BUw4mjBrP%2BH467vfaeH5M%2B9382HaUH3D1PzOMmz33s%2BCsylUWHpBYgV5CQl%2B8Cu95%2Biz9PCpy7EhEJHjy2gZe3%2Fc%2FoNHF51OhbiceMKbwq47YyfsWQ4hCAQe5nQB1MIsRGMhlNTA0bjh9ibplb%2FOTPrIZD6mahZ37NZj2tdO1KfQYviw2QFpDph9l174%2FZNIxhAhrhXgFSHpzIGVn7di6zkaMVBommXUlv9tfq23QuNIgLQlUFhurAHoEEStRfvZ5YzOiuijexU8VdYJSA1NSOexeywfM5xJ5O6zGNw0MxKaPhNWWSzgAObvO7Crbr2X6S2ejJK6rciOYSYp9c99QiUm9FsxfrZ5gHSXYrDFgNJ0a%2FJTlho%2B57OU2Z5xUUiubShrgsg7BFdrC5%2BrhZw1HADcIQrx6rNrSamkdPPy30RUw2OrAvgY6pgE3U9O7PrqaFMi%2BgfmH5cqH5vV4%2BPxV1BB5HU02PaOdrHgM4k3Vg93tFJDKC8yNRzGdxBJfby2u09Tg3FGAVAH6C2csWOQXB8Pz3zsaFexIJsnypDTL8%2F87b6fLTb74gYLqxm28VMoJ2wtI91rgy42JpikIt87OwIaeKu%2BlL4m5Zz4Ymd%2B7Lko1TWvOAIEyqEDj9PjjgePzs54kX4MoxKe3uN7rlWkN&X-Amz-Signature=4a3cb50af9c717a530e8af9e73449891fbb800d662daa04d79c58b805bba28c3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQYCLLE%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAZhqR3FhctTVVdPJJEXQwkRfeJ1TnniaBLQ9lhkexUrAiEA6BTZzRSLySB9tidJCnQqMrw5z753qLZ5LHz2dyTnHqAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOqZy4aKmE5Kg6QPSrcA8FvuXaFxYQl%2FIJpw6YwK3PITlTCM709FbRl4XGIBESSCdXj%2FbAvR040F9d1HMttoNfHY%2FUAGIu2AgnICd%2BWLsc8hqM3ufUa%2FVtbJBcj0foUTY1SCoAx%2BGGSC85RjOT9xxHNGMRnSk7q9gkm43HLGokrDssWHOE7ZdhS9%2B%2Fqv0oBIBAMkCo%2FT67Z%2FhiFnZfCj%2BkAa5TffQ74IO7Lqvfa8d5EVnmlTLQfa49XsIfySIzTB2ALtRDVEaSqH%2B0xrXPCAotDLhLbBG9zuHQIJyv6%2FpUnKu%2Bg4TVtOTwNKIeqRxC6UI5VPFDK3fO%2BTdkPDLskDfzs1vLV3qQIGLKA9jkRr%2B%2Bny0Gqg8uH4OeBwgjeJWpJ32qQBtAp6BTYHn0jtpydRZQiu9cv%2FLDrinNCBE7o8VyswHkRoJju6vYUJChlAZHGoyZ88BbN4aASi0Ry4V3wpfhOSQ%2BvIyumIJdIOd5yQabDxMfFu2Kcif%2FCmS7luVm3HCHCEl1pOhF0vRvuPM3Hm9vcOcI9G2N09TZJ1FOkisAJCeZwhWiOVpqWN%2FBq%2BkoHo5R8EivR0kUDYTsZaaxbyQ4vlHrkNvEQfn%2BjZUXq0gn%2BJRQXNSu98HSXq6pTD8TnFjyieuI5KYG16a2QMM7rwL4GOqUBDjzpVEjnQsqu52ezIUf27zIlBt7qQe42FtEhH6Muihx3H3IkVaystYoUbKXlM%2BJIPxyBHoI4nv%2FoFr9KobV%2FFlHsr0UP8lGkpiod4b8IpuIurB%2BI9fC67YPsnOeCKzfTOrFe3yMUj9Isq2xAxnSSz5AzTa%2FDzy9%2FUfMx4s83SIHyjwg4pU5R45oHPFUMD3PJrbKsEmzw4UHh%2FwBIsCP9%2F9R4FxjJ&X-Amz-Signature=4a88c5cd48b79f8eede65e3a331a5100a8ab511af583902b55575ce70a6c54e9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YBUWSG3%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIGtSR43MnIgRmfYnNDFQyRUmutu58UhCIB5%2BLEgN7WOvAiEAq58BgyyVhypNvgeeIuprRegGMWbeOIMXBuffUFEqlOIqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBavPL1Y9dJtkMyV0yrcA3Ty0V3sre%2FUgaPMA95Dvzc4UzGC6hgla9mYrsPQDQXw3M8xGjcl%2BZL8cCbc6AdGHhu5A%2FzutNEoOzo4iwBNXnr%2BUSUfEX5N4C%2FIcrphR6wydfm8A%2FyJDhkyXOZd5pJUwx50EMKrsy%2Bi9K9MlNnRg5k45Lokr7LMVMAP36yXOIx3u0VCxFXEyq8qEbap%2BYcSTrpnpX8vbp4Nvyzydl3Pw9RR%2FcSB7e9PC2HM1NUnM0ODR9%2BfarNkneYN3OVXqQQVTMLAIDF530OTlMWJhaDGgWcCxyicrhpCAqu28mMppKH4jUnlUaX6HAvN5gSFk1EKZ1kMTLoBjJp29JJiYeaQmvSxRGnfJd5xeh%2FL20ufnl99%2FAu4n6yXaDoIX4Y1CVUyBpADm5QxiE5A9I1Vit6ZcjVRGqXRdWlq8Q9Vfz6lgrXyQCkxfzmnacNrgfOkhnKMZstEQSw%2F59J8%2BPuyuB2SDgTYPyEMyTTpajoEMKZe%2FOPRRpYo8pJ2wCQio7n49RxnxcNCqmJYSuXipPop8wcPWFnQHIYMHaK16NZbgkvcDRJLp3nMVqZV3DsL27RjpZJLWJnUJYWEVRjNmza%2FjaLzBP9BWvapoYN3q8t%2FsH6aAqRPJvBhbHYN0XoSUbSFMOPrwL4GOqUBRXgg2L8TGMQtNB%2FOkhKDKyyK3K1M%2F5XcRKaj%2BTs5dxjsU0mJRJtdasUUKKbFmO2EEzQ2LzJ3bbcmTqBBS%2BBubyqLMIWYYLk3sgH4sTWRFbGJvkVHBidrcCNGd6W7a6XGBtwEFAC3wjcOMUVxm3424UVs0M4Y%2Fe68TQzhgJ1t0zaeIcfIkCtTYnYQKCrjab7H75lcL73zWxEq8rs3J9dfeqg28TUh&X-Amz-Signature=cbaba329c80ddfc32193a5a60aa344f2910c526e2f6cca5ff0c09b0645d9fe32&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
