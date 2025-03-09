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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRM2TRJX%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCRx5D%2FRcug%2FWn9%2F2iHMWTawayun2w%2FzTmI%2F77bmiZ20gIhAPoR%2FSMWUIE2WfCorRK5sRW4GVx6d5p7nmst6jCRpGA9Kv8DCH0QABoMNjM3NDIzMTgzODA1Igzfm3dDe4IeX61QZeoq3AMidLUQmOCnMQe8Pcu5kYOTWUH9e3FRfoTcJtGE1r%2BIHjOGg4gfJ3KG9rTBt0UrvfODfkxXNu1beUI5ButDE1g3wHVf1A5G4uFOzuFabmxsB1E%2Bw7rajhtfMtztukBrVWPIjzzm4B6HguBr0ZKy7My%2BbE8BH8flR0Q6347x73WyNKSSRU7nRoOm000eRVaMtrQe%2FfCIYS8Ze7vDIi9Jt39dwy%2FuU%2FXoFCbhcEy7U64Osuqx17hBZg%2BbeN9wfIJuzAwPyhVVMehZxlqfB2M4kILoNwCpABF%2FNCAiIkudrsHxt9lApm%2FCmHYv4uDrEZpURXYgzSr%2Ff57tbM8pRy%2FmStfsxUAVeB3wRjkvG6HdUAK21wMmyke4Ctd5GzO%2F8L0%2FiRgedY%2FVL2qSDUG3fyMuYDFfbG9PgIpYmnOBz0KzaO0CLFE%2FeVLqx4zW0PJIymLaid4yks6HEISBKY5v%2BgIkoVaV9qk2fAdhhvDD4X7eev%2BJUy0yJj8Md182LHuh4QF%2BhA1oD0YtkY%2Fzr2KQwE6AQV7kBfS6D8NB0%2BN9%2B%2FHSYEAQxkN%2FT4sX4sF2FmApoWsWO2hWkiWHQzA1Dld8NUu%2F2s280r8V1gMt3Nu5XYYKMdvCLc%2Fy3FzQm2TIHmqKizCw4be%2BBjqkATN%2BxiMWxUNY2Wam7cMMawt6oGBWZVfAhw7xBzoLJwtrd6dt45GMeHJ1RWP4uclwYyLGgS%2Fo9DGDHZiymIM6TPi1MoK%2Bt0xyQ9xjeSiCmNvJmRLEhbHzXKkey3ez4N3hqKTaLsOVVUH8IblMQ9z3L1JDb64K%2FMP8%2F2NIEyD0tiAvjTXc7hLTCMVz1kJIthGOGNg1lvftpjVpVfAGdxKgm%2FoeGVXO&X-Amz-Signature=bc021b84c6121a232d82a24d247d277da6694d58215d3779ae732ed6b9c07e8f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRM2TRJX%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCRx5D%2FRcug%2FWn9%2F2iHMWTawayun2w%2FzTmI%2F77bmiZ20gIhAPoR%2FSMWUIE2WfCorRK5sRW4GVx6d5p7nmst6jCRpGA9Kv8DCH0QABoMNjM3NDIzMTgzODA1Igzfm3dDe4IeX61QZeoq3AMidLUQmOCnMQe8Pcu5kYOTWUH9e3FRfoTcJtGE1r%2BIHjOGg4gfJ3KG9rTBt0UrvfODfkxXNu1beUI5ButDE1g3wHVf1A5G4uFOzuFabmxsB1E%2Bw7rajhtfMtztukBrVWPIjzzm4B6HguBr0ZKy7My%2BbE8BH8flR0Q6347x73WyNKSSRU7nRoOm000eRVaMtrQe%2FfCIYS8Ze7vDIi9Jt39dwy%2FuU%2FXoFCbhcEy7U64Osuqx17hBZg%2BbeN9wfIJuzAwPyhVVMehZxlqfB2M4kILoNwCpABF%2FNCAiIkudrsHxt9lApm%2FCmHYv4uDrEZpURXYgzSr%2Ff57tbM8pRy%2FmStfsxUAVeB3wRjkvG6HdUAK21wMmyke4Ctd5GzO%2F8L0%2FiRgedY%2FVL2qSDUG3fyMuYDFfbG9PgIpYmnOBz0KzaO0CLFE%2FeVLqx4zW0PJIymLaid4yks6HEISBKY5v%2BgIkoVaV9qk2fAdhhvDD4X7eev%2BJUy0yJj8Md182LHuh4QF%2BhA1oD0YtkY%2Fzr2KQwE6AQV7kBfS6D8NB0%2BN9%2B%2FHSYEAQxkN%2FT4sX4sF2FmApoWsWO2hWkiWHQzA1Dld8NUu%2F2s280r8V1gMt3Nu5XYYKMdvCLc%2Fy3FzQm2TIHmqKizCw4be%2BBjqkATN%2BxiMWxUNY2Wam7cMMawt6oGBWZVfAhw7xBzoLJwtrd6dt45GMeHJ1RWP4uclwYyLGgS%2Fo9DGDHZiymIM6TPi1MoK%2Bt0xyQ9xjeSiCmNvJmRLEhbHzXKkey3ez4N3hqKTaLsOVVUH8IblMQ9z3L1JDb64K%2FMP8%2F2NIEyD0tiAvjTXc7hLTCMVz1kJIthGOGNg1lvftpjVpVfAGdxKgm%2FoeGVXO&X-Amz-Signature=50ead3838d43745344387894fb01f445a8502cab123c1a7f021af7aba15fa18c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RAR4ABQ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIE1PeWJzF69uWYKGkmcotg7KjuunfrTaRaOf%2B1d2NBVUAiB1%2Bv1GEMP6fyMM6KWCYFdAbwPa59QkfV%2FFwjel%2B5BM1Cr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM6Kq8OfFHJKkEMyxCKtwDUAatmdBB27EfoF5yYj6xyPDHis24SbNjXGLP557qVhSUbq%2Fd5HujvqIjf%2FNYivPtL3ZgScnQdZhDiV%2BuZN8v%2BjUbDPBdVuKuS1vWaxxlRES%2FRLi4lZYgOgjaqXs%2Fo2FZsfBfBZRQ91dYDDQnoU%2B5jFNE63ejHxxxECbju%2BxZx5fCM8eBQO8ebvFo%2B3kpVOWpUfzgmS86gDRaTBiGJUl8FJcXseaYVzZZEcxR%2FbXYSAYYCC4NnUfXdvzj3MjIp83SApHvrZ2q2Y1%2BX5AyIbTaxN9HFSFzaTvB3EGlGkenK9ovrbsQu9J7gBpdvqOB8XJPVuPFV0H%2BY4BDOg4U5AKcEh1t5VH%2Fo2%2BzLIRsMlFj0P3xIu54WVL8FbxF6gYwKJnxyakswtwgUpxLs8xQHqiAHqQaQ3%2BVZs1DB4jZxmN740balEbS543IzrQ09kMAHVN%2BFSA0un6Vr1QQhgekEJYJJQJtFoGJGy35m%2BUQK1vzZx1Oua%2FfRE6k95%2BhWJ1WohIPmpzikjhog%2ByrVTFh%2FNwBfqyq%2BIATQz6ksKkxw397QjRpOkfELodiH1E%2Bfu6%2B2o01NdAhrN54H65ZFLKE%2FHcgp6xrxOH32NDlaSNwwNC3tOrPoeskAU005lMfytIw2%2BC3vgY6pgElv6KAU%2BdJi0E%2FrYFO1htjgk5AwG47hCwG3e1YgvL3h4OuHTH643Mr%2FrDVEmW9%2FXKm8l2fb3ign6nwbm5Klr%2BjXPaSqowdIzW5un4DCDpNboxkpyhcZ%2FiXj5NKr%2BnIGuZaq8dJEjJXxL0Ojn7WQViuIT6ID31aLD35db7qwJqjRwZZ9cKMSSpbmRh75j%2FuGxa3vfBzPxuN50%2Fxpn6fWNEiXFIHvDeC&X-Amz-Signature=b17ed8ee35ba03258ce85c2ee34efb51ff6bbda775444fab03952a785deb7488&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623Z7SEET%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCzb5MpYLCokrF1yqJVFYvcnoGgujABJ1DW05G8GTNcIAIhAN2f66nT7r89zcQt9ax%2Fze10xljdejZud%2Bcx0AQN4%2BSEKv8DCH0QABoMNjM3NDIzMTgzODA1Igy5FwcPCxwO6B8mol8q3AOBaj%2BebJfmAdRqXJJDA2YyI9wnW8w%2FsR6hcFVzFq4EOe20iaoC%2B7i8JM%2BU7xE4Tws1%2FDK9o6eFSxRTSrpw5NmQ9n%2Fsas9RvMsCjoXjxqfD7veHs7eBxbyHotrBry3zmo1g5RAvThw5UyA2jTn1v%2FkZZDz9JiPyVmYUCitMm8z8QT4XCx%2BXvZZSh0tEJFaYJjUqjuFeHZ487QmpD3Ym3eiBS3QTmTH2aEWPW%2Bz9RJRZeYUWHv%2FMSB%2FD1O8fI0rjMaUK%2BbcP23d2Fj6IyPLB%2BZpfbGqBuNFvzxeMolJDG4wT%2FtCmr%2F7RIQg6hr8GoE%2B%2Bwgl0B6H32InyvTSU64t0zpRWo0YMc3ckx3qzJbhc8SDNwm3ixL0TQCnwD%2BwqpEW1VmYgackZYuzYtUtOJ2WwPoeHIn%2Fghs4NBskTXuYo8sNM5Ow9A16AAV5dTlWgJQIspOrvhdn%2FMxg23sGDVU3PwPUncoq6SNrPTfEAfu5%2FAAt%2F5vWpUX4o58g9%2FzMAei3B2C9A9ZwekayW8PIo%2FDIwbyEG0ujbtu8QE2ZHUge23uXUtrexZGiJJw%2FArYTKyqfs1Vs1PyuPXRcppf8A6ukA53Ia%2Fd6i9I%2F2tIZFkKWbv%2BIRQWtzYSBuGXW6EEX4sTCT4be%2BBjqkAbW5NjAuRbgPrWzr9BcpiGkWqpLVeoxNU9vDzCbWzjMf7wuynoYpB9SFyUlltRU26CAR74clZPi%2BynxN%2FQDre01gydnxBRmKYBUwEjjOEWoFR9VNa%2FeS8vLoKxpOZEfJkjmN%2BkzvPwS7Kk5Jgh%2FwbKrBp96EvwfrtLWmvBtl1RD6jSwzVs%2B9vRRMsExx0P%2BTgXleIkGKfgEK%2FnAx2NhuZCD6vN22&X-Amz-Signature=7d6adeee3057267fe12ac1bb60689c65b912c70879a5b40444ec64fa0c4060b0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRM2TRJX%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCRx5D%2FRcug%2FWn9%2F2iHMWTawayun2w%2FzTmI%2F77bmiZ20gIhAPoR%2FSMWUIE2WfCorRK5sRW4GVx6d5p7nmst6jCRpGA9Kv8DCH0QABoMNjM3NDIzMTgzODA1Igzfm3dDe4IeX61QZeoq3AMidLUQmOCnMQe8Pcu5kYOTWUH9e3FRfoTcJtGE1r%2BIHjOGg4gfJ3KG9rTBt0UrvfODfkxXNu1beUI5ButDE1g3wHVf1A5G4uFOzuFabmxsB1E%2Bw7rajhtfMtztukBrVWPIjzzm4B6HguBr0ZKy7My%2BbE8BH8flR0Q6347x73WyNKSSRU7nRoOm000eRVaMtrQe%2FfCIYS8Ze7vDIi9Jt39dwy%2FuU%2FXoFCbhcEy7U64Osuqx17hBZg%2BbeN9wfIJuzAwPyhVVMehZxlqfB2M4kILoNwCpABF%2FNCAiIkudrsHxt9lApm%2FCmHYv4uDrEZpURXYgzSr%2Ff57tbM8pRy%2FmStfsxUAVeB3wRjkvG6HdUAK21wMmyke4Ctd5GzO%2F8L0%2FiRgedY%2FVL2qSDUG3fyMuYDFfbG9PgIpYmnOBz0KzaO0CLFE%2FeVLqx4zW0PJIymLaid4yks6HEISBKY5v%2BgIkoVaV9qk2fAdhhvDD4X7eev%2BJUy0yJj8Md182LHuh4QF%2BhA1oD0YtkY%2Fzr2KQwE6AQV7kBfS6D8NB0%2BN9%2B%2FHSYEAQxkN%2FT4sX4sF2FmApoWsWO2hWkiWHQzA1Dld8NUu%2F2s280r8V1gMt3Nu5XYYKMdvCLc%2Fy3FzQm2TIHmqKizCw4be%2BBjqkATN%2BxiMWxUNY2Wam7cMMawt6oGBWZVfAhw7xBzoLJwtrd6dt45GMeHJ1RWP4uclwYyLGgS%2Fo9DGDHZiymIM6TPi1MoK%2Bt0xyQ9xjeSiCmNvJmRLEhbHzXKkey3ez4N3hqKTaLsOVVUH8IblMQ9z3L1JDb64K%2FMP8%2F2NIEyD0tiAvjTXc7hLTCMVz1kJIthGOGNg1lvftpjVpVfAGdxKgm%2FoeGVXO&X-Amz-Signature=d81aca30bd60eba02ba28c991b5cd0b60b85471d9a33cf62c71b9b463d370563&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
