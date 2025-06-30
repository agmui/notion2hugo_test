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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JR2BPPW%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlT%2FLskM%2B%2FB7CatJ3YQM8v9FSiVM%2BtdxkCUwW21%2FikkAiAAwZvitJsgvrOREOnGekHZ732hNBiVX4g7DKjFk2ZooiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1kdOiXxjxuTFpvFDKtwDJknKTVtXfQe9gZGCTaqaDf55ROwZ0ego26UoqP2lHE2HUuPUXp54V1Fiu%2FTz9bZE1094ODd4qCSIEk3lrIPH90BeczNvcEU%2BKJe6FUtj8NhP0cv5N87xOZ9JKsLd62UcEL5XHwAR7vGH8RBKiAT2TJRcHhc2fgStxY0IBHt99TxjYkhQqQpyW8nd6FsihuXGUx%2BLpKo5E5EQz8ygeQMXxcfzSooPhDI7uJTbTmp93zoLO8RFIhQbeM304IZ3NVHf0zwp0chrBvPxhASj7Oik204ExsZAw3hGhttXPrq1ZJMlCsFs%2BShHL%2FR1ishCzjmlbcygliDqaTBHc70perxNAtA6PeNPdgpq%2FTCXm5KNN2oJiOZs1Iyl64lTCr%2FxH0yo5rG7PVcEMSxQQ0PDAaQTwLO%2FcZ%2Bfjq13vP5wVIbuLpZb0ZfY1VDZnWWKvChEaibAunrEXJli2Tdf0v%2B%2Bkc%2FU6FqU3WONT81uUbujQLdZn1AJNkHxldA00Ge0HbakJ0DVo1l8KZ9eyTMMc5%2BsVBWE0Zgvi1%2FKJ8ycTLA4p3Az75HoN3PJ%2FZN8owOvFhVqNzd0ZVSXmPGdcSFs7Un1dvQ1DnZvPlrlhoRsm2B43dg1fhNVZPhJVAoOHCYJsYEwlaOJwwY6pgFc02xZQ%2BDLXPn686RNqy7FEJXLYJPnWA82GBqxc8iiN66zUSqFYi%2BQ4sYHDKld5E%2Bi9g5DfPAsSz1JhcmTUqngMBncL35dSJVMu51HJd8HEsvU%2FWOYlSU3%2FlElfr0DmJMedkdV5sttxnw9k0e20QCw%2B6Ax3uH%2FRGKTNkDAL3H4kssLT1XKSJDT4zlH6i30py%2FMCv8d%2FNR9YFzPlDwu92T02w8WgA5A&X-Amz-Signature=d2dec9f334e84e7d0448efbc207ab079fe60d4bb5798ae03d716e667da4e725c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JR2BPPW%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlT%2FLskM%2B%2FB7CatJ3YQM8v9FSiVM%2BtdxkCUwW21%2FikkAiAAwZvitJsgvrOREOnGekHZ732hNBiVX4g7DKjFk2ZooiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1kdOiXxjxuTFpvFDKtwDJknKTVtXfQe9gZGCTaqaDf55ROwZ0ego26UoqP2lHE2HUuPUXp54V1Fiu%2FTz9bZE1094ODd4qCSIEk3lrIPH90BeczNvcEU%2BKJe6FUtj8NhP0cv5N87xOZ9JKsLd62UcEL5XHwAR7vGH8RBKiAT2TJRcHhc2fgStxY0IBHt99TxjYkhQqQpyW8nd6FsihuXGUx%2BLpKo5E5EQz8ygeQMXxcfzSooPhDI7uJTbTmp93zoLO8RFIhQbeM304IZ3NVHf0zwp0chrBvPxhASj7Oik204ExsZAw3hGhttXPrq1ZJMlCsFs%2BShHL%2FR1ishCzjmlbcygliDqaTBHc70perxNAtA6PeNPdgpq%2FTCXm5KNN2oJiOZs1Iyl64lTCr%2FxH0yo5rG7PVcEMSxQQ0PDAaQTwLO%2FcZ%2Bfjq13vP5wVIbuLpZb0ZfY1VDZnWWKvChEaibAunrEXJli2Tdf0v%2B%2Bkc%2FU6FqU3WONT81uUbujQLdZn1AJNkHxldA00Ge0HbakJ0DVo1l8KZ9eyTMMc5%2BsVBWE0Zgvi1%2FKJ8ycTLA4p3Az75HoN3PJ%2FZN8owOvFhVqNzd0ZVSXmPGdcSFs7Un1dvQ1DnZvPlrlhoRsm2B43dg1fhNVZPhJVAoOHCYJsYEwlaOJwwY6pgFc02xZQ%2BDLXPn686RNqy7FEJXLYJPnWA82GBqxc8iiN66zUSqFYi%2BQ4sYHDKld5E%2Bi9g5DfPAsSz1JhcmTUqngMBncL35dSJVMu51HJd8HEsvU%2FWOYlSU3%2FlElfr0DmJMedkdV5sttxnw9k0e20QCw%2B6Ax3uH%2FRGKTNkDAL3H4kssLT1XKSJDT4zlH6i30py%2FMCv8d%2FNR9YFzPlDwu92T02w8WgA5A&X-Amz-Signature=25545cf734f53f483927e70ef91bc422b4b336d519306352cfd2aea9e7912c48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JR2BPPW%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlT%2FLskM%2B%2FB7CatJ3YQM8v9FSiVM%2BtdxkCUwW21%2FikkAiAAwZvitJsgvrOREOnGekHZ732hNBiVX4g7DKjFk2ZooiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1kdOiXxjxuTFpvFDKtwDJknKTVtXfQe9gZGCTaqaDf55ROwZ0ego26UoqP2lHE2HUuPUXp54V1Fiu%2FTz9bZE1094ODd4qCSIEk3lrIPH90BeczNvcEU%2BKJe6FUtj8NhP0cv5N87xOZ9JKsLd62UcEL5XHwAR7vGH8RBKiAT2TJRcHhc2fgStxY0IBHt99TxjYkhQqQpyW8nd6FsihuXGUx%2BLpKo5E5EQz8ygeQMXxcfzSooPhDI7uJTbTmp93zoLO8RFIhQbeM304IZ3NVHf0zwp0chrBvPxhASj7Oik204ExsZAw3hGhttXPrq1ZJMlCsFs%2BShHL%2FR1ishCzjmlbcygliDqaTBHc70perxNAtA6PeNPdgpq%2FTCXm5KNN2oJiOZs1Iyl64lTCr%2FxH0yo5rG7PVcEMSxQQ0PDAaQTwLO%2FcZ%2Bfjq13vP5wVIbuLpZb0ZfY1VDZnWWKvChEaibAunrEXJli2Tdf0v%2B%2Bkc%2FU6FqU3WONT81uUbujQLdZn1AJNkHxldA00Ge0HbakJ0DVo1l8KZ9eyTMMc5%2BsVBWE0Zgvi1%2FKJ8ycTLA4p3Az75HoN3PJ%2FZN8owOvFhVqNzd0ZVSXmPGdcSFs7Un1dvQ1DnZvPlrlhoRsm2B43dg1fhNVZPhJVAoOHCYJsYEwlaOJwwY6pgFc02xZQ%2BDLXPn686RNqy7FEJXLYJPnWA82GBqxc8iiN66zUSqFYi%2BQ4sYHDKld5E%2Bi9g5DfPAsSz1JhcmTUqngMBncL35dSJVMu51HJd8HEsvU%2FWOYlSU3%2FlElfr0DmJMedkdV5sttxnw9k0e20QCw%2B6Ax3uH%2FRGKTNkDAL3H4kssLT1XKSJDT4zlH6i30py%2FMCv8d%2FNR9YFzPlDwu92T02w8WgA5A&X-Amz-Signature=ffa1aaf1dfe4fca0a375bd66862623ece9ae1b6413709e090be66fef6726bebc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX4R5U2Y%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD80ih%2FopHp1hPeqLhFCWR06mt8F4yjr5GQKU%2FlGmCTuAIhALlcIueEmCAsBo3Zfy9rqVg0TZIO%2FEMLop9jKln73TpNKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSw3xk1KRbPw2kdS4q3ANIvSZX8wO3Q%2BaOTHYNLpRBQgLSvifKKtmOIu85HSMkZmU%2BuOXsaSIKggX5UY8envEybl702BGEDBR9t%2BiIV0YtsUrPRlGABUcL8%2BScEz2rDAEgoTVu6qEITCaxeybK485DyKsCNCTgN7OMkdBkxs2Xpr2VyIViTIFO6HhWtp%2FUEkLDtIoPflI2xBP%2FPaCrXjn%2FspL5PbpnA0o%2FFxthkAqSVcwEcZc7hTIjgPfog3VFMBczDR5a9yhsQ84tBcf1%2B3OjHodQ%2F6BL83hoHT%2BAfdOB0c%2F3eMjQwzpcnnWqiEHurIqvq%2B%2BMP4G4eKKGwSIan82NCp9zv8IZNPCfC%2Bf6R%2FEISmnLnOR%2BsGxEBgaArqXp%2FS2AG6cIjFoYSFslnuZuJwDjx3SdqWJiGqXfIIYY9JxVNvleQaUpgQ%2FYg4PNEp4g8udClAkQj%2BVlBNCOxeBjBXTRLcZYkZnAJaJsSfCYS%2B5taWQ1fiOkQQwoiQiknkoxhkCAsrPrqXKJvx5aAqBIhL13IqmIwR%2BumCALGAxhTlBJKlBuSiY5OwN1SMWKZ31LgftdEnrT3wk6xoXEW8Cma%2BDyYE10zPcMFf1XCclkLIsy7LfbSj7erxWxS3cdP0LydHknA3CijL1eShPMEzDqoonDBjqkAZktyCYZOp7OcdBv3Dr3wmx3rQpg2XjxfgT%2B4NBsaP%2FFt7PdTNBoObQ4WipEKcEfMTNH1x2WP7DZmeJuSlfA3ir604ARZcuu%2Bpw7ItX1Yl7pUHmlChc0%2FBiuPQ9AC8%2Bk%2FsPJW0izKHFT7oATI2bJx9JjsN2jVOtu0E%2FVb286KLXpooS4v22s14p%2BYM24TvnslBHPB6QmT0M73OBy3%2BhhXPXPNmno&X-Amz-Signature=5e8ca8d7d0c48241381a6db16bf22b2160fd9a05e5b646b7e00029a29c42b8b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ILBQXQ7%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQBivc9WhcpLpPjBEDMk0dDk5shMJ5XkM1OxR3NDI21QIhAOA4AZ3LSG%2Bfhf3%2BXlgAyxwhPSlDHNKUrn2xza1yhAyfKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwA40UxXqg2nLyPc8Eq3AOQSuXYe5H3z2DH%2FOho9fEErcgoBvhR91zK0uP9QXLSipAYdSdjNaqJhNH1hP0xh%2B9MmFn95LhVirhVSjsPEkyC%2FXfmSEuKyOCWrpHSsz%2BmxKKr%2Fsn6P2%2FcEOw5rHL%2FFg6Y2rAPyB09q8dbHV5%2BuXNxkMhE0diMpwrhpl%2BOu%2BGGRVuz5R%2BRKSgMU5urGHmtE%2B7Jf2fUO6vOflah8KgiAFoSFskMTMXMrTAsRUBodnO5P93jlGnbzKkYbvtj51mLEvJqvpQjzqATufjQeKeJthAxbu2rA6zLxE0mOC21RdFs%2BmQdnGZCUFObIEIkjGjDZpZx9wteIIL7UmWqQjvZKA1AWxzlLAUI5LdRVu6BPI3OcBPC589O7aum9I2PXVgBe%2FnJ2WeXq7glqnx9FP5NliLLwBVeh8EgK2BWVbP1zwFI3j4skk4A1ok5PFvj2%2BM2kc7oFQ5NOt0DK3DDhLezeUD6V7k%2FPNtXdPHHNsx%2FSjuP4dcZE8cB9GPi1r03JN2Wmw5FNeyGEXgzy8bkiz0PugsnwHfPO5L%2BRwnhkGZw6otIVmvz%2FV15QjWDSm4lZOwAN37z4%2FZFfxCx0Pc%2F64gGcDz%2F14bB4M6WqEmyfBgQanA2V8RURblaQOIhBZE3VDDsoonDBjqkAeisUU0oXrcuIojWhlWIBFOFOcsbQ1TumRR38xjuqDYvqot%2FpSKPmz9LF8Yu7ueW67zUKrb6Goa2OmjFgfRS%2FssKH3sEJHOGY3iAs%2Bfd98FyiZT79MKweR8dYRZ52zYi5Qb34k0fUBvuzMz5ORCuk3i66OdNS4pMOtsMwqZIkHm%2BrPSyDznEvmRgmz4BcZ7br8a0W%2BdW%2B3lptKm79QfuL6I92b1d&X-Amz-Signature=93cb53b6e7feaa9271accb135a487a6633c047d9c8a905809e916480b01bd911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JR2BPPW%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlT%2FLskM%2B%2FB7CatJ3YQM8v9FSiVM%2BtdxkCUwW21%2FikkAiAAwZvitJsgvrOREOnGekHZ732hNBiVX4g7DKjFk2ZooiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1kdOiXxjxuTFpvFDKtwDJknKTVtXfQe9gZGCTaqaDf55ROwZ0ego26UoqP2lHE2HUuPUXp54V1Fiu%2FTz9bZE1094ODd4qCSIEk3lrIPH90BeczNvcEU%2BKJe6FUtj8NhP0cv5N87xOZ9JKsLd62UcEL5XHwAR7vGH8RBKiAT2TJRcHhc2fgStxY0IBHt99TxjYkhQqQpyW8nd6FsihuXGUx%2BLpKo5E5EQz8ygeQMXxcfzSooPhDI7uJTbTmp93zoLO8RFIhQbeM304IZ3NVHf0zwp0chrBvPxhASj7Oik204ExsZAw3hGhttXPrq1ZJMlCsFs%2BShHL%2FR1ishCzjmlbcygliDqaTBHc70perxNAtA6PeNPdgpq%2FTCXm5KNN2oJiOZs1Iyl64lTCr%2FxH0yo5rG7PVcEMSxQQ0PDAaQTwLO%2FcZ%2Bfjq13vP5wVIbuLpZb0ZfY1VDZnWWKvChEaibAunrEXJli2Tdf0v%2B%2Bkc%2FU6FqU3WONT81uUbujQLdZn1AJNkHxldA00Ge0HbakJ0DVo1l8KZ9eyTMMc5%2BsVBWE0Zgvi1%2FKJ8ycTLA4p3Az75HoN3PJ%2FZN8owOvFhVqNzd0ZVSXmPGdcSFs7Un1dvQ1DnZvPlrlhoRsm2B43dg1fhNVZPhJVAoOHCYJsYEwlaOJwwY6pgFc02xZQ%2BDLXPn686RNqy7FEJXLYJPnWA82GBqxc8iiN66zUSqFYi%2BQ4sYHDKld5E%2Bi9g5DfPAsSz1JhcmTUqngMBncL35dSJVMu51HJd8HEsvU%2FWOYlSU3%2FlElfr0DmJMedkdV5sttxnw9k0e20QCw%2B6Ax3uH%2FRGKTNkDAL3H4kssLT1XKSJDT4zlH6i30py%2FMCv8d%2FNR9YFzPlDwu92T02w8WgA5A&X-Amz-Signature=27d23b965d5b00862e97de725c2dd1bab6830cbdf426ae41ac7c597d52187831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
