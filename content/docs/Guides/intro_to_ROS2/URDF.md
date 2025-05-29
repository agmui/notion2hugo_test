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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667THOZBFB%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWsrKNUwnlxbAxEriPFw7U0%2FUebqaBvZwkMt6xX0SWGAiEA%2FuvLQD%2Bon8WEMRJGFt3Iq1IDG04uK50ATJ6QXTvMTZ0qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUXM5RNz1UTNqWw2SrcAxRFHyNhURMpxDRYXmdZpKBxfoPG%2BrTG3fFwxZVt%2FUxKEKUt9DPSLgQSDCR3ZqbbZHdJWY3KaTDhthDu09C9gOLsRcCVopSYZ8FYoyWo1snJtJRa1eLPT2Ab31dBtASShfASCT5XCKONuzsVC4OnwKs%2BQNaaoF2E7Y%2Bq%2B4pQKhOH29MGzZ%2BTD3DT4huU9rUXPAKrpE0gjIAZXdvTGqLvYVawwcejPER0OgzoV9gMYADGKdV8ta%2B%2B190L5KSY2RQJPw2W%2BaQng99sPk5FtId%2BEdKfmg%2FTS8qgynpQTsYX1afrQDyXQZduUF31JHTMgNZ0r714gZutcGXDTz%2FNoOKmcvRnapODbMrkHb2uWr5nsdK%2BP3QRonDw3NWbWD6Viw4LDQf2SBHPpt1nNInVjhxEAYoE%2BZwApZnyTxgmxj5rNHYy1rv5E9p8QMjosmVxUYLfehP%2BoO50oAP90tzogZ9IxrfhZHNxQpkXmMPn%2BTDjsqYXCUOCrhGMas8Kl%2FFvB4NfW%2BL58hN%2FBKnF9PXnhJ%2FOrv7c8eRYyLhljceQBKsKLVySBygrhF1O745XZSedq%2BuWqSQ5Y1GaGTRNhnutUEy21xT2GU2nE5FNi2LKfBK7a434QHxox95BH%2BMDW7X9MIW74cEGOqUBR4nSZl29M1N3s6kIgHPXI4jJIlMIjtBsiEqWliBeddsXP6YG6LPdvDfPTGst%2BvKn7ngtwP0DbQVC%2FU0tHU%2FzduEupa2cNq83VPz0kXTvg83bG3VePEyq4xYKQk2QZtmYxm2TQHev%2BBFcFkmmvhPhw9nEi8DrBQfYSWYv4K4r2BgkPOK9ZW1adkz0q0bROvBMxm7bv4iJutUkU3iLr3%2B8l3f0knqN&X-Amz-Signature=289735f1e8b7767094692faace8d69a59532768074e213588a61df81c90389e5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667THOZBFB%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWsrKNUwnlxbAxEriPFw7U0%2FUebqaBvZwkMt6xX0SWGAiEA%2FuvLQD%2Bon8WEMRJGFt3Iq1IDG04uK50ATJ6QXTvMTZ0qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUXM5RNz1UTNqWw2SrcAxRFHyNhURMpxDRYXmdZpKBxfoPG%2BrTG3fFwxZVt%2FUxKEKUt9DPSLgQSDCR3ZqbbZHdJWY3KaTDhthDu09C9gOLsRcCVopSYZ8FYoyWo1snJtJRa1eLPT2Ab31dBtASShfASCT5XCKONuzsVC4OnwKs%2BQNaaoF2E7Y%2Bq%2B4pQKhOH29MGzZ%2BTD3DT4huU9rUXPAKrpE0gjIAZXdvTGqLvYVawwcejPER0OgzoV9gMYADGKdV8ta%2B%2B190L5KSY2RQJPw2W%2BaQng99sPk5FtId%2BEdKfmg%2FTS8qgynpQTsYX1afrQDyXQZduUF31JHTMgNZ0r714gZutcGXDTz%2FNoOKmcvRnapODbMrkHb2uWr5nsdK%2BP3QRonDw3NWbWD6Viw4LDQf2SBHPpt1nNInVjhxEAYoE%2BZwApZnyTxgmxj5rNHYy1rv5E9p8QMjosmVxUYLfehP%2BoO50oAP90tzogZ9IxrfhZHNxQpkXmMPn%2BTDjsqYXCUOCrhGMas8Kl%2FFvB4NfW%2BL58hN%2FBKnF9PXnhJ%2FOrv7c8eRYyLhljceQBKsKLVySBygrhF1O745XZSedq%2BuWqSQ5Y1GaGTRNhnutUEy21xT2GU2nE5FNi2LKfBK7a434QHxox95BH%2BMDW7X9MIW74cEGOqUBR4nSZl29M1N3s6kIgHPXI4jJIlMIjtBsiEqWliBeddsXP6YG6LPdvDfPTGst%2BvKn7ngtwP0DbQVC%2FU0tHU%2FzduEupa2cNq83VPz0kXTvg83bG3VePEyq4xYKQk2QZtmYxm2TQHev%2BBFcFkmmvhPhw9nEi8DrBQfYSWYv4K4r2BgkPOK9ZW1adkz0q0bROvBMxm7bv4iJutUkU3iLr3%2B8l3f0knqN&X-Amz-Signature=a0b36f8e362c4f9d4be5bfa9f4d78d7ef548d2fd4a8156294d24500de0856a3a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
