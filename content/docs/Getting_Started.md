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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U45CUQTI%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNFZcr9yJawqa92yGeNpc98JgmEI6izJwHsbfbTriRYgIhAPcZM9BQmr7465707aOdG2z3a64NCn0JZBYWaJT5WaRGKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfxBLyyLfwjVKtQc0q3AOMMGi1ZX8yIw5aO%2B5GWeTtzkUvdsmsp2WlHugofrcSccr7ARetJx87yR18569nf67gLon7nUWqrBe2Aedw5QtTMMESD%2B1bcAvYOTaa0AmsGeGqIoW2gNALBlVtwYTEgHYC%2BO%2FA0ZOSoVozJ%2FxDulOEQExYoa92jkqCPnT2Yyi3hiYpF76K5iU2%2BYCZDJ4Ou%2FWt%2BTv%2BNgQyoGhlE%2BOFK1wb1YAOE%2BxKGEnQvuZnxgPWX6ZjLUb6l8xFbLO3bp%2BagUJ4PoTRNjTqiiJcPWVGx8WW8RkzkrvMMA8crVsgAzdhmn0gWV8LYS984n6i2XW3QjL9%2FIhG43QXexkCEKPckFYCYahUVyTnxrwvkzUQjDtEHWfRk%2BzbWkRFEpQUD080z8riX%2FLej5bgtykfhLdkJXCPO5axpCZxtmE5X8Oqme6qF857OzGcK4%2Fpa0ykyaHm6y%2BJXqJxbeplXU9MrmdqCxopR%2B7XqJPJt3C5Truvuqp9fk8PDqmxVi2oPdm%2Bg%2FdsTqCWj5Yrq2gsiF1fUfVfYTNrZKRelcTjgodJU9mcD6Y2%2FT26WgoqO9HbjgWwdwAp6VcszL%2BcgitplNAUYy1pPBZenwo5W8MQ4zV8dbOmgZ9wgTbx1Uiq30mBMu9vSzDl%2BPjDBjqkAUyPBhaLIv8YprGlFGIVvHQRNdu8g7ZwSwwaLHXsN%2BM7bM1PDvWonCt%2FD1%2BCgUnalKwZSYdX1dhpgw%2BXtXBI4NdF7wyiHZFSEEJEDL2KmYThpKm67MHI%2BB70x1mMJN6WuzghbxPvImaDVgRG48faID%2F41upvk1AcrwiV%2FFX%2FgJjJwcXXBR3%2F9lvU1iQccxj%2Bwrr9Q02R3bO9q7CFFmy%2BlVhSiQZO&X-Amz-Signature=792f0b8ad0f8f99029be7c1814fa6ee770ae3c3ac841038164cff5e8d08d9f8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U45CUQTI%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNFZcr9yJawqa92yGeNpc98JgmEI6izJwHsbfbTriRYgIhAPcZM9BQmr7465707aOdG2z3a64NCn0JZBYWaJT5WaRGKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfxBLyyLfwjVKtQc0q3AOMMGi1ZX8yIw5aO%2B5GWeTtzkUvdsmsp2WlHugofrcSccr7ARetJx87yR18569nf67gLon7nUWqrBe2Aedw5QtTMMESD%2B1bcAvYOTaa0AmsGeGqIoW2gNALBlVtwYTEgHYC%2BO%2FA0ZOSoVozJ%2FxDulOEQExYoa92jkqCPnT2Yyi3hiYpF76K5iU2%2BYCZDJ4Ou%2FWt%2BTv%2BNgQyoGhlE%2BOFK1wb1YAOE%2BxKGEnQvuZnxgPWX6ZjLUb6l8xFbLO3bp%2BagUJ4PoTRNjTqiiJcPWVGx8WW8RkzkrvMMA8crVsgAzdhmn0gWV8LYS984n6i2XW3QjL9%2FIhG43QXexkCEKPckFYCYahUVyTnxrwvkzUQjDtEHWfRk%2BzbWkRFEpQUD080z8riX%2FLej5bgtykfhLdkJXCPO5axpCZxtmE5X8Oqme6qF857OzGcK4%2Fpa0ykyaHm6y%2BJXqJxbeplXU9MrmdqCxopR%2B7XqJPJt3C5Truvuqp9fk8PDqmxVi2oPdm%2Bg%2FdsTqCWj5Yrq2gsiF1fUfVfYTNrZKRelcTjgodJU9mcD6Y2%2FT26WgoqO9HbjgWwdwAp6VcszL%2BcgitplNAUYy1pPBZenwo5W8MQ4zV8dbOmgZ9wgTbx1Uiq30mBMu9vSzDl%2BPjDBjqkAUyPBhaLIv8YprGlFGIVvHQRNdu8g7ZwSwwaLHXsN%2BM7bM1PDvWonCt%2FD1%2BCgUnalKwZSYdX1dhpgw%2BXtXBI4NdF7wyiHZFSEEJEDL2KmYThpKm67MHI%2BB70x1mMJN6WuzghbxPvImaDVgRG48faID%2F41upvk1AcrwiV%2FFX%2FgJjJwcXXBR3%2F9lvU1iQccxj%2Bwrr9Q02R3bO9q7CFFmy%2BlVhSiQZO&X-Amz-Signature=a70bc808ae7355b64538e8bb0d281c4d80b833d4378a03be5de437f5b4b25cc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U45CUQTI%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNFZcr9yJawqa92yGeNpc98JgmEI6izJwHsbfbTriRYgIhAPcZM9BQmr7465707aOdG2z3a64NCn0JZBYWaJT5WaRGKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfxBLyyLfwjVKtQc0q3AOMMGi1ZX8yIw5aO%2B5GWeTtzkUvdsmsp2WlHugofrcSccr7ARetJx87yR18569nf67gLon7nUWqrBe2Aedw5QtTMMESD%2B1bcAvYOTaa0AmsGeGqIoW2gNALBlVtwYTEgHYC%2BO%2FA0ZOSoVozJ%2FxDulOEQExYoa92jkqCPnT2Yyi3hiYpF76K5iU2%2BYCZDJ4Ou%2FWt%2BTv%2BNgQyoGhlE%2BOFK1wb1YAOE%2BxKGEnQvuZnxgPWX6ZjLUb6l8xFbLO3bp%2BagUJ4PoTRNjTqiiJcPWVGx8WW8RkzkrvMMA8crVsgAzdhmn0gWV8LYS984n6i2XW3QjL9%2FIhG43QXexkCEKPckFYCYahUVyTnxrwvkzUQjDtEHWfRk%2BzbWkRFEpQUD080z8riX%2FLej5bgtykfhLdkJXCPO5axpCZxtmE5X8Oqme6qF857OzGcK4%2Fpa0ykyaHm6y%2BJXqJxbeplXU9MrmdqCxopR%2B7XqJPJt3C5Truvuqp9fk8PDqmxVi2oPdm%2Bg%2FdsTqCWj5Yrq2gsiF1fUfVfYTNrZKRelcTjgodJU9mcD6Y2%2FT26WgoqO9HbjgWwdwAp6VcszL%2BcgitplNAUYy1pPBZenwo5W8MQ4zV8dbOmgZ9wgTbx1Uiq30mBMu9vSzDl%2BPjDBjqkAUyPBhaLIv8YprGlFGIVvHQRNdu8g7ZwSwwaLHXsN%2BM7bM1PDvWonCt%2FD1%2BCgUnalKwZSYdX1dhpgw%2BXtXBI4NdF7wyiHZFSEEJEDL2KmYThpKm67MHI%2BB70x1mMJN6WuzghbxPvImaDVgRG48faID%2F41upvk1AcrwiV%2FFX%2FgJjJwcXXBR3%2F9lvU1iQccxj%2Bwrr9Q02R3bO9q7CFFmy%2BlVhSiQZO&X-Amz-Signature=5adefda3a7dc014a58b96d940ebd685cd50eee0f67511dfcf933ebfc430fe2ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5THGSKG%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0ZcxoCgw1sP7e0UMbYz9K4m7YsAZBoE3amqAdSfV1FAiBtbYFjOQ4mgKUzIK4CL1aa9RRn0LZ29h8gTIdjL7E1GyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi4RdE0%2FL2JNkLzhCKtwDPCHmddzGgNweWedFvKnVWJE69VL4k0dmlBxvhd0EzL1rEt6F9pVEnIJ9SMjrdpZ5OXAMHatZq0eDXUGFFqjrogntvk0WTFP1y5RjwpiBQTGE%2F4yE2W%2F8sPgo67jlBTN5vaJkLRuwi74pBS9h2CwMwfFPyOxNLwdM9%2F0VIzEV40bDtc5LD8qUk0XoriidqQ5BONE%2F8K1v3Jzf8P6b1Vs7czVMK56ejO1K8oGXHPve5x8hEm0GsHtM6dkCwKLadbxFdPY%2B42R8X0i2airw2R7l3ttISZun9bF6hEimlFWBcV4IdBJuxZ%2FqZXz8j100u6USuj66rUOFrZnZV5pgw3i0tuFTEPzzuHZHRDnidE5A2BHL2I7AL4cNPHmSy09n7ke6lppAksGZOQis73BZZOgRTiWMUrwX74zVLRvJTFGTa7tzyK6LBKn4Hb2wN027pUkaEWuNtVrhJOCfxP3l3%2FC2ZRrlIDauJ1RX8z5yF2VTFEq7Bdsj6ybnOIt5edgQrvmi3eCEkpnk7GZGPQ7mHd1U9OKjUvzYAiFM0Yp2BM%2BXp3M8xzUbpPOre8MSaABKLdTUdZ8dPc%2BsB0bMkjbsMO12rySGFjWoS9cBHBJI0PjxpzbbPHIhhY127p4n%2Bukwrvj4wwY6pgH06FiMXXYx3Exg0C9%2FZj%2FqsYVRZhqd1voqNmPdC5lU8n1ZajtAfkdQ%2FiZclnY%2FcYgPFaE0WqFKpXavaJLiXY%2B2zSrtA211iM12PiGe%2F7hftSG5%2FRI%2BlLkEkxSonCiYiJlWu9%2Fiv%2Fiqy1t%2FUrE8CmORD77ntu478LdMBtMeyZK4W7vPI%2FkX3fR%2B4oqwxJcRmNEl%2F0Mb%2ByeD6izaX8mwNc3cOtOPVNBJ&X-Amz-Signature=5ae06883cc82de22a010bfec65fa6fc41fd8acbed7f63b87d64bc444cdf45e94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ELIENXQ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGfT5eyLOGTP6yFz8kRxwl7%2F0X0t22%2BKUl4tk7UtJtwQIhANTr2HEd%2FLIrCYjiz5NOoXdwoWUFR9aV1BFVopybV%2B5rKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2nJAEdOc1LDSItF8q3ANdRxB98m%2FQjxyvjzYmXv6Dk2CrZ9WCpZ4Kj2CWlslVS1Qk26%2FB%2Fe5DMX4ScBABfCsI3gutor%2BzNc5Bh2Sl8JuVaRhjP5jDn5QVUmbUA4kA5Bsg7KSUMnX6KerOWVKQd%2B%2BG25QGQ%2FzUzALupsbHBHHQLJ3njba0oazcWagv3vWOg157cSG2F2XPzGTXeAoB9imvqn16ybhCRa5vFb09Y%2FESVPs6O%2BTojgOKJzL8UW2fLX8fPFic863RqgCZYZV9sJyoRSCBkkTm%2BfV452jUxqIwNVzuA45qILY01%2BTt%2FL%2B2S%2FjJFyTL2HMda7nt2HinVuWBjEhvxYRNUCZD%2Bhj8IV3BUBB48D7KICc3CdZDqTeeXiMZAyGOtfm58lOV3O%2B6wBiObTeuLqDb2ncvkwHlnpq701T7ZWYc9KUPkXBt4qaLUSpjqyd2vYdfJCGaWk5EHq9WGX9eOSLuQTSPzzq7H4GoRpwzi%2BtJExLpr5l4dQdc0w166b4ZngGmWrDiJaSQldKAlyec0Ab9L9%2FesBPf4pmshxWQ2%2Fch3bYfZI6Y5NROuWh1R1qWiCCY8HbRRrf4I%2F%2FCNpfjl6gI8F0dDEkeXFmkGoXBSDbAtkcdHvwM%2FJVzHzVowZCU8%2BqLOMnK3jCG%2BfjDBjqkAVQT%2FG4eURi2bITfvNcLuJVp8t%2FxoT1ktIILmSv98Mw64IqJTraFrsOSVF%2Farul39EdQT%2BwFTKesFTaRSLSUR9W61j02JBf0awGIHX99r%2FoQw11aB%2FLEI6zdee18EpxCq7yRHUKMzgniRIwnucEhODzJNEJ5uat8%2BuVlb9kOUzdJ0kXcF43iWGWzkF4dqjMgaiokWTAIEqgkp2gQB7VKNvWl4J2w&X-Amz-Signature=321b9f63e1d21116f0d76a4f4b24b71aee09f8a5414f6705cb40cb29d8d2664a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U45CUQTI%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNFZcr9yJawqa92yGeNpc98JgmEI6izJwHsbfbTriRYgIhAPcZM9BQmr7465707aOdG2z3a64NCn0JZBYWaJT5WaRGKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfxBLyyLfwjVKtQc0q3AOMMGi1ZX8yIw5aO%2B5GWeTtzkUvdsmsp2WlHugofrcSccr7ARetJx87yR18569nf67gLon7nUWqrBe2Aedw5QtTMMESD%2B1bcAvYOTaa0AmsGeGqIoW2gNALBlVtwYTEgHYC%2BO%2FA0ZOSoVozJ%2FxDulOEQExYoa92jkqCPnT2Yyi3hiYpF76K5iU2%2BYCZDJ4Ou%2FWt%2BTv%2BNgQyoGhlE%2BOFK1wb1YAOE%2BxKGEnQvuZnxgPWX6ZjLUb6l8xFbLO3bp%2BagUJ4PoTRNjTqiiJcPWVGx8WW8RkzkrvMMA8crVsgAzdhmn0gWV8LYS984n6i2XW3QjL9%2FIhG43QXexkCEKPckFYCYahUVyTnxrwvkzUQjDtEHWfRk%2BzbWkRFEpQUD080z8riX%2FLej5bgtykfhLdkJXCPO5axpCZxtmE5X8Oqme6qF857OzGcK4%2Fpa0ykyaHm6y%2BJXqJxbeplXU9MrmdqCxopR%2B7XqJPJt3C5Truvuqp9fk8PDqmxVi2oPdm%2Bg%2FdsTqCWj5Yrq2gsiF1fUfVfYTNrZKRelcTjgodJU9mcD6Y2%2FT26WgoqO9HbjgWwdwAp6VcszL%2BcgitplNAUYy1pPBZenwo5W8MQ4zV8dbOmgZ9wgTbx1Uiq30mBMu9vSzDl%2BPjDBjqkAUyPBhaLIv8YprGlFGIVvHQRNdu8g7ZwSwwaLHXsN%2BM7bM1PDvWonCt%2FD1%2BCgUnalKwZSYdX1dhpgw%2BXtXBI4NdF7wyiHZFSEEJEDL2KmYThpKm67MHI%2BB70x1mMJN6WuzghbxPvImaDVgRG48faID%2F41upvk1AcrwiV%2FFX%2FgJjJwcXXBR3%2F9lvU1iQccxj%2Bwrr9Q02R3bO9q7CFFmy%2BlVhSiQZO&X-Amz-Signature=f504bade48c6bb5b7c297bd68f930387877d6e6f8daa074a4d80dc21d185c265&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
