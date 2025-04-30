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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LP5NRN4%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIFJOsuO84y4t6n2q992WO4hS9We1GMZ1GXHYGAA28%2BaBAiAs3iwxS7g%2BoSoOXiwhJxZOlVaY4ZLKxp%2FyPTwLgpmSoiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZNNkz2aI%2BQsQGg2%2BKtwDavdHTQDRO9HB%2BzyP62qSs3d9Ql1mZb2baxw8GXxaW7wfXuQYW0LsyXGm4vS5mH41C4lk%2BXiu99Zld8AKqN9L%2FoVpqJ27LOi6J5B715uo7JLVCeH%2F4G5u9I5v1V7SbsE4vDENB0mtlwhVbCjXmDdAmgP9qtN3NncUMJic7%2F2KVdpqw69bq87CSIJC%2BEvkHKOXhYINp6REjxZrX2heXQPe1wGSitfOOv4G5Vk9kTY9lt7iBdWW0CwSeSwewE0DTP1Ox8aeN3iRwRW08I1Dy21%2BQxh0GnIkjhJEz4rE7%2FswzJkniLOa2H%2BSHhKcFf%2BZnXwYHv2I4HxcNVKwkS8TReQBGpM1g0xH2pqUjzUlHjiAq1gSOsb%2FB4wWP%2FzVA%2BXUWlKuq98xk4%2Brf0rIO3ZAjFWvCYvAgqeArNxnjCUp0O19kJEzdvuamOYKYDHTJ%2FdZVqBD0JBBPUlM1OCDJVnS49cgpnRDKk1rop5imo1CocTTFKmytwNyoEbYeXcuI3qBWZVvuDlHXeXPH3Y1ywmfHUDDnNbwKxrXlACZQt3bZrUHo0puP3rg6dvwWSi6OOc4j3yGwDRPAt0Nz2y%2BxxjORuWPXhjyWrDXWbxGPfr7Mzr9MkyI%2FR556ajOyDSNplUwhZfHwAY6pgETSx34T%2FHB%2Fd4CXlZ0k1SjgcpnD15SyvsuQjsA6XXmnWR2eLMnTG4WVRz7KURx1tcC8InxgWdWXDfmpAYUCydlUXcGn4ZGyrxUnbO1L8hoYnX2AGysvoRts28aMt9F04pl9SI0BYqraPzjLDNjyE5Olx%2BGYAv4Rfmm8G3il5AliwmtXXRQXVzR5QKAoZFjZfdVJXpSzkPMVxi6K%2BFEcP2ojjy9cgF6&X-Amz-Signature=3d37ad21a8d306090935451af55eb53c65e0db18c4e0332dfd8e06a16948f976&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LP5NRN4%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIFJOsuO84y4t6n2q992WO4hS9We1GMZ1GXHYGAA28%2BaBAiAs3iwxS7g%2BoSoOXiwhJxZOlVaY4ZLKxp%2FyPTwLgpmSoiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZNNkz2aI%2BQsQGg2%2BKtwDavdHTQDRO9HB%2BzyP62qSs3d9Ql1mZb2baxw8GXxaW7wfXuQYW0LsyXGm4vS5mH41C4lk%2BXiu99Zld8AKqN9L%2FoVpqJ27LOi6J5B715uo7JLVCeH%2F4G5u9I5v1V7SbsE4vDENB0mtlwhVbCjXmDdAmgP9qtN3NncUMJic7%2F2KVdpqw69bq87CSIJC%2BEvkHKOXhYINp6REjxZrX2heXQPe1wGSitfOOv4G5Vk9kTY9lt7iBdWW0CwSeSwewE0DTP1Ox8aeN3iRwRW08I1Dy21%2BQxh0GnIkjhJEz4rE7%2FswzJkniLOa2H%2BSHhKcFf%2BZnXwYHv2I4HxcNVKwkS8TReQBGpM1g0xH2pqUjzUlHjiAq1gSOsb%2FB4wWP%2FzVA%2BXUWlKuq98xk4%2Brf0rIO3ZAjFWvCYvAgqeArNxnjCUp0O19kJEzdvuamOYKYDHTJ%2FdZVqBD0JBBPUlM1OCDJVnS49cgpnRDKk1rop5imo1CocTTFKmytwNyoEbYeXcuI3qBWZVvuDlHXeXPH3Y1ywmfHUDDnNbwKxrXlACZQt3bZrUHo0puP3rg6dvwWSi6OOc4j3yGwDRPAt0Nz2y%2BxxjORuWPXhjyWrDXWbxGPfr7Mzr9MkyI%2FR556ajOyDSNplUwhZfHwAY6pgETSx34T%2FHB%2Fd4CXlZ0k1SjgcpnD15SyvsuQjsA6XXmnWR2eLMnTG4WVRz7KURx1tcC8InxgWdWXDfmpAYUCydlUXcGn4ZGyrxUnbO1L8hoYnX2AGysvoRts28aMt9F04pl9SI0BYqraPzjLDNjyE5Olx%2BGYAv4Rfmm8G3il5AliwmtXXRQXVzR5QKAoZFjZfdVJXpSzkPMVxi6K%2BFEcP2ojjy9cgF6&X-Amz-Signature=ade716a5a6d4fcaaf2571f2c8f449530927a58ad2f14d77e31f23171df8c9925&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
