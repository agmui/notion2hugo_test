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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUBFFEKA%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFL1H%2Bic1SziggBXcgo%2B0cRmfQYUIdb2dxkEDouNaQDPAiAoFNuojDYITknDz4Y%2F%2BE3raczKEgXUSA2Qmt5l%2BxQ5XSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfonkRv%2FXTSx%2FTnKcKtwDluGV708uhLPoSoHB5KHqt8GEoyGr%2B%2BSX31vVlD2cYDgEM6ph3dsfI4SiFxQDBJOndWMA1%2F1VyrU7TwMJkTG5O4AZOOKsakchpBFNyBD26H%2BQDJ9I0%2BBvdeVG6ZU0GhpqhTNVUVVTrUvSDkh2Tgy4i3Q8OR%2B4X7FYhhG6VmpcvefImBIiPaZIOP%2F%2Bn3gO8OvXXRI3%2Ft4IRNrWIV0%2B2lipdjIgM0OrDYEGVaVgEYoEbfEKTXfK1hhKvzmEQR21cttOlRm6SFa4oLdVd%2FfSRDTX%2BxWtBUYitWSNCg7xGOeVZRSullJAK0J70dliM8ynWO8ofBE15trg5YqqXFQQc3FUXnJJZhxoAJNZ8pScu44BdHsUOo2mL%2B4%2B0AFjhszd%2BxTDGaaC55eDbi%2FLvQgQwEi5rhlu%2Bz5gF9hLhVw7VOLvncLvUeqfwdD5mTLUKOOoQDI7h6CQLwsDy6j6p5L8rON1u6m2I5Eio4Ll7hDgjJIe9rqzlQSZLtyiYITH%2B6Qu3M6klQEoQ5KxwB%2F%2F8NCz05D9wcj3OslpNsF5OuBQztQa5cLqI%2BiCvzTjFa8XYYUogLWaZSXMJcPN2oq0d10Y4yADUFs5hvXVHHUhJqdt7Dy2dSteiUeMkAX%2ByBHWV7Uw5qWtvQY6pgFXTCU3Y3oI4ViYmfrEyFa%2BamzZm4CwRKRAGab9o5C8VJySHwgkyB%2FLZOl1nJMDTJSUBUgCyXmyBeWDJnJgWYDkNyj%2Bd1LXqiIlMd9gO5%2F2aRvebR%2FRcHt40qqie583qlskTGBkVtNr%2BPLDoI2tE9OGMSjXyjqFOkKZTF1Z2mqEfVhtJxSDJM4NN8qPy82Ng2TPfzDGl%2FsyPoIv%2FdLfTJagSEksdqD0&X-Amz-Signature=ee9c059eb17154341e7b43f75405f87ba0800e2e78dfe34b95bf72d0e4d300b5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUBFFEKA%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFL1H%2Bic1SziggBXcgo%2B0cRmfQYUIdb2dxkEDouNaQDPAiAoFNuojDYITknDz4Y%2F%2BE3raczKEgXUSA2Qmt5l%2BxQ5XSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfonkRv%2FXTSx%2FTnKcKtwDluGV708uhLPoSoHB5KHqt8GEoyGr%2B%2BSX31vVlD2cYDgEM6ph3dsfI4SiFxQDBJOndWMA1%2F1VyrU7TwMJkTG5O4AZOOKsakchpBFNyBD26H%2BQDJ9I0%2BBvdeVG6ZU0GhpqhTNVUVVTrUvSDkh2Tgy4i3Q8OR%2B4X7FYhhG6VmpcvefImBIiPaZIOP%2F%2Bn3gO8OvXXRI3%2Ft4IRNrWIV0%2B2lipdjIgM0OrDYEGVaVgEYoEbfEKTXfK1hhKvzmEQR21cttOlRm6SFa4oLdVd%2FfSRDTX%2BxWtBUYitWSNCg7xGOeVZRSullJAK0J70dliM8ynWO8ofBE15trg5YqqXFQQc3FUXnJJZhxoAJNZ8pScu44BdHsUOo2mL%2B4%2B0AFjhszd%2BxTDGaaC55eDbi%2FLvQgQwEi5rhlu%2Bz5gF9hLhVw7VOLvncLvUeqfwdD5mTLUKOOoQDI7h6CQLwsDy6j6p5L8rON1u6m2I5Eio4Ll7hDgjJIe9rqzlQSZLtyiYITH%2B6Qu3M6klQEoQ5KxwB%2F%2F8NCz05D9wcj3OslpNsF5OuBQztQa5cLqI%2BiCvzTjFa8XYYUogLWaZSXMJcPN2oq0d10Y4yADUFs5hvXVHHUhJqdt7Dy2dSteiUeMkAX%2ByBHWV7Uw5qWtvQY6pgFXTCU3Y3oI4ViYmfrEyFa%2BamzZm4CwRKRAGab9o5C8VJySHwgkyB%2FLZOl1nJMDTJSUBUgCyXmyBeWDJnJgWYDkNyj%2Bd1LXqiIlMd9gO5%2F2aRvebR%2FRcHt40qqie583qlskTGBkVtNr%2BPLDoI2tE9OGMSjXyjqFOkKZTF1Z2mqEfVhtJxSDJM4NN8qPy82Ng2TPfzDGl%2FsyPoIv%2FdLfTJagSEksdqD0&X-Amz-Signature=77b8b4f8e35664f252f6f6d6f85fd920ac3785e24963a0167fe838b9b1447638&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
