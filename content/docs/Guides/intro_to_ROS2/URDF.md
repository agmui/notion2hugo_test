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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNZ4QUSG%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC77nEKtdc5KcKnL9XSLnRjjIa3e%2FnocqzmrRlWiv23xQIgXdR2MRckWUDBWqVCtlIk4yVqPK9%2B8pTDn49Gx%2BM3CCcq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDO0nGAN%2FT08S500nqyrcA0lwwu9%2FoUAMyM9rh4a5Zedu4AzoAXpkKwPatylf5BoFdfaxYR6yMY7f1zx7Zits19%2Bzr7YLAh5oYywklUJU29PNmgkXcsrLZ94BENoAEzaHAY785aNH3Sz6nB3MW8NPKEA0Z3vdGI%2BZT113wbomRKQWooa%2FEil7M9kUp8FqQRMrcXIo6vuTzQbQVIfkTMLkuYmsnpQZm%2B9RAHG9K3xtJFXC%2BjyGkgDO4EJ3vqgRdn88E%2BWiO5XN2535aBbiwERyQJLzHGq5R2TG6oNVdnAzu3VoraTeUXqpE%2FF96kRRyPt3r8AWAjsEKW%2FleBPX0G1aejMsrwrtPOwf1%2FNqzR8gMKrvz6QIrh9rAdrqTdSbJNQX90viJY%2B%2BmFTWm5NSoSnu%2B6d%2FjM2wydA9Mb%2FVem70X7FRR3NohA68ccfv%2FoyCs65Ns6cxIWps3w4EaXcxqGhoaNRh1hABuAdT47IAqvIsjneByQ%2BA7ZUWMpHtdqOFv1kjy5BO75YVpX%2Bg2XOotJu3ABpJ6Fxun%2BbIdSA3%2FtR%2Fdxo3i4sF6C3qDH4Ml3yk3j%2BrT0k8qivIs%2FpjWsL%2FoQ8QeZduVZgBJsVngZ1SaDNngYbn3incOUvJ%2Bo3rvutI1bs%2B16XXckaXeXdhKvQ6MIzL%2B8IGOqUBZA%2BVb8hyHTqt2zp1mnMW8UCSUwKYc3kUsJa9oc98BnrjKxhzE2N0fGgH5hirxKPCHzlwdqC3YsDcyX5MySMOk1yByoy%2FhBcw5SwCoy5dAL4a%2FYu%2Fgli%2BI%2BdotEF9JRr2%2BICFO0QZAh9HknhDw2ZXcOxwQ8IMv4OC5oDrDmNndKl7gW0%2BZ%2Fm19iBvlcj4YUgLJkiF9OPFtYelCp%2FXH2z88ybauRAK&X-Amz-Signature=866d9a64b6576e8dd88c617765dc22cd6ac2f1ebbc830838c801c185d2530727&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNZ4QUSG%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC77nEKtdc5KcKnL9XSLnRjjIa3e%2FnocqzmrRlWiv23xQIgXdR2MRckWUDBWqVCtlIk4yVqPK9%2B8pTDn49Gx%2BM3CCcq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDO0nGAN%2FT08S500nqyrcA0lwwu9%2FoUAMyM9rh4a5Zedu4AzoAXpkKwPatylf5BoFdfaxYR6yMY7f1zx7Zits19%2Bzr7YLAh5oYywklUJU29PNmgkXcsrLZ94BENoAEzaHAY785aNH3Sz6nB3MW8NPKEA0Z3vdGI%2BZT113wbomRKQWooa%2FEil7M9kUp8FqQRMrcXIo6vuTzQbQVIfkTMLkuYmsnpQZm%2B9RAHG9K3xtJFXC%2BjyGkgDO4EJ3vqgRdn88E%2BWiO5XN2535aBbiwERyQJLzHGq5R2TG6oNVdnAzu3VoraTeUXqpE%2FF96kRRyPt3r8AWAjsEKW%2FleBPX0G1aejMsrwrtPOwf1%2FNqzR8gMKrvz6QIrh9rAdrqTdSbJNQX90viJY%2B%2BmFTWm5NSoSnu%2B6d%2FjM2wydA9Mb%2FVem70X7FRR3NohA68ccfv%2FoyCs65Ns6cxIWps3w4EaXcxqGhoaNRh1hABuAdT47IAqvIsjneByQ%2BA7ZUWMpHtdqOFv1kjy5BO75YVpX%2Bg2XOotJu3ABpJ6Fxun%2BbIdSA3%2FtR%2Fdxo3i4sF6C3qDH4Ml3yk3j%2BrT0k8qivIs%2FpjWsL%2FoQ8QeZduVZgBJsVngZ1SaDNngYbn3incOUvJ%2Bo3rvutI1bs%2B16XXckaXeXdhKvQ6MIzL%2B8IGOqUBZA%2BVb8hyHTqt2zp1mnMW8UCSUwKYc3kUsJa9oc98BnrjKxhzE2N0fGgH5hirxKPCHzlwdqC3YsDcyX5MySMOk1yByoy%2FhBcw5SwCoy5dAL4a%2FYu%2Fgli%2BI%2BdotEF9JRr2%2BICFO0QZAh9HknhDw2ZXcOxwQ8IMv4OC5oDrDmNndKl7gW0%2BZ%2Fm19iBvlcj4YUgLJkiF9OPFtYelCp%2FXH2z88ybauRAK&X-Amz-Signature=10982731ca0045ea00bf028fd1b88e16f79749238be43fae259fb7260f2bd522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
