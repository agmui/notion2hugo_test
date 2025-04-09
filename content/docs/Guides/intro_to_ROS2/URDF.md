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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPRYV5OI%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQD8xHprGjIQfJoGi484QhURNnxVuD81Ky4LrGflFdlXxQIhAMexe6Nygm7w1NeH6a5Mayp0mW5tYxPGrQFF3uz1QHp2KogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGlaqxmXXsGfd%2Fpfwq3ANnG9IPUZ7ScRctZYDC8dHL%2B3b0Chj1mOoouH32D2z1sjTfXId6LDhThkc%2BBTnBqw5jyqZKEieHCIjz%2Fk8U0XcqO73ifzL5ZWwFrKiXeFvACE4zAnf9M8EZIHCDpOlbBWuAnmZO%2FlqTeeN9bVWdUFKVPk1VR7xoFg2PDuM44JRFzLXSAUB%2BKXOTOwzQgVNVITdh05aujebfBDAcsOMfShD7xfFSlNzltbAEenbDjwNWd8mN7DiEUXoR0Gsh2KcpXuXVygMjVVfIwGf4PvSqeQjYv%2Fg6yPzuWbhGBaNGuXJnz3lmIkzoCYReBn5ZJzG4SRUiULNbHaxVWA3uSei0PjBA%2FyPeLlQ%2FZ5e06AxTnXuMHxrLLR9tWu4U51xvP7gRhBjF6hLQ4lx0A2zeYYsFv64n6tNNPUMwzsDZX2Uq%2BF7cdywIjmQCVNs4fViNZpe48keF7csYKcsjsE2oCmMWZ9mVTJp1KXABNTHKTUmyx2cJCQ2Ov2YNJno4XOq%2BEjY%2FvPiqidlaMKoENkvGV29685Yif%2Bx32dHQefOwkeBgiDBrqHtH8pNJV6SfyZeEV3qER%2BDJJjWoikO4I4Os%2BZ6Z56Wphz38OuS%2F%2FLhjhknHYroraa%2BkVXwSDGFP5%2FhlNTDTldu%2FBjqkAUn7yGRNAeOQttXGz%2FW2GPYesQ7gmzXQax5JOk%2FGiMjVqz2Ex3xMdHKq92AsctRuEzMUS4enw279jcvvSPTMecUCDU08dsv9MR%2Bf3TUF1sZKJyRPrf0Q1pGIMA0bVrlQf6KRM29onMx47uWKzpcP5aEXFeAxi3HMAO5I%2F8CqX18UUD0etHEMhms5LSvbSMBb8%2FVZ5r420WUxqps56ZradpsXpJTg&X-Amz-Signature=5e70d932f29ae72faa4a610975007381814728b5c58f954160a75af97985d49f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPRYV5OI%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQD8xHprGjIQfJoGi484QhURNnxVuD81Ky4LrGflFdlXxQIhAMexe6Nygm7w1NeH6a5Mayp0mW5tYxPGrQFF3uz1QHp2KogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGlaqxmXXsGfd%2Fpfwq3ANnG9IPUZ7ScRctZYDC8dHL%2B3b0Chj1mOoouH32D2z1sjTfXId6LDhThkc%2BBTnBqw5jyqZKEieHCIjz%2Fk8U0XcqO73ifzL5ZWwFrKiXeFvACE4zAnf9M8EZIHCDpOlbBWuAnmZO%2FlqTeeN9bVWdUFKVPk1VR7xoFg2PDuM44JRFzLXSAUB%2BKXOTOwzQgVNVITdh05aujebfBDAcsOMfShD7xfFSlNzltbAEenbDjwNWd8mN7DiEUXoR0Gsh2KcpXuXVygMjVVfIwGf4PvSqeQjYv%2Fg6yPzuWbhGBaNGuXJnz3lmIkzoCYReBn5ZJzG4SRUiULNbHaxVWA3uSei0PjBA%2FyPeLlQ%2FZ5e06AxTnXuMHxrLLR9tWu4U51xvP7gRhBjF6hLQ4lx0A2zeYYsFv64n6tNNPUMwzsDZX2Uq%2BF7cdywIjmQCVNs4fViNZpe48keF7csYKcsjsE2oCmMWZ9mVTJp1KXABNTHKTUmyx2cJCQ2Ov2YNJno4XOq%2BEjY%2FvPiqidlaMKoENkvGV29685Yif%2Bx32dHQefOwkeBgiDBrqHtH8pNJV6SfyZeEV3qER%2BDJJjWoikO4I4Os%2BZ6Z56Wphz38OuS%2F%2FLhjhknHYroraa%2BkVXwSDGFP5%2FhlNTDTldu%2FBjqkAUn7yGRNAeOQttXGz%2FW2GPYesQ7gmzXQax5JOk%2FGiMjVqz2Ex3xMdHKq92AsctRuEzMUS4enw279jcvvSPTMecUCDU08dsv9MR%2Bf3TUF1sZKJyRPrf0Q1pGIMA0bVrlQf6KRM29onMx47uWKzpcP5aEXFeAxi3HMAO5I%2F8CqX18UUD0etHEMhms5LSvbSMBb8%2FVZ5r420WUxqps56ZradpsXpJTg&X-Amz-Signature=eae4719634ad5638c00bc906a62af2533af423774e953824343bfcec90c04b02&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
