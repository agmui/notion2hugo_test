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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBKSKOH6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDJlFTf3J8UnDkgWjGDERJj82huVF8kShTY8TDN3rydkwIgdhhspIfIXfgeC0%2F7NjdhEEaccIlfGaQDjvl4cZ2AsQUq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDONYjNiqGCt6XnUWuCrcA8BRcGFk6rFV4BWSRQwgZ9J3e%2FkddQ951sakToTfpnU2VJh3ztX61yWgv1HiwsKdbO3j6Tuyt3e2uNq5%2FzW89FkxdyBsmKtB%2BgOadL4dmETVsOZg8UIOBbZOCpXNTDAT2%2FvwJyVS%2Fvsj3x%2BlduHc093E0FhUcZfy16mfVPa5HQLZEDdq9IV46WyaGxCQAr38gGMgDgKYZwBuGoc5ELr7YQSWJlJdORDqPD4RbRLBnsxs%2BAZdEg6sBn7SxF8xrYpxe98o%2BAMtfMiwiddw1b669dE%2FDEmdJlVRaT0KnbFsOGPVJtVi56L3dS3ypCEFVZTZ2GeI7igzKtlSko%2F2FaIZOCsCmoYnVT0%2BHSTD12GOw3KIqmzGY5ETEVA9Q6KNqXNX9ymYeB8oUIUwz1FtttFbBE2TzRV9k4Iiyg0tO0X6X8AYvGFFVgRBRqWRAOP8WTQZ2sKM23fXbKdVSs3HxknZQ0pqtcRv%2F6t%2F7RJtzHKfTV0aIZaTHvNqbi0s6V%2FQ12q7iKUpPLDeLWjT%2FUnyDK5V8Yj7aOswvc4jULFBEp4KMLp3Jw6qDrpaHra%2FoyMfjS9Qv0OOUfKFimpRu0N7BJLj%2B2Hv9RJB6i5oHM51VXo1I6iLvpOQebBXdWlurZbnMJKnwsQGOqUBJHs645bokTk%2BbVaF4FnJGnd6vn5hFw65g3AYwW6kh0w3sGYY%2BKNsjMUBFt473YCmgp6zXSD0GUcmj5qdXXNHLd7m4pcP3V3%2BIwT058FtUVHh7odMAncNfimR7hKMbQFG7JaLxXVe6S0bQc1Ud1MsHg73JHJZzqwoa7KrBZgK9AwnpITP9k2n3oz2t%2FBiaD0FVxSxxKqG2IIO26EoEX%2Fh1DWddaYE&X-Amz-Signature=400332e458154c6ec1f54fffee8613d3a2fbb1df67c4bbf169809da718d9c636&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBKSKOH6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDJlFTf3J8UnDkgWjGDERJj82huVF8kShTY8TDN3rydkwIgdhhspIfIXfgeC0%2F7NjdhEEaccIlfGaQDjvl4cZ2AsQUq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDONYjNiqGCt6XnUWuCrcA8BRcGFk6rFV4BWSRQwgZ9J3e%2FkddQ951sakToTfpnU2VJh3ztX61yWgv1HiwsKdbO3j6Tuyt3e2uNq5%2FzW89FkxdyBsmKtB%2BgOadL4dmETVsOZg8UIOBbZOCpXNTDAT2%2FvwJyVS%2Fvsj3x%2BlduHc093E0FhUcZfy16mfVPa5HQLZEDdq9IV46WyaGxCQAr38gGMgDgKYZwBuGoc5ELr7YQSWJlJdORDqPD4RbRLBnsxs%2BAZdEg6sBn7SxF8xrYpxe98o%2BAMtfMiwiddw1b669dE%2FDEmdJlVRaT0KnbFsOGPVJtVi56L3dS3ypCEFVZTZ2GeI7igzKtlSko%2F2FaIZOCsCmoYnVT0%2BHSTD12GOw3KIqmzGY5ETEVA9Q6KNqXNX9ymYeB8oUIUwz1FtttFbBE2TzRV9k4Iiyg0tO0X6X8AYvGFFVgRBRqWRAOP8WTQZ2sKM23fXbKdVSs3HxknZQ0pqtcRv%2F6t%2F7RJtzHKfTV0aIZaTHvNqbi0s6V%2FQ12q7iKUpPLDeLWjT%2FUnyDK5V8Yj7aOswvc4jULFBEp4KMLp3Jw6qDrpaHra%2FoyMfjS9Qv0OOUfKFimpRu0N7BJLj%2B2Hv9RJB6i5oHM51VXo1I6iLvpOQebBXdWlurZbnMJKnwsQGOqUBJHs645bokTk%2BbVaF4FnJGnd6vn5hFw65g3AYwW6kh0w3sGYY%2BKNsjMUBFt473YCmgp6zXSD0GUcmj5qdXXNHLd7m4pcP3V3%2BIwT058FtUVHh7odMAncNfimR7hKMbQFG7JaLxXVe6S0bQc1Ud1MsHg73JHJZzqwoa7KrBZgK9AwnpITP9k2n3oz2t%2FBiaD0FVxSxxKqG2IIO26EoEX%2Fh1DWddaYE&X-Amz-Signature=9255d370090fbd46f264c1b34c2d0cbcfcc8a6acdaea9522a28be06407c97a4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
