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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WABKXER3%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQC6A1Nk%2BVbKQ0FGKeK03q6v1ZuTtOZRNHtA4IUnc549ZwIhAPjETTbba1UQq92UN%2BtUPPy2l%2FpJFq9FUSia2xoTMxcMKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYbeVXkOSRXePsEpoq3AOVsp%2BVazb49e4eUAp6OjKNofuKKaecb8uzBnhbMDUlXFxLATO2IgukgmKuyZ6SvJ4hopIrZzB72bTpwKsi4j3GSFhjT%2B7d%2FwnYcDfCsQqQZTvYAK74YtT1mHCFcR0lTTBlObkImayqPj5laaFe%2Fw54dxx8QHPSaOWo57ClFeLu39xGUpztuMBGc9euXIlQKoZbjo0B6VFVG4FztQaiGUOqQCraCLSVGsyOiJW3bfYMPWyUR0Zm5x14hZyQRUS%2Bzxqqer0AK7iLVIkBCH5gE9yq1zmMM0cHQioU4%2BnNudARa5iNFTjf4Q%2Bj66eMYKIZJ5sLKufRq4ZQecMGXnzq%2B6LrQORnyV3tAuGeeIXS3%2Fr4P5eWz0meD%2BJU3vWayTMyKKxzFHBAgPVadpHWfCfaRajW%2Bk38sAJxGebxdfIgTtccnMCN79OWLyUQwEdAvSbOJHVXUALTC9pIRleuE91%2FS2zBazJtIZpEUHfaVDmMSYlRdSXSPZA3ru0FGx2jEUMW28o5Q%2FY1M6HR7OFQSz4eE7dGBBtEfpQZcmKe6NYHBE%2FJVzr9CgFvpKCh4OxaHmn%2Fo8xPwWDu1mheQT%2FNlwdsf7mwHpIDQiThHucKhjb7fJAvpk%2FdOkQl8gEY7H0%2BuzCd6sHBBjqkASpOQz7xm8tuw65oNJk12YCQiDksj%2BStKGcOyImzXmsmv20ylrHePPbKX7uh8SQ7iZHWlUpINW%2FoxqkMW0HEE%2Bq4ERlXXoe34jSj3Nnc9zTa40BiVR08f7Jw5PNtZnpOGvlgy6oZrFbuQgREC0c8i2bpV%2B7Sxqp40La8cpeAhPC8b4nuFrcUH0XUe1oheIxDEM0BuKlSpmXywE9Un8cOYbO8b0wQ&X-Amz-Signature=8285ecd1d6e135b3b79670e1a7c5303df7c5df8a1f6bd5378a3fbf866ffe9b29&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WABKXER3%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQC6A1Nk%2BVbKQ0FGKeK03q6v1ZuTtOZRNHtA4IUnc549ZwIhAPjETTbba1UQq92UN%2BtUPPy2l%2FpJFq9FUSia2xoTMxcMKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYbeVXkOSRXePsEpoq3AOVsp%2BVazb49e4eUAp6OjKNofuKKaecb8uzBnhbMDUlXFxLATO2IgukgmKuyZ6SvJ4hopIrZzB72bTpwKsi4j3GSFhjT%2B7d%2FwnYcDfCsQqQZTvYAK74YtT1mHCFcR0lTTBlObkImayqPj5laaFe%2Fw54dxx8QHPSaOWo57ClFeLu39xGUpztuMBGc9euXIlQKoZbjo0B6VFVG4FztQaiGUOqQCraCLSVGsyOiJW3bfYMPWyUR0Zm5x14hZyQRUS%2Bzxqqer0AK7iLVIkBCH5gE9yq1zmMM0cHQioU4%2BnNudARa5iNFTjf4Q%2Bj66eMYKIZJ5sLKufRq4ZQecMGXnzq%2B6LrQORnyV3tAuGeeIXS3%2Fr4P5eWz0meD%2BJU3vWayTMyKKxzFHBAgPVadpHWfCfaRajW%2Bk38sAJxGebxdfIgTtccnMCN79OWLyUQwEdAvSbOJHVXUALTC9pIRleuE91%2FS2zBazJtIZpEUHfaVDmMSYlRdSXSPZA3ru0FGx2jEUMW28o5Q%2FY1M6HR7OFQSz4eE7dGBBtEfpQZcmKe6NYHBE%2FJVzr9CgFvpKCh4OxaHmn%2Fo8xPwWDu1mheQT%2FNlwdsf7mwHpIDQiThHucKhjb7fJAvpk%2FdOkQl8gEY7H0%2BuzCd6sHBBjqkASpOQz7xm8tuw65oNJk12YCQiDksj%2BStKGcOyImzXmsmv20ylrHePPbKX7uh8SQ7iZHWlUpINW%2FoxqkMW0HEE%2Bq4ERlXXoe34jSj3Nnc9zTa40BiVR08f7Jw5PNtZnpOGvlgy6oZrFbuQgREC0c8i2bpV%2B7Sxqp40La8cpeAhPC8b4nuFrcUH0XUe1oheIxDEM0BuKlSpmXywE9Un8cOYbO8b0wQ&X-Amz-Signature=a6e171217ef8609cfe0c6eb5ea5804a4a747a471f79fa565d9e0b5b502696cb4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
