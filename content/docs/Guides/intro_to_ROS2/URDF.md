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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXJJNB74%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIFplYISZwluYkztu3r%2BIA6o%2Fhxp%2Bi4sG201Q66xPE%2BOWAiEAq%2BWwQg2%2BcfeN2PTNCkNdJS6QIwVp8L4eNrxQcHPgIrcq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDNnlqjgM0EkXJRDtkSrcA3fBBMv0OL4eLjAzGnbz2gtjh5J6L7uxOpwD%2Bks%2FnD11nl4IjX9s5L3RrUxcXc48wRCLokPJwryqzAolhL79FxFlNCwWup12MVnvr1JiaQPPSVw6%2FKrgAdEuksioVPzZgQqMAT%2FK%2Bb3BMAqddgLZregHOcK%2B1mPwfDLOM7y2i5%2BIztWUqGZYeaUzqPiaoZgpPqT3FMMgGm1Gta%2BrJH9kJ1HVgrI%2BBs5EThxkmoIqE8LEa8P83PA0gT0Mb8%2FAdKNQUWQZJQ%2Fh2WQSoh2zHwFn%2BqrR2IZczpGy3hUgv0SEBj82qhRksF8RZ4bsXBnrOd1oRvv8DYwNIYuN7BN1za1du9rjp5D3kYavHWksfNGUzOMzgOefjAdsiGqZT9zBX69VkeEx9Zhm5MaCILPicDSnoPc5BJPrFlxQm2jYaHCG677%2BzIvA%2BQqcqWoFjgA5h3Gs7DOWbLbBQrHRZ%2FGbGbKh14zmSotWDwul%2FH85A%2FpdXxm%2B3FC4BcBkQlGJMjwVPFRL9%2B5TqroBFJvoZyFWBDy42syzRoX5bHKqwwwEMqh%2Bui%2FlpOGVTnKjt7I9cJrNUcT7raWo%2FGRBdFVkiJzBur7MKfFbqn846bBCRvh4BhUSEC0htqouqDveYGu1jwNNMI%2F85MIGOqUBrJXv6RCpWdjAJUd0qruHWxx43m3JEzrqKkA8FS26P6Q2GBWrzLbqSxNLf8bT3C5nIhBXoo%2BKryaPr9H8FfLKPniVmnO8RYKmXjEnWB5H6asCwyLJdOlIvED5erDoUC82V5QU77q9AKtsCnVrS01jZ8FJy3tfgaLKapPnLucl7bZnBB%2ByNN8WbwgtoYtSjHfnIy5ccVLPBd95GS4rPD%2Bux6iLW94%2F&X-Amz-Signature=dc94e4c04dedcae56933d5f0f8bc5c44439e2dac062f58b59f4c18cccbf85ef7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXJJNB74%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIFplYISZwluYkztu3r%2BIA6o%2Fhxp%2Bi4sG201Q66xPE%2BOWAiEAq%2BWwQg2%2BcfeN2PTNCkNdJS6QIwVp8L4eNrxQcHPgIrcq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDNnlqjgM0EkXJRDtkSrcA3fBBMv0OL4eLjAzGnbz2gtjh5J6L7uxOpwD%2Bks%2FnD11nl4IjX9s5L3RrUxcXc48wRCLokPJwryqzAolhL79FxFlNCwWup12MVnvr1JiaQPPSVw6%2FKrgAdEuksioVPzZgQqMAT%2FK%2Bb3BMAqddgLZregHOcK%2B1mPwfDLOM7y2i5%2BIztWUqGZYeaUzqPiaoZgpPqT3FMMgGm1Gta%2BrJH9kJ1HVgrI%2BBs5EThxkmoIqE8LEa8P83PA0gT0Mb8%2FAdKNQUWQZJQ%2Fh2WQSoh2zHwFn%2BqrR2IZczpGy3hUgv0SEBj82qhRksF8RZ4bsXBnrOd1oRvv8DYwNIYuN7BN1za1du9rjp5D3kYavHWksfNGUzOMzgOefjAdsiGqZT9zBX69VkeEx9Zhm5MaCILPicDSnoPc5BJPrFlxQm2jYaHCG677%2BzIvA%2BQqcqWoFjgA5h3Gs7DOWbLbBQrHRZ%2FGbGbKh14zmSotWDwul%2FH85A%2FpdXxm%2B3FC4BcBkQlGJMjwVPFRL9%2B5TqroBFJvoZyFWBDy42syzRoX5bHKqwwwEMqh%2Bui%2FlpOGVTnKjt7I9cJrNUcT7raWo%2FGRBdFVkiJzBur7MKfFbqn846bBCRvh4BhUSEC0htqouqDveYGu1jwNNMI%2F85MIGOqUBrJXv6RCpWdjAJUd0qruHWxx43m3JEzrqKkA8FS26P6Q2GBWrzLbqSxNLf8bT3C5nIhBXoo%2BKryaPr9H8FfLKPniVmnO8RYKmXjEnWB5H6asCwyLJdOlIvED5erDoUC82V5QU77q9AKtsCnVrS01jZ8FJy3tfgaLKapPnLucl7bZnBB%2ByNN8WbwgtoYtSjHfnIy5ccVLPBd95GS4rPD%2Bux6iLW94%2F&X-Amz-Signature=ba204689f54445870423da70f8d1e010282a41925073c380054035dca8c1c349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
