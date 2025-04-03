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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA7AZY73%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDv7XYrNVVrA4ZmAL6PCJdKHKuLCOJmQ58KllZakTOd6QIgQdl0bMkcDvuWMlmqKwBwaaCkYO1ai6uwCzSjtgVqM%2BMqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbHJ85b7FUeSXuSKSrcAwr7w2XUl5TBf8IxoiB77H%2BcGVM6lWTqQm%2FrZUjoF2gl98VtFZMRIA3SOhYZ5jTD3R%2FobVYuTewrKEf0vAO%2F7aP3HXP%2FuLYZlm81GdqzNgJr4V1ZV8hiZt2kszeQflL3YZ97zjpGJozfGYxpmZN%2FjrYn%2FMO5LCao7nAaK%2FE%2BCin06vFOLHQWa96NSR0myXKazVP5mrc7hOvzPqnXd8PsvHeQoz%2FL1tq8UywqMn09UBmsgMe7BdAylthVmuViEeU%2FhhT9%2FObidhTC2IIcIonjL%2FGO1BMjOyIRA1EK4fBgw9aeD%2BmReEttKdcKJHNWoC02WYtfjF8Ps77066oY7N%2BPrzdsOJYyoEjmaGKdohBh38Ry8lql7%2BRCB7IB4LtTJxYbhfvm1Or8enhrHl8bl4gyJt80HfT%2FswP%2Bakh35f5m4Ul1n7osWT4WLkDs3YGb26oliaIjZtdNWlQiY%2B0aahKF1E%2B2b6Yyj6oG9qnKWwyU9HcDEtSvs4GxfaZkW1LQu2uxLNKlUU6f4WwymokW89%2FmDhLao6JZl9sjUYZYtCT4NWFWHSC6U7g3qlwQIp5H1GL%2FO5fu7L2Jt1izKzbL03lw16TktBUeZoLXr8i14XD2HNDaRBsxsJGXVmBc%2BCyCMLPIuL8GOqUBsCnwHSrW70jKIEI%2BUvh2TePLdpUlccUdCdvh4NP5ttkZ2cT9Atp4VtwbYZ5nrhwvzj40B4DlT%2FC7EB23EJPZFSYUnQFxI%2BgL129F%2B0O1d4MUkxGX9U0pjwUW1hID%2BlHaSK318VxKdfcIyGnxtKQut3nQzeDSyoOOJXOTHjqdrLoyhi4NBltkUT3A%2BSSwWL3BJwE3X4FKj2ezPs4p1OqOstx81Ai0&X-Amz-Signature=90ca8302141676361b3ae9a1a73d5d9746042bd6c271d798d92d56f4794382d3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA7AZY73%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDv7XYrNVVrA4ZmAL6PCJdKHKuLCOJmQ58KllZakTOd6QIgQdl0bMkcDvuWMlmqKwBwaaCkYO1ai6uwCzSjtgVqM%2BMqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbHJ85b7FUeSXuSKSrcAwr7w2XUl5TBf8IxoiB77H%2BcGVM6lWTqQm%2FrZUjoF2gl98VtFZMRIA3SOhYZ5jTD3R%2FobVYuTewrKEf0vAO%2F7aP3HXP%2FuLYZlm81GdqzNgJr4V1ZV8hiZt2kszeQflL3YZ97zjpGJozfGYxpmZN%2FjrYn%2FMO5LCao7nAaK%2FE%2BCin06vFOLHQWa96NSR0myXKazVP5mrc7hOvzPqnXd8PsvHeQoz%2FL1tq8UywqMn09UBmsgMe7BdAylthVmuViEeU%2FhhT9%2FObidhTC2IIcIonjL%2FGO1BMjOyIRA1EK4fBgw9aeD%2BmReEttKdcKJHNWoC02WYtfjF8Ps77066oY7N%2BPrzdsOJYyoEjmaGKdohBh38Ry8lql7%2BRCB7IB4LtTJxYbhfvm1Or8enhrHl8bl4gyJt80HfT%2FswP%2Bakh35f5m4Ul1n7osWT4WLkDs3YGb26oliaIjZtdNWlQiY%2B0aahKF1E%2B2b6Yyj6oG9qnKWwyU9HcDEtSvs4GxfaZkW1LQu2uxLNKlUU6f4WwymokW89%2FmDhLao6JZl9sjUYZYtCT4NWFWHSC6U7g3qlwQIp5H1GL%2FO5fu7L2Jt1izKzbL03lw16TktBUeZoLXr8i14XD2HNDaRBsxsJGXVmBc%2BCyCMLPIuL8GOqUBsCnwHSrW70jKIEI%2BUvh2TePLdpUlccUdCdvh4NP5ttkZ2cT9Atp4VtwbYZ5nrhwvzj40B4DlT%2FC7EB23EJPZFSYUnQFxI%2BgL129F%2B0O1d4MUkxGX9U0pjwUW1hID%2BlHaSK318VxKdfcIyGnxtKQut3nQzeDSyoOOJXOTHjqdrLoyhi4NBltkUT3A%2BSSwWL3BJwE3X4FKj2ezPs4p1OqOstx81Ai0&X-Amz-Signature=bff9e0652a792aed462d9090f524813b43a5ad91fc64db6a7f692faf4b224625&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
