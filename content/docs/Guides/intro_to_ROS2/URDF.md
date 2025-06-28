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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNJ2FNFQ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcWQ7%2F4327VlqxYzCOgyMI4Xq%2FK20LaGiersrAH9N7tgIganq4R5M50RfKTk%2FwRhvSI%2FR5deJyOBrR7xoYPs%2F9IoUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuPpRnLfBF%2BrhB83ircA8fVigp90NHuZNYt3GFe1w0xSiQTnymtRR6A8E68v8aNWnEtpiTzWWs%2BzR1QgWMufEHCu7UFTyHxuUQCBjkrbCITBIWqAtPspPtiQciclBDpCd1HM%2BdEEZzbpnkh%2FqO31%2FpK26i5OfemMLERsXDrtLyeQwirdkLA7rQ%2F0BxbTL0xYq9Ksux5rUiP1u4hbBXZEH8VXoVityzL%2BRrGyfsH5jQB7bWYVwXgfGrLS9ar15ze1liDTa5GCTqCnj1zYBnOAhXPJCwbr08G47jArOI8P6KuCkyN56c6MGiirzosqBXJkobB%2FgyCL8RxGqWwkVrsGqimxEo13QKqvVyQ%2FYvJh9XWQIw2UvI0K%2Bct3LTOLqghXMKalyOHJwhQG4x1vxyX8pNzdHaWWoK5eWr9LHL8kuJxJw%2Fd5sv6XTqHKNyvEN%2FRRTBp5L9DmvdX2xfgk8KlfI9%2B0Dc59%2BYpP2dplBf7qg2%2B6s3THOEb%2B9G1MCeq28qBvByVxurc3CPPqJlbdkQ3qzHTB7zda6E9cBz7QVwBIcFisZ6akOUvviWohG3MQhR5IB9PwPE7AfGJ0eLstLlNiazFSifPiUCGUvV8N8u9WIQ8ODie5zElqW4tvDF6lv%2FpTO%2FKyhAIRzWt9RTsMJjS%2FcIGOqUBpfSVhnLV9lYnZkYGKXPV6RQYwCGA2iV3kyl4O5rH8ZmLcms8DKztPcTEMHYjUsl095DTdlxScf%2FLfbSLe3y8c4%2FVoF%2FCEVtZ3yFOLCvbjfrUzVgA%2BElBfSRjDO59WwpEPY%2Bd8SAyhDPtRxVAtGZxv3X%2B8a2eQ0Z%2BIjGT9PIpUPkBFiEZjOvgJP3jRHVdDUVp19zl87i4PEZrgp6Ak%2Fqn4cdTXEgb&X-Amz-Signature=b14d4098cd740297c33d26c8f0261b6f4a6a856c1f468da7834170916db09f3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNJ2FNFQ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcWQ7%2F4327VlqxYzCOgyMI4Xq%2FK20LaGiersrAH9N7tgIganq4R5M50RfKTk%2FwRhvSI%2FR5deJyOBrR7xoYPs%2F9IoUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuPpRnLfBF%2BrhB83ircA8fVigp90NHuZNYt3GFe1w0xSiQTnymtRR6A8E68v8aNWnEtpiTzWWs%2BzR1QgWMufEHCu7UFTyHxuUQCBjkrbCITBIWqAtPspPtiQciclBDpCd1HM%2BdEEZzbpnkh%2FqO31%2FpK26i5OfemMLERsXDrtLyeQwirdkLA7rQ%2F0BxbTL0xYq9Ksux5rUiP1u4hbBXZEH8VXoVityzL%2BRrGyfsH5jQB7bWYVwXgfGrLS9ar15ze1liDTa5GCTqCnj1zYBnOAhXPJCwbr08G47jArOI8P6KuCkyN56c6MGiirzosqBXJkobB%2FgyCL8RxGqWwkVrsGqimxEo13QKqvVyQ%2FYvJh9XWQIw2UvI0K%2Bct3LTOLqghXMKalyOHJwhQG4x1vxyX8pNzdHaWWoK5eWr9LHL8kuJxJw%2Fd5sv6XTqHKNyvEN%2FRRTBp5L9DmvdX2xfgk8KlfI9%2B0Dc59%2BYpP2dplBf7qg2%2B6s3THOEb%2B9G1MCeq28qBvByVxurc3CPPqJlbdkQ3qzHTB7zda6E9cBz7QVwBIcFisZ6akOUvviWohG3MQhR5IB9PwPE7AfGJ0eLstLlNiazFSifPiUCGUvV8N8u9WIQ8ODie5zElqW4tvDF6lv%2FpTO%2FKyhAIRzWt9RTsMJjS%2FcIGOqUBpfSVhnLV9lYnZkYGKXPV6RQYwCGA2iV3kyl4O5rH8ZmLcms8DKztPcTEMHYjUsl095DTdlxScf%2FLfbSLe3y8c4%2FVoF%2FCEVtZ3yFOLCvbjfrUzVgA%2BElBfSRjDO59WwpEPY%2Bd8SAyhDPtRxVAtGZxv3X%2B8a2eQ0Z%2BIjGT9PIpUPkBFiEZjOvgJP3jRHVdDUVp19zl87i4PEZrgp6Ak%2Fqn4cdTXEgb&X-Amz-Signature=18d5ccddf407b20e7898837380e7384c0f251ee338be4c4704717d5f3901367e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
