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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRLQZIZX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQD0g8o5CoAGNZ6kZMDD5V%2FQSZiQAsJcWZD%2FWq%2FZaYFN8gIhAMZ4eKmMV%2BJiIY6m2jYzE6OSu8vIYVn45RtW%2BfuBtWYpKv8DCH4QABoMNjM3NDIzMTgzODA1IgwNKnYDS9YIopcrmlAq3APiZBxh2m2figJY9y6o11phOp9%2BtLpjFYvDbmX8kVEASgrd8DXhTLfZX822fT%2FymvEB5WDbvpZpr19FgAonYwT%2BVVI4WyupbGGa6MuyYXbGGjjn7z%2BjG%2FOb74vB%2FoUGE98%2FKBtzKV5F%2FnLUYHx0OzB863cekzjYo9zr3gaAP7dLzUaKELGwSRpnOS4%2FNK1vnm%2Bv3b7jxzHXwEdp4mmFw9KobyXGm6LIGawrxbpsUA3uZ3eERbXR5HG852J%2BpEd%2FGJRlYQw1ETBwplEE7%2B9CJDkO0g8HCN29IHDy8f2T5vTpqKaMwD0687cqhROlZWy21%2FaRn9oq%2F1Yu3qS4NYsXnBBWiEw0y8VY3iOUxZ05N4OEsYvkBpuPXmJ5C59wgu%2BfSRUdr9I%2FgVj9rZtMJe7b%2Fj%2F7sjSt9kVX6OmcugVwzL3cH%2BzfD%2BFG%2Boke%2BX%2Bwk2H5Fo1xh86hyQsDCVDZ06cjgLItrzvCgZWwq6heZIDh6nNyA7ZX%2FNvPEtDk5wN%2BNtPvaMwc8CZLs0fwKB44DBRTV79IyX5fz0jr2MaD75NIw1zBcbCT8u5r2vjsYcIWcfALf9eWlz%2Blrhp6M7oQGi70eZz%2FmzgFVnFGtD2gbDD2YCeCS9LbN3cH3u0tg%2Bl1IjDnpJrEBjqkAQz32FPKYYdBEIFB1Y3OFcJ1iQEDlBvrtzqIoU6Jb3vaxSZwoAKGKCDNMuT3DW%2FCr89eohKvS0XU3e1MkfQUurBJWlKirElSsx5mYakCjhiU31T2tKZoPuuBgIqxUiw9GZFDmnOZvojAdOgzCYUZOXghifPdw%2BgugZJdRK6wvxcytZJkGNuOhD8oT%2B4cKUiMZ8N4bNoxJw4bZcHfI2mZ6uvb1sVf&X-Amz-Signature=0f3f6d485dd6422e37970a0729ff31b9a8d125a7259b20da91d23aa8a5fb0ed0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRLQZIZX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQD0g8o5CoAGNZ6kZMDD5V%2FQSZiQAsJcWZD%2FWq%2FZaYFN8gIhAMZ4eKmMV%2BJiIY6m2jYzE6OSu8vIYVn45RtW%2BfuBtWYpKv8DCH4QABoMNjM3NDIzMTgzODA1IgwNKnYDS9YIopcrmlAq3APiZBxh2m2figJY9y6o11phOp9%2BtLpjFYvDbmX8kVEASgrd8DXhTLfZX822fT%2FymvEB5WDbvpZpr19FgAonYwT%2BVVI4WyupbGGa6MuyYXbGGjjn7z%2BjG%2FOb74vB%2FoUGE98%2FKBtzKV5F%2FnLUYHx0OzB863cekzjYo9zr3gaAP7dLzUaKELGwSRpnOS4%2FNK1vnm%2Bv3b7jxzHXwEdp4mmFw9KobyXGm6LIGawrxbpsUA3uZ3eERbXR5HG852J%2BpEd%2FGJRlYQw1ETBwplEE7%2B9CJDkO0g8HCN29IHDy8f2T5vTpqKaMwD0687cqhROlZWy21%2FaRn9oq%2F1Yu3qS4NYsXnBBWiEw0y8VY3iOUxZ05N4OEsYvkBpuPXmJ5C59wgu%2BfSRUdr9I%2FgVj9rZtMJe7b%2Fj%2F7sjSt9kVX6OmcugVwzL3cH%2BzfD%2BFG%2Boke%2BX%2Bwk2H5Fo1xh86hyQsDCVDZ06cjgLItrzvCgZWwq6heZIDh6nNyA7ZX%2FNvPEtDk5wN%2BNtPvaMwc8CZLs0fwKB44DBRTV79IyX5fz0jr2MaD75NIw1zBcbCT8u5r2vjsYcIWcfALf9eWlz%2Blrhp6M7oQGi70eZz%2FmzgFVnFGtD2gbDD2YCeCS9LbN3cH3u0tg%2Bl1IjDnpJrEBjqkAQz32FPKYYdBEIFB1Y3OFcJ1iQEDlBvrtzqIoU6Jb3vaxSZwoAKGKCDNMuT3DW%2FCr89eohKvS0XU3e1MkfQUurBJWlKirElSsx5mYakCjhiU31T2tKZoPuuBgIqxUiw9GZFDmnOZvojAdOgzCYUZOXghifPdw%2BgugZJdRK6wvxcytZJkGNuOhD8oT%2B4cKUiMZ8N4bNoxJw4bZcHfI2mZ6uvb1sVf&X-Amz-Signature=47171b74f6fb5f90f75f3def07ce02f219cbe7f4f179968c0563ac790cb3291b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRLQZIZX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQD0g8o5CoAGNZ6kZMDD5V%2FQSZiQAsJcWZD%2FWq%2FZaYFN8gIhAMZ4eKmMV%2BJiIY6m2jYzE6OSu8vIYVn45RtW%2BfuBtWYpKv8DCH4QABoMNjM3NDIzMTgzODA1IgwNKnYDS9YIopcrmlAq3APiZBxh2m2figJY9y6o11phOp9%2BtLpjFYvDbmX8kVEASgrd8DXhTLfZX822fT%2FymvEB5WDbvpZpr19FgAonYwT%2BVVI4WyupbGGa6MuyYXbGGjjn7z%2BjG%2FOb74vB%2FoUGE98%2FKBtzKV5F%2FnLUYHx0OzB863cekzjYo9zr3gaAP7dLzUaKELGwSRpnOS4%2FNK1vnm%2Bv3b7jxzHXwEdp4mmFw9KobyXGm6LIGawrxbpsUA3uZ3eERbXR5HG852J%2BpEd%2FGJRlYQw1ETBwplEE7%2B9CJDkO0g8HCN29IHDy8f2T5vTpqKaMwD0687cqhROlZWy21%2FaRn9oq%2F1Yu3qS4NYsXnBBWiEw0y8VY3iOUxZ05N4OEsYvkBpuPXmJ5C59wgu%2BfSRUdr9I%2FgVj9rZtMJe7b%2Fj%2F7sjSt9kVX6OmcugVwzL3cH%2BzfD%2BFG%2Boke%2BX%2Bwk2H5Fo1xh86hyQsDCVDZ06cjgLItrzvCgZWwq6heZIDh6nNyA7ZX%2FNvPEtDk5wN%2BNtPvaMwc8CZLs0fwKB44DBRTV79IyX5fz0jr2MaD75NIw1zBcbCT8u5r2vjsYcIWcfALf9eWlz%2Blrhp6M7oQGi70eZz%2FmzgFVnFGtD2gbDD2YCeCS9LbN3cH3u0tg%2Bl1IjDnpJrEBjqkAQz32FPKYYdBEIFB1Y3OFcJ1iQEDlBvrtzqIoU6Jb3vaxSZwoAKGKCDNMuT3DW%2FCr89eohKvS0XU3e1MkfQUurBJWlKirElSsx5mYakCjhiU31T2tKZoPuuBgIqxUiw9GZFDmnOZvojAdOgzCYUZOXghifPdw%2BgugZJdRK6wvxcytZJkGNuOhD8oT%2B4cKUiMZ8N4bNoxJw4bZcHfI2mZ6uvb1sVf&X-Amz-Signature=ef15499000ba823bc8c58061e798f536d3e91ec2a1b3543a8bc663e1cc42aff5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA4XPOW7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIDn0zvRlt7jNZUQLIWUilTQYqMCQQpl43ZR2BnLDOlR%2FAiEAlx%2FXjnlMZ%2Fbc4F6zNEGUJHkLFeOYolX8YjJQVtbFHaMq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDP4NeXgNmRNdxfCGWSrcA4aoEO8kAYXI5CRroA%2F8D5mC833emKATor3dumjBgqZgLbeUvEXxcF4cuo9I64PLLKcG2zZ%2B9QX3gHZmitMfD4YdEVJkfhiHcCyYwAOsk27SUOYLCuwO6SWP0WrVnA%2FqD1havC%2FSQ90v25uq1EOiZcqVbfOP60eNcBlx2lfjANFyKFo4cEZCzyYe5cnl4T5m8a6Nw9DKpg1HLrMlqLmzr%2FVcq3gzhk0TBIsiQA1sxiUGrkoqC9B8Oke2xtaXenizNo8vso80yWZOfJEWhs4COB3njAg5C%2Fi3qTab3dqghVXIzJMBqJGU%2FGIDxzNi%2BxBk7UcgWREm9XLSJkDl8l2LDQq7yoE6yaqnqdM%2F2x%2BC77Dt5kEO5lhN4YuDQmgkEmfIbJ2ullYljFsVD1IsqT1Am3EbepK4QlN47Q1nYOj%2BZteMgmlhmxHMdvG3KrQoyWOgN9bR9SyDJm4JU7aGFnl%2Bc%2FRlYtQ75usC6UCai3CM86wlhROSMLQSMs5nPeay6bMo2C5WFniFzzM50zSVV1CzPHYyWYIw1aD%2FGrJsQ52dOrV80W49pDXoxmD55IB7A%2B3xnlUuJ4e%2BcfT1DAjpUH6tc6VFtgQayp%2BwsWP46g1VnAPDLBHStVF1me%2F%2B1huuMJakmsQGOqUBjzt91TrlRoakdp28YLav8x1qbFXzdsnSmPrsz%2BpwPZQDcRqH8Iug9uUEQR7HbBDa6ywhf4IHuEMn5SsOuxp1KQhvKRC8jQCxY6RfmvD32Atw653k3q4Vl5QWIGequXRC0E2EE90Q7RnK7TMRnrP6tRaljmTAE9X6rwxhr0Iouegbakz5ndPdQxp64%2Frud4dXIuTyZVH8BshZQBruT02Zp29yKPg1&X-Amz-Signature=ad1ac7540643c6e1576b009b438b42c76960a4115ace629f3499887e9c05ae76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VOUGMGJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCX14SpTU1cIEYPZ5%2BJOM1rmbpSPN0vi4oLFnpEv9dwIwIhAOFbF5G5KDpm2TIGeH0QJuihi4PfTnw9o%2B3Zf7tr7USPKv8DCH4QABoMNjM3NDIzMTgzODA1Igwb8JKV55qrbaVkOUgq3AMSimrFkJuaRRaPWiM89nicjs7dAPyDno4ip8FbcOq4xOyQgEqF8O7kDaH94sIGkDwH9EqlC9mxUseXJGk%2BX75v31DSAiFN5Ot0pC0dfF9DQmGkDs8shGiNUzGIaZnEtGr43Gy326%2F%2FdWzq4GNPTPW2vq1PK9ZLxWDyQMhbyhMlge%2BgQ3jchHzcm9uGM9jXFy33XWNB%2BIbm2XLrb1oVB6zZJIlpGbaOg7BRnSm9LnK0RESXnZ%2BFJkeBfal1ldmB%2F0d%2FXepmdOEsvwhVud4xb9kP%2BAJbe6Hf1qNfgVBTTp%2B2Du6yRnsM3xJbzmjxrWrykiZariDKAJ7QQGMSFBqQcksPggjcN0fAU3tP3qK%2BhjoUxNRnLgjtUgLeZ1Cb0Av8VUM0U0zavag%2FmyuvUJ1uvI8nNXRe3qcF2hz5fGYvpY0Gy5qyRCtoN4rTJvcIM0d7bskHfS1nXC%2F8MSDG3ni%2FM1z2iCTsCYNl27s6Oq%2F6ZLfFUqRPpLK5IQirwRnnqrQ0n196AE%2FVSkjdFPKyliJmyFW327KQP6nW05SjIZexV9BZdDvQcJgQOwae%2BEA4gpc3UNoOlYW9K5hu3ViDYV2jmhmhGCtEvaUbg2hvHKDrgqN0wuFKA90W1q%2Fuj5P3eDC9o5rEBjqkAc83cH4nuU2CtfsSrJ2PEY9EmpP34T1tPdfokezD%2BI8OktiwyM2vhN1j%2Bq9Kxn3SDI%2BUoYBXfUCN6gzuQ3nZsiQ1GtWU8jDxB3Im5xZQQtgX0qYmKt2kxoKqUY637OyxoufpgYArfkNogLhdIPHmQD70krKjCj%2FcZgp%2FlNL1EPrFF7Pt44jTVsEKHaVU6fKejk8VMe%2FwSOpIg1k5OqznKA2nqdV4&X-Amz-Signature=7309de10f5651c10424440f85290d7d893f4db611268513dad5bcaa6f02546d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRLQZIZX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQD0g8o5CoAGNZ6kZMDD5V%2FQSZiQAsJcWZD%2FWq%2FZaYFN8gIhAMZ4eKmMV%2BJiIY6m2jYzE6OSu8vIYVn45RtW%2BfuBtWYpKv8DCH4QABoMNjM3NDIzMTgzODA1IgwNKnYDS9YIopcrmlAq3APiZBxh2m2figJY9y6o11phOp9%2BtLpjFYvDbmX8kVEASgrd8DXhTLfZX822fT%2FymvEB5WDbvpZpr19FgAonYwT%2BVVI4WyupbGGa6MuyYXbGGjjn7z%2BjG%2FOb74vB%2FoUGE98%2FKBtzKV5F%2FnLUYHx0OzB863cekzjYo9zr3gaAP7dLzUaKELGwSRpnOS4%2FNK1vnm%2Bv3b7jxzHXwEdp4mmFw9KobyXGm6LIGawrxbpsUA3uZ3eERbXR5HG852J%2BpEd%2FGJRlYQw1ETBwplEE7%2B9CJDkO0g8HCN29IHDy8f2T5vTpqKaMwD0687cqhROlZWy21%2FaRn9oq%2F1Yu3qS4NYsXnBBWiEw0y8VY3iOUxZ05N4OEsYvkBpuPXmJ5C59wgu%2BfSRUdr9I%2FgVj9rZtMJe7b%2Fj%2F7sjSt9kVX6OmcugVwzL3cH%2BzfD%2BFG%2Boke%2BX%2Bwk2H5Fo1xh86hyQsDCVDZ06cjgLItrzvCgZWwq6heZIDh6nNyA7ZX%2FNvPEtDk5wN%2BNtPvaMwc8CZLs0fwKB44DBRTV79IyX5fz0jr2MaD75NIw1zBcbCT8u5r2vjsYcIWcfALf9eWlz%2Blrhp6M7oQGi70eZz%2FmzgFVnFGtD2gbDD2YCeCS9LbN3cH3u0tg%2Bl1IjDnpJrEBjqkAQz32FPKYYdBEIFB1Y3OFcJ1iQEDlBvrtzqIoU6Jb3vaxSZwoAKGKCDNMuT3DW%2FCr89eohKvS0XU3e1MkfQUurBJWlKirElSsx5mYakCjhiU31T2tKZoPuuBgIqxUiw9GZFDmnOZvojAdOgzCYUZOXghifPdw%2BgugZJdRK6wvxcytZJkGNuOhD8oT%2B4cKUiMZ8N4bNoxJw4bZcHfI2mZ6uvb1sVf&X-Amz-Signature=bcbe973ca1e6c95366f653ef42e7a74934050239efa0bbbf80a8f3c8c2c5b3ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
