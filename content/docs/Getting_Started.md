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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYVNWKHZ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T150941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIAOQ62DIehcrDf2WjlEIAoprgfX1RfsyRUR5uwr3A447AiEAj7sT%2BMq44pSbBlF9pU%2BRwNbMJgrTcQ6Z9U%2FJ1sK9vEQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFJArOqwz93hgunC2yrcA2leTAUhsQEZS%2FErg87fn2h%2FibP%2Fi16lS8Huo1kZ1XkVcIbITUWidA%2F5YUxv7tPtIEgudcLi56F%2FEuLdkEYvAtbbcQ1D97UviV7jwFv1gJj%2F1lr2h39EvXY55Qq32X4hArWtJ2ix9Dlrw32DWPpI0Ekk9Loxn6ziii0AFrI7UXP9KKL27lmOyFTv7c1WGfe6Ke0KZhOo29Y03eIzYceKkNVofwyIxovBhey%2BLBe16sFfKQCNvTgSa2KGvWUtizpt6cVlS1YDrJ2qqHK9X%2FLlsXREwcHcoF3zF9Wn6RlWvSblyg9f8knxaHnz4r2KzDnBsQ4kRR0jv2HPbOPsScDYb7DiXJBYg7wbRKZiaUVm1hKi6Yv1FX%2FY%2BPCM9xvGZwzyb0TKR%2FUDiySqtudHtFfT3yNf%2Fq1Yk0Y7Ecz8sOQfALQfoMojT5ltQWVG%2B34xHFC1lmw5Kumz6hrNuuhFCvSXbqQOfzCUVZKpQRoRNf9E4tGqAuElDDsHrw4%2B6dLluFOQ0t8lWC%2BwxY38%2FcG8b4iH2YwuAf%2B4HUd9IOGgsUQ%2B4CLk8z2gcB0btJapgF%2FRgBVioiXzLh5GL%2Fj%2B95XFiRT0PpHn6DnBQKJucmb4J9QSxc%2FoQimgOm7Ocaxa2%2Fq%2FMIOL5MMGOqUB9Lmi%2FqKt8kmQMIhyL5Rzvm9Gq4z%2Bsfvk99%2BAmYcPGkeOvh%2B8ijFYhQCTs12tRQLzdObihAUgbDj8j11w0xQU2niOiDYiJinb%2FigvnM%2Bqm3Ws%2F0hfwFeDAmRc0B9gl4O3N96ox3pBVTnzLh%2BfQCSor4i1iRHrnZyFosZfFIP6PEJCDe9vUmLqlIsta4Y98o6znOpA53%2BC0ZIkfA%2FFaLNBgNxK1rwN&X-Amz-Signature=b70993106a46e64eb43b4d05307491e65318a6019ea6d73a1a23e527555e12c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYVNWKHZ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T150941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIAOQ62DIehcrDf2WjlEIAoprgfX1RfsyRUR5uwr3A447AiEAj7sT%2BMq44pSbBlF9pU%2BRwNbMJgrTcQ6Z9U%2FJ1sK9vEQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFJArOqwz93hgunC2yrcA2leTAUhsQEZS%2FErg87fn2h%2FibP%2Fi16lS8Huo1kZ1XkVcIbITUWidA%2F5YUxv7tPtIEgudcLi56F%2FEuLdkEYvAtbbcQ1D97UviV7jwFv1gJj%2F1lr2h39EvXY55Qq32X4hArWtJ2ix9Dlrw32DWPpI0Ekk9Loxn6ziii0AFrI7UXP9KKL27lmOyFTv7c1WGfe6Ke0KZhOo29Y03eIzYceKkNVofwyIxovBhey%2BLBe16sFfKQCNvTgSa2KGvWUtizpt6cVlS1YDrJ2qqHK9X%2FLlsXREwcHcoF3zF9Wn6RlWvSblyg9f8knxaHnz4r2KzDnBsQ4kRR0jv2HPbOPsScDYb7DiXJBYg7wbRKZiaUVm1hKi6Yv1FX%2FY%2BPCM9xvGZwzyb0TKR%2FUDiySqtudHtFfT3yNf%2Fq1Yk0Y7Ecz8sOQfALQfoMojT5ltQWVG%2B34xHFC1lmw5Kumz6hrNuuhFCvSXbqQOfzCUVZKpQRoRNf9E4tGqAuElDDsHrw4%2B6dLluFOQ0t8lWC%2BwxY38%2FcG8b4iH2YwuAf%2B4HUd9IOGgsUQ%2B4CLk8z2gcB0btJapgF%2FRgBVioiXzLh5GL%2Fj%2B95XFiRT0PpHn6DnBQKJucmb4J9QSxc%2FoQimgOm7Ocaxa2%2Fq%2FMIOL5MMGOqUB9Lmi%2FqKt8kmQMIhyL5Rzvm9Gq4z%2Bsfvk99%2BAmYcPGkeOvh%2B8ijFYhQCTs12tRQLzdObihAUgbDj8j11w0xQU2niOiDYiJinb%2FigvnM%2Bqm3Ws%2F0hfwFeDAmRc0B9gl4O3N96ox3pBVTnzLh%2BfQCSor4i1iRHrnZyFosZfFIP6PEJCDe9vUmLqlIsta4Y98o6znOpA53%2BC0ZIkfA%2FFaLNBgNxK1rwN&X-Amz-Signature=9f9dbf8c83b8acff9ecbc46f6678086fdbb3ff4a880516f4243d7dc6e4290f7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYVNWKHZ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T150941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIAOQ62DIehcrDf2WjlEIAoprgfX1RfsyRUR5uwr3A447AiEAj7sT%2BMq44pSbBlF9pU%2BRwNbMJgrTcQ6Z9U%2FJ1sK9vEQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFJArOqwz93hgunC2yrcA2leTAUhsQEZS%2FErg87fn2h%2FibP%2Fi16lS8Huo1kZ1XkVcIbITUWidA%2F5YUxv7tPtIEgudcLi56F%2FEuLdkEYvAtbbcQ1D97UviV7jwFv1gJj%2F1lr2h39EvXY55Qq32X4hArWtJ2ix9Dlrw32DWPpI0Ekk9Loxn6ziii0AFrI7UXP9KKL27lmOyFTv7c1WGfe6Ke0KZhOo29Y03eIzYceKkNVofwyIxovBhey%2BLBe16sFfKQCNvTgSa2KGvWUtizpt6cVlS1YDrJ2qqHK9X%2FLlsXREwcHcoF3zF9Wn6RlWvSblyg9f8knxaHnz4r2KzDnBsQ4kRR0jv2HPbOPsScDYb7DiXJBYg7wbRKZiaUVm1hKi6Yv1FX%2FY%2BPCM9xvGZwzyb0TKR%2FUDiySqtudHtFfT3yNf%2Fq1Yk0Y7Ecz8sOQfALQfoMojT5ltQWVG%2B34xHFC1lmw5Kumz6hrNuuhFCvSXbqQOfzCUVZKpQRoRNf9E4tGqAuElDDsHrw4%2B6dLluFOQ0t8lWC%2BwxY38%2FcG8b4iH2YwuAf%2B4HUd9IOGgsUQ%2B4CLk8z2gcB0btJapgF%2FRgBVioiXzLh5GL%2Fj%2B95XFiRT0PpHn6DnBQKJucmb4J9QSxc%2FoQimgOm7Ocaxa2%2Fq%2FMIOL5MMGOqUB9Lmi%2FqKt8kmQMIhyL5Rzvm9Gq4z%2Bsfvk99%2BAmYcPGkeOvh%2B8ijFYhQCTs12tRQLzdObihAUgbDj8j11w0xQU2niOiDYiJinb%2FigvnM%2Bqm3Ws%2F0hfwFeDAmRc0B9gl4O3N96ox3pBVTnzLh%2BfQCSor4i1iRHrnZyFosZfFIP6PEJCDe9vUmLqlIsta4Y98o6znOpA53%2BC0ZIkfA%2FFaLNBgNxK1rwN&X-Amz-Signature=2dd107bdcc4d7ead385200153a6286c41dbc3d1b98dd448e056e1367389e10ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWQWLANJ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T150942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQD2di2YIMSg3EmQGpalKE4%2F1BuKZ66n1IxhXReAYDGeFgIgG5sBjxbEmUoa70if2XZTzYXo4zrxfBXOUCMZJWa7Hxkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMG2M8Z%2Fdf%2BEugtbqSrcA%2Fxd8rPu5D2T%2FUgoV84NQYNZSeAiGs0%2FhBEBCNWtsWHRBrHUsL7ODaedl513B3%2FJsEMTT%2FXpgNyxoTbhSkHrsZ%2FyA7%2BG9sPk%2F9KA6%2Bay3Prf%2BCvOZSLEdESCTZIytWyO63cY5QWhw4CNu24qR0sIZdcTCeAkoDSD005J7IO4%2BojeVYEn8RL9hhbi8svd3hD9Htwzg170k%2BJAcezyXmD%2FOYieOG1u5dUVpOSOBzFz1f%2Bq5jqFj0Qv4JnS8YRdn7BeOpq0ffmuPubknKrRf8KOSn6EgAqfSc7Py55qkujq6hbgWUPCIqrvWdpZjXeJA0vNcxZhyGuH4y%2FZdtFhEk0a7q1bZ7DITJJxRXsnFfpAyDfHcgL4Kz9M0PcZpXJBiOg9ajeOsjt9%2FozD8fyXz4twuDYpJOEWv6mCGF1gcwr8K3biMeqPS6tGec%2FA8Oz22r8A8QQ6oc3Cz7sHEXZsL4GCKWBoAHq7Du4iL4QJEwS3KZLgYzAyxGXX5l%2FA8anD8JjidIbvL7C5Z7UsBMEbTkIz6Q6GsK671%2FTuwd%2BaYV3haECazD260%2BOJabRboOLjMZ2R%2BDxW%2F22h%2Fb2lTVYyeuFILLcX86QB4t1tG1qArESZB4LafU9hD7aBWpuGre1EMKyK5MMGOqUB7TbBA9Ehm%2BykDdOJG8asJs90C64sb6oNGhooQI3w0oTieBXLf3QgH7ONr59dygK5BXSlFvlXypxYOCEhvwGGQu9vGFa%2Bglca7uDTj4hRtBh8eSJIpuPaCCuE79GD2SZKsq%2B0LhfrWIa6CdJARgY3Dpu3pdlek99H9ojaDTdlP2ARlyPhr2rlPp6136soi7ewzm3DX0ePMgP2cJk8Z06zVumpRaGP&X-Amz-Signature=52db9b0f5dad6ade4723e0899c7ba6ec296f77763fb1f2fe9a599220e397a6cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CVC44GI%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIB47oQjLITEQFk%2FpWrrIj8l%2BOHuD13Sz0uZACTPt1guwAiBhNwwNoPWmepYN1TxzDobOFTP4fWOqkuXq1WDTbrweUyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM45JnawNePJbIjN1IKtwDw3CP9w5LUW%2Bo8q%2F%2Be7%2FXzFiZpwqzjJvnQxgd%2B%2FkqTjXud0zjQ8%2FlYzI32VYJxLwyz6ycfRict42NTGDvlUU71yrbOWXxOyvPmB3M3QhnzyMssNbOnVGcNnQcyfqpsmpmKghehpIauOZ%2B7TQXfncRKQxVUC3ATv4Fw4zYB4yWBoNN5BUHyHt0IKTeJ6cZma2%2BOQGg9g06cRdUXlOBlkvJDlemCS50kzMVUjPVvDVcUs7J0IxeVAYfvgeOP%2Fuvpibl9pE9qdqld4nFmTi48uIze8D%2Fagr%2BT5HE8DewAQn2qCmhR0eTwDub4UBZMRU%2FeSKhtn%2BxcwzUS%2BHQNcum1ESkYC5zRtrBGDqSaGpZrs2DUvz7lnZfOkD5rf5THGOCQVGS4gEXICdpK5URNWfg%2B5YTWSm8UUfZ7FkSgMd6J8JhwbZhign7lCYXi4Or%2Fu1vFPB8q1sNzW5oAWWlYlGo1r%2FFpGrZfegV%2BOAF8aNnmHWWVdtWiJOBuWyGustjzgrRSxq7N2L45uzQRtZHBlh9C7YI4kdAd%2Fhcf%2FdVnLEpwlMO6DXZNdYQRE0%2F2%2Bd7ScRcnJjMHBUNlbMq0BC9THWAq7KOZ61TUcV1GPh3R34Rbgd28ducOa1Y0SkZqKQ2o9Awn4rkwwY6pgHOLedIPe%2BMXEH6aFGRnME6xgDEnORe%2F3IzkiWmft76H4xzCy3vbpfLrCUu93fmfh0gdHguGYMAtANdOjLMwHLD%2F5V%2B%2BzzITW3Vn8fXnBCblWiTjF6DkvwF%2BvXhr3V6hEOX40FRBYhA4JCrd50Wf2PxVwEkIKrODNRcBPEm7mhwQCD%2FLycOCE8XoSlkwgPOw5%2BC5znZgvwcxKxfC9%2F4yGjZZKuahHx3&X-Amz-Signature=610e166e62f845e40268ea12c572eef504eb36575ecaef5c64c4bbe3fbf91e44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYVNWKHZ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T150941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIAOQ62DIehcrDf2WjlEIAoprgfX1RfsyRUR5uwr3A447AiEAj7sT%2BMq44pSbBlF9pU%2BRwNbMJgrTcQ6Z9U%2FJ1sK9vEQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFJArOqwz93hgunC2yrcA2leTAUhsQEZS%2FErg87fn2h%2FibP%2Fi16lS8Huo1kZ1XkVcIbITUWidA%2F5YUxv7tPtIEgudcLi56F%2FEuLdkEYvAtbbcQ1D97UviV7jwFv1gJj%2F1lr2h39EvXY55Qq32X4hArWtJ2ix9Dlrw32DWPpI0Ekk9Loxn6ziii0AFrI7UXP9KKL27lmOyFTv7c1WGfe6Ke0KZhOo29Y03eIzYceKkNVofwyIxovBhey%2BLBe16sFfKQCNvTgSa2KGvWUtizpt6cVlS1YDrJ2qqHK9X%2FLlsXREwcHcoF3zF9Wn6RlWvSblyg9f8knxaHnz4r2KzDnBsQ4kRR0jv2HPbOPsScDYb7DiXJBYg7wbRKZiaUVm1hKi6Yv1FX%2FY%2BPCM9xvGZwzyb0TKR%2FUDiySqtudHtFfT3yNf%2Fq1Yk0Y7Ecz8sOQfALQfoMojT5ltQWVG%2B34xHFC1lmw5Kumz6hrNuuhFCvSXbqQOfzCUVZKpQRoRNf9E4tGqAuElDDsHrw4%2B6dLluFOQ0t8lWC%2BwxY38%2FcG8b4iH2YwuAf%2B4HUd9IOGgsUQ%2B4CLk8z2gcB0btJapgF%2FRgBVioiXzLh5GL%2Fj%2B95XFiRT0PpHn6DnBQKJucmb4J9QSxc%2FoQimgOm7Ocaxa2%2Fq%2FMIOL5MMGOqUB9Lmi%2FqKt8kmQMIhyL5Rzvm9Gq4z%2Bsfvk99%2BAmYcPGkeOvh%2B8ijFYhQCTs12tRQLzdObihAUgbDj8j11w0xQU2niOiDYiJinb%2FigvnM%2Bqm3Ws%2F0hfwFeDAmRc0B9gl4O3N96ox3pBVTnzLh%2BfQCSor4i1iRHrnZyFosZfFIP6PEJCDe9vUmLqlIsta4Y98o6znOpA53%2BC0ZIkfA%2FFaLNBgNxK1rwN&X-Amz-Signature=0e5f27a97bf29bca6b10950686e2e21f822f7298062207ac13b215875dc5d036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
