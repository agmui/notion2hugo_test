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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NJCFJW7%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIBZgnhAWMs4QtuziPsIfNXcCHMEivIqZ0N56oq2D2KfkAiBIICZHv0kEMTSRmKtjHIglwCt7kr1L1O7Ymoi69Y32cSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM95G27gJueUHuYtDFKtwDPNgySe4ChMYOfYnFEQFlH2%2F70UFRaChHUgXUG0kFd7c1OcqQqM%2FPRGmvgaRRx6kffGXdiKtO1Two3bZ5rbsW7IDuBhlUcTmIA8HuxMAXH9gmJpeyH5nzHQ178jcqYZoLfD4LCxi4p2Jhob8j7%2F64dF2BsK4q5MXajBvfLPzohau72on4zO8b1X%2BeU02mxUgVjzu7UBE4vciss%2BkSwCFwVZKBY4NLOwxScHnXg2rXHAQITIZc8STgLIbBcoLgA5r6sj5I8vqu3DEGMghxq5OG38FUo8DIG8PevnRTIJwEjlBzcEYi0k3vvFPxgw8bxwJRjHbq%2FPBqQ4GwMnhup5StRFupUX3C7veQ9Y5b74aUZWGo8ihyFR4hJbbZQ%2B189FPEIPyCHPQlCorMiz7PUrDm2Q0dHwwxSihhYPMhq9f5ZI%2Fn5RpeuWxE0OMRdo6VnMrpEY2TBMwwFPK1qCsl9uUPndQixSKLP4oyfAW1aeWSL59pNl5hDIikoP9oMRfRLsRWuEZ5WKtaiaptY%2BSFuKV8f6MBdbjViQQt4572RzkDmGcE%2F%2FsH43QAWUDlBoRRAMVWgP8oE0A%2F%2Bm4HkuuP7IM4VDTlVTdzg8gMtVo20EAcmuocgzl5%2FAqttLcmZmswwuqivwY6pgHkCu65TuonnDxPbWk3Z48HqMO4EFm1BFgvgSHwYShmW5RGH1VSeTuEDTCW%2B9qTJ0ernSK%2Fyi%2BbzSe20Rz6ZSXj1E9jw5wMCgtsaUKOUM%2FKn%2B7ByCte1uEAUZvDCpm0XWz%2B2ubQ5CJ0%2BUM4iH47VULY72ZfEsWeqOjQNXvT0wIfjeGTC%2Ff9l9Mb3SnjrL9ySmNPVfi3WSUD9tTUnozvURb56OqHYamv&X-Amz-Signature=732452d51bf5fd231fa9e26a8a36b5a27b2b89a12750efd390029720e4021d02&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NJCFJW7%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIBZgnhAWMs4QtuziPsIfNXcCHMEivIqZ0N56oq2D2KfkAiBIICZHv0kEMTSRmKtjHIglwCt7kr1L1O7Ymoi69Y32cSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM95G27gJueUHuYtDFKtwDPNgySe4ChMYOfYnFEQFlH2%2F70UFRaChHUgXUG0kFd7c1OcqQqM%2FPRGmvgaRRx6kffGXdiKtO1Two3bZ5rbsW7IDuBhlUcTmIA8HuxMAXH9gmJpeyH5nzHQ178jcqYZoLfD4LCxi4p2Jhob8j7%2F64dF2BsK4q5MXajBvfLPzohau72on4zO8b1X%2BeU02mxUgVjzu7UBE4vciss%2BkSwCFwVZKBY4NLOwxScHnXg2rXHAQITIZc8STgLIbBcoLgA5r6sj5I8vqu3DEGMghxq5OG38FUo8DIG8PevnRTIJwEjlBzcEYi0k3vvFPxgw8bxwJRjHbq%2FPBqQ4GwMnhup5StRFupUX3C7veQ9Y5b74aUZWGo8ihyFR4hJbbZQ%2B189FPEIPyCHPQlCorMiz7PUrDm2Q0dHwwxSihhYPMhq9f5ZI%2Fn5RpeuWxE0OMRdo6VnMrpEY2TBMwwFPK1qCsl9uUPndQixSKLP4oyfAW1aeWSL59pNl5hDIikoP9oMRfRLsRWuEZ5WKtaiaptY%2BSFuKV8f6MBdbjViQQt4572RzkDmGcE%2F%2FsH43QAWUDlBoRRAMVWgP8oE0A%2F%2Bm4HkuuP7IM4VDTlVTdzg8gMtVo20EAcmuocgzl5%2FAqttLcmZmswwuqivwY6pgHkCu65TuonnDxPbWk3Z48HqMO4EFm1BFgvgSHwYShmW5RGH1VSeTuEDTCW%2B9qTJ0ernSK%2Fyi%2BbzSe20Rz6ZSXj1E9jw5wMCgtsaUKOUM%2FKn%2B7ByCte1uEAUZvDCpm0XWz%2B2ubQ5CJ0%2BUM4iH47VULY72ZfEsWeqOjQNXvT0wIfjeGTC%2Ff9l9Mb3SnjrL9ySmNPVfi3WSUD9tTUnozvURb56OqHYamv&X-Amz-Signature=de794def6bbb3600bb2960de739cbd47fd3011a5e1cf023d28bbac52d55050db&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
