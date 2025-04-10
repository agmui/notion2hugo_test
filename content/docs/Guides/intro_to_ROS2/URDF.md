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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLB36PJ3%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T132041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGYbEIwmMu78OgqlY1gEx7z1I9VSa0dc2eoNwXEAakxNAiEAu6rzmKv5NsWxAMKuDaR%2BEQGzAZJeUDvDs5Ki99GnagUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1aLp12lkQhnU5uhCrcA5rmAyV0%2BahzVj%2F2sDub3ekgg%2FDDQeqGYn82i4uuyObYMxDAembtS7px67DIJMI6ebc93bKjcdJSQvgjPIFlbo1yWqm27H4Yz1Th4lrr8EOZYxg4BACIZSZp%2BeM0hfc8XIC5N3MAjR9vDJ7Tkal8Av%2BoYhF3yuPGW%2Fa741LfJJ3a%2FetEq6kS5KPKlTvJ%2FqdQso%2BswBSStQ9n1XrR7A%2FkelfuHw%2Bt2%2FAWr%2B%2BBVt9wpQAkkXHhLeRE0hQUPq21YZSrFwHGh2b1yhQ%2F%2FJrSn9vSejJxXeogQYEfuu5SVoidlmgh7GHDylgzuXo%2FeH9iiH0pKvqUBBS3%2BCN6iLuoFJgG5Qv5zssIMWsJxtQPiQQ1ya73OS%2FH%2FdH689SQlXIzbyyv1UQv%2FdiJPEeV4DBMpUiGVdmEE7%2FPFoagGluzQx2E0APv3hv8oQ2GaYHFtxgPw2%2FECpcpWV58S5YSWVr3QRidRDpW53wbukLEDBX3iJDWM9MZR0K0zDsanNIASG1zcVb2c0znpd8%2BZihDJ1OomZMh2wbQlQ192NA21rm3lvgejs8lZ9FEFolW4qTCZ3zrlZYOaLK%2BUglWaO27voaKUjX2ByHXhvbC6y7KcTv8s7zH1t4KhUUMp0gefDRgvdc%2FMKKK378GOqUB8s4hv4%2FSzB8pie7r%2BVkFWhYgjOWsjF1IQhwM0sd3v3R8E5J2PLPf%2Fai6pSEbI0WEnHsPMd9%2F%2BBOf6seKosdAW9dHtq%2F3bPEXZlJa2FqonvsbtUQcm6hk7IcerBC9dqAHJUhjIfct%2FiCkhzQ4d2cbRCs1skpij7BhoJbbAYcrtI1ISgYWoqdvNuhmnpZTfSMKrVmtHZmSuB4Q3iFeBS%2Bce7cnXmoC&X-Amz-Signature=ef37d8b78522a30f213fcd2de29e89dddd40e2dd5db8858c867abfbcdd3b2251&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLB36PJ3%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T132041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGYbEIwmMu78OgqlY1gEx7z1I9VSa0dc2eoNwXEAakxNAiEAu6rzmKv5NsWxAMKuDaR%2BEQGzAZJeUDvDs5Ki99GnagUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1aLp12lkQhnU5uhCrcA5rmAyV0%2BahzVj%2F2sDub3ekgg%2FDDQeqGYn82i4uuyObYMxDAembtS7px67DIJMI6ebc93bKjcdJSQvgjPIFlbo1yWqm27H4Yz1Th4lrr8EOZYxg4BACIZSZp%2BeM0hfc8XIC5N3MAjR9vDJ7Tkal8Av%2BoYhF3yuPGW%2Fa741LfJJ3a%2FetEq6kS5KPKlTvJ%2FqdQso%2BswBSStQ9n1XrR7A%2FkelfuHw%2Bt2%2FAWr%2B%2BBVt9wpQAkkXHhLeRE0hQUPq21YZSrFwHGh2b1yhQ%2F%2FJrSn9vSejJxXeogQYEfuu5SVoidlmgh7GHDylgzuXo%2FeH9iiH0pKvqUBBS3%2BCN6iLuoFJgG5Qv5zssIMWsJxtQPiQQ1ya73OS%2FH%2FdH689SQlXIzbyyv1UQv%2FdiJPEeV4DBMpUiGVdmEE7%2FPFoagGluzQx2E0APv3hv8oQ2GaYHFtxgPw2%2FECpcpWV58S5YSWVr3QRidRDpW53wbukLEDBX3iJDWM9MZR0K0zDsanNIASG1zcVb2c0znpd8%2BZihDJ1OomZMh2wbQlQ192NA21rm3lvgejs8lZ9FEFolW4qTCZ3zrlZYOaLK%2BUglWaO27voaKUjX2ByHXhvbC6y7KcTv8s7zH1t4KhUUMp0gefDRgvdc%2FMKKK378GOqUB8s4hv4%2FSzB8pie7r%2BVkFWhYgjOWsjF1IQhwM0sd3v3R8E5J2PLPf%2Fai6pSEbI0WEnHsPMd9%2F%2BBOf6seKosdAW9dHtq%2F3bPEXZlJa2FqonvsbtUQcm6hk7IcerBC9dqAHJUhjIfct%2FiCkhzQ4d2cbRCs1skpij7BhoJbbAYcrtI1ISgYWoqdvNuhmnpZTfSMKrVmtHZmSuB4Q3iFeBS%2Bce7cnXmoC&X-Amz-Signature=2f78ea1d0f04285d9556cda05a356789b536885e89736ae7635f7e98bebd9145&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
