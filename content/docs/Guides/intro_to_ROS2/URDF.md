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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO5P23RU%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEDAlSHieGuJpeWarUGhUbwChzFCTHOG7LYd8sjCBthAiBr6CQdTu%2FemzrYyoOwbUqWdjSWlT4HR5h7uQ%2FolYu4jyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLnu%2BthyPjNZ8%2FIkIKtwDzIAwc1Z4b92AFbnONrh0VgJig75kJF48NjRUZw6MfLb5D%2BAwpLFWT%2B0LiOexC0sYTTI6SMlcfYF%2FEq1ELHUa%2Bne77qd6QasRonFjWscqgxWhEaryQcNDc%2BlHwR3dKKEd74IcMbs%2BRcgJZdhOl0yzz%2FRKdZajdOoDdBuZ0L1xLQ5LxrGjI0KIRZ4VtrRG58juuZpRmMywscd%2FwwXaXwcwTNPEZjWKPcOVK%2FAkuMbK%2BMUBAUIq%2FEhtm1H%2BpcZ82X4TLm%2FasUmOX9ftvBHx4Tb8sXvWX1SIRZsAYPt5AkvrbN3Bgq549uFLoqjLPYsE85kKzEpw2KW%2FA%2BMOEQNzY6%2Bi2sCMsivDd9iO0ickmAQchEACU685yJzItvXjcRD94fV2CgpOotWa4UMF429uTbEmNE%2BjyO759%2BFVdo8FabXlxEh%2BI6DATDi%2Fc5wzvlPrJAQRswsPOn9Y43Zm2%2BEPDhbnDsKjkF5GQcyefcvplWbDlrOUPFnER2%2B9OVRQwlgylgBlHrZ%2FkDS7pAzUIcPc5J5WPB8l6mOnPUmOBKjtDRjVaDVlq1LjN8StF%2BtcMrUCM15%2FMF2qrwIYyaFW2UeI%2Bhngy4DZVUh8cl%2FvyVfOLmOPzJbM2oq3dNqLttcRlLQw99GrwQY6pgFgy4%2F7oDv1SJKQV1yf%2FBZtngC%2FBu2MYoqbtVptfJAgHJ9AqqhxRNJFoW8UzPbofYDB5N7LfBttDajZ0x22uS9%2F8BCL%2FO5KwMZvh9FGYrHP3n3vH6%2B6OAdWl9tHiLiUCdw775Cz33mHmC6xRtcm0OzjgrOpO7%2B7%2BHqmbgmI07THusfBPGnRQa%2FUiAfU96RxBqY0Yqhh7nfUYZsITGCQbY0rqL6H6g%2FX&X-Amz-Signature=da45075b2972f7eaab0d48e16a87c22c25164e2cdb9de4d1e156d1fc1d8676d0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO5P23RU%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEDAlSHieGuJpeWarUGhUbwChzFCTHOG7LYd8sjCBthAiBr6CQdTu%2FemzrYyoOwbUqWdjSWlT4HR5h7uQ%2FolYu4jyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLnu%2BthyPjNZ8%2FIkIKtwDzIAwc1Z4b92AFbnONrh0VgJig75kJF48NjRUZw6MfLb5D%2BAwpLFWT%2B0LiOexC0sYTTI6SMlcfYF%2FEq1ELHUa%2Bne77qd6QasRonFjWscqgxWhEaryQcNDc%2BlHwR3dKKEd74IcMbs%2BRcgJZdhOl0yzz%2FRKdZajdOoDdBuZ0L1xLQ5LxrGjI0KIRZ4VtrRG58juuZpRmMywscd%2FwwXaXwcwTNPEZjWKPcOVK%2FAkuMbK%2BMUBAUIq%2FEhtm1H%2BpcZ82X4TLm%2FasUmOX9ftvBHx4Tb8sXvWX1SIRZsAYPt5AkvrbN3Bgq549uFLoqjLPYsE85kKzEpw2KW%2FA%2BMOEQNzY6%2Bi2sCMsivDd9iO0ickmAQchEACU685yJzItvXjcRD94fV2CgpOotWa4UMF429uTbEmNE%2BjyO759%2BFVdo8FabXlxEh%2BI6DATDi%2Fc5wzvlPrJAQRswsPOn9Y43Zm2%2BEPDhbnDsKjkF5GQcyefcvplWbDlrOUPFnER2%2B9OVRQwlgylgBlHrZ%2FkDS7pAzUIcPc5J5WPB8l6mOnPUmOBKjtDRjVaDVlq1LjN8StF%2BtcMrUCM15%2FMF2qrwIYyaFW2UeI%2Bhngy4DZVUh8cl%2FvyVfOLmOPzJbM2oq3dNqLttcRlLQw99GrwQY6pgFgy4%2F7oDv1SJKQV1yf%2FBZtngC%2FBu2MYoqbtVptfJAgHJ9AqqhxRNJFoW8UzPbofYDB5N7LfBttDajZ0x22uS9%2F8BCL%2FO5KwMZvh9FGYrHP3n3vH6%2B6OAdWl9tHiLiUCdw775Cz33mHmC6xRtcm0OzjgrOpO7%2B7%2BHqmbgmI07THusfBPGnRQa%2FUiAfU96RxBqY0Yqhh7nfUYZsITGCQbY0rqL6H6g%2FX&X-Amz-Signature=7d402c192d796cdcb219b2d1d666ffdf9494e67ddea275bb6bc75cae3224a3de&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
