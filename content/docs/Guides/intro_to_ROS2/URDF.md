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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DHWNYMQ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC1nqXq5OuriqJz8HADzS41Eyg3shOMG%2FBVs0It6W%2BBXQIhALfElzAqM2Cq%2B9hUm0n%2BNX1%2BEFu5n0eKWtcZn6f%2BZGRSKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybJajcN5DayB%2Bh6sUq3AMH2dSKy%2BFvPH1%2BmHffi0nY%2F%2FbLqf4sGiU6PX50jaD7Bkyt7O1ERENsxMbSfUIPowuBnkeRZ3bgxiqmkEZp%2FAEABcL142A0AjV%2FKaqmixTLGCqnJWvJS3qF6D4KlmxjuVoIIJdqPO5NubIoOFLFUgjAcv7d%2FDXQKokhXeJiiQYlLa5s1kfRBB6Kn3i3JCoSpYMGuUCwfG5o3fj%2B98hTa2x3KvBFE3%2BSgeRAxawizg%2BciDTWWGsdSitbkWTP%2B2eebQFRxgZmFkGeR4wzOHfpc6ZF214ag4eesyPKrHu7qBSUbUB7JTZWxhd8dO%2F%2F7WmwbD9VqZXBXYbcv5Gy%2FRyF86yo3iTzkwafsaYV4syhXV1Wg30MrZteh4sA3ML9V9%2BjhWDXaYHHUEF3MqaFlj5bKnDo0fGZ8h3iWrnuj7eicCpbMLo2obcDJM0dFpNnEOO57rt43QLqBVDOko2OubPqp%2BXZqOY9lcSyn4BmPfPdez8Uwmrip1jK42Ci9LmRoVbP45H2LiA93C3hy0UCf%2FGa2GHNbULAkNoMi2AfNoErtg7OQgdZVGkb12mE%2FgOte3gKx84CEmg1QAlrGzzoJ92PnmfQrvtwhIdsRlovD9Wk%2F1FGwMtzmCROLodm29%2FSWjDTmPy%2BBjqkAYyUN%2BmVbRJ96BwnjELKWmm8561vkndpoNd9C3OL8TJ5w9Tq9uda2LnSjUTr%2FDpVm%2B92tEPUBwBFXr0EoSO4LkSWpXRNKPdM6gqemi%2B4wd1b0TeTho%2FGJZp9U4%2B8tJ0I%2FzLhk42s6KBUtOGCtRN2mIzyZT8lwhbZXOEDwCvG48vmPA%2B9YnIwy3cOfztuqy3Dlx%2Bei1J4xHLd5YQWjYk52Ys2s1JB&X-Amz-Signature=e79458a32b2ff1badcfa39ba23985fc3ef6202547cd93d806ce2c5913d009243&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DHWNYMQ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC1nqXq5OuriqJz8HADzS41Eyg3shOMG%2FBVs0It6W%2BBXQIhALfElzAqM2Cq%2B9hUm0n%2BNX1%2BEFu5n0eKWtcZn6f%2BZGRSKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybJajcN5DayB%2Bh6sUq3AMH2dSKy%2BFvPH1%2BmHffi0nY%2F%2FbLqf4sGiU6PX50jaD7Bkyt7O1ERENsxMbSfUIPowuBnkeRZ3bgxiqmkEZp%2FAEABcL142A0AjV%2FKaqmixTLGCqnJWvJS3qF6D4KlmxjuVoIIJdqPO5NubIoOFLFUgjAcv7d%2FDXQKokhXeJiiQYlLa5s1kfRBB6Kn3i3JCoSpYMGuUCwfG5o3fj%2B98hTa2x3KvBFE3%2BSgeRAxawizg%2BciDTWWGsdSitbkWTP%2B2eebQFRxgZmFkGeR4wzOHfpc6ZF214ag4eesyPKrHu7qBSUbUB7JTZWxhd8dO%2F%2F7WmwbD9VqZXBXYbcv5Gy%2FRyF86yo3iTzkwafsaYV4syhXV1Wg30MrZteh4sA3ML9V9%2BjhWDXaYHHUEF3MqaFlj5bKnDo0fGZ8h3iWrnuj7eicCpbMLo2obcDJM0dFpNnEOO57rt43QLqBVDOko2OubPqp%2BXZqOY9lcSyn4BmPfPdez8Uwmrip1jK42Ci9LmRoVbP45H2LiA93C3hy0UCf%2FGa2GHNbULAkNoMi2AfNoErtg7OQgdZVGkb12mE%2FgOte3gKx84CEmg1QAlrGzzoJ92PnmfQrvtwhIdsRlovD9Wk%2F1FGwMtzmCROLodm29%2FSWjDTmPy%2BBjqkAYyUN%2BmVbRJ96BwnjELKWmm8561vkndpoNd9C3OL8TJ5w9Tq9uda2LnSjUTr%2FDpVm%2B92tEPUBwBFXr0EoSO4LkSWpXRNKPdM6gqemi%2B4wd1b0TeTho%2FGJZp9U4%2B8tJ0I%2FzLhk42s6KBUtOGCtRN2mIzyZT8lwhbZXOEDwCvG48vmPA%2B9YnIwy3cOfztuqy3Dlx%2Bei1J4xHLd5YQWjYk52Ys2s1JB&X-Amz-Signature=44dfc3ca691acf6e08077f9482051feb9bab55352981daa0fbd9570cb42a1cc3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
