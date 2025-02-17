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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTASQ6UV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T003836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCRqeJZtlz3DKLwrPjtNUjh6o2RldSmOt%2BOVw8PEJRQIwIgPyeQMYWE%2BC3gLptZKUEmnRCT42VWzUOr6NNFY2zcgScq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDHHv%2Bk1hE4recOmwuSrcA%2FicjvYMeQFUmihen4q1QQYw0JOb0Wlx8tirZiSgSaPQkvJFjWugZXcVkx9Ejtktw963AV0SDWdC0kdwbxcLZ1mCtT6HybdlXVInseGiLgylZR8NVxhSUekEzv%2FrkAcm387yCNmwPh0n%2FNjZ2AZQlufUdwbQdlknlC2S5y1yxjjrPVbmPKhi2HxZNp2VHQKBpW2Db0M6TW6DwBvOdBHBW385jV%2BULwIyN%2FEQVuU9ZNJ%2BWoE%2BbXUfW2LVtOXFmKPwyNi0s5kgMwW5TLxVoYcnPiPgSLFOug98Zi3n6g4gHhVEoAFlDfFlUhhQ3P7n1uTdzaIz8OlK3wiyA213%2FHiKoxLFr7r4kxOwK8z36WHE3l7JpalD33ChkRAhrpz99BfUoh2KJTBeYuAU112YuF%2FRm2dEpt9nGEAprOYhuDlezNVGwgeNT2nfgVkah66Rdf4bB42SmozXimM7gk7rIchZ9g%2B1%2BYOB4l5TemNpsyVqtxipFAMZ0Upco9JvHh5QQEdgYRcGpgSLaWH2Nn22qH1N258b8cyaypmATYnDLbvQ%2FPCLUUDPKzdMhV7azAHLTTNr%2B58SL3r9gbaz40q12B10VpXRRE3JQprvEohnnrHeQnprsFIFIDg3z2fVWutdMIqAyr0GOqUBZQ1stFeEdnBnKOZ2pWpylXWVaDCd7kWrbrZTJ9BZ%2BKxPl6ItRNS4c%2BU8h1rhkEPfcWL8cQHh0AtO9Z5VZ7jCsqSgEGavId1xibIPcF5FUZvmPAis%2BralX8lI4d7myO82TCUB65RTzuH3xOxG5YcXlQXqqcmTV81WYaTeOHaGpPnqyMeu7K4P%2BrwPqsYNYcYoakYps6P1dtVxC%2Fp0w%2B5JDgAKFLqZ&X-Amz-Signature=07f784270f122ed258cfda7789c4af6a4bb478df33c137e38388bd2bbc72bf10&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTASQ6UV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T003836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCRqeJZtlz3DKLwrPjtNUjh6o2RldSmOt%2BOVw8PEJRQIwIgPyeQMYWE%2BC3gLptZKUEmnRCT42VWzUOr6NNFY2zcgScq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDHHv%2Bk1hE4recOmwuSrcA%2FicjvYMeQFUmihen4q1QQYw0JOb0Wlx8tirZiSgSaPQkvJFjWugZXcVkx9Ejtktw963AV0SDWdC0kdwbxcLZ1mCtT6HybdlXVInseGiLgylZR8NVxhSUekEzv%2FrkAcm387yCNmwPh0n%2FNjZ2AZQlufUdwbQdlknlC2S5y1yxjjrPVbmPKhi2HxZNp2VHQKBpW2Db0M6TW6DwBvOdBHBW385jV%2BULwIyN%2FEQVuU9ZNJ%2BWoE%2BbXUfW2LVtOXFmKPwyNi0s5kgMwW5TLxVoYcnPiPgSLFOug98Zi3n6g4gHhVEoAFlDfFlUhhQ3P7n1uTdzaIz8OlK3wiyA213%2FHiKoxLFr7r4kxOwK8z36WHE3l7JpalD33ChkRAhrpz99BfUoh2KJTBeYuAU112YuF%2FRm2dEpt9nGEAprOYhuDlezNVGwgeNT2nfgVkah66Rdf4bB42SmozXimM7gk7rIchZ9g%2B1%2BYOB4l5TemNpsyVqtxipFAMZ0Upco9JvHh5QQEdgYRcGpgSLaWH2Nn22qH1N258b8cyaypmATYnDLbvQ%2FPCLUUDPKzdMhV7azAHLTTNr%2B58SL3r9gbaz40q12B10VpXRRE3JQprvEohnnrHeQnprsFIFIDg3z2fVWutdMIqAyr0GOqUBZQ1stFeEdnBnKOZ2pWpylXWVaDCd7kWrbrZTJ9BZ%2BKxPl6ItRNS4c%2BU8h1rhkEPfcWL8cQHh0AtO9Z5VZ7jCsqSgEGavId1xibIPcF5FUZvmPAis%2BralX8lI4d7myO82TCUB65RTzuH3xOxG5YcXlQXqqcmTV81WYaTeOHaGpPnqyMeu7K4P%2BrwPqsYNYcYoakYps6P1dtVxC%2Fp0w%2B5JDgAKFLqZ&X-Amz-Signature=8e4c1d1e0c063041c8cc7633e7f2520e4a1b713fcaf3134e923a199a10d0a287&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
