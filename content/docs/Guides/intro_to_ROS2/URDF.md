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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZH6NDFU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSxFsh4bOn3WF0WCZ5qynnQG0rXqEZzwxRqlmKeWQ%2F7AiEA8Mbfusl7JNxwk981jrmiepyhVX%2F4qr9X1mhWHLaxIaMqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBIMLgzrrju6FpKESrcAxIFk2BVYeSXtxlA5veOnAGgWwocdB%2BuFvTXDMzRIbt%2FwM%2BLGEeLPYqqFBN5gZ89rFaVaSkXmyZ80RdV7Tdv489wY5gbviQJl8tecUWVsPhPxFLEMiejBCbcqccjBKMIJFyyNPi3Vdd0zhdkIl6JpCT6ZoEZDpCC829pzNEE2DSxAtc9c4r%2F9LYkUsTEyTK7F7RAtd0I%2B77xH2D5IJgl%2BSzTru1yXjW08Kc5i8eHEMP3woH0i1onGyjzBCzY2tNrYLiZgrNMtBRSX5e%2B419oiGTGxJ3mtswBX00WTqM7oDC7eL6QMOFzMt3PIFPid1e5kN4NMqgI36TMvrJT7ZEmptTddJRKung%2F%2FfsVQZ4olm0wa626Bn9TjlVcbYB2KlhGAcPyd15TYG%2F%2F2qhvuKg5qYCWHQ8q19Ddi7rl1f1mpyn8ET0WItf3%2BRgzfNdXotBOPUnRYAJr34TdnqZ82Dw4Dr7hdKActNe0oHnGlFhTS15hYlnYzdbS%2Far8C%2FYCjwGDX%2BKY%2FoHpATB%2Flzd%2FL8INWqU5ryaRiXCoaj8y4msA9xm4fKr2I9xBHym6fZIj6vU%2FWjLqtdzpj8zPHQZjhGV1sSCd3SKE0E1knCTLBOEHoaxWfHA0MtbEZQjHfj%2FzMI%2FHscEGOqUBJs9vItvzzJESRtA4%2FICHW2Nmu4j%2BbSdNuMNwf0blolzlDwhdSAV%2FIWdajYx424Ep%2BBu5G6qaz7KnVyA9kg6ybU0oXhVL57fZ5%2FT58VKqrfrrH%2FhuOf2KYkcizWjpcdQ9uMy7v6SVumVs5ZI459E3FA3x4%2FODRlwChsEyOD5DdsNjIYcKQc%2BXQQ16sdJct3LTpkvDK%2FCs566ulGWtcokSm01w%2FDCt&X-Amz-Signature=ddfe3812ebddaad1886adf2555247a48c4b67fe312499050e9c57ffee07dadb5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZH6NDFU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSxFsh4bOn3WF0WCZ5qynnQG0rXqEZzwxRqlmKeWQ%2F7AiEA8Mbfusl7JNxwk981jrmiepyhVX%2F4qr9X1mhWHLaxIaMqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBIMLgzrrju6FpKESrcAxIFk2BVYeSXtxlA5veOnAGgWwocdB%2BuFvTXDMzRIbt%2FwM%2BLGEeLPYqqFBN5gZ89rFaVaSkXmyZ80RdV7Tdv489wY5gbviQJl8tecUWVsPhPxFLEMiejBCbcqccjBKMIJFyyNPi3Vdd0zhdkIl6JpCT6ZoEZDpCC829pzNEE2DSxAtc9c4r%2F9LYkUsTEyTK7F7RAtd0I%2B77xH2D5IJgl%2BSzTru1yXjW08Kc5i8eHEMP3woH0i1onGyjzBCzY2tNrYLiZgrNMtBRSX5e%2B419oiGTGxJ3mtswBX00WTqM7oDC7eL6QMOFzMt3PIFPid1e5kN4NMqgI36TMvrJT7ZEmptTddJRKung%2F%2FfsVQZ4olm0wa626Bn9TjlVcbYB2KlhGAcPyd15TYG%2F%2F2qhvuKg5qYCWHQ8q19Ddi7rl1f1mpyn8ET0WItf3%2BRgzfNdXotBOPUnRYAJr34TdnqZ82Dw4Dr7hdKActNe0oHnGlFhTS15hYlnYzdbS%2Far8C%2FYCjwGDX%2BKY%2FoHpATB%2Flzd%2FL8INWqU5ryaRiXCoaj8y4msA9xm4fKr2I9xBHym6fZIj6vU%2FWjLqtdzpj8zPHQZjhGV1sSCd3SKE0E1knCTLBOEHoaxWfHA0MtbEZQjHfj%2FzMI%2FHscEGOqUBJs9vItvzzJESRtA4%2FICHW2Nmu4j%2BbSdNuMNwf0blolzlDwhdSAV%2FIWdajYx424Ep%2BBu5G6qaz7KnVyA9kg6ybU0oXhVL57fZ5%2FT58VKqrfrrH%2FhuOf2KYkcizWjpcdQ9uMy7v6SVumVs5ZI459E3FA3x4%2FODRlwChsEyOD5DdsNjIYcKQc%2BXQQ16sdJct3LTpkvDK%2FCs566ulGWtcokSm01w%2FDCt&X-Amz-Signature=4d938adb824c9e5103ed03f64891521af94bcc2a0266f0bf7ebb10b09e8e098d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
