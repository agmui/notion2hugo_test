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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646TES7HE%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIApu4u1tny2dgnYELTHnTMBzAoiWdQ8xx8KwPbT9%2BL6zAiAscnTnR3yd0sAbNNsyTAm1UyhoSfICwjbH0TLYjLD1hCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhjZ4QEWi6HgD71WHKtwD%2BIxIffIG%2B%2FdPuE%2F%2BoxKWxXIqv0iSmvo%2Bn9U0XX%2BxJwn9kFEkc%2F62s%2BiyJ4Dfjfy52ivEDepqIyiabn5z1G7laliTyYXqzfKZNKNO%2ByR3dP5bY40sA%2B9wma2pFo2qKacWDfAV4WruRxFBC%2FVR2kyqIGKUpAAw%2BzaVewaDt1I32EWuqTZmeqnK3ZRtuuHNgmSJlJzjmFze319FEK3ie%2FKc6Zce0s%2B279UeJfmszgZ6nT5Uq%2B8alEJAhC2weQHuUtwkpqgHAZfdKs%2Fwyh7tbHRfVxWAhWcYio%2FIXE9b%2F9ZwjYqB6LxRfyjoNPXhoBvk5B2StxkwxPElqaRjQxzB%2BJ1ATz5SF4pP1KvV9kd%2BB0%2BCfBW99q6E%2Fn4FxsbyBpow%2B4mRaIcGUa4lWdSMWG9F%2BtF0BcLN4KrK1OWTURAWor%2BZ%2FbBYfUTsuoZTQN3eC%2FLf1KehludEEkY1MIWOysXnyhrLbr4n3hAaN8mKaYLjJqDHGkp6Ylm67su2G15oQrCk74dY7fFasBGLtIfGqfVweYjGFAiONPPl6NRar3alVdmQ%2Bbrj4LIJl%2FxLp4o0UqHFcZVn1IgjfE4nsPrdbsRoDZsEYbItvtwZ%2BSHZGCF2V0VwBC95bYNX0CgogYZHwY0wndCivwY6pgE9pd%2B%2BosbUPgWPaXBgb93wkQfaPfPGi%2Bs4CHGTOo8ZSa6Q7RHYJDnQivgPikZr9UwdH6uRbLG%2FvotTKxdiA3dXuptzvQziUPIPDirNuCjMrgV0qmiTTw6zelfN9y%2B%2BHq9Nm%2Bi5WAgpX3Dyem%2B%2BuvOj2DSfyyTSvz3OltHp%2BVI9mRVXfoZYFweScbq3IDg3toV7mG2XiIkMsa4RrNq6WDroJY8Slbb6&X-Amz-Signature=f260b8fb4cf34e78e364cc016155ca6859732e106e372c8f7c83f36512c36eb0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646TES7HE%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIApu4u1tny2dgnYELTHnTMBzAoiWdQ8xx8KwPbT9%2BL6zAiAscnTnR3yd0sAbNNsyTAm1UyhoSfICwjbH0TLYjLD1hCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhjZ4QEWi6HgD71WHKtwD%2BIxIffIG%2B%2FdPuE%2F%2BoxKWxXIqv0iSmvo%2Bn9U0XX%2BxJwn9kFEkc%2F62s%2BiyJ4Dfjfy52ivEDepqIyiabn5z1G7laliTyYXqzfKZNKNO%2ByR3dP5bY40sA%2B9wma2pFo2qKacWDfAV4WruRxFBC%2FVR2kyqIGKUpAAw%2BzaVewaDt1I32EWuqTZmeqnK3ZRtuuHNgmSJlJzjmFze319FEK3ie%2FKc6Zce0s%2B279UeJfmszgZ6nT5Uq%2B8alEJAhC2weQHuUtwkpqgHAZfdKs%2Fwyh7tbHRfVxWAhWcYio%2FIXE9b%2F9ZwjYqB6LxRfyjoNPXhoBvk5B2StxkwxPElqaRjQxzB%2BJ1ATz5SF4pP1KvV9kd%2BB0%2BCfBW99q6E%2Fn4FxsbyBpow%2B4mRaIcGUa4lWdSMWG9F%2BtF0BcLN4KrK1OWTURAWor%2BZ%2FbBYfUTsuoZTQN3eC%2FLf1KehludEEkY1MIWOysXnyhrLbr4n3hAaN8mKaYLjJqDHGkp6Ylm67su2G15oQrCk74dY7fFasBGLtIfGqfVweYjGFAiONPPl6NRar3alVdmQ%2Bbrj4LIJl%2FxLp4o0UqHFcZVn1IgjfE4nsPrdbsRoDZsEYbItvtwZ%2BSHZGCF2V0VwBC95bYNX0CgogYZHwY0wndCivwY6pgE9pd%2B%2BosbUPgWPaXBgb93wkQfaPfPGi%2Bs4CHGTOo8ZSa6Q7RHYJDnQivgPikZr9UwdH6uRbLG%2FvotTKxdiA3dXuptzvQziUPIPDirNuCjMrgV0qmiTTw6zelfN9y%2B%2BHq9Nm%2Bi5WAgpX3Dyem%2B%2BuvOj2DSfyyTSvz3OltHp%2BVI9mRVXfoZYFweScbq3IDg3toV7mG2XiIkMsa4RrNq6WDroJY8Slbb6&X-Amz-Signature=3ecc7f2aea94c23e26de697b7559f693c250a9cf275c31258cb39975f217c833&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
