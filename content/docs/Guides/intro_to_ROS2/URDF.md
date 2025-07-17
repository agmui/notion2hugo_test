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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677WVEFMC%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDmAZT5WrD01Ki%2BqP5aB4LBeuBg6E058Xwg%2F%2FJrfQSp2QIgZbW1bynlsFQsHN2txp3wxNJg%2FDCZLprBDfll%2F0a6Mowq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJJ98rSfE3X%2FUDctnCrcA5UjhmngPdabIFrAqy4NXbLOCTvkD06WXorl%2B8mXQs1VvFl2VYwYjjaiffWR0Iv2IBhaRC3T%2FmCDZrxgvkDqJTxrMeJqrVNILLcidtKmVCXzWx0a1h8XGJUtNkCNW%2BKWO%2FJwmtUufLiLxuS%2BVfAbHjhzpF%2F7gPlrKzlxzsGa0ULGAeMm3WeoeojAZwBW3wXKyiT%2FhKTkriS5cv3Lij5v%2BRDb8bh8fnEiQFdBpOIGY%2B09XknIAXf4fzWr4CPtNIEviXfZvcgNS8Osi0EYRkzK6SWVyIpFMmCdqj4h1PZvaSJjd32oKlFGSvSwMSryw1CJTfK3PScznvLF2I7y1z3f5WFq3aZWZUH119QHs6mrnVoLzieS4iwXxNvO7zhdvyF2C1GI04pe8AJDQ90RXUHaXm992%2BwTbZrXaq0sFaXn8BRcUuVZlnA3ty1eWb5XOj8XSK32x9viKem8DP6gHdSdxP8AMUcAbzPj%2FtdlGLaBHwSrWcWU%2F%2FMGvHjtKjzcinXKp7%2B23Rq3xUevePREKsuBWHwJBFpCRf498Wk9GSQPnmuHA%2ByC7OrRsso1bkeGNEDMCpwt7HKFPwhXMc%2FAHvbYLRzZ7PdBdBj%2Bzi6zgemoFCSQPxu7AyBnxxeKsiLgMLa%2F5MMGOqUBwuLaGcSahRb41mZeJp9E9%2FPiT2FHPvh3rEvEUqz3ejygKEaGZXr4XBg7FJGSkvFjD0Zr94ZKNgc4Q9cp6dt%2FrMfeiLK1q0b%2FMhLTXL32q2DeF8xEUQsXvH4R2srdaHcZvh%2F7k9R6Ap7ES%2Bczna%2B%2BGiddQyJDYKQJ3YxQGlnblsvL%2FGPHut5EmAP5f%2FvqLhe5Fkn9Rh3V%2FapGaSV%2BcWInh5kq4EA8&X-Amz-Signature=911960b781e29fea32e6b351dc649b9098eb9bfc3773b4f9c413c2f39138ebb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677WVEFMC%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDmAZT5WrD01Ki%2BqP5aB4LBeuBg6E058Xwg%2F%2FJrfQSp2QIgZbW1bynlsFQsHN2txp3wxNJg%2FDCZLprBDfll%2F0a6Mowq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJJ98rSfE3X%2FUDctnCrcA5UjhmngPdabIFrAqy4NXbLOCTvkD06WXorl%2B8mXQs1VvFl2VYwYjjaiffWR0Iv2IBhaRC3T%2FmCDZrxgvkDqJTxrMeJqrVNILLcidtKmVCXzWx0a1h8XGJUtNkCNW%2BKWO%2FJwmtUufLiLxuS%2BVfAbHjhzpF%2F7gPlrKzlxzsGa0ULGAeMm3WeoeojAZwBW3wXKyiT%2FhKTkriS5cv3Lij5v%2BRDb8bh8fnEiQFdBpOIGY%2B09XknIAXf4fzWr4CPtNIEviXfZvcgNS8Osi0EYRkzK6SWVyIpFMmCdqj4h1PZvaSJjd32oKlFGSvSwMSryw1CJTfK3PScznvLF2I7y1z3f5WFq3aZWZUH119QHs6mrnVoLzieS4iwXxNvO7zhdvyF2C1GI04pe8AJDQ90RXUHaXm992%2BwTbZrXaq0sFaXn8BRcUuVZlnA3ty1eWb5XOj8XSK32x9viKem8DP6gHdSdxP8AMUcAbzPj%2FtdlGLaBHwSrWcWU%2F%2FMGvHjtKjzcinXKp7%2B23Rq3xUevePREKsuBWHwJBFpCRf498Wk9GSQPnmuHA%2ByC7OrRsso1bkeGNEDMCpwt7HKFPwhXMc%2FAHvbYLRzZ7PdBdBj%2Bzi6zgemoFCSQPxu7AyBnxxeKsiLgMLa%2F5MMGOqUBwuLaGcSahRb41mZeJp9E9%2FPiT2FHPvh3rEvEUqz3ejygKEaGZXr4XBg7FJGSkvFjD0Zr94ZKNgc4Q9cp6dt%2FrMfeiLK1q0b%2FMhLTXL32q2DeF8xEUQsXvH4R2srdaHcZvh%2F7k9R6Ap7ES%2Bczna%2B%2BGiddQyJDYKQJ3YxQGlnblsvL%2FGPHut5EmAP5f%2FvqLhe5Fkn9Rh3V%2FapGaSV%2BcWInh5kq4EA8&X-Amz-Signature=836a62e7dab63111921cf07d6d38a8d3ca1cb97519d521ecf3bc66c702215e8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
