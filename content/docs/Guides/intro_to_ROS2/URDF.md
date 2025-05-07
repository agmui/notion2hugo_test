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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U2XACYV%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLM7wPGERUXve5gHWE2Wsa44iW01OKaNISkTyQTWwrKwIga2uSNDig1MVyEReGM%2F7fU%2B8gjFuoUaq%2FMCEV3gd6OqYq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDMwMTTDyVKHP2loA4yrcA6dmg9aQCqyf2Flh%2BLGT0DnZnUXQJZA3SqUrlGvDan9n4S4PkAuC4MIUmipaoutVyWzBO5WNBswxmF8ItGVOVBhLGz9C36zsTJwwNMok8LqkQwtKJMMnlrHw22829wLv9%2BZ8hdRkl2PyLWkNZ2gb8bZDRF7JPDjk9Ui6vUu4o%2B7s1Sfax2t04nyg0CN8%2BuC4IuuMtXC5lObNeVVThwQHnQ7bD3biStyqkdrPrAmfTNPUM%2BZwFuSxGPVZu95E8KhtKRlUxEvK4vRA1WUPSuI73lWOrWWH3MhRXu1kEtDRayBrpKUp2a%2FpGRDzMvOpBVF6IIy4hpbaYU8V46Qc3OvisLf5GqDM8c2C8hB5Hxist3t2gjH%2B7eR%2F%2BN%2Fe4VFUowBVU87rqBjRO8MZOlGltMnCQ4xoCMC7lXSgeO9AvCqvlfkfHXHCXTpM14Gk7ouJPh1nIPSrFnJ%2F1AtjfZmhfCmIodIFDay7oHHTvrwBm%2FOYyxUs9G6%2F7fIa0fPKXB2%2BPipjMp8oz%2B3wfd%2FJ1L0dvQPYp%2F78til8rl6q0zNEDXoZ4Yw8xCemcDSvtkS5D7AY09IrR7elNrPVI5wczAULx5cHDxulgxv98aa82bDjRvDaBk3t8N7%2BSA44ClEqcc8YMPv07MAGOqUBLpXzVBADSFwheLR7UzkP8ATBSaZfzirW8PGfS%2BJNCacQith0W%2Fr0uUj7paJRsddM1tt8yPtlqb3SPF4pRfcoG%2B%2FYSv0xK0%2F%2FWmSiVP5KSe6O8m%2FL7w5TFHJzmkc1JKPbMjFa%2Bz5NFe6TlMK%2BqdTX4P3Mb4kT9Ni4NGKuVYFX9H8SRFEgTRR36ba165oak4SqJRl5t4PCv56om%2FM0qQ4aGS2vSLLf&X-Amz-Signature=6efccfc6227bc88e7e4bd987db0c815cfcc06e60d58f2125d5c4b8b4f9cae1ab&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U2XACYV%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLM7wPGERUXve5gHWE2Wsa44iW01OKaNISkTyQTWwrKwIga2uSNDig1MVyEReGM%2F7fU%2B8gjFuoUaq%2FMCEV3gd6OqYq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDMwMTTDyVKHP2loA4yrcA6dmg9aQCqyf2Flh%2BLGT0DnZnUXQJZA3SqUrlGvDan9n4S4PkAuC4MIUmipaoutVyWzBO5WNBswxmF8ItGVOVBhLGz9C36zsTJwwNMok8LqkQwtKJMMnlrHw22829wLv9%2BZ8hdRkl2PyLWkNZ2gb8bZDRF7JPDjk9Ui6vUu4o%2B7s1Sfax2t04nyg0CN8%2BuC4IuuMtXC5lObNeVVThwQHnQ7bD3biStyqkdrPrAmfTNPUM%2BZwFuSxGPVZu95E8KhtKRlUxEvK4vRA1WUPSuI73lWOrWWH3MhRXu1kEtDRayBrpKUp2a%2FpGRDzMvOpBVF6IIy4hpbaYU8V46Qc3OvisLf5GqDM8c2C8hB5Hxist3t2gjH%2B7eR%2F%2BN%2Fe4VFUowBVU87rqBjRO8MZOlGltMnCQ4xoCMC7lXSgeO9AvCqvlfkfHXHCXTpM14Gk7ouJPh1nIPSrFnJ%2F1AtjfZmhfCmIodIFDay7oHHTvrwBm%2FOYyxUs9G6%2F7fIa0fPKXB2%2BPipjMp8oz%2B3wfd%2FJ1L0dvQPYp%2F78til8rl6q0zNEDXoZ4Yw8xCemcDSvtkS5D7AY09IrR7elNrPVI5wczAULx5cHDxulgxv98aa82bDjRvDaBk3t8N7%2BSA44ClEqcc8YMPv07MAGOqUBLpXzVBADSFwheLR7UzkP8ATBSaZfzirW8PGfS%2BJNCacQith0W%2Fr0uUj7paJRsddM1tt8yPtlqb3SPF4pRfcoG%2B%2FYSv0xK0%2F%2FWmSiVP5KSe6O8m%2FL7w5TFHJzmkc1JKPbMjFa%2Bz5NFe6TlMK%2BqdTX4P3Mb4kT9Ni4NGKuVYFX9H8SRFEgTRR36ba165oak4SqJRl5t4PCv56om%2FM0qQ4aGS2vSLLf&X-Amz-Signature=18a500dc97590dbc4e6f676e82f67bfbb012f33df79610cb6549154bb6519e1e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
