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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THQAZAOJ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T131739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuslKgJhYbwZqOceFCzvboN93EsrjCprmx1LocXhqi9AiEArO7pRGWg3huMmY2arsls%2F%2BtCLXACX7O1HbM5g2oMi4sq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAybF3QAr2JXKZZ2tyrcAznpmtQSQ62RQgjUVRbBK9H2NSICMJ%2FFpaPTxl7rt%2BV2U%2FA8D%2BJGb8rYx3w%2BCMwg1YQIKRqJQTVdvLPsJ1o85uTUAM%2FfgSF6GpmI0nf9WZodbSlCdiJ0F8ACyFE8OoNCnt8M1kLdglBZNrEICTBdo%2F7BHv4NS5Chwr3h%2FX1AcWIOg%2FFHcWEiiUyY3ZWSRMNyXOlyEEjjqmziE5KCGemANGeLgKTHdVDKovqfKhL300fevo7DeCbgoJNC6eSJYOK6lg6wU7hl6lhP2XBDdo%2BHhYuRrQCjOzvg7Zl34H9gmmVTyAA0Ko8eH2YBgJK58J%2Bd8ajh%2FMD9chkAmxr95MVoHC0ITcbHCA3qiI9r%2FplLnh1r2TtSqOMS%2BWM40PS0fbL%2FcIKEJiONbygWMGdKcQe9zBP810zbdKqATU1wzP6VPMfdFmb9y5ee6ZgqLudDbVhWEHlL23%2FRyDJoD364i8UQJLwe5jtG2Um7zUZJJ%2Fkkf3X6yiS%2F9fH94r8OAT4xn3aeKYWkSk%2BErzh31cdJwyYL%2FhqAinNZ6NF6yFFxh1M160vtx0TzWoQnf9wKnPiGjOfHQ%2FM5cfTdOLfdfxST2n4hcJnS1LkHx0q4KzyZ942GXIbpRAaT1eQGRJ6qNte4MMiWob4GOqUBK5P0SIf2yj9HZZTldqTiGd4hVAy0yvsry%2B1M915xM%2FJYCzK4DSIo9EaDzLE2eRWzFIjXqN1cNlaTDcuBB1US2%2FDO0642Id3c20F8s%2F1SZPx4nTkqd46r877EviVrlaZOo1lqTBWXZTPiWCdutBuq3mJNS6Q9FoOjN1OlChnlVsJjyhzWwz7cNTHLYM9ax8E%2BlXm5GkznFQkzjiBaAaHmQshfn8tD&X-Amz-Signature=6d1fea127d61ca14d94878e86bad7d97be3ae760f41df7b9a745456cc9b2c415&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THQAZAOJ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T131739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuslKgJhYbwZqOceFCzvboN93EsrjCprmx1LocXhqi9AiEArO7pRGWg3huMmY2arsls%2F%2BtCLXACX7O1HbM5g2oMi4sq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAybF3QAr2JXKZZ2tyrcAznpmtQSQ62RQgjUVRbBK9H2NSICMJ%2FFpaPTxl7rt%2BV2U%2FA8D%2BJGb8rYx3w%2BCMwg1YQIKRqJQTVdvLPsJ1o85uTUAM%2FfgSF6GpmI0nf9WZodbSlCdiJ0F8ACyFE8OoNCnt8M1kLdglBZNrEICTBdo%2F7BHv4NS5Chwr3h%2FX1AcWIOg%2FFHcWEiiUyY3ZWSRMNyXOlyEEjjqmziE5KCGemANGeLgKTHdVDKovqfKhL300fevo7DeCbgoJNC6eSJYOK6lg6wU7hl6lhP2XBDdo%2BHhYuRrQCjOzvg7Zl34H9gmmVTyAA0Ko8eH2YBgJK58J%2Bd8ajh%2FMD9chkAmxr95MVoHC0ITcbHCA3qiI9r%2FplLnh1r2TtSqOMS%2BWM40PS0fbL%2FcIKEJiONbygWMGdKcQe9zBP810zbdKqATU1wzP6VPMfdFmb9y5ee6ZgqLudDbVhWEHlL23%2FRyDJoD364i8UQJLwe5jtG2Um7zUZJJ%2Fkkf3X6yiS%2F9fH94r8OAT4xn3aeKYWkSk%2BErzh31cdJwyYL%2FhqAinNZ6NF6yFFxh1M160vtx0TzWoQnf9wKnPiGjOfHQ%2FM5cfTdOLfdfxST2n4hcJnS1LkHx0q4KzyZ942GXIbpRAaT1eQGRJ6qNte4MMiWob4GOqUBK5P0SIf2yj9HZZTldqTiGd4hVAy0yvsry%2B1M915xM%2FJYCzK4DSIo9EaDzLE2eRWzFIjXqN1cNlaTDcuBB1US2%2FDO0642Id3c20F8s%2F1SZPx4nTkqd46r877EviVrlaZOo1lqTBWXZTPiWCdutBuq3mJNS6Q9FoOjN1OlChnlVsJjyhzWwz7cNTHLYM9ax8E%2BlXm5GkznFQkzjiBaAaHmQshfn8tD&X-Amz-Signature=9018d950b82fb9e10c5b0d2ed7bfd96b3c72f1da28484f602fd635e888bebc88&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
