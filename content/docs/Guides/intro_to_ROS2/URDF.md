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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZTHFYN2%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIEEe5HMHxRW%2FDHuadFzMBdnYgom67jFqXtVCI4Z2778XAiEAsb%2B%2BKmR47PMxd9mVKmPXwVw7sPPYmvZ6K%2Bxm38WojbAq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDI58%2FU55EpYjrB%2BMLSrcA7qIpxx5GL9FgwcVJdHa9cusm00z4iGncHZRdqR16%2BrGmAe7m%2FwQKQndmJsyxLUgs3ExnLzJAgvVsCiS%2FJ3aQeljnvt8L8h%2BPCPQY4nDgyvHf0hPameTOB1oARBJxE%2Ffq83ypT0Ix5hHojcdIDGZv4D2RRlz4EQ6Km%2FV%2FcGS3%2BsIaizjRKD8ythqWlLpo2mUyu58KgvEvHHmDg4ulH3YSJ9jlXD%2FIJcDlaBz0oF2MfkpkgstyLo5Gqjl5WGBPviLkDs9vWaFyHv8viEMcmHLqUpHDAoYrdwTQOXCX9hCGkFlavkHsNsuJZmbdvJ97baup4515NOOYgaFRF5XfjOJgNQhe%2BbOonNbA5QOk%2BaNqaSifYNb75kjQKkMah9NNstDfcDf%2FFXfOqZNNnBe3GyfVrFrHHKA1%2FxEDmMFPpk6zGRced9dC5fxmerKwbSDsmsLmMWlmhFWH4oJhwdBeAxGOst8Hy9w53f%2BxKNFGiG82PLblOhe9UJASQzzh9JHq7P9pkp%2Fbb%2Bh%2BIaAYbnMoxagGv3uA0XydVFQh5DFecUfkmGuHdVu4OuKO2iHz1L%2FpHrH%2Fe6OfT83vIO9D0RpIYne58bhb2nm3I7e4EeFVd7byT5APi9oLpLmt56ciw08MOeU5r4GOqUBMylgInIBzAr8qh%2F3rSa4OQxwIEDqCEursPw5Ce77kGhLtVECpKx86CCwXIQ%2Fy07izy8GdZpoJjTuwsf4Su%2FijMCrmMdE%2FCUT8f1DykA0vzyROk2zo3%2F3Brm48rDomWJ3VLROzWlG24a%2FkMUJ1142cgSbalwmgJRt8394NX9T8tRB%2BtUy2ClFC9KUh1x5DNsYFWANvNbIh%2FlWM4z8kgXkBkNgJ9TM&X-Amz-Signature=54a2d2413e9700d3e41194812d59d299796267686029473165869d30a99706f3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZTHFYN2%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIEEe5HMHxRW%2FDHuadFzMBdnYgom67jFqXtVCI4Z2778XAiEAsb%2B%2BKmR47PMxd9mVKmPXwVw7sPPYmvZ6K%2Bxm38WojbAq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDI58%2FU55EpYjrB%2BMLSrcA7qIpxx5GL9FgwcVJdHa9cusm00z4iGncHZRdqR16%2BrGmAe7m%2FwQKQndmJsyxLUgs3ExnLzJAgvVsCiS%2FJ3aQeljnvt8L8h%2BPCPQY4nDgyvHf0hPameTOB1oARBJxE%2Ffq83ypT0Ix5hHojcdIDGZv4D2RRlz4EQ6Km%2FV%2FcGS3%2BsIaizjRKD8ythqWlLpo2mUyu58KgvEvHHmDg4ulH3YSJ9jlXD%2FIJcDlaBz0oF2MfkpkgstyLo5Gqjl5WGBPviLkDs9vWaFyHv8viEMcmHLqUpHDAoYrdwTQOXCX9hCGkFlavkHsNsuJZmbdvJ97baup4515NOOYgaFRF5XfjOJgNQhe%2BbOonNbA5QOk%2BaNqaSifYNb75kjQKkMah9NNstDfcDf%2FFXfOqZNNnBe3GyfVrFrHHKA1%2FxEDmMFPpk6zGRced9dC5fxmerKwbSDsmsLmMWlmhFWH4oJhwdBeAxGOst8Hy9w53f%2BxKNFGiG82PLblOhe9UJASQzzh9JHq7P9pkp%2Fbb%2Bh%2BIaAYbnMoxagGv3uA0XydVFQh5DFecUfkmGuHdVu4OuKO2iHz1L%2FpHrH%2Fe6OfT83vIO9D0RpIYne58bhb2nm3I7e4EeFVd7byT5APi9oLpLmt56ciw08MOeU5r4GOqUBMylgInIBzAr8qh%2F3rSa4OQxwIEDqCEursPw5Ce77kGhLtVECpKx86CCwXIQ%2Fy07izy8GdZpoJjTuwsf4Su%2FijMCrmMdE%2FCUT8f1DykA0vzyROk2zo3%2F3Brm48rDomWJ3VLROzWlG24a%2FkMUJ1142cgSbalwmgJRt8394NX9T8tRB%2BtUy2ClFC9KUh1x5DNsYFWANvNbIh%2FlWM4z8kgXkBkNgJ9TM&X-Amz-Signature=1487fdd892fd1fd4fff40e7943189883730556412c2e31867a06b7738b8e4a7f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
