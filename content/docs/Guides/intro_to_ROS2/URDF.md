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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNZMRH5Q%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH0MkwU11LzWzmPJtVcFY9rj7VggX8L871eWxMP2jEXMCIDEpjrsDz2GI991f6JY1H%2BGpp%2FWuSRUHYaBB%2FH65qhJgKv8DCC8QABoMNjM3NDIzMTgzODA1IgxCoowLOlzqAd9Wxz0q3APOWhLAx1GTMDVrT%2BamgwUHuOPqeQs%2F8KrkJnREIcv4Yg3g08FcZRhkWag%2FB3KTFaAl7W%2FuaI5iPYHXMf97kaXzd0Qu9ZR1djUUFXfqBRDGSdD5WJWcksEZwp891uqG21mbk6rcuroYZFav0%2FeIZRDwziuPLPIIN9RNMoL5FpQDJr14NWEamIJi0yx%2B0Kswm7NOJJON1vCLkIWMhbmzisvpIGwNwrKQn8fr5QX%2FOhl4ovucQ17YFo%2FGgS1A9vQCQlQlPcaHYwi9yfBNmGmAAry%2BksJ3iGi2ceZNpCqeSgjYfY7z%2F6KM98UzUEqdfchnHCwx6p3s4HQuYsXSXtNyyikcZeUtseUP09z7iVE6JsW4zUmU0S1Z6LtHvPCfWwx4V1f0nicSCivNevQ4RulUfUMxBtxqmUR3%2B0TLtEu4FEl0HETViqC8C15xp7Q4kpu8yMoSOiExDbOvmSwEaONSdrE06rkjrVuskBdj4TnjFejn13ZdwY6UOW14JNRNu34qRMRffdXh9aubOrCXMvt%2BULcFr1ctr55RIXw4sA454KYpOFylbDvMVzUuriNDG1wy2sscwFDOZDQ9VGSGhw4LyEew487hTQm2wB3H6W3QNJJOhhwqKly64yLuj2K5NjDl%2FuLABjqnATzmIAwcMad6w8bRKD4SlfQI1Z97ZKnwtYWh9aZUqaI2rVDMroy4JzXoSfc2RbES0%2BmM1wV7zoanIA7oorR0hzlFpI6YywbFZL6bVag4NGCu5jOz5M16FViOOF5fbJBPEEWVT2pwgaeM7OXZs%2B2ok6pNuE7TSoEVgeMdLfXiRvtZDJX1G%2Fv35Qr2SYyXYfO%2F8JsdQWhYp8loap21Isq9wXakoQS1PayW&X-Amz-Signature=ad98f2b272aa7c171d7fc7ca3289ef91cf8757374668111c61717919f66c39f6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNZMRH5Q%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH0MkwU11LzWzmPJtVcFY9rj7VggX8L871eWxMP2jEXMCIDEpjrsDz2GI991f6JY1H%2BGpp%2FWuSRUHYaBB%2FH65qhJgKv8DCC8QABoMNjM3NDIzMTgzODA1IgxCoowLOlzqAd9Wxz0q3APOWhLAx1GTMDVrT%2BamgwUHuOPqeQs%2F8KrkJnREIcv4Yg3g08FcZRhkWag%2FB3KTFaAl7W%2FuaI5iPYHXMf97kaXzd0Qu9ZR1djUUFXfqBRDGSdD5WJWcksEZwp891uqG21mbk6rcuroYZFav0%2FeIZRDwziuPLPIIN9RNMoL5FpQDJr14NWEamIJi0yx%2B0Kswm7NOJJON1vCLkIWMhbmzisvpIGwNwrKQn8fr5QX%2FOhl4ovucQ17YFo%2FGgS1A9vQCQlQlPcaHYwi9yfBNmGmAAry%2BksJ3iGi2ceZNpCqeSgjYfY7z%2F6KM98UzUEqdfchnHCwx6p3s4HQuYsXSXtNyyikcZeUtseUP09z7iVE6JsW4zUmU0S1Z6LtHvPCfWwx4V1f0nicSCivNevQ4RulUfUMxBtxqmUR3%2B0TLtEu4FEl0HETViqC8C15xp7Q4kpu8yMoSOiExDbOvmSwEaONSdrE06rkjrVuskBdj4TnjFejn13ZdwY6UOW14JNRNu34qRMRffdXh9aubOrCXMvt%2BULcFr1ctr55RIXw4sA454KYpOFylbDvMVzUuriNDG1wy2sscwFDOZDQ9VGSGhw4LyEew487hTQm2wB3H6W3QNJJOhhwqKly64yLuj2K5NjDl%2FuLABjqnATzmIAwcMad6w8bRKD4SlfQI1Z97ZKnwtYWh9aZUqaI2rVDMroy4JzXoSfc2RbES0%2BmM1wV7zoanIA7oorR0hzlFpI6YywbFZL6bVag4NGCu5jOz5M16FViOOF5fbJBPEEWVT2pwgaeM7OXZs%2B2ok6pNuE7TSoEVgeMdLfXiRvtZDJX1G%2Fv35Qr2SYyXYfO%2F8JsdQWhYp8loap21Isq9wXakoQS1PayW&X-Amz-Signature=75fdc77d66af4b2cd518d267ff94b0ee68e658e9687df6f2e8154d021531dd92&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
