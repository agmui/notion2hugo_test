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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6HYD75X%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T081010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWc52ZUA2iHMVIAUHpV3tRPKs8dbbEJ3lMV2ntk56jYAiA6Drktnb5XZjJuywMIEyj6kqtRH%2Fs%2FmuFLW0JY9K2AZyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMJoHVX7g1BgU4vF8uKtwDVzqoDv0NVsGZWNgb9TlcsiCS%2FmBJPiAmcf8zzUrYQ0AwC6h3xDdpEXPJKvr%2FyBlTRe0wZqmmXQ%2FLyNi0jheY%2F%2BWW0BwbK5REZBM1GUMPT0qjl%2FkIB7vN8cYPBiq2GoTwhBAa66SZTpsvp84NNa9PF%2FqIeTYnYzm6d1fsEBBRQZFESAxXc7eOKSU2u0tZVdU0ZHJdSFHXV0VbJRs%2BhPhU%2BrFcKcwgoyuz9llLI9pkQ6FbvpNCPwCfGim42eNTCat8t%2BzrpYDxQ7s7BOo4MDysNGMh39BUGu6UQKBXtjQ83bV96woJijXxxeu3CXbtSfqld89FaWdwGyNtaLsPYV0Xl%2BN6kkgPuRQQouucXyEA3oAZ8YsvXuSwuumIXCeMD9NJ0owjPn3%2BwtFDqV1bE1d1ka34K4Kvl59SZkquf9EklIM4ILQJCO5J8VUqEeifqalABr5KV%2BH8%2Fqrqdr67h96Wk7qd3fxnIFLfxW2oozL%2BaVWjYqI9fz4241EvOT2Ad91Ldv3x3tVnLjmiJiOu5u6aRA%2FT4Hwprvj6epk3YDetpppuXUliBkP%2B2c3ZW9%2Fg7zGJlf0yjm5AbqiYh2zx8orys7jSs8rQUWUpeRmxgeEjuYVCGGAZeBgQMtpHg6kw76aywAY6pgFAatoyOWdT1H3Y3ipwT4ACmBZxFnAOA2quagQcIrKG3TYnqZvHf82HRfSHIuhymdKiqybVsbh7oqt7BjxMe2JKmVZ5urIVwNLokuA5rzUBTEcgmGY%2FUtyMsCaX33fZQMkd%2FqwiFvQYciuXxaCZgeb0cKatnHP8D5XsEFS8qQX%2F2HHEodXNeXPm93nWPTFkKgm1ybmvo9kwEBEiZjHwMtsjMgf1bUpN&X-Amz-Signature=125404dcbfe31d749e79c6edfdcf662f40628e6ea84211f7959bee7ba569698d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6HYD75X%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T081010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWc52ZUA2iHMVIAUHpV3tRPKs8dbbEJ3lMV2ntk56jYAiA6Drktnb5XZjJuywMIEyj6kqtRH%2Fs%2FmuFLW0JY9K2AZyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMJoHVX7g1BgU4vF8uKtwDVzqoDv0NVsGZWNgb9TlcsiCS%2FmBJPiAmcf8zzUrYQ0AwC6h3xDdpEXPJKvr%2FyBlTRe0wZqmmXQ%2FLyNi0jheY%2F%2BWW0BwbK5REZBM1GUMPT0qjl%2FkIB7vN8cYPBiq2GoTwhBAa66SZTpsvp84NNa9PF%2FqIeTYnYzm6d1fsEBBRQZFESAxXc7eOKSU2u0tZVdU0ZHJdSFHXV0VbJRs%2BhPhU%2BrFcKcwgoyuz9llLI9pkQ6FbvpNCPwCfGim42eNTCat8t%2BzrpYDxQ7s7BOo4MDysNGMh39BUGu6UQKBXtjQ83bV96woJijXxxeu3CXbtSfqld89FaWdwGyNtaLsPYV0Xl%2BN6kkgPuRQQouucXyEA3oAZ8YsvXuSwuumIXCeMD9NJ0owjPn3%2BwtFDqV1bE1d1ka34K4Kvl59SZkquf9EklIM4ILQJCO5J8VUqEeifqalABr5KV%2BH8%2Fqrqdr67h96Wk7qd3fxnIFLfxW2oozL%2BaVWjYqI9fz4241EvOT2Ad91Ldv3x3tVnLjmiJiOu5u6aRA%2FT4Hwprvj6epk3YDetpppuXUliBkP%2B2c3ZW9%2Fg7zGJlf0yjm5AbqiYh2zx8orys7jSs8rQUWUpeRmxgeEjuYVCGGAZeBgQMtpHg6kw76aywAY6pgFAatoyOWdT1H3Y3ipwT4ACmBZxFnAOA2quagQcIrKG3TYnqZvHf82HRfSHIuhymdKiqybVsbh7oqt7BjxMe2JKmVZ5urIVwNLokuA5rzUBTEcgmGY%2FUtyMsCaX33fZQMkd%2FqwiFvQYciuXxaCZgeb0cKatnHP8D5XsEFS8qQX%2F2HHEodXNeXPm93nWPTFkKgm1ybmvo9kwEBEiZjHwMtsjMgf1bUpN&X-Amz-Signature=428a43cd805c818cd9dc91a046d1faffcb4e644ce1ea621cddd845ddbed4d1a5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
