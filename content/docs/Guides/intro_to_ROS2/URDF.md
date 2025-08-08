---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2C5MFET%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDxzC1M%2F24OVhuFSzY0e%2FRXlqWzAGpR%2BMLkGfMd93hSgAIhAJ%2BrJxpxvn9BNS0GCXNT3hFfVVjSwjSW2vC0UyaGAzoBKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEGWZPEIAzBIYKMLkq3ANC8qOnrg02KG5veK8NfneA9AWStFNq9Zduok6UVUBBG0xIUF24ND9KT2c7%2Bol%2F%2BjikT%2F1CGfutjS0QnPW0GeiC6eHSykp6aOxnagxt9PDeA95dhKELqbywkalsjl%2BlFWzPQpuXJ8Uy62pJ%2FqfK7g7cG34KVI22I%2B1EdWvZs%2FhMdT671guQk7mpuB5Hes8IC6JEJP2hf6BAP7xgJEqxu8X089TwLG4j5D8%2BgCMXgAz2VTR4znsYNFLVJdqE8AszoviSLGUi3jp%2BMPB%2FXYm5eUPOGIRc4MI5rzAfgwfVmLuAXaYaAanFuIfp4wsUOv4E0Hl%2F9UkGQG9gTvfut4e8Ego8bR77sREcmAQDIh9XCR5mNVuIS%2F6OsGC9FrG9TWDqS6K9guLwZPF7aK0amE3xu1gwjly%2B0dIzw3hvN5uDL%2FGNg8RE4cPKo1A8WAYbjz355Lwxhx%2FDwmv6sFDUG5JftbtGNZOmu0hl10p1Ohr8AtfaX0hK0eFi34dd185KiZUmaPVm%2FMWNp1Ar5El73kKy1mqrLr8c3EobIFSEU%2FBtcA8CPwbwE%2BIVIBt3tC%2FqYVixspEVox3e8SBI2FwqUOIFvvMoDrzaRa2fNZ4Cc%2BOoQefLTRUyHqRzl7Ikh9%2B0VDCck9fEBjqkAYagyb5cKT7eUF8IqxTJqDZstT8EcwQQfYduA8Up1L3uqnhFtNoF7cLkjexrVooOC7CJG3KlNtUbjN%2FRWuZELT%2BE7SsV1sLEibA8nNdv4wfpxoZYY3%2Fy4X8QsEJo3a7vz4uEto3Jlful30gCnlLF2liGpszpOF7NEHpXcS6q1Tp2JK4%2Fwk8WWhZXNMQW4tobpcWsURY%2FPtByYvUXboTnYcVs2PuT&X-Amz-Signature=e8da5f4a663128cbf1d8ba88cb87b8af2d152342a2c4b54fd4142a6367b6729d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2C5MFET%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDxzC1M%2F24OVhuFSzY0e%2FRXlqWzAGpR%2BMLkGfMd93hSgAIhAJ%2BrJxpxvn9BNS0GCXNT3hFfVVjSwjSW2vC0UyaGAzoBKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEGWZPEIAzBIYKMLkq3ANC8qOnrg02KG5veK8NfneA9AWStFNq9Zduok6UVUBBG0xIUF24ND9KT2c7%2Bol%2F%2BjikT%2F1CGfutjS0QnPW0GeiC6eHSykp6aOxnagxt9PDeA95dhKELqbywkalsjl%2BlFWzPQpuXJ8Uy62pJ%2FqfK7g7cG34KVI22I%2B1EdWvZs%2FhMdT671guQk7mpuB5Hes8IC6JEJP2hf6BAP7xgJEqxu8X089TwLG4j5D8%2BgCMXgAz2VTR4znsYNFLVJdqE8AszoviSLGUi3jp%2BMPB%2FXYm5eUPOGIRc4MI5rzAfgwfVmLuAXaYaAanFuIfp4wsUOv4E0Hl%2F9UkGQG9gTvfut4e8Ego8bR77sREcmAQDIh9XCR5mNVuIS%2F6OsGC9FrG9TWDqS6K9guLwZPF7aK0amE3xu1gwjly%2B0dIzw3hvN5uDL%2FGNg8RE4cPKo1A8WAYbjz355Lwxhx%2FDwmv6sFDUG5JftbtGNZOmu0hl10p1Ohr8AtfaX0hK0eFi34dd185KiZUmaPVm%2FMWNp1Ar5El73kKy1mqrLr8c3EobIFSEU%2FBtcA8CPwbwE%2BIVIBt3tC%2FqYVixspEVox3e8SBI2FwqUOIFvvMoDrzaRa2fNZ4Cc%2BOoQefLTRUyHqRzl7Ikh9%2B0VDCck9fEBjqkAYagyb5cKT7eUF8IqxTJqDZstT8EcwQQfYduA8Up1L3uqnhFtNoF7cLkjexrVooOC7CJG3KlNtUbjN%2FRWuZELT%2BE7SsV1sLEibA8nNdv4wfpxoZYY3%2Fy4X8QsEJo3a7vz4uEto3Jlful30gCnlLF2liGpszpOF7NEHpXcS6q1Tp2JK4%2Fwk8WWhZXNMQW4tobpcWsURY%2FPtByYvUXboTnYcVs2PuT&X-Amz-Signature=f9799b4ebebd0ac015dc412137593e82c89641741c4a369b00f302702b41be7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
