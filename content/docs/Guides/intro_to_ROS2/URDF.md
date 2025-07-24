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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRCFTUUD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCfuTvWAg8G18k2Nu4elMJubocCRaDfF5BFIn7Cu3KN6QIgGL7SjeiBkrL2WopYWZful2zURnlNbRjyanpn6XvpEekq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAuLJqCIVMx7Ew3CVCrcAxSaMkgWif%2BmyPE63cl%2F77aOhgLzr98stlDdCESFxgy5uqNrqM0fVDvXtW%2BWWBAHpy41gNTvj5OU0rmsvaZHZQv7H6PDzPgPlJluv7Q7gXhCPDIVzkyvYXnyhfd8AiRPHZXnZL7G8E1SY%2FSK7p6UZjiPvd2MC%2B21aHgOBaLsEG7HrrPgmW%2Bl2Wsctf76JD6ig7YFnGyKsqo%2F4ORYXHrdsNU2wsmxjklnxMgcCaPeSwRA2Wd2TS8QT4f%2BOkwePYioREjZH54DFeqeE5hhfnUeMbN026O5mh8qFfYzHZa9%2Fg%2Beo4uxPXmtuHnbcil4dRv3OVEcqQWlkR6qEAaNvRNud4D79WI6nn9qq9Z6f0pc1JENlgQz1ocsTDPe9pOsTTPPgr5HJiIenAzS4ol8qryGhdMS8gdIwinnQzs1HU%2FJXWcgRYQUazFiiSrUbYLA9Tn94TwY2q99%2FQ7j1TLjgOuEV3In%2BED%2FECma7YqA1%2BRwKAti4Irxgo%2FfUzlcJFobedcPllvvEHI3X5MMMGrMBkWVyBeIgGHojqeD4Uw13kF0OITTO4KXAIPa6ZI80zHVwO8w11c%2FPEPyeOFttmjTMS6nmFfc2kLnmG%2BsUnjzSV20SFeNgvQNtUKgO5i1LhrKMNqPisQGOqUB1yudotYMlcSY0FyLdroNdZKn4AFD3a%2BlZDmDGt6dUBiGfAdanDefy8rMyvITjvj3xvV8HLx2UnxOH1XxO7KJfc%2F4zUdcPYtdMn22MIaiN30PC9ogrwD5f5u0I50k7lf2Yl1kdzs5v35w0cemHKIlZPeCL1olF%2B%2Fb0v7mCtBmJvxnkVxnPW%2BXqooeJZHVjmOXKoCnQs9UPkhx%2BLXqvSCQ64IZGHrq&X-Amz-Signature=00e6180246573542dfae94f83e3ebcb17f4448abdc97641d809d8f03efc7130e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRCFTUUD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCfuTvWAg8G18k2Nu4elMJubocCRaDfF5BFIn7Cu3KN6QIgGL7SjeiBkrL2WopYWZful2zURnlNbRjyanpn6XvpEekq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAuLJqCIVMx7Ew3CVCrcAxSaMkgWif%2BmyPE63cl%2F77aOhgLzr98stlDdCESFxgy5uqNrqM0fVDvXtW%2BWWBAHpy41gNTvj5OU0rmsvaZHZQv7H6PDzPgPlJluv7Q7gXhCPDIVzkyvYXnyhfd8AiRPHZXnZL7G8E1SY%2FSK7p6UZjiPvd2MC%2B21aHgOBaLsEG7HrrPgmW%2Bl2Wsctf76JD6ig7YFnGyKsqo%2F4ORYXHrdsNU2wsmxjklnxMgcCaPeSwRA2Wd2TS8QT4f%2BOkwePYioREjZH54DFeqeE5hhfnUeMbN026O5mh8qFfYzHZa9%2Fg%2Beo4uxPXmtuHnbcil4dRv3OVEcqQWlkR6qEAaNvRNud4D79WI6nn9qq9Z6f0pc1JENlgQz1ocsTDPe9pOsTTPPgr5HJiIenAzS4ol8qryGhdMS8gdIwinnQzs1HU%2FJXWcgRYQUazFiiSrUbYLA9Tn94TwY2q99%2FQ7j1TLjgOuEV3In%2BED%2FECma7YqA1%2BRwKAti4Irxgo%2FfUzlcJFobedcPllvvEHI3X5MMMGrMBkWVyBeIgGHojqeD4Uw13kF0OITTO4KXAIPa6ZI80zHVwO8w11c%2FPEPyeOFttmjTMS6nmFfc2kLnmG%2BsUnjzSV20SFeNgvQNtUKgO5i1LhrKMNqPisQGOqUB1yudotYMlcSY0FyLdroNdZKn4AFD3a%2BlZDmDGt6dUBiGfAdanDefy8rMyvITjvj3xvV8HLx2UnxOH1XxO7KJfc%2F4zUdcPYtdMn22MIaiN30PC9ogrwD5f5u0I50k7lf2Yl1kdzs5v35w0cemHKIlZPeCL1olF%2B%2Fb0v7mCtBmJvxnkVxnPW%2BXqooeJZHVjmOXKoCnQs9UPkhx%2BLXqvSCQ64IZGHrq&X-Amz-Signature=946797d8e8c81ce864a5dfffd078f4b73a6d877ef8cc60d63261b04821da3872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
