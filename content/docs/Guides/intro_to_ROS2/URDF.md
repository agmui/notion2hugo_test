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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGFSKAOD%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDt5VS4tVFQ32DXUCt28DDLc4VYpuLcMKcBlY7DFwIdrQIgYWvtElkqKfm28pZiSEaSveRGa8%2B0gZLGHVRh3VimqTkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYLfjgtL2R9HyopsircA6kK0qkhMhoLvV6ztghuwZ6saGC9xOKTqPFnJYCHBZZqSYE98OdUTiT91udNo4X0rk3i15KkwzKbq0a%2BhXmdE%2BOjb%2BZhr6sl0VLf%2Bd3imlF63voqyfyBstbDS5%2Bbic4ZS86RJ2zbRlOZsZieRQolh0wVr1SLf6iLaYzVD1cZ1ZkaZT47Y1YEUbeYD3MhltWKjeSv1t7JBGYctrGF4eIsk2V7QcLUi91QLLq%2BabN6T0MLhK1TXdd3K2%2B89RnF6sfy9zY%2B4oWyT4U%2BNkDitlpvRrp7jfBHV8R4%2FwN%2BU5SeW6hl4JKHCq4SQPzQqziOMcZnf6xNEXvg2LUHnjLi8DDG%2Ft77UTIC39l8Q%2FxC47HU6heH1Diq1aYI1Sf0y4MZpwT8IlsfNhH9upRBl4P4FaXBPNHmrFLlYmdU5GCyZ9s%2BvnlobA4II7PO%2FsFmQVcMO%2BIraCVCaSRtquNwF2yDrIrj9slbc7ny3fXJnWlc5nS4rgQDVk%2FlCBfGUdj4ObDrzlVC2jkcFjzRZZCzPxE1eninEKKJDiLmIDr7gwKEQNyW0fjAwe2JTCmuiG6sfVR50haWM3RXr%2Fv%2BqArh2WfSY06pgSklAXr8s1aaYN1VIHiYGaj8eESGTcXxDiA3Rg%2FnMN72jr4GOqUBvzEP9NRNt%2B9A16RVEuBHASAoh4Mi8ZrRytPZSINVwoouBJ4ZPUoH33eILNLEKVxGgYU20dtUo23K8KR0OBV18SAAyMrwF8wxxnDlOPCTSL3OYgBS%2BsNStwF5mM2W2EaOeeJL1017fgUiOPdJoveLkvJZb1xDhxJ5xXVVFbqWzkSjBIj2iXMrazkGoui7WPp6WgBcLNRRte3pkq7fdflAat5cExo9&X-Amz-Signature=9d44604a2938b4ff0df235568beeb028f52946ff55a819d6774eaa7026377a87&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGFSKAOD%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDt5VS4tVFQ32DXUCt28DDLc4VYpuLcMKcBlY7DFwIdrQIgYWvtElkqKfm28pZiSEaSveRGa8%2B0gZLGHVRh3VimqTkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYLfjgtL2R9HyopsircA6kK0qkhMhoLvV6ztghuwZ6saGC9xOKTqPFnJYCHBZZqSYE98OdUTiT91udNo4X0rk3i15KkwzKbq0a%2BhXmdE%2BOjb%2BZhr6sl0VLf%2Bd3imlF63voqyfyBstbDS5%2Bbic4ZS86RJ2zbRlOZsZieRQolh0wVr1SLf6iLaYzVD1cZ1ZkaZT47Y1YEUbeYD3MhltWKjeSv1t7JBGYctrGF4eIsk2V7QcLUi91QLLq%2BabN6T0MLhK1TXdd3K2%2B89RnF6sfy9zY%2B4oWyT4U%2BNkDitlpvRrp7jfBHV8R4%2FwN%2BU5SeW6hl4JKHCq4SQPzQqziOMcZnf6xNEXvg2LUHnjLi8DDG%2Ft77UTIC39l8Q%2FxC47HU6heH1Diq1aYI1Sf0y4MZpwT8IlsfNhH9upRBl4P4FaXBPNHmrFLlYmdU5GCyZ9s%2BvnlobA4II7PO%2FsFmQVcMO%2BIraCVCaSRtquNwF2yDrIrj9slbc7ny3fXJnWlc5nS4rgQDVk%2FlCBfGUdj4ObDrzlVC2jkcFjzRZZCzPxE1eninEKKJDiLmIDr7gwKEQNyW0fjAwe2JTCmuiG6sfVR50haWM3RXr%2Fv%2BqArh2WfSY06pgSklAXr8s1aaYN1VIHiYGaj8eESGTcXxDiA3Rg%2FnMN72jr4GOqUBvzEP9NRNt%2B9A16RVEuBHASAoh4Mi8ZrRytPZSINVwoouBJ4ZPUoH33eILNLEKVxGgYU20dtUo23K8KR0OBV18SAAyMrwF8wxxnDlOPCTSL3OYgBS%2BsNStwF5mM2W2EaOeeJL1017fgUiOPdJoveLkvJZb1xDhxJ5xXVVFbqWzkSjBIj2iXMrazkGoui7WPp6WgBcLNRRte3pkq7fdflAat5cExo9&X-Amz-Signature=73517709ec4db53e4be4cf4059abaefa8be3bc9c8dd9c797ddcc78c732470f09&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
