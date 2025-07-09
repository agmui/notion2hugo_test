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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MZBYNUG%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCptiOHn8EnczzXRUAh1rOJbnuER6hhhu6uwMvmatKygIhANIo%2F2CUeovtDGDCs0HY5hDdGLueV3pWh4kjHglBpXjoKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDBKXBB2fiJzR%2FInYq3APQOmfyYH%2BRsTEc7ajquBBgHPWAf3tuuEq3LPZ6S4wTZJqXWfgukHbMpxA1nCX%2FzBIH8RR8UvdYzKGrWpWg53zwkjJdcaGAdu%2F1rGgyjXKddXrbamEwLyrYiplMsUiJoI96P0ZVyPm582YK5r1DA9NKDQYJTQ9F%2FiUEy0puoLvQKTwavtjNs9HVqph6gXhyGz2gMaDV9m5aYKBicRvXQPrtF1tSeoLotXd5OUKK%2BK28tC67a22%2Fss%2BosVHPIbtptUPgXSEwDY5GXGE9H7n%2F4RKWcZrxNSXXwX2SyT46AC73Ccx0wUt6g3NC8O%2BiqB5NKEyga0U20GlU%2BJr6S%2B%2FUMXa5BuWQ1YdCVYr6UivXvOLopHs5m4mcPyU4W6FVjHPArgDyZDkHKvvdQLyX3e57Q6f5a7TDAzuiV5Qcp99W9hNtj08Ww5bfdVaZIi96SeXzu0lwHSo1Eag%2FqepY5QpJcgX6PZyxCaFwuakDVgMYJzjgTea7XUN%2FYyXu81dGMHHZBALrNWr%2FoCPyqGVyGeBtBTTRRMv8FMel0AWqw2MDmiGo0yQFZuB3xKXP5ObyLPUhu3GyTuMBRbtSk%2F64teq2DIcdpdDhYPm%2BwlUrDRE71pPvkOTKyrdfq3ZzHQpEgTDgmrvDBjqkAcGGNvmg8bL%2F82Bakd1Pl8NzVrd5hDuBjkUptIKw2HtKiyGETmNl1%2FRamvr6NKIJLFvunhBxoa9PDJBZjDi8YnWG8FAhh%2ByYf0aGoQGN0Wb2q%2Fa5yu9CLvjAy%2FmBwi8MCcuA8El6dOqY0vkhFQLakUrNtoU9NefrtmX1Nlf9LpYv2DszVZRVNOI8%2B%2B0b%2F62lHY%2B3hhx17Oi2ZHXQy%2FRQSX1tLAQd&X-Amz-Signature=62d238e5a5d3aa10469f11d8ecc2dbbe67ab319f770c4386cb05f378db138362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MZBYNUG%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCptiOHn8EnczzXRUAh1rOJbnuER6hhhu6uwMvmatKygIhANIo%2F2CUeovtDGDCs0HY5hDdGLueV3pWh4kjHglBpXjoKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDBKXBB2fiJzR%2FInYq3APQOmfyYH%2BRsTEc7ajquBBgHPWAf3tuuEq3LPZ6S4wTZJqXWfgukHbMpxA1nCX%2FzBIH8RR8UvdYzKGrWpWg53zwkjJdcaGAdu%2F1rGgyjXKddXrbamEwLyrYiplMsUiJoI96P0ZVyPm582YK5r1DA9NKDQYJTQ9F%2FiUEy0puoLvQKTwavtjNs9HVqph6gXhyGz2gMaDV9m5aYKBicRvXQPrtF1tSeoLotXd5OUKK%2BK28tC67a22%2Fss%2BosVHPIbtptUPgXSEwDY5GXGE9H7n%2F4RKWcZrxNSXXwX2SyT46AC73Ccx0wUt6g3NC8O%2BiqB5NKEyga0U20GlU%2BJr6S%2B%2FUMXa5BuWQ1YdCVYr6UivXvOLopHs5m4mcPyU4W6FVjHPArgDyZDkHKvvdQLyX3e57Q6f5a7TDAzuiV5Qcp99W9hNtj08Ww5bfdVaZIi96SeXzu0lwHSo1Eag%2FqepY5QpJcgX6PZyxCaFwuakDVgMYJzjgTea7XUN%2FYyXu81dGMHHZBALrNWr%2FoCPyqGVyGeBtBTTRRMv8FMel0AWqw2MDmiGo0yQFZuB3xKXP5ObyLPUhu3GyTuMBRbtSk%2F64teq2DIcdpdDhYPm%2BwlUrDRE71pPvkOTKyrdfq3ZzHQpEgTDgmrvDBjqkAcGGNvmg8bL%2F82Bakd1Pl8NzVrd5hDuBjkUptIKw2HtKiyGETmNl1%2FRamvr6NKIJLFvunhBxoa9PDJBZjDi8YnWG8FAhh%2ByYf0aGoQGN0Wb2q%2Fa5yu9CLvjAy%2FmBwi8MCcuA8El6dOqY0vkhFQLakUrNtoU9NefrtmX1Nlf9LpYv2DszVZRVNOI8%2B%2B0b%2F62lHY%2B3hhx17Oi2ZHXQy%2FRQSX1tLAQd&X-Amz-Signature=809e5c54e19a10edc132e6fff0566fde000dc61cad2f6c337056af7621812b67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MZBYNUG%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCptiOHn8EnczzXRUAh1rOJbnuER6hhhu6uwMvmatKygIhANIo%2F2CUeovtDGDCs0HY5hDdGLueV3pWh4kjHglBpXjoKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDBKXBB2fiJzR%2FInYq3APQOmfyYH%2BRsTEc7ajquBBgHPWAf3tuuEq3LPZ6S4wTZJqXWfgukHbMpxA1nCX%2FzBIH8RR8UvdYzKGrWpWg53zwkjJdcaGAdu%2F1rGgyjXKddXrbamEwLyrYiplMsUiJoI96P0ZVyPm582YK5r1DA9NKDQYJTQ9F%2FiUEy0puoLvQKTwavtjNs9HVqph6gXhyGz2gMaDV9m5aYKBicRvXQPrtF1tSeoLotXd5OUKK%2BK28tC67a22%2Fss%2BosVHPIbtptUPgXSEwDY5GXGE9H7n%2F4RKWcZrxNSXXwX2SyT46AC73Ccx0wUt6g3NC8O%2BiqB5NKEyga0U20GlU%2BJr6S%2B%2FUMXa5BuWQ1YdCVYr6UivXvOLopHs5m4mcPyU4W6FVjHPArgDyZDkHKvvdQLyX3e57Q6f5a7TDAzuiV5Qcp99W9hNtj08Ww5bfdVaZIi96SeXzu0lwHSo1Eag%2FqepY5QpJcgX6PZyxCaFwuakDVgMYJzjgTea7XUN%2FYyXu81dGMHHZBALrNWr%2FoCPyqGVyGeBtBTTRRMv8FMel0AWqw2MDmiGo0yQFZuB3xKXP5ObyLPUhu3GyTuMBRbtSk%2F64teq2DIcdpdDhYPm%2BwlUrDRE71pPvkOTKyrdfq3ZzHQpEgTDgmrvDBjqkAcGGNvmg8bL%2F82Bakd1Pl8NzVrd5hDuBjkUptIKw2HtKiyGETmNl1%2FRamvr6NKIJLFvunhBxoa9PDJBZjDi8YnWG8FAhh%2ByYf0aGoQGN0Wb2q%2Fa5yu9CLvjAy%2FmBwi8MCcuA8El6dOqY0vkhFQLakUrNtoU9NefrtmX1Nlf9LpYv2DszVZRVNOI8%2B%2B0b%2F62lHY%2B3hhx17Oi2ZHXQy%2FRQSX1tLAQd&X-Amz-Signature=0757ff2c4791ddcbcea9acc3d48bc0181a260b3e4b85de0511b670d0deade4af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3MMNPCG%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrzepXoSYlBv4DnPhKz3dlLTYUSN3D3RGgcaxqMIY85AIhANYMAMEJGNOP49doLhVPa7Th8cOA5SrYb2b3RDTMS%2FqtKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGQ3Z7ago52zoAHVMq3AMh%2ByOOHMCQPRSCaOtFshB5cywetNjVgQa6L1k1Yrqa5DzauLACyCrircq60Me0b%2FF6M6jknNG1lq%2BeaeovYltS%2F2KlWOIZedXkLuwOWGz1%2BGm1a0bUXDdPNVi0yBFJAz3cwNtFKrfcceQM2MrrnHStXW%2FXmzwJ2sLLDgW4hUsAc%2BKPsWzeie%2BkPJBcrRJBxI3IMWgqUt3l1nbzr8a3OFIZji2eCnXFaMw3b2a8%2BtiklCbZTt7tHewAHFlc087lvtYSqQ7L%2BKDGaQILZfsTFlWnmYiGxETzQJshRO5ADkf57fQTCdvrkx6Szi2MgpUxD3I826kNRBQtXtlCOFxYnAtlTrVtAljr78a9%2FoQzDVCr7rNz1%2Fs6xLs2RjFJQHOuUXa%2Bne0j2Crnf3vu2ot5g0N2OgeRai2Z%2BgQivhh0SyneVlTFS2mkRUpqkgrqX4U4iSe9YOUVtveHzByaoaNgi3sdn67Ke6kmmm9qwSdQnfuq%2FXWwMHxikr1dPpziWLHHXD9h%2F1lwolPeY2dUiwLBgEv8QL%2ByP%2Fc7xSJYCbnFFSZDSt6BBudDXKOc0DQJMaQlbobM1wKaZOZJS3gwz1hKlWk2iOfg9WfkwexsOgUZnopfLBXs7EYHVFEg4AvtXzCnm7vDBjqkAZBLIrm0FvNZ17ds7XYezJ%2F6j8wGWQOhRguSp76BqFC5HK5hGKE3qfkmQAVTl9Xj05sTIRZagvrjl0rInBoOyeTV4rWRKhUx6TBVis6zAChJAG%2F8xLd75W%2BseXR5jhkZxmlYE3uyZdqoo0o2zEG5GC94AlOm4kDzIwzyY1p%2BTsFCLshsBZ9vIkEDJ9fPOoR%2FW3t4aIngd8ZEIK9PfNr1ynkxjVOl&X-Amz-Signature=3d006eb881955e86c4d0911ca88b5adfa4080600d8f7f11382e65fec8a7688e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NVDRHIX%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FYYpFr4hFJMBCifXNu9yKev9W3L39oLLgny8O0HFvFQIgND7zc%2FM5aXFj%2FHzSpfAFXgrBn7BAs%2B%2FIvmyawaoW80MqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyfYavuGdcP1CtkJSrcA5QnD%2BwaPxNMlX0sGVuCtQ7odryJBcIwoABPxyN5cdKNxCapFe7x96eQE2g1A5qRBp%2Bn2bWAJycApuy0G8NAjv95muzdmmdXEnJnO9NKzL6OlHClWVc%2BDRShI1MP60P8lyFnooSwow3oRSclg%2BaLOMGF73jI8t01UmCHTZ66ysDQv1uQDZ1crN8sYxUG9IplEga3eZwL%2BZAbkQhHRQEg%2FfthjnAOfIZQHfXJ0C3rkKUikV6iYtuY%2FmIhFTunlj%2BiJ3Sn%2BUZqfJQjUOBCtVAouFvtosZsVY06w3KwRLSHvnEha%2FIZze1tLxDGBWWc9X2bRSvJTXZwzwnFiD4BeKTA%2FAGnvOAE6dzA%2B7ET2GtUfb3GX7L8Cgfdu5Ah9Q4ZQ2Ht2y63BKz2gyjpVG%2B9Hh9KP8A25RPrhYxqwq63Hrw9dmXkFfv2l1qRIlt6%2ByYyy9B%2BC4%2Bt3M8SnIM4fasBM7Xqqo44NlCyrjyWlFx57je%2FldeT5ws4XLEiMI5u%2B8Pdgxaxova0JNTIxDvqyiwh3mD2dB%2FUMhPX3XZvICxZsB%2Fmh34%2FjTaX%2FP%2FRbZQ19hsNIdgO5k4wiNk2uZ439QPacn5962OLWDv7%2FMz7L41YwHZzwHhejNjGkevzIBF4MbRzMLuau8MGOqUBunfXvt3KoYkeSMfFkMh4LhlMHqE7SeWuaSumtOnKlXT1cB0IPDeBdFcy57W0G0t%2BzzSyv%2FJdKhbTZTayT2LeIz%2FLRbJj9NtnWVB8tGsZmUynZCRo44wT727ixSa%2FO3UbQ05IZMJHj8qBfVcnFCzDDCS9yMMaHMmj1HwCw8bseUKNkC7%2B8yarZTbpnIcG7KQtK6JK3QK8CXqkgCt9k%2FaVIZxb2WxB&X-Amz-Signature=6a83827453280403886e3899c347082b09dba5e89f59893e9ba5af6089ad2716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MZBYNUG%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCptiOHn8EnczzXRUAh1rOJbnuER6hhhu6uwMvmatKygIhANIo%2F2CUeovtDGDCs0HY5hDdGLueV3pWh4kjHglBpXjoKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDBKXBB2fiJzR%2FInYq3APQOmfyYH%2BRsTEc7ajquBBgHPWAf3tuuEq3LPZ6S4wTZJqXWfgukHbMpxA1nCX%2FzBIH8RR8UvdYzKGrWpWg53zwkjJdcaGAdu%2F1rGgyjXKddXrbamEwLyrYiplMsUiJoI96P0ZVyPm582YK5r1DA9NKDQYJTQ9F%2FiUEy0puoLvQKTwavtjNs9HVqph6gXhyGz2gMaDV9m5aYKBicRvXQPrtF1tSeoLotXd5OUKK%2BK28tC67a22%2Fss%2BosVHPIbtptUPgXSEwDY5GXGE9H7n%2F4RKWcZrxNSXXwX2SyT46AC73Ccx0wUt6g3NC8O%2BiqB5NKEyga0U20GlU%2BJr6S%2B%2FUMXa5BuWQ1YdCVYr6UivXvOLopHs5m4mcPyU4W6FVjHPArgDyZDkHKvvdQLyX3e57Q6f5a7TDAzuiV5Qcp99W9hNtj08Ww5bfdVaZIi96SeXzu0lwHSo1Eag%2FqepY5QpJcgX6PZyxCaFwuakDVgMYJzjgTea7XUN%2FYyXu81dGMHHZBALrNWr%2FoCPyqGVyGeBtBTTRRMv8FMel0AWqw2MDmiGo0yQFZuB3xKXP5ObyLPUhu3GyTuMBRbtSk%2F64teq2DIcdpdDhYPm%2BwlUrDRE71pPvkOTKyrdfq3ZzHQpEgTDgmrvDBjqkAcGGNvmg8bL%2F82Bakd1Pl8NzVrd5hDuBjkUptIKw2HtKiyGETmNl1%2FRamvr6NKIJLFvunhBxoa9PDJBZjDi8YnWG8FAhh%2ByYf0aGoQGN0Wb2q%2Fa5yu9CLvjAy%2FmBwi8MCcuA8El6dOqY0vkhFQLakUrNtoU9NefrtmX1Nlf9LpYv2DszVZRVNOI8%2B%2B0b%2F62lHY%2B3hhx17Oi2ZHXQy%2FRQSX1tLAQd&X-Amz-Signature=588bb24e96e6ee991b60e6eaeb1a93fff14699a532f6e8738bb9884c9c8e3dd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
