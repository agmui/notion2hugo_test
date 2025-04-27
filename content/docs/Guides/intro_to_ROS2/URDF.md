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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLC2GNHO%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T140526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENS4WhOiTwCuWSFPyprrgGZ9rggO9%2F%2B9WDNINlSVUfiAiA59d58o9uSRbNwOdFsms8q3BulrUTXa2n55%2FNgqAge6Cr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMOF%2BCjNqs%2BvVWemOeKtwDE7gwhprLQIy3o92i3C8HUpGw5ZPV7vASdE4rEWJN2Py2Zv7jOMthy3ar5WXClGZX84BEVxa4KHyx0Fjt9MmZzWzicIGDkHsibujrmCaI%2BflrzV2aUIxf%2F0JgKnoeem9eCwZzObWbNPWxwnqY%2FYUXO8l0LAguRgLJq%2FScBCBhQsxeC4s5aiyXXHoYbJQ4jhYHUafe6fk4gqdt1%2BkKzhHp7MEcByrLou%2BOE8OOZO9IEUPLMktQ3rho7eyAzanj7YW%2Ba5EilKrZ9pt%2F5lG12Cz8iTDdA7BBwG3j%2Fnd%2BzG35uzS2KKnfa3w8BDAqQQs9AKO9t1E0NmSq6Dr7Mwao7TMoljHaKEUyk4Djn9BPTlu%2B8T372BS5Znpwk7DOfDcxt9N9gqRFRcVSXFVGbRGI%2Fwk5HqPPDqsu%2FK7jMD%2F0X%2F655cU8DYWWAj2k1JuUumYUMrXjglwG99hKak3CyWB3vnA7XUsHRSGASiZlghxvalbPcEx2Uk5qJxigf4ezqopHxiFV%2F5q5ZuD1S3o56MinEijceFJRbciZpJHOPZvQIZ%2FUHq9T9Pj3T4pV81AFhgGcJQo2IU1XSjD5TBN2n6PCfT1pqFLVf3izjOp4ov9dGfbrE4myByzfnxsqPj%2BMoYMwr4y4wAY6pgFlo99ac8hXfNOAnmk8pAkDh9RxFmOiNBbss83IVfuPTOEsJ1s5aRCgZSu7l2z3FUXiPbhQaVd5QOZAoPnl0zB7Jbq7DYy95aUHjeYCtZOTN%2Bkk1afDH8OFvJw1ZMIHwEqBD%2BFkaCOlVz1OU5LKUv%2BBocy9JPr98GzU%2F%2Brul2TZmeCgwN2PYOU8J6IBCvC4qKLxcIZZXsUrVAfxYyappEXX28UnUwjQ&X-Amz-Signature=04dfa0390ea9abf98b1c92353946587d57614a3c5386a7bc943d45786b98aec6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLC2GNHO%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T140526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENS4WhOiTwCuWSFPyprrgGZ9rggO9%2F%2B9WDNINlSVUfiAiA59d58o9uSRbNwOdFsms8q3BulrUTXa2n55%2FNgqAge6Cr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMOF%2BCjNqs%2BvVWemOeKtwDE7gwhprLQIy3o92i3C8HUpGw5ZPV7vASdE4rEWJN2Py2Zv7jOMthy3ar5WXClGZX84BEVxa4KHyx0Fjt9MmZzWzicIGDkHsibujrmCaI%2BflrzV2aUIxf%2F0JgKnoeem9eCwZzObWbNPWxwnqY%2FYUXO8l0LAguRgLJq%2FScBCBhQsxeC4s5aiyXXHoYbJQ4jhYHUafe6fk4gqdt1%2BkKzhHp7MEcByrLou%2BOE8OOZO9IEUPLMktQ3rho7eyAzanj7YW%2Ba5EilKrZ9pt%2F5lG12Cz8iTDdA7BBwG3j%2Fnd%2BzG35uzS2KKnfa3w8BDAqQQs9AKO9t1E0NmSq6Dr7Mwao7TMoljHaKEUyk4Djn9BPTlu%2B8T372BS5Znpwk7DOfDcxt9N9gqRFRcVSXFVGbRGI%2Fwk5HqPPDqsu%2FK7jMD%2F0X%2F655cU8DYWWAj2k1JuUumYUMrXjglwG99hKak3CyWB3vnA7XUsHRSGASiZlghxvalbPcEx2Uk5qJxigf4ezqopHxiFV%2F5q5ZuD1S3o56MinEijceFJRbciZpJHOPZvQIZ%2FUHq9T9Pj3T4pV81AFhgGcJQo2IU1XSjD5TBN2n6PCfT1pqFLVf3izjOp4ov9dGfbrE4myByzfnxsqPj%2BMoYMwr4y4wAY6pgFlo99ac8hXfNOAnmk8pAkDh9RxFmOiNBbss83IVfuPTOEsJ1s5aRCgZSu7l2z3FUXiPbhQaVd5QOZAoPnl0zB7Jbq7DYy95aUHjeYCtZOTN%2Bkk1afDH8OFvJw1ZMIHwEqBD%2BFkaCOlVz1OU5LKUv%2BBocy9JPr98GzU%2F%2Brul2TZmeCgwN2PYOU8J6IBCvC4qKLxcIZZXsUrVAfxYyappEXX28UnUwjQ&X-Amz-Signature=dd0244d5e41da3c14bf9768fa7552dbebefae5add68b70196139e9aa5ba0e41b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
