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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BBDE7FW%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIHjzdaLKTjx4RkysNbRHW14%2FkdP%2F9YKqQQVoHsVUFcsxAiBGcQ3YOOgjb5CLdMO0JYmNSe6XXuPU0xu%2BZU5JFhVy%2BCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMNPkOnjPR14WCYDH6KtwDYiUkH4m2iNk1gz2naInnEDKK9ehsZJCMzfnNqWmoGDrgfrS1kzHMXwZUc73qFlel%2B7jTNqiZs5pqut%2BvdpiRzmiwhQ8iyVFjhTf0xAbn11DKLd7dE%2BzNRj%2Bm%2BtSvaixr7c%2FOauRG%2BkZ25%2FakpkUrEzRrEuDJbIuTWuDCgEoxNsx9FM1cqEwbbrf%2BkhLKBpLxJs7aBqxZZjMlZQ3NVYyChXg%2BZU7y2W2mVg2uA3DMVwD1nnR%2FovTyiSc6l3yrEVJb69AMCuud%2FteZHDTQVGX2oXG1da0YUwe58NBpuGJjDS%2Fw%2BPVq5g08E6XR28r1es4NcdTBC8rgfJPYX5%2BVH66VLdYTz41kQ5t2F8vGXH8659YmtvzGajeGttmljbpKin2gNDHHlcbZNjNHwTyWVs8aFwpqYHBJpu1FGNKTp6S%2BZYX%2BdnO0A3C7GCvaySR0ViNFOSoPrz6N9VWsF8QbFz4TOLwejcpm1ubumlx6pieSX9mz2lS24h6%2F9z8Gl02Y2kwhJUXoe55BGewz0B3HcJPu0nnvfOzFhuYA%2B180Nz3G513ihBo08qhUgXcTxm%2FjGe7ResqzfwWXRh1%2FcpISwW0p6ORlIesAGaTl4FiwF%2BKyPbkK8dDZAFUe0xQskAIwzpTLvQY6pgGWolVddXNa2xr4tqVmzt2GeY9iLKbeHvkZZJqpqhJW7i8cvPB5NuIIsF4zvBx8umQpzbhGeeTwQtTFqBa9NmpaxFeuL32sxjqxsbXNtY1l2AScDev3uxEOqQpE7KM%2Bbm6hb5Xb4lISuSvb%2Bf46ZcESSH2wGQSFXoOB4X0gUQo9Xn4Q625C7VhlVNiCAOCYSJW2lPMKXmoRsQCNenkrLrqqAdyQi9pq&X-Amz-Signature=9b3c5e30ca74c086097598d4b959d159533871b350ca5800631707b0770734c3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BBDE7FW%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIHjzdaLKTjx4RkysNbRHW14%2FkdP%2F9YKqQQVoHsVUFcsxAiBGcQ3YOOgjb5CLdMO0JYmNSe6XXuPU0xu%2BZU5JFhVy%2BCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMNPkOnjPR14WCYDH6KtwDYiUkH4m2iNk1gz2naInnEDKK9ehsZJCMzfnNqWmoGDrgfrS1kzHMXwZUc73qFlel%2B7jTNqiZs5pqut%2BvdpiRzmiwhQ8iyVFjhTf0xAbn11DKLd7dE%2BzNRj%2Bm%2BtSvaixr7c%2FOauRG%2BkZ25%2FakpkUrEzRrEuDJbIuTWuDCgEoxNsx9FM1cqEwbbrf%2BkhLKBpLxJs7aBqxZZjMlZQ3NVYyChXg%2BZU7y2W2mVg2uA3DMVwD1nnR%2FovTyiSc6l3yrEVJb69AMCuud%2FteZHDTQVGX2oXG1da0YUwe58NBpuGJjDS%2Fw%2BPVq5g08E6XR28r1es4NcdTBC8rgfJPYX5%2BVH66VLdYTz41kQ5t2F8vGXH8659YmtvzGajeGttmljbpKin2gNDHHlcbZNjNHwTyWVs8aFwpqYHBJpu1FGNKTp6S%2BZYX%2BdnO0A3C7GCvaySR0ViNFOSoPrz6N9VWsF8QbFz4TOLwejcpm1ubumlx6pieSX9mz2lS24h6%2F9z8Gl02Y2kwhJUXoe55BGewz0B3HcJPu0nnvfOzFhuYA%2B180Nz3G513ihBo08qhUgXcTxm%2FjGe7ResqzfwWXRh1%2FcpISwW0p6ORlIesAGaTl4FiwF%2BKyPbkK8dDZAFUe0xQskAIwzpTLvQY6pgGWolVddXNa2xr4tqVmzt2GeY9iLKbeHvkZZJqpqhJW7i8cvPB5NuIIsF4zvBx8umQpzbhGeeTwQtTFqBa9NmpaxFeuL32sxjqxsbXNtY1l2AScDev3uxEOqQpE7KM%2Bbm6hb5Xb4lISuSvb%2Bf46ZcESSH2wGQSFXoOB4X0gUQo9Xn4Q625C7VhlVNiCAOCYSJW2lPMKXmoRsQCNenkrLrqqAdyQi9pq&X-Amz-Signature=3edbe85ece89e2999563561f12c1dbc0d833f19a6b6d79256a6f812a6132c7ac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
