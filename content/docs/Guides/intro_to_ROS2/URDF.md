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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XOTRCXL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCSkhRYGK1EXo5xW2xAakqdSaaLtM%2BfXl5sbrWd%2FAjXZgIgfmiS9qpw5mQDEVoa2hX0yTXmUOkmKZEAjixBLuLMy9sqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIhVbVx8PoXvyJCWyrcA%2Bxb7paQNuX%2BxVE6LwF8uyhX2iAUNrfStiQF97vI%2B7lwldRW7%2B8%2Bphf22GV%2BfwJFwMi8pjejbkMyqRRFpoWyY2Ozla89mrd18YnAfdsGH0gq1BytbrrQK9b5GKqpfqNYgyG8%2FNXWBTnzB5ncWswF42oZj7YtT700VlrQaxLUY67NCLu0gJi14mHz0xx75MBUDFU50W9nljWK9kGQ2nzTWzkosnKdQ6vMqYjk9lvP7OchAZ%2F3KdBhqTEZEtUVxQmrbSjZwN3gG5tevpqB48aN4DJ1Ecdv%2BP74pwntT6k52E3MEMfyeqLJs%2B0NNtAtsPfEAP6O4U9sh7l%2F%2FvpqqsByAr2QhVDc4LZuBUx%2BPCgylYzCUEJyi%2BLeaWNzWLKaYm0GeQQFd5soXKAWmIOUKAd%2BUvT6eONjDCH14wp3Hu6g%2BaN01iys35Fcj%2FJSdsbKHL%2Bi4bLg9T7%2Fc7k3UgsjV2ORrO498IbuYtF%2FRsd2wKjGkOS63joWNZDYOwnpHHO4PM6sVkLlcj7pIUT6cjTj6XBxkUw4woLbm9n9DROtneLv0T2TvjxgToS8fUFDwERAjKCTug9zc5IBi3j4gaBtn0YMHNBwT2iiD7uWd4L57WO51YvPybcS0SaQapthsq00MKqQrMIGOqUB5ZfNF73%2Bi%2B1OHcrCdGOZxe7CL5o7pvfoqwt6ShV3jMLf7Od3wBw%2FrTz%2F2BAk2a6t202v9mQS7ohN0EyOcf6Fsa%2BL61mD20KtGyjvMig2Vi1Dmyy0x%2F%2FLtUj3W4KoWsKqRf96XDVJRXuOxyPc%2BR%2FLqyb634lHp%2BwJZ0nH%2FMGRTudzmkVlwEUGUsSw2w6dYNQnorVMYS246JaND1ti8gBT0Q8csfL7&X-Amz-Signature=ba91a4e2618ad66b11824829074c8753131341a899e2772fdd7ffa1b66fafd69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XOTRCXL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCSkhRYGK1EXo5xW2xAakqdSaaLtM%2BfXl5sbrWd%2FAjXZgIgfmiS9qpw5mQDEVoa2hX0yTXmUOkmKZEAjixBLuLMy9sqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIhVbVx8PoXvyJCWyrcA%2Bxb7paQNuX%2BxVE6LwF8uyhX2iAUNrfStiQF97vI%2B7lwldRW7%2B8%2Bphf22GV%2BfwJFwMi8pjejbkMyqRRFpoWyY2Ozla89mrd18YnAfdsGH0gq1BytbrrQK9b5GKqpfqNYgyG8%2FNXWBTnzB5ncWswF42oZj7YtT700VlrQaxLUY67NCLu0gJi14mHz0xx75MBUDFU50W9nljWK9kGQ2nzTWzkosnKdQ6vMqYjk9lvP7OchAZ%2F3KdBhqTEZEtUVxQmrbSjZwN3gG5tevpqB48aN4DJ1Ecdv%2BP74pwntT6k52E3MEMfyeqLJs%2B0NNtAtsPfEAP6O4U9sh7l%2F%2FvpqqsByAr2QhVDc4LZuBUx%2BPCgylYzCUEJyi%2BLeaWNzWLKaYm0GeQQFd5soXKAWmIOUKAd%2BUvT6eONjDCH14wp3Hu6g%2BaN01iys35Fcj%2FJSdsbKHL%2Bi4bLg9T7%2Fc7k3UgsjV2ORrO498IbuYtF%2FRsd2wKjGkOS63joWNZDYOwnpHHO4PM6sVkLlcj7pIUT6cjTj6XBxkUw4woLbm9n9DROtneLv0T2TvjxgToS8fUFDwERAjKCTug9zc5IBi3j4gaBtn0YMHNBwT2iiD7uWd4L57WO51YvPybcS0SaQapthsq00MKqQrMIGOqUB5ZfNF73%2Bi%2B1OHcrCdGOZxe7CL5o7pvfoqwt6ShV3jMLf7Od3wBw%2FrTz%2F2BAk2a6t202v9mQS7ohN0EyOcf6Fsa%2BL61mD20KtGyjvMig2Vi1Dmyy0x%2F%2FLtUj3W4KoWsKqRf96XDVJRXuOxyPc%2BR%2FLqyb634lHp%2BwJZ0nH%2FMGRTudzmkVlwEUGUsSw2w6dYNQnorVMYS246JaND1ti8gBT0Q8csfL7&X-Amz-Signature=72083b4a09fd94ccbe3cb09837734b9647f3d2225760cbc724efaf4bb8b461e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
