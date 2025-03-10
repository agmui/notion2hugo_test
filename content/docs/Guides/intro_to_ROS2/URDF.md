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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ4IWOWX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIEoKkAcfbmYYaq%2Bo84ujqtZp0qNSwYppGgsIeBWfPHhTAiArlcGBS%2BOGyfLgGjvO4VfHYI1HxGQBzyDxiHy6tPY19CqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZhOfUoNppk2OPeeDKtwDImkHyiwTVU6OhHNFR5i89Kpu5hMxupLyVfdMS0Dj3whlVAxVmEMQeCAb9iK9AD5F0dVC%2FqZ%2B9XBDFk2PkjXmmRi1oseQQuJ4UDXMraeZGMj%2FvwAgqJHzcvJ4Lu4l5CBXpwh4G2fn5z7Km9PSMPEbfKpv%2F%2FbV1Pk1xMwNmSR4yQ4mNrklzdZupH6032bOkuOWEEtraQdpmVsANEia16GnUR1zQ%2Fc4hNiSA6Dbc5aK9WyffrOq0xTf5fVdFe13QDTc7AFQnGUjaOgDYZP9uMGFnYyUbIOI8P1kkcmYXlYXU4vDT6T4zYVmS734UsyCcFxa0aauMCT32Nz77X9qN957tMr4sWn3MgUsLDukIOfxaNFY9Ax%2BUMU%2BolHNouK2Y8Oq39mGc1fckrGdMxFLmTRdK4tXSigOezHh60xjfh7RjwdqM5we9EcQf7K%2FD1Y4L33%2BRxVEGgqiSJ3Ox6Wma9I83TLC4m27xVnxctyfhzp3CJZtNAq00F3c3eS250j0FeJsTYO1MAa4bdRSNr4k4mjzB7RnkyPJddW1SnPUQRMCbhwseB63JHdazAsI3MxkGYIKPgesyruLFpyLEtp6Hyz%2Fim7upn5VymXpxWeIuGe2MWXiVAesJd%2Bwo3bg3Fswyom6vgY6pgEPHJHYrXbTH79hBxHuorIgCFFjgiLuadjcIsQAhlQ%2ByPlw6EmKKO1yaUb22ylAFkzAK1heY%2F3WwxezARg2ABPiPJ5CIQRGW%2FPVoeBxZ5cSOJl4UNj14GvF2BO5IbK%2Frb0lJKBy6dRZ47dnOiI8Y5DXpCyHOdxtlSU0YwYfA79WmHlWR2CIf4VPD3frW8lutOe3iUXEh1lnsgvWixlLoYVIWmt0C0Ti&X-Amz-Signature=1d9407145167d2ce5e40522b33c26b9157a07da25bce00ce016aa9b1a502a9b2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ4IWOWX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIEoKkAcfbmYYaq%2Bo84ujqtZp0qNSwYppGgsIeBWfPHhTAiArlcGBS%2BOGyfLgGjvO4VfHYI1HxGQBzyDxiHy6tPY19CqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZhOfUoNppk2OPeeDKtwDImkHyiwTVU6OhHNFR5i89Kpu5hMxupLyVfdMS0Dj3whlVAxVmEMQeCAb9iK9AD5F0dVC%2FqZ%2B9XBDFk2PkjXmmRi1oseQQuJ4UDXMraeZGMj%2FvwAgqJHzcvJ4Lu4l5CBXpwh4G2fn5z7Km9PSMPEbfKpv%2F%2FbV1Pk1xMwNmSR4yQ4mNrklzdZupH6032bOkuOWEEtraQdpmVsANEia16GnUR1zQ%2Fc4hNiSA6Dbc5aK9WyffrOq0xTf5fVdFe13QDTc7AFQnGUjaOgDYZP9uMGFnYyUbIOI8P1kkcmYXlYXU4vDT6T4zYVmS734UsyCcFxa0aauMCT32Nz77X9qN957tMr4sWn3MgUsLDukIOfxaNFY9Ax%2BUMU%2BolHNouK2Y8Oq39mGc1fckrGdMxFLmTRdK4tXSigOezHh60xjfh7RjwdqM5we9EcQf7K%2FD1Y4L33%2BRxVEGgqiSJ3Ox6Wma9I83TLC4m27xVnxctyfhzp3CJZtNAq00F3c3eS250j0FeJsTYO1MAa4bdRSNr4k4mjzB7RnkyPJddW1SnPUQRMCbhwseB63JHdazAsI3MxkGYIKPgesyruLFpyLEtp6Hyz%2Fim7upn5VymXpxWeIuGe2MWXiVAesJd%2Bwo3bg3Fswyom6vgY6pgEPHJHYrXbTH79hBxHuorIgCFFjgiLuadjcIsQAhlQ%2ByPlw6EmKKO1yaUb22ylAFkzAK1heY%2F3WwxezARg2ABPiPJ5CIQRGW%2FPVoeBxZ5cSOJl4UNj14GvF2BO5IbK%2Frb0lJKBy6dRZ47dnOiI8Y5DXpCyHOdxtlSU0YwYfA79WmHlWR2CIf4VPD3frW8lutOe3iUXEh1lnsgvWixlLoYVIWmt0C0Ti&X-Amz-Signature=9ea4d25612ceedf859b6fe4c64017f000596d157bd04c461402a1d20f30709b0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
