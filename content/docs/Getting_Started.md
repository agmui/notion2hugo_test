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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WAIXYLO%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDDSBisi8sWDYwCyLRqEx4fc517sDMPgBlUPOUwVLAqtAiABt5CxcdSZTjjCdfoATFdD%2FfdELd%2FYv%2B2Nijty5QDinyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgEke%2FmyfozxVC34KKtwD3nlVLGYZIwKy74DLmyJTFPEf2o0zY%2Fts9lrFEMpnKzdlXBrZffxWat2gEI38uqRZdet7EF4fYnb%2BOdlZvsoUq%2Bs2vnN%2B6o%2BmqD4fJ2GkyC9n5X%2BRb7GUAl%2F7sMoypJCQyoLDyEECkRbLZvXhQg8X%2FJgbFSSROZ%2BUSox6KBonh3ljEFEkZq4n9%2BWnOSYIiISawUTmOOuFCwo%2FwBZ94ICItq65Z5JM8xmSsmu%2By8tv2g8Any7q%2BNDZux8glvsKPiRFYooeDlDyqyRBFCOAdhuija4G19kflcnpH7s5lYGb3x7aTOndPUiK5dlpiCIgBmil8V3YBaM4QnrURUypeXm8LYl1WQ8ZDrk%2FK%2F3ztWfxYPQluDta0euUcNegQr%2B3hdCTAe7tStpOgRPrZBW8ncrD2b21sRdN4py%2Ffl9WH4f4JrC%2FfC9F4Ep9tnsvgBi7jjry018ofFJbJrObpm48UFe7CNew5hktmLqfffrad7qn1GnYyRF6UjlVQ7l%2FkaI0qr4JRYCsg998Tga6HK%2FcYmrNYrIzTjxafpUTPIT5x%2BtCaTFoSD7ortDRTFxPu0wXsQ9asYevMyQuPPs%2B%2FJVbxNNU4cSlAl%2B689IWV1yC9DB9Fn4YNm0nn97SpmoYIeUwop%2BSwwY6pgEpiR%2BNX4YJoIeyFG2m2t%2BtCd00ZhX0UBoJmxC9yLgTgkuyLsJyyDyBCA8T8TBP7Y2iqhhxRw%2BTIiCjSaKZ7N6nVJsOGwt6V1i%2Fwiu7FtjbclUDKA1xJ8X3hlBTFHYcV1W5emebx1FhG7bdKUtdGngZNewCrAjt%2B8eOXtI%2Fn5cMdVeY3sKV7%2FDQ7%2FQvkQ54fal8%2Bub4QZG8LtYz%2BGNYt%2FxZi%2F7BDpbk&X-Amz-Signature=d6dc4903ea8e04e6a2d9c2e530cf7176494b8f04963d7dca1e39ce43ed54bd17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WAIXYLO%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDDSBisi8sWDYwCyLRqEx4fc517sDMPgBlUPOUwVLAqtAiABt5CxcdSZTjjCdfoATFdD%2FfdELd%2FYv%2B2Nijty5QDinyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgEke%2FmyfozxVC34KKtwD3nlVLGYZIwKy74DLmyJTFPEf2o0zY%2Fts9lrFEMpnKzdlXBrZffxWat2gEI38uqRZdet7EF4fYnb%2BOdlZvsoUq%2Bs2vnN%2B6o%2BmqD4fJ2GkyC9n5X%2BRb7GUAl%2F7sMoypJCQyoLDyEECkRbLZvXhQg8X%2FJgbFSSROZ%2BUSox6KBonh3ljEFEkZq4n9%2BWnOSYIiISawUTmOOuFCwo%2FwBZ94ICItq65Z5JM8xmSsmu%2By8tv2g8Any7q%2BNDZux8glvsKPiRFYooeDlDyqyRBFCOAdhuija4G19kflcnpH7s5lYGb3x7aTOndPUiK5dlpiCIgBmil8V3YBaM4QnrURUypeXm8LYl1WQ8ZDrk%2FK%2F3ztWfxYPQluDta0euUcNegQr%2B3hdCTAe7tStpOgRPrZBW8ncrD2b21sRdN4py%2Ffl9WH4f4JrC%2FfC9F4Ep9tnsvgBi7jjry018ofFJbJrObpm48UFe7CNew5hktmLqfffrad7qn1GnYyRF6UjlVQ7l%2FkaI0qr4JRYCsg998Tga6HK%2FcYmrNYrIzTjxafpUTPIT5x%2BtCaTFoSD7ortDRTFxPu0wXsQ9asYevMyQuPPs%2B%2FJVbxNNU4cSlAl%2B689IWV1yC9DB9Fn4YNm0nn97SpmoYIeUwop%2BSwwY6pgEpiR%2BNX4YJoIeyFG2m2t%2BtCd00ZhX0UBoJmxC9yLgTgkuyLsJyyDyBCA8T8TBP7Y2iqhhxRw%2BTIiCjSaKZ7N6nVJsOGwt6V1i%2Fwiu7FtjbclUDKA1xJ8X3hlBTFHYcV1W5emebx1FhG7bdKUtdGngZNewCrAjt%2B8eOXtI%2Fn5cMdVeY3sKV7%2FDQ7%2FQvkQ54fal8%2Bub4QZG8LtYz%2BGNYt%2FxZi%2F7BDpbk&X-Amz-Signature=819f5e30abc64e615f67f34f80d253e8a6dcaa3c72780d0e34d9682bf4ea0187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WAIXYLO%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDDSBisi8sWDYwCyLRqEx4fc517sDMPgBlUPOUwVLAqtAiABt5CxcdSZTjjCdfoATFdD%2FfdELd%2FYv%2B2Nijty5QDinyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgEke%2FmyfozxVC34KKtwD3nlVLGYZIwKy74DLmyJTFPEf2o0zY%2Fts9lrFEMpnKzdlXBrZffxWat2gEI38uqRZdet7EF4fYnb%2BOdlZvsoUq%2Bs2vnN%2B6o%2BmqD4fJ2GkyC9n5X%2BRb7GUAl%2F7sMoypJCQyoLDyEECkRbLZvXhQg8X%2FJgbFSSROZ%2BUSox6KBonh3ljEFEkZq4n9%2BWnOSYIiISawUTmOOuFCwo%2FwBZ94ICItq65Z5JM8xmSsmu%2By8tv2g8Any7q%2BNDZux8glvsKPiRFYooeDlDyqyRBFCOAdhuija4G19kflcnpH7s5lYGb3x7aTOndPUiK5dlpiCIgBmil8V3YBaM4QnrURUypeXm8LYl1WQ8ZDrk%2FK%2F3ztWfxYPQluDta0euUcNegQr%2B3hdCTAe7tStpOgRPrZBW8ncrD2b21sRdN4py%2Ffl9WH4f4JrC%2FfC9F4Ep9tnsvgBi7jjry018ofFJbJrObpm48UFe7CNew5hktmLqfffrad7qn1GnYyRF6UjlVQ7l%2FkaI0qr4JRYCsg998Tga6HK%2FcYmrNYrIzTjxafpUTPIT5x%2BtCaTFoSD7ortDRTFxPu0wXsQ9asYevMyQuPPs%2B%2FJVbxNNU4cSlAl%2B689IWV1yC9DB9Fn4YNm0nn97SpmoYIeUwop%2BSwwY6pgEpiR%2BNX4YJoIeyFG2m2t%2BtCd00ZhX0UBoJmxC9yLgTgkuyLsJyyDyBCA8T8TBP7Y2iqhhxRw%2BTIiCjSaKZ7N6nVJsOGwt6V1i%2Fwiu7FtjbclUDKA1xJ8X3hlBTFHYcV1W5emebx1FhG7bdKUtdGngZNewCrAjt%2B8eOXtI%2Fn5cMdVeY3sKV7%2FDQ7%2FQvkQ54fal8%2Bub4QZG8LtYz%2BGNYt%2FxZi%2F7BDpbk&X-Amz-Signature=63a2a2e61e1e093d015d318210cc0028ceae58da59179acd5d6618f91179b339&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBL4ILS7%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxNjDUxS4Y4u%2BLiCu49mqTIuoCb%2BN9HYcahUucQ%2B6vggIhALrAXILiheO0bUxbRz3jSeXOf2tBQyRHvG5VyFAoKJ9MKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw25xxi9WBt9boXFGUq3AMrUAW6Jslu9bbTuWjpTe1zoDdQ2%2Bw4lwe3KUjmECL4slwW76bqM9KoUGVbMESMRtRDlVDQzYA%2FTPN%2FU6662uBX5ywQb72iiu1vW%2F4vVDnJtMcwFf2o0tWQD3rEYPJxvGDuta%2FiWO8u3LtRCLP4Eso%2FSkKJzWHCBbuWV1osbk%2B%2FYV0AZhOA3jHXDliL%2BwQisy%2BRnZLr5Crb2i1pqolCoKBuUF734XqTFw35qNOgXK7Iz1VstOsYnvUXGq1RWIOQbGFzoqQUblcGrLehPlHUs%2F7uTVsgThRyug7uwLOaQeo%2BLqZHNxtWCh%2BCf63qNo7NQNhdjh%2FXAbeCyiHdKpqIqvNowpcjEA6RhaMf6MAUpgD7FekDzHmTlgIEOpuFHzKKYUh8gpCzQ5OlSF%2BuVvYWSxLpywBRF73ZKgUV36mjbNSecAtDrHFG86UOvqeimphhD5nGMN%2FxgNV0ikGrtoisYA%2FDuN3ooBxVSEIvqcwSnNBQnJXWLBDYYEnC8jjYQz%2FfVTgbl3QGHDoxDvBvAY%2BfVheiLv8y18wNoRBv6yH5%2BBDZkhDfsUPjbIlDmLuYFx6Gd%2FG5x7KPJgVMG6i5EMv73oAypMHT%2BEi9ee%2FLcwlaCipHyH2vPQLY3Dw5dmumLzDNnZLDBjqkAbCxddz4TN6m%2FEIMn70P9hksUtk8H8CgTgekUEZIESTVjtrSVRH3ONrCFQaV9b7X0w1tQ6lFW7jPal7jf0oHZKUdJ4%2B%2BXlO0E98Df9MDks31M%2BhlGpVEMC8sCOavE67AeD%2BN%2F6oMPhAtwanFM122IHN6YP6my8VmxzIFbikm1yAasLMZcDOkZ1miv02jJ9v%2F%2F8IBhkeKAxVlueOVM8MbVD3h1XzK&X-Amz-Signature=d6e9ef5710ae136b6c03a30a3e8d174bb3162ef7d6afc8a9a5f86f535d31eb91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZVXOIUJ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDOIHMVQBQxOyUyBhl6fFuoH2H%2BGtMUvYeXP53Yuf0N2AiEAmtK7dhHUsdqZdvPu6TH%2BH2o9hZY98tLgNqKnpfUInccqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyxSSF5C2zbeUx97CrcA%2BAJTlGm8%2BHMW%2BZvXBOXoOzkVQn%2Fn9rpVs%2BBUUOlBWM2wfYOSGKdKck%2FCLMDMPYEauvWFmMr7MaUOmSC7ceyweLOESylI4AuLE7%2BcqroOtYL9A3cRwoOmaUfilWhR5f%2FG5RKIIN2R%2BSHw8Z3jAxupFpC75lYl4z9KuBizB%2Bro8kyQfQyAsn%2B%2FPAxzWgSafCwiJPtWizmaln1O0sW6oGK8uZI4ZfxS83ykhDlh%2BcvoBJr7SQj3rAfhCjp%2BowKqFzq1BZ%2FSltMM5tiNVtYe4PfVA%2B3sfjxhqJuBuxoFS1PEK8dXApHQyjjZY3OBpay622r4t37UDWV4wnqDU8AxOYRM3sMZd1msUBoiibgxR7h4j6ORd0hUMTDXwycmZ49R5Kq5%2FxbhPzA2iQEMb2nqYTCopRuJ%2BCGdwdJ9wl9pcP64KWzm%2FtMcbJbqSYf%2FRkgjvkCPotIcaaSa70zfgbz0%2FmvauWlBaRK3aqR2OlVbR34mJ%2FL1ORyNZ7lisNqbDlXSOBPdc1DK2QxrkiW1GAHDIUZRZL%2BZrGv54NnggatbXCM70LwjRe6QJ7lJszliOGzEI4pzLhxTcYscBOpPom9uDCwdZPAYsgK9pzVXkQlFsGJSJ9xBlgmL9gME65m7soWMP2dksMGOqUBWtgfX%2Bz04fgnlIJU71NRT%2BtS2%2FnZF52pFP1si9ItJM4TZlRu6YSN2h9jPJHDQlT0Tw56%2B5K%2Bn8gFn7ogtR3ovPvDwXQ9lSFfp%2BN%2BSvK4Svc8oMK0NOSGeXap6SHX1hVjWgvvwMXXkYNTUBhWPj5p9MxMgB1oTSlc308%2BUMZ4D5MxhdgznvShpjqFpkVee07kV2SnDpYeYQAwCo2pbD38BO%2F6n9LA&X-Amz-Signature=129666148f85be114b157c73dcb0850d98961f4e2edea3d7d07c4f201e496d8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WAIXYLO%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDDSBisi8sWDYwCyLRqEx4fc517sDMPgBlUPOUwVLAqtAiABt5CxcdSZTjjCdfoATFdD%2FfdELd%2FYv%2B2Nijty5QDinyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgEke%2FmyfozxVC34KKtwD3nlVLGYZIwKy74DLmyJTFPEf2o0zY%2Fts9lrFEMpnKzdlXBrZffxWat2gEI38uqRZdet7EF4fYnb%2BOdlZvsoUq%2Bs2vnN%2B6o%2BmqD4fJ2GkyC9n5X%2BRb7GUAl%2F7sMoypJCQyoLDyEECkRbLZvXhQg8X%2FJgbFSSROZ%2BUSox6KBonh3ljEFEkZq4n9%2BWnOSYIiISawUTmOOuFCwo%2FwBZ94ICItq65Z5JM8xmSsmu%2By8tv2g8Any7q%2BNDZux8glvsKPiRFYooeDlDyqyRBFCOAdhuija4G19kflcnpH7s5lYGb3x7aTOndPUiK5dlpiCIgBmil8V3YBaM4QnrURUypeXm8LYl1WQ8ZDrk%2FK%2F3ztWfxYPQluDta0euUcNegQr%2B3hdCTAe7tStpOgRPrZBW8ncrD2b21sRdN4py%2Ffl9WH4f4JrC%2FfC9F4Ep9tnsvgBi7jjry018ofFJbJrObpm48UFe7CNew5hktmLqfffrad7qn1GnYyRF6UjlVQ7l%2FkaI0qr4JRYCsg998Tga6HK%2FcYmrNYrIzTjxafpUTPIT5x%2BtCaTFoSD7ortDRTFxPu0wXsQ9asYevMyQuPPs%2B%2FJVbxNNU4cSlAl%2B689IWV1yC9DB9Fn4YNm0nn97SpmoYIeUwop%2BSwwY6pgEpiR%2BNX4YJoIeyFG2m2t%2BtCd00ZhX0UBoJmxC9yLgTgkuyLsJyyDyBCA8T8TBP7Y2iqhhxRw%2BTIiCjSaKZ7N6nVJsOGwt6V1i%2Fwiu7FtjbclUDKA1xJ8X3hlBTFHYcV1W5emebx1FhG7bdKUtdGngZNewCrAjt%2B8eOXtI%2Fn5cMdVeY3sKV7%2FDQ7%2FQvkQ54fal8%2Bub4QZG8LtYz%2BGNYt%2FxZi%2F7BDpbk&X-Amz-Signature=586debf9682659e7e7659c701e3b8fb2da9160ba34336d68dc2df181857c2d54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
