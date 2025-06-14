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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W633PKH%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAKn9OpsE9Gvp3kGoxbcFU5mf%2BdIS3b%2BMEzK5ytT9Rj2AiEAqpM2hmBoY%2Fi16I8kUUXqNECwl3EiwyAw5sQZ5NJA4n8q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFNgfijkdxWLSiUxjSrcA0x9Ka%2Bd3nTgizhDo%2B%2BOStpKnusH4mz2bfOmT5VUcBXGjbNttSsjHzA6oBYh20EMejFZkbgm56NBnMidBXSEugmDlVO9t8bjE7%2Fdl%2FZeh1pjouRprm6gvO6svQo6%2F6LJ24BKYWneU%2B8AZZNqazyKMoaUGZ%2BdsCgyi7eM7qzCAKFrbdGjwpmBrAupppGw7AjwyjrmvZWRdP547t%2BOTCfeQjEvv%2BMRCCIpN%2BD1DVHB0LjJIujQr5AsNYIa5oJ8Ck63Q7wo%2FAYPVKJz1h2Yc3y0VSyyy7Th0cv75V81aFIih7UMVJZQY4AYrJNV4W5Ph%2BfYOJ0W68uujHu5Iu6vCQBPfP3CFxouYd%2FRlVWSxxfUTqm%2FMAbxRgjB7TZ8w2CZV6vamYVpl2BWZEYFChO7mH97tlta%2Fw%2BqWZMWp%2BmkOqezRZulD0PgA5VK%2Fcd%2FzRfDupIPcesHwtOs2ZMjdgihvcq89%2Fo6WG0JlaIhcX%2BZgHJVyrCtD1bTjzcbeWNVLAW1qZbUs2W3a9icoqH02C8yTzYgVdVTvNeq9X2BdaFDfBYvB09vKbU5zYXBpYd%2B9f3%2FxMTGQjnmZEr2aqbWoEGoM1levyO9vkcM%2B%2F2okVqP0wlUdV3UjZjhy%2FNBWkKRDwOmMPm7tMIGOqUByE570euM9jeyxJq%2FvrRUhG2tMhZOHEyNC51eVODQ0boF9Dr78gmm2ardpgBwtRanygG7MU%2FXGpm3IyD1tzlS%2F8OnaZTCZ6LQN0AORubpiJ0UXjfPUvW81soE%2BUtRRR1truG4P26wKqZ37TXujHzcNa01ymke37Fgcwu0yi9lN635BW4OiMj2rEx0RH56jh2xWyUu1ivCCE2hScHZrzYnKOnZDIIe&X-Amz-Signature=f9cbab0c724c8f0561acf0342fe0951a18157a97c5eeb100d51ee69ee19d69d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W633PKH%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAKn9OpsE9Gvp3kGoxbcFU5mf%2BdIS3b%2BMEzK5ytT9Rj2AiEAqpM2hmBoY%2Fi16I8kUUXqNECwl3EiwyAw5sQZ5NJA4n8q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFNgfijkdxWLSiUxjSrcA0x9Ka%2Bd3nTgizhDo%2B%2BOStpKnusH4mz2bfOmT5VUcBXGjbNttSsjHzA6oBYh20EMejFZkbgm56NBnMidBXSEugmDlVO9t8bjE7%2Fdl%2FZeh1pjouRprm6gvO6svQo6%2F6LJ24BKYWneU%2B8AZZNqazyKMoaUGZ%2BdsCgyi7eM7qzCAKFrbdGjwpmBrAupppGw7AjwyjrmvZWRdP547t%2BOTCfeQjEvv%2BMRCCIpN%2BD1DVHB0LjJIujQr5AsNYIa5oJ8Ck63Q7wo%2FAYPVKJz1h2Yc3y0VSyyy7Th0cv75V81aFIih7UMVJZQY4AYrJNV4W5Ph%2BfYOJ0W68uujHu5Iu6vCQBPfP3CFxouYd%2FRlVWSxxfUTqm%2FMAbxRgjB7TZ8w2CZV6vamYVpl2BWZEYFChO7mH97tlta%2Fw%2BqWZMWp%2BmkOqezRZulD0PgA5VK%2Fcd%2FzRfDupIPcesHwtOs2ZMjdgihvcq89%2Fo6WG0JlaIhcX%2BZgHJVyrCtD1bTjzcbeWNVLAW1qZbUs2W3a9icoqH02C8yTzYgVdVTvNeq9X2BdaFDfBYvB09vKbU5zYXBpYd%2B9f3%2FxMTGQjnmZEr2aqbWoEGoM1levyO9vkcM%2B%2F2okVqP0wlUdV3UjZjhy%2FNBWkKRDwOmMPm7tMIGOqUByE570euM9jeyxJq%2FvrRUhG2tMhZOHEyNC51eVODQ0boF9Dr78gmm2ardpgBwtRanygG7MU%2FXGpm3IyD1tzlS%2F8OnaZTCZ6LQN0AORubpiJ0UXjfPUvW81soE%2BUtRRR1truG4P26wKqZ37TXujHzcNa01ymke37Fgcwu0yi9lN635BW4OiMj2rEx0RH56jh2xWyUu1ivCCE2hScHZrzYnKOnZDIIe&X-Amz-Signature=4244aa54c5841a62e5f164bfd2ea8bff09bc2ba12f2a8d5948d8e8d754c038e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W633PKH%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAKn9OpsE9Gvp3kGoxbcFU5mf%2BdIS3b%2BMEzK5ytT9Rj2AiEAqpM2hmBoY%2Fi16I8kUUXqNECwl3EiwyAw5sQZ5NJA4n8q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFNgfijkdxWLSiUxjSrcA0x9Ka%2Bd3nTgizhDo%2B%2BOStpKnusH4mz2bfOmT5VUcBXGjbNttSsjHzA6oBYh20EMejFZkbgm56NBnMidBXSEugmDlVO9t8bjE7%2Fdl%2FZeh1pjouRprm6gvO6svQo6%2F6LJ24BKYWneU%2B8AZZNqazyKMoaUGZ%2BdsCgyi7eM7qzCAKFrbdGjwpmBrAupppGw7AjwyjrmvZWRdP547t%2BOTCfeQjEvv%2BMRCCIpN%2BD1DVHB0LjJIujQr5AsNYIa5oJ8Ck63Q7wo%2FAYPVKJz1h2Yc3y0VSyyy7Th0cv75V81aFIih7UMVJZQY4AYrJNV4W5Ph%2BfYOJ0W68uujHu5Iu6vCQBPfP3CFxouYd%2FRlVWSxxfUTqm%2FMAbxRgjB7TZ8w2CZV6vamYVpl2BWZEYFChO7mH97tlta%2Fw%2BqWZMWp%2BmkOqezRZulD0PgA5VK%2Fcd%2FzRfDupIPcesHwtOs2ZMjdgihvcq89%2Fo6WG0JlaIhcX%2BZgHJVyrCtD1bTjzcbeWNVLAW1qZbUs2W3a9icoqH02C8yTzYgVdVTvNeq9X2BdaFDfBYvB09vKbU5zYXBpYd%2B9f3%2FxMTGQjnmZEr2aqbWoEGoM1levyO9vkcM%2B%2F2okVqP0wlUdV3UjZjhy%2FNBWkKRDwOmMPm7tMIGOqUByE570euM9jeyxJq%2FvrRUhG2tMhZOHEyNC51eVODQ0boF9Dr78gmm2ardpgBwtRanygG7MU%2FXGpm3IyD1tzlS%2F8OnaZTCZ6LQN0AORubpiJ0UXjfPUvW81soE%2BUtRRR1truG4P26wKqZ37TXujHzcNa01ymke37Fgcwu0yi9lN635BW4OiMj2rEx0RH56jh2xWyUu1ivCCE2hScHZrzYnKOnZDIIe&X-Amz-Signature=43e4312dda366f10b73fbc17290a79302868fb7c10176bc8dcaf97a95a671c30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X6I2EZS%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIFqpqR1BtGE%2Bx7fkjEpa5VRy34Bxa9j25CQHSgW8NVRTAiAWkzjdbg7MwADNu1ga1rBzRFBJjoeMoc2A885pOtqr4Sr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMcXn4CnamtsHsGUp4KtwD3SM%2BF%2BbiVzUs0Ep5aNv79PRdHonfFAUTDoPRJFTDysddlYTQvglXjdXDmscblVN9EsOnH5nxJ1j%2FOR6kXuP9tIlcfpIgEfcZ1aBtqsN%2FfPPKliQB9eA0U8o2b5LJG0yUb6RG19Fx76eBVNZbnLZ6XHKFBuY69ycZY5E8dmCfCsl%2BP5UTpXJQ4NpzW5zy4qnBSBgy1z%2FmsbekD%2FVVGQds207ddzv8reMl43Ok%2FJtaOZfM5Tf2gEBWSThQnRK%2BAcPImI1ZxL7nwTW%2BRap%2BkJNhOjQIvHMwusA60tVSqNRbOLSdWOzSodg8%2BV%2B%2B9gqo2DhKnhTorTpicqxl1%2BetlFcRAoO695ZHZiCJmu0NYpKhQ7K8QrYMCoGC%2BhaV2YmJJDCDj9rMYbx3IhYAop7GFWychGI4GsjwT7JdgbFv7qW9B9JjTlPbq3CuPTGpXRmucWzY5UjZWPfcbgkVwUswfZhMSFTbNTgS2o8pB1RftAOVsKlfD6ToawKlBYRHp9jKKgoXym7iVhi4MC5LNXbOxPl1LtmXkHC0gd100l7vYnsgOEhtkCexJX75nRDnYeiO2uz0hVxlhjbBWgPgoMoprx6OpJGm9Xg6%2BvdicpLPDb4MEGQO%2BdMv%2BlNm37qn30Ewir20wgY6pgFCtOMgTRkSv1ry9v7oaI1uGBZIjxWNgBr%2B1FDUcdhpqjQsfqyDxUM0xQ8FWyZPRpU42qkPpHsf4P%2BdrNkVx%2FmZLuXbsulZBvL4VlaGAON8YqkuoH%2B8PUqJ81jZphDLAWYgL%2F3vydiET4kIGp3mrc7l3rFKyK0S0Gr51fsp9RlXfyD64p9Og51s1e3QiEtEjeA3577WyqigcFp6H2phf%2FYFmjHg%2Fkvm&X-Amz-Signature=f7b0d7044667caa41cced278c62b0cd09f37523c9f2d2b824c94151b0480e1a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627LXGGBT%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIBCwILYTs3LOP15EDVuAUo1BQDSdWioWFzaNyb6W8yYQAiEAweqUKAzmmxAUFCo6zSlq12n%2Bk54B2127lf3h6Dk8hlcq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDAiAAMde1ktCCtjoDCrcA%2B23loj9G2JFNDK4pGzfvoJ1uIF2Syi%2BVBHMkz2NnOjDJL6gq%2BSWIchwNCS4YFIU6GShlrL5U8ndYqRclPX%2BaCkGyuAr1g%2FRTqIcESjI19CNlNEuwVeRTV2fxhotpiH1afMOCBFEtGIIz5tkzayNgVWcns6UxUJ7oH6FkV3VWZbCUm8ywRi6P9D3nFuXpbDS7pnVJfeV%2FKA%2BYgu2tAMDoVFfAgI%2BrUVkhdB3HW9zRn8vF%2BdJQvF2OckLZyxdrG2srccAU2%2B9osWYp7ODBE%2BbKeSi%2BV%2B3mDbhey1GXAXwu9lBhFGIrgCzW3hSXmr9CzqlrypYx9wePbR2aa5YYhgP4RhpHia6JIvszrpnlDOtTKLPMpSaz4YodNYQPeQxfwa03B%2B%2B0FMR1T3liwv%2BWwMiqFHmwjZeSm12UFBqITyOGS%2BhGvwrNkqJzakUN9mUF44bj5OZ7%2BJ08tycnXrq5ImSqytl6jgz1BMhxdwNqVXPYGdW5e6oXB2L1JwCrgIKcR%2BxqvAuFfkW2gt%2B4CtzWgM0IIqm5eGVZXFv2H2HHlEkWZqrtFWj0kqvYBddHbYBhM%2FwLro9E2%2FDL5fsIez90ddwmqNr6vqfJYGfDW7iWKChYDvL34kEoutJwELVFLx%2FMOa8tMIGOqUBklywYodWw0t%2FjCvaxMHhlE%2FVUiJogQ7ar%2FKZrnegYrWUj1ih8ytpy%2FuEP2fYi0KTReh0aXOiwCwZKmm1KT3lR%2BrOtA9b17OhZMT5st%2FUuTWLmJ8Ac5N3Gh6POxMpkN2FS4C4%2BdF8H49Zkf%2B3iA25n6mkCCrzNZ9lF%2FLeMX3iLTKpDxqaXmFqLCc6KoqIPaHYFM4%2BEBY4IWYhzhwO%2BcUiGyUM5L%2FY&X-Amz-Signature=144d68acea936e35e3936803845154868fc32d6638dead48dd86ad19a4f3b535&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W633PKH%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAKn9OpsE9Gvp3kGoxbcFU5mf%2BdIS3b%2BMEzK5ytT9Rj2AiEAqpM2hmBoY%2Fi16I8kUUXqNECwl3EiwyAw5sQZ5NJA4n8q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFNgfijkdxWLSiUxjSrcA0x9Ka%2Bd3nTgizhDo%2B%2BOStpKnusH4mz2bfOmT5VUcBXGjbNttSsjHzA6oBYh20EMejFZkbgm56NBnMidBXSEugmDlVO9t8bjE7%2Fdl%2FZeh1pjouRprm6gvO6svQo6%2F6LJ24BKYWneU%2B8AZZNqazyKMoaUGZ%2BdsCgyi7eM7qzCAKFrbdGjwpmBrAupppGw7AjwyjrmvZWRdP547t%2BOTCfeQjEvv%2BMRCCIpN%2BD1DVHB0LjJIujQr5AsNYIa5oJ8Ck63Q7wo%2FAYPVKJz1h2Yc3y0VSyyy7Th0cv75V81aFIih7UMVJZQY4AYrJNV4W5Ph%2BfYOJ0W68uujHu5Iu6vCQBPfP3CFxouYd%2FRlVWSxxfUTqm%2FMAbxRgjB7TZ8w2CZV6vamYVpl2BWZEYFChO7mH97tlta%2Fw%2BqWZMWp%2BmkOqezRZulD0PgA5VK%2Fcd%2FzRfDupIPcesHwtOs2ZMjdgihvcq89%2Fo6WG0JlaIhcX%2BZgHJVyrCtD1bTjzcbeWNVLAW1qZbUs2W3a9icoqH02C8yTzYgVdVTvNeq9X2BdaFDfBYvB09vKbU5zYXBpYd%2B9f3%2FxMTGQjnmZEr2aqbWoEGoM1levyO9vkcM%2B%2F2okVqP0wlUdV3UjZjhy%2FNBWkKRDwOmMPm7tMIGOqUByE570euM9jeyxJq%2FvrRUhG2tMhZOHEyNC51eVODQ0boF9Dr78gmm2ardpgBwtRanygG7MU%2FXGpm3IyD1tzlS%2F8OnaZTCZ6LQN0AORubpiJ0UXjfPUvW81soE%2BUtRRR1truG4P26wKqZ37TXujHzcNa01ymke37Fgcwu0yi9lN635BW4OiMj2rEx0RH56jh2xWyUu1ivCCE2hScHZrzYnKOnZDIIe&X-Amz-Signature=68bf5f4625ef3739e4ce5b962392450a0f18bb93936cd65668cbcc322b0b4fe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
