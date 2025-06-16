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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633GOGG5P%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIDI26aICHiDnYI%2BE5E8d15kl%2FCZLelc4tO2FDp0q4yseAiBSoGWMRDX7ePekI0woCuUBxkf6EXqUrOzG%2FBYCE0Jcyir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM%2BVTuOMRFe71KQcu2KtwDNI2%2BuJITga7sBRbFkhtaZdJU%2BDFzCuY%2FdCuX4vLWJWTVcx7YYI26sr%2FZKoBNehrfm1TCVi9SNJdiZmTNvf6dzad7Hf0O2VKG3wU3SsnN5bDqw8MyDt64AM3u9DGtp0RPhF%2BhSSQQva2B8bdcD7jriMPwHF%2BEXKijD6%2B5aBK667lLy43xMdf4y6Nqm72ZO8wxPejRGvppFjpG%2BnEcV22RCvxoKhII8Je5JTVCLeLaxHoucp%2BdDjUf83%2FcHEe1mIF17XTj8lmN4gVYEKhic0By1ip1Fp%2Bren%2Bp4PA%2FsjsRzaLxDKM6LQnziQfKDRXzXg0DbtrorQC8NPXaWg6V5CNkpNkO1ZX%2F6gQ1GQiNSQYOujY%2BlvbLmusOD%2FJHL%2FzUnmexcX1FCr3zUwYw%2Ba9AH8tFdQheoTrrQaZY7%2FEq%2BI5%2B9HawJi5KnsyWVbC5h%2BV5CxPWf6LgAE6gvpgmIW5JdUBXyr9VuyXmxR6edm1iYPQ394FZRxd%2FaU88etf1%2Fqb3gbf3alvJyvdrYidCh7Nkur1pKUo4e51rHliTmw2%2FYkGi3tCG9NUqmrvmcHH3gD9uSmeamm3G6df7QoQAhw0fCv8Xw54bNOhF32EElnl1XKfBo%2B6wYqXVuUCMZIBW0Eowi47CwgY6pgHZgFOz5Jnmbj%2FwjlDzrNbc5pqB23hJU%2BBUAVgQ2S2%2FDMI81DiLsxHeSuZIa7iVQ88ewRaMCIjkR20YkS2VgqCV5LSENkMju8HfY%2Fb3MPpvEZNozdx8NsFtux6dHbLwqTwmuFsshJNo1zPyu9RZ18PpP%2FJTOPPppsYctP48jHk8PoNsIYDpQ7pO3mH44t4wyZV8qva129QFigd7bFgjSvRcxbzp5zFj&X-Amz-Signature=c713d9caa890401f1003c040f6273548d013a2d95d1f6724cb775f767009adb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633GOGG5P%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIDI26aICHiDnYI%2BE5E8d15kl%2FCZLelc4tO2FDp0q4yseAiBSoGWMRDX7ePekI0woCuUBxkf6EXqUrOzG%2FBYCE0Jcyir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM%2BVTuOMRFe71KQcu2KtwDNI2%2BuJITga7sBRbFkhtaZdJU%2BDFzCuY%2FdCuX4vLWJWTVcx7YYI26sr%2FZKoBNehrfm1TCVi9SNJdiZmTNvf6dzad7Hf0O2VKG3wU3SsnN5bDqw8MyDt64AM3u9DGtp0RPhF%2BhSSQQva2B8bdcD7jriMPwHF%2BEXKijD6%2B5aBK667lLy43xMdf4y6Nqm72ZO8wxPejRGvppFjpG%2BnEcV22RCvxoKhII8Je5JTVCLeLaxHoucp%2BdDjUf83%2FcHEe1mIF17XTj8lmN4gVYEKhic0By1ip1Fp%2Bren%2Bp4PA%2FsjsRzaLxDKM6LQnziQfKDRXzXg0DbtrorQC8NPXaWg6V5CNkpNkO1ZX%2F6gQ1GQiNSQYOujY%2BlvbLmusOD%2FJHL%2FzUnmexcX1FCr3zUwYw%2Ba9AH8tFdQheoTrrQaZY7%2FEq%2BI5%2B9HawJi5KnsyWVbC5h%2BV5CxPWf6LgAE6gvpgmIW5JdUBXyr9VuyXmxR6edm1iYPQ394FZRxd%2FaU88etf1%2Fqb3gbf3alvJyvdrYidCh7Nkur1pKUo4e51rHliTmw2%2FYkGi3tCG9NUqmrvmcHH3gD9uSmeamm3G6df7QoQAhw0fCv8Xw54bNOhF32EElnl1XKfBo%2B6wYqXVuUCMZIBW0Eowi47CwgY6pgHZgFOz5Jnmbj%2FwjlDzrNbc5pqB23hJU%2BBUAVgQ2S2%2FDMI81DiLsxHeSuZIa7iVQ88ewRaMCIjkR20YkS2VgqCV5LSENkMju8HfY%2Fb3MPpvEZNozdx8NsFtux6dHbLwqTwmuFsshJNo1zPyu9RZ18PpP%2FJTOPPppsYctP48jHk8PoNsIYDpQ7pO3mH44t4wyZV8qva129QFigd7bFgjSvRcxbzp5zFj&X-Amz-Signature=0027a90face3baa9f5e0ee1f7c0458203c111b249ebb16fd49cd16226477ed1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
