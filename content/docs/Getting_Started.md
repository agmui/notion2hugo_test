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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGKZWW3A%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCN%2B1aEv4uqbhyjvrshUJmEBlCLGUpoz5wL1%2BrqSnwTwIgJWY6mrIjEuMGcoXvhmJmbeCNAfMERmOTxhX%2FlS4QFIAqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwgqezvJwWQ3z33kircAyjilizfckBZ1AY2DVTfQNxzAhdDvIlnSKyWfLwL6myCtrXVoVHI2tg4ZdBFAnENg8hEKCZGAfdQdCbaVUvEVq8sbevWsNt%2BL%2BIyeAbCQKClKCEapngJGN8vvW8U9NH%2Bb7kGAO%2Fustbe5MbsKMucf8cSBNINc7oAKa1dnyEMvkUvFRFhfIGVT8KDt9GEu7VAih0IZNszvClJtVUQaT79tLF8q0EXroEjTJsFwZO89n9dNYVsL7xejow37JQwj75S1BGbVb%2FD7UjqRgy2EUKWPQxxJ0hzAoNT8p%2FM9aZmBCOsY1JLHU5P8p9y4Hko%2B2zp4hIabmW1niD7EwyeJe033kjijhuFBvUHvJt5h41Hs9aXXHFt793uxlPWyZ8%2BcVryP5UHyM48n4AUQRLbRsvN3Yrw8Q%2FhQQ2NR%2F%2BarBo8ljHasFwHyTaSGkNqz7JvVIetZYGb4EBqTYmy8Bp9LZC6ihq9CZLyMGZR%2B1bshwTprtyeelfIerZR5p69zjydvwostWMXS%2FMDOLEgyESe4YYPkp0H8Enj1GFaHSy83Dt0XRCogb3mk1qxDdVVlWTx0p4d%2BOxY0TcIXBvm%2B1%2Flhl5b%2BmW4WceeJvW0iTFLV4gPijlueNYXpbeopBEOaBoTMOj40L4GOqUBQSsqdVESD%2BiscQtRX6m0hOElyTX0TbffuR%2B3y2j305CyDdM1EFirmrPwxleW%2BZg8FQaol3b1ouOhjllUtHGKRbMOp3ovkeqRzN3SZ%2FABfrnBO5WEPPM4fmzcknb%2FlSL8Dc6B4uh8Ag%2Bm12ejAci%2B%2BU3dSqUWwfFp7i8Yo9PGezgppAFqFyydo%2BE%2FtePwsTvH%2F9DPo%2BlIXWed7MMeNaYXt6%2B9qHZ9&X-Amz-Signature=e5e15b989c3c188b74663da789d204ed16671a53c525c3823447e943446669cf&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGKZWW3A%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCN%2B1aEv4uqbhyjvrshUJmEBlCLGUpoz5wL1%2BrqSnwTwIgJWY6mrIjEuMGcoXvhmJmbeCNAfMERmOTxhX%2FlS4QFIAqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwgqezvJwWQ3z33kircAyjilizfckBZ1AY2DVTfQNxzAhdDvIlnSKyWfLwL6myCtrXVoVHI2tg4ZdBFAnENg8hEKCZGAfdQdCbaVUvEVq8sbevWsNt%2BL%2BIyeAbCQKClKCEapngJGN8vvW8U9NH%2Bb7kGAO%2Fustbe5MbsKMucf8cSBNINc7oAKa1dnyEMvkUvFRFhfIGVT8KDt9GEu7VAih0IZNszvClJtVUQaT79tLF8q0EXroEjTJsFwZO89n9dNYVsL7xejow37JQwj75S1BGbVb%2FD7UjqRgy2EUKWPQxxJ0hzAoNT8p%2FM9aZmBCOsY1JLHU5P8p9y4Hko%2B2zp4hIabmW1niD7EwyeJe033kjijhuFBvUHvJt5h41Hs9aXXHFt793uxlPWyZ8%2BcVryP5UHyM48n4AUQRLbRsvN3Yrw8Q%2FhQQ2NR%2F%2BarBo8ljHasFwHyTaSGkNqz7JvVIetZYGb4EBqTYmy8Bp9LZC6ihq9CZLyMGZR%2B1bshwTprtyeelfIerZR5p69zjydvwostWMXS%2FMDOLEgyESe4YYPkp0H8Enj1GFaHSy83Dt0XRCogb3mk1qxDdVVlWTx0p4d%2BOxY0TcIXBvm%2B1%2Flhl5b%2BmW4WceeJvW0iTFLV4gPijlueNYXpbeopBEOaBoTMOj40L4GOqUBQSsqdVESD%2BiscQtRX6m0hOElyTX0TbffuR%2B3y2j305CyDdM1EFirmrPwxleW%2BZg8FQaol3b1ouOhjllUtHGKRbMOp3ovkeqRzN3SZ%2FABfrnBO5WEPPM4fmzcknb%2FlSL8Dc6B4uh8Ag%2Bm12ejAci%2B%2BU3dSqUWwfFp7i8Yo9PGezgppAFqFyydo%2BE%2FtePwsTvH%2F9DPo%2BlIXWed7MMeNaYXt6%2B9qHZ9&X-Amz-Signature=d9a9aeba1cef7c8cd0c1f490086de054f07749f585aa60a7aaeea5aee331a582&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LY7QISX%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAsbtUWhBy8feo8i77sguBDoeNjy%2FfRLYPveR9ZqKwQQIhAPrWlWDXQZXdeZVYd5KJP%2F%2FonrAoydkS%2BbqRVQs9Jse%2FKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxonH%2FJPGj1BQfSIg0q3APMx0NFibmQywZawyrkIW5Pob7Q2c3iezWdYqG9KyOVSEf9A0Up7SI3qEPNLhiTVWVZIRjRFrON%2B7FawGfQU4ex7KSaVtUhN0VhdSswMmW7l0b9HgkPiXU7K95KscJvohuTmheiiVKNZl4nOCydhoajnapqmjdQlQDBVy2rPLRKCgVMPfYecsj2%2FLAr0Z7QiECepDHuR6fvj1gf7Ik8W8CfTSclVxidXOVBGc6XZj0JhrOgN1lsVIKiqJu3XpqX7PRZWZgC6d%2FcqC0Wr6lwofO3e5S5PRAbRLkKOJc320ABrqplyj1N8y70EY6%2F4N0tPtl5DUeVwq8q%2FbFhtgdEWgu9NmxgOFu2u2DE9yPK27%2BO%2FEO91X4mIiy2AlMnYANhlPDZ0ffRoIyiXQyCDDxCoxaVCTu39AIL7weMrlChDxHxDCdK8mblqBT5DUF8dfWW5J2OW3zYVGreHXAnLSeLMLewRKyGbKhJC15LhRD80TYheeSiJYCwIsujbLFthXsENDy9dQbV1vtbl2BvIMNcAIWGAZMYKqoZo9BlTi0EN%2ByuNto%2Bai8ibwLaxtSu5IIxzMp1eu3T9Os9BMBlOBBT%2BAUUJ9%2BOxo5jBIcfNJ3DZRtOcZ3kzevWt0E3pFXWSDCg%2BNC%2BBjqkAXraVOS2qni6a9nIS%2BVCVTiqNSpBI3dreg6DaqItVgjgY2kN7X4m1ftGejl%2BP%2BR27Wi3ZujlcxeNnmNvLmQxNKpXg%2BudK0EAdk6EgznDwRoDpCI2Cy8lPHqs3UZxt%2FlggpQ7O%2FPcrlu5S5z%2FjHA6RlXwH%2FH5TP9VEhjhFKL%2FY7XJSyFh2%2ByMJv2x1q0Ki3G1L25Y5Vj0SoQFPZpaMyP%2B4j%2FghZv1&X-Amz-Signature=94b27bace4c08d3d8c1ce0144743c06a939f2a444620e6738acd33431d3d6a13&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KQWIIDA%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUHBnjagN6%2BVId%2BIKHRUA3xa01zINBUdEYFZPD%2FzsoLwIhAIJb2FWamqOSbLfka8dUU247hVNfBDx4MZg5DEU%2BodBRKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPxTaQW3sZYGWwf%2Bkq3AOQWKy%2Ffrlku6pbIchgsg7B4sSLeqzOUKocgfPYOsQ2EBo3s6MycL5%2BQ%2FB2%2BnvYui8D%2FrKptdlk4JI8Mx%2BfU%2BkBZV%2Fj0Bl1lEvC4u%2Bp24eNMGkFjG6lWUTHY9gj5qJIWjfx9BZ%2Fd8%2Be63s76zSBLUJ3Flee6yKsBFNzUex6wby2q4E%2FTJFk2XSlaq%2FKlT7jnGCG8RYzNXS6CB4lZYKj0kWqJc1rmPkwaEEGPqOeKZ4zS%2BlRi2UUq45PxpgWPry9x2Fcf0NDzS%2Bk2vLrebcsU25LORwzw2FlkJa0%2F9ln%2Fq7X%2F2vLf7B4qmHnxt0cR2IaZDv7LCOIRdCAMbU%2BCWBFTOb%2F2617obZsI3KQxcJxdteG7VLmqKJHJpIFQYcoUDOz%2BIWxftpe%2Bf8nwH%2F8buMB%2Bmgxe2tDZPQ2SAcvs%2FglRhK0OdGBUmlzqn0IKJp32Vhwug7WZK%2BTNHmQeX8AhJufOM8jE6XsR3oRC9Fv88h5xjWSy2f%2FNt7CnypJIW1Z%2F1ao0VFZmCS9WULPow73Ue0UjFRLAiyorJEqfhoMdG1GhiOSPvOWmVY2N%2Bbf5M%2FQgASmRx7wLM6XCwHzb3r5mPJXQRAEUXkWSlcmJ6%2Bb8f1AZC%2Fsbeyd730h903wBpH2qDD6%2BNC%2BBjqkAfiZwbMv4RW%2F1TPIdQ9k3UVBANXXt18%2FmcvSfaDnI479CNLZnegRrXJFQCqQZjGpzGGRoQWzK8TMngo%2FHa25fKsnSeQJ1D%2BuI6MkBEn%2B4B%2BJFFgVxEibhnZGgVWvFbAQeQMK2E63Dfcnxgai8pPZ0tp9ZA9vq7VzPhEvu9h88XngFky1v0E%2FjB2nsJP15n8aJyHZTQVaWXDTxlB6grm613NlFIng&X-Amz-Signature=a7a3fa28206654515d8eee28709810691aee135d411c7072d5f3419c2a2f03b9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGKZWW3A%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCN%2B1aEv4uqbhyjvrshUJmEBlCLGUpoz5wL1%2BrqSnwTwIgJWY6mrIjEuMGcoXvhmJmbeCNAfMERmOTxhX%2FlS4QFIAqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwgqezvJwWQ3z33kircAyjilizfckBZ1AY2DVTfQNxzAhdDvIlnSKyWfLwL6myCtrXVoVHI2tg4ZdBFAnENg8hEKCZGAfdQdCbaVUvEVq8sbevWsNt%2BL%2BIyeAbCQKClKCEapngJGN8vvW8U9NH%2Bb7kGAO%2Fustbe5MbsKMucf8cSBNINc7oAKa1dnyEMvkUvFRFhfIGVT8KDt9GEu7VAih0IZNszvClJtVUQaT79tLF8q0EXroEjTJsFwZO89n9dNYVsL7xejow37JQwj75S1BGbVb%2FD7UjqRgy2EUKWPQxxJ0hzAoNT8p%2FM9aZmBCOsY1JLHU5P8p9y4Hko%2B2zp4hIabmW1niD7EwyeJe033kjijhuFBvUHvJt5h41Hs9aXXHFt793uxlPWyZ8%2BcVryP5UHyM48n4AUQRLbRsvN3Yrw8Q%2FhQQ2NR%2F%2BarBo8ljHasFwHyTaSGkNqz7JvVIetZYGb4EBqTYmy8Bp9LZC6ihq9CZLyMGZR%2B1bshwTprtyeelfIerZR5p69zjydvwostWMXS%2FMDOLEgyESe4YYPkp0H8Enj1GFaHSy83Dt0XRCogb3mk1qxDdVVlWTx0p4d%2BOxY0TcIXBvm%2B1%2Flhl5b%2BmW4WceeJvW0iTFLV4gPijlueNYXpbeopBEOaBoTMOj40L4GOqUBQSsqdVESD%2BiscQtRX6m0hOElyTX0TbffuR%2B3y2j305CyDdM1EFirmrPwxleW%2BZg8FQaol3b1ouOhjllUtHGKRbMOp3ovkeqRzN3SZ%2FABfrnBO5WEPPM4fmzcknb%2FlSL8Dc6B4uh8Ag%2Bm12ejAci%2B%2BU3dSqUWwfFp7i8Yo9PGezgppAFqFyydo%2BE%2FtePwsTvH%2F9DPo%2BlIXWed7MMeNaYXt6%2B9qHZ9&X-Amz-Signature=ad95809259d421864cbf68af5c0ecb1c7e47b2a9e173991b5ad05f65b29e73d2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
