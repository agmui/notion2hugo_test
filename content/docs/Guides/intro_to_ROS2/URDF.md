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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WCHIGA%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T131704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIEYyRTgq5ZMbPdG2rhLq6gkjSXjA%2FxrgNfFqvzZHe6TaAiBb6UgmULBm37cGdHIpuVo3NacPE2WFiYEDfZ%2FyLV4SViqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtrYgIWLjMV8pkKvOKtwD7kvwX9bgQitxOSCrDgCXsFWYWlG0Obywrp6KcdZmMEzNfxLOsd89cnDFUGecRqIRrKM6j93aFoOlP6ipLY%2FJ7HJwCk0r4faLqhVL7OKlZBvXzifq1wUghR4gyCCurqjdIqcNS8W0%2Bra3A1ze90Ya9SvP4R%2B4QFjvsm%2BM0Tk8ssywgXAJut0cICIDYptMktqWzt4lHAZNB3oXykOTQWOox30YrgbA7RWZjw9YtoC1Yj7%2FE0vySHrzWt36dOuPRdF5z48H3uH2QPf9Uyg1t6M1xwCK2WBnzcp9PWRUYtvU76RzDf9SAk2AQbkAl2Yz8MqDxfS564%2FWn9ENFELxhMltF3wOfrlB3%2Fw7SAFFQm0pXb9iUwpHgAl5ixGRUZqFox4Np%2FuC0bSkpkcWRItQMjn%2B2jAAFi773T0dWVU2NTRcjDA5Zj4kMafRA8ilKyIfY1vG3tleVUCxpGSUIT4547x7q0741BfsTL81gKD3UeO9jmbEle%2F0IwS5MVIaM12CWLx1XkUlFDcHO6XzYg1t9C0O6nCC74bGZfisk46wLjXJO1IdGSNyJIMIzHrvtC4vvxDIdxTxtqeVv3f5H7%2BJ7ngT5btzmWMStH18%2Bm4XO3LBjj00hudJGYmhxL0uaaMwl73uvwY6pgHDfnepICAfct%2BPd%2BV9KC62SVMWdoDFexABG4m0oFCPUh7Ceilm7UR%2B3vNVH4v8AhuVPl6wVUkxOmINGGWMBOprDAOLrHrw50mcHkfzndJso0VobD6tJX820w9LtTgj6Ya1njLEshXJOSnEKPsaZOkZRhFiZt5OvC0pxtdYq7UePvwoE50Tg9FYqOVH4enw1knzWoIayBbyuwLnUFO9BsLzk2TmU8wq&X-Amz-Signature=2d142c25e933b5fc1871087c54ad092f830764409846619d2c7b68d14bcfbfbf&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WCHIGA%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T131704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIEYyRTgq5ZMbPdG2rhLq6gkjSXjA%2FxrgNfFqvzZHe6TaAiBb6UgmULBm37cGdHIpuVo3NacPE2WFiYEDfZ%2FyLV4SViqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtrYgIWLjMV8pkKvOKtwD7kvwX9bgQitxOSCrDgCXsFWYWlG0Obywrp6KcdZmMEzNfxLOsd89cnDFUGecRqIRrKM6j93aFoOlP6ipLY%2FJ7HJwCk0r4faLqhVL7OKlZBvXzifq1wUghR4gyCCurqjdIqcNS8W0%2Bra3A1ze90Ya9SvP4R%2B4QFjvsm%2BM0Tk8ssywgXAJut0cICIDYptMktqWzt4lHAZNB3oXykOTQWOox30YrgbA7RWZjw9YtoC1Yj7%2FE0vySHrzWt36dOuPRdF5z48H3uH2QPf9Uyg1t6M1xwCK2WBnzcp9PWRUYtvU76RzDf9SAk2AQbkAl2Yz8MqDxfS564%2FWn9ENFELxhMltF3wOfrlB3%2Fw7SAFFQm0pXb9iUwpHgAl5ixGRUZqFox4Np%2FuC0bSkpkcWRItQMjn%2B2jAAFi773T0dWVU2NTRcjDA5Zj4kMafRA8ilKyIfY1vG3tleVUCxpGSUIT4547x7q0741BfsTL81gKD3UeO9jmbEle%2F0IwS5MVIaM12CWLx1XkUlFDcHO6XzYg1t9C0O6nCC74bGZfisk46wLjXJO1IdGSNyJIMIzHrvtC4vvxDIdxTxtqeVv3f5H7%2BJ7ngT5btzmWMStH18%2Bm4XO3LBjj00hudJGYmhxL0uaaMwl73uvwY6pgHDfnepICAfct%2BPd%2BV9KC62SVMWdoDFexABG4m0oFCPUh7Ceilm7UR%2B3vNVH4v8AhuVPl6wVUkxOmINGGWMBOprDAOLrHrw50mcHkfzndJso0VobD6tJX820w9LtTgj6Ya1njLEshXJOSnEKPsaZOkZRhFiZt5OvC0pxtdYq7UePvwoE50Tg9FYqOVH4enw1knzWoIayBbyuwLnUFO9BsLzk2TmU8wq&X-Amz-Signature=4a9d77202571483e4b3a86acd0e8f89728bc829dc37cf1bb7ecab9fd6c827a89&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
