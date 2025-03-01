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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KNTRICS%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIAjW4r6N3Rzn6UBVR8nwjrGSkN4l2kVhHeeu9TND1iyhAiEAgdds%2BT9PcGii1iW9hiPck3Bv1Y012No2etGLnFKMNq0qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsMntTwvwzFxDlIQyrcA7mfRLTzgln2%2BQf2T%2BqJF66%2FeNGQEM6x4CpnQd4BnWc4%2F9yE4yKOcmfXQH91mFVmEIqmpvoaGcPRPHR52D6t67k63Pp76wwPN8S2nOS4Ii5sw7j2ESaavjdTI5cUzqkVItVdCtEumcPvezR%2Fcv%2BlefY15K7%2B64aNosxSqnP5gB%2BTrUwwlywLO9rTP9Ub7gWUaU7PWMmjV2Pa1mG3cLapTKBSCbrLvW9IBc%2FRfK34h88A6bkukvwC8z162LPw6jJXeDYeE4Og5LA1XNn6LjfY%2FHn3hOYTeGrBkUMn%2BQlGb9USiNzK%2B9Z3ybc3GSzrdTwP5zACAKqnVuN4qNjjyAATFF42nEfft38SX6wD3U1E3h8hUXVd%2BTxSw5cyAZeqNtjnVog%2Fni9nCmwJpl9nLDTEfW7OtllvZc8K%2BOb1waVAY5OU6T95Y2aLu5eaC9KtHhS%2FheELxkm1F7ktK%2B%2FZ%2BtYbSVlnsPriDL4xkFp9bJTgAGlky%2BsML9Yfvi9o5RLWbkIHd6Ku3vN%2F6GhPiASSPfUJsRNvz2qV6aS4%2BIBT356wZVVtwKlst%2FN%2FbcsGYxuD%2F9nxG1Cr%2FfRdlmOozsPUNnfDPUV0KC4KDsdMttg9X%2BMrHOe1IaDuDJctYrYvH0GZMJ%2Byi74GOqUBSxrBJp8ga7LoPR9UQ1bZKKOI%2BVgiv54hR6fJ9RLkBdo16XupBDM8rIdnpayTPgb5hKZJox20WPWRItb4ayVRECqYDiV7AXkdWWYP%2FVYPScu0SR4fvmTZhdhP2EHeIlph1sosIn0ZPGBWeDFvMXsUkqvHRB1bEZXC38fs6SF6yvWqX0KUUWvDv6wOE9f8xckgxoYpDlmXwtOrNh6bd0KFr8FZFp%2Bm&X-Amz-Signature=cd24adca00c6d1b913c009c5a72597a3f3153d65c9cb9d515a5e740fb4fdaaf0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KNTRICS%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIAjW4r6N3Rzn6UBVR8nwjrGSkN4l2kVhHeeu9TND1iyhAiEAgdds%2BT9PcGii1iW9hiPck3Bv1Y012No2etGLnFKMNq0qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsMntTwvwzFxDlIQyrcA7mfRLTzgln2%2BQf2T%2BqJF66%2FeNGQEM6x4CpnQd4BnWc4%2F9yE4yKOcmfXQH91mFVmEIqmpvoaGcPRPHR52D6t67k63Pp76wwPN8S2nOS4Ii5sw7j2ESaavjdTI5cUzqkVItVdCtEumcPvezR%2Fcv%2BlefY15K7%2B64aNosxSqnP5gB%2BTrUwwlywLO9rTP9Ub7gWUaU7PWMmjV2Pa1mG3cLapTKBSCbrLvW9IBc%2FRfK34h88A6bkukvwC8z162LPw6jJXeDYeE4Og5LA1XNn6LjfY%2FHn3hOYTeGrBkUMn%2BQlGb9USiNzK%2B9Z3ybc3GSzrdTwP5zACAKqnVuN4qNjjyAATFF42nEfft38SX6wD3U1E3h8hUXVd%2BTxSw5cyAZeqNtjnVog%2Fni9nCmwJpl9nLDTEfW7OtllvZc8K%2BOb1waVAY5OU6T95Y2aLu5eaC9KtHhS%2FheELxkm1F7ktK%2B%2FZ%2BtYbSVlnsPriDL4xkFp9bJTgAGlky%2BsML9Yfvi9o5RLWbkIHd6Ku3vN%2F6GhPiASSPfUJsRNvz2qV6aS4%2BIBT356wZVVtwKlst%2FN%2FbcsGYxuD%2F9nxG1Cr%2FfRdlmOozsPUNnfDPUV0KC4KDsdMttg9X%2BMrHOe1IaDuDJctYrYvH0GZMJ%2Byi74GOqUBSxrBJp8ga7LoPR9UQ1bZKKOI%2BVgiv54hR6fJ9RLkBdo16XupBDM8rIdnpayTPgb5hKZJox20WPWRItb4ayVRECqYDiV7AXkdWWYP%2FVYPScu0SR4fvmTZhdhP2EHeIlph1sosIn0ZPGBWeDFvMXsUkqvHRB1bEZXC38fs6SF6yvWqX0KUUWvDv6wOE9f8xckgxoYpDlmXwtOrNh6bd0KFr8FZFp%2Bm&X-Amz-Signature=9e0ae5e1d349d82b0a72212cc60ddbf9dfef3650f21a5c4d37ce1ad7854158c3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
