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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PUVWSEG%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIHJnD89nXnBFjMhIeaWuKyQ7mH8udwmw0NXjzI468ksCAiEA7%2BfVnav2ITGmzBtjtikwgk8%2BCJXQxFT6yNjESWDtIakq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDC70BKBYNC7V4TwLpSrcA86GTxc4CAOm0PzXdmT%2BuCwzaBZ7%2B4J41Fae82YL7Oz5o%2B36MtTGpaxIGxqgnFCJN1SY5AHnnxoFbFEoq4EjZcfHO04W%2Bi4NXTEAc%2BfHYp83i%2FElk5SdBmJPn6vB7hlWLVrT4Q53xusIvti%2F%2BWVclwgkAYYfTeNgG46%2BxRZASxaVAEil1z4lrBpeVTMAlPz4ygiTNd2lTsUCA1xNL3NAMQF8aObNBpKDd6CiItE8BLaaEJYX%2B4Fb1VKNTxH6guNOAlfKMq%2FUUIebs81FTU4dAt8V9taLvGtbrtDV%2Fg7Np91CrHtXFRxVEU4Ik8oR2WBYFL%2B4xgm1KAzaj3v2Wv8ujaTOkY%2FDQrpVgc1uhGu5p499LfN%2B2NKQPH3kwSAjmsNaxCSLWakR6zq5Qduv4jdSGksf%2FcPVZLLa4tygGOmak7nApYVNHFVFMWjbwlaD0mGMFxaAJUgWMVdkIZMY2yl6fZGUfNSJTkzeg5xTdgHB3l3Kmm6%2BaczH0Moj9k0A8J2C9hVKa0uljFrC%2BbuWtkulu9yRxDleS93ys5hztDMkl1aot7o%2BVsjSbGn9YQwMn7%2FB%2B69Y%2B56Sjxgr%2BSNCldEpFcP%2BrfY6SCoxC8DqYZ600LNOqQJZ2ak5EkAKrQOWMMDQjL0GOqUBrDl1SjGVXqEFgJbomRoBObYVmMgUdXISrCIYHOKrQNuIXUT0KXu4ytgG8AyNrzbJqI48B9zMQLFAP9fuawaum52U6GDPJMONob3%2BHgux8e8JDIMO7rw4k0kbQqFle1oeFC8q2sTdE1nh1qSpmQ1hxE5ygvcXrKpzHYmwndcPu%2B%2FA4WYAVMBiZp%2BYftfVWFgIlYHXNINRBt0ud2uzuhLCWH8EfqCN&X-Amz-Signature=eb6999c347d0f08808bad17761e1073ca502e32cd6d8e4eaa8b74562eaafdf53&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PUVWSEG%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIHJnD89nXnBFjMhIeaWuKyQ7mH8udwmw0NXjzI468ksCAiEA7%2BfVnav2ITGmzBtjtikwgk8%2BCJXQxFT6yNjESWDtIakq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDC70BKBYNC7V4TwLpSrcA86GTxc4CAOm0PzXdmT%2BuCwzaBZ7%2B4J41Fae82YL7Oz5o%2B36MtTGpaxIGxqgnFCJN1SY5AHnnxoFbFEoq4EjZcfHO04W%2Bi4NXTEAc%2BfHYp83i%2FElk5SdBmJPn6vB7hlWLVrT4Q53xusIvti%2F%2BWVclwgkAYYfTeNgG46%2BxRZASxaVAEil1z4lrBpeVTMAlPz4ygiTNd2lTsUCA1xNL3NAMQF8aObNBpKDd6CiItE8BLaaEJYX%2B4Fb1VKNTxH6guNOAlfKMq%2FUUIebs81FTU4dAt8V9taLvGtbrtDV%2Fg7Np91CrHtXFRxVEU4Ik8oR2WBYFL%2B4xgm1KAzaj3v2Wv8ujaTOkY%2FDQrpVgc1uhGu5p499LfN%2B2NKQPH3kwSAjmsNaxCSLWakR6zq5Qduv4jdSGksf%2FcPVZLLa4tygGOmak7nApYVNHFVFMWjbwlaD0mGMFxaAJUgWMVdkIZMY2yl6fZGUfNSJTkzeg5xTdgHB3l3Kmm6%2BaczH0Moj9k0A8J2C9hVKa0uljFrC%2BbuWtkulu9yRxDleS93ys5hztDMkl1aot7o%2BVsjSbGn9YQwMn7%2FB%2B69Y%2B56Sjxgr%2BSNCldEpFcP%2BrfY6SCoxC8DqYZ600LNOqQJZ2ak5EkAKrQOWMMDQjL0GOqUBrDl1SjGVXqEFgJbomRoBObYVmMgUdXISrCIYHOKrQNuIXUT0KXu4ytgG8AyNrzbJqI48B9zMQLFAP9fuawaum52U6GDPJMONob3%2BHgux8e8JDIMO7rw4k0kbQqFle1oeFC8q2sTdE1nh1qSpmQ1hxE5ygvcXrKpzHYmwndcPu%2B%2FA4WYAVMBiZp%2BYftfVWFgIlYHXNINRBt0ud2uzuhLCWH8EfqCN&X-Amz-Signature=99372245e213aa2a28cab0fd5ee79ed1054c27b6d60f5d738c1c530cb70df2b5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
