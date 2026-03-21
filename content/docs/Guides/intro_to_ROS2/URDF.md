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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VIQKRMR%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCICLoOwiqwPNfVhr%2BZuOE8wzMmZu6sL09c1kKd2owkvUBAiAJiYezIGg3QJ5GYVVF9fMy67S2Werk9DkEOK5psOzIPSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMTOxvmO%2Fh8KbyVcqrKtwDk64ZLqInnK%2BOe8dAEzc6ZF0Lrd7Hqy4hZCMAKrcPguVs%2B9NXnX8GKZangLD3B8sCBS5zhnTYBkQcGx03Sj088lUa50C7sWiioNRu78foW98C2NV1PHQGK6erQ52CtoZx85UBRPqQ5%2FDp%2BgJcP9ecstRmHVvgJvDfcu3e6qFr2wqt2UOffGmbYDwmvtntpJxg5ThEogPL%2BQwNuq5fnyuVWMH2rg6VvcGywCHxKEiRAOQkZ4EHSRTUmhk1gt5drH4WLT%2FQGbXq64W3HMHpBE%2FhdfHM%2FxBi0AOmmNECDCNW7sO15%2FkZsnDe9o461CyouDU1MrwAbZtiapOHmxQ7%2BYZD8JXtDlJLBh%2BfMcSxQ4%2FSNM9ocVsUNoyw%2BRbpCPP%2BBqTDfVKV5Dw1zARurUKbAWBPJVzz0MB0teLEVRDfah2XWiw%2Fa6e9oxZYRtuO4YhzlgJzWEYoKaypeDwATdXoXtZXP%2BXXlW6QUhaLbJobRRnXf6isVhB085uo5s38HZQ3DAmcU4I3ejHjNldZnR%2Bn3vgvvCEKVJYUNHlJ5d6GVAENnGHdz0PGyiEIyhY83lJLGsvWpbwuRYislNVEuOqZVoKaEEw5IAC1v9q8nluUaRLp1oo9aOfNlIa8dEwV4jEwm%2B33zQY6pgHtmAw60KScaJzB041X2jYGW6C4ilbhlhsQE5TWKW1Np%2BsO64RkaAyQA6jTNQlsQTrEJpjOdlEnVY8%2B0jnuH9uyqZ5%2BuPrA3wwSbNNWRxA%2Fpg9ntPr%2FNhK9UifCzPe8iwLm0wu9H%2FwuKqnyE6LCUfxwwnQK7YGn8FzMiNvfhVyEpjvMHQKYH%2F1LPUfsCn%2FSvRQLezAhhPghGS7bwnAvcSg0vl0QwpMx&X-Amz-Signature=e4636f94b2f54af5c76df6c99420f123dd764a0e3dc75042a8d39d02c003a8eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VIQKRMR%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCICLoOwiqwPNfVhr%2BZuOE8wzMmZu6sL09c1kKd2owkvUBAiAJiYezIGg3QJ5GYVVF9fMy67S2Werk9DkEOK5psOzIPSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMTOxvmO%2Fh8KbyVcqrKtwDk64ZLqInnK%2BOe8dAEzc6ZF0Lrd7Hqy4hZCMAKrcPguVs%2B9NXnX8GKZangLD3B8sCBS5zhnTYBkQcGx03Sj088lUa50C7sWiioNRu78foW98C2NV1PHQGK6erQ52CtoZx85UBRPqQ5%2FDp%2BgJcP9ecstRmHVvgJvDfcu3e6qFr2wqt2UOffGmbYDwmvtntpJxg5ThEogPL%2BQwNuq5fnyuVWMH2rg6VvcGywCHxKEiRAOQkZ4EHSRTUmhk1gt5drH4WLT%2FQGbXq64W3HMHpBE%2FhdfHM%2FxBi0AOmmNECDCNW7sO15%2FkZsnDe9o461CyouDU1MrwAbZtiapOHmxQ7%2BYZD8JXtDlJLBh%2BfMcSxQ4%2FSNM9ocVsUNoyw%2BRbpCPP%2BBqTDfVKV5Dw1zARurUKbAWBPJVzz0MB0teLEVRDfah2XWiw%2Fa6e9oxZYRtuO4YhzlgJzWEYoKaypeDwATdXoXtZXP%2BXXlW6QUhaLbJobRRnXf6isVhB085uo5s38HZQ3DAmcU4I3ejHjNldZnR%2Bn3vgvvCEKVJYUNHlJ5d6GVAENnGHdz0PGyiEIyhY83lJLGsvWpbwuRYislNVEuOqZVoKaEEw5IAC1v9q8nluUaRLp1oo9aOfNlIa8dEwV4jEwm%2B33zQY6pgHtmAw60KScaJzB041X2jYGW6C4ilbhlhsQE5TWKW1Np%2BsO64RkaAyQA6jTNQlsQTrEJpjOdlEnVY8%2B0jnuH9uyqZ5%2BuPrA3wwSbNNWRxA%2Fpg9ntPr%2FNhK9UifCzPe8iwLm0wu9H%2FwuKqnyE6LCUfxwwnQK7YGn8FzMiNvfhVyEpjvMHQKYH%2F1LPUfsCn%2FSvRQLezAhhPghGS7bwnAvcSg0vl0QwpMx&X-Amz-Signature=42e81a54b6a5c7c926621d0cb0149ce5a2b287a72476cf2d0728e13e3f5ccf1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
