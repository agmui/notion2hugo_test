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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAZGOAVR%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T081554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjguMAl%2FKvxKDBQdjfzEwLQTPnyKDKGgaQ7RWFxqXMvwIgXMZRxrtcX0SwujY2il1Yn6k8bGZPkKvaJNOPRkMsLR8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9V8pzvEPNMFkyhfyrcA%2BU1QQ8P4WzYWLbzQJEv5uiK9qy5Pe1pHTp5lajBcibXA5IrwLkBIhfpKbe9EP%2BqCM%2BAnF4pbXGYSlFvu2zZne9rvvJ0EMZyt1yI0dIJaMMK8xZ8XpZwW4PJ3qL%2BZQxTAC4zFhWBWq4xbHoJuIW3Yr0pg7u49%2FIphQeQ5yEKMOJpNLT9G2jQrVpC%2Fmev6HmFdiz1HbMNLkiOM2NWLB7PmvVQjZeqtCxF7UybV3Fr6slMN5wnN37uVyRisgJcxsi3Fzv6w7yYxrVPGU1AoaPKVfk15vx3GHaK8290NbSlKuC7oHwEDwqF5%2Bj3KyFB6s%2BVphwchJYDm3oV4ibUAtaSKuOTYntRVY723grTSVNXLHlavEgDnYDtIOlTIF7hVHHg5NgvGdMOX21ZBxQrLtE%2F1VTEXGM1WW9o%2B6Fwo06buY5lsFU9f%2BBFYUziZnc%2BiU8EzuU%2FVF17TxiNnZL3lwQHXsxmgsgIM%2Bu6yF7V%2FKqd4aho0uvA1MJv1ImhiK4oKUHcq87WINKabmofNTfw7EAPHQjPNfFbRw5ZQ1JudFPKHoUWlvVuYOwptsLelTCXoU6EyLRwUYSIaOvoO7GmmMMMfVulZqKAQWmxYDdJihcms%2BaGCpawszHgjti%2FlrGQMOiS98MGOqUBgG8RHzCAfVz7XLz%2F0%2Bx%2FD5sQIlgS7IdKpyoweW9N6OQ3hqU75FP%2B0ZIdWTwYUHx%2BPz0%2F9bmMPdaYurpq9CrajSMmFTfevtRAm8Ws7gJj7Afu4YbIFk%2Fcb0BEe4ctLZL9TTRhb8vb3xZddtC74qHo2Rmcf2g2FvYusm3Xn5TrtMliP27De7kVg%2F8mxrLXPGQ48WHahXGtKKXxDqJvtLGQqcreiZIZ&X-Amz-Signature=eb7f488a839c1cab478f23e5ee68d4bfe187b4856bfae91c6e309342b3d9a8f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAZGOAVR%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T081554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjguMAl%2FKvxKDBQdjfzEwLQTPnyKDKGgaQ7RWFxqXMvwIgXMZRxrtcX0SwujY2il1Yn6k8bGZPkKvaJNOPRkMsLR8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9V8pzvEPNMFkyhfyrcA%2BU1QQ8P4WzYWLbzQJEv5uiK9qy5Pe1pHTp5lajBcibXA5IrwLkBIhfpKbe9EP%2BqCM%2BAnF4pbXGYSlFvu2zZne9rvvJ0EMZyt1yI0dIJaMMK8xZ8XpZwW4PJ3qL%2BZQxTAC4zFhWBWq4xbHoJuIW3Yr0pg7u49%2FIphQeQ5yEKMOJpNLT9G2jQrVpC%2Fmev6HmFdiz1HbMNLkiOM2NWLB7PmvVQjZeqtCxF7UybV3Fr6slMN5wnN37uVyRisgJcxsi3Fzv6w7yYxrVPGU1AoaPKVfk15vx3GHaK8290NbSlKuC7oHwEDwqF5%2Bj3KyFB6s%2BVphwchJYDm3oV4ibUAtaSKuOTYntRVY723grTSVNXLHlavEgDnYDtIOlTIF7hVHHg5NgvGdMOX21ZBxQrLtE%2F1VTEXGM1WW9o%2B6Fwo06buY5lsFU9f%2BBFYUziZnc%2BiU8EzuU%2FVF17TxiNnZL3lwQHXsxmgsgIM%2Bu6yF7V%2FKqd4aho0uvA1MJv1ImhiK4oKUHcq87WINKabmofNTfw7EAPHQjPNfFbRw5ZQ1JudFPKHoUWlvVuYOwptsLelTCXoU6EyLRwUYSIaOvoO7GmmMMMfVulZqKAQWmxYDdJihcms%2BaGCpawszHgjti%2FlrGQMOiS98MGOqUBgG8RHzCAfVz7XLz%2F0%2Bx%2FD5sQIlgS7IdKpyoweW9N6OQ3hqU75FP%2B0ZIdWTwYUHx%2BPz0%2F9bmMPdaYurpq9CrajSMmFTfevtRAm8Ws7gJj7Afu4YbIFk%2Fcb0BEe4ctLZL9TTRhb8vb3xZddtC74qHo2Rmcf2g2FvYusm3Xn5TrtMliP27De7kVg%2F8mxrLXPGQ48WHahXGtKKXxDqJvtLGQqcreiZIZ&X-Amz-Signature=196ece3547fe1801927849707cd7eccc78e3c2475c493fd3ad2e4a6d75efa179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
