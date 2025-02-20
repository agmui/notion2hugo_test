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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP3EDQEC%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExOOz8%2FtyXofTu9sbKieJNv2s1TOsRrdu8IfG847pMgAiEArpj6YbmY%2BB6pCf4lCGakWInFg4Uf2d%2BJCSuuZH5OfqQqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBph7hbPi3IiSsXg0ircA2g2AYt3blTiZAHafFfNJT9gET6GEuuxjXPO2ucrFDxpJv4WpdnytVCYUrDui4xoNQWCBVWSjn%2FPRwxrfFj6Iv%2BM3dOyroQReTSuj%2FSVLYo84nTwk%2FHktHCchFwMNV4KhCfIWCc58slFncFlB6mL9bMY%2BN1Tf9AsyY36LVkiEH5V4vHlap1PllBsCSC3h6Wztu6TRx%2BgiRjGULV0DUUCTns90VHaQkfG5Fpcqp8BqxJpyZcSyYWryXaBPaz0GPYmCAHLfJ%2FVZtKOxuDf54dGd4v1ZeYyKBZ3dFjo2xOx8Y3KAy3lthTyGV3p80gD8yJn3Ya%2Flx1b2Nw9Jj8lCTAwC73W8r5y26swISizVBQzNETZ%2BMEiTg9Z%2B8PZLbGZjN3QePptnkKCXN0cuMfAD8cCvtPk5Q9F6DsUqSXzDZ1IXwItp87KC04lhgW7VfqHFRIqP%2F3hOFHuDVKWDT6YwUo%2B%2B14CiGGXyYvVdqq9AQu4ggaDvipi%2BDMJi6SHZ4P9k8oDx6F%2B45nwuWSnTSz9ZwJ5pRWUQTzHrUOyUQKpY7jGRx6BQEh7WEutJSH%2BBV0oezN3jk3Sk1gKGj7yoID7b%2BXgt4hMZ62qyWvQYgK%2F9rCblh%2BRSAEoopW6MMKwllatMLbn2b0GOqUB85eJkmQGFq7Ir5N8BWu%2BoY9qDHW%2BSLqeW4yrxk4QqMidVORVeJmNVE%2BHPFvLlfSP7uMfyfPiKDZ0nimXXMo9LrEQcZOzA9uZvWkqJToUfhIIO8nO6If%2BNAI55Q0ILaSGI%2BUIYSsqfbtr97%2Fxy9PX4n07SKsmcfwlGN0LKZf4Hycdl0asJxYErcNJyJkSa961EwIQYQObrIFi%2BMOOSKCFjX8UC0PY&X-Amz-Signature=b9f05df755834127880331808744b51e2f7a381e5a33838968f6b0f08742673b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP3EDQEC%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExOOz8%2FtyXofTu9sbKieJNv2s1TOsRrdu8IfG847pMgAiEArpj6YbmY%2BB6pCf4lCGakWInFg4Uf2d%2BJCSuuZH5OfqQqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBph7hbPi3IiSsXg0ircA2g2AYt3blTiZAHafFfNJT9gET6GEuuxjXPO2ucrFDxpJv4WpdnytVCYUrDui4xoNQWCBVWSjn%2FPRwxrfFj6Iv%2BM3dOyroQReTSuj%2FSVLYo84nTwk%2FHktHCchFwMNV4KhCfIWCc58slFncFlB6mL9bMY%2BN1Tf9AsyY36LVkiEH5V4vHlap1PllBsCSC3h6Wztu6TRx%2BgiRjGULV0DUUCTns90VHaQkfG5Fpcqp8BqxJpyZcSyYWryXaBPaz0GPYmCAHLfJ%2FVZtKOxuDf54dGd4v1ZeYyKBZ3dFjo2xOx8Y3KAy3lthTyGV3p80gD8yJn3Ya%2Flx1b2Nw9Jj8lCTAwC73W8r5y26swISizVBQzNETZ%2BMEiTg9Z%2B8PZLbGZjN3QePptnkKCXN0cuMfAD8cCvtPk5Q9F6DsUqSXzDZ1IXwItp87KC04lhgW7VfqHFRIqP%2F3hOFHuDVKWDT6YwUo%2B%2B14CiGGXyYvVdqq9AQu4ggaDvipi%2BDMJi6SHZ4P9k8oDx6F%2B45nwuWSnTSz9ZwJ5pRWUQTzHrUOyUQKpY7jGRx6BQEh7WEutJSH%2BBV0oezN3jk3Sk1gKGj7yoID7b%2BXgt4hMZ62qyWvQYgK%2F9rCblh%2BRSAEoopW6MMKwllatMLbn2b0GOqUB85eJkmQGFq7Ir5N8BWu%2BoY9qDHW%2BSLqeW4yrxk4QqMidVORVeJmNVE%2BHPFvLlfSP7uMfyfPiKDZ0nimXXMo9LrEQcZOzA9uZvWkqJToUfhIIO8nO6If%2BNAI55Q0ILaSGI%2BUIYSsqfbtr97%2Fxy9PX4n07SKsmcfwlGN0LKZf4Hycdl0asJxYErcNJyJkSa961EwIQYQObrIFi%2BMOOSKCFjX8UC0PY&X-Amz-Signature=bcfc538578cfb4d8084798b5fecde2575093620cacf3db07fc9e5fe0d279ca74&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
