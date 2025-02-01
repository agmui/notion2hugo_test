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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L655EW5%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdkv9J9PNOo%2FakMwvC7bjSozrrXKq3vl03NA7WRDf0yAIgNzO%2B%2FYWthkf477P8N0NNHW0zhUm%2FtSuH7ru8iu2HGOwqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD4yvbVApE4DIOolhCrcA%2BK%2BJDWaDkq6PJ3gJgYyAXXfs%2FXPnqvavRYyxjzzmXzw7whWo4LrZFkA0CR4ViQWUOPvzbDMrv3rJOJSyhzEKqFgEw6CadWj32pesz0cN4RjU6BE4MarVYBgz%2BHKXRezYVzaEp%2BeUErSgJv9vD729q3y5Y34B1V0lmIzRAheL5kTZVb7%2FzBs9LrpRJ%2BaM3lWOvUZV8yifimSMTuxp%2FSuCudcnX5Mdu5hsDvXud%2BCm19L1tTFZNxuC3T9vnvZdYWtWyZjG3AfN68vy7144SStdNO8lP3ProH20S87EemhMlHlohsBkezEHpFlY6CRkMVbrQ1fQwyQtIp9jK549v9QZ4f74Gxxeief%2F6tqFobyEl7NDFv8srLshRCdD%2Bfq7K43EpkFT4FykZOIZWBpXXs7ULBC%2F5Nkd0RpksV%2Fwu2li38rp8qize3ZIrdnOoFD7m0leq4nPYZL3%2BPdBKJ0FKGp8GnQGR5lKfLR%2FEkbn6VjybYLA75Ic70xP1sRQg3ycscd%2FQUmGO3i8rWKNuD88RoTS5QzJCRHgtGgkoGZwaGvlupcMjknnuB07Do2vo%2Bii5n2z%2BYXQTyfb10%2FcvmQOtnweBhp3lF0giJwmoVR2qFNgoMVgOkkiHaU6pxv3pY5MPHC9rwGOqUBwyDE5PM4ZhMllAiGHMUYrJjDbvd0pD4UAzK4BjvFamm0D5oBPmcc4bTrC482ay6XaSKppJKnjVxVrCLxaJUpo2AMsbtMOb5%2FVx5o%2FEM5QSoM%2BBOS5kBdzOAoJZ6h7CAapbs9b%2Bepy5azDtEE3%2FlbWt%2FSl%2BNDaf3szzwawbSVDeBYDCfUKcVcAuQSlgeA6Kg8COCG7xaTvYP0rcSXJv%2BJ5%2F7Q5W6E&X-Amz-Signature=01c8dc0af96eff069e18ecfb61996662aaa0ae0b5abf3acf53109e07749afe25&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L655EW5%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdkv9J9PNOo%2FakMwvC7bjSozrrXKq3vl03NA7WRDf0yAIgNzO%2B%2FYWthkf477P8N0NNHW0zhUm%2FtSuH7ru8iu2HGOwqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD4yvbVApE4DIOolhCrcA%2BK%2BJDWaDkq6PJ3gJgYyAXXfs%2FXPnqvavRYyxjzzmXzw7whWo4LrZFkA0CR4ViQWUOPvzbDMrv3rJOJSyhzEKqFgEw6CadWj32pesz0cN4RjU6BE4MarVYBgz%2BHKXRezYVzaEp%2BeUErSgJv9vD729q3y5Y34B1V0lmIzRAheL5kTZVb7%2FzBs9LrpRJ%2BaM3lWOvUZV8yifimSMTuxp%2FSuCudcnX5Mdu5hsDvXud%2BCm19L1tTFZNxuC3T9vnvZdYWtWyZjG3AfN68vy7144SStdNO8lP3ProH20S87EemhMlHlohsBkezEHpFlY6CRkMVbrQ1fQwyQtIp9jK549v9QZ4f74Gxxeief%2F6tqFobyEl7NDFv8srLshRCdD%2Bfq7K43EpkFT4FykZOIZWBpXXs7ULBC%2F5Nkd0RpksV%2Fwu2li38rp8qize3ZIrdnOoFD7m0leq4nPYZL3%2BPdBKJ0FKGp8GnQGR5lKfLR%2FEkbn6VjybYLA75Ic70xP1sRQg3ycscd%2FQUmGO3i8rWKNuD88RoTS5QzJCRHgtGgkoGZwaGvlupcMjknnuB07Do2vo%2Bii5n2z%2BYXQTyfb10%2FcvmQOtnweBhp3lF0giJwmoVR2qFNgoMVgOkkiHaU6pxv3pY5MPHC9rwGOqUBwyDE5PM4ZhMllAiGHMUYrJjDbvd0pD4UAzK4BjvFamm0D5oBPmcc4bTrC482ay6XaSKppJKnjVxVrCLxaJUpo2AMsbtMOb5%2FVx5o%2FEM5QSoM%2BBOS5kBdzOAoJZ6h7CAapbs9b%2Bepy5azDtEE3%2FlbWt%2FSl%2BNDaf3szzwawbSVDeBYDCfUKcVcAuQSlgeA6Kg8COCG7xaTvYP0rcSXJv%2BJ5%2F7Q5W6E&X-Amz-Signature=df94ef6636040933b22d9760c1e559ca6448718c82fccf1da700948e525438e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXFDVHDG%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmrxngroDVDAMSEWrkjL6dptTiDpE9MJUCJBLhu%2FKM2AiAYTR2wNK4zrh86pB8ux%2Bp1MUtV9ID%2BHDBta55Ej9TPHyqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrfOFJpvYbwrhzhYxKtwDFjN8HGrD30rWeTSRePZSc2MXoBBhs%2F%2Fn3UWSdQu8mqA2WM4L1qPs7oxZtZTq%2B1nzvZO3yz0yIQwYwAXVYXh4ft7xePYLg%2BHJM7lLZ4%2Ber%2F5UZvl7ZKlpm%2BVFCCJBGf2z0Ozo5KYzOtsiiSes07n0WzfXKFC1zVD4B5Xd6LOvfdvsEozDQFoKPzp4KaCqb9yk%2FL8YxAToQeGCKSG90OlCgzR0l3gxIw9BLxiC0VIHWEMvrsTIZK9gHi8pjw0l3MrhyDGK4lfYKdsmXP2wS2s40AlOdkF1locS%2Fuc%2BYWTPVAxIxOarWPBZyoVfeR1gkrpjVBAAoIB6HVqnofpwO0LoQPjdZIgMGUIn7nFpXjx1WG%2FuWXNQnYCkU6DF4s9dqwVARsvZukqBMddz7M6Ezopv4p%2Bohm6KPLORLwxqqYl9goIkMJu3oPt0ijTP0Qgrn9vaSGsO25D9XKzAX9T1x11iv2VFlPNkBJ7PikXhz8JRFg%2B8BxPl23%2BIbnTIvz2j6XssMOEaTiFZelAeZLw1UtPVmUFhLhJkoTPSyrkt6mKsKoW8wYJTyLQ7Hw3%2FtjnPhQ5qOKYxKJJNfz%2BvUnssj%2BUt6nOIBwahPjvuRf58SnpgUDJKWv7GlnzBnmIh%2FPAwg8P2vAY6pgHj0jJM5VwQ9AjbvuHm88YxqFBM93hMoUvUVdfH41cctP8ybBK52A%2Brc24vCN1C9CJmWOfg7WdAxoIJmN6zghewM%2FNspRslfFDDC4XjhOaxgf3O63RYaFMLHvDrq5U4ohQgQmCxEimeYaUfeV%2Bm60PTCDtEd3k7OapmQLBmmP%2BlWLF2TdgRQ3CVhaHPWm9BaKso%2Bz7GUjIEHEG0Exk4PiY5H0tMq6FA&X-Amz-Signature=9984aca4d5311ed5365e1f4fb921c3443f27e0d0399f844920b287024f8fdbf5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNHE3COI%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvGsNT65xnkBgmGUz3vGD%2B5Glk8WiFaY5euVMdjSTDTgIhAI1VlKmQ6akPXf9D4VCftk%2BN670%2FlFQZavK6BMxlOzLyKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxyvSX6QTcNqZJQsMoq3AMIuRkAXYv16EooxBv%2BzwljRKjqUD2WbMFHJuXbmf2D%2FUXemip1EHiwV1N0XXRl24dlaIfGA3ghSEupnqF1jvAiqwnBBdmql67U%2BP8Mm7CYVZfd01%2F2ulEGr%2B2xGoP2o8HqRAq8IgEsWgFENOLwpY%2FCojIOdPBeQ30SLV1b5ichMY0e8Dl80i5s638rHBn1p0b98ORBjXM%2F6raAkPUdWa%2B%2B5OyDKD%2BmsARi7noEwtuWUNXVw7XRkLiKPWmTI2b%2Bz%2B5hFGdo2EvXjvfXHb2pY5QfP0qJbgcWdshBB3jqA2YhWB7mKFxkbgnTC1B4M2DLYw1lUOjtgYZAT8d%2FKAnkcgLs6cxw%2FFt4%2BGOumFGWvN%2F1OjRW%2FVl0W5tiitLDAzthQ6An3YLdzNN8bYeJU4yhx6V5EH1JmNQKccu8AydCjIkDwtTudCt%2Bg2J1pXYGGn%2F0IVBGLKXMmVCjX25QtUplD1cLoyeeW6vh4kZX2V06FQLGtC6OiO0QOD%2FJq6cZ7T8kamqEQDbUp5mjLDzTZF0E3IYryMIrq2nVp7uzr%2FMqxqb0kep9nSm7BlSlYhqfXUh3dwuMmc38fdIjKTgtycVpHbPvISwoTopyd6ZOideeaxFi2BhuS0WJSKeYPiemQzD7wva8BjqkAQGpOHU9mN6YPjSxAxNHiwijgKhk2IbM7ox7E8LpIgOI%2BGPEZFfea%2Bozh23ndDGD5tOeKQIRiDnh48SY011A0wgPVTBNb6oxmUD%2FQCxWdGTyPCiFbF9pVqNSGX8SYACadJYUJiaCBRRZUa2mTX%2Bgy1U9dziL%2BoVjwIfn1q3xS%2BBdZbbum7m939Frq9ZOh7MBIhMe%2B0ZeU97iqqYFu29Ecwm1JoVc&X-Amz-Signature=fc6bbf4676205bf08d4f4d0ad20b35b07079ae4d1a2b78d5ad0dcac4277a44b8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L655EW5%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdkv9J9PNOo%2FakMwvC7bjSozrrXKq3vl03NA7WRDf0yAIgNzO%2B%2FYWthkf477P8N0NNHW0zhUm%2FtSuH7ru8iu2HGOwqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD4yvbVApE4DIOolhCrcA%2BK%2BJDWaDkq6PJ3gJgYyAXXfs%2FXPnqvavRYyxjzzmXzw7whWo4LrZFkA0CR4ViQWUOPvzbDMrv3rJOJSyhzEKqFgEw6CadWj32pesz0cN4RjU6BE4MarVYBgz%2BHKXRezYVzaEp%2BeUErSgJv9vD729q3y5Y34B1V0lmIzRAheL5kTZVb7%2FzBs9LrpRJ%2BaM3lWOvUZV8yifimSMTuxp%2FSuCudcnX5Mdu5hsDvXud%2BCm19L1tTFZNxuC3T9vnvZdYWtWyZjG3AfN68vy7144SStdNO8lP3ProH20S87EemhMlHlohsBkezEHpFlY6CRkMVbrQ1fQwyQtIp9jK549v9QZ4f74Gxxeief%2F6tqFobyEl7NDFv8srLshRCdD%2Bfq7K43EpkFT4FykZOIZWBpXXs7ULBC%2F5Nkd0RpksV%2Fwu2li38rp8qize3ZIrdnOoFD7m0leq4nPYZL3%2BPdBKJ0FKGp8GnQGR5lKfLR%2FEkbn6VjybYLA75Ic70xP1sRQg3ycscd%2FQUmGO3i8rWKNuD88RoTS5QzJCRHgtGgkoGZwaGvlupcMjknnuB07Do2vo%2Bii5n2z%2BYXQTyfb10%2FcvmQOtnweBhp3lF0giJwmoVR2qFNgoMVgOkkiHaU6pxv3pY5MPHC9rwGOqUBwyDE5PM4ZhMllAiGHMUYrJjDbvd0pD4UAzK4BjvFamm0D5oBPmcc4bTrC482ay6XaSKppJKnjVxVrCLxaJUpo2AMsbtMOb5%2FVx5o%2FEM5QSoM%2BBOS5kBdzOAoJZ6h7CAapbs9b%2Bepy5azDtEE3%2FlbWt%2FSl%2BNDaf3szzwawbSVDeBYDCfUKcVcAuQSlgeA6Kg8COCG7xaTvYP0rcSXJv%2BJ5%2F7Q5W6E&X-Amz-Signature=4c5a6b08cad3aac523be0a54c85b78e94ad012b4fcb3975b4e20627f9b0612af&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
