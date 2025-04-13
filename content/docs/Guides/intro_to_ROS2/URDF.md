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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCD7GHPO%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDrw3OThcRd2YcTVdCFgxJA6vEpOmBneTWMl8T4y8%2F1hQIhAPEbEkovv0vpkNP2m1afmByI0cSZovc%2FMGnGi%2BLf5m28KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUu0cGx%2B4kYT63ufsq3AN2K3porZ34wJp9wtm8JeRvTeHNJuBzkuY6IyVEhDj3L9VavSieMl0u1C0LBcNLki5QHvKn6rFkzgvTagMsxc8KV1jhZ832dNuNbYy3sWBoC4pFp6Zo78qO1m%2Brv4eMpwQhldE4QpCsSqC1d0UpuPaN8p7S2vGELQbvT%2F2NtPXGfxJb6iEp3CS8ycKb8z3vPBsCD0XRAhHEwDwbR4LqexDW%2F%2FGdmEdMClaHmw3bKCXUunGtM7b6%2Bu4uI1IeiEJcezx39OESZvyDey%2B872%2FLV%2F3EU1fx7I3CtNwysLRaPL5eyjgW2PQQMZkKT8YCa2hlI3Bqgi8dcpkETyV3iI%2F10PRtEqorMSxTpXDi50fWjWlg5kAb41DG7WMZuYju8BOEteIwHv0QPERaoqPqTQiXUChsX7yb9xGX2H95wR2edwV6zzaSRIC54Eo45Tg1qrBFncbokmvUkSQ9UxH1o6wmsic7ucM6eFmh2rx0eEhV0tCsADVgQc%2B4tK5QCA8PwKY3U9r4LLiq8j85dqtj7s1piv9eriQ3hfOdLuDKAyh6YjNXdG%2FhjaOAOFI3mInd8iJ3XvWFha3FIWiQJCdzou8SeWq2B6S2j6HpHvpGWZZo%2Fzo7oJCDWyMz26K6tkVs2DDLie6%2FBjqkATqpKk5TNunGcJEavFKWpqsn6KfaTu53K%2FqOwNhdcmvJbBkhtDZ2lbb%2FYSMUNlFFKsGb5UofFy05V6frMLEmxuMbpTsc7S%2FpPYXCkjT%2FxaYP3j7T3XrYvF5rhiB9XBBO0Zf2dwUwh83C6PqLh%2FoFwWcQRLvS9ILqz8LD%2FVkhYsf5gI5pC5BhhTZ6MvbDSB03rpWmi%2BqIy87jveD5UKJ7kR%2BqcWPE&X-Amz-Signature=e5319fe6ccce3708fbd6615f1e9ae64cd145341ec53c59a76f4844fd550f6e63&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCD7GHPO%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDrw3OThcRd2YcTVdCFgxJA6vEpOmBneTWMl8T4y8%2F1hQIhAPEbEkovv0vpkNP2m1afmByI0cSZovc%2FMGnGi%2BLf5m28KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUu0cGx%2B4kYT63ufsq3AN2K3porZ34wJp9wtm8JeRvTeHNJuBzkuY6IyVEhDj3L9VavSieMl0u1C0LBcNLki5QHvKn6rFkzgvTagMsxc8KV1jhZ832dNuNbYy3sWBoC4pFp6Zo78qO1m%2Brv4eMpwQhldE4QpCsSqC1d0UpuPaN8p7S2vGELQbvT%2F2NtPXGfxJb6iEp3CS8ycKb8z3vPBsCD0XRAhHEwDwbR4LqexDW%2F%2FGdmEdMClaHmw3bKCXUunGtM7b6%2Bu4uI1IeiEJcezx39OESZvyDey%2B872%2FLV%2F3EU1fx7I3CtNwysLRaPL5eyjgW2PQQMZkKT8YCa2hlI3Bqgi8dcpkETyV3iI%2F10PRtEqorMSxTpXDi50fWjWlg5kAb41DG7WMZuYju8BOEteIwHv0QPERaoqPqTQiXUChsX7yb9xGX2H95wR2edwV6zzaSRIC54Eo45Tg1qrBFncbokmvUkSQ9UxH1o6wmsic7ucM6eFmh2rx0eEhV0tCsADVgQc%2B4tK5QCA8PwKY3U9r4LLiq8j85dqtj7s1piv9eriQ3hfOdLuDKAyh6YjNXdG%2FhjaOAOFI3mInd8iJ3XvWFha3FIWiQJCdzou8SeWq2B6S2j6HpHvpGWZZo%2Fzo7oJCDWyMz26K6tkVs2DDLie6%2FBjqkATqpKk5TNunGcJEavFKWpqsn6KfaTu53K%2FqOwNhdcmvJbBkhtDZ2lbb%2FYSMUNlFFKsGb5UofFy05V6frMLEmxuMbpTsc7S%2FpPYXCkjT%2FxaYP3j7T3XrYvF5rhiB9XBBO0Zf2dwUwh83C6PqLh%2FoFwWcQRLvS9ILqz8LD%2FVkhYsf5gI5pC5BhhTZ6MvbDSB03rpWmi%2BqIy87jveD5UKJ7kR%2BqcWPE&X-Amz-Signature=68c11d1214fe7eab20b13b2e983063469948a2e6abd72102292d65b6d59b026d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
