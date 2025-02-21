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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGZ3EPMB%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNhQeX%2F0dMDV9rbKSFQoJq07S0RIyb2ipwCXKXrafBAgIhANmfaUy77Y6yoFvpZxe3m2rrQlfdR6xxZeVy9Axhj106KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp0ET1bKZbxnSMOtcq3ANrqdHqPNytU41eRD60vRzinjS9XRuk6NPZNtMchWrI8otDPsp4RlICnmujSEDQcu4rnHVtwDrgZOYp7lUxL6oIbjlNPXakBWHk%2Fvy8kvYcfsSX5ph52bcXtquLBeIoXW1lk0%2FYqr0MSOzeXWGjsw8aIoQcDk3sUZx1AN%2F8ZiYFU4fMPlCmcf%2BJ3dunMH6qQ0kBn%2BDw5W%2BsgEzX0LaVToNKYQRiIqTE7UYP%2B02z2P32nDIZpe3PrbRV%2F%2FW95osRRStBYrTBtaLJiHNr4s8dnDEzH5IAbggrUMf30qLvnWLcwXZSozeYVgLBrRD95gZ4M5zE9IWB17f2Cc80cpstFEUWYtU%2F6fYC0IgbhYZH2qLb7uaDgPkssvJgB7lCvoGUGA%2B7%2FLX4pEumf4wStRPLMeWJp4Nde%2FiCIg6JH3%2FNW3U9MsiCyr2qokhzifodcxS2y2Y89mkSKbFFQCI1qFplRYE11M3jJtBtS3ao%2FSn7KphibkBK6A6cNGAmSafenedAYu5mUKjEm5xgr8y52eSFfXu9hKFYcDedkwjbnomb5yQGp8mxhOhWRiB3BZwEHEtYgI%2FXkylkkHqzFyD702jvBQkfMb0n2na7m0MNzI8%2F6l5GiivwXBUAZB3bvB8WZDDlgOO9BjqkAUmonvL5cFFPxvgrjCuoJDlZRxrcQOLNj8ZrqUUQkHd2O0Fmn1qjebuRD41Sim02dI%2BGH3ZvnlMLhVcQRcPhs4QAhrJvg%2FTsfxKWdHqqzaFuAF161%2FyYf9UWQ7uXoqsRcgHD1rKj6is0dc3kjErGaCZPqNCxyWnAeSHDDsxay1Q%2Fj07jdVbeXuUSU8z75HeksOgg8UH2kEm5R0fGK5%2FvXmPI2KOE&X-Amz-Signature=5ab0e744cfe7c0184847df21e833e4598ec6e4766b0704dbd6fed88d7a92c07a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGZ3EPMB%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNhQeX%2F0dMDV9rbKSFQoJq07S0RIyb2ipwCXKXrafBAgIhANmfaUy77Y6yoFvpZxe3m2rrQlfdR6xxZeVy9Axhj106KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp0ET1bKZbxnSMOtcq3ANrqdHqPNytU41eRD60vRzinjS9XRuk6NPZNtMchWrI8otDPsp4RlICnmujSEDQcu4rnHVtwDrgZOYp7lUxL6oIbjlNPXakBWHk%2Fvy8kvYcfsSX5ph52bcXtquLBeIoXW1lk0%2FYqr0MSOzeXWGjsw8aIoQcDk3sUZx1AN%2F8ZiYFU4fMPlCmcf%2BJ3dunMH6qQ0kBn%2BDw5W%2BsgEzX0LaVToNKYQRiIqTE7UYP%2B02z2P32nDIZpe3PrbRV%2F%2FW95osRRStBYrTBtaLJiHNr4s8dnDEzH5IAbggrUMf30qLvnWLcwXZSozeYVgLBrRD95gZ4M5zE9IWB17f2Cc80cpstFEUWYtU%2F6fYC0IgbhYZH2qLb7uaDgPkssvJgB7lCvoGUGA%2B7%2FLX4pEumf4wStRPLMeWJp4Nde%2FiCIg6JH3%2FNW3U9MsiCyr2qokhzifodcxS2y2Y89mkSKbFFQCI1qFplRYE11M3jJtBtS3ao%2FSn7KphibkBK6A6cNGAmSafenedAYu5mUKjEm5xgr8y52eSFfXu9hKFYcDedkwjbnomb5yQGp8mxhOhWRiB3BZwEHEtYgI%2FXkylkkHqzFyD702jvBQkfMb0n2na7m0MNzI8%2F6l5GiivwXBUAZB3bvB8WZDDlgOO9BjqkAUmonvL5cFFPxvgrjCuoJDlZRxrcQOLNj8ZrqUUQkHd2O0Fmn1qjebuRD41Sim02dI%2BGH3ZvnlMLhVcQRcPhs4QAhrJvg%2FTsfxKWdHqqzaFuAF161%2FyYf9UWQ7uXoqsRcgHD1rKj6is0dc3kjErGaCZPqNCxyWnAeSHDDsxay1Q%2Fj07jdVbeXuUSU8z75HeksOgg8UH2kEm5R0fGK5%2FvXmPI2KOE&X-Amz-Signature=4f573b271670724dab8a0a69a5aefec3ccb360619f140dfadc6a89c2766c9b8d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
