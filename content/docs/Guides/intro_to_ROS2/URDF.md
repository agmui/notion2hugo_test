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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRP7R5WR%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCMPkWxFcFaBXQBlYaCkykpnStSWKsopy6kBCIR%2Fx0F%2FgIgMUDDLAnYtiTMRbRrbIuUZdWa%2FXmXUs3uQZ5gTU9tMxIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHO5cT7bVaQvjC8PMSrcA9cWqu2mGFkR8ElpoQhrW1%2BXif%2FY9kInWcazbDKNXZifctVSukM4GMyZREunfpVgpZ1etlys7W1aj77XuTXQCsGfyEaruGuCiVIhmlaLMZltShotibAKfp66Vvr0Mej9882ZTZFIDGR4T%2BFosjCIiTKj563ZqPdf%2Bh5eKrU2FYYNxsQNuKfr3eBa0bAKpV%2BCIXPQAPqUPl1FXTK5ZB4oEP0VdUnS1ey6diojcbOkoimY9bCtJoFShPD5MNX6isOK2jS%2BISt7SggxPnwNSz9rFNJWSz2QMhaVsyEfMncmwcE9e%2F3XqFw4zOvke4DUBBh87%2FJlM0j5VQwjO4HD5U17i%2BNIvyh7mjBSQcux4IdHmBz9nM7AAYLx%2FfJDjVjGiLifAKivHycuPYUIpH1jqHlwQyPrK6iX9ZyCbmfzoW9SbpY08S7De3LlVMXXj6r9rhmPqOE8lV9HskaU2vhJ5HFQltQhOgyy7jrSK2MqXFI8kY4ztuW6c9qNwpmuehs9Telik2u3srg8FvCCmlyQWh4p%2Ff47ZJlMIbOUZpjclytvgMiEL2qFI3fHlKagRm7SIOMYCG92UcKOjlCh%2FHvFKh9eLHKCBpLHBtVlcUjLbHVvrq5agErLlGmCTrOMqllMMK%2FukMQGOqUBCMIqoPBXc57FFATxaOIelPaRB2EhwO11MdiQcCNDWqZU5TKNVOVr4v2Mga4as%2B%2BXxtHyJ01STPpvvPj9GMigAETgdlX3dx6SJSkWUon6woZNE0LokBHfxE48qhHrgtoBr9hVR2%2Fa%2BYg4nVVJiXNTRaFVPDW4KwsKExd3OTO4TwyR3pl1HdmRI1o7goGbr70TCA78Fl%2BpBxdtrIW4eIrFZjjUuAWc&X-Amz-Signature=684e622993314378eead4dc3724479467c816bac8183e0820d40c9a3a35bcb36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRP7R5WR%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCMPkWxFcFaBXQBlYaCkykpnStSWKsopy6kBCIR%2Fx0F%2FgIgMUDDLAnYtiTMRbRrbIuUZdWa%2FXmXUs3uQZ5gTU9tMxIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHO5cT7bVaQvjC8PMSrcA9cWqu2mGFkR8ElpoQhrW1%2BXif%2FY9kInWcazbDKNXZifctVSukM4GMyZREunfpVgpZ1etlys7W1aj77XuTXQCsGfyEaruGuCiVIhmlaLMZltShotibAKfp66Vvr0Mej9882ZTZFIDGR4T%2BFosjCIiTKj563ZqPdf%2Bh5eKrU2FYYNxsQNuKfr3eBa0bAKpV%2BCIXPQAPqUPl1FXTK5ZB4oEP0VdUnS1ey6diojcbOkoimY9bCtJoFShPD5MNX6isOK2jS%2BISt7SggxPnwNSz9rFNJWSz2QMhaVsyEfMncmwcE9e%2F3XqFw4zOvke4DUBBh87%2FJlM0j5VQwjO4HD5U17i%2BNIvyh7mjBSQcux4IdHmBz9nM7AAYLx%2FfJDjVjGiLifAKivHycuPYUIpH1jqHlwQyPrK6iX9ZyCbmfzoW9SbpY08S7De3LlVMXXj6r9rhmPqOE8lV9HskaU2vhJ5HFQltQhOgyy7jrSK2MqXFI8kY4ztuW6c9qNwpmuehs9Telik2u3srg8FvCCmlyQWh4p%2Ff47ZJlMIbOUZpjclytvgMiEL2qFI3fHlKagRm7SIOMYCG92UcKOjlCh%2FHvFKh9eLHKCBpLHBtVlcUjLbHVvrq5agErLlGmCTrOMqllMMK%2FukMQGOqUBCMIqoPBXc57FFATxaOIelPaRB2EhwO11MdiQcCNDWqZU5TKNVOVr4v2Mga4as%2B%2BXxtHyJ01STPpvvPj9GMigAETgdlX3dx6SJSkWUon6woZNE0LokBHfxE48qhHrgtoBr9hVR2%2Fa%2BYg4nVVJiXNTRaFVPDW4KwsKExd3OTO4TwyR3pl1HdmRI1o7goGbr70TCA78Fl%2BpBxdtrIW4eIrFZjjUuAWc&X-Amz-Signature=7c2d4b064cf81baa7e678f7ab4d72bb724beebe9c44b20abaa9d521fb623b9bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
