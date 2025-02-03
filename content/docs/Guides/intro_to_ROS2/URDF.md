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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5IYTJIM%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIEBD9YgklhZPAcUAxUIV%2FHgKEZ5eHJD2fuzc0RjxzYXUAiEAue8s7z8Z%2B36RrQg3DWQufbOiY2RmgmENHhHMbcDFOG8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJfeuGCt3wtLKsVfmircA3%2FpfYDpRd4d9AuLadIgUEPdzjOL2wGmXHLKi3oBvgZ4holH90wcKbRdkClJjlCE6r7DAdYJi5dqvrZsjSVzonXgNqSh5dJNNQexj43%2Blgq%2BG21dqsXN%2FWKE9HLThV9WlO51ZaPpK4yuxrxiK1zIbGrNFdDmR2lBqD4A3NOe3zgAJyL8V0e7kB2xRJ86SKwn9HYCNDb7JWXCRJVMaYmUm4uwLcytFNVWh6C%2BkHu0iCCVoR9y7jpIW46pZ5RaFTe3AMOBOqnl4sTtxUhGWBYw8J16xcdt4A6EXXSGP%2FJYh2VV%2BryexAk%2Fe%2Frn1FlJOJwPta%2BgUO2ZFmdsLqXN0KgB%2B6dZm8lw3%2FHVtWlutLqXcF5mQhRSKtD1CfERguI5PK0y3SDiFR6U3%2F6HSiNDVh5KZCXqitsTgwDkNXV%2BE9UemUcWA1xSZ9yiEnrylis%2FX9Xufd%2FRreanCot93IaUwqz87okYe4Glva668z6UJrUPs7VZreNgDUwVfLfEpGspKc19GsUKMMe9izUdQHWLQ0nMh7ihjVtN5MMa0%2FLA%2FjhHMLzUCaJdVOmyW186hbSHDwkf3uV9J3sOcppdVUbcc%2BA90FBoPxD4JIDbNaNdYJ0bhwF0z972Bj3fKuGYdSyRMNyFhL0GOqUBbJkfUXC5qs4%2BVOSzW2OS%2BBQsJYSE4KysSHSjcD5d6bcSUVnISX9u0exfbztYg3TqsAI9zLK9LCvXd0qWI41vb1S2CWhwYH8ARzkwr5F00RXTfrWS51w2QqefDQs9NPAMxTvA4IxGhb0fZ2Ykwikt%2B5d3K4%2Fe05LALfAbphUD83FOrzD0sOghW9fkNJWFxT6znyMyqio3M4OCdwh9BV9d6oHI7RoG&X-Amz-Signature=26a97f5ce9b18d4c060fa1a615409e3de156c731dcdb8cc51ef7094cb2ecc8a7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5IYTJIM%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIEBD9YgklhZPAcUAxUIV%2FHgKEZ5eHJD2fuzc0RjxzYXUAiEAue8s7z8Z%2B36RrQg3DWQufbOiY2RmgmENHhHMbcDFOG8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJfeuGCt3wtLKsVfmircA3%2FpfYDpRd4d9AuLadIgUEPdzjOL2wGmXHLKi3oBvgZ4holH90wcKbRdkClJjlCE6r7DAdYJi5dqvrZsjSVzonXgNqSh5dJNNQexj43%2Blgq%2BG21dqsXN%2FWKE9HLThV9WlO51ZaPpK4yuxrxiK1zIbGrNFdDmR2lBqD4A3NOe3zgAJyL8V0e7kB2xRJ86SKwn9HYCNDb7JWXCRJVMaYmUm4uwLcytFNVWh6C%2BkHu0iCCVoR9y7jpIW46pZ5RaFTe3AMOBOqnl4sTtxUhGWBYw8J16xcdt4A6EXXSGP%2FJYh2VV%2BryexAk%2Fe%2Frn1FlJOJwPta%2BgUO2ZFmdsLqXN0KgB%2B6dZm8lw3%2FHVtWlutLqXcF5mQhRSKtD1CfERguI5PK0y3SDiFR6U3%2F6HSiNDVh5KZCXqitsTgwDkNXV%2BE9UemUcWA1xSZ9yiEnrylis%2FX9Xufd%2FRreanCot93IaUwqz87okYe4Glva668z6UJrUPs7VZreNgDUwVfLfEpGspKc19GsUKMMe9izUdQHWLQ0nMh7ihjVtN5MMa0%2FLA%2FjhHMLzUCaJdVOmyW186hbSHDwkf3uV9J3sOcppdVUbcc%2BA90FBoPxD4JIDbNaNdYJ0bhwF0z972Bj3fKuGYdSyRMNyFhL0GOqUBbJkfUXC5qs4%2BVOSzW2OS%2BBQsJYSE4KysSHSjcD5d6bcSUVnISX9u0exfbztYg3TqsAI9zLK9LCvXd0qWI41vb1S2CWhwYH8ARzkwr5F00RXTfrWS51w2QqefDQs9NPAMxTvA4IxGhb0fZ2Ykwikt%2B5d3K4%2Fe05LALfAbphUD83FOrzD0sOghW9fkNJWFxT6znyMyqio3M4OCdwh9BV9d6oHI7RoG&X-Amz-Signature=196543054777257d162c089c452405d6894f71eb02d8335e1bcd83f6e7a2150c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
