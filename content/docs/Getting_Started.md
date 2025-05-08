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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGQ3WSAG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLKMw6JxDgtugaqw9Jx6a81d1uqChG9KHq6DC9T%2BQnKAiEAjBxEjJQ%2F6VFKcbT7b6yY49F6lH0x59tLQVVoHiG8xZgq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDD23AYLlvSqRQa4GGCrcAzNG3roIrg9mRfqRCb4BGGLEunGDbSJ3I2UBYEywG7eTKCrAi5s7hAJDOjZvdT7LKzB80Bt93S2t%2FXT87PIRsGCsZABdEzqE17AHDvdQkR7qHFPZTcgcd5h6mxIxl8iVYhQVWvS9sYqYcthIOpfQ8e1dqYRBFkUot1aY0r%2FRITQlkyHWzaG9W%2F61M8jHx4nxYIoaumQ8UQiIs9Uhm%2FPRB%2BTFCp%2BmOWOj86VKWO61PFfviEY5ho9xl0ULZcbm6R0xYm49n6oS2BadoYF1L4FmpIBb00I075S3B%2ByadriSzARM21%2BqThGizI5AM8MTLfX0u%2FGO7WqU%2FPB2IPzvFDgihA79TnnOHZS3WgCpBCdtflCccWFvKCady2NWA6HWDvsLvrQ98WZlFraCuBqDWzLPhIccQWZgQ8Tes1IiZOF412cEBpbcS9gVdappcHWAls7Y79PDgOEOM0RqVXaB3q%2FNzFFuBSIBixFZPyhp9OxMARNboQatMQJrZfAOdWt07BHBG3S%2F%2BFeTLl10SsMbRTMkVH14%2Fp3Fc%2FsKHedl1RI96MxbTBByxz1yps6kHX%2FsFT7K86EfhsSp13NxcUQwYX69u4hvN6P6texQI9AEt9e0kOszyfABGVEEGTx9lQNWMNP378AGOqUBBq5TffVu9dr%2B3iznqCDRYW0CiDxzeRTjamT3VF3vTwMiWJFvhH3HgE6kvM2W1Sdr8VKT6VUJlwIExxpCXzpntkCt0CARNb3Gxb05Cvh8REv8BkiYNIyCtiG2lSsHDg%2BCsa85vLlHNHLPtJbjH8WDt4YdQbVWEISkws2VHfp9doEstMNcOAb5eSW6WL8B4yMmksQFUwTHY8tAjQw9F75IskMO5%2BuL&X-Amz-Signature=2f07e211e64275f68fadf81b913eab40b30e1df058d6a890641d57283921d653&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGQ3WSAG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLKMw6JxDgtugaqw9Jx6a81d1uqChG9KHq6DC9T%2BQnKAiEAjBxEjJQ%2F6VFKcbT7b6yY49F6lH0x59tLQVVoHiG8xZgq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDD23AYLlvSqRQa4GGCrcAzNG3roIrg9mRfqRCb4BGGLEunGDbSJ3I2UBYEywG7eTKCrAi5s7hAJDOjZvdT7LKzB80Bt93S2t%2FXT87PIRsGCsZABdEzqE17AHDvdQkR7qHFPZTcgcd5h6mxIxl8iVYhQVWvS9sYqYcthIOpfQ8e1dqYRBFkUot1aY0r%2FRITQlkyHWzaG9W%2F61M8jHx4nxYIoaumQ8UQiIs9Uhm%2FPRB%2BTFCp%2BmOWOj86VKWO61PFfviEY5ho9xl0ULZcbm6R0xYm49n6oS2BadoYF1L4FmpIBb00I075S3B%2ByadriSzARM21%2BqThGizI5AM8MTLfX0u%2FGO7WqU%2FPB2IPzvFDgihA79TnnOHZS3WgCpBCdtflCccWFvKCady2NWA6HWDvsLvrQ98WZlFraCuBqDWzLPhIccQWZgQ8Tes1IiZOF412cEBpbcS9gVdappcHWAls7Y79PDgOEOM0RqVXaB3q%2FNzFFuBSIBixFZPyhp9OxMARNboQatMQJrZfAOdWt07BHBG3S%2F%2BFeTLl10SsMbRTMkVH14%2Fp3Fc%2FsKHedl1RI96MxbTBByxz1yps6kHX%2FsFT7K86EfhsSp13NxcUQwYX69u4hvN6P6texQI9AEt9e0kOszyfABGVEEGTx9lQNWMNP378AGOqUBBq5TffVu9dr%2B3iznqCDRYW0CiDxzeRTjamT3VF3vTwMiWJFvhH3HgE6kvM2W1Sdr8VKT6VUJlwIExxpCXzpntkCt0CARNb3Gxb05Cvh8REv8BkiYNIyCtiG2lSsHDg%2BCsa85vLlHNHLPtJbjH8WDt4YdQbVWEISkws2VHfp9doEstMNcOAb5eSW6WL8B4yMmksQFUwTHY8tAjQw9F75IskMO5%2BuL&X-Amz-Signature=014aeb5ed03ada2e306e83681ca2f35ee0bbe5e3d06132401cd87c01ebeaa26b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGQ3WSAG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLKMw6JxDgtugaqw9Jx6a81d1uqChG9KHq6DC9T%2BQnKAiEAjBxEjJQ%2F6VFKcbT7b6yY49F6lH0x59tLQVVoHiG8xZgq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDD23AYLlvSqRQa4GGCrcAzNG3roIrg9mRfqRCb4BGGLEunGDbSJ3I2UBYEywG7eTKCrAi5s7hAJDOjZvdT7LKzB80Bt93S2t%2FXT87PIRsGCsZABdEzqE17AHDvdQkR7qHFPZTcgcd5h6mxIxl8iVYhQVWvS9sYqYcthIOpfQ8e1dqYRBFkUot1aY0r%2FRITQlkyHWzaG9W%2F61M8jHx4nxYIoaumQ8UQiIs9Uhm%2FPRB%2BTFCp%2BmOWOj86VKWO61PFfviEY5ho9xl0ULZcbm6R0xYm49n6oS2BadoYF1L4FmpIBb00I075S3B%2ByadriSzARM21%2BqThGizI5AM8MTLfX0u%2FGO7WqU%2FPB2IPzvFDgihA79TnnOHZS3WgCpBCdtflCccWFvKCady2NWA6HWDvsLvrQ98WZlFraCuBqDWzLPhIccQWZgQ8Tes1IiZOF412cEBpbcS9gVdappcHWAls7Y79PDgOEOM0RqVXaB3q%2FNzFFuBSIBixFZPyhp9OxMARNboQatMQJrZfAOdWt07BHBG3S%2F%2BFeTLl10SsMbRTMkVH14%2Fp3Fc%2FsKHedl1RI96MxbTBByxz1yps6kHX%2FsFT7K86EfhsSp13NxcUQwYX69u4hvN6P6texQI9AEt9e0kOszyfABGVEEGTx9lQNWMNP378AGOqUBBq5TffVu9dr%2B3iznqCDRYW0CiDxzeRTjamT3VF3vTwMiWJFvhH3HgE6kvM2W1Sdr8VKT6VUJlwIExxpCXzpntkCt0CARNb3Gxb05Cvh8REv8BkiYNIyCtiG2lSsHDg%2BCsa85vLlHNHLPtJbjH8WDt4YdQbVWEISkws2VHfp9doEstMNcOAb5eSW6WL8B4yMmksQFUwTHY8tAjQw9F75IskMO5%2BuL&X-Amz-Signature=ae6939be17fe10cb2b93b5b226c2b07d78d515472517c7f89dbceb0d0fc4f77f&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WGNPQNO%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHibaA%2BOvf6ISk4ih%2FX5xQhFd0vgEWBVxVTkwbr34SaDAiEA4MHe%2B70WSfsfzm83bHbXr2KWM0abKJ5zH8jvcgRX5pgq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDN4wpufQYR5ou3DpqyrcA0%2BBxtjD1uxDtVqqRqK7P3wAOb8y5AGWNUCrWIDBwnlEqL19E2VtPs7oAKb0CZ15pqaHwy8EPKgqZpVZgRz6vm9KoFWqFocZ452Q2TcDDRBvmjSWMhcbYgQRIblPbCy1r2EDG28CDz7LzKjjosvQB0tEOO7HxOXXgltbG41C7EGxYFg3KmnRs4Z5cMJGWL917%2BSVlynU2wxDL2PGyY4OLYR7qgWOvx7Ps8nYOK41KCUvh9q85QbrmwUva93AMV0um%2F1aLZ74PiNkduJQxu5YBKALF%2FAUqOWFoPn8HuWRRa2dXfwGESEfTb16QeSPTS702yIckJfx6jivkrzSvmLeKWXqLAeCpLh6PjGlwtVyHo%2BfDJKkhX%2F%2BsMx%2FefKFj3wMFWhPUHlUN%2FYgy2AqCRJqapEX%2BBuHRYV87PrIebUXJgS94eoM07XjIOg45iLz%2F93zS%2F%2FnnUaGHHHiEV7xf2EfkCZTxAIiZ%2BX4ZQbSTYogr3Q4JCEqvgAzVT%2F5YnpeUNz5XPSSL1SWdGZ4mkE%2FgzhYQ4gBRgdu6wQUTqJ1Nb4OyHZRqRTm7%2BTyV47zLsCJ8M1XaSo%2BlzGFWgw32h9JQ3SEjgFZMYKgjRThmFyK7ftt6AoLrBGpMUHsBsZxFR60MMb478AGOqUBMnOk7R7%2BAr2cNgNGg%2BTtBS592oxaXznR44Qkm9H02uPNzuRmxU%2BvWu5E%2FDyCWndPXnh3uacTzEkNvm4IEwx2KB%2BiD5K6GxqCeSYedW4h7CpvWQfmJ27ah%2B3R0PhOacpaVGei4kA7ZmFeGaJtmENBIJYxNo4IzprmB7BvRaloRy5YYcVqoK0v43ch1iy1LeuYWg%2FVmzEtxZwVaOnYQYm81ZXHVqH6&X-Amz-Signature=77e60b574036d3ab25c8a21e80fa938700907944d68963d3f5c7886cab48f7c0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4TKMNWW%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA49VJMHoaHHA3JiEeMiUUQSk6CvTAkZioARol9%2FX7%2FQIgAd7%2FchhRuCfG3eo5TQg35jy6Lo1Ovn8aIM7OiFKPVakq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDP%2FxHdKSYytVdstu3yrcAyvQEji2piXXyRYmon1oioNSbfeADHaQdph6uDko9ijqCAZK4YvLOmSz655wU7T%2BEU%2Bzxlj2BYyGCONjvNBWgoFbShnKM4EMsUwLQ%2B9gQH9ao0yfOC5kRyAWSBwEqETMKgtK1wpHyrFcV6oErZGRIYpzWx9F0pDfqN5ljBQCxNJW33bPw1IPypgtH4oYGnNzmKX81eSyP7mVyA3wb2eREsvb7cynByMFsAesle%2FoapckKYVsFKcLsAC1GPxgLP0LzcUMXtS%2BC0%2BwLerK9jGz3xF5yPN1tJDQGbD5XcsNuV61GjEUbYhAd81O62yb%2BPLajxuAWySmSc5IvTAmPlgyorAVFuo7bInF03mW2y5C4gCg47MgE4kng%2BBqIkeSbGbogEHTvX%2FIPEYxmUekqGV38QGXfXf%2FLNz%2BJSk2AHhoAbfM5DHHuCg1fWPm66q7NcaeHhzsW3v%2BwckXudBjhdZy0xBwrf9qRgkg3CEZzj5P2F4N9E2qSKZtGNVIPnarcOZ%2BuNoWzRzpmXsMopHGyfUwmKyj78kxJg817y07Mg4OWB1jFNkSs%2BaYhNmULKNiZWFf%2BVaRkAA6FasnMKieQ0epwDDaA6pAa9NYuWcrKtDtAIfUE8QOVUtCNf%2BwddrfMJn478AGOqUBiIp0pFNliUygb4A6Uyaj8e6Txolva8q%2F1mToWcbScwn3Os4cfhlcttwP%2Bb85mAXN7mlFvykG4SOJij1bC80h%2BJoFzE%2FubtdzjEeOU9qAbpTAvk7G20w4M0nXEMd9GWvf550gwiLSscpIXVBr9WgczHqUhO4RbO8HTpZ1i5Ec%2F%2B3FrXA87cogDXlvR9nhXg1PW1jDPYPTkkpnWJVZTbOwTtVxSTfR&X-Amz-Signature=6776332e0723344c63a1adf8201bb14c78a384141e958b7d1d71eb543347e9ba&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGQ3WSAG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLKMw6JxDgtugaqw9Jx6a81d1uqChG9KHq6DC9T%2BQnKAiEAjBxEjJQ%2F6VFKcbT7b6yY49F6lH0x59tLQVVoHiG8xZgq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDD23AYLlvSqRQa4GGCrcAzNG3roIrg9mRfqRCb4BGGLEunGDbSJ3I2UBYEywG7eTKCrAi5s7hAJDOjZvdT7LKzB80Bt93S2t%2FXT87PIRsGCsZABdEzqE17AHDvdQkR7qHFPZTcgcd5h6mxIxl8iVYhQVWvS9sYqYcthIOpfQ8e1dqYRBFkUot1aY0r%2FRITQlkyHWzaG9W%2F61M8jHx4nxYIoaumQ8UQiIs9Uhm%2FPRB%2BTFCp%2BmOWOj86VKWO61PFfviEY5ho9xl0ULZcbm6R0xYm49n6oS2BadoYF1L4FmpIBb00I075S3B%2ByadriSzARM21%2BqThGizI5AM8MTLfX0u%2FGO7WqU%2FPB2IPzvFDgihA79TnnOHZS3WgCpBCdtflCccWFvKCady2NWA6HWDvsLvrQ98WZlFraCuBqDWzLPhIccQWZgQ8Tes1IiZOF412cEBpbcS9gVdappcHWAls7Y79PDgOEOM0RqVXaB3q%2FNzFFuBSIBixFZPyhp9OxMARNboQatMQJrZfAOdWt07BHBG3S%2F%2BFeTLl10SsMbRTMkVH14%2Fp3Fc%2FsKHedl1RI96MxbTBByxz1yps6kHX%2FsFT7K86EfhsSp13NxcUQwYX69u4hvN6P6texQI9AEt9e0kOszyfABGVEEGTx9lQNWMNP378AGOqUBBq5TffVu9dr%2B3iznqCDRYW0CiDxzeRTjamT3VF3vTwMiWJFvhH3HgE6kvM2W1Sdr8VKT6VUJlwIExxpCXzpntkCt0CARNb3Gxb05Cvh8REv8BkiYNIyCtiG2lSsHDg%2BCsa85vLlHNHLPtJbjH8WDt4YdQbVWEISkws2VHfp9doEstMNcOAb5eSW6WL8B4yMmksQFUwTHY8tAjQw9F75IskMO5%2BuL&X-Amz-Signature=a91b4e428004da9e13bcb005340abe7edd19d8ee59db0d067fd512324488f140&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
