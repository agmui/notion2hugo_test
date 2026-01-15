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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSWOPFIP%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCblEUmuIGAVoTma9c%2Fn0FhTHx1mKHvYhlrvJBOQHiPQgIhANUOwhlc5qgfU4Nuk38eGctE0K%2BaW0sifsGk5RDUfF%2BIKv8DCCoQABoMNjM3NDIzMTgzODA1Igx0JkGWJhJH7Eg3wuAq3APwS3aSA9RE2CIkfVZe58XzZmLkH2jWHTCLHDWXjgXliMcZA%2FzqSLyBHsh3I6Ldsd%2FAkIh1L9cYrLbGKZzvQ05SsEEHqouOePNZcLVmoC7nQQ6TXjPg1o36bjXJ0fdTJfhLKElVcsOHwZSK7XK8A%2FRyC7mxla6LsbnquW5x1VUJH%2BIuY6%2FdkAwIjYoYePbLtMGGHP3I1BG340AzxtbUvoHaLadvqFdvrf8dXgCfI2r3zdhLLnOLR1iC4dj5TtDOzRSPqNU%2FSNQJHdtOTUq18jaJBQV8PjJECc7C9FvGHBr0Ve2ozkZNgb%2FCr90mPKSq%2B3XL5kvEH9BT9jFCUMDK5pmfhBFQh%2Fin6Tr4rwjKybl5wIuRGgvb8ztn0pMnktwTiwVnJ6hKtZtT0tCjs47r7Lx9mZTfn%2BKbiISVe7Id4twewRkvBE536D6FzX4UN%2F6K1lY3FO6cUAlREkmf97z9XHprgzvXSecYsfMNyUAI9fVxDxDtaqGK%2FGHJaHg05XMNspr7LltkluUpnLzFKXH1fzLBM89pSDIQq7aN9IjNnGrve9tkVrAu2Vt26pBsv3YfngwRlb2c3X56DrpMcnH3RuVJ5DfAP8lUX4Tzu4hfPKpFXwNRVy4rcbvR9lcxoDCe%2F6DLBjqkATJz4fRPQf9yrSqm64iPr7BmI1ukhO3f8PPgSkWR4atbTYsN5pveaM%2Fko%2B1Mrb8BPsUwF4kBhlWWXAxDL68T2dIlO%2F3BVzhkfoSDnatjb8ShtFO2UQTeI1th52T0MYGgT7vubNG0dznHLsOuKsUPKCA3wcPTYCW1o85smps5nbwVSvyRMSY8PudIrhVNd2xkDmd8jGrw3R8XX5YrrtkB%2BZJx9JMy&X-Amz-Signature=b7cf908a56e73eef1a4c74164cd8b45c3b596302ec32dc3240092eb81b095aef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSWOPFIP%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCblEUmuIGAVoTma9c%2Fn0FhTHx1mKHvYhlrvJBOQHiPQgIhANUOwhlc5qgfU4Nuk38eGctE0K%2BaW0sifsGk5RDUfF%2BIKv8DCCoQABoMNjM3NDIzMTgzODA1Igx0JkGWJhJH7Eg3wuAq3APwS3aSA9RE2CIkfVZe58XzZmLkH2jWHTCLHDWXjgXliMcZA%2FzqSLyBHsh3I6Ldsd%2FAkIh1L9cYrLbGKZzvQ05SsEEHqouOePNZcLVmoC7nQQ6TXjPg1o36bjXJ0fdTJfhLKElVcsOHwZSK7XK8A%2FRyC7mxla6LsbnquW5x1VUJH%2BIuY6%2FdkAwIjYoYePbLtMGGHP3I1BG340AzxtbUvoHaLadvqFdvrf8dXgCfI2r3zdhLLnOLR1iC4dj5TtDOzRSPqNU%2FSNQJHdtOTUq18jaJBQV8PjJECc7C9FvGHBr0Ve2ozkZNgb%2FCr90mPKSq%2B3XL5kvEH9BT9jFCUMDK5pmfhBFQh%2Fin6Tr4rwjKybl5wIuRGgvb8ztn0pMnktwTiwVnJ6hKtZtT0tCjs47r7Lx9mZTfn%2BKbiISVe7Id4twewRkvBE536D6FzX4UN%2F6K1lY3FO6cUAlREkmf97z9XHprgzvXSecYsfMNyUAI9fVxDxDtaqGK%2FGHJaHg05XMNspr7LltkluUpnLzFKXH1fzLBM89pSDIQq7aN9IjNnGrve9tkVrAu2Vt26pBsv3YfngwRlb2c3X56DrpMcnH3RuVJ5DfAP8lUX4Tzu4hfPKpFXwNRVy4rcbvR9lcxoDCe%2F6DLBjqkATJz4fRPQf9yrSqm64iPr7BmI1ukhO3f8PPgSkWR4atbTYsN5pveaM%2Fko%2B1Mrb8BPsUwF4kBhlWWXAxDL68T2dIlO%2F3BVzhkfoSDnatjb8ShtFO2UQTeI1th52T0MYGgT7vubNG0dznHLsOuKsUPKCA3wcPTYCW1o85smps5nbwVSvyRMSY8PudIrhVNd2xkDmd8jGrw3R8XX5YrrtkB%2BZJx9JMy&X-Amz-Signature=d474ebd3b4be60b1de3d1aa8448e874d5999ba4927fd7a99f89472007ae95daa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
