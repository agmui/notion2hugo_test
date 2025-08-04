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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466677VGZNA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDm9TzAd4B1hvrqmoftmh1I%2FsTOFmWS6onWqxSXXR1oEAiBvDWa%2BynfrdG6oEHkqCFyL%2B9DFZX%2B5bsxjXxkXmNvmNir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM0oSZpZeCqQYHqZe1KtwDwjlYCO7u1uu74x6kE%2B8CeACALwY%2FaabeMBjDWu04wRVm3grViTYtlsvmxEMUl6h84bX4fH1uEZQjwTd%2BjG1LiKX%2By8lZsUsDv7f0pwOMvNxAtBv%2FXvHxFc7HnS0vVpU9DDTguq%2FA7XXzYqsQHgAR3v6vLDIZTSEEbwdzwd0V7wlKE%2ByZlLJbY2T0egP6Xws5oJyPwDZ72ot%2BX9qiFAIdtSMphiHsTDgkHFPJRE18FASP3s0OPwXqogC4LWcFrdPJw4oO1V83rTECpAoykWP52EpkGD0iZOFFaLV4JDcrBjTGhEDZh%2BeqzoYNf%2BH0Ew32pEZqttt%2BQNRJO3ArLXOfpMTzRuympZHUkQ5YH%2F536szOmxNL0LP42wR8xOsodfw7IRLjsbbSUlplV1j1UR2paorQ%2FW2mqUo%2FRo3s8OPanOpnnPRk%2BCnoxhew8WK3i9ifzU%2BwHhE%2FmfEbPaqOmRLbWB6YLWcEoMGNvx2BhUdNPaSvCjw7rSmRXaF99rsuW8qBn54t1ZI8j8H2fmEMCY%2B8eqD%2BHO9W%2Btq1OwFgPGde2AWwDyXEmRMT33xLI06evOFppuXlchahsnUGdWxNJCZh7xTnDszYwdEtEaFxEnUZIXse7EF7VywvNNQ5pXswmIHCxAY6pgHG1%2Bcz1ZO6mIruPwHafMSeofcwhK7cI2b8FzHn5EXvTlphMfw0Ud22W0kOLKeVUJTkolFTvNvk61Rvf%2FX%2B7LBsSu6J%2Fn3hdCM49hzpGvOkwXYu5T7zFQ4HTo0uOrAbuOAFVfBzixn%2B46bShx8AkT87Wu%2BMG2mAgaUJCh1bg0qzSHjpXtNwzc22v0f6tpu4CCuMyc22Qs514V5UK3ukVhilNgv3sFEn&X-Amz-Signature=38f2c1f68e0423b84384fb0f39304608a71abe6483087f42fdb24c8f5b793163&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466677VGZNA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDm9TzAd4B1hvrqmoftmh1I%2FsTOFmWS6onWqxSXXR1oEAiBvDWa%2BynfrdG6oEHkqCFyL%2B9DFZX%2B5bsxjXxkXmNvmNir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM0oSZpZeCqQYHqZe1KtwDwjlYCO7u1uu74x6kE%2B8CeACALwY%2FaabeMBjDWu04wRVm3grViTYtlsvmxEMUl6h84bX4fH1uEZQjwTd%2BjG1LiKX%2By8lZsUsDv7f0pwOMvNxAtBv%2FXvHxFc7HnS0vVpU9DDTguq%2FA7XXzYqsQHgAR3v6vLDIZTSEEbwdzwd0V7wlKE%2ByZlLJbY2T0egP6Xws5oJyPwDZ72ot%2BX9qiFAIdtSMphiHsTDgkHFPJRE18FASP3s0OPwXqogC4LWcFrdPJw4oO1V83rTECpAoykWP52EpkGD0iZOFFaLV4JDcrBjTGhEDZh%2BeqzoYNf%2BH0Ew32pEZqttt%2BQNRJO3ArLXOfpMTzRuympZHUkQ5YH%2F536szOmxNL0LP42wR8xOsodfw7IRLjsbbSUlplV1j1UR2paorQ%2FW2mqUo%2FRo3s8OPanOpnnPRk%2BCnoxhew8WK3i9ifzU%2BwHhE%2FmfEbPaqOmRLbWB6YLWcEoMGNvx2BhUdNPaSvCjw7rSmRXaF99rsuW8qBn54t1ZI8j8H2fmEMCY%2B8eqD%2BHO9W%2Btq1OwFgPGde2AWwDyXEmRMT33xLI06evOFppuXlchahsnUGdWxNJCZh7xTnDszYwdEtEaFxEnUZIXse7EF7VywvNNQ5pXswmIHCxAY6pgHG1%2Bcz1ZO6mIruPwHafMSeofcwhK7cI2b8FzHn5EXvTlphMfw0Ud22W0kOLKeVUJTkolFTvNvk61Rvf%2FX%2B7LBsSu6J%2Fn3hdCM49hzpGvOkwXYu5T7zFQ4HTo0uOrAbuOAFVfBzixn%2B46bShx8AkT87Wu%2BMG2mAgaUJCh1bg0qzSHjpXtNwzc22v0f6tpu4CCuMyc22Qs514V5UK3ukVhilNgv3sFEn&X-Amz-Signature=7a7b991a7f3c2fbf0ae26244a314a186b9299d5e395a99910706f14b995e133c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
