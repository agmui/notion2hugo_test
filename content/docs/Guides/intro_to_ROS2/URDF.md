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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BZAVDVU%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBki6ikwCFgIhQ2ZnNCPOo%2FSEQMUPCCOaisL4u7aSQPvAiEAsD5ecyS3sENGqqRIZotcjrQZTCa9KxhqRNLgkZ3qeocq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDD45w4TvTuKdRH2UUSrcA88VGynAnkJMEnKY8P5PCW7pY6hrKNclKDC01GZ%2BeY9gb29iSH9DNWbOsPgdu8dhcMug2cf7BboIIreKYmACwjUCrThEqEPMlACR2pZftOoo0Ahjgyqh9jYKhmEMqUOr9yhRV2yvCPylTlA8C4jMi%2Fa9qIhl57uts%2B8Uc5EEZQCHXGWvvxGIK2tgtCDKtlis4u5JQp64aiZLC6GcGabuzXxqTe0%2FOrVKOgTIOLLP9jtDDbttDeOPWaVaKzM2sNmy4QSR7yYqEusjL%2BnsHU2tSw0hF8VcMFRKYeTeuCCsolxBDQ1H6Bgw5yeoYb2x47oPg5N3GwN1PfAEeytL8SY6mQ%2F%2FYMm0e8mJSvm%2BOBlNKCs%2BIon5foQrbGIOoEk7eVUJoyZMxkvxRtRGo0PcaYyaEU1q3rQeO65n9ljYqYFoTPAUITdC4vow%2FGNY1yOrVn1QeoyZdn5pU8iAXtREn%2By5PIqkPrNld955TB%2B5ERoiZJQt2%2F6jUc0n0TCnXYbt%2Fg%2BS8DIJ7QkOKgjABCfckutZpYEBNnINWmrillHcp0URaRQzWnaQQ1ihy%2BEFPKN7io9fTt03BCaz5VZUkDkfiUV1ndQihY688J88vhQSEfW2FdxJNdc4kFyGU7KleeU0MMbz5MIGOqUBKMpR8FknNVlTYi1zgYA%2FUMzqzFAeJSKfKewOJh7lTzSJGttvXRwlKy4Gegl0OzxK9C2U1L%2BdPnlPfeYGbevIKdAppMSn6znXyjTC9SGdF%2Fq3h1vg%2FmxIECfVcXCe047PsPSPgYg8vCJ88nmAnN32jZfShocuBLBBBiW4Hkg3msVS2Lvg6iQUpfNL6S6kZSPQROxd0R3gGrC8G6ZvZuIuH5ayXPEY&X-Amz-Signature=ac09eae3c168a86c093928cf3429e47b3a3a250aa1f0a1c538ce9c434b7913af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BZAVDVU%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBki6ikwCFgIhQ2ZnNCPOo%2FSEQMUPCCOaisL4u7aSQPvAiEAsD5ecyS3sENGqqRIZotcjrQZTCa9KxhqRNLgkZ3qeocq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDD45w4TvTuKdRH2UUSrcA88VGynAnkJMEnKY8P5PCW7pY6hrKNclKDC01GZ%2BeY9gb29iSH9DNWbOsPgdu8dhcMug2cf7BboIIreKYmACwjUCrThEqEPMlACR2pZftOoo0Ahjgyqh9jYKhmEMqUOr9yhRV2yvCPylTlA8C4jMi%2Fa9qIhl57uts%2B8Uc5EEZQCHXGWvvxGIK2tgtCDKtlis4u5JQp64aiZLC6GcGabuzXxqTe0%2FOrVKOgTIOLLP9jtDDbttDeOPWaVaKzM2sNmy4QSR7yYqEusjL%2BnsHU2tSw0hF8VcMFRKYeTeuCCsolxBDQ1H6Bgw5yeoYb2x47oPg5N3GwN1PfAEeytL8SY6mQ%2F%2FYMm0e8mJSvm%2BOBlNKCs%2BIon5foQrbGIOoEk7eVUJoyZMxkvxRtRGo0PcaYyaEU1q3rQeO65n9ljYqYFoTPAUITdC4vow%2FGNY1yOrVn1QeoyZdn5pU8iAXtREn%2By5PIqkPrNld955TB%2B5ERoiZJQt2%2F6jUc0n0TCnXYbt%2Fg%2BS8DIJ7QkOKgjABCfckutZpYEBNnINWmrillHcp0URaRQzWnaQQ1ihy%2BEFPKN7io9fTt03BCaz5VZUkDkfiUV1ndQihY688J88vhQSEfW2FdxJNdc4kFyGU7KleeU0MMbz5MIGOqUBKMpR8FknNVlTYi1zgYA%2FUMzqzFAeJSKfKewOJh7lTzSJGttvXRwlKy4Gegl0OzxK9C2U1L%2BdPnlPfeYGbevIKdAppMSn6znXyjTC9SGdF%2Fq3h1vg%2FmxIECfVcXCe047PsPSPgYg8vCJ88nmAnN32jZfShocuBLBBBiW4Hkg3msVS2Lvg6iQUpfNL6S6kZSPQROxd0R3gGrC8G6ZvZuIuH5ayXPEY&X-Amz-Signature=474959b0efaeeeead1e240ead5bcf46f7f121651371f0e4261a5eabecf0335d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
