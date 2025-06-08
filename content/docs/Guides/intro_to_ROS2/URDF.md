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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMFDDKAN%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T110105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9znRXR4SkRZnMF4Bqy0j96PTojjn%2FB3gfWJICIsKY6wIgRGHEcImkNR4YPZg0vzv07jv2NNJak4YY1l4BQFdC8qIqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgFLx2HHJfGFoIYWCrcA%2F9pIxHoYSqIhh5H9P23WHH1ZtLOhiYcD0gbjbn%2FUIWpWheKXwUwyEN1m5AK87rIkpBSRYp%2Flp1wMcepZCn6cwMX2y2%2Bau67gmw5n5jiN0vLE9oTPqFxsqbFUydUry9XLDL7voEOOepWbg1P3cD72w4l3GF3eT0lMj6o3ZD6H2m9c3a8GrA%2BszHxEHtFcO3TxF1gXd%2BvG5KMBXsc4V94ctYRPFIeDakQR%2F1dDtn47Y%2FErwTKnmmQr28Ga0M3x7yyfZ7a6R%2FXf7ZF4k%2B%2BCmfrzgmVY8VUqgjclBzFPVVo93Pnm10gtZOBotkwxgifiYhYf7K5ugi4KGCyrmSyrZL2F1IB8js5dPDfgZBLyeiveAwCgQzzkgj2nwHBPG3iHICHpG5rJqiNmfV3DVQz9vGdXjCo4N2pKNezDN%2FdJCBKeRobCxaVh2wV5imgNQbXMbCVA4rUxTXsKihfkuqUFXBkpXkcuLSBtYCe1qPnL1CzbzVxCrom1nDUoOJ60QMUjQjvESn%2Fm8FBHzHJZGx2PfX6QmmMZfnqdIGJ5sft0FyUynpp6mp%2Fu7BG%2ByaYMgVNWJYI2uAIoGWFz8CVhRUFFklrIsZpjSKOjB7K4iaUxQVbKXs6Trp3N2M13wNVcM3AMKfXlcIGOqUBK5F35FRBDKglZxs389mKdPCb7k75%2FLHVhnESKLLYCDLHZZ0Jy43tZEUayhrYKPoflWHiAZ8DByuBSz50MO3LATtEvjmIdA4Vm%2Fq3usgbAxE59seaorhsFqNSCkW8LHjOVT5YiqEGb4a4m2N8s8wNX4F%2BbVcFl7JK3SgWdMRviFLgxQB0v%2FpT5NOCGF9SzQGHOits8si3nDU35piWUl%2BOL6v4Y69L&X-Amz-Signature=842b64c18e02c4e880a777abe80af1eb01453f1fdc961552fc60c15e65fe0e00&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMFDDKAN%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T110105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9znRXR4SkRZnMF4Bqy0j96PTojjn%2FB3gfWJICIsKY6wIgRGHEcImkNR4YPZg0vzv07jv2NNJak4YY1l4BQFdC8qIqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgFLx2HHJfGFoIYWCrcA%2F9pIxHoYSqIhh5H9P23WHH1ZtLOhiYcD0gbjbn%2FUIWpWheKXwUwyEN1m5AK87rIkpBSRYp%2Flp1wMcepZCn6cwMX2y2%2Bau67gmw5n5jiN0vLE9oTPqFxsqbFUydUry9XLDL7voEOOepWbg1P3cD72w4l3GF3eT0lMj6o3ZD6H2m9c3a8GrA%2BszHxEHtFcO3TxF1gXd%2BvG5KMBXsc4V94ctYRPFIeDakQR%2F1dDtn47Y%2FErwTKnmmQr28Ga0M3x7yyfZ7a6R%2FXf7ZF4k%2B%2BCmfrzgmVY8VUqgjclBzFPVVo93Pnm10gtZOBotkwxgifiYhYf7K5ugi4KGCyrmSyrZL2F1IB8js5dPDfgZBLyeiveAwCgQzzkgj2nwHBPG3iHICHpG5rJqiNmfV3DVQz9vGdXjCo4N2pKNezDN%2FdJCBKeRobCxaVh2wV5imgNQbXMbCVA4rUxTXsKihfkuqUFXBkpXkcuLSBtYCe1qPnL1CzbzVxCrom1nDUoOJ60QMUjQjvESn%2Fm8FBHzHJZGx2PfX6QmmMZfnqdIGJ5sft0FyUynpp6mp%2Fu7BG%2ByaYMgVNWJYI2uAIoGWFz8CVhRUFFklrIsZpjSKOjB7K4iaUxQVbKXs6Trp3N2M13wNVcM3AMKfXlcIGOqUBK5F35FRBDKglZxs389mKdPCb7k75%2FLHVhnESKLLYCDLHZZ0Jy43tZEUayhrYKPoflWHiAZ8DByuBSz50MO3LATtEvjmIdA4Vm%2Fq3usgbAxE59seaorhsFqNSCkW8LHjOVT5YiqEGb4a4m2N8s8wNX4F%2BbVcFl7JK3SgWdMRviFLgxQB0v%2FpT5NOCGF9SzQGHOits8si3nDU35piWUl%2BOL6v4Y69L&X-Amz-Signature=b322e1ba008853860ae26913c6b7c151c30fc45ff156b6d92db0d727fd6e0a70&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
