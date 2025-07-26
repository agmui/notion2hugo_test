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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBO744UI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIGinKsDHbDrjDpoXmoDTtLvavRj1aLZlr2DbUgEt9VtHAiEAoCFr3wXgVF%2FeoK0Or34FwHesr9WWFcTJEeZBvJgkoQ8q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFsv4JJyoYoy5TYwbircA4YyJlTPI9%2B4D6dJuCGq1rVNEYg2CzfGOeZn6tvGpR%2FgFnmYNEycLud6f0PiM24uKUxr1l2KwmGLx%2BnsFkS8rqP9xuHBJsKgX0THOoRvDIpxQwDvmMWnLzSSwan7JUEsE1kbhgm0rDK5poDIeB%2F0jwzIFD8yEt%2BoLZGIuufdcfA77cHNuiqy9VFtrAVGFOJT8umQtSFA48SANDGAoAgTEbjxfg7vZ895AbWtpbJ806VMgd6fpa5M%2B0T%2FbXiglr5aApZ%2Bqi5Ic61gVtLVavv5lkCu%2FUe7SkMsFR6zHgINKdp9%2Bc3AzqSoNF2L%2FMSr1N91VH4136a0OwwKyIFjCFt1%2FbYfJVraYIHLm8aYMfnx%2BsVvAgYbMjyuKxvyNNMP3qLusW2BK3blw5MxmrWYBC2S3UV6byCyFwReK4MdymP8whCKBAWWKEPzXyNvyCKJsfO2qMo4G6gL%2Bb9LQRIw%2BrK7tEFQdWipJ5nbq7CGR%2F06pwkt4WO6FFaqZdPMPeWzytGqSyTbYSNspwLtdbPFes4V0GWu7xxxeCDe1wxOtOYfsNPT8TtuH9Lvu2je68q9B50qg7xRhEgokaIaEfxfjcLC6yGCNRvdLwV7Fcc%2FHcq5a1gLEuiqutxuZsQeJfYHMLT6ksQGOqUBqCT7fPM616BhWJoEDYoSvfHB3CTvYWp43SQfSrDEsMACC4sxd1t8EsOdWJZ5c0qiCKuRw8mMr92FaMd7dh2yr8kC7yBpe8E66TOm7W6iqhlkQZO%2FOXs91jACZdAJs%2B7RxZqKAavS0uQ8YdItErLMMLa3Y6b8Gg8jaGtNDfmbrm78%2FukCkxJGDpBr0R8RQSj1u1kICe9qi3XVcWs981%2BzlRho7Hb1&X-Amz-Signature=0734f8a6931032a95d46c2a9a764431198f4758b449f3b8dfcdca281449d52a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBO744UI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIGinKsDHbDrjDpoXmoDTtLvavRj1aLZlr2DbUgEt9VtHAiEAoCFr3wXgVF%2FeoK0Or34FwHesr9WWFcTJEeZBvJgkoQ8q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFsv4JJyoYoy5TYwbircA4YyJlTPI9%2B4D6dJuCGq1rVNEYg2CzfGOeZn6tvGpR%2FgFnmYNEycLud6f0PiM24uKUxr1l2KwmGLx%2BnsFkS8rqP9xuHBJsKgX0THOoRvDIpxQwDvmMWnLzSSwan7JUEsE1kbhgm0rDK5poDIeB%2F0jwzIFD8yEt%2BoLZGIuufdcfA77cHNuiqy9VFtrAVGFOJT8umQtSFA48SANDGAoAgTEbjxfg7vZ895AbWtpbJ806VMgd6fpa5M%2B0T%2FbXiglr5aApZ%2Bqi5Ic61gVtLVavv5lkCu%2FUe7SkMsFR6zHgINKdp9%2Bc3AzqSoNF2L%2FMSr1N91VH4136a0OwwKyIFjCFt1%2FbYfJVraYIHLm8aYMfnx%2BsVvAgYbMjyuKxvyNNMP3qLusW2BK3blw5MxmrWYBC2S3UV6byCyFwReK4MdymP8whCKBAWWKEPzXyNvyCKJsfO2qMo4G6gL%2Bb9LQRIw%2BrK7tEFQdWipJ5nbq7CGR%2F06pwkt4WO6FFaqZdPMPeWzytGqSyTbYSNspwLtdbPFes4V0GWu7xxxeCDe1wxOtOYfsNPT8TtuH9Lvu2je68q9B50qg7xRhEgokaIaEfxfjcLC6yGCNRvdLwV7Fcc%2FHcq5a1gLEuiqutxuZsQeJfYHMLT6ksQGOqUBqCT7fPM616BhWJoEDYoSvfHB3CTvYWp43SQfSrDEsMACC4sxd1t8EsOdWJZ5c0qiCKuRw8mMr92FaMd7dh2yr8kC7yBpe8E66TOm7W6iqhlkQZO%2FOXs91jACZdAJs%2B7RxZqKAavS0uQ8YdItErLMMLa3Y6b8Gg8jaGtNDfmbrm78%2FukCkxJGDpBr0R8RQSj1u1kICe9qi3XVcWs981%2BzlRho7Hb1&X-Amz-Signature=e9c16c3669d3ba143c021646c721daf9fbbd82286404f2ab8072d564e740880a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
