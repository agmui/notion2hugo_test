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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVTO3JXK%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T032222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwr1QL8a50iTXkXTNdWRqVTy67DafXhMYMxi5%2BaIonEAiEA6b0fp%2FEc46D6pCfcPHwFFgHV%2FRb5Rv6IMAcAUtNig2gq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDEp5aCd0b2lVxzSjryrcA0YjZy%2BhRO6Rnq7O7ayuILzpqROxTSA4Q8XHD8YomGKxLOMnBR0wOFWRhdxAms3rMysMnEoXKrJi18MK5%2BAyrBr4dkfGgcBQ8eXA4Bw4JtYRVdVQ3gd0BHalNbeGCyUH6wXF3pB317dOP3QXseDaz4pf41B8TVxM1PwQCr9Xy4Di2pORCQ4dJaaZxVfP85nBqtx0sY93d0ZP0yy3PJ7sFk7YYb%2BCf%2BHjMC5Pfw3HE465x6JziK6cNA7n27PkudV86ttZFd7JwB3gGK7%2FXOKkIFry6IQiQ36SYk4T37zNnUGoLO5Lnf4nw3iDpSnfuNGk%2BTHIh8iWYer8j2ZejEcWg7tfgUstGxVwiQmqvc9nvxsY9dbSpDHBD8tKWxCMZOK3uUWiaNVzFJnBtGy5TCHSRNVZ5irrcyCaKNtU%2Bg4xKqRKOS8NIVKDCx7f1CvsLxFWgWTUZnNcuHOERVM3OnhLicISDyo88euOedB3LLUfNepFLuSvLZszn9zRhVSN8aVOyZQXhHbSOTzajHY2CRDEt6JJJUjxV2DJ5JUbHQboaY3zGk0EYYtB7vI7obYLM1nPK1tyRPmv0ltwWHmtWvoXjkp0BQOgZBFhrkEyDC7irBBZX2Paw6Hd8il6LjGnMKHK474GOqUBI9R8uJR%2FMOGEe3GsyuxUt8WCbSa7JQ14jkrlDO9cjVNFXdQv56yRCA2AEw2tiswqQMydygYRq4qhDhJhMCCCUw7ZPl53QxYM1fOOG70u5KoEKjwhsk63oH5ziS1bkAe3Rx82JtT%2ByDfk%2BpPukkUyiMMmorluNCu2czAzvnyOUIz28HbtmZ%2BHTtSk6RSRbg5k7vDlmuXDj1enoOeJOriMysfEjBae&X-Amz-Signature=6faf9add6fb773164cd8b466b6f0f47c26263caff4d454280cd0ccd9fe26709f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVTO3JXK%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T032222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwr1QL8a50iTXkXTNdWRqVTy67DafXhMYMxi5%2BaIonEAiEA6b0fp%2FEc46D6pCfcPHwFFgHV%2FRb5Rv6IMAcAUtNig2gq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDEp5aCd0b2lVxzSjryrcA0YjZy%2BhRO6Rnq7O7ayuILzpqROxTSA4Q8XHD8YomGKxLOMnBR0wOFWRhdxAms3rMysMnEoXKrJi18MK5%2BAyrBr4dkfGgcBQ8eXA4Bw4JtYRVdVQ3gd0BHalNbeGCyUH6wXF3pB317dOP3QXseDaz4pf41B8TVxM1PwQCr9Xy4Di2pORCQ4dJaaZxVfP85nBqtx0sY93d0ZP0yy3PJ7sFk7YYb%2BCf%2BHjMC5Pfw3HE465x6JziK6cNA7n27PkudV86ttZFd7JwB3gGK7%2FXOKkIFry6IQiQ36SYk4T37zNnUGoLO5Lnf4nw3iDpSnfuNGk%2BTHIh8iWYer8j2ZejEcWg7tfgUstGxVwiQmqvc9nvxsY9dbSpDHBD8tKWxCMZOK3uUWiaNVzFJnBtGy5TCHSRNVZ5irrcyCaKNtU%2Bg4xKqRKOS8NIVKDCx7f1CvsLxFWgWTUZnNcuHOERVM3OnhLicISDyo88euOedB3LLUfNepFLuSvLZszn9zRhVSN8aVOyZQXhHbSOTzajHY2CRDEt6JJJUjxV2DJ5JUbHQboaY3zGk0EYYtB7vI7obYLM1nPK1tyRPmv0ltwWHmtWvoXjkp0BQOgZBFhrkEyDC7irBBZX2Paw6Hd8il6LjGnMKHK474GOqUBI9R8uJR%2FMOGEe3GsyuxUt8WCbSa7JQ14jkrlDO9cjVNFXdQv56yRCA2AEw2tiswqQMydygYRq4qhDhJhMCCCUw7ZPl53QxYM1fOOG70u5KoEKjwhsk63oH5ziS1bkAe3Rx82JtT%2ByDfk%2BpPukkUyiMMmorluNCu2czAzvnyOUIz28HbtmZ%2BHTtSk6RSRbg5k7vDlmuXDj1enoOeJOriMysfEjBae&X-Amz-Signature=dc6684b3b32e471b10f2d49bcfb3db7b0abf349053ac5dcb55848b034b78acc1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
