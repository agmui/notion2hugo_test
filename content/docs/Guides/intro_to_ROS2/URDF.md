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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WLKPGEM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCICiYgUgbR4dtiAYdCK6jiDPNWx%2FNAGlFiutipTGbNAr%2BAiEAhlw9gk%2FXPMoaKiP8IM0nt2q2fRWOazQ3%2BNUp6a1tzMkq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBf1yJmpNNICtBTuyircA1QsObvU6oI2E6yivMS5GjhaI%2BtieILjvr67ElF8Pu19JruK9VPm6%2B4dVeZJxdYUs933hQMOaKmaKjAmHWJuQPyfiLpfpqRnPeNn0aIo%2FwSvwoHVWeRipx5E3mrho7whYEgUAGztoJ%2B6uwy0wEjqQQ8i938L9oV9kAOzzkGGyUPD1%2FzG%2BZjBLV7Qr6PvG%2BqpjDTstURWnKzXvq%2B585C5xWzeFGtyXLyPkF%2BNsb5K1toqyCBFNVYjmr7tVhEs2vPwqCx%2F5LEUpZlUkRBinygzo7D%2BlKmUrs3%2BTLk0vhrEu2dHFJDqfQ6IGrOtKkKU1GMjg5v3Rz2Wp0ntmdxqoGF%2Fru2RLUd8Y%2FqmSdZQK8wYEBMjTVC2NGRyc%2BAzK4XJ5TXmj99e8ALH11CLcduZf8luMyc2FD56%2FgP%2BDJJ0GVup1Hl1VwnsMQAoqtMQqcCTfwuubz%2FXL4e1SX4tus0I9FXuT9IlFYWfGFezaCNRqbLPSoMm6QzYAdcZKzPZZxcyWCYPtq0wEaslKWsy4MXmoqIFmvhbOPov47z%2Fz66Lk6JT5AthCFK7zkp9JJH%2Byxz28%2B3SEG30dLgBe5Y3aM5P3Z3RcZZMFw3e616sStq%2BFgkl4hI55vfKCwwyTXrQ9zdwMIbQ%2F70GOqUB%2FDXttLEYz21dSVs527eynhcQ6JnIv%2Fmu8IwWKusU274zl0qzKyRuJ32w%2FN7sKuvipWCuzQfjCfdw4i25wRgX7lrl4UanGefZIVFZrNwZ%2Fug0i7iKnkp59nWi9PtiIR3BGmDCa5BIX7vdD%2F8cVeWoG6ZydyZvn94jGW6NnpsT1XqU09Hiei5HIPzya%2Bk26RjAmXH3bC172SRBGWaOeRre31%2FRA5NA&X-Amz-Signature=561698a1c9f08ceca8810a1319d224340e6c8a736cbf575c02d6b9996f934f2f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WLKPGEM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCICiYgUgbR4dtiAYdCK6jiDPNWx%2FNAGlFiutipTGbNAr%2BAiEAhlw9gk%2FXPMoaKiP8IM0nt2q2fRWOazQ3%2BNUp6a1tzMkq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBf1yJmpNNICtBTuyircA1QsObvU6oI2E6yivMS5GjhaI%2BtieILjvr67ElF8Pu19JruK9VPm6%2B4dVeZJxdYUs933hQMOaKmaKjAmHWJuQPyfiLpfpqRnPeNn0aIo%2FwSvwoHVWeRipx5E3mrho7whYEgUAGztoJ%2B6uwy0wEjqQQ8i938L9oV9kAOzzkGGyUPD1%2FzG%2BZjBLV7Qr6PvG%2BqpjDTstURWnKzXvq%2B585C5xWzeFGtyXLyPkF%2BNsb5K1toqyCBFNVYjmr7tVhEs2vPwqCx%2F5LEUpZlUkRBinygzo7D%2BlKmUrs3%2BTLk0vhrEu2dHFJDqfQ6IGrOtKkKU1GMjg5v3Rz2Wp0ntmdxqoGF%2Fru2RLUd8Y%2FqmSdZQK8wYEBMjTVC2NGRyc%2BAzK4XJ5TXmj99e8ALH11CLcduZf8luMyc2FD56%2FgP%2BDJJ0GVup1Hl1VwnsMQAoqtMQqcCTfwuubz%2FXL4e1SX4tus0I9FXuT9IlFYWfGFezaCNRqbLPSoMm6QzYAdcZKzPZZxcyWCYPtq0wEaslKWsy4MXmoqIFmvhbOPov47z%2Fz66Lk6JT5AthCFK7zkp9JJH%2Byxz28%2B3SEG30dLgBe5Y3aM5P3Z3RcZZMFw3e616sStq%2BFgkl4hI55vfKCwwyTXrQ9zdwMIbQ%2F70GOqUB%2FDXttLEYz21dSVs527eynhcQ6JnIv%2Fmu8IwWKusU274zl0qzKyRuJ32w%2FN7sKuvipWCuzQfjCfdw4i25wRgX7lrl4UanGefZIVFZrNwZ%2Fug0i7iKnkp59nWi9PtiIR3BGmDCa5BIX7vdD%2F8cVeWoG6ZydyZvn94jGW6NnpsT1XqU09Hiei5HIPzya%2Bk26RjAmXH3bC172SRBGWaOeRre31%2FRA5NA&X-Amz-Signature=8bfe6cb5e71ca38102d13b666f7d441011af52b8772dd39605c410590b132f70&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
