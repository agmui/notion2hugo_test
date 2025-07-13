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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OTBCEUJ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIHdWIc8i6Am6ei2e%2BMwK90w3ExHR%2FNBQouymCFXauAh7AiEAnuBbjIr6rGrCeXm%2BJsHi7oiC3xevZkFebk2YpIxmw4Qq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDOPKAWDz%2F2PKtlhqPSrcAy7OeF2VLytWQVK7y5N2XBCVKz%2Fu8LF7uJB2lj8EiJP2n0sakTgZfE6iIJlTbmbyM5%2BK3L%2BmEfbHt1SYtKhgwNSwaIdfodiisYZvab7VreDMxqYmLgOuzo1e%2F6aQRacsFeHiU%2FzkHsOvIcF0XQjfib8WPIfo3JlBF1M8%2B4l12I9tIDsBctmYys5gY3mt3PCGXACax23nMM0G664iks%2FCva19hiW87Yd%2FDSudvR86eC%2FQaMPEVdHp8ro8vG4oa7A7KYaBx%2FIrYKNLl84kSmQObq32nMJN7ynZrNAY4yT4uYxys6ZbLW%2BnnO7D2sJANuA83PbHZj9nqiUgueyoKf%2Fw8xRWbAoATZt39UUYdb5A7nhu%2Bz8v%2Fx1NkMtTZK428HKKDkBgnF8jcz4GZ7YbT35mip6a3QzPlFkzQlH9YXs3olF2qdI69qJn2Qjed%2FqUlUG9DBRECFJavtTmYXf3JsSh9FC3AhvVqnl0fVP29%2FnlbgBjcHurGD6XGHLe8dAS65gA%2BfxbaNS3WiQPwAEo%2BIuS9%2BuNO3ImHNfZ%2BcXCvxm2f4GGbQwKqSizx8wsMY6ph6VdJH37OHwTBsD6%2BBbPuWUllS8GC6cu5nflfkQ3GrJEoavQGz4hmhRK1sIIFrMwMODmz8MGOqUB4K4EZVbbqAjF0DMQdOsiJMsbW0k8UOQ39narCvivcrETKSvyHWiSol39FcbV10VYUAvAapKX3Au3jHx2lbBm99j2JknnQU08HRZ5%2BRhtk7brY5hrU0czr8sGFCITDSaJqspuGnVAxmvLf3JCVhc5wefycalJMFDm9DYWk4nGhAxFdcdnCO5vp%2Fib%2BFy1hqTg8PJ9EAqKvF6adlZQ8Hx%2BHMuPbBtl&X-Amz-Signature=b07ea7510818681d36b809714ca3d0aec91ba02981a7645c73cbeaba9e88909d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OTBCEUJ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIHdWIc8i6Am6ei2e%2BMwK90w3ExHR%2FNBQouymCFXauAh7AiEAnuBbjIr6rGrCeXm%2BJsHi7oiC3xevZkFebk2YpIxmw4Qq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDOPKAWDz%2F2PKtlhqPSrcAy7OeF2VLytWQVK7y5N2XBCVKz%2Fu8LF7uJB2lj8EiJP2n0sakTgZfE6iIJlTbmbyM5%2BK3L%2BmEfbHt1SYtKhgwNSwaIdfodiisYZvab7VreDMxqYmLgOuzo1e%2F6aQRacsFeHiU%2FzkHsOvIcF0XQjfib8WPIfo3JlBF1M8%2B4l12I9tIDsBctmYys5gY3mt3PCGXACax23nMM0G664iks%2FCva19hiW87Yd%2FDSudvR86eC%2FQaMPEVdHp8ro8vG4oa7A7KYaBx%2FIrYKNLl84kSmQObq32nMJN7ynZrNAY4yT4uYxys6ZbLW%2BnnO7D2sJANuA83PbHZj9nqiUgueyoKf%2Fw8xRWbAoATZt39UUYdb5A7nhu%2Bz8v%2Fx1NkMtTZK428HKKDkBgnF8jcz4GZ7YbT35mip6a3QzPlFkzQlH9YXs3olF2qdI69qJn2Qjed%2FqUlUG9DBRECFJavtTmYXf3JsSh9FC3AhvVqnl0fVP29%2FnlbgBjcHurGD6XGHLe8dAS65gA%2BfxbaNS3WiQPwAEo%2BIuS9%2BuNO3ImHNfZ%2BcXCvxm2f4GGbQwKqSizx8wsMY6ph6VdJH37OHwTBsD6%2BBbPuWUllS8GC6cu5nflfkQ3GrJEoavQGz4hmhRK1sIIFrMwMODmz8MGOqUB4K4EZVbbqAjF0DMQdOsiJMsbW0k8UOQ39narCvivcrETKSvyHWiSol39FcbV10VYUAvAapKX3Au3jHx2lbBm99j2JknnQU08HRZ5%2BRhtk7brY5hrU0czr8sGFCITDSaJqspuGnVAxmvLf3JCVhc5wefycalJMFDm9DYWk4nGhAxFdcdnCO5vp%2Fib%2BFy1hqTg8PJ9EAqKvF6adlZQ8Hx%2BHMuPbBtl&X-Amz-Signature=a7aca3df5a0392010e3ea984548a77cfcaf336c60057f81782305cc54a2a5621&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
