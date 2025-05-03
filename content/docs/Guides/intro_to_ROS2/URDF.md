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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q7RMD6O%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQC8EGw3qXNnpuWSFPPEHWYRXlWUeso9XumDz%2FaNCLzrJgIhANkBwJ9g1jtt2IEq%2BmZVzCUPpxoNNX73T69%2BdSymBSXiKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv9yDHacRGyodaSiwq3AMBB3AE2mNy4OHJm%2F%2FA5ncL4j%2FsPniYHcWA%2B2cyjpsmfJDjeQlYqW3gtCStpysjH2Qd9EWsL0ePmIMb7jSXKrtjDVNbU7jayY8x6VcBkBYv3rbeHbvk2VyJ5maQ0%2BwigrnrHqtlDZSL1ZsGAwkho67AoVlMUTn61Mk8Iupx%2FPEeNtiPUH18%2BXKur49nhSxPvIjR4fwIt%2B%2B1QXVEc%2BjR%2Fj5aKjEPkRgc%2BsnsCUCBZp9lPulHrFJl7IIo0zz%2BQ3Y%2FTKdwGrB3Bz%2Bc8WZKS5L1lZ7Nn%2FeOl%2FHzR9Jrrw1q0FS4xd3V0SjVEFVicXIZL8dTsBZ%2BsfX2inEnZUHsj29eI3d7oU53eqZsuPGf8ZMoHuwNbx87LcPHcyMxf%2FU5rAybfv%2FL%2FB2IqLyMCWHYCULxID6hMYr8dyIbmZLP6f2KKfGVBz6e1fQWZZWpJ9A4yxdzMu1p7FbD7A8dDRKhLgwdIW6nOxbRqge7VUqOCUYDY37kPQfDBod4zKvS13vd%2FOXNIzjyRc1ICEsL50EcOYOQBjynm00dUoTu28jXcJSJTe%2BRhhSdqqvh1mv0RnZ%2B%2BaSlJPmucydY5PcDuBbv5NaPuYvaxwgKxbJqdHVCvP0876kfIoA%2FfeAc3FLbi%2BFZozCv3tfABjqkAT%2F0WFtZGGbeE54LGyfyYFppxsOU8tKJtwLy6teCupwqT2h5DPe887czi6AUYYsZNrFMy2lALcTgZy7QY%2F81dxUu%2B5%2FVe6LU3p7vUGhctE5rFzxAfa47d983QegPRWkMVNm%2BpZM3EwXMs8XyF96PqWbVNRFQjMf3jQx79XBXxQD81XfDyvWoft5hfxrlQzy1cD5K5A%2FhtoXVbjQmXqO76fZScHMn&X-Amz-Signature=b17addd9c59023524d6de9a6f0bf9a8200d44147d616b46801d5354df4b12a89&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q7RMD6O%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQC8EGw3qXNnpuWSFPPEHWYRXlWUeso9XumDz%2FaNCLzrJgIhANkBwJ9g1jtt2IEq%2BmZVzCUPpxoNNX73T69%2BdSymBSXiKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv9yDHacRGyodaSiwq3AMBB3AE2mNy4OHJm%2F%2FA5ncL4j%2FsPniYHcWA%2B2cyjpsmfJDjeQlYqW3gtCStpysjH2Qd9EWsL0ePmIMb7jSXKrtjDVNbU7jayY8x6VcBkBYv3rbeHbvk2VyJ5maQ0%2BwigrnrHqtlDZSL1ZsGAwkho67AoVlMUTn61Mk8Iupx%2FPEeNtiPUH18%2BXKur49nhSxPvIjR4fwIt%2B%2B1QXVEc%2BjR%2Fj5aKjEPkRgc%2BsnsCUCBZp9lPulHrFJl7IIo0zz%2BQ3Y%2FTKdwGrB3Bz%2Bc8WZKS5L1lZ7Nn%2FeOl%2FHzR9Jrrw1q0FS4xd3V0SjVEFVicXIZL8dTsBZ%2BsfX2inEnZUHsj29eI3d7oU53eqZsuPGf8ZMoHuwNbx87LcPHcyMxf%2FU5rAybfv%2FL%2FB2IqLyMCWHYCULxID6hMYr8dyIbmZLP6f2KKfGVBz6e1fQWZZWpJ9A4yxdzMu1p7FbD7A8dDRKhLgwdIW6nOxbRqge7VUqOCUYDY37kPQfDBod4zKvS13vd%2FOXNIzjyRc1ICEsL50EcOYOQBjynm00dUoTu28jXcJSJTe%2BRhhSdqqvh1mv0RnZ%2B%2BaSlJPmucydY5PcDuBbv5NaPuYvaxwgKxbJqdHVCvP0876kfIoA%2FfeAc3FLbi%2BFZozCv3tfABjqkAT%2F0WFtZGGbeE54LGyfyYFppxsOU8tKJtwLy6teCupwqT2h5DPe887czi6AUYYsZNrFMy2lALcTgZy7QY%2F81dxUu%2B5%2FVe6LU3p7vUGhctE5rFzxAfa47d983QegPRWkMVNm%2BpZM3EwXMs8XyF96PqWbVNRFQjMf3jQx79XBXxQD81XfDyvWoft5hfxrlQzy1cD5K5A%2FhtoXVbjQmXqO76fZScHMn&X-Amz-Signature=066a546c4427cbb105ca1b74152a6c08419804acc26d9a804d79a0c0f157c9ce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
