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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJKSODGS%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T160944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdkRxb7pgXcIVcpX7qhUbdx1msdqxjprdrogO8zTTUWAiBtRqbubqcDFfqRYdgtvg0Cs0mn%2FgxAwOt1Xxk3JxiLMCr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMUmECgQ8TWeG34KNWKtwD%2B0RK%2B5KD1%2Blzf50Yk8G6%2FEkYaoxVKHM5smuh2JywAlvLsqeUjGCXiO5U7OzK%2FPxHZDfqbcECXr3yRrN%2FlHgpH2mTGkE4LPI9k0UoO%2Fg5EU6KN3JTAyZQ3i8Er7632ApVjppf44lEQnOYgEWWal1mTTeFLvn20lRXcwmKN0qkb7lm8GqAbHk%2BKyv%2Fb2vtb273RIRcz4DV8K4D8WvOD%2BFSfC3nNQ0LzgZLbC%2BmoISzKiWJf3UiyGZG0n4T4%2FPul%2FQkTj0YXv2vhqi7JBZoNwKdvBWB6EruOk67WtAWcJcYJx9ZQN2yuBAQo6wJcyDfSxFIxsGGiVPeE4Vgjpz43E3LGHO02UntISi%2BdJYXyROlxJ7jSevrV6vuPlGtZVN22DSTvIJlQXTKdlrblifj3G7U1ypTl38F%2FkzQYjSLVxsGi3rUQmyon16SsdbA6edgbTRlUZ%2B9cYlts8NwrMEm2480VYDqakf6hP83BtRF5lQBbPqpprZSqN2csO7YFM7SD5QR6%2BLdXx7f9T3BpNX27ddvKo%2B4hwIg%2FZQdvOrnegbOEOF2a9n311YX6LflZcQ6tQikWy3WAAQ6F3Bys4AhCP6leVkJIfR6mtHO2StuR5XQ7V8Jfd6l3aUh0nrzXCww%2FIHAvwY6pgHz9sc5qGThnwoXExfa7pUl85xJZ8TJty6Um6vkXVAhCG7RXhZsYde7u%2B2cPzZx1r75clk8v391ud1FB9gcVcc%2BKADAIl1xhKUM0vD0olWMgKTrrjdwZr7dsKTn3QHo7ZaJran5A4dbbLSZYWe%2F3AsX2wao%2FHCPXM6nlumG0FIQHZX21XKM5DEN1PmlhzoOjgTm54VHw4mA2eKZ%2BpmIGPXoWdy4P24m&X-Amz-Signature=6c07f0ec13bbf695abeb58fa794ee3a8bd26d543cb0b87bba211e712286e6515&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJKSODGS%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T160944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdkRxb7pgXcIVcpX7qhUbdx1msdqxjprdrogO8zTTUWAiBtRqbubqcDFfqRYdgtvg0Cs0mn%2FgxAwOt1Xxk3JxiLMCr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMUmECgQ8TWeG34KNWKtwD%2B0RK%2B5KD1%2Blzf50Yk8G6%2FEkYaoxVKHM5smuh2JywAlvLsqeUjGCXiO5U7OzK%2FPxHZDfqbcECXr3yRrN%2FlHgpH2mTGkE4LPI9k0UoO%2Fg5EU6KN3JTAyZQ3i8Er7632ApVjppf44lEQnOYgEWWal1mTTeFLvn20lRXcwmKN0qkb7lm8GqAbHk%2BKyv%2Fb2vtb273RIRcz4DV8K4D8WvOD%2BFSfC3nNQ0LzgZLbC%2BmoISzKiWJf3UiyGZG0n4T4%2FPul%2FQkTj0YXv2vhqi7JBZoNwKdvBWB6EruOk67WtAWcJcYJx9ZQN2yuBAQo6wJcyDfSxFIxsGGiVPeE4Vgjpz43E3LGHO02UntISi%2BdJYXyROlxJ7jSevrV6vuPlGtZVN22DSTvIJlQXTKdlrblifj3G7U1ypTl38F%2FkzQYjSLVxsGi3rUQmyon16SsdbA6edgbTRlUZ%2B9cYlts8NwrMEm2480VYDqakf6hP83BtRF5lQBbPqpprZSqN2csO7YFM7SD5QR6%2BLdXx7f9T3BpNX27ddvKo%2B4hwIg%2FZQdvOrnegbOEOF2a9n311YX6LflZcQ6tQikWy3WAAQ6F3Bys4AhCP6leVkJIfR6mtHO2StuR5XQ7V8Jfd6l3aUh0nrzXCww%2FIHAvwY6pgHz9sc5qGThnwoXExfa7pUl85xJZ8TJty6Um6vkXVAhCG7RXhZsYde7u%2B2cPzZx1r75clk8v391ud1FB9gcVcc%2BKADAIl1xhKUM0vD0olWMgKTrrjdwZr7dsKTn3QHo7ZaJran5A4dbbLSZYWe%2F3AsX2wao%2FHCPXM6nlumG0FIQHZX21XKM5DEN1PmlhzoOjgTm54VHw4mA2eKZ%2BpmIGPXoWdy4P24m&X-Amz-Signature=b82eb72aa87909ecb0c4f9dfefb6849dd71984973b5357116309b65b2795b518&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
