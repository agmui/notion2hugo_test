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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XBSFDOH%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPX6kDm2jJowlCvb%2BRvJDgx6V2AIiKk%2BDcN3o3rILd7AiEA1irmw%2FGynZUbJGvj17IKsGFWP%2FWgWgXJjf27ztmgffEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDGv9wMWrLZ65rwlkZSrcA8HUg7kN0GUBKhdj2WmXX5gPqDTlCByODMLefX2ZdWIyPbpsXi5ZcjqS%2BPF883eZQBkV8Ta8JQbTVSQQvWaiWCEwNOgJj25iRams24ng%2BB6yu%2FunA2KhwpJk0WS3nZOdqA0VMsQwaIR6JmjjIxXftji5PLwTC4PMqN7xtaQFNnnU%2B3G%2BBN75YqLNqFFlWLa3QG3IW7DnIS0cUH5fH8%2FxT9w8scOJRAHm7Qq%2F0SXddeeJBNau62iWf8Oz1s9PBXvdvMTBNAnff4gG0di34hnhGKr6Go4iIUwudKneqzytsL1kCTD%2FQKmd1UgD69vzIPsQrRs1QAJzRA1Q%2B86N5rYScSQFYVi18jHY6U4JnO94yK0ARxwxjNHHxT81Tl2kIElHFTQ7s3Gmwc1bEcB3uiV2sAdozZ3fWAjqYkEY%2BNJ6dRdIVEa%2BEwym9eV0ZRaHGUQ1w4EC9gW1P1y5b6wyiWqkvGhT%2FZqAeomwt6PwltTFuutdktb%2FXX6MBPSnxBWJjkK2O1cDmCPrIj031Ax1EEESol%2FgZhBhZVuB1IcwVYxq%2FPTzn1xHQiQKrvb5vFEn3euF0J9AwP%2FtaGMYgqG6riXIjqYYJtNKndSYU%2BF3I5O28KDKKU8iX3awjVfCvHTdMOmkzcMGOqUBe9EJd22rjFOb5HdSwKPEVW2mmxVsZfT8pSK%2BYASGceM7FcU7Mg930ccwWQriyGUdQS0T2kDuWJMaiQ6jJytLBrUbC1qVOAuM%2BK3wD7q8ILPrpvZQMJVcMOzDbLJvl07QhHDjhPT3UdN0ul%2BCvh5d7G9H8cra5mKLyt1IcL6rtKeckV%2FRTKYELDWowMyYD3yDFIMVH%2BK1HEkYBmSlc4TI7ZiQVZ20&X-Amz-Signature=d856674b284482a3e1961d80a583559ad4e2d61ec45b0d30e2bacb154d9ea69d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XBSFDOH%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPX6kDm2jJowlCvb%2BRvJDgx6V2AIiKk%2BDcN3o3rILd7AiEA1irmw%2FGynZUbJGvj17IKsGFWP%2FWgWgXJjf27ztmgffEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDGv9wMWrLZ65rwlkZSrcA8HUg7kN0GUBKhdj2WmXX5gPqDTlCByODMLefX2ZdWIyPbpsXi5ZcjqS%2BPF883eZQBkV8Ta8JQbTVSQQvWaiWCEwNOgJj25iRams24ng%2BB6yu%2FunA2KhwpJk0WS3nZOdqA0VMsQwaIR6JmjjIxXftji5PLwTC4PMqN7xtaQFNnnU%2B3G%2BBN75YqLNqFFlWLa3QG3IW7DnIS0cUH5fH8%2FxT9w8scOJRAHm7Qq%2F0SXddeeJBNau62iWf8Oz1s9PBXvdvMTBNAnff4gG0di34hnhGKr6Go4iIUwudKneqzytsL1kCTD%2FQKmd1UgD69vzIPsQrRs1QAJzRA1Q%2B86N5rYScSQFYVi18jHY6U4JnO94yK0ARxwxjNHHxT81Tl2kIElHFTQ7s3Gmwc1bEcB3uiV2sAdozZ3fWAjqYkEY%2BNJ6dRdIVEa%2BEwym9eV0ZRaHGUQ1w4EC9gW1P1y5b6wyiWqkvGhT%2FZqAeomwt6PwltTFuutdktb%2FXX6MBPSnxBWJjkK2O1cDmCPrIj031Ax1EEESol%2FgZhBhZVuB1IcwVYxq%2FPTzn1xHQiQKrvb5vFEn3euF0J9AwP%2FtaGMYgqG6riXIjqYYJtNKndSYU%2BF3I5O28KDKKU8iX3awjVfCvHTdMOmkzcMGOqUBe9EJd22rjFOb5HdSwKPEVW2mmxVsZfT8pSK%2BYASGceM7FcU7Mg930ccwWQriyGUdQS0T2kDuWJMaiQ6jJytLBrUbC1qVOAuM%2BK3wD7q8ILPrpvZQMJVcMOzDbLJvl07QhHDjhPT3UdN0ul%2BCvh5d7G9H8cra5mKLyt1IcL6rtKeckV%2FRTKYELDWowMyYD3yDFIMVH%2BK1HEkYBmSlc4TI7ZiQVZ20&X-Amz-Signature=77a087f81f5efeba6c567fac927977c368bd4e5c081216d91b98956da54ddb39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
