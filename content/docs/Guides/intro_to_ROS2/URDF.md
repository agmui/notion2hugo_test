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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ER257IV%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ7vxoIlOZIt71zhdkRm6qgb0Egmm1Pqx3%2BjJYUpAMrgIgSiQO2vbeumJfEjcUW%2BSwWPpb306O9dwYYTbk%2Fzh9GOoqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKjlpTS4rYF1Qd0tCrcAy1ixnyqMw2xxlTrM65ApYpNf6CPHhOS%2B7uKbksoqqrbTcWAu2r97sif2QMkJjlEskheCdN3GpoKl1R1Iuo6W44j4xbNVfsH7aK6WpHp0q8EZY3aR6hUDE%2FCvkXy8DtrxwLLY%2B2bsdLTBQabmj1MhfNquZ1FPEqndEzIUTVxYTkpfYiinVaxuapxzgOFzpOBwXVXrSZlUpK7Rd0bKWjeJ%2F7kElYT8IbNZsmS4ZpBdMlSnsZcmpEsP40zxDAMs8S%2BrECYRnv2sgNLvoW%2BXYWxM%2FmV1oe2Hm%2FrnFaT3Y7Uf6eftUJbSFSlnpyV8mc4RJ0aGHF1F9fAyZEiN81RzTvwrHL9RLcqJ8EbK9JPYDf6P5Xt%2Bk%2FqaZquC5yrRu3VM3MMXDhtsO%2FAiX%2Fl6tfTJWdO4opiITIJT7jEATtLmML1Ok9U8QTsv8AXbDEhc6nJF2zBPoK8Fy1nen1jiK4b%2BgrpKEAGI11T94S6PrDAdqEE40cbNtIdW0XhtmfYnbSCEwCcDn2a%2BbFJcseLsX2l%2BC3CeqqIEDdWjhUpXFHNmP4u82vVfxUbgbTpWbpzUbuP2xpvCmej4cPf5Y0cf594qKvDaWz0NSayCywZNBbdYqQzCX21Jk%2BgvRl5cNpdBkleMLTJrr0GOqUBRvBzvDsgKZvR1ifmG2QzmOtEO1fibpbMpUXQFq9RQfcrQuA%2BIUfo7G9XyLQg7Kxts%2Fo4qrn2UpGBkagmaGG69v5EN2OobSudDwxCjSI9O%2BesolId2WM6ggHx6PvQ1NoPjQ1bjMZw6DwrFGkQtZn5c%2B2nd2wXpVxDrhP%2FojCouRHQfSlVTjRYTVGwhuPNvwBuPCVL%2FisgE5LGSESm2xa4iyAix5%2Fl&X-Amz-Signature=25450cf9c24f502633656c7781c54bd1983bef174ef8da172e7e2dd039d17549&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ER257IV%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ7vxoIlOZIt71zhdkRm6qgb0Egmm1Pqx3%2BjJYUpAMrgIgSiQO2vbeumJfEjcUW%2BSwWPpb306O9dwYYTbk%2Fzh9GOoqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKjlpTS4rYF1Qd0tCrcAy1ixnyqMw2xxlTrM65ApYpNf6CPHhOS%2B7uKbksoqqrbTcWAu2r97sif2QMkJjlEskheCdN3GpoKl1R1Iuo6W44j4xbNVfsH7aK6WpHp0q8EZY3aR6hUDE%2FCvkXy8DtrxwLLY%2B2bsdLTBQabmj1MhfNquZ1FPEqndEzIUTVxYTkpfYiinVaxuapxzgOFzpOBwXVXrSZlUpK7Rd0bKWjeJ%2F7kElYT8IbNZsmS4ZpBdMlSnsZcmpEsP40zxDAMs8S%2BrECYRnv2sgNLvoW%2BXYWxM%2FmV1oe2Hm%2FrnFaT3Y7Uf6eftUJbSFSlnpyV8mc4RJ0aGHF1F9fAyZEiN81RzTvwrHL9RLcqJ8EbK9JPYDf6P5Xt%2Bk%2FqaZquC5yrRu3VM3MMXDhtsO%2FAiX%2Fl6tfTJWdO4opiITIJT7jEATtLmML1Ok9U8QTsv8AXbDEhc6nJF2zBPoK8Fy1nen1jiK4b%2BgrpKEAGI11T94S6PrDAdqEE40cbNtIdW0XhtmfYnbSCEwCcDn2a%2BbFJcseLsX2l%2BC3CeqqIEDdWjhUpXFHNmP4u82vVfxUbgbTpWbpzUbuP2xpvCmej4cPf5Y0cf594qKvDaWz0NSayCywZNBbdYqQzCX21Jk%2BgvRl5cNpdBkleMLTJrr0GOqUBRvBzvDsgKZvR1ifmG2QzmOtEO1fibpbMpUXQFq9RQfcrQuA%2BIUfo7G9XyLQg7Kxts%2Fo4qrn2UpGBkagmaGG69v5EN2OobSudDwxCjSI9O%2BesolId2WM6ggHx6PvQ1NoPjQ1bjMZw6DwrFGkQtZn5c%2B2nd2wXpVxDrhP%2FojCouRHQfSlVTjRYTVGwhuPNvwBuPCVL%2FisgE5LGSESm2xa4iyAix5%2Fl&X-Amz-Signature=306fb839de090f331a5b446675ceaa6d890d979f129f51be0fd7c27e793ceeeb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
