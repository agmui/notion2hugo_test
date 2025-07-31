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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXHP34UM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvHVr60dScJk8Xaw1vWDSvbILWh1Mg1PalqSouxq2sSAiBWUma8VYGRCf82I0HLpT0Gd1okG%2FIrgq6G7q6V3mjsWCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ9toWsU53a1iUrh5KtwDEBy%2Frp9R1%2FV0qGB4zckQqcVfYvO1rBn3%2BlSkKlR1c6sXBJ3hieEGV2kMnI2hI0CCE4w72dY%2F9PIpq%2F%2FQ1Cleska1Uzmp1mqVL94jil39XrLqgmu7%2Bq6P62VKllzj6gK6Xr63D4HL56jKEjGpQXbIOTkUqGCInca7Hi1LNG7VRVMr5TQCUckIQy2pWJGmCFktce6HCKk%2FdC3ZA%2FkvZsPL00bsHoT8WRHnB8NMthkCEq71qQggaHfGLVc3jOaz%2FXpciAlXGZgWZAVruvJ7%2Buhfud8kMhh%2FBc0ahWT8DIGW8gu3zTQUJ%2FOtJpwM%2BcACQtgxn%2FSwStUvQcVCyzKnPCN7ZX8HsHAQIVO%2FjolK6cae%2BgaON0G7vDEbi2EvdB6ENjWjQ1nGyWwrnwGd7z7YfkW7nGLrwT6c0hmdONtPOaGAQEEmgPlRHMWmk0IVQhvbiAUfrQ4vevwAhnn4YLZtTczgeI0hEcpfWu0tJBmoaTSSmHOEIgmAaGUucslpaPVpSl5MctCwj3gcgtM3Nr00HgJiUaypcs4flcEZNlBzQk28ELRw9dRSMpsWIdf0OlWzXcR8gakltMs%2BXEeeyi1Y7w1dUUyFmQG7PcF84DvL5F8qEfQp3jPPSqDS0g%2BwPW4wyJqsxAY6pgE2hniaa2GFaiENVDEPZApcFHLOe8K3A%2BWrtL8vL4Xv%2FC6lvwS9%2F22A2eN0wYSg80BuwLGBiAw%2F78tKyVXheSRrRYJ9AtsQHhq%2FQ6tKaICscnc5vcb3msfhE%2BADOIEdFOQY4E2Zc3Xt9TxaYqQWeqCQLrq8LBA1m8Z%2FS2eN3SMhrvzQuugpbrr1rNmk0qNhKfpwDLlsRa%2BPAOMD49%2BkLYiotnzp0vaW&X-Amz-Signature=40326b2c871467e6fe0c6d8258451eb9b0ae523bcff062f8691dd7b7dfe509ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXHP34UM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvHVr60dScJk8Xaw1vWDSvbILWh1Mg1PalqSouxq2sSAiBWUma8VYGRCf82I0HLpT0Gd1okG%2FIrgq6G7q6V3mjsWCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ9toWsU53a1iUrh5KtwDEBy%2Frp9R1%2FV0qGB4zckQqcVfYvO1rBn3%2BlSkKlR1c6sXBJ3hieEGV2kMnI2hI0CCE4w72dY%2F9PIpq%2F%2FQ1Cleska1Uzmp1mqVL94jil39XrLqgmu7%2Bq6P62VKllzj6gK6Xr63D4HL56jKEjGpQXbIOTkUqGCInca7Hi1LNG7VRVMr5TQCUckIQy2pWJGmCFktce6HCKk%2FdC3ZA%2FkvZsPL00bsHoT8WRHnB8NMthkCEq71qQggaHfGLVc3jOaz%2FXpciAlXGZgWZAVruvJ7%2Buhfud8kMhh%2FBc0ahWT8DIGW8gu3zTQUJ%2FOtJpwM%2BcACQtgxn%2FSwStUvQcVCyzKnPCN7ZX8HsHAQIVO%2FjolK6cae%2BgaON0G7vDEbi2EvdB6ENjWjQ1nGyWwrnwGd7z7YfkW7nGLrwT6c0hmdONtPOaGAQEEmgPlRHMWmk0IVQhvbiAUfrQ4vevwAhnn4YLZtTczgeI0hEcpfWu0tJBmoaTSSmHOEIgmAaGUucslpaPVpSl5MctCwj3gcgtM3Nr00HgJiUaypcs4flcEZNlBzQk28ELRw9dRSMpsWIdf0OlWzXcR8gakltMs%2BXEeeyi1Y7w1dUUyFmQG7PcF84DvL5F8qEfQp3jPPSqDS0g%2BwPW4wyJqsxAY6pgE2hniaa2GFaiENVDEPZApcFHLOe8K3A%2BWrtL8vL4Xv%2FC6lvwS9%2F22A2eN0wYSg80BuwLGBiAw%2F78tKyVXheSRrRYJ9AtsQHhq%2FQ6tKaICscnc5vcb3msfhE%2BADOIEdFOQY4E2Zc3Xt9TxaYqQWeqCQLrq8LBA1m8Z%2FS2eN3SMhrvzQuugpbrr1rNmk0qNhKfpwDLlsRa%2BPAOMD49%2BkLYiotnzp0vaW&X-Amz-Signature=a7832e26bca2c775062d03ddbf981b52bedfacc5458a22ef6d75246ed8affcd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
