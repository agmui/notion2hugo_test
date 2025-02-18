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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OFBG4IZ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCn8%2BVIyBWHV4e2%2BZc7DY8AuhObUdiLhRD%2BLaDjTLCvKQIgd1eJVZfTlWvUT%2FXAjhlTj9T9iba0wCZDG4IKjNw%2BRqoqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdIgzX0Fmg9JS64TyrcA6W7rB4RDMKN3F5%2Fu50orQX8Kl1yOXrkmy%2F7vRaDsPTLrz6OukYirVr4G5W4PT%2FIhiDYDN0IYKq5D0xaU5vV%2BRBn0Tk4P3pwShQze2JzLNKmV3Dqb%2FgqlqxIU89aOBNruuGtbEJEGKmILEJ9GT%2FLfkWCFQUIi5gYxE0K5bTw32oOfc8NWfD7tDrF2jinLeLkDCgF5HuymY8hHHsjBxSU1USoPs%2BuAEkVoJz87lkOTS2m%2BXMULx%2FKljQ18ETMsaWN1V8ZIlVt88UVC6OAJtbaZkrbORgVk9xjm5FmELa1R%2BRNPjrQIhFZOFG%2B%2BTYO3jmn4wdJfo1hroz%2BRc8WheP3DZS92vgjfkJTryHB6EMT7FVPgFYKiMqSw2WHoUhIsxJ28NQYA4ndbQFLeYOYdiOGaZ2oHCUdP3o5J5erzbu0OmPr3n5gGERXTV9eDjjBW9AMphIyAqFioh48X5os%2FbM5yueNkrRrLAkRjKU1k00LpbmsyOOI7g%2BHUT0G8dPVBmRuUHo5Ukr%2BNw602M3HtsPHfYxXQqRhayxHgNn4ORS2BXKtEzQcOPDnd4ce6C47Okq%2BbQbY1QxdZPAOpBqwbD1DCI2hlYQAFJiQYZ2yxgWOFbyLo8ZFPE1NpKS8Q6f3MKfI0L0GOqUBXDsMiBJvfmXIIwyAeETAltBWJUmtaszAszLpWmYBEbF0JItEehAlZxxNvJ5ocjTFmjfu5W4%2FRHYlk0Z7kvB3Z8OnqtESGQBE2z4VjuLsCF90lgvb3stj90aMw1yybfzazrfz3cP9Y0nO8194etdFqD2CTQe5SVbsj5DEOc%2FCkbE3Zb5uoqde97KQ5rDW3e5j8zm15nyMyPV%2Bhv5Tt%2FP11JbMiWKC&X-Amz-Signature=0b6fd8f0354b76440bb300e40968500690a0444106c4b7f30008c66b141b7919&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OFBG4IZ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCn8%2BVIyBWHV4e2%2BZc7DY8AuhObUdiLhRD%2BLaDjTLCvKQIgd1eJVZfTlWvUT%2FXAjhlTj9T9iba0wCZDG4IKjNw%2BRqoqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdIgzX0Fmg9JS64TyrcA6W7rB4RDMKN3F5%2Fu50orQX8Kl1yOXrkmy%2F7vRaDsPTLrz6OukYirVr4G5W4PT%2FIhiDYDN0IYKq5D0xaU5vV%2BRBn0Tk4P3pwShQze2JzLNKmV3Dqb%2FgqlqxIU89aOBNruuGtbEJEGKmILEJ9GT%2FLfkWCFQUIi5gYxE0K5bTw32oOfc8NWfD7tDrF2jinLeLkDCgF5HuymY8hHHsjBxSU1USoPs%2BuAEkVoJz87lkOTS2m%2BXMULx%2FKljQ18ETMsaWN1V8ZIlVt88UVC6OAJtbaZkrbORgVk9xjm5FmELa1R%2BRNPjrQIhFZOFG%2B%2BTYO3jmn4wdJfo1hroz%2BRc8WheP3DZS92vgjfkJTryHB6EMT7FVPgFYKiMqSw2WHoUhIsxJ28NQYA4ndbQFLeYOYdiOGaZ2oHCUdP3o5J5erzbu0OmPr3n5gGERXTV9eDjjBW9AMphIyAqFioh48X5os%2FbM5yueNkrRrLAkRjKU1k00LpbmsyOOI7g%2BHUT0G8dPVBmRuUHo5Ukr%2BNw602M3HtsPHfYxXQqRhayxHgNn4ORS2BXKtEzQcOPDnd4ce6C47Okq%2BbQbY1QxdZPAOpBqwbD1DCI2hlYQAFJiQYZ2yxgWOFbyLo8ZFPE1NpKS8Q6f3MKfI0L0GOqUBXDsMiBJvfmXIIwyAeETAltBWJUmtaszAszLpWmYBEbF0JItEehAlZxxNvJ5ocjTFmjfu5W4%2FRHYlk0Z7kvB3Z8OnqtESGQBE2z4VjuLsCF90lgvb3stj90aMw1yybfzazrfz3cP9Y0nO8194etdFqD2CTQe5SVbsj5DEOc%2FCkbE3Zb5uoqde97KQ5rDW3e5j8zm15nyMyPV%2Bhv5Tt%2FP11JbMiWKC&X-Amz-Signature=8a1451facd2eafb590f47d782ffc1e6f6030abb4c641b75dd6e9d02fdacd8e2d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
