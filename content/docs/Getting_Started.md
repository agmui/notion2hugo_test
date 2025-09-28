---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WSCFK3L%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQD8tAmS9r%2FJtibL8%2BkLpG1CsFhW7ujgY241HU0kKqVHPgIgSEVNa7UTDVHus7RuUPDgRSvnCpL8kfrSAwWdf2FcQmIqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBzdT2Cxg38tsJ6ESrcA8PS1hZ3tmgHo47p4ifCoB8bokqiI5bt1CO7QFMN00YPpKO07lpH05uxCrgdwSMyHLlpbEa416%2FQ%2FJSaakNX2yYjEflcWLXA4ftQbNDTQgCxXEvACKllP0mnR9YIz%2BBt%2FnOFoNxN4h7MW0x%2FL2jfQmfBFzgcXaEPfHZYnMj1pN0%2BTdMRSxkPODNijyprbwfaggLF0p%2BmTjHb73SAzlfZU8Ku66JtstQ2%2B0SJyU%2BBZyXHia5MCYckTcK5qqvYTW2nVsJSI8EAi93oE%2FWTohGWxVb8aw3OxHDPSVXDP68piR%2BYxMfgk79Mz%2FfVGxFGEcs09Hq%2FF%2BCqAzZTDTMa%2BqAggTnYnQjWqnE%2FcZ57cL5TCHrSz7KLozEa83YsBx1cRIQggpU1vRx%2BrOT1604BzVkg0NCpDRISEEo7GCBSXy7DIyRfr5y01EpB9asi2or4aSf%2B4%2Fx9nkU7BBaNJct88pYwfwHktGMxOQ5UGlHwp%2Bma1RzO8dN5Lo0jqAlOxKXgNqe0sLZY2VPjMgFQAoq7vAV2zLb3NuC8TL%2BHpfqF1Edmj4t5VykDVBhq2niGSXXYfXVk%2F4vhclIoR3%2BFwsNc6CznGVdlAb6UEifFt7Tzsg5qmHJ0bGDEnJXxngcHv0wPMKG%2B4cYGOqUBY36yoqPHw6Z3zKjSRH1M29FraAr6I7I2iACBGJ4FGTB3RKCUosk7SGru9B6YqQjWr8pKT2b9DdyJES00i7BLifQiBL2y6XdCNQZYb2ks2bbcvZG2A3KO93RZEmGv4xTjUok6YVm3f9l3oRKc9caEv%2Fd1pw3M3e%2Fdx%2FwBk%2BNdj%2BejCyNUwLDwhdCShnFzS9yYfumgjQad05kVJusvo071R%2BWjwgUX&X-Amz-Signature=5760e3f747dd3437bd0dd0a89c59fdd705c4fb7561172572706b3fb01c34914f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WSCFK3L%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQD8tAmS9r%2FJtibL8%2BkLpG1CsFhW7ujgY241HU0kKqVHPgIgSEVNa7UTDVHus7RuUPDgRSvnCpL8kfrSAwWdf2FcQmIqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBzdT2Cxg38tsJ6ESrcA8PS1hZ3tmgHo47p4ifCoB8bokqiI5bt1CO7QFMN00YPpKO07lpH05uxCrgdwSMyHLlpbEa416%2FQ%2FJSaakNX2yYjEflcWLXA4ftQbNDTQgCxXEvACKllP0mnR9YIz%2BBt%2FnOFoNxN4h7MW0x%2FL2jfQmfBFzgcXaEPfHZYnMj1pN0%2BTdMRSxkPODNijyprbwfaggLF0p%2BmTjHb73SAzlfZU8Ku66JtstQ2%2B0SJyU%2BBZyXHia5MCYckTcK5qqvYTW2nVsJSI8EAi93oE%2FWTohGWxVb8aw3OxHDPSVXDP68piR%2BYxMfgk79Mz%2FfVGxFGEcs09Hq%2FF%2BCqAzZTDTMa%2BqAggTnYnQjWqnE%2FcZ57cL5TCHrSz7KLozEa83YsBx1cRIQggpU1vRx%2BrOT1604BzVkg0NCpDRISEEo7GCBSXy7DIyRfr5y01EpB9asi2or4aSf%2B4%2Fx9nkU7BBaNJct88pYwfwHktGMxOQ5UGlHwp%2Bma1RzO8dN5Lo0jqAlOxKXgNqe0sLZY2VPjMgFQAoq7vAV2zLb3NuC8TL%2BHpfqF1Edmj4t5VykDVBhq2niGSXXYfXVk%2F4vhclIoR3%2BFwsNc6CznGVdlAb6UEifFt7Tzsg5qmHJ0bGDEnJXxngcHv0wPMKG%2B4cYGOqUBY36yoqPHw6Z3zKjSRH1M29FraAr6I7I2iACBGJ4FGTB3RKCUosk7SGru9B6YqQjWr8pKT2b9DdyJES00i7BLifQiBL2y6XdCNQZYb2ks2bbcvZG2A3KO93RZEmGv4xTjUok6YVm3f9l3oRKc9caEv%2Fd1pw3M3e%2Fdx%2FwBk%2BNdj%2BejCyNUwLDwhdCShnFzS9yYfumgjQad05kVJusvo071R%2BWjwgUX&X-Amz-Signature=a96c3ffbf62cd37a94f6f570e32eb43d68d54f1212793be6c7807551d5cda0c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WSCFK3L%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQD8tAmS9r%2FJtibL8%2BkLpG1CsFhW7ujgY241HU0kKqVHPgIgSEVNa7UTDVHus7RuUPDgRSvnCpL8kfrSAwWdf2FcQmIqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBzdT2Cxg38tsJ6ESrcA8PS1hZ3tmgHo47p4ifCoB8bokqiI5bt1CO7QFMN00YPpKO07lpH05uxCrgdwSMyHLlpbEa416%2FQ%2FJSaakNX2yYjEflcWLXA4ftQbNDTQgCxXEvACKllP0mnR9YIz%2BBt%2FnOFoNxN4h7MW0x%2FL2jfQmfBFzgcXaEPfHZYnMj1pN0%2BTdMRSxkPODNijyprbwfaggLF0p%2BmTjHb73SAzlfZU8Ku66JtstQ2%2B0SJyU%2BBZyXHia5MCYckTcK5qqvYTW2nVsJSI8EAi93oE%2FWTohGWxVb8aw3OxHDPSVXDP68piR%2BYxMfgk79Mz%2FfVGxFGEcs09Hq%2FF%2BCqAzZTDTMa%2BqAggTnYnQjWqnE%2FcZ57cL5TCHrSz7KLozEa83YsBx1cRIQggpU1vRx%2BrOT1604BzVkg0NCpDRISEEo7GCBSXy7DIyRfr5y01EpB9asi2or4aSf%2B4%2Fx9nkU7BBaNJct88pYwfwHktGMxOQ5UGlHwp%2Bma1RzO8dN5Lo0jqAlOxKXgNqe0sLZY2VPjMgFQAoq7vAV2zLb3NuC8TL%2BHpfqF1Edmj4t5VykDVBhq2niGSXXYfXVk%2F4vhclIoR3%2BFwsNc6CznGVdlAb6UEifFt7Tzsg5qmHJ0bGDEnJXxngcHv0wPMKG%2B4cYGOqUBY36yoqPHw6Z3zKjSRH1M29FraAr6I7I2iACBGJ4FGTB3RKCUosk7SGru9B6YqQjWr8pKT2b9DdyJES00i7BLifQiBL2y6XdCNQZYb2ks2bbcvZG2A3KO93RZEmGv4xTjUok6YVm3f9l3oRKc9caEv%2Fd1pw3M3e%2Fdx%2FwBk%2BNdj%2BejCyNUwLDwhdCShnFzS9yYfumgjQad05kVJusvo071R%2BWjwgUX&X-Amz-Signature=bc2dfb13d82a17818a4ff5cc2255e909526747c76d5b687986202b0e40fbd566&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZXEGIGG%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCHplnxh6xIa7aHBXKgUXstseov%2BEVc1HDjGExdpwr77QIgOudYJqzGNcIHGS1%2FnP%2BOfvm%2BK91w0dW5zOXPUeaNHekqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJwG6Haul%2FPOM%2BjyyrcA%2FTdcgto0zoNLIjZi35Q5Vd6CNyvH8Pz2vlRvrfHfqHOBvRjlkDrS83hQQPaWlrSMfTlEb3zY2dkdV2wNxIuIJnxzF035i3i%2BgnSh7bieTLjWctxU1Sx2Fz0nJMKi%2Bty0YAHxMrRfETEeq%2F%2FHIeh8dXo3rpVoQ2BwC0MqBl6yg4kV8eyx7fqZ6zy17yu9Jd0jPFlaoaY4k7fl8VvFBdsH2FD0Kb3cEwJ%2B4PLFgDetIQsH%2FRM5q7Dvah5h2doi%2BxFny%2FH8ISr%2Bovd6lIWiUbJvaS4Q4%2FDsUxCm6gIQhSpviGWD6UBpKDeCcVyfKqY3Md2qByv3jAZeBIXaNPPyuVWKRUkyd5RM%2BkVDW%2BY6065IR0%2FAjl8G64yC%2B1uJCx%2BFsTxmPl1iBhLZ0QqLtpDto27yO%2BTEtb%2F1wRyuxU4rxqRvFdp6kw%2F%2FnhSFc7qKxNbxmMwJlXN1U2wf9WtNNz4RfjL7%2F7gTjZ2%2Bt1owNxgZLFv42QdPbprf8OuoQkUwD8j9iqKXGOwMfHxn0sQ1%2BSxkL%2FKdeVX7fnXuRGWg%2BEFuD3pj%2FMOROUsfbMK5lvIzWmfonYkcYO9uJRTBpDlSX9LdI3%2BrFZHfJtdmoAZuOR20hlJKAPKebBOz2mB7aef%2Fe7%2FMMW%2B4cYGOqUBJzWuOcA8eW7rFQYJH5VpXljv%2BcyyYMSJ6ZO5IiwiMtTeZ9ADfmhuajquXMXVK2dqV0N11uCZDhDia5oN%2BCGq2o1ykQ4UBwp8lb8uBDa7NoNa6PBzP22i9f8PaaIcng71DeWwO3o7edbJ7p14PDk5Xnn6Y67mMDh4rfRv9CDDIxCHjfZWI01tP3ehoBkiUmuB17BkTKsBbWbrVA3qVvIgtPmnMjHq&X-Amz-Signature=a7ce602f2e689c4cab0797eab24bb862e49c171b6f1955d8a6a9c3b2195f4283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2EIRU2K%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIFTWVa6nHxyC3oI1CWjlqn8GRZuvV%2BvLLHGXOVrq5CoUAiAaBkr3OOzYpbz60%2Bfv01tvlDbTitOyBJ1E4IcjIaN%2FHyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNb%2FT3TId7rc0HsYiKtwD6aqcPFDk9BLfaKWrtt1fpPxngzCdCdSJvIb6k0b8T%2Fh6I777QrpVTZg5eeqMaH%2FffzefCnSUseVfYtg%2BCUACWz9wYtrljTvJ23m1rvc0EL9eaYI60aU84CW1okkCUYfBZyFne0kNrpu2E7InKfDw68fkaH9KkAchUZrTmFjBKstLmpuDCnHQ90ySunvBs3d0tDDFEDYFhvGf4whS0QsilR%2FqfwXWH3NgKHtrdSQctwYml%2Fenxmrg6srfeEH7Vj7VTvtxUgXe8bz9eMJ2BRamjAVF3GzWm1DeW0IdnGR8X1B184LyiWEYy2rSbpZV82IORC3HpHmtvhliNgOyS0fZy1R7v9e7nhqkPOYirpv6rtkxSeL8HoKrWM9SMmBmM6xAqhrtiETp05R5iTK9M%2B7gxhEh7W0%2F7CYhMfBaADMrf0cVSUXsCcrfPG1%2FGFTU7pH3bCG3mwb98jOhm7Vd%2Bv6LYsaV63KwKiCxy8EZ98bUMN7noNxVGvSBOJl7py2d1LcTjCWx7fSTkoMUxCitYcl1HsLSl%2FxaTrY6U5jhRU5aFHWaMgsVloCKOb3L9y%2F4zPit1hbK6HpneUtVhT8A1KZySXY66shpgJkiPp9m71hcD50Yto5uruWvJnQzOOswpL7hxgY6pgEVZpfjfXo2jH%2BsL6F2hpwRd7TYMROE7KHzK%2FcjpWT8i%2FdoQ3PR6ReDzQPuwmQVa2FILH4RyU1RBYwfaHmFQnB026wrWmVWKSxWU3colB%2BgxUXI12U3XZbR9Mx5SyCViC5KkvvOnvcV%2BO8o%2FkFN5y%2FW%2Fvh6%2FlxJXJN260WRVwO255pWjRqlwoGIDkw7u1PUpJJ4Cui4deV4%2B3mqnyU9i5n%2BwURoST%2Fn&X-Amz-Signature=dc2385cf44a4699d903ea28d4ad9956430f09e62005c74871f9fd415d025135a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WSCFK3L%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQD8tAmS9r%2FJtibL8%2BkLpG1CsFhW7ujgY241HU0kKqVHPgIgSEVNa7UTDVHus7RuUPDgRSvnCpL8kfrSAwWdf2FcQmIqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBzdT2Cxg38tsJ6ESrcA8PS1hZ3tmgHo47p4ifCoB8bokqiI5bt1CO7QFMN00YPpKO07lpH05uxCrgdwSMyHLlpbEa416%2FQ%2FJSaakNX2yYjEflcWLXA4ftQbNDTQgCxXEvACKllP0mnR9YIz%2BBt%2FnOFoNxN4h7MW0x%2FL2jfQmfBFzgcXaEPfHZYnMj1pN0%2BTdMRSxkPODNijyprbwfaggLF0p%2BmTjHb73SAzlfZU8Ku66JtstQ2%2B0SJyU%2BBZyXHia5MCYckTcK5qqvYTW2nVsJSI8EAi93oE%2FWTohGWxVb8aw3OxHDPSVXDP68piR%2BYxMfgk79Mz%2FfVGxFGEcs09Hq%2FF%2BCqAzZTDTMa%2BqAggTnYnQjWqnE%2FcZ57cL5TCHrSz7KLozEa83YsBx1cRIQggpU1vRx%2BrOT1604BzVkg0NCpDRISEEo7GCBSXy7DIyRfr5y01EpB9asi2or4aSf%2B4%2Fx9nkU7BBaNJct88pYwfwHktGMxOQ5UGlHwp%2Bma1RzO8dN5Lo0jqAlOxKXgNqe0sLZY2VPjMgFQAoq7vAV2zLb3NuC8TL%2BHpfqF1Edmj4t5VykDVBhq2niGSXXYfXVk%2F4vhclIoR3%2BFwsNc6CznGVdlAb6UEifFt7Tzsg5qmHJ0bGDEnJXxngcHv0wPMKG%2B4cYGOqUBY36yoqPHw6Z3zKjSRH1M29FraAr6I7I2iACBGJ4FGTB3RKCUosk7SGru9B6YqQjWr8pKT2b9DdyJES00i7BLifQiBL2y6XdCNQZYb2ks2bbcvZG2A3KO93RZEmGv4xTjUok6YVm3f9l3oRKc9caEv%2Fd1pw3M3e%2Fdx%2FwBk%2BNdj%2BejCyNUwLDwhdCShnFzS9yYfumgjQad05kVJusvo071R%2BWjwgUX&X-Amz-Signature=8892b87a63cefdad5640bb309c2f3b98a50d06e923ae6b10e45c831bed6766ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
