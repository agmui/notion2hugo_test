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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645JZXVOQ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2%2FcJBuESW9rh8AXPkvjdyXTTlD%2FbZOnsoNJExMAbTkwIhANOqgh3xJeyBJjj8TuGlw3%2B3N1gD5R9Bu3Yt6yIqo0IBKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxuju%2FgfON1bhX%2FoTsq3AOlBbV8X16t%2B55Sku%2BzUyesDb9AbpSdmfkvuU4tO5tHg%2B%2BqcWGifiFHIZPV75ZbyFMTLvqwVMLkZSG5YKQf2xMnR6RERbqyuxKar70sjKf%2FnuVS%2BY6lyqF6H%2FJIjIir0MQpx7LCJgkrcEzQRjENMmh3aejfJ0igM%2F9z5RedaADXbGiLzpsDWfE8w5FIlLGTmlRn1cve6mvw7lRHcgh52leUPCHhxqToCdHiA3iVIuskf8Es8DUbcxMLEyutS%2FOco501S1z1NQUiv0difqZ4anNw7BSxtXCjsx%2Fut%2Ffq3EsaedBkb9BSEAYTByEHnAHmVNFf3od3Enf3zGfM0Q8GHo3HJ0zBPiDNAlQPsxTHxDsB2YD3qkNUdtib3osNxVBVHUJlB2GXtkKUZXj4zAjU8kl7uEv1kCUMnjVPHSxN%2BMtHOjbD5bjlTlZQqFG8GEGT8fWZo%2FhAXzLrnqSnZBUttAR0eBdJjxVmosLo37JaY5tq37sY4Fl1%2FhACqdx2trtQ25J3sS2vv35A3dZD4t%2F%2FDKa6RVE0xJDb1hm2RIBXT%2FWeHk7fngrX00jUhoFSXDH9VbZJOS%2FqWiRG%2FffEcGQVJ3YTtuOF%2Fp9flhtknqE2jSWCCNXtIl1W2XLXFnISTjDGppXCBjqkAZi00MgDRZ3EVGEtkbiYSJgYBIcrMjujkk6eOTIYE2y14AnhVl%2FXCxdDXvQbpZGcD52GW3aI6uRwIPFRq%2FcM9jIW%2FTvDjDLY1MFgZPG76EQAaHAltLl54lZpxhbycHlkI3davjsfJj4oN5BJXEL7nAHAw8%2FY3I6qNO6sTNDUDtdIBW8eZq%2FwAHXokNZdvufm9%2Fw74nM9V1r57dEWDP1QZ7qsZEns&X-Amz-Signature=fa2f4383d589f3e800d5cd655f1d4d81b892512489ce2e9be7718b39225bb1fd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645JZXVOQ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2%2FcJBuESW9rh8AXPkvjdyXTTlD%2FbZOnsoNJExMAbTkwIhANOqgh3xJeyBJjj8TuGlw3%2B3N1gD5R9Bu3Yt6yIqo0IBKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxuju%2FgfON1bhX%2FoTsq3AOlBbV8X16t%2B55Sku%2BzUyesDb9AbpSdmfkvuU4tO5tHg%2B%2BqcWGifiFHIZPV75ZbyFMTLvqwVMLkZSG5YKQf2xMnR6RERbqyuxKar70sjKf%2FnuVS%2BY6lyqF6H%2FJIjIir0MQpx7LCJgkrcEzQRjENMmh3aejfJ0igM%2F9z5RedaADXbGiLzpsDWfE8w5FIlLGTmlRn1cve6mvw7lRHcgh52leUPCHhxqToCdHiA3iVIuskf8Es8DUbcxMLEyutS%2FOco501S1z1NQUiv0difqZ4anNw7BSxtXCjsx%2Fut%2Ffq3EsaedBkb9BSEAYTByEHnAHmVNFf3od3Enf3zGfM0Q8GHo3HJ0zBPiDNAlQPsxTHxDsB2YD3qkNUdtib3osNxVBVHUJlB2GXtkKUZXj4zAjU8kl7uEv1kCUMnjVPHSxN%2BMtHOjbD5bjlTlZQqFG8GEGT8fWZo%2FhAXzLrnqSnZBUttAR0eBdJjxVmosLo37JaY5tq37sY4Fl1%2FhACqdx2trtQ25J3sS2vv35A3dZD4t%2F%2FDKa6RVE0xJDb1hm2RIBXT%2FWeHk7fngrX00jUhoFSXDH9VbZJOS%2FqWiRG%2FffEcGQVJ3YTtuOF%2Fp9flhtknqE2jSWCCNXtIl1W2XLXFnISTjDGppXCBjqkAZi00MgDRZ3EVGEtkbiYSJgYBIcrMjujkk6eOTIYE2y14AnhVl%2FXCxdDXvQbpZGcD52GW3aI6uRwIPFRq%2FcM9jIW%2FTvDjDLY1MFgZPG76EQAaHAltLl54lZpxhbycHlkI3davjsfJj4oN5BJXEL7nAHAw8%2FY3I6qNO6sTNDUDtdIBW8eZq%2FwAHXokNZdvufm9%2Fw74nM9V1r57dEWDP1QZ7qsZEns&X-Amz-Signature=47656f2cdd1b0b353eeea9b6825b359477850c24d472390fcf7c7eae98282139&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
