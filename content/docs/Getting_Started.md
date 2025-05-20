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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675L7JPX3%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDp3lRiDLpZoROmztV2akWEy%2BjeK1Qqfro554N1G9LQaAiEA%2BB9d7ZZ%2B46kYIqJuhl9C%2BLVHhdORjtGYZGEoVNrLjY4qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA00udFNClJwQEW38CrcA%2FG2CnGCs2n3G8Oyc8ts2m8KaKpAIpJ0pqwhorRrtTD89larN0gj8n04IzBNEGItqokHzS9KpSZJ5LwFH4jx5IuIBIFAYkbYjCnYMrF6ofGRNXrhmz9l2CunsyX1taEjh1c736WgGXS65tnTjfrebaphngjoL2F2yhUY6XxkCknFA3GZAk3n1ryLBGc%2FJAo%2FSnh3PFDB1uIqMcukylPVnYoy5UmgTJ7i5nOqSBencOxdnMTL01da1vuE3lRRgvIvr7LXCEUgKwqZz9Nf0O%2BIhfA1P4Oa%2BJKjKVgc5%2FCuvIsF%2FkxEm76s18h5uJRlRqG2RQ25MNdxgrj79vFxCrm%2FNfTf15511ztIauGGcPIbN%2FBjO5kvBwhDcLyn1ihfQxDx2eI%2B1kU5kww9aOp4oQGUtuF5XkjR5S9d5LVUhnezDdOvaiZe4jj5DHN96UEFUQhsotO8g9iRnmxCw4vpn7yLK79vg4r2%2BkqR0Rtpw9Aqi4jSF2TJbrRDQhWTCrC3Z3VnQGLpN34dioAA4ULlOrJTgj280ZhwPRjUlgFsPHCAfgE%2FkPkb2xfxQVc2d1PrXbG%2BKe62InKmuUKOKdGf7Ut7G0xUz5EpBEsrLoYFnQs%2FOH6Sgs1VcvCu751HJxATMM%2FJssEGOqUBK92uA0Fm6Ut9GnsmA8g7SjUsPLBwMHyT9TqNIDQIsBMWRJEENvN4fOPJD8WLsIQwk7ceSxERHWruSOEXvPgM0btAeYu8qADClwWhVGEFYHiKMLIP2Hu0CoxnDRnSpHlLos3VoTOqP2t0uWyDn2ZsktwYmPDWqHN4BYi37yhGrDykevYr%2BR6oh5vh3RBlIhBRP9Pg46VUt%2F6%2BRUV9scKPUxfQyVM4&X-Amz-Signature=726eb6f68c12a3563e4a4eb93e5d17e3550722bb17e4b99437e9f70d9f960a4f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675L7JPX3%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDp3lRiDLpZoROmztV2akWEy%2BjeK1Qqfro554N1G9LQaAiEA%2BB9d7ZZ%2B46kYIqJuhl9C%2BLVHhdORjtGYZGEoVNrLjY4qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA00udFNClJwQEW38CrcA%2FG2CnGCs2n3G8Oyc8ts2m8KaKpAIpJ0pqwhorRrtTD89larN0gj8n04IzBNEGItqokHzS9KpSZJ5LwFH4jx5IuIBIFAYkbYjCnYMrF6ofGRNXrhmz9l2CunsyX1taEjh1c736WgGXS65tnTjfrebaphngjoL2F2yhUY6XxkCknFA3GZAk3n1ryLBGc%2FJAo%2FSnh3PFDB1uIqMcukylPVnYoy5UmgTJ7i5nOqSBencOxdnMTL01da1vuE3lRRgvIvr7LXCEUgKwqZz9Nf0O%2BIhfA1P4Oa%2BJKjKVgc5%2FCuvIsF%2FkxEm76s18h5uJRlRqG2RQ25MNdxgrj79vFxCrm%2FNfTf15511ztIauGGcPIbN%2FBjO5kvBwhDcLyn1ihfQxDx2eI%2B1kU5kww9aOp4oQGUtuF5XkjR5S9d5LVUhnezDdOvaiZe4jj5DHN96UEFUQhsotO8g9iRnmxCw4vpn7yLK79vg4r2%2BkqR0Rtpw9Aqi4jSF2TJbrRDQhWTCrC3Z3VnQGLpN34dioAA4ULlOrJTgj280ZhwPRjUlgFsPHCAfgE%2FkPkb2xfxQVc2d1PrXbG%2BKe62InKmuUKOKdGf7Ut7G0xUz5EpBEsrLoYFnQs%2FOH6Sgs1VcvCu751HJxATMM%2FJssEGOqUBK92uA0Fm6Ut9GnsmA8g7SjUsPLBwMHyT9TqNIDQIsBMWRJEENvN4fOPJD8WLsIQwk7ceSxERHWruSOEXvPgM0btAeYu8qADClwWhVGEFYHiKMLIP2Hu0CoxnDRnSpHlLos3VoTOqP2t0uWyDn2ZsktwYmPDWqHN4BYi37yhGrDykevYr%2BR6oh5vh3RBlIhBRP9Pg46VUt%2F6%2BRUV9scKPUxfQyVM4&X-Amz-Signature=6e742b70be5f65d7026ccce30f049a3b8fff220e0155708d5d0b65dcb3117e4f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675L7JPX3%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDp3lRiDLpZoROmztV2akWEy%2BjeK1Qqfro554N1G9LQaAiEA%2BB9d7ZZ%2B46kYIqJuhl9C%2BLVHhdORjtGYZGEoVNrLjY4qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA00udFNClJwQEW38CrcA%2FG2CnGCs2n3G8Oyc8ts2m8KaKpAIpJ0pqwhorRrtTD89larN0gj8n04IzBNEGItqokHzS9KpSZJ5LwFH4jx5IuIBIFAYkbYjCnYMrF6ofGRNXrhmz9l2CunsyX1taEjh1c736WgGXS65tnTjfrebaphngjoL2F2yhUY6XxkCknFA3GZAk3n1ryLBGc%2FJAo%2FSnh3PFDB1uIqMcukylPVnYoy5UmgTJ7i5nOqSBencOxdnMTL01da1vuE3lRRgvIvr7LXCEUgKwqZz9Nf0O%2BIhfA1P4Oa%2BJKjKVgc5%2FCuvIsF%2FkxEm76s18h5uJRlRqG2RQ25MNdxgrj79vFxCrm%2FNfTf15511ztIauGGcPIbN%2FBjO5kvBwhDcLyn1ihfQxDx2eI%2B1kU5kww9aOp4oQGUtuF5XkjR5S9d5LVUhnezDdOvaiZe4jj5DHN96UEFUQhsotO8g9iRnmxCw4vpn7yLK79vg4r2%2BkqR0Rtpw9Aqi4jSF2TJbrRDQhWTCrC3Z3VnQGLpN34dioAA4ULlOrJTgj280ZhwPRjUlgFsPHCAfgE%2FkPkb2xfxQVc2d1PrXbG%2BKe62InKmuUKOKdGf7Ut7G0xUz5EpBEsrLoYFnQs%2FOH6Sgs1VcvCu751HJxATMM%2FJssEGOqUBK92uA0Fm6Ut9GnsmA8g7SjUsPLBwMHyT9TqNIDQIsBMWRJEENvN4fOPJD8WLsIQwk7ceSxERHWruSOEXvPgM0btAeYu8qADClwWhVGEFYHiKMLIP2Hu0CoxnDRnSpHlLos3VoTOqP2t0uWyDn2ZsktwYmPDWqHN4BYi37yhGrDykevYr%2BR6oh5vh3RBlIhBRP9Pg46VUt%2F6%2BRUV9scKPUxfQyVM4&X-Amz-Signature=9854f6f6b4f6c399ebf63759cfd12e7e5ba75c6ac73471c00debaff1ed5cba88&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ICOFPO%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0SgnaeNG6QGud8P%2BJ2C2QT3CfjRdAwL5Zm17piBJWcAiEAu4xt5JGxMDtthSOeVj5lhxz8%2FHRoFaHcCy3v1Xe6yxEqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG37wucWHgrjii6OESrcA2uRetgirWFtlrdPpR5hv552B0kaoFPXr%2FI734KvIWcH%2Fvmd8pi8St%2FrNhaVilOauRFlj8sNUYTLtnNDg6JkR8HAqMcGKA%2B3wTcWB1af8%2Fc71S8DdJd%2FVz3z29KgKOyjyA9jc5aGrzGzm5212KaMSNkqm%2B7eXMdYi7JTVuelMhCscSsOWd6Qxe6swOYz2dp2CiRbaXAlAkK%2Fv48nrA8qRbe5BDywNGAIbf1zD7Kqc88Etxe2tHfw6m0grVMiqyquUdR0Sn5PTSbs4tln2Sb5tlEbktDTNBphoBSY%2By6AfnDq%2B7XcgqL0K1d6wMT%2Ba2N31%2Ftp29uPoC5AxMnwps3Yk9kD1NG5DgYgEx2NQVZplHuSCLA4P%2FIk7hql57TzFEqU8H%2FexkK%2BhNsXe%2FneArf7tHAM0%2FXIRnOHIsDejinoo%2Fr8txVIqqy66jgIdtku3KveNLX5xzU%2BIZPmk9v0j6mP%2BAgdsDUCfzQbTG5RvLdVeWx2PpObrxgaLlWwuVow8uwCZBnuiNOq3ayo1%2Byt%2FicMZfTPaBkus6hG9Of%2BW7FPyMsOdinwOE5NRSaF2AuLdcpIYSu%2BfQmX9nNgijepXSMwUmH%2FMdi%2Fw5nJlt4g1XRBlspG7Ynx%2B%2FLir4foGNnWMOLJssEGOqUBLXs1aC2cKNiAJ9zM5GuIcEBM%2BIzEl2Mn9%2BGvsR719fZZAmjtmxtqcsd6JZst7Pu0g6%2FxAvdzWwh5u8UxVpJziC6uPzyLqpt9UImf4NnDLMZ6qEsFd6LjPoatXM0J7vc%2Fg6bYgAA%2BO3qhXR1x2H8WmBdPUY2f44olJLaT6pX%2FSkXDKZfYhqQ4QPfxv7dUAvG55xhTc82Gx%2FyTnkUpPJarqokCydfJ&X-Amz-Signature=ea25884aea6b87bf552330149cab1071d4140916d31320bdfa4a6ff324d414dd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNUKX65E%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWP3RJ5xhNCZX6NHSBmL4k4q7gEzB92Jm0Z5rRb9X60QIhAPRH4B8bXTSkcBkNAyEGsyoApCoPwEwv7owFxIss1%2BQAKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3LVGxdyuPZz55DAAq3ANGBRJbZaWq4KwUutL60YjzUoEHAi8fPRDI4OLFY48EP5Msq%2FjVgaqny2ySVLU%2B5xf5MM7lnTM8kiUKKGieuPVHojjpobznpZw9ST6uaZVPw5HpPNPYGhMa7Xl6wZ7NwrryRIVbH%2FmLEX2rQL8rWqQ9jXxD6BcDu6q7FqatyV0Dd9rqFGTj%2Bg3g7SP6XFQRxHDO183lfVhb9brMKtE4%2BH6GTYZx1z4FJFkPj5sNtfzJvdMo9hLs9Tv7Ri6KE7ZENQO3r8TeWzcS0bP7Lfyv1YQcrYjdc%2BcypTWCugcD4EphQhLBMsIPr6vf6yuxj3fvTX1XkFIwAtpPzEmfo6K%2FV%2B1Q72ecjzbwkMpMqWOyVzwaMDbSwfZ84EFAdu3qoBK05Al%2BquX6iC2K5SBrot2k8GbxeVJUHz8ywt6LXo1k3rKudzuYrjRC%2BuQYm%2FOvHos5Q%2FRobK%2F%2FYRq3algoUs5H9EEmimTM5Fvd1bTrdiaIag0FPkg0l3RA004ZrzXRdmWe51yyzZvCL21z2gecIdeNtsU87Zm31wggSDQKV5UI6S1xzJXNkcMcM6UvyVScTYKWq0DZ43YVBeMF7Hzjjh45iV6Ku%2FcOCr35yb4KQ0PvguDfb0D9kuM130BOYpJajjDsybLBBjqkARN465%2FbZlSGsexaK6jYBNHWZhIzS6thsUXgIEGqohbYJtkdZJX9AdUCh6SY5vFzhoc9LBIvTUFrlDe7M1%2FUcQwfCN%2Fq0BVwPSAT4h37guxoud8Iw6bP23rxNj10JWSgm%2FvcefUE2Vf9D%2FRufMnjJBtUQjNhK7yC5wAxX0GNEi7NWN99aZbUQI5675BowaFhaNpF1bY4ihjCfVwiL%2BQ8RbPRDYc7&X-Amz-Signature=a5928cd4174d689aff13e686db203e1cd283ac747eaaffbdb8fef46570f08e73&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675L7JPX3%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDp3lRiDLpZoROmztV2akWEy%2BjeK1Qqfro554N1G9LQaAiEA%2BB9d7ZZ%2B46kYIqJuhl9C%2BLVHhdORjtGYZGEoVNrLjY4qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA00udFNClJwQEW38CrcA%2FG2CnGCs2n3G8Oyc8ts2m8KaKpAIpJ0pqwhorRrtTD89larN0gj8n04IzBNEGItqokHzS9KpSZJ5LwFH4jx5IuIBIFAYkbYjCnYMrF6ofGRNXrhmz9l2CunsyX1taEjh1c736WgGXS65tnTjfrebaphngjoL2F2yhUY6XxkCknFA3GZAk3n1ryLBGc%2FJAo%2FSnh3PFDB1uIqMcukylPVnYoy5UmgTJ7i5nOqSBencOxdnMTL01da1vuE3lRRgvIvr7LXCEUgKwqZz9Nf0O%2BIhfA1P4Oa%2BJKjKVgc5%2FCuvIsF%2FkxEm76s18h5uJRlRqG2RQ25MNdxgrj79vFxCrm%2FNfTf15511ztIauGGcPIbN%2FBjO5kvBwhDcLyn1ihfQxDx2eI%2B1kU5kww9aOp4oQGUtuF5XkjR5S9d5LVUhnezDdOvaiZe4jj5DHN96UEFUQhsotO8g9iRnmxCw4vpn7yLK79vg4r2%2BkqR0Rtpw9Aqi4jSF2TJbrRDQhWTCrC3Z3VnQGLpN34dioAA4ULlOrJTgj280ZhwPRjUlgFsPHCAfgE%2FkPkb2xfxQVc2d1PrXbG%2BKe62InKmuUKOKdGf7Ut7G0xUz5EpBEsrLoYFnQs%2FOH6Sgs1VcvCu751HJxATMM%2FJssEGOqUBK92uA0Fm6Ut9GnsmA8g7SjUsPLBwMHyT9TqNIDQIsBMWRJEENvN4fOPJD8WLsIQwk7ceSxERHWruSOEXvPgM0btAeYu8qADClwWhVGEFYHiKMLIP2Hu0CoxnDRnSpHlLos3VoTOqP2t0uWyDn2ZsktwYmPDWqHN4BYi37yhGrDykevYr%2BR6oh5vh3RBlIhBRP9Pg46VUt%2F6%2BRUV9scKPUxfQyVM4&X-Amz-Signature=eb02c9b29227a56cf5415cf60536b07e7ab009ca7378ec12e028e32d0a16d8d2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
