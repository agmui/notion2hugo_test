---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NHF6SXZ%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAGKKa%2BGstPnfuGQt3FORDdwt3ygObzWblYkzoyrYGVCAiEAuPjvvS8aZ%2FeNzsPoeuHYx1XsZgL0FQMcoC9ePyUiUF0qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9XmpEAbiW3Cn1KAyrcAx8Uv10OusLrq01gzedY%2BHnj87MQEpn%2Fb3DH8xnD7GSx%2BENprXpHNMfP1bYKDEsEW%2Ba77h1Swm6AKuHpW2pU9LMQGKfGSf042YJxcDvJ3IOsV%2BhZ%2FI%2BK4CvINfm1iXXQc1lW7dtsVW8WS3Lmq6oogWcih79YV30ljd8BH%2F5VVG9eT79XG3KKgNG5b2Jaf5Xd5Gd45O2pCYPaanAvK94Kn0zXjOwGqQJShEfsoxV5mYumnZZnZilMyO85KpTZjo%2BlglerXS72kA%2Fwet8ZSLD7J%2BBXs5nPXY3ZqDJwcirlVvZLR20X5nmQDnsMCBmFVlbepE4k%2Fo4sycWwJyUGTkE80CCn49Hyzr8TNPoXVqHFJrVh%2BceyIceuSqfej%2F8oCZDbyprSlsCmqkIjc076hM4q%2BPQjyY%2B%2ByJVkaQ1VEXzQXnJd1fcaAEv%2BstPZJdBZk4n0vsMXZ3eLJyWAB8oj833%2BWtxHCW02Wk65dUe%2FxTuCAiA9QFOT3JycHblZWpwYqpNJNBVYPs%2Bmz0Kfzm3MtJsnezceuWbjq%2Fmb1O2P0hdVO2EVo3dTiqqL%2FuG4sOMQtCfDM1HZpIza%2FxgcvN2jsjsSkIrEJ%2Fw5D5sMxuv1ifMpGEpbzNR6D26SmoXhKkKcMLXs7swGOqUBm2ZhlR8jESWXjBd0O0ndKr4MWpgZ1M%2FFOtrhr17BVDnV%2FV7WRttt5XLJHqFBp8V0CA2oEZq2swo%2BEinDCdosntcoMbRV16jXFoDdmGlAVG5K4TEv9gVpUymXo1BpJQHI53n8QxI5JzSuYuCvVlgm7D6iYbw4oeHPpl6LZ%2B5RrXmXM5SSE51SOfM34F8WUnb2XJ75wtDP7jx94cgtKdqBA15t0z%2Ff&X-Amz-Signature=78c91d4f454fa63fffba7a08f1148683c85e42ed5912acad55f82888dc60516e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NHF6SXZ%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAGKKa%2BGstPnfuGQt3FORDdwt3ygObzWblYkzoyrYGVCAiEAuPjvvS8aZ%2FeNzsPoeuHYx1XsZgL0FQMcoC9ePyUiUF0qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9XmpEAbiW3Cn1KAyrcAx8Uv10OusLrq01gzedY%2BHnj87MQEpn%2Fb3DH8xnD7GSx%2BENprXpHNMfP1bYKDEsEW%2Ba77h1Swm6AKuHpW2pU9LMQGKfGSf042YJxcDvJ3IOsV%2BhZ%2FI%2BK4CvINfm1iXXQc1lW7dtsVW8WS3Lmq6oogWcih79YV30ljd8BH%2F5VVG9eT79XG3KKgNG5b2Jaf5Xd5Gd45O2pCYPaanAvK94Kn0zXjOwGqQJShEfsoxV5mYumnZZnZilMyO85KpTZjo%2BlglerXS72kA%2Fwet8ZSLD7J%2BBXs5nPXY3ZqDJwcirlVvZLR20X5nmQDnsMCBmFVlbepE4k%2Fo4sycWwJyUGTkE80CCn49Hyzr8TNPoXVqHFJrVh%2BceyIceuSqfej%2F8oCZDbyprSlsCmqkIjc076hM4q%2BPQjyY%2B%2ByJVkaQ1VEXzQXnJd1fcaAEv%2BstPZJdBZk4n0vsMXZ3eLJyWAB8oj833%2BWtxHCW02Wk65dUe%2FxTuCAiA9QFOT3JycHblZWpwYqpNJNBVYPs%2Bmz0Kfzm3MtJsnezceuWbjq%2Fmb1O2P0hdVO2EVo3dTiqqL%2FuG4sOMQtCfDM1HZpIza%2FxgcvN2jsjsSkIrEJ%2Fw5D5sMxuv1ifMpGEpbzNR6D26SmoXhKkKcMLXs7swGOqUBm2ZhlR8jESWXjBd0O0ndKr4MWpgZ1M%2FFOtrhr17BVDnV%2FV7WRttt5XLJHqFBp8V0CA2oEZq2swo%2BEinDCdosntcoMbRV16jXFoDdmGlAVG5K4TEv9gVpUymXo1BpJQHI53n8QxI5JzSuYuCvVlgm7D6iYbw4oeHPpl6LZ%2B5RrXmXM5SSE51SOfM34F8WUnb2XJ75wtDP7jx94cgtKdqBA15t0z%2Ff&X-Amz-Signature=865a1d6da8444d3235f333c5d4547b49a4539aefe3b4218660e77386d3d5ddd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
