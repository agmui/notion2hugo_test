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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XIHZ4LG%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIDAZaEaHmMs5whMtICnftIxn9BhSh4YrENFHucJ7UpPlAiEAm0c4PFYQV7GWuDZyw7SSPjn55Hbz%2BV%2B4SI%2BeaRIs8W8q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDB2WGDYWMG4iJHCQYSrcAy7HdjKgWWiIiGJJL7I979HkayPA7mFh9mwkLVfVCFupu29gDgqfiXC%2Fcjgbd8makf%2F2BfZzGO0xzyRo33A8rbsNzK1UnhVvRgCSUIp4ECani8E%2B5bNKMafBlkz%2Bbyurh1W96IAdxJOwSi%2F3YhR217SPTNe4syZle2INUMnv1tBj4tjkPZhmPyonNCCj3%2BvksTC5y8ged98Ft8d9rGaB%2FcPlQqW8VL%2FChnDOiAg9SHjwp38hvDf3hiLfzSZ6SsAgTqx2ige8k6x0tzq4LFJc7Q31Yj1s85IH1251RfQsjA7VUXovrpbTZyKDthfXK7UMB02hjdjhDTCsUrY6tiUmM4Mx1G%2B6aVUnRE1ZCEHreBHPRfqZY34y1YwEclJXGXvUFc4kXLXWTKX685o1jJKAUz5njloEofH4ZPPfxhGfHY%2BCnpfpelWHyz9Psx8gwbZUv6StlVZArXvWrMYtFjEZkbqllL%2FbJN%2BLBvIg4T9DueV%2B60Mw73uNgzLksANK3Zi5u%2FjBV03YhGWzj%2B7gkl2RpDhuKUCw38Vjtd86cj750TceRZS3b3n%2BFT3ALqA1a5DWI%2BfG7WEScu9HQnVXqX%2FZz1iT9oNlibDVDxeLq6cUn4gbwzzqcvxomYpTzXUDMMCtgsIGOqUBUhFw5oMV5YvNtYC%2FMV7bQzVdQ8ngZ0EpCetJSPMfyzGLY9TCn4NguwTnFzQjfTAtt1D5vqpKSST2ly9jor4HWgRHQZwUH4ZWqfHIJmTPv0G%2BlIlyOiUcPvRBbF45qeA2V%2BsXZSr5Ovjw%2FRgPRrC96P0LCK0Ucv9s1poGy0i82A0qo0daJ%2B%2FHlVBaXrCz6%2BLDSTGpOyIykyVYtj34%2BRTjmpCPy5AD&X-Amz-Signature=df5c7d912c3dee4952a5c1f68464cbe2342d55e24b24a51dfaa8fadfaf9369b7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XIHZ4LG%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIDAZaEaHmMs5whMtICnftIxn9BhSh4YrENFHucJ7UpPlAiEAm0c4PFYQV7GWuDZyw7SSPjn55Hbz%2BV%2B4SI%2BeaRIs8W8q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDB2WGDYWMG4iJHCQYSrcAy7HdjKgWWiIiGJJL7I979HkayPA7mFh9mwkLVfVCFupu29gDgqfiXC%2Fcjgbd8makf%2F2BfZzGO0xzyRo33A8rbsNzK1UnhVvRgCSUIp4ECani8E%2B5bNKMafBlkz%2Bbyurh1W96IAdxJOwSi%2F3YhR217SPTNe4syZle2INUMnv1tBj4tjkPZhmPyonNCCj3%2BvksTC5y8ged98Ft8d9rGaB%2FcPlQqW8VL%2FChnDOiAg9SHjwp38hvDf3hiLfzSZ6SsAgTqx2ige8k6x0tzq4LFJc7Q31Yj1s85IH1251RfQsjA7VUXovrpbTZyKDthfXK7UMB02hjdjhDTCsUrY6tiUmM4Mx1G%2B6aVUnRE1ZCEHreBHPRfqZY34y1YwEclJXGXvUFc4kXLXWTKX685o1jJKAUz5njloEofH4ZPPfxhGfHY%2BCnpfpelWHyz9Psx8gwbZUv6StlVZArXvWrMYtFjEZkbqllL%2FbJN%2BLBvIg4T9DueV%2B60Mw73uNgzLksANK3Zi5u%2FjBV03YhGWzj%2B7gkl2RpDhuKUCw38Vjtd86cj750TceRZS3b3n%2BFT3ALqA1a5DWI%2BfG7WEScu9HQnVXqX%2FZz1iT9oNlibDVDxeLq6cUn4gbwzzqcvxomYpTzXUDMMCtgsIGOqUBUhFw5oMV5YvNtYC%2FMV7bQzVdQ8ngZ0EpCetJSPMfyzGLY9TCn4NguwTnFzQjfTAtt1D5vqpKSST2ly9jor4HWgRHQZwUH4ZWqfHIJmTPv0G%2BlIlyOiUcPvRBbF45qeA2V%2BsXZSr5Ovjw%2FRgPRrC96P0LCK0Ucv9s1poGy0i82A0qo0daJ%2B%2FHlVBaXrCz6%2BLDSTGpOyIykyVYtj34%2BRTjmpCPy5AD&X-Amz-Signature=20e39a007e7d442708fd092e4977b7a3ede1b11f1d29c8be29c184f433ae8733&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XIHZ4LG%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIDAZaEaHmMs5whMtICnftIxn9BhSh4YrENFHucJ7UpPlAiEAm0c4PFYQV7GWuDZyw7SSPjn55Hbz%2BV%2B4SI%2BeaRIs8W8q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDB2WGDYWMG4iJHCQYSrcAy7HdjKgWWiIiGJJL7I979HkayPA7mFh9mwkLVfVCFupu29gDgqfiXC%2Fcjgbd8makf%2F2BfZzGO0xzyRo33A8rbsNzK1UnhVvRgCSUIp4ECani8E%2B5bNKMafBlkz%2Bbyurh1W96IAdxJOwSi%2F3YhR217SPTNe4syZle2INUMnv1tBj4tjkPZhmPyonNCCj3%2BvksTC5y8ged98Ft8d9rGaB%2FcPlQqW8VL%2FChnDOiAg9SHjwp38hvDf3hiLfzSZ6SsAgTqx2ige8k6x0tzq4LFJc7Q31Yj1s85IH1251RfQsjA7VUXovrpbTZyKDthfXK7UMB02hjdjhDTCsUrY6tiUmM4Mx1G%2B6aVUnRE1ZCEHreBHPRfqZY34y1YwEclJXGXvUFc4kXLXWTKX685o1jJKAUz5njloEofH4ZPPfxhGfHY%2BCnpfpelWHyz9Psx8gwbZUv6StlVZArXvWrMYtFjEZkbqllL%2FbJN%2BLBvIg4T9DueV%2B60Mw73uNgzLksANK3Zi5u%2FjBV03YhGWzj%2B7gkl2RpDhuKUCw38Vjtd86cj750TceRZS3b3n%2BFT3ALqA1a5DWI%2BfG7WEScu9HQnVXqX%2FZz1iT9oNlibDVDxeLq6cUn4gbwzzqcvxomYpTzXUDMMCtgsIGOqUBUhFw5oMV5YvNtYC%2FMV7bQzVdQ8ngZ0EpCetJSPMfyzGLY9TCn4NguwTnFzQjfTAtt1D5vqpKSST2ly9jor4HWgRHQZwUH4ZWqfHIJmTPv0G%2BlIlyOiUcPvRBbF45qeA2V%2BsXZSr5Ovjw%2FRgPRrC96P0LCK0Ucv9s1poGy0i82A0qo0daJ%2B%2FHlVBaXrCz6%2BLDSTGpOyIykyVYtj34%2BRTjmpCPy5AD&X-Amz-Signature=6309cdd6ef0c7d4ade1f362ede5fd8139c6cdadc7820fc33f3edde9ae6acd1dc&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SDDIHTH%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDLxC7ba0JPQiBrHemp1G6IvNvYx53n9qP3oiUN0mGl5gIgbEV%2Bg3Z5OZ086Q7fI%2FZ1QknU3y1sq7sfqCOShNPdKG0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHUQ2yE57be%2BOLusVSrcAxcgaJl2zNlBtVJkgyoprOzn%2B0DjK1dHrQqZ%2Fk4lR9n6U2DccBTEVhpUIllyz3qJsmX04J18a7hfxa%2FwmiIahgIx1F5tmpsSjyFFxrJVNBsgzlZ1A%2FS0QcOQH%2F0AOua8iSTuuhu1yVKX%2F2eTVSUAFSLvUkXcBUeYvdA0%2BKBtc1BWyO%2Bk8bFHl%2BGETxkW2oYCLg%2FAd5Ay4Ny0Uzzs7HuZRIxRhGF%2F%2Fmpv%2FVOYQE7qIbnSvDEyrjefChj28cnzkWs07pX7MXR58NVU%2FPjIWA5Uv%2F7x56k%2BqBoEN93Qj4avPKOhxAC79FFyb34wjCOeHULv6D%2FwQGr7cxCSMwdevqOF2VoZPl6soFUbyrEMHU%2BWH5tQqQztT82Z8Fo%2BcCIvYbCNI0J1wpiU5tajorBCa8jx%2FkXMSogLEEgfDzkLIH3yj1fIdxQ6Fm39H05KHHHVfm9HWQPgXeWq8UmRh0CxZb4v6oSoGgnVeE1PdYRP2FTpJOkspUK1DNg4TEb6Eizq2ajhLQlVaA6EB3CgFPZCG3yXptMn0ehtxvLaZjl7%2B5KszLWSjozIm59f8FWKpjjdDid9X8cnKVDFiEEj8neJUt4zTYKowFSY9a5m4BFzBnuH7%2BwqUxBQm6587psGW8RzMKaugsIGOqUB%2FlwOUSzL%2FLo4kmqkIdMXpj7qaT1S0Hn7qZ97QZVG996jaCSz2mWh5jmUS6N20wA1exLdI5ViJAWYnxuyKL0eUPFUtzZNc6bd6DPaBO5fibAETacaTbibz208492yHBiNFg2xfELHmctfrK%2FlpO2OvGo4EFNJ4%2Bs1L%2F6R89SqSUIE9m8uVm1gdsE4mMeIiaJpBQa%2FCIBqF6JOgEOh6%2BMcwrh1UYKm&X-Amz-Signature=57de223854bbf9de251253dc958826d649b8f4cc16970a8455c8fbb5d47653b2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFXXNHN7%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIHfS7tHq33uyHqXYJOMBeufm2mlfJvyZdijRS2HGnDpCAiBJ7AYUGSNDVj62yWJal0AN25YFKPhSAdfEvwmwNarF8Sr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMIb0%2BDz31lJej3DIDKtwDgChCdqdC22lOCXkmVtbxEJz2F5dJhT35V55dZo%2FKtr2Ft3LPmDMtRAFUHAv1lKsXjWwkLOU1TdrnzxHy7zJyMBHT%2FIBCr2MxoWOPTG6cMFfwe2jZww9DSem%2BaLWDlkwBRK0XcfSveskLQuxe%2BZeJjFuWmP5PwqBgEkKko3Bz1SxAtH6epHeCmeRh8obiljbGjcLWnsailMZjZnjwjPaZj8vAqr%2FpSw8hSbYRPrNBYsD9OkcGWJayQA7BkgvZy05Fnq2BGs%2FLzuMMHyAlfsH4gaAWtIcA9Gq0GkXxoG6jEDyekOkLgmd9JDnHqpY4xyOHzEGb3iXdDiemG%2BJqZ31FuZvwhSRoCEI0LapVQdbiRBUy2miVOyFdyzqlMo%2BCwpfOOwtlvcA%2F3Uzq9bZw6kvp%2F5VlY43zt5RhkBbfGFcMOsXcg7%2BQ2gGok%2BXd7pT4EpBGrUqYF0vwIL1Ber6I4CHzhrmD6LFHJV8Rv00t3B2zqyjfGaWdEbDAclj9Sxpl5moVePkNV5QBqbMEknTnANNd9SFJkt1dPrZJuFuOP1IXV5iVIZV31XNH15AGqSIIeGwWLt%2BshAf5ILkyTUpoRfFQkajEKOpV39ch1mFP78cfax3l%2F%2FWHA%2FZlBtfWIoEw%2Ba2CwgY6pgHOzsS277an6I0w8bgJYZFWc9mYUH4kOMB2SMByZDadJlYNi3V6SmKrJrpOFPMNjNPW6%2FtK7Q2kfltFIAbPiO8Cto4q29BXLvns%2BM22TJ4iYxDY2YIrpJMAD4%2FZ9zSS%2FZ5mJnSvJ75SxvDcjqdBDPkppglJyAmBjr1%2FMLl%2FNQiq%2F83QDv4QzXoaTtET3rlMR7qbyA28ChoSCxo5w%2BUlfnHCzcfjVsr%2B&X-Amz-Signature=a1ec4ffa57a59341906e556b51be9906d05877d8b4b6f1b33c5151ea9ef7d2b7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XIHZ4LG%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIDAZaEaHmMs5whMtICnftIxn9BhSh4YrENFHucJ7UpPlAiEAm0c4PFYQV7GWuDZyw7SSPjn55Hbz%2BV%2B4SI%2BeaRIs8W8q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDB2WGDYWMG4iJHCQYSrcAy7HdjKgWWiIiGJJL7I979HkayPA7mFh9mwkLVfVCFupu29gDgqfiXC%2Fcjgbd8makf%2F2BfZzGO0xzyRo33A8rbsNzK1UnhVvRgCSUIp4ECani8E%2B5bNKMafBlkz%2Bbyurh1W96IAdxJOwSi%2F3YhR217SPTNe4syZle2INUMnv1tBj4tjkPZhmPyonNCCj3%2BvksTC5y8ged98Ft8d9rGaB%2FcPlQqW8VL%2FChnDOiAg9SHjwp38hvDf3hiLfzSZ6SsAgTqx2ige8k6x0tzq4LFJc7Q31Yj1s85IH1251RfQsjA7VUXovrpbTZyKDthfXK7UMB02hjdjhDTCsUrY6tiUmM4Mx1G%2B6aVUnRE1ZCEHreBHPRfqZY34y1YwEclJXGXvUFc4kXLXWTKX685o1jJKAUz5njloEofH4ZPPfxhGfHY%2BCnpfpelWHyz9Psx8gwbZUv6StlVZArXvWrMYtFjEZkbqllL%2FbJN%2BLBvIg4T9DueV%2B60Mw73uNgzLksANK3Zi5u%2FjBV03YhGWzj%2B7gkl2RpDhuKUCw38Vjtd86cj750TceRZS3b3n%2BFT3ALqA1a5DWI%2BfG7WEScu9HQnVXqX%2FZz1iT9oNlibDVDxeLq6cUn4gbwzzqcvxomYpTzXUDMMCtgsIGOqUBUhFw5oMV5YvNtYC%2FMV7bQzVdQ8ngZ0EpCetJSPMfyzGLY9TCn4NguwTnFzQjfTAtt1D5vqpKSST2ly9jor4HWgRHQZwUH4ZWqfHIJmTPv0G%2BlIlyOiUcPvRBbF45qeA2V%2BsXZSr5Ovjw%2FRgPRrC96P0LCK0Ucv9s1poGy0i82A0qo0daJ%2B%2FHlVBaXrCz6%2BLDSTGpOyIykyVYtj34%2BRTjmpCPy5AD&X-Amz-Signature=2ff447ee2624c34343aa6bbaccede6498cb94610ce22ec661ee4198381df402c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
