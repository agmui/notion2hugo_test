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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLJLS6J3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDjOknP2mefMQreS9y4Jiq%2BIJJyIm46E331krMUwHG%2BUQIgDA4grj7BiB08IlKzUutVHOp%2F1fpl8YRQtOY2gFgUwYAqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONnDJXgGVvT8aAuhSrcAwB5bnI%2BEI%2F3cOTjAMXFhPMr1XU%2Bz2QexfiNzflOL4IU6pPssRwlt87sXRSsLzPd2yyrB5b4GaxLGN6JoiCPLzZwBfbjfqIsXDwtzydrQ%2BdCRIepevHYiYjh6%2BNn8OCyfAB2wNzDfqWyTTEG9J%2F%2Bvyy54V5lHhkrG%2FDpjRre7CSJz5Unq4I50oEkd2%2F9r5Mtvr5PPmdjJvZ73YD4pqazKA3y3j1XEJMnwMI84POKy1URSg2JHILIX9uuIjpjJgamf2pXcyilR9zNXj7jyYF%2BKh2DVpQNGCIijbVijHgYsl8e1OFrEYqUzdg4tFzt33rvDQqPw7BOVU9wsR%2BNdd5ytM3%2BNg5xrQTqYzMqu7Vct2xcHieYbSSPDVbbLiH%2BYpRmvClPr7SaTsbsAn8xsbcFeSHPsuTc8d5VNvag5skHAQ0X2dVpy7pa%2BkEEDOsLhexZz0%2F69Jw3lR2LT9W%2F2R%2BeeuCY8EpepO6qfiy4n5OGLhidEm%2Fx5W7RQltF40jyXOw7utYvPpe%2BKDCwhiTmbp7WjcCaTKerfthgnJkSNoc99sMR7PyFEHB1CYPz5EXdCcMlLHm8nEvlfoNTOKdF5MONwcAlYHwIpxO0q6%2BlRpkiWDVXOQXP7nbfmPngUHbfMPTSmcAGOqUBtPOJ%2BOtA7cMQ1IYeynsjlat3ZM%2FV3mPVVYW7T1IVLZef85I07UZUpO6Soub1XKgvCdzLq7pfzljvtr0svk2o7vypKh%2FH6x0SWbc1ctxFSTJ%2FCWitVdIAIqf80dqeHrMKl%2BeFrEi%2F5tJqTVRetibsXXZfAvXT4HHJMlz5LmwMZ4gwarO5SUHYQxUThcHH%2F9eZ9uf8oxSjP8NgV3kFFR0ARwcDyWsS&X-Amz-Signature=464fd70bfe385f6c1be7e7c5030a3cf141d761755f5dd00fc7915c41f210b682&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLJLS6J3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDjOknP2mefMQreS9y4Jiq%2BIJJyIm46E331krMUwHG%2BUQIgDA4grj7BiB08IlKzUutVHOp%2F1fpl8YRQtOY2gFgUwYAqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONnDJXgGVvT8aAuhSrcAwB5bnI%2BEI%2F3cOTjAMXFhPMr1XU%2Bz2QexfiNzflOL4IU6pPssRwlt87sXRSsLzPd2yyrB5b4GaxLGN6JoiCPLzZwBfbjfqIsXDwtzydrQ%2BdCRIepevHYiYjh6%2BNn8OCyfAB2wNzDfqWyTTEG9J%2F%2Bvyy54V5lHhkrG%2FDpjRre7CSJz5Unq4I50oEkd2%2F9r5Mtvr5PPmdjJvZ73YD4pqazKA3y3j1XEJMnwMI84POKy1URSg2JHILIX9uuIjpjJgamf2pXcyilR9zNXj7jyYF%2BKh2DVpQNGCIijbVijHgYsl8e1OFrEYqUzdg4tFzt33rvDQqPw7BOVU9wsR%2BNdd5ytM3%2BNg5xrQTqYzMqu7Vct2xcHieYbSSPDVbbLiH%2BYpRmvClPr7SaTsbsAn8xsbcFeSHPsuTc8d5VNvag5skHAQ0X2dVpy7pa%2BkEEDOsLhexZz0%2F69Jw3lR2LT9W%2F2R%2BeeuCY8EpepO6qfiy4n5OGLhidEm%2Fx5W7RQltF40jyXOw7utYvPpe%2BKDCwhiTmbp7WjcCaTKerfthgnJkSNoc99sMR7PyFEHB1CYPz5EXdCcMlLHm8nEvlfoNTOKdF5MONwcAlYHwIpxO0q6%2BlRpkiWDVXOQXP7nbfmPngUHbfMPTSmcAGOqUBtPOJ%2BOtA7cMQ1IYeynsjlat3ZM%2FV3mPVVYW7T1IVLZef85I07UZUpO6Soub1XKgvCdzLq7pfzljvtr0svk2o7vypKh%2FH6x0SWbc1ctxFSTJ%2FCWitVdIAIqf80dqeHrMKl%2BeFrEi%2F5tJqTVRetibsXXZfAvXT4HHJMlz5LmwMZ4gwarO5SUHYQxUThcHH%2F9eZ9uf8oxSjP8NgV3kFFR0ARwcDyWsS&X-Amz-Signature=a505f7b37332f0a691d1b9379cef52baebad6d20b4517182c1a319a215f904ba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
