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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CFG2VTR%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T121418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDj9%2BCgUMFHCUFw1fEA0MSebij8FL1%2FG%2Ff4TGO4k3Tf5QIgSfuslFNaTP8cSpEuZ76zzwX0mtLHMJtnw6oBE92wX%2FMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKTPG2yM6%2FondyM4ZircA09zp5T%2FSPp1tt%2FPsPhNkt4nTyIn7ktU7KgUdfQ1M0w95iw2UIKTmtkjoT48E51mjsBhzHer5u%2FpYpRr4fc8vFcNSgj1C%2F%2BMUDwqS%2BAb%2BaJBlYyS2Pn9yoTiWGjJvDG1QFUFjucEpQKrDzF%2Bg%2FpZlorOoX97XTexSLK3QHDKj0e%2BBHDqX3YVO8IaRyoBXkc1s6bMRIQliVVr7LrgjlGULajJzezIMZ%2FOWjBpbnVFUcXYzYCH7fewPIEvtECj26wK%2B5VK7r%2F6zi8HNpfE3ZPHut12LqiuOrc8age1oT%2BOAcKQkm4hfazvkyyYdOr8Vj3ZzeMjK9qecEX3oORfdC%2FOCu4WuXTx9VN7Vmf09XR7uZIW1j4E1xt6r2dQDUHfC3ZKDDZcVMxuXN5FB9SeF6hUqQhp%2FUI4pj1iuTcmjaLDyIKuR2eayaOUC2hh4mUiuXEAeU20t00WLLR%2Fdawfboem39oVwa5eQydU8DykRs8MZ6XDBXcH4EY2IidgmAyYHXvNSeqyCrQ9WxoHocgVrhzeAMWvmQUq5Z%2FGqI8QEAvZxRCjGj6U6ZBZ8V56VZ4ReqgBx%2BMJSfpZPc3nUEQnwNy%2BNEkbUxH83UbAuyBheBe9KP%2B%2BZ013PT%2BRbziA0bqPMKitgb4GOqUBPGTFZ%2FVWmF1g8rXv6bmslPOnIBwNDCJ9iXrnKUrMuDXQsYjzT5uMYW0uAH1sDb7il8u%2Fny%2FKVJ9vNk6sSGvDfbmdXA3VFVUIUUAaGuX4%2F3KHyPSE5QpdVquPZCiubNC9RNy%2B4cJHpRf1S6yrtxtLmC00RYShZgN3UjnOg1r2Nwyx1rzfS%2BkxGT1Rezb3JAJwot64dbkjNWRSXqVA0t8SRv%2B1H6gv&X-Amz-Signature=7bfc13abdf56416409cdd89d49545fe873dbb63a0bb62aaadc11bd55b8e094f1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CFG2VTR%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T121418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDj9%2BCgUMFHCUFw1fEA0MSebij8FL1%2FG%2Ff4TGO4k3Tf5QIgSfuslFNaTP8cSpEuZ76zzwX0mtLHMJtnw6oBE92wX%2FMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKTPG2yM6%2FondyM4ZircA09zp5T%2FSPp1tt%2FPsPhNkt4nTyIn7ktU7KgUdfQ1M0w95iw2UIKTmtkjoT48E51mjsBhzHer5u%2FpYpRr4fc8vFcNSgj1C%2F%2BMUDwqS%2BAb%2BaJBlYyS2Pn9yoTiWGjJvDG1QFUFjucEpQKrDzF%2Bg%2FpZlorOoX97XTexSLK3QHDKj0e%2BBHDqX3YVO8IaRyoBXkc1s6bMRIQliVVr7LrgjlGULajJzezIMZ%2FOWjBpbnVFUcXYzYCH7fewPIEvtECj26wK%2B5VK7r%2F6zi8HNpfE3ZPHut12LqiuOrc8age1oT%2BOAcKQkm4hfazvkyyYdOr8Vj3ZzeMjK9qecEX3oORfdC%2FOCu4WuXTx9VN7Vmf09XR7uZIW1j4E1xt6r2dQDUHfC3ZKDDZcVMxuXN5FB9SeF6hUqQhp%2FUI4pj1iuTcmjaLDyIKuR2eayaOUC2hh4mUiuXEAeU20t00WLLR%2Fdawfboem39oVwa5eQydU8DykRs8MZ6XDBXcH4EY2IidgmAyYHXvNSeqyCrQ9WxoHocgVrhzeAMWvmQUq5Z%2FGqI8QEAvZxRCjGj6U6ZBZ8V56VZ4ReqgBx%2BMJSfpZPc3nUEQnwNy%2BNEkbUxH83UbAuyBheBe9KP%2B%2BZ013PT%2BRbziA0bqPMKitgb4GOqUBPGTFZ%2FVWmF1g8rXv6bmslPOnIBwNDCJ9iXrnKUrMuDXQsYjzT5uMYW0uAH1sDb7il8u%2Fny%2FKVJ9vNk6sSGvDfbmdXA3VFVUIUUAaGuX4%2F3KHyPSE5QpdVquPZCiubNC9RNy%2B4cJHpRf1S6yrtxtLmC00RYShZgN3UjnOg1r2Nwyx1rzfS%2BkxGT1Rezb3JAJwot64dbkjNWRSXqVA0t8SRv%2B1H6gv&X-Amz-Signature=80d5ec7289e8a51458172c50b680bebba268edc8014271c0ebdb2e0440fb84ef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
