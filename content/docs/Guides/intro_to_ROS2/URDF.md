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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO3S7RXJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6jNUwtdhQOQPECuCT7b4pRLTTV%2FkorkqaEUBiJNv5GQIhAMYnkQ0nkxi3txAWfKdeQXl8zpZhd7K6QPIM%2Fgs0ojthKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXvduO0qJKjBlfETcq3APgbP%2FNo1x9i%2Fg63jAe5lMRtPoKPdkJ%2F%2Bl7voUS%2FxK4PqzODq0EiPgPTbOS2Gh3Z8wxSxGYsvbd3uJICLQVUpsytNeJBahEFMXrEwZ5KfrwXInH96%2B5dd88I4iq%2BK6MsUu0goB8XL8PLDNJuSZjnH8zMhjBxWZ562WQf5%2BqPMxe6BHw6IE4an8JzpEYh4S6IpuTFh36vO9xMQxvtxkN9%2FWd2mk7lSf2SQJULOu3SD%2Fn2edEPu82EgsdvHB4Ur88T6JTFee8QRlAAsXn1Km%2BOhiyhdFyb1ZlGzKOAD8NymVDxOvowLLncJLFbl%2FDVXtrIlnyWplJUwDYhlPWdAmBM4IfgRhqUQRRv%2BPwZwrzu7HLCB7EECxDghE%2BEAJL5mkFDbmouDRUlhUBpqhbETBr02yVDJl%2Be%2FZuwB1S8%2F42eGwsh%2F4U75hfYwZcdf5ZQptlwte6lfkmHQwqYkDCkMR1OCHO4nuKGe8yvz26G2wpqEwJJFZozbVLu5bte9%2FIirEu9UzzcM3%2BdgVqvi0jgEveCrFUNudBvmaFPMOSkAVp8WkyLKaeH9pRfGQkpcDHEMAIi40DfibjMRtAzyGiJfzkrst9ebp6VVvGz9MZWQaUoAmMiBVTGARk15%2FEmmbtrzCZ3OXBBjqkAcOG8jHImsiUjOm8EDt2VXPOqjRNdssPfai%2BwxHVJm5w5bvLawl9Rl5pTdDEeAlEjqoWw7uTBoRhIkd2sRK340aRVa1Cy20EeTyKnh2bSIpeCnIW0u8JuXkzOmxCUsuKBS%2Bd1dC%2FuEXXIaPeUSv8CCjD0fTekGgtJE1Qas5uxx2ZRan365prjmKyDXkDfONiuWLnKeK61VtVWxhn%2F620jOSP3qEx&X-Amz-Signature=e6e69290998ce4679b0d499ffec11efdb3009d27291c5d7e825c6c486a48bd7f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO3S7RXJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6jNUwtdhQOQPECuCT7b4pRLTTV%2FkorkqaEUBiJNv5GQIhAMYnkQ0nkxi3txAWfKdeQXl8zpZhd7K6QPIM%2Fgs0ojthKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXvduO0qJKjBlfETcq3APgbP%2FNo1x9i%2Fg63jAe5lMRtPoKPdkJ%2F%2Bl7voUS%2FxK4PqzODq0EiPgPTbOS2Gh3Z8wxSxGYsvbd3uJICLQVUpsytNeJBahEFMXrEwZ5KfrwXInH96%2B5dd88I4iq%2BK6MsUu0goB8XL8PLDNJuSZjnH8zMhjBxWZ562WQf5%2BqPMxe6BHw6IE4an8JzpEYh4S6IpuTFh36vO9xMQxvtxkN9%2FWd2mk7lSf2SQJULOu3SD%2Fn2edEPu82EgsdvHB4Ur88T6JTFee8QRlAAsXn1Km%2BOhiyhdFyb1ZlGzKOAD8NymVDxOvowLLncJLFbl%2FDVXtrIlnyWplJUwDYhlPWdAmBM4IfgRhqUQRRv%2BPwZwrzu7HLCB7EECxDghE%2BEAJL5mkFDbmouDRUlhUBpqhbETBr02yVDJl%2Be%2FZuwB1S8%2F42eGwsh%2F4U75hfYwZcdf5ZQptlwte6lfkmHQwqYkDCkMR1OCHO4nuKGe8yvz26G2wpqEwJJFZozbVLu5bte9%2FIirEu9UzzcM3%2BdgVqvi0jgEveCrFUNudBvmaFPMOSkAVp8WkyLKaeH9pRfGQkpcDHEMAIi40DfibjMRtAzyGiJfzkrst9ebp6VVvGz9MZWQaUoAmMiBVTGARk15%2FEmmbtrzCZ3OXBBjqkAcOG8jHImsiUjOm8EDt2VXPOqjRNdssPfai%2BwxHVJm5w5bvLawl9Rl5pTdDEeAlEjqoWw7uTBoRhIkd2sRK340aRVa1Cy20EeTyKnh2bSIpeCnIW0u8JuXkzOmxCUsuKBS%2Bd1dC%2FuEXXIaPeUSv8CCjD0fTekGgtJE1Qas5uxx2ZRan365prjmKyDXkDfONiuWLnKeK61VtVWxhn%2F620jOSP3qEx&X-Amz-Signature=9208502729aeaa62c6d30cfa66cc149f22130f72a33c4f419d52c6e13807767c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
