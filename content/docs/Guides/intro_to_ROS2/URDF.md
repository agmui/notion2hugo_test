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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKYEQQWX%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCx1jeiNXPMnJPr%2BlvAnJyZ4JJHTxvz%2BB7s58MB0jghqwIgdmKFCI48soe0bhB%2Fx9s4QmLqbH%2Fb0OOfjl1ll3cTXUYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDNjvaiBFFJ%2BDql6AwCrcA4XZDTby8mYqv4le4VSs3BWWKjxAWkbWA8VNBkorMDuQN%2FY5yhvsw5i75%2FQo6hoRMd%2F0EJOXVqJzOUOI26Gb29evTx3f%2F8RbAbU5aMWzpuuOLjil2%2B2qbaDKNb%2F2D6ddRn4jvAp5c%2F15fJ1L0f6GzdNNawOp8G%2FaUQdIKIo0I%2FJ15vh48USvPaaHtr76mPFDHN1cIqmtabRbotY1uilRzHa6FySzr3ig1fFeehNZt%2FiDKEoCUx%2BOEO1a0k5domXbzt%2BLJdsjy7YTiV8HvQfZrhfvfdwyyrMA2kOKeI2rO4vxh0Oq5mgGxbekKPzqGnXz29LAS%2Bdf4AyuADdjac0Ka7X3igTWYmfEv32g7tUrZdft2RXB14CdFAoGjp8CixusfiHYSXVwZI9phTa7ciaYhKWZP2RWY7m7MqbsabF3Z8y%2FwGCVEu%2FY82927vuKpz6Gt8ZoJaCUvJCi5%2FD3BnQn3g0vEfPo3movXEMBFBtHWN%2Fd3zniMiMLY%2Bn4%2BxpnkueP6eEGzOzMdJX0SSwuZUufbBsgLS7yOCj4ZIxF5pjQnTus1lBvFv9X7E67U12olmSj%2BPR%2FEIVHgbQVCxaM1sKck%2FoS4b0QUEpErzpWMtdpKM495Apl0L389%2FleYV3eMO6VgsUGOqUBQ8Qw19Bvm3N72fZHcNro2SDSNgK1PjDPMvLZUi5GrbVEaV33%2FS959XMKLqrpEurKqZWjoXucMkZstrY3prH%2F2mbicUFfBQf1eaCTHqrsyNB28BB7Gs%2Fnat1nNu9SzDbfZeHO301Ddj%2BZfjvCpm88%2Buw78CMmAXO0X4OLoUSUqa9KUwxk3aP3zccMdtaLh2NHsVud83tGJ%2Fl1bwdhZ5SR07V4sw80&X-Amz-Signature=2a6aa7e1ed5f0e2ac5db570b87f36ab58546a497d31dc9f277237bead8f3defe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKYEQQWX%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCx1jeiNXPMnJPr%2BlvAnJyZ4JJHTxvz%2BB7s58MB0jghqwIgdmKFCI48soe0bhB%2Fx9s4QmLqbH%2Fb0OOfjl1ll3cTXUYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDNjvaiBFFJ%2BDql6AwCrcA4XZDTby8mYqv4le4VSs3BWWKjxAWkbWA8VNBkorMDuQN%2FY5yhvsw5i75%2FQo6hoRMd%2F0EJOXVqJzOUOI26Gb29evTx3f%2F8RbAbU5aMWzpuuOLjil2%2B2qbaDKNb%2F2D6ddRn4jvAp5c%2F15fJ1L0f6GzdNNawOp8G%2FaUQdIKIo0I%2FJ15vh48USvPaaHtr76mPFDHN1cIqmtabRbotY1uilRzHa6FySzr3ig1fFeehNZt%2FiDKEoCUx%2BOEO1a0k5domXbzt%2BLJdsjy7YTiV8HvQfZrhfvfdwyyrMA2kOKeI2rO4vxh0Oq5mgGxbekKPzqGnXz29LAS%2Bdf4AyuADdjac0Ka7X3igTWYmfEv32g7tUrZdft2RXB14CdFAoGjp8CixusfiHYSXVwZI9phTa7ciaYhKWZP2RWY7m7MqbsabF3Z8y%2FwGCVEu%2FY82927vuKpz6Gt8ZoJaCUvJCi5%2FD3BnQn3g0vEfPo3movXEMBFBtHWN%2Fd3zniMiMLY%2Bn4%2BxpnkueP6eEGzOzMdJX0SSwuZUufbBsgLS7yOCj4ZIxF5pjQnTus1lBvFv9X7E67U12olmSj%2BPR%2FEIVHgbQVCxaM1sKck%2FoS4b0QUEpErzpWMtdpKM495Apl0L389%2FleYV3eMO6VgsUGOqUBQ8Qw19Bvm3N72fZHcNro2SDSNgK1PjDPMvLZUi5GrbVEaV33%2FS959XMKLqrpEurKqZWjoXucMkZstrY3prH%2F2mbicUFfBQf1eaCTHqrsyNB28BB7Gs%2Fnat1nNu9SzDbfZeHO301Ddj%2BZfjvCpm88%2Buw78CMmAXO0X4OLoUSUqa9KUwxk3aP3zccMdtaLh2NHsVud83tGJ%2Fl1bwdhZ5SR07V4sw80&X-Amz-Signature=f0d07cc7a9ffcd322b9184557dee79ea1d31c50d1cfad56c91d30a87828a2a83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
