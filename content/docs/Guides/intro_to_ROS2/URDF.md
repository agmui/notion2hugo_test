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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L63325D%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOb%2Fxn8l1Q4GhtKovYj0vFkE688%2B%2BrRwl1zNuWNije8gIgLnpvkWsSnPzVHQ48HZHil%2FIpchWQzCHIZWZVz07D1%2BAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDNar4VVFM%2F8crt%2BDCyrcA%2F%2FyVsJfXLLqK33MvrbOsPTNxHy1klhT9kEAVrGZFqgGTTnfYheLcp6NEnBQax%2F2qfGaSeEjMLsG2mK%2F7Rwcb80sPh7mjAcDUJ%2FamFQM8fU6K5JHCGz4c%2Bmn%2F9iAdOcHrdkl5KSyiisTqwcnaShBhEn3kwaDtn7IjfROIZYxjPN3kXkDG2lqI1x3MBZMX75NAd4Mhb8M32pCk3CqEY%2FJje5E74sk6C7boxspp5Wt4j7Tw2juXRcLX0DxeWu3D3D6GlwWnVeAEO9pw1FmPwbjgZp5kapiuA50doPFv%2F6CPIDoSHKKrG4%2BeP2tfn1zeqTjmUXM0REiuX8fZXGloxmgVcOQGtUufnQybfYRKwFGb2W1UqFtlfpu5QTkRocfLbtQH3ae9yr5pv23VYNPYCqeftCqVWYqKZ7y4jVv%2FubmjmWJysgjB661owMFWo7zn%2B4JMNwudJ6zcvGfPc3AJFoaAniSGMgua5eJPvdBXBxaOI2yiTNSWoOF1QOEvXa3qUw2XlWrLoIyey0hpQh8kwEkleLzRV9d4k0LacR5Ceo72sfnA3KpjBN%2FlCrxuEmR9ioqkH842bIRi8No%2FEIRZnVuvC1NLgrVE8pYJiHM%2BI%2FU06FVVDhZZJBP9m%2B%2B4oNnMI%2Fc3L4GOqUBK8zDDq0jp%2BAUWAB30y01P3CqKqVJmfRLGQd4xiWHzAef2EsBH50JVq%2F6%2FFI5blHByUxOET4nsRsLL%2FePx7dgSKQMr6gKo835qj3u9rRl6NLciVwjdHVEtNHKgwNCIGUkvV7yOGV8x9ddshKauCgjOV%2F2pAj0uOPlijw%2F0uhHZ30Yym%2Fa2rvep8SCGHnU79Tw4JhZzDdDJxnuNZhTjmIcTD49GlIC&X-Amz-Signature=78ee835d4e8720010a2a55e066de0d88a351d8e83b976b77ad2508a06fbbae21&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L63325D%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOb%2Fxn8l1Q4GhtKovYj0vFkE688%2B%2BrRwl1zNuWNije8gIgLnpvkWsSnPzVHQ48HZHil%2FIpchWQzCHIZWZVz07D1%2BAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDNar4VVFM%2F8crt%2BDCyrcA%2F%2FyVsJfXLLqK33MvrbOsPTNxHy1klhT9kEAVrGZFqgGTTnfYheLcp6NEnBQax%2F2qfGaSeEjMLsG2mK%2F7Rwcb80sPh7mjAcDUJ%2FamFQM8fU6K5JHCGz4c%2Bmn%2F9iAdOcHrdkl5KSyiisTqwcnaShBhEn3kwaDtn7IjfROIZYxjPN3kXkDG2lqI1x3MBZMX75NAd4Mhb8M32pCk3CqEY%2FJje5E74sk6C7boxspp5Wt4j7Tw2juXRcLX0DxeWu3D3D6GlwWnVeAEO9pw1FmPwbjgZp5kapiuA50doPFv%2F6CPIDoSHKKrG4%2BeP2tfn1zeqTjmUXM0REiuX8fZXGloxmgVcOQGtUufnQybfYRKwFGb2W1UqFtlfpu5QTkRocfLbtQH3ae9yr5pv23VYNPYCqeftCqVWYqKZ7y4jVv%2FubmjmWJysgjB661owMFWo7zn%2B4JMNwudJ6zcvGfPc3AJFoaAniSGMgua5eJPvdBXBxaOI2yiTNSWoOF1QOEvXa3qUw2XlWrLoIyey0hpQh8kwEkleLzRV9d4k0LacR5Ceo72sfnA3KpjBN%2FlCrxuEmR9ioqkH842bIRi8No%2FEIRZnVuvC1NLgrVE8pYJiHM%2BI%2FU06FVVDhZZJBP9m%2B%2B4oNnMI%2Fc3L4GOqUBK8zDDq0jp%2BAUWAB30y01P3CqKqVJmfRLGQd4xiWHzAef2EsBH50JVq%2F6%2FFI5blHByUxOET4nsRsLL%2FePx7dgSKQMr6gKo835qj3u9rRl6NLciVwjdHVEtNHKgwNCIGUkvV7yOGV8x9ddshKauCgjOV%2F2pAj0uOPlijw%2F0uhHZ30Yym%2Fa2rvep8SCGHnU79Tw4JhZzDdDJxnuNZhTjmIcTD49GlIC&X-Amz-Signature=a996a47fa64219954c6cb7f70f990abd65d8110e0cdfd0190a89df07fa8a4e6e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
