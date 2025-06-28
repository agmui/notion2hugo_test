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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJLD77EH%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIlcPa85s1cEIzTxjWLiDcId67JoNsqSUpTZcBQjO57AiBVnIQet3SEiAd%2BJf6wNVpwtr8PaE6WRmt8ec7l9qVmiCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7MaEhAfLrfc5RuBaKtwDpzh9%2BrYDfFjaDxIh7%2Fo0tBCgWtdCvhALH5e7mNWm%2BVoTcmm2SnlVfeGgM195h3LfJC5jnY9pwE76C3jxeqeHfk3c4HWNeyvLEKKYAjH4rCYRQtoqPTkDTs3ttJMreF7Ym9XwDxMu3NqjRFETryKlG1EF%2BO%2B2P82B5w3JUbmV%2F4R46yIWV5ZYsYb5Edwr3tXlsth8pQJigVHOQE%2Fo2OX4zFMFpFZqbuzcjRwmICd7S%2BW1o8lj0yqs5MFAeMQzFgUlZgi0eEBl8JDoducygfIepc0AJjonkK82WrgsPzygWTfCWuP6gaaWt4qHghj9xG970TsmWQGJH6d2u76N3i1j85Ce3jCKnvk%2Fk2uH4AxF6eAsSXD3hJkZvDvUVYf9fRpuO1DzkscrEH1MKsuUl18GTzh3PxqOI10Q6ZgVXlJF1Lr7VWNNNkbnOKX4F7QCqWFo6krTFhVlZaYW8%2Fu%2BKpbk%2BkPhVQGk7FEm1QEFkl5qSGYW1i8h62IzLTLe5UD0dIaImo344jzCVe4cBjQklS8yfniMk51SAOPXyrZwj9%2FIbVX9PPzCI00OA0Tdz%2BlI%2BJMyMLFcdAzwF05mZcIbLVa%2BKjT%2BkgCiE3CYYo49ScdyWz%2FfjC7Y4pYailJdW%2BgwiZH%2FwgY6pgFIqo7AXjgkPFmJkjL5jIBKtaGjH7PUvZXuwD2emk6uZ%2FUVzyl5dRLHdtgdT2r6ynL7%2BnYvhsEUjxWHDbMzqX8UwHvETxao7CqFTrgVUG07OM8%2Fv3s661V98QIrxvg7zC9TTsCBEn32glaATIK6guaydCtp%2BQixco%2B3SFHEVPJ4tuoSajlU1m0FXlX7xlyuur%2Bamoxm5PerJe8LE9fXGB7mDYQqXTSs&X-Amz-Signature=9920c6d57fec782e7d349cb3ff0176b814835b4cad618de0fdf34fb3e239ce4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJLD77EH%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIlcPa85s1cEIzTxjWLiDcId67JoNsqSUpTZcBQjO57AiBVnIQet3SEiAd%2BJf6wNVpwtr8PaE6WRmt8ec7l9qVmiCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7MaEhAfLrfc5RuBaKtwDpzh9%2BrYDfFjaDxIh7%2Fo0tBCgWtdCvhALH5e7mNWm%2BVoTcmm2SnlVfeGgM195h3LfJC5jnY9pwE76C3jxeqeHfk3c4HWNeyvLEKKYAjH4rCYRQtoqPTkDTs3ttJMreF7Ym9XwDxMu3NqjRFETryKlG1EF%2BO%2B2P82B5w3JUbmV%2F4R46yIWV5ZYsYb5Edwr3tXlsth8pQJigVHOQE%2Fo2OX4zFMFpFZqbuzcjRwmICd7S%2BW1o8lj0yqs5MFAeMQzFgUlZgi0eEBl8JDoducygfIepc0AJjonkK82WrgsPzygWTfCWuP6gaaWt4qHghj9xG970TsmWQGJH6d2u76N3i1j85Ce3jCKnvk%2Fk2uH4AxF6eAsSXD3hJkZvDvUVYf9fRpuO1DzkscrEH1MKsuUl18GTzh3PxqOI10Q6ZgVXlJF1Lr7VWNNNkbnOKX4F7QCqWFo6krTFhVlZaYW8%2Fu%2BKpbk%2BkPhVQGk7FEm1QEFkl5qSGYW1i8h62IzLTLe5UD0dIaImo344jzCVe4cBjQklS8yfniMk51SAOPXyrZwj9%2FIbVX9PPzCI00OA0Tdz%2BlI%2BJMyMLFcdAzwF05mZcIbLVa%2BKjT%2BkgCiE3CYYo49ScdyWz%2FfjC7Y4pYailJdW%2BgwiZH%2FwgY6pgFIqo7AXjgkPFmJkjL5jIBKtaGjH7PUvZXuwD2emk6uZ%2FUVzyl5dRLHdtgdT2r6ynL7%2BnYvhsEUjxWHDbMzqX8UwHvETxao7CqFTrgVUG07OM8%2Fv3s661V98QIrxvg7zC9TTsCBEn32glaATIK6guaydCtp%2BQixco%2B3SFHEVPJ4tuoSajlU1m0FXlX7xlyuur%2Bamoxm5PerJe8LE9fXGB7mDYQqXTSs&X-Amz-Signature=54adc2a234a0fbe96562ba609d49e6ae6e8e22dff130e5942da68ea6904d27fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
