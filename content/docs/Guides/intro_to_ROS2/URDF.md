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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCYWSEOH%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDLK8FvbDaqZdLM95eORMspyikKbxTuCazmWrmAt5GBKQIgXtbyAFKzGEaW%2BwjQYzLAFzNfUrcdFPrziKHSTdU24bwq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDO7sLR0n4u9Q0CzzlircA%2FAdEMWqE0ivvtNvuk8oNcogMUbgy35JYz4axOUmUeAtHMdZ02Dr4e3bljjYAqXQhxTYw2IWI0BC2ZUs6eIhmnU0lTwYCRvaeGMre7U6hvQvlR%2Fl3iCyjNUwEVz8k56d2tDtSCiQ9ofsd3XFEtXDVqEprWDVBQrOh4JpSdvntEXiuBZW7jv4dOn2GrcGVQ%2B1b4PJTHaFFLxR3y0YKx54JAEjGc5cgOXrA3LRASzuWNpxoTQ%2BVNyljiwLDfbhg%2BBQmcR6CLixT3elF%2FnFYCzqVI8XRvkLcCOgsWJsH8ufcq2UoxL640edJG2qzKEBN%2FsTXzDk9boVPijLG8D3sWYmk51zZGMQA6anz%2BghJeC%2FXZtI09VyhK17V8huqGh8xBbjiY9H1G3B7fLuYagPWYP0rSdoM5ONwTVjczebUC8ETHZmxxYMVi86jZ0dC3A5ZkcmB9UN4jxu0jrpp%2BW9Y93y4xZxJJNY5kxrszYNkMVjL72dULwtEOEBoFMLDRyMxO3W2pAvVCX0rpaSgfar8hpW8O6GUjdbmuhMXY6awUgWdcrZ%2Bp7yKc3RkXHK59LHGloNi3vtqi3kTL73vujCWE%2BOdc%2Fp%2FkpT01Zodk2tF9bwGaF6kTpHf2VIRU2hu8AyMK6q5sIGOqUBksi6E15tBTVZ0TMVi85YIeXz1XqU1xmpvMZBy4rN5x2XtXPzFrgUVGlJsVs1%2F4BimO5fXv2jHIS5x9S7jf40KTTQFT12%2FYjd1V6UnoJfCLzaQUzMsViXiozv4U7%2BfttbetmCjzxukeVAdkqZdLsAJzwAsGaMlni38gOrmwAfbJyqr1ofqXUAlTdotDCn%2B4NItg8Veibbdy4TO1hGk9vu14a1nSNC&X-Amz-Signature=24b8ddf7470aa17dc0e1eabe8607da975017b58da246637d2986658448212684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCYWSEOH%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDLK8FvbDaqZdLM95eORMspyikKbxTuCazmWrmAt5GBKQIgXtbyAFKzGEaW%2BwjQYzLAFzNfUrcdFPrziKHSTdU24bwq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDO7sLR0n4u9Q0CzzlircA%2FAdEMWqE0ivvtNvuk8oNcogMUbgy35JYz4axOUmUeAtHMdZ02Dr4e3bljjYAqXQhxTYw2IWI0BC2ZUs6eIhmnU0lTwYCRvaeGMre7U6hvQvlR%2Fl3iCyjNUwEVz8k56d2tDtSCiQ9ofsd3XFEtXDVqEprWDVBQrOh4JpSdvntEXiuBZW7jv4dOn2GrcGVQ%2B1b4PJTHaFFLxR3y0YKx54JAEjGc5cgOXrA3LRASzuWNpxoTQ%2BVNyljiwLDfbhg%2BBQmcR6CLixT3elF%2FnFYCzqVI8XRvkLcCOgsWJsH8ufcq2UoxL640edJG2qzKEBN%2FsTXzDk9boVPijLG8D3sWYmk51zZGMQA6anz%2BghJeC%2FXZtI09VyhK17V8huqGh8xBbjiY9H1G3B7fLuYagPWYP0rSdoM5ONwTVjczebUC8ETHZmxxYMVi86jZ0dC3A5ZkcmB9UN4jxu0jrpp%2BW9Y93y4xZxJJNY5kxrszYNkMVjL72dULwtEOEBoFMLDRyMxO3W2pAvVCX0rpaSgfar8hpW8O6GUjdbmuhMXY6awUgWdcrZ%2Bp7yKc3RkXHK59LHGloNi3vtqi3kTL73vujCWE%2BOdc%2Fp%2FkpT01Zodk2tF9bwGaF6kTpHf2VIRU2hu8AyMK6q5sIGOqUBksi6E15tBTVZ0TMVi85YIeXz1XqU1xmpvMZBy4rN5x2XtXPzFrgUVGlJsVs1%2F4BimO5fXv2jHIS5x9S7jf40KTTQFT12%2FYjd1V6UnoJfCLzaQUzMsViXiozv4U7%2BfttbetmCjzxukeVAdkqZdLsAJzwAsGaMlni38gOrmwAfbJyqr1ofqXUAlTdotDCn%2B4NItg8Veibbdy4TO1hGk9vu14a1nSNC&X-Amz-Signature=239cada255f44b650237d00261162b7ac5f1f6db3a9667103511c6972385266e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
