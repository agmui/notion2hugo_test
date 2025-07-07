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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD5SZJCR%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDJwzHH4i2Px8fgPCgAsHvsrHwNz2TVXjF%2Bsu85bLmNsAIhAISuGAsbb1GL3RnnmgPi6svUzM2DREFDr0CaEXh7HEE1Kv8DCGgQABoMNjM3NDIzMTgzODA1IgwtYoMh%2FGNqchyub6Qq3AMJ4XFsttz%2BC7Q4yd3bX68QajfRGWdWNtXMTNwcso0jYsP3fsgqRzNOnrOfOAI%2BD2QXTQdW%2BHt1q1HBmMWhH10YbY%2FGpXtBKRiVE2aVFC20OarRW0LiVfHJtymte%2FhADwRyd%2Bxk6PxVlM7zWy7NLjiS%2F1KFMKqeLHPCcQ1PMyx0O2CmhN7czxbSfBtV53L%2BH6RmmFWUifuU%2FzhLaF0%2FRIfjN7MdnhdxTOCb6sCxXwoD5q95lU2UV0lcLxz9tw8RRhmz6eWKNivv9qrYIN9p8Zpy%2FL2E2A6qKirP4BfftJmqzJlthqRrwkJoT6o6hu2svGX9roEqqfURJWv6pg5bCcKbE%2FngPk9j495027djTpIvVgO%2F3HBbhW4FBl1v1oc%2FG9eAo2erU5FywITuMIqFwHd67MggFNW%2F9UhrP1YHIHZotRuiv2f8PghxtlRfAOQQUx0EE69tptaiVceY1qfB57%2BjrhhINPBX09WxFrZZ%2B94y%2FpBT5NAgmtNlsTMJSXBf3WN8UQe8kBgHZoCqvZsR2nSwjzfkHRXEcAAvyJm%2FoKm25PODVVVZlpOpL8HG%2Fchal%2BsCwKpRWmaFtfQofVDW%2Fro6hZVRdRX%2FVFdJrvBojN9sg0UqHq%2FKuEiJ1fNvoTDggKzDBjqkAQEt%2FeEmF%2BqqIgJLBpX2qtv9oWcNV1jE7PDxNVDcrBl92zEdDrcHEr5IipN%2Bau3lrgL4CVaXCgPTcUBAOap2YPCUHlb9yK7psqhxH7sYEC%2BRHN5Uu6nxCioGQfXzUaaz8ro6ueWjIZ63WpKke97rx49%2F0z%2B66zn%2F%2FuDKAJrz8sndjksZ7nTlGVCBl%2FQSrpXYJtG0ohtjsgzlHayVil6ZNeQaf1O1&X-Amz-Signature=12c58eba43579be7d35def106ae3fe21749e11b1baff8c105692b69a5aed7b89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD5SZJCR%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDJwzHH4i2Px8fgPCgAsHvsrHwNz2TVXjF%2Bsu85bLmNsAIhAISuGAsbb1GL3RnnmgPi6svUzM2DREFDr0CaEXh7HEE1Kv8DCGgQABoMNjM3NDIzMTgzODA1IgwtYoMh%2FGNqchyub6Qq3AMJ4XFsttz%2BC7Q4yd3bX68QajfRGWdWNtXMTNwcso0jYsP3fsgqRzNOnrOfOAI%2BD2QXTQdW%2BHt1q1HBmMWhH10YbY%2FGpXtBKRiVE2aVFC20OarRW0LiVfHJtymte%2FhADwRyd%2Bxk6PxVlM7zWy7NLjiS%2F1KFMKqeLHPCcQ1PMyx0O2CmhN7czxbSfBtV53L%2BH6RmmFWUifuU%2FzhLaF0%2FRIfjN7MdnhdxTOCb6sCxXwoD5q95lU2UV0lcLxz9tw8RRhmz6eWKNivv9qrYIN9p8Zpy%2FL2E2A6qKirP4BfftJmqzJlthqRrwkJoT6o6hu2svGX9roEqqfURJWv6pg5bCcKbE%2FngPk9j495027djTpIvVgO%2F3HBbhW4FBl1v1oc%2FG9eAo2erU5FywITuMIqFwHd67MggFNW%2F9UhrP1YHIHZotRuiv2f8PghxtlRfAOQQUx0EE69tptaiVceY1qfB57%2BjrhhINPBX09WxFrZZ%2B94y%2FpBT5NAgmtNlsTMJSXBf3WN8UQe8kBgHZoCqvZsR2nSwjzfkHRXEcAAvyJm%2FoKm25PODVVVZlpOpL8HG%2Fchal%2BsCwKpRWmaFtfQofVDW%2Fro6hZVRdRX%2FVFdJrvBojN9sg0UqHq%2FKuEiJ1fNvoTDggKzDBjqkAQEt%2FeEmF%2BqqIgJLBpX2qtv9oWcNV1jE7PDxNVDcrBl92zEdDrcHEr5IipN%2Bau3lrgL4CVaXCgPTcUBAOap2YPCUHlb9yK7psqhxH7sYEC%2BRHN5Uu6nxCioGQfXzUaaz8ro6ueWjIZ63WpKke97rx49%2F0z%2B66zn%2F%2FuDKAJrz8sndjksZ7nTlGVCBl%2FQSrpXYJtG0ohtjsgzlHayVil6ZNeQaf1O1&X-Amz-Signature=df3e5d3ed0e95df6db0be7e8bb31cd26a0ff2f2801171aabecd1d58d99e9e61f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD5SZJCR%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDJwzHH4i2Px8fgPCgAsHvsrHwNz2TVXjF%2Bsu85bLmNsAIhAISuGAsbb1GL3RnnmgPi6svUzM2DREFDr0CaEXh7HEE1Kv8DCGgQABoMNjM3NDIzMTgzODA1IgwtYoMh%2FGNqchyub6Qq3AMJ4XFsttz%2BC7Q4yd3bX68QajfRGWdWNtXMTNwcso0jYsP3fsgqRzNOnrOfOAI%2BD2QXTQdW%2BHt1q1HBmMWhH10YbY%2FGpXtBKRiVE2aVFC20OarRW0LiVfHJtymte%2FhADwRyd%2Bxk6PxVlM7zWy7NLjiS%2F1KFMKqeLHPCcQ1PMyx0O2CmhN7czxbSfBtV53L%2BH6RmmFWUifuU%2FzhLaF0%2FRIfjN7MdnhdxTOCb6sCxXwoD5q95lU2UV0lcLxz9tw8RRhmz6eWKNivv9qrYIN9p8Zpy%2FL2E2A6qKirP4BfftJmqzJlthqRrwkJoT6o6hu2svGX9roEqqfURJWv6pg5bCcKbE%2FngPk9j495027djTpIvVgO%2F3HBbhW4FBl1v1oc%2FG9eAo2erU5FywITuMIqFwHd67MggFNW%2F9UhrP1YHIHZotRuiv2f8PghxtlRfAOQQUx0EE69tptaiVceY1qfB57%2BjrhhINPBX09WxFrZZ%2B94y%2FpBT5NAgmtNlsTMJSXBf3WN8UQe8kBgHZoCqvZsR2nSwjzfkHRXEcAAvyJm%2FoKm25PODVVVZlpOpL8HG%2Fchal%2BsCwKpRWmaFtfQofVDW%2Fro6hZVRdRX%2FVFdJrvBojN9sg0UqHq%2FKuEiJ1fNvoTDggKzDBjqkAQEt%2FeEmF%2BqqIgJLBpX2qtv9oWcNV1jE7PDxNVDcrBl92zEdDrcHEr5IipN%2Bau3lrgL4CVaXCgPTcUBAOap2YPCUHlb9yK7psqhxH7sYEC%2BRHN5Uu6nxCioGQfXzUaaz8ro6ueWjIZ63WpKke97rx49%2F0z%2B66zn%2F%2FuDKAJrz8sndjksZ7nTlGVCBl%2FQSrpXYJtG0ohtjsgzlHayVil6ZNeQaf1O1&X-Amz-Signature=9e255b6496eef8f2224923ef9194b8bf3a116b4f22c82f844882e2049655283f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TBD2BLT%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDIZAbVL7x7LYj1%2BmY5leXMXZrQGN2Ji12cEkm14nwk0AIgP%2FWAsGYfvAxJ3Rm0O2O4xjRP%2BcT%2FBDgBnr94a4qlAhcq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDKCbLdO7sIi4XInkCSrcA0pO4MYnHDsiAp4FZqgMqJtgjIcWUi8mtMrPordKnCxv3P3RgPVgw%2Bh8xCbQXpt96lHOFwbsykV7fAIyycgUhaWLZynyG3acLZNnJyBvYlY%2Bobam3FPncVFbBBuFLGfzb%2FKmRj%2BD8HVHXHl%2BNYnJjWZviO99tTP0dgpwnePphCEc5iHS6qeIfadtsOP0Kuim56XDl4sl2NsezOI2CfsqOOGkw04DgbjwhsRelFFFwZg2oJQBfwbGRxX1u%2FskO2aCmIFt0W2q%2FGgjQuNgdh8GPZs7NFkZp4iEu68hkdWixtQsfoDRVNcQm0MUxNCtrX%2BAJ0NOx2uHPvk4uG5vFIsTvWeq1MOQlnKFa7Vzlu9lBWml9tWdnx6h1zC8xbPaEHWHpG%2F6SdKSdqUl1rq%2BOwj2TYgupwnqmKuHU5I6xSkzk%2FAygmG3WLt7uXcFmRBuAqbbNtK6ogvxuf1hkOBViOyqUFAeXUHrdM3wnrcY4ZyoRMwuPPzxuAo%2BrZ41csJ7x6Q9b%2BSUdsvBB%2FOKPVJfjYbTx4AOQxg5LESRxUeNZlBeizCfMQfbFWA71hit9n6TlRvndp7xRmgk84Rc34cQv9BwYHusb7s0rJQmYumph65UV51zem36nSaoLQJYK6FZMMmSrMMGOqUBMGRY1uUw8YK8uDJNgE%2Fi7BBsMhUWSw2IhHZ1VU1iWhJ05wJqB6ASqRtWWgkMew3t5RNz%2FDkk%2FEKscrHviByO9Mb2mfGRFaG%2FUk8NSsOjJ8xVCxZZ2mQ3gINXyn2B6qOErxTcCAIFnXYVNHvscgaPUjokiTvo7FPr5qH40QFeJSIVZXcQWlN32PM7vBXjnCYLY71W3v%2FeGyK5fNn19m0Aw4npIxTY&X-Amz-Signature=ec86f3d964f6e99a52d9f5d2825b507e4407a53bccf1f884eaf34b7ae24837d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGYKOFYA%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCA3v7vDQ5sz%2BxbQDgvjo73Lc0EsbyuS81oOig%2Bxc3fHgIhAOVrEER6cLPI3jbous6OPKgI8k3tptVGoPb38rBHJz1AKv8DCGsQABoMNjM3NDIzMTgzODA1Igx37K2ievCtk%2BcmIGgq3AMaqbQWcTPTIzhQlR5kLNderoNa%2FPY5YBNA7XFBVNLFlFEQClk6a0xLUPI6uNcH1NcszE%2FCG4ZJzh3eLV2ELs2xIBGYx16AMuRbnhMgU%2F6AdhekDqkGJUzRo0BbizbWC%2FSbZt93NTK6d7aidB7zN3K%2BEpS4VzYHZ%2BkC8sbeTsGOxObUeSDxEIwFGsTg3VO5JGeMjBXUsCsTAbMz%2B2rFsL5Z03LKcqt83nTy7COHCKApySj0qJf%2Bjhn0tQ3ddHQL7OPX4fXr3uwcl4nRLB61pxQmM0J3QONTgW8mwQ%2FE95QeLyXajK9P7i9BeuZPgOwtV6lw44Vjex22yqLa1wJWCn0c1F4SiSNxcWMyzRimCybJS4%2FTU8DhdiUNu%2Fic8Q%2BFonYHpOkxJtDP2x3e2NEwyut9erA3DdTI3WoLVsV0FD1ytbAP6kGdN8jBZLnUHj%2Bawk%2FUkiMPywypW8MldpE10RVea8ZxHRSHY4GYXT5jkqfo9GQKeTtMDQ5wqyYEI23Sr81A%2FUi4JTCxJhYf4Y6wykUs9PyGEKT%2FR6q%2BSTPYnG5NDM639ygp091C3YDcn8gLtWT8A27caXqCsHa4JhP%2F2PhfIF%2BSgv6IKa3MALnMH%2Bnms8l1jUCitF3cMBu76zCx1KzDBjqkAbp2D3Lu4Y7EbWVmytc8XdlngnIGwP%2F%2F1qvGEbX%2Br80dF3fIJiEqNZLS7AFtmNq%2BXR32fE9nsj1s%2BpwQ0bnl%2BK6kDXBUVHsx%2BJSBjmlrhcSBu%2BEneqAgUW%2Bs9kFn3L253XEeitfOEMck5TELEzC3gamMDwJ%2B8pN7lpYgLZp5dqyHhbH4TnAkdXwiPPOyoa3uOEk2dGVpo0EY3p3vPruNSwREzx7z&X-Amz-Signature=193561b11d355b8bac9b3c68216fe99c5ecca2cba991062372337df333220354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD5SZJCR%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDJwzHH4i2Px8fgPCgAsHvsrHwNz2TVXjF%2Bsu85bLmNsAIhAISuGAsbb1GL3RnnmgPi6svUzM2DREFDr0CaEXh7HEE1Kv8DCGgQABoMNjM3NDIzMTgzODA1IgwtYoMh%2FGNqchyub6Qq3AMJ4XFsttz%2BC7Q4yd3bX68QajfRGWdWNtXMTNwcso0jYsP3fsgqRzNOnrOfOAI%2BD2QXTQdW%2BHt1q1HBmMWhH10YbY%2FGpXtBKRiVE2aVFC20OarRW0LiVfHJtymte%2FhADwRyd%2Bxk6PxVlM7zWy7NLjiS%2F1KFMKqeLHPCcQ1PMyx0O2CmhN7czxbSfBtV53L%2BH6RmmFWUifuU%2FzhLaF0%2FRIfjN7MdnhdxTOCb6sCxXwoD5q95lU2UV0lcLxz9tw8RRhmz6eWKNivv9qrYIN9p8Zpy%2FL2E2A6qKirP4BfftJmqzJlthqRrwkJoT6o6hu2svGX9roEqqfURJWv6pg5bCcKbE%2FngPk9j495027djTpIvVgO%2F3HBbhW4FBl1v1oc%2FG9eAo2erU5FywITuMIqFwHd67MggFNW%2F9UhrP1YHIHZotRuiv2f8PghxtlRfAOQQUx0EE69tptaiVceY1qfB57%2BjrhhINPBX09WxFrZZ%2B94y%2FpBT5NAgmtNlsTMJSXBf3WN8UQe8kBgHZoCqvZsR2nSwjzfkHRXEcAAvyJm%2FoKm25PODVVVZlpOpL8HG%2Fchal%2BsCwKpRWmaFtfQofVDW%2Fro6hZVRdRX%2FVFdJrvBojN9sg0UqHq%2FKuEiJ1fNvoTDggKzDBjqkAQEt%2FeEmF%2BqqIgJLBpX2qtv9oWcNV1jE7PDxNVDcrBl92zEdDrcHEr5IipN%2Bau3lrgL4CVaXCgPTcUBAOap2YPCUHlb9yK7psqhxH7sYEC%2BRHN5Uu6nxCioGQfXzUaaz8ro6ueWjIZ63WpKke97rx49%2F0z%2B66zn%2F%2FuDKAJrz8sndjksZ7nTlGVCBl%2FQSrpXYJtG0ohtjsgzlHayVil6ZNeQaf1O1&X-Amz-Signature=7c7094e44313bf393669ece9081be6060ad5c62c21e72fb3f7f55570f6c7fa99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
