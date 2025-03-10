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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQHYRUT5%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIAIJhthbxn59hZ6bifcLjYdUSOMNV06cNbn7dhtHeK2mAiBJiVx86bcm6eYxA5b4PUIWTuohYVNVZ7RpRqJFEvg2JSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1icuJMKCTUY87CoJKtwDGVV0c8tkwN83ifQKqR9ahkzXjCR0iaZninSiQh8%2F%2FpPB6MVZL8FoOXqwyRLgXOIDcAWuLtyC65%2FBlCnRYLc7xbDyicmP6eJwXe4vy54FcfZxXZZ%2BTGqnP7x0eYjBzy4UmIGlXNFk5NL2xyjm0TRPrfrCElv1e5S%2BGLh%2BzW%2FCmakt1sNKcHfYORDYlXr4yxrxSm5grXGN8iR5IjhbbMFjdp3KVAtVPFX51ajNi2Wi53NlBDmjzJd2rF69Hhqj2SYq8FNZDc3quqGMYTgwUJAKf1%2BrmaWOirDWkfvBWRm82EoPgso9qmasRH08LhgOhGD6BJysrBfcWj2u9rVeNjHnRNnIj3MS1NG%2BP33KbdTYnXm3vokgj6KvduDKzrEKZ4udAhcVX%2B7qc9GUVBnQjJD4QY9IzbQ2d2HB4QlQlmbSQNa25EYzMvjEhOCKpX%2Fdvl58uAKDtVYZi6MU%2B4eMrRxmfH43DQgVd8GlYFjOC7ULK%2Bn7oyUDDMifE8AALNekk0mqWdRIikvp1zSGHwIl9kCzQLjy0yGOJf1N93Cle63fcEh%2FnnlBOcw4DG%2B0ocaNnN90hbRsM64rIKYv7uOb8mW%2Fnwzt2VWT0km3OmRgQYNHABNujPvZ9n%2F73P6X4zMwnPu4vgY6pgHeA%2B37mtRJObSdxqMSGAfnr1RivRHJHeKmf00P3A%2FucxmhNcOu6w5ackrmrLI0bwpe66Dkq69AZZMehBRMi4SJEkIvI3eCNL%2BDofYbAq8YqT6iHA%2BmtfPV0kaw%2F2oga9S%2Bwgnu2f%2F5pGSRbFVbuCdmT9EyI9EiQ32Z7k%2FdJx2Kup2trfxtrD3Q3jALrl%2BWpNrhvuvsz1h6CYBERb7qdUngXox0ns4y&X-Amz-Signature=a11af40e3e7da99eeeaaf92c445dd722e788db0feaef2fd33a37152e21462a08&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQHYRUT5%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIAIJhthbxn59hZ6bifcLjYdUSOMNV06cNbn7dhtHeK2mAiBJiVx86bcm6eYxA5b4PUIWTuohYVNVZ7RpRqJFEvg2JSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1icuJMKCTUY87CoJKtwDGVV0c8tkwN83ifQKqR9ahkzXjCR0iaZninSiQh8%2F%2FpPB6MVZL8FoOXqwyRLgXOIDcAWuLtyC65%2FBlCnRYLc7xbDyicmP6eJwXe4vy54FcfZxXZZ%2BTGqnP7x0eYjBzy4UmIGlXNFk5NL2xyjm0TRPrfrCElv1e5S%2BGLh%2BzW%2FCmakt1sNKcHfYORDYlXr4yxrxSm5grXGN8iR5IjhbbMFjdp3KVAtVPFX51ajNi2Wi53NlBDmjzJd2rF69Hhqj2SYq8FNZDc3quqGMYTgwUJAKf1%2BrmaWOirDWkfvBWRm82EoPgso9qmasRH08LhgOhGD6BJysrBfcWj2u9rVeNjHnRNnIj3MS1NG%2BP33KbdTYnXm3vokgj6KvduDKzrEKZ4udAhcVX%2B7qc9GUVBnQjJD4QY9IzbQ2d2HB4QlQlmbSQNa25EYzMvjEhOCKpX%2Fdvl58uAKDtVYZi6MU%2B4eMrRxmfH43DQgVd8GlYFjOC7ULK%2Bn7oyUDDMifE8AALNekk0mqWdRIikvp1zSGHwIl9kCzQLjy0yGOJf1N93Cle63fcEh%2FnnlBOcw4DG%2B0ocaNnN90hbRsM64rIKYv7uOb8mW%2Fnwzt2VWT0km3OmRgQYNHABNujPvZ9n%2F73P6X4zMwnPu4vgY6pgHeA%2B37mtRJObSdxqMSGAfnr1RivRHJHeKmf00P3A%2FucxmhNcOu6w5ackrmrLI0bwpe66Dkq69AZZMehBRMi4SJEkIvI3eCNL%2BDofYbAq8YqT6iHA%2BmtfPV0kaw%2F2oga9S%2Bwgnu2f%2F5pGSRbFVbuCdmT9EyI9EiQ32Z7k%2FdJx2Kup2trfxtrD3Q3jALrl%2BWpNrhvuvsz1h6CYBERb7qdUngXox0ns4y&X-Amz-Signature=d2f3476f3f13859a6c3551e5eb0a675d1fd9f9c4ea910359a8f19fbf5ed7e6ce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
