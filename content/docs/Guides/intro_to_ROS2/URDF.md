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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFTL54CS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGG4qIZNtV3Zrgfu5l2mVRO8hnDiQP2TgYGCvXqeGXurAiEA9tNTxRgtsPJJZ1lb9CkXDv%2F2LSKDNnR5E%2Bg%2BiAwKOY8qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHG%2FWUX4GPgTcJLTCrcA9BQqiS2KQ76apw57i2kreFdrARgDgz4TnLkbClVFb%2FV2JFIWIolDW4LtC7yhYt8vNdWmZa7fvZZ5exDghUow55lQ1kCT4DQ%2Fnh65VncaUiJx2uNsqwTpVnDo1Hq4L%2FgZxqESexj0JCTjAhFDXWutAfi%2BNIKhErqgfG2iHgVmaOYK1cXyWc1UKPzdftFRacW0%2FdgRWN%2FkTRrJQ5J0SI85Mq8weMjgp14fLsmV9ssSzL2s3GuS1DZBjqltZRsqrePeFNpBQpso8yk8bT5KUcQzJpxC7K3ggPuOa6Bc0nUEkkcSv%2FB97mC75Sdw9R%2Fh%2BnQ7Tf0clQzXUhwtBhYJOU0OQu5sgVLWhwcZCUrR0DAWm7pAYuq75PbzztltfVbfxb%2F1fQhVm%2Fl6W%2Fx46QuxVYzi%2Fdy4KJYiRnLDcYwDWr5C78pitWMW7Cx%2FBcwPcTOR1NxtVCA%2Fz7dI1InB8h5sAoFojZ7W52LOQ5t8AXwtVZKgpZHqGEYQCeg2x3SDWbxOslyujQm9o33Mxo%2FKlOjU%2BOexlanIUmysHf89gwSM5NI9%2FODwpTjHNTc%2Bp7cPxjm3c1VIwzqOcMYqLovsgmImd2oTAYvdW4OAQsUui7tHOrVqI3XWm2LZ5nJA6aBL8z%2FMKfZy74GOqUBZeoYmGa2DQqi3aPAJyLh4HEc7TmBsd8W%2F07c%2FqmUDrANg3%2BZUznGU1AeJEEiVm4x2bQk0lJJJBI3r9XLEcUkSymoXQlI4lhPk%2BN4Np5fspr1AfzJ8DfD7iKLpq8kv9nNHn5WV08w4KNWNlhO3HLXwKG1MV8pLT7vVKgW7QjYXzOjI6sSPUzMuCHDOjws9KIcME1zaeY5HziHRhTXJQIF77wLRwIX&X-Amz-Signature=17e25e8a259a7090ff2867a785c071f383f6e9891bda752bbff8cf097d5d2cc9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFTL54CS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGG4qIZNtV3Zrgfu5l2mVRO8hnDiQP2TgYGCvXqeGXurAiEA9tNTxRgtsPJJZ1lb9CkXDv%2F2LSKDNnR5E%2Bg%2BiAwKOY8qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHG%2FWUX4GPgTcJLTCrcA9BQqiS2KQ76apw57i2kreFdrARgDgz4TnLkbClVFb%2FV2JFIWIolDW4LtC7yhYt8vNdWmZa7fvZZ5exDghUow55lQ1kCT4DQ%2Fnh65VncaUiJx2uNsqwTpVnDo1Hq4L%2FgZxqESexj0JCTjAhFDXWutAfi%2BNIKhErqgfG2iHgVmaOYK1cXyWc1UKPzdftFRacW0%2FdgRWN%2FkTRrJQ5J0SI85Mq8weMjgp14fLsmV9ssSzL2s3GuS1DZBjqltZRsqrePeFNpBQpso8yk8bT5KUcQzJpxC7K3ggPuOa6Bc0nUEkkcSv%2FB97mC75Sdw9R%2Fh%2BnQ7Tf0clQzXUhwtBhYJOU0OQu5sgVLWhwcZCUrR0DAWm7pAYuq75PbzztltfVbfxb%2F1fQhVm%2Fl6W%2Fx46QuxVYzi%2Fdy4KJYiRnLDcYwDWr5C78pitWMW7Cx%2FBcwPcTOR1NxtVCA%2Fz7dI1InB8h5sAoFojZ7W52LOQ5t8AXwtVZKgpZHqGEYQCeg2x3SDWbxOslyujQm9o33Mxo%2FKlOjU%2BOexlanIUmysHf89gwSM5NI9%2FODwpTjHNTc%2Bp7cPxjm3c1VIwzqOcMYqLovsgmImd2oTAYvdW4OAQsUui7tHOrVqI3XWm2LZ5nJA6aBL8z%2FMKfZy74GOqUBZeoYmGa2DQqi3aPAJyLh4HEc7TmBsd8W%2F07c%2FqmUDrANg3%2BZUznGU1AeJEEiVm4x2bQk0lJJJBI3r9XLEcUkSymoXQlI4lhPk%2BN4Np5fspr1AfzJ8DfD7iKLpq8kv9nNHn5WV08w4KNWNlhO3HLXwKG1MV8pLT7vVKgW7QjYXzOjI6sSPUzMuCHDOjws9KIcME1zaeY5HziHRhTXJQIF77wLRwIX&X-Amz-Signature=946e9605b9663443ac5e9ef4aea56419cef1b8bae7b1bd6f0d15d4e4d3752d28&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
