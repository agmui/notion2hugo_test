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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7UEIHXT%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDzY1KB6TqDMAvoEF3jOdqLRq0HCkL9ffUXEdEUrlsiggIgEwD8Ekx62%2BePKAc8XE9NdericRDu4t432sYdxLUi%2BfMq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDCDddvrQGgzy%2BbDXaircA2IvCzC2AkdnTeRdEnqneFSjVXWJK7oyxwED8f%2FgGbkKA3Segt%2BAV0RyVzlw2puwWgTqZC%2BHwONQ2SJDGdsXcQJ76stEPoRk39a670uyYUPSB%2B%2B5CJDFCewei3tOi7lEh%2FOIPcgcOpozt%2BH9rk0hhTDbuU8tFAlYKBCp7AI7sot8dyTDlixOcrk78LcDBB5vgU8Vej5VP%2BOOcfocyfy3bIoSQ0v0PrtjmzT5LWWOHaXtkt1IkVP8VHU0VnajP9mOmfxV8NJ7v9CKoTtVQGUaaYOes0H2tEOzWoNs%2FDWhyLi2LP4bKVY%2Fl20CFyWpQUHxygIutIhyxbVovx1gqa%2FoQIIWnyYHKnOdZvdOYcMm8GUce3FovEegV7cwDEY8E9LvkDEz6XrP2KD4nO9LEnrcg%2F%2BcinOQyE6dbOtTxQ6P3y3YDBK76wDKhrau%2BnaTI1vonD0u%2FDlF1s6iIY2gb3FZlpc3q3hmd0AUm6JZn1jqUiNqgBopwC785YKxtkKPlhvKii9jYGQGBYs0ZW%2Bd7msSOt2wmuqpv056boAwqrptufL0E%2F0SQNDK%2BU77U%2BJ9%2F1oTvSXAyXNzIf7kGtApE5DpbVNKU0qADURCWh7qVS7wbq53PRQbTNyDDoKNP%2BktMM%2B8kcQGOqUBGsATtuSg56Pb3P6HB%2FZTa2yR4C4coeFQWUYJ7i25ZE4JZz3Uy0x6%2Fojbih4bZ1epJ74CNFFlDfwlmh2%2F%2Bvn3NCjGZo5kWOIWZfcsM0G8i46hiXstJrNQ5Gytf35wOq9fQ9HiLLQ7ikAKL3Dg6JfnyFlnS%2BV7vqf0w8OXGakekYB86Qi2RCYBIL2mWq8FlBDIN7eD4Wu7rcfmdEfz87Q%2BJySr%2B75v&X-Amz-Signature=78e813e490e34c34e903298bc7a95e26d046accfa7f864ac55fb3df38300d672&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7UEIHXT%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDzY1KB6TqDMAvoEF3jOdqLRq0HCkL9ffUXEdEUrlsiggIgEwD8Ekx62%2BePKAc8XE9NdericRDu4t432sYdxLUi%2BfMq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDCDddvrQGgzy%2BbDXaircA2IvCzC2AkdnTeRdEnqneFSjVXWJK7oyxwED8f%2FgGbkKA3Segt%2BAV0RyVzlw2puwWgTqZC%2BHwONQ2SJDGdsXcQJ76stEPoRk39a670uyYUPSB%2B%2B5CJDFCewei3tOi7lEh%2FOIPcgcOpozt%2BH9rk0hhTDbuU8tFAlYKBCp7AI7sot8dyTDlixOcrk78LcDBB5vgU8Vej5VP%2BOOcfocyfy3bIoSQ0v0PrtjmzT5LWWOHaXtkt1IkVP8VHU0VnajP9mOmfxV8NJ7v9CKoTtVQGUaaYOes0H2tEOzWoNs%2FDWhyLi2LP4bKVY%2Fl20CFyWpQUHxygIutIhyxbVovx1gqa%2FoQIIWnyYHKnOdZvdOYcMm8GUce3FovEegV7cwDEY8E9LvkDEz6XrP2KD4nO9LEnrcg%2F%2BcinOQyE6dbOtTxQ6P3y3YDBK76wDKhrau%2BnaTI1vonD0u%2FDlF1s6iIY2gb3FZlpc3q3hmd0AUm6JZn1jqUiNqgBopwC785YKxtkKPlhvKii9jYGQGBYs0ZW%2Bd7msSOt2wmuqpv056boAwqrptufL0E%2F0SQNDK%2BU77U%2BJ9%2F1oTvSXAyXNzIf7kGtApE5DpbVNKU0qADURCWh7qVS7wbq53PRQbTNyDDoKNP%2BktMM%2B8kcQGOqUBGsATtuSg56Pb3P6HB%2FZTa2yR4C4coeFQWUYJ7i25ZE4JZz3Uy0x6%2Fojbih4bZ1epJ74CNFFlDfwlmh2%2F%2Bvn3NCjGZo5kWOIWZfcsM0G8i46hiXstJrNQ5Gytf35wOq9fQ9HiLLQ7ikAKL3Dg6JfnyFlnS%2BV7vqf0w8OXGakekYB86Qi2RCYBIL2mWq8FlBDIN7eD4Wu7rcfmdEfz87Q%2BJySr%2B75v&X-Amz-Signature=63ed6cc1fab1673ff8cf17375d58d06658298cfe0e23e247746a719a55fd3aaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7UEIHXT%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDzY1KB6TqDMAvoEF3jOdqLRq0HCkL9ffUXEdEUrlsiggIgEwD8Ekx62%2BePKAc8XE9NdericRDu4t432sYdxLUi%2BfMq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDCDddvrQGgzy%2BbDXaircA2IvCzC2AkdnTeRdEnqneFSjVXWJK7oyxwED8f%2FgGbkKA3Segt%2BAV0RyVzlw2puwWgTqZC%2BHwONQ2SJDGdsXcQJ76stEPoRk39a670uyYUPSB%2B%2B5CJDFCewei3tOi7lEh%2FOIPcgcOpozt%2BH9rk0hhTDbuU8tFAlYKBCp7AI7sot8dyTDlixOcrk78LcDBB5vgU8Vej5VP%2BOOcfocyfy3bIoSQ0v0PrtjmzT5LWWOHaXtkt1IkVP8VHU0VnajP9mOmfxV8NJ7v9CKoTtVQGUaaYOes0H2tEOzWoNs%2FDWhyLi2LP4bKVY%2Fl20CFyWpQUHxygIutIhyxbVovx1gqa%2FoQIIWnyYHKnOdZvdOYcMm8GUce3FovEegV7cwDEY8E9LvkDEz6XrP2KD4nO9LEnrcg%2F%2BcinOQyE6dbOtTxQ6P3y3YDBK76wDKhrau%2BnaTI1vonD0u%2FDlF1s6iIY2gb3FZlpc3q3hmd0AUm6JZn1jqUiNqgBopwC785YKxtkKPlhvKii9jYGQGBYs0ZW%2Bd7msSOt2wmuqpv056boAwqrptufL0E%2F0SQNDK%2BU77U%2BJ9%2F1oTvSXAyXNzIf7kGtApE5DpbVNKU0qADURCWh7qVS7wbq53PRQbTNyDDoKNP%2BktMM%2B8kcQGOqUBGsATtuSg56Pb3P6HB%2FZTa2yR4C4coeFQWUYJ7i25ZE4JZz3Uy0x6%2Fojbih4bZ1epJ74CNFFlDfwlmh2%2F%2Bvn3NCjGZo5kWOIWZfcsM0G8i46hiXstJrNQ5Gytf35wOq9fQ9HiLLQ7ikAKL3Dg6JfnyFlnS%2BV7vqf0w8OXGakekYB86Qi2RCYBIL2mWq8FlBDIN7eD4Wu7rcfmdEfz87Q%2BJySr%2B75v&X-Amz-Signature=648366a18b1a8630e19392a8d915437feb7501ec790c2a2dc60f36e5d3e8c902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624SAMJ4N%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCU4cps3nCiZRjR2kL4jR7yOULPtTQ5I15iapddBnjk8QIhANuEsDVsc1ZXa4U%2Fys80%2BGkvgAG7Pd6b0%2BIA9KBNVaHAKv8DCFYQABoMNjM3NDIzMTgzODA1IgxRlh2h1BNlBDQ98c0q3APKRzMK565r1s3XkeuJMZsgqlymunW9TTo6e3WrlXMyVjLhdZ7%2FeD8UpoY%2BNkmTp2nmwVbEfg9Gt857Nj%2FsQD31Pj8YKN36iqBD23b9Uix1jMQiPTPdXA7kOisPRS4Hb5ZaCDtVDRAjLxsg5ZsT5bF27nI8yC%2F4xePvXoPNqFZcINYu3sZpxSkEiG1a52h%2BCDVtGVfpWaxyiVibhwSoAbwDQv4QQmAJjgfSmp3ysD%2BSJ%2FrH%2FVRLoXtSUG0%2B28nOLQsD%2FIE0dcDV7EBCiDHMWNGzteIsFg%2BJaspytpSo9Btu0PhfYBv5qTg34cV6zeIWLTmmS7KccBcdAajz2y4WtVkpi1VOXWAYpkYHaOzea1ik3s%2FeRAkEKzRmyiJqDF8%2F67Q%2Blp%2Fpa%2FNwXyRDRAtfFQn%2FfBU8qFAJhLRcCShYofnftSERq6ycc2voLNYVbnVZoo%2Bp6WV%2BsxTcNC88rVjJ2W5amFaN7N3rj1Pgh44yLkgvO9vzIrclgOPOZ4CNUYcFHE%2BSP7dcVmmTjFcG2dSSoZ%2BLJ1MlN%2FoaamwzPr8KVIXjlBMieqZwN5Qo%2BD6Fx7DoWzQA%2BuRf7QArMsTJF3rK35uKgexceTEFH02ZdTNV6dRRvkmLjCzH%2Fp%2Bgj%2FJbTTCqvJHEBjqkAVPwwr%2FEOZ5Sls1dJ4PUBu0aRCetvnIuXj8jSaB45NUk7TWGHMf%2FuAMu0Vr1ldER5eLI744M6un%2BRKQKSIsEiZe5gr4RVWUkFrIX%2B2W%2BeXHut71kefHjortRGaFyXg716uE%2Bwo5yMQnn1rg836P2WjYoFqOsUM9wuQDQxKG4MMzUNf2upDi7aj49o0ZVKBvWgdFs4oqXl7GGwhFhpDPaCEVy0orl&X-Amz-Signature=63c53ea6b5c4766902fd516bc2eac10dfdc7e2277700fa889e37709c468e3b3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFD2JJGK%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIBBznmSGeku%2Fbmup%2FegFqCeC0ixbiUWCDVdAd50QhdkwAiEA7nHK4fP4wTaL2z99w2te94jZqfDQRBrFT0LKImfdwt0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDDJSLW4J0HxfsSIYqSrcA6qbOH9VWHZroYdZnO4gnCcu6k0bTy3w6MigEY117R89sAljGoofAYcjjjZGE9PQ65t62km1Mx3ThHitcGLJyrexfVH1toGz%2FTSbsZ7ApOyM%2FmI72rt3NhJDg973L%2BN76fksxFsXkDq77Cb5vMOHo7qOVqW5mvByDjFM8fYYHOGHXCBC0pDaWt%2FF8cj%2BAedpXn2%2B6SRHkq0VF3OZd84IJyvrYCYFyHegeokmlBql7FqzWFKysFamkcUmjxQUFzDbAD%2Bv8SqtJdud5r3v%2BUGwPCmL4s%2BzavEjUPq4jEF9LRy%2FbLTSxLbPV9uveKoTcCjoxiJttBn%2F70sOmiRA5Gbu6FDJsdfug0SPudgWm6YKEMJXrZDFSgElIn5K5ubthR%2B35wEosp%2FuT8Ha3IAZq40%2BQsLImXgyGu0IGqC1%2BjQvqXr6y1NGmVc3EiDRjQY0pEv9j7QxE7dNJ9P87OJcbZj3QJF%2F2dvUasE8TLb8i6n3t6K%2BGe74JfIuKrKEAmqTYYxl2do6YPDuBugSCZnSPd5gqJ5KLV6HQ7Vr8S1FLZIOMTuhcs4k%2BzYCiapn5XDIaSwSkVtN01SKW14bf2KCaUyboIzne00lIsB5kru%2FhauQJFwmvKIfNDiEx9UynvNwMLu8kcQGOqUBKshcgUvuuO6U2fDQ3AInY5qJMZPGlU%2BbjepU81%2BL9d2NUySHWk99cb%2FpOdm0gFcNjw7DbyDLxc4zA3k1IVcuKuJ4jDA0azF3o0xZeBFlEm5u8cRq60n%2FJg9wZwjVwDPMt4BLDXQiy%2FOwsttnD4APm%2FYe%2BWK1WiE1C7w%2BkmqHH%2FXbsgfEbhtA%2B5znx46nOV2PQ6aZDCIG%2F2HnmOP7NDfZxqRasyh2&X-Amz-Signature=5fed45671b90e6862fba9a64027bddb612e73ae8802f96a8547c3c0aadd42ef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7UEIHXT%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDzY1KB6TqDMAvoEF3jOdqLRq0HCkL9ffUXEdEUrlsiggIgEwD8Ekx62%2BePKAc8XE9NdericRDu4t432sYdxLUi%2BfMq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDCDddvrQGgzy%2BbDXaircA2IvCzC2AkdnTeRdEnqneFSjVXWJK7oyxwED8f%2FgGbkKA3Segt%2BAV0RyVzlw2puwWgTqZC%2BHwONQ2SJDGdsXcQJ76stEPoRk39a670uyYUPSB%2B%2B5CJDFCewei3tOi7lEh%2FOIPcgcOpozt%2BH9rk0hhTDbuU8tFAlYKBCp7AI7sot8dyTDlixOcrk78LcDBB5vgU8Vej5VP%2BOOcfocyfy3bIoSQ0v0PrtjmzT5LWWOHaXtkt1IkVP8VHU0VnajP9mOmfxV8NJ7v9CKoTtVQGUaaYOes0H2tEOzWoNs%2FDWhyLi2LP4bKVY%2Fl20CFyWpQUHxygIutIhyxbVovx1gqa%2FoQIIWnyYHKnOdZvdOYcMm8GUce3FovEegV7cwDEY8E9LvkDEz6XrP2KD4nO9LEnrcg%2F%2BcinOQyE6dbOtTxQ6P3y3YDBK76wDKhrau%2BnaTI1vonD0u%2FDlF1s6iIY2gb3FZlpc3q3hmd0AUm6JZn1jqUiNqgBopwC785YKxtkKPlhvKii9jYGQGBYs0ZW%2Bd7msSOt2wmuqpv056boAwqrptufL0E%2F0SQNDK%2BU77U%2BJ9%2F1oTvSXAyXNzIf7kGtApE5DpbVNKU0qADURCWh7qVS7wbq53PRQbTNyDDoKNP%2BktMM%2B8kcQGOqUBGsATtuSg56Pb3P6HB%2FZTa2yR4C4coeFQWUYJ7i25ZE4JZz3Uy0x6%2Fojbih4bZ1epJ74CNFFlDfwlmh2%2F%2Bvn3NCjGZo5kWOIWZfcsM0G8i46hiXstJrNQ5Gytf35wOq9fQ9HiLLQ7ikAKL3Dg6JfnyFlnS%2BV7vqf0w8OXGakekYB86Qi2RCYBIL2mWq8FlBDIN7eD4Wu7rcfmdEfz87Q%2BJySr%2B75v&X-Amz-Signature=99b2681b09c03f16e9df3fc0f50cc57322a0b548203daad4524a3ac678bfacd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
