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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4OOHWL6%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCICuZB7jhS2eGIVTgQZwbG3S24gwCi5ZwqdSbQGalEOBbAiA%2BVoGhoOPtoTmA0N7KoMDRKXnbKx6x4LKM8FsPT%2FPGQyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLv8TeNREIwwYhuQ7KtwD6RulK9zWfbQCeObKIPorQMQT7Mhupe6b6bOonrB%2F5L%2B7EIJ5wC2VnI2kVUh2lWZnsup63v7AZw0KeHC7Jv5OBDmGd8UhUiDL9RpjZ8LmFYqEY0bquRSd5Cv1mPVRYmYjb7DUw4RVVkPcHj%2FQ013ty0WMeRM9990kTRsLX2D%2Fnfd87ur011Auow2heeeprvLAs4qAFshAI3afsO0LG%2BRjvPU2MRJV%2BacOdlGma%2FyaVvCHl0BLtwtVvTK0itVmiRgl3AdoH1CURAW%2B01i%2F%2FdED7SuE2y1fqq2JLP4cTHGiQ1wUknxjSt4ekvGq5IJHxLwQj6FtPDm4AO%2BH89rV4c%2BIAcGDrBMYThnpcPVZd2BTObiRFrZs1EiE%2BVyfLPPPgc3dNHr2muvciEJyRobHslqVnzjYpZCGWCCTywberezdda7y0m1ft4vMyuYk%2B%2BCLP7i4KBP8%2F0cfOP%2BhQINkZYV9tSZUX6d%2BxTAdwDa73HpF5j5Qib%2BbyP4QbSc2%2BkC8Any8Uu62M0U8%2F1UmM%2FoRbCwTOaz6bvbPu%2FMDGHhdoUHPmjgUMkgp3f%2BI6pOWJLLFKayPG927MZ0IsPWCAnfLqKs1lY0NoPkK7sSWWvychVWY7xlNn%2FHyz7GT%2BTuHwYww5Om5vgY6pgG71LH55JOgLql%2FAn3WzZyy1T6b4UNYqIH8vQ3eUISVwFSb7BuVA6rihGwFJVKTN56KINlPavaFUufTk49NdVPPKgcHIYoPjvOIEZXPY2rLZd2D%2Fqm%2F7vPz81jBcACT0KkE1kbC7rfpZLblCKnKmlWDYBXYC7Bzb0OskCRPuOV7BS7m6xNVYS6BbO22YPkEy1lLMkxOhQs5ZwwNnx5WahiL2CqoAO2y&X-Amz-Signature=f43b68321bf467dd607a9a6e3ac9cc0c04b7f126b7bc2a661b8c141a7062b46b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4OOHWL6%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCICuZB7jhS2eGIVTgQZwbG3S24gwCi5ZwqdSbQGalEOBbAiA%2BVoGhoOPtoTmA0N7KoMDRKXnbKx6x4LKM8FsPT%2FPGQyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLv8TeNREIwwYhuQ7KtwD6RulK9zWfbQCeObKIPorQMQT7Mhupe6b6bOonrB%2F5L%2B7EIJ5wC2VnI2kVUh2lWZnsup63v7AZw0KeHC7Jv5OBDmGd8UhUiDL9RpjZ8LmFYqEY0bquRSd5Cv1mPVRYmYjb7DUw4RVVkPcHj%2FQ013ty0WMeRM9990kTRsLX2D%2Fnfd87ur011Auow2heeeprvLAs4qAFshAI3afsO0LG%2BRjvPU2MRJV%2BacOdlGma%2FyaVvCHl0BLtwtVvTK0itVmiRgl3AdoH1CURAW%2B01i%2F%2FdED7SuE2y1fqq2JLP4cTHGiQ1wUknxjSt4ekvGq5IJHxLwQj6FtPDm4AO%2BH89rV4c%2BIAcGDrBMYThnpcPVZd2BTObiRFrZs1EiE%2BVyfLPPPgc3dNHr2muvciEJyRobHslqVnzjYpZCGWCCTywberezdda7y0m1ft4vMyuYk%2B%2BCLP7i4KBP8%2F0cfOP%2BhQINkZYV9tSZUX6d%2BxTAdwDa73HpF5j5Qib%2BbyP4QbSc2%2BkC8Any8Uu62M0U8%2F1UmM%2FoRbCwTOaz6bvbPu%2FMDGHhdoUHPmjgUMkgp3f%2BI6pOWJLLFKayPG927MZ0IsPWCAnfLqKs1lY0NoPkK7sSWWvychVWY7xlNn%2FHyz7GT%2BTuHwYww5Om5vgY6pgG71LH55JOgLql%2FAn3WzZyy1T6b4UNYqIH8vQ3eUISVwFSb7BuVA6rihGwFJVKTN56KINlPavaFUufTk49NdVPPKgcHIYoPjvOIEZXPY2rLZd2D%2Fqm%2F7vPz81jBcACT0KkE1kbC7rfpZLblCKnKmlWDYBXYC7Bzb0OskCRPuOV7BS7m6xNVYS6BbO22YPkEy1lLMkxOhQs5ZwwNnx5WahiL2CqoAO2y&X-Amz-Signature=8eac2bf28bde9f54490ab8ad238ff91f3b4ea847e21c60c8a92c2cf663752551&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
