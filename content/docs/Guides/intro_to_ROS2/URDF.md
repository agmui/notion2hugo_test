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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7G57TUU%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQ1DhjIyoHKPpkAW6ryMJeqtaA8n5HPti6y2g6NSi1xAiBmzOL68mjWqYGsjZdO6bltlxlLJrib%2F0TeDRFQbaBi%2Fyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMnTxa3a5nFkFDvp65KtwDH4RiYI1EIJfLKMg2gWnRn6Zu%2FLuw8QcxSdUYiWr80rVQTl3DklSJtUxGCvvEoiVG%2BjM2SOgTiqzMb4aPlijfAzcykYl49B6vlPLQW0cfmX0HbkwFDpGcdhDwoDBI%2F%2BA0hP1mqNt%2FwamL8A9CYmEeFqBguxoh6XvdvHQtkL%2BB8iaLBgD8Q2nPDGuwULildshpJ%2B4pxd3Z%2Fw2ql0IdWakKl3goG045j%2FBRYNOaEDVj1Z97%2FF%2BAbUo%2Bj8KubKf62v9nD%2FIzBpDwkyRurhvGJDYoNFUrGRWt0FdZtOqPyZieuBzhUqY%2Ff9sUT84PvPY4cL%2B9Ca1R69nZghbXkosFD4%2B5NhbJEBgxt42ESc413Szu%2BwtoYHIcn9h5atxmJ4LymHCJKhY%2B%2FxSyFjJrHIC%2F0bsRRwpw8dyHXbFkak%2BdR3y6vpTbl77U92IYwAh5FvOi1RIqY5lE6DepMSCJBQ5JCozMDD5119I63Q75RF9YtS7%2BZewDWiLChk%2F579VDJlikHR5R2ZooowkRhI6l0bBuOrBYZXa6yoR18UGA0BNQpmkoUNwHkg3VPcN8ZyIdmgjS%2Fliof8rJU2XJaGVm4GQGEzBlIA%2FEDgtPAdsMoaHDG6wZRDPrKJRMwvCxoKBGlScw7%2BW2vQY6pgGufKlDrzne%2Fdg%2FuUYtpsvzssknTf8fcDXcvQb%2FMwluJOXjju7ZmIT6rT%2Fpd7VFLEITd1KhdzEVs0dY0npRFArvUoUk9YoXarvLPyYSQxs39U1Kj8HZqveXCMeGtxlVa%2BEEkxgbNRhSNaQ2PPTq3ltP7%2FyU8ipH26TIkdu%2BqsltCRUGJt5ghlEUOVvmI%2FVsm%2FhTah7UQtedsAlTtoe%2FcvgSCToulNcd&X-Amz-Signature=64f437deb2fce91498b66af1cb4af765245c956456dc654bdf6f524e6c8e29d9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7G57TUU%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQ1DhjIyoHKPpkAW6ryMJeqtaA8n5HPti6y2g6NSi1xAiBmzOL68mjWqYGsjZdO6bltlxlLJrib%2F0TeDRFQbaBi%2Fyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMnTxa3a5nFkFDvp65KtwDH4RiYI1EIJfLKMg2gWnRn6Zu%2FLuw8QcxSdUYiWr80rVQTl3DklSJtUxGCvvEoiVG%2BjM2SOgTiqzMb4aPlijfAzcykYl49B6vlPLQW0cfmX0HbkwFDpGcdhDwoDBI%2F%2BA0hP1mqNt%2FwamL8A9CYmEeFqBguxoh6XvdvHQtkL%2BB8iaLBgD8Q2nPDGuwULildshpJ%2B4pxd3Z%2Fw2ql0IdWakKl3goG045j%2FBRYNOaEDVj1Z97%2FF%2BAbUo%2Bj8KubKf62v9nD%2FIzBpDwkyRurhvGJDYoNFUrGRWt0FdZtOqPyZieuBzhUqY%2Ff9sUT84PvPY4cL%2B9Ca1R69nZghbXkosFD4%2B5NhbJEBgxt42ESc413Szu%2BwtoYHIcn9h5atxmJ4LymHCJKhY%2B%2FxSyFjJrHIC%2F0bsRRwpw8dyHXbFkak%2BdR3y6vpTbl77U92IYwAh5FvOi1RIqY5lE6DepMSCJBQ5JCozMDD5119I63Q75RF9YtS7%2BZewDWiLChk%2F579VDJlikHR5R2ZooowkRhI6l0bBuOrBYZXa6yoR18UGA0BNQpmkoUNwHkg3VPcN8ZyIdmgjS%2Fliof8rJU2XJaGVm4GQGEzBlIA%2FEDgtPAdsMoaHDG6wZRDPrKJRMwvCxoKBGlScw7%2BW2vQY6pgGufKlDrzne%2Fdg%2FuUYtpsvzssknTf8fcDXcvQb%2FMwluJOXjju7ZmIT6rT%2Fpd7VFLEITd1KhdzEVs0dY0npRFArvUoUk9YoXarvLPyYSQxs39U1Kj8HZqveXCMeGtxlVa%2BEEkxgbNRhSNaQ2PPTq3ltP7%2FyU8ipH26TIkdu%2BqsltCRUGJt5ghlEUOVvmI%2FVsm%2FhTah7UQtedsAlTtoe%2FcvgSCToulNcd&X-Amz-Signature=d761b84468bbf052d0700bcbf644e2a02d5b0223634e5ca1e58bcf278291077f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
