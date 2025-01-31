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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BPFIJJK%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFLSMy0g%2BmpL8kc97%2BG5zwlHFQeCe5GfpsVTA%2FPNBE0AiAWGfxCoe7bUuCdCzCfhMnBTrTAD8ixhpLCFEEhTl8hGiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2WEtid2FVWQknDWgKtwD4jd9b%2FcKmJ2Uu2RwwLRcZfxdptpTKRO1eIhN2XTsWngx57z7ppjGhplEjTzHX1o0EE7I7uOPMVVwUB4bUz%2BnlS0lIM2VkgXvp7Dqm1aqKeQL1eGCux0MEPUJm6Ru0czjDiL6C0JPp6rTc8ctPQ%2F1kxY%2B9%2FYtSnlZKCsRFxAOVAUNjnHrpnI2WzqCudCznLKEecRgem3JNX%2FmQTXG5nkgmyBNKGX%2BLCu9jt2itZwDBKeeDhGmwCIP37C3y3GDCspwdCYg1T6O%2FCBjNb0S%2BHc6cnVXlTV1sCLsFtfbNl1OIUJQK1dQgXrsU%2F9MJoxt5Zo0PgMtZBHICQf5SuBc7CV7XCpwXV7uA1di%2BHOcWgsmQ8NoOMUyJAK9RlorBa0WDBZgTIA5F5kvb1Jk8rLwbTltLrKduZJaR0FadBiHxfIb6EKQTtOrqJ8I8IfJkLten2%2BnMTqjnpuHXNLsQslhW1%2BU1F5nknXkxyotvsmwq8SECYso600PIRemD%2BjMT123CRf17Mv6sgs6XafoiBe4dxYce4At8gZbY74vEWGuHUHDwA0RqaxfPq%2FXmTgoHakWoLm0oGMzsfYQ%2B5YUeeySni17wgQOpmp5UA5iQ7Fh9%2BSTnN%2F3naNSs69IUCLZw0swzK%2FzvAY6pgHro8UA%2F1SUDHZ43YjPXnPIKSoXH67%2FJ%2FkPsk5ayiXuVusrr3EKR64pHH8noTstRz7WHWUi7ojdQIEFPe9lPtPKnTZI%2BNyr3MY7tScK8FgciBWMWkiN4boPrjUT0l7fQvq0u64%2BWj6zwXfygQwKPPmF7gOaf8zIdWM0OqpQVGpl%2BmJgB%2Fr3Ah%2Fg7eorZqq9IR4N%2B9s9jAZhOZ1IhFzYw5Ex%2FF9HMMk%2F&X-Amz-Signature=69b900fe9225c316591fc27cdfa8545624766532ee7544f7e4b4a20037531eb9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BPFIJJK%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFLSMy0g%2BmpL8kc97%2BG5zwlHFQeCe5GfpsVTA%2FPNBE0AiAWGfxCoe7bUuCdCzCfhMnBTrTAD8ixhpLCFEEhTl8hGiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2WEtid2FVWQknDWgKtwD4jd9b%2FcKmJ2Uu2RwwLRcZfxdptpTKRO1eIhN2XTsWngx57z7ppjGhplEjTzHX1o0EE7I7uOPMVVwUB4bUz%2BnlS0lIM2VkgXvp7Dqm1aqKeQL1eGCux0MEPUJm6Ru0czjDiL6C0JPp6rTc8ctPQ%2F1kxY%2B9%2FYtSnlZKCsRFxAOVAUNjnHrpnI2WzqCudCznLKEecRgem3JNX%2FmQTXG5nkgmyBNKGX%2BLCu9jt2itZwDBKeeDhGmwCIP37C3y3GDCspwdCYg1T6O%2FCBjNb0S%2BHc6cnVXlTV1sCLsFtfbNl1OIUJQK1dQgXrsU%2F9MJoxt5Zo0PgMtZBHICQf5SuBc7CV7XCpwXV7uA1di%2BHOcWgsmQ8NoOMUyJAK9RlorBa0WDBZgTIA5F5kvb1Jk8rLwbTltLrKduZJaR0FadBiHxfIb6EKQTtOrqJ8I8IfJkLten2%2BnMTqjnpuHXNLsQslhW1%2BU1F5nknXkxyotvsmwq8SECYso600PIRemD%2BjMT123CRf17Mv6sgs6XafoiBe4dxYce4At8gZbY74vEWGuHUHDwA0RqaxfPq%2FXmTgoHakWoLm0oGMzsfYQ%2B5YUeeySni17wgQOpmp5UA5iQ7Fh9%2BSTnN%2F3naNSs69IUCLZw0swzK%2FzvAY6pgHro8UA%2F1SUDHZ43YjPXnPIKSoXH67%2FJ%2FkPsk5ayiXuVusrr3EKR64pHH8noTstRz7WHWUi7ojdQIEFPe9lPtPKnTZI%2BNyr3MY7tScK8FgciBWMWkiN4boPrjUT0l7fQvq0u64%2BWj6zwXfygQwKPPmF7gOaf8zIdWM0OqpQVGpl%2BmJgB%2Fr3Ah%2Fg7eorZqq9IR4N%2B9s9jAZhOZ1IhFzYw5Ex%2FF9HMMk%2F&X-Amz-Signature=ad9f0297722f10316b0e62c7cc5d2c36db21a2de5691a3e7d4d3f45fa54d3bc8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
