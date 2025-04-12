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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G73VIKP%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCma2O5Hs6VaxzIoVb29GmomccjfUXizzBwwNpjxw29qwIhAJYKVhpfBWIFGXd5SfD%2FFnHeqZLKd%2BvHEaaU6kNZ%2FgzpKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymI6HB6pfC5LrJPLQq3AOSt%2BUBzZ0Ql8mXxbV0G5gURuSKx8WMcepgpYpI5xlz6iqgg76IyHzTsCq6QdQgKEpCGj5qB9eOp10EGNI737e1akcLYx82QMV6ZYGWYS4GjbLVT0UGB9nktSTK2YjCP2xa3N4op7NKj%2BKrZwOTj%2B5P9MxWocg8OwEyf%2BlUaCNCW5A8thOxrStj9q63SNAmXSnuQFF2rQnkkh7FroBZTWCDjf4tVeDZycTJMDSD7fvJWoO1QtvhqPMi6K6U5Jt0v%2BOXpPg2W2c6a6LvkLWSFE8YDvj8%2FQfPs9FRvv8m1Eln5q0%2F1%2B6TFey9FNIwUCnLeMNdO2CFVELmyYffJoTBmxSbJ7u5c2r%2B0%2B9t3sOEs8bgDdVw7yCFaDnyxKGA6X7VN1aOoVb9zaKFhxNuwNHg9ckwu0vXh1uar9Mymek4ZDH9sQOMhrW2eTdNPdXvZSkB8OuOy2VdkpbG78d5DojanJIOHOsz9ETC1%2Fv5WZQpYUHHNAmV3H9A1Ma%2FeJmU0OrS%2Bt6bKWW%2Bx5EHrZR3tZlRra%2BfS%2Bt%2BLww%2FZJ3H%2F7MFcF%2BhBGt1QAmY3v3klpUmOovfB7VpHd9xTmqrQXcE0djRIhVOqhxbr0dKfSYcJpeD346%2Bi%2F6nI9hcUhecCIhgEzCJ1Oe%2FBjqkATe5sq4gyxIQ3XvQrbQk97Ywj%2BHZk226NQ1gZT8vighmjG4QjXZZiiOPpZq4KC07IuMX%2FkBM6ls3dUnN511N%2BHjMRDAo6yzoN7HZFBoA9kniPNJx1WU%2BppAvCOot6wgifJAK4bVPRK9R9XYCt1U1Yo2q7cDCKeDP%2BCImFEbWqIplRjJxLR5lH8WYgF7R7cuF2TZ2iuUCxoGP%2FHiBTkUN3KEjQktX&X-Amz-Signature=df77084242a19775cc102c2c58d56effab7bc8880638ca17e2f38e65e78d4b67&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G73VIKP%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCma2O5Hs6VaxzIoVb29GmomccjfUXizzBwwNpjxw29qwIhAJYKVhpfBWIFGXd5SfD%2FFnHeqZLKd%2BvHEaaU6kNZ%2FgzpKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymI6HB6pfC5LrJPLQq3AOSt%2BUBzZ0Ql8mXxbV0G5gURuSKx8WMcepgpYpI5xlz6iqgg76IyHzTsCq6QdQgKEpCGj5qB9eOp10EGNI737e1akcLYx82QMV6ZYGWYS4GjbLVT0UGB9nktSTK2YjCP2xa3N4op7NKj%2BKrZwOTj%2B5P9MxWocg8OwEyf%2BlUaCNCW5A8thOxrStj9q63SNAmXSnuQFF2rQnkkh7FroBZTWCDjf4tVeDZycTJMDSD7fvJWoO1QtvhqPMi6K6U5Jt0v%2BOXpPg2W2c6a6LvkLWSFE8YDvj8%2FQfPs9FRvv8m1Eln5q0%2F1%2B6TFey9FNIwUCnLeMNdO2CFVELmyYffJoTBmxSbJ7u5c2r%2B0%2B9t3sOEs8bgDdVw7yCFaDnyxKGA6X7VN1aOoVb9zaKFhxNuwNHg9ckwu0vXh1uar9Mymek4ZDH9sQOMhrW2eTdNPdXvZSkB8OuOy2VdkpbG78d5DojanJIOHOsz9ETC1%2Fv5WZQpYUHHNAmV3H9A1Ma%2FeJmU0OrS%2Bt6bKWW%2Bx5EHrZR3tZlRra%2BfS%2Bt%2BLww%2FZJ3H%2F7MFcF%2BhBGt1QAmY3v3klpUmOovfB7VpHd9xTmqrQXcE0djRIhVOqhxbr0dKfSYcJpeD346%2Bi%2F6nI9hcUhecCIhgEzCJ1Oe%2FBjqkATe5sq4gyxIQ3XvQrbQk97Ywj%2BHZk226NQ1gZT8vighmjG4QjXZZiiOPpZq4KC07IuMX%2FkBM6ls3dUnN511N%2BHjMRDAo6yzoN7HZFBoA9kniPNJx1WU%2BppAvCOot6wgifJAK4bVPRK9R9XYCt1U1Yo2q7cDCKeDP%2BCImFEbWqIplRjJxLR5lH8WYgF7R7cuF2TZ2iuUCxoGP%2FHiBTkUN3KEjQktX&X-Amz-Signature=d4edca99278842b2c0855b122bcbef7a58b0c27cc656c4577e0fcdcab2dd0bd0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
