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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XIKIW4W%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIFlPeVurMJvYAvK2LJgBly%2Fg0aynJtXo0%2FzPnMH%2BYdA%2BAiEAkUfjRdMpg%2FhMzC2Z%2F1iFMoBzqVQ7J8SXvDb01DZcSf4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDAfFKIvdlVACkpcJTSrcA7Y2AFICS7lUO%2B51fQHm6953RNcdEI1%2BZkHJRKp2cuegR5aZRIA%2BkJRK5mR6JEcwbJvaUqveVpNkPA4oMl%2BRnAy42mJSEyLrJnfcETWIFoTF3GXK3401JbpxpMausq6tKUpaki%2F5ZC0hZ9kZQOcFUGStsD%2FPXyJJd%2BZGyMDa2na%2B9Vu6rt%2Fwgl2apf8OoJ9ffqp%2FO3swx%2FBGM%2Bse6cTRgN7Fu99cKaWPlQOaUqL6WDVADS9bZfAvSsbWBaniDEU0zarRlKVywRfjmwpnXfRWVV8Zs733YUxmm3%2Brmao0vHm5sDkzKytItNN%2BqCMKH8ZQyUcwegfZobOZuhDINQiDnMKx5LY%2BBplEKuIwZMDLbUsdR52%2BEV935iylJ%2BWnEi%2F2M6RJI1vgD%2FOmhvAnKqTKy6DP1dN7g1C5rydX5gRSP5flealC1E9KEbGfCx6UNS3JU%2F2mdDLqlaVt25jl5F1TyS5TMI8BzUph1YnOH%2Flf4clM94rUfvX68XjhlIBVkVl4m2N0k39Kp3IFMVQmYFCcP5ou1R96PcgpUl%2BIB2CId3eXASYn78fDa7GZCsDGQqkA4cZRq3po2XiyzaM3SrelSxsPuwiErH%2F5H6C3rXauSmAWtZCD66s9iMY1j7AUMPGNp8MGOqUBgGlgRSk8d2driJqRHBMvaf5l2uDNE5cUJQtCPiX7JbNcd55E1XJEltAZb46RXjEFxA88p3%2BeAA%2Fr73nmkXwChAN2NNIqWje3yYx90C0J1DdKbPB3SwOGA4z6MiyhYxtO3egurVCOdl0YQVq5UbvUXiAh6L0otipCeNyy8WSEYfvyRrzqWY5ykT%2B2A49eyS9yX%2FMVnRQ%2BV%2F4bcJFRLQwusU0%2BzSaS&X-Amz-Signature=4b921eacaaffbf17133170ec605e25ee6313e40967a9840a7584ad42c9b8be38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XIKIW4W%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIFlPeVurMJvYAvK2LJgBly%2Fg0aynJtXo0%2FzPnMH%2BYdA%2BAiEAkUfjRdMpg%2FhMzC2Z%2F1iFMoBzqVQ7J8SXvDb01DZcSf4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDAfFKIvdlVACkpcJTSrcA7Y2AFICS7lUO%2B51fQHm6953RNcdEI1%2BZkHJRKp2cuegR5aZRIA%2BkJRK5mR6JEcwbJvaUqveVpNkPA4oMl%2BRnAy42mJSEyLrJnfcETWIFoTF3GXK3401JbpxpMausq6tKUpaki%2F5ZC0hZ9kZQOcFUGStsD%2FPXyJJd%2BZGyMDa2na%2B9Vu6rt%2Fwgl2apf8OoJ9ffqp%2FO3swx%2FBGM%2Bse6cTRgN7Fu99cKaWPlQOaUqL6WDVADS9bZfAvSsbWBaniDEU0zarRlKVywRfjmwpnXfRWVV8Zs733YUxmm3%2Brmao0vHm5sDkzKytItNN%2BqCMKH8ZQyUcwegfZobOZuhDINQiDnMKx5LY%2BBplEKuIwZMDLbUsdR52%2BEV935iylJ%2BWnEi%2F2M6RJI1vgD%2FOmhvAnKqTKy6DP1dN7g1C5rydX5gRSP5flealC1E9KEbGfCx6UNS3JU%2F2mdDLqlaVt25jl5F1TyS5TMI8BzUph1YnOH%2Flf4clM94rUfvX68XjhlIBVkVl4m2N0k39Kp3IFMVQmYFCcP5ou1R96PcgpUl%2BIB2CId3eXASYn78fDa7GZCsDGQqkA4cZRq3po2XiyzaM3SrelSxsPuwiErH%2F5H6C3rXauSmAWtZCD66s9iMY1j7AUMPGNp8MGOqUBgGlgRSk8d2driJqRHBMvaf5l2uDNE5cUJQtCPiX7JbNcd55E1XJEltAZb46RXjEFxA88p3%2BeAA%2Fr73nmkXwChAN2NNIqWje3yYx90C0J1DdKbPB3SwOGA4z6MiyhYxtO3egurVCOdl0YQVq5UbvUXiAh6L0otipCeNyy8WSEYfvyRrzqWY5ykT%2B2A49eyS9yX%2FMVnRQ%2BV%2F4bcJFRLQwusU0%2BzSaS&X-Amz-Signature=9cb6db79f7844b5714f7c28b6783f7d53a8032214d1f082808c5573d4490a209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XIKIW4W%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIFlPeVurMJvYAvK2LJgBly%2Fg0aynJtXo0%2FzPnMH%2BYdA%2BAiEAkUfjRdMpg%2FhMzC2Z%2F1iFMoBzqVQ7J8SXvDb01DZcSf4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDAfFKIvdlVACkpcJTSrcA7Y2AFICS7lUO%2B51fQHm6953RNcdEI1%2BZkHJRKp2cuegR5aZRIA%2BkJRK5mR6JEcwbJvaUqveVpNkPA4oMl%2BRnAy42mJSEyLrJnfcETWIFoTF3GXK3401JbpxpMausq6tKUpaki%2F5ZC0hZ9kZQOcFUGStsD%2FPXyJJd%2BZGyMDa2na%2B9Vu6rt%2Fwgl2apf8OoJ9ffqp%2FO3swx%2FBGM%2Bse6cTRgN7Fu99cKaWPlQOaUqL6WDVADS9bZfAvSsbWBaniDEU0zarRlKVywRfjmwpnXfRWVV8Zs733YUxmm3%2Brmao0vHm5sDkzKytItNN%2BqCMKH8ZQyUcwegfZobOZuhDINQiDnMKx5LY%2BBplEKuIwZMDLbUsdR52%2BEV935iylJ%2BWnEi%2F2M6RJI1vgD%2FOmhvAnKqTKy6DP1dN7g1C5rydX5gRSP5flealC1E9KEbGfCx6UNS3JU%2F2mdDLqlaVt25jl5F1TyS5TMI8BzUph1YnOH%2Flf4clM94rUfvX68XjhlIBVkVl4m2N0k39Kp3IFMVQmYFCcP5ou1R96PcgpUl%2BIB2CId3eXASYn78fDa7GZCsDGQqkA4cZRq3po2XiyzaM3SrelSxsPuwiErH%2F5H6C3rXauSmAWtZCD66s9iMY1j7AUMPGNp8MGOqUBgGlgRSk8d2driJqRHBMvaf5l2uDNE5cUJQtCPiX7JbNcd55E1XJEltAZb46RXjEFxA88p3%2BeAA%2Fr73nmkXwChAN2NNIqWje3yYx90C0J1DdKbPB3SwOGA4z6MiyhYxtO3egurVCOdl0YQVq5UbvUXiAh6L0otipCeNyy8WSEYfvyRrzqWY5ykT%2B2A49eyS9yX%2FMVnRQ%2BV%2F4bcJFRLQwusU0%2BzSaS&X-Amz-Signature=4058f9f9317c03519673208d135b97613b4f62bdf4c6b3645fd647c75af171cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TY3WMLS%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDtctiucJ7jyzFhAjbHUOUMdluyZhdBJRG9HfxJZ5nDgwIgF3FvE0j%2FE32%2F8Majd8x9cyLmpVZEE%2FMcg5ygxyODrgQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDI6xrhcUatxtCoSpuyrcA19xH9NBffNqxN%2BTy2SBG%2BfPb6VUMQBge7dPpkgg%2Bg1iq8mWv%2BVMx5P79r1XwSZ%2FQpKzy43%2BGz0xmeG%2Fxx%2FXHNV9rxZkfknT45BtbbiIJouGX6Gb%2BJH5rqPF7Ta5UBkm3sJ%2BYlwkwXvYl3LA1MyY6SQwajCFFpE%2Feym4DsnW5HZcZaEyWvTG%2FiqEtq3wvVMvJ1YDmVDyVE%2BKVOrFEnDIswstodfFRT2ksf0J2bqxhVYoL%2FQzzDkzSRVpn97%2BlrKXR3CZEpTy4OOyMED9PkK0H7iqqaxiAdveKerlXacowsR3a9XVzPPsjXWfPjswdQrSUJsTMboDwUf9yjUOo5yMqj9CO3V5p3xgA9kuik1YnzOsSffD0HBJ8xJb1kXVvOeopxzb4wCzQptboi0yFtn0TBONnTTHCEivuN94jW%2FQ5tmaa299fYw5n97tU8A7Xx5Xf3WtIY%2FXUnMJJW7LQrXtt1YEfLn29v%2F6CFXQluxNMv%2Bd%2BPxrTRoVP0VL1jYn0FdZw0P9V6DAh8TFBcKjWajoaH8t0elof3CPO9sPc4NfMoCewmm6AKlJR7%2BFdTp0ScHlfutfDIhMjdWK9k1hB%2FZ7F6s95gmmFH49OvFm4f7YpjDmZtuWyzDs3APoUHW9MKiHp8MGOqUBYmjhKKfw83RfzGENYihQC116eSbKVVpbeaylL0Dz9pW7AZKyrmy1Y%2B4a1O0t0IAzAnRByFqRg8X3o3ST21eAwoYYeE0ZGykTIQQl%2FFBjUcchT8L0ArmXa%2FYKjw%2Buk%2F7jO2J%2BHVXjFx3Jd%2FYcJVSqQVzOj6mWRMXgDC%2FnYW33MMdFoWQwuUVOO9fA1dI%2B14%2B%2Brk9rcer%2BNveggoz%2BMhxRVeRZ%2BMsk&X-Amz-Signature=0224f786fc1030185da79d75e2ce32f843a81e38ca634d58177a683598051348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AKDKSHY%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBUdTllAUpITzIKbJyBOzV5sHNluwuM%2FWY8mvCxnlEEsAiAc23wqSblco%2BwceU883lW52b2x7T8MO13awf7SyFNeKSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMkLAmg3AhofbaOXYtKtwDPSGYi9o7yBqusqr2hDct5yuY5TbBP5eySjSbCMNDMgaI5TJZigd8LCkCof7E9Pd1byRE7B8S%2BkOqV4PZ2xRrZGOWAAb0lvQ3UMJkaiQ7CAG2wzPqGPJ1YvJ39lMPBtiPFtlmjguXgNFZRAkJDBuNhUdtJvt5aLfevMv5dAARX08noCbK9y9ou6gapKkjd9WvJADRK4BRKAeftql8%2B6sDm0nMxj%2FS5ibWleMvmGSF1jZyitEcXPmrDgTOCm9LDecrw30eCJcvlbze3U9pYdlBbUum8PYZkw%2FKo02XXxKO5FCKO8UEXl9oGrCHUql2GUk0YRJtNRXy21bSvfVyjg5MHm1ekP4%2FhsU5rQklu3oElGL2BWp%2FqdNficE%2BY89VunBzKqRbiyDs5R8yCm9KqWgmg0fLcPezi5YzSUeUCx4JCI6cLONJbx1pY3UvGbeb4mTanqONG0KO4xpE8aohBE%2BsxOw52M7vtWaAuOdBA2Q9DnUyNYIXWSAMPbXtOV1kgJFe4T2wZd4IO9oL0ux4KV0NAWkbbh5YlT1j61pQMhsCElnQ4gqW%2F%2Bggv%2Fg1YzardXK11ZyC7jZoExRka%2ByguDAjbn8jKI%2FjkGLE%2BrsMmf1r9y90PyBeRPfDfUYhxLQwtoynwwY6pgFFBPZ5YyoOOWJ5N4BZfDLHINElyb%2BHjXX4BOverB6p0Sk4KZ%2F%2B7bxrotw%2BDXcIRBjuJc%2BhHS0piKdllFDYheAmE79Sw9pHo1c0CLmgnmreGxu45xs7Vp%2F6A8HmTjMqPwMVWlzY6%2Bp7hRZNf4kxtmeZ01PUOvFDCD34gP0RSX1V5Zc7hAyoPWICPhnUM6bs7BLbi3xbaKvMl%2BCcIEB3LbaQmHRPJsUO&X-Amz-Signature=209b110028573edcc0ffb64e19c8f512d278da515019773f641ab38f41e4481d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XIKIW4W%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIFlPeVurMJvYAvK2LJgBly%2Fg0aynJtXo0%2FzPnMH%2BYdA%2BAiEAkUfjRdMpg%2FhMzC2Z%2F1iFMoBzqVQ7J8SXvDb01DZcSf4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDAfFKIvdlVACkpcJTSrcA7Y2AFICS7lUO%2B51fQHm6953RNcdEI1%2BZkHJRKp2cuegR5aZRIA%2BkJRK5mR6JEcwbJvaUqveVpNkPA4oMl%2BRnAy42mJSEyLrJnfcETWIFoTF3GXK3401JbpxpMausq6tKUpaki%2F5ZC0hZ9kZQOcFUGStsD%2FPXyJJd%2BZGyMDa2na%2B9Vu6rt%2Fwgl2apf8OoJ9ffqp%2FO3swx%2FBGM%2Bse6cTRgN7Fu99cKaWPlQOaUqL6WDVADS9bZfAvSsbWBaniDEU0zarRlKVywRfjmwpnXfRWVV8Zs733YUxmm3%2Brmao0vHm5sDkzKytItNN%2BqCMKH8ZQyUcwegfZobOZuhDINQiDnMKx5LY%2BBplEKuIwZMDLbUsdR52%2BEV935iylJ%2BWnEi%2F2M6RJI1vgD%2FOmhvAnKqTKy6DP1dN7g1C5rydX5gRSP5flealC1E9KEbGfCx6UNS3JU%2F2mdDLqlaVt25jl5F1TyS5TMI8BzUph1YnOH%2Flf4clM94rUfvX68XjhlIBVkVl4m2N0k39Kp3IFMVQmYFCcP5ou1R96PcgpUl%2BIB2CId3eXASYn78fDa7GZCsDGQqkA4cZRq3po2XiyzaM3SrelSxsPuwiErH%2F5H6C3rXauSmAWtZCD66s9iMY1j7AUMPGNp8MGOqUBgGlgRSk8d2driJqRHBMvaf5l2uDNE5cUJQtCPiX7JbNcd55E1XJEltAZb46RXjEFxA88p3%2BeAA%2Fr73nmkXwChAN2NNIqWje3yYx90C0J1DdKbPB3SwOGA4z6MiyhYxtO3egurVCOdl0YQVq5UbvUXiAh6L0otipCeNyy8WSEYfvyRrzqWY5ykT%2B2A49eyS9yX%2FMVnRQ%2BV%2F4bcJFRLQwusU0%2BzSaS&X-Amz-Signature=42b9afbdac091fb089ba48d73b6d9a40a03e6b2263933f51c11e2b962ab41818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
