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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EXPKU3L%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHM5Y31oA0KgaMcOuQjGlQ4BDPtqT1d3aPm%2F0lDicLs5AiEAjCdI%2BPM5KNkCHo4b3OIIHbqrCsbVSP%2FrWWvuHgVw%2Fowq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDIAo%2FOljx9K1poaM%2BircA2GD8wRBSqMWhBKl3TJkbNNZHS4wX%2F6gXmRWJn5XhI4wkSYAFMJBlpm4R3ooDz4EVP9pkp6S5CzYIr5CV38QwejUDXusCVBg7R1WBWOXH4kLH5Q5JRc0UCofhlzIJwveb0xfx4bfTrmQiweK%2B0vHueUJMuITr3Gg9A0D4ciGfu5p3yzEO8uJakIIuK0R%2BI2O9xi%2BCyLF7JM%2BEAqx2%2B%2BjoZIgnth%2BoA1k2zQ8GJhlVIXok2EkLJ%2FaOcoWrmw887tZHMQ6RhjMK4chvluIc%2F%2FAcZdmPzF56uhv64AFjkjEXKpk6wztcjAuqbYgLAZNBSIMCoqYBDqv98ALLFXtmEWN%2BAsneNs%2FxMbsTrD3C41D3hMNk2cyEs1csUPoToGdl3FmPnU3enwyzwM3%2FaPgHB32p0dIa8NfUYWKSRJaVSTTZl9LrDCbJXsBT9ftFXizJnTE5jIYfdjIfdpPNmaZWvgcnhmQ%2FaRQdR%2F669hU0mRAXlORxpi6ru0gfkxZchlNsPMrh6Y4pKYPPdklGsrXXka54oCLYvmChpiPJM3eIC10hkQITZhUhdUpZNyOjagN4MhpeWLfwe2MY2C7rQa85bj4iLtsZ0JxCoB%2F6Fzis68tx4t2HY%2FejINbPrPtd3U0MMSzkb8GOqUBr9O9LpCPFDLrAmkVVLBBiPYuY2ggKIvFfxjmZOYCXH5VMvIxToscrT%2BcVWyPh%2Frw9XH6V0GGbUTK01RU2LK3oS%2FsBxu%2BVHl1frERFCxrQ1avMe2YlM9NNeyIPHJdMEbnFSmv0qQvvyEaSuwaiByv%2BjKMTk2MHJGWDxT48DmVk6I5Z0NwbnpmRmTplLOLiWxXRY3zOKvL%2F9ly5eAuj0fNPczxjOV4&X-Amz-Signature=6ba2765536e9fa48263aa7bca169b89920e9a919f39d3f889018829dbb866fd8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EXPKU3L%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHM5Y31oA0KgaMcOuQjGlQ4BDPtqT1d3aPm%2F0lDicLs5AiEAjCdI%2BPM5KNkCHo4b3OIIHbqrCsbVSP%2FrWWvuHgVw%2Fowq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDIAo%2FOljx9K1poaM%2BircA2GD8wRBSqMWhBKl3TJkbNNZHS4wX%2F6gXmRWJn5XhI4wkSYAFMJBlpm4R3ooDz4EVP9pkp6S5CzYIr5CV38QwejUDXusCVBg7R1WBWOXH4kLH5Q5JRc0UCofhlzIJwveb0xfx4bfTrmQiweK%2B0vHueUJMuITr3Gg9A0D4ciGfu5p3yzEO8uJakIIuK0R%2BI2O9xi%2BCyLF7JM%2BEAqx2%2B%2BjoZIgnth%2BoA1k2zQ8GJhlVIXok2EkLJ%2FaOcoWrmw887tZHMQ6RhjMK4chvluIc%2F%2FAcZdmPzF56uhv64AFjkjEXKpk6wztcjAuqbYgLAZNBSIMCoqYBDqv98ALLFXtmEWN%2BAsneNs%2FxMbsTrD3C41D3hMNk2cyEs1csUPoToGdl3FmPnU3enwyzwM3%2FaPgHB32p0dIa8NfUYWKSRJaVSTTZl9LrDCbJXsBT9ftFXizJnTE5jIYfdjIfdpPNmaZWvgcnhmQ%2FaRQdR%2F669hU0mRAXlORxpi6ru0gfkxZchlNsPMrh6Y4pKYPPdklGsrXXka54oCLYvmChpiPJM3eIC10hkQITZhUhdUpZNyOjagN4MhpeWLfwe2MY2C7rQa85bj4iLtsZ0JxCoB%2F6Fzis68tx4t2HY%2FejINbPrPtd3U0MMSzkb8GOqUBr9O9LpCPFDLrAmkVVLBBiPYuY2ggKIvFfxjmZOYCXH5VMvIxToscrT%2BcVWyPh%2Frw9XH6V0GGbUTK01RU2LK3oS%2FsBxu%2BVHl1frERFCxrQ1avMe2YlM9NNeyIPHJdMEbnFSmv0qQvvyEaSuwaiByv%2BjKMTk2MHJGWDxT48DmVk6I5Z0NwbnpmRmTplLOLiWxXRY3zOKvL%2F9ly5eAuj0fNPczxjOV4&X-Amz-Signature=22eaeab5b24cd76a8eebb61f8be080406f3b8ca5f16a8394d48cafbcf5623983&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5SWZDSS%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqHlT1pScJtyfuDdetlgqsMXbBkiUSmV5%2BhU3TpTk8CgIgC07Ff91glSFEQm0ihhjYJRaYWUkujxRNAGD2IeDef2Eq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMKlJ9WLukCW%2BJLzWSrcA4Bx5N9xjOQPq8bUHpOJbvGiqqRbNl9VSZXsG52Jtbm4rDIqNwZcQ99WXkNEi8Pv43EMmdD%2BB9oPn25WzOQWUS98o3l5OkwCDX%2Ft2U67mkAeYsUWhPhQQEK4htQ15ktjxvO32%2B5d2ti1XvnHS04KC3YDHFPJqWpSn5pUUp2GefB%2BUHD2T0IIDLPUeJ8CmYeLqAr13e9FhuYTFSZKMaFn%2BKTOtgM8aRYmHS%2BL%2Fo2YsqcYnXC36p2WvUv84wlZGvM740kB%2BpijvUBwbP03YA6wTnn3N%2Ba9mfFyJ9HIsgw5mVSQyn9w29BQplVdtAEEDtogFDWV2XTqMa2zZQ8AgO5hlluU%2FAwaPhytD8pcXrtt1lsbo1mGFV65o14VG4u6RoCzqO5U4%2Bs%2B6WZE51pkHJFFumrrayzlodEp60qnIs2Kmve%2BZ1SCva3bmUCfdu3RchDYKN1H%2Bsz%2FlrTjOyhV79UQdB%2F3t0dyw0dVZCtj%2BTts6WyZuM4vXxzNzGA0ZhTyAnguiw8gldTpbyT5xnZUp2l1rgjpjA22TX5uUCdB1HpIQ4xPaUGqxRaD0VOtXXn%2B5iA3UfRJ3f%2FqzEX2IWR7QEP1pEYzaO58JfkiZkiSCho%2FgWo9SvVpjMV15HZyNnLNMJW0kb8GOqUBBesbV9f0aUltQqqPi0IW22vWRu1yFxr8ftamXUBB%2FgAwLGNzWt%2BbDkNoUgdQ3KM9ZjUERgKNRu%2B2PJAHP%2BvhhcD2st2tClF72xcpYqxDW7f7edNmysG3X33LW%2BqIOHeF9PvYxDMQb5pobArojvXwrqMeX89fUY2QAWvzyXviZ2XG2CDDuSF23S%2FZkCMUqjjtZooYX8SDyZqWR2wqQv4zglRqgHYg&X-Amz-Signature=182c7d88a79d87e6e286cab33535fa1e1d33cc6c26809c777ce2955d10c436e0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QPBTU4Q%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm4YAYFow%2F37olzPcZgLfLV%2FkLlBv5Egr8qxDppyqqgQIgBCMgLCtSk0UIJ6qGgwrF0T2l2fFEiEoWV7VT9W4B4Zgq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDHLwTtGUDNoDfcng8ircA1wSU77t2kuq9LtrNGAzPa163NwicYtQy2XA8qN6IFIFNgbg6cIO61j%2B7XC4Vidmbgt4AodU3dnRuNwjf%2FSEYpQaOKqzTMs0uI6XEYF0myC7t3ttG355LcrmI0SQDYgpTFg6Q2%2FWerjuL%2FGPtepzCA1aBUcowQIMIBNzvfoza1DfqjDDFoP1f0uVmDpf5ByWQIG6KfDve8Ac6B7PMnd%2BPpMri%2FaSQFQZL%2BhM0%2FUM%2BVRngGJLISZkB8Rg5B0JdO%2B0BrIUt1UwM0kVDOqbs1ZnAF77y1yOlaK%2BB3CbmlpxRIgoUUPO0qOWthSkpUlAAHB1YVcAraxJFCA2djnDye8R3Xm5TFCvMdozRYgEs9gaB58IFm4rLFzDEdAleCc330d9uwAHleJeTzPpdoSRPj7Kn876YfxlNGcLPT3%2BnbQ9zbmCuUqRBtwnLQVHbynNMqOyviWx%2B7UWDgykYNYUsNGz0pUcNzAkhMFPODFpN7EF7YCol6R69qgUXHhcOEInxlTEjWP%2F43pypvZs5Oppcuu7L3zon1aHcsi81%2FX7bqdiTJ3qi62YgIYS4Wu8lgI%2Bi6Lb%2B8hKbAEZwq0FBE3POCSrBYFWKJtGgYNN%2BVsQCsrOd6HJ1rzj7mcJPpCLSOYNMLKzkb8GOqUBf2Ooev5wSbli6Iln9qFV1hlGmj%2BMRSHwEwZTNAw93OcEUSebCKOcTyk4kuBDjqNayqPk8wdl8G3eZM2JwHJc3K%2BObD2vY5%2FOKxe9gAB4DXnuGp0hTFcFlweXgzl%2F1nSk2HOxmBAenr8RCH2JbVQXdUgdhd9XTg%2BcVrqvqqti%2Fv0OITqeLM6WAWL8vBx%2B94UmugH%2FZO2Z1sM93djRZnemoxwgmRo0&X-Amz-Signature=d9c70482e449373e8b01afaea2416391f10ad9bff235fd31d10d498242d600fd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EXPKU3L%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHM5Y31oA0KgaMcOuQjGlQ4BDPtqT1d3aPm%2F0lDicLs5AiEAjCdI%2BPM5KNkCHo4b3OIIHbqrCsbVSP%2FrWWvuHgVw%2Fowq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDIAo%2FOljx9K1poaM%2BircA2GD8wRBSqMWhBKl3TJkbNNZHS4wX%2F6gXmRWJn5XhI4wkSYAFMJBlpm4R3ooDz4EVP9pkp6S5CzYIr5CV38QwejUDXusCVBg7R1WBWOXH4kLH5Q5JRc0UCofhlzIJwveb0xfx4bfTrmQiweK%2B0vHueUJMuITr3Gg9A0D4ciGfu5p3yzEO8uJakIIuK0R%2BI2O9xi%2BCyLF7JM%2BEAqx2%2B%2BjoZIgnth%2BoA1k2zQ8GJhlVIXok2EkLJ%2FaOcoWrmw887tZHMQ6RhjMK4chvluIc%2F%2FAcZdmPzF56uhv64AFjkjEXKpk6wztcjAuqbYgLAZNBSIMCoqYBDqv98ALLFXtmEWN%2BAsneNs%2FxMbsTrD3C41D3hMNk2cyEs1csUPoToGdl3FmPnU3enwyzwM3%2FaPgHB32p0dIa8NfUYWKSRJaVSTTZl9LrDCbJXsBT9ftFXizJnTE5jIYfdjIfdpPNmaZWvgcnhmQ%2FaRQdR%2F669hU0mRAXlORxpi6ru0gfkxZchlNsPMrh6Y4pKYPPdklGsrXXka54oCLYvmChpiPJM3eIC10hkQITZhUhdUpZNyOjagN4MhpeWLfwe2MY2C7rQa85bj4iLtsZ0JxCoB%2F6Fzis68tx4t2HY%2FejINbPrPtd3U0MMSzkb8GOqUBr9O9LpCPFDLrAmkVVLBBiPYuY2ggKIvFfxjmZOYCXH5VMvIxToscrT%2BcVWyPh%2Frw9XH6V0GGbUTK01RU2LK3oS%2FsBxu%2BVHl1frERFCxrQ1avMe2YlM9NNeyIPHJdMEbnFSmv0qQvvyEaSuwaiByv%2BjKMTk2MHJGWDxT48DmVk6I5Z0NwbnpmRmTplLOLiWxXRY3zOKvL%2F9ly5eAuj0fNPczxjOV4&X-Amz-Signature=799d38b50c62adcdf241d6a1a12a749882eb55507f417dc68f96fd5c2dc5e597&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
