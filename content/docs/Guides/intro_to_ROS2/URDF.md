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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IU65MQI%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhl9dEU6YZ5g6XbRWowk2j58gUfhYEFGTkYiOrGaGj8wIhAOrfWax6PbIycWFzjEizZW4S6%2F5RwBdXNNO3GIbtOSLIKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F5OO97O1h4xGauWAq3AMkNEcSOXkWkRMyGsAFPGZOT5v34eGLNsdK24QYtggASpjzkVV4d5Si4S2hngpgLcS6p7beTQC5ELuoK%2FHszMo3z9HO85OcUlJ7SV%2B7i5qn%2B6dKkbaecy0HMuxA2%2F7mW%2Bs%2FbxcTBBCRfQEkkDgDbS7fSQEtOgw7GGJ2K3yK%2F4TaKGJZ5avPFyptYsxngRTdn%2FqwAcbtBXDukx7wu1dWqe0y2xOtyha%2F%2BtayicbFlgHbpaX%2F%2Ba4x0DNs6II1LuQbQFSDosml0FoDtGQPvTOhTisHHTo1cobX9gNKvhKPHDVPFehFNTfuo20m8X1gdYyBmYaD8k8LXkKyl5Kx1xtmJenMlZAaA2qzuuXQVGfTkvOEYC8NcWCtYOJLX1BpJELDEV3XOLJP2BB01%2FRvw7rnpH7QfepAXmrMv5KGc4mLue4%2FAxTBVrdx0Uk8ywtJSLsFXm5iHDTVkQyQMQHUbG3N%2FJ5Zg17kSBVDRXhvwBdkvu8MoKPCBtS8MiTwHk26rw3Ht13rnXba0YwH1u8gPdLjc0XSjrBNglCrZ1PLKjLZNkVAS3HlXn%2BlrnDnsS703WSQD8lSXFswS2vfb7b4%2FAOW0tovvQRqFgxUi0pv5ZgGxGmYzVY6reNcx%2BIIOOZS1TC425e%2BBjqkAXUFSgneLNncYjAmm1Z6Ugg%2Bwgu3GnqfdBK309F5LjtnWdzXJ2mEVL2%2BfZm68jQenIU0b6bNEIewdmA7gSOIW6wG%2BLIJjlsZpdhhSmtFgoGy5j7QY9Rl9rE%2FdlAx1BVXRBR0HrMZLjm8VThON1jiXOGKEXIi2ldIteRfkZE6f9fJ8ErjHOxKeKz0ZGSCqjbgOBTAcJyKDD9HvegdKa9uiIxebt3P&X-Amz-Signature=751fe7614141f4f508c3ac4ef84a7b452ef63e1ba39f797426f817fa0a940814&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IU65MQI%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhl9dEU6YZ5g6XbRWowk2j58gUfhYEFGTkYiOrGaGj8wIhAOrfWax6PbIycWFzjEizZW4S6%2F5RwBdXNNO3GIbtOSLIKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F5OO97O1h4xGauWAq3AMkNEcSOXkWkRMyGsAFPGZOT5v34eGLNsdK24QYtggASpjzkVV4d5Si4S2hngpgLcS6p7beTQC5ELuoK%2FHszMo3z9HO85OcUlJ7SV%2B7i5qn%2B6dKkbaecy0HMuxA2%2F7mW%2Bs%2FbxcTBBCRfQEkkDgDbS7fSQEtOgw7GGJ2K3yK%2F4TaKGJZ5avPFyptYsxngRTdn%2FqwAcbtBXDukx7wu1dWqe0y2xOtyha%2F%2BtayicbFlgHbpaX%2F%2Ba4x0DNs6II1LuQbQFSDosml0FoDtGQPvTOhTisHHTo1cobX9gNKvhKPHDVPFehFNTfuo20m8X1gdYyBmYaD8k8LXkKyl5Kx1xtmJenMlZAaA2qzuuXQVGfTkvOEYC8NcWCtYOJLX1BpJELDEV3XOLJP2BB01%2FRvw7rnpH7QfepAXmrMv5KGc4mLue4%2FAxTBVrdx0Uk8ywtJSLsFXm5iHDTVkQyQMQHUbG3N%2FJ5Zg17kSBVDRXhvwBdkvu8MoKPCBtS8MiTwHk26rw3Ht13rnXba0YwH1u8gPdLjc0XSjrBNglCrZ1PLKjLZNkVAS3HlXn%2BlrnDnsS703WSQD8lSXFswS2vfb7b4%2FAOW0tovvQRqFgxUi0pv5ZgGxGmYzVY6reNcx%2BIIOOZS1TC425e%2BBjqkAXUFSgneLNncYjAmm1Z6Ugg%2Bwgu3GnqfdBK309F5LjtnWdzXJ2mEVL2%2BfZm68jQenIU0b6bNEIewdmA7gSOIW6wG%2BLIJjlsZpdhhSmtFgoGy5j7QY9Rl9rE%2FdlAx1BVXRBR0HrMZLjm8VThON1jiXOGKEXIi2ldIteRfkZE6f9fJ8ErjHOxKeKz0ZGSCqjbgOBTAcJyKDD9HvegdKa9uiIxebt3P&X-Amz-Signature=d8c38404aeadb5b1b53f9355f05f7d6f6e58a1753b8a10a6af55bb6e617549eb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
