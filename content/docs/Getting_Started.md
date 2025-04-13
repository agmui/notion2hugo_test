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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNPSZ3JG%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T061031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDPW63Ou6jqE8Symf%2FFLon7LJarAlCD6b6yWUv33fLTpAIgAQuVSfZZGP83%2FhfGRYAnEX%2FBT8HeNXUc06KTc8VNNdAqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOZkCZxfdGeWHpctircAwZXgJV1x8dZ15Fm5yumjrhxIUAxrhxJUFH5dAgChj1Y2ZBpc21WAo78fYgXxc0TTVLFZVibDW%2BCS48A37P%2FVt%2BUWDybqTOPwI0Jo%2BixULsD5%2Fx02KL2flW5FHOnCOhMKav%2BDmIhu9RkQU1DPyZ5lCQDbVt4H3KzAQuaQBAruO9ErTDTfTaGpS%2BmwnMeQCCfBnsYhdsZlnfwxdHnmD7XYaKNPosW0Nfg2yrgaOZIV2f0OBbaxTjOhOnx5rPWsRMrkIr86onjmotPziGSATJ2n8CIJ0ALVdDHGnJuQQvmtDQtEGyFmvqgRnBuuN8nZmaySNk8kS%2B7OyNxaJv0LHwpcp0kG%2B4IHaWCKSAX%2B698AzhPGsGu8ym8B45%2FtHjg20xiR%2BbhGMQ9gTDxHuaiObdnuQ%2Fb5zv4%2FFZLLUYVg0ySLZP8js3p36TowNTam9P4sbAwo5%2FC22gV%2B9MM8lUM9IIdYGOvC%2BxQh3dhj3xzkbtcd4ZDeaun5atPv35YtiIvA5t2RcbT5hdjjRzuvp71cB5kB2wp1igg%2BjEVFPjrXo8XRKetOt7TkpYgfbFD%2FREQsm8dkSCWNCLVXCJDEr05FFkoTWQwyeNi7P%2F08hFIemjxqCtjr7w%2FFUWgg0Cv9t4HMPuN7b8GOqUB4TWYRG2fA0SU3o1DWwE12nbNIPkDKoZKB6ZmyN92pu4hugaWDtRdNCIB2EdqmOx4sQzmMv%2BnpQOWu6YVK5qbXRFVstlZZCDEEEcLboc5yE9iydOnUPLQucMywxSTEYyq3uIHu8phE71yC2Xpj1B65a09Qdd6iBsFlGt9c54QwL%2BfVuL7to%2FjLs4fgJ4QD9C9uMeiSks%2BOqwO9JFxTCjSBMUVtk%2Fa&X-Amz-Signature=7af88799aedd6d240aa8bc9fa14004ce3a4d0b50e5106b3d80101af661394dad&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNPSZ3JG%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T061031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDPW63Ou6jqE8Symf%2FFLon7LJarAlCD6b6yWUv33fLTpAIgAQuVSfZZGP83%2FhfGRYAnEX%2FBT8HeNXUc06KTc8VNNdAqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOZkCZxfdGeWHpctircAwZXgJV1x8dZ15Fm5yumjrhxIUAxrhxJUFH5dAgChj1Y2ZBpc21WAo78fYgXxc0TTVLFZVibDW%2BCS48A37P%2FVt%2BUWDybqTOPwI0Jo%2BixULsD5%2Fx02KL2flW5FHOnCOhMKav%2BDmIhu9RkQU1DPyZ5lCQDbVt4H3KzAQuaQBAruO9ErTDTfTaGpS%2BmwnMeQCCfBnsYhdsZlnfwxdHnmD7XYaKNPosW0Nfg2yrgaOZIV2f0OBbaxTjOhOnx5rPWsRMrkIr86onjmotPziGSATJ2n8CIJ0ALVdDHGnJuQQvmtDQtEGyFmvqgRnBuuN8nZmaySNk8kS%2B7OyNxaJv0LHwpcp0kG%2B4IHaWCKSAX%2B698AzhPGsGu8ym8B45%2FtHjg20xiR%2BbhGMQ9gTDxHuaiObdnuQ%2Fb5zv4%2FFZLLUYVg0ySLZP8js3p36TowNTam9P4sbAwo5%2FC22gV%2B9MM8lUM9IIdYGOvC%2BxQh3dhj3xzkbtcd4ZDeaun5atPv35YtiIvA5t2RcbT5hdjjRzuvp71cB5kB2wp1igg%2BjEVFPjrXo8XRKetOt7TkpYgfbFD%2FREQsm8dkSCWNCLVXCJDEr05FFkoTWQwyeNi7P%2F08hFIemjxqCtjr7w%2FFUWgg0Cv9t4HMPuN7b8GOqUB4TWYRG2fA0SU3o1DWwE12nbNIPkDKoZKB6ZmyN92pu4hugaWDtRdNCIB2EdqmOx4sQzmMv%2BnpQOWu6YVK5qbXRFVstlZZCDEEEcLboc5yE9iydOnUPLQucMywxSTEYyq3uIHu8phE71yC2Xpj1B65a09Qdd6iBsFlGt9c54QwL%2BfVuL7to%2FjLs4fgJ4QD9C9uMeiSks%2BOqwO9JFxTCjSBMUVtk%2Fa&X-Amz-Signature=a3b99039631c3a21be2df327444853246d9d0cd2ff860a7f587de319e113fecd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TACIAP5%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDcfd2MeENT8hkBuJ9P3bbKQvArkbXXWUkv5CmSwxeMPQIhAK14rBD3HjUIlfftlIw6bZAt3pCnv8VRzwic9vxyyeQlKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzh1AxCtWWKwTnqafQq3AP8pd2VqXz5UvOKpqcm5hqONpqxJZeFEIMQLQyPjP2wcoFC5j9GWf9Jzf1kaCaqfK%2FHptFE6AQwm0q5vqMOzhU58K%2FUYEV4%2B%2FzOSR7tlqIngqKRIp1bnY0AtmeROHkjKxIopFBzM3YiZxlPI8J03wgEMumR8diezKKeWv7SqOYA8ev%2Bsjqf8wpNklXBHd5fCpLKyjXjgcTUKp%2BEk8WQ4425RZxgbn17hx94lH36usDixgUFunG2UfPvORsGvnpKHDnDujIifC9T7nAnWcQUb3lKQTQVSMXCx0u5HlD%2FWiI3eLHB0n4s23ghqi7KFDFMZpi9r7aleNmTv%2FsiamYRqTFygm81le5hA5cZ2u5FqvxekR91StI6MmBRIHMLHmSM0VPxVdAht3p47cczOyN4NnaX%2BIvLlHnu%2Be3FJbTgL5ufPSvnuuEYIE0R9127%2BrHlUc6B6zBkrFJQkayxmkAQNHmOltoXsm9oTOLEbKiXOTUB%2BFgE3sNh2MwoWp64KFBuGrdMEN9jk5NgAnLYPuoc%2BFOBs0ea8i31O%2FJGX96ptbq6DssaCfntzi19%2FFzrQs7cLJCxpWbZ1pftR%2FEr7bzEdFAyCERhbqGjYyZ2bO3%2Bw3zXkcF7OUfQ9PhRxtRhnjCvje2%2FBjqkATvYovx856bwsNkgicWzLWfKJxMNnblgYHjJ%2BewTcfXqfqi7im0XSP0%2BMbVVo6ZZCv2QYTN5PvahyllKA9sIahB0FBf7Q1rFh%2BxBEROOH%2FZ%2BDbijLgnU2QKQtdAWczIUMqAL6MWtZOaPqyxFtbG9xYzSCvtEl2YiK3K2vqt8%2BLjPtprfAMZSG8fgPErB%2BfwZH%2BtMlSysi9Lm0Bb2YXHLIqc1WGBH&X-Amz-Signature=1686c29d0bd12a0e2cc1a6b0c24a9452d5ecf11609eb9cc661dbb820c62838b2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3MA6PVC%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T061036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCoHrw3s6VmNKAwcpyVE%2F52ucA3mXBGTc0cRiz4tIL5pQIhAN3sVChZdwyC5wNrvPve1b7aGHwbbpSljPRSre%2BVkfF%2BKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwSYE0a07BriXs%2FIMq3AM559SBaIWvEppeZ0ZeaZl%2FrmKF9ogysBjtSS68vghUpzAChZzmmpCOVu7vXkVYOGVIBS%2FZUgrS%2BugYYCn%2BCZUVwcBdO5og6ZObNsgfuFU6iIXps73JVXAPe7UoeG0dqT4W6rkUTq2Wu7soinH5eEYeuben24g%2FlvA2dbBRsEZFy7vGFDY1Y%2BTvH7FkiqJJtcK%2FGs5uWFKJ%2FurqbGqReWLW2M%2B1B%2FvxGRV116ai94KYDA1X7fXu%2B%2B%2BS%2BcsbABapyOYK9%2F5PV98JneeT7q5HCclghyzUYabxbgxJCJRguUFI1Eo7f8Nt2e0SnoBf7ElrdfGfAb%2FvDuuTzYFvPp9wMkiNnQJDj0hNsFGY8JBeA3DAqB6znRQoSvoIpIO9vb8io9TxWWZzkD1Lo%2BJSgDSVVknLj1heX%2BPMdLVgLFap52kInt4b4oEgjOnZ5tG4MzXK7603HK1gndqPq0ak%2B5RlpAylhTxrEtVw6obqXrVIeXnnWeWAq9bIY8BpoaWSb1nfgBCrq%2BKNZAIsKGgCPTarcNaGMUsY%2FAQaLYOuaGnbpTLwqw2Ma6dMjQlRZHuNyAU%2FZ8DfZneoh0mAdVp1l1nQOcD4NMNNeG3XH7eFQ8uONZtqyMhpOXc0YIK1kLgqqDDkje2%2FBjqkAep6P5v7LlHsrShcVMY4XeZJ4iNqtV%2B21uLeJ2Y5APJX9MU6OS6dRn4g6yYR80paGGXRLYncehSBvTUSVX7YoAJEVMyDPFVCT6ZFyrp9kYU68YUKp6DS5vpeNwPwjqjKGghltOj47LLF8mlMvQtW1LqWLmNEdkiyCwMyq%2BLKRuo8D93qAdH0PgvZfCAGmOUsXgLZzv81jVf%2FGbmNSWgePhnLsvJH&X-Amz-Signature=15f3aea94ccbc1c279e64cb908d12d82a4ca5df7388b041443257d2dedabad85&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNPSZ3JG%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T061031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDPW63Ou6jqE8Symf%2FFLon7LJarAlCD6b6yWUv33fLTpAIgAQuVSfZZGP83%2FhfGRYAnEX%2FBT8HeNXUc06KTc8VNNdAqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOZkCZxfdGeWHpctircAwZXgJV1x8dZ15Fm5yumjrhxIUAxrhxJUFH5dAgChj1Y2ZBpc21WAo78fYgXxc0TTVLFZVibDW%2BCS48A37P%2FVt%2BUWDybqTOPwI0Jo%2BixULsD5%2Fx02KL2flW5FHOnCOhMKav%2BDmIhu9RkQU1DPyZ5lCQDbVt4H3KzAQuaQBAruO9ErTDTfTaGpS%2BmwnMeQCCfBnsYhdsZlnfwxdHnmD7XYaKNPosW0Nfg2yrgaOZIV2f0OBbaxTjOhOnx5rPWsRMrkIr86onjmotPziGSATJ2n8CIJ0ALVdDHGnJuQQvmtDQtEGyFmvqgRnBuuN8nZmaySNk8kS%2B7OyNxaJv0LHwpcp0kG%2B4IHaWCKSAX%2B698AzhPGsGu8ym8B45%2FtHjg20xiR%2BbhGMQ9gTDxHuaiObdnuQ%2Fb5zv4%2FFZLLUYVg0ySLZP8js3p36TowNTam9P4sbAwo5%2FC22gV%2B9MM8lUM9IIdYGOvC%2BxQh3dhj3xzkbtcd4ZDeaun5atPv35YtiIvA5t2RcbT5hdjjRzuvp71cB5kB2wp1igg%2BjEVFPjrXo8XRKetOt7TkpYgfbFD%2FREQsm8dkSCWNCLVXCJDEr05FFkoTWQwyeNi7P%2F08hFIemjxqCtjr7w%2FFUWgg0Cv9t4HMPuN7b8GOqUB4TWYRG2fA0SU3o1DWwE12nbNIPkDKoZKB6ZmyN92pu4hugaWDtRdNCIB2EdqmOx4sQzmMv%2BnpQOWu6YVK5qbXRFVstlZZCDEEEcLboc5yE9iydOnUPLQucMywxSTEYyq3uIHu8phE71yC2Xpj1B65a09Qdd6iBsFlGt9c54QwL%2BfVuL7to%2FjLs4fgJ4QD9C9uMeiSks%2BOqwO9JFxTCjSBMUVtk%2Fa&X-Amz-Signature=3d20cd4e6ef9c59232f132d1ccb877949547f6aea1da5356e91e3297eb44284c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
