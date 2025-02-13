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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JW52QBR%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkX4Wf61pvobIXafDmc5exq1PxcfqeZrwZBmIlK%2BrxYgIgOBa8dIEJE1R4jJAL7oMsCqU6yOjkbAEquJ2mLOpEZmQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDCGVMpznhwxBOYv5eircA94DRPWpoovV10Jy5sWs9tKycDksGjJeigFfbPRY%2BZrZofzUVPNAuN7AZASbMqI%2B1BQ%2FmPFjIwg8WLV9I%2F9tythMm3PSsd%2B7md4HKU478hOMsUolz9WWW8IqD1dajeX%2BPFpdTBPV8G6M2APtA8wbE3XfAWHhCf1q8GILlWAfJClVvMOjEpWcHI%2Fe7ur2cTIRlJgr5hniVeDp4i8w6DBNCLX9U7g9nPBq54%2BMjF1bWyN11oo7dp3CHM5vu%2FucrBBbKd9qTzK%2BoQO9LIryb7QJloIa8hX8m5%2FkkJ5GtYoM5AVLnjyzNQN6n2Y87JPg7b4JvkKjqleET4CLW42phaLYKTqHVheAOWiXQZb6Bva1n7LEIUbtR52mhgP73ESg2A6eTwaBq0h1IvZo7PS64v%2BtD%2Fq3z%2Fy9Bvfk95k8HlG8Vhm87XRQQDsjDrhyBI7oa%2FIr7DWbFaz6MTGVibdtobXkigUJ1RwC%2B7jbWW2kovjhcc%2BKV65iuKl9NjzEM85P9WuHyp5jfSUEQjRCBQB6j%2BQTd9GmGcXZO6UKkloURJP6v7wNACxu9jvIQqAoR93i8K7ZZ5XwKJjOJuGTwZAXyuMX3%2FBd%2FwbLl%2FnAXZayPleQH7muXA4AvHPjEP%2FPJ4TPMKy%2BuL0GOqUBOGa05gp4e140lHqJmwfS3dPdQQJ7oM29YyuOGJV43IUmJ6ywKdPYPNcaTuyAC7i4rxzAqhfkTbmBEjcB2iADnrac8BE4DJm0oGWp22mnJJqtvZCNqNp1QaMsiqFIOgWKvGtK0YHhcAOs2kUnUs4m7AF81tZZxJCaaB03MBPfsK216BPEF6qUOUlsiMo5nkfmVN6GDcn2jV%2FogjHRT8tQyKlsrp1L&X-Amz-Signature=4dab7e2d28c6f5157ca98ed9e313b45e04551a481b0c5ef726d321b82527f6e9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JW52QBR%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkX4Wf61pvobIXafDmc5exq1PxcfqeZrwZBmIlK%2BrxYgIgOBa8dIEJE1R4jJAL7oMsCqU6yOjkbAEquJ2mLOpEZmQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDCGVMpznhwxBOYv5eircA94DRPWpoovV10Jy5sWs9tKycDksGjJeigFfbPRY%2BZrZofzUVPNAuN7AZASbMqI%2B1BQ%2FmPFjIwg8WLV9I%2F9tythMm3PSsd%2B7md4HKU478hOMsUolz9WWW8IqD1dajeX%2BPFpdTBPV8G6M2APtA8wbE3XfAWHhCf1q8GILlWAfJClVvMOjEpWcHI%2Fe7ur2cTIRlJgr5hniVeDp4i8w6DBNCLX9U7g9nPBq54%2BMjF1bWyN11oo7dp3CHM5vu%2FucrBBbKd9qTzK%2BoQO9LIryb7QJloIa8hX8m5%2FkkJ5GtYoM5AVLnjyzNQN6n2Y87JPg7b4JvkKjqleET4CLW42phaLYKTqHVheAOWiXQZb6Bva1n7LEIUbtR52mhgP73ESg2A6eTwaBq0h1IvZo7PS64v%2BtD%2Fq3z%2Fy9Bvfk95k8HlG8Vhm87XRQQDsjDrhyBI7oa%2FIr7DWbFaz6MTGVibdtobXkigUJ1RwC%2B7jbWW2kovjhcc%2BKV65iuKl9NjzEM85P9WuHyp5jfSUEQjRCBQB6j%2BQTd9GmGcXZO6UKkloURJP6v7wNACxu9jvIQqAoR93i8K7ZZ5XwKJjOJuGTwZAXyuMX3%2FBd%2FwbLl%2FnAXZayPleQH7muXA4AvHPjEP%2FPJ4TPMKy%2BuL0GOqUBOGa05gp4e140lHqJmwfS3dPdQQJ7oM29YyuOGJV43IUmJ6ywKdPYPNcaTuyAC7i4rxzAqhfkTbmBEjcB2iADnrac8BE4DJm0oGWp22mnJJqtvZCNqNp1QaMsiqFIOgWKvGtK0YHhcAOs2kUnUs4m7AF81tZZxJCaaB03MBPfsK216BPEF6qUOUlsiMo5nkfmVN6GDcn2jV%2FogjHRT8tQyKlsrp1L&X-Amz-Signature=84f18dd1ee7c77e3c7ef8ac8255c686ddefb8d7373e248a360fa2a09c020e58b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
