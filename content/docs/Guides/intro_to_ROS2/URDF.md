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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YIZWSYY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIE0onS75ZxBiZE8c3QxXmWq09hiFp%2FnzWcRZiksf%2F7j1AiEAjn6nZsiX7n4j7bQmY4NdvpGnn%2FotIc%2F3Eh%2BO%2F4IWtGoqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnNaIowx73wQ8nJWCrcAzAvl%2Fv0eTWJPBfXNZXonDiKo7LLAKj40kiZ3JcvJilgPSz7h4LL%2BYgMNVD9hBNsZu0m6i2hf%2FMaXVdXS%2FVLlVEgq38VifS6GBJdlbiE9ycEeqHE%2BEDlhUzIOUQi6jVT2LPZrg3%2B%2F1otU1%2B2R%2Bcx7oU%2FHZqbelKen4ggZc8%2BCGE9iD%2FaJpGnYx0BcJX6u5yN%2B3jhoznEeDdM3pqdLYF49H6Vfod7wYgkp0M6bksgGHKe8h7fMlwOnG1EY29ouj6xWToHzym%2FmdvPlaXo5SE%2Fle%2FS2KjUGQgXlu51Cr50HEjmUIXPzxLwZ3QCGD71Pj4LvhjGuIJzLaYfV%2FRYpwMExQXuR20mTrkET0fcgFeHkfMfw7Qc4X%2FBCw5mOwDsdkDKf%2F7MfkayMZkzUZpQthD3ikOHCKHZL3pD6n7r7mzWFtj%2BpJuBNLvPaZ7Dmta1UnGrq9mN0PM1Ek7ubhM9pL%2FFJHXir267%2BHOc8SXAm%2F9Ih8UlBS%2F0eFyI3z%2B99QNsqHrBX8KrjiXySAIu3L3yWHJ4GTMP3Cp%2FT4CttLoXwwV8Ldcm8NRqntN%2FRUimFvi6aN2IKiUXuAe4t%2BwFKiB3REtO%2FDnaclnjJ9iMdclAn5tKH6YRoHuV1KzlGVmZSNqHMP%2F12sQGOqUBPthzKoR4tBN7D8EAqRKj6%2FDjQjx0fTD1HkhxJTi3tcwct4bA5Palur4bYS4bTAhJziKu9VLe3Z66N%2FCd9JxFu28FjLxZqIqdhSzx9j4HhmZ%2BUIFEgGzlRLpTkraM7P61jyL5GkfCJ6FiodIBAEiCJtbRQc7jTBiabSNTF0Zv%2BX%2FIa4i3ZAxAErsIXffXYsbiwi1%2BEhB0zLT%2BdmOv6ELoehF881yI&X-Amz-Signature=bf83686cc5a0b2d9c16f85afb72e1d9b298a8dc53135db75ebb0e89b0ba69414&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YIZWSYY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIE0onS75ZxBiZE8c3QxXmWq09hiFp%2FnzWcRZiksf%2F7j1AiEAjn6nZsiX7n4j7bQmY4NdvpGnn%2FotIc%2F3Eh%2BO%2F4IWtGoqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnNaIowx73wQ8nJWCrcAzAvl%2Fv0eTWJPBfXNZXonDiKo7LLAKj40kiZ3JcvJilgPSz7h4LL%2BYgMNVD9hBNsZu0m6i2hf%2FMaXVdXS%2FVLlVEgq38VifS6GBJdlbiE9ycEeqHE%2BEDlhUzIOUQi6jVT2LPZrg3%2B%2F1otU1%2B2R%2Bcx7oU%2FHZqbelKen4ggZc8%2BCGE9iD%2FaJpGnYx0BcJX6u5yN%2B3jhoznEeDdM3pqdLYF49H6Vfod7wYgkp0M6bksgGHKe8h7fMlwOnG1EY29ouj6xWToHzym%2FmdvPlaXo5SE%2Fle%2FS2KjUGQgXlu51Cr50HEjmUIXPzxLwZ3QCGD71Pj4LvhjGuIJzLaYfV%2FRYpwMExQXuR20mTrkET0fcgFeHkfMfw7Qc4X%2FBCw5mOwDsdkDKf%2F7MfkayMZkzUZpQthD3ikOHCKHZL3pD6n7r7mzWFtj%2BpJuBNLvPaZ7Dmta1UnGrq9mN0PM1Ek7ubhM9pL%2FFJHXir267%2BHOc8SXAm%2F9Ih8UlBS%2F0eFyI3z%2B99QNsqHrBX8KrjiXySAIu3L3yWHJ4GTMP3Cp%2FT4CttLoXwwV8Ldcm8NRqntN%2FRUimFvi6aN2IKiUXuAe4t%2BwFKiB3REtO%2FDnaclnjJ9iMdclAn5tKH6YRoHuV1KzlGVmZSNqHMP%2F12sQGOqUBPthzKoR4tBN7D8EAqRKj6%2FDjQjx0fTD1HkhxJTi3tcwct4bA5Palur4bYS4bTAhJziKu9VLe3Z66N%2FCd9JxFu28FjLxZqIqdhSzx9j4HhmZ%2BUIFEgGzlRLpTkraM7P61jyL5GkfCJ6FiodIBAEiCJtbRQc7jTBiabSNTF0Zv%2BX%2FIa4i3ZAxAErsIXffXYsbiwi1%2BEhB0zLT%2BdmOv6ELoehF881yI&X-Amz-Signature=3e449f386833ef01f06a06b6d02de38066a4573cc4157b848a44fc3b539041fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
