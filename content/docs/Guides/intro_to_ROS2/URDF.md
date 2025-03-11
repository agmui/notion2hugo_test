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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LPMBK7L%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQC24gybyORatogxpkrA966tpzcETModOUTU%2Fd0Pg7fs0AIhAJ4ifrMeJMUu3HVF71x%2B3Wrjan3agjfhz1LBMR6R8ODVKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4hrrD8NVyL0XfCVEq3ANflLJADDmDpSWdUcJIa35KIVwLpJQEPQIZMK%2F55s1BdubUI557HwZi51FCI%2B4M55VRVBXezAcv9U5CD%2FtPrRw5CPGcRS2n4RW61IGvrY4HdanxHj8W5CnaF0zKXU3vmagGNyxYM0I1xb7214p1bOhq%2FngJabcWyiBfcuhD0%2BA%2BXCwPtZj%2FXnuDeZ%2BDOWtjmS3e30CjMzX2ZGF72z8Ny%2F9UGRL65nRn95%2FbyigGV0KXsMxtrxUuczqMu6pSP7JcjGYokDTxaKVQkjP%2FOh%2BHSrYqjEPCNGjf0EJ9atQYnqyIzQGHrdZnkr5UfPYjpb0SKMtkrX%2BvqYKRaxJJiQTDhnjDb09EF6fFqK1Y4BWA7B7Z%2Fq5W5Dg4AukRKa%2BD7jrjhQNt4O8HSB2HUjVKyjWvppeIv7EXtfop6TfW90fe%2B0zcGKU%2FAgxOiJKH5K37iYHIfaufQ9WftcI0aoa5iONMuPaSOG0QrrVufmKBemXbY6MzXXeyg6a4af6duRNHeTuBBvsN2zBQmv5QNemfhrxcC%2B%2BJsPFXQRmQLqPpgHYXJj%2FmDD88u9vrnJjCBgBUHEp1wGdyRS0xQdzOa2p1%2F5bMdtxCck9h9K2W2igrqH59kqN0qnA3ro%2FPll4Xp1eDHzCrr76%2BBjqkATJ7nxNUz24luju%2BSINQPfA7OPQByhxBKYPqAK%2B%2BWVSQKzoSiwK2ABg0FiL87Pf6yIy%2FlfYFmih8JhPE99BoKyz2mA1p3Ms1DSjL3F0Jhv8dvwfe3WiiSlXmVdIljvlqTV0dbXUoW1QEhITqr7s8bd%2B4cNkAqHlcVFc3JwN12%2BqVnd5oN8p6%2Bt1EIC9g%2FimIqf0QSqnOI2DtLcWIWalmwo%2FHu3F4&X-Amz-Signature=bbdbe97f50909105ad9857c77d9049f1949ab438f112e98aade9a6072dd277ce&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LPMBK7L%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQC24gybyORatogxpkrA966tpzcETModOUTU%2Fd0Pg7fs0AIhAJ4ifrMeJMUu3HVF71x%2B3Wrjan3agjfhz1LBMR6R8ODVKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4hrrD8NVyL0XfCVEq3ANflLJADDmDpSWdUcJIa35KIVwLpJQEPQIZMK%2F55s1BdubUI557HwZi51FCI%2B4M55VRVBXezAcv9U5CD%2FtPrRw5CPGcRS2n4RW61IGvrY4HdanxHj8W5CnaF0zKXU3vmagGNyxYM0I1xb7214p1bOhq%2FngJabcWyiBfcuhD0%2BA%2BXCwPtZj%2FXnuDeZ%2BDOWtjmS3e30CjMzX2ZGF72z8Ny%2F9UGRL65nRn95%2FbyigGV0KXsMxtrxUuczqMu6pSP7JcjGYokDTxaKVQkjP%2FOh%2BHSrYqjEPCNGjf0EJ9atQYnqyIzQGHrdZnkr5UfPYjpb0SKMtkrX%2BvqYKRaxJJiQTDhnjDb09EF6fFqK1Y4BWA7B7Z%2Fq5W5Dg4AukRKa%2BD7jrjhQNt4O8HSB2HUjVKyjWvppeIv7EXtfop6TfW90fe%2B0zcGKU%2FAgxOiJKH5K37iYHIfaufQ9WftcI0aoa5iONMuPaSOG0QrrVufmKBemXbY6MzXXeyg6a4af6duRNHeTuBBvsN2zBQmv5QNemfhrxcC%2B%2BJsPFXQRmQLqPpgHYXJj%2FmDD88u9vrnJjCBgBUHEp1wGdyRS0xQdzOa2p1%2F5bMdtxCck9h9K2W2igrqH59kqN0qnA3ro%2FPll4Xp1eDHzCrr76%2BBjqkATJ7nxNUz24luju%2BSINQPfA7OPQByhxBKYPqAK%2B%2BWVSQKzoSiwK2ABg0FiL87Pf6yIy%2FlfYFmih8JhPE99BoKyz2mA1p3Ms1DSjL3F0Jhv8dvwfe3WiiSlXmVdIljvlqTV0dbXUoW1QEhITqr7s8bd%2B4cNkAqHlcVFc3JwN12%2BqVnd5oN8p6%2Bt1EIC9g%2FimIqf0QSqnOI2DtLcWIWalmwo%2FHu3F4&X-Amz-Signature=374f796ce2a82817c548bc295469e931fb12e365888d4444da40375db2200051&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
