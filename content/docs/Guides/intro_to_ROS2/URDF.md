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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7FQJ4WH%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3Xe84m%2Bj3nD87rWMxegSrRiKYjeLoJN9o6lsVxApgpQIhANVYN%2B4BLhFw5YFX0NdAWbK%2Fiz8u3ZTJVKRDMgv7tlYGKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igze0h67EFU%2F4fIsWtsq3AOr39eRo2%2BP1Oj2QtMsRSyIfPGlRnANpuu%2FEKvpljn7v5ptad%2B6y6oWRJf1Hmhj6YtKxtjBjAQOiGodqNKcD0CYsxYRGd8Ryo6AFJpM15P8ls4CWiK%2Fo65%2FqbtjySnp041R0QkXaaWNkwJYF56n1PaW7sJTxKbpRur5jaRh82B3AqJAQx4KSZjkeXQV58b96u1vUoYZXhrbgQ7IO0KLARynGv34oHIPJFV%2FK%2Fr0%2BBVQQCTEgQYqkfTunc6un7gQ1JiIsv7t6AGEdOofNnfPWx3m%2B3wkoLY12wtuDAJoNpQKmWqfy4VeMApx0NxfGRyAzzYXJR%2BuKS%2Ba9irrYZ7JTWN%2FDmdVJ9ZxmdGPghggdbDM7I1yXN4%2Fd%2BO8rqC5kE%2BFoTDvhhzOtTFuM8mSooAVEXR4RCBXKxwaE5ZtqPqTx5Of7zbjKl2CB1pqAnI8GMZpBITdnYm5RwBiYm1128fhhmlEC87Okcnk5YX3p2ZSu%2FoUEhw1zx%2FXGPUajh824bknGK0JMWTgM4Gs4uMKquaxzK2P%2BUERoy2PyPjxdojr01ayccGQ07p9Jb2T9Y966dFkgXcDM4QAQlpPucBoG4GWeTj%2FGkWiYLGb3Y05m9D0FklVMZSbdiO5BuE5SbvWbTD3jPjDBjqkAaXnPZYrZaealyXk9Um3yYAgAMprFq9gpAKFxAjZ6guEXcMJcWeKW9X%2FkN6UjE62dtkbPVLffU8IUmR1S9CKcj3dnw9Qc2ve%2BRHUBnUeP4Q7XX0rs2A0%2BYdQ9GnHbvKe76liQcz4OvdtlyVHyDgJFNlm1fxKQLDU6Sr5kuvQgPucxriI7mUy4qUsLmRbe%2FUWXnekgi0wK00I%2FPPRBD2QRpyNtMKn&X-Amz-Signature=6a7b9a549087bda4809bb261018009e6f7aba520173758585f43a6657e54c5a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7FQJ4WH%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3Xe84m%2Bj3nD87rWMxegSrRiKYjeLoJN9o6lsVxApgpQIhANVYN%2B4BLhFw5YFX0NdAWbK%2Fiz8u3ZTJVKRDMgv7tlYGKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igze0h67EFU%2F4fIsWtsq3AOr39eRo2%2BP1Oj2QtMsRSyIfPGlRnANpuu%2FEKvpljn7v5ptad%2B6y6oWRJf1Hmhj6YtKxtjBjAQOiGodqNKcD0CYsxYRGd8Ryo6AFJpM15P8ls4CWiK%2Fo65%2FqbtjySnp041R0QkXaaWNkwJYF56n1PaW7sJTxKbpRur5jaRh82B3AqJAQx4KSZjkeXQV58b96u1vUoYZXhrbgQ7IO0KLARynGv34oHIPJFV%2FK%2Fr0%2BBVQQCTEgQYqkfTunc6un7gQ1JiIsv7t6AGEdOofNnfPWx3m%2B3wkoLY12wtuDAJoNpQKmWqfy4VeMApx0NxfGRyAzzYXJR%2BuKS%2Ba9irrYZ7JTWN%2FDmdVJ9ZxmdGPghggdbDM7I1yXN4%2Fd%2BO8rqC5kE%2BFoTDvhhzOtTFuM8mSooAVEXR4RCBXKxwaE5ZtqPqTx5Of7zbjKl2CB1pqAnI8GMZpBITdnYm5RwBiYm1128fhhmlEC87Okcnk5YX3p2ZSu%2FoUEhw1zx%2FXGPUajh824bknGK0JMWTgM4Gs4uMKquaxzK2P%2BUERoy2PyPjxdojr01ayccGQ07p9Jb2T9Y966dFkgXcDM4QAQlpPucBoG4GWeTj%2FGkWiYLGb3Y05m9D0FklVMZSbdiO5BuE5SbvWbTD3jPjDBjqkAaXnPZYrZaealyXk9Um3yYAgAMprFq9gpAKFxAjZ6guEXcMJcWeKW9X%2FkN6UjE62dtkbPVLffU8IUmR1S9CKcj3dnw9Qc2ve%2BRHUBnUeP4Q7XX0rs2A0%2BYdQ9GnHbvKe76liQcz4OvdtlyVHyDgJFNlm1fxKQLDU6Sr5kuvQgPucxriI7mUy4qUsLmRbe%2FUWXnekgi0wK00I%2FPPRBD2QRpyNtMKn&X-Amz-Signature=7160d54cdcecd65f58163f69ed1681714691a7680443a52481580b0d1cc9d9e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
