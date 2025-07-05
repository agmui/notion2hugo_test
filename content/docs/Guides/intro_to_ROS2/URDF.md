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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XNLTBYS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDpad1l0r02jGWX%2BznbNpFqnp%2FWURUpUNtzmAhnqq%2ByiwIhALgHyy8pgv30Q0Hao8zFbspF9DjuskNRQvLsbAIEqkCCKv8DCDsQABoMNjM3NDIzMTgzODA1IgyMvBR8mLaECAYbTLUq3APoB8LBBahNw0KGDEftrWo%2Fs7wKt%2FeoQEJpII97LaFdmBTMVZCl5t9bB9AQjnk4QCjybUg22Agc6UmdKEEVFPbNdIe3R0N%2BrRTmnCaQG%2FEcr3lK2B%2FpRO2Y2jQbTwSG6eZrmA02MRaJ8x8sRvUMO3Pa0peUTUODcV9lOrnl%2B2tpYpYtkwfDlDFjh7Bm4GmSrxg5YvXomwGf0BmopxpWUXIEPLLAMHPy4NzotR2DCMENE428iR5rv0MBD7UoBQbraWtjyfuhM8N0x3GQtKQR3pHJ4Kyapk3TCf8L%2Bf3nXpXXiiNetY5k1eLAp3lzAbfvwR8gKiq9DgUwVhZgVXGAUtZcei9GCWfN8dEfLZnlghKYluLEsecIJnJ9GeSVlSOVR1%2FsYVrHPx37PFe44zebdnU0D7KW7BKK0DIW8r2cxRXVB2FR94a6doCZt%2FGgYGKT%2Bt%2BkNtXXkLv2QkhzOAOv9DE%2FwVBsZVG0ZKo55UxFvV9%2B8JBaRF0cQ2bqaVpzNN%2FeNrb0ZftyacgxJW54Ew1cca9rgDcl2foTLkbcKP1QdHDOcWA%2B%2Bq2mrhKOQ5wJAllvsazwmbyOf3tNHra09k9%2BWqq63VAvXGPgCjtvWdqsJnWva0EF1hQyF6iT9CmzGDCiiaLDBjqkATjpU8A2W3FFyGIncr3LpOxjmxD66dgcHfnVIsus9P09qBZjxSbIgYRMEqC15vPGSw0D7q0z6A4bpkB5X727Y8piv0KNNoIq3LuDGPQybjuLyOna9Te5KuLtUvHkYpc1Ux6Ddgl5rERXQJslsp0BROFkdpiEpexI81HPlF%2By%2BgdgHtl0n4qHPM353c%2FntpoYisER4A8Ij3VQilN32riDQ8hLWYw9&X-Amz-Signature=4148af7c1526f793b1522dfac49583def440ae3346769fdfc213bf3429adb5f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XNLTBYS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDpad1l0r02jGWX%2BznbNpFqnp%2FWURUpUNtzmAhnqq%2ByiwIhALgHyy8pgv30Q0Hao8zFbspF9DjuskNRQvLsbAIEqkCCKv8DCDsQABoMNjM3NDIzMTgzODA1IgyMvBR8mLaECAYbTLUq3APoB8LBBahNw0KGDEftrWo%2Fs7wKt%2FeoQEJpII97LaFdmBTMVZCl5t9bB9AQjnk4QCjybUg22Agc6UmdKEEVFPbNdIe3R0N%2BrRTmnCaQG%2FEcr3lK2B%2FpRO2Y2jQbTwSG6eZrmA02MRaJ8x8sRvUMO3Pa0peUTUODcV9lOrnl%2B2tpYpYtkwfDlDFjh7Bm4GmSrxg5YvXomwGf0BmopxpWUXIEPLLAMHPy4NzotR2DCMENE428iR5rv0MBD7UoBQbraWtjyfuhM8N0x3GQtKQR3pHJ4Kyapk3TCf8L%2Bf3nXpXXiiNetY5k1eLAp3lzAbfvwR8gKiq9DgUwVhZgVXGAUtZcei9GCWfN8dEfLZnlghKYluLEsecIJnJ9GeSVlSOVR1%2FsYVrHPx37PFe44zebdnU0D7KW7BKK0DIW8r2cxRXVB2FR94a6doCZt%2FGgYGKT%2Bt%2BkNtXXkLv2QkhzOAOv9DE%2FwVBsZVG0ZKo55UxFvV9%2B8JBaRF0cQ2bqaVpzNN%2FeNrb0ZftyacgxJW54Ew1cca9rgDcl2foTLkbcKP1QdHDOcWA%2B%2Bq2mrhKOQ5wJAllvsazwmbyOf3tNHra09k9%2BWqq63VAvXGPgCjtvWdqsJnWva0EF1hQyF6iT9CmzGDCiiaLDBjqkATjpU8A2W3FFyGIncr3LpOxjmxD66dgcHfnVIsus9P09qBZjxSbIgYRMEqC15vPGSw0D7q0z6A4bpkB5X727Y8piv0KNNoIq3LuDGPQybjuLyOna9Te5KuLtUvHkYpc1Ux6Ddgl5rERXQJslsp0BROFkdpiEpexI81HPlF%2By%2BgdgHtl0n4qHPM353c%2FntpoYisER4A8Ij3VQilN32riDQ8hLWYw9&X-Amz-Signature=7bf819638be90e8afa4ace7a5b20febd021006365891dde8ea3850e21242fff1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
