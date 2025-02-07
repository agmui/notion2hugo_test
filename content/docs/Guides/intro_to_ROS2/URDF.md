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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23SIQLU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIBoeMdWS6dMTpijcPLsjqajt00FFPnvv9lSFHQn2lhdkAiBfYv9XaliXlkd2wO3N0alu53DTYUqgtQPcP9cjwpl2JCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMaASbP82kD2AIW9nZKtwDddZxVl%2FTry%2Ba47V8qLyIUyu0WoU6O6wKHSQ2aAD9bHAUmo67rSpIt2hn3GXDUAfRmqoG6BziOx3M%2F0IWZdSZw0nnqCxKabWreE7gAL2Q1rcGJdzQITbd5MTBIoAKCvdRQyWuS50AViRnOOEluPLNDuBym35b993inb7kj3fVWx9llFFnU8X1YjkRiB22HrW5GJriI9SHPrY242yYcPNNoai8x0igic04Nytz6l%2FE%2BqAsbJpQ6CvMNSqML%2FEW2LffiO8LhvMOEROR5VnfQpKfDL4J9nKViH%2Fz1D%2B9CsSDVgjuHfAR4hF79aW%2BUAdDtqa1R2ltuAdgf1NZZrsNEonrVvKC5v3As%2Bc6xF8bUMQl7ONBlwqVsLdD5Cl%2BdgPPNjhQafnL28DLwcfksaRmeWktiXdBD8a9UGYJ5g1yL9seLmUvvHOegHMQlQm7kPi9diO%2B7JBSlzytGYCDy3xRFOJWQr1y%2F1plQsdBMG4RsH110HADyKj8A5kQQcCTLbMRwjB%2F6qucmXfnXQ3piHg%2FU3Yvd73BlWfKBvRJP%2BSEVj9ZrgEcdkSjxHNqYgk39B0Ob4OXPeQuoI591F%2FsAMD4DgDHO2%2FkoQzaqEHOXKdbHDXjMavbxeM8NGQbg%2BCwvQYw0v2YvQY6pgF0299jsih7TtCgPJd36Yp3s%2Fv19G9b0AAMTkfL9VzAm%2FByhYQvpbDOS8N6Eh3Ya01dOBmcsbDLADqO7DdbDCAdUVhKdmT%2FgOVRJsZ1mtPkXLnnqFOKScGfoGdKsjLmtWzXFwyiqZUzG1LuS16WKDS21doPIjv7IBTDklyTK1tp9Imiw7%2BO8K0n6%2Fj1F3dhyy%2BC1TzbPSWORL8La8qKOyxrQh%2FYRe9X&X-Amz-Signature=c841941317cd1722b0f936256cbe75c2baaef098315bab61dad87358ad7482cb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23SIQLU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIBoeMdWS6dMTpijcPLsjqajt00FFPnvv9lSFHQn2lhdkAiBfYv9XaliXlkd2wO3N0alu53DTYUqgtQPcP9cjwpl2JCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMaASbP82kD2AIW9nZKtwDddZxVl%2FTry%2Ba47V8qLyIUyu0WoU6O6wKHSQ2aAD9bHAUmo67rSpIt2hn3GXDUAfRmqoG6BziOx3M%2F0IWZdSZw0nnqCxKabWreE7gAL2Q1rcGJdzQITbd5MTBIoAKCvdRQyWuS50AViRnOOEluPLNDuBym35b993inb7kj3fVWx9llFFnU8X1YjkRiB22HrW5GJriI9SHPrY242yYcPNNoai8x0igic04Nytz6l%2FE%2BqAsbJpQ6CvMNSqML%2FEW2LffiO8LhvMOEROR5VnfQpKfDL4J9nKViH%2Fz1D%2B9CsSDVgjuHfAR4hF79aW%2BUAdDtqa1R2ltuAdgf1NZZrsNEonrVvKC5v3As%2Bc6xF8bUMQl7ONBlwqVsLdD5Cl%2BdgPPNjhQafnL28DLwcfksaRmeWktiXdBD8a9UGYJ5g1yL9seLmUvvHOegHMQlQm7kPi9diO%2B7JBSlzytGYCDy3xRFOJWQr1y%2F1plQsdBMG4RsH110HADyKj8A5kQQcCTLbMRwjB%2F6qucmXfnXQ3piHg%2FU3Yvd73BlWfKBvRJP%2BSEVj9ZrgEcdkSjxHNqYgk39B0Ob4OXPeQuoI591F%2FsAMD4DgDHO2%2FkoQzaqEHOXKdbHDXjMavbxeM8NGQbg%2BCwvQYw0v2YvQY6pgF0299jsih7TtCgPJd36Yp3s%2Fv19G9b0AAMTkfL9VzAm%2FByhYQvpbDOS8N6Eh3Ya01dOBmcsbDLADqO7DdbDCAdUVhKdmT%2FgOVRJsZ1mtPkXLnnqFOKScGfoGdKsjLmtWzXFwyiqZUzG1LuS16WKDS21doPIjv7IBTDklyTK1tp9Imiw7%2BO8K0n6%2Fj1F3dhyy%2BC1TzbPSWORL8La8qKOyxrQh%2FYRe9X&X-Amz-Signature=c91934909e582411b8e43d4203e884b7d9efbfc764adf6faccc17da9ce3559d5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
