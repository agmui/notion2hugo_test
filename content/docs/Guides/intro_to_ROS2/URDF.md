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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ65WJEA%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeW5F5xNTaIUaw9evVx2EISqDUFhVXBeYypw3zUWkPPwIhAMVb7y5vtzV6%2BXzuA8fKAa9rlET2whd6fueHNT3N7zUAKv8DCCAQABoMNjM3NDIzMTgzODA1IgyF1hg%2B14Wanudd85Eq3AMQOKCvVEPsa1eAQnqkyL1o0GRxYG6CrhgRrEmqrQLMl8zwLVGAcfne1xbqPnTUZTNyEcklib8Eqlt6wSRAmym4QsNHn0mfgdNQyU%2BVXGcwdii8AB5h%2F8n1Quuz0tCjdio3%2F8HE98xmhnMLPZtGey5PmCwk9I3g%2Bn4c1zPLWb8huETrH2LxlEVjgf0ATsi95Ln8fBG7QnDeWG80Pvol09GluXMnhZJrSQddw4tw9aArg6lTxfVxl%2B%2F2EDjUd1j02EwzMz7Ktxbvy68p%2BKw%2Bf4nmi8ceXkfK1PHY282rGmLBMOTcZGbAgNoCw7KMBymec8x67G6mikvrIGPNKthul8%2BTEsQ0Iox8CR%2FFUSsrcBAvAarS1uxAtR%2Bj%2F46ps1E%2BQmp8n9vRh7IErEevWGogYfOcaHSuUiT1APgmSzzdi9UU1XgdIjtfrdsK%2FTJaNGk5Iae2TD75d7s9wAnNUuUAE4NgYZGfwetvxSwcXLcdK2f%2FGv2e0eKhEjsP7Y%2BZB6vUi%2FMpsRsXs%2FhD2FXg7%2Bkg%2F0RH%2BxZIAXaIYa%2BhKNBQ6MADhDPes9HOKuCPAoBIxo1vtu83J5GUMl19Bma9z8WRYWOUe0vc72mKNQV61vLcN%2BYYbDiPj9paIXbA2r8SrzCcvMG%2FBjqkAR%2FFLHMA8yeL3xAM8esJzlyy%2F3DNTb0QhcnJXNeBI%2FE14vNCPi81pB7jEt%2F9mJholFJtg52gp4XigVw1zdXkbkEMO2fzwDV7v7Bhnrt2FvEtFNC95KjimEnhtDMUkdgz10ZN%2FWvdv04WsU0jvtF62U30nJqqZUuruXDMOzmw4WXSekIRqy2ayoHo7ntpLvtkgKIromkV9Z7cMLXKQ1i6htvaOBjM&X-Amz-Signature=1d08699d08636e082bd408985634cae6095e259033aa22249095939583dd06d3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ65WJEA%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeW5F5xNTaIUaw9evVx2EISqDUFhVXBeYypw3zUWkPPwIhAMVb7y5vtzV6%2BXzuA8fKAa9rlET2whd6fueHNT3N7zUAKv8DCCAQABoMNjM3NDIzMTgzODA1IgyF1hg%2B14Wanudd85Eq3AMQOKCvVEPsa1eAQnqkyL1o0GRxYG6CrhgRrEmqrQLMl8zwLVGAcfne1xbqPnTUZTNyEcklib8Eqlt6wSRAmym4QsNHn0mfgdNQyU%2BVXGcwdii8AB5h%2F8n1Quuz0tCjdio3%2F8HE98xmhnMLPZtGey5PmCwk9I3g%2Bn4c1zPLWb8huETrH2LxlEVjgf0ATsi95Ln8fBG7QnDeWG80Pvol09GluXMnhZJrSQddw4tw9aArg6lTxfVxl%2B%2F2EDjUd1j02EwzMz7Ktxbvy68p%2BKw%2Bf4nmi8ceXkfK1PHY282rGmLBMOTcZGbAgNoCw7KMBymec8x67G6mikvrIGPNKthul8%2BTEsQ0Iox8CR%2FFUSsrcBAvAarS1uxAtR%2Bj%2F46ps1E%2BQmp8n9vRh7IErEevWGogYfOcaHSuUiT1APgmSzzdi9UU1XgdIjtfrdsK%2FTJaNGk5Iae2TD75d7s9wAnNUuUAE4NgYZGfwetvxSwcXLcdK2f%2FGv2e0eKhEjsP7Y%2BZB6vUi%2FMpsRsXs%2FhD2FXg7%2Bkg%2F0RH%2BxZIAXaIYa%2BhKNBQ6MADhDPes9HOKuCPAoBIxo1vtu83J5GUMl19Bma9z8WRYWOUe0vc72mKNQV61vLcN%2BYYbDiPj9paIXbA2r8SrzCcvMG%2FBjqkAR%2FFLHMA8yeL3xAM8esJzlyy%2F3DNTb0QhcnJXNeBI%2FE14vNCPi81pB7jEt%2F9mJholFJtg52gp4XigVw1zdXkbkEMO2fzwDV7v7Bhnrt2FvEtFNC95KjimEnhtDMUkdgz10ZN%2FWvdv04WsU0jvtF62U30nJqqZUuruXDMOzmw4WXSekIRqy2ayoHo7ntpLvtkgKIromkV9Z7cMLXKQ1i6htvaOBjM&X-Amz-Signature=ed5b06985fcb90edb84966b4a7ae5900298e37a56cc8189fac647facd2518d0e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
