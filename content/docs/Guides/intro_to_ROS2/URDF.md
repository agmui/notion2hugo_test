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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKDPNEV%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICB8DOjk7qwQ85BV2v3r3GXy7k0ZTlBjgUvNGn1Ti2PDAiEApAb81rHuOQQFNfT3FLAgoJ8Er8iaz1JhhgVN%2B1by3n8qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxIOmd%2BYzL0sb6fLyrcA7z8MYZgtTxoKgf%2BT%2B3D4K%2Fm9e2Pnm2FnAH%2FWVLMFcU2mlQe0ScFkD9fJAna9j3B6u4C60GASG32yNqdsAR3EZnN%2BX8Lnds27YBBXShZw659JpX%2F3FYtbl28SvOyNj6Ov9zz1FvuBg7qfyFvuWCqH3ZIxwmUmLjotAJ%2BljFB%2FmXbHLU5dSFG73HKDPP1vr7lyWITZQloWIWKI8Uwjy%2FPiLGskXMLTYo7BZUE1%2Bh%2FSO5BJCvmWntayj7L4JGbGNFxM2KVjWkb4qzAz55cvTx5nL2RM%2FiaOn02IF9Eu5E9T8GndcW54y1eVwzm19Di6uZ%2FobawApxKHlKF6MUMZMx7Qw%2Bk86wTLxvIDc83bFaIJLS8wwq2vFzbrthhqCu1haIFijwrjU9A5FNswZAgrefy15PIgO9btI0L4H%2FGxc%2FKkLyIdCnE14pxQM4I24Li1HOI38ooFSlRBJ5ABlOkzAA6QSEvMeiYiqYdZZ22r5JWVNLHmsCAukmA6Xtk0Wgk%2BUP5LSClcCGkXQrV1%2FzcnKiSG9%2BI2CIXzjVVOWHAJBhRKU71Ytv0JUsG5WQs1nYEcWPqlpbi1MHs%2Fgh4A%2BljslC81%2BZbecd081eyaaSXFTcVH1vSE7E3ZfzbGpIQvEI8MJOuy8MGOqUBOK3e3dwBJ4IqVaC1xufWuocAAB3bk7xdFqK8SYNyYOJXdaRqmSB0KLYG8BNfed5GG%2B9PBSdY8jFUuTMqG20ACDJW%2Fcj0FGfw%2FBY4KA6%2FwSaPTJYzOiqDEFDG8onvlExLIJHaVFwlccjKcG49IKV0jSXwNMCvBt3mgxnLj%2FWu2SxyQ%2FKIfOAUdkuSFvFD%2FCdwU6GwqLOFNKu%2BBF5QIQYE5PYbc%2BeM&X-Amz-Signature=c2a470af9a5ba7e4ada98de8a4378eb6fd59211bdcbc6f2c23fb7f50b4a34e5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKDPNEV%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICB8DOjk7qwQ85BV2v3r3GXy7k0ZTlBjgUvNGn1Ti2PDAiEApAb81rHuOQQFNfT3FLAgoJ8Er8iaz1JhhgVN%2B1by3n8qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxIOmd%2BYzL0sb6fLyrcA7z8MYZgtTxoKgf%2BT%2B3D4K%2Fm9e2Pnm2FnAH%2FWVLMFcU2mlQe0ScFkD9fJAna9j3B6u4C60GASG32yNqdsAR3EZnN%2BX8Lnds27YBBXShZw659JpX%2F3FYtbl28SvOyNj6Ov9zz1FvuBg7qfyFvuWCqH3ZIxwmUmLjotAJ%2BljFB%2FmXbHLU5dSFG73HKDPP1vr7lyWITZQloWIWKI8Uwjy%2FPiLGskXMLTYo7BZUE1%2Bh%2FSO5BJCvmWntayj7L4JGbGNFxM2KVjWkb4qzAz55cvTx5nL2RM%2FiaOn02IF9Eu5E9T8GndcW54y1eVwzm19Di6uZ%2FobawApxKHlKF6MUMZMx7Qw%2Bk86wTLxvIDc83bFaIJLS8wwq2vFzbrthhqCu1haIFijwrjU9A5FNswZAgrefy15PIgO9btI0L4H%2FGxc%2FKkLyIdCnE14pxQM4I24Li1HOI38ooFSlRBJ5ABlOkzAA6QSEvMeiYiqYdZZ22r5JWVNLHmsCAukmA6Xtk0Wgk%2BUP5LSClcCGkXQrV1%2FzcnKiSG9%2BI2CIXzjVVOWHAJBhRKU71Ytv0JUsG5WQs1nYEcWPqlpbi1MHs%2Fgh4A%2BljslC81%2BZbecd081eyaaSXFTcVH1vSE7E3ZfzbGpIQvEI8MJOuy8MGOqUBOK3e3dwBJ4IqVaC1xufWuocAAB3bk7xdFqK8SYNyYOJXdaRqmSB0KLYG8BNfed5GG%2B9PBSdY8jFUuTMqG20ACDJW%2Fcj0FGfw%2FBY4KA6%2FwSaPTJYzOiqDEFDG8onvlExLIJHaVFwlccjKcG49IKV0jSXwNMCvBt3mgxnLj%2FWu2SxyQ%2FKIfOAUdkuSFvFD%2FCdwU6GwqLOFNKu%2BBF5QIQYE5PYbc%2BeM&X-Amz-Signature=2c9e2bc2d4b9fda39130a1770f83b581bdf4110b9478e6f9a7bebc321d3e61e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
