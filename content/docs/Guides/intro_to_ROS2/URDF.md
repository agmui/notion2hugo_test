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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIATJXKJ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T004011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCUll8z18CYeEeEcGj8NWx0kEdVKD5t51uKZ2H4mLKGcgIhAJHRlKigeV6PKFz%2BjVdFIZPRPxuUxL5fEJQDK2ois6ZtKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO9ZW61YLZKAJqdJ8q3APc3xxyTHcflc9qDViZSYvSQZ7lEDamYQP3QauxYN9c%2FIIBRa%2BT%2F9bZ2mTihFlSelS6iyzdvmSI4d1PLcOp7dKB4eAAKAqz5DeaWcm42MOBUyf86%2Bick%2FRdYZDvnm8styqmA4FwKziFU%2BBkbGq2%2FtOruZOS03X8Na7X4IxP%2Brem1xEJ303T5G70E5LOFX4uJd67tHg8cgBac5m7kAavOeBC2d1FPm4yYwaFS64zaOtvooTs8Ju%2BpnSxWgEXjSlxl3TsaYP%2BeCrBtq%2FftqkXJQIm4dMcC5cKYXpdkwMLo7FBIwySWG2tVfa2qJAd4QxL9edw2dGn55wDBeUePc7%2B2IFMrz4m2O8N9JveXEKKHxkQ9e7ubLz90Blb56EoaegDh6rSkjV8VGDDj8BChEIEi797x1LOy2CeKfAiJIVPV7uBlK2ZyC38%2FouYoVorrcw8vr91r6nJHL%2FHe0PEWJlyzOvJgOGF90GdJlo8NaNVakK1Svhaa7MzpSLRDaOqOFxK8SqL6hDABiKzED4sLPeojuaAiRT2Mc4mGz%2F4IuPvsVa3q6ppW1iEmjWy76tapYhsHbV01mqiyKNq9zzQ7ASnEs9Azvv0wNsukWeDbjIVpVmWkxuAto4W8yOr0nhsbjCAu5vABjqkAZNKVkgmAC5cZecmy2UGYDZK7Tw00bLFkZPFJsauuDAnF7%2FcATkYeVFW2CQj%2Fcak6QC3sNUd4W9%2FXCb16ZW8XKQRzY9bN73kcox5uzkhHbdnMqyMK1iC6EILNN8RQOCQlvlId85K%2F8jpVap%2FKYcxqIdcs4SqKFJ6dXlJpK6VNZXl9%2BKB3ju34mqev4NAMRRHL8xsZZ%2BlmmiCVcLZn0b78PR3nae4&X-Amz-Signature=68e5b57a6260344adf9c3339e6b86ec971b86eba1756753f9f43973e924839c3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIATJXKJ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T004011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCUll8z18CYeEeEcGj8NWx0kEdVKD5t51uKZ2H4mLKGcgIhAJHRlKigeV6PKFz%2BjVdFIZPRPxuUxL5fEJQDK2ois6ZtKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO9ZW61YLZKAJqdJ8q3APc3xxyTHcflc9qDViZSYvSQZ7lEDamYQP3QauxYN9c%2FIIBRa%2BT%2F9bZ2mTihFlSelS6iyzdvmSI4d1PLcOp7dKB4eAAKAqz5DeaWcm42MOBUyf86%2Bick%2FRdYZDvnm8styqmA4FwKziFU%2BBkbGq2%2FtOruZOS03X8Na7X4IxP%2Brem1xEJ303T5G70E5LOFX4uJd67tHg8cgBac5m7kAavOeBC2d1FPm4yYwaFS64zaOtvooTs8Ju%2BpnSxWgEXjSlxl3TsaYP%2BeCrBtq%2FftqkXJQIm4dMcC5cKYXpdkwMLo7FBIwySWG2tVfa2qJAd4QxL9edw2dGn55wDBeUePc7%2B2IFMrz4m2O8N9JveXEKKHxkQ9e7ubLz90Blb56EoaegDh6rSkjV8VGDDj8BChEIEi797x1LOy2CeKfAiJIVPV7uBlK2ZyC38%2FouYoVorrcw8vr91r6nJHL%2FHe0PEWJlyzOvJgOGF90GdJlo8NaNVakK1Svhaa7MzpSLRDaOqOFxK8SqL6hDABiKzED4sLPeojuaAiRT2Mc4mGz%2F4IuPvsVa3q6ppW1iEmjWy76tapYhsHbV01mqiyKNq9zzQ7ASnEs9Azvv0wNsukWeDbjIVpVmWkxuAto4W8yOr0nhsbjCAu5vABjqkAZNKVkgmAC5cZecmy2UGYDZK7Tw00bLFkZPFJsauuDAnF7%2FcATkYeVFW2CQj%2Fcak6QC3sNUd4W9%2FXCb16ZW8XKQRzY9bN73kcox5uzkhHbdnMqyMK1iC6EILNN8RQOCQlvlId85K%2F8jpVap%2FKYcxqIdcs4SqKFJ6dXlJpK6VNZXl9%2BKB3ju34mqev4NAMRRHL8xsZZ%2BlmmiCVcLZn0b78PR3nae4&X-Amz-Signature=96b27d53baab39d56c28c06be89146033b801a29124025d43d7f2a5f152532b6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
