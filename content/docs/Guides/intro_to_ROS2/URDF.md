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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BEETPQ5%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCp38Rods2MALIcj%2B5tN9r1k37qu33SSuM2lz0V9UNWDwIhANFMNWqdVeiQun5xXRvt5tJGHzKJqRpMi3UpD2sh5DcdKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNUWU%2BA6fca5m43tMq3AMWRC4HKweNHeP5DsHwEnf7854DMBnfoHBU9A8g2KXcyW2DFRxPsolb%2Bz8y6rdg2u8t58n4rI4RLUCrJEQBZWbFrCVygQjGAnyhvY4DPMFe9in8TmlVtftlMdVP%2F6AlI%2BZ%2BnsCWm04%2FcuGtQPPEkdQu5Jyn%2BPX9H8RsqMHr%2FmEERVRhb9AX7UK9emML3NTM1fm5PgsGoeoYgm7kmk5yqs4u48jv9uoKujwqxZRj27PCF%2BOTOhyYwBRnKaD1YUh4o%2F49%2FYLLADZA4Z4LnqR7ol%2BweVZLna8YNFPl7LgrkSfzFuo2Lzh%2BvRW%2F1Y3V2bR9gUp98Z0Bi%2B55fZE7uvp2uzP9RsskBXoqXKeIViqkxwZrcAYDm3LItblHUDHD25u8FW5gadhP2NMztM6mIqzGroZ07CD%2BROSiuRlYcEDE9h0ejsluHzqPE9XSFXokKA5NYOydvapSZLsI5R61MrZsEydfER8wFkpDYATn16ZQ8cmxvsMmZDpw8uNZXDxybSMiOksL7whRJipW8K3Ldah6kMOY7TmCyaM1TJqB3OuX7%2BbxODz4eZaXT5TfUd0EchU1%2FWUBYKhb9KhvlKK35pOC4TB2n58%2BuHNobQpDLBXCFuCU0701LTLUvSQb3OWLhjC03O%2FBBjqkAQ72kTQPDGTMLt74wESjf0uVdKaAIdRI7Jjo6osIsV9VYa4i%2FwdKYkEUCtIhlKtd4Fva5OFtBRbF0hMbQ%2Bzn2Q0QkhlCdN%2FyO%2FEJmy4G2mywEkIqbPb%2Bu0qbz%2FoRBoBcOjxidF2Nn7SbRdb2XgCKINr6TfcqJPI0sGuhpyKKlFfIuD%2B0v0Rkve2SBz8%2B8k%2FZGmPIkWZ%2FdGjW5%2BzWrJCy%2BOaZVcnj&X-Amz-Signature=cca075585fb4bc64a8fe80837e2e81864433211a3daebacadfe02470360be92a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BEETPQ5%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCp38Rods2MALIcj%2B5tN9r1k37qu33SSuM2lz0V9UNWDwIhANFMNWqdVeiQun5xXRvt5tJGHzKJqRpMi3UpD2sh5DcdKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNUWU%2BA6fca5m43tMq3AMWRC4HKweNHeP5DsHwEnf7854DMBnfoHBU9A8g2KXcyW2DFRxPsolb%2Bz8y6rdg2u8t58n4rI4RLUCrJEQBZWbFrCVygQjGAnyhvY4DPMFe9in8TmlVtftlMdVP%2F6AlI%2BZ%2BnsCWm04%2FcuGtQPPEkdQu5Jyn%2BPX9H8RsqMHr%2FmEERVRhb9AX7UK9emML3NTM1fm5PgsGoeoYgm7kmk5yqs4u48jv9uoKujwqxZRj27PCF%2BOTOhyYwBRnKaD1YUh4o%2F49%2FYLLADZA4Z4LnqR7ol%2BweVZLna8YNFPl7LgrkSfzFuo2Lzh%2BvRW%2F1Y3V2bR9gUp98Z0Bi%2B55fZE7uvp2uzP9RsskBXoqXKeIViqkxwZrcAYDm3LItblHUDHD25u8FW5gadhP2NMztM6mIqzGroZ07CD%2BROSiuRlYcEDE9h0ejsluHzqPE9XSFXokKA5NYOydvapSZLsI5R61MrZsEydfER8wFkpDYATn16ZQ8cmxvsMmZDpw8uNZXDxybSMiOksL7whRJipW8K3Ldah6kMOY7TmCyaM1TJqB3OuX7%2BbxODz4eZaXT5TfUd0EchU1%2FWUBYKhb9KhvlKK35pOC4TB2n58%2BuHNobQpDLBXCFuCU0701LTLUvSQb3OWLhjC03O%2FBBjqkAQ72kTQPDGTMLt74wESjf0uVdKaAIdRI7Jjo6osIsV9VYa4i%2FwdKYkEUCtIhlKtd4Fva5OFtBRbF0hMbQ%2Bzn2Q0QkhlCdN%2FyO%2FEJmy4G2mywEkIqbPb%2Bu0qbz%2FoRBoBcOjxidF2Nn7SbRdb2XgCKINr6TfcqJPI0sGuhpyKKlFfIuD%2B0v0Rkve2SBz8%2B8k%2FZGmPIkWZ%2FdGjW5%2BzWrJCy%2BOaZVcnj&X-Amz-Signature=6d1d8b10df9693807a7f5a365c1afbae91c7a12ec7dcb36f907d70fd7844052f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
