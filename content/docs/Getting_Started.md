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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W76MODGT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdIZLP3L2YGxdDIJMnRGsR0HkvSQCspgi914XgsB5PKAiEA9NdtgwyUCUNpETHv94w%2B%2FX75mf7fc1%2BJO3ktYzDXJvcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFl%2FhpPCsHPaqj2XSrcA%2FO%2FClY63v6aMzx%2FXsV%2BLVIzEh%2Bbr6TBmRCxlx3lwzbDnkClejcQQZMJN6oJBXW3pDxilp2codGJwAshSb2iqN3JxZn4%2BfYY7TH%2FXuUGZ8X7BwxNkI7TsWyUqwb6PsXgsaBPCB7bFgLG59FDZJC7vzBR%2B3SH717YlQT%2B7AZxR0OcCoiI33K2wcVk9X3tyWlFoiDd3xg71PFCRRqUftIrjKTk3pGtaPc%2Bxkd%2FV3iwLkPDU2Z8atxYJyc%2Br6xEzVGzw5iFHn%2FBIJQ3zKv%2FJsBsISCjDemRLR57fjqBbZnpShLUXt62PKwfHfPfSBJPkglZ%2Fzm27YTrmmO8nGkA9E1rly6nU1crz%2Fu8gygUJUFedx%2Fn8IchHZ%2BUmvveqsJ%2BtSH51xrIL1%2FAnUwgJ2ZAaN7J2FdQ9kwgIOGlLvYT2yiCjOXCg7Hwca4YZRNNqkSVnPp35YgGPVA3JmTa9c9iSDCopjh7s07J8xzfHrznKuoEbBMy4BdE3hMEoF%2FIKo6TtHVzu%2BXv0l5vsDlFv7tP0Ot%2Bn82r7VTncvKuthsdUJ7nDpOwU8vfdbd2mR%2FlweVj7tx%2BCimg2F6yj8j5QubiIzSJ8Cu%2FMZdZsw4g9PkmH7ubmXkKypQFCPpDFYAS3obmMLC648QGOqUBileBc04SUJ8vqPHNEK94Qc7zPB6atVC8z87sSoPM%2BLCY3ChYBX3Vjdc5FbZGoRGZQUP2%2F4cOLuCidyNtErwhQuveL%2FCvFH2DQeY82X4D%2BYxv%2Fvf1pLwNJBIZ1IHV7okZWSYSWw2je49Gm6%2F4SOsIoWwePkdn%2BytQM9Zj469sYMDf5RMStvmyCrV0EX%2Bd90kQ8RUPi5XgIEQYqqaNRDYuaoVCIYUx&X-Amz-Signature=55e91e7ea9f155f92d78cada8fe9f3fd20a121f2193fb741850ffaccd122593b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W76MODGT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdIZLP3L2YGxdDIJMnRGsR0HkvSQCspgi914XgsB5PKAiEA9NdtgwyUCUNpETHv94w%2B%2FX75mf7fc1%2BJO3ktYzDXJvcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFl%2FhpPCsHPaqj2XSrcA%2FO%2FClY63v6aMzx%2FXsV%2BLVIzEh%2Bbr6TBmRCxlx3lwzbDnkClejcQQZMJN6oJBXW3pDxilp2codGJwAshSb2iqN3JxZn4%2BfYY7TH%2FXuUGZ8X7BwxNkI7TsWyUqwb6PsXgsaBPCB7bFgLG59FDZJC7vzBR%2B3SH717YlQT%2B7AZxR0OcCoiI33K2wcVk9X3tyWlFoiDd3xg71PFCRRqUftIrjKTk3pGtaPc%2Bxkd%2FV3iwLkPDU2Z8atxYJyc%2Br6xEzVGzw5iFHn%2FBIJQ3zKv%2FJsBsISCjDemRLR57fjqBbZnpShLUXt62PKwfHfPfSBJPkglZ%2Fzm27YTrmmO8nGkA9E1rly6nU1crz%2Fu8gygUJUFedx%2Fn8IchHZ%2BUmvveqsJ%2BtSH51xrIL1%2FAnUwgJ2ZAaN7J2FdQ9kwgIOGlLvYT2yiCjOXCg7Hwca4YZRNNqkSVnPp35YgGPVA3JmTa9c9iSDCopjh7s07J8xzfHrznKuoEbBMy4BdE3hMEoF%2FIKo6TtHVzu%2BXv0l5vsDlFv7tP0Ot%2Bn82r7VTncvKuthsdUJ7nDpOwU8vfdbd2mR%2FlweVj7tx%2BCimg2F6yj8j5QubiIzSJ8Cu%2FMZdZsw4g9PkmH7ubmXkKypQFCPpDFYAS3obmMLC648QGOqUBileBc04SUJ8vqPHNEK94Qc7zPB6atVC8z87sSoPM%2BLCY3ChYBX3Vjdc5FbZGoRGZQUP2%2F4cOLuCidyNtErwhQuveL%2FCvFH2DQeY82X4D%2BYxv%2Fvf1pLwNJBIZ1IHV7okZWSYSWw2je49Gm6%2F4SOsIoWwePkdn%2BytQM9Zj469sYMDf5RMStvmyCrV0EX%2Bd90kQ8RUPi5XgIEQYqqaNRDYuaoVCIYUx&X-Amz-Signature=b8f2f73682cdef96bb7ea21e9ac97ca616cada9027ca3ca818085a42fdd6203a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W76MODGT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdIZLP3L2YGxdDIJMnRGsR0HkvSQCspgi914XgsB5PKAiEA9NdtgwyUCUNpETHv94w%2B%2FX75mf7fc1%2BJO3ktYzDXJvcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFl%2FhpPCsHPaqj2XSrcA%2FO%2FClY63v6aMzx%2FXsV%2BLVIzEh%2Bbr6TBmRCxlx3lwzbDnkClejcQQZMJN6oJBXW3pDxilp2codGJwAshSb2iqN3JxZn4%2BfYY7TH%2FXuUGZ8X7BwxNkI7TsWyUqwb6PsXgsaBPCB7bFgLG59FDZJC7vzBR%2B3SH717YlQT%2B7AZxR0OcCoiI33K2wcVk9X3tyWlFoiDd3xg71PFCRRqUftIrjKTk3pGtaPc%2Bxkd%2FV3iwLkPDU2Z8atxYJyc%2Br6xEzVGzw5iFHn%2FBIJQ3zKv%2FJsBsISCjDemRLR57fjqBbZnpShLUXt62PKwfHfPfSBJPkglZ%2Fzm27YTrmmO8nGkA9E1rly6nU1crz%2Fu8gygUJUFedx%2Fn8IchHZ%2BUmvveqsJ%2BtSH51xrIL1%2FAnUwgJ2ZAaN7J2FdQ9kwgIOGlLvYT2yiCjOXCg7Hwca4YZRNNqkSVnPp35YgGPVA3JmTa9c9iSDCopjh7s07J8xzfHrznKuoEbBMy4BdE3hMEoF%2FIKo6TtHVzu%2BXv0l5vsDlFv7tP0Ot%2Bn82r7VTncvKuthsdUJ7nDpOwU8vfdbd2mR%2FlweVj7tx%2BCimg2F6yj8j5QubiIzSJ8Cu%2FMZdZsw4g9PkmH7ubmXkKypQFCPpDFYAS3obmMLC648QGOqUBileBc04SUJ8vqPHNEK94Qc7zPB6atVC8z87sSoPM%2BLCY3ChYBX3Vjdc5FbZGoRGZQUP2%2F4cOLuCidyNtErwhQuveL%2FCvFH2DQeY82X4D%2BYxv%2Fvf1pLwNJBIZ1IHV7okZWSYSWw2je49Gm6%2F4SOsIoWwePkdn%2BytQM9Zj469sYMDf5RMStvmyCrV0EX%2Bd90kQ8RUPi5XgIEQYqqaNRDYuaoVCIYUx&X-Amz-Signature=586a85d8364bcc063bd0f36ab9625b54ec738a40129b9a57fbc82aa990f18c1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GMQTXFL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL3RPXyQD%2FlXpKFlHoxBxIPhHWO%2Bpa5cZWeCixhQjRAwIhAM2%2B5R9C0mRoEIvHAjP7dJafihC4RIXLMpd5HVUalfGOKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxo7BM1Qz2Gdo4XEjQq3AMh1vt1IVoBnyFVoTNGYW3JncZ3Zlg5xJ6YTkxetWDNI%2BSD2xghxcPG3BWeW3EJXvUy6uB0jDJr2ittpcLnUykFYD6ks%2FhSMkJ2Rp1NbCozmNfy56omPcpSwgpEmXzGYKQUEdV4Ww6BdvfeHrVal6jkBJz5jsYo5M2zTLB%2F6%2FH5G0eYDaOknf4%2FkA6iUaHXkDF6IkaFSnFjMbGz2cej1I9QCM%2B1LBdG8TDPhboBK2Wf7inE3KbnS5RwYqbeklxeJJ3geODiTByDoxGBVURtYrngoWjlnG87oRQ45%2BUm%2FGOgnCQ1Eox0HP%2FWIg%2BPLEnw%2FynPepsdleOfpus89gvWg52xh0CgIOxbeZVsFeYRVk1us1tp4oM51n31ITQu7iRQRyESlD5ChAZnD%2BzuRp9YKXMOc%2FLPZsGCq8ulmkHzKJyMjx7hZ0cMZMj2elVaG28w2f6DpMy01cu3dnfz%2B25R%2BwO6ie6ZDcA%2FiT2j3NauPvascRTX67uxZ%2FBBuGKlCI9tOhxIHIBwrYlsIWvNIrRWEndvsfPBoajGUCu%2BAZ3HCfMP39WZTL7Hq1Oi71h6uSKRBoqnXo9XKSKohFcVoPbQAZiU0AhSNNSekkycGyki8tSoCXD8oaaqutTIvOmmTjC1uuPEBjqkAfjjzvgktU8UYrEyaeW8Kb4riT4cj1v6MttK9EQurq3EfEsKZjysWVbSdUyDdG8FryKxle2r%2BOwzdQCpOG2O6YvWuldRqtP7LJqlaLbGUdxabz2JRqUX8xxMBgcEoTiV7K6kelrqFqAbJP9P2asR1Ws0ks1vtr1BegbPkuD0E4sEgjrMmDPb1%2Fj%2Bm5N7KFSALoJ3L0CRNxwgEhu%2BIa%2Fghj%2ByOJek&X-Amz-Signature=adafc30f14584f8c0567461ac74a2bc1a13c0c8d0dc1dcd40b837b64d912d563&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFS6NS2Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDhTkWwItjjktUSyi7e12E2cH4H7OirFy%2FA5eQyavvDjAiEA%2FxTxiH%2FSwx2N5blYgiLbJs%2BH4mW7yxOCQBqcUWsPqbYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDECjp5eDBcLwpDAigyrcA0%2B27WsUSknMzVHve926pJsRMlQkClAXm02DPsVgzb%2FRbm7ROh8IYW7nqUfMJNpyQWwTS7aX54mQUfSL5O6o%2Facgk6g%2FvoHjHwHw2K9N6cGzGhQwNpo3cTTGYpuvd%2Ba9P69JeK4E%2Bg4KLuPTrCSv5dRG7By39EnG09G%2FJO1zW4zMYjRASKxD%2FjgHnB4ILV7JB3Gz%2FR%2B4NmEPSgKTAPSonmol8L6kZdVplDFmNsyyEXm6nh3gk5wnEtCEKMOs1oS9d9VEN7fKKjqxdXqVqsVIheR0nbfdItAf5YF6J80R8POnyveFh0A47wCcwu16KevO02iGrV7bMXH%2BS%2Bj9C9TJ%2BfeYJmEE4ufHhN7Mbji7fBOpMy%2FmYjI2SRNkm3gEeBTNr%2FIZ5YhmNKASBMLPxzPLMJz26XCJEXoySnRQqXR26ekyCzjhu8cwyPj%2BN%2BIz01WJ2RWaYs8mJF%2FFe47f19T7KJgwhqlYM1hakdsx%2Bxi%2B7oFby8NVCh0E35xEP1l6d1jD36jyjjFY%2FqPZ%2BRND5DO3JbLDtQ4%2Fc99sc46ewDyeIfoNR%2Fx78jtVJRh1FgE0ALExsVFBc4nkjByRNPF5Wj9f5UihvkDjglnVWfw%2FjGzxADM7SE0%2FYxY4WoQQViwbMP2648QGOqUBvNIvRadJ%2BzQJulsgHEul9ispLFDR45rR0XKh8LvysAXSGnNW2t8cgHWH4Mv%2FllWE6jKn914ULUaL%2BmxjEc1iJznqhaPnx9UUMSDhoawEZpYK0otM59yFDOIQsifXe0%2BVft%2FyllM31C1fpnNeWVOQwDFQc1wMHPYhVInw4Vq2kSUITpehUp8gCwA6GYeD84F2HIpTfPetr5G%2B1e0OvJKjRN82L8rE&X-Amz-Signature=8ff288543a8f48eb44e921b188cacad70b6ecf2dde3def6adcde79df3b39b0b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W76MODGT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdIZLP3L2YGxdDIJMnRGsR0HkvSQCspgi914XgsB5PKAiEA9NdtgwyUCUNpETHv94w%2B%2FX75mf7fc1%2BJO3ktYzDXJvcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFl%2FhpPCsHPaqj2XSrcA%2FO%2FClY63v6aMzx%2FXsV%2BLVIzEh%2Bbr6TBmRCxlx3lwzbDnkClejcQQZMJN6oJBXW3pDxilp2codGJwAshSb2iqN3JxZn4%2BfYY7TH%2FXuUGZ8X7BwxNkI7TsWyUqwb6PsXgsaBPCB7bFgLG59FDZJC7vzBR%2B3SH717YlQT%2B7AZxR0OcCoiI33K2wcVk9X3tyWlFoiDd3xg71PFCRRqUftIrjKTk3pGtaPc%2Bxkd%2FV3iwLkPDU2Z8atxYJyc%2Br6xEzVGzw5iFHn%2FBIJQ3zKv%2FJsBsISCjDemRLR57fjqBbZnpShLUXt62PKwfHfPfSBJPkglZ%2Fzm27YTrmmO8nGkA9E1rly6nU1crz%2Fu8gygUJUFedx%2Fn8IchHZ%2BUmvveqsJ%2BtSH51xrIL1%2FAnUwgJ2ZAaN7J2FdQ9kwgIOGlLvYT2yiCjOXCg7Hwca4YZRNNqkSVnPp35YgGPVA3JmTa9c9iSDCopjh7s07J8xzfHrznKuoEbBMy4BdE3hMEoF%2FIKo6TtHVzu%2BXv0l5vsDlFv7tP0Ot%2Bn82r7VTncvKuthsdUJ7nDpOwU8vfdbd2mR%2FlweVj7tx%2BCimg2F6yj8j5QubiIzSJ8Cu%2FMZdZsw4g9PkmH7ubmXkKypQFCPpDFYAS3obmMLC648QGOqUBileBc04SUJ8vqPHNEK94Qc7zPB6atVC8z87sSoPM%2BLCY3ChYBX3Vjdc5FbZGoRGZQUP2%2F4cOLuCidyNtErwhQuveL%2FCvFH2DQeY82X4D%2BYxv%2Fvf1pLwNJBIZ1IHV7okZWSYSWw2je49Gm6%2F4SOsIoWwePkdn%2BytQM9Zj469sYMDf5RMStvmyCrV0EX%2Bd90kQ8RUPi5XgIEQYqqaNRDYuaoVCIYUx&X-Amz-Signature=cc454427a490deb36339ea82831e96f5aa4958396b41164a8a71587039eef5d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
