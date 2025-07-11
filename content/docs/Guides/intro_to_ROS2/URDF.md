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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFLQ5EG5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGg8QSUTBaSPH5YLKVv8I0pXPsz1OA8eJ4aYxLlKkfSXAiBrzlmVJtRxrBpawL4PIOVCcbcXaWiAAapkZ5%2F0GiZkrCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMib9oEYOt7kpPnkTRKtwDfHn4AyUrsuKR2OJPI0qvm4A%2BPlqGUo2CrtOjwN4MPnUYtZ7cyvodHYWANVF9y4YpcATwZF4HUkvaZs2mekKUjI0N5PJckhZiL%2Fizf7c9dGlEkBwiFdvs5jleiYBAvNdSUppjh%2B1qDm2Vd8vEw%2BCX%2FC3kK27n4G5AZCmUFQe2aTEPQuF2Z%2B8O6DhMATJ5B%2FZBDivzxZQqiXkkNiz4OjNBMiR%2FF2e1YWuq%2FZgdZ%2FlfNUg5DK9i77BAlWS86cC0skCbby62pjsjobh%2FNukQwpm8MGXw0s2WJ3TjPx4CbEZpl6RoQexcCoCLPPMGGRrHYvHf%2BBp%2B07JaMwQ%2FVZlsZsikouNorj2nw%2BD0uhAQrsfol5EwR%2FLJEwgiKMHycdm4WK%2FI05eI4BlOJq1w2xctLzmLY5A8QXj0BXgSPUN1xh5qj%2B4R9iYOzr1kVnYa%2BTQIbBMlrcvh1Ib2Ha%2FptfE%2Bz303%2BJlom%2FQ09DvJQ05B3jV1HBRs%2FyeyYgbzd5D7JMH7M6HInxkRTrb%2FkVV7zsZD2GOzG51Jp97kZS99Y588Ts%2B%2B1Xf7eLeDF5av17pqwU69no79ln7Iy357GRVdCR6ig1dfwWa4oCs7e0XQPzsdHsbrDMdlR1x%2BBLrQAMcSVwEwjtPCwwY6pgG0mBtnN7SbpynAGFYRyoY6hgekE7DXHXIPYJU4Gx%2FBDZQfMa2lix%2FY0h%2BDYirNlgTQGPxrN2gwkZgj1mECltQP2ySHm%2B200PgiStnSUJPeOnFTsldiBto9uZ4t7s%2BxrShtYXQieRA6grljJB8dDZnVQE34znKY2Zht62rwjMD8KgD%2Bzr0vY%2BH%2BBBByspPNfDatimLwKASCi4Z4NSFHO6W1xD9hTzxO&X-Amz-Signature=ec397a02476268b02dd55c8ee7ef831bd0e31341ea3300e8b2cea3be7afd20e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFLQ5EG5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGg8QSUTBaSPH5YLKVv8I0pXPsz1OA8eJ4aYxLlKkfSXAiBrzlmVJtRxrBpawL4PIOVCcbcXaWiAAapkZ5%2F0GiZkrCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMib9oEYOt7kpPnkTRKtwDfHn4AyUrsuKR2OJPI0qvm4A%2BPlqGUo2CrtOjwN4MPnUYtZ7cyvodHYWANVF9y4YpcATwZF4HUkvaZs2mekKUjI0N5PJckhZiL%2Fizf7c9dGlEkBwiFdvs5jleiYBAvNdSUppjh%2B1qDm2Vd8vEw%2BCX%2FC3kK27n4G5AZCmUFQe2aTEPQuF2Z%2B8O6DhMATJ5B%2FZBDivzxZQqiXkkNiz4OjNBMiR%2FF2e1YWuq%2FZgdZ%2FlfNUg5DK9i77BAlWS86cC0skCbby62pjsjobh%2FNukQwpm8MGXw0s2WJ3TjPx4CbEZpl6RoQexcCoCLPPMGGRrHYvHf%2BBp%2B07JaMwQ%2FVZlsZsikouNorj2nw%2BD0uhAQrsfol5EwR%2FLJEwgiKMHycdm4WK%2FI05eI4BlOJq1w2xctLzmLY5A8QXj0BXgSPUN1xh5qj%2B4R9iYOzr1kVnYa%2BTQIbBMlrcvh1Ib2Ha%2FptfE%2Bz303%2BJlom%2FQ09DvJQ05B3jV1HBRs%2FyeyYgbzd5D7JMH7M6HInxkRTrb%2FkVV7zsZD2GOzG51Jp97kZS99Y588Ts%2B%2B1Xf7eLeDF5av17pqwU69no79ln7Iy357GRVdCR6ig1dfwWa4oCs7e0XQPzsdHsbrDMdlR1x%2BBLrQAMcSVwEwjtPCwwY6pgG0mBtnN7SbpynAGFYRyoY6hgekE7DXHXIPYJU4Gx%2FBDZQfMa2lix%2FY0h%2BDYirNlgTQGPxrN2gwkZgj1mECltQP2ySHm%2B200PgiStnSUJPeOnFTsldiBto9uZ4t7s%2BxrShtYXQieRA6grljJB8dDZnVQE34znKY2Zht62rwjMD8KgD%2Bzr0vY%2BH%2BBBByspPNfDatimLwKASCi4Z4NSFHO6W1xD9hTzxO&X-Amz-Signature=1554f0ee33d0c17699cf2e476c6ad41237a22ebbebde1a17795b33fce0bf4f34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
