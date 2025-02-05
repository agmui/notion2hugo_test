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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQIPA6IM%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDOhcL28ihqoEp84tpgsEiEtEvu8HKvHNr8fyIg7mHbBgIgCyt06jSqCfXP6LbzKsIkmE31pwEIXkmtOttmxJIZxPcq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDBZvHNemA%2FYCWZ1dQyrcAxfHKV16%2BQPfcSohRlrfNuxhtYBfloZGwN1QptPuc%2F8apPM0Yw6cR%2B7EzDT7MvzWdiIKcT8XT8qHPELo%2FB%2BK868etL%2F24QtM1ny4ST6BeL04RywlopRpPE%2FperzrH9Hiqj%2FwNIlYoIA%2FC5ggA44al6wEg%2F9R%2BRtnBcpVkLtahAKWQwuGPJTpY%2FnoTwbvg%2Bj%2Bp1L3WhO1BtvSzBxtTJh0ZqFEZxun1W0DfbWJ6690VRRbj3vKzPAlExJytM%2BAPkxjcdQAaRRaLf%2BMpvSHnKtEq0FT5orwV2uwj0w4WVt4geMgaaQtP24jXpKG8t3viohFCuXLQTbmeBdSwBtAC%2FdtWuq9cZJ6rpNrOGEQW0056nxGWlPYMYaOu08GN7aBp%2Bh7Q2ndEFWVNgmLN05SQyYaQS7AJf6NpnL1kyATZNn6%2F7ZYhqwtI6DNAphEN5vrTko5bSXY3Vmy4vCAK9mt0NysXxJnB4OmZggQCn9rxATxK80eF7oU69PBHuOOt8NDAVIRrTtmp0%2F2YiC3953BC%2B9odlBJk7GxYUg4bBso8E7TGkRgOKfM1m8fDKX9Cwt3dymgi4VFX5RALWaQNa9vWpEu4vsZbfxWh5wnwFc%2FW%2BXGp4%2B409rKA1PEqpDJKDCqMMG7jr0GOqUBXRCtI7ysfSyC4PCQG5BJAcD4pS0WsGJH3YF6DtYo0cTsuXqGsbAlzKOpn28znNcIt6oF0%2Bs6s7PzvC6qS3nHplC3ZRuKsLRp2UOm0X7yH0QmGsNS%2FiS%2FatWn1Wxrf353hXc%2BfOzOVKEGsv1a5uV1HXdui2kqNcE5JdirBualFtviNZoxdTC65kI9KeU%2B1HdKvlyPIT04WYsGWy2aahqsPPuercxl&X-Amz-Signature=fefc1f2b466d13e5e6935eaa9ec411895c7e381841a3c64069ca25f6229d6db7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQIPA6IM%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDOhcL28ihqoEp84tpgsEiEtEvu8HKvHNr8fyIg7mHbBgIgCyt06jSqCfXP6LbzKsIkmE31pwEIXkmtOttmxJIZxPcq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDBZvHNemA%2FYCWZ1dQyrcAxfHKV16%2BQPfcSohRlrfNuxhtYBfloZGwN1QptPuc%2F8apPM0Yw6cR%2B7EzDT7MvzWdiIKcT8XT8qHPELo%2FB%2BK868etL%2F24QtM1ny4ST6BeL04RywlopRpPE%2FperzrH9Hiqj%2FwNIlYoIA%2FC5ggA44al6wEg%2F9R%2BRtnBcpVkLtahAKWQwuGPJTpY%2FnoTwbvg%2Bj%2Bp1L3WhO1BtvSzBxtTJh0ZqFEZxun1W0DfbWJ6690VRRbj3vKzPAlExJytM%2BAPkxjcdQAaRRaLf%2BMpvSHnKtEq0FT5orwV2uwj0w4WVt4geMgaaQtP24jXpKG8t3viohFCuXLQTbmeBdSwBtAC%2FdtWuq9cZJ6rpNrOGEQW0056nxGWlPYMYaOu08GN7aBp%2Bh7Q2ndEFWVNgmLN05SQyYaQS7AJf6NpnL1kyATZNn6%2F7ZYhqwtI6DNAphEN5vrTko5bSXY3Vmy4vCAK9mt0NysXxJnB4OmZggQCn9rxATxK80eF7oU69PBHuOOt8NDAVIRrTtmp0%2F2YiC3953BC%2B9odlBJk7GxYUg4bBso8E7TGkRgOKfM1m8fDKX9Cwt3dymgi4VFX5RALWaQNa9vWpEu4vsZbfxWh5wnwFc%2FW%2BXGp4%2B409rKA1PEqpDJKDCqMMG7jr0GOqUBXRCtI7ysfSyC4PCQG5BJAcD4pS0WsGJH3YF6DtYo0cTsuXqGsbAlzKOpn28znNcIt6oF0%2Bs6s7PzvC6qS3nHplC3ZRuKsLRp2UOm0X7yH0QmGsNS%2FiS%2FatWn1Wxrf353hXc%2BfOzOVKEGsv1a5uV1HXdui2kqNcE5JdirBualFtviNZoxdTC65kI9KeU%2B1HdKvlyPIT04WYsGWy2aahqsPPuercxl&X-Amz-Signature=02269a3a98f35b4c2d14bba30f6cee88c09f6a0af4534005aac824b8552bd490&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
