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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXEF7CNR%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCCb3To5Hvv9xS7dT62S%2FpDilNaQLzN4dNmqvZysx5jdQIhAOUAJ5WTYuyLYTVITIPMmjK0NPPkjBbUCSdxU007zzlNKv8DCDIQABoMNjM3NDIzMTgzODA1IgwMrWR5wsUwyDnI1gEq3APTiSa14HDCBN0X62gKSbkwWAGoR3T16SQnmf4dTL9c3jNFYAj%2BpcOI7%2BhRuvGPkz7jW5iXjpV257D%2FGSIJTJ%2FQ0vW4VcWuk8Y7T1RmgzvuxxfyzZVItpjzM7OAR9SmEm39BTE49yYVqP3hqUAhHE1zUixKT%2FsCgWKnCbTSFtl0GgzIEul3HaiY5TBU5Tspahyrt23HB%2BJYPptfMzrSjJHDWPGllS89DaJfvtcDEoPeC26ktu0YdKJeNBrMNEp39dRQaupFhR51dJ9I15SbBmfB4d0RVTqDeBbEzYn6AnZ%2FLeFAOKVrNOlJymLAOyIXxwSnyHHvTggUu8htuH65KQQEwOGdG%2FTUfyq4cetkLiU%2FgCZKEQ52wXokmfdHSOOyv7H1jGQylw0lPXaXCL6Jr6PDuCiIO9zphWujsTud9TLNCQ4LY%2Frt5HdIDFOl67Xvj1iZb4VZk%2BrvG4Rm%2B048iIphc9lsT%2FuY3hRRz4%2BoOoTB7fsMVcedbCt%2BDt3SHsCbPkg%2BYFx4wulYXrvpKje9UT%2B3wHkZVvkLbZQvpcNAZLSDo4dgUkMBhG%2BiF3iomponmfoJVASG%2B0jtfzLCiswppizOosixO0Y3%2FwFgW94s6zLtqM9JtFGp5rzNEpWZMjDE2YPNBjqkAXVq8KmaCMcS2A5mwmSCXrLU1cE4RJYpNzdM8lHFoj70fEnfA%2B%2FKP%2Bwe7STLjKSb%2B0XdDuVBfs4y7VHa5XkR8uwC7%2FyEJyW%2FlMg8lu25A8TDDskBI13Oaa7LqPn7Z0u%2BrkRAiFZHuNZPH5tWzU6QcFuLcK8o%2F1fEgXc1V6YJPUIC3tuyBKDupnzZ2bMNKVX5fWL%2FPEuxswwI4T%2FE94Csf%2F2oB7AE&X-Amz-Signature=66ed0b0d7f3ce5817834d1fc4c16399dfe17df44902af05a15a90d50c3dc8d81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXEF7CNR%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCCb3To5Hvv9xS7dT62S%2FpDilNaQLzN4dNmqvZysx5jdQIhAOUAJ5WTYuyLYTVITIPMmjK0NPPkjBbUCSdxU007zzlNKv8DCDIQABoMNjM3NDIzMTgzODA1IgwMrWR5wsUwyDnI1gEq3APTiSa14HDCBN0X62gKSbkwWAGoR3T16SQnmf4dTL9c3jNFYAj%2BpcOI7%2BhRuvGPkz7jW5iXjpV257D%2FGSIJTJ%2FQ0vW4VcWuk8Y7T1RmgzvuxxfyzZVItpjzM7OAR9SmEm39BTE49yYVqP3hqUAhHE1zUixKT%2FsCgWKnCbTSFtl0GgzIEul3HaiY5TBU5Tspahyrt23HB%2BJYPptfMzrSjJHDWPGllS89DaJfvtcDEoPeC26ktu0YdKJeNBrMNEp39dRQaupFhR51dJ9I15SbBmfB4d0RVTqDeBbEzYn6AnZ%2FLeFAOKVrNOlJymLAOyIXxwSnyHHvTggUu8htuH65KQQEwOGdG%2FTUfyq4cetkLiU%2FgCZKEQ52wXokmfdHSOOyv7H1jGQylw0lPXaXCL6Jr6PDuCiIO9zphWujsTud9TLNCQ4LY%2Frt5HdIDFOl67Xvj1iZb4VZk%2BrvG4Rm%2B048iIphc9lsT%2FuY3hRRz4%2BoOoTB7fsMVcedbCt%2BDt3SHsCbPkg%2BYFx4wulYXrvpKje9UT%2B3wHkZVvkLbZQvpcNAZLSDo4dgUkMBhG%2BiF3iomponmfoJVASG%2B0jtfzLCiswppizOosixO0Y3%2FwFgW94s6zLtqM9JtFGp5rzNEpWZMjDE2YPNBjqkAXVq8KmaCMcS2A5mwmSCXrLU1cE4RJYpNzdM8lHFoj70fEnfA%2B%2FKP%2Bwe7STLjKSb%2B0XdDuVBfs4y7VHa5XkR8uwC7%2FyEJyW%2FlMg8lu25A8TDDskBI13Oaa7LqPn7Z0u%2BrkRAiFZHuNZPH5tWzU6QcFuLcK8o%2F1fEgXc1V6YJPUIC3tuyBKDupnzZ2bMNKVX5fWL%2FPEuxswwI4T%2FE94Csf%2F2oB7AE&X-Amz-Signature=b427c47268a8b442fa99f8db54a55983cd745a775371fca2007a9613c9fa335f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
