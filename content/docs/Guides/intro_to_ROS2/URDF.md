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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPN6KJUH%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhmuaqSYmIcJ5oQGsOZ8XAzMMzqB%2FIFst58blaMFsF2AIhAKZtUQq0n3O%2BH%2FzH3Spv1ciuM3Go3olQPfAMj7%2BXD59EKv8DCHIQABoMNjM3NDIzMTgzODA1IgwdqyAEWem5MrPsbq4q3APdffw6Un%2BKNcn3jRH54NoY8t4WV6tbYzR8HupdTa0pZiUq2a%2BsNeoyVGvGQWrKpM%2FcZWlb7nfL%2BJHu2ON6lbrxMkDuMrzR%2Bva53wnvWdf9XvH%2Bjoz1MZZku9KgKxG1%2BAjmmzJCKDiRdRlBubtmhBNX01Ps9NfI1aiQrIFa5O0zVVpAeL%2BUnTGsxZpan4Cvoeb74R%2FT3PO0e%2FoIHD4u2yrr%2BlM%2F2S3LAVvDkqA7%2B2eQVBn2m5l9KF1oCvs1orh6W%2F7sPRKSqfKBTpDkNclvtLAz82sEAwyx0V40EmV3bf5esyirsNLvIJj92hwTyjerLcBsZ7zh1oDcGQF3e3H9LCOciuCjCDi%2FXPscNIO9fGdrHAz6j36Ufp6hWlXuBjYr7mUf7nWiGXeWgMyCFlFO6N%2BBS0MmrbXXjJP2Q8wk%2BCop91auD2nekhHLgYjRdgim9xUqsfW1NXyri%2BdCMQQrN0KwtLxpVDpGUB4QFB%2B3OocpmR0cA7VuHalW3sWFV%2Bg2vLht6JRyVgnA5ip6ktvE3xNdnGyRVyiedxkQigjAh%2Fk43mfNlYGk%2BnsoU6miGETF%2B4gZVjdU82uVs29Cvy4CQkb6SzaekLBKhEeorh0r%2Ff55Jqc0fPE9JO1qwb3GTjCy4PHABjqkAdZn68jO73MA0JRX56qhkWWushWFuo2%2FbKFSdB9um5B8cFq6WGKZLjuqvt%2Bdfnl9BiJMtM%2FAkewAHHd6zNX%2BUVKam4A3G0PZ4Bc2%2FB%2BsAjr2Itw%2BH1n99HQE58XjjCyM9gSskOO5f%2B10Y6ms3ahzqpsUTAgFOCd22UpJrTVYjxSA8%2BQvj1qSQIwo4LH0bOeTG9YSLVFh6ztz0d61XzAJRXZwaFSd&X-Amz-Signature=7423b2d2a64aff87edc19d87076763d3ff97235c5515fc5f78c6498054fec09b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPN6KJUH%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhmuaqSYmIcJ5oQGsOZ8XAzMMzqB%2FIFst58blaMFsF2AIhAKZtUQq0n3O%2BH%2FzH3Spv1ciuM3Go3olQPfAMj7%2BXD59EKv8DCHIQABoMNjM3NDIzMTgzODA1IgwdqyAEWem5MrPsbq4q3APdffw6Un%2BKNcn3jRH54NoY8t4WV6tbYzR8HupdTa0pZiUq2a%2BsNeoyVGvGQWrKpM%2FcZWlb7nfL%2BJHu2ON6lbrxMkDuMrzR%2Bva53wnvWdf9XvH%2Bjoz1MZZku9KgKxG1%2BAjmmzJCKDiRdRlBubtmhBNX01Ps9NfI1aiQrIFa5O0zVVpAeL%2BUnTGsxZpan4Cvoeb74R%2FT3PO0e%2FoIHD4u2yrr%2BlM%2F2S3LAVvDkqA7%2B2eQVBn2m5l9KF1oCvs1orh6W%2F7sPRKSqfKBTpDkNclvtLAz82sEAwyx0V40EmV3bf5esyirsNLvIJj92hwTyjerLcBsZ7zh1oDcGQF3e3H9LCOciuCjCDi%2FXPscNIO9fGdrHAz6j36Ufp6hWlXuBjYr7mUf7nWiGXeWgMyCFlFO6N%2BBS0MmrbXXjJP2Q8wk%2BCop91auD2nekhHLgYjRdgim9xUqsfW1NXyri%2BdCMQQrN0KwtLxpVDpGUB4QFB%2B3OocpmR0cA7VuHalW3sWFV%2Bg2vLht6JRyVgnA5ip6ktvE3xNdnGyRVyiedxkQigjAh%2Fk43mfNlYGk%2BnsoU6miGETF%2B4gZVjdU82uVs29Cvy4CQkb6SzaekLBKhEeorh0r%2Ff55Jqc0fPE9JO1qwb3GTjCy4PHABjqkAdZn68jO73MA0JRX56qhkWWushWFuo2%2FbKFSdB9um5B8cFq6WGKZLjuqvt%2Bdfnl9BiJMtM%2FAkewAHHd6zNX%2BUVKam4A3G0PZ4Bc2%2FB%2BsAjr2Itw%2BH1n99HQE58XjjCyM9gSskOO5f%2B10Y6ms3ahzqpsUTAgFOCd22UpJrTVYjxSA8%2BQvj1qSQIwo4LH0bOeTG9YSLVFh6ztz0d61XzAJRXZwaFSd&X-Amz-Signature=74a9f4f9525f34c93b0ba5be00cfb7b0dc37460f777b733475eb6c35f330c43e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
