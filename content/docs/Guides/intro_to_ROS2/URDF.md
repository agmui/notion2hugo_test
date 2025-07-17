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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD62O2Y7%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIF%2F2mzF2Ni4hTCng29guSOThshtITgMGSwohiWT3tJAtAiEApLnGVDuquiPu3D8Yr5WbMNhzbl%2Bs7bmGuikRqEvdyrEq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDBHUMJXR9Kkk29WtpCrcA0C%2Ba3%2FdWuSqcDMzyKUaUCHI0WqDsdHVGW9rxIN5Vq85QCXVfYp75JSODQzALPdEjwSUFCY%2BJELIrFLC8Vj6kHY3I232AJ2nh4jTKlAVNtqwh6JZgk0ZeOtPsN2i0tmm7qjURA99JDvil7a3OagsFWNp97wzVh2yZ4VDb%2B1bOps0qpTkHpf9R22HDIuInnZ8ccBUnyJiRnrAkI8%2BA2eMRmFFHX9dsjOKyzqVENelDHS2eJ9RaJ7fa2usiv%2FykXdhjiB6hY1sr68cZzM6jsx7rqgsmOV%2Flv1iuAPWTFEM90%2FnPS7%2FBeq3nTYK58ZrBCnyYpKld7GXhB1%2F4TPH3%2BVtBcJ2lLRMN7eSbEuIfhFzNn%2BtWvyXV%2BUue3XUi1CnN66oHKGm%2FpNML9%2BG2w1Wd08LLaEgqjoIuTjD5VuF%2FwrPnp4zdR4eOwtr8EtAjSUzUEaac7QumdPKhWzvCI7NVu74%2F6W5wN%2BA4%2Bm5tVIQc11ajzFYdLsds9KAzogJtaHvIVXJkMJRfGuOKlLUBKEd5RuFr1hVDcmj0GlDwHd4CcDutEcG4vY3xbU6BX9MHDjRO9Azj2J0KRvXHrilc14%2Ba084ITnHxzg5To11YyeoSoa%2FRKNnApWCpD3hYyIWT%2Fu%2BMNzI4cMGOqUBr%2FnRzZ31l%2FLn0DouE6ybp%2FK882X1XLirfbkO7rosQ7etEnodLznDXGV%2B4riebM5AVfTMU9avFGWaK82W58l5rkVOZUVyuxMJHeBxl1yYeghy55hyFrUJ0Hz2iMS3T3iwGxjCndr54b4Q4E9GUvRAa4iWfDGQ6nNup%2FSxGjqWzVy0V526UxJnfZ%2F4OVvcOkSHYdoTWmyPWkxn%2F3iBL8NzDc6eJhg2&X-Amz-Signature=49a24a22b095825cb8fdbf1a27315a5e8a4bbf812cebce6391b30e8f6128e28a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD62O2Y7%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIF%2F2mzF2Ni4hTCng29guSOThshtITgMGSwohiWT3tJAtAiEApLnGVDuquiPu3D8Yr5WbMNhzbl%2Bs7bmGuikRqEvdyrEq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDBHUMJXR9Kkk29WtpCrcA0C%2Ba3%2FdWuSqcDMzyKUaUCHI0WqDsdHVGW9rxIN5Vq85QCXVfYp75JSODQzALPdEjwSUFCY%2BJELIrFLC8Vj6kHY3I232AJ2nh4jTKlAVNtqwh6JZgk0ZeOtPsN2i0tmm7qjURA99JDvil7a3OagsFWNp97wzVh2yZ4VDb%2B1bOps0qpTkHpf9R22HDIuInnZ8ccBUnyJiRnrAkI8%2BA2eMRmFFHX9dsjOKyzqVENelDHS2eJ9RaJ7fa2usiv%2FykXdhjiB6hY1sr68cZzM6jsx7rqgsmOV%2Flv1iuAPWTFEM90%2FnPS7%2FBeq3nTYK58ZrBCnyYpKld7GXhB1%2F4TPH3%2BVtBcJ2lLRMN7eSbEuIfhFzNn%2BtWvyXV%2BUue3XUi1CnN66oHKGm%2FpNML9%2BG2w1Wd08LLaEgqjoIuTjD5VuF%2FwrPnp4zdR4eOwtr8EtAjSUzUEaac7QumdPKhWzvCI7NVu74%2F6W5wN%2BA4%2Bm5tVIQc11ajzFYdLsds9KAzogJtaHvIVXJkMJRfGuOKlLUBKEd5RuFr1hVDcmj0GlDwHd4CcDutEcG4vY3xbU6BX9MHDjRO9Azj2J0KRvXHrilc14%2Ba084ITnHxzg5To11YyeoSoa%2FRKNnApWCpD3hYyIWT%2Fu%2BMNzI4cMGOqUBr%2FnRzZ31l%2FLn0DouE6ybp%2FK882X1XLirfbkO7rosQ7etEnodLznDXGV%2B4riebM5AVfTMU9avFGWaK82W58l5rkVOZUVyuxMJHeBxl1yYeghy55hyFrUJ0Hz2iMS3T3iwGxjCndr54b4Q4E9GUvRAa4iWfDGQ6nNup%2FSxGjqWzVy0V526UxJnfZ%2F4OVvcOkSHYdoTWmyPWkxn%2F3iBL8NzDc6eJhg2&X-Amz-Signature=7ef6d545273c6c56cccf350ae5f394dd919f656b36cacf97a3c8d8eb92622b66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
