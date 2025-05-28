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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ3V2UTT%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDgwDJR6vvBguJ3venYInqx7gBE%2FpABSfUrLibeGH83AIgCInTmsK4l4ySh7ib7dgQ5kUAfzJgwUgL35q%2FxEpUH%2FQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDFnh5d%2Bkb4eScinUUircA1SHRK5B%2BiobkHHjjhppb%2BqtPrstYak5%2B0YvGGxqtJIWDl1E7McSU1IAZCjj9gHUlNaL9run0D2DUF9F4nVFng3hzMsXH3hiFtJfKI3KFowjkG0%2Bru1NJnEyWzVSeuS8i1B0OkibB3muhy1dykTqo8okGlW5Q5dZP1ALCNwjTa29Eq2RjunuLLkEDctD8gNe3U%2BdJxZQDgk0FW9c9nkOZ3DM6I4tWDVvxbJKO8nBrSphJZK9CIWv2%2FQihfx0Pb1MkGu7uXH9eo0s8q2PjYTSEijIOx%2ByToLVQC3JGy4BSSxlzUF3hLlxc5xEQKLCchGLZ92n81AX38xie0MOg%2BOvz3NXT1S0Urw3V1M0KAamECIopl1%2BBMxYxAA2%2B6AgPE34G8oIhtg6dJ5ohDxzIOJE0kCHUjHc%2F9zltDcj1afh9a26YUAzRnqOLF2NQ7SDhQnmASAsFAOwvFJtnwbnQT6Ta7eTGRrHS3CMzXGYaRGWj76kYFj7Syhr%2F4cVOONBEeDmX7%2BaDlWRcl1pp%2BAtin0FzV4MeHfUEKwkfEFHqAcNn0s3753SHZ4W%2Bw9Jx9BOv%2B%2FSqep2rKsA0eNb9cGlCxkMqvtM2nXO%2FtJGCQRV%2BxfCV0YMK%2FHs0Ag8oQKhfa8eMPr12sEGOqUBhxezwsJqI5u1IsUF0uRDQs0%2FegaHD2mfllZbrvXx8oB47Usc07q%2BOvgUqZf9pGcjDIFPR2B8gFQyB3qRoXRR8hX0xb4wYyzUTkLkMsdtRecpXcpxY%2Bq9SfDuF6pBsvUg3Lvp%2FfUISkblp45jEL6afT0f2HVxmR9ARigw%2Bb63cHs3mDNu1ENTzsGOiRP8VieZcUhuTqbWGXs3g9RD9NAneDiEqbrl&X-Amz-Signature=ac5dfedc6e409189329a45e2e5f78b33241491651e655e992e96f0b5be976d46&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ3V2UTT%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDgwDJR6vvBguJ3venYInqx7gBE%2FpABSfUrLibeGH83AIgCInTmsK4l4ySh7ib7dgQ5kUAfzJgwUgL35q%2FxEpUH%2FQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDFnh5d%2Bkb4eScinUUircA1SHRK5B%2BiobkHHjjhppb%2BqtPrstYak5%2B0YvGGxqtJIWDl1E7McSU1IAZCjj9gHUlNaL9run0D2DUF9F4nVFng3hzMsXH3hiFtJfKI3KFowjkG0%2Bru1NJnEyWzVSeuS8i1B0OkibB3muhy1dykTqo8okGlW5Q5dZP1ALCNwjTa29Eq2RjunuLLkEDctD8gNe3U%2BdJxZQDgk0FW9c9nkOZ3DM6I4tWDVvxbJKO8nBrSphJZK9CIWv2%2FQihfx0Pb1MkGu7uXH9eo0s8q2PjYTSEijIOx%2ByToLVQC3JGy4BSSxlzUF3hLlxc5xEQKLCchGLZ92n81AX38xie0MOg%2BOvz3NXT1S0Urw3V1M0KAamECIopl1%2BBMxYxAA2%2B6AgPE34G8oIhtg6dJ5ohDxzIOJE0kCHUjHc%2F9zltDcj1afh9a26YUAzRnqOLF2NQ7SDhQnmASAsFAOwvFJtnwbnQT6Ta7eTGRrHS3CMzXGYaRGWj76kYFj7Syhr%2F4cVOONBEeDmX7%2BaDlWRcl1pp%2BAtin0FzV4MeHfUEKwkfEFHqAcNn0s3753SHZ4W%2Bw9Jx9BOv%2B%2FSqep2rKsA0eNb9cGlCxkMqvtM2nXO%2FtJGCQRV%2BxfCV0YMK%2FHs0Ag8oQKhfa8eMPr12sEGOqUBhxezwsJqI5u1IsUF0uRDQs0%2FegaHD2mfllZbrvXx8oB47Usc07q%2BOvgUqZf9pGcjDIFPR2B8gFQyB3qRoXRR8hX0xb4wYyzUTkLkMsdtRecpXcpxY%2Bq9SfDuF6pBsvUg3Lvp%2FfUISkblp45jEL6afT0f2HVxmR9ARigw%2Bb63cHs3mDNu1ENTzsGOiRP8VieZcUhuTqbWGXs3g9RD9NAneDiEqbrl&X-Amz-Signature=bf359c5261a63b00a09e4b239641f46d32df0983532565f076019e77487e88c7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
