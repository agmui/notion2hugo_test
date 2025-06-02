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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQEDZESJ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T132523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBZ%2BPh7OcodEAwC0HXe3SsxqgPuqy9wKBEAUVlkRI8TEAiEA8%2BA6AW44SrFFpzqd7YcHHi1GcWuyBarhganMHc7xiEAqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnpCdddQTjN%2FnK7uSrcAxlC%2FoiCJGIj663kjGOB3iMPBUCENVUw4qzXNf3tFieUBLi2IdN8oEz8eEr2dgFFquH0XT3Ly26SGJ2dygxv4la%2Fx6ea%2F0kkHsIcLvsif2E6s7KQECvx9McRBDmyac6ULpzBKdNGb5SqcYl786WDftdKgsee0GyIHbPf%2BRd4aP%2BUs5F7P%2F8m%2BmZvcCj57n3Hl2sOfU13f5KdLLXOc%2Fr%2FA6eB9fJoHbd16pYpk%2F8ha85FeaOC8DBo14xg%2BN87%2FoEXcl5xhCFDJ7ie6uX%2F1G5S61kIjUJSHulNuktSODpnVCkgKvtufDGJg5o94aumrlgMsKFC7ixsZs4YN7pfdOTc55rJx2nSx09r%2FWUR2BkFyxkiNHqQ22SYQm8KlWDUxXeCHrQNQd854xgy06U6tnvlhEEmBd46JyBF5Yc9KePnEIytkUEcBKH1UfIG9Rk7F52GN6bgjQsdQo2iIVKuIbDHSL4nfr2bG%2FuVul0jJS%2BjNi5jOB%2FHHdITDHO88rR6%2FO15VfQ0pUDkFRQ86gMw7YVATjrdc6Y0m%2FdGRNXZc0vJGAxrjnnXWSYsgWdA0R3Lb1JFZlCdrwSKjlQTzGV9opXj230Ubab6yFrQ1NOY29esoVlP1fqqTXo0z%2BeAvf1PMKy09sEGOqUBo2OsmYK4KIJKNeK%2BLTwWOPReazIXHB%2F9mS7oKtk4nCuNiZypDSUNGzazS0LwnkItXqbDGh80bi13n27MnbRatcqfu32VV86Mo1XJwA0f7kjsoqCp5u%2FS4Fj9oB6AipCQUskXeeq8oYf65nEtlPzHN9jd%2FFF%2FQMxbp2n6GRBEco7XTXlJBW%2FfLlC%2BMiCt9SG76WKFE7SCharZDEW%2BSMPVhhnxQyVQ&X-Amz-Signature=5f751d734b86385613dca178b8b942d00e5da2fade56bb469338ce3350cc8fa0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQEDZESJ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T132523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBZ%2BPh7OcodEAwC0HXe3SsxqgPuqy9wKBEAUVlkRI8TEAiEA8%2BA6AW44SrFFpzqd7YcHHi1GcWuyBarhganMHc7xiEAqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnpCdddQTjN%2FnK7uSrcAxlC%2FoiCJGIj663kjGOB3iMPBUCENVUw4qzXNf3tFieUBLi2IdN8oEz8eEr2dgFFquH0XT3Ly26SGJ2dygxv4la%2Fx6ea%2F0kkHsIcLvsif2E6s7KQECvx9McRBDmyac6ULpzBKdNGb5SqcYl786WDftdKgsee0GyIHbPf%2BRd4aP%2BUs5F7P%2F8m%2BmZvcCj57n3Hl2sOfU13f5KdLLXOc%2Fr%2FA6eB9fJoHbd16pYpk%2F8ha85FeaOC8DBo14xg%2BN87%2FoEXcl5xhCFDJ7ie6uX%2F1G5S61kIjUJSHulNuktSODpnVCkgKvtufDGJg5o94aumrlgMsKFC7ixsZs4YN7pfdOTc55rJx2nSx09r%2FWUR2BkFyxkiNHqQ22SYQm8KlWDUxXeCHrQNQd854xgy06U6tnvlhEEmBd46JyBF5Yc9KePnEIytkUEcBKH1UfIG9Rk7F52GN6bgjQsdQo2iIVKuIbDHSL4nfr2bG%2FuVul0jJS%2BjNi5jOB%2FHHdITDHO88rR6%2FO15VfQ0pUDkFRQ86gMw7YVATjrdc6Y0m%2FdGRNXZc0vJGAxrjnnXWSYsgWdA0R3Lb1JFZlCdrwSKjlQTzGV9opXj230Ubab6yFrQ1NOY29esoVlP1fqqTXo0z%2BeAvf1PMKy09sEGOqUBo2OsmYK4KIJKNeK%2BLTwWOPReazIXHB%2F9mS7oKtk4nCuNiZypDSUNGzazS0LwnkItXqbDGh80bi13n27MnbRatcqfu32VV86Mo1XJwA0f7kjsoqCp5u%2FS4Fj9oB6AipCQUskXeeq8oYf65nEtlPzHN9jd%2FFF%2FQMxbp2n6GRBEco7XTXlJBW%2FfLlC%2BMiCt9SG76WKFE7SCharZDEW%2BSMPVhhnxQyVQ&X-Amz-Signature=3d4d53223a81bec01c221dceeb8715a32066e264af42194a891e6e36580a6f26&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
