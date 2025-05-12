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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C3RJSRA%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIE7NQ5AsLMXLr1x5IX%2Fq%2FjXx%2Bb42N3MD1pPR%2FKP2v1uIAiEAykjChqbJe0ji2FG0VCvQVypJ5N%2BV3Szcp0xh07O9tAwqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrgH06CD1ZiSzwCQCrcA9FJ42LfpCSHYpF88wdJG4ed7VsLa%2Fh6sMzveQAVZi3AICM0JqFouUudmYxOZQ%2F1RyNiLSc9%2FBKhizySfjSKmU9xMQF0Om84Bd2%2BOZzWuC8xwA%2FmcHexFagdKmzvw49coSDKBV6wCJh4ADwDKoicGF%2F4bwrF3L%2FyvHoePGd5k%2BFbsGFpUeXf6op3HlqDAh4sn4tiXD5xKMW7Tg1YilmpRYqaqmlAVzBlRHhJ3K%2BQG%2F8SfWj2%2Ff73e%2B5mGvvybSg4NUizWrqbSQ3GhXmdlYEejMs%2FObbdEuFCWEemk1i9XP3HGip8zjhTn4bS6Jc6J8p2dDdpx%2BvdH9LWm01e%2Bvki%2FzxS8%2BWMpzPYYNl0udR%2BXovhlk35gt8UYn%2Btop9E3cF%2F%2FipBhsPDk8pFQWgpnrD5HVXvYe%2FbwjB9p8%2FgHl6Jm2EQPopcQthtpe2fRHUtVldFstZfKt6eAWuHDiM%2BEq9OSLza71zmWsx9T9ea%2Fc5LDikSXh61HWxf04kUKRbfYgTzsjss8nARAzHOCh31jsKHNydfgeozaWgDHVBgBRzffyPCrMXjaY5ixun3gmoPQN%2FH7pgBCQql%2FomxETUVc4CwjUzY72UOn6lWKnnrBzHlRzGqKQ%2Faus5cRIF%2BZZH5MK%2FeicEGOqUBG5x1EwaBqQOUTkeYyOO3qlJnWZSR6p07N05FNwz%2F0ithJHOJPTU3CH5%2FSuJTpTtEIHQkeP9WkokasQ%2F1%2BnIRYA8fCtT1q8G66170RDYnoC%2BQMIkkvYTqKftnc2WCBJ7XaWNgOjuoP%2BsYt9dVE1P22tMnfF25gMWLPk63fO%2BAKR9aHb9WdhXu6nUSdQRCh1RnyBq5hFqPv5QSS4zY9qxDG7gmJRus&X-Amz-Signature=059e59eee04dfbf7b11a3fbd6155aada0ddf2d5393d21b5b4172edf16b262521&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C3RJSRA%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIE7NQ5AsLMXLr1x5IX%2Fq%2FjXx%2Bb42N3MD1pPR%2FKP2v1uIAiEAykjChqbJe0ji2FG0VCvQVypJ5N%2BV3Szcp0xh07O9tAwqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrgH06CD1ZiSzwCQCrcA9FJ42LfpCSHYpF88wdJG4ed7VsLa%2Fh6sMzveQAVZi3AICM0JqFouUudmYxOZQ%2F1RyNiLSc9%2FBKhizySfjSKmU9xMQF0Om84Bd2%2BOZzWuC8xwA%2FmcHexFagdKmzvw49coSDKBV6wCJh4ADwDKoicGF%2F4bwrF3L%2FyvHoePGd5k%2BFbsGFpUeXf6op3HlqDAh4sn4tiXD5xKMW7Tg1YilmpRYqaqmlAVzBlRHhJ3K%2BQG%2F8SfWj2%2Ff73e%2B5mGvvybSg4NUizWrqbSQ3GhXmdlYEejMs%2FObbdEuFCWEemk1i9XP3HGip8zjhTn4bS6Jc6J8p2dDdpx%2BvdH9LWm01e%2Bvki%2FzxS8%2BWMpzPYYNl0udR%2BXovhlk35gt8UYn%2Btop9E3cF%2F%2FipBhsPDk8pFQWgpnrD5HVXvYe%2FbwjB9p8%2FgHl6Jm2EQPopcQthtpe2fRHUtVldFstZfKt6eAWuHDiM%2BEq9OSLza71zmWsx9T9ea%2Fc5LDikSXh61HWxf04kUKRbfYgTzsjss8nARAzHOCh31jsKHNydfgeozaWgDHVBgBRzffyPCrMXjaY5ixun3gmoPQN%2FH7pgBCQql%2FomxETUVc4CwjUzY72UOn6lWKnnrBzHlRzGqKQ%2Faus5cRIF%2BZZH5MK%2FeicEGOqUBG5x1EwaBqQOUTkeYyOO3qlJnWZSR6p07N05FNwz%2F0ithJHOJPTU3CH5%2FSuJTpTtEIHQkeP9WkokasQ%2F1%2BnIRYA8fCtT1q8G66170RDYnoC%2BQMIkkvYTqKftnc2WCBJ7XaWNgOjuoP%2BsYt9dVE1P22tMnfF25gMWLPk63fO%2BAKR9aHb9WdhXu6nUSdQRCh1RnyBq5hFqPv5QSS4zY9qxDG7gmJRus&X-Amz-Signature=c110439d3dc4b275c5aed9b7fb997bece31daec9338e9dee8dad9721d3c35aa5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C3RJSRA%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIE7NQ5AsLMXLr1x5IX%2Fq%2FjXx%2Bb42N3MD1pPR%2FKP2v1uIAiEAykjChqbJe0ji2FG0VCvQVypJ5N%2BV3Szcp0xh07O9tAwqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrgH06CD1ZiSzwCQCrcA9FJ42LfpCSHYpF88wdJG4ed7VsLa%2Fh6sMzveQAVZi3AICM0JqFouUudmYxOZQ%2F1RyNiLSc9%2FBKhizySfjSKmU9xMQF0Om84Bd2%2BOZzWuC8xwA%2FmcHexFagdKmzvw49coSDKBV6wCJh4ADwDKoicGF%2F4bwrF3L%2FyvHoePGd5k%2BFbsGFpUeXf6op3HlqDAh4sn4tiXD5xKMW7Tg1YilmpRYqaqmlAVzBlRHhJ3K%2BQG%2F8SfWj2%2Ff73e%2B5mGvvybSg4NUizWrqbSQ3GhXmdlYEejMs%2FObbdEuFCWEemk1i9XP3HGip8zjhTn4bS6Jc6J8p2dDdpx%2BvdH9LWm01e%2Bvki%2FzxS8%2BWMpzPYYNl0udR%2BXovhlk35gt8UYn%2Btop9E3cF%2F%2FipBhsPDk8pFQWgpnrD5HVXvYe%2FbwjB9p8%2FgHl6Jm2EQPopcQthtpe2fRHUtVldFstZfKt6eAWuHDiM%2BEq9OSLza71zmWsx9T9ea%2Fc5LDikSXh61HWxf04kUKRbfYgTzsjss8nARAzHOCh31jsKHNydfgeozaWgDHVBgBRzffyPCrMXjaY5ixun3gmoPQN%2FH7pgBCQql%2FomxETUVc4CwjUzY72UOn6lWKnnrBzHlRzGqKQ%2Faus5cRIF%2BZZH5MK%2FeicEGOqUBG5x1EwaBqQOUTkeYyOO3qlJnWZSR6p07N05FNwz%2F0ithJHOJPTU3CH5%2FSuJTpTtEIHQkeP9WkokasQ%2F1%2BnIRYA8fCtT1q8G66170RDYnoC%2BQMIkkvYTqKftnc2WCBJ7XaWNgOjuoP%2BsYt9dVE1P22tMnfF25gMWLPk63fO%2BAKR9aHb9WdhXu6nUSdQRCh1RnyBq5hFqPv5QSS4zY9qxDG7gmJRus&X-Amz-Signature=051774c6a64db8de543313b0531a0b338309260a6543b4c9b4c28bf5380b1deb&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWIWZJFA%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIDr2WTHBvClSlUOqKaaqCuz%2BK04owlwZBUdbgELWeh5aAiEAiNG0FChqLK2Kji6XyJyjrsgPIFhut3aqAxv2D5RhJTUqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINesFuODFfcNSsipCrcA%2FxRdZMnRoMF0zjBh%2B1mfgpoZtrK2A0PEe%2BW%2BPcSenK4Jg2I8P4RLz9RdxDWk2O8VOaIH14vKtyLF6vVm6D%2FLxu0k5uOxxv3OwNQHscdy612DLAudS9GxyBWHewyibLZQxp0F3dlC1MfFjmv20LATlJgffzAriQvU65%2FQfW%2Bxlj7uscAi08hc4wnc1hRyrpxtJUNL1FjiIK8tYQOIQICGcN9OcTsD6pdsWZKoycvbZ3h%2FrzK1hJ5YoqvMCJUAOvVaEzW2FnNxQvGduOIPZIQsXsF2wV%2Fg3z%2BSeBiaVVnfuyIFg2B41R94wkK0uTjjHoxdBu34bVetmvWfGclnV%2BvA51jL27qKTxnQtQBDEaOU2DO7uP6cVcQ9qJRMD%2BcvT3SgI7z5DevucdyD7ifdggL79azmsc%2FjYZBa2kt5Ex4GM3UiThyJJ11Qqtv7dF%2BH1tZ8zcodmK0fwZmnaZo9w6ldJRAEG9WAbWJzb4tm0tBUkAEBM7LFSnnWjTkwEzwzgm9FqnEKd0EHm2yVdyz1vO8NCa1YAjU0pWZi1H7HMbfdrbrcKtA3UoGknM4ADdQ4iPGyGbm2bOB9M2adzpG%2BrGrTaWvcqeN68X98AvqbI%2BrzQ95kJr74RcbkmI3k8JoMMPeicEGOqUBS4jd4flnR314FwnE46vobWc8IlVWFGeUf4tyzx6kkssWJy58BP%2FJJ9OSW8WQw3HkRqkN49YebCNpI8p4WlYGwT0Bt46PKcLJDa2iu%2BHvMOH8CHj6JXc1KpfBnZ44%2F95XVAKmFLdskTKAc5bgVptP1Qc2czUmDXTUjqFMPoe5jKjMoK3WtU5pW1PssEfecwPHQ357GCDKQ6oNv2lkQqhY%2FtbMx5rR&X-Amz-Signature=5d0f8c8ffa0bb0acd035f41e239bca62e1fa2398abee0d8e4455adfcefd78d4c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZAO7SWW%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCNVxCuNOvBpDqFRZcJAsE%2BHeGuAdqICPM%2F56cZYxrNoQIgT4YSiClBNfV3g4orkwrCW%2FzayHCP7Qy8fFx3boRnQLsqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMib0%2B%2B5A5wyjt1P3CrcAzsZIo8otzvWiwQ246Zp%2BIsRzJV6alZRlySOw4ymRnLwsSazplidwgK9Ngt5PGMSmlH2IlvC%2F5LGxFSiftTXJsk83WKB26%2Bs4iSxyASsktN8nl%2FhYjkE%2BFCVZcKpeNZQj%2FVby6a2xFihc%2BwNaSmeHB5oEb2TW3cP0AfQTmxQaHGnM0NdfuJaGkLyUkeTCaDq5DPXwxVtiOk%2FkHGpIDaA6xJNN88AfNmzMHZp5I1etMOZErzTA5Y%2FVCy17cr2U2CZJWNi2Q7oN3IKaI9f%2BiZVMVMM%2FWrPLKbUFGE%2F5P9pP7kG86etRppR8hqWb2dXLezLfqwA4kI9IDW6v15UnnkI1mtuJWQwgccLliCabZHiWFP2X5VE%2BFlPlreindnTJ0SiK2uGcyZINShA%2BSNXb74p7GJ3f6guX8kGLcdGpboUU4i%2BslkjOO01qEQyeN%2FEP%2FGJkvS4BcA7w1y2ok6d1BhYsZffOb37ssj7Eb5tl2zMU0Xl4rgdy8bvtQt3NG%2F0HO43H%2Fvji9%2BSSXP5oEnKJHV6ELRmy9wSJUpfvsuyw2e9DdLuBez3Tj0%2B%2BbjIaLSlzuKQbuk46dIFN6JhTAvyxBWHMjAt3rmKg59fm2JqbMcMEfa%2BB992%2BlK2o2svhQi0MKneicEGOqUBkLrku%2BnYT24VZxfC7U%2Bjn56wPWBMUXZjWS9O33uVi%2FyoVt52il0%2BEaeGAc0pwDLe67Cj8YALc1C1Kwbi5Aokxy%2FCTQ3iDKcewfQkdNLxm0w7mA7l%2BrwRmnVPgsiqtW6f3LI2z0M1iIWt%2BQp%2FNT8UFO260ubdUlMulhjUG%2BzXXiK353QCTfiOJCJ03JUkApdw4HWfHAyAFSJ1Pw3mJrbN4fOVGCzs&X-Amz-Signature=40b4e379b77b459ee42b63e00d22071547598770b81c6f3aea1552c9dba705f5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C3RJSRA%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIE7NQ5AsLMXLr1x5IX%2Fq%2FjXx%2Bb42N3MD1pPR%2FKP2v1uIAiEAykjChqbJe0ji2FG0VCvQVypJ5N%2BV3Szcp0xh07O9tAwqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrgH06CD1ZiSzwCQCrcA9FJ42LfpCSHYpF88wdJG4ed7VsLa%2Fh6sMzveQAVZi3AICM0JqFouUudmYxOZQ%2F1RyNiLSc9%2FBKhizySfjSKmU9xMQF0Om84Bd2%2BOZzWuC8xwA%2FmcHexFagdKmzvw49coSDKBV6wCJh4ADwDKoicGF%2F4bwrF3L%2FyvHoePGd5k%2BFbsGFpUeXf6op3HlqDAh4sn4tiXD5xKMW7Tg1YilmpRYqaqmlAVzBlRHhJ3K%2BQG%2F8SfWj2%2Ff73e%2B5mGvvybSg4NUizWrqbSQ3GhXmdlYEejMs%2FObbdEuFCWEemk1i9XP3HGip8zjhTn4bS6Jc6J8p2dDdpx%2BvdH9LWm01e%2Bvki%2FzxS8%2BWMpzPYYNl0udR%2BXovhlk35gt8UYn%2Btop9E3cF%2F%2FipBhsPDk8pFQWgpnrD5HVXvYe%2FbwjB9p8%2FgHl6Jm2EQPopcQthtpe2fRHUtVldFstZfKt6eAWuHDiM%2BEq9OSLza71zmWsx9T9ea%2Fc5LDikSXh61HWxf04kUKRbfYgTzsjss8nARAzHOCh31jsKHNydfgeozaWgDHVBgBRzffyPCrMXjaY5ixun3gmoPQN%2FH7pgBCQql%2FomxETUVc4CwjUzY72UOn6lWKnnrBzHlRzGqKQ%2Faus5cRIF%2BZZH5MK%2FeicEGOqUBG5x1EwaBqQOUTkeYyOO3qlJnWZSR6p07N05FNwz%2F0ithJHOJPTU3CH5%2FSuJTpTtEIHQkeP9WkokasQ%2F1%2BnIRYA8fCtT1q8G66170RDYnoC%2BQMIkkvYTqKftnc2WCBJ7XaWNgOjuoP%2BsYt9dVE1P22tMnfF25gMWLPk63fO%2BAKR9aHb9WdhXu6nUSdQRCh1RnyBq5hFqPv5QSS4zY9qxDG7gmJRus&X-Amz-Signature=f68aabbdbdf845211a85395d428e13b6427fce24f22abb2c747a392fbd7fe2e8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
