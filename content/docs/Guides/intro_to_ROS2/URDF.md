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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK6DHSN7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDullsLojjaFEVElIxqHW0aITpFWxI21Z8h6sIdqUUOsQIgRmspCnG5UviZhuqH6P3XxsAjFK6Cm9QwmCaCiPmbIZQq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDDF82RFUECFaXY5GKSrcA%2BJAXQi8ZzzfauqfwWc5W2BYL3IjpT8l0VdqTRKH6fO9Ufxs6YcxLZCCNAtOXcJ4Bqkf88L%2FvrDVkNZC8sgKYyPQ5dI54C%2BOBW3ChiuEpNwiJHapzXjvTifX0eXic9Dmn83njCaNoNJKSBQ8nIO3Iuq35zlZHOhLU1y%2F6mKc9H3RyjYdDVtSfzaKxPqLNSazcDbZEBP8cDzwqqqlmVon7Qap7X0vnkKH88i93Q360Iym2%2FBK47ylacoE7yb0x1RUcTBUg0QS4CnzL7pY4v1xN2pG9tfPVxDaL8CKCRkgp1k1%2FZGQycelb9fahJHqA%2FgrScl%2FkBsYxXEkw9oWTd5HTsz%2BHQhwU%2FKKQEWiBnv4xSTcP9UNAfYT2kyKFjBhCRCEq3%2FHzyvHuPeucEbrSc7XfgG7EQABPSOKZHkDUxU858QzJwKt9xWzhMhLOakmmUPjcu8SE4NgKvYCc1nRhChz2eokLQ4R32OoNkJ%2FijAqAKqyAh%2BVfpwS4kyyPDxEJEUji779cRUyEC%2FsRPtlwb5WSS8E1VLbHCU00kWMWnl3dMo7hSUtoZevSPsp5HpTjCFQKZfUufn5w%2F4D9knCyCA%2BUKWVlSwmbl2RvO0gmT0rUJXQ%2FYPdaTLXR3nCgNC%2BMLyFi78GOqUBmAWwMrdOGwTfmpcpJVFTPmlvhN8BtYveE2Dp9SMgVOUSwgzwlJK%2BbSSnTv467yJ46Gve7dwSuau7n27%2B2IxrPbSEJS6HRAhXOCKdXUHoAnqCC3ea75tC0MQu9LUbPKF6%2FO46o89wlQ5hq%2FIQaqzmsvBZTDtH25vL2fvX%2F5nrpLgMwrD6SuKjChV6j6eLfwFW%2BQ1twOCfZiTsoK2V4kuWdU2tHpfo&X-Amz-Signature=95c930b88b09acf1856bf97c561399626292f137e1eac5e4efe33fadae26f814&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK6DHSN7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDullsLojjaFEVElIxqHW0aITpFWxI21Z8h6sIdqUUOsQIgRmspCnG5UviZhuqH6P3XxsAjFK6Cm9QwmCaCiPmbIZQq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDDF82RFUECFaXY5GKSrcA%2BJAXQi8ZzzfauqfwWc5W2BYL3IjpT8l0VdqTRKH6fO9Ufxs6YcxLZCCNAtOXcJ4Bqkf88L%2FvrDVkNZC8sgKYyPQ5dI54C%2BOBW3ChiuEpNwiJHapzXjvTifX0eXic9Dmn83njCaNoNJKSBQ8nIO3Iuq35zlZHOhLU1y%2F6mKc9H3RyjYdDVtSfzaKxPqLNSazcDbZEBP8cDzwqqqlmVon7Qap7X0vnkKH88i93Q360Iym2%2FBK47ylacoE7yb0x1RUcTBUg0QS4CnzL7pY4v1xN2pG9tfPVxDaL8CKCRkgp1k1%2FZGQycelb9fahJHqA%2FgrScl%2FkBsYxXEkw9oWTd5HTsz%2BHQhwU%2FKKQEWiBnv4xSTcP9UNAfYT2kyKFjBhCRCEq3%2FHzyvHuPeucEbrSc7XfgG7EQABPSOKZHkDUxU858QzJwKt9xWzhMhLOakmmUPjcu8SE4NgKvYCc1nRhChz2eokLQ4R32OoNkJ%2FijAqAKqyAh%2BVfpwS4kyyPDxEJEUji779cRUyEC%2FsRPtlwb5WSS8E1VLbHCU00kWMWnl3dMo7hSUtoZevSPsp5HpTjCFQKZfUufn5w%2F4D9knCyCA%2BUKWVlSwmbl2RvO0gmT0rUJXQ%2FYPdaTLXR3nCgNC%2BMLyFi78GOqUBmAWwMrdOGwTfmpcpJVFTPmlvhN8BtYveE2Dp9SMgVOUSwgzwlJK%2BbSSnTv467yJ46Gve7dwSuau7n27%2B2IxrPbSEJS6HRAhXOCKdXUHoAnqCC3ea75tC0MQu9LUbPKF6%2FO46o89wlQ5hq%2FIQaqzmsvBZTDtH25vL2fvX%2F5nrpLgMwrD6SuKjChV6j6eLfwFW%2BQ1twOCfZiTsoK2V4kuWdU2tHpfo&X-Amz-Signature=45f48758ca2600200196235f499380550d61400238c6b2b591b778813b3be6e3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
