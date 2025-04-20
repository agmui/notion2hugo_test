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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSMJZNYO%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIH4DG1YujtVpXo2Mj97aWhJIDGfxifK3Nka%2F20w0Y7F3AiEAmM%2FKnxF4NxYo52GWTfW1GQcgtvM6vyCdFDDVEK5hYmgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxlMCThkoPvQ0dZKircA9e%2FFWa0whtW1gU2xqQsXmygjQKURX2cARsXbHdOfX72Lq3skKL3yR82dJZ6z1hm7OA8hAS6YUrru6YA0clSk1JV%2FfLbLzho7SpLDSCtcyBufjXnuSeqx%2B0%2FfsuvLfupx97Lr4Vx8V31k93NLvBsMbvmPgGNgnsewZAhl88CgoZJLxHUPYa5aK68NkhujBRANvW1BMcA5USEXFuC%2FXj5BmHb%2BEqWBcTgDDq6jq%2FHsrNS%2BR9LM13y9W0DneHJ5o7Omr3wzL0zd4qYc7Y520op01bnpjWFkZtMURpowYr7ojKZsMV7QDG1%2FSZjQyRRP4ZDWfgzUe59JXiiMz%2F%2FzYlv8mhRG10VTMayv7OpH8gPLIb%2FHyW%2FVbelSq8%2FmR3K3ILN0cgnObhHowcg9jh7lI61w4C6kP5VHKwrXRWGz15L8KWSAZi%2FaAvyHp52IRQTGhKLoAqctOOtCiQiJUgQmWMyxUXu4%2F5H9gIeulyemEtM8vix%2Bt9z77XozQBUvsvEd5agX1loDtE7Y9Pk8zch4Ht3z2Un%2FH1SpsCMaPmjsyyvRyHeZxO94WIvmTFoq9dcc%2B8qKpXd9%2F4iVebfMC7Qrw9undX9B99Oxx8ffuEooeFVm2uZcMnuQrgsaSiEduBhMNqjksAGOqUBtUKI7tR6e4akoO8FTkVMtkg38BJTl%2F6N83HRFM1m5Kf69%2BX7QG2YKQV3Bbfu%2BOk6A%2B9T%2BsM1DEX90dryBIEHFvpmvIRHn1InktFg7j3NW1IpmrGNc6FIR%2BZeg3Sd5AmPBJ58S7zwH8Hg85KneueWzjnX49krpw2ZfFYZjO%2BRT2CLjzopb92yHM4tn0Fpl4ZLJnPDWd8KoCeZSjIBDd4JarpurdXX&X-Amz-Signature=78230abccc20f33009ebba2013e052d389335452d7c5a4dd6a2a1797acb319c7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSMJZNYO%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIH4DG1YujtVpXo2Mj97aWhJIDGfxifK3Nka%2F20w0Y7F3AiEAmM%2FKnxF4NxYo52GWTfW1GQcgtvM6vyCdFDDVEK5hYmgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxlMCThkoPvQ0dZKircA9e%2FFWa0whtW1gU2xqQsXmygjQKURX2cARsXbHdOfX72Lq3skKL3yR82dJZ6z1hm7OA8hAS6YUrru6YA0clSk1JV%2FfLbLzho7SpLDSCtcyBufjXnuSeqx%2B0%2FfsuvLfupx97Lr4Vx8V31k93NLvBsMbvmPgGNgnsewZAhl88CgoZJLxHUPYa5aK68NkhujBRANvW1BMcA5USEXFuC%2FXj5BmHb%2BEqWBcTgDDq6jq%2FHsrNS%2BR9LM13y9W0DneHJ5o7Omr3wzL0zd4qYc7Y520op01bnpjWFkZtMURpowYr7ojKZsMV7QDG1%2FSZjQyRRP4ZDWfgzUe59JXiiMz%2F%2FzYlv8mhRG10VTMayv7OpH8gPLIb%2FHyW%2FVbelSq8%2FmR3K3ILN0cgnObhHowcg9jh7lI61w4C6kP5VHKwrXRWGz15L8KWSAZi%2FaAvyHp52IRQTGhKLoAqctOOtCiQiJUgQmWMyxUXu4%2F5H9gIeulyemEtM8vix%2Bt9z77XozQBUvsvEd5agX1loDtE7Y9Pk8zch4Ht3z2Un%2FH1SpsCMaPmjsyyvRyHeZxO94WIvmTFoq9dcc%2B8qKpXd9%2F4iVebfMC7Qrw9undX9B99Oxx8ffuEooeFVm2uZcMnuQrgsaSiEduBhMNqjksAGOqUBtUKI7tR6e4akoO8FTkVMtkg38BJTl%2F6N83HRFM1m5Kf69%2BX7QG2YKQV3Bbfu%2BOk6A%2B9T%2BsM1DEX90dryBIEHFvpmvIRHn1InktFg7j3NW1IpmrGNc6FIR%2BZeg3Sd5AmPBJ58S7zwH8Hg85KneueWzjnX49krpw2ZfFYZjO%2BRT2CLjzopb92yHM4tn0Fpl4ZLJnPDWd8KoCeZSjIBDd4JarpurdXX&X-Amz-Signature=04bbe9f46e2feb1e273449c12597d492309a40eddec7c181ee65dc0c0fd07cfa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
