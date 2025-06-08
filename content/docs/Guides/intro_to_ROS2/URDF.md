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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4YAUZVJ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKyiMLyKx0BRNXro5oDW6%2B1y9b2LubxU30uuFHpmHx6AiEAxy5D42xBeRAniCtz8bkfEZjc3im4jvsG%2BI6caVSMec4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxmfng4DntnWyue8ircA%2B3YXnQFACxbQ%2Ba7wBPOGtNc%2BXorniZWADGadgk7O2xqJXbEKTQelg5gks65Uf%2BTGvVfbsvssF8wnbAjKKT%2FAfHfoG9Enmbs9OVomNjhKmOkPlja1a9%2BJpV%2FIHk6BmpNTGjDTSzSvx5ZlTs4PVqiap1Ty5VCWQU5uIR%2F%2BrLW7AG%2FU45fpBp0ssFI5Dd7sD8LUEinjL3QYKAtETWoQ4zWS0vn3jRFl6727iNXMpgb%2FprI9Z3SfTM7S979KHpqKhJVZGANADFpmar%2F64RJvdDToow5TYH00DwoZ6qVvqh4OJdw11W1wqJXI5XfvzDDeraS7u0cDt3%2FBUm4xGGMgk%2FWZsAxujzlfPSyw2I9Ns4FtF%2F4wmY1H1cchzOSp6DEZVbPZ1EiFEWdEwHDkwHw70w2cTuwpBaPIKb%2BrIByUY5BkkRYRiFlq47yLlMGBfDu5HLbjwV3F9XRiRNj7k9UvChOZxs2ZwFV1GAp5os%2F%2Be12rSWlLoPR5CyhbWxb5hAnzgZoh%2BZ%2BYguCuZ4snimUhxX8rfm20MPu%2Fj4fPyYEQwAPgQBxnJeWq%2Fm0gdXHeDaA%2BhgFfm%2BFxLRwpqS1UI8jtW1qcGtwP1ldGoXddKGzTMsWtwUMLX%2BvayuAvuxm921cMIGtk8IGOqUByXAZEnsK2kjti7nlXSQ%2BCR6i9vcXhdtJN%2FhrhVuTo9SPc6HeZijHlF0i6MqTQB%2F9vE%2BuwexITB%2FBySlhvry9FtuksVdAUwviD%2Br5mviGnd1jSnYL%2Fhkuy07wJGtFN8182HI26sTUnxlFcA7f%2BrvwR0gO3E6e916v2YiuwIbkHdKpl%2F0t%2F9i4ihUGnqsvYXItYZkDZFu4U%2B0LQFde2BmEtaxGQfly&X-Amz-Signature=7c6642272fe71ccb40840f834a0b52e659dd18948ef2a01ece9698bb5aeb208a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4YAUZVJ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKyiMLyKx0BRNXro5oDW6%2B1y9b2LubxU30uuFHpmHx6AiEAxy5D42xBeRAniCtz8bkfEZjc3im4jvsG%2BI6caVSMec4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxmfng4DntnWyue8ircA%2B3YXnQFACxbQ%2Ba7wBPOGtNc%2BXorniZWADGadgk7O2xqJXbEKTQelg5gks65Uf%2BTGvVfbsvssF8wnbAjKKT%2FAfHfoG9Enmbs9OVomNjhKmOkPlja1a9%2BJpV%2FIHk6BmpNTGjDTSzSvx5ZlTs4PVqiap1Ty5VCWQU5uIR%2F%2BrLW7AG%2FU45fpBp0ssFI5Dd7sD8LUEinjL3QYKAtETWoQ4zWS0vn3jRFl6727iNXMpgb%2FprI9Z3SfTM7S979KHpqKhJVZGANADFpmar%2F64RJvdDToow5TYH00DwoZ6qVvqh4OJdw11W1wqJXI5XfvzDDeraS7u0cDt3%2FBUm4xGGMgk%2FWZsAxujzlfPSyw2I9Ns4FtF%2F4wmY1H1cchzOSp6DEZVbPZ1EiFEWdEwHDkwHw70w2cTuwpBaPIKb%2BrIByUY5BkkRYRiFlq47yLlMGBfDu5HLbjwV3F9XRiRNj7k9UvChOZxs2ZwFV1GAp5os%2F%2Be12rSWlLoPR5CyhbWxb5hAnzgZoh%2BZ%2BYguCuZ4snimUhxX8rfm20MPu%2Fj4fPyYEQwAPgQBxnJeWq%2Fm0gdXHeDaA%2BhgFfm%2BFxLRwpqS1UI8jtW1qcGtwP1ldGoXddKGzTMsWtwUMLX%2BvayuAvuxm921cMIGtk8IGOqUByXAZEnsK2kjti7nlXSQ%2BCR6i9vcXhdtJN%2FhrhVuTo9SPc6HeZijHlF0i6MqTQB%2F9vE%2BuwexITB%2FBySlhvry9FtuksVdAUwviD%2Br5mviGnd1jSnYL%2Fhkuy07wJGtFN8182HI26sTUnxlFcA7f%2BrvwR0gO3E6e916v2YiuwIbkHdKpl%2F0t%2F9i4ihUGnqsvYXItYZkDZFu4U%2B0LQFde2BmEtaxGQfly&X-Amz-Signature=e1f194954dd5d8ffdb14254d48289893fc9d1f13cce9e6b07d5f4abc33345f34&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
