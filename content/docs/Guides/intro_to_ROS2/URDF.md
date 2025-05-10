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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZOYR4FY%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T210543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCSrVf8zGoebFlk8o4LI09CiTna5D%2BUsP19heHdghxFoQIhAJTpXMYMMd3dKGmu5mWkVE%2B3kMexrpLh1prT7VkkRT4xKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzF8PC8XF6T3RDwagcq3AM80ExcyONAbxyQh84HbYyXUkMeJ%2FadwJnT5RJ%2FR0G3VfhaS5sw93MmY9rbbBKyTRBxAr6KSH7Bz1WU%2Fkn8%2Bh3F9Zc3CNZ1HnwG4KDSdmxMeM0jFosuY9UuPw4G5PBXbtlBG5sneVRNbtbx7jit50p7Vfv0kx5LHweM1VsAKJwB1ZFsGIHGE5sQ3IDwrIzVvpL4bKh2t2SDrE4Dj12TzVi2QbiX7rO5nLugCOCrlOuBbESok%2FJ%2BvyFEtv1v6yXCFhBd4XVZ2prEFX%2B1kFjTQlmCj0mcIEtLS8tRPSq7qhVbbpVMMywutZj9lYRAhiI2T94XNr6O7Vatx%2FwM3Kvnnth8fPYGamLYMDx0qeIV8ZDUJXpkua98cD6%2FrwE%2FuVpjdicUIl6Oc%2FUmN9uQwEr5CG5bqCLXgOW%2Bci9nQZRMVFS03i26l2TAhkWoviGvXCHkjqidcRppAf2fIggLSr8ClrjNzeYX0qhZJvWubIntsNmKecASNeKgcZp3OMd6KiXcwCIxgn4S%2B002cw5TrDwKOD5r6uOG9uYQPCSZu3V7LmBaDuql%2Fswis39zP66XIZo4RXFfUvDh5FQ2SDq5VwtKJNB2l%2BURo%2B4T2DGgm3xPhNnZ5%2BLpCYscv1jlJ6yUujC77P7ABjqkAUwhM95EMbAlCexRTIEe5wa9JPtjodEnar8GWiaW9HsHc289XLG%2ByLn1a5fK9h5jojhTHw7L2TgRGrNjiP6vXSr2EZMH4WmiFJhg8dEuuHxp4fobBElJHpH48mMSDUULZZbvJxvhqZsem1OYwoVngWJ3faVJfnO057Y2XZCxsrCpeEyQBO2qfMD5recFRZZANaJBd1bgQYS1d%2F1Bv%2BtL0LWAJJZi&X-Amz-Signature=5a013344b3699cde6190dcfc34ca0f6b43cd4aec7c513c1b8e673a86dd3ce3be&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZOYR4FY%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T210543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCSrVf8zGoebFlk8o4LI09CiTna5D%2BUsP19heHdghxFoQIhAJTpXMYMMd3dKGmu5mWkVE%2B3kMexrpLh1prT7VkkRT4xKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzF8PC8XF6T3RDwagcq3AM80ExcyONAbxyQh84HbYyXUkMeJ%2FadwJnT5RJ%2FR0G3VfhaS5sw93MmY9rbbBKyTRBxAr6KSH7Bz1WU%2Fkn8%2Bh3F9Zc3CNZ1HnwG4KDSdmxMeM0jFosuY9UuPw4G5PBXbtlBG5sneVRNbtbx7jit50p7Vfv0kx5LHweM1VsAKJwB1ZFsGIHGE5sQ3IDwrIzVvpL4bKh2t2SDrE4Dj12TzVi2QbiX7rO5nLugCOCrlOuBbESok%2FJ%2BvyFEtv1v6yXCFhBd4XVZ2prEFX%2B1kFjTQlmCj0mcIEtLS8tRPSq7qhVbbpVMMywutZj9lYRAhiI2T94XNr6O7Vatx%2FwM3Kvnnth8fPYGamLYMDx0qeIV8ZDUJXpkua98cD6%2FrwE%2FuVpjdicUIl6Oc%2FUmN9uQwEr5CG5bqCLXgOW%2Bci9nQZRMVFS03i26l2TAhkWoviGvXCHkjqidcRppAf2fIggLSr8ClrjNzeYX0qhZJvWubIntsNmKecASNeKgcZp3OMd6KiXcwCIxgn4S%2B002cw5TrDwKOD5r6uOG9uYQPCSZu3V7LmBaDuql%2Fswis39zP66XIZo4RXFfUvDh5FQ2SDq5VwtKJNB2l%2BURo%2B4T2DGgm3xPhNnZ5%2BLpCYscv1jlJ6yUujC77P7ABjqkAUwhM95EMbAlCexRTIEe5wa9JPtjodEnar8GWiaW9HsHc289XLG%2ByLn1a5fK9h5jojhTHw7L2TgRGrNjiP6vXSr2EZMH4WmiFJhg8dEuuHxp4fobBElJHpH48mMSDUULZZbvJxvhqZsem1OYwoVngWJ3faVJfnO057Y2XZCxsrCpeEyQBO2qfMD5recFRZZANaJBd1bgQYS1d%2F1Bv%2BtL0LWAJJZi&X-Amz-Signature=5f3608e31e3884120d12fc6028d1a5dd1935f6dd33df87c9ba97b96172be4222&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
