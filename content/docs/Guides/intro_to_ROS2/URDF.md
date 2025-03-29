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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGP3KENU%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDMIaT2iJgsDmifv%2BsVH3rON1YiDReaR%2FMsEHj%2FeEGw2gIhAKNO3oGyCO872Ufz8KyCcVoatLL6dUJ%2BypqYaypwBUDeKv8DCHAQABoMNjM3NDIzMTgzODA1IgwHOariw5Uz9Df0Muoq3ANkVqslC3N0OylvnUx0EEQIYuuwTCES6IIoArGYHgk6FTRbmmWsopjUCfh0XIOFqYWsBOOJqA3G9VGp0%2B%2F2c6T2vZHiENEbjy8UOfUkEvMcwYCuqrMAnjB1wtN7yCp%2BweVOKw69g6kJyZj2uBoWoi%2FSDQ86z4jD%2F4uZPxzjTLdmy3wYz09J0fKxD0f%2F7Y1eVXzcnkWntQZjzg1kQgE04fY6bzZhbkpbxTJgOhXuJxK24xJat4A8YTXNYNOh6AXhr6pLl4Kez0PEKFhY9EB3KZ1f2Xz4Xw9Lbp1pCgrfwvG3aa%2Fs4XOhe5G9%2BZdMmRMl6x%2FOoR%2FT%2BpzIHEOs2zb0jgBR5hLnGvoD7U4gq8IFwzDb%2F84oEeADx2HMmVSDjetaYeeYSr9gQPr67rBTf8CRbKBzwBsmfS1JCABARzkHVKXpbO4QLLnlzL%2BBsrcRPQtT4n5eSQvD320ZLF%2BdSwCQdbFDtH%2BENQ1ucJuoiJnqCfw4EZ16jSDwViSOSGGLpOg3AAA2OtA2%2BtfEBguAsJfo42TAjmiY8VqsYXynz90DXnyfHHj43cxNymMLxhLoTaZVme6vC9bXxJweYmC9ytFPhuBYEfdsEWrehofEzEpSUGJ08tx%2B2pHeUErkEDb77zCgq56%2FBjqkAbZpshlUrTJmjl6NdhLHxhNVfzmyMKuUF8LMiBbjr003tC%2BbCv8GORe6oqy6qicuj1FVP9za9qLszO2z9FKrVzZs0McDfU6fqe%2Bzw3vLq0WPgShhXwibUss1QIl%2FTwraFq%2Fn0i494R8ILrlyAZbH4DggqDLEnbTB%2F6L9FhcZdP%2FNLye2sIQvBc0Jx7luTv%2F4xmDhaXvQUf0jwt2IUT6WVQAhXH8a&X-Amz-Signature=d7410cac36e5f8b76fbb4f935e623948e91a4defc5e1476e3e36880ae21897f0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGP3KENU%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDMIaT2iJgsDmifv%2BsVH3rON1YiDReaR%2FMsEHj%2FeEGw2gIhAKNO3oGyCO872Ufz8KyCcVoatLL6dUJ%2BypqYaypwBUDeKv8DCHAQABoMNjM3NDIzMTgzODA1IgwHOariw5Uz9Df0Muoq3ANkVqslC3N0OylvnUx0EEQIYuuwTCES6IIoArGYHgk6FTRbmmWsopjUCfh0XIOFqYWsBOOJqA3G9VGp0%2B%2F2c6T2vZHiENEbjy8UOfUkEvMcwYCuqrMAnjB1wtN7yCp%2BweVOKw69g6kJyZj2uBoWoi%2FSDQ86z4jD%2F4uZPxzjTLdmy3wYz09J0fKxD0f%2F7Y1eVXzcnkWntQZjzg1kQgE04fY6bzZhbkpbxTJgOhXuJxK24xJat4A8YTXNYNOh6AXhr6pLl4Kez0PEKFhY9EB3KZ1f2Xz4Xw9Lbp1pCgrfwvG3aa%2Fs4XOhe5G9%2BZdMmRMl6x%2FOoR%2FT%2BpzIHEOs2zb0jgBR5hLnGvoD7U4gq8IFwzDb%2F84oEeADx2HMmVSDjetaYeeYSr9gQPr67rBTf8CRbKBzwBsmfS1JCABARzkHVKXpbO4QLLnlzL%2BBsrcRPQtT4n5eSQvD320ZLF%2BdSwCQdbFDtH%2BENQ1ucJuoiJnqCfw4EZ16jSDwViSOSGGLpOg3AAA2OtA2%2BtfEBguAsJfo42TAjmiY8VqsYXynz90DXnyfHHj43cxNymMLxhLoTaZVme6vC9bXxJweYmC9ytFPhuBYEfdsEWrehofEzEpSUGJ08tx%2B2pHeUErkEDb77zCgq56%2FBjqkAbZpshlUrTJmjl6NdhLHxhNVfzmyMKuUF8LMiBbjr003tC%2BbCv8GORe6oqy6qicuj1FVP9za9qLszO2z9FKrVzZs0McDfU6fqe%2Bzw3vLq0WPgShhXwibUss1QIl%2FTwraFq%2Fn0i494R8ILrlyAZbH4DggqDLEnbTB%2F6L9FhcZdP%2FNLye2sIQvBc0Jx7luTv%2F4xmDhaXvQUf0jwt2IUT6WVQAhXH8a&X-Amz-Signature=6df42c796fb085046425e9849e35b2f8de8d0a5a44a6a8d32c23333b0383b756&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
