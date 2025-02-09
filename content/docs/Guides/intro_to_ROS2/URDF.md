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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNQ2CJBF%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHjEaK5LxF8yJsZUcNRGWe9k2aOKOT0beOh85DPo3BFFAiAj1aWm%2BNgpHnzBKd%2Fckceo%2BV9OSRuT4hUuP2IKIZI6cyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVvfxzvxydwQvXkirKtwDfiMKaYUmxevgI846cGCnO%2FvdC20DKCV3LVBJgeg%2FjTdkdf65eEko6m7JuRprBxxjGCmuQsVRQZnUOLWlgX%2BejrFGMXMDekCbBJTxuP37XGDiGO4ZKZvLlVuwrtIhxSoLyHMekxvBIYCyn1AprA4Vq%2FuslSzAcEOiSi%2FNzvEwTjyElBXBtLpjsws9yOm23aKfG8Fm74agVYzVsc9JxM5Ds9VV2pFBT%2B3MGK420AxImRsd2mutreynRioIHzmibKQm%2FPdFeqZMkiubBEhvZXm7%2F6NpHoIH%2FgcawyDz9FL7TZnbvudF%2BguplgA8WCoqFr01WyEAMFRtysZA0WiV9CLrO8aHH2A66FEPfDe191Sga5clMbXlnMCdJAagJBfJ4qErAA5lCLJkdsR52pkBoIILVAoFE9QeY5bEZbFJF2l32CvWAo2lRZBtaS%2BjRQqZaW4%2Fv0Pu%2FZ6D3h9a6hg2mhtJqNW0hAbPujOhA17%2BXbreTOU6y3DqDrPb%2BS7wSfLhTRqW2RjRCSK2lqFF3t0Y4%2Fokc1UwFNlTOHxlO26uL02d%2FA%2BXAfhI6vQ1CrpPH4VcD4yMEOVLm0%2B%2FuTwUMM6XT7a6pfL2JbooPxR3uvImOrxepoyV5AnWMlccYCQTVa4wgOShvQY6pgEouoHmYi9IR6lWe%2FXi7dlv1fY4IVjRYE%2B5lngRwkc0Gtw%2FHewdrKEFD5yvgPl8kPy7M6xnD7a%2FwdE7PdHLjuuPLy7X0pI7h8Ogm2OFMsmAS%2FapV%2FPoujnfiIMS0Ar0w%2BZXUph%2BOfxgMGF1U1luR%2BXu5xnORUS54tWjUzbBfcrw%2Fr6WVo%2F%2FIEw3nVMFj3plyxYM49tFVwIUo8Ke9jQDb4E69vOSZBHi&X-Amz-Signature=cdd5074fdc2d7683969cc950fc09d521ba3bcfc175c9ab8018ab8e3870bcb0aa&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNQ2CJBF%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHjEaK5LxF8yJsZUcNRGWe9k2aOKOT0beOh85DPo3BFFAiAj1aWm%2BNgpHnzBKd%2Fckceo%2BV9OSRuT4hUuP2IKIZI6cyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVvfxzvxydwQvXkirKtwDfiMKaYUmxevgI846cGCnO%2FvdC20DKCV3LVBJgeg%2FjTdkdf65eEko6m7JuRprBxxjGCmuQsVRQZnUOLWlgX%2BejrFGMXMDekCbBJTxuP37XGDiGO4ZKZvLlVuwrtIhxSoLyHMekxvBIYCyn1AprA4Vq%2FuslSzAcEOiSi%2FNzvEwTjyElBXBtLpjsws9yOm23aKfG8Fm74agVYzVsc9JxM5Ds9VV2pFBT%2B3MGK420AxImRsd2mutreynRioIHzmibKQm%2FPdFeqZMkiubBEhvZXm7%2F6NpHoIH%2FgcawyDz9FL7TZnbvudF%2BguplgA8WCoqFr01WyEAMFRtysZA0WiV9CLrO8aHH2A66FEPfDe191Sga5clMbXlnMCdJAagJBfJ4qErAA5lCLJkdsR52pkBoIILVAoFE9QeY5bEZbFJF2l32CvWAo2lRZBtaS%2BjRQqZaW4%2Fv0Pu%2FZ6D3h9a6hg2mhtJqNW0hAbPujOhA17%2BXbreTOU6y3DqDrPb%2BS7wSfLhTRqW2RjRCSK2lqFF3t0Y4%2Fokc1UwFNlTOHxlO26uL02d%2FA%2BXAfhI6vQ1CrpPH4VcD4yMEOVLm0%2B%2FuTwUMM6XT7a6pfL2JbooPxR3uvImOrxepoyV5AnWMlccYCQTVa4wgOShvQY6pgEouoHmYi9IR6lWe%2FXi7dlv1fY4IVjRYE%2B5lngRwkc0Gtw%2FHewdrKEFD5yvgPl8kPy7M6xnD7a%2FwdE7PdHLjuuPLy7X0pI7h8Ogm2OFMsmAS%2FapV%2FPoujnfiIMS0Ar0w%2BZXUph%2BOfxgMGF1U1luR%2BXu5xnORUS54tWjUzbBfcrw%2Fr6WVo%2F%2FIEw3nVMFj3plyxYM49tFVwIUo8Ke9jQDb4E69vOSZBHi&X-Amz-Signature=051b9657f96ff735865f1b60b35bda785df7377f9ca75f0aad0ddc1c8c514a2d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
