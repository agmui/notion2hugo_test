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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIRUOUQ5%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfNz8fLR4XbcMNcXqBhcdUTj8izlDKYlhDIdhJHXxmAAiEA2yMg9yKyenxBninkKW2lK91Dcr9mQTNUMIpbE8zIlJ0q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDCxTw6zTG0SLVDSuyyrcA1j8NGP7CkmUrwUBYZSNcZRAnL%2BFqRLetZxU3mo0E5jIzgPWWl3J0%2BaVtCdMMFQrS54RrQ0kesDOstUGTIEvHgER%2FnuN401OBVjLzU%2F6Rp%2BGlWX9mvB5oKWLpOgBp2%2F%2BBD%2FCb2uU9TJ53y0tY2t3kRm7l5zgnHIg2AXxcykFUBFTYxJ4IkL0wHzNt82lt4Sg%2B870lmgqVvcZrQbHAFGqV2ICyjtL0Pu40i6zNzCrxXrK1fk4ziv7doTpy2m6RBZyXQPmeoMbzOKpqmk17380sOdPYNINKa9r9OqkpbATzdJe1q8QtO42DapVRyiHN%2BmeMPyvSVJw4d4O84c2aam9KQt00L7iT3UoOZp3pD2DC%2FFea26rT0NO3xkHaUDn4dAXh6k%2F0GnTtPMcrmbC145TWpn4keab9%2BKUPw8dHgVigEH%2Fdqubf2AXcxfFFuK71g6GFcKI%2FcFlXBbNIewPyJMqLC%2FxDBkY%2BzJkOhJvO52uUNnhmoQNAFsLaV8EYoVqwi%2FXw9E3HwMQpgkZoF63cwtYqMGXnK6a8khEfoHlUIud1khLMFYloAteIvZI9vAxrk0OyQCb477vFdP1EBFzE9a69zIQTppmuyauUFddfwHGhnYI7ER7Wq8b64ADTbxVMOfm6MAGOqUBDDV8C7E2Dw9lA5eCB7uhIxLeYytHNZl23eJkSkblVFQXZFJCF2xXcWVCFHNsShIhq2Y9qN%2BGMjPBHHJl8m23jl3udc0xdT3VPrIBszSwUi%2Bv0u%2Fo%2F6vjw7mJ%2B2b2ltJjAgr8XMCrtQ7Co6rXvOBwaZnIWWoltvD6AqkJ%2Ff6gUd1iwCh8zogAkTYu2lQifBoTJhX6ZAVAqAYlFnLUti7vQEE1y0ss&X-Amz-Signature=ccd78523da9d15d2d90c6560e2d59b5bccaf5235ff8d10b63d14a067298cb5f4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIRUOUQ5%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfNz8fLR4XbcMNcXqBhcdUTj8izlDKYlhDIdhJHXxmAAiEA2yMg9yKyenxBninkKW2lK91Dcr9mQTNUMIpbE8zIlJ0q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDCxTw6zTG0SLVDSuyyrcA1j8NGP7CkmUrwUBYZSNcZRAnL%2BFqRLetZxU3mo0E5jIzgPWWl3J0%2BaVtCdMMFQrS54RrQ0kesDOstUGTIEvHgER%2FnuN401OBVjLzU%2F6Rp%2BGlWX9mvB5oKWLpOgBp2%2F%2BBD%2FCb2uU9TJ53y0tY2t3kRm7l5zgnHIg2AXxcykFUBFTYxJ4IkL0wHzNt82lt4Sg%2B870lmgqVvcZrQbHAFGqV2ICyjtL0Pu40i6zNzCrxXrK1fk4ziv7doTpy2m6RBZyXQPmeoMbzOKpqmk17380sOdPYNINKa9r9OqkpbATzdJe1q8QtO42DapVRyiHN%2BmeMPyvSVJw4d4O84c2aam9KQt00L7iT3UoOZp3pD2DC%2FFea26rT0NO3xkHaUDn4dAXh6k%2F0GnTtPMcrmbC145TWpn4keab9%2BKUPw8dHgVigEH%2Fdqubf2AXcxfFFuK71g6GFcKI%2FcFlXBbNIewPyJMqLC%2FxDBkY%2BzJkOhJvO52uUNnhmoQNAFsLaV8EYoVqwi%2FXw9E3HwMQpgkZoF63cwtYqMGXnK6a8khEfoHlUIud1khLMFYloAteIvZI9vAxrk0OyQCb477vFdP1EBFzE9a69zIQTppmuyauUFddfwHGhnYI7ER7Wq8b64ADTbxVMOfm6MAGOqUBDDV8C7E2Dw9lA5eCB7uhIxLeYytHNZl23eJkSkblVFQXZFJCF2xXcWVCFHNsShIhq2Y9qN%2BGMjPBHHJl8m23jl3udc0xdT3VPrIBszSwUi%2Bv0u%2Fo%2F6vjw7mJ%2B2b2ltJjAgr8XMCrtQ7Co6rXvOBwaZnIWWoltvD6AqkJ%2Ff6gUd1iwCh8zogAkTYu2lQifBoTJhX6ZAVAqAYlFnLUti7vQEE1y0ss&X-Amz-Signature=ce20a8304a15831b373eebaa65b8445f25cfc6ac6fdd60b0da7562e1eba4d82b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIRUOUQ5%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfNz8fLR4XbcMNcXqBhcdUTj8izlDKYlhDIdhJHXxmAAiEA2yMg9yKyenxBninkKW2lK91Dcr9mQTNUMIpbE8zIlJ0q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDCxTw6zTG0SLVDSuyyrcA1j8NGP7CkmUrwUBYZSNcZRAnL%2BFqRLetZxU3mo0E5jIzgPWWl3J0%2BaVtCdMMFQrS54RrQ0kesDOstUGTIEvHgER%2FnuN401OBVjLzU%2F6Rp%2BGlWX9mvB5oKWLpOgBp2%2F%2BBD%2FCb2uU9TJ53y0tY2t3kRm7l5zgnHIg2AXxcykFUBFTYxJ4IkL0wHzNt82lt4Sg%2B870lmgqVvcZrQbHAFGqV2ICyjtL0Pu40i6zNzCrxXrK1fk4ziv7doTpy2m6RBZyXQPmeoMbzOKpqmk17380sOdPYNINKa9r9OqkpbATzdJe1q8QtO42DapVRyiHN%2BmeMPyvSVJw4d4O84c2aam9KQt00L7iT3UoOZp3pD2DC%2FFea26rT0NO3xkHaUDn4dAXh6k%2F0GnTtPMcrmbC145TWpn4keab9%2BKUPw8dHgVigEH%2Fdqubf2AXcxfFFuK71g6GFcKI%2FcFlXBbNIewPyJMqLC%2FxDBkY%2BzJkOhJvO52uUNnhmoQNAFsLaV8EYoVqwi%2FXw9E3HwMQpgkZoF63cwtYqMGXnK6a8khEfoHlUIud1khLMFYloAteIvZI9vAxrk0OyQCb477vFdP1EBFzE9a69zIQTppmuyauUFddfwHGhnYI7ER7Wq8b64ADTbxVMOfm6MAGOqUBDDV8C7E2Dw9lA5eCB7uhIxLeYytHNZl23eJkSkblVFQXZFJCF2xXcWVCFHNsShIhq2Y9qN%2BGMjPBHHJl8m23jl3udc0xdT3VPrIBszSwUi%2Bv0u%2Fo%2F6vjw7mJ%2B2b2ltJjAgr8XMCrtQ7Co6rXvOBwaZnIWWoltvD6AqkJ%2Ff6gUd1iwCh8zogAkTYu2lQifBoTJhX6ZAVAqAYlFnLUti7vQEE1y0ss&X-Amz-Signature=ef6838b4ddf9ee6388edbdac5240fdcce7c7601b53f1d596274c4ef0f7ecf611&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W6GKEWD%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1kLD5Jo6rtM0sCChHlILB43I7Aw0tF4pit3EugqjKkAiAcS%2BaSBa0MqdbnljmTm7fNrmZpE826JMFGhASIz2O7Oyr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMynpyv0IO9cqAm1cbKtwDhVPluHQ7NUyT3rXacqXEvoHcR6Rdvsf3OTmtPr0EaOLjdd5r6%2BTBG0c3FioPg5CmaEcEMYF7dYK9wD%2FD%2BGG3LCF7IhjpHT%2FcmYuwaPLSDS6cYu1ZPGi27v%2BVDXwX7eu4yfsw1AqbkN6SaH7LvJOQNKMh390oZ4elUKTK1R1%2F07ekI3j1Uvm%2BDDQBUVFAB35VKYjh4%2FlUO6jmmawTjeDSM8ezcwLoPUK%2F0FzCyWh14tKkPYnquif%2FtZ9RUSW3l5OadHEPuAlGg3O3BkETz1Ihl7vSbgAvq0Ok8Q9bcBIeBkG3DchNz5YNmINju3tRUaz5ZiOaIJDizH%2Fga1CXottczDxNcujY4tDRuthhwx4V60OuwZn5ww9yvr23MWjfQCjPXUxjnxr3G8Za%2FKvjoqjZr237FE4fOXoCVTtxWm0psYM0Xltm3E58e%2BMuEbW07e06FMs2L85WtrN9fidjP0W6oPN0Xj1ONLm1bjP85Dsd3xZxbfUlNCpJGxQtTHPCJ0SGFU%2BABiXKMZwAMxbpwbfliRomuRt1Pwej8f9T78YeEhNG66LV815Nlq0TCZ%2BUdTZmkef9xMoYn1Bi4ybB0IiMFURYMXNuhePLM73HT6H5JcILWCjx5V4Z0hLdGfEw5ebowAY6pgHR04SKLz9DQn7zDLnYX2fN7TyPJ04xVZYhY%2FE3L1zWAuJYN%2FlY07nRBHNldgOrGyCeLINlYvE9yQUxw9NbvYrOnN43lHuxVfvTVv1gbWBgbgzt6k3XpauulAiDoqtV6EVI4xEaByM4a43cx3jTw83Yup%2BlIlGz8wgrB55zw79iu2zJqGjoN1bxhcqOs26jqYXYwt93Xdp9klLokJKzsEADukmESBQ%2B&X-Amz-Signature=5a7f9b4a794e1e2b6052a78edd68a2b69b88f33a4d84281dbae3a520c37b82b8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662C6R6CX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcuZybCNnC18J2jKnrv6EvfM%2FFM1hiIgzCXarsB12CgAiBwW3AbSu7VDWDaiXbEqeE%2BNUzheu6IZPsza8SPlV4YySr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMXcNcFifE%2BnA%2BE9yEKtwDQSKIkgseKa9V2JkP%2F6PUAADPsmbmeIN3P0WWDF4b7l3Hq0CGlhd4IqeciBVJDArB%2F1paU5XpjW8l4ahNnAPhop44sPyskIXhJx9hSF6%2BwyPhF2JwtUGOU00%2BUljABiK8qfClraeY8uogTEVicxadNSCs2QEr00FaU0QA77QhzwGxITH4t%2F0A1pjDt9DZPeiM%2FJpZksWrMc9%2BHhbYQp08RnqL2PoIaASWJFAdjAVWcddx5BhSjQTe0KQ4K2tJhnffsprB2bVHWTTaADl2UJyfSeg1zphQZIcNnaASKW%2F9iPte5f%2Fy6YyFYak8z3w71iZvJpHX%2FK7pgng9uGoD2gqFWCwCdRuhK7bMjzqlZ9JP7jv8g6la71EM4i1ElEy2iWP3HAcxKhk8YpVo6fDBsVBvIpjWQZiEAyU6T14F%2BzvAfVthhjnjCxG58%2FE3GAPaJGFDXfv5GCtU4B%2F0YOemcoxtI5eej7Jq8ljN9Nh2dV2Fsr9iFINfZ%2BnvIBc8lhv7loc45gyePuQsq9fIVtmAKED4pOM81TlKsKRSXoSivUVPnzkVeSWzOBK18ZZqd3IEw6V0MlnZz0khOgew3LZSJ7k8WoHere7ohypuA1C4CiyG5OsPQNJYH8o0WBAeKkswkufowAY6pgH4jxQZ7ZGWfRuaYioH9NpOjjmTTboeLR2c5AzecUsVIeXnD%2F%2FTLkBHvqO%2FJodPF7JP7nNhyZaoNCgaH7OgotJlxZFKkwberKARgFEnHyvKawS3bV0LelRMGApuD0hV4CMLoLEoNFin8UKaNqsEZ37kPtpOhAglSMP%2FDCZKOBxrA2V8GCqSuCV7sEn3%2FLgzkyJogcEk1X3%2FhH9mEJMMKOhRoojkp8MY&X-Amz-Signature=9a278f166aad8044d6d8456ca59a17c8c0dcd87f0debfd4a6b5bb35e3ca2da87&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIRUOUQ5%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfNz8fLR4XbcMNcXqBhcdUTj8izlDKYlhDIdhJHXxmAAiEA2yMg9yKyenxBninkKW2lK91Dcr9mQTNUMIpbE8zIlJ0q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDCxTw6zTG0SLVDSuyyrcA1j8NGP7CkmUrwUBYZSNcZRAnL%2BFqRLetZxU3mo0E5jIzgPWWl3J0%2BaVtCdMMFQrS54RrQ0kesDOstUGTIEvHgER%2FnuN401OBVjLzU%2F6Rp%2BGlWX9mvB5oKWLpOgBp2%2F%2BBD%2FCb2uU9TJ53y0tY2t3kRm7l5zgnHIg2AXxcykFUBFTYxJ4IkL0wHzNt82lt4Sg%2B870lmgqVvcZrQbHAFGqV2ICyjtL0Pu40i6zNzCrxXrK1fk4ziv7doTpy2m6RBZyXQPmeoMbzOKpqmk17380sOdPYNINKa9r9OqkpbATzdJe1q8QtO42DapVRyiHN%2BmeMPyvSVJw4d4O84c2aam9KQt00L7iT3UoOZp3pD2DC%2FFea26rT0NO3xkHaUDn4dAXh6k%2F0GnTtPMcrmbC145TWpn4keab9%2BKUPw8dHgVigEH%2Fdqubf2AXcxfFFuK71g6GFcKI%2FcFlXBbNIewPyJMqLC%2FxDBkY%2BzJkOhJvO52uUNnhmoQNAFsLaV8EYoVqwi%2FXw9E3HwMQpgkZoF63cwtYqMGXnK6a8khEfoHlUIud1khLMFYloAteIvZI9vAxrk0OyQCb477vFdP1EBFzE9a69zIQTppmuyauUFddfwHGhnYI7ER7Wq8b64ADTbxVMOfm6MAGOqUBDDV8C7E2Dw9lA5eCB7uhIxLeYytHNZl23eJkSkblVFQXZFJCF2xXcWVCFHNsShIhq2Y9qN%2BGMjPBHHJl8m23jl3udc0xdT3VPrIBszSwUi%2Bv0u%2Fo%2F6vjw7mJ%2B2b2ltJjAgr8XMCrtQ7Co6rXvOBwaZnIWWoltvD6AqkJ%2Ff6gUd1iwCh8zogAkTYu2lQifBoTJhX6ZAVAqAYlFnLUti7vQEE1y0ss&X-Amz-Signature=35790f4c9883ef3b0dd80095f64d2bdbaaa61fc54f2fd175ce26f1ed26f396c9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
