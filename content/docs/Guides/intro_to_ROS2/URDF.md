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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JTQSQMG%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T070726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUB1g7JK9Ihp6tSMv8sJVET8yNTKyMxn%2FDcdhPXou3YAiAmsW64C6q7%2BFKbTY5QCQM0hlYyKz3JouU7qTC0mqCasSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV9oTQnOWeMSRUKj8KtwD1RuYHdYtuhY1iGVa4LfTwapygYQDPa%2FVHldcseEtMdKZPrSecn1QOOV8Eg3ix7kLPUcMlj4rwQ02tNW%2BJH6zmRqhgfB0%2BfZ1nT4HvQvE7lNSfplnYFNCnFMo5kGZzLzXU%2BqZajWzUnu6aaRotyUfpA1dbuBzTPHvuJaxH9S8zBhA9AFUmTjjP252eEYWSlG%2FP2lOj3xVsH7wHClP%2B8UTOIxcwh%2BO4LAr6s3hcL5rjVG%2BraHSAdpJlIjzqKcW1fRoxaXGAl7TuB5jlRk0kEQgNWmmN12xFb%2F94BdFWwWY%2FfpiludLbpj%2BFFRWeWsqzIlCe6Zq7ovxeFHpVqFtIFXxzyHgCkl1I21%2BCfeBEBmEDtJCcdo3suPCo1BPa3DMC3bD26lgGKZiI11PuVzdzVx3KWXELUI1tyDG2amNaaOlf6%2FlMF5%2FO16g40kHQQmfqSkjBun64wGMEcN4rWm3BfRFZBy%2BTtjwHo56RhoFIu9RCIPtweOu2wnwDUt%2BBBRmpw%2FqJ2gd95v69RFMLFzkc%2FrLF8cDoZMCwoGsj797QD3vPgRcQoBlP1eHIONAeMNEcwYqCoNiivS1x1qoN4puAnGMzNWZPqoBwuQJe1qtbMbM73oOqTbqJjKT6V5ca3gwoKTsvAY6pgFM78W5X6RcplO%2BF1z1oewPJnfON50ldnLepompArfyv2YXK5eENj6yXr2THB%2B2MAf7BzJvRy6Pfmp1hj%2FgQGtxksmHTyVhVGTaKpQR%2BvbpZJfYn64tl3xFQLjxwxQEzSaePUSnST88ArxEfVPdfXi8qTTeGGBi4VWUXlm9zExvFMVhMmYNhnDFPYsCwC0JG7HeERqF3P1jhzysb4l5ZwIBNZ7iTuea&X-Amz-Signature=37592eb78d95e6496c110ecb82679dd16a119099a5be17c7ac51160ed2e74997&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JTQSQMG%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T070726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUB1g7JK9Ihp6tSMv8sJVET8yNTKyMxn%2FDcdhPXou3YAiAmsW64C6q7%2BFKbTY5QCQM0hlYyKz3JouU7qTC0mqCasSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV9oTQnOWeMSRUKj8KtwD1RuYHdYtuhY1iGVa4LfTwapygYQDPa%2FVHldcseEtMdKZPrSecn1QOOV8Eg3ix7kLPUcMlj4rwQ02tNW%2BJH6zmRqhgfB0%2BfZ1nT4HvQvE7lNSfplnYFNCnFMo5kGZzLzXU%2BqZajWzUnu6aaRotyUfpA1dbuBzTPHvuJaxH9S8zBhA9AFUmTjjP252eEYWSlG%2FP2lOj3xVsH7wHClP%2B8UTOIxcwh%2BO4LAr6s3hcL5rjVG%2BraHSAdpJlIjzqKcW1fRoxaXGAl7TuB5jlRk0kEQgNWmmN12xFb%2F94BdFWwWY%2FfpiludLbpj%2BFFRWeWsqzIlCe6Zq7ovxeFHpVqFtIFXxzyHgCkl1I21%2BCfeBEBmEDtJCcdo3suPCo1BPa3DMC3bD26lgGKZiI11PuVzdzVx3KWXELUI1tyDG2amNaaOlf6%2FlMF5%2FO16g40kHQQmfqSkjBun64wGMEcN4rWm3BfRFZBy%2BTtjwHo56RhoFIu9RCIPtweOu2wnwDUt%2BBBRmpw%2FqJ2gd95v69RFMLFzkc%2FrLF8cDoZMCwoGsj797QD3vPgRcQoBlP1eHIONAeMNEcwYqCoNiivS1x1qoN4puAnGMzNWZPqoBwuQJe1qtbMbM73oOqTbqJjKT6V5ca3gwoKTsvAY6pgFM78W5X6RcplO%2BF1z1oewPJnfON50ldnLepompArfyv2YXK5eENj6yXr2THB%2B2MAf7BzJvRy6Pfmp1hj%2FgQGtxksmHTyVhVGTaKpQR%2BvbpZJfYn64tl3xFQLjxwxQEzSaePUSnST88ArxEfVPdfXi8qTTeGGBi4VWUXlm9zExvFMVhMmYNhnDFPYsCwC0JG7HeERqF3P1jhzysb4l5ZwIBNZ7iTuea&X-Amz-Signature=4d6d763b78c09ef36d99dcdc7c168d2131cd49b7d650d1cb4e6b9b764493985e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
