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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OD222NN%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQChArxiADE88%2B%2Fe9WNjn4BMfjVOGk61CpR67NDHMnljSQIhAPlS9PevMYLHrcR3HL7gJ%2FNZMtmuCI14lnkzGfFzGQ%2FQKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwenm8kikVp4%2BePLuQq3ANYkLJr308yGVhlrLl0ptgUJvTIB%2FrZmD9%2FAzlXhhxDXUHxgdu2IFZ9JvtawcJ5wsxGNLKbv9FLgHdBnHxF2bauWdZ6%2F149oINmMUFA2e3IySTWfiA6bSFgYg%2FP9R2gGr4fq49k174BKDXO2bc2uF6k9sk065nvf4riEPrhfpKpVz05Dhdcl8JeEHVORewR1Glse21z9QDSb0lwVejKtbYbv9re8G7gtSjKBOIlnCUFiMAp4lJEsJFz8bR%2FWA8Uf%2BWUAyzswgTJjZE%2BJIa3fAqDU7kUkQg99L9NkHjeTRFkdWth%2Fa8rBwZqu7V68HWHHNcKLnBKBa9ZpW0sFQmh3XvHMoOOskOsOfJ9ppsrIv6LYVmCIo4XbBScmgd967zh3yNimIZeelp%2F7vqfj1PTXaE%2FlZZ7Lc1JwBONguannlj8AHtIvqkntzC9VQuD9OxSqbl5LDZVSSnxZ1Apj1oNh7lZHu3GCLsAsFLXDHPgpYWx9Oq58EiWywbVmYtjp6VQjd4jianNb%2B%2B6JT0bNZiJ%2FEcdwA%2B47kqu8g04sy0Q4pgBza6bUH8FYLtsCoezuY485d4qSs7tuFdc%2FUqODj1sXTPNDyXiCs3koP6hSd%2FQF6XY3u79mhZ6%2ByPr%2BZ04mjD4kKzCBjqkAbaufo9%2FxS%2FEqkqcBYCdVSzTOEmRsVgs8rECVu7yG1cMLdCYo4tt4l6pZWGUssckVQDOHkaAQZuW4C9wNGNT3LQEzEZMDnHt6a4kyLb4DDwC4iLjNNxCdE0WLH%2FHh3iBg06KjrfuuZEYHqlZtgfeEbjNRUm506fAT0q42Y6%2BpfQGEIRQwfaUOmdjgMyz0Dz2bcYxi%2BwOD09fNYTV4mI%2FIKbmCLiX&X-Amz-Signature=2e8b7176d0abaee15d4c9bed85310ca0e5c8c75eb0fad0d5cf4321a2fd387684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OD222NN%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQChArxiADE88%2B%2Fe9WNjn4BMfjVOGk61CpR67NDHMnljSQIhAPlS9PevMYLHrcR3HL7gJ%2FNZMtmuCI14lnkzGfFzGQ%2FQKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwenm8kikVp4%2BePLuQq3ANYkLJr308yGVhlrLl0ptgUJvTIB%2FrZmD9%2FAzlXhhxDXUHxgdu2IFZ9JvtawcJ5wsxGNLKbv9FLgHdBnHxF2bauWdZ6%2F149oINmMUFA2e3IySTWfiA6bSFgYg%2FP9R2gGr4fq49k174BKDXO2bc2uF6k9sk065nvf4riEPrhfpKpVz05Dhdcl8JeEHVORewR1Glse21z9QDSb0lwVejKtbYbv9re8G7gtSjKBOIlnCUFiMAp4lJEsJFz8bR%2FWA8Uf%2BWUAyzswgTJjZE%2BJIa3fAqDU7kUkQg99L9NkHjeTRFkdWth%2Fa8rBwZqu7V68HWHHNcKLnBKBa9ZpW0sFQmh3XvHMoOOskOsOfJ9ppsrIv6LYVmCIo4XbBScmgd967zh3yNimIZeelp%2F7vqfj1PTXaE%2FlZZ7Lc1JwBONguannlj8AHtIvqkntzC9VQuD9OxSqbl5LDZVSSnxZ1Apj1oNh7lZHu3GCLsAsFLXDHPgpYWx9Oq58EiWywbVmYtjp6VQjd4jianNb%2B%2B6JT0bNZiJ%2FEcdwA%2B47kqu8g04sy0Q4pgBza6bUH8FYLtsCoezuY485d4qSs7tuFdc%2FUqODj1sXTPNDyXiCs3koP6hSd%2FQF6XY3u79mhZ6%2ByPr%2BZ04mjD4kKzCBjqkAbaufo9%2FxS%2FEqkqcBYCdVSzTOEmRsVgs8rECVu7yG1cMLdCYo4tt4l6pZWGUssckVQDOHkaAQZuW4C9wNGNT3LQEzEZMDnHt6a4kyLb4DDwC4iLjNNxCdE0WLH%2FHh3iBg06KjrfuuZEYHqlZtgfeEbjNRUm506fAT0q42Y6%2BpfQGEIRQwfaUOmdjgMyz0Dz2bcYxi%2BwOD09fNYTV4mI%2FIKbmCLiX&X-Amz-Signature=7e7e8c67afad2cc0b8f8905590a28008d606c1953736d7aae7bcc59d630947c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
