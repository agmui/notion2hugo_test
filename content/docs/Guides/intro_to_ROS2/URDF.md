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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y7UTUIG%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIC32cZG9o%2B44UtxXVPLmJ1hTw1ATP7pEwctwmASFbHApAiEA7skpp3keG9HLb8C5U8MBIAUEK7ytXCIkZNzzz1EWuhIq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDOsUeR8QFwi2DZENmSrcA%2F%2BJBabQQjERC3FktbRGhH0r68YtBW2L0MMoVQs8dGPDUob9eF%2BXMOjTXbKug4Ecc0i2r9J305PsL7ouOV904oiglXwplFEtQA6AVxLu5o%2Fs56QG7Rbv9Ppk7UWOMZqddNprcIiQq4QJ3imp%2F%2FiDw%2FfcyOtXhE63wxsX%2F14af0knWxFqTVSTcjn0Sz4f9ew%2F1nIIMauiD8H%2FdTzJVuUvoeNECxLfgpTvrWtbJFbfQh8GHCgtJjm2B1Kuw2VdgVAOFoVpFmXghNO%2BI7D1anGJMvQyiFsp5MhPrugxREx6dQltYFdBnFJmsx6WSlnQnSeSBpuEcRs7L12Tk74df3rsJtsfudcOcqZ%2BQRjtXn22YRKZ84jYcXNABdMZw7N8vtGL6roXpTfAhzXBux3dSv8kCoqJo9KDbIBGRKi5kDFWYVq0wQWN2quOQhYV7s8hnlAHp70BUfm3kcIX1Qc6QY7g53HK8361ImXqOA%2B10GMZG9rc8Ecp63w%2FjKd5JBKkH%2FzVFn5PnCFK6Ox0NsX%2B0YK7SSmO5AzFiJGQMkRRhG6rIkCuEX0OpkStVqonHnOehPnT7W%2Fqp49GOSgq99wwZjq0X6UBDqaqrNV5k5R%2BlmJk95OeSqULt%2FkSPzqMErSVMOeAxsEGOqUBkSczax4qEQ9Zk14teAc4t3OjMxcJem4vrKZBxXTlk7ndtYnh6%2B%2FO%2FxGCPU5nWJ3EFy7zCiCPDIcQZ5LGfx76f5brEbuQc2jRWE57zICV8KeX2qnSFwUxRnGTRair9EK%2BAYS5bOnBbwVb3UeB7Xnf2oO%2BQjRgbWjpg0M9ZjWAPN2vA4x2nP8APQCYDLR%2BkQgxS2l3y9PgVFCjP3whwrSRnjngcjwR&X-Amz-Signature=7918aad937b2ab78791536bc4aa09eff16cf525f420b917230e1ae44e9dcecf0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y7UTUIG%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIC32cZG9o%2B44UtxXVPLmJ1hTw1ATP7pEwctwmASFbHApAiEA7skpp3keG9HLb8C5U8MBIAUEK7ytXCIkZNzzz1EWuhIq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDOsUeR8QFwi2DZENmSrcA%2F%2BJBabQQjERC3FktbRGhH0r68YtBW2L0MMoVQs8dGPDUob9eF%2BXMOjTXbKug4Ecc0i2r9J305PsL7ouOV904oiglXwplFEtQA6AVxLu5o%2Fs56QG7Rbv9Ppk7UWOMZqddNprcIiQq4QJ3imp%2F%2FiDw%2FfcyOtXhE63wxsX%2F14af0knWxFqTVSTcjn0Sz4f9ew%2F1nIIMauiD8H%2FdTzJVuUvoeNECxLfgpTvrWtbJFbfQh8GHCgtJjm2B1Kuw2VdgVAOFoVpFmXghNO%2BI7D1anGJMvQyiFsp5MhPrugxREx6dQltYFdBnFJmsx6WSlnQnSeSBpuEcRs7L12Tk74df3rsJtsfudcOcqZ%2BQRjtXn22YRKZ84jYcXNABdMZw7N8vtGL6roXpTfAhzXBux3dSv8kCoqJo9KDbIBGRKi5kDFWYVq0wQWN2quOQhYV7s8hnlAHp70BUfm3kcIX1Qc6QY7g53HK8361ImXqOA%2B10GMZG9rc8Ecp63w%2FjKd5JBKkH%2FzVFn5PnCFK6Ox0NsX%2B0YK7SSmO5AzFiJGQMkRRhG6rIkCuEX0OpkStVqonHnOehPnT7W%2Fqp49GOSgq99wwZjq0X6UBDqaqrNV5k5R%2BlmJk95OeSqULt%2FkSPzqMErSVMOeAxsEGOqUBkSczax4qEQ9Zk14teAc4t3OjMxcJem4vrKZBxXTlk7ndtYnh6%2B%2FO%2FxGCPU5nWJ3EFy7zCiCPDIcQZ5LGfx76f5brEbuQc2jRWE57zICV8KeX2qnSFwUxRnGTRair9EK%2BAYS5bOnBbwVb3UeB7Xnf2oO%2BQjRgbWjpg0M9ZjWAPN2vA4x2nP8APQCYDLR%2BkQgxS2l3y9PgVFCjP3whwrSRnjngcjwR&X-Amz-Signature=141122197b9cb16ceaa8ae05f5a11210d4679a6597d1e86bebb74d322bd4436d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
