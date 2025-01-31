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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVEJQPGX%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T090754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDE3MgHKqdsTN1f7gU6mc2J7Yc%2FJNtj0idoc8mBr%2FsAHAIgSLRehNpi5YeHvIXt2ZIzCgCLeVyDo%2FYravwucMjtpcgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLC14pI6dzqAXs9xfCrcA0eeWDm9K7w812SryeM6MUxiopfjYTfxrKnK%2Fz8EHsWqFICqbAFEAYSZfA2QTdKh%2FVGLSkfaAaltNJJiCjVZMWFfZ6ka0zXQAbsiyApNXbWfid80Il3%2FxXmvyUj11bHzNlRpezh0RE96jtTz%2BHWJ14i4JsXEg4KkRvhUSFGnw6m0u8%2BE1hSBr5uRFmWrHovHcavXXaqYWGFE2HkYLEJtRTBwNv%2BdGRqb%2FYT2eHV3zuhrVqMTiiBmIpf47jOr55qjdLrPoWGmE%2B5jd2rd3E%2FeidTQYd3c%2BbBE84Mzf0VSThhe%2B2SYp68bnhEdbMTX62Wonbb1vgwBDW1DxT0ZOtdfAdqoAJXK5QzjzEOD5BrbmwPIeHy9Y0088v5yCFozPJRzkEhn8b4dH7pm09dmk2Pf82iC5y4Z4GGR46jHzQjqyPL2T1v%2FCWgfaEb1WJOHYyfMKPp0UZTESsvMCgmJYQN3u1G9upL0HtspMRrO7fFgPMC0D6Yb0SVyjux%2Fr%2FAKb714sWnWunhWP3%2FYoCEjsTrsk7fDgcdinPNZFmUQTk27k6v4KMAFtZ8NAvF4ShjiaNDS3glkBfr7JuqOzMAfgvUaixbMBUyjl2yR%2FUlX5TTKsp9KVXZpW44mQyk6CYaxMLic8rwGOqUBQg1Vsx6mGxsMLDEwntn4GIFfBx2gvv11%2F85YZWMiezFKkTmLuC0g7fFAQxiorAodj5lKDODHirgBvIPi3SkLKmyjGN3bLzToa4deDXI7nTJ1bqrKvVQAfUY9XcHFsPW4oIpuz3hgVVNVPIH1VmcLd2HbVjVdOehnklUiWRusMd%2BocqGXvky%2B09pP2boS1ckTbyJLBeYaXqOB00MQGBJIO0z15pBO&X-Amz-Signature=22126b170f50febeb70ddd528a5f074d110c4838519b493e5c072f2184657d08&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVEJQPGX%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T090754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDE3MgHKqdsTN1f7gU6mc2J7Yc%2FJNtj0idoc8mBr%2FsAHAIgSLRehNpi5YeHvIXt2ZIzCgCLeVyDo%2FYravwucMjtpcgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLC14pI6dzqAXs9xfCrcA0eeWDm9K7w812SryeM6MUxiopfjYTfxrKnK%2Fz8EHsWqFICqbAFEAYSZfA2QTdKh%2FVGLSkfaAaltNJJiCjVZMWFfZ6ka0zXQAbsiyApNXbWfid80Il3%2FxXmvyUj11bHzNlRpezh0RE96jtTz%2BHWJ14i4JsXEg4KkRvhUSFGnw6m0u8%2BE1hSBr5uRFmWrHovHcavXXaqYWGFE2HkYLEJtRTBwNv%2BdGRqb%2FYT2eHV3zuhrVqMTiiBmIpf47jOr55qjdLrPoWGmE%2B5jd2rd3E%2FeidTQYd3c%2BbBE84Mzf0VSThhe%2B2SYp68bnhEdbMTX62Wonbb1vgwBDW1DxT0ZOtdfAdqoAJXK5QzjzEOD5BrbmwPIeHy9Y0088v5yCFozPJRzkEhn8b4dH7pm09dmk2Pf82iC5y4Z4GGR46jHzQjqyPL2T1v%2FCWgfaEb1WJOHYyfMKPp0UZTESsvMCgmJYQN3u1G9upL0HtspMRrO7fFgPMC0D6Yb0SVyjux%2Fr%2FAKb714sWnWunhWP3%2FYoCEjsTrsk7fDgcdinPNZFmUQTk27k6v4KMAFtZ8NAvF4ShjiaNDS3glkBfr7JuqOzMAfgvUaixbMBUyjl2yR%2FUlX5TTKsp9KVXZpW44mQyk6CYaxMLic8rwGOqUBQg1Vsx6mGxsMLDEwntn4GIFfBx2gvv11%2F85YZWMiezFKkTmLuC0g7fFAQxiorAodj5lKDODHirgBvIPi3SkLKmyjGN3bLzToa4deDXI7nTJ1bqrKvVQAfUY9XcHFsPW4oIpuz3hgVVNVPIH1VmcLd2HbVjVdOehnklUiWRusMd%2BocqGXvky%2B09pP2boS1ckTbyJLBeYaXqOB00MQGBJIO0z15pBO&X-Amz-Signature=fe1999fe6843593355e5655c09972b034a74c47706195943ab1a38db205e2a2c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
