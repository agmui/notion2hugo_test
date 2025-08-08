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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBHHRZY3%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIFucYtKQH33gjUZcgNr8pOSMFbFF%2B4VWCcDsky9%2FZ278AiEAuZ5hev%2BtK7gC41%2FizoGz4HgphKbvnopjRjf9Ud4b%2F40qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9aE5igGmRvgQrHYCrcA6SaONfyxPcs1%2F5lgQEn%2BkCtGeV7ZPTGXLqDU262M8aHf0eiVF3%2B%2Bt1437wbaVQY2HjCabzMA%2BzTUQpYaAbtrJ3QujJ7E9Cy4mO9H9agrb7ywoRUSSeoJNnd8gtwaKH7hH5T7CelObb9xDbzLCFNi7y6wsZ6SDhDr2oB7whcm7a9%2FgmCh%2Bbyk%2B02pBnRCelmq0AKqn4Dio%2Fm2P2QtuEB0wRXnA1ThfJqE9ZaDodnTvWaPlkqYz6MJUA3FRjNCPuzSzkS8PntlwaBGxbnBuI8lD6LYTWUdch1TGHoFbCg%2BY%2B10TCfatqsgNRykss5Wey69z%2BBHcr1ycwQkS1lyyjKVUB6US8yqcceBHRLfL5Vod8UBKpoTyU77nqML7H3c1JXMrn6lPy9XaZZyxIvRuFFytWsbzieNhEQlCWh%2FNJqICvPzoRXuQOFm093Fo505hCDHKAAPx6i2Oi5SN0JUJgO9b8GyjXy1ECjhCOB5egDzF7EoMyhhG53lFyIYB1E%2B932Y5rUlCqQ96HlpUbP%2Bhh3DLhykG5OFFDd%2BhI03rgqy4UzvdQP0rsO7MNO8ktW6NFYfTbjJt8YJQIjq44IXtuAx0fQCyhnX4jEo9XgKi26is7T9%2FdgWXsopbKCOAVNMN%2F61cQGOqUBfLgJgcOr0rRmFmKeT2CSyDv6IJbfSvMdD3k5XkNOr%2FtaBIMlgc0FMKX4EFSIPX59k8AwetPl5JIjFZ0i4ufllLR0vWOn6I9%2FpaFBSsALnhlMHHGomsD%2FziFrWDq6YVJu6enXLt74BhgzJHEJ8YorVP9M1Aw7voXG3YlSjXUlxxaRMPWRV6bzX98%2FCVBg4jGrL%2F4%2B5%2FuXhytMWtGK3eiZRnIZxsDR&X-Amz-Signature=865c6f96694e2430d66e37e9e31567b21723841b547e2d0a5a5070e8d2385058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBHHRZY3%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIFucYtKQH33gjUZcgNr8pOSMFbFF%2B4VWCcDsky9%2FZ278AiEAuZ5hev%2BtK7gC41%2FizoGz4HgphKbvnopjRjf9Ud4b%2F40qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9aE5igGmRvgQrHYCrcA6SaONfyxPcs1%2F5lgQEn%2BkCtGeV7ZPTGXLqDU262M8aHf0eiVF3%2B%2Bt1437wbaVQY2HjCabzMA%2BzTUQpYaAbtrJ3QujJ7E9Cy4mO9H9agrb7ywoRUSSeoJNnd8gtwaKH7hH5T7CelObb9xDbzLCFNi7y6wsZ6SDhDr2oB7whcm7a9%2FgmCh%2Bbyk%2B02pBnRCelmq0AKqn4Dio%2Fm2P2QtuEB0wRXnA1ThfJqE9ZaDodnTvWaPlkqYz6MJUA3FRjNCPuzSzkS8PntlwaBGxbnBuI8lD6LYTWUdch1TGHoFbCg%2BY%2B10TCfatqsgNRykss5Wey69z%2BBHcr1ycwQkS1lyyjKVUB6US8yqcceBHRLfL5Vod8UBKpoTyU77nqML7H3c1JXMrn6lPy9XaZZyxIvRuFFytWsbzieNhEQlCWh%2FNJqICvPzoRXuQOFm093Fo505hCDHKAAPx6i2Oi5SN0JUJgO9b8GyjXy1ECjhCOB5egDzF7EoMyhhG53lFyIYB1E%2B932Y5rUlCqQ96HlpUbP%2Bhh3DLhykG5OFFDd%2BhI03rgqy4UzvdQP0rsO7MNO8ktW6NFYfTbjJt8YJQIjq44IXtuAx0fQCyhnX4jEo9XgKi26is7T9%2FdgWXsopbKCOAVNMN%2F61cQGOqUBfLgJgcOr0rRmFmKeT2CSyDv6IJbfSvMdD3k5XkNOr%2FtaBIMlgc0FMKX4EFSIPX59k8AwetPl5JIjFZ0i4ufllLR0vWOn6I9%2FpaFBSsALnhlMHHGomsD%2FziFrWDq6YVJu6enXLt74BhgzJHEJ8YorVP9M1Aw7voXG3YlSjXUlxxaRMPWRV6bzX98%2FCVBg4jGrL%2F4%2B5%2FuXhytMWtGK3eiZRnIZxsDR&X-Amz-Signature=a856ce00c4476be344688ca27a5a2535e211618bb8e90bba73fde923e88007ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
