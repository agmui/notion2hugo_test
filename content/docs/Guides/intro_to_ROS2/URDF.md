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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOP2JLLA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAmCgGdQ9UU7LSz%2Btpq%2FIUmcaXqETi%2B6a1D1WZAATcaAiEAgfdpgksD2%2FDQEt72uIM4mGGgOC1xz%2F17L53Dj5zBJNMq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDDXoyuqfFwK3gqKCiyrcA%2FFclQAyWJijItu5m7e8AOLaZLdxjK2dM5OGrKT48sYDvkVTXy%2FeGy2bqGmWoNsn0%2FmeAOl2tlNObt9nHSLZWhnsOEjg0Xl1Ep%2BiTqY4y5moxzYFUmjTEmfq6KUt4zvaG6U8TL6RL1k0gf8GjN52q1zejxDgh5Ue0AsLHeU808qqFxZneTfu4SLSG3ZVO2zkuK9g1uFOy4NyEpunfcTQVuv9X3vk%2BNMwFICOhqGpUJM9rLZPgDDtVcBke78G%2BQRZyNoguUi67mK1ka501AiI30X4E8p1mQD9U3D1OhMH6LqRboCQbAlm2iW90RUAVdJvQP%2FJAaIjQpKpo9rQmpyZlBVk4eHp8z4oXXT5Cij5mvZ9RSZ8gnFMxrfLnVe3wOtdRqX2EYzdXtep38xLE5C9HKQOJ2HqwCnC2yYScu1RXVmYLKqXvBB4S%2FeKIcG5SqbpsUgR6OqZqy9WfHqjrODCvPV4sLcRq6khHJbZW%2BicJdJorQuMNULBVz%2BZqOagyq1uG6Vt7hd5guTzDBBLeDuENuiikNX3%2F5QTK1OnOgI3tFYDzbdyEj7JmnEqVfz9hApf8FzSge8BpwFAvYBsI25%2Fprbn%2FmVwQfLGlLTQFMhJ3ajNhkZsBoVLSnaDX3WdMNuF8MQGOqUBe%2BzifOqLz3TbCSvXtOE%2FJ1r8%2FoHpHftsPB2tLpb90qFzFIoZWvdvMz4SduJeJ%2BtFb94lBBxn59bjNsevlgqA1Vf2IOakpPAUCk44zpDQ2mSYqwdqh23ACClaRsFlVzD8N%2FrTe0eiGRBgppxgM968fUwEUjzu%2BLSTg8Q69wVS6fId%2B1IirdKb9wA1klDTQwM5SOfi5IAAh6vSf3Kv%2BQnPQST8HbVJ&X-Amz-Signature=b4274dab48e0075026b916d4ec2a0e4801bcc826a516cc8dc69059371d95e504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOP2JLLA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAmCgGdQ9UU7LSz%2Btpq%2FIUmcaXqETi%2B6a1D1WZAATcaAiEAgfdpgksD2%2FDQEt72uIM4mGGgOC1xz%2F17L53Dj5zBJNMq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDDXoyuqfFwK3gqKCiyrcA%2FFclQAyWJijItu5m7e8AOLaZLdxjK2dM5OGrKT48sYDvkVTXy%2FeGy2bqGmWoNsn0%2FmeAOl2tlNObt9nHSLZWhnsOEjg0Xl1Ep%2BiTqY4y5moxzYFUmjTEmfq6KUt4zvaG6U8TL6RL1k0gf8GjN52q1zejxDgh5Ue0AsLHeU808qqFxZneTfu4SLSG3ZVO2zkuK9g1uFOy4NyEpunfcTQVuv9X3vk%2BNMwFICOhqGpUJM9rLZPgDDtVcBke78G%2BQRZyNoguUi67mK1ka501AiI30X4E8p1mQD9U3D1OhMH6LqRboCQbAlm2iW90RUAVdJvQP%2FJAaIjQpKpo9rQmpyZlBVk4eHp8z4oXXT5Cij5mvZ9RSZ8gnFMxrfLnVe3wOtdRqX2EYzdXtep38xLE5C9HKQOJ2HqwCnC2yYScu1RXVmYLKqXvBB4S%2FeKIcG5SqbpsUgR6OqZqy9WfHqjrODCvPV4sLcRq6khHJbZW%2BicJdJorQuMNULBVz%2BZqOagyq1uG6Vt7hd5guTzDBBLeDuENuiikNX3%2F5QTK1OnOgI3tFYDzbdyEj7JmnEqVfz9hApf8FzSge8BpwFAvYBsI25%2Fprbn%2FmVwQfLGlLTQFMhJ3ajNhkZsBoVLSnaDX3WdMNuF8MQGOqUBe%2BzifOqLz3TbCSvXtOE%2FJ1r8%2FoHpHftsPB2tLpb90qFzFIoZWvdvMz4SduJeJ%2BtFb94lBBxn59bjNsevlgqA1Vf2IOakpPAUCk44zpDQ2mSYqwdqh23ACClaRsFlVzD8N%2FrTe0eiGRBgppxgM968fUwEUjzu%2BLSTg8Q69wVS6fId%2B1IirdKb9wA1klDTQwM5SOfi5IAAh6vSf3Kv%2BQnPQST8HbVJ&X-Amz-Signature=cc54ff8fb0021f84260886334101e09d922e3b3b470c0a08956c7a1da7c9367f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
