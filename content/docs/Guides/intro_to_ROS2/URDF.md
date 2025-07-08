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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDP4LFND%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBJpFWcxu2Y9Y%2FjtUntr768ksAHqSr8fypjBOTV%2Bb8jgIhAPBQ%2BHEfe%2BNjrNciACBFRzdkFJTJuV2pJpGfCKxS8zHoKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZbO4WYalnZdfSjLsq3AMo0gE3S6jCQ8h4kKDG6yePWbeQpsDTc%2FKPA0aMsp77ws5YPE7d00NKhInt5lX5N%2FpFuA%2FQpTVC%2FhHNS%2FhAMDp7a8Ileu87uhUCFjZw8wJd1x5TnR7SWSu7PjORWbup38C6AIOf1oiY9D94Vb%2F4u%2BWHWlopNVVWhoA1iL%2F04d52yqre%2BddiL541aaLC09jEnzXuwahjg19OD5K%2Bcd%2F%2BFn8lOGBdfoBypK9%2B9ZTmJEammSV33KirZ2MABsB1JTY6dZodd0uxSonvPMjULzsdH4RV6mAX%2BlKLN5peCYbQelHZWa6qg9ImrUA4sXBQmFFluFVfPrB7kRicr1u80HlcycQYktX2EpCfP77dPewwzVaqOnx2wkBO8SF6lIVc1cdXI0RBbmzBJ2gih0GTKV7AqhgnfPfVt4O3Qvdtf1cbhxIv3Skkz3rmVPSlbSbn7%2F3W%2BpA4dWg9Th0Qyn1HtI%2BTTgHvyalBhd1M4QwaiWDK3wVO0y%2BdB1ZjFgllqp89rE3cUDS4SC9bT3UlqrSpUCrB%2FBuzlvDceGsh9nKkzxZTDMMz43JhRCJ%2Bly33kL8Ls9KJ4VEXmuN2zoyHu8sMAF1lgbs0%2F4oM25vzf5WKQYwt2%2FC31xoF6r67VqflAnTjRTDHg7bDBjqkAaRfd3Y1ynp1U5NySP0du%2BPYONAQTV3Umi%2B2j19VqGhCx4oWZFQwo7Uv%2BuXl5%2FDkUjnedcjFciY2oJbeq17SIQhR%2B%2FSacxMZRXayM2FXug3rpRRTk6iKRh6AOOFPueY1Hv2wAVwtkz51e1mP5NncKckDa26giJzwqyrvSednDYXSRxesm56GxRI%2FTE2ufo0TFIdC4K9qgFgGGrz%2BioNN%2BjdeiBkM&X-Amz-Signature=63f8cb949d8b9d516838fd384a02a5bb5d64ca5124023be27db6b371e434409a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDP4LFND%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBJpFWcxu2Y9Y%2FjtUntr768ksAHqSr8fypjBOTV%2Bb8jgIhAPBQ%2BHEfe%2BNjrNciACBFRzdkFJTJuV2pJpGfCKxS8zHoKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZbO4WYalnZdfSjLsq3AMo0gE3S6jCQ8h4kKDG6yePWbeQpsDTc%2FKPA0aMsp77ws5YPE7d00NKhInt5lX5N%2FpFuA%2FQpTVC%2FhHNS%2FhAMDp7a8Ileu87uhUCFjZw8wJd1x5TnR7SWSu7PjORWbup38C6AIOf1oiY9D94Vb%2F4u%2BWHWlopNVVWhoA1iL%2F04d52yqre%2BddiL541aaLC09jEnzXuwahjg19OD5K%2Bcd%2F%2BFn8lOGBdfoBypK9%2B9ZTmJEammSV33KirZ2MABsB1JTY6dZodd0uxSonvPMjULzsdH4RV6mAX%2BlKLN5peCYbQelHZWa6qg9ImrUA4sXBQmFFluFVfPrB7kRicr1u80HlcycQYktX2EpCfP77dPewwzVaqOnx2wkBO8SF6lIVc1cdXI0RBbmzBJ2gih0GTKV7AqhgnfPfVt4O3Qvdtf1cbhxIv3Skkz3rmVPSlbSbn7%2F3W%2BpA4dWg9Th0Qyn1HtI%2BTTgHvyalBhd1M4QwaiWDK3wVO0y%2BdB1ZjFgllqp89rE3cUDS4SC9bT3UlqrSpUCrB%2FBuzlvDceGsh9nKkzxZTDMMz43JhRCJ%2Bly33kL8Ls9KJ4VEXmuN2zoyHu8sMAF1lgbs0%2F4oM25vzf5WKQYwt2%2FC31xoF6r67VqflAnTjRTDHg7bDBjqkAaRfd3Y1ynp1U5NySP0du%2BPYONAQTV3Umi%2B2j19VqGhCx4oWZFQwo7Uv%2BuXl5%2FDkUjnedcjFciY2oJbeq17SIQhR%2B%2FSacxMZRXayM2FXug3rpRRTk6iKRh6AOOFPueY1Hv2wAVwtkz51e1mP5NncKckDa26giJzwqyrvSednDYXSRxesm56GxRI%2FTE2ufo0TFIdC4K9qgFgGGrz%2BioNN%2BjdeiBkM&X-Amz-Signature=735d54f5b86b3e4ea2bd07b88366ffdcf177c69b2fa75a7ac23b6529764224eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
