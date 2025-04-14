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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQW7HSX2%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVMRwnYSNJFxEyQD50%2Fq4%2FVIEPa%2Be93O4mt3v6CvGSLAiEAoXvoriFeImvVNoNVG2u7%2BvuZ3Pi5iA%2Fi%2BZ4XCxrymE4qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHw50sXmGBRFwpRpCrcA%2FAYRwPhbAv6BnjwnJ%2BcZ2qnisku2yNOBN1zcQG8l6taFFxvMH6R6GUOxb7OCjc2hIDoGbyKReSuhC0lYr8vr%2FU%2B9WZ2WIYok2yc%2FAdzxsFFzLGxsmsXPTuQ19SzLBXPDaRTmeA8P%2FNgwkSxT4aECjNuWFGhFo4q8hA%2BiOL49dm5pp0LYMxL8LHhpF9qXns430xTdN3OqVjVUB%2Fz3hNRt77%2FoSsuL9cm%2Fp72tGd7pGS5d3Ph0LVxm%2B9%2B%2FmSgBAP4%2Fonlq7XYJ%2F%2BFzf5TvzcH2S6yfBV9MGbIG%2F7tPe17LlohMFDfeDGNzBecHU0dQJNluVt9BdIGSLAldjQ3i8U%2BEuS8MaeTgTR10vF6rzNSWN0sS3mbPY1FgFbIuhJNBiqlv5QnQ18kKzXIY%2Ffhs52MrCb0hrCEe3gJzmVje%2BS7TuKhr3FRgH1ES1UNqWikRqG7vCLyp2%2FzfmlOSIvAvBvwN%2Bgf2rlsbZrt5qkfprmblMuRE1sDvJAZ0sDQPrN6Mh3NHVJ8WN59dMkDI%2BrQr%2FvuSkYMyg8GxRsYx7DsGEKRKaRvQmKNk33Y2vKA%2FagAUbusajgXNH5ju9zv5%2BMzSeh%2BVbcOKT%2FMJ1ZFfHW4ka6mxbfxFg4CViu2dmXslKpmMIWQ8r8GOqUBrHFAw8Q61NScZXqPPO%2BiWkBmK1%2BnxweLtMQuAalGTqQwaltlOyKwdNV9okwYoiCnn2%2BJWRzRWoYUWXXurrpacWhZehWQ6nPandIkoxKUMlra5l2Lw5epEvbqvC9RUroHtQ%2FCYnz9XvdZeyhtYwC2gwZFsvPB14FnI0Cm73Oy4h2Glbe55sZHERtWc9IeoY1LMUDI0AONS4pGDxOarbS%2FGY8JQYXt&X-Amz-Signature=27f6f34ca13a3289a609523b016ac496bba3cb2c8e577728aff9a6f7760c1978&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQW7HSX2%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVMRwnYSNJFxEyQD50%2Fq4%2FVIEPa%2Be93O4mt3v6CvGSLAiEAoXvoriFeImvVNoNVG2u7%2BvuZ3Pi5iA%2Fi%2BZ4XCxrymE4qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHw50sXmGBRFwpRpCrcA%2FAYRwPhbAv6BnjwnJ%2BcZ2qnisku2yNOBN1zcQG8l6taFFxvMH6R6GUOxb7OCjc2hIDoGbyKReSuhC0lYr8vr%2FU%2B9WZ2WIYok2yc%2FAdzxsFFzLGxsmsXPTuQ19SzLBXPDaRTmeA8P%2FNgwkSxT4aECjNuWFGhFo4q8hA%2BiOL49dm5pp0LYMxL8LHhpF9qXns430xTdN3OqVjVUB%2Fz3hNRt77%2FoSsuL9cm%2Fp72tGd7pGS5d3Ph0LVxm%2B9%2B%2FmSgBAP4%2Fonlq7XYJ%2F%2BFzf5TvzcH2S6yfBV9MGbIG%2F7tPe17LlohMFDfeDGNzBecHU0dQJNluVt9BdIGSLAldjQ3i8U%2BEuS8MaeTgTR10vF6rzNSWN0sS3mbPY1FgFbIuhJNBiqlv5QnQ18kKzXIY%2Ffhs52MrCb0hrCEe3gJzmVje%2BS7TuKhr3FRgH1ES1UNqWikRqG7vCLyp2%2FzfmlOSIvAvBvwN%2Bgf2rlsbZrt5qkfprmblMuRE1sDvJAZ0sDQPrN6Mh3NHVJ8WN59dMkDI%2BrQr%2FvuSkYMyg8GxRsYx7DsGEKRKaRvQmKNk33Y2vKA%2FagAUbusajgXNH5ju9zv5%2BMzSeh%2BVbcOKT%2FMJ1ZFfHW4ka6mxbfxFg4CViu2dmXslKpmMIWQ8r8GOqUBrHFAw8Q61NScZXqPPO%2BiWkBmK1%2BnxweLtMQuAalGTqQwaltlOyKwdNV9okwYoiCnn2%2BJWRzRWoYUWXXurrpacWhZehWQ6nPandIkoxKUMlra5l2Lw5epEvbqvC9RUroHtQ%2FCYnz9XvdZeyhtYwC2gwZFsvPB14FnI0Cm73Oy4h2Glbe55sZHERtWc9IeoY1LMUDI0AONS4pGDxOarbS%2FGY8JQYXt&X-Amz-Signature=22ef25598c35bcf78d63c3913ebfad4582f87b95552def21b11596781ed17d98&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
