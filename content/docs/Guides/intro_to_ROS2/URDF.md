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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHUOPWQI%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCinL8vvyFPC6ZAFL5A0btZ86h9c6WW4Ng0E2DL5w956wIgbsrz8J2wK1SIJvAfeyljSeO%2FRp5LWaqqtK2CRnQ6X3oqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpid0iOD3WF3ShapSrcA12XbT4L%2FU5xDBZ%2FWdb%2BxnLwHbeVXGPI1rwb7lRQlhoCa%2BIGlJqO2X82lamCzBN2klsO3M9WfRh5zkJRL9j1symlS%2Bwv1oXI56bax6ty9ZVVeRJe5eCv6rZmOQVRRweyUzDYlPYuOLESTxCdpBgEh26HpEERh4cnlTlnZgFP6UiJMlE7qy7nTUPi2T4YdJzWPxgbWL6xQyaB8ZE5a5TEfkEiIifu5vojvBifbAA6DflwELWVy%2BD9R1p0v0S6JEoQ57RXLGSrbO4mGc85mZJFlqBUXN6SYR2dR2wbT6XCzk974ntyIvDDzUazZYT%2BAomLLa76s763a39hn%2FWjTOn8kVixQjxpEwLE7NGQcWKTvijLB3lXwNCEMOscq1lJwg5T%2BhjXvlqDsYESW2132fNkQaVK75rOLMa6XDtPiH2WlI5SI3cBYoZa1ZgYw7Ru3dSk2lH1DpC%2F%2FdOe1sC0iK3Xr8sS6nxRwvAzQ1CQQtJsJhiEJa%2FSdNatLo3veaZkoxH0Wu2shFjFgusNuyiQISzSVMWDLMzo6U9RxvF4E3qKbk0waWccAnFwcKrWUpw8g3NQp6mw81leb%2B5NKViAwtFbh3Q0mBMBC%2BfXn9BVQdp%2BCJjPUOKnoGeyXhj0dlJjMImVjL4GOqUBqun1Di9cCHGZu2V%2B7B9SCnekt4LJfSb2D030a3CtUHeLfbnfc1Lv9K2OFccZ0Hfcyax0diAqvqvC91Yu%2FM1wowKMKr2MHPN0Pi8IzqA15y9bc350iOwMC575QkYyFGntxy3PdlfBKlkzDqM1IxC2AyClbJzCDVT5iCMTlBpnE7S9qzvxzM3DfEV7oEC1Z9twnHT7mLnmuXuZp3RgBU%2FJkVk3%2FI54&X-Amz-Signature=2a95dbe6ac25943bde7dc79c84f4d4a7e8cafd882269ebae93c79489cbe809c3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHUOPWQI%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCinL8vvyFPC6ZAFL5A0btZ86h9c6WW4Ng0E2DL5w956wIgbsrz8J2wK1SIJvAfeyljSeO%2FRp5LWaqqtK2CRnQ6X3oqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpid0iOD3WF3ShapSrcA12XbT4L%2FU5xDBZ%2FWdb%2BxnLwHbeVXGPI1rwb7lRQlhoCa%2BIGlJqO2X82lamCzBN2klsO3M9WfRh5zkJRL9j1symlS%2Bwv1oXI56bax6ty9ZVVeRJe5eCv6rZmOQVRRweyUzDYlPYuOLESTxCdpBgEh26HpEERh4cnlTlnZgFP6UiJMlE7qy7nTUPi2T4YdJzWPxgbWL6xQyaB8ZE5a5TEfkEiIifu5vojvBifbAA6DflwELWVy%2BD9R1p0v0S6JEoQ57RXLGSrbO4mGc85mZJFlqBUXN6SYR2dR2wbT6XCzk974ntyIvDDzUazZYT%2BAomLLa76s763a39hn%2FWjTOn8kVixQjxpEwLE7NGQcWKTvijLB3lXwNCEMOscq1lJwg5T%2BhjXvlqDsYESW2132fNkQaVK75rOLMa6XDtPiH2WlI5SI3cBYoZa1ZgYw7Ru3dSk2lH1DpC%2F%2FdOe1sC0iK3Xr8sS6nxRwvAzQ1CQQtJsJhiEJa%2FSdNatLo3veaZkoxH0Wu2shFjFgusNuyiQISzSVMWDLMzo6U9RxvF4E3qKbk0waWccAnFwcKrWUpw8g3NQp6mw81leb%2B5NKViAwtFbh3Q0mBMBC%2BfXn9BVQdp%2BCJjPUOKnoGeyXhj0dlJjMImVjL4GOqUBqun1Di9cCHGZu2V%2B7B9SCnekt4LJfSb2D030a3CtUHeLfbnfc1Lv9K2OFccZ0Hfcyax0diAqvqvC91Yu%2FM1wowKMKr2MHPN0Pi8IzqA15y9bc350iOwMC575QkYyFGntxy3PdlfBKlkzDqM1IxC2AyClbJzCDVT5iCMTlBpnE7S9qzvxzM3DfEV7oEC1Z9twnHT7mLnmuXuZp3RgBU%2FJkVk3%2FI54&X-Amz-Signature=ea380a86323e5a485a79a0b73e3005160cfd32811e32ba1acb77fa22b6ecc2ca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
