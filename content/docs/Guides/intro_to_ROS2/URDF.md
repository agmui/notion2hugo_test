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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKNEDMXT%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T081122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuyyR5NLXiheopiKLnU%2BiavnBuGHIz4iiuURrkQTjusgIgFahFxU8yuYEuuUmO8p7KIIYV3MP%2FNyVdy2MHHnoYHGkq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDACFmat1zHePI5NhACrcAz%2FEaL%2FBdICiEBfjSgI2C14EPDJqNdnTGNF1fH7Yvqt%2FYpjw%2BEtx%2Fs4gXswSCoQClsX0Xv50e6qvcTRhicieUYyqutnL7XP7lbSsFK2ySDII%2FzlfVZfTkHnRS3dWJg1HRiLDfnBeJBHAs2zQQPwdUSQFBEZmVgDKu%2BS6kLPa25RT%2BpJ%2Bxj0jgWDnRFQCAmyUGa7JZtw%2BHgWWT8wmzMod2X%2B6HTXRB%2FZPfL5yC9pZMpGDRv7hvOicWDKSmzG9GR%2FvKWL3IrgVQ%2Bhh4jvyB2LI0m%2Bt1IVQhcuc1%2F%2BEg%2Bod8tzMdFacCwL9Vw%2FNY5anSlRNVweFJZrh0Dp78m%2Bf9MkF6nK12yoKdOAnL%2FOo63IH7EasPkCTx21mZUddTC1PLQDUjKnr%2BTQof%2FG%2F1%2BSox3cDKlpaEzJQrnSjHe5LaXO55nRQKiFV0nMH8pw0vpOCwAfweUxfLQ1dE5%2BKJZ6mKHCHcZsuSpX337drGgZFktb8wANi3UPmiLKJb0A7%2BGcZXcpHSnjXwvef1UXveW0HVZBZRuQQOcUYuJcIucz%2F0nRaNxcTvT0p8r4sFms6PWZHMjb8vAHagfATHSqBrvkiGxr7vp2kgqnL6l%2FWV7FeRIMukvOd27Dk02Vfvt0oLpquMMC25L4GOqUBkakzUdeuBAZRBeqSfqiNM7NGIxR%2Bu5GKGZBvNbXCu1wFaea2VpREFLcZdpipmViJS%2BxgokqtVWWYPqfwiXjH2I9W8RZFESMgnpLsw8upVKIbMiHlhUHDvQ3HRc8uMTu7zi1YkMDlH7WQ6enwpb7AEycqKOHyT4tC3Lvlbdw0DMvWPu1sw6ztLO9oF8EW7sqD1XQ4JNeOk%2F8ssSHuRTvetpD8TCKa&X-Amz-Signature=68ffe25a7d39ff65548df2216420961637cc39e453e2f9f5ef2baab22b08b708&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKNEDMXT%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T081122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuyyR5NLXiheopiKLnU%2BiavnBuGHIz4iiuURrkQTjusgIgFahFxU8yuYEuuUmO8p7KIIYV3MP%2FNyVdy2MHHnoYHGkq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDACFmat1zHePI5NhACrcAz%2FEaL%2FBdICiEBfjSgI2C14EPDJqNdnTGNF1fH7Yvqt%2FYpjw%2BEtx%2Fs4gXswSCoQClsX0Xv50e6qvcTRhicieUYyqutnL7XP7lbSsFK2ySDII%2FzlfVZfTkHnRS3dWJg1HRiLDfnBeJBHAs2zQQPwdUSQFBEZmVgDKu%2BS6kLPa25RT%2BpJ%2Bxj0jgWDnRFQCAmyUGa7JZtw%2BHgWWT8wmzMod2X%2B6HTXRB%2FZPfL5yC9pZMpGDRv7hvOicWDKSmzG9GR%2FvKWL3IrgVQ%2Bhh4jvyB2LI0m%2Bt1IVQhcuc1%2F%2BEg%2Bod8tzMdFacCwL9Vw%2FNY5anSlRNVweFJZrh0Dp78m%2Bf9MkF6nK12yoKdOAnL%2FOo63IH7EasPkCTx21mZUddTC1PLQDUjKnr%2BTQof%2FG%2F1%2BSox3cDKlpaEzJQrnSjHe5LaXO55nRQKiFV0nMH8pw0vpOCwAfweUxfLQ1dE5%2BKJZ6mKHCHcZsuSpX337drGgZFktb8wANi3UPmiLKJb0A7%2BGcZXcpHSnjXwvef1UXveW0HVZBZRuQQOcUYuJcIucz%2F0nRaNxcTvT0p8r4sFms6PWZHMjb8vAHagfATHSqBrvkiGxr7vp2kgqnL6l%2FWV7FeRIMukvOd27Dk02Vfvt0oLpquMMC25L4GOqUBkakzUdeuBAZRBeqSfqiNM7NGIxR%2Bu5GKGZBvNbXCu1wFaea2VpREFLcZdpipmViJS%2BxgokqtVWWYPqfwiXjH2I9W8RZFESMgnpLsw8upVKIbMiHlhUHDvQ3HRc8uMTu7zi1YkMDlH7WQ6enwpb7AEycqKOHyT4tC3Lvlbdw0DMvWPu1sw6ztLO9oF8EW7sqD1XQ4JNeOk%2F8ssSHuRTvetpD8TCKa&X-Amz-Signature=abbf84f0f6dfb17c728b8d671315ec3a5e77b0cdecbfba9453a8f8375c3e325d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
