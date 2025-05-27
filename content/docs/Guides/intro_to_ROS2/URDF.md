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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H7GLUGY%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRaRFRJwgniLw2tWh9npnOBKY1jTFyOU823otoN26MDwIhAP%2BbLDrcuuJHkZixgEN5PDnrM5MD62bvkvS9yKGSwyRJKv8DCFIQABoMNjM3NDIzMTgzODA1Igwzionce6ZFoMMyVhgq3AO9XZOZ45zDfehJi9fI4tHJqDMBcgTf7PsKM70ekRug6%2Bv02OsITNy0CCdpjhFFNpJOANuIxbYe8S2LVdz4IT1KuDud%2BXYj9zpmPIhIDD2RT9X%2Fkq6I3u%2BbNJhLn6cnGMfzvy0T2ouko5f%2BGTqTcFxjDKD2rETK2%2FoLDHjnpWTEz0EwFvlNWpHg1PiewHFizPX180PFYNEyBRkgPlbWNtIuxa%2BhlLJUQv%2B9b5ViyGEyNQQ6HSut0h6M88%2BC%2FGcv05nB%2BSfZFP0v26a9p009g3uHEBvV%2BoIt6VX7AISSydsxvXSGlzAkqH%2F2Evsnxsan9MUjMK1NzZp4Oa1UL3dlZFBAtcNu0LVHfhwHDU52RV4b2prHSrX4H5iP1wKkMY4Fsg8YKRt514lLrSY3G70cRekTV29geevzIIEasF97EKYuwT2E3krAOE0YEl0mBZ0ouNniM7NgmLia7wxRLGSK83aYUyqiSJKLlO3myMkzb3mFmUdgqEv3VUjWnmMcCRIeAgGmHatY65qwJJ5%2B778JGFpuwggKfJzSPu8TWYfhaCbhE7IyYuVBTnvaaGfdkkzREzBJ5ZIMsjCdHMeqaXMSbWrgjelIHbOyybm9CeIHzgyf3vYJljPYpmBGz94GoDDUltTBBjqkAZNSjGcu210nd2fvhNSncuGaw2W0gptFCWVPZ%2BE8e113mhN0eHqBbEUiXKL10yQbpNaoQ0dQFp7yUMf1feKLWRuLXiSK%2Fwp9FYOmHi0iRRMTRJHhp2yUK%2B3v9gLxVdNBeWRnGYyt05D6x5v27szyqnusO%2FJhsyko0y3bfJWczk9oL2Ej5YBT36NgB%2BU2wMi3MbYxhtxZN2B5I5%2B7XQf0HuGgq4aM&X-Amz-Signature=8fa691743de00d3882c698ed580e0c58f75d370883cb5544eba05c8d062fed69&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H7GLUGY%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRaRFRJwgniLw2tWh9npnOBKY1jTFyOU823otoN26MDwIhAP%2BbLDrcuuJHkZixgEN5PDnrM5MD62bvkvS9yKGSwyRJKv8DCFIQABoMNjM3NDIzMTgzODA1Igwzionce6ZFoMMyVhgq3AO9XZOZ45zDfehJi9fI4tHJqDMBcgTf7PsKM70ekRug6%2Bv02OsITNy0CCdpjhFFNpJOANuIxbYe8S2LVdz4IT1KuDud%2BXYj9zpmPIhIDD2RT9X%2Fkq6I3u%2BbNJhLn6cnGMfzvy0T2ouko5f%2BGTqTcFxjDKD2rETK2%2FoLDHjnpWTEz0EwFvlNWpHg1PiewHFizPX180PFYNEyBRkgPlbWNtIuxa%2BhlLJUQv%2B9b5ViyGEyNQQ6HSut0h6M88%2BC%2FGcv05nB%2BSfZFP0v26a9p009g3uHEBvV%2BoIt6VX7AISSydsxvXSGlzAkqH%2F2Evsnxsan9MUjMK1NzZp4Oa1UL3dlZFBAtcNu0LVHfhwHDU52RV4b2prHSrX4H5iP1wKkMY4Fsg8YKRt514lLrSY3G70cRekTV29geevzIIEasF97EKYuwT2E3krAOE0YEl0mBZ0ouNniM7NgmLia7wxRLGSK83aYUyqiSJKLlO3myMkzb3mFmUdgqEv3VUjWnmMcCRIeAgGmHatY65qwJJ5%2B778JGFpuwggKfJzSPu8TWYfhaCbhE7IyYuVBTnvaaGfdkkzREzBJ5ZIMsjCdHMeqaXMSbWrgjelIHbOyybm9CeIHzgyf3vYJljPYpmBGz94GoDDUltTBBjqkAZNSjGcu210nd2fvhNSncuGaw2W0gptFCWVPZ%2BE8e113mhN0eHqBbEUiXKL10yQbpNaoQ0dQFp7yUMf1feKLWRuLXiSK%2Fwp9FYOmHi0iRRMTRJHhp2yUK%2B3v9gLxVdNBeWRnGYyt05D6x5v27szyqnusO%2FJhsyko0y3bfJWczk9oL2Ej5YBT36NgB%2BU2wMi3MbYxhtxZN2B5I5%2B7XQf0HuGgq4aM&X-Amz-Signature=895f535f401d922c09655becb5a5b92a4e94070b4a434c684414862da8bc2a36&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
