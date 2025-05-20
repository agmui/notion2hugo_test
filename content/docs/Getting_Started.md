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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHHMJBGC%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXzgeWhhW4KkmvAs92qlaqHwzVdsjA9sxkQ6rITLRtDAIgb41%2BjRZmoaWvvGbeAL2Wq0c7kecmfyrPRMu5N35gOJsqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlEIc5UexYdPnqaWSrcA7JwSr3whYWg3OozirvvcfXpcT%2FuuL6cz%2FjLjQH5VZK%2B9SAoK%2Bslsd3vrmBxw99EJCImmoBOsAoS10OZJfT3qgRce0Mc0xG1ig1Qx0ksq08ctJXOus4PNt8XlRPCM%2BorPw34t8QpF7nqrcYuZwN7wT1r8bh6uply%2BKOwjaDBwAxXKRUsbdWud8IXWczQgoUZlL15M7ZudbV1TuncFCHe1VTXiPNlauEUvNZfa8nRjxpwz1Ts3ZqjjP2sgkc3mreeAKmfwe9gNbCtG77jBlfD6%2FVO8p5fy%2F88O8PdZJifU26GG4B1UogFk25flT5ozAN0t2%2BRNLbz9pze39R2xdB%2FfUEoxaJ%2B3NNJUKW3lfe48Nj9Wz%2B1jpK%2FZR1LkjDpxDGhrDroeRlYz%2B3%2BdvwHIxvrKc%2F3GtphyNRYR9Msvbh9%2F2O5Cdf5FmGl8a5a45wxbQyAbWt9IW7fLtzG%2F2NVHlSjy37JtovNwQw8eEE6AafRq88I%2BTotVtX%2Bg566WEdOvbpGOgZNWmOuTk753ir4QYUFn0TX56mXo9Hoprgs5K3zyfuKThy%2FCNUAnYZKtontJjG5dHXWins1fHmOe30JD%2B1FoqsY6XhlA86Zgek%2FXeHw2c%2FaFilAP5AHMZ8q2%2BDHMPKXssEGOqUBHF4fj%2FgSOb4cG3eGEFopyGHe7qnoUfE3gUcTwrba22N92fpaJS6OmgqXyPpVViHaT2kcHD0SVIUYU24z6Uc3d1YfgFhvwqQtjztDMAFz%2BqwWYVUeiUYx1SecPSJ2Ys641AlOZKI5%2FrEswGnxdNGSZlfRfmf4lSr%2FuNrDg48UlZCR50pVnTNC09hC5CLT6rHD2Cg7cl6Z0caM5D0SDkd3nr%2Fhwk0T&X-Amz-Signature=b3447454a6af011ee02294c477c08b07e42ca7618c2327b88d0e25bda7b131aa&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHHMJBGC%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXzgeWhhW4KkmvAs92qlaqHwzVdsjA9sxkQ6rITLRtDAIgb41%2BjRZmoaWvvGbeAL2Wq0c7kecmfyrPRMu5N35gOJsqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlEIc5UexYdPnqaWSrcA7JwSr3whYWg3OozirvvcfXpcT%2FuuL6cz%2FjLjQH5VZK%2B9SAoK%2Bslsd3vrmBxw99EJCImmoBOsAoS10OZJfT3qgRce0Mc0xG1ig1Qx0ksq08ctJXOus4PNt8XlRPCM%2BorPw34t8QpF7nqrcYuZwN7wT1r8bh6uply%2BKOwjaDBwAxXKRUsbdWud8IXWczQgoUZlL15M7ZudbV1TuncFCHe1VTXiPNlauEUvNZfa8nRjxpwz1Ts3ZqjjP2sgkc3mreeAKmfwe9gNbCtG77jBlfD6%2FVO8p5fy%2F88O8PdZJifU26GG4B1UogFk25flT5ozAN0t2%2BRNLbz9pze39R2xdB%2FfUEoxaJ%2B3NNJUKW3lfe48Nj9Wz%2B1jpK%2FZR1LkjDpxDGhrDroeRlYz%2B3%2BdvwHIxvrKc%2F3GtphyNRYR9Msvbh9%2F2O5Cdf5FmGl8a5a45wxbQyAbWt9IW7fLtzG%2F2NVHlSjy37JtovNwQw8eEE6AafRq88I%2BTotVtX%2Bg566WEdOvbpGOgZNWmOuTk753ir4QYUFn0TX56mXo9Hoprgs5K3zyfuKThy%2FCNUAnYZKtontJjG5dHXWins1fHmOe30JD%2B1FoqsY6XhlA86Zgek%2FXeHw2c%2FaFilAP5AHMZ8q2%2BDHMPKXssEGOqUBHF4fj%2FgSOb4cG3eGEFopyGHe7qnoUfE3gUcTwrba22N92fpaJS6OmgqXyPpVViHaT2kcHD0SVIUYU24z6Uc3d1YfgFhvwqQtjztDMAFz%2BqwWYVUeiUYx1SecPSJ2Ys641AlOZKI5%2FrEswGnxdNGSZlfRfmf4lSr%2FuNrDg48UlZCR50pVnTNC09hC5CLT6rHD2Cg7cl6Z0caM5D0SDkd3nr%2Fhwk0T&X-Amz-Signature=693734556dcbbf433a5e11e88fc6c1a9ed94a61421f85d394044cba7edfe961d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHHMJBGC%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXzgeWhhW4KkmvAs92qlaqHwzVdsjA9sxkQ6rITLRtDAIgb41%2BjRZmoaWvvGbeAL2Wq0c7kecmfyrPRMu5N35gOJsqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlEIc5UexYdPnqaWSrcA7JwSr3whYWg3OozirvvcfXpcT%2FuuL6cz%2FjLjQH5VZK%2B9SAoK%2Bslsd3vrmBxw99EJCImmoBOsAoS10OZJfT3qgRce0Mc0xG1ig1Qx0ksq08ctJXOus4PNt8XlRPCM%2BorPw34t8QpF7nqrcYuZwN7wT1r8bh6uply%2BKOwjaDBwAxXKRUsbdWud8IXWczQgoUZlL15M7ZudbV1TuncFCHe1VTXiPNlauEUvNZfa8nRjxpwz1Ts3ZqjjP2sgkc3mreeAKmfwe9gNbCtG77jBlfD6%2FVO8p5fy%2F88O8PdZJifU26GG4B1UogFk25flT5ozAN0t2%2BRNLbz9pze39R2xdB%2FfUEoxaJ%2B3NNJUKW3lfe48Nj9Wz%2B1jpK%2FZR1LkjDpxDGhrDroeRlYz%2B3%2BdvwHIxvrKc%2F3GtphyNRYR9Msvbh9%2F2O5Cdf5FmGl8a5a45wxbQyAbWt9IW7fLtzG%2F2NVHlSjy37JtovNwQw8eEE6AafRq88I%2BTotVtX%2Bg566WEdOvbpGOgZNWmOuTk753ir4QYUFn0TX56mXo9Hoprgs5K3zyfuKThy%2FCNUAnYZKtontJjG5dHXWins1fHmOe30JD%2B1FoqsY6XhlA86Zgek%2FXeHw2c%2FaFilAP5AHMZ8q2%2BDHMPKXssEGOqUBHF4fj%2FgSOb4cG3eGEFopyGHe7qnoUfE3gUcTwrba22N92fpaJS6OmgqXyPpVViHaT2kcHD0SVIUYU24z6Uc3d1YfgFhvwqQtjztDMAFz%2BqwWYVUeiUYx1SecPSJ2Ys641AlOZKI5%2FrEswGnxdNGSZlfRfmf4lSr%2FuNrDg48UlZCR50pVnTNC09hC5CLT6rHD2Cg7cl6Z0caM5D0SDkd3nr%2Fhwk0T&X-Amz-Signature=7a9554b0f086dcb18be78ca16d254744c5715ea0f5277bfef47417b25e910c9c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T3CJQ5M%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FJzD3KIoXez6EgWRrRgW%2F1Xmif0qkqWG0D81fwIZvwQIhANYTUX4G2bgxbSNLYjj97sj0UyahFgR0tyDoI4VBR2HsKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrBZqLngaOJF7XceUq3ANJktMYu5S5VKPWrIttKESZbMOIu9ipn3UZeQUTMkEe3IOcjktPCGGAsoLwt5BvAMO1eLYjEtfRbddTtrohsF2Ye8B5oq51UmPsDvqyozolhKRYZJZPsXMbwfH8kaKs5QBha586YKtTaZR39zeCNaZ0SgGCOyoXPG5CZQNponT%2FzJXwePgG8iifZ8EMy67cDrUtr09gclCDv2MbdiAnd%2FYJtOklodpkokCsqi50QtErXptWtHJ4AB0TNAlwMxaKphZT%2B7l1EYEx%2B5ANfupE9r8xKylXYddsYzDbwHQGxsimZenGgJrNmEbZTLH0Q6y8JdRov6e5rWc2Dmke9fmmGzgNzut2ZseVTwudGQazYtx%2B%2FvtoyddqbV403y0RxDmplQMPKEhMN06%2BZPNRMOAO2nb5k1MPP9u5CIwizN7GwVXEzW4vRHcZ8M5kNZbA5frXx1eQQBHMWq%2Fpg1v8fkJ7PA%2Fs4imcOQ8H4nPCt7BnzOyL%2FWz2f0JSBRj1xtOdbZurkRxmFPOSpmKN743SaGzerrUdVSfYv3BntN5ejKThaCxSNWD8Q%2FRTDCHnS9sh9vvZoDDvH1Yx1aVI37iijn8pJl2Yq0JazbnIpnEnyKHDY5qZ54twECx5OxyVCaU%2FTDDdl7LBBjqkAf8QQ6gl8qUsPbeG3fvJc9HOhgT4Ocr53M4Vvln45t9VCg5cq485yP491CG3320E5R8Unbk5r6odls%2FKjxVz9LxCAmdLBez6Gh6EOb8DDSnNtGWgwxqwlBkZCDyJxtycqS3Ky0FAMZ4tV26TZzGd%2F1TOgc1DqqOmdBBH9tDzM9gZvj0kzt5r2quHAEfpqKblPneEwYq0HgKSY%2BDwF3AF6FEXKdq6&X-Amz-Signature=cf1350cbf1a6895a0b9945bc29de81b3a43c329b26458bb2a729ff4f01f9e466&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEX3WOVK%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECco3y7o715XrwO3DdgQtyN36QFXWOb7X2kHmjC%2F7j2AiBo7%2BCb0lzoLM2J8sNo90vQ%2B69o0LPVozl8KxYRY9F8eCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzUKTCeuGrl%2BYHoO%2BKtwDPDt2%2F0yCgjY0hMgL0mvaXVSDuWqhuD5BXA%2FSPRL7AgQTZ9DndyF1vlvcivGngd%2Bq7S94GoNzEdcpLS7O5IaizNd4LVuWnqroAfEcgprYV6lvkZLdr5PNVWQEQW8nDLsI4YCvsVle9NVV8lI56Bns%2BErTjHGoDXoC9RjsxS1xKoOGvoMRMOU2upuPTAHD1Rscxkh6H%2BuSgGbU%2FUDP2P6D4C08O1UA9ndBsX0JvJZVMicomxSiWz%2FH%2BRO4IqpEZWQhhaUXJGLD59bkcojkmrNngW%2Bg4Cpkypt0lrTlNl62lpwzPDxBg432coFwymRuEKaIuUmLYgX6%2BGpiW52dG5T4kGvrZuh6jjI3UeyKzeafN0zlrDgnXiCzPX2CkUXHAyFTStjMiAHaHHtqHZ3bAjW12ZCH38hzhqVAp%2FL6sxT%2BKuCeLIamuGpO8KwWXChG5n4XxvDaNvTjuIUv9S1Zo0dTUqV4qBJIvnz%2FilxeCkW8PwWBcuv4tDxWB%2B%2BqEqOKwcRuzhHlW2R%2B685yUHnRno6SzpQgPqoZfKFYGOBbRBokOP5Uinda70yHusN35q3S%2BwoGhKCLptfMHGP3oe1JBWxAOsFE8y5gk9To14klsXBHWKW8ZB9cKn89wl6U8EUw8JeywQY6pgGmEuRh%2F4%2BGgd09hu3xTH%2Bq%2FrTfc0K%2FSX5Tp7l18ZvqGEVmepLH8b2PGwsqNe94UGklyqbz1i%2B21afd2o2nZa4Q0fOHg6Pho0wXcn2sEI1sbiAiFUb8%2FIVxEIyVronHtTJ8lN%2FbDD7M0v7ZuSq2aRMzQgVjxY7xprJ7L85J2t5u45NnWikmMEvEAS3j5NAZedHTx82AkqVhv1PH%2FSSQROxr1xM2NMHN&X-Amz-Signature=b438d0750e410493e7adbf63a26ceaf85a0487e0615cc397674c523442bf6d42&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHHMJBGC%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXzgeWhhW4KkmvAs92qlaqHwzVdsjA9sxkQ6rITLRtDAIgb41%2BjRZmoaWvvGbeAL2Wq0c7kecmfyrPRMu5N35gOJsqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlEIc5UexYdPnqaWSrcA7JwSr3whYWg3OozirvvcfXpcT%2FuuL6cz%2FjLjQH5VZK%2B9SAoK%2Bslsd3vrmBxw99EJCImmoBOsAoS10OZJfT3qgRce0Mc0xG1ig1Qx0ksq08ctJXOus4PNt8XlRPCM%2BorPw34t8QpF7nqrcYuZwN7wT1r8bh6uply%2BKOwjaDBwAxXKRUsbdWud8IXWczQgoUZlL15M7ZudbV1TuncFCHe1VTXiPNlauEUvNZfa8nRjxpwz1Ts3ZqjjP2sgkc3mreeAKmfwe9gNbCtG77jBlfD6%2FVO8p5fy%2F88O8PdZJifU26GG4B1UogFk25flT5ozAN0t2%2BRNLbz9pze39R2xdB%2FfUEoxaJ%2B3NNJUKW3lfe48Nj9Wz%2B1jpK%2FZR1LkjDpxDGhrDroeRlYz%2B3%2BdvwHIxvrKc%2F3GtphyNRYR9Msvbh9%2F2O5Cdf5FmGl8a5a45wxbQyAbWt9IW7fLtzG%2F2NVHlSjy37JtovNwQw8eEE6AafRq88I%2BTotVtX%2Bg566WEdOvbpGOgZNWmOuTk753ir4QYUFn0TX56mXo9Hoprgs5K3zyfuKThy%2FCNUAnYZKtontJjG5dHXWins1fHmOe30JD%2B1FoqsY6XhlA86Zgek%2FXeHw2c%2FaFilAP5AHMZ8q2%2BDHMPKXssEGOqUBHF4fj%2FgSOb4cG3eGEFopyGHe7qnoUfE3gUcTwrba22N92fpaJS6OmgqXyPpVViHaT2kcHD0SVIUYU24z6Uc3d1YfgFhvwqQtjztDMAFz%2BqwWYVUeiUYx1SecPSJ2Ys641AlOZKI5%2FrEswGnxdNGSZlfRfmf4lSr%2FuNrDg48UlZCR50pVnTNC09hC5CLT6rHD2Cg7cl6Z0caM5D0SDkd3nr%2Fhwk0T&X-Amz-Signature=8f1f978e8cad709285d1d958f4ecebadcdbd4a22b774aae2a9030b2eafa7f177&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
