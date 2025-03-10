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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOYJACMN%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIB7KcDeXyNwLPPcKMR%2FZ4WkZaZyDAFiD5ujfV9Q6WRWlAiBYts6ZN75iCwu6YP3UKGxk9NneWS4%2Bw4mvuhMlIHmaeSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrOT5S%2B6da3jQOT58KtwDbDs3Ng0eAGRRJzqt9PBYW%2B1cn%2FzcXhVwFK%2BGgsZEwQKxncnIOombcTmMmTNmfgPhrJx4Ec171BbCUw2NVarz87V57BWBoWKpMbK7xSOzXrRxhCQ56NDBW37YgKqLpOQhba358GPrbazrJ1wET%2BSF2enecN9sI%2BtYM%2FicIFzC4uQoFTnDe5pKPhpLI6nr4PNGpQASQ7Q6i%2B3L%2B8y4oVDj6r1ma0cpb5bIiewVF56fmHz4Z1qTD8wIDIjvv1KJuDDa%2BFQz2PgTNzRUO1T4E6esGByjUwJkJ8EaCLdzJ5C2BWg1WO5w78PeHK9FvJHgi3d1YWd%2BbjlF74U5yTXOkrV93u4lq0oEJekw1D65QA1Gf00oI5nE2oXb%2FzVek6gjqXueCeGrby8F%2BB%2BDTZVnSISf68ZjDK8GdKXf2zmjpdiuEqxlYksd6vJ3Q1YsVwN2t2Fg9cJ%2FPmYVKnH%2BLgFw2e2rSzkwaPxVUy58tVs97oh0J5wo%2FZYoEqxBShiSCxIXvefnUEjIIAojyB9tnssEq5ZeSLKVTTJs1jaX2AzgBC95p0T6QbyXDjwtkdmP9SJkGyFqgnB%2B5lw%2Foe%2FrqGTYiXCI79M4ESBuoeu4etr4%2Fsxr9ckWNn1uFga%2B20oiDsMw3fq4vgY6pgHF9zeuR883uiuYK2TxUZxPyrnuwGB%2BzX%2BXSEVUnU2uT5gStxAGTqQ1l37%2BU2KdznEKXVEmKtkVjVnbawaLdF946faYZ6Jy9T%2BK3x6o6FCF6PaB74qDXe29X%2FAo%2BFx1rjiHiOUUXYS7JW3pEtlKVnIOiaV7F0aksfBgF7nN0%2B3jAEah3z%2BSZQRsHMHsw6CsHfd1pHKbVfDWiVuzvnA%2BYfgB76USsyDa&X-Amz-Signature=de1231f660764ab15151790312a8b279cf0809ccd4d1805f44472fe69a6509ed&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOYJACMN%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIB7KcDeXyNwLPPcKMR%2FZ4WkZaZyDAFiD5ujfV9Q6WRWlAiBYts6ZN75iCwu6YP3UKGxk9NneWS4%2Bw4mvuhMlIHmaeSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrOT5S%2B6da3jQOT58KtwDbDs3Ng0eAGRRJzqt9PBYW%2B1cn%2FzcXhVwFK%2BGgsZEwQKxncnIOombcTmMmTNmfgPhrJx4Ec171BbCUw2NVarz87V57BWBoWKpMbK7xSOzXrRxhCQ56NDBW37YgKqLpOQhba358GPrbazrJ1wET%2BSF2enecN9sI%2BtYM%2FicIFzC4uQoFTnDe5pKPhpLI6nr4PNGpQASQ7Q6i%2B3L%2B8y4oVDj6r1ma0cpb5bIiewVF56fmHz4Z1qTD8wIDIjvv1KJuDDa%2BFQz2PgTNzRUO1T4E6esGByjUwJkJ8EaCLdzJ5C2BWg1WO5w78PeHK9FvJHgi3d1YWd%2BbjlF74U5yTXOkrV93u4lq0oEJekw1D65QA1Gf00oI5nE2oXb%2FzVek6gjqXueCeGrby8F%2BB%2BDTZVnSISf68ZjDK8GdKXf2zmjpdiuEqxlYksd6vJ3Q1YsVwN2t2Fg9cJ%2FPmYVKnH%2BLgFw2e2rSzkwaPxVUy58tVs97oh0J5wo%2FZYoEqxBShiSCxIXvefnUEjIIAojyB9tnssEq5ZeSLKVTTJs1jaX2AzgBC95p0T6QbyXDjwtkdmP9SJkGyFqgnB%2B5lw%2Foe%2FrqGTYiXCI79M4ESBuoeu4etr4%2Fsxr9ckWNn1uFga%2B20oiDsMw3fq4vgY6pgHF9zeuR883uiuYK2TxUZxPyrnuwGB%2BzX%2BXSEVUnU2uT5gStxAGTqQ1l37%2BU2KdznEKXVEmKtkVjVnbawaLdF946faYZ6Jy9T%2BK3x6o6FCF6PaB74qDXe29X%2FAo%2BFx1rjiHiOUUXYS7JW3pEtlKVnIOiaV7F0aksfBgF7nN0%2B3jAEah3z%2BSZQRsHMHsw6CsHfd1pHKbVfDWiVuzvnA%2BYfgB76USsyDa&X-Amz-Signature=9801165d6ae75f50ac436a1bd95c0d91c59c251af9477c797d3a4564878bc118&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AJ7JRM2%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIA8J%2BFCPoQy8cKJqdYj9TWJXaMD%2FYSmj8jB90oQBJSP8AiEAup4WrrJaNXWHpIARF6uYlQjaYfBCxGYHw0B84rUGXuUqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCptLtcjy4WM%2FKr0SrcAx9Sdfv9B68opESbCiSljF9t0Aw8OGaEyRWxDnMWnXSilV2gJUTxZFPkAp9wKuL87jNqs2iq4T985jIN6Ja%2FmiPbAD9GUd8wg0M7ITkrtpyloR1Pe%2Bsx0SUbTimtjWvz74ZDhgx%2BRPwjrW8EiwZwbuOMbmkYdWwJmwffybgVhe1J7%2FQUcF2X21iYsbAWNwj%2B%2Fv3WGIde2U0kqM%2BWoE%2BGKPc0QLQZ%2FW%2B4qTTI61%2BKg9lCs%2Fqo2dxlToBSjCXKCGyTPW%2Bx8gw2tjgeTL8qGLqRvDjPUlSL2quMcVvJapJjXedYaILUGXQdRDlMi56jpOvXT6V9FPcymLGiLgZDP%2B7X5muQuq3SJWhF3RGud4LiTZhinlpfySef19TK5xfYqGp6P67POs711Z2DQ%2FsOkqeXmG80g5HCxrDZYAVAChRHXtu1wvitruTXNwThlbAq%2BEi5pCneXpeWQpISaueh%2FkVQtMV%2B%2FI41Fz5MK4zvpG2nLNpktszATany8smXZ72i51PlmNzAsItAG5TPaqMMpCc9lOTnyChyyAiC87GPWIltQnxSLq5ZQGqmOp%2B9DtJZUTMRwLKC%2BxVmP1%2Ft0CmEcP%2BZLqKWVzUsJrqF5G%2BAhRmVM%2B34Nu6AFV%2FM2NG7gMvCMOL6uL4GOqUBEANeDI5iJp5aFYQs16OySOgu6%2FZZfVAEd8HUSsXidW9cwekjmtCJ7ZYzZvMkK546Rvurk7h%2FWUv5uQrefpCKnFb69XJK5E00IvCXarTgIa2WjHIUrIWAmhY3W6o0zp4qoPAhh5DKEjxtd4XpB3fjmFeq17ugTmT2qkyOLhDEiR8CNPKpuPpUAXeoVWchWo%2FrZONvYtP4qREdvo5SII%2FSHQtisz3J&X-Amz-Signature=fde81b9ad27e73244553f0e977259fdb41cc5827b2a68fb1fbdc4251e8683a00&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W5G3POZ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQD3Wg4%2BkpoIESLcOF6Xt5t66lJiItnqShxCGX37ew%2BO8wIgLvhFkMfVvXdcJrQrDaNquaxU1QgF7ecd0gydXx46YRcqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITDnZqBY%2Boc12ZkFyrcA%2B3m%2BPzn%2FlqbFSJN12pXwFeTL3PypDDODgQSQN3LL6zigr3Pk2xWaUNTf3%2BfQkfnr4WpvJKQMayrU5h2bi8Tj3OWu4zOBNtkzaVuKpbBrmILLx9WdnnL7CXMKU%2BDglWbJMI9g5Cqiv9Ganw1VAig46HIKofehgG0IZp4yaFjKj5GBEHkyZGgH5nSrpSx5%2FQmvLQ3EVDH413VjN3rFIGLjtL%2FjvpM%2FQo%2BWLAAiAGKe5L46lszLHDZN55wMBH4aPIIvzWqdW7rPh1e7JL8VXURdsfUK6fAe0vJUdcGUm%2B5VM3noWFFNGkO5hBrzv4%2Bw55Yky40HawZ9XyRnuGvxOs4FbAEnTYt1lUrCkGoSSNT4n4Nkqcte%2FFS%2B63fHDJCzrvXZShtsAauLe%2FxBYParDH2AcuHbC4BD52kD0%2BZGKqZA4m7jBs5Ka9dQbNIRKlAjHZj9macJNGMSCV0P%2BELKhhHteaPqwANM0XToX%2FqsZbnpAajFGZaGIaUoZjbJgAFVO8RIRSueYExhlpEAd67mkDpkyf5G%2BJ%2BxqP6g4W%2FTAM0nbOjITDndLt%2FpvNGfc453qBNSBDW1Szv2P31l%2BQgxmOtwOnYXVhSQWrAL0HuYSPJf%2F58vvWV0sNamXOSKCIDMJz7uL4GOqUBg1rv%2FVdxaf7l0YLRVxZIzdkjktgyGFIPfFzy6WE32sXR3kZrpoBFN7wmaf6aIA%2BjoLN%2FumfT%2BVEbytEgY2eZSdg4MyWmnMXbyJgRX9Q0Jf%2Fe2CL0aVgx%2BNpCVqOREyQtWgbamEIa3AOf5uQEUx6uWI2qEUO6dVpw%2B3ceBu6A59aoXTaNjvVOXONXGBefyMYVST7ks6Cz9HCQpT62TMHJK10LqJpj&X-Amz-Signature=2854da2eba1b067798680f455405fab20e09e0220638050dfbfbdcffc1bc7f46&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOYJACMN%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIB7KcDeXyNwLPPcKMR%2FZ4WkZaZyDAFiD5ujfV9Q6WRWlAiBYts6ZN75iCwu6YP3UKGxk9NneWS4%2Bw4mvuhMlIHmaeSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrOT5S%2B6da3jQOT58KtwDbDs3Ng0eAGRRJzqt9PBYW%2B1cn%2FzcXhVwFK%2BGgsZEwQKxncnIOombcTmMmTNmfgPhrJx4Ec171BbCUw2NVarz87V57BWBoWKpMbK7xSOzXrRxhCQ56NDBW37YgKqLpOQhba358GPrbazrJ1wET%2BSF2enecN9sI%2BtYM%2FicIFzC4uQoFTnDe5pKPhpLI6nr4PNGpQASQ7Q6i%2B3L%2B8y4oVDj6r1ma0cpb5bIiewVF56fmHz4Z1qTD8wIDIjvv1KJuDDa%2BFQz2PgTNzRUO1T4E6esGByjUwJkJ8EaCLdzJ5C2BWg1WO5w78PeHK9FvJHgi3d1YWd%2BbjlF74U5yTXOkrV93u4lq0oEJekw1D65QA1Gf00oI5nE2oXb%2FzVek6gjqXueCeGrby8F%2BB%2BDTZVnSISf68ZjDK8GdKXf2zmjpdiuEqxlYksd6vJ3Q1YsVwN2t2Fg9cJ%2FPmYVKnH%2BLgFw2e2rSzkwaPxVUy58tVs97oh0J5wo%2FZYoEqxBShiSCxIXvefnUEjIIAojyB9tnssEq5ZeSLKVTTJs1jaX2AzgBC95p0T6QbyXDjwtkdmP9SJkGyFqgnB%2B5lw%2Foe%2FrqGTYiXCI79M4ESBuoeu4etr4%2Fsxr9ckWNn1uFga%2B20oiDsMw3fq4vgY6pgHF9zeuR883uiuYK2TxUZxPyrnuwGB%2BzX%2BXSEVUnU2uT5gStxAGTqQ1l37%2BU2KdznEKXVEmKtkVjVnbawaLdF946faYZ6Jy9T%2BK3x6o6FCF6PaB74qDXe29X%2FAo%2BFx1rjiHiOUUXYS7JW3pEtlKVnIOiaV7F0aksfBgF7nN0%2B3jAEah3z%2BSZQRsHMHsw6CsHfd1pHKbVfDWiVuzvnA%2BYfgB76USsyDa&X-Amz-Signature=26d7df2013fbcedf8caa90440ecac6157b44307cd92585bf581fede5f983a273&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
