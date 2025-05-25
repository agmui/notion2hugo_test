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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GNO3DPG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDnvugN5kIvgCU2uHJkSv5G9wbi7m6xx%2B43E37LV6emUQIgf8SjSkt4JfZJwfQZ1FHAEU3EIQIszwpZ7IfKtIj9%2Bp8q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDG4Ye80ZQWgJTKPe5yrcA1QSF91nfMgV4Tdj9PM6wSiB2ONovcJzzzb9TBxjJHIZmL9nPR0ejTnWxiy6L2aQppoD0CNtNSose7VdcT0HPG05RV4pc9mGkUGrLr%2BCKy6fakrZvwviYtWhmtLutLnOeQEv6Ziup004rxhTRG8rkHVSIhOoNaejMeYuowZVzFX4nybzLUGEpzuD2wtr1IlBp0UCABO6R4aorlJwEJ4LYzcL0nZVElbmnplaY0DmRO%2B0wDrddBNNggej%2FPhSZt7OdM549mjc3ax0njxcmDT%2FvNVoGVRz8nDIInZpNW%2BBqO0s%2BrBxe9U7iG6oWaB5NkLFoHQPOeyDEudlHW92JFxrZIbO%2F5DE%2FMr8JVLC90BCAdhk%2BJagFv3plpMsPfY6Mvfia020dYteNq2VljMBhQjrPPFLCcNTSObagimxyrVqAODoHt3iXCAeQFaB1CS7ULNRMl9jvJpwMgMvS4vgp77HYEgmQA%2FCi%2B7xLAl%2BJymKFE3tANqDwHl2ruQT9RzrCTzen%2Bjba8efA2UxsZ9lGZYOCbGVhOmHJ3SwGqZbq2xdMvsbnhtDu9dWYoxzASC353U5q39mUZ9id2EyNq0KPP6Mjl9Cf2Wb8M3vz4aeSnX5N0%2FrJ3fhzyhRruboUSj%2FMJD%2FzMEGOqUB9Wt%2BbUhUICy6gPrl1lyYFkZ1aywW%2BFbSrw59K4RxaHoVKNrqGH9RhgHlh1sXvMVv8vNzGUSx2Cbrhxk%2FjrmBB3zzXBjwbXBcUKnhyl3HCLJixHFYDtbol%2F7V8%2Bdl28sP346oGgrzJ5Bkqx1fzN5Df5UCauZkbvoJmUHZUbLdHp9u70F9curypSsJNrvIJbXkRgwSIdiPCjohVqtVO601STXm3PC6&X-Amz-Signature=b75c0b35a46dd913ff2e37d56a2899f9ea1782f585c67d65b1f3cc96b4f3de35&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GNO3DPG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDnvugN5kIvgCU2uHJkSv5G9wbi7m6xx%2B43E37LV6emUQIgf8SjSkt4JfZJwfQZ1FHAEU3EIQIszwpZ7IfKtIj9%2Bp8q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDG4Ye80ZQWgJTKPe5yrcA1QSF91nfMgV4Tdj9PM6wSiB2ONovcJzzzb9TBxjJHIZmL9nPR0ejTnWxiy6L2aQppoD0CNtNSose7VdcT0HPG05RV4pc9mGkUGrLr%2BCKy6fakrZvwviYtWhmtLutLnOeQEv6Ziup004rxhTRG8rkHVSIhOoNaejMeYuowZVzFX4nybzLUGEpzuD2wtr1IlBp0UCABO6R4aorlJwEJ4LYzcL0nZVElbmnplaY0DmRO%2B0wDrddBNNggej%2FPhSZt7OdM549mjc3ax0njxcmDT%2FvNVoGVRz8nDIInZpNW%2BBqO0s%2BrBxe9U7iG6oWaB5NkLFoHQPOeyDEudlHW92JFxrZIbO%2F5DE%2FMr8JVLC90BCAdhk%2BJagFv3plpMsPfY6Mvfia020dYteNq2VljMBhQjrPPFLCcNTSObagimxyrVqAODoHt3iXCAeQFaB1CS7ULNRMl9jvJpwMgMvS4vgp77HYEgmQA%2FCi%2B7xLAl%2BJymKFE3tANqDwHl2ruQT9RzrCTzen%2Bjba8efA2UxsZ9lGZYOCbGVhOmHJ3SwGqZbq2xdMvsbnhtDu9dWYoxzASC353U5q39mUZ9id2EyNq0KPP6Mjl9Cf2Wb8M3vz4aeSnX5N0%2FrJ3fhzyhRruboUSj%2FMJD%2FzMEGOqUB9Wt%2BbUhUICy6gPrl1lyYFkZ1aywW%2BFbSrw59K4RxaHoVKNrqGH9RhgHlh1sXvMVv8vNzGUSx2Cbrhxk%2FjrmBB3zzXBjwbXBcUKnhyl3HCLJixHFYDtbol%2F7V8%2Bdl28sP346oGgrzJ5Bkqx1fzN5Df5UCauZkbvoJmUHZUbLdHp9u70F9curypSsJNrvIJbXkRgwSIdiPCjohVqtVO601STXm3PC6&X-Amz-Signature=1651c16cbc877f5e736916356e71f14a02505ef596d39365e5ce4f81930339d3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
