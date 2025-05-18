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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R37MQDUL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwmaodbTg7SJdKJnwhaG3dAht%2F0T3zRd%2FNPRsmhFegtAIhANGoWGpMoVpbiQ2B4%2Bccelv66frhEOlJfUM%2F9jiYFV1eKv8DCHsQABoMNjM3NDIzMTgzODA1Igw7Dv6vVdb0t%2B8keYYq3AOJEuYZCCiJCFk7n%2F6%2BlALXRGSyk%2BKf%2F3GDbASNaxtluoArb1DT%2B7GRSYwxdw7NTxo%2BvaFzm0s%2BIYiWoD2G%2BB67JabZHcPzrRgs%2FsmplXdJFFnrow6GvrGKG66%2BL2L7fp0%2BE52h4yEN42sm4CCHRc3HY%2FUbeGSXZVIEVoB9rhoqWjBdjmO6e4urQkFx0hBX7vUur1l9eXKj5XnPKqt%2FfmnrT4Jd161XGDova%2FwBlBeCbz5Qvs6AOlsOSJPoQbIO7TNZKllfR5SUee5KSqLnkrVzckg%2FQ%2BG9%2F2Q5%2FRPLxNwmtViBd4Q%2F29feemo6SsQSvrDqIivnPdISjMjwSoRigLC0B%2BEOzkOUYI1wh%2BThxkCAwwSOy22f4MME21GMCwz0yGbgi0Uu7QG7M92pw4MZazpIa6oOLusV87CsANQgvSYlAy8X6qZCdUPgAHrfHxJT0xdVOqQTDYJYLMYVd8fei7LOL6ff8hYnSRlSLuiIJjJwgcUaNJHOtHX0IO0bRwtdtYVs5VRH6X1jTB7dQhsbPlVMOqeWs0l3azTBD4Q8JAu5sruNdjcfH6Zd8JE%2FzVLYk5mT2wsDSYnXZGFkNX%2BVuGArWtQSXxFvusI6n4fW0JWhghaUqmKTRL7bi8zxJjDgwajBBjqkAU5Y6062jpF8Kev4pA4WOuK45C8lGN8OG4L2YHr6iLfXQEvePF%2FW%2B0DusjHxWQbZCBiaqqJtej2Dfa9sqHMfzCY5761rnkNd5PatMFLRXq631xQP2yddg37ihzKYCsU7qXGkRAct3Dhb8YHZqaepn2U4O48GwmQSUf4f0Qtuvk9r0XM2pr8H9MyXaJNK0eP%2Bc8xfSzFGo8EtoTi7jAxHOtPxWJ8c&X-Amz-Signature=6e3f43dee811c5cc12a8b573ca60a6590dbb5d730ee5e9c6d817ec85f7f305df&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R37MQDUL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwmaodbTg7SJdKJnwhaG3dAht%2F0T3zRd%2FNPRsmhFegtAIhANGoWGpMoVpbiQ2B4%2Bccelv66frhEOlJfUM%2F9jiYFV1eKv8DCHsQABoMNjM3NDIzMTgzODA1Igw7Dv6vVdb0t%2B8keYYq3AOJEuYZCCiJCFk7n%2F6%2BlALXRGSyk%2BKf%2F3GDbASNaxtluoArb1DT%2B7GRSYwxdw7NTxo%2BvaFzm0s%2BIYiWoD2G%2BB67JabZHcPzrRgs%2FsmplXdJFFnrow6GvrGKG66%2BL2L7fp0%2BE52h4yEN42sm4CCHRc3HY%2FUbeGSXZVIEVoB9rhoqWjBdjmO6e4urQkFx0hBX7vUur1l9eXKj5XnPKqt%2FfmnrT4Jd161XGDova%2FwBlBeCbz5Qvs6AOlsOSJPoQbIO7TNZKllfR5SUee5KSqLnkrVzckg%2FQ%2BG9%2F2Q5%2FRPLxNwmtViBd4Q%2F29feemo6SsQSvrDqIivnPdISjMjwSoRigLC0B%2BEOzkOUYI1wh%2BThxkCAwwSOy22f4MME21GMCwz0yGbgi0Uu7QG7M92pw4MZazpIa6oOLusV87CsANQgvSYlAy8X6qZCdUPgAHrfHxJT0xdVOqQTDYJYLMYVd8fei7LOL6ff8hYnSRlSLuiIJjJwgcUaNJHOtHX0IO0bRwtdtYVs5VRH6X1jTB7dQhsbPlVMOqeWs0l3azTBD4Q8JAu5sruNdjcfH6Zd8JE%2FzVLYk5mT2wsDSYnXZGFkNX%2BVuGArWtQSXxFvusI6n4fW0JWhghaUqmKTRL7bi8zxJjDgwajBBjqkAU5Y6062jpF8Kev4pA4WOuK45C8lGN8OG4L2YHr6iLfXQEvePF%2FW%2B0DusjHxWQbZCBiaqqJtej2Dfa9sqHMfzCY5761rnkNd5PatMFLRXq631xQP2yddg37ihzKYCsU7qXGkRAct3Dhb8YHZqaepn2U4O48GwmQSUf4f0Qtuvk9r0XM2pr8H9MyXaJNK0eP%2Bc8xfSzFGo8EtoTi7jAxHOtPxWJ8c&X-Amz-Signature=a425085b8b919733e48c1435e2ea85062d77787fd8ab96b56b7355150e0c4bab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
