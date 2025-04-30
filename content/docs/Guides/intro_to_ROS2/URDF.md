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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJZODAZT%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDisGgFZOSav0dOheOaMn4qEAOoq%2Fao%2F%2Bgu8PVdVQ6SqAIhAMKMoVeWY4xmhGWvqeloX%2BGbzHExycmLlj3zA7509BOCKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxN8b6DibVx%2BrNEcM0q3AMrLtiJ%2FVmFz7X9S%2BllmEvn5nN7b%2Br%2FXzFs1zW9OtR5h3WR2vyZEDsgou%2F8Zzq%2F6vj1lWYq64VQDFtndYZ9KMVF8sBVo7ZEe1RZpnK7Ii7bPfZwQMjsDgjkZQ7C5H7VahH3kne0rrEG1mZzVdTw%2B2nOtCRefuKs6Fi5EXDo%2BM%2BNleqqE1hu8ChtNVv9VDiWBxDC9POYKd%2BiDpJFx9sXz2JX197xTBc1WQVr8DKAScDrOSI4uSG5aQf7Hohiq68zFKUsaOYp%2FJfkKyRdAHNy3fCGhnTn8Waycgx2VMnodIgFTuxQrm0Y%2BZ8pnYJPXB6hNrFdSHDIGBUUyTX5TEBBrtl3AZ2Vt2AbUL5vNGEhxWHD6M5d%2FZ%2FsVnaqWe%2F0bqY7ENpwqlcjUsl%2BGykdGL6tTBwKPUUK%2FaeAjLWtxAZ48z6IdrbwRCWjZZAPIdrCHZSp%2FnNwRZVd8WBvcpc7GQdUxVLrq%2B7Od4Cx8Q85s8CVD9MGO%2F8omxsIXmlfg2L08w%2Fms2pEzNRYkph4Soe7UAlCO6C7pqY2Fy5XjcQvDH4WF5WMJE%2BINwHCiVD5HbGIkCLVnWCujeqk6vTrWMmVG2G3NPx4vfYU5YOq%2Bl7fVKKh6z7NoEURFqJg1o3BUaeSHDDfv8bABjqkAYAbemOf%2BY6fIuHxT7jerSOI%2BIshMebEEUGGi9yIiJj7gZXdhtqpCaz%2BUt0jHj%2FHxTe7IhVA5BQEeusLHbrcB2Vf1nj83yNrWg%2FzgOTAShQBs5WjCmkDTQew%2B2dPI6UAFuStg4bQx62dTaE1EoqH3Ra%2BoZ%2BaGwEStG%2B5LMuLZ%2BD%2BCGFU8Lj%2FnNMzK65gE6EKa2%2BrpoJf3IcgL5aaEZgofi9XbsHJ&X-Amz-Signature=30b1ae7440688f2bbf1a74f86ad2e9635bb353750c391edb3d84e579ad410133&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJZODAZT%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDisGgFZOSav0dOheOaMn4qEAOoq%2Fao%2F%2Bgu8PVdVQ6SqAIhAMKMoVeWY4xmhGWvqeloX%2BGbzHExycmLlj3zA7509BOCKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxN8b6DibVx%2BrNEcM0q3AMrLtiJ%2FVmFz7X9S%2BllmEvn5nN7b%2Br%2FXzFs1zW9OtR5h3WR2vyZEDsgou%2F8Zzq%2F6vj1lWYq64VQDFtndYZ9KMVF8sBVo7ZEe1RZpnK7Ii7bPfZwQMjsDgjkZQ7C5H7VahH3kne0rrEG1mZzVdTw%2B2nOtCRefuKs6Fi5EXDo%2BM%2BNleqqE1hu8ChtNVv9VDiWBxDC9POYKd%2BiDpJFx9sXz2JX197xTBc1WQVr8DKAScDrOSI4uSG5aQf7Hohiq68zFKUsaOYp%2FJfkKyRdAHNy3fCGhnTn8Waycgx2VMnodIgFTuxQrm0Y%2BZ8pnYJPXB6hNrFdSHDIGBUUyTX5TEBBrtl3AZ2Vt2AbUL5vNGEhxWHD6M5d%2FZ%2FsVnaqWe%2F0bqY7ENpwqlcjUsl%2BGykdGL6tTBwKPUUK%2FaeAjLWtxAZ48z6IdrbwRCWjZZAPIdrCHZSp%2FnNwRZVd8WBvcpc7GQdUxVLrq%2B7Od4Cx8Q85s8CVD9MGO%2F8omxsIXmlfg2L08w%2Fms2pEzNRYkph4Soe7UAlCO6C7pqY2Fy5XjcQvDH4WF5WMJE%2BINwHCiVD5HbGIkCLVnWCujeqk6vTrWMmVG2G3NPx4vfYU5YOq%2Bl7fVKKh6z7NoEURFqJg1o3BUaeSHDDfv8bABjqkAYAbemOf%2BY6fIuHxT7jerSOI%2BIshMebEEUGGi9yIiJj7gZXdhtqpCaz%2BUt0jHj%2FHxTe7IhVA5BQEeusLHbrcB2Vf1nj83yNrWg%2FzgOTAShQBs5WjCmkDTQew%2B2dPI6UAFuStg4bQx62dTaE1EoqH3Ra%2BoZ%2BaGwEStG%2B5LMuLZ%2BD%2BCGFU8Lj%2FnNMzK65gE6EKa2%2BrpoJf3IcgL5aaEZgofi9XbsHJ&X-Amz-Signature=f4dabc5662f0e9efe362a6c7d67ea381cc0bf805c3c0745e50879a6719b314d2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
