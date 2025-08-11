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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJAKGHR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq7UXipI2kGot%2BcOd87sv5YuY0oU8HmSbf4M6mEhEJrAIgX5GFUc0C42eK1JHYl8q8xgqvmbXm%2FKrEvqi7A6GKBYkqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIq2MQLAw1Rw2cagdCrcA%2FL8GQkTKwwRnqIiqFJ23%2FqslXkEjXMMuqHI7y6fOwMlW%2BD7pCenZIn06IWHCrD2HPypWETV%2FLIjgltUs2lWS%2B3AnMlGpic48R97qeehpovqBz3zCIljHArdGcL%2F8ZRgjGIvagmPlWOMII%2BsfSwpM%2FCkG8H%2BghlY%2BZ5%2BK62D8Em33L3Vvf6aVFFFv3KJTfalZWrEJwvf1%2BZHSlmI6lILZjwovdKdRohI6KyLTwcUlfIzieLqy4uSRBBAJbhuAIzLZ%2Bqwa77xLMi7j09%2Foedrog%2BAqC5K%2BbrltuTcLh0Y9Ei6nhxhJOFhBWUAQlT7zRhxFAiRSHse2SgDV3cJopyU3b0p0BVoTg0aGOorUbkE%2BVUdGIal32KSKFnMfURgjiyJxXT%2FtI6So7w%2BfwFXOvm57Zxnedzd8kI9RKJiclDRAxzysTkIKtD%2FNjBYTo%2BPUhww%2FCRl0AuI%2B73Kr%2BdBY9skRNsrGloPB56MnE5YPYxLHuqoStwuxraFl36SGBwNVOT7FahyWxOP9VRKMvigFZGl8iuAdqg1AG%2FjlPeYQmL9qbL%2B3kV9ECCZ0ML%2BdEPBOOyc1zTN5M%2B3kQwnz5EYk5sfedOYDUTiB1tLh1JGQBY0FUMldkHO1yUESr9ttQIsMO735cQGOqUBPm3bFip%2FsD57dvH5llQp1gVYxzcmNFZ3LGJ0scY4sxX4MiKit68ss9rurrRNxXQcXoSgHG1N3qW8QKQMw8m%2FaX3v5vvPVjFj42wQMRBU%2FgXHra5PBh9lJe8BNAaxvDw27RwF3a9Zl83ujieJLftHcLWzrRcJLsfeG%2BdU4Y%2Bc2K2uZAFzQDCCv72GHBBtfpqqAqu%2BbGTGzkIUxhVz2Aqms268SAmR&X-Amz-Signature=a5ffc62193d7b26abb6471552ab065f8dcb44198d75607fcb2a1358d07f71695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJAKGHR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq7UXipI2kGot%2BcOd87sv5YuY0oU8HmSbf4M6mEhEJrAIgX5GFUc0C42eK1JHYl8q8xgqvmbXm%2FKrEvqi7A6GKBYkqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIq2MQLAw1Rw2cagdCrcA%2FL8GQkTKwwRnqIiqFJ23%2FqslXkEjXMMuqHI7y6fOwMlW%2BD7pCenZIn06IWHCrD2HPypWETV%2FLIjgltUs2lWS%2B3AnMlGpic48R97qeehpovqBz3zCIljHArdGcL%2F8ZRgjGIvagmPlWOMII%2BsfSwpM%2FCkG8H%2BghlY%2BZ5%2BK62D8Em33L3Vvf6aVFFFv3KJTfalZWrEJwvf1%2BZHSlmI6lILZjwovdKdRohI6KyLTwcUlfIzieLqy4uSRBBAJbhuAIzLZ%2Bqwa77xLMi7j09%2Foedrog%2BAqC5K%2BbrltuTcLh0Y9Ei6nhxhJOFhBWUAQlT7zRhxFAiRSHse2SgDV3cJopyU3b0p0BVoTg0aGOorUbkE%2BVUdGIal32KSKFnMfURgjiyJxXT%2FtI6So7w%2BfwFXOvm57Zxnedzd8kI9RKJiclDRAxzysTkIKtD%2FNjBYTo%2BPUhww%2FCRl0AuI%2B73Kr%2BdBY9skRNsrGloPB56MnE5YPYxLHuqoStwuxraFl36SGBwNVOT7FahyWxOP9VRKMvigFZGl8iuAdqg1AG%2FjlPeYQmL9qbL%2B3kV9ECCZ0ML%2BdEPBOOyc1zTN5M%2B3kQwnz5EYk5sfedOYDUTiB1tLh1JGQBY0FUMldkHO1yUESr9ttQIsMO735cQGOqUBPm3bFip%2FsD57dvH5llQp1gVYxzcmNFZ3LGJ0scY4sxX4MiKit68ss9rurrRNxXQcXoSgHG1N3qW8QKQMw8m%2FaX3v5vvPVjFj42wQMRBU%2FgXHra5PBh9lJe8BNAaxvDw27RwF3a9Zl83ujieJLftHcLWzrRcJLsfeG%2BdU4Y%2Bc2K2uZAFzQDCCv72GHBBtfpqqAqu%2BbGTGzkIUxhVz2Aqms268SAmR&X-Amz-Signature=849436f0d86ddc74c21dae64cae395c83f69e7e0478075f19e3bd553d8f701ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
