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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMY4TXM7%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkUp2Mw7qEKIqhjJ9VM3mOQE3uEUf3pyCLBlZu3CLgPwIhAI0zvN%2F2RPaYtaHp8wdIz9eH%2FvQBVSrmzCeLcnziaxVIKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTQAhOOByj%2B6PsDq8q3AMlXJ8YFPO15i9gJ0JYJgN%2Bj98t0EG1bVHlJYtu%2BRzzFH4aFAinahAQCpWM%2ByMF8pmIch9ubCYuYycDhqLFXQv580ksEFSG9XwqzA5iA%2BaLC0S062FUZchOjHaEXohDu7DKBKZcK9FbATV%2F2NsThqU6ammqIviKWZTw0G0A5%2FCQriknkqvOI1%2BfTnm8wlw%2B%2FCjbSk0WaTvx4oiIlPO01%2BsYaLfSibtnqG2VksbRvnMFk4vff4n2z%2FihMEkp0xPqGwt3CxJFw06sX4QpcCskPdUUDS2Q9iO5Q54g5W5mXqIQzRla%2FAbq2wR5XCJ6Syc4fubj5%2FF6IWwA1lJGoKTc%2FIX3z1VRpW9f%2FRAeT79JB5CGEQDPniSMBf%2FXlQNHaDWMStzE7XnHmRSmFY77R8DcXvjRYIkxSUhzfYW9KENMmxkwguE78NwTH1PeFe8PSuAhQErtfEj%2BCmSXpKRyhXXoSIVNSANMf2OxjZD5KpQTuZpMiVwSkkU4BiQ2KsLbRRZJ%2FLMgboYSgeupKEzguTRPNv2tFkuaRyThW%2FxOS0dVoggcCBs%2FYz%2F9NeYGQDBe%2BtGvNGxkjg0xrrSSNU%2Bmun7WE0ZB%2B6VrhDYQN8JIsU6zPkCO4ktyMappXMk1xu1jOTCgrczDBjqkAY0QechLIaFNa6JN06oN4MVuqxw4pq%2FEvVSZZogKOdahBr2zvZBp587pdJVyESVvLwOFrw5T6p40prJMZAw3uo3hX1NYeqYzKJWIZmspb0EzBeGUKf%2FYP5WtrIoXY7DdGROvd7tQynlZqMOESaBi0JncB86kmIeeb%2FTAio9ez4QJ58Bw8YkDSDVvZ8%2BENm7bCSi%2F9lHk0EkZVw7UlSxJ04V0JKFk&X-Amz-Signature=7a71e8363ec9f795fc236d0a769c14ccae44d1093acac6ec20d48e0a6327af02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMY4TXM7%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkUp2Mw7qEKIqhjJ9VM3mOQE3uEUf3pyCLBlZu3CLgPwIhAI0zvN%2F2RPaYtaHp8wdIz9eH%2FvQBVSrmzCeLcnziaxVIKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTQAhOOByj%2B6PsDq8q3AMlXJ8YFPO15i9gJ0JYJgN%2Bj98t0EG1bVHlJYtu%2BRzzFH4aFAinahAQCpWM%2ByMF8pmIch9ubCYuYycDhqLFXQv580ksEFSG9XwqzA5iA%2BaLC0S062FUZchOjHaEXohDu7DKBKZcK9FbATV%2F2NsThqU6ammqIviKWZTw0G0A5%2FCQriknkqvOI1%2BfTnm8wlw%2B%2FCjbSk0WaTvx4oiIlPO01%2BsYaLfSibtnqG2VksbRvnMFk4vff4n2z%2FihMEkp0xPqGwt3CxJFw06sX4QpcCskPdUUDS2Q9iO5Q54g5W5mXqIQzRla%2FAbq2wR5XCJ6Syc4fubj5%2FF6IWwA1lJGoKTc%2FIX3z1VRpW9f%2FRAeT79JB5CGEQDPniSMBf%2FXlQNHaDWMStzE7XnHmRSmFY77R8DcXvjRYIkxSUhzfYW9KENMmxkwguE78NwTH1PeFe8PSuAhQErtfEj%2BCmSXpKRyhXXoSIVNSANMf2OxjZD5KpQTuZpMiVwSkkU4BiQ2KsLbRRZJ%2FLMgboYSgeupKEzguTRPNv2tFkuaRyThW%2FxOS0dVoggcCBs%2FYz%2F9NeYGQDBe%2BtGvNGxkjg0xrrSSNU%2Bmun7WE0ZB%2B6VrhDYQN8JIsU6zPkCO4ktyMappXMk1xu1jOTCgrczDBjqkAY0QechLIaFNa6JN06oN4MVuqxw4pq%2FEvVSZZogKOdahBr2zvZBp587pdJVyESVvLwOFrw5T6p40prJMZAw3uo3hX1NYeqYzKJWIZmspb0EzBeGUKf%2FYP5WtrIoXY7DdGROvd7tQynlZqMOESaBi0JncB86kmIeeb%2FTAio9ez4QJ58Bw8YkDSDVvZ8%2BENm7bCSi%2F9lHk0EkZVw7UlSxJ04V0JKFk&X-Amz-Signature=586f28743af34ef66e4e89f20c27230f3fb07ec885b9cc8826f961bfb6ade480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
