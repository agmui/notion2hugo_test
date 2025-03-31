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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFNHUEGU%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIHmwa%2FGXqim%2Fq82TAq4soKntDzxKLkuGH2eX2e62US%2BMAiEA6DioqFrQ822XSgzCX4LUvbjhqniheFc5J%2FTAFk1kLSgqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2Fv2TPXMtj9Dms2iyrcAwHayudNZ1lN8UYs%2BBnS%2B8Rnu2%2BxQkMBRUvDVPv7RzMDp3FfVOc9GMha7BXj4vS7AsHa%2BvM3dn6eXXBMwcFrwXCKsH2CCRkkEOda5A3e3adBenzrbci78QiDa%2Bd5yGqU5TehigX5N6aY14Yp7rTxJTZsJAk2gNxmSd6%2F5TnQ7XgxK6ZzwW4V2MJAoCUB2iCbdNXCpSmk0vABjgFcbL7sW0CSfD5CMXSuupVG5fOr0jsHde6dGczIaUV%2BlMs%2FLfYkPx0Hmm6npSj5nQuDwQCA5lOn8w6s3hqKu02W1Cij65wtIgeFJmxeJtI6ye1UN%2Bn9h4y0uxn64Bmu1KFw39p3uy4jOqJIPTpCttSPGRiiRiQfD29%2BIKc%2FjWZ8XmA7Mx25T5FBxgGBNBTQRvy3OQUkWP1Rja8A7J4rpyIdqqh1%2Ba%2FTGeKyTqCPTkdgHcy8ZL1go8JQ5X6DGOvunv%2BRb8G2v5sMtVD4TfWbHfcw2%2Fp5qeQP0xgu6svyvcOeJwJaWVLDcq0G45zssXWkwIUE9pphvTApLBRYD%2BgkKxKiDb7hcTcZzukVi2Khr8XbHAk1bLPrCmdX%2FlNXdSiK6zzzCQ5XCAmBt4Ql751bk%2BRUdDilcfgVxKiFIOm4CeCO2G%2B%2BMJzKqL8GOqUBTKG0Arj0S48BMJFcoKy%2Bicmdrg2fWwZTqKtmoA8qTpe9YnYvuDudN0e1M3oPnSp5uWxSI7INTOlI4Dw6Qdl9C%2BvNNJ9Jn%2F%2FVaJkQeqzHi8mUyqxszEnMmTKcgQ9Ck7GjStBiHN0zD5%2FX3bw2XwkmsfsQ8reORcjsH0CFiVyar8aW%2FzOKoGjTlkKbhhznoHXVNsMhUSUP68YcFSaExJ9CP8Xuh4SQ&X-Amz-Signature=d389d12463c8fe65eb4bb9b57780c7740c85a53ad2a9d48f5875128c0fe01833&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFNHUEGU%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIHmwa%2FGXqim%2Fq82TAq4soKntDzxKLkuGH2eX2e62US%2BMAiEA6DioqFrQ822XSgzCX4LUvbjhqniheFc5J%2FTAFk1kLSgqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2Fv2TPXMtj9Dms2iyrcAwHayudNZ1lN8UYs%2BBnS%2B8Rnu2%2BxQkMBRUvDVPv7RzMDp3FfVOc9GMha7BXj4vS7AsHa%2BvM3dn6eXXBMwcFrwXCKsH2CCRkkEOda5A3e3adBenzrbci78QiDa%2Bd5yGqU5TehigX5N6aY14Yp7rTxJTZsJAk2gNxmSd6%2F5TnQ7XgxK6ZzwW4V2MJAoCUB2iCbdNXCpSmk0vABjgFcbL7sW0CSfD5CMXSuupVG5fOr0jsHde6dGczIaUV%2BlMs%2FLfYkPx0Hmm6npSj5nQuDwQCA5lOn8w6s3hqKu02W1Cij65wtIgeFJmxeJtI6ye1UN%2Bn9h4y0uxn64Bmu1KFw39p3uy4jOqJIPTpCttSPGRiiRiQfD29%2BIKc%2FjWZ8XmA7Mx25T5FBxgGBNBTQRvy3OQUkWP1Rja8A7J4rpyIdqqh1%2Ba%2FTGeKyTqCPTkdgHcy8ZL1go8JQ5X6DGOvunv%2BRb8G2v5sMtVD4TfWbHfcw2%2Fp5qeQP0xgu6svyvcOeJwJaWVLDcq0G45zssXWkwIUE9pphvTApLBRYD%2BgkKxKiDb7hcTcZzukVi2Khr8XbHAk1bLPrCmdX%2FlNXdSiK6zzzCQ5XCAmBt4Ql751bk%2BRUdDilcfgVxKiFIOm4CeCO2G%2B%2BMJzKqL8GOqUBTKG0Arj0S48BMJFcoKy%2Bicmdrg2fWwZTqKtmoA8qTpe9YnYvuDudN0e1M3oPnSp5uWxSI7INTOlI4Dw6Qdl9C%2BvNNJ9Jn%2F%2FVaJkQeqzHi8mUyqxszEnMmTKcgQ9Ck7GjStBiHN0zD5%2FX3bw2XwkmsfsQ8reORcjsH0CFiVyar8aW%2FzOKoGjTlkKbhhznoHXVNsMhUSUP68YcFSaExJ9CP8Xuh4SQ&X-Amz-Signature=ecdeb13887f13d8eaf64c3d8ebc04dccd91122192b26c1a9514ae6a603366a1c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
