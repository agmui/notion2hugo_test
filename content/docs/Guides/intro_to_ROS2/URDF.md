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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5IT6WCV%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDYgw7UwXTtzbdNmNUMdSd6AP8jDxk1MyNcs28TTmsXFAIgR9ReMz73kEAGx23YqkS1ye3aHGfV2akVsBdKio8%2FKCAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDBKulA5mvWQQ0IlxIyrcA6ewl1%2FBKMoEM3ycbF0OLGEQ2DDAwBUzwAVZgcgAhIEjnhhia7j%2Fzt2FfCUTnaY%2FrIaJefRErzcJJK3y7p3VcMP7I7pTIgmjhakmUgafe5C%2BpiBajlkCJvQfzfobgyC4jiawC8IusiZZxu9NdTKflgf%2Fmq7S6YANnc6210W3s1%2F4YZ5P50%2B63%2BKSVYbYbB2NS37A1SZVlQiS4na1MRvitKNNluVtsmxmttmSYYsvQ%2BQdfCOPdf2BVVDsShT7KT0%2FUuzk6UVUDAzUFhvU%2BI3h5WmfxYI27jOoXWyxq9t374V3TlJNzYQWX0RCEOTybbFhdT2b2AN%2B0jEvH83EcKwzrkZFbuO9Ks%2FZAG98fqbL1RAXUKuvMdorbA57LGyXhW1Yfu07pOGjmXeEJPTakgUsoshxDloUv9RMWHUOB3Id5ji78K6qrEXbfgEJG%2BKjpcLuhkaq2RXXoNlXCdWT%2BFOSHzljZI32idqvojVsbB4KTaFmAcMCPgnUVcYZvW3DMIKtKcvgCNrZ28I3ih4y0i9KQKYeseK0Tgfog7HmClDF8xU9cLFKsmJHpWKGw5cAtYxAVo2M1qnFLvQ43MhsBaRbzum9BuTxVniezjuomJIlkVqWyKUQGIKx3UeprNFSMNjnoMMGOqUBB5fkZ9BrFHtoEaL%2FfHx1%2B3sNujoLywmFdoCwxuKizrvNdLn5yEm%2FMhr%2FrqRuXS%2FwyLGYW4e3W%2BJetVIbFSzK%2Bny9H5Rz%2FmvCv3GXGTye6yPsFjMU92%2BGMKhh%2F7JzIJBWR4VGFVZsg2iMDWFPYR9NDyLWrdREeVWgxOjJrcTCxFrWe2MwmXM4AkZkkQUA5ltGFwoQ3%2BcxedKBQXnTBrVWY%2FR6CLr9&X-Amz-Signature=c28120dda2e8c95f149b55b72d6986c95a345a4d7fdbb44650588d8fcdf081fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5IT6WCV%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDYgw7UwXTtzbdNmNUMdSd6AP8jDxk1MyNcs28TTmsXFAIgR9ReMz73kEAGx23YqkS1ye3aHGfV2akVsBdKio8%2FKCAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDBKulA5mvWQQ0IlxIyrcA6ewl1%2FBKMoEM3ycbF0OLGEQ2DDAwBUzwAVZgcgAhIEjnhhia7j%2Fzt2FfCUTnaY%2FrIaJefRErzcJJK3y7p3VcMP7I7pTIgmjhakmUgafe5C%2BpiBajlkCJvQfzfobgyC4jiawC8IusiZZxu9NdTKflgf%2Fmq7S6YANnc6210W3s1%2F4YZ5P50%2B63%2BKSVYbYbB2NS37A1SZVlQiS4na1MRvitKNNluVtsmxmttmSYYsvQ%2BQdfCOPdf2BVVDsShT7KT0%2FUuzk6UVUDAzUFhvU%2BI3h5WmfxYI27jOoXWyxq9t374V3TlJNzYQWX0RCEOTybbFhdT2b2AN%2B0jEvH83EcKwzrkZFbuO9Ks%2FZAG98fqbL1RAXUKuvMdorbA57LGyXhW1Yfu07pOGjmXeEJPTakgUsoshxDloUv9RMWHUOB3Id5ji78K6qrEXbfgEJG%2BKjpcLuhkaq2RXXoNlXCdWT%2BFOSHzljZI32idqvojVsbB4KTaFmAcMCPgnUVcYZvW3DMIKtKcvgCNrZ28I3ih4y0i9KQKYeseK0Tgfog7HmClDF8xU9cLFKsmJHpWKGw5cAtYxAVo2M1qnFLvQ43MhsBaRbzum9BuTxVniezjuomJIlkVqWyKUQGIKx3UeprNFSMNjnoMMGOqUBB5fkZ9BrFHtoEaL%2FfHx1%2B3sNujoLywmFdoCwxuKizrvNdLn5yEm%2FMhr%2FrqRuXS%2FwyLGYW4e3W%2BJetVIbFSzK%2Bny9H5Rz%2FmvCv3GXGTye6yPsFjMU92%2BGMKhh%2F7JzIJBWR4VGFVZsg2iMDWFPYR9NDyLWrdREeVWgxOjJrcTCxFrWe2MwmXM4AkZkkQUA5ltGFwoQ3%2BcxedKBQXnTBrVWY%2FR6CLr9&X-Amz-Signature=818f03432f23df19872ab26967f92e7e83a3787636a4882f6a611bfdcfcd184d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
