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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF7RO6PW%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNZLy0HjaNHxVcTWNEbYReCVjl6UzIOaDAUJ%2F1kO53ZAiEArGFxezpRszkrUWmURra9LPqNTUudjsVA8WCX%2B%2FWtyacqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJi5r%2BANAi%2Bu00KS0ircA2i5XMkN4NgIBJ9xtg8ENxQmyWvBdIwq7qf6xYaCizwvAA3hac4fzOYp2q2qgPXR7Ttygl9zwi%2F%2B9HN%2B8lk7e3yxkrRUsDfCSXenpqAFKreEQBByFjzboaVzADd39tGMEgZMuhHpP5YeUQ4TR1uKc8%2BkITI2haXDz1L9o89FMQgMmS4Se%2B23QBq21BOaBvfEEdNijinRg%2FppJFLzwAyb%2FpaGC0IIwecxbnB%2Fuma8Tw9ELS1z0xN9UECsxT1wAoz%2FbTMAH2EiLpbObYZPiSPE3fMoAqxStPxbN0uZm0FxklKdsPHWIQwpbK8KKElLn1tGsCDN%2BT%2FHk%2BPjHg87fxENv6rCJ2lxVY4ry15qAw0Vh%2Fkoao9NPTEDl4vPLBB59J6pCzauquEYrqGg%2Fj0c3HjzXsXE1bF84wektQYe4azZNYHWCbwhOER%2FNeB54NIDeCxK1ky5mhan7vBKo4p2L9MJb6p4ExEBLG9xBI04Zcy5evOxOght5%2FtNL6UiRra7muN%2F87wCkAwyjMGbGRs6ODMxw9b8xZoEMv%2BoaRVt%2FquTNTDXXdUJ8sB6YlverySm9t9lOmNnksa1QpRZN5hR9oNjVZBUGhd4IVuMdf9g0D6U6zSn70mQvWrekeqZCDdlMKbLs8EGOqUBgpEwLo3yIjQYV3ypVF%2FYZGQR9IekqcgVuo3Ud7sFDoaTIQXFQgDVcKUq7yk1vjr%2Ba5%2BXG6IWBnEI9ae7mHvVT%2BwAfYT5dQNu1Ipr093S4d14oQu9gPmRNo7%2FXPOINs8e2fCCAS%2F69LuZElrJ1ojjcVLffjBlH8MuBJ0alMuKPEsty0jRmRbcoa%2BKnS6lUpIFw5DgkD0jm7atxBGWHNDVZBec4xv7&X-Amz-Signature=b804ac7c9fd5008afa1af6431475b21d71c7056bbde4ffdbbc5e246df8e6416c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF7RO6PW%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNZLy0HjaNHxVcTWNEbYReCVjl6UzIOaDAUJ%2F1kO53ZAiEArGFxezpRszkrUWmURra9LPqNTUudjsVA8WCX%2B%2FWtyacqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJi5r%2BANAi%2Bu00KS0ircA2i5XMkN4NgIBJ9xtg8ENxQmyWvBdIwq7qf6xYaCizwvAA3hac4fzOYp2q2qgPXR7Ttygl9zwi%2F%2B9HN%2B8lk7e3yxkrRUsDfCSXenpqAFKreEQBByFjzboaVzADd39tGMEgZMuhHpP5YeUQ4TR1uKc8%2BkITI2haXDz1L9o89FMQgMmS4Se%2B23QBq21BOaBvfEEdNijinRg%2FppJFLzwAyb%2FpaGC0IIwecxbnB%2Fuma8Tw9ELS1z0xN9UECsxT1wAoz%2FbTMAH2EiLpbObYZPiSPE3fMoAqxStPxbN0uZm0FxklKdsPHWIQwpbK8KKElLn1tGsCDN%2BT%2FHk%2BPjHg87fxENv6rCJ2lxVY4ry15qAw0Vh%2Fkoao9NPTEDl4vPLBB59J6pCzauquEYrqGg%2Fj0c3HjzXsXE1bF84wektQYe4azZNYHWCbwhOER%2FNeB54NIDeCxK1ky5mhan7vBKo4p2L9MJb6p4ExEBLG9xBI04Zcy5evOxOght5%2FtNL6UiRra7muN%2F87wCkAwyjMGbGRs6ODMxw9b8xZoEMv%2BoaRVt%2FquTNTDXXdUJ8sB6YlverySm9t9lOmNnksa1QpRZN5hR9oNjVZBUGhd4IVuMdf9g0D6U6zSn70mQvWrekeqZCDdlMKbLs8EGOqUBgpEwLo3yIjQYV3ypVF%2FYZGQR9IekqcgVuo3Ud7sFDoaTIQXFQgDVcKUq7yk1vjr%2Ba5%2BXG6IWBnEI9ae7mHvVT%2BwAfYT5dQNu1Ipr093S4d14oQu9gPmRNo7%2FXPOINs8e2fCCAS%2F69LuZElrJ1ojjcVLffjBlH8MuBJ0alMuKPEsty0jRmRbcoa%2BKnS6lUpIFw5DgkD0jm7atxBGWHNDVZBec4xv7&X-Amz-Signature=2a08f248dd22e5e09dfeac717dc6ec04c47890a54b2a3df0007aa27f7941fc52&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
