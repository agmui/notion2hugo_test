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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD2P3FIH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGqUBD8ou7X9kW%2BAww%2BNU96P6JV%2BGdxnpxLxUFuIUDEhAiAuQcmZu5lipUQZ51ZjXzri1dIgFbS3QZa4cOr2x5hPuCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrcAutYfwUhauAwl1KtwDyqhdP50gl0R7GNNnAxgXzeCFgZSEdACcYCKxAIUN0hSEa%2FuPijDhORoIZPqc2MIN%2FYE9flyxUUOfAm%2BmHQUHOAKPI6s9oMjVP6F3VZM%2BMNDojn%2F0X3lsIHS0Ksd5BDv2uY8GqZ8o5%2B5e60WFoevNAambIJ8MdzEwQS6y%2Fhbxskex4JuRDlDXtaqh4oUEm9swhAhaBDR4mGWidgS6SJh9QGrNwslhkSqqeboXCgvOFiidNO8YFlkAiGD7FKQL5dG5CKG88Cjp1fvwBmhgfD3r1%2Foz3QGuvNu5fPPCE2gbnjY6A8O%2FbTuNAjJ0WvgBzUJ7k8f5cROrXJf2zWBo57198f4wTsQZJGynDsaX92lD1bwWuZMP5Nr7F9fEQX4XrIIQyWgmaJ9x7WrNKtLIztoFa%2BtGQzcpJyrd1Ctqp9SIiiFtwTmPeEY01Fuxc3uId0A%2BRCz5xfZ1RhvnWqhk5zu7aDcrq5iyX0gVVj9UjK6%2FSTm%2BLeNwaGsQbF%2BOvBIwDlcs7yeCtpM8QpsBHMs5GOAc1bzDlAP6mIC42nCbmAon1HcS0uyj8j%2F9RUfijg5Bl4A77T7ejHnCqUeCfDUrOkmVJrcYxK7%2BvqcTWLx6prDlPyocwZJvMOfbeyoY8SEw7%2FzBwwY6pgFaG4MSM5AOzszEH0i4peTfweMg8j8OmkGDADcb85K%2F%2Bzkp1ECzLlYDUx1IaSixQwCQ6GPZXlpG5z6XlCzmoJryYYnIuTgIixiW5ggCC0zsEKLJQgpynmBw2RGOnOks0Ae37Tn39jPXRndghk2MmEbO2zzHdc%2BhbiMFtcnBy%2FHdDrrBOquQWOvzFJA62qFJMMnWlw48%2FuY4BU5nEcU%2B3XFz%2FYTpwfy5&X-Amz-Signature=5d31a5c7d5e48790c87c96ca57f9b4b99de107d3d75bb0b5e4c5f9e690046f42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD2P3FIH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGqUBD8ou7X9kW%2BAww%2BNU96P6JV%2BGdxnpxLxUFuIUDEhAiAuQcmZu5lipUQZ51ZjXzri1dIgFbS3QZa4cOr2x5hPuCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrcAutYfwUhauAwl1KtwDyqhdP50gl0R7GNNnAxgXzeCFgZSEdACcYCKxAIUN0hSEa%2FuPijDhORoIZPqc2MIN%2FYE9flyxUUOfAm%2BmHQUHOAKPI6s9oMjVP6F3VZM%2BMNDojn%2F0X3lsIHS0Ksd5BDv2uY8GqZ8o5%2B5e60WFoevNAambIJ8MdzEwQS6y%2Fhbxskex4JuRDlDXtaqh4oUEm9swhAhaBDR4mGWidgS6SJh9QGrNwslhkSqqeboXCgvOFiidNO8YFlkAiGD7FKQL5dG5CKG88Cjp1fvwBmhgfD3r1%2Foz3QGuvNu5fPPCE2gbnjY6A8O%2FbTuNAjJ0WvgBzUJ7k8f5cROrXJf2zWBo57198f4wTsQZJGynDsaX92lD1bwWuZMP5Nr7F9fEQX4XrIIQyWgmaJ9x7WrNKtLIztoFa%2BtGQzcpJyrd1Ctqp9SIiiFtwTmPeEY01Fuxc3uId0A%2BRCz5xfZ1RhvnWqhk5zu7aDcrq5iyX0gVVj9UjK6%2FSTm%2BLeNwaGsQbF%2BOvBIwDlcs7yeCtpM8QpsBHMs5GOAc1bzDlAP6mIC42nCbmAon1HcS0uyj8j%2F9RUfijg5Bl4A77T7ejHnCqUeCfDUrOkmVJrcYxK7%2BvqcTWLx6prDlPyocwZJvMOfbeyoY8SEw7%2FzBwwY6pgFaG4MSM5AOzszEH0i4peTfweMg8j8OmkGDADcb85K%2F%2Bzkp1ECzLlYDUx1IaSixQwCQ6GPZXlpG5z6XlCzmoJryYYnIuTgIixiW5ggCC0zsEKLJQgpynmBw2RGOnOks0Ae37Tn39jPXRndghk2MmEbO2zzHdc%2BhbiMFtcnBy%2FHdDrrBOquQWOvzFJA62qFJMMnWlw48%2FuY4BU5nEcU%2B3XFz%2FYTpwfy5&X-Amz-Signature=763f119ed3e7e576ec5f08933a6878111e67ba64b5788f0c658d8c7503d7a1c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
