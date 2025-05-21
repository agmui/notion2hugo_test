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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6EJBRJ2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIHpUZ08Kob6N%2FfkQ7cJd6hIa7bCg%2BwuNeN3UVcFXbM%2F5AiEApzbmSdJ6S0w7h%2FVuHf7bsuxxXKWTm9zTK0mK7zvlkCUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyzHphI1pN5Uckh2SrcA1zqiVgMN9Rw7l%2BCElOW6c9MLE6uirwoLSmKurEmpN22%2BeQYzyfjLHaJeek90X06oqOfdNGwPdKjOQJwvt4VCVaAyn20eY5ctnJjVNxvilxHETLlRzQAmSXDdxf0PwLUaeSSbqhCUkUcizuovbeQP5f3hImo8XkV6LWMX4FZna1ZY9CtAOg6W2pG10ankrFT%2BtUWGbhWjSfRSK8YDCG0WWJIW9lMSkLAU8JOr7bx%2F1Gy5DsEdcrAUHj9Pmrb81hkXLYX%2B%2BiqFcxyyE9%2BefAMlcOMYrVwEWSZ%2BUr3PdshTfP6ZJ97pkwBUVVLXi%2FirTpW9x3CUCe1czWsBzkXpYyd05c8j3qPmYHmmbLRvxkpnkul9TuynPsb%2FEK33yWfr9R8QJYvFuTB%2B33gfiZEtSJBKAdRgEHNt4xO%2FrKJRWkquBxJk3wj1xg44Sp1nPw0BzhNtlbcxA8uh9zhLbLtlWeDscYSzeXWP0ZpEB8cuU5JW77uACziQN%2B%2F3ZztjfeRmq7DASP95dj%2Ff2XebOFnGxOZ75seyhnJfXtL2DIWOkjmfGikXc7JDLlf5t9Oqg1LdqxuygtxvQQTn1fTwSUywQsWQmkzwzAWD%2FdV0ti0dn5c6chJvqsEv%2Bukpo4tgJpsMJ%2B3tsEGOqUBkNx2XhGye3hJ4%2Bz0H1dHQURfZj%2B0Hj6GZ%2B0MPhDgM0ysyOCWMTPvcgVNuk45bv04FHghcdoyAYcsPf0O66W9TN7A92IiRp8jvaNVJm9SopUc%2BgQJ1zizUys12cVjCqk3RGGQ%2F7nI8k2H6cD7grz2fP1ijzXXSPnlMJcmw3wWkawvj8Odz8aFX7SWWIvyXwKJWESRbLOBOReUyg95mnkmdXN54OUO&X-Amz-Signature=a5ed7503c62fd14dcaf31d1aec936ee6ec615be6632be05c1f975b4848b06586&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6EJBRJ2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIHpUZ08Kob6N%2FfkQ7cJd6hIa7bCg%2BwuNeN3UVcFXbM%2F5AiEApzbmSdJ6S0w7h%2FVuHf7bsuxxXKWTm9zTK0mK7zvlkCUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyzHphI1pN5Uckh2SrcA1zqiVgMN9Rw7l%2BCElOW6c9MLE6uirwoLSmKurEmpN22%2BeQYzyfjLHaJeek90X06oqOfdNGwPdKjOQJwvt4VCVaAyn20eY5ctnJjVNxvilxHETLlRzQAmSXDdxf0PwLUaeSSbqhCUkUcizuovbeQP5f3hImo8XkV6LWMX4FZna1ZY9CtAOg6W2pG10ankrFT%2BtUWGbhWjSfRSK8YDCG0WWJIW9lMSkLAU8JOr7bx%2F1Gy5DsEdcrAUHj9Pmrb81hkXLYX%2B%2BiqFcxyyE9%2BefAMlcOMYrVwEWSZ%2BUr3PdshTfP6ZJ97pkwBUVVLXi%2FirTpW9x3CUCe1czWsBzkXpYyd05c8j3qPmYHmmbLRvxkpnkul9TuynPsb%2FEK33yWfr9R8QJYvFuTB%2B33gfiZEtSJBKAdRgEHNt4xO%2FrKJRWkquBxJk3wj1xg44Sp1nPw0BzhNtlbcxA8uh9zhLbLtlWeDscYSzeXWP0ZpEB8cuU5JW77uACziQN%2B%2F3ZztjfeRmq7DASP95dj%2Ff2XebOFnGxOZ75seyhnJfXtL2DIWOkjmfGikXc7JDLlf5t9Oqg1LdqxuygtxvQQTn1fTwSUywQsWQmkzwzAWD%2FdV0ti0dn5c6chJvqsEv%2Bukpo4tgJpsMJ%2B3tsEGOqUBkNx2XhGye3hJ4%2Bz0H1dHQURfZj%2B0Hj6GZ%2B0MPhDgM0ysyOCWMTPvcgVNuk45bv04FHghcdoyAYcsPf0O66W9TN7A92IiRp8jvaNVJm9SopUc%2BgQJ1zizUys12cVjCqk3RGGQ%2F7nI8k2H6cD7grz2fP1ijzXXSPnlMJcmw3wWkawvj8Odz8aFX7SWWIvyXwKJWESRbLOBOReUyg95mnkmdXN54OUO&X-Amz-Signature=da8f24bfc5a297591efedddc56099597339a0dc932509eb7f555e4c2aa000ebd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
