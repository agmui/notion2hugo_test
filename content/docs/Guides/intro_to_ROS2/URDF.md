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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMPZXAU3%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhnDJmrpcuYnv1Zqo%2FShehWlbJX12%2FWpvpl6PsYOyVVAIhAIkvWQS7fPSCiPVFPhcfLsK3HlX1l87gkjIT2SbzRRBqKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BKRtmf%2FPPu8T8B70q3AOav1e%2B7tx2cZvE6%2FA1XiQ6%2B%2BsxNbZAUVZbblYlm48WdQXQk32CD3jumhTaVEyZOCXeqMmJlOJUp503iBAtOz8YFIJvv2fd6h%2FyU0gaSPzO0ZLRFEJQydSELKbKki%2F9MxZISAeMj%2BVPACjOwHzhK8Dzc7GKJ1ul2hQ08Fj4Bt8CJa4x3dQW%2Bd9p7LMAhV4VCbbjEF9TxL6bMYEDkmyF8tA2Z2H2TKOf5SUTFbssOHp%2BgiftWDPwPbq3vUXv2JBkOvRG7omNNmeJiydbzYvA5Th%2BMA1x3cwJ%2BfQ1diIe4Y4Sa8oL66srmMkYpiYZSJmN%2F1HeInBPbPN%2BPtqUR6uy49ZtqOFotVrAUq%2FeRRnBChsMvZY3dBv4OJbcdIkGZ3j656HM%2B2UcgOKspZKsNBrLs2ixEhI7O24KD9bcU4VzOZ2niePugnABH5rXgAoH50rNObMX2LBelmC7Ko03IL4RbZiuNRG%2Fej7gF3nF8hymtRMRlheXmi6u6RtNiVEKhxDd7kraTsPm7uh2AS1R8lQlH67ocQtZqodNVBNpEZqC1H8ob3PMfHuSZ9jjHucF5LO9LNXhPPweIPA4ETOq%2B1Gdh5vM9JGWCdyFZLXFJJuTkPZG2MPs0DmIDUAcUoYwMzDYnZvCBjqkAVbtZ3Z6hgPsj9mF9FDvcr3c99zxt2ZPZ79hYAcyRUubfgSnFQVsUIiKkFz67VDm52%2FJuqTYZQhxpgutkTdQ0cmQtUCkdyLxlhEuYnV592J0iFl49okyscVRkShl7LjaIDuqr%2FDD%2Fn3volixdJPycdain2YK6bRZ9QcoxSHSE6nIKa9q%2BoeOCoSJB6UqzJ5BQY3vH%2FMruaiqBmKz8Zo1RfPJ4lF%2F&X-Amz-Signature=4cb17d8c9faa926f02456fbc70ad4498a18a13444ca9091e44d5cdb23de5d981&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMPZXAU3%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhnDJmrpcuYnv1Zqo%2FShehWlbJX12%2FWpvpl6PsYOyVVAIhAIkvWQS7fPSCiPVFPhcfLsK3HlX1l87gkjIT2SbzRRBqKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BKRtmf%2FPPu8T8B70q3AOav1e%2B7tx2cZvE6%2FA1XiQ6%2B%2BsxNbZAUVZbblYlm48WdQXQk32CD3jumhTaVEyZOCXeqMmJlOJUp503iBAtOz8YFIJvv2fd6h%2FyU0gaSPzO0ZLRFEJQydSELKbKki%2F9MxZISAeMj%2BVPACjOwHzhK8Dzc7GKJ1ul2hQ08Fj4Bt8CJa4x3dQW%2Bd9p7LMAhV4VCbbjEF9TxL6bMYEDkmyF8tA2Z2H2TKOf5SUTFbssOHp%2BgiftWDPwPbq3vUXv2JBkOvRG7omNNmeJiydbzYvA5Th%2BMA1x3cwJ%2BfQ1diIe4Y4Sa8oL66srmMkYpiYZSJmN%2F1HeInBPbPN%2BPtqUR6uy49ZtqOFotVrAUq%2FeRRnBChsMvZY3dBv4OJbcdIkGZ3j656HM%2B2UcgOKspZKsNBrLs2ixEhI7O24KD9bcU4VzOZ2niePugnABH5rXgAoH50rNObMX2LBelmC7Ko03IL4RbZiuNRG%2Fej7gF3nF8hymtRMRlheXmi6u6RtNiVEKhxDd7kraTsPm7uh2AS1R8lQlH67ocQtZqodNVBNpEZqC1H8ob3PMfHuSZ9jjHucF5LO9LNXhPPweIPA4ETOq%2B1Gdh5vM9JGWCdyFZLXFJJuTkPZG2MPs0DmIDUAcUoYwMzDYnZvCBjqkAVbtZ3Z6hgPsj9mF9FDvcr3c99zxt2ZPZ79hYAcyRUubfgSnFQVsUIiKkFz67VDm52%2FJuqTYZQhxpgutkTdQ0cmQtUCkdyLxlhEuYnV592J0iFl49okyscVRkShl7LjaIDuqr%2FDD%2Fn3volixdJPycdain2YK6bRZ9QcoxSHSE6nIKa9q%2BoeOCoSJB6UqzJ5BQY3vH%2FMruaiqBmKz8Zo1RfPJ4lF%2F&X-Amz-Signature=63af71fbfd93b40a3457a6bc040cf34337086eeaefd34e6255a1aa23160b90cf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
