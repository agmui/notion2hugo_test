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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZFHL5G%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCHWs%2BPxjrNXzfsoCgKd656%2FzDzOIsAfNESM4P3pT7TrQIhAN1f4o9pHkg%2FGx%2FFPD2%2B5J8EkUYdeKTATRDeyVhY9IagKv8DCEQQABoMNjM3NDIzMTgzODA1IgyzD1kdHeeeHWuGDuMq3AP0WQRYbpp9siJeG%2B%2BljFpG2q5trjhj7eI%2BIsJ3gVpP6E9I7VyF0QqXynV7NH0igb0MdOzBSP9xleUn2z%2FNr%2FBCuAehSBjHXtaUkiMmvI0T8djqEH6icDnrnU9Pnvv8IeM%2BvZyZoHYFQZZ4m2nwkIBOYjud9hVbrj%2Btdp0MjVDr%2BhjByTLaoNgfrMNyJdiasNwy7K%2BUdJvNs0lblWZH7CEZjIBfQbgCQxceCACn4u%2BctvBPXov%2F%2Bl3143lEjCMfhTacDSv0cMOynrqNigWopWT7c1lfNI%2BEbhGMfQgkaHSff%2BHk3mtl6w7xxuyiat0tXI3up6%2Bhac0fNzaRXj7S%2FzpxuCuEj79MWwGHPU7zCBs3965jJZ%2BTCJyWkSPq6q2q7QM9vdBAt%2F30Kd9MAML%2BFwYqUMO7vI%2FOcdXwfAyX%2FaxlVqxnUiDV4s%2F0v3yPK0Iy3rkZPGoV33ztO%2BQnaahnlVz4QuU%2BP60trb2ZxNr9oW%2Bln95eZLqcmZ1eScN0%2BHj2M1l7dbA6PiOPVUlm9VCQVQ6dF7VMdvFHt7dMcN4OtTJwx2QB%2F00KHPs01cH%2B1qQ%2Fnq%2FgxGLn8p9LPlZH9mJfI07s679GdvW5dUo64KlG5UeUIrASd62k3p3tidm3DTCK7cG9BjqkAbBcnK8CYoUPFufwBgAPpxtdMmQJRHrmarq8ndLMq9PnM%2FB0Wz7HqqW34fbkOb2eu9ZE8xq9iRYDLoGd%2BlBw3Y30ni5leA78WhgQ0ovfoC6Q9AOcjv2AzJ4bDZcI6zgZQbkFLpPVPZv0WhPgliKcNhfs1eZCPWuQfWI6oPOpm4mezfPaKYQ4Xyv4owMS0WMcqWhxRYrGtHXfwYjwKYAUanIr895U&X-Amz-Signature=86cec0e553d3649d80279ba0302f819fa3d585aa47dab37449d13747c62bb433&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZFHL5G%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCHWs%2BPxjrNXzfsoCgKd656%2FzDzOIsAfNESM4P3pT7TrQIhAN1f4o9pHkg%2FGx%2FFPD2%2B5J8EkUYdeKTATRDeyVhY9IagKv8DCEQQABoMNjM3NDIzMTgzODA1IgyzD1kdHeeeHWuGDuMq3AP0WQRYbpp9siJeG%2B%2BljFpG2q5trjhj7eI%2BIsJ3gVpP6E9I7VyF0QqXynV7NH0igb0MdOzBSP9xleUn2z%2FNr%2FBCuAehSBjHXtaUkiMmvI0T8djqEH6icDnrnU9Pnvv8IeM%2BvZyZoHYFQZZ4m2nwkIBOYjud9hVbrj%2Btdp0MjVDr%2BhjByTLaoNgfrMNyJdiasNwy7K%2BUdJvNs0lblWZH7CEZjIBfQbgCQxceCACn4u%2BctvBPXov%2F%2Bl3143lEjCMfhTacDSv0cMOynrqNigWopWT7c1lfNI%2BEbhGMfQgkaHSff%2BHk3mtl6w7xxuyiat0tXI3up6%2Bhac0fNzaRXj7S%2FzpxuCuEj79MWwGHPU7zCBs3965jJZ%2BTCJyWkSPq6q2q7QM9vdBAt%2F30Kd9MAML%2BFwYqUMO7vI%2FOcdXwfAyX%2FaxlVqxnUiDV4s%2F0v3yPK0Iy3rkZPGoV33ztO%2BQnaahnlVz4QuU%2BP60trb2ZxNr9oW%2Bln95eZLqcmZ1eScN0%2BHj2M1l7dbA6PiOPVUlm9VCQVQ6dF7VMdvFHt7dMcN4OtTJwx2QB%2F00KHPs01cH%2B1qQ%2Fnq%2FgxGLn8p9LPlZH9mJfI07s679GdvW5dUo64KlG5UeUIrASd62k3p3tidm3DTCK7cG9BjqkAbBcnK8CYoUPFufwBgAPpxtdMmQJRHrmarq8ndLMq9PnM%2FB0Wz7HqqW34fbkOb2eu9ZE8xq9iRYDLoGd%2BlBw3Y30ni5leA78WhgQ0ovfoC6Q9AOcjv2AzJ4bDZcI6zgZQbkFLpPVPZv0WhPgliKcNhfs1eZCPWuQfWI6oPOpm4mezfPaKYQ4Xyv4owMS0WMcqWhxRYrGtHXfwYjwKYAUanIr895U&X-Amz-Signature=72e1fb479e84ab8cac8a1c06a41aaea189cbfc12c206ab10b5cd89b740dfde01&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
