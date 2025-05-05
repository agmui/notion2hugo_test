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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643VEIU3O%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpQ5s7xQvOA%2BNSM8C8rrdqVZZmZSs4GjMYKtRqSfMhjgIgDbf80%2FCI5bxwXsywCW%2FlCIR4nUJaVCUsPXCLz6RsMtQq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDI8wwp72uugucZ5pIyrcA4SWMFfs%2FU%2B8VPFJI9EaO0WhJ0ApljeoMC8KiAWo9fM8zzDYGQhxD1hHOEbFa3iPuZY1TXFyhYQgyB0o12NrEqsf%2BnTrvMmpTHELI%2Bq8QKK1wLbfqKmi1jcgk1bZjzT6iezKUbab32o%2BJFIjoEqvwJYQCyj7dCQhin46bCnJKmUIMvk1AgOnwC5jKSueeTkdzDXQZb0x8FwCA9Ys9VL1YzW%2BlBMgCk1AJiql4SW9cQD4S227JI%2FXmoJ7WDQah2b3l6xOZdindSrkW7S%2BjUjGmKQ22cLpqMWMInmzj3f4q0ZcgPg6WhjAbbhr5akqRS%2F0pPx4nANxtb1rloQ33FjGXcy5fW0g0bKDkjoRZErDrmn18VxNbA%2BRsLwVlTzhG6YieHm6QRIlZwbGNo5eKgcjUu0NmACu2ueGp6ZDA92qESLU8CxxmsfarISsu%2BsYRnyuEeCxoEqscGv3fGEzPzfG%2BSoLXxRhJkq51tO6VUHPf2ktqHCDf2KOG3RGLzXNoUxJLYdKVmfkqsolyuLgiOmN%2B2VfJbsigpeKqdHLQ%2B7YuyKT63RVz5M5VwV0952qApEnpMYmssdJcohIQ4wlZPt0%2BP0gprdiIO8i28ropQBM9sg%2BmSTFqK0WqtNo0IozMOnM5MAGOqUBN4Q2SZ41vYlZMRlJVYqXqEguTAAyxOKhLM%2F5Zhp1dpmcHfumHlcHL5zfurii8Y3rer0F8SYetf7bt14AIi38F8aBzYmWJBgg1rFkFXQlwG%2FNSuDZvqgRgJ4I90gev6vdno6ri4gwY8JfqJ5reR%2FHyMJcwrrJ8Gw2Rx%2F2pE%2FmvomPRhbqg%2Fngy30JP9qyDbDLk1oROgRSLGJ%2Fb2BfpR%2FujIdvkrku&X-Amz-Signature=a252bca2c733f603e1f4b0d8a8bd886c32448426f7af8a8014af4d8b8df5ba61&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643VEIU3O%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpQ5s7xQvOA%2BNSM8C8rrdqVZZmZSs4GjMYKtRqSfMhjgIgDbf80%2FCI5bxwXsywCW%2FlCIR4nUJaVCUsPXCLz6RsMtQq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDI8wwp72uugucZ5pIyrcA4SWMFfs%2FU%2B8VPFJI9EaO0WhJ0ApljeoMC8KiAWo9fM8zzDYGQhxD1hHOEbFa3iPuZY1TXFyhYQgyB0o12NrEqsf%2BnTrvMmpTHELI%2Bq8QKK1wLbfqKmi1jcgk1bZjzT6iezKUbab32o%2BJFIjoEqvwJYQCyj7dCQhin46bCnJKmUIMvk1AgOnwC5jKSueeTkdzDXQZb0x8FwCA9Ys9VL1YzW%2BlBMgCk1AJiql4SW9cQD4S227JI%2FXmoJ7WDQah2b3l6xOZdindSrkW7S%2BjUjGmKQ22cLpqMWMInmzj3f4q0ZcgPg6WhjAbbhr5akqRS%2F0pPx4nANxtb1rloQ33FjGXcy5fW0g0bKDkjoRZErDrmn18VxNbA%2BRsLwVlTzhG6YieHm6QRIlZwbGNo5eKgcjUu0NmACu2ueGp6ZDA92qESLU8CxxmsfarISsu%2BsYRnyuEeCxoEqscGv3fGEzPzfG%2BSoLXxRhJkq51tO6VUHPf2ktqHCDf2KOG3RGLzXNoUxJLYdKVmfkqsolyuLgiOmN%2B2VfJbsigpeKqdHLQ%2B7YuyKT63RVz5M5VwV0952qApEnpMYmssdJcohIQ4wlZPt0%2BP0gprdiIO8i28ropQBM9sg%2BmSTFqK0WqtNo0IozMOnM5MAGOqUBN4Q2SZ41vYlZMRlJVYqXqEguTAAyxOKhLM%2F5Zhp1dpmcHfumHlcHL5zfurii8Y3rer0F8SYetf7bt14AIi38F8aBzYmWJBgg1rFkFXQlwG%2FNSuDZvqgRgJ4I90gev6vdno6ri4gwY8JfqJ5reR%2FHyMJcwrrJ8Gw2Rx%2F2pE%2FmvomPRhbqg%2Fngy30JP9qyDbDLk1oROgRSLGJ%2Fb2BfpR%2FujIdvkrku&X-Amz-Signature=53859072b78010e7ebd9a7be4d69b94703788e03c425fc16cd09ef823defce31&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643VEIU3O%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpQ5s7xQvOA%2BNSM8C8rrdqVZZmZSs4GjMYKtRqSfMhjgIgDbf80%2FCI5bxwXsywCW%2FlCIR4nUJaVCUsPXCLz6RsMtQq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDI8wwp72uugucZ5pIyrcA4SWMFfs%2FU%2B8VPFJI9EaO0WhJ0ApljeoMC8KiAWo9fM8zzDYGQhxD1hHOEbFa3iPuZY1TXFyhYQgyB0o12NrEqsf%2BnTrvMmpTHELI%2Bq8QKK1wLbfqKmi1jcgk1bZjzT6iezKUbab32o%2BJFIjoEqvwJYQCyj7dCQhin46bCnJKmUIMvk1AgOnwC5jKSueeTkdzDXQZb0x8FwCA9Ys9VL1YzW%2BlBMgCk1AJiql4SW9cQD4S227JI%2FXmoJ7WDQah2b3l6xOZdindSrkW7S%2BjUjGmKQ22cLpqMWMInmzj3f4q0ZcgPg6WhjAbbhr5akqRS%2F0pPx4nANxtb1rloQ33FjGXcy5fW0g0bKDkjoRZErDrmn18VxNbA%2BRsLwVlTzhG6YieHm6QRIlZwbGNo5eKgcjUu0NmACu2ueGp6ZDA92qESLU8CxxmsfarISsu%2BsYRnyuEeCxoEqscGv3fGEzPzfG%2BSoLXxRhJkq51tO6VUHPf2ktqHCDf2KOG3RGLzXNoUxJLYdKVmfkqsolyuLgiOmN%2B2VfJbsigpeKqdHLQ%2B7YuyKT63RVz5M5VwV0952qApEnpMYmssdJcohIQ4wlZPt0%2BP0gprdiIO8i28ropQBM9sg%2BmSTFqK0WqtNo0IozMOnM5MAGOqUBN4Q2SZ41vYlZMRlJVYqXqEguTAAyxOKhLM%2F5Zhp1dpmcHfumHlcHL5zfurii8Y3rer0F8SYetf7bt14AIi38F8aBzYmWJBgg1rFkFXQlwG%2FNSuDZvqgRgJ4I90gev6vdno6ri4gwY8JfqJ5reR%2FHyMJcwrrJ8Gw2Rx%2F2pE%2FmvomPRhbqg%2Fngy30JP9qyDbDLk1oROgRSLGJ%2Fb2BfpR%2FujIdvkrku&X-Amz-Signature=b7179e97c23a9d2f27a44a17dc6c6f10ce6c72701b4549fff419ea36d0423c19&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U5VVB3W%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNa4XVBqrN18Dc8iBxruzH42iR76yVr3l9UfvUdf77kgIhAIZe3R8AXEQyjxnB2M%2BiGY5KMH18yEVn8FEXXG%2B5lXNxKv8DCDYQABoMNjM3NDIzMTgzODA1IgwyWNbQYdr1raHhgIcq3ANnwbu9MZ9YMhWtxkYxvWTBdvtmb7WEngD32dnoWCQBhgp9VkKmeNm%2Fe8N73yNAtuhymIoBjan7Vhqyjffwc%2FSEXUij6l5rpwpiE33grzbEqX9%2FkGsE1fyQCCHbjFz83dwcdCGgD%2BASBhvmJwmfV3RratVtJUv2HpvW7uwMj%2B0pWCjE537YbvUpBQwzSlfKSjb5mIeToc613%2BXb953jgmqL11juPW3bDzfsggOvWL0i%2FM8yg2ovjABmxRriMMW%2Ba%2FyD1Y6fqsNOMy9NxdLJPxbzoHocx46RA22dl%2B%2Fxwi%2BU%2FSEjacFhkqtGCkZGIgdoIT8nL9pRb0cZZT%2FBXiBd9cYeji7XoRW4UOdxsn%2BdjFrBBSy9hxr5mj5M07PthPTCApXlUFut%2B5zROSzCVdc%2BX5lqU3oxtO%2BHqIFUUElBHLMvwydoBBtKw4W7s8HUWOLDDlP1h9Sr%2B7Tec3sBIl2rds%2F6rtwrOXEX2FSLLplYVlWKF3Q8XtrWQV8jrz6hB%2Fys3BQmgyR2UTqyGop2htgZAcodS6zkvMxJ1D8seKtn2O1UwktXkDj2VkqbdyUMJUrDgVlvcUcX3kAKetN4ucpN83klzDrXb23YQ6tpNwaMMxWNw%2FsCNCniN0N0qWXb2TDnzOTABjqkAQfepliA3q%2FUHlKCxXhptcAbauwn5xnmeU%2BRelDOmVY%2BwqDuCDpOs0JaeoaTHSEkEZpF7J47VNunt8FgFZ55VDw200AJn%2BpCdJHM0y%2FzLFipfAZEbhltdCd3B1bh9htVTHpm32Mr68mu5uYEKhO2wQGrW6ilquLNYI49REWh6%2BKg6GZuqtf9%2Bn%2BE6HCXGi6ilrEH6gRBtc1VKAFvN0VRX1JIM0K6&X-Amz-Signature=0645425acfdc269de921f5b27ae8c5742756a197ed976705e5fa5b2440445c9a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LXCZUKR%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhjM9Y%2F%2BB5%2Fr59Tw6D%2BQm7l5JbEe5rOTfKRPvYhloHJAiEAiAX%2BblZB%2BPJkE%2BtHqDYRZ5sDRMUCSO2VNjOUlBtDA1Qq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDEIjy4oksAMx5O9i7SrcA8mRwH7MF7U4mzXVkfWoHDVzIm0gvnG6pyvPegOpEBmtt2JRfgnCaze48zertLeIX156gLqXrUKNTu3igEVFGSL0w9NWY1QVgSjv8koBw6avwx%2FrT8INgQ8ToCdGi%2Bdhb151N0g1hEtgE1L2Nai%2BH9GgBqNgcaEvWzp3sJGtF8Q7JL5o3QheeKujctkS1c8%2FFZjyH5u%2Fn2BSzEZqa%2FxRQWgCQlqz%2Fx%2B2j7p525uqTYH7x%2Fabb6hi21zuM5XSa7DVmIpcjTQYB04n5NMTyddFxBJqczknLVjXuGZ6arVrEshPZrFhOuCJP%2FvTpMDMbr4%2BITu6d5NNwnyHulCVh6YdZyP3hrIpn2nMUvWQlWve3RlONDYFHO0LYLbPf%2BDsuUUtJv61YJAgqH2XQzQnoWpYl2puq4uGnWbJlfSQt4bKbG0CBE3QIyA8oqdIQSTWT1NpX6%2BJUypGVHACu43n0rvGw2GIdMyZj2Fp5v6%2F23S%2BQ8oawejl1uUZQEHkweQZZMwINukxMuGhIZpGSM1gSvmx4zJFCHHOxwGnLwItJpeQ%2BwygR0IrOL2vxIhbMzEDWqoRv3SY2d5OF8GN9NduI4KljtyOT1rJnOtAwHQrP2p18dD3QN0mMlccP%2BEkdy9vMNXM5MAGOqUBP96vsPaTFX7gV7Mfrslb5CDd8EWcYkR1Fo2q%2BWAdE13fmuUTglomdj51u7bDx2qHUp2Ur4gSxs1u0rHUpQNeqv9xENMYy2BiICtHzV3VnGhPcY28Uvely1stzhdgeJGDpng97hPSq4o9S%2BLlmclf6Duk3xe0C3vGrGwJjii%2FBdnSZohJAf2XJFXJdeBvToUph9KDHcsjw2lGjkf0WzgCo0mTPlxD&X-Amz-Signature=60b3b65e0f2e79580f534eecf9dfa59e239ab8a507bbac96b9aa4dd2fc39630a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643VEIU3O%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpQ5s7xQvOA%2BNSM8C8rrdqVZZmZSs4GjMYKtRqSfMhjgIgDbf80%2FCI5bxwXsywCW%2FlCIR4nUJaVCUsPXCLz6RsMtQq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDI8wwp72uugucZ5pIyrcA4SWMFfs%2FU%2B8VPFJI9EaO0WhJ0ApljeoMC8KiAWo9fM8zzDYGQhxD1hHOEbFa3iPuZY1TXFyhYQgyB0o12NrEqsf%2BnTrvMmpTHELI%2Bq8QKK1wLbfqKmi1jcgk1bZjzT6iezKUbab32o%2BJFIjoEqvwJYQCyj7dCQhin46bCnJKmUIMvk1AgOnwC5jKSueeTkdzDXQZb0x8FwCA9Ys9VL1YzW%2BlBMgCk1AJiql4SW9cQD4S227JI%2FXmoJ7WDQah2b3l6xOZdindSrkW7S%2BjUjGmKQ22cLpqMWMInmzj3f4q0ZcgPg6WhjAbbhr5akqRS%2F0pPx4nANxtb1rloQ33FjGXcy5fW0g0bKDkjoRZErDrmn18VxNbA%2BRsLwVlTzhG6YieHm6QRIlZwbGNo5eKgcjUu0NmACu2ueGp6ZDA92qESLU8CxxmsfarISsu%2BsYRnyuEeCxoEqscGv3fGEzPzfG%2BSoLXxRhJkq51tO6VUHPf2ktqHCDf2KOG3RGLzXNoUxJLYdKVmfkqsolyuLgiOmN%2B2VfJbsigpeKqdHLQ%2B7YuyKT63RVz5M5VwV0952qApEnpMYmssdJcohIQ4wlZPt0%2BP0gprdiIO8i28ropQBM9sg%2BmSTFqK0WqtNo0IozMOnM5MAGOqUBN4Q2SZ41vYlZMRlJVYqXqEguTAAyxOKhLM%2F5Zhp1dpmcHfumHlcHL5zfurii8Y3rer0F8SYetf7bt14AIi38F8aBzYmWJBgg1rFkFXQlwG%2FNSuDZvqgRgJ4I90gev6vdno6ri4gwY8JfqJ5reR%2FHyMJcwrrJ8Gw2Rx%2F2pE%2FmvomPRhbqg%2Fngy30JP9qyDbDLk1oROgRSLGJ%2Fb2BfpR%2FujIdvkrku&X-Amz-Signature=17b8861eddcc670d258fd713b0e9f1d3ba6cc9793408e79410a7a98b85b49770&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
