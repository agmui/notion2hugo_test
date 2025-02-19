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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TM4JGO6%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC6SZ%2F2lO3ux%2BZZlRTGnzvUnJg6n4TmBdL0IluiGPHinAIgCz%2BWmOL3yXd3k4NEXBJ2V6F3pK1H96DLUNuetCyFe8oqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnfuRw7fBXrtPow1yrcA6J8mv1LH2jUiVbahz5SpUHg1LblazYWSPQYjGEy1U8tTUm3MVadZ94itAGhRhgnvZeSwidoQddGW4XGJlIMWadW32FxQ7FrcbG0RVK4j%2FxV5a0Bof8D%2FJ9Gs5FAI29p6Z1EKLvEKG3PtjMmHbcB1knbejIu31pJLxQauUpmPCPiQRpiKpijR%2FWoPvWyvv07HbEaFbLtbJAOa8YdheaZdMk6z%2B0rhKLs70O7SRRDDi4Mo7bqr1JB%2F6ute7V9lZBNEMDKIIiDeP%2BXgf%2BFQMUY6SR5LZgYwSD%2Bul9x4boBLt7JubQViVrIysVfWehUseNBbJS6dI26hbAdz2%2FNoqESYkiFMd3GkJqws6mWLcdOFJ1XUjtjfgH52PrLHz3Ed%2FdDhO1Sn8mdAfNzL%2BmVMh9OMTs%2BF82DjlmdaDQXoZUbdfhM6RTZY4lwhbUvTTEltxjpCWtSzDR34AMlCzlGyWHCegmY88E2AiVxlkc6rriXA1Efk%2F4uar05UJrAWqBXIIExUh4FzBOlFO%2FxsxSKf4dh3vbOQuzsK0SElhXqhYFzjjJwycD%2FrRA52nzGs%2F1rmftXpzW30bkAuMkWauSF8aU9xc8MJQxVkPOlT4akaGbGxWah46Whb83cX1SBLacKMIqj1b0GOqUBHFMS3CzjQRwTEHSny7GUiXkRkalK3aTH5iZDkEJ9NvU2ccq%2FmPdIRqyUEM0an0WvsESo6EW4xRECmQAR%2F3%2Bq5DVIm%2BpUU4slgWZziZaXb%2FKQtsj45AHb85GgFhknAOv5Y3Qq6d730Uqms52KEqb6zky5UIQ8%2F9DBRnIS94n3FCZURA5guUfRNW1OKkgZvC8VJYcT4WjRjavfuYbHUx85OR0jvTLb&X-Amz-Signature=d82e60e46b1815de61ec7868c086595b577e57eba16014e8c787e4b0d6fae90f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TM4JGO6%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC6SZ%2F2lO3ux%2BZZlRTGnzvUnJg6n4TmBdL0IluiGPHinAIgCz%2BWmOL3yXd3k4NEXBJ2V6F3pK1H96DLUNuetCyFe8oqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnfuRw7fBXrtPow1yrcA6J8mv1LH2jUiVbahz5SpUHg1LblazYWSPQYjGEy1U8tTUm3MVadZ94itAGhRhgnvZeSwidoQddGW4XGJlIMWadW32FxQ7FrcbG0RVK4j%2FxV5a0Bof8D%2FJ9Gs5FAI29p6Z1EKLvEKG3PtjMmHbcB1knbejIu31pJLxQauUpmPCPiQRpiKpijR%2FWoPvWyvv07HbEaFbLtbJAOa8YdheaZdMk6z%2B0rhKLs70O7SRRDDi4Mo7bqr1JB%2F6ute7V9lZBNEMDKIIiDeP%2BXgf%2BFQMUY6SR5LZgYwSD%2Bul9x4boBLt7JubQViVrIysVfWehUseNBbJS6dI26hbAdz2%2FNoqESYkiFMd3GkJqws6mWLcdOFJ1XUjtjfgH52PrLHz3Ed%2FdDhO1Sn8mdAfNzL%2BmVMh9OMTs%2BF82DjlmdaDQXoZUbdfhM6RTZY4lwhbUvTTEltxjpCWtSzDR34AMlCzlGyWHCegmY88E2AiVxlkc6rriXA1Efk%2F4uar05UJrAWqBXIIExUh4FzBOlFO%2FxsxSKf4dh3vbOQuzsK0SElhXqhYFzjjJwycD%2FrRA52nzGs%2F1rmftXpzW30bkAuMkWauSF8aU9xc8MJQxVkPOlT4akaGbGxWah46Whb83cX1SBLacKMIqj1b0GOqUBHFMS3CzjQRwTEHSny7GUiXkRkalK3aTH5iZDkEJ9NvU2ccq%2FmPdIRqyUEM0an0WvsESo6EW4xRECmQAR%2F3%2Bq5DVIm%2BpUU4slgWZziZaXb%2FKQtsj45AHb85GgFhknAOv5Y3Qq6d730Uqms52KEqb6zky5UIQ8%2F9DBRnIS94n3FCZURA5guUfRNW1OKkgZvC8VJYcT4WjRjavfuYbHUx85OR0jvTLb&X-Amz-Signature=bdb39f141fcf0529bdd334520b35e2cc707f4783d69e7016bccfaead3149ea9d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
