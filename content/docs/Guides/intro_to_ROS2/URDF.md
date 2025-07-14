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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN3PQTIJ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDLKnv4CMoXbZ5ZxQw47bVtuPjSAf03UvXNQLJY8HQXUQIhAO073%2F%2BQTVlMsXz%2Bxr40%2FhEWVQdxseAkokk0ts9lGYNtKv8DCDQQABoMNjM3NDIzMTgzODA1Igwb9KInEqEmBEaJxyAq3AOIfC1T1W07C%2B9px1LFk1dZtkVqubM09pn8Av4i7ce5Trhx0yLqV7f9uCNV8JgqWolMOIzy8rUv4dU7cMWLgnMOTD3sjPnY8lNNxvevTbboQv0YlZUf0Zn3b1GnqWjMsniojqQIycQmFM56BtsfYN35Zbgnw8gzq3LgA5Bdk%2BmC4HfaikAbZPOV14Ms3S2dZWxcJB64mlDz%2FJ5cmi53zXcx0UkloPsdyvp00kdOsHR%2B%2Bimpcii9UXBBR7adOnGz%2FL%2Fvgc8zXJGkXxaijgUxLmuwW195s3pDloH4%2F%2B9rSBIBhG9Ny9pVE10rugC1WdnapQRNAmDAap5Cg0Iqi8Tm8bOFImoguJs%2F0eHytPML6LTbhYJJZFlOvGfvOJxAxm3V%2Boz7FacduxXj7W%2FiJnZwXyRhQ%2F6NcOdixgC5U%2FREXvwPa3hLl7ZI5rtX8fzQxNzU6hKClE11Rryhmlat954wlvHDrd0Gts4Gz98isqEy0mal1NvhOwoKm04%2F90WrlrXBf3MA%2BOb%2FcAnc15G7ojSMAievmVVH9hFWes2OrZAuf9rmlXoSFgd3XptiEdYFEOdVz9Xkxsb2GBk%2BPdBT3cOGbbDDEBg9Z%2FQ%2BBeXc8hwCcWp53yrjmsooe8VfBHDOhDD3o9XDBjqkARJ%2BUuR2T7YoDbqOrtBNm8tPYT89Sp1U0qfghnSzUsFeUHK8iW3%2Bd6cYL7yLzLiyOTPG%2BoFsiScb67aHhJiZVHuLiF%2FN%2Fpr5C07qaV7EA183WTsptpsqNxiE24WgkdRNuHzHmcz4MX3bFHC2u6j%2F0alMeT%2BN1VL3H7KNivSSn3iBtu%2BnDpGwr2kpdyfexP3U%2FF%2Bw3sIgplha3dv3X%2BENwp%2BrUqjC&X-Amz-Signature=c02b08bd515ccd15a7af8df285b4676a3180fad0c6f417dca8a5e37993572f17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN3PQTIJ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDLKnv4CMoXbZ5ZxQw47bVtuPjSAf03UvXNQLJY8HQXUQIhAO073%2F%2BQTVlMsXz%2Bxr40%2FhEWVQdxseAkokk0ts9lGYNtKv8DCDQQABoMNjM3NDIzMTgzODA1Igwb9KInEqEmBEaJxyAq3AOIfC1T1W07C%2B9px1LFk1dZtkVqubM09pn8Av4i7ce5Trhx0yLqV7f9uCNV8JgqWolMOIzy8rUv4dU7cMWLgnMOTD3sjPnY8lNNxvevTbboQv0YlZUf0Zn3b1GnqWjMsniojqQIycQmFM56BtsfYN35Zbgnw8gzq3LgA5Bdk%2BmC4HfaikAbZPOV14Ms3S2dZWxcJB64mlDz%2FJ5cmi53zXcx0UkloPsdyvp00kdOsHR%2B%2Bimpcii9UXBBR7adOnGz%2FL%2Fvgc8zXJGkXxaijgUxLmuwW195s3pDloH4%2F%2B9rSBIBhG9Ny9pVE10rugC1WdnapQRNAmDAap5Cg0Iqi8Tm8bOFImoguJs%2F0eHytPML6LTbhYJJZFlOvGfvOJxAxm3V%2Boz7FacduxXj7W%2FiJnZwXyRhQ%2F6NcOdixgC5U%2FREXvwPa3hLl7ZI5rtX8fzQxNzU6hKClE11Rryhmlat954wlvHDrd0Gts4Gz98isqEy0mal1NvhOwoKm04%2F90WrlrXBf3MA%2BOb%2FcAnc15G7ojSMAievmVVH9hFWes2OrZAuf9rmlXoSFgd3XptiEdYFEOdVz9Xkxsb2GBk%2BPdBT3cOGbbDDEBg9Z%2FQ%2BBeXc8hwCcWp53yrjmsooe8VfBHDOhDD3o9XDBjqkARJ%2BUuR2T7YoDbqOrtBNm8tPYT89Sp1U0qfghnSzUsFeUHK8iW3%2Bd6cYL7yLzLiyOTPG%2BoFsiScb67aHhJiZVHuLiF%2FN%2Fpr5C07qaV7EA183WTsptpsqNxiE24WgkdRNuHzHmcz4MX3bFHC2u6j%2F0alMeT%2BN1VL3H7KNivSSn3iBtu%2BnDpGwr2kpdyfexP3U%2FF%2Bw3sIgplha3dv3X%2BENwp%2BrUqjC&X-Amz-Signature=2f050e50f56e5547ef97dde3c11df980a59fadae148493b0872f6f3e6c0968bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
