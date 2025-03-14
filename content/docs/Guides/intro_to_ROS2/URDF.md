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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVF7PG2R%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgkmQuFgPIKrE6LfYTkkRMlY9K9eogZknf69Ltd83IYQIhAL1hCkMTKx20iyECA6W%2FQqUafqEy4CclzXZTe5Qpwx8uKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFOYHO7hYShDrVfAgq3AMGEnj1tw%2F5lK%2B%2FmxEeveLoJcfKfRALD87jdcpJRgecGDfSb%2FZkzd417pxRnUHTBRWfZe3pR7RszU6fkm8iQc%2Bz5UnWcpWgdG2wJJOTftvQ7UmrOrBi0lMsWiACckjRAKQtAhgDcASaXdJ%2BzDCuBXP7vE%2Fe22LSKhhlwyhcrumBJGTe%2FOdUCmjPtv6ato5LMJN3xuRPsGP0opy1xO8eh0DGeGGhJPXqJaFvO7YtpfbsDSka%2F%2FeNK7t5aqbs42VtmFlKHJfY%2F4MW0lGQ6daXcXltlRMCazA5gPOIyg1tZfZ9vS0cDcg15GKedbnnSUX6v2OpDdRZP38khPKF9fYc%2FqEyIKn16wrMxgdVAPQhQubvvDYGe2XTqloS1k7SERq8F5MowkapTMNHIdlrvUYO8rwSmA21jv3IvAkhEwwyzwK2NjjZ2ZIg8oWQhtXFtI8H%2BYBmLU%2B0AjT8pLmwuTWnYervm%2FTFvgcrwUbJIji0Wc4AWcyYwta4Xma0rI07DXhfvcdR319Uzd%2Ft5kXnRyYiTkb38SRQN%2FVmiTeNexFBJppju%2FFkzsms%2FX56F2iElR8m57PhdIoYVXbKhvC1DkZyhFbXpW6Ng%2Fc0O5kEbNT8C1LGmc1QkrhGv%2BoQLVM49zCFstK%2BBjqkARZtJ6myWq8lrko75riZg2eRiPLPOix7D%2Fub%2BjnXkSU6hdMzTza9wkAWNuHupMQy2V0WKZ42APcGusuYu07f%2BxedwPqoQbULO46bOPbEx342Csquw3odxvSFszylAahaAR%2FXOeaJZY%2BT7fQPwi4rUt2fRa1vO4HgND6tMRS290t%2B%2BhAWtmGSSCxpw6JR8zxJAiSKvKbly66%2BbKpCj7jXMlboRwHb&X-Amz-Signature=f179701dbadcd6204db327a702f1f9d71a9c76d43efa48bcf75b07aeb68afb5b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVF7PG2R%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgkmQuFgPIKrE6LfYTkkRMlY9K9eogZknf69Ltd83IYQIhAL1hCkMTKx20iyECA6W%2FQqUafqEy4CclzXZTe5Qpwx8uKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFOYHO7hYShDrVfAgq3AMGEnj1tw%2F5lK%2B%2FmxEeveLoJcfKfRALD87jdcpJRgecGDfSb%2FZkzd417pxRnUHTBRWfZe3pR7RszU6fkm8iQc%2Bz5UnWcpWgdG2wJJOTftvQ7UmrOrBi0lMsWiACckjRAKQtAhgDcASaXdJ%2BzDCuBXP7vE%2Fe22LSKhhlwyhcrumBJGTe%2FOdUCmjPtv6ato5LMJN3xuRPsGP0opy1xO8eh0DGeGGhJPXqJaFvO7YtpfbsDSka%2F%2FeNK7t5aqbs42VtmFlKHJfY%2F4MW0lGQ6daXcXltlRMCazA5gPOIyg1tZfZ9vS0cDcg15GKedbnnSUX6v2OpDdRZP38khPKF9fYc%2FqEyIKn16wrMxgdVAPQhQubvvDYGe2XTqloS1k7SERq8F5MowkapTMNHIdlrvUYO8rwSmA21jv3IvAkhEwwyzwK2NjjZ2ZIg8oWQhtXFtI8H%2BYBmLU%2B0AjT8pLmwuTWnYervm%2FTFvgcrwUbJIji0Wc4AWcyYwta4Xma0rI07DXhfvcdR319Uzd%2Ft5kXnRyYiTkb38SRQN%2FVmiTeNexFBJppju%2FFkzsms%2FX56F2iElR8m57PhdIoYVXbKhvC1DkZyhFbXpW6Ng%2Fc0O5kEbNT8C1LGmc1QkrhGv%2BoQLVM49zCFstK%2BBjqkARZtJ6myWq8lrko75riZg2eRiPLPOix7D%2Fub%2BjnXkSU6hdMzTza9wkAWNuHupMQy2V0WKZ42APcGusuYu07f%2BxedwPqoQbULO46bOPbEx342Csquw3odxvSFszylAahaAR%2FXOeaJZY%2BT7fQPwi4rUt2fRa1vO4HgND6tMRS290t%2B%2BhAWtmGSSCxpw6JR8zxJAiSKvKbly66%2BbKpCj7jXMlboRwHb&X-Amz-Signature=25dea7029094d0f5f9f8c5e71c846c3a23154a9830e16102a24cb79a567a4bcf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
