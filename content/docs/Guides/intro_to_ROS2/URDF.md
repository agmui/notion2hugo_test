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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NMGLFZW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCIjqrglA46dRwcJtsTMm8IFROBwPu%2F4J97G4DiHB1N9gIhAICnlhmtJP7lr9OUdZjE3aTXV7ZbxS3T3oeSVAz27Uw4KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8NOTDHCMM4F77gHgq3AMLLXI4LsEhN4g0muSn35qP5ztuevoUnk3J8peOttsRRoNCv%2FbPAB7uVTjwKxFnCp1XsRANSwWerU4vxTMorHNlSnwrlJu1cxqJAT9lCEZ7KTR%2BC6yrrIl2HS81Zp0dDEof%2BcmkcQwQoNBhP%2FOas0nPl0H7SE%2B%2FY%2BzIzwbiw9c%2FbMALAqpoG91P%2Fq4%2Fb3Q%2FJ88n%2F5fWxni3Q2n43pZGW7jQ64%2FsN3rzd1ed9AT%2FKlAQp5EgoQU%2FxeNP18X%2FOPa%2F7K3Qc1mTJVQEkt6349L%2FWy5FN6SP8S9AtFL%2BF6vRoU8xTJmbbsnKMKb7MaWsONp%2FzQebXFoPdoZtfSJ3U8vHUlONtlvTRZOFWHN%2B1bPJwH3c4TpW066zkLzPEJNTfYhJjPwv3P6BlzdpzaKandEq%2Bv1qqenVoPksZ3k1pj0hn5ve74yBSG5sU6pL4zDW2m5JCtRXV%2FjLeP1v4891rE0xf9ZXVfCN7%2BDGkOrOcnaHs2dznF%2BYvM2WFq7Dxao41NQPbpoc4XnSDbdhKwU2oHZ%2FuCYTH5oREvOhDyT6KPeh9yFYjibqwcqTa4%2FJSjlozUd6gWbuF%2FqAd05Rv9Yf%2FQ0buYeFdLQMp2NUauJtTRno%2FNpK1dg9WFGhpmsDATGMUTDeh8bABjqkAZY9XDAs3GoIJ2x%2BJXKtzAoV1goY126G8MColAkiTgM3JDcB%2BMPkliDqN1TIwfF4CPxQdZGJU7FjGawZOOZYOSGCcp3DC7KVReIOjS5bIXWSKSJaogn%2FqNivWf7EcuUF1o%2FLVClYXu%2F%2BgM%2BT%2BKRdl0iM610RWxVPSk4Vg2PIDh9g80UQuMrpDLjIs8XfqFfjjSv6RRh7WzT7vTJyr0muzdwAywqI&X-Amz-Signature=4e5273f8ba9b87fa4335af32c6e1be2ee5c8c0720ee361b0db8aeff4f140e335&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NMGLFZW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCIjqrglA46dRwcJtsTMm8IFROBwPu%2F4J97G4DiHB1N9gIhAICnlhmtJP7lr9OUdZjE3aTXV7ZbxS3T3oeSVAz27Uw4KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8NOTDHCMM4F77gHgq3AMLLXI4LsEhN4g0muSn35qP5ztuevoUnk3J8peOttsRRoNCv%2FbPAB7uVTjwKxFnCp1XsRANSwWerU4vxTMorHNlSnwrlJu1cxqJAT9lCEZ7KTR%2BC6yrrIl2HS81Zp0dDEof%2BcmkcQwQoNBhP%2FOas0nPl0H7SE%2B%2FY%2BzIzwbiw9c%2FbMALAqpoG91P%2Fq4%2Fb3Q%2FJ88n%2F5fWxni3Q2n43pZGW7jQ64%2FsN3rzd1ed9AT%2FKlAQp5EgoQU%2FxeNP18X%2FOPa%2F7K3Qc1mTJVQEkt6349L%2FWy5FN6SP8S9AtFL%2BF6vRoU8xTJmbbsnKMKb7MaWsONp%2FzQebXFoPdoZtfSJ3U8vHUlONtlvTRZOFWHN%2B1bPJwH3c4TpW066zkLzPEJNTfYhJjPwv3P6BlzdpzaKandEq%2Bv1qqenVoPksZ3k1pj0hn5ve74yBSG5sU6pL4zDW2m5JCtRXV%2FjLeP1v4891rE0xf9ZXVfCN7%2BDGkOrOcnaHs2dznF%2BYvM2WFq7Dxao41NQPbpoc4XnSDbdhKwU2oHZ%2FuCYTH5oREvOhDyT6KPeh9yFYjibqwcqTa4%2FJSjlozUd6gWbuF%2FqAd05Rv9Yf%2FQ0buYeFdLQMp2NUauJtTRno%2FNpK1dg9WFGhpmsDATGMUTDeh8bABjqkAZY9XDAs3GoIJ2x%2BJXKtzAoV1goY126G8MColAkiTgM3JDcB%2BMPkliDqN1TIwfF4CPxQdZGJU7FjGawZOOZYOSGCcp3DC7KVReIOjS5bIXWSKSJaogn%2FqNivWf7EcuUF1o%2FLVClYXu%2F%2BgM%2BT%2BKRdl0iM610RWxVPSk4Vg2PIDh9g80UQuMrpDLjIs8XfqFfjjSv6RRh7WzT7vTJyr0muzdwAywqI&X-Amz-Signature=5b641c38c83bc19188d0dada730053d74eddc6c1877494f9ec1e0e305b0a7fa3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
