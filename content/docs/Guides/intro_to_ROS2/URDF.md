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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5VJYGB2%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSP%2BOUyev0KERM%2FFM7sYKd1gvFfvd5OV96I39fOxcz3AiEAqIoM8fhVx3oxVIt5MZ3t11dCeUGDb%2F%2Facx1XuLsCJk8q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDAgZQJM%2B9zpfwWBDVyrcA59zgvrpQCsbyM2w4KUiNzN7OE3ctQdWcI7SWoTspPjjwG0992X33KmN1uOOIkPiIT6qudaSNhOcVgYj%2BZEUfRPJfvtJb98AqIm8%2FedOnwrCNGAjhs2aHNkf3erHdJfdonSk4Ed5F1PJSwoeGEQHUrGKmwlLxnxAg2QUiWT3PURu7CymSIRI3qFiIAF0I4CHFO%2BJfpOtm50ily7tZOX%2Fh9Mm%2B7njLrVTywWTFakYnEFo7BNKMy2enTh978l7T2cJwYa1V0WPZtlRPAZ2iMfhvTZ5nQFu1wNUQK4De%2F%2FxMPILKhAGkTYKdyb6tJEmNW10T74YorZ37ufgcUTxUwVR3LKeFsS1Jsv4mWDP9sCQ6v8Gx%2BGo1rDxFj8twpo%2BsTfKnJ2O44g8mNAqLIhlMieZcuSQ4t07zEW5mLUwX3MMzzkHV2O1BjaJpt2oWc4pPfMrppsOrAP6dnNQ6pmKBjll4HLQDWspPRDn9hooc%2FxvaVCrlF1pUwcaOEX%2B7B9jx97KiqzDQ6%2FLRCmVHqET6zFgo5VmuAXKMk0zh5uAffz31rWfwRAJbtHGKo870wTXkmhHr7gh9MqDSfDWQRYKcW8vS%2FuCb6cYmm6ropDBbCtqCv6bvsDNQhAoS%2FcqdsjUMNHmhMAGOqUBACyTduHrCMtganK5F2gNr2qv1zExGIwkj9NzzZF6tfNb%2BAUXyEtVfviFRib5ByTvKk9uSR24cZoKBao83jpJA8eqXKkpqDlNBvhokJnY2m%2FFd2ANWNf6stqoJY5UbMejB7jxaVMDJAx9k41%2FLOqYp26kkM5d6QoSQsMZcKVixMTIeEjDJjtslg9NvzZ16pia0iTt3jjKZzGKaW8BIPkn2aJeQiMU&X-Amz-Signature=ab3a1ae738796e8e107debfa1b706c4c54442fa695d2698077a468879551da99&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5VJYGB2%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSP%2BOUyev0KERM%2FFM7sYKd1gvFfvd5OV96I39fOxcz3AiEAqIoM8fhVx3oxVIt5MZ3t11dCeUGDb%2F%2Facx1XuLsCJk8q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDAgZQJM%2B9zpfwWBDVyrcA59zgvrpQCsbyM2w4KUiNzN7OE3ctQdWcI7SWoTspPjjwG0992X33KmN1uOOIkPiIT6qudaSNhOcVgYj%2BZEUfRPJfvtJb98AqIm8%2FedOnwrCNGAjhs2aHNkf3erHdJfdonSk4Ed5F1PJSwoeGEQHUrGKmwlLxnxAg2QUiWT3PURu7CymSIRI3qFiIAF0I4CHFO%2BJfpOtm50ily7tZOX%2Fh9Mm%2B7njLrVTywWTFakYnEFo7BNKMy2enTh978l7T2cJwYa1V0WPZtlRPAZ2iMfhvTZ5nQFu1wNUQK4De%2F%2FxMPILKhAGkTYKdyb6tJEmNW10T74YorZ37ufgcUTxUwVR3LKeFsS1Jsv4mWDP9sCQ6v8Gx%2BGo1rDxFj8twpo%2BsTfKnJ2O44g8mNAqLIhlMieZcuSQ4t07zEW5mLUwX3MMzzkHV2O1BjaJpt2oWc4pPfMrppsOrAP6dnNQ6pmKBjll4HLQDWspPRDn9hooc%2FxvaVCrlF1pUwcaOEX%2B7B9jx97KiqzDQ6%2FLRCmVHqET6zFgo5VmuAXKMk0zh5uAffz31rWfwRAJbtHGKo870wTXkmhHr7gh9MqDSfDWQRYKcW8vS%2FuCb6cYmm6ropDBbCtqCv6bvsDNQhAoS%2FcqdsjUMNHmhMAGOqUBACyTduHrCMtganK5F2gNr2qv1zExGIwkj9NzzZF6tfNb%2BAUXyEtVfviFRib5ByTvKk9uSR24cZoKBao83jpJA8eqXKkpqDlNBvhokJnY2m%2FFd2ANWNf6stqoJY5UbMejB7jxaVMDJAx9k41%2FLOqYp26kkM5d6QoSQsMZcKVixMTIeEjDJjtslg9NvzZ16pia0iTt3jjKZzGKaW8BIPkn2aJeQiMU&X-Amz-Signature=2176b563ef8e7cf22c993990f385d80ff19d3cf5800f5a6040f5d8dac093d5c0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
