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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4QTS7QC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJaNtzb3ZEiXcGJmD%2BxlAF%2FczPwo6trTJZD4C%2FssPMhAiEApBb%2BOeoUTRVMnSbBVRx2OW2VynYD6W3V1q5wWhhlY%2BoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeNRpa4OXbYZTk8%2BCrcAzJT8aXhWvA%2FvJYZbkRCZDgXITnBDCQ6WD3ixVJ47HwY8%2F5QIhSeU3G%2FGgOsmNZpCeF4sJ1jyvbKlbVBIc6R133P2UuYEjDBL4VQlYtI2EoV4dBDT45ejqSJyio2yXV1y1luZFXm4Yjnq826yJrnFKQWF0XPFAnOp%2FrQD%2Fh%2B%2FTYLZMjO2ywqmnKZbL5UNt0iaspFdwVWvsiin36SMULCl4vhqvL2YBQ0oFmL0qzsIA94C0i%2BxsUQ7s%2Bis0fZ4CiJsArKI7P%2F%2BwcgMBJ3%2FyDrIS0WTbDUrpZmLHL4FXb%2B9w6jDe7CprLuPlOV49VVnDJXcHENa5mDVV%2Foo1OuyS04Eys%2FnQbtX7FFD9SwP4UKKlV43QKbMzTztLubbRQ3kVk9o4CEliBxSsKgmSzjnkyxz6rKkTrXhH9xbq9nzLKNcMHyiBD5%2FT9u2REaHCAnSPA23Q%2FKMS9UQI7TOXehKRKUtCWcnfZmXq4l5eqyLvrk96KxQCGOUCeap%2Bylac%2BDZ0OfSzl3SVDtRm15VYZbdyulE9M4RPpiUt62MMfX4DWplnn0WtcWD77ggc7RfgDpezEBjGbJZ%2Fa%2BcszDEowNVdLqODObZBorcQjGY2xyGn9%2F5rh9gb2Bwo4qCv81Vb8nMNXVs8QGOqUB8wBzEjyAx6b3kPIgKxeSQkda6N4RBYVYqDRVXG2RLA6YlJJV%2B6ybvV6Dzjv2%2FBlix6g5ZD%2BMQ9ZYfWBtWdvvv1A%2BEHhg99MjOrrrU87xD0ZNXLJ9qP8RoAmTBErgQ2wgSyBmje%2FNcNstRadx3Hbw1uciQ2D2lLIu6kiL5FXGQlWWKNVM7ItQi77fIBDQVacwcmKIOt2J7r7p%2Bf3L7mgCZjtF8jfs&X-Amz-Signature=103dcd92f301385f57571c538df4be46374fdecbde39d7680c60e1f1049e3434&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4QTS7QC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJaNtzb3ZEiXcGJmD%2BxlAF%2FczPwo6trTJZD4C%2FssPMhAiEApBb%2BOeoUTRVMnSbBVRx2OW2VynYD6W3V1q5wWhhlY%2BoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeNRpa4OXbYZTk8%2BCrcAzJT8aXhWvA%2FvJYZbkRCZDgXITnBDCQ6WD3ixVJ47HwY8%2F5QIhSeU3G%2FGgOsmNZpCeF4sJ1jyvbKlbVBIc6R133P2UuYEjDBL4VQlYtI2EoV4dBDT45ejqSJyio2yXV1y1luZFXm4Yjnq826yJrnFKQWF0XPFAnOp%2FrQD%2Fh%2B%2FTYLZMjO2ywqmnKZbL5UNt0iaspFdwVWvsiin36SMULCl4vhqvL2YBQ0oFmL0qzsIA94C0i%2BxsUQ7s%2Bis0fZ4CiJsArKI7P%2F%2BwcgMBJ3%2FyDrIS0WTbDUrpZmLHL4FXb%2B9w6jDe7CprLuPlOV49VVnDJXcHENa5mDVV%2Foo1OuyS04Eys%2FnQbtX7FFD9SwP4UKKlV43QKbMzTztLubbRQ3kVk9o4CEliBxSsKgmSzjnkyxz6rKkTrXhH9xbq9nzLKNcMHyiBD5%2FT9u2REaHCAnSPA23Q%2FKMS9UQI7TOXehKRKUtCWcnfZmXq4l5eqyLvrk96KxQCGOUCeap%2Bylac%2BDZ0OfSzl3SVDtRm15VYZbdyulE9M4RPpiUt62MMfX4DWplnn0WtcWD77ggc7RfgDpezEBjGbJZ%2Fa%2BcszDEowNVdLqODObZBorcQjGY2xyGn9%2F5rh9gb2Bwo4qCv81Vb8nMNXVs8QGOqUB8wBzEjyAx6b3kPIgKxeSQkda6N4RBYVYqDRVXG2RLA6YlJJV%2B6ybvV6Dzjv2%2FBlix6g5ZD%2BMQ9ZYfWBtWdvvv1A%2BEHhg99MjOrrrU87xD0ZNXLJ9qP8RoAmTBErgQ2wgSyBmje%2FNcNstRadx3Hbw1uciQ2D2lLIu6kiL5FXGQlWWKNVM7ItQi77fIBDQVacwcmKIOt2J7r7p%2Bf3L7mgCZjtF8jfs&X-Amz-Signature=414208094dd5dd62da112ef32a4bc8287f8d7c0e82ff0647f31e9cfb5922c29f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4QTS7QC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJaNtzb3ZEiXcGJmD%2BxlAF%2FczPwo6trTJZD4C%2FssPMhAiEApBb%2BOeoUTRVMnSbBVRx2OW2VynYD6W3V1q5wWhhlY%2BoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeNRpa4OXbYZTk8%2BCrcAzJT8aXhWvA%2FvJYZbkRCZDgXITnBDCQ6WD3ixVJ47HwY8%2F5QIhSeU3G%2FGgOsmNZpCeF4sJ1jyvbKlbVBIc6R133P2UuYEjDBL4VQlYtI2EoV4dBDT45ejqSJyio2yXV1y1luZFXm4Yjnq826yJrnFKQWF0XPFAnOp%2FrQD%2Fh%2B%2FTYLZMjO2ywqmnKZbL5UNt0iaspFdwVWvsiin36SMULCl4vhqvL2YBQ0oFmL0qzsIA94C0i%2BxsUQ7s%2Bis0fZ4CiJsArKI7P%2F%2BwcgMBJ3%2FyDrIS0WTbDUrpZmLHL4FXb%2B9w6jDe7CprLuPlOV49VVnDJXcHENa5mDVV%2Foo1OuyS04Eys%2FnQbtX7FFD9SwP4UKKlV43QKbMzTztLubbRQ3kVk9o4CEliBxSsKgmSzjnkyxz6rKkTrXhH9xbq9nzLKNcMHyiBD5%2FT9u2REaHCAnSPA23Q%2FKMS9UQI7TOXehKRKUtCWcnfZmXq4l5eqyLvrk96KxQCGOUCeap%2Bylac%2BDZ0OfSzl3SVDtRm15VYZbdyulE9M4RPpiUt62MMfX4DWplnn0WtcWD77ggc7RfgDpezEBjGbJZ%2Fa%2BcszDEowNVdLqODObZBorcQjGY2xyGn9%2F5rh9gb2Bwo4qCv81Vb8nMNXVs8QGOqUB8wBzEjyAx6b3kPIgKxeSQkda6N4RBYVYqDRVXG2RLA6YlJJV%2B6ybvV6Dzjv2%2FBlix6g5ZD%2BMQ9ZYfWBtWdvvv1A%2BEHhg99MjOrrrU87xD0ZNXLJ9qP8RoAmTBErgQ2wgSyBmje%2FNcNstRadx3Hbw1uciQ2D2lLIu6kiL5FXGQlWWKNVM7ItQi77fIBDQVacwcmKIOt2J7r7p%2Bf3L7mgCZjtF8jfs&X-Amz-Signature=ea7aab1ee14440a00f36ae5873b3f4404427571ec451171324cb24ae76752311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDAEFTSY%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGL509xQIhGCYpy4b9bKX7ZG54AdgogdeHKp7poR0UekAiEAoLxUBW0s3Aq8YLzX9dateC2S9jcXA7OExVTSkLDf4JYqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAqJzGtrjJ07%2BkDpSrcAxqkAWYlPStLxxXRDDJmJIXvFGlhaJhQqWn0f1TUoXj5Y9YokKG3oCiYj%2F%2BKeT5GulZu8kQATeEVTYv6ewDyRv9jDe%2BWug6QcNw3Xbl0hU8V4fFloLT2SmRM1RTKHJcEymB3GWELErOfwEIVMgBRQ0A55J8xPGD2GhOn2%2Fkx0LWmTZxkcMPR4Xs8snUp98Ujs17sFDXJ3tF6hYf8JCFUshzAcrMwUxOx4aZIVQP5XTZSClF9iFjxdxk%2FFnE8niVrjNL5qTNHMB%2BsIKjqKtlPEx9tsATMukUk5kP0cfx8HEgk60YAVo2XPACgvCInqJsXYLplHUl%2FJRLnOV4iFZvrXudyutwXW7cJtV9ghroYM5d4cXtMKm4moJFprU10yWEHFFYhmcVVRp2D7HkYmantHtoYHSDFfGx2SII7Vs3RCMJ6nQoS%2FEFy%2BhcSXz6OVzejZ4xJDo9TDcdhXzp7FMhWLkuoZqVgPkBzMvVgXWuFXylSSuCh7AmMHFt%2FO%2B6%2BQ4SlimgbfWhkMFoINPjFEgAhQTRfp23bht6yNMsdcm4N96HWYULfonn8Q9SRL9%2BUoNF9Foyt72UqetGHthez5tvDQuEfiVMX70ypTOSNRwKTzqrbEH6YJO%2BqRT%2FwCWh0MPvUs8QGOqUBvSFfm0%2BHPDCgK0gqM867jlG9hmhzhobfFwQObnSNInX7isFKnTkaeSXlslkGccV4LuhimAS6Yv87Ly2DDMyGhvdV51oL7SKYS1OKZHY2MRPixAuSe%2FKufx%2FTundRZIogPII%2B4y%2FS5BAVvaMjDYlQ5CSJp8yWOv2Bt6U4hMvPIUXrBu8jQ5VB8L%2B7zeq%2B7tat7RbewhSzwJh4x0XDnSHzKpoKUob%2B&X-Amz-Signature=f46764be7fc2c543a6996b28ec74f4d53724b32df7ee04ac3cf593f56f3e6a57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466553UQ7UU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEVX7a8LOppMSk3IU%2BO6wgeAX0FWGOxbLscNJb0cy8qAiBIW7EYfSeClXI7s8aGCdukVnxDMbvvK%2FYkdxqpkFxa%2BiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLzZN8CmUHZ4V2fk9KtwDZbAMGp4GCG5VDcE9w4GFtUIfJQkfSDphCIx7dsa8R0%2BX%2BNQ4xNc7xTF2K0oohyGfmiK0VJc180PH1Kf9asDnsztT%2BS2JafiKMjQNOUkVs%2BvIviUH4hnbyiFBw0gZA8YkxpueA9KDyhSrKPzqW5PyaoARP5Qx%2BJvGJVEgG4gCbTfG4i1UA7V%2BWtrjteWZjoRTgC%2FI5M1w2%2FtctdO23nN6PqlX55CtSctAHkBUUThgfGIzE703Q3BLOQgf1qFAoCqdJ%2B%2BZ%2FO1MV2TO4Xu4U0ciuDsdnLUHXlEZWF53dQU4ZWcu2CKQgvor5rzvatSfMez%2Bo7p3Lj8cAPYv59GESaEneDjGXSEERksESW4EYMVoKJcXcVTbzhX7BGVtf6jBPaLqc16qaVFY6CInF70VH8AhX8o%2BRb32RjzdBzT5jPRavh4EhpN1tL%2BzIRl0v8duR9kmpQ6L22XoYHfgSygC7H7PYrqXYoQfpx7oo%2FrSzeoF8CLDVztjs448QX6Up%2FGsRxyfwbUN37T4t%2FWBmZFvUHiPAVqyCvS%2FUJFasB41j0u64qVP2GtreaqpgeX0Tq0SaCoOjZqI6carfHWdR16RG6YIJv2R4oYR9eSN14MHYTimyE2cX4jG9zsbyVNxjPUw7NWzxAY6pgGH%2BJ8cROnQoxq2DtPpAt6tAqzhuKLu%2FMFu3sxkDQqsOZOw4cT0x40Gd8FcMBmy2aHXdjE78LbCNYqUDXkZ4L9Nf2YD8DKRcYVHI1CyLzoimrvyK7Vnm4e03nXZ5rtaZmsKI9eyLFM%2BQnG074Bo%2FFnJeUv3VsaOxahvftKE%2FCO08Lwi5yoNxC7JOwsAOd0lbEt%2FBI%2FRbCOkZRGG2JYsMMeMsIEjRNKs&X-Amz-Signature=cc0c8a9e354ace4ffefab3f44087a08348ceb5a4fcec8d404bc52370ecc07a1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4QTS7QC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJaNtzb3ZEiXcGJmD%2BxlAF%2FczPwo6trTJZD4C%2FssPMhAiEApBb%2BOeoUTRVMnSbBVRx2OW2VynYD6W3V1q5wWhhlY%2BoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeNRpa4OXbYZTk8%2BCrcAzJT8aXhWvA%2FvJYZbkRCZDgXITnBDCQ6WD3ixVJ47HwY8%2F5QIhSeU3G%2FGgOsmNZpCeF4sJ1jyvbKlbVBIc6R133P2UuYEjDBL4VQlYtI2EoV4dBDT45ejqSJyio2yXV1y1luZFXm4Yjnq826yJrnFKQWF0XPFAnOp%2FrQD%2Fh%2B%2FTYLZMjO2ywqmnKZbL5UNt0iaspFdwVWvsiin36SMULCl4vhqvL2YBQ0oFmL0qzsIA94C0i%2BxsUQ7s%2Bis0fZ4CiJsArKI7P%2F%2BwcgMBJ3%2FyDrIS0WTbDUrpZmLHL4FXb%2B9w6jDe7CprLuPlOV49VVnDJXcHENa5mDVV%2Foo1OuyS04Eys%2FnQbtX7FFD9SwP4UKKlV43QKbMzTztLubbRQ3kVk9o4CEliBxSsKgmSzjnkyxz6rKkTrXhH9xbq9nzLKNcMHyiBD5%2FT9u2REaHCAnSPA23Q%2FKMS9UQI7TOXehKRKUtCWcnfZmXq4l5eqyLvrk96KxQCGOUCeap%2Bylac%2BDZ0OfSzl3SVDtRm15VYZbdyulE9M4RPpiUt62MMfX4DWplnn0WtcWD77ggc7RfgDpezEBjGbJZ%2Fa%2BcszDEowNVdLqODObZBorcQjGY2xyGn9%2F5rh9gb2Bwo4qCv81Vb8nMNXVs8QGOqUB8wBzEjyAx6b3kPIgKxeSQkda6N4RBYVYqDRVXG2RLA6YlJJV%2B6ybvV6Dzjv2%2FBlix6g5ZD%2BMQ9ZYfWBtWdvvv1A%2BEHhg99MjOrrrU87xD0ZNXLJ9qP8RoAmTBErgQ2wgSyBmje%2FNcNstRadx3Hbw1uciQ2D2lLIu6kiL5FXGQlWWKNVM7ItQi77fIBDQVacwcmKIOt2J7r7p%2Bf3L7mgCZjtF8jfs&X-Amz-Signature=f761f855fcf44d67c2e57137a1571abba29f9106e56a0e601659ec11e81c9929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
