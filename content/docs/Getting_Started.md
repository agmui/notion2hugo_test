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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSS55JUN%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmezX%2FAE8ci%2FsIaPBgc%2FTMOIKalvaxlFzAyDH%2BSlOSpgIhAPfC9ctRckdCswDUtXiXIAtUJ3V52VxPeGK9pYmIkingKv8DCBAQABoMNjM3NDIzMTgzODA1IgydjabDxUbUCQcfOmIq3APnVSYmLiTVMm0R1IYDTAlD5VMJNp8SzF%2FGOS65zzGcLhnP9kz6TbW3Az8Uk54UDcIvw7J%2BTLQkw2HhDwwZ6Yq84ZDe0mtOsH3vUzxOdNcKv1yQB1ZZffCBybgTA2%2FLls6I9hsPhgZSSavtGKengKgFt%2B%2Fx%2Baen14ZakRWpy7jvoulxZNOpmNNUxKp%2BZ6DlvSreKvpYBy1EzNrxltDR4P2cnX81vqeiSGYJRiCd8YHalzv9tIIrgXkWfgkVQMW0uk0ZdTqrEh%2Fh5%2Bom7IAdYzJ03Y%2F6jOgkdSXUHbmJnBU9Y3wUdodkYcT4%2FV1UKiEChPWItS%2FdIYNAWinftTsnKKHitZ1VySGxLuoidkYpVRrkzzQLakM2JZVKGNxU1%2FQfgS00P%2B7yX3yidtsqgZ%2Bd5LYpfWzNjviy2Vgj1KdjSp4jiX02RQskferyh%2F20dVzKf8pR9H7HtsD7vRhgTm8chL3rTanrd9S4UWMApf22DRm3r7Ng4MSnyZtqLusPUr0VWNrLpGdYnuULnNIFE%2B4n07P4DgIBwQ%2FG1RJBav4HtFPMK9qUkAinoJFTdvMw3as9WWy94Lh0va6oONyTHm22E5dTgUlplIkKze0Q%2Brgwq%2BcFw0%2BkaP5KEtT0flz0BTDz4vK%2FBjqkAZ%2FggFaG63ZMCcsHLZu6XtAi5xcakQ8W46%2FQS2uXJoVX1Fs2CWeisNJ41EsG87qEPQ3PyZmd6ggc60AqzfKlRjFb9qpx%2FThnr%2B%2BujMAT2tGQWnlGGXY5APZegImi8fp2iygU50NPD0JTG6lJBB1Xx%2FqUQ5%2BmgBEtprQYsyMHAOYVrO%2FyvmVkDPQUUzAZC3urI81i0cFeG860F03fhiIBXHVgJH9h&X-Amz-Signature=72ee56c82e51ca57c4e549d19360bd8be10ea9f4b5775283a785e6f955266b83&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSS55JUN%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmezX%2FAE8ci%2FsIaPBgc%2FTMOIKalvaxlFzAyDH%2BSlOSpgIhAPfC9ctRckdCswDUtXiXIAtUJ3V52VxPeGK9pYmIkingKv8DCBAQABoMNjM3NDIzMTgzODA1IgydjabDxUbUCQcfOmIq3APnVSYmLiTVMm0R1IYDTAlD5VMJNp8SzF%2FGOS65zzGcLhnP9kz6TbW3Az8Uk54UDcIvw7J%2BTLQkw2HhDwwZ6Yq84ZDe0mtOsH3vUzxOdNcKv1yQB1ZZffCBybgTA2%2FLls6I9hsPhgZSSavtGKengKgFt%2B%2Fx%2Baen14ZakRWpy7jvoulxZNOpmNNUxKp%2BZ6DlvSreKvpYBy1EzNrxltDR4P2cnX81vqeiSGYJRiCd8YHalzv9tIIrgXkWfgkVQMW0uk0ZdTqrEh%2Fh5%2Bom7IAdYzJ03Y%2F6jOgkdSXUHbmJnBU9Y3wUdodkYcT4%2FV1UKiEChPWItS%2FdIYNAWinftTsnKKHitZ1VySGxLuoidkYpVRrkzzQLakM2JZVKGNxU1%2FQfgS00P%2B7yX3yidtsqgZ%2Bd5LYpfWzNjviy2Vgj1KdjSp4jiX02RQskferyh%2F20dVzKf8pR9H7HtsD7vRhgTm8chL3rTanrd9S4UWMApf22DRm3r7Ng4MSnyZtqLusPUr0VWNrLpGdYnuULnNIFE%2B4n07P4DgIBwQ%2FG1RJBav4HtFPMK9qUkAinoJFTdvMw3as9WWy94Lh0va6oONyTHm22E5dTgUlplIkKze0Q%2Brgwq%2BcFw0%2BkaP5KEtT0flz0BTDz4vK%2FBjqkAZ%2FggFaG63ZMCcsHLZu6XtAi5xcakQ8W46%2FQS2uXJoVX1Fs2CWeisNJ41EsG87qEPQ3PyZmd6ggc60AqzfKlRjFb9qpx%2FThnr%2B%2BujMAT2tGQWnlGGXY5APZegImi8fp2iygU50NPD0JTG6lJBB1Xx%2FqUQ5%2BmgBEtprQYsyMHAOYVrO%2FyvmVkDPQUUzAZC3urI81i0cFeG860F03fhiIBXHVgJH9h&X-Amz-Signature=fbfe8b2aeaf2133b685479e9f081e488050ed179bf454cf89a167aeb8ad9d32c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS27N6H3%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T090957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhu1CUg6OxDD%2FdxZMQXJ7EoDXGer8cVsI7wa9ILniVkAiAzvooaOwY%2B%2BUttC8mays96a68v16FyKiRNgROhEa4qbir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMAiHBKX0D0QegJJO8KtwDuhFZnDYWzc5eoIYl9%2BuDyHYSjes2TLEJWvkulLH%2BqejdJSuHoFkfVFSNgIblY6%2Fw3gJ0Yv52jpMQknpthiOsQypZjobpUuqs3jv5WwgfuTCzBbS6wOaK1eqOtbEEDEBqYQ8KxVV9U%2BFhgdfcjjMem0EcHTpR4vBoQ%2BHA1W%2FnsYp8wrp8i1%2B2VYjEH%2BojmBbnpMTHVggOTkmCfmMqSvx%2BY%2BbRiVlnlT54XhimgMTMNMf1Z1Fyya3mtjMO2y3qHTafTxXjODFwq5%2B3l0odjIYKm0UQxHtzCuIaklWLU4fLCKYEYTPSFBlOl9JkNseVxlbVxkDzbS3OHND5tBIhG%2Fqs4hX4TuR16zSryvsSlRnKdgEuI8XzTk4LkwGqGPXVns1doK9UyFNHGDkxZIszQacaECKXzOXDjzqO98o9EsGfxrKO4v85iq2FF%2BOJ20pi%2Bs591uICpKzEAiinU30iy7ZpJS6rMEr7430qeM2KeZHDCTkJe3P1PjMoGFXopaoNwbMcwNDS8q6509B55PVld270F1uCAoZLeY1OY%2FXQQWlDBjiicMhaUdxtiAK5z4Sys6QQ%2FRaVxN0xU%2FzwbPspmnVBvhJVObya84ib11jKdKLXN0vvBlCJ%2Fh7Hroox7%2F4wjOPyvwY6pgG2hQ%2BR9kCqG9xzDOdhGOjsTG5V25tUMTiChFbcPBclKUwI8IpH%2FTXzJRRobGQfkbhTiHH5VraLTTesNXfm4tMk%2BrLQf4jr7wxrqcTz5Eoz34QUsKcVzSBoo6v1TkzyNOrh4jvqNNh5IresjD8mBAba8ssdhI%2B4TIB7ic0orYG3kvIt94Cs45mT7IXj%2BFnP5y%2BIIqxMysZAFrNIC7NCrqh1QAXb7qsC&X-Amz-Signature=04bf8507526638d21454853a45e778eb69a7fad1b7faddf07b0b2844e74698f4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M6LTSLG%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T090958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV%2BDrDpKIqhhWSO8csy3OmvbKedclAvpb6mI%2BcCNqq%2FAIgBgI82psWlOw79%2B4DZqkOu%2FVBzEHjVdBG%2BbXjB%2BoTpUsq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDNTMDy4fxS8F71M4KircAzao%2BUYGw8sZ11ryzyIA%2BhWn%2BC%2BBNA45MBr0IcAY%2FQkp5SV0eem9FCqrDvKPPb%2Bk6lMPH155%2FA7DtVhphAX%2BhTFoVz45BTTI7i%2BHgU%2FcVG9AvHR%2BzLe%2Bd%2BvqxRzCGen2%2BdFUEtdFYq0YcsEm%2FNF%2BvU6knlHqDgdtC4PdzfXCWAUXlKMUOtAVRFQS4l8u4%2Fg3Qedq6HBvl8NpMiQA85IAp0v6pVqnM72g86PbGIw%2Fz5bEDS4SkKzLtdgpzDcNTEe46%2BaP3SpFWbdpmoZY%2FCZYfjMzvPw80gr1FEqTs6RhjotxQN%2Fl1f7%2FkCfDwLctANi6FitilZUR4jDddktG74OpYTHofbV1haJOrIN7BEg%2BLoEX2xFq4NgLIl2hh6EbyLDwfkyhohmF6qVtu0O5jmfxGDFqPPm9U0JS0TfbGIJKk8%2BLvtBnONyRmBKnhS%2Fn0amd52w78pMup%2Bi%2FEo%2Bm6PUrO8nZweJT0W%2Fc4NcDjPUJgqZG3W10DAVcywj5Y7tEF3yMNSReNbrxPzHBHv%2BRsNYwEx2HBHDG1dGQttrP9v0fwUZMla1zsQr3V3Js88jqK0BU6vMT6XRPT%2B%2B2MgbeHqBqF%2FdimIjSf%2B%2BAOiqoIW04d9mI2naVdjxphFtRXFmGMNPj8r8GOqUBH1gDg6hR8DK2hbO3J8ki3rKPwLSAqDumswOiaxeAX1b9V7Colr1YTHUg5OfXXNa7NwD3XvS7n6H9FMUrkMH7FgL5Cuq3tIsJPZ3V0FB%2FdLlWhcpK%2Fc0b5rnCer83D8nEbyIz1ulHCgZUQSteApP51eYPtYW2xOLCJtLpqeP2ZqRfq42pAjKNwMPjuevF88%2FfHkIQ51vT%2FfKQSgumuqb8Vjz4w5GC&X-Amz-Signature=9d94ac54f13d25d1de4a2b48e0a07e7a5e0097a1959c7e0f5843f2c88a16f9b7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSS55JUN%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmezX%2FAE8ci%2FsIaPBgc%2FTMOIKalvaxlFzAyDH%2BSlOSpgIhAPfC9ctRckdCswDUtXiXIAtUJ3V52VxPeGK9pYmIkingKv8DCBAQABoMNjM3NDIzMTgzODA1IgydjabDxUbUCQcfOmIq3APnVSYmLiTVMm0R1IYDTAlD5VMJNp8SzF%2FGOS65zzGcLhnP9kz6TbW3Az8Uk54UDcIvw7J%2BTLQkw2HhDwwZ6Yq84ZDe0mtOsH3vUzxOdNcKv1yQB1ZZffCBybgTA2%2FLls6I9hsPhgZSSavtGKengKgFt%2B%2Fx%2Baen14ZakRWpy7jvoulxZNOpmNNUxKp%2BZ6DlvSreKvpYBy1EzNrxltDR4P2cnX81vqeiSGYJRiCd8YHalzv9tIIrgXkWfgkVQMW0uk0ZdTqrEh%2Fh5%2Bom7IAdYzJ03Y%2F6jOgkdSXUHbmJnBU9Y3wUdodkYcT4%2FV1UKiEChPWItS%2FdIYNAWinftTsnKKHitZ1VySGxLuoidkYpVRrkzzQLakM2JZVKGNxU1%2FQfgS00P%2B7yX3yidtsqgZ%2Bd5LYpfWzNjviy2Vgj1KdjSp4jiX02RQskferyh%2F20dVzKf8pR9H7HtsD7vRhgTm8chL3rTanrd9S4UWMApf22DRm3r7Ng4MSnyZtqLusPUr0VWNrLpGdYnuULnNIFE%2B4n07P4DgIBwQ%2FG1RJBav4HtFPMK9qUkAinoJFTdvMw3as9WWy94Lh0va6oONyTHm22E5dTgUlplIkKze0Q%2Brgwq%2BcFw0%2BkaP5KEtT0flz0BTDz4vK%2FBjqkAZ%2FggFaG63ZMCcsHLZu6XtAi5xcakQ8W46%2FQS2uXJoVX1Fs2CWeisNJ41EsG87qEPQ3PyZmd6ggc60AqzfKlRjFb9qpx%2FThnr%2B%2BujMAT2tGQWnlGGXY5APZegImi8fp2iygU50NPD0JTG6lJBB1Xx%2FqUQ5%2BmgBEtprQYsyMHAOYVrO%2FyvmVkDPQUUzAZC3urI81i0cFeG860F03fhiIBXHVgJH9h&X-Amz-Signature=46924def5898d43cfb12cb10eff1e8ddf7ccc186aa100f424612552e06a2f12b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
