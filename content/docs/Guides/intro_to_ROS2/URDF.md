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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GSGZC5Y%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJY0VMh0xL6kmmJiwwXt%2B37Y3c5QTO6eOtC67fbvWOLgIhAJJEJmud151A%2FSscV8PXcVgVInnh7DCiemmZTdZLdiPKKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeyHmMWpA0TRuaehwq3AOlw23gRQOjoQ%2FIUPDAQPOQeyuFjdGyATVW7%2F%2FUCznw4tOcYyhoRR7UcHIPisLrxVDPBayovKRpmjZthtW5gHahiQm%2B9IfPjMIN9sRynGk0RVh1Oh06GGBsTzChhQLZFTFKQBPiMIXJwwei9QB4sT6RZt%2FVXXwmPeeUqCTbsibZ2Of0XZjlqa%2BE0qdyQT2RJH11ouGRLJql3ynuNAWqBpizVZBOCFZIkRAWnyI8WkG3T%2BWBEbJzY1cTURF%2F%2F4STWiOGf6h7iRAko%2BgminAE3pzWTUKi23bdxlWOSCGKji%2BVjfC16huYS454mzRAcg8fyb119fuzVyclRIolooeSozjr7bealiyokgqTiLJHjTQC5T0da%2BP8ZBvRDFGywXEk1eToKc5WDyED7brx%2BfSVnKLtEqZu7RHFp3rSjFQ6%2BjRftwibNhbEoTHc1ukZTWVS3nbOcRAUm5D%2FDf8vrQtkR7xKnykXtSmrYdnOT9Q2OcNFw1ZULHB3HS2faLBV0DlfhC2OXtmZ2FgwXbB9BmB6X1zQmzj1%2FII0TzjImRqvaZjoedTJO7CDgkit0gHEx3c%2By0rjQbkZvIbOQEktFcaQ6F%2FbNWz825zIleRvg4XppUlJByv9ozC0eZvwC3pTuDDWsazBBjqkAcEusiTy3d1pLQz%2FnpNe5dOVS9vgo3ueltgIjk%2BwklPaEUZ%2BdPbdqQjdPJnChyIfDkgelpFff7JIv%2BcohXP7WVbpLwO0%2B82C6XKuMVgXvp7hbRK9adj2YsMLk7whPlTNPKzHMqwYOIKmjcGqdGXdOWAoTEHbQtypLp89WUWfT2WsXNBMNVL78GINQEnzDkqBkDF8a69HHftxF7t7g9AW4I9MVO7d&X-Amz-Signature=343d8d99ecede9641ebc14843fa203e191c24e87652bac25d05d17f241c1b8a3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GSGZC5Y%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJY0VMh0xL6kmmJiwwXt%2B37Y3c5QTO6eOtC67fbvWOLgIhAJJEJmud151A%2FSscV8PXcVgVInnh7DCiemmZTdZLdiPKKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeyHmMWpA0TRuaehwq3AOlw23gRQOjoQ%2FIUPDAQPOQeyuFjdGyATVW7%2F%2FUCznw4tOcYyhoRR7UcHIPisLrxVDPBayovKRpmjZthtW5gHahiQm%2B9IfPjMIN9sRynGk0RVh1Oh06GGBsTzChhQLZFTFKQBPiMIXJwwei9QB4sT6RZt%2FVXXwmPeeUqCTbsibZ2Of0XZjlqa%2BE0qdyQT2RJH11ouGRLJql3ynuNAWqBpizVZBOCFZIkRAWnyI8WkG3T%2BWBEbJzY1cTURF%2F%2F4STWiOGf6h7iRAko%2BgminAE3pzWTUKi23bdxlWOSCGKji%2BVjfC16huYS454mzRAcg8fyb119fuzVyclRIolooeSozjr7bealiyokgqTiLJHjTQC5T0da%2BP8ZBvRDFGywXEk1eToKc5WDyED7brx%2BfSVnKLtEqZu7RHFp3rSjFQ6%2BjRftwibNhbEoTHc1ukZTWVS3nbOcRAUm5D%2FDf8vrQtkR7xKnykXtSmrYdnOT9Q2OcNFw1ZULHB3HS2faLBV0DlfhC2OXtmZ2FgwXbB9BmB6X1zQmzj1%2FII0TzjImRqvaZjoedTJO7CDgkit0gHEx3c%2By0rjQbkZvIbOQEktFcaQ6F%2FbNWz825zIleRvg4XppUlJByv9ozC0eZvwC3pTuDDWsazBBjqkAcEusiTy3d1pLQz%2FnpNe5dOVS9vgo3ueltgIjk%2BwklPaEUZ%2BdPbdqQjdPJnChyIfDkgelpFff7JIv%2BcohXP7WVbpLwO0%2B82C6XKuMVgXvp7hbRK9adj2YsMLk7whPlTNPKzHMqwYOIKmjcGqdGXdOWAoTEHbQtypLp89WUWfT2WsXNBMNVL78GINQEnzDkqBkDF8a69HHftxF7t7g9AW4I9MVO7d&X-Amz-Signature=3064abd6e897a26c9325d30519e0b74c01a9ad5d35c8badc22b14171ef157987&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
