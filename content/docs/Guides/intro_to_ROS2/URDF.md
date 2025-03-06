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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE2JAMVZ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHPrnOHLqtc%2FdHAeruv7uHIvdTsbESOm0ZWh7rKjMAGAiEAxrxIoZOdgYA%2BmwmjF2rXSgaPHvrK25Aktzmhn4sAyTMq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDObtGyvnYYarvcVI%2BCrcA12qlcDm2TR2tJMqG6kdMsFIMdClfECfu9eHsTyvXrGfqhkuzR3uHp%2BDl8P9lmGddy6UIe3gbxfdpIH7GLRRgnJyiW6pPmEBTzWLjYllneTRDq6BV%2BhKFkEQOiDDpnaRLXf9ZJOhxp0tV%2BWpagoPMpawVT6x02fpICLeNz2RJYVRApwYQaUTEKKqEGotAFLS6edfUiGwx51RF3eyAea%2FVBYJkwJfaaI7Rvc2fsn4mG87JsJQ%2F7r%2BoMSHei%2FUqU6vz3P%2F%2F47ZuvEov3B3N3D2CnJ83nsJvYHMvxhKUDxFAk%2FAZQSMo%2BFRE8OpNAy1dj2pw6Avx6jvBi%2FbW5%2FV6AdKauVfKDvH4ILKk0NGvPIEW22ybv54%2BogHoXN%2Bk%2F4cR5v6rFV2Kua8uofd4QeGlcV04Lps0YUF6B82cd1I0h6sI5JpUxqkZ9SdlzOYAO7Rp5oPRY%2Be2oXwzE1c%2BYFVa9qRtw4%2FCX%2BgZrBngckjUt5pHixYgaGsklBSxtGAPOUe0XgGgWmsJbQXuDHxnmGWcutentRm5BwpVwtwbIbn9%2BrG5jLJBW2t%2BXNorG%2Blbj8oyZyV9iMGDnHG%2BIArIB%2Fd8PyWbsZBAbKutqmc4dqjXIJymjCWkfC6PUQSWjw9n96yMMD2pL4GOqUBYP9A5YGBqSbHEynpKkx0y4yiIy%2BmE84RTSTrn4jTfBx6oqem4GeU%2B1duUVrHFr9v846qf%2B65Pet2eOdf9RVQTDwsa8PK18R4t7CuPidg%2F7OJ6FsycO2BnEWnQLXSQ1b017wQDk46QLynBLXVIJIoNa%2BZSBAluB3UlUiJk396O98Kaq%2BkjP%2FoV9UN3xFQIvfCB1q8JkoNkUrqkYLgq0SQJsCRi%2Bx5&X-Amz-Signature=64d5732112707d1ba56720434b4e7654a68016fde5db21c90becfe7f498f6fb8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE2JAMVZ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHPrnOHLqtc%2FdHAeruv7uHIvdTsbESOm0ZWh7rKjMAGAiEAxrxIoZOdgYA%2BmwmjF2rXSgaPHvrK25Aktzmhn4sAyTMq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDObtGyvnYYarvcVI%2BCrcA12qlcDm2TR2tJMqG6kdMsFIMdClfECfu9eHsTyvXrGfqhkuzR3uHp%2BDl8P9lmGddy6UIe3gbxfdpIH7GLRRgnJyiW6pPmEBTzWLjYllneTRDq6BV%2BhKFkEQOiDDpnaRLXf9ZJOhxp0tV%2BWpagoPMpawVT6x02fpICLeNz2RJYVRApwYQaUTEKKqEGotAFLS6edfUiGwx51RF3eyAea%2FVBYJkwJfaaI7Rvc2fsn4mG87JsJQ%2F7r%2BoMSHei%2FUqU6vz3P%2F%2F47ZuvEov3B3N3D2CnJ83nsJvYHMvxhKUDxFAk%2FAZQSMo%2BFRE8OpNAy1dj2pw6Avx6jvBi%2FbW5%2FV6AdKauVfKDvH4ILKk0NGvPIEW22ybv54%2BogHoXN%2Bk%2F4cR5v6rFV2Kua8uofd4QeGlcV04Lps0YUF6B82cd1I0h6sI5JpUxqkZ9SdlzOYAO7Rp5oPRY%2Be2oXwzE1c%2BYFVa9qRtw4%2FCX%2BgZrBngckjUt5pHixYgaGsklBSxtGAPOUe0XgGgWmsJbQXuDHxnmGWcutentRm5BwpVwtwbIbn9%2BrG5jLJBW2t%2BXNorG%2Blbj8oyZyV9iMGDnHG%2BIArIB%2Fd8PyWbsZBAbKutqmc4dqjXIJymjCWkfC6PUQSWjw9n96yMMD2pL4GOqUBYP9A5YGBqSbHEynpKkx0y4yiIy%2BmE84RTSTrn4jTfBx6oqem4GeU%2B1duUVrHFr9v846qf%2B65Pet2eOdf9RVQTDwsa8PK18R4t7CuPidg%2F7OJ6FsycO2BnEWnQLXSQ1b017wQDk46QLynBLXVIJIoNa%2BZSBAluB3UlUiJk396O98Kaq%2BkjP%2FoV9UN3xFQIvfCB1q8JkoNkUrqkYLgq0SQJsCRi%2Bx5&X-Amz-Signature=4878833e79795349a37a797a1bf80acd85345f8634c950c48caa6a52339a3385&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
