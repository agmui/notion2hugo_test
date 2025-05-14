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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YF7FU6M%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIDcTJf8YjR7vYcCxa6%2B%2F5gFkho7i6OEq8rcT%2FC4FvaKrAiAk0vW6NkIbGtWq9hMQmlFDrKdP2yJh7xUD%2Bx67vbXYnyqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYBiVuSbyNlC3UceIKtwDwSInUIgFXHdbymljFtpC6wbRVVL%2ByzVpLmfYbERnzNMTk%2BsSCEff5CmE9Cxm32qNDRIXQBGDiPT2Pnlhkbd6AvAze8bQeUZZzfskA2SfOOcxGDSI4jsdIYR2BQggFk2qzCDI7owbWdkEs1my0ps5P5lFzIvKqOGpY4Xekp%2B%2F1WWEedM36qyRcyr80Ny4IBhnq2iMDMPyx3S0r2KJlrlmCSGNLmnTq3la9wmeNlzupztzuu2mY0BTC17iAnUwh1pHMbU5g%2FFrQqCavfEbReuOJow4FBD%2FDdKvFubL44AXSqZ5%2B%2FRZcZN3c0Pk4wT%2F4Nt6BxwlXJG%2Fxym8grQQhMSBwTHBHTDrPnZ3oG9jE98HPJLxrzz799RVT%2FMzSgjBRJcLhykChWmSB3urUTcVSlsHQhLFlcKPjIUICmIZjKsazllnT9YMX3BR3LEQjwoq9wi3cKFXHGdIOkUKoYYAofl3Owpn%2Fl2gQASH8PFX32d6nW0X5rv6hW6jAZPgWK%2B%2F26Tx%2BEyVstcPq4fzVPNF82Nyyk9tvQFomFkFwERjlXDxURinH0xUyNOTJt9gmUktqwrwRx358dL9TtQSlG5As%2FWoy56wYTKQrKSUnM9inqAZi3WlIE3iD4DATJ%2FES2Uw9oeQwQY6pgGWWVX%2BFw2GqqHhIIHggridO602AM6n6Pba57%2BNJZOiHtGfAnVmOol9zD6iZUqhNofaXfBjKVzw%2BJ6ncqrUTBe9vQgYtUg78yQGY%2BoKcUdm7OEm9F4OKgsUFuHynsjh33igs1zL2mXPZ4zLXADDYpd%2F0dsPa3esYXkhiVnh0ghTlUbnA67rq%2FBiK65VBD9BHr8%2FpCLmchec%2FoeQK29qd8mmminvkYSN&X-Amz-Signature=9145d44a5869207b42724dfd9c64adc781db9d5711ea62208b852461bbe59045&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YF7FU6M%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIDcTJf8YjR7vYcCxa6%2B%2F5gFkho7i6OEq8rcT%2FC4FvaKrAiAk0vW6NkIbGtWq9hMQmlFDrKdP2yJh7xUD%2Bx67vbXYnyqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYBiVuSbyNlC3UceIKtwDwSInUIgFXHdbymljFtpC6wbRVVL%2ByzVpLmfYbERnzNMTk%2BsSCEff5CmE9Cxm32qNDRIXQBGDiPT2Pnlhkbd6AvAze8bQeUZZzfskA2SfOOcxGDSI4jsdIYR2BQggFk2qzCDI7owbWdkEs1my0ps5P5lFzIvKqOGpY4Xekp%2B%2F1WWEedM36qyRcyr80Ny4IBhnq2iMDMPyx3S0r2KJlrlmCSGNLmnTq3la9wmeNlzupztzuu2mY0BTC17iAnUwh1pHMbU5g%2FFrQqCavfEbReuOJow4FBD%2FDdKvFubL44AXSqZ5%2B%2FRZcZN3c0Pk4wT%2F4Nt6BxwlXJG%2Fxym8grQQhMSBwTHBHTDrPnZ3oG9jE98HPJLxrzz799RVT%2FMzSgjBRJcLhykChWmSB3urUTcVSlsHQhLFlcKPjIUICmIZjKsazllnT9YMX3BR3LEQjwoq9wi3cKFXHGdIOkUKoYYAofl3Owpn%2Fl2gQASH8PFX32d6nW0X5rv6hW6jAZPgWK%2B%2F26Tx%2BEyVstcPq4fzVPNF82Nyyk9tvQFomFkFwERjlXDxURinH0xUyNOTJt9gmUktqwrwRx358dL9TtQSlG5As%2FWoy56wYTKQrKSUnM9inqAZi3WlIE3iD4DATJ%2FES2Uw9oeQwQY6pgGWWVX%2BFw2GqqHhIIHggridO602AM6n6Pba57%2BNJZOiHtGfAnVmOol9zD6iZUqhNofaXfBjKVzw%2BJ6ncqrUTBe9vQgYtUg78yQGY%2BoKcUdm7OEm9F4OKgsUFuHynsjh33igs1zL2mXPZ4zLXADDYpd%2F0dsPa3esYXkhiVnh0ghTlUbnA67rq%2FBiK65VBD9BHr8%2FpCLmchec%2FoeQK29qd8mmminvkYSN&X-Amz-Signature=622c6fe19a5942c429886adc8070e603cf53ff25b94006781ef58bb63d4bea2b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
