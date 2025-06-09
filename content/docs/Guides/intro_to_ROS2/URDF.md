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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJNDHWGQ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T004523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmyqg3Khv0dO4vx4gs%2ByguUkhKZv8UxUfVhViLX8jcnAIgBt3TVbd0clZ6hsH7%2FidD1BsmTmXh4qioqMC7G0IBKcYqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrrP88xv5d7vAO31CrcA1XhYc%2BCEazQLH2uyEgOSoG7lAToLHGJxApKgiNHZjuHDNrVpHmmUsJMBm74RPdOOUGzrEea4Ep80GoirUG%2F3gdoowFnFDa7WhNc90CliCiJRznkKP%2BwWCS6E305KMxle0W8lXstSYXALq%2FDPQsabO%2BU%2BtJqOO8N6Ax5%2B4c0Glk%2BeMU9tcW0%2B7CYxWJATQDLvXG%2FTeIFPMRg%2F4msodKCCf%2B8U5X9mzFsc%2FnGj8%2BlgRdUv4uXRqWqfWKBchKgML6MwiHoNInpRHB5k8W7JEaHk%2Bq7OtgnjZirBCWCr7Xv0Q9NcR9djTF1%2FHkD%2FAdG0%2B3XzTXQXTm4pGhmjKZq9uYgB7bxILWaFJieY2G4%2FLsSfAT%2BJybqm24VN1aL1lttKq3hUW9AYc5puTgyUDmmDICrG0SIXzUkivlys1paRYOGU7ZEL7jw1OgFMw2WRSPvYuDJmj4mJxAnW5piDcPokbaTSoSZSKYWXbmjSqGCMOohowULiq%2F1RkqktpQJsHml8e%2BGjat%2F3FkWMkQx3uSQR%2FgKY3D7DMuxgFdC2YF0pCE9EAZLrMH87qHZZyMn3f41nNHle1feRPN4h0AdMrZ2bPN0hCOJI5PrtZK19nFLo1OSKf73mhpNwSUaPBBAibUkMNHLmMIGOqUB%2FpdizT0RV3tUFFq53W5gHLa3A0PHHKPj2s9z6Xlat8kUIZxyoOmUDs%2BHj0klD8cFLXv%2F0No81vUxyK2XCSvUTd8O4UbK9xSknl0okC0w8P%2FjY9aJH3PUTL19xez97KVGx6q%2FMMa05eHm2cIDE4kBtgdUWV%2FKRpVtzbX%2BXo4aGgzuBjS4TCcD8Ld%2FclbJEsdd3J8jOK0z8sjqMIdJ1FTqU734j3eg&X-Amz-Signature=04e0e5af7d572149ad15fe3b66ed63b724eed81e2bd5557c848d36a91020f136&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJNDHWGQ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T004523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmyqg3Khv0dO4vx4gs%2ByguUkhKZv8UxUfVhViLX8jcnAIgBt3TVbd0clZ6hsH7%2FidD1BsmTmXh4qioqMC7G0IBKcYqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrrP88xv5d7vAO31CrcA1XhYc%2BCEazQLH2uyEgOSoG7lAToLHGJxApKgiNHZjuHDNrVpHmmUsJMBm74RPdOOUGzrEea4Ep80GoirUG%2F3gdoowFnFDa7WhNc90CliCiJRznkKP%2BwWCS6E305KMxle0W8lXstSYXALq%2FDPQsabO%2BU%2BtJqOO8N6Ax5%2B4c0Glk%2BeMU9tcW0%2B7CYxWJATQDLvXG%2FTeIFPMRg%2F4msodKCCf%2B8U5X9mzFsc%2FnGj8%2BlgRdUv4uXRqWqfWKBchKgML6MwiHoNInpRHB5k8W7JEaHk%2Bq7OtgnjZirBCWCr7Xv0Q9NcR9djTF1%2FHkD%2FAdG0%2B3XzTXQXTm4pGhmjKZq9uYgB7bxILWaFJieY2G4%2FLsSfAT%2BJybqm24VN1aL1lttKq3hUW9AYc5puTgyUDmmDICrG0SIXzUkivlys1paRYOGU7ZEL7jw1OgFMw2WRSPvYuDJmj4mJxAnW5piDcPokbaTSoSZSKYWXbmjSqGCMOohowULiq%2F1RkqktpQJsHml8e%2BGjat%2F3FkWMkQx3uSQR%2FgKY3D7DMuxgFdC2YF0pCE9EAZLrMH87qHZZyMn3f41nNHle1feRPN4h0AdMrZ2bPN0hCOJI5PrtZK19nFLo1OSKf73mhpNwSUaPBBAibUkMNHLmMIGOqUB%2FpdizT0RV3tUFFq53W5gHLa3A0PHHKPj2s9z6Xlat8kUIZxyoOmUDs%2BHj0klD8cFLXv%2F0No81vUxyK2XCSvUTd8O4UbK9xSknl0okC0w8P%2FjY9aJH3PUTL19xez97KVGx6q%2FMMa05eHm2cIDE4kBtgdUWV%2FKRpVtzbX%2BXo4aGgzuBjS4TCcD8Ld%2FclbJEsdd3J8jOK0z8sjqMIdJ1FTqU734j3eg&X-Amz-Signature=3e7abdc1966e8a32ee158f8ae02d10a29ffc59c5110b31de5e18e3c9d830d9c6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
