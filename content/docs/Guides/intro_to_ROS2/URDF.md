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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z72EQGAF%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFnQa1bz9r6%2BI0VbT3CvClpeu0HGHvsJPAMVLvmkxG%2B8AiA3dF4AgsQUPHWHcgrngncZ1KhXnMsLr4kIHWpA4t4TbCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMMF8xWCflmqUN9tiXKtwDc2YILcjU1sQNgKpnTYYgbhhp1VrJC%2F8SIK0qrV0lbEFH7myaPYuxpEqDvXAmYgFOw50bTG8683adjj3CalNjrnxbJylsfi5wfrr38RjNfl2Oy7ywI5ImVa7w1tyPQWoQBCUWCrnILwqAT8CGk%2FulWu%2FrV%2Bo1bNnjgP93ASiGH7bhMldG5cBOvEgT91tAZe4ebAx18y5HuOf1SITPQzcI4QnNqdPH%2ByuIO%2Btg1T8OvOk2E6Z1uKCkM2OB2cIMN6aFlukEOpRh2GxtP1ILQpxeJPTBT4e5JqoZde%2BFDP5LJr4YDbUzm4kzhfePAxahnH4hD1fgHvjyUIUM9JTHQAATi0VbWF4WMM0Pe12%2BLYW4k0MO9TgEmdyQ1KF%2BcbXh1a8QIE%2BO42Dr5I1h19hh1AVpdjkhNlIIFqaKPHk43jSr8kH0usLmxik7SNz0a2pCwU7pJz1vlbTklp6AKqNSsdUWyXzmjV6NG81Oje9wzytN9wybCJHbz3S%2BikQRe1pUDlkz%2Bva4qhrn4SRGYtU3yCmL%2FxJ4nlL%2FSOioae7wFh%2FH2cJ8EiQh%2BMWtZHhOfSqlsachtnAckb14vLoGhrw8Ct4kxdnCZ2FXFcd1PeP3EdZMUQD0Uq9EGCzxfgZijO8witHbwwY6pgHtoyZDX10wvLI4iFSh7%2F8d0p50gTVnpk0Gu%2Bq1l%2BAl%2BEr5q0Pb8pGG0%2Fdn1ehgcCgWfhbszN1b%2BhgNsk1jctsFlmrDwQUkhJ7t6TqAiI8UI7VufC800ySCy5Yyp9DxLghg%2BGbWAM1cPWQw5qu3tp8iRf4py4rdpwHEnC8AKyrMdM4ceNnJHp6Tilx9HRq78AyCyMJeJIFv4tfuic9mC0NVXupxNZhH&X-Amz-Signature=2b9180a81e10bc8fc55628866615299d9ff615b3ed1295d5fd2039be0b5f7db8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z72EQGAF%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFnQa1bz9r6%2BI0VbT3CvClpeu0HGHvsJPAMVLvmkxG%2B8AiA3dF4AgsQUPHWHcgrngncZ1KhXnMsLr4kIHWpA4t4TbCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMMF8xWCflmqUN9tiXKtwDc2YILcjU1sQNgKpnTYYgbhhp1VrJC%2F8SIK0qrV0lbEFH7myaPYuxpEqDvXAmYgFOw50bTG8683adjj3CalNjrnxbJylsfi5wfrr38RjNfl2Oy7ywI5ImVa7w1tyPQWoQBCUWCrnILwqAT8CGk%2FulWu%2FrV%2Bo1bNnjgP93ASiGH7bhMldG5cBOvEgT91tAZe4ebAx18y5HuOf1SITPQzcI4QnNqdPH%2ByuIO%2Btg1T8OvOk2E6Z1uKCkM2OB2cIMN6aFlukEOpRh2GxtP1ILQpxeJPTBT4e5JqoZde%2BFDP5LJr4YDbUzm4kzhfePAxahnH4hD1fgHvjyUIUM9JTHQAATi0VbWF4WMM0Pe12%2BLYW4k0MO9TgEmdyQ1KF%2BcbXh1a8QIE%2BO42Dr5I1h19hh1AVpdjkhNlIIFqaKPHk43jSr8kH0usLmxik7SNz0a2pCwU7pJz1vlbTklp6AKqNSsdUWyXzmjV6NG81Oje9wzytN9wybCJHbz3S%2BikQRe1pUDlkz%2Bva4qhrn4SRGYtU3yCmL%2FxJ4nlL%2FSOioae7wFh%2FH2cJ8EiQh%2BMWtZHhOfSqlsachtnAckb14vLoGhrw8Ct4kxdnCZ2FXFcd1PeP3EdZMUQD0Uq9EGCzxfgZijO8witHbwwY6pgHtoyZDX10wvLI4iFSh7%2F8d0p50gTVnpk0Gu%2Bq1l%2BAl%2BEr5q0Pb8pGG0%2Fdn1ehgcCgWfhbszN1b%2BhgNsk1jctsFlmrDwQUkhJ7t6TqAiI8UI7VufC800ySCy5Yyp9DxLghg%2BGbWAM1cPWQw5qu3tp8iRf4py4rdpwHEnC8AKyrMdM4ceNnJHp6Tilx9HRq78AyCyMJeJIFv4tfuic9mC0NVXupxNZhH&X-Amz-Signature=030218987118189719584cae79e0ef7f7486950341e1345736f7a06f7b04db74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
