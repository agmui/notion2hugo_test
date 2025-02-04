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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVTBF3WT%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCVU1muDebagiKcUQDjH6dNXBoa4pT%2F4gWAzp5Mncva8AIgWB6eVzYzMQSbyDPRL%2BJDrk7sK1b9BXCEbQA%2FTc%2BEcicq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOm7qAfwYE8C4Qq0IyrcA2yhyJ6dr%2FJN0OAnaka96WVkGH2iylQ49urLL%2F8yLjC75C%2FRLbyw43vnXkug%2F0moRYT6neTIoHEC8E7LirbzNdVhsTHHN%2FXJkvDgbkW2FK9KwOb6dxAyYhl0ouIv63Vt5TxlsPVNoMWBSqYPbsEaUkotlKxrrP9rqql0QfKi%2BFjClPvdkqEWnoYsAE%2FUynuWlYbv3xXsxVINeVQK9htbFNTk%2FxO%2BrbXyfrxpCLmLTBT5rr24%2B2FpGfvXrtAIQ3WxuenHGVi81Fh2DnS%2BGLXitdEKZ13GuYCLpobIOnHcP4265IrdmFs%2FSGUPNlCtlXAWKCcAUPJk8tmZChsh4wIT%2BHrHJiafijpGeXWgKKQIytUFLfMmPt3cSGuY%2By44QFW%2BKJDPBBQ%2Fy1oAqZ2%2BQigr%2FTdEiNqZL93OjxDk8ZRCBv83AbHCh0DM3NXpbDSQU%2FBb4NddS4r64nwCtcumr4%2B9scQs6xq2MdLknHf44Wq1DRMkixcD2hzG1EulOKGLSgOWw%2B7BkPKorASiqeM0ahEZUF2y%2Fsx3uQb2GNb1%2BcmPKUJj6VRE6kSZb4Vb4YZHLTPDLBWhreeD7EgRevKElcSff6m8ZOdGAYO7DK2hW9uuHyio5D5sD9bsg9KTlQrTMMK%2Fib0GOqUBYTPXE1GjzHX9%2FykeX5l%2B2IsWg3gXFHYlRc3Pr2pjRiIqZn6OvfQl9iJj08qmWA8RncOdvBqXXLzPGUxYRZ1aBDj3D%2BorPIouRyOPv1tYn2FzD4gUaj3lKUGq0wtBLBzS9Ff8qsmRn0qfJBC6O3A2RPSm7REtiorNyACC1NEvpzhOu94dj8Z7630AUEchRN6WWMMktYRtArSODvxHM%2BBfTFSp2qC8&X-Amz-Signature=a335a3b0ab6da2fdb07339f6bb8fc5360786e639fcbcefad1c154f9f7fe698ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVTBF3WT%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCVU1muDebagiKcUQDjH6dNXBoa4pT%2F4gWAzp5Mncva8AIgWB6eVzYzMQSbyDPRL%2BJDrk7sK1b9BXCEbQA%2FTc%2BEcicq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOm7qAfwYE8C4Qq0IyrcA2yhyJ6dr%2FJN0OAnaka96WVkGH2iylQ49urLL%2F8yLjC75C%2FRLbyw43vnXkug%2F0moRYT6neTIoHEC8E7LirbzNdVhsTHHN%2FXJkvDgbkW2FK9KwOb6dxAyYhl0ouIv63Vt5TxlsPVNoMWBSqYPbsEaUkotlKxrrP9rqql0QfKi%2BFjClPvdkqEWnoYsAE%2FUynuWlYbv3xXsxVINeVQK9htbFNTk%2FxO%2BrbXyfrxpCLmLTBT5rr24%2B2FpGfvXrtAIQ3WxuenHGVi81Fh2DnS%2BGLXitdEKZ13GuYCLpobIOnHcP4265IrdmFs%2FSGUPNlCtlXAWKCcAUPJk8tmZChsh4wIT%2BHrHJiafijpGeXWgKKQIytUFLfMmPt3cSGuY%2By44QFW%2BKJDPBBQ%2Fy1oAqZ2%2BQigr%2FTdEiNqZL93OjxDk8ZRCBv83AbHCh0DM3NXpbDSQU%2FBb4NddS4r64nwCtcumr4%2B9scQs6xq2MdLknHf44Wq1DRMkixcD2hzG1EulOKGLSgOWw%2B7BkPKorASiqeM0ahEZUF2y%2Fsx3uQb2GNb1%2BcmPKUJj6VRE6kSZb4Vb4YZHLTPDLBWhreeD7EgRevKElcSff6m8ZOdGAYO7DK2hW9uuHyio5D5sD9bsg9KTlQrTMMK%2Fib0GOqUBYTPXE1GjzHX9%2FykeX5l%2B2IsWg3gXFHYlRc3Pr2pjRiIqZn6OvfQl9iJj08qmWA8RncOdvBqXXLzPGUxYRZ1aBDj3D%2BorPIouRyOPv1tYn2FzD4gUaj3lKUGq0wtBLBzS9Ff8qsmRn0qfJBC6O3A2RPSm7REtiorNyACC1NEvpzhOu94dj8Z7630AUEchRN6WWMMktYRtArSODvxHM%2BBfTFSp2qC8&X-Amz-Signature=3df5492d9457ef522ebb887f7dcbbceaf1f308c2c80a51f21c1135b30a005f2b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
