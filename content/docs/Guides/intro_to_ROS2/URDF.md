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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X6RNI3O%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCICQtfkUoOgFbjtEZunvjUPylwAcKxP1NUUfya2WFe5JjAiBwTSN%2BMcV%2FdQyk%2FvaBTF7iYqwogmGV1xKnyL8I7m%2B0QSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu1JWmtpYVX3LDWLuKtwDgzvOPSc7k%2FJhGKgEuLTVcF45%2FwHJ2g4h6WUvDl%2Fl7lpABAu6q0khILhxQU2vpwOngzf9jaaGksQXNj9s9Pa1uD0W1yQ99eHo7%2FqV9P%2Fg7ta6l%2FO3r1%2FjjgvjMivEY6YubNcmvL45hE8BLk2kmbn7XXzmC6Ybdx703e3XjhYzHPD4HIziNGdasHdyeoSX6yQN0PZuQAQlyU0MamPpbusW7o%2FxldrsOsiIYMQqodTcoJVoyxdetuKPCtJ%2FJ7M2sFhdxDBQCZPueoKvmhHssj%2FGkMNLjlyfUBHcJUtrqSt6WEiCP2KJJ4azWPLEMt7PQBzfxBjbJQYwA8SRe3Ae%2BUzK0C12b3RHsmmKNFb%2BenrTQNsvrwMII4ky6YQHWc4k0aZ3ZEsc0MHXpFibMPZ22QRLpWxP5Hy%2Bu0fLPfwpugaAUSxWKThUZiMn6VmuY%2BoquwjoPw5aFULJyifII%2B0hUtmLW2mWrhEZdsaYm3WtgeEdBwuHbZzPisnfVM9hxFNaR8ze6XTyDRa0P%2BhYOA%2BrZ0obgnljT38tP7o0a%2BK4L0Cx0WIx8fQfkc9Rd3TEzPPttwMSTQ8mvSqVZOYrZr1XYDLegWJn6jfIZ29x3ZU5GI4Ou56loRk8XTSu7INBJLUwoLCFvgY6pgEkFW8Tn74uEDwEs0TZINjBepsulrF6XLod1q6FINHo7tESQzqTtcMR%2Bp9oMJXWd540wL%2Bz9cMTL103ddYqiapU2dlXxznefOmZ1Qo%2F2YMM8%2B0wkVzwAxLhdPuqsX%2FEM9j3jlCuIuGY7%2Fmt7tcMYOd8nDgy6zO8L9dNQoprlMaBMybqMjRiayxgSR1GMs8d%2FVLv3ypbJ13xTkGgWuFqGL88u82dKHNH&X-Amz-Signature=5ea2f3d51f37bf2e0beb2dd3c35b20723ca59d05a0aaf3f4c4c3682253f96006&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X6RNI3O%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCICQtfkUoOgFbjtEZunvjUPylwAcKxP1NUUfya2WFe5JjAiBwTSN%2BMcV%2FdQyk%2FvaBTF7iYqwogmGV1xKnyL8I7m%2B0QSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu1JWmtpYVX3LDWLuKtwDgzvOPSc7k%2FJhGKgEuLTVcF45%2FwHJ2g4h6WUvDl%2Fl7lpABAu6q0khILhxQU2vpwOngzf9jaaGksQXNj9s9Pa1uD0W1yQ99eHo7%2FqV9P%2Fg7ta6l%2FO3r1%2FjjgvjMivEY6YubNcmvL45hE8BLk2kmbn7XXzmC6Ybdx703e3XjhYzHPD4HIziNGdasHdyeoSX6yQN0PZuQAQlyU0MamPpbusW7o%2FxldrsOsiIYMQqodTcoJVoyxdetuKPCtJ%2FJ7M2sFhdxDBQCZPueoKvmhHssj%2FGkMNLjlyfUBHcJUtrqSt6WEiCP2KJJ4azWPLEMt7PQBzfxBjbJQYwA8SRe3Ae%2BUzK0C12b3RHsmmKNFb%2BenrTQNsvrwMII4ky6YQHWc4k0aZ3ZEsc0MHXpFibMPZ22QRLpWxP5Hy%2Bu0fLPfwpugaAUSxWKThUZiMn6VmuY%2BoquwjoPw5aFULJyifII%2B0hUtmLW2mWrhEZdsaYm3WtgeEdBwuHbZzPisnfVM9hxFNaR8ze6XTyDRa0P%2BhYOA%2BrZ0obgnljT38tP7o0a%2BK4L0Cx0WIx8fQfkc9Rd3TEzPPttwMSTQ8mvSqVZOYrZr1XYDLegWJn6jfIZ29x3ZU5GI4Ou56loRk8XTSu7INBJLUwoLCFvgY6pgEkFW8Tn74uEDwEs0TZINjBepsulrF6XLod1q6FINHo7tESQzqTtcMR%2Bp9oMJXWd540wL%2Bz9cMTL103ddYqiapU2dlXxznefOmZ1Qo%2F2YMM8%2B0wkVzwAxLhdPuqsX%2FEM9j3jlCuIuGY7%2Fmt7tcMYOd8nDgy6zO8L9dNQoprlMaBMybqMjRiayxgSR1GMs8d%2FVLv3ypbJ13xTkGgWuFqGL88u82dKHNH&X-Amz-Signature=beec954aacf7ed1f43524d82b434e1a7309fc825ac5253b25a857bca624928da&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
