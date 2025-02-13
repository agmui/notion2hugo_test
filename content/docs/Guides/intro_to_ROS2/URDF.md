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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZBCCWTJ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnVt6FPDFevxX8dN019%2FerVOoa3ZOgGJzhgZBSj9NRrAIhAOwPKKaYIoeTcohdI9yNhALyXwlts143wcDMRozjuwYsKv8DCB0QABoMNjM3NDIzMTgzODA1IgxuWtT%2BNa8XlKnXLWYq3ANPivLNv%2FAy1GLDOMXAnzZ49UzG08nzN5MAS70lpGq723Ot8hDy1E2Rgii%2BKXbTS4uHz0hmtupyQA59BHLkN%2Bro4MmolkVulrajUJGuM75l7Y6qy55Fkm%2FIi3jpxloYmQbDz1Yk24jMq9HixwUHgKvDB7IoZXwnVSgv8HZtfIZW7bcAYVuUDziGapCTL6tGdWC%2FEa6UJsAFa4Gd9ogkwvkICh8ZzPFw4o1oHnkvNh3gc0KJ2xuV9PNDrdOzPfEHFuNnQeFHUKXBMQXsUbzBuOhaM1HtqhFbksK%2FolP3%2Btx%2B7SJfME7%2FKX1pGD9tRjI4LMYXwtmnJQg8RArxCFrxtfZWb9VXcizKPo%2BqlgDfEzVdPSgXOZ%2FfpEt9SalrdUDnxGD6wTbTWd9XF9XCM3Z%2FJbaGscjJK0Ej%2BW2NyzvmW8fq5tG66D38n6Q2ctb9JjiKL2VqUE%2FLakRr0k9usQEY5wXVFCMLk3Cc0LNzjhDnhIjDGYKIV9msjIdualTuBmK1vGou1sl2IEAbaZ%2BNs5QZV9i52CUcpG4DQm7cS37sxxY279PzUjqLoAPt30ukLczEEltYC2AuDueMBETYpwXd3cVhsq6C0oFZoJYfgHX0rM3ZdzjO1pCCfRTxHpFojzD3rLm9BjqkAYI0JyVvBIKSaDNPLafyiNEseXoMZE30s3xigk%2Bi8fdjoK143vnvko%2BPcpXwodcNUF0bwM3LxiL6eyKzozJ%2BGo0xoJf6dXeTVCSxTJbw8lcwlGz1ynUGi16JeZ3aV6lVmNg9olZk%2FpM61%2FR8g8wF4JFdgN8J5r79YuuhbbS7Ce4r3Vnu0FtdiA8L6rY0ioBeNTSk%2Fv0ZJJbHHUd%2F8TvSHpWF7dFJ&X-Amz-Signature=df2ff41b97f4ea37c10d287465b71c5e1bed21704f9752cd0c6d851ea49d1fb9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZBCCWTJ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnVt6FPDFevxX8dN019%2FerVOoa3ZOgGJzhgZBSj9NRrAIhAOwPKKaYIoeTcohdI9yNhALyXwlts143wcDMRozjuwYsKv8DCB0QABoMNjM3NDIzMTgzODA1IgxuWtT%2BNa8XlKnXLWYq3ANPivLNv%2FAy1GLDOMXAnzZ49UzG08nzN5MAS70lpGq723Ot8hDy1E2Rgii%2BKXbTS4uHz0hmtupyQA59BHLkN%2Bro4MmolkVulrajUJGuM75l7Y6qy55Fkm%2FIi3jpxloYmQbDz1Yk24jMq9HixwUHgKvDB7IoZXwnVSgv8HZtfIZW7bcAYVuUDziGapCTL6tGdWC%2FEa6UJsAFa4Gd9ogkwvkICh8ZzPFw4o1oHnkvNh3gc0KJ2xuV9PNDrdOzPfEHFuNnQeFHUKXBMQXsUbzBuOhaM1HtqhFbksK%2FolP3%2Btx%2B7SJfME7%2FKX1pGD9tRjI4LMYXwtmnJQg8RArxCFrxtfZWb9VXcizKPo%2BqlgDfEzVdPSgXOZ%2FfpEt9SalrdUDnxGD6wTbTWd9XF9XCM3Z%2FJbaGscjJK0Ej%2BW2NyzvmW8fq5tG66D38n6Q2ctb9JjiKL2VqUE%2FLakRr0k9usQEY5wXVFCMLk3Cc0LNzjhDnhIjDGYKIV9msjIdualTuBmK1vGou1sl2IEAbaZ%2BNs5QZV9i52CUcpG4DQm7cS37sxxY279PzUjqLoAPt30ukLczEEltYC2AuDueMBETYpwXd3cVhsq6C0oFZoJYfgHX0rM3ZdzjO1pCCfRTxHpFojzD3rLm9BjqkAYI0JyVvBIKSaDNPLafyiNEseXoMZE30s3xigk%2Bi8fdjoK143vnvko%2BPcpXwodcNUF0bwM3LxiL6eyKzozJ%2BGo0xoJf6dXeTVCSxTJbw8lcwlGz1ynUGi16JeZ3aV6lVmNg9olZk%2FpM61%2FR8g8wF4JFdgN8J5r79YuuhbbS7Ce4r3Vnu0FtdiA8L6rY0ioBeNTSk%2Fv0ZJJbHHUd%2F8TvSHpWF7dFJ&X-Amz-Signature=eda63f014b4df8d414bdc576a53516a7f57d97668f5866db14cad7c79de5dc6e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
