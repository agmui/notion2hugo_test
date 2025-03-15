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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633A4UNFJ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5BUi3kFNCL0oeu4C3AXP5tF4gWaDj8aVdO1O7FegKJAiEA8WrfIYeTccC%2FqUaFY07G3Jc5tLWhiIpbvuc5Sfs2ovUq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDCIXVsDhCT6eYs5AbyrcA7ogP0PNnS7gYJ4d8%2Fw6RUNrzJtyo5dAbczzMalzWT91BKbtoTKKCL60%2BK0FdrHiZYJ1d8vARPj94dmsUqP6GFFXT%2FbLV1kTYb6bJrtMmBuoB5yebLHymgZ9B8zpvy%2F3RfcpUkIaZmgOH4FyDw4pWmqcKdN%2Fe7TqmRsfTCPaIlWFJ1eI5Hp1QsIrwEsCLw6oFM6nYu1nOiTvgsDEh0Y6dQG7EDuSEI6Va2Z6P3Y8JD03UW07hw25TUQr7rzGFWPVP2JyuWTB7d5CmRfEJ7x3Ux3Uc2o1v1gJ%2B4Uf8fyLJQfvvTxkrylgqlM6uzIqi1sW14iyKBiBz9Ptujv42GUUcBn%2B9MhQ3DYBvfIm2jl296UDxD0puLFQFbZBeZHCFjmMhGqv66K4ehsB3X3WzYGdk00TA6to%2FG3RA6Hg2Eg6U7MdfazhZ2B%2BPuAZbDvRVdxkuKqkIcAesvIhTvpWloNI2edVgqBKmz5NQVO0VzDKrsqnmxA4fmZntPGvsqPHpGc6%2BLOxc94vUQmHs%2FtaoRX5PTpoPrUKXElEKXRNjCaFH2R46ZBo0LIlfLfaLLbssMfm5ReNsoPYE5J4Hmc2GaVZGoa3AcIF%2FD9LsKhVg0qLkzeH5PLrhh0eQlel6sy8MPKx1b4GOqUB3XkRb4ONUkKrer6rUB2HoSojFquvjTZ2MMIEIHNuHdas9nsf6p9nEWBNGSpXqVA2iUEg3El%2BEPVQ%2BBxHoRm7tcTf%2BJg1xkGvXN%2FQmwwh4yz7iwAOWEshEOPOnYbUt81FoEQriEBh3qIIzDNusvSdtZr%2Fr61fIIThhR26x5Cc6oxZ4gfzWA6xahpekNLnhlr58Urg%2F0R8YgO%2FTpkEhy4ngqxE5Yyd&X-Amz-Signature=4e621e84092aa5e45dea8df6f336349704fd21911fe377720472d200ae6b48a9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633A4UNFJ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5BUi3kFNCL0oeu4C3AXP5tF4gWaDj8aVdO1O7FegKJAiEA8WrfIYeTccC%2FqUaFY07G3Jc5tLWhiIpbvuc5Sfs2ovUq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDCIXVsDhCT6eYs5AbyrcA7ogP0PNnS7gYJ4d8%2Fw6RUNrzJtyo5dAbczzMalzWT91BKbtoTKKCL60%2BK0FdrHiZYJ1d8vARPj94dmsUqP6GFFXT%2FbLV1kTYb6bJrtMmBuoB5yebLHymgZ9B8zpvy%2F3RfcpUkIaZmgOH4FyDw4pWmqcKdN%2Fe7TqmRsfTCPaIlWFJ1eI5Hp1QsIrwEsCLw6oFM6nYu1nOiTvgsDEh0Y6dQG7EDuSEI6Va2Z6P3Y8JD03UW07hw25TUQr7rzGFWPVP2JyuWTB7d5CmRfEJ7x3Ux3Uc2o1v1gJ%2B4Uf8fyLJQfvvTxkrylgqlM6uzIqi1sW14iyKBiBz9Ptujv42GUUcBn%2B9MhQ3DYBvfIm2jl296UDxD0puLFQFbZBeZHCFjmMhGqv66K4ehsB3X3WzYGdk00TA6to%2FG3RA6Hg2Eg6U7MdfazhZ2B%2BPuAZbDvRVdxkuKqkIcAesvIhTvpWloNI2edVgqBKmz5NQVO0VzDKrsqnmxA4fmZntPGvsqPHpGc6%2BLOxc94vUQmHs%2FtaoRX5PTpoPrUKXElEKXRNjCaFH2R46ZBo0LIlfLfaLLbssMfm5ReNsoPYE5J4Hmc2GaVZGoa3AcIF%2FD9LsKhVg0qLkzeH5PLrhh0eQlel6sy8MPKx1b4GOqUB3XkRb4ONUkKrer6rUB2HoSojFquvjTZ2MMIEIHNuHdas9nsf6p9nEWBNGSpXqVA2iUEg3El%2BEPVQ%2BBxHoRm7tcTf%2BJg1xkGvXN%2FQmwwh4yz7iwAOWEshEOPOnYbUt81FoEQriEBh3qIIzDNusvSdtZr%2Fr61fIIThhR26x5Cc6oxZ4gfzWA6xahpekNLnhlr58Urg%2F0R8YgO%2FTpkEhy4ngqxE5Yyd&X-Amz-Signature=028cbaa2d5864d898a93ef6c93fe03bd9effcdb4e5fb88587f0a00051b4c77d4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
