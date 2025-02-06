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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKHSNG5C%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIBlECKiLZ2%2BzfTmJljxqlkTot1M3PZZVkno5IwE%2FU%2B5wAiAlL%2FuFbVvaHjMR5Tyw6jqrC%2B7Jfs0vn8MjLqw47Dkx6Sr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMtYzi46pu0Gvm%2FtYEKtwDClYjaI%2Fg56GWqxLT3abHjiNITWFNrOO%2FDVnTqV1OIXYqH4jv1y1RGucDySZuiWallVeYOiBUrlv6nJmZdoiZqfLENndD%2BI99A%2FyaaRLpG5rQTOlvCeQoBtU7hx4zdkP4Kli%2FsBOJHI%2F6%2B5RlKTFO73OmkfKOOOkupRigzX78JATUQJyiseTUsMQqswbCDCHNBYvyPfzlv%2FapQMDtlceUG4vh%2FBIGb3ATkBiuHjGpbuWE9LclZJk3F0li377UTNPGpnBd7m4TKfxsYs%2BSPOAEAM8wZBfrv4v6PsjIDVFYtaWor%2FxelQd7Cjs88Xns4TWD%2Br8SdbjZuK1LDlnpZ5xYKnKA3IWU7HW6ihlX3dTIthkqYnl5Axy5ntx946xohKSygJRIvjPgtKNmWTiQdnMFv6Hb6uSMKSl9mW1hZpJMS0umYN7%2B6XA1RX1eIjqFAFNnEjux6K06m6wlDXggUPcH3Qv1%2FdWYKwA05%2Bbdc5zs6OsbqsVtxvueNKOKaFOaFf7kkopN05FdKn%2BaQ5rifHEDmb1Lh73Xlmv%2BKcYk4POsc2ZnEMgYtu5ohug2kSYTkce%2BSoqU2WuhbP9ZbSzSeTVRIuD18fqn1hW3%2FQRcleQOQ3uJja3Fw4vEEI8C7lMw1eCQvQY6pgHm0yIw40b8u8Z0PAi4HSAfJ75Kp06IPuW%2BdaVOvOSfbb1vItQiLiJ6pyKclUxBAOABFiTLfve0nHiiEpgC4shrb9qa28BVQCovfR4iItzVlIYa9KnE5Fk4oL%2BTm%2BRL7Y%2FNNjrgnH2%2F%2Bmp55eyu31EJfwTCVtTdYprZw0fygf5SzmoMKT0Xcun7c10SvkPeHEVPTkxStNOHJSh%2FWZRM%2FyZRBzM77scs&X-Amz-Signature=d7607688b5a1460a8756b77ed466145ccad504cc299afb9988cf8bad4c363f68&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKHSNG5C%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIBlECKiLZ2%2BzfTmJljxqlkTot1M3PZZVkno5IwE%2FU%2B5wAiAlL%2FuFbVvaHjMR5Tyw6jqrC%2B7Jfs0vn8MjLqw47Dkx6Sr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMtYzi46pu0Gvm%2FtYEKtwDClYjaI%2Fg56GWqxLT3abHjiNITWFNrOO%2FDVnTqV1OIXYqH4jv1y1RGucDySZuiWallVeYOiBUrlv6nJmZdoiZqfLENndD%2BI99A%2FyaaRLpG5rQTOlvCeQoBtU7hx4zdkP4Kli%2FsBOJHI%2F6%2B5RlKTFO73OmkfKOOOkupRigzX78JATUQJyiseTUsMQqswbCDCHNBYvyPfzlv%2FapQMDtlceUG4vh%2FBIGb3ATkBiuHjGpbuWE9LclZJk3F0li377UTNPGpnBd7m4TKfxsYs%2BSPOAEAM8wZBfrv4v6PsjIDVFYtaWor%2FxelQd7Cjs88Xns4TWD%2Br8SdbjZuK1LDlnpZ5xYKnKA3IWU7HW6ihlX3dTIthkqYnl5Axy5ntx946xohKSygJRIvjPgtKNmWTiQdnMFv6Hb6uSMKSl9mW1hZpJMS0umYN7%2B6XA1RX1eIjqFAFNnEjux6K06m6wlDXggUPcH3Qv1%2FdWYKwA05%2Bbdc5zs6OsbqsVtxvueNKOKaFOaFf7kkopN05FdKn%2BaQ5rifHEDmb1Lh73Xlmv%2BKcYk4POsc2ZnEMgYtu5ohug2kSYTkce%2BSoqU2WuhbP9ZbSzSeTVRIuD18fqn1hW3%2FQRcleQOQ3uJja3Fw4vEEI8C7lMw1eCQvQY6pgHm0yIw40b8u8Z0PAi4HSAfJ75Kp06IPuW%2BdaVOvOSfbb1vItQiLiJ6pyKclUxBAOABFiTLfve0nHiiEpgC4shrb9qa28BVQCovfR4iItzVlIYa9KnE5Fk4oL%2BTm%2BRL7Y%2FNNjrgnH2%2F%2Bmp55eyu31EJfwTCVtTdYprZw0fygf5SzmoMKT0Xcun7c10SvkPeHEVPTkxStNOHJSh%2FWZRM%2FyZRBzM77scs&X-Amz-Signature=a1079ab2a84e2c77077ea431a6deedccb47e8430ff2cf9952243d3e5f8f0db16&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
