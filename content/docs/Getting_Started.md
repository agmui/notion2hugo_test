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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I7OF5CK%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCKJCH9MTFSyslcGkvNZmTAgYvaeZ%2B2d5IgWv5gnlxtZwIgUEXigwMJRS5NyOOlla2xC64q%2FU%2FkGXuDTjeydwt1oZ0qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMRK9ShtFjcMon5eyrcA0D00fBGjSvmboaMjZJ5W2dDTVZDOcRayE4qu%2F%2FMbXXwWcmC%2FZh5MDAHyR2usIS9DREwM%2FIbBXzdpLXCVy3lXPSt0q0POhm3ZXsirTYavg8AlNRybdwFpLjGODbNeV7vn1j1AG%2F3loTdlOapvK2AMXfge77UWoKtEju%2Bs4TjZ4H2Oo%2FJtEdhdPZ%2Br%2BaC58qeV2Z149mWcFm1z7eTa7n5mwgyvb9IOqjHvzByy3GrwQC4qnpXNhSImZseHZ6VwnW9fIlqR1D0AKlNMC0sd5zU7P0lQbGI%2FXpVHffUAQM0vrt68hAAT10sDBWjqddDSm%2BNxKgmDJonF4l3z59jaR5VIBGoKz3M4nHPE193%2Ff6eYGsSGNfsYA0q445bkxf9aMYASjoAwGzmrW0yW5uzLV78LZNVn28Lxpdvk7SsSplo6oVJKEdsaL0eZm3inXirnwddUhHwuw%2BCPi9mmQCRTGWQoYOCMkMm78Vj6I8fSbBnWMFyjWUpqeedb2v%2B1dlvDESLcIyJj5EU2R6TEhSPM0QHwUMJSVNVkOtZwfJt6gKaw2JF4KXUldQHbL14td%2FaxmND0SLYyO5uv4yMuQ5eKz%2F8r1sIQsJGpJy1xDhar4VrXSeDkhwqlb9LfXRa1KYxMJiGnb0GOqUBBEPUTXJ4%2BJw%2BJhdNSboA6L1nJRtr7irf5yjMJReoVtlq4X6Shg%2F3GtCDU64FfAKsnuRto2vZTDoKRBXwzqbtamLYdkqy8LQeDityfTBscRksfRnu77YtSiKqHxATuWViYV%2FTnJSV2OMIsDv0mESdkCXXtisirBljQooXJSYxl3Lth25dhjK9u4V1u3ZBc0k05VTgEBd0q9p%2FRpy5z0ZL9xMzMIz9&X-Amz-Signature=7df9acbacc3e0231e08f1621ae35c02bb6b75c1c824894ff80754d08ebb2b74b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I7OF5CK%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCKJCH9MTFSyslcGkvNZmTAgYvaeZ%2B2d5IgWv5gnlxtZwIgUEXigwMJRS5NyOOlla2xC64q%2FU%2FkGXuDTjeydwt1oZ0qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMRK9ShtFjcMon5eyrcA0D00fBGjSvmboaMjZJ5W2dDTVZDOcRayE4qu%2F%2FMbXXwWcmC%2FZh5MDAHyR2usIS9DREwM%2FIbBXzdpLXCVy3lXPSt0q0POhm3ZXsirTYavg8AlNRybdwFpLjGODbNeV7vn1j1AG%2F3loTdlOapvK2AMXfge77UWoKtEju%2Bs4TjZ4H2Oo%2FJtEdhdPZ%2Br%2BaC58qeV2Z149mWcFm1z7eTa7n5mwgyvb9IOqjHvzByy3GrwQC4qnpXNhSImZseHZ6VwnW9fIlqR1D0AKlNMC0sd5zU7P0lQbGI%2FXpVHffUAQM0vrt68hAAT10sDBWjqddDSm%2BNxKgmDJonF4l3z59jaR5VIBGoKz3M4nHPE193%2Ff6eYGsSGNfsYA0q445bkxf9aMYASjoAwGzmrW0yW5uzLV78LZNVn28Lxpdvk7SsSplo6oVJKEdsaL0eZm3inXirnwddUhHwuw%2BCPi9mmQCRTGWQoYOCMkMm78Vj6I8fSbBnWMFyjWUpqeedb2v%2B1dlvDESLcIyJj5EU2R6TEhSPM0QHwUMJSVNVkOtZwfJt6gKaw2JF4KXUldQHbL14td%2FaxmND0SLYyO5uv4yMuQ5eKz%2F8r1sIQsJGpJy1xDhar4VrXSeDkhwqlb9LfXRa1KYxMJiGnb0GOqUBBEPUTXJ4%2BJw%2BJhdNSboA6L1nJRtr7irf5yjMJReoVtlq4X6Shg%2F3GtCDU64FfAKsnuRto2vZTDoKRBXwzqbtamLYdkqy8LQeDityfTBscRksfRnu77YtSiKqHxATuWViYV%2FTnJSV2OMIsDv0mESdkCXXtisirBljQooXJSYxl3Lth25dhjK9u4V1u3ZBc0k05VTgEBd0q9p%2FRpy5z0ZL9xMzMIz9&X-Amz-Signature=0e5b7b6435e54d460a5c730decc607782a23f163d30682601366624732207eb1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDPCVJNP%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIDw23sT0OCofB5AyGcSJSdsz4tcRvQMEjm5FEEBiDOlSAiEAininVSfIuQgqlmI%2F03jNjU7aH2We0hlg5r5luyr3MB4qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBPrJf9AHoK9ZN4nircAyqgGMh%2FVTooRU2vWt8BSQi%2B77bnKlf9nwkF3Z%2Fb51iTpGkZUrs7XDpP55qsAZEwOxJmrmpqb2mkrLb7Dile%2Fps0Xf4fBfyNvFEL8JJJfKklFP9LZWj1l6FhlPJXEnJt9jB54xRXohb6GWNHb%2Bhkfo6G1sjvmNMu%2BfOk6U1w5q%2ByLbUtzyecO6KBpTfzbBuSKQ3Bs8dZT14iB4lX3OJKqZQPOehBmmnK3okZoh6mYzsEBs3d9%2FDAlQEMEIJL5n9kqx%2BrFTy4Qt5jtuFcK%2BciKFfNz8sngMYiLH36nGz1wo3k9xSZ9ZsTKYRa%2F2mmjGiLNzhwhC1ayIevaOB3zbDprYvBlBjY0UsYlltU8bm5eh0j%2FnLTODtwtxhfdg2Cv3KC5XzfLVMzRJ2%2BGBVdhccjsd9YfonB8pys4bzeDuE4nBZoU1o6TuDZsSyu8srQyOm7qpRwC9b%2FqHoBKYJVBLdTWCtujmUtEJEowjAhgyiAwGkhEI%2FTrqKHUWY%2FxlrXeELdVkFw0dd1DLro3n3HdoNr%2F%2ByljTNwEdyGPtgOuab5506pjZlr0Umcu%2Bi2HvFtIw07PeARHuvIaWhV8AYeaFxls3nMUCO7jFgQ5SNFuxTfYPnEgutLz%2B3A8ISBQOfrMKaGnb0GOqUBnNLDAr52fxezsJRaDxNKz%2Bj5Tay6QI5fpbRL4C8iQJTuF88Oip3K5f8wavTVEacfkAqmIXl%2Fc398xr%2BVhJ5v%2B3X1fU5oW0np9cffqkYBcbWQENlESJVZU4p8Ac6SjVcyNKGY45uN%2BZqOh1qrayo2QTWLpk7kRZQCh%2BmV%2FB4NzVF%2BxcWd5TloIv0OQI61cYPmGTEVz1T2BTdCMsDkEScNHcULffzz&X-Amz-Signature=66b0f534446e2786dd9756589fe89fa9b6d65772affb52a5182c46eed58c4d69&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3W3QUD%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCJD1vIKu1YF1O2jKYD8flFo7JjHVdLsSAmuhs620OhFgIgYA9Sypg78GhukQ23qLsBL0gLwVYOAA5Y1zDRcyF4O2QqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI87IB0lyJf0WoTjryrcA5KgzCy7ezW1y1wotp11IJEbbRbaWPxfIkE1Ln15E0MGLzxb1VxKEi1FEoqD%2BbKwQegMnrKj1XdYxStaGnqtlbbmv8Ofz5zdfP7Aqnf7j78ukDX49M0vaeX3ykdFxYiNm1uc3l2ia5qJHwtncdLnjCWW8AumupcwsCsz8OREUYfybMZtmLi%2BgfeBiHIG%2BksPDrlZUpiVl0kNo1EDftCPlsIxShnOX0yMQkcabSoA%2BedYXZ4Ru3mWyDpkNYlLIeKHy0UlO64dAcKX%2F1dCnoXrHTm5yIkAnG4VCHe5%2B0sWBbSSnIAMuSCxbqSic2SX1wCVRHhnsBq6Z%2Ff8qvdphtrb8b5jBOeFvR0BGkdGXtG1DiaWGt%2BzjTFfx9ncMN%2BOfjnLGUX1rt9JFlLPEB0nV1w8WVOMQjDWvxe4bD30MIIbTccxvNZCDsjnSqrabyHy89vH2Ka%2BG9zjRIcFrXbgdU8bqkf0zObYqHfDtCz0jpi76HbesSHRMtPOYd4XpccQKtJysF6fqd0LX4T2BUEd7KG1zDu9OxRBCKSFyFib7wKgZYj8MRZRaH5mqyTMT2HKj3w2ENObnoSmmYM8RI9sZ4qsa4rGT6YFZMujLaIKXpqmtxVPIBFtkto8F6tcLenbMJeGnb0GOqUB%2B6rrtt8xAx6sxqpbRHzA8uyxc3oMygXZVcJlvB3qTuXDMYaYV6Yy0ITbtHKqkHBZo2fxAdIcLncgeErTudzi086%2FoSYKSo%2BWvWKQoajl7rax5brZuGaK9hPs2eOsKXFqkYKM9KCpevDwLlIjdZefEKQBvsC2H0V5511x4ZQhEGRZIoWneiHz3dIXOT0CisAtGRUG3mM0Ad3PH4Hjpz88IMTw5%2F0R&X-Amz-Signature=1326e5c6b30c61f8b1740036f748aba4f48fe91a618cc1db40bb3870dc72221c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I7OF5CK%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCKJCH9MTFSyslcGkvNZmTAgYvaeZ%2B2d5IgWv5gnlxtZwIgUEXigwMJRS5NyOOlla2xC64q%2FU%2FkGXuDTjeydwt1oZ0qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMRK9ShtFjcMon5eyrcA0D00fBGjSvmboaMjZJ5W2dDTVZDOcRayE4qu%2F%2FMbXXwWcmC%2FZh5MDAHyR2usIS9DREwM%2FIbBXzdpLXCVy3lXPSt0q0POhm3ZXsirTYavg8AlNRybdwFpLjGODbNeV7vn1j1AG%2F3loTdlOapvK2AMXfge77UWoKtEju%2Bs4TjZ4H2Oo%2FJtEdhdPZ%2Br%2BaC58qeV2Z149mWcFm1z7eTa7n5mwgyvb9IOqjHvzByy3GrwQC4qnpXNhSImZseHZ6VwnW9fIlqR1D0AKlNMC0sd5zU7P0lQbGI%2FXpVHffUAQM0vrt68hAAT10sDBWjqddDSm%2BNxKgmDJonF4l3z59jaR5VIBGoKz3M4nHPE193%2Ff6eYGsSGNfsYA0q445bkxf9aMYASjoAwGzmrW0yW5uzLV78LZNVn28Lxpdvk7SsSplo6oVJKEdsaL0eZm3inXirnwddUhHwuw%2BCPi9mmQCRTGWQoYOCMkMm78Vj6I8fSbBnWMFyjWUpqeedb2v%2B1dlvDESLcIyJj5EU2R6TEhSPM0QHwUMJSVNVkOtZwfJt6gKaw2JF4KXUldQHbL14td%2FaxmND0SLYyO5uv4yMuQ5eKz%2F8r1sIQsJGpJy1xDhar4VrXSeDkhwqlb9LfXRa1KYxMJiGnb0GOqUBBEPUTXJ4%2BJw%2BJhdNSboA6L1nJRtr7irf5yjMJReoVtlq4X6Shg%2F3GtCDU64FfAKsnuRto2vZTDoKRBXwzqbtamLYdkqy8LQeDityfTBscRksfRnu77YtSiKqHxATuWViYV%2FTnJSV2OMIsDv0mESdkCXXtisirBljQooXJSYxl3Lth25dhjK9u4V1u3ZBc0k05VTgEBd0q9p%2FRpy5z0ZL9xMzMIz9&X-Amz-Signature=a0c1fd073212da90f1629c01b72c63bcfbdf727ffbe82fbdedb496ad0030e50a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
