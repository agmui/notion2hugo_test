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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K3F6W6J%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDI%2FDFh0aHVgTPfead2tM0Ed211FJda9z5jL1kXMsLfJwIhANslshB%2Bz4C8W0xQ%2FsU7XChCNubvIIkd0QtLyrD4xdjlKv8DCC0QABoMNjM3NDIzMTgzODA1IgwDKpMZZUdcY4FvNt0q3AMCyExZRv%2FwFLGYyWcaSLz5gU7vVcWxbr7PZB%2BthpQXc37V9Hg%2BiUYYrj0bDuTmb0MYFGj1ijtMQ%2FfRqMlfHSrgxtDyQBs1N9XWU4i5OcAYArHerygfaITuOsQADIyrmkVeCu1bZIoyv42SD4nncyqF2ZgcMb%2Bl8sINaBHUTzSuKfSPQ2XrnJEcQpPXOLvGxxFtiCjWwgyHYNGpL5SqfbpfTnaUhhSHZlSU5uCtbRKTSS355zazX0LIbJt5GHnERqLiz0h8VUdh9vkIUo35Hv6CqUSLQ%2BKr2T91LlPrs0Um%2BF3LASISdmhx%2BKZWRb4RwnJwt2vfA9PAF1dNoq%2FEErBGvJz0gWo2rTRmCi0EoZ86G%2BKm8WPaFaMsG5I3SomEH36sknqajTrchQOoSZU3WTTfGTMEQxHCzci36xvw9aktX6Wg%2F1C%2Bu2ZA%2F12H8w7HyJBhjLOMKO1lj4KH9NE5FL5wq60yjiSVV4uHLVwGPaNKam29DPagTUHjZxJzwKC4zU0CjMgr4vc%2Be1KVdK1JtgJ8%2F6jwKu8uvAAB09nR%2BLatP8Aeki7hKRy%2FFPUNpssjDBkPM6DbTrnZ0pXEHgQ3K96QTxfWhBmm6EUOoRyYqjzwagut9ANQhRMxXlZT8DCKourCBjqkAZkMFfjb1kCrYkoHEL507MEw%2B2U4MznWHggnyv6q7VEcVTpPnNHQR6bQs8Xsl1JZ3Lxa061pg8ph7B4nJ3hsJw2D7eeLc403222taMecQpEXfp6lAOr03Eh0VaxrfCL28hx9vMcM0KugZ9mNdVmW4BRvteatkqqNV%2BQZ06FINrRVCtwm4HEOH%2BXfCqCYLDPfiCs4GfRvboX7%2FLaX7GNhzNhWfqsd&X-Amz-Signature=5d1ab50a00a2051780eb0700c0bb3344c5de614b5f99eac215dab057b9fc9975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K3F6W6J%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDI%2FDFh0aHVgTPfead2tM0Ed211FJda9z5jL1kXMsLfJwIhANslshB%2Bz4C8W0xQ%2FsU7XChCNubvIIkd0QtLyrD4xdjlKv8DCC0QABoMNjM3NDIzMTgzODA1IgwDKpMZZUdcY4FvNt0q3AMCyExZRv%2FwFLGYyWcaSLz5gU7vVcWxbr7PZB%2BthpQXc37V9Hg%2BiUYYrj0bDuTmb0MYFGj1ijtMQ%2FfRqMlfHSrgxtDyQBs1N9XWU4i5OcAYArHerygfaITuOsQADIyrmkVeCu1bZIoyv42SD4nncyqF2ZgcMb%2Bl8sINaBHUTzSuKfSPQ2XrnJEcQpPXOLvGxxFtiCjWwgyHYNGpL5SqfbpfTnaUhhSHZlSU5uCtbRKTSS355zazX0LIbJt5GHnERqLiz0h8VUdh9vkIUo35Hv6CqUSLQ%2BKr2T91LlPrs0Um%2BF3LASISdmhx%2BKZWRb4RwnJwt2vfA9PAF1dNoq%2FEErBGvJz0gWo2rTRmCi0EoZ86G%2BKm8WPaFaMsG5I3SomEH36sknqajTrchQOoSZU3WTTfGTMEQxHCzci36xvw9aktX6Wg%2F1C%2Bu2ZA%2F12H8w7HyJBhjLOMKO1lj4KH9NE5FL5wq60yjiSVV4uHLVwGPaNKam29DPagTUHjZxJzwKC4zU0CjMgr4vc%2Be1KVdK1JtgJ8%2F6jwKu8uvAAB09nR%2BLatP8Aeki7hKRy%2FFPUNpssjDBkPM6DbTrnZ0pXEHgQ3K96QTxfWhBmm6EUOoRyYqjzwagut9ANQhRMxXlZT8DCKourCBjqkAZkMFfjb1kCrYkoHEL507MEw%2B2U4MznWHggnyv6q7VEcVTpPnNHQR6bQs8Xsl1JZ3Lxa061pg8ph7B4nJ3hsJw2D7eeLc403222taMecQpEXfp6lAOr03Eh0VaxrfCL28hx9vMcM0KugZ9mNdVmW4BRvteatkqqNV%2BQZ06FINrRVCtwm4HEOH%2BXfCqCYLDPfiCs4GfRvboX7%2FLaX7GNhzNhWfqsd&X-Amz-Signature=0aa7f5dc6e4578a6996b77e404afe05c8fbcb1a6debeb085bc88faacd2375b43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
