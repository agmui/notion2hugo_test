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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OLVIVP5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQD%2BbDudFPI5iQZzFJmF77g9BEhNS%2FT%2BM8iRZUTxZSl%2BzwIgEzZVHMQFgvCFNNetDgR41fMSUphzTUo63gxnKT70Uosq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJ2rrxUGZKoC76DenCrcA3P5VhQL9QKKNrO70OeWdsJqWdFrpwM1XlrCtdODOIpujnr6qK5RQibFzrNiRkcpKSqJ6rZ5sEQytmVSW7dTlEe2FoysBMrJH8x8UOoMgCxD9P%2BLNyaEQfms9VSBEAgIPs2beE9Ih8HfctRTq9fQW5SHTZYSEAJMAwYMYRGE1%2FrrZIDOHgq97oSOvnnYk0iV4%2B8i1i%2BFvCtMiJFzYB9jm%2FIXWB6aZuTi%2BY9ApYLz2bo4x%2BXjJKlQt2HJGnBax6TvKcBaYTRDf19YDgWXHRlc6C7Of%2FuhWO6wE9ng9LiY60hBq3PJEC%2B1JeeUdFWqhtZwwzrNs7xCvNw5fyWRaqpAPMeHtIU8VqzTmHw5%2BhkGQWY2Wlp%2Bf4tICPVRmUPnqaPmh646zvgLt2a8WV1ZzpoK5tAjMnI3mQsmGIVY3rfiZtuWncqfN8O1aeduj5mPvsgbXyBtHzn7tBwDT7%2BIQVM9uOQuYoj3hv0RfBRVpm5NQN0YJ9jKEChwNZlQ366tsR8urHYoCE37q%2Bv1YFyBUsp9djZNg7OkEo1h%2FtOXb2eN%2FzsmwIAhcKzyiCJVnrBlidQ4pqcA99iVkleWjd3Fdbu1oJoi20Y4Mon07Xv5BUt%2BSDd6KpPmXmjJU920bx%2FlMIi%2FzL0GOqUBnxZZ4qCT2l3fuhoyDTkDsG3o24K1NMfhVOReGNxpL%2FpNv5uzJjjv%2F5DmbD1ddZkmESuUNMWj0xhSzDNBWJnJwZro4f1%2BwpAD2xbdDAiyL7HU5xYpMGpZHPMeYxj4stKiVFQUgOLzRoM3xLCbGhdjnm%2BpPeHM62zISazlOAPbJ0Lpq5CfN0t85FoZQ42Ym%2B%2FqLSH9iZeVjpQUbfB3BVfdDkEk7b22&X-Amz-Signature=3b1d8b71fdc97b00e107baf921868a4a1693123f17db38b2aaa759fed516036e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OLVIVP5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQD%2BbDudFPI5iQZzFJmF77g9BEhNS%2FT%2BM8iRZUTxZSl%2BzwIgEzZVHMQFgvCFNNetDgR41fMSUphzTUo63gxnKT70Uosq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJ2rrxUGZKoC76DenCrcA3P5VhQL9QKKNrO70OeWdsJqWdFrpwM1XlrCtdODOIpujnr6qK5RQibFzrNiRkcpKSqJ6rZ5sEQytmVSW7dTlEe2FoysBMrJH8x8UOoMgCxD9P%2BLNyaEQfms9VSBEAgIPs2beE9Ih8HfctRTq9fQW5SHTZYSEAJMAwYMYRGE1%2FrrZIDOHgq97oSOvnnYk0iV4%2B8i1i%2BFvCtMiJFzYB9jm%2FIXWB6aZuTi%2BY9ApYLz2bo4x%2BXjJKlQt2HJGnBax6TvKcBaYTRDf19YDgWXHRlc6C7Of%2FuhWO6wE9ng9LiY60hBq3PJEC%2B1JeeUdFWqhtZwwzrNs7xCvNw5fyWRaqpAPMeHtIU8VqzTmHw5%2BhkGQWY2Wlp%2Bf4tICPVRmUPnqaPmh646zvgLt2a8WV1ZzpoK5tAjMnI3mQsmGIVY3rfiZtuWncqfN8O1aeduj5mPvsgbXyBtHzn7tBwDT7%2BIQVM9uOQuYoj3hv0RfBRVpm5NQN0YJ9jKEChwNZlQ366tsR8urHYoCE37q%2Bv1YFyBUsp9djZNg7OkEo1h%2FtOXb2eN%2FzsmwIAhcKzyiCJVnrBlidQ4pqcA99iVkleWjd3Fdbu1oJoi20Y4Mon07Xv5BUt%2BSDd6KpPmXmjJU920bx%2FlMIi%2FzL0GOqUBnxZZ4qCT2l3fuhoyDTkDsG3o24K1NMfhVOReGNxpL%2FpNv5uzJjjv%2F5DmbD1ddZkmESuUNMWj0xhSzDNBWJnJwZro4f1%2BwpAD2xbdDAiyL7HU5xYpMGpZHPMeYxj4stKiVFQUgOLzRoM3xLCbGhdjnm%2BpPeHM62zISazlOAPbJ0Lpq5CfN0t85FoZQ42Ym%2B%2FqLSH9iZeVjpQUbfB3BVfdDkEk7b22&X-Amz-Signature=783b930bc25d30b3b415fc8cf2b1b98bc50e03ddfed557199b99829e541db4fa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
