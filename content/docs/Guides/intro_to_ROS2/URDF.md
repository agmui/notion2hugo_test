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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624DKXVYN%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T070807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIBWF2iszqV7MZmC4eMsGehdR2kRrkc3UAahcOwBXFSbWAiB%2B3LLZgqiaqX%2BRBO9%2Fxj2exNUe4oq7CiLJRDHIGX6YyiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtyV%2BMnhlWufHFLJKKtwDQmTCWUC1TS0zV1NAE%2FoA9zRf4hd%2Byx6ru6jZnDCV4QQifTFYsCUlPgZ4vQ0cWXrzj8SdGps%2FfMoCFdernL%2Bx4ZN%2FL86sxvT3XBjhJHRsOPIQr3Fuin3p6N852TYXrOSjWaRhijxrDHGXGFf%2Bk2yo0a141PXc7ZwardKZkZWVKp4M2UU1Dqk3HRjchYZ2uUP1HA6xmPYxmLI5jMp2naghgzTeF%2BpvPLZXnN3rI1EHZP2mHcruXEyNAl%2FY8EQAKKFIie6HgF0tXo5FrLggqQDRyFaVuQ37plrq%2FymH6zyD7nHtd28wGT57GC5VWiXYjNeLRhR%2F5QcXQZQdm4OSNXhIzrGcNCDC%2Bsc17%2BqXDTPebCfxMm5S6DXgWtGnq8JWRHB7dEaSnzQ8LKAlgAjmAFBKsEGy%2B9wbyIDW3bIRDS80A4QrQc77sLaAhRsE75k9AeHRLHgQi8bYcA%2F8rhY%2BIRZINeQx%2BOFppHrPHAn5pdSLaDKJSVAJwfLwfq5uFyIxs17jSJ%2FXk8va5V5wTPYqoAPDSVK8rJnLoNocnrlfmYm5tCdimPmbOnoOighYIruxgeTL5mn0ZMCuf%2B874S8PoIbIJ28Hu25XIpK2qqo6yTHaun4PBsP4EkCpcj25nTEwmP7VvQY6pgHhvltsQy7xs61cadLKi%2FwRB0eRCyg3M%2BThwtdJf0CnaoS7AbzjI%2BAdeSAIjSIN7Q3hroAghxbJ6fkKD3vxk9axMoZPQ%2FnHfIu8q1VwiGJdzmZt5%2FT9Uc9rm9qbCPcHD4edbdxw8V4X9WSnm910UVK%2FVzjf%2BbtpRBGOLvBPqg2te09eVstaUl16ePnWk8gl%2BeYRB8H79vm8iwb1OQivHsQ%2FdmxVlyrP&X-Amz-Signature=2f16a3c9b7defa58567ca5bc393aa14df3b035317b6192222fe842bfbe14712e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624DKXVYN%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T070807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIBWF2iszqV7MZmC4eMsGehdR2kRrkc3UAahcOwBXFSbWAiB%2B3LLZgqiaqX%2BRBO9%2Fxj2exNUe4oq7CiLJRDHIGX6YyiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtyV%2BMnhlWufHFLJKKtwDQmTCWUC1TS0zV1NAE%2FoA9zRf4hd%2Byx6ru6jZnDCV4QQifTFYsCUlPgZ4vQ0cWXrzj8SdGps%2FfMoCFdernL%2Bx4ZN%2FL86sxvT3XBjhJHRsOPIQr3Fuin3p6N852TYXrOSjWaRhijxrDHGXGFf%2Bk2yo0a141PXc7ZwardKZkZWVKp4M2UU1Dqk3HRjchYZ2uUP1HA6xmPYxmLI5jMp2naghgzTeF%2BpvPLZXnN3rI1EHZP2mHcruXEyNAl%2FY8EQAKKFIie6HgF0tXo5FrLggqQDRyFaVuQ37plrq%2FymH6zyD7nHtd28wGT57GC5VWiXYjNeLRhR%2F5QcXQZQdm4OSNXhIzrGcNCDC%2Bsc17%2BqXDTPebCfxMm5S6DXgWtGnq8JWRHB7dEaSnzQ8LKAlgAjmAFBKsEGy%2B9wbyIDW3bIRDS80A4QrQc77sLaAhRsE75k9AeHRLHgQi8bYcA%2F8rhY%2BIRZINeQx%2BOFppHrPHAn5pdSLaDKJSVAJwfLwfq5uFyIxs17jSJ%2FXk8va5V5wTPYqoAPDSVK8rJnLoNocnrlfmYm5tCdimPmbOnoOighYIruxgeTL5mn0ZMCuf%2B874S8PoIbIJ28Hu25XIpK2qqo6yTHaun4PBsP4EkCpcj25nTEwmP7VvQY6pgHhvltsQy7xs61cadLKi%2FwRB0eRCyg3M%2BThwtdJf0CnaoS7AbzjI%2BAdeSAIjSIN7Q3hroAghxbJ6fkKD3vxk9axMoZPQ%2FnHfIu8q1VwiGJdzmZt5%2FT9Uc9rm9qbCPcHD4edbdxw8V4X9WSnm910UVK%2FVzjf%2BbtpRBGOLvBPqg2te09eVstaUl16ePnWk8gl%2BeYRB8H79vm8iwb1OQivHsQ%2FdmxVlyrP&X-Amz-Signature=014c8669b060894e8118e39f23a72d5a47833903e54e18fa8767c9b064dd96d2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
