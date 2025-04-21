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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDQGDIXB%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDB9PoBzWo%2By6rkBlQeEeqc6Az%2BZ5AQNQQZtvOSh%2FCLrAIgLnrTChay8EmwkEfLkoAv5cgmlcJWePc0%2B7HprOyz%2BVcqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCepFFeT2sjVYQx0uyrcA%2BEOQj1cmIOigtt0%2BzFdWc8QGKwg%2Fl5nBc3huIv6skBKcctMNqVuz8hf2K8Y1gLc4GFwL3ZO5ca4Et%2BfQ3SESpFk00039%2Foqs4b9hjKzRalnlEZ3hGm5mqcifUiRKHDpNsaMTZIXOxdjAKfhDrnNtvOXJ7yW0eKtYdtpRi5fNcqp12lKscD2dCBsHueRn9WXu6qkaxSCrgG7f03IAQTIjHGl05bq28dc81kp8CkHDxew%2FQcuoVzz%2FfwPwQs5CY%2F4%2BLHMfaw52XN4wby6fT%2FEAuV6atgLbFDoo6vDZpp49S8EDqCrcnCOGtYl6EPu2dJuxv9fkW0IfLzHQAfIEieNKO6TCsQl0Yzp3tCvT4498kX21eYBxHMeKZbpgVmgHc%2FxR%2FYZoRA3bA4cjqZMpOru3VrnKQaC7BlmZ%2FzcQZu6ICv0PDqWLH215HNBqxQnsron6SUB5FtjRxQ41IvnSgjRsySl7XWVT88QG8c2At72OXUei7u3mHfxRLUft77NeYv6HRLxvNVuJk2Nz96ep23KsdlU4kLcpvf%2BgJnWc%2BeC3R9Ql9885hoycc9zwP6WEMWhxvn23lfrIcWMk%2FPSeu4fs99rHg3PKjNU0E%2BYNbXl91BVnY%2FTrzCty4RJCDeGMIvumsAGOqUBvb5YHkftcc3dtw69IITKCOp5IsisZKugmEy42SUsmPijM%2FBZ2AsVtwqZuWhcVirKHyH2cd4wRBsDXx3mdTn5Uwwfj1LMjbiUn4HnxvyQdJiYBap1jb9lAZzr1EZCnAL%2B1YTuwS%2B6dXxo2TZjt0pOkuruMr2BsPRXXqky21UfYInTe8sM805gHUji3XsjKYrbPLETnZxNgJ49UJVfc5nOO%2BGMIVAn&X-Amz-Signature=63b74d28ede87f496de4d715f8dc603908edc1ac4f451aef1071d368cbb08605&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDQGDIXB%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDB9PoBzWo%2By6rkBlQeEeqc6Az%2BZ5AQNQQZtvOSh%2FCLrAIgLnrTChay8EmwkEfLkoAv5cgmlcJWePc0%2B7HprOyz%2BVcqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCepFFeT2sjVYQx0uyrcA%2BEOQj1cmIOigtt0%2BzFdWc8QGKwg%2Fl5nBc3huIv6skBKcctMNqVuz8hf2K8Y1gLc4GFwL3ZO5ca4Et%2BfQ3SESpFk00039%2Foqs4b9hjKzRalnlEZ3hGm5mqcifUiRKHDpNsaMTZIXOxdjAKfhDrnNtvOXJ7yW0eKtYdtpRi5fNcqp12lKscD2dCBsHueRn9WXu6qkaxSCrgG7f03IAQTIjHGl05bq28dc81kp8CkHDxew%2FQcuoVzz%2FfwPwQs5CY%2F4%2BLHMfaw52XN4wby6fT%2FEAuV6atgLbFDoo6vDZpp49S8EDqCrcnCOGtYl6EPu2dJuxv9fkW0IfLzHQAfIEieNKO6TCsQl0Yzp3tCvT4498kX21eYBxHMeKZbpgVmgHc%2FxR%2FYZoRA3bA4cjqZMpOru3VrnKQaC7BlmZ%2FzcQZu6ICv0PDqWLH215HNBqxQnsron6SUB5FtjRxQ41IvnSgjRsySl7XWVT88QG8c2At72OXUei7u3mHfxRLUft77NeYv6HRLxvNVuJk2Nz96ep23KsdlU4kLcpvf%2BgJnWc%2BeC3R9Ql9885hoycc9zwP6WEMWhxvn23lfrIcWMk%2FPSeu4fs99rHg3PKjNU0E%2BYNbXl91BVnY%2FTrzCty4RJCDeGMIvumsAGOqUBvb5YHkftcc3dtw69IITKCOp5IsisZKugmEy42SUsmPijM%2FBZ2AsVtwqZuWhcVirKHyH2cd4wRBsDXx3mdTn5Uwwfj1LMjbiUn4HnxvyQdJiYBap1jb9lAZzr1EZCnAL%2B1YTuwS%2B6dXxo2TZjt0pOkuruMr2BsPRXXqky21UfYInTe8sM805gHUji3XsjKYrbPLETnZxNgJ49UJVfc5nOO%2BGMIVAn&X-Amz-Signature=db5de1195e6f1480f771eca17f2b260231c8b8a92dfc8738faafd61d9877e181&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
