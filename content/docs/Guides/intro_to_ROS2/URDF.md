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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDIK6M2D%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAcW%2BkViNF6M%2BtyOumarVvDcuCcjjWPaTS35zSHHBbqSAiEAvrl7PrrnPelKm8fAtrgvEbtlFCOLtkEY3W5c1y2O2Egq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDD2fLhgFAKKGJMIp%2BSrcA2d5551Aes7aFMRwiDluVVrDHDoRakb2Ke2RpIZmJIKJz2pPJ7KqSvm7T7zpnRdxaGfYKNTod0acfSR%2Flhgc57aFjQflCAUQ3vmt3BzW3FQ8vjLVqJ0WGcdnO4oRpt1tXHuXVv36QyraNYNdAsNYc8zrN8pl5uva0ViH5a9PiQORUewoR5SV78UqxFjvF%2FsohyFZM84AOlPWLwfLAk8SNYGb50cw4yj957AtfLPQgL8TEu3XaSakLbkJi7pCttakAb2zRB1XCEdke45C0%2BJZiJXkiKukzGJ19BiX6%2FMFReKJTIGMzs%2BPwhmc2xPaUwbJVNfEGUX2gWvwotQniVTKgdkZx1JODi2abiqMgFX3fn73Q13ogVtMkqgaWAC3a1JK6uhkYTb3jVynB%2BUcUtLXlPN17D2BSlC03J7Nxi6RswvHerSzQ4Re0I5CghHE80iadOqwxzKLbf7d%2BMVVULYN13BHr3EC7VmQdnX7lsLGzwYZXq8KvDwa9ThOmja79J3dT2Q3RwDLJ87vaW7wd52EGuXSKI6My4kLJYe9aginsQOlC%2FmYS4NTMFt5LReMqqOqe0PIs8ZIBxRc2azYltAJd5sWeAvSSat5DnfU4AMc3fBbOx7%2FdIaVopDvnY2lMJmK2cUGOqUBi2gfcQMbUBs80ZYfxP1N7xn6SHuzAPehvuOsKUca53rPhmUhIOMrcukc1GNyWCHt09jy4foXskc2R7qaz9kUN%2Bp5CgRn%2FVaHc%2F5YdtepBs9yJvYrgpvFhHsBvENLW47ENmJMqGwiHVklQJtYRQkc3XIx4nk6h%2BjVg1zrErpgfLOv%2FcRdxJjA9Y%2B%2FuZEbQpfOYvYg7fOFusoERctheSRpcpHp3vtf&X-Amz-Signature=d36681450687dc2ca5ff6e86b54bc75925663d06abb2bd665abfda456ac8a531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDIK6M2D%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAcW%2BkViNF6M%2BtyOumarVvDcuCcjjWPaTS35zSHHBbqSAiEAvrl7PrrnPelKm8fAtrgvEbtlFCOLtkEY3W5c1y2O2Egq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDD2fLhgFAKKGJMIp%2BSrcA2d5551Aes7aFMRwiDluVVrDHDoRakb2Ke2RpIZmJIKJz2pPJ7KqSvm7T7zpnRdxaGfYKNTod0acfSR%2Flhgc57aFjQflCAUQ3vmt3BzW3FQ8vjLVqJ0WGcdnO4oRpt1tXHuXVv36QyraNYNdAsNYc8zrN8pl5uva0ViH5a9PiQORUewoR5SV78UqxFjvF%2FsohyFZM84AOlPWLwfLAk8SNYGb50cw4yj957AtfLPQgL8TEu3XaSakLbkJi7pCttakAb2zRB1XCEdke45C0%2BJZiJXkiKukzGJ19BiX6%2FMFReKJTIGMzs%2BPwhmc2xPaUwbJVNfEGUX2gWvwotQniVTKgdkZx1JODi2abiqMgFX3fn73Q13ogVtMkqgaWAC3a1JK6uhkYTb3jVynB%2BUcUtLXlPN17D2BSlC03J7Nxi6RswvHerSzQ4Re0I5CghHE80iadOqwxzKLbf7d%2BMVVULYN13BHr3EC7VmQdnX7lsLGzwYZXq8KvDwa9ThOmja79J3dT2Q3RwDLJ87vaW7wd52EGuXSKI6My4kLJYe9aginsQOlC%2FmYS4NTMFt5LReMqqOqe0PIs8ZIBxRc2azYltAJd5sWeAvSSat5DnfU4AMc3fBbOx7%2FdIaVopDvnY2lMJmK2cUGOqUBi2gfcQMbUBs80ZYfxP1N7xn6SHuzAPehvuOsKUca53rPhmUhIOMrcukc1GNyWCHt09jy4foXskc2R7qaz9kUN%2Bp5CgRn%2FVaHc%2F5YdtepBs9yJvYrgpvFhHsBvENLW47ENmJMqGwiHVklQJtYRQkc3XIx4nk6h%2BjVg1zrErpgfLOv%2FcRdxJjA9Y%2B%2FuZEbQpfOYvYg7fOFusoERctheSRpcpHp3vtf&X-Amz-Signature=536ed79a8bdd762ba8a5ea824847abd494c91e234d32eb204b424242c4cab816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
