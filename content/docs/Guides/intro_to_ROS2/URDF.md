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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PXIUEYY%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGq1kmrysyeBTIZU%2B3ewpzsykhCfE81ljlT2q0SYgWg6AiA%2FVZWf3rd1R9T1BhGrcZRtCe8KxuDOiCmos6%2BxT9gnuSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZtF%2ByLr8CQJh790mKtwDy3JWUFlJ%2F4CP1py%2FcGWZbWzQXGALBOwmvEz7xd%2B4JlITcvhGkKvfcnuXiNm4TgP0Ml3V3SLVaUdo6CNvTFeBWh8bpg5rPJk2bPyGXKyr9UwQQgGEhVl372QlR2AqgTMqczkBLr6B8DlK33ircyWq4VszNfdAnNjUAH1AgiHLTovtEfxdcJfaUBqouu5vRlI216D2KSxCJj2Rt4YWMQk5xPq6bjXtMhYCHzNcIVDLad4tdSFPj9hoOhrdlfIZObQYN1DGOeeLxPskMAp23SprHGguL41CDHZKP17fDRHrL1P2YQ7FOKH0hmwTH86m6x%2FK9DmwAcbdlNQVLdhBfA0yPUCJAneQDpxJTMPztJ6QHb%2F%2B20%2Bmkb7imZasJRr1YR8UDozuwlAJHsObxFZ9%2BGzTHhpI1V6U9gqR82%2FjWRqFxqP7kjoaEGwKeiStQDN0VLhmgsGWcSnCcfnobhZslNqKKoK9trZeZu%2BnYk%2FkcltIGBWg%2BgVc6LF%2BTntpN05kWUNeCG3brErWATP7RsUXdzcSPlCWi0Z%2FfcEvKXacnUMrAy0DMWKMOzvbq%2BG%2BJKlTrcFIelj5YnvYEluOPpQDPdBF%2BczmuLcwoL5QAkMPiOt47yJD3gFJPxww9ysWMcgwhd7kwQY6pgGNXLvwjP%2FIRM03dDVSnpdBSfxyTD%2BpcKi9lrohmXTcofGJ2mYEnLBHw62FgN5aBXEqGSBxzBlIQFxmBlk9OEe0Kk%2FKzh8ODVvTc%2BE8RM1jXsTf5wP5ZdZWBj5tYZ0tzJQhqDSotzjKpt7v4Vccmed6trwQWYfAnfDINncMKAe%2BVrx2%2BrP%2BjGlIae22A0JdgRH43RTNC5MoFUP4tFcV0b%2BR0xBZomFC&X-Amz-Signature=41f07d4dd5a51f1a563c0c50439fe02e17ae3b08c2d0cd71129c7573391d4c10&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PXIUEYY%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGq1kmrysyeBTIZU%2B3ewpzsykhCfE81ljlT2q0SYgWg6AiA%2FVZWf3rd1R9T1BhGrcZRtCe8KxuDOiCmos6%2BxT9gnuSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZtF%2ByLr8CQJh790mKtwDy3JWUFlJ%2F4CP1py%2FcGWZbWzQXGALBOwmvEz7xd%2B4JlITcvhGkKvfcnuXiNm4TgP0Ml3V3SLVaUdo6CNvTFeBWh8bpg5rPJk2bPyGXKyr9UwQQgGEhVl372QlR2AqgTMqczkBLr6B8DlK33ircyWq4VszNfdAnNjUAH1AgiHLTovtEfxdcJfaUBqouu5vRlI216D2KSxCJj2Rt4YWMQk5xPq6bjXtMhYCHzNcIVDLad4tdSFPj9hoOhrdlfIZObQYN1DGOeeLxPskMAp23SprHGguL41CDHZKP17fDRHrL1P2YQ7FOKH0hmwTH86m6x%2FK9DmwAcbdlNQVLdhBfA0yPUCJAneQDpxJTMPztJ6QHb%2F%2B20%2Bmkb7imZasJRr1YR8UDozuwlAJHsObxFZ9%2BGzTHhpI1V6U9gqR82%2FjWRqFxqP7kjoaEGwKeiStQDN0VLhmgsGWcSnCcfnobhZslNqKKoK9trZeZu%2BnYk%2FkcltIGBWg%2BgVc6LF%2BTntpN05kWUNeCG3brErWATP7RsUXdzcSPlCWi0Z%2FfcEvKXacnUMrAy0DMWKMOzvbq%2BG%2BJKlTrcFIelj5YnvYEluOPpQDPdBF%2BczmuLcwoL5QAkMPiOt47yJD3gFJPxww9ysWMcgwhd7kwQY6pgGNXLvwjP%2FIRM03dDVSnpdBSfxyTD%2BpcKi9lrohmXTcofGJ2mYEnLBHw62FgN5aBXEqGSBxzBlIQFxmBlk9OEe0Kk%2FKzh8ODVvTc%2BE8RM1jXsTf5wP5ZdZWBj5tYZ0tzJQhqDSotzjKpt7v4Vccmed6trwQWYfAnfDINncMKAe%2BVrx2%2BrP%2BjGlIae22A0JdgRH43RTNC5MoFUP4tFcV0b%2BR0xBZomFC&X-Amz-Signature=1e90c555fdb43b850e8d66b875f01d4b6987ea5278cd039f34356823331c6afb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
