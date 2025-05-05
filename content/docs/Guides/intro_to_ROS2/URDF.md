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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663H5ZFNE%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGq%2FroCDWMhsj42TPErEYAsbm%2F8JdL1nU20zgYnxFAHHAiEA20JnMmhBNsI3tDpKj449BAr7IwjgRgGCt4WqS3Dl6SUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDM2A7MEtxiXpSUapKCrcA6%2FuH%2Bg%2FvlYbfAvBOiYeUbyoTTS0r4Q0GydY4F4zcgL%2BYf4GMQOJSMYaMe0mH63LPOu12qKW2QyQ346jwgekn68hPW6gOcrd6LKVfZt0EMwX9UA21nYsS%2BOQV1WIE5OdozMwzvfZzV%2BO0glFatssCly9Zq6vNAFlV0I5DwtU%2BZ3eIH3fBTIwB8S%2FbbPsuHFdP8uPK%2Bf3wELWqlCDQ8xhlpReRQKgWp3gJVY4aAfJF0uUSaod9O8yVMJkgJXntxPMAZpEpX7n7Rn3rAGS442fKWPlqOrQu5Nw5JI1o7De7FlXRf0s%2Fro4vMbArDFh7c7S001KaRJet4oAo3oZ6V3FBLoVM9pPNkj0iJ8qaHNoB2c88cTm9%2BeIVPg7NJkNB8AEvthpz%2FVM37G460l0bWOErlToXml0v1Wc178sYDiKLRe1XW0BpdxRjvbFvSKXkwFhMyhjAh0fuUMOT5j%2FoSMrFmO4sjm2KJnoJjd%2FQcyy71MQHAnHeNRe%2BglfKCWGkqzbmgjukVlGRV%2BHrqMfl153JWbTfHVagOX60v0PqR8%2FwU27h4urxmvX3Yq90WYHxZjYwX5XPI6eE%2BhpXj1aiI4%2FpfnlmFVdfaenQjrrEKLEImZ9RIgi4QtPbpbo4l9VMJnP4cAGOqUBmPODZPNsNAmtI69TlYZusg%2F6SaMtJDQIxnfz4uWDwZ4n6ocN%2F54gnsTVlMzJW9QeVM3F1uiwV7a9TVvnzCq7os2IZ1gq9GA5aBtnrEphDbqBhFs%2B4g0eNAOejCJnbMstlzdQqC7Zkus4ijIUZ4A8cdOCRAIV60Yb0WkyODzDN1tHraNW3ekcEdUgUH9XTjij4ApMwajtKFKMNSr17WFsOm0eIlY3&X-Amz-Signature=9eef29a400c4b2d0931b32db15be1af15074004747681ff4aca6e6b7d6986558&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663H5ZFNE%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGq%2FroCDWMhsj42TPErEYAsbm%2F8JdL1nU20zgYnxFAHHAiEA20JnMmhBNsI3tDpKj449BAr7IwjgRgGCt4WqS3Dl6SUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDM2A7MEtxiXpSUapKCrcA6%2FuH%2Bg%2FvlYbfAvBOiYeUbyoTTS0r4Q0GydY4F4zcgL%2BYf4GMQOJSMYaMe0mH63LPOu12qKW2QyQ346jwgekn68hPW6gOcrd6LKVfZt0EMwX9UA21nYsS%2BOQV1WIE5OdozMwzvfZzV%2BO0glFatssCly9Zq6vNAFlV0I5DwtU%2BZ3eIH3fBTIwB8S%2FbbPsuHFdP8uPK%2Bf3wELWqlCDQ8xhlpReRQKgWp3gJVY4aAfJF0uUSaod9O8yVMJkgJXntxPMAZpEpX7n7Rn3rAGS442fKWPlqOrQu5Nw5JI1o7De7FlXRf0s%2Fro4vMbArDFh7c7S001KaRJet4oAo3oZ6V3FBLoVM9pPNkj0iJ8qaHNoB2c88cTm9%2BeIVPg7NJkNB8AEvthpz%2FVM37G460l0bWOErlToXml0v1Wc178sYDiKLRe1XW0BpdxRjvbFvSKXkwFhMyhjAh0fuUMOT5j%2FoSMrFmO4sjm2KJnoJjd%2FQcyy71MQHAnHeNRe%2BglfKCWGkqzbmgjukVlGRV%2BHrqMfl153JWbTfHVagOX60v0PqR8%2FwU27h4urxmvX3Yq90WYHxZjYwX5XPI6eE%2BhpXj1aiI4%2FpfnlmFVdfaenQjrrEKLEImZ9RIgi4QtPbpbo4l9VMJnP4cAGOqUBmPODZPNsNAmtI69TlYZusg%2F6SaMtJDQIxnfz4uWDwZ4n6ocN%2F54gnsTVlMzJW9QeVM3F1uiwV7a9TVvnzCq7os2IZ1gq9GA5aBtnrEphDbqBhFs%2B4g0eNAOejCJnbMstlzdQqC7Zkus4ijIUZ4A8cdOCRAIV60Yb0WkyODzDN1tHraNW3ekcEdUgUH9XTjij4ApMwajtKFKMNSr17WFsOm0eIlY3&X-Amz-Signature=6849175f38eaf1235b3ddf222b6d7839fc1240d581812678c2ab2d11cca1f470&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
