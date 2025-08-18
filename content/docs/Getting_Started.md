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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR643A3E%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQC2kIZTUsgCb778b9Vq9YZ7%2FH0YEYlw7mdBvXXiGxArgAIgdCNGbQzWo7ZQB%2BX25eyX3nkKO3sQ1KDaBnb6ghEaceAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKYuBGrsntN%2BOLQJCrcA5xMLyDBKfZCoksv6DGZOP1Yxk1Gbkko%2F4RhOjtj1iQ7bLyK5I0s%2FOF%2FA9pnz6GzPxYNiZumVf9cNFBsvovCdaYk%2F10Ro%2FDuNtkzGXj%2FhSwYorsT5xdzDdnOCbOEkNy4eChGgwp3AM%2F57i3Fbf2aqSGuL9mgiPh2QaRyppbdvrYRz7rtsPsmGZFDcbmlHauSaJYPYrhaaXemNiHsGFB7BRzsOsixnr7XEgc4zu51Uonkud48RpI0f20OCQZ93ygBl2%2FN2NxaTW09oU7mx%2B7%2BYgL477pRzkk5h%2F%2BOryt4W5tEhWCjlWZjtSY9XlDo2t8hzDiX%2FdAiC3aNK3u4NLQkssqTyzAppSjl6mifOQ8kqPscQwSDpovnGpzXsGLb6noKApkAS8GJCjYymG8bJBDIaplEId6ZUzY7p7sMlLs9y7qK%2F8iMRAL%2FNfcIRg5hcl5A3M09%2FCbYOgy8X2mwnDP6GJXCfgraPwqulvPnkxharenDaRDV82EJaDBKjtii5xHegggboLJpFACsHyiv8uOIlD007POEwLOhlehk7BVZzcc%2BRtp%2BpTEAAD8M7EmHwPtr01g8DU7KniSEZ1xeLGIltflh1dzMh2b%2F6adgpl%2Bt8%2F5y2v6Bfq2uXh95lPtOMPzqicUGOqUBFBAZYFY4Wzk%2Bc7T2Vx05abthl%2BAGQNdzFmfa6C93eSyF8Oqv0wFbZALHhY8D6g%2F3pTbiWofp4mXia7Bv5VQc%2B4y9M6AYcg%2FnQRFK7uvDG026z%2BZgI2hrK3F3Xeuj%2BVfUM6pv65oTPzZXjeQXs5miP5bhsZJFkc13NXwW50jWbitHNh4g6q86Sz8BewMKvSJarb3VvprFIcctSkNYBEQucV0o6YH%2F&X-Amz-Signature=f2bc335baee2ddd662ae24143bb72be6a83edf994ea3d11d4b3aa35ca981179b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR643A3E%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQC2kIZTUsgCb778b9Vq9YZ7%2FH0YEYlw7mdBvXXiGxArgAIgdCNGbQzWo7ZQB%2BX25eyX3nkKO3sQ1KDaBnb6ghEaceAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKYuBGrsntN%2BOLQJCrcA5xMLyDBKfZCoksv6DGZOP1Yxk1Gbkko%2F4RhOjtj1iQ7bLyK5I0s%2FOF%2FA9pnz6GzPxYNiZumVf9cNFBsvovCdaYk%2F10Ro%2FDuNtkzGXj%2FhSwYorsT5xdzDdnOCbOEkNy4eChGgwp3AM%2F57i3Fbf2aqSGuL9mgiPh2QaRyppbdvrYRz7rtsPsmGZFDcbmlHauSaJYPYrhaaXemNiHsGFB7BRzsOsixnr7XEgc4zu51Uonkud48RpI0f20OCQZ93ygBl2%2FN2NxaTW09oU7mx%2B7%2BYgL477pRzkk5h%2F%2BOryt4W5tEhWCjlWZjtSY9XlDo2t8hzDiX%2FdAiC3aNK3u4NLQkssqTyzAppSjl6mifOQ8kqPscQwSDpovnGpzXsGLb6noKApkAS8GJCjYymG8bJBDIaplEId6ZUzY7p7sMlLs9y7qK%2F8iMRAL%2FNfcIRg5hcl5A3M09%2FCbYOgy8X2mwnDP6GJXCfgraPwqulvPnkxharenDaRDV82EJaDBKjtii5xHegggboLJpFACsHyiv8uOIlD007POEwLOhlehk7BVZzcc%2BRtp%2BpTEAAD8M7EmHwPtr01g8DU7KniSEZ1xeLGIltflh1dzMh2b%2F6adgpl%2Bt8%2F5y2v6Bfq2uXh95lPtOMPzqicUGOqUBFBAZYFY4Wzk%2Bc7T2Vx05abthl%2BAGQNdzFmfa6C93eSyF8Oqv0wFbZALHhY8D6g%2F3pTbiWofp4mXia7Bv5VQc%2B4y9M6AYcg%2FnQRFK7uvDG026z%2BZgI2hrK3F3Xeuj%2BVfUM6pv65oTPzZXjeQXs5miP5bhsZJFkc13NXwW50jWbitHNh4g6q86Sz8BewMKvSJarb3VvprFIcctSkNYBEQucV0o6YH%2F&X-Amz-Signature=994ecd441b589233c4352fe23f8963f8778fdd947b5b2499f8003a96553e37b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR643A3E%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQC2kIZTUsgCb778b9Vq9YZ7%2FH0YEYlw7mdBvXXiGxArgAIgdCNGbQzWo7ZQB%2BX25eyX3nkKO3sQ1KDaBnb6ghEaceAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKYuBGrsntN%2BOLQJCrcA5xMLyDBKfZCoksv6DGZOP1Yxk1Gbkko%2F4RhOjtj1iQ7bLyK5I0s%2FOF%2FA9pnz6GzPxYNiZumVf9cNFBsvovCdaYk%2F10Ro%2FDuNtkzGXj%2FhSwYorsT5xdzDdnOCbOEkNy4eChGgwp3AM%2F57i3Fbf2aqSGuL9mgiPh2QaRyppbdvrYRz7rtsPsmGZFDcbmlHauSaJYPYrhaaXemNiHsGFB7BRzsOsixnr7XEgc4zu51Uonkud48RpI0f20OCQZ93ygBl2%2FN2NxaTW09oU7mx%2B7%2BYgL477pRzkk5h%2F%2BOryt4W5tEhWCjlWZjtSY9XlDo2t8hzDiX%2FdAiC3aNK3u4NLQkssqTyzAppSjl6mifOQ8kqPscQwSDpovnGpzXsGLb6noKApkAS8GJCjYymG8bJBDIaplEId6ZUzY7p7sMlLs9y7qK%2F8iMRAL%2FNfcIRg5hcl5A3M09%2FCbYOgy8X2mwnDP6GJXCfgraPwqulvPnkxharenDaRDV82EJaDBKjtii5xHegggboLJpFACsHyiv8uOIlD007POEwLOhlehk7BVZzcc%2BRtp%2BpTEAAD8M7EmHwPtr01g8DU7KniSEZ1xeLGIltflh1dzMh2b%2F6adgpl%2Bt8%2F5y2v6Bfq2uXh95lPtOMPzqicUGOqUBFBAZYFY4Wzk%2Bc7T2Vx05abthl%2BAGQNdzFmfa6C93eSyF8Oqv0wFbZALHhY8D6g%2F3pTbiWofp4mXia7Bv5VQc%2B4y9M6AYcg%2FnQRFK7uvDG026z%2BZgI2hrK3F3Xeuj%2BVfUM6pv65oTPzZXjeQXs5miP5bhsZJFkc13NXwW50jWbitHNh4g6q86Sz8BewMKvSJarb3VvprFIcctSkNYBEQucV0o6YH%2F&X-Amz-Signature=730af938cb2511d4541fac8622a8d95c3de32fa872bef7bd986bb37c3f18b06f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZWPQX3Y%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIH535do89oQgRLsXSorHr1eudCH9r8nMg6kUyhXe7TjAAiEAxWw%2BGT%2Bc1aCdwJDGqpFp8nJ9GGyBnP0iDC%2BbREcspl0qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIiYYUp%2B42JP%2FNANtyrcA%2BRN1oBMyN%2BrAAO6gtAe93FtA%2FuG8daPR8IJLshE6L0TFTC0o8CMezpRFHmtFpvjgioLBXje36OpJhkEsDt2pI46%2FxOUVoLmh5Wd5oGIaPFmYKWYCyWaIQ%2BVrOPJwiITy52WNAnOmscWn68AvKlnqS%2Ff7cXhlmDGr7NRRxQekpgABnzOK5WJA%2F1K0FSu2OQRJAHc1NJCM9kstolo7f7%2F7QIx9%2F%2FsZVOPN6zofLLSA8%2FsHambdVnhaP2d%2FR3NecU%2FdoUVfNWldD7PH4US%2BFfrEXRnYOAkWlnIe5HO6jg6DSKN3SGEbTov%2BXIHbebUPh7ua%2BXQ5a1ZwHKL1qTNWZP%2F%2Bigk2jOjdT0ieD6SX8Mcxub42OWsVYKnWQ7Ngi1imBziONVgtUzkmb64jxhc5Ym39hrhV%2FroPeXFXVnPjx0%2BunXdPk%2BKUnY4rOgQTjDT5IHhaKM0YcdfXNXFhsu9jhHOE7G5Ul1qGrqb2NZz0uFs81qM3tAonKxY3CWJP7uU1HApiVYEHqTXQAlelsHJLmzIcShSdaRMSxY2vv%2FchxOoP7d%2F82pIIJGmehX8IUUINjdgr1dhlyZLHGhSize3HhKjqyw2o%2FEhAaKh%2F9mmEWC3uk22wIKklqh0vmU%2BRv5rMPrqicUGOqUBEDooV44HHjhCC7T%2FIm2CkBlQ0vJAGQmVz8Eg79twBoe3CrUie0n4b0vEv%2BxNILouTPxTvYRtZTLOooxKKxXL%2FtcG4uGP4%2BMJi0XhuzkatmKiSILty8fVD%2FKETnqGk2Hetp3EPe2p%2BhnHvd0x32ZCLztI%2FEEY9n0FkICvJmX3wmZuJakvWIL8sfKGqMfzS9uHGcnIKpCD1xISaP0U6LtiNok64Uwf&X-Amz-Signature=8459b72b9ad2ee012a169e95b00c54aeb7d00de3101164920e5905a5f103be1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMZU4OLA%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDK8p28Y08OvPpuPJ38skNKAjvwWrcjXsLqyFAjRYqH%2BwIgfn%2BpLyFwj7XsSwWmR7%2BLM9e47BJ6Vs5T%2FzjG8XVKBsgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4atDJfsv2lkwjRNyrcA2Qhng1WJpGv6%2F8pWJpeTnC4C%2FXKiethoXRoA5PUGfraBKghGSKxcLrqP16MxfC2uwrUxqnzaMiNVFyGLLjnZWaDRqtFrBi9NLvJQ8mop%2BaaVUY7Ez0BnUzqr%2B4049CxN1kH9DT4OEvvMsdX4G9%2Fk7c5rIR%2FqGTY9KwcsDgyQ1iQodDUeN1j1aGeJ87%2Ba01Lp5T6USY1BwlxKN0%2B0hEXrIe0LbPoVNsV6Aas%2FcrI7jqImxf5ypl44rgFKjYotIZZQ2A4cRWFIr1Luxnm32DPrOl2UA8%2BTHQxUuMh2SZvj3FQ4n%2BlrUR015QaSmjZH6jwVE3%2B4JLsVaDW5KLXBB4IwnjZieoP5HZP2b%2Bkk7ciG8voBYwLkRBZkq8BQCyAnsbvk1BA4OnEQOTrbZuaaI3z%2FouITGWZlqsRiX0IjyQnTahRHinxtOQg7CQItpsrYZ5n768v46II55FLNjvgOmtkPa7dWxgnbJCPMO3M1a8wXuE5YTJeKbc9QBQBqenv92s7YS07ZexXUYdrTx1pAoZHxsz%2FKEbWgC6Apq1YGAEOPCbnoFN5kZReDQeTf882HI5g5s9FmOCZPzr%2B74MPAn89ZwBfO0eNmJFg4ZYNTBCV0r5RcLlXHiiaAnfJGIqfMKnsicUGOqUB4JAIomJvxAhlx7LETclFKSJaa9O2GJ1e3VepUaxDY%2B%2FQzghlCHUUPuekjPwpO72VjeaPW5IBWwSSRdIngCqIdU4Pc5tx7KIEkOnrkAs21itWa6N2VjkHaKYnpSAioHhQVRaJi70cFn98VsJFI9Kdtwp3vg0Z%2F5J5S7V8b5JMwBLzg0XG%2FOdAklGIXromsItj0G8I82vPDDk%2FIeC149dz8RLjj3N2&X-Amz-Signature=82ac9d6538236d3e3a1edf7c552ed4e0f7b0a9d4902a1fca3ae9e9d4ab7f663d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR643A3E%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQC2kIZTUsgCb778b9Vq9YZ7%2FH0YEYlw7mdBvXXiGxArgAIgdCNGbQzWo7ZQB%2BX25eyX3nkKO3sQ1KDaBnb6ghEaceAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKYuBGrsntN%2BOLQJCrcA5xMLyDBKfZCoksv6DGZOP1Yxk1Gbkko%2F4RhOjtj1iQ7bLyK5I0s%2FOF%2FA9pnz6GzPxYNiZumVf9cNFBsvovCdaYk%2F10Ro%2FDuNtkzGXj%2FhSwYorsT5xdzDdnOCbOEkNy4eChGgwp3AM%2F57i3Fbf2aqSGuL9mgiPh2QaRyppbdvrYRz7rtsPsmGZFDcbmlHauSaJYPYrhaaXemNiHsGFB7BRzsOsixnr7XEgc4zu51Uonkud48RpI0f20OCQZ93ygBl2%2FN2NxaTW09oU7mx%2B7%2BYgL477pRzkk5h%2F%2BOryt4W5tEhWCjlWZjtSY9XlDo2t8hzDiX%2FdAiC3aNK3u4NLQkssqTyzAppSjl6mifOQ8kqPscQwSDpovnGpzXsGLb6noKApkAS8GJCjYymG8bJBDIaplEId6ZUzY7p7sMlLs9y7qK%2F8iMRAL%2FNfcIRg5hcl5A3M09%2FCbYOgy8X2mwnDP6GJXCfgraPwqulvPnkxharenDaRDV82EJaDBKjtii5xHegggboLJpFACsHyiv8uOIlD007POEwLOhlehk7BVZzcc%2BRtp%2BpTEAAD8M7EmHwPtr01g8DU7KniSEZ1xeLGIltflh1dzMh2b%2F6adgpl%2Bt8%2F5y2v6Bfq2uXh95lPtOMPzqicUGOqUBFBAZYFY4Wzk%2Bc7T2Vx05abthl%2BAGQNdzFmfa6C93eSyF8Oqv0wFbZALHhY8D6g%2F3pTbiWofp4mXia7Bv5VQc%2B4y9M6AYcg%2FnQRFK7uvDG026z%2BZgI2hrK3F3Xeuj%2BVfUM6pv65oTPzZXjeQXs5miP5bhsZJFkc13NXwW50jWbitHNh4g6q86Sz8BewMKvSJarb3VvprFIcctSkNYBEQucV0o6YH%2F&X-Amz-Signature=49eee0adc62d9584d075c58a90dbc3e43168400a202e430c72ef36017bf880e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
