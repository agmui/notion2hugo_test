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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTEUCCDB%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHjHdRl5YqgRcm%2B0Uxai7Jrkmz4D2TfLvz9CQn9lYEBdAiBN07vOIFM6Zw0zxoFBKuaz2y2axiPUQTyzwUXfzvGFtyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX39Hc3NqxvJOA29vKtwDVhU7ajLRN0Rm9JngNiMM171b%2BaaQIHWXmSKYXax6ouKhrJCRmGNL7Kk%2BfYBuXN0MYO8K%2BjSKEnCFkOT6pY4SVMldIKN1m9Kv%2FGlcaVTPwxxL5PpVfQUqT0cbw54YhBMWRwCThtiaqqEAl2IuvmOLp2WdKm69WW0vpOGAOV5ZISUSFT3NmZnNlrntX3H3a%2FqlaSgSM%2B35JEpqfhpTMuLnLFXTLR46GNG8jDV5t0SNLoepkQN5zhV2I648DujPFelvVLitXEYGiUKlWCJD9VcJZdcFCKB5iwsbkXJWoOd0W0bRsDs4u8IpmvvuoJoH8gScq4fOMSXmdHFZwhLvTKxCLh3DXUIt5ZAwaVfiEGBs7a9GtzqlvuSNm1ThhgIvS4JxpO5SjDIe0r79OAXRbci%2BiYA4vrC%2Fgrzv0zylenikTza6NimPGFgYbHAagkKgBYQgDUKoTryeqkWUStwsOpSaOvzfUdiqJHFdb0dxKi6nrtooosdGjwVshQQWsS8YMD%2B92Al%2F%2B1qy2kQo01w0NHoINA%2BJN4OSRmeCcUy179We%2FfewvxsaMU8KxBuOBy8pkvE99kmNOKMn5hL0YQk8VmFiXQBe3TfZnNoy%2FWguo2X70HmZbCpglN7mcp3cr6wwh6OLwwY6pgHhMnvPEApioB7DWFgFD1YxY0W5Pm3t5B9AmVZGFkOr14UYbuPMr6qwx0XOXllfsf203mmdaXSf7tfNbf1n76vqM8ypboUFoGaCBZzGTCx6vLSbqgBBU7UPfRY7uKAsIh71OxoRJlVCm78F1tw09Cpm0jo0ChUmg3pLblwLJDsgMFm6qu0YWk7w7wSDgo6NEnmQTMcNAUk%2FYBHewCl%2Bx71KkgFO6zzO&X-Amz-Signature=ae29df8600dafb18df3f0598a4f5656d45a786019f167b939b6e8164d8fe941b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTEUCCDB%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHjHdRl5YqgRcm%2B0Uxai7Jrkmz4D2TfLvz9CQn9lYEBdAiBN07vOIFM6Zw0zxoFBKuaz2y2axiPUQTyzwUXfzvGFtyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX39Hc3NqxvJOA29vKtwDVhU7ajLRN0Rm9JngNiMM171b%2BaaQIHWXmSKYXax6ouKhrJCRmGNL7Kk%2BfYBuXN0MYO8K%2BjSKEnCFkOT6pY4SVMldIKN1m9Kv%2FGlcaVTPwxxL5PpVfQUqT0cbw54YhBMWRwCThtiaqqEAl2IuvmOLp2WdKm69WW0vpOGAOV5ZISUSFT3NmZnNlrntX3H3a%2FqlaSgSM%2B35JEpqfhpTMuLnLFXTLR46GNG8jDV5t0SNLoepkQN5zhV2I648DujPFelvVLitXEYGiUKlWCJD9VcJZdcFCKB5iwsbkXJWoOd0W0bRsDs4u8IpmvvuoJoH8gScq4fOMSXmdHFZwhLvTKxCLh3DXUIt5ZAwaVfiEGBs7a9GtzqlvuSNm1ThhgIvS4JxpO5SjDIe0r79OAXRbci%2BiYA4vrC%2Fgrzv0zylenikTza6NimPGFgYbHAagkKgBYQgDUKoTryeqkWUStwsOpSaOvzfUdiqJHFdb0dxKi6nrtooosdGjwVshQQWsS8YMD%2B92Al%2F%2B1qy2kQo01w0NHoINA%2BJN4OSRmeCcUy179We%2FfewvxsaMU8KxBuOBy8pkvE99kmNOKMn5hL0YQk8VmFiXQBe3TfZnNoy%2FWguo2X70HmZbCpglN7mcp3cr6wwh6OLwwY6pgHhMnvPEApioB7DWFgFD1YxY0W5Pm3t5B9AmVZGFkOr14UYbuPMr6qwx0XOXllfsf203mmdaXSf7tfNbf1n76vqM8ypboUFoGaCBZzGTCx6vLSbqgBBU7UPfRY7uKAsIh71OxoRJlVCm78F1tw09Cpm0jo0ChUmg3pLblwLJDsgMFm6qu0YWk7w7wSDgo6NEnmQTMcNAUk%2FYBHewCl%2Bx71KkgFO6zzO&X-Amz-Signature=03c5dc094b62f2bea20e28bdd3076ff216d441469980a7552841737d38800e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTEUCCDB%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHjHdRl5YqgRcm%2B0Uxai7Jrkmz4D2TfLvz9CQn9lYEBdAiBN07vOIFM6Zw0zxoFBKuaz2y2axiPUQTyzwUXfzvGFtyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX39Hc3NqxvJOA29vKtwDVhU7ajLRN0Rm9JngNiMM171b%2BaaQIHWXmSKYXax6ouKhrJCRmGNL7Kk%2BfYBuXN0MYO8K%2BjSKEnCFkOT6pY4SVMldIKN1m9Kv%2FGlcaVTPwxxL5PpVfQUqT0cbw54YhBMWRwCThtiaqqEAl2IuvmOLp2WdKm69WW0vpOGAOV5ZISUSFT3NmZnNlrntX3H3a%2FqlaSgSM%2B35JEpqfhpTMuLnLFXTLR46GNG8jDV5t0SNLoepkQN5zhV2I648DujPFelvVLitXEYGiUKlWCJD9VcJZdcFCKB5iwsbkXJWoOd0W0bRsDs4u8IpmvvuoJoH8gScq4fOMSXmdHFZwhLvTKxCLh3DXUIt5ZAwaVfiEGBs7a9GtzqlvuSNm1ThhgIvS4JxpO5SjDIe0r79OAXRbci%2BiYA4vrC%2Fgrzv0zylenikTza6NimPGFgYbHAagkKgBYQgDUKoTryeqkWUStwsOpSaOvzfUdiqJHFdb0dxKi6nrtooosdGjwVshQQWsS8YMD%2B92Al%2F%2B1qy2kQo01w0NHoINA%2BJN4OSRmeCcUy179We%2FfewvxsaMU8KxBuOBy8pkvE99kmNOKMn5hL0YQk8VmFiXQBe3TfZnNoy%2FWguo2X70HmZbCpglN7mcp3cr6wwh6OLwwY6pgHhMnvPEApioB7DWFgFD1YxY0W5Pm3t5B9AmVZGFkOr14UYbuPMr6qwx0XOXllfsf203mmdaXSf7tfNbf1n76vqM8ypboUFoGaCBZzGTCx6vLSbqgBBU7UPfRY7uKAsIh71OxoRJlVCm78F1tw09Cpm0jo0ChUmg3pLblwLJDsgMFm6qu0YWk7w7wSDgo6NEnmQTMcNAUk%2FYBHewCl%2Bx71KkgFO6zzO&X-Amz-Signature=558bd09170ffb9b4b03b02e6297ea84ebb5d040181edcb68f3d35f141dac1844&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHLA6FLL%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM8u3mlqwRIdKssjOq7f5WahL%2B9vOXa7pz4qUI3uQIgQIhAMLY441shzCnR8VMVL9D2Jx9Zju3ERCXHBSsV3sw3GDHKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRL%2BtQ%2Bb8CenvlCZMq3ANuS1YaLUVopZRrmT0t3cyxJxz4Y1bFfAyFmrCzVsfOLyDxp9j%2BK50Llyy7x9Sxe4PQesUPKgoz6HT1KdzWi4SBg6L8GfMNBoGPJUaWH8EV19LLy4uz%2B9b8xyX%2FBKAk6utfxfsT9mFCSFPlTpbowLvhzh%2BKheVjcYKZ8YegeH44WBZ%2FBxi1W2FFgf4vZobSErrkoR9wH4HIf6Ti1cEtVotetnztT5px84Iwe3tX9lGb%2BvWnqXI1S9WccgBx7WuUAOgg0rCjPjFKLMj5jLczfW1UAHM3nxIgIq03b9oigs6m2XrGw3UV1QISCHV%2Fwkva%2FU6C7WI5ybFToP018ynWr01v3ZUtDC%2BuYhJalQxvoXLTHnj15kyOqjpa%2Fk5oh9CATHNch%2BeIBPcE8XA5XLx1s6%2Br%2FS7DwjupIpdk1tLbPZpmMC2l1N5mlYUfcTUx6V4V6o0OqBW2eZ3dMuhtZ2Z0sxdOCx7gkzDO1ry83hSz6u1jqILQ5QL7cT75VGGhx29%2FmfxssmevH%2BuRZkkxdE0nmW5otTWwaYJmBH%2BM%2FQyZsJHb1n%2BqtJje8URifkjNTPo%2BmmcQndZUXvDQoZzwjb804VGg%2FgNqNUj%2FEFv9gEJ38fuVdCKxIrtLbPX78Mj2YTC8o4vDBjqkAZPbvBwiYdDIg1YNtgZR1Rg513YoQJQRX3iNT%2BtPAAI1JJNWOpWF3M7nO8jLT4%2B0WhzW%2FkG3%2BstMea444UZJs5kkdbFV7nYO81uUgnsdhyH4tEE1XPxKc3oi3nsyB6Oeir%2FOz4AGvYgOaxrjhPQpbSRE%2FqhkUxPdxroeJqfoJIP2lkJqOrQef2X01QLhY%2FREBND3Whqtj6hy2sg%2FhpI6qmLyz%2Byy&X-Amz-Signature=ad7ac79db6cfd7bbf92dcec3fc3b524444f2c62bb0f652fcf0c2105aecc5c54b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVIOF6ER%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJdbjtSTrPAOfj1MZKKUDAQbmvB7xo1vcFLC8nXgq06AiB5T7HZNM8zsvPriZ%2BPqBn8vtD6JAkjPQAjios305soMiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdzTWgHryV5vCXMkJKtwDYroTcqVQgwUOPz8g%2FXCaIHKaKsfYQoX33%2BA%2FzcGEaf%2FkCwH7aXNcYGHTPuvdBGQx%2FrrS2fe%2F7SLl2jEa3hUaq46NzDYn%2BJHJTTftK6ORbtiaZQoGTRkBj1Y93dXsZaeeYmWR9sskHNvhfP0NedE%2FX7DJA1FrBS5p6Pom9JylSwrkVx%2FY3DBwJry5uJirm0XpGpOrGUnJyGYeCpKI8yua0XkpqNRBWQBmdPdvmmqPx%2B%2FaHsq9f04tGeMT%2FTyrO9%2FOsoA9Z1tPqU4KXR6X5ggtJSrmyGmwVGPwu9oeTkPRWqZOlpK5yrvWeRo0WnZSWtADh5hxFOjzBQ26h3gJorgq96YDlO7DjlJ%2FHFGXUWyLPtTbdNhJw4UwRgUeiHDCtpzHBdeocZ4cROYmJ4LSyaERxFPz6nbvJsrPclip%2BH%2Bobcm0aYwG%2BjoTc5L%2BqFq%2FoEg4H0Dxz7H4IgUbI4SuJ7vDL8hW0%2BGaJZbq%2F%2BqpOzjNcigOe1lke72WCWNN%2F%2F0mPTZ2b%2BxYrYkg3KKE%2Bwj%2FATvHzh0QGslfG6EpFWebbKUoOq2SjHub30A%2BzRBVMp5CJMwVPeG6FgjoygnogSJEPHYuvi0ZESA0nWmv%2BDhZO92OCWmkVAzA56TtYHA5hFQwlKOLwwY6pgGYZZOLhYC99aZJVLAeqIrLSdf1ldHGyCJDT7VGO2S%2B%2BPgzN9ge%2Bcs58P9Ri6378kVzkbVrmiLToJYgiC0rYJ3%2Bvq0nISLePvgo%2BM6jv1yTuR5Y9HCJk30WsB7j7cg2tXlYzxFMPZyNqcosH3C8OrlQp%2FIptDNbjmkLqR%2BoxF9EtxqcyNV8jDx2UJYTwNGsA9DHKhL9wX0xGbzItM2tUqwkJsI%2FHzkY&X-Amz-Signature=f7331b8c052643f404b6ba6a6a8dd1d780fa9a05658a45ca5fc21154f996c80e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTEUCCDB%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHjHdRl5YqgRcm%2B0Uxai7Jrkmz4D2TfLvz9CQn9lYEBdAiBN07vOIFM6Zw0zxoFBKuaz2y2axiPUQTyzwUXfzvGFtyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX39Hc3NqxvJOA29vKtwDVhU7ajLRN0Rm9JngNiMM171b%2BaaQIHWXmSKYXax6ouKhrJCRmGNL7Kk%2BfYBuXN0MYO8K%2BjSKEnCFkOT6pY4SVMldIKN1m9Kv%2FGlcaVTPwxxL5PpVfQUqT0cbw54YhBMWRwCThtiaqqEAl2IuvmOLp2WdKm69WW0vpOGAOV5ZISUSFT3NmZnNlrntX3H3a%2FqlaSgSM%2B35JEpqfhpTMuLnLFXTLR46GNG8jDV5t0SNLoepkQN5zhV2I648DujPFelvVLitXEYGiUKlWCJD9VcJZdcFCKB5iwsbkXJWoOd0W0bRsDs4u8IpmvvuoJoH8gScq4fOMSXmdHFZwhLvTKxCLh3DXUIt5ZAwaVfiEGBs7a9GtzqlvuSNm1ThhgIvS4JxpO5SjDIe0r79OAXRbci%2BiYA4vrC%2Fgrzv0zylenikTza6NimPGFgYbHAagkKgBYQgDUKoTryeqkWUStwsOpSaOvzfUdiqJHFdb0dxKi6nrtooosdGjwVshQQWsS8YMD%2B92Al%2F%2B1qy2kQo01w0NHoINA%2BJN4OSRmeCcUy179We%2FfewvxsaMU8KxBuOBy8pkvE99kmNOKMn5hL0YQk8VmFiXQBe3TfZnNoy%2FWguo2X70HmZbCpglN7mcp3cr6wwh6OLwwY6pgHhMnvPEApioB7DWFgFD1YxY0W5Pm3t5B9AmVZGFkOr14UYbuPMr6qwx0XOXllfsf203mmdaXSf7tfNbf1n76vqM8ypboUFoGaCBZzGTCx6vLSbqgBBU7UPfRY7uKAsIh71OxoRJlVCm78F1tw09Cpm0jo0ChUmg3pLblwLJDsgMFm6qu0YWk7w7wSDgo6NEnmQTMcNAUk%2FYBHewCl%2Bx71KkgFO6zzO&X-Amz-Signature=cf4449d64ae4eab9878cd81dabf5db07eaa7819b861657cd5f19e5c7f1164203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
