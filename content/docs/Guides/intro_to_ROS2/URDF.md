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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y6ECTQ2%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T121447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDOxJVlCnoFz9kk%2FP9jtPSxpgKrP68ACK4k7vlsODWLOAiEAww6sdpjszXu0MoT1GSt73%2Btrj31rOpaskM5WAaUi2hoqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgRMTx8I65aIF7OTircA453QaS6xyvC1s%2B05GHPnxx%2FXsLhlzZZInTT0FQSoMLysyY%2FK0VMlCLzDAx6DWiMxqRbCS3CnnlVJYAuLLLCWL4wQDSCGtlKeTJs0wMR%2FQrZcM6p5daWdp4k6gfdouIqtQsjMyoLW4nvYAMBQ%2BYoZ0%2BmBt7jC8qar7UXyDfRTBP2f51LSGAaRles2lKw1l3ZvbXCZ7RxI0VMEwJeoHaLe6TEwv8TwiPHliMZ%2FsKNzcG7ddQVWFmPzPtr3000abbCfNO8ZgXHdG8k2ZmKkEVBc%2BnwCkmfFm52BopB3k3zL87ITLfL5pzu1fN3JHtiwBvbr9h1pOtgM4jIXpPqI2EEz%2BawQMPrAXftIGdgED9vduhVXxToCNwrDOMTEhYSQUvb4lc78rOPC2WjSarCGIDe6olKnJvFT%2BdxJ9SI0br0Zz8fPvNq1VPJVIEXQ5cXoeTSEt0ETXyVjGZXdsx4DV82bswg%2FdKG6A7qK%2FrnPG4jVTFizzA3J9Hg%2BKyFRQXAtElSYSCw6hFTr13HDrgOasgdhGALQpqvr3uVOayIDYA%2BCfMK8fUacxyykrFnu7TKdoqVjwXHrfrZHyViGl1jqYltIfp%2FlCU8Tx1T%2F19Q510pM1jkEj5V%2FzayrXSlSfDuMJeclr4GOqUBwlx55ulEIU9YP2zgHnzSLDK09A9O9MbVeTpxC1Kee01%2BDBqR%2F1L5GhdwjaIIEQjU3H1lfA4kY83ythOX5LRYHz2t8RFLPzTn8gPANpRDc2xOb3ZWr7R54XrjQLn8Araxj2%2Bo8WkzY%2BlOVWWcWDs5ASOj70FeKLFwyDwbYocbZm5ZH7BlUbiN21dIvjXyzFjzC0Rhe7twVNncRbiW9h3dMljJD1QI&X-Amz-Signature=f735f3dec6fccb35cc61ab837e80b707c8bbe1ca5c95b3a9472c78e793b58c65&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y6ECTQ2%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T121447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDOxJVlCnoFz9kk%2FP9jtPSxpgKrP68ACK4k7vlsODWLOAiEAww6sdpjszXu0MoT1GSt73%2Btrj31rOpaskM5WAaUi2hoqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgRMTx8I65aIF7OTircA453QaS6xyvC1s%2B05GHPnxx%2FXsLhlzZZInTT0FQSoMLysyY%2FK0VMlCLzDAx6DWiMxqRbCS3CnnlVJYAuLLLCWL4wQDSCGtlKeTJs0wMR%2FQrZcM6p5daWdp4k6gfdouIqtQsjMyoLW4nvYAMBQ%2BYoZ0%2BmBt7jC8qar7UXyDfRTBP2f51LSGAaRles2lKw1l3ZvbXCZ7RxI0VMEwJeoHaLe6TEwv8TwiPHliMZ%2FsKNzcG7ddQVWFmPzPtr3000abbCfNO8ZgXHdG8k2ZmKkEVBc%2BnwCkmfFm52BopB3k3zL87ITLfL5pzu1fN3JHtiwBvbr9h1pOtgM4jIXpPqI2EEz%2BawQMPrAXftIGdgED9vduhVXxToCNwrDOMTEhYSQUvb4lc78rOPC2WjSarCGIDe6olKnJvFT%2BdxJ9SI0br0Zz8fPvNq1VPJVIEXQ5cXoeTSEt0ETXyVjGZXdsx4DV82bswg%2FdKG6A7qK%2FrnPG4jVTFizzA3J9Hg%2BKyFRQXAtElSYSCw6hFTr13HDrgOasgdhGALQpqvr3uVOayIDYA%2BCfMK8fUacxyykrFnu7TKdoqVjwXHrfrZHyViGl1jqYltIfp%2FlCU8Tx1T%2F19Q510pM1jkEj5V%2FzayrXSlSfDuMJeclr4GOqUBwlx55ulEIU9YP2zgHnzSLDK09A9O9MbVeTpxC1Kee01%2BDBqR%2F1L5GhdwjaIIEQjU3H1lfA4kY83ythOX5LRYHz2t8RFLPzTn8gPANpRDc2xOb3ZWr7R54XrjQLn8Araxj2%2Bo8WkzY%2BlOVWWcWDs5ASOj70FeKLFwyDwbYocbZm5ZH7BlUbiN21dIvjXyzFjzC0Rhe7twVNncRbiW9h3dMljJD1QI&X-Amz-Signature=4468bb1948f2cef9126a386a34f6b4c70a7cf59f5d4de7465fc07236161bf2e1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
