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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSSGSR5A%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDcTAsgZw0v8YxivoHFuvgN9FqjJpVGR4rFaHyujN0fvwIgOhXjin1cBruYh8n76B1Bpf9gSkaVoCe03htUdDmNf8gqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQkaltF7ztjw3X%2F0yrcAwgDYiBztwgMPWw776zxeMuj5PRRmyQbmkyl66bUnTgP%2BNKQfKLziUCld0W3QWhTKIEdVlhPCIrJG8h8NIfJ7AApTa2II5n%2F34M4pwY3YFKOASlR8e9zjzK29mtaEsV73C6BBxhbKmn2unA8hz3agTJUNt1jfArdjKaS4dL25070yVQhc35SBva%2BBXXy2IYJzbtQvQ492W9S7iygdxWXjtzrQbTO9GID7myCAnncXY%2Fwt0yvEHYtjCsvTLv9YPPqPOma1nCXb2fOqKuAhjDCucHkLa8Dd57jmR2QzeKOQznMvXWpp5fJ4Nb182%2FF7l%2FLn6hdbJds40o42YvlHSCqJ46C9aZQMiCG%2FsnEXMEw65bliOu1SAjhpiljYaAR9RXMWlXH0YmS1DLDx1ZonqNf2zC4TLJyYaKAUrfSz9otPCqGHqE5rjd3p87py6dM9v6jcep6OyNlfndlGBV%2FtqNC%2FhQXFRaljok2dxYTT3p%2Btk3swKLYXvWdU%2FnQ7ivuA6lk%2BmRnf7RluRDf6XLZey0uWayOBDvl2yS%2FE%2FsIHFKic%2Fd9OWoqdOIBFkYU%2FnQsa6QdtwwDLJ0mIb09GQZ8rf%2BiC%2Fz828c9elL6rkRtKb3E25VcO4Ka4vqpjixzyEREMMuRh74GOqUBZb8pEvdKd6mwEcbJUkaoPvwWnvkTsTZl%2F4Zmpms55eOx1PMlcrv7L%2Frr%2BRMHSrhoRisYxhf7gMbeWXigzfaR4ByNYgWgrg6zbUomdzECSMYIRpMLDPviYH7Di0NHWDrv7JunusiMEDH5xn6ub0WrSmQM9GJfMBB6OGslSGYIGb2PoXqg0mpMa9igLsGyT237ky4gbm%2FvBeFGcD6c7jtO428IeCrn&X-Amz-Signature=da5e98bc066b803374033cc49f77e53893d2611c4f8f1a100712f1c3a6f61c20&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSSGSR5A%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDcTAsgZw0v8YxivoHFuvgN9FqjJpVGR4rFaHyujN0fvwIgOhXjin1cBruYh8n76B1Bpf9gSkaVoCe03htUdDmNf8gqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQkaltF7ztjw3X%2F0yrcAwgDYiBztwgMPWw776zxeMuj5PRRmyQbmkyl66bUnTgP%2BNKQfKLziUCld0W3QWhTKIEdVlhPCIrJG8h8NIfJ7AApTa2II5n%2F34M4pwY3YFKOASlR8e9zjzK29mtaEsV73C6BBxhbKmn2unA8hz3agTJUNt1jfArdjKaS4dL25070yVQhc35SBva%2BBXXy2IYJzbtQvQ492W9S7iygdxWXjtzrQbTO9GID7myCAnncXY%2Fwt0yvEHYtjCsvTLv9YPPqPOma1nCXb2fOqKuAhjDCucHkLa8Dd57jmR2QzeKOQznMvXWpp5fJ4Nb182%2FF7l%2FLn6hdbJds40o42YvlHSCqJ46C9aZQMiCG%2FsnEXMEw65bliOu1SAjhpiljYaAR9RXMWlXH0YmS1DLDx1ZonqNf2zC4TLJyYaKAUrfSz9otPCqGHqE5rjd3p87py6dM9v6jcep6OyNlfndlGBV%2FtqNC%2FhQXFRaljok2dxYTT3p%2Btk3swKLYXvWdU%2FnQ7ivuA6lk%2BmRnf7RluRDf6XLZey0uWayOBDvl2yS%2FE%2FsIHFKic%2Fd9OWoqdOIBFkYU%2FnQsa6QdtwwDLJ0mIb09GQZ8rf%2BiC%2Fz828c9elL6rkRtKb3E25VcO4Ka4vqpjixzyEREMMuRh74GOqUBZb8pEvdKd6mwEcbJUkaoPvwWnvkTsTZl%2F4Zmpms55eOx1PMlcrv7L%2Frr%2BRMHSrhoRisYxhf7gMbeWXigzfaR4ByNYgWgrg6zbUomdzECSMYIRpMLDPviYH7Di0NHWDrv7JunusiMEDH5xn6ub0WrSmQM9GJfMBB6OGslSGYIGb2PoXqg0mpMa9igLsGyT237ky4gbm%2FvBeFGcD6c7jtO428IeCrn&X-Amz-Signature=513c33fab25cf999552074cff8cc1f5848815ccc2c180c034d27e611c7759ce6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
