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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFA26VG7%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB49WACMCRFCJO8YJ5E2rPOTTazonWi%2FWrM9fvQdOH2PAiAgq0qC5rB6aBEufQT2OEi35OuRXrR88mZgeaTXzxC5DCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS3%2FJ0aDfc1874H9IKtwDuXD0rBR96OH4rHNKr%2BN62vsExuFWQ6FLKzDD81yzif0byR7lYSN99rvh0C%2BFAJX2O0WFQ%2BiiaJ6d%2F%2FxsGqHeUzikVF7lQGDsg4wzISuJnL%2FhPITtvajKz1Cluco0qP%2FXGb%2FY6ZLNfmKgNx6aMDDFFqL%2BhDYpZDDGJ6ySCT9gEvSXTcanMt3sjBbKjNUaXwZuTlEdj8%2F495vSQnSdG1oZVOJdzCgBmaQbm3hyBbbTeRfIh3H16JifrDzOsGkXk76f63pS8MA1KE9clZmUGSWu%2BeUlMTBclc3akSLo7MtlBf2maZlGmdoP%2FerZJYQ8idMrCxcw2gi78iyl1HuRjImeqHsWx0cndKXz2OucxQLCx6UBqJAe6IBhidtwe4vr8l4xkBk4CGtsNzc5ZWJWvhfj2DlcfPLutuCh6U6TJDTzwV5mZx3RMewqhLC%2FWMG7TAf5xeM5ysBoPOCm60%2Bhr2Wb5I9Gk4Z7KXouptRVlLecs3clxYKAcbTgzNQqXawaCXNiovM1pkQl3kyCB03jFh8%2F7qEhwvx9cbzU3%2BbHs55AdG5%2FbWRqKesBBaurvkeDV4u18TGs%2FsH9PcZ2J9mqMoSTE%2FWFtnlmZvVRHWZX2cYZ4vJnw5cs%2FB7wi5jHUWMwqaLFwAY6pgETp%2B3vPr%2BhXtq4Lu1jQQtDhUeUEMhxsPpNnoLv87meifOCcm3KFXQzlLguSpE36eJSWHRWjXM%2FHuf%2BRrLFtpU%2BmsvGBd1KjUpwagGWLD7QbTb1cVJcVoGuhLTZAn5g6nW1qB9%2BQC51HOv0jDnZ7f1P%2BQskXBTReu36bpMx9fJuG3JwN49DcuCuO6bGgLUY0CVOBCEdbDub1PXzB3Uou2XiTUWIhoBF&X-Amz-Signature=07a626214504c593818ceddd907c981cf703dc18cfca836922a4464d947ce949&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFA26VG7%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB49WACMCRFCJO8YJ5E2rPOTTazonWi%2FWrM9fvQdOH2PAiAgq0qC5rB6aBEufQT2OEi35OuRXrR88mZgeaTXzxC5DCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS3%2FJ0aDfc1874H9IKtwDuXD0rBR96OH4rHNKr%2BN62vsExuFWQ6FLKzDD81yzif0byR7lYSN99rvh0C%2BFAJX2O0WFQ%2BiiaJ6d%2F%2FxsGqHeUzikVF7lQGDsg4wzISuJnL%2FhPITtvajKz1Cluco0qP%2FXGb%2FY6ZLNfmKgNx6aMDDFFqL%2BhDYpZDDGJ6ySCT9gEvSXTcanMt3sjBbKjNUaXwZuTlEdj8%2F495vSQnSdG1oZVOJdzCgBmaQbm3hyBbbTeRfIh3H16JifrDzOsGkXk76f63pS8MA1KE9clZmUGSWu%2BeUlMTBclc3akSLo7MtlBf2maZlGmdoP%2FerZJYQ8idMrCxcw2gi78iyl1HuRjImeqHsWx0cndKXz2OucxQLCx6UBqJAe6IBhidtwe4vr8l4xkBk4CGtsNzc5ZWJWvhfj2DlcfPLutuCh6U6TJDTzwV5mZx3RMewqhLC%2FWMG7TAf5xeM5ysBoPOCm60%2Bhr2Wb5I9Gk4Z7KXouptRVlLecs3clxYKAcbTgzNQqXawaCXNiovM1pkQl3kyCB03jFh8%2F7qEhwvx9cbzU3%2BbHs55AdG5%2FbWRqKesBBaurvkeDV4u18TGs%2FsH9PcZ2J9mqMoSTE%2FWFtnlmZvVRHWZX2cYZ4vJnw5cs%2FB7wi5jHUWMwqaLFwAY6pgETp%2B3vPr%2BhXtq4Lu1jQQtDhUeUEMhxsPpNnoLv87meifOCcm3KFXQzlLguSpE36eJSWHRWjXM%2FHuf%2BRrLFtpU%2BmsvGBd1KjUpwagGWLD7QbTb1cVJcVoGuhLTZAn5g6nW1qB9%2BQC51HOv0jDnZ7f1P%2BQskXBTReu36bpMx9fJuG3JwN49DcuCuO6bGgLUY0CVOBCEdbDub1PXzB3Uou2XiTUWIhoBF&X-Amz-Signature=fa56c9cd7c26f4942c1b0d4977b8d110606d82fe8012c5b5aed379b20c966492&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
