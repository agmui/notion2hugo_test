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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YB4RBZV%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T080953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIES7m2%2BqmEUGY%2BzmMEtpGGHUQIzQEzXnso5EPByeYsz9AiBe9njHGxOQYb%2BvMjgERCdP06J63pTz3LGn6ZuUFRGNkyqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrDOSLJNvZ6GEDEaOKtwDvfCKueYmiahP67CUus4uuNV%2BVHZRTIiO%2Bc%2BDF8Af54IZvgYqVu8KeggoOX0wqtNfULa9T0FQcBuWRatJatJDg6HIJfnbfLu6yOVMnbKw%2Fmi8D6HWGwBoyB7DqHuqFyrHfWH6Tz6fNv4Cb%2B3erd8eh3yFH7J%2FrIqBlOhxVVZYJ40MIiqQ%2ByEZu8fUd5Tv34YEkeZXGzXuSW6y%2F6LrkdpWBES1yEC4GsT0SQv82YkufcM0UKZaDyxL1OH2XjUlOA28NXWziHriDU6Dz1JT%2BLhcWZtLFFb0wDSGGKTmI19IZSKxM9aB3XJMRT%2FERJq%2BLzXysIAlpJ2kmzT%2ByuxIZpp6ML6IZxfDfJW4zVCS3L9dJybLnxEucDPgHNFXcHoQYN32skvUDftESkRSnfPex6tJLsbpma4ZX8QMnNTvSmJMnwZNBJ%2F9H3Hj6KCA2gxbSeiGr1DZ9cStyO4GaBhNcjLC5uRic%2Baa1mxTgDETwSZg0f0WLYaRLtK6sKsWWQCpbnnyVKypXJbTIUTVU11wIS7v19tDk7bWeTWG0rp6kPC1HFqULtDiw6KwTrS7c2hXZbuQS0ip8uHDjJqy1yIoyd9s7PEDgfvsBzdLrbprgct6WMvaDNUZ9dXSNX%2FCIywwwajovwY6pgE1VjyryxwcKkqCr5pTws7kxuCYCSWsXOoUg7UwDD3eKJSEQnacEov%2BuQSN9d9IKUsVudKM15RwKU2Jt62eSIaPHN8qxL57mhVQbIh2nqBgBJZXsgAVbA228zi7e4RBMj5rhLrMHfhw3LdA9SN0eJ8mgOM5PzRYQKcUUpEhjOMpcNSWSUzAXaPuBDZFZYBBeXRG0FA3drzqzdGr8wrzjGOsWWybKGAU&X-Amz-Signature=51f6176d08f4f8acb29757fd4c81517d71d7c920b1012a420e8d92473a8e8c14&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YB4RBZV%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T080953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIES7m2%2BqmEUGY%2BzmMEtpGGHUQIzQEzXnso5EPByeYsz9AiBe9njHGxOQYb%2BvMjgERCdP06J63pTz3LGn6ZuUFRGNkyqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrDOSLJNvZ6GEDEaOKtwDvfCKueYmiahP67CUus4uuNV%2BVHZRTIiO%2Bc%2BDF8Af54IZvgYqVu8KeggoOX0wqtNfULa9T0FQcBuWRatJatJDg6HIJfnbfLu6yOVMnbKw%2Fmi8D6HWGwBoyB7DqHuqFyrHfWH6Tz6fNv4Cb%2B3erd8eh3yFH7J%2FrIqBlOhxVVZYJ40MIiqQ%2ByEZu8fUd5Tv34YEkeZXGzXuSW6y%2F6LrkdpWBES1yEC4GsT0SQv82YkufcM0UKZaDyxL1OH2XjUlOA28NXWziHriDU6Dz1JT%2BLhcWZtLFFb0wDSGGKTmI19IZSKxM9aB3XJMRT%2FERJq%2BLzXysIAlpJ2kmzT%2ByuxIZpp6ML6IZxfDfJW4zVCS3L9dJybLnxEucDPgHNFXcHoQYN32skvUDftESkRSnfPex6tJLsbpma4ZX8QMnNTvSmJMnwZNBJ%2F9H3Hj6KCA2gxbSeiGr1DZ9cStyO4GaBhNcjLC5uRic%2Baa1mxTgDETwSZg0f0WLYaRLtK6sKsWWQCpbnnyVKypXJbTIUTVU11wIS7v19tDk7bWeTWG0rp6kPC1HFqULtDiw6KwTrS7c2hXZbuQS0ip8uHDjJqy1yIoyd9s7PEDgfvsBzdLrbprgct6WMvaDNUZ9dXSNX%2FCIywwwajovwY6pgE1VjyryxwcKkqCr5pTws7kxuCYCSWsXOoUg7UwDD3eKJSEQnacEov%2BuQSN9d9IKUsVudKM15RwKU2Jt62eSIaPHN8qxL57mhVQbIh2nqBgBJZXsgAVbA228zi7e4RBMj5rhLrMHfhw3LdA9SN0eJ8mgOM5PzRYQKcUUpEhjOMpcNSWSUzAXaPuBDZFZYBBeXRG0FA3drzqzdGr8wrzjGOsWWybKGAU&X-Amz-Signature=f7db97e112b6f841edd4f66a496537138f964e0286ea514c8131a1f2c54c830f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
