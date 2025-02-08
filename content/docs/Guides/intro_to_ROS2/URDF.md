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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2PQE2SR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBdga23R%2BWKbFrRRBruZtr31L%2Fh9FQQO6fNd06xSPH8IAiAT%2Beh89uq7%2Bm%2FcAwS4UT%2FCFKzyi2FM8vvgJV0FKp0s1CqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnV1V3w33uGjSYSQ1KtwDmhbNQCNA2XIhJYrnAC%2B0qXBk5hW0NHTTST3X4anLNLmFZOjwNjK%2Bz6wpOk13SDufWwgn5hCWI4mswRzUxcEMapiVM7rM0dRjLfm9fbMWht1nmbYhY8I5XIYIozC9foHZ88IlLGCkYbMQDXqe%2BHIKoGQwDufa%2FZxJzsvS%2BCs%2BmhudXEzDRzrcgjavTqP2pYwGTsW%2Fh0fEhLcsHYd6nqLX%2BXcI%2FGAhO6JPG5IkBzAJUkqzPDrnY522UGWCicAUKPHhlzOuBPkv5%2BrU2O4D%2Bl0eoDUHk6zM%2BfUOHhbVv4dJgRriFJ7Fm4P7HwByNGqOZQwoxvi1olCpaSLUG3IX3XSNkvFp%2F6LVnJirR8L6rddsMsb3dPYzPbaTs%2BnHKfOJu%2Bbx5bV%2FxsEJWwWr8ykSQP0IXSEpFCr55EYIf2oqxeuK%2Fa7vNClwuYIu%2FcCFBB9ftsHSOrq5m7kxbsB6RIVlgr9VQjB82I2O9BbVmrBWS7JzYDhNPR4E8wlVEkM9eZHGme1wuZtiwv8EPTobDlgL4JDtspObABIO6j4Yf%2FRr4KN9YM%2BDBEwUqY4U%2Fu%2F%2F3SsuBadk6U3Aqf8uB1TpV0pWqn7%2FWNXCNef9VP%2FIxchar3yO4w4GDZJS%2B7SAAx4%2BoIAwopifvQY6pgFC0Ip2Hb5NVZShDgAhdx%2Fc%2BcMnr3Mk4ksxTSKs4%2BLipYTkxWX1TrKhXUwJGObH%2BHEsMyzI0Bg9r8GqvFhqLjDshzo0h%2FEmlCCNXUsAIaGSdlGLA4%2FD4GZhanrgdaK40uGPZCm9QnKET%2FKi9ggblaE0vBe8aFIr7sPNHcQEMybqhQc85N5bC2r%2BAgiHq6s53gTc8mP%2FQ2W89FCgqnCnoTK9IikOq8og&X-Amz-Signature=6b2ff531c18006724fb2ea1087a1c62083b00f7dc3d0204786042c047cfb6592&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2PQE2SR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBdga23R%2BWKbFrRRBruZtr31L%2Fh9FQQO6fNd06xSPH8IAiAT%2Beh89uq7%2Bm%2FcAwS4UT%2FCFKzyi2FM8vvgJV0FKp0s1CqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnV1V3w33uGjSYSQ1KtwDmhbNQCNA2XIhJYrnAC%2B0qXBk5hW0NHTTST3X4anLNLmFZOjwNjK%2Bz6wpOk13SDufWwgn5hCWI4mswRzUxcEMapiVM7rM0dRjLfm9fbMWht1nmbYhY8I5XIYIozC9foHZ88IlLGCkYbMQDXqe%2BHIKoGQwDufa%2FZxJzsvS%2BCs%2BmhudXEzDRzrcgjavTqP2pYwGTsW%2Fh0fEhLcsHYd6nqLX%2BXcI%2FGAhO6JPG5IkBzAJUkqzPDrnY522UGWCicAUKPHhlzOuBPkv5%2BrU2O4D%2Bl0eoDUHk6zM%2BfUOHhbVv4dJgRriFJ7Fm4P7HwByNGqOZQwoxvi1olCpaSLUG3IX3XSNkvFp%2F6LVnJirR8L6rddsMsb3dPYzPbaTs%2BnHKfOJu%2Bbx5bV%2FxsEJWwWr8ykSQP0IXSEpFCr55EYIf2oqxeuK%2Fa7vNClwuYIu%2FcCFBB9ftsHSOrq5m7kxbsB6RIVlgr9VQjB82I2O9BbVmrBWS7JzYDhNPR4E8wlVEkM9eZHGme1wuZtiwv8EPTobDlgL4JDtspObABIO6j4Yf%2FRr4KN9YM%2BDBEwUqY4U%2Fu%2F%2F3SsuBadk6U3Aqf8uB1TpV0pWqn7%2FWNXCNef9VP%2FIxchar3yO4w4GDZJS%2B7SAAx4%2BoIAwopifvQY6pgFC0Ip2Hb5NVZShDgAhdx%2Fc%2BcMnr3Mk4ksxTSKs4%2BLipYTkxWX1TrKhXUwJGObH%2BHEsMyzI0Bg9r8GqvFhqLjDshzo0h%2FEmlCCNXUsAIaGSdlGLA4%2FD4GZhanrgdaK40uGPZCm9QnKET%2FKi9ggblaE0vBe8aFIr7sPNHcQEMybqhQc85N5bC2r%2BAgiHq6s53gTc8mP%2FQ2W89FCgqnCnoTK9IikOq8og&X-Amz-Signature=05d77bb1b4941fbcf13ae7c9f0748f0c39456b67e9a842cd160274e7630488c5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
