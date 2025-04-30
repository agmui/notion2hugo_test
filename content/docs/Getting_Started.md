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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WLPC3A5%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDfmcohVcZ1LrK1v47g8EL8z%2FPGZVtZEUBX3D0aMmeVUQIhALisRGfNsrqcq%2F%2B5gxVvGsJZbGAmy7QA5uhkX7CcSjQKKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxySZxI59ZCToRYC7Aq3APFSFQObsQ2kmDNs12BPYrDUWez2OPbZWy%2FqdjlAghqgv2V7giIACNtT0zke%2FPvv%2B9xecuwG0DskWyluv1trQeM%2BMkmqngjSCzaOWKsuHom2q4CXnWD6yU%2FvWuJfdWUiKjFsTurB3V%2BjS221%2FCmTMvlev8XF%2FWT%2FJR9kXyZXdCPYWR0vvjGkAP7o9m08LLn%2FqrwRC21I7LCAmhHI74xezxzu8LbqDrmS%2FXP9nB1rYdW2lC6q%2Fkq2lrdNPOfArTcI8aMGjsVcYzV8KnLora57Xw8XAVEGhrZiZ470oWrpxL%2BDYW8z%2FNxlcsQ3SF6fTLzsjVrU0KgIjudQzhGnWMYD%2BPdQRrk%2FWT%2BimAS%2BbLYZodmCRnpDtRwoxkcxEm4hljVHkNywmRmOcpy%2BfW356aq%2BidAkJw1%2Fo6WCvT6UtMTCeN9Q5E7g7Fa4YIvgfND6u8zfMxoL35Olc7oSW%2B%2FHbW19B1kckmBmvFrU62S0ehCJp7SooYHG8FCtpkBvKqPDYFcgQ%2FxbdBc604t8XEKxBhPfNetlzIL9OtX9TnPnHV0cXim%2Fo5Z9KO0q2TWW6LuAUDcMedvPUQArnQZFUt4Qx%2FZxCvkZC%2BEwFyxGot2900F6PtpuXFftlV%2F28Z9VLcclDCdr8rABjqkAaL9C%2Bv6Nk%2BoMuG4HGseUvH2G9T80jTKorSRv170PeJGIYfIbtXDzrvRWSm147T6jzqs38QLvJayNpk%2FBnM0Q0%2Fn7Zml5UdUtDFY%2B9yfVhSSmWOfMYCg1MI5jtaiEyX5pbex3tb4bvXpexdCMUDrqpzCIGR%2F%2BLLY7GHBr%2BBEiDpXiDPBkJEb38URMLjiPiQ4artpMYAeKx3RtiiFkW3Ni6rcdd5m&X-Amz-Signature=3abb60954744283999bcdf017fcd53f6b2f6ea70dfd7f8a56a5f9370b7c10777&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WLPC3A5%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDfmcohVcZ1LrK1v47g8EL8z%2FPGZVtZEUBX3D0aMmeVUQIhALisRGfNsrqcq%2F%2B5gxVvGsJZbGAmy7QA5uhkX7CcSjQKKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxySZxI59ZCToRYC7Aq3APFSFQObsQ2kmDNs12BPYrDUWez2OPbZWy%2FqdjlAghqgv2V7giIACNtT0zke%2FPvv%2B9xecuwG0DskWyluv1trQeM%2BMkmqngjSCzaOWKsuHom2q4CXnWD6yU%2FvWuJfdWUiKjFsTurB3V%2BjS221%2FCmTMvlev8XF%2FWT%2FJR9kXyZXdCPYWR0vvjGkAP7o9m08LLn%2FqrwRC21I7LCAmhHI74xezxzu8LbqDrmS%2FXP9nB1rYdW2lC6q%2Fkq2lrdNPOfArTcI8aMGjsVcYzV8KnLora57Xw8XAVEGhrZiZ470oWrpxL%2BDYW8z%2FNxlcsQ3SF6fTLzsjVrU0KgIjudQzhGnWMYD%2BPdQRrk%2FWT%2BimAS%2BbLYZodmCRnpDtRwoxkcxEm4hljVHkNywmRmOcpy%2BfW356aq%2BidAkJw1%2Fo6WCvT6UtMTCeN9Q5E7g7Fa4YIvgfND6u8zfMxoL35Olc7oSW%2B%2FHbW19B1kckmBmvFrU62S0ehCJp7SooYHG8FCtpkBvKqPDYFcgQ%2FxbdBc604t8XEKxBhPfNetlzIL9OtX9TnPnHV0cXim%2Fo5Z9KO0q2TWW6LuAUDcMedvPUQArnQZFUt4Qx%2FZxCvkZC%2BEwFyxGot2900F6PtpuXFftlV%2F28Z9VLcclDCdr8rABjqkAaL9C%2Bv6Nk%2BoMuG4HGseUvH2G9T80jTKorSRv170PeJGIYfIbtXDzrvRWSm147T6jzqs38QLvJayNpk%2FBnM0Q0%2Fn7Zml5UdUtDFY%2B9yfVhSSmWOfMYCg1MI5jtaiEyX5pbex3tb4bvXpexdCMUDrqpzCIGR%2F%2BLLY7GHBr%2BBEiDpXiDPBkJEb38URMLjiPiQ4artpMYAeKx3RtiiFkW3Ni6rcdd5m&X-Amz-Signature=a5c1737011ff1d53633c2846f9014580807f292cb9eedd937c5ee9b5b085128e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WLPC3A5%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDfmcohVcZ1LrK1v47g8EL8z%2FPGZVtZEUBX3D0aMmeVUQIhALisRGfNsrqcq%2F%2B5gxVvGsJZbGAmy7QA5uhkX7CcSjQKKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxySZxI59ZCToRYC7Aq3APFSFQObsQ2kmDNs12BPYrDUWez2OPbZWy%2FqdjlAghqgv2V7giIACNtT0zke%2FPvv%2B9xecuwG0DskWyluv1trQeM%2BMkmqngjSCzaOWKsuHom2q4CXnWD6yU%2FvWuJfdWUiKjFsTurB3V%2BjS221%2FCmTMvlev8XF%2FWT%2FJR9kXyZXdCPYWR0vvjGkAP7o9m08LLn%2FqrwRC21I7LCAmhHI74xezxzu8LbqDrmS%2FXP9nB1rYdW2lC6q%2Fkq2lrdNPOfArTcI8aMGjsVcYzV8KnLora57Xw8XAVEGhrZiZ470oWrpxL%2BDYW8z%2FNxlcsQ3SF6fTLzsjVrU0KgIjudQzhGnWMYD%2BPdQRrk%2FWT%2BimAS%2BbLYZodmCRnpDtRwoxkcxEm4hljVHkNywmRmOcpy%2BfW356aq%2BidAkJw1%2Fo6WCvT6UtMTCeN9Q5E7g7Fa4YIvgfND6u8zfMxoL35Olc7oSW%2B%2FHbW19B1kckmBmvFrU62S0ehCJp7SooYHG8FCtpkBvKqPDYFcgQ%2FxbdBc604t8XEKxBhPfNetlzIL9OtX9TnPnHV0cXim%2Fo5Z9KO0q2TWW6LuAUDcMedvPUQArnQZFUt4Qx%2FZxCvkZC%2BEwFyxGot2900F6PtpuXFftlV%2F28Z9VLcclDCdr8rABjqkAaL9C%2Bv6Nk%2BoMuG4HGseUvH2G9T80jTKorSRv170PeJGIYfIbtXDzrvRWSm147T6jzqs38QLvJayNpk%2FBnM0Q0%2Fn7Zml5UdUtDFY%2B9yfVhSSmWOfMYCg1MI5jtaiEyX5pbex3tb4bvXpexdCMUDrqpzCIGR%2F%2BLLY7GHBr%2BBEiDpXiDPBkJEb38URMLjiPiQ4artpMYAeKx3RtiiFkW3Ni6rcdd5m&X-Amz-Signature=37cb24d70795f08b3e50186fa1058918e7f4ca07fce253921981634e40e25291&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7BEOYTA%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIGz3EaZXUK%2BM%2Bm4Jeukef09IZO86XOUgkK6rx7gb5lLmAiBbwUlTdJxBEeIcNF2NU6sfI5bgR4Bfkh7kXBibtXQ9GiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXCoYkElrIw2SCWivKtwDoZtW%2FIWcpTXzGJleY9nw6B9KN1KAD0XCKadBGORlWmo6vqGTgLA5dwyab3WKsNAUNpIF%2BNzQKiz1l%2B2CU0hYprBXMOvSytW9pdjBLERm4Hjqdxj5ANAkbchwrzJCkngYd7d40QD61mXlbptsSFO2269Hqtux4s73K2UgkzMNbMSdmj%2F6%2Fts2iIFkd3TWobglkK9AgfEYawexke6SYd8Hpn3xJF%2BCONeCgbjtdPL2Vxi5VG1vXjs3nngXs14EAr5MRtw66zBO2gK3m%2BTMZiDPZjd%2BBRAxSL4ZxjfSUVhtKmsdQk79vEy4J0Ib0xm4ckJL8Q5CyKooUAfP5mlaPURuI6CyiVWJwB7PEvmPfPPtjfngMrhOQDGX62OuGEbR2okZRwPnFOkQoKQoFCRVZaBbS2QO4dHOlrJsGZJmtlV1dHFxS4TsqYRyTLjD%2BLmnpn%2BVQTyWO2pGIUEreiSz1fya3dMPmm7YuYi6twYHcefi25kHGeWK7d5gppOW6gVVDQt9frFKhHZmGE2GIAXHlnQYwvjiD%2Be%2BfXPfoO8igWOcoPrFrcR3WTzgA2ZEB2Eq47byPxQ0HAN5rK8w0hC26D2rJcsOP6LkgmZHU%2BlbILbwfv7gGup8imuHYsowHZgw3a7KwAY6pgH3Xno0NQK8o9NBlhdeKY%2BGgZEBTTz61wov9HjFlhLEbgx4XmgD1aEdqBY%2F3SmeSe0ipW2i6CmPMAJLS%2F%2FfWSNlBW50M53gAvdUpTBReLR%2FPXdj9sBQLqMVR8f11Nop%2FEa%2BCtw7mHmvVVlKcO36WAo1xQ%2BQnHs%2F%2FXViZ3SyOFsDOtX5KgpmvrFBooTi%2BqShoVU4I%2BToxryYpt7%2FykOSZdj2Jh5fsCOd&X-Amz-Signature=cc89339604e3cd5f9c06c7374f20aa07dcb8cd7a5215bd26e8878f2de280a703&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K4LFWTX%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCFuHjoxCVuHnQNGmANHvDQY7zujz5%2B9I3EsBFut5UomQIgS20RYBji9jJa43BB7aV1uWlwaCVZtHel3BE5fn9bVS0qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1%2FLvhFpp0l23rRZircAy3gEQpnE%2FPfAsBjQsPupi%2F2yY7OEL6Wjw%2BzJHHlpUif6vbKye0j2XBdGAuI51aHvvDvQg21wEF3ej6zXsPyOFbZuuGVHedUidxuHdFo4rtamvH4MV7jftk5K2bfbPUgeQR1nAoHmPMTnRRykFVf5D4MXqTbUnhlTaZVqriWWnmTXkSAZMxJ00YdgIamxWSbOtcWgCi7qpSh927%2BXlmYmLBJ2xWRwOxbYFDO6mzvvU%2FDo60MgV8D%2FqyZuifHFzT3jSOtD%2F5ng5iigpCDF03pFCMftOod33U4xu%2BNGvqEJ2WmhpBTIRtrEkFW9XkDKBJT%2FSIV4ETTsMkNZHiwtOX5PFRoEtPWgU73%2F7rsigJWpMsZtAe7S5hzbM55%2Bxmhp6IJdCDIRSqz26357hCNCI70kr%2BP%2B8c8wXDu4im%2FgPoDu%2BbDHUdP0S45jDSYeWBBe7eDCtcdYGqJuJnroKe%2BVE8t8X6AGa%2F7w9U69VdUnOoytgGhgXcoplDWjFPX2ZNN8IVGTYvLqucc2a3OmEoPTlwuWLPUNWDhlWwixWEsU2dWZWVN%2BpRMrTrUcoqxnVQMDsFjQvMez4Rgk2J28OO7mDQJCUbbRuyXtDCR9EalfPxCRc%2FtmPqjcFTZLNy3eJMWMJ2vysAGOqUBKlEWksCobEYBQBiJl9pufw04GkDpl72NQDDPdxTQwPqaqua0Q25YSx9079P%2BY5YXMgUWerQePIPBaT34BpG%2F43UgmWherJFheH8GaV9TdqagRGuVwZ%2BpCoeMg0LybQ1kxD1aQJV%2B68FhyuZh%2BXT6gzAVtQ13INfI%2Bu%2BHdZj01vFN60vbM1opeQ%2F%2BYbgbfhtJQ1d%2BIRxxoynplS6H0wVC9XKdaeur&X-Amz-Signature=67e4b4e38a14cf7e70ee6b922459e728ff67bc50a1d6488904cb5da26fc30cc2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WLPC3A5%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDfmcohVcZ1LrK1v47g8EL8z%2FPGZVtZEUBX3D0aMmeVUQIhALisRGfNsrqcq%2F%2B5gxVvGsJZbGAmy7QA5uhkX7CcSjQKKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxySZxI59ZCToRYC7Aq3APFSFQObsQ2kmDNs12BPYrDUWez2OPbZWy%2FqdjlAghqgv2V7giIACNtT0zke%2FPvv%2B9xecuwG0DskWyluv1trQeM%2BMkmqngjSCzaOWKsuHom2q4CXnWD6yU%2FvWuJfdWUiKjFsTurB3V%2BjS221%2FCmTMvlev8XF%2FWT%2FJR9kXyZXdCPYWR0vvjGkAP7o9m08LLn%2FqrwRC21I7LCAmhHI74xezxzu8LbqDrmS%2FXP9nB1rYdW2lC6q%2Fkq2lrdNPOfArTcI8aMGjsVcYzV8KnLora57Xw8XAVEGhrZiZ470oWrpxL%2BDYW8z%2FNxlcsQ3SF6fTLzsjVrU0KgIjudQzhGnWMYD%2BPdQRrk%2FWT%2BimAS%2BbLYZodmCRnpDtRwoxkcxEm4hljVHkNywmRmOcpy%2BfW356aq%2BidAkJw1%2Fo6WCvT6UtMTCeN9Q5E7g7Fa4YIvgfND6u8zfMxoL35Olc7oSW%2B%2FHbW19B1kckmBmvFrU62S0ehCJp7SooYHG8FCtpkBvKqPDYFcgQ%2FxbdBc604t8XEKxBhPfNetlzIL9OtX9TnPnHV0cXim%2Fo5Z9KO0q2TWW6LuAUDcMedvPUQArnQZFUt4Qx%2FZxCvkZC%2BEwFyxGot2900F6PtpuXFftlV%2F28Z9VLcclDCdr8rABjqkAaL9C%2Bv6Nk%2BoMuG4HGseUvH2G9T80jTKorSRv170PeJGIYfIbtXDzrvRWSm147T6jzqs38QLvJayNpk%2FBnM0Q0%2Fn7Zml5UdUtDFY%2B9yfVhSSmWOfMYCg1MI5jtaiEyX5pbex3tb4bvXpexdCMUDrqpzCIGR%2F%2BLLY7GHBr%2BBEiDpXiDPBkJEb38URMLjiPiQ4artpMYAeKx3RtiiFkW3Ni6rcdd5m&X-Amz-Signature=eec7bb8bbcf183fb27a00d762ecd12e9e20728cd175529dc9abc31558b69e485&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
