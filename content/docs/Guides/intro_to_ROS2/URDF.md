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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EKX52OY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuiHYWDQemj2uLBnLlJCHvAUPsF%2FsWNgHuFw5QzA5pYAiABevLHe6W752JN%2B%2F3yT9VIEkguS119T8WV8qsWdfwZyCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2FwAf0693XZaFLq1KtwDPJw9b9RCXX3X%2Fzt4i4F4ZjFYlqGK5fkoDLA1kz8sRGo6QlIyF6wswL5r77%2FN3BjMvYXOxxhE6n%2FJAR7RvEz9IVBaO7lLKppTSXGLhIRtdBF2%2BP5%2F72KucpxO1NTGYZJ9Qcq7esuHG9z%2FBHaR6WMnmtOfsUHq4zUb%2F5A%2B0kMyObzP69xM5VYd2ZYqjwqJMfizWEm21Pis2AYCVtvarowOshWiIxv71Bf0l3Of22K%2BxbuS9FnG%2FcbhXfjF5sRwpZoUAGGUggDK4O%2Fq%2F1Z8MHc%2BB9mjzxcvfnUcseSMTJQC0WWbVPSECgE9Mw1tlCA2csk8GMJX9jybzPbY%2F1Xhl8g5%2B1Fk%2FBY59CfPAcwolxCvBqQ4DbhwjYv5v0Eko5u3kL%2FPje%2BjarAUhG1rpkZh%2FuGSt7E1dFFtDc3XTS8t1O1NAu0Su4PO%2BPCxSQrMKXsHp8ueZSeSm6XmwhThq1QUMx5zcVQjN%2FCNW74kPUqJRyT0%2BP%2FL0lE2vA%2FheXrpy%2FY%2BD0y3VHThvgKV3LJq5x2idCvIXfp2QnOepMOdTMlE8ycCYGB%2FiOtFab2m79Sal19Pcg4qaaJfBsH4qvZPH4BVstEliHyg%2BElzqjkbDlosHfU7rQiq2ddbljFjnlMPhr8wjObhvQY6pgHlKH30IV9pXO%2BEoj2%2BUw2q3QeNzW5lxXMNfAYFMvBJ7tftl56jb1KfkzYcZZAIJVGd%2FktIJZ54f5nqWqXnSdjc7eG3vcxQLf4pyu4eT55UCW5mN%2F%2BMzSN%2Bmer%2BeaQA70Wwif9tZvh47gd4WkDnzwjOlvK1ANPRtaRGXbfU1IlEmkHytpSGC3Npnb%2FlO2Ls%2BZJP8jaZnCbgPYwHeTO8Y3raCHxkYhzl&X-Amz-Signature=172dc99d91008f6b85a5c73ac039ec1291f96855ff259965ea99fc1a068dc2d3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EKX52OY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuiHYWDQemj2uLBnLlJCHvAUPsF%2FsWNgHuFw5QzA5pYAiABevLHe6W752JN%2B%2F3yT9VIEkguS119T8WV8qsWdfwZyCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2FwAf0693XZaFLq1KtwDPJw9b9RCXX3X%2Fzt4i4F4ZjFYlqGK5fkoDLA1kz8sRGo6QlIyF6wswL5r77%2FN3BjMvYXOxxhE6n%2FJAR7RvEz9IVBaO7lLKppTSXGLhIRtdBF2%2BP5%2F72KucpxO1NTGYZJ9Qcq7esuHG9z%2FBHaR6WMnmtOfsUHq4zUb%2F5A%2B0kMyObzP69xM5VYd2ZYqjwqJMfizWEm21Pis2AYCVtvarowOshWiIxv71Bf0l3Of22K%2BxbuS9FnG%2FcbhXfjF5sRwpZoUAGGUggDK4O%2Fq%2F1Z8MHc%2BB9mjzxcvfnUcseSMTJQC0WWbVPSECgE9Mw1tlCA2csk8GMJX9jybzPbY%2F1Xhl8g5%2B1Fk%2FBY59CfPAcwolxCvBqQ4DbhwjYv5v0Eko5u3kL%2FPje%2BjarAUhG1rpkZh%2FuGSt7E1dFFtDc3XTS8t1O1NAu0Su4PO%2BPCxSQrMKXsHp8ueZSeSm6XmwhThq1QUMx5zcVQjN%2FCNW74kPUqJRyT0%2BP%2FL0lE2vA%2FheXrpy%2FY%2BD0y3VHThvgKV3LJq5x2idCvIXfp2QnOepMOdTMlE8ycCYGB%2FiOtFab2m79Sal19Pcg4qaaJfBsH4qvZPH4BVstEliHyg%2BElzqjkbDlosHfU7rQiq2ddbljFjnlMPhr8wjObhvQY6pgHlKH30IV9pXO%2BEoj2%2BUw2q3QeNzW5lxXMNfAYFMvBJ7tftl56jb1KfkzYcZZAIJVGd%2FktIJZ54f5nqWqXnSdjc7eG3vcxQLf4pyu4eT55UCW5mN%2F%2BMzSN%2Bmer%2BeaQA70Wwif9tZvh47gd4WkDnzwjOlvK1ANPRtaRGXbfU1IlEmkHytpSGC3Npnb%2FlO2Ls%2BZJP8jaZnCbgPYwHeTO8Y3raCHxkYhzl&X-Amz-Signature=d92c1a30c608cb26f227e58528a5c28c406a89f26a8c34ec3d444f72a561457c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
