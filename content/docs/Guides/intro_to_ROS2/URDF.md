---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOTCF2R4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDshZpCwsjRN9KBbWft1xZvTSCyE4TfXsFe2S9X91Ky%2BwIgIF%2Bl2I6ijA0YOTUnWzWI9BEr%2FYLv1%2BRRhgYto%2BiOm%2B0q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDI%2BO%2FcWPk%2B7yre2iwyrcA3vJ%2FsHsg6%2FMZomdG%2FUJ%2FGMDyW60sCToCvs1z59RwAuS62F0magnoceDCZVTfDZ3m2taTgV7jRUCIoHVl1ZQSXjqpAosVoCqBdKRV3M%2FsHnO2rV84svVfriDw6QPm35J%2BJvRDElDQ1roxSCMsyEXQKiBD5g8G5lsL3FmLUJmXQOPlowOI9kwx5jSHcH2cdaP6TBctSianNvcny4r%2Flflhqgv0EqZh7%2FTH4%2BGgZ88QMd56cEoCBDrCdbqTkGfA7fubc2ldBIxWOr7pGTvLbnXnrWRsl60u3amTEvmhAUvTZmsLHbdgg7olxjqWsx8%2FB%2BLdg4uQW0oYYE8UI%2FDRdi%2FQrYrwEpSV5E6Yysj4BowryeTJZ2WPZJpoglhY4Q%2BYkDM4EvFKTPxLq9y6i5Q4v4GOKym1IlSnWMhZAOPdpfR9tgH7ysbEZPxsA8wMlfUXpQUMArxbNIafyFp5%2BOJWjozdRuL5NVRyayy9DerWyJuhYX4TjWSm9rL1nJOlCkNyInjYCP2CinhEVGtX3dbx3ic3uYz7SKEkBhlFWQ68F%2BO4ZXj5rVecl4rA2cf%2FIo4OgeFwC5YfgO%2BON%2FSqMbLr1tyEAUUoI1Wtr%2FRpV5kS%2F5cxscYaaMUB1u0zBWAW6nQMMbwy8QGOqUBaikSj849WG8foG%2F5vF3E1Prv98RioXueQFwOebA7nx9V88NmSfgmn%2FRTPoXSI8KnPtfBoadQhBRYzIPqs3%2BIHrVVh%2Fpg0Y%2BVvl2%2BmZrsv9Q7%2FMJ9n08pYEEGvwDRhCyeLSXOuraXwTN08SNht68JGyRyyWwBKepOszRuWRdtEboYgF2IQEMvvzbchhuBQMx1NmGh6itkkSeWxIheWCB0wcq8eZX8&X-Amz-Signature=02203b9a968b4d90a144f1bfa29ab56d4ba099bf159413f2cde7c9699a2c4828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOTCF2R4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDshZpCwsjRN9KBbWft1xZvTSCyE4TfXsFe2S9X91Ky%2BwIgIF%2Bl2I6ijA0YOTUnWzWI9BEr%2FYLv1%2BRRhgYto%2BiOm%2B0q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDI%2BO%2FcWPk%2B7yre2iwyrcA3vJ%2FsHsg6%2FMZomdG%2FUJ%2FGMDyW60sCToCvs1z59RwAuS62F0magnoceDCZVTfDZ3m2taTgV7jRUCIoHVl1ZQSXjqpAosVoCqBdKRV3M%2FsHnO2rV84svVfriDw6QPm35J%2BJvRDElDQ1roxSCMsyEXQKiBD5g8G5lsL3FmLUJmXQOPlowOI9kwx5jSHcH2cdaP6TBctSianNvcny4r%2Flflhqgv0EqZh7%2FTH4%2BGgZ88QMd56cEoCBDrCdbqTkGfA7fubc2ldBIxWOr7pGTvLbnXnrWRsl60u3amTEvmhAUvTZmsLHbdgg7olxjqWsx8%2FB%2BLdg4uQW0oYYE8UI%2FDRdi%2FQrYrwEpSV5E6Yysj4BowryeTJZ2WPZJpoglhY4Q%2BYkDM4EvFKTPxLq9y6i5Q4v4GOKym1IlSnWMhZAOPdpfR9tgH7ysbEZPxsA8wMlfUXpQUMArxbNIafyFp5%2BOJWjozdRuL5NVRyayy9DerWyJuhYX4TjWSm9rL1nJOlCkNyInjYCP2CinhEVGtX3dbx3ic3uYz7SKEkBhlFWQ68F%2BO4ZXj5rVecl4rA2cf%2FIo4OgeFwC5YfgO%2BON%2FSqMbLr1tyEAUUoI1Wtr%2FRpV5kS%2F5cxscYaaMUB1u0zBWAW6nQMMbwy8QGOqUBaikSj849WG8foG%2F5vF3E1Prv98RioXueQFwOebA7nx9V88NmSfgmn%2FRTPoXSI8KnPtfBoadQhBRYzIPqs3%2BIHrVVh%2Fpg0Y%2BVvl2%2BmZrsv9Q7%2FMJ9n08pYEEGvwDRhCyeLSXOuraXwTN08SNht68JGyRyyWwBKepOszRuWRdtEboYgF2IQEMvvzbchhuBQMx1NmGh6itkkSeWxIheWCB0wcq8eZX8&X-Amz-Signature=66c6068f59c4f61282f99a7c21b9c1c5cbb404e03b40852c8ef4357d91382897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
