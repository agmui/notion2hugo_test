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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636ISEISZ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQC81HfMlL1HpuRbt25f1ZwWjQwvRnsg1VylgJudITVg%2BwIhAJMIKwu3VTY3YJ0n7YWarUEHZeHwJfK0sbJLvGe1TL%2FFKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvwLumtJkvq71EyWgq3AMsmXbyOojrkByCnGHVeFQWz01vy3uFkPd4HLsisCjBvsHS9iR4CNZQtJX%2BS40Gv9MODipwGL39SPSP2Mr7TUcd3OxQoKMBwUMUjuqrCsF%2Fp1D3V0YcWC2uqAGF6gkCuOf5f98JIYV%2BnF3uQcl9bZOTUS5Jc8cq5FEYlJt32eYbQNyVr8TvKqH3CxEjbj7svcRWx17EEFVmoP8qqJ%2FAykAWGqDzd3aq7k0f867KXfHH4pjhF36OHRFPW%2FY1YJYFVDZRgl7yQslCekIILdm4HB3s9gFytQw5EnF%2BULAcWc33cmsXDR2G2HppzfueFS%2FZ3rKGbErvx6oJNtYSV3bYqrsCTvk27ps%2FmxI%2BVEz9ltFdTaVOcEsluXnClJQgkXjqfK5EkpgS%2FbuuLTRyvFGZid5ZQR%2F%2FAYCQQg53nhnyEtEYE1S%2BFKeGLijnTP0nl4Jm0yvLWZ%2BR7RBiCEAO89imv6JtyEJ%2FdbyGO8K7gtiwWg25cpnKg2d563pCadsGPU3vAmlrpS8QitbDDG4vGaDPtgSqVx49IXBlpbQpp23g9yFy0ZvWtx5itY9wFQ%2FP1d3F%2Fru66dXOBxEuKM28rHtWa%2Bb%2Bf%2BxqU5iQOPpWVByQjfCVpaguJHgu15q%2F5SBz8zDP6Lq%2BBjqkAVwEB5nWmHrfqF84VeAw84cy4FeAJFgpvA8BrDWfiwhRWxsYiZj0XTSwjM6MQ6xFrd1qRkHgKDRJnzq3kx7SMFgBcp%2Fl5nIS5S2q%2FQMMboJectnDZXn85FTU8KUElU42ctY6iZgayI0wI9iAL3pCFE%2FeLlC7cViXBgyBS0dZpFun727hqO5yBJIVFvU8rvP%2BzxMaTovBHQcDpw5mC2g6IQiYr6Lf&X-Amz-Signature=c251fa428ccacc05be7e6898c452dc555cbb10e395b019b43e102008daf8f53c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636ISEISZ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQC81HfMlL1HpuRbt25f1ZwWjQwvRnsg1VylgJudITVg%2BwIhAJMIKwu3VTY3YJ0n7YWarUEHZeHwJfK0sbJLvGe1TL%2FFKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvwLumtJkvq71EyWgq3AMsmXbyOojrkByCnGHVeFQWz01vy3uFkPd4HLsisCjBvsHS9iR4CNZQtJX%2BS40Gv9MODipwGL39SPSP2Mr7TUcd3OxQoKMBwUMUjuqrCsF%2Fp1D3V0YcWC2uqAGF6gkCuOf5f98JIYV%2BnF3uQcl9bZOTUS5Jc8cq5FEYlJt32eYbQNyVr8TvKqH3CxEjbj7svcRWx17EEFVmoP8qqJ%2FAykAWGqDzd3aq7k0f867KXfHH4pjhF36OHRFPW%2FY1YJYFVDZRgl7yQslCekIILdm4HB3s9gFytQw5EnF%2BULAcWc33cmsXDR2G2HppzfueFS%2FZ3rKGbErvx6oJNtYSV3bYqrsCTvk27ps%2FmxI%2BVEz9ltFdTaVOcEsluXnClJQgkXjqfK5EkpgS%2FbuuLTRyvFGZid5ZQR%2F%2FAYCQQg53nhnyEtEYE1S%2BFKeGLijnTP0nl4Jm0yvLWZ%2BR7RBiCEAO89imv6JtyEJ%2FdbyGO8K7gtiwWg25cpnKg2d563pCadsGPU3vAmlrpS8QitbDDG4vGaDPtgSqVx49IXBlpbQpp23g9yFy0ZvWtx5itY9wFQ%2FP1d3F%2Fru66dXOBxEuKM28rHtWa%2Bb%2Bf%2BxqU5iQOPpWVByQjfCVpaguJHgu15q%2F5SBz8zDP6Lq%2BBjqkAVwEB5nWmHrfqF84VeAw84cy4FeAJFgpvA8BrDWfiwhRWxsYiZj0XTSwjM6MQ6xFrd1qRkHgKDRJnzq3kx7SMFgBcp%2Fl5nIS5S2q%2FQMMboJectnDZXn85FTU8KUElU42ctY6iZgayI0wI9iAL3pCFE%2FeLlC7cViXBgyBS0dZpFun727hqO5yBJIVFvU8rvP%2BzxMaTovBHQcDpw5mC2g6IQiYr6Lf&X-Amz-Signature=c723d5f6ca460cf2843117ba804584d26e1f6613d7912b1620a797b8ec47bbc9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
