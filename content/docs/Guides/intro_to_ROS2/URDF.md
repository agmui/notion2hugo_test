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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLJDEYOE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ5yC8yooLi9YKU%2BYmq3pRTYqurpOOVXKi%2FWEyZaA%2BbAIgCES2J4gaSBo05U8pGb%2FJL7kuX%2FwOeiaJK2Sppu7oNSYqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGc7axHTREQpSVGmYCrcA4rTftJSauIIvivA2ZkKmtiHRZocr9aFR1jJ7vlN5JrIp0JdZl86hiBtEI%2Fb3DfUzeFDGywFRqwKD231aq0WOLK4w%2B2BMQRbRYps%2FKIf2jpjTyw1hWIq28X1LfxYOQFFQDLM5qPzEfLS9IHWROHBYNMl%2FGn%2FW%2BnAysIEVhcNYH2Db8iG%2B2cSQk%2FDthdcjHeqlLTGOjTrzXA7lBw30h9Qht0o8QfXpKHA6btwcM9y%2F7Gk12%2BxBpWStS2djw6pmP%2FwV9ZAao2w5KoZyi%2BbLJkvp9D5k3cnF%2Fh%2FQadUtMZw6t%2BWT5XW9df5zKJ2ZIIey8sSMkEbOIcDV%2BNmF7A6RPZ%2Bbs3sOU0PfUeHEhowSkTPmfbKr0d4deNBFFbvok1NTbCEUmyF3FsWbPaa2x6nX4qUodrDX31pGbXPPSm84sP0RTj37RDThq3ONKP9V9Al4vHgYL0ZMCM4ic3MP0sqvB5d%2F%2F4P2iTeQwzc5xL72lePwOqNkrYmSy6ceMUnay9uSy%2BjBwYHXFBLjbYX%2FcKDNW6Er%2FqRZSyZXhyCevQ5cXa%2B0jdcZYEzf4keTJFC0KB7Qq8SKzxjJ1GZByjGKGhi3XRROtC%2BVAIN0KpKzJMD1xifKH36gLBPgP8hlAYt39bCMKOz38QGOqUB%2Fqgn9%2FyDjfN%2FkaFn98kyd6qFbeDr77lWLhnKJz%2BN53DdvmBVapZrq087ThHJV3U2y5kLIESsu0iL3bed7c4tsCv%2Bo49DqJvIDeJLTU1BhO0g5ir8bz3cbSG4T8x4YtQXIvw7CLLuvX3Wx5UdQm3MQmK0q5aU%2BYHdS8rygRaG7Osf60%2BxbwaPwMMHcG3nxb1ULmWdqLqmEE2xf3kMHNfZG9VMOuKc&X-Amz-Signature=a26e49f0117400cd8547b7ed1307513c6ca64e382ab6b3433a31353895b47f1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLJDEYOE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ5yC8yooLi9YKU%2BYmq3pRTYqurpOOVXKi%2FWEyZaA%2BbAIgCES2J4gaSBo05U8pGb%2FJL7kuX%2FwOeiaJK2Sppu7oNSYqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGc7axHTREQpSVGmYCrcA4rTftJSauIIvivA2ZkKmtiHRZocr9aFR1jJ7vlN5JrIp0JdZl86hiBtEI%2Fb3DfUzeFDGywFRqwKD231aq0WOLK4w%2B2BMQRbRYps%2FKIf2jpjTyw1hWIq28X1LfxYOQFFQDLM5qPzEfLS9IHWROHBYNMl%2FGn%2FW%2BnAysIEVhcNYH2Db8iG%2B2cSQk%2FDthdcjHeqlLTGOjTrzXA7lBw30h9Qht0o8QfXpKHA6btwcM9y%2F7Gk12%2BxBpWStS2djw6pmP%2FwV9ZAao2w5KoZyi%2BbLJkvp9D5k3cnF%2Fh%2FQadUtMZw6t%2BWT5XW9df5zKJ2ZIIey8sSMkEbOIcDV%2BNmF7A6RPZ%2Bbs3sOU0PfUeHEhowSkTPmfbKr0d4deNBFFbvok1NTbCEUmyF3FsWbPaa2x6nX4qUodrDX31pGbXPPSm84sP0RTj37RDThq3ONKP9V9Al4vHgYL0ZMCM4ic3MP0sqvB5d%2F%2F4P2iTeQwzc5xL72lePwOqNkrYmSy6ceMUnay9uSy%2BjBwYHXFBLjbYX%2FcKDNW6Er%2FqRZSyZXhyCevQ5cXa%2B0jdcZYEzf4keTJFC0KB7Qq8SKzxjJ1GZByjGKGhi3XRROtC%2BVAIN0KpKzJMD1xifKH36gLBPgP8hlAYt39bCMKOz38QGOqUB%2Fqgn9%2FyDjfN%2FkaFn98kyd6qFbeDr77lWLhnKJz%2BN53DdvmBVapZrq087ThHJV3U2y5kLIESsu0iL3bed7c4tsCv%2Bo49DqJvIDeJLTU1BhO0g5ir8bz3cbSG4T8x4YtQXIvw7CLLuvX3Wx5UdQm3MQmK0q5aU%2BYHdS8rygRaG7Osf60%2BxbwaPwMMHcG3nxb1ULmWdqLqmEE2xf3kMHNfZG9VMOuKc&X-Amz-Signature=e2af37e31f2c84f575b4f0e1fe698a93d1c022496feac34c0174c317e6f77a87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
