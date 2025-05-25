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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU3UHAKT%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCdhk%2BbSDVDLqPdtF25bDQINuzk%2BBEmgvrVk%2F91ZKnWMAIgeW1aLgx9VrsETmJOKA4yTbfu1UN6ng7m%2BcimJUnsu08q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFaZfii134z3zIZLCyrcA98%2F5U8QW6Ip%2BLQ7fVEBFz4SsUXvQboaa4b3SwGWmg2F1N1WI8L5oIkj15%2FYpDERzC%2BQ5gZDKqjghJkAV2tEXnEZBlWNWtUdmj7a2hrvzO1BMneOXlpfCYj%2FMsrNfO9T%2BFDaF06txA601rai%2FYJ7Gd5WBv%2F%2FdGG%2Byuwm1%2FjQqLsAbGq4q01Kc%2Bd1W4zRCtODWmM4StJdXJ6UyMywmTKP5WO%2BGsfNp8LHKcPUjnlO5gKR%2FTg1FTnHvEcFQZN32nukdwaXeXI%2BwSoeecw90fIX7DvypuxhQtkf%2FuJTR%2FLdAt%2BfccxBeCvllR%2B5iDWpRlmzfC6GvLxUw2X7wE26EAaPevtWeEQVfbh7osqPjFq3UYSGFjGdqQxu8g7l536iEuwRvUQHDjowxXzLJqWmNXYJRq8laFfznr0gHuCPgoJMZs9Ieab5CyEw6PtRJ73Gn1DKfv8xF8IMHX4n8cjrw%2BR%2BUfYzQAn2HFN6iGuj1%2FtdapOQ4mNKZYyBaiSoVyS5t1pHJkSFsv1vHW5c2t%2FU6CSe%2BYH8t6v1jaanxYbNgAs5P1m41Qx8U%2BfembBly3lJR%2B1yuwP1p8qEPcHpBW2sQnlU%2FN0xr3LQdApTmUMRWxbpQcCbKeWNU2MoRjRLLgvIMJLFzcEGOqUBo15jiSaNWmkHPIBveAIwGosvQlYRsYv50jh6CdQYRQrp0MlbIa7pAbTu7vZ0AklwSl8Leptu5qopEDIs7bil%2BxiqyiTds03fuGqpnRq7nTE%2FADJc0OrjWKrJr8aH35YSOZ%2F%2BLtGvXRKMDniITPDqeqk1n1sPzngVpN9vYvUXVvtKytjzolz5faOllFnMPtlmnaqaOhw14GUUPXTlHaJ0sdemrzBg&X-Amz-Signature=75fa7623dd008036155b58e8c1c584eb9e718e33c3b596221aecc11f7aa02786&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU3UHAKT%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCdhk%2BbSDVDLqPdtF25bDQINuzk%2BBEmgvrVk%2F91ZKnWMAIgeW1aLgx9VrsETmJOKA4yTbfu1UN6ng7m%2BcimJUnsu08q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFaZfii134z3zIZLCyrcA98%2F5U8QW6Ip%2BLQ7fVEBFz4SsUXvQboaa4b3SwGWmg2F1N1WI8L5oIkj15%2FYpDERzC%2BQ5gZDKqjghJkAV2tEXnEZBlWNWtUdmj7a2hrvzO1BMneOXlpfCYj%2FMsrNfO9T%2BFDaF06txA601rai%2FYJ7Gd5WBv%2F%2FdGG%2Byuwm1%2FjQqLsAbGq4q01Kc%2Bd1W4zRCtODWmM4StJdXJ6UyMywmTKP5WO%2BGsfNp8LHKcPUjnlO5gKR%2FTg1FTnHvEcFQZN32nukdwaXeXI%2BwSoeecw90fIX7DvypuxhQtkf%2FuJTR%2FLdAt%2BfccxBeCvllR%2B5iDWpRlmzfC6GvLxUw2X7wE26EAaPevtWeEQVfbh7osqPjFq3UYSGFjGdqQxu8g7l536iEuwRvUQHDjowxXzLJqWmNXYJRq8laFfznr0gHuCPgoJMZs9Ieab5CyEw6PtRJ73Gn1DKfv8xF8IMHX4n8cjrw%2BR%2BUfYzQAn2HFN6iGuj1%2FtdapOQ4mNKZYyBaiSoVyS5t1pHJkSFsv1vHW5c2t%2FU6CSe%2BYH8t6v1jaanxYbNgAs5P1m41Qx8U%2BfembBly3lJR%2B1yuwP1p8qEPcHpBW2sQnlU%2FN0xr3LQdApTmUMRWxbpQcCbKeWNU2MoRjRLLgvIMJLFzcEGOqUBo15jiSaNWmkHPIBveAIwGosvQlYRsYv50jh6CdQYRQrp0MlbIa7pAbTu7vZ0AklwSl8Leptu5qopEDIs7bil%2BxiqyiTds03fuGqpnRq7nTE%2FADJc0OrjWKrJr8aH35YSOZ%2F%2BLtGvXRKMDniITPDqeqk1n1sPzngVpN9vYvUXVvtKytjzolz5faOllFnMPtlmnaqaOhw14GUUPXTlHaJ0sdemrzBg&X-Amz-Signature=8520e65071358a8f5cb8f7545abbaa7b3a207c6889d8ab3e5f8fc49eaa38692c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
