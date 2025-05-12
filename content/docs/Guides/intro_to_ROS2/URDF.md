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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5WY6EXI%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIE%2BTSBw8EOTk2tHnNLlnY1iMyQ24WWqbillow1kY4ripAiEA23F%2FsB6jmOAj%2BsDs0gukbvPSyfJrb1JR2QytJrJRt3IqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKCHMkVWkUC1ntD8CrcA3KIUY5DDGA8RIaQVwOEXy2b8ojYzV2yISTT%2BXxSHRzTNSnBPAAJckFDeLXcqCtM3KokLWbDFIzu2d%2F6%2B3mP%2FshT%2FECJMezhwOD7Hz%2FIILooExX%2B%2FF1haicAjghXmpAbHh%2FPmzvSSeFgD4qz8%2BDG56kd0yLGS6A9gUmxXP1C6vkGNSwAfJYmAO4KzMXbsIrfZgHSVtU%2BCgQiVTYekY1pJNnriO%2BjmopCAcmGym1GBtdHmPPrffcKoWvkaOejfS5DbRXiQNqA6UWoAJkH0CwsJ0Id2Fhlp6wJopFdEAq29ytYPv2TUnwUNLr8aB3YokL5Y7xlCvY7VsffzJxJlz%2Fu6f1jcHhfPjV51gNYsQVtHlt%2BamosrvqeU788YIcbtilPnpKzqC2k0yFtz8RSMliyaYdWlYpJxb1EHkqgeTVD8XVSVWFdZJIVgmGVDS9E3geBGB1f6M2ReS87FhUWEvqZF9oGt5YpF3mTuIjW7KuWHRRcqUgbz5kcZRbsTp7jrQ4D%2FIyyuED2ilUlrencnFdw%2F0dqpmuOk9PTPRT%2BC8Blo%2F1%2BSspb2XIdBJYNMJPcTE3SbaKxO4NWywnYYUsnGs29NhBWKX1i58XdcQcrVsRKzOJ7h9zW8qYs8Y5A4tifMNzrh8EGOqUBubLc4M%2Bf5G7qGzqdSgS2Mb%2Fc6fjmqs22COankgeit3i5fNgBr009WSYBKu9ZLCY3hob0dkNNiW0rEXZpZPl8DKWHEMpGohiDuvjTho9I6Ul7LLcGQX%2BwI45ZP5WKY6pQaVJsLmzChHT9jfYi2nJxH12xC6MpOaL8zPXNYAXp9KzL5YhEh9DL0Fg29%2BcUIsL%2F8LWwKKQaVgigrWzDi6Rwb0QM%2FXWl&X-Amz-Signature=683baf479085200c77fe97222b4a140d35c6cde87825e41a3ff08d7684ba011b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5WY6EXI%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIE%2BTSBw8EOTk2tHnNLlnY1iMyQ24WWqbillow1kY4ripAiEA23F%2FsB6jmOAj%2BsDs0gukbvPSyfJrb1JR2QytJrJRt3IqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKCHMkVWkUC1ntD8CrcA3KIUY5DDGA8RIaQVwOEXy2b8ojYzV2yISTT%2BXxSHRzTNSnBPAAJckFDeLXcqCtM3KokLWbDFIzu2d%2F6%2B3mP%2FshT%2FECJMezhwOD7Hz%2FIILooExX%2B%2FF1haicAjghXmpAbHh%2FPmzvSSeFgD4qz8%2BDG56kd0yLGS6A9gUmxXP1C6vkGNSwAfJYmAO4KzMXbsIrfZgHSVtU%2BCgQiVTYekY1pJNnriO%2BjmopCAcmGym1GBtdHmPPrffcKoWvkaOejfS5DbRXiQNqA6UWoAJkH0CwsJ0Id2Fhlp6wJopFdEAq29ytYPv2TUnwUNLr8aB3YokL5Y7xlCvY7VsffzJxJlz%2Fu6f1jcHhfPjV51gNYsQVtHlt%2BamosrvqeU788YIcbtilPnpKzqC2k0yFtz8RSMliyaYdWlYpJxb1EHkqgeTVD8XVSVWFdZJIVgmGVDS9E3geBGB1f6M2ReS87FhUWEvqZF9oGt5YpF3mTuIjW7KuWHRRcqUgbz5kcZRbsTp7jrQ4D%2FIyyuED2ilUlrencnFdw%2F0dqpmuOk9PTPRT%2BC8Blo%2F1%2BSspb2XIdBJYNMJPcTE3SbaKxO4NWywnYYUsnGs29NhBWKX1i58XdcQcrVsRKzOJ7h9zW8qYs8Y5A4tifMNzrh8EGOqUBubLc4M%2Bf5G7qGzqdSgS2Mb%2Fc6fjmqs22COankgeit3i5fNgBr009WSYBKu9ZLCY3hob0dkNNiW0rEXZpZPl8DKWHEMpGohiDuvjTho9I6Ul7LLcGQX%2BwI45ZP5WKY6pQaVJsLmzChHT9jfYi2nJxH12xC6MpOaL8zPXNYAXp9KzL5YhEh9DL0Fg29%2BcUIsL%2F8LWwKKQaVgigrWzDi6Rwb0QM%2FXWl&X-Amz-Signature=360eeba12933f715eff9dae9e1b53f3ef82f01014cb372d0633179c71b0883d2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
