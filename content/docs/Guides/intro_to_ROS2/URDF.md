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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPAL44AI%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHbVV%2FVU%2B%2Fo%2BZjbr%2Bqy3MxB9kJAFAozmfOlN4rEwE5BwIgVFs05Uz%2FecmPU08lUMhzIjjqxRwQTiv2nDHpr2kOo1Eq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDLKugDVehYEStQNHHCrcA8xRBC%2FQnvPl7lMxrqGcVoHmN1kfkUFMaFE5zkxEFXOznbfF%2BUMDn1%2Br2e%2FZuoypfECxg7xN3dFlsosMDtxLbzNG6DhPQVEnp%2FgL4E4rLot0nAWAUDLPDDVXkZFaqDjcKicFJ6z9I4DgRSjZViRHYq2WfAwV8mlpEqXd11KTaIG1XUoMVsnRCOExofhQ1U80AGm0ebXDE0pTOovci2XHWebal0DrlO6ofpcbTfhKii5kiwF8BihCiRtE8%2FJ4U21K1EsytHoR%2FLIG8%2F68ebx1x%2FAjayg6s%2F3YZciEJximTomM0p7YGId%2BdCG4rtvGKD2WxK25nsgVeE5O4qNrbSw17F6K1o%2FbZEY4pR%2Bi1r0sNHy6tX0taOHnOdV8FOLmtUEF1Px8kAPkXQAbfNqXl3aT4jFYaWcB17pRVHXHP4TCRIFFUj0rKO8wuaIkQrcngWN8fBs%2Bm%2B6kv296EEcnORXy%2BKEIKcfUauvi1vLTW8rRS0hofHUUwpAS2rcuPBjKghVNOzlUdcQciQFU07GNZlQACnbjzDYD6jMiZWskXYXrZWfC69XNgsEAhS1Lht%2FU6MZnklZ2HPZ988hQStXS6OUyhApNQTub8t9WVK7ezKbHSU4QX8vkcTXlz2Tn3vzkMMyI0L8GOqUBZGmfMgAX%2BR0kC9loKb2m9H5Pz4XpAa%2FENo48T2%2Fro%2FBpZ0KCm3OO50SIflgsYsBwvcGJ33L40ATRhQ9AfFqabnt4nKTDGi8GaW590HM3%2BsjwVrDNcmwI8M7ul5MHB2RtemTMirjvQD7oaWTBsV9TS65uuy1rTyV3p08Q64HhOXX61MCxxHlUA7KMEI2U5dOwkx%2FOW1bDgyoB94oMEGSF5WKQnLX5&X-Amz-Signature=964c8228e4d3718d80c9b3b02059b818d321bbac1fff03ed1b433f2dc0703f5c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPAL44AI%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHbVV%2FVU%2B%2Fo%2BZjbr%2Bqy3MxB9kJAFAozmfOlN4rEwE5BwIgVFs05Uz%2FecmPU08lUMhzIjjqxRwQTiv2nDHpr2kOo1Eq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDLKugDVehYEStQNHHCrcA8xRBC%2FQnvPl7lMxrqGcVoHmN1kfkUFMaFE5zkxEFXOznbfF%2BUMDn1%2Br2e%2FZuoypfECxg7xN3dFlsosMDtxLbzNG6DhPQVEnp%2FgL4E4rLot0nAWAUDLPDDVXkZFaqDjcKicFJ6z9I4DgRSjZViRHYq2WfAwV8mlpEqXd11KTaIG1XUoMVsnRCOExofhQ1U80AGm0ebXDE0pTOovci2XHWebal0DrlO6ofpcbTfhKii5kiwF8BihCiRtE8%2FJ4U21K1EsytHoR%2FLIG8%2F68ebx1x%2FAjayg6s%2F3YZciEJximTomM0p7YGId%2BdCG4rtvGKD2WxK25nsgVeE5O4qNrbSw17F6K1o%2FbZEY4pR%2Bi1r0sNHy6tX0taOHnOdV8FOLmtUEF1Px8kAPkXQAbfNqXl3aT4jFYaWcB17pRVHXHP4TCRIFFUj0rKO8wuaIkQrcngWN8fBs%2Bm%2B6kv296EEcnORXy%2BKEIKcfUauvi1vLTW8rRS0hofHUUwpAS2rcuPBjKghVNOzlUdcQciQFU07GNZlQACnbjzDYD6jMiZWskXYXrZWfC69XNgsEAhS1Lht%2FU6MZnklZ2HPZ988hQStXS6OUyhApNQTub8t9WVK7ezKbHSU4QX8vkcTXlz2Tn3vzkMMyI0L8GOqUBZGmfMgAX%2BR0kC9loKb2m9H5Pz4XpAa%2FENo48T2%2Fro%2FBpZ0KCm3OO50SIflgsYsBwvcGJ33L40ATRhQ9AfFqabnt4nKTDGi8GaW590HM3%2BsjwVrDNcmwI8M7ul5MHB2RtemTMirjvQD7oaWTBsV9TS65uuy1rTyV3p08Q64HhOXX61MCxxHlUA7KMEI2U5dOwkx%2FOW1bDgyoB94oMEGSF5WKQnLX5&X-Amz-Signature=f006660d3fd0f6d0d4f1d42526623852280bcf5abf83911f0324b24b68156b11&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
