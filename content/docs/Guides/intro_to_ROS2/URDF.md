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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632FTLMRO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICdSN7vH0JKM%2BxXLBgs68x3rqNBz0gzF5xiM%2BSDRM1OQAiEA8KJPn2T5tGZ34BsMzHPhjkWucF4Lk2OlvEuzja8dFP8q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFxBoR2jimA%2FUIK4gircAxmzbA56tKtRRT4SNbWc9AWPjok7TuOIHx3FEqZqDjslhNU6x8RZYC59P3wpSOfdmzYU7mIo6YjnrxI7q3JS6pLwDiaMSkwGgaoZJcLIL5EUNakYCFxAuCVrX1uCuQgpWWLVPdBioBpydhHKQpLc%2FtMGa%2Fsaq4l4x4T%2FKqEChWxNAO4Q1udHr%2B3Mkx1AgXrW198onRZMV4nct3YMnn1VOKMhvaQ2tA%2Fp%2FresQwZpkF949zxkrcFG%2F3sf4C2El8xlKGsvf%2BVv44ZuIxwbXho5B2sE5adoBXjh1l6E%2F9YwPV2dQl1IJLFJ30BApqrdS8dFjgKzqP1g%2B3ncg2eo8smPr9eYNRvt3aMwmEExVASC9SeqGXPRV9a0%2B%2FpM%2Bv73kzCbOYTvqGPP1%2BeYt5QN1lGGtDU7v4sh29PSpznCKDy%2FjcumynjEeH41ZM1NvmCRjWm3iOUyuXqHCF9avt96SOFHmGOzzrDS8xIwJJKDxMasSX2GONENWtdsoaqDckwhHo0rO4lJnwQ5UGXlJHt8OXgmLi%2F6Ios5Qq9cm%2BrvfdwDkZQau%2B0v82DowEx%2Bjk%2FJM8gJFa9sSVIx4iik5vtQYwCTJO0coqUSrPJ9w2DLnXhrZw3SUjtJ02kgkTCfb8wVMIHv%2B8QGOqUBbSoPuZRxGVjBBT195xOloMX26JOMdHeWEhfC9pVPkLhNMBjm78mq1e9n6%2BjHzgW3V0UigSN3eHfZXCeQ7Whabyz4%2B16%2B%2BDflcO5ryenwZgrHimcYKD0xrbeXun7dUNec8%2BotYtavZwlIXjKkeROFYbsB4Jpiz6jnU63BfII5wQr0TeFz9DOYGLN%2F5gbkcrrShCypQtuOmufgDzO34kPfQuNM0WF%2F&X-Amz-Signature=a4a9858a5c7e4ca9e96d910e3ab745582c99701cdafa518fefc76c9a667a5a0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632FTLMRO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICdSN7vH0JKM%2BxXLBgs68x3rqNBz0gzF5xiM%2BSDRM1OQAiEA8KJPn2T5tGZ34BsMzHPhjkWucF4Lk2OlvEuzja8dFP8q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFxBoR2jimA%2FUIK4gircAxmzbA56tKtRRT4SNbWc9AWPjok7TuOIHx3FEqZqDjslhNU6x8RZYC59P3wpSOfdmzYU7mIo6YjnrxI7q3JS6pLwDiaMSkwGgaoZJcLIL5EUNakYCFxAuCVrX1uCuQgpWWLVPdBioBpydhHKQpLc%2FtMGa%2Fsaq4l4x4T%2FKqEChWxNAO4Q1udHr%2B3Mkx1AgXrW198onRZMV4nct3YMnn1VOKMhvaQ2tA%2Fp%2FresQwZpkF949zxkrcFG%2F3sf4C2El8xlKGsvf%2BVv44ZuIxwbXho5B2sE5adoBXjh1l6E%2F9YwPV2dQl1IJLFJ30BApqrdS8dFjgKzqP1g%2B3ncg2eo8smPr9eYNRvt3aMwmEExVASC9SeqGXPRV9a0%2B%2FpM%2Bv73kzCbOYTvqGPP1%2BeYt5QN1lGGtDU7v4sh29PSpznCKDy%2FjcumynjEeH41ZM1NvmCRjWm3iOUyuXqHCF9avt96SOFHmGOzzrDS8xIwJJKDxMasSX2GONENWtdsoaqDckwhHo0rO4lJnwQ5UGXlJHt8OXgmLi%2F6Ios5Qq9cm%2BrvfdwDkZQau%2B0v82DowEx%2Bjk%2FJM8gJFa9sSVIx4iik5vtQYwCTJO0coqUSrPJ9w2DLnXhrZw3SUjtJ02kgkTCfb8wVMIHv%2B8QGOqUBbSoPuZRxGVjBBT195xOloMX26JOMdHeWEhfC9pVPkLhNMBjm78mq1e9n6%2BjHzgW3V0UigSN3eHfZXCeQ7Whabyz4%2B16%2B%2BDflcO5ryenwZgrHimcYKD0xrbeXun7dUNec8%2BotYtavZwlIXjKkeROFYbsB4Jpiz6jnU63BfII5wQr0TeFz9DOYGLN%2F5gbkcrrShCypQtuOmufgDzO34kPfQuNM0WF%2F&X-Amz-Signature=3647fdc73b5159c6680af9ed1d29c8735db1da6b3aacb40d17f68b478c96737b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
