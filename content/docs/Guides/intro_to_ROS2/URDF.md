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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GGLX2FA%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Btdc%2FML75ZFW2LBex3f4RnRI%2FKL0cqYXnfRXenHSywQIgerc6y%2FmXPWdGlVs%2BNMbsa3cQ%2F37CucTWnNdnYONfM8kqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEs8H6YQUeigorOXbyrcA8GajeFNmZeKJMePiFaLvGKVDZ2ZbBsx4ZsQCOUrn4IEZENqGABGBGhFJOEHErk3cTprdD4GAVP0h4ge9y9Tbx%2Fy9J09yUndZny7oYeSxMT%2FFNLhnA9WBAIzLqqb9OahWhN1TWiTw%2F04cgx1SHzyLKeaIOk5A%2FLzPXNSkK6cqPZYwnC8q53blxN9T1PyZqOYNLxHQMgdkNYG4NXcw5ZemxSrz8iMjjQt9yUU5TRXlLUeXGeJeoHyjjLLL7m9pPAdMq%2BaV3I5LVNRtQjbX1yBe7BtMmCYuG0Yzsn7tYq1pYm5mEDtay%2B80Z9QhmQ%2FOctPHVV8UFnCtz0XiWLjFUiam5aBfMzFTmtJ%2F6PqZ3wTd62Lui9y1Xq9DICuzlgmpCZFxyf7zC1dMxk4GKW5kJu9eo1Jhoww3bVhG5LGQcwH8%2B6k5V6bU4EYjn%2B%2FH2sB0PcW3geJMjAtlvr4xJsb15IFjD98nER314%2BZOD3ofFmObLU8GFAwO287Ewww4TWpXytbv6lnUPIqbg41U1mZokLrH%2BiEyls%2BFEH1vfXnRDM1fa9eqswJj9A5sX%2BjFgup1Hmov1ys5Z%2FPObE2m6IubYtz6bpkyDOFIP6swXpS0NO6%2FVLmYX0IjYOOPmyiksVKMJWov8MGOqUB4ore%2F42MI6Z4I31qMCnTfYv0vCBRDcUVB0yWT9u0Sx1BmWQHbpwhGcyVI1%2F1CEbgizTh5qCnCVDxep7UwPNLmUXU1%2FAnB9JYKQuhiTv4KrpJxmqpIGn9Y91pBSZ%2BHK4EbTGs3aLtO5x09D2RLd0TrxprqOkk%2BfOtgG8rk%2FAtXrTt1XiiUb%2FZqnPT5ocFbBG9uJKwBonMi2mrCRAl5VyW4S1bOsan&X-Amz-Signature=b0ac813281c9845a4b33f804a4bb7696d5a3be5686e6969cb03b0000ad726c62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GGLX2FA%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Btdc%2FML75ZFW2LBex3f4RnRI%2FKL0cqYXnfRXenHSywQIgerc6y%2FmXPWdGlVs%2BNMbsa3cQ%2F37CucTWnNdnYONfM8kqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEs8H6YQUeigorOXbyrcA8GajeFNmZeKJMePiFaLvGKVDZ2ZbBsx4ZsQCOUrn4IEZENqGABGBGhFJOEHErk3cTprdD4GAVP0h4ge9y9Tbx%2Fy9J09yUndZny7oYeSxMT%2FFNLhnA9WBAIzLqqb9OahWhN1TWiTw%2F04cgx1SHzyLKeaIOk5A%2FLzPXNSkK6cqPZYwnC8q53blxN9T1PyZqOYNLxHQMgdkNYG4NXcw5ZemxSrz8iMjjQt9yUU5TRXlLUeXGeJeoHyjjLLL7m9pPAdMq%2BaV3I5LVNRtQjbX1yBe7BtMmCYuG0Yzsn7tYq1pYm5mEDtay%2B80Z9QhmQ%2FOctPHVV8UFnCtz0XiWLjFUiam5aBfMzFTmtJ%2F6PqZ3wTd62Lui9y1Xq9DICuzlgmpCZFxyf7zC1dMxk4GKW5kJu9eo1Jhoww3bVhG5LGQcwH8%2B6k5V6bU4EYjn%2B%2FH2sB0PcW3geJMjAtlvr4xJsb15IFjD98nER314%2BZOD3ofFmObLU8GFAwO287Ewww4TWpXytbv6lnUPIqbg41U1mZokLrH%2BiEyls%2BFEH1vfXnRDM1fa9eqswJj9A5sX%2BjFgup1Hmov1ys5Z%2FPObE2m6IubYtz6bpkyDOFIP6swXpS0NO6%2FVLmYX0IjYOOPmyiksVKMJWov8MGOqUB4ore%2F42MI6Z4I31qMCnTfYv0vCBRDcUVB0yWT9u0Sx1BmWQHbpwhGcyVI1%2F1CEbgizTh5qCnCVDxep7UwPNLmUXU1%2FAnB9JYKQuhiTv4KrpJxmqpIGn9Y91pBSZ%2BHK4EbTGs3aLtO5x09D2RLd0TrxprqOkk%2BfOtgG8rk%2FAtXrTt1XiiUb%2FZqnPT5ocFbBG9uJKwBonMi2mrCRAl5VyW4S1bOsan&X-Amz-Signature=ac85f53b674a5728e1f12bba31cb477e244d63468e8d6e017a0c879cfa74869f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
