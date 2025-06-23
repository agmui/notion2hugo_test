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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKYSQOQL%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T140950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIE774CNtfVMrEFzuruCKNlP%2FnYFewZsVcGHn4ZlL%2Frj2AiBQb88Gllhu92ika7FbbrDeqknICFzFhQEmwyHp%2F%2Bvj5Cr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMPXl3ykcwK8Nr95ccKtwDLeYdmQl3Afjj4k5LIbHsKXspOuep6hESAYt2pdnw3O3foOym5aYYWOgZEkAcp%2BChBF%2BZr%2BzsRxAXHddR3h9ftJZGBDT3N4wQnnKpjJa7jaJCLEf8LlHi3YlY%2BNrMd2NFuVaCsl7upqz52SFO3zGOU73T5UByCCFNTaansvEtcEWz5sTOLhAVQBBpRjWJTbK50r3iVLg%2Bojjai4C3EGTsEl%2FAsa620dUW7Ur%2BjNPS0rl36yTvrxdtSVyn74dKn49SZi5bA7zazii89qU%2BAWwy5yM%2Bl9iCa139S5DxuMtpUV7jAL6qK6AEX8%2FPX533tNic8jrKf4o%2F8e9lEbU2qINwTkKn0W1nXzr7ztreqa6flB6NXNnGu6LVGXknUhMM8tw15wezhw4bb%2B9dvUOH0A%2FW0xFu%2FUPS722U5OIpCMt0Dtq3pXoHfL%2ButWBQly34XN9Mta1aaVo4dej7x8HR1xCnbyZ1e2d3YvlxrtOiPIAsJVjSeu8rK72b50DKGWrRis9HVXe7S0eMZFrF8fUagZNBl8ampee5itOZxcfiu%2Bn521m5ABgl7BTr55mff%2BbkVCFdaqls%2FH%2FWfLocyEOwnyK3%2FZHbD0ShS8qdclpFp%2FOobWZmJkqYLpZXH7mwkGcwpfPkwgY6pgGjwgUInOw7NKaPOqwpsWUNvdwPQ5CSHwnHXdPveALM9r8BhTJatVn4gc44sd77ZmxSFeqNS4v669Veyr6mzYZKIs1JCPpjcMXZMkh2seQqrUiFgzEFK3UWnJaeVj50rZOqR5iu9F5RD6yb7%2FaTN5MLTVQXowZszLoNMoWHq1bwcG6zmOMqI%2BN4WVC%2Ff%2BBfePLrwJgOklH9ZdIVb3KPyGqh%2Fwt4DoWs&X-Amz-Signature=bca136e34e9a0f634bd7565b28373230d1fe92ca4bc915ad32bc519e5b9c4c04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKYSQOQL%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T140950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIE774CNtfVMrEFzuruCKNlP%2FnYFewZsVcGHn4ZlL%2Frj2AiBQb88Gllhu92ika7FbbrDeqknICFzFhQEmwyHp%2F%2Bvj5Cr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMPXl3ykcwK8Nr95ccKtwDLeYdmQl3Afjj4k5LIbHsKXspOuep6hESAYt2pdnw3O3foOym5aYYWOgZEkAcp%2BChBF%2BZr%2BzsRxAXHddR3h9ftJZGBDT3N4wQnnKpjJa7jaJCLEf8LlHi3YlY%2BNrMd2NFuVaCsl7upqz52SFO3zGOU73T5UByCCFNTaansvEtcEWz5sTOLhAVQBBpRjWJTbK50r3iVLg%2Bojjai4C3EGTsEl%2FAsa620dUW7Ur%2BjNPS0rl36yTvrxdtSVyn74dKn49SZi5bA7zazii89qU%2BAWwy5yM%2Bl9iCa139S5DxuMtpUV7jAL6qK6AEX8%2FPX533tNic8jrKf4o%2F8e9lEbU2qINwTkKn0W1nXzr7ztreqa6flB6NXNnGu6LVGXknUhMM8tw15wezhw4bb%2B9dvUOH0A%2FW0xFu%2FUPS722U5OIpCMt0Dtq3pXoHfL%2ButWBQly34XN9Mta1aaVo4dej7x8HR1xCnbyZ1e2d3YvlxrtOiPIAsJVjSeu8rK72b50DKGWrRis9HVXe7S0eMZFrF8fUagZNBl8ampee5itOZxcfiu%2Bn521m5ABgl7BTr55mff%2BbkVCFdaqls%2FH%2FWfLocyEOwnyK3%2FZHbD0ShS8qdclpFp%2FOobWZmJkqYLpZXH7mwkGcwpfPkwgY6pgGjwgUInOw7NKaPOqwpsWUNvdwPQ5CSHwnHXdPveALM9r8BhTJatVn4gc44sd77ZmxSFeqNS4v669Veyr6mzYZKIs1JCPpjcMXZMkh2seQqrUiFgzEFK3UWnJaeVj50rZOqR5iu9F5RD6yb7%2FaTN5MLTVQXowZszLoNMoWHq1bwcG6zmOMqI%2BN4WVC%2Ff%2BBfePLrwJgOklH9ZdIVb3KPyGqh%2Fwt4DoWs&X-Amz-Signature=f3d3f830e2fd1e82b23eb29cf76e4a6e8f83f8f1a5c9b4be656be9cd0b4048d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
