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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSD22YXD%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIWA6nrF%2BGTb9shmRiIVIpyMx0k84Y4i65VcjEnWTznAIhAOSsnC05PVz2SyYVwA5AH7%2F1IuXmNLTvNcr7C1FPpMTwKv8DCBYQABoMNjM3NDIzMTgzODA1IgwnqAwSct0G9ZV5GEgq3AM9FKMPEX%2FaCrI2WlS77gYt1yQlt5WbWtkTQ%2F%2FMx8cyaiG6oqWPDcWM81azPlmNXr59Ta7zrvD5nMZgtAaaNjycL5MXO%2FQV8FwCkUVfZzGXjLzDvbJPQidr8yyp0ccb95gPl6EOV3X%2BA3%2FG3MSuJptwdKogVvIipcDqhuVT7KDPJ2VE8FBIBFN4hiq6Ere8zq%2FH1xFbWcXW0%2FdLoCgFpCmv3adIm9Jg0BXUdkjxpipmJyk%2FzMOBtCUp%2BDJHHHu6sKhhD%2B1lZpSgq7Y0s5WBOX6pM9b44GFxFSO4W5yw1Den%2Bt5KvjhI%2BftQdkS9Pj%2FiKeaylw6RZJnwElZh%2BdgXU0Yo%2B3ZHY%2FGVE%2Fw1XdJc2BKSsKnzuiB5FBzD8zxL4leTjvUST8KQ7QTn1bCHzGJZE1W31GYvQ%2F5wr9F9vG0ZybX7gCEfYx1WncNsj9WY1%2FXVcRmwy6nSjN%2B2Lh5%2B3s4VCWQQGE4llQA8rgxAOrEiTmWMyHfYbRi0Os7nC48whuKFsxSaN1w8WiEGfe57FouWvp2S7o7hW%2BmcUaUpicS2PVuQaxXRZ%2BvINwonU7uQKAoFuhkYYNygA2jENcfNtXest4gydFMtvoC4WGxbAjcNdglpGMyHckd9X39Zz1SXMjCH3re9BjqkAYbsRTRIxVslU3S5xt5kqXScX3116FJHEylkmKaXfOQyseL0b0TsGcB8QhG7i%2BlM8PZKiZqv6rXPrzJKMOtMHwYYQ69nfGKWQ2WHizbWAEbnPUfAYhnr1BOAKiGhk01YtKncr%2F3HexgKzdAgT2cfRPmI1hlKqOfhE5I%2BdYJx36dlCCNZsopGMwRbrFRHl7PevFKk56zMACBrAEaSaJ0TNoxaZgif&X-Amz-Signature=9a3352008980bf28c933d64268ef9c2fd6ca23057030c3685bce423d700ef68c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSD22YXD%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIWA6nrF%2BGTb9shmRiIVIpyMx0k84Y4i65VcjEnWTznAIhAOSsnC05PVz2SyYVwA5AH7%2F1IuXmNLTvNcr7C1FPpMTwKv8DCBYQABoMNjM3NDIzMTgzODA1IgwnqAwSct0G9ZV5GEgq3AM9FKMPEX%2FaCrI2WlS77gYt1yQlt5WbWtkTQ%2F%2FMx8cyaiG6oqWPDcWM81azPlmNXr59Ta7zrvD5nMZgtAaaNjycL5MXO%2FQV8FwCkUVfZzGXjLzDvbJPQidr8yyp0ccb95gPl6EOV3X%2BA3%2FG3MSuJptwdKogVvIipcDqhuVT7KDPJ2VE8FBIBFN4hiq6Ere8zq%2FH1xFbWcXW0%2FdLoCgFpCmv3adIm9Jg0BXUdkjxpipmJyk%2FzMOBtCUp%2BDJHHHu6sKhhD%2B1lZpSgq7Y0s5WBOX6pM9b44GFxFSO4W5yw1Den%2Bt5KvjhI%2BftQdkS9Pj%2FiKeaylw6RZJnwElZh%2BdgXU0Yo%2B3ZHY%2FGVE%2Fw1XdJc2BKSsKnzuiB5FBzD8zxL4leTjvUST8KQ7QTn1bCHzGJZE1W31GYvQ%2F5wr9F9vG0ZybX7gCEfYx1WncNsj9WY1%2FXVcRmwy6nSjN%2B2Lh5%2B3s4VCWQQGE4llQA8rgxAOrEiTmWMyHfYbRi0Os7nC48whuKFsxSaN1w8WiEGfe57FouWvp2S7o7hW%2BmcUaUpicS2PVuQaxXRZ%2BvINwonU7uQKAoFuhkYYNygA2jENcfNtXest4gydFMtvoC4WGxbAjcNdglpGMyHckd9X39Zz1SXMjCH3re9BjqkAYbsRTRIxVslU3S5xt5kqXScX3116FJHEylkmKaXfOQyseL0b0TsGcB8QhG7i%2BlM8PZKiZqv6rXPrzJKMOtMHwYYQ69nfGKWQ2WHizbWAEbnPUfAYhnr1BOAKiGhk01YtKncr%2F3HexgKzdAgT2cfRPmI1hlKqOfhE5I%2BdYJx36dlCCNZsopGMwRbrFRHl7PevFKk56zMACBrAEaSaJ0TNoxaZgif&X-Amz-Signature=02e1ade252db8303b42cc61cfb9c15a257d62279ef6ac5ce9ab8fcf3dfa681fb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
