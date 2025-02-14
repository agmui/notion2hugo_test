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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPDOI6XQ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCo92gDDDV5g1Y4U4ob7DwBI9aJBZfdpwDJyrJawE0AuQIhAIfkxegqMJCJj%2FdA8VUo0gE0P4o%2BpSvTXsu3CPUcys2YKv8DCDUQABoMNjM3NDIzMTgzODA1IgweA9GaGscrrWDFQO8q3AOukFSuq%2BUOQr8hWIdI2fEdbQ6AKBolKPGM00Li8ZxDhGJp%2FV2S%2FsjoFfOK%2FqhT5c1ZKITx4qzEhOlowLE1pKl66vG4rmK1M800Hmx9tz6SG%2FDCzUg1ksCvuwHqw1TEgHPwNOVaxcWKW8Mp4E1%2BJF%2FusA27ny0ZmK6YLdA4Mnv%2BFLe%2BTrM1IXJXycv0GeViQ0ZyS5W%2FKTUCXyllsGu8RZxpGNDmqgVTcNIkLdxbJ8vDKakf%2FyE8SSHC%2FGeLdCD7kKLSPmtP0D5yLTaenoFmIF0E6L3gaxsn7t1L63vhAEDCFBTEZCUAo11RanNPfMIYsofRdk5qwT%2FLlJYcKKYGhr7oEvMh4vqHsG0ckfUlxVvITB8p91bUmF32LfXL8%2Fim9b%2B3TWS3h5MXKklC8jF5TjXqUhrbUBaWk5O2PGFDCXqgiI926aAS0mTTfN%2F1WT0CpaYnmiKdrMY1D8PDKLwiXQ1zRjxHfFmd2QURc%2FT6oedkog4u7%2BFgL9AM8R8nRlaZyivQ81yXZC0MnqHJyRFx5%2B3gVlu3RhhvqYiJwpvWJgjhD342NOQqJfdRPPwoX6JL7EGojrm2AuGsDhEr9ifiHWCoSOvgpZoxAC4K7tyYsRxTjj2UJbDEH%2B%2BUPdpaXjC1tb69BjqkAdzMadQv3I8eoIHu5%2BWlvEDn210TpFhYFu4%2Ferd7Ls1JNX0tudJp%2FoTOBnur19ud6aV4jmxDlScDpuBpzVnewUYTX3Q2u8kS8C%2FaLh7Qd7Bo11T3ebL3BVKMavcWeiIkkbXEyamTjVa4pYp%2B%2BLAi3EmGFSzjXOEFZmxL%2B8rrzrZWohwjbB4z8e%2FfBCY9KDCq4ibvhM1mHQ5wO7kQzBY4N23WicYI&X-Amz-Signature=b033992598e4e12ad185e609e80f74da8c493d959027f35debfcd1bc240f39db&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPDOI6XQ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCo92gDDDV5g1Y4U4ob7DwBI9aJBZfdpwDJyrJawE0AuQIhAIfkxegqMJCJj%2FdA8VUo0gE0P4o%2BpSvTXsu3CPUcys2YKv8DCDUQABoMNjM3NDIzMTgzODA1IgweA9GaGscrrWDFQO8q3AOukFSuq%2BUOQr8hWIdI2fEdbQ6AKBolKPGM00Li8ZxDhGJp%2FV2S%2FsjoFfOK%2FqhT5c1ZKITx4qzEhOlowLE1pKl66vG4rmK1M800Hmx9tz6SG%2FDCzUg1ksCvuwHqw1TEgHPwNOVaxcWKW8Mp4E1%2BJF%2FusA27ny0ZmK6YLdA4Mnv%2BFLe%2BTrM1IXJXycv0GeViQ0ZyS5W%2FKTUCXyllsGu8RZxpGNDmqgVTcNIkLdxbJ8vDKakf%2FyE8SSHC%2FGeLdCD7kKLSPmtP0D5yLTaenoFmIF0E6L3gaxsn7t1L63vhAEDCFBTEZCUAo11RanNPfMIYsofRdk5qwT%2FLlJYcKKYGhr7oEvMh4vqHsG0ckfUlxVvITB8p91bUmF32LfXL8%2Fim9b%2B3TWS3h5MXKklC8jF5TjXqUhrbUBaWk5O2PGFDCXqgiI926aAS0mTTfN%2F1WT0CpaYnmiKdrMY1D8PDKLwiXQ1zRjxHfFmd2QURc%2FT6oedkog4u7%2BFgL9AM8R8nRlaZyivQ81yXZC0MnqHJyRFx5%2B3gVlu3RhhvqYiJwpvWJgjhD342NOQqJfdRPPwoX6JL7EGojrm2AuGsDhEr9ifiHWCoSOvgpZoxAC4K7tyYsRxTjj2UJbDEH%2B%2BUPdpaXjC1tb69BjqkAdzMadQv3I8eoIHu5%2BWlvEDn210TpFhYFu4%2Ferd7Ls1JNX0tudJp%2FoTOBnur19ud6aV4jmxDlScDpuBpzVnewUYTX3Q2u8kS8C%2FaLh7Qd7Bo11T3ebL3BVKMavcWeiIkkbXEyamTjVa4pYp%2B%2BLAi3EmGFSzjXOEFZmxL%2B8rrzrZWohwjbB4z8e%2FfBCY9KDCq4ibvhM1mHQ5wO7kQzBY4N23WicYI&X-Amz-Signature=6ee34c8d7d2ab1cc7a94ec2a72bc9b801de1eab52b99f976d2da156fa7353163&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
