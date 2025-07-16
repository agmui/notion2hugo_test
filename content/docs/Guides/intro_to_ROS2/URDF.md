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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJSTF4EI%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCICxRyjKkneyp3Pb8AQUzz0AIijk4vIOxAfhjv0NuN08UAiEA937jGT1MA2C%2F79KU7SWPj90LS5zAuAYVNXX175zgtNsq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIXEl620PAeafxr50SrcA5lO3Nm%2BI2wC8ePydOcDmXd%2FjvqcYmjpswxzbF0B87OJzTrNIbH1LoxMir6mQkOy8odhLAiADmW0c13UsRel8M92VajRnIuZjApWW%2BfYOBfZzwk5m%2FjhC6mUziBXl3l2Cb3yEDdSXk6CAI%2Fw8htaM5NTDb9mCmEP%2B4zf1zo4%2FTRGw5bQE0aRTpzItuk5ZM%2BE2%2F4BOKCbaXkjkr9apNanBFICCk1WiM9Bv6GalT48GpUXrzxyA5z%2BG4jNAQundQhj3H1oxzC2qeIqzNuXRhYHvSA8b5aM3Ods3sucpmDmvOOmj1OkcjGKOzvqimN8%2F%2BD5cfucPgCvJMHPpy%2BYimjLecB4C%2FMwCqqoCSCd0Nu685xEHQVZkdY%2F3bLLttmY17YM%2FpSA4ZGMiCixtkriamn6zpLWTVkw4vBFy9v%2BSffmqZrI1HPlPT1KmnX%2BQ8qLScoVOeSGdORbOkk9iapwBTcWjd4cD3S1hwv9rmJ7r7dPMD%2F3XEU527R%2FCusvUM0iHocC3z4DoR0ndDRZApsNjljAqQDXvXmWf5dmxq7nGkvOouE3o91N6UhAuhXBA%2FiqG6FBC0%2FX6x6Hv6wumECbYKsFhtnuXCntlwOGqE3KTXbWfCG8i4Y6le3%2BaIAuFwFnMJnd3MMGOqUBsQ6QhVQOMZbn%2B2d9EVsa2yHHTMMhSvElFFQOC1F0oEoV%2FsjEcnBRhDWu4czGqUj92bB%2BecvKxYFyPg8i%2Bc7%2BnTxLdDH3uIqhwp%2BusdiuWgaPo80%2B7FIgipndjJ%2BVkuwmBN9bOZq82Y0UxT7qWojhNPKaY8SJ3iB%2FfGE5%2BnxaSEwlXGj%2Bk4V1ILUinvVs06bJk6JdPDYqAKqktOrZoOUOwgxaWgKx&X-Amz-Signature=0a108d0b11fc0f0516304785b6097f7de0e8aa3e30bb02e091616c8a5b07f572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJSTF4EI%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCICxRyjKkneyp3Pb8AQUzz0AIijk4vIOxAfhjv0NuN08UAiEA937jGT1MA2C%2F79KU7SWPj90LS5zAuAYVNXX175zgtNsq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIXEl620PAeafxr50SrcA5lO3Nm%2BI2wC8ePydOcDmXd%2FjvqcYmjpswxzbF0B87OJzTrNIbH1LoxMir6mQkOy8odhLAiADmW0c13UsRel8M92VajRnIuZjApWW%2BfYOBfZzwk5m%2FjhC6mUziBXl3l2Cb3yEDdSXk6CAI%2Fw8htaM5NTDb9mCmEP%2B4zf1zo4%2FTRGw5bQE0aRTpzItuk5ZM%2BE2%2F4BOKCbaXkjkr9apNanBFICCk1WiM9Bv6GalT48GpUXrzxyA5z%2BG4jNAQundQhj3H1oxzC2qeIqzNuXRhYHvSA8b5aM3Ods3sucpmDmvOOmj1OkcjGKOzvqimN8%2F%2BD5cfucPgCvJMHPpy%2BYimjLecB4C%2FMwCqqoCSCd0Nu685xEHQVZkdY%2F3bLLttmY17YM%2FpSA4ZGMiCixtkriamn6zpLWTVkw4vBFy9v%2BSffmqZrI1HPlPT1KmnX%2BQ8qLScoVOeSGdORbOkk9iapwBTcWjd4cD3S1hwv9rmJ7r7dPMD%2F3XEU527R%2FCusvUM0iHocC3z4DoR0ndDRZApsNjljAqQDXvXmWf5dmxq7nGkvOouE3o91N6UhAuhXBA%2FiqG6FBC0%2FX6x6Hv6wumECbYKsFhtnuXCntlwOGqE3KTXbWfCG8i4Y6le3%2BaIAuFwFnMJnd3MMGOqUBsQ6QhVQOMZbn%2B2d9EVsa2yHHTMMhSvElFFQOC1F0oEoV%2FsjEcnBRhDWu4czGqUj92bB%2BecvKxYFyPg8i%2Bc7%2BnTxLdDH3uIqhwp%2BusdiuWgaPo80%2B7FIgipndjJ%2BVkuwmBN9bOZq82Y0UxT7qWojhNPKaY8SJ3iB%2FfGE5%2BnxaSEwlXGj%2Bk4V1ILUinvVs06bJk6JdPDYqAKqktOrZoOUOwgxaWgKx&X-Amz-Signature=e6924fdef9592eef25545eba60eac1d90c1e5ec396190ff0c8e09b7d266c7a59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
