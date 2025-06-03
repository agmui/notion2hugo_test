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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XO7QIOS%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD0CJa6CLvUOF3CbeYKtuE57r%2Bs0QNVrsmKpIZT3YyrYgIgRP8L8QhvO06k7iyonwEEeI7fLfQK%2FDDtyyH5AKtelckq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDDvLegmBiYrgPipUEyrcA36QMtuBlm%2FnAwURst6AYN0Cv8PhVfA8rn6Mn4HrPEL%2BxHE%2Bmt%2FJNP222RIfLNfSAkKIAWDqcVagJiGMOUqw1N7Pflm3%2FoGhbViR6G0Btwgl3bkEkO27NCRHpA%2FiAEbJikMSnEPlBNcyXQM%2FWiJEWm2rsGVJKkRygvm5gowR%2F%2FBj84rNBzzcrGwh%2BvyjI5%2FWvfRCDiqsDYFTVSmo33853f8x1GSm1cA4voXFvPcGdtcECTz7Ey%2FD5g8cYUdnhKjZLzgWhc4IVLBHamt4JkHan43fI0eksv8755Sx8KoRUmh455mPKStO6CP%2FcMWrX7vZ30XzaTccDy3mpiPbZgLGLMob5YNNSOr3bD%2F7u6p60aGZYVDVNp0QaOwUwV7noiXRFHE2aIrd9WPw9VLf9FKV2m3Y5k9NCDBWpWST1Gl0kPz%2FcvsS96Wt1ZWj8y5A8v1ICFDbIQOp%2BLbhJPP81kz%2Ba7ZpZVFa2QpVsk5XYuYk1j8KJ4da2NyM42sOb9tnAVd%2FEJfinQ6F9%2BAfeg3s0vsTRNAC2Ay%2FyY78XeSIW2R54jDdXAjeHJXFX8supPK3DcSQk%2B%2FXhMk3Q25otjb1qBoGNTPmET7%2FSO7ULl8l0q%2BYySuuyBtmkNSWzys6a%2B1tMMCg%2FMEGOqUB6%2BOLrOHkwNDzhB2n11eBgdG%2BJiOjE7lxpDRVBB0Y8%2FB1x4xtOqjwE5pK%2Bz5gxad4Y7mZVbES3YXdhBA3SaHfhQ0dE8pejW8PmW0tbQ3J7aeoHN3bTRZbhErmc7RtHi%2Fu3L00cHvWseIMj5%2BWtrBb8S2jz%2F2LDgz9HbiVPEuo95WavwvWfJfLaZBvL0gVO5c9hEuykJQZ1iH3DMASD823GAtWNuNS&X-Amz-Signature=9af91f0158e9ca8c354c997e34ee8c5e5f71b7b8f04b5fb752cda1bf639433a3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XO7QIOS%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD0CJa6CLvUOF3CbeYKtuE57r%2Bs0QNVrsmKpIZT3YyrYgIgRP8L8QhvO06k7iyonwEEeI7fLfQK%2FDDtyyH5AKtelckq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDDvLegmBiYrgPipUEyrcA36QMtuBlm%2FnAwURst6AYN0Cv8PhVfA8rn6Mn4HrPEL%2BxHE%2Bmt%2FJNP222RIfLNfSAkKIAWDqcVagJiGMOUqw1N7Pflm3%2FoGhbViR6G0Btwgl3bkEkO27NCRHpA%2FiAEbJikMSnEPlBNcyXQM%2FWiJEWm2rsGVJKkRygvm5gowR%2F%2FBj84rNBzzcrGwh%2BvyjI5%2FWvfRCDiqsDYFTVSmo33853f8x1GSm1cA4voXFvPcGdtcECTz7Ey%2FD5g8cYUdnhKjZLzgWhc4IVLBHamt4JkHan43fI0eksv8755Sx8KoRUmh455mPKStO6CP%2FcMWrX7vZ30XzaTccDy3mpiPbZgLGLMob5YNNSOr3bD%2F7u6p60aGZYVDVNp0QaOwUwV7noiXRFHE2aIrd9WPw9VLf9FKV2m3Y5k9NCDBWpWST1Gl0kPz%2FcvsS96Wt1ZWj8y5A8v1ICFDbIQOp%2BLbhJPP81kz%2Ba7ZpZVFa2QpVsk5XYuYk1j8KJ4da2NyM42sOb9tnAVd%2FEJfinQ6F9%2BAfeg3s0vsTRNAC2Ay%2FyY78XeSIW2R54jDdXAjeHJXFX8supPK3DcSQk%2B%2FXhMk3Q25otjb1qBoGNTPmET7%2FSO7ULl8l0q%2BYySuuyBtmkNSWzys6a%2B1tMMCg%2FMEGOqUB6%2BOLrOHkwNDzhB2n11eBgdG%2BJiOjE7lxpDRVBB0Y8%2FB1x4xtOqjwE5pK%2Bz5gxad4Y7mZVbES3YXdhBA3SaHfhQ0dE8pejW8PmW0tbQ3J7aeoHN3bTRZbhErmc7RtHi%2Fu3L00cHvWseIMj5%2BWtrBb8S2jz%2F2LDgz9HbiVPEuo95WavwvWfJfLaZBvL0gVO5c9hEuykJQZ1iH3DMASD823GAtWNuNS&X-Amz-Signature=b104620baeb8260c46a927202f3afd012679911e844327d7af8c04648f93bd8e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XO7QIOS%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD0CJa6CLvUOF3CbeYKtuE57r%2Bs0QNVrsmKpIZT3YyrYgIgRP8L8QhvO06k7iyonwEEeI7fLfQK%2FDDtyyH5AKtelckq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDDvLegmBiYrgPipUEyrcA36QMtuBlm%2FnAwURst6AYN0Cv8PhVfA8rn6Mn4HrPEL%2BxHE%2Bmt%2FJNP222RIfLNfSAkKIAWDqcVagJiGMOUqw1N7Pflm3%2FoGhbViR6G0Btwgl3bkEkO27NCRHpA%2FiAEbJikMSnEPlBNcyXQM%2FWiJEWm2rsGVJKkRygvm5gowR%2F%2FBj84rNBzzcrGwh%2BvyjI5%2FWvfRCDiqsDYFTVSmo33853f8x1GSm1cA4voXFvPcGdtcECTz7Ey%2FD5g8cYUdnhKjZLzgWhc4IVLBHamt4JkHan43fI0eksv8755Sx8KoRUmh455mPKStO6CP%2FcMWrX7vZ30XzaTccDy3mpiPbZgLGLMob5YNNSOr3bD%2F7u6p60aGZYVDVNp0QaOwUwV7noiXRFHE2aIrd9WPw9VLf9FKV2m3Y5k9NCDBWpWST1Gl0kPz%2FcvsS96Wt1ZWj8y5A8v1ICFDbIQOp%2BLbhJPP81kz%2Ba7ZpZVFa2QpVsk5XYuYk1j8KJ4da2NyM42sOb9tnAVd%2FEJfinQ6F9%2BAfeg3s0vsTRNAC2Ay%2FyY78XeSIW2R54jDdXAjeHJXFX8supPK3DcSQk%2B%2FXhMk3Q25otjb1qBoGNTPmET7%2FSO7ULl8l0q%2BYySuuyBtmkNSWzys6a%2B1tMMCg%2FMEGOqUB6%2BOLrOHkwNDzhB2n11eBgdG%2BJiOjE7lxpDRVBB0Y8%2FB1x4xtOqjwE5pK%2Bz5gxad4Y7mZVbES3YXdhBA3SaHfhQ0dE8pejW8PmW0tbQ3J7aeoHN3bTRZbhErmc7RtHi%2Fu3L00cHvWseIMj5%2BWtrBb8S2jz%2F2LDgz9HbiVPEuo95WavwvWfJfLaZBvL0gVO5c9hEuykJQZ1iH3DMASD823GAtWNuNS&X-Amz-Signature=878e3e6cbcde6c2d97e95549df5d439bcd7479ba5a26c03754fc2fe503500959&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N5ZISBW%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIATILdycUYZJrfdCR8prXpnLc4%2B1rXTxB9aWh0u43pMCAiBdWka8ZrlgBPx3DroR0FLeNILrfJvq9%2FHyVILc8hmSISr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMbcciq9fjxBVmcjDLKtwDWQX8XXiX77CNwoKXzETEgS%2BkaChqNU2DShto4WcZdtrkUxrHq8JPkVpNGHoi0h652W2s0pv9AGTYZPUNeqeWDpbrWd0E63xt1cVTOBYRI7l2hfBdMTJt%2FvLVJ5sriPe5mYvbiFylqGAMg0ms44osUUpGiV3uf8lq5WVuD3XJwVm1pjg5rU8ZC0CzwIe73xFoWSLSYSk3hQGsRWWmRmCCoTLNswz7JeofdpA2djsIz22ZfsCbOU5le58xEtisRnWqTLT5i1Qn4%2B4L1bia1wrr%2B2PRr%2Bd4iFT2Wo99tT9zGaUhRM4N9IUQDMlZ%2BwRDwGrtJwOcJecnjJWhq6%2Bc74oJdYju9eDnvymYvWjr44oqqfCbIfs%2BKlGPxHiFJAVe9kwvLl1ZEos%2Fy6xNsfUozSTsawcBfna%2B7HqxoFoOueV4Vg%2FHqy1XZb%2BOypjKf3yiQC1C%2Bt9ZM4laKBNVNk1E59WiiNAJo82OyStQDsptumt%2FQu3tDFWguC5nIuPAr7a%2F8avIcL6hjRxI6RJxMzxOwAqV42vTHp9ABChOWNqWxNZIwkG3A%2Fd9YXvVAtAtZ45JDUjBhsJ665inuDNt7990NPwm%2FrXz%2BOlM%2BxtcPAZ44FIGvZZHSApdpnz3c28Fgz4w%2FZ%2F8wQY6pgE5NXJsjxn2xK4wWQzWSFshoofF9Pmj%2BbvIbT%2BO3w4JSxh3Id5UGc5EHRXGJucQGXYUeuqZuCHo36N7v69rgNzUb37FG46jWGTGyPtjkSkSGgyMqj0yOz3zLAPFxJriwvpgtp7G4WqVeMrG%2BwFYQ5IW7xjTBsaa4aeyIdRKnn7MUU2MHu4S6%2B%2FQFoDzKeh7OQfVZFSUBbRCb%2BRxnSvjpDOpRmnqVjMe&X-Amz-Signature=b545d8e3d827dd0ab81c8653022159e532edca1fda8043d3fec0d08969ff6577&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBNL4MQR%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIE5t8fb7pMLd1RCzeGhJzrPjKAuKz3gVQFTzXkN2ATQ6AiAWswcR4L7k5kkM9cZO0NiCWYxmEBwGDxWztRqaosgESir%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIM7phivs25lktedp2dKtwDhFpg1I%2By9cL5UoLfgA1R5dBJXV9LOqy8l9AWgpbn7JEXIqweaV0UkkNNuTiKIQRwDacyY9EPC2z3TrnAB4fjmSsnavtPyzTdCppqBFsflivY4JMBBqs2Gtvn4reX4IXtYJczwk3yLdPDvm0cs5ri9R1aAsRBZu095UUE4D%2Bq%2BrjgHFn%2B783AcJbJqQfOQtlHkQhx4LUztrrUpqZi52vstuhvhAadqQ12nm0biI57BJdkL7dc3SLRJsdI74FJA6fd5Mur7f%2BAYvVwiIYRPQzDtTUqT4gMa%2B1VmC9UHqeUL3r7R0pG58n%2F%2FOfpQedemR4C3KU%2BitgMW7%2BiHp%2BhwOdntKMrerlqdpn%2B2BngGOhqE8oVSaag0TFYcEDu2ZHX%2FYnBjozENzwdHaGLgpavBEPy%2FnwQaDJO%2F2tmJ4Nek6nEMWucvTVveAx7vcSGw5mrRSGAuAL6ZTrW4u8RGgiKX%2BsJdebDspYtUUjwv1x3uP2iGMxQYyTmXKc2GFrCSg30DkDv2xjU5JbQOcmnYE0LwBKkRVuNqhZAEnwL1zM76eS4d0VwZmIaXhFSs6LnBDmX5ZPyTRwtqvX3T%2FF8FwVQvtEe8vG5zoxPrCs9XagtlMFG79XPnjN5DnCpw4pd0w8w85%2F8wQY6pgEihA5GsF%2BemjlG0Xqx4v7RSDNM1mWX7pARyMzJclJHp6s7IqKi4XQCWy44eC1l5a%2FsYBPm6VKv5dFPpg0rhQMY%2BuTeimVR494xD3%2BiRgp7L4dau7bYXNjunAGKgXpVAYYn%2FfmkCib4kajALIexyrnBDOT7%2FnjGv56l3%2B%2FejmQk0XWmt1kHkwIiexCjekUShH9zYMjWaVzogpKUBm5I2Nx30RGWHMvv&X-Amz-Signature=ef03cd468efa23f66264456ecc1c5b71008a9faffd7d940fe95d774e60d72882&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XO7QIOS%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD0CJa6CLvUOF3CbeYKtuE57r%2Bs0QNVrsmKpIZT3YyrYgIgRP8L8QhvO06k7iyonwEEeI7fLfQK%2FDDtyyH5AKtelckq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDDvLegmBiYrgPipUEyrcA36QMtuBlm%2FnAwURst6AYN0Cv8PhVfA8rn6Mn4HrPEL%2BxHE%2Bmt%2FJNP222RIfLNfSAkKIAWDqcVagJiGMOUqw1N7Pflm3%2FoGhbViR6G0Btwgl3bkEkO27NCRHpA%2FiAEbJikMSnEPlBNcyXQM%2FWiJEWm2rsGVJKkRygvm5gowR%2F%2FBj84rNBzzcrGwh%2BvyjI5%2FWvfRCDiqsDYFTVSmo33853f8x1GSm1cA4voXFvPcGdtcECTz7Ey%2FD5g8cYUdnhKjZLzgWhc4IVLBHamt4JkHan43fI0eksv8755Sx8KoRUmh455mPKStO6CP%2FcMWrX7vZ30XzaTccDy3mpiPbZgLGLMob5YNNSOr3bD%2F7u6p60aGZYVDVNp0QaOwUwV7noiXRFHE2aIrd9WPw9VLf9FKV2m3Y5k9NCDBWpWST1Gl0kPz%2FcvsS96Wt1ZWj8y5A8v1ICFDbIQOp%2BLbhJPP81kz%2Ba7ZpZVFa2QpVsk5XYuYk1j8KJ4da2NyM42sOb9tnAVd%2FEJfinQ6F9%2BAfeg3s0vsTRNAC2Ay%2FyY78XeSIW2R54jDdXAjeHJXFX8supPK3DcSQk%2B%2FXhMk3Q25otjb1qBoGNTPmET7%2FSO7ULl8l0q%2BYySuuyBtmkNSWzys6a%2B1tMMCg%2FMEGOqUB6%2BOLrOHkwNDzhB2n11eBgdG%2BJiOjE7lxpDRVBB0Y8%2FB1x4xtOqjwE5pK%2Bz5gxad4Y7mZVbES3YXdhBA3SaHfhQ0dE8pejW8PmW0tbQ3J7aeoHN3bTRZbhErmc7RtHi%2Fu3L00cHvWseIMj5%2BWtrBb8S2jz%2F2LDgz9HbiVPEuo95WavwvWfJfLaZBvL0gVO5c9hEuykJQZ1iH3DMASD823GAtWNuNS&X-Amz-Signature=994853e3dbd6a051f85f4659595ac2adfcf1d68f619366e4e03f8e94f7019a5f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
