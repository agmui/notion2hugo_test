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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOTOLSIF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaRoi2dzkTJDpGcOnDi0XC16nwhOs9YkhezBJhSC9IyAiB5vJvx2WVoVpPWyTSCBp64c0vnGqM5VuhOCS82yLrBWyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIBYaYAiBAXoAYIk6KtwDlRTUC03DD4bKr1RBibsE6nfAsKqkvUqJ7mRnbgi%2FrvYHcQRpvzDt61Jp5pUeUYmGiXm0SAVJUubuBfGGiVj7dnvbTWS%2BKsT5VZ%2FOJV6Pvw7AvzyvyGCt4PTW80aAlyKHf390DfjWC4XJACaeJ9u0aRaVEot%2FtGJf8rPoYSg31A3Rkt%2B5BL5esY4unjnC0J3b4YsTc%2F3PiV36BWd%2FOJ7nMFRf7TfW2THXcs8VSUai%2Bxp9dihM22ysQSxWFavU77DkKh73BvfnbWxX0uT4QwcyuP%2FwADCLxYz6PncYL2%2B%2FAekpPjLmFPQ2TuPl4Dx8F2%2FvARQg0RIEiNZh0sr1xfhPiSErV%2BOb6dzPb3pgoakVjH7FMTXT6F%2FweTaHlRS5bpfPDc%2F0SZ5YC0Cf9TNNuTTlBsQaszad58WWaC3NuRj4Wra0IhbPXPMVhEyhl5p9jEcnOI05P5DN8U8jK2R%2BVdo%2B3TuWKtXbuGNqGz0m1FmTQzw8G%2Fc%2FtgeSFKLydnzRomksQ9w4r5dnqqZD2Ffu7X7PnV7cvwKyZkUC6EIurc3zqnqo33XAfUgaE0J9eW9oWZMcxwe3plGWhGPtLDoPzZStaqk9%2FwM3n2muNWDT7qmjEU9z6SjmVrmjouu%2F2BAw1d3kwQY6pgGDNaL5hcloVAC0YLauTSMQYI6iQAfMq%2Bff5sFa%2FpzdpPF5miDZhY4494dFO6ibeR6eO1kGzqDKPVPv0cX3REzAjIybFzYDM3ZLf%2BnFnED2x5qg5JAWUYkO6dBywEomBU31hcXy3e6luL0OvrD5fo6%2Fq8GYxdl2XWlHeNujCGJxCqE1seRveVOy%2BaOBjqM96xa9STAC%2FzFbssYyqtPXLEGFdJFaR4p3&X-Amz-Signature=9a2d3782ed9622096d53f167a396f027851443e65cb295a2064a5a9abe82b560&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOTOLSIF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaRoi2dzkTJDpGcOnDi0XC16nwhOs9YkhezBJhSC9IyAiB5vJvx2WVoVpPWyTSCBp64c0vnGqM5VuhOCS82yLrBWyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIBYaYAiBAXoAYIk6KtwDlRTUC03DD4bKr1RBibsE6nfAsKqkvUqJ7mRnbgi%2FrvYHcQRpvzDt61Jp5pUeUYmGiXm0SAVJUubuBfGGiVj7dnvbTWS%2BKsT5VZ%2FOJV6Pvw7AvzyvyGCt4PTW80aAlyKHf390DfjWC4XJACaeJ9u0aRaVEot%2FtGJf8rPoYSg31A3Rkt%2B5BL5esY4unjnC0J3b4YsTc%2F3PiV36BWd%2FOJ7nMFRf7TfW2THXcs8VSUai%2Bxp9dihM22ysQSxWFavU77DkKh73BvfnbWxX0uT4QwcyuP%2FwADCLxYz6PncYL2%2B%2FAekpPjLmFPQ2TuPl4Dx8F2%2FvARQg0RIEiNZh0sr1xfhPiSErV%2BOb6dzPb3pgoakVjH7FMTXT6F%2FweTaHlRS5bpfPDc%2F0SZ5YC0Cf9TNNuTTlBsQaszad58WWaC3NuRj4Wra0IhbPXPMVhEyhl5p9jEcnOI05P5DN8U8jK2R%2BVdo%2B3TuWKtXbuGNqGz0m1FmTQzw8G%2Fc%2FtgeSFKLydnzRomksQ9w4r5dnqqZD2Ffu7X7PnV7cvwKyZkUC6EIurc3zqnqo33XAfUgaE0J9eW9oWZMcxwe3plGWhGPtLDoPzZStaqk9%2FwM3n2muNWDT7qmjEU9z6SjmVrmjouu%2F2BAw1d3kwQY6pgGDNaL5hcloVAC0YLauTSMQYI6iQAfMq%2Bff5sFa%2FpzdpPF5miDZhY4494dFO6ibeR6eO1kGzqDKPVPv0cX3REzAjIybFzYDM3ZLf%2BnFnED2x5qg5JAWUYkO6dBywEomBU31hcXy3e6luL0OvrD5fo6%2Fq8GYxdl2XWlHeNujCGJxCqE1seRveVOy%2BaOBjqM96xa9STAC%2FzFbssYyqtPXLEGFdJFaR4p3&X-Amz-Signature=a4697f447dad71177f22261bdecd48faae90888a3d262f0691c114d355118cc0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
