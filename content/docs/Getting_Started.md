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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GBRG4CI%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T140859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCojQj5%2B1GHyNddpytw5vD8BDaI0VDBKR1QTkGuxq0tLQIgKfPKTr95FjPvawK%2BdMMgzyCLg2D%2FPuL18vPu1dcwV0cqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwe9gnXFKkTVJcajCrcA4EMpE2qXTxMK5D5pnTILIUmtfr7dBZj7yHxpVD2ytZd00BFnbnQ%2BUmtd9XVY1XQNV8TT%2B5Rc%2BNStXyLL2JCkoxg92zf3m0r2464XW%2FTmRv3EDmkmPyxGWgYUvlwk%2BWBH1p0Ult51gRwrMoZkprMNc4NxkTTXb6vh%2F5RnNapajNbjEpZrikIdTBIYLJkUjjZPCFZoglQFC8gaMae92GVZqCbUdH%2Fq%2BmlTPSvmThvA8J0fWT%2BD3tkTUA2Yu3mHcH1uO4vbq%2Bh%2FLLlP%2FA6MbV03d1kXvTEtKXDIlfYABuFYn4RgnOl5cg4MmmoZdkQmaoBD79SWO3DKjYMs21JVdUk2%2BSNn2K42GVlgfcnRm%2FcVWajpnO6DCo5d0xgKzr8rr5Z1EOGJB%2BQgYHDQ3OG9o5jpnkidpG67YI35EW4iTYDxUcW4RuhTzj4jRZ82prEAb5isLHNOyIysZMpH108VHdiCYUQ4DAGEgO1FCtEHmUI8smGeHzWiaAPhjp%2BhWzQ5kub%2Bn16lCoCCTEFYdh0WDjCeko4PldH4TAfvEE1o2%2FVS%2Fz%2Fhql3dFQSSn6nZGVZtYs4C5IMV2ymCB%2FpfKno0JrACjmcRTaLJ0Mj4zYeLEB4AuF2oi7eDTYMBvD9c00%2FMKLutsEGOqUBcmK%2BQDVopC%2F2nRoWvHtxIYpkoYbPuzHndU2R%2BBnMntzlI0YVXueEem%2FpoiLDftLF05LRnhawD15BM3P2qBS%2BuwgnXRoc%2B6bOwa6hv3X2Be5eGjInv%2FaDwUP5dye%2BxE7eBodz3NL9V0OTBxv9z5GAxSjkybzqMIACcEn%2BbQQBEaTyhQpK%2BVjyJNntIxuUyIAFdk3Dn4%2F1skJ8Nlr3W6Ko75iUUODI&X-Amz-Signature=85dbd9eefd9bf3b4266634510d6a29fd9e694eb0cfa40e20e308d0ce26e60ed1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GBRG4CI%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T140859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCojQj5%2B1GHyNddpytw5vD8BDaI0VDBKR1QTkGuxq0tLQIgKfPKTr95FjPvawK%2BdMMgzyCLg2D%2FPuL18vPu1dcwV0cqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwe9gnXFKkTVJcajCrcA4EMpE2qXTxMK5D5pnTILIUmtfr7dBZj7yHxpVD2ytZd00BFnbnQ%2BUmtd9XVY1XQNV8TT%2B5Rc%2BNStXyLL2JCkoxg92zf3m0r2464XW%2FTmRv3EDmkmPyxGWgYUvlwk%2BWBH1p0Ult51gRwrMoZkprMNc4NxkTTXb6vh%2F5RnNapajNbjEpZrikIdTBIYLJkUjjZPCFZoglQFC8gaMae92GVZqCbUdH%2Fq%2BmlTPSvmThvA8J0fWT%2BD3tkTUA2Yu3mHcH1uO4vbq%2Bh%2FLLlP%2FA6MbV03d1kXvTEtKXDIlfYABuFYn4RgnOl5cg4MmmoZdkQmaoBD79SWO3DKjYMs21JVdUk2%2BSNn2K42GVlgfcnRm%2FcVWajpnO6DCo5d0xgKzr8rr5Z1EOGJB%2BQgYHDQ3OG9o5jpnkidpG67YI35EW4iTYDxUcW4RuhTzj4jRZ82prEAb5isLHNOyIysZMpH108VHdiCYUQ4DAGEgO1FCtEHmUI8smGeHzWiaAPhjp%2BhWzQ5kub%2Bn16lCoCCTEFYdh0WDjCeko4PldH4TAfvEE1o2%2FVS%2Fz%2Fhql3dFQSSn6nZGVZtYs4C5IMV2ymCB%2FpfKno0JrACjmcRTaLJ0Mj4zYeLEB4AuF2oi7eDTYMBvD9c00%2FMKLutsEGOqUBcmK%2BQDVopC%2F2nRoWvHtxIYpkoYbPuzHndU2R%2BBnMntzlI0YVXueEem%2FpoiLDftLF05LRnhawD15BM3P2qBS%2BuwgnXRoc%2B6bOwa6hv3X2Be5eGjInv%2FaDwUP5dye%2BxE7eBodz3NL9V0OTBxv9z5GAxSjkybzqMIACcEn%2BbQQBEaTyhQpK%2BVjyJNntIxuUyIAFdk3Dn4%2F1skJ8Nlr3W6Ko75iUUODI&X-Amz-Signature=ad6c2d9a7a92764ed4d8e4c496250b0fe68b414e2c57f5dedeee28b89b0ed29d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GBRG4CI%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T140859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCojQj5%2B1GHyNddpytw5vD8BDaI0VDBKR1QTkGuxq0tLQIgKfPKTr95FjPvawK%2BdMMgzyCLg2D%2FPuL18vPu1dcwV0cqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwe9gnXFKkTVJcajCrcA4EMpE2qXTxMK5D5pnTILIUmtfr7dBZj7yHxpVD2ytZd00BFnbnQ%2BUmtd9XVY1XQNV8TT%2B5Rc%2BNStXyLL2JCkoxg92zf3m0r2464XW%2FTmRv3EDmkmPyxGWgYUvlwk%2BWBH1p0Ult51gRwrMoZkprMNc4NxkTTXb6vh%2F5RnNapajNbjEpZrikIdTBIYLJkUjjZPCFZoglQFC8gaMae92GVZqCbUdH%2Fq%2BmlTPSvmThvA8J0fWT%2BD3tkTUA2Yu3mHcH1uO4vbq%2Bh%2FLLlP%2FA6MbV03d1kXvTEtKXDIlfYABuFYn4RgnOl5cg4MmmoZdkQmaoBD79SWO3DKjYMs21JVdUk2%2BSNn2K42GVlgfcnRm%2FcVWajpnO6DCo5d0xgKzr8rr5Z1EOGJB%2BQgYHDQ3OG9o5jpnkidpG67YI35EW4iTYDxUcW4RuhTzj4jRZ82prEAb5isLHNOyIysZMpH108VHdiCYUQ4DAGEgO1FCtEHmUI8smGeHzWiaAPhjp%2BhWzQ5kub%2Bn16lCoCCTEFYdh0WDjCeko4PldH4TAfvEE1o2%2FVS%2Fz%2Fhql3dFQSSn6nZGVZtYs4C5IMV2ymCB%2FpfKno0JrACjmcRTaLJ0Mj4zYeLEB4AuF2oi7eDTYMBvD9c00%2FMKLutsEGOqUBcmK%2BQDVopC%2F2nRoWvHtxIYpkoYbPuzHndU2R%2BBnMntzlI0YVXueEem%2FpoiLDftLF05LRnhawD15BM3P2qBS%2BuwgnXRoc%2B6bOwa6hv3X2Be5eGjInv%2FaDwUP5dye%2BxE7eBodz3NL9V0OTBxv9z5GAxSjkybzqMIACcEn%2BbQQBEaTyhQpK%2BVjyJNntIxuUyIAFdk3Dn4%2F1skJ8Nlr3W6Ko75iUUODI&X-Amz-Signature=fca9e23a34b67c8c53909ba3221829446671572fee2649284d9e4027089cbf93&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MBJ5T5B%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCYoEXI7YZ%2B%2F1SnKhUnEA7M82gSiS2wtxZmDhu%2B%2FNFyEwIhAPOLu8wVVfIaVjr4UztNuHgbpB4ZeC48Q5nCwKPsBeIXKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIySCp%2FT5jypu7mSwq3AMfw4WyxrbXs5bxABbcgkWGnp340M2vcaUQ2J5VrMe%2FGLohyS2b3BNUf53hMTrH2F%2FcbWWqeoc2wYpKLqde2dB2bxWyqJpUD%2FBmLwGDgJ8Hs9J21etZy4SiexUBrQyl9e4tZWCq%2BS8zGZCpxdYQVHtkyy%2BgWGMPfPJgh%2BpaIrITO39EsbIzLUCou%2BuE1xmw4riSne8cxODdgTjxmS3jeT%2BAJsaBKBrntTITKNr%2BzkulcgNNPbkXXuOOvuIbhVIu53lL%2FeRVUBN1GyyXNvH%2Fm5XBIYfKxvJaGT5WIJpY1FKK1iF6cUneYLZ%2BdAYGqquUA91mMJrwrftffSzpbEUAIyM%2BpY77OIpXd1C%2BPDsEMTzFkUVvzrPmXNnDEDsPveOuxlqxc5CWS7igyBlqR%2BsoUmVvgKT61HA2pH8L5T8y9%2FG5TEk0xqpsDqlVpvwOEo6MCaKe2tyZoqAYmob2inG%2B9UdpImV4FOXdsd39%2FGJyR4h%2BWL8DJMqOa6XKeXb0GsGzfdzn1aSwMCmzgR14%2FqwvU2iHSpqO9rhEiObLW0BQlAYTMfv0oE%2FzYBR0LPywjnGIvmCvqjow0Uqqk5qgniMClCA7nhru0TuVlvcVcop%2FWM5vRMy5wyCflGxG%2B3Gg5jDA7rbBBjqkAVLDRSIGrRp8itX5YTqFiAI0ZtbfGo9XTkGLvZsivdj7Bzf7mvxiQf%2Fvi90zRMRZciVmrikY0%2FXFSQi5vLiaJWDFpPFFNCNCtDJq6O6qfEFWw4LSzY3dlDH20eDD%2F%2B99eo%2Fq2468o9I%2BQV141SkCkA%2F6B8Ih9bMWweJ%2F%2FWn9UCX%2B7NqL3%2Bg7bMeoERhT8zDTpCl6pvB6yQBpO48flTZERwgq3I8K&X-Amz-Signature=01f234431b98810dd67ac5e9611c4bfea7b1c9daf293ee2036a55a4e120214ba&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634VURHFU%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQD5yEJvrSht8k0A4ivoTs33ElgLOk%2Fc%2ByUPcH3QPDOPVQIhAPZVbVJBJjltVXG8uqMC9EKKb5ercOyDdJdCaykHCuniKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPVL%2FxoOpfGpNoTBUq3AMyh%2B1KaCbOqQn%2Bqugzr9dEcla%2BLWbL8cfFFFK7hovcgDJMLSwrp9J2CDxwr%2B4pgxr18nAPIZguh3PnEqjRO8dJ83BwivuYV%2B4bM%2B8dokXxJ7vBYwyDJJGdC6IkkVOieWX0lNQvH0eMArgS2NLqY1PXEBw4FN7fkexDUgKbISByEJExYrKh2U9yfUg%2B5im%2FEToqbDVsAcdRDGmxPlZE9U6VxW7LEnzK2OYu4PUDYJO8mKjMLLYV%2BJ72MdtOuo5GTnVkLLtErouGSOPXTRiI9XPNcQhL7GkFVadVgrCndB3XAqW3n0MBD0KMlbML8zlwNunrQTqDONw6WHifkms5WR0f%2Byky9LYP2OYhr4xvaPx8ciDQs719g5m21hnvbTP%2Ffg1aHZ8cFGQQDB2y4AjgM%2BW7lCCR%2B3EA1NgFlUk%2BYGCFGkGhylEo6lLhPirSW63NxPE4WZI07c0%2FRcmYUcW1NFuFMecb9s%2FzQwStoOmSe7Xcf2Qrz5YLBSaXR8es%2FVpLhvfqcV7xEHXy%2FHIrz9kVunFzpbh3%2Bf3AtkK6ScEt8wp%2BEZaN8kvfbhuSVLl%2ByaXYZCEjovE2lx83Xz%2FMF0Jt6q3pKRxS%2BoQyyScplx63AkjOgD9oJdRdH1DUL7HmyjCH77bBBjqkAXxm%2FNV9Tj8zToxdjzFkdimhFDf2XDhANvPm1k%2B4kdMMbsRQ%2BL81y%2BbAOFNwIw5IY98Ql6tLIHq%2FzbXJxzvX1Gm8pmiQqftxBiQTxDBSJJ2XRBlKe39HyOYu6y5nSvOHdj11DjvLqrG9x7Oujptjk8Hja8Uufjfi960DABn1BA2vndazL9Vk7HCJJsFNJXUUvxF3PcP9F6iLN2PT0A6fX2BTsm4B&X-Amz-Signature=297c373e3a3e1d97d9bc66b6ff5c81aec7d4d1bc400e7e55ac71329dd3fdf83d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GBRG4CI%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T140859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCojQj5%2B1GHyNddpytw5vD8BDaI0VDBKR1QTkGuxq0tLQIgKfPKTr95FjPvawK%2BdMMgzyCLg2D%2FPuL18vPu1dcwV0cqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwe9gnXFKkTVJcajCrcA4EMpE2qXTxMK5D5pnTILIUmtfr7dBZj7yHxpVD2ytZd00BFnbnQ%2BUmtd9XVY1XQNV8TT%2B5Rc%2BNStXyLL2JCkoxg92zf3m0r2464XW%2FTmRv3EDmkmPyxGWgYUvlwk%2BWBH1p0Ult51gRwrMoZkprMNc4NxkTTXb6vh%2F5RnNapajNbjEpZrikIdTBIYLJkUjjZPCFZoglQFC8gaMae92GVZqCbUdH%2Fq%2BmlTPSvmThvA8J0fWT%2BD3tkTUA2Yu3mHcH1uO4vbq%2Bh%2FLLlP%2FA6MbV03d1kXvTEtKXDIlfYABuFYn4RgnOl5cg4MmmoZdkQmaoBD79SWO3DKjYMs21JVdUk2%2BSNn2K42GVlgfcnRm%2FcVWajpnO6DCo5d0xgKzr8rr5Z1EOGJB%2BQgYHDQ3OG9o5jpnkidpG67YI35EW4iTYDxUcW4RuhTzj4jRZ82prEAb5isLHNOyIysZMpH108VHdiCYUQ4DAGEgO1FCtEHmUI8smGeHzWiaAPhjp%2BhWzQ5kub%2Bn16lCoCCTEFYdh0WDjCeko4PldH4TAfvEE1o2%2FVS%2Fz%2Fhql3dFQSSn6nZGVZtYs4C5IMV2ymCB%2FpfKno0JrACjmcRTaLJ0Mj4zYeLEB4AuF2oi7eDTYMBvD9c00%2FMKLutsEGOqUBcmK%2BQDVopC%2F2nRoWvHtxIYpkoYbPuzHndU2R%2BBnMntzlI0YVXueEem%2FpoiLDftLF05LRnhawD15BM3P2qBS%2BuwgnXRoc%2B6bOwa6hv3X2Be5eGjInv%2FaDwUP5dye%2BxE7eBodz3NL9V0OTBxv9z5GAxSjkybzqMIACcEn%2BbQQBEaTyhQpK%2BVjyJNntIxuUyIAFdk3Dn4%2F1skJ8Nlr3W6Ko75iUUODI&X-Amz-Signature=f9a70482fd2b6ad6b0ef58e8c8721b69c3ddfdf7e2f0bad80dd7237d4fe538ef&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
