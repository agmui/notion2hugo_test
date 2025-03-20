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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632NCEQWR%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCR5hNGnfcFR%2ByA5Ldawej36mLyhpGQDQpt%2B70cVr6dxgIgTeGr6O1BeMHH2tRDWRMMMnYy%2FNObD%2BiZ3CQxTm8FlKkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMoBCj5M3Lu6TBSeDCrcA%2FTUer1XJqwFkAZmoRirRbvur43RIaYwwsN324h9%2BTl5UZIKEtCaj02oja3BXUP7eAkyAo4CcVerMqF9RZ7ZysFCBP2qGTSr3LuvZB7tr0d%2FgrppjZpipwTIgy5AbIwVbvZ%2FEpker0mA851uqvt02yPMQMaypI63%2FG8DAb0b5IgRMmKY41qow1eZ06%2FwqwHq557lW6WE99NY2uawXPxogSEZYh0bWx1B9CEP0zqqWwgUdw2h23MJAXtvQZMXEXS6FR6i9FlBxptlaLDrpFE4i8ZzT0q30dS7b49OZ3yIn0UGQyxzaT0EWxejjxf8F3vDeqxoxvf8NQcd2CSO59eeKsCMuiN%2BHTa9yFjGZQvxaD3%2FdcU3q0BFj4eyw1kLLN1VOZxOPdhKjuB%2FE9loenA7mwftKLQxhY2xHRaf36TBnpwXtN98y%2FAWHnUBQa7rBWu9%2BY3yAsu8Tgc6AAaEfKR3U3RNPndHylszQQDrisLhN3ztgXUPSUCG6vK1isbM%2BfM%2FprK%2BTZwuegcrGOclnLXZy9YW%2BRLfnlSRcKG1d4J4CHmp8qm4WCciRd7We%2FlEPEQdBsTfN7IJh%2B0v4IPTsCJ%2F5OdcmKZTFto9xwnibiqC%2BOivkqZ3pzQoJdUAxpJlMMnG774GOqUBA9HCb921E%2BuDibeYYQyj2iVAXzueA%2FhxrnamlUuwX6uSv%2B2nRIuBQyCRVJyFqBt4cbaeWwKcY8ufVectC9fpjiXtgwxwletsTpvW%2BY9KeSAL%2FGDkpU%2B322fM3z86C4kZ0CvCvfAVXi05Z%2BmS%2BZLPtiygJ4IMcVDKUryJKKbdvvOreNqLfF%2FdrZROMGMgBIyAv17uOFohufGT0anCQiEV8BTmRypE&X-Amz-Signature=fe3ae0cd3b2bdd460fcfeda898d94beba795e606a146a62e326091f3fd2d291b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632NCEQWR%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCR5hNGnfcFR%2ByA5Ldawej36mLyhpGQDQpt%2B70cVr6dxgIgTeGr6O1BeMHH2tRDWRMMMnYy%2FNObD%2BiZ3CQxTm8FlKkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMoBCj5M3Lu6TBSeDCrcA%2FTUer1XJqwFkAZmoRirRbvur43RIaYwwsN324h9%2BTl5UZIKEtCaj02oja3BXUP7eAkyAo4CcVerMqF9RZ7ZysFCBP2qGTSr3LuvZB7tr0d%2FgrppjZpipwTIgy5AbIwVbvZ%2FEpker0mA851uqvt02yPMQMaypI63%2FG8DAb0b5IgRMmKY41qow1eZ06%2FwqwHq557lW6WE99NY2uawXPxogSEZYh0bWx1B9CEP0zqqWwgUdw2h23MJAXtvQZMXEXS6FR6i9FlBxptlaLDrpFE4i8ZzT0q30dS7b49OZ3yIn0UGQyxzaT0EWxejjxf8F3vDeqxoxvf8NQcd2CSO59eeKsCMuiN%2BHTa9yFjGZQvxaD3%2FdcU3q0BFj4eyw1kLLN1VOZxOPdhKjuB%2FE9loenA7mwftKLQxhY2xHRaf36TBnpwXtN98y%2FAWHnUBQa7rBWu9%2BY3yAsu8Tgc6AAaEfKR3U3RNPndHylszQQDrisLhN3ztgXUPSUCG6vK1isbM%2BfM%2FprK%2BTZwuegcrGOclnLXZy9YW%2BRLfnlSRcKG1d4J4CHmp8qm4WCciRd7We%2FlEPEQdBsTfN7IJh%2B0v4IPTsCJ%2F5OdcmKZTFto9xwnibiqC%2BOivkqZ3pzQoJdUAxpJlMMnG774GOqUBA9HCb921E%2BuDibeYYQyj2iVAXzueA%2FhxrnamlUuwX6uSv%2B2nRIuBQyCRVJyFqBt4cbaeWwKcY8ufVectC9fpjiXtgwxwletsTpvW%2BY9KeSAL%2FGDkpU%2B322fM3z86C4kZ0CvCvfAVXi05Z%2BmS%2BZLPtiygJ4IMcVDKUryJKKbdvvOreNqLfF%2FdrZROMGMgBIyAv17uOFohufGT0anCQiEV8BTmRypE&X-Amz-Signature=cffaeb79d4079ff8a6b73a8bb0f0ad3db4a4907f793f81baea619ad1fb3d719d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
