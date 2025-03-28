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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSLEZVJU%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLuuVZ1CdY09ALafRQXzmVUDRbfGBkX%2B%2Fqvu7M%2BF1hBQIhAOy4qCsIz2HLTIJZMknwhaGOp3u3V0Xivw7U0KagcprNKv8DCGYQABoMNjM3NDIzMTgzODA1IgwOE9Fl%2FuTuw3CbKVYq3AOr4mzC44sCq9IW%2BlDiXVQEf5FjVtj9xQ1JigwFh3PxDlhWDL44DH67fRHU90UZiBw1cWxMgshUCzaiC0UHufSUR2JloXgRcsXBC4Gy1IMd0r260YG2nNIiiGt8kBm%2BUFabgAjPejOCbTWNULyGAk99qwIwXBrBRQ7N0%2FpizuHpR9gqHuI7DtfSKHZgWTuLg8%2BX3KQ98srmfQrbsEdKnHXNPQmdfTf8OVoHwAJULwO4mBPpR4FyK3Je%2B5yvb97brKcKJhA4nAiKvrjYXGDTtMzaC0xI5mwegZWv7JhDidA3qafgF%2BQWs8V5ykozLnC9l0uVXi5UTMUN4vDqM2911CLtiKCmpNa2jPz02Q6gYsZlp4ufOKIFGMPwdJbLwLVMt65C2gpB4R7e7ZJnfor03VZieLdMvKZr2yKXilheR8hLznANQzVldL9wyCXh6kqv8L%2F92sIRZnqePV3H5Mhfglsml6LVGHURBlPWmIzZYlSzUXV8lpv6sfzG8XdoNYaBpJdu%2FXyDWONAi5DJxLONTyttVCF7mZyNVcaYZsAZvoa3Qhu3KMjeEKAc7sYVcwXZRe%2BHUXhqprsKftYy5RTr9jlucZ8KvFkWdl3VjdryAohZmn5Qmd60qn86rs9NTzDSjpy%2FBjqkAWHWCYptnmhQEqHFB0AQQ6L53wRiNAOvQJOXUuHa3n53RRdXLG6UFPZAzFG01yRPXlInlz%2F2HaXpCxXdtB3ykODwYYyWnlX8OJWas4kNzu5l%2F5tGTwCHZjckqbDg%2BN%2FRs2hu8VEd13%2B%2BcPdD7slNtCE6EB%2BqmDGpbCce5N%2BES68nzNGdnB2%2BzWBadlWeBqotfHjiG3Sm0New6HaB1iK1QVIwDrxm&X-Amz-Signature=171c0c1f4e9cbac38072e6d1ff25188d1069867a4e3316add444c6c18376ee4e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSLEZVJU%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLuuVZ1CdY09ALafRQXzmVUDRbfGBkX%2B%2Fqvu7M%2BF1hBQIhAOy4qCsIz2HLTIJZMknwhaGOp3u3V0Xivw7U0KagcprNKv8DCGYQABoMNjM3NDIzMTgzODA1IgwOE9Fl%2FuTuw3CbKVYq3AOr4mzC44sCq9IW%2BlDiXVQEf5FjVtj9xQ1JigwFh3PxDlhWDL44DH67fRHU90UZiBw1cWxMgshUCzaiC0UHufSUR2JloXgRcsXBC4Gy1IMd0r260YG2nNIiiGt8kBm%2BUFabgAjPejOCbTWNULyGAk99qwIwXBrBRQ7N0%2FpizuHpR9gqHuI7DtfSKHZgWTuLg8%2BX3KQ98srmfQrbsEdKnHXNPQmdfTf8OVoHwAJULwO4mBPpR4FyK3Je%2B5yvb97brKcKJhA4nAiKvrjYXGDTtMzaC0xI5mwegZWv7JhDidA3qafgF%2BQWs8V5ykozLnC9l0uVXi5UTMUN4vDqM2911CLtiKCmpNa2jPz02Q6gYsZlp4ufOKIFGMPwdJbLwLVMt65C2gpB4R7e7ZJnfor03VZieLdMvKZr2yKXilheR8hLznANQzVldL9wyCXh6kqv8L%2F92sIRZnqePV3H5Mhfglsml6LVGHURBlPWmIzZYlSzUXV8lpv6sfzG8XdoNYaBpJdu%2FXyDWONAi5DJxLONTyttVCF7mZyNVcaYZsAZvoa3Qhu3KMjeEKAc7sYVcwXZRe%2BHUXhqprsKftYy5RTr9jlucZ8KvFkWdl3VjdryAohZmn5Qmd60qn86rs9NTzDSjpy%2FBjqkAWHWCYptnmhQEqHFB0AQQ6L53wRiNAOvQJOXUuHa3n53RRdXLG6UFPZAzFG01yRPXlInlz%2F2HaXpCxXdtB3ykODwYYyWnlX8OJWas4kNzu5l%2F5tGTwCHZjckqbDg%2BN%2FRs2hu8VEd13%2B%2BcPdD7slNtCE6EB%2BqmDGpbCce5N%2BES68nzNGdnB2%2BzWBadlWeBqotfHjiG3Sm0New6HaB1iK1QVIwDrxm&X-Amz-Signature=04b69daa48e6fc831a491938c895cbe4e21a9793f0f6c8bf8ebe541740bb331c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
