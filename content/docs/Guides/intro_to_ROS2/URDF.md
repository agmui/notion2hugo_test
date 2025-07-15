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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJ36BQZ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCIX1YT57JeZzbyiEZF7eDIQh%2FNmQLO64CIo10fyk7b5gIhAN6cfZUJJ58qv6nfnO%2BNhYThsPSM0GVN3aCCdx67JfKiKv8DCD0QABoMNjM3NDIzMTgzODA1Igykl%2BS2k2QSYznXnwsq3ANwmU7lIDtH8Ns6A9AMdyG7%2B3leHENbKXfcIWXkk0UJYamzPxP%2BwZku4W0hacOMB%2FFm4g7y3yOs%2FJYbi7ETxgeFv8%2BfdtojgRYp0l7D%2B1mC5h%2FwKOG%2FG5HXiw3VsfgmLEbdqL2qRXd7K%2FzwQzZw6bXTbsOWiNtRqpVpKvRal6HcMumkV%2FxOrWts9aFvZ%2F5%2BW%2BrtrO%2FEARoNMMxy2XOPt4M%2BOqH4fvInSb5sa2I5HZ6l1m2keCH3wP5UjLD46lbnfoZsT8djXp9tehT%2BXN6qpXoNro2ebGj%2FlOm5FJM%2FT%2FYgKiVIliZfe36sZX8b5UwUq8ZbjUxHiNWjW3hyILhi7TIW2%2BvDz72064o8%2FHUgJ04RvmBkS8e7kEscScVTjCdrxlEEFAt8LfhV88x3uA9BU148iiuWmrkzkOBYBrd3bHQtLjjGxHPCsmWhMstLPVdtNIOY8i%2FVy7J3uP%2BlDE%2F7UoRX7FFJMCIhCCEaXBvp%2Bb1KXX8VtmCOJfyZGZuj0UUEqPlH5Aofh1P0UlenfcOFEp12uitUYgjoTDxs5urdA5B0kYq5fP4%2FU7SIqvoo3P3zohaid488qdtp2s%2FO6hMAY5hdLR5kWhB7tf8cnattDUF3ARyMlMLwAH4zjkkSKTDyqtfDBjqkATjE6yfZAOfKqZaaJ0R3owYeXXipc%2BUZQB8ohbghiIJ026ixWGS9Y7WIUZc8V41%2Fgtfw%2BVrLtD0Tu2Nen%2FP0qdv8raQFYIxzx35RUTPwFPt0SVszDSpJM%2FvXOFr2CUJIPEcfUXQxkK87ZyV7E8vMyo01HVWnctEfWmdb3ShvXltfd1JPbDihI%2Bbb%2BvN1WoRcQBQH84yG1VEDwZLj7iWl%2FYx3IMKx&X-Amz-Signature=b934927d014d33c5d1a208978f64cca05902c6d70f222428bab58778a2b88134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJ36BQZ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCIX1YT57JeZzbyiEZF7eDIQh%2FNmQLO64CIo10fyk7b5gIhAN6cfZUJJ58qv6nfnO%2BNhYThsPSM0GVN3aCCdx67JfKiKv8DCD0QABoMNjM3NDIzMTgzODA1Igykl%2BS2k2QSYznXnwsq3ANwmU7lIDtH8Ns6A9AMdyG7%2B3leHENbKXfcIWXkk0UJYamzPxP%2BwZku4W0hacOMB%2FFm4g7y3yOs%2FJYbi7ETxgeFv8%2BfdtojgRYp0l7D%2B1mC5h%2FwKOG%2FG5HXiw3VsfgmLEbdqL2qRXd7K%2FzwQzZw6bXTbsOWiNtRqpVpKvRal6HcMumkV%2FxOrWts9aFvZ%2F5%2BW%2BrtrO%2FEARoNMMxy2XOPt4M%2BOqH4fvInSb5sa2I5HZ6l1m2keCH3wP5UjLD46lbnfoZsT8djXp9tehT%2BXN6qpXoNro2ebGj%2FlOm5FJM%2FT%2FYgKiVIliZfe36sZX8b5UwUq8ZbjUxHiNWjW3hyILhi7TIW2%2BvDz72064o8%2FHUgJ04RvmBkS8e7kEscScVTjCdrxlEEFAt8LfhV88x3uA9BU148iiuWmrkzkOBYBrd3bHQtLjjGxHPCsmWhMstLPVdtNIOY8i%2FVy7J3uP%2BlDE%2F7UoRX7FFJMCIhCCEaXBvp%2Bb1KXX8VtmCOJfyZGZuj0UUEqPlH5Aofh1P0UlenfcOFEp12uitUYgjoTDxs5urdA5B0kYq5fP4%2FU7SIqvoo3P3zohaid488qdtp2s%2FO6hMAY5hdLR5kWhB7tf8cnattDUF3ARyMlMLwAH4zjkkSKTDyqtfDBjqkATjE6yfZAOfKqZaaJ0R3owYeXXipc%2BUZQB8ohbghiIJ026ixWGS9Y7WIUZc8V41%2Fgtfw%2BVrLtD0Tu2Nen%2FP0qdv8raQFYIxzx35RUTPwFPt0SVszDSpJM%2FvXOFr2CUJIPEcfUXQxkK87ZyV7E8vMyo01HVWnctEfWmdb3ShvXltfd1JPbDihI%2Bbb%2BvN1WoRcQBQH84yG1VEDwZLj7iWl%2FYx3IMKx&X-Amz-Signature=427780b301600d2ad09bd0398f7098c7c2378a6c95a27bf763f09eec46cdbee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
