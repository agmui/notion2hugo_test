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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4QIIVAG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCicLWS6x3gQmrlxOqSpvxYrpUFd0mA7I37J3kmeUpNBwIgG1FlvXpuY0I2iJfrQ9gyJdvfuuVrZl7bSmw9Vt5VpgoqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjWocgh03suZ9kiQyrcA9qi0sK6n5PhCKoch3mi%2F6Fjq%2FQ4qFWc1EsgjFvwrdEklRJIw7FgqCoe8jBtrsCmLxPDE3tIpO9zYFTtdmzZwb195Fn34U95kYAGD744ySsTXuUszBxnpp5Ym2nR4B23Aqbh4A9qqGRTYmCNs4qYUekG%2Fh5%2BmQxH28Xs0rLeh2VUMT8AMb5%2B0N2XDzCp7rs6VtF9WXxV6msOtLPIvMuh9XuLas6e%2BORPUGJqmJB7eLjttkAY7R8ECHgP6VVKJQ%2BHF%2FjT8ruHZh5E7dQ5K5ZbI9fBkexGZVPAIh3TdN6dHfiJOV%2FhHsxVFZwLJY2JToyr97g3f4v3T0nTqhEz3%2FgKLe9x4o6uyUkZXtFD8N003g5WKoke3F3yuU06BAGLAD52iAfqNs43r%2FR3gdZxHx8FS0rO2iaTZFRqVzTNXFdCvMS4gKdlat5B5snV0%2B%2FDGyqLoW%2FQV98foDHREiFPt7zJYkGM75P17heAc26aI3%2FWIlFYl5thDHk3Dgj6swFRk0dQC6DS3XYHb0uj36FKdkkB7jqHv84Z%2B0MLdh6%2FXLJukjMHq9vvEn0%2BOAErEy5KFRclSyn47GP%2Bc6qTpfXwj6l9zdkx3RPe%2Bw2MmJUZYpnRTnpljBRz9hfGh5BUi%2BNaMK3e0MIGOqUBx%2Bym5819LTFwISn%2BjSeE2dWTIhbFQSQykYBeA1tShW2PgMGY2a7mhuPHvRP4Veau4kORipz9U4MJfgrhTJfsW9MKBOjuJVJgNKlorFVdI8SrFijeD1OR815IrHPlIduV6RuXEfrGbk3INEDbAIViijKctsDpiyv68Z%2BfakQXdGaU4uYJoTWdkTrKrhTkEfFgPmeJqbvAR1Cpm14i8ZC9VokiYVkY&X-Amz-Signature=b790dd8196b284f3b3a8a71b721d5973bc125be7cc3fdf385f9d0ec49d54e50c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4QIIVAG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCicLWS6x3gQmrlxOqSpvxYrpUFd0mA7I37J3kmeUpNBwIgG1FlvXpuY0I2iJfrQ9gyJdvfuuVrZl7bSmw9Vt5VpgoqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjWocgh03suZ9kiQyrcA9qi0sK6n5PhCKoch3mi%2F6Fjq%2FQ4qFWc1EsgjFvwrdEklRJIw7FgqCoe8jBtrsCmLxPDE3tIpO9zYFTtdmzZwb195Fn34U95kYAGD744ySsTXuUszBxnpp5Ym2nR4B23Aqbh4A9qqGRTYmCNs4qYUekG%2Fh5%2BmQxH28Xs0rLeh2VUMT8AMb5%2B0N2XDzCp7rs6VtF9WXxV6msOtLPIvMuh9XuLas6e%2BORPUGJqmJB7eLjttkAY7R8ECHgP6VVKJQ%2BHF%2FjT8ruHZh5E7dQ5K5ZbI9fBkexGZVPAIh3TdN6dHfiJOV%2FhHsxVFZwLJY2JToyr97g3f4v3T0nTqhEz3%2FgKLe9x4o6uyUkZXtFD8N003g5WKoke3F3yuU06BAGLAD52iAfqNs43r%2FR3gdZxHx8FS0rO2iaTZFRqVzTNXFdCvMS4gKdlat5B5snV0%2B%2FDGyqLoW%2FQV98foDHREiFPt7zJYkGM75P17heAc26aI3%2FWIlFYl5thDHk3Dgj6swFRk0dQC6DS3XYHb0uj36FKdkkB7jqHv84Z%2B0MLdh6%2FXLJukjMHq9vvEn0%2BOAErEy5KFRclSyn47GP%2Bc6qTpfXwj6l9zdkx3RPe%2Bw2MmJUZYpnRTnpljBRz9hfGh5BUi%2BNaMK3e0MIGOqUBx%2Bym5819LTFwISn%2BjSeE2dWTIhbFQSQykYBeA1tShW2PgMGY2a7mhuPHvRP4Veau4kORipz9U4MJfgrhTJfsW9MKBOjuJVJgNKlorFVdI8SrFijeD1OR815IrHPlIduV6RuXEfrGbk3INEDbAIViijKctsDpiyv68Z%2BfakQXdGaU4uYJoTWdkTrKrhTkEfFgPmeJqbvAR1Cpm14i8ZC9VokiYVkY&X-Amz-Signature=8f171e99dc6162f82bc6702017ab913c0a889bb06d04fd15f772da2eca266ab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
