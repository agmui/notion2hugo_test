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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W427JZXL%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaPoU5mlGJ60sIzwf9JxchnX%2Fukvco7k18VggdZTvQfgIhANJq2wSqabtkqVuOXbjOvsw8uBc00DhwqlUKjFjEfXo%2BKv8DCB4QABoMNjM3NDIzMTgzODA1IgwyocAdOtRDSsV91Xcq3ANTTHqkr7Iuoem1ajC7PoB8UkyvodvFOzGqL%2FYF1X8mOLKVsykoqGx8AgsX6cf69PIqXpY9VLMWTBy2b9mstT3PlFpCSI1E9X7mDKInSirN5AUnNCdrCfCb3HcadRVnmK7i7T387o3a9%2BA9pXsfc7aM%2BiadNwIm1oCdIPUPIC5mFAg%2Fk%2Fpm48RJZqvyk0W25UAh2kvSIWKU%2BfV%2BFQBAeFxSfeJHdCRSHgxtr920YUvZ5XgjSuIIQcCcefBcz3WFeARYMkOR7Y4VV7zwthQ6a%2BHspMU9zfG%2FQmGceZuNlN79aVhJ2B2SiTp%2BL3Q8vCtmdvhjlcMqCAO5d3SI9TyL9C86Qqkajqe%2FNlJhIxQwGlagneRyAUMQgOTvMWj3pgIdXOEJ9PTWZCA1HLX5aa3%2BnT62W%2FdQn32W%2FuxNPzYBqrtr92S2PTd7ic1FLueoQn0KvbDFrF381CymXgBa9QiY5JbSGN%2B%2B3EfYCAeWPvQPCkq3nSgASORr33S%2BipWqKOf415Hq4uLuSXO7TMuynB7S%2FkCuAUSHiF7rssgJcx9Ep46AjobIXLUy1pzQAwtSknEi6fby%2BGQm3iHwZ8PYAQuPkNt4R%2FBL5%2BxRW02q1J0jKIZbINnhfJe9WyuccB2sfDCw6vW%2FBjqkAXHjSbuZ8DpdnTRG%2F8VkUq26uOjSgvEfYMBqSQ142NSNAOuHUn6Hef3dlUF%2FpPTxhvXDvVTv69gzSerm%2FmlO39k3OX1Ldnd%2ByhKp28yPy7gIBzfONb%2FnYHyUp5%2FCVsTpjNRQ9gR2uAlFnyIHPAEMX7oh0EX0FJTxdaKF7yxqAP9lEUzpdc80O%2Fsc1xdGXQJJCUKzgR6uDPWcKBlclq7j5tBZfm6P&X-Amz-Signature=3fb3d6c0c146c027f32dd2ec2a5ab330ae95d21208584b3814b4f3f6a01280b9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W427JZXL%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaPoU5mlGJ60sIzwf9JxchnX%2Fukvco7k18VggdZTvQfgIhANJq2wSqabtkqVuOXbjOvsw8uBc00DhwqlUKjFjEfXo%2BKv8DCB4QABoMNjM3NDIzMTgzODA1IgwyocAdOtRDSsV91Xcq3ANTTHqkr7Iuoem1ajC7PoB8UkyvodvFOzGqL%2FYF1X8mOLKVsykoqGx8AgsX6cf69PIqXpY9VLMWTBy2b9mstT3PlFpCSI1E9X7mDKInSirN5AUnNCdrCfCb3HcadRVnmK7i7T387o3a9%2BA9pXsfc7aM%2BiadNwIm1oCdIPUPIC5mFAg%2Fk%2Fpm48RJZqvyk0W25UAh2kvSIWKU%2BfV%2BFQBAeFxSfeJHdCRSHgxtr920YUvZ5XgjSuIIQcCcefBcz3WFeARYMkOR7Y4VV7zwthQ6a%2BHspMU9zfG%2FQmGceZuNlN79aVhJ2B2SiTp%2BL3Q8vCtmdvhjlcMqCAO5d3SI9TyL9C86Qqkajqe%2FNlJhIxQwGlagneRyAUMQgOTvMWj3pgIdXOEJ9PTWZCA1HLX5aa3%2BnT62W%2FdQn32W%2FuxNPzYBqrtr92S2PTd7ic1FLueoQn0KvbDFrF381CymXgBa9QiY5JbSGN%2B%2B3EfYCAeWPvQPCkq3nSgASORr33S%2BipWqKOf415Hq4uLuSXO7TMuynB7S%2FkCuAUSHiF7rssgJcx9Ep46AjobIXLUy1pzQAwtSknEi6fby%2BGQm3iHwZ8PYAQuPkNt4R%2FBL5%2BxRW02q1J0jKIZbINnhfJe9WyuccB2sfDCw6vW%2FBjqkAXHjSbuZ8DpdnTRG%2F8VkUq26uOjSgvEfYMBqSQ142NSNAOuHUn6Hef3dlUF%2FpPTxhvXDvVTv69gzSerm%2FmlO39k3OX1Ldnd%2ByhKp28yPy7gIBzfONb%2FnYHyUp5%2FCVsTpjNRQ9gR2uAlFnyIHPAEMX7oh0EX0FJTxdaKF7yxqAP9lEUzpdc80O%2Fsc1xdGXQJJCUKzgR6uDPWcKBlclq7j5tBZfm6P&X-Amz-Signature=1f49db00eb3850ea20c97b0872dc506d2567d14f41939a6865f9359b943c1d0b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
