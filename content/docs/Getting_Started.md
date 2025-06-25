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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW5LLNY4%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCq%2BJvbhxBaGsubSRTtxk1G29XA573swOu9PiXoHGJwmwIhANmc9m8%2BPC5ziJj9drA66i3JP0QNA2lIu%2BHD5zjKvtzXKv8DCDsQABoMNjM3NDIzMTgzODA1Igz3i%2FPoIMRAVFdoAaQq3AMQU3mSLja5XJZUhMAMKZaoMWJ05agQW7uTRCUHjoz2kInUwU9ZtOj6Zr%2BxV7QYTl7mslhHB2DOCr9xkj5ZvoKSyLTRhT4vhOIqX12t%2F9ef0H8tXnam5L2QJs%2BeoKmujmUcogvFD%2BlRLgGs8XJn4YEm1xQ08OJ0jZ48xPZp6BTh2jQbIR5l3odxRNgf%2BUN4awRL6U%2BVeKl7Q13DrpFh7paDUW9wHKtAPwsMPnZeGyYwe1fxE7Eoz8t%2Bpb8jhY3WijspeoKXF2PlcTvedxGUd3jgVUZi7b%2BP7O8%2FhT8v%2BzR54RRc%2BQTpDCTjNG2%2FmTcT%2Fr1MZAPDaVqprlAltAeBIKVjpBLlAOff3%2BDiWLrkKLZB%2FxWQH%2FGa7DhPMa79KQnqgyJxVkn1Gc%2BqrD2feS9TyC3asQWxYd00Hj0XMnkL2oSHMbsUNf9kp%2B%2F4UubTG6YhwPg4ZWSAPIbgFbxehpBNecBMZG2wchFYV%2F%2BxtyBvfbFX9dtdRE27Ff0lftMH%2FfIFHLwke%2BK8OZJJaHApn5VfHb39JHqVlxEOcb0X%2FC%2F7r0WzWuS6EgZ2KF%2Bc5cVB2a1GJ%2FjnbFmteBRdcPeO5epmx0t8b3PpcAoIjt2Dotsb11HSbyToh%2B5jhABwDQquXjDCqu3CBjqkAZRTWY41glqby8oOUJvtO5r2B8be73xcR5wBegZRYWIfJTUQRaENCX7q4GdET8nTC2f2D0v7dDYHojuG9x73nfNQJFZpAd1X3DRmkRIynL%2BXacwE0G7na3bmswp6XdwFtxM4HsDU3MjeeZV68UTWoFYTrSXE9lugyoC69N%2BnJERe4LgyCaSY2jo%2Ffnl6oRk69YFwbYQujU6Zm2xmP44VaI%2BlgZY4&X-Amz-Signature=7bba94084c919dba93119f683ffbc344c50cd7cc0c6fdfbcadaf4024f5116334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW5LLNY4%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCq%2BJvbhxBaGsubSRTtxk1G29XA573swOu9PiXoHGJwmwIhANmc9m8%2BPC5ziJj9drA66i3JP0QNA2lIu%2BHD5zjKvtzXKv8DCDsQABoMNjM3NDIzMTgzODA1Igz3i%2FPoIMRAVFdoAaQq3AMQU3mSLja5XJZUhMAMKZaoMWJ05agQW7uTRCUHjoz2kInUwU9ZtOj6Zr%2BxV7QYTl7mslhHB2DOCr9xkj5ZvoKSyLTRhT4vhOIqX12t%2F9ef0H8tXnam5L2QJs%2BeoKmujmUcogvFD%2BlRLgGs8XJn4YEm1xQ08OJ0jZ48xPZp6BTh2jQbIR5l3odxRNgf%2BUN4awRL6U%2BVeKl7Q13DrpFh7paDUW9wHKtAPwsMPnZeGyYwe1fxE7Eoz8t%2Bpb8jhY3WijspeoKXF2PlcTvedxGUd3jgVUZi7b%2BP7O8%2FhT8v%2BzR54RRc%2BQTpDCTjNG2%2FmTcT%2Fr1MZAPDaVqprlAltAeBIKVjpBLlAOff3%2BDiWLrkKLZB%2FxWQH%2FGa7DhPMa79KQnqgyJxVkn1Gc%2BqrD2feS9TyC3asQWxYd00Hj0XMnkL2oSHMbsUNf9kp%2B%2F4UubTG6YhwPg4ZWSAPIbgFbxehpBNecBMZG2wchFYV%2F%2BxtyBvfbFX9dtdRE27Ff0lftMH%2FfIFHLwke%2BK8OZJJaHApn5VfHb39JHqVlxEOcb0X%2FC%2F7r0WzWuS6EgZ2KF%2Bc5cVB2a1GJ%2FjnbFmteBRdcPeO5epmx0t8b3PpcAoIjt2Dotsb11HSbyToh%2B5jhABwDQquXjDCqu3CBjqkAZRTWY41glqby8oOUJvtO5r2B8be73xcR5wBegZRYWIfJTUQRaENCX7q4GdET8nTC2f2D0v7dDYHojuG9x73nfNQJFZpAd1X3DRmkRIynL%2BXacwE0G7na3bmswp6XdwFtxM4HsDU3MjeeZV68UTWoFYTrSXE9lugyoC69N%2BnJERe4LgyCaSY2jo%2Ffnl6oRk69YFwbYQujU6Zm2xmP44VaI%2BlgZY4&X-Amz-Signature=2ccd2b8ff7d4e859edbbc3e3599cecb4cb0674487749f18e6325a12b1ef3684e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW5LLNY4%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCq%2BJvbhxBaGsubSRTtxk1G29XA573swOu9PiXoHGJwmwIhANmc9m8%2BPC5ziJj9drA66i3JP0QNA2lIu%2BHD5zjKvtzXKv8DCDsQABoMNjM3NDIzMTgzODA1Igz3i%2FPoIMRAVFdoAaQq3AMQU3mSLja5XJZUhMAMKZaoMWJ05agQW7uTRCUHjoz2kInUwU9ZtOj6Zr%2BxV7QYTl7mslhHB2DOCr9xkj5ZvoKSyLTRhT4vhOIqX12t%2F9ef0H8tXnam5L2QJs%2BeoKmujmUcogvFD%2BlRLgGs8XJn4YEm1xQ08OJ0jZ48xPZp6BTh2jQbIR5l3odxRNgf%2BUN4awRL6U%2BVeKl7Q13DrpFh7paDUW9wHKtAPwsMPnZeGyYwe1fxE7Eoz8t%2Bpb8jhY3WijspeoKXF2PlcTvedxGUd3jgVUZi7b%2BP7O8%2FhT8v%2BzR54RRc%2BQTpDCTjNG2%2FmTcT%2Fr1MZAPDaVqprlAltAeBIKVjpBLlAOff3%2BDiWLrkKLZB%2FxWQH%2FGa7DhPMa79KQnqgyJxVkn1Gc%2BqrD2feS9TyC3asQWxYd00Hj0XMnkL2oSHMbsUNf9kp%2B%2F4UubTG6YhwPg4ZWSAPIbgFbxehpBNecBMZG2wchFYV%2F%2BxtyBvfbFX9dtdRE27Ff0lftMH%2FfIFHLwke%2BK8OZJJaHApn5VfHb39JHqVlxEOcb0X%2FC%2F7r0WzWuS6EgZ2KF%2Bc5cVB2a1GJ%2FjnbFmteBRdcPeO5epmx0t8b3PpcAoIjt2Dotsb11HSbyToh%2B5jhABwDQquXjDCqu3CBjqkAZRTWY41glqby8oOUJvtO5r2B8be73xcR5wBegZRYWIfJTUQRaENCX7q4GdET8nTC2f2D0v7dDYHojuG9x73nfNQJFZpAd1X3DRmkRIynL%2BXacwE0G7na3bmswp6XdwFtxM4HsDU3MjeeZV68UTWoFYTrSXE9lugyoC69N%2BnJERe4LgyCaSY2jo%2Ffnl6oRk69YFwbYQujU6Zm2xmP44VaI%2BlgZY4&X-Amz-Signature=b2b8c210dfebd0a40975deab96d24e3078cab07b5c6e7185613d6d9be5c9ff56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UN7GSNV%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDcFMUa%2BflEv0pt5vUp9L1lFXTLjoP1nhzPUPA%2Fu3%2B04QIgO2yIWajdoh3gxH4jbLyuPwtrXP%2B%2FGxXebHVTgQiNtPwq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDFRxZA89x%2B%2BPf67BtSrcA27OCPsP4gIm4GQE%2BlDzIgBv4Msi2dl%2FCDjuCpdRqf6t0yaG%2FX872%2FD92fBcvSjRyWBw9hlN0ldNEFs5gKSKqOK4tW%2BF9S2mNIKgMu7suk0oXm9MWbBK80V%2B9ioQV62osMWaR5JoeCJWTVnQquFUCxGKhKQVZU4dl1ZlW1%2Fwwj%2FstVa%2FGHc5k48qqFqlAMsTFBSnhxottH8ood9Z72jRofAbE4cIYu0vvJA0MPrRGnVLC3Paxi4%2F%2FrsJhQW4V7o0%2F%2FPskSfppwFuVB5fJTy5x%2FYG7XQ6mFwn9gkJ76wDtB8rMZL%2B3JzlcFMoWXUDFVsbdQNI1GWaAMo35QvFadTuXG4kiB%2B4huhUQoAgUAa3kaEOMDEHqIO1ebm6loW8wH6Qtw%2BzoQ8hLomC0C0W0FkXh4n5T%2B4JfT%2FF%2BBbpNOmPO%2FacuNJ8RbIdDGKxgIbxWteofLm1ejBGxlz92cXol6v4jYiog2%2BWXvrNprtuHPwghwO8%2Fmj9tJsQVyHrOmEW34A7Ps%2BZN4KcZDS8hsEJz2%2B7Cw1Colr4UblRs8U9ScIF6PC4PYtNnlvTH3ajI57SyjftCL67SPpe9Gq6Wdg4mmwdu4yhuQoRFi4XOPPYKS2yZAFkOB%2BZmCmyx08BJaF3MKiW7cIGOqUBp4yn6RjewduZp0FMIlzdIiSBqmiCDWUFVCJdoevDvBXxtp4vwABlJ2OaLtGSbxzqXeQd%2BB%2B5Hj02LGgsVVFlJb%2Ba1tbwALaA%2BuhcL08CTJQXwwW7zfITkkT8xLCYghJ9WmnA8xmjldTBSqiJ6qo8wSJxyyt%2FJEkvEe10kxazUgSPdlnRve6vEdcsI5uv0RwW3Mo%2FDGAb4gaW0uOiUSo7Iz00yXiF&X-Amz-Signature=d60ac0f371c2c76bf3c4ba27ea57cc546d72731b839e5a8c2280687d59dfa772&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CJ3J4SV%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCrF9yJRqNkcrOfTJf974o7SdwHVMmXd5Vg1rB60MwLTwIhAN26YSldUqguot%2FUNu6l%2FKEiQ9nAMVpr9ZFmZo40OJC1Kv8DCDwQABoMNjM3NDIzMTgzODA1IgwHI62VO9NtaJM%2BkWMq3APp3GurXRyNltOmIJWvSxw%2B1FANp5n9o1as6A1q4dgiNitBpA7fBi4kZ5URtx9AxymC%2Blo5fnAwu4zcmObuSvA56YSbkwHwSh2GgkpIzGguykKC9wP4x4%2FfHoZbccENgYbfoZcmox9obmo%2Fn%2Bu593rkBYgvhha1DP3j3KBsvFgBWt5%2BbHLc0LIY%2FlFS3kFC4sX6fPWgnoHpxlkIoXDI26ga3pu9zi9uBdAadc0FGDXHwu6VhC6ubdwGubxJzjLXpmStcOM6Wq2LT9bgbUGPmEnScEY9ySoAssp5dOUelzQSXntzqJ7aasG1fjgAk4wKWyVBkvmcHaFEcE4Q0i6jXuZU2kaELWaYdp7XtJew9%2F1OIyLh3TAyIg1O62D%2FTZ75GVJpMVW55Elh4veZnzwjgOQH%2Bv7eJf%2BGt65DuAYLpu%2BDIt7sLmzL%2F7X6U%2BSpC4yFEbljFxHc5bV3mcnDrlCtXDJD04TJEschrM8gkBEkhTjCzkbxu9mYg4X1chGPC3guLoATJHWpHfvt3z7QGE2Hxdw8PTW9jI%2BPVkRDLUAyu0ZgjHDnx9H970o%2FzX1%2FZqmfrx%2BW8mkhdWKdBXLo1c8DwN%2FJmAklv4m%2FZCHZqA9zapAhvol7TC%2Bh26%2F%2FujTZrjClwu3CBjqkAXPDNIOkXW%2FsZZ5sKFjV24kw59bc5JA%2Bh3fuAWjKT2BTucOVPeYJ0%2BgHTC7FqQmgIn3SR2s3G%2FeQmOBF%2FkmNH2MWJ6PnoRMhOdMVugNtTDz20YqK%2FEVXVOQHKy4X0r6kxLh5j24GyjdO0CzMret%2BqfdKfRBqjoEgjC9BBNhPImXzuqOQt%2FkEBidzir2kw8Qbr62sLpGZwHfRUzxbe4esw%2FhR3z2q&X-Amz-Signature=808ea95dcce0cb564af2a5d98190111c348782781951756abfeab6faad00e3a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW5LLNY4%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCq%2BJvbhxBaGsubSRTtxk1G29XA573swOu9PiXoHGJwmwIhANmc9m8%2BPC5ziJj9drA66i3JP0QNA2lIu%2BHD5zjKvtzXKv8DCDsQABoMNjM3NDIzMTgzODA1Igz3i%2FPoIMRAVFdoAaQq3AMQU3mSLja5XJZUhMAMKZaoMWJ05agQW7uTRCUHjoz2kInUwU9ZtOj6Zr%2BxV7QYTl7mslhHB2DOCr9xkj5ZvoKSyLTRhT4vhOIqX12t%2F9ef0H8tXnam5L2QJs%2BeoKmujmUcogvFD%2BlRLgGs8XJn4YEm1xQ08OJ0jZ48xPZp6BTh2jQbIR5l3odxRNgf%2BUN4awRL6U%2BVeKl7Q13DrpFh7paDUW9wHKtAPwsMPnZeGyYwe1fxE7Eoz8t%2Bpb8jhY3WijspeoKXF2PlcTvedxGUd3jgVUZi7b%2BP7O8%2FhT8v%2BzR54RRc%2BQTpDCTjNG2%2FmTcT%2Fr1MZAPDaVqprlAltAeBIKVjpBLlAOff3%2BDiWLrkKLZB%2FxWQH%2FGa7DhPMa79KQnqgyJxVkn1Gc%2BqrD2feS9TyC3asQWxYd00Hj0XMnkL2oSHMbsUNf9kp%2B%2F4UubTG6YhwPg4ZWSAPIbgFbxehpBNecBMZG2wchFYV%2F%2BxtyBvfbFX9dtdRE27Ff0lftMH%2FfIFHLwke%2BK8OZJJaHApn5VfHb39JHqVlxEOcb0X%2FC%2F7r0WzWuS6EgZ2KF%2Bc5cVB2a1GJ%2FjnbFmteBRdcPeO5epmx0t8b3PpcAoIjt2Dotsb11HSbyToh%2B5jhABwDQquXjDCqu3CBjqkAZRTWY41glqby8oOUJvtO5r2B8be73xcR5wBegZRYWIfJTUQRaENCX7q4GdET8nTC2f2D0v7dDYHojuG9x73nfNQJFZpAd1X3DRmkRIynL%2BXacwE0G7na3bmswp6XdwFtxM4HsDU3MjeeZV68UTWoFYTrSXE9lugyoC69N%2BnJERe4LgyCaSY2jo%2Ffnl6oRk69YFwbYQujU6Zm2xmP44VaI%2BlgZY4&X-Amz-Signature=28250a5708a797607e1b2e88a3c316336749522d69760391be5df7bf2b9a0633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
