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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNQONNFE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCVcS8dw7QSABzUANNSYoBPLb1kJx098ioOY5%2FjLXc1wQIgSpkZLXqiqKb7%2BJA0tX2JjEVOZMYFsPatFhuFYaxOgGwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPt1VSJQMx3o%2BoPiWircA6YwN7L0cMHty5Eml51qFbrc%2F1TDlHLiZbMVMjmBzSco5sKE3Qm1NT6YokzN2JQOCrtDUWLV86Sagow41u5K43cbvY7MP8eXHf0TYfmqRK7hzop85%2FEUWR7%2FVQ4hmeEzAZnTywT05%2FQLPcVfY0LahEXkk9vTf2xsOQvn%2Fpw4v9x7vg6JiWAqk7rhtbtDN%2FVOxByPTbXvZgbRO3pYcTDdNoRasPfYHOx69pDZUx%2BgCn0Bsd67X9EulqTq3ZfhuUepLtZocw5RQtm3eS0Mk7BNlObkMPnWqgaeo0IxcQ5IXR0F22JtEnbZR42FjmQYpqKKN8wNCYbeQ%2FkEf%2Fbz8o0A08Zyx4kLkEnKc0yPL5xbLa03VszpUwd%2B7lYO893SeMex5JtQLzKTVnad17GDo4kRKD9PgepHKl%2BrIErSa4F%2F%2B1GANLeZVrPa7lAgucjABF%2BihTuHkkZ10EWNWqA7aU%2FofCpQKUFA8SraEGIZFhJhSAeV5EgAnIp7OU21nt5QiozyyBnfre2%2BCLjOZok5BTIF%2FV9Pu5csikvsatTGvSoN7hXoV6o8IAfR9FI6rz9sne%2Fc9Mm3qEPTNFs3RpGHzKACyzE6pEmgXfVg5bdc7um0Xay9pqzfI5swvZxSx0KLMPre18AGOqUB2pL9y4Abl0dVTxW5mibzDJbAysfStASuIxaHCHdaVPRYgK34M5kkvPJQIRR9OmhrWG%2FGvPoz9kV4i5vaZpvHM0UMvpQifhDCscnvyNjuu7lY50vOLtl2uWEkiRbX3dBtT5AOKuNssjGOsDF2w3lDBdO2Ug2Kh7jeQ606rnQe3c6eO2kjrlGCxgh4OhHCNNKLWphkpSMltao3B2S06hkKQvBSOjNr&X-Amz-Signature=40c575f308117f3fff635715679d2fa2bcb214113f16117fff45e83025b10c4a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNQONNFE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCVcS8dw7QSABzUANNSYoBPLb1kJx098ioOY5%2FjLXc1wQIgSpkZLXqiqKb7%2BJA0tX2JjEVOZMYFsPatFhuFYaxOgGwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPt1VSJQMx3o%2BoPiWircA6YwN7L0cMHty5Eml51qFbrc%2F1TDlHLiZbMVMjmBzSco5sKE3Qm1NT6YokzN2JQOCrtDUWLV86Sagow41u5K43cbvY7MP8eXHf0TYfmqRK7hzop85%2FEUWR7%2FVQ4hmeEzAZnTywT05%2FQLPcVfY0LahEXkk9vTf2xsOQvn%2Fpw4v9x7vg6JiWAqk7rhtbtDN%2FVOxByPTbXvZgbRO3pYcTDdNoRasPfYHOx69pDZUx%2BgCn0Bsd67X9EulqTq3ZfhuUepLtZocw5RQtm3eS0Mk7BNlObkMPnWqgaeo0IxcQ5IXR0F22JtEnbZR42FjmQYpqKKN8wNCYbeQ%2FkEf%2Fbz8o0A08Zyx4kLkEnKc0yPL5xbLa03VszpUwd%2B7lYO893SeMex5JtQLzKTVnad17GDo4kRKD9PgepHKl%2BrIErSa4F%2F%2B1GANLeZVrPa7lAgucjABF%2BihTuHkkZ10EWNWqA7aU%2FofCpQKUFA8SraEGIZFhJhSAeV5EgAnIp7OU21nt5QiozyyBnfre2%2BCLjOZok5BTIF%2FV9Pu5csikvsatTGvSoN7hXoV6o8IAfR9FI6rz9sne%2Fc9Mm3qEPTNFs3RpGHzKACyzE6pEmgXfVg5bdc7um0Xay9pqzfI5swvZxSx0KLMPre18AGOqUB2pL9y4Abl0dVTxW5mibzDJbAysfStASuIxaHCHdaVPRYgK34M5kkvPJQIRR9OmhrWG%2FGvPoz9kV4i5vaZpvHM0UMvpQifhDCscnvyNjuu7lY50vOLtl2uWEkiRbX3dBtT5AOKuNssjGOsDF2w3lDBdO2Ug2Kh7jeQ606rnQe3c6eO2kjrlGCxgh4OhHCNNKLWphkpSMltao3B2S06hkKQvBSOjNr&X-Amz-Signature=a51f75abb460ce30c69c063adee035c90c76e07dc0d5f8d9facaaca0233a986e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
