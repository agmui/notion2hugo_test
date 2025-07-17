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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2GBFZGI%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDMfDTiIIZF55%2FeHHAhJYwn6FdncknRM5lCubLZZGM8ygIhAND1rlOo4MokTvkVA490gwh4oF61NaIXz3Yq0R29CG9iKv8DCG8QABoMNjM3NDIzMTgzODA1IgwCQiEGPkFF%2FEilBB4q3AOkwAp6xRgNjk8Wt8GDgNw4uWXrvtBQVoLhhZuf%2BCTrpFYvYF8BkVW0VYnilIephMlb73DoKGG5bx%2BWGRuADJ8X%2BphInoWVMOJDi7odSFz6AHH%2B%2Bggs6IZgZRWgcqAVDWw5GiyrIJVEgflIeoCjW%2F9WDwQ5idolV%2FmoaM7NG8UL%2FI77q86wskc%2BVpVEJfTRNDy2wSg9ssMq9udGnqihFT%2Br%2F7BakEK8MyeBqXErk5Fqr6WKHmXF4ue5vExWBVhRvEBhrrkGhpgDb%2B46zwOqQs%2BiBzXA3P3RgaSrd6GG6xtpme0cisvSb5TjEIRj0GqMvipC%2BDlz%2FvNOnCrqzCSb4EbWIu9gl1T%2FIQfqgMJQmXhLeAicjSGPQP9Xv20UVC%2FIxt0maacDczeB3RIbHaQxbxyJHKv56i1FRvcw3%2BzC%2FF1uSXISohLQvptabWVY0S%2FDuscw0xmxIQyOGdfWziNHmIuD%2BD7Y57iZOn%2F%2Bqhh1p15lL5F2IDoEqonmcw%2BZW0Fnevz6bK%2B48%2BcGCpcY9uiIETXs4oi0Jn9sZDDY5CS%2FATmzdzw5zyFAZd13vSW9rvml2cDLE1SzAEzIpMKgTISQAiq4K8pPKdnUqyOFdh0c4lk2ReH7pU1uoDw8WtM%2BazCPluLDBjqkAU4FoI2nGga2IottSi8doyuLQWajqfRGnlxQKbYm6obMYEZTIzPFC92zJwRnkPV%2Fmu8uNfc%2FcRK5q91CUQKh%2F1Mauyi3lCwM7%2FqmzUqBHmk1kruZW3jyXN6ulIIYKXIW%2BPuIa%2BUsQIHdr3Nrl%2FX9XMo%2FLurJwGTuI0EmPYjzJ2fjGz4XMbCL82OHeB84MpCkMOLWT79jqNsCQpDwNKpqlgWTXoVl&X-Amz-Signature=36b18915e28851d266dd75e74c165d9e597d967a51ff6b3da66efba6db61e52a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2GBFZGI%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDMfDTiIIZF55%2FeHHAhJYwn6FdncknRM5lCubLZZGM8ygIhAND1rlOo4MokTvkVA490gwh4oF61NaIXz3Yq0R29CG9iKv8DCG8QABoMNjM3NDIzMTgzODA1IgwCQiEGPkFF%2FEilBB4q3AOkwAp6xRgNjk8Wt8GDgNw4uWXrvtBQVoLhhZuf%2BCTrpFYvYF8BkVW0VYnilIephMlb73DoKGG5bx%2BWGRuADJ8X%2BphInoWVMOJDi7odSFz6AHH%2B%2Bggs6IZgZRWgcqAVDWw5GiyrIJVEgflIeoCjW%2F9WDwQ5idolV%2FmoaM7NG8UL%2FI77q86wskc%2BVpVEJfTRNDy2wSg9ssMq9udGnqihFT%2Br%2F7BakEK8MyeBqXErk5Fqr6WKHmXF4ue5vExWBVhRvEBhrrkGhpgDb%2B46zwOqQs%2BiBzXA3P3RgaSrd6GG6xtpme0cisvSb5TjEIRj0GqMvipC%2BDlz%2FvNOnCrqzCSb4EbWIu9gl1T%2FIQfqgMJQmXhLeAicjSGPQP9Xv20UVC%2FIxt0maacDczeB3RIbHaQxbxyJHKv56i1FRvcw3%2BzC%2FF1uSXISohLQvptabWVY0S%2FDuscw0xmxIQyOGdfWziNHmIuD%2BD7Y57iZOn%2F%2Bqhh1p15lL5F2IDoEqonmcw%2BZW0Fnevz6bK%2B48%2BcGCpcY9uiIETXs4oi0Jn9sZDDY5CS%2FATmzdzw5zyFAZd13vSW9rvml2cDLE1SzAEzIpMKgTISQAiq4K8pPKdnUqyOFdh0c4lk2ReH7pU1uoDw8WtM%2BazCPluLDBjqkAU4FoI2nGga2IottSi8doyuLQWajqfRGnlxQKbYm6obMYEZTIzPFC92zJwRnkPV%2Fmu8uNfc%2FcRK5q91CUQKh%2F1Mauyi3lCwM7%2FqmzUqBHmk1kruZW3jyXN6ulIIYKXIW%2BPuIa%2BUsQIHdr3Nrl%2FX9XMo%2FLurJwGTuI0EmPYjzJ2fjGz4XMbCL82OHeB84MpCkMOLWT79jqNsCQpDwNKpqlgWTXoVl&X-Amz-Signature=d93304a58d44caf375bdfb43501cbd9af779fd719944619a56983e766f674f07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
