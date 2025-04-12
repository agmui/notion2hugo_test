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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4TUHN5S%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDjgk5NvemtNt7%2BOR%2BdPNJ4Q4fhI5VFjWCIqPEA8uRYMAIgdeqIl9Lo%2FgjZBK8Jfbq3O3MjhHsdlfWwucnc0%2F8gzYwqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2FFFUfFePx6lDQ5tyrcA6A1pnsuE0wXVkqubTMQo0YqZCHRv7Bd%2FABR6vNJUGWcSiEwDLeBM1ov4ag8ubHgObz6%2F7zOV4ue9%2BQe%2Fk6mxCjW0saRN0Lh%2FRHZ2dAITB%2Blj7NXTJpwC3jAtE0lXBx9ohBgWreDZUkpPGYBP72GU%2FebS14GPDVtAzjdZY5egGPbWJL6dt2DLgZ39qOhxxzyRTwHJ%2BnMG5B3b6IJPVFBVVwsDq5JkdQQWJSx6yFVkCKkyozCqR18jp8SRbu2H7Up3%2BHO4bVAiYFD273ApGTnqHihZ7%2Bhx4%2FvyczYnOQtCidTA6uwSsqZthUCKbK7Xb9qarhv5%2F%2BjSIfeXVqfgKbRIP9mAZKUYMnnX%2FWBKOzZ7xqfJBc%2F0FxzuOOHdKVf6npmzg%2F48OxNHIfY9iCcDRgqZiJT2NWWzfNv6tslonPuAFLW0fK6JQt6G258RAlH1pG5OlE1dd6vrMnTKUdm%2FuinXBg%2FRZRLw9YWbMrkt59f7J8CsQ6mPPbk4Af%2F5mG%2BPQUdxKJ6eALTz1ZWyqniq3MmvZR3WysHiHQpBsQOkwzZfDBQ7t7raahnyQdFt7d4Sws%2FZ7KSXDwGBcyRhk0jVtdu8VmRMab0T8QE75nJ2xVeoI1ECOPlueePj9oBV2wjMLO3578GOqUBSKe8AHRIbHHea7wkwCpJjS5vAOxHCyFRUYNH1sMSvi3FvhI%2F1hkjbnkzCXR909uXs1Yhh13L%2FCEdpval9RtrwIejMSVyrRm0Y%2BmMpKSD8j8AwBoi%2FzKA4Sppr1EXWdTDbbsMcEaWyAs5CeL6nCODAB12nxpMspLTMrpPX38keChUG9PxbmasX%2BwkdsTc59XtDF2qKP8jHKR2GoS%2BIuHgeR01TcMs&X-Amz-Signature=aa78bb25b94805f9e48226be9924bbd7d2d2c57fa8001bebb73152a00e52dbc4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4TUHN5S%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDjgk5NvemtNt7%2BOR%2BdPNJ4Q4fhI5VFjWCIqPEA8uRYMAIgdeqIl9Lo%2FgjZBK8Jfbq3O3MjhHsdlfWwucnc0%2F8gzYwqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2FFFUfFePx6lDQ5tyrcA6A1pnsuE0wXVkqubTMQo0YqZCHRv7Bd%2FABR6vNJUGWcSiEwDLeBM1ov4ag8ubHgObz6%2F7zOV4ue9%2BQe%2Fk6mxCjW0saRN0Lh%2FRHZ2dAITB%2Blj7NXTJpwC3jAtE0lXBx9ohBgWreDZUkpPGYBP72GU%2FebS14GPDVtAzjdZY5egGPbWJL6dt2DLgZ39qOhxxzyRTwHJ%2BnMG5B3b6IJPVFBVVwsDq5JkdQQWJSx6yFVkCKkyozCqR18jp8SRbu2H7Up3%2BHO4bVAiYFD273ApGTnqHihZ7%2Bhx4%2FvyczYnOQtCidTA6uwSsqZthUCKbK7Xb9qarhv5%2F%2BjSIfeXVqfgKbRIP9mAZKUYMnnX%2FWBKOzZ7xqfJBc%2F0FxzuOOHdKVf6npmzg%2F48OxNHIfY9iCcDRgqZiJT2NWWzfNv6tslonPuAFLW0fK6JQt6G258RAlH1pG5OlE1dd6vrMnTKUdm%2FuinXBg%2FRZRLw9YWbMrkt59f7J8CsQ6mPPbk4Af%2F5mG%2BPQUdxKJ6eALTz1ZWyqniq3MmvZR3WysHiHQpBsQOkwzZfDBQ7t7raahnyQdFt7d4Sws%2FZ7KSXDwGBcyRhk0jVtdu8VmRMab0T8QE75nJ2xVeoI1ECOPlueePj9oBV2wjMLO3578GOqUBSKe8AHRIbHHea7wkwCpJjS5vAOxHCyFRUYNH1sMSvi3FvhI%2F1hkjbnkzCXR909uXs1Yhh13L%2FCEdpval9RtrwIejMSVyrRm0Y%2BmMpKSD8j8AwBoi%2FzKA4Sppr1EXWdTDbbsMcEaWyAs5CeL6nCODAB12nxpMspLTMrpPX38keChUG9PxbmasX%2BwkdsTc59XtDF2qKP8jHKR2GoS%2BIuHgeR01TcMs&X-Amz-Signature=49965f6b8c6ca71916a3737d42f466eddc0e74865157877148d741cb72953a53&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
