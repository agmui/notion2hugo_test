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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642AVMPFE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxHPvw25pE0nUU3PW2Ip3GxCfoi%2BLIVth86bJ2LgORVAIgBH1Pkzm1iSBz%2FGcz8e7TU5E10e9QCfM6ZFdfqL3mnrAqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8ActmtiR2HMQTLOCrcA%2Bl2tX1H9Jdw%2FPgTGb%2FdaGjQpHYs5jetgEghXdxtZhsVQkOJ9087%2BPVKi21CB0F04c1OaWLLPba%2BogVxAqS85LSZhHN9EtBoaP%2BkfABFuIlI66nprpNfe5vS%2BFZM%2Funy5mQgJ3X71tzpFBB2mvmQPy7IdozRcGoU2x7B6NJlgm2E4gr5dwmM6xg6RQJzLK6srEsUPp2btjome1cxiYpuv4jQ%2B9GI5mmlj%2BUARqWWpqRi5xrHJRAFGR%2FurtDrOMOtDACFCqmhiyImwrAgiu0epZqSBx9JKUm%2FgRxY9WfIFSed%2B41wHQipNGB7QpS9Uh9vDNVOVVQC1xDnJfNNmgBMhbB%2FpNMLkrBHkNb%2FQrdu2%2BiaYA%2B44GZM08Nj1JaSRK6Lcr8BVD%2BBDdH4Yphmgc1cTNt9p5YweMHjTWYJlaLKWOov3AWPGosIu9JqiP1Sm2k1GON5%2FSExnVjcTxcPkpggxD3cfd%2FmMvBx0LS7Idjm4ieKWL1FgwgL7I8YbrsrTwe%2Fps6ob8l2mxwxBA4bimTu9OTiqpR0jvpsDAxn0t0eG9ft9vQ2ulHqtLgRvoPMOpxO3Cy6%2B6csm3eMJ%2B5Pzekq2v%2FtfTwjZCBU4hVMBDzwwotDJJLZ6XLZ1VhOnk1IMLymlcIGOqUBgWZ2%2Ftm8%2BDfV%2BUVZVVi3tSY68rfsfN6vhX3uELhYn5lbnk%2FQXLZI8arv6QZQJXtKFxt8FEYywEhiXzoMmPrksoCGgUrvZBfYm1Snl9iEr8axiOXeWMfKhvZi2mcG16NKoNo%2FrXEk%2BZ6iM3g9NRvIZ%2BEkECFO4FVF%2BMkEXsNG1IxgQhNa0uAyrF9MbtMC6NrrHE3Vr6cOixUyW%2B0XcwKzZHzsnCn3&X-Amz-Signature=f82bd68b285435461415a533e0af9534e159994eb29ed7bcf3fcef23668ee0b0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642AVMPFE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxHPvw25pE0nUU3PW2Ip3GxCfoi%2BLIVth86bJ2LgORVAIgBH1Pkzm1iSBz%2FGcz8e7TU5E10e9QCfM6ZFdfqL3mnrAqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8ActmtiR2HMQTLOCrcA%2Bl2tX1H9Jdw%2FPgTGb%2FdaGjQpHYs5jetgEghXdxtZhsVQkOJ9087%2BPVKi21CB0F04c1OaWLLPba%2BogVxAqS85LSZhHN9EtBoaP%2BkfABFuIlI66nprpNfe5vS%2BFZM%2Funy5mQgJ3X71tzpFBB2mvmQPy7IdozRcGoU2x7B6NJlgm2E4gr5dwmM6xg6RQJzLK6srEsUPp2btjome1cxiYpuv4jQ%2B9GI5mmlj%2BUARqWWpqRi5xrHJRAFGR%2FurtDrOMOtDACFCqmhiyImwrAgiu0epZqSBx9JKUm%2FgRxY9WfIFSed%2B41wHQipNGB7QpS9Uh9vDNVOVVQC1xDnJfNNmgBMhbB%2FpNMLkrBHkNb%2FQrdu2%2BiaYA%2B44GZM08Nj1JaSRK6Lcr8BVD%2BBDdH4Yphmgc1cTNt9p5YweMHjTWYJlaLKWOov3AWPGosIu9JqiP1Sm2k1GON5%2FSExnVjcTxcPkpggxD3cfd%2FmMvBx0LS7Idjm4ieKWL1FgwgL7I8YbrsrTwe%2Fps6ob8l2mxwxBA4bimTu9OTiqpR0jvpsDAxn0t0eG9ft9vQ2ulHqtLgRvoPMOpxO3Cy6%2B6csm3eMJ%2B5Pzekq2v%2FtfTwjZCBU4hVMBDzwwotDJJLZ6XLZ1VhOnk1IMLymlcIGOqUBgWZ2%2Ftm8%2BDfV%2BUVZVVi3tSY68rfsfN6vhX3uELhYn5lbnk%2FQXLZI8arv6QZQJXtKFxt8FEYywEhiXzoMmPrksoCGgUrvZBfYm1Snl9iEr8axiOXeWMfKhvZi2mcG16NKoNo%2FrXEk%2BZ6iM3g9NRvIZ%2BEkECFO4FVF%2BMkEXsNG1IxgQhNa0uAyrF9MbtMC6NrrHE3Vr6cOixUyW%2B0XcwKzZHzsnCn3&X-Amz-Signature=5f65e4fad4ec0ea0cf6f82638be0c6194a3881223fc047825d951c8a98cc254e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
