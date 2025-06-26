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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBW5BYJQ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T091021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD7WjMwGuHBP7DzQUkA4%2FnMzv9BQyXx5D7w2XZfjR%2FXjQIgfCbILsdTPSGxQrNcurPc5OxTjcyRdOIxcz%2FJpoJkaiEq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDGGt7q1Yl2M0yJEwcSrcAy28%2FoeoTs2AnJ7UgFJvbUTSFGid8cd0aSLOf%2FST%2F%2B2ibVTU9BSvA7G3D%2FqLDcScsS%2BBn7SDhyWlvgSz0sTZDOCuOL9Vv9f%2B8e%2FnTTu%2F9qhVAsH28dGdZ7oURDyW2ZENrQigA2YyQ2gXog4EVQtgLppSs%2B0ojD57FU7C6YmaRMq8dkN81KXT6ysGKG%2BdgjW4wlYNcG1T0AVKL4HY8zOpytFwutner80Q08y411gAjHMx%2BVyoejChjz4LVk86VPFSseJJtdsZwVdIlgzHHXKGIbE4yy%2FyKq1RxLmIJeIUcu9fm4Dl%2FTgYJuVKIXkTxUikSm%2BWO3d7ISLnYrtGgWkz6jjM0hWPxjj1yFcsdjgjzRlQSSw9jAclOMoBlz2T5YdAXDVjK%2FdxjiKf8M5CmOM0OcJkZLpcrvS%2Bw0FUHIXz6kk0w2jkm6JdUcm2esVFSD3NRB0q%2FBOtDm0%2Fq%2BkwlTF3rdjgZhrVQcd9m%2FmvvFx%2BJzia6ePJPrvLLV0yHHDUQf7mbolmFsnZxMHv0vHiXUHeKL4G2IhNSljgFv9iQRRt6Ku0894ZPUxGyVslbKW1W9RoYkv%2FvtYDxwthR7OBCIlW2JNMprnTCXRW43sr9lsrVBU1csBulBYxo3w82Q8VMMGW9MIGOqUB6%2BsN9TgX59MgOMXNmjGBAHA0Fh4CDyZiaP32Li8h3Ek1lhy4oKmf1UsH7AWMjjqe%2FgnFwqG%2BAl%2B%2BbEQm1JU60fmeEW3KYdNu9Kr6%2FCEPVNu0gjlbjezGm7EM3e0k1AzqqOyZ3fg6Nv%2B7WOZEQ2ul2zJyCUYx2qfq3d6FD5rISwPZT%2FKaMsrkdg%2FILxr%2BHUslkfqOjirEPa7nMKlCsrwLWO9ONVeu&X-Amz-Signature=958773403d3ba1fa872946ab09ac8fb786ab44208b8e1d3a9b81c729a0194b2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBW5BYJQ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T091021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD7WjMwGuHBP7DzQUkA4%2FnMzv9BQyXx5D7w2XZfjR%2FXjQIgfCbILsdTPSGxQrNcurPc5OxTjcyRdOIxcz%2FJpoJkaiEq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDGGt7q1Yl2M0yJEwcSrcAy28%2FoeoTs2AnJ7UgFJvbUTSFGid8cd0aSLOf%2FST%2F%2B2ibVTU9BSvA7G3D%2FqLDcScsS%2BBn7SDhyWlvgSz0sTZDOCuOL9Vv9f%2B8e%2FnTTu%2F9qhVAsH28dGdZ7oURDyW2ZENrQigA2YyQ2gXog4EVQtgLppSs%2B0ojD57FU7C6YmaRMq8dkN81KXT6ysGKG%2BdgjW4wlYNcG1T0AVKL4HY8zOpytFwutner80Q08y411gAjHMx%2BVyoejChjz4LVk86VPFSseJJtdsZwVdIlgzHHXKGIbE4yy%2FyKq1RxLmIJeIUcu9fm4Dl%2FTgYJuVKIXkTxUikSm%2BWO3d7ISLnYrtGgWkz6jjM0hWPxjj1yFcsdjgjzRlQSSw9jAclOMoBlz2T5YdAXDVjK%2FdxjiKf8M5CmOM0OcJkZLpcrvS%2Bw0FUHIXz6kk0w2jkm6JdUcm2esVFSD3NRB0q%2FBOtDm0%2Fq%2BkwlTF3rdjgZhrVQcd9m%2FmvvFx%2BJzia6ePJPrvLLV0yHHDUQf7mbolmFsnZxMHv0vHiXUHeKL4G2IhNSljgFv9iQRRt6Ku0894ZPUxGyVslbKW1W9RoYkv%2FvtYDxwthR7OBCIlW2JNMprnTCXRW43sr9lsrVBU1csBulBYxo3w82Q8VMMGW9MIGOqUB6%2BsN9TgX59MgOMXNmjGBAHA0Fh4CDyZiaP32Li8h3Ek1lhy4oKmf1UsH7AWMjjqe%2FgnFwqG%2BAl%2B%2BbEQm1JU60fmeEW3KYdNu9Kr6%2FCEPVNu0gjlbjezGm7EM3e0k1AzqqOyZ3fg6Nv%2B7WOZEQ2ul2zJyCUYx2qfq3d6FD5rISwPZT%2FKaMsrkdg%2FILxr%2BHUslkfqOjirEPa7nMKlCsrwLWO9ONVeu&X-Amz-Signature=cee3149afec7734d768e641bc81ad9723c62c363121f49531e117f02cfa6cfef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBW5BYJQ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T091021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD7WjMwGuHBP7DzQUkA4%2FnMzv9BQyXx5D7w2XZfjR%2FXjQIgfCbILsdTPSGxQrNcurPc5OxTjcyRdOIxcz%2FJpoJkaiEq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDGGt7q1Yl2M0yJEwcSrcAy28%2FoeoTs2AnJ7UgFJvbUTSFGid8cd0aSLOf%2FST%2F%2B2ibVTU9BSvA7G3D%2FqLDcScsS%2BBn7SDhyWlvgSz0sTZDOCuOL9Vv9f%2B8e%2FnTTu%2F9qhVAsH28dGdZ7oURDyW2ZENrQigA2YyQ2gXog4EVQtgLppSs%2B0ojD57FU7C6YmaRMq8dkN81KXT6ysGKG%2BdgjW4wlYNcG1T0AVKL4HY8zOpytFwutner80Q08y411gAjHMx%2BVyoejChjz4LVk86VPFSseJJtdsZwVdIlgzHHXKGIbE4yy%2FyKq1RxLmIJeIUcu9fm4Dl%2FTgYJuVKIXkTxUikSm%2BWO3d7ISLnYrtGgWkz6jjM0hWPxjj1yFcsdjgjzRlQSSw9jAclOMoBlz2T5YdAXDVjK%2FdxjiKf8M5CmOM0OcJkZLpcrvS%2Bw0FUHIXz6kk0w2jkm6JdUcm2esVFSD3NRB0q%2FBOtDm0%2Fq%2BkwlTF3rdjgZhrVQcd9m%2FmvvFx%2BJzia6ePJPrvLLV0yHHDUQf7mbolmFsnZxMHv0vHiXUHeKL4G2IhNSljgFv9iQRRt6Ku0894ZPUxGyVslbKW1W9RoYkv%2FvtYDxwthR7OBCIlW2JNMprnTCXRW43sr9lsrVBU1csBulBYxo3w82Q8VMMGW9MIGOqUB6%2BsN9TgX59MgOMXNmjGBAHA0Fh4CDyZiaP32Li8h3Ek1lhy4oKmf1UsH7AWMjjqe%2FgnFwqG%2BAl%2B%2BbEQm1JU60fmeEW3KYdNu9Kr6%2FCEPVNu0gjlbjezGm7EM3e0k1AzqqOyZ3fg6Nv%2B7WOZEQ2ul2zJyCUYx2qfq3d6FD5rISwPZT%2FKaMsrkdg%2FILxr%2BHUslkfqOjirEPa7nMKlCsrwLWO9ONVeu&X-Amz-Signature=579097fddd705774406ca370349b7fb265583e5d9752351fe9a0431f8529b634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUCIEJXW%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T091023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCmQtZ8i0IkoNoPVxF9pjl9a1is5KZbZFhDOHp%2FjWJksQIgXUtFgXOa1%2FENvkyz3UtUwel32iWEtTKLhXvxij9iP8gq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJgnmXPBaGUs6OwaYircA4yaTdq7%2FGaZcyPDXJdtrPmHgwi1shwQMJbZOf1%2BEPXdvCDb7EGhH6X%2BA%2FNj9Pr5KKGYQt2i6%2Fid7o%2Bkj8og7R8g9ObJmfFe%2B%2F3zsbu9UkNmkTa9pO5NV%2Fi1fwJvoccoWaCoKVsXxJI4SIzmS2cYOIQnalAyaNnH%2FSWcNiYFvks9fy8vCxCJCuBiCW%2F6ZktZWXxxqU7sG7TGLogOxWjFmKi7Xl31fKGYLznADEmENBy4uN0HYrQaqRa9oa0umfE3Na6eN50xYDF7Wm2UXfpk11HR3FpW0tF6eH08SyQE57cvDYiI37DNP37CwV8tujm5jQBHA83Pu2OJhMang29ssNrAe3hUCuk%2Fzr2fS2cn6sqebBdyoQdlCKoZ588SD6q4640jZqyFQ0iWMebI6wSJFb%2BfXTmeg5rQFAQJzJ1vLzyU0cNbAGxcHGqb1MRzdG3gNmifnfglVeTlydRKLmYGq8IAcQg79QyXCTVNfAI%2FsSCMKxRxigTZRNrmVQxyeENyKDDk4u%2FCjZe3zi6cM6S9t30X2ZBIfNRUxW8gFhxvfOzhtdkJ%2FSB9z49yrJXP0GmpJuTyVqOUVGNlLlt8ja%2BUKzkMMiQrdPMOsp%2BuDA3iMrcNbIjOoh4aOYEnnKbLMLGW9MIGOqUB8KXDDuLeoZk1UZ1Jegfc7%2Bgtft8COKvuNIT%2FqafeRocsNbShDJd6Dsm%2BfKtJ%2Fd%2F04rU5yhVu2BaOk4Q1X0HUnQGrY3yGoAQgMxqPt%2FtGHnVgtThJr6Gdzy7v%2FwKZcTM4f97zbvRx3YqQ%2Fwk7PFi6qrqyEKbuB5cdyXe8%2Fhn7%2FVPVGdcbVuKArZD%2BLuVQbttzgzL9272OAgvgPx58nUcBerUfvrNG&X-Amz-Signature=0eebf8f659f9fc40b9f069c3991f4b5a556b9d447b8eea1918c0d8cf9cc794c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU5P2BK7%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T091023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCOI%2BgR10bYumlnjYQ19c5M0yT%2FDWq%2F0fhR%2BL5SRoIODwIhAN5rCY7n7lPAcal2K00NsCCR5XLm2Aja%2FOCEZLEF0NSvKv8DCFoQABoMNjM3NDIzMTgzODA1IgzVseR%2Ba5XUU0yiZxIq3AO4z%2F4FJH0EtxidFWFBv8SFwHSI8Qx3h%2BmiP6gl%2BPZIrZD0SNl6lqgDaz8QTkLSnV%2BvCcxVnU%2Fz%2Bwnv2dnRFaZ%2FXIi1ApY04LxSiE33qKfxUPg9D2qThJQQx7uLc10OZcN2P8xU6mpI5Ls2m5r40tscfRgzR0QSpM3NjVAVoOQk8Vov89A4uzgfumMpbELDSdVuwtZzq8nFgLlpRy2FsR4kDRkGPId%2BMUM%2BXmF4pNBeWvYobzqH6Z6OTY%2BOkUcpFDWc3Fck8J5FHRi51uXXcMghyE0LToyCUTQILYjB7Hl04wAz6GMu6Yso3PXLBPagqFGeXuBFtyBA4WqYBho51t3kyg2CvahlY8HCCmnkP0W%2FgXCmA%2F%2BqkNK8mhjCstLw5WT0lMgggUTMn4Fo4biS9UOgsNOuBY3b0AGUdf0Xgkgkfo%2Ba4ri%2FGGu417W%2FIOjWZgmhMXPfS4Saw0qIw%2FDo6LxHAzJR9so0KJMfTTIcNvsiPm9dsLq5rv3XOmGyjL8oXNZog7fQdA%2FSzXJMxW2tUKzfCoqHwSVht8eT%2BC39gQ8IXuqM4tC3K8A3nTaCm0y8bVIcRBIW2d0Ks1efNnzJa58N1sPN%2F6MWnDfMJjXhdetLJeIrNZ%2B2tnjTKCHcRzCOlvTCBjqkAQV5XstqiCexqpU1A60wm2akZ7OEMB8Rk3SOhWJnWFouz4eRzmInlTHEbJtwWyNBoglyfZTL1NXKnQ9ei6vklrKK8z%2B%2BLH4DqESoShIkXq4RPJIMzfPNTl3c%2B%2FiBE9QCSELQWLM9cnhjeFNkPu36a7XUonnoeNQxGXpBVCWB%2BpJj9czFxzM5nhdX8G83J%2FnehZSbPvgxArq5SkmmpwmULSmPC8QZ&X-Amz-Signature=8611a303ef464324c438524f12a411600ed7b0100ea0b1983d606d814b7f9958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBW5BYJQ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T091021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD7WjMwGuHBP7DzQUkA4%2FnMzv9BQyXx5D7w2XZfjR%2FXjQIgfCbILsdTPSGxQrNcurPc5OxTjcyRdOIxcz%2FJpoJkaiEq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDGGt7q1Yl2M0yJEwcSrcAy28%2FoeoTs2AnJ7UgFJvbUTSFGid8cd0aSLOf%2FST%2F%2B2ibVTU9BSvA7G3D%2FqLDcScsS%2BBn7SDhyWlvgSz0sTZDOCuOL9Vv9f%2B8e%2FnTTu%2F9qhVAsH28dGdZ7oURDyW2ZENrQigA2YyQ2gXog4EVQtgLppSs%2B0ojD57FU7C6YmaRMq8dkN81KXT6ysGKG%2BdgjW4wlYNcG1T0AVKL4HY8zOpytFwutner80Q08y411gAjHMx%2BVyoejChjz4LVk86VPFSseJJtdsZwVdIlgzHHXKGIbE4yy%2FyKq1RxLmIJeIUcu9fm4Dl%2FTgYJuVKIXkTxUikSm%2BWO3d7ISLnYrtGgWkz6jjM0hWPxjj1yFcsdjgjzRlQSSw9jAclOMoBlz2T5YdAXDVjK%2FdxjiKf8M5CmOM0OcJkZLpcrvS%2Bw0FUHIXz6kk0w2jkm6JdUcm2esVFSD3NRB0q%2FBOtDm0%2Fq%2BkwlTF3rdjgZhrVQcd9m%2FmvvFx%2BJzia6ePJPrvLLV0yHHDUQf7mbolmFsnZxMHv0vHiXUHeKL4G2IhNSljgFv9iQRRt6Ku0894ZPUxGyVslbKW1W9RoYkv%2FvtYDxwthR7OBCIlW2JNMprnTCXRW43sr9lsrVBU1csBulBYxo3w82Q8VMMGW9MIGOqUB6%2BsN9TgX59MgOMXNmjGBAHA0Fh4CDyZiaP32Li8h3Ek1lhy4oKmf1UsH7AWMjjqe%2FgnFwqG%2BAl%2B%2BbEQm1JU60fmeEW3KYdNu9Kr6%2FCEPVNu0gjlbjezGm7EM3e0k1AzqqOyZ3fg6Nv%2B7WOZEQ2ul2zJyCUYx2qfq3d6FD5rISwPZT%2FKaMsrkdg%2FILxr%2BHUslkfqOjirEPa7nMKlCsrwLWO9ONVeu&X-Amz-Signature=09c7773bbf2d1991db5d3e9e456c07c816d4dd51c7b1d3989fe724baa3dc5204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
