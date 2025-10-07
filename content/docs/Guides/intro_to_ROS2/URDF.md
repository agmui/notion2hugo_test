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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SZQ4AQE%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIG%2BKw8%2FRG1SNg6kG2yPhX59flDlcCzhKnbcKI535OSEpAiBTJVb1TTzU7VnQ3a2tYn6kPPjit%2Bl2lrb1hG6C57k7WSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2sqKJM9rlTstyBDOKtwDgorNGVyhKrn9aFOr6kp7FhOLIxHH15nJeXhvKDdiNTWA1OvM5doY4HO3w%2F%2F3eIwpT%2F3P%2FOt8AvsgfzTglkOxfEDB7zhRRWfx%2B9qWuX47bR58mi%2FsSOedfh41vuiG2UHl4f9j9bcjPW0bM%2B4b0%2F%2Bicfe50u9Kq5rMoXgFfVhvwGwdw%2FiT%2BZNKwAW96zfpHwv1npB0BYKKwxXS3kio2FH12cr2Hsl1RePxmw0eegCCPwtW5NDDQsavmHTAp15jVs2yuDjY%2F3O1uHcBdIL8zvSapg%2FHSTsxWNSxxrtA5exDdXN3eCjxx0uOH2m4e3E0OI7CAWik4pLBtzzc6NdBKjZmwbAOiYNupXwV%2BWxa9Kc6w8fzWj%2Ffi9o3ggOuKUGGk2Cv%2Fo6II9Ap4ZDvEkQ%2FHhuYkbuowO3nQ1CNVCC4zw2i2jI%2B3%2BrhdgktGb%2F2r1xMLBKuKy2TvNeSnDahrBDgUIf%2FjY6nMvjIsuYpIudmAqDc5Fo%2Bz7BdrIEAh9QVMwSmXQA%2FF87A037%2BcByH5ZgeIov9noxi%2FP3Cmasf9VdtgcaneMffbxMZ6B3jJm%2FDOSEBMeLu8EGmY6cYLuJKYuElw%2B1siY0B6%2BBGR6pIqLOAggAtCtVjjl8cqYJq%2F7iYLNIwzsmRxwY6pgE7OOnWO3fb8%2B97ICtwFZLPHN2D9ALeh%2Fg5s4BJwR4pfgNYheW8NunxsmqCkGp6DKDszS%2FFxw4n3yHe7n9oIWyn4yEWYCudK6LCuFM40SfWrSl6XDdLl6VfDBBDny4ULSdSh%2F7v6e36fuTHxbO5i5cdTc2ZXG8%2BvO%2B%2FAFCFO8US2nIJXlhCUFFzjWDvF95UwVO5ld7%2FRwePQ%2BjQqWQuU%2B7g67Dxp2XS&X-Amz-Signature=2998de415da94bfba1148a85754af1bed0248c30e5e6f520ea8634a6ba1c0602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SZQ4AQE%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIG%2BKw8%2FRG1SNg6kG2yPhX59flDlcCzhKnbcKI535OSEpAiBTJVb1TTzU7VnQ3a2tYn6kPPjit%2Bl2lrb1hG6C57k7WSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2sqKJM9rlTstyBDOKtwDgorNGVyhKrn9aFOr6kp7FhOLIxHH15nJeXhvKDdiNTWA1OvM5doY4HO3w%2F%2F3eIwpT%2F3P%2FOt8AvsgfzTglkOxfEDB7zhRRWfx%2B9qWuX47bR58mi%2FsSOedfh41vuiG2UHl4f9j9bcjPW0bM%2B4b0%2F%2Bicfe50u9Kq5rMoXgFfVhvwGwdw%2FiT%2BZNKwAW96zfpHwv1npB0BYKKwxXS3kio2FH12cr2Hsl1RePxmw0eegCCPwtW5NDDQsavmHTAp15jVs2yuDjY%2F3O1uHcBdIL8zvSapg%2FHSTsxWNSxxrtA5exDdXN3eCjxx0uOH2m4e3E0OI7CAWik4pLBtzzc6NdBKjZmwbAOiYNupXwV%2BWxa9Kc6w8fzWj%2Ffi9o3ggOuKUGGk2Cv%2Fo6II9Ap4ZDvEkQ%2FHhuYkbuowO3nQ1CNVCC4zw2i2jI%2B3%2BrhdgktGb%2F2r1xMLBKuKy2TvNeSnDahrBDgUIf%2FjY6nMvjIsuYpIudmAqDc5Fo%2Bz7BdrIEAh9QVMwSmXQA%2FF87A037%2BcByH5ZgeIov9noxi%2FP3Cmasf9VdtgcaneMffbxMZ6B3jJm%2FDOSEBMeLu8EGmY6cYLuJKYuElw%2B1siY0B6%2BBGR6pIqLOAggAtCtVjjl8cqYJq%2F7iYLNIwzsmRxwY6pgE7OOnWO3fb8%2B97ICtwFZLPHN2D9ALeh%2Fg5s4BJwR4pfgNYheW8NunxsmqCkGp6DKDszS%2FFxw4n3yHe7n9oIWyn4yEWYCudK6LCuFM40SfWrSl6XDdLl6VfDBBDny4ULSdSh%2F7v6e36fuTHxbO5i5cdTc2ZXG8%2BvO%2B%2FAFCFO8US2nIJXlhCUFFzjWDvF95UwVO5ld7%2FRwePQ%2BjQqWQuU%2B7g67Dxp2XS&X-Amz-Signature=fe25d3b70b7248aa8beb08990b010f4f2c7e9523c800dfa01c28e80eaa22bbc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
