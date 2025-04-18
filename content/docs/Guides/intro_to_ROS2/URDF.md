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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZGQLMSW%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYsfKpjch5oC5MjhQZpz3n2BDsE5fhT87yhiibbQdn%2FAIgDlLqn2MMliMgNlSpkafDKy%2BnJUPOCQtCvlPMTZOW5PUq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDFZ6rV415iufEZI6lircA9ITVAJbMPBnIe5nwmdMQ4SZb0kqf1WsJwfsE70OmzD51Xqn3Ut02UXUlgaG5lRaq85mApACc2E0Mk5HccY2cqvNl2fL4Be%2FPP%2BE8RloBSlzzCwyY3CuiUE%2FvGFD4cwuEFJ9CEnsTj7e0bEXu7FyOI8VJs1IfJjLV9rXwXbFF1ut%2Bf%2F3Tg8dtN%2FTXijMS7CajqCsEfTlutU%2Baq91r02h1cLzKSQlshHm93O6ZysKHKs90zFhGHmCW5dQJ8%2FrVH5MW9lFCst0hveWAhgDxvQZqgYRLiCbbbFRtWdn%2F0Pk0jvYMsvbbw8z3QnMPu%2Bvpm%2FISU0wYB%2BnZjNXsNW6nPfLACz7hXPc%2Bn7P1G6gEIO2YibmwiSAKJnKFbAcMW20LCMo5faAG4f8q2Odfh0MeP0cmgbUjOUJuTeKGLbeiJ%2FwiGFm2dcab52FjI8XVXnf%2BdPbdnV1BrQFLEMXekPl%2Fd3N7SAI4BzxJh89UnThsl3%2Ba8iLtkC9lL%2Bko8Q1zxpTb1BvsDa0Zg5JzwW6ueZ6QUw9MQm%2BX8Hle8GXk3FnKFFjWcbg4PCIR5BCr6oU5wdL6UJJsVbdbp6Q7YkyuyHWRRfwY07MC%2FkFFFB%2BWCvceQXpl6gbpQx7NmmfEwiZ7ncrMOCNicAGOqUBRpQxoRzRDaEo8NKpSmgL%2BgXyR7K1ZhYbZIk81FCr7x%2BAVI9KqNvKobqy5GfLBPxG1Zy1Z9d%2B6VyoRc8jc0HQgk9qLbWRJnsNFxkf4NVJv9%2FFVZxfst6XE1dv7XF0JtobpipmxU9Qsv74jjnKseWg%2F%2FyoV1%2BwPjNu42y0uV89%2BK89SxVlOrxSujGJFBsLsjpzs6IZ%2FhIVU0ejzF9prnK1QIBOElgC&X-Amz-Signature=6a3d39f11841e46bff33aa4a673f1455457da6de6fd1eba7e33bb92544a4a877&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZGQLMSW%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYsfKpjch5oC5MjhQZpz3n2BDsE5fhT87yhiibbQdn%2FAIgDlLqn2MMliMgNlSpkafDKy%2BnJUPOCQtCvlPMTZOW5PUq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDFZ6rV415iufEZI6lircA9ITVAJbMPBnIe5nwmdMQ4SZb0kqf1WsJwfsE70OmzD51Xqn3Ut02UXUlgaG5lRaq85mApACc2E0Mk5HccY2cqvNl2fL4Be%2FPP%2BE8RloBSlzzCwyY3CuiUE%2FvGFD4cwuEFJ9CEnsTj7e0bEXu7FyOI8VJs1IfJjLV9rXwXbFF1ut%2Bf%2F3Tg8dtN%2FTXijMS7CajqCsEfTlutU%2Baq91r02h1cLzKSQlshHm93O6ZysKHKs90zFhGHmCW5dQJ8%2FrVH5MW9lFCst0hveWAhgDxvQZqgYRLiCbbbFRtWdn%2F0Pk0jvYMsvbbw8z3QnMPu%2Bvpm%2FISU0wYB%2BnZjNXsNW6nPfLACz7hXPc%2Bn7P1G6gEIO2YibmwiSAKJnKFbAcMW20LCMo5faAG4f8q2Odfh0MeP0cmgbUjOUJuTeKGLbeiJ%2FwiGFm2dcab52FjI8XVXnf%2BdPbdnV1BrQFLEMXekPl%2Fd3N7SAI4BzxJh89UnThsl3%2Ba8iLtkC9lL%2Bko8Q1zxpTb1BvsDa0Zg5JzwW6ueZ6QUw9MQm%2BX8Hle8GXk3FnKFFjWcbg4PCIR5BCr6oU5wdL6UJJsVbdbp6Q7YkyuyHWRRfwY07MC%2FkFFFB%2BWCvceQXpl6gbpQx7NmmfEwiZ7ncrMOCNicAGOqUBRpQxoRzRDaEo8NKpSmgL%2BgXyR7K1ZhYbZIk81FCr7x%2BAVI9KqNvKobqy5GfLBPxG1Zy1Z9d%2B6VyoRc8jc0HQgk9qLbWRJnsNFxkf4NVJv9%2FFVZxfst6XE1dv7XF0JtobpipmxU9Qsv74jjnKseWg%2F%2FyoV1%2BwPjNu42y0uV89%2BK89SxVlOrxSujGJFBsLsjpzs6IZ%2FhIVU0ejzF9prnK1QIBOElgC&X-Amz-Signature=303fc55c42eb671631c38ceeb38d42f9601a4346dc5571afa6104ecc0cf34367&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
