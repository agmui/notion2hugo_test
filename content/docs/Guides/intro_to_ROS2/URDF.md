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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7IKVHHA%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChCamC2veORQHqHhpvFIXSlWiZ9S2m6392O5%2FMvptbTAiEA7k7kJFPz6FdnHhp56R5KsrHrb66XRJCXwdf%2BTj3Dh0cq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOWynXTZAUcl2rgCQSrcA2RH%2B%2FRsI9x5cKUl%2F7Yx3%2F3RmTGmRuoT6RsoKBIoPLtnMr%2Bl9dxVYO9cWJEYA59cu8%2FHSnjZf3hdWVl7qpz%2Fg4oo3W1rNDKEARmBFGxBl2JQFS0ABkdf40mDYyvFrygTyRSSYv1M1cxIrxDPZoWgcvNralgSQoaJmGKOwe8Ov03qXPIPnZmdGo2dM5iDJJ%2FPOges%2BqfNIBVofPELmgFZivEJGr6WsqG2bK9XQaHPBQfXaTyYAYNeeNKLMDKSA%2BXHs77wpBf87pj7v%2Bo5gsZxzMi3DFbzwbUS%2Fwk9sxjrbovMaNz7vJK8RPT8SrdvvHrvZAHKw8xwVaUaP8ZgGIFu53o%2B9JV3M7%2BVsi6vuT3vBGIAE93QxukVmftSKOiR8Xyy9%2FJ71GokG5c0eEiyZO6QaqAaYATZx%2FipRd1DJT%2BTZig08WveoiZTegacZnJjaBR5fxialPmQwdTeRNApcQiZvSlIn1umbdxRNnqa3%2BkkNE5iMZxLg%2BKEDcJgUUx%2B3I5DPn7ffInHK2uFdMt8%2F41qAtjw5OViVnKs%2BKq4wSZdCyXgqosfXt51EetDIMTUTBC5o1AXxufyoPNKaEedNLVWmWctVvhd85s6LzYCPTWUaUKg3ND3onLjKs8oe8brMJzT08EGOqUBA9m26rOk8S5sbIq4A6ZOl7xX%2B9S%2FoEhef93x02WVMMCsy7K0xaLVMSVINJpa9qBD1Lnv5fPDnYazH8fogG1waz44NY4TI%2FBDpJE99N9PintJVJOfziVSQlJYr5cDokudVGWvixsuL4n7nBmSfY3wukdX%2BGEaolLJbFgHcAJAePpZc%2FuE3ftWo1gcykqIFbkrfevO6RayJF3rqc8ncw3e60J6ls5t&X-Amz-Signature=f9635b596a56a02397849e34d44d014a7f5b7dc8b5ec18614e284158e129eac7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7IKVHHA%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChCamC2veORQHqHhpvFIXSlWiZ9S2m6392O5%2FMvptbTAiEA7k7kJFPz6FdnHhp56R5KsrHrb66XRJCXwdf%2BTj3Dh0cq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOWynXTZAUcl2rgCQSrcA2RH%2B%2FRsI9x5cKUl%2F7Yx3%2F3RmTGmRuoT6RsoKBIoPLtnMr%2Bl9dxVYO9cWJEYA59cu8%2FHSnjZf3hdWVl7qpz%2Fg4oo3W1rNDKEARmBFGxBl2JQFS0ABkdf40mDYyvFrygTyRSSYv1M1cxIrxDPZoWgcvNralgSQoaJmGKOwe8Ov03qXPIPnZmdGo2dM5iDJJ%2FPOges%2BqfNIBVofPELmgFZivEJGr6WsqG2bK9XQaHPBQfXaTyYAYNeeNKLMDKSA%2BXHs77wpBf87pj7v%2Bo5gsZxzMi3DFbzwbUS%2Fwk9sxjrbovMaNz7vJK8RPT8SrdvvHrvZAHKw8xwVaUaP8ZgGIFu53o%2B9JV3M7%2BVsi6vuT3vBGIAE93QxukVmftSKOiR8Xyy9%2FJ71GokG5c0eEiyZO6QaqAaYATZx%2FipRd1DJT%2BTZig08WveoiZTegacZnJjaBR5fxialPmQwdTeRNApcQiZvSlIn1umbdxRNnqa3%2BkkNE5iMZxLg%2BKEDcJgUUx%2B3I5DPn7ffInHK2uFdMt8%2F41qAtjw5OViVnKs%2BKq4wSZdCyXgqosfXt51EetDIMTUTBC5o1AXxufyoPNKaEedNLVWmWctVvhd85s6LzYCPTWUaUKg3ND3onLjKs8oe8brMJzT08EGOqUBA9m26rOk8S5sbIq4A6ZOl7xX%2B9S%2FoEhef93x02WVMMCsy7K0xaLVMSVINJpa9qBD1Lnv5fPDnYazH8fogG1waz44NY4TI%2FBDpJE99N9PintJVJOfziVSQlJYr5cDokudVGWvixsuL4n7nBmSfY3wukdX%2BGEaolLJbFgHcAJAePpZc%2FuE3ftWo1gcykqIFbkrfevO6RayJF3rqc8ncw3e60J6ls5t&X-Amz-Signature=6c774156314420c36eae27750ee5fb3b9d0e036a8cc18a70b37c925a64f4a5a9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
