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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WESCTEHW%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwP3M5GQkJO3iVyOmj6WbECtKk4KgdfUvrmjNAj0MA5AiEA5voclp53gTZgh90Nw6YQekbXKg2bA3n5no%2FvOlCHJpAq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDO5gb4Dpz0I1b40%2FYSrcA8R9Tpn3BfyJRiN9BlPrgn5hzDLQpsRKdXe%2FnQk3ha9aX57CQz%2B1yNQB%2FTNUHxSMeQI2bM02NWl3vED62uToDV1%2Bm0hrBd0ORbzX7KTzJZzBk5dz4%2BeQWzdXKGetvligHNFVQDwZHEqZ5gAFAjIJ9m34ghIoLhyJMv0rJRHg8Z995FEm8XC81za8CNzJNu51Ylsh6c4pVqjmgYvKphIyCImQdh8kIfEu7LFhuHPDlWEZErCk4%2FBGxeY%2FIQtnhGMbBR16ARHVYj6gm%2FOTyooTwcDshQft%2F7x36w1JivOD8XHlzW4gSsoIThrSRgRmSVCZqzIrFNOgRvikZk2eGAtSA9%2FGG0dZk13HQz6i1WSzo%2B2%2Bj8%2BBZPFJZI8GqscNhP5iwKkF363Y8JLl76a2F04gkrMhtT4T6ay7Oz%2FBqKtNKdqFEKLwbKP54N44ZgFb6uPEkK8El4%2FIcPhGFT4YuanfzfZXhE5p%2B0eNMhni4kKMMJhRhv8Z7UB4pFHmjIZueyr8PKW4tMDRKMDiWtDtYF%2FaaDo1zFJDPESBXdVvpk7CsYoSF5zmREDTjFfGNGuagPCGeARidB%2FgbzPSuPgoj4CVJeEPhz2mM%2F%2FG077iFX68fpDWAz3T9avmhAJ6JCLwMLurvsQGOqUBghF559bxxWKWWD%2BbBpPb%2BE8FgTbb%2B0VGq%2B2DmEoqe5EZlUpgMhVEVFqsXRUez6zg2oNZUBPyLTWTVmfTFfoe7R4k0TMd%2FojbV1q8dMjfNtBjoJOlT0tLbmi7gnfkc%2FGtSm5LpOwzJ%2Fy6RMgFozjxFIMAcO0SF5hSK17203d%2FNSnbY2TZZFqi4ka671OxvE%2BMSwqsZjQ33Ov5ns%2F%2FvC3ic0M7W5yj&X-Amz-Signature=95623381c1e91aa4366aa25012002198c3c2a32115b2e51aa06d44f8c5082292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WESCTEHW%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwP3M5GQkJO3iVyOmj6WbECtKk4KgdfUvrmjNAj0MA5AiEA5voclp53gTZgh90Nw6YQekbXKg2bA3n5no%2FvOlCHJpAq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDO5gb4Dpz0I1b40%2FYSrcA8R9Tpn3BfyJRiN9BlPrgn5hzDLQpsRKdXe%2FnQk3ha9aX57CQz%2B1yNQB%2FTNUHxSMeQI2bM02NWl3vED62uToDV1%2Bm0hrBd0ORbzX7KTzJZzBk5dz4%2BeQWzdXKGetvligHNFVQDwZHEqZ5gAFAjIJ9m34ghIoLhyJMv0rJRHg8Z995FEm8XC81za8CNzJNu51Ylsh6c4pVqjmgYvKphIyCImQdh8kIfEu7LFhuHPDlWEZErCk4%2FBGxeY%2FIQtnhGMbBR16ARHVYj6gm%2FOTyooTwcDshQft%2F7x36w1JivOD8XHlzW4gSsoIThrSRgRmSVCZqzIrFNOgRvikZk2eGAtSA9%2FGG0dZk13HQz6i1WSzo%2B2%2Bj8%2BBZPFJZI8GqscNhP5iwKkF363Y8JLl76a2F04gkrMhtT4T6ay7Oz%2FBqKtNKdqFEKLwbKP54N44ZgFb6uPEkK8El4%2FIcPhGFT4YuanfzfZXhE5p%2B0eNMhni4kKMMJhRhv8Z7UB4pFHmjIZueyr8PKW4tMDRKMDiWtDtYF%2FaaDo1zFJDPESBXdVvpk7CsYoSF5zmREDTjFfGNGuagPCGeARidB%2FgbzPSuPgoj4CVJeEPhz2mM%2F%2FG077iFX68fpDWAz3T9avmhAJ6JCLwMLurvsQGOqUBghF559bxxWKWWD%2BbBpPb%2BE8FgTbb%2B0VGq%2B2DmEoqe5EZlUpgMhVEVFqsXRUez6zg2oNZUBPyLTWTVmfTFfoe7R4k0TMd%2FojbV1q8dMjfNtBjoJOlT0tLbmi7gnfkc%2FGtSm5LpOwzJ%2Fy6RMgFozjxFIMAcO0SF5hSK17203d%2FNSnbY2TZZFqi4ka671OxvE%2BMSwqsZjQ33Ov5ns%2F%2FvC3ic0M7W5yj&X-Amz-Signature=a0be6c5e8211e4d49e32c2aca335368a6c678831f884c089f2ad5f1821ef08b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WESCTEHW%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwP3M5GQkJO3iVyOmj6WbECtKk4KgdfUvrmjNAj0MA5AiEA5voclp53gTZgh90Nw6YQekbXKg2bA3n5no%2FvOlCHJpAq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDO5gb4Dpz0I1b40%2FYSrcA8R9Tpn3BfyJRiN9BlPrgn5hzDLQpsRKdXe%2FnQk3ha9aX57CQz%2B1yNQB%2FTNUHxSMeQI2bM02NWl3vED62uToDV1%2Bm0hrBd0ORbzX7KTzJZzBk5dz4%2BeQWzdXKGetvligHNFVQDwZHEqZ5gAFAjIJ9m34ghIoLhyJMv0rJRHg8Z995FEm8XC81za8CNzJNu51Ylsh6c4pVqjmgYvKphIyCImQdh8kIfEu7LFhuHPDlWEZErCk4%2FBGxeY%2FIQtnhGMbBR16ARHVYj6gm%2FOTyooTwcDshQft%2F7x36w1JivOD8XHlzW4gSsoIThrSRgRmSVCZqzIrFNOgRvikZk2eGAtSA9%2FGG0dZk13HQz6i1WSzo%2B2%2Bj8%2BBZPFJZI8GqscNhP5iwKkF363Y8JLl76a2F04gkrMhtT4T6ay7Oz%2FBqKtNKdqFEKLwbKP54N44ZgFb6uPEkK8El4%2FIcPhGFT4YuanfzfZXhE5p%2B0eNMhni4kKMMJhRhv8Z7UB4pFHmjIZueyr8PKW4tMDRKMDiWtDtYF%2FaaDo1zFJDPESBXdVvpk7CsYoSF5zmREDTjFfGNGuagPCGeARidB%2FgbzPSuPgoj4CVJeEPhz2mM%2F%2FG077iFX68fpDWAz3T9avmhAJ6JCLwMLurvsQGOqUBghF559bxxWKWWD%2BbBpPb%2BE8FgTbb%2B0VGq%2B2DmEoqe5EZlUpgMhVEVFqsXRUez6zg2oNZUBPyLTWTVmfTFfoe7R4k0TMd%2FojbV1q8dMjfNtBjoJOlT0tLbmi7gnfkc%2FGtSm5LpOwzJ%2Fy6RMgFozjxFIMAcO0SF5hSK17203d%2FNSnbY2TZZFqi4ka671OxvE%2BMSwqsZjQ33Ov5ns%2F%2FvC3ic0M7W5yj&X-Amz-Signature=b57d7a73bdf3cd9e1dec66677e751fecbed7847cf6a4e600440656eb5d8a084a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRCZTL2M%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYLKN%2BEPUmRTdWpF63WptG%2B1e83vz%2FlgiLe3lBK4dRLgIgBHdal%2Fxpq9KrOiE4Ihj7TYS8OCEGENyR5xEFBjm92eAq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMWihBLaQOsH51oVBircA%2Fjl9LwN7iz8PczDcg8afePNB1Qr0nxJRB63od1GH3M%2BRok4Q7WQgppUqp3IjC2Nuq8OX17t9vYo0f2ePakSKiEW7GnOVTlomTBDu5zzzVET4aTigxcjiirAikSxRcEKeJRUo7rCc5CeKZOmy%2Fo0Zbl%2BS2LfzQM44MD8CdDk5Ltt3YLNqxnWnj4QJeP1XjFEpj7KFO0rmp6rE5KUceERFpzbmXvnnpe31vn3wunDHQLdoi5zydxh%2FzAjdxZ0wsrsURYwUbUJ%2B%2F%2FNGH%2BsbebPNI28IqVOrpDaix2Q1mPNmQ3JGZB2GHdTNpw%2BsCG6eRLlYbMO7bYJmQkLK%2FL5uqZHU6QQ1rMSZcAKXLPbzVBERdTIIbmFnWg7%2FRxYK5UK0UGGyoWVacgaRkN9BElLkav%2FcstuWxh9LzbaRcQAMHVkaFruWhKhR1Fhhuw9P4178t1oYUul9AXob1l9fi%2BNdZPpCas3trY9BMZi3eVbBXA6NoWzWAjRHdf5KEYMC4IQrAiHNUkyYUrDV7nzZiN32LbmY9D7OAYDX1wylfT0qSdwa4Wq%2Fz%2FzfB6ngPvLxMMQl%2Fch6aiTFuFGqgWWLKShJ3dG2UouJUbJAeAlFNJxrxqYSYI%2FM6iQLaHj4qztI3NLMPOqvsQGOqUBiF7zAM0j4Ue1hOP3V%2BOxt7wXaaDi%2FChEhAmpm91B7iD35caC353Bs3t9FDCZIfHCzpjTAjhSnLrqtN8e3NYv8%2FB5LPPWuxIY%2BnW3Dwk%2FFE9Jy%2BNAFKFusfQ7zbfvITny9fQO1E32WhQlG73XMp0PYfSQ53EtX6quhLanBPFdtOMjyhl8XESlajn5oyP25pAXJADPXEfHHHNXBN0hhzJKOFjiZjoN&X-Amz-Signature=d756218b1ef7b90f4ff8f5e06bcb84f786bddfdbfc9931c29c5c491bcf6872ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXAOX2UK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJaHAUPM%2BYLbUy7sJptnqsFtBujqnzrwnjz1MxDk7RMQIhAIoLFOv6M%2FIMZ7Q4hv%2BgHXJtqE7ux%2FvN56SEyjjfoBS9Kv8DCDIQABoMNjM3NDIzMTgzODA1IgzeiQjThsVhInz6no0q3ANo9jY2EQK17FDA1m9eamWUcpVpkFY5Nu%2FeD0jS0Y3T44ueP7NvF0kupUNkLFX0m8Q5MXIdCnRyTUoOewSxpfIKGSoVou611qyA7DNg6ULuCj42GpljRxMTgJbggaE1e9vRF02Dnnakmp2m9LQamQxnJTBRqAe0ZrAHBz0ZICkZlT8%2B8Y3Yb9xFiKHZD4uRv0xYLsxmeQF19l4BVc6WAsZY7D%2BjU9hMCFRIGKoBAvEbWbORtBd9%2BvqOi1Dw94LqiWJfFKdxwJlUbwgAgDBEJVLjskVbyyrBTThaHDXuWxt6QvMlU7kSD3zHQ%2FXN80dQ4v%2BPwBQg9WMF8ly2si8xDOkdv992cRqDgpulvO0qOT%2FoTKWN6SLkuWlmkBZE7St4pUmAz4apkWWEyzxSS8Amlrgd9OoQ7iuVPW9R6XjkYa9QvThEGRfvwKYDGFHNhAhA4XeGbFT2S7Rf1gXvgeIy%2Fijtq6qYLlOM0DpV4vEvefx0TSpJ6Ven6%2F2uFfMRdnV3MYaa4goHzjuxO0a1sElxvSRHH87UYv0e4TrsiPsi9qz57n1VqOjaglMfWs%2BnTCbZ%2FvONXfv8bLEmRPwpD2deCueE3IHCSe2ld2g5D32JJyi5aYy9T7bd2nIEiveutDCGq77EBjqkAePq1dwQuf1%2FtRegVPBfysWMqz3Pl5seiitFIhKlD2DRpyuPmnh2fxYtP%2FREkkWsoub3FMOQNuWEy1vl55xy7Hl%2Fhi0f%2FYM4Gu05BOHMXxFOVr5xMyrpcIOiBmLggKMCrarHqwcC8mGFc9ULDAXACUbuNqci%2BCTnRjf%2FVCJCNJgb2a84sjgc7cEi8xW%2Fk%2BOSgTZSTiy2TSaL9oNTWnIKAaCYfMOS&X-Amz-Signature=0791dddb57e250d4437db811fc39c9a5d90d13fcd6861bb49de62c12a2dc02cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WESCTEHW%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwP3M5GQkJO3iVyOmj6WbECtKk4KgdfUvrmjNAj0MA5AiEA5voclp53gTZgh90Nw6YQekbXKg2bA3n5no%2FvOlCHJpAq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDO5gb4Dpz0I1b40%2FYSrcA8R9Tpn3BfyJRiN9BlPrgn5hzDLQpsRKdXe%2FnQk3ha9aX57CQz%2B1yNQB%2FTNUHxSMeQI2bM02NWl3vED62uToDV1%2Bm0hrBd0ORbzX7KTzJZzBk5dz4%2BeQWzdXKGetvligHNFVQDwZHEqZ5gAFAjIJ9m34ghIoLhyJMv0rJRHg8Z995FEm8XC81za8CNzJNu51Ylsh6c4pVqjmgYvKphIyCImQdh8kIfEu7LFhuHPDlWEZErCk4%2FBGxeY%2FIQtnhGMbBR16ARHVYj6gm%2FOTyooTwcDshQft%2F7x36w1JivOD8XHlzW4gSsoIThrSRgRmSVCZqzIrFNOgRvikZk2eGAtSA9%2FGG0dZk13HQz6i1WSzo%2B2%2Bj8%2BBZPFJZI8GqscNhP5iwKkF363Y8JLl76a2F04gkrMhtT4T6ay7Oz%2FBqKtNKdqFEKLwbKP54N44ZgFb6uPEkK8El4%2FIcPhGFT4YuanfzfZXhE5p%2B0eNMhni4kKMMJhRhv8Z7UB4pFHmjIZueyr8PKW4tMDRKMDiWtDtYF%2FaaDo1zFJDPESBXdVvpk7CsYoSF5zmREDTjFfGNGuagPCGeARidB%2FgbzPSuPgoj4CVJeEPhz2mM%2F%2FG077iFX68fpDWAz3T9avmhAJ6JCLwMLurvsQGOqUBghF559bxxWKWWD%2BbBpPb%2BE8FgTbb%2B0VGq%2B2DmEoqe5EZlUpgMhVEVFqsXRUez6zg2oNZUBPyLTWTVmfTFfoe7R4k0TMd%2FojbV1q8dMjfNtBjoJOlT0tLbmi7gnfkc%2FGtSm5LpOwzJ%2Fy6RMgFozjxFIMAcO0SF5hSK17203d%2FNSnbY2TZZFqi4ka671OxvE%2BMSwqsZjQ33Ov5ns%2F%2FvC3ic0M7W5yj&X-Amz-Signature=5421ea7a1698729ef3ee357c4acf02016785497b2c6377fa7512a5b8d5bc62f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
