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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP62H3HT%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDxPJOaTB4E7KGgDTlTBmuq7jQphWN9OyWK2v1lQsNtmwIgYem8PyuYI1ieIhyt3EuSodiBeP9XQytvLcya2Kz0jEEqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpzGPTrXqQ%2BnN9gVSrcA1fAnZ%2Fpmp8A9E4CYgF9F9ZyvUo58Kyp%2BU4%2FjSoDvDqvwD0GRBXmjsR0crxLHg5ukq7vsDZKqb8ruhMwjwl1kvN8N3jp3qmicxqa9Hz6K6ASFHffqF37m1Z6OhN5cIjBHSK4gYhFuipysYSOEAXsAcety56gWW6oBYp7LW2Ij3HaFZrnmQ6LvkZXFpKve%2FUXublFA%2B%2BrZ54LylotueUOMXj0Tsf6%2B%2FZxlE2QCgZW81zINlNtrHvCgCUmF%2FavHfn1SkkPdNffboHcF5sPJpLHILqxKViquMPJeL3q62Jm5HnqoAGNj%2BAQHBJfoTiwh6B20mtHJgNPJ6tDtOxhUVFpwqwzcm4R9kjLvjXcRWVDo%2B%2BYfx2Ezuaf%2B63AJWA7A4WFqoOUEHl3xSIi1%2Bu3G7uFbfhcqebJFZZwjSlB6oVe2W%2BNF1ZL%2BbAaiRfvFE9OUO2pie3JW%2BTvWvMhcV57zOaRohGvecF%2BwBuAXJPFwEF%2F5KOlgY5UdmhSSvm760lmGiRsyqX0RPhJVNfFe%2FK0pYgJ3N3Wq0ur9WBxACNA7SM895ObKZNeo1ZsRSqCunryyL6cITkcvRQBPYGniEwnfJSnWoSpcnWCnDJJ2KCMouaJ0iguar1XqghoysUyLqPJMMWVjL4GOqUBJ8VuxZjJmviIr7yp2gY0BJJSglektzlXS2b7wxvTmqkUDAa%2Bnc59YooWivpp%2FyH%2BzFnwhz%2F%2Fm5gHaD3j4lgCPTdMyKX57JiEK95O6tfPg3cJI0F8rb6PN8zpD1aF8THv2W7MZmIni16aT1XNriB5qJbikXQknpLjwHTWdipoXAE23O0aoWhw%2Bw%2FXbG5kW5QFKzmqYTTIBxB844NRJm90puDzD7Yf&X-Amz-Signature=c34457fa67d664c9b7e5e62b30042b8712cc0d1fc4db2fc942ef96283a3813a7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP62H3HT%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDxPJOaTB4E7KGgDTlTBmuq7jQphWN9OyWK2v1lQsNtmwIgYem8PyuYI1ieIhyt3EuSodiBeP9XQytvLcya2Kz0jEEqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpzGPTrXqQ%2BnN9gVSrcA1fAnZ%2Fpmp8A9E4CYgF9F9ZyvUo58Kyp%2BU4%2FjSoDvDqvwD0GRBXmjsR0crxLHg5ukq7vsDZKqb8ruhMwjwl1kvN8N3jp3qmicxqa9Hz6K6ASFHffqF37m1Z6OhN5cIjBHSK4gYhFuipysYSOEAXsAcety56gWW6oBYp7LW2Ij3HaFZrnmQ6LvkZXFpKve%2FUXublFA%2B%2BrZ54LylotueUOMXj0Tsf6%2B%2FZxlE2QCgZW81zINlNtrHvCgCUmF%2FavHfn1SkkPdNffboHcF5sPJpLHILqxKViquMPJeL3q62Jm5HnqoAGNj%2BAQHBJfoTiwh6B20mtHJgNPJ6tDtOxhUVFpwqwzcm4R9kjLvjXcRWVDo%2B%2BYfx2Ezuaf%2B63AJWA7A4WFqoOUEHl3xSIi1%2Bu3G7uFbfhcqebJFZZwjSlB6oVe2W%2BNF1ZL%2BbAaiRfvFE9OUO2pie3JW%2BTvWvMhcV57zOaRohGvecF%2BwBuAXJPFwEF%2F5KOlgY5UdmhSSvm760lmGiRsyqX0RPhJVNfFe%2FK0pYgJ3N3Wq0ur9WBxACNA7SM895ObKZNeo1ZsRSqCunryyL6cITkcvRQBPYGniEwnfJSnWoSpcnWCnDJJ2KCMouaJ0iguar1XqghoysUyLqPJMMWVjL4GOqUBJ8VuxZjJmviIr7yp2gY0BJJSglektzlXS2b7wxvTmqkUDAa%2Bnc59YooWivpp%2FyH%2BzFnwhz%2F%2Fm5gHaD3j4lgCPTdMyKX57JiEK95O6tfPg3cJI0F8rb6PN8zpD1aF8THv2W7MZmIni16aT1XNriB5qJbikXQknpLjwHTWdipoXAE23O0aoWhw%2Bw%2FXbG5kW5QFKzmqYTTIBxB844NRJm90puDzD7Yf&X-Amz-Signature=d8d3cb6c80e383008ffc0e1b30db0d17d8d7ad79e9e810cceb90c5ee4763ce1c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
