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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5E2NSAO%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIEgO0HYVxiEDa2If68kFSpKzgYbKcAlNWROxXPYyJaJ7AiEAvYHAOdckKqUsL3Qr77tGo7cBRjwc4BzaXWoSv1vjep4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmSY8t643dBeaGR4CrcA73xKBeSTiGxAmKNL22TdFcVDyFsiM6HKKe2ZcOm8ivpcxJHb9JT5cLjEy3qSIUHNEC0yMhc75bYfajZAVe0bLBmmKV%2BUC%2B5WTRotcDIC0Ouj2uNO0BlKXBNe7s6vwLUwAqoxFpQz0swklhMdbll7k%2BUXrrReL9YNd2Jg3Y9TOMaDoSjqCvW46MRMtyJLwyBvS6sOVviAYJLrCsjAO1m6CxdUtQhVtLu2gPuzzgeT0Jq2SQdbQunxmPFXJ87cRzxfezZB3cfilHIPHj0bZHP6LcEVK3paWZ56UoQmKS9qyttC8p%2FXJvpfokrS5Nct6q3MWBEoT0tbklWQE3t1M7eOOiOHAhqC8U4ou0ztEAubK7ysCQZlHNWJdoAewa6JccNsxAhy8eFf5LNHHgO7JrhxHc3A1tRK0EuqGaFKdUY5Xj%2BxbStsivChE4L5A%2FZ18AW5xb882xLl7%2F4KuXsal4t21wzg1G25oLMbCx0aXZrd4v0q%2FY5YTTpD%2Bif5Rb5lFr8eTORx9HuXJTTpuSwa%2BHq%2BHojRwpONPACOhKv994PFZetUfFqVSRNnBm7BIZqy9IKa%2Fbza%2FAg8VRkfHgXsk%2F%2BODHCU4GMxLCd3EinWDa8BOfattYw2XMkMOOXnbsvMK%2By4L8GOqUBqIuLsqfAR%2BJKRmd3SaXeI%2FWC1E9W4M%2Bn47hT2GqfXMJXRleCMVuVNWgEVtQPHuJZ9Pn1ImR7AsFOimzMFb6Ifaj36SOn47SFdtm1p5snubUPqIh8sRGiELsbUHaQNbXvMSTQzPIuXdFYFxoSPRfcUNR4FybLWKRhnilGhUTLKAM6n7rP9NLRecDL0NWCK4EgSNE42AGy6vx0YNPe8QmTVlzi9GhX&X-Amz-Signature=28653a177bbe8a4b6113add95372a1a4c88ae980ff176b9327b3168825c5dddd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5E2NSAO%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIEgO0HYVxiEDa2If68kFSpKzgYbKcAlNWROxXPYyJaJ7AiEAvYHAOdckKqUsL3Qr77tGo7cBRjwc4BzaXWoSv1vjep4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmSY8t643dBeaGR4CrcA73xKBeSTiGxAmKNL22TdFcVDyFsiM6HKKe2ZcOm8ivpcxJHb9JT5cLjEy3qSIUHNEC0yMhc75bYfajZAVe0bLBmmKV%2BUC%2B5WTRotcDIC0Ouj2uNO0BlKXBNe7s6vwLUwAqoxFpQz0swklhMdbll7k%2BUXrrReL9YNd2Jg3Y9TOMaDoSjqCvW46MRMtyJLwyBvS6sOVviAYJLrCsjAO1m6CxdUtQhVtLu2gPuzzgeT0Jq2SQdbQunxmPFXJ87cRzxfezZB3cfilHIPHj0bZHP6LcEVK3paWZ56UoQmKS9qyttC8p%2FXJvpfokrS5Nct6q3MWBEoT0tbklWQE3t1M7eOOiOHAhqC8U4ou0ztEAubK7ysCQZlHNWJdoAewa6JccNsxAhy8eFf5LNHHgO7JrhxHc3A1tRK0EuqGaFKdUY5Xj%2BxbStsivChE4L5A%2FZ18AW5xb882xLl7%2F4KuXsal4t21wzg1G25oLMbCx0aXZrd4v0q%2FY5YTTpD%2Bif5Rb5lFr8eTORx9HuXJTTpuSwa%2BHq%2BHojRwpONPACOhKv994PFZetUfFqVSRNnBm7BIZqy9IKa%2Fbza%2FAg8VRkfHgXsk%2F%2BODHCU4GMxLCd3EinWDa8BOfattYw2XMkMOOXnbsvMK%2By4L8GOqUBqIuLsqfAR%2BJKRmd3SaXeI%2FWC1E9W4M%2Bn47hT2GqfXMJXRleCMVuVNWgEVtQPHuJZ9Pn1ImR7AsFOimzMFb6Ifaj36SOn47SFdtm1p5snubUPqIh8sRGiELsbUHaQNbXvMSTQzPIuXdFYFxoSPRfcUNR4FybLWKRhnilGhUTLKAM6n7rP9NLRecDL0NWCK4EgSNE42AGy6vx0YNPe8QmTVlzi9GhX&X-Amz-Signature=e8022061a7b978a66374b9502ddaf8aa99556351ac60124c7e218f346d6184e6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
