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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDB6JFAU%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiSdwgjojUZLTPoIpQtBn1%2B0j6zUzOYJep%2FRhY1cY8WQIhAPWKVQD1i%2FDRzDcaym3shK4l5g0%2B%2BQfBJ5SYFxEWyjHnKv8DCFgQABoMNjM3NDIzMTgzODA1IgyggpPbVtzMvOE4LREq3AOQF0CEH8%2FvJeQgPv78vZjoeZPhTYlHA8Gs6JA5kDDAZL%2BCWjqg4eBRsF1sTsyc4F3tUG46wcTskyjLaAbpipC2LqqEqMeYBZFMxy5J3keW%2F9OULmzOB6UxyMPdVFkdJkYVc%2B21oIp1c66vhar1zic%2Bf1XFpl3Td1vwJpI5093hP9qeuYdsKpIuDTCIVTT6cCZQUgCU5Jzv3ovGgy5tO77tmx5nj7EEg%2FrtdkEGmEfmNM5aAiCg4wqNdR0AEGA5rCS6%2B4xuo9QgDBPuVjbychR5oO7RwtuqEFQ7Zv1t5czJrOVXGbkpkMMl%2BTcXjqDRJWsIQ0ZPCiixs3JACh%2Fq8UgRAExqBPP1ckunbJWobRbW0HxlQIucUj9xoZTs0%2Bkd1CPhiLNqkhcHcKKBuVa0isDdvaTKkalwFswkgBtsB%2F5QkfCYMvlkMKojE%2BlBA4NaBLJKcSo6ZmdDGr%2FsehA%2F%2F3wX7nuf1lo9TJYatZpjOdAQp19rK6VlD3VPvCQsCWXM%2BKhL8ZhYQvJH5pli3C7EgzuxxqKEoBjkvL5BvUBP2COHuYZKkG89I0b%2FNHogty1LhWdLY0XefBxwdSaNTfQrxoBEHmuH8kpWO3YQQC5LjAdrKq6M0oXi7QFnhEq%2BdjDw4KDBBjqkAUhA9mXKftIQ%2BmL%2F1lI2Vs0ziAN4ZzTR9m43RBgZmRxwIfDMIsbFlL%2Fh221DZXB1vS%2FhRHQdl7%2BFimXuYIbsvSzFygSv0uMcf%2B%2FJrTg31beeVPM4slKn6HvMvBrt3y2i4m7%2FjpPAyAxWi5EAUB6jgYt7LQ9OwRsFQdhZxM3bB3Y8bXBBLSXIqt8qlrmKwhQZhqSxCcn%2Byu33c3m2m9ZjQgVo6r1t&X-Amz-Signature=18a00e4cd20ec067659ccc1792e4efe0d1d4a84ae6939757f15ab8351096c07e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDB6JFAU%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiSdwgjojUZLTPoIpQtBn1%2B0j6zUzOYJep%2FRhY1cY8WQIhAPWKVQD1i%2FDRzDcaym3shK4l5g0%2B%2BQfBJ5SYFxEWyjHnKv8DCFgQABoMNjM3NDIzMTgzODA1IgyggpPbVtzMvOE4LREq3AOQF0CEH8%2FvJeQgPv78vZjoeZPhTYlHA8Gs6JA5kDDAZL%2BCWjqg4eBRsF1sTsyc4F3tUG46wcTskyjLaAbpipC2LqqEqMeYBZFMxy5J3keW%2F9OULmzOB6UxyMPdVFkdJkYVc%2B21oIp1c66vhar1zic%2Bf1XFpl3Td1vwJpI5093hP9qeuYdsKpIuDTCIVTT6cCZQUgCU5Jzv3ovGgy5tO77tmx5nj7EEg%2FrtdkEGmEfmNM5aAiCg4wqNdR0AEGA5rCS6%2B4xuo9QgDBPuVjbychR5oO7RwtuqEFQ7Zv1t5czJrOVXGbkpkMMl%2BTcXjqDRJWsIQ0ZPCiixs3JACh%2Fq8UgRAExqBPP1ckunbJWobRbW0HxlQIucUj9xoZTs0%2Bkd1CPhiLNqkhcHcKKBuVa0isDdvaTKkalwFswkgBtsB%2F5QkfCYMvlkMKojE%2BlBA4NaBLJKcSo6ZmdDGr%2FsehA%2F%2F3wX7nuf1lo9TJYatZpjOdAQp19rK6VlD3VPvCQsCWXM%2BKhL8ZhYQvJH5pli3C7EgzuxxqKEoBjkvL5BvUBP2COHuYZKkG89I0b%2FNHogty1LhWdLY0XefBxwdSaNTfQrxoBEHmuH8kpWO3YQQC5LjAdrKq6M0oXi7QFnhEq%2BdjDw4KDBBjqkAUhA9mXKftIQ%2BmL%2F1lI2Vs0ziAN4ZzTR9m43RBgZmRxwIfDMIsbFlL%2Fh221DZXB1vS%2FhRHQdl7%2BFimXuYIbsvSzFygSv0uMcf%2B%2FJrTg31beeVPM4slKn6HvMvBrt3y2i4m7%2FjpPAyAxWi5EAUB6jgYt7LQ9OwRsFQdhZxM3bB3Y8bXBBLSXIqt8qlrmKwhQZhqSxCcn%2Byu33c3m2m9ZjQgVo6r1t&X-Amz-Signature=4f6c73ec2a5578ce24e1d580af745d3ac10509c1f1d890f29b0f15b23934a83e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
