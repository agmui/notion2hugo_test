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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WA7ZMOA%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNk1oSsUEOxE%2B6gIOhYM2DWf03FiK39HFsheYFBe8aDAIhAMbaoZMG4UIfjlwKdIUEZV%2B4ZUWPxcT4TnrCYA9gX5%2FDKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdWulGkjnXxXgYBfMq3ANm4DRUBXkQJ71Ytfnw1g%2FG4EYIjQJ6PsaHUfbKqKrRHZ01xouP71l%2F7fNWCL8zVNb6Q21qvMhnGdpeBaCiLY6q4G8SYKRKuNLjclV6B9LptK6B6eFi2U8qYyWktU%2Ffs5ydO0EbXZigVwr%2BLa49mtnY5UbG0MhTZCb7RjL2cl%2FW7Eq3fO0IPHcJZCw243NEwGdN48HfHW%2BOz8yvXCYjrKVALD8Jyz56KxnTVLqHVrMYnB73UcbZniBZftOjDsc60bNImn7POZyFlMUmyI9vSOs4pJF2PNbIS%2BlRDSUG4BpeghL7pAIufO%2BRzlizngU8PPHDyeeZlvNybhlntkEDb7U3j8TzN33XHHO4xNNb0Qxl6gmDm%2BCNPb7YqK9xra9CxiWnEwY3SZ7u5g0LlTIu8FCJS7F%2B04WcdSFJC%2B4Z%2BpX%2Bx1Gg4qlMcVYdIYHY6ZWmDqAu8e9e3zZejwc%2Bh6FaT7eSuU%2B9xXg78LceIw3nI0LgV2v%2BzOvFzq%2FCRQBv94qtETEJrHRS2Jn7bwhdgp7eFvfDKC%2BjD02RnDXqpTXX1eFCmk1yenfoTI%2F5wuBw%2FjrvRNHdMKYczblzWF42hrz%2F2576GexkszLDejRwy2cd2Gh2y86kvGyzc2KxHtS%2FTDD0ju%2B8BjqkAXSGOAs8x0iTZFASraRkKH0svNoUxmpZci7pT%2Bii7OARXgkXDtuSrKk8AvtFeF0V6Cc37CIryfd%2FePBmcrW0d25QxEQT%2FwdVVBnzwd6Ie7dMCk%2FycIYy7vesod6gmrCviRRMm8r4vl4eA5V3kP0PzOSULyP17Vu2n1dZNZw8rfddm3%2B7QKWrydCurh%2FWu8k5ymmHJoP3aLDFjGMQfjbHILnbeVn6&X-Amz-Signature=53277316c0db116ab0f63db0795761421699bd826dd9e14b76f0a7646632c57d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WA7ZMOA%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNk1oSsUEOxE%2B6gIOhYM2DWf03FiK39HFsheYFBe8aDAIhAMbaoZMG4UIfjlwKdIUEZV%2B4ZUWPxcT4TnrCYA9gX5%2FDKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdWulGkjnXxXgYBfMq3ANm4DRUBXkQJ71Ytfnw1g%2FG4EYIjQJ6PsaHUfbKqKrRHZ01xouP71l%2F7fNWCL8zVNb6Q21qvMhnGdpeBaCiLY6q4G8SYKRKuNLjclV6B9LptK6B6eFi2U8qYyWktU%2Ffs5ydO0EbXZigVwr%2BLa49mtnY5UbG0MhTZCb7RjL2cl%2FW7Eq3fO0IPHcJZCw243NEwGdN48HfHW%2BOz8yvXCYjrKVALD8Jyz56KxnTVLqHVrMYnB73UcbZniBZftOjDsc60bNImn7POZyFlMUmyI9vSOs4pJF2PNbIS%2BlRDSUG4BpeghL7pAIufO%2BRzlizngU8PPHDyeeZlvNybhlntkEDb7U3j8TzN33XHHO4xNNb0Qxl6gmDm%2BCNPb7YqK9xra9CxiWnEwY3SZ7u5g0LlTIu8FCJS7F%2B04WcdSFJC%2B4Z%2BpX%2Bx1Gg4qlMcVYdIYHY6ZWmDqAu8e9e3zZejwc%2Bh6FaT7eSuU%2B9xXg78LceIw3nI0LgV2v%2BzOvFzq%2FCRQBv94qtETEJrHRS2Jn7bwhdgp7eFvfDKC%2BjD02RnDXqpTXX1eFCmk1yenfoTI%2F5wuBw%2FjrvRNHdMKYczblzWF42hrz%2F2576GexkszLDejRwy2cd2Gh2y86kvGyzc2KxHtS%2FTDD0ju%2B8BjqkAXSGOAs8x0iTZFASraRkKH0svNoUxmpZci7pT%2Bii7OARXgkXDtuSrKk8AvtFeF0V6Cc37CIryfd%2FePBmcrW0d25QxEQT%2FwdVVBnzwd6Ie7dMCk%2FycIYy7vesod6gmrCviRRMm8r4vl4eA5V3kP0PzOSULyP17Vu2n1dZNZw8rfddm3%2B7QKWrydCurh%2FWu8k5ymmHJoP3aLDFjGMQfjbHILnbeVn6&X-Amz-Signature=bd0fe4e8955a6e9bb747b22c6c849e46639094ccf0c6303a48530e6840fa14c1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
