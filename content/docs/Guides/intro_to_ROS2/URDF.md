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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBVRJ72Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8in6t2tpTW7jHark3QbtQ%2BDioRVqyND6k0p%2F1RClCDAIge%2BIBfQ24nZwKGIUfdrugHGhSuSAGcuNOnpUXQtov7EwqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1grcLqPd%2BYd03OvSrcA6EZyPwAyqboyVpoNzjYA1oCh1I5ZvJGuj8%2FJrD1uxdeT%2BO34EU1v9SZL%2Fj1kl7w%2B7ILn%2FkgBX4Ttqhfo8a7ULqibdGyKKu0aRMVCJ0OCd1ua57ZiPs9lgbR4GGmcEsVUZ47OnLwyRhkr5p4yP%2FYggBqSsJpC6%2BxOLV%2FDl6W5NTbt7k6EUwglNObqy7nF%2FyPIIPGQvPkdzzI799RDHQuHGGF7s12HC3eXkYFiRYQoMO%2B3A9oySarA0lc6%2FZp0wroB%2BuJUH617e6nU9cVAhs28hwfrXcmJTj5UmsRfzUEICDSPUmqXkS%2Fx1AK1NEtgEBY%2BXE0ba4nmcce1rcGaDqZcB7qps93SZS394RLNR17SgOOtr3x3Rviy%2BO78r%2FJD2UOPLf3Fhdgbby4n1C7rgleaieolt43Pfb8yVjPHhnZnglGEUM3nCH47deRa4DEGLYAbtihmaZ5gGyc6ML9ABJK9pPArY5Kq6ypEGhJJ7p%2FW5JeGShtaLMLecdCcpQlbIuWDWag6n4HbjYEx0ALQMD7FI11TsQScFQ9mu8U1Q%2FcDrt8gqW9LqFg4I7EwjiQ2lDysy2uH8v9j4xweP8vx4i9FATtxjrY8eH2m5f5uEaYSeDPgVETk7mqQyse2pksMNHB4cQGOqUBD%2FvSJSZGvfBrSt5WC1FsCTJEgfWjjHWiB3SB1xi3KYEAMUJ9ZR84S%2BU4COmltOn2Qn6%2BUvfty2cXHhnVPZH10QmHAFDl1kVqdG5aWHg72druMnI4G00C2JRjv54MOTx%2FjuYXrU3x6SoMPuuXIIgKkv9ePB0OTUDp5qNVIoYiU06xCXdr3LJFIvV1cKxy6jaPOItJQuAl1lEAX3uIpBU0QE9Yzh32&X-Amz-Signature=c64776cc9f12c082e8d089002e7483325c8b4ee38fcfad50dd3627dc7c5bff89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBVRJ72Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8in6t2tpTW7jHark3QbtQ%2BDioRVqyND6k0p%2F1RClCDAIge%2BIBfQ24nZwKGIUfdrugHGhSuSAGcuNOnpUXQtov7EwqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1grcLqPd%2BYd03OvSrcA6EZyPwAyqboyVpoNzjYA1oCh1I5ZvJGuj8%2FJrD1uxdeT%2BO34EU1v9SZL%2Fj1kl7w%2B7ILn%2FkgBX4Ttqhfo8a7ULqibdGyKKu0aRMVCJ0OCd1ua57ZiPs9lgbR4GGmcEsVUZ47OnLwyRhkr5p4yP%2FYggBqSsJpC6%2BxOLV%2FDl6W5NTbt7k6EUwglNObqy7nF%2FyPIIPGQvPkdzzI799RDHQuHGGF7s12HC3eXkYFiRYQoMO%2B3A9oySarA0lc6%2FZp0wroB%2BuJUH617e6nU9cVAhs28hwfrXcmJTj5UmsRfzUEICDSPUmqXkS%2Fx1AK1NEtgEBY%2BXE0ba4nmcce1rcGaDqZcB7qps93SZS394RLNR17SgOOtr3x3Rviy%2BO78r%2FJD2UOPLf3Fhdgbby4n1C7rgleaieolt43Pfb8yVjPHhnZnglGEUM3nCH47deRa4DEGLYAbtihmaZ5gGyc6ML9ABJK9pPArY5Kq6ypEGhJJ7p%2FW5JeGShtaLMLecdCcpQlbIuWDWag6n4HbjYEx0ALQMD7FI11TsQScFQ9mu8U1Q%2FcDrt8gqW9LqFg4I7EwjiQ2lDysy2uH8v9j4xweP8vx4i9FATtxjrY8eH2m5f5uEaYSeDPgVETk7mqQyse2pksMNHB4cQGOqUBD%2FvSJSZGvfBrSt5WC1FsCTJEgfWjjHWiB3SB1xi3KYEAMUJ9ZR84S%2BU4COmltOn2Qn6%2BUvfty2cXHhnVPZH10QmHAFDl1kVqdG5aWHg72druMnI4G00C2JRjv54MOTx%2FjuYXrU3x6SoMPuuXIIgKkv9ePB0OTUDp5qNVIoYiU06xCXdr3LJFIvV1cKxy6jaPOItJQuAl1lEAX3uIpBU0QE9Yzh32&X-Amz-Signature=7d20d924af54f3385069b27c23a95ee6897a55a068c90891739d1eef9fe4864b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
