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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQV6624P%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGRlJnpDKM6qwyp3v2atnJ60BAtMsMGqt6iIa9Y8LpdwIhAJfwO0vDGWPXvFc4jR71akm8faOr1CXKkL2uZ6PjqCwdKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOZItEdiv6UAqQlQoq3ANAOH1UGvFs4Gj6XUFfCELCmDeNl4DWUAd%2BoRV2O74C5wFrCwiDhiv4CRj5qaXpknyB4GKiiQFS23kbEgGN%2BdEMKuvFXe%2BAI3b2ZO7UOdriGKVzitR32NQFvELFWp1gHB8AlQ4my6xVdXdpsk0XSUfaKfZuUBdqz%2BJaSIlYM3xa3Qbl19nRTvaXbYJiR36VuMUPLffMd4Q3sR9uBuB9Qf%2FOqhr36SrDuRR1enb8AVEjeaceSUDNySDcwPqHtt48K%2FeOT9cPH%2Feal%2Fcbh%2FLD5H7%2BQSM3SGD%2BsxfehVzNRYoFuMr%2F31wJOEVx4cTWQlcCCfDms8V1SuKN1QmjqZgvsOta9TZGvBHEHQIBZJ6GQmlHuNLntC4uo%2FRVzZOVMwBumIl6Q3veCecHrcACyLHK6Wg2x1dxXXF180Nv%2BpPSLhigLTbuuMia6Uait%2FAxmX5Ljw15mjNRvzAJpg3UFoxsyYvFVE3h928Z%2F5Hj8C5NxvrAcEvcvS1fjZfAQ1DM51bHOPfe2j5Ps68r4pyIs7OeHpFrTcoCHP6v5XX7rMqjiK2QhnhD2GhMfxkhMx9Uoi5ib%2FMduzyN4YQCvkmaBC29%2Fr%2F7XJsyTbhvCrwix8nIenDHJnYhH40hbUtGUEP1GzCk3J2%2BBjqkAWwDUh8Lt6rkuvYHOccyOJHHKEYxQdtTFs0SNmE0CRULTuSEB2wG2g1BBTpMwghIF0nhf11BO1s6fz0Lvi40JhY6HOQ6sctiMYXg8gVhDHtfVmLYjl%2FTqDz2yaMIJYXnMtKZkxvqlrfAI74twvFr5M2MZLZmFBKJiYt%2FPAKkOnwqMxP6ajemSP5kNMSmnmehagt2dsDdur%2BVKWdqOIme18pYF3dL&X-Amz-Signature=4670e89493ac321ccdd04446bd19ed5adceee92970bfba31e26e78e55ef6fea3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQV6624P%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGRlJnpDKM6qwyp3v2atnJ60BAtMsMGqt6iIa9Y8LpdwIhAJfwO0vDGWPXvFc4jR71akm8faOr1CXKkL2uZ6PjqCwdKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOZItEdiv6UAqQlQoq3ANAOH1UGvFs4Gj6XUFfCELCmDeNl4DWUAd%2BoRV2O74C5wFrCwiDhiv4CRj5qaXpknyB4GKiiQFS23kbEgGN%2BdEMKuvFXe%2BAI3b2ZO7UOdriGKVzitR32NQFvELFWp1gHB8AlQ4my6xVdXdpsk0XSUfaKfZuUBdqz%2BJaSIlYM3xa3Qbl19nRTvaXbYJiR36VuMUPLffMd4Q3sR9uBuB9Qf%2FOqhr36SrDuRR1enb8AVEjeaceSUDNySDcwPqHtt48K%2FeOT9cPH%2Feal%2Fcbh%2FLD5H7%2BQSM3SGD%2BsxfehVzNRYoFuMr%2F31wJOEVx4cTWQlcCCfDms8V1SuKN1QmjqZgvsOta9TZGvBHEHQIBZJ6GQmlHuNLntC4uo%2FRVzZOVMwBumIl6Q3veCecHrcACyLHK6Wg2x1dxXXF180Nv%2BpPSLhigLTbuuMia6Uait%2FAxmX5Ljw15mjNRvzAJpg3UFoxsyYvFVE3h928Z%2F5Hj8C5NxvrAcEvcvS1fjZfAQ1DM51bHOPfe2j5Ps68r4pyIs7OeHpFrTcoCHP6v5XX7rMqjiK2QhnhD2GhMfxkhMx9Uoi5ib%2FMduzyN4YQCvkmaBC29%2Fr%2F7XJsyTbhvCrwix8nIenDHJnYhH40hbUtGUEP1GzCk3J2%2BBjqkAWwDUh8Lt6rkuvYHOccyOJHHKEYxQdtTFs0SNmE0CRULTuSEB2wG2g1BBTpMwghIF0nhf11BO1s6fz0Lvi40JhY6HOQ6sctiMYXg8gVhDHtfVmLYjl%2FTqDz2yaMIJYXnMtKZkxvqlrfAI74twvFr5M2MZLZmFBKJiYt%2FPAKkOnwqMxP6ajemSP5kNMSmnmehagt2dsDdur%2BVKWdqOIme18pYF3dL&X-Amz-Signature=6b5cd2fe8f6c97a89eb6347467e51fd68c281ec78847db40624568a27f68d423&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
