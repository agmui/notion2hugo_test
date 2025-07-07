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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLCPC5QK%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIBGHxpY3n%2BtbiZ0Fj0%2BbVChvGoCqSMcy56sYPi0y7PbmAiEAg0c6TG4990bP2gpZWdUHoM7%2FjmU9tbRq6xRqp6CMAv0q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDI1Oj4ndLcJt9hpI5ircA%2FHr1sDPwcmE2OFZdoG3kw1%2FmDirhDL5fXUBGD9AdU79WHNEwFjck8QFbInWaebTXSXhcHKf1nB1DaRS7oPIf8YbNYE1jkeu7a2SaqCo8Ga75g%2Bog1igcbkf0mVB96pKiiJh97II0oP%2BXhFmR0lErwnpsWcZNvuZk8kV%2FmPi7vffC%2B3HKhbz18Q7sGX79mm1%2Fk9zqUltq6fe2rLgobjn%2F431KkKBPd8%2F4sMU4UjnkZsxl8KnBOeLpXOURt9EgH%2BGSmA9RhhjeCmaNqaZtiYXKtmApPW6eGAQTm39XgFSAgr6ctLAVGjmog%2FZNNvBvsvIMXA3nf7cwM40jC%2FAYVXVg2FVJ8FBdUUJGRBJyoK0%2FprZyyQinYw48kOtTTj%2BM1I09SeGL4ci4cBOkXzd56UDaZlU%2F549vRjtWvkid6bAv%2FGD44osY4TBxBK2ZhXMLLWqUbNqmadrXlG1ePSr8cBASvUr3Kz%2Fb%2FNrS%2B1yLpnXeeT3R%2FBZGslOdhr0kFckCbtBn0UTUSiSSDR1KU7%2BKwrC2evsWoqVuTXvlrnZL%2BM0RM%2FmTPdNKQLVEUplgz4FfMxe4D0qxZVvmWrV2VU3%2F5l%2F%2B49R5heNmgCxZauqKGh2pLXZZCYTer5MCBJRqRf5MO7psMMGOqUBkXwaVL1AbAkfl7Ek9uG4vBf1ycvr10NcYzCK83RFJ6CaTFekoYTsaXhi5Y97zPP6rXq5syLrY8CyjDc6q5gcJgdK3a0g%2BUs8LsaJOT2oIwxw6Fjet4daubPD8n4gHv3uOK7JacNZVrlD2ZKIky24pkUBu5vGflxrPO8uGhhpNr%2F5%2BevpfY1WVORKqjhec65ULa%2FAS%2Fr9w%2BX8EKiWH7KyU3SsE6b8&X-Amz-Signature=f94eeb14752169ef1d7c16276e3e0a65cfe00459e67827e414d6280d8a729ae0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLCPC5QK%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIBGHxpY3n%2BtbiZ0Fj0%2BbVChvGoCqSMcy56sYPi0y7PbmAiEAg0c6TG4990bP2gpZWdUHoM7%2FjmU9tbRq6xRqp6CMAv0q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDI1Oj4ndLcJt9hpI5ircA%2FHr1sDPwcmE2OFZdoG3kw1%2FmDirhDL5fXUBGD9AdU79WHNEwFjck8QFbInWaebTXSXhcHKf1nB1DaRS7oPIf8YbNYE1jkeu7a2SaqCo8Ga75g%2Bog1igcbkf0mVB96pKiiJh97II0oP%2BXhFmR0lErwnpsWcZNvuZk8kV%2FmPi7vffC%2B3HKhbz18Q7sGX79mm1%2Fk9zqUltq6fe2rLgobjn%2F431KkKBPd8%2F4sMU4UjnkZsxl8KnBOeLpXOURt9EgH%2BGSmA9RhhjeCmaNqaZtiYXKtmApPW6eGAQTm39XgFSAgr6ctLAVGjmog%2FZNNvBvsvIMXA3nf7cwM40jC%2FAYVXVg2FVJ8FBdUUJGRBJyoK0%2FprZyyQinYw48kOtTTj%2BM1I09SeGL4ci4cBOkXzd56UDaZlU%2F549vRjtWvkid6bAv%2FGD44osY4TBxBK2ZhXMLLWqUbNqmadrXlG1ePSr8cBASvUr3Kz%2Fb%2FNrS%2B1yLpnXeeT3R%2FBZGslOdhr0kFckCbtBn0UTUSiSSDR1KU7%2BKwrC2evsWoqVuTXvlrnZL%2BM0RM%2FmTPdNKQLVEUplgz4FfMxe4D0qxZVvmWrV2VU3%2F5l%2F%2B49R5heNmgCxZauqKGh2pLXZZCYTer5MCBJRqRf5MO7psMMGOqUBkXwaVL1AbAkfl7Ek9uG4vBf1ycvr10NcYzCK83RFJ6CaTFekoYTsaXhi5Y97zPP6rXq5syLrY8CyjDc6q5gcJgdK3a0g%2BUs8LsaJOT2oIwxw6Fjet4daubPD8n4gHv3uOK7JacNZVrlD2ZKIky24pkUBu5vGflxrPO8uGhhpNr%2F5%2BevpfY1WVORKqjhec65ULa%2FAS%2Fr9w%2BX8EKiWH7KyU3SsE6b8&X-Amz-Signature=d2c0169d2dee2a672b718b09e3a820bfdc602da33e57077e44df54930c8afaa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
