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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BX6FH33%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGiYFAbP5TYNx39x0tfRkAsI%2BjFozHMiL95GsQTBCcMFAiEAnSZBO3AmZzFrp0uBWgjJ1TL18aqPJ3OJRD7mCmWkSQ0qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLicRPdicmhzU52PSrcA0nRdzIHtQ%2BHjZMADybojqWB5usTXQ%2BXQqJr85CknuKvvl48Zxr22y1F8DUAO7WH0vzlsiLerAE%2FdUSk3J%2BGdotMq0u6uMUtvVmRmNjheswAOHRCQCC1WVWvVW8ZxIGlrXxd1PkDwU%2FJ47e7q2FXxUsXVFFP42ecQPdAx0XlxfhIDk%2Fb%2FcJ3dc%2Fd%2FZcjBPBsFupC4G9S6jWMGpXkMhClIieLxn4ZeAjNbM%2BrY8pRv%2F64pvw2WYuAq84YHwLfEQicgHHQ1yFOmAhY6drv13sTrFXRvqb7WZnW98%2FSmqMH7sYrzpkHgUh9gw17Mo7pQV4ywBG7Ki6IwoJi1OeVU2hb0XdoD07GXp%2BDXLQ9HzzxCoUwts%2F7d883kLv0NdOHMPCJ%2B8YVBADJiXo3UrijBL5gifBVnJ8NpUf1wwDDHG%2FEo%2F8v9Sk98%2FCOTWKzHwMnFWI1FLiRROGDhd7ZFR9HLcbZ6OHj8eNs1qFKXXaoEWTqhI%2BjcwijugeV5TAZXw2%2Fa5Yz2q6kx5gf3SOE8gT%2BsX1QVA17UdpNVbDDz7ep1vv0EfK2z9vynHSf85Jfl6LmirhRYIjNJBC37nyouykYyCG8KEx1IntoYEdLwnFBGXSCrrCXFSvPmGnnxg%2FTKjmyMJ6S2cQGOqUBLC4WYwH0%2FVic%2BMo0mHDNHQi5azkmZwzE%2B9Zh0%2BBAYz9iCW1nzurzCCHJziPOohyCtiiT9BQnnqIc9d%2F2d1gvU%2FFxyVJ8ta9yO9EE55vtZ9zEPKdXxU%2B7%2BwsHLzlBzgS8pSkqZAryfSebC9gq0KZywNFMcRQMJkQWP4k1NZF3qMO5SxHbvPfwoxKKrr7bett%2FlJi9DsdyXFW4twdzEhPmRlY1dmYx&X-Amz-Signature=865e8af4c9fc0293c29002d838c93b39244a4b874d830065e5b25b323f8187fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BX6FH33%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGiYFAbP5TYNx39x0tfRkAsI%2BjFozHMiL95GsQTBCcMFAiEAnSZBO3AmZzFrp0uBWgjJ1TL18aqPJ3OJRD7mCmWkSQ0qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLicRPdicmhzU52PSrcA0nRdzIHtQ%2BHjZMADybojqWB5usTXQ%2BXQqJr85CknuKvvl48Zxr22y1F8DUAO7WH0vzlsiLerAE%2FdUSk3J%2BGdotMq0u6uMUtvVmRmNjheswAOHRCQCC1WVWvVW8ZxIGlrXxd1PkDwU%2FJ47e7q2FXxUsXVFFP42ecQPdAx0XlxfhIDk%2Fb%2FcJ3dc%2Fd%2FZcjBPBsFupC4G9S6jWMGpXkMhClIieLxn4ZeAjNbM%2BrY8pRv%2F64pvw2WYuAq84YHwLfEQicgHHQ1yFOmAhY6drv13sTrFXRvqb7WZnW98%2FSmqMH7sYrzpkHgUh9gw17Mo7pQV4ywBG7Ki6IwoJi1OeVU2hb0XdoD07GXp%2BDXLQ9HzzxCoUwts%2F7d883kLv0NdOHMPCJ%2B8YVBADJiXo3UrijBL5gifBVnJ8NpUf1wwDDHG%2FEo%2F8v9Sk98%2FCOTWKzHwMnFWI1FLiRROGDhd7ZFR9HLcbZ6OHj8eNs1qFKXXaoEWTqhI%2BjcwijugeV5TAZXw2%2Fa5Yz2q6kx5gf3SOE8gT%2BsX1QVA17UdpNVbDDz7ep1vv0EfK2z9vynHSf85Jfl6LmirhRYIjNJBC37nyouykYyCG8KEx1IntoYEdLwnFBGXSCrrCXFSvPmGnnxg%2FTKjmyMJ6S2cQGOqUBLC4WYwH0%2FVic%2BMo0mHDNHQi5azkmZwzE%2B9Zh0%2BBAYz9iCW1nzurzCCHJziPOohyCtiiT9BQnnqIc9d%2F2d1gvU%2FFxyVJ8ta9yO9EE55vtZ9zEPKdXxU%2B7%2BwsHLzlBzgS8pSkqZAryfSebC9gq0KZywNFMcRQMJkQWP4k1NZF3qMO5SxHbvPfwoxKKrr7bett%2FlJi9DsdyXFW4twdzEhPmRlY1dmYx&X-Amz-Signature=34280b325e32c3e5badcee8aecf45c29a62fbbdf272ab002dd458fb9bd3615a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
