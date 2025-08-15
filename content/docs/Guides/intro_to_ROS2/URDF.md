---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMEKRCKT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCID5ZsQowsv3sSLUQ9GT6CtANECdpGEt0Giw10v28vcluAiAZnnOEcLuFPONrnojESAcW5kvpOtz7lqTOWnOeG4Qc9yr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMqSHpXLJ5aQvIz8yPKtwDz35rt%2F2rMdTJuUIvZx5HAS0d2R%2FFFLDwYbsrwvrWj6JI28HapCOVbdGd9BgbFKMkFx8JRNd%2FMO57cpHiyFBSW9hWapybazZdi0f9f0RilYsGIfMIqc%2B2cOrmwssH4wW27ZPX98IxxubG8YD09ThU5AlDSnub3r%2FSv5TZkW5u9BRqeE7qhRZtcac41FPTdIiQ1cYIj9TX8dhUTHn4xGx5%2BvYZ77ZUw7zlu4muQgvSfrXSbNHVB3hPWqK0s4rzdehUJ%2F2q2KdH46Plz9AiGCUkIpbDWyeTAvSW4wi%2FAvG3rgK47sIlzeTsDieqKVcvOs%2B84s0OoUlemaglQu85pDWY3vrtEMBF%2FY5%2Brc9T%2BE6Bz1%2BwB7Mnuy9p5OgWq5il%2Fl0EB%2FsyNnnBdSgz0cbrDpfVRQyOnaluC0qTq7RI2%2FAhfJXZDrrsHCHibYA%2Bxesb1sMsfzDT2aXl9yuOm0P%2F9TyXIgPo4QdNEl6nvQfxpMY2hoQHl%2FKs9f8i4m8712EFe%2Fut1izPz5hmhca%2ByusxlkQj%2FjHxo1l5FbuePNV9ZoFWudKAl%2BsyzL2AVPKen6ErUaTA5JO6ONuAvX3rfIX%2FZGbG8TPZHierMzE2xot4VOmxFPVjm%2FMapnTJIdXd%2Fnkw68r7xAY6pgGQqNfzY26oBiqkpHFnBuJxgEsn7Vt89U7ASdOB7le6KTk%2B%2FkH8SmD5xZ51dMgSc9iMJYOmzZNCfrWdnCmq14U%2FtzyoeS4vHhrus7oRf4JdEfcdBMTObU8eOSimPPTOzZaTgnRT1eXYHeOctJ4T8yCTFVdLks0MMEArNRzn9ldCeOk%2BkfXoY5ggcDYp4Hl0H3tANyZBnSxkjRd1yoGkwUb5uLp1Shng&X-Amz-Signature=0977c9a22f2b19c883188609f55ac32e06e36876b63855d569439a3e0b5a8c89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMEKRCKT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCID5ZsQowsv3sSLUQ9GT6CtANECdpGEt0Giw10v28vcluAiAZnnOEcLuFPONrnojESAcW5kvpOtz7lqTOWnOeG4Qc9yr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMqSHpXLJ5aQvIz8yPKtwDz35rt%2F2rMdTJuUIvZx5HAS0d2R%2FFFLDwYbsrwvrWj6JI28HapCOVbdGd9BgbFKMkFx8JRNd%2FMO57cpHiyFBSW9hWapybazZdi0f9f0RilYsGIfMIqc%2B2cOrmwssH4wW27ZPX98IxxubG8YD09ThU5AlDSnub3r%2FSv5TZkW5u9BRqeE7qhRZtcac41FPTdIiQ1cYIj9TX8dhUTHn4xGx5%2BvYZ77ZUw7zlu4muQgvSfrXSbNHVB3hPWqK0s4rzdehUJ%2F2q2KdH46Plz9AiGCUkIpbDWyeTAvSW4wi%2FAvG3rgK47sIlzeTsDieqKVcvOs%2B84s0OoUlemaglQu85pDWY3vrtEMBF%2FY5%2Brc9T%2BE6Bz1%2BwB7Mnuy9p5OgWq5il%2Fl0EB%2FsyNnnBdSgz0cbrDpfVRQyOnaluC0qTq7RI2%2FAhfJXZDrrsHCHibYA%2Bxesb1sMsfzDT2aXl9yuOm0P%2F9TyXIgPo4QdNEl6nvQfxpMY2hoQHl%2FKs9f8i4m8712EFe%2Fut1izPz5hmhca%2ByusxlkQj%2FjHxo1l5FbuePNV9ZoFWudKAl%2BsyzL2AVPKen6ErUaTA5JO6ONuAvX3rfIX%2FZGbG8TPZHierMzE2xot4VOmxFPVjm%2FMapnTJIdXd%2Fnkw68r7xAY6pgGQqNfzY26oBiqkpHFnBuJxgEsn7Vt89U7ASdOB7le6KTk%2B%2FkH8SmD5xZ51dMgSc9iMJYOmzZNCfrWdnCmq14U%2FtzyoeS4vHhrus7oRf4JdEfcdBMTObU8eOSimPPTOzZaTgnRT1eXYHeOctJ4T8yCTFVdLks0MMEArNRzn9ldCeOk%2BkfXoY5ggcDYp4Hl0H3tANyZBnSxkjRd1yoGkwUb5uLp1Shng&X-Amz-Signature=d8cafba13496dbffe8a308520f483fc1a38deb29257c7819fd2bac967a86af92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
