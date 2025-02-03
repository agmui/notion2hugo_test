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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY67SGRE%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFN57V1HCUvxU%2FIIrPerK%2FuDjHsty%2BYQRCmsxgPmgVgEAiEAgbbme2oXCNqejwReEhycZJrIvaB91SmoyuRB6YgiQ8Iq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDHw96igcNUGg9tomSSrcAwyksiRe6D6UE9IdqEDoKDlPiP43EhXJmRReEL0c61gjhpsVoS58kk0zi%2B5eVxXFFev2gM6RUhiQalfecegUqNPK%2BzSbVc73uvEnDyLJLABXZQePQtzd3IBxCFfj7BaIJvIaO8kf5%2BGv%2B0ItgUc7LVTAm%2FEtLlbhOQX0cJwXTbH3rx8aQniNpY6mlbpr4rvIYX0hHnsTW8qG%2FW42ByUkOINbbWcTWlyuEjLd5ok8zGNS4ovemMKbYWVxwxkx2I005ILn3W2QutHCs%2Fkgv12GFKcnTOGfkRHbJbhAoxbpLfX588u9Opq5vViH%2FwBwuwq3aq5ikPiJCiA3HvQ1S7kuhATqMW9ntg2xLdnisAZRSmn2qRXWufj6jL7VnhFOzBsiCqH%2BIsbRvA8HlWQ7kHAhd43PqyMtniX5%2Bo7bji6WViImOVsPiMg6%2BSzmSc%2Fc7%2FqjLlZK%2BL5S6AXYKvgaBSbJLb4J5OFB7DIYFtGw9fbvErex%2Fsfezz0iR7oXiDEe1ZoSTXaqjqVF81xbxM%2FlygjM0sev7xYVJ%2B2YVgN3Nwc1jaf%2BFp5m3bE0vvqMOilZPFgJjS8T%2B8jInN3jv86EKqro1Cqb9Stu5Jhc6g50GWz2sW2i87wXwolxfsWFWNDAMOT0gb0GOqUBUjXa3NMBLHzXR1b9o4z3CbcEoJjYnLa8ZudZ1h83Z%2FhezViQcJWJ8f7FgIMpdxeLB%2Fv8EcZKDfFob%2Fqjvl%2FsaL4vUPpPUP5I7D74oRy6JCIdOaVd%2Bd2yTU4ZrTmo4qv%2F4mtt0HmJTEbmdgGaT7w3rYAmw6FXvsbrdUJboKgiUyj9jOIGD2Hf9klDMMqLqfXnJlYWZis10HZ%2BXpf4rkKbweCOqbo4&X-Amz-Signature=40e126fb455c2a91f5eed21ea255e4d85448017b7e24e3d1e4b9b0c25d8fd397&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY67SGRE%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFN57V1HCUvxU%2FIIrPerK%2FuDjHsty%2BYQRCmsxgPmgVgEAiEAgbbme2oXCNqejwReEhycZJrIvaB91SmoyuRB6YgiQ8Iq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDHw96igcNUGg9tomSSrcAwyksiRe6D6UE9IdqEDoKDlPiP43EhXJmRReEL0c61gjhpsVoS58kk0zi%2B5eVxXFFev2gM6RUhiQalfecegUqNPK%2BzSbVc73uvEnDyLJLABXZQePQtzd3IBxCFfj7BaIJvIaO8kf5%2BGv%2B0ItgUc7LVTAm%2FEtLlbhOQX0cJwXTbH3rx8aQniNpY6mlbpr4rvIYX0hHnsTW8qG%2FW42ByUkOINbbWcTWlyuEjLd5ok8zGNS4ovemMKbYWVxwxkx2I005ILn3W2QutHCs%2Fkgv12GFKcnTOGfkRHbJbhAoxbpLfX588u9Opq5vViH%2FwBwuwq3aq5ikPiJCiA3HvQ1S7kuhATqMW9ntg2xLdnisAZRSmn2qRXWufj6jL7VnhFOzBsiCqH%2BIsbRvA8HlWQ7kHAhd43PqyMtniX5%2Bo7bji6WViImOVsPiMg6%2BSzmSc%2Fc7%2FqjLlZK%2BL5S6AXYKvgaBSbJLb4J5OFB7DIYFtGw9fbvErex%2Fsfezz0iR7oXiDEe1ZoSTXaqjqVF81xbxM%2FlygjM0sev7xYVJ%2B2YVgN3Nwc1jaf%2BFp5m3bE0vvqMOilZPFgJjS8T%2B8jInN3jv86EKqro1Cqb9Stu5Jhc6g50GWz2sW2i87wXwolxfsWFWNDAMOT0gb0GOqUBUjXa3NMBLHzXR1b9o4z3CbcEoJjYnLa8ZudZ1h83Z%2FhezViQcJWJ8f7FgIMpdxeLB%2Fv8EcZKDfFob%2Fqjvl%2FsaL4vUPpPUP5I7D74oRy6JCIdOaVd%2Bd2yTU4ZrTmo4qv%2F4mtt0HmJTEbmdgGaT7w3rYAmw6FXvsbrdUJboKgiUyj9jOIGD2Hf9klDMMqLqfXnJlYWZis10HZ%2BXpf4rkKbweCOqbo4&X-Amz-Signature=4951cba4eb446e5b9b3ea91568af2ab5d3a768d11627d39171801acde2b94288&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
