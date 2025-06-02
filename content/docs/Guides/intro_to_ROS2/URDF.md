---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2024-12-03T18:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2024-12-03T18:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 148
toc: false
icon: ""
---

## Setup

clone this repo into an existing workspace:
`git clone https://github.com/joshnewans/my_bot.git`

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf](https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYNBJMYX%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCICqn29R2lK3wdmvsAlhlEdvBhINQXB%2FbcGbCuMpvIJ98AiBEh3LUqn9KrNZNp9R21Bf8KNaVInvz%2F5e%2BGpyDwMTaFCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTcFKCOPqkxvCe7WhKtwDeFhswfY0uYQpz4elM1HjqCarHdRbhY%2Bj0Kyt8SgqrFePiPeqgZFvSSgW42LCH4X6mr%2Fn5VKEhDj%2BMIeS5s2H5w%2B0lInVIkCZL3ur%2BHkXaD8lBrJbQvi%2BV5QRsQ0i9gW7uFqd%2F0EFja2mGiQ94KtjFpNpq4i4fNxnu8tK5%2F6QcwPpAJlTMJR1YlYczhhJ4KdXTp41hWvNh7ndIJxxVl16f%2BGQvzQnKFw93jIIhe7Tfygdd7%2FfZb%2B1YFGWkGN1u5hq48XaP6wSZDW9dSmhFiNgB9l59c4H8WKjb2hkaFGvbhL9kcHw9%2BauTCVenyUmJ1CEkuwrGxut1q8OeSyJeX1s6pe6hKwA1nz5cYo6xAYAY4mSSL1SJH7MI0a7VCQFT%2Bt2DAJpVNFaLyJihltoS4X3x6zVcScrTlm2TQc%2B7%2FWMJlS0f47ZEvnd5A%2F9Z9tdTqcdNr4rEGz01KvHmOqs%2BZzjLH8QpKnNoaR8neQh0h2JkI9Sh8UeM6u12SOLY3TGkoE8RIOYBdlLzksckNBe3NHTXF%2FXf139zSUtd136ewpytGad5SssuaMl7Lwb%2FgwoSYB2s65sjY8V0ta5JAdRgSDj2ApHiyb9iUfrmf%2Fflgv8FgJPJWatYEHSfYrRJMsw4LL3wQY6pgEglvsv8oGR6dB4YpTAGiPCbZ2iBD0KT9%2B0A8hDkDUm6dJPlQyeqQodLlpDIS%2FHFcTewmFRQrYIp0EkUT4KwG4XCM%2Bp%2BqSQuq%2FbR8E85RzqVqs1TLHGtLyAypoZaDao11BIOQMCC3svUdA1eQ1wfriYofRISF6AWWYM5%2FCz%2BdAIXcNyjnEqDIkAcfAg5uYhVAsTaYU79XM0itfAVaghLBFXZpsLJttV&X-Amz-Signature=1748e4b1589d53666d885feb57eb85a8b440d8a09ceb19a476070ea7e5860999&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYNBJMYX%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCICqn29R2lK3wdmvsAlhlEdvBhINQXB%2FbcGbCuMpvIJ98AiBEh3LUqn9KrNZNp9R21Bf8KNaVInvz%2F5e%2BGpyDwMTaFCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTcFKCOPqkxvCe7WhKtwDeFhswfY0uYQpz4elM1HjqCarHdRbhY%2Bj0Kyt8SgqrFePiPeqgZFvSSgW42LCH4X6mr%2Fn5VKEhDj%2BMIeS5s2H5w%2B0lInVIkCZL3ur%2BHkXaD8lBrJbQvi%2BV5QRsQ0i9gW7uFqd%2F0EFja2mGiQ94KtjFpNpq4i4fNxnu8tK5%2F6QcwPpAJlTMJR1YlYczhhJ4KdXTp41hWvNh7ndIJxxVl16f%2BGQvzQnKFw93jIIhe7Tfygdd7%2FfZb%2B1YFGWkGN1u5hq48XaP6wSZDW9dSmhFiNgB9l59c4H8WKjb2hkaFGvbhL9kcHw9%2BauTCVenyUmJ1CEkuwrGxut1q8OeSyJeX1s6pe6hKwA1nz5cYo6xAYAY4mSSL1SJH7MI0a7VCQFT%2Bt2DAJpVNFaLyJihltoS4X3x6zVcScrTlm2TQc%2B7%2FWMJlS0f47ZEvnd5A%2F9Z9tdTqcdNr4rEGz01KvHmOqs%2BZzjLH8QpKnNoaR8neQh0h2JkI9Sh8UeM6u12SOLY3TGkoE8RIOYBdlLzksckNBe3NHTXF%2FXf139zSUtd136ewpytGad5SssuaMl7Lwb%2FgwoSYB2s65sjY8V0ta5JAdRgSDj2ApHiyb9iUfrmf%2Fflgv8FgJPJWatYEHSfYrRJMsw4LL3wQY6pgEglvsv8oGR6dB4YpTAGiPCbZ2iBD0KT9%2B0A8hDkDUm6dJPlQyeqQodLlpDIS%2FHFcTewmFRQrYIp0EkUT4KwG4XCM%2Bp%2BqSQuq%2FbR8E85RzqVqs1TLHGtLyAypoZaDao11BIOQMCC3svUdA1eQ1wfriYofRISF6AWWYM5%2FCz%2BdAIXcNyjnEqDIkAcfAg5uYhVAsTaYU79XM0itfAVaghLBFXZpsLJttV&X-Amz-Signature=742e4b8594963e8d32f44c458c261a1c20968b819f3445e0645e2cb84d98a160&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
