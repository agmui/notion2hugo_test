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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLZAATQV%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDXpf7y4CO1m%2Bny4wADIdbL%2BIUsTnqZ9XTB9bcIzVBBFwIhAPIv3kzJwP01zGWuOhyMVTcZEc%2F%2BLtWxc%2FG67pD%2Fk7oTKv8DCEEQABoMNjM3NDIzMTgzODA1Igzm%2BdS%2BRvWK1oYX2Mcq3ANnsuadcyFNVpA%2FXicPAnaG4t6Fbc%2B1rhJ25YnRLnT7fzEd%2BbruMHrvujGi2L13NnDGhP8PgBXYy1q4P8%2FqhrZIqjPfyhu4pY31L08f%2FlKkkH1LkgzUyU5uzExtNp9k5CPCu5zEM5sVZNVOCB8exrnAHRO4UHeNtMOQkFppr4%2BA%2F4PAAgppzDLPwnNxVPvWeBdM9pYgBmWl%2B%2B4uwsvcxg58rMEntpuaXncsOnKK%2FBZhw3tsCB961Ff9QToI0PD5pxIolwiE8r1YJLSVpI4FUbkl3yhoFPtEDW%2BuLGc2uxFaccA7JtlziZ6eIEIlEmF0X%2FtHUd9W3KtB3Mk0XyUoGUT46OhYIRfoCOCQ7VY%2BlthyS9xBlGhzQtaqVC6ep5wvjNNZoigiDTOS2S0vnFzg%2FQiO%2FMM6oilIA4MMkiW3XdB%2FiDKIcRAaneQQ09rzKl%2FVO1plxk5Ql7KSuGhByri0VrSe6%2BI43vGYKq8Ay55%2Fq5CqD4aZi%2FXclJhuDZldKs88GFm7bmGAfbapomgwpBTbhIQF%2FJwY5MfZySDbEHAijmGf1lp3ySyccZk1bxj330KWKhOGELpZxwxytYd13miosOZZ2FGsf%2Bg30Q89GpTp%2FxAQ6hSUwYwkdTn%2BeCzAgjCn28HEBjqkAZ73t3J1XShP7WPSyQKNJC0ZEKUEX%2FON%2BFUo1YSk%2FhV50bW6G6%2FA8ee9h1fSGAYDBnnuofgxt3DSW71GEH1FegA7PlligTQ0cH%2FYH9MREMuMdjnoftopHQZh3r%2FqYWWCuCfj8%2BRSZRWvuMhJBJR9ldS9uGDpR6a5IziaPB1vUEWxp5YsZUdCLCKufzG%2FNtUIzHFPsTUfBhy7hWwjBi7hWSh8LEIb&X-Amz-Signature=02a20a4ac86ba6ca9a1a497eb70e0ac3ea3449f3598a6e399ebad46f6b93ff19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLZAATQV%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDXpf7y4CO1m%2Bny4wADIdbL%2BIUsTnqZ9XTB9bcIzVBBFwIhAPIv3kzJwP01zGWuOhyMVTcZEc%2F%2BLtWxc%2FG67pD%2Fk7oTKv8DCEEQABoMNjM3NDIzMTgzODA1Igzm%2BdS%2BRvWK1oYX2Mcq3ANnsuadcyFNVpA%2FXicPAnaG4t6Fbc%2B1rhJ25YnRLnT7fzEd%2BbruMHrvujGi2L13NnDGhP8PgBXYy1q4P8%2FqhrZIqjPfyhu4pY31L08f%2FlKkkH1LkgzUyU5uzExtNp9k5CPCu5zEM5sVZNVOCB8exrnAHRO4UHeNtMOQkFppr4%2BA%2F4PAAgppzDLPwnNxVPvWeBdM9pYgBmWl%2B%2B4uwsvcxg58rMEntpuaXncsOnKK%2FBZhw3tsCB961Ff9QToI0PD5pxIolwiE8r1YJLSVpI4FUbkl3yhoFPtEDW%2BuLGc2uxFaccA7JtlziZ6eIEIlEmF0X%2FtHUd9W3KtB3Mk0XyUoGUT46OhYIRfoCOCQ7VY%2BlthyS9xBlGhzQtaqVC6ep5wvjNNZoigiDTOS2S0vnFzg%2FQiO%2FMM6oilIA4MMkiW3XdB%2FiDKIcRAaneQQ09rzKl%2FVO1plxk5Ql7KSuGhByri0VrSe6%2BI43vGYKq8Ay55%2Fq5CqD4aZi%2FXclJhuDZldKs88GFm7bmGAfbapomgwpBTbhIQF%2FJwY5MfZySDbEHAijmGf1lp3ySyccZk1bxj330KWKhOGELpZxwxytYd13miosOZZ2FGsf%2Bg30Q89GpTp%2FxAQ6hSUwYwkdTn%2BeCzAgjCn28HEBjqkAZ73t3J1XShP7WPSyQKNJC0ZEKUEX%2FON%2BFUo1YSk%2FhV50bW6G6%2FA8ee9h1fSGAYDBnnuofgxt3DSW71GEH1FegA7PlligTQ0cH%2FYH9MREMuMdjnoftopHQZh3r%2FqYWWCuCfj8%2BRSZRWvuMhJBJR9ldS9uGDpR6a5IziaPB1vUEWxp5YsZUdCLCKufzG%2FNtUIzHFPsTUfBhy7hWwjBi7hWSh8LEIb&X-Amz-Signature=16a79aa97e6f890854fcd96cfe423f036939d1e5a229f05a7d543e79b01a447e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
