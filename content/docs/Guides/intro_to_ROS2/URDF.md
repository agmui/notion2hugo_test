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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q25A3GD6%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T160941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIENuDt4QG%2F%2FFS53%2BRFzcp%2BY4JvQVmcTCrEGQHEt4%2BUNDAiBBUhZahSFtt1y4ryyEIot9oHKxq16Wae1WSLvVOTbdQCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMF8PjPr23i47xorKQKtwDaqskAg7Rli4hMxyImlZjuiRjSShYOIq59nNCAHl9ZKriFImPzu7jN2SwEnAi6nzbaqiRu65EyzaedwIs2j3PyzJ47%2B9Dge491hQdGPDpreN6XPrKtWLevLVeUyDrdHjWb1n%2FC3aR4F3IGSwZ9iETxvv%2FP2xUgL3BYplCs9PEFyrJ9MP75qyD5v6weq8lghUreuhgI4lB90qt6Xqm56A6lWVAYXXuvSZHqdzJXvyPkP2aPdHyOfemwgiqLNBuf5BaCfIQ%2B6CzGH9xY9jKQMiu2ms72T%2BOrh8DBORntBFyfAPwl%2BVN1zqjsWZzEgBzfI949%2BPKtWigjb5X9HEMWjln3MNp6t4zBpX2lThgsDKZBYfXtAe0UkhTsQXoXfZu8B%2FkemNcFdX7OtmhyVOSTOazEzK2O689bQWIKhX0PlRNO8lQkNo7fIJljp%2BbDkHwijag%2Fpa6CPqlYzkgP1x1sYLadG9kvY5EUGN8i0ARKqDd8VId0Huhl5vf5mTfnNObsKvnULHRXK1QUGpaE%2BNRNu8ooMud%2FO8n96f6uBO73eqUA0LynefqBWx9s8V%2FgSTNRlWCeB40DZvneBn9p53mlMmaxvhYZ5pl%2Bp7prqIvdCZA6fVgazuC4U3zoLeq6Esw1MqkwwY6pgF0Lw%2BJyYWtOMvjSeVC7qmep6lThIj8R6ipyznSssk45eMTDSInibuqz8NEA0H8%2FxRnqd01AUIhu1231A1d05vU8YfkHFeYZaO2Ur6CImxqz7Bjvg826p8vYDVDG2%2Bh4CtAQAjYBb2LVzLS%2BWPKcvG1WlXz3ki9x3%2FoIqElrhZuPRod4vL7SnBwf2uTzba3dwbnkQgFJK5k29oJY6Zf5knvJv8aY7VL&X-Amz-Signature=901c6a996afffe480e26451b7a67509140aad79f7a484a835a52a6e33582f692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q25A3GD6%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T160941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIENuDt4QG%2F%2FFS53%2BRFzcp%2BY4JvQVmcTCrEGQHEt4%2BUNDAiBBUhZahSFtt1y4ryyEIot9oHKxq16Wae1WSLvVOTbdQCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMF8PjPr23i47xorKQKtwDaqskAg7Rli4hMxyImlZjuiRjSShYOIq59nNCAHl9ZKriFImPzu7jN2SwEnAi6nzbaqiRu65EyzaedwIs2j3PyzJ47%2B9Dge491hQdGPDpreN6XPrKtWLevLVeUyDrdHjWb1n%2FC3aR4F3IGSwZ9iETxvv%2FP2xUgL3BYplCs9PEFyrJ9MP75qyD5v6weq8lghUreuhgI4lB90qt6Xqm56A6lWVAYXXuvSZHqdzJXvyPkP2aPdHyOfemwgiqLNBuf5BaCfIQ%2B6CzGH9xY9jKQMiu2ms72T%2BOrh8DBORntBFyfAPwl%2BVN1zqjsWZzEgBzfI949%2BPKtWigjb5X9HEMWjln3MNp6t4zBpX2lThgsDKZBYfXtAe0UkhTsQXoXfZu8B%2FkemNcFdX7OtmhyVOSTOazEzK2O689bQWIKhX0PlRNO8lQkNo7fIJljp%2BbDkHwijag%2Fpa6CPqlYzkgP1x1sYLadG9kvY5EUGN8i0ARKqDd8VId0Huhl5vf5mTfnNObsKvnULHRXK1QUGpaE%2BNRNu8ooMud%2FO8n96f6uBO73eqUA0LynefqBWx9s8V%2FgSTNRlWCeB40DZvneBn9p53mlMmaxvhYZ5pl%2Bp7prqIvdCZA6fVgazuC4U3zoLeq6Esw1MqkwwY6pgF0Lw%2BJyYWtOMvjSeVC7qmep6lThIj8R6ipyznSssk45eMTDSInibuqz8NEA0H8%2FxRnqd01AUIhu1231A1d05vU8YfkHFeYZaO2Ur6CImxqz7Bjvg826p8vYDVDG2%2Bh4CtAQAjYBb2LVzLS%2BWPKcvG1WlXz3ki9x3%2FoIqElrhZuPRod4vL7SnBwf2uTzba3dwbnkQgFJK5k29oJY6Zf5knvJv8aY7VL&X-Amz-Signature=adac54f50656ba60c7efd94ce1a747eef6b02810932f495b418cab0d497483cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
