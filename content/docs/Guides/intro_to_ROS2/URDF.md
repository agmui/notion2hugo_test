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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYGEA5PB%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3Pzn0lPtwVo2vX4rOCa7uEjLPcmhV1tRmXllV%2Bwz4fAiEAwD0N8Qh8CX4FTiR%2FAl09I1AZvr38GueKJj6Fgb0w4aIq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDEK%2BKjoyQM60Zey0qircA0WE5JJ1KsV5tsaMl8PKcR%2Bk6kvrDmLUK4AW93Ycm2eu37raUYiZtElOAo5jj2VLne5BfHSSILazhKoy%2F1wkTks8U7B4bfsKZGPxvTKou70WmyyLNbelKQQJmYdjLel9YCvPkFvxp4CAcnlXC29tA%2FlztVxgv%2BvEdqe%2B1k1tJWOPoX2f5BENRjKAF5vQupkYwcHg1Qo4Zs6%2F1PuQ%2Bb3RPXRtYILCP0zO%2FvG7aZQ5KVhXERtXodptCpmTkXA2TY3BOUQ2Bug2O7BHev0qzBkrOLgxGF%2ByN5M2dodFcYfrxUZWeuzRXvjGylwmohr8fTbT94hbtwQn28H7xVrYgWw4z3O%2FllvCwV9GHKpKOApRMzPvwQxzd92RLK4UqQ6uNHfqEfEOEgFOWc424oHxyiKUllRkzvU%2Fj%2BMg%2F54zkvFpUuRdjBUTEi2TToZOT%2F1uQeCCTI%2BS7cnGmjqQRtwSVz4qVfD9dCaxdM9rxwECpUCPHxzcVnCif0IF3yW4ykQWcJpPdXLSctkVzeo0tVNEIk4vPLpU1BGlL7DuT4Y%2BHyHNoWyhTdTMbhbuo%2BdgZgwNNMLf%2BWJFPEH9J5WsnNcPKwmdZtYYUqTyZsJYR%2Bsuf0fSJB8Zh8lGtMFYOv7pLe2TML%2FHg8AGOqUBYRv7kyBAOohSBkssfwSqH%2BLoKyOPH%2BiRGQ%2FVX%2F1Ici%2BM0wg1SfXZ%2BkN5VeipgfAp90W2Uf4eQ0snfvIULaDDgDXjERlqMB%2Fqzfu6gyOB3Kw%2BWUbqvmj69TxfJoKk4cU5KKMF0oGC%2B2nASVDr%2FxRW8yDUxdxFvbtroAxjiM2jQZFQhDcJ%2F8HXunAhMvkIbFFv%2BYz9nHSCoo8hsjJrEoPqRFpQ936b&X-Amz-Signature=c8dab7c61d36f2a96bd4597118cfec4eb40bb91b9e0185bea9bdd27df27ce999&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYGEA5PB%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3Pzn0lPtwVo2vX4rOCa7uEjLPcmhV1tRmXllV%2Bwz4fAiEAwD0N8Qh8CX4FTiR%2FAl09I1AZvr38GueKJj6Fgb0w4aIq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDEK%2BKjoyQM60Zey0qircA0WE5JJ1KsV5tsaMl8PKcR%2Bk6kvrDmLUK4AW93Ycm2eu37raUYiZtElOAo5jj2VLne5BfHSSILazhKoy%2F1wkTks8U7B4bfsKZGPxvTKou70WmyyLNbelKQQJmYdjLel9YCvPkFvxp4CAcnlXC29tA%2FlztVxgv%2BvEdqe%2B1k1tJWOPoX2f5BENRjKAF5vQupkYwcHg1Qo4Zs6%2F1PuQ%2Bb3RPXRtYILCP0zO%2FvG7aZQ5KVhXERtXodptCpmTkXA2TY3BOUQ2Bug2O7BHev0qzBkrOLgxGF%2ByN5M2dodFcYfrxUZWeuzRXvjGylwmohr8fTbT94hbtwQn28H7xVrYgWw4z3O%2FllvCwV9GHKpKOApRMzPvwQxzd92RLK4UqQ6uNHfqEfEOEgFOWc424oHxyiKUllRkzvU%2Fj%2BMg%2F54zkvFpUuRdjBUTEi2TToZOT%2F1uQeCCTI%2BS7cnGmjqQRtwSVz4qVfD9dCaxdM9rxwECpUCPHxzcVnCif0IF3yW4ykQWcJpPdXLSctkVzeo0tVNEIk4vPLpU1BGlL7DuT4Y%2BHyHNoWyhTdTMbhbuo%2BdgZgwNNMLf%2BWJFPEH9J5WsnNcPKwmdZtYYUqTyZsJYR%2Bsuf0fSJB8Zh8lGtMFYOv7pLe2TML%2FHg8AGOqUBYRv7kyBAOohSBkssfwSqH%2BLoKyOPH%2BiRGQ%2FVX%2F1Ici%2BM0wg1SfXZ%2BkN5VeipgfAp90W2Uf4eQ0snfvIULaDDgDXjERlqMB%2Fqzfu6gyOB3Kw%2BWUbqvmj69TxfJoKk4cU5KKMF0oGC%2B2nASVDr%2FxRW8yDUxdxFvbtroAxjiM2jQZFQhDcJ%2F8HXunAhMvkIbFFv%2BYz9nHSCoo8hsjJrEoPqRFpQ936b&X-Amz-Signature=4e0aca4f8abda6dff7029f2bfb1a18b7f2f540fba436b22927261c35ed4bd291&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
