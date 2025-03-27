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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMQNQU2O%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSRWF3WAAh%2F5Ds2lvxgrQMAI4qeuKhAk04uf5NwH0ZzAIgfGJistvbk6t1%2Fa70nfATJus9%2F6nswyIhmRlWLiOG6tkq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDFTxC2EafRyTsovAnircA9c7nM8Dw3aIqzXgIPIMkhC6%2FLnIKnfonj5BB3yLoklaMvDXx98cZObHBP9Mo8tESVYgklkSW7FJrE3lw%2FZ7qmHrO7hiKkP8BjaDe%2FVd7rvPGRnigpYebsxERebNV9TTc5kK5Lp1tYglzLdPLyAybEnKorWXPlLwo81WsoCJIF%2BgyHMNTfiszCNIdEvWxWn9Cs%2BVO7KmlueGjGIyGavFSe1MSGFeICac559h%2Bvzl2aJxFyVUOHR7%2FYovtBUXwbDbLXWkaBUDRcrtLZ3HzvGRbVSSLitXQWbFCE75stX7whkDUP7oVgVZhGjYvZq8AMBpnrIusNHPjlSHeRmHdcTzwzGzDZjsOgwsV2V2ukWlYXDVSnGYyeXtvJnIW4VnqPj99fgiJfVPEWqHORvPR8WKV4bGY%2B3CtYl9lwUDhJgpzz97RabwDdfzIaZ%2BoWMf4mCytoDdPgrSo66jzpHoHc%2B9Z3%2FShcWP%2F5YXvoAiAB8FVS5OASaawnzhdLG8lDvdCPaI2l7d%2B%2B1DO5xiC7MzEKgBYUrlvbnHGk%2BJ6stdwlqqEKRPfUPuwSpBlo%2BPuceWGAP1PiTvOm5FpDnmRbb0yIBkcxQ2Xaan9LgqMfe9IaJWNDYRylVSwSq%2BjeJZbI9oMObqlb8GOqUBRPl6RWh0QelR%2BKNwu41WWWtJRqF1MuRGtu%2BmPh6ZddwAWigEvBDKJujYaYtdpPz1J6MG8pf2OT%2F6otx%2FdnjA9Gknyj6O4fv4Yai718F%2Bpx6Qa%2FxVUL4mgSo32ylr%2FS34n5cMakqQi9H03vktiTuK%2BA4J51WSZzokSDYh4g6VBDoaYMVn7Pwl48YHz9YttM1N7sEvXPYukz2L8rm0mMKu4xym2Hbx&X-Amz-Signature=38642253fb5bf5497118b804eab8fd2bdb6131939899dd8f0f9c1b433bdbe13d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMQNQU2O%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSRWF3WAAh%2F5Ds2lvxgrQMAI4qeuKhAk04uf5NwH0ZzAIgfGJistvbk6t1%2Fa70nfATJus9%2F6nswyIhmRlWLiOG6tkq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDFTxC2EafRyTsovAnircA9c7nM8Dw3aIqzXgIPIMkhC6%2FLnIKnfonj5BB3yLoklaMvDXx98cZObHBP9Mo8tESVYgklkSW7FJrE3lw%2FZ7qmHrO7hiKkP8BjaDe%2FVd7rvPGRnigpYebsxERebNV9TTc5kK5Lp1tYglzLdPLyAybEnKorWXPlLwo81WsoCJIF%2BgyHMNTfiszCNIdEvWxWn9Cs%2BVO7KmlueGjGIyGavFSe1MSGFeICac559h%2Bvzl2aJxFyVUOHR7%2FYovtBUXwbDbLXWkaBUDRcrtLZ3HzvGRbVSSLitXQWbFCE75stX7whkDUP7oVgVZhGjYvZq8AMBpnrIusNHPjlSHeRmHdcTzwzGzDZjsOgwsV2V2ukWlYXDVSnGYyeXtvJnIW4VnqPj99fgiJfVPEWqHORvPR8WKV4bGY%2B3CtYl9lwUDhJgpzz97RabwDdfzIaZ%2BoWMf4mCytoDdPgrSo66jzpHoHc%2B9Z3%2FShcWP%2F5YXvoAiAB8FVS5OASaawnzhdLG8lDvdCPaI2l7d%2B%2B1DO5xiC7MzEKgBYUrlvbnHGk%2BJ6stdwlqqEKRPfUPuwSpBlo%2BPuceWGAP1PiTvOm5FpDnmRbb0yIBkcxQ2Xaan9LgqMfe9IaJWNDYRylVSwSq%2BjeJZbI9oMObqlb8GOqUBRPl6RWh0QelR%2BKNwu41WWWtJRqF1MuRGtu%2BmPh6ZddwAWigEvBDKJujYaYtdpPz1J6MG8pf2OT%2F6otx%2FdnjA9Gknyj6O4fv4Yai718F%2Bpx6Qa%2FxVUL4mgSo32ylr%2FS34n5cMakqQi9H03vktiTuK%2BA4J51WSZzokSDYh4g6VBDoaYMVn7Pwl48YHz9YttM1N7sEvXPYukz2L8rm0mMKu4xym2Hbx&X-Amz-Signature=c8a7fa6a95f828e8f19ed0d845554bfdf4ff8c5f9710084b26943d786459d27e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
