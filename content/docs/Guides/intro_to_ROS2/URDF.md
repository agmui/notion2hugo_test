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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672O25MEF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuEIubkbyU7EsNdab9Z8nif7kj3kPV3ILhs%2BIUobYKSQIgInblcgm7deFkQYVAYDI%2BlUx3y84oxYo9PskSOhz0rBAq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDFN9GVm2q35ygXZaYyrcAzM9qpWerQ9uzqm2jK8Es8d4TG7JAhjj1XRLZdlCm6FT9YHQ4r%2FpAiLep2n46i0CqXCVIN49HhfuTyvtJNHZvpnteUD8jeIBjZ16mzZwh1vn2aFneeK6hlEZjbS6yeSDjQiLQu2ghJpUu%2FA627ismQAAPn59Zm0g3BUlhnh5Ef0yWgEdWKUZyo%2F1sRL4nIznPv%2FU%2Bw16evexE2c7P%2B4Gont4i2LSxetywY0oiwS5dxMgpglEEPGlAKSmzHVF2ons0yTAXE%2FS%2BWon0%2BYtVGcBVhpIWHlnMTmbPRqoXLgv4Nz7zRR922wAPs1YVIo5V%2BPbYsvGY%2BPJUeBIBjBpAPdoBhIpAhWrE0a29ggh44ljuAYk2GPgtNJNj7rv5EY9986zoz31a7HgdXvsxL6GHrmWPQBGWUDZBeOH%2FA3x8Pq1nnmTIKydiIvvx1d4yR521KuWW2qliLMzqZGkLjOxoRNLLqFxSoeiOhEuIrNgr0iDRuSxQXKhFi8oy4ODB7Ez5NBEKzjZLaa%2BcAk6hHzZXQnfs1fqhRFzPuCZI2raZmrfAkY6kUSdJRE45CgNpeHOLB7Uq5w5dQdewaashqtzadgxUW8gD54%2FFp2mvYy5z0qHjiwSmvhQ6bnlcWPoT3gcMJD5nsEGOqUBiLxDOd1APd7ZjCTx4kYRtCF52mjYXiCdVRDkDKsxwFI6g9xfRval8O2UA07h%2F59xmfunm609SpN1peYEKfok9YU3P%2FnyztG1eqyKRD5bV5f44n97w%2FnwiLCm4iSfGl9FuuTUZSg5HOqkFJLV3T4NaM17OOmCOE0ahBw40iE3CiYEU03NOAU46YC3oCQ%2BI3k5WipFpi5TIZT9RRP3VGY9rcncPuW5&X-Amz-Signature=ba88b6fcbaee32d3ee25dfddfcb5052bff2cafaa50fcaf7085b5b13f58c51a51&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672O25MEF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuEIubkbyU7EsNdab9Z8nif7kj3kPV3ILhs%2BIUobYKSQIgInblcgm7deFkQYVAYDI%2BlUx3y84oxYo9PskSOhz0rBAq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDFN9GVm2q35ygXZaYyrcAzM9qpWerQ9uzqm2jK8Es8d4TG7JAhjj1XRLZdlCm6FT9YHQ4r%2FpAiLep2n46i0CqXCVIN49HhfuTyvtJNHZvpnteUD8jeIBjZ16mzZwh1vn2aFneeK6hlEZjbS6yeSDjQiLQu2ghJpUu%2FA627ismQAAPn59Zm0g3BUlhnh5Ef0yWgEdWKUZyo%2F1sRL4nIznPv%2FU%2Bw16evexE2c7P%2B4Gont4i2LSxetywY0oiwS5dxMgpglEEPGlAKSmzHVF2ons0yTAXE%2FS%2BWon0%2BYtVGcBVhpIWHlnMTmbPRqoXLgv4Nz7zRR922wAPs1YVIo5V%2BPbYsvGY%2BPJUeBIBjBpAPdoBhIpAhWrE0a29ggh44ljuAYk2GPgtNJNj7rv5EY9986zoz31a7HgdXvsxL6GHrmWPQBGWUDZBeOH%2FA3x8Pq1nnmTIKydiIvvx1d4yR521KuWW2qliLMzqZGkLjOxoRNLLqFxSoeiOhEuIrNgr0iDRuSxQXKhFi8oy4ODB7Ez5NBEKzjZLaa%2BcAk6hHzZXQnfs1fqhRFzPuCZI2raZmrfAkY6kUSdJRE45CgNpeHOLB7Uq5w5dQdewaashqtzadgxUW8gD54%2FFp2mvYy5z0qHjiwSmvhQ6bnlcWPoT3gcMJD5nsEGOqUBiLxDOd1APd7ZjCTx4kYRtCF52mjYXiCdVRDkDKsxwFI6g9xfRval8O2UA07h%2F59xmfunm609SpN1peYEKfok9YU3P%2FnyztG1eqyKRD5bV5f44n97w%2FnwiLCm4iSfGl9FuuTUZSg5HOqkFJLV3T4NaM17OOmCOE0ahBw40iE3CiYEU03NOAU46YC3oCQ%2BI3k5WipFpi5TIZT9RRP3VGY9rcncPuW5&X-Amz-Signature=50b7617ee0b3e24d330a907d01959196584e99ad06ebcf4a14db81b133eb81b4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
