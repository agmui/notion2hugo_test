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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMGWG34K%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T035504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdJ1uKSVugHj1GiAV2RP83CBWJJ2wIMcs7%2BHklOPHe1QIgTP6VjhrjJxQ6MqNUlefkey%2F%2FEz38k1gveBFai4705CAqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeP1M9B5eOmcfYjxSrcAwSLpP42Jwylys%2BOGc4vK3zR9BLBQeX5bzl6Mm9m13sYKLOm62SwdYO9edDgpTtNSKeVY7PSQn%2BYfgC0PsxgPoWTRMh6HHUOCGOzTolKPKoXFCUtvFtJHjhA%2FNSl%2FmbByZzhdDm36dTI46CPdkLpJUWVDcv5bMCedzt9%2BFV1i4ry57wpq3NbZ4D5GTfguxo5ewqG47X%2BJ4mP%2F%2BjOcM4nNFGSBrF9e%2Bx%2BfEYYThQUZg4Gexk8M%2Bt%2F4IADmh4soJXIsGtHILT%2Ff6e%2BSOXfunLYGrrtOqnB34%2BX2tJvIIg6tZFvstleOdxwTNK%2FgbA2mTbce6s0%2BdxqwI%2B4%2FP1DqGeXgLcOSIUfq7ayl%2BflI4Yl%2FXe7dL9lIHUOt4AOMX8RswijlODuixFc9pc4AW1WCk%2BilthjJ0HDCpeKAH8BZFl73i7gegKfYb2yRA6AC4YmksFWiZNB5U40rz9TGkeV2nm%2FPurggqMJeGLcHpnx14V5cT4bVQdK5oSan9I1rA64epDpIfQWScMyS3i7PRRyg8BklshRiO3Zh%2Fupx%2BXUhTYcvcuzYLgL%2BXrAdta1xsN%2BXAKkt2C9RD8Pb%2BFxGvMWe8sz%2BaUKEghssqZnmBT%2FEBLwPSVGUBsyImgr%2FKfmfj1zMIHZzMMGOqUBE7X%2BIKk88Yp98FkO5DbP176d0NrOhAZ4ouXQA0R305R8GSnFD31iM26%2FzVy5BREXD17GT1PSGNJMBy0UdhvRyTZpReN274tnnm0c8xR%2FOnIAOm5Ja5w0iY4Fo8lQ0e7xqQujuEwUtdWPzMl23oPUqo7KZ1%2BYzmZf%2F%2FrchaLUW0v9rCWiSJiSZsGMs76SpbVngvKYE2lhSpy%2Fmzj9muaUs1D%2FLWaD&X-Amz-Signature=abf82a49cf0181b1a0b4e7b867fefdf2189872cbe38483e2ec7932e5897ca841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMGWG34K%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T035504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdJ1uKSVugHj1GiAV2RP83CBWJJ2wIMcs7%2BHklOPHe1QIgTP6VjhrjJxQ6MqNUlefkey%2F%2FEz38k1gveBFai4705CAqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeP1M9B5eOmcfYjxSrcAwSLpP42Jwylys%2BOGc4vK3zR9BLBQeX5bzl6Mm9m13sYKLOm62SwdYO9edDgpTtNSKeVY7PSQn%2BYfgC0PsxgPoWTRMh6HHUOCGOzTolKPKoXFCUtvFtJHjhA%2FNSl%2FmbByZzhdDm36dTI46CPdkLpJUWVDcv5bMCedzt9%2BFV1i4ry57wpq3NbZ4D5GTfguxo5ewqG47X%2BJ4mP%2F%2BjOcM4nNFGSBrF9e%2Bx%2BfEYYThQUZg4Gexk8M%2Bt%2F4IADmh4soJXIsGtHILT%2Ff6e%2BSOXfunLYGrrtOqnB34%2BX2tJvIIg6tZFvstleOdxwTNK%2FgbA2mTbce6s0%2BdxqwI%2B4%2FP1DqGeXgLcOSIUfq7ayl%2BflI4Yl%2FXe7dL9lIHUOt4AOMX8RswijlODuixFc9pc4AW1WCk%2BilthjJ0HDCpeKAH8BZFl73i7gegKfYb2yRA6AC4YmksFWiZNB5U40rz9TGkeV2nm%2FPurggqMJeGLcHpnx14V5cT4bVQdK5oSan9I1rA64epDpIfQWScMyS3i7PRRyg8BklshRiO3Zh%2Fupx%2BXUhTYcvcuzYLgL%2BXrAdta1xsN%2BXAKkt2C9RD8Pb%2BFxGvMWe8sz%2BaUKEghssqZnmBT%2FEBLwPSVGUBsyImgr%2FKfmfj1zMIHZzMMGOqUBE7X%2BIKk88Yp98FkO5DbP176d0NrOhAZ4ouXQA0R305R8GSnFD31iM26%2FzVy5BREXD17GT1PSGNJMBy0UdhvRyTZpReN274tnnm0c8xR%2FOnIAOm5Ja5w0iY4Fo8lQ0e7xqQujuEwUtdWPzMl23oPUqo7KZ1%2BYzmZf%2F%2FrchaLUW0v9rCWiSJiSZsGMs76SpbVngvKYE2lhSpy%2Fmzj9muaUs1D%2FLWaD&X-Amz-Signature=4fcaefbafceb0fdee47f43bb9aeeec1e0aefd307717b6cb09aa5567aa51284cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
