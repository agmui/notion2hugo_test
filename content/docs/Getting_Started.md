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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2HX24K3%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCzd1VsZEx8tamCjSJPuOoa38N0H4nRsh5G1C%2BFFzKLJwIgAnEubAPS4bDWzlhRWUBh%2BPzAMOIzMAs3cinonz3rKegqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIfX%2BNSZPZzfTvFByrcA4YAXCSd17gwpckkJuTLzLAxYVcEODltnRQrsrBuPbI4FFQCItC7WH5rl7gkyNEsotMf0HUA7c7oPl7RaXuXEyiaHWN9hqXzsiAitY3fd8M5%2B6cWda2IG9TEMpCKfdQUqQn7wgecxWjMpub%2FHBqIdVOQ9yDVfAM1Xs4daRx9Pan8TPP%2FG9WEuRjtCqbSjIVce16i2btLB8WRLsg9GrM8cegzXr63EEvvtPkDNbT1jwgq3%2BGYpZnoFO%2BOS3KbL1i%2BPzHxYfBILzWacPVFjygUo%2BmWEAr5dijC0MByR0lzh0hwWVkFPH9XCtr3acsfRfKmsrslVkSsVUm1K7dlkdq4DMVVzMXYTwlw%2F0VEYMxDR7MHR1TROPQ%2Bl0zkpzPrM1nyxISGBcsSfEB5lKUg74EbX9O74ol8nJF204tqplMA2hlaotQPieU7z%2FSXPymG4MURFKYfGgtVxTzBmljta9UeWzVfVFIdbgZidz7t7koCHviqK%2FEEIPBl7sAaq2zno53zZjOiXkUl5Snt%2F%2FJ2ACoW70nwesNBsmoT8C14OsRoMTQ4FSf8kDTm5W0mm4NU%2B%2Bahicy9n4Ha1ZXFQnsFqAppeOI2w7FDtiPhKd4qgH2Y7EloKnTNIHQ%2BgbwurjnTMPjDyMAGOqUBIEDzy3pFqsvH6o6Abw7p%2BKgBkowPuqonQ9demhsIjHew0nabC%2BsgHt9yYKlqRIXzHw%2BAEhu5IPrrtttpD6ABTI%2FozDYie%2BaXXSO1f%2F5jArKxbFhldjaMxja6WCJYKzyJYTFb1gRreMcxsfPMNLPegBm8%2Bre0UlTK1Bls%2BEnRRwxZOvquwwb9twR1ry3b3%2FaI1LJH4XgSKHnwPmzZKe837hLGwfFS&X-Amz-Signature=88aec59ea8a1a30946a8f8da60afe45bef8b25d9febc29ec2872ce495dee7816&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2HX24K3%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCzd1VsZEx8tamCjSJPuOoa38N0H4nRsh5G1C%2BFFzKLJwIgAnEubAPS4bDWzlhRWUBh%2BPzAMOIzMAs3cinonz3rKegqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIfX%2BNSZPZzfTvFByrcA4YAXCSd17gwpckkJuTLzLAxYVcEODltnRQrsrBuPbI4FFQCItC7WH5rl7gkyNEsotMf0HUA7c7oPl7RaXuXEyiaHWN9hqXzsiAitY3fd8M5%2B6cWda2IG9TEMpCKfdQUqQn7wgecxWjMpub%2FHBqIdVOQ9yDVfAM1Xs4daRx9Pan8TPP%2FG9WEuRjtCqbSjIVce16i2btLB8WRLsg9GrM8cegzXr63EEvvtPkDNbT1jwgq3%2BGYpZnoFO%2BOS3KbL1i%2BPzHxYfBILzWacPVFjygUo%2BmWEAr5dijC0MByR0lzh0hwWVkFPH9XCtr3acsfRfKmsrslVkSsVUm1K7dlkdq4DMVVzMXYTwlw%2F0VEYMxDR7MHR1TROPQ%2Bl0zkpzPrM1nyxISGBcsSfEB5lKUg74EbX9O74ol8nJF204tqplMA2hlaotQPieU7z%2FSXPymG4MURFKYfGgtVxTzBmljta9UeWzVfVFIdbgZidz7t7koCHviqK%2FEEIPBl7sAaq2zno53zZjOiXkUl5Snt%2F%2FJ2ACoW70nwesNBsmoT8C14OsRoMTQ4FSf8kDTm5W0mm4NU%2B%2Bahicy9n4Ha1ZXFQnsFqAppeOI2w7FDtiPhKd4qgH2Y7EloKnTNIHQ%2BgbwurjnTMPjDyMAGOqUBIEDzy3pFqsvH6o6Abw7p%2BKgBkowPuqonQ9demhsIjHew0nabC%2BsgHt9yYKlqRIXzHw%2BAEhu5IPrrtttpD6ABTI%2FozDYie%2BaXXSO1f%2F5jArKxbFhldjaMxja6WCJYKzyJYTFb1gRreMcxsfPMNLPegBm8%2Bre0UlTK1Bls%2BEnRRwxZOvquwwb9twR1ry3b3%2FaI1LJH4XgSKHnwPmzZKe837hLGwfFS&X-Amz-Signature=bf397c34f59788b40c50c50fdb3c1041c298584bcfed8302202c71f227b76e34&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2HX24K3%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCzd1VsZEx8tamCjSJPuOoa38N0H4nRsh5G1C%2BFFzKLJwIgAnEubAPS4bDWzlhRWUBh%2BPzAMOIzMAs3cinonz3rKegqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIfX%2BNSZPZzfTvFByrcA4YAXCSd17gwpckkJuTLzLAxYVcEODltnRQrsrBuPbI4FFQCItC7WH5rl7gkyNEsotMf0HUA7c7oPl7RaXuXEyiaHWN9hqXzsiAitY3fd8M5%2B6cWda2IG9TEMpCKfdQUqQn7wgecxWjMpub%2FHBqIdVOQ9yDVfAM1Xs4daRx9Pan8TPP%2FG9WEuRjtCqbSjIVce16i2btLB8WRLsg9GrM8cegzXr63EEvvtPkDNbT1jwgq3%2BGYpZnoFO%2BOS3KbL1i%2BPzHxYfBILzWacPVFjygUo%2BmWEAr5dijC0MByR0lzh0hwWVkFPH9XCtr3acsfRfKmsrslVkSsVUm1K7dlkdq4DMVVzMXYTwlw%2F0VEYMxDR7MHR1TROPQ%2Bl0zkpzPrM1nyxISGBcsSfEB5lKUg74EbX9O74ol8nJF204tqplMA2hlaotQPieU7z%2FSXPymG4MURFKYfGgtVxTzBmljta9UeWzVfVFIdbgZidz7t7koCHviqK%2FEEIPBl7sAaq2zno53zZjOiXkUl5Snt%2F%2FJ2ACoW70nwesNBsmoT8C14OsRoMTQ4FSf8kDTm5W0mm4NU%2B%2Bahicy9n4Ha1ZXFQnsFqAppeOI2w7FDtiPhKd4qgH2Y7EloKnTNIHQ%2BgbwurjnTMPjDyMAGOqUBIEDzy3pFqsvH6o6Abw7p%2BKgBkowPuqonQ9demhsIjHew0nabC%2BsgHt9yYKlqRIXzHw%2BAEhu5IPrrtttpD6ABTI%2FozDYie%2BaXXSO1f%2F5jArKxbFhldjaMxja6WCJYKzyJYTFb1gRreMcxsfPMNLPegBm8%2Bre0UlTK1Bls%2BEnRRwxZOvquwwb9twR1ry3b3%2FaI1LJH4XgSKHnwPmzZKe837hLGwfFS&X-Amz-Signature=e70082dd567c80ae06c3cf12572cf930b74f04c9680577dc7b434db82ac83a9b&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZPUL6KP%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQD%2FFSo8QZat%2BPibV%2FGT2mPuMIgjX5te8MAbzGBHcqAICAIgAsbFQD8fTIS0YXvWiuCWPZ9Ojg9q%2B%2BjpLHmdImiMNFYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8pFm96DtnJ2oC6UyrcA8wi6mZkcVKJpWLZ85UftwvnH%2Bbuq%2BMsKfaF7OmjELXt4WMzukpAGJmqY0DzlfQ5mvlC4rAgbpeSu5PX9ze%2Fq6US%2FRomlxs6UVf4vCPHD%2FtC7iCsGDPQyuB4iBgtP3k58ERwEeU2x5OuIcMsPZlgKWeTzK9xvcA9CUGCdRpz2MlrpJETPlamlYba21CYbNh5N6Qapy2Hu%2Bru2dx3IvL%2FuPJKQFNzZG94S8ETy94oG5HVd%2Bv1I6RmMzVX%2BwYzYQhHL%2F2WECOtP%2Bufj5FuhNU2TCTL3VzVru1%2FciI4c378n6DB1k1jHNEcGucBcwmOwEvw3X3MCGBnBbGz4W2JlA%2F9pi7NZ0CDSwYs03VrscXT1GMXHMh2q8U3eid0gW5n6WmHMtfdmpF6Ho4K7JsYG589kSxCzMupXeuA%2BIjaNEpZgiVM2Fo7SvRLcNMcqwK6skQKZwaRuumtKuwyEuFU5J6K7gGzrlnx0zD3sMxs6wxCyXvbOjgC658WMTQzf91muatmiBMAeNWXLMAuvn4RuMfuKEVtp35T03F%2BYudrnUVkanG0QQheJXLV7%2F5NQtXwaahK9%2BIXzFzuf64tn4vn6aXN199%2FK%2BWGhK%2FSNurrAswcTKIFmoZkRvZGo1eVFQVoMJjFyMAGOqUBpSVciSK0CDwc0opaexrabcTqPiFxkyNPkbRwE2r%2FrtgUBHShDL5ouvFt1eTloeu4aHB4v2BuU9oeiEarHfDobsaaftUYec7mhqPXeadnptfRM12USI7%2BehAA5d4WKOZ44EfEUJS38sOGPMI%2FMaOZPQO%2BMnEPjctn2Jwc%2FhA6TYR%2B5QNkBeA1iBT%2BmZfPiYQpa2P0YcBty9ih%2BF3odhmw2qmmsNve&X-Amz-Signature=b089f877fb2114f0c566bbf9181266d86b2b4b2cbd48f912ed6b4f41b0c84462&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBGFJNMQ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCWifA03AxRsnDN42unE5ExN9O%2BFCw7TV0dayMaKVpJFAIhAInv1rHZEeA1SU9lGNSpP9nSElU%2BX9ohKLiOImfw7ZZwKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxbj8xzsdA4wNK%2BpJEq3AM0iUwRDVcNa7sb6WlBGSbLDlurpUwki0p%2BOFquflA%2FzWttA2%2FJpd5POqEb8w7f923btXVS9Uj5XDVxjxlYJwVYJdpxdeV7etAS1PGIAmr5WQ%2F1TFjK7bK4AHf%2F%2F7ZLULD8WWG%2FlXyX9ygky1l3227enHVzNsDck0g1V8c92MHmBiGI%2Fepnx%2FkjRsoYEUpSOVcWJZmi%2BwFE3jMft8LkSlKfBGIyNlrCTyQBGYVLtG2xFOMBmAN7570o27zPPfZHlV3LelIXitO%2FXp3wGgvagPl9Xg3CQhW9zjrQwhbj3d3si8zYBCiBYU14yMyH1FUbO8ZB%2BCmf8qizn1TOElRk2QQh%2FyNKaM1YaRGNRJCY6r897XiRVpLb9rHKzZeLDRjuyaIdWikkr%2F4yc3uOYyX45vQ6c7MIZIgMmGE2pcPY55iS8nmI12s4pYfVjrlXI3AsjVvGOyRzQ%2BtfzXoQ4K%2BMDRwy10ObX8AnDjm8Oc%2FoneDV7hbFLVOC79NjAguw8HxNAYWc0N5G5RwTQ7Rh7PlMBbsAj%2B27%2B5i8EfOmC7Iu7S3X9wJZbJj8E9Tx9Z%2F46ZPY4ysJFmatCnfenQQEz%2BX4GBJ0PtBAYqbFk3WuoN9%2B40qETeFBgxZGEInHyPPLejDqw8jABjqkASHEfDD8AI8xHwXv8FVQjLoldKRG3C6KIcs90muXPKR2AoyCb%2Fu9YQHtAY%2FNTucFTEazzo%2FfkSDABzrpnAJbfAAb9bAWPFO6Ap4M4OLIkEGDIEiq5BdY3ZxuL3PryYWdIW6rn2yL0eeGpWBkEaOZ6aV7PdIf9K%2B8C1nWyVBXt%2Fc3MFkPK2YV4ifz1FIhV06vaHwlrVhrGspU4SGxPkU5IMaahH5N&X-Amz-Signature=ce44792389f8a6eb73b54687fc881450afb5b7409c41e61b8c8cee3e4f8dec81&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2HX24K3%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCzd1VsZEx8tamCjSJPuOoa38N0H4nRsh5G1C%2BFFzKLJwIgAnEubAPS4bDWzlhRWUBh%2BPzAMOIzMAs3cinonz3rKegqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIfX%2BNSZPZzfTvFByrcA4YAXCSd17gwpckkJuTLzLAxYVcEODltnRQrsrBuPbI4FFQCItC7WH5rl7gkyNEsotMf0HUA7c7oPl7RaXuXEyiaHWN9hqXzsiAitY3fd8M5%2B6cWda2IG9TEMpCKfdQUqQn7wgecxWjMpub%2FHBqIdVOQ9yDVfAM1Xs4daRx9Pan8TPP%2FG9WEuRjtCqbSjIVce16i2btLB8WRLsg9GrM8cegzXr63EEvvtPkDNbT1jwgq3%2BGYpZnoFO%2BOS3KbL1i%2BPzHxYfBILzWacPVFjygUo%2BmWEAr5dijC0MByR0lzh0hwWVkFPH9XCtr3acsfRfKmsrslVkSsVUm1K7dlkdq4DMVVzMXYTwlw%2F0VEYMxDR7MHR1TROPQ%2Bl0zkpzPrM1nyxISGBcsSfEB5lKUg74EbX9O74ol8nJF204tqplMA2hlaotQPieU7z%2FSXPymG4MURFKYfGgtVxTzBmljta9UeWzVfVFIdbgZidz7t7koCHviqK%2FEEIPBl7sAaq2zno53zZjOiXkUl5Snt%2F%2FJ2ACoW70nwesNBsmoT8C14OsRoMTQ4FSf8kDTm5W0mm4NU%2B%2Bahicy9n4Ha1ZXFQnsFqAppeOI2w7FDtiPhKd4qgH2Y7EloKnTNIHQ%2BgbwurjnTMPjDyMAGOqUBIEDzy3pFqsvH6o6Abw7p%2BKgBkowPuqonQ9demhsIjHew0nabC%2BsgHt9yYKlqRIXzHw%2BAEhu5IPrrtttpD6ABTI%2FozDYie%2BaXXSO1f%2F5jArKxbFhldjaMxja6WCJYKzyJYTFb1gRreMcxsfPMNLPegBm8%2Bre0UlTK1Bls%2BEnRRwxZOvquwwb9twR1ry3b3%2FaI1LJH4XgSKHnwPmzZKe837hLGwfFS&X-Amz-Signature=5b703057d9b99cc71ab0a01606344c6d81b307ad916eec02d8e826765612ddb8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
