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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPTQQFJH%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T200823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW8EADvzbEnrFKHMijH9elfSWj%2B8JupIKO1qKxsWgE8QIgVNNmbO0sh8u4A1i9kPV0aekgyM%2BtqGMn4qHlUGu%2B7qYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJxV5lQfmWjKMIzg3yrcAwC85qqdFsM%2BcYP%2Fz93jcFOHND2%2B%2FqdY5inro9hZmnJi3VjkUFw4PPJ8nAGGOQ%2F4TKnxgLYbOtud3ed7cZdWJHwmj1wHChMzEj7cZfl7cL4ylujylVf1GnXvvqcKDrL%2BxBXuCrc0%2BBAAi42MJsu6s%2FihQDioZbOpQSpltZczd4DsSJl3sgCj%2BpkQ5e2CVo%2Bpmp%2BwjQdRtY6sOxWmnJNVVT%2F6%2FRNCVb0nW57%2BQcbO%2BTlnH1T7gZL5wTYGdFygKn1BGd8U8rnZfzzPMDj7UPsmTz5%2BP92d73SfQxpRbv2g%2BS3e8YnOIv5LdHeV60bJBXD%2BjIhb9lgjUtSkTg4z0Z1gPKvPCiJqda2dwT4%2F14NHpnJbHByzgCpaj4gRchmj7zQ0h6pd6Dfqe2hoMBgsc2%2BTJJbjWh%2B4b655G1MWDtPbgQydxMmJe%2Bkmzi%2FZEBv7JZZfS%2FV5RtmY5VKuTmOUU4VMFWWdbgjUrOGH1V%2B8VIYVxKvv1hjsLbbuvkKYN2z2GPdBdMhohEGxMH9Pnf%2Bz45eJUz36NV5een0yD7unQe71ZfcfhEy2aWdN3Uzb1oLvib6JM2sZySuYBW1VJNaERLC%2F1B6hPlRw7MGd1QlHehIPKfU3QOhFjnrr63mQ42OUMOON3r0GOqUB8Or53Ygr%2FtchpH3O9EGs%2FIjMcoqwDE1A63ffQRRDpO%2FNsVOJIIQymcPC2nYQOUctIeK5JkU81GRNSQvByxaaYQQCecjqWvy%2FfXvQbTEiLY2%2F7CejFaqnWizvWrnQOq9lVrsmn97bLgd09JFtwmmSGE%2F6Pb3nmPzCLZ32QI7MY4F9BiRb27ke%2FziOiR%2FjUiFk1fE4fr6JVTXCLWxJblag8OGCLTZK&X-Amz-Signature=09f755b486af4ab89238b0e0f933daa0a0bea9094c30564cc4c9d7d603b24ae1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPTQQFJH%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T200823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW8EADvzbEnrFKHMijH9elfSWj%2B8JupIKO1qKxsWgE8QIgVNNmbO0sh8u4A1i9kPV0aekgyM%2BtqGMn4qHlUGu%2B7qYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJxV5lQfmWjKMIzg3yrcAwC85qqdFsM%2BcYP%2Fz93jcFOHND2%2B%2FqdY5inro9hZmnJi3VjkUFw4PPJ8nAGGOQ%2F4TKnxgLYbOtud3ed7cZdWJHwmj1wHChMzEj7cZfl7cL4ylujylVf1GnXvvqcKDrL%2BxBXuCrc0%2BBAAi42MJsu6s%2FihQDioZbOpQSpltZczd4DsSJl3sgCj%2BpkQ5e2CVo%2Bpmp%2BwjQdRtY6sOxWmnJNVVT%2F6%2FRNCVb0nW57%2BQcbO%2BTlnH1T7gZL5wTYGdFygKn1BGd8U8rnZfzzPMDj7UPsmTz5%2BP92d73SfQxpRbv2g%2BS3e8YnOIv5LdHeV60bJBXD%2BjIhb9lgjUtSkTg4z0Z1gPKvPCiJqda2dwT4%2F14NHpnJbHByzgCpaj4gRchmj7zQ0h6pd6Dfqe2hoMBgsc2%2BTJJbjWh%2B4b655G1MWDtPbgQydxMmJe%2Bkmzi%2FZEBv7JZZfS%2FV5RtmY5VKuTmOUU4VMFWWdbgjUrOGH1V%2B8VIYVxKvv1hjsLbbuvkKYN2z2GPdBdMhohEGxMH9Pnf%2Bz45eJUz36NV5een0yD7unQe71ZfcfhEy2aWdN3Uzb1oLvib6JM2sZySuYBW1VJNaERLC%2F1B6hPlRw7MGd1QlHehIPKfU3QOhFjnrr63mQ42OUMOON3r0GOqUB8Or53Ygr%2FtchpH3O9EGs%2FIjMcoqwDE1A63ffQRRDpO%2FNsVOJIIQymcPC2nYQOUctIeK5JkU81GRNSQvByxaaYQQCecjqWvy%2FfXvQbTEiLY2%2F7CejFaqnWizvWrnQOq9lVrsmn97bLgd09JFtwmmSGE%2F6Pb3nmPzCLZ32QI7MY4F9BiRb27ke%2FziOiR%2FjUiFk1fE4fr6JVTXCLWxJblag8OGCLTZK&X-Amz-Signature=0b0f6719cbaeb565a992fd80d8c8eb0930b37a05a2bb8d40995e96facd3b96c3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD6QQ76P%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFE1pGA4tmRNoV4Csq%2FpfMbOW9FeGq6%2FsLMt1VYj7nVAiBmXzRAhvA71EBprMov3gKsswOxbfe80wSwINpmd%2BEaACqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAmnvMFK4ulq9%2BpRtKtwDQIIANgud3k92XcKxXQbvdp1f4myUNWapNKJJKwS7OYRPkvsk8irkzCk35kMl2f8iK5HjekXzhzWN9M6EUe25I03pkFRrWHDPMHx68RS5DhgIC5KkU1LVYP7kVLGLVry0p78OmremozEaWGjeI%2B5AaNZaVKkFyZ6rQ4APiayIdHNgcdSV1TNPs7VcUvbXsLVJPXspzjj3Sff%2FF4oGc1yi1Q6g5K8j9%2BSRwdZIoFYOAhQXoigb2mcfCcbq3ar6i%2Fiy1btZdCSflO18bhF2267NfFzvRgFkPX9w%2BYx9wYJh4pIE8acAeJv7%2FsOPjykUwabMJ5lv7x63pB%2FD0d%2BPWVDEJ7gpjSvFE%2BbHAL%2B7L79WgylRWPZEKkOXYs0wP0%2FqgkkBso2SRwLoH8gr9QSd30wc5JglnxTlSdkGeIvcOrvunLdr0An1Iz4a1LPLY%2FRGLrBpOON5kwoMsRkVaRidxtc7JAQ0zERW47kl3ds4%2F9g18ZWaeU3V7bctyRcUsIKjjLUDstW1N2USJKi%2F8zvBj1yV1gjGvQ4InOGjeBV31haJQLQrrnCPUXVld4BfjIJHSMrLn7qbKxw4VktbDlF4lLDxA%2BHAZCpH9OMkiQgQzPGRkSK42mToac4ArAUoyDww9I3evQY6pgGnsruMUWwanPZxJKTL%2B0cCF4a4uamCNakZcJfM698HUu42eepMC7o7dTrMjOCn6RVnrDVBl4yPQ3CrUYL6%2FKZbtZcb%2BLOvOKQ68Lzww9Jb%2FZCAJ1eGrNrJrimEfdj3DDovDjxf0j2tSUtA7ENesYeXY4RczZHQG%2FG4a8mm5NwXJwtmKBmxVBapQGcrKx2kp1F43XN7X%2F8iMuGY%2Bq7qnfVgT6w9093J&X-Amz-Signature=b63f5e0544155c76d2408c1f3f833256e55bbfa5cf1a40af1251799a0fa6f1e9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBQYO7ST%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm30nCKWs3qhrXWBr%2BdWQ6yJqwgPIgoBG7Dp0j%2Bzdz1gIgOJwmWTLx71vijWWURJQZNbOPTYUNFwa%2BMU4AWm1yvJAqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKNYbIQACQEqPtyYSrcA9hwP8fNHM%2B%2BzO4b2y%2FXUcKnW%2BA6AA6seG9dSRmUK%2FsEPy3hhvS8XEH8xUVlv3w041von3jJetvyhiTxb2GTnXxjgb8ohkAKscU9Qh754jrWUi%2BmxoWnqUMDJaUDAz7wW2%2FezUP%2B%2B5x9ccejjNO0LGxRwlACvUMAiWLZiU%2F9%2B0Lgx5PATKG9%2BQS%2FNw1nNISox%2Fe8ZicjmwvvPDlkUBL%2Brz7wvNMaHzhiSwVfJhqe8PzKFbKgco4bUeDirfIGwYhRy6F5RPDGEb2l1qt9bM2%2BKOVp624dwzxh%2BTcVBkRkqhlU4P2y%2BQT4v5g8wu9r%2BvtFvR7rOfCJqJXRRnjnGXNbadmYPGXBiIpWcXemMuMwzNSHfdexZaVvbRH2%2FOHLgQtQp1x5wYL0CeXilmsGNO1qwhdSMq2c7WKJEoo0j22F6UoBDZJDSDnLFVFt7kvrscphMsGMWPv2vZN9Z8toh1CNo5FKlKSlehg4GoNMGzvRnuJ8%2FeoirR7rXMy8YPWD8FlNy%2Ft4S7NlXe3Aex9VoBQkUFVHzoo6N7cNF1rmdCXm3cA1t7pYPTqvwWQfZqpQpPz%2B%2F4jLt5fZQfceQKcbNG4aGbAstmlJTw1RlxcQ0TcOo%2BCK6pp1idi7uq8ydjASMPKN3r0GOqUBX89H%2B%2BTEBL0EpvM3KF1QMMkh5G4BxJXnOFl17sF2KpMV4s9lEfcPZNv4tzcH8nh40xsldTNAMupTIly2cjKiUGRcg6vOGINLSACs2Vj66KpsDPuS%2F5ODNXOZqRjVImwC0CM0rLKGdLioYe4T7RcQQxHAycM8WPBS8yWTOzDvh6eZVKAm6QqGOuduUsAILIRDCbyiiP6u2rr4V0SyHwYJOL2jhFYa&X-Amz-Signature=6645dbbafcc1d00096a6882dbcd3d3f5ea302a4d3a305f3bbaf8910343ed560c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPTQQFJH%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T200823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW8EADvzbEnrFKHMijH9elfSWj%2B8JupIKO1qKxsWgE8QIgVNNmbO0sh8u4A1i9kPV0aekgyM%2BtqGMn4qHlUGu%2B7qYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJxV5lQfmWjKMIzg3yrcAwC85qqdFsM%2BcYP%2Fz93jcFOHND2%2B%2FqdY5inro9hZmnJi3VjkUFw4PPJ8nAGGOQ%2F4TKnxgLYbOtud3ed7cZdWJHwmj1wHChMzEj7cZfl7cL4ylujylVf1GnXvvqcKDrL%2BxBXuCrc0%2BBAAi42MJsu6s%2FihQDioZbOpQSpltZczd4DsSJl3sgCj%2BpkQ5e2CVo%2Bpmp%2BwjQdRtY6sOxWmnJNVVT%2F6%2FRNCVb0nW57%2BQcbO%2BTlnH1T7gZL5wTYGdFygKn1BGd8U8rnZfzzPMDj7UPsmTz5%2BP92d73SfQxpRbv2g%2BS3e8YnOIv5LdHeV60bJBXD%2BjIhb9lgjUtSkTg4z0Z1gPKvPCiJqda2dwT4%2F14NHpnJbHByzgCpaj4gRchmj7zQ0h6pd6Dfqe2hoMBgsc2%2BTJJbjWh%2B4b655G1MWDtPbgQydxMmJe%2Bkmzi%2FZEBv7JZZfS%2FV5RtmY5VKuTmOUU4VMFWWdbgjUrOGH1V%2B8VIYVxKvv1hjsLbbuvkKYN2z2GPdBdMhohEGxMH9Pnf%2Bz45eJUz36NV5een0yD7unQe71ZfcfhEy2aWdN3Uzb1oLvib6JM2sZySuYBW1VJNaERLC%2F1B6hPlRw7MGd1QlHehIPKfU3QOhFjnrr63mQ42OUMOON3r0GOqUB8Or53Ygr%2FtchpH3O9EGs%2FIjMcoqwDE1A63ffQRRDpO%2FNsVOJIIQymcPC2nYQOUctIeK5JkU81GRNSQvByxaaYQQCecjqWvy%2FfXvQbTEiLY2%2F7CejFaqnWizvWrnQOq9lVrsmn97bLgd09JFtwmmSGE%2F6Pb3nmPzCLZ32QI7MY4F9BiRb27ke%2FziOiR%2FjUiFk1fE4fr6JVTXCLWxJblag8OGCLTZK&X-Amz-Signature=817f18aef37e8ef16a00583e0672228128686adf2482041bc3dce0f70c724606&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
