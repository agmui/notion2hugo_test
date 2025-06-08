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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AM2ENMB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T081026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGASeQlV83pZmJkYMwoV3BG30ailbbMc0uq3kgz4HWY8AiAhMDZvzcaZ9M%2BryAsOXiekeL0n1pEDuboWrOFNmzTjjCqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlllsKYxD3rorPQiOKtwDglTyWugn9kYqsYNxNoMgBgBcFntH88vI94RvPhaC93JICENsvHxNQGfRYi7HUVXU1n4D11a%2BnEW3hk4oM%2Bxo01O2JZkSex5QfB9o0z4pBUrY%2Fxz2p%2F%2F%2BLbgw30okhrZMhcOGvM7t6ku2qq0SSHnhEkUzNyTCR0jp91CIh9hmJmnp8l3rbyjBCvy57bB6VhLHdXBqP79FQVS4oloFdD%2FVG%2B78nzPP5EW64upKGj1HU3v8AbfXdyjwnxnmTMqYTxykTgB9tG9NlcaEI4YJV7if8jfNtBt2OJDhBPLqw%2FlXRFDGHTpDJXf3kqC2emYH2qNfUzf6eCwK79htnuhLbFjjZhs9yei39CaKCDUpM2CuNXZRVNqak%2B48k4fNv6RGQ%2FuHhn3M1O3MudQc8VG2PktuPtw%2BE%2BkesDYQoGm6XmNDRJf9PpRGVEKnXNx2SwVQZWvqFZIX35%2Bava7IaaPHwH2QPMd7TdWKWat%2Fq3yRgw%2FPzrX78uVtEV8Ol48C4LHYwE3O%2BGMomo8yukmgpwNIT4QOOPv8Y%2FcyHrCMfN17T7PDhh9pvadrPh9e9Y2%2F3%2F64fH80nIsUh8JJTYNxfYLlIMXn3RezTygcrwRsvJGNGUCq4Xj575ZDS5zqIxwL7Kow%2BfKUwgY6pgGhrwYZqkrkAbX0MuTDtBjK5oJCkm6oB3MtoUvntLkJiIJH9F0SAHVzV93oF8FZcoT1xXX2xFCvsUCpaOvCiFG32%2FF8TkdZ2R8huz61XMDPmFr6rBKap6o4ORX8DUu1Bg6zBGYhCnSPOS%2BHZ4K1%2BJ31ME%2BlPtMw%2FtWlzFrMNi9VoVtDh23zlGVoTy1yc%2BZYWb2YsirqqdxIp5NcbWDacks8DZB8WNBY&X-Amz-Signature=e26f24bae352b34cee3894a37cdaeb9b3c3dccb14ef9884e832691f12cb900b2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AM2ENMB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T081026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGASeQlV83pZmJkYMwoV3BG30ailbbMc0uq3kgz4HWY8AiAhMDZvzcaZ9M%2BryAsOXiekeL0n1pEDuboWrOFNmzTjjCqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlllsKYxD3rorPQiOKtwDglTyWugn9kYqsYNxNoMgBgBcFntH88vI94RvPhaC93JICENsvHxNQGfRYi7HUVXU1n4D11a%2BnEW3hk4oM%2Bxo01O2JZkSex5QfB9o0z4pBUrY%2Fxz2p%2F%2F%2BLbgw30okhrZMhcOGvM7t6ku2qq0SSHnhEkUzNyTCR0jp91CIh9hmJmnp8l3rbyjBCvy57bB6VhLHdXBqP79FQVS4oloFdD%2FVG%2B78nzPP5EW64upKGj1HU3v8AbfXdyjwnxnmTMqYTxykTgB9tG9NlcaEI4YJV7if8jfNtBt2OJDhBPLqw%2FlXRFDGHTpDJXf3kqC2emYH2qNfUzf6eCwK79htnuhLbFjjZhs9yei39CaKCDUpM2CuNXZRVNqak%2B48k4fNv6RGQ%2FuHhn3M1O3MudQc8VG2PktuPtw%2BE%2BkesDYQoGm6XmNDRJf9PpRGVEKnXNx2SwVQZWvqFZIX35%2Bava7IaaPHwH2QPMd7TdWKWat%2Fq3yRgw%2FPzrX78uVtEV8Ol48C4LHYwE3O%2BGMomo8yukmgpwNIT4QOOPv8Y%2FcyHrCMfN17T7PDhh9pvadrPh9e9Y2%2F3%2F64fH80nIsUh8JJTYNxfYLlIMXn3RezTygcrwRsvJGNGUCq4Xj575ZDS5zqIxwL7Kow%2BfKUwgY6pgGhrwYZqkrkAbX0MuTDtBjK5oJCkm6oB3MtoUvntLkJiIJH9F0SAHVzV93oF8FZcoT1xXX2xFCvsUCpaOvCiFG32%2FF8TkdZ2R8huz61XMDPmFr6rBKap6o4ORX8DUu1Bg6zBGYhCnSPOS%2BHZ4K1%2BJ31ME%2BlPtMw%2FtWlzFrMNi9VoVtDh23zlGVoTy1yc%2BZYWb2YsirqqdxIp5NcbWDacks8DZB8WNBY&X-Amz-Signature=cd2b88ccfddd22b957a605db09606a5858077294d380569418208925dc9fce15&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AM2ENMB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T081026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGASeQlV83pZmJkYMwoV3BG30ailbbMc0uq3kgz4HWY8AiAhMDZvzcaZ9M%2BryAsOXiekeL0n1pEDuboWrOFNmzTjjCqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlllsKYxD3rorPQiOKtwDglTyWugn9kYqsYNxNoMgBgBcFntH88vI94RvPhaC93JICENsvHxNQGfRYi7HUVXU1n4D11a%2BnEW3hk4oM%2Bxo01O2JZkSex5QfB9o0z4pBUrY%2Fxz2p%2F%2F%2BLbgw30okhrZMhcOGvM7t6ku2qq0SSHnhEkUzNyTCR0jp91CIh9hmJmnp8l3rbyjBCvy57bB6VhLHdXBqP79FQVS4oloFdD%2FVG%2B78nzPP5EW64upKGj1HU3v8AbfXdyjwnxnmTMqYTxykTgB9tG9NlcaEI4YJV7if8jfNtBt2OJDhBPLqw%2FlXRFDGHTpDJXf3kqC2emYH2qNfUzf6eCwK79htnuhLbFjjZhs9yei39CaKCDUpM2CuNXZRVNqak%2B48k4fNv6RGQ%2FuHhn3M1O3MudQc8VG2PktuPtw%2BE%2BkesDYQoGm6XmNDRJf9PpRGVEKnXNx2SwVQZWvqFZIX35%2Bava7IaaPHwH2QPMd7TdWKWat%2Fq3yRgw%2FPzrX78uVtEV8Ol48C4LHYwE3O%2BGMomo8yukmgpwNIT4QOOPv8Y%2FcyHrCMfN17T7PDhh9pvadrPh9e9Y2%2F3%2F64fH80nIsUh8JJTYNxfYLlIMXn3RezTygcrwRsvJGNGUCq4Xj575ZDS5zqIxwL7Kow%2BfKUwgY6pgGhrwYZqkrkAbX0MuTDtBjK5oJCkm6oB3MtoUvntLkJiIJH9F0SAHVzV93oF8FZcoT1xXX2xFCvsUCpaOvCiFG32%2FF8TkdZ2R8huz61XMDPmFr6rBKap6o4ORX8DUu1Bg6zBGYhCnSPOS%2BHZ4K1%2BJ31ME%2BlPtMw%2FtWlzFrMNi9VoVtDh23zlGVoTy1yc%2BZYWb2YsirqqdxIp5NcbWDacks8DZB8WNBY&X-Amz-Signature=bf9c0166b0a8b21b914147dc860acbdbe6b52424865292b0d1408cc02fff91bc&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMJ5H6GJ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T081027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDia3jw0MO8fRlLS%2FWMZafp%2BWzv1HKt9WByvIQkzVYMRAIhAJVkIycQ6DEN5i0LtlSLCNqzqF5D8szP3HB7dF8rk4YPKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbJz3P3hGAqoYfT1Uq3AOASXk5sTgcD283VifV%2Fiv5C6eWl2WNSGqrZ5K69IMlJZqm4T9obLEtQYTYuX9oOQ%2FQR2F9o5Tou0QpD3H%2BUmD54byrCMC%2FFzhz16I9sMca3xBfNa8FKKOczOxnKYmnApV0n4iVfCN6Z02zSSorN%2FrQZUBd3%2B53bWNZvyykSajrIZwReWXfvfx1zk05TVrtF1IZwIJ4n4Rb2AGkZCEuV%2FLwQkVpcxAtyf782iB1J5%2BGDQOOaDkwcTS%2FjtkB2SngCDrMGkvO1PdBX%2BTXLDFGKJ20Jm5FVVzQnatjoeF%2B2NgM5bRF%2B2V1AYFtA%2B1hflizKk9N7SE3JuKZvMjtG4pEWiLTbTZk8BqQQ8Oj2Y34irm6J57bj9zkrobr5mZgbADtZRppYfQ18Pyrdreh2kLsEvj%2B%2FJLRLcEJ4S2WuCm9uy%2FixX9%2BZi%2BLzKNquKDHHpqyOXTaMmErFwbE9niyjCfI9idpBIMAIssNKKvovuPbXqlKNua2KNIxuhPPVOVgwsp%2B4tkKVOVuYel1eqS2ocV5ih9uyM3P2E3h8wjSDcmIxXPJrqv1GcMnniaoVJLCEOcO%2Bjjdo%2FqZg02Xbv0nqu5MqtVJUAGUOmsVq6W9CvpyxiiYtvr9jvplfx0DyaEyyDCN85TCBjqkAeISHAmtVXNMW6iRJ2AOdf71mjzOzpmsYO2gHBvGqFnepLk5zwlpyMCWIa5Pmn0eoWmyDkIZWtUv96eD16WGkDfUgYRChhAw06extER3a2f8p3feAdLhQv6T0FZ37dO9OjauF6XvWgvwtuik6kO9p6ZuidQziKny%2BrbV1vE0KeFPBku8c%2BIRDJlMJVgWkWzMY1b0SAPfuhBdQxmfgq5JbQzuA8%2Ba&X-Amz-Signature=145b853983942b1e2bec10fe163f98976666bdb723605b33b8bfe05fe42cc98c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652WSMILR%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T081027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICePMinNpBfBbXiu3NhQmfeTJj7F8Q4RL1Be9qt0cGTvAiAlDbo0okLhXOnFmrIcJRVGSfqUeDCdNZI%2BEsRf%2BmEZHyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0kTMnSKq64YPszffKtwDCJapc6UW33QDaKXvjqosWwq0gPgf5Jem0ipyemkzJi7M03WT2B%2FxKFN3u8bCRhKeROVB94d9M3KSO8e4EWAc%2BsFGeD%2BH0gkJsejAeVYIQoDJYNX38HA%2Bq95UA%2BmcJdOn8DIBi7cxThnCh%2BLl2ktcTEnllX%2FrZ0IOqyBFCLh2bnGYKt%2B4WYqdL%2BSfWmk8qaM4Xya6THC5%2Blsv1%2B%2F0SNQBKm9fC8O8rpGVat2dLi1uiaT0RQdAe4NvRViW5oM0q19nO9cLfbJNk9fyg9MGsMfhc8xl48MMyvQwhwglQ%2F4bR9uN5SOPSNq8ZaaUqtCDNvhxi%2BAJLty4detmzWM%2BuL%2Fi9htc2PeTnwtXeGbBWUHGUt5ejAteiFGBqGlIv%2BMcRkACzZnZ6qO20sNbTJEm2r3fE2Jw5ozqug%2BWVEccbwbsPxEv5toQcP2xLk6Jp7K3Z9bSDPEG%2BOz26sPVeE4Hs1PjVAjtRR7nYCaV2AxF9lN8bimD%2BL8rv%2Be21mHEBWcRWANzEVbZkbTlsF2vPWm%2BSTdehFLF1W6UMkeRBtMuTxs8Esin%2BfE6MNUathA7KH2rMQTMEQAYBUlg61i2BexGHcOHuZNonTZuVljL4dAdYbaoMUPrztPpp4jidyfOaX8w2POUwgY6pgFbw%2FSgrBYLDxZVOQeXNOZMT5KdYvghBldsc2bz5%2FQBdGpXkvCh2I1bP%2F6I5kq7L4OG%2BD%2B43NsEAcxRJUqu77n%2FAjkgSLkm961gaBjBHMjHBxqVnnEoBj0b4inuUTTyUHyYi4WjoRIHkDAY6kIRJgJsLWUvkmdOJkrzAbLv3CBV1fuzhgrPXOp%2F8AzwGcDDutBoPw89DLyK8p4iVg1naTsgmGSTwqgE&X-Amz-Signature=a9c0bb1aa087ac5e73fe51f6cd08c706c06d2a592833c64d43c0e61afa30ceac&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AM2ENMB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T081026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGASeQlV83pZmJkYMwoV3BG30ailbbMc0uq3kgz4HWY8AiAhMDZvzcaZ9M%2BryAsOXiekeL0n1pEDuboWrOFNmzTjjCqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlllsKYxD3rorPQiOKtwDglTyWugn9kYqsYNxNoMgBgBcFntH88vI94RvPhaC93JICENsvHxNQGfRYi7HUVXU1n4D11a%2BnEW3hk4oM%2Bxo01O2JZkSex5QfB9o0z4pBUrY%2Fxz2p%2F%2F%2BLbgw30okhrZMhcOGvM7t6ku2qq0SSHnhEkUzNyTCR0jp91CIh9hmJmnp8l3rbyjBCvy57bB6VhLHdXBqP79FQVS4oloFdD%2FVG%2B78nzPP5EW64upKGj1HU3v8AbfXdyjwnxnmTMqYTxykTgB9tG9NlcaEI4YJV7if8jfNtBt2OJDhBPLqw%2FlXRFDGHTpDJXf3kqC2emYH2qNfUzf6eCwK79htnuhLbFjjZhs9yei39CaKCDUpM2CuNXZRVNqak%2B48k4fNv6RGQ%2FuHhn3M1O3MudQc8VG2PktuPtw%2BE%2BkesDYQoGm6XmNDRJf9PpRGVEKnXNx2SwVQZWvqFZIX35%2Bava7IaaPHwH2QPMd7TdWKWat%2Fq3yRgw%2FPzrX78uVtEV8Ol48C4LHYwE3O%2BGMomo8yukmgpwNIT4QOOPv8Y%2FcyHrCMfN17T7PDhh9pvadrPh9e9Y2%2F3%2F64fH80nIsUh8JJTYNxfYLlIMXn3RezTygcrwRsvJGNGUCq4Xj575ZDS5zqIxwL7Kow%2BfKUwgY6pgGhrwYZqkrkAbX0MuTDtBjK5oJCkm6oB3MtoUvntLkJiIJH9F0SAHVzV93oF8FZcoT1xXX2xFCvsUCpaOvCiFG32%2FF8TkdZ2R8huz61XMDPmFr6rBKap6o4ORX8DUu1Bg6zBGYhCnSPOS%2BHZ4K1%2BJ31ME%2BlPtMw%2FtWlzFrMNi9VoVtDh23zlGVoTy1yc%2BZYWb2YsirqqdxIp5NcbWDacks8DZB8WNBY&X-Amz-Signature=9b455ee00cb6b072ce070b40ca22c7a8d268416d354f784a34aed0b4d74441a6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
