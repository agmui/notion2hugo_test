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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTTRRW2D%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIBzrZN%2F5PgoZPUejt%2BoD1a%2F9HQ2BYqVwdUs9M66ehY81AiEA8Gb87k5b%2FY%2BzuQwZpZO2t9L6ExXNs2vYA8XXlVKZaAwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FAIdwAlM2AEyq7WyrcA5ISTrw9ZcsSi82bHTelvN9CImn%2B%2BRuRrE5RU4yXPoXCT4XclhLuzXEmwUxgff6998NI2uQ%2F7WZLi%2Fb0Z3O2Z8O4XGznNibvzPtsVd1OXWPoWlbLkdyjRNzregqw%2BF5KAvd75x8cwbEnL%2FhSih%2B90iycxiemIrfNHfDLPJTnxtGakZ7k2JiP18Db7V2k3JyibSrccLe5V%2BMsMRb3kZShhTL%2BeSn64BBnceRoOJhSi5oCP2BrNdPBjA2pxEHLXoV5y3pJMkE69WzX15V5KbyK2XF7iqFQ%2BdlotyMhAaMdwv4MLsuqsQctNQrgIBL2Ddiba7Dqcd6PEs2W4EcAhCHAG5%2B8uiLchzMGdbvq5bWynwM%2FYudHwPguGPLD%2FlY6ndohVOqDUEYdilVeHUa6UuAo8e3ZAmxM6SAyIu%2FqDE0pcHIZGGMR6L45gzp3c%2FjfaTqe2eBruwcFIfhYmFifad7ldnXauc2sTpa8CgbLg3OB%2FFGkLmIVl1vQeTV9q0tmy4Uungys0yUdJJWJSwXbW6kHag4udKsKbN%2BsnwW3pTpUaHVozHi6SyqH1P%2Bm76YVWu1w6b2B7hOl7w7JznVY6Zgc5GFb3UrYcbwgn3qeTlyoVCTyN0zpmQBddWvh2OhvMIX2jr4GOqUBDqM9fN7arGjNwkP%2BphYVnn0j0uIVSpbOEBtWlil%2B%2FYKBNa0MVQxTJkt44Bg59pUSJqnXblsQkscE1GeyKXMnwJGf4GN8rp6vObMfPZnLivYa%2B5dlNNiLxPhp6A2U00jKMf438t8MD9BSWTrB6FMaDb7TdycBTChBEe6KvxKe4DuzoClbx5MX4SX3icsZfWVyY3OFI03TD74%2B2njYR36Vt5ENkoDA&X-Amz-Signature=a818deb64c9486f966dd4879397bb035d8201a4d61ee1a80ee9336787d473eba&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTTRRW2D%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIBzrZN%2F5PgoZPUejt%2BoD1a%2F9HQ2BYqVwdUs9M66ehY81AiEA8Gb87k5b%2FY%2BzuQwZpZO2t9L6ExXNs2vYA8XXlVKZaAwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FAIdwAlM2AEyq7WyrcA5ISTrw9ZcsSi82bHTelvN9CImn%2B%2BRuRrE5RU4yXPoXCT4XclhLuzXEmwUxgff6998NI2uQ%2F7WZLi%2Fb0Z3O2Z8O4XGznNibvzPtsVd1OXWPoWlbLkdyjRNzregqw%2BF5KAvd75x8cwbEnL%2FhSih%2B90iycxiemIrfNHfDLPJTnxtGakZ7k2JiP18Db7V2k3JyibSrccLe5V%2BMsMRb3kZShhTL%2BeSn64BBnceRoOJhSi5oCP2BrNdPBjA2pxEHLXoV5y3pJMkE69WzX15V5KbyK2XF7iqFQ%2BdlotyMhAaMdwv4MLsuqsQctNQrgIBL2Ddiba7Dqcd6PEs2W4EcAhCHAG5%2B8uiLchzMGdbvq5bWynwM%2FYudHwPguGPLD%2FlY6ndohVOqDUEYdilVeHUa6UuAo8e3ZAmxM6SAyIu%2FqDE0pcHIZGGMR6L45gzp3c%2FjfaTqe2eBruwcFIfhYmFifad7ldnXauc2sTpa8CgbLg3OB%2FFGkLmIVl1vQeTV9q0tmy4Uungys0yUdJJWJSwXbW6kHag4udKsKbN%2BsnwW3pTpUaHVozHi6SyqH1P%2Bm76YVWu1w6b2B7hOl7w7JznVY6Zgc5GFb3UrYcbwgn3qeTlyoVCTyN0zpmQBddWvh2OhvMIX2jr4GOqUBDqM9fN7arGjNwkP%2BphYVnn0j0uIVSpbOEBtWlil%2B%2FYKBNa0MVQxTJkt44Bg59pUSJqnXblsQkscE1GeyKXMnwJGf4GN8rp6vObMfPZnLivYa%2B5dlNNiLxPhp6A2U00jKMf438t8MD9BSWTrB6FMaDb7TdycBTChBEe6KvxKe4DuzoClbx5MX4SX3icsZfWVyY3OFI03TD74%2B2njYR36Vt5ENkoDA&X-Amz-Signature=a3108bd8bca74b90ea5e4a7790fa708a7ab11da433ad495ea74c36ac77455ea5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
