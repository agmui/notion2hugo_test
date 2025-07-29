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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ONGJ2RD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID30dHYBI%2FLagBOlSALf0Y7NGKZTrndkUXD6tVs%2FhBwuAiEA1YBwxY4I64A5UmU1N5G50MHPDCldMM1sMIqTkK%2FypnQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfuEgyWkYKnd%2BnXqSrcA%2B3coY3b1bPszCokGc3gokAr2AJvYhbBAZr9z2LVnjRCLKAcMQoGDFDdmFAD6vMBcaAsnkcpGyLlq7BJcQPIETeU2P105VetaxUWc1v2pq%2FgSBeyIyMJbGPIykK1RzBKk4eWZ7eIJMLm2Tsn6X4unLwuMeFS7LGL4gWA%2FjodqZD0oH5kEove9GEKCzLJkeearB6iStB3K7XzdsDph%2BPOpRa1PxCmP%2Boaj3JIIPGWaSwwaMjq08krOkN74YBJLolO9vYdc%2FM3LR7wLapTejTXrcbYkFtt3Z7tMpGJlf1d54W5SvQcpOEDuEHEgQID5KurhVkkXI%2Fu7%2BLpc67dz64lXT%2Fzke%2Bg6RlegSDaUpuEEW4exHw7Chf7BpSHm9U5KmJZ1O0RAWX9nOrGYeEvbcN73rY5ox9RSIdYFnNLt7yA%2BxQ%2FvtQ9Ql3eYAp4gxsqNTOSzS%2FYFu7IVB7jLd6ne9DI2Ov3DDW92jiJZrFpb7SkeSTR7JAUpNRhbTTCYyb8exX4upazMROUGO6cJ3AaqZqkiedul37ijUI5QtD3riXFZ88BCs5HOul0MeGNzA2Pu6VfUCO3UcyUijdNtqK6nC8NO0Tbjqk%2BRBhaXJEKvZCXVxEVf%2FlbOdPP9ANpXDENMJH%2Bo8QGOqUB%2BOeyAiSPQN0TDYAPATpQRPL6bDGEAxUIuMy2diGBsFcaVDTOuZhjW6L%2BnDclnzGYlTO1kLzROattXHzjTl4QqDS4XG0vuLGKOu8DnF3sqyycJHgG0a05MsUytaTmmKX3M4WrWUeRLk4VbwPOw%2FPY4On%2FQbyRp6jgfdnqtrgevH28f6tDtJN9gXRpm5VYbsXsH5%2BmIrqjD1W2JwJxGsFRHgDZvYNo&X-Amz-Signature=4f58d84cf4110ac9a5f8392c5a74f53cf7e825b403f5c5e8d57e38fcfe0c955f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ONGJ2RD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID30dHYBI%2FLagBOlSALf0Y7NGKZTrndkUXD6tVs%2FhBwuAiEA1YBwxY4I64A5UmU1N5G50MHPDCldMM1sMIqTkK%2FypnQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfuEgyWkYKnd%2BnXqSrcA%2B3coY3b1bPszCokGc3gokAr2AJvYhbBAZr9z2LVnjRCLKAcMQoGDFDdmFAD6vMBcaAsnkcpGyLlq7BJcQPIETeU2P105VetaxUWc1v2pq%2FgSBeyIyMJbGPIykK1RzBKk4eWZ7eIJMLm2Tsn6X4unLwuMeFS7LGL4gWA%2FjodqZD0oH5kEove9GEKCzLJkeearB6iStB3K7XzdsDph%2BPOpRa1PxCmP%2Boaj3JIIPGWaSwwaMjq08krOkN74YBJLolO9vYdc%2FM3LR7wLapTejTXrcbYkFtt3Z7tMpGJlf1d54W5SvQcpOEDuEHEgQID5KurhVkkXI%2Fu7%2BLpc67dz64lXT%2Fzke%2Bg6RlegSDaUpuEEW4exHw7Chf7BpSHm9U5KmJZ1O0RAWX9nOrGYeEvbcN73rY5ox9RSIdYFnNLt7yA%2BxQ%2FvtQ9Ql3eYAp4gxsqNTOSzS%2FYFu7IVB7jLd6ne9DI2Ov3DDW92jiJZrFpb7SkeSTR7JAUpNRhbTTCYyb8exX4upazMROUGO6cJ3AaqZqkiedul37ijUI5QtD3riXFZ88BCs5HOul0MeGNzA2Pu6VfUCO3UcyUijdNtqK6nC8NO0Tbjqk%2BRBhaXJEKvZCXVxEVf%2FlbOdPP9ANpXDENMJH%2Bo8QGOqUB%2BOeyAiSPQN0TDYAPATpQRPL6bDGEAxUIuMy2diGBsFcaVDTOuZhjW6L%2BnDclnzGYlTO1kLzROattXHzjTl4QqDS4XG0vuLGKOu8DnF3sqyycJHgG0a05MsUytaTmmKX3M4WrWUeRLk4VbwPOw%2FPY4On%2FQbyRp6jgfdnqtrgevH28f6tDtJN9gXRpm5VYbsXsH5%2BmIrqjD1W2JwJxGsFRHgDZvYNo&X-Amz-Signature=b14b0d5127435853763a65b93f1b577ec4f443f949a172c810faa4906ea77585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
