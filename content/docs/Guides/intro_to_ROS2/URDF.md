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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VMSPZZZ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCbyP8H5%2FpANG1hgG6IOCLREmTXXuiXfu7EKSLRQdrVAwIgdGiRHMEB56ixcNT34ghl1NnMzdDT4PAbd91bUP7Rj9Yq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDO%2FK3ltIsmjRnndm1ircA8cohwZ1D%2BYX%2F7zC%2FT3OvvdQPIkKbllq7xU2rgA54u78COYKfRcQiPLNPoZjvCi08OENdM38gYSQ0ZYWc9mCGVSUS7cGQZ92y1%2BHxXBT6CO9VQr3NAKSsdR1UyI0osaFaVgZR%2BypybA%2BXWArbixpSicxmnE6T7p%2FWu%2FsU2e61v7dHcIaVNt4bsKAg%2F6GOHxGMj3fLDFY9L1eDt8QxBgY5EXY44risIf1zxVjT7eE8Vnbu8aPaOmKG00W6VAuK3INZUejWwj6Onwb4IrXCdjFDmxBAPDd3BXok8lGO9icGMk0xSUtxu3clxeG2fZPBFN0JC9uj3jXRRQa6PBZ7lUTQkYZ%2FlLdDZFZdF9PVkjitJ6xJUyFimAs1cV4MSLam8NK1YLT0N9qgrKnRylENGet6T6jrxKHJxM1ZKCcABZO9ltNYI24MP5khOhfMf%2BSA2WwDOn%2BMlMU0UAt3jyge5OR8HSbo8HlD%2BYjhYeRc19W3I6nyU%2FGzHmQ5nO647%2BJ6WTOxSnWXkgfaXwFnckeEGZJLKCvqN2GyC50E4QiSq5WrGEBP6ryVpOJLiHOGAWLLYqLgfQc8VnaP7V9cjHHQPZaa8PgPWfZ75pjoVma6CnNqumE2%2FQNpM7V2kbVXinrMKj%2FuMIGOqUB2WIJJxJyXfxOULKLpKh2gbJ1wCSkyqF1dB4zkbcTeyfMm9UZlLyAWUbP7MDoAeELsWHVPJvRAWUXBpidOH2mjggGR2kS6BzI8RC7UGrYXC41k7CKQ9uVz26rLrYVhHROYf%2B4TDDNcEhO7TMhnFvJGhTG8Q0QP9pW6wPm5SP5b5QZv9td3EaavUr1qssSU52MxsaSaEunTzFIYmUg9bKOkwr3Ztip&X-Amz-Signature=db102af7084dad92f541b7988d1b4a7a7b9a990a85b29c3dbe210f8537d95264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VMSPZZZ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCbyP8H5%2FpANG1hgG6IOCLREmTXXuiXfu7EKSLRQdrVAwIgdGiRHMEB56ixcNT34ghl1NnMzdDT4PAbd91bUP7Rj9Yq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDO%2FK3ltIsmjRnndm1ircA8cohwZ1D%2BYX%2F7zC%2FT3OvvdQPIkKbllq7xU2rgA54u78COYKfRcQiPLNPoZjvCi08OENdM38gYSQ0ZYWc9mCGVSUS7cGQZ92y1%2BHxXBT6CO9VQr3NAKSsdR1UyI0osaFaVgZR%2BypybA%2BXWArbixpSicxmnE6T7p%2FWu%2FsU2e61v7dHcIaVNt4bsKAg%2F6GOHxGMj3fLDFY9L1eDt8QxBgY5EXY44risIf1zxVjT7eE8Vnbu8aPaOmKG00W6VAuK3INZUejWwj6Onwb4IrXCdjFDmxBAPDd3BXok8lGO9icGMk0xSUtxu3clxeG2fZPBFN0JC9uj3jXRRQa6PBZ7lUTQkYZ%2FlLdDZFZdF9PVkjitJ6xJUyFimAs1cV4MSLam8NK1YLT0N9qgrKnRylENGet6T6jrxKHJxM1ZKCcABZO9ltNYI24MP5khOhfMf%2BSA2WwDOn%2BMlMU0UAt3jyge5OR8HSbo8HlD%2BYjhYeRc19W3I6nyU%2FGzHmQ5nO647%2BJ6WTOxSnWXkgfaXwFnckeEGZJLKCvqN2GyC50E4QiSq5WrGEBP6ryVpOJLiHOGAWLLYqLgfQc8VnaP7V9cjHHQPZaa8PgPWfZ75pjoVma6CnNqumE2%2FQNpM7V2kbVXinrMKj%2FuMIGOqUB2WIJJxJyXfxOULKLpKh2gbJ1wCSkyqF1dB4zkbcTeyfMm9UZlLyAWUbP7MDoAeELsWHVPJvRAWUXBpidOH2mjggGR2kS6BzI8RC7UGrYXC41k7CKQ9uVz26rLrYVhHROYf%2B4TDDNcEhO7TMhnFvJGhTG8Q0QP9pW6wPm5SP5b5QZv9td3EaavUr1qssSU52MxsaSaEunTzFIYmUg9bKOkwr3Ztip&X-Amz-Signature=fc68b5b9c6c40d3256663994a3959f3028a16d9e7c73d12fb0d91b18b3cbf534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
