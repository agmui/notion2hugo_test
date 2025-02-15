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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRURPGWO%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCawXBjVrMPnvv0Xq%2FszURQQ5ixZ23DCOkJeKwfFEHvmAIgQr0SCXB%2F7SblvJLRt%2Fjk8h8sparC3Nx1Kaz5cvjMCjcq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGWikEGlPXmKHNeLUyrcA3U4l4yUE4CAvnWRHAmdASRLdSa%2B4tyKYKix1%2BD08G%2BpAqIqVSg1%2BwMH2YH5x8BXFoC0q5%2F2qpBvQ2vBDJk0BNIvw7iB4z6iAUMx%2BbzsKwvSjiiq7mbIf9ukh06OXCOulOe9zvt4nvODXEbI9oRR07I0jmW56P1tbjWvDddPYMAPj4oEae2ryFN423zBw9byqymflDvHzI4LcQvLSBwj2eFC3A2wKSaIPxwq1dOBs4o%2F0g3LY%2F%2Fp5XQW%2BFJEc9tNEx9xtAeJnHD403LdZX9VNadZfcN637WU4BZlCbkMpgUcroJXcBBZk1%2BQG3cAnW%2Brs4YAGkIYZ%2BJEoU8fTyebG6Zn%2B66M1%2FMcrbsvavGq0AME%2FNoRAl%2FJvel9cYra60Hq1kOWmzFcr1V2zp6Xop2lFWoRxfJ9Ao0DNsL3P%2FepeIBmy6vxKb5r3IfSoS%2BVb2hh%2FZKTBYsD3P3hiFRkbYvwXm%2B8eVcdh%2BB7Pg7N07timSU1tqvjdvGWTD4B99dNBhPr2RXs7Zc20EUKq%2FAXV1laVesn9JC8d5lHRDEOKSi9bBogOxGc6yaLODLkoGRLtiOGEuQlRbEudIc9JRnX1MALmUjbrCl5Pr%2FlBxCwGvEuuiESZTgVtMuymStleAecMNu%2Bwb0GOqUBZfnKzlgCnKbylwlxhtzDO86Xm9C0shm4p8AJgmfGlRkqWvqaT6uIOYS4ksMC%2FpnGReixsh5RT66oM4SbigvLM9XtJZAhfzvup8hpGFK%2BkvHkze0JS6YGurUbXzgsUVo6PYVIyNRF%2BBUtPx5BOSaXMTqDpd%2B4r2WLUuJaW7gghKuXH7D8MOoACXNi6tfgQQ9xKlOmExJhyK4FiKDpWC6S4PIzuxOh&X-Amz-Signature=f60375c2acf4e649bacea52c4dc3c456d06ba8114358bd3e69512ee597444223&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRURPGWO%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCawXBjVrMPnvv0Xq%2FszURQQ5ixZ23DCOkJeKwfFEHvmAIgQr0SCXB%2F7SblvJLRt%2Fjk8h8sparC3Nx1Kaz5cvjMCjcq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGWikEGlPXmKHNeLUyrcA3U4l4yUE4CAvnWRHAmdASRLdSa%2B4tyKYKix1%2BD08G%2BpAqIqVSg1%2BwMH2YH5x8BXFoC0q5%2F2qpBvQ2vBDJk0BNIvw7iB4z6iAUMx%2BbzsKwvSjiiq7mbIf9ukh06OXCOulOe9zvt4nvODXEbI9oRR07I0jmW56P1tbjWvDddPYMAPj4oEae2ryFN423zBw9byqymflDvHzI4LcQvLSBwj2eFC3A2wKSaIPxwq1dOBs4o%2F0g3LY%2F%2Fp5XQW%2BFJEc9tNEx9xtAeJnHD403LdZX9VNadZfcN637WU4BZlCbkMpgUcroJXcBBZk1%2BQG3cAnW%2Brs4YAGkIYZ%2BJEoU8fTyebG6Zn%2B66M1%2FMcrbsvavGq0AME%2FNoRAl%2FJvel9cYra60Hq1kOWmzFcr1V2zp6Xop2lFWoRxfJ9Ao0DNsL3P%2FepeIBmy6vxKb5r3IfSoS%2BVb2hh%2FZKTBYsD3P3hiFRkbYvwXm%2B8eVcdh%2BB7Pg7N07timSU1tqvjdvGWTD4B99dNBhPr2RXs7Zc20EUKq%2FAXV1laVesn9JC8d5lHRDEOKSi9bBogOxGc6yaLODLkoGRLtiOGEuQlRbEudIc9JRnX1MALmUjbrCl5Pr%2FlBxCwGvEuuiESZTgVtMuymStleAecMNu%2Bwb0GOqUBZfnKzlgCnKbylwlxhtzDO86Xm9C0shm4p8AJgmfGlRkqWvqaT6uIOYS4ksMC%2FpnGReixsh5RT66oM4SbigvLM9XtJZAhfzvup8hpGFK%2BkvHkze0JS6YGurUbXzgsUVo6PYVIyNRF%2BBUtPx5BOSaXMTqDpd%2B4r2WLUuJaW7gghKuXH7D8MOoACXNi6tfgQQ9xKlOmExJhyK4FiKDpWC6S4PIzuxOh&X-Amz-Signature=4705dede5eee3246d252ae3aebad6068d68d5b3e4c2e534dca2b2a38bb66221f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBO3AFCV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIGBVCfiYVsk37%2FYF%2FjhLumTBmXb5tTjJ6OD7ZorMKMISAiBmpZurueo3dmbZPcM%2BbHsfEdBZh8UB0rzNVFHeybyszSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMWJWLHIy66DqaZdKKKtwDVapfA8qA0IQtbLjVObyeAJCoY8u1hep6d2FRIvSIXaWX7W8euNdxnLFJsdH21A2ThDYP65aC3mO4KBOI8a50SDPJZbWvg8LoYjWAeUCbW1SIgjRmz%2FhU8q1rjeLH%2B8ePF7QazeBHPs1zjtE%2Ffa6EFBsNtTVFDhkuEnlqZbHDHvf%2FVTjywAGJFzkffbJOFJVqLcUKnVeokAZxpAQ2XG1YOJbmqj3fWrAUEjST3KyvW1t25BNADPgVXUrGOZPn%2F8onAzM8SMWMBRDTFJU6w%2BpDoYTlz747AMDOR1%2BKD7wrJqNtzwRBOrz0yuVwX5BhY2IXRWppkQVLOmQLrfxg7aupJ4xuYH3TKQPcWAcldeWL0crDXc8O5P%2BTuex3%2FTVBjM17iqDzuAoe4r1tAARO49tiJdkGxKtWvn8J85ZFiO91tyUW1kie7Z9jtF5ttWYB3XVqPJXlXCIwtxIvhUOJNpZIYfTNw2xWSZ%2BSKPTsA6acMIabSJimDtA2yg8IiivoTQ9JNMk2v4Nk3qxRpIEF0D4rBOu228F7cYx3xml9TkT%2FNnN2jvnkbrVnMrWhqO7HRRKgxGqN2x9yUza2Cp6wDnqpw0s%2BMoFL48QfjXtntyPseep4%2FxJQvFjyWPV9nb0wrr7BvQY6pgEyCtN6Dr1B3JcSFhDHlk1V4xm%2F1cKrFjZ%2FbI7Ojh6FNJ8HR3HlvnajIC60ZvYz3PyfQe5N%2BTqwY9MprqNwg1xhF%2BgmhZ5rYaPwAyOHeJ3l6odJ2eoViq075WUudtXN8v0Kl3taV%2Fj%2BvGd2LxOnCbJu%2FViV7S333%2FikRAgKSvDk8iRiX%2Fv7fHP2njLYs5A7hsaBW8xk5jWsLf6B5t2MJFub79fHrOiZ&X-Amz-Signature=5a48723aab3f9a96d4c87871070c1ec5b06f4a7b5e4ef857936004c5a62cb0d2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CNRF2CJ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCxBsGzjIjoky1IV4vL56F8Eyww9G9c2i%2BeZfWqYmYhKAIgD18xkjbFG7W9%2FV%2B9XlnRw96rGQadDVkKJJpxu86%2F4R4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOezX%2BCCbqAxw%2BoF4ircAzcpXi4U52LAqVjtWvkm2055ExFhigSHy4N%2F87QSgpC8ZGU86q9F1eyasIaqRl02Y7VS0oKaziDHAdgNlQ%2FlVDUCGRGqIftZbyt3XOZCiRwAlKujBa6zqp1jDte%2F8VhpudhTtOYPxe2coOdtY7ln7ecnYPKPaY2b9vK4l%2F0U2pWkA4Q4OaIHU%2B0gPz7AxtmyKK%2FqgjaaTVdYVktk4PCAZKq%2Bu%2Bwn%2FsP%2FGBXdktCBC%2FHfwn4SuU8imnoCHlSlDUNt4mv2iNIw%2FwJG02JeOVdEPOIPGeQxijalcPA%2B6iX%2BbWG93TK%2Br8H%2Bp7JTfgj3PfSuu8noClXw7ksklHhekca4BNKMrB3ri9MNCxU0D4BcZ0F3ljeUKjIXJWnrqlsNc%2Bnemidb1lFYjggkG6NhstRqCkL4vtIybnyXjU%2Bou9oADKp7dMOT944T6Or14btFi7qdecovOPSE3FaML%2FORCe37GdBjKKOxTbvppPU6JCp6Q5leJbWU%2BbMhXgm6yMh3C0etQnUuSzhBbyY7KUWyUndTLNdPV2WkY%2Fv4baEV%2FqZdqenTUm0MMwslqgMN%2FCjcKbWKQ7rHwDymsHvBhA8cX9iADsMf3keFXCgEZ1Aw%2BE9LVv1caelOgsDCSLdgmeaBMK2%2Bwb0GOqUBkiMZfrHtLaOcTrtga5u%2FW%2Begk6Q8m6q75EZDWRIUQcPOZiX%2FCZar%2FIakS9dnGBAD2vD10%2Bwm0Kqs33mkopXlUJatkaBgQ6BJMXt2%2FusU%2FMDlylHiuvIsl5nmG1Yyl9zv963oWPWJ9aEkvkeHBWKgie%2FwVah8bNwTwESuWsUtU1OCUku6gfHz5KJB7yGvw2qXyKAUgEfQlZdz%2FlMLy2oKgCHp04Ua&X-Amz-Signature=bbbdb6edcb985806a509a98180d0000598a5e451246f96a97cffa2fb0dd9017d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRURPGWO%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCawXBjVrMPnvv0Xq%2FszURQQ5ixZ23DCOkJeKwfFEHvmAIgQr0SCXB%2F7SblvJLRt%2Fjk8h8sparC3Nx1Kaz5cvjMCjcq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGWikEGlPXmKHNeLUyrcA3U4l4yUE4CAvnWRHAmdASRLdSa%2B4tyKYKix1%2BD08G%2BpAqIqVSg1%2BwMH2YH5x8BXFoC0q5%2F2qpBvQ2vBDJk0BNIvw7iB4z6iAUMx%2BbzsKwvSjiiq7mbIf9ukh06OXCOulOe9zvt4nvODXEbI9oRR07I0jmW56P1tbjWvDddPYMAPj4oEae2ryFN423zBw9byqymflDvHzI4LcQvLSBwj2eFC3A2wKSaIPxwq1dOBs4o%2F0g3LY%2F%2Fp5XQW%2BFJEc9tNEx9xtAeJnHD403LdZX9VNadZfcN637WU4BZlCbkMpgUcroJXcBBZk1%2BQG3cAnW%2Brs4YAGkIYZ%2BJEoU8fTyebG6Zn%2B66M1%2FMcrbsvavGq0AME%2FNoRAl%2FJvel9cYra60Hq1kOWmzFcr1V2zp6Xop2lFWoRxfJ9Ao0DNsL3P%2FepeIBmy6vxKb5r3IfSoS%2BVb2hh%2FZKTBYsD3P3hiFRkbYvwXm%2B8eVcdh%2BB7Pg7N07timSU1tqvjdvGWTD4B99dNBhPr2RXs7Zc20EUKq%2FAXV1laVesn9JC8d5lHRDEOKSi9bBogOxGc6yaLODLkoGRLtiOGEuQlRbEudIc9JRnX1MALmUjbrCl5Pr%2FlBxCwGvEuuiESZTgVtMuymStleAecMNu%2Bwb0GOqUBZfnKzlgCnKbylwlxhtzDO86Xm9C0shm4p8AJgmfGlRkqWvqaT6uIOYS4ksMC%2FpnGReixsh5RT66oM4SbigvLM9XtJZAhfzvup8hpGFK%2BkvHkze0JS6YGurUbXzgsUVo6PYVIyNRF%2BBUtPx5BOSaXMTqDpd%2B4r2WLUuJaW7gghKuXH7D8MOoACXNi6tfgQQ9xKlOmExJhyK4FiKDpWC6S4PIzuxOh&X-Amz-Signature=4228827e8c468f23f045557cffddd37e24dfe335db348546d63f359a61ffb052&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
