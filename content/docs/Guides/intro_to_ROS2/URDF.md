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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBXBM64B%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDEvF8wP0RgaUAyvXDNV3nZfOYg47NBjzkYhZcosZDDjwIgJgsQ5u%2F3UAbNlrp96MES7V5sftu%2BeqlkppoMFaoDB%2FQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJRMq1LIPkWPTWoO1yrcA%2BkvceRjOwUyuYT3W5TbIsqzVYCGCIV8KAfAeH%2F8yjjjzmJ07UvaF4maAq%2FABgA0TXZiVsjP9lJJ2Wso5a6bYqS5cKkQeRpt5KQ%2FA5LtUNOaUsLA%2Ft3c9tAWfFHtowm2g6V%2B2MbXeZZ8tm21U1UKyf8x%2FwDqk4SInvF9Qb5BSVgwiRVfAh5rrllL6T4pjcpy3Qh4VRxRZssaq5c6ID4pZeikAO3wbXy3xj%2FwWrysD2TFFpWkt1F1SVWb7Mky8FNl5eRSmKMcepf5V6PJZRl83Rm%2BYuMGb4ssnh8D6INWmZHL0ZwxQ458ieljVchjf%2FMfzN7EcFG68UmfDek4jeXyLntMvtp2L1dxhGBp4w6enyiCbEwRJ2HgLcQZMQv9LPlbnvfAeu5Evdq%2FMwPBDfnPmojOAPiWNZWkNKlVENx6kdmu61LqlaxkZoCXwd01lZAvJCcFwQP81KOOHGVSTHsG8R2BYQMctiwtaqsQPDR30ieC%2F5%2FivFHNb9DQMLcWehABfqcgcTjIYuAHkTFKsJDaOE6xggSa9DPJHgM%2F2l7sHlO2NQJpKc55XdzmB9dXzBlpaBVd9jfnZT7loVRKb4%2BNhmz%2FJbuYSm7V%2BmBX3wiuET2tQ%2FdzAPHWAEJZAO6uMPqvwcIGOqUBypubecsACNlofiMKlt%2Fhi1hTmA%2FUjkN3FJpy5M8LKG29dh2DOCofRnJ8sK8wGFQCPmMVb33Vyy8cc9E88aXYSn%2Bs8YqBFzSTU5Agz86qochNQZ89pucjvo34rjTbYrC0%2Fjen5qm9zTQgB4YYSrUnqjgkwDR68gff77996X8G4LVUz00hexXmTdvhoWjr9ofN6Q4HTrBbO6OT0lGbvh50W4tZkg40&X-Amz-Signature=999f49dc3d022befb885b2512c6dc3471535e9986f8d4d606a66096e10b82a6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBXBM64B%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDEvF8wP0RgaUAyvXDNV3nZfOYg47NBjzkYhZcosZDDjwIgJgsQ5u%2F3UAbNlrp96MES7V5sftu%2BeqlkppoMFaoDB%2FQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJRMq1LIPkWPTWoO1yrcA%2BkvceRjOwUyuYT3W5TbIsqzVYCGCIV8KAfAeH%2F8yjjjzmJ07UvaF4maAq%2FABgA0TXZiVsjP9lJJ2Wso5a6bYqS5cKkQeRpt5KQ%2FA5LtUNOaUsLA%2Ft3c9tAWfFHtowm2g6V%2B2MbXeZZ8tm21U1UKyf8x%2FwDqk4SInvF9Qb5BSVgwiRVfAh5rrllL6T4pjcpy3Qh4VRxRZssaq5c6ID4pZeikAO3wbXy3xj%2FwWrysD2TFFpWkt1F1SVWb7Mky8FNl5eRSmKMcepf5V6PJZRl83Rm%2BYuMGb4ssnh8D6INWmZHL0ZwxQ458ieljVchjf%2FMfzN7EcFG68UmfDek4jeXyLntMvtp2L1dxhGBp4w6enyiCbEwRJ2HgLcQZMQv9LPlbnvfAeu5Evdq%2FMwPBDfnPmojOAPiWNZWkNKlVENx6kdmu61LqlaxkZoCXwd01lZAvJCcFwQP81KOOHGVSTHsG8R2BYQMctiwtaqsQPDR30ieC%2F5%2FivFHNb9DQMLcWehABfqcgcTjIYuAHkTFKsJDaOE6xggSa9DPJHgM%2F2l7sHlO2NQJpKc55XdzmB9dXzBlpaBVd9jfnZT7loVRKb4%2BNhmz%2FJbuYSm7V%2BmBX3wiuET2tQ%2FdzAPHWAEJZAO6uMPqvwcIGOqUBypubecsACNlofiMKlt%2Fhi1hTmA%2FUjkN3FJpy5M8LKG29dh2DOCofRnJ8sK8wGFQCPmMVb33Vyy8cc9E88aXYSn%2Bs8YqBFzSTU5Agz86qochNQZ89pucjvo34rjTbYrC0%2Fjen5qm9zTQgB4YYSrUnqjgkwDR68gff77996X8G4LVUz00hexXmTdvhoWjr9ofN6Q4HTrBbO6OT0lGbvh50W4tZkg40&X-Amz-Signature=b290bef60d61a059ff697d93cbfc0c4d1ccd8dd68da50bf5facaa87ff62a23b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
