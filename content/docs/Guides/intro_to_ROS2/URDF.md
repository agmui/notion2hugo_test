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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOQVP4MH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIBiO7GAULCeZDd3He70WD9VdmEAHHfAk2MMg%2BwRJxiOxAiEApILVEutBRSnAw8VXO2Kd%2B768NuO2M0ZuKrDa8IKI7vQq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDFd7ov2vDxjRLSbw1CrcA3upTlbJv%2FCWCL645QOXOh5j6nNCWwODjxDkiTP5wJHzkUEwQ3GTJ6mUTd3B9eQNEVr3jKr4SrABhharveW%2F58KADlf%2FSQpOVPQ3X1791PqmxOGowxizn3ZYr3rgaWCQHkIUa%2B%2BRtDVENI0gc7hIjbFzrsHn73MeTdwrmfyjC3wtY%2BqiAH9rZARhnei5OseW0UmdHfZ%2B1FXdMUYocHWz4H5z7M6fQkAtJVJ64hAzlGaj%2F3coQULIGfi54eNxcJcFtrFR18Tfm%2Bopo%2FcPCuW5NYqzsl%2FheeTR%2Fwa0K3cfuXZspel6ZV5bboljizvgnVmaVg9Lol6yvo0ECKob271hL3O0z%2BgPiSb7SL4cNMVQYL9iCIT5bJc7oXlIT0BPaMg%2BUnCBTRvTpiKvcH47PyXccykcLb8CIvyHYqdFRaNIvQN5QEDbofRsG%2B19xX%2Fdzqzqpe%2BqJQ2ioifHtFxiQgGfbUVf7VA3%2Fqr3xDTVoikXVNw%2FjaJrrOnalFOVKJfmP9RLvhSzjzMkf9pmg4PgUcz%2BytbcyCNOQz40syWmLvHnikOtvCEdRWd27mE34rv%2FkgdlJThERgp5ZVbJIjDkO2sVyopJfrUGxsWQxnr0MVex6Ag3q%2BbGyBEZTmC2IMwwMKGWyMEGOqUBPg3%2BBjf97EjKz7NqBl0%2BJh6crpPeMI7KbJ5L9lRZUMd2%2BtojHpYRE41g7tBM%2FRcccH0H5tF9DC6wQXc0hwOloG7wiYIOntGDWAlB40iQwjMtB7oxV3PX1LuOcrQHo3o9sYb3lGMoJnDx6vAMlIe84Wq50I3Oh4xULdN6Y7Fk5bhdFvND%2B8z8%2FjEW39563%2BMKErSrBOfgzni7A%2Bi4yJkD0ncGHeBT&X-Amz-Signature=eb5c21d210e8e052b221616696887c312410c66ea29f2b5093374f3bd393209b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOQVP4MH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIBiO7GAULCeZDd3He70WD9VdmEAHHfAk2MMg%2BwRJxiOxAiEApILVEutBRSnAw8VXO2Kd%2B768NuO2M0ZuKrDa8IKI7vQq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDFd7ov2vDxjRLSbw1CrcA3upTlbJv%2FCWCL645QOXOh5j6nNCWwODjxDkiTP5wJHzkUEwQ3GTJ6mUTd3B9eQNEVr3jKr4SrABhharveW%2F58KADlf%2FSQpOVPQ3X1791PqmxOGowxizn3ZYr3rgaWCQHkIUa%2B%2BRtDVENI0gc7hIjbFzrsHn73MeTdwrmfyjC3wtY%2BqiAH9rZARhnei5OseW0UmdHfZ%2B1FXdMUYocHWz4H5z7M6fQkAtJVJ64hAzlGaj%2F3coQULIGfi54eNxcJcFtrFR18Tfm%2Bopo%2FcPCuW5NYqzsl%2FheeTR%2Fwa0K3cfuXZspel6ZV5bboljizvgnVmaVg9Lol6yvo0ECKob271hL3O0z%2BgPiSb7SL4cNMVQYL9iCIT5bJc7oXlIT0BPaMg%2BUnCBTRvTpiKvcH47PyXccykcLb8CIvyHYqdFRaNIvQN5QEDbofRsG%2B19xX%2Fdzqzqpe%2BqJQ2ioifHtFxiQgGfbUVf7VA3%2Fqr3xDTVoikXVNw%2FjaJrrOnalFOVKJfmP9RLvhSzjzMkf9pmg4PgUcz%2BytbcyCNOQz40syWmLvHnikOtvCEdRWd27mE34rv%2FkgdlJThERgp5ZVbJIjDkO2sVyopJfrUGxsWQxnr0MVex6Ag3q%2BbGyBEZTmC2IMwwMKGWyMEGOqUBPg3%2BBjf97EjKz7NqBl0%2BJh6crpPeMI7KbJ5L9lRZUMd2%2BtojHpYRE41g7tBM%2FRcccH0H5tF9DC6wQXc0hwOloG7wiYIOntGDWAlB40iQwjMtB7oxV3PX1LuOcrQHo3o9sYb3lGMoJnDx6vAMlIe84Wq50I3Oh4xULdN6Y7Fk5bhdFvND%2B8z8%2FjEW39563%2BMKErSrBOfgzni7A%2Bi4yJkD0ncGHeBT&X-Amz-Signature=b9f5ebc8b78ca06cd4d7c69688617a8fdc567039dd836351611b3e81d1266cb1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
