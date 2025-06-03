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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FX723VF%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIARSv%2BdqG8fbDHTgzJp3LZFwo4SpDCDV9r5huWfKynKuAiEAiCLeN%2FmemnGmLiKQJ7AJBJDrae%2FophR69S7%2F4dh13Ucq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDFJ%2Bsaoss4%2B%2BldpEZircA8e63jsarzxnYWh7OYbhTlPNFIS1SIw%2Fm7bQrYtm1HpNm7VGOahQi0l%2FdQdUPZ7X1OiW5SWW0A0lFLPLcYEAFTHW5y85kVNEPJUOn1GDOMwSbY5%2ByQbPMsG45i3SVMs10laJGr%2B0XLV02Ip9lSvvrZrgDH0tU6lFnHjdJFkdO7b8OYe46hNS5YCQr%2BA%2FK1fPm53BIpTMCnbGiDBvlzDiO72dOpnsnsWlSJNqCw6vk%2BLAF293OtqXZjgXXL7mOywyOI5NlbmVedgZs4EyJniTT%2BxKL1w6lb5qBmle8wNLmiBKorD%2B9fcLFDfmZmxEqVBXbr80BFF49jbbYK5DLz9oxUlRDcCD6DYPfTINMmgnAg5ZHfE88rHooMIic9asZyPqxpInKVORslKaInijpWyB3cKzKQGjVkNu8AhmGK%2FhKDeqTiir7UI4yi2acCHCxnq8EaZW2TvN4OMtyy%2BOC8CTXXs%2Bn2N1sL5nxl0Vj17e99IkbcnTH2P%2FDXNVM1tK6VgWMQZo09bFytVQ8Gfu9KDMUFSq6hUXUdvyF4P0bH%2BPMlaWapjunSeFiSnweuNZB8nsChR8yO%2F6Gy%2B%2BvJq0em7VSvRnZNpOtNit%2Fsmya3KIn2brKBmzj3GSSnybQHxQMKOt%2B8EGOqUBsmd2NnGM6jngN%2Br0aTA43IkNnpyBAum3cPbMaRFQKXzMzR4eYRiTCejWH%2BTX7D70locLMcktg%2Bnk9cZEXVNgUVPyM92ttD0NDfHLiIZG80MSJZhM94VcNZhidLeSwu5IHsbL717dNyagi5d9XO33oIlV9b7ZOW%2BGZXhtUUnq%2B%2B9hLHFxgSTUDTGZoHdOZg4755Fg92%2ByySqWQVeOUGRSkYuI8bfh&X-Amz-Signature=36846bf63b85111cb098ba9b64759655aaf4a966ef51f9c48f7eacb6b8f3276e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FX723VF%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIARSv%2BdqG8fbDHTgzJp3LZFwo4SpDCDV9r5huWfKynKuAiEAiCLeN%2FmemnGmLiKQJ7AJBJDrae%2FophR69S7%2F4dh13Ucq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDFJ%2Bsaoss4%2B%2BldpEZircA8e63jsarzxnYWh7OYbhTlPNFIS1SIw%2Fm7bQrYtm1HpNm7VGOahQi0l%2FdQdUPZ7X1OiW5SWW0A0lFLPLcYEAFTHW5y85kVNEPJUOn1GDOMwSbY5%2ByQbPMsG45i3SVMs10laJGr%2B0XLV02Ip9lSvvrZrgDH0tU6lFnHjdJFkdO7b8OYe46hNS5YCQr%2BA%2FK1fPm53BIpTMCnbGiDBvlzDiO72dOpnsnsWlSJNqCw6vk%2BLAF293OtqXZjgXXL7mOywyOI5NlbmVedgZs4EyJniTT%2BxKL1w6lb5qBmle8wNLmiBKorD%2B9fcLFDfmZmxEqVBXbr80BFF49jbbYK5DLz9oxUlRDcCD6DYPfTINMmgnAg5ZHfE88rHooMIic9asZyPqxpInKVORslKaInijpWyB3cKzKQGjVkNu8AhmGK%2FhKDeqTiir7UI4yi2acCHCxnq8EaZW2TvN4OMtyy%2BOC8CTXXs%2Bn2N1sL5nxl0Vj17e99IkbcnTH2P%2FDXNVM1tK6VgWMQZo09bFytVQ8Gfu9KDMUFSq6hUXUdvyF4P0bH%2BPMlaWapjunSeFiSnweuNZB8nsChR8yO%2F6Gy%2B%2BvJq0em7VSvRnZNpOtNit%2Fsmya3KIn2brKBmzj3GSSnybQHxQMKOt%2B8EGOqUBsmd2NnGM6jngN%2Br0aTA43IkNnpyBAum3cPbMaRFQKXzMzR4eYRiTCejWH%2BTX7D70locLMcktg%2Bnk9cZEXVNgUVPyM92ttD0NDfHLiIZG80MSJZhM94VcNZhidLeSwu5IHsbL717dNyagi5d9XO33oIlV9b7ZOW%2BGZXhtUUnq%2B%2B9hLHFxgSTUDTGZoHdOZg4755Fg92%2ByySqWQVeOUGRSkYuI8bfh&X-Amz-Signature=13bd9681a622da7a472f0af7632c8d0f3e61046aeee93e7fdfa98c1c2cb784d6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
