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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAZEJIQQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAep4PmOKfJEmQs9c8IFdZLYSl%2BL%2B2tbq4oQUW%2B1FEeTAiEA1HQ0%2FRPTb9P0naskEvQagIxHRM9MYMGYa9oOVN5mvDwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsol4bfDxMpbu67UCrcA1bjXmwbyHa7b%2BHUIJ%2BuUkpbvH6zew9SYrBNaN2mbxmUBbpA0xBSQlqx6etCuD0EcAVn%2BCvANTI1ylyvjPdL%2BuDtmYmDYSO%2FlZnGlW2%2Fw3tFqHYE8faprgC2WDUzqYOBj6Cd2RKz8iyYgEEgyt%2FM260mIqZan1cUzjlyuzO8fuFU1ORm8fd57JXWa1DSnsabKaC4sX7oFeueQZb9iE1YGLyg2IQ0ieyXOXefiTTLftGnkSIRh3Y3yahRNfQ90XcBGvkkKTAa998F1RNGWSUmwgc032btg0PZOMaevZSBKkYXme6MrLhtMF6j6rDpx1dShqwM4tHx3LotVIAFNH%2FJqWWOEGWUpoWcCc3uw3YjkJZn3ti0RbOApeScR1Nl11xUJVrEiuxRQ%2FMVR50NJIesMEiK9TbTY3be%2BE8GnvA%2BID3DzsrNj%2Fw9VRejXRc5ncJ445Japp22qs1cOCX1BJrf6OIlJA%2Fi9I3O5KM7NfCcDzwHi7cd0eYohFpXs9QqHxPnC1iOYbQ%2BVRFZ%2BMdIELpZsksVqCjDb1hdex05%2BW1Guai2UKQX%2FuLrOFJULkibYPMYKNqLf8c3YtKMHwmL%2Fa1JI4AE81NwP1Ucy2MgGUosilP8L43nfFhVWMYTAPRuMIC4rsQGOqUBPYtFZ%2FALzC6WW4BceyVAz3zTdWMb8IUFFXnm77eTXExROHun%2Fm2GF615fwC1STfNAgrQvhc4P0nrbncLEdYc97mUS3gl3K6BBpjXrrdoT0MHU5xKDq3B927w3fHunMHxukCMxYNJKtWIb%2BKpdoz%2FmrPBXCYFQA%2Fi%2FnsWN%2Fpp0kUrxy15NWKgMzfNzxGBtwStH28hErQBAJ27aYlAzjD%2F0bis7%2Fg%2B&X-Amz-Signature=000e1f0ec54235dde627a997deba34c7b766ef8279c33c52773256cc55152ee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAZEJIQQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAep4PmOKfJEmQs9c8IFdZLYSl%2BL%2B2tbq4oQUW%2B1FEeTAiEA1HQ0%2FRPTb9P0naskEvQagIxHRM9MYMGYa9oOVN5mvDwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsol4bfDxMpbu67UCrcA1bjXmwbyHa7b%2BHUIJ%2BuUkpbvH6zew9SYrBNaN2mbxmUBbpA0xBSQlqx6etCuD0EcAVn%2BCvANTI1ylyvjPdL%2BuDtmYmDYSO%2FlZnGlW2%2Fw3tFqHYE8faprgC2WDUzqYOBj6Cd2RKz8iyYgEEgyt%2FM260mIqZan1cUzjlyuzO8fuFU1ORm8fd57JXWa1DSnsabKaC4sX7oFeueQZb9iE1YGLyg2IQ0ieyXOXefiTTLftGnkSIRh3Y3yahRNfQ90XcBGvkkKTAa998F1RNGWSUmwgc032btg0PZOMaevZSBKkYXme6MrLhtMF6j6rDpx1dShqwM4tHx3LotVIAFNH%2FJqWWOEGWUpoWcCc3uw3YjkJZn3ti0RbOApeScR1Nl11xUJVrEiuxRQ%2FMVR50NJIesMEiK9TbTY3be%2BE8GnvA%2BID3DzsrNj%2Fw9VRejXRc5ncJ445Japp22qs1cOCX1BJrf6OIlJA%2Fi9I3O5KM7NfCcDzwHi7cd0eYohFpXs9QqHxPnC1iOYbQ%2BVRFZ%2BMdIELpZsksVqCjDb1hdex05%2BW1Guai2UKQX%2FuLrOFJULkibYPMYKNqLf8c3YtKMHwmL%2Fa1JI4AE81NwP1Ucy2MgGUosilP8L43nfFhVWMYTAPRuMIC4rsQGOqUBPYtFZ%2FALzC6WW4BceyVAz3zTdWMb8IUFFXnm77eTXExROHun%2Fm2GF615fwC1STfNAgrQvhc4P0nrbncLEdYc97mUS3gl3K6BBpjXrrdoT0MHU5xKDq3B927w3fHunMHxukCMxYNJKtWIb%2BKpdoz%2FmrPBXCYFQA%2Fi%2FnsWN%2Fpp0kUrxy15NWKgMzfNzxGBtwStH28hErQBAJ27aYlAzjD%2F0bis7%2Fg%2B&X-Amz-Signature=88580fe55a92032c4a662186b2e39b1cdceec90dab3827bc4a5934f575603331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
