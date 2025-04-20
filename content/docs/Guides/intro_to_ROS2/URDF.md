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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQHIFLPR%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCkT2A4KD1zPIcfZYsc7OFYHpTpmrcPGti7JvJYMO6SyQIgeQ5wWjev%2FnnbHojzlYpeL9%2B96dExktMnvBQeeUEUUeYqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjYj2VMaefTNPiKtSrcA7Amk2JMA9ni%2F6mIG%2Ft25L5tuvErNqhI3DZkBoCKPFiZVfpzgO1TBztdSvcKC0O9LHwntJlSacgBaJo4IMxq8iBYpB4ERprjW5X8cHq5wwUmR4KENxcXEraHc0zIMkNPNn3%2BMyKYKWuQ9aCXZz%2FyIi4XtiWRUNFFeMbDutToF%2BI%2FyT4fNzDrlMyoFNjN7N7vyGn7ZGs%2Fnd0c66K1T%2Bfmpcy5kGDkj9rmOaP1hRv%2BFYBN5vRTzelX7T0OWWAsWit%2BlQ7V%2Fd%2BiyW58ZSmvRVtLE2sTTPyZrX8NcASSgGw3dW5wCJWyugeVu3oyg5BdILHMgTaOgQRl2BVQqwo%2FaqZ4tArDlUhR08K%2BS%2B4XqOS63xz%2BB4%2Baj9mRRL70Obn%2BJEU3p%2FlJnHilkW7wgkQ48XvSY6Rzh%2B1rb2OZ9LuLBruRWVmhDSZL73%2FGSy7WHdK5Yrx90akZzaDeyovXd5LZk4F7eAdq14jdI0gi9o5dv%2FbR%2Bq4k6%2Bc2IWJA7Odui6zO7jUQ%2F6cW2AbkK7KhBbkEApvXoIa6IyWQ1lgLpSHTBdIdMM7cJp8%2F%2B2%2BfGrY%2BNEwLBTnJcj%2FoWc9o9LFgDZhM3Ln7cPLtyw8aPHe%2F2UEVhpDGmm80xSG6rqF1aIdI5DedMI%2FDk8AGOqUB43rodvrqyvRKC0fAO4A%2BqNt0%2FCqGIsm%2FigLkMus705g1K8I9BATSE%2BENcR0h6u239dXWKWGi7yoERD072SK3QpG0E3QnyRw5xHAHWswblO5i46n5ebcHmGkR8DMGRYoGaKfdccBaWRllopdr6KrAofIq1SEWiHmd%2FzsEvyuXCi%2FuPsLUUw3va%2BwXB5u5UU1XnqP6pTnPQKGS%2Fp%2B0geF5Argc6Zup&X-Amz-Signature=96f625484192bef83aa45e8dc10e010f03610a60af356edb3efd1fbd4485f0a6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQHIFLPR%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCkT2A4KD1zPIcfZYsc7OFYHpTpmrcPGti7JvJYMO6SyQIgeQ5wWjev%2FnnbHojzlYpeL9%2B96dExktMnvBQeeUEUUeYqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjYj2VMaefTNPiKtSrcA7Amk2JMA9ni%2F6mIG%2Ft25L5tuvErNqhI3DZkBoCKPFiZVfpzgO1TBztdSvcKC0O9LHwntJlSacgBaJo4IMxq8iBYpB4ERprjW5X8cHq5wwUmR4KENxcXEraHc0zIMkNPNn3%2BMyKYKWuQ9aCXZz%2FyIi4XtiWRUNFFeMbDutToF%2BI%2FyT4fNzDrlMyoFNjN7N7vyGn7ZGs%2Fnd0c66K1T%2Bfmpcy5kGDkj9rmOaP1hRv%2BFYBN5vRTzelX7T0OWWAsWit%2BlQ7V%2Fd%2BiyW58ZSmvRVtLE2sTTPyZrX8NcASSgGw3dW5wCJWyugeVu3oyg5BdILHMgTaOgQRl2BVQqwo%2FaqZ4tArDlUhR08K%2BS%2B4XqOS63xz%2BB4%2Baj9mRRL70Obn%2BJEU3p%2FlJnHilkW7wgkQ48XvSY6Rzh%2B1rb2OZ9LuLBruRWVmhDSZL73%2FGSy7WHdK5Yrx90akZzaDeyovXd5LZk4F7eAdq14jdI0gi9o5dv%2FbR%2Bq4k6%2Bc2IWJA7Odui6zO7jUQ%2F6cW2AbkK7KhBbkEApvXoIa6IyWQ1lgLpSHTBdIdMM7cJp8%2F%2B2%2BfGrY%2BNEwLBTnJcj%2FoWc9o9LFgDZhM3Ln7cPLtyw8aPHe%2F2UEVhpDGmm80xSG6rqF1aIdI5DedMI%2FDk8AGOqUB43rodvrqyvRKC0fAO4A%2BqNt0%2FCqGIsm%2FigLkMus705g1K8I9BATSE%2BENcR0h6u239dXWKWGi7yoERD072SK3QpG0E3QnyRw5xHAHWswblO5i46n5ebcHmGkR8DMGRYoGaKfdccBaWRllopdr6KrAofIq1SEWiHmd%2FzsEvyuXCi%2FuPsLUUw3va%2BwXB5u5UU1XnqP6pTnPQKGS%2Fp%2B0geF5Argc6Zup&X-Amz-Signature=a30606317f906b0921448c61eaf3fdac8580a9adc1fe25190f5d97e6272db968&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
