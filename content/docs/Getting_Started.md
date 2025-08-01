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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBAH2ALB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpw3vzBJN8tcoMFgP4IqNzndVC8peiw779TGsyMrb1bAIgXARiceN%2BX80s%2FbYAKwcSxWRnh3bX8XbvkFRN7mKq94IqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxqMtaFTCl5iLhqCyrcA2adFRgpApUfVGt4wU3cbE8NjKFJ8HlAn2v%2B4KGBeFO69%2B%2Fiom85iLjQV%2FB2jgF4RoY5jm92T%2FV%2BoVBgQ3lHAGtY0qT4YH3IJPdY06o%2B3itoywKD%2FWu%2Fr8%2FoMkAsBdpabQBW6BMIUBr7yV%2B1Y29BpRh%2BVGtYhEGBr8PRFA4Y%2FBDT8CXxpF1faLdJ0LHkDIXqszZ5PkUVVeQ%2BEVLxUp4rBN8ELeMyc3UdWFzzwEzrFh7CLFQzut5R8w%2B9PaY%2FpAvt6rVqDYkgqOObk5Yn8TwxjPtdPD07Mo6%2BUUpF7IT3cZ%2FviLRBmZXyWYXOeXSUFKZZrgyRsMtoLOVyycUONr2d1IprxgLXxVCTMNpEdEQCqB55Y2Gd30y5wJ4lH%2Fy5Z6ZrOFoW9%2F39id6FF5aioyk%2FgRWBg3Vmt4cv5IH7nJmcnGevvYoaMJhZnEu7Cspqy65kXdFj1bpI6AFm4iCJqJiILJiGA5wnxP6PnP0FjUO1paWkcSZea%2B%2FUB0iYq%2BKOb7BqiRnpUeL48j5dve%2BLFOxkmNunYXoNlgw9y213U1GWSefaJRhjJel8qVaiosvtTKQ%2BnvaB6uvieE8mVO6KKVqe06gR%2FJ8u4QTTZ2hjlHCu2AF9534du8iC2GsrkbDkMIe2ssQGOqUBh1Vz5iNcKvvgBpy4XLnXH54zvX7UDn1v02fnTP9AyQaw%2BPZ0CEy0a7Sb0GBF0PZXKeD4o81MnPMe5PkIFpotgU%2BjiN6JVkxkBwHWaI25SuXVkCMEY1%2FF5PHyv7iEGSPXfGY7N%2Fc70fAMrapGuAEHOVbsjMb81L4%2Bzz0R8XE2GXcpFBm%2BzHBKlPhgpmyDTbTaA7wVO%2FX2BMpXq64%2Fnm%2BBGePUUg%2FO&X-Amz-Signature=3b28781f21b07b11c6935a14f2f28794eb7e218eb698f10079921e51d0b54a4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBAH2ALB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpw3vzBJN8tcoMFgP4IqNzndVC8peiw779TGsyMrb1bAIgXARiceN%2BX80s%2FbYAKwcSxWRnh3bX8XbvkFRN7mKq94IqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxqMtaFTCl5iLhqCyrcA2adFRgpApUfVGt4wU3cbE8NjKFJ8HlAn2v%2B4KGBeFO69%2B%2Fiom85iLjQV%2FB2jgF4RoY5jm92T%2FV%2BoVBgQ3lHAGtY0qT4YH3IJPdY06o%2B3itoywKD%2FWu%2Fr8%2FoMkAsBdpabQBW6BMIUBr7yV%2B1Y29BpRh%2BVGtYhEGBr8PRFA4Y%2FBDT8CXxpF1faLdJ0LHkDIXqszZ5PkUVVeQ%2BEVLxUp4rBN8ELeMyc3UdWFzzwEzrFh7CLFQzut5R8w%2B9PaY%2FpAvt6rVqDYkgqOObk5Yn8TwxjPtdPD07Mo6%2BUUpF7IT3cZ%2FviLRBmZXyWYXOeXSUFKZZrgyRsMtoLOVyycUONr2d1IprxgLXxVCTMNpEdEQCqB55Y2Gd30y5wJ4lH%2Fy5Z6ZrOFoW9%2F39id6FF5aioyk%2FgRWBg3Vmt4cv5IH7nJmcnGevvYoaMJhZnEu7Cspqy65kXdFj1bpI6AFm4iCJqJiILJiGA5wnxP6PnP0FjUO1paWkcSZea%2B%2FUB0iYq%2BKOb7BqiRnpUeL48j5dve%2BLFOxkmNunYXoNlgw9y213U1GWSefaJRhjJel8qVaiosvtTKQ%2BnvaB6uvieE8mVO6KKVqe06gR%2FJ8u4QTTZ2hjlHCu2AF9534du8iC2GsrkbDkMIe2ssQGOqUBh1Vz5iNcKvvgBpy4XLnXH54zvX7UDn1v02fnTP9AyQaw%2BPZ0CEy0a7Sb0GBF0PZXKeD4o81MnPMe5PkIFpotgU%2BjiN6JVkxkBwHWaI25SuXVkCMEY1%2FF5PHyv7iEGSPXfGY7N%2Fc70fAMrapGuAEHOVbsjMb81L4%2Bzz0R8XE2GXcpFBm%2BzHBKlPhgpmyDTbTaA7wVO%2FX2BMpXq64%2Fnm%2BBGePUUg%2FO&X-Amz-Signature=28c0b44d0fde0417f936f725583602e3ff8ab629364229bb034d507eb9a61585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBAH2ALB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpw3vzBJN8tcoMFgP4IqNzndVC8peiw779TGsyMrb1bAIgXARiceN%2BX80s%2FbYAKwcSxWRnh3bX8XbvkFRN7mKq94IqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxqMtaFTCl5iLhqCyrcA2adFRgpApUfVGt4wU3cbE8NjKFJ8HlAn2v%2B4KGBeFO69%2B%2Fiom85iLjQV%2FB2jgF4RoY5jm92T%2FV%2BoVBgQ3lHAGtY0qT4YH3IJPdY06o%2B3itoywKD%2FWu%2Fr8%2FoMkAsBdpabQBW6BMIUBr7yV%2B1Y29BpRh%2BVGtYhEGBr8PRFA4Y%2FBDT8CXxpF1faLdJ0LHkDIXqszZ5PkUVVeQ%2BEVLxUp4rBN8ELeMyc3UdWFzzwEzrFh7CLFQzut5R8w%2B9PaY%2FpAvt6rVqDYkgqOObk5Yn8TwxjPtdPD07Mo6%2BUUpF7IT3cZ%2FviLRBmZXyWYXOeXSUFKZZrgyRsMtoLOVyycUONr2d1IprxgLXxVCTMNpEdEQCqB55Y2Gd30y5wJ4lH%2Fy5Z6ZrOFoW9%2F39id6FF5aioyk%2FgRWBg3Vmt4cv5IH7nJmcnGevvYoaMJhZnEu7Cspqy65kXdFj1bpI6AFm4iCJqJiILJiGA5wnxP6PnP0FjUO1paWkcSZea%2B%2FUB0iYq%2BKOb7BqiRnpUeL48j5dve%2BLFOxkmNunYXoNlgw9y213U1GWSefaJRhjJel8qVaiosvtTKQ%2BnvaB6uvieE8mVO6KKVqe06gR%2FJ8u4QTTZ2hjlHCu2AF9534du8iC2GsrkbDkMIe2ssQGOqUBh1Vz5iNcKvvgBpy4XLnXH54zvX7UDn1v02fnTP9AyQaw%2BPZ0CEy0a7Sb0GBF0PZXKeD4o81MnPMe5PkIFpotgU%2BjiN6JVkxkBwHWaI25SuXVkCMEY1%2FF5PHyv7iEGSPXfGY7N%2Fc70fAMrapGuAEHOVbsjMb81L4%2Bzz0R8XE2GXcpFBm%2BzHBKlPhgpmyDTbTaA7wVO%2FX2BMpXq64%2Fnm%2BBGePUUg%2FO&X-Amz-Signature=6efcce3f8a4ec546ca3569928bdfd27530e4bc48698c04f10f8654305670c439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDUZIYOI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqtZKQmBz9B9D%2BFhLNTXem114QeBKJVkSXUihMXrD8KAiBU72no%2Fba9Vmq0TJrBJCxLKZCUecvCu9YFvW4cgr2muSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwgyF5uwiy0ncJsJ6KtwD%2FYj8jzPj3kKCPAjHKB3y9qsnDmQyTePiODi4Fzw6L8oeXd%2FYoSYZ7m00TyX8zhlFXmePCcCTOg77czV5r1XwOxerRe9sT3hswh%2FC%2F2vcb9BguQsRQZYybnaIYqlADF79Y3rf7bMXu%2BPK5t4anfTYMnXl49LuACxTxcyWwncgOJsYuSJt%2B4g2okZGPAwYJohNZZ0tWzhrcNrRqHKPSGsEheZJbkbWvwIonFWKtDo%2FiA78N%2Bkry5bNx8mL3BN7SNiRynh%2FKDrGpjsCLLIW%2FOqv1wqtbMg8w8%2F890qzcLhh038ERyM8fIjBRo8nLq4k0B%2B23N8H3gVoU5%2FNb1b%2FnE0P0S8ak3Wdk6xcM9SEMBzUPPZYBBaaXOOoiEiqB1Aoi1RPvTYv6vuLW809Cw%2FbvmBGUnAD644crXu1evLl1tNXmOSoOyX%2BHomys3Xuy9Q%2BDXbRvrKuv1FM5YchVvFwSHwXcJmLD7QQwLXkffNONNcBuUATAZ8fHCDE316sxUYlgF2zNCYCeGFW6Xo59AMRI5VCE7TY%2FMm1v0Dyr8T09yZ1OKHSMWCtCqC9U7hriAXtBe8eXIvFRB7Yv88ytPjVhQLW3AU1J9McewCUKOirT3%2BnUPZ5JpoxDzwwG26ZziIw1rayxAY6pgE%2BH6gs82y4U05apFNizsyfyETwhS8NS5sX2cOh9TOVogow%2BbdDMIXndYFc7J2ZIfI5LE62i9%2BH83%2BkFMkpbHw%2FtAzXq%2FDcqbzqOUqubVJ9081EjGos9ObpWRsaQvEwBg0%2B%2FgwaZjeImvKL6KFT5qq9gV89isbiA4f5y%2FlM45%2B0KeLb8%2B3Pk8%2B6eBs6sdQSVvXhYs82WKBENXLzdUZPcci4d6SZ1Tdf&X-Amz-Signature=2159f5021bb015f8fa9b5205ac2645eac41386ba105838bb679593931203a39a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y76WRLS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2Z80Jmo22P17byzDZtJoKuTeMJd36FuPn%2BijPzvzFZAiEA5IpUziNj38excEfgnlGdrxzlMvsBtY7tZG9lV%2FgQ7vsqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNX2qhImOplXDwMrCrcA900yogolwCFFm5a4cbfzOC94mp0Xmu39XncLfL17NrtIZ9cd4c%2BieO%2BYGsrPQdNab2avzzt2A3TC0CINe2XyBFtFSPsXyglOW0AMISErFgumD531zt1PbCEi3cFI%2BnidK2VekZ4Ol3CxFv3imePFWCLzORl82cBtRrilHIiG9xiBapjEwlGDQIjl1rFdtCUUIxkBmy%2FXQeuPadunmjwwa%2Bgk7086Cuq9NWhTaN7AqoCC4SPDU5LWmlowT9HIjAn9J%2B3e13%2F%2BiLe8Eg4QViJnYHdGWgfXSX3vehhvXF7Xil8cTGkepD27ic21yXghcg%2FXBFXCtCitXqZdbC6F8gCI8qDzynsqImkxqxl2kOfR3hf9%2BKSdtn9291P08kVFEFIUeFoENjDrteE9ODEaIBarklBfDOShFR7KhBx%2FxyMdftg4vZYuxGSaB1ZkCZl0hlNAdMvhzXo85BLR5IepxE0jACD0PKmecaoqkCTW%2BldRFTO%2BK59yC0pbgLBlh5JkSpRJRG%2FTJ40Yt0Lu7w53v6tCqSHMPS60nI5TO73DhCCcVQuWRDPmNCTnpyoZA2NkNlUYEUb7Dh4OBqsBLs00ZELHFeA%2FSAbyPCq3N8Qf%2FDMF6Pl4UWoy50VwjJqCD71MOa1ssQGOqUBGaQGnOIBB%2Bsygi7VxIy8b0IQLvwKk6z6SIq6H74Fov7QmpaUcQvlqDoXcYKTCJnWk9dSPPrOWyrhQTo%2B6R2uufR0mAIBP4at9Gh7K9xUAZLj1fqvrlnkxnNEDZK4DQKr76EwRaNIDmbAxMRckBiqUfsl%2BHsnFkH7Ca1rjRY1LdR1hOcsKKqsWXdGceKSlo11rmxnYGMvY1JZq9HWv9RwTaUg7lHa&X-Amz-Signature=7a99f9eda5eefc8cc95e4a4b1b26b872adbe35e38cc3302c02c32c6f4234b615&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBAH2ALB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpw3vzBJN8tcoMFgP4IqNzndVC8peiw779TGsyMrb1bAIgXARiceN%2BX80s%2FbYAKwcSxWRnh3bX8XbvkFRN7mKq94IqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxqMtaFTCl5iLhqCyrcA2adFRgpApUfVGt4wU3cbE8NjKFJ8HlAn2v%2B4KGBeFO69%2B%2Fiom85iLjQV%2FB2jgF4RoY5jm92T%2FV%2BoVBgQ3lHAGtY0qT4YH3IJPdY06o%2B3itoywKD%2FWu%2Fr8%2FoMkAsBdpabQBW6BMIUBr7yV%2B1Y29BpRh%2BVGtYhEGBr8PRFA4Y%2FBDT8CXxpF1faLdJ0LHkDIXqszZ5PkUVVeQ%2BEVLxUp4rBN8ELeMyc3UdWFzzwEzrFh7CLFQzut5R8w%2B9PaY%2FpAvt6rVqDYkgqOObk5Yn8TwxjPtdPD07Mo6%2BUUpF7IT3cZ%2FviLRBmZXyWYXOeXSUFKZZrgyRsMtoLOVyycUONr2d1IprxgLXxVCTMNpEdEQCqB55Y2Gd30y5wJ4lH%2Fy5Z6ZrOFoW9%2F39id6FF5aioyk%2FgRWBg3Vmt4cv5IH7nJmcnGevvYoaMJhZnEu7Cspqy65kXdFj1bpI6AFm4iCJqJiILJiGA5wnxP6PnP0FjUO1paWkcSZea%2B%2FUB0iYq%2BKOb7BqiRnpUeL48j5dve%2BLFOxkmNunYXoNlgw9y213U1GWSefaJRhjJel8qVaiosvtTKQ%2BnvaB6uvieE8mVO6KKVqe06gR%2FJ8u4QTTZ2hjlHCu2AF9534du8iC2GsrkbDkMIe2ssQGOqUBh1Vz5iNcKvvgBpy4XLnXH54zvX7UDn1v02fnTP9AyQaw%2BPZ0CEy0a7Sb0GBF0PZXKeD4o81MnPMe5PkIFpotgU%2BjiN6JVkxkBwHWaI25SuXVkCMEY1%2FF5PHyv7iEGSPXfGY7N%2Fc70fAMrapGuAEHOVbsjMb81L4%2Bzz0R8XE2GXcpFBm%2BzHBKlPhgpmyDTbTaA7wVO%2FX2BMpXq64%2Fnm%2BBGePUUg%2FO&X-Amz-Signature=f2abb7854a9cfe6fbc38e91be4f92d7591e89188ef1a8ba196e6fce74e114daa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
