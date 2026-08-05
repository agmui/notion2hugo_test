---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VWC2CWD%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIHa8y%2B9svX60B2yxDoz5FUORBXqdCzRFbOP%2BosWJuefaAiAKMnzZXLw6ajKehsKS5O0%2B5yrC8H4qX7YRpW%2F1e3deUir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMA2DqUM20SAVPiR1IKtwDGFwKSxSCfBwICIeBVf9IXOYCsiTxgOefet19im%2Bg4gnUflfwCDzY1KUb7ooHEnPVYg3FRBVyEcGWJyYKLNMyKBVwcyw36LRYhjv5YZTr%2FIvPqeNOPoM6ZqIUZecEDFNgXoYE8OIqVydVFNRMPpqbMlaPgTiRupsKyt96rEpfSt1RVtxshEEtvqvchGLSPBOvVpbSoaqULJrgUcZ7FVA%2BE%2FRFy%2BQdz6uIxBoVVkk0NORZMUN18cYi2E7mIeCruISvevZpUpDn6dxxqsECQko3qAsbh2GDfjaVFp%2B7lwWi2ez7ObeYSZnQXMk2khJqRGDRE7IONiNyvr5uyKjTQBMNppPyZ2BO%2BNN49U1Gjnr6w%2BS2ulmbE54neL9wYUAdoF2cS3s6hS7bRS%2FVxIFR8hKlF3pXRvZZEf2vbusYv3DhwQ5rGqVuXaoyGdYIRcET5%2BT1cUERO8Kzs3sPZsEaHT1cQLZLJ0gosIqyKUu1MQAJEl5PKoEG0G7aHvwCDSHy%2B5QSEcZ9neg44%2Fz7Iuy63LuX0OgBnwfPjLLvLSYuejMxxDYuijuLAxUVqf%2BJTFOQaQr1CrsOhXRzHRb%2Fk80eLJLpF76IkVIGiVi7A3x4BlAsecwMs1vGwv7SD7TV9Fgw4ZbK0wY6pgEJ8RB1Shf9qpq91e4OHS2r6BDzrXCuq%2BKLvaE0yuLPxX8SaH2UUBswV2LcOMZyN2Luf5MZQykugfhnKdhgmWmEQX5T5zu1MA8LDEPnjptt%2BrIC%2Btfc4AChAHCMUOxBCKQyoKvzGKpPC5wr8MAodk1yFabqIEZjqDN0ZSHaE1wqJuPj6ZvtDE15b6vsHoHtBoMkohgD6fdUix2AXZM8lOQsGlHfC9I2&X-Amz-Signature=9230d85c4fbec012c743fa6686c4f1dc6647c6fce34dde05ca3e5c77add33257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VWC2CWD%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIHa8y%2B9svX60B2yxDoz5FUORBXqdCzRFbOP%2BosWJuefaAiAKMnzZXLw6ajKehsKS5O0%2B5yrC8H4qX7YRpW%2F1e3deUir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMA2DqUM20SAVPiR1IKtwDGFwKSxSCfBwICIeBVf9IXOYCsiTxgOefet19im%2Bg4gnUflfwCDzY1KUb7ooHEnPVYg3FRBVyEcGWJyYKLNMyKBVwcyw36LRYhjv5YZTr%2FIvPqeNOPoM6ZqIUZecEDFNgXoYE8OIqVydVFNRMPpqbMlaPgTiRupsKyt96rEpfSt1RVtxshEEtvqvchGLSPBOvVpbSoaqULJrgUcZ7FVA%2BE%2FRFy%2BQdz6uIxBoVVkk0NORZMUN18cYi2E7mIeCruISvevZpUpDn6dxxqsECQko3qAsbh2GDfjaVFp%2B7lwWi2ez7ObeYSZnQXMk2khJqRGDRE7IONiNyvr5uyKjTQBMNppPyZ2BO%2BNN49U1Gjnr6w%2BS2ulmbE54neL9wYUAdoF2cS3s6hS7bRS%2FVxIFR8hKlF3pXRvZZEf2vbusYv3DhwQ5rGqVuXaoyGdYIRcET5%2BT1cUERO8Kzs3sPZsEaHT1cQLZLJ0gosIqyKUu1MQAJEl5PKoEG0G7aHvwCDSHy%2B5QSEcZ9neg44%2Fz7Iuy63LuX0OgBnwfPjLLvLSYuejMxxDYuijuLAxUVqf%2BJTFOQaQr1CrsOhXRzHRb%2Fk80eLJLpF76IkVIGiVi7A3x4BlAsecwMs1vGwv7SD7TV9Fgw4ZbK0wY6pgEJ8RB1Shf9qpq91e4OHS2r6BDzrXCuq%2BKLvaE0yuLPxX8SaH2UUBswV2LcOMZyN2Luf5MZQykugfhnKdhgmWmEQX5T5zu1MA8LDEPnjptt%2BrIC%2Btfc4AChAHCMUOxBCKQyoKvzGKpPC5wr8MAodk1yFabqIEZjqDN0ZSHaE1wqJuPj6ZvtDE15b6vsHoHtBoMkohgD6fdUix2AXZM8lOQsGlHfC9I2&X-Amz-Signature=12d6e5998cd49fd36c5fea7c93f8c23a82b18bb89d9b5eebec473c3a7ecf02c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VWC2CWD%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIHa8y%2B9svX60B2yxDoz5FUORBXqdCzRFbOP%2BosWJuefaAiAKMnzZXLw6ajKehsKS5O0%2B5yrC8H4qX7YRpW%2F1e3deUir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMA2DqUM20SAVPiR1IKtwDGFwKSxSCfBwICIeBVf9IXOYCsiTxgOefet19im%2Bg4gnUflfwCDzY1KUb7ooHEnPVYg3FRBVyEcGWJyYKLNMyKBVwcyw36LRYhjv5YZTr%2FIvPqeNOPoM6ZqIUZecEDFNgXoYE8OIqVydVFNRMPpqbMlaPgTiRupsKyt96rEpfSt1RVtxshEEtvqvchGLSPBOvVpbSoaqULJrgUcZ7FVA%2BE%2FRFy%2BQdz6uIxBoVVkk0NORZMUN18cYi2E7mIeCruISvevZpUpDn6dxxqsECQko3qAsbh2GDfjaVFp%2B7lwWi2ez7ObeYSZnQXMk2khJqRGDRE7IONiNyvr5uyKjTQBMNppPyZ2BO%2BNN49U1Gjnr6w%2BS2ulmbE54neL9wYUAdoF2cS3s6hS7bRS%2FVxIFR8hKlF3pXRvZZEf2vbusYv3DhwQ5rGqVuXaoyGdYIRcET5%2BT1cUERO8Kzs3sPZsEaHT1cQLZLJ0gosIqyKUu1MQAJEl5PKoEG0G7aHvwCDSHy%2B5QSEcZ9neg44%2Fz7Iuy63LuX0OgBnwfPjLLvLSYuejMxxDYuijuLAxUVqf%2BJTFOQaQr1CrsOhXRzHRb%2Fk80eLJLpF76IkVIGiVi7A3x4BlAsecwMs1vGwv7SD7TV9Fgw4ZbK0wY6pgEJ8RB1Shf9qpq91e4OHS2r6BDzrXCuq%2BKLvaE0yuLPxX8SaH2UUBswV2LcOMZyN2Luf5MZQykugfhnKdhgmWmEQX5T5zu1MA8LDEPnjptt%2BrIC%2Btfc4AChAHCMUOxBCKQyoKvzGKpPC5wr8MAodk1yFabqIEZjqDN0ZSHaE1wqJuPj6ZvtDE15b6vsHoHtBoMkohgD6fdUix2AXZM8lOQsGlHfC9I2&X-Amz-Signature=ec3fd12fba4acd83f55012ed532c1f8daeba1581e7384d6f10653fea1aaf4c6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIMPR65T%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIGsISYUV4S22UDGgB9O2iU%2FH36kqmQPs75uUJy2zooUkAiEAuQ26QAnUtjhTvFyVpFf6ijYWObRcbuunyFg2AiWALi0q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDIpYbscpcPGilLyh5ircA%2B7z6A4CS0C8Oyn5cyGRbwLstGvNr6b404fUIPPLYEUhDDkUjFue4HlKA3oLLlfTfiPFKA0UfNDWVaLnE5ASXVzFQ%2BnioQ4uLo%2B9uxW71mKP3Cen7wm%2B3tE3wbHk3PlXoeBas0NfA6PFosM4krqsN2rRqL33CjzmesemAUMJBy7XBACLv35O77a8nYFE8MyTZNQti2LAn1g5nu4JdU1epYOluOSA7wp16Jc%2BPC6cH%2BDYuMyvP44p16D4WfcKXDppQ24UGirQ4nYQS2s22NIkegIzR27HNE%2F49XX%2BPMc0X76Wi60R1l%2BdfLz%2BZ%2B96nLdYf3xwHfi6%2BHu2hSWbQXzJaTCKStTRjtlqIDYBtX76xg0UIQXO52b2nh7lLgIneQ0mNal%2Bv9tGjgbVamXhQZVnsauxocruvv8T7Ku8W9CHL98GF0CZXyG0vJWQG3ow3%2Fp0v7OFDedcWjhT5yHMHH2JsPzJZ9fdOVSOMdRJAMX%2B7YSyemTsbGkxQqmFxz8%2BizcTG85lw8sge%2BRv%2BBQkrVu15lFiLpcYc21xGSwhgP79eU3Llk6CdWGMVFEO7jJ7XaF4WzB20E4hcGchEj3qHpDUnc4cLs1iJRGx4g%2F9gEFvN5OXE6kF7dPE9ZJI5DY%2BMLeWytMGOqUBHnTgyTZ7%2BKxtM8JqF%2F9aX%2ByjCj9957sU8vrMZBiR7bGWyyULkEUufh8jbb1s9BL3T0uLjlirel1%2FcDYi8zFl%2B%2BZ1ieDjZaccxlqky7lKt0a7JUWMy%2BvEfsPv3ppvpxTpb2Tik7FO1aYKTnr9AhKB1T1whEHI%2FBnlI2DEkgw15O3z1EhXWDPF6FJBlrNkGRnj3yWmdbhiV9fDk9BumLfCjekqnCCD&X-Amz-Signature=b58c8791585f8c3c3779c1ff248336cf757e10b386ce5da0298ec858512198f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHNC4FG7%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIH53CaKVryv8D1MQ6zU02WRLYtWOyzqVEMS24Fefumi4AiAG%2BLZxR08TY2IMu3eVvCudTEK7wpa4kfb%2B4hI5VIKkWSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMLqfzv1dOKClPU3aXKtwD5XLPUFBNnstkiLxg7e0MuqQXxlF4a5Dy48WKeX6zT6McfHl0QqRhjS%2BPf6hDaNcvWdfy1WC%2FSK1cszGRgFEJMV25oD3Yh21e1CuF35G9k9YS6BlITtCl4QTw6MKvYNPN%2BzTWthCf48bTuArZllDOpqqKroqh%2B5IPQAFRwBZnRal4BKgJ%2FbsVfPuPMbXtDNR%2Bs2I7haHNKRisaU1dydclb3kwfu0IQFxWFJWSc6w6wXPHA%2FJfH78qhH7XbN8DjIIrXCzTpr8RUa8n%2FZd%2BPrrEFDFiL%2F6eEek8fr5y2f%2BqJPfAO4ePVJpXPyN%2BspJlXmW0c3Et6MoLbjc1M%2F5vxYsUzyeChhLaEj39b%2BfGqkk9v%2F3PnCL6Pkt1in7uc%2FgYA%2B9d%2F2ZhouAj%2B26cef4TRP82WgLDYzgSY2aybTKBc7lBj5G%2BjBeNgc%2B5CbnIujbCHuRaKHuy2ShjjmhlKfH8DnXwCDj1jJhDqfCeqj4UEP4EnJnsR0d4phcjRwdO1o9K4TPsM2oxY%2BpEYSFcbzA%2FftJ1akGF510nvs9Ocs45nuFiNKNo3%2Blm6C3ki7MvTbq0NWmJw8am%2FxhD2jryz34pQg5DrUqdKBt7s8Dgq4E6iwqJ3aXTqkFsoCGnbpYdfeEw%2B5XK0wY6pgEkxhXxlmtdh8kgQz%2BTAQQXOjxJk2NKT9rnHuM2fy93KhN7CQpa7bHtAUmIyXCILtUmdwtSpbe64DM5m14oB%2BDlDsalZaJVp6ziYcVBiBz789RZUum9BCqvExQCDMB3vu1XKuOz5rislfVw1FVF%2B3Gd0wQog3zTRYafS8ezmYt41Rt8Hffi5iWMjFbCnUAy83ZOwzDgChlJjbE4r7jjlKYmxOxdzA1a&X-Amz-Signature=16d217537c72e755852dd33e789429db21897bdca067280d7dbbe5272d06cce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VWC2CWD%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIHa8y%2B9svX60B2yxDoz5FUORBXqdCzRFbOP%2BosWJuefaAiAKMnzZXLw6ajKehsKS5O0%2B5yrC8H4qX7YRpW%2F1e3deUir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMA2DqUM20SAVPiR1IKtwDGFwKSxSCfBwICIeBVf9IXOYCsiTxgOefet19im%2Bg4gnUflfwCDzY1KUb7ooHEnPVYg3FRBVyEcGWJyYKLNMyKBVwcyw36LRYhjv5YZTr%2FIvPqeNOPoM6ZqIUZecEDFNgXoYE8OIqVydVFNRMPpqbMlaPgTiRupsKyt96rEpfSt1RVtxshEEtvqvchGLSPBOvVpbSoaqULJrgUcZ7FVA%2BE%2FRFy%2BQdz6uIxBoVVkk0NORZMUN18cYi2E7mIeCruISvevZpUpDn6dxxqsECQko3qAsbh2GDfjaVFp%2B7lwWi2ez7ObeYSZnQXMk2khJqRGDRE7IONiNyvr5uyKjTQBMNppPyZ2BO%2BNN49U1Gjnr6w%2BS2ulmbE54neL9wYUAdoF2cS3s6hS7bRS%2FVxIFR8hKlF3pXRvZZEf2vbusYv3DhwQ5rGqVuXaoyGdYIRcET5%2BT1cUERO8Kzs3sPZsEaHT1cQLZLJ0gosIqyKUu1MQAJEl5PKoEG0G7aHvwCDSHy%2B5QSEcZ9neg44%2Fz7Iuy63LuX0OgBnwfPjLLvLSYuejMxxDYuijuLAxUVqf%2BJTFOQaQr1CrsOhXRzHRb%2Fk80eLJLpF76IkVIGiVi7A3x4BlAsecwMs1vGwv7SD7TV9Fgw4ZbK0wY6pgEJ8RB1Shf9qpq91e4OHS2r6BDzrXCuq%2BKLvaE0yuLPxX8SaH2UUBswV2LcOMZyN2Luf5MZQykugfhnKdhgmWmEQX5T5zu1MA8LDEPnjptt%2BrIC%2Btfc4AChAHCMUOxBCKQyoKvzGKpPC5wr8MAodk1yFabqIEZjqDN0ZSHaE1wqJuPj6ZvtDE15b6vsHoHtBoMkohgD6fdUix2AXZM8lOQsGlHfC9I2&X-Amz-Signature=fb67f330d5db9ab22148fefb2d0f37a775dd6ecd8f0df303caf6c1ca0c39fa04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
