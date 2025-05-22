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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU2R5J7E%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCTTAg6B%2FAHRjbW5prJsOGAuPZfGrV4Ztl4kzXK5GoMAgIgI1eOj20lXwWMoefcz73HiLlx9JHpsFFwtxGZdefkGeYqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHk41MRv1ayLLY9xYSrcA8WU%2FeT%2FyqWvUwT%2FJ4GWR%2FyQwujATMxkSI9oZwQjwRzDbYySTEwHKyEIDluIZ%2F6bukH%2FoH%2BtU5y6OlqtnUxh6XnfwBxiKcuTAyE%2BYFZqYRgzJ1ZKRbYSCk%2BBl2LKgLGCDWYSoBz2BraYvJZQIAVT28FYtyDxH3MI6y%2BMBeknbMWGb36maoJH4XZOp5S2XWUX4Vpa8D%2FmPx%2BXE7udvB8%2BBYjyZhH7mJOdrrvaCeTwijrh7eQAT3x6raVbVJERBcnZpjxzi%2FDtHByohjuYsj0BHEvJRfT80w9jEVQJePAKXDNl2xfAOXcJo3jK6yjruFP3ZKB3c1qWjzHEum6e5pbKdMqnl9ONvuioU%2FuelUry8ii78FJ3hf1ILr0tKeewP0bTdv9mZ0cABmzKyRBfCNIW%2FyIOUKe4O%2Fjac%2BoifdMeiioIrrnWHFQzk9SJj5FLcT8GkTuVw0oQljuDL925ckSZLTbAhTw364f3MlV1E8K9KapWrQ4IF%2BJuOttthJWGBJxRE76y8OBl2SKu7mJ9KFDscY%2FLoAD1OYbS1zkHYkTbZbAWIk11rexlV0BvwjQ%2B9u2V5QE2X7zoSwXFlKb4FR%2FKYij6cv%2BJ3nKmAT3ZHMusBUiBbfg5GvHVfI2gmkVCMISqvsEGOqUB9%2F32n7s9GmnhiU9f%2F%2BlflY%2B%2FFfPGw6%2BqgzZ5IzTDH95DPIe4PC4Afthcz9pTXimeXKgLYY5C7RXWKE8Ns3onFvT0Lgf1ZdW8Y1i1qRA%2Fj8XD8dZs%2BAtBI3XHWIFgP8Wm5qLYiHuZIpa0DhUH%2FDUXqNCeQFGrKfuXUHGPVaNDG%2BHTTHmt0DPRu9kBfwLFYW31Tvz87CYoGwKAMlySKAQ%2FWknVDlTK&X-Amz-Signature=d27d76b874ffaae8c1cfeefd447eb4d9bdd09ef4c0c8ed7dd88305a7f38190bc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU2R5J7E%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCTTAg6B%2FAHRjbW5prJsOGAuPZfGrV4Ztl4kzXK5GoMAgIgI1eOj20lXwWMoefcz73HiLlx9JHpsFFwtxGZdefkGeYqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHk41MRv1ayLLY9xYSrcA8WU%2FeT%2FyqWvUwT%2FJ4GWR%2FyQwujATMxkSI9oZwQjwRzDbYySTEwHKyEIDluIZ%2F6bukH%2FoH%2BtU5y6OlqtnUxh6XnfwBxiKcuTAyE%2BYFZqYRgzJ1ZKRbYSCk%2BBl2LKgLGCDWYSoBz2BraYvJZQIAVT28FYtyDxH3MI6y%2BMBeknbMWGb36maoJH4XZOp5S2XWUX4Vpa8D%2FmPx%2BXE7udvB8%2BBYjyZhH7mJOdrrvaCeTwijrh7eQAT3x6raVbVJERBcnZpjxzi%2FDtHByohjuYsj0BHEvJRfT80w9jEVQJePAKXDNl2xfAOXcJo3jK6yjruFP3ZKB3c1qWjzHEum6e5pbKdMqnl9ONvuioU%2FuelUry8ii78FJ3hf1ILr0tKeewP0bTdv9mZ0cABmzKyRBfCNIW%2FyIOUKe4O%2Fjac%2BoifdMeiioIrrnWHFQzk9SJj5FLcT8GkTuVw0oQljuDL925ckSZLTbAhTw364f3MlV1E8K9KapWrQ4IF%2BJuOttthJWGBJxRE76y8OBl2SKu7mJ9KFDscY%2FLoAD1OYbS1zkHYkTbZbAWIk11rexlV0BvwjQ%2B9u2V5QE2X7zoSwXFlKb4FR%2FKYij6cv%2BJ3nKmAT3ZHMusBUiBbfg5GvHVfI2gmkVCMISqvsEGOqUB9%2F32n7s9GmnhiU9f%2F%2BlflY%2B%2FFfPGw6%2BqgzZ5IzTDH95DPIe4PC4Afthcz9pTXimeXKgLYY5C7RXWKE8Ns3onFvT0Lgf1ZdW8Y1i1qRA%2Fj8XD8dZs%2BAtBI3XHWIFgP8Wm5qLYiHuZIpa0DhUH%2FDUXqNCeQFGrKfuXUHGPVaNDG%2BHTTHmt0DPRu9kBfwLFYW31Tvz87CYoGwKAMlySKAQ%2FWknVDlTK&X-Amz-Signature=a966751e47114f0ec683a548016417dff7d8a706c896b56b8803e2f7215aab89&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
