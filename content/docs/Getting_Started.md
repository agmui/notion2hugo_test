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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EDZGIXW%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDCItB0IdeoSwgDNT6dMkzejnREHJ3NzG%2BK88LZzBZr2AIgGq%2BARIKz%2Bv2vDXRgrEFL2uU93ihfGqcr0sU%2F4ytDTnkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDJy8%2FRWfEwougydFZSrcAx3%2FHhlbX0LQGElgHQ7IIKkBdgR3%2FAhbdOMPYey4nvsTT2dqANSAdpbti%2FBmrcNJ5hYAFwpnaKdck35hI7fdXkbVgmUUc27IY4lb%2FWmJyTY4u2MtjmM%2Bz1H4mV8zYW3FrdXj%2BEMUxvbaIOrUP%2F%2BIhXCyPGtANuNlh0LcoGqGc%2FEyfburyhkNLTosen%2B8M14Uv7RS%2B%2BIwp7YLS%2BOk%2Bkjt%2BepmyERW9QuR%2F8WRhM4w5seYlkE6W5%2B8JuQ%2Btb3zrXmMaUnmz1AjeIpIktfkQjdb2bnELv9qh7xCqFtHJjAHOy75IqDScJXKeMieHdeVWYFDxbI5F3GHDsfJthdjr%2BI0DoclJWHiTbT0bbEz0sV2Zj5szYczSXfc85nTUtbMZp3PVExKYP1Gg9Ggxp8%2FSjnYsHCW3Jiv%2BR3OA3nAAE%2BZ5Gt53jvRJYJ6gvRx%2Bkj87VaWKadyMpkowT9tEhO%2FNF8s7xY0agxf%2BKxiKZVvc5cYVp75HqCUh8xaj7vmmMrjSxJ3qXs8Ty8gYkXe5gKsBOhRWY0F5nubJGMqnZhcgYKCHJAI0bw6ky6tGPqmm%2FnV%2B%2BCpcbEIsIKcccmDGue3j6g0SRgKJSavIYKYwNj9StN%2Fv4jqxd%2Fnl4fU0LsrBJn%2FMKWIyb0GOqUBvCk1r9SfoUdK%2FyyRBniHodb3URj3pHnIjKuYjfVeCGBA0geh2z%2FhPsZe2rL6mWrUJx6SBcOnbaeYR7ZxVsKpf9Dklr4RhWfYFJGW03D3PH%2Bqu%2ByeIQFwzUP7q5sabcfijouZ42Pc0ICyn5PokdTJeXOw0IgIdfiDCsF0UiGVzfih3thVCVAz6cPLRWqRzWRH3d5n%2BnHI%2BnfTmc88ffPJ0xfytg46&X-Amz-Signature=2e5c4146a66d9874b0d7db3302ed4bdd7739a574f69cb3b9a3e3f159d77108d5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EDZGIXW%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDCItB0IdeoSwgDNT6dMkzejnREHJ3NzG%2BK88LZzBZr2AIgGq%2BARIKz%2Bv2vDXRgrEFL2uU93ihfGqcr0sU%2F4ytDTnkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDJy8%2FRWfEwougydFZSrcAx3%2FHhlbX0LQGElgHQ7IIKkBdgR3%2FAhbdOMPYey4nvsTT2dqANSAdpbti%2FBmrcNJ5hYAFwpnaKdck35hI7fdXkbVgmUUc27IY4lb%2FWmJyTY4u2MtjmM%2Bz1H4mV8zYW3FrdXj%2BEMUxvbaIOrUP%2F%2BIhXCyPGtANuNlh0LcoGqGc%2FEyfburyhkNLTosen%2B8M14Uv7RS%2B%2BIwp7YLS%2BOk%2Bkjt%2BepmyERW9QuR%2F8WRhM4w5seYlkE6W5%2B8JuQ%2Btb3zrXmMaUnmz1AjeIpIktfkQjdb2bnELv9qh7xCqFtHJjAHOy75IqDScJXKeMieHdeVWYFDxbI5F3GHDsfJthdjr%2BI0DoclJWHiTbT0bbEz0sV2Zj5szYczSXfc85nTUtbMZp3PVExKYP1Gg9Ggxp8%2FSjnYsHCW3Jiv%2BR3OA3nAAE%2BZ5Gt53jvRJYJ6gvRx%2Bkj87VaWKadyMpkowT9tEhO%2FNF8s7xY0agxf%2BKxiKZVvc5cYVp75HqCUh8xaj7vmmMrjSxJ3qXs8Ty8gYkXe5gKsBOhRWY0F5nubJGMqnZhcgYKCHJAI0bw6ky6tGPqmm%2FnV%2B%2BCpcbEIsIKcccmDGue3j6g0SRgKJSavIYKYwNj9StN%2Fv4jqxd%2Fnl4fU0LsrBJn%2FMKWIyb0GOqUBvCk1r9SfoUdK%2FyyRBniHodb3URj3pHnIjKuYjfVeCGBA0geh2z%2FhPsZe2rL6mWrUJx6SBcOnbaeYR7ZxVsKpf9Dklr4RhWfYFJGW03D3PH%2Bqu%2ByeIQFwzUP7q5sabcfijouZ42Pc0ICyn5PokdTJeXOw0IgIdfiDCsF0UiGVzfih3thVCVAz6cPLRWqRzWRH3d5n%2BnHI%2BnfTmc88ffPJ0xfytg46&X-Amz-Signature=83c6fe0190af7caaf67e747dede5439dab4131fb8efb2cc4fc7b9d4fb078d841&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUWKBCYO%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIFn342diAn102Ooqzn%2FImk41XiKQJ3pgxB2HQsLMEzrxAiBP2uo%2B5UGyTzKfMEumy5ITbz%2B1K5iwQf0UZ4d9ffx9uir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMvuK88PKPV70HbwJ3KtwDLeXZbTsl6JKLZYxoZvhtljy8lZ5EcqHv1UQtqmpfM%2BkbilFrm3OF66aw2d%2Fhh%2BR6Jd69mResTPRIQRHi31QHYHC%2FcLmlnE6nnEAIQDlLtzEpHQIeBwxchQMZnQbpn1KmDn7GoptPIG7YZrB7cknANcjdtvvs43Xl6x2vZ%2BFe69ngkrzawnNyFo0ZyRtjKZwnclLekH%2FGDrcyu%2Bx2CrCtZZHUViukdDZeM74Pz5TSuYKeObtzjaX1LcpJTDpWchY%2FnDdSMWyJkhNaNBwjj5zveWGkKhm3EMI44PIksffXxOjEkZJRjgdL3tTeVHPnBfq6gmXnqyfSzIR5wZUZ7J%2B1BDRCASMcpeorOA5fdJxwUxbHMVNBtTBKbQoYBgAYjiTr9vWBV4%2FmH6GZXcU7SAKwIy3hhMc3KFdIdNLvtrfN8RPOF7LTBG7AURBAb2g6CAlu21%2BFSFmSuPfTwBcTPPIQlU1ByNkGcnPkWuW5RRfDhucJIu8goljAflY1AKTuefTEFj6L4fhyM4sOT7aenmiuKRotHcmf52fzSdTbC9tcqkXxprqphPolHQkPlaFyn2FYYcr204Z%2F%2BXrS2BGzjLuLX%2FUi8LVDjDUs%2BsCP%2BXVtU1iRp8il5p%2B2EfhJWM4wlYjJvQY6pgHqrzrwlgwcd9dEPxel3Pzc6EBYUd%2F15pOaOz9Hx2vnILFdrwsfhWx72uS%2FovU3Zsw77r1AVK2Brq0YJF6o%2Bk2qSzFH1ZnesYj4d%2FmPskWbG2VIVuGVheMYawM4TX%2FoOi0UeNaI1UXL0%2BukPPYTCtqg7pAbIAExKH0KUNAH3Md8yoR%2BXc2sTP7nLY0%2BQ4cDW0YbnJ%2BJ7VlxT2IkN1vOHzSRDRLPRgZf&X-Amz-Signature=aad4f2e514d4d7a2b5f3455b44bdac3323d88fb8a3c65cd6882a48c5db9607c1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7MI46OR%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIE8tZPogkb3KzVvhcqm9HxAeoGFOq4otXeruIxga7XW2AiABJ6IicX7pE5vznd38P3rU6IzhMNceOvony58PUjozmSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMfqeKnTRzBEP7eKvCKtwDHm4AVgTHWuRr%2BNhpPkibpdtwSGTWSBwN5quV9yKZsf1znXxnedZ7%2F0B7HAoXakXCZMmX%2B4JwBS3ryKzUMAO6W%2B7PvvKngsTVcgABPX3fQPTd0qzOYp3UTu66l8lfszWOJLyfJIKcrgqH%2Bf8owmltQg2QTlRnWQEEIl8%2FfMprYxAGQUMprvv7o1Lq0VSWcScCbEioIXs24x6fcXGOCXIvtMUYj%2Bnz78X1etyiMyNxzUDaRWyRE0pPXpIXtMSX1ZT9Q408F0vLFMR40NVvAhpSHIyGtW17WYwudZHFlp%2FHL979Lw1tgTmE8zqHTUCHEyPnvGhJjkYi3oGOQsYUIXsFjXbzcXisI5MM3fQU6AnJ2FvQ9%2FO7JXaJuVf3REDnw6ZZltjNHthSCZeahyFSeTKpaGi8w43vGi9kLa5cviIA6AJSuNZMUQDmpeSrpF2EDAHeIwu9qPweR%2BcvMk%2FZTw%2Bc%2FNAIUAoIqIMnAul7PITLRoQ6xL%2FGPVPNNaPNI%2B2883DkWEOQ6ZIUbbJe1Aj1beJq8mLoKUFgDyU8b3H4oIbRkglZsYqB2yOBQoU1lnXBioGG3Pp1YDYDsY73aXRGt%2FqpYZOiJp%2B5KIu04X%2BO0%2Fzu5A6AO04Jh2cEDeDzeAMw9ofJvQY6pgFmQv3Ie8JopNjY2LrFk2xzXeYGBS1CDUrgYTiXylTrgC85VShnfnaj%2F8WK%2FsUOXScdE%2FI%2BZwi4j4ecqZ2875y7QrCExFQ1BqCNjkBCPm39BPICAJiSDcOQKFsdCYwwotu6maZO2Ceut7UC%2B7U6pV83nGVlXreOi9WI9AreTUSOTuJxDsbJmdz62JMvqm%2BTMR6jJVzraci9ZNcyKTAZEFxurY8NBeAP&X-Amz-Signature=833aabcab12ac3b3ae12c0ae944cbd90aaf7cbe8b6f2bd69957e5603c5464f3f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EDZGIXW%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDCItB0IdeoSwgDNT6dMkzejnREHJ3NzG%2BK88LZzBZr2AIgGq%2BARIKz%2Bv2vDXRgrEFL2uU93ihfGqcr0sU%2F4ytDTnkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDJy8%2FRWfEwougydFZSrcAx3%2FHhlbX0LQGElgHQ7IIKkBdgR3%2FAhbdOMPYey4nvsTT2dqANSAdpbti%2FBmrcNJ5hYAFwpnaKdck35hI7fdXkbVgmUUc27IY4lb%2FWmJyTY4u2MtjmM%2Bz1H4mV8zYW3FrdXj%2BEMUxvbaIOrUP%2F%2BIhXCyPGtANuNlh0LcoGqGc%2FEyfburyhkNLTosen%2B8M14Uv7RS%2B%2BIwp7YLS%2BOk%2Bkjt%2BepmyERW9QuR%2F8WRhM4w5seYlkE6W5%2B8JuQ%2Btb3zrXmMaUnmz1AjeIpIktfkQjdb2bnELv9qh7xCqFtHJjAHOy75IqDScJXKeMieHdeVWYFDxbI5F3GHDsfJthdjr%2BI0DoclJWHiTbT0bbEz0sV2Zj5szYczSXfc85nTUtbMZp3PVExKYP1Gg9Ggxp8%2FSjnYsHCW3Jiv%2BR3OA3nAAE%2BZ5Gt53jvRJYJ6gvRx%2Bkj87VaWKadyMpkowT9tEhO%2FNF8s7xY0agxf%2BKxiKZVvc5cYVp75HqCUh8xaj7vmmMrjSxJ3qXs8Ty8gYkXe5gKsBOhRWY0F5nubJGMqnZhcgYKCHJAI0bw6ky6tGPqmm%2FnV%2B%2BCpcbEIsIKcccmDGue3j6g0SRgKJSavIYKYwNj9StN%2Fv4jqxd%2Fnl4fU0LsrBJn%2FMKWIyb0GOqUBvCk1r9SfoUdK%2FyyRBniHodb3URj3pHnIjKuYjfVeCGBA0geh2z%2FhPsZe2rL6mWrUJx6SBcOnbaeYR7ZxVsKpf9Dklr4RhWfYFJGW03D3PH%2Bqu%2ByeIQFwzUP7q5sabcfijouZ42Pc0ICyn5PokdTJeXOw0IgIdfiDCsF0UiGVzfih3thVCVAz6cPLRWqRzWRH3d5n%2BnHI%2BnfTmc88ffPJ0xfytg46&X-Amz-Signature=9012daf581bdfbcb205f3381bcecf1c3eadcc8ab4583d021d7637449c2a1f379&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
