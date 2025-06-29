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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOMX6QXZ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8vAikcWc0onli2npIfy6ElBHfUZ7WUt2Ce%2BlGx17fBwIgL%2FVT61KSHL4DcuUoFZa2FldqdgpBLaKNBIf6xiyby9sqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbXXPEC0kLfa0q5QSrcA6vAUuYO4sVoPn3l58rpTXcl7rQiUdch7hq7RTGWTmyfkcwpTUHDy%2BiXZViwNLQvYjI%2BRwSmauv2sb8TvzX8rCZJd4YEN4lOVQCUzBkHXzIC6RvdSDEEH%2FlPlg3i4RPayEWfjBE1jELjPHwBqZJa9LV2EvCXIaBV76fSTJO4lv%2BxKWmx8jC4uzVGREsDEOb6CJnTzs4pn0Suc6DZCLlC%2B4FFSFSWU4tc%2Bs5d9jdph8JABJqoKVzwsGm%2Bw27TY0RHEMCuvFoX2JMtO9wD24Gk3m6wgLpqllPDHqOE0%2FR%2F8yI07vzdpnAHD0GRoAIuA1%2FpXM%2BKcVjS77VWY%2BY7%2Bzz0qoYUHd38%2BxpiJKa%2BoOGcS7zFJy613JFXpVuZDWEl26TU8FBDjr67bGFhBzgqV5pmzwgGm68u1EtWLI%2F0XqSXL5l9G4Ckpyn3uP%2Bgvgut%2BITc9MSimuEhuTKSXwhc4grlmLYrjWe8wqT9lI3zblhtfZAX7ovx76DAkfN0nHkl98cpIuxGpaUJPeROxjCK%2FypaBVG1BFC2FWBzOutsqWoSvSkoEx9d0FPweB7zcYV791Ev1FZEnZt9lcqa2YfgA%2BAMuinAkQA6tmfdwGVgbTk229DRyfHFuNb8m8KNZuN4MJCXgsMGOqUBtxwBnvjgtd4IK7bALjDLsBcMld3fSxIxBXT%2FWEAgCKrDehFf3V1Z0Jl4EJ7bGCf0IWK%2FtruhAjlyD6j1YO4ffpEmb9saW1tVO4yI%2BbubPcc8Zp5byMIBtKsoOhtA5sopGBUFP6cvVQCp%2B34QHhU%2BsE%2FAq2EPl7Q%2B%2B3jfifcoNYJAiaj4iuzzCXahE3OKY59Br1LItYATRRqwzfMHPVLbA3xAyrLi&X-Amz-Signature=129d51b83b7130d038bda0e209ab0200f3b122a50de1ce699fc39ad404c1f342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOMX6QXZ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8vAikcWc0onli2npIfy6ElBHfUZ7WUt2Ce%2BlGx17fBwIgL%2FVT61KSHL4DcuUoFZa2FldqdgpBLaKNBIf6xiyby9sqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbXXPEC0kLfa0q5QSrcA6vAUuYO4sVoPn3l58rpTXcl7rQiUdch7hq7RTGWTmyfkcwpTUHDy%2BiXZViwNLQvYjI%2BRwSmauv2sb8TvzX8rCZJd4YEN4lOVQCUzBkHXzIC6RvdSDEEH%2FlPlg3i4RPayEWfjBE1jELjPHwBqZJa9LV2EvCXIaBV76fSTJO4lv%2BxKWmx8jC4uzVGREsDEOb6CJnTzs4pn0Suc6DZCLlC%2B4FFSFSWU4tc%2Bs5d9jdph8JABJqoKVzwsGm%2Bw27TY0RHEMCuvFoX2JMtO9wD24Gk3m6wgLpqllPDHqOE0%2FR%2F8yI07vzdpnAHD0GRoAIuA1%2FpXM%2BKcVjS77VWY%2BY7%2Bzz0qoYUHd38%2BxpiJKa%2BoOGcS7zFJy613JFXpVuZDWEl26TU8FBDjr67bGFhBzgqV5pmzwgGm68u1EtWLI%2F0XqSXL5l9G4Ckpyn3uP%2Bgvgut%2BITc9MSimuEhuTKSXwhc4grlmLYrjWe8wqT9lI3zblhtfZAX7ovx76DAkfN0nHkl98cpIuxGpaUJPeROxjCK%2FypaBVG1BFC2FWBzOutsqWoSvSkoEx9d0FPweB7zcYV791Ev1FZEnZt9lcqa2YfgA%2BAMuinAkQA6tmfdwGVgbTk229DRyfHFuNb8m8KNZuN4MJCXgsMGOqUBtxwBnvjgtd4IK7bALjDLsBcMld3fSxIxBXT%2FWEAgCKrDehFf3V1Z0Jl4EJ7bGCf0IWK%2FtruhAjlyD6j1YO4ffpEmb9saW1tVO4yI%2BbubPcc8Zp5byMIBtKsoOhtA5sopGBUFP6cvVQCp%2B34QHhU%2BsE%2FAq2EPl7Q%2B%2B3jfifcoNYJAiaj4iuzzCXahE3OKY59Br1LItYATRRqwzfMHPVLbA3xAyrLi&X-Amz-Signature=6b71573ea21888156a691c3255956b97d4368046817c4671cc829f6b671505b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
