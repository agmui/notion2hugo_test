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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3O2G44W%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXo5P%2Bt3oZBQ7Ep%2FcB9YEZJuyysttWJ8KEOQtwZhrPCAiEA2xSwdOkmKUnMsKSOh3lRz5jXvVIC3hM8yJ%2BPQQ6dxNwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOJPK7f7ELQ2u%2FzPCrcA%2Bdt3qRONq5kKjfAuZyJ2DXb%2BaXgAwCN7vk592khUPpdPJawXW8OfDCW%2FUHsv4oSoW%2B%2BS52oJBHth3MOfRbLhMlNgTPp7%2F4W39%2BnU46B%2BZcmwyJeky6pJiomsgPdH2DkCLTQSJwsH%2BGKlmtGGJk9%2B5NUaoyA4RFaJc6XcD2kH1pUIM13GGP9iI05b4QyvLvg%2Fz0esQ2MkEBtLTivEwIHcLlz6%2F58jLaaoawzG%2F2iOLvWSYPu7EBgabuDW7diZPzgzfUQFxP1pTgGkcRLeqWvMTzRKthBDurnFSIAmmTdlJSjeenL7ud63xU94aV8LEzzkZrNpi3bA2qonf2fxg1NV0Jc6s5ftl20DdQmnRJmnTmIsp7IaRFX61rSNJSrEDVimsSlWNycV6qEETY7pmzBUoA27yn1Z7N3pO4DzYrBLR4np%2F4T5an%2F%2F8lrwL2bkiNRIoVSrPjFUPOIQtBa2iLXVhAEaHpnz7TUXyo4UofAZkNiW4h2CapeADzPaMFicKk5RuYmCLHfgroji%2F%2FGNrBhZRKNPN%2FCeHev2XSLU7%2F7ELGKiIIDwslexEdqeWA86%2FKsiTFnlK%2Fsq%2BT7XvHiajL%2B4%2FO6DnRPT4jRaK8OYhD1O5cWgO4Eqvm%2B%2BbcQ9Z09MLu58b8GOqUBSvmPa35ogbv7jIjCIgMMHgjyREn9dhpk52pKcv%2FfiTtplErup%2Bt0gQDISnc%2BsL7eJ43hWFVR20Xw09JNM1whIB%2BQ1%2BhEJRaRYuuGlfuOb7k6SSsKhSlblVLErUziCF%2BIAWSNj03GhHDBrEM5RAOsn7NddqQqKi4Q5MUlkeEH5MmcH0R5Kd6a4jtOgMUKObEvInNEL6x1jgsMF%2F2mdJdyj0SIrM7v&X-Amz-Signature=b8878a4a28d5522d35596457476f09f766e47f094edf74bb061570a98ed1340b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3O2G44W%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXo5P%2Bt3oZBQ7Ep%2FcB9YEZJuyysttWJ8KEOQtwZhrPCAiEA2xSwdOkmKUnMsKSOh3lRz5jXvVIC3hM8yJ%2BPQQ6dxNwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOJPK7f7ELQ2u%2FzPCrcA%2Bdt3qRONq5kKjfAuZyJ2DXb%2BaXgAwCN7vk592khUPpdPJawXW8OfDCW%2FUHsv4oSoW%2B%2BS52oJBHth3MOfRbLhMlNgTPp7%2F4W39%2BnU46B%2BZcmwyJeky6pJiomsgPdH2DkCLTQSJwsH%2BGKlmtGGJk9%2B5NUaoyA4RFaJc6XcD2kH1pUIM13GGP9iI05b4QyvLvg%2Fz0esQ2MkEBtLTivEwIHcLlz6%2F58jLaaoawzG%2F2iOLvWSYPu7EBgabuDW7diZPzgzfUQFxP1pTgGkcRLeqWvMTzRKthBDurnFSIAmmTdlJSjeenL7ud63xU94aV8LEzzkZrNpi3bA2qonf2fxg1NV0Jc6s5ftl20DdQmnRJmnTmIsp7IaRFX61rSNJSrEDVimsSlWNycV6qEETY7pmzBUoA27yn1Z7N3pO4DzYrBLR4np%2F4T5an%2F%2F8lrwL2bkiNRIoVSrPjFUPOIQtBa2iLXVhAEaHpnz7TUXyo4UofAZkNiW4h2CapeADzPaMFicKk5RuYmCLHfgroji%2F%2FGNrBhZRKNPN%2FCeHev2XSLU7%2F7ELGKiIIDwslexEdqeWA86%2FKsiTFnlK%2Fsq%2BT7XvHiajL%2B4%2FO6DnRPT4jRaK8OYhD1O5cWgO4Eqvm%2B%2BbcQ9Z09MLu58b8GOqUBSvmPa35ogbv7jIjCIgMMHgjyREn9dhpk52pKcv%2FfiTtplErup%2Bt0gQDISnc%2BsL7eJ43hWFVR20Xw09JNM1whIB%2BQ1%2BhEJRaRYuuGlfuOb7k6SSsKhSlblVLErUziCF%2BIAWSNj03GhHDBrEM5RAOsn7NddqQqKi4Q5MUlkeEH5MmcH0R5Kd6a4jtOgMUKObEvInNEL6x1jgsMF%2F2mdJdyj0SIrM7v&X-Amz-Signature=41605d1e00087b5da952f59bf42c6ccb08834f6a271f760851d2b2d3af7aa666&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
