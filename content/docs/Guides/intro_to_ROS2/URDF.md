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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCRH7ZS6%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGykEo8LsVrphxntj%2FqtVCo52c%2BPpxY964EWOfTb5hK8AiEAvT0c4La6YacB0bmk%2Fm%2Fdk6AOvJCzzPSUF9TlumEJdF4q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDL6u82RawZX03bZP6yrcA4I%2FO%2F2eQpuLHdGuWPU9XioYMFZrQFFtt2ybwcXnErx%2FLKlxoyUdv419cbeEQlgtOx4K8A7O%2FfUbHG8jdw7mJrnlvS25Za6Q3nL5pX8CStAIK%2F6b3OakhKE5mpCK5PXocCCKsgJu6e4Hon3L%2BF56hLuhl8Rd5TqaK5lO%2B5CwgcN%2BLWy3FhXqI1iuQ8QTBB02pCJlGJ3fAUdrZ5EnyXlzFlBZNi9TFt1A%2BUKTyOQRSPgDshxfI9OAY1hE7wDCUVxMGlkTBfChGKtHxbKaSvWJqabFsFNhXMGsMcLijNM1ybATx%2F%2BqFHk3amNffNal2UrBzeqbx9NgN%2FEIWZrSgXjf1nglNcNtw1tiRuh57fZW%2BhenOjQ%2Bs%2Fz4ydY9S9KQgp7e%2BOKZ9GxeyM8Jnss%2FZNXaHufUJSvWEFl2X4mmJRsdaptCrBDIow8JVUIuSdpHuMnWqFBsromNRCKCSyXN4ddyxNP%2BGOT8Neblr75wNnmNhhk%2FJgFCrkYx1anIcXma0KdaiX3sC7rN%2Fr4DPcGciSXXfuPdD34BPyGfxAC3eJoEci06%2BtlXuAX0w10SMT9ijRqQHfqSe7phZOiYs6ZuMXHGgLTNBUsHfbMDIddBMfvZKu1KlJPWa5EiTclI4FitMO2M%2Bb8GOqUBh44fQ4i9SU%2BG%2FGkSKH7C3Yt1YCp4IU7x%2B1e3oUI4K4Nr0QokbLesu0RdFTLPtwg89DeoMjV%2BspLpIMIh%2BDCBmt8BUILn2Zm1%2B5CUn4DKEg%2B%2B5yhyme6ZFYREQrTikiF5r1gIG4VwQ0urfV9YOZq%2FzFSeTz5TJzE8rwiIXN%2BnpCgDjrt7cX%2Fyt5rVQtLbcpKxL9dyNA4FYHT4B%2F%2Bq4Paw4b3DXfYK&X-Amz-Signature=0a0affe0d0f14d8d5ac4d7abdae1c0bfa5a6d757db5f79fd5b83a39dede6e790&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCRH7ZS6%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGykEo8LsVrphxntj%2FqtVCo52c%2BPpxY964EWOfTb5hK8AiEAvT0c4La6YacB0bmk%2Fm%2Fdk6AOvJCzzPSUF9TlumEJdF4q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDL6u82RawZX03bZP6yrcA4I%2FO%2F2eQpuLHdGuWPU9XioYMFZrQFFtt2ybwcXnErx%2FLKlxoyUdv419cbeEQlgtOx4K8A7O%2FfUbHG8jdw7mJrnlvS25Za6Q3nL5pX8CStAIK%2F6b3OakhKE5mpCK5PXocCCKsgJu6e4Hon3L%2BF56hLuhl8Rd5TqaK5lO%2B5CwgcN%2BLWy3FhXqI1iuQ8QTBB02pCJlGJ3fAUdrZ5EnyXlzFlBZNi9TFt1A%2BUKTyOQRSPgDshxfI9OAY1hE7wDCUVxMGlkTBfChGKtHxbKaSvWJqabFsFNhXMGsMcLijNM1ybATx%2F%2BqFHk3amNffNal2UrBzeqbx9NgN%2FEIWZrSgXjf1nglNcNtw1tiRuh57fZW%2BhenOjQ%2Bs%2Fz4ydY9S9KQgp7e%2BOKZ9GxeyM8Jnss%2FZNXaHufUJSvWEFl2X4mmJRsdaptCrBDIow8JVUIuSdpHuMnWqFBsromNRCKCSyXN4ddyxNP%2BGOT8Neblr75wNnmNhhk%2FJgFCrkYx1anIcXma0KdaiX3sC7rN%2Fr4DPcGciSXXfuPdD34BPyGfxAC3eJoEci06%2BtlXuAX0w10SMT9ijRqQHfqSe7phZOiYs6ZuMXHGgLTNBUsHfbMDIddBMfvZKu1KlJPWa5EiTclI4FitMO2M%2Bb8GOqUBh44fQ4i9SU%2BG%2FGkSKH7C3Yt1YCp4IU7x%2B1e3oUI4K4Nr0QokbLesu0RdFTLPtwg89DeoMjV%2BspLpIMIh%2BDCBmt8BUILn2Zm1%2B5CUn4DKEg%2B%2B5yhyme6ZFYREQrTikiF5r1gIG4VwQ0urfV9YOZq%2FzFSeTz5TJzE8rwiIXN%2BnpCgDjrt7cX%2Fyt5rVQtLbcpKxL9dyNA4FYHT4B%2F%2Bq4Paw4b3DXfYK&X-Amz-Signature=487bc9c0405d19c0a9cbb77fbd8e5e94edf87b076d4f510ac4ba5814877aeaea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
