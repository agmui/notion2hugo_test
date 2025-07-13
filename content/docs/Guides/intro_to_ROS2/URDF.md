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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LKQHPHM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIFhkqtgD7PU6gfxzXkGAnI8dXxU%2BI7mEymfnUy8q%2F0%2BuAiBf8Do1e0cDzKfIlbF284BGNnv1SXim1bYbMLhJIXQ12ir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMCnLl9sVaPvM%2FU7gBKtwDBIfh575LxtNVqCkPtMDVmve%2ByRzA%2Bb6CtxTtpNpYb%2BRG%2Ffn7TjLbov3D0A6I8eFKNxK%2FJZZP8RzuuSRofL5EouMGJNQ8kxPzxayj0p75eaEyaEZuvePg%2BxlFI90waLgL9rEOJ3rqaJhnaamUOCLA7eD7xPHuGz7G01Imw6BIB6LPiw1zXggiZcB76dZ58oG91ChfNVdS4phoggdNPWJVF7sz7k9h5vBQjGvfgK%2FcLidr2fJvKCdATvSTCaztVq%2FJ8vH9CgZ13ocql5qgo5x1zxvQHklNnZtG1sxX1KDp1cWdHZHD2ravceGLii%2BvA8dKIFgphvrilHIHdhrnOcwMy9tL49n4NNnXPcwErkuBQWB1AiX4YPazjyLLxhNU5b75JDMzJs7KU0tS2RA99HtWu%2F6mYO3nHIRDYn%2F22xJbYuuV4h6hUiu%2B78P5PMdRdNK7AvuRa8gL7xVPPT2Va0esIO74Zk2siCG5IwHZdqPDDQT9dfmzs7girF79Vj4%2FJM0nHBcqq%2BNloQa6pQhVqfOaB%2B1TTM9IeGQCipFiyebajRVY5QFLr5WHm4wKJpkJvAHM7ITtLAKsmJ3cveQt%2F1C3dKKLwRg8RXbDj9cCyWwo3Nm%2BBEpzH01aSrKgWowwnJDQwwY6pgEFV7BU8FG77Ot1GgvrFOJgY03%2FGSGrHGmpTRnz2LDFjc5vEGO4Hj9kaCbhGNMsnPqPzAIRr3y9%2F%2Fw%2BU46WfI6R3TupkROoCF5V9npoyWQTDfZqsmaxNzUzzSsfOaKNfWeUO%2BtzI11d33kYE30S%2FSzcyF4S%2BwX6i0RE6nRCppm%2F5IimRQPA1wAkyjlHSVjXbZlpNU0G%2FQMAPKhMhe%2B%2BcHc6GJVvpYsX&X-Amz-Signature=18ca31cc8df5c1714a47a3e5fad3b400f2f5c9d5bca1a710b1e508a5b8f24a71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LKQHPHM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIFhkqtgD7PU6gfxzXkGAnI8dXxU%2BI7mEymfnUy8q%2F0%2BuAiBf8Do1e0cDzKfIlbF284BGNnv1SXim1bYbMLhJIXQ12ir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMCnLl9sVaPvM%2FU7gBKtwDBIfh575LxtNVqCkPtMDVmve%2ByRzA%2Bb6CtxTtpNpYb%2BRG%2Ffn7TjLbov3D0A6I8eFKNxK%2FJZZP8RzuuSRofL5EouMGJNQ8kxPzxayj0p75eaEyaEZuvePg%2BxlFI90waLgL9rEOJ3rqaJhnaamUOCLA7eD7xPHuGz7G01Imw6BIB6LPiw1zXggiZcB76dZ58oG91ChfNVdS4phoggdNPWJVF7sz7k9h5vBQjGvfgK%2FcLidr2fJvKCdATvSTCaztVq%2FJ8vH9CgZ13ocql5qgo5x1zxvQHklNnZtG1sxX1KDp1cWdHZHD2ravceGLii%2BvA8dKIFgphvrilHIHdhrnOcwMy9tL49n4NNnXPcwErkuBQWB1AiX4YPazjyLLxhNU5b75JDMzJs7KU0tS2RA99HtWu%2F6mYO3nHIRDYn%2F22xJbYuuV4h6hUiu%2B78P5PMdRdNK7AvuRa8gL7xVPPT2Va0esIO74Zk2siCG5IwHZdqPDDQT9dfmzs7girF79Vj4%2FJM0nHBcqq%2BNloQa6pQhVqfOaB%2B1TTM9IeGQCipFiyebajRVY5QFLr5WHm4wKJpkJvAHM7ITtLAKsmJ3cveQt%2F1C3dKKLwRg8RXbDj9cCyWwo3Nm%2BBEpzH01aSrKgWowwnJDQwwY6pgEFV7BU8FG77Ot1GgvrFOJgY03%2FGSGrHGmpTRnz2LDFjc5vEGO4Hj9kaCbhGNMsnPqPzAIRr3y9%2F%2Fw%2BU46WfI6R3TupkROoCF5V9npoyWQTDfZqsmaxNzUzzSsfOaKNfWeUO%2BtzI11d33kYE30S%2FSzcyF4S%2BwX6i0RE6nRCppm%2F5IimRQPA1wAkyjlHSVjXbZlpNU0G%2FQMAPKhMhe%2B%2BcHc6GJVvpYsX&X-Amz-Signature=1aa9fc91acbbaff6656b5fc17aa88be44f0f245e8c684b5df91fe8534d9becb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
