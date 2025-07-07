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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZC3D5BH%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCwTsDE4B9c3l2c%2B9%2BfsolGM5a%2F0%2Bo45omSMQrbBGkdUQIhAIhnLw%2BChoQ6C%2FQwCbX%2BimKpcQGzcNjOqXOtfZadwrnTKv8DCG8QABoMNjM3NDIzMTgzODA1IgyNewgiXbs4Caye1X4q3APHBPJvBNSnTgGBd3eibs%2F0wpj8nGY7oKlTpbaePNZxd3pVSIV9K8%2BjIbufGme7nDhx4msbljHWzNHZZNbp139S8f05YJ15uloWh8cpiVhQYC1aTD1U3l5Mc4xTxQJUnV0PqtN9qdWu0eF37IO49clrGEGBwcrPL%2FvvbYQA52U0ZsCaU4MQUKir%2BjX5DvOsj4EXblVtzrGPo5Mcs%2FQ79sXGfFzaPSSisuVX7e3s7bif%2FgCCQTERMkpaLkfa3G0RIntLgaZ8%2BE3gMuCjysSXMosr%2Bg7w2YuYVSw5E9rbxkkEoha76ZJ2mRvJEtIVyCL%2F0ASAv%2Fx5j6Itd0uPIfA80kWGy20dqXufbpviliWSrf4N63ob4gfXMr%2Fp%2BfdrV8Ja0KBEeeVQvKJqZJUuv4pQ0XAx4QoJurzSy%2FuFkP9E6%2FpQNcqzK7TRenAt6QT1Z2fOLpOREsH7pPSrKg%2Fjbl0SKJkYzGmmZT3aykcaGku%2BOJ6iKH5Wi19dTDd4R0SlwCgfcP1XC2WrCXr3UVbUKksevv9bvnTLW9xBKlMkUYcy0GbQlp9nsXUWmWmI%2BpnEfq0hIhU1CgGBQ3r23x4At9dcc4jOXYltXWkTnmX%2F38ZLLRPSPloL%2BhKJLQ1przNsbjDduq3DBjqkAc8R6Of0nUscdnypB%2BOaPd%2BUuNL%2B1IHnTHqZDTSJ7pUp75BQITsT%2BLo6mmPDfWqXm8q%2BlNrMbHfQNml2djSbDdM9QhhcjkD%2B4AmWI8GAVchC6Evsc5QUWVWm1ZcF4XrjOR8ClN4OAQpd1tPpMB2%2Bw2qjuxNWJMtUNY8tUWGsGZqaVBHzgS7HIHcWmYYGNvRaywDx%2BtJGHb8kZ9TwOiDOxDEhyJ0W&X-Amz-Signature=0fc8b77728ca21aab43c1099121813be54991a222abeaa975dbc147a897f32cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZC3D5BH%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCwTsDE4B9c3l2c%2B9%2BfsolGM5a%2F0%2Bo45omSMQrbBGkdUQIhAIhnLw%2BChoQ6C%2FQwCbX%2BimKpcQGzcNjOqXOtfZadwrnTKv8DCG8QABoMNjM3NDIzMTgzODA1IgyNewgiXbs4Caye1X4q3APHBPJvBNSnTgGBd3eibs%2F0wpj8nGY7oKlTpbaePNZxd3pVSIV9K8%2BjIbufGme7nDhx4msbljHWzNHZZNbp139S8f05YJ15uloWh8cpiVhQYC1aTD1U3l5Mc4xTxQJUnV0PqtN9qdWu0eF37IO49clrGEGBwcrPL%2FvvbYQA52U0ZsCaU4MQUKir%2BjX5DvOsj4EXblVtzrGPo5Mcs%2FQ79sXGfFzaPSSisuVX7e3s7bif%2FgCCQTERMkpaLkfa3G0RIntLgaZ8%2BE3gMuCjysSXMosr%2Bg7w2YuYVSw5E9rbxkkEoha76ZJ2mRvJEtIVyCL%2F0ASAv%2Fx5j6Itd0uPIfA80kWGy20dqXufbpviliWSrf4N63ob4gfXMr%2Fp%2BfdrV8Ja0KBEeeVQvKJqZJUuv4pQ0XAx4QoJurzSy%2FuFkP9E6%2FpQNcqzK7TRenAt6QT1Z2fOLpOREsH7pPSrKg%2Fjbl0SKJkYzGmmZT3aykcaGku%2BOJ6iKH5Wi19dTDd4R0SlwCgfcP1XC2WrCXr3UVbUKksevv9bvnTLW9xBKlMkUYcy0GbQlp9nsXUWmWmI%2BpnEfq0hIhU1CgGBQ3r23x4At9dcc4jOXYltXWkTnmX%2F38ZLLRPSPloL%2BhKJLQ1przNsbjDduq3DBjqkAc8R6Of0nUscdnypB%2BOaPd%2BUuNL%2B1IHnTHqZDTSJ7pUp75BQITsT%2BLo6mmPDfWqXm8q%2BlNrMbHfQNml2djSbDdM9QhhcjkD%2B4AmWI8GAVchC6Evsc5QUWVWm1ZcF4XrjOR8ClN4OAQpd1tPpMB2%2Bw2qjuxNWJMtUNY8tUWGsGZqaVBHzgS7HIHcWmYYGNvRaywDx%2BtJGHb8kZ9TwOiDOxDEhyJ0W&X-Amz-Signature=d6aa96de937a05569ee988095cf104189e4a2dca490685fc1c3a4cb5cfb05f3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZC3D5BH%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCwTsDE4B9c3l2c%2B9%2BfsolGM5a%2F0%2Bo45omSMQrbBGkdUQIhAIhnLw%2BChoQ6C%2FQwCbX%2BimKpcQGzcNjOqXOtfZadwrnTKv8DCG8QABoMNjM3NDIzMTgzODA1IgyNewgiXbs4Caye1X4q3APHBPJvBNSnTgGBd3eibs%2F0wpj8nGY7oKlTpbaePNZxd3pVSIV9K8%2BjIbufGme7nDhx4msbljHWzNHZZNbp139S8f05YJ15uloWh8cpiVhQYC1aTD1U3l5Mc4xTxQJUnV0PqtN9qdWu0eF37IO49clrGEGBwcrPL%2FvvbYQA52U0ZsCaU4MQUKir%2BjX5DvOsj4EXblVtzrGPo5Mcs%2FQ79sXGfFzaPSSisuVX7e3s7bif%2FgCCQTERMkpaLkfa3G0RIntLgaZ8%2BE3gMuCjysSXMosr%2Bg7w2YuYVSw5E9rbxkkEoha76ZJ2mRvJEtIVyCL%2F0ASAv%2Fx5j6Itd0uPIfA80kWGy20dqXufbpviliWSrf4N63ob4gfXMr%2Fp%2BfdrV8Ja0KBEeeVQvKJqZJUuv4pQ0XAx4QoJurzSy%2FuFkP9E6%2FpQNcqzK7TRenAt6QT1Z2fOLpOREsH7pPSrKg%2Fjbl0SKJkYzGmmZT3aykcaGku%2BOJ6iKH5Wi19dTDd4R0SlwCgfcP1XC2WrCXr3UVbUKksevv9bvnTLW9xBKlMkUYcy0GbQlp9nsXUWmWmI%2BpnEfq0hIhU1CgGBQ3r23x4At9dcc4jOXYltXWkTnmX%2F38ZLLRPSPloL%2BhKJLQ1przNsbjDduq3DBjqkAc8R6Of0nUscdnypB%2BOaPd%2BUuNL%2B1IHnTHqZDTSJ7pUp75BQITsT%2BLo6mmPDfWqXm8q%2BlNrMbHfQNml2djSbDdM9QhhcjkD%2B4AmWI8GAVchC6Evsc5QUWVWm1ZcF4XrjOR8ClN4OAQpd1tPpMB2%2Bw2qjuxNWJMtUNY8tUWGsGZqaVBHzgS7HIHcWmYYGNvRaywDx%2BtJGHb8kZ9TwOiDOxDEhyJ0W&X-Amz-Signature=d53328feff886c62da61e63c24875fd91a36bb9f6df7dac3dbbc9e13816ec62f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CGOXT2Q%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQD0y%2B83wls0A1sFcqMPJbO7hKSb6Snj6Tei%2F4fYh9oWSAIgF%2BjvX%2FlQd3MA4c2oT7qcgHCZlnxOogiKXflokYyKg60q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDEyRVhz259ULFNZ5ZircA%2FpiKh5ryI2d8G%2F3qdMA0CP65DoK%2Buc7mN0U3i%2BQ%2FhKSrAYU6z3tT1zAHj3UQSsBsdV%2BSK5YpdZHZqYxz90BmSPq6wQbtHuBCSzyy5lIu8Qm7WhjzcGfDmi52yIz%2BNnbLQ0sbTVN4BizGV4%2B%2BlDEpjasIh69MAEqPH%2Bqktmh0xmQXHGLFQoBeKzIPLGpCYd0HJCNW%2BmtH2c78wNjFb0li23Wn7SzmGtzuaJe0Z%2B20xehSi%2BiSaDJkv0Zgr0s3Kc770c1si5O5aaY8SAk7GqjUq%2Ft0voVgEMt7oWhHAEHRxOYGZ1rtJpDgtcnInZbhFU6YEzaJH1PR%2BPi25KFn50kXc8C04kDbyuaP1kBoP%2BP3yaty%2BPMcsuUyn36QZT9Vy1ZQgxBC66obe8T4%2F1WpIUKngmm26PipoORpWZqZojJPnGFE%2F5xBQjt80OU%2BOTO1vo9wOwA4gg3ybf22wHvPBreHHPTgE5kx%2BgA51Dy2UUUdhD8CsshHmjZsghYQkAGU0Rj2TA6mFwrH8exxisTakVId5UYSCq5Ik5hIo5PhvBREHjE8eczVTjVFy14Fw4EHO0qfB4AH0LNLExo6nO6huN0pWfekKC0k4SorBF6BWd2TD%2B9i5Y5yHIlUeMrLoM4MLjBrcMGOqUB8JAz2LDlVPNsP0hA9qT7Qe2rW4sr%2F61MspQ6EglxvrywX%2Fste%2FdlHrvgHUhSzCpqVqchtxpn2hnFyr7Ya9yh%2BXyDYSOieHYo29HfQwpWeyzKCRBTvXWaDdkHWyoQMCUik0mVkEOpAAXnungNsVEhtKMnKovvpnCFtiIaLGB6Jwkhy6rZVaqDbv1v3u%2Be8bmLreAwhR%2BdbqZkP9%2FNtRveR3X1J1dO&X-Amz-Signature=679d91528b4be00382763f37acaaf4176d99f2b1e07b57c245f3a249094ce508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVXHMZ3U%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIA1Se4oH74V%2FjeYuSNPdXdLdITtgufqFnlxZYkLqqcbgAiB2amMRF94B6NOW9590%2Fco0WEixw%2Bh%2BEozM%2FBP%2BFCzyfSr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMqxnHOmYKCWtAKa4mKtwDxnxX3l%2FHxkbrVr7prhQXKH8jAw906WddWCYz35cx1j%2B0%2FEfcjY5O%2FaBTUKMDcx6da%2BvvD8K6lfebpKkHCfP3WytiHPIsrP1Zq9tBDkJ2CkHG0YtyXNfHnMGlqsHujKXwnI17lQK1bEd0rD36zkpY0X7oYbq2Ug1BRxSj6o66DxKz3PpXQJLqgE4SECS8GzslUXkTd3Jmn70ow9haFeI6HScFH0uMbD2i%2Fe91RR%2BdE%2BvDelF7qfy315xLcbNDEgPqyxL5NSxLwZRVLNn9BOf2enr%2FOH84J6grWUsuRcJ1ezprdH4hMeTmcLLozTIJ15ATmMRuwenNoTMpVKZiPgrfrmH5v6srXaofX7ueP0X9PCS1aA3T95borPwDzqp4VIVrlBru6EvzsqsKlkrULokzOEwUY7mvFnRxx%2BRSPXhCTB8Yb0bgngAP5uRvDaqyh6NoragPNHiF4KNmVQYUnoEkCjun7hoDn0TtpMLAp%2BGIeQDcsW%2BTFBfiP4UBWekCWJFT%2Bfjhp5H8bIWqAgqxiZqe%2FBcErnf%2FlVjitgTYtgxpN5cfW2P3GdzZyf%2BXLWkxahbebMiy%2BAgMfefJN27h8QOvT6sKTgUCENuPmF51ZM%2FmP0PBsixxoZ%2B7ig4EI%2BEwi62twwY6pgEFNGV6KfBmUZkJ3u8MHnKVczYphA1hEtnYu4v6S5OggF2ocgywFVziwzzZfdni4%2Be%2BGwEF9yOZ2ppFbxZ%2BuG6Iizu1zhU0Tbws2RbRAYf6WIGbp%2F5zQ5Ab0vM4BFp7xqWe1bTKqJ9nDFtHFbFsMTKAzRwllWhnKt7dYYAb6r7rUa5c%2BUBKuOvXmGtZrglBWxVLX5NOQyInh9usHZVlFWO0IAL7raTu&X-Amz-Signature=419d6bcf4cf1f5d1436c7a89eed5b69785c6fd812ad22a89973e034745967002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZC3D5BH%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCwTsDE4B9c3l2c%2B9%2BfsolGM5a%2F0%2Bo45omSMQrbBGkdUQIhAIhnLw%2BChoQ6C%2FQwCbX%2BimKpcQGzcNjOqXOtfZadwrnTKv8DCG8QABoMNjM3NDIzMTgzODA1IgyNewgiXbs4Caye1X4q3APHBPJvBNSnTgGBd3eibs%2F0wpj8nGY7oKlTpbaePNZxd3pVSIV9K8%2BjIbufGme7nDhx4msbljHWzNHZZNbp139S8f05YJ15uloWh8cpiVhQYC1aTD1U3l5Mc4xTxQJUnV0PqtN9qdWu0eF37IO49clrGEGBwcrPL%2FvvbYQA52U0ZsCaU4MQUKir%2BjX5DvOsj4EXblVtzrGPo5Mcs%2FQ79sXGfFzaPSSisuVX7e3s7bif%2FgCCQTERMkpaLkfa3G0RIntLgaZ8%2BE3gMuCjysSXMosr%2Bg7w2YuYVSw5E9rbxkkEoha76ZJ2mRvJEtIVyCL%2F0ASAv%2Fx5j6Itd0uPIfA80kWGy20dqXufbpviliWSrf4N63ob4gfXMr%2Fp%2BfdrV8Ja0KBEeeVQvKJqZJUuv4pQ0XAx4QoJurzSy%2FuFkP9E6%2FpQNcqzK7TRenAt6QT1Z2fOLpOREsH7pPSrKg%2Fjbl0SKJkYzGmmZT3aykcaGku%2BOJ6iKH5Wi19dTDd4R0SlwCgfcP1XC2WrCXr3UVbUKksevv9bvnTLW9xBKlMkUYcy0GbQlp9nsXUWmWmI%2BpnEfq0hIhU1CgGBQ3r23x4At9dcc4jOXYltXWkTnmX%2F38ZLLRPSPloL%2BhKJLQ1przNsbjDduq3DBjqkAc8R6Of0nUscdnypB%2BOaPd%2BUuNL%2B1IHnTHqZDTSJ7pUp75BQITsT%2BLo6mmPDfWqXm8q%2BlNrMbHfQNml2djSbDdM9QhhcjkD%2B4AmWI8GAVchC6Evsc5QUWVWm1ZcF4XrjOR8ClN4OAQpd1tPpMB2%2Bw2qjuxNWJMtUNY8tUWGsGZqaVBHzgS7HIHcWmYYGNvRaywDx%2BtJGHb8kZ9TwOiDOxDEhyJ0W&X-Amz-Signature=6fe013cef00b36476331787fb11613af29f554d2b585ade7168cceac193d4608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
