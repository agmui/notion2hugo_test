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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAJ6SYBN%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKb6bRx8cK5mkpoWB4jJj7sq3lbRk7XS3KrP8rwsSQyAiBI4Q3fr%2B2XzDHUe90h%2BCyuWsz76Bm%2FzytKekdK35gR2yqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEsIlJWAs4NbXUV1cKtwDMq9qMPnmByWiV%2FgiDzJs7EVq6rXPoNHnnA7RYtj%2F8L%2BBIqMdxmMG4q%2FG3KoMZyVDTRwLqAE91qWmPrZtczevS1CV7fCgyOUUCFSWrYtrvVBYfXkdo7BABL2%2FDxP7uMPFnFYcnFXS2TK6agR92DaTzXv%2B5bsHdfAHO73XnX4GlfAZbsfXqK1CXwVn8sgI1V0xU%2FEvyvH45ZTbC1Dav%2BYo6%2BwqXiCmArJ6Oiv8ZqBtXABTSBCo8tRlrn%2F8LHqTK1I0%2BqbnvUTCD8i9Gy5FFpkhIt9pB%2FBKtc7gXV58dP77NEYsaRIIFy%2FJf8biPfequtoe%2B93H%2Bd3lycdA6NIK7e%2BTnbEHeDyFl%2B8tIajX%2FhODxrbfHpiNNiRIltJeA0JjdCyblol7HhvhyiW11BNN%2BFMTR5Kj2qKyBK7rcHzdzDpHirBTaC1d0l4maWZE7X8YPdKPFSeT10RNKhsEcRH7xfac53EEpULw7drJMb9sUWGk2p6G%2BEXOvBlTbuFhLZIVSduF2YHRnjEeucwfQnn4Q89yqbKbX2SkRp%2F%2FkZD9WfvcbeHpMzDuTbfzQ7n25UYqPXDik%2FKIeawqkXoMCt%2BBpiqjWe7M0AAzQD0%2F5xbPsfXuFsNNmDt9RfMZpXnFvAQw8ITrwQY6pgFCYxYElB8eH4cVHYWtosyI1UGBwzgazeSPnjk9qQdHEiGsb74Yjb9E2t7XH4hClG%2FSDUdUFoC4CB3u7Li3r92axGde33IGgDga67H4RQ0cpVTbCd%2BJ86XJaEfv0sjdP4%2FFpz%2BYFfRRWnf27YVmPBW5NMzaeJAGprxjSlqwRj0dSph%2BpU614yAwJZB6ZLGdMzODvbnSL7RbAxNkFF7XUNSRRYdPOB9Y&X-Amz-Signature=b5aae3555f6fa9c179acaf139af50bc2cb0b4aa944b5faa4d3960ddf64b1f16c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAJ6SYBN%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKb6bRx8cK5mkpoWB4jJj7sq3lbRk7XS3KrP8rwsSQyAiBI4Q3fr%2B2XzDHUe90h%2BCyuWsz76Bm%2FzytKekdK35gR2yqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEsIlJWAs4NbXUV1cKtwDMq9qMPnmByWiV%2FgiDzJs7EVq6rXPoNHnnA7RYtj%2F8L%2BBIqMdxmMG4q%2FG3KoMZyVDTRwLqAE91qWmPrZtczevS1CV7fCgyOUUCFSWrYtrvVBYfXkdo7BABL2%2FDxP7uMPFnFYcnFXS2TK6agR92DaTzXv%2B5bsHdfAHO73XnX4GlfAZbsfXqK1CXwVn8sgI1V0xU%2FEvyvH45ZTbC1Dav%2BYo6%2BwqXiCmArJ6Oiv8ZqBtXABTSBCo8tRlrn%2F8LHqTK1I0%2BqbnvUTCD8i9Gy5FFpkhIt9pB%2FBKtc7gXV58dP77NEYsaRIIFy%2FJf8biPfequtoe%2B93H%2Bd3lycdA6NIK7e%2BTnbEHeDyFl%2B8tIajX%2FhODxrbfHpiNNiRIltJeA0JjdCyblol7HhvhyiW11BNN%2BFMTR5Kj2qKyBK7rcHzdzDpHirBTaC1d0l4maWZE7X8YPdKPFSeT10RNKhsEcRH7xfac53EEpULw7drJMb9sUWGk2p6G%2BEXOvBlTbuFhLZIVSduF2YHRnjEeucwfQnn4Q89yqbKbX2SkRp%2F%2FkZD9WfvcbeHpMzDuTbfzQ7n25UYqPXDik%2FKIeawqkXoMCt%2BBpiqjWe7M0AAzQD0%2F5xbPsfXuFsNNmDt9RfMZpXnFvAQw8ITrwQY6pgFCYxYElB8eH4cVHYWtosyI1UGBwzgazeSPnjk9qQdHEiGsb74Yjb9E2t7XH4hClG%2FSDUdUFoC4CB3u7Li3r92axGde33IGgDga67H4RQ0cpVTbCd%2BJ86XJaEfv0sjdP4%2FFpz%2BYFfRRWnf27YVmPBW5NMzaeJAGprxjSlqwRj0dSph%2BpU614yAwJZB6ZLGdMzODvbnSL7RbAxNkFF7XUNSRRYdPOB9Y&X-Amz-Signature=e8d29f57cb5d6a19bae6023f26cd710f3b82952b17adc7296ebb41262968874d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
