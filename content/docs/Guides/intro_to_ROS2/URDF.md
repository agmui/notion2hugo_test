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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T636INIA%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T140955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa8ENWMs43rBGd0PyYmA%2B8kpzCF9Sdt8B5xOx%2BuN7K7AIhAJnKF9AMk4LEMwgWs%2BpPkzkiXPnDcQtVaARyNNaBiueAKv8DCHYQABoMNjM3NDIzMTgzODA1Igz%2B1AlZO7sujF1v4%2Bsq3AN3UFvIJYpKyEZa%2BRCdb6%2BEvNz1LmR145jJQhfIUOWKmxnRbaY7z%2FDevzKv%2BvEqkyDfpXG1x2qHWNktJnQMVzOPxdAi3y5JcJLIloUURRg4nM%2BvFLYWWkLoOoZ6qqwA%2F1dh9RCVo23nvo0HwR2fHN%2FAvy2wTqo%2F0pZoLweL7BjrMOPka5%2B4O%2FwL3vzv5OWnY4xvuKHJm24B%2FBRiAb5WYz%2BvFp9ecF%2FWUNrkz3LQk1IrhubxK0UUfzWjMRp8Uh%2F6zLPLsYNdggW2Mw2k6G2R9bQ2QmFci6wC%2Bdb4wxcbVD5X%2FecvOqz32Z4C0c%2FP7HGXXgvg5i5%2BQETj9v2iA2LoB1aur9GuAf6oRplkYx8ErkgUx744nQFnU%2FcHW3Vo9BgpXjaceouA5miODBmnjETsZA56wwCyIeHEgFTa4IrP4vJzxuiUN6M55r8Lxk%2BW3U6yKdftW9hL0LV%2FSNtHq1YUXdalV%2BUErLZW%2FthVkmkzC0ygUAg1EDPPS8ohjuRCfT%2BvN7ES7kyrXup7aWIYdWA31YG%2BKyS5f6UzLDdUgvJu8dgCdNLWgHfrIS2hh0PZqY38hrSQk6pr2JKKt%2FDDCVNSaE44aDS%2F2aVxNqXw2CLjn7wGJmS%2FjBHoPtUC0Oh%2FXDD%2Bgr7ABjqkAWeQ15PIi0Y6RDMrv502riJ75XKC2B8Jfe27gWUfuU%2BlmLMFyZPQmAmAB6ycZwj1zKXWtLqUPCs2o%2FMef%2BmUic8XQHCHxxPXusIgfhe9MB7ow%2FrUWpWY16g9H08lxHRz83lzCgIjDf8PN5LMYIawmqL7Z46bGj%2FnoyRI7jT%2F2k2q2AfghJ9ygMymig6UyRCtHQHr1Ert3NUBjmEoib8G%2ByfhgNPm&X-Amz-Signature=18973f0b8f058b63d1949cb3d5c81c0759c11f44eaba3a6cf87449ad89a4441f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T636INIA%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T140955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa8ENWMs43rBGd0PyYmA%2B8kpzCF9Sdt8B5xOx%2BuN7K7AIhAJnKF9AMk4LEMwgWs%2BpPkzkiXPnDcQtVaARyNNaBiueAKv8DCHYQABoMNjM3NDIzMTgzODA1Igz%2B1AlZO7sujF1v4%2Bsq3AN3UFvIJYpKyEZa%2BRCdb6%2BEvNz1LmR145jJQhfIUOWKmxnRbaY7z%2FDevzKv%2BvEqkyDfpXG1x2qHWNktJnQMVzOPxdAi3y5JcJLIloUURRg4nM%2BvFLYWWkLoOoZ6qqwA%2F1dh9RCVo23nvo0HwR2fHN%2FAvy2wTqo%2F0pZoLweL7BjrMOPka5%2B4O%2FwL3vzv5OWnY4xvuKHJm24B%2FBRiAb5WYz%2BvFp9ecF%2FWUNrkz3LQk1IrhubxK0UUfzWjMRp8Uh%2F6zLPLsYNdggW2Mw2k6G2R9bQ2QmFci6wC%2Bdb4wxcbVD5X%2FecvOqz32Z4C0c%2FP7HGXXgvg5i5%2BQETj9v2iA2LoB1aur9GuAf6oRplkYx8ErkgUx744nQFnU%2FcHW3Vo9BgpXjaceouA5miODBmnjETsZA56wwCyIeHEgFTa4IrP4vJzxuiUN6M55r8Lxk%2BW3U6yKdftW9hL0LV%2FSNtHq1YUXdalV%2BUErLZW%2FthVkmkzC0ygUAg1EDPPS8ohjuRCfT%2BvN7ES7kyrXup7aWIYdWA31YG%2BKyS5f6UzLDdUgvJu8dgCdNLWgHfrIS2hh0PZqY38hrSQk6pr2JKKt%2FDDCVNSaE44aDS%2F2aVxNqXw2CLjn7wGJmS%2FjBHoPtUC0Oh%2FXDD%2Bgr7ABjqkAWeQ15PIi0Y6RDMrv502riJ75XKC2B8Jfe27gWUfuU%2BlmLMFyZPQmAmAB6ycZwj1zKXWtLqUPCs2o%2FMef%2BmUic8XQHCHxxPXusIgfhe9MB7ow%2FrUWpWY16g9H08lxHRz83lzCgIjDf8PN5LMYIawmqL7Z46bGj%2FnoyRI7jT%2F2k2q2AfghJ9ygMymig6UyRCtHQHr1Ert3NUBjmEoib8G%2ByfhgNPm&X-Amz-Signature=0518dfe22d39199520f249f26732a8d83354497299968b034f5c3b61dfc1ab00&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
