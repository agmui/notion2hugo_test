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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IMOA23L%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDm5fjdqmydlhv1o8WO1HVUcYn9mgkSds5EQCUdnSVvAiA9TgFdgH5IJT45TSehGtMePqSDjXcGqtV83RjHcjJlbyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFY3yZ96VPGo4paHSKtwDI1DFfbCUhqhkb7mVHmqynZnfr3GWhQe0HPBXi%2BdcIY%2BlGxJ30fZXrxy61AHyOhVAke0iTq7%2F7eKXJp9j34PuYMT%2BKvUQqzWSylaFBQhexkyPEwRMp6ZHX0pNgAjYZg6loW4D13GS2GVajXKbxq0DZ9ky7TLwgm56nwqdp85gO3qFMEMJJvxqlhSlugqSM2cowYhsqX8lk621hFCrWmVFNygvOZohElCUEpBlQypNq4CsbpVzFpbMOnj%2BfVj6s5VOLZPj2MDbjwOhwqt7OWA22Iyyg6TMNz7n%2B2qtq8AM5g3wYBw4X5MoGCE%2BWWu1bIUWDgU4PjTGMk5fzhMz%2FJ%2BUbdwdOg1HMCFqA8bN0xyButbqZkvtHWN%2FMBAILbtTbabZp42%2BhFGRxUJ8QS%2FPECqJ8dimH%2BjyKLnhcijAI141r2PXBjX%2BDHSgKxkbguZQ9zFUl94xym5nr6vJgF9YtISM6yjTe5XlIZ7Y3Gsk%2FlTjcXTmvGq6%2FEaPJb18KWvKIPXRf%2BaQxufB%2Bgbq2kcN0PZS%2BzV8rfShB6HrCSSTjkB%2FEO5ksBch7l%2B0AJRb4Lv30dZhevE4oWJQWV6bcfCiXeUIkrP5Jiv%2FClBWi8sGhIhlv9dQAM%2Ff9Ya6g0s86L8w3pa1yAY6pgHqqSNIWU3jGhM6jfkWNBrkb9qd9KH6hdCkxRS35QSzKUgouM8LanlCYMoTOEeo5yAwoMgweFcQKGBaW81DuLEseJ0WqNgDVdUx1865x9iIJpwBs769Nk7MzuUZ%2FE1jtcA83SPuhNZAbmga3lVNhrSKG0WsOyyW2wBJWElfwNS%2FV1jEmXTwX0g%2BKMk0mmQWka96KX6EEkOaOndPieSybtrMeG7yqj42&X-Amz-Signature=7de662e85e1e380fb54ab2c44e4286a8215249e0bcf64859941e882a42f33b59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IMOA23L%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDm5fjdqmydlhv1o8WO1HVUcYn9mgkSds5EQCUdnSVvAiA9TgFdgH5IJT45TSehGtMePqSDjXcGqtV83RjHcjJlbyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFY3yZ96VPGo4paHSKtwDI1DFfbCUhqhkb7mVHmqynZnfr3GWhQe0HPBXi%2BdcIY%2BlGxJ30fZXrxy61AHyOhVAke0iTq7%2F7eKXJp9j34PuYMT%2BKvUQqzWSylaFBQhexkyPEwRMp6ZHX0pNgAjYZg6loW4D13GS2GVajXKbxq0DZ9ky7TLwgm56nwqdp85gO3qFMEMJJvxqlhSlugqSM2cowYhsqX8lk621hFCrWmVFNygvOZohElCUEpBlQypNq4CsbpVzFpbMOnj%2BfVj6s5VOLZPj2MDbjwOhwqt7OWA22Iyyg6TMNz7n%2B2qtq8AM5g3wYBw4X5MoGCE%2BWWu1bIUWDgU4PjTGMk5fzhMz%2FJ%2BUbdwdOg1HMCFqA8bN0xyButbqZkvtHWN%2FMBAILbtTbabZp42%2BhFGRxUJ8QS%2FPECqJ8dimH%2BjyKLnhcijAI141r2PXBjX%2BDHSgKxkbguZQ9zFUl94xym5nr6vJgF9YtISM6yjTe5XlIZ7Y3Gsk%2FlTjcXTmvGq6%2FEaPJb18KWvKIPXRf%2BaQxufB%2Bgbq2kcN0PZS%2BzV8rfShB6HrCSSTjkB%2FEO5ksBch7l%2B0AJRb4Lv30dZhevE4oWJQWV6bcfCiXeUIkrP5Jiv%2FClBWi8sGhIhlv9dQAM%2Ff9Ya6g0s86L8w3pa1yAY6pgHqqSNIWU3jGhM6jfkWNBrkb9qd9KH6hdCkxRS35QSzKUgouM8LanlCYMoTOEeo5yAwoMgweFcQKGBaW81DuLEseJ0WqNgDVdUx1865x9iIJpwBs769Nk7MzuUZ%2FE1jtcA83SPuhNZAbmga3lVNhrSKG0WsOyyW2wBJWElfwNS%2FV1jEmXTwX0g%2BKMk0mmQWka96KX6EEkOaOndPieSybtrMeG7yqj42&X-Amz-Signature=aac7a8ef742bf4c80aba5ce82f9c9a5a89d409f99c6ce436ab4566a0b24a83cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
