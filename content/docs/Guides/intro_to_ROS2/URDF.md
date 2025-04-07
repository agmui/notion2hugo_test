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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7KPA7AR%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2qsEVzpgZmsSGumxfy%2FekRTKDLZr1k9v%2Fxj%2F8iA0zXgIgRGu7tHMbFroorQIPoTlwOe9gwT%2FqnmQPyQA4axjawmcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDerb9by7MnEmq0%2BlircA9M6oA%2BbR11hy3wkD6krXqVE99wK0SnxII%2FAVcF0GKYi527PWTPefZR2zuYYW%2FEygexsUmRilijfoWTcxaTXdZZUc9Rjk%2Fm8TbuY0oGYoQxhuoXAyv4xbkuvQ3w5m%2BZIKWjbiRr6roDNd3pQvdzB8ULP4CAfz2BsaXG%2BlOhSTK4Xx1pOHjCAOVnfN7P%2B9hy%2FQIPLLSUiyaOR4srQmyf5IjzqzINKKYqLGq4cdNAOvbTrNuXvlEW%2B7hnzwlgiLggyhj%2FAlm9LmOI%2FKOLAg6VDf3fGAxJ99O63ssAGOiYKaeVpRHtD%2Bej10H9u0%2BiStLaEYahkH8l0vDtWFH1WKjzNKMcYTyTtVeeR5OYDFUD6J5P1Gz51ZZALeZP1qTueyiIuGNtyfqr%2FE05vvUC8utn6V0H5QwL0MUZuhtR%2F8vBCe7hhF2XMpTP9dXI%2BagPlE0hI0c9K%2FlilrTRbS15cyFDmUra09ZIJSbog545HVFj5396M5UpBJENP8AyO1glYvgxmUZ95uR5AXE4wkYtXkbNg2EMCsA8oyitZhMGw6%2BZx4Wb%2FF2l%2BDCf%2BmItSmLbsjwtAjtLXhWWL8uh73dWwe2J5zDI%2FM%2BhEbzfgCY%2BnCQ45p0WdN3W5RO%2F%2BiHGSP3FoMMyj0L8GOqUBnVqytq67DPGOxu0XCC%2F2Dpzvis5TqVnq3RcidYsWt4SrQ2U4oKcom11%2BKQ2eQHbnF0OvQOJRPiQ8AkJvWjq58A9rhR04QjZy8XzUu8prlG8jHUEiKBzWluaXHvdW6zrQaSR94IUjPvSLrfwEYwp4O%2BwiQQ2f933MIqp6l0NFT3ljTzj6arpbCYhTyb6v3f2leUhBA1Kk7VRZwsPY7tZlME0cqFUo&X-Amz-Signature=d3707197bb79d678283d9c9bb8ffbc9dde56055ab26f0e0862d075042064c935&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7KPA7AR%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2qsEVzpgZmsSGumxfy%2FekRTKDLZr1k9v%2Fxj%2F8iA0zXgIgRGu7tHMbFroorQIPoTlwOe9gwT%2FqnmQPyQA4axjawmcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDerb9by7MnEmq0%2BlircA9M6oA%2BbR11hy3wkD6krXqVE99wK0SnxII%2FAVcF0GKYi527PWTPefZR2zuYYW%2FEygexsUmRilijfoWTcxaTXdZZUc9Rjk%2Fm8TbuY0oGYoQxhuoXAyv4xbkuvQ3w5m%2BZIKWjbiRr6roDNd3pQvdzB8ULP4CAfz2BsaXG%2BlOhSTK4Xx1pOHjCAOVnfN7P%2B9hy%2FQIPLLSUiyaOR4srQmyf5IjzqzINKKYqLGq4cdNAOvbTrNuXvlEW%2B7hnzwlgiLggyhj%2FAlm9LmOI%2FKOLAg6VDf3fGAxJ99O63ssAGOiYKaeVpRHtD%2Bej10H9u0%2BiStLaEYahkH8l0vDtWFH1WKjzNKMcYTyTtVeeR5OYDFUD6J5P1Gz51ZZALeZP1qTueyiIuGNtyfqr%2FE05vvUC8utn6V0H5QwL0MUZuhtR%2F8vBCe7hhF2XMpTP9dXI%2BagPlE0hI0c9K%2FlilrTRbS15cyFDmUra09ZIJSbog545HVFj5396M5UpBJENP8AyO1glYvgxmUZ95uR5AXE4wkYtXkbNg2EMCsA8oyitZhMGw6%2BZx4Wb%2FF2l%2BDCf%2BmItSmLbsjwtAjtLXhWWL8uh73dWwe2J5zDI%2FM%2BhEbzfgCY%2BnCQ45p0WdN3W5RO%2F%2BiHGSP3FoMMyj0L8GOqUBnVqytq67DPGOxu0XCC%2F2Dpzvis5TqVnq3RcidYsWt4SrQ2U4oKcom11%2BKQ2eQHbnF0OvQOJRPiQ8AkJvWjq58A9rhR04QjZy8XzUu8prlG8jHUEiKBzWluaXHvdW6zrQaSR94IUjPvSLrfwEYwp4O%2BwiQQ2f933MIqp6l0NFT3ljTzj6arpbCYhTyb6v3f2leUhBA1Kk7VRZwsPY7tZlME0cqFUo&X-Amz-Signature=13c10826fcb4f23791ddbbcbdcf7d369540d52bc9584f9c68e7226d1d2d6a70a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
