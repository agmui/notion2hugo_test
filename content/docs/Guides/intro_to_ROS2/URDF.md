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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2EWFYRW%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDd1zAixgRTnFPZgsyTDiep5Ov6%2BUMFufrGstiSgmjCoAiB%2FVC%2Ff%2FMjMxEsuvVEhbdh%2BfqmsD%2BXcBLrRF3k8dfHk%2Bir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMQDSFBl6jPIV8KFLdKtwDHuvvBaX0HUvEaZpbFKyf%2B8Swiu%2BgUq9L1CuZXUCzkOaJLvznZ4i4UitUsiTb1k37KHYhAQ2g0X9ytFeUzrepbpQfGlnELg5NvjS1%2FWSJKiTH0eo0kLKL5Mz95y4wAmci4Gf%2F%2FudehRJEX%2BoJiKrf4uG%2FtxvrYpwncJ2KgSlTEYom5aQqhSQO%2BsifCGnhH7lyOW%2FX1gUyC4vKrAteYMpjTSA%2Fp1d5aqSDyfEKYoYB9rMBPn93J76%2FjHg0K6dgm9A6tuN741hloo4mKmjrxHs2z0f10PjSef1Yk0szqlMr7ukKE1pl9juUFREAe%2BzsE%2FpvM4f%2Fy9lk45aEkp8NPlCQh9WN3Q3j2LsOMztYKYZBqJlcjZhsqALYaHv%2FoEMpVF4%2F0YJna51MnCOZAdbOViFRe351UCwvmBodQM5jsym9jYcqalmTMRDEmQzD51JpkkHCgKos9ZSGOtp3fWiinjQ1BfqSv%2BQmQDVNoP0clIy9%2BfValFSJ2w41wdYQ6zyx8ec2eDT5HWvqFl%2BWa6uKsAYZb9X%2F%2BOhjyWgjGli%2BdOeZViHthpTtd%2BBTUd6QewdPn8hNlWOCCW5z%2F5Ew5aWQ%2FtlHOpTqMeclb9nofsw13lrMjcAHe5TQqvzhogUDsVAwr%2F%2BZvQY6pgHiwS0MmTvzH87GMqR9BrYFQ%2Fc%2F1QmSKDcfFlNi74y7f%2FYK5w99qkTzr%2Fiv2PYlHGYc8if8KFGBI7Tyy2uLB%2F19KShZfbJyC1wPPN4%2FKQpWE90bfLv19pA8F1vdzxX5M0xLywTCv28bARsyQr5jWjWeTa81fiwYqd9lDfSK3fka6uGYLzPDCIuhV0%2FVXdIB0B63NyTJJqCklrs%2B3qKwDc6r5IvkLmUP&X-Amz-Signature=80e3affd60abffc549dd65267b0a3ef8898f4e2b95a05124c804189ab7e1e548&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2EWFYRW%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDd1zAixgRTnFPZgsyTDiep5Ov6%2BUMFufrGstiSgmjCoAiB%2FVC%2Ff%2FMjMxEsuvVEhbdh%2BfqmsD%2BXcBLrRF3k8dfHk%2Bir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMQDSFBl6jPIV8KFLdKtwDHuvvBaX0HUvEaZpbFKyf%2B8Swiu%2BgUq9L1CuZXUCzkOaJLvznZ4i4UitUsiTb1k37KHYhAQ2g0X9ytFeUzrepbpQfGlnELg5NvjS1%2FWSJKiTH0eo0kLKL5Mz95y4wAmci4Gf%2F%2FudehRJEX%2BoJiKrf4uG%2FtxvrYpwncJ2KgSlTEYom5aQqhSQO%2BsifCGnhH7lyOW%2FX1gUyC4vKrAteYMpjTSA%2Fp1d5aqSDyfEKYoYB9rMBPn93J76%2FjHg0K6dgm9A6tuN741hloo4mKmjrxHs2z0f10PjSef1Yk0szqlMr7ukKE1pl9juUFREAe%2BzsE%2FpvM4f%2Fy9lk45aEkp8NPlCQh9WN3Q3j2LsOMztYKYZBqJlcjZhsqALYaHv%2FoEMpVF4%2F0YJna51MnCOZAdbOViFRe351UCwvmBodQM5jsym9jYcqalmTMRDEmQzD51JpkkHCgKos9ZSGOtp3fWiinjQ1BfqSv%2BQmQDVNoP0clIy9%2BfValFSJ2w41wdYQ6zyx8ec2eDT5HWvqFl%2BWa6uKsAYZb9X%2F%2BOhjyWgjGli%2BdOeZViHthpTtd%2BBTUd6QewdPn8hNlWOCCW5z%2F5Ew5aWQ%2FtlHOpTqMeclb9nofsw13lrMjcAHe5TQqvzhogUDsVAwr%2F%2BZvQY6pgHiwS0MmTvzH87GMqR9BrYFQ%2Fc%2F1QmSKDcfFlNi74y7f%2FYK5w99qkTzr%2Fiv2PYlHGYc8if8KFGBI7Tyy2uLB%2F19KShZfbJyC1wPPN4%2FKQpWE90bfLv19pA8F1vdzxX5M0xLywTCv28bARsyQr5jWjWeTa81fiwYqd9lDfSK3fka6uGYLzPDCIuhV0%2FVXdIB0B63NyTJJqCklrs%2B3qKwDc6r5IvkLmUP&X-Amz-Signature=7c95c156faf39e986b0527d12251549042f798e980d66049ef40532746158eeb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
