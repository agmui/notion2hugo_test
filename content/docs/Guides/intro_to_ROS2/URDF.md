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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI6JWAXL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIAznGRopZCAP74eR6DiS9sk6pG4CeCBGWhdYwTJgRdecAiEApMCGkKI%2BXIZ2eVHFJuRJ0wa%2B86a4t88MvDDwjckzHfwqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkbvuCtTmQuKvVLRyrcAzzD9%2FIzGV%2Bm7tcMxWXad2sYbNopmzp%2BZD9UZqllP4NkkrFhABbnFStvWUmB86YMYX6JiaHyw%2FBvGuV830mtWjajCeeXv326Hd2cZrNbjZ%2BHVCOCZ0MXgfR6ZBqVFso%2BvLdusepfwf5Xn3gh549jKE1bGQqvsl%2BD9ilA2%2BH9JtZqUhfgAUzQaT2OIgFxsE24L%2FMaKQOq98%2FTWyRyjZ%2FpViNvdpQyboe88rQECcfwFZIL0zq38Gq3Z%2FMwqMVwMskj1Ojg4%2BFhwt1w98O9QiSw2%2FbkcBeVjc86VSdgrnQtX08oRy0UVYmjX17MatybyqclHBPoO4n7Yl9AYbcgwrjSDBqMqkMiRdyDkcQy4NsKFHlYqy142lsFzNKxWvOhhxIRSZJEM4hsriOP4KGu%2BgjUjPeFgdUWqkM0obXNf%2F%2FjTMotJiT1DG7tj7IiL0hog47jODk3wJL3J9e%2Bh32%2Fz3OFjrHAmt212%2Bvyl32Z6EBc5H%2Ft6n7arHKay81RjWJV0%2BZMB6xtw3SaU2j0i%2Fh0FuXfvqACtEiH4zeDWnPetjvg72OGQJGjn0vs9cV4cdizE830gtoJM3IMl3cjC4JJa2r%2BghC0xTCOfR9hkffh9S4rz%2Ff4YqO1syJzK%2FXLkZXNMOrXj74GOqUBstu7v2GF7WoeUyaydltsoplJ4dKrJfLKmEU%2BfHlLAp9%2FI%2BYRN3yZohF4%2FNJbfrCG1zaLrM6jSEDdpxMPh9xJsyeIkSAWACmVRfxwlAqgoM3zqjK8ahqff%2F5ejjFSz00cA1CGhGoHbE8a48vOfVcH2Ddf6JfgY1houqhnHy%2FZ2A3JY5sHk5%2BJ1hhxEACZJOlnPuTKRsmduz7ak7yYdxtdLkEu5blp&X-Amz-Signature=cded4a540e4a7f8854f19250d1b8f9c0abcc0e94a88e2d92d477e9b3d6c62a18&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI6JWAXL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIAznGRopZCAP74eR6DiS9sk6pG4CeCBGWhdYwTJgRdecAiEApMCGkKI%2BXIZ2eVHFJuRJ0wa%2B86a4t88MvDDwjckzHfwqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkbvuCtTmQuKvVLRyrcAzzD9%2FIzGV%2Bm7tcMxWXad2sYbNopmzp%2BZD9UZqllP4NkkrFhABbnFStvWUmB86YMYX6JiaHyw%2FBvGuV830mtWjajCeeXv326Hd2cZrNbjZ%2BHVCOCZ0MXgfR6ZBqVFso%2BvLdusepfwf5Xn3gh549jKE1bGQqvsl%2BD9ilA2%2BH9JtZqUhfgAUzQaT2OIgFxsE24L%2FMaKQOq98%2FTWyRyjZ%2FpViNvdpQyboe88rQECcfwFZIL0zq38Gq3Z%2FMwqMVwMskj1Ojg4%2BFhwt1w98O9QiSw2%2FbkcBeVjc86VSdgrnQtX08oRy0UVYmjX17MatybyqclHBPoO4n7Yl9AYbcgwrjSDBqMqkMiRdyDkcQy4NsKFHlYqy142lsFzNKxWvOhhxIRSZJEM4hsriOP4KGu%2BgjUjPeFgdUWqkM0obXNf%2F%2FjTMotJiT1DG7tj7IiL0hog47jODk3wJL3J9e%2Bh32%2Fz3OFjrHAmt212%2Bvyl32Z6EBc5H%2Ft6n7arHKay81RjWJV0%2BZMB6xtw3SaU2j0i%2Fh0FuXfvqACtEiH4zeDWnPetjvg72OGQJGjn0vs9cV4cdizE830gtoJM3IMl3cjC4JJa2r%2BghC0xTCOfR9hkffh9S4rz%2Ff4YqO1syJzK%2FXLkZXNMOrXj74GOqUBstu7v2GF7WoeUyaydltsoplJ4dKrJfLKmEU%2BfHlLAp9%2FI%2BYRN3yZohF4%2FNJbfrCG1zaLrM6jSEDdpxMPh9xJsyeIkSAWACmVRfxwlAqgoM3zqjK8ahqff%2F5ejjFSz00cA1CGhGoHbE8a48vOfVcH2Ddf6JfgY1houqhnHy%2FZ2A3JY5sHk5%2BJ1hhxEACZJOlnPuTKRsmduz7ak7yYdxtdLkEu5blp&X-Amz-Signature=744fcb75e037d6ef4a37e489d2d424a06cff6d86c6f6f5d2a4b1d8570c713b1e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
