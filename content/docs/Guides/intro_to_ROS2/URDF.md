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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPU5VRN2%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIHHoXeXL%2F%2FflSgbKOpaUXnX09953M9IoXLnToLBciRQIhAN113Sqg5RKdunizq0urU45l2f%2Bo5wp0vBGJScBkcYD5KogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBurJcUruP16bmQuEq3AOtwk5FFx058Sb7h0gCwY03QkIPCWiJseUahQKbTtW%2FjqK7aEAdz3LGZ8v4jaXrCbxAJui4JyzZ2VwBp6884%2BBbG5xjQuRKB0Xvo%2FWbFRnc6LGsK2L4Zo0a7QO9Hu9pVfH8zR2WCMJnU8Te92U1gXogL0%2FfvC9cqdgy9%2FP3PV5KEM4aeouvPkPrivuWaa%2FTcKLY8o%2FCTjAmeRJWnQN2CJXA6P6QwDQGljCAOYbmgV6hmgBaEffLOwEbPpNAX2ud11rKREbtaRi%2FQ1xqLSgKEasIggXd4GU4m1eZ%2FHeWbtcoTC8jHw1Z0ZJULIpuW%2BkLQaJXQsaqFhngWuK4nymspLNPzeU8Q6m7ScppwbAFrOMSTrMXCfkrCMBnVD1YCdwLF4mLxvR2meYIV40Ukcq18UVx6Vd7dnpsUlvh5xQDPrBoDYZIUgRDp2ZYh01yw7pdA1hmAwKIvpxlmlQVi2QYbczH62uYQt3Ub0Qa41Bi%2FhP9XdOoX3wk3KFfygmz7NaFUFiNbjNzTWpHMF4ax%2F98v1UeJQjO%2BL%2B%2Fv6eLadur8ZjjV1LyQAu9Z8%2F90HAWSNkw9NI4aY3ZZ1M2ycrueW%2FMkt8%2Bt5FrOo13%2BvUJqTvrqwK6UZ%2BdH5xgCnNzbj0dTjDnme7BBjqkAfTTSe0CQHktED3RTRwv%2BROPeywTA8HXZ7G8l6yMHOtu%2BW9woG8bu5B75CkTv17hLMP%2B5erNXYBa75tErsDoqwnJw1eLOTJskXLzF2zexkTTkfSDws%2B2jhPs1uz0iEl5L%2BameW67JfoDFXrqdEIJAQwlQE8AVCgWUkdaQ5HD9xWscMIC9CIhMLoMjNENfXCJtLv4AawHL9cUWxtc6ZYy3%2BsQsXz7&X-Amz-Signature=e145d1fbb0d7955e2deda0b3c4ada4c23711cb85b93304b79fb7f62565b4cc2e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPU5VRN2%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIHHoXeXL%2F%2FflSgbKOpaUXnX09953M9IoXLnToLBciRQIhAN113Sqg5RKdunizq0urU45l2f%2Bo5wp0vBGJScBkcYD5KogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBurJcUruP16bmQuEq3AOtwk5FFx058Sb7h0gCwY03QkIPCWiJseUahQKbTtW%2FjqK7aEAdz3LGZ8v4jaXrCbxAJui4JyzZ2VwBp6884%2BBbG5xjQuRKB0Xvo%2FWbFRnc6LGsK2L4Zo0a7QO9Hu9pVfH8zR2WCMJnU8Te92U1gXogL0%2FfvC9cqdgy9%2FP3PV5KEM4aeouvPkPrivuWaa%2FTcKLY8o%2FCTjAmeRJWnQN2CJXA6P6QwDQGljCAOYbmgV6hmgBaEffLOwEbPpNAX2ud11rKREbtaRi%2FQ1xqLSgKEasIggXd4GU4m1eZ%2FHeWbtcoTC8jHw1Z0ZJULIpuW%2BkLQaJXQsaqFhngWuK4nymspLNPzeU8Q6m7ScppwbAFrOMSTrMXCfkrCMBnVD1YCdwLF4mLxvR2meYIV40Ukcq18UVx6Vd7dnpsUlvh5xQDPrBoDYZIUgRDp2ZYh01yw7pdA1hmAwKIvpxlmlQVi2QYbczH62uYQt3Ub0Qa41Bi%2FhP9XdOoX3wk3KFfygmz7NaFUFiNbjNzTWpHMF4ax%2F98v1UeJQjO%2BL%2B%2Fv6eLadur8ZjjV1LyQAu9Z8%2F90HAWSNkw9NI4aY3ZZ1M2ycrueW%2FMkt8%2Bt5FrOo13%2BvUJqTvrqwK6UZ%2BdH5xgCnNzbj0dTjDnme7BBjqkAfTTSe0CQHktED3RTRwv%2BROPeywTA8HXZ7G8l6yMHOtu%2BW9woG8bu5B75CkTv17hLMP%2B5erNXYBa75tErsDoqwnJw1eLOTJskXLzF2zexkTTkfSDws%2B2jhPs1uz0iEl5L%2BameW67JfoDFXrqdEIJAQwlQE8AVCgWUkdaQ5HD9xWscMIC9CIhMLoMjNENfXCJtLv4AawHL9cUWxtc6ZYy3%2BsQsXz7&X-Amz-Signature=f165d777e56b8a6a9b39d444f2a4248f5088b9a54e2aec975a97c6b4ace6cbd3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
