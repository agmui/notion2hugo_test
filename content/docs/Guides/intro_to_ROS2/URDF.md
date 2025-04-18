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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AUFWO4X%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T220803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqHzQr0hx%2F4IqHyeMVadPuvYz46gMvabwyVwwh2wpVLQIgD4Rk5YfEktG7foPJMLsFCRVRSYzZUtzJ0qsXitewODQq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFoGMXqKAqVc%2FjMySyrcA5dN76mspGcZXh66kGDy%2Fs0lLsyVcBBXkCcv1Yk2pNs%2BKfFM8sa7G69klUUiG6R6PykrX%2FLJcI5H24KlLLbRQ%2FgYg012w1tZ%2FhOoi63tbI1zbVkNKpQpNaXTfb%2BT4qVVE9f8sFxDdMh%2BCvK2zDG566CQbuB4ieHryEmO8NcTmNAbBjVbpBz92Mzwo6WwPuLS7WodqLuZO2NbfCvN1PfLI%2BlDC77kz%2FD%2BR4ABn1s6EXCbBAbpA2AenIKUuxaK8S7at2aWEe0IGB51L3rXqDdpvHC6FMj%2Bsp8OrpijhTpKucOqJpkAW%2FZhyYpLh8stW9ZCMkMvD65KR5j60NCnNFbHAEA7K4hr1m4jYzbereTxxLEzAsyUhrB53E9ctPnj4FBVjRFDEe5PKWUI2hz%2FFO0Vj0RP5%2FuCWGCv5n4wVG7mLsn8oxksmNp6e84doS6LTbXEkVBWGqw4%2FIAmIhR98a0YWs0lMRh%2F4WRmQreRcFkRhsB%2BOO%2B6fyKFywwqLgiluemPcr1xoQgJGKyhN5AZwGF3ReqjHKZhpO8RRZKB%2BL3I9xqRq%2FPEqgxvtNCClJp1DdzucNcVJVgvrB7rAHGwy7%2BpHP9yzBCbnKT9BHJd1aeXbxeWsD%2BeF%2F24hlK2nUE1MIKZi8AGOqUB17aq0CDtOQC9fM0Auy5VY%2BlUZJCT5Jc8UIcXd70uRSCMrJhMfeO7WOHSLNlqUtXJpXWlxMbBhhAI3qyZoK1tMODJDAPKEhaNvXkA7e8zV%2FdE%2BTXGB4QacAS2Jw9naUn2tzZw0cvNhdFJwpT4qno3K3z4R0AwjhyVH%2BBF0h8vBeTC3TwcVlYEWpjgA96tPpu2hslkK5pAXudwJheCScBWhF%2Fp%2Fdtq&X-Amz-Signature=65158b6b0a50e70aa45eb31e73228f7c24733925b3c0d6a68cc6654817e4c6a9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AUFWO4X%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T220803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqHzQr0hx%2F4IqHyeMVadPuvYz46gMvabwyVwwh2wpVLQIgD4Rk5YfEktG7foPJMLsFCRVRSYzZUtzJ0qsXitewODQq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFoGMXqKAqVc%2FjMySyrcA5dN76mspGcZXh66kGDy%2Fs0lLsyVcBBXkCcv1Yk2pNs%2BKfFM8sa7G69klUUiG6R6PykrX%2FLJcI5H24KlLLbRQ%2FgYg012w1tZ%2FhOoi63tbI1zbVkNKpQpNaXTfb%2BT4qVVE9f8sFxDdMh%2BCvK2zDG566CQbuB4ieHryEmO8NcTmNAbBjVbpBz92Mzwo6WwPuLS7WodqLuZO2NbfCvN1PfLI%2BlDC77kz%2FD%2BR4ABn1s6EXCbBAbpA2AenIKUuxaK8S7at2aWEe0IGB51L3rXqDdpvHC6FMj%2Bsp8OrpijhTpKucOqJpkAW%2FZhyYpLh8stW9ZCMkMvD65KR5j60NCnNFbHAEA7K4hr1m4jYzbereTxxLEzAsyUhrB53E9ctPnj4FBVjRFDEe5PKWUI2hz%2FFO0Vj0RP5%2FuCWGCv5n4wVG7mLsn8oxksmNp6e84doS6LTbXEkVBWGqw4%2FIAmIhR98a0YWs0lMRh%2F4WRmQreRcFkRhsB%2BOO%2B6fyKFywwqLgiluemPcr1xoQgJGKyhN5AZwGF3ReqjHKZhpO8RRZKB%2BL3I9xqRq%2FPEqgxvtNCClJp1DdzucNcVJVgvrB7rAHGwy7%2BpHP9yzBCbnKT9BHJd1aeXbxeWsD%2BeF%2F24hlK2nUE1MIKZi8AGOqUB17aq0CDtOQC9fM0Auy5VY%2BlUZJCT5Jc8UIcXd70uRSCMrJhMfeO7WOHSLNlqUtXJpXWlxMbBhhAI3qyZoK1tMODJDAPKEhaNvXkA7e8zV%2FdE%2BTXGB4QacAS2Jw9naUn2tzZw0cvNhdFJwpT4qno3K3z4R0AwjhyVH%2BBF0h8vBeTC3TwcVlYEWpjgA96tPpu2hslkK5pAXudwJheCScBWhF%2Fp%2Fdtq&X-Amz-Signature=a3b4dafd714fc9a4dd4a57019917108442d69779fb2f724df25eaf7dce20d5b8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
