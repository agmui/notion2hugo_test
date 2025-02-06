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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OMOLPR6%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDoHUfwwfIvWDbtLZrrvYRkkVi8WIxhe2Qbp98aJuzgzgIhANAKmpsCeZ1I%2BWTl7LpCPYFum9C3CIz77rqnyT6q4el8Kv8DCFcQABoMNjM3NDIzMTgzODA1IgxciJDgkv6zVogXnUQq3AOEmTcQmT7jGxUAptE2RtmfTaetskxBv3APOjEtyKx1HdFaeZ2CX%2FebNdHzOTNCiD0JEPBhCP6vhUNbdnQymXcXGZe%2FFTh3gtAWle4szucdu9jfltk0J3AcTrINzZnGz%2BCase03z3gjkzg8PyCGvwT06rhAWHBG1l2VXv32Qehl7Sx60rYJgFeMfv5LIohUHZpwM7bNVoGXFJcEYJyNyiWDNKVe9t0YPWfw3uE3JiPli9kK4M0C%2FFKkbAm7ysgNI7ymAlQX5Gos8Zof2TizKbMat6I4YgA6PgMNMTvPEj5C1WZc7FeovJJCwmKZfhjktmfG7EzG9TbvAKv%2BWimZPj%2Fzy3rPp%2F0eNI9YvysqgByfJTOt4p6DaGqBaGjRRz%2BakZqoaad9Z8aJEiUzCOdZ6k6AouwPQeIDnZxyt9zFwVnIO6lfUXAuXNn%2Fymi9AZ49s3AE4l361XuxnuLHtf7iLBXKsA92qJpLchlZRP%2FvUdYB%2Focrezk858BW%2BjbvTF8Ks9TRTurt5zrJINNeyWIvD8pTWngKLyZYpkXziQPEhJrHw%2FXqxVJXkUiAazJJG97See7yF3nmjqeu4dTtXkPEWCV2%2B74vMjlJo01hRugjYwPfQ8dKZMh5dOhxrj0bJzC0m5G9BjqkAcS0wzKRpreZNnnR%2FzvLW8NrHAyRvqXasY3ujW1ksiMDc7Lf%2BX1AFa9axX2s2zlX9WcCAxsEZONnZkUb6m92NGStw5EwBU92u0y%2BfWqebpOTkM221qiEAo%2Bgw%2Bosf9lYVMe92hwCuf7mr7m2mqSO11QoLhwGeWxTbet7DTKGLxXtqeFOuiiC44WUKGWeQurjXtb0yJ%2FjcVb3XlhFKUOx3HkAV0CF&X-Amz-Signature=4dd3f20a1e5edca365c3de288d7bb207e58003bedacfdca083bc9ae4a0dfd961&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OMOLPR6%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDoHUfwwfIvWDbtLZrrvYRkkVi8WIxhe2Qbp98aJuzgzgIhANAKmpsCeZ1I%2BWTl7LpCPYFum9C3CIz77rqnyT6q4el8Kv8DCFcQABoMNjM3NDIzMTgzODA1IgxciJDgkv6zVogXnUQq3AOEmTcQmT7jGxUAptE2RtmfTaetskxBv3APOjEtyKx1HdFaeZ2CX%2FebNdHzOTNCiD0JEPBhCP6vhUNbdnQymXcXGZe%2FFTh3gtAWle4szucdu9jfltk0J3AcTrINzZnGz%2BCase03z3gjkzg8PyCGvwT06rhAWHBG1l2VXv32Qehl7Sx60rYJgFeMfv5LIohUHZpwM7bNVoGXFJcEYJyNyiWDNKVe9t0YPWfw3uE3JiPli9kK4M0C%2FFKkbAm7ysgNI7ymAlQX5Gos8Zof2TizKbMat6I4YgA6PgMNMTvPEj5C1WZc7FeovJJCwmKZfhjktmfG7EzG9TbvAKv%2BWimZPj%2Fzy3rPp%2F0eNI9YvysqgByfJTOt4p6DaGqBaGjRRz%2BakZqoaad9Z8aJEiUzCOdZ6k6AouwPQeIDnZxyt9zFwVnIO6lfUXAuXNn%2Fymi9AZ49s3AE4l361XuxnuLHtf7iLBXKsA92qJpLchlZRP%2FvUdYB%2Focrezk858BW%2BjbvTF8Ks9TRTurt5zrJINNeyWIvD8pTWngKLyZYpkXziQPEhJrHw%2FXqxVJXkUiAazJJG97See7yF3nmjqeu4dTtXkPEWCV2%2B74vMjlJo01hRugjYwPfQ8dKZMh5dOhxrj0bJzC0m5G9BjqkAcS0wzKRpreZNnnR%2FzvLW8NrHAyRvqXasY3ujW1ksiMDc7Lf%2BX1AFa9axX2s2zlX9WcCAxsEZONnZkUb6m92NGStw5EwBU92u0y%2BfWqebpOTkM221qiEAo%2Bgw%2Bosf9lYVMe92hwCuf7mr7m2mqSO11QoLhwGeWxTbet7DTKGLxXtqeFOuiiC44WUKGWeQurjXtb0yJ%2FjcVb3XlhFKUOx3HkAV0CF&X-Amz-Signature=4fc400a57649131c42ab712ad2ce157b5b296ac44347e3db9ec2110265a72f5f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
