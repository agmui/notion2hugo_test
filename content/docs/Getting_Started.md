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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYJ3DB5R%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIFEEMZh1EGQWh9%2FVoNEPtU1yvdqYvgKcFp7jHk3zY04vAiAL8GFbT16VgNQY9Mwj97h%2F4RA74M1oGjccMPvuiMTomCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM1Vm5EDb9Wr4WDFQ0KtwDAdjf%2FChQE99ypJfTt29b453Lb2PMU6GFG5iUDq0wPSN0Sr3Dz2h8TlZ9uwgaDV8bVIQFA7vMF5%2FNM15w3DYDylOlf0fsBfs3BUxJiuM4y%2BniYh7L8NJbYrEkDnMzd%2BHwK3FrJMqeVIHmDEtm%2FWElQEt3M3%2F1YB%2FpIUlTkJgDOJ96I%2Bbr%2BFYurX%2FbL5mCl35voaEXBWpFqjZE0z%2Ff7CmXkQJBUeRQLIyuiptoH%2Bznphu1QtRKnyHeDM7V9mTfnEwuo9ElTGAQcVlxIFQNNI07eHuSCutRWC2sAYbEXUWNmCgjOyyf%2BlQAj0jCfJHULMPTZExAbhu%2BiyIcOJF4p29%2B4yVj6WV7iAcPHEm65qkT8ohGuVUQ1oWBiS72L48nh7kfrnspg64yV7Umf%2Bkssapbugc1Ir3kJvbnA7u%2Bk1FoIEqvJeD64HezvAzk8yCtShm6JYe%2BTV2elhrUabLK%2FCFRCEPtwGO%2FHulAnmmj6oar%2F6QfiW%2BUXyKtNO8g8qsalb23NF3MbUWPUXYAEDTiQ%2BgzNExESWd6C1DNSjF%2F3S7kHLrZ2HAlRQ55t2EokavJi0pmj8bVCoM0%2Bkbg5PT0Uwn7Cw2t5UYbduj2wTnoyasbwiB3ioQDG8EVZZh2OWgw%2Fc3owgY6pgGY5EWUbeOzVjk8PYakgC3wAHjycsnLesNX0bldoBqzES1YJlALNPBnLLy7WflebZ8Nh1QkBYaCRwTQ1o0GfQV7PQWbVKoH%2BHJ2mdUjUgwgsVT%2BpyaWr7CCc2vTr1RLzDHK8petKb%2BZDWM6jZPDpvPGvXfd%2By76%2FOoTpHjPUFtQXscp9Be6XelbmMQHEHZ%2F25DoS7P9a5F1Q9896IzKzULaq3zhDbS2&X-Amz-Signature=fbde48d3249c9180ddb88f56021e28d19402848cb4aa25356dc407d7577edc38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYJ3DB5R%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIFEEMZh1EGQWh9%2FVoNEPtU1yvdqYvgKcFp7jHk3zY04vAiAL8GFbT16VgNQY9Mwj97h%2F4RA74M1oGjccMPvuiMTomCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM1Vm5EDb9Wr4WDFQ0KtwDAdjf%2FChQE99ypJfTt29b453Lb2PMU6GFG5iUDq0wPSN0Sr3Dz2h8TlZ9uwgaDV8bVIQFA7vMF5%2FNM15w3DYDylOlf0fsBfs3BUxJiuM4y%2BniYh7L8NJbYrEkDnMzd%2BHwK3FrJMqeVIHmDEtm%2FWElQEt3M3%2F1YB%2FpIUlTkJgDOJ96I%2Bbr%2BFYurX%2FbL5mCl35voaEXBWpFqjZE0z%2Ff7CmXkQJBUeRQLIyuiptoH%2Bznphu1QtRKnyHeDM7V9mTfnEwuo9ElTGAQcVlxIFQNNI07eHuSCutRWC2sAYbEXUWNmCgjOyyf%2BlQAj0jCfJHULMPTZExAbhu%2BiyIcOJF4p29%2B4yVj6WV7iAcPHEm65qkT8ohGuVUQ1oWBiS72L48nh7kfrnspg64yV7Umf%2Bkssapbugc1Ir3kJvbnA7u%2Bk1FoIEqvJeD64HezvAzk8yCtShm6JYe%2BTV2elhrUabLK%2FCFRCEPtwGO%2FHulAnmmj6oar%2F6QfiW%2BUXyKtNO8g8qsalb23NF3MbUWPUXYAEDTiQ%2BgzNExESWd6C1DNSjF%2F3S7kHLrZ2HAlRQ55t2EokavJi0pmj8bVCoM0%2Bkbg5PT0Uwn7Cw2t5UYbduj2wTnoyasbwiB3ioQDG8EVZZh2OWgw%2Fc3owgY6pgGY5EWUbeOzVjk8PYakgC3wAHjycsnLesNX0bldoBqzES1YJlALNPBnLLy7WflebZ8Nh1QkBYaCRwTQ1o0GfQV7PQWbVKoH%2BHJ2mdUjUgwgsVT%2BpyaWr7CCc2vTr1RLzDHK8petKb%2BZDWM6jZPDpvPGvXfd%2By76%2FOoTpHjPUFtQXscp9Be6XelbmMQHEHZ%2F25DoS7P9a5F1Q9896IzKzULaq3zhDbS2&X-Amz-Signature=bfd976b54db3982d12faf7ec92374c484e52efc71724e5107f5c1b34d20ec3e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYJ3DB5R%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIFEEMZh1EGQWh9%2FVoNEPtU1yvdqYvgKcFp7jHk3zY04vAiAL8GFbT16VgNQY9Mwj97h%2F4RA74M1oGjccMPvuiMTomCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM1Vm5EDb9Wr4WDFQ0KtwDAdjf%2FChQE99ypJfTt29b453Lb2PMU6GFG5iUDq0wPSN0Sr3Dz2h8TlZ9uwgaDV8bVIQFA7vMF5%2FNM15w3DYDylOlf0fsBfs3BUxJiuM4y%2BniYh7L8NJbYrEkDnMzd%2BHwK3FrJMqeVIHmDEtm%2FWElQEt3M3%2F1YB%2FpIUlTkJgDOJ96I%2Bbr%2BFYurX%2FbL5mCl35voaEXBWpFqjZE0z%2Ff7CmXkQJBUeRQLIyuiptoH%2Bznphu1QtRKnyHeDM7V9mTfnEwuo9ElTGAQcVlxIFQNNI07eHuSCutRWC2sAYbEXUWNmCgjOyyf%2BlQAj0jCfJHULMPTZExAbhu%2BiyIcOJF4p29%2B4yVj6WV7iAcPHEm65qkT8ohGuVUQ1oWBiS72L48nh7kfrnspg64yV7Umf%2Bkssapbugc1Ir3kJvbnA7u%2Bk1FoIEqvJeD64HezvAzk8yCtShm6JYe%2BTV2elhrUabLK%2FCFRCEPtwGO%2FHulAnmmj6oar%2F6QfiW%2BUXyKtNO8g8qsalb23NF3MbUWPUXYAEDTiQ%2BgzNExESWd6C1DNSjF%2F3S7kHLrZ2HAlRQ55t2EokavJi0pmj8bVCoM0%2Bkbg5PT0Uwn7Cw2t5UYbduj2wTnoyasbwiB3ioQDG8EVZZh2OWgw%2Fc3owgY6pgGY5EWUbeOzVjk8PYakgC3wAHjycsnLesNX0bldoBqzES1YJlALNPBnLLy7WflebZ8Nh1QkBYaCRwTQ1o0GfQV7PQWbVKoH%2BHJ2mdUjUgwgsVT%2BpyaWr7CCc2vTr1RLzDHK8petKb%2BZDWM6jZPDpvPGvXfd%2By76%2FOoTpHjPUFtQXscp9Be6XelbmMQHEHZ%2F25DoS7P9a5F1Q9896IzKzULaq3zhDbS2&X-Amz-Signature=a92b86f8bbc49bbee1ecca68783dcb5c507a546e06ef4567edd90017c221d9b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCIBMRUW%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFJkofGU0aZ3Za1resUmSKIBJKJOdQLUDQ6XNQJ0tnTYAiEAiAlCQYorQhe3kOx6aDSYAwBFotgSFywP2VFPFULg1UYq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDOXx51xFgKudmm8iHCrcA1zDPGQSOHfVM6lAeGzztq4eOZWtkCGYNllxFtW4yrn7W518gyhzumpAw1TUf7vPw0Y2Ki3HAJLRY8INskAGHApmsePEbZWil%2BXfeSDDBGUz1STOShdg3uvXoecASrZbOBW%2BzswCPAtdgVsk%2F0E5AxYX0OO%2BvNoDi5fAKkF6u4V%2BuVpdm7ahR3KbJmyzXyGk1MJ32uqBrcHTXO2TbwTO%2F9pK4wAlCXNO9jUbFPV4L1qyGJD4kIYNBrYgLmNxfRcSPCsLUuNYL2VunDZCo%2F8mnlXJjNUTwVVcHvzNWQFxQEuE5tkJaKbbaeBHqLxBWK9mfOin5ZpGehvECv4fulvKofY307x1fQX9%2FhrkFiFKkGpxqOQGzKAX2qnSufYqJktUymHL6GxmtztpopahTfHqCnRldvCVASZh2RceTqWtV%2FGu%2BGQYWqnC4Yq4e3np61LWQe0WDGsJgklr0NJRE5hssd2PjbJpA%2FHfR9IOMpaATtQPmNSWedxfTkqa%2FzbIxpKoRbe90Djzq%2FzPH%2BocFzk7%2BPdJFjK%2BYTKvLpaVTPxqJQJHJEoXGAu02KXMNp0l%2Bpl9A5MwE5Qlu%2Fw2I1mreBfLmPrcuFSTdiz77316tRPr%2FwIuuJ8syNMa6Rf%2FANa1MK%2FN6MIGOqUBFEUze88KyEa8Wi%2B0s3yFHKp6XO5s0cIH5vej2X17o4ycrkDQQGkEXeKq0v12QuVzlyD3VzXmWcWd9C%2FqQg5n1Kl7I9yzaCvzxEGUKqUtgS5szgYuuX9X0FVXw12Fi0J3nSJMez0VaEuBuFhSdi19PVCuHJ7v53%2Bfvy0JmSpPIbyvHt53Bro2%2BQjoibsAIiFzqaYsaXzySt9oHhF1D1VkhWhfLAfU&X-Amz-Signature=28208fa84157eedb25302f8635d574a831352140e0d746bcc0bb834b68d7ec88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DQT5AIR%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIGX%2FZNVxtXae71Uu1Ud4HmxlY4R9jDNqmmkTaGhLEwxaAiAvnuxcSI9ABKrgxf%2Bt59ZTqQ4f6rnKHcBOZ52O4sQidir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMwhNzQk6g%2BGHkZMUtKtwDFKuT1UeXfVXvxAzlkPET3hIDtAb3Zvd53IP3QQc3%2FiunRv5AXa9zZHalLQnOTusH7%2BU7zKtaKzBKidr1N3QB2ILjKnpZWs2NPoN3MTiq9YlslkG%2FZSNtCcqiUb37CYMazSJhTo%2BGZbm9kpvZHcam1jt6DhrtazRnSsEDA%2BvbkH536nBy%2FEeGNsvH4PMHfafbAoH17PWfLv%2FmCU7yvsE95pSi%2F0OlIQNrDKhiYA3QN1lWdP0HPOFy%2BdBBnsLeQWSdrD9ORLxfJXW%2FaEw10mJJ1uMV0accyk9Old87LUbryZHjCTyTnMCpOveSLnwiDzJ%2BAfbdkC%2FIVa3xc3wWsxNhmJQjwIi59H5Q3SyCTv07QpNG30vssvkI9TczUUd5yxlkQxy9xHF3%2Fz1hNdQlTFQwakr5I%2FCCYMaJN%2BQSiCOkx6N84mNAXdwgcR2GO2vRtiOY3VtS%2FKlbTAost51kKt3HvMfXOOf%2Fk1L%2BvczBwvVZGx8qNGZazjht1odmYcYt1RGdAThsW6NAbPTGXcVuF0tP923XxxKZAKfW2u%2F8CWaM%2FGNCTRmlUi%2FHhHD0gOZRUkpgMXHYNhe%2F7obQR4q%2BgkBCe8nRLx52PDAObgM0BSofPPJXgK0Njr7L1vQGfecwztrowgY6pgFaLVBTp31y7vXIA%2Bhs%2F1j2gfn4yhFIESGrOb0hrC4uOvLzMuwDan7BNdtpRsogO1WquD8e4gtaWQuQi6k%2BEHSiT7VHOpS8T8V3QQEOU3hpsOAHKPKtejbt5d71zKL3iEU4jnRjvo%2BpzMRihaUz%2FdNy8aGFheb%2F49XtUo5ZksmJ5Y0sj6zRRjQAYVWQzrJ6gBB0z%2BGumVw8JxyRx6apMyE2wVxdhmhZ&X-Amz-Signature=8e230515e6035d38a78b22f4e2b662f5e43f17bfcd2543ae01473d9920fbb136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYJ3DB5R%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIFEEMZh1EGQWh9%2FVoNEPtU1yvdqYvgKcFp7jHk3zY04vAiAL8GFbT16VgNQY9Mwj97h%2F4RA74M1oGjccMPvuiMTomCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM1Vm5EDb9Wr4WDFQ0KtwDAdjf%2FChQE99ypJfTt29b453Lb2PMU6GFG5iUDq0wPSN0Sr3Dz2h8TlZ9uwgaDV8bVIQFA7vMF5%2FNM15w3DYDylOlf0fsBfs3BUxJiuM4y%2BniYh7L8NJbYrEkDnMzd%2BHwK3FrJMqeVIHmDEtm%2FWElQEt3M3%2F1YB%2FpIUlTkJgDOJ96I%2Bbr%2BFYurX%2FbL5mCl35voaEXBWpFqjZE0z%2Ff7CmXkQJBUeRQLIyuiptoH%2Bznphu1QtRKnyHeDM7V9mTfnEwuo9ElTGAQcVlxIFQNNI07eHuSCutRWC2sAYbEXUWNmCgjOyyf%2BlQAj0jCfJHULMPTZExAbhu%2BiyIcOJF4p29%2B4yVj6WV7iAcPHEm65qkT8ohGuVUQ1oWBiS72L48nh7kfrnspg64yV7Umf%2Bkssapbugc1Ir3kJvbnA7u%2Bk1FoIEqvJeD64HezvAzk8yCtShm6JYe%2BTV2elhrUabLK%2FCFRCEPtwGO%2FHulAnmmj6oar%2F6QfiW%2BUXyKtNO8g8qsalb23NF3MbUWPUXYAEDTiQ%2BgzNExESWd6C1DNSjF%2F3S7kHLrZ2HAlRQ55t2EokavJi0pmj8bVCoM0%2Bkbg5PT0Uwn7Cw2t5UYbduj2wTnoyasbwiB3ioQDG8EVZZh2OWgw%2Fc3owgY6pgGY5EWUbeOzVjk8PYakgC3wAHjycsnLesNX0bldoBqzES1YJlALNPBnLLy7WflebZ8Nh1QkBYaCRwTQ1o0GfQV7PQWbVKoH%2BHJ2mdUjUgwgsVT%2BpyaWr7CCc2vTr1RLzDHK8petKb%2BZDWM6jZPDpvPGvXfd%2By76%2FOoTpHjPUFtQXscp9Be6XelbmMQHEHZ%2F25DoS7P9a5F1Q9896IzKzULaq3zhDbS2&X-Amz-Signature=ec05f583c12a3a4cafa350816c612eda99266b1661a9eefcc4a9c90df1a0916f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
