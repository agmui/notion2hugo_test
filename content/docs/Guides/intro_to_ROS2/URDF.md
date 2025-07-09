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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666SD2CS3%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T220918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPywezyje6hMXuCkc2D6ySBAARFHTpK7AW2k6Eah%2FWxAiALQUIAIACItgdhxiQI35xil%2BD7M13b8QT7Em3JKkE2eCqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTHqSTA0lwPPoWy%2BVKtwD9I0tGjH4NpvphMhrViu%2B%2Fhd7RwrWhU9XN88djex8KpC0QAx6CUy6OOKpwrTagEbrJycQ%2F9UAstTK8Mu5xm9WZSGSoFKRd0IW3YbeLMncd4H%2FTZrsrKFAyvlcaj8IlNZOCB2EZFpU%2BAWfC6sH9CzrqnEs3tm%2Fvuy39DHb3E8yh%2B8wTCfc8iXQvcYQF1xYrtSme0Jd1nLcIWfJ4YVcAbBDPDG53Pt1jDFCNab0HpSg9AW7jTlZ69GmJTM%2BvlH1dG8uXaxbf%2Bwna0udEcHUBcSC0wrYPDBgLoaBmBGS6XV5wxO9rG%2B67I0dOBaNlhkGx3ru0oz6Avh4jRWRBloBn9XZorSyn5NnqIMxHX0z9VdfbY13HsrGiU21Of4S%2B67e9AqgMqXhbZguknZgPiY8KAP6VWZ0KhfVwL4AenWLfrbDqgZFbX0%2FpEOcWy98OsXM5dtwyDpA6KV5jVibdIpLGNyJ2G3J%2B6ONQ0N0BLEk3a%2Bi6nhbfHEcBXGPQ1EnzqFellPX1Yuo4FhXb4YWBsyM8nSqTtwOH9sGJglyJJHTYOnTjTfz75%2BPq5JcwqxO3I5HiV3wG1xNZgmBxlUVJ%2FbDPFPuBJVNPGf3vRPnijnSizyEnD5w39XVTHldjcQp7HowxsW7wwY6pgGQ%2Fnk9%2BDFixVfvXN8kA0kLzb1rLO9OSSaZNFuITJxtsftNugWs4mG1aLhJ93HY%2BSfg%2BmdLnWzI9Pc1PdCor5adMXQYPVUn%2FRfI2lR9AkUr%2FRB%2BN%2FtQQIuqTs9xHt95KDlw0l4tuaGMjv8hoTopC3Co0sK9odn%2BGHlOth5jri35YQbASk0Mb%2FCCt5pOs5u1WuHjq%2FNUJ9bE17f3ratv5T%2FbiCcFeLux&X-Amz-Signature=0698babae03a7603b4cf71ec1d4b4ce0aa394198cded63c1e2c0dddb53a7173f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666SD2CS3%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T220918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPywezyje6hMXuCkc2D6ySBAARFHTpK7AW2k6Eah%2FWxAiALQUIAIACItgdhxiQI35xil%2BD7M13b8QT7Em3JKkE2eCqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTHqSTA0lwPPoWy%2BVKtwD9I0tGjH4NpvphMhrViu%2B%2Fhd7RwrWhU9XN88djex8KpC0QAx6CUy6OOKpwrTagEbrJycQ%2F9UAstTK8Mu5xm9WZSGSoFKRd0IW3YbeLMncd4H%2FTZrsrKFAyvlcaj8IlNZOCB2EZFpU%2BAWfC6sH9CzrqnEs3tm%2Fvuy39DHb3E8yh%2B8wTCfc8iXQvcYQF1xYrtSme0Jd1nLcIWfJ4YVcAbBDPDG53Pt1jDFCNab0HpSg9AW7jTlZ69GmJTM%2BvlH1dG8uXaxbf%2Bwna0udEcHUBcSC0wrYPDBgLoaBmBGS6XV5wxO9rG%2B67I0dOBaNlhkGx3ru0oz6Avh4jRWRBloBn9XZorSyn5NnqIMxHX0z9VdfbY13HsrGiU21Of4S%2B67e9AqgMqXhbZguknZgPiY8KAP6VWZ0KhfVwL4AenWLfrbDqgZFbX0%2FpEOcWy98OsXM5dtwyDpA6KV5jVibdIpLGNyJ2G3J%2B6ONQ0N0BLEk3a%2Bi6nhbfHEcBXGPQ1EnzqFellPX1Yuo4FhXb4YWBsyM8nSqTtwOH9sGJglyJJHTYOnTjTfz75%2BPq5JcwqxO3I5HiV3wG1xNZgmBxlUVJ%2FbDPFPuBJVNPGf3vRPnijnSizyEnD5w39XVTHldjcQp7HowxsW7wwY6pgGQ%2Fnk9%2BDFixVfvXN8kA0kLzb1rLO9OSSaZNFuITJxtsftNugWs4mG1aLhJ93HY%2BSfg%2BmdLnWzI9Pc1PdCor5adMXQYPVUn%2FRfI2lR9AkUr%2FRB%2BN%2FtQQIuqTs9xHt95KDlw0l4tuaGMjv8hoTopC3Co0sK9odn%2BGHlOth5jri35YQbASk0Mb%2FCCt5pOs5u1WuHjq%2FNUJ9bE17f3ratv5T%2FbiCcFeLux&X-Amz-Signature=a1ee99e6a12357d2b46b85190184d4a7ea767750df61638a3a29ab548d59a166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
