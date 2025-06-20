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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y4RIBNX%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCHyleC%2BvX1LAvQ8O5aECDxWkYYEGjKRiNIFVFvr%2BTtAiATSegzVilBoqSWfvngsid0i3yv5xpzUYnJvjaSyvkkHCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj%2F0JgABEkLoal1NrKtwDxg66itVrbHIjQG6ZxoG5OfanbW4Baa3MyJ9zgfym5rEotDtMhfiv2EubQ6mQczwz%2FMfCkHB%2BTbJ0Cfo3koODIxpI2CIsskqCUcmrXdKE2w2E7uBZK5chzFSlaVza5NDQIB%2ByuMLNtDqSwl05KWBg9B4CoYz1LyrOlPMzwPuODh2yNieqZqdF%2B2Uto8UVex%2Bdp%2Bpr5Vlee%2Br0PBlsvEgVYuEYGPC025omzTQ9gBO3DYmQxErVRfQnKFRgRG9MlAolWOXS8lWWdLn82sfjEirRJnAJn7z0St%2Bx%2B%2Fh2iKwZIHBoHw0xdRvRYIMdjveHtI3PSe7jMKUT6CPgLTiqfi4dMqYcyM1iztiGsZw0jzrBlCM7RLL0TxEU0klx0G7aLkZkUhKEA%2F9vmucBdQPAPYAL10EkjaUSTrwkovcXOL6IkColpB6yuOcPLlggH20ImhD9nyp8eO%2Br9DeiP72aceLDkioO0QNZfHid3D0sK4BSpXyVXsGp8f3lHtbsZ3n8vOAJLh%2FGS1ZuqVTIlRJrwBPYm25w5Fh7X2SWvuWX%2FVQokUGVvPWwwTyasyRLwhScNj2tsBc%2F1g%2FebfQWbaNRdDk3clfZQPwWA4iMTdHKyNIKaeIc4G4cDCGm7XePQgEwsNXSwgY6pgFWZcb%2F0sJ92qC%2FBrzgnKRjV%2BhmRQaJYXWVesPzscGb9dzO%2BltCDCkFvmXDYwu4vOOrKH6GAJ5NlmrfLF75%2B5s2Cu1zBKPThaq%2Fo%2B0nwJGLlSPDxPHRg%2FLcCXQztHT8ldaseq%2FDJqzJ6tCYz7fGXuAHHUVRYulFAUrjfvlvAR6EZqRBd895XUHiDxF6X1AenpREXYT7HMIjEEMujoswRtH6cZfTBh6f&X-Amz-Signature=43c2a9f51a1b1eae79ca148c746d7a11a964f066a6f93d31564273191d900759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y4RIBNX%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCHyleC%2BvX1LAvQ8O5aECDxWkYYEGjKRiNIFVFvr%2BTtAiATSegzVilBoqSWfvngsid0i3yv5xpzUYnJvjaSyvkkHCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj%2F0JgABEkLoal1NrKtwDxg66itVrbHIjQG6ZxoG5OfanbW4Baa3MyJ9zgfym5rEotDtMhfiv2EubQ6mQczwz%2FMfCkHB%2BTbJ0Cfo3koODIxpI2CIsskqCUcmrXdKE2w2E7uBZK5chzFSlaVza5NDQIB%2ByuMLNtDqSwl05KWBg9B4CoYz1LyrOlPMzwPuODh2yNieqZqdF%2B2Uto8UVex%2Bdp%2Bpr5Vlee%2Br0PBlsvEgVYuEYGPC025omzTQ9gBO3DYmQxErVRfQnKFRgRG9MlAolWOXS8lWWdLn82sfjEirRJnAJn7z0St%2Bx%2B%2Fh2iKwZIHBoHw0xdRvRYIMdjveHtI3PSe7jMKUT6CPgLTiqfi4dMqYcyM1iztiGsZw0jzrBlCM7RLL0TxEU0klx0G7aLkZkUhKEA%2F9vmucBdQPAPYAL10EkjaUSTrwkovcXOL6IkColpB6yuOcPLlggH20ImhD9nyp8eO%2Br9DeiP72aceLDkioO0QNZfHid3D0sK4BSpXyVXsGp8f3lHtbsZ3n8vOAJLh%2FGS1ZuqVTIlRJrwBPYm25w5Fh7X2SWvuWX%2FVQokUGVvPWwwTyasyRLwhScNj2tsBc%2F1g%2FebfQWbaNRdDk3clfZQPwWA4iMTdHKyNIKaeIc4G4cDCGm7XePQgEwsNXSwgY6pgFWZcb%2F0sJ92qC%2FBrzgnKRjV%2BhmRQaJYXWVesPzscGb9dzO%2BltCDCkFvmXDYwu4vOOrKH6GAJ5NlmrfLF75%2B5s2Cu1zBKPThaq%2Fo%2B0nwJGLlSPDxPHRg%2FLcCXQztHT8ldaseq%2FDJqzJ6tCYz7fGXuAHHUVRYulFAUrjfvlvAR6EZqRBd895XUHiDxF6X1AenpREXYT7HMIjEEMujoswRtH6cZfTBh6f&X-Amz-Signature=0d89fb23dd8ae26b926ce83412e9082bbecbfeb191c28c4ffba1ea37705ea2d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
