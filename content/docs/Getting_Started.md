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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4QLNAFW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCenwKclsjpWoiEStT4PV5aduAdTnEQVpJdmiK39oJ%2BlgIgPuVEjfxYiWYuz7eLSo2fbOaagJKnsVPl3KR3ASRx0ssqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIW1yeOnGCWhGdSRhCrcAwmQEPCC0LELNh5STuG%2B4rjCJ4SXChIJ3Fc2tYR%2FEBGQ5DDApiTT5Xbr5XFhUbQlHjx0hTmiNar6GlJsiPk4h3nvsmIzWLIBKfE%2BVm%2Fa324%2FYa8abXMmKAZRsTzy5COPYnH3VOUJuqIHWPGXxJjpwvzFN1qV1E0vFUPApek1Ds0kOWoC9TcP6aD9XWeuxiGVkSObbbRoqFDl39Q123hHGo8pQNKYbuuiCXfymA4G2kuiCcQbejm8mWFvPyIRDzKc7%2FUCwxiXNxeCEf9m4Y24p2gyKVx4EKD4vQZZ1unU4kHrwKMIcjF1%2FHpN7Fhydu2jw06gUGFoMUgZMFJ%2FWO%2BKMUcL6UzE%2FKqeWiqNrcYvNG1oaNa09LyeobGzTUDk%2Fd7kDLHHBeVwcCOPUYX4nz%2FV34Pvls%2F4BcUgr3tagf1ZEJDr64gnJht2XIJtwjfpQjm6kIYXHnvwZO7%2FiBR3Gczm4LAur34lp8KSnCBgqmSjzeUK7zNp74%2B0SqPYnRjXZRq7U5%2F8KNcof4LrbUhrDqwP9Ph5%2FrfsJWY7OdGuIW8kT%2FP%2FAEPfezxMynj7X9j5T%2Ba6T109APFCzAJGMwaO4FrrwZ2xtkwXCVjnB2VjNHa7ixRfMPTQou6db1jb8jE2MLbLysAGOqUBMPwy%2BygehYaFnORN5JcRPVVmPTUDRHr3RT8bDEJNf2lgZ%2Fp1Xr3GDvBRzlu8UXkqWpaFhNtLV0xFus86AXbDtjuwI7SmQh0mRTXorQ94NDsaFkRMscd1jOzn7rzg47pay%2FkoTVzIk48mfwbYC2woPaMPdJAihS9rkPkefeXrY6Ktv4Nqsd%2FukqETp1XReG4oIuUzABnX3oacOlwkCmwuiQbOvo8Q&X-Amz-Signature=9a249a3e36f3a1f25a5e6ecd1edad103029740e80d867414a1c90778ebb311d8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4QLNAFW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCenwKclsjpWoiEStT4PV5aduAdTnEQVpJdmiK39oJ%2BlgIgPuVEjfxYiWYuz7eLSo2fbOaagJKnsVPl3KR3ASRx0ssqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIW1yeOnGCWhGdSRhCrcAwmQEPCC0LELNh5STuG%2B4rjCJ4SXChIJ3Fc2tYR%2FEBGQ5DDApiTT5Xbr5XFhUbQlHjx0hTmiNar6GlJsiPk4h3nvsmIzWLIBKfE%2BVm%2Fa324%2FYa8abXMmKAZRsTzy5COPYnH3VOUJuqIHWPGXxJjpwvzFN1qV1E0vFUPApek1Ds0kOWoC9TcP6aD9XWeuxiGVkSObbbRoqFDl39Q123hHGo8pQNKYbuuiCXfymA4G2kuiCcQbejm8mWFvPyIRDzKc7%2FUCwxiXNxeCEf9m4Y24p2gyKVx4EKD4vQZZ1unU4kHrwKMIcjF1%2FHpN7Fhydu2jw06gUGFoMUgZMFJ%2FWO%2BKMUcL6UzE%2FKqeWiqNrcYvNG1oaNa09LyeobGzTUDk%2Fd7kDLHHBeVwcCOPUYX4nz%2FV34Pvls%2F4BcUgr3tagf1ZEJDr64gnJht2XIJtwjfpQjm6kIYXHnvwZO7%2FiBR3Gczm4LAur34lp8KSnCBgqmSjzeUK7zNp74%2B0SqPYnRjXZRq7U5%2F8KNcof4LrbUhrDqwP9Ph5%2FrfsJWY7OdGuIW8kT%2FP%2FAEPfezxMynj7X9j5T%2Ba6T109APFCzAJGMwaO4FrrwZ2xtkwXCVjnB2VjNHa7ixRfMPTQou6db1jb8jE2MLbLysAGOqUBMPwy%2BygehYaFnORN5JcRPVVmPTUDRHr3RT8bDEJNf2lgZ%2Fp1Xr3GDvBRzlu8UXkqWpaFhNtLV0xFus86AXbDtjuwI7SmQh0mRTXorQ94NDsaFkRMscd1jOzn7rzg47pay%2FkoTVzIk48mfwbYC2woPaMPdJAihS9rkPkefeXrY6Ktv4Nqsd%2FukqETp1XReG4oIuUzABnX3oacOlwkCmwuiQbOvo8Q&X-Amz-Signature=fe86681c9145f4b3ae1156a8e4fdbb5981602dd3dd115fe5cd56ddd84b3b6609&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4QLNAFW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCenwKclsjpWoiEStT4PV5aduAdTnEQVpJdmiK39oJ%2BlgIgPuVEjfxYiWYuz7eLSo2fbOaagJKnsVPl3KR3ASRx0ssqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIW1yeOnGCWhGdSRhCrcAwmQEPCC0LELNh5STuG%2B4rjCJ4SXChIJ3Fc2tYR%2FEBGQ5DDApiTT5Xbr5XFhUbQlHjx0hTmiNar6GlJsiPk4h3nvsmIzWLIBKfE%2BVm%2Fa324%2FYa8abXMmKAZRsTzy5COPYnH3VOUJuqIHWPGXxJjpwvzFN1qV1E0vFUPApek1Ds0kOWoC9TcP6aD9XWeuxiGVkSObbbRoqFDl39Q123hHGo8pQNKYbuuiCXfymA4G2kuiCcQbejm8mWFvPyIRDzKc7%2FUCwxiXNxeCEf9m4Y24p2gyKVx4EKD4vQZZ1unU4kHrwKMIcjF1%2FHpN7Fhydu2jw06gUGFoMUgZMFJ%2FWO%2BKMUcL6UzE%2FKqeWiqNrcYvNG1oaNa09LyeobGzTUDk%2Fd7kDLHHBeVwcCOPUYX4nz%2FV34Pvls%2F4BcUgr3tagf1ZEJDr64gnJht2XIJtwjfpQjm6kIYXHnvwZO7%2FiBR3Gczm4LAur34lp8KSnCBgqmSjzeUK7zNp74%2B0SqPYnRjXZRq7U5%2F8KNcof4LrbUhrDqwP9Ph5%2FrfsJWY7OdGuIW8kT%2FP%2FAEPfezxMynj7X9j5T%2Ba6T109APFCzAJGMwaO4FrrwZ2xtkwXCVjnB2VjNHa7ixRfMPTQou6db1jb8jE2MLbLysAGOqUBMPwy%2BygehYaFnORN5JcRPVVmPTUDRHr3RT8bDEJNf2lgZ%2Fp1Xr3GDvBRzlu8UXkqWpaFhNtLV0xFus86AXbDtjuwI7SmQh0mRTXorQ94NDsaFkRMscd1jOzn7rzg47pay%2FkoTVzIk48mfwbYC2woPaMPdJAihS9rkPkefeXrY6Ktv4Nqsd%2FukqETp1XReG4oIuUzABnX3oacOlwkCmwuiQbOvo8Q&X-Amz-Signature=a3c72fd061275943cb6932cbbc8bc80d1d374a3b1406e829a578334e32d24a93&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2GI7UL3%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCADKUtwZyuwDLHpKccp4g%2BGRHna9yjvFDnPPFn2%2BJjAQIgKHf2IbhSdPABZhuoaHsYe9SMhr%2FdOQ51dXlTdN35T6AqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKe4fzInjVtgzxwZCrcA28o5nnyVeG76zT5PLOXMYSFLfhJvkGc0Htzz1Ek6eh1%2F1XXFMQsf29W2ja7%2FoWEzm1E38i8SlTXP4KTMZgJY8vLswWeGg4At4Iwed%2BlUdHOCmd58yk2CoFWxwrj4roSxJMkISkN1Z37L8DPu%2F2ghQtA9KLIMhONNDtq3BFpgYPQT1Qo4rvoeT2bQswxQ%2F0EEjVGYEg35MIz6XrCgYJrC0iaNyy0NZ0PYZosweflMV4wpXT4SsuYc6NXl2v%2F8lHOZ6hs99B2pTY8UUMtkGYMNQDM54WsfMpYXqcOSg7Atn7eJvC14EIBsR7aVjgpwEVm4hT8tSWLBktHpYV7cLiwFZyedrX1aFj66s33GRxtAmgt2Cytld7ofv6VVn3S%2FN0MGJTN9zI8JpIY0e60qG4scbb62NPAxbq%2FFARXZEIV7JOujy1Qqo4gDHj2liXgR20b9n9Sp%2FXSR%2BWPx1TLIqxsQFxrmL4PsfLowvwVNm9eENFWvFdgdfEGfshgm9U5VAGZOaLS8XPpbYcQgrUJjn5VCSkuwRx18Ztwfilu80%2Ft9%2FZhzpvqNnVMo4wUcsoFzbCkgXozjvlBTqPccxGSf%2ByN5KbmUGUFBN8Z6vH8W0jVq1vVJ54Vq2QaQujQuxReMJ%2FLysAGOqUB5DvDqVswoBiC5QEp4589Ft5kE0xRIT4yiBmbJfvaYQaYsvgUOLy5geKMyMoc9nE06VT3cKJk%2FaAGhiSlQcF5L4TSD97M%2FyQI58uqyUzKS2cYs3etV5GksEGk8Dw8O0U7hmHONqiUdWmV86CnJN2%2BdIiCq%2FeGhSSAAqnQV2SGi1ITIlXMfPPT8EJDb65WTOLv%2B2YScV9LihyF2uw5TyU0ann5uVr0&X-Amz-Signature=b0ef146f209f634d34da1df58e00d046eecc31eb4d5df61c13e65477cd67491e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4DZAYF%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIADnYe0mwnsdHu4iPBzSnyUc7OLifmMI9T4rPOS6fVx7AiEA%2FJyYGUn3QXoNqI%2BLerLRphlouIKbhvenTe1Jgnutw1gqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3Bv%2B6u%2FygV%2FhB%2BRyrcA3r3y8QTKpbP%2BKjsweS1UmH7%2BNc8SRxmsJAIjuaSyQ9lbuXmRyKfuq91D543pvEs0RJnESFEDPXncE9OSRMAJqub9FFmqErstiuPBeQxhDwpuKKZBSQLGMz6%2FeErYKpLEiXIaYK%2BIc8qEwwM%2FgBpl%2FbeESoG5VSPm1RVstyL1713kEqvADG5VkRo367awADTpUc1BmN95HP%2BpCVcaS68cl9rqzDBWuMm0LUD3FvhBCpLQrg362sxqeigLKff239v%2BMJQc5%2FbIC3mm%2FPxTnj%2BXnEb0m%2B5uOAd7KmhY0MBowXmzfXzpceN%2BEUXbVO5QGF9uSBVRVFBu3xvUUPYO8Zm%2BH6C7O%2FgBqSyPpfJifwQzpkzeYUZSQBLr2FYDoO41cZUlrvpl9E591eNFmflRsoIM0hZPfYovSdFPEvs2gerKT09D%2BU5zDTQ1Pg8oKLYKRQP2qygvV4o8%2B8qotuf%2F6feZ%2BkoI0jfccbjx3GiQiUGelDGGy54ydGj63ob92ci4lg7dVaodKpYhDjG52A%2BLF6y0w20eVqm2JqP%2BS0YS0wDf24gut8Z%2BWCUa1MOX82%2FqJlVCjCocAdPZVvpfHL691kJopLNXZOv8iwbUTsW1%2BUXM5hPaoiVKJQB6hbl77c1MKnLysAGOqUBeZ5KHrzjVyUg9I02vziOsFgspTSUy8QWh%2FFsmlQUfsIY8aDpYSXPOHcaLDN2lElmlsgr0iWiCaT0A1%2Big2S%2FEMXPE%2BzYLc10GNBTxRhY0EAWFeRG9ATwHptGWl2rtm1KBF4FV7TXPHOh85oVoL4fGgzbAM7hdSoQoaU7vSNUpQ6rTbWKA50bK3qQ2d7PFTgQx234BkBqKksyPvzk4FpYEB9ACJ5g&X-Amz-Signature=356846badf254897b76773e458e654b729ef8b745369f61d7c068a8677a2427e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4QLNAFW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCenwKclsjpWoiEStT4PV5aduAdTnEQVpJdmiK39oJ%2BlgIgPuVEjfxYiWYuz7eLSo2fbOaagJKnsVPl3KR3ASRx0ssqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIW1yeOnGCWhGdSRhCrcAwmQEPCC0LELNh5STuG%2B4rjCJ4SXChIJ3Fc2tYR%2FEBGQ5DDApiTT5Xbr5XFhUbQlHjx0hTmiNar6GlJsiPk4h3nvsmIzWLIBKfE%2BVm%2Fa324%2FYa8abXMmKAZRsTzy5COPYnH3VOUJuqIHWPGXxJjpwvzFN1qV1E0vFUPApek1Ds0kOWoC9TcP6aD9XWeuxiGVkSObbbRoqFDl39Q123hHGo8pQNKYbuuiCXfymA4G2kuiCcQbejm8mWFvPyIRDzKc7%2FUCwxiXNxeCEf9m4Y24p2gyKVx4EKD4vQZZ1unU4kHrwKMIcjF1%2FHpN7Fhydu2jw06gUGFoMUgZMFJ%2FWO%2BKMUcL6UzE%2FKqeWiqNrcYvNG1oaNa09LyeobGzTUDk%2Fd7kDLHHBeVwcCOPUYX4nz%2FV34Pvls%2F4BcUgr3tagf1ZEJDr64gnJht2XIJtwjfpQjm6kIYXHnvwZO7%2FiBR3Gczm4LAur34lp8KSnCBgqmSjzeUK7zNp74%2B0SqPYnRjXZRq7U5%2F8KNcof4LrbUhrDqwP9Ph5%2FrfsJWY7OdGuIW8kT%2FP%2FAEPfezxMynj7X9j5T%2Ba6T109APFCzAJGMwaO4FrrwZ2xtkwXCVjnB2VjNHa7ixRfMPTQou6db1jb8jE2MLbLysAGOqUBMPwy%2BygehYaFnORN5JcRPVVmPTUDRHr3RT8bDEJNf2lgZ%2Fp1Xr3GDvBRzlu8UXkqWpaFhNtLV0xFus86AXbDtjuwI7SmQh0mRTXorQ94NDsaFkRMscd1jOzn7rzg47pay%2FkoTVzIk48mfwbYC2woPaMPdJAihS9rkPkefeXrY6Ktv4Nqsd%2FukqETp1XReG4oIuUzABnX3oacOlwkCmwuiQbOvo8Q&X-Amz-Signature=8fee0a0c5c43fe3bf3a7d73e91a1c9f6047ff3a3a3076e576f18b90179a14600&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
