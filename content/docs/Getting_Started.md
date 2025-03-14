---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSZ5HYDN%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4xBmNjflOCY17Rhfm9%2BFxYlURIRKS%2B1vTQWwdrSMabAIhAK0zTTuaBqCXSHluaBaZ3xCyM9E26r8yaA2Z%2Fu%2FP1pxsKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpKsZcG8sYFyOUK1Eq3AMTUOQRZDiCMfJ7mrXzma3wtFQCl3GG5CKVBI5ilMWlxcEKpaz0iobnoL2BHbRq5kzrAR6kIfWyhIoQKccNHAiqqZs7VYS9vT%2Bn730JsQj9fm6tzrdA9l0%2Fsq9xcY%2FIAwqVQXTQDslMO6tFJnvf4ja1ydICIclEDX2jPGFzpaCcBYmwEq5meAaI7OXLKTgp59lFTCwOGBHkuPziEk4YnPx5T97CT3SbGeMfMD0AvpsjK%2Fb0Y0IHj5J0baCg2XArlxEUDXFW%2Fi4su54S206Sx2Zv2MNUjMDCKtP0tl13UVAYjUGOUD8nBrI%2Bj%2BkAyY2LhzQbt3KawHc%2BX2bgpQFTlcMzcXZZ%2Bsgik1rBwxVlPQAGDhiEk%2BpU%2BcvZh3a8igg9dq9sZMr8Uk3%2Bfw08l6hFlHm65CIPnh08qQzGM4NICqMtxxMgR341Q74i07LJK1BqFNRjpMHRD3wXlmdhKGb9UfCHtiKijgIhq4PS14z4EboWsqbhMWURfa%2BZzhqjJgcD8E5vWVgXzydDZq5hW%2FJ4erLTjqKYlCl4WiyNHdb2ECb0hjclclzKH%2F61J73u7PU4o28nkXGshxBhfr6toqycmlV9tqDD6Lc2nZmnv6oYFavLMTNN9CrY%2FQgV9IpPqDD5zM6%2BBjqkASiiic8ZQmzdmMoCzeZarVQi4uzFITCtm1BDBQeoNU7ru866%2F9GOR5KKm2X05TK1OC6Pj%2FfyT%2F5L6jCIjCPyNde8gcC9qN9uE6krRbiaQkF%2B8egkveaYuPKkp1Sz%2Bi2mEG0XhUiUTPYtk5H%2FO9AP4S4mbvnsvFXhTwnt0ZKp5fPlzEsx5EaIhsdC%2FDgnRESoHhQUHf2Yhdj6qICLlekPRLxOt%2B%2FR&X-Amz-Signature=48f9f44d0a84fb886dd9f67c26f8806a95ea671ae7ae31850fd8440406927c94&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSZ5HYDN%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4xBmNjflOCY17Rhfm9%2BFxYlURIRKS%2B1vTQWwdrSMabAIhAK0zTTuaBqCXSHluaBaZ3xCyM9E26r8yaA2Z%2Fu%2FP1pxsKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpKsZcG8sYFyOUK1Eq3AMTUOQRZDiCMfJ7mrXzma3wtFQCl3GG5CKVBI5ilMWlxcEKpaz0iobnoL2BHbRq5kzrAR6kIfWyhIoQKccNHAiqqZs7VYS9vT%2Bn730JsQj9fm6tzrdA9l0%2Fsq9xcY%2FIAwqVQXTQDslMO6tFJnvf4ja1ydICIclEDX2jPGFzpaCcBYmwEq5meAaI7OXLKTgp59lFTCwOGBHkuPziEk4YnPx5T97CT3SbGeMfMD0AvpsjK%2Fb0Y0IHj5J0baCg2XArlxEUDXFW%2Fi4su54S206Sx2Zv2MNUjMDCKtP0tl13UVAYjUGOUD8nBrI%2Bj%2BkAyY2LhzQbt3KawHc%2BX2bgpQFTlcMzcXZZ%2Bsgik1rBwxVlPQAGDhiEk%2BpU%2BcvZh3a8igg9dq9sZMr8Uk3%2Bfw08l6hFlHm65CIPnh08qQzGM4NICqMtxxMgR341Q74i07LJK1BqFNRjpMHRD3wXlmdhKGb9UfCHtiKijgIhq4PS14z4EboWsqbhMWURfa%2BZzhqjJgcD8E5vWVgXzydDZq5hW%2FJ4erLTjqKYlCl4WiyNHdb2ECb0hjclclzKH%2F61J73u7PU4o28nkXGshxBhfr6toqycmlV9tqDD6Lc2nZmnv6oYFavLMTNN9CrY%2FQgV9IpPqDD5zM6%2BBjqkASiiic8ZQmzdmMoCzeZarVQi4uzFITCtm1BDBQeoNU7ru866%2F9GOR5KKm2X05TK1OC6Pj%2FfyT%2F5L6jCIjCPyNde8gcC9qN9uE6krRbiaQkF%2B8egkveaYuPKkp1Sz%2Bi2mEG0XhUiUTPYtk5H%2FO9AP4S4mbvnsvFXhTwnt0ZKp5fPlzEsx5EaIhsdC%2FDgnRESoHhQUHf2Yhdj6qICLlekPRLxOt%2B%2FR&X-Amz-Signature=ae2e7153a3c04a46edef233fb7c53a06c6915cb1d2815003fb914ec72cc8c88f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAVGCCIK%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2QNPl6KDvKowu1gX5h3sXTmvs97q2x6M4KBs8JPNwuAiEApLhsgK4%2B7adUJDHuY9%2B8y2pqkruEwbd%2BgPPZ%2BXo353EqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BeuNq9GyZBKbHUYircAwPIj3qwLJwdHW47qQeXVeJujgy0hj%2ByyiU3mzxR9k78VBiJWF6mMzjlGTSV8WQiitHBGlk%2FUVZwQSBFxba5pyN%2BQzwNFvOR6yx%2FcjT2Xj%2BTYSwW8rsM%2FRPYsuTa%2BC%2B37fXZaJAW9BD8y9c9u3XxwfvTdVbFqAPtyKa8RsxfB9P3nAW8g2PrpYUluYeKqlQQLG5OFc8dUhxOoMZndOj5ZNXLuogzBLg09ZCLbKGMr6%2BZsbyyy5BJnbOeMeKNnYyk%2BQjK%2BOTDXRRZHrHuWEYi2dABzdkBpJkM6SO9VrakyqurwX9R6meFqSZsIJrjNQUdvrifNu45AsxsD14sPgKwxYe%2Bnwhr6fDDuQ%2F58UKjhbSYh4BrtifkiM4IUTYC%2BtfvSYpUjSjvjhGXiHVJctC7NkSCOhaUgxUKIk6Cemdxqvn9hVltFD76GYIy8RbGqDVR%2BabwpDVMm2U9b9N%2FdoYvYiZaPyuImVLSFN0Q6W5dM8a4%2FS%2BEBopR1pinCaMRPpE5c%2BL2tf7UANBSkRb2rPlg6miN6Jd4KvhcXwjERuvZRQ4DDIb7KhVz8RIZ5rEgPG5BY%2BCTpSwXLY05RFb3sTPuF3WkppR2FDnVVioCyRgPl9JTSte87MIbXeUwSBW%2FMLPNzr4GOqUBAl1HOt752Zm0j%2FGbOuzKmtNda%2FZJu2dHxXxSYYGi%2BJ%2BUbjM7ZUhzylrXytY8d%2BMLQxv6Zl7BtWrmdjbSJsHqynu1bSja8NWSwdiEy4byseIhIacL2q95lWMd93km3k%2FUEfOqpEZodeGxPu4pP8zA%2FPG2qjGKqL%2Fn4d%2Bj5%2F3a2EmWYoNy7twyiB6ODVIP0AbOWZy4bNcrBp5p%2BlpLKchXTZU8EACo&X-Amz-Signature=c22f7cc050407374ad7dc296aedf9d546ca38d581179857abbb37347a708a348&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OHVGZGW%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlauDDTkv9ovP6Y1lKVYFYxV0PhfbCgyFZwV7fO7G9mAiAQfSTf%2B%2FGToRq0TpyKKfTj3Hp6CYIc73deQ5rhHPCutiqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOxpwmoioG5NdRs3mKtwDm9p6bJmkEbJqmueXlsXPxdbn3s1T%2BpkyJLvz40%2Bu6f0YEYXACjhz44uiALJZY1gPxybF8HJxIgF4cHbwvD9QJ4CceLKWHlt5HMgdbkzzm4%2FX42g5mY2I8yig39KQGFUONqa6hsq3DZPURpc5ea5duJpyuasXq2Cyx%2BQ9fL%2B%2FT6bBs%2BihHErOYo2%2FPsvCpMcUoE31Kk1J7uxdftqIVO7r%2BmS65gzgXeUXo3Q7awUsNnd0w7XVoUw%2BEY%2FvEtP5GpEbrJauDDoa0BSZR%2F9XP4G31pMBeZrAl3Y2oKLZ3%2FL5JRcqasS%2BQl1YBEtsFsDBH8IoybMhSLj%2FkAGbRuE64x8n0XNwVnIa12lCwY5W1fWd9G8vEoG9OKkTLyA3UPVMEPiTmxiTqqdXHh4S9carrB%2BO%2FS1uHSEiUtWVwroiakjJrBchxgsbug4e2KdZReaDp7N4ajUmJ69KqY2WTnws0qW3tZlqCzqHH9wY34mEs%2FfPFX8aLHFq2KHOQxW5anZjPYXNPLvn7O9OG6lcv6IbLRQP4N%2BMOJKnXlDA4IVtdXWUSYXMES9hN00R%2FHGEfuioZ4%2BJu71%2BwcR6Yx1sleg3uIZZHKuA%2BfWVq9ebk73PKt6NfYAQh3yKBDYdf%2BcAw4gw2szOvgY6pgF8TC2ABpTbbykAPQVJ3RzsQlZNoR06gBiouZHXuC1YRJBzlOzWnJSoe9DxwbT64lul6IcFGgUf9yzhVHVuVgi0h670Qetw6q%2FdhqMZnC4XtjN1nr7B5Wct0duuOqXk4Kl%2Fz643x%2BA30bE45CSL%2FkVxSQZL0k0GMGwmK9IjN02rlvf5Q0o2hVPMXIddQ79mEKUKISzc9gtsAHpXaVDhQ%2FfFrHXIuLYp&X-Amz-Signature=cc7122e66870d2583dc8a52103814b5fcbf9d6bc91f25e77224e55cb7c37e5c5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSZ5HYDN%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4xBmNjflOCY17Rhfm9%2BFxYlURIRKS%2B1vTQWwdrSMabAIhAK0zTTuaBqCXSHluaBaZ3xCyM9E26r8yaA2Z%2Fu%2FP1pxsKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpKsZcG8sYFyOUK1Eq3AMTUOQRZDiCMfJ7mrXzma3wtFQCl3GG5CKVBI5ilMWlxcEKpaz0iobnoL2BHbRq5kzrAR6kIfWyhIoQKccNHAiqqZs7VYS9vT%2Bn730JsQj9fm6tzrdA9l0%2Fsq9xcY%2FIAwqVQXTQDslMO6tFJnvf4ja1ydICIclEDX2jPGFzpaCcBYmwEq5meAaI7OXLKTgp59lFTCwOGBHkuPziEk4YnPx5T97CT3SbGeMfMD0AvpsjK%2Fb0Y0IHj5J0baCg2XArlxEUDXFW%2Fi4su54S206Sx2Zv2MNUjMDCKtP0tl13UVAYjUGOUD8nBrI%2Bj%2BkAyY2LhzQbt3KawHc%2BX2bgpQFTlcMzcXZZ%2Bsgik1rBwxVlPQAGDhiEk%2BpU%2BcvZh3a8igg9dq9sZMr8Uk3%2Bfw08l6hFlHm65CIPnh08qQzGM4NICqMtxxMgR341Q74i07LJK1BqFNRjpMHRD3wXlmdhKGb9UfCHtiKijgIhq4PS14z4EboWsqbhMWURfa%2BZzhqjJgcD8E5vWVgXzydDZq5hW%2FJ4erLTjqKYlCl4WiyNHdb2ECb0hjclclzKH%2F61J73u7PU4o28nkXGshxBhfr6toqycmlV9tqDD6Lc2nZmnv6oYFavLMTNN9CrY%2FQgV9IpPqDD5zM6%2BBjqkASiiic8ZQmzdmMoCzeZarVQi4uzFITCtm1BDBQeoNU7ru866%2F9GOR5KKm2X05TK1OC6Pj%2FfyT%2F5L6jCIjCPyNde8gcC9qN9uE6krRbiaQkF%2B8egkveaYuPKkp1Sz%2Bi2mEG0XhUiUTPYtk5H%2FO9AP4S4mbvnsvFXhTwnt0ZKp5fPlzEsx5EaIhsdC%2FDgnRESoHhQUHf2Yhdj6qICLlekPRLxOt%2B%2FR&X-Amz-Signature=af1e8d682a8d44b3c05314871b63d34f0b70c7be86dc1f860f649078b40a275a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
