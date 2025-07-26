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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THKMX52S%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIA3VpoFR7bjyEGnXSXZ9Xv28oHR%2BIf7bWXXHvYaWjq3UAiAOvHDtrRefblxhGvWMhUUsk79KVbs%2BPHYY%2FJquIoadfCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMLBe2VTZTDG5tKMl%2FKtwDSK8jdD0H7WQYXT%2BzCyP1geriRM%2Fw44YSEAiYX281AvgPuMwCvz2GpL4QcgHGUGHhtFg5A518B67sdnvpIqayN80am8D0YIkMsbHbFkCkgrf2P8BsqMIeDO5TUpEcNQEizHPwqosC0KIEb1FrOi8xJYBylx8IFNVfDonPjMavntnpHdB7xh0VB7%2BOiBXD7KQ8cdFKG6pTmc228zAiYZEJDsxDbZqSTCOWac89gCKoLO0xhBQVdPVI5VWzXIwLPYcnRCzBVJ6Ilr4cHKcucuTnXyuRwnf90I48BCNQivaL03YUf356xWDoDMsTQnRcl83jb5KHWXAzMwBBDqU77VjlsPAjesg6PoJkrmbaGPYP6d54q3vk%2B4JVLHLGcxz%2FyuXNknztgloDRm3AcVyUKXaF1Lzl6dxjyFrW194mb1ojjUls8qN7ViPN4Y0EuiHuib87EzU1Rniensj8mZXTKeKupP5x5wfmUW9p8ZC2lhp2b4c01nXBLHgMaXmqiXrpMQSlMk9R%2BWCx9J9UW9rUgrNF1HmioCTU8H22ybrbzuEBbELF5cGm3AeNqiTudxKm%2FNuVf%2BTUws66ROzHcSrv%2BQcVdbjfd3iJaQwaPGe%2FGENtVhKW%2FApbWYIUOSmTS3wwmKuSxAY6pgEWw5SOtJWTx4KEm2jqG8d9Etzlv7Mymyb9Rcgat2U%2BhNf3FQNEwyrKraiXQC0BsBnB9SmgG86HtbWKXVgvUXpwgPngAds66SzAH0RseUMjbglmAIqMltFQJ26cRbWRO%2B5NVfjA5X4PqCLxsmV71Kq6cBJKQ%2BsY%2F8to1zejFk37yEtKFGRnNYDO3uuE1TTGRPoKxRXADGYP5yNuTblvdMgvCmonXqnU&X-Amz-Signature=a8715a93c800f4dd73b92d2281d45c53a7c36de1052e3c3b7efc0dd749b095c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THKMX52S%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIA3VpoFR7bjyEGnXSXZ9Xv28oHR%2BIf7bWXXHvYaWjq3UAiAOvHDtrRefblxhGvWMhUUsk79KVbs%2BPHYY%2FJquIoadfCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMLBe2VTZTDG5tKMl%2FKtwDSK8jdD0H7WQYXT%2BzCyP1geriRM%2Fw44YSEAiYX281AvgPuMwCvz2GpL4QcgHGUGHhtFg5A518B67sdnvpIqayN80am8D0YIkMsbHbFkCkgrf2P8BsqMIeDO5TUpEcNQEizHPwqosC0KIEb1FrOi8xJYBylx8IFNVfDonPjMavntnpHdB7xh0VB7%2BOiBXD7KQ8cdFKG6pTmc228zAiYZEJDsxDbZqSTCOWac89gCKoLO0xhBQVdPVI5VWzXIwLPYcnRCzBVJ6Ilr4cHKcucuTnXyuRwnf90I48BCNQivaL03YUf356xWDoDMsTQnRcl83jb5KHWXAzMwBBDqU77VjlsPAjesg6PoJkrmbaGPYP6d54q3vk%2B4JVLHLGcxz%2FyuXNknztgloDRm3AcVyUKXaF1Lzl6dxjyFrW194mb1ojjUls8qN7ViPN4Y0EuiHuib87EzU1Rniensj8mZXTKeKupP5x5wfmUW9p8ZC2lhp2b4c01nXBLHgMaXmqiXrpMQSlMk9R%2BWCx9J9UW9rUgrNF1HmioCTU8H22ybrbzuEBbELF5cGm3AeNqiTudxKm%2FNuVf%2BTUws66ROzHcSrv%2BQcVdbjfd3iJaQwaPGe%2FGENtVhKW%2FApbWYIUOSmTS3wwmKuSxAY6pgEWw5SOtJWTx4KEm2jqG8d9Etzlv7Mymyb9Rcgat2U%2BhNf3FQNEwyrKraiXQC0BsBnB9SmgG86HtbWKXVgvUXpwgPngAds66SzAH0RseUMjbglmAIqMltFQJ26cRbWRO%2B5NVfjA5X4PqCLxsmV71Kq6cBJKQ%2BsY%2F8to1zejFk37yEtKFGRnNYDO3uuE1TTGRPoKxRXADGYP5yNuTblvdMgvCmonXqnU&X-Amz-Signature=20b19b65a23919299faf6473de35dad0c9a4eccfcadf5f11a1937239a0640859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
