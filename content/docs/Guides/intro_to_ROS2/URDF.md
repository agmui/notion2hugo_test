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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPDRP577%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIF68Tmm2un7Y4BdF906AlXY1ZSyLFL6vxRS4HppNRQJ%2BAiEAy2PSGrR87%2Fc5VIDAKqrtAdJ3GWP06jMkWGMFmAIBNMoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCc3vdX7unyTFpb9hSrcA8yBQd3ylRILbIEh2xsGkTUOPPWfT7beT8EHZ14qNwN3BCe5XDyQXga9HpphS15OxmkGEB1EvQvTS6ebWMtMOMYP%2F6kV6GAFSI1n7N00bPu39ZTd0Vd37KncnPI%2B%2BWSuu1QJWpH6kxIa4sRV6kBRS1headtg5NGdJRUHPjjOfXfJ2NwYkvuc5fgCkVLlXzWLBTsdtJ5zuzDTRPJZ7Cca%2FFlEVOtbzC4OU%2FOkfPdxLH0E9NwHUGR7zGpOJVXJoBIYGcdenwChsgfEhlojtkxClPOmpAhFKENpTN3DckSb6tX%2Fm7CuDJrlctMz%2BrGAGQoB%2FIjGdath4voM6Xi994uQlwh%2F8wroU8lUYMcavPiPSYmnY9sK2cvBndfUILM4M5mj%2BEfSLqSK04H6HdCwEMSrxcMDc1oVd5P1dEKmWqoLax8up4UAMiWkDwAt71VdPMajrGyOZeqpjUu2AnndSLAcjCwaUHDD3iaMbbUFlfFtgNghHpGo5XP3ENFDSfF9%2BMeebDQ7IoIXBfgpnrOA6SX3nSJbz6yBk2kKzwGeg%2Bx0rEoc4os1PocY9jFpATqxYLbaeaRDKfZsaxlZx2uzkaqP9ukrXGADs5%2Ff2CAQCACOPbgtKuPzOLxCg0zKZzyJMOi4r8MGOqUBQeZq4Dop0aVTlQwedrMQQgithzu6J9PPk%2FKbsavXIuTtpITo12wB2CrcUPSYd43W5Y4MRs3V5gOdNAxHDZCX1rgg%2FoFlCZb37I8Mlh5ij38HWMIcXNs%2BbXVVwIzjua%2B4ZqgOFbvljrbB0jXU2lFZ9VSNDwDnQ9kK2oXWAcrloEqDQJ%2B73FF%2FRxZezENRP5VMrVkLxLV79jkC9a6wCFwd4zKOB2q9&X-Amz-Signature=e6c11bd89869969b0033f2a64c9669a3e7f5aa2cf9cec745f7dec13504fe9912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPDRP577%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIF68Tmm2un7Y4BdF906AlXY1ZSyLFL6vxRS4HppNRQJ%2BAiEAy2PSGrR87%2Fc5VIDAKqrtAdJ3GWP06jMkWGMFmAIBNMoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCc3vdX7unyTFpb9hSrcA8yBQd3ylRILbIEh2xsGkTUOPPWfT7beT8EHZ14qNwN3BCe5XDyQXga9HpphS15OxmkGEB1EvQvTS6ebWMtMOMYP%2F6kV6GAFSI1n7N00bPu39ZTd0Vd37KncnPI%2B%2BWSuu1QJWpH6kxIa4sRV6kBRS1headtg5NGdJRUHPjjOfXfJ2NwYkvuc5fgCkVLlXzWLBTsdtJ5zuzDTRPJZ7Cca%2FFlEVOtbzC4OU%2FOkfPdxLH0E9NwHUGR7zGpOJVXJoBIYGcdenwChsgfEhlojtkxClPOmpAhFKENpTN3DckSb6tX%2Fm7CuDJrlctMz%2BrGAGQoB%2FIjGdath4voM6Xi994uQlwh%2F8wroU8lUYMcavPiPSYmnY9sK2cvBndfUILM4M5mj%2BEfSLqSK04H6HdCwEMSrxcMDc1oVd5P1dEKmWqoLax8up4UAMiWkDwAt71VdPMajrGyOZeqpjUu2AnndSLAcjCwaUHDD3iaMbbUFlfFtgNghHpGo5XP3ENFDSfF9%2BMeebDQ7IoIXBfgpnrOA6SX3nSJbz6yBk2kKzwGeg%2Bx0rEoc4os1PocY9jFpATqxYLbaeaRDKfZsaxlZx2uzkaqP9ukrXGADs5%2Ff2CAQCACOPbgtKuPzOLxCg0zKZzyJMOi4r8MGOqUBQeZq4Dop0aVTlQwedrMQQgithzu6J9PPk%2FKbsavXIuTtpITo12wB2CrcUPSYd43W5Y4MRs3V5gOdNAxHDZCX1rgg%2FoFlCZb37I8Mlh5ij38HWMIcXNs%2BbXVVwIzjua%2B4ZqgOFbvljrbB0jXU2lFZ9VSNDwDnQ9kK2oXWAcrloEqDQJ%2B73FF%2FRxZezENRP5VMrVkLxLV79jkC9a6wCFwd4zKOB2q9&X-Amz-Signature=2758920b00e1bc3b0aa5f27e7c4281755c1899bd950410c4556e02a711e16268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
