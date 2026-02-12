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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AILAAER%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCN6nTeDGrDQYVOywhvSio4oSk5RcsdRcPgiPVcrXFY5gIhANWfCBPM95VCHUckazdSbJuU%2FlhtQNuHruY27%2B7zS1jCKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIq3jWbTzHvGmJYZQq3ANrTyCEQTObRTx3BpwopYZvwQk%2F9cdsTxB0eyM5qiXH4QxbSd%2F1iRwEu1LZzvPG4zi%2FK763Bwm%2FVuyUL4sncp0tWiI7UQmr43%2FtHpdyaxhvLhj8FHpvUaqNsNH4nKNKpQJZf0xLtfJXldfD3sK5IIwlvjXLcyKJOhvwGAtat3sH9Kw1d22gRBupTpwU0Ir1R7LZIn97mkjtvGePUg7Z0VB5bww6LzcOKnLqLuwPW5GhMOa4AWP6q5srrlc%2BJ3fwgmTRpb2w%2B2Fje9e7lGH45MF3dkA8UjgOI%2ByeyNmheiBKKyXcPK9p1b9wGWtxJO2Tma1UHAfLzCZyeR2Ul%2BdsEHs9dDIKRuD%2FOIPy8e1e6EAwC6a3cZ5co9%2BJ9U%2Fpf0KgaPIGI2lrIz%2FSUQuAUoEatMVh4xZnPXdTTj9vdpsiqXvf9bacDTB1LvuPBINBqKVrJvrP0kL7uLkvZfH0%2FbrzEBpCHrp%2FVERXi2SK8X%2BnrNerQxw0wb0yN3sxGHQzDbPZKG5xivYPYGLRhjUcTlVABnej9hlGk%2B0BOyaxbcLZrWS2ZrRkdK%2F%2BSq19%2BjQPzGS3fNu3y9hFppTR6kp%2Bhpxx131%2BZSBjP1iCan9QoT07MRUNBeyLduXzpcH9PJv97zC%2B1LTMBjqkAXOHdvt61xW3UzZnVffcr2%2F1BUGYCFA0AeVH8Iv8meL%2FRP66jvYqZcLBmc39fBOjbFs8ghtd0vAikgXggc%2Fs%2Fqv8ypTf8twWPLmQ5v5DkdVvgRoTDfh2qMXNNzZ3J8Kymn3raw%2Fwig5cpS5ovZzsTZNMNtSy3NPeWsEF7ApVOJK8ou%2Bli9I1d7fUUXkQurD4rRaAZGjr%2FWwxvdE1Yq82D8SCfbxh&X-Amz-Signature=dc3156a7bae010467f39c264683d40bbb475abd86eb143a51c65c5f03ec3eb70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AILAAER%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCN6nTeDGrDQYVOywhvSio4oSk5RcsdRcPgiPVcrXFY5gIhANWfCBPM95VCHUckazdSbJuU%2FlhtQNuHruY27%2B7zS1jCKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIq3jWbTzHvGmJYZQq3ANrTyCEQTObRTx3BpwopYZvwQk%2F9cdsTxB0eyM5qiXH4QxbSd%2F1iRwEu1LZzvPG4zi%2FK763Bwm%2FVuyUL4sncp0tWiI7UQmr43%2FtHpdyaxhvLhj8FHpvUaqNsNH4nKNKpQJZf0xLtfJXldfD3sK5IIwlvjXLcyKJOhvwGAtat3sH9Kw1d22gRBupTpwU0Ir1R7LZIn97mkjtvGePUg7Z0VB5bww6LzcOKnLqLuwPW5GhMOa4AWP6q5srrlc%2BJ3fwgmTRpb2w%2B2Fje9e7lGH45MF3dkA8UjgOI%2ByeyNmheiBKKyXcPK9p1b9wGWtxJO2Tma1UHAfLzCZyeR2Ul%2BdsEHs9dDIKRuD%2FOIPy8e1e6EAwC6a3cZ5co9%2BJ9U%2Fpf0KgaPIGI2lrIz%2FSUQuAUoEatMVh4xZnPXdTTj9vdpsiqXvf9bacDTB1LvuPBINBqKVrJvrP0kL7uLkvZfH0%2FbrzEBpCHrp%2FVERXi2SK8X%2BnrNerQxw0wb0yN3sxGHQzDbPZKG5xivYPYGLRhjUcTlVABnej9hlGk%2B0BOyaxbcLZrWS2ZrRkdK%2F%2BSq19%2BjQPzGS3fNu3y9hFppTR6kp%2Bhpxx131%2BZSBjP1iCan9QoT07MRUNBeyLduXzpcH9PJv97zC%2B1LTMBjqkAXOHdvt61xW3UzZnVffcr2%2F1BUGYCFA0AeVH8Iv8meL%2FRP66jvYqZcLBmc39fBOjbFs8ghtd0vAikgXggc%2Fs%2Fqv8ypTf8twWPLmQ5v5DkdVvgRoTDfh2qMXNNzZ3J8Kymn3raw%2Fwig5cpS5ovZzsTZNMNtSy3NPeWsEF7ApVOJK8ou%2Bli9I1d7fUUXkQurD4rRaAZGjr%2FWwxvdE1Yq82D8SCfbxh&X-Amz-Signature=d150f7a1a5abcd3b307e5c1074011d90170a4f38ecbf53b10810a385f868f840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
