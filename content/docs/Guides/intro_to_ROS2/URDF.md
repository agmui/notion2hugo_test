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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNWY55V2%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8rvRUNgzu2M2W3zwOZE4wHSMF%2BGKzWOB6rKkoi5RIOQIgTi3m49%2BCOGcSc903LGURo79zKQIiOaqLqa0Z7JAdXpAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkhemZOCCPa6QIESyrcA%2BDHcBcO%2BVw9wNkWfdbIsrM01E%2FzQ6aJDP9UAKvuIDBelv%2Fo4PWo444%2F6dntnBodLPGe3HI7ryljGlPrmr47TNvmtxPXLs4f2DYI5uJEc%2FUn2UD98Loq9XYDSvoUJi2k3Z8Y43JE8snL1L0cYMBlvP7DNrCQ8YY4AKUcR%2BIuc%2FMGJBLYb%2FlUnIRjw%2BN496IJpL%2FC30yRmTX6H44m14xM7oO9GQjI79lcdja%2BjStU0auq6QWPEp3H8S5kx7tPvo3mzRSZ3t%2Fml3MmcRAjUaL3sWZhAjtImV%2Frd8LfnJi0UryShmAGwXYs9Oxf566hBzT1rQpf97naAVXlGU9LmXbkCdf3XzZqI9disku5cEv%2FoJPB7b%2FTT%2B4wi8JikxTLm2jSESLwyy5ajt9YNYb%2FB5fDqyHnhNpVTsqpHgNXJio%2FDMLF%2B9wg1Natb85jNXagvi6wI5RW1362pBicPQX%2FAnYz8sDn5baUnQrYOhRAlF1zUgsRMKuCUpAK2Uvoaw5mJUQYUDBrWIc6DS%2BPfpDcYiOZcM%2BTaHSt8kO7%2FgJlp%2BHTmj847u99OozkMaY9t82dwCAvRng3lL%2BM3372Vy%2F0tFzMYfHocRre2WWLnP%2B8ptIC24dRGq06ezsNofMoXl0rMOSDo70GOqUB8w9ykjk0%2Fm8XEfo67RDgXGTKrfTx5Im7mFIkXq%2FUzKhi%2BYzhHVAc%2Fbg%2FDhGURgKFiXZuufGKHqcIAT7aqj2UNgBaxyDj%2FS4LZdETaeDDhRPgjWLDMpi5zhfc3vCCNfirdnTaCtertdcTpJSpzBxKYiZ4iOXPYtgzoHIxCzvitghVZ9BL2Tf%2FLX%2Bh5pCPwnXzVJYGWxiNvHtLLBeYWOqEAUJHFVE9&X-Amz-Signature=239dabb86b28b6a98eec679f6f1bf5f671996e6caf4207427f677651716ffc4c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNWY55V2%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8rvRUNgzu2M2W3zwOZE4wHSMF%2BGKzWOB6rKkoi5RIOQIgTi3m49%2BCOGcSc903LGURo79zKQIiOaqLqa0Z7JAdXpAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkhemZOCCPa6QIESyrcA%2BDHcBcO%2BVw9wNkWfdbIsrM01E%2FzQ6aJDP9UAKvuIDBelv%2Fo4PWo444%2F6dntnBodLPGe3HI7ryljGlPrmr47TNvmtxPXLs4f2DYI5uJEc%2FUn2UD98Loq9XYDSvoUJi2k3Z8Y43JE8snL1L0cYMBlvP7DNrCQ8YY4AKUcR%2BIuc%2FMGJBLYb%2FlUnIRjw%2BN496IJpL%2FC30yRmTX6H44m14xM7oO9GQjI79lcdja%2BjStU0auq6QWPEp3H8S5kx7tPvo3mzRSZ3t%2Fml3MmcRAjUaL3sWZhAjtImV%2Frd8LfnJi0UryShmAGwXYs9Oxf566hBzT1rQpf97naAVXlGU9LmXbkCdf3XzZqI9disku5cEv%2FoJPB7b%2FTT%2B4wi8JikxTLm2jSESLwyy5ajt9YNYb%2FB5fDqyHnhNpVTsqpHgNXJio%2FDMLF%2B9wg1Natb85jNXagvi6wI5RW1362pBicPQX%2FAnYz8sDn5baUnQrYOhRAlF1zUgsRMKuCUpAK2Uvoaw5mJUQYUDBrWIc6DS%2BPfpDcYiOZcM%2BTaHSt8kO7%2FgJlp%2BHTmj847u99OozkMaY9t82dwCAvRng3lL%2BM3372Vy%2F0tFzMYfHocRre2WWLnP%2B8ptIC24dRGq06ezsNofMoXl0rMOSDo70GOqUB8w9ykjk0%2Fm8XEfo67RDgXGTKrfTx5Im7mFIkXq%2FUzKhi%2BYzhHVAc%2Fbg%2FDhGURgKFiXZuufGKHqcIAT7aqj2UNgBaxyDj%2FS4LZdETaeDDhRPgjWLDMpi5zhfc3vCCNfirdnTaCtertdcTpJSpzBxKYiZ4iOXPYtgzoHIxCzvitghVZ9BL2Tf%2FLX%2Bh5pCPwnXzVJYGWxiNvHtLLBeYWOqEAUJHFVE9&X-Amz-Signature=dca0bb67f80a406cc9a034368e0ec39a77820aa8901b0b433ca936e4563d00c4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
