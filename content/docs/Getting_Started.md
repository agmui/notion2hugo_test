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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L22NB3K%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T200938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbPf8zwckGAPKQZN3C9suXcr8k0rw9AJnf3BFftiQT3wIgbdDm%2BUs82jkquR51ERu%2BHaGIU1KDHVdGtL5Ef5uEnLoq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFCn%2FRaC0GUh54dZ1ircA9LUlVXJa%2BCiYzp6C%2FXC75XyHvmMewwV5BmTprqEn%2FGK6wAd1ce5IB9lGJOBN5poH8LexpecJbB9mhs9hE1WBR1d9ifebByIfUjDXxJB%2Foy3%2B0NdORRQ4X%2Fj9Y9fVYBKxO3hAc5R3C%2FsY9PDLGjSoS5Nd%2Biey1QJZ8Q2PGBz%2F%2BGbDHwont%2Fdg95UG7EpVaG7RevdL89t8Y8KegBpMOlp8I7BaWURLFAdG%2B7RhhgOwQKg1UHtvXiEaZEsqbf6CZG137jAmGGV%2Bjhm4QGRlnIEtbi0bCOKbIwyk6ya0dqMfsrgPlBe1m8n83XTMqEWImjOMaVKU1Q08rqfLa%2BVHPgN1%2Bn3J2x%2BCXNFOLYpZotMpDlPkfYhvepoX3%2BrJxkZm9z8tY7McfvCkvab61vlYcO2lPtKX9zf50xfuJsohAzdx4RU6PQ39Wih8152arW%2FCJ53B2H2Zgg5nsffngn7ewbUrq5d%2Bx2FV9IY0PmNKS8oP8euoljUgX6SaZhbJa6nGD2uGnOrst%2FdSEGl858cXJBj8KMmc2srYMssi6cTqLUiWFLrktZKP8UOdRdhMR7jHAThWf7xqASCdypL7FV9e52bicqmhJnfsFd%2B4GSveNMjpFwUqKVk6%2FW5%2BYoaGgsOMPiZ9MAGOqUB17qUV6I4xDVrLumxy1BibeeOew%2FACLHKHoRAx33yFFmNpIvKe%2B86KrSx01L1yjlNtit9oJfMjjlDmzdUJxRlN1yfZJyuMy0FC7r7scWWoMEiU5zajP3SK7Vc6Uy5cnUKybguhg%2FpHtmuVlF5RtWO7P1b6eRSwiLfyeCyEknNQECCbl5BFLBwsNqlOThf9IeFPgGj2HqzNmI%2BF5kjcIPXJ0zK%2B3dY&X-Amz-Signature=dfc7ef033dcd05fc4d47f898af87d8acb86fe73374a8ed54835dc17e247b4fab&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L22NB3K%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T200938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbPf8zwckGAPKQZN3C9suXcr8k0rw9AJnf3BFftiQT3wIgbdDm%2BUs82jkquR51ERu%2BHaGIU1KDHVdGtL5Ef5uEnLoq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFCn%2FRaC0GUh54dZ1ircA9LUlVXJa%2BCiYzp6C%2FXC75XyHvmMewwV5BmTprqEn%2FGK6wAd1ce5IB9lGJOBN5poH8LexpecJbB9mhs9hE1WBR1d9ifebByIfUjDXxJB%2Foy3%2B0NdORRQ4X%2Fj9Y9fVYBKxO3hAc5R3C%2FsY9PDLGjSoS5Nd%2Biey1QJZ8Q2PGBz%2F%2BGbDHwont%2Fdg95UG7EpVaG7RevdL89t8Y8KegBpMOlp8I7BaWURLFAdG%2B7RhhgOwQKg1UHtvXiEaZEsqbf6CZG137jAmGGV%2Bjhm4QGRlnIEtbi0bCOKbIwyk6ya0dqMfsrgPlBe1m8n83XTMqEWImjOMaVKU1Q08rqfLa%2BVHPgN1%2Bn3J2x%2BCXNFOLYpZotMpDlPkfYhvepoX3%2BrJxkZm9z8tY7McfvCkvab61vlYcO2lPtKX9zf50xfuJsohAzdx4RU6PQ39Wih8152arW%2FCJ53B2H2Zgg5nsffngn7ewbUrq5d%2Bx2FV9IY0PmNKS8oP8euoljUgX6SaZhbJa6nGD2uGnOrst%2FdSEGl858cXJBj8KMmc2srYMssi6cTqLUiWFLrktZKP8UOdRdhMR7jHAThWf7xqASCdypL7FV9e52bicqmhJnfsFd%2B4GSveNMjpFwUqKVk6%2FW5%2BYoaGgsOMPiZ9MAGOqUB17qUV6I4xDVrLumxy1BibeeOew%2FACLHKHoRAx33yFFmNpIvKe%2B86KrSx01L1yjlNtit9oJfMjjlDmzdUJxRlN1yfZJyuMy0FC7r7scWWoMEiU5zajP3SK7Vc6Uy5cnUKybguhg%2FpHtmuVlF5RtWO7P1b6eRSwiLfyeCyEknNQECCbl5BFLBwsNqlOThf9IeFPgGj2HqzNmI%2BF5kjcIPXJ0zK%2B3dY&X-Amz-Signature=149fd734c1d214716d6d73585398b10edf72df576dd16397d6d7ecdf2501b214&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L22NB3K%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T200938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbPf8zwckGAPKQZN3C9suXcr8k0rw9AJnf3BFftiQT3wIgbdDm%2BUs82jkquR51ERu%2BHaGIU1KDHVdGtL5Ef5uEnLoq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFCn%2FRaC0GUh54dZ1ircA9LUlVXJa%2BCiYzp6C%2FXC75XyHvmMewwV5BmTprqEn%2FGK6wAd1ce5IB9lGJOBN5poH8LexpecJbB9mhs9hE1WBR1d9ifebByIfUjDXxJB%2Foy3%2B0NdORRQ4X%2Fj9Y9fVYBKxO3hAc5R3C%2FsY9PDLGjSoS5Nd%2Biey1QJZ8Q2PGBz%2F%2BGbDHwont%2Fdg95UG7EpVaG7RevdL89t8Y8KegBpMOlp8I7BaWURLFAdG%2B7RhhgOwQKg1UHtvXiEaZEsqbf6CZG137jAmGGV%2Bjhm4QGRlnIEtbi0bCOKbIwyk6ya0dqMfsrgPlBe1m8n83XTMqEWImjOMaVKU1Q08rqfLa%2BVHPgN1%2Bn3J2x%2BCXNFOLYpZotMpDlPkfYhvepoX3%2BrJxkZm9z8tY7McfvCkvab61vlYcO2lPtKX9zf50xfuJsohAzdx4RU6PQ39Wih8152arW%2FCJ53B2H2Zgg5nsffngn7ewbUrq5d%2Bx2FV9IY0PmNKS8oP8euoljUgX6SaZhbJa6nGD2uGnOrst%2FdSEGl858cXJBj8KMmc2srYMssi6cTqLUiWFLrktZKP8UOdRdhMR7jHAThWf7xqASCdypL7FV9e52bicqmhJnfsFd%2B4GSveNMjpFwUqKVk6%2FW5%2BYoaGgsOMPiZ9MAGOqUB17qUV6I4xDVrLumxy1BibeeOew%2FACLHKHoRAx33yFFmNpIvKe%2B86KrSx01L1yjlNtit9oJfMjjlDmzdUJxRlN1yfZJyuMy0FC7r7scWWoMEiU5zajP3SK7Vc6Uy5cnUKybguhg%2FpHtmuVlF5RtWO7P1b6eRSwiLfyeCyEknNQECCbl5BFLBwsNqlOThf9IeFPgGj2HqzNmI%2BF5kjcIPXJ0zK%2B3dY&X-Amz-Signature=2dadd4cfca671866d537fab5982673aca147d8cfd0c4ec11a555f4528ff9be06&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKMXR37G%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEm0iXi2aZcSr7oeV61PpDY%2BKcDFCIzeFr19HcD5Whb6AiEA1QF8hb0oWRb6MNFGfMGjQohJNz2x6bqJXWCTEoMkQf8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJrkjRsjYD%2B0m8PLqyrcAz6ECLESWtKQCZnA%2FdMHxronyK2FFD7dxLBXp3jvibWxgPyovozXJCpvd2lwVLxiolD3Wo3heAA353ilPlCB2FvX4In6OSKzVHmZtFj8VxeCAlZcZVqpCZYW%2F9zVOrnwNjaGJMRin0oATQguWpTyBLB3oOwCFJJxTIbraFYz1e3tU8aQVU7wD%2BeccMoj3XB7IZFL8a9GFPO60ZgN9zsTEiqeEEuYlZHQuR7f3xZ9%2BZm99jSI5C%2FWVWPrvxPAk7chwF4xVLdGnIqumvDxd9IdyyLhv%2B3COM4CH9tfMyrO0%2BKJclism%2FqonJtSyTLS%2Fn45fVYtMFn1HOpozcUlDmeEHh%2FA1VpWEWQDW%2F74HDvDY7nOqClNrwGvWaxMRUmxTAfiEgI5vKKFX4w9VJZvob9GKV%2F28wgppHKyOcXKfI8jyMa2m91CgwxQEIxDIpARcVTLYOH%2BHpU32XaVm540fbrHdjArgmw5g0wmSQPwSNud8yPzgap4hvZ2EukbYJ4ItRQ3Yi1H90NwMtYdU9d0nfigxfALfihUJdRwwyHZ26Lr8b0fQuxkPPEfJjiBHx1LHR4FX14Z3P0D4X7QAILLhqxbp06AOfckY42U3LnBRanEjC7uc0aCoBXhghVowrYCML6Z9MAGOqUBc2vqZydQZy%2Fxt3IQ8%2B1ugCxSLdeYtxhL5mNMtW3psidgx69vheAUORFE4yLwDRAkCgNfKZJfXZSj7lA7b4mGUYTkxVjKBB7auxH0A96RmmCNNMwNyHUa6bJDkvIoeXxLRt0FGtf5%2BXZwwTRJorNb4VPASU7Q2kNuMVz1OY594CP1Yottwxw4jzQmYl9Dl8M%2FtxVulIfKpPHOsqJIo1bpjfJXHCFl&X-Amz-Signature=8b415b13d51cf2d4ca5130b9c1e613a2ef4a4e979bea18856ecbf96680e0b4ba&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDODSCFZ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXKztrC1JI7pmgifq3bGCdOmWlFthIoM3QO3rez4FkRAiEAxlIevRj3uS5W8YLw2eK5dLIDsXUcoQH%2F6ThU%2F0CG8eoq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDGJ1rJz0RURACJqrsyrcAyvWVPmRdr2l6FzKa2joFPz0nwaz79fwm%2FgV9pPZkwa%2BLrNiIho5b%2FPRfyiT0HmRMgAvjOtHTMABzn4ZRlBUcbh6bdk853i0mLwL9sOKr1qiuVCBvdTue3ffiPrWfsQ%2BkLoQXqPP8nTs9QHEDZ5muwKps%2BqbvPXp%2FysvXvjNbHhYQKk4pdNQLyue5wlBKEx%2Fwx%2BZRa2yOSsSY8GkeUoiLWwt12evLO7BTHQIm8INaRKfqZrQbpd9YLNbArs2xd1s6TzD02AGak0ca63EW87vbRzXgzpcPg%2F44o7uqpkp7oe%2FDN8DDbeD5PFSNiqhu6NxMsexKhE1h4tI74vVuhjuXlE8F%2F9kYs%2Fo0yJZqm4Zs3KLkTTmF%2BzGAqNr%2BCOBH0bz5GhX6%2BGZfbOuP4wcN22FuHzRHSUKjlVNS6D%2F0DLk%2BxkgmydAd4r1bB0iCxnEIHn4rN5WlbHIOs5GFFnSbcbIVx%2BrtbD9WqyXS%2Frt0NhBlHsMqjfmkfSTPMethpx99caP3aBP0tXTY44lMXuS%2Fbu17VgRacs71z1eAreBuksXhq1jFTAgqUnlcgTUTCNIJqmhLB6a13qygk7JveyNY0xYs%2BDQuwS78ikh4xMAHgKBxcqvla%2BCS4fjGhU2VZyAMLyZ9MAGOqUB6i5gUvb%2BoWrRgM238B9uxzTnJkgTRX8vcKlo1lOr2w2BXPeznNmbB2S4YC3L3EiHA%2FP9rGGH4%2BBYATqTw6scGdUALubSEWaHUpZBhNLeJ0lQMET9y3%2F8k97QuuzECmJhjo23RXEM3cIzWqs%2Bycsen4Ei7Nfn2fpuxXEd8sdMw6AbCtpyXWY2%2FwkWIbFe2gGNJXMqNv1FMXpwyCuL3b3XQQOzUi%2F0&X-Amz-Signature=85ba678fd6f9b53ed4f81b3091e128b946ca0b32824435c4b772a094f8e30dcc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L22NB3K%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T200938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbPf8zwckGAPKQZN3C9suXcr8k0rw9AJnf3BFftiQT3wIgbdDm%2BUs82jkquR51ERu%2BHaGIU1KDHVdGtL5Ef5uEnLoq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFCn%2FRaC0GUh54dZ1ircA9LUlVXJa%2BCiYzp6C%2FXC75XyHvmMewwV5BmTprqEn%2FGK6wAd1ce5IB9lGJOBN5poH8LexpecJbB9mhs9hE1WBR1d9ifebByIfUjDXxJB%2Foy3%2B0NdORRQ4X%2Fj9Y9fVYBKxO3hAc5R3C%2FsY9PDLGjSoS5Nd%2Biey1QJZ8Q2PGBz%2F%2BGbDHwont%2Fdg95UG7EpVaG7RevdL89t8Y8KegBpMOlp8I7BaWURLFAdG%2B7RhhgOwQKg1UHtvXiEaZEsqbf6CZG137jAmGGV%2Bjhm4QGRlnIEtbi0bCOKbIwyk6ya0dqMfsrgPlBe1m8n83XTMqEWImjOMaVKU1Q08rqfLa%2BVHPgN1%2Bn3J2x%2BCXNFOLYpZotMpDlPkfYhvepoX3%2BrJxkZm9z8tY7McfvCkvab61vlYcO2lPtKX9zf50xfuJsohAzdx4RU6PQ39Wih8152arW%2FCJ53B2H2Zgg5nsffngn7ewbUrq5d%2Bx2FV9IY0PmNKS8oP8euoljUgX6SaZhbJa6nGD2uGnOrst%2FdSEGl858cXJBj8KMmc2srYMssi6cTqLUiWFLrktZKP8UOdRdhMR7jHAThWf7xqASCdypL7FV9e52bicqmhJnfsFd%2B4GSveNMjpFwUqKVk6%2FW5%2BYoaGgsOMPiZ9MAGOqUB17qUV6I4xDVrLumxy1BibeeOew%2FACLHKHoRAx33yFFmNpIvKe%2B86KrSx01L1yjlNtit9oJfMjjlDmzdUJxRlN1yfZJyuMy0FC7r7scWWoMEiU5zajP3SK7Vc6Uy5cnUKybguhg%2FpHtmuVlF5RtWO7P1b6eRSwiLfyeCyEknNQECCbl5BFLBwsNqlOThf9IeFPgGj2HqzNmI%2BF5kjcIPXJ0zK%2B3dY&X-Amz-Signature=8201a5cf5ef59e1671c752ce4a298dbe6895cd6fc36d3dad777f571100e61fe0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
