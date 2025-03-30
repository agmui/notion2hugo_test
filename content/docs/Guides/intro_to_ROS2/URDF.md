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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMPFIQ7V%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQC2lgFsWsA4j1sizw0DDQ%2FSY%2BjuM5Mlkl0JuRLAAg4JDgIhAIrK5yBBIxBeDYqSQYQiEklj1npi7V4sVFSQ0mtnGWGZKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFWFgL1%2BFKeTii84oq3APf2fIvKz9x%2BH5W2X5Aw5hHY%2FHA3VOfhjvXFr6VSrZGL44VIX%2BXxizq0RbJFpBAIYXO9ZHz8NPdROQCxngRLJ0sbvbVj1l1xYopm5KcJhCjhTKX8TLpa5bvymRmwR5jXDY4oygxPYFyJVVgxmf97Lz0TGb199CTqUgvJSP%2Bn8CQ0MMH7G2zQx2NJ2CDScnoQ6z1uR8NnAwIuCjZmxaTVtfl5GCafHNnXRYe5vB8kjO6yZjvSvkiY0mUB%2BXpN3fd8uH%2FXb3g%2FpZw6f4ozZI7iOASRBEH6tZl7xGVjgPDB%2F0qTk5M0qfnXnalHWYDRjJtYuM9658vj4BOEh3rFSfzlwlj1zi%2FNtAgOmixK%2B%2FNb8oafwO2zQyqR6mX6ZkGm%2BWel0IbunHuVCqlgMVcrk4Ji1OIyAPc3FcNZ0adzBLY8AnHz1IXSatrkbDcoBKPP%2Fr%2Bh1%2BuqTv4v0QBGanjjHhiqPb%2BXZt6bQORzIH%2Bkdorj1K4Kf5u%2Be7qUgPYoDvHg%2B9rd29daQLnsWIuB4tSsQuIwxirX0PwV%2BzX7DKtPLjwRrE6XxK8sKA6ZM4ShfHk5lFWbCv9PdL9TtgGFoCrjThMFkM7tYUSbiSHDqVgWapzp68EC%2FEfWpwcrAKe%2FCMAijD%2Bmqa%2FBjqkAX2AGbjkQZCZ%2Fbq9khWc0G5iAEA4fAAuNfqzsJzUbxLZv5Kg9j6YgaDGvSXdhozjqdEhbTxXYY8xAEXtpkFYowSImVx9DhU3yiFSrNr99rnYeNVWMAhyPYw%2F34VjS%2BRJMBOU5NCVdDQ%2B6GO4%2F3i0A2rsBzbYe4AkDfnhh8UPwA0fI0dKg21ebtd%2BT9nGD8buJTozZmm60b%2FmsNjc0vwrcLrwgvVf&X-Amz-Signature=e98c8831919e1f44508f1aef722f193eab8427ed912fd0c40d66a80cdb0ba7db&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMPFIQ7V%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQC2lgFsWsA4j1sizw0DDQ%2FSY%2BjuM5Mlkl0JuRLAAg4JDgIhAIrK5yBBIxBeDYqSQYQiEklj1npi7V4sVFSQ0mtnGWGZKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFWFgL1%2BFKeTii84oq3APf2fIvKz9x%2BH5W2X5Aw5hHY%2FHA3VOfhjvXFr6VSrZGL44VIX%2BXxizq0RbJFpBAIYXO9ZHz8NPdROQCxngRLJ0sbvbVj1l1xYopm5KcJhCjhTKX8TLpa5bvymRmwR5jXDY4oygxPYFyJVVgxmf97Lz0TGb199CTqUgvJSP%2Bn8CQ0MMH7G2zQx2NJ2CDScnoQ6z1uR8NnAwIuCjZmxaTVtfl5GCafHNnXRYe5vB8kjO6yZjvSvkiY0mUB%2BXpN3fd8uH%2FXb3g%2FpZw6f4ozZI7iOASRBEH6tZl7xGVjgPDB%2F0qTk5M0qfnXnalHWYDRjJtYuM9658vj4BOEh3rFSfzlwlj1zi%2FNtAgOmixK%2B%2FNb8oafwO2zQyqR6mX6ZkGm%2BWel0IbunHuVCqlgMVcrk4Ji1OIyAPc3FcNZ0adzBLY8AnHz1IXSatrkbDcoBKPP%2Fr%2Bh1%2BuqTv4v0QBGanjjHhiqPb%2BXZt6bQORzIH%2Bkdorj1K4Kf5u%2Be7qUgPYoDvHg%2B9rd29daQLnsWIuB4tSsQuIwxirX0PwV%2BzX7DKtPLjwRrE6XxK8sKA6ZM4ShfHk5lFWbCv9PdL9TtgGFoCrjThMFkM7tYUSbiSHDqVgWapzp68EC%2FEfWpwcrAKe%2FCMAijD%2Bmqa%2FBjqkAX2AGbjkQZCZ%2Fbq9khWc0G5iAEA4fAAuNfqzsJzUbxLZv5Kg9j6YgaDGvSXdhozjqdEhbTxXYY8xAEXtpkFYowSImVx9DhU3yiFSrNr99rnYeNVWMAhyPYw%2F34VjS%2BRJMBOU5NCVdDQ%2B6GO4%2F3i0A2rsBzbYe4AkDfnhh8UPwA0fI0dKg21ebtd%2BT9nGD8buJTozZmm60b%2FmsNjc0vwrcLrwgvVf&X-Amz-Signature=a344e1eec4904613619636f889e43b2e75e697fa0cb8dbce01c2999e9f6deb7c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
