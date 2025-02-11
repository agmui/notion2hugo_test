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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUOYCB45%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4m%2BZqslX%2FNm0CMTuVzyoCoQm%2Bpk3aSTINGnc0zXJAkwIgZcvxEgtJkTo4hIp%2FDRZ%2F9mtQGdphdsbfR0jL67lXxB8qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPw8TPZjEwwuvq9cHyrcAz9SJEnd44p3yOo%2FF%2F5ojbSesFWXm68I0kmtuxZSEq7OLm0%2F%2BXOgiF6vxpLEUYMlRGzw4edkJcAVQ6RESeCrlSH2aIO1zzWrLIDo6D9tMgG6WzVQbxMVkLayqghLQ6g5EsmZx2dtAASVQ6AjZexnu21PuFK67ARkghHz8THSpErt86uKGN8bKp%2BpQjIzOJixXcIjs7Gh2%2BVzCCXlIch0z5u6rEOt8BRpugG454yVbluCW8dnUxnN%2BGC%2FHU6iHUTSAcUqWiZdWvdED1h42dY7xkukyzR2HnyVL5XI8y%2FqEKQoOqRjhHu9j63yR4NFgKNI5Avnfm97WWFP5i4f7Mw%2B%2B4p3w4xIejYE5qRGY7Sc2fMBGAc9BXNEXjt5TD5tQyMfGcbuPZRZs%2Bb9LK0BSk7AYxO0ZwTtKQnNr0RTiL1KMM3CRpqYyj53M0j%2FUaKD%2B5QanGKyf6CAmymUtCutBuDnzZADq39IKoxwOyqQ%2F9RiydAZvE74jdM5yKMpDPdn0x27xTPBpAH%2Bz1Ezkx%2Ft1a2bHT%2BQWtDrXY64H9BSligABVS0ZtqMlH0m3r58ElgIuUaUyap3f%2FiqCSxl8Xo0qzlEBX16VWeMA6Yo%2FiceN7bvJdGRhNq8eMqJ3HD6BDQfMKn3rb0GOqUBkbVZ6bJDNVKpSJhpIyLXPrIifXZSMdJRanQJNEgKVRnG7uj%2BGjmXXjKmVtYmXhKaqPrlFM48eTh%2Fy%2BY%2FnJ9%2F78aww51ZDFQp0ZacnF3y85TDPDk12HqP4v4j7wmGvRBMP30YIJQQmKvk1OLO8laUPWj5eF6dutllYMZvpF6qm8I0Eh0MgxlHE1y0FCijwuO3B87xAOwQdkEwmUyuET4ZUx%2FJ0K1L&X-Amz-Signature=2191f93009532075a214874b137ec2c66733912b4b40421f7cd9c0f0f554c3dc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUOYCB45%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4m%2BZqslX%2FNm0CMTuVzyoCoQm%2Bpk3aSTINGnc0zXJAkwIgZcvxEgtJkTo4hIp%2FDRZ%2F9mtQGdphdsbfR0jL67lXxB8qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPw8TPZjEwwuvq9cHyrcAz9SJEnd44p3yOo%2FF%2F5ojbSesFWXm68I0kmtuxZSEq7OLm0%2F%2BXOgiF6vxpLEUYMlRGzw4edkJcAVQ6RESeCrlSH2aIO1zzWrLIDo6D9tMgG6WzVQbxMVkLayqghLQ6g5EsmZx2dtAASVQ6AjZexnu21PuFK67ARkghHz8THSpErt86uKGN8bKp%2BpQjIzOJixXcIjs7Gh2%2BVzCCXlIch0z5u6rEOt8BRpugG454yVbluCW8dnUxnN%2BGC%2FHU6iHUTSAcUqWiZdWvdED1h42dY7xkukyzR2HnyVL5XI8y%2FqEKQoOqRjhHu9j63yR4NFgKNI5Avnfm97WWFP5i4f7Mw%2B%2B4p3w4xIejYE5qRGY7Sc2fMBGAc9BXNEXjt5TD5tQyMfGcbuPZRZs%2Bb9LK0BSk7AYxO0ZwTtKQnNr0RTiL1KMM3CRpqYyj53M0j%2FUaKD%2B5QanGKyf6CAmymUtCutBuDnzZADq39IKoxwOyqQ%2F9RiydAZvE74jdM5yKMpDPdn0x27xTPBpAH%2Bz1Ezkx%2Ft1a2bHT%2BQWtDrXY64H9BSligABVS0ZtqMlH0m3r58ElgIuUaUyap3f%2FiqCSxl8Xo0qzlEBX16VWeMA6Yo%2FiceN7bvJdGRhNq8eMqJ3HD6BDQfMKn3rb0GOqUBkbVZ6bJDNVKpSJhpIyLXPrIifXZSMdJRanQJNEgKVRnG7uj%2BGjmXXjKmVtYmXhKaqPrlFM48eTh%2Fy%2BY%2FnJ9%2F78aww51ZDFQp0ZacnF3y85TDPDk12HqP4v4j7wmGvRBMP30YIJQQmKvk1OLO8laUPWj5eF6dutllYMZvpF6qm8I0Eh0MgxlHE1y0FCijwuO3B87xAOwQdkEwmUyuET4ZUx%2FJ0K1L&X-Amz-Signature=96e95b536d296d540311456afe40b25506668f80be4275c67e435e370d41a86a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
