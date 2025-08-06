---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIGMBXOM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIEKXxF0WdB7H3PBmbw5l5%2F3TqJONHz8lFTvjnt9ZAveFAiAdGN5JYMyaYVtz8mGzhjyfXCYhqqxNO10Uhh5OXOT3wCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMtvtjKeqJEwG0BJvqKtwD9dqheEKTzypyPybVzQCNF2eA863DE%2Fb%2Bv0Z4Y5uoh8eqDLT44fCxUE5WHQGsAKm0cgJdtxFSgK9qiSOQjvlO3MVMSah2RGP01JlaZcufaGlJqqC6XnvL01gZ%2BWZUPsat5PNgZt234zvpVUhmWo2WwAOOzRwwJaLuQScgjAXNm7xsqWIOsNtkOgbWHgc5MwqTuNf3pGXBbKGhzz29%2BLnmkUsr1Mp%2BDSSzepY7nr3DnEOg%2BEjHihsVWH6x9HXLHg5d%2BPpjoDMIFjfowbiwe087dMNpZHo1UQnGnJsNLH2Wvmarw1QpDmPEImRPXBdDZCTI9DiLrH5%2FOHDsHs4871LTX7rcZS2w6YqpipOb2iD6vMruGv3y79D2IhnfHHVbKvRccCP%2FFSgk4i38d8g0zKlhL8ZeXI0Ed5rjjUn4jyIbbXSergDa67QR4FgzFtukHBaHYzY1W%2FvO71pZgRqLZpOc86Ssupe95ZMCvzTnT%2F%2Bh54%2BPfWy1nJ34olNFuloUwqTQcGiMA6tcTtIS%2BMg94EWBBO8B%2Bck%2BRsSygmlm4lToYuHy%2FOSD283r5JXhlO1IghobksoOoKMcxFnPvjIkRmlV%2F24Yqbq%2BQU3y3b%2FhJv%2BWQaU257O%2BdnWSBVDcR5Aw5vvNxAY6pgHijSxSDHOkjbQp4D9Qvn7kzzThVvzZGJKZ0yPZuJIsJ83RgZ2R%2FFtQxnXShpH0LV0dCrp%2FGxrx4esqbUXEFNishq0UjB1a%2FcYg0x2zbjPNzN8wmAXsKoNTXQ%2BTleQ1SgWueHF4N6t73%2BRY%2F%2BX9at4kQzHa5q33Dy78G4x%2FDoyLXtWX%2FmIZy%2FTg84%2FzWs5VZ%2F9tKXgJtpQxB1C0VAXM8KZwJOnUvlMH&X-Amz-Signature=b715c49622074fba04b76c85757b7669d83476f819051f38c96413616e9645a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIGMBXOM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIEKXxF0WdB7H3PBmbw5l5%2F3TqJONHz8lFTvjnt9ZAveFAiAdGN5JYMyaYVtz8mGzhjyfXCYhqqxNO10Uhh5OXOT3wCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMtvtjKeqJEwG0BJvqKtwD9dqheEKTzypyPybVzQCNF2eA863DE%2Fb%2Bv0Z4Y5uoh8eqDLT44fCxUE5WHQGsAKm0cgJdtxFSgK9qiSOQjvlO3MVMSah2RGP01JlaZcufaGlJqqC6XnvL01gZ%2BWZUPsat5PNgZt234zvpVUhmWo2WwAOOzRwwJaLuQScgjAXNm7xsqWIOsNtkOgbWHgc5MwqTuNf3pGXBbKGhzz29%2BLnmkUsr1Mp%2BDSSzepY7nr3DnEOg%2BEjHihsVWH6x9HXLHg5d%2BPpjoDMIFjfowbiwe087dMNpZHo1UQnGnJsNLH2Wvmarw1QpDmPEImRPXBdDZCTI9DiLrH5%2FOHDsHs4871LTX7rcZS2w6YqpipOb2iD6vMruGv3y79D2IhnfHHVbKvRccCP%2FFSgk4i38d8g0zKlhL8ZeXI0Ed5rjjUn4jyIbbXSergDa67QR4FgzFtukHBaHYzY1W%2FvO71pZgRqLZpOc86Ssupe95ZMCvzTnT%2F%2Bh54%2BPfWy1nJ34olNFuloUwqTQcGiMA6tcTtIS%2BMg94EWBBO8B%2Bck%2BRsSygmlm4lToYuHy%2FOSD283r5JXhlO1IghobksoOoKMcxFnPvjIkRmlV%2F24Yqbq%2BQU3y3b%2FhJv%2BWQaU257O%2BdnWSBVDcR5Aw5vvNxAY6pgHijSxSDHOkjbQp4D9Qvn7kzzThVvzZGJKZ0yPZuJIsJ83RgZ2R%2FFtQxnXShpH0LV0dCrp%2FGxrx4esqbUXEFNishq0UjB1a%2FcYg0x2zbjPNzN8wmAXsKoNTXQ%2BTleQ1SgWueHF4N6t73%2BRY%2F%2BX9at4kQzHa5q33Dy78G4x%2FDoyLXtWX%2FmIZy%2FTg84%2FzWs5VZ%2F9tKXgJtpQxB1C0VAXM8KZwJOnUvlMH&X-Amz-Signature=7aafd23b5c1708e5c0b4ebf2b82d79e0bbdf059ab5dfc39bd5aa1f883051a635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
