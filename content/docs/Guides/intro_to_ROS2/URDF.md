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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKVNNFHA%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQC7BWNdKOtf%2BfRghYrtK7gQModVhyj0CqWP4A%2Bs0%2BKiuAIhAJWhARz6XaN2kJ8Q7e4y5O1QZTHKx8kl66joaGsHBibQKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNw2edP%2FMDuVqtRDUq3APsC9FNBQvQAbSfj9ZUvj5RC%2Frmoe3qC8PRF6vs6MCp5%2Bh3kmWcf%2FxiNSCejrCTGASwWc7YmBWuFUgXiRV7n7ADMpNg4XzCvpzeF%2F5se6qsyEBEtCX%2FvY5vlwDzsnrdhT1gRx%2FL%2F277tepjnd%2Fskabxu2KV1%2FS%2F0g%2B8KcujTwa2JzUyRNsJ2g9ZMauv%2B0LRXjFBjlITbBMKgm3inmv5Vjtb1NL70Xl%2FOaNC5B4AYMxY6QuovwYtZvOmqZvLOpYoos%2BSDTdE4antOV5Kb%2BsOnpDiZUlQYmZrMguXyNAZTYLQFwhMlfFP7XsqaBvxceNuQmJechcxrJIT9m5PhjrL%2BELOvP3hFykA4NCnJNYwmJDmNhBD7RaM55f%2FfzJrkdAGDR%2Fs1gR83xaPyCVa4TU0d84eStOYL7VPD1%2FD%2Fi2n6UmRwpxsFxIiBsRtuPlLxbjLUBag4GB7vNWIFHLCFpaEeb0%2FR2tzuOWfZhL%2BuimSh7Xj0SZrN0w%2BK%2FfYyvtr16htrMGHoup5sZqmlRN9kWNlp3ztBJmBkUAn%2B%2BQV37%2FJQEK73MIqvACuG94%2B1vOOzailq0JdnQOZaq6H27vmJEuAMh0SzuM16sFUh68fdsYAgX7Ycza%2BqJrD3bHKn3YSBDDFwd2%2FBjqkAaknQVAkhG9va%2BWzVsr3EVqUl0vo8w1k7F1xZYQqPnbfpf78Bgner%2BYtT51aK8d0MrkCie3wjnaTmblZ5AHL3t8MkDss3EufEh6LWmyHsJdD2aXJHv3exrgqKHIBnUp8R8BPUwe5ZTc4iWT8IcOnxUylIoxsBr6r5aEF1iGwTyome%2BziVBwLm30%2BKG8abmJ9NDMR65PYojq2yqrVp6whfdNsSqmH&X-Amz-Signature=f5482b960f68b9060dd9df161a90f3c8765f29228af27bb7bc40bdf47616dc35&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKVNNFHA%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQC7BWNdKOtf%2BfRghYrtK7gQModVhyj0CqWP4A%2Bs0%2BKiuAIhAJWhARz6XaN2kJ8Q7e4y5O1QZTHKx8kl66joaGsHBibQKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNw2edP%2FMDuVqtRDUq3APsC9FNBQvQAbSfj9ZUvj5RC%2Frmoe3qC8PRF6vs6MCp5%2Bh3kmWcf%2FxiNSCejrCTGASwWc7YmBWuFUgXiRV7n7ADMpNg4XzCvpzeF%2F5se6qsyEBEtCX%2FvY5vlwDzsnrdhT1gRx%2FL%2F277tepjnd%2Fskabxu2KV1%2FS%2F0g%2B8KcujTwa2JzUyRNsJ2g9ZMauv%2B0LRXjFBjlITbBMKgm3inmv5Vjtb1NL70Xl%2FOaNC5B4AYMxY6QuovwYtZvOmqZvLOpYoos%2BSDTdE4antOV5Kb%2BsOnpDiZUlQYmZrMguXyNAZTYLQFwhMlfFP7XsqaBvxceNuQmJechcxrJIT9m5PhjrL%2BELOvP3hFykA4NCnJNYwmJDmNhBD7RaM55f%2FfzJrkdAGDR%2Fs1gR83xaPyCVa4TU0d84eStOYL7VPD1%2FD%2Fi2n6UmRwpxsFxIiBsRtuPlLxbjLUBag4GB7vNWIFHLCFpaEeb0%2FR2tzuOWfZhL%2BuimSh7Xj0SZrN0w%2BK%2FfYyvtr16htrMGHoup5sZqmlRN9kWNlp3ztBJmBkUAn%2B%2BQV37%2FJQEK73MIqvACuG94%2B1vOOzailq0JdnQOZaq6H27vmJEuAMh0SzuM16sFUh68fdsYAgX7Ycza%2BqJrD3bHKn3YSBDDFwd2%2FBjqkAaknQVAkhG9va%2BWzVsr3EVqUl0vo8w1k7F1xZYQqPnbfpf78Bgner%2BYtT51aK8d0MrkCie3wjnaTmblZ5AHL3t8MkDss3EufEh6LWmyHsJdD2aXJHv3exrgqKHIBnUp8R8BPUwe5ZTc4iWT8IcOnxUylIoxsBr6r5aEF1iGwTyome%2BziVBwLm30%2BKG8abmJ9NDMR65PYojq2yqrVp6whfdNsSqmH&X-Amz-Signature=f0b281c8d3a1a4930b9658bd54e4b8a9cb2695cb43145b9ebdf9cfeea75fcbcb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
