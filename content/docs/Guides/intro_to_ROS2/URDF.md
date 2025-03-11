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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT6AHKBQ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIF2uUlVWRrQAUGaF%2B4i4eqPtSH%2BNCpeVMJWlfAoUqo64AiAiWaiHVQCSkWtRA%2B73z7LwlnKjxd2AnUjE9QhquZCvqyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtyU8pUy9BxS%2B9iaAKtwDf2cVcD00weAr1JqyhloLbDvynCtxiTWVncxOwVsr7TqQCKrP%2FTfZ0%2BbFxOXQoGSsx9xZCIqgGO04Y5WwUJ7RHjZvYDkEcmVKeNCI4c4qac6lJQbZeQtcTLZoSBvDMI%2BirKYVOHibkPGgJ2sQ%2BDDVjuJdtibhrZdsErmmAcpm9X%2FWF9MvMSG8Mxc%2F%2FfRXCbxvsfc4qCKKisMHZlkNx5HXCUHxkvUwrkhyZZxCylXSwZ0d5Sg0FlIeBx2x1h2V%2FdFW17GtyRkJl9Z4yVjZ0MtL2BJuCVaP6X5Req2YQgpD%2Fip2H4OobEpjQNgp%2FZTT%2BRNAxw8m9z8ogtQRWjwni5KTWPLA8GZbx52Pa2jWRU1iOSPIGDJvL1zxJ4ivsldkMT%2F%2BFVfEdoQ8L%2FBcQr6My5WMEChE9OWvD2eR0jDowhmSsNKVP%2FROFISU4VpHGXX5kp3Ad1AT3fm4WvGPaTyEJONKjVcDqMRfykictbLG55Eiq7wYQpfvFZQQ7NkokY86NMb5JRPDucFXir81izE4iUa45IRUdNjMGEfRneEIunLy%2BMfJq%2FjkaZHoys%2Fx4ckT1S%2FicC0dogICSsbxFXPdFU1HHwTYLnredLOwd8ElLKvryKxIB30B9%2Fi2dN7yeKswhYzBvgY6pgGnhWHFhs3qPj4RQPcrQwNLhYMHlUdeBEX41owmkUp%2FUmlTyx2DkOCqRqq5nBuSvyJEFgdlez7eB1tJ6GXTAcXJx0ihNyO6wbMgihMEgmB9dANPPHdOj3p9j2VCjV%2BR5%2Fxjo6byKU3JsboCdA6UZ8tcuaxBqA3CpToHLI3jY1WVHxmG76dXNjlzXY2QH17x%2Fp5lcNl1fpIOEo3XxrBvcP%2BdhOmj8VNR&X-Amz-Signature=df3b2900c97578e3307e5c1108e943d1aedc9b02784f2602890bd6bf852ba71f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT6AHKBQ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIF2uUlVWRrQAUGaF%2B4i4eqPtSH%2BNCpeVMJWlfAoUqo64AiAiWaiHVQCSkWtRA%2B73z7LwlnKjxd2AnUjE9QhquZCvqyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtyU8pUy9BxS%2B9iaAKtwDf2cVcD00weAr1JqyhloLbDvynCtxiTWVncxOwVsr7TqQCKrP%2FTfZ0%2BbFxOXQoGSsx9xZCIqgGO04Y5WwUJ7RHjZvYDkEcmVKeNCI4c4qac6lJQbZeQtcTLZoSBvDMI%2BirKYVOHibkPGgJ2sQ%2BDDVjuJdtibhrZdsErmmAcpm9X%2FWF9MvMSG8Mxc%2F%2FfRXCbxvsfc4qCKKisMHZlkNx5HXCUHxkvUwrkhyZZxCylXSwZ0d5Sg0FlIeBx2x1h2V%2FdFW17GtyRkJl9Z4yVjZ0MtL2BJuCVaP6X5Req2YQgpD%2Fip2H4OobEpjQNgp%2FZTT%2BRNAxw8m9z8ogtQRWjwni5KTWPLA8GZbx52Pa2jWRU1iOSPIGDJvL1zxJ4ivsldkMT%2F%2BFVfEdoQ8L%2FBcQr6My5WMEChE9OWvD2eR0jDowhmSsNKVP%2FROFISU4VpHGXX5kp3Ad1AT3fm4WvGPaTyEJONKjVcDqMRfykictbLG55Eiq7wYQpfvFZQQ7NkokY86NMb5JRPDucFXir81izE4iUa45IRUdNjMGEfRneEIunLy%2BMfJq%2FjkaZHoys%2Fx4ckT1S%2FicC0dogICSsbxFXPdFU1HHwTYLnredLOwd8ElLKvryKxIB30B9%2Fi2dN7yeKswhYzBvgY6pgGnhWHFhs3qPj4RQPcrQwNLhYMHlUdeBEX41owmkUp%2FUmlTyx2DkOCqRqq5nBuSvyJEFgdlez7eB1tJ6GXTAcXJx0ihNyO6wbMgihMEgmB9dANPPHdOj3p9j2VCjV%2BR5%2Fxjo6byKU3JsboCdA6UZ8tcuaxBqA3CpToHLI3jY1WVHxmG76dXNjlzXY2QH17x%2Fp5lcNl1fpIOEo3XxrBvcP%2BdhOmj8VNR&X-Amz-Signature=e84a14fb2eb21bc0801784582dafb159deca79ef9e3294a8a157cfea73fac273&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
