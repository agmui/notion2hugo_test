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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5MTBJU3%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCy21xIW6K8vVNss%2BoQVavvs2jUC3%2Bf%2Bh2FuGbvLFKr%2FQIgUAKUh1EQqM3aVPJ%2Fa6EWo%2FxOTrbl1oQJy%2FsHkncGGhoq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDOxmbgxSVIGJcmC8FircA80ldK7V%2FLZcA5Jv9b3jchtVeB%2F%2FXB14Lyi3MwQ2JQoFZxe2605y0XEuPOd99Yfz11knA6PTcqGaOQIO2n7tEtyTcNd0td01tR9MRO2C3IAntxlUBLrpOO47k6THHgZZ6Y3opSviFzRCvdlfzVHkH6l51hm4CDLQtE5Z%2BAzKhItcknsIGzjW6nAOCy%2FtdicrgTyBKt3AHbqzhBKW3GfnwUROGPd9Elp56uGtKw3uKCcWJjuxkVrRgVvBk9SbaNFiFmYjMT1NA7YsIzfVpLnbpCesgQ4crvynTnsbDHbqMdgJhFy2%2FNVPpHLNFN%2FMweT3Tnry8MoX9EkLcRHiax4erLRjQvEAgAwRnfa3obLUbRv%2BE9GAXBXES7ob4r9djtizuXVqHCVGn9pUL%2FT1DHIeVdfklc9m5Ycc3nsva9kH9MwkOj2FKnCIQJjmd6YNFiYGsoBlAhbA4wc%2FBKovXVPjA02U1mMUz7id5N7hBDiIt20p2jEcWQYz7iU5T9iZ4svSK1Yx2wBhkpEzKXvP87jWzXpaRjJ%2Fm5C7K7TVTFxV0oaALxfSXgkazLR0RCb9zlsR6OOamp6B2IsM%2Btt2PalnN7j9eKTwXFpX5IlznEg8eEOd3GwQWYsGtQ1vFUmCMOr05MIGOqUBTy%2BK75WM7mOIZR4zMlEgRf3grjopwnn49pitQZWC0yBgCtLKLIJZbKN1G6jFEEzcUilQAptO2OnZ1sPkBmemcN7Nhz9UoK3tvH3TZYwnxGyKGuXCE58kSNwpHrr6aEir%2BC8%2BJHLjDBEcwqIt6QIzwXlJfxwHIfnqq%2BBNMlaefcksIYUmQGJ5KIOa%2BxFAj5DUU%2BexBwpV%2FLzR832kQCqipcUCEoaF&X-Amz-Signature=f4d9ee411b54345a62b7c1110a097fa56bc296e700bb4127587ae26bfcb3a40b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5MTBJU3%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCy21xIW6K8vVNss%2BoQVavvs2jUC3%2Bf%2Bh2FuGbvLFKr%2FQIgUAKUh1EQqM3aVPJ%2Fa6EWo%2FxOTrbl1oQJy%2FsHkncGGhoq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDOxmbgxSVIGJcmC8FircA80ldK7V%2FLZcA5Jv9b3jchtVeB%2F%2FXB14Lyi3MwQ2JQoFZxe2605y0XEuPOd99Yfz11knA6PTcqGaOQIO2n7tEtyTcNd0td01tR9MRO2C3IAntxlUBLrpOO47k6THHgZZ6Y3opSviFzRCvdlfzVHkH6l51hm4CDLQtE5Z%2BAzKhItcknsIGzjW6nAOCy%2FtdicrgTyBKt3AHbqzhBKW3GfnwUROGPd9Elp56uGtKw3uKCcWJjuxkVrRgVvBk9SbaNFiFmYjMT1NA7YsIzfVpLnbpCesgQ4crvynTnsbDHbqMdgJhFy2%2FNVPpHLNFN%2FMweT3Tnry8MoX9EkLcRHiax4erLRjQvEAgAwRnfa3obLUbRv%2BE9GAXBXES7ob4r9djtizuXVqHCVGn9pUL%2FT1DHIeVdfklc9m5Ycc3nsva9kH9MwkOj2FKnCIQJjmd6YNFiYGsoBlAhbA4wc%2FBKovXVPjA02U1mMUz7id5N7hBDiIt20p2jEcWQYz7iU5T9iZ4svSK1Yx2wBhkpEzKXvP87jWzXpaRjJ%2Fm5C7K7TVTFxV0oaALxfSXgkazLR0RCb9zlsR6OOamp6B2IsM%2Btt2PalnN7j9eKTwXFpX5IlznEg8eEOd3GwQWYsGtQ1vFUmCMOr05MIGOqUBTy%2BK75WM7mOIZR4zMlEgRf3grjopwnn49pitQZWC0yBgCtLKLIJZbKN1G6jFEEzcUilQAptO2OnZ1sPkBmemcN7Nhz9UoK3tvH3TZYwnxGyKGuXCE58kSNwpHrr6aEir%2BC8%2BJHLjDBEcwqIt6QIzwXlJfxwHIfnqq%2BBNMlaefcksIYUmQGJ5KIOa%2BxFAj5DUU%2BexBwpV%2FLzR832kQCqipcUCEoaF&X-Amz-Signature=75da924d10f709ec66b4e2a0b41ff9f8d250191213a443c304d912bd89c81c52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
