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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZGUEBJ5%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDicTtwvv4wcnDl0WR9AXBfDL8Gi12QnaG5oZhwWL1%2FwIhAMHVvBoZvrKLgsrG5rQN4VdRSmAuwEqPNW6hjYzHAS%2BhKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHTZKEb2ZhjuhDCuIq3AOrjypAUd57fZa6RETvi0dBgxD7QEhKR7h9ItaETyTLjzLJR%2B2p62DNRjgXT5Apd7FMVYRe4qlsdurSXf%2BH8AoPPgu0KOpzTaW8pycI91OUTZvxC6cD1XzDcrN2sSqcseMibJKLg6aeJdR6EWvgy682gRLguv2k3g4YBCBWKDA4Ookl%2FTfyLIKuUOHDthj5GmhWvtbXmOO1%2BcD6%2FsYN7edc6uOk%2FArtlNSjqGNDOFBQSIxyt9peT75AsUiQOmZRgf1MiZw0dBHPNvnhm1Ol0Ga9Clxz%2BWaep%2B6ahVLd8fgKeAdRajp3AZSCtN8QlaOsq8qz6qm9GUk5QYv0Lwuh3pWzU%2B2x2cOJDZe5M8xcqgYJtCwkjiZ3eZpm9GjbrOlNX9rCLnF8m8262pMkkp3roB1vvjDGoTdGRBQm0qE1pTVse%2Fe4DowoDFYPTG5DvRwQ0T05tKd65NTuSnKOqmnySXup%2FnTZfSh5EYLetezWTzRMxPWiFVxGuUwyQgWMysqISd1xsaQ%2BV2lN4hXfgnIN6dnZoolcOFrBz8Y7I88jXZU3KQTdf9tsSU3AdGlUhDWtGE0TEMKEtn%2F3Z9WIh%2F2ihXZO78a0nnLF21TQ0Hc4ru8T4W3hdJLnCRFurKifKzDhwv28BjqkAffXltxcgmO9purOvXHvBklHYw8r3ocsuaNNwKaL9T%2FASKXnzFzAgdNxDU2U24Ctz%2FRzmyRbqWeplg5uD6JyOEQeqIAJwlLsWFaUYw6nDtQ7jo1BnNu%2BlxV%2FGvBzWx4Hq6wC%2FlHlEAHlYQ35qvaeXlf4VOtAPAt5YoZtwqONYiSSoXQnkvC8lKazz%2FM2Di53vzTri%2FbLV9NbtE9jr76n2ckkLJuo&X-Amz-Signature=b21c4e7bcae51cf504a109813cf54801f2c0f62a82c42f3d02f95bb484c48d04&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZGUEBJ5%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDicTtwvv4wcnDl0WR9AXBfDL8Gi12QnaG5oZhwWL1%2FwIhAMHVvBoZvrKLgsrG5rQN4VdRSmAuwEqPNW6hjYzHAS%2BhKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHTZKEb2ZhjuhDCuIq3AOrjypAUd57fZa6RETvi0dBgxD7QEhKR7h9ItaETyTLjzLJR%2B2p62DNRjgXT5Apd7FMVYRe4qlsdurSXf%2BH8AoPPgu0KOpzTaW8pycI91OUTZvxC6cD1XzDcrN2sSqcseMibJKLg6aeJdR6EWvgy682gRLguv2k3g4YBCBWKDA4Ookl%2FTfyLIKuUOHDthj5GmhWvtbXmOO1%2BcD6%2FsYN7edc6uOk%2FArtlNSjqGNDOFBQSIxyt9peT75AsUiQOmZRgf1MiZw0dBHPNvnhm1Ol0Ga9Clxz%2BWaep%2B6ahVLd8fgKeAdRajp3AZSCtN8QlaOsq8qz6qm9GUk5QYv0Lwuh3pWzU%2B2x2cOJDZe5M8xcqgYJtCwkjiZ3eZpm9GjbrOlNX9rCLnF8m8262pMkkp3roB1vvjDGoTdGRBQm0qE1pTVse%2Fe4DowoDFYPTG5DvRwQ0T05tKd65NTuSnKOqmnySXup%2FnTZfSh5EYLetezWTzRMxPWiFVxGuUwyQgWMysqISd1xsaQ%2BV2lN4hXfgnIN6dnZoolcOFrBz8Y7I88jXZU3KQTdf9tsSU3AdGlUhDWtGE0TEMKEtn%2F3Z9WIh%2F2ihXZO78a0nnLF21TQ0Hc4ru8T4W3hdJLnCRFurKifKzDhwv28BjqkAffXltxcgmO9purOvXHvBklHYw8r3ocsuaNNwKaL9T%2FASKXnzFzAgdNxDU2U24Ctz%2FRzmyRbqWeplg5uD6JyOEQeqIAJwlLsWFaUYw6nDtQ7jo1BnNu%2BlxV%2FGvBzWx4Hq6wC%2FlHlEAHlYQ35qvaeXlf4VOtAPAt5YoZtwqONYiSSoXQnkvC8lKazz%2FM2Di53vzTri%2FbLV9NbtE9jr76n2ckkLJuo&X-Amz-Signature=f58d4f284374c6896def337b2afd773c6374379d6899a2b74625d278ad4e3440&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YFSO3FU%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgouCelaOFCOz8anUJ7lAdtEZcrdltLCKtm7xw0Iw4FgIhANN%2Be0VlQ6FdsbyhViT6mb1bgcgz3Wr125G8%2BLfs3qyfKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMvZS1xEIOkZS1z34q3ANiXT90WFlZy%2FP6JKaWiA6lnfqd1totQgcDhVrHGJ8DrIeEYcSRHkdEToh82DXW97iBWzvYh9KXVM3LYM071c0BzGyu4qjik9%2B4z6DnjsADh%2BXgSCewuTyFH%2Bf1ABLEMEGSHai9Ld1RZoroo8mSLx0wguKiJ0f%2BvwyfOuCutdyYzBjt8PvNj34plOXA0NzldqLpGELizWEwYpyiDKF4RoVVi128h322KRw5BsKN5WmHtOk0UWt%2BqSiUVonJMENwxO9Qx0zUw5a0cOFI86sX92tsvgxyUFBHlEk8tTGM5XFpi2m5c1goED6U93W%2F5FYivRsJogzYlXlUqNoF3Vxjn9SFw3a4ir5khYn%2FPNJrS2sSkSptI9%2F9mmcB1Y0xH2ZGF2ZjAzLT%2B6n%2Fp0Z0v53kVutluuuRTyRXqRUQH6F12lYHMQ3a6t6RZzAFwASb8bWlSdjgVIbrvSh0suvvc8CuwCZ1h0k1r%2B9fCrBFS0TMziiiwwqbFOLtV6TL5ftgUcmBkIUzAQW7iPg4S6tuwTlsmuLocNguraf9vngLwGw10bS7pbxsqy2WAAvr6gcOG6jUF2zvT9Wa6nFxR82ZeR7C2eUx4FBS4R3je2EVosOuMPLgBKyTea%2FA1w4Fcp88ajDdt%2F28BjqkAW0%2FqbaVzDXuNaFX5x3HS5UDVe26WECWvQXzsqOM2Cq5qEMnULsE3GetnOtPqq0F7Ss8QGAkZLpX5kq1%2B7Xp8juVwcSXF3hb%2F1jB2jk%2BvNEQYUFZ8AQYGzkXbBaNeWAY%2FRma9t5JnfCqSFqXpp5USPSF7GDy2iTxRXf3WA6u2D7%2BQOIWSwAisAjJV948KgG2bajzQH1Qz6fGbZQUOz9NEwf%2FvWZP&X-Amz-Signature=a9e51ad9f11898b223e1d917e4ecc5a8e50565ce1bb98814680ace7ba2421772&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WLROYCE%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqVpy9suO1ZVd1vefpofsB%2F1KA7zUmdyJhnnrq%2FZ9ALwIhAOvaWtJyp0aXZfV%2Bx%2BS3x0hj2tlbraNl1XV6xMprZxoGKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzdh04qwPBc4ZyQa7kq3AN0nFpo%2F732AtJksQ0RHo7ifDIrlt7U3897b2PZTf5nd469Tk3hkt7Z1Mnxh6g36s6OyJJK7qjWbssZJTJ%2FFpICxpC6RhSkiTkyDgH33iXqiaUim7R%2ByYlacNBdPnybf9qtlg2QaI6gmgSMefy85645Sw0nOB94ZzgXvsh%2B%2FtYxOfk1%2FTo9NgcIS61vGSkng2QgD4sWTXgFfA0E2pse%2FRXKDjKPNSv9uunTU37hL%2BC3e%2BISadamBGqLSbFHjrYhiO00DcU6aYnxfIJXr6NONR6L5ev5uS3BSXpB5FKI5c95iq%2BEHda5eMz%2BTmZXXhuPtW%2BcYKC%2BtKvKYs9sGUT1uVTBnIY6ZOH8rwO4E21Rdd6SaxuiWjiO2C8%2FrtJCTkFgyMtcijuTz%2BX68Bl8SGKGtAAOvVJAbQZXwUvfawEN1pPkc4wzL0qFpgwt0tJpHuk%2F%2B4bh9CIjUl9r%2B6J96Or6w06kCRu2ouFrZaVc2iYnj6pKIBi3tQO5%2FZXd%2F5jzaTRv1pQtH%2BGkvRWwHFENbzdoivSBL3mEaoVtg2BVXifUwW6qeU7cAHELZYtzVaAkL1t6wWokv0LBBnxw4k0NJd%2F4glnhG4oDARDpOr4TbXFIrdxOD1RXQFx%2Ft18BGlwptTDowP28BjqkAZRZmLoH6NZR%2FVzqyTbBhYcnCUskI5bRtRw1MtNVh0tEa%2FRC%2BqTByRbNpiFNMrdhrvbpoGiNP24hw7N7KKrQtoF6F%2F3Lrlm3wsEpVMCERgNcKwT64LNAa6nI1XJXl83vT44%2FXxZbEIpFPsnChqdnrW71sqXPJnD0BfXUDQ8DgaQIE4ENNnXsr6tJYA1xZp9Wkf0%2FBAlB10QCX6HnFG7t2xOtAKXy&X-Amz-Signature=952a44359b2229a7e14cf4b20bcbeae92ff5684a44ea24743bf7299498f154f3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZGUEBJ5%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDicTtwvv4wcnDl0WR9AXBfDL8Gi12QnaG5oZhwWL1%2FwIhAMHVvBoZvrKLgsrG5rQN4VdRSmAuwEqPNW6hjYzHAS%2BhKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHTZKEb2ZhjuhDCuIq3AOrjypAUd57fZa6RETvi0dBgxD7QEhKR7h9ItaETyTLjzLJR%2B2p62DNRjgXT5Apd7FMVYRe4qlsdurSXf%2BH8AoPPgu0KOpzTaW8pycI91OUTZvxC6cD1XzDcrN2sSqcseMibJKLg6aeJdR6EWvgy682gRLguv2k3g4YBCBWKDA4Ookl%2FTfyLIKuUOHDthj5GmhWvtbXmOO1%2BcD6%2FsYN7edc6uOk%2FArtlNSjqGNDOFBQSIxyt9peT75AsUiQOmZRgf1MiZw0dBHPNvnhm1Ol0Ga9Clxz%2BWaep%2B6ahVLd8fgKeAdRajp3AZSCtN8QlaOsq8qz6qm9GUk5QYv0Lwuh3pWzU%2B2x2cOJDZe5M8xcqgYJtCwkjiZ3eZpm9GjbrOlNX9rCLnF8m8262pMkkp3roB1vvjDGoTdGRBQm0qE1pTVse%2Fe4DowoDFYPTG5DvRwQ0T05tKd65NTuSnKOqmnySXup%2FnTZfSh5EYLetezWTzRMxPWiFVxGuUwyQgWMysqISd1xsaQ%2BV2lN4hXfgnIN6dnZoolcOFrBz8Y7I88jXZU3KQTdf9tsSU3AdGlUhDWtGE0TEMKEtn%2F3Z9WIh%2F2ihXZO78a0nnLF21TQ0Hc4ru8T4W3hdJLnCRFurKifKzDhwv28BjqkAffXltxcgmO9purOvXHvBklHYw8r3ocsuaNNwKaL9T%2FASKXnzFzAgdNxDU2U24Ctz%2FRzmyRbqWeplg5uD6JyOEQeqIAJwlLsWFaUYw6nDtQ7jo1BnNu%2BlxV%2FGvBzWx4Hq6wC%2FlHlEAHlYQ35qvaeXlf4VOtAPAt5YoZtwqONYiSSoXQnkvC8lKazz%2FM2Di53vzTri%2FbLV9NbtE9jr76n2ckkLJuo&X-Amz-Signature=4b6aa863569e9ce64c8f7ad6c75475eb1f9ab4112b3af0b9d72ad3faf73e38fa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
