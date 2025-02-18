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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWPRZ4OV%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIEKD2JF4zgky9l7cLNVEk3%2Flnd9BaFGl%2B8W2Ens4QUjEAiB6vy%2BsaxTd0iTxhwVyd0HozD1MtFtj5E8Pqb5GjCWuTyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMVEv2RYUeKvxa7IaKtwDcVur%2BJVA82PhVy4sKoQeWlsU9orDfdTU8Hh%2BAgyIQXvQhPmmnDADVHPDy0lWCBno%2BRsTIVh%2FwW9o4vfoi43CFoKUqkHiEEghQBQEerZK%2BhaSBD62kjdfGZ4GwTCUij8uOd8z529PvuG4BKLwnK14ykHoRTNTLa63kP%2FOgTGV65A%2Ft5GG9zAc%2F9fP7xVhyWpKXU7dl6rGVNQXFHokhmMEN%2FVtOfR45UPPAVSa21EEDUrGN%2FLhK93izOI1PfxjUWHZiucv5ddoAw5hKqhTdcbjirqUM%2By74dQRwGa7cUbPZuIwxYmeXhNhuvF0yn3qUSH4ZKynPoCLzLir5areyLM3PAGUfujTYSSrRiGzFW1XrB1RbaJzYTtm2fu9OvGbhz52ZHRUJZgpIX7%2B%2Fh%2BQfzVi8tCmDBgx%2BvwsGVmcrhjhiULp%2Ba7TKSal79agT7evuPKBa%2F4rhnwbnTW9PPMiSpbG1lJaFJBOjqDxBFkxtUwcf91kWYhZWoiYsP2ejGOQCvYFrr3Sj82mq%2B8W9dJxH1gy3fcx67TsPSmsapjHmaiHaINOgJKdPpjbQhi9eh4uxuP8VhQ%2BpD%2BzY6RG1xW6PIlDiz6OWsPNRLq7nM3ZNxEdYC0JbEN9%2Fvj4%2BrplJRcwnPDPvQY6pgGrptssj7CtTAoRw1q%2FQiKXsdnr5LiAfDprVSoPhXM3fcdS41fnQcCwznURk1rskx7qBi6xrFEAEhfO34eaLw%2FbU56S3c4QoGjSj0ZDU5UL9ALsUgJpK2FE5onDJgnkk2B7M%2B4fXeHVsWDBPR5wr%2BZ3uKSDC7zYYAwfoQNDYQ%2FUumCQxBAbUB5uBkLW7%2B1BTpJ7B7U%2B9tZL1VAfs15SDsdGB3SQICQ8&X-Amz-Signature=7f53f4ea62ff0a2f075ab13f05d2a9321c2d9513a998a554228ba362a12cc46c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWPRZ4OV%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIEKD2JF4zgky9l7cLNVEk3%2Flnd9BaFGl%2B8W2Ens4QUjEAiB6vy%2BsaxTd0iTxhwVyd0HozD1MtFtj5E8Pqb5GjCWuTyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMVEv2RYUeKvxa7IaKtwDcVur%2BJVA82PhVy4sKoQeWlsU9orDfdTU8Hh%2BAgyIQXvQhPmmnDADVHPDy0lWCBno%2BRsTIVh%2FwW9o4vfoi43CFoKUqkHiEEghQBQEerZK%2BhaSBD62kjdfGZ4GwTCUij8uOd8z529PvuG4BKLwnK14ykHoRTNTLa63kP%2FOgTGV65A%2Ft5GG9zAc%2F9fP7xVhyWpKXU7dl6rGVNQXFHokhmMEN%2FVtOfR45UPPAVSa21EEDUrGN%2FLhK93izOI1PfxjUWHZiucv5ddoAw5hKqhTdcbjirqUM%2By74dQRwGa7cUbPZuIwxYmeXhNhuvF0yn3qUSH4ZKynPoCLzLir5areyLM3PAGUfujTYSSrRiGzFW1XrB1RbaJzYTtm2fu9OvGbhz52ZHRUJZgpIX7%2B%2Fh%2BQfzVi8tCmDBgx%2BvwsGVmcrhjhiULp%2Ba7TKSal79agT7evuPKBa%2F4rhnwbnTW9PPMiSpbG1lJaFJBOjqDxBFkxtUwcf91kWYhZWoiYsP2ejGOQCvYFrr3Sj82mq%2B8W9dJxH1gy3fcx67TsPSmsapjHmaiHaINOgJKdPpjbQhi9eh4uxuP8VhQ%2BpD%2BzY6RG1xW6PIlDiz6OWsPNRLq7nM3ZNxEdYC0JbEN9%2Fvj4%2BrplJRcwnPDPvQY6pgGrptssj7CtTAoRw1q%2FQiKXsdnr5LiAfDprVSoPhXM3fcdS41fnQcCwznURk1rskx7qBi6xrFEAEhfO34eaLw%2FbU56S3c4QoGjSj0ZDU5UL9ALsUgJpK2FE5onDJgnkk2B7M%2B4fXeHVsWDBPR5wr%2BZ3uKSDC7zYYAwfoQNDYQ%2FUumCQxBAbUB5uBkLW7%2B1BTpJ7B7U%2B9tZL1VAfs15SDsdGB3SQICQ8&X-Amz-Signature=803ab1c6ecf887302009d2c7fd28e1be3a8e19fb801a3a7b3096271f065a758e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
