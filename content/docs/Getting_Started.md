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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAVGUCVP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDH4hQGRr%2FVnPGCXsZsM5j30oTL1UL3dPOMntpaxEFJSwIgJeLmb5ssHc5DrkpPMps7Fdwi3qXh4aqpc9JCt2HTSxUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDMa7c2i2tFEMr59okyrcAxv3tVmqkDGFhrqL1kpkfO66sI0lWik2fh8m5LRpdQi1Vd6Px1MGY4ghFWjdDiAJtvuPOk7i3UF72mjDexVWniMHOdEk0GyYb5iTEHr3fynBqJJ0ixQ3%2Bms1XumKYntb610YzQFRJktUtCoM7bZS28RYcJagYtBGe8heCc%2FJBd2pSCJ4tXddVOnyQ%2FsVGSZQoI1druRG74F9W2hRUeoIBQXu7zLzoyWJjvEb34aEjCmdfWo%2Fde3qqH%2FRLDcYZJioG2rEWAlvgqgAF%2Fkn659nnH9lXXBNvdqRrVxlQCk%2B3e8M2V7%2BSw%2FLk6WrjXaSZ5941Xfb2GkqRgEJigVHZl9KbE1Aew6IvjQ%2B4SHobENYjx%2BtNOJDG8NUminfNLc9sUfNHReX92DAjxgnmllfNtOxYI9sXwKJNQ0Uy6vxemX%2BnmThTLucAvRdgYdIp1gAekXhMSpvR1UiTAFv9cQzSJqHpSPiU9KNv%2BBBz5a4rOzdPR00DEVzO33ibOiF390009O8rf0LeeBl%2F9Hn27ez7ceaJeYWYiMEjK4oR18sZ%2FVt60G1z4wtIbMPQsBXHyz7l8Uw0nm4tx%2FfxK6oszms1Luj7nxer3RVPTHzmXNZvmku%2F4uSzBfw5xXOSbKAQkdDMJaHjsQGOqUB%2BQSNLbHWlFoF7O3w0a8z1bvCmyGThqRtlkGCUkyq8JjdMIdCYPuUhhN0nNWtZ1IdfNBC0%2B3fyKuDKGb0pqMR2rnPgWtdrcHVxUqM2h8CA%2FZYz4R4xqur04rPOtoppIn5mXsNdF%2FJklvS9Q1k51zI3o8Dp1Ktoql4OeFrwiSYVqnkPADfd7iRLIHSOuGBHjOZoCujn8b4jBHmZHo2zJUVSEQMhPp9&X-Amz-Signature=50dec00a3a0f73e971991e87cd722e9b58910be5d0fbc5c41d134a3d06d22b76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAVGUCVP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDH4hQGRr%2FVnPGCXsZsM5j30oTL1UL3dPOMntpaxEFJSwIgJeLmb5ssHc5DrkpPMps7Fdwi3qXh4aqpc9JCt2HTSxUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDMa7c2i2tFEMr59okyrcAxv3tVmqkDGFhrqL1kpkfO66sI0lWik2fh8m5LRpdQi1Vd6Px1MGY4ghFWjdDiAJtvuPOk7i3UF72mjDexVWniMHOdEk0GyYb5iTEHr3fynBqJJ0ixQ3%2Bms1XumKYntb610YzQFRJktUtCoM7bZS28RYcJagYtBGe8heCc%2FJBd2pSCJ4tXddVOnyQ%2FsVGSZQoI1druRG74F9W2hRUeoIBQXu7zLzoyWJjvEb34aEjCmdfWo%2Fde3qqH%2FRLDcYZJioG2rEWAlvgqgAF%2Fkn659nnH9lXXBNvdqRrVxlQCk%2B3e8M2V7%2BSw%2FLk6WrjXaSZ5941Xfb2GkqRgEJigVHZl9KbE1Aew6IvjQ%2B4SHobENYjx%2BtNOJDG8NUminfNLc9sUfNHReX92DAjxgnmllfNtOxYI9sXwKJNQ0Uy6vxemX%2BnmThTLucAvRdgYdIp1gAekXhMSpvR1UiTAFv9cQzSJqHpSPiU9KNv%2BBBz5a4rOzdPR00DEVzO33ibOiF390009O8rf0LeeBl%2F9Hn27ez7ceaJeYWYiMEjK4oR18sZ%2FVt60G1z4wtIbMPQsBXHyz7l8Uw0nm4tx%2FfxK6oszms1Luj7nxer3RVPTHzmXNZvmku%2F4uSzBfw5xXOSbKAQkdDMJaHjsQGOqUB%2BQSNLbHWlFoF7O3w0a8z1bvCmyGThqRtlkGCUkyq8JjdMIdCYPuUhhN0nNWtZ1IdfNBC0%2B3fyKuDKGb0pqMR2rnPgWtdrcHVxUqM2h8CA%2FZYz4R4xqur04rPOtoppIn5mXsNdF%2FJklvS9Q1k51zI3o8Dp1Ktoql4OeFrwiSYVqnkPADfd7iRLIHSOuGBHjOZoCujn8b4jBHmZHo2zJUVSEQMhPp9&X-Amz-Signature=fed958f76233de414f8690613aa7557bfd0afc870aa734625b33b11739776725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAVGUCVP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDH4hQGRr%2FVnPGCXsZsM5j30oTL1UL3dPOMntpaxEFJSwIgJeLmb5ssHc5DrkpPMps7Fdwi3qXh4aqpc9JCt2HTSxUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDMa7c2i2tFEMr59okyrcAxv3tVmqkDGFhrqL1kpkfO66sI0lWik2fh8m5LRpdQi1Vd6Px1MGY4ghFWjdDiAJtvuPOk7i3UF72mjDexVWniMHOdEk0GyYb5iTEHr3fynBqJJ0ixQ3%2Bms1XumKYntb610YzQFRJktUtCoM7bZS28RYcJagYtBGe8heCc%2FJBd2pSCJ4tXddVOnyQ%2FsVGSZQoI1druRG74F9W2hRUeoIBQXu7zLzoyWJjvEb34aEjCmdfWo%2Fde3qqH%2FRLDcYZJioG2rEWAlvgqgAF%2Fkn659nnH9lXXBNvdqRrVxlQCk%2B3e8M2V7%2BSw%2FLk6WrjXaSZ5941Xfb2GkqRgEJigVHZl9KbE1Aew6IvjQ%2B4SHobENYjx%2BtNOJDG8NUminfNLc9sUfNHReX92DAjxgnmllfNtOxYI9sXwKJNQ0Uy6vxemX%2BnmThTLucAvRdgYdIp1gAekXhMSpvR1UiTAFv9cQzSJqHpSPiU9KNv%2BBBz5a4rOzdPR00DEVzO33ibOiF390009O8rf0LeeBl%2F9Hn27ez7ceaJeYWYiMEjK4oR18sZ%2FVt60G1z4wtIbMPQsBXHyz7l8Uw0nm4tx%2FfxK6oszms1Luj7nxer3RVPTHzmXNZvmku%2F4uSzBfw5xXOSbKAQkdDMJaHjsQGOqUB%2BQSNLbHWlFoF7O3w0a8z1bvCmyGThqRtlkGCUkyq8JjdMIdCYPuUhhN0nNWtZ1IdfNBC0%2B3fyKuDKGb0pqMR2rnPgWtdrcHVxUqM2h8CA%2FZYz4R4xqur04rPOtoppIn5mXsNdF%2FJklvS9Q1k51zI3o8Dp1Ktoql4OeFrwiSYVqnkPADfd7iRLIHSOuGBHjOZoCujn8b4jBHmZHo2zJUVSEQMhPp9&X-Amz-Signature=906174dc8735b392eccfdcc2ab1d5decf93ec2dcd9a9aa48fad3112c6e23913d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q3AFWTI%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCldz%2FyDjAdNxMr%2BrM7htYiMUQ8PVroXKRPLbtz2fDxMwIgd8X3yHHs15mF7KoXdJSaVQalxBvCBqYxSOZasa9F0%2F4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFpdYfCzA2gec6jzvCrcA%2B40HwvJz2LRzViZf3aePU9tgzGSIFnrKuwrpfhc9chyQhHh%2FdnG%2FjmXfEtH03kug0fNvTB7bOwccpw%2B%2BHglL69lPPXGooZcxnD6JPPDTuHtfrViRFFrXAA1LH9lRXUEzFlxJ87rCpEvNd6%2BSKRZ8OrN%2BSMYoxxnBXuacgDpNYUz%2FPjj8To8NId%2BLL9VscAKKDAzSm4nIpUqG2pxqVlOMRNl26%2BX%2B%2FABEP6VsnqAcmIxtFkRcVOsMri6OpOS6F85xvUzQ9he%2BADNrlhdzzziwT5RTMGvCtkqsKnkl3cF4RvEQS2ALY2mEofRwTKE9BQ6p%2BQnrKJsF2pV%2B31m2XTXql5CsrMI2D%2Bw5BdSKt3o68hAUUpGZTQTN%2FQJlX0mFpBgAiU%2BpN3qj5TJXSiXn3zYTzaLvfnACg2dscvoYMUcGt7q3bKvpnaQ6bOCuezl82CqqCvRvXwSx7DBRVo%2BeEJupwLnUmkZH5jOJrw0SiaYtPJKC8BFfnyR0qI%2FVsWleCpxu0ftxwljdZywgjVyVqomt9blqilEN3L%2FcpTNoClUhatVf0lmVuWBgdWxEA9JNlFn8%2FPK81DXGO19qG08Ws5LIlB39iHrO8bXT0OnPOEgReWfGmwTGxOuvORa70H3MMCGjsQGOqUBd3bGCbx3T7JJ%2F5yxlqmBSk4kUSAKuXMbCN7CxkOhaC4hh9EwQhHVF%2Bj2VUzFfjbSaMuo6jKKF2dqDs2%2Bbiw3iY0SrsMRQjUTC9DyxvRqVzC4WPWL2pi6APdGUGaUzAZ%2FBU4RJ206%2BV%2BlpAp9UVBgJO3NGl%2BsYgqZQ83QaQnh7kxNXU9W7VJJKjp86XHX4YPwUmQ1IYKShHh%2F70158iAP98czSLUR&X-Amz-Signature=8b7012483d9005c5b703d8da3abde5e2990646b58e4de18dd41d19592a7f37f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRNVFHXB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIEmRraTMxBcMhF8v8Ucnbu7Ec%2FtSqrsxwB0xlG4ypfvfAiASFsVUUyEcMv5sK6tL0P02qxtSk949BuoENgmWRE6ggyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM%2FQCNFc1WII5g4fHwKtwDS32ovYxBUa%2BN3yIptZH3dkgk%2BNRLAvrqgz%2F0QE7zy9DPXuy7Ga%2BjyoAU7V8qs18d7iuXnUQDRZcST%2BYMNkqUXTHrp2En7tcdPcqspdUxJHVCUqHSjIFGQTAHU0BjmgjGssJd0%2FRy%2B1u0nNLhqmHen2kAvfhnIY%2Fasi6%2BA8AnRLqaTC4aXjYCsGSjECrXt8wlAaY3EE3arkSeO38Pln6ixINO8JRhoDPG6hdwj%2BbGSb71EaYBCwEbLAKZZWFGvYmCUoZzllJspHs%2FQZI3iM62RneqCkHl8P233KN7IrIM1coFDh1nApuMiv6z72y%2BrWAqsWfF1VBmXHJJ68JL5pWsT52zw4Ytf%2BkL8kUrZoBe9V3h75NiJj9HE9IS0mKOtBhJEJZlgkKsw7ZNm2qB%2FOPKwhSl5EowDUbaeEJG4EsnbRYsm6moNK%2FWBaqiBGkJih7s7tiegILNYnLq75dH%2FTJ7NNRvLIRpbHgHpoTrLqr%2Fvk%2F4YlRphxpdqdztKzvtWVynvmBRKrkaQFhLihOv7PVESar1Iqg0pDOvZW9Gnsn9LZZuuTIIEXkax5gbRhUHd5yH3PdcVIaIEU7h%2F7pJ1qx5Xh%2F8jFmJiq0C%2FwkcJPG5D4Y4lmHuD6AYfs07OgEw34WOxAY6pgHL5p3wo81jH0Gy4Q9F7ay0BwDyzdY9xJQXfA4KYAp7QMWc2gNOiZXAY79ATh%2Bej7JefcYYzvdGz2J%2BgWXE2fAz%2FapR%2FACiRxtbNTyXJXKA2WlrO2LR8DOnI19Vy0GPVWqHsKeMavTErHz8moW5hm%2BXB0l%2Be7Lolkcwb%2F5y1l5ANaUlVVHAiVEliFRQwi9lDPNaIdw4iRHJ%2Fg0%2Fd%2F4P65yKk91V%2FOga&X-Amz-Signature=150f70af966cec071a8aac4d1592df1a4c563f738d9430f5089067befd08afb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAVGUCVP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDH4hQGRr%2FVnPGCXsZsM5j30oTL1UL3dPOMntpaxEFJSwIgJeLmb5ssHc5DrkpPMps7Fdwi3qXh4aqpc9JCt2HTSxUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDMa7c2i2tFEMr59okyrcAxv3tVmqkDGFhrqL1kpkfO66sI0lWik2fh8m5LRpdQi1Vd6Px1MGY4ghFWjdDiAJtvuPOk7i3UF72mjDexVWniMHOdEk0GyYb5iTEHr3fynBqJJ0ixQ3%2Bms1XumKYntb610YzQFRJktUtCoM7bZS28RYcJagYtBGe8heCc%2FJBd2pSCJ4tXddVOnyQ%2FsVGSZQoI1druRG74F9W2hRUeoIBQXu7zLzoyWJjvEb34aEjCmdfWo%2Fde3qqH%2FRLDcYZJioG2rEWAlvgqgAF%2Fkn659nnH9lXXBNvdqRrVxlQCk%2B3e8M2V7%2BSw%2FLk6WrjXaSZ5941Xfb2GkqRgEJigVHZl9KbE1Aew6IvjQ%2B4SHobENYjx%2BtNOJDG8NUminfNLc9sUfNHReX92DAjxgnmllfNtOxYI9sXwKJNQ0Uy6vxemX%2BnmThTLucAvRdgYdIp1gAekXhMSpvR1UiTAFv9cQzSJqHpSPiU9KNv%2BBBz5a4rOzdPR00DEVzO33ibOiF390009O8rf0LeeBl%2F9Hn27ez7ceaJeYWYiMEjK4oR18sZ%2FVt60G1z4wtIbMPQsBXHyz7l8Uw0nm4tx%2FfxK6oszms1Luj7nxer3RVPTHzmXNZvmku%2F4uSzBfw5xXOSbKAQkdDMJaHjsQGOqUB%2BQSNLbHWlFoF7O3w0a8z1bvCmyGThqRtlkGCUkyq8JjdMIdCYPuUhhN0nNWtZ1IdfNBC0%2B3fyKuDKGb0pqMR2rnPgWtdrcHVxUqM2h8CA%2FZYz4R4xqur04rPOtoppIn5mXsNdF%2FJklvS9Q1k51zI3o8Dp1Ktoql4OeFrwiSYVqnkPADfd7iRLIHSOuGBHjOZoCujn8b4jBHmZHo2zJUVSEQMhPp9&X-Amz-Signature=6d7f782f6f735d0dc3f025b139c5af1b273aa9ea2366c854444043da9465d95a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
