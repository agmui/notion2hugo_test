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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOL6EMMW%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCmoutUVzpaWVllQNr56DEP29e7tuzwxEpnKAwyjg0UBgIhALu5GOLkmfkx3vlNuVVDPfeoAL%2BXLsIWoHXbS58bMmfvKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2KUJ9qZQ8yombLxoq3ANagLY0w45q47iOJljD7qdE2qRDk3dEV8qTfA7APoGms13Z3DbZJ8mTKda%2F4Hfu4GnKGDzlw9FwvcO0v7QJKZZ919eUxezaQzmeQvyblZ64yHO1ksCyAAIoWhxbMzx%2BExWV4dD4zOk7n1KLYqVxd3AiSSK6FKsO7%2BFgP6xtaiYOD1ccfW7r%2BSxvqPUnpznFnBTyaEfIszMc%2BzVjtZXlcYhP542AutE4s85VFb6BflO0v1NoFvXPJHy%2BBxl3SMq8r%2BkoiSh60JejOOejSFchVvXX0xUbRr37iA2edll%2Bmh5iltsiLqDvgNhddhniHrv1vATDX3M6aItM8zoY1%2BoFb6K8gZ%2Flz80nJTSadWWUUC82yW8HOHHA7RJ5KWN3TEvNRIXwrpjBJHwcMqr35UYwZDQl%2B4KK9VU9liZSlDKHc1NsUWPJa4ByhioFyjh5gyRo4DK1Bj7UeSCDf8HYE%2FwHXS1C57tRf6vHLNFZ%2FQvv%2BGt50o8KC8FZehYNbhIn2wwvXw9KHrSPeeLfnsSLU%2FfHKwM1mC%2FUxYvUHOn0QuXoEJSZG%2Ft19oKP%2BfeSS34m%2Bv2xIKHxz6MKqCnI0r6PQYM5HgduhmLfipRcea0jVed8BEc7gEtUyPBtp4ebQD2AmTCG09XEBjqkAVRYLke3xOLKFSjMp8HDPOoy6e38LyuT2lpfCKefyKZi%2Fj50g%2Fpu8mKVZQKwic793AbHRDlgHqCHhOdc1i61ctKmCux3zEXrMbJzzsXfrz7rfnI%2FLCioqCkm%2BZiG%2FLW73ngd5zd8w7NGnWvMRLovaSwUVEkL4BAoTkVuftjtu5xZIL%2FF%2FF2sXNTZUlbYVuKo67FEs9nQr0QQIeSEjmMTCY%2FdNAX7&X-Amz-Signature=96bae6a63db32230094442741c73c931831e59afd0534dc6a86d0ac054b8efa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOL6EMMW%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCmoutUVzpaWVllQNr56DEP29e7tuzwxEpnKAwyjg0UBgIhALu5GOLkmfkx3vlNuVVDPfeoAL%2BXLsIWoHXbS58bMmfvKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2KUJ9qZQ8yombLxoq3ANagLY0w45q47iOJljD7qdE2qRDk3dEV8qTfA7APoGms13Z3DbZJ8mTKda%2F4Hfu4GnKGDzlw9FwvcO0v7QJKZZ919eUxezaQzmeQvyblZ64yHO1ksCyAAIoWhxbMzx%2BExWV4dD4zOk7n1KLYqVxd3AiSSK6FKsO7%2BFgP6xtaiYOD1ccfW7r%2BSxvqPUnpznFnBTyaEfIszMc%2BzVjtZXlcYhP542AutE4s85VFb6BflO0v1NoFvXPJHy%2BBxl3SMq8r%2BkoiSh60JejOOejSFchVvXX0xUbRr37iA2edll%2Bmh5iltsiLqDvgNhddhniHrv1vATDX3M6aItM8zoY1%2BoFb6K8gZ%2Flz80nJTSadWWUUC82yW8HOHHA7RJ5KWN3TEvNRIXwrpjBJHwcMqr35UYwZDQl%2B4KK9VU9liZSlDKHc1NsUWPJa4ByhioFyjh5gyRo4DK1Bj7UeSCDf8HYE%2FwHXS1C57tRf6vHLNFZ%2FQvv%2BGt50o8KC8FZehYNbhIn2wwvXw9KHrSPeeLfnsSLU%2FfHKwM1mC%2FUxYvUHOn0QuXoEJSZG%2Ft19oKP%2BfeSS34m%2Bv2xIKHxz6MKqCnI0r6PQYM5HgduhmLfipRcea0jVed8BEc7gEtUyPBtp4ebQD2AmTCG09XEBjqkAVRYLke3xOLKFSjMp8HDPOoy6e38LyuT2lpfCKefyKZi%2Fj50g%2Fpu8mKVZQKwic793AbHRDlgHqCHhOdc1i61ctKmCux3zEXrMbJzzsXfrz7rfnI%2FLCioqCkm%2BZiG%2FLW73ngd5zd8w7NGnWvMRLovaSwUVEkL4BAoTkVuftjtu5xZIL%2FF%2FF2sXNTZUlbYVuKo67FEs9nQr0QQIeSEjmMTCY%2FdNAX7&X-Amz-Signature=8eb6eabb3d71f72ba31f45790db8a418052c41ae4e55d68aa771314146aeca14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
