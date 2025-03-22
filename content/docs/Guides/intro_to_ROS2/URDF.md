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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KHPGWHB%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIEYv11e1lGf5h5DIMrn85lALjPzs2G%2BSLiOZFe21dnarAiAnwBaJsn6vkTVHRNXc%2FcQgvIUVY4azHOFF%2Bd%2BxPI212SqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvKYNjO4sJ57nzqzEKtwDPLPAnEvN8WX3PK1QoP4TAxa%2FljeB2TvKKSmyKPpccw9EH44N0rudAKzvf7%2BRHavk%2FmUPy2vOx2p3luzOeGipXUIyk88wVPIX6rp%2BzyJ3cgihx0NjOJ479DnMm0cnRiAztiALDXqOIfR5E3aka2LeS21xRQj34NrTUKlEzp9jE334EN8e9X0vsa3KZS6BDzE4kf4VPkq1POMeUd8INQwIlVNbjqrKvHv6Z5xtoh3xLDbfw1gUZA8osUwZ0VTYEK7S%2BNJOXFy3CS3VmByeoDPds6%2FFI4ZbxV2clITs9uMn78de4FfyXv6dvx2mLXwApiD%2FpWFT6JSqXfdRbFHdXqLwX5d0epZWnkR0bXu097rbllEZzBJ%2BWxChh9E55S%2BYLX79ik0Pvrk1UkK0pQF0FUcIWoaOGw0RDr207iGe4dcUyzTEhMpp4tJdsBcnnK1RfIQxMMrV4fKrASW56mxa1R7whK4V34incx5XdW8%2Bwingo%2FMFyJB98AM0eU4gQQR%2FnrmZw34hnf6v0iPlkZfBoYbGFX%2FUeAyMh3fPR4RJmgz0PPGRDPzhR6zp0BHBAWFtEpbO6NMEQW7IkXR6xlDUqtI6xMyuT0Y9QY6HnP11y76vFUr8FzJhzFKrFuyGr8own%2Ff3vgY6pgF92tQ9APA5qaWl2D7DgCyFsx3ui9snQFqP05nWRvhqI5jDTbS1Xxk2kJg10sKL%2B965QIiV1W9i94O88zjl71byg6jlHY8A7WqFFvwCBs%2Fhgpy4Fy1aRV5VsWsZsU6N3QMd9ru07cpWyNP8dBml6t%2FlMRVsDaeQtnxyZ0UjVY%2BII9HTWfRVXSEsIVfwL4msqQRQz0orB8obFI1uV0JF91aflFjpyEqZ&X-Amz-Signature=d825c3bfd534da95a86285a6954b1690ad4f968e7e43f38b82b328e4bf791076&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KHPGWHB%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIEYv11e1lGf5h5DIMrn85lALjPzs2G%2BSLiOZFe21dnarAiAnwBaJsn6vkTVHRNXc%2FcQgvIUVY4azHOFF%2Bd%2BxPI212SqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvKYNjO4sJ57nzqzEKtwDPLPAnEvN8WX3PK1QoP4TAxa%2FljeB2TvKKSmyKPpccw9EH44N0rudAKzvf7%2BRHavk%2FmUPy2vOx2p3luzOeGipXUIyk88wVPIX6rp%2BzyJ3cgihx0NjOJ479DnMm0cnRiAztiALDXqOIfR5E3aka2LeS21xRQj34NrTUKlEzp9jE334EN8e9X0vsa3KZS6BDzE4kf4VPkq1POMeUd8INQwIlVNbjqrKvHv6Z5xtoh3xLDbfw1gUZA8osUwZ0VTYEK7S%2BNJOXFy3CS3VmByeoDPds6%2FFI4ZbxV2clITs9uMn78de4FfyXv6dvx2mLXwApiD%2FpWFT6JSqXfdRbFHdXqLwX5d0epZWnkR0bXu097rbllEZzBJ%2BWxChh9E55S%2BYLX79ik0Pvrk1UkK0pQF0FUcIWoaOGw0RDr207iGe4dcUyzTEhMpp4tJdsBcnnK1RfIQxMMrV4fKrASW56mxa1R7whK4V34incx5XdW8%2Bwingo%2FMFyJB98AM0eU4gQQR%2FnrmZw34hnf6v0iPlkZfBoYbGFX%2FUeAyMh3fPR4RJmgz0PPGRDPzhR6zp0BHBAWFtEpbO6NMEQW7IkXR6xlDUqtI6xMyuT0Y9QY6HnP11y76vFUr8FzJhzFKrFuyGr8own%2Ff3vgY6pgF92tQ9APA5qaWl2D7DgCyFsx3ui9snQFqP05nWRvhqI5jDTbS1Xxk2kJg10sKL%2B965QIiV1W9i94O88zjl71byg6jlHY8A7WqFFvwCBs%2Fhgpy4Fy1aRV5VsWsZsU6N3QMd9ru07cpWyNP8dBml6t%2FlMRVsDaeQtnxyZ0UjVY%2BII9HTWfRVXSEsIVfwL4msqQRQz0orB8obFI1uV0JF91aflFjpyEqZ&X-Amz-Signature=e93bf0ac0dcd3ce2095886156dd96fcca9fe811a111cda9eedafff20ea5d080b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
