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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDLN3K2Z%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDVTvk8QrArCBfEbxi%2B9o0sNzpekpdpNbv%2BAkX3NZs1uwIhANF1UmYdJCSfmkanu6Al8EQO5ORezKXtcqvGSloLb8kEKv8DCFUQABoMNjM3NDIzMTgzODA1IgybCGlNzW5pb0pa%2FlEq3AOVKzeXnu3FCZ9szV2VIzIPX3ttPaW2aHogh0gVVYU4AG2aQWXSDdoUCuO5VQyvdSUojAnxzBQozyGzx8K7YJuL6vCbLkXKUAAARblKClobzldlPmAQnjsOb2Kh9pyy9Y%2FWtjN0Ydxutk%2Bo7%2Br%2F6sKHDztl0osQJSJXsh4z6xNhhH0Ak%2FQQ5B3eY3PMX62nVV4EpA1SvjrUlrSZumem1LBENLMLM5OA54Xoj1OWspOh%2BwO8qrzrVG%2B1gq%2BcsFwZYEMA6TB7BMYeTXjTZaZhSZ71yyCaqG9ZvNdDlIpFoXdg3Y72FGb2iCZoEp5KXK6f%2BJNYt7XIlW9bVsxonWhfkLO%2BfJnSiFLb5GmjCPdjDRP7ougHOFXrCK1EsYIZBdHW%2FQ6hE3K040IrcPiHZA6IfnL3lhoWjPlR1feig636kdEKHhTXxX3ZhlBN35bMw%2FxQlGszQ2oxXbJGRWsc3zVom0OYsRiv%2BmKUw5%2BCkpvHtUtZXG2tPG4qwt5a2v9peeXtFnO3UnuOUS3TQ%2FngFhqoZndL70Gx87FOXKjEknmWMUQW19gdbfb0zgiGFP2%2BtyDmcA2qer%2FrzS8wjFmlAdg3Z4qA%2Fd9hfWNYifnj80iMlizru0DOspkpLYMBXYAcDTDP%2B66%2BBjqkARVhVFLYv30%2FPOt9KkAQer5UzigjJlvKP22lG7M1xpa8AkYzPnZodsH5eVOljqD%2FZhMcPzOQ9fzvVBATvDTt3nVyGWzMKELT1JCSejAUWL6UmeEY6orog9IlCGRM0omuTNsmGn%2FnAcmN8LnBfVIgCxEErLno%2BJsT3275tJD%2Fl0RvOpswjMa1%2BFO0KoFLsZEe2o9T10Dr3c8GT5cOhWS7wEqGy78O&X-Amz-Signature=cf374acb4ac779a6f8bb99117b1f1572987bc1491ce3156e2116649659232085&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDLN3K2Z%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDVTvk8QrArCBfEbxi%2B9o0sNzpekpdpNbv%2BAkX3NZs1uwIhANF1UmYdJCSfmkanu6Al8EQO5ORezKXtcqvGSloLb8kEKv8DCFUQABoMNjM3NDIzMTgzODA1IgybCGlNzW5pb0pa%2FlEq3AOVKzeXnu3FCZ9szV2VIzIPX3ttPaW2aHogh0gVVYU4AG2aQWXSDdoUCuO5VQyvdSUojAnxzBQozyGzx8K7YJuL6vCbLkXKUAAARblKClobzldlPmAQnjsOb2Kh9pyy9Y%2FWtjN0Ydxutk%2Bo7%2Br%2F6sKHDztl0osQJSJXsh4z6xNhhH0Ak%2FQQ5B3eY3PMX62nVV4EpA1SvjrUlrSZumem1LBENLMLM5OA54Xoj1OWspOh%2BwO8qrzrVG%2B1gq%2BcsFwZYEMA6TB7BMYeTXjTZaZhSZ71yyCaqG9ZvNdDlIpFoXdg3Y72FGb2iCZoEp5KXK6f%2BJNYt7XIlW9bVsxonWhfkLO%2BfJnSiFLb5GmjCPdjDRP7ougHOFXrCK1EsYIZBdHW%2FQ6hE3K040IrcPiHZA6IfnL3lhoWjPlR1feig636kdEKHhTXxX3ZhlBN35bMw%2FxQlGszQ2oxXbJGRWsc3zVom0OYsRiv%2BmKUw5%2BCkpvHtUtZXG2tPG4qwt5a2v9peeXtFnO3UnuOUS3TQ%2FngFhqoZndL70Gx87FOXKjEknmWMUQW19gdbfb0zgiGFP2%2BtyDmcA2qer%2FrzS8wjFmlAdg3Z4qA%2Fd9hfWNYifnj80iMlizru0DOspkpLYMBXYAcDTDP%2B66%2BBjqkARVhVFLYv30%2FPOt9KkAQer5UzigjJlvKP22lG7M1xpa8AkYzPnZodsH5eVOljqD%2FZhMcPzOQ9fzvVBATvDTt3nVyGWzMKELT1JCSejAUWL6UmeEY6orog9IlCGRM0omuTNsmGn%2FnAcmN8LnBfVIgCxEErLno%2BJsT3275tJD%2Fl0RvOpswjMa1%2BFO0KoFLsZEe2o9T10Dr3c8GT5cOhWS7wEqGy78O&X-Amz-Signature=1236043c32f851c4f300fe5a5bb1592f245bfa1a68cc7c10cee2a5023a7996f5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
