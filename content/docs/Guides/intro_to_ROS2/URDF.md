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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPVLL4SV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUTigVZTKFL6ABTZROIWY2CXSDq7LjibSpuFbVLn3Y8AIgYAcEZYpG5lelQ0ou3LtIkpC6M7jGzHEoC9pY1zsBieQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIofEt%2Bif9b7O4RsxircA49H5DvIdL6f23Rz4Kawd%2FzUvcA5uoTg9FHdvISsfjUSb96WBgVTjyvVOedWZzqF%2B6t4mc9DgipVaLqL96bOgCbY%2BxXzk0PQQmLT7Q%2Biq%2BssInG8jLmXerHN7w2O6hhPNnoth0GTnSy4hdbxtqYRqKgUh1VBSnY50WHWOspCPxuu1z3CjNDLefX0xfMCSXwKP0vHovZ81MBx4%2BCW1%2FW0n7l%2B%2FfdnB05vhrYaI4iHrbtWyozNOwxiMqws%2FYKPPeVh9txOgCQrxPZc%2FeXTVYmEJ%2FYtvsCBNCWvOBhNkzQ35CCIWq1BXSOJ1TL95tUEBeUook0sRawd7kFW04kFqUQpCPRPbRK7d%2B9JeDxnYDV6L3U8VxKeXevB3U04gw293zvflec%2F%2FbmulfYpyehtRvLXSc2vn8BtLqdvvTTM08%2FTtG36b5J%2F93ojWTTedO5dHvYXr84%2FAePEVCeB1kjHvNqemEOX9C6CGYHL7XGGYZoDKMbJdaC0wi9nOgOBJt2jt6kgNMUjRlFlKJljZ%2FVUDq8WrC64hS%2Bq2D%2FbgL%2Bq4R0DA3oheFtc066K8OdL%2BljtYz2USg2mEv%2Fmu7HpLGvcvT0WU%2F13VCtFYSqaYYvVKE%2FUwCk0FCrTYw5ecsOrJW74MJjqrcQGOqUBHCnHrCIg9Ul6h%2BJTimJR5jGPiS16%2BTSaiqy1IvXODVKrB%2FafQQoeTJeCoXIjkGh67EZVtyW1R09Z375%2FoaZtHpqp2mfFYIVOo41NyeICXJkqhzOd88zyctaoZEAlMTckhbPN5ICDmtC%2BcnH%2Bfik6kxJJd3K9ztiyyFjMEUEmyHwfp8ee%2Fn2cXfAwpqvrQt8vwEv%2BEcMUIbrLVoRl4gfrmIovV9w8&X-Amz-Signature=14bfb267f7b888ad91da711894898acb9ff079dcfd5c852c739a3531dbdf3dbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPVLL4SV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUTigVZTKFL6ABTZROIWY2CXSDq7LjibSpuFbVLn3Y8AIgYAcEZYpG5lelQ0ou3LtIkpC6M7jGzHEoC9pY1zsBieQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIofEt%2Bif9b7O4RsxircA49H5DvIdL6f23Rz4Kawd%2FzUvcA5uoTg9FHdvISsfjUSb96WBgVTjyvVOedWZzqF%2B6t4mc9DgipVaLqL96bOgCbY%2BxXzk0PQQmLT7Q%2Biq%2BssInG8jLmXerHN7w2O6hhPNnoth0GTnSy4hdbxtqYRqKgUh1VBSnY50WHWOspCPxuu1z3CjNDLefX0xfMCSXwKP0vHovZ81MBx4%2BCW1%2FW0n7l%2B%2FfdnB05vhrYaI4iHrbtWyozNOwxiMqws%2FYKPPeVh9txOgCQrxPZc%2FeXTVYmEJ%2FYtvsCBNCWvOBhNkzQ35CCIWq1BXSOJ1TL95tUEBeUook0sRawd7kFW04kFqUQpCPRPbRK7d%2B9JeDxnYDV6L3U8VxKeXevB3U04gw293zvflec%2F%2FbmulfYpyehtRvLXSc2vn8BtLqdvvTTM08%2FTtG36b5J%2F93ojWTTedO5dHvYXr84%2FAePEVCeB1kjHvNqemEOX9C6CGYHL7XGGYZoDKMbJdaC0wi9nOgOBJt2jt6kgNMUjRlFlKJljZ%2FVUDq8WrC64hS%2Bq2D%2FbgL%2Bq4R0DA3oheFtc066K8OdL%2BljtYz2USg2mEv%2Fmu7HpLGvcvT0WU%2F13VCtFYSqaYYvVKE%2FUwCk0FCrTYw5ecsOrJW74MJjqrcQGOqUBHCnHrCIg9Ul6h%2BJTimJR5jGPiS16%2BTSaiqy1IvXODVKrB%2FafQQoeTJeCoXIjkGh67EZVtyW1R09Z375%2FoaZtHpqp2mfFYIVOo41NyeICXJkqhzOd88zyctaoZEAlMTckhbPN5ICDmtC%2BcnH%2Bfik6kxJJd3K9ztiyyFjMEUEmyHwfp8ee%2Fn2cXfAwpqvrQt8vwEv%2BEcMUIbrLVoRl4gfrmIovV9w8&X-Amz-Signature=51886b1e987f3765dade81f821ce87d203833c6edfa4175348200f33abab2d22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
