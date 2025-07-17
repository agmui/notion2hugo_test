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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUACPFIL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDQ9Wyw5rMdvSWTplBTGxvhy%2BFhKFW8QBcnX1ewFlOByAIhAJkUFHkJ%2FojFH1yw9i8w%2BsioVqRTwhcplpBbvvaEz53DKv8DCHAQABoMNjM3NDIzMTgzODA1Igxb%2FoTNJryetaMBcxYq3AMKmNJoVT1eoFzD3z4xYmhkLRxbaA1%2FWAfKtseV%2ButBhm0WIRmEMrp%2FRUBA%2FiLdu7JZmzjek3yaNf3sBubzXGT1xdxJXnA9mDbZqoP9yg1M2oMfXIk6qPUPQO0nYi7TOeY7Ut810ojbVkwJ20vIOEqVWDsryE8nt%2FaxEp0fMBf2EoRUKdY9wDHQVaIu0tp0NiSE%2Bo3UOs5Ap7UfKCpZTegECtgK9KYgWVqYOAp5Wv7AspqU7LummP%2BpVu9bh4Fg33GJ%2FkInvhhONFMoh08QOgiA70DgEolqRwf2XvQ0h6E8hvDQD0cqtuRVub5H6HJfQY%2FcY0nyi1Q3zvhujb2jxfMocri6zAXd%2B%2BejlccAL2%2Bx172MVpykt%2BoK3YhL%2FvhZDimzF2d5PEgVExrr4aNfrnewqywMwvlIJ130WlVuaqPLLu17SR0VOLZJT2u2fxxJpsq0O5j3IQOMI8S9dFz%2FMGx9sKDBWHIIil1pM4D4DkuYnef2NxsXUZLECvX1a3dTRXfmfL%2B5z9yWTkk9insXeTRQT3fkrGneowXYKj4irUAbj1L%2FTt7YCCx5MbARhJS07Vk3V8HOupBiJeDQ%2FEV6S3yht6m6twWd3Q%2FkJXNffEPKXQWkeTXBqKY50X%2BlFzC4v%2BLDBjqkActradm16%2FFCg0CHMw8H0Ki9rz892Sz3CUh1V%2FYwaKwohYJZuh%2FQMnSNPK2dvLOm%2BwzUYPegwCFPNnhF8QOGDnfAQc6Ows85F7cFF9NLFSyRgnVY%2B5n%2B1m0k65gXIy%2FnjfOrdvBTnBs3WcoJAPVZXnMs3LNCXjopFVEMzDVy%2FmDZebwOGDl3Wkc9taBXfOvgv81NXaxWU0hN75nRySfFcWA0vSKz&X-Amz-Signature=8854c561701c06523512505f6554c1974cc9a2f462dd6a82e3a4b22c7a9fac44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUACPFIL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDQ9Wyw5rMdvSWTplBTGxvhy%2BFhKFW8QBcnX1ewFlOByAIhAJkUFHkJ%2FojFH1yw9i8w%2BsioVqRTwhcplpBbvvaEz53DKv8DCHAQABoMNjM3NDIzMTgzODA1Igxb%2FoTNJryetaMBcxYq3AMKmNJoVT1eoFzD3z4xYmhkLRxbaA1%2FWAfKtseV%2ButBhm0WIRmEMrp%2FRUBA%2FiLdu7JZmzjek3yaNf3sBubzXGT1xdxJXnA9mDbZqoP9yg1M2oMfXIk6qPUPQO0nYi7TOeY7Ut810ojbVkwJ20vIOEqVWDsryE8nt%2FaxEp0fMBf2EoRUKdY9wDHQVaIu0tp0NiSE%2Bo3UOs5Ap7UfKCpZTegECtgK9KYgWVqYOAp5Wv7AspqU7LummP%2BpVu9bh4Fg33GJ%2FkInvhhONFMoh08QOgiA70DgEolqRwf2XvQ0h6E8hvDQD0cqtuRVub5H6HJfQY%2FcY0nyi1Q3zvhujb2jxfMocri6zAXd%2B%2BejlccAL2%2Bx172MVpykt%2BoK3YhL%2FvhZDimzF2d5PEgVExrr4aNfrnewqywMwvlIJ130WlVuaqPLLu17SR0VOLZJT2u2fxxJpsq0O5j3IQOMI8S9dFz%2FMGx9sKDBWHIIil1pM4D4DkuYnef2NxsXUZLECvX1a3dTRXfmfL%2B5z9yWTkk9insXeTRQT3fkrGneowXYKj4irUAbj1L%2FTt7YCCx5MbARhJS07Vk3V8HOupBiJeDQ%2FEV6S3yht6m6twWd3Q%2FkJXNffEPKXQWkeTXBqKY50X%2BlFzC4v%2BLDBjqkActradm16%2FFCg0CHMw8H0Ki9rz892Sz3CUh1V%2FYwaKwohYJZuh%2FQMnSNPK2dvLOm%2BwzUYPegwCFPNnhF8QOGDnfAQc6Ows85F7cFF9NLFSyRgnVY%2B5n%2B1m0k65gXIy%2FnjfOrdvBTnBs3WcoJAPVZXnMs3LNCXjopFVEMzDVy%2FmDZebwOGDl3Wkc9taBXfOvgv81NXaxWU0hN75nRySfFcWA0vSKz&X-Amz-Signature=abbabfc684ca2aebe1ae442edd38d53062ed6d303c6dc4c72920cf64794ec014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
