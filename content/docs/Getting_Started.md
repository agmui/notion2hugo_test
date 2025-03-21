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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7OXPCOU%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDBcablRGKOcrxllH7JtM%2FVSDEw%2BREcOCdVqY64gSiUjgIhAK51yKfrsLDRuLVdQzx1sYINW8vJxHP%2F0rh%2FDRgCtNgNKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzi0uTReihoJh9xwkIq3AO2l2v5%2FDC4drUTku84ZuoaAMBWbMgXNLV4VU3jQ1JJHkXP6HhIAXT0UbHNeWhl3pMMDSzZOa8tZHDITtJmuGWgIR3jd8oVP6GDXvPOkucPVmkq1l%2BO%2F8XwUryvEsJ9DiqdXpxBHtaGWCLVY9oyWM6uB8g9DJ42B8RXZCbVbxlYOx%2B2KCtemYMs%2BAy8Kke3kPuj%2BqLpAjIeG50yZxVDAYGPWb%2FScHH62DAx33Kbuf7kZkBkoxH%2BYpMkYZcp2izqfPbMcAij1qkbUhIDiqEnS1S6ez%2F3ONNpdCaZE8nWiNlGpatwTn9VTXcffNBhppzMppHgooUIvQkR03DdrlMKswcjS6V9%2FwlvTR0TX1O%2B%2BUiChZINf5T2GHIYlyneXxtrqs%2FqE%2BCX4nPgDQ%2Fxyrb%2FcKNU4BfvIJCyTra5d%2BLVYZKZp76tYMq33Djs6GpGbYpTbDgZ%2BVfFmRWzykAFCfTmEmF%2FIIHY%2Bpzy9ys7f5MOc27D31BO9b%2FDP%2BnjhlRyVaOpV2cmmkfogi0p3DUxHeJf3Q2uJtgF1XManaaRG71FmEbLcCcNiKt%2FEFTAeb77GRBLYVD36IrPiSdNMnnDOW3hioGdh31vIoFFcAKBW9jNdnd168oLW9EFK2Z%2BDFrFLDDa1%2FO%2BBjqkAefqZR5jQsiAq9M0kTdePO61gP%2BnlQ2KPRssjMaxlFEfegF%2BMZ0xKx68aoTEZVuUlX6MMsduAMdcyMVJatp%2FWefNZTmFKFGd%2FACxbYdeJdkGlnrYcUI52RucESeQGkxiH48%2Fn6UpDZBpkLTTHTLWe8v5J0qzYThxkok3yFF%2FreDFyiD1PeFjJcf2gc2j2mcPkRX7bSf06i0aH6XBL2ud3TRjEKNO&X-Amz-Signature=4fd2303f8908860debf9bbc9fbb5915ceb9bcd98b961429e87ea5e39ba394088&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7OXPCOU%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDBcablRGKOcrxllH7JtM%2FVSDEw%2BREcOCdVqY64gSiUjgIhAK51yKfrsLDRuLVdQzx1sYINW8vJxHP%2F0rh%2FDRgCtNgNKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzi0uTReihoJh9xwkIq3AO2l2v5%2FDC4drUTku84ZuoaAMBWbMgXNLV4VU3jQ1JJHkXP6HhIAXT0UbHNeWhl3pMMDSzZOa8tZHDITtJmuGWgIR3jd8oVP6GDXvPOkucPVmkq1l%2BO%2F8XwUryvEsJ9DiqdXpxBHtaGWCLVY9oyWM6uB8g9DJ42B8RXZCbVbxlYOx%2B2KCtemYMs%2BAy8Kke3kPuj%2BqLpAjIeG50yZxVDAYGPWb%2FScHH62DAx33Kbuf7kZkBkoxH%2BYpMkYZcp2izqfPbMcAij1qkbUhIDiqEnS1S6ez%2F3ONNpdCaZE8nWiNlGpatwTn9VTXcffNBhppzMppHgooUIvQkR03DdrlMKswcjS6V9%2FwlvTR0TX1O%2B%2BUiChZINf5T2GHIYlyneXxtrqs%2FqE%2BCX4nPgDQ%2Fxyrb%2FcKNU4BfvIJCyTra5d%2BLVYZKZp76tYMq33Djs6GpGbYpTbDgZ%2BVfFmRWzykAFCfTmEmF%2FIIHY%2Bpzy9ys7f5MOc27D31BO9b%2FDP%2BnjhlRyVaOpV2cmmkfogi0p3DUxHeJf3Q2uJtgF1XManaaRG71FmEbLcCcNiKt%2FEFTAeb77GRBLYVD36IrPiSdNMnnDOW3hioGdh31vIoFFcAKBW9jNdnd168oLW9EFK2Z%2BDFrFLDDa1%2FO%2BBjqkAefqZR5jQsiAq9M0kTdePO61gP%2BnlQ2KPRssjMaxlFEfegF%2BMZ0xKx68aoTEZVuUlX6MMsduAMdcyMVJatp%2FWefNZTmFKFGd%2FACxbYdeJdkGlnrYcUI52RucESeQGkxiH48%2Fn6UpDZBpkLTTHTLWe8v5J0qzYThxkok3yFF%2FreDFyiD1PeFjJcf2gc2j2mcPkRX7bSf06i0aH6XBL2ud3TRjEKNO&X-Amz-Signature=70c536484772ae75fff6b3ed1794af293baca1e9acae2c7fea4dcc07d314cd5d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y35QEJDZ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIHuiSfwL0oEXkwyrnsb4fgqIDI9CCh2JbE5uyB8m5tHXAiEAk0dSoVPBkj92LVDBw9TEeleTP%2F3AoqphqtWQfSGoHw8qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeVXl2Ihqoes4mXyCrcA94j32%2FUcQaQOMzskzSCCBQD%2BtGT5HptWKZy%2FoQuq%2FnGsGrXsGdMzBVhVCVPbNb13rRdhxFiaAdTwZ0GeQsp72tNvQ1O2267G5fj3%2FBfpRSfOvF%2B0l1wKe%2F3a06k%2Bute3pbFiAmn1VWxIdm5z0l58KRhioUOABRT0dJjthfM7xNMZPZxA6BZvmaVaMluDP4ovQEiBCpCe7CFS4MiapU7KtdIrhocDEseZ0JugqYSsfJB%2BbASkqY69acuqY1taZ3sb%2BHQHNFn5ATJtDTIsQyqTfNfFilkqT2KGo0CeSc8BlPKq36ltfCStkON4DePsB6UjANCuwebWOsQIFzB0nrLs7DqGzvjb2kOqBe6d%2FwBKMYa03LqDbJFDqeKUCMc0GVHWVufmgJheuSerg0bxXPcJfGsl96Ho%2B8rNctzIjs9i1ORp1aFSYtRJc5HniYcaVmVj5y1%2FcFblDBewXdxNBcWZWtnYsVotIpGXL0nuTzFgyJmVcYbS5RoaBm87tJ4%2FnuztnQd767%2FelfSF9X5WMiRJXMXe0g6R5VxPy7NVyue8w9mZoOxKnJdzl%2BUWrRqaorGB8EMGg9mw9jQ2jYgBHDDJO4vMWRS2Hfjok8SmgppeZ3V7Mu%2FlX0cYEAXInOcMO%2FX874GOqUBFwS%2FlvKTBwbP7AbxXbJV4Dsn1XSQ9qZJaOxOdnBDe8cq9VjvwoEkHJ0vlKV7eN0TDh0AovFaCn6m65uljY3zgiAHUGJsNdCN6G1F7X0OS53mBbZHTdau7p1e8JY6zH8SejGxZT5g8525XUmpxPRmR2H9jG1dhgvimtvYDkCA5EDg0vk7ypxTNUQBRq5l0xweNiCxd63brshnq6fwArO9LywWjWxk&X-Amz-Signature=3a9174540858e960afa34f4f030061ba18ab063adffc34d75c5022609eb23821&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ5F6TIY%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDxwR%2FPnRlb0KkEeIFM0WenvTQ5U3UtmzY2d7nbORBJygIhAJphe35LKx3HQbx0jOgmrat6HEZvzULU6IVxtldxZvuhKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQpo3z7oep56Syfu0q3AMxumJwrqVuVioRkOFb9CnTm0z8GPVcir6yueWcREV%2F%2B1%2BeaB3yPDjRqNDbPxqwF47h9Qb6UMzCaiPFQg2rJItHYRo9y84QEjVVsg8ei41WA4XhP3agnymRrFSokNhrTWPeeA9VQWbAfooZQhnH%2FrKLK9JVlbqsjTJAd1%2F2m4QnDCAi6yuOWH%2BWHAc9d2Rsi0EO1o5Yfbi9Tv279AQbMLLoXdA4LMEHsNnn4ElSCN%2F8wiqoJsSy5RpRPr5Yodt1HYKpqJGz2D8EtJrzCNf9c9a1LyLMQPnXYdPvIfZCeTUB81mYud161maugGekB1NtfcDueOhmC%2Fe%2F4p9khzJ%2BK5E%2BYd5qh0YVLgw6MxfEZy0GEM%2FmYR7YKroxfXw1r5g%2FdHqIWr%2BfLomNkY7DcXTc6KUbChWkD0N22f3bHMe2LbMmtj3%2FK%2B7evnsq%2FLy%2BqSZobhnzFLPC%2FSQeXAn%2BGqpNtwf%2FHkZ5spktrTvYraxgH9UtrBCRS5yWtMi%2BAGP56mbgcGOom%2B2QMB1FgI%2FPHe8H%2Bupg0rhh7L6NGzowH5O2oLTa3FovH3qL%2BC9cxPFuDJTcS5R9EbBWuxC1NEMxfV2p9ovZeuhjwnWTf2j6w7gapZUNREdaPGFIAPSkvA%2F3rjCD2PO%2BBjqkASjA2NicAnqgyd8kNndh3Yn1bs5Y0SeeC3PALJJQdd3PAUxpY1vg3rI5PuzXNQEFge2o6mnQN1zqIkfthjI6d7A9M92QgajyJKbnLwRtDNi%2Bl8h%2Ftr%2FAzw4jHWZ1Gef0Lzh2%2FTqXpKZO4NzX97hYOGPt1XxM1xE1zevDYdOzfn8S9iRcG87dzyLMMQ%2B%2BwYfDcJu3JogAZvbKOAal0VRU6w6FoggV&X-Amz-Signature=657898077b53b4e8eae3f9c0e42dba0321b84d5cc0174b18aa86817c7652bc88&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7OXPCOU%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDBcablRGKOcrxllH7JtM%2FVSDEw%2BREcOCdVqY64gSiUjgIhAK51yKfrsLDRuLVdQzx1sYINW8vJxHP%2F0rh%2FDRgCtNgNKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzi0uTReihoJh9xwkIq3AO2l2v5%2FDC4drUTku84ZuoaAMBWbMgXNLV4VU3jQ1JJHkXP6HhIAXT0UbHNeWhl3pMMDSzZOa8tZHDITtJmuGWgIR3jd8oVP6GDXvPOkucPVmkq1l%2BO%2F8XwUryvEsJ9DiqdXpxBHtaGWCLVY9oyWM6uB8g9DJ42B8RXZCbVbxlYOx%2B2KCtemYMs%2BAy8Kke3kPuj%2BqLpAjIeG50yZxVDAYGPWb%2FScHH62DAx33Kbuf7kZkBkoxH%2BYpMkYZcp2izqfPbMcAij1qkbUhIDiqEnS1S6ez%2F3ONNpdCaZE8nWiNlGpatwTn9VTXcffNBhppzMppHgooUIvQkR03DdrlMKswcjS6V9%2FwlvTR0TX1O%2B%2BUiChZINf5T2GHIYlyneXxtrqs%2FqE%2BCX4nPgDQ%2Fxyrb%2FcKNU4BfvIJCyTra5d%2BLVYZKZp76tYMq33Djs6GpGbYpTbDgZ%2BVfFmRWzykAFCfTmEmF%2FIIHY%2Bpzy9ys7f5MOc27D31BO9b%2FDP%2BnjhlRyVaOpV2cmmkfogi0p3DUxHeJf3Q2uJtgF1XManaaRG71FmEbLcCcNiKt%2FEFTAeb77GRBLYVD36IrPiSdNMnnDOW3hioGdh31vIoFFcAKBW9jNdnd168oLW9EFK2Z%2BDFrFLDDa1%2FO%2BBjqkAefqZR5jQsiAq9M0kTdePO61gP%2BnlQ2KPRssjMaxlFEfegF%2BMZ0xKx68aoTEZVuUlX6MMsduAMdcyMVJatp%2FWefNZTmFKFGd%2FACxbYdeJdkGlnrYcUI52RucESeQGkxiH48%2Fn6UpDZBpkLTTHTLWe8v5J0qzYThxkok3yFF%2FreDFyiD1PeFjJcf2gc2j2mcPkRX7bSf06i0aH6XBL2ud3TRjEKNO&X-Amz-Signature=d0d405a22414ea1fb26d1f074b1024d36df9833828bad434467597b7e4cae0c3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
