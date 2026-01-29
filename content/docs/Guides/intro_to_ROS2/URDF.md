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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664224XM2R%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyDBndpIrfJFLmt7tg5AmPiQ9aO%2BeItOh0lA%2F%2FmsvVoAiEApGh5Pe%2BBMxJaIvpyZO3X7OBGVcjW7tTmxmwx%2Fwq7yLwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDGsGLBcOtASUPgXpbircA8l1uRABZac%2BZwKPR9%2FBdl2TQPNG1wYIVHvXgtMmS%2BoG4ZM0RS7cPn%2BqVXrh7GzAbNRC%2BBQvmUKKpZ9q%2FC2eJtA4vyUNzq208O%2B1hv3vjpnWvehfKhf%2BEauDFJHESoAZPHU3zogQLv%2BwQ89dZjxD5gi10iW1grf%2BNCxDVRVp6ChhjqcZ3z0j2mEdzlC9bHa74xmIMvv27wee32X8RqOYNN5p9BAyPmWtrwTflsDmHJd5ms6z81pnN0thKMjQJz6rrtmsNquPGP9CokkhNlIXRs5WjBtNFjnwQSXZL85xDvXmzv0GXbo5XPWSMQbUUEc1jX%2BmEeCuGwYJDN51jiUGbvOG1cewh%2FlAETMKL%2FVxUJ554yxyHGFHh1f7y8kTRPuwsTqzdCln%2BdB0sdiNlVylpmM9LvPVbxlgty%2B%2BELkBnE0kRqYlrhYHlRXryJBKQi%2BGn4zz%2BRy2Kt5k6JmEDQVr6Qxvs%2BjwB5WGEPj%2Bo0frBrt8w7YyLEGXl4SY7fZ0rQoNpn3eieoK5vv9ZieVS1uFfr4fmE9VDvPfxjS9rtkUdGFQ3qmVcuWQ5mDG2dB5yxOt9qgMa5aO4m23loYjWKPTXNvQWXSpeX8rw%2BAmQg8CXPJWWXHoMqKuQWvocZ4gMLD16ssGOqUB08udt8BwQo7SeplgPjwnlsigYiIvgXd9i0ba76jP4Pkwhs%2FC%2Bor6b11GcUqhgpxQzX3S5WBJbpdbWpcyOtwPWrhI9s9Mv0wtRorx7i%2BolUtpFABCh6vY1EBnwZT0VofHB4FzYZX%2FdcpaCOdSzYqWyGdRa0GrJVtQPUdrA9RdWAokpwWqDIweDslSupD5WbZ0pBRKKY3TdziU9%2FQXxO5ZzlYVdDxX&X-Amz-Signature=2f5214ba15885f7cedd9404004f06d0c9ca015b23e4eda8a6546334f84dc33b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664224XM2R%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyDBndpIrfJFLmt7tg5AmPiQ9aO%2BeItOh0lA%2F%2FmsvVoAiEApGh5Pe%2BBMxJaIvpyZO3X7OBGVcjW7tTmxmwx%2Fwq7yLwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDGsGLBcOtASUPgXpbircA8l1uRABZac%2BZwKPR9%2FBdl2TQPNG1wYIVHvXgtMmS%2BoG4ZM0RS7cPn%2BqVXrh7GzAbNRC%2BBQvmUKKpZ9q%2FC2eJtA4vyUNzq208O%2B1hv3vjpnWvehfKhf%2BEauDFJHESoAZPHU3zogQLv%2BwQ89dZjxD5gi10iW1grf%2BNCxDVRVp6ChhjqcZ3z0j2mEdzlC9bHa74xmIMvv27wee32X8RqOYNN5p9BAyPmWtrwTflsDmHJd5ms6z81pnN0thKMjQJz6rrtmsNquPGP9CokkhNlIXRs5WjBtNFjnwQSXZL85xDvXmzv0GXbo5XPWSMQbUUEc1jX%2BmEeCuGwYJDN51jiUGbvOG1cewh%2FlAETMKL%2FVxUJ554yxyHGFHh1f7y8kTRPuwsTqzdCln%2BdB0sdiNlVylpmM9LvPVbxlgty%2B%2BELkBnE0kRqYlrhYHlRXryJBKQi%2BGn4zz%2BRy2Kt5k6JmEDQVr6Qxvs%2BjwB5WGEPj%2Bo0frBrt8w7YyLEGXl4SY7fZ0rQoNpn3eieoK5vv9ZieVS1uFfr4fmE9VDvPfxjS9rtkUdGFQ3qmVcuWQ5mDG2dB5yxOt9qgMa5aO4m23loYjWKPTXNvQWXSpeX8rw%2BAmQg8CXPJWWXHoMqKuQWvocZ4gMLD16ssGOqUB08udt8BwQo7SeplgPjwnlsigYiIvgXd9i0ba76jP4Pkwhs%2FC%2Bor6b11GcUqhgpxQzX3S5WBJbpdbWpcyOtwPWrhI9s9Mv0wtRorx7i%2BolUtpFABCh6vY1EBnwZT0VofHB4FzYZX%2FdcpaCOdSzYqWyGdRa0GrJVtQPUdrA9RdWAokpwWqDIweDslSupD5WbZ0pBRKKY3TdziU9%2FQXxO5ZzlYVdDxX&X-Amz-Signature=cd17ca5cb45f56c97618e78471dc680d3f2fd46bed4619bd43e872d85f5d4386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
