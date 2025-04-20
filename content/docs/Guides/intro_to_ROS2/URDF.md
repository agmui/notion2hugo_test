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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7SCZTHZ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIAu0uGONYaSPCV7J1%2BDALB%2BLzgCKSSAPBLQaFb9vR6qkAiA%2B3VJ13mCkJEamIKBGe2oXse2CavzD9PFPadgtXwt5wyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfdrUuSffhv7eO4X5KtwDmwUSPeCkV97VxaVhWC7GF6E%2FAx6rw6Wu%2Fv9wfadXLuWtG%2BD8TiwvABRJ67htjlRcy%2F4gkUp04vo%2BhQYSgDW1Ka6eFZofFwlzzuxnvdGsP5kawAALsWvm2f5lJpjhy5fRMbMXAFKWGCMIT8lv4rDMlPSls54J3RZ6vFUyDw1kMiBBbqb1Skd2DssUV%2Fy%2By7TAEd5%2FU%2FqcuMIdUpXLmfhYKsAh2T%2FqHIxZnsflvsQ6%2FiIWHOe8BNBi3QIuKuF4nnallGaA7ciPDuLuTHLIOZsh8tSZ9jpRXGekaWSgP44RrjO1wAjcr8YZbzcK%2Fg%2BN2PaJN%2Bdl1tRkBmFLB0B0lxN7LU3R8AYebX4QNgs64CGTlo7JSsu4wCE5v6%2B%2FEn%2FQ2JzRt5yIt3na25hjbsUHlWPf2Ui4McVO7ldGpWvV%2FUJAy%2FuMC7h4I5q8O7jHGH8nfUETnWmX7RzD6L8yZf%2FqDtpR7bpRXmptr%2Fa9b8QfTEdJ9SH%2FFMwmYLmdBEkHBD%2B%2FEOoKZGtd12imzA5Aq7Qe6QT2GjtVYTv0b6XJyzm3MiVepEWs6rG6Sao1RWmUkZZiuWmWhG5skM94Rn%2FnLqnNSXu%2BXt4iK581pIlbAMyPmL2YP4GPGhpSPSk%2FIhPGZHQwmJOVwAY6pgErSe67R%2Fqi8%2FwHXKjPiHjZdXXxXcCt1O3aw6uHp9iYePsq%2F3hvwlCA2nc8KA%2ByZ5CTrZKiqnnJue6ylDTlMimStrrLYoUBcQLIpYQxtZHGum7lJDfHz4WsJ%2FbE4mvdRw2sCmHr%2B%2BcGNhr2SlMbs9WwHAaZ1srItSAUPKiMJ%2FwXVCyP0OTnW0pcqMHpixGfyGcJ8nM3c28pWY66AU94rAaWlDb7EHBr&X-Amz-Signature=aa024ebfaa4729338b48333368a7398964b2f0f93c2b3eca061894fedf8b3b44&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7SCZTHZ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIAu0uGONYaSPCV7J1%2BDALB%2BLzgCKSSAPBLQaFb9vR6qkAiA%2B3VJ13mCkJEamIKBGe2oXse2CavzD9PFPadgtXwt5wyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfdrUuSffhv7eO4X5KtwDmwUSPeCkV97VxaVhWC7GF6E%2FAx6rw6Wu%2Fv9wfadXLuWtG%2BD8TiwvABRJ67htjlRcy%2F4gkUp04vo%2BhQYSgDW1Ka6eFZofFwlzzuxnvdGsP5kawAALsWvm2f5lJpjhy5fRMbMXAFKWGCMIT8lv4rDMlPSls54J3RZ6vFUyDw1kMiBBbqb1Skd2DssUV%2Fy%2By7TAEd5%2FU%2FqcuMIdUpXLmfhYKsAh2T%2FqHIxZnsflvsQ6%2FiIWHOe8BNBi3QIuKuF4nnallGaA7ciPDuLuTHLIOZsh8tSZ9jpRXGekaWSgP44RrjO1wAjcr8YZbzcK%2Fg%2BN2PaJN%2Bdl1tRkBmFLB0B0lxN7LU3R8AYebX4QNgs64CGTlo7JSsu4wCE5v6%2B%2FEn%2FQ2JzRt5yIt3na25hjbsUHlWPf2Ui4McVO7ldGpWvV%2FUJAy%2FuMC7h4I5q8O7jHGH8nfUETnWmX7RzD6L8yZf%2FqDtpR7bpRXmptr%2Fa9b8QfTEdJ9SH%2FFMwmYLmdBEkHBD%2B%2FEOoKZGtd12imzA5Aq7Qe6QT2GjtVYTv0b6XJyzm3MiVepEWs6rG6Sao1RWmUkZZiuWmWhG5skM94Rn%2FnLqnNSXu%2BXt4iK581pIlbAMyPmL2YP4GPGhpSPSk%2FIhPGZHQwmJOVwAY6pgErSe67R%2Fqi8%2FwHXKjPiHjZdXXxXcCt1O3aw6uHp9iYePsq%2F3hvwlCA2nc8KA%2ByZ5CTrZKiqnnJue6ylDTlMimStrrLYoUBcQLIpYQxtZHGum7lJDfHz4WsJ%2FbE4mvdRw2sCmHr%2B%2BcGNhr2SlMbs9WwHAaZ1srItSAUPKiMJ%2FwXVCyP0OTnW0pcqMHpixGfyGcJ8nM3c28pWY66AU94rAaWlDb7EHBr&X-Amz-Signature=c87f9dc57a338fe24608f00cc31698012e69c0a83580945f4e8e20e2cfc657d0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
