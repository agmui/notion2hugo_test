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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNPQIQC4%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDXJ5XQ5pltg0gcJ21KpnQpjRWOb%2Fy5v0T6JOB1wseIPAIhAO3aoMexagLY9cZIQ01EC0%2FgmZ4kOG0K2eYi3r2oifWHKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnPJxXKHUaVyqbu1gq3ANFE2QesNeS2hhiwh8Gijj2VMEOqNxW2mZfKuKW6HoBDwihQ6utm36%2FWFhwnRiNfEiPUCWyM%2FiBMqhnmGCJddw09Jvz9KbAVtmbjyTLBybTWvzJsFrOWA%2FWuO4%2FJlnrfo73IEGHNjllUHsnb6gyr9EuatC0uLVDzBE8O9tlDydWX0NsFISjRchq0jfV4izxxLirxP81Csy2qeR5OzxTZPhs0V%2Blq5VP%2B22ayyI%2Fp1O0LZgCKNyjNkfKTzyCXV0oAH3kESoStRlkmFd7B5HtKfvMXA%2FUzFFu4dbdnzqgHcritGDUTRG14%2BgnDSV3ZSfA4PGullOuFfJfzZQbpzOeBZdKRjmiJiJ7SswhCklYn16Stdqm%2F6tSkZ6nDarUnHU1s6mIGNdV%2FUDXZXVkpXyVqlj3rp1dLEIUeYzEMgFkJlbhhwK8O9%2FICfRm%2FEbchGnl862f2Pk0TK00bvGn2n3gXkbaKQb4ancSJXNHqQ72uYelPxvPVy8ucEhY%2B7e2bl2Kt75oizw7aXX3jNzJZoavoPhkiigm0BB5maMYPQKRoTpxPMImTIp2Fo7BuJLpTue%2BGDrPRhxVUKSJMiY7kWu6dMeHi3xhPvMSQGYgcex%2Bw7SRWxB3BN%2FpdVF4C6IgRjCsuZrABjqkAc20ukTf7knGYFxM1pHEhtE%2FnHkyXF%2FrkhKkl%2Blp7IgTA6Lqvil8UOqKKXKtDBOF0rFkPjMkEw9Rb4d9udNiw5vuUIHVBt856g4wYxTZrOM4RLPvgBknUQrs6Z8KHSnUQSWCWbCBpaaSHzhk0WOgHHYhMIJC7M81eTfh0ZkZQkAyXT22XMU%2FfFmQHvsFFplZjdA1VQOOLN8i5EsCbWfYaeBAz6bf&X-Amz-Signature=6f238a53747a3deaa9715fe53c1107afc4c18a2168a9c991419213e59ef04416&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNPQIQC4%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDXJ5XQ5pltg0gcJ21KpnQpjRWOb%2Fy5v0T6JOB1wseIPAIhAO3aoMexagLY9cZIQ01EC0%2FgmZ4kOG0K2eYi3r2oifWHKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnPJxXKHUaVyqbu1gq3ANFE2QesNeS2hhiwh8Gijj2VMEOqNxW2mZfKuKW6HoBDwihQ6utm36%2FWFhwnRiNfEiPUCWyM%2FiBMqhnmGCJddw09Jvz9KbAVtmbjyTLBybTWvzJsFrOWA%2FWuO4%2FJlnrfo73IEGHNjllUHsnb6gyr9EuatC0uLVDzBE8O9tlDydWX0NsFISjRchq0jfV4izxxLirxP81Csy2qeR5OzxTZPhs0V%2Blq5VP%2B22ayyI%2Fp1O0LZgCKNyjNkfKTzyCXV0oAH3kESoStRlkmFd7B5HtKfvMXA%2FUzFFu4dbdnzqgHcritGDUTRG14%2BgnDSV3ZSfA4PGullOuFfJfzZQbpzOeBZdKRjmiJiJ7SswhCklYn16Stdqm%2F6tSkZ6nDarUnHU1s6mIGNdV%2FUDXZXVkpXyVqlj3rp1dLEIUeYzEMgFkJlbhhwK8O9%2FICfRm%2FEbchGnl862f2Pk0TK00bvGn2n3gXkbaKQb4ancSJXNHqQ72uYelPxvPVy8ucEhY%2B7e2bl2Kt75oizw7aXX3jNzJZoavoPhkiigm0BB5maMYPQKRoTpxPMImTIp2Fo7BuJLpTue%2BGDrPRhxVUKSJMiY7kWu6dMeHi3xhPvMSQGYgcex%2Bw7SRWxB3BN%2FpdVF4C6IgRjCsuZrABjqkAc20ukTf7knGYFxM1pHEhtE%2FnHkyXF%2FrkhKkl%2Blp7IgTA6Lqvil8UOqKKXKtDBOF0rFkPjMkEw9Rb4d9udNiw5vuUIHVBt856g4wYxTZrOM4RLPvgBknUQrs6Z8KHSnUQSWCWbCBpaaSHzhk0WOgHHYhMIJC7M81eTfh0ZkZQkAyXT22XMU%2FfFmQHvsFFplZjdA1VQOOLN8i5EsCbWfYaeBAz6bf&X-Amz-Signature=0568410a66e77fa0421517911662d3a4cbe4a2c425c4a6f3e6e74ef000943182&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNUMMWEV%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIASrRGA9X8SvUNMEPUbHwNe2JgWK2QcPmyp0nQ0Jj3WGAiBLIj3UrxjLycj4bYXY2wh0%2Ba7QETENi9hffQ2plkfg7SqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYrGaBWDv7cU%2BaXNNKtwD0GcrHmBwma56ue04Jx6OgurMTBeL%2BQQpHzZ0iHgdd835Xj7fZrwRNs9ywTlkVQoqT4Rr6Vo31QTLvxOzvO66mDxFWVBqBgZ0W9x%2Fj6eHC00e1l9INVBeakhumXN6Nzd6Jo2W3KOLr5i9lvkpYzER%2FIRvRiKwg8HvAcvIrqD0Waceek7Ezm%2FICliQJEpScenRDdhP%2Fm9My2hgq8ksUt17KkzAC8Kuih1AYKSQ4R%2BPcDJgO3SGU7AU6OfKU2ajwQB%2FYyVy185PCmHb27I%2FaYkWZ%2BauRXEgi%2BqcN37Ra2g%2B%2Bfr8%2FXemMZ6%2ByiA9Pn7X6UBKThG8RgOgeeHxUpPldV6U4I2ShWLXJyoRNlsvZn176vz5VNyRBEJM1uQ%2Fy7uH5BQbS%2B3LdMn6Nx4Or%2BMTSAv6W17RQnXX3zts7LVM4LX1EoYu%2From2qNGqz%2BbD3Z%2FgBMMpsD0SOdAQ7r4CNEWPv8ZjICwG%2FndVFTWUZw3JZi29Ck0gUVlG%2FR5QFDDyYrcPnr0g4irdhG3l3fn5qvj4O6FsC65VXefjDvhEKHu34txSIxgiK7Eh8bxihvBDl3%2BLfYdoEoSZpPM30EKYeAMBxN8F4e8xi2%2BoRVOvi0S9oaSzR8VlvybFc5tnWzk%2FtkwrLmawAY6pgFPTyZyXiJOnv1iSnlyMAyXC2CUskY%2F9gXu8uHFWUX9NLc1D1RXgmdTPsrQqRLbVEERzWsWMrlqGm2SPzGm5PnNiGKiAb5Y9ySR4fYpy7xy7sqFRQp%2FxHWj0AL%2F5KwkS0eRa%2BQy69oN%2Fwb9TDMCm%2BPQWOtaiaDCx7t0Die3akLf3%2FgY6DGYPKpHOngtdm2jjrkDX2Wz4czSeomZR7weCC0%2FITjFpCpb&X-Amz-Signature=98a0d9a12c34bf5ae30dd9d74d7c782e8cacf506cf74f16b4f849c1bd48dc993&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPMI633M%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDYPm9nebK6jahRFOGirTeofvjV7UyiWd87adLSMCZc6gIgEYBMrd%2FiC%2FVFUPy%2FfgLMjp8eN%2FMTfQfjoxGIfwNIIgkqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3lQPlxSOcTBZVvnSrcA1URF5MeWJ4beSEmVbBeaDX%2FTU8uONK15Yb3GwTzBushEuwbzZZf18dHPWO3VoZFJJEDbmhwyqf%2BJTLCzczxCVeDPfXQqL4aCmsM6%2BZzh%2F85lmTm0Ri4SKW%2FAdeFOJwi%2Fw8kAw5YjRvdW0gx2nb%2FYY7uuGdh2%2FDO2Vohkq7ujRlirZER8RT7pS7itj9pSFvKw2pMRuaVjjMPGRK%2BZ6LUcF9LoZ24ZgIUCmOpBYmyIr4tVCCNnCf3EsmW3ZLdXZ%2FBfDV5%2B6oyjzFpv1yTvAhuP6MTQZm6pikOdzen8gE4%2BEi7jG%2FE9EZIWcC%2F0w5GFKKjqC3ume%2BS11cLnwtm8x7YQ%2B0ZLWkzROHOqWXnHSmJ8J8OOeENB8O8tVkTw3Y2HhenVz3e3hbrZLw5xL0n5U44FF31CmaLYc6ANLabh5NIVBGrEa047qtkPJMK%2Byz1pFU9zenCr4pcHKsmcfV42g5BIafQPaw0wNLVgToospUFlbJ0s%2F4Y9zwnizfRC2ap2s5PR9O4MQTjAXX0TGBRC3CEwtIwBEHLFVzQZEnAhwEg4Zb7NnkH7sx6o5AXqRaQr107aOqPvrmN7IHAqwuqx2mzWPjETz%2B3dxA7lY%2B8Z5vXl40kDGGs1%2B%2FXMaTGkVNnMNy5msAGOqUBfVGX19Cj9SP%2BN5kerkxt1F6uHhdV1tlU1ZFmkavptKXIHGH8knOqhrug%2F8JlSZ3gNkO46zmI%2FgGm0amrilEmqVgCPar%2FDW5sek3IVdKkC6Sx31vxuEF%2B2pE3f7%2Bbd%2Fiuk0vWpHhFykYUlAs%2F34%2BynltX3%2FumX8Yfb2gBTDEJTWMFBilQE%2BGqx82iUmopHAqkwWYZ0Y9iFuJJm2DDiWelLizHkkzi&X-Amz-Signature=323252052c113dd8f95ed6469b5f5d3c320d916d1b0b7864fb8e0e291f06e52b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNPQIQC4%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDXJ5XQ5pltg0gcJ21KpnQpjRWOb%2Fy5v0T6JOB1wseIPAIhAO3aoMexagLY9cZIQ01EC0%2FgmZ4kOG0K2eYi3r2oifWHKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnPJxXKHUaVyqbu1gq3ANFE2QesNeS2hhiwh8Gijj2VMEOqNxW2mZfKuKW6HoBDwihQ6utm36%2FWFhwnRiNfEiPUCWyM%2FiBMqhnmGCJddw09Jvz9KbAVtmbjyTLBybTWvzJsFrOWA%2FWuO4%2FJlnrfo73IEGHNjllUHsnb6gyr9EuatC0uLVDzBE8O9tlDydWX0NsFISjRchq0jfV4izxxLirxP81Csy2qeR5OzxTZPhs0V%2Blq5VP%2B22ayyI%2Fp1O0LZgCKNyjNkfKTzyCXV0oAH3kESoStRlkmFd7B5HtKfvMXA%2FUzFFu4dbdnzqgHcritGDUTRG14%2BgnDSV3ZSfA4PGullOuFfJfzZQbpzOeBZdKRjmiJiJ7SswhCklYn16Stdqm%2F6tSkZ6nDarUnHU1s6mIGNdV%2FUDXZXVkpXyVqlj3rp1dLEIUeYzEMgFkJlbhhwK8O9%2FICfRm%2FEbchGnl862f2Pk0TK00bvGn2n3gXkbaKQb4ancSJXNHqQ72uYelPxvPVy8ucEhY%2B7e2bl2Kt75oizw7aXX3jNzJZoavoPhkiigm0BB5maMYPQKRoTpxPMImTIp2Fo7BuJLpTue%2BGDrPRhxVUKSJMiY7kWu6dMeHi3xhPvMSQGYgcex%2Bw7SRWxB3BN%2FpdVF4C6IgRjCsuZrABjqkAc20ukTf7knGYFxM1pHEhtE%2FnHkyXF%2FrkhKkl%2Blp7IgTA6Lqvil8UOqKKXKtDBOF0rFkPjMkEw9Rb4d9udNiw5vuUIHVBt856g4wYxTZrOM4RLPvgBknUQrs6Z8KHSnUQSWCWbCBpaaSHzhk0WOgHHYhMIJC7M81eTfh0ZkZQkAyXT22XMU%2FfFmQHvsFFplZjdA1VQOOLN8i5EsCbWfYaeBAz6bf&X-Amz-Signature=be6e9f5d70d783bab3b08c23ec02c52c13b921c6aa5a0eb134f36dc1fb9a8bc2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
