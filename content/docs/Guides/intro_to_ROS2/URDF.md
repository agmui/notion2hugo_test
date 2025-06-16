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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656VTG7TE%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICaCXRKEl5Y4tRUOUkFbyFvGKAjt9pJkT64gF%2F3HJH8yAiEA%2F9QHOQ%2F8fAJBQQq0simRUarTyxwyD7ZrWRatN5rO4zAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAnstENk8PiW4nQVqSrcA5geDYhBWrP3dInw47WJoCuQofNa2OGudglR6%2ByWGh%2F%2BClTsKoeMszXqnaUX76i3YAfzUn4eqR7wdyDKvB7tXkAykefnX8fcaMdM5R5810WcSm%2BnaV%2BHZ4I%2FmSEbyk7atr9hSsBScWqpYH4hPrQIR9xFGG3aE%2BPuPYd38WO7uhE13%2FHl%2FkDDrWkoTi1aUEKuLNT6yuSDOg6Q%2FSRk21NyaukJBJ2UXWvUE9vfLqqAED83pDKPZt2FHtHRZmwvJeuxklC0T6dR94La0UrE2UYJSG9cxZGd0A9xy4NtcoV71wty%2FWZFt%2FzH3%2FZdM3hTtQkr7d5r9Kzlc3mQanBPYOy5yutk7GdMttyiit5RgJg6nPSeAap2QBc3a12kRW7lKD0OQwheY9tQpuwdtt%2FiaMl3WehVpxz9W0VBgWaxf78edkpqk%2F6VlJ6WfkW2TFjIfm77n%2BJyoCKv1SZRRm3B5GRzJxR1yWfM5sb6RUo7GvyfqZvAHjbpe9cM8K9ViRzaSNtn17CnFEY9Qh%2FWNnnoHsFxlI52jxrJ3FeMwIRYDjFlaxMsGLayuGfFVQCjdcUpc57ihUCM%2ByWyzCJtPFKeROMHhVOcUcY2HIqlG%2B0tDrIu94Y%2FxaGOlSBwRSHNZP%2FAMKSOwsIGOqUBoBM3AsePJC37L3wxl2KmiO4q7I4Nt%2BYEXvLfcxmWDsXhnp1qdt7vEafqKSu76G2XXHT%2F1c0%2B2VzLXsPm3lwmvUP5awXgGnn8xlOOPW%2FCi77cpRnZuVLU76dOGpxDBueWkmwBQGvjQV2BnOnRsm%2BhHjkXdPc7mxc5Iz4w%2Bsy%2B0YaeOdy4mRuSyp0vu5TcbQD3PO%2Fcm7JdBMa9KJSko7kbYL%2Fli377&X-Amz-Signature=2caacd937f39e1590129127501ed318641ddd4c3812dc6430182510321bf3049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656VTG7TE%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICaCXRKEl5Y4tRUOUkFbyFvGKAjt9pJkT64gF%2F3HJH8yAiEA%2F9QHOQ%2F8fAJBQQq0simRUarTyxwyD7ZrWRatN5rO4zAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAnstENk8PiW4nQVqSrcA5geDYhBWrP3dInw47WJoCuQofNa2OGudglR6%2ByWGh%2F%2BClTsKoeMszXqnaUX76i3YAfzUn4eqR7wdyDKvB7tXkAykefnX8fcaMdM5R5810WcSm%2BnaV%2BHZ4I%2FmSEbyk7atr9hSsBScWqpYH4hPrQIR9xFGG3aE%2BPuPYd38WO7uhE13%2FHl%2FkDDrWkoTi1aUEKuLNT6yuSDOg6Q%2FSRk21NyaukJBJ2UXWvUE9vfLqqAED83pDKPZt2FHtHRZmwvJeuxklC0T6dR94La0UrE2UYJSG9cxZGd0A9xy4NtcoV71wty%2FWZFt%2FzH3%2FZdM3hTtQkr7d5r9Kzlc3mQanBPYOy5yutk7GdMttyiit5RgJg6nPSeAap2QBc3a12kRW7lKD0OQwheY9tQpuwdtt%2FiaMl3WehVpxz9W0VBgWaxf78edkpqk%2F6VlJ6WfkW2TFjIfm77n%2BJyoCKv1SZRRm3B5GRzJxR1yWfM5sb6RUo7GvyfqZvAHjbpe9cM8K9ViRzaSNtn17CnFEY9Qh%2FWNnnoHsFxlI52jxrJ3FeMwIRYDjFlaxMsGLayuGfFVQCjdcUpc57ihUCM%2ByWyzCJtPFKeROMHhVOcUcY2HIqlG%2B0tDrIu94Y%2FxaGOlSBwRSHNZP%2FAMKSOwsIGOqUBoBM3AsePJC37L3wxl2KmiO4q7I4Nt%2BYEXvLfcxmWDsXhnp1qdt7vEafqKSu76G2XXHT%2F1c0%2B2VzLXsPm3lwmvUP5awXgGnn8xlOOPW%2FCi77cpRnZuVLU76dOGpxDBueWkmwBQGvjQV2BnOnRsm%2BhHjkXdPc7mxc5Iz4w%2Bsy%2B0YaeOdy4mRuSyp0vu5TcbQD3PO%2Fcm7JdBMa9KJSko7kbYL%2Fli377&X-Amz-Signature=5d8647da2bd842d8d6bd90d8def24d95b672343c490c65ee36b932a8e1edb13a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
