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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BQNDJL4%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCP%2FqwP1JRiXi8FR2Q4n%2F4moTBe%2B%2FqQiAd7Xz4c8RvxOgIhAMYalilhyK%2FI0vEtOM4%2BkhBkE9h0DhwQ7HK%2F1RgD5tl4Kv8DCDMQABoMNjM3NDIzMTgzODA1Igwa3augR655q%2Fyhu6Uq3APFXknoiHACFMAdFmJoC0RBajJ5lqqNyyqtyPw6C4HxcNhCN5%2F%2F0zFydoBziggKKRUMo7qF0laPX%2FkpC%2FiJXJzCq4MLsBNPiye%2FFTSxsgXSpubkbwvPYSkOzP8lclRd0xahrntJsUpnXqzsJCxULKPInBBkrnF2GTkkzEnu3zx0yzhg%2Ba7pIz4PWL6Cd2xe6AZoJDTUQaRwBrdQn7DuzcFJPg1BJiZrWWsUltmSJ4UR6549xxMoUKHqS6RZcLWnlb8sx%2Bpn%2FtnzwzLX8ipIlC4JIMoD0PaVDuXF7c5furVn12VanrjaxUX5C1czQ%2FP6ZFfUE2i85FOQUGR%2FeeP5RXWyeJ3D%2BdfI3JPu6Sufb6L1V3dnI23tSxVOhV9fZGIQ4uokJqk0%2BCDwrOejlFS7XeK9b%2F89hcH4mGJ56H4jrfcUw3KNd8LoOOCBdaee%2FqBc%2F3W%2FaW2TZx%2Fjfyv8cIPyHDcOCXYa83ZIA29bPQrG5vO42air3d5KFT4kMj1%2Bc07Ff03KR4yU9BQM1dXQ4UDvr%2FpF0hiDAmuhRgih0S3St6YzkztBrQhC1v3gXb%2FfVrRxSD13nNGhOW3gEZoKE13Txe1NTXcrUrN3BPBROvxKVYpT35yZOgd9ASuwYQf7aDCO1M%2FTBjqkAbefnhD5E2tWSemVCkuVMxKKxBulBQDpR0wU%2B%2B1Aw6FohkxfDjUi7MhW4fhZlOAEku2zY5MYQThmWYaOVZu5yZttrUKKOxzlxNd3lLUrQaZFmt%2FEMlQTAk94z7WIL9M1KfQQNy027aaNZEn5yoMjPlR9NbSJL9o3xBHxiDomfQWLDAfW0pGaFZGQCQ7Bc4VE4fuGxUvPwCLqJ2CbTxGHMIXDHxrs&X-Amz-Signature=ce1ebb12d51ef57273d9ea0421e593138b96a186701cc350bb880c8decf7addc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BQNDJL4%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCP%2FqwP1JRiXi8FR2Q4n%2F4moTBe%2B%2FqQiAd7Xz4c8RvxOgIhAMYalilhyK%2FI0vEtOM4%2BkhBkE9h0DhwQ7HK%2F1RgD5tl4Kv8DCDMQABoMNjM3NDIzMTgzODA1Igwa3augR655q%2Fyhu6Uq3APFXknoiHACFMAdFmJoC0RBajJ5lqqNyyqtyPw6C4HxcNhCN5%2F%2F0zFydoBziggKKRUMo7qF0laPX%2FkpC%2FiJXJzCq4MLsBNPiye%2FFTSxsgXSpubkbwvPYSkOzP8lclRd0xahrntJsUpnXqzsJCxULKPInBBkrnF2GTkkzEnu3zx0yzhg%2Ba7pIz4PWL6Cd2xe6AZoJDTUQaRwBrdQn7DuzcFJPg1BJiZrWWsUltmSJ4UR6549xxMoUKHqS6RZcLWnlb8sx%2Bpn%2FtnzwzLX8ipIlC4JIMoD0PaVDuXF7c5furVn12VanrjaxUX5C1czQ%2FP6ZFfUE2i85FOQUGR%2FeeP5RXWyeJ3D%2BdfI3JPu6Sufb6L1V3dnI23tSxVOhV9fZGIQ4uokJqk0%2BCDwrOejlFS7XeK9b%2F89hcH4mGJ56H4jrfcUw3KNd8LoOOCBdaee%2FqBc%2F3W%2FaW2TZx%2Fjfyv8cIPyHDcOCXYa83ZIA29bPQrG5vO42air3d5KFT4kMj1%2Bc07Ff03KR4yU9BQM1dXQ4UDvr%2FpF0hiDAmuhRgih0S3St6YzkztBrQhC1v3gXb%2FfVrRxSD13nNGhOW3gEZoKE13Txe1NTXcrUrN3BPBROvxKVYpT35yZOgd9ASuwYQf7aDCO1M%2FTBjqkAbefnhD5E2tWSemVCkuVMxKKxBulBQDpR0wU%2B%2B1Aw6FohkxfDjUi7MhW4fhZlOAEku2zY5MYQThmWYaOVZu5yZttrUKKOxzlxNd3lLUrQaZFmt%2FEMlQTAk94z7WIL9M1KfQQNy027aaNZEn5yoMjPlR9NbSJL9o3xBHxiDomfQWLDAfW0pGaFZGQCQ7Bc4VE4fuGxUvPwCLqJ2CbTxGHMIXDHxrs&X-Amz-Signature=e09fcde5fb23320130191fe687f81ed28c8634d5a1adc0f1e4fab983ec606363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
