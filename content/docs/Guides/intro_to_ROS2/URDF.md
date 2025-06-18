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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBBCI6JP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FXogDvbmgE4b9I76DDtJkiWapJNZii%2BVtKr7YKckQ3AIgGuHb3j9UEdasF7hEoLJXKDOzDS3NXeZJidJ0x7sSspQqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHphPSd0zsCwhPvdyrcA58TTcNmyR5A0wrH%2FSQfSwrxGbB6eXh%2BXCBq9Klz582jpC5cA7IbErP3rsiKdW2LfRN9q3mguL8fVtOZh%2BpQh6qRhNZCMrdEQEtEmlCeax9b%2F%2BmfOwF4sq68uF2JRSXSe5TxUhY556GTyIOkqi%2B0jCeFRt8sc2UyLgxPvV3dzMhKlMnCS858iBAxgMw7Fx%2BbqY7CVaU30EcNIiDupMQfAQI3hxIJkpvRIXL6ECOc%2FMF6edTbwsFGt7eOmCSMOg0IcoV33o07ZxM8yobplgcfcC4oTFKqyKyjN%2F8aqJN0I3A6fWcry%2FUZTz0aNAaQdDfg1hzBVo%2B8Im1uss0fNdgViaXJqSHUoXqg17lLhjyK8i014Ht7OMhuE68LrthrQRhkYTvqJ2HHMYj2UyRP5V1uJ5Mc7Ca9IF%2B0%2BrTKpvmZArPfrxiHMHcVkWMXon94Iec5SGjjdIK5FPEO2V72x7BWYWKfRAlnPFbAXhWMU%2FUE4SG0fadhzUFlpZRlDJ5LBvil%2BR9S7BOZzl6i2toNhHUpwkTOWAiW7Eg%2FsoIXJNtvBr6Fi8YmwvK89OVjnyTr6s4vFpAfoadML3Gt0AjuwY5m71awgzIfoLJGVobibd0fB%2BNoMnNiUnWXoQfEiHwBMNn7y8IGOqUBLkltBE7dG46JmakaiYl6I%2BeXglIMw%2BqEi7AhZPDKAzId312fUb2t4BzYzOh1Ivwx%2F%2BFb4hmOfoto4A4Un0f2qnKOvkxGovBMqQ8OD31xAHiWTbUIFGGJkN9ja2HW%2BAeU3YNQek2T8suDySmVaEV%2BamtvKuPXc6BFotu3wfWZuR45qG1KLh5Qp4tvw5urRIs0pbZSUfv0Vsr2e2eIp9ctVibWWpTp&X-Amz-Signature=4129e9cab9954e79efeb3b357deb629af16e3e203967f17e4352c152d81337af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBBCI6JP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FXogDvbmgE4b9I76DDtJkiWapJNZii%2BVtKr7YKckQ3AIgGuHb3j9UEdasF7hEoLJXKDOzDS3NXeZJidJ0x7sSspQqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHphPSd0zsCwhPvdyrcA58TTcNmyR5A0wrH%2FSQfSwrxGbB6eXh%2BXCBq9Klz582jpC5cA7IbErP3rsiKdW2LfRN9q3mguL8fVtOZh%2BpQh6qRhNZCMrdEQEtEmlCeax9b%2F%2BmfOwF4sq68uF2JRSXSe5TxUhY556GTyIOkqi%2B0jCeFRt8sc2UyLgxPvV3dzMhKlMnCS858iBAxgMw7Fx%2BbqY7CVaU30EcNIiDupMQfAQI3hxIJkpvRIXL6ECOc%2FMF6edTbwsFGt7eOmCSMOg0IcoV33o07ZxM8yobplgcfcC4oTFKqyKyjN%2F8aqJN0I3A6fWcry%2FUZTz0aNAaQdDfg1hzBVo%2B8Im1uss0fNdgViaXJqSHUoXqg17lLhjyK8i014Ht7OMhuE68LrthrQRhkYTvqJ2HHMYj2UyRP5V1uJ5Mc7Ca9IF%2B0%2BrTKpvmZArPfrxiHMHcVkWMXon94Iec5SGjjdIK5FPEO2V72x7BWYWKfRAlnPFbAXhWMU%2FUE4SG0fadhzUFlpZRlDJ5LBvil%2BR9S7BOZzl6i2toNhHUpwkTOWAiW7Eg%2FsoIXJNtvBr6Fi8YmwvK89OVjnyTr6s4vFpAfoadML3Gt0AjuwY5m71awgzIfoLJGVobibd0fB%2BNoMnNiUnWXoQfEiHwBMNn7y8IGOqUBLkltBE7dG46JmakaiYl6I%2BeXglIMw%2BqEi7AhZPDKAzId312fUb2t4BzYzOh1Ivwx%2F%2BFb4hmOfoto4A4Un0f2qnKOvkxGovBMqQ8OD31xAHiWTbUIFGGJkN9ja2HW%2BAeU3YNQek2T8suDySmVaEV%2BamtvKuPXc6BFotu3wfWZuR45qG1KLh5Qp4tvw5urRIs0pbZSUfv0Vsr2e2eIp9ctVibWWpTp&X-Amz-Signature=db74f95233101e2fe692d0cd36312d09de29f2881ee1b71be41572d94ae05478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
