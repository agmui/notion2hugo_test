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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM4GNOCK%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCq8OiGotmxsZPah6KYRD%2B%2BdP%2BbwAAysOBlV3USA%2FQDBAIgDmEmfQsgS5%2B4hm4C59ir5JFQKLO9eBcubmfw3PzP6JUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDL3VXE9jOpBQjCP2oCrcA6eIFmELBSKKcSD5b47dsq%2Fc92%2FKnwbX%2Fdbrjyd1WVD2tjkF5txESKpVyu8ZFNHsBNLzRP%2Ft8dHzStOoJ1r7lifK3rtvDFczJcvnGsCNoRF%2BsOK8enXFYGm0QAvxE3Pel%2BV9GoZ1iUUPZG0oskzAQBd4iXph%2BepwgXcGVBBCRiKw%2BGowlA22e4PYLnvRB0WLyH03TV8D3%2Bt5J9w3ZGpeeyTJDvD4oDHCjJPWbEokGG1BBVaH50VJKbbO7bKTOLlnGNK3uOrKCw%2FgxzjnCuVc4WaIUAFN82IyRKgpDRb5J0cs0H8sTt13mn0i7mArAR1x%2F07AmR%2BOcRPnesjdBO7hSsfGR7PnIUWzBpfQttKlB%2Fde1IiSk44UtBAw4JeJIEM4Aq54H4IY01aUa4Oktui79ppbKROx9vooHOFyMerMthqwz6TZnsPwQvtpWHRFNGMm3ob6Eb0Qruhtih54I8F%2FcLW0T9%2FBFlSFvTkdInu1HBYXPdxfDyTg61Nvon4sn4X3BO%2FkQMfJBpnGtnsbPeec3YQMjvSe%2Bw9gMs0FoYEm4qROpCp%2ByGNA%2FVphVhg%2Blh5Q7hLw2cewOtCobbOSSDc8wvefolqD7z05bI9BPBSl9t7z7wdDMs6XX9wKEtJkMIKrgcIGOqUB9HgPPlCzxI4b83CrluzAHivQFQD0rwSMk0WX4P2K8fgtnJx0Ll8rqzvRKUZv4VP46AmPQiVZ%2BOSlBtbF4HtM%2BZhMZx8mg36HafeWOG3ptWtT5%2BitsLBi%2BUNDLBub43L1%2BSbTu9mGXSm7lHnAUpVjm5Rq0PbyoHhjiHSNtStp3Krvo2H9qHvnDgUVjfIuLegQCepWfRFtOsS9pyCnt9cYiSnGq5Gr&X-Amz-Signature=0cbcdd72c0d885316fd2af710d1285cf2d987053c51d0e9441063d7a0add4781&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM4GNOCK%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCq8OiGotmxsZPah6KYRD%2B%2BdP%2BbwAAysOBlV3USA%2FQDBAIgDmEmfQsgS5%2B4hm4C59ir5JFQKLO9eBcubmfw3PzP6JUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDL3VXE9jOpBQjCP2oCrcA6eIFmELBSKKcSD5b47dsq%2Fc92%2FKnwbX%2Fdbrjyd1WVD2tjkF5txESKpVyu8ZFNHsBNLzRP%2Ft8dHzStOoJ1r7lifK3rtvDFczJcvnGsCNoRF%2BsOK8enXFYGm0QAvxE3Pel%2BV9GoZ1iUUPZG0oskzAQBd4iXph%2BepwgXcGVBBCRiKw%2BGowlA22e4PYLnvRB0WLyH03TV8D3%2Bt5J9w3ZGpeeyTJDvD4oDHCjJPWbEokGG1BBVaH50VJKbbO7bKTOLlnGNK3uOrKCw%2FgxzjnCuVc4WaIUAFN82IyRKgpDRb5J0cs0H8sTt13mn0i7mArAR1x%2F07AmR%2BOcRPnesjdBO7hSsfGR7PnIUWzBpfQttKlB%2Fde1IiSk44UtBAw4JeJIEM4Aq54H4IY01aUa4Oktui79ppbKROx9vooHOFyMerMthqwz6TZnsPwQvtpWHRFNGMm3ob6Eb0Qruhtih54I8F%2FcLW0T9%2FBFlSFvTkdInu1HBYXPdxfDyTg61Nvon4sn4X3BO%2FkQMfJBpnGtnsbPeec3YQMjvSe%2Bw9gMs0FoYEm4qROpCp%2ByGNA%2FVphVhg%2Blh5Q7hLw2cewOtCobbOSSDc8wvefolqD7z05bI9BPBSl9t7z7wdDMs6XX9wKEtJkMIKrgcIGOqUB9HgPPlCzxI4b83CrluzAHivQFQD0rwSMk0WX4P2K8fgtnJx0Ll8rqzvRKUZv4VP46AmPQiVZ%2BOSlBtbF4HtM%2BZhMZx8mg36HafeWOG3ptWtT5%2BitsLBi%2BUNDLBub43L1%2BSbTu9mGXSm7lHnAUpVjm5Rq0PbyoHhjiHSNtStp3Krvo2H9qHvnDgUVjfIuLegQCepWfRFtOsS9pyCnt9cYiSnGq5Gr&X-Amz-Signature=eedf18f84acd9567062bf0daa2bd06460ef99744e6b4b80efe73a1c920a883f5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
