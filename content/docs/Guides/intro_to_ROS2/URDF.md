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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C5NUJZE%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIGG0bsHrWbrELCR2nhSrSSLu3Kvm2kOVMZ%2FyHH7PuSC4AiEAx90stYCNY1tdXP4ul26gaoceaQJvUWr%2BbL3mvAIgAwQq%2FwMIBBAAGgw2Mzc0MjMxODM4MDUiDKoSs85%2BWdVl%2FubTMyrcA1NOoF74v9X4yd0j3Plr2ZZaHl%2Bq1Jr20pzccMNRDrfgwhJOndEPAqHJaUcE3Mdo%2F2eEkKZ7vjwg3mcip27JXJhcMTZWaFDhFBSHQ19vnyyasgOlKVPjBdOKfPZOwth3raVePD75B3Rzwg4vnBzIo10EiMzcZOzstR%2BlNUHwpcTFPwaeACt%2FJIRxLE67YkDbAE5s5FKYet162OyJxbT7yFf0pEQfOTo0XNXhBFye3c6x4%2FN0T3opTWoPim7key7FBBIukTdiG8H8NglOkMADnBDqWL%2F70gt2dUXrtEVJKNBj9FfKDfcnThqdnWzEnjrnn6gT61lDcCVp%2FGVdtIcE4Bxe%2B8Y9cVN6RLJppR8a4MmiENgNSAAB%2F8YVI4EY4Fo3mco1krTrrGKFeAMZW%2B49wPHcoRXtYAA2iIPEm5gxKMYwswoN0sdFCRU4keEICIEb9X1ICHdd88gPfYDiO7rg9QCB5jmRzuQajVs4WAut6lIvSusHrjjg%2FGu8crFB4T0I9f1c21K753EY%2FZVkeCAYK5UfrbzEr0RxewMj17BTaXnmt3Z6styJ28ebsIEwRron7R3a3EPr3ZliAZhcSZOh5eZw%2FHAVyXNZZcxwKAwf1qOQDkDWn3jlTMkWwwQ%2BMM%2B8nNIGOqUBDyvEs1t7sZbn9eKsw93vhSiWq7I0VeIyBdc1kS8uJRke610qbqhQFV6kz1C8GhQ6YZEkU5nqWD4TyPfo5t2MmQcsfduoNuH3byWw7ghTsu0IGs9AoCaLXSQYvbBsqh5lEVN%2BhlIHp420%2Bd39w1kqMBUR6kLH8X6uitavllk3GQ0IcFxNMV6gdc6fazEn50VZvZBeEHVCmh22aXU4DAX9CYZN9ak9&X-Amz-Signature=b007ff20656f22321a472ebb94bc6f2c6933dfedceb6ae3a0a98a4e7618afd26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C5NUJZE%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIGG0bsHrWbrELCR2nhSrSSLu3Kvm2kOVMZ%2FyHH7PuSC4AiEAx90stYCNY1tdXP4ul26gaoceaQJvUWr%2BbL3mvAIgAwQq%2FwMIBBAAGgw2Mzc0MjMxODM4MDUiDKoSs85%2BWdVl%2FubTMyrcA1NOoF74v9X4yd0j3Plr2ZZaHl%2Bq1Jr20pzccMNRDrfgwhJOndEPAqHJaUcE3Mdo%2F2eEkKZ7vjwg3mcip27JXJhcMTZWaFDhFBSHQ19vnyyasgOlKVPjBdOKfPZOwth3raVePD75B3Rzwg4vnBzIo10EiMzcZOzstR%2BlNUHwpcTFPwaeACt%2FJIRxLE67YkDbAE5s5FKYet162OyJxbT7yFf0pEQfOTo0XNXhBFye3c6x4%2FN0T3opTWoPim7key7FBBIukTdiG8H8NglOkMADnBDqWL%2F70gt2dUXrtEVJKNBj9FfKDfcnThqdnWzEnjrnn6gT61lDcCVp%2FGVdtIcE4Bxe%2B8Y9cVN6RLJppR8a4MmiENgNSAAB%2F8YVI4EY4Fo3mco1krTrrGKFeAMZW%2B49wPHcoRXtYAA2iIPEm5gxKMYwswoN0sdFCRU4keEICIEb9X1ICHdd88gPfYDiO7rg9QCB5jmRzuQajVs4WAut6lIvSusHrjjg%2FGu8crFB4T0I9f1c21K753EY%2FZVkeCAYK5UfrbzEr0RxewMj17BTaXnmt3Z6styJ28ebsIEwRron7R3a3EPr3ZliAZhcSZOh5eZw%2FHAVyXNZZcxwKAwf1qOQDkDWn3jlTMkWwwQ%2BMM%2B8nNIGOqUBDyvEs1t7sZbn9eKsw93vhSiWq7I0VeIyBdc1kS8uJRke610qbqhQFV6kz1C8GhQ6YZEkU5nqWD4TyPfo5t2MmQcsfduoNuH3byWw7ghTsu0IGs9AoCaLXSQYvbBsqh5lEVN%2BhlIHp420%2Bd39w1kqMBUR6kLH8X6uitavllk3GQ0IcFxNMV6gdc6fazEn50VZvZBeEHVCmh22aXU4DAX9CYZN9ak9&X-Amz-Signature=35f5a9fd7e715e6b6e3bbbcb4b33aa3a6a136ed402a15581c0bc4601575f8ef0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
