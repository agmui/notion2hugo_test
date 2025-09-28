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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XIQKPIK%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQC5KFVeVuD1tfXJ9qtEPb7iQMMI%2FYQM5oV1h5R2g2S20AIhAOl1Iv52u9tTAIm54aQvt6PInwUiIYrlecl7OByaSnYWKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSmekYaVUFuukwRKMq3ANtYjlJ5fL%2FuOdVWwbwGIj2eVO32p2wtmXvJr8LyiIWlXEBC36F%2BuTQO0fQHCbB9%2F69fwpzBlkPdwSqFU9X29tNT9YB6gTa7N8ajwDKeYJYiNLQaMoG9RyHOeTLPS4b9xtpzFFfiGEQKBSnEqy%2Bjq3KVlTVTCpto8fJcT4vQ80bVZTOMJyiy11f2XVm3y2VnbWDcy4VHdj6cJsiM3Abo5558FMIvJQSTwRaUh%2BPbiMNziCR8n3WvFq%2F7p8S1Pz6zmN54RPsclEEEdx5tbWqTlfR10MIPR6%2BgAGXE7QhwGYI0la8Z7NQhcgAruTu3Ng6%2FcsTzabQlNCFiTExJV1khsuUCIeOUUph6zsSCC0JK%2FQNjQ5EzMfZ69wIeGSf69Ouxf2eYRrcrmZqRzrCvW4T9oh%2FRPOK8%2FJ3LSQECpYRizhiB3nvf3UD%2BIIdIJHIutMeOLYlN619nwUONMtQR2LAEOKfZAdWSqr%2BqbnsF06WU6Onupv4DEoiKBjYwmZzsFpxUHT%2BxZRo6oVV%2BL9pL%2B%2FEy3TDCDTuQfzh7j3Xi4hr4oTGrn2hH2BOC1hjt%2FOyMfe%2Bog4XBsuLeU8t0OCQ180vxoFUBV%2BWQA0QsB3aLhMYUzKdTp7jINjY4AfIqmUd3zCSv%2BHGBjqkAUtuXJwo3wXJ9KgMtuuICrkLBJ7eOxPRNJmqBpKGWWkpFcBec%2BPUQD%2FYPPJYyGk%2F5XkatNP246mSM%2F7ZNnJTMQIuJZ2zIp55SkeH7TVIDaFfiwcE%2Filg2NgvCzqH4Kz%2BHaaNu%2Fn%2FLfIB7mzMiQh%2Bj6F4FeBduYsns%2BWDJJtWRIwXvU%2BuImA43wQfm7D57jT8zX495goFZqYo3icfom7IskVgDXsm&X-Amz-Signature=57bf0f50f44f23cdb51812b77e0053bb166bb1010469a73a0df8934734ebbe19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XIQKPIK%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQC5KFVeVuD1tfXJ9qtEPb7iQMMI%2FYQM5oV1h5R2g2S20AIhAOl1Iv52u9tTAIm54aQvt6PInwUiIYrlecl7OByaSnYWKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSmekYaVUFuukwRKMq3ANtYjlJ5fL%2FuOdVWwbwGIj2eVO32p2wtmXvJr8LyiIWlXEBC36F%2BuTQO0fQHCbB9%2F69fwpzBlkPdwSqFU9X29tNT9YB6gTa7N8ajwDKeYJYiNLQaMoG9RyHOeTLPS4b9xtpzFFfiGEQKBSnEqy%2Bjq3KVlTVTCpto8fJcT4vQ80bVZTOMJyiy11f2XVm3y2VnbWDcy4VHdj6cJsiM3Abo5558FMIvJQSTwRaUh%2BPbiMNziCR8n3WvFq%2F7p8S1Pz6zmN54RPsclEEEdx5tbWqTlfR10MIPR6%2BgAGXE7QhwGYI0la8Z7NQhcgAruTu3Ng6%2FcsTzabQlNCFiTExJV1khsuUCIeOUUph6zsSCC0JK%2FQNjQ5EzMfZ69wIeGSf69Ouxf2eYRrcrmZqRzrCvW4T9oh%2FRPOK8%2FJ3LSQECpYRizhiB3nvf3UD%2BIIdIJHIutMeOLYlN619nwUONMtQR2LAEOKfZAdWSqr%2BqbnsF06WU6Onupv4DEoiKBjYwmZzsFpxUHT%2BxZRo6oVV%2BL9pL%2B%2FEy3TDCDTuQfzh7j3Xi4hr4oTGrn2hH2BOC1hjt%2FOyMfe%2Bog4XBsuLeU8t0OCQ180vxoFUBV%2BWQA0QsB3aLhMYUzKdTp7jINjY4AfIqmUd3zCSv%2BHGBjqkAUtuXJwo3wXJ9KgMtuuICrkLBJ7eOxPRNJmqBpKGWWkpFcBec%2BPUQD%2FYPPJYyGk%2F5XkatNP246mSM%2F7ZNnJTMQIuJZ2zIp55SkeH7TVIDaFfiwcE%2Filg2NgvCzqH4Kz%2BHaaNu%2Fn%2FLfIB7mzMiQh%2Bj6F4FeBduYsns%2BWDJJtWRIwXvU%2BuImA43wQfm7D57jT8zX495goFZqYo3icfom7IskVgDXsm&X-Amz-Signature=4f3a96e7f84057c97607dc3387bfbb2b29e6e216d25f848fb43ffcd9f05b6364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
