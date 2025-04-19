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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJIU6WEN%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCVBsdFIivI1QqegnmsrLUsc780%2FjWcfYHuXjMgoKnxBAIhANtWeJBoUHDiOd5BcbpiTx%2F4tWPkpW1qs1uXf3qHhtyzKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3jLmj18s6fKzSHEIq3APHM1cjZm%2BVVmY%2F%2FwbgwmJIgyNodiCBhvDCtNls9xFZ2f2kiwU6OxWqKlhhOT6BPji9bJJwjwNdIHizGw%2BkiATgbN2k2lAuc2yNBOvHgccmedPR8VVTArqYu0AscJjxS1FW%2FesUsQ5yRPc8iTHxdPeIG%2FTt0xjYB9gYPq8Igfk5I1Ecd1rOpNCeWQnAGObin249hvXLTSbm5wjdLouZej6Los8YMfLqKACjEQUVeKvzfH5qP6KfaPy%2Bpq1AFiwoiMEFrj2bEf5mcu6PlatwQtx%2B7RDX0Y34TVSiBk3F9PhBO2FZevQNIhLEGDjbKRLWKoXmnuVoYMgz4bseolkMxXYUJHWmnBOntGySsK3V%2FxIlp5mxwR59DykODFAXU9yyca0V5C1j%2BDzKYJoZ%2F0lYEQR90zBkYED4uNEoLazUqkGb3Zsw18Y0cEnc%2Fk9rTXjDH4bBZpSSGeQX0a1QqeLUHihIhfMebQzjso7y9fa0y39uLO0B3uVCjY0zSbWgUInUNfuUyrIKp89fIjpSJeNLXPkpal2pzj8HBhwyIbvcLC9DPEvhH8taQp%2Fiz19T7k98EOraqJGrBMvokjlkDnUKWIBjF5H%2FqF04WAdIn3hbHJuHMVFdRrq%2B%2FYgaP9%2B0%2FDD%2Fn4%2FABjqkAaDvQKxbgIyoTFSEFqzsO3gyb554rYhIswdT0C0Rf8NUjrm8LePtBltL2GCoVArH67V9WXTbxyIap%2Fb3BASd15h384Au3ukqgxo1NWOt3bf6iNevwhveU%2BldztJinLqKHDyZ2zfqPOOWKvHe3kIi0ChCpVEYsocx3NJO97%2BYbKILCjGK14TBJTdQXQCv971%2Bb8DF%2FgHR9qR1sGCNFPuB39seEnYv&X-Amz-Signature=b667e5c057b3d483377d1d784331949eb6e9d676ce4005790fe41ebc4ac826e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJIU6WEN%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCVBsdFIivI1QqegnmsrLUsc780%2FjWcfYHuXjMgoKnxBAIhANtWeJBoUHDiOd5BcbpiTx%2F4tWPkpW1qs1uXf3qHhtyzKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3jLmj18s6fKzSHEIq3APHM1cjZm%2BVVmY%2F%2FwbgwmJIgyNodiCBhvDCtNls9xFZ2f2kiwU6OxWqKlhhOT6BPji9bJJwjwNdIHizGw%2BkiATgbN2k2lAuc2yNBOvHgccmedPR8VVTArqYu0AscJjxS1FW%2FesUsQ5yRPc8iTHxdPeIG%2FTt0xjYB9gYPq8Igfk5I1Ecd1rOpNCeWQnAGObin249hvXLTSbm5wjdLouZej6Los8YMfLqKACjEQUVeKvzfH5qP6KfaPy%2Bpq1AFiwoiMEFrj2bEf5mcu6PlatwQtx%2B7RDX0Y34TVSiBk3F9PhBO2FZevQNIhLEGDjbKRLWKoXmnuVoYMgz4bseolkMxXYUJHWmnBOntGySsK3V%2FxIlp5mxwR59DykODFAXU9yyca0V5C1j%2BDzKYJoZ%2F0lYEQR90zBkYED4uNEoLazUqkGb3Zsw18Y0cEnc%2Fk9rTXjDH4bBZpSSGeQX0a1QqeLUHihIhfMebQzjso7y9fa0y39uLO0B3uVCjY0zSbWgUInUNfuUyrIKp89fIjpSJeNLXPkpal2pzj8HBhwyIbvcLC9DPEvhH8taQp%2Fiz19T7k98EOraqJGrBMvokjlkDnUKWIBjF5H%2FqF04WAdIn3hbHJuHMVFdRrq%2B%2FYgaP9%2B0%2FDD%2Fn4%2FABjqkAaDvQKxbgIyoTFSEFqzsO3gyb554rYhIswdT0C0Rf8NUjrm8LePtBltL2GCoVArH67V9WXTbxyIap%2Fb3BASd15h384Au3ukqgxo1NWOt3bf6iNevwhveU%2BldztJinLqKHDyZ2zfqPOOWKvHe3kIi0ChCpVEYsocx3NJO97%2BYbKILCjGK14TBJTdQXQCv971%2Bb8DF%2FgHR9qR1sGCNFPuB39seEnYv&X-Amz-Signature=79c63182be098d5b1f8ef1ac0cf6a7184bf90203f6f83ee98cf2bf1d4e44ac17&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
