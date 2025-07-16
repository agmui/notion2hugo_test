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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOSXHJ57%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIDH69d1ZF4AMJpQfaoHBGi8r1wehapW1rSGIuGYGNNIyAiEAiM7Vi4f3EAST6xjGQ3%2BGDriCyagsj764vWSPMRoPy9gq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDODmgexYE1pZhKmVIyrcA36%2FsSD3q3Glz8hJ%2B%2BUTx39LNmOSWCIIr3IX3IyuowUOBfmHsyle6IZEC7L03jLVvq2BiFl%2B9RJyRlFHag4TkK1ZhmdZr0skAtCDcqiGQRVTvRq724Z8%2FeeeRh80k24mhoTkmSbjwjsHIYysc1DgghCFsbKVWKKhpYW4ihitEzA9guMWG4S%2Bi%2FJj91hVCIPWkKub9b6W%2Fj0D0%2BksYauQvkIM%2F0b9EY2cLb7tN%2FVG6BYkgO8w9yqCLKUOWjBs1uMzyUHrwQKv%2BCzqgaJPASNczS%2Fmm5a%2Fj4rzOLKkjTvWFEcK8x7bcYsoHotY1gz10AFwX6YWkS8PgEcI0Elwo03Eg8ya9RJHtaMksZpuS9SH%2FEgBUpYmzphvs27%2FI8ObnU55Zv%2FQb%2B3GrMbPSIyaydpiQlJ3Bb%2B1yTjNz9PtDx74v3Fig5RPz43ifcJcwJT%2F1Elc6WKjHgcR0%2F%2BA46sweelAFo59G22SKncS%2BAYykOzSxHuf0AFv113%2FDYkXqd%2F9uFGNfJVmjAJRRZdQDn5d7ePy49yxXzDKGMl9JmNWwyZYkKY5rPGZMq81Or%2FWZtEpLgkPF7hgT22%2B%2BxnMn2ToHbw6jOiwUtT4SfXctFY99Uw18b8GisZXfG8bIUNIyQatMN%2BX4MMGOqUB8XRJY5O%2BeiRw0CIkj58MtveGYQJWb9XmRV0ty%2Fcyt7PJZMbziibxwNFtjGt7VQ9tGq6DxaOAClyNlhZHl3%2FAOtcPC0RPOSxUWz1C6dgSDgAaEau343FEjhG1TvK4AZ%2BEGb3j6nXsRf3JN0fjqPVAAQ72t4iFGgx3aZoCo6zgibazTsDmWzbPddKx1mtvn8p%2BX7gLTtdTD2kG4x2Nl01JKDw37cyC&X-Amz-Signature=d101894c3b074af93067a22ea4a29c798344923317f5da8bfccbc4d24f9a3603&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOSXHJ57%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIDH69d1ZF4AMJpQfaoHBGi8r1wehapW1rSGIuGYGNNIyAiEAiM7Vi4f3EAST6xjGQ3%2BGDriCyagsj764vWSPMRoPy9gq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDODmgexYE1pZhKmVIyrcA36%2FsSD3q3Glz8hJ%2B%2BUTx39LNmOSWCIIr3IX3IyuowUOBfmHsyle6IZEC7L03jLVvq2BiFl%2B9RJyRlFHag4TkK1ZhmdZr0skAtCDcqiGQRVTvRq724Z8%2FeeeRh80k24mhoTkmSbjwjsHIYysc1DgghCFsbKVWKKhpYW4ihitEzA9guMWG4S%2Bi%2FJj91hVCIPWkKub9b6W%2Fj0D0%2BksYauQvkIM%2F0b9EY2cLb7tN%2FVG6BYkgO8w9yqCLKUOWjBs1uMzyUHrwQKv%2BCzqgaJPASNczS%2Fmm5a%2Fj4rzOLKkjTvWFEcK8x7bcYsoHotY1gz10AFwX6YWkS8PgEcI0Elwo03Eg8ya9RJHtaMksZpuS9SH%2FEgBUpYmzphvs27%2FI8ObnU55Zv%2FQb%2B3GrMbPSIyaydpiQlJ3Bb%2B1yTjNz9PtDx74v3Fig5RPz43ifcJcwJT%2F1Elc6WKjHgcR0%2F%2BA46sweelAFo59G22SKncS%2BAYykOzSxHuf0AFv113%2FDYkXqd%2F9uFGNfJVmjAJRRZdQDn5d7ePy49yxXzDKGMl9JmNWwyZYkKY5rPGZMq81Or%2FWZtEpLgkPF7hgT22%2B%2BxnMn2ToHbw6jOiwUtT4SfXctFY99Uw18b8GisZXfG8bIUNIyQatMN%2BX4MMGOqUB8XRJY5O%2BeiRw0CIkj58MtveGYQJWb9XmRV0ty%2Fcyt7PJZMbziibxwNFtjGt7VQ9tGq6DxaOAClyNlhZHl3%2FAOtcPC0RPOSxUWz1C6dgSDgAaEau343FEjhG1TvK4AZ%2BEGb3j6nXsRf3JN0fjqPVAAQ72t4iFGgx3aZoCo6zgibazTsDmWzbPddKx1mtvn8p%2BX7gLTtdTD2kG4x2Nl01JKDw37cyC&X-Amz-Signature=21a3af93cd01849797418bbe472f288b45f2769c8473ea77447d19804e9ca61b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
