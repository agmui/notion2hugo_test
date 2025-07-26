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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN6LBTOA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICjKsU2CLSVWBqmyeRVMp7TCVbCxRjvytwdgfCY1%2FA52AiEA114bYY7DUrS7Dih3dW6Wz1hhI282GaLC1UsiUgC7tpAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDPd7uyCj1vs4e%2BRaaircAw45L2Kl5k01FPU%2B1vJDxkU3%2FtW6goaLeaDxopjv4oZrImVreVgnBG7luu7HgN3K4H5xfsLuD5kYi4%2BLws5OQuE1V4q0HUezfoJycGTxN%2Bsw2AR7F0r85Md9BPOeTV%2FeKy8cknx0gATjJkjybXGgaijoNMeE%2FW0wWDRc4JzU7%2BbY%2BRhZ5dn3t4%2BD9e5I46FTnzJ5JzNnBskWC9ZvVj%2FImySLWHiwEUIhuXODlNOE5bVIlfcXVsaYG0WjIoxb%2B4uVxfGhfcd8LjHqjWr6ZoHO%2FwlN8T%2FMIVPITKcMZbZxXJB5whWjcjUsBPVJkV8lMO5w7wk1IUR8%2FtROLnGXit3plaZWGq4l8oPxglJwfm5pzIexFvTXfqAXnCd9z1UJ%2FH7sfTs3BLsm8PQRP2UurTkJSY0LFwCTpOcPE8rXnvABclkdySvZdhARyo5tEAkBcQzw0OboDsabWURCBXN%2BtJ%2BRAymXeHafMT1jwwbH%2BtLkhbxFBSn9vJltxdVKazm%2BEDgYQ8ePxflnKc6RR4xhggxG6Eqbyag%2FbKXeXQ2fxS5EhyGkpXS1ugPrwrJ0%2BfOuqE%2FPcymWvceH7yA4UZfGiMo6XcQHhW3jZyZ1dL9t88ikncYA553%2Fe2r838pYnWyVMLfikcQGOqUBJRFfE1eQMH%2BshQ918E3BXc%2BNffWHbmd396A6e%2FrGjczTMZVH2tYgoyRoWo6k8wMHrAzfTUHH3L59CYfCOR2sl1ZuryHmQy9cFAxEPBxCmfaqtiF1bLjM4z7aZKfZB%2FRwQ2WABuc5F%2FUutfY6%2BtFSdYwQhWHD5jfQ9JoA57GHFcHoeB%2B1haWDKTs5DalN1ruSU3NXS9inXNX%2FGmenui0Boflq1vOY&X-Amz-Signature=ca2d1c7221bdabb8b4114be95fd4f7a54e569f952e46e1e38530e5369795b563&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN6LBTOA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICjKsU2CLSVWBqmyeRVMp7TCVbCxRjvytwdgfCY1%2FA52AiEA114bYY7DUrS7Dih3dW6Wz1hhI282GaLC1UsiUgC7tpAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDPd7uyCj1vs4e%2BRaaircAw45L2Kl5k01FPU%2B1vJDxkU3%2FtW6goaLeaDxopjv4oZrImVreVgnBG7luu7HgN3K4H5xfsLuD5kYi4%2BLws5OQuE1V4q0HUezfoJycGTxN%2Bsw2AR7F0r85Md9BPOeTV%2FeKy8cknx0gATjJkjybXGgaijoNMeE%2FW0wWDRc4JzU7%2BbY%2BRhZ5dn3t4%2BD9e5I46FTnzJ5JzNnBskWC9ZvVj%2FImySLWHiwEUIhuXODlNOE5bVIlfcXVsaYG0WjIoxb%2B4uVxfGhfcd8LjHqjWr6ZoHO%2FwlN8T%2FMIVPITKcMZbZxXJB5whWjcjUsBPVJkV8lMO5w7wk1IUR8%2FtROLnGXit3plaZWGq4l8oPxglJwfm5pzIexFvTXfqAXnCd9z1UJ%2FH7sfTs3BLsm8PQRP2UurTkJSY0LFwCTpOcPE8rXnvABclkdySvZdhARyo5tEAkBcQzw0OboDsabWURCBXN%2BtJ%2BRAymXeHafMT1jwwbH%2BtLkhbxFBSn9vJltxdVKazm%2BEDgYQ8ePxflnKc6RR4xhggxG6Eqbyag%2FbKXeXQ2fxS5EhyGkpXS1ugPrwrJ0%2BfOuqE%2FPcymWvceH7yA4UZfGiMo6XcQHhW3jZyZ1dL9t88ikncYA553%2Fe2r838pYnWyVMLfikcQGOqUBJRFfE1eQMH%2BshQ918E3BXc%2BNffWHbmd396A6e%2FrGjczTMZVH2tYgoyRoWo6k8wMHrAzfTUHH3L59CYfCOR2sl1ZuryHmQy9cFAxEPBxCmfaqtiF1bLjM4z7aZKfZB%2FRwQ2WABuc5F%2FUutfY6%2BtFSdYwQhWHD5jfQ9JoA57GHFcHoeB%2B1haWDKTs5DalN1ruSU3NXS9inXNX%2FGmenui0Boflq1vOY&X-Amz-Signature=765615eaca0837243560cde5d6d6c7c42a647227a174d76b92e34e410118171f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
