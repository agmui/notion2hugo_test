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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSRVKCRQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDaRwZxLmdO7a9dHtby5bWa6c2WqHSEzXsHIG15%2BE1OlQIhALnV7U2uOWuxZmK5Lvin10vY29qKRyBvk6WRLPjG%2FL85Kv8DCBwQABoMNjM3NDIzMTgzODA1Igy%2FGbSD1JKY2QPQXvEq3APmpU8BBz0uPxUlSRuAEXwhAec0Rc%2ByvTw%2F%2F%2FkERQRdZXKFyOyH%2FiCm7lPfi5SWIDwWmSDtBI9G%2BTZdjSHn8QddU7Lm54v%2FgA1sBNeRRwWFK1BlHbrNxl2JNE7JoIOkTDBz4FseyMso8stmez3tCJbng4ZkSBkasW7hriepvj3ph1s8N8UPjYsME1Tw88FuhqyoT8SF9ww1BMxEZ8PoTspbsuKjlJmun2VmB0hMhN1YeVMYJqeGcbJ6ikOEu6upiFloHuWyUV7SB0oDm2HctRs0FdtWviuXYYH4oqI7Zx5tB57dMJgEh05J4%2B2SKJwiZOgRbHgqEyfPDz4SIn7uS%2FGuQN%2FqQWA27H%2FOpEli70LIX6ti%2B3YM3fJEKxj8QNuS%2BVwN0xly8l7IYNFFjz%2FTpEP5w3ox3Yr5e%2Bhn3YsZxYrBFL8BLSPryEI8bYyrREYhxecH9pPx1LvFHS94gBcEVzjo4nhf95prD6Zug%2BM0GRP4Y7AERdAVRnDSdUmIjeXdMlx6DT2bPrRtbsQgYJ5pfr6l0wE7zv8nULfZi5MirpeJeLd0IwcG40Y1hqUHkyxxG4DaR%2BMnFOge%2FMGRoGnhBnFN3uK%2Fpp1zEbA80DIQYJF1Q4FCXmgTBBhpELNovjC4hf3BBjqkARXEMu88iWV6UTnsDtP%2B4Y668sK97IiUIn9QLFotNjY575XeAGRWAKxYr3OCm3ra66g53ATPaDjTegN9Ajl2i6cH4p%2FpWvzYWjyA5NT8y%2BXE7lSNCaHsqmj7%2BxEH3W1mxZXjbpFm2o3MvRE2jTkWmvrsI8waS%2BT%2F91HYEAjdUwUP1jPwCKXhvmmrOpLWhzzB1NWLB%2BpdqVlppSGJgqdth2SEa9sA&X-Amz-Signature=9010ce302fc4e696430f1a353761be62ac29b4349aafd4ea5266c24304fee26d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSRVKCRQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDaRwZxLmdO7a9dHtby5bWa6c2WqHSEzXsHIG15%2BE1OlQIhALnV7U2uOWuxZmK5Lvin10vY29qKRyBvk6WRLPjG%2FL85Kv8DCBwQABoMNjM3NDIzMTgzODA1Igy%2FGbSD1JKY2QPQXvEq3APmpU8BBz0uPxUlSRuAEXwhAec0Rc%2ByvTw%2F%2F%2FkERQRdZXKFyOyH%2FiCm7lPfi5SWIDwWmSDtBI9G%2BTZdjSHn8QddU7Lm54v%2FgA1sBNeRRwWFK1BlHbrNxl2JNE7JoIOkTDBz4FseyMso8stmez3tCJbng4ZkSBkasW7hriepvj3ph1s8N8UPjYsME1Tw88FuhqyoT8SF9ww1BMxEZ8PoTspbsuKjlJmun2VmB0hMhN1YeVMYJqeGcbJ6ikOEu6upiFloHuWyUV7SB0oDm2HctRs0FdtWviuXYYH4oqI7Zx5tB57dMJgEh05J4%2B2SKJwiZOgRbHgqEyfPDz4SIn7uS%2FGuQN%2FqQWA27H%2FOpEli70LIX6ti%2B3YM3fJEKxj8QNuS%2BVwN0xly8l7IYNFFjz%2FTpEP5w3ox3Yr5e%2Bhn3YsZxYrBFL8BLSPryEI8bYyrREYhxecH9pPx1LvFHS94gBcEVzjo4nhf95prD6Zug%2BM0GRP4Y7AERdAVRnDSdUmIjeXdMlx6DT2bPrRtbsQgYJ5pfr6l0wE7zv8nULfZi5MirpeJeLd0IwcG40Y1hqUHkyxxG4DaR%2BMnFOge%2FMGRoGnhBnFN3uK%2Fpp1zEbA80DIQYJF1Q4FCXmgTBBhpELNovjC4hf3BBjqkARXEMu88iWV6UTnsDtP%2B4Y668sK97IiUIn9QLFotNjY575XeAGRWAKxYr3OCm3ra66g53ATPaDjTegN9Ajl2i6cH4p%2FpWvzYWjyA5NT8y%2BXE7lSNCaHsqmj7%2BxEH3W1mxZXjbpFm2o3MvRE2jTkWmvrsI8waS%2BT%2F91HYEAjdUwUP1jPwCKXhvmmrOpLWhzzB1NWLB%2BpdqVlppSGJgqdth2SEa9sA&X-Amz-Signature=d919c5fec4fe06bf0eea8dbb9a2fce5bbf7fc2befb9bc874b3264f99a160cb93&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSRVKCRQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDaRwZxLmdO7a9dHtby5bWa6c2WqHSEzXsHIG15%2BE1OlQIhALnV7U2uOWuxZmK5Lvin10vY29qKRyBvk6WRLPjG%2FL85Kv8DCBwQABoMNjM3NDIzMTgzODA1Igy%2FGbSD1JKY2QPQXvEq3APmpU8BBz0uPxUlSRuAEXwhAec0Rc%2ByvTw%2F%2F%2FkERQRdZXKFyOyH%2FiCm7lPfi5SWIDwWmSDtBI9G%2BTZdjSHn8QddU7Lm54v%2FgA1sBNeRRwWFK1BlHbrNxl2JNE7JoIOkTDBz4FseyMso8stmez3tCJbng4ZkSBkasW7hriepvj3ph1s8N8UPjYsME1Tw88FuhqyoT8SF9ww1BMxEZ8PoTspbsuKjlJmun2VmB0hMhN1YeVMYJqeGcbJ6ikOEu6upiFloHuWyUV7SB0oDm2HctRs0FdtWviuXYYH4oqI7Zx5tB57dMJgEh05J4%2B2SKJwiZOgRbHgqEyfPDz4SIn7uS%2FGuQN%2FqQWA27H%2FOpEli70LIX6ti%2B3YM3fJEKxj8QNuS%2BVwN0xly8l7IYNFFjz%2FTpEP5w3ox3Yr5e%2Bhn3YsZxYrBFL8BLSPryEI8bYyrREYhxecH9pPx1LvFHS94gBcEVzjo4nhf95prD6Zug%2BM0GRP4Y7AERdAVRnDSdUmIjeXdMlx6DT2bPrRtbsQgYJ5pfr6l0wE7zv8nULfZi5MirpeJeLd0IwcG40Y1hqUHkyxxG4DaR%2BMnFOge%2FMGRoGnhBnFN3uK%2Fpp1zEbA80DIQYJF1Q4FCXmgTBBhpELNovjC4hf3BBjqkARXEMu88iWV6UTnsDtP%2B4Y668sK97IiUIn9QLFotNjY575XeAGRWAKxYr3OCm3ra66g53ATPaDjTegN9Ajl2i6cH4p%2FpWvzYWjyA5NT8y%2BXE7lSNCaHsqmj7%2BxEH3W1mxZXjbpFm2o3MvRE2jTkWmvrsI8waS%2BT%2F91HYEAjdUwUP1jPwCKXhvmmrOpLWhzzB1NWLB%2BpdqVlppSGJgqdth2SEa9sA&X-Amz-Signature=e7ef6754c3b3878a751f171e69992c92afdf46d33cda60f61640425abf00fd9e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2TU37TV%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHMCrGl3xOp%2Fpy%2FMyX1aT%2BZxB5V8TM6KPQ%2B9Wbre5n9HAiEAz3O9UzEM76cFydSpmbOUe6SZ11qTQ%2BwQj3tJEu1twEQq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDPDUou6kL%2BAFvojTsCrcA9uwxD3L1fruDQPirIgG1emtwD8FTSxry%2F%2FEW%2BYpQ7ZwZWVnAGvJYtyf09%2Bos%2FYua2NCPBojRtBk%2BoQ5o%2Bjz78VUSxx8%2FebzOh2BeKOS1172Mjpktw3JzGQbJtsvfqeHPBVUI%2FHMw0yd09CLzaYM6fjZsp9IDekJ2Mi4oQ%2BVsmJnFkJFZ003LRTsCt37nAUDqHG6%2BJ9fZw7MSWIF0Qlfjk6h3uwQzXDBYI%2BA1u1sJjBa3GrSxu7vSolNIu3hr5hS19aW%2BvVo8%2BNmsX05%2B6WyA%2F2tjpR%2BXQ%2Fey8KPO6FOB2hYLYHV5vSj6s%2ByzOZqFTEvWRx3bwLPh4A0VPlKHJvQn%2FL6qrS2Y8Lz7424DErMPuRQj%2BJEKw5vbPdPp8BvXJQxli2i4ky1IVqOxevSNZvbfAzvFGzvJlcsfeelO8l6%2Bmu%2BcNxiObHU9I1K8FzcvmAeyNFs%2FLX1fWA%2FtBBS9kzYWWaGVRHq65dJm1fg3D%2F99EFcK%2F%2F2Jai2EAsy0IWwHkA4bCXA3F2hSMjYYzfGK1brOG8xVbN2nRJLBRYSGm0UpnmWgdO6FVgvhBlmqCfw3fmUDKAD7Bdz91Abuuu7Z1qQArD2IfZmh2DSK9abJorMTERwCxyHUMkeYwmEGKpyMM6F%2FcEGOqUB%2FPf7MYqUfJ5V4nHIBw17AhGDWn3SP26JeHMJQKD0MjVq6du4k512UDL0U262MYkzstc6E%2F0vPkf0L4cpvrZIskwGS2VXs4svkELo9lCyiC8qtoP%2BZKCL1Hu4WBGVAz%2FYpKwDOCcJEhg0PSRei5CZ94EaqaLHG7FIKhu4mILmPZDsEozbFGe%2BPpROQVSlT6SJiIVqwkCtH9xuhqfznts2gslWLHcI&X-Amz-Signature=a376dd79314ce6e01de3617bfd759d7cf25ddd66c3055eb6141d5e3213c7f2bf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQFYMX74%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIEy2lJvpUXD0kZKAhA6DP8o60do0KJ6bNkdkoTtA7H3ZAiEAwJ2ajq23G20AFPDmSPMqMJEHFFzTWhu4D7RBD11GvIsq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDI%2BnXT8YjHe26Xoq%2BSrcA6yJjRd0ZI52dVJeuJd5BPg6EnIficSxj%2BsUg4VqSRAbwrpMSFeCwDU4KMaDqOl8W50l94QUEWm6Q2PYbJ7IjB6eGZy1D09ziyqeAoGdyLRW4KLibnt0SVd8h85BFv9x%2B2PvHeALQxTRN1ftEfCq6At8nqcwNiDc2Io6BBvOx1ce%2BQkOglWJ9M2Cmabze6XJxccg0mpXnPITSA2G7hwXzUJ8wdSRpRdQlFpt69t9cfEFIZ2Hv%2FKEQw0CR8mC89q7PUnhDtZ%2FSa39IborAyzPHu2QAO%2BZp8b6mvcK4k6LVKpjMZZc%2FM%2BwWnRflM9CvIecu7ERrAagT9XB9TZVpIUxdu2%2FXhaf0tU4NuRqMIeHQXGkYeR5mHyrpVCoqfbRCRzRpL%2BwxP%2BPW8FsyQcp78i9bpgDzCNr%2BaBiWQMDyFVOUE1M7U1JhvcQ1HU1nNBbqpfwSiDY4KLYy8EnH9zHn72hI1qktpg%2Fyosn9UK0kwQN1nzzOQPIkKDCCu4pJKWhKM1fypSK36N5J9d4DYeiBfE8KLiqzyYicZktJYWP2wQp4A6CN3XzKlJI5gM2PdfXqqmEbn%2FRfR193W4mPYFGqy8aDrIrG6wohCX2bCPIIBcaQsSuUe0X8OnNlnCWK%2BciMOmF%2FcEGOqUBuNgbe3bPbni2bCv%2F%2B7AZ6WrW6B3HQpat6%2BqBZExgwGQrPXnHdS8PWMagInRcTOzYwrK2o4PNJ%2FApwO62%2BVWuNwi9VKb9%2BlMXe1BlbTXClvhpc3TWvXpiW%2F0kSk%2FpfOy7p2z0OZRPdm5Uo0xaU4ov4dvx7o6mtYZXs%2Fc5IxfUa%2BOSNcy73sGjFKgP3IwxadcmyyChvQy%2BK8cSm47j958FGFD41%2BlZ&X-Amz-Signature=b5aaadb9155687780c2055e61c82d92ca575f240aabda4f5d0ec8aa7c34300de&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSRVKCRQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDaRwZxLmdO7a9dHtby5bWa6c2WqHSEzXsHIG15%2BE1OlQIhALnV7U2uOWuxZmK5Lvin10vY29qKRyBvk6WRLPjG%2FL85Kv8DCBwQABoMNjM3NDIzMTgzODA1Igy%2FGbSD1JKY2QPQXvEq3APmpU8BBz0uPxUlSRuAEXwhAec0Rc%2ByvTw%2F%2F%2FkERQRdZXKFyOyH%2FiCm7lPfi5SWIDwWmSDtBI9G%2BTZdjSHn8QddU7Lm54v%2FgA1sBNeRRwWFK1BlHbrNxl2JNE7JoIOkTDBz4FseyMso8stmez3tCJbng4ZkSBkasW7hriepvj3ph1s8N8UPjYsME1Tw88FuhqyoT8SF9ww1BMxEZ8PoTspbsuKjlJmun2VmB0hMhN1YeVMYJqeGcbJ6ikOEu6upiFloHuWyUV7SB0oDm2HctRs0FdtWviuXYYH4oqI7Zx5tB57dMJgEh05J4%2B2SKJwiZOgRbHgqEyfPDz4SIn7uS%2FGuQN%2FqQWA27H%2FOpEli70LIX6ti%2B3YM3fJEKxj8QNuS%2BVwN0xly8l7IYNFFjz%2FTpEP5w3ox3Yr5e%2Bhn3YsZxYrBFL8BLSPryEI8bYyrREYhxecH9pPx1LvFHS94gBcEVzjo4nhf95prD6Zug%2BM0GRP4Y7AERdAVRnDSdUmIjeXdMlx6DT2bPrRtbsQgYJ5pfr6l0wE7zv8nULfZi5MirpeJeLd0IwcG40Y1hqUHkyxxG4DaR%2BMnFOge%2FMGRoGnhBnFN3uK%2Fpp1zEbA80DIQYJF1Q4FCXmgTBBhpELNovjC4hf3BBjqkARXEMu88iWV6UTnsDtP%2B4Y668sK97IiUIn9QLFotNjY575XeAGRWAKxYr3OCm3ra66g53ATPaDjTegN9Ajl2i6cH4p%2FpWvzYWjyA5NT8y%2BXE7lSNCaHsqmj7%2BxEH3W1mxZXjbpFm2o3MvRE2jTkWmvrsI8waS%2BT%2F91HYEAjdUwUP1jPwCKXhvmmrOpLWhzzB1NWLB%2BpdqVlppSGJgqdth2SEa9sA&X-Amz-Signature=32ca8096bd777f063aea1a7dff525e23f34edd747565b0034564d75bb8ed4ec1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
