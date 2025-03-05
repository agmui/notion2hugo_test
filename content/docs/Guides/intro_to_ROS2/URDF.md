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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTFKY2EC%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMv1mxqr1QZ5r7hTsBg0dZM0JDQE2LCfSKuee8lzeCkAiAMAQmGnfAS0WcBCkKpbOwZX4gwywJlRGuDLE3l%2BxvW3Cr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMxn4W5bEWYTryD9DHKtwDnq1TCVL2qTJuMXcmM3XDmO34QwZ0plwWRcRKpMjIeUYo4Vao0%2F5NcA6cqY%2By4U%2F3zOJE6ibbr0hyQC4XJb1QhIClX4NNoYgOQJWtj49K4k0jTLqlebxKOfmrhi66lgUZNYej7pb0HChaA1on4TluyHukiUP5MFZnbj8ytjn9GR%2BjCTlnkrh9RiEVmZOinzGC5y1qOPj%2BPbNVIu2BLgIPFuFnDABVprGfYVaXwXvJVIvwKIbQWCGPpTz9M%2FNIbj2uikDIfXnqFVepVAtXjltd44NylnkxkanqcUNCoXtVIiB8A0CgSLvfqokCelDDcXoWbdvrmO8EP5erMikWgraVSVaM6c7qQCKNi3nIco8O3voQMwGC2%2FfZKOqu7OAidnTG%2FT%2FBm4w7oiP3XyAQt5XoRej8LEhZ0Hoehc2NMxZ97aGgkGXM4x1vmyR%2BSiFkn6xUIsDlmX0VgoLvneXH0VmoS7WQrydBskZh16wemKs09JC3S2IV4WMx%2F4AVdQptGDW4P9pVSi0zfYvgfRwDN%2Bx3Sq%2BbdyhLMOHoKtKlkcnZSByn0FAVHq9JCfp8%2Bb%2F33VMf2vlYSRmHUg%2BtwWgZ66PQZ%2Bt05DIiRX5hcgESfp0kcX%2FpafWY7DbZwczcT2cwp%2BqfvgY6pgGdaBNYkRbJgIp5L%2Fmoi93gZD1DeS%2BYepEB3ZTF8%2FfJ42LQuFOcrzvcngieCgZF5DlSDNBEETDMtaS%2FiWz1s2v1dmuCpJsNS%2FjRmYzbf1bUc516FmaWdXk3ckvUeBmXvOqKICRLJo85mP1urIXmTb%2F8ADZTRD1utX6TuivKiW6qah5QVtUxU9sAiRMmSfd%2F8A32sQrAoyzb9o%2B3%2F7rQkHFei59dXGgJ&X-Amz-Signature=256bd5b4e1ae9df95f9d682532d9f8ed3d2ed13fc9763d3929ed7cb9e7dd1907&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTFKY2EC%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMv1mxqr1QZ5r7hTsBg0dZM0JDQE2LCfSKuee8lzeCkAiAMAQmGnfAS0WcBCkKpbOwZX4gwywJlRGuDLE3l%2BxvW3Cr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMxn4W5bEWYTryD9DHKtwDnq1TCVL2qTJuMXcmM3XDmO34QwZ0plwWRcRKpMjIeUYo4Vao0%2F5NcA6cqY%2By4U%2F3zOJE6ibbr0hyQC4XJb1QhIClX4NNoYgOQJWtj49K4k0jTLqlebxKOfmrhi66lgUZNYej7pb0HChaA1on4TluyHukiUP5MFZnbj8ytjn9GR%2BjCTlnkrh9RiEVmZOinzGC5y1qOPj%2BPbNVIu2BLgIPFuFnDABVprGfYVaXwXvJVIvwKIbQWCGPpTz9M%2FNIbj2uikDIfXnqFVepVAtXjltd44NylnkxkanqcUNCoXtVIiB8A0CgSLvfqokCelDDcXoWbdvrmO8EP5erMikWgraVSVaM6c7qQCKNi3nIco8O3voQMwGC2%2FfZKOqu7OAidnTG%2FT%2FBm4w7oiP3XyAQt5XoRej8LEhZ0Hoehc2NMxZ97aGgkGXM4x1vmyR%2BSiFkn6xUIsDlmX0VgoLvneXH0VmoS7WQrydBskZh16wemKs09JC3S2IV4WMx%2F4AVdQptGDW4P9pVSi0zfYvgfRwDN%2Bx3Sq%2BbdyhLMOHoKtKlkcnZSByn0FAVHq9JCfp8%2Bb%2F33VMf2vlYSRmHUg%2BtwWgZ66PQZ%2Bt05DIiRX5hcgESfp0kcX%2FpafWY7DbZwczcT2cwp%2BqfvgY6pgGdaBNYkRbJgIp5L%2Fmoi93gZD1DeS%2BYepEB3ZTF8%2FfJ42LQuFOcrzvcngieCgZF5DlSDNBEETDMtaS%2FiWz1s2v1dmuCpJsNS%2FjRmYzbf1bUc516FmaWdXk3ckvUeBmXvOqKICRLJo85mP1urIXmTb%2F8ADZTRD1utX6TuivKiW6qah5QVtUxU9sAiRMmSfd%2F8A32sQrAoyzb9o%2B3%2F7rQkHFei59dXGgJ&X-Amz-Signature=46e3366ccb23b63dd4785dab87b2905010532dd8466e6c462556a2deed01695e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
