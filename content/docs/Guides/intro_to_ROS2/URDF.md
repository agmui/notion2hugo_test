---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RTO3NUE%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIG5NrCRPSDkvHWJt49wXCntP40yieqy2dt4h55CXJpPkAiEAmFlFK3SlU23btWVGxL9tzBwovP131ooxT9090UClpD8q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDICJZitY6JlWOvEH4CrcA04ihRuFU288cTUDHGdy6eOdrDkRo%2FxAnO0QOSSQUKkqeHm4yiQIXGgwg%2B31JVAL4Wq0BQuEXYKp%2B5DrKlFnPyaqbrD9dqtrX13WuWdp8sW7siSesgZBgL1LW5aKzJLCOsoK2bjpsv0CSxwvgrFwUq4pZYwszOynv4nE%2ByUozejJ3Xj136qh%2BUTAG5QkhHUBkZn9DbHgrrgYL69iYvzmGN3xoJ3vAQhscK1oqSkGjx9MUS9eTMjRaMiE00Lgq6VHcurmQTYbnOX78OsMBoawJclnigve9RPth4TKsC9pQweMLTt34TrCy5MljYxNQaNTlfIdAVudc%2FfOol1H4wVmPqtl11Pi3z62M712gQSQ9TQ0izQNgiN9BS9SfaHlfzbQ6DN3TM8uGgW%2Bniiq2q%2FlYABCeBW5HekNDqr0Xjd1shwtJwH063MJTCNHM1mzrEWrj5lMcuVpexXdQ%2BHvABIl9G9THZpyBB1df15WPwZ4w%2BYbVIsWhEJyCpzvY5eO%2BDsBUcRACr2YyDI2TSha2U3H1vVF0mQcQXmCGGXhmkq7EYuKDZvQyCM6Bs8oPeaQgd30F%2FhT%2BmjXqhHVxo%2BA00Bc9LHRThhi3L3TJvdDU17Cq3g%2BixESo36Ewq6%2BmryqMNipitAGOqUBEil95YuEtdm8%2BBNupsLxH%2Bu00ivTCLoOeLFRm7Xo%2BsaZPf%2B6IYAkRGjgqKU%2FdUureq6lDe7vcCn61Ekt6QONx0AjJJ1el6%2BGvnTVzGMKg1SkS1daaGI%2BsUUuf0WmaBaRkQQd3KncjgVWr4NdTlNdYhv6f%2FwTiv1yuGsHj%2F33WTxq71H%2Bx36VEJEavP%2FX38eFYhcDi6yePQlnez7m%2BYymcWP79hiS&X-Amz-Signature=fe2452f10b89a4c53a3ed1162d864f016cfc28ea7e55fec66293d045641eea69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RTO3NUE%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIG5NrCRPSDkvHWJt49wXCntP40yieqy2dt4h55CXJpPkAiEAmFlFK3SlU23btWVGxL9tzBwovP131ooxT9090UClpD8q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDICJZitY6JlWOvEH4CrcA04ihRuFU288cTUDHGdy6eOdrDkRo%2FxAnO0QOSSQUKkqeHm4yiQIXGgwg%2B31JVAL4Wq0BQuEXYKp%2B5DrKlFnPyaqbrD9dqtrX13WuWdp8sW7siSesgZBgL1LW5aKzJLCOsoK2bjpsv0CSxwvgrFwUq4pZYwszOynv4nE%2ByUozejJ3Xj136qh%2BUTAG5QkhHUBkZn9DbHgrrgYL69iYvzmGN3xoJ3vAQhscK1oqSkGjx9MUS9eTMjRaMiE00Lgq6VHcurmQTYbnOX78OsMBoawJclnigve9RPth4TKsC9pQweMLTt34TrCy5MljYxNQaNTlfIdAVudc%2FfOol1H4wVmPqtl11Pi3z62M712gQSQ9TQ0izQNgiN9BS9SfaHlfzbQ6DN3TM8uGgW%2Bniiq2q%2FlYABCeBW5HekNDqr0Xjd1shwtJwH063MJTCNHM1mzrEWrj5lMcuVpexXdQ%2BHvABIl9G9THZpyBB1df15WPwZ4w%2BYbVIsWhEJyCpzvY5eO%2BDsBUcRACr2YyDI2TSha2U3H1vVF0mQcQXmCGGXhmkq7EYuKDZvQyCM6Bs8oPeaQgd30F%2FhT%2BmjXqhHVxo%2BA00Bc9LHRThhi3L3TJvdDU17Cq3g%2BixESo36Ewq6%2BmryqMNipitAGOqUBEil95YuEtdm8%2BBNupsLxH%2Bu00ivTCLoOeLFRm7Xo%2BsaZPf%2B6IYAkRGjgqKU%2FdUureq6lDe7vcCn61Ekt6QONx0AjJJ1el6%2BGvnTVzGMKg1SkS1daaGI%2BsUUuf0WmaBaRkQQd3KncjgVWr4NdTlNdYhv6f%2FwTiv1yuGsHj%2F33WTxq71H%2Bx36VEJEavP%2FX38eFYhcDi6yePQlnez7m%2BYymcWP79hiS&X-Amz-Signature=e9a546de8f1ffde6649fd7bd98bf4a14306010d1f1444be9999c9909b7dd52eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
