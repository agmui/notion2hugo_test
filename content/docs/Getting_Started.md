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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MK5GB6R%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIAEr%2FL%2Fvih7kJ7SSNgpulOK0ic7hJ%2FOth0aF67jhE2uaAiBSBRINBAemDdRXLrCJSrhjxEkQodNBV4UJrsaqiXwf0Cr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM2J2uO2AYzHVCZjvIKtwDKZ7U5nYf7NXDp47Hiq93cL7mgOQyOaG0kmhLge386tzF80dBKM2DF2ZOapxWPD2XiRKchI5dHw8hVMTm6RwUr7R4eEf1%2FPPnlq9NaYqqD5N7q7CKHLJAco1YGc%2FuX4DOmVniIdm8nkph3cLslcjlhmWLf0abz0HhWqoCu8dE5SLZlbmP%2BRXS7jKV0RPstqaohfoQyesVIqsKYrg4Ppm9De8M%2BQgEoBciwGzhiTMjWnKcLqh0bpG9CXILOJfJTowIaJ7AOiaopygOeY8FDTzc8PeJEjQFp3ABsp4Q4fmU6NH%2F90kn1wNLc6lVu6H6VKicCuZ0cnnpFEI0bWDzk9j%2F4OL5Q9fbsBO5EbYNGHX0%2Fv57ZxnyNcZ9jEDhi7RPfEA3sQo0%2BcZWd304OsWV130FdOgAhrzTLX%2F%2BtaXIf1dV0g7xgtpbaN3Ms87R4QfpsxsNz81QFQjYgnetBA2zSavwe5B%2BG9oCyJMpJgy4BPjJlLZxVh4bmWcxkf5wmgfk9Zc0YhXfI68sCTrGHpfO%2FcGck4L%2Fvm0Ow4q%2BclDWIu4MqpUnpJ%2F89oGCd2RrZIywewRffxgdn9gDgMVUMllDrDr2YgJS6OW6Bi%2B5tqDxxJ7AWkeTPhijimrfYzPZRVEwmNHgwwY6pgHVSnPCOXLf0p%2F9gGQDzt05TauZd37Gqd%2BtyBP1tQSb%2FESOlGKjs1ubvqydVWDQxF%2BszuLdqwgsVqmRNK3bO6DFQSl1CphfGQCpYmtacUvQ%2FIjvygV30sLHA%2B7on1tEd4KJFy69QZcKKUV6W0bv%2Bk89ebeocELv4%2Fiaonksqb1FWdgtaIwB4zgAT3KJUnnB1MpQuCFDDpK6ISW%2FGBFj9nRhFj8pQjti&X-Amz-Signature=11a541f05eba0daa7ed84ba46e8f5d7219aa95945db84adb10011e72de7e4457&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MK5GB6R%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIAEr%2FL%2Fvih7kJ7SSNgpulOK0ic7hJ%2FOth0aF67jhE2uaAiBSBRINBAemDdRXLrCJSrhjxEkQodNBV4UJrsaqiXwf0Cr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM2J2uO2AYzHVCZjvIKtwDKZ7U5nYf7NXDp47Hiq93cL7mgOQyOaG0kmhLge386tzF80dBKM2DF2ZOapxWPD2XiRKchI5dHw8hVMTm6RwUr7R4eEf1%2FPPnlq9NaYqqD5N7q7CKHLJAco1YGc%2FuX4DOmVniIdm8nkph3cLslcjlhmWLf0abz0HhWqoCu8dE5SLZlbmP%2BRXS7jKV0RPstqaohfoQyesVIqsKYrg4Ppm9De8M%2BQgEoBciwGzhiTMjWnKcLqh0bpG9CXILOJfJTowIaJ7AOiaopygOeY8FDTzc8PeJEjQFp3ABsp4Q4fmU6NH%2F90kn1wNLc6lVu6H6VKicCuZ0cnnpFEI0bWDzk9j%2F4OL5Q9fbsBO5EbYNGHX0%2Fv57ZxnyNcZ9jEDhi7RPfEA3sQo0%2BcZWd304OsWV130FdOgAhrzTLX%2F%2BtaXIf1dV0g7xgtpbaN3Ms87R4QfpsxsNz81QFQjYgnetBA2zSavwe5B%2BG9oCyJMpJgy4BPjJlLZxVh4bmWcxkf5wmgfk9Zc0YhXfI68sCTrGHpfO%2FcGck4L%2Fvm0Ow4q%2BclDWIu4MqpUnpJ%2F89oGCd2RrZIywewRffxgdn9gDgMVUMllDrDr2YgJS6OW6Bi%2B5tqDxxJ7AWkeTPhijimrfYzPZRVEwmNHgwwY6pgHVSnPCOXLf0p%2F9gGQDzt05TauZd37Gqd%2BtyBP1tQSb%2FESOlGKjs1ubvqydVWDQxF%2BszuLdqwgsVqmRNK3bO6DFQSl1CphfGQCpYmtacUvQ%2FIjvygV30sLHA%2B7on1tEd4KJFy69QZcKKUV6W0bv%2Bk89ebeocELv4%2Fiaonksqb1FWdgtaIwB4zgAT3KJUnnB1MpQuCFDDpK6ISW%2FGBFj9nRhFj8pQjti&X-Amz-Signature=b0aaf9c25f18fa87d295be2d790c99e61d1e4d4cd52d76500bd646b45cb603c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MK5GB6R%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIAEr%2FL%2Fvih7kJ7SSNgpulOK0ic7hJ%2FOth0aF67jhE2uaAiBSBRINBAemDdRXLrCJSrhjxEkQodNBV4UJrsaqiXwf0Cr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM2J2uO2AYzHVCZjvIKtwDKZ7U5nYf7NXDp47Hiq93cL7mgOQyOaG0kmhLge386tzF80dBKM2DF2ZOapxWPD2XiRKchI5dHw8hVMTm6RwUr7R4eEf1%2FPPnlq9NaYqqD5N7q7CKHLJAco1YGc%2FuX4DOmVniIdm8nkph3cLslcjlhmWLf0abz0HhWqoCu8dE5SLZlbmP%2BRXS7jKV0RPstqaohfoQyesVIqsKYrg4Ppm9De8M%2BQgEoBciwGzhiTMjWnKcLqh0bpG9CXILOJfJTowIaJ7AOiaopygOeY8FDTzc8PeJEjQFp3ABsp4Q4fmU6NH%2F90kn1wNLc6lVu6H6VKicCuZ0cnnpFEI0bWDzk9j%2F4OL5Q9fbsBO5EbYNGHX0%2Fv57ZxnyNcZ9jEDhi7RPfEA3sQo0%2BcZWd304OsWV130FdOgAhrzTLX%2F%2BtaXIf1dV0g7xgtpbaN3Ms87R4QfpsxsNz81QFQjYgnetBA2zSavwe5B%2BG9oCyJMpJgy4BPjJlLZxVh4bmWcxkf5wmgfk9Zc0YhXfI68sCTrGHpfO%2FcGck4L%2Fvm0Ow4q%2BclDWIu4MqpUnpJ%2F89oGCd2RrZIywewRffxgdn9gDgMVUMllDrDr2YgJS6OW6Bi%2B5tqDxxJ7AWkeTPhijimrfYzPZRVEwmNHgwwY6pgHVSnPCOXLf0p%2F9gGQDzt05TauZd37Gqd%2BtyBP1tQSb%2FESOlGKjs1ubvqydVWDQxF%2BszuLdqwgsVqmRNK3bO6DFQSl1CphfGQCpYmtacUvQ%2FIjvygV30sLHA%2B7on1tEd4KJFy69QZcKKUV6W0bv%2Bk89ebeocELv4%2Fiaonksqb1FWdgtaIwB4zgAT3KJUnnB1MpQuCFDDpK6ISW%2FGBFj9nRhFj8pQjti&X-Amz-Signature=76e030d8fb5ddcd1a1f5000d4600d7fa39a7cac2c72005969f7185aabd7a8df7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626YABUXC%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDQzTX6aOtLcX1jTt%2FDA3KWuDucyPYR5uE4gH1LYncFoQIhAO87dgqJ0tk7fk6T4OcpaQzvtFxPBgzf3rwZYofOjyuEKv8DCGgQABoMNjM3NDIzMTgzODA1Igwp3LCFZcIRvpWFRBUq3ANeGsbxNmWn6l5pLuGyiUeV%2FNPDIO0PQg30OK7hX%2BuQQPPlgKTHFgSzZUzgnFl7rMv%2Fp0Wxz6xm6iifh9c90scJFDOj5iCptCrUPV1QLfXsTboKuZ5Xo96VEvBgCs2JcvwQiJsChKvOFoAtD6dmYVqJ44uu66SrpRWOQQh%2BTqPNid%2FOxqInh3mI8WSsq9c%2FWS1YZjCWEGXP5mf6BtiFzOIg9%2F5hss5m31RCicjqBLRcTsPm7QjZwfoA%2FdSujw1kIrerTUlQqoSkvJe7AEm6y1Tj%2BwCFVRDDCa7CKgPLmPKjyYCKYJ0Qj9%2FSQhK1VbCJl0Z7%2B3GxMe4nYHIidnb5R8ecuVzCIKeAbGqnoZmTic3%2FIZRHXX4MgjnGTxrVsKxJ5cPcmaiTVfh5%2FtjRc5wUBY%2B%2FRSJanAdbNb%2BgaAhbG4aMuNtf6LDxx6plM0PXMDtC3KtY7B2JPZ3creywNbCx5ROO7L5IcymBV9Ml3r0%2Bj7CpfMVsXem%2Bo8%2FIVUDpp%2FLbL%2Bxkhi4eEgmEibG1%2BihiT%2Fa0XT2YBzazqvIoYYVNjKKF37%2BF0O2jpnrkFAVKYN35OFaoXW24PMLiFbR4Kuk32%2BtJVTOR1oeQIHAGWbOhhht7icaxQnZO2FNaDv1pyzDb0ODDBjqkARd8PkvjSU2M%2FFIxHVUm9fUAzAwCXpECtBXKMZsYuqmwurLMQa0hM4ViZMM4%2FcKUBUEjlPNoPazfNofZufKzLtPwuLDCXg9DIwTpK0X3%2BjEiMdU4TzVK%2Bggek9K%2ByoFkSezbBJMeYt7f2JIBKNThugiJ2IKLSzsvYX8HRxCvHJnb79lHXik2%2B5X%2BTODk8gER2hpWwp36WG%2BJRAhy3cFOHXJCKm8A&X-Amz-Signature=fd79a29516fdaebddbd63e6d89e8b57690b6de67293ec7cdec7f01fd6cabbaaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY2DQWJ2%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIE2hbIDwxrypqSNkw11r8M9SV8qVJyocNxTvHNjH8t8TAiEAnrboQ07I3%2Bs8Xg5VI8gaXhfG%2BgjFfQtzk5ekzTzl1C8q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDKLgtgXJgxUgvZp%2FPCrcA%2FrllvYlQTylhz4V%2FZQxP9GN16raeoZHqaPsRobXI2VgM7OO0uubX4Uzi06JG7K%2FG2htPGvoHWlP2me%2F11wyn1Q3JP0juhmIyNUFaHA5tuGLQlJSwytxmhr2ef1Avg9D6wPEtu7kcNHhcZEwV%2FRxiek8dr730bWsnyPkS575%2FM11EgD%2BEND8RZl2ZY%2BDtZ2qI9d3BVXe9rbPZFRA4TFnEJVXEBVpwYvJHiSsdgxT0N38m2MqBl9ouAPGLUiPwhSdIm%2FYLC%2B5rejliRkbTHa%2FU2aX46xbvv9XMOjzLnSJcKDfQqSex8OxRgSIGnKGdHfUgyvwJC4qIEykTnyXRhUfLMMT8dB3znimLB5C40mAeF2Qxc1WnIwHkczk6PS0HF84rO5jJalTb3YlfquldFBWPfc%2B93T6GGX3ULAJSX8zK5aq06Y3g52BCaX72cEYs50opV4QIUeoxC5hoD3SQWMEnqu8Eug9KjyAEXIl1EmJD%2Be%2F%2Bmz2jGUJri9jAcYjRVZae0X2Zcdjj1DBGWHNqjY2mxq7Jt49ayfuqOFqBThiC5DRn45ntRRTM22QEyNHDbkMT5ZxFtLuQZH6z9zKUvspNODkxvVXwv5%2FvosgS6LgTgUA8HsmJgIceLhV2idoMLLR4MMGOqUBEBheAm31uQgkDA8VRPQlLE%2FJ8ACGR3UY7ZrIkYfQqrgQU2X3lnapYU3%2Bgt6GNu4tsZpgScK9iBdvBKBRxn6vDlwdfVVPxzZk3ZQR6Dcu3VJHiNlnJGXnj5qm8NF40sxeaxsOE%2FbmXFCcREOABeO2SvpgUjfEPL431wmzlduEaMUl5msj7MUkNfePcwaFVy4eMCwt4Ot%2FSLA3SkmozMxChBna3h%2B3&X-Amz-Signature=ddc2b53b1e6c28ddced880bd433a2b06c8fb50b550fe24dd19a5d7fb888788d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MK5GB6R%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIAEr%2FL%2Fvih7kJ7SSNgpulOK0ic7hJ%2FOth0aF67jhE2uaAiBSBRINBAemDdRXLrCJSrhjxEkQodNBV4UJrsaqiXwf0Cr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM2J2uO2AYzHVCZjvIKtwDKZ7U5nYf7NXDp47Hiq93cL7mgOQyOaG0kmhLge386tzF80dBKM2DF2ZOapxWPD2XiRKchI5dHw8hVMTm6RwUr7R4eEf1%2FPPnlq9NaYqqD5N7q7CKHLJAco1YGc%2FuX4DOmVniIdm8nkph3cLslcjlhmWLf0abz0HhWqoCu8dE5SLZlbmP%2BRXS7jKV0RPstqaohfoQyesVIqsKYrg4Ppm9De8M%2BQgEoBciwGzhiTMjWnKcLqh0bpG9CXILOJfJTowIaJ7AOiaopygOeY8FDTzc8PeJEjQFp3ABsp4Q4fmU6NH%2F90kn1wNLc6lVu6H6VKicCuZ0cnnpFEI0bWDzk9j%2F4OL5Q9fbsBO5EbYNGHX0%2Fv57ZxnyNcZ9jEDhi7RPfEA3sQo0%2BcZWd304OsWV130FdOgAhrzTLX%2F%2BtaXIf1dV0g7xgtpbaN3Ms87R4QfpsxsNz81QFQjYgnetBA2zSavwe5B%2BG9oCyJMpJgy4BPjJlLZxVh4bmWcxkf5wmgfk9Zc0YhXfI68sCTrGHpfO%2FcGck4L%2Fvm0Ow4q%2BclDWIu4MqpUnpJ%2F89oGCd2RrZIywewRffxgdn9gDgMVUMllDrDr2YgJS6OW6Bi%2B5tqDxxJ7AWkeTPhijimrfYzPZRVEwmNHgwwY6pgHVSnPCOXLf0p%2F9gGQDzt05TauZd37Gqd%2BtyBP1tQSb%2FESOlGKjs1ubvqydVWDQxF%2BszuLdqwgsVqmRNK3bO6DFQSl1CphfGQCpYmtacUvQ%2FIjvygV30sLHA%2B7on1tEd4KJFy69QZcKKUV6W0bv%2Bk89ebeocELv4%2Fiaonksqb1FWdgtaIwB4zgAT3KJUnnB1MpQuCFDDpK6ISW%2FGBFj9nRhFj8pQjti&X-Amz-Signature=71281d30a00dd12bfe179ef61c2b03da8699586a0a6b40948e0901926a85e1df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
