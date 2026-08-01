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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THW2QFOD%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Xx7kJZUYomSmy3gLIQ%2B3rBXwVuhibJZIN0A69hjDNAIgJnSFNVxWhfaK0WwUj8buR1vNRrB%2FQc8UEMN34yNNtPQqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8yIvX0lthaz7MbgircA6AQOUwmKS1YZLgURUBY9URFu2qMZ3njk9V%2BRIJcbrEtCChmIgepVndnHJLzgDTXpnZ%2FPPBaEvxPpymm83VNRC%2Bwb9CB7dGAuXFHbJSsXbMcDQJZjfhEnc%2BZHFWWYYslnF37KbuudJxdvVyP8S24vTwm9OeeWUB0htW9UTkFNmth%2FxvueorlVWdHXBOF3ywmFdaIBBPW5t7sGa2ymO2D569T7CgKyc%2FIBNAFc5uR9Fc0tdrD6SjxJSGLF2dyubNKfsgilvyjgqCQmfx6oSuey3lTbFGiHomPSdqIoCJZ6gkLwUslwWNhK5wsLFBnxOmldRMsUwrYA3gZ3sNG%2Fy3l%2BSXpEiszJEQPzmCRdsyxY56rfTfXV4K0rhbMNwjfvj1v7bo7Tm6V8tjUOyrTTyle95qKidBfVcNkbUH7CQ0Kyy14m4EwVx1fqU2TELvLJwx3RDgfNVonRKneaglYK3uXPCn2FAkChHapH7Bbh3n%2BjomTKUgTLXLzscQYwXMrshLTZVel9rHyqY15BTgtWwmnkBEZAC8%2FRVvv%2BCKh6XsFTrGSWqFP0jAhDLCCBKH9ND%2F6GGD2oo%2FqKLXCfdEc9ilUN%2F3KPdfAo2tKAX1Um23tScQQeQnFzyzBTnSXBhhwMJq4tdMGOqUBlTP8htk0iO4szV4DM3thay3QmEAJyw6rAstogb7%2FaGofGftiS7btsfLkSsgv%2Bgkhz5hoezkp7yoJF8NQoVGVvKIPPdZCn2m%2BUBm2m3Fr80FYYOAhPuZYvomQ45mdl5JKJyn2P7hA8oPkuLez1SxeZ2YO%2FLjHITpIZSU7x5I3S7hZajiMzton9byel7BZOBg%2Fvh6PD%2FgIPpcbeL1djaUHEg6jZWqP&X-Amz-Signature=10eaf4884da6907eaef76721fa2dd1e72ba879bac2e94a4f6e9e829ba26df2cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THW2QFOD%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Xx7kJZUYomSmy3gLIQ%2B3rBXwVuhibJZIN0A69hjDNAIgJnSFNVxWhfaK0WwUj8buR1vNRrB%2FQc8UEMN34yNNtPQqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8yIvX0lthaz7MbgircA6AQOUwmKS1YZLgURUBY9URFu2qMZ3njk9V%2BRIJcbrEtCChmIgepVndnHJLzgDTXpnZ%2FPPBaEvxPpymm83VNRC%2Bwb9CB7dGAuXFHbJSsXbMcDQJZjfhEnc%2BZHFWWYYslnF37KbuudJxdvVyP8S24vTwm9OeeWUB0htW9UTkFNmth%2FxvueorlVWdHXBOF3ywmFdaIBBPW5t7sGa2ymO2D569T7CgKyc%2FIBNAFc5uR9Fc0tdrD6SjxJSGLF2dyubNKfsgilvyjgqCQmfx6oSuey3lTbFGiHomPSdqIoCJZ6gkLwUslwWNhK5wsLFBnxOmldRMsUwrYA3gZ3sNG%2Fy3l%2BSXpEiszJEQPzmCRdsyxY56rfTfXV4K0rhbMNwjfvj1v7bo7Tm6V8tjUOyrTTyle95qKidBfVcNkbUH7CQ0Kyy14m4EwVx1fqU2TELvLJwx3RDgfNVonRKneaglYK3uXPCn2FAkChHapH7Bbh3n%2BjomTKUgTLXLzscQYwXMrshLTZVel9rHyqY15BTgtWwmnkBEZAC8%2FRVvv%2BCKh6XsFTrGSWqFP0jAhDLCCBKH9ND%2F6GGD2oo%2FqKLXCfdEc9ilUN%2F3KPdfAo2tKAX1Um23tScQQeQnFzyzBTnSXBhhwMJq4tdMGOqUBlTP8htk0iO4szV4DM3thay3QmEAJyw6rAstogb7%2FaGofGftiS7btsfLkSsgv%2Bgkhz5hoezkp7yoJF8NQoVGVvKIPPdZCn2m%2BUBm2m3Fr80FYYOAhPuZYvomQ45mdl5JKJyn2P7hA8oPkuLez1SxeZ2YO%2FLjHITpIZSU7x5I3S7hZajiMzton9byel7BZOBg%2Fvh6PD%2FgIPpcbeL1djaUHEg6jZWqP&X-Amz-Signature=590d143d36495f0bf51584b4f82c69b2f6f54737393730b60a9c44ea5d18d43f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
