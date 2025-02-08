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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6UDJNK%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDwX%2FAj6bsMn2DvDb9blsHQ3J%2BeUx%2Fy0rNHdJKiJZiFnQIgP2Y4i4duBUMAnb1U5hViF%2FIz%2FB2nKnbw35daHdEHU98qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJprP94ihFxKaZ332ircA6ZVqvI4f%2BQgjUM%2F4DPV0jenECfMNQSkYl4J5vC9NoBXW6Y09143f55M%2Fqaich6phhwNQNThMfcs66XTgNN7vbB8XA0uIS5DbrrbC6Mcji7lESDJMgEe0r4Fw%2BqsINwhdY%2B%2BG4qzYnFEkXeCNqXFft4PwLXsGqavLMIo83cufbUdBwlFcIcdBlliNYZZUemkGCMcN4loDYsnyAeNaIKxdMygkBbDzvi9a7jjqllCJCtPBWq6RoMXYo4bIu7M814qHso3qqYmxQapDKxQdhyPans3VJwq3kdgIL5xpKA%2BUIiubTacN%2B8pc2ODSk%2B4lZcZOhWjieIRbzsMlSzCXuODYO0lO1MCXGxwN1xiYx6f4l8WGm21FgJ4apGgW85hgwXezFnJ9skGa0N%2Ft4JhhfdExDFGtS%2F7ODCUd%2BoWMsPMyK%2B0oyO0WK41d6Kc0dMSI2oHXO6j5S%2FFFCiOk82CV6RrA5egdYAce9J5aX2ey8vAHfalqHe5qJ9M4yJ6Gia4mzSmWD2lw9ZBb%2FRP33GJGdKNUIDM%2BkrMkNXWcL4BEH7QUgd0KWYh5LnHIc5X9KpSm8k3%2F3NSj3WGi3iAcxbE7pLfVP7sCQiqgdlx7L6VKMTHy6QKo3Uhv4OqkGCiRAzvMJHWm70GOqUBmPYr74lq49TktMWaC6rv8nu67dFzXjcMOn9TWjr2zii3iWinQOK13rbqd9TH%2Be0RNehHol09nzdHpVcwZCj8jumflEARg248XOzMF2ElJ2%2Fdy9MpNspp0sFOQB0G7OF5hqalKj1slU6TZhgwwiByQfiJuOzgTJGwpvzYeOk7z4Z5hBWGhNh2F33zUyHSoClo22%2Fruh6Az%2BEHZzwnMffUEHLukgM5&X-Amz-Signature=64552f25dbc8c54f34ef9d22aad5244700843b1bbfdb9477eefcc6cf23006fc3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6UDJNK%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDwX%2FAj6bsMn2DvDb9blsHQ3J%2BeUx%2Fy0rNHdJKiJZiFnQIgP2Y4i4duBUMAnb1U5hViF%2FIz%2FB2nKnbw35daHdEHU98qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJprP94ihFxKaZ332ircA6ZVqvI4f%2BQgjUM%2F4DPV0jenECfMNQSkYl4J5vC9NoBXW6Y09143f55M%2Fqaich6phhwNQNThMfcs66XTgNN7vbB8XA0uIS5DbrrbC6Mcji7lESDJMgEe0r4Fw%2BqsINwhdY%2B%2BG4qzYnFEkXeCNqXFft4PwLXsGqavLMIo83cufbUdBwlFcIcdBlliNYZZUemkGCMcN4loDYsnyAeNaIKxdMygkBbDzvi9a7jjqllCJCtPBWq6RoMXYo4bIu7M814qHso3qqYmxQapDKxQdhyPans3VJwq3kdgIL5xpKA%2BUIiubTacN%2B8pc2ODSk%2B4lZcZOhWjieIRbzsMlSzCXuODYO0lO1MCXGxwN1xiYx6f4l8WGm21FgJ4apGgW85hgwXezFnJ9skGa0N%2Ft4JhhfdExDFGtS%2F7ODCUd%2BoWMsPMyK%2B0oyO0WK41d6Kc0dMSI2oHXO6j5S%2FFFCiOk82CV6RrA5egdYAce9J5aX2ey8vAHfalqHe5qJ9M4yJ6Gia4mzSmWD2lw9ZBb%2FRP33GJGdKNUIDM%2BkrMkNXWcL4BEH7QUgd0KWYh5LnHIc5X9KpSm8k3%2F3NSj3WGi3iAcxbE7pLfVP7sCQiqgdlx7L6VKMTHy6QKo3Uhv4OqkGCiRAzvMJHWm70GOqUBmPYr74lq49TktMWaC6rv8nu67dFzXjcMOn9TWjr2zii3iWinQOK13rbqd9TH%2Be0RNehHol09nzdHpVcwZCj8jumflEARg248XOzMF2ElJ2%2Fdy9MpNspp0sFOQB0G7OF5hqalKj1slU6TZhgwwiByQfiJuOzgTJGwpvzYeOk7z4Z5hBWGhNh2F33zUyHSoClo22%2Fruh6Az%2BEHZzwnMffUEHLukgM5&X-Amz-Signature=a06ba7c73155982bf6a5f09c19588508bccb84dc9ed7ada2757fda9ae253b60d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
