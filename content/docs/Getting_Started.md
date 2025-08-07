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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX2UC5YL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIFWegWe1dWbMGQn9%2F27A%2B2moJQIznNrtWjGo1NDS6CSZAiAIn4WZ4yQZf6EgkZQMD0DWUQa%2F5yggkxK%2FlqRlYs%2FmgyqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvoqWPndR2GGptd57KtwDXTls9JTyaQwTa%2FMfA9t1MHQbJjGZe8r3XNZ8Q26DR2nvYqQ%2FyIvKFYUJhLv7F%2BtdjJgXMhYZWR%2FNz7UbnWW70x67UQWlTyemc%2BKjQDLN5hL8ClNVSWd87PhILYzZyEm70rWxEwDNiaJJ6dI%2FlgEyfvoS1TimfR2aCGUNjKjHqfNwAdUMfVqVDr2gJC0M2u2oOe8Dcr9GaXao%2BgiVK3U7iC3DyM%2BOQekHKdjls%2FWrRZ4H7hLcsAfirmWNtpQ5HU6bb0GJWHOoc89LSVQpPPDd2eAjUi3T0fCo0soz0mE18hugWQauhD17n%2FB3d8IL496sc3dPuxotKuitELD2pNLfqOoSEmct8q6Lu36HNC0GalmHwi7XwgoSM1%2BWlUlwrCpOXY1Sdcw4QFiVoqmVzNsRMxldVTWapkRTFa3FuaBhdEVUtKUED9QvgWXUQZStOtHlsr4W2uYirjBQ6M95rsDGaF9ZHXvuCKGVzDWWYh8ipdiixSy1edwAf2IY6eVZTZN%2FxE8LoLj6bX8ybbI6RhjvlK%2BUJjiiHV8rO6daPwz5MSOVok8aFImHvy%2FMAVuVxOAI4Qb7gGeFXhMDX1ssx%2F7PLzdtSYGYhp4XinTpRZfPE6o5Xl6HD5EkDKY2IhYwntXSxAY6pgGy%2F5tRMvJ%2B7XRedDKdMM71VJ%2F0gGqBJHkdaE7EXCGfm6hHCqH52w2xJFF3GRkKTZrCVMrpg9Nbga8LTYymm8yZ4B%2F7KkR5lBOlfaJm5iy%2BINx5R77sp2Q78kltEWGhlvMvQVeL%2BQHrhfeyZJRoX%2BxajSlYAtlI2JVbXsfNz2%2FmZcueWxcslShqXKiugs14Jr3dH0Ry1Outo1q5XY%2BNkcKo2uMpD%2Bwc&X-Amz-Signature=39b5e9b6c9a4c2b53288372141e39c06498da72cdda61b20274d16e4f8d17e2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX2UC5YL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIFWegWe1dWbMGQn9%2F27A%2B2moJQIznNrtWjGo1NDS6CSZAiAIn4WZ4yQZf6EgkZQMD0DWUQa%2F5yggkxK%2FlqRlYs%2FmgyqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvoqWPndR2GGptd57KtwDXTls9JTyaQwTa%2FMfA9t1MHQbJjGZe8r3XNZ8Q26DR2nvYqQ%2FyIvKFYUJhLv7F%2BtdjJgXMhYZWR%2FNz7UbnWW70x67UQWlTyemc%2BKjQDLN5hL8ClNVSWd87PhILYzZyEm70rWxEwDNiaJJ6dI%2FlgEyfvoS1TimfR2aCGUNjKjHqfNwAdUMfVqVDr2gJC0M2u2oOe8Dcr9GaXao%2BgiVK3U7iC3DyM%2BOQekHKdjls%2FWrRZ4H7hLcsAfirmWNtpQ5HU6bb0GJWHOoc89LSVQpPPDd2eAjUi3T0fCo0soz0mE18hugWQauhD17n%2FB3d8IL496sc3dPuxotKuitELD2pNLfqOoSEmct8q6Lu36HNC0GalmHwi7XwgoSM1%2BWlUlwrCpOXY1Sdcw4QFiVoqmVzNsRMxldVTWapkRTFa3FuaBhdEVUtKUED9QvgWXUQZStOtHlsr4W2uYirjBQ6M95rsDGaF9ZHXvuCKGVzDWWYh8ipdiixSy1edwAf2IY6eVZTZN%2FxE8LoLj6bX8ybbI6RhjvlK%2BUJjiiHV8rO6daPwz5MSOVok8aFImHvy%2FMAVuVxOAI4Qb7gGeFXhMDX1ssx%2F7PLzdtSYGYhp4XinTpRZfPE6o5Xl6HD5EkDKY2IhYwntXSxAY6pgGy%2F5tRMvJ%2B7XRedDKdMM71VJ%2F0gGqBJHkdaE7EXCGfm6hHCqH52w2xJFF3GRkKTZrCVMrpg9Nbga8LTYymm8yZ4B%2F7KkR5lBOlfaJm5iy%2BINx5R77sp2Q78kltEWGhlvMvQVeL%2BQHrhfeyZJRoX%2BxajSlYAtlI2JVbXsfNz2%2FmZcueWxcslShqXKiugs14Jr3dH0Ry1Outo1q5XY%2BNkcKo2uMpD%2Bwc&X-Amz-Signature=a4327d677a87f7e4164abb0b1688e60d47c803ab8030c1c3b3a2157b1f209a00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX2UC5YL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIFWegWe1dWbMGQn9%2F27A%2B2moJQIznNrtWjGo1NDS6CSZAiAIn4WZ4yQZf6EgkZQMD0DWUQa%2F5yggkxK%2FlqRlYs%2FmgyqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvoqWPndR2GGptd57KtwDXTls9JTyaQwTa%2FMfA9t1MHQbJjGZe8r3XNZ8Q26DR2nvYqQ%2FyIvKFYUJhLv7F%2BtdjJgXMhYZWR%2FNz7UbnWW70x67UQWlTyemc%2BKjQDLN5hL8ClNVSWd87PhILYzZyEm70rWxEwDNiaJJ6dI%2FlgEyfvoS1TimfR2aCGUNjKjHqfNwAdUMfVqVDr2gJC0M2u2oOe8Dcr9GaXao%2BgiVK3U7iC3DyM%2BOQekHKdjls%2FWrRZ4H7hLcsAfirmWNtpQ5HU6bb0GJWHOoc89LSVQpPPDd2eAjUi3T0fCo0soz0mE18hugWQauhD17n%2FB3d8IL496sc3dPuxotKuitELD2pNLfqOoSEmct8q6Lu36HNC0GalmHwi7XwgoSM1%2BWlUlwrCpOXY1Sdcw4QFiVoqmVzNsRMxldVTWapkRTFa3FuaBhdEVUtKUED9QvgWXUQZStOtHlsr4W2uYirjBQ6M95rsDGaF9ZHXvuCKGVzDWWYh8ipdiixSy1edwAf2IY6eVZTZN%2FxE8LoLj6bX8ybbI6RhjvlK%2BUJjiiHV8rO6daPwz5MSOVok8aFImHvy%2FMAVuVxOAI4Qb7gGeFXhMDX1ssx%2F7PLzdtSYGYhp4XinTpRZfPE6o5Xl6HD5EkDKY2IhYwntXSxAY6pgGy%2F5tRMvJ%2B7XRedDKdMM71VJ%2F0gGqBJHkdaE7EXCGfm6hHCqH52w2xJFF3GRkKTZrCVMrpg9Nbga8LTYymm8yZ4B%2F7KkR5lBOlfaJm5iy%2BINx5R77sp2Q78kltEWGhlvMvQVeL%2BQHrhfeyZJRoX%2BxajSlYAtlI2JVbXsfNz2%2FmZcueWxcslShqXKiugs14Jr3dH0Ry1Outo1q5XY%2BNkcKo2uMpD%2Bwc&X-Amz-Signature=dbe7454738d83461e834aa962df88d0a256eba00d138ee4641281f21c42e54ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AUPPMVH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIDsNNn0LCzA4HCImT3YXsFfr6z7NDltYXocYyWOt13rgAiEA5A4wW5Vm6ChFLRqfFi0DMqf%2BCNtmhR%2FZHOX5ThmPftQqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyyYbtI%2FFxUjeXfLCrcAxK17MoI1STqpF%2B4UkSeXdE%2FqbVZhP8NSXIw9jvjyeZGvbUBhcvOG%2BH3gOmJfkyFsvL8ayFWUtOMt1oLQUBuseeK0V9LBtM%2FAyjeM55PbVy89kjmoQ%2Bye4Sp%2F4S8MisTWKhohTWDgzNtzZCHZakO5Xe8lh%2BlfJ8jmS517xRpGiIJXvXf%2FnWvgGR%2BajnhF6yoWgh5Phz8TjoocUwxpBfWV9E8pW55%2FvyqnEki%2B1fWULvumQyLMsD6cOJMMWjDhgJQgYJeGjXAb10dvNPCqPt%2BJFTfc4Fm8tn3SbfHPGMkji193bkEFXv%2F7Hzf3Kd0TBApRNn6sLf9Q3QhEvPRNIuBHuveLuIE41zAkTD7wSPQHJ3ktfuffrUYwfoe8slEkG%2FdH3gKiL1rK4Bk0MKfysvnfVWhJA13udmb8KeOJsKVHB9Rl1L23VGCqelgkQqo11DHGEkOefaJmfcDlbyJTZ6JPGW1IB9kNGiGh8MO2HJOkBHVR53pNH402CxIm2nTfODz9LOp%2FXvm1JXlVsENFbawT9xrVSysetm4h8G%2Bcv7bqW4%2FfXAQkPGTqskdpvY9bbWipwdzeJE%2BlT7W5hcAAlSIGRs8fre1MLGa6mx55AVe0CnsyQDhDnZbXPfAdKq%2BMIvU0sQGOqUBdFC0KsHj%2F3vfk%2FxVnrR1VV5yZrVkq%2B4q0x2j%2FVxIhVzbmDK7zs4rXl9rZG23poqEr3VsxfXipr4Z%2FfBXTo12GI0rGXx%2B5UJcnAoDora%2FSyVgFoP6PhOuilRdAp2PUiYgaA6L1nxWm2a28CfNn1u15wi0ulHYX9dUTBWD%2FaRw3SaLXy%2F9tNTFFVykM2lQ8C6Ks6da2oC6vgWD9wFHvMt8nVKPoROo&X-Amz-Signature=881a399b488abd2a3a57872472e3c64d2d7ccd26947c5f699eb0ed699fb0a4f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IGN47YS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCf0M0HnPM4JDzLQwJNlbOGSSIuWZEUKpiPBVK%2FKVcdTgIgP15Nef4hZxaS%2BEnN7vTDuKuDV4RFTFOueyLyMfSGo%2BcqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgkXu%2Bs5tnpOuES0CrcA3NmLmLq0V0xpAqdI2xRe31Zw%2Fncsc6%2FN58aAmAcRTvkrjFP6%2FZ9BRnywJ7OuEPD1kh5GiWy6LIuUiqLZU7Rq4qUKyxCObC0HEYMr3s%2BHCIBttHs2ngSCplAQwGKHAWlhbXPXFt7B3702LzNMKpHkto8U2X9pvxNhXMBtRNjTLz6q6B2gpD%2BC6DpE%2Bk%2Brp5L5uXnpWAdbWJW463vuyDpXWmBhDA0GBeofPLJpZdva9XtXClC0%2F6KvIJO9UsqsnYsbfQBEJ1TRz28ZNDtYx8BgBa74SjK24LBWaWb6o5WpbcNvu9uspWhEq53VZw26YmG7ZCllIVcj1Q4bzmSTVodko8J8aLo2O95b8iI8%2FDf%2BvKvd%2B63TZQST9iM9p4M1eDOvAIRmJ%2BCeVm%2BGraKxxrT3a6X4Rg%2Fhx2UbelyvxZAgg8%2Bxoq43wzd6s7kHgEoDLL3dCBQQsqUeawJjmPU5Rx2aa3IHS3sVnJaRMUI2CbbkASglP%2FGzZSwMVaR44OXEEEu%2Ft9LGkfWxrGGgN4KFTpJBhZTSLO9CpMcsMtWt2vNfL1orc%2FjoidIyxIarqrrEWna08bxfM1dw3oHCJ7S3vawwFssyS5jnaiBK6PRq4cE3c9ooSdurjoha9x4H8cCMKPU0sQGOqUBZKcNDXzZDkPOKfuKMyzx8VzJML2uKRXYmPDP6amx64FskUBNDDR1XseswrSwx%2By4JH17OqDU3ERKclpubg7NwA%2BnFiBYIA3OL9n%2Bp8AWslb9M4h4PVfRlQTShS6dMew2N8AjNtD83PEoxE9mCQP1PglIETvim%2Bn5Zcm8OSeMIo2g9jqXloui6I7WB7XzqLUMMRT9dn1AqJnA2EXm4TgAM7k6AIpA&X-Amz-Signature=2af1774f808d828b383a07d3cc2419b47447e4d9042b77671afa3bc41d201263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX2UC5YL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIFWegWe1dWbMGQn9%2F27A%2B2moJQIznNrtWjGo1NDS6CSZAiAIn4WZ4yQZf6EgkZQMD0DWUQa%2F5yggkxK%2FlqRlYs%2FmgyqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvoqWPndR2GGptd57KtwDXTls9JTyaQwTa%2FMfA9t1MHQbJjGZe8r3XNZ8Q26DR2nvYqQ%2FyIvKFYUJhLv7F%2BtdjJgXMhYZWR%2FNz7UbnWW70x67UQWlTyemc%2BKjQDLN5hL8ClNVSWd87PhILYzZyEm70rWxEwDNiaJJ6dI%2FlgEyfvoS1TimfR2aCGUNjKjHqfNwAdUMfVqVDr2gJC0M2u2oOe8Dcr9GaXao%2BgiVK3U7iC3DyM%2BOQekHKdjls%2FWrRZ4H7hLcsAfirmWNtpQ5HU6bb0GJWHOoc89LSVQpPPDd2eAjUi3T0fCo0soz0mE18hugWQauhD17n%2FB3d8IL496sc3dPuxotKuitELD2pNLfqOoSEmct8q6Lu36HNC0GalmHwi7XwgoSM1%2BWlUlwrCpOXY1Sdcw4QFiVoqmVzNsRMxldVTWapkRTFa3FuaBhdEVUtKUED9QvgWXUQZStOtHlsr4W2uYirjBQ6M95rsDGaF9ZHXvuCKGVzDWWYh8ipdiixSy1edwAf2IY6eVZTZN%2FxE8LoLj6bX8ybbI6RhjvlK%2BUJjiiHV8rO6daPwz5MSOVok8aFImHvy%2FMAVuVxOAI4Qb7gGeFXhMDX1ssx%2F7PLzdtSYGYhp4XinTpRZfPE6o5Xl6HD5EkDKY2IhYwntXSxAY6pgGy%2F5tRMvJ%2B7XRedDKdMM71VJ%2F0gGqBJHkdaE7EXCGfm6hHCqH52w2xJFF3GRkKTZrCVMrpg9Nbga8LTYymm8yZ4B%2F7KkR5lBOlfaJm5iy%2BINx5R77sp2Q78kltEWGhlvMvQVeL%2BQHrhfeyZJRoX%2BxajSlYAtlI2JVbXsfNz2%2FmZcueWxcslShqXKiugs14Jr3dH0Ry1Outo1q5XY%2BNkcKo2uMpD%2Bwc&X-Amz-Signature=3db4e7ae4816153058b30f39417a9dc071a4905246b547cf94428008a470bf86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
