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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U6SMGLE%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BAQvCxT92aytAShFEbitb9d%2F3USc9PAYYrJrK1vQ26wIhAM945c4GLwfn%2FGiB6NsBXU6FsaNPcNMKezqeuneUSi2%2BKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjMHXgV6zapKdS3mIq3ANvGxzpZTRW5HFxcdAIaOMYKe1PobVZ4FQyeF9KzDZEFbvXvA9GezTbz9AAhxIarBtuDJrMhrcU8ujOoSvX%2BJcUntGFrfYVWRSPPLSx5jbllXQVZLAK4uV0d35sEg9MgIwgw%2BRx6Ts5T1P2o2g5k83Dn%2Bvx7cM8mU1tIWQmB9vCuUmNNrbTs%2FYKMPyLl6IsCmbtK%2BRdBPK7aV5woIIE95OMIEJGNMoXGuaRos4DoNtwOmmINchVizzl8%2FFR3Mr5FFHgB2q2A7LZ5O9pDrMxp3NKU0dn0S8mKgpWySyGfMXTEPn3jKhvlEmDuXn3DcQwjPFVxdIjXleDH7kMOi%2BwcO0sjH7V1Qj%2B1SfClyJ9xrkS2rgWz3SSlvZkkF5T%2By%2B5gEPiPTKEVc5pvx2cWu%2B3e5fzpUevUjAi3neDw5KxofvXp2PMt%2FE6ZqjPjt4bg3ASrT2XTTfxFVk%2F7xlKX9dDLm2OzT0ycB5FrKOGUT9UsTfKCJkUUuzCNLS1zS3qENxHYxST%2FcuSjggtK2krKn67rMART2ZF4evLcqRIyyjqU8dX5jwHg75jaHUIv6k%2FsNK58t%2FRSQxUZtx0JkNCMIWbwKVxekQKC7MVJ9jqS26FVeOkpU1fKu5l9J4lZ2NzHTDEyPbABjqkAei%2FYoq891WZXXy0T2tRZguEQyiX07xexu2mL2tQR4Me4KJk63PUoOW087%2Fmy5RLX1hB0WuM9Wpt0gerkhhJlLr4%2BAum9YRo%2FJiidsqnAfvqKJ5l6Pw2u6y7ai%2BnYKAVwyEYwb5MUNOnRD45fLfPLWSr3euUOSZPSuuUhZxBboBznF3xeUZaJCLE6ehw8b3%2FPX3eEAYLfI1mZdsQwcfcyICGTN8s&X-Amz-Signature=681bd381f44d113c370838c895c01cbf78ef1db89eab2791b5ec5667242075a3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U6SMGLE%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BAQvCxT92aytAShFEbitb9d%2F3USc9PAYYrJrK1vQ26wIhAM945c4GLwfn%2FGiB6NsBXU6FsaNPcNMKezqeuneUSi2%2BKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjMHXgV6zapKdS3mIq3ANvGxzpZTRW5HFxcdAIaOMYKe1PobVZ4FQyeF9KzDZEFbvXvA9GezTbz9AAhxIarBtuDJrMhrcU8ujOoSvX%2BJcUntGFrfYVWRSPPLSx5jbllXQVZLAK4uV0d35sEg9MgIwgw%2BRx6Ts5T1P2o2g5k83Dn%2Bvx7cM8mU1tIWQmB9vCuUmNNrbTs%2FYKMPyLl6IsCmbtK%2BRdBPK7aV5woIIE95OMIEJGNMoXGuaRos4DoNtwOmmINchVizzl8%2FFR3Mr5FFHgB2q2A7LZ5O9pDrMxp3NKU0dn0S8mKgpWySyGfMXTEPn3jKhvlEmDuXn3DcQwjPFVxdIjXleDH7kMOi%2BwcO0sjH7V1Qj%2B1SfClyJ9xrkS2rgWz3SSlvZkkF5T%2By%2B5gEPiPTKEVc5pvx2cWu%2B3e5fzpUevUjAi3neDw5KxofvXp2PMt%2FE6ZqjPjt4bg3ASrT2XTTfxFVk%2F7xlKX9dDLm2OzT0ycB5FrKOGUT9UsTfKCJkUUuzCNLS1zS3qENxHYxST%2FcuSjggtK2krKn67rMART2ZF4evLcqRIyyjqU8dX5jwHg75jaHUIv6k%2FsNK58t%2FRSQxUZtx0JkNCMIWbwKVxekQKC7MVJ9jqS26FVeOkpU1fKu5l9J4lZ2NzHTDEyPbABjqkAei%2FYoq891WZXXy0T2tRZguEQyiX07xexu2mL2tQR4Me4KJk63PUoOW087%2Fmy5RLX1hB0WuM9Wpt0gerkhhJlLr4%2BAum9YRo%2FJiidsqnAfvqKJ5l6Pw2u6y7ai%2BnYKAVwyEYwb5MUNOnRD45fLfPLWSr3euUOSZPSuuUhZxBboBznF3xeUZaJCLE6ehw8b3%2FPX3eEAYLfI1mZdsQwcfcyICGTN8s&X-Amz-Signature=bcb8c508005ba93132ffaafedbb763fb15ab2291a3c860c00f6b0d7c342b7a11&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
