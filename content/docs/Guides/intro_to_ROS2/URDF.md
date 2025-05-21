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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6FXZ7HY%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIGoD4O2571MfZafc%2BqeJF3twkoAkIm9grrkUgkw%2B3r8DAiAKXqHJ4D0Sx1G0cF2pDqts1%2Fn69KDsKSEOOuONcFAvOyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7YNXzewmCR6y0OI5KtwDHNRA1f6uydynWMpTlVQChT0XLtSQ1U%2FkxWgEjuLsm0gH1dZIUucsChjScm7QdDGLe8o2SHD2IzYV5O%2Fy4i8T1lXuCqnS86OqpEfPMDAi8wlHbAUT3M%2FwuAsIlUFPaB584leb5gd2pG6BbTQhQ5gyOubqJ3ch57oTHhLn%2BvFAjkSHAAqebg%2BIJOd2jiPtztneIw8YQr13IRTNMrPGzrQlmzo6K57fP5rVeJFdXMkHV3QJykz7EvcVpTQkUMdNNqMute50Ju8acfU2fb%2FbhYKKujOZ0IbHaQ6MOA9lTMer62kg2im1hkn2G09WcuWHAnt%2BfrHSts%2Bb9T6PsCzo8Ag%2Bt4VUxNml03SIPLFUYJoJnxlzNFnETp6DzGO4WzLgRpihVCXohr2SGQDOQTj83%2BZtx6ZeoVRQTtSMdzMcaYuxIkhvZx9cdA4E6JAjL%2FBxsp4givCPNbeXaJHp65tCnC204vXMKL5XOw1P2wBVQy993Fun7OKX438sExuuxSqo9rMXeUibuVbeo7db%2FWnlWIfpm3K%2F1CUZw5gis9x9SOkHSjY4tFQ1sDBcsdX6K3Pa8TSV1pjVWH7NtsQxNi6olxnsdyoN2IPZ8Z64govE9OBkRNkwwYSDBFAbOhrTKe4wpde4wQY6pgHvpgpy7P2QSoCFqp4npBYvS7os45m2b2qUozxz2czkf2rq8UD61LupivB7HEcoD0rUMwIOn1TucsJ%2BcNOsPazkwkjc%2BWSe20qZEEr%2FvuLOYX%2BIWBJGtAwCbK62y2BH9UGu7fNIH1o7PphqwJSUII%2B4i0ar5mqIbEnfpdB9UhWmsr6pWtHNEjEYTmUEYQ1gvuRVa0gqZ5XG5u14%2FdXtwidfWJ3vOppk&X-Amz-Signature=db959f89fbd0a6f603f1391a588e1bbb0ee7093237b660f07207e90fc48cc803&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6FXZ7HY%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIGoD4O2571MfZafc%2BqeJF3twkoAkIm9grrkUgkw%2B3r8DAiAKXqHJ4D0Sx1G0cF2pDqts1%2Fn69KDsKSEOOuONcFAvOyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7YNXzewmCR6y0OI5KtwDHNRA1f6uydynWMpTlVQChT0XLtSQ1U%2FkxWgEjuLsm0gH1dZIUucsChjScm7QdDGLe8o2SHD2IzYV5O%2Fy4i8T1lXuCqnS86OqpEfPMDAi8wlHbAUT3M%2FwuAsIlUFPaB584leb5gd2pG6BbTQhQ5gyOubqJ3ch57oTHhLn%2BvFAjkSHAAqebg%2BIJOd2jiPtztneIw8YQr13IRTNMrPGzrQlmzo6K57fP5rVeJFdXMkHV3QJykz7EvcVpTQkUMdNNqMute50Ju8acfU2fb%2FbhYKKujOZ0IbHaQ6MOA9lTMer62kg2im1hkn2G09WcuWHAnt%2BfrHSts%2Bb9T6PsCzo8Ag%2Bt4VUxNml03SIPLFUYJoJnxlzNFnETp6DzGO4WzLgRpihVCXohr2SGQDOQTj83%2BZtx6ZeoVRQTtSMdzMcaYuxIkhvZx9cdA4E6JAjL%2FBxsp4givCPNbeXaJHp65tCnC204vXMKL5XOw1P2wBVQy993Fun7OKX438sExuuxSqo9rMXeUibuVbeo7db%2FWnlWIfpm3K%2F1CUZw5gis9x9SOkHSjY4tFQ1sDBcsdX6K3Pa8TSV1pjVWH7NtsQxNi6olxnsdyoN2IPZ8Z64govE9OBkRNkwwYSDBFAbOhrTKe4wpde4wQY6pgHvpgpy7P2QSoCFqp4npBYvS7os45m2b2qUozxz2czkf2rq8UD61LupivB7HEcoD0rUMwIOn1TucsJ%2BcNOsPazkwkjc%2BWSe20qZEEr%2FvuLOYX%2BIWBJGtAwCbK62y2BH9UGu7fNIH1o7PphqwJSUII%2B4i0ar5mqIbEnfpdB9UhWmsr6pWtHNEjEYTmUEYQ1gvuRVa0gqZ5XG5u14%2FdXtwidfWJ3vOppk&X-Amz-Signature=80c897c4d808f97343cb5391b0da137d4681c5bc2676c144e06a6452c89e9cd7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
