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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J7ZBKG5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnh6ah0DRL%2F4z4%2FvQTS9zPSQewK7mfHsS9%2FZopy%2BKIfAiBt5KN%2FG54jxWbFcLWHoylJNoTXTRMIrzJk0O%2BLeckq%2Fir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM8QZjJVIKugwcOTDEKtwDPetYUcUslfzz20rbs60S3mcQ5J10NIMrRvUzUix8HBwNMK%2Fw%2B%2FwZ9esE2nEI0tYm8lA9cmC9LeLJZueQKVfMdhF4iC6buTRB%2Br61dZTqgtmRgytKfFJqNHNLowHXM8Q9DFmuI%2BbKvSoi73eWsRNRLEo%2B1z9LXi6f8iB1kKSLMhtbYQfTqJwOmvyZRwQWXgSC7KaNohbvQt5CyhUoDrbmGffkLm1%2BZ2NjeQECfkIDU0liATI5fWqpMKS%2Bp0pL8FNwU%2Ft0fGzr97VJJ%2BHa0wIsGF9NnpvZNHkPuVZS0JtqGNZGLunPQM7g8jQm2aZAI6Elx%2FfypGvnmHykl%2Bwsw8ObagtSHGrP5Una38yx0RZeZxNTJOgZB5xcQDCB%2FKDqo5B8Ohi0NTL4VXXhx8mS0nSwF07zIkQkP8MLTJCaWg8Sz5%2FVrINSS60%2FltWfZg69JVhZFLkLkydTBEumOMYaoWVkxUSjb8%2BAlgULE2RjcW6xdjMubqu32iXpPzP1UT3DE827lyADDnzoa9lNPEwoLXxzX3MsDf4%2Bticidknho0S5XGB4u1b7fkqQz4u6%2FVpdz0fdHPtKbnsQD55xM%2FeyTs1RwEa9t%2FCCk3HrfXNG92U3nKEET%2BTiMn7AzaRu1Y4w69PTwQY6pgG7L%2FBrCZ4S4r2ym7%2BG8uF0RXe1dV3latEo84UI4U2gTKbKTkZJWPH%2FjbD45tTseUT8uzqU6IZG7nEhK0lZgZXhM5x%2B%2FU%2FC%2BVN%2BkTG6BWNJCWetW9hX8lleLvhK2gJxQ7aV5y5Qj4gV5DDDh7SEf3tKH3Zp1BzvRMpT6J2aGTZj6L2SzPk3d%2F8oUFx7FjtRBepTPD%2Fw3x3VUTzy5RcYTbcad4TApdoJ&X-Amz-Signature=a45ed0981639c969e2365f12745e981f152dabc06622dceba5f6995893af25c4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J7ZBKG5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnh6ah0DRL%2F4z4%2FvQTS9zPSQewK7mfHsS9%2FZopy%2BKIfAiBt5KN%2FG54jxWbFcLWHoylJNoTXTRMIrzJk0O%2BLeckq%2Fir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM8QZjJVIKugwcOTDEKtwDPetYUcUslfzz20rbs60S3mcQ5J10NIMrRvUzUix8HBwNMK%2Fw%2B%2FwZ9esE2nEI0tYm8lA9cmC9LeLJZueQKVfMdhF4iC6buTRB%2Br61dZTqgtmRgytKfFJqNHNLowHXM8Q9DFmuI%2BbKvSoi73eWsRNRLEo%2B1z9LXi6f8iB1kKSLMhtbYQfTqJwOmvyZRwQWXgSC7KaNohbvQt5CyhUoDrbmGffkLm1%2BZ2NjeQECfkIDU0liATI5fWqpMKS%2Bp0pL8FNwU%2Ft0fGzr97VJJ%2BHa0wIsGF9NnpvZNHkPuVZS0JtqGNZGLunPQM7g8jQm2aZAI6Elx%2FfypGvnmHykl%2Bwsw8ObagtSHGrP5Una38yx0RZeZxNTJOgZB5xcQDCB%2FKDqo5B8Ohi0NTL4VXXhx8mS0nSwF07zIkQkP8MLTJCaWg8Sz5%2FVrINSS60%2FltWfZg69JVhZFLkLkydTBEumOMYaoWVkxUSjb8%2BAlgULE2RjcW6xdjMubqu32iXpPzP1UT3DE827lyADDnzoa9lNPEwoLXxzX3MsDf4%2Bticidknho0S5XGB4u1b7fkqQz4u6%2FVpdz0fdHPtKbnsQD55xM%2FeyTs1RwEa9t%2FCCk3HrfXNG92U3nKEET%2BTiMn7AzaRu1Y4w69PTwQY6pgG7L%2FBrCZ4S4r2ym7%2BG8uF0RXe1dV3latEo84UI4U2gTKbKTkZJWPH%2FjbD45tTseUT8uzqU6IZG7nEhK0lZgZXhM5x%2B%2FU%2FC%2BVN%2BkTG6BWNJCWetW9hX8lleLvhK2gJxQ7aV5y5Qj4gV5DDDh7SEf3tKH3Zp1BzvRMpT6J2aGTZj6L2SzPk3d%2F8oUFx7FjtRBepTPD%2Fw3x3VUTzy5RcYTbcad4TApdoJ&X-Amz-Signature=553a5d901752f8f3c0ce8c2c217c28e6a4f072a64dbef36ef9cde71a061a7218&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
