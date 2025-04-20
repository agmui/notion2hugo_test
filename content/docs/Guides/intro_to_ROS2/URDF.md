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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPNQXOYD%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCYVzbxqyZH1KJcgRJOMv2BeQ08Uw8qn%2F58stew5B0q2AIgKGCRkR3ylEzprr1M9uqeZREdEGYH8o7MYXMPKIEgOUwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDccwkOVJ0HLhYGeyrcA%2F65W%2BBLphy5PWyIP3MvbLGzJggZ43wV55BB93eTuae8mBF7ieuo9n%2B%2FjC%2F7vNsngj8qYA8OY%2B1J7ekr52zGpau21jVtS8CNhud6qssleaC1uJPj3cRFWl92czGQ8N%2F9gcbytF47rpAQSY5v4G8q7giPTsZaIpG0omJbYSihb8%2BfjUfFxXsUPC8mWZ5L5YrYhXvflkEMBeXiuyrKsDoF%2F1W4ayCPhSFYQ36%2BrKTa3kWd0T1o%2F4bhGx%2BHLy9b5%2FX9GNqQ8tbsid2ZLqZO55xh4DIAdPCJ%2BbmY3aBPSj4b07CR91IcYW4yUspiW%2FFzMpU9jHx%2ByOtYv%2BL2MAuro2srlb1thOJz4c3dl8Kucta85KNvNw2F1B6LaVkGMhefZD3x13zot3YJ36HInoL%2BJx1YvXT%2BiJUGT%2FjH3VGRBqViz2blDJhvZDACSnu6CZxGIoTkS%2FWuPOT%2BGJgTQBXrH5a9%2BWvIK0vgFpp02zp38iRZCa3BwP%2B%2Fi4vbnb8B0GEyfiPJMi9APnvVq1vmkwEI6OuK63jBbDcL6Tn65ADHxl1znmnKbSVpsEJJttbPGTnq%2BSLbhSyXrUf5qF6WzjFjwknPeQ%2FRz%2Bg%2BX6%2BdXFhi%2FMlXuPXLCd%2F8y8BlSCmpoWPBMOyjksAGOqUBCPkSg%2BWWJLsA2uHtwOWeBjZ4UacTUod45nLaGSjQRQui77Sjf6J%2Bv4hOe1VFtVKloFMn6zSuf%2B0i%2BLbHpNTmNJcod3vcd1Alw36klOwTelDe4TY8nOTnkQh6L3k%2B3EnNHIE%2FYET9yQmPLIGGbY7i1fVKBz8nAvnDJPBY94f%2Bw8TsCVzaMJaVZ3Cr6UW0ZaR1ak0VadL%2B0CXjuCxg4XSfb1tr6wsa&X-Amz-Signature=dabd22be80f6c850a96f9dc4d3eeae61de387966efbcdc0e44bfba38c2617b3d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPNQXOYD%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCYVzbxqyZH1KJcgRJOMv2BeQ08Uw8qn%2F58stew5B0q2AIgKGCRkR3ylEzprr1M9uqeZREdEGYH8o7MYXMPKIEgOUwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDccwkOVJ0HLhYGeyrcA%2F65W%2BBLphy5PWyIP3MvbLGzJggZ43wV55BB93eTuae8mBF7ieuo9n%2B%2FjC%2F7vNsngj8qYA8OY%2B1J7ekr52zGpau21jVtS8CNhud6qssleaC1uJPj3cRFWl92czGQ8N%2F9gcbytF47rpAQSY5v4G8q7giPTsZaIpG0omJbYSihb8%2BfjUfFxXsUPC8mWZ5L5YrYhXvflkEMBeXiuyrKsDoF%2F1W4ayCPhSFYQ36%2BrKTa3kWd0T1o%2F4bhGx%2BHLy9b5%2FX9GNqQ8tbsid2ZLqZO55xh4DIAdPCJ%2BbmY3aBPSj4b07CR91IcYW4yUspiW%2FFzMpU9jHx%2ByOtYv%2BL2MAuro2srlb1thOJz4c3dl8Kucta85KNvNw2F1B6LaVkGMhefZD3x13zot3YJ36HInoL%2BJx1YvXT%2BiJUGT%2FjH3VGRBqViz2blDJhvZDACSnu6CZxGIoTkS%2FWuPOT%2BGJgTQBXrH5a9%2BWvIK0vgFpp02zp38iRZCa3BwP%2B%2Fi4vbnb8B0GEyfiPJMi9APnvVq1vmkwEI6OuK63jBbDcL6Tn65ADHxl1znmnKbSVpsEJJttbPGTnq%2BSLbhSyXrUf5qF6WzjFjwknPeQ%2FRz%2Bg%2BX6%2BdXFhi%2FMlXuPXLCd%2F8y8BlSCmpoWPBMOyjksAGOqUBCPkSg%2BWWJLsA2uHtwOWeBjZ4UacTUod45nLaGSjQRQui77Sjf6J%2Bv4hOe1VFtVKloFMn6zSuf%2B0i%2BLbHpNTmNJcod3vcd1Alw36klOwTelDe4TY8nOTnkQh6L3k%2B3EnNHIE%2FYET9yQmPLIGGbY7i1fVKBz8nAvnDJPBY94f%2Bw8TsCVzaMJaVZ3Cr6UW0ZaR1ak0VadL%2B0CXjuCxg4XSfb1tr6wsa&X-Amz-Signature=f45efda7416c20168c05b8c820d33f1d6b66f1fcc19a0d841f7b5246c41f2336&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
