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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DCTGQPQ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBG4sLwNfER9xGkS0rdj5DsAn8v5%2Bw5tyIPhpmCvD3%2B5AiEAx5KveuCv6L7wvICWcagHBIwBYGfulDG2fzPvveO6HG4q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDCDwLtjay98gwR8NVircA3XE4q5y9w5grXahmBveXL3Y8WCHT5gJ3WJHn9z3rBbRrMXCin8ydxcxZLq2YrN2d8eI1g3wlPIg5UjjJGeKigfrrk9gOg0xWa8ow%2F3Sb380IkIPC%2B0GGAkZzg1wys3nL4ysIy35zbJUOpeyAz4v3fyd975s67bnKBUAC8dKLf4l1NjPnp%2FK2xD8ns5pHhA2vSI73unD49D6gI7uPw0PohYGGtNINFmQNQx2G%2Fj5ZxDC%2FeX7PSs3pUrj5wRFR9gM2wQ%2Bb1TC1Rs3fxn4TOkEoJAMBM7k2twScgWDBM3SXexwSFrfTNXpCaPMW7X23T6zuNrhIcgOiqmsZxlkzZl6%2FOiSNHQCguCsX6sSyBOJGrgKC8p5PInhwZXzFf8aK3C04a2JIiKgYJ%2BgO35cgWfqBRIw6eoLL1I4EKg6pduTnIyOPYktjTk0IcgPIOWfxxssPN1%2FH3NlMxAg2L0K2jrWPZY5%2B6QZ5AgYbN7O4H2f4GhJFMKjwlL52ya2ldv838nxxTF87iQJgme9zQHZjEuZWyGBh6t4rheYm81Nxys0OPTRQ9lYBI11bjjbHyaEq5cb4%2FmEPF6R%2F4TqMsE0NxUxfywVltKJLxqhOIVNNaD3Ofh9nGoW3Ce6Pic7f%2BPLMOir0sEGOqUB9TFFHKdD%2BdJNwMon2xC29hm%2BnjaZHq4xJ0AnUlTCvFnGZJt660zDLxf60nl2zpuTl4LzbmDTNZpL%2BrOJGmEiBXodJZGnXWyHoYgudR2B%2F27OL51kJkeG8d8TppCljh0yD5PyOpgn0Q%2Bu0H%2BqHO0cnV3K1vd4RdU6SN3VMeWVtVPQgmPThWpQFQ0WeihGFqnhrfndjKT69IJFOj%2FwrjtJBxZ8HGbd&X-Amz-Signature=604e9c6af45cc7e36c4a97df4747f9bffdc2e75f3344e9fca913ec2c02a9457c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DCTGQPQ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBG4sLwNfER9xGkS0rdj5DsAn8v5%2Bw5tyIPhpmCvD3%2B5AiEAx5KveuCv6L7wvICWcagHBIwBYGfulDG2fzPvveO6HG4q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDCDwLtjay98gwR8NVircA3XE4q5y9w5grXahmBveXL3Y8WCHT5gJ3WJHn9z3rBbRrMXCin8ydxcxZLq2YrN2d8eI1g3wlPIg5UjjJGeKigfrrk9gOg0xWa8ow%2F3Sb380IkIPC%2B0GGAkZzg1wys3nL4ysIy35zbJUOpeyAz4v3fyd975s67bnKBUAC8dKLf4l1NjPnp%2FK2xD8ns5pHhA2vSI73unD49D6gI7uPw0PohYGGtNINFmQNQx2G%2Fj5ZxDC%2FeX7PSs3pUrj5wRFR9gM2wQ%2Bb1TC1Rs3fxn4TOkEoJAMBM7k2twScgWDBM3SXexwSFrfTNXpCaPMW7X23T6zuNrhIcgOiqmsZxlkzZl6%2FOiSNHQCguCsX6sSyBOJGrgKC8p5PInhwZXzFf8aK3C04a2JIiKgYJ%2BgO35cgWfqBRIw6eoLL1I4EKg6pduTnIyOPYktjTk0IcgPIOWfxxssPN1%2FH3NlMxAg2L0K2jrWPZY5%2B6QZ5AgYbN7O4H2f4GhJFMKjwlL52ya2ldv838nxxTF87iQJgme9zQHZjEuZWyGBh6t4rheYm81Nxys0OPTRQ9lYBI11bjjbHyaEq5cb4%2FmEPF6R%2F4TqMsE0NxUxfywVltKJLxqhOIVNNaD3Ofh9nGoW3Ce6Pic7f%2BPLMOir0sEGOqUB9TFFHKdD%2BdJNwMon2xC29hm%2BnjaZHq4xJ0AnUlTCvFnGZJt660zDLxf60nl2zpuTl4LzbmDTNZpL%2BrOJGmEiBXodJZGnXWyHoYgudR2B%2F27OL51kJkeG8d8TppCljh0yD5PyOpgn0Q%2Bu0H%2BqHO0cnV3K1vd4RdU6SN3VMeWVtVPQgmPThWpQFQ0WeihGFqnhrfndjKT69IJFOj%2FwrjtJBxZ8HGbd&X-Amz-Signature=373f9604ee6b85947cd5d4adf3d29bdd33ca5ff030b5efc3bc548b88724edae6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
