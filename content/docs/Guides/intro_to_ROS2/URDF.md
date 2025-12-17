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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY5DEXGV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnv25z8fGsS3JlPeMRS9eSbd2xGvdeRNJVGiPlWbKUrQIgd28KY1CJnRqdyKit%2BTstSty0mTUkf3HxcFM5Tu68kmgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEz%2BMlXByl84tInGWircA9DLPh%2BtiTaL6Puc%2Fw%2FB7n5B4V6XExmEL3EZ5g%2BIkIfWb35u%2BP%2F5bnNESJx%2BRb2elC6uGcNBTDdMOVU%2B%2Bve7Eu%2Bx2wUm7wGekNqY3V%2FvB3eX2vAMGST7sw1ETNdlZaV0ehJOIbE%2Fc50xd5qm4k1qOn96GHWV8ebeqKCno5%2B02wBxw6Yn8ABgird%2FTtKNV9FLEMwgTSJfHrWllI%2FomtXdiW6tMu8Cjsx40TwItLSReajHXRUzhnkles6M4KUz2SC6A%2BIXTenTlKFVAwh0yq8sMGvEPR%2F1EtuqsYcRL0Ecr0uwGecsryLk6qJpgx4DKugd1UXgvfnd64yMaX9oVxtkpM9fQUQF0tPgSCleeIwbNoKNTH81x%2Bu45lwwmQkfWc2Uhlyv9CEZ9NEdbLu6KLolQu4Eu5I%2BKx694NFQ3wh4XJeS3oM0bYHtGzZiL9wzfRyItD26PE%2BIlo0gaZp%2FHinwDpOblAXv%2F8idCY0r8VpDdQ8OPrRQdHapoU6XBnFgANsGCIYTTPVDL12fOhheBxekY1mQvsVLOijrgpOpid3rpfsKNVHG3fZAAR5Kkavk5oxkn9j0AWMrtm6gW7%2BH79pB1nAQ%2FkFqPgN3j%2B%2BmWZArQqOKCALFQWMkmSknal0JMMT7h8oGOqUBf%2FGVBr%2FDxVB1zwaIlWsCxiZ8gOKWkW8GUD%2BLFuQ721yTZRIVK%2B8i8jUH81u8nCtbxCVrg18cdIy0GKzRcXs3UzCli%2BXB3WtfkPI1RU9ALffh5282vRV9nXc%2FzqmUBEmvWsoLygc0afNc7B8aT0RTSgKZwdHMsp8s7ZncrK9Smg3gmezf9MEmFkyRssC%2BtlGma5rCCf7DbgwRK5iyLyoWjw%2F%2F6F95&X-Amz-Signature=6b4aaee57f1d59c2665c3123e9d58e6ea0bab5a042ce89ce75060bf2a5ebac02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY5DEXGV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnv25z8fGsS3JlPeMRS9eSbd2xGvdeRNJVGiPlWbKUrQIgd28KY1CJnRqdyKit%2BTstSty0mTUkf3HxcFM5Tu68kmgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEz%2BMlXByl84tInGWircA9DLPh%2BtiTaL6Puc%2Fw%2FB7n5B4V6XExmEL3EZ5g%2BIkIfWb35u%2BP%2F5bnNESJx%2BRb2elC6uGcNBTDdMOVU%2B%2Bve7Eu%2Bx2wUm7wGekNqY3V%2FvB3eX2vAMGST7sw1ETNdlZaV0ehJOIbE%2Fc50xd5qm4k1qOn96GHWV8ebeqKCno5%2B02wBxw6Yn8ABgird%2FTtKNV9FLEMwgTSJfHrWllI%2FomtXdiW6tMu8Cjsx40TwItLSReajHXRUzhnkles6M4KUz2SC6A%2BIXTenTlKFVAwh0yq8sMGvEPR%2F1EtuqsYcRL0Ecr0uwGecsryLk6qJpgx4DKugd1UXgvfnd64yMaX9oVxtkpM9fQUQF0tPgSCleeIwbNoKNTH81x%2Bu45lwwmQkfWc2Uhlyv9CEZ9NEdbLu6KLolQu4Eu5I%2BKx694NFQ3wh4XJeS3oM0bYHtGzZiL9wzfRyItD26PE%2BIlo0gaZp%2FHinwDpOblAXv%2F8idCY0r8VpDdQ8OPrRQdHapoU6XBnFgANsGCIYTTPVDL12fOhheBxekY1mQvsVLOijrgpOpid3rpfsKNVHG3fZAAR5Kkavk5oxkn9j0AWMrtm6gW7%2BH79pB1nAQ%2FkFqPgN3j%2B%2BmWZArQqOKCALFQWMkmSknal0JMMT7h8oGOqUBf%2FGVBr%2FDxVB1zwaIlWsCxiZ8gOKWkW8GUD%2BLFuQ721yTZRIVK%2B8i8jUH81u8nCtbxCVrg18cdIy0GKzRcXs3UzCli%2BXB3WtfkPI1RU9ALffh5282vRV9nXc%2FzqmUBEmvWsoLygc0afNc7B8aT0RTSgKZwdHMsp8s7ZncrK9Smg3gmezf9MEmFkyRssC%2BtlGma5rCCf7DbgwRK5iyLyoWjw%2F%2F6F95&X-Amz-Signature=805d604cd39b9508fb113aa68d0805e824b739208ca2312bdca868e5d894cdd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
