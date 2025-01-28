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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SC2IHFM%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBhS6VV%2Fo9zCsShOIFEhMuqH7ILyOmlKVe7mMZ7C96bpAiA5X%2BASHKef%2FuwoROTuBwSyfrx9vl6GWY%2FDigA7Jfix0yr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMRe%2FmtQ8yw6JsEvXyKtwD5dfi9ldYgzTc9AvRyFL30pKfH47x9cWXl61ItVOzsjVZzorh2uUzLcsoxpWTudt6lh%2FBuUxkV2XzyXzU%2BVe8WElkPiXOSjvIMquR0rFO1IdWT2jf%2FQhfi9NGBkjX%2FXWyxQjdHTafGl7s3nIomrNU%2BnZjqY9T4smqzo9u7QeUjNI9agElhqY0UjEu%2BJS29%2F6gQXkTvFFmbtnN%2Bsu7U7XlEy0J5mCI5EVk5%2FYeZ7Z9uoApfqb7%2FoYLfVzRiM4cGnFt8BRR1Ntr1V8XgmQeoJJV3wdgkqTeLBrzUIBQo%2BUOEiYqcHFOFV11nShAFEsdOHaRDoHR%2BlWs2UYjXg8zNSAXjyXpznSS%2B5WMJjPREfOXDiaYwsMkGZGAv9Xsz%2BNFu5ZaBWS0u0UiP%2Bm9UoueeaYZTQKo8jMkoUKMXE%2Bnj4ofpFSVNTUGITn6xhKtLD3omEWX40dhNjOxQKDD0wOmPamOpms5VhMts5khccjdVigjKMF2WmaeB1mXOPRETZoyezaV5unYNA6ulztN7ULbZExu4ufjq21Hl2%2B5ixiglN3XH60xsWPvkAMu42lLHO2O4rH4%2F%2FiaLTKXipYwjf818i5Aahu2ueq%2BGUtxYMODBDvhoZIdHcjMTJXv5NDkF2cwy5XlvAY6pgHiJGLHK8xF%2BdEXpqmILqu%2Bb1pJyaIPL8UWfWXN30vyexn2yFML4uMzfF%2F2Rt2hSGAylCd9MjlLn4HrZ3zzF9PzZRk5ORT0DOo2QeRs%2Fz9dFsukupc8NDMSmbNHmw3MG5XvIjuLDr6E2EKQxSpvSQh2SY5KtcZGeHRVKQW%2BtlTUpIPVD6MhuLUdqWPLhDAAHbx%2F635kh2DM98%2B9vmYEhkupkyfIRcao&X-Amz-Signature=eb4187c267e76739fd2ad8ade268ba3781bb6dbb763c178acaa509f8b794c6e3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SC2IHFM%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBhS6VV%2Fo9zCsShOIFEhMuqH7ILyOmlKVe7mMZ7C96bpAiA5X%2BASHKef%2FuwoROTuBwSyfrx9vl6GWY%2FDigA7Jfix0yr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMRe%2FmtQ8yw6JsEvXyKtwD5dfi9ldYgzTc9AvRyFL30pKfH47x9cWXl61ItVOzsjVZzorh2uUzLcsoxpWTudt6lh%2FBuUxkV2XzyXzU%2BVe8WElkPiXOSjvIMquR0rFO1IdWT2jf%2FQhfi9NGBkjX%2FXWyxQjdHTafGl7s3nIomrNU%2BnZjqY9T4smqzo9u7QeUjNI9agElhqY0UjEu%2BJS29%2F6gQXkTvFFmbtnN%2Bsu7U7XlEy0J5mCI5EVk5%2FYeZ7Z9uoApfqb7%2FoYLfVzRiM4cGnFt8BRR1Ntr1V8XgmQeoJJV3wdgkqTeLBrzUIBQo%2BUOEiYqcHFOFV11nShAFEsdOHaRDoHR%2BlWs2UYjXg8zNSAXjyXpznSS%2B5WMJjPREfOXDiaYwsMkGZGAv9Xsz%2BNFu5ZaBWS0u0UiP%2Bm9UoueeaYZTQKo8jMkoUKMXE%2Bnj4ofpFSVNTUGITn6xhKtLD3omEWX40dhNjOxQKDD0wOmPamOpms5VhMts5khccjdVigjKMF2WmaeB1mXOPRETZoyezaV5unYNA6ulztN7ULbZExu4ufjq21Hl2%2B5ixiglN3XH60xsWPvkAMu42lLHO2O4rH4%2F%2FiaLTKXipYwjf818i5Aahu2ueq%2BGUtxYMODBDvhoZIdHcjMTJXv5NDkF2cwy5XlvAY6pgHiJGLHK8xF%2BdEXpqmILqu%2Bb1pJyaIPL8UWfWXN30vyexn2yFML4uMzfF%2F2Rt2hSGAylCd9MjlLn4HrZ3zzF9PzZRk5ORT0DOo2QeRs%2Fz9dFsukupc8NDMSmbNHmw3MG5XvIjuLDr6E2EKQxSpvSQh2SY5KtcZGeHRVKQW%2BtlTUpIPVD6MhuLUdqWPLhDAAHbx%2F635kh2DM98%2B9vmYEhkupkyfIRcao&X-Amz-Signature=22437c56dd41b905540849ea5441d646ebfd92685ee0a4f2139261e85a0f1fd9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
