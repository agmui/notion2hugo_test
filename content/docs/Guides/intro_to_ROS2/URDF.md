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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBDEZZJI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQq4dLLB7tdcauxu0xi%2FTpJ7gOOXACMhlcl0LPOez3JAIgVXUV2xT4DzY4GHlVcC3EIPkeU3Z0jeYMJamLAzVagk8qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZD%2BGCpjcE7DRJgBSrcA1bMeDQdlh8HuVo2JJlOIKzecmN7ylCmPof4iOWLas4eeBwF8aVDU5K0uusvUBNt2C0Q88jq%2Fyg93JXFtivj2xeIgyISz%2BrTFGpssTEPeQET4V%2BgIasCBrwQcgu988iNulvmdA78WrDq9AAJz0WhxeINyT8ttJkt5zeMJh4nuQbxIkJJU9LTKhg9xMjcjgqzp8Cr9THUi9z49MfkXDhGUfXcm2RcHSZ%2FUYuhhju5oJooRFC5Dy8Zvwh%2FsljLUjhzLgqJNaH6f0jNJoYrAV50aqg%2B61HQaFb3kRHzgIdXLR9phuEV8JBtG7g6OIxU37dsHYFISwAuKjeSA8x5DvcXXEPxRD3s7taR0VTMMTvCmBYZ%2Flz%2FOthW9RjMTWObcztgo1RY%2F1wUB5IBU%2B82d8T7b4kaSHYqR%2BvU6iSQaiTx904sYBVjYWEyyI1W5Mz3n3nrQvtJ9ooak1HO%2F8UKTHbYRprYI5lAvcTGJz%2FmQZKU849zzd4dbY34lNbamNtQC2wDSp5lpc1W%2BBAk3aQcdWQDWE2swPH14V7HGQGx7hLGv3%2F6Do0aPDMQZHNHcGxNxanlsddzSX6cVc6k%2FJ87mM2nnvn0K5NOUhtROiosTAa2XQC7NzuTgh6qxPpWBro9MOnMr8QGOqUBkjiXFymjQHHUKhd9OHISA2VHXZbfrJo0aQa%2FxugCT1Bvd8l8oLaMgfqLTwKPFcGZ0o1J2o50R%2B8xOzrhrqLxmqCXIhrP2c1i%2FaB11frGLlPUQB8jhK6K9sBK2oy5JKlsahqeTxkvnjEMcpZ62W80myBs02afWuYsIHD6RpnYtefjPP9Im7FAom1X7on9O6CFMPsJ6WVQ0JWgxb37QW0DYri9JZJ2&X-Amz-Signature=4b2c48d9ecda7e7211f78e2fc4f4584868e8f8df7c4874f286f63b4d07a9b382&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBDEZZJI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQq4dLLB7tdcauxu0xi%2FTpJ7gOOXACMhlcl0LPOez3JAIgVXUV2xT4DzY4GHlVcC3EIPkeU3Z0jeYMJamLAzVagk8qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZD%2BGCpjcE7DRJgBSrcA1bMeDQdlh8HuVo2JJlOIKzecmN7ylCmPof4iOWLas4eeBwF8aVDU5K0uusvUBNt2C0Q88jq%2Fyg93JXFtivj2xeIgyISz%2BrTFGpssTEPeQET4V%2BgIasCBrwQcgu988iNulvmdA78WrDq9AAJz0WhxeINyT8ttJkt5zeMJh4nuQbxIkJJU9LTKhg9xMjcjgqzp8Cr9THUi9z49MfkXDhGUfXcm2RcHSZ%2FUYuhhju5oJooRFC5Dy8Zvwh%2FsljLUjhzLgqJNaH6f0jNJoYrAV50aqg%2B61HQaFb3kRHzgIdXLR9phuEV8JBtG7g6OIxU37dsHYFISwAuKjeSA8x5DvcXXEPxRD3s7taR0VTMMTvCmBYZ%2Flz%2FOthW9RjMTWObcztgo1RY%2F1wUB5IBU%2B82d8T7b4kaSHYqR%2BvU6iSQaiTx904sYBVjYWEyyI1W5Mz3n3nrQvtJ9ooak1HO%2F8UKTHbYRprYI5lAvcTGJz%2FmQZKU849zzd4dbY34lNbamNtQC2wDSp5lpc1W%2BBAk3aQcdWQDWE2swPH14V7HGQGx7hLGv3%2F6Do0aPDMQZHNHcGxNxanlsddzSX6cVc6k%2FJ87mM2nnvn0K5NOUhtROiosTAa2XQC7NzuTgh6qxPpWBro9MOnMr8QGOqUBkjiXFymjQHHUKhd9OHISA2VHXZbfrJo0aQa%2FxugCT1Bvd8l8oLaMgfqLTwKPFcGZ0o1J2o50R%2B8xOzrhrqLxmqCXIhrP2c1i%2FaB11frGLlPUQB8jhK6K9sBK2oy5JKlsahqeTxkvnjEMcpZ62W80myBs02afWuYsIHD6RpnYtefjPP9Im7FAom1X7on9O6CFMPsJ6WVQ0JWgxb37QW0DYri9JZJ2&X-Amz-Signature=12aba16b8844550e585ed2ae0732457511a7dcc7f45b5979912d53a6805e6f1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
