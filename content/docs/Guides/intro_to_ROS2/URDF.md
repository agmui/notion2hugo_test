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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644GW7FKF%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIDlSBsS5wuoOALH4U7XiUeJEwDbsZUIILHcx8oMjMaxvAiAjmjG%2B9MQ40cyPw59ueQuSy%2BH64fmkJ8WKK7RD%2BLKRiiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwjv%2FmohqmyBGTTOXKtwDuk00u2wpZy1GtEcbx80uNTIfn1bOQk25FesF4CUau6PHOMILvDC3jt37fDj3yRIpgULc0oRI1iIa8P5%2BdwQlNU5%2BUPWHaop%2BXJpwxpIeM%2Be%2BhhxtbWp1PK9VrNjV1wT4b78LQ%2BD6QyfUB6TBMHqAd8VHO4IxTsZJo%2FHoTWSiRpRKB8Advnh4uSnmgZFV6i3HV7G93pAWoF8fNcr2MLCxzdhR3Evg7YFlr%2FMkf%2FthDCnytN%2FuVObVMFuryRcSTqd5k09ASG8jClZZqnMRQwy7YD2uVrceRfUSuKaAmHeM3esYbZUTr6og4j8INB8VMLv%2F3i7axHQNyrYYa8gV4a4GoP%2Be7G45RpGdfNd54L6dWIFCd1XnU15y9ncJ7ecrpuhox7tJnlWIpox%2FruxX5KuHjOam0MIXJubxaD8gDmzTcv7L5kU8%2F31pVW%2Fbu9F08YygPkKQDSaJt%2BD%2FDvz2b9byHp4shm8gPqlfXSiXaUecQFbiTH5RqJuFb9Rbp5Ji%2B%2FtD%2F6sgLqRTvs8jQYl8iLTwzblBEsMQnnRzNrXiD92y3HoZ%2By8TOo6%2FZrKIzgP%2BH8C2%2F1DtoeYTJEvKUrosJcQNQxa%2Bayy%2BvIaGqkLCzkRfzaprS93zOyaHgE3mo30wvc25vgY6pgGa5cbJ%2FuhZvfZVOq2UjSGFXwTephs85kk%2FhPLU55IzZUp055m4DvnTBNeIlEiVdNq8g8I%2F2n%2Br5Bms1cL67OmOT1DxR1e03Ohan4QM9YYdgY1lp4R6SQ3txpWMa5pxHDTwCQy9SDyKxdKuop2Sg1ZJiSGeCjMGfMOFYa6UZhgv5IIlshvDBmsrFQ9Ohbn78BA%2BRe5XzU7xjuzRTDewTICBRR0MI86e&X-Amz-Signature=64f50b63585234ee2d47e46062856654e0014b3726e08db29a1b20fdf2eb0b6d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644GW7FKF%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIDlSBsS5wuoOALH4U7XiUeJEwDbsZUIILHcx8oMjMaxvAiAjmjG%2B9MQ40cyPw59ueQuSy%2BH64fmkJ8WKK7RD%2BLKRiiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwjv%2FmohqmyBGTTOXKtwDuk00u2wpZy1GtEcbx80uNTIfn1bOQk25FesF4CUau6PHOMILvDC3jt37fDj3yRIpgULc0oRI1iIa8P5%2BdwQlNU5%2BUPWHaop%2BXJpwxpIeM%2Be%2BhhxtbWp1PK9VrNjV1wT4b78LQ%2BD6QyfUB6TBMHqAd8VHO4IxTsZJo%2FHoTWSiRpRKB8Advnh4uSnmgZFV6i3HV7G93pAWoF8fNcr2MLCxzdhR3Evg7YFlr%2FMkf%2FthDCnytN%2FuVObVMFuryRcSTqd5k09ASG8jClZZqnMRQwy7YD2uVrceRfUSuKaAmHeM3esYbZUTr6og4j8INB8VMLv%2F3i7axHQNyrYYa8gV4a4GoP%2Be7G45RpGdfNd54L6dWIFCd1XnU15y9ncJ7ecrpuhox7tJnlWIpox%2FruxX5KuHjOam0MIXJubxaD8gDmzTcv7L5kU8%2F31pVW%2Fbu9F08YygPkKQDSaJt%2BD%2FDvz2b9byHp4shm8gPqlfXSiXaUecQFbiTH5RqJuFb9Rbp5Ji%2B%2FtD%2F6sgLqRTvs8jQYl8iLTwzblBEsMQnnRzNrXiD92y3HoZ%2By8TOo6%2FZrKIzgP%2BH8C2%2F1DtoeYTJEvKUrosJcQNQxa%2Bayy%2BvIaGqkLCzkRfzaprS93zOyaHgE3mo30wvc25vgY6pgGa5cbJ%2FuhZvfZVOq2UjSGFXwTephs85kk%2FhPLU55IzZUp055m4DvnTBNeIlEiVdNq8g8I%2F2n%2Br5Bms1cL67OmOT1DxR1e03Ohan4QM9YYdgY1lp4R6SQ3txpWMa5pxHDTwCQy9SDyKxdKuop2Sg1ZJiSGeCjMGfMOFYa6UZhgv5IIlshvDBmsrFQ9Ohbn78BA%2BRe5XzU7xjuzRTDewTICBRR0MI86e&X-Amz-Signature=8e335dd888fea45fd217e16ff93236fda7406a32f24d20a1c8570e7acb900ad6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
