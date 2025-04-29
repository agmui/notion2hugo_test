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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N7N6TSH%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUBbMCESTG%2FONq%2FnuoBvVbUw9ZwoldQAQxJFW8K4ehLAiBI6qLkHC2bpN7w0gE2rf7b9EZyeO3B2yuGGBeTA6P6syqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvHDpPY7AWmtzt%2FZyKtwDKwGAQmpeI4JpXiogEMF3Cj1SUWhQDjKB4oPcvVUUMin0zP6b6FKcD8XTGcehEXKgHjO%2BdvSeBZ23joSnrCagt%2FUF6%2BkJ4Bu3SkK%2B19416ql%2B8vZ6cAXbl2e%2FhZgxfzxfMem8uvmnil8l6xXaWC7vcxUveWSNuigBTFx7nuQYYtDvm1DbCJofTMF3DAzXmdBRSPL%2BnLUoGvn1pyszbwx58FZOYDOjnGAlXlS4Gf%2BYJ8V3jimvCO7Ne0Y9FtOT0cd7ef0kKcbksKjT7brdHk7YQ5fJuBhC8JIk%2BLBe%2B3ECRaPSUYY7D%2FQCBkHBEttL%2F%2FY%2FRL3O9pcuUOtbVemoLLZehxe%2F3fnoM16WiV0LgzZ3%2Fub8jVP5OZesONtymwTDgfw4roICiHARCT4a7lC3HlgWvxmlEiKbi8dTtjEQVqCaec4M8ulVf1AN9mPYtBCtbwLu6FE%2BG8MK6DQ%2BTU0quplqzhB%2Fk1EudaTEpYcAFr2ZNObiZNlHrJHUgEn8LymjDdvO5l7A7PyuIeGLGOFLPxAofbRAGcBL19v%2F6e4ve%2BpiTs90Mt6DUWd9ANQQaNiFIjEYx%2FwN%2FtnjFCEIAMBVovDF8FdhhkQCzmVGa%2BEkfzWM8%2B%2BKz%2BEMywFlZt3ck4ow%2B6PDwAY6pgHgQKLLyE7y56meQstI7ZslODxHAfKgiQ%2BMAj2w45m8swdqNb1h2xnP6ZM0RIjuxW1mB4goL7OYHixyAbwlwuaL4k8H%2FgBs3d44MvnRp1vj9KgqdNV27k0D9Kh15NwKHOLaxERryieu6Moz6%2BvtPGWrclRTzaxKp69eLNcQ9wVJgwRNTgeIsXV0AMEGcKhTobwbIwyCIEq7FTjonbFyQv3bVwd3VGu0&X-Amz-Signature=d58f0cede181c6cc7c6d6da53b2c99ffec680593e6360d380bec89ce35817c28&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N7N6TSH%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUBbMCESTG%2FONq%2FnuoBvVbUw9ZwoldQAQxJFW8K4ehLAiBI6qLkHC2bpN7w0gE2rf7b9EZyeO3B2yuGGBeTA6P6syqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvHDpPY7AWmtzt%2FZyKtwDKwGAQmpeI4JpXiogEMF3Cj1SUWhQDjKB4oPcvVUUMin0zP6b6FKcD8XTGcehEXKgHjO%2BdvSeBZ23joSnrCagt%2FUF6%2BkJ4Bu3SkK%2B19416ql%2B8vZ6cAXbl2e%2FhZgxfzxfMem8uvmnil8l6xXaWC7vcxUveWSNuigBTFx7nuQYYtDvm1DbCJofTMF3DAzXmdBRSPL%2BnLUoGvn1pyszbwx58FZOYDOjnGAlXlS4Gf%2BYJ8V3jimvCO7Ne0Y9FtOT0cd7ef0kKcbksKjT7brdHk7YQ5fJuBhC8JIk%2BLBe%2B3ECRaPSUYY7D%2FQCBkHBEttL%2F%2FY%2FRL3O9pcuUOtbVemoLLZehxe%2F3fnoM16WiV0LgzZ3%2Fub8jVP5OZesONtymwTDgfw4roICiHARCT4a7lC3HlgWvxmlEiKbi8dTtjEQVqCaec4M8ulVf1AN9mPYtBCtbwLu6FE%2BG8MK6DQ%2BTU0quplqzhB%2Fk1EudaTEpYcAFr2ZNObiZNlHrJHUgEn8LymjDdvO5l7A7PyuIeGLGOFLPxAofbRAGcBL19v%2F6e4ve%2BpiTs90Mt6DUWd9ANQQaNiFIjEYx%2FwN%2FtnjFCEIAMBVovDF8FdhhkQCzmVGa%2BEkfzWM8%2B%2BKz%2BEMywFlZt3ck4ow%2B6PDwAY6pgHgQKLLyE7y56meQstI7ZslODxHAfKgiQ%2BMAj2w45m8swdqNb1h2xnP6ZM0RIjuxW1mB4goL7OYHixyAbwlwuaL4k8H%2FgBs3d44MvnRp1vj9KgqdNV27k0D9Kh15NwKHOLaxERryieu6Moz6%2BvtPGWrclRTzaxKp69eLNcQ9wVJgwRNTgeIsXV0AMEGcKhTobwbIwyCIEq7FTjonbFyQv3bVwd3VGu0&X-Amz-Signature=63e6401ecb4f7955207de046d2bf616b27a12dbe6114f83fc1f8bf50eb8a08b3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
