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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RDYIZU2%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIGbHUgFl%2FXXv7FfbRcg0ce%2B5nJDFlpZ737qhJPnHqB%2FcAiEAhiV9ycrpk1mdZSoIeuD1GJORdNf7Xaalf%2BKzlcXcAEcqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvqpTkxtD94G35kDyrcA5E1BNvOzM%2BAcCPmnRFayT%2FzY2ZfVrRb%2FQidwI%2BtB6b6%2FopY1AI1IQQ6FwAknwNgqGXcNDzVb4PDx8ja6V4h3nmZrT%2BTPVD57rUdPkPo2rt1Ouf%2B3B2%2BMXgHmIqApWjxEWwuOETItUNJVzm6tdJfPPtEkUAcgZ3JcQFbULJA43cCgyu%2FmV%2BHzM5v5AOpAbb2P2DQ14%2FAKx1nTjhg6iFHB9nraibGtRnZN1uDgIhlRa6TsOSPxMOtEC8W6jhtzbv0RMi1CkEHGUYtDmOiGSbgqZUC25jfnxBIhxvpwvbYxQqt5VcChxUiKrdUQVWe4k20IBBaYa%2FBBgSGFRq61QolAkAORO8QCsRh7E9TZerMgqUBJZ%2BJxuMqdMbAYf9TfmWNMAa9ZSyWLKywk0wne1s6GbWJ4nGiAq3nRs3mTHjQ4ebFuNjqU9z9ZixtxEFktyweJRti074c%2BP4YKxu4azvBBbLp3oUQncViSVvAtZ4tp5PWJt1D0RTlXH4dQrHnb1yDCcMykH9Mc2I1wGOp13yS2LubxEHsajBhgg84N0ZHICgVa%2BP1%2FwisCi2tloOa0ZXwk1ITaQZOSLK9pvRa48NW1V0gOtTNkBbfoKh3m6VNN7Bz17HldrFnVZU%2FLA0KMPbS1cQGOqUBT5J1ogqXIgOYCAlbfwym5jbhfgK4jz3v30g4Scv4TVbloOZDR9juGHkj9WF3wNXGyVLwomDvKI73eIvxolJfSQTIoaclYC8zCVT2015rfIW3Ws6QqZohb6g%2BU2CflwRk%2F7CEbWKfyl7fbcdPCl%2FoSDt55olhjslfAwCvuC%2Bv2oBI8YrKjo4gKLDRPEP3FupP84BqYLV5rcvABcd9e9uLe%2BY4K0aP&X-Amz-Signature=77eabc5835e7faf03fff4b6f5ce6f05115fa9765734f8a5e1b9fcd3511960ed7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RDYIZU2%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIGbHUgFl%2FXXv7FfbRcg0ce%2B5nJDFlpZ737qhJPnHqB%2FcAiEAhiV9ycrpk1mdZSoIeuD1GJORdNf7Xaalf%2BKzlcXcAEcqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvqpTkxtD94G35kDyrcA5E1BNvOzM%2BAcCPmnRFayT%2FzY2ZfVrRb%2FQidwI%2BtB6b6%2FopY1AI1IQQ6FwAknwNgqGXcNDzVb4PDx8ja6V4h3nmZrT%2BTPVD57rUdPkPo2rt1Ouf%2B3B2%2BMXgHmIqApWjxEWwuOETItUNJVzm6tdJfPPtEkUAcgZ3JcQFbULJA43cCgyu%2FmV%2BHzM5v5AOpAbb2P2DQ14%2FAKx1nTjhg6iFHB9nraibGtRnZN1uDgIhlRa6TsOSPxMOtEC8W6jhtzbv0RMi1CkEHGUYtDmOiGSbgqZUC25jfnxBIhxvpwvbYxQqt5VcChxUiKrdUQVWe4k20IBBaYa%2FBBgSGFRq61QolAkAORO8QCsRh7E9TZerMgqUBJZ%2BJxuMqdMbAYf9TfmWNMAa9ZSyWLKywk0wne1s6GbWJ4nGiAq3nRs3mTHjQ4ebFuNjqU9z9ZixtxEFktyweJRti074c%2BP4YKxu4azvBBbLp3oUQncViSVvAtZ4tp5PWJt1D0RTlXH4dQrHnb1yDCcMykH9Mc2I1wGOp13yS2LubxEHsajBhgg84N0ZHICgVa%2BP1%2FwisCi2tloOa0ZXwk1ITaQZOSLK9pvRa48NW1V0gOtTNkBbfoKh3m6VNN7Bz17HldrFnVZU%2FLA0KMPbS1cQGOqUBT5J1ogqXIgOYCAlbfwym5jbhfgK4jz3v30g4Scv4TVbloOZDR9juGHkj9WF3wNXGyVLwomDvKI73eIvxolJfSQTIoaclYC8zCVT2015rfIW3Ws6QqZohb6g%2BU2CflwRk%2F7CEbWKfyl7fbcdPCl%2FoSDt55olhjslfAwCvuC%2Bv2oBI8YrKjo4gKLDRPEP3FupP84BqYLV5rcvABcd9e9uLe%2BY4K0aP&X-Amz-Signature=c2c2b2448735fdac3bdf1d2d7b7ef5138ddb053ff6ffd55d0205460dfa832e23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RDYIZU2%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIGbHUgFl%2FXXv7FfbRcg0ce%2B5nJDFlpZ737qhJPnHqB%2FcAiEAhiV9ycrpk1mdZSoIeuD1GJORdNf7Xaalf%2BKzlcXcAEcqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvqpTkxtD94G35kDyrcA5E1BNvOzM%2BAcCPmnRFayT%2FzY2ZfVrRb%2FQidwI%2BtB6b6%2FopY1AI1IQQ6FwAknwNgqGXcNDzVb4PDx8ja6V4h3nmZrT%2BTPVD57rUdPkPo2rt1Ouf%2B3B2%2BMXgHmIqApWjxEWwuOETItUNJVzm6tdJfPPtEkUAcgZ3JcQFbULJA43cCgyu%2FmV%2BHzM5v5AOpAbb2P2DQ14%2FAKx1nTjhg6iFHB9nraibGtRnZN1uDgIhlRa6TsOSPxMOtEC8W6jhtzbv0RMi1CkEHGUYtDmOiGSbgqZUC25jfnxBIhxvpwvbYxQqt5VcChxUiKrdUQVWe4k20IBBaYa%2FBBgSGFRq61QolAkAORO8QCsRh7E9TZerMgqUBJZ%2BJxuMqdMbAYf9TfmWNMAa9ZSyWLKywk0wne1s6GbWJ4nGiAq3nRs3mTHjQ4ebFuNjqU9z9ZixtxEFktyweJRti074c%2BP4YKxu4azvBBbLp3oUQncViSVvAtZ4tp5PWJt1D0RTlXH4dQrHnb1yDCcMykH9Mc2I1wGOp13yS2LubxEHsajBhgg84N0ZHICgVa%2BP1%2FwisCi2tloOa0ZXwk1ITaQZOSLK9pvRa48NW1V0gOtTNkBbfoKh3m6VNN7Bz17HldrFnVZU%2FLA0KMPbS1cQGOqUBT5J1ogqXIgOYCAlbfwym5jbhfgK4jz3v30g4Scv4TVbloOZDR9juGHkj9WF3wNXGyVLwomDvKI73eIvxolJfSQTIoaclYC8zCVT2015rfIW3Ws6QqZohb6g%2BU2CflwRk%2F7CEbWKfyl7fbcdPCl%2FoSDt55olhjslfAwCvuC%2Bv2oBI8YrKjo4gKLDRPEP3FupP84BqYLV5rcvABcd9e9uLe%2BY4K0aP&X-Amz-Signature=9ceb383c96b94edf7e501a3bbb5c402df8eaea2ae0b116ff2b60812dd2ec8388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWX7L3CA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCXuGKDIQcZbKw88sQ8OwalReejVqPBGnJ%2Bm4ZzGRw3EAIhALU94ebM%2BGh%2BvT2%2BLo3tNSzrvQY0TG7kZi5HeHZyg40gKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBpWT4xd%2BwJAV0z4wq3AO1MMfZP9C7iyI4KXsGMoC0pyDGiF0tAGfvKZ4N0%2BjB3eo%2BHmNalFK58jR4Gmntzn0DDgdKcg3qOuc%2BsT2NyRXWJHHbvx6Jkp8A6nClCIMjwVVytLE2GvkZFozQPImwOzRMU%2FTb5fqOOzQByFqb%2F2mhvreOu%2BUr2eh2FRktjbdFt2DWlRsHwA8YSIUcghXpmmjIlLpBSsmE2AY1GL5mYas3DQNEs6fM1LeoePLdtxU%2FsRzu8M0ahlqFD8VdKasefTomu4EYvki9ebLOSqB6MU3krGPFEnx299bUdXGHIyipplw5EgHIphbU4Fo0aIUQnHp0%2BSi%2FZIkxq8DXaYjViTvjIgXcpynI71U8x2rmTJudMGrRvcb14vUqaPytwW7AqGOKgfGfQWZoq2QUroNqRKat5VNJiaNnwgUBWUeWeRDwsJn9J%2F%2B4j%2FRbdAFDEyClEsmUuuNG3hSlBWhbLuQY%2FD7P44X%2Fu34JKWNLuqV1ygPUbsjL7iDx3MwuQ0hbE7KfwQIwlTi6nD9lh%2BMnGKgC1r4coaxX1ZiPkqOfhwue25WIn8Ar7pTHWB3yDObTCjScbgqUbJXA%2FkysB6WQPx2%2FdynD%2Fm9SEUWUGbm67PqNStbA4ynLGduJefFOPZr1aDDt0tXEBjqkAfCkdeq8J31mb9qRwsYHxk2W7Ikhc5KEusQd9iTBR5ZF6kBIT5EA%2FzzNpoYN%2F6Tl7m6w9uscRbJQL3%2Bz7N5rO9Di3rcIX4lzqEI%2BBdjfd7O%2Fp8i%2Ft1oI9p%2Bo%2FWmlnYB%2FoRABTHxySG3ysWL%2BL9HQZ9Ri8DxNSgzD62Ur7IpUnLWBPKp2gqFkf%2FBI1qaQOZ7bjvCteq3feWgVe4S2NZntABqLnmpZ&X-Amz-Signature=22c9d923daabd5b6d46b7929a721f4b8cf610ac4fb90c572ffe2e38db603c5eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSACL5GX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIH56fghk29ryeFNUo7PKRDcvpf6E9hT979FrcNHMj9WZAiBsHcR%2B9zyAMKp5Cs7AnGr5zG3y6MvS9tPeiS2cfSoDnCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLJqnn1TZtfr%2BGiYfKtwDW%2FdnhPIjywIyQwxUVFGQL7Hrho6%2FKufggBoyRECP6tdqnVPSQqwZCp0XzeTBbDkgRrPkYjrdb%2B6eZFi5BPUJkgdtEdBLZGMwyvblu9cpZXmcH3sHse6fLzBrBR%2FJ0un%2FaDc7mirZIi%2B4jOBUGiYejEdd69pQUsBTFp804qGdkKE7XDnLJ3xQaInP%2Fskr17eb6kHDSzRK5561xNGWCmhjqT8PmkYwl%2FB7cBcFs3AdhWuz7wlMLbghMdTe5zvLhDKtpm%2FW15Ped7OlUuZT2D4iYofCo0crlvsVjEwfFeNEsEy9n3HCUerMpUF%2FFDUr%2F2NfQ19cjIOi4vc5yk9cSnYB97o9AL5jBGL8a3yZgkpUPAgwrVQec6wSxFelkMKSYjjxeS%2FRsQbd%2BoxYKu8FlMvi%2FR4dvhijK55NyjYwlJTVOPUakNPMp0%2FsYFpRv5SpUG8Aq4b8%2B8n3FRXLdIdM94NzGTZeNC1BDbiD%2F%2FRZ7tbh9qfF7V%2FSp37UhSqiQXOVm7vxVeCQCdhqhwqUvr6A5bPxrThKa9PNEQvmw6UgEDWFxpVrxNHkIrWr4PESlQPDM0dFv818VJysTTzcAzlA76tiYVh5nQNdR2eUqYdRY0%2F%2F7GQ4IhMkzkPOk5b0RmYw2tLVxAY6pgEKbfMKwKb%2Fw2PcvhIZavxiQxbu6sYGG8rqqJp4vkV%2B3lml%2F887tELB%2Bb6RjpALv7ApHAfmm%2BKN8Ebke4klfhvHW6a5lJZXqyMj21wE8vOY9RfGFhLgye25214mp0QkTjnd5Pfmxbm46L5EG6jRP5povHvWlm9mzFCy8J3dgTOodA%2F1fA0hrsEoS88G3kmIKnofwzFZUNzbjF3LfB76ZzK9dxdsjjWi&X-Amz-Signature=b063e8fb9b65f3f345a9d3dceca4c4e089e5142806b7db5553a019de79adc711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RDYIZU2%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIGbHUgFl%2FXXv7FfbRcg0ce%2B5nJDFlpZ737qhJPnHqB%2FcAiEAhiV9ycrpk1mdZSoIeuD1GJORdNf7Xaalf%2BKzlcXcAEcqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvqpTkxtD94G35kDyrcA5E1BNvOzM%2BAcCPmnRFayT%2FzY2ZfVrRb%2FQidwI%2BtB6b6%2FopY1AI1IQQ6FwAknwNgqGXcNDzVb4PDx8ja6V4h3nmZrT%2BTPVD57rUdPkPo2rt1Ouf%2B3B2%2BMXgHmIqApWjxEWwuOETItUNJVzm6tdJfPPtEkUAcgZ3JcQFbULJA43cCgyu%2FmV%2BHzM5v5AOpAbb2P2DQ14%2FAKx1nTjhg6iFHB9nraibGtRnZN1uDgIhlRa6TsOSPxMOtEC8W6jhtzbv0RMi1CkEHGUYtDmOiGSbgqZUC25jfnxBIhxvpwvbYxQqt5VcChxUiKrdUQVWe4k20IBBaYa%2FBBgSGFRq61QolAkAORO8QCsRh7E9TZerMgqUBJZ%2BJxuMqdMbAYf9TfmWNMAa9ZSyWLKywk0wne1s6GbWJ4nGiAq3nRs3mTHjQ4ebFuNjqU9z9ZixtxEFktyweJRti074c%2BP4YKxu4azvBBbLp3oUQncViSVvAtZ4tp5PWJt1D0RTlXH4dQrHnb1yDCcMykH9Mc2I1wGOp13yS2LubxEHsajBhgg84N0ZHICgVa%2BP1%2FwisCi2tloOa0ZXwk1ITaQZOSLK9pvRa48NW1V0gOtTNkBbfoKh3m6VNN7Bz17HldrFnVZU%2FLA0KMPbS1cQGOqUBT5J1ogqXIgOYCAlbfwym5jbhfgK4jz3v30g4Scv4TVbloOZDR9juGHkj9WF3wNXGyVLwomDvKI73eIvxolJfSQTIoaclYC8zCVT2015rfIW3Ws6QqZohb6g%2BU2CflwRk%2F7CEbWKfyl7fbcdPCl%2FoSDt55olhjslfAwCvuC%2Bv2oBI8YrKjo4gKLDRPEP3FupP84BqYLV5rcvABcd9e9uLe%2BY4K0aP&X-Amz-Signature=974217a16a1f2723092bf27f69b5ad49916051f6e9de0f4d9d6c97836dbec633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
