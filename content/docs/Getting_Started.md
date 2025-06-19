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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WKFVE4J%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiRyewTbyG0%2FsV83jeId62YG4bHPOyaIzmDJk34ZmbFAIgPUgxHy9tkKlCUsqfd5sbLv7RVJSnfVePIYdWz9YWhboqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpvXin9wyxIZpYRQCrcA1puZUfUySDJxx3ej80SsLxxS0YLxAY45t9PgqSOEPEMP65YFdg7S%2Bl6145Md7s6dNJ1dTj0S%2BGa%2FkAaTDTUVWXnnxU78lvg5YqIksvioxlXrRfkohQPY9R%2F%2BA4Qai2FJzIbtmcApKfS1f2tV7gr1Fbey2sE2nNv4b2ux5M5f2fz3778JQmuWowpDFlc1%2BrTrTVZd33n%2FiWZhcy6nR%2BV3XuwaDA56aKQODQGaJe6pQ1UQTqNMJngi8kJ7iFl949Z39sFLOdS8CMOJ%2FdiZ6kuY1CxtnXMMl5MIIck2lSFDqvpmUNvd169XybYXkIzQihbq3Pln3yppGfCVMzjcPcqTy91O3ZCiTiPW3TTt%2BfdEmiotnAw%2BxbM%2F3pqy3WBpMR6HYhQxMiVYK7e5SYghm8w47kGRTUHqjrCbhP%2FCg3Jl91%2FpEJyv%2FGI09Mj9hRfIqBZU2TqFWUZXs3LtnTs56P1XIqk0Q%2FQNZHFv4s2hE0qFaPy4Q6vT85qHIyJv0srKnfR5L3ewlywGeLv4Hm2vmiSBvmCXy%2FdKvgrgmBqrz7gHmzz0VKKJd9K1cESX%2F8czY%2F%2BW12Cyc%2FCPZoIyiaL7%2FyarMk0Bdr2ODH8tzjK%2BQhTrmRTdyLm5LoSP2G00aW9MOehz8IGOqUBx3LCPk2kTb186tcyc1u3rwcpCUZFKJqCeWrpvT9UFvzfbnkvyMVJbcwaZJSDXNFZSv5NzaH1DMtoX3ky%2Blkz%2BCK9slPz9DDtRTmej1orNw%2BtjZT8hkTd8Y3BUrDsuHFw8OEl4MriC6QkNzHj87FiZUYnshc0JSyVQIJyd1WW0MmpQverPgK6a%2BaU0yMztV5v%2FqRX%2FbJVL1qAVd6HeWZH78Upb%2BOo&X-Amz-Signature=ac4d59ecfb88057ba04a64b2ce430c2d8909c98933da197d286d2983ed06ae44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WKFVE4J%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiRyewTbyG0%2FsV83jeId62YG4bHPOyaIzmDJk34ZmbFAIgPUgxHy9tkKlCUsqfd5sbLv7RVJSnfVePIYdWz9YWhboqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpvXin9wyxIZpYRQCrcA1puZUfUySDJxx3ej80SsLxxS0YLxAY45t9PgqSOEPEMP65YFdg7S%2Bl6145Md7s6dNJ1dTj0S%2BGa%2FkAaTDTUVWXnnxU78lvg5YqIksvioxlXrRfkohQPY9R%2F%2BA4Qai2FJzIbtmcApKfS1f2tV7gr1Fbey2sE2nNv4b2ux5M5f2fz3778JQmuWowpDFlc1%2BrTrTVZd33n%2FiWZhcy6nR%2BV3XuwaDA56aKQODQGaJe6pQ1UQTqNMJngi8kJ7iFl949Z39sFLOdS8CMOJ%2FdiZ6kuY1CxtnXMMl5MIIck2lSFDqvpmUNvd169XybYXkIzQihbq3Pln3yppGfCVMzjcPcqTy91O3ZCiTiPW3TTt%2BfdEmiotnAw%2BxbM%2F3pqy3WBpMR6HYhQxMiVYK7e5SYghm8w47kGRTUHqjrCbhP%2FCg3Jl91%2FpEJyv%2FGI09Mj9hRfIqBZU2TqFWUZXs3LtnTs56P1XIqk0Q%2FQNZHFv4s2hE0qFaPy4Q6vT85qHIyJv0srKnfR5L3ewlywGeLv4Hm2vmiSBvmCXy%2FdKvgrgmBqrz7gHmzz0VKKJd9K1cESX%2F8czY%2F%2BW12Cyc%2FCPZoIyiaL7%2FyarMk0Bdr2ODH8tzjK%2BQhTrmRTdyLm5LoSP2G00aW9MOehz8IGOqUBx3LCPk2kTb186tcyc1u3rwcpCUZFKJqCeWrpvT9UFvzfbnkvyMVJbcwaZJSDXNFZSv5NzaH1DMtoX3ky%2Blkz%2BCK9slPz9DDtRTmej1orNw%2BtjZT8hkTd8Y3BUrDsuHFw8OEl4MriC6QkNzHj87FiZUYnshc0JSyVQIJyd1WW0MmpQverPgK6a%2BaU0yMztV5v%2FqRX%2FbJVL1qAVd6HeWZH78Upb%2BOo&X-Amz-Signature=ba5b6d78be3aa921ec57ad0f6e93dea45df6de24e37eb7d76e8ff62ce1f6cdf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WKFVE4J%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiRyewTbyG0%2FsV83jeId62YG4bHPOyaIzmDJk34ZmbFAIgPUgxHy9tkKlCUsqfd5sbLv7RVJSnfVePIYdWz9YWhboqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpvXin9wyxIZpYRQCrcA1puZUfUySDJxx3ej80SsLxxS0YLxAY45t9PgqSOEPEMP65YFdg7S%2Bl6145Md7s6dNJ1dTj0S%2BGa%2FkAaTDTUVWXnnxU78lvg5YqIksvioxlXrRfkohQPY9R%2F%2BA4Qai2FJzIbtmcApKfS1f2tV7gr1Fbey2sE2nNv4b2ux5M5f2fz3778JQmuWowpDFlc1%2BrTrTVZd33n%2FiWZhcy6nR%2BV3XuwaDA56aKQODQGaJe6pQ1UQTqNMJngi8kJ7iFl949Z39sFLOdS8CMOJ%2FdiZ6kuY1CxtnXMMl5MIIck2lSFDqvpmUNvd169XybYXkIzQihbq3Pln3yppGfCVMzjcPcqTy91O3ZCiTiPW3TTt%2BfdEmiotnAw%2BxbM%2F3pqy3WBpMR6HYhQxMiVYK7e5SYghm8w47kGRTUHqjrCbhP%2FCg3Jl91%2FpEJyv%2FGI09Mj9hRfIqBZU2TqFWUZXs3LtnTs56P1XIqk0Q%2FQNZHFv4s2hE0qFaPy4Q6vT85qHIyJv0srKnfR5L3ewlywGeLv4Hm2vmiSBvmCXy%2FdKvgrgmBqrz7gHmzz0VKKJd9K1cESX%2F8czY%2F%2BW12Cyc%2FCPZoIyiaL7%2FyarMk0Bdr2ODH8tzjK%2BQhTrmRTdyLm5LoSP2G00aW9MOehz8IGOqUBx3LCPk2kTb186tcyc1u3rwcpCUZFKJqCeWrpvT9UFvzfbnkvyMVJbcwaZJSDXNFZSv5NzaH1DMtoX3ky%2Blkz%2BCK9slPz9DDtRTmej1orNw%2BtjZT8hkTd8Y3BUrDsuHFw8OEl4MriC6QkNzHj87FiZUYnshc0JSyVQIJyd1WW0MmpQverPgK6a%2BaU0yMztV5v%2FqRX%2FbJVL1qAVd6HeWZH78Upb%2BOo&X-Amz-Signature=b44e102ec69f5aa0cfd18eceecb70c72f28b8d15e59fe83a65020cfcd127d5df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZME2JFT%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD%2FYaqdfB%2FByeoQhK2TIT%2F7%2FrceIqrsqRzviz2kX2%2BSwIhAKMxAnDa2EdsdWmxeOd1l%2Fp2oet3rT9DqiDmFBbvKtjwKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGW1XBGIaXrWiVonYq3AN2JemzwBzrCsnNo74ioq4mVLRT9x83vrZ25z072WrSU0cyxhBlL0HFQ8JqMqgqWatgFrO9z9f3Moo%2BQyO6DBjpllM2l6CHCMtv%2FcjMQURHVv86SEwYdtQ0SsLCGAzUZlrgcTaQjirqqNFTgICWGL6YQzVe%2Bk7zfif8ORK7DDdcHRNXcyZnKkOhvY6jHDxvXXelXI4FGHsFdXtvbGqhVBhZCwcYnBX5fAuMo6ecsOCOjrPUT7Qz6nEAp57rfXRewXzAgw0n%2FiV4G7jzCI1ur03%2Fb8hq91bkZvwzJJpyprBQZszHIEi%2ByBOMXSkJorPTjTRpAJ3UD2973ib0F7olCrB3l%2FflHFNMatCXMpYQA8f6nCeA0loLbk74lwoc98%2FrizzXFnEeBVND6IhGCBj2i6RDu%2FAr8FevbHu2iQXT1sjaxJFYLEZULEjxFVRPItlmv6Dc%2FNE6RPHrsaFLbM8afFDNnPV3kf33YqQWUufwWcGDeRniKSz0y54PWbN%2FtSwYVh2Qd%2Bv9C9NRlgbxA3tCNn8fASgVZdFEBww3yUaoJOAUx7mnBlZI8jYdTNquiK8NtDoWVO1iBveznJllcYSKetIeZ9fSt9evcy8t0PlTkcUOWUWNfws1Xhy01h1%2FPzClkc%2FCBjqkARJU%2BvdaKYxYep7kRWNQTpESM16B6kg2RiO7yN0CD6oQEHKm427%2FPhFJV9ZPGK1xh7%2BSH3EykBOkQ0NYRerKLWnAQPvX3nMILGSZ0KLJK3zEzXYhuq1kofxPNzylnjTmH3vaxU%2FtBXfUyvSj%2BFqD1s5el%2BAgaE9695VnL2yGzWdTpQTyNzwyM9P%2BykJPmNfj2wsTFufCBQRR042seYRjcP0bwRWv&X-Amz-Signature=8078d6f8ef6b1d495dacf955f96544e9a1c39e477f272dc6fba025df853a512a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7H6NFUN%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbjcX0M8xjYJsSj3u%2BPVbXOcKrHjo5ajKeUVGdwB3QTgIhAKvKy9S7saZHfOCQluIKF%2BBqJsbFlfeBuku24Rslg7r%2FKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymXGlaBThYVrkEGGoq3AP%2FdQcu4fNSM21bJt41VEPiQVk%2FAPlK9TH5Z49LHaTk62z%2BC4bRaSNMpi%2FotvV37WhIpyZ3EYZEwSZfpux4muUisoPJQRwu4dTxugLfOnpkMTlipJVAF9K38kW9EEncp68ZZV2sTDgljEgodyODK4dHNPT%2FZB4lr%2B4Hz647z3wPAFX1BlBqhznkJGhA5UggNijzvPJI%2BfPDOJTaGw7Wkbi6dXbPbx5Ff3Gof7pqV7%2BFtI3fBdMRhq0h8mmObN6uzqmQAYiLxyTe9yEJE4ym0RcCOSuxE9qIWmjrUKKzSBa6n%2BmwLU%2FhFf4mkbF6vqy0gUQK4deUJpJEX3vdHHMt1DwMHPhRK1V%2B1HkzhgIV1bQPRI0D04%2FXhEKTOglaK3hIbbFTKjonzeXZ7TFRjq6lCGqvP1kOapoY60fwgDVwiwpFaAHnSCLxmY2UZ09p9S3pyhjIg23nzRxjzolxOhx70ORMF84nwH%2Bma85AlYl4rG3gCpFd9hmXcR6yZiRSBGP1iu7lRkGbzTv9SdXuw%2BuKYllFlQzaCcVZkilJPR3Yu5UMzwHCH3%2BzuJJeJHWQeHatUC192kuzzx2FaMz17nL5A%2F%2FaeqZ7oTjHiynWWxhHTxE6IIvtMHz3nevlOmLHtDCQkc%2FCBjqkARWr%2BWlK1yT5IhgkTkQalRE09MQ%2F7fT0c%2BwepnfAWqc4ZvTIGIlL3nJlTJcRh2%2FfiV5Hmk%2F0QqMn4qX4TEUAoaTlil2LTaV8nkaciYIACRuDCwBmTGzLFdQrcQY8Arwe18kiKJ7DR%2FgL8YEdWgLJKRINhTvoGYkqLams772jdmghTG7jXVdufPgwewZbiNotuwpPjcIvizDbAZmLEfspT9hnyg3H&X-Amz-Signature=204a4821e3d21ea1c74cdb831a136b2a4ebb0bf7c7bdfddcb36dc4ea7f00556b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WKFVE4J%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiRyewTbyG0%2FsV83jeId62YG4bHPOyaIzmDJk34ZmbFAIgPUgxHy9tkKlCUsqfd5sbLv7RVJSnfVePIYdWz9YWhboqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpvXin9wyxIZpYRQCrcA1puZUfUySDJxx3ej80SsLxxS0YLxAY45t9PgqSOEPEMP65YFdg7S%2Bl6145Md7s6dNJ1dTj0S%2BGa%2FkAaTDTUVWXnnxU78lvg5YqIksvioxlXrRfkohQPY9R%2F%2BA4Qai2FJzIbtmcApKfS1f2tV7gr1Fbey2sE2nNv4b2ux5M5f2fz3778JQmuWowpDFlc1%2BrTrTVZd33n%2FiWZhcy6nR%2BV3XuwaDA56aKQODQGaJe6pQ1UQTqNMJngi8kJ7iFl949Z39sFLOdS8CMOJ%2FdiZ6kuY1CxtnXMMl5MIIck2lSFDqvpmUNvd169XybYXkIzQihbq3Pln3yppGfCVMzjcPcqTy91O3ZCiTiPW3TTt%2BfdEmiotnAw%2BxbM%2F3pqy3WBpMR6HYhQxMiVYK7e5SYghm8w47kGRTUHqjrCbhP%2FCg3Jl91%2FpEJyv%2FGI09Mj9hRfIqBZU2TqFWUZXs3LtnTs56P1XIqk0Q%2FQNZHFv4s2hE0qFaPy4Q6vT85qHIyJv0srKnfR5L3ewlywGeLv4Hm2vmiSBvmCXy%2FdKvgrgmBqrz7gHmzz0VKKJd9K1cESX%2F8czY%2F%2BW12Cyc%2FCPZoIyiaL7%2FyarMk0Bdr2ODH8tzjK%2BQhTrmRTdyLm5LoSP2G00aW9MOehz8IGOqUBx3LCPk2kTb186tcyc1u3rwcpCUZFKJqCeWrpvT9UFvzfbnkvyMVJbcwaZJSDXNFZSv5NzaH1DMtoX3ky%2Blkz%2BCK9slPz9DDtRTmej1orNw%2BtjZT8hkTd8Y3BUrDsuHFw8OEl4MriC6QkNzHj87FiZUYnshc0JSyVQIJyd1WW0MmpQverPgK6a%2BaU0yMztV5v%2FqRX%2FbJVL1qAVd6HeWZH78Upb%2BOo&X-Amz-Signature=b6f53d4178123016c35f7d99aae7f5ae316be99839d00e04061ba706092769f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
