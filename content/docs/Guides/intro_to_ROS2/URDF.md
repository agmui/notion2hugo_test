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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKLKALLT%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPp4PGb8fFTMp3q1Xw4l8VUx8%2BrwdsGqxga3mLgmdY8gIhALgPbOo2vT8BtSvT9aCC8b8J6V0eU19BpaHJUEfTh1w5Kv8DCHwQABoMNjM3NDIzMTgzODA1IgyEFIhtJ1hZS3AN1zcq3AOahnmY1tGRtqYwCHSl79zc3JQnbHWgipxFZp0XgwD%2Fi2nHGN79aj7kOjXqSXv3V0dHqtBt3tjYI6UyeEM4bbfQkBKqzWRZWB7e5yFnmxTTHUPySi3DcJAACCmMo5hS6IytC8PRdQpScNoN91DmSGJ5gT%2BvsAe3nQN7IUVogJJRDiL1aoKUwo5aeIlaqMLS5TCv2PriycRAQ6lbWpmX%2FqMJOTPasgCJnjfJG%2BudEdTXvwAzdOOHZ3WRoiGrsNev08rRAzoeYaJabYBCTXGBRvuA0M0l3FEdtcOcTKAYHaIlzEEZ2cdDDe5hslvomiztYbqiWip5J%2BhLeUnv%2B62D6oPfzs5WApsUwtRp87UN6iPzgnEp01CdekImAaXXeGWxGUuPsFGhkctt%2BvIN%2FWAwUV3EvygZOWje0levgOLq5oAmY5tqvIkXn2ZpIsxGXK6xhfuRdox0G4aIjJ0hkjWvqgQVNxvxzs80W%2F1C8kPEIafnWAjHWkKynnQQiTpb6pB6H9Hv%2BuSKqOPYJMc%2Fm61p83AQEBFHVa%2FZUDKMLfdOeE6rm0SO0D9mwIj5HRu54Iu4vAfTo6obsm7IqTDik54adWWHwoTb5XNXiQMRFaWsxp8U59EjqaBrW%2FpHhF%2BTvjC5lZLCBjqkAQt0il3vI%2Bpor3%2FIQe72KhXj2jdGg4W5fIyTXATyYRu41DRlg9J3GNG6xhvvb%2FZeC1UCowejsbeDhly0e6skvmHhi35syRVPt3dwCAd9zwjInnKaHEs1JP7VFY5s9vsaDK6GX8gPkIrXtQveCSMsAydtcbc4iHUSi9HOymZnQ4jsHcc%2B%2B6pGMBq6MBuXWOWXoUJbVcRRmJWD2jRhfwv2%2BC0GEgDq&X-Amz-Signature=b0859d3a6a606974931f6a001988131562588c13b6c2a5594f632fa412d1edf5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKLKALLT%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPp4PGb8fFTMp3q1Xw4l8VUx8%2BrwdsGqxga3mLgmdY8gIhALgPbOo2vT8BtSvT9aCC8b8J6V0eU19BpaHJUEfTh1w5Kv8DCHwQABoMNjM3NDIzMTgzODA1IgyEFIhtJ1hZS3AN1zcq3AOahnmY1tGRtqYwCHSl79zc3JQnbHWgipxFZp0XgwD%2Fi2nHGN79aj7kOjXqSXv3V0dHqtBt3tjYI6UyeEM4bbfQkBKqzWRZWB7e5yFnmxTTHUPySi3DcJAACCmMo5hS6IytC8PRdQpScNoN91DmSGJ5gT%2BvsAe3nQN7IUVogJJRDiL1aoKUwo5aeIlaqMLS5TCv2PriycRAQ6lbWpmX%2FqMJOTPasgCJnjfJG%2BudEdTXvwAzdOOHZ3WRoiGrsNev08rRAzoeYaJabYBCTXGBRvuA0M0l3FEdtcOcTKAYHaIlzEEZ2cdDDe5hslvomiztYbqiWip5J%2BhLeUnv%2B62D6oPfzs5WApsUwtRp87UN6iPzgnEp01CdekImAaXXeGWxGUuPsFGhkctt%2BvIN%2FWAwUV3EvygZOWje0levgOLq5oAmY5tqvIkXn2ZpIsxGXK6xhfuRdox0G4aIjJ0hkjWvqgQVNxvxzs80W%2F1C8kPEIafnWAjHWkKynnQQiTpb6pB6H9Hv%2BuSKqOPYJMc%2Fm61p83AQEBFHVa%2FZUDKMLfdOeE6rm0SO0D9mwIj5HRu54Iu4vAfTo6obsm7IqTDik54adWWHwoTb5XNXiQMRFaWsxp8U59EjqaBrW%2FpHhF%2BTvjC5lZLCBjqkAQt0il3vI%2Bpor3%2FIQe72KhXj2jdGg4W5fIyTXATyYRu41DRlg9J3GNG6xhvvb%2FZeC1UCowejsbeDhly0e6skvmHhi35syRVPt3dwCAd9zwjInnKaHEs1JP7VFY5s9vsaDK6GX8gPkIrXtQveCSMsAydtcbc4iHUSi9HOymZnQ4jsHcc%2B%2B6pGMBq6MBuXWOWXoUJbVcRRmJWD2jRhfwv2%2BC0GEgDq&X-Amz-Signature=365ebd7a3f61a735028d2184345ab15b881d753a3c3d5ecc5b3311367a5e7bc0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
