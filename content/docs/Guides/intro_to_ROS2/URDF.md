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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFSUIQAZ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOla2GqA9LImyjrWkn4w62BcZmqEcCd4wrlx6FSqO52wIgZqBmdSjMlQ4bBg0JLQefI4xwJ9wIMvKL34ZvZq%2Bq%2B%2BUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHnsu8lLC0e46WZcCrcAwx4ioWJZAdEabv8%2Bi0jYbNdrxnv0%2Bf%2FrFX6pTLhEO0nAmJ1zugj%2FkpgUQ%2BKvJCtv6jeCkWNg1R%2F1%2BWWCl1j7NaCN%2BLT%2FIkpKoxxPncdu3rvEHYvmAabyrp8NTdF%2BN9vd4f7y9wQ03wT%2FzXI6vvOhRIqAVyDTk7U%2FIATG5P9RQKo7IR8SLlswKv2rHxyrm5Lwl%2BoRxaWLlKndV28TEt7YGhynCwcetzZg57%2B2ZbcOXdEOjUsOPrSmuIAGf2LFBN8%2B4I%2FD%2Fwmm5ZsEHfmSVz%2B9KHx1H0H3TNXlyDcZP6w4A3aRx2z1PFT8eRbDLpdhsEs2HLGwKXVVbkCYKiWeUQ9FmF%2FvzNrabSHaU1nsV6%2BZf10zGIiYNs0fvofC4j%2F0QIPjApadRDy%2FVaIwp37BqoKKap%2Bmp7n2w7oZtsVgV3EohebwLHkhsW29TyfQtNRXh16GK46BdFXIyy21YZgIvTVupQWVmovlwKO0JqzKw2JsFnkCpVp0w%2Fwnuf9Du2Ls6jHEqbfU4GVaAuufZXYDqFwlGn9zJNMNWJmjEpXtxbeuQTgrZXH5RLUoroKdCFxQ6VH8wMwcuv0ifp88wyr10s9FTbGrhqZJJf%2Bhh6aApCp6g%2FDIABA8GBr2F%2FaCie8MPn5z8IGOqUBefL18UpOFPYPUGviFmChqJVFgdP95y%2BYip2qfXs4e%2BJ41jvQGW3n5CefPay9oVLpx4VOFdfCc4iovJtQ3w%2Bnw8SZk3DeVirkNCEkUsdAgemEXizZeNIb1AA9s2A9H3lC6SWFbFbPR9p%2FX3RGC5JCiPGbEk%2FCtnGx6p%2FVn2M%2ByTUATmZ6WmHrpGCKIENiGGCIkTjRSoJqj8aiydMbEXy8zzZzEb2r&X-Amz-Signature=8a3e759d82e2bb11bd5aaadc85f9726987b9a4c1e41d1dafaa752742cf8eaee7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFSUIQAZ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOla2GqA9LImyjrWkn4w62BcZmqEcCd4wrlx6FSqO52wIgZqBmdSjMlQ4bBg0JLQefI4xwJ9wIMvKL34ZvZq%2Bq%2B%2BUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHnsu8lLC0e46WZcCrcAwx4ioWJZAdEabv8%2Bi0jYbNdrxnv0%2Bf%2FrFX6pTLhEO0nAmJ1zugj%2FkpgUQ%2BKvJCtv6jeCkWNg1R%2F1%2BWWCl1j7NaCN%2BLT%2FIkpKoxxPncdu3rvEHYvmAabyrp8NTdF%2BN9vd4f7y9wQ03wT%2FzXI6vvOhRIqAVyDTk7U%2FIATG5P9RQKo7IR8SLlswKv2rHxyrm5Lwl%2BoRxaWLlKndV28TEt7YGhynCwcetzZg57%2B2ZbcOXdEOjUsOPrSmuIAGf2LFBN8%2B4I%2FD%2Fwmm5ZsEHfmSVz%2B9KHx1H0H3TNXlyDcZP6w4A3aRx2z1PFT8eRbDLpdhsEs2HLGwKXVVbkCYKiWeUQ9FmF%2FvzNrabSHaU1nsV6%2BZf10zGIiYNs0fvofC4j%2F0QIPjApadRDy%2FVaIwp37BqoKKap%2Bmp7n2w7oZtsVgV3EohebwLHkhsW29TyfQtNRXh16GK46BdFXIyy21YZgIvTVupQWVmovlwKO0JqzKw2JsFnkCpVp0w%2Fwnuf9Du2Ls6jHEqbfU4GVaAuufZXYDqFwlGn9zJNMNWJmjEpXtxbeuQTgrZXH5RLUoroKdCFxQ6VH8wMwcuv0ifp88wyr10s9FTbGrhqZJJf%2Bhh6aApCp6g%2FDIABA8GBr2F%2FaCie8MPn5z8IGOqUBefL18UpOFPYPUGviFmChqJVFgdP95y%2BYip2qfXs4e%2BJ41jvQGW3n5CefPay9oVLpx4VOFdfCc4iovJtQ3w%2Bnw8SZk3DeVirkNCEkUsdAgemEXizZeNIb1AA9s2A9H3lC6SWFbFbPR9p%2FX3RGC5JCiPGbEk%2FCtnGx6p%2FVn2M%2ByTUATmZ6WmHrpGCKIENiGGCIkTjRSoJqj8aiydMbEXy8zzZzEb2r&X-Amz-Signature=992ad3ee8accdbb22ee31c1926a48b7e537ffb25664ad80cd1dbb6e57caeadba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
