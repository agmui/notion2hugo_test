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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MJ4F4IA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD08W853ZMh7aQETcnDYamhI%2BmyX5FiRmgwvZpkh2m9DwIhAN235mn9nuiMwiKXutdwq2mjq4TJZILKum86X7bH9l8PKv8DCG0QABoMNjM3NDIzMTgzODA1IgxCXoMm%2B%2Bulx7IYAEwq3ANVVa3Mg85vjfXrLSuWpB7faDvtoaUgrAkMlRgago%2BBfBkVnC7tfgKfKT2t7LTH0dSi5PEGRXj2j7Y5v2M57IJDpoJlpHqyVzGO%2FL7M2M%2BbQMZx%2BMGeqlznd7iRjuAb%2FNj3dShXzxkxSfc%2FQKnktknygksoZZYf9VP2p%2BmkA05CtyHm7XnPTH1qqs4p3mw8UBDuFnbeW5Wl2iqh9NKenCtOnnAD3hAd4rBUoXw3XlyoMrPm9nS0vLG5TIpRi03jlRfiKUC1IvLCg8bnZNlgAEcSKyyRlUsCpiqsttEHB51NAcaQHkRLIBUrhucDqCmQhFO1tmhPSAAW%2BGK5eNVwiZu1z9WJTXblPZzFrmIOZN%2FSxtdo1n3%2FBgbyzNNgzKZBvks%2FFNWHg6%2BvdmcxPbl0h1fchdmmXjVGnkjumM4fGnODdGyQqBuwhys52LSks47a6RXuJaaG4pDxjhplw83550XWt2kCFWFi8hdYkFR73k4uv3WcapZPDm0vhZEKvmOwH4Ypp0G3KtWnC3lFo2WQ6sawcdmAK22Pxqt2CuE8fl1%2Borj0bb%2BRlho3pXFzmpIS3MVodUSxCKb3xbfsw%2BvTGrM%2BZNzWUbgf3rz7wRGWA%2FH5NtwuLyFryi4VlIWRkjDHu5bEBjqkAYK2FqppuwYhKp%2FaB7q6hrlA2nXnLyMNkj55%2BIW2U9O1Iu3vPYcdvVDWqXnraqYFeWjtBhri5pa8ml8R5gxtwDjuOUuG3CdjhpGSloAAKDcv%2Fd06DqoRiSzzlwnegX0Yjw5RozSiE8UZH0RZ4vJw93C4mOc1Qw4nQ6dZcq5ovbIbVRS%2Bhmr0F%2BnS115dZOcrfgi6cPczp51nyWjKlE6NYhTVpmGL&X-Amz-Signature=5c83155858f397d4628a62cab093abbe30393b6202c86adde02e39dd59b920ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MJ4F4IA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD08W853ZMh7aQETcnDYamhI%2BmyX5FiRmgwvZpkh2m9DwIhAN235mn9nuiMwiKXutdwq2mjq4TJZILKum86X7bH9l8PKv8DCG0QABoMNjM3NDIzMTgzODA1IgxCXoMm%2B%2Bulx7IYAEwq3ANVVa3Mg85vjfXrLSuWpB7faDvtoaUgrAkMlRgago%2BBfBkVnC7tfgKfKT2t7LTH0dSi5PEGRXj2j7Y5v2M57IJDpoJlpHqyVzGO%2FL7M2M%2BbQMZx%2BMGeqlznd7iRjuAb%2FNj3dShXzxkxSfc%2FQKnktknygksoZZYf9VP2p%2BmkA05CtyHm7XnPTH1qqs4p3mw8UBDuFnbeW5Wl2iqh9NKenCtOnnAD3hAd4rBUoXw3XlyoMrPm9nS0vLG5TIpRi03jlRfiKUC1IvLCg8bnZNlgAEcSKyyRlUsCpiqsttEHB51NAcaQHkRLIBUrhucDqCmQhFO1tmhPSAAW%2BGK5eNVwiZu1z9WJTXblPZzFrmIOZN%2FSxtdo1n3%2FBgbyzNNgzKZBvks%2FFNWHg6%2BvdmcxPbl0h1fchdmmXjVGnkjumM4fGnODdGyQqBuwhys52LSks47a6RXuJaaG4pDxjhplw83550XWt2kCFWFi8hdYkFR73k4uv3WcapZPDm0vhZEKvmOwH4Ypp0G3KtWnC3lFo2WQ6sawcdmAK22Pxqt2CuE8fl1%2Borj0bb%2BRlho3pXFzmpIS3MVodUSxCKb3xbfsw%2BvTGrM%2BZNzWUbgf3rz7wRGWA%2FH5NtwuLyFryi4VlIWRkjDHu5bEBjqkAYK2FqppuwYhKp%2FaB7q6hrlA2nXnLyMNkj55%2BIW2U9O1Iu3vPYcdvVDWqXnraqYFeWjtBhri5pa8ml8R5gxtwDjuOUuG3CdjhpGSloAAKDcv%2Fd06DqoRiSzzlwnegX0Yjw5RozSiE8UZH0RZ4vJw93C4mOc1Qw4nQ6dZcq5ovbIbVRS%2Bhmr0F%2BnS115dZOcrfgi6cPczp51nyWjKlE6NYhTVpmGL&X-Amz-Signature=d0deffff9a24be2fe50343d293704ad487a47020348c04e144a208696ab8627b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
