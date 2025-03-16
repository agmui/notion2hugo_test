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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCTAOXWS%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOxgfc6PMrxq0uhL%2B%2F15c5vE19T4S4DgC1yClR1Hf8WAiAszj6fMH9AqBpZLaiwvAYvvjV8W9r726aWUune%2Fg67GSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMTbbrKO19FAtfKkJpKtwDPmkex738HhqJi6sErpS6GEFhJEqe2VjEYBJ3cWDeV7CffgvaZnHTnONBG6ySA4bVC4wbAeH0S2ozUMIn1nf0bbG10Y02%2BuytvggkX1Mx4QcYq5zm6bg87%2FPJH%2BXd8o91BLwtUGYWEcjrSCCIDcephE%2F9Sm4AnuH0sdon1mQpBcKGM%2F56fkgJ2zPaGeaWLl8%2Bg2B41BLQlH7Kv81rV5P9qBDDNU7tS2pHRu75%2BTHoH1CBJwej4JVcB8PCNEkzhvK2YQvynOesH3va69Ktkj7aWK4zt2uxNMTyaFSAj9wUUzXXeFxBp2n%2B7wskIYBbxrQv6abvqamuV93Vz4my%2FTEGL133kcrPFzDY6sCBOeE77c7nMRAe8AdyeqcdvOPfIggYE9zFXbKpq5tfTf17RzBHYnucYmrL60jYCM%2BcqI2nIHowr5TWJv6U1R0fLOflpWNrboKR0R%2FP51pocHtR8uKVUZNEDqJJmL3PCHhB67hVjSwMtRmpskDnBILwg%2BHMvyRnGo6Yswp3zK%2FBTdvlUWUWaNT%2Bjf%2F5Wk6MIxh3%2F4sa70XpVr7LCmCmuALdpJt8ZfvhagOC1XvbT3Amk1EqQZs077riv16relny2a%2BDb8ziATI6g7ofB3VPydajP5UwmaXZvgY6pgHoKlqNts6UwnIEjjqxL36o9AkqhOmskTvsM4PbTfpfPsj6B6fQohXqj0zntNXKmXIrVUBpHZryTQ5zxYSJHaYu1AtvqbIRBIU7gtIljIU8Kc9umpY2fCYF%2B8Ajm3lwn5UqONfr7siHau4sItzQ8T48f2WLteYh4Fa69tVRkAD6FnQfIWWp4bwY%2FOeLFhoNKnMmKSfOr6wt5olBHMfBFk5EU%2Bw1by8F&X-Amz-Signature=bfb3223b709784e281ab9500c1888cc2142f69358cb9c9528355fc5220624d7c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCTAOXWS%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOxgfc6PMrxq0uhL%2B%2F15c5vE19T4S4DgC1yClR1Hf8WAiAszj6fMH9AqBpZLaiwvAYvvjV8W9r726aWUune%2Fg67GSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMTbbrKO19FAtfKkJpKtwDPmkex738HhqJi6sErpS6GEFhJEqe2VjEYBJ3cWDeV7CffgvaZnHTnONBG6ySA4bVC4wbAeH0S2ozUMIn1nf0bbG10Y02%2BuytvggkX1Mx4QcYq5zm6bg87%2FPJH%2BXd8o91BLwtUGYWEcjrSCCIDcephE%2F9Sm4AnuH0sdon1mQpBcKGM%2F56fkgJ2zPaGeaWLl8%2Bg2B41BLQlH7Kv81rV5P9qBDDNU7tS2pHRu75%2BTHoH1CBJwej4JVcB8PCNEkzhvK2YQvynOesH3va69Ktkj7aWK4zt2uxNMTyaFSAj9wUUzXXeFxBp2n%2B7wskIYBbxrQv6abvqamuV93Vz4my%2FTEGL133kcrPFzDY6sCBOeE77c7nMRAe8AdyeqcdvOPfIggYE9zFXbKpq5tfTf17RzBHYnucYmrL60jYCM%2BcqI2nIHowr5TWJv6U1R0fLOflpWNrboKR0R%2FP51pocHtR8uKVUZNEDqJJmL3PCHhB67hVjSwMtRmpskDnBILwg%2BHMvyRnGo6Yswp3zK%2FBTdvlUWUWaNT%2Bjf%2F5Wk6MIxh3%2F4sa70XpVr7LCmCmuALdpJt8ZfvhagOC1XvbT3Amk1EqQZs077riv16relny2a%2BDb8ziATI6g7ofB3VPydajP5UwmaXZvgY6pgHoKlqNts6UwnIEjjqxL36o9AkqhOmskTvsM4PbTfpfPsj6B6fQohXqj0zntNXKmXIrVUBpHZryTQ5zxYSJHaYu1AtvqbIRBIU7gtIljIU8Kc9umpY2fCYF%2B8Ajm3lwn5UqONfr7siHau4sItzQ8T48f2WLteYh4Fa69tVRkAD6FnQfIWWp4bwY%2FOeLFhoNKnMmKSfOr6wt5olBHMfBFk5EU%2Bw1by8F&X-Amz-Signature=e1334ccd13c1f562d94a01b1d85e4ff8b49b679ac9cadec3adc0819442ef46f9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
