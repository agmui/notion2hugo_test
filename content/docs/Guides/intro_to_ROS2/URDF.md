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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW7D773E%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T081016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOhXaAWOAydXjcnE2LSBG7BF18C6GdqCDhYEGGuP37AAiEAslP%2Fc5gRJ8KO0kRDFHRB4%2BHz1roOqSWwPg71H6B4U30qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdsuji4iqbeDW5nZyrcA0qXerFwQCXSJU2AVPrMLMPREbse1K%2BNOlnCMM8bVMMLMdnya3zfOYZqc80xKDgP71Vt5jQqMLxirWr2hqyuNHH1TskMc0dTEY2Ukf4WCTZNbaWXIuJUWE3GjfbYOKmaov%2F7exl%2BKJVWPnJzIVmBZWwLpZu4%2FsDod3siCnfRt4N%2FQcBA3Zd0ynypEWh%2FnrXquykfHh0FmWvSeFkuF2JaNIIMZwM5EvEphZMPvhqNAdbq3pz35ZM1Lhwjmg%2FFAnQbLO%2FxUNLufkhFhZlfUIV8M%2FFY6Cob80aM1e7bcsRyXYo7Gdd9NHafjrIPUrQwSDZTjRY4x%2BycEqo0qHFdeh4qsjMMyJ%2FRoJUuvz1z%2Fbj%2FJ7QJm6XCMZ%2FloKMZz7fwzlCsS9DW%2BmTWpJS%2FK2FbMjvHJJEpkHdbMXwcd6Asf13cKMWJokI%2Fq4nQVH6eEMUs2HdejPODlgS89D5H9q3UXfcQQSUBggyuLeIBoikhAnTYLghN3YagWeBzSHmYxJKqTMOO7O3xlT3S2IEvWGb5P4ROOuMttVmVBhS%2BZCxD%2BJ0S21fwKOPQwksRTVIax8fctF0lvmIQAwRX9u9nFEJC5PtBf3VZT%2BNiLo9tIlCPJKl3zbF7iGj94F%2F27lLLUsp5MLGv57wGOqUBdmUh3x2LN2NWrl8EbUcuskISEWf46M7AgxQK%2BOzGU7D%2Bc802sUzDz62F1R0IM10emVDXemlyn78tOnkS%2Fbv1zcKcfVhpIltZeuDvdW4o7T05RbErMnsIUBWjWfI405nxY70tykxU7KHOs3cHYU2VKXJb25gycT2CwuOox7IE6t3j58qyE4w549obeAr7%2FvhXjlazfnzH0y9BNibJdsebyBNX1S2c&X-Amz-Signature=a8eef3b90dae83eb864ee035cb7d6cb7fac7914d842c277a91c93c044bd70d7c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW7D773E%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T081016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOhXaAWOAydXjcnE2LSBG7BF18C6GdqCDhYEGGuP37AAiEAslP%2Fc5gRJ8KO0kRDFHRB4%2BHz1roOqSWwPg71H6B4U30qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdsuji4iqbeDW5nZyrcA0qXerFwQCXSJU2AVPrMLMPREbse1K%2BNOlnCMM8bVMMLMdnya3zfOYZqc80xKDgP71Vt5jQqMLxirWr2hqyuNHH1TskMc0dTEY2Ukf4WCTZNbaWXIuJUWE3GjfbYOKmaov%2F7exl%2BKJVWPnJzIVmBZWwLpZu4%2FsDod3siCnfRt4N%2FQcBA3Zd0ynypEWh%2FnrXquykfHh0FmWvSeFkuF2JaNIIMZwM5EvEphZMPvhqNAdbq3pz35ZM1Lhwjmg%2FFAnQbLO%2FxUNLufkhFhZlfUIV8M%2FFY6Cob80aM1e7bcsRyXYo7Gdd9NHafjrIPUrQwSDZTjRY4x%2BycEqo0qHFdeh4qsjMMyJ%2FRoJUuvz1z%2Fbj%2FJ7QJm6XCMZ%2FloKMZz7fwzlCsS9DW%2BmTWpJS%2FK2FbMjvHJJEpkHdbMXwcd6Asf13cKMWJokI%2Fq4nQVH6eEMUs2HdejPODlgS89D5H9q3UXfcQQSUBggyuLeIBoikhAnTYLghN3YagWeBzSHmYxJKqTMOO7O3xlT3S2IEvWGb5P4ROOuMttVmVBhS%2BZCxD%2BJ0S21fwKOPQwksRTVIax8fctF0lvmIQAwRX9u9nFEJC5PtBf3VZT%2BNiLo9tIlCPJKl3zbF7iGj94F%2F27lLLUsp5MLGv57wGOqUBdmUh3x2LN2NWrl8EbUcuskISEWf46M7AgxQK%2BOzGU7D%2Bc802sUzDz62F1R0IM10emVDXemlyn78tOnkS%2Fbv1zcKcfVhpIltZeuDvdW4o7T05RbErMnsIUBWjWfI405nxY70tykxU7KHOs3cHYU2VKXJb25gycT2CwuOox7IE6t3j58qyE4w549obeAr7%2FvhXjlazfnzH0y9BNibJdsebyBNX1S2c&X-Amz-Signature=df2a344443bb21bdc74d64b6c555a0b335a1bf52debd552893640fdd92726188&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
