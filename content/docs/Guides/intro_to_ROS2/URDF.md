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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634G3T3M4%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIAKwINd%2BB6qK7N9mbmwBFBbcpI%2B8SAFPa5hShIlYoE1uAiEA1WNkTAI7kDBXsB8fwMzAhiUtRuU%2BhAsVuZv9vH9Vw3Mq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDC%2BUCn6cPYaAUuPhLCrcA%2FdCbDB7jexvVsEgmROUcXZdmJV1BVfhwBnNj41OC2hRsD54PrhWDSqDznWQC3Yq3lzCru%2BnWiG9pjzAFr2VyrRcqOqqoAcDA42ZTN77C%2F5ANJsbHYS7Y%2B7r1IeAj4Iz47TMaD7Kt2ZrRwiRBtKHehTSfrSBUzlwLs0krmJD7k1vW2rtURUI4aa0s%2F1kgKtbw%2BStMu3wXC4JhdelynbGdwEdPs29aZUuDTrNE77zlA%2Bdfz2XCBOv%2BtJFaxsMlSeHXaDRJk3%2BGMUHacNaOyWPw21uSJMv8wuY8lj4uq3B3%2FE3ph5SlUApBb5WwczgR%2FT2kLchOIG7RfjWquWVAgbSqAhoaB9qT0S1Z%2Fa206dNU7zxlQeMY4JoCAx2KlGMXY5YaOL%2Fy%2F2KbtvpKkfPYHVRXWdJfsA0WQjA76eZFIYpZBLhnRwLUaamvmuIUD3OJtSUJApwIrgoJVyFzBuNniRPkXF9N9NI69oI0ZtgbeyDboy4BTHKw2d9xi7Ac%2BTCMiaZ9QGsYKjWm5Qws8U4T0gvzCtOrCt1RmsjRoHGjZIpowUm%2BF2Zai0Yc5PRJaZwdpM9nB7H1nqhqVvXPXCLXQXDOpWC9u4dPWkRYwtnGxUkBhm7R7%2BMNn9sS0%2BnGTy5MPn9xb0GOqUBJ7nWYNJb2erJG0tSns%2BRq2Urs1H%2BWueNjylaIcIT4UmXwKq%2FDxDE33uTuTMiPpKrCeGxlWds%2FeD5NqfJK8W1GRl9psn%2Bp8L%2F8hZ3W6n1tBWbESUYbLcdAc4zQeY3cMA5kDG0stoEUzPLFm9WMwD7TKgw1wsghaI%2BwFd1aVA%2FhQiduWjuM6QqbFMX0mYgMHe47QOX%2FLzSnXHW%2FckV8V0ypwwsEPQq&X-Amz-Signature=91beeafb7203d42c84b6b772996ece75bec7d7d8ff6baa7cc4d319e0543d188e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634G3T3M4%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIAKwINd%2BB6qK7N9mbmwBFBbcpI%2B8SAFPa5hShIlYoE1uAiEA1WNkTAI7kDBXsB8fwMzAhiUtRuU%2BhAsVuZv9vH9Vw3Mq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDC%2BUCn6cPYaAUuPhLCrcA%2FdCbDB7jexvVsEgmROUcXZdmJV1BVfhwBnNj41OC2hRsD54PrhWDSqDznWQC3Yq3lzCru%2BnWiG9pjzAFr2VyrRcqOqqoAcDA42ZTN77C%2F5ANJsbHYS7Y%2B7r1IeAj4Iz47TMaD7Kt2ZrRwiRBtKHehTSfrSBUzlwLs0krmJD7k1vW2rtURUI4aa0s%2F1kgKtbw%2BStMu3wXC4JhdelynbGdwEdPs29aZUuDTrNE77zlA%2Bdfz2XCBOv%2BtJFaxsMlSeHXaDRJk3%2BGMUHacNaOyWPw21uSJMv8wuY8lj4uq3B3%2FE3ph5SlUApBb5WwczgR%2FT2kLchOIG7RfjWquWVAgbSqAhoaB9qT0S1Z%2Fa206dNU7zxlQeMY4JoCAx2KlGMXY5YaOL%2Fy%2F2KbtvpKkfPYHVRXWdJfsA0WQjA76eZFIYpZBLhnRwLUaamvmuIUD3OJtSUJApwIrgoJVyFzBuNniRPkXF9N9NI69oI0ZtgbeyDboy4BTHKw2d9xi7Ac%2BTCMiaZ9QGsYKjWm5Qws8U4T0gvzCtOrCt1RmsjRoHGjZIpowUm%2BF2Zai0Yc5PRJaZwdpM9nB7H1nqhqVvXPXCLXQXDOpWC9u4dPWkRYwtnGxUkBhm7R7%2BMNn9sS0%2BnGTy5MPn9xb0GOqUBJ7nWYNJb2erJG0tSns%2BRq2Urs1H%2BWueNjylaIcIT4UmXwKq%2FDxDE33uTuTMiPpKrCeGxlWds%2FeD5NqfJK8W1GRl9psn%2Bp8L%2F8hZ3W6n1tBWbESUYbLcdAc4zQeY3cMA5kDG0stoEUzPLFm9WMwD7TKgw1wsghaI%2BwFd1aVA%2FhQiduWjuM6QqbFMX0mYgMHe47QOX%2FLzSnXHW%2FckV8V0ypwwsEPQq&X-Amz-Signature=b6d906e47dc77fcf17b29e5c67984a6043d823373065d0b1bfbbae053692af86&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
