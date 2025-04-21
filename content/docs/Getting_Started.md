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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ57UF4M%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T041132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCMdxi%2BYyTk8Q8aIcqz%2FYaEX8FViBfVL%2FbSybQ7oTSHJwIhAMcn64tOOSO0ns%2Fe4Rsl3yGVoqrmISN%2B5epml86a9aR8KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3tcaygOihMkBplIMq3ANNVT4Papa%2FZMPoTfaS2p0lZwQ4t1bGA6n0IsloVQrfKvYsh91hC%2FurZfQ8dsNU52D1OVL4d2TlNnSyVBGoisU%2FhTTZUL6KUd2TAAiyeW46u2JzEcyOUTEDXqHcN3h44sWt4WbZkYnXb2p9wTlaKIh4CmG10auCjdtoqr2SdOWA%2BYDheyCoNAUu8zpY4nXwk2KRI6hbTZyhMKBLGnz0IOXSbQW72F6bkgpHpKgY9%2BDnP5t%2BBN8SuLIzLqHPwhcBxbGPKDscJV6zuvVNLFzuQkMw%2FyG%2F%2Bf8Cy86qMjZ6y76laKAAxFMjVC7aqxhsKUAFGNRT2UG6kKs0XHwwfYcxh0vNJhtFd88rZednoPgra2VknqlpnbVzbChHO3CP%2Be9uh%2BGR%2BSjtOT03ISyl8pjbvIl1J6xy34M0VVwcrFHjfdFDTosasjkmeLJWWoN0%2FrR3oLUtzasCoaSdvrxCaKpWEc%2FO1Ir7Z%2BQnBNxgwWV3sxnjWkCK3X1y5biS3XTtyB4V6zmoaQKJl%2BuY5ZeB0JXj1eCvsuONheWiO8IJj%2BIoYaYkGRZQzv9Y8yBvuceTZ41cvCN4p0ziLRak9SDzPI6Ff3oW5panDFSefAFIM3ovnInxVTnmBapsUkVmCAQzCzCK%2BpbABjqkAb8BshVaa8WA5fgrlSgNtd%2Baol19myecC0cKYFuzjYK%2BUfShCxwCx087A%2FJ4IkCFSWO0sLhQl%2BJuyjynsUyjT4XMMUl8DJmNLSL0g2W9RxeEjU%2BggQdu%2F8n7XNk%2BDV9EIIPF1sz2T3QU6HLl5Y5Ww32zS%2FEbv4YWg38XhSjoW4hX4qQGsQaczOO36rfitvg%2F59RKyE5QNlaSojZjoiL5Fcp90EjE&X-Amz-Signature=507148a68876b5971da7c3035b71cf23242b7ced1a7e913822f89e7700ebfea5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ57UF4M%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T041132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCMdxi%2BYyTk8Q8aIcqz%2FYaEX8FViBfVL%2FbSybQ7oTSHJwIhAMcn64tOOSO0ns%2Fe4Rsl3yGVoqrmISN%2B5epml86a9aR8KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3tcaygOihMkBplIMq3ANNVT4Papa%2FZMPoTfaS2p0lZwQ4t1bGA6n0IsloVQrfKvYsh91hC%2FurZfQ8dsNU52D1OVL4d2TlNnSyVBGoisU%2FhTTZUL6KUd2TAAiyeW46u2JzEcyOUTEDXqHcN3h44sWt4WbZkYnXb2p9wTlaKIh4CmG10auCjdtoqr2SdOWA%2BYDheyCoNAUu8zpY4nXwk2KRI6hbTZyhMKBLGnz0IOXSbQW72F6bkgpHpKgY9%2BDnP5t%2BBN8SuLIzLqHPwhcBxbGPKDscJV6zuvVNLFzuQkMw%2FyG%2F%2Bf8Cy86qMjZ6y76laKAAxFMjVC7aqxhsKUAFGNRT2UG6kKs0XHwwfYcxh0vNJhtFd88rZednoPgra2VknqlpnbVzbChHO3CP%2Be9uh%2BGR%2BSjtOT03ISyl8pjbvIl1J6xy34M0VVwcrFHjfdFDTosasjkmeLJWWoN0%2FrR3oLUtzasCoaSdvrxCaKpWEc%2FO1Ir7Z%2BQnBNxgwWV3sxnjWkCK3X1y5biS3XTtyB4V6zmoaQKJl%2BuY5ZeB0JXj1eCvsuONheWiO8IJj%2BIoYaYkGRZQzv9Y8yBvuceTZ41cvCN4p0ziLRak9SDzPI6Ff3oW5panDFSefAFIM3ovnInxVTnmBapsUkVmCAQzCzCK%2BpbABjqkAb8BshVaa8WA5fgrlSgNtd%2Baol19myecC0cKYFuzjYK%2BUfShCxwCx087A%2FJ4IkCFSWO0sLhQl%2BJuyjynsUyjT4XMMUl8DJmNLSL0g2W9RxeEjU%2BggQdu%2F8n7XNk%2BDV9EIIPF1sz2T3QU6HLl5Y5Ww32zS%2FEbv4YWg38XhSjoW4hX4qQGsQaczOO36rfitvg%2F59RKyE5QNlaSojZjoiL5Fcp90EjE&X-Amz-Signature=ab25c40ba1f332595583008d71b106f92ebf6d87e0524782cb992730247182d7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OJUZEIB%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T041134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCYxFTDg2sW30OsZOCq65o12Adu962380RePVQDrGwgKgIhAIPZZhh%2FppNuChbX1T8r3gZi1gQij5D27RI5ip6mx%2BoKKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGc5vlZE9dqWm1%2BpEq3ANuz7IPTdeFEE1Nv4s%2F1lW8ZFHu%2F7JLh8EIMnWkgSBhYSxOUMf5EXV5Yb%2F9achMrAne5cVX3%2BOgprtWBa4pNlphzu8vSuYIoMy3MGmf83lDwNHWovtQVBnOtZ48IU%2BpYHS6aSA9%2BzPTJ1wth5l7uizv3KtMOycvtgkLYafgIi2jtULyyNLO%2FfasRAnRgDXBLTzu3pWW9NA07wiimeryKxCIJpECJLpG9E3jlbB1ZDzlV%2BBR18zEze%2FpsUBixKH0ms4S080kR1WNMLIZUErIxYYMG14m1v4aqIeTk0VCsYk77c6hgWv5ksD%2FliQa%2BLS%2FB0mW83leaCuBcPmni4IZMCHTRqATjF%2BqgO%2FSkGfj4BySyvr3uoCSMiH1XCCrYvyKoP%2BOpf959%2FVY9NDi19NrNkbMWmbVbMkbMtSSMCJ0kRAFz4DceuohBxov3U5UlvsyOhyHL0E6SxSWmsxLYQaJw%2FYGhCbBWZOIF2yLr16IMssCus%2FUzUyGExv7VCIQyOIN9CoRv466zSHiSPGXZQcdwUq0x8FDIKM%2Fkh0%2BgBjwCmjxnWBYx6%2FKbRjrITItFi1x%2FMkF482hy9jcoBqtnRcpXD4He6zrsOOIs9DbVax7nZuwujCSica3GeZ%2F0fhhlzCB%2FJbABjqkAZZoSiEEuSW%2BnnmQrvTEr01%2BTwLDRgdkClXKm38TLvD2JM3x17pb5usVRz3%2BBoNc5o%2BNcL5QnC1itSmqE0Nt63i%2Fq7Q79%2BrL0wBrlXFJyfoUyScB4TzHFbwW16mhQ4%2BoRan3HnNKk1li6C86sK%2Bm7BdBgb%2BmZxShlvD%2Fv6HNKLqlM0MU45%2FAMa%2BLySWkd97dDYIVzj2tlZWOZk4LVWIqKH85zum4&X-Amz-Signature=f1483406b49a7bb5be6bd0895fdb9ebe840b42d826299b00e57e2dcd99815074&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZFHKOFK%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T041135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQD238ec7x4dhtQzxqgZJN9iz%2B0z3l0I66Qtgzbjis%2FrdQIhAPOm6%2BPp9ao1ut9Us7KrLggek20pN1N0%2BffO4WGZffMxKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2jwM%2BBpR%2BTkaI8m4q3AM539%2FbeZu1DllMlT%2F%2BsniQKReljWHoJLDa0uYRodWqm6HxIbYkkbKKXL3oqIPqLt%2F2D0UywQUJbW7YpAW%2FXm9whm5377LtCO6369gJ0YyDmgnXD6YFa4IMQ69MxASH1ACyXloKOga6sGf%2FGirZ8ZE1JvEC%2FmccpBk7wfRbza6vKPRyBSWOCl276CJci%2BAcFJ8Gf%2BNzPHEsEBUlJjVzuYSnxaBhtZhLQ0oUrzizfgs3g1u1xQNcy1yqNk3f14Dub41vzL7uusBGCbeed5twKwR19FbAMrPATkx4PXsx5qXWL66CFevIHMz3l9UDPfaa8pC7G0t5ZbQva9kduPbtffdPghKhTh4MAuPBaPZVxSpflXbzWTa8bzoeV7HjVBlyzNtiO7BbYWrK30pA%2BGiTYzS2RjUMAhSTEwMB%2FGGKs8vjsyC5o%2Fk4vxOaogLu2Dv30t%2BhTGyRCxPG7aaSeVWEvYOEvcFFUdy7QY3j3nZWcmOIkJctowqwK6l0eULqOLCpLB9VWp%2FREQ7bYkn4xcr3uD2QXRDaLnE5jB2VSaCuB4FO22kua8It%2F1IEYQwzj1GLWG1ktt7ofYUkT20h0rR1Edf%2B1GvLkKs7rQ0nQbHvvMklBtY%2FrZmrNgj0KSIv2zCU%2F5bABjqkAXRel54qshz5F0UlhYDyJEn3zZgVy60kZtialiL4gI2iEmnhUUXpCgZoJ0kPvo%2BDm7xwSNt2P2JwUftGJBO2mF8STXNXEQEx53UTsAMm%2BRg2EFeUywxH%2FPoUbbwDLX89lfBpuJXvNlMlWVTckTCntAMquavIhdEP7cWDQZqqrY%2B3%2F47jX7Hvi5yahp66cRYnC8av39oEr0yu%2BDmGbLSfl8wJX8hu&X-Amz-Signature=bc856796e1a940a7e991122006c509bb761aaa8e29733db2a7770a7952593b6e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ57UF4M%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T041132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCMdxi%2BYyTk8Q8aIcqz%2FYaEX8FViBfVL%2FbSybQ7oTSHJwIhAMcn64tOOSO0ns%2Fe4Rsl3yGVoqrmISN%2B5epml86a9aR8KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3tcaygOihMkBplIMq3ANNVT4Papa%2FZMPoTfaS2p0lZwQ4t1bGA6n0IsloVQrfKvYsh91hC%2FurZfQ8dsNU52D1OVL4d2TlNnSyVBGoisU%2FhTTZUL6KUd2TAAiyeW46u2JzEcyOUTEDXqHcN3h44sWt4WbZkYnXb2p9wTlaKIh4CmG10auCjdtoqr2SdOWA%2BYDheyCoNAUu8zpY4nXwk2KRI6hbTZyhMKBLGnz0IOXSbQW72F6bkgpHpKgY9%2BDnP5t%2BBN8SuLIzLqHPwhcBxbGPKDscJV6zuvVNLFzuQkMw%2FyG%2F%2Bf8Cy86qMjZ6y76laKAAxFMjVC7aqxhsKUAFGNRT2UG6kKs0XHwwfYcxh0vNJhtFd88rZednoPgra2VknqlpnbVzbChHO3CP%2Be9uh%2BGR%2BSjtOT03ISyl8pjbvIl1J6xy34M0VVwcrFHjfdFDTosasjkmeLJWWoN0%2FrR3oLUtzasCoaSdvrxCaKpWEc%2FO1Ir7Z%2BQnBNxgwWV3sxnjWkCK3X1y5biS3XTtyB4V6zmoaQKJl%2BuY5ZeB0JXj1eCvsuONheWiO8IJj%2BIoYaYkGRZQzv9Y8yBvuceTZ41cvCN4p0ziLRak9SDzPI6Ff3oW5panDFSefAFIM3ovnInxVTnmBapsUkVmCAQzCzCK%2BpbABjqkAb8BshVaa8WA5fgrlSgNtd%2Baol19myecC0cKYFuzjYK%2BUfShCxwCx087A%2FJ4IkCFSWO0sLhQl%2BJuyjynsUyjT4XMMUl8DJmNLSL0g2W9RxeEjU%2BggQdu%2F8n7XNk%2BDV9EIIPF1sz2T3QU6HLl5Y5Ww32zS%2FEbv4YWg38XhSjoW4hX4qQGsQaczOO36rfitvg%2F59RKyE5QNlaSojZjoiL5Fcp90EjE&X-Amz-Signature=0df182f911c983d385ce9f11172e02dae5a37840e5fc52a463937e24c03e6263&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
