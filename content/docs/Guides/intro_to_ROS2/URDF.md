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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7YUXQ4U%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCYT03JKyCCVXr8FkxpZ5rDAPzXTZ%2FJSb4ZDzZ7VSzGNgIge%2FDw%2BjY6Q4evQ9x4rj%2B8uudLgNbR%2BbnTjogeeTRL4HsqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP668eoKmIwc%2BHtp0ircAxkuDY9fpxuIzchvryoFTFtUNv7lR8Yga%2B%2BvGeGavl5f4ieMKR1Xd3O9eueXIGg7e25jK32JZ7wRUeFgo20PUN9t%2FpAv4JXWdZc%2BYNt2OFZC881H%2FkcBWA9TQG2A3%2BCIW%2F3%2BfNKXof6coynKMeFqqIkB4uJEiuJ2nYvkg%2FDnOwv5dnHXI3%2FiuZhEw7nIGSBHgO006t%2FOyZU5Qb5IOFTI7dX9EjTPYSdta3FYU%2Fu0vdG5qxG42gutdrDAsJkKRX32QbqAQ0jv3G1FM06bqnXhSE0Nns4ANwYkhlhBxXxDpJsC%2FqYn1x1hrvnjz%2FOnGWgAIdt60H%2BR7%2BQ4aeu%2FvGrbvaFw5D1hPJLkYAwkYkq3ETuNzW%2Fk3truJ8a9eXuMgFGYrYLGMs9MLmex404AjeG%2BhsO927MaBkafAMPddXqoaO7Yf8QsQqOLwvsnuFjj7zPmQVOH%2FvFDS91ZcxHGGoPEPBwf5A4Py9ZGmAGV3p7Oz2CC0Wb1ntiqEsX6m393RqGVJuxyXRNJRxjFw5E%2FCkY1FlktVudYp8nNTYG10yWxGAEwkHfjCgh65NARvJRF5voTTHpvAepV9UFa1lTqulFPN9PVsPcV11ypp2z1xlfqveqPZ0J5n%2FBq2BiyuzVyMKXV7L8GOqUBFD5edfPdQoqJ3gvIxyXUZUcK5rD41N1MIWdAFX4hR0T7ECm663RAQken0NhnAI9aSE7KzUqTf6w1dHbxx9Mh4N4HQetQPEqng18afP6VJRKUIR6Jef9Okv%2FY6H7o1kAirciW5ehQi41WYYiyuL7qHtYrE%2FphhCJjlzsKVjQKuggC8t8gdjnmXD6ph7oqD1oFnJchOaQ2Mb6vdXlWvNo6%2FG0a2%2BH4&X-Amz-Signature=8c4bfcc15a7149380f3ae05b1ed650d44e82602ec901a181724a00925364fda4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7YUXQ4U%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCYT03JKyCCVXr8FkxpZ5rDAPzXTZ%2FJSb4ZDzZ7VSzGNgIge%2FDw%2BjY6Q4evQ9x4rj%2B8uudLgNbR%2BbnTjogeeTRL4HsqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP668eoKmIwc%2BHtp0ircAxkuDY9fpxuIzchvryoFTFtUNv7lR8Yga%2B%2BvGeGavl5f4ieMKR1Xd3O9eueXIGg7e25jK32JZ7wRUeFgo20PUN9t%2FpAv4JXWdZc%2BYNt2OFZC881H%2FkcBWA9TQG2A3%2BCIW%2F3%2BfNKXof6coynKMeFqqIkB4uJEiuJ2nYvkg%2FDnOwv5dnHXI3%2FiuZhEw7nIGSBHgO006t%2FOyZU5Qb5IOFTI7dX9EjTPYSdta3FYU%2Fu0vdG5qxG42gutdrDAsJkKRX32QbqAQ0jv3G1FM06bqnXhSE0Nns4ANwYkhlhBxXxDpJsC%2FqYn1x1hrvnjz%2FOnGWgAIdt60H%2BR7%2BQ4aeu%2FvGrbvaFw5D1hPJLkYAwkYkq3ETuNzW%2Fk3truJ8a9eXuMgFGYrYLGMs9MLmex404AjeG%2BhsO927MaBkafAMPddXqoaO7Yf8QsQqOLwvsnuFjj7zPmQVOH%2FvFDS91ZcxHGGoPEPBwf5A4Py9ZGmAGV3p7Oz2CC0Wb1ntiqEsX6m393RqGVJuxyXRNJRxjFw5E%2FCkY1FlktVudYp8nNTYG10yWxGAEwkHfjCgh65NARvJRF5voTTHpvAepV9UFa1lTqulFPN9PVsPcV11ypp2z1xlfqveqPZ0J5n%2FBq2BiyuzVyMKXV7L8GOqUBFD5edfPdQoqJ3gvIxyXUZUcK5rD41N1MIWdAFX4hR0T7ECm663RAQken0NhnAI9aSE7KzUqTf6w1dHbxx9Mh4N4HQetQPEqng18afP6VJRKUIR6Jef9Okv%2FY6H7o1kAirciW5ehQi41WYYiyuL7qHtYrE%2FphhCJjlzsKVjQKuggC8t8gdjnmXD6ph7oqD1oFnJchOaQ2Mb6vdXlWvNo6%2FG0a2%2BH4&X-Amz-Signature=7e0b130177248aa80717a81b19dc8e61e4c6fd12d5c1fc85a14c8925d65191c7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
