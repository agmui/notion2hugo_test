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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4GCI6AR%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T131455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCLRznTEQ0KiFoKpNKGFPWoD%2BydP5l9%2BLrmoBgNR%2F%2FGZAIhAIzgjXfkmHaiwFDDv8H5hh37lM8J30uQQH1DR7G9zJjQKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKVGW8RpN5OSFsIdYq3AOStgHQyb0BhZMFjLxPg%2BBaKKSL%2Fj7%2BsfmYJfIk63by%2F6ItBZDku%2FphuJTYumUKj6X8GZ5umhtQVJqbbDHJGwMGDBUCRbtDlxcocHTAbnkTeU%2FwpWt5WdkQJHU4Pv%2FfumC%2FcKmzDzHW9F34keUIdffTClXV8gPGUyr7LqoCfSI46xK2ULfttvFLnldUs%2Ba7ycjMum4j8zfOn3k8%2FWgJnIvFPSXKN2uEWGAzoRTdeTTR0TE9samxT5hmTbsR17ewe%2BniI444ftaojp5sqDPoIZYl7P1xuMjY2x2m3zY2VqcH1X0tzyucpuT0chZLeOteP0eI3AgFUwFMxeOtfKTQSW041VUF3JQPfM1ynZM00aW5rzJ21C%2BXsCMl3dr5TDhw3LujfaS1vyiylIfN6YLoFUYADPpC15oeAXCyxa5Ce9HrVLR6wQE37UW1%2B3mvZK2qnQX3LsqmvXVfb1ZLx7Myw2nNig8z9tA6W9O%2F6t%2FKAXeuTT2ZOpJ6Ui3CCXuwrKrdDBDgPEaPdcpOjiLudsOyuXT4Zy5gwAyePevXycVXGifsHknG%2FwI%2B7fX47SVjo%2FWCMWuRkj1QJUmYvGpZ%2Ba2xpfuqtgV6NDZeRN5Lxctm%2F8IvSHH3Qzqz3o%2FzVlbamjCX8KO%2FBjqkAfh2nZMZEKWP0rQyv5nXbn0nLL5%2BzQquOeeXSMt9S1WXFHEdGShRQqRiXUTfFWhvL%2Fayg1kfT1kPLo3JZ32JHHle9Oriduu2W1SLAOFQl1wJJZg0edaImGoZZPlVlAxxRiZchYUYopWffLb2jiCWiyKSvoZx2gWhdZIyOH9nyTHmSi7WL3HUOmEC97ghRvk%2FbeZwW8Z60seXsJ8JG5%2BlvboFnI0S&X-Amz-Signature=0bb4519e90708ff895c6078c98c942ebe1974ac9b0ab81e0502b6394909a642e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4GCI6AR%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T131455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCLRznTEQ0KiFoKpNKGFPWoD%2BydP5l9%2BLrmoBgNR%2F%2FGZAIhAIzgjXfkmHaiwFDDv8H5hh37lM8J30uQQH1DR7G9zJjQKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKVGW8RpN5OSFsIdYq3AOStgHQyb0BhZMFjLxPg%2BBaKKSL%2Fj7%2BsfmYJfIk63by%2F6ItBZDku%2FphuJTYumUKj6X8GZ5umhtQVJqbbDHJGwMGDBUCRbtDlxcocHTAbnkTeU%2FwpWt5WdkQJHU4Pv%2FfumC%2FcKmzDzHW9F34keUIdffTClXV8gPGUyr7LqoCfSI46xK2ULfttvFLnldUs%2Ba7ycjMum4j8zfOn3k8%2FWgJnIvFPSXKN2uEWGAzoRTdeTTR0TE9samxT5hmTbsR17ewe%2BniI444ftaojp5sqDPoIZYl7P1xuMjY2x2m3zY2VqcH1X0tzyucpuT0chZLeOteP0eI3AgFUwFMxeOtfKTQSW041VUF3JQPfM1ynZM00aW5rzJ21C%2BXsCMl3dr5TDhw3LujfaS1vyiylIfN6YLoFUYADPpC15oeAXCyxa5Ce9HrVLR6wQE37UW1%2B3mvZK2qnQX3LsqmvXVfb1ZLx7Myw2nNig8z9tA6W9O%2F6t%2FKAXeuTT2ZOpJ6Ui3CCXuwrKrdDBDgPEaPdcpOjiLudsOyuXT4Zy5gwAyePevXycVXGifsHknG%2FwI%2B7fX47SVjo%2FWCMWuRkj1QJUmYvGpZ%2Ba2xpfuqtgV6NDZeRN5Lxctm%2F8IvSHH3Qzqz3o%2FzVlbamjCX8KO%2FBjqkAfh2nZMZEKWP0rQyv5nXbn0nLL5%2BzQquOeeXSMt9S1WXFHEdGShRQqRiXUTfFWhvL%2Fayg1kfT1kPLo3JZ32JHHle9Oriduu2W1SLAOFQl1wJJZg0edaImGoZZPlVlAxxRiZchYUYopWffLb2jiCWiyKSvoZx2gWhdZIyOH9nyTHmSi7WL3HUOmEC97ghRvk%2FbeZwW8Z60seXsJ8JG5%2BlvboFnI0S&X-Amz-Signature=ab86df23399f95695d83284edf40dec6e0ea8229636c7a4854303883c8047aa5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
