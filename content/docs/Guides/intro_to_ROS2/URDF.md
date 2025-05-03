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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN3A3233%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCGmFrM7TBvSOG5%2F3acncxb6A01odORxHO3JF1eP5zQpAIhAPRn8ANCUpUR4Ki418RhfGtGhriRg%2FtLf4WM9MNkoYp%2FKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkNYX37shmBHg0fYkq3AP5aEb%2Fm%2FVfFiOq6TJDvDtFSEi0j0ztq7RzI16b%2Fssyz4MIJM0EQEzgMF8sKJAjKLWVVh0VGt3rYyxYrX18m7EFolDlmm9Jy48krvgkFFAbiPMzbMRWc5x%2B%2F8E7R7rtAraiffSXg3fLpOwNj1t7q8uzxmdcPguxS8Hp%2FlhBhR0mVixT%2FkSN1tHf2oJadS9qbj17spxcZ%2B52kfZkSWTfB6cS4ejXYq0ykxvmETqEpvQO3QfXBptThhq8EHlRWB8NbPH19o72UErW5alKJHU0FHYu91cJLwcOxsToWJWda4J6xXQwt7RTYrQNFG8UYfcsapoU9qtPLmsc%2BMwi%2FmMCU0VdDJ%2BynS9cldBQXG5ak7N6cP%2BEyABf894iRmhBAME4mhZrZtd%2BRQU0nQPbBjhkOWtd9mYcO0AKsXdZan1%2FX06Rui4vLobrgDyvVg0Uq1DfkqwTD%2BqQbpFgWWwZGKVk802omkF5MnfiuOoevHhFg3xpbX517f9U4M7VawuZ9Y6eRG4Kvuqe4RZB0j3ARK5LfgMPZckrYvn0vnLlFYHnK%2BqgIQY7MhByq1FbkvVBXgdzhBd8Q6vHNg05%2Bpn8KkuiNi8V5T%2FLHKffCGBph1Oui6F5W86VKwfvd%2FBUPRQ2UzDOlNjABjqkAaT3Y%2FmiJj7KeYZlYGmwTqtsrF1R5aAlEq%2FbeKVw6atAA%2Fq2wgQ3cPmLMtTt5kYiUc0BTPfI3CMqm9XHfbN2zOoyBXOujOq7KpdsV0nKCSVvl1VM4%2FZLla9HAGKGtLGBE4fMfry6pbTPAUZ4bXmAHF74QSeyI%2BpwZYO8z%2F0DeZ3BKwdFJe0lgyJWRj6xTuxcigfflP6QTyIev2zFNrYKMv9fKLZP&X-Amz-Signature=f275b860ea8dc61dee3fb9748b220c953b4b190396fc9b9e6c31275fca4332c9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN3A3233%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCGmFrM7TBvSOG5%2F3acncxb6A01odORxHO3JF1eP5zQpAIhAPRn8ANCUpUR4Ki418RhfGtGhriRg%2FtLf4WM9MNkoYp%2FKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkNYX37shmBHg0fYkq3AP5aEb%2Fm%2FVfFiOq6TJDvDtFSEi0j0ztq7RzI16b%2Fssyz4MIJM0EQEzgMF8sKJAjKLWVVh0VGt3rYyxYrX18m7EFolDlmm9Jy48krvgkFFAbiPMzbMRWc5x%2B%2F8E7R7rtAraiffSXg3fLpOwNj1t7q8uzxmdcPguxS8Hp%2FlhBhR0mVixT%2FkSN1tHf2oJadS9qbj17spxcZ%2B52kfZkSWTfB6cS4ejXYq0ykxvmETqEpvQO3QfXBptThhq8EHlRWB8NbPH19o72UErW5alKJHU0FHYu91cJLwcOxsToWJWda4J6xXQwt7RTYrQNFG8UYfcsapoU9qtPLmsc%2BMwi%2FmMCU0VdDJ%2BynS9cldBQXG5ak7N6cP%2BEyABf894iRmhBAME4mhZrZtd%2BRQU0nQPbBjhkOWtd9mYcO0AKsXdZan1%2FX06Rui4vLobrgDyvVg0Uq1DfkqwTD%2BqQbpFgWWwZGKVk802omkF5MnfiuOoevHhFg3xpbX517f9U4M7VawuZ9Y6eRG4Kvuqe4RZB0j3ARK5LfgMPZckrYvn0vnLlFYHnK%2BqgIQY7MhByq1FbkvVBXgdzhBd8Q6vHNg05%2Bpn8KkuiNi8V5T%2FLHKffCGBph1Oui6F5W86VKwfvd%2FBUPRQ2UzDOlNjABjqkAaT3Y%2FmiJj7KeYZlYGmwTqtsrF1R5aAlEq%2FbeKVw6atAA%2Fq2wgQ3cPmLMtTt5kYiUc0BTPfI3CMqm9XHfbN2zOoyBXOujOq7KpdsV0nKCSVvl1VM4%2FZLla9HAGKGtLGBE4fMfry6pbTPAUZ4bXmAHF74QSeyI%2BpwZYO8z%2F0DeZ3BKwdFJe0lgyJWRj6xTuxcigfflP6QTyIev2zFNrYKMv9fKLZP&X-Amz-Signature=7b8df94955eadd343ba2138e1515b3853fe3ece40f977e80f86a6aa8ac5d65c5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
