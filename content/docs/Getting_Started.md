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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDOJJFG3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYxnVfqco%2BeLJmBrYZpk2e15tRuglS9oPMCHupYL5VRQIhANCcabkuvLtMHHjLShZId%2FLFEqz%2BYJ%2B51ovPZtDzCoOpKv8DCH0QABoMNjM3NDIzMTgzODA1Igz7jjnRgaxgX6hymE8q3ANGRSBIzMMVveeV6X3I0y%2Fb2rwF%2BU8uL7CsZLqF4B%2FkLu9y6AK6mA1I6%2BeZ%2BdpDV%2BcMm4FEUHs58ymVw8ZhRwoE2gatPg24vvaBtK4vApIJPYUFx7J7z3lCjzF6Urqhg4Lyb%2FazSVG%2FL9twGegTFd5b6cEyPkOFwQu%2F4PeKHNi%2BflB%2FuP8nlIszhUXxR6NwM7KDhxD0QCI6ouxHMb7PRAMJ0TZQUG4RKTOVffxYvwfPrIFNWRuOlOXhj%2BEF8KPsVR3GKMWxZ3uez6BKRieYHK%2FJi4bUqBJ0XL6HtpSAQViiYwNaWRWGQ1JSzCutMnyIGxUQ3sSuHlR9EsFjf0KgY%2BxmvqiQoZY7TRVKC7W2qH%2B%2Fz40o%2FPjkf9DJ3ADiYRu4DOvJHo1kC0O%2Bn720j4asSGBjIAMeNmHuAsU9wGZXLoZmDI2ttQ1ejZTUME54PyQGJlsEU5l9gxLrSi0xKiKuStr9E49K0A7pBGJslQ84rynkq2m8V4EnwaUYz6ICobqNmjDLhJjFdq3%2FGqt8DedhhjxaMIh3RjhZPO3uon61xh2gJzpN4qVcB%2BH%2FJANfIH4Q%2BbRLe6ANLBWr7qB2s3FY%2BTzXIEM1DShWPSWVPK2zarh0AFYEMP%2Fp8C3bIengUDCp5YrABjqkAcO4HjLfSFy5mR5287RiPUN1UQAxIVLwAoKMmTL9O4etBbCa%2FCimOvpWui3oiS81DKgeO%2Bvrxn9sOvFGHz%2BEI%2Fv9faeqpZiEXWzJEn11do2ZgU423AXmKtHlbjyY%2BmGgQP%2Bg0psrMevoUwhIR4WnHEITv5cuEY2KGOAygYMNKgHSHgdfK%2FD89ncbjspAQuUmABvXm%2B0V1IDJ5yYNm%2F%2FFkGparduZ&X-Amz-Signature=6298002c097a23367bd091fa3e19fe31fb97ad48b81ed953ad51d0e1636fbfa9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDOJJFG3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYxnVfqco%2BeLJmBrYZpk2e15tRuglS9oPMCHupYL5VRQIhANCcabkuvLtMHHjLShZId%2FLFEqz%2BYJ%2B51ovPZtDzCoOpKv8DCH0QABoMNjM3NDIzMTgzODA1Igz7jjnRgaxgX6hymE8q3ANGRSBIzMMVveeV6X3I0y%2Fb2rwF%2BU8uL7CsZLqF4B%2FkLu9y6AK6mA1I6%2BeZ%2BdpDV%2BcMm4FEUHs58ymVw8ZhRwoE2gatPg24vvaBtK4vApIJPYUFx7J7z3lCjzF6Urqhg4Lyb%2FazSVG%2FL9twGegTFd5b6cEyPkOFwQu%2F4PeKHNi%2BflB%2FuP8nlIszhUXxR6NwM7KDhxD0QCI6ouxHMb7PRAMJ0TZQUG4RKTOVffxYvwfPrIFNWRuOlOXhj%2BEF8KPsVR3GKMWxZ3uez6BKRieYHK%2FJi4bUqBJ0XL6HtpSAQViiYwNaWRWGQ1JSzCutMnyIGxUQ3sSuHlR9EsFjf0KgY%2BxmvqiQoZY7TRVKC7W2qH%2B%2Fz40o%2FPjkf9DJ3ADiYRu4DOvJHo1kC0O%2Bn720j4asSGBjIAMeNmHuAsU9wGZXLoZmDI2ttQ1ejZTUME54PyQGJlsEU5l9gxLrSi0xKiKuStr9E49K0A7pBGJslQ84rynkq2m8V4EnwaUYz6ICobqNmjDLhJjFdq3%2FGqt8DedhhjxaMIh3RjhZPO3uon61xh2gJzpN4qVcB%2BH%2FJANfIH4Q%2BbRLe6ANLBWr7qB2s3FY%2BTzXIEM1DShWPSWVPK2zarh0AFYEMP%2Fp8C3bIengUDCp5YrABjqkAcO4HjLfSFy5mR5287RiPUN1UQAxIVLwAoKMmTL9O4etBbCa%2FCimOvpWui3oiS81DKgeO%2Bvrxn9sOvFGHz%2BEI%2Fv9faeqpZiEXWzJEn11do2ZgU423AXmKtHlbjyY%2BmGgQP%2Bg0psrMevoUwhIR4WnHEITv5cuEY2KGOAygYMNKgHSHgdfK%2FD89ncbjspAQuUmABvXm%2B0V1IDJ5yYNm%2F%2FFkGparduZ&X-Amz-Signature=25e8723c48ab089bb7f9f86610856f509c2c927ddbd01197fecdca20a8976a84&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAPFELKF%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8cC1S7szObG7mBSaIJfM4gnmz2WwZ8sOdZJoZxcUTswIgJWAYVpMUDiSOc4Fb87LoXY6d%2F3XC6ZYvq4C%2BzhuDtJAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDK9%2BGN1jGBfpP8vLiCrcA%2F3GI1eGKGcKv3HOTyffruzg%2FV2O9kllU3NAv5uxIUbasV6vxkQH7nJX2A%2FmdgBL2fPmd%2FU97si6hTo3IcUvjEfkOkRbiYWnbGyPGLQS68%2Bg2xRJqv204CrrTtI25%2FpjiuPYJvtzA2l4%2F5S92866A%2BUmvUd6tdiu%2BN8cxS%2FTjO67j156xiEcwzDHtmCR2gvnes0nbVpSy%2BypuIB02SEMbnRkhTc2T1tAt%2FZclhtWyNn8n51T1VQ3CIF03PRYKMt2m%2FxWk1aVuEtAE%2BSLPCHA51js3YoXKPMheUEssrL049iJSTict2KhZKdHVHnX3YaUavn4m1n9HB9vSdzHWh%2Fn8lTZ%2BA2cjdyq2UdFuei1uZP4ta%2FkT7ACP27N07HJjKHP4hymSWT0KvNMRfeGlzDNGFuTmpRNMZcEhEKbaLLm7I7QX6OQK%2FSbfVO%2FyBMn7g6YCWKebmDbY9%2FOsuNSU0c8r1s1tYN6xha0v1W13gdeRiVKwbUEJ0g9d0677RXKGo%2FGi2Fy2n5N4KODLrfGOOCpdoU3iSCmhtGSQPynGA0qhAH24mB1JmjlvGg8nPq2CyxjySUvco7Owp28TD2%2FRQYxrUnABhOXF3m9cPVYhkFyNoEGLtSzeE22ezPLp0YHMNzkisAGOqUB92%2Fjb6NA4xTVpQqMhB6dK5oZciHfGYgHMGSlvYTPxzfL3gn2NHwJqXxjBWurFVUNxrs8tDUovovlVc5BhCrZX9%2BXRNhi3%2FWwhz5V4Iio%2FGNE2iCTfWRGjoK5XE%2FBYZXrKPbziCIrZ5krRbRGyNHuUlRmyd2%2Ftkmg2Dh8myrbVMSpplR8B8UyAKYrZtCeNRNzuxqxurOVJ6OxI5tk3qzYp6wfWNrc&X-Amz-Signature=1129d993c68164137eca96b9b443b8cff44d9733da50eae8e6bb0bd5e7ee81a6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JJIJKTY%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzDuOg%2Bo55f9dNw6j6oIPpZKcHgFwaz0clH6vHOf1LJwIgUF%2FIhMxbbll6xUIAAVeUrK8ge4Rw4b9%2FTOI%2F8WCM5%2Bkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDCbcCj7KS3kRqgPlGSrcAxNfnCdIkEGb7gAlXEVc5zghiQ%2BAVAcU3%2BqLRlDpE%2FbbaIUebjVcs93FQoL2yP1nA6oaJPoWyoBZ3EuZfmJWUQpuW0x7VgMimLRUFnw5an4a%2BoY6rcjGvgZcQA%2F83v1F5%2F7cuWxNn2AluaNI7ZPmoflkJ72dklI7JTLi9iGR65eWfVrVWWmAJ719mRU2kD3DR%2B8hqsrVwXFHPFs1jpsQqZCV7JP08dmJlC7xe0G%2Ba2CQeKa%2Fe%2FyQB4E%2BiGCh%2FW4OXD8SUiCBlrO%2FDyfdAIYYVGUWHV0hc2SloVpjwNeVEzRi1sZxuaJwNUqoI9poyI9KYcKQIGbMEhaVEvlSPcuIWMX7c86w0ZrE9PtSdUnnws70mQ%2FvTGAUqiHt1E5TyS9AMa0T%2BF5uIXZV0Kdyef6VJExjzQK32ycsa5K4WW2QQ88p%2BVCsKfcDsDVy2nIUueR0hD7u8xwKkluYh4GEmgWEh%2F1zxm7V5BljDBVgwY8tdhjNCez3r3%2Bv%2BIkYy%2B8euQf1DEXVxqP3qUg4gvfKjpQkDRHdiY3CiSXgy9tgJiaQFsvl2SlDFN5xr8OOan98A49tbq5fn3YgAA%2FCN7Vb%2FNLZhIrix%2ByAG7i4lHMHBRp1HqFNaYJ3Kdp85r0FkZghMPbkisAGOqUB4ePuGi%2BMGFJ1wCSHsvjbuds3fg%2FnbLMFnxu%2BqOU%2FwAzfyrBjowTzaYRbsNq10Ma4dX4ntBNj48Huq2adKQ%2BZC%2F4hfeF2zEQ895VXSPONxL2RvHyeECA1o0cW6fh1F%2FfU8i7bRUDzkEGK2SnD2X5%2B6pfNQ4SPcizdhrsuyPQ59YyHvp%2FdH1b82S%2FfGfuLCeCD12ROG4v17gSNFC5FrFbcPWxnHIbN&X-Amz-Signature=25778242109a9a4eae8c5a0f83997a8a81e8b16ef2e0d8735fb62980629a7f21&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDOJJFG3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYxnVfqco%2BeLJmBrYZpk2e15tRuglS9oPMCHupYL5VRQIhANCcabkuvLtMHHjLShZId%2FLFEqz%2BYJ%2B51ovPZtDzCoOpKv8DCH0QABoMNjM3NDIzMTgzODA1Igz7jjnRgaxgX6hymE8q3ANGRSBIzMMVveeV6X3I0y%2Fb2rwF%2BU8uL7CsZLqF4B%2FkLu9y6AK6mA1I6%2BeZ%2BdpDV%2BcMm4FEUHs58ymVw8ZhRwoE2gatPg24vvaBtK4vApIJPYUFx7J7z3lCjzF6Urqhg4Lyb%2FazSVG%2FL9twGegTFd5b6cEyPkOFwQu%2F4PeKHNi%2BflB%2FuP8nlIszhUXxR6NwM7KDhxD0QCI6ouxHMb7PRAMJ0TZQUG4RKTOVffxYvwfPrIFNWRuOlOXhj%2BEF8KPsVR3GKMWxZ3uez6BKRieYHK%2FJi4bUqBJ0XL6HtpSAQViiYwNaWRWGQ1JSzCutMnyIGxUQ3sSuHlR9EsFjf0KgY%2BxmvqiQoZY7TRVKC7W2qH%2B%2Fz40o%2FPjkf9DJ3ADiYRu4DOvJHo1kC0O%2Bn720j4asSGBjIAMeNmHuAsU9wGZXLoZmDI2ttQ1ejZTUME54PyQGJlsEU5l9gxLrSi0xKiKuStr9E49K0A7pBGJslQ84rynkq2m8V4EnwaUYz6ICobqNmjDLhJjFdq3%2FGqt8DedhhjxaMIh3RjhZPO3uon61xh2gJzpN4qVcB%2BH%2FJANfIH4Q%2BbRLe6ANLBWr7qB2s3FY%2BTzXIEM1DShWPSWVPK2zarh0AFYEMP%2Fp8C3bIengUDCp5YrABjqkAcO4HjLfSFy5mR5287RiPUN1UQAxIVLwAoKMmTL9O4etBbCa%2FCimOvpWui3oiS81DKgeO%2Bvrxn9sOvFGHz%2BEI%2Fv9faeqpZiEXWzJEn11do2ZgU423AXmKtHlbjyY%2BmGgQP%2Bg0psrMevoUwhIR4WnHEITv5cuEY2KGOAygYMNKgHSHgdfK%2FD89ncbjspAQuUmABvXm%2B0V1IDJ5yYNm%2F%2FFkGparduZ&X-Amz-Signature=cf98d9da6e7c94e3f7fbd68725ad9f3ebd9ec9575ea03d898a02d0c106fba059&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
