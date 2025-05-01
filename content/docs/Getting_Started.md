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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666URAUBFO%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC4JciMzgCyGJYqqtwerpJ%2Bziyqf64mrLuKB%2BPlYIkWmAIhAOJOq0tpJgdOu7RvqK8mYLqzhPb9SpUuz6n7LkePy1hiKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW1XgXr8VQHNvorzMq3APn%2F65WZ22bvh3%2BSLDi%2BtsvNwlBpvGVVleI3KopcslmwPcUVLrxz0vf3Cnuzq4oggvVHm0F54a6FAYDau0vob65o5n5CXN2LCGwCadcNipQvv84OMABdKqxKObVtilFOH3pyv2sToWcZ2Lmd32Ehi%2BK0w1fB90TUZ8LKAGVYoZZPjPR3%2BTglCUXTVtnuFXgC93Luw7qU7HF9eI0iPpgzyS52WAxdYRFFMgLkaCMUb2FL5J97ihtA04%2F%2FlpfG%2Ffrj2PDxAyqmOGjJNdSrCt6%2B3gwtmtRqvzwo8lz5laALNFUjDQ8pnYhD6kGy3sKJOMBHaxJvS%2Flh0hXfGwWDLYX3gKHq544gMjpe7EzEqWUwtDGyVWvs0kzpZJg%2BNMeCFc8vYYytXJAuSRRLtZl9hewW%2BNUwcWgKxMH%2FQS5tzsxS5vPLfJQAzrDRN4L%2BcLT5zXHS1PAWR6G8AHBPlba1US7WgGcXrwWBpz%2Bhjyb4Yy%2B73rryzFQRmDi92Wm%2Bi3gWgWv9IHHAReA4jLh2GTlAsml5vuZtXJFXYyHlogULwActUd5NPghODJGmxVUdvXvxxiE%2BkwOwxAb5anQRk0JVIw%2FPdYKpVmlSqBHQfVqLN7rWlnmusykDiaP34%2Bg%2Fl%2FLCDD7q8%2FABjqkAY2qV0mEQgrsPjGV0ysbGZd0SPTLYh%2Bxvjqxtz6GYYjr8zcLLxrZ5Ulk%2FEMcuRw%2FhqFgrFF6aYUrYEftXkGUKBpTftwlb4E%2FZwK7wlQOjEYF9V32cov5GGHtXWVL8r6kvOuUynS8sW2UlAmyBGI4QjprTFl3tHJDI7KJ0%2FVwXnIiePxeVEXY9iU7waDi%2B8CUdGZbykqssMEAbiOtJD4VLqn2W0KJ&X-Amz-Signature=4772532e6dcb3b0186cd0762726ffd9aedf9b2ebb7d55a14b1ff22a7700a8fe7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666URAUBFO%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC4JciMzgCyGJYqqtwerpJ%2Bziyqf64mrLuKB%2BPlYIkWmAIhAOJOq0tpJgdOu7RvqK8mYLqzhPb9SpUuz6n7LkePy1hiKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW1XgXr8VQHNvorzMq3APn%2F65WZ22bvh3%2BSLDi%2BtsvNwlBpvGVVleI3KopcslmwPcUVLrxz0vf3Cnuzq4oggvVHm0F54a6FAYDau0vob65o5n5CXN2LCGwCadcNipQvv84OMABdKqxKObVtilFOH3pyv2sToWcZ2Lmd32Ehi%2BK0w1fB90TUZ8LKAGVYoZZPjPR3%2BTglCUXTVtnuFXgC93Luw7qU7HF9eI0iPpgzyS52WAxdYRFFMgLkaCMUb2FL5J97ihtA04%2F%2FlpfG%2Ffrj2PDxAyqmOGjJNdSrCt6%2B3gwtmtRqvzwo8lz5laALNFUjDQ8pnYhD6kGy3sKJOMBHaxJvS%2Flh0hXfGwWDLYX3gKHq544gMjpe7EzEqWUwtDGyVWvs0kzpZJg%2BNMeCFc8vYYytXJAuSRRLtZl9hewW%2BNUwcWgKxMH%2FQS5tzsxS5vPLfJQAzrDRN4L%2BcLT5zXHS1PAWR6G8AHBPlba1US7WgGcXrwWBpz%2Bhjyb4Yy%2B73rryzFQRmDi92Wm%2Bi3gWgWv9IHHAReA4jLh2GTlAsml5vuZtXJFXYyHlogULwActUd5NPghODJGmxVUdvXvxxiE%2BkwOwxAb5anQRk0JVIw%2FPdYKpVmlSqBHQfVqLN7rWlnmusykDiaP34%2Bg%2Fl%2FLCDD7q8%2FABjqkAY2qV0mEQgrsPjGV0ysbGZd0SPTLYh%2Bxvjqxtz6GYYjr8zcLLxrZ5Ulk%2FEMcuRw%2FhqFgrFF6aYUrYEftXkGUKBpTftwlb4E%2FZwK7wlQOjEYF9V32cov5GGHtXWVL8r6kvOuUynS8sW2UlAmyBGI4QjprTFl3tHJDI7KJ0%2FVwXnIiePxeVEXY9iU7waDi%2B8CUdGZbykqssMEAbiOtJD4VLqn2W0KJ&X-Amz-Signature=c8e6e54e55ccc7bd2d99a2f037696945b1b669361956297e2b798f83c2194683&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666URAUBFO%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC4JciMzgCyGJYqqtwerpJ%2Bziyqf64mrLuKB%2BPlYIkWmAIhAOJOq0tpJgdOu7RvqK8mYLqzhPb9SpUuz6n7LkePy1hiKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW1XgXr8VQHNvorzMq3APn%2F65WZ22bvh3%2BSLDi%2BtsvNwlBpvGVVleI3KopcslmwPcUVLrxz0vf3Cnuzq4oggvVHm0F54a6FAYDau0vob65o5n5CXN2LCGwCadcNipQvv84OMABdKqxKObVtilFOH3pyv2sToWcZ2Lmd32Ehi%2BK0w1fB90TUZ8LKAGVYoZZPjPR3%2BTglCUXTVtnuFXgC93Luw7qU7HF9eI0iPpgzyS52WAxdYRFFMgLkaCMUb2FL5J97ihtA04%2F%2FlpfG%2Ffrj2PDxAyqmOGjJNdSrCt6%2B3gwtmtRqvzwo8lz5laALNFUjDQ8pnYhD6kGy3sKJOMBHaxJvS%2Flh0hXfGwWDLYX3gKHq544gMjpe7EzEqWUwtDGyVWvs0kzpZJg%2BNMeCFc8vYYytXJAuSRRLtZl9hewW%2BNUwcWgKxMH%2FQS5tzsxS5vPLfJQAzrDRN4L%2BcLT5zXHS1PAWR6G8AHBPlba1US7WgGcXrwWBpz%2Bhjyb4Yy%2B73rryzFQRmDi92Wm%2Bi3gWgWv9IHHAReA4jLh2GTlAsml5vuZtXJFXYyHlogULwActUd5NPghODJGmxVUdvXvxxiE%2BkwOwxAb5anQRk0JVIw%2FPdYKpVmlSqBHQfVqLN7rWlnmusykDiaP34%2Bg%2Fl%2FLCDD7q8%2FABjqkAY2qV0mEQgrsPjGV0ysbGZd0SPTLYh%2Bxvjqxtz6GYYjr8zcLLxrZ5Ulk%2FEMcuRw%2FhqFgrFF6aYUrYEftXkGUKBpTftwlb4E%2FZwK7wlQOjEYF9V32cov5GGHtXWVL8r6kvOuUynS8sW2UlAmyBGI4QjprTFl3tHJDI7KJ0%2FVwXnIiePxeVEXY9iU7waDi%2B8CUdGZbykqssMEAbiOtJD4VLqn2W0KJ&X-Amz-Signature=60293b7983fcdb4759a6fe95fbe7850d3727dc35d9ef92f090e53f8ce0ede5ac&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR37RZUS%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQD33bAc5TneMiAhx9DFtCjs672OCKerPqec5dcwmNa27QIhAL0leZZ%2BEWUOqZEmR1U7BOurLf%2BrrU%2FLsZIfG1QBacbOKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZkUZj%2Br%2BIl4Awaqsq3AO6%2BUj5zOnqMcwVZ5iXJkWBZU949kxSNALbrFA%2FGHCBaPDjqd3fyrZRzwk%2B%2B9vJJyEmJSJ3Q%2BgGgPc0wzhVT8kk%2F2nIYvC9seK4GJZIBItVFm%2FfKn1iKROW70WhbB8cmJ%2Fd5WupmiRpEhidC9uRU0quYdmVg27un8QFIijbJ3MCifkZtT%2FPpNCChyQ4BbtTVE%2BOzbHcy99GeZ1rC5bi1rlGcymQnko0FWJaSrae5nnxjHF%2Bj83zyDsO0GNq%2Fhpyr1E%2FJ6t0gClH0J2G24Iz2Pc4xbLf8VlDawpFvrlVB9PkkryvSSVqoTSOCLVyZH%2Bvj7fzXGK5mZliXLhMz4bl%2FGFWnGeeRrhI1ECFybxsC%2FAYU0SRpUJcSPzsfiU5yKji%2F7%2BocKaNzArl7wfI7QRjtN8LuXtP8wtqt6SxQKfQUHQG0Y3AWJrHYrgQR4MLxUTL0uSfy6VF3XiOUk61LwFixhmu4Q1cjwz9w2ccCydYVASuITeY9yJMFKqp%2Blp4GDzikTOxPyNzm776KUExF4rh1syGj3gbms%2Fz6zMjgES7Exkx6LHNyApl%2BRUA3gC3tzmdNhiFsNjfDkLXCqo711orRZOs1fTL35TDPyXojEjklErYwsOLdanoxakyaui2ezC%2Fq8%2FABjqkAb%2FmapW04qDKRBxlidhLOgmm9FqJjRCvT1%2FBbrHHsNXM%2FevWIKy6UYcZxEuzirG6y65%2FRb2HTzcqHAYsSYXFIMpZW4ocI82BnKgFGDRO0tJeTB%2BYlzyMj2iN2VRiEz14lZgNQWjGOun%2F7s014tvgFpk9m8LBOe%2B6z%2BSwsnuc87visq%2FTQCrKeb6Rr1ka00ZR5Wz5eXe0GItcY9%2FsyZQzZEmnDc8f&X-Amz-Signature=213ba4f1506f08294200528267b07b3f6636274d925b179eba64373e649a8a5d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGJPSGAD%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIH4WErhOTDmeNo%2BGdFmgFYgrfRZSg2DXSDyxjO1WaN5hAiEA33pXYSx55%2Bvstvb4pqj1GpL4gGfe9D9g5L%2BzUerpR4YqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIl1SayJtx3T7%2FuD9CrcAyNEy9c9b1nUY904kc7i9DHfasUn%2Fal3RxqvZtHLDiEfVsa%2BvgP3XOSJW3cxgiqtk9qwxyKjg95t7wkfyfTejr8%2B3iAP9xGwwiPl64lNZ1K58HJrRZBtg3IFVy4oG9nZYRgJFOJNSgPQXPHSxw25UQuHv0DQUGk8ByMeiUOcubCyQ0ROYp6GxsfQw9qzpfeJMfvkf28aykMrohFo5el2sSlF8rr8lGVkk2LJqNSNJE9bNAsy1bg8hR0dSi2v10eL77p2%2FUq5Y%2F%2BFIkyeFbuDxPhOYCC5kfWYd%2FvDq9Hk3FfxZtRLfefatUYw8t82UAeBZY5C4pnbAwIp4w9fFt%2BsiuovCPZk28YJ61nzlbU3Tvai%2BJbJ6xpUocw05Xr%2BVqSygv6JULWs%2B7rmm%2BjQAsOMlbf6ser8oSLfYfxv3pL3bIyKEmYakzMjQ4r0BwuP1rQRDHAfYjBA%2BNWqH7g0LCovsJA49K6NWgZvivvHo9IXj%2BJM148sVpaPjVmzzVnTseYu3VPnYRoEWwvzZxqdEP5dVdCgl2%2BTXYa5M%2FpxJMqS41BW1uWNhb9haFFq%2F1y3%2FqTafI7GM1bczi%2FxD73zZ8Gqzb9oB%2FChSLsZ2XU3wFcs47TBncvnl%2B1K2SURhyZQMJCsz8AGOqUBkQX19ZvjnzzSrG4wSutg8xd4VMELtJRg2BWGY2ihw4DLbRERhweEVAEQRLIhwj%2FCEtzRrj0puq2fZJQ6SFpdAC1O3Z44wU%2BmQ1wxJdPMV8JikgiMXplFAPG%2BHhhwXmyTUx1mDJ4h18ht35fZzNLqNN8eD7d3pkmPrB7Q4ddpcTtDEvJ89uDcUf8ae550shJK5cWP3jMoD6Xwb3eCrqBeJHALURw1&X-Amz-Signature=ac87444612d0ce1621d7691570e1bf00bcff4a7195a344b335be95b1cb4f85bb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666URAUBFO%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC4JciMzgCyGJYqqtwerpJ%2Bziyqf64mrLuKB%2BPlYIkWmAIhAOJOq0tpJgdOu7RvqK8mYLqzhPb9SpUuz6n7LkePy1hiKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW1XgXr8VQHNvorzMq3APn%2F65WZ22bvh3%2BSLDi%2BtsvNwlBpvGVVleI3KopcslmwPcUVLrxz0vf3Cnuzq4oggvVHm0F54a6FAYDau0vob65o5n5CXN2LCGwCadcNipQvv84OMABdKqxKObVtilFOH3pyv2sToWcZ2Lmd32Ehi%2BK0w1fB90TUZ8LKAGVYoZZPjPR3%2BTglCUXTVtnuFXgC93Luw7qU7HF9eI0iPpgzyS52WAxdYRFFMgLkaCMUb2FL5J97ihtA04%2F%2FlpfG%2Ffrj2PDxAyqmOGjJNdSrCt6%2B3gwtmtRqvzwo8lz5laALNFUjDQ8pnYhD6kGy3sKJOMBHaxJvS%2Flh0hXfGwWDLYX3gKHq544gMjpe7EzEqWUwtDGyVWvs0kzpZJg%2BNMeCFc8vYYytXJAuSRRLtZl9hewW%2BNUwcWgKxMH%2FQS5tzsxS5vPLfJQAzrDRN4L%2BcLT5zXHS1PAWR6G8AHBPlba1US7WgGcXrwWBpz%2Bhjyb4Yy%2B73rryzFQRmDi92Wm%2Bi3gWgWv9IHHAReA4jLh2GTlAsml5vuZtXJFXYyHlogULwActUd5NPghODJGmxVUdvXvxxiE%2BkwOwxAb5anQRk0JVIw%2FPdYKpVmlSqBHQfVqLN7rWlnmusykDiaP34%2Bg%2Fl%2FLCDD7q8%2FABjqkAY2qV0mEQgrsPjGV0ysbGZd0SPTLYh%2Bxvjqxtz6GYYjr8zcLLxrZ5Ulk%2FEMcuRw%2FhqFgrFF6aYUrYEftXkGUKBpTftwlb4E%2FZwK7wlQOjEYF9V32cov5GGHtXWVL8r6kvOuUynS8sW2UlAmyBGI4QjprTFl3tHJDI7KJ0%2FVwXnIiePxeVEXY9iU7waDi%2B8CUdGZbykqssMEAbiOtJD4VLqn2W0KJ&X-Amz-Signature=1a67c188c00b21f53fc2c1c9cf770775ace390654f7876ad26a3da3b15e803fb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
