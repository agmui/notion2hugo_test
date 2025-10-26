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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNEEBXOZ%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDBbEU0InC1yBdtq3eJygkmHuGMBoWYYC%2BkXR0BiRtQwIhAOBxYPz6n55Ql%2FS%2FP8hYcrn5cZOmz5UAc%2FmElsSyhJ60KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwkizUmbzPiO5lficq3APgImy3UCF1fVIePBhJnjr%2FyV2nlcv2vQhGtsslbPwp5NzEAmH%2ByLvnAc7FzPtM8Dm62yRnrLboY4HqLq6pkF7OKYV%2FG3CnJ%2BmAs%2FDHpBAuykHSaFxnckehVwYon%2FbiVodUYDTX0Ro6eva7UXs1vUmztJyeJusleu4sMPUl4skroS%2BfA0NmATvpQ21%2FC3FVVLAt7GzjM91FFGkYjZQOVMCsMbCRk7a71%2BnQN1bjtXAR3Hl4mMY7yTsqWpJO5TcjVtK1xJBeKWewpJhm6kCIzH%2F1f1zT5RgGQLmlJTKIhmPrzF18CckWDrnn%2B3LXkfgPd5gb03N2xkHpW1yVulPOzTs%2Bn3f8ql%2BdQrCLGm1lcaaSDqcSXfwkULBFYNb5ZcfVdW2bKDQuEcqVhRb3bdSZQhRntffmuth3CN8V%2FPL3VNk%2FIsjmxW4Y6BM1ok17VOyhkl8thJvoYTA6lLKpAWjXWu1VPs%2FrzqVWkNHR0BN9X5lht9Wri77uhiWLTpmgGfnR6ZgABjkwATBiaNh52yZE5BrnXMS8Aj%2B3iaswVW%2FQZMf3EI%2FRd0am%2F1oTEgQpdTmteAHYHb1hY%2B798AjhL%2BpYdJK964Zw5dUUpza1xc%2BeZL%2BSG0AF9T4QhywT8Tt1LjD%2BsPXHBjqkAQSYK%2FOBM7bdTGivJjIphma1bcIwV%2FTKpq%2BeLvX0OgtZyt6f3ftAnyQ42kqHPYE5iXm2SUy66V3SAmoJ1ya1cF7JLKM73VWI4O5G0EBdq7lxi%2Bt1QOQE6QS6cfiWk%2BKFPGIpZjEC0MzDcJp%2FcAfFVMAVOPympojK8seW%2Fyzwu91%2F0mq5okddMEXJG%2BzYAk42e7FfeW6lmbJ%2FMGZFUPGCyB2VMNrx&X-Amz-Signature=d57b942d87025e9d74c47609d55d04f64ecd0343c1a75b1a3faf4ddf0d6f7cfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNEEBXOZ%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDBbEU0InC1yBdtq3eJygkmHuGMBoWYYC%2BkXR0BiRtQwIhAOBxYPz6n55Ql%2FS%2FP8hYcrn5cZOmz5UAc%2FmElsSyhJ60KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwkizUmbzPiO5lficq3APgImy3UCF1fVIePBhJnjr%2FyV2nlcv2vQhGtsslbPwp5NzEAmH%2ByLvnAc7FzPtM8Dm62yRnrLboY4HqLq6pkF7OKYV%2FG3CnJ%2BmAs%2FDHpBAuykHSaFxnckehVwYon%2FbiVodUYDTX0Ro6eva7UXs1vUmztJyeJusleu4sMPUl4skroS%2BfA0NmATvpQ21%2FC3FVVLAt7GzjM91FFGkYjZQOVMCsMbCRk7a71%2BnQN1bjtXAR3Hl4mMY7yTsqWpJO5TcjVtK1xJBeKWewpJhm6kCIzH%2F1f1zT5RgGQLmlJTKIhmPrzF18CckWDrnn%2B3LXkfgPd5gb03N2xkHpW1yVulPOzTs%2Bn3f8ql%2BdQrCLGm1lcaaSDqcSXfwkULBFYNb5ZcfVdW2bKDQuEcqVhRb3bdSZQhRntffmuth3CN8V%2FPL3VNk%2FIsjmxW4Y6BM1ok17VOyhkl8thJvoYTA6lLKpAWjXWu1VPs%2FrzqVWkNHR0BN9X5lht9Wri77uhiWLTpmgGfnR6ZgABjkwATBiaNh52yZE5BrnXMS8Aj%2B3iaswVW%2FQZMf3EI%2FRd0am%2F1oTEgQpdTmteAHYHb1hY%2B798AjhL%2BpYdJK964Zw5dUUpza1xc%2BeZL%2BSG0AF9T4QhywT8Tt1LjD%2BsPXHBjqkAQSYK%2FOBM7bdTGivJjIphma1bcIwV%2FTKpq%2BeLvX0OgtZyt6f3ftAnyQ42kqHPYE5iXm2SUy66V3SAmoJ1ya1cF7JLKM73VWI4O5G0EBdq7lxi%2Bt1QOQE6QS6cfiWk%2BKFPGIpZjEC0MzDcJp%2FcAfFVMAVOPympojK8seW%2Fyzwu91%2F0mq5okddMEXJG%2BzYAk42e7FfeW6lmbJ%2FMGZFUPGCyB2VMNrx&X-Amz-Signature=7778b44ce211370a36424a1dca8bbb2d7e78fa7d88c91521eccc533524e38845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
