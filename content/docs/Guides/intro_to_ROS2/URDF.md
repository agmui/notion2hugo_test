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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZWQTQ6H%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCepxxWtjJrd%2BruUmmXVH8rnoJif27YhgH5Wa5NNp4w3AIgGp8yCQ7nVR3ea6HGTrbwgvkmyh4QurHZQcRosDBRGB4qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExmNQST1LmQ%2FerVZCrcA0CItX%2BEI4i%2FLextgqKxDMyX4ZTTaWrqiEWT8gPOcWdW53oQrXpCSESlqid0HPpsqP%2BoVQYDP3lhLRDMsvKLNG3F2GoHqljwXEmIXc8JWfX2QYQFDkDqcwdKo665RVdMRBP8Q2YDdFX2GF840yl0OKmR4juNlXxG%2F2VZhSUzCYUbuBpX0FEyOLqeyAu9p%2FjxvgXDf1uoLlhIl5s9uhsX9eSdx%2Ff1GDTVS9viOvy7RfPFtoeGMf9JfuMZX80vCOa0xRvpkR0aG4kNBFxKfLKpGyNwqUYEXVoFp2keJ%2Bl2vvlcuowtalHIdAggNJH2rTzBMt8re1u28W82JELyggluDzwoRdY9jUujDFs3pZncfHox3dO6F3ie5p4PGyrwIKL2QXR%2F8msNy45KoYq8%2BWToUK0q9UJx8PoQf00YSAI3%2FUbmdAGp3Bb42R7eIxXQz81vcOFmHIaN48Nxc1G6mrMLnwARB%2BnNGTW3gwxAiWiUu%2F2nEY3oeLGcOtBv6YfsdSreEjDUFKHL%2BPvCjpcXMBaPotdtZTaqjFITGaCOCV8B3PtZFzoyn6%2BMqORgu9vucdUGxM2bTwAuGTUGPTNyOcD7YyqRvpZ8fb0Yr7jOYGCSeHK%2B%2FARqLS%2BiofJwXlIvMPWhg8EGOqUBNgte%2FeBrBmtHsmsURBnHPySfXbpMyG1BpWHYeBIu%2FOT%2FgeaB6YUX0OJQ70KzhH0CSdj%2F6Hy9fJtfh76Gvw7TQSP2skrvTmSgTJeqbCo8Nxa7SMbYQQcsWceOnqaASg02GvZLnlbMJlJRmVfC1IxHfxeL0Pa4Nvm0qRBZqET179a4sy1dN5dTW23xaYkjtVSxKkshzHF0D7mT3vgs4qlk46K1mxx7&X-Amz-Signature=b9e6739c43961e5b7d8c5006578cd9a9d1cff3908a639a088aeb9ad7cac47b06&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZWQTQ6H%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCepxxWtjJrd%2BruUmmXVH8rnoJif27YhgH5Wa5NNp4w3AIgGp8yCQ7nVR3ea6HGTrbwgvkmyh4QurHZQcRosDBRGB4qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExmNQST1LmQ%2FerVZCrcA0CItX%2BEI4i%2FLextgqKxDMyX4ZTTaWrqiEWT8gPOcWdW53oQrXpCSESlqid0HPpsqP%2BoVQYDP3lhLRDMsvKLNG3F2GoHqljwXEmIXc8JWfX2QYQFDkDqcwdKo665RVdMRBP8Q2YDdFX2GF840yl0OKmR4juNlXxG%2F2VZhSUzCYUbuBpX0FEyOLqeyAu9p%2FjxvgXDf1uoLlhIl5s9uhsX9eSdx%2Ff1GDTVS9viOvy7RfPFtoeGMf9JfuMZX80vCOa0xRvpkR0aG4kNBFxKfLKpGyNwqUYEXVoFp2keJ%2Bl2vvlcuowtalHIdAggNJH2rTzBMt8re1u28W82JELyggluDzwoRdY9jUujDFs3pZncfHox3dO6F3ie5p4PGyrwIKL2QXR%2F8msNy45KoYq8%2BWToUK0q9UJx8PoQf00YSAI3%2FUbmdAGp3Bb42R7eIxXQz81vcOFmHIaN48Nxc1G6mrMLnwARB%2BnNGTW3gwxAiWiUu%2F2nEY3oeLGcOtBv6YfsdSreEjDUFKHL%2BPvCjpcXMBaPotdtZTaqjFITGaCOCV8B3PtZFzoyn6%2BMqORgu9vucdUGxM2bTwAuGTUGPTNyOcD7YyqRvpZ8fb0Yr7jOYGCSeHK%2B%2FARqLS%2BiofJwXlIvMPWhg8EGOqUBNgte%2FeBrBmtHsmsURBnHPySfXbpMyG1BpWHYeBIu%2FOT%2FgeaB6YUX0OJQ70KzhH0CSdj%2F6Hy9fJtfh76Gvw7TQSP2skrvTmSgTJeqbCo8Nxa7SMbYQQcsWceOnqaASg02GvZLnlbMJlJRmVfC1IxHfxeL0Pa4Nvm0qRBZqET179a4sy1dN5dTW23xaYkjtVSxKkshzHF0D7mT3vgs4qlk46K1mxx7&X-Amz-Signature=cafdebf225f2eff8b492ee2ca4e4262eaf12effaff26a311cef864cd4f698078&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
