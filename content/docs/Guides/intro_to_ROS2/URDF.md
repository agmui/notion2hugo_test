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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TYRCWGT%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDuOy%2BfdBC81K9HWJAMgmlZ19fdsTOKbA6F601rKuxmAiAYaNiX34yYIz%2BFQ%2FcCntFrm83NL4nKjh%2Bb6lMo1H8qdiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgHSe6UXf2SoiyfxXKtwD9QyU4woC5ds7DHTMTGYVFROnq9H3mTYmKrk3nyf1czBCoIDocOSzJpqpkHF7GOBJJXxyZX1VWpQe%2FT18LQeh37sWBlEgB0vAy5U7E9D4LDnj0b6qkg1iuJwOPlvcytH2HWo4BOqQWmt8alz6aG07fccIhgUJaRlwFks9cs2dLR43J3drzrl4Tu1fhifcfWABbAdolBAt5TWudCVU%2BSGSccQDRbeSBI3xACytzlq%2FMbvuwf9Ufof9XBxgON1x510MZTnOYyyPwSDywb%2Bychowb0tYiNUHVSofgfifNVNyrat5TIDfn%2BvJakhheaQTMzFO7zyU%2FbfLeijAsHf5MRDjdnt2AgI6vnzF1FlTg4%2BFf4qsytowmewXifUT9dlquR9FAIzZ2ygrFxBIwDsxiCegRn4gmWZBe6h4GBmF7h4Tih0exG%2FvxyK6JaXTbo5WwRit02syiX%2B294GYopwwNoRNi2MkP%2FCIWXMioEXSrp1i%2BX1q8Dpg4TzSIEuSD075cME9zSOdPVMJB8eoh4Oj3QYqMiQ8292Ms8tBVKR0lM1aeSeAyKwyih%2FRFlmD1x6PNcsM3LENoZk1%2B71tY%2FcTnQMlGl7TpMLix6FqLfd4dlqj4IwIDWixlNo%2F1wSSj6Qw0JnhvQY6pgGTqtRn6jd5gZHlj31zzKAdxEYyrAMLZviT1Y2NG22Pa%2FSMnKx%2FBYEMj%2BAimxnEQtFkYHQMxovZpvAWB1TwXcOi4ttZg%2Bu605JcjdyBZZkO%2FSDf2ZGJUu8tVZ5kKAIucmVTus902vopooMFFIl3DtLZpcp1ASx4ARKGZjp%2F6CzvWpLkUVZgHP2dmPoHcFcchaHy7kWhna%2BVyZ0eR0GdLn58SOJXPLFj&X-Amz-Signature=03938e8a02bce7f2e795fba6871dba655832ba40ab7cf9ef0b85deff15e0d539&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TYRCWGT%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDuOy%2BfdBC81K9HWJAMgmlZ19fdsTOKbA6F601rKuxmAiAYaNiX34yYIz%2BFQ%2FcCntFrm83NL4nKjh%2Bb6lMo1H8qdiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgHSe6UXf2SoiyfxXKtwD9QyU4woC5ds7DHTMTGYVFROnq9H3mTYmKrk3nyf1czBCoIDocOSzJpqpkHF7GOBJJXxyZX1VWpQe%2FT18LQeh37sWBlEgB0vAy5U7E9D4LDnj0b6qkg1iuJwOPlvcytH2HWo4BOqQWmt8alz6aG07fccIhgUJaRlwFks9cs2dLR43J3drzrl4Tu1fhifcfWABbAdolBAt5TWudCVU%2BSGSccQDRbeSBI3xACytzlq%2FMbvuwf9Ufof9XBxgON1x510MZTnOYyyPwSDywb%2Bychowb0tYiNUHVSofgfifNVNyrat5TIDfn%2BvJakhheaQTMzFO7zyU%2FbfLeijAsHf5MRDjdnt2AgI6vnzF1FlTg4%2BFf4qsytowmewXifUT9dlquR9FAIzZ2ygrFxBIwDsxiCegRn4gmWZBe6h4GBmF7h4Tih0exG%2FvxyK6JaXTbo5WwRit02syiX%2B294GYopwwNoRNi2MkP%2FCIWXMioEXSrp1i%2BX1q8Dpg4TzSIEuSD075cME9zSOdPVMJB8eoh4Oj3QYqMiQ8292Ms8tBVKR0lM1aeSeAyKwyih%2FRFlmD1x6PNcsM3LENoZk1%2B71tY%2FcTnQMlGl7TpMLix6FqLfd4dlqj4IwIDWixlNo%2F1wSSj6Qw0JnhvQY6pgGTqtRn6jd5gZHlj31zzKAdxEYyrAMLZviT1Y2NG22Pa%2FSMnKx%2FBYEMj%2BAimxnEQtFkYHQMxovZpvAWB1TwXcOi4ttZg%2Bu605JcjdyBZZkO%2FSDf2ZGJUu8tVZ5kKAIucmVTus902vopooMFFIl3DtLZpcp1ASx4ARKGZjp%2F6CzvWpLkUVZgHP2dmPoHcFcchaHy7kWhna%2BVyZ0eR0GdLn58SOJXPLFj&X-Amz-Signature=f63ff4eebabfc04b20d8ac35dba886150899d1eba51cf02e9d3db5ae97fd1902&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
