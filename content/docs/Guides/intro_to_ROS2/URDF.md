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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MREESUI%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIAXB%2Fc4%2B9%2FKlv5JzvvmOZmnZxDD47KRyUCZ21lwyvpXTAiEA22HDjYzOrm%2FgHZNyEC62bijkYnDBt68OT%2F3HWnOR53Yq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNkZzT2lc5IZ0piQKyrcAx8eh1wmChf0Ue%2BNUHtcXHYHJWaHXn93J8rLoVjooKl0ZhSvyxhl7w604zzeaBB9a8uV%2FOcbx1RYh5Ev7lZudSbsjFI75ahISHFE8JFFgA7eBDX5r9aHOslalo0fNLniLNkm2KYQEcWFWajC5t2pqsBtyLjExyBPifeM1JjHHwg8v76H8cFlIUSRH%2F9vj33JPQXE7PGe4LDGq7elwxKtQqAB7BNpLFlElJx1UQT2I63WzhRWtDR48yD1dlBZwMia%2BjvGB2oGV3QF1FsjvOYdkigPN5M9GoJ5nSd5jERy9sNlrNmnMwO2kYg4lOqOcU9Teehgp7QQGTiDS6jx9fwR53DS9W4tyVW%2BY73piHZcRsVUQRTkSFNvNRo6KHBM6H0b5ztinIF8%2F9zmwuoAbSpLveM%2BzyhR3h3teGZRJEGrn%2FO%2F4vBm9rye7q1c7CnFf04qD9mz5y7nAjltXp8TzIX7Z4CO%2BlKbMXZmLmROF06OpWiw2CumrAy7tgprRNxHLrPndSWwzgyv3%2BJUqkdAzGYarhvg%2Bo6WKEa%2FREyfA69W7wbRP5PDaViu%2FCO%2FuuZaQAJbnriS4CNwobz3wgeQrOSomiHw%2BLWtTKmHdsT8%2BtrQwUeRX5KiOhTZhSm88P%2BTMMnY7L4GOqUB57edtWg9uVTnowDDkadQznT3Ph3viYkP8q3OSymQALHWmbBSEUaClGEd8eD8CO9tBmxtdlIqkL2kH76jKZnHe6o3%2FUbsnzvlD%2F5UPonsNpHDowhQXW8lYixre8tttwUiDKv91y%2Br5nA4AisZe1zWvfbX4rIYKTwt6D9hVsvtOa00pRloAfdn%2FQPfqM7hFwqmi%2Fmc2vsqCWdxB9KqUttub3UuslLK&X-Amz-Signature=e12467fbcc35cf3c618766ff5f172f94ab94ab4684bfd600874e77ff3bdc8adf&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MREESUI%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIAXB%2Fc4%2B9%2FKlv5JzvvmOZmnZxDD47KRyUCZ21lwyvpXTAiEA22HDjYzOrm%2FgHZNyEC62bijkYnDBt68OT%2F3HWnOR53Yq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNkZzT2lc5IZ0piQKyrcAx8eh1wmChf0Ue%2BNUHtcXHYHJWaHXn93J8rLoVjooKl0ZhSvyxhl7w604zzeaBB9a8uV%2FOcbx1RYh5Ev7lZudSbsjFI75ahISHFE8JFFgA7eBDX5r9aHOslalo0fNLniLNkm2KYQEcWFWajC5t2pqsBtyLjExyBPifeM1JjHHwg8v76H8cFlIUSRH%2F9vj33JPQXE7PGe4LDGq7elwxKtQqAB7BNpLFlElJx1UQT2I63WzhRWtDR48yD1dlBZwMia%2BjvGB2oGV3QF1FsjvOYdkigPN5M9GoJ5nSd5jERy9sNlrNmnMwO2kYg4lOqOcU9Teehgp7QQGTiDS6jx9fwR53DS9W4tyVW%2BY73piHZcRsVUQRTkSFNvNRo6KHBM6H0b5ztinIF8%2F9zmwuoAbSpLveM%2BzyhR3h3teGZRJEGrn%2FO%2F4vBm9rye7q1c7CnFf04qD9mz5y7nAjltXp8TzIX7Z4CO%2BlKbMXZmLmROF06OpWiw2CumrAy7tgprRNxHLrPndSWwzgyv3%2BJUqkdAzGYarhvg%2Bo6WKEa%2FREyfA69W7wbRP5PDaViu%2FCO%2FuuZaQAJbnriS4CNwobz3wgeQrOSomiHw%2BLWtTKmHdsT8%2BtrQwUeRX5KiOhTZhSm88P%2BTMMnY7L4GOqUB57edtWg9uVTnowDDkadQznT3Ph3viYkP8q3OSymQALHWmbBSEUaClGEd8eD8CO9tBmxtdlIqkL2kH76jKZnHe6o3%2FUbsnzvlD%2F5UPonsNpHDowhQXW8lYixre8tttwUiDKv91y%2Br5nA4AisZe1zWvfbX4rIYKTwt6D9hVsvtOa00pRloAfdn%2FQPfqM7hFwqmi%2Fmc2vsqCWdxB9KqUttub3UuslLK&X-Amz-Signature=e5f1c6032b37551b36f007a845e797fe8b1cfad0b3f2ec284fcbb3cf41c6179a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
