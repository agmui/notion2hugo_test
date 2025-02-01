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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EFMAJWF%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T100729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgQ%2FloSy3t0fM%2Br%2BXDsC37u3QLyCv8iq48J05N%2B78XLQIgRzEG7gaQi%2BAv74acs7yQNevg6HxFbsz6AiB%2FIkYv0eUqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FS9RICi8Ti61SvUCrcAxcxFz55DgxxGMjBh8kpoGBxFqxwErYZZgdGr0QAJE4xGhgpiyoVhtrsFmdiZju%2BqfGkdM80%2BoGk3KbYGpsGrjX%2BnQMM%2BBLA8OuoLRbOMV1S%2FLybfk2dGDbDH9Iv5iz3zYAF7vta94bHM52qicJhomXKAqTk8K6fHtA1HdzxqxBfxgR0wGOqhrloV8%2FfPezWH8Owq3WIMm3blYiJQRJmrqhf3vrP9tWLRpp0zqMDGZRCUcT2EYkh%2Bbphz5yHKuwsCN%2BD3pinaKwfGY1APtDZNLhxqgyF%2FzSVl3a1AB1Y89d0cNecPNRLoLzpeA6CNyp9axHcPNtiupGcpI%2BfBK6Oi57vo25L8%2FpqDVpplUVw1Ga6LMsG8AeXIGNX4yjgk54D573wTD27sND4swUhqaWD2KiiHEQ232kYpEgfKkEA9%2B6vjWYCvXaJ70OzRbEJxAh%2BVs11LrcRhU8z8dnewZ1LlAaSeT9GiQCdf4IEKE0Fo5VzkcHqp555ssnu16R4yR8ASqchvIDnQQgs9oCu9vslvag%2BLcBKg8%2FAvr3hPlVVZEU51Yy%2F4tFhkhD9%2Fk9l0du2WcZYpuvJzWtN%2FZKbTW37%2BIQwV2resPe7igiTzpPZxB%2Bjn9bss9sVG6CCWINtMNGl97wGOqUB%2FYQsxX9CjVxExiwLLBytJPxW1nPWu3ce0T0qBBmVjmZ70EvJ6jnNXa8z%2FMMV64fHpxBrYRYDQj8cb47rolED6WHYkef86Hzc20v%2FQeNUbApV3c%2FdLCP63Es9AGYgnkWvPuhZYlrwBwsWi1hQkxOQBYIPh89s7oHGLJRzXal3CQ7pbTvdbEU%2B59xWTIU%2FB9e2IrJdWWou85lgNo9zhjhPIZzauplx&X-Amz-Signature=b3bba6bf295af14abd8b8ab44f4d69553c1f26eb6602e9dabdadf1f302345aea&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EFMAJWF%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T100729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgQ%2FloSy3t0fM%2Br%2BXDsC37u3QLyCv8iq48J05N%2B78XLQIgRzEG7gaQi%2BAv74acs7yQNevg6HxFbsz6AiB%2FIkYv0eUqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FS9RICi8Ti61SvUCrcAxcxFz55DgxxGMjBh8kpoGBxFqxwErYZZgdGr0QAJE4xGhgpiyoVhtrsFmdiZju%2BqfGkdM80%2BoGk3KbYGpsGrjX%2BnQMM%2BBLA8OuoLRbOMV1S%2FLybfk2dGDbDH9Iv5iz3zYAF7vta94bHM52qicJhomXKAqTk8K6fHtA1HdzxqxBfxgR0wGOqhrloV8%2FfPezWH8Owq3WIMm3blYiJQRJmrqhf3vrP9tWLRpp0zqMDGZRCUcT2EYkh%2Bbphz5yHKuwsCN%2BD3pinaKwfGY1APtDZNLhxqgyF%2FzSVl3a1AB1Y89d0cNecPNRLoLzpeA6CNyp9axHcPNtiupGcpI%2BfBK6Oi57vo25L8%2FpqDVpplUVw1Ga6LMsG8AeXIGNX4yjgk54D573wTD27sND4swUhqaWD2KiiHEQ232kYpEgfKkEA9%2B6vjWYCvXaJ70OzRbEJxAh%2BVs11LrcRhU8z8dnewZ1LlAaSeT9GiQCdf4IEKE0Fo5VzkcHqp555ssnu16R4yR8ASqchvIDnQQgs9oCu9vslvag%2BLcBKg8%2FAvr3hPlVVZEU51Yy%2F4tFhkhD9%2Fk9l0du2WcZYpuvJzWtN%2FZKbTW37%2BIQwV2resPe7igiTzpPZxB%2Bjn9bss9sVG6CCWINtMNGl97wGOqUB%2FYQsxX9CjVxExiwLLBytJPxW1nPWu3ce0T0qBBmVjmZ70EvJ6jnNXa8z%2FMMV64fHpxBrYRYDQj8cb47rolED6WHYkef86Hzc20v%2FQeNUbApV3c%2FdLCP63Es9AGYgnkWvPuhZYlrwBwsWi1hQkxOQBYIPh89s7oHGLJRzXal3CQ7pbTvdbEU%2B59xWTIU%2FB9e2IrJdWWou85lgNo9zhjhPIZzauplx&X-Amz-Signature=3df169997da20fa91192f328a1b8427d2d4ba7d31711b6269b4179b75189bb57&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
