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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWJSE7N%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhDdxseQvcoHJ44Khe%2Fsu%2F4AZav%2BIRVmJ48Ieuckl88AiBNRv4saDZxOy1YzpBFhM0Y92iqmD1LVRMmAwojmP1ntyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeg0pJ7HQ8tvuO%2B2mKtwDATFC8lpWA5%2FkeHaAaqkcJwlU%2F7QZKKj1WNlH7ogOn%2B%2FbMNQ5KuK5kFxUbU%2FTrTqxfwOpkJNMxO3OTMC%2BLscC1g14Xq0ceiOcZ2Y4bNiW3EwXpVtl4H9LvmaTckOcOJpp7k5r%2Bv7qS5SARnPQGwpj1R4Q0f4xPFnRFcwH%2BRIQ6iMWfNxJnv7P6q9ODQQO9HR5IlciAc7%2BuC9jMMIZSafBehEeWMX0tGF83%2B2NvKk96JyFGpn9Kc4Ht7o76n%2FdxlAi0IWJfjrFI9LAKF23yLSyLGHVaYuBAkYUM0hVd4HwbQAHIcRZGjZ4xgHseBAPaaEwS1JbegWWTqnFnQNn7%2BJtuB5OMfYLf2HcA%2F9CymQIMXQ0br%2BRRH5Bl90qYARi9lbD3%2BpCtMWiXZrDNLCXP5GKuOQwZyWKUihKXdq8ec5SjCsk9jnjS0Acs62B2R%2BBNAvSRWZhCPDwFppKLqmBZ5NH9i%2BkB%2BgXWa8M2pX3dPp4V6J3EeVuPcTtlJ5XLWg35HmCPPYUIXkg2dJJw42cqjcTL4G1D%2FyflhD3DNHhUR3ajUgToocgKOeWqgtfZHNxLKKTWOMebiPe%2B319mM7NJ3hUBQDO%2BBm4HyExJ51RzAgzn%2FMw0wiX7z%2FhelmWn8wwtL6gwgY6pgEtXRZiKpwp9Pv5gPLsHWpeZOw1Dg8A1P6fVyxP9W5Qy%2FC1Su0J0vm0oOzdxKxgIeaRHNkBEnkeyydv32IcR%2BZH54jHYdjG4baolmrqHAaCR2CjmmAKeVusBwuL5FCplKNR%2FU7hxy%2FF0MvQnRXr09C%2FyPaNqKHIU9f5M5l2M2iI%2Fcw%2FpeZFKlw5cEzx3XcURGzhVDXMmG2x0EyqBeJ76r7ZnF4tLuo3&X-Amz-Signature=208c99b5dafdf51df9a173c5eb768e285e3a2b54b352d07c0e4827ea701c9438&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEWJSE7N%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhDdxseQvcoHJ44Khe%2Fsu%2F4AZav%2BIRVmJ48Ieuckl88AiBNRv4saDZxOy1YzpBFhM0Y92iqmD1LVRMmAwojmP1ntyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeg0pJ7HQ8tvuO%2B2mKtwDATFC8lpWA5%2FkeHaAaqkcJwlU%2F7QZKKj1WNlH7ogOn%2B%2FbMNQ5KuK5kFxUbU%2FTrTqxfwOpkJNMxO3OTMC%2BLscC1g14Xq0ceiOcZ2Y4bNiW3EwXpVtl4H9LvmaTckOcOJpp7k5r%2Bv7qS5SARnPQGwpj1R4Q0f4xPFnRFcwH%2BRIQ6iMWfNxJnv7P6q9ODQQO9HR5IlciAc7%2BuC9jMMIZSafBehEeWMX0tGF83%2B2NvKk96JyFGpn9Kc4Ht7o76n%2FdxlAi0IWJfjrFI9LAKF23yLSyLGHVaYuBAkYUM0hVd4HwbQAHIcRZGjZ4xgHseBAPaaEwS1JbegWWTqnFnQNn7%2BJtuB5OMfYLf2HcA%2F9CymQIMXQ0br%2BRRH5Bl90qYARi9lbD3%2BpCtMWiXZrDNLCXP5GKuOQwZyWKUihKXdq8ec5SjCsk9jnjS0Acs62B2R%2BBNAvSRWZhCPDwFppKLqmBZ5NH9i%2BkB%2BgXWa8M2pX3dPp4V6J3EeVuPcTtlJ5XLWg35HmCPPYUIXkg2dJJw42cqjcTL4G1D%2FyflhD3DNHhUR3ajUgToocgKOeWqgtfZHNxLKKTWOMebiPe%2B319mM7NJ3hUBQDO%2BBm4HyExJ51RzAgzn%2FMw0wiX7z%2FhelmWn8wwtL6gwgY6pgEtXRZiKpwp9Pv5gPLsHWpeZOw1Dg8A1P6fVyxP9W5Qy%2FC1Su0J0vm0oOzdxKxgIeaRHNkBEnkeyydv32IcR%2BZH54jHYdjG4baolmrqHAaCR2CjmmAKeVusBwuL5FCplKNR%2FU7hxy%2FF0MvQnRXr09C%2FyPaNqKHIU9f5M5l2M2iI%2Fcw%2FpeZFKlw5cEzx3XcURGzhVDXMmG2x0EyqBeJ76r7ZnF4tLuo3&X-Amz-Signature=744c499a40fd6382c5f2dd196624551764f90226873c73c91ba1a8b1369f16ad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
