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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2ZRROF5%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BgDP8b9yDViiUbQSbYv4SmDrNewLl%2BZKCYZvSlHLalQIhANl7nWoAcs3JJTwiQcYD9YDtiQM6NyMn0vHUcJw6EVlyKv8DCGYQABoMNjM3NDIzMTgzODA1IgxyTpEOV5x8%2FsjQVmwq3AO7Lvk8MttqZhWGUyJtzSbcFFrkgOpJQCvwSSwdb6sriNBkg9x58hnNakGD%2FkO4HD5F9vOBbKGECyntnZeHoIt4rwMiwMS0nTWqwbf7wBFJq6iEtSLcgF%2FftrA8xjqarCUCA6%2BJuORz%2BR3XDDeuA%2F8%2FA%2FZQBw3IMS5o4h%2FTpttG6pno5cCmFw%2FirjELdp3RSqLDCWMCugmZgAqL9Y6rnlkfIvC0PWrU0V7djRMx0gJYzchVjwa8sZ%2FQ5JSOGvflRAqKN1ie1wAWvNg5lUjBRY9aVy%2Fw%2FZsiCjGK66uEAQ5U2Aj6zZZmk%2FeLaBmFXdIz5bO%2FHHdGqFe%2FN8mwbwnu6B7v7Ak5i2nKvk5rjtipMnTTTs8lSiaFcVAVYxhpM2sGtewBHkyamDZvkILeCKfBjD7b%2Ba2O1d34bImFl%2FN8slhAzgGzhZZb4cFWf%2BtOb8sDe%2BPI8Vg1jtGcetJB%2Fltdcv%2BFkwM610Hy9LeCRNI6V3NSSU2SniH9KIe62zvM73rNuszx%2BvuA8wF%2FAPDsS0blHKIc4ftZH13ZVZnSufVdCxO4RZ1yfVX%2FFj4I03OTk5M6LoQXXZ%2Bw3hmEPipFphOMqu%2BdhnyyiSQOcFv8b0hFwf66McHReevwqvr25d3fzDD70IXABjqkAYd1U255cUZJFM46Gm1tb15GMimbY%2F9WV7y1DFkFBjFgdxKJWayXD1d1bcFHQ72h3FootwEOmLZ2TWA3XVfRj%2Fb8TTf%2FLXurIzx%2F7rX2fnmxizH1w4psJtl5GbM6y291wnOPgPzdZenKbupp81tBvh%2BnYQHIZ4ojLvS5LVahU6tm4XXX3JrnNXNIB48hrWQxtIm%2BYJHFTfOrnwGwWtQaV27OUDMo&X-Amz-Signature=ac937497c1a06f77b5eeda194c04d3413cf34dbf54986f9e75b9d579136c9e27&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2ZRROF5%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BgDP8b9yDViiUbQSbYv4SmDrNewLl%2BZKCYZvSlHLalQIhANl7nWoAcs3JJTwiQcYD9YDtiQM6NyMn0vHUcJw6EVlyKv8DCGYQABoMNjM3NDIzMTgzODA1IgxyTpEOV5x8%2FsjQVmwq3AO7Lvk8MttqZhWGUyJtzSbcFFrkgOpJQCvwSSwdb6sriNBkg9x58hnNakGD%2FkO4HD5F9vOBbKGECyntnZeHoIt4rwMiwMS0nTWqwbf7wBFJq6iEtSLcgF%2FftrA8xjqarCUCA6%2BJuORz%2BR3XDDeuA%2F8%2FA%2FZQBw3IMS5o4h%2FTpttG6pno5cCmFw%2FirjELdp3RSqLDCWMCugmZgAqL9Y6rnlkfIvC0PWrU0V7djRMx0gJYzchVjwa8sZ%2FQ5JSOGvflRAqKN1ie1wAWvNg5lUjBRY9aVy%2Fw%2FZsiCjGK66uEAQ5U2Aj6zZZmk%2FeLaBmFXdIz5bO%2FHHdGqFe%2FN8mwbwnu6B7v7Ak5i2nKvk5rjtipMnTTTs8lSiaFcVAVYxhpM2sGtewBHkyamDZvkILeCKfBjD7b%2Ba2O1d34bImFl%2FN8slhAzgGzhZZb4cFWf%2BtOb8sDe%2BPI8Vg1jtGcetJB%2Fltdcv%2BFkwM610Hy9LeCRNI6V3NSSU2SniH9KIe62zvM73rNuszx%2BvuA8wF%2FAPDsS0blHKIc4ftZH13ZVZnSufVdCxO4RZ1yfVX%2FFj4I03OTk5M6LoQXXZ%2Bw3hmEPipFphOMqu%2BdhnyyiSQOcFv8b0hFwf66McHReevwqvr25d3fzDD70IXABjqkAYd1U255cUZJFM46Gm1tb15GMimbY%2F9WV7y1DFkFBjFgdxKJWayXD1d1bcFHQ72h3FootwEOmLZ2TWA3XVfRj%2Fb8TTf%2FLXurIzx%2F7rX2fnmxizH1w4psJtl5GbM6y291wnOPgPzdZenKbupp81tBvh%2BnYQHIZ4ojLvS5LVahU6tm4XXX3JrnNXNIB48hrWQxtIm%2BYJHFTfOrnwGwWtQaV27OUDMo&X-Amz-Signature=8abc846bdf1c3f63f98c6397945d051dfeacb9b3721041d638ed15c260dba877&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
