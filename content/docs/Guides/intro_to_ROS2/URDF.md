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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQS2C4FP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIB2Tua4eaPVnEd9T9SCAKnJWgiolEPONHDF3DLghuYmKAiAifvJ7ZRUA1%2FQ5vw80YhE4KnGgqzK6eY%2BXeoSC488w6iqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbEICVDXsfEV7WpDFKtwDCg0QyCRLyVKh9leCpistxkkK8AQgp2WfvMX3PdgGrqqTVaoi1pzNdWNwqul%2BPkMxUDqEYAJiAqzGVugW2u0KoiJ7my%2FjbAGYdmsNzt0FLemi7NhlwZotr3CTfsX58ztGD0VmXTtr8mMDPLQZsO%2BkUzJ3QrhIrWaclHhKc9g9OZkB1CtZASXd1KZQuDZ7U0TyE4k3VrqjbWg2t1x%2F0jHt%2BSuaG6kgSaIusqdcAqhjqrfn3543V03qP%2Fnw%2B1MIRG%2BZb2IK4RhgSsKNu5mTHWaSKRjEdXyGfLATDCoHjhdJeOrLnS9ePBfBUhVVlGXxHJhAMVy8er8n2xtfK7oc4S%2Be%2FyoQ%2BY1iZg%2FaQpKfhVfA1yH%2F4f3SZHIFy1MplAhSq%2BOHaqRGaQyEt8lgH94fHVamQP4jrkoLbm64GpVpfkNN4bpIOaxrBS6Axn4BT7kMYLudTlYupKq2aBcgmb6MqHsYw%2F2x%2BPXUxT6DhoxLs270ULmcOOTSyH9XLv9LSwHlbOEq4JkNzBRisZ7ozEkehcW8GrmZLYbH%2FrTWlgU1s8N3HjYsnKoUtj3SEaCqyiFTCxwXDJsWaQCAooIFzpsbFpHdcxFCKtotd36kAI4gSIo3uwKxPVRnByl1igfruD0wkJmjxAY6pgGkkoo8GiPskDx%2FOEJZ3L%2FRpWnFYSWHHFW9lywKSQqVmz1VHY0qA1BXscHYdF%2FpBCsq7u0EoD06cJt%2B7Gn9D%2FTRGMMKfdQ2XuLmzXsPvc9IQNziZtJSDWqOXEzwPLS%2Fz3KUJYAZw3ISOTjHgAOytNd0KuXBu2KfPPPqvUykZ9%2FtPCVajBvkj4h2fAb%2Bm3P4JDOn%2B9mNvusfjCNsL6MM9ceY2VQ85pUN&X-Amz-Signature=b8769b828128a2ccf3d9d58abb383d7c112d7aa10785b48ecf6836e58fe9da5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQS2C4FP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIB2Tua4eaPVnEd9T9SCAKnJWgiolEPONHDF3DLghuYmKAiAifvJ7ZRUA1%2FQ5vw80YhE4KnGgqzK6eY%2BXeoSC488w6iqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbEICVDXsfEV7WpDFKtwDCg0QyCRLyVKh9leCpistxkkK8AQgp2WfvMX3PdgGrqqTVaoi1pzNdWNwqul%2BPkMxUDqEYAJiAqzGVugW2u0KoiJ7my%2FjbAGYdmsNzt0FLemi7NhlwZotr3CTfsX58ztGD0VmXTtr8mMDPLQZsO%2BkUzJ3QrhIrWaclHhKc9g9OZkB1CtZASXd1KZQuDZ7U0TyE4k3VrqjbWg2t1x%2F0jHt%2BSuaG6kgSaIusqdcAqhjqrfn3543V03qP%2Fnw%2B1MIRG%2BZb2IK4RhgSsKNu5mTHWaSKRjEdXyGfLATDCoHjhdJeOrLnS9ePBfBUhVVlGXxHJhAMVy8er8n2xtfK7oc4S%2Be%2FyoQ%2BY1iZg%2FaQpKfhVfA1yH%2F4f3SZHIFy1MplAhSq%2BOHaqRGaQyEt8lgH94fHVamQP4jrkoLbm64GpVpfkNN4bpIOaxrBS6Axn4BT7kMYLudTlYupKq2aBcgmb6MqHsYw%2F2x%2BPXUxT6DhoxLs270ULmcOOTSyH9XLv9LSwHlbOEq4JkNzBRisZ7ozEkehcW8GrmZLYbH%2FrTWlgU1s8N3HjYsnKoUtj3SEaCqyiFTCxwXDJsWaQCAooIFzpsbFpHdcxFCKtotd36kAI4gSIo3uwKxPVRnByl1igfruD0wkJmjxAY6pgGkkoo8GiPskDx%2FOEJZ3L%2FRpWnFYSWHHFW9lywKSQqVmz1VHY0qA1BXscHYdF%2FpBCsq7u0EoD06cJt%2B7Gn9D%2FTRGMMKfdQ2XuLmzXsPvc9IQNziZtJSDWqOXEzwPLS%2Fz3KUJYAZw3ISOTjHgAOytNd0KuXBu2KfPPPqvUykZ9%2FtPCVajBvkj4h2fAb%2Bm3P4JDOn%2B9mNvusfjCNsL6MM9ceY2VQ85pUN&X-Amz-Signature=c87496837a650cda8acb6670455735ac23b3bf46c02a6f5a30df76b1c7e7fe9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
