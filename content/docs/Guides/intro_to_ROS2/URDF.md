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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X446PBD2%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDLEccSxpiCJT%2Fy%2FVnGfUmeLw0J%2FUR5fe9IuVMb%2BGgahgIgNmOaIjRtht%2BDVYCAgrGONH9tA3w5kiM%2F472KFoFefNgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNXGAslSxZF7IbRM8ircA4EPGNyVzHA04zS7v6DIu9AsBb82nL6VNIpnBgukafphEBcNo3u1gUor3FtZBWMJ%2FzkcCgMPSTPnieOKg4%2F%2FxEKjyF3RGs1bthWkpN9vT%2Bn%2Bc5%2FuMYxKY90FiV5TNG54s7jsmOxC2SBICW4eDKCRcl%2Fd2MUw3KA9K8q3aS5KqbsxjFm9CNrzIfx%2BhNG%2FWmNWOOdfttVWd%2FTHwXnDmp%2B0WzKAXimuBN4aMPONGf0HTzAq8p69BC9i5ICJ63MQWAaMGtaSFmGM%2BNQtdTwOHvEFUias%2BlEqg7A3G6rKQbWwdHlDDFnoWDcYG7alYRgwmL5yh0%2FnMgALWidlOOsG3ThWUYv8WXQ5s21MuyZ9B%2Br7rc11iF%2F%2Byc3wbQanyrsLih0UIMJq6LbdCxXtvuLm9bgnR3n0r6TPjWwniflaXvm9k%2FqeqeT4DlWHDaFUIC%2B%2FKaswnmNAE7tvY6ah5ESLyCeWEdPzrFmHX3BC%2Bkw9rJmFDa2MOR4n8MKGU83WbYYi9dMrfpB7dcb%2FGddYMSlzuODI13FkP%2FJrCwFszlrm4kkbwoc%2F2vKjq6yPHTdIrG392fFGYoaFs1nXzySoFqI%2BDG43Ycx0a54NnN3afUroiDKm%2FzcQ7ShhYerBdjrdjQRXMO%2BBkcAGOqUBfjpVzKpAKq5Y%2Fhg%2Bcwn3f%2BQukw%2By0vYm7hKtjswsctmtLMZj95Qil6utxZVnI8o8iXngfamES9Bd3WmtmG1SWcxhwkiO4QJVqexXORNE0vhBSm6tpUQsIIlSvHszchnv5m2OVBoFlSFbiY%2BxncV0yiWRe4RfWLIlB%2BeOuQiVP1Zi82z3eTL3NpvWlsXMR%2Bd710D2He21aF1ne9u1iaa%2FYb2QBRcR&X-Amz-Signature=29f8d99d1b64e390056663011cc844da8609d99b696b3c5817219449b94246e9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X446PBD2%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDLEccSxpiCJT%2Fy%2FVnGfUmeLw0J%2FUR5fe9IuVMb%2BGgahgIgNmOaIjRtht%2BDVYCAgrGONH9tA3w5kiM%2F472KFoFefNgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNXGAslSxZF7IbRM8ircA4EPGNyVzHA04zS7v6DIu9AsBb82nL6VNIpnBgukafphEBcNo3u1gUor3FtZBWMJ%2FzkcCgMPSTPnieOKg4%2F%2FxEKjyF3RGs1bthWkpN9vT%2Bn%2Bc5%2FuMYxKY90FiV5TNG54s7jsmOxC2SBICW4eDKCRcl%2Fd2MUw3KA9K8q3aS5KqbsxjFm9CNrzIfx%2BhNG%2FWmNWOOdfttVWd%2FTHwXnDmp%2B0WzKAXimuBN4aMPONGf0HTzAq8p69BC9i5ICJ63MQWAaMGtaSFmGM%2BNQtdTwOHvEFUias%2BlEqg7A3G6rKQbWwdHlDDFnoWDcYG7alYRgwmL5yh0%2FnMgALWidlOOsG3ThWUYv8WXQ5s21MuyZ9B%2Br7rc11iF%2F%2Byc3wbQanyrsLih0UIMJq6LbdCxXtvuLm9bgnR3n0r6TPjWwniflaXvm9k%2FqeqeT4DlWHDaFUIC%2B%2FKaswnmNAE7tvY6ah5ESLyCeWEdPzrFmHX3BC%2Bkw9rJmFDa2MOR4n8MKGU83WbYYi9dMrfpB7dcb%2FGddYMSlzuODI13FkP%2FJrCwFszlrm4kkbwoc%2F2vKjq6yPHTdIrG392fFGYoaFs1nXzySoFqI%2BDG43Ycx0a54NnN3afUroiDKm%2FzcQ7ShhYerBdjrdjQRXMO%2BBkcAGOqUBfjpVzKpAKq5Y%2Fhg%2Bcwn3f%2BQukw%2By0vYm7hKtjswsctmtLMZj95Qil6utxZVnI8o8iXngfamES9Bd3WmtmG1SWcxhwkiO4QJVqexXORNE0vhBSm6tpUQsIIlSvHszchnv5m2OVBoFlSFbiY%2BxncV0yiWRe4RfWLIlB%2BeOuQiVP1Zi82z3eTL3NpvWlsXMR%2Bd710D2He21aF1ne9u1iaa%2FYb2QBRcR&X-Amz-Signature=9705f2136ad635693b7d7232a1e4d760a740b97a1cb1f7e9c0ac6d7b55688dce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
