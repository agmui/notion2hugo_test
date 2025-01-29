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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHE37WN4%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3z%2BLuWc1BrQuULfceVYsd6i0rRE6aSEl7ijLiLkKIOgIhAIuH7peExHrdetZ%2BCzBfNn7v0jAfzaaLM86elK7zAnKKKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrTdawBja76%2BS6yiEq3AMqG3EGI5260QW3BRPei6K4tOb6qrkRAEaTU9UGE51%2F5Yyzm%2BDKKGypKkEdD%2FPpmvxJZtGYVH1BH56AvfNT6jQrEi9c%2Bn5aqbjlb2Em9XernH%2BIQ9l6epfvdNrVRAAS2F%2Bi2%2BSWpJVpH%2B63Zek%2BfADPYjCNCBAvMgjK8l3V87FSKDiagyCNqU7geCmHcCKKt%2FChXv8bpYqGXTCIazkEH7RW8lC6%2FytPirSxgUJYvrnOGRRhKO%2BnqHcv8ntAhCQ43qNynY4hsGEc5GWC4%2FMOZ26uh7MkJsPKGFaWCtfw4TkllpLToeXowopdv%2FiKWMXNgSfXklt5%2FAFV%2BHgFAPcZwKgXVDfeeHLf6%2F7DnNs%2B%2FDm%2Bf0XkweccaPRb2QLh1%2B0CsW84xVH5lUR%2FERJUi8fTPNxczjPcQ1QBas1x%2FbxeDiX2OGc2eIzkhMwcUF8ASCeoMFqkqGYRwOVDJvOTpZMcdJN5psMTlev0Bx07vRQ7VW74SAm%2FoVGA1XCtqIlx3GPPUk0NkZmnyx7zFVjvlc29A%2BnkATBwbbGKhc3LPEnB%2BUukS%2B%2BQsZidzcrpH2br1jnZV1JTwEPXNsXYG%2FZ3l1G4V%2FcP7fTKMhPOD23pJzRGeFPuQv%2FGNVLmaesDGsxG1DD7hOm8BjqkARTXGmzLq7WqFVyq0%2Fm63%2Bv9G9HUh8TvnSaeP%2BU38cLOXRc%2F9Bvx64BeNE90FlNf8%2FlyaCYmJ%2FST4J2%2FiN6B7JVSeFskdfDzejdB68ghVMhJSYw8zyqLZmew3TzA2AnXKgY9OHTtX4PPry8cBpFUZOrvZOZ4tnkpza4GbeQbRvvzkY1fx0JE%2FX3U%2F3zHM63RIc2S1RS2ixhn%2BhKz%2FBVvflN8TNm7&X-Amz-Signature=6bd07dfc8ca37d23506df9cb87a3f0909edb5d425f7277b777e2da4fe3ccffd9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHE37WN4%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3z%2BLuWc1BrQuULfceVYsd6i0rRE6aSEl7ijLiLkKIOgIhAIuH7peExHrdetZ%2BCzBfNn7v0jAfzaaLM86elK7zAnKKKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrTdawBja76%2BS6yiEq3AMqG3EGI5260QW3BRPei6K4tOb6qrkRAEaTU9UGE51%2F5Yyzm%2BDKKGypKkEdD%2FPpmvxJZtGYVH1BH56AvfNT6jQrEi9c%2Bn5aqbjlb2Em9XernH%2BIQ9l6epfvdNrVRAAS2F%2Bi2%2BSWpJVpH%2B63Zek%2BfADPYjCNCBAvMgjK8l3V87FSKDiagyCNqU7geCmHcCKKt%2FChXv8bpYqGXTCIazkEH7RW8lC6%2FytPirSxgUJYvrnOGRRhKO%2BnqHcv8ntAhCQ43qNynY4hsGEc5GWC4%2FMOZ26uh7MkJsPKGFaWCtfw4TkllpLToeXowopdv%2FiKWMXNgSfXklt5%2FAFV%2BHgFAPcZwKgXVDfeeHLf6%2F7DnNs%2B%2FDm%2Bf0XkweccaPRb2QLh1%2B0CsW84xVH5lUR%2FERJUi8fTPNxczjPcQ1QBas1x%2FbxeDiX2OGc2eIzkhMwcUF8ASCeoMFqkqGYRwOVDJvOTpZMcdJN5psMTlev0Bx07vRQ7VW74SAm%2FoVGA1XCtqIlx3GPPUk0NkZmnyx7zFVjvlc29A%2BnkATBwbbGKhc3LPEnB%2BUukS%2B%2BQsZidzcrpH2br1jnZV1JTwEPXNsXYG%2FZ3l1G4V%2FcP7fTKMhPOD23pJzRGeFPuQv%2FGNVLmaesDGsxG1DD7hOm8BjqkARTXGmzLq7WqFVyq0%2Fm63%2Bv9G9HUh8TvnSaeP%2BU38cLOXRc%2F9Bvx64BeNE90FlNf8%2FlyaCYmJ%2FST4J2%2FiN6B7JVSeFskdfDzejdB68ghVMhJSYw8zyqLZmew3TzA2AnXKgY9OHTtX4PPry8cBpFUZOrvZOZ4tnkpza4GbeQbRvvzkY1fx0JE%2FX3U%2F3zHM63RIc2S1RS2ixhn%2BhKz%2FBVvflN8TNm7&X-Amz-Signature=ab2454b0d8a659b3bee36636fcf125899fd7801560c40377442ebf22c2d14275&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
