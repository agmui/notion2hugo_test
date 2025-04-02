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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P7B4ZR4%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCTRxUM5Glj%2BxC8CsJNAWxytu96JOPNhOdIeUEJi7m4KwIhALCiwgqg8hpVxIH3HOCusBlWaT3WUksF150LErrBoOBkKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwO7Ol34lFuV4Q9vd4q3APotsRrDWo11LG3zFPDCbYBY0eIg%2BADAbBYDdy2VyyNvog3eVwf7AOH8vjmFmzgP54iY%2FuTtZmnKpv0Ylo1zNccVre5D%2B%2Bk7VanJdLssGnwmrW5uZDj84khFMSwZTfqRuc5%2FV9n1FnwLT3UIZ3d4LmMGwAI3PUUON3wOSIGlEKkrD%2BYtsGxbOa54vz3prozh9ICCj6v6kxU5tZQYi%2FQTE1kZNb2n5NfGRBAgZyvqqZzUiu5ipVG3HvcHspIjyHJsUsox%2FcVkgpnbdDUnpAZ5qeVz31FgwMdMvpokrlppfuIyV0x4N2ot7IjdYtxHB3RgbQ9lgVNVO9o8qITB6OjRDTJ%2BUHw%2FpIjNHvQK2XgjnuO9UAuhtfOTicYn37cjslu0Osq5WcEkFvdc943yyWAj4zORzGi%2B4kLorWnFtp2EeFdLCMNxCZ6D0PGcdufeNymxA7y0fPSIvs025JItdX7MTEGl0xsY8LH7zmf2M6wRWatVGtAO4e1PF0fheRRMeAwSpyA4Hc1b7BF%2FedJAn%2Fi9iJvZgjWZrD8%2Fl3P%2BA3J5D0Isyjk%2BFa3iVhF%2FtraWqjFWFvccSISiwFyQTPg2SSoXKBZMvbwdwTJgvy7vyVH3MmHNHF3dJr70P%2BQPlztuzDmtrO%2FBjqkAaN9iQ8iJ%2F0Vie6IOC%2BsnO7rm4HQokmtkeatytjj0t1MIDsgyexHHslNaPhzT2Yy8UyEoL5DvnLyBBu%2F2UdkEIbvHRV0Z3LtwFBHXWaTxN0gLIur1cg%2F0oxsNMuYoF4lryR1j6VNrZCP7XjJgSD5fUpGWJdo12a5AezFXR4jlzk5hkG58I3TIdoI%2FTebW2Z1w%2Bchpf3%2FclFaEz1qMIuG21wDr21o&X-Amz-Signature=4e54747349b8bd20f30a42f4aa6e1f9aba183a3fef46d86fe3ef10644fa6d27c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P7B4ZR4%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCTRxUM5Glj%2BxC8CsJNAWxytu96JOPNhOdIeUEJi7m4KwIhALCiwgqg8hpVxIH3HOCusBlWaT3WUksF150LErrBoOBkKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwO7Ol34lFuV4Q9vd4q3APotsRrDWo11LG3zFPDCbYBY0eIg%2BADAbBYDdy2VyyNvog3eVwf7AOH8vjmFmzgP54iY%2FuTtZmnKpv0Ylo1zNccVre5D%2B%2Bk7VanJdLssGnwmrW5uZDj84khFMSwZTfqRuc5%2FV9n1FnwLT3UIZ3d4LmMGwAI3PUUON3wOSIGlEKkrD%2BYtsGxbOa54vz3prozh9ICCj6v6kxU5tZQYi%2FQTE1kZNb2n5NfGRBAgZyvqqZzUiu5ipVG3HvcHspIjyHJsUsox%2FcVkgpnbdDUnpAZ5qeVz31FgwMdMvpokrlppfuIyV0x4N2ot7IjdYtxHB3RgbQ9lgVNVO9o8qITB6OjRDTJ%2BUHw%2FpIjNHvQK2XgjnuO9UAuhtfOTicYn37cjslu0Osq5WcEkFvdc943yyWAj4zORzGi%2B4kLorWnFtp2EeFdLCMNxCZ6D0PGcdufeNymxA7y0fPSIvs025JItdX7MTEGl0xsY8LH7zmf2M6wRWatVGtAO4e1PF0fheRRMeAwSpyA4Hc1b7BF%2FedJAn%2Fi9iJvZgjWZrD8%2Fl3P%2BA3J5D0Isyjk%2BFa3iVhF%2FtraWqjFWFvccSISiwFyQTPg2SSoXKBZMvbwdwTJgvy7vyVH3MmHNHF3dJr70P%2BQPlztuzDmtrO%2FBjqkAaN9iQ8iJ%2F0Vie6IOC%2BsnO7rm4HQokmtkeatytjj0t1MIDsgyexHHslNaPhzT2Yy8UyEoL5DvnLyBBu%2F2UdkEIbvHRV0Z3LtwFBHXWaTxN0gLIur1cg%2F0oxsNMuYoF4lryR1j6VNrZCP7XjJgSD5fUpGWJdo12a5AezFXR4jlzk5hkG58I3TIdoI%2FTebW2Z1w%2Bchpf3%2FclFaEz1qMIuG21wDr21o&X-Amz-Signature=26eb877fb94ee9d645597c9be3c46e00c5fc9616f93b5d95002c24592680542a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
