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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MJK257G%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T110822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVoiExQQS%2BUpsKzv9xCVDcmTgYMCXxcfNEsX7q2fsh%2FQIgGZnNNPhgVUDyMSE1eXsQG%2Bi26QwGrUKEKAfbtbHGnDwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwsA55ZW%2BJ3juY0iSrcA2oPaIcI%2F32JxfmV3UShLJpQBJ5gi8E%2B5pPa%2B%2F7OMcQe21%2BSY408KabAgkBYB6YWVEDb7yQghVOHMPavoYtQjhyBpdgatlA6WAzn7V45pd8zvlPG5bD62fQHuFluJAB7raB7ui2gRgWpMxGCHdZoU88LGfiJ%2B1RVPEbnJBWMIHKca90VQvEmcoQ8qe3DsQcoltNLAtlQamlD9T9LDNQMnyZt%2FfDd26Q5IvIFfiM2h%2B0DwWdrZ7xKCrPwFuGNPURdOCrkg4ASKeedDJHkl0TleR25zi%2BqiKhh6LOWSpN6kK6mh3zb704JUnDnC7yTyh7qtyV2cf2UPKo9ehPMpo6EXaznDPttaxyw7BpZCBAMjwVeVQ1uALLaOChx9dyQ8r%2F1BDBMMjSOTpQqjTzZt12QFsrHXzs9wYl5TiOv9chcPyim8w0bhRVzhPPAWmrk9WQXltGG4h16XiFo8Zz8JM4S1KfObP7DBsuib%2FTOAxv4gTX235hpFwvSq5FmIFSGeQwe9SumuQvgJ2Tunsuu1L2fcK8sdDBzNRU%2FUDg3Y0DruEzD23KdI1PtJe4kxcxdFP4hf1Vz2EdgQg8BGFPYSj2xnYBzyXKvlheBDan7%2BJuBWFUF3jlXqLk6jfdNH6u6MNCrvsMGOqUBI%2FL4LMX3QBMjbyU%2BFRbbNCLXLNBkaWPAvtEBCKuTKTtR3NGxXyFs2gdBBeu0Bbx8RvlYXdgLiMmOXRdcZCp7OOtflr70ZlocFhjJs%2FIhPOhRr%2FVa6DmMChxTnvvyrXeJC9HfD71rzb6vZwzX7SY6RzVpa8pMmp56av%2FtZiN0Xwe%2FbCOkpYn7LUn0Kcc04VreQXcO6ee0msD6t9K9o2KxguLNOBH3&X-Amz-Signature=902177d7c6266735cb2c2a6522e2e3c83a5927aa97381bd5f4d9c23360a9a798&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MJK257G%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T110822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVoiExQQS%2BUpsKzv9xCVDcmTgYMCXxcfNEsX7q2fsh%2FQIgGZnNNPhgVUDyMSE1eXsQG%2Bi26QwGrUKEKAfbtbHGnDwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwsA55ZW%2BJ3juY0iSrcA2oPaIcI%2F32JxfmV3UShLJpQBJ5gi8E%2B5pPa%2B%2F7OMcQe21%2BSY408KabAgkBYB6YWVEDb7yQghVOHMPavoYtQjhyBpdgatlA6WAzn7V45pd8zvlPG5bD62fQHuFluJAB7raB7ui2gRgWpMxGCHdZoU88LGfiJ%2B1RVPEbnJBWMIHKca90VQvEmcoQ8qe3DsQcoltNLAtlQamlD9T9LDNQMnyZt%2FfDd26Q5IvIFfiM2h%2B0DwWdrZ7xKCrPwFuGNPURdOCrkg4ASKeedDJHkl0TleR25zi%2BqiKhh6LOWSpN6kK6mh3zb704JUnDnC7yTyh7qtyV2cf2UPKo9ehPMpo6EXaznDPttaxyw7BpZCBAMjwVeVQ1uALLaOChx9dyQ8r%2F1BDBMMjSOTpQqjTzZt12QFsrHXzs9wYl5TiOv9chcPyim8w0bhRVzhPPAWmrk9WQXltGG4h16XiFo8Zz8JM4S1KfObP7DBsuib%2FTOAxv4gTX235hpFwvSq5FmIFSGeQwe9SumuQvgJ2Tunsuu1L2fcK8sdDBzNRU%2FUDg3Y0DruEzD23KdI1PtJe4kxcxdFP4hf1Vz2EdgQg8BGFPYSj2xnYBzyXKvlheBDan7%2BJuBWFUF3jlXqLk6jfdNH6u6MNCrvsMGOqUBI%2FL4LMX3QBMjbyU%2BFRbbNCLXLNBkaWPAvtEBCKuTKTtR3NGxXyFs2gdBBeu0Bbx8RvlYXdgLiMmOXRdcZCp7OOtflr70ZlocFhjJs%2FIhPOhRr%2FVa6DmMChxTnvvyrXeJC9HfD71rzb6vZwzX7SY6RzVpa8pMmp56av%2FtZiN0Xwe%2FbCOkpYn7LUn0Kcc04VreQXcO6ee0msD6t9K9o2KxguLNOBH3&X-Amz-Signature=30cabfdbbde6b39ee8b97bfc0ad36a79d10434d49253324dba5883d810725b7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
