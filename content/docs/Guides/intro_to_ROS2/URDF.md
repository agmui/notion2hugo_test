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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJRBSQFJ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T061430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIBPEYPivghqHfO6IKoGJ4TxxSsotfSj6gN0lIatHanaUAiBGu9JGPfxq3RKRgba%2FLLnWSjFc7PeKvqLhyRtjoMKnRyr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMZHxuSLjgNv22jb0kKtwDlZu7bea0%2BusvzKJBg4inUGnhVBz7gqNlFZq6KkRHT8wFDcD9NJ8IKF9XoNKgQIohXdmg8GeDDzoKbZc9HUCxGY%2FkjK8W%2Bu8YMGiSx0p46X8NUS7jn0r8v2qp6qNGnpCa00JwFmpkh7oNIPV4Xv917E0LkPE44R%2B56aWdqSfCECZmE4IBtEyYX4RUYw2gFxMxH66lNyym5%2FD5zU0%2BJDCbleVvlrAIETjlpXg1Vplda92HERGR7Jwby2s5XAq68ZIUeoyvUUBKk7XgVumyYFRz0SWPs85UrhohqJoRMiVTFf%2FQdPfuylcgfKvnj0%2FWCubXu%2BcSIT4bYF3STxfuGZR0yQJxDww0SLZxQ0qPcW0jIEgwCqqi6thPGdJxznHNHAGU%2BC9WeI0OXinC%2BNAul%2Bg%2BOssTvE4kREWSnRoGPOjrXVt7s9oLzjJAWJ6H3mmy7%2FHpfyNMhR9RA2LitF%2F6y%2B9FSgoiD1NYXghhvUFhxNwQM9Hfq7UM6Mls%2Bhi2K%2Fpv6JF5IguiECX0XAxtzifvaJrgEIykypIvGCRs6rvBSj%2BrCUIvAkxfq1mWAihCakjGQlt1xb9081CY0pn5ejJLRL2vnm%2F9RzzhCHESvYmwsrn6E7xRhw6%2BiMtf7BW1JbUw2I6%2BwgY6pgFG6xcX891oUgn0TkpinlWQBuneigmh3%2FNiaFftBeo3PLB7nm6ZyFuRAXlwRYhOova5UkLtUkzdzGoD375Bf3WWGzEXiHuNY%2F11%2BiflNSYd%2F93zkQpysD3fJfv7RaY4wTugkGK7HmJ6qCM8WsP%2Fx7A24m1heb4%2BtrlZuwrNbjXq4XFt5RhEUSJx9VJQPY7lILIFcqJ9iQ5%2BIO4B0OrVJsXEu6B%2BXua%2B&X-Amz-Signature=666434ef2e40ebc7f6060415e411b8f51a9f9d81fcee6fcf9eb0b56fc88e7201&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJRBSQFJ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T061430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIBPEYPivghqHfO6IKoGJ4TxxSsotfSj6gN0lIatHanaUAiBGu9JGPfxq3RKRgba%2FLLnWSjFc7PeKvqLhyRtjoMKnRyr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMZHxuSLjgNv22jb0kKtwDlZu7bea0%2BusvzKJBg4inUGnhVBz7gqNlFZq6KkRHT8wFDcD9NJ8IKF9XoNKgQIohXdmg8GeDDzoKbZc9HUCxGY%2FkjK8W%2Bu8YMGiSx0p46X8NUS7jn0r8v2qp6qNGnpCa00JwFmpkh7oNIPV4Xv917E0LkPE44R%2B56aWdqSfCECZmE4IBtEyYX4RUYw2gFxMxH66lNyym5%2FD5zU0%2BJDCbleVvlrAIETjlpXg1Vplda92HERGR7Jwby2s5XAq68ZIUeoyvUUBKk7XgVumyYFRz0SWPs85UrhohqJoRMiVTFf%2FQdPfuylcgfKvnj0%2FWCubXu%2BcSIT4bYF3STxfuGZR0yQJxDww0SLZxQ0qPcW0jIEgwCqqi6thPGdJxznHNHAGU%2BC9WeI0OXinC%2BNAul%2Bg%2BOssTvE4kREWSnRoGPOjrXVt7s9oLzjJAWJ6H3mmy7%2FHpfyNMhR9RA2LitF%2F6y%2B9FSgoiD1NYXghhvUFhxNwQM9Hfq7UM6Mls%2Bhi2K%2Fpv6JF5IguiECX0XAxtzifvaJrgEIykypIvGCRs6rvBSj%2BrCUIvAkxfq1mWAihCakjGQlt1xb9081CY0pn5ejJLRL2vnm%2F9RzzhCHESvYmwsrn6E7xRhw6%2BiMtf7BW1JbUw2I6%2BwgY6pgFG6xcX891oUgn0TkpinlWQBuneigmh3%2FNiaFftBeo3PLB7nm6ZyFuRAXlwRYhOova5UkLtUkzdzGoD375Bf3WWGzEXiHuNY%2F11%2BiflNSYd%2F93zkQpysD3fJfv7RaY4wTugkGK7HmJ6qCM8WsP%2Fx7A24m1heb4%2BtrlZuwrNbjXq4XFt5RhEUSJx9VJQPY7lILIFcqJ9iQ5%2BIO4B0OrVJsXEu6B%2BXua%2B&X-Amz-Signature=399ae15983899c9e92b25cb339128fa5dafd1de4af8e82adeadea91bd94228b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
