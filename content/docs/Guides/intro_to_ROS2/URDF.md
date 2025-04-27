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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GYGIAQK%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG802aqLYvRYrcf2h%2BgZiCkmL7WzGPgO48Iu5AM%2BQOLmAiAGajZg7QU3JhzDwQ%2BcOqJ82WKT5ps2bd488dwID8dMeSr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMTotLBjGpaL767UlzKtwDLjAj1jAvkXQpHcuKjdqUkQnoZk2BYJkJ5VCjnP1x8Ijqngj%2BfldQsim%2F%2FHxH6zJ0HtgViZWWPp1ZSBSthKta%2BfedYaOM08PLkj%2Bif8PkudusszFX77BDFtvAWW1pvuoYuJfBBjDkFiBm8jufckx9IJI2Uw0RhoZ00JrDYRpbOj8lFQkwLY9eTRWReY%2FhVTgwogqwk8s7qMGNCPBeQCVpO8rne4IlWIAOXEOivLaD8qiJR1bZRT7h1pRvN78X4LShUPXHKGJObAiCG13lk2jURhCaAWgeVymyP3YfnHXzoSU6TAHvNMupwdxEy8YTZQus8m1jtHipITYbBCjQDpDglXlOZZ2xSj%2FPZg9zjuyCDdukdFBFSVlb5KdbB%2FylNK8DXfiWH1saGoq5Wcf0u%2FsnLXQsOE3iLIJZns%2BXUwiAXy9revUx6R0q8EAwyuhU14oa3QBByiiFd%2FLdNezmN9Kda68C3%2BNgfhQX1kxbmXg4TLq3nCk40sBMpn6wTDHvq6wqyjoAdmZMEwSMTWG7UBdqVRvMxHCXueoUlLeieVVmOab2hWE0u4NI4WVirlzYAIZHObowz6xKagkvD1oKtdYEDn2RoX0%2BPdtT21O2uCnFINBzasRycxVQUa%2FuKPMw%2BIu4wAY6pgEmBXuz0A11S3a%2FqOY7U82WNpF7YQiHfVRko7aydpEAiFOjz7vaGWGMPaHuLz5P2DoxYIO0mCfL7G70etGV64vbGgRTv6aDcL2kezNKsWjQS%2BJcm89smkvchfeGLfJXCKMLyWea8ckQMPmTZquKUJo1Nx7V70KJz4V1IX4Y0DVcRq0q5gEGr7mq5u1q3Vb9Y2ZYAd5RID4otcxtkyvTxZ3P8vDIVbL2&X-Amz-Signature=5d70840d86a6776fba58d9be2ba1c4a5596e0d08dbc62341c72c70c1c5960ac0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GYGIAQK%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG802aqLYvRYrcf2h%2BgZiCkmL7WzGPgO48Iu5AM%2BQOLmAiAGajZg7QU3JhzDwQ%2BcOqJ82WKT5ps2bd488dwID8dMeSr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMTotLBjGpaL767UlzKtwDLjAj1jAvkXQpHcuKjdqUkQnoZk2BYJkJ5VCjnP1x8Ijqngj%2BfldQsim%2F%2FHxH6zJ0HtgViZWWPp1ZSBSthKta%2BfedYaOM08PLkj%2Bif8PkudusszFX77BDFtvAWW1pvuoYuJfBBjDkFiBm8jufckx9IJI2Uw0RhoZ00JrDYRpbOj8lFQkwLY9eTRWReY%2FhVTgwogqwk8s7qMGNCPBeQCVpO8rne4IlWIAOXEOivLaD8qiJR1bZRT7h1pRvN78X4LShUPXHKGJObAiCG13lk2jURhCaAWgeVymyP3YfnHXzoSU6TAHvNMupwdxEy8YTZQus8m1jtHipITYbBCjQDpDglXlOZZ2xSj%2FPZg9zjuyCDdukdFBFSVlb5KdbB%2FylNK8DXfiWH1saGoq5Wcf0u%2FsnLXQsOE3iLIJZns%2BXUwiAXy9revUx6R0q8EAwyuhU14oa3QBByiiFd%2FLdNezmN9Kda68C3%2BNgfhQX1kxbmXg4TLq3nCk40sBMpn6wTDHvq6wqyjoAdmZMEwSMTWG7UBdqVRvMxHCXueoUlLeieVVmOab2hWE0u4NI4WVirlzYAIZHObowz6xKagkvD1oKtdYEDn2RoX0%2BPdtT21O2uCnFINBzasRycxVQUa%2FuKPMw%2BIu4wAY6pgEmBXuz0A11S3a%2FqOY7U82WNpF7YQiHfVRko7aydpEAiFOjz7vaGWGMPaHuLz5P2DoxYIO0mCfL7G70etGV64vbGgRTv6aDcL2kezNKsWjQS%2BJcm89smkvchfeGLfJXCKMLyWea8ckQMPmTZquKUJo1Nx7V70KJz4V1IX4Y0DVcRq0q5gEGr7mq5u1q3Vb9Y2ZYAd5RID4otcxtkyvTxZ3P8vDIVbL2&X-Amz-Signature=134312d8c6ad59ba966cd1f6bb59c789755ff86bf8fd4e4eb256240050353135&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
