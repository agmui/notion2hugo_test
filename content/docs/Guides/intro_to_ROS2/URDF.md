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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XADR7DTC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9qLVE8%2BC%2FhOCgG0XSNkEU1sX0Nz78agy9cz389kV7LQIgOCLsA66yVYLF7Imv99ft8PKfKBsjgtAh5G6AqMHx8VIq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDIoNQ5QQa6xnKvD%2BLircA5ax6X1d%2FW6jIMAhBzAVEP9lvHykf2ZhPt1cSVm%2FR0kpI5Xontn28Wy1TseIfls27WiU08CxM6hio%2FdaLEOVcu2K4EwG27MLHgK%2Fsl6Q0IlNPnBbmb5Ccst1KuBUvE7bAEjsOFPHFj5VQNEAVY85%2BQHkyn5bzjyocgWJK%2FVFYmySRBSuo1EercnQnY%2FeWOcpMW58%2FT6esZqXDY8UYJPhDV6%2FIsTfsGOO%2Br%2Fq7Ry0idVaZ9JVV06eYMdRo1BsWh9s0wqIuuuWt%2FSaMO5D6ms6vVkXeJ9nB%2F9RNg1Il02Jzf1JIxpOtXWjkR3Hqrpgba2Z168ZjIYOxTyBYF2SFYGCauQIR1Bp50z600Vzz13jqss6GEmI7borXlSdBwMtDRC1oDVS1oLkEY0990QJatGei3TTGgFH2xQK0r4yVUoHgqJVvAWq8Vj8VPoXrtMgoKgfai3DKm4iNn147UE5dUt4Q0Y96WHzHh5DX9k5FjcHA96VJjh1EEzJGjlSwDXgXHLDJDTFTIcKtejeUuO5c6SN1qABFqv1RlLXS%2FwrTC6vWWJ50jAPyuiaQ14pCyirVVXmuEqrPFAtm24oV2QwqTdITryIB7BsZmfzh%2FeZholoanaSRT3eLd2jS9J7hTYOML3a78QGOqUBjRmAAPnLNakst1%2FoHg9eMNtr85aH%2BtCCyRdozaTwdFqLnFzzd%2Bogx2p413a0WGIPGsMwFqtac7BWp0DGfflh7UmBqIZGn9RXXGsHRBMyRPTKbNphzP%2B7PDLmxIq3Pt4pcASElVftcPhMwb6tK0oI9LUOBNHWlHc7UG4hUamTGcQz57pIljtWSfRm9I51KsxZgWTcZMPE2qGFJuT4SM7c63I7bLQ8&X-Amz-Signature=ecaf3e53800e1c207807b7c062c3183990628e1a1eb740733fb76c6543463041&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XADR7DTC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9qLVE8%2BC%2FhOCgG0XSNkEU1sX0Nz78agy9cz389kV7LQIgOCLsA66yVYLF7Imv99ft8PKfKBsjgtAh5G6AqMHx8VIq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDIoNQ5QQa6xnKvD%2BLircA5ax6X1d%2FW6jIMAhBzAVEP9lvHykf2ZhPt1cSVm%2FR0kpI5Xontn28Wy1TseIfls27WiU08CxM6hio%2FdaLEOVcu2K4EwG27MLHgK%2Fsl6Q0IlNPnBbmb5Ccst1KuBUvE7bAEjsOFPHFj5VQNEAVY85%2BQHkyn5bzjyocgWJK%2FVFYmySRBSuo1EercnQnY%2FeWOcpMW58%2FT6esZqXDY8UYJPhDV6%2FIsTfsGOO%2Br%2Fq7Ry0idVaZ9JVV06eYMdRo1BsWh9s0wqIuuuWt%2FSaMO5D6ms6vVkXeJ9nB%2F9RNg1Il02Jzf1JIxpOtXWjkR3Hqrpgba2Z168ZjIYOxTyBYF2SFYGCauQIR1Bp50z600Vzz13jqss6GEmI7borXlSdBwMtDRC1oDVS1oLkEY0990QJatGei3TTGgFH2xQK0r4yVUoHgqJVvAWq8Vj8VPoXrtMgoKgfai3DKm4iNn147UE5dUt4Q0Y96WHzHh5DX9k5FjcHA96VJjh1EEzJGjlSwDXgXHLDJDTFTIcKtejeUuO5c6SN1qABFqv1RlLXS%2FwrTC6vWWJ50jAPyuiaQ14pCyirVVXmuEqrPFAtm24oV2QwqTdITryIB7BsZmfzh%2FeZholoanaSRT3eLd2jS9J7hTYOML3a78QGOqUBjRmAAPnLNakst1%2FoHg9eMNtr85aH%2BtCCyRdozaTwdFqLnFzzd%2Bogx2p413a0WGIPGsMwFqtac7BWp0DGfflh7UmBqIZGn9RXXGsHRBMyRPTKbNphzP%2B7PDLmxIq3Pt4pcASElVftcPhMwb6tK0oI9LUOBNHWlHc7UG4hUamTGcQz57pIljtWSfRm9I51KsxZgWTcZMPE2qGFJuT4SM7c63I7bLQ8&X-Amz-Signature=bf1524a2ab2b562225b4bd7d25bc2d4477b27183544240ccadfa46b6ce73d734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
