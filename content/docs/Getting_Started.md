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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BZRLKKJ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICjysdV5lHvFzjPqtMd56ADXNTluHmAxjxXZe1VasqTJAiBTAZZoTF8IbRTb%2F32KDE3qNcHqBos7w6VXv7G%2Fn1uAWyr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMlVx%2FYzeus%2F75V6h9KtwDOzVHKBOYOAL2qNQcfqASFKA294BsMKMx1NwB%2FiXVvOYaFMsVn%2Fs1BuFO4t%2BLA7ert2CU9yThCtgHC8IvesdzNDl1ws27KXGvYaCAswMArMH7yHfyidLMbQ2Lpa8ZFLyVBmbT%2Bgl%2BPZFWrXyNsniybFSTB%2BbwzI0qP54q9yu1Dz8C3%2B3fuR96kqsVdf73s0aSnGoRRqVoPuAMrsa5GiaYWEzZ%2FqSSFNNjgqfTPEAiix%2B%2FIqGwooZCfXFJzFIboVbJoPqVLPlDjEt5AVXzUpOS%2FpOsMx%2B24Jgz1DXIghl90E8va8LNx63%2B0n4P%2B9C8DVJQpKiqqRm42IXoj85AW8Gw2I2ckEwD%2F1ddB1vb9%2F23uoHdmLnSiYELmoch8i877c%2F0McBTxp7DvIg%2BGxpjeQeeDsYFF7GOobkuE6dI8NT8teuaYW%2FXoX3pK7SsMJj5MNOIIg8ZACmgYERIl0tkkwJ44LYDF79WFq4xxj2hwWLdBpelW%2FRGKYS7dxN3z9QO05w4gc8wXP%2F0qSbtDFLtEG7FM34fK0AIdIsP2TODFnKZZ5kEvWuOGOtB48RPuaYUjz%2FOOhA6lippIWHIeTlTlpMtIovRvdFvpdx6vq22M9BRSSECEnF3FS4YB%2BQQA7ow7ZyWwQY6pgH%2FVoGQuSTQG%2FmIvf9MwZeWCDDDlnJupzCJEYoweCp1Ly6b5zsljED44GfBYbcZ88azDkZYhAIJAEWX8me8Z1p7riYm8kIpmWshBAwHfrkEu5n4x%2BlImQw9AY%2B0urq5U7Gcm7RdwremzDC5%2BxDeb493gwrZZoyDRjdTw9OFJRhvMo8c7l%2F9Sn8J2k0KR45ElXFZWJ0KmGNEdnOkBeD5SiBA06didmwZ&X-Amz-Signature=5d2a834ff2ddf8ae14a17a5f92e017857639ab92c82106861526e39513941b62&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BZRLKKJ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICjysdV5lHvFzjPqtMd56ADXNTluHmAxjxXZe1VasqTJAiBTAZZoTF8IbRTb%2F32KDE3qNcHqBos7w6VXv7G%2Fn1uAWyr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMlVx%2FYzeus%2F75V6h9KtwDOzVHKBOYOAL2qNQcfqASFKA294BsMKMx1NwB%2FiXVvOYaFMsVn%2Fs1BuFO4t%2BLA7ert2CU9yThCtgHC8IvesdzNDl1ws27KXGvYaCAswMArMH7yHfyidLMbQ2Lpa8ZFLyVBmbT%2Bgl%2BPZFWrXyNsniybFSTB%2BbwzI0qP54q9yu1Dz8C3%2B3fuR96kqsVdf73s0aSnGoRRqVoPuAMrsa5GiaYWEzZ%2FqSSFNNjgqfTPEAiix%2B%2FIqGwooZCfXFJzFIboVbJoPqVLPlDjEt5AVXzUpOS%2FpOsMx%2B24Jgz1DXIghl90E8va8LNx63%2B0n4P%2B9C8DVJQpKiqqRm42IXoj85AW8Gw2I2ckEwD%2F1ddB1vb9%2F23uoHdmLnSiYELmoch8i877c%2F0McBTxp7DvIg%2BGxpjeQeeDsYFF7GOobkuE6dI8NT8teuaYW%2FXoX3pK7SsMJj5MNOIIg8ZACmgYERIl0tkkwJ44LYDF79WFq4xxj2hwWLdBpelW%2FRGKYS7dxN3z9QO05w4gc8wXP%2F0qSbtDFLtEG7FM34fK0AIdIsP2TODFnKZZ5kEvWuOGOtB48RPuaYUjz%2FOOhA6lippIWHIeTlTlpMtIovRvdFvpdx6vq22M9BRSSECEnF3FS4YB%2BQQA7ow7ZyWwQY6pgH%2FVoGQuSTQG%2FmIvf9MwZeWCDDDlnJupzCJEYoweCp1Ly6b5zsljED44GfBYbcZ88azDkZYhAIJAEWX8me8Z1p7riYm8kIpmWshBAwHfrkEu5n4x%2BlImQw9AY%2B0urq5U7Gcm7RdwremzDC5%2BxDeb493gwrZZoyDRjdTw9OFJRhvMo8c7l%2F9Sn8J2k0KR45ElXFZWJ0KmGNEdnOkBeD5SiBA06didmwZ&X-Amz-Signature=9287196d1acba0fc0decc3290cad035f21ba35b7d1a41e02ffa2c8753070a944&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BZRLKKJ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICjysdV5lHvFzjPqtMd56ADXNTluHmAxjxXZe1VasqTJAiBTAZZoTF8IbRTb%2F32KDE3qNcHqBos7w6VXv7G%2Fn1uAWyr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMlVx%2FYzeus%2F75V6h9KtwDOzVHKBOYOAL2qNQcfqASFKA294BsMKMx1NwB%2FiXVvOYaFMsVn%2Fs1BuFO4t%2BLA7ert2CU9yThCtgHC8IvesdzNDl1ws27KXGvYaCAswMArMH7yHfyidLMbQ2Lpa8ZFLyVBmbT%2Bgl%2BPZFWrXyNsniybFSTB%2BbwzI0qP54q9yu1Dz8C3%2B3fuR96kqsVdf73s0aSnGoRRqVoPuAMrsa5GiaYWEzZ%2FqSSFNNjgqfTPEAiix%2B%2FIqGwooZCfXFJzFIboVbJoPqVLPlDjEt5AVXzUpOS%2FpOsMx%2B24Jgz1DXIghl90E8va8LNx63%2B0n4P%2B9C8DVJQpKiqqRm42IXoj85AW8Gw2I2ckEwD%2F1ddB1vb9%2F23uoHdmLnSiYELmoch8i877c%2F0McBTxp7DvIg%2BGxpjeQeeDsYFF7GOobkuE6dI8NT8teuaYW%2FXoX3pK7SsMJj5MNOIIg8ZACmgYERIl0tkkwJ44LYDF79WFq4xxj2hwWLdBpelW%2FRGKYS7dxN3z9QO05w4gc8wXP%2F0qSbtDFLtEG7FM34fK0AIdIsP2TODFnKZZ5kEvWuOGOtB48RPuaYUjz%2FOOhA6lippIWHIeTlTlpMtIovRvdFvpdx6vq22M9BRSSECEnF3FS4YB%2BQQA7ow7ZyWwQY6pgH%2FVoGQuSTQG%2FmIvf9MwZeWCDDDlnJupzCJEYoweCp1Ly6b5zsljED44GfBYbcZ88azDkZYhAIJAEWX8me8Z1p7riYm8kIpmWshBAwHfrkEu5n4x%2BlImQw9AY%2B0urq5U7Gcm7RdwremzDC5%2BxDeb493gwrZZoyDRjdTw9OFJRhvMo8c7l%2F9Sn8J2k0KR45ElXFZWJ0KmGNEdnOkBeD5SiBA06didmwZ&X-Amz-Signature=abe99e3bf82b34db91f97f95c20e4d287842b5c37afbaffbd4a601cda1e894ae&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWUYKX7I%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCFdO%2FrYRMaJ20XiBFW8IqrEwcxdEpcRTWJCXqvbsyk7AIhAL7RUrbEvGIVgtPdCUt%2FZU3%2Fb0ux5vkLC1MBgBSRvE0%2FKv8DCCgQABoMNjM3NDIzMTgzODA1Igy64JLIgL2aKxItx8Aq3APdr%2F5Sn1KJKL2HLuK48%2FNHK5JCik8%2Bkis1peBCQChoG7iKxXHediwJJ8McEh5UpGbGL0ulxjYtL%2BF16%2BLVD8a4r1n3sLVEXDfVvihHcW6TFc0faBbvXZLamYKgDmdP7kPox7h3YGhGBBWhlBQYDATkAwuMTds5hMveUM5aNLjUnDmNpDmMBhTHYsOcBherT7ZbX8lmHdRB7VLdUIvugUaXLfE4FqYrp2N5YSJqVAoDHmgtUrcbFp8Crd0n9KKC5%2FtbYQx2DhvfDEkJArEnPf6LInwZUgccGHgGzvy%2FfoQuUuevi4m147BVsBzqg554rzfCQwktBhYqvPU%2FhBdmR2njZE9OmOcjjIAIplZecR2xM%2FAZsEs7hoVpfV%2BqPQpBkZVTT0r7o3f%2F%2BzUnqmjOPmh6PpBdUPGL01qgU8QfblIgEBLInU2ohq3f3PacLVqC1gXs5j5jYi6AlXW8WlSOl34PfmdXXRTAAvBXh%2BHw8vc5ymgWWbUKkMogB%2BDBv0SCa2fvWPnAUrD%2B%2Fhp9WZl1rzXUzFeKR7Z%2FehdCYpWIGtjnks8ykJ0eiWIqj7fEupOOaKnPDJbXn1jtNKYiJV524BJDaaFJA8iJ%2BD3AezAW0pLa7onGCjXS%2Bc0OmCubRDDAnZbBBjqkAfM1N3%2Bymijz8dHWlN2qbGfQgqKofk54KO5dh8Qw1Ov6QyQrnT3AOpxe3qFP%2FXEe%2BXiqWS0mPfeimiZqboT2DNOHZbl9PVE66njnzxWacB%2FLkDsEOl8TmE%2FAbGaoDDstkuCLny2BeFyTV6grMLpKbRWV5RtVHYONGApD4rK7wCjmslJ2IG06SobKz176eWefrkli2UQYTIW5wU1ml5AG%2BdvjWt1w&X-Amz-Signature=3e7465ad1d6c8f5ddc4ac2d6a96a0947769a46ff4d0f048227dee1e0c252f107&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJGPUHKM%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDMmLNKSczHZPK%2B7buN8Ybr1hiaTlwFVG9pB%2FWmxEIaXgIgThgUorUcAHe6ZLN4gHdnFA9V%2B5yG%2FSURHA%2F5gMJLU94q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDOqe5kkFQasMKNoyKSrcA4IGScgXehLiY6sABDvJ84tWST5JJNJ98G%2FJT5vfF%2B1xYGNMvmMrSzFPEW0XpJTDQU3%2Fj21EHy8DGuXuFoXL8NWyXXHHztNkag9DM0wQQ9iQOMaunsZTsh2O9ZzNytGo2wsGSQ5tnoi%2BBbwlKMFWzJzknQUUSz6syMeGm4wbW0fnqrm1YGjCCTWqNrC1ip%2FB6TE4ml5tunnJnXbQQdy1l3M%2FxryHw5%2F4QWkDAbXUGnD9GdRqoT%2BxaQFqzqFbThyXKpaqwKrB4c0fmzVHfTIw0G1%2FdVjP8Z704L8N%2FBrWNVAfDNgD4QCiS0t50tgYPX5JKK9HmCKoanjsjMbxjSj%2FPSsRWARsBMxwa59v8la5E71vVrVYZT6gqyMO8HvwG%2FgKO%2BPx0ZFwf575rKf4acdcqNnDq4Kr%2Bt0ukYAxAfBC1%2FIQMS9WoJiQ5nTR03aHAavR5%2F5oVugskH6fprpZ4TgffZr5kW%2BeqShCyIIuesGMXj62b25r%2B12W9ITjvfjCBVfRrlwNzlSo78QriYhYwaY4TufTLAX9EISlalqRKE9pdbVke5svj6Yg9Q6NjpuczMBBprS6Vifr3%2BgZ1FL%2BTwhvHaGutvzdEVD4BHbdfYMWs%2FIeUmJkpwMe73EBKi%2BeMM6dlsEGOqUB5ocfmrQPsoS2car7sVQ57nEjtM2s8QhWID4K8idBY9Ay%2FNHUWM%2Fke7VTjuqlZ6%2BYiYxRIEKIxY4hb3W3LooCat9tLsSfiFqNGf3pigB6Y%2FyHYP7NDqFMBU2u4xza3TfNe05Kt2n0w%2BSetVuITxEf5fnmkcjqMnDS9u0f3S2F4uID%2FqfC%2BoSQDOTVUsN96DUcftzpe%2B5iyBbS0hU6OCy1PckFGASC&X-Amz-Signature=16d0704dfb811e4969f28d765010dd9998c57454e25f1ae6781380f177e6b850&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BZRLKKJ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICjysdV5lHvFzjPqtMd56ADXNTluHmAxjxXZe1VasqTJAiBTAZZoTF8IbRTb%2F32KDE3qNcHqBos7w6VXv7G%2Fn1uAWyr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMlVx%2FYzeus%2F75V6h9KtwDOzVHKBOYOAL2qNQcfqASFKA294BsMKMx1NwB%2FiXVvOYaFMsVn%2Fs1BuFO4t%2BLA7ert2CU9yThCtgHC8IvesdzNDl1ws27KXGvYaCAswMArMH7yHfyidLMbQ2Lpa8ZFLyVBmbT%2Bgl%2BPZFWrXyNsniybFSTB%2BbwzI0qP54q9yu1Dz8C3%2B3fuR96kqsVdf73s0aSnGoRRqVoPuAMrsa5GiaYWEzZ%2FqSSFNNjgqfTPEAiix%2B%2FIqGwooZCfXFJzFIboVbJoPqVLPlDjEt5AVXzUpOS%2FpOsMx%2B24Jgz1DXIghl90E8va8LNx63%2B0n4P%2B9C8DVJQpKiqqRm42IXoj85AW8Gw2I2ckEwD%2F1ddB1vb9%2F23uoHdmLnSiYELmoch8i877c%2F0McBTxp7DvIg%2BGxpjeQeeDsYFF7GOobkuE6dI8NT8teuaYW%2FXoX3pK7SsMJj5MNOIIg8ZACmgYERIl0tkkwJ44LYDF79WFq4xxj2hwWLdBpelW%2FRGKYS7dxN3z9QO05w4gc8wXP%2F0qSbtDFLtEG7FM34fK0AIdIsP2TODFnKZZ5kEvWuOGOtB48RPuaYUjz%2FOOhA6lippIWHIeTlTlpMtIovRvdFvpdx6vq22M9BRSSECEnF3FS4YB%2BQQA7ow7ZyWwQY6pgH%2FVoGQuSTQG%2FmIvf9MwZeWCDDDlnJupzCJEYoweCp1Ly6b5zsljED44GfBYbcZ88azDkZYhAIJAEWX8me8Z1p7riYm8kIpmWshBAwHfrkEu5n4x%2BlImQw9AY%2B0urq5U7Gcm7RdwremzDC5%2BxDeb493gwrZZoyDRjdTw9OFJRhvMo8c7l%2F9Sn8J2k0KR45ElXFZWJ0KmGNEdnOkBeD5SiBA06didmwZ&X-Amz-Signature=7624300a979b5b736dc67fcb35d9d823a5342dabf82e53de20fd39ba41842fc5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
