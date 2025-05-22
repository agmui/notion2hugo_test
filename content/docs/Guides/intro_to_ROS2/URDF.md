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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS5FVOFV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIHp8oKfvOtJK5Y9CBUVBHywbpXiLFOFiK9UYtnQVD09PAiEArC5gAAJjpfE7TEmIXEjkwocozQse7HGmoMD5GnJuGn0qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFy9MzMqWISrOxg%2F%2BSrcAz362KA8xmBM0O6t5jf5IfCBhTDpk6oQ0fAlv7IsDzLgRdv%2F2LgTW4ZEYKibDVMdt7NvH3iowh%2BC5po4RF9rksF7I7nGLPDQfgpd3ObItbwe9QZ7fMSOWnl26RPnD9UakfZPR0Rr0rhfEeDTc11vgxhxxUZKfx70mCtAac947othQapxkuNP5Pc4BmT8HvV5gktFx05VCKmdtOPNSkoytYK6btKDaGwZJG6D0ra2koeAN11G4bVwvtBKWQmcMYfLbwCtGlBHu9yYl0hqQiwnIE6FiRmSyde9CF2LUB7JoTrviCfaMXZnSrcbDu7J0zCZ6qbsfa5d2G3fAWDPahMuwgvlkyEHx96OSDe6Duq4BWntlHwRkmE5c8p5UaeqrBFf0W39Nv6Omhu6PY1BU4oW1j2AUuXY6WO%2BmWxO%2BTal8Y%2FSq%2FBicHXVoWSoK5R4Kf99n0w7Lbx9soeYW69ip5ICbEa59jgyFsQr75qEFJGtFxG7li7CYqDk%2FAjmZtDZUPoi%2FMdgIvpyx0KF0QKGsvudlIKMRz0vkm97IcD2BsM%2FkQs0OnzlT%2F1n5%2FJ5CEG%2B9Ppv8kRJjssQecI1V0Ax2pG0O4cXbFwrVabmKPBDx7fF0qHoCsGhl0sYhy4xo6hKMJ7KvsEGOqUByh%2FrbNbtxesiXnjq6U1JG2YF39dk%2FvTXNSKGLnjUqzVam1IF57n3IyqbE6AMCOcHHjjtDzq%2B0Kno%2Fc522V7YpNUbEMpzyewWuQb%2Bt8qB0BDUMqk5lAcuQ2P4bQMfonjJ%2ByBxky33TubQFgJ3Rx%2Fb%2FWLWbM0TQHiWnj4bThnYasw4hUIl3dlcg1x9Sobu0%2BVIJkh%2FV%2FSyBneDLwDzjcEg1XWhpiLc&X-Amz-Signature=30abbee00f808010f7fcbada0f073abd720f4a79a57f70bdf2ca08d16af5a736&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS5FVOFV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIHp8oKfvOtJK5Y9CBUVBHywbpXiLFOFiK9UYtnQVD09PAiEArC5gAAJjpfE7TEmIXEjkwocozQse7HGmoMD5GnJuGn0qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFy9MzMqWISrOxg%2F%2BSrcAz362KA8xmBM0O6t5jf5IfCBhTDpk6oQ0fAlv7IsDzLgRdv%2F2LgTW4ZEYKibDVMdt7NvH3iowh%2BC5po4RF9rksF7I7nGLPDQfgpd3ObItbwe9QZ7fMSOWnl26RPnD9UakfZPR0Rr0rhfEeDTc11vgxhxxUZKfx70mCtAac947othQapxkuNP5Pc4BmT8HvV5gktFx05VCKmdtOPNSkoytYK6btKDaGwZJG6D0ra2koeAN11G4bVwvtBKWQmcMYfLbwCtGlBHu9yYl0hqQiwnIE6FiRmSyde9CF2LUB7JoTrviCfaMXZnSrcbDu7J0zCZ6qbsfa5d2G3fAWDPahMuwgvlkyEHx96OSDe6Duq4BWntlHwRkmE5c8p5UaeqrBFf0W39Nv6Omhu6PY1BU4oW1j2AUuXY6WO%2BmWxO%2BTal8Y%2FSq%2FBicHXVoWSoK5R4Kf99n0w7Lbx9soeYW69ip5ICbEa59jgyFsQr75qEFJGtFxG7li7CYqDk%2FAjmZtDZUPoi%2FMdgIvpyx0KF0QKGsvudlIKMRz0vkm97IcD2BsM%2FkQs0OnzlT%2F1n5%2FJ5CEG%2B9Ppv8kRJjssQecI1V0Ax2pG0O4cXbFwrVabmKPBDx7fF0qHoCsGhl0sYhy4xo6hKMJ7KvsEGOqUByh%2FrbNbtxesiXnjq6U1JG2YF39dk%2FvTXNSKGLnjUqzVam1IF57n3IyqbE6AMCOcHHjjtDzq%2B0Kno%2Fc522V7YpNUbEMpzyewWuQb%2Bt8qB0BDUMqk5lAcuQ2P4bQMfonjJ%2ByBxky33TubQFgJ3Rx%2Fb%2FWLWbM0TQHiWnj4bThnYasw4hUIl3dlcg1x9Sobu0%2BVIJkh%2FV%2FSyBneDLwDzjcEg1XWhpiLc&X-Amz-Signature=f75d2b96416a78d38a744d218206fa1d2f42bf11efffe7a3b2420cfe4ba90093&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
