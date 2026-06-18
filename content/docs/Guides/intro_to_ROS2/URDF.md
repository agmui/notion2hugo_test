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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PWV77ZP%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8gnaTEDQo%2B71%2BmLcnmJiB%2FRYGVph253Tq5REvEFP%2FbAiEApcwt3UHHvp8Yxtdmrzr6p%2BcyKPYbFBHJ910Ci9JlCYMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOHH%2B1g51M3hsvC6JyrcA64hFRgIqv4Tk%2BO0pZWMHco04C8dHVE0kd6GTGeAyOWqAUKUXxzvR8UnVajk4rncO%2F1duYYB9zHYPaqKzfMMw2qOzWCs8ZBotP6zKHwmL6K50rcl%2FRtaxoBykJijq1%2BeQRhy0iOID2qJKv9KhD%2F6hzpMXFbRxsMvyWQfx2VwwnWGW%2FBcI4OeuQGdN1qtE0jUy1HEzwEACkQ7ZtTYxMY3mEXBjBJd4iRDddt3CV5%2Fi7cANdauF7D2h85crlCZ1Fe5m%2B0x11YbzliI35AlTs94y8suOEfbpJGA9bl02yw9krGIRRBeA9aAgEDRzHQeAiMUZDpoTGnh5dyNUgK9r%2FaeNAwMoyz86%2B7eS8MnC44kehUQjPdwL4Wf3iTnz%2Fj2aFZAWItsNpW9e8CRuICqU1xeAs1dR65dlM7Fqh5SqwiJpa1O%2Feog9aH4HNNp%2BuznGFMnlb%2BqBOCTOKNijNApKCPXsfvWJCsKGum6neyif%2Ft24QqWkTfUJpWlKcbn1%2FGxefp14n7zCbwb6zPJOkByCgvVp4vmHQJPkGeksZ9Je0NQViVI9RFne76lQIzFXH4LLUbEjDakHoQYb3ATa8zXTajpqz98S3%2FYSjtIfyjl2ZbY6gaFXi0%2FBvGs%2FWVm%2Fa6HMPewzdEGOqUBUli%2FNZ5WmbClt%2FqZzI8z3TuIO4gRzCuTrfY5xssLpUTd1%2BgkvTk8kPwiq3VJ7A3ifBEIpJmZsTROSxvQ3uZOg0ZI39%2FDgaFlottmqTJybcL5%2BFqj8RDW7mCgtNhSltM9PcAswQ8%2BPN9BB7j%2B6wkeXBwdDeeytcYTH4KCYYmujAhfHd29kres2V4ToNyA%2BbvR7LiBn%2FKoWl4LUcUOr7jLfpTaPS8p&X-Amz-Signature=2ad70382eea6deca62c1ebb462b357b20f9359d594049f676ecf1c9fa0ea1731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PWV77ZP%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8gnaTEDQo%2B71%2BmLcnmJiB%2FRYGVph253Tq5REvEFP%2FbAiEApcwt3UHHvp8Yxtdmrzr6p%2BcyKPYbFBHJ910Ci9JlCYMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOHH%2B1g51M3hsvC6JyrcA64hFRgIqv4Tk%2BO0pZWMHco04C8dHVE0kd6GTGeAyOWqAUKUXxzvR8UnVajk4rncO%2F1duYYB9zHYPaqKzfMMw2qOzWCs8ZBotP6zKHwmL6K50rcl%2FRtaxoBykJijq1%2BeQRhy0iOID2qJKv9KhD%2F6hzpMXFbRxsMvyWQfx2VwwnWGW%2FBcI4OeuQGdN1qtE0jUy1HEzwEACkQ7ZtTYxMY3mEXBjBJd4iRDddt3CV5%2Fi7cANdauF7D2h85crlCZ1Fe5m%2B0x11YbzliI35AlTs94y8suOEfbpJGA9bl02yw9krGIRRBeA9aAgEDRzHQeAiMUZDpoTGnh5dyNUgK9r%2FaeNAwMoyz86%2B7eS8MnC44kehUQjPdwL4Wf3iTnz%2Fj2aFZAWItsNpW9e8CRuICqU1xeAs1dR65dlM7Fqh5SqwiJpa1O%2Feog9aH4HNNp%2BuznGFMnlb%2BqBOCTOKNijNApKCPXsfvWJCsKGum6neyif%2Ft24QqWkTfUJpWlKcbn1%2FGxefp14n7zCbwb6zPJOkByCgvVp4vmHQJPkGeksZ9Je0NQViVI9RFne76lQIzFXH4LLUbEjDakHoQYb3ATa8zXTajpqz98S3%2FYSjtIfyjl2ZbY6gaFXi0%2FBvGs%2FWVm%2Fa6HMPewzdEGOqUBUli%2FNZ5WmbClt%2FqZzI8z3TuIO4gRzCuTrfY5xssLpUTd1%2BgkvTk8kPwiq3VJ7A3ifBEIpJmZsTROSxvQ3uZOg0ZI39%2FDgaFlottmqTJybcL5%2BFqj8RDW7mCgtNhSltM9PcAswQ8%2BPN9BB7j%2B6wkeXBwdDeeytcYTH4KCYYmujAhfHd29kres2V4ToNyA%2BbvR7LiBn%2FKoWl4LUcUOr7jLfpTaPS8p&X-Amz-Signature=afe32973cb1519aa183b4477e1a38dba9cbc80f0c6cbabbdc25dddc9f15e58e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
