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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB4BCLG7%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIC%2F1%2B01v0I0uPRVUssfeXhwpcWc1cBh7A4DxhrDZrVAlAiAlNfVq12FLFQ6b4hn4FtazA26dM%2B1jl7SEiOq%2Fz4ts4CqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPSo2U46oYK7a%2FWlRKtwD59KDO%2FDJzeyvoT%2Fna4fnXLEOFcPVfE7TfWbs4emVaVClvKGV4MivTZW%2FYp8cEKhxIXAqIoOpI9%2Fo9d0DxGH4VYlb2FzV5rrxGg%2FAjD%2BX5G7%2BXT2pPGVhU5%2BHVu0wHE94nkb6CkEoWwg6oAA22O%2Fk5EL40kszZz8A01lIJdi7WvcQiGQ9a8erT%2FiZTj40xotEvAUnO4kBEK7QK%2BPtnDWbblNsTD29FoHWxLKcJ6WkHSHcZ%2Bq0p2r%2FLapd81Efk0zRRXlgKcPqZERCPl7Bp%2FDqLLKSvtSu7RcI2%2FNNQrutewmSKh4yo2LBLrqkcFtlKsaRj%2FUDrls7clO0ljCNwzcTL3I%2Bd2QwV9bk7pO%2B42w9L55FdMVQiZpj3RhWXZI3mSvT5lXHxEjkyXecEbMtHDP6fdOEjaHR9V41UnOX14F6aidNqlHupP5CJsvL44Xc3jwIAFoWnwynDC4kcqlCs9RufeT%2BddL0E0OId2qGpC%2BsJM5wINVhk%2FxEWj%2F415%2B%2BAPBdPPQytGLPV55Dj1eklNYqnqbvw0GZ7xHzD3AdTXFxCZVi%2B97nQX5HtEZ%2BrJxMSS38xjJaBupS8NWiaYNedtoUzVgcDszz4U6hqKCqR36QITcQrUbnyiNmClz4JhQwlp3JwAY6pgG%2Bp3CBJCOlubzQuV2k2m20MhTJf3AW3yQIm0uZtgfH4JZHAaxqgrswRh2wdwfNLsg0hCGKtvFi%2BguJAdd%2FaLbM0Qg7MrhTI%2B6vsyNHQ0oz7S7O8TmbaPhJuWPa8mSM23L%2B6gfxWkA3Y0fsO3QM54A%2F%2FOnclg2eDzROsfdANdHImkFsRzXQXwnLbcgdoRmbahEH6JoR6bBbKiMX66O2HTNpUdqYPM%2FI&X-Amz-Signature=635f6c57c3455c7f86e856e1bade9f5cc24ccbebd232caa3cbbef7fd23884800&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB4BCLG7%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIC%2F1%2B01v0I0uPRVUssfeXhwpcWc1cBh7A4DxhrDZrVAlAiAlNfVq12FLFQ6b4hn4FtazA26dM%2B1jl7SEiOq%2Fz4ts4CqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPSo2U46oYK7a%2FWlRKtwD59KDO%2FDJzeyvoT%2Fna4fnXLEOFcPVfE7TfWbs4emVaVClvKGV4MivTZW%2FYp8cEKhxIXAqIoOpI9%2Fo9d0DxGH4VYlb2FzV5rrxGg%2FAjD%2BX5G7%2BXT2pPGVhU5%2BHVu0wHE94nkb6CkEoWwg6oAA22O%2Fk5EL40kszZz8A01lIJdi7WvcQiGQ9a8erT%2FiZTj40xotEvAUnO4kBEK7QK%2BPtnDWbblNsTD29FoHWxLKcJ6WkHSHcZ%2Bq0p2r%2FLapd81Efk0zRRXlgKcPqZERCPl7Bp%2FDqLLKSvtSu7RcI2%2FNNQrutewmSKh4yo2LBLrqkcFtlKsaRj%2FUDrls7clO0ljCNwzcTL3I%2Bd2QwV9bk7pO%2B42w9L55FdMVQiZpj3RhWXZI3mSvT5lXHxEjkyXecEbMtHDP6fdOEjaHR9V41UnOX14F6aidNqlHupP5CJsvL44Xc3jwIAFoWnwynDC4kcqlCs9RufeT%2BddL0E0OId2qGpC%2BsJM5wINVhk%2FxEWj%2F415%2B%2BAPBdPPQytGLPV55Dj1eklNYqnqbvw0GZ7xHzD3AdTXFxCZVi%2B97nQX5HtEZ%2BrJxMSS38xjJaBupS8NWiaYNedtoUzVgcDszz4U6hqKCqR36QITcQrUbnyiNmClz4JhQwlp3JwAY6pgG%2Bp3CBJCOlubzQuV2k2m20MhTJf3AW3yQIm0uZtgfH4JZHAaxqgrswRh2wdwfNLsg0hCGKtvFi%2BguJAdd%2FaLbM0Qg7MrhTI%2B6vsyNHQ0oz7S7O8TmbaPhJuWPa8mSM23L%2B6gfxWkA3Y0fsO3QM54A%2F%2FOnclg2eDzROsfdANdHImkFsRzXQXwnLbcgdoRmbahEH6JoR6bBbKiMX66O2HTNpUdqYPM%2FI&X-Amz-Signature=89c82e369946033d51fa8b46f96bcff0e484be405e2b192feeb578ff00138b7b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
