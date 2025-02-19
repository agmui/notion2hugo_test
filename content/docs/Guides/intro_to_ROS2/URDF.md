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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGUDVXHX%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJy4X9OJOkIOE0x%2Fu%2FADJFKMoMAJhgPTP4KLYKfA%2FNpAiA2BMvhQd90n9lQhdtHGaeZr57rU9WuBeV9iqpZTzgFziqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8sitca2vuQfJ%2FppgKtwD3IiYVg2Xk4UbMaPhjGA28q43zVS1ND0K%2F4ahb4cz3JMEMLutHvrr3wFLrqZbtE8WO0oTpVGC7kTpfm%2FmPuFdiuPhZlrjtudtIrSCvsunRf7TM8bgNZ6%2FTae8BeKqXQypI21GgDwK5U1xtxkJXqngITGWWFm3sBKpkPPd80cbfVQBBRBONzylDRLnOJYfLoJzD02uBLsvaA2Y6ybRB9NacsakpkA%2BEAK7uNoPvug6J2Smol6QUIis8pvzTNR6Sr%2FlazEFq9qtquA04K6dYBQK0wREbDBVl5dQ6j4BY2cCmhdJ5kQUNJpKbCk4F8xda4wLY4ywQzyCyOoKzH72eep9SKZ0f01Ki1siSKFscQoT2D7SITz%2BBHlvUjZmf9VAimoE3AKvXuD6Y2Oet5vg3P9z2aTTmXcjQgkAInPXK%2BB7nWfaWogA9UrKjHo7Gra0drBqyvpkoyqAp5NrZn9go8zhDjU8iM8oI7sAA72f5KGpUYQuCTray%2BtzCV5JUPgJEqeDISRI2CcpwtgXxyXpChO8%2F9Z6uI9up%2FIDEe1qQ6%2FvOSpxShkfyf7GR7oaiBpEC%2FmYsLrqj4mNU8tRwp6RMht8f0yvCBlVzVNP8%2FbKHf51zgo1BGxixPcfpqQ71Oow9%2B7YvQY6pgG48V%2BxF7fjHiwbms3E%2Fn8u%2Fi7V8J5SCt3XFWDZau4FY31njIpEfmEatwcANs8tEWBxSKSJBv%2FlJtq00C4y%2BgTLmGbossx%2BH3lw7yKc6M0%2B8VDbHiPC%2BkvuGIy3Q%2BVI8hlvkmorsb%2B9QYuMmXsLKtmy%2FMi0RzlvKkDzJxeB7oe1sy7H5jaAMbpiBQakJszDlaqhadWeg4RRJLwf6%2FddBJisZI%2B77wPH&X-Amz-Signature=474370dba7aa996ce503736951389484fb8943db42e78f25d0e39d2356a976de&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGUDVXHX%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJy4X9OJOkIOE0x%2Fu%2FADJFKMoMAJhgPTP4KLYKfA%2FNpAiA2BMvhQd90n9lQhdtHGaeZr57rU9WuBeV9iqpZTzgFziqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8sitca2vuQfJ%2FppgKtwD3IiYVg2Xk4UbMaPhjGA28q43zVS1ND0K%2F4ahb4cz3JMEMLutHvrr3wFLrqZbtE8WO0oTpVGC7kTpfm%2FmPuFdiuPhZlrjtudtIrSCvsunRf7TM8bgNZ6%2FTae8BeKqXQypI21GgDwK5U1xtxkJXqngITGWWFm3sBKpkPPd80cbfVQBBRBONzylDRLnOJYfLoJzD02uBLsvaA2Y6ybRB9NacsakpkA%2BEAK7uNoPvug6J2Smol6QUIis8pvzTNR6Sr%2FlazEFq9qtquA04K6dYBQK0wREbDBVl5dQ6j4BY2cCmhdJ5kQUNJpKbCk4F8xda4wLY4ywQzyCyOoKzH72eep9SKZ0f01Ki1siSKFscQoT2D7SITz%2BBHlvUjZmf9VAimoE3AKvXuD6Y2Oet5vg3P9z2aTTmXcjQgkAInPXK%2BB7nWfaWogA9UrKjHo7Gra0drBqyvpkoyqAp5NrZn9go8zhDjU8iM8oI7sAA72f5KGpUYQuCTray%2BtzCV5JUPgJEqeDISRI2CcpwtgXxyXpChO8%2F9Z6uI9up%2FIDEe1qQ6%2FvOSpxShkfyf7GR7oaiBpEC%2FmYsLrqj4mNU8tRwp6RMht8f0yvCBlVzVNP8%2FbKHf51zgo1BGxixPcfpqQ71Oow9%2B7YvQY6pgG48V%2BxF7fjHiwbms3E%2Fn8u%2Fi7V8J5SCt3XFWDZau4FY31njIpEfmEatwcANs8tEWBxSKSJBv%2FlJtq00C4y%2BgTLmGbossx%2BH3lw7yKc6M0%2B8VDbHiPC%2BkvuGIy3Q%2BVI8hlvkmorsb%2B9QYuMmXsLKtmy%2FMi0RzlvKkDzJxeB7oe1sy7H5jaAMbpiBQakJszDlaqhadWeg4RRJLwf6%2FddBJisZI%2B77wPH&X-Amz-Signature=8ad31da8130905962074693c724ae1feddabed2d320d7da7098e496664c4742d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
