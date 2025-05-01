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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWZBDUWC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCICFqLi5SK6GdaVfelFW0BjaBdZ18aSdz7eODA25fyoDrAiAM3crZqRyWZaO60TyyohoTUtuj3oPiygJoflLBquto0yqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIbVLHwWUCKFATnpoKtwDRNN8quKh%2FMIxFU9VFNIwhKvXn9YIyUWbdxkKoo1aPVqgIl3sySo4B%2F%2FSiWsM%2BbC1NJm350SaK455U1EijrtldeoepTaOirHxxlNsYlkachI41e%2B%2F1ect35l9O19yGITCsoSO8RDlKjMBO1rGMC52JUrROeBtPJbLH1lnbNaBKjRYnk9AI%2Brke13MPjswSiH9%2F0Zof%2B8ykOY0AI5p%2FBwT0wdm%2BVjLF7DwxtpUYxvOdjrnwFJTTVuHSKAbBUAQq%2FXnM8h5D1p%2B%2FtIScwpuB84xUmAP00YQinqKZfRJ0cRX4qsnlOw%2B6FovRF%2BySi%2FOYGYjimoQC5lgofUDZEzuLjbdvsefZgS7%2Bi0H9W9zpLuAbkDgHICGOZ9gxctUD4VT1oHrrgKKxaNB0AmCPI3H%2Bni7AbIAovuVbDxxNDY%2BUkHOd0VE%2FW2uvYTpD18hTxM0FxNjDoH065VwlmGJ1vqDWpWA3JS4pQC8MPKAIRJgkIGUjFI3xiAodXRb%2BFGteajeghZUWIWQnIUU9wR1vjeNDtzMO7ZnA3MOeuDBMEIRJ3ksPUXFgjHDjVi41VIBLwE3jhBOmI0IFYDh%2FSPcGrw%2F%2FHTyGX%2BRjlux%2BclnWAI2VrI2LoLC7Mtlej6nXkbZZ7cw9c3MwAY6pgFNeTna0gSxx8TEBlidBVnp9koyPOoVHR%2Fl2rfvmYSjwdtMsV1U2uoz2q0A0YDEUZzknalCTfkmyosTIKeG9tlFQ%2FxNtgm%2BCXfLkMXnPvbEzwMeTqqzCxbOGgc4CxsJhuMcBr43L%2F8Nbeu9s67EH%2B7Nbkty36Le3EE5uwi%2BPhG5HSt4KbPkQ4wmBs6aOfkkdMo2jN0oxYkTIGRQOHr7kt2gGx9MJCen&X-Amz-Signature=7bdff3439a2860f91c6c9f540fa6c143676f9c477008c3ab8850b8970ee16a38&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWZBDUWC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCICFqLi5SK6GdaVfelFW0BjaBdZ18aSdz7eODA25fyoDrAiAM3crZqRyWZaO60TyyohoTUtuj3oPiygJoflLBquto0yqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIbVLHwWUCKFATnpoKtwDRNN8quKh%2FMIxFU9VFNIwhKvXn9YIyUWbdxkKoo1aPVqgIl3sySo4B%2F%2FSiWsM%2BbC1NJm350SaK455U1EijrtldeoepTaOirHxxlNsYlkachI41e%2B%2F1ect35l9O19yGITCsoSO8RDlKjMBO1rGMC52JUrROeBtPJbLH1lnbNaBKjRYnk9AI%2Brke13MPjswSiH9%2F0Zof%2B8ykOY0AI5p%2FBwT0wdm%2BVjLF7DwxtpUYxvOdjrnwFJTTVuHSKAbBUAQq%2FXnM8h5D1p%2B%2FtIScwpuB84xUmAP00YQinqKZfRJ0cRX4qsnlOw%2B6FovRF%2BySi%2FOYGYjimoQC5lgofUDZEzuLjbdvsefZgS7%2Bi0H9W9zpLuAbkDgHICGOZ9gxctUD4VT1oHrrgKKxaNB0AmCPI3H%2Bni7AbIAovuVbDxxNDY%2BUkHOd0VE%2FW2uvYTpD18hTxM0FxNjDoH065VwlmGJ1vqDWpWA3JS4pQC8MPKAIRJgkIGUjFI3xiAodXRb%2BFGteajeghZUWIWQnIUU9wR1vjeNDtzMO7ZnA3MOeuDBMEIRJ3ksPUXFgjHDjVi41VIBLwE3jhBOmI0IFYDh%2FSPcGrw%2F%2FHTyGX%2BRjlux%2BclnWAI2VrI2LoLC7Mtlej6nXkbZZ7cw9c3MwAY6pgFNeTna0gSxx8TEBlidBVnp9koyPOoVHR%2Fl2rfvmYSjwdtMsV1U2uoz2q0A0YDEUZzknalCTfkmyosTIKeG9tlFQ%2FxNtgm%2BCXfLkMXnPvbEzwMeTqqzCxbOGgc4CxsJhuMcBr43L%2F8Nbeu9s67EH%2B7Nbkty36Le3EE5uwi%2BPhG5HSt4KbPkQ4wmBs6aOfkkdMo2jN0oxYkTIGRQOHr7kt2gGx9MJCen&X-Amz-Signature=11ac8f54e7ff05e8b0fbbaae2be0f8b6a0e279e356bd6d9769ef6a3adb3f1102&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWZBDUWC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCICFqLi5SK6GdaVfelFW0BjaBdZ18aSdz7eODA25fyoDrAiAM3crZqRyWZaO60TyyohoTUtuj3oPiygJoflLBquto0yqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIbVLHwWUCKFATnpoKtwDRNN8quKh%2FMIxFU9VFNIwhKvXn9YIyUWbdxkKoo1aPVqgIl3sySo4B%2F%2FSiWsM%2BbC1NJm350SaK455U1EijrtldeoepTaOirHxxlNsYlkachI41e%2B%2F1ect35l9O19yGITCsoSO8RDlKjMBO1rGMC52JUrROeBtPJbLH1lnbNaBKjRYnk9AI%2Brke13MPjswSiH9%2F0Zof%2B8ykOY0AI5p%2FBwT0wdm%2BVjLF7DwxtpUYxvOdjrnwFJTTVuHSKAbBUAQq%2FXnM8h5D1p%2B%2FtIScwpuB84xUmAP00YQinqKZfRJ0cRX4qsnlOw%2B6FovRF%2BySi%2FOYGYjimoQC5lgofUDZEzuLjbdvsefZgS7%2Bi0H9W9zpLuAbkDgHICGOZ9gxctUD4VT1oHrrgKKxaNB0AmCPI3H%2Bni7AbIAovuVbDxxNDY%2BUkHOd0VE%2FW2uvYTpD18hTxM0FxNjDoH065VwlmGJ1vqDWpWA3JS4pQC8MPKAIRJgkIGUjFI3xiAodXRb%2BFGteajeghZUWIWQnIUU9wR1vjeNDtzMO7ZnA3MOeuDBMEIRJ3ksPUXFgjHDjVi41VIBLwE3jhBOmI0IFYDh%2FSPcGrw%2F%2FHTyGX%2BRjlux%2BclnWAI2VrI2LoLC7Mtlej6nXkbZZ7cw9c3MwAY6pgFNeTna0gSxx8TEBlidBVnp9koyPOoVHR%2Fl2rfvmYSjwdtMsV1U2uoz2q0A0YDEUZzknalCTfkmyosTIKeG9tlFQ%2FxNtgm%2BCXfLkMXnPvbEzwMeTqqzCxbOGgc4CxsJhuMcBr43L%2F8Nbeu9s67EH%2B7Nbkty36Le3EE5uwi%2BPhG5HSt4KbPkQ4wmBs6aOfkkdMo2jN0oxYkTIGRQOHr7kt2gGx9MJCen&X-Amz-Signature=85b77a3c65e783d487b075832d4690cca63117bfd8ae3e34de7037049bcd3aa4&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL4GVP3M%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCJgS4jtapbdBbS4O7R1%2Fs4JaCKKSERxPogkyvtJjqz5gIhANszIXIutnkT59HHyC1ORbRZLbzNbdMg4pq6GhpGrErvKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIUqnE6atlDNTrkE0q3AMJPwlf1BYBTuRvPAFQiYx9C6LYbwgU3DnsskNE%2B8PaxlyssMccyhPADpPd1VyuKixxExidSUJkYatPNe204nScj1i1pG8vXlG8ch8dbH2PsN6niZfjZZnq8YG8eOWQ36moWXjUywCuyIbTdhB1Km%2BxK9It%2BmGp97ZNAAbgZf07cuYHC2S4PhAeDW0PRE3GO93Lhnq3%2BIFmSEIjM4caPjG8XLrw7gXWxvOhWkkgRD%2B8XXUzCE3Zk%2FKIKYvmLrRJFcPwpmyQuY8%2Biq8lpWXn4tDfELIQ9t1q52v9Hf2n5BTkUQqFeOn5AP3odYecHeA7W9tlQdOYemGWLKpEkwzCpdYdlB%2BNzjOwY73A5yAuwBL5QNhTEOBksljrDLsENnxTuKchk57KAVHoINizxb%2FvsTJmoJTtDdNKapM7ehmYW0bBAUCYivtSs%2F9L%2FdAQtH7fGqhKngWMXYXme4Q7cb5FhEHFV6ldTnJ9rJ%2F0DFKu2r7W8ex50kppPTc%2BhqixNmLTJc1d%2BRXhroaoR0JOf8F7MDhMEirpcaqC5Pnj3sfnGXdaz%2B%2F1LvXfcZiDG0zqZapQ4l9A2D3K%2FZ0fvWeIhxm7BtJ3gemTNDS3464wZPJ8vqYZRoB7RkmKh5E0I4fXLzCszszABjqkAUJnTE6WdDZPdEBflbJd6Bi%2BrLe4LuHcqxeU0WRMsoAddJaQSWzCCTz%2BeZvrVsKjw%2BFKWN%2B0FYpRjnQ4eaT%2BRXdz%2B%2BFtLxQgivIXJ5kZfb2DIclzKAeHBfGRJ6a9GJ8kxWT7iMWNGBu%2BZq0L2bKiU2ShrB1lVO4r%2FSitq55Scd1BrKRExrAqf36e0cx5WVLTTbGR3duxCwdNyZb1vxF4odM%2B8U0S&X-Amz-Signature=f2feb9eec2c2ef41d71a8f48d2f96d494bc5105e5c23b351a429ed25cdcc0dd4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DHIPBCH%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIBKZq4xLybx0my6u1o6QTr3lPhm6%2B%2BPZ2pXWR%2FDX0lKCAiEA0mhfGoCmcKsA9%2FklerVIK97FUxxNGpaz4phGOP69C9EqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnp%2BnzwnwCaxrIp1yrcA6cx8a5lF730vAbkwVWaNIdioVf9iQJHRvLM%2FQnvDqozFBJDhHozC7E53EamkDkIAVkQd%2F1xnlBSIzX%2FEAsxnPrzs7O6UQw1eQ%2FIFqBlur9YhTkryz31zuzijdybUbDLZhYX0RGG5vAOUXbKyKK7B8uQ3E09UvP%2BgOvt6Pzi6DV5Q2%2BW%2FKydBTfja%2BS6JlcD5nCxa65JIGYaZZA8%2FIBWKkoFbPwDCx3z7DW6LpNZMK%2Fwwy%2Bpt8onxaMoQUB6I63K8UO1jBgSiKCyunQbjoGOXgxObrURQfEqLh64Mfyo%2FMFC%2FiQ75NmlUh8lxkIeV%2ByXFeJYRakGiIXLbcLULKRQ63nD3ma1Uc6NtNY89J7%2F2dKiUAUm%2FAu6AtrcsWKVxmMlxBsRNV4GRNBI8hffZkuQcJeS2nAEY5YoiufAJOKCwxn0IiwqStKQA2quz7LyBSh2PvdGZf9RPLBAaY%2FsCddBLUV9MvrgjHf4lhqwF4YtoOsRWygukjDUDhEqinG%2Bx71HyZwBx0WklumfG22KZHdcasGx72Jrlgvu8Uz3wYf6MUO4IQ6Uy0s27XsVNOPCWMipnQKaEEm48Kf4l2t%2FLWSKZGkjUO7pym8wxBkDNw2zm4CRot7ETPXtaTInOYNqMP3NzMAGOqUBTYPHqdDBJvwoXClpvhbunjbcX9jefVPYWZ%2FYYDHAVVSRWm7SOpwUniaPoLF9vzIuEsPBy2ulnmEwBv937waJ3xWV8Q6VP9QNOkiLxsict37bo1tBCdvMvLuUosB%2FtmoH3mMoChHKwmylDUu8Eu0Tb4Z0RjAqYWqvohGNHwGzbVySPyf35Mp7D1l%2BBUZFCMvl4fC5k5tnPVyEWIZcjMa%2Bc%2BBqsenW&X-Amz-Signature=65998154fbe594876ebeaebb9c35f0a34a77bfb73895d01aa5d6e2cbb510979c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWZBDUWC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCICFqLi5SK6GdaVfelFW0BjaBdZ18aSdz7eODA25fyoDrAiAM3crZqRyWZaO60TyyohoTUtuj3oPiygJoflLBquto0yqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIbVLHwWUCKFATnpoKtwDRNN8quKh%2FMIxFU9VFNIwhKvXn9YIyUWbdxkKoo1aPVqgIl3sySo4B%2F%2FSiWsM%2BbC1NJm350SaK455U1EijrtldeoepTaOirHxxlNsYlkachI41e%2B%2F1ect35l9O19yGITCsoSO8RDlKjMBO1rGMC52JUrROeBtPJbLH1lnbNaBKjRYnk9AI%2Brke13MPjswSiH9%2F0Zof%2B8ykOY0AI5p%2FBwT0wdm%2BVjLF7DwxtpUYxvOdjrnwFJTTVuHSKAbBUAQq%2FXnM8h5D1p%2B%2FtIScwpuB84xUmAP00YQinqKZfRJ0cRX4qsnlOw%2B6FovRF%2BySi%2FOYGYjimoQC5lgofUDZEzuLjbdvsefZgS7%2Bi0H9W9zpLuAbkDgHICGOZ9gxctUD4VT1oHrrgKKxaNB0AmCPI3H%2Bni7AbIAovuVbDxxNDY%2BUkHOd0VE%2FW2uvYTpD18hTxM0FxNjDoH065VwlmGJ1vqDWpWA3JS4pQC8MPKAIRJgkIGUjFI3xiAodXRb%2BFGteajeghZUWIWQnIUU9wR1vjeNDtzMO7ZnA3MOeuDBMEIRJ3ksPUXFgjHDjVi41VIBLwE3jhBOmI0IFYDh%2FSPcGrw%2F%2FHTyGX%2BRjlux%2BclnWAI2VrI2LoLC7Mtlej6nXkbZZ7cw9c3MwAY6pgFNeTna0gSxx8TEBlidBVnp9koyPOoVHR%2Fl2rfvmYSjwdtMsV1U2uoz2q0A0YDEUZzknalCTfkmyosTIKeG9tlFQ%2FxNtgm%2BCXfLkMXnPvbEzwMeTqqzCxbOGgc4CxsJhuMcBr43L%2F8Nbeu9s67EH%2B7Nbkty36Le3EE5uwi%2BPhG5HSt4KbPkQ4wmBs6aOfkkdMo2jN0oxYkTIGRQOHr7kt2gGx9MJCen&X-Amz-Signature=8271bebff281b4b991e96cb9d9548229efe3b9bdde0ee3fcebd5746cb4859ee2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
