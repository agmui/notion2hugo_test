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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQUM7LST%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T121521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDnk1kzxe8Cot1Y%2BAbZVFvOD5aS40dh%2BgtN6LQVCp7LEgIgc%2BLqhy1xG53pCnFRs5eTHheTB4Dkb5bT%2FOyU8287ej8qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3HJ4kUSGo0fLFPUSrcA8xVyMxWIloUUwessvJgF%2FYOyBEN%2Fa5MtN4lbHHoxMs7Io4qL2jZvx%2Beg5Bqkcg7TtCodYRAvChyvsHNIUapycJdq0yjT54eMZEXlfkcCZgTIH9NPQ2zab%2Bd0Cc9txQlTFQaOOlz6gwtRtRJPl8ltJTsdj25hbV8vfOOyVCi7uQ%2BA%2FvoYDH3b0LqOF2XqgrqZpXaCZK024Bq%2FzoAc3hky1n81tSnJm4GjUIUl4y8Oejmr3we0x8IF4kfZvw6bUaYTcRitY2fEuNSus8PaDSNlcga%2BFr0vQoy0CD4aF9imRj5tquQOtt1q0VvVsbSMJ80VGDfueCjzQLPufHvn9bWzZyuvJI%2BK8sAgVySUqB4itBRWww2nv8o0cErCH2Lbi20DZnh4Bg%2Fqx793UFnj5qlVYTe5npHtPbkHvxFCJiMp%2BzAH%2FAEWzI7eJWvzHb1wxO8E3SwQ1%2Busbzcf71RVW44XdjoNgIvzyp5CFz4%2Bj%2F52b8C3sxI3IcsiIjIIVWXwZ1vRfWzodZk6UWMyOQpfxISrUcg27I12aDQSa7kkjYQBePsWHc1Hk5JnZ2BAPcEfo4oKxlozvU3wIKAEXPDmn7u5Mp8bYn85d7jhbYQ4%2B5p9FpcxDbtNi3Y1QCPD3gWMK%2Bfo8AGOqUBdzcAUFYb74NUamuEyqKUUa02Hq0FbQUM9qhTzksKYMmuRCf1qmB0qKBhIqgbWsaCB9mZIuxVVRN8RT1NXBdLSAdjzMd%2Fm%2FMEmHqiSfJKBTPdM8LjuKzCGwdma6fchGqZzbxDG%2F4qVniGcw1Bu8sqVFMnP6Kl6UCi2aJ9yllsKwKwlwY2h2h5pi5gvA6mF78QiOKIlXpzirzi0Vix9XuphHEfu7wa&X-Amz-Signature=fd894880a4d97a494a3c3c4c56d67633193db21a21aa9eb673f8710db9970d42&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQUM7LST%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T121521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDnk1kzxe8Cot1Y%2BAbZVFvOD5aS40dh%2BgtN6LQVCp7LEgIgc%2BLqhy1xG53pCnFRs5eTHheTB4Dkb5bT%2FOyU8287ej8qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3HJ4kUSGo0fLFPUSrcA8xVyMxWIloUUwessvJgF%2FYOyBEN%2Fa5MtN4lbHHoxMs7Io4qL2jZvx%2Beg5Bqkcg7TtCodYRAvChyvsHNIUapycJdq0yjT54eMZEXlfkcCZgTIH9NPQ2zab%2Bd0Cc9txQlTFQaOOlz6gwtRtRJPl8ltJTsdj25hbV8vfOOyVCi7uQ%2BA%2FvoYDH3b0LqOF2XqgrqZpXaCZK024Bq%2FzoAc3hky1n81tSnJm4GjUIUl4y8Oejmr3we0x8IF4kfZvw6bUaYTcRitY2fEuNSus8PaDSNlcga%2BFr0vQoy0CD4aF9imRj5tquQOtt1q0VvVsbSMJ80VGDfueCjzQLPufHvn9bWzZyuvJI%2BK8sAgVySUqB4itBRWww2nv8o0cErCH2Lbi20DZnh4Bg%2Fqx793UFnj5qlVYTe5npHtPbkHvxFCJiMp%2BzAH%2FAEWzI7eJWvzHb1wxO8E3SwQ1%2Busbzcf71RVW44XdjoNgIvzyp5CFz4%2Bj%2F52b8C3sxI3IcsiIjIIVWXwZ1vRfWzodZk6UWMyOQpfxISrUcg27I12aDQSa7kkjYQBePsWHc1Hk5JnZ2BAPcEfo4oKxlozvU3wIKAEXPDmn7u5Mp8bYn85d7jhbYQ4%2B5p9FpcxDbtNi3Y1QCPD3gWMK%2Bfo8AGOqUBdzcAUFYb74NUamuEyqKUUa02Hq0FbQUM9qhTzksKYMmuRCf1qmB0qKBhIqgbWsaCB9mZIuxVVRN8RT1NXBdLSAdjzMd%2Fm%2FMEmHqiSfJKBTPdM8LjuKzCGwdma6fchGqZzbxDG%2F4qVniGcw1Bu8sqVFMnP6Kl6UCi2aJ9yllsKwKwlwY2h2h5pi5gvA6mF78QiOKIlXpzirzi0Vix9XuphHEfu7wa&X-Amz-Signature=8d481bc392db70af4c462b8fe83aa3fc6d17cc47565075c2960db5d87dd4bdd0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
