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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKRA4EKC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEkRojqp9l8uXKKbXNo5bmgtpyK211ELxfHzv4immH62AiEA15H2CKJQAhDuU9ZhcsGpTxdG3zZ%2FD1Js7%2BPYXGGgYx0qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAeDUe3XYzvSX9wxCrcAxzOIgsFgtmDwNusHd4HpGoCrgpOMh9%2FOa4TE0odUUmkxDbToWbbYQU%2FTRc4aCcVMMeiRUHl4wpDGCxCznmX%2BZSIEtyevf%2F3361VkeMIjBS9vJkv8VMQUYCTltsZs%2BfDtfdspbocKV7t4JJuuBDWujmR7BEqns3k90thg1gI4iBrp3r41KZeBM0LN2kuBjg%2FeG3s7IU8DW90WbxGfJdp8%2BuM0A9iv8nt%2FgoouCqGBGYRUISKoZaponLYxdkE3tvXzg8Q5pLld8TJZhPg5gdnTY%2B%2B%2FS0OAgHgIyf5rZrXG2i5XzaSBK1xmGvNGoQD0xPXrLhEfbPmz66fdNYJd06sldQR2Iad2OZHr0Or0RwdX8kgvp%2BRhugnVMkfkTM%2FpZ4ntVPsgsX%2FMd6egx693mBSfJkWAmG89jsqlu%2Bw7cslkagPnhQL%2F%2B1pIUMHOTcsXzG0O12WM6qm9ao01vMcXmfLBBlsgEhkG5m1UHThxNLwvvvxiGZamsF8Nv58vttOYjl6IdCK3rgIiqQ7NadjOxUttJAgnCEbfX5PtD2HUwKmJA850iO8kNzd063aXgzpNt9EwbfH%2B3duXnXFgIX37FnHjXlgIGGSSva73R4D7GlHc%2BOid9Jd3LXPbCDeIDuGMJKExsMGOqUBAaxsoGY2RgNqdtDNbjy1oDjovLhGFTomt3ah9NMIRg0sWY5VCrfVLGUvTqLTHKP%2FSHslCYdbONh1oFoNJS2bpgUTqeGl4vmP1kQ9RR0z2Jf2Ruz4%2B9o9FSaDiUOrZ6qJXzcBMmxFXf%2B%2BoAJhCd3qpLe2XlVP2Ns9bb%2B7ZleIj0cYIpNcycAgSp%2BRoQvHUjM9drazDbfhvruuPLDGOp746%2FjakqFQ&X-Amz-Signature=2fb5c82879e232047a172d19523c28effaed9634747a7420db9d62d448df996f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKRA4EKC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEkRojqp9l8uXKKbXNo5bmgtpyK211ELxfHzv4immH62AiEA15H2CKJQAhDuU9ZhcsGpTxdG3zZ%2FD1Js7%2BPYXGGgYx0qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAeDUe3XYzvSX9wxCrcAxzOIgsFgtmDwNusHd4HpGoCrgpOMh9%2FOa4TE0odUUmkxDbToWbbYQU%2FTRc4aCcVMMeiRUHl4wpDGCxCznmX%2BZSIEtyevf%2F3361VkeMIjBS9vJkv8VMQUYCTltsZs%2BfDtfdspbocKV7t4JJuuBDWujmR7BEqns3k90thg1gI4iBrp3r41KZeBM0LN2kuBjg%2FeG3s7IU8DW90WbxGfJdp8%2BuM0A9iv8nt%2FgoouCqGBGYRUISKoZaponLYxdkE3tvXzg8Q5pLld8TJZhPg5gdnTY%2B%2B%2FS0OAgHgIyf5rZrXG2i5XzaSBK1xmGvNGoQD0xPXrLhEfbPmz66fdNYJd06sldQR2Iad2OZHr0Or0RwdX8kgvp%2BRhugnVMkfkTM%2FpZ4ntVPsgsX%2FMd6egx693mBSfJkWAmG89jsqlu%2Bw7cslkagPnhQL%2F%2B1pIUMHOTcsXzG0O12WM6qm9ao01vMcXmfLBBlsgEhkG5m1UHThxNLwvvvxiGZamsF8Nv58vttOYjl6IdCK3rgIiqQ7NadjOxUttJAgnCEbfX5PtD2HUwKmJA850iO8kNzd063aXgzpNt9EwbfH%2B3duXnXFgIX37FnHjXlgIGGSSva73R4D7GlHc%2BOid9Jd3LXPbCDeIDuGMJKExsMGOqUBAaxsoGY2RgNqdtDNbjy1oDjovLhGFTomt3ah9NMIRg0sWY5VCrfVLGUvTqLTHKP%2FSHslCYdbONh1oFoNJS2bpgUTqeGl4vmP1kQ9RR0z2Jf2Ruz4%2B9o9FSaDiUOrZ6qJXzcBMmxFXf%2B%2BoAJhCd3qpLe2XlVP2Ns9bb%2B7ZleIj0cYIpNcycAgSp%2BRoQvHUjM9drazDbfhvruuPLDGOp746%2FjakqFQ&X-Amz-Signature=2ce95424b0c2f43341b7b31f2091f3abb0c0a2f4e0f2360354c0a4607d7913a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
