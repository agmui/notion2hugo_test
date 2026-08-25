---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XN722VO%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBxRceV70c%2FCOsOR8MBM5wfH5ehvrxCO6qcboxLiDoBnAiAEGHzUeXi72f9BRDRcm4OdjX54LkZQy1%2Fks2Vv5NTQiSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGaBECcBzVOW4SkgGKtwDrIuJ%2BT%2FzZQdbXEUREA0742TbXP4c%2FkoW0h84xsA6eirtqeYBXO5fHeMPnCo2YI0tXDmkqppPtcsZ2lAqRoHxjWQM%2BLd2Tw6K51xHD5Jj44FC1R50STJ0fQCyGtvMv0J0W3OTYJJWD0pZr%2F%2BTaDkouZ8OW0wSFDpPZPRf51NQWq9s5OFBhpI6HdVMZ4wRGwxL0%2BvLGLKs1ZWzHxqR6LgTAJiytNUFIlUXloXcX2g9atmUMgmYNIquinCMIwuep2aZSDy%2FvIZxkdLjhm48ivm4%2FEvD3GcMTs88Y7FrBdibjgPiiCXk78szg1xX0ORPcyWL58p0GD4TxEPaiMuU4DG%2BaSvd14niPerQ3HRmsheGGmHkgKbBEyuj1yJHHM3J1F5ipIh7MD6jvX8eRQsikuRHWP1KrdwC8e6jI4cMtn2KUBjr0h2%2FcHQor%2FDXbGDuWsow8HQyrrcvMkkcuP%2FS6VSxT14w848oMryg%2BDBI3W1vAS3vBJsJD58OLPiV7xJyyuKtDzt2cSNdxNpjAScOUjGGGX9yqOcvpA4cK2YgfsnJx200BmlMP8zg2Y4FM8bVPPWfUPwcC4lcZJcdY6i3c5PiqUl0DYArNYMzkbow%2Bh%2FG8Q84z8XdHfl0W5IPURUwktSz1AY6pgHDoUu8WOYSOfm2ww%2FDCqOMKABhxDfQpOXn%2BCc3FwnOlZOdeR1WNQzgw5WeL00gRSubzdoCGUccT%2Fa9B6bgK7e%2FMwiEuxx8vfwL%2F%2BeLjha5cZSUGGuRq0cgAksOAF1oqNQsdISZIVfzoSGbaw0LP69yZ%2FJC%2BRHsk78prqHkHdodx%2BBl5j7eqS%2BrqffQq2gCohQ0%2FU4veyCMnVQvllD0Vizev9rGOBhC&X-Amz-Signature=01ee2f68a5883dfa91143cf207078ed29ac038f03a5a25a591bd9416ce7f3d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XN722VO%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBxRceV70c%2FCOsOR8MBM5wfH5ehvrxCO6qcboxLiDoBnAiAEGHzUeXi72f9BRDRcm4OdjX54LkZQy1%2Fks2Vv5NTQiSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGaBECcBzVOW4SkgGKtwDrIuJ%2BT%2FzZQdbXEUREA0742TbXP4c%2FkoW0h84xsA6eirtqeYBXO5fHeMPnCo2YI0tXDmkqppPtcsZ2lAqRoHxjWQM%2BLd2Tw6K51xHD5Jj44FC1R50STJ0fQCyGtvMv0J0W3OTYJJWD0pZr%2F%2BTaDkouZ8OW0wSFDpPZPRf51NQWq9s5OFBhpI6HdVMZ4wRGwxL0%2BvLGLKs1ZWzHxqR6LgTAJiytNUFIlUXloXcX2g9atmUMgmYNIquinCMIwuep2aZSDy%2FvIZxkdLjhm48ivm4%2FEvD3GcMTs88Y7FrBdibjgPiiCXk78szg1xX0ORPcyWL58p0GD4TxEPaiMuU4DG%2BaSvd14niPerQ3HRmsheGGmHkgKbBEyuj1yJHHM3J1F5ipIh7MD6jvX8eRQsikuRHWP1KrdwC8e6jI4cMtn2KUBjr0h2%2FcHQor%2FDXbGDuWsow8HQyrrcvMkkcuP%2FS6VSxT14w848oMryg%2BDBI3W1vAS3vBJsJD58OLPiV7xJyyuKtDzt2cSNdxNpjAScOUjGGGX9yqOcvpA4cK2YgfsnJx200BmlMP8zg2Y4FM8bVPPWfUPwcC4lcZJcdY6i3c5PiqUl0DYArNYMzkbow%2Bh%2FG8Q84z8XdHfl0W5IPURUwktSz1AY6pgHDoUu8WOYSOfm2ww%2FDCqOMKABhxDfQpOXn%2BCc3FwnOlZOdeR1WNQzgw5WeL00gRSubzdoCGUccT%2Fa9B6bgK7e%2FMwiEuxx8vfwL%2F%2BeLjha5cZSUGGuRq0cgAksOAF1oqNQsdISZIVfzoSGbaw0LP69yZ%2FJC%2BRHsk78prqHkHdodx%2BBl5j7eqS%2BrqffQq2gCohQ0%2FU4veyCMnVQvllD0Vizev9rGOBhC&X-Amz-Signature=c104f5913614d927eb90c705842048b83f1950c0aa6a6320d9c12c5cf09356c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
