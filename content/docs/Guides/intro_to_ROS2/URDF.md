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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS2WWAJJ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDCjPtqZ8SBuCeOZe15pKoAY9FHLPWXtLSw3PpPdTGsmwIgLsNi6nzv5IHEmZkdabtoiHouUAkAQB6QUbp2bTTRU7cq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDIPjPxzjdVHy95hVhSrcA424drw6xYp2DvfJyjYtLa%2B4Q%2FEznNpHGS%2FpkNK1IQBlTcN2j%2FLXByiQRBMYf3WvI%2Barq%2B7ShTKpQlShwZJGMMyWukYBZd%2FHsfF7oy0VFdh9ryo2WVxKaGjqpW1CzxqtgIm4E9h9DIDReDzO04NPKDcMSDnttZMqz97xCnrA7TMISGFW0dJnIRwHqOQQKG7XfzYRuAwly9S1MEmrNIf9Vc0xpBPfPNgH%2FuJnEL0zrxsJQ6FwUSI7umFGZ27I2QI4qQ5rR4LEdaQfdq3AOdfsdB%2BiUoB1oZgdHmmaTgtARfeZifUgFu32fPBnHetQSO4TwMNMKp6vmQ9i0VO%2F%2BkFiDiPyq0OtMIohsop55bBSHxedBEKEjwjpad4c0ntxv5lbqP%2BAQ2oX9CNlU85ddyAMFlRjh9R%2FLu3jzAexMZCBCwkJA64%2F8CqVgGn%2Fii%2BmLAYd7O7Xars8y2hwQraTILxWgMXoPRuZcuIcQky6nVY4qzu7weMx5AG9%2BImBm8iY7o48gRs5jM5uyJk4pDui%2Bsv%2BGX4movslTCySmUQdCZrkXdvuJHAzsah5Y1%2FxRMJbGAu3IYwAyxOZdD4BM%2Bfi%2B08KWhUqu8rto6Kjbus3oJukxWz8%2B1BYgHFHZXRyKRqQMOPgncMGOqUBtlya%2FBjLd%2FMNck8NWcSrqbLV6ovTlVOaIYvG5EM07fC76OkTu4oHt4FeLGnVfd7t9rAZdbptBg1srajP7WTMmUqVuKzA5tAXqMDqZGrKSPLiMBp6obofFxraKNrKWKoKgzTsXp9LVoLYOMLlTP1BxLwaK1Kt%2FuKEljtFqbDZUHpV6aWVvgVCkKvTpaPe55dzH2z4yEfcJhIOjhTERz5eSYizdWWq&X-Amz-Signature=0c5aa7a2131b52c7f70121308917dfcbd840129b6d6238a21ab8e809613544dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS2WWAJJ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDCjPtqZ8SBuCeOZe15pKoAY9FHLPWXtLSw3PpPdTGsmwIgLsNi6nzv5IHEmZkdabtoiHouUAkAQB6QUbp2bTTRU7cq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDIPjPxzjdVHy95hVhSrcA424drw6xYp2DvfJyjYtLa%2B4Q%2FEznNpHGS%2FpkNK1IQBlTcN2j%2FLXByiQRBMYf3WvI%2Barq%2B7ShTKpQlShwZJGMMyWukYBZd%2FHsfF7oy0VFdh9ryo2WVxKaGjqpW1CzxqtgIm4E9h9DIDReDzO04NPKDcMSDnttZMqz97xCnrA7TMISGFW0dJnIRwHqOQQKG7XfzYRuAwly9S1MEmrNIf9Vc0xpBPfPNgH%2FuJnEL0zrxsJQ6FwUSI7umFGZ27I2QI4qQ5rR4LEdaQfdq3AOdfsdB%2BiUoB1oZgdHmmaTgtARfeZifUgFu32fPBnHetQSO4TwMNMKp6vmQ9i0VO%2F%2BkFiDiPyq0OtMIohsop55bBSHxedBEKEjwjpad4c0ntxv5lbqP%2BAQ2oX9CNlU85ddyAMFlRjh9R%2FLu3jzAexMZCBCwkJA64%2F8CqVgGn%2Fii%2BmLAYd7O7Xars8y2hwQraTILxWgMXoPRuZcuIcQky6nVY4qzu7weMx5AG9%2BImBm8iY7o48gRs5jM5uyJk4pDui%2Bsv%2BGX4movslTCySmUQdCZrkXdvuJHAzsah5Y1%2FxRMJbGAu3IYwAyxOZdD4BM%2Bfi%2B08KWhUqu8rto6Kjbus3oJukxWz8%2B1BYgHFHZXRyKRqQMOPgncMGOqUBtlya%2FBjLd%2FMNck8NWcSrqbLV6ovTlVOaIYvG5EM07fC76OkTu4oHt4FeLGnVfd7t9rAZdbptBg1srajP7WTMmUqVuKzA5tAXqMDqZGrKSPLiMBp6obofFxraKNrKWKoKgzTsXp9LVoLYOMLlTP1BxLwaK1Kt%2FuKEljtFqbDZUHpV6aWVvgVCkKvTpaPe55dzH2z4yEfcJhIOjhTERz5eSYizdWWq&X-Amz-Signature=c2420b9ceb7fa18133d1354f757c48119a45e03057644dd89dac7a8d04a86b14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
