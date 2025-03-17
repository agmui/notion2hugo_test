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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WADUO737%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FqqI1z1sxNdQPE6a6J83%2FYUB0nvoyyTcptS9GZFpTqQIgUOe6eulFWOFKPfTZFU0CZ2UStYapOEa6ppX8bKPo3rQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDHW1gS938lBNuz%2BpGCrcAzCIDBMojELQCGWrHOoS03vJAihk9kXMpcDBVIKPjSoWYt4QwAOFFuIqquZ1IiaQXWA8Vxl8CXtmdc%2FpOborHvdZz2uF1ylDjk2YkaU%2F%2BCQqnwv%2BRFEkhQVMd6ufz28PS9zNooQGom2LuqAKvDcQgMEBfipwTZbRCRgSZ5lOQpiM1ST5bBn3ZT2uX354puyT%2FiUethGjH6pdWM9jPJJr%2B6rkzOg80kXgJxHqJcUGUgebEXGV6jsMASSvQWAPd%2BdYsnOyqBXRDv5i8AqCAOBQmGN7DBFqmzROuqcms5z9tasNlhlJIG1RTVEd2GwCN1aOJ4sA%2BE9BFq8hoLxo%2BSsVT4dN%2FsKEo9NixXj1kSehuxpXPrmAR0nTc%2B3rpWKp3o2lU62QxQHkvWBw%2BhWZDKDabiIX0uQIp%2BOuTJ3zqPTJXjbJBLsHmz2llWp9rW%2FBUDb8mfS7PadhOURVpo%2FJaJi3OWCSDGzmy%2FL4Z5Uug4SY%2Bw8o7yH39OcK%2BAJkvbExQeadjvWkUjcmx8PZZbbWhkulN0DWUztdRnwItox29Z4eqKqfOC1sKdfY2UpTEkJ%2F7yRjfA%2BSVQqKj6Vah6HWLo%2BMiObtclmjb9Ts55B5zZh6FbDLsIV%2BPceX7kRPTzaMMOHJ4L4GOqUBxW51si69eMf55FLdd3dMWG6Vyf2JC%2FvPJ7weZ7gzfgrWwZN6ZnG78wegev12Dn6wHWqFx6qogbPPGsPrH3LWJNy%2BaxjvGF37s%2F29BSZFseoH0jSxujzxLpBouyt86h1jPTsirphHHKcyuIdQf4v7ErgrZtK8KssDtakWqGr%2FUYgc9dsAi8MG9TCMNXVv8%2BZM0gewUbBhplRAjfxe8lGMQCX%2FYWCC&X-Amz-Signature=762e89c5898700b7318af7abef68d7ace17d49676b80e15312dd89c74521e1f8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WADUO737%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FqqI1z1sxNdQPE6a6J83%2FYUB0nvoyyTcptS9GZFpTqQIgUOe6eulFWOFKPfTZFU0CZ2UStYapOEa6ppX8bKPo3rQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDHW1gS938lBNuz%2BpGCrcAzCIDBMojELQCGWrHOoS03vJAihk9kXMpcDBVIKPjSoWYt4QwAOFFuIqquZ1IiaQXWA8Vxl8CXtmdc%2FpOborHvdZz2uF1ylDjk2YkaU%2F%2BCQqnwv%2BRFEkhQVMd6ufz28PS9zNooQGom2LuqAKvDcQgMEBfipwTZbRCRgSZ5lOQpiM1ST5bBn3ZT2uX354puyT%2FiUethGjH6pdWM9jPJJr%2B6rkzOg80kXgJxHqJcUGUgebEXGV6jsMASSvQWAPd%2BdYsnOyqBXRDv5i8AqCAOBQmGN7DBFqmzROuqcms5z9tasNlhlJIG1RTVEd2GwCN1aOJ4sA%2BE9BFq8hoLxo%2BSsVT4dN%2FsKEo9NixXj1kSehuxpXPrmAR0nTc%2B3rpWKp3o2lU62QxQHkvWBw%2BhWZDKDabiIX0uQIp%2BOuTJ3zqPTJXjbJBLsHmz2llWp9rW%2FBUDb8mfS7PadhOURVpo%2FJaJi3OWCSDGzmy%2FL4Z5Uug4SY%2Bw8o7yH39OcK%2BAJkvbExQeadjvWkUjcmx8PZZbbWhkulN0DWUztdRnwItox29Z4eqKqfOC1sKdfY2UpTEkJ%2F7yRjfA%2BSVQqKj6Vah6HWLo%2BMiObtclmjb9Ts55B5zZh6FbDLsIV%2BPceX7kRPTzaMMOHJ4L4GOqUBxW51si69eMf55FLdd3dMWG6Vyf2JC%2FvPJ7weZ7gzfgrWwZN6ZnG78wegev12Dn6wHWqFx6qogbPPGsPrH3LWJNy%2BaxjvGF37s%2F29BSZFseoH0jSxujzxLpBouyt86h1jPTsirphHHKcyuIdQf4v7ErgrZtK8KssDtakWqGr%2FUYgc9dsAi8MG9TCMNXVv8%2BZM0gewUbBhplRAjfxe8lGMQCX%2FYWCC&X-Amz-Signature=35606796aedb0b485238aec51d5fd4ef7d48e73aaebba5b0f0566e973e5a4839&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
