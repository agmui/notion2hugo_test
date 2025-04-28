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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DUUTLPU%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYXdN4iDpPaMGepX2B7DwrhKuVCRVtLJGz4vOKdYx5LAIgQ0aqzsOWMC%2BbU%2BxgxxRe55%2BjeXxE3RxmvgL8o1oEW34qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkRMyEqhgmF7EDkLyrcA4c%2BLi1meJpmDCuhAbcN5CQjZBl84LjVWSUtNaThFDs57%2B2wVGw9y6xGE4IJvNunCWFb7wA5AhPrQfEOSBdUB8gm0oZHephVAvCc84q9Rq2W%2BloWSe7BEKlB1nPY25NWAyhxCgS0uHglRPsEv0iI29HGZnRjvdg9Ms12DZ1%2FZvl3dMMr%2Fpua%2BUn057LMoh3Rh3swlcVBz62mpDLB3W9ehCRF7eY04Dp7vzp3aY8EufUnk6L6M5j%2FdupDgpM459ysrQdMckgOIXfoLvwx8PbvOOlZeAfhqGmb89rtnwmj9UZAfJbcHAvDyh91qz1MtHJo4QIcDfCgRl6gZ3i%2FbVNthrNblevGOp1WHWHM1vUGQAVT57ZzVbwT5J0Iv4F78TAgPMcEKmSSrwBu1GJZX0jMxsi%2F%2FiXH5%2FSJ9IceFQg2NBgWaWPiy%2F%2BSqX2cHbQOsBvvEp9bMzlLmUUW50JU1ZEIm2pdUKtyRewGB7gezH3s4xq%2F%2FgTRPpFaCqI8uYIVAJrl3TIDa6t5f9G7wB2Z8xXQcqF44GCit6kL6xOYlSwNmWQJ%2FDxzsPjtfpqgsDalo%2FNlG7rsihbrvitvGeuGYBmaC4yJ4Hwo%2BWZhGjia3gsDD3RGoLZQ9KwHDA1r%2FvPYMP2JwMAGOqUBRhpQiEhwwHgnNye61vtFtS93rWizM1sofm1EIlj%2BBDuF0k94ZjeYycmsf60%2BEJOd4UCios%2B4PIhu6H9q9r9UcMQpRAJ7954ZXu9g9y%2BCHbyixN0H3PpuilldjO4j8WzGyIByKj9BI0KYuTMZlGB9kgk0C5kKSc3Ptsu7vGtjiRoOAhtWRmeKAp9j47lSZivclwv88%2FF5yGNl0EFzDAsVXtQn7w1%2B&X-Amz-Signature=3363ad2735fbe59b0de6a3e420e76b02e0d80e1870fcf8d0b7eae5f1628f9022&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DUUTLPU%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYXdN4iDpPaMGepX2B7DwrhKuVCRVtLJGz4vOKdYx5LAIgQ0aqzsOWMC%2BbU%2BxgxxRe55%2BjeXxE3RxmvgL8o1oEW34qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkRMyEqhgmF7EDkLyrcA4c%2BLi1meJpmDCuhAbcN5CQjZBl84LjVWSUtNaThFDs57%2B2wVGw9y6xGE4IJvNunCWFb7wA5AhPrQfEOSBdUB8gm0oZHephVAvCc84q9Rq2W%2BloWSe7BEKlB1nPY25NWAyhxCgS0uHglRPsEv0iI29HGZnRjvdg9Ms12DZ1%2FZvl3dMMr%2Fpua%2BUn057LMoh3Rh3swlcVBz62mpDLB3W9ehCRF7eY04Dp7vzp3aY8EufUnk6L6M5j%2FdupDgpM459ysrQdMckgOIXfoLvwx8PbvOOlZeAfhqGmb89rtnwmj9UZAfJbcHAvDyh91qz1MtHJo4QIcDfCgRl6gZ3i%2FbVNthrNblevGOp1WHWHM1vUGQAVT57ZzVbwT5J0Iv4F78TAgPMcEKmSSrwBu1GJZX0jMxsi%2F%2FiXH5%2FSJ9IceFQg2NBgWaWPiy%2F%2BSqX2cHbQOsBvvEp9bMzlLmUUW50JU1ZEIm2pdUKtyRewGB7gezH3s4xq%2F%2FgTRPpFaCqI8uYIVAJrl3TIDa6t5f9G7wB2Z8xXQcqF44GCit6kL6xOYlSwNmWQJ%2FDxzsPjtfpqgsDalo%2FNlG7rsihbrvitvGeuGYBmaC4yJ4Hwo%2BWZhGjia3gsDD3RGoLZQ9KwHDA1r%2FvPYMP2JwMAGOqUBRhpQiEhwwHgnNye61vtFtS93rWizM1sofm1EIlj%2BBDuF0k94ZjeYycmsf60%2BEJOd4UCios%2B4PIhu6H9q9r9UcMQpRAJ7954ZXu9g9y%2BCHbyixN0H3PpuilldjO4j8WzGyIByKj9BI0KYuTMZlGB9kgk0C5kKSc3Ptsu7vGtjiRoOAhtWRmeKAp9j47lSZivclwv88%2FF5yGNl0EFzDAsVXtQn7w1%2B&X-Amz-Signature=db6a673a3d08eff6ccb3400e008b5813d1b00de7c7e952a9eb3d8bcc45e94e9b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TH4SIXX%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvRCAVf1mudV3W7WfDB9BOk26m56KDLrp9luv%2FWhs7gwIhAKUFqtHOBIehN9DIO9g0xzJw7UBSYqIdYQFfLC0xunpcKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFZy82Pc5qUrSTPB0q3AOBkEMTeafWEeuF8w5alB8bxoichimM%2BbIyyveKMYM8opI5Ptpo5107GFujBSHiV1CRHmIH9H7Wz%2FcpSqJcjEK2vDQACPZEcH7bwvGfH7JELooxRCjOKxD4XnXr%2Fn4MPUk39nX7HtrXM7%2BCpyQlGWDAmS%2FTKTnohvjUw57ysewuWT4lxlE4z6ego9A7DVOB7s8sfZ7R%2F9v6pA3DQKyIqruN%2BpKF5nY%2BTmdo5UTM98xyGW%2BG7CNE5GeWJrsPYW%2FpNX7MzOtA52nWc2Ajwuzjxdnul1C5%2F89bk8st8pQNaDd7Ir6NlZDV4yXzT9pO2mYJmZ79vS1zTciUPrbdEoA7pOYzwIbG00BmnGa5TRfJWKOwqNEArglDAMuUFNjUjj9bVA3XqDJHy3y6%2BPY9rzL082Ar1PWeOcBGPKe8s%2B1EdaCbgO0QMj9XAaggeIud1X%2F87EZlC%2FeT9ttIAt8RHbN4CEs8wmgwvwkInhVDHurY9E7Yncy3xyzkDEW%2F53qV965sHErVNoQrGSzk82%2BmL4tWCXsrlkhz%2FMZY1J7v%2BU%2BxANC24K0kX096FV8y10Gsk%2BwcZiRAytiK3fiii9XO8ztWhC2L%2BacseILsAjP0yOow58nCA9ZaKfQWQ2XaBFxq4TD0icDABjqkARChYlag5EIk%2BGorKmdmOd1kC12cet1HE9WNANrLa%2FDiYEn1T9qC5OBQfCXlbWQHY0hFXd0M7NZdPXGiiOQjK1ZWT%2F8O0FM%2FN9lw%2BWLd6isI%2Bt%2FGand31yptZyFPRFhhLmZc7zuzOWCP8AeMAEqj589TVdgC9PuCJrbAxLJLdZZpnKGI8fP5X5f%2B5i3jjkq%2FqkdEY5fvUPsirFG3ppRSjswqdWvO&X-Amz-Signature=9d145c0143a64faf5787128c00edc418a0f883126545ebb9d4bac462a60301c6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGAWT2OW%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLDIGTqYY2zOzBcYLW7mixNtL3n0SbZcUXu3DQlHrcDAiEAnLWeXo8xtD1j1%2FFy%2B18hhn9mkhlbyojTanX27P%2BY1%2BQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFTPAjYlELKQUEOXHCrcAzZnIZwC2fYEt8JmveYzpRLSRyQ4xzPVuO0Kc0todqndNZXLXrZHnBN8WTlefGW9qG%2BcokJeCTt11JHuK8EsMRW54j8gDPa54MJGW7m3osKRdbABX0HvarNyUxPKIsKfppGkbixUbSkbQ8zpsHNzvLjCnhIFimpJB1R7o4%2B24D656Vgr62lj907dUhysg2SQrGqq3itK%2BKhQy3NkjxoRk6bWfjBjaj%2BojCnEpPjGozIMuQKHyUuxfCacZZYar4nWtSnN4A3eBuXaEw7RODVZROCrtIjw4MBN3F%2B1g49Xlf1YsSaBlJu3ccoiQT5i1Iv%2BnqZUu%2FZxp%2FkVh2kHytPzy9rcPtbfTVeFsp%2BLF95P72XkIPW7%2B0JsZwprjb4gcJQs5ruUEOxIenca76fZHFnIvkdBrOJfaJb%2BTiNWOWAXjH7E2wT4Ri4L%2FphcAYQTYmcBX4PlVPX5VzT5bl3qxZp8v%2FLpcbaRDxYnuLa6JolbOeQK615dxVfIo7ReqCplmmT4CAbrpwODtEec%2Ba4AzJ19Y08HKXo96EGfqouUO5FEvQKqBKR7EkAdVXeofqXlNUn4uab64f7L9F8C6KuhaTzPSJVDIPn%2Buk4i2xfvs7oPcRF%2FTEL0gLl7ohwRfGGOMI%2BKwMAGOqUBIZlx1RtMD3OuUVICzQQHARss8VOjWtMVsCgwZ7R%2B9bDc3KftPLn63QXKMOvh05PA8CHc0Mw1WZFryQRtA%2BGYzNxlF38jeGvJswFLbHawVZnFV2ZjX3PPoSS78xQLpI2uSwuPZ%2Bc7Nj6NI%2FXT%2F%2BkJVZZEK1JG56NwaxJu5kMrG%2BEicVO7vesg7a9aOzLgMBB8rfAgvG2QBtmsxsCpKgwo%2BejFdgTU&X-Amz-Signature=6cef381ce098acbb1af0768e30c20988984540cd7a96821216276d1075b79a76&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DUUTLPU%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYXdN4iDpPaMGepX2B7DwrhKuVCRVtLJGz4vOKdYx5LAIgQ0aqzsOWMC%2BbU%2BxgxxRe55%2BjeXxE3RxmvgL8o1oEW34qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkRMyEqhgmF7EDkLyrcA4c%2BLi1meJpmDCuhAbcN5CQjZBl84LjVWSUtNaThFDs57%2B2wVGw9y6xGE4IJvNunCWFb7wA5AhPrQfEOSBdUB8gm0oZHephVAvCc84q9Rq2W%2BloWSe7BEKlB1nPY25NWAyhxCgS0uHglRPsEv0iI29HGZnRjvdg9Ms12DZ1%2FZvl3dMMr%2Fpua%2BUn057LMoh3Rh3swlcVBz62mpDLB3W9ehCRF7eY04Dp7vzp3aY8EufUnk6L6M5j%2FdupDgpM459ysrQdMckgOIXfoLvwx8PbvOOlZeAfhqGmb89rtnwmj9UZAfJbcHAvDyh91qz1MtHJo4QIcDfCgRl6gZ3i%2FbVNthrNblevGOp1WHWHM1vUGQAVT57ZzVbwT5J0Iv4F78TAgPMcEKmSSrwBu1GJZX0jMxsi%2F%2FiXH5%2FSJ9IceFQg2NBgWaWPiy%2F%2BSqX2cHbQOsBvvEp9bMzlLmUUW50JU1ZEIm2pdUKtyRewGB7gezH3s4xq%2F%2FgTRPpFaCqI8uYIVAJrl3TIDa6t5f9G7wB2Z8xXQcqF44GCit6kL6xOYlSwNmWQJ%2FDxzsPjtfpqgsDalo%2FNlG7rsihbrvitvGeuGYBmaC4yJ4Hwo%2BWZhGjia3gsDD3RGoLZQ9KwHDA1r%2FvPYMP2JwMAGOqUBRhpQiEhwwHgnNye61vtFtS93rWizM1sofm1EIlj%2BBDuF0k94ZjeYycmsf60%2BEJOd4UCios%2B4PIhu6H9q9r9UcMQpRAJ7954ZXu9g9y%2BCHbyixN0H3PpuilldjO4j8WzGyIByKj9BI0KYuTMZlGB9kgk0C5kKSc3Ptsu7vGtjiRoOAhtWRmeKAp9j47lSZivclwv88%2FF5yGNl0EFzDAsVXtQn7w1%2B&X-Amz-Signature=3a6a960b3c1837d0f93086336e0d19f90722bf1f2a061a12022c92bddf4fb18f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
