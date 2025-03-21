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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6LDY2S3%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T041020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGouq65lj0LUSjjNWlqgHjA6jMk%2FCNoJ6OmGkU7DGEP2AiEAn6iWWyerOXcctMlMoW6%2BmC1w5MZvmsETzWGGKs98b%2B4qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ73ABjwfwIfCNvmvCrcA5rjb9DWtwGDwPu49Z5ruGVBjjHXUj5EEp51E7JA3jVstHH4qaN8bb3PGybNvQmg39BYshFDboM2Hs8kgQeReq9p1mk0ZxifMzqlJHVbaXiqprwlSAVviS%2Fcx5TdiE5o7%2B43Et3eHfndDApG4s2Q8%2FPb7rBqMH98zBjQ1JKM9ZMmIydNvbM3f6UuJaDtQqzI1RGFeNHiTBVJrOxnXpRzF6jNuInXMnWauFtVzJRhb3JgXzDdv69gGRNK4Oxvvu2ajhq6ENnGCYc9KTqnxEtexmdikkJSchDOJoioVXHyma9ncAHZQVah85zLGiiHBwqaRTx6gmEOTb5m1ZkdnLQ49FfZUXHCXeYRgLEJretoq7NaKDPPgJcm4RxF90L7YDkse%2FdXulE4zhts4n2x3IvbhiHDNWiB7N8WSbg0pSq9K2XBcFm00IhvNEIvqYFtmtF7PMeWlzFL6R21Is1AoOrbUxxoK0dwVCjvgZWUldIpx7wJHYuHgviNsMe7CEnvLFCM39wc420TXgCpRIHz%2F%2FC2WQWQslcyVpzNwuk%2FyBpqhLVb%2BfRcL0BV%2Fizo%2Ffe51NbfgUnrt9KDj9LU1YovY1kntigXfDuVQ6nlg5xzzvs0S57BU4Y37brwW2y9VjMtMJK5874GOqUBzw49gy%2Bd6vc2v95nABF7055WbDRXpj61uHxY0JrzXf6Xp0c0txi7dTt1CCoUa%2Br36nUmLucTIUx8B%2F5zNHZfnhLZmvwQ4QeW7DisVysHArbhwINd7ug7M%2Fz5pfv%2F9SN7yIismSBY%2BkolMXK1TaWfVf8L9q6leWzOQIpOwJYizg72A%2F1DqNta9ennu2F%2FaWkmP1citrVuQVBK4u682UMCSICt84BC&X-Amz-Signature=9ce9f53dfecae39fdc2963478407b1606022fc2adf87954d2900a01c5e25feea&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6LDY2S3%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T041020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGouq65lj0LUSjjNWlqgHjA6jMk%2FCNoJ6OmGkU7DGEP2AiEAn6iWWyerOXcctMlMoW6%2BmC1w5MZvmsETzWGGKs98b%2B4qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ73ABjwfwIfCNvmvCrcA5rjb9DWtwGDwPu49Z5ruGVBjjHXUj5EEp51E7JA3jVstHH4qaN8bb3PGybNvQmg39BYshFDboM2Hs8kgQeReq9p1mk0ZxifMzqlJHVbaXiqprwlSAVviS%2Fcx5TdiE5o7%2B43Et3eHfndDApG4s2Q8%2FPb7rBqMH98zBjQ1JKM9ZMmIydNvbM3f6UuJaDtQqzI1RGFeNHiTBVJrOxnXpRzF6jNuInXMnWauFtVzJRhb3JgXzDdv69gGRNK4Oxvvu2ajhq6ENnGCYc9KTqnxEtexmdikkJSchDOJoioVXHyma9ncAHZQVah85zLGiiHBwqaRTx6gmEOTb5m1ZkdnLQ49FfZUXHCXeYRgLEJretoq7NaKDPPgJcm4RxF90L7YDkse%2FdXulE4zhts4n2x3IvbhiHDNWiB7N8WSbg0pSq9K2XBcFm00IhvNEIvqYFtmtF7PMeWlzFL6R21Is1AoOrbUxxoK0dwVCjvgZWUldIpx7wJHYuHgviNsMe7CEnvLFCM39wc420TXgCpRIHz%2F%2FC2WQWQslcyVpzNwuk%2FyBpqhLVb%2BfRcL0BV%2Fizo%2Ffe51NbfgUnrt9KDj9LU1YovY1kntigXfDuVQ6nlg5xzzvs0S57BU4Y37brwW2y9VjMtMJK5874GOqUBzw49gy%2Bd6vc2v95nABF7055WbDRXpj61uHxY0JrzXf6Xp0c0txi7dTt1CCoUa%2Br36nUmLucTIUx8B%2F5zNHZfnhLZmvwQ4QeW7DisVysHArbhwINd7ug7M%2Fz5pfv%2F9SN7yIismSBY%2BkolMXK1TaWfVf8L9q6leWzOQIpOwJYizg72A%2F1DqNta9ennu2F%2FaWkmP1citrVuQVBK4u682UMCSICt84BC&X-Amz-Signature=738b3c6266b819a5501d0bea35f7055f48fa5b646ba13438cfd1286f34d4f250&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
