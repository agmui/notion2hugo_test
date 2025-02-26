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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN25D7XR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD1B8zzAREBu28GLnpm2nx6hziB04s%2FZ1KXYkBX2GlFDAIhALt6PUvL5ZGYD%2B6U7FG60DL1MQf0jCxfpsjYQHPSfRUHKv8DCFcQABoMNjM3NDIzMTgzODA1IgyW0zV8mRzQIVculRwq3ANWAr5RaoiTMYynQNa4A%2BWU2ic9HqTbZVCZN67uJunVwkKqYnJaQStIFVuoeoTFN490lST4mYssu7iTLSZjkanzhyVG7BnXsAqNOIgQHz3VnM%2FmmYEiVsj2uqKy%2FZ4QUmosqwvC6haQ4BAh7B7RcmHtBxjAr0klCyPBchqqrd3IoyvO7RIzXs4YZMnLaZD0eBsGIVck4Nyscxyxyqft68fqXmD6WjkNCBZETJpgfYEOgbuzU0mDU0kvSe5Mn1HwY8DNVouyyygjC06fWA8o3cGwaXFRhmdcUE2ifsj4DddE0B%2BeBHR87Tp1D2LijNJ72Ja2bwBgSKErp%2BwlTxEB9JoCHvaps4TpY3QS3TTMh3m4N98HiBxulP0Qak%2BzO8tM%2B3F8N%2B9giD98qh0scPAyuGvWGFAHTaG1lZdbNU3U3jQCadEr3Y%2BdxCD4MwESjhTLPDDOCoW1hpTG2GriSmd3Um2q3rB7oE4%2FjdrXOx2OfVaOGEw0TSlFD4Sq30vI%2FXhaQwzp%2BMSRCOjHejJkaDbVgDhFcPV8yig8O8yCRE8m9d%2BkCj3w0nlv3dLOHbzHEThP1eQsu7Nl2wnTsCzktqvND2klJdaP82tZks47EO24EPACdr2pcX%2FYd5ttblwUYzCF4%2Fq9BjqkAWJEYFKHtmztDPxVWSyNsas7A9AZYhnJj1PIFes6XHdkCN3hHwnzvxqjbUqvmz4huzU3DIWpfHJCa9HOUwatCM8sOYq8nEYo85ke%2FxZEJVNA%2F84UeDPJ1m6j7h3MkR9LzdGki2q9CX65MN56rOudwn5S3u3pCn9M1yXJtANGDY0qrm02XT5EBrwBWZAE5FIV8OS12alhYEygTMo2k3RE3zDrcivG&X-Amz-Signature=e5ace071b50054997b6d89f597163357a750c078c247a2fc968a1139a839727c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN25D7XR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD1B8zzAREBu28GLnpm2nx6hziB04s%2FZ1KXYkBX2GlFDAIhALt6PUvL5ZGYD%2B6U7FG60DL1MQf0jCxfpsjYQHPSfRUHKv8DCFcQABoMNjM3NDIzMTgzODA1IgyW0zV8mRzQIVculRwq3ANWAr5RaoiTMYynQNa4A%2BWU2ic9HqTbZVCZN67uJunVwkKqYnJaQStIFVuoeoTFN490lST4mYssu7iTLSZjkanzhyVG7BnXsAqNOIgQHz3VnM%2FmmYEiVsj2uqKy%2FZ4QUmosqwvC6haQ4BAh7B7RcmHtBxjAr0klCyPBchqqrd3IoyvO7RIzXs4YZMnLaZD0eBsGIVck4Nyscxyxyqft68fqXmD6WjkNCBZETJpgfYEOgbuzU0mDU0kvSe5Mn1HwY8DNVouyyygjC06fWA8o3cGwaXFRhmdcUE2ifsj4DddE0B%2BeBHR87Tp1D2LijNJ72Ja2bwBgSKErp%2BwlTxEB9JoCHvaps4TpY3QS3TTMh3m4N98HiBxulP0Qak%2BzO8tM%2B3F8N%2B9giD98qh0scPAyuGvWGFAHTaG1lZdbNU3U3jQCadEr3Y%2BdxCD4MwESjhTLPDDOCoW1hpTG2GriSmd3Um2q3rB7oE4%2FjdrXOx2OfVaOGEw0TSlFD4Sq30vI%2FXhaQwzp%2BMSRCOjHejJkaDbVgDhFcPV8yig8O8yCRE8m9d%2BkCj3w0nlv3dLOHbzHEThP1eQsu7Nl2wnTsCzktqvND2klJdaP82tZks47EO24EPACdr2pcX%2FYd5ttblwUYzCF4%2Fq9BjqkAWJEYFKHtmztDPxVWSyNsas7A9AZYhnJj1PIFes6XHdkCN3hHwnzvxqjbUqvmz4huzU3DIWpfHJCa9HOUwatCM8sOYq8nEYo85ke%2FxZEJVNA%2F84UeDPJ1m6j7h3MkR9LzdGki2q9CX65MN56rOudwn5S3u3pCn9M1yXJtANGDY0qrm02XT5EBrwBWZAE5FIV8OS12alhYEygTMo2k3RE3zDrcivG&X-Amz-Signature=ea2d534c61b3d8900167545a8a175e2b80272f5af3eee6b69a128e7bb912ef79&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
