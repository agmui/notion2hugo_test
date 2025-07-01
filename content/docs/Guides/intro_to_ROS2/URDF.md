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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVKKOK2J%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T035425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2uX9BKVDAfKZXCYXy%2Bv4%2FKsLRdrV2jvPQCEBAxaA4TQIgLQzr5veIiXgNP9627luNRN%2F134pt2H8U1mQ7ZvWzAXYqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZa3cBEYmvj6OJGdyrcA8tQyH53Z%2FGvZ5A6GGKXb0Fk14zawByroW%2FvULk28uMYVyibYBwPJz0nL0aqBt7EUNyCVtIKxKFMD%2F11RqbBXwm5ui7hssQrMAHiAXRenHmqfurkDFcyGnm%2BbnReEqEEyY9EHSfUJAjPqts8Q0%2F%2F%2F2tQk812EUnLyoAVjCtnH2T1T4tiQp5sGCAX6FXVCb6zJWs66ij9OBxjh%2FblDQgFKuwRozaxbngSTTMCYZhUjWVc7ezknYqiB8XEtExB6bSSg%2Bmb72Pv6NnSaca4Q64V9WEhia8YNtCiJv6aCuOD9vTu45iLBRuRRwFYVYNdC5kSl878Ljv58H4bvL8YWkucybCirQRdXWU6%2F9qFxdaHogLy8qjfwEzWZcB22MEGtAULvmd3ENBFjc1hSv2%2BGVE4AevUdFotx%2BIFgvDwdCoUl6IqY%2FT8I%2FlFVLORfUkG%2F53xo0GrXT37ToBjl%2BOzCCOr34qZWhePIir8ppphHHjxlABux2qS2xMADb9J9ZTfrQGyiTF%2FzLkz0%2FnOJRqSl5KK64oJwIWYcEJKVtcxXc6bmkEO%2FCaJijz1IAoFloujOovenGKk1SYFUK8CxVK3ciklZrHkoGR69E5hcjbzgpcoSl0Su9UfdaH4eQdNNPjTMKKpjcMGOqUBy5urKxXijJGLlvVJygdZSzLpPP3gASJbDqHeb13N%2FJ0msNPRqREg8WhJa7AaOzZQ9CDhd8iPHj%2FtXLJiOl%2BRKoum3t31jf43fsmRWDhwdN9vBI7QhTiHQVjbHa7WhHZ1X9DYDeIHf7rbDtmPHfa2otE7Uz5M4cW9TSenUH0jUMzEXtZNo5pA01roApOYwdBe9rF1jhd5mraia6rTYgduiP8NLK3h&X-Amz-Signature=51aa3904bba356febadb3303d5805ec95d64c4f4207d953eb69c7b09ab13dfc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVKKOK2J%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T035425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2uX9BKVDAfKZXCYXy%2Bv4%2FKsLRdrV2jvPQCEBAxaA4TQIgLQzr5veIiXgNP9627luNRN%2F134pt2H8U1mQ7ZvWzAXYqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZa3cBEYmvj6OJGdyrcA8tQyH53Z%2FGvZ5A6GGKXb0Fk14zawByroW%2FvULk28uMYVyibYBwPJz0nL0aqBt7EUNyCVtIKxKFMD%2F11RqbBXwm5ui7hssQrMAHiAXRenHmqfurkDFcyGnm%2BbnReEqEEyY9EHSfUJAjPqts8Q0%2F%2F%2F2tQk812EUnLyoAVjCtnH2T1T4tiQp5sGCAX6FXVCb6zJWs66ij9OBxjh%2FblDQgFKuwRozaxbngSTTMCYZhUjWVc7ezknYqiB8XEtExB6bSSg%2Bmb72Pv6NnSaca4Q64V9WEhia8YNtCiJv6aCuOD9vTu45iLBRuRRwFYVYNdC5kSl878Ljv58H4bvL8YWkucybCirQRdXWU6%2F9qFxdaHogLy8qjfwEzWZcB22MEGtAULvmd3ENBFjc1hSv2%2BGVE4AevUdFotx%2BIFgvDwdCoUl6IqY%2FT8I%2FlFVLORfUkG%2F53xo0GrXT37ToBjl%2BOzCCOr34qZWhePIir8ppphHHjxlABux2qS2xMADb9J9ZTfrQGyiTF%2FzLkz0%2FnOJRqSl5KK64oJwIWYcEJKVtcxXc6bmkEO%2FCaJijz1IAoFloujOovenGKk1SYFUK8CxVK3ciklZrHkoGR69E5hcjbzgpcoSl0Su9UfdaH4eQdNNPjTMKKpjcMGOqUBy5urKxXijJGLlvVJygdZSzLpPP3gASJbDqHeb13N%2FJ0msNPRqREg8WhJa7AaOzZQ9CDhd8iPHj%2FtXLJiOl%2BRKoum3t31jf43fsmRWDhwdN9vBI7QhTiHQVjbHa7WhHZ1X9DYDeIHf7rbDtmPHfa2otE7Uz5M4cW9TSenUH0jUMzEXtZNo5pA01roApOYwdBe9rF1jhd5mraia6rTYgduiP8NLK3h&X-Amz-Signature=c9b571427d9d34555d1d31125bfc2ac41d44dfdf638994679e2f14b4204de037&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
