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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZS357AG%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPNErkJA8DuXGOhUxrM89ohqFaDi6SB%2Bmr8cZuDuamLAIgVTn908NbsP3RS%2BQhRhfddwvaFNtNepNKfm438BkP%2BYEqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJ0%2BCwoEREF0dJm1ircA%2B0xtAv5fnyzwGP%2BntfumRy8tWB6b4ZtL8pPIVHq9rx1p8ne0XH9u2MViwsfpwVKsuF8HCxwavbINOVUTSnhdfye2FzZsyOPj7%2Ft62NfM%2FPyxL7yDQDC0frConGudU614nJziSEeWVvv1%2FL4mIvY0cuUEJo0cNa7TWzyi5fhfPPY6j09elMorzIbPI%2BqPgQYaGCZXORMAGbtD8e8NdLPxN9ON29oFu2qio%2FiIOypvayWey6zEUwOE3qye5nmqMd5NwsWi75JJO2UtJwkxxrpKXCVAYo18xleFMxbXuo0fWvZu7H7EyVxoMrHKT3LwqTvTHfZOKWhjhfF%2FSB1%2B1WsNEDz5VvN6nYAGMsvE0cqAbJ%2BT4fqbg9hE%2FYN8j%2F7c56btmoO3xqhKJEQdRnnikztqptVtA0eGpdOuDEc1usm42Te4j1IMY4NmIEp1UwB9eL2PcCBEhRVSBbWNcBoAhNP4K3NmVKRZBkr05avsH6Ch9%2BW9d60zXeYkkJAidzr0ReB63jfTzoQBddrmlq27AGEVRXOWkBOl6m%2Bibte%2Fx65pTpGsMa5Q3iicN7PqyyUgpq6yr7lHGePKBFUmI7z9zyxTcW04scz4PD8jMt2kt08H%2B%2BMag4%2F0%2BhVSVDTBzREMLyBhMMGOqUB1P%2Fms5UowZdwHgHnrBSL1PrjJaPrGfNiJbtpXJrMKDjxB9xsMiCTKdGndmNaJyKeXC97Vnut00J9gqaQ%2B%2BeotbGFcfmOU4Dqo79se36ZN0kBLrD9OMr1YWvau04kzBLrjk4bAaODml0gzdM0yCN%2FFOLL%2BIz%2FWNzAaQVFm5riefxx1aaYlD32MPVj3YlsX264Jo1A0wW43GMpcjaDJn8o8zNh70PK&X-Amz-Signature=b4f9dafee3893fc564953be795ac475abcd9c701195b6ec791325f50c97938e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZS357AG%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPNErkJA8DuXGOhUxrM89ohqFaDi6SB%2Bmr8cZuDuamLAIgVTn908NbsP3RS%2BQhRhfddwvaFNtNepNKfm438BkP%2BYEqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJ0%2BCwoEREF0dJm1ircA%2B0xtAv5fnyzwGP%2BntfumRy8tWB6b4ZtL8pPIVHq9rx1p8ne0XH9u2MViwsfpwVKsuF8HCxwavbINOVUTSnhdfye2FzZsyOPj7%2Ft62NfM%2FPyxL7yDQDC0frConGudU614nJziSEeWVvv1%2FL4mIvY0cuUEJo0cNa7TWzyi5fhfPPY6j09elMorzIbPI%2BqPgQYaGCZXORMAGbtD8e8NdLPxN9ON29oFu2qio%2FiIOypvayWey6zEUwOE3qye5nmqMd5NwsWi75JJO2UtJwkxxrpKXCVAYo18xleFMxbXuo0fWvZu7H7EyVxoMrHKT3LwqTvTHfZOKWhjhfF%2FSB1%2B1WsNEDz5VvN6nYAGMsvE0cqAbJ%2BT4fqbg9hE%2FYN8j%2F7c56btmoO3xqhKJEQdRnnikztqptVtA0eGpdOuDEc1usm42Te4j1IMY4NmIEp1UwB9eL2PcCBEhRVSBbWNcBoAhNP4K3NmVKRZBkr05avsH6Ch9%2BW9d60zXeYkkJAidzr0ReB63jfTzoQBddrmlq27AGEVRXOWkBOl6m%2Bibte%2Fx65pTpGsMa5Q3iicN7PqyyUgpq6yr7lHGePKBFUmI7z9zyxTcW04scz4PD8jMt2kt08H%2B%2BMag4%2F0%2BhVSVDTBzREMLyBhMMGOqUB1P%2Fms5UowZdwHgHnrBSL1PrjJaPrGfNiJbtpXJrMKDjxB9xsMiCTKdGndmNaJyKeXC97Vnut00J9gqaQ%2B%2BeotbGFcfmOU4Dqo79se36ZN0kBLrD9OMr1YWvau04kzBLrjk4bAaODml0gzdM0yCN%2FFOLL%2BIz%2FWNzAaQVFm5riefxx1aaYlD32MPVj3YlsX264Jo1A0wW43GMpcjaDJn8o8zNh70PK&X-Amz-Signature=bb62f30c1d96511f04ac8d77744e967361d9dc5b0cbd5d104354f54d64973157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
