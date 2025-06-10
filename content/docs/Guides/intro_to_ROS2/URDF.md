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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6DI6WZ4%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdr4VtpbNg9fOzFnsc5btR0cETmv0J73dabTvhJmLJKAIgBQZaKDwxfld4M82lhKdhT5rGhEk44VgNQStiYV2fYuoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG661%2Fgi3UljrLZABSrcA%2F%2BLMv5Dte47MBKpyyLIF2%2FYI2yIyqSo09JocgIcDWD82FDTip4xqBgLdioK%2Fe3fyY83Ha5q0bgQLVluc6fY1ev%2FGzEuwvJ3KGBmYFcY852LFE3qlW5%2B9D1uIkM8U7%2B8zNLlfha0ut9wW%2BFz9Y8JQNoG4b7DcGdAPhMyEhiRsGlV1Pq2YG9BGARXx6rnpUfjE5HNmb%2BqFMrfVEgYp2%2Fpr98yd%2BDfZOCRWpXTyq5zFvLjECjRfoz3wqYEgi98kgNvmKnQMg2HR%2Fdg3Tw5Yp0yx%2BwY8HfEnnGHzdjFIZg35WqchwU1r7m1mY%2FCF2eJr2Hckwkh7292JwMScRQrEaqLISmo5zPDB77j6ZikKYqLyxmMxTx5aijIFUqK00QcHQf983KdB18W7LQFTyuwvv3nFnxUwmxbQZeNHSKdfW1M1XAaHfLGUr985Rz0QSzlE0qW%2BMp6fpPrOMiLEl%2Ft4GvNpqVfm70EriQtxWxkb9D%2FVMGICopfW72mDUNxbNuWO4zZKbGiJtI99XHrasJzjn9ekGk6ejw0ePJtpkb%2BCCeiXTIYOpdGPGI%2B4u%2FzbRNyR6xg57vixBtnhuxSNXaLtLFnkWyYavqJmHgi7rnP7dFJ7p1ZrC0YivhPjCZ01RsYMKGhnsIGOqUBGv%2B2JQ4XVwQ4vOSEMGEn8%2FVKli3cYONAHI%2Bopr50Z2uDuFVCViAhZktdzbwnnPFeYmJaNfYWK%2BrpdAA77nHVdQA%2FSTpRDerpoeGN41SkvNQagwseRQXAvCsM%2FpaGJMe0P4QYQ874ZgJvrPnDwheQRZ9nBFYN1vyf34%2FuMSbsrCBaokd%2FLOEz0o7xsUSEq6oaxRzDOtnwTsvoi9H8NUTN4RbHym0%2B&X-Amz-Signature=b4c487f41f40df011d03e5e5e3e55e9867499d51a6c271af65f7af1dd6805da0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6DI6WZ4%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdr4VtpbNg9fOzFnsc5btR0cETmv0J73dabTvhJmLJKAIgBQZaKDwxfld4M82lhKdhT5rGhEk44VgNQStiYV2fYuoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG661%2Fgi3UljrLZABSrcA%2F%2BLMv5Dte47MBKpyyLIF2%2FYI2yIyqSo09JocgIcDWD82FDTip4xqBgLdioK%2Fe3fyY83Ha5q0bgQLVluc6fY1ev%2FGzEuwvJ3KGBmYFcY852LFE3qlW5%2B9D1uIkM8U7%2B8zNLlfha0ut9wW%2BFz9Y8JQNoG4b7DcGdAPhMyEhiRsGlV1Pq2YG9BGARXx6rnpUfjE5HNmb%2BqFMrfVEgYp2%2Fpr98yd%2BDfZOCRWpXTyq5zFvLjECjRfoz3wqYEgi98kgNvmKnQMg2HR%2Fdg3Tw5Yp0yx%2BwY8HfEnnGHzdjFIZg35WqchwU1r7m1mY%2FCF2eJr2Hckwkh7292JwMScRQrEaqLISmo5zPDB77j6ZikKYqLyxmMxTx5aijIFUqK00QcHQf983KdB18W7LQFTyuwvv3nFnxUwmxbQZeNHSKdfW1M1XAaHfLGUr985Rz0QSzlE0qW%2BMp6fpPrOMiLEl%2Ft4GvNpqVfm70EriQtxWxkb9D%2FVMGICopfW72mDUNxbNuWO4zZKbGiJtI99XHrasJzjn9ekGk6ejw0ePJtpkb%2BCCeiXTIYOpdGPGI%2B4u%2FzbRNyR6xg57vixBtnhuxSNXaLtLFnkWyYavqJmHgi7rnP7dFJ7p1ZrC0YivhPjCZ01RsYMKGhnsIGOqUBGv%2B2JQ4XVwQ4vOSEMGEn8%2FVKli3cYONAHI%2Bopr50Z2uDuFVCViAhZktdzbwnnPFeYmJaNfYWK%2BrpdAA77nHVdQA%2FSTpRDerpoeGN41SkvNQagwseRQXAvCsM%2FpaGJMe0P4QYQ874ZgJvrPnDwheQRZ9nBFYN1vyf34%2FuMSbsrCBaokd%2FLOEz0o7xsUSEq6oaxRzDOtnwTsvoi9H8NUTN4RbHym0%2B&X-Amz-Signature=bf54865a0101cdd99881e01ec66723ff36fbfea698709a6e2f410bc427fc21aa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
