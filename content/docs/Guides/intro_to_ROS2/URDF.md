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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLMVZB5M%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T230702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOKDACvq9QudGEwpiEPIH3T1D9DkbaVSYDMMfUkHrfKAIgN7kkmBtTJkJtmvHgKPaYRVU%2FXk%2B%2BP513zpFwXln7PfMq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDP9y2HFPJ4PHWdMxjyrcAyX1%2FqksDjGGecghNZqg3MHRR7RxXI%2BTq9ITZYC8qOBzIbx934ZoQMrsyM6JsD3HyRbEncnISdUbqwgCGOlbQA6ytqFfmLedcw9BlQKtECHVENBVdH8jaMes4HsFrG1oSINBnYyuzRwQX7%2BkpBTrV2pK757a82vNfuyk9SvDQ%2B7xOFzpCoRqGDmiqyOLsRZfZENtVfmDjFe0PwMI%2Ft18UMWYBxjF4dCRzYk8wKZU1U1N0eVATsyyAMBvJ9gRHZio%2FVsCdo3aolWyQX7%2BnsFSvjcelwpazTZWy1aLN4a5k8IC35mVg9x%2FIvzMLIc0Q6lfqKekW%2FGX3MuH5CzSadQxw13G0mcBkH5iFk%2B2hH0J7Rr%2BXNjxBEVfvCZRPvKKIZ9Ps2O2drJlx6ABxZKRcHpEE2h734bTHiMhLzL3Q2BuJWbo3IgLjwZVaFQIDafoYOBEBWdQiwSh50HQrMFitQYs4vyY2WfKjUA6YpSjG00qxa%2Fy02B7iNqX2D1FnmxTqGkQR8ADfK79CfQw3UNFkx%2FNBuRFisTKRXAiZsGKIfcBNLYB4%2B2hBiNIQDhe20JSlzYj1X0wSPbG8eWmlx3qrH7QMoH9TVLcZtjva8QcqDKmMDeMS%2B5qiGm362xZo6OBMPeB2L4GOqUBpRyflhWv6Mg2NL%2FKkpUU%2BzvrmIjivwKTujPRuyT3MrU8jqhzU4i%2BttZemXRuMeO31zaCWjMa5RmA1xXJCm0txaTs4gMGMFL1shPZ7%2FGjD%2BLJeUNqemrzQ0PDBZIYDODgNg9N%2Bw%2FEXyGay4dYkhjeRrY9LzfphpbBvMbxrci%2FojHqI2SZrQUZT9k8quraCToc7UPZrDyVkUePL9zd1Ag2ciNxfAEK&X-Amz-Signature=ff03939ffbaa9d479fc39b36ec4e49e7875c9b55936d02b72aad89c6afc7c1fa&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLMVZB5M%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T230702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOKDACvq9QudGEwpiEPIH3T1D9DkbaVSYDMMfUkHrfKAIgN7kkmBtTJkJtmvHgKPaYRVU%2FXk%2B%2BP513zpFwXln7PfMq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDP9y2HFPJ4PHWdMxjyrcAyX1%2FqksDjGGecghNZqg3MHRR7RxXI%2BTq9ITZYC8qOBzIbx934ZoQMrsyM6JsD3HyRbEncnISdUbqwgCGOlbQA6ytqFfmLedcw9BlQKtECHVENBVdH8jaMes4HsFrG1oSINBnYyuzRwQX7%2BkpBTrV2pK757a82vNfuyk9SvDQ%2B7xOFzpCoRqGDmiqyOLsRZfZENtVfmDjFe0PwMI%2Ft18UMWYBxjF4dCRzYk8wKZU1U1N0eVATsyyAMBvJ9gRHZio%2FVsCdo3aolWyQX7%2BnsFSvjcelwpazTZWy1aLN4a5k8IC35mVg9x%2FIvzMLIc0Q6lfqKekW%2FGX3MuH5CzSadQxw13G0mcBkH5iFk%2B2hH0J7Rr%2BXNjxBEVfvCZRPvKKIZ9Ps2O2drJlx6ABxZKRcHpEE2h734bTHiMhLzL3Q2BuJWbo3IgLjwZVaFQIDafoYOBEBWdQiwSh50HQrMFitQYs4vyY2WfKjUA6YpSjG00qxa%2Fy02B7iNqX2D1FnmxTqGkQR8ADfK79CfQw3UNFkx%2FNBuRFisTKRXAiZsGKIfcBNLYB4%2B2hBiNIQDhe20JSlzYj1X0wSPbG8eWmlx3qrH7QMoH9TVLcZtjva8QcqDKmMDeMS%2B5qiGm362xZo6OBMPeB2L4GOqUBpRyflhWv6Mg2NL%2FKkpUU%2BzvrmIjivwKTujPRuyT3MrU8jqhzU4i%2BttZemXRuMeO31zaCWjMa5RmA1xXJCm0txaTs4gMGMFL1shPZ7%2FGjD%2BLJeUNqemrzQ0PDBZIYDODgNg9N%2Bw%2FEXyGay4dYkhjeRrY9LzfphpbBvMbxrci%2FojHqI2SZrQUZT9k8quraCToc7UPZrDyVkUePL9zd1Ag2ciNxfAEK&X-Amz-Signature=45bb155ffbe12d4e41378f8ca430377c69c98b58f2aa846a14185935467ececd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
