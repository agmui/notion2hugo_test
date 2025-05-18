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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UF4ARTZ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzcSVZqrwxPW%2Fb8EBlb4LQWOjPzaRLR%2FmTep2SyAJBiwIgUazd9LcqCoZV1qTkE55L3myZE9lYbFQjaq52I%2FG9%2BKwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDBNk0PZ5vUPGq%2BH8eSrcA4fUUgxFh7shFU7TxdluXUc7lcgHZhNRo35zDNUQoKYnbt79%2BZXoPAe%2F7mePWJ9let%2Frc8sOFRi58mP54aaysuK9J7Xgfx4ANCpQ%2F39eTlQxPuM3uYaaT3e0ihuGEx%2BbvbEqGyLsu3Qn0nyJZxRr13sU4pCBmwvOxL34VBido7A7aRx4EMu9W6yxZE3jIy3aMe4DoUK4E7dB89sSabf4UV9OvglWfdTb6WqydMgKUXkhoz7DovprxhoMiOmcMxo4mwpfUkHW11mwSOD7TScTfl9JvnE%2FpUAA5Qs2NII7l2Zqsx8ICMP0E5XBL%2Bi1U5uyzD%2FEnsczyObj0W5b4tLOK5wkRr0WUf%2BSaKxeVkmlJ9MGRcW0WB1hpsSImU0tM83oSc2HVV1tRT3meLwFZIpukfxUZuJyCi3hicC%2FmxGkM3lOyAXX7lMUpjFp4EZd3vtuP1M5ZyUW2L4NXAKFs%2BdwfbMA5bPCFXGrEJ1t1jrvXA6xyA3s%2FXgt0mfsI7f8uCTB9VSqH77%2FPDYCRGAhLHLK03FjtbRnwYtBUgSm0NFqWMNNHlyOuwM1kejkIEE4ozBWRLMFexraBLVfBYGD1mu4XugcZ3Nr2btt0Hxz2wZ%2F96GdphVFO5d1BuuqmL3uMITCqMEGOqUBzOxrh%2FpjoLZVEJ9N6Ga7G82F60vByViAuNN%2FFNZ7rSPCIi80kORGqx9hSztNgQjhrffHPPAkxtsXNeDEc%2FWE%2BIbVlsqlHzmQaKGfe%2B9CLhyjt%2FugIUh%2BZqv0XKo5WCeaLHTQhfqFJWG%2Bu7iGXE1VRCXRxwBhfUihHGZ4IxtxXql3N0UCZQCSEBOjynZuv7ZfGX0JJxLrqEPwuKGtrm9rUNKSnJUp&X-Amz-Signature=40e77bbeb50782cd3adcca15dd1bfebb36cb45553f30f27c9f52933890d510f5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UF4ARTZ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzcSVZqrwxPW%2Fb8EBlb4LQWOjPzaRLR%2FmTep2SyAJBiwIgUazd9LcqCoZV1qTkE55L3myZE9lYbFQjaq52I%2FG9%2BKwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDBNk0PZ5vUPGq%2BH8eSrcA4fUUgxFh7shFU7TxdluXUc7lcgHZhNRo35zDNUQoKYnbt79%2BZXoPAe%2F7mePWJ9let%2Frc8sOFRi58mP54aaysuK9J7Xgfx4ANCpQ%2F39eTlQxPuM3uYaaT3e0ihuGEx%2BbvbEqGyLsu3Qn0nyJZxRr13sU4pCBmwvOxL34VBido7A7aRx4EMu9W6yxZE3jIy3aMe4DoUK4E7dB89sSabf4UV9OvglWfdTb6WqydMgKUXkhoz7DovprxhoMiOmcMxo4mwpfUkHW11mwSOD7TScTfl9JvnE%2FpUAA5Qs2NII7l2Zqsx8ICMP0E5XBL%2Bi1U5uyzD%2FEnsczyObj0W5b4tLOK5wkRr0WUf%2BSaKxeVkmlJ9MGRcW0WB1hpsSImU0tM83oSc2HVV1tRT3meLwFZIpukfxUZuJyCi3hicC%2FmxGkM3lOyAXX7lMUpjFp4EZd3vtuP1M5ZyUW2L4NXAKFs%2BdwfbMA5bPCFXGrEJ1t1jrvXA6xyA3s%2FXgt0mfsI7f8uCTB9VSqH77%2FPDYCRGAhLHLK03FjtbRnwYtBUgSm0NFqWMNNHlyOuwM1kejkIEE4ozBWRLMFexraBLVfBYGD1mu4XugcZ3Nr2btt0Hxz2wZ%2F96GdphVFO5d1BuuqmL3uMITCqMEGOqUBzOxrh%2FpjoLZVEJ9N6Ga7G82F60vByViAuNN%2FFNZ7rSPCIi80kORGqx9hSztNgQjhrffHPPAkxtsXNeDEc%2FWE%2BIbVlsqlHzmQaKGfe%2B9CLhyjt%2FugIUh%2BZqv0XKo5WCeaLHTQhfqFJWG%2Bu7iGXE1VRCXRxwBhfUihHGZ4IxtxXql3N0UCZQCSEBOjynZuv7ZfGX0JJxLrqEPwuKGtrm9rUNKSnJUp&X-Amz-Signature=6cfb2741edf37a77bfa7342f2e76c276e98fa1de297a91d573747f6ddd841b50&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
