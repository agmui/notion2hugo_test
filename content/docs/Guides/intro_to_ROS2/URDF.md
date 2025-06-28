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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQW64MQF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvJBEASbU33cmmQ6oa%2FCYCaUJT4xUyS90atJixAdlzdwIgQakAXAlWcx%2BcvuxTJbkgPxbegBukoNWeSQNJgFuylSoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwRXJsVWh%2FjLdrUqCrcA8%2FwaqxqcDgM2SWsSVH8AXpDXTMpBqdYBIPoSLXIH0YS67sdjRZ9iyzWDRYVJx8SVA%2FGgRvKGfsgEaWDhaJfVgxXVxb4e17qABlt8JAcV4C5q4C9sGy4QXpgI1yGeTyznWWzBLgRTPDNKYiqaotXKEdtgjgC%2F1XnzDg79bKmGn2aBahDTd08u%2FCGhJ84BXLQDMGhiDrLRef5MUzDeVWW5%2Fm9Vr%2BFrV%2B6VZjVbBuKnpQwNXS3PpLxmK%2F5Eb4eCD7LHh3RFmGAC6bulvG2yOW7ib5pQ4CafqN5J4IdP0tBQTuvrqbXTI2KVOxukK94ahOZGiyfqSXenCHs8OGVwWN6IL0%2FW1YqWKFYyFBRzfdxdG3f9FoUXzzfEQKgxcw6bAbeW7%2FZUnISZQaKR3dQc56N4Nn0ZZiKuQMOqgexrIuUpamQgzYCuzK24Cx%2F3tyWQcXP8AliDlB8PkbMawVCjPB%2FxHwNQ93SyEXghp3k8gjdhsoNqvdKaukvaFuI8Mb5XN%2FsLK1qzX3pbhSe50laGSspLC%2Fc51BIb3bLiZV6SXqkCG7%2BoZlBN%2Bmh5R8KKRohTKHqLq5q7NQgLPHvrEojccxWtd7BTYzSABEIbn7KGLF8zxydV85El0XhjZFTaBMUMM2g%2FsIGOqUB1VdEWECb4JS2gL0I8TFhBRX8KDTrGzKgtwrYUVh0PXkEpYGYdAcNDrp%2BgC2vBfkEgzj%2B9WdrUrEMPzmYJnzhejq7CF5nqs2nt3Ow9z%2BzYKbtYNYY%2FKOZJIS2mR1HspoTgWmBg6Y2GKKJDd6zU6I5II4d8VDuC%2FRmhke6plVbP0k%2BS9WilmwaR2D7Sl7qOQQVw%2Fb3Iy1YFki2EKce4GYoyc51uier&X-Amz-Signature=9155151b39ec0e07db0961213a70a83002a98bf0b906b418df9d4398b28669a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQW64MQF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvJBEASbU33cmmQ6oa%2FCYCaUJT4xUyS90atJixAdlzdwIgQakAXAlWcx%2BcvuxTJbkgPxbegBukoNWeSQNJgFuylSoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwRXJsVWh%2FjLdrUqCrcA8%2FwaqxqcDgM2SWsSVH8AXpDXTMpBqdYBIPoSLXIH0YS67sdjRZ9iyzWDRYVJx8SVA%2FGgRvKGfsgEaWDhaJfVgxXVxb4e17qABlt8JAcV4C5q4C9sGy4QXpgI1yGeTyznWWzBLgRTPDNKYiqaotXKEdtgjgC%2F1XnzDg79bKmGn2aBahDTd08u%2FCGhJ84BXLQDMGhiDrLRef5MUzDeVWW5%2Fm9Vr%2BFrV%2B6VZjVbBuKnpQwNXS3PpLxmK%2F5Eb4eCD7LHh3RFmGAC6bulvG2yOW7ib5pQ4CafqN5J4IdP0tBQTuvrqbXTI2KVOxukK94ahOZGiyfqSXenCHs8OGVwWN6IL0%2FW1YqWKFYyFBRzfdxdG3f9FoUXzzfEQKgxcw6bAbeW7%2FZUnISZQaKR3dQc56N4Nn0ZZiKuQMOqgexrIuUpamQgzYCuzK24Cx%2F3tyWQcXP8AliDlB8PkbMawVCjPB%2FxHwNQ93SyEXghp3k8gjdhsoNqvdKaukvaFuI8Mb5XN%2FsLK1qzX3pbhSe50laGSspLC%2Fc51BIb3bLiZV6SXqkCG7%2BoZlBN%2Bmh5R8KKRohTKHqLq5q7NQgLPHvrEojccxWtd7BTYzSABEIbn7KGLF8zxydV85El0XhjZFTaBMUMM2g%2FsIGOqUB1VdEWECb4JS2gL0I8TFhBRX8KDTrGzKgtwrYUVh0PXkEpYGYdAcNDrp%2BgC2vBfkEgzj%2B9WdrUrEMPzmYJnzhejq7CF5nqs2nt3Ow9z%2BzYKbtYNYY%2FKOZJIS2mR1HspoTgWmBg6Y2GKKJDd6zU6I5II4d8VDuC%2FRmhke6plVbP0k%2BS9WilmwaR2D7Sl7qOQQVw%2Fb3Iy1YFki2EKce4GYoyc51uier&X-Amz-Signature=a1890e6da8ce6f72b8d03355df49fc5ee61783ccb3a885a86afb3ea30d12c618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
