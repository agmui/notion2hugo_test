---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZZK5TBK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDXd1UEUDBbBD3006UnL%2BgpijdyLZ25%2BCHJiLZwuVYwCQIgLjEA4Aeu0XlxHFHxicLcmuocH%2FsmIIrRsSTAJNAioKkq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDJJQMJNBMWBZSvykVSrcA1zBWrpLv%2BuKCQNidTS1l9e2B%2BB7JTuNH%2BVIhM6RadQDM6a502ch4ge1rozKHk0bsL3g8AgiRVSjbxZP8xqHxdxDV5lOKK060xQl7zuHJLPMhxRzvzs4q55rM1pOKA0OhOmZwXkrtJ%2Fb%2BkoujNCrxRoM3GZiztLuCHz8NvIpT2ap7RgRiN0fM%2BGLNHJB1ivcyLKRmk5ejfTwmAIUGZX38%2BnEazgkul570BnCqQag4qlH1BRptkq%2BRdcAe2Xad3wHOEGoGw4yUueJlgc0Ull%2BqkLkoWMcEhg%2BxffaLv5X0qWWsoJWELyGUBsbaG67R5vZ7GFY%2Fw%2F0TKhKvholeZz42rU2AQTtYO%2FZvIchRQwIaklE2Ki18msA%2FSwRv%2FbFTve4%2FlmKIfGty2K4HHB2KAR4ur54HyBtIu9OA6CIiVM4D57drxHEAq%2FQ%2BzT%2FU2YzodgO1M192BKocg3uzQL1s943C1AFQhOWTpC4PkOH7bXiDHaXkTdv4OlH48PzlWjszsIu4zNsLskdMUUkoXw5%2F%2F6RVBRUBgjgD7tWxoZjv%2FLmmpVS9b7i%2FN2d0f65Dev%2BMGcp7KzA7wkW4EqW4xHmFSleTnm%2BLk1Tj8XB8vc1FFed4cf68O84C%2BVJI%2BcHj3tdMOG3wcQGOqUBZE60oVwr%2BV0Vjd5ijoKRKdIoklAi6vSNLqVKIW8EcWvFTHe9O%2BylbEwyEac8nSHNUam%2BSGwT2z%2BzwVLy3ictHrg5MY6QrQKHjWh5Q2psRkP9y%2F0SYCFqYz7Tgy6XDL5ZPR5W32LlMiI98arh%2Fl%2BmD%2FdfAlZoG1j3uPL%2BeJ%2FcYAQARF4Y36I0YicOfQot4sfhjsuNkPCeu07STsfk%2Fzva5saMgD%2BB&X-Amz-Signature=75215196d8d93b49810db7b80c781d93be4bb2e141c7c04baeabb2635cab8ea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZZK5TBK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDXd1UEUDBbBD3006UnL%2BgpijdyLZ25%2BCHJiLZwuVYwCQIgLjEA4Aeu0XlxHFHxicLcmuocH%2FsmIIrRsSTAJNAioKkq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDJJQMJNBMWBZSvykVSrcA1zBWrpLv%2BuKCQNidTS1l9e2B%2BB7JTuNH%2BVIhM6RadQDM6a502ch4ge1rozKHk0bsL3g8AgiRVSjbxZP8xqHxdxDV5lOKK060xQl7zuHJLPMhxRzvzs4q55rM1pOKA0OhOmZwXkrtJ%2Fb%2BkoujNCrxRoM3GZiztLuCHz8NvIpT2ap7RgRiN0fM%2BGLNHJB1ivcyLKRmk5ejfTwmAIUGZX38%2BnEazgkul570BnCqQag4qlH1BRptkq%2BRdcAe2Xad3wHOEGoGw4yUueJlgc0Ull%2BqkLkoWMcEhg%2BxffaLv5X0qWWsoJWELyGUBsbaG67R5vZ7GFY%2Fw%2F0TKhKvholeZz42rU2AQTtYO%2FZvIchRQwIaklE2Ki18msA%2FSwRv%2FbFTve4%2FlmKIfGty2K4HHB2KAR4ur54HyBtIu9OA6CIiVM4D57drxHEAq%2FQ%2BzT%2FU2YzodgO1M192BKocg3uzQL1s943C1AFQhOWTpC4PkOH7bXiDHaXkTdv4OlH48PzlWjszsIu4zNsLskdMUUkoXw5%2F%2F6RVBRUBgjgD7tWxoZjv%2FLmmpVS9b7i%2FN2d0f65Dev%2BMGcp7KzA7wkW4EqW4xHmFSleTnm%2BLk1Tj8XB8vc1FFed4cf68O84C%2BVJI%2BcHj3tdMOG3wcQGOqUBZE60oVwr%2BV0Vjd5ijoKRKdIoklAi6vSNLqVKIW8EcWvFTHe9O%2BylbEwyEac8nSHNUam%2BSGwT2z%2BzwVLy3ictHrg5MY6QrQKHjWh5Q2psRkP9y%2F0SYCFqYz7Tgy6XDL5ZPR5W32LlMiI98arh%2Fl%2BmD%2FdfAlZoG1j3uPL%2BeJ%2FcYAQARF4Y36I0YicOfQot4sfhjsuNkPCeu07STsfk%2Fzva5saMgD%2BB&X-Amz-Signature=f5a902eadf0f11e840802e07370aa367bc0d0df5b29a3cd02cae122b2695893b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
