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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AJFLB7U%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDqIisGq2ozcQWcObdzZjSKxx2RI%2FFCafmst%2BKM7%2BX4cwIgV%2Fg%2F90AyurKYpAB2mf0UFrokjGGYBfJTuzZY7XNnbFgqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOfl9Ex6LWYt8sQATircA9kuL5Yis7ehNQkvzBFliBaFWIhVYN4NitQZouX6MJn%2FgS1U2gq26OzMOX2RC21m7NQ3Bx2cG8J%2FUaa%2BKmrdVutcjI9HiE0mWFXH%2F5c1XxcnrctKsIvz12ZZhCdkfRlOFQZ%2BsjMiNfSThtXFa7%2FDziDXp9ZACeImkVtG%2FxGwzIKEDis%2FgehhLGmZ3XEgnTHMmiMPSFejb3aBEsODhUe0C3%2FA3L8zKo7B4W3AdtpwOB3%2FazmDJi2JRahnjDMrgJTshM5eLOYjfBYDVho%2FIThnQOOZQvTcpDpnf1%2FI52BTVuSHFZejiw7ZrYxWAY4o4ve0Ym4xgEAZiC%2BelMhzhjXQpvyxtPB%2BikdcPGcX9ZgNP2A1%2BGcOuElXudoNGVxSiAEgmenlvKR4ujXOPsIjLv6BIhkqeKcV3O5f3vQB60cfg4TfciIU7rjZt9cX68lPwtxScBtQvMPSEX1zBHFh8pHoFIxVL7alZX%2BXPfBUEjZZlqr8elepPhlYP8kEfjRhkpscfz4zODdhD4uHElFfNfF1DZzRTkcjjCAv5zySFbsd1zJPXLL64DDJCYrZFY34PSiGqosPNo3NrM3icpcEtHKQR4Fp7PKSkqcNCiikPK9SO7i1zzqF2w3wXZGo2degMOfvp8YGOqUB%2Bv91dW8czxTwGKqVmBOnQ3GMf3HU9HchYXBC7ywzWuVolCVtpVihgAfIMpzvfOuQdUaPJDUfEyETwyqtmxRUO9aAR4%2FHqCNB4BaAKTID9zSzjOXFqRzJV1%2FFZJ9YfyVrr3l3f2mWiOXoWYTgGG4YqzYOhtnyBHNLyX%2B7a%2BLdV2oevuxfRmVk%2FVt8Nieg50J9H5Oe%2B8Bepe7x3cPErnXAg2sC2K%2F5&X-Amz-Signature=517b39b42f9fff2e41bf896f8a6ae128c8bcc2af26af1dfa44dabb9cce22f80d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AJFLB7U%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDqIisGq2ozcQWcObdzZjSKxx2RI%2FFCafmst%2BKM7%2BX4cwIgV%2Fg%2F90AyurKYpAB2mf0UFrokjGGYBfJTuzZY7XNnbFgqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOfl9Ex6LWYt8sQATircA9kuL5Yis7ehNQkvzBFliBaFWIhVYN4NitQZouX6MJn%2FgS1U2gq26OzMOX2RC21m7NQ3Bx2cG8J%2FUaa%2BKmrdVutcjI9HiE0mWFXH%2F5c1XxcnrctKsIvz12ZZhCdkfRlOFQZ%2BsjMiNfSThtXFa7%2FDziDXp9ZACeImkVtG%2FxGwzIKEDis%2FgehhLGmZ3XEgnTHMmiMPSFejb3aBEsODhUe0C3%2FA3L8zKo7B4W3AdtpwOB3%2FazmDJi2JRahnjDMrgJTshM5eLOYjfBYDVho%2FIThnQOOZQvTcpDpnf1%2FI52BTVuSHFZejiw7ZrYxWAY4o4ve0Ym4xgEAZiC%2BelMhzhjXQpvyxtPB%2BikdcPGcX9ZgNP2A1%2BGcOuElXudoNGVxSiAEgmenlvKR4ujXOPsIjLv6BIhkqeKcV3O5f3vQB60cfg4TfciIU7rjZt9cX68lPwtxScBtQvMPSEX1zBHFh8pHoFIxVL7alZX%2BXPfBUEjZZlqr8elepPhlYP8kEfjRhkpscfz4zODdhD4uHElFfNfF1DZzRTkcjjCAv5zySFbsd1zJPXLL64DDJCYrZFY34PSiGqosPNo3NrM3icpcEtHKQR4Fp7PKSkqcNCiikPK9SO7i1zzqF2w3wXZGo2degMOfvp8YGOqUB%2Bv91dW8czxTwGKqVmBOnQ3GMf3HU9HchYXBC7ywzWuVolCVtpVihgAfIMpzvfOuQdUaPJDUfEyETwyqtmxRUO9aAR4%2FHqCNB4BaAKTID9zSzjOXFqRzJV1%2FFZJ9YfyVrr3l3f2mWiOXoWYTgGG4YqzYOhtnyBHNLyX%2B7a%2BLdV2oevuxfRmVk%2FVt8Nieg50J9H5Oe%2B8Bepe7x3cPErnXAg2sC2K%2F5&X-Amz-Signature=ff2113be609561f058bd6ffb9fa475c748c8ee453d494b0410a736b9902d11f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AJFLB7U%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDqIisGq2ozcQWcObdzZjSKxx2RI%2FFCafmst%2BKM7%2BX4cwIgV%2Fg%2F90AyurKYpAB2mf0UFrokjGGYBfJTuzZY7XNnbFgqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOfl9Ex6LWYt8sQATircA9kuL5Yis7ehNQkvzBFliBaFWIhVYN4NitQZouX6MJn%2FgS1U2gq26OzMOX2RC21m7NQ3Bx2cG8J%2FUaa%2BKmrdVutcjI9HiE0mWFXH%2F5c1XxcnrctKsIvz12ZZhCdkfRlOFQZ%2BsjMiNfSThtXFa7%2FDziDXp9ZACeImkVtG%2FxGwzIKEDis%2FgehhLGmZ3XEgnTHMmiMPSFejb3aBEsODhUe0C3%2FA3L8zKo7B4W3AdtpwOB3%2FazmDJi2JRahnjDMrgJTshM5eLOYjfBYDVho%2FIThnQOOZQvTcpDpnf1%2FI52BTVuSHFZejiw7ZrYxWAY4o4ve0Ym4xgEAZiC%2BelMhzhjXQpvyxtPB%2BikdcPGcX9ZgNP2A1%2BGcOuElXudoNGVxSiAEgmenlvKR4ujXOPsIjLv6BIhkqeKcV3O5f3vQB60cfg4TfciIU7rjZt9cX68lPwtxScBtQvMPSEX1zBHFh8pHoFIxVL7alZX%2BXPfBUEjZZlqr8elepPhlYP8kEfjRhkpscfz4zODdhD4uHElFfNfF1DZzRTkcjjCAv5zySFbsd1zJPXLL64DDJCYrZFY34PSiGqosPNo3NrM3icpcEtHKQR4Fp7PKSkqcNCiikPK9SO7i1zzqF2w3wXZGo2degMOfvp8YGOqUB%2Bv91dW8czxTwGKqVmBOnQ3GMf3HU9HchYXBC7ywzWuVolCVtpVihgAfIMpzvfOuQdUaPJDUfEyETwyqtmxRUO9aAR4%2FHqCNB4BaAKTID9zSzjOXFqRzJV1%2FFZJ9YfyVrr3l3f2mWiOXoWYTgGG4YqzYOhtnyBHNLyX%2B7a%2BLdV2oevuxfRmVk%2FVt8Nieg50J9H5Oe%2B8Bepe7x3cPErnXAg2sC2K%2F5&X-Amz-Signature=10d56536753ba4ea0071da9f5f8c701ba622f2b518330db1e3d11e1621e62e27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666BJ4VKF%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCCyVl3lJbLkHL0z7p%2BP8DN%2Be8c%2FRC%2F%2BCSZIUJL06aQcAIhAPcX7CKiTx7vlY%2Bn7Ng1pe%2B6NbEeUVvJoA8EO2ubnWvjKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2Bn7MnfjsncqjP7Zgq3ANZQsUNcq3ArhWnsx%2FX9XyfychrH%2FneZbybBtH%2BgFTnswaOt2WRmLWK7%2FtdIF2lsrGQV%2Fq99OdVumTiigm8iSO8AUCgZnno9WTLKSxt0q9edeVFETZCm3MdFZ1QNeLMjoRibUs9Y8yu7PVNQCqERLx7RmKd62NpHFy7TjV3%2BNNbzt9U0FmOco6AlyiNIlY%2BE6qFkiz4QHAyVzzOuZnH3L%2F%2F5K6FGNuYg6KMO1y1f6LFCy02AzHg3qrxzvXB%2BgPpbHbjO7GGA6x7EEjuB%2FA2r%2FsIB8ev1LXf4xBf7oL0VaQT8zvukwfwnK0V%2Bb%2BNCw0Gya%2Bz210Hit83LqHvWUMIbn9NK68oUAaTtllBjFxxHEe2B9VjB3aWaHh2OEX1gP8yIev3ZbdiF%2FSVOteTp%2FALLmJ7si4mEuBabjEL5PB94vV3UzBdVDgMOz2tEZ%2BELkCtkmYWSDXoMUk5sNqpdmv2szB3hzIb6NsMMIsCiH6ofcksS66M%2BUNdGJ46JBluTyN4h35R7X27OE9VOaMQvyU4FROQM%2BpF24SVxW6E2eV3UbLnbyTB95H9gUHhxvFQP2xf3BhQc59eOHK0jB25M%2BGRdFYVr4i%2BKx0PKlGrskfqULD9%2F1toiKE5WfxVy%2BiIzjDt8KfGBjqkAVnUEpzPvhkNjNooTg0BUTAxLOVwji2r25mXHxhamnuisMgATXzhblvfpP3943uhO3M06yKF6rv0gbgGpcrW0ZOQ4Mv%2FzBWIqvjCcfy8ipKhgD27feT3ky3nfJgX7UO65xbjG9xFdOwY6Fg%2BD2%2BK50IAtvYKOX3HJFB3bFKS601BvEidX22VE%2FDnb5f5gLmhi17zWd8zRykmasCC3ClbjJjd%2FSgH&X-Amz-Signature=411e7d7fc65fd37a20e19b3acc17394f9635fc07304653635b40f9a8619b03a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPN4NSWY%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIGETk4AINOYtcVSIt%2B4CrHC3lXM51gXDZ8sGovwaP6aaAiEA7lUyWCLHsMQhKsT4%2BV58F%2BlOs%2Bo3GKkMfYp%2F3PGlZiMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrPPKTOSlV0DnW%2FqyrcA3Rf1nHIfMAiZYuDp6ni1k%2Fl9qmFyL2JWX%2FnkaUKvhBFiYTzO6yeCXtbY1bB5jQYmlwPcsQS5QfshQ3crNLFtjElXFFh7wxjw8ldTKJTcf9cVJoarQP8MNubgfCu9zucvQ2OzTZFe3DA4gD5mm8SzHDcuE02tiWMLh0cozzyyHM9dsby%2F5LDsMxf2KObui6NVsEng08AvSZ4qTreu1G37nI1yPT%2Bk0R%2Bg7rHkzPJ3vwYitQ7XK3miZoq%2BCDBSO6RLwEvOZec127WBlDIPeHdfg%2FibAJA8YpkLp6Pt4zvgggsGrLgJU367CShdnzdJ8mpdGW4wlpoDBnV985Z2CwPjhT59xJBg1jZ2cF1j56kgt0ZFjJug3ynw45G0W6PLQxvNed0JMfcdHTJQG2X4qSt3wfbCr4Y%2Fqjbf1PErxSdYTrgKK9grUe6X9LSVOGFikG4aPjPvvz9AdbFNaZZKOsYMHUmcrDjII6WJrx6O%2BGsBo0kVcrEfRzkdQFpWaKznZ9PdIDhPk%2Fwu3D%2BruWRra5nnLobA9na5MpDs731DSzhdZbGZxanpVoMQpoj93ajeIPjsyr514k3eM9saw8noWzPzcYuPaGHtwGcTO2ABMysIsl%2B7T8S93xcMSaJx13rMI%2Fwp8YGOqUBEDcOlOPkekoHv12xxTRkxFd78Ui9XBfUtqhkG8StryAmwWX9sXW8UMFaouPZ4wji%2FnFWTS5liPWwdtYKEYk4CNoX3hEpr0JGICRy9ecQRdvT75JdD%2B2kWjEzgFYZ9lhgQPV7t%2BgB0y7pXt4tvvMi8YUOnNnIXu%2FjihExWRQfQtYyOT6ycZgX9Eq9kjiaYD2Chz28sg7%2BD5h8Vz4UueyC0xAormXB&X-Amz-Signature=310fe3adb3dc30890440b51f5ade26cbb4adc55189cc96fa18263c8eb2e13d2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AJFLB7U%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDqIisGq2ozcQWcObdzZjSKxx2RI%2FFCafmst%2BKM7%2BX4cwIgV%2Fg%2F90AyurKYpAB2mf0UFrokjGGYBfJTuzZY7XNnbFgqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOfl9Ex6LWYt8sQATircA9kuL5Yis7ehNQkvzBFliBaFWIhVYN4NitQZouX6MJn%2FgS1U2gq26OzMOX2RC21m7NQ3Bx2cG8J%2FUaa%2BKmrdVutcjI9HiE0mWFXH%2F5c1XxcnrctKsIvz12ZZhCdkfRlOFQZ%2BsjMiNfSThtXFa7%2FDziDXp9ZACeImkVtG%2FxGwzIKEDis%2FgehhLGmZ3XEgnTHMmiMPSFejb3aBEsODhUe0C3%2FA3L8zKo7B4W3AdtpwOB3%2FazmDJi2JRahnjDMrgJTshM5eLOYjfBYDVho%2FIThnQOOZQvTcpDpnf1%2FI52BTVuSHFZejiw7ZrYxWAY4o4ve0Ym4xgEAZiC%2BelMhzhjXQpvyxtPB%2BikdcPGcX9ZgNP2A1%2BGcOuElXudoNGVxSiAEgmenlvKR4ujXOPsIjLv6BIhkqeKcV3O5f3vQB60cfg4TfciIU7rjZt9cX68lPwtxScBtQvMPSEX1zBHFh8pHoFIxVL7alZX%2BXPfBUEjZZlqr8elepPhlYP8kEfjRhkpscfz4zODdhD4uHElFfNfF1DZzRTkcjjCAv5zySFbsd1zJPXLL64DDJCYrZFY34PSiGqosPNo3NrM3icpcEtHKQR4Fp7PKSkqcNCiikPK9SO7i1zzqF2w3wXZGo2degMOfvp8YGOqUB%2Bv91dW8czxTwGKqVmBOnQ3GMf3HU9HchYXBC7ywzWuVolCVtpVihgAfIMpzvfOuQdUaPJDUfEyETwyqtmxRUO9aAR4%2FHqCNB4BaAKTID9zSzjOXFqRzJV1%2FFZJ9YfyVrr3l3f2mWiOXoWYTgGG4YqzYOhtnyBHNLyX%2B7a%2BLdV2oevuxfRmVk%2FVt8Nieg50J9H5Oe%2B8Bepe7x3cPErnXAg2sC2K%2F5&X-Amz-Signature=809dd783c5c88ce9cc9bf39d935d4c891eed314d7f41db2070ed361ff9e16c53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
