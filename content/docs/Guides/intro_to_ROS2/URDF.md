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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3JC3FIF%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIC2AI%2BMqNVaP2wEjp6KQdrO83tcM30E%2BYKeVaphMIDp%2BAiBoeIOMPZzhRgk0fJo9S6lUhRo%2Bo8sZOizDTdGnJIKFmSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMQ%2Bhhoeqd6NBo9cPhKtwDX8sm3C9sAXdMZG9MGufjWE3pYjBZ4HeSb9OvjuYUaSEU9LNWoSrFwGs60BmJjXGv2nJxm5Go0Rz9XgzL8qtDjjf8NOVmJzUmw%2B3vUdyOwbvERUCP3e%2BS%2BBxDvQ8GwLG0MZCaP6aXZyg04qchEo89WX0TVCfLgwvtpkxyqjuvGMzOaw3HfQynsxx5nqbS9tA0YsopH4SN9he8jy2OoqcYcaJf2Y6pa6IAJV5LBAa3m4RBNoLA41sRJsGqIut%2Fzo7HsdA8eFJ26ALxrcz%2BM%2FcjldGuYfPopr7CsFt0oOxNxcu41T%2FUOlrkGsdSvjgnNFjgctwel84nyz1vUWm4kBidavcpTKKFz4RjdVvSHwMAvDzWGe6%2B3q%2FK868NsbZYdE7GuSMc5JpjJx9xtN2HAmGqk%2FIdJ%2BAN8b2XAzjfwEuRH0oFliJMAqMxdvLoet8Cxnk9JP1bjVYOsax%2F45q1r2UUCsqSVzkoAMM0oAwVwoHBV36Ve1oogYfxsiSbLlZGCLdJrYpsjA08tLIQfYAUz8Jing83z1YSJGKAcEiT1jQB%2B6cKcaQtFiAoXSqK784qJkMYx2RQRkg0fXIP2uaIv4tcQgSHEGrQXynHLSUpYFX43KkEH%2B4pUBHXMKyYWfww%2BKXuwgY6pgHMm5fFp9%2FjvFxqQCgetR0nRedQ%2FktP%2BvRB8So0PVfMDc10QeqV0w7d1RmYbtVuDcvSOxMO6Ri393ffrplqMZv1f3bCoYUCd4iTkUdcvc9PxjbuGWN%2BdgNaVETdA%2F3sF5KlJLbz6RsHHOr8yh1fXwgvDdzWMYpxs6yWqd24yIpUsGA9m%2FypBIdohhcM%2FFwgZ0QPw%2FGro6BfJzGWB1fELiMcjo7kLibb&X-Amz-Signature=7f279dadcdc8711e7d0578a3cb9d443f80b98bbc62a8666a9b962c680fd7d48f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3JC3FIF%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIC2AI%2BMqNVaP2wEjp6KQdrO83tcM30E%2BYKeVaphMIDp%2BAiBoeIOMPZzhRgk0fJo9S6lUhRo%2Bo8sZOizDTdGnJIKFmSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMQ%2Bhhoeqd6NBo9cPhKtwDX8sm3C9sAXdMZG9MGufjWE3pYjBZ4HeSb9OvjuYUaSEU9LNWoSrFwGs60BmJjXGv2nJxm5Go0Rz9XgzL8qtDjjf8NOVmJzUmw%2B3vUdyOwbvERUCP3e%2BS%2BBxDvQ8GwLG0MZCaP6aXZyg04qchEo89WX0TVCfLgwvtpkxyqjuvGMzOaw3HfQynsxx5nqbS9tA0YsopH4SN9he8jy2OoqcYcaJf2Y6pa6IAJV5LBAa3m4RBNoLA41sRJsGqIut%2Fzo7HsdA8eFJ26ALxrcz%2BM%2FcjldGuYfPopr7CsFt0oOxNxcu41T%2FUOlrkGsdSvjgnNFjgctwel84nyz1vUWm4kBidavcpTKKFz4RjdVvSHwMAvDzWGe6%2B3q%2FK868NsbZYdE7GuSMc5JpjJx9xtN2HAmGqk%2FIdJ%2BAN8b2XAzjfwEuRH0oFliJMAqMxdvLoet8Cxnk9JP1bjVYOsax%2F45q1r2UUCsqSVzkoAMM0oAwVwoHBV36Ve1oogYfxsiSbLlZGCLdJrYpsjA08tLIQfYAUz8Jing83z1YSJGKAcEiT1jQB%2B6cKcaQtFiAoXSqK784qJkMYx2RQRkg0fXIP2uaIv4tcQgSHEGrQXynHLSUpYFX43KkEH%2B4pUBHXMKyYWfww%2BKXuwgY6pgHMm5fFp9%2FjvFxqQCgetR0nRedQ%2FktP%2BvRB8So0PVfMDc10QeqV0w7d1RmYbtVuDcvSOxMO6Ri393ffrplqMZv1f3bCoYUCd4iTkUdcvc9PxjbuGWN%2BdgNaVETdA%2F3sF5KlJLbz6RsHHOr8yh1fXwgvDdzWMYpxs6yWqd24yIpUsGA9m%2FypBIdohhcM%2FFwgZ0QPw%2FGro6BfJzGWB1fELiMcjo7kLibb&X-Amz-Signature=d130e066e207cac35d7c02b2d42aac57d53a830a7f428bf74f33767618ecdfc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
