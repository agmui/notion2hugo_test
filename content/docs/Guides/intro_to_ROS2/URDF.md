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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3KOAHBD%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIDT0B5WhxL9NWXXOmHYchgrOoYB65lBhkp4ggWOQC3pVAiEA2MINntb%2FfKN3g2ocvbHkQ67NSxtRQy%2BQ8aCTuAVqr%2FcqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBosD7AnrCC1bHLyfSrcA74Dve6bsFNTCtZY7e3Hb7OoYMnKjfYfAgpBHUGicJK9wszp1wqemUUinW%2FlSbhr%2F9iWuvEsycR7HPPPB7UHEXETGH%2Fnyu3J1H8puCNs%2BHxwWXRF35n59GvQS7uIwtyOqS7vjg%2BJi1gkK%2FX7VAJER1amx9fJpi43F63XhIgUCrwU9VipEByWibeVmnsA9cqT1xfTXs7N6paT2Eix%2BfZmHL59WnhwzRHNDvqx6a8pA11ObV486k8fIfWfe1Rp%2FPSLZysIgtptA1ti18s5MpuM32qnaEjvc9HkbPHOJlRBoaq7%2Be0qltqJ%2F9YBxv74eCdLoHL18XVryY8qeyl%2Fq%2BNyZK%2F7mAKD2vULI%2BUq85AIWsvw1tca%2F56QFhRbQrSjtPKehvW6%2B%2FsIHMVvNRBVuecW0QgD5gFrX5P7l3QpMc0M%2BOR3ZvrmI6kHEDjh75k32rxotB51Q8h1imOGnh%2BVQ7KkpZ9bIpp%2FPzmj0EM%2BSGhRP72cPxthi3RYxXP7G%2BlyHdI%2F3sLMNv9VWTYCmAFajyIne5%2BMfOREEjG6riQjti7Skj%2FDWsdNxPl45phq1HUwSKu2GrEgVbc6lE6IVdhPlKeiGzVXnqW7fN25%2F1DxNx9ELYnRe50qtnzsDSaWX88CMNPrwMEGOqUBLI0T5uRSuU%2B2zjcYFF1SFcCr3CdNdPEW38G4hieKnSdeDpJrDddJMBNwYEFSQ3M95XMKOaeESzAKLizkIVkjjv7BPk3dYWz80px93hw3Rn%2BTtylp4HXEZvTeSGI0YG1mjLaq2LkZgTMo0i9x8d2oijb0gZptWK05FthLByTPzNCTjue6FY4BO4zkbO8noDHMe8I36Tc43lMDx4uUw%2F7%2BALA4j%2FgA&X-Amz-Signature=f3f71c6b13f9ebda9faa10d3f778f355407be0a16b3295275fb8e22dd89bb55e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3KOAHBD%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIDT0B5WhxL9NWXXOmHYchgrOoYB65lBhkp4ggWOQC3pVAiEA2MINntb%2FfKN3g2ocvbHkQ67NSxtRQy%2BQ8aCTuAVqr%2FcqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBosD7AnrCC1bHLyfSrcA74Dve6bsFNTCtZY7e3Hb7OoYMnKjfYfAgpBHUGicJK9wszp1wqemUUinW%2FlSbhr%2F9iWuvEsycR7HPPPB7UHEXETGH%2Fnyu3J1H8puCNs%2BHxwWXRF35n59GvQS7uIwtyOqS7vjg%2BJi1gkK%2FX7VAJER1amx9fJpi43F63XhIgUCrwU9VipEByWibeVmnsA9cqT1xfTXs7N6paT2Eix%2BfZmHL59WnhwzRHNDvqx6a8pA11ObV486k8fIfWfe1Rp%2FPSLZysIgtptA1ti18s5MpuM32qnaEjvc9HkbPHOJlRBoaq7%2Be0qltqJ%2F9YBxv74eCdLoHL18XVryY8qeyl%2Fq%2BNyZK%2F7mAKD2vULI%2BUq85AIWsvw1tca%2F56QFhRbQrSjtPKehvW6%2B%2FsIHMVvNRBVuecW0QgD5gFrX5P7l3QpMc0M%2BOR3ZvrmI6kHEDjh75k32rxotB51Q8h1imOGnh%2BVQ7KkpZ9bIpp%2FPzmj0EM%2BSGhRP72cPxthi3RYxXP7G%2BlyHdI%2F3sLMNv9VWTYCmAFajyIne5%2BMfOREEjG6riQjti7Skj%2FDWsdNxPl45phq1HUwSKu2GrEgVbc6lE6IVdhPlKeiGzVXnqW7fN25%2F1DxNx9ELYnRe50qtnzsDSaWX88CMNPrwMEGOqUBLI0T5uRSuU%2B2zjcYFF1SFcCr3CdNdPEW38G4hieKnSdeDpJrDddJMBNwYEFSQ3M95XMKOaeESzAKLizkIVkjjv7BPk3dYWz80px93hw3Rn%2BTtylp4HXEZvTeSGI0YG1mjLaq2LkZgTMo0i9x8d2oijb0gZptWK05FthLByTPzNCTjue6FY4BO4zkbO8noDHMe8I36Tc43lMDx4uUw%2F7%2BALA4j%2FgA&X-Amz-Signature=cacefd0ff2a676b5967f687d22ba5ec30a875c9df2541c6aa6b2462af89989ba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
