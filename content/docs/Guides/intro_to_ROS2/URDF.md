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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REGWJ4RO%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIA9gsjLcpaWiXtoLTsdM6ElynN2FSztx3YT6FsPA1ys9AiEAummDlPI24A45b6cpdKS4eCnE7E9thaJ46%2F6X3Pi7GXoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2dJglCwvjMY9FveSrcA6rqncyhaVgXeXxaNvW%2BOardYqNZ9H5OqzvYwy3wBsOqn2eJOm8AHlZ1IcdWhDuzz95texhKtwqXxs2SxKT6Pm1sPPWK7ueKzC9939%2F9Bm17AdmuK%2B1leJwIfzdL%2FGPRFWGEbStle9gCYCMZjOIsuzxaq%2Fho7jiWBU0Ng7%2FR6YqzVt2RhRkYDWbKZUHKDNHODktP3qOpHuU8VBH5dUMSZoEHgU3aZUW9orDDMInPygMSvGhiWjC6Mj56XrCRbPErt5u0S5UpoRUx%2FnLybpjCU4ldDz%2BFnhoBGT03XUnHq0swO1IKV%2FwzlEYtaFAWOrnfS4ONjaAmiOgG9CNytUJnelf08%2FrFvw8%2B6EVXkkoMxJ18tzKAyrplcU2gqtNmq%2B3mhH74qyYh1k9U%2BcxE67qmq5rf3ckVfuRvAK8326B0R17Vpvi1Iv4ddf1j1k2GhVCVphBL7px4pU8jg8ZUwk%2B2F0WSoJ2NuaABkUJXHaWSgx271uyWsxuow04334S0TuYP25g%2F3fF2I%2FpdTK%2BU8Go0ewPPe%2FgDGVxMKZRficBTHsbqyHTh6PgRnNd0hr27EcMllK1Inehnsd46%2B6j7XKOjFyT%2FiwJ59djnD0Vb4nhoJ0Me2vYcae5Pw7%2FBOz%2FkMNyDiMEGOqUBCgp5pWpRiL12fSmru%2BLmcFgXmYr8y4UxjYiSBFJaFqUSrL1NvSZQCBVp%2Bd%2BETj6%2FO1RdTJQfEi6SoqAA56SIPPF2rumsTaWVgPLeL2RWMXsfTjq3OehlbFJSaok0Beu%2BCjOk%2Bxk97D9UTyPez2W%2BJoNBf4oJyJIehQqRHaBNZb2Qj%2F9yeF4kWNgKlhtzNKhQhWYmky7xGEITFAtg6W9dXndjZK38&X-Amz-Signature=296deaab384729beaa3cc5dbcb26cc5627efdc2d1c3f554cb1d00937dd61273b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REGWJ4RO%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIA9gsjLcpaWiXtoLTsdM6ElynN2FSztx3YT6FsPA1ys9AiEAummDlPI24A45b6cpdKS4eCnE7E9thaJ46%2F6X3Pi7GXoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2dJglCwvjMY9FveSrcA6rqncyhaVgXeXxaNvW%2BOardYqNZ9H5OqzvYwy3wBsOqn2eJOm8AHlZ1IcdWhDuzz95texhKtwqXxs2SxKT6Pm1sPPWK7ueKzC9939%2F9Bm17AdmuK%2B1leJwIfzdL%2FGPRFWGEbStle9gCYCMZjOIsuzxaq%2Fho7jiWBU0Ng7%2FR6YqzVt2RhRkYDWbKZUHKDNHODktP3qOpHuU8VBH5dUMSZoEHgU3aZUW9orDDMInPygMSvGhiWjC6Mj56XrCRbPErt5u0S5UpoRUx%2FnLybpjCU4ldDz%2BFnhoBGT03XUnHq0swO1IKV%2FwzlEYtaFAWOrnfS4ONjaAmiOgG9CNytUJnelf08%2FrFvw8%2B6EVXkkoMxJ18tzKAyrplcU2gqtNmq%2B3mhH74qyYh1k9U%2BcxE67qmq5rf3ckVfuRvAK8326B0R17Vpvi1Iv4ddf1j1k2GhVCVphBL7px4pU8jg8ZUwk%2B2F0WSoJ2NuaABkUJXHaWSgx271uyWsxuow04334S0TuYP25g%2F3fF2I%2FpdTK%2BU8Go0ewPPe%2FgDGVxMKZRficBTHsbqyHTh6PgRnNd0hr27EcMllK1Inehnsd46%2B6j7XKOjFyT%2FiwJ59djnD0Vb4nhoJ0Me2vYcae5Pw7%2FBOz%2FkMNyDiMEGOqUBCgp5pWpRiL12fSmru%2BLmcFgXmYr8y4UxjYiSBFJaFqUSrL1NvSZQCBVp%2Bd%2BETj6%2FO1RdTJQfEi6SoqAA56SIPPF2rumsTaWVgPLeL2RWMXsfTjq3OehlbFJSaok0Beu%2BCjOk%2Bxk97D9UTyPez2W%2BJoNBf4oJyJIehQqRHaBNZb2Qj%2F9yeF4kWNgKlhtzNKhQhWYmky7xGEITFAtg6W9dXndjZK38&X-Amz-Signature=6777d4effcda976e1407be7f6b6c28820fad754059370843ef147ed3e4f6d7c1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
