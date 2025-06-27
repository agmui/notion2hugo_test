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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654FND7D2%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDqzWTsbQglkwGSISlR%2B5hZm%2Bwi3IIut1Ws0MN6wncgVwIgU2F2N%2F22KmOIf0tmrDFc4o1f11vh22NrpVlYSx%2BisTAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCAO9ANpPSZcT0TpiCrcA0NJNXL0uopyvIuhnCBnrQO5fFB4LtgOxv16JUM3nAaR%2F1Gkt5ROgoWERnHMOZfGK%2Fxo4jsg7zPagHOY%2BrAkmVu0QAwItnj8p2QDfCAfvAX7aeVLKRYscN8qnzTQRWjeVTmc0hmtwji37S16DAQ0Uf6D%2Bvu9CJXbHztVf8eZzVVLKQJbxeyEuethdlvXW9t9aNFq7W1hPayP%2BPbXH7cc3fKAEO3FHSl1TZFXV3udmbqH%2BawDjEFD%2FwwAIHvXhvkoO0qcoi0lcS6vCiHLs0QOgnjmjJlSG%2BZXZiKiFohJGzrBuHVW4LeIJA0jIljWR%2BIuJN5GRKbvDTMwpPSWpd%2BIiI2zYPeDwzVz6O0L%2F%2BNL4moyUsrm4trjOkRbEKQbtBrfb1wmiHj5z1qO79SnX7QMbiqvRzTGcqE7I2ChZhVot2KMfPHYzTQLMCW%2FzQ8X9ayQI3eb1tGXdeRGhCB5O4kEirG7xY8LpKSzimKXoB6bbDk5cMrq%2BLGUsqt6LRHjIpqQMheMfNWJSn2yzAyyQwGmR00td%2BqzA%2FB%2BaW4PB0xhgZa42XrUyhorBMGzn0wKXEtIomBTpNRgzA4MrCI5cXtSuXtv4WOy6KOOnM5D%2Fv%2F2KKdW%2BRTmtElZlKbVuR4kMPf4%2BMIGOqUBR5xJ49k%2FYcUOKH2qvKgBs6FBw9BjheIocoAZviW%2F%2BVgXwxaIs2ZAMJxKAV2AgkjPL%2BZe0Eefne9sjDqE38sFrNzdsb0Mo3ZEqfnpEgHB%2FN4RAYCkPRdUWj0vxTmM5TAX%2F4OqiOg6DlU3IqsFo9%2FwyiPtGaMcL0J35ytPiZkVrPEhyi6R3FB8TwL6IrNy7tDEZHeyqI%2Bx4R111EUj5MoGZm31RnLe&X-Amz-Signature=dc74f1a745c2c03a36f121843f185529c04eb8e4b1adb9dac9f86b868da904d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654FND7D2%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDqzWTsbQglkwGSISlR%2B5hZm%2Bwi3IIut1Ws0MN6wncgVwIgU2F2N%2F22KmOIf0tmrDFc4o1f11vh22NrpVlYSx%2BisTAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCAO9ANpPSZcT0TpiCrcA0NJNXL0uopyvIuhnCBnrQO5fFB4LtgOxv16JUM3nAaR%2F1Gkt5ROgoWERnHMOZfGK%2Fxo4jsg7zPagHOY%2BrAkmVu0QAwItnj8p2QDfCAfvAX7aeVLKRYscN8qnzTQRWjeVTmc0hmtwji37S16DAQ0Uf6D%2Bvu9CJXbHztVf8eZzVVLKQJbxeyEuethdlvXW9t9aNFq7W1hPayP%2BPbXH7cc3fKAEO3FHSl1TZFXV3udmbqH%2BawDjEFD%2FwwAIHvXhvkoO0qcoi0lcS6vCiHLs0QOgnjmjJlSG%2BZXZiKiFohJGzrBuHVW4LeIJA0jIljWR%2BIuJN5GRKbvDTMwpPSWpd%2BIiI2zYPeDwzVz6O0L%2F%2BNL4moyUsrm4trjOkRbEKQbtBrfb1wmiHj5z1qO79SnX7QMbiqvRzTGcqE7I2ChZhVot2KMfPHYzTQLMCW%2FzQ8X9ayQI3eb1tGXdeRGhCB5O4kEirG7xY8LpKSzimKXoB6bbDk5cMrq%2BLGUsqt6LRHjIpqQMheMfNWJSn2yzAyyQwGmR00td%2BqzA%2FB%2BaW4PB0xhgZa42XrUyhorBMGzn0wKXEtIomBTpNRgzA4MrCI5cXtSuXtv4WOy6KOOnM5D%2Fv%2F2KKdW%2BRTmtElZlKbVuR4kMPf4%2BMIGOqUBR5xJ49k%2FYcUOKH2qvKgBs6FBw9BjheIocoAZviW%2F%2BVgXwxaIs2ZAMJxKAV2AgkjPL%2BZe0Eefne9sjDqE38sFrNzdsb0Mo3ZEqfnpEgHB%2FN4RAYCkPRdUWj0vxTmM5TAX%2F4OqiOg6DlU3IqsFo9%2FwyiPtGaMcL0J35ytPiZkVrPEhyi6R3FB8TwL6IrNy7tDEZHeyqI%2Bx4R111EUj5MoGZm31RnLe&X-Amz-Signature=388ce2bf645a4fb15c5540259ea38f86fd149bb6d4417eace3c89b5b3046edb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654FND7D2%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDqzWTsbQglkwGSISlR%2B5hZm%2Bwi3IIut1Ws0MN6wncgVwIgU2F2N%2F22KmOIf0tmrDFc4o1f11vh22NrpVlYSx%2BisTAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCAO9ANpPSZcT0TpiCrcA0NJNXL0uopyvIuhnCBnrQO5fFB4LtgOxv16JUM3nAaR%2F1Gkt5ROgoWERnHMOZfGK%2Fxo4jsg7zPagHOY%2BrAkmVu0QAwItnj8p2QDfCAfvAX7aeVLKRYscN8qnzTQRWjeVTmc0hmtwji37S16DAQ0Uf6D%2Bvu9CJXbHztVf8eZzVVLKQJbxeyEuethdlvXW9t9aNFq7W1hPayP%2BPbXH7cc3fKAEO3FHSl1TZFXV3udmbqH%2BawDjEFD%2FwwAIHvXhvkoO0qcoi0lcS6vCiHLs0QOgnjmjJlSG%2BZXZiKiFohJGzrBuHVW4LeIJA0jIljWR%2BIuJN5GRKbvDTMwpPSWpd%2BIiI2zYPeDwzVz6O0L%2F%2BNL4moyUsrm4trjOkRbEKQbtBrfb1wmiHj5z1qO79SnX7QMbiqvRzTGcqE7I2ChZhVot2KMfPHYzTQLMCW%2FzQ8X9ayQI3eb1tGXdeRGhCB5O4kEirG7xY8LpKSzimKXoB6bbDk5cMrq%2BLGUsqt6LRHjIpqQMheMfNWJSn2yzAyyQwGmR00td%2BqzA%2FB%2BaW4PB0xhgZa42XrUyhorBMGzn0wKXEtIomBTpNRgzA4MrCI5cXtSuXtv4WOy6KOOnM5D%2Fv%2F2KKdW%2BRTmtElZlKbVuR4kMPf4%2BMIGOqUBR5xJ49k%2FYcUOKH2qvKgBs6FBw9BjheIocoAZviW%2F%2BVgXwxaIs2ZAMJxKAV2AgkjPL%2BZe0Eefne9sjDqE38sFrNzdsb0Mo3ZEqfnpEgHB%2FN4RAYCkPRdUWj0vxTmM5TAX%2F4OqiOg6DlU3IqsFo9%2FwyiPtGaMcL0J35ytPiZkVrPEhyi6R3FB8TwL6IrNy7tDEZHeyqI%2Bx4R111EUj5MoGZm31RnLe&X-Amz-Signature=c5100a106e9552faf1887846890566a1f9927362dacc426b3478d3d1da1721f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3KPUSF6%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDmiD%2BEeTM9EqpLCn9iULdgyo9lE4W8drMDaLvK2lczLAIgWe6SUwa897KJySPhaC3AE1dg1Lb6yFyYgXhdBk%2BBPX0q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEdRQRPbWeo47h0OgyrcA%2BxYlCGx%2FIGRtsPDeu78HM4i3Xhxi7Z95xI5sbynS8O%2BLvrveKYGolkEMSneJxcgM9hxh%2FzPk3V6jeezQWJgHav83EwTYk%2BDqJJRfoCy0qT%2F7TFUPncrnaUNUE%2BnS2Pv9mwWS8hxOJEc10ILB0D0etsZiMsKLpfmyID%2FW9Q1BC1AlLMGeGF4ZoqYGc9sT3%2BpoWiidYwpnwapzxt8rRXqlU8DxiU050SlPQYocYOlKeE1hxMlowyA3Skzpi69%2FWHmL2730CU8fPPZdgePcwfGmY1sWEQ4oS6tAYazAJFl7iVffe1XV%2F%2F3w7oAf4%2FbzpdGV%2Fr3gpdqq98HiP%2F5nYf5HPNnBMdbQNFaiG1Zbx%2Fcx2JtWUzZNtEdhEfql5nIu49vK5Mwi0NF2vCA%2BvohMXcs%2BFM8mJrgzZZQ9xFbE1H0UB%2BYCPWS03oiglQaQZ2Ab8Fk%2F5f0onkza9A7NHWkxTczLhCmLKo9Hm%2FjEoPups4eMp5BcAY0NWnNgMQ9l3s9Oyj3RgJOLjtPgWL51oXM4BBmKDEYsUn0QARl7pxeNPITOEkf0drecAImb3xpLtVV9h%2FIcQgWaE98AuV1iFlvSc9DNBtYJ1%2FvD%2FRaCry1x%2FGM3PvQUYQen3sn2eeJUiNwMNz3%2BMIGOqUBIG52QpCJdu9ZT%2FM431pdBjouAc1nm1bqNSA57QQZTLEgwBd%2BDsZgjCPdvGhwu%2Bu1bGO3q8qhXIq98FCO8uMB9PX%2B8DwwqXqa2dSL%2B5Xu3ra%2BMmhnh3ojN%2FtKqE97JBBTFE550zz6MAm%2BAYc754d2HJqvhdy6bT3Z%2BEvZZFVyWm5W4hvsxBRIZsJHcAaQJhzeZH2KOQmQlLZDlkZVVz78XU4cLV2k&X-Amz-Signature=d4a24b354dde5956da5fc6bc803defdeb3456967a2312ba38e29b01281ce05cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKFEO2LL%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIG0flj1Q3Nun7wFxQjdF2Cw0BEWEoaGC%2BmUZoRUOaXwYAiEAmCn3uca4edfOIKGJpDWkcIerAZdbgBhvuzCDI1k5TjEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDO1LDVaeJwSxCRGP1CrcA647dVojgHDlgQIQ2IQGIAxSiB%2BZM4k0pg0I3glTeuVaAK%2FeDv9%2B1Iy48fahRXpxpZ6qhNkv3Ov9R7n6Y3JDlsWCXsv5T2eQ4UISvgM%2BS1hdJmpDy6%2Bh7%2B7Q7gwjoX3GKplcWNgBAgV8WFzDSBm%2B53GjtV%2Fb1UEPseNPO2R3%2BIB5X3Q4TzMruxjCQX3L5JLppGqf4Kyr9AJHGmXDyFtsOclRLntzhKsX2KGhgMS6%2BPGq2Q%2FwkZi72V5FVVEtLyjVtub1i4JG399DfJnybYlYV3aBT27DADEBQV8euWKs4TgZjo%2BLFl8jIaGmD%2FkkmTnR1m%2Fasf5cCj7tXl3q9nd%2FuDrcjmIy0JN%2FJ%2Bf0bEeMroNIE3aIB%2BL4lIc5y6%2FkxfXwgRECNzJhZHxwu8IkeXB9Ea5R3npWXnal6SAX54nhY5mZ7vME%2BHkT%2BumqwSPx6UnoKxjPCWMd84Ck3HI4NNAvTjHCyU2CKtmFd9lDI7AZqCWqaOEwwZCqvaw9pMc8ZjYoBcRfBCz7Drrs5labNQeOtx9G6xJQy3jbSXJ9xXYhBVE6TYE7zCAmDbmCYVRgCm%2B3dBpGL1nBVJdZaBMb32rLwey7t88fpD00XKQpF7JMgZiIl137p5LdsgiYzv1uMJik%2BcIGOqUBpB5vqZTXoLOqOvPg8X9AMnpFKWvvqgI0vsl7K5GinbCQzsOwZti5X%2F%2BjB07X2byoZKG6djknSqiCQDPiovbpd6R0opF1OJLyJWptRTPYksBCIziaD3fplnI0yjyU1iagsZyH%2BYoOB7ZAYFZbKiMZzbgj%2B0l%2FZqls9ZseYVcCDDWxtJxWh9EATc9FTv%2BFojIVJ%2BoMwUiniDZwVCVD%2BD7NVnrdoZot&X-Amz-Signature=d81bd2a52723ca54aaac3d524025ee1078f2dbe291585ed7570e21c35d8087d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654FND7D2%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDqzWTsbQglkwGSISlR%2B5hZm%2Bwi3IIut1Ws0MN6wncgVwIgU2F2N%2F22KmOIf0tmrDFc4o1f11vh22NrpVlYSx%2BisTAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCAO9ANpPSZcT0TpiCrcA0NJNXL0uopyvIuhnCBnrQO5fFB4LtgOxv16JUM3nAaR%2F1Gkt5ROgoWERnHMOZfGK%2Fxo4jsg7zPagHOY%2BrAkmVu0QAwItnj8p2QDfCAfvAX7aeVLKRYscN8qnzTQRWjeVTmc0hmtwji37S16DAQ0Uf6D%2Bvu9CJXbHztVf8eZzVVLKQJbxeyEuethdlvXW9t9aNFq7W1hPayP%2BPbXH7cc3fKAEO3FHSl1TZFXV3udmbqH%2BawDjEFD%2FwwAIHvXhvkoO0qcoi0lcS6vCiHLs0QOgnjmjJlSG%2BZXZiKiFohJGzrBuHVW4LeIJA0jIljWR%2BIuJN5GRKbvDTMwpPSWpd%2BIiI2zYPeDwzVz6O0L%2F%2BNL4moyUsrm4trjOkRbEKQbtBrfb1wmiHj5z1qO79SnX7QMbiqvRzTGcqE7I2ChZhVot2KMfPHYzTQLMCW%2FzQ8X9ayQI3eb1tGXdeRGhCB5O4kEirG7xY8LpKSzimKXoB6bbDk5cMrq%2BLGUsqt6LRHjIpqQMheMfNWJSn2yzAyyQwGmR00td%2BqzA%2FB%2BaW4PB0xhgZa42XrUyhorBMGzn0wKXEtIomBTpNRgzA4MrCI5cXtSuXtv4WOy6KOOnM5D%2Fv%2F2KKdW%2BRTmtElZlKbVuR4kMPf4%2BMIGOqUBR5xJ49k%2FYcUOKH2qvKgBs6FBw9BjheIocoAZviW%2F%2BVgXwxaIs2ZAMJxKAV2AgkjPL%2BZe0Eefne9sjDqE38sFrNzdsb0Mo3ZEqfnpEgHB%2FN4RAYCkPRdUWj0vxTmM5TAX%2F4OqiOg6DlU3IqsFo9%2FwyiPtGaMcL0J35ytPiZkVrPEhyi6R3FB8TwL6IrNy7tDEZHeyqI%2Bx4R111EUj5MoGZm31RnLe&X-Amz-Signature=f7be79888ec17a4ed3923120bb9047bba23d9db401dec7c7ac26474110e5e35f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
