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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KK4FUE4%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBQ4Q4hpBcRIobZ4hKA40pK3hOqB23bBm5hXd9TgwZTrAiANhvXars4W6bj4HU8iqzglZFreEJZeKNWYyTBVzZGq2SqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5rFDrUWEPJ4Rz0KkKtwDqwAtOZe5CyD56z%2F8fpCfmi25brB7M7r%2FRpZXXPUk2%2Fd5watqejUUYNI7wo%2BNaWtEK152qHzTMjNLTSGeaU69iHeN3Yocj897SId3%2BvJ0eb5V81%2BXyFQewfdkUTY0y18XkyZQvzETFHaIp8gplSzqSOlMIE%2BVgGiRDfYhIlTxQhXHUBTzbIEdoOQp%2Fx5RvSLZNfexSBUyRzoNbWlh1hxZJln0HUgJo7IeskhShm%2BGwbTFVsmzPzuIdVuEXXayycp3TDPvz1IfhhwkI%2FCgxQgEBi7yjFSJB4aL8iJSkfkAzVt6UhEAO1m5hb0Ntfji6yXUi%2BAq30MaBf2v%2Bc4IWMJeY0HAc4voLgZF81HlO3ZoOWIcnh28TOG0MYVevzBbfG1dAKnJcCjbJ2rWJxFVQFxfppHPMqqw%2FTKjPdy4ZSW1KWNjBS4yZEQ5KmUDbOnPnatNURhQO3bs9ORIuUkpIv7WKhyrloi5OKyEWVlCuShF6ciutnnksq5%2BgrTRpQYqU1KubmMhrxeOr8CIJ08syHLzTsLGQJFJIzykE9LVyWOf38rX%2F7uGwM3hdqIhqCignIat9%2BnQDLDlExBW6pq4J4j6wZtNU5Ofo5OsPRo7flqNy%2BDkf2uq%2FrR6THpUmzIw2MXcvwY6pgEaxHgPR2EWFTjr%2FZPey4qg0tc0EGAZT2AG2HgW9oXcKOZhRW%2Bz9wUZcFT8ZLqdMIT8f7YxNWeLjzaRibWRjGO7oK5qeI%2Fp%2FVSqVR2IB8r6tBmdL9UATobjiBHL8j6QyY%2F4FoK7pYl1C2pyKLI%2FUHo5E8w6JR09v3wGIFwFLlxtrlCHlxga2q%2Bh%2B2nWl2KUj2GSI6%2FNpJo%2FWpwRNx%2Bmx6B6zMHbXHjo&X-Amz-Signature=60c80cc6a6746b8b4fc0c0e57dc0f102bf38506e15fdade85d1033d6d8246db5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KK4FUE4%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBQ4Q4hpBcRIobZ4hKA40pK3hOqB23bBm5hXd9TgwZTrAiANhvXars4W6bj4HU8iqzglZFreEJZeKNWYyTBVzZGq2SqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5rFDrUWEPJ4Rz0KkKtwDqwAtOZe5CyD56z%2F8fpCfmi25brB7M7r%2FRpZXXPUk2%2Fd5watqejUUYNI7wo%2BNaWtEK152qHzTMjNLTSGeaU69iHeN3Yocj897SId3%2BvJ0eb5V81%2BXyFQewfdkUTY0y18XkyZQvzETFHaIp8gplSzqSOlMIE%2BVgGiRDfYhIlTxQhXHUBTzbIEdoOQp%2Fx5RvSLZNfexSBUyRzoNbWlh1hxZJln0HUgJo7IeskhShm%2BGwbTFVsmzPzuIdVuEXXayycp3TDPvz1IfhhwkI%2FCgxQgEBi7yjFSJB4aL8iJSkfkAzVt6UhEAO1m5hb0Ntfji6yXUi%2BAq30MaBf2v%2Bc4IWMJeY0HAc4voLgZF81HlO3ZoOWIcnh28TOG0MYVevzBbfG1dAKnJcCjbJ2rWJxFVQFxfppHPMqqw%2FTKjPdy4ZSW1KWNjBS4yZEQ5KmUDbOnPnatNURhQO3bs9ORIuUkpIv7WKhyrloi5OKyEWVlCuShF6ciutnnksq5%2BgrTRpQYqU1KubmMhrxeOr8CIJ08syHLzTsLGQJFJIzykE9LVyWOf38rX%2F7uGwM3hdqIhqCignIat9%2BnQDLDlExBW6pq4J4j6wZtNU5Ofo5OsPRo7flqNy%2BDkf2uq%2FrR6THpUmzIw2MXcvwY6pgEaxHgPR2EWFTjr%2FZPey4qg0tc0EGAZT2AG2HgW9oXcKOZhRW%2Bz9wUZcFT8ZLqdMIT8f7YxNWeLjzaRibWRjGO7oK5qeI%2Fp%2FVSqVR2IB8r6tBmdL9UATobjiBHL8j6QyY%2F4FoK7pYl1C2pyKLI%2FUHo5E8w6JR09v3wGIFwFLlxtrlCHlxga2q%2Bh%2B2nWl2KUj2GSI6%2FNpJo%2FWpwRNx%2Bmx6B6zMHbXHjo&X-Amz-Signature=8203b27fc95cc89f26572e2a7a483225d88a1768736eda33eaaff9a806816fdb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
