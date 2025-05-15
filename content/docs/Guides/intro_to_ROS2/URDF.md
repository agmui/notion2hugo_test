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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5T23M6S%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQD7x2jkUUzZLkBzJnGZuwuF3hOTpBaXvW%2FA95N6B97PaAIhAMjnM6CRbP9UqSa8k8aIIpAW0vBapXUpRlefAwGhnbDWKv8DCCQQABoMNjM3NDIzMTgzODA1IgwHLPXm5Fe0TLVDNOwq3AMnnVjOI5ct0iJCMlFcx4qDfFs6BKIzoyf52r3yM763Iu3NdR1mWM9OBvs0vEFst9Yyg4Nwo3bQCcrRbw75jR8y62dgpp9bbiMqmkA6YUMglRBMT7nk2YxOr5T6uByGlt8ZM5B0knn0phwHumDDlEjqbKDafRNLyy7fSP%2BJ3ZYDo9k4jCdF7dU9K5IpfyVsD9Z%2BjuOKo9Ld3YCC4X2LNk8WO%2BHhxSA%2B0cJDqeZp9DlhK7TwjmxIQoRa72axuj36DwLr810LVGxamW8dGAE8tzMXB9ssye94evvPJbS2MTaOlUgeU4ru1xYL4J8U2ATIjGm%2BUwqbNyXOdmipPcMQpDrZ80XRY9b71RbK82FXs3kvrYXVqRXtU9EdQDF640XhbTunevNdjnLd6b5uIuQjJ4Zjm0wYr2HdaLOifILD0zzG8VssHwgwEHe2AeBFBSWGizJ1PAxfvn%2FW0AEPwRXHglc%2FWSmPKXEftXoUI1HmIQDfiHUOCPTJT%2FT32ej6yaL2d1aBvtrlAxqq%2BuaGNwtpc8OaMqKFCzz2goHK1W9ata%2F8rlRUIYseV4ajZhpltWvCsRlw5A0UZilREu5kVosyfbcXFnCGO%2F7E%2BqYaIHJZWMQRZjegTHJqvVRFEKke2zDVtZXBBjqkAaS0SIW0DJ4R1J2MJr%2B8OUw3OHnW5aDrz7%2BDZXpKha%2BSRBjon%2FRa%2BnMaXNdqJqnzvAr4Ey%2FQlOgK55PaO71XxXNDu3Bz3xOFCbqnyqfEa6rucV4sjKA0oF87silpX3t6n2lHRD07rogWUB1bKQoSEPkh6KXMwAPFcLZGY4UOD2UkyYmbCdzSj2mwJSxobXIoxRqZ8CBhbyUPs5f7L0CcjsTKPeND&X-Amz-Signature=da15c8f93342e1278f191a48bd01549463d653cfb37c6b48b8563dbf47d1e2da&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5T23M6S%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQD7x2jkUUzZLkBzJnGZuwuF3hOTpBaXvW%2FA95N6B97PaAIhAMjnM6CRbP9UqSa8k8aIIpAW0vBapXUpRlefAwGhnbDWKv8DCCQQABoMNjM3NDIzMTgzODA1IgwHLPXm5Fe0TLVDNOwq3AMnnVjOI5ct0iJCMlFcx4qDfFs6BKIzoyf52r3yM763Iu3NdR1mWM9OBvs0vEFst9Yyg4Nwo3bQCcrRbw75jR8y62dgpp9bbiMqmkA6YUMglRBMT7nk2YxOr5T6uByGlt8ZM5B0knn0phwHumDDlEjqbKDafRNLyy7fSP%2BJ3ZYDo9k4jCdF7dU9K5IpfyVsD9Z%2BjuOKo9Ld3YCC4X2LNk8WO%2BHhxSA%2B0cJDqeZp9DlhK7TwjmxIQoRa72axuj36DwLr810LVGxamW8dGAE8tzMXB9ssye94evvPJbS2MTaOlUgeU4ru1xYL4J8U2ATIjGm%2BUwqbNyXOdmipPcMQpDrZ80XRY9b71RbK82FXs3kvrYXVqRXtU9EdQDF640XhbTunevNdjnLd6b5uIuQjJ4Zjm0wYr2HdaLOifILD0zzG8VssHwgwEHe2AeBFBSWGizJ1PAxfvn%2FW0AEPwRXHglc%2FWSmPKXEftXoUI1HmIQDfiHUOCPTJT%2FT32ej6yaL2d1aBvtrlAxqq%2BuaGNwtpc8OaMqKFCzz2goHK1W9ata%2F8rlRUIYseV4ajZhpltWvCsRlw5A0UZilREu5kVosyfbcXFnCGO%2F7E%2BqYaIHJZWMQRZjegTHJqvVRFEKke2zDVtZXBBjqkAaS0SIW0DJ4R1J2MJr%2B8OUw3OHnW5aDrz7%2BDZXpKha%2BSRBjon%2FRa%2BnMaXNdqJqnzvAr4Ey%2FQlOgK55PaO71XxXNDu3Bz3xOFCbqnyqfEa6rucV4sjKA0oF87silpX3t6n2lHRD07rogWUB1bKQoSEPkh6KXMwAPFcLZGY4UOD2UkyYmbCdzSj2mwJSxobXIoxRqZ8CBhbyUPs5f7L0CcjsTKPeND&X-Amz-Signature=6422e429dec5d643e1285cf8689cf98871f62e298b3a3495621333359be7a624&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
