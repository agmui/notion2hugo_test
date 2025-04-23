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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677RETLZ5%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDniuxQGJeQ81fx7Bq%2BTAFhk%2FR8YbbfGqucXfuD9pOQigIge93NdYQgUDN88RffjZ8Kecs4vb1nY2MCYKtHWFLN3z8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJtNZs5y6gwyvy6w6ircAzh0gFRqnFx5bI0epAsK8cS7ArvRJIK6YtHe02HmfuEWLz%2B6Sx1AFR00Ec%2BDNRegYwzWkkoPpX0d%2BCd96SoBUYaB7XuW2FIUyCKAteRZPsyUANLfvkoDwPFVHmt9O%2F0Tid8lWKcuc12qTpHEyHdu%2BAQi2ejPQSXMuqmf27166altqgqLONrocoTMp2n3Dq%2BiKV4BmIZIXrkjE2ACHR0nPCa%2Bo91T1gv5RP5MrbtGB%2B4%2FL7EdI84o613Z6e%2BQ91fVaPW3xZEkdD1mcq0z7BXNs%2FBq25RJkEoPWAixFDt%2F%2FmNg9eD%2BeNjA%2FCiRu6lkfhq5AwN4Tu0VUInuoM3RmTRoRXT4nE1xDlyCXweUted0ewyhHmjzXMZV1sNL0GxgObniObxBWJo0WdbojDCRYv9ktZ%2FerKemjUqXnKbKzbn3p27%2BlEw%2FOoNb7VTA3JqWKkqhGLcK9zRYeEJYaXvpHlI9LnlM%2FiPGErMOZCnfUXpMfV7hThHbReZOER2LFovY4dXzoeijSLZGJ87LMhuE34ZuTgqf3Xu8SVeHP4QNFqjgbUTDNTXmmVgLodvKKEhsBQ%2B6qbvFqlGPiQcRnLWgjHrVi18rc6XUZUNC%2F8uDYN9USu8HLsgq01EPYvWDI7P7MI%2BQpcAGOqUB8bDi%2F3e5kXahIaSNrqOFjsJtnaXZpnL6c0%2BkwSod%2BImDdHrsPX7SY9dS8r7c6mlAjz6cEHRWUzu9HP%2Fp%2BsmN%2FKETIFj%2BptwVfSFFs78TWwX%2F3bn5buTuvBzB83UTEWypBVK076Syr5Fbrk1XFwWNTv3rz9IYmUWbMOxNrmZkVw5POCPR%2BvSZHoCw1utvXuliijtH%2FYK7lPWeeWtro%2BW2IkCcNUBh&X-Amz-Signature=a5c8fc10bd848cab10b10f63c2b36e5f4c4822baccf7be2ed39bfe841ccc9dc4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677RETLZ5%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDniuxQGJeQ81fx7Bq%2BTAFhk%2FR8YbbfGqucXfuD9pOQigIge93NdYQgUDN88RffjZ8Kecs4vb1nY2MCYKtHWFLN3z8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJtNZs5y6gwyvy6w6ircAzh0gFRqnFx5bI0epAsK8cS7ArvRJIK6YtHe02HmfuEWLz%2B6Sx1AFR00Ec%2BDNRegYwzWkkoPpX0d%2BCd96SoBUYaB7XuW2FIUyCKAteRZPsyUANLfvkoDwPFVHmt9O%2F0Tid8lWKcuc12qTpHEyHdu%2BAQi2ejPQSXMuqmf27166altqgqLONrocoTMp2n3Dq%2BiKV4BmIZIXrkjE2ACHR0nPCa%2Bo91T1gv5RP5MrbtGB%2B4%2FL7EdI84o613Z6e%2BQ91fVaPW3xZEkdD1mcq0z7BXNs%2FBq25RJkEoPWAixFDt%2F%2FmNg9eD%2BeNjA%2FCiRu6lkfhq5AwN4Tu0VUInuoM3RmTRoRXT4nE1xDlyCXweUted0ewyhHmjzXMZV1sNL0GxgObniObxBWJo0WdbojDCRYv9ktZ%2FerKemjUqXnKbKzbn3p27%2BlEw%2FOoNb7VTA3JqWKkqhGLcK9zRYeEJYaXvpHlI9LnlM%2FiPGErMOZCnfUXpMfV7hThHbReZOER2LFovY4dXzoeijSLZGJ87LMhuE34ZuTgqf3Xu8SVeHP4QNFqjgbUTDNTXmmVgLodvKKEhsBQ%2B6qbvFqlGPiQcRnLWgjHrVi18rc6XUZUNC%2F8uDYN9USu8HLsgq01EPYvWDI7P7MI%2BQpcAGOqUB8bDi%2F3e5kXahIaSNrqOFjsJtnaXZpnL6c0%2BkwSod%2BImDdHrsPX7SY9dS8r7c6mlAjz6cEHRWUzu9HP%2Fp%2BsmN%2FKETIFj%2BptwVfSFFs78TWwX%2F3bn5buTuvBzB83UTEWypBVK076Syr5Fbrk1XFwWNTv3rz9IYmUWbMOxNrmZkVw5POCPR%2BvSZHoCw1utvXuliijtH%2FYK7lPWeeWtro%2BW2IkCcNUBh&X-Amz-Signature=470c3ebab4c3a35717dc9f4ba3228966181f7895b3297f4d9ca9013d0e0a775f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
