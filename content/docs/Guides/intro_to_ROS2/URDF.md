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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKBDOV6K%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCICLM2UEyizEgfU59qZ%2FVCEOZvAJw4dIsn2AktN65IDgvAiEAnYBfX0c%2FnaYPMZbPqQTHlp50xp%2FMOKYetLLxMqqfwrYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK228e5MqimmD9d%2F8ircA4wSYT5iJCbt4jTSQYwHfVGYrn4lZQUCr1jie2H2Vt1%2BUw1aRPTXd%2FwXNOzYlLAM5SDL7aHifiH3gtKn1EE10AyFP8vtcpjhrHDNgjb6lwsV4pRTMSE5ClCGKN2xfw8n8VVtyr0QDvkh8WkrliYdjBlPnw09zu89fThaeBU1SVrFRzA5lU6SKFdwXgdyZNlxQ%2BR3K%2FuO7OqSlAYtP5fuTrKj%2BhKnlXW9ptGiJIlXcjXsk6fLTebeXFbRm3F8szWv1irJ70B5MS1RHZaRulWchisqALtcCUI4s7oapclZIke1uJyr6edFkMAcWTmCSra2JV1m9BPuGelK8J7iWRGlGnzd1m11zHaABvd84zikSIg3hBy5lWH3ZRWwpn9j8EWyzFcpmcKDMu2euHUzFzlleWNjUsbJCy4Uke8C2qleAegN%2F8nWUL3Qsa8KsOeauGCOZ%2Bw2pjJyuwYEUAVaz3Rx3c4qXFTAq5tGXrFSW7iIb0B8dnpw3EQpDrW9xIrn25NiO%2FeXBmcF1%2B7xnT9xEwrAtKTQxiK59BV5coat1VZ6XMNay3RNlVs7Ow%2FRysABq6ONxUReG92QBPnorElwQVDolEHMKz%2F6PgVqUhipG3SwQRetIDWZ6XSnU%2B%2FFNMv9MJj7tL8GOqUBFj66DllPvNLZcbcEXt99lev5MQZOo1mY4%2FDGDI2kiFvJZvwBih3xeVGC7u3S8RmsRMSF364tOrESW4fyieKMzhvWT11ODkBbkYxaV1yfvzYBSHWZtg89sR22z8XUzVGk8mgG1GhsP1LOI9TG8LDWhgRHs9%2Bmoo%2BnILdtK1hJKn1RKvy4wVDZROAlFck18PzlNLQYIVjHIIB%2B6gX4Bvhk4Bxx%2FzBt&X-Amz-Signature=bcd3895e11badd727682bd1f656986bada21a6fad351b9f65dee53e739de1aa8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKBDOV6K%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCICLM2UEyizEgfU59qZ%2FVCEOZvAJw4dIsn2AktN65IDgvAiEAnYBfX0c%2FnaYPMZbPqQTHlp50xp%2FMOKYetLLxMqqfwrYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK228e5MqimmD9d%2F8ircA4wSYT5iJCbt4jTSQYwHfVGYrn4lZQUCr1jie2H2Vt1%2BUw1aRPTXd%2FwXNOzYlLAM5SDL7aHifiH3gtKn1EE10AyFP8vtcpjhrHDNgjb6lwsV4pRTMSE5ClCGKN2xfw8n8VVtyr0QDvkh8WkrliYdjBlPnw09zu89fThaeBU1SVrFRzA5lU6SKFdwXgdyZNlxQ%2BR3K%2FuO7OqSlAYtP5fuTrKj%2BhKnlXW9ptGiJIlXcjXsk6fLTebeXFbRm3F8szWv1irJ70B5MS1RHZaRulWchisqALtcCUI4s7oapclZIke1uJyr6edFkMAcWTmCSra2JV1m9BPuGelK8J7iWRGlGnzd1m11zHaABvd84zikSIg3hBy5lWH3ZRWwpn9j8EWyzFcpmcKDMu2euHUzFzlleWNjUsbJCy4Uke8C2qleAegN%2F8nWUL3Qsa8KsOeauGCOZ%2Bw2pjJyuwYEUAVaz3Rx3c4qXFTAq5tGXrFSW7iIb0B8dnpw3EQpDrW9xIrn25NiO%2FeXBmcF1%2B7xnT9xEwrAtKTQxiK59BV5coat1VZ6XMNay3RNlVs7Ow%2FRysABq6ONxUReG92QBPnorElwQVDolEHMKz%2F6PgVqUhipG3SwQRetIDWZ6XSnU%2B%2FFNMv9MJj7tL8GOqUBFj66DllPvNLZcbcEXt99lev5MQZOo1mY4%2FDGDI2kiFvJZvwBih3xeVGC7u3S8RmsRMSF364tOrESW4fyieKMzhvWT11ODkBbkYxaV1yfvzYBSHWZtg89sR22z8XUzVGk8mgG1GhsP1LOI9TG8LDWhgRHs9%2Bmoo%2BnILdtK1hJKn1RKvy4wVDZROAlFck18PzlNLQYIVjHIIB%2B6gX4Bvhk4Bxx%2FzBt&X-Amz-Signature=3a23ad727649407dd682e666cbcbf4a9a5aee1904da73674ee5c23617a6ba1a2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
