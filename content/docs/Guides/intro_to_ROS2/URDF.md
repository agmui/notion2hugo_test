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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YGJKSJ7%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqPRzk0tf9tLmhxpEc7DbbSfzDSKTKtnOV%2FKZwjwed1QIgfOqd9l5D2Jd7cZkgSOawIJIfrCOO%2BseDUNi7PwW9rf0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGEWwADszp7f82u2ZircA5K%2BrejfNX7cek7oF9w2XC9cuMNMpBKV7PlS7A%2FutCHqsLYPWSA%2F2wN21wUio0Am2H3NSs7auBIVhLCEts9WfMvKBMbzOQoS6oxdveOEI8lweawCdXxqmaI0783tGQx9azNFkWi11NAjjx2CakiIS97C%2Bp4xj%2BiflM3RJ5OS3TV10KMGoAFjQFrTkuzEMRkuWEPIHdDjCjcVBCWfNfirkpHl3jtdzzeKvr2b%2BM5hxSuG6rWihOihOVs6mm%2B2U7gleouxRTEfEjuDE%2Byv9Vef7gAAujozZZUA7yEWDxklPv6rWkYa60Xgw4pM%2FHMJCthWB4eZpGOHbtUzuK%2BSqX02idzNIvGvyuSBG%2FyduKfBuxw8ct9NKNFlQwRQJ3y5RZCY3BMr3MlB30Cx2EA5JuU6G9nahsdWuoSknQsQpQiQChhKCrXKfazNq7LfRk%2Fdfeo25JQD1zsmcR2aVhq8bEJ4NECC9blGYEVtybyCSfvUV%2FBed1%2B1lcip%2BKaWcgm6f92guVUGssSqgz4HhP0TczOnDYOwQdYvSgzgrgUIzovJqwOIKGeNAiBlB%2F1jC5pJAycMjWg57UGGVBDTEddDpqvSaFklfXFxBlwAz7Jw2IaONT2GOmnnBBfjGC48Avm%2FMPfs374GOqUBg6V9ECjDHt8d%2FWvsi8P6sHkpjzmeQvpnPL5EAYRURg8jNBRuaTG9ce5PxvodfmQMMwtHASU4uZJw5qiJHqG3pgP6bgXPk2nvAd3w4LQn51RGh78t1tx5vc87ooHnHOAmTn5nli0GQFZafdGd9xxSXRXfAxUxsoTg8CacWVB15vckFStxB%2F15X5OpvMAjq3yKi9XisHa433ggjkemW%2BWaJC0Hp9Sw&X-Amz-Signature=0c213e6d523ba665befdaeab4788224097e3b72191d0e5cfea170d661b8c53b4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YGJKSJ7%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqPRzk0tf9tLmhxpEc7DbbSfzDSKTKtnOV%2FKZwjwed1QIgfOqd9l5D2Jd7cZkgSOawIJIfrCOO%2BseDUNi7PwW9rf0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGEWwADszp7f82u2ZircA5K%2BrejfNX7cek7oF9w2XC9cuMNMpBKV7PlS7A%2FutCHqsLYPWSA%2F2wN21wUio0Am2H3NSs7auBIVhLCEts9WfMvKBMbzOQoS6oxdveOEI8lweawCdXxqmaI0783tGQx9azNFkWi11NAjjx2CakiIS97C%2Bp4xj%2BiflM3RJ5OS3TV10KMGoAFjQFrTkuzEMRkuWEPIHdDjCjcVBCWfNfirkpHl3jtdzzeKvr2b%2BM5hxSuG6rWihOihOVs6mm%2B2U7gleouxRTEfEjuDE%2Byv9Vef7gAAujozZZUA7yEWDxklPv6rWkYa60Xgw4pM%2FHMJCthWB4eZpGOHbtUzuK%2BSqX02idzNIvGvyuSBG%2FyduKfBuxw8ct9NKNFlQwRQJ3y5RZCY3BMr3MlB30Cx2EA5JuU6G9nahsdWuoSknQsQpQiQChhKCrXKfazNq7LfRk%2Fdfeo25JQD1zsmcR2aVhq8bEJ4NECC9blGYEVtybyCSfvUV%2FBed1%2B1lcip%2BKaWcgm6f92guVUGssSqgz4HhP0TczOnDYOwQdYvSgzgrgUIzovJqwOIKGeNAiBlB%2F1jC5pJAycMjWg57UGGVBDTEddDpqvSaFklfXFxBlwAz7Jw2IaONT2GOmnnBBfjGC48Avm%2FMPfs374GOqUBg6V9ECjDHt8d%2FWvsi8P6sHkpjzmeQvpnPL5EAYRURg8jNBRuaTG9ce5PxvodfmQMMwtHASU4uZJw5qiJHqG3pgP6bgXPk2nvAd3w4LQn51RGh78t1tx5vc87ooHnHOAmTn5nli0GQFZafdGd9xxSXRXfAxUxsoTg8CacWVB15vckFStxB%2F15X5OpvMAjq3yKi9XisHa433ggjkemW%2BWaJC0Hp9Sw&X-Amz-Signature=64b982fa1c1bcceb03e8e4faad72ce4706fcdebff8b82140e6b929bd494f77a3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
