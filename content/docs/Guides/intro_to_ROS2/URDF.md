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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVNOA47G%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIFhnJlkVYEc09NnRqVMZ1tI9MTzD6BKMtieVG0zbvpy%2BAiEA40Uzet05%2BsQ21wsbct0csyk6R%2FWvFKxztkD1t7KozHwqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6US%2BPJWM6StFKJtyrcAzCFwsXo3YkMO60sE9MOpmbKvWcMhR64uUiLG3zpzoOKDo0ZYrv2w132PlcjMbxu4VbondIGnMQoMhJWCbkxqlgK%2FegojVQGFfA55JDCvK2zP%2Fcle6M%2FGWb%2Bifq0Hq4Nsb98oNCvVFZY6Wmh%2BRgqDTQgZWhtyavuvRa8fwuHx1JrfcAlDIKoEAgPIbBworCf1f14hl6%2BYm7AbOa%2FvrSxNxqH7%2B9ynA7BsL%2FWhSozYfwD%2FWeNJ%2B5Z36TxBiHWj3cYXRMuKYwB5nJVWiwhKOnaKViw2xmDxDu9yfqCq4eYtizg11AZ0E7ZWRwJbtbe9vwSxOzACBf9TGh3Ir%2F78YG1sagXbySRbXmIpa2UgkcjRrBoE%2BTITP8e9rs6nQKWS8OYpEzbU30K5CJNMrwwspznwv2yFkeZhGYOdftCOSyQG4paVVCc%2FJX%2BPM8vjAtcQyAKayKOVxHtDwuV6vBIGMqtlG3soeP0jRdQhhLgk%2FavMUodXIT4rzVxz0gPL9zLWR1VrFZcvRhHSAb0M0wbO%2Bws3vJZE10LyhrDppDQga3ZOcGIyG92FdBqRdLwWywgb2ERjnZYAsoN%2FIyCM0cXefWVMlJqzYBemK7lb3Uusn8q62TqWm%2BeKeChs%2FX52TIGMLjnlscGOqUBu9l8Pj4%2Fg3MkSNRtdfo0RU08d7W2FECGI09zH3TspNQi4k5IWwkKLciaOL1jsGYYyqx0Tvin263xgu6Usv7nb%2BWOo2QMNP2nOhuqEf2WwLEmorbsGvIFS9t3stqDgfEj%2BGh6Gv4sEYe8ztXuXFrk4seT0%2F730FZViLQZ%2F6B1t1xMbq9dFkodcRLOx%2F1rwtEOEuE41SB7QbAduVzgPuNwIc2%2FK5vD&X-Amz-Signature=1cb71f66d4b576d4da6cec56cacf2fe3a969bbd9070bc5bc7fdeac8ed4a99834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVNOA47G%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIFhnJlkVYEc09NnRqVMZ1tI9MTzD6BKMtieVG0zbvpy%2BAiEA40Uzet05%2BsQ21wsbct0csyk6R%2FWvFKxztkD1t7KozHwqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6US%2BPJWM6StFKJtyrcAzCFwsXo3YkMO60sE9MOpmbKvWcMhR64uUiLG3zpzoOKDo0ZYrv2w132PlcjMbxu4VbondIGnMQoMhJWCbkxqlgK%2FegojVQGFfA55JDCvK2zP%2Fcle6M%2FGWb%2Bifq0Hq4Nsb98oNCvVFZY6Wmh%2BRgqDTQgZWhtyavuvRa8fwuHx1JrfcAlDIKoEAgPIbBworCf1f14hl6%2BYm7AbOa%2FvrSxNxqH7%2B9ynA7BsL%2FWhSozYfwD%2FWeNJ%2B5Z36TxBiHWj3cYXRMuKYwB5nJVWiwhKOnaKViw2xmDxDu9yfqCq4eYtizg11AZ0E7ZWRwJbtbe9vwSxOzACBf9TGh3Ir%2F78YG1sagXbySRbXmIpa2UgkcjRrBoE%2BTITP8e9rs6nQKWS8OYpEzbU30K5CJNMrwwspznwv2yFkeZhGYOdftCOSyQG4paVVCc%2FJX%2BPM8vjAtcQyAKayKOVxHtDwuV6vBIGMqtlG3soeP0jRdQhhLgk%2FavMUodXIT4rzVxz0gPL9zLWR1VrFZcvRhHSAb0M0wbO%2Bws3vJZE10LyhrDppDQga3ZOcGIyG92FdBqRdLwWywgb2ERjnZYAsoN%2FIyCM0cXefWVMlJqzYBemK7lb3Uusn8q62TqWm%2BeKeChs%2FX52TIGMLjnlscGOqUBu9l8Pj4%2Fg3MkSNRtdfo0RU08d7W2FECGI09zH3TspNQi4k5IWwkKLciaOL1jsGYYyqx0Tvin263xgu6Usv7nb%2BWOo2QMNP2nOhuqEf2WwLEmorbsGvIFS9t3stqDgfEj%2BGh6Gv4sEYe8ztXuXFrk4seT0%2F730FZViLQZ%2F6B1t1xMbq9dFkodcRLOx%2F1rwtEOEuE41SB7QbAduVzgPuNwIc2%2FK5vD&X-Amz-Signature=5d772369399022f6a513383d6a55698376c0a46085d36f5b6f93ee692e71107f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
