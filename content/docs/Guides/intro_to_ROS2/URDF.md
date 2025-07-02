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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD5PXMOA%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLa1O9AxEeqQeiXjhZEDrZv8%2FhCStruixPzbUahYth5QIgaVbQ0nC4C69uHOSW%2FndWredNvxWEWkwEiBAeYYb1XIsqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVzkiZFhESP6oIHaircA2vzKdoIdLCy%2Bn7eMLRoz%2BXPVDAOVNLICCiIULiyx8yfkK2UBT5%2FTelaaC8KCumtjbMkjtF4hxE42bH%2F2TjXcGYU5vFBR80uGLI7vhzTCyCAOv%2FdGW1FIai0Hmyreww4HMg5MFXkkcg3Dq7yTdDAtbQTklYmxVa5uNczIkBv1toTLE1bOGMS6md3O5RGTvpA4aL3J0S0ri4kPFDk9G4CNGET%2FiMH%2Frh48gZOFrkViiMW2NGU3Yr47YkdQic17iU%2BG%2BqLFm36%2BiJkxaOta8XWdVHMuxEu2NrBZPM4IfMpca93XteyQd5zhOTcIKmzxvniRBjL3M9UUNizBo22AA%2BfHmLXo5MyCBPsaimyrJFxo9KGcbpL9F9B3wRVK2lBNn3xwPL%2Fh291mN3vOPFYUqtI%2FKKJei%2BbQs529jza%2FxlTdu8MFKSEn6fIvvrxbHqBT65gipT0eZGmhZj%2BiTChRkNWcPQgM%2BoRAC2EBRLErBibXZ4Y%2FHOopeAjjgti2iPW0s2HUD7fTegiJOTFOIplV88ao8Ujhbyxe57AVp%2BvdnX6KBLeQ1kccKNK1XPwVgJLYpyct4o%2BdaTOD5Ruc%2Bjjatyb1V6iadU%2BUH5LT0eeHfNYS1nbRikI9zPpw40vIDUAMNvik8MGOqUBs27YdsjrjoTV3tL1zY0O1x%2BgO9hoMTXUWHgACIEcT4%2FbIDT6sclo6NuEJBnrlR7EYv6fmjm0JIjiLmm%2BryJVJ%2B2HPuTRXD7%2ByS%2FBF85JFbiI4an0SKB3%2FG69LEurr7d7zs6bD20RqA%2B5Y1k6WYnD4CJvr5eaWWMWeqboQRbebnF%2FXc9gIHlmW2aDZ1G2r6lkpsgbstE1ArjZjvYNVmJ4g136POLL&X-Amz-Signature=f9afd8bc423c0c1b3875887c30fa21c1a861e1eb07e23c128c7ec200a85ff211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD5PXMOA%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLa1O9AxEeqQeiXjhZEDrZv8%2FhCStruixPzbUahYth5QIgaVbQ0nC4C69uHOSW%2FndWredNvxWEWkwEiBAeYYb1XIsqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVzkiZFhESP6oIHaircA2vzKdoIdLCy%2Bn7eMLRoz%2BXPVDAOVNLICCiIULiyx8yfkK2UBT5%2FTelaaC8KCumtjbMkjtF4hxE42bH%2F2TjXcGYU5vFBR80uGLI7vhzTCyCAOv%2FdGW1FIai0Hmyreww4HMg5MFXkkcg3Dq7yTdDAtbQTklYmxVa5uNczIkBv1toTLE1bOGMS6md3O5RGTvpA4aL3J0S0ri4kPFDk9G4CNGET%2FiMH%2Frh48gZOFrkViiMW2NGU3Yr47YkdQic17iU%2BG%2BqLFm36%2BiJkxaOta8XWdVHMuxEu2NrBZPM4IfMpca93XteyQd5zhOTcIKmzxvniRBjL3M9UUNizBo22AA%2BfHmLXo5MyCBPsaimyrJFxo9KGcbpL9F9B3wRVK2lBNn3xwPL%2Fh291mN3vOPFYUqtI%2FKKJei%2BbQs529jza%2FxlTdu8MFKSEn6fIvvrxbHqBT65gipT0eZGmhZj%2BiTChRkNWcPQgM%2BoRAC2EBRLErBibXZ4Y%2FHOopeAjjgti2iPW0s2HUD7fTegiJOTFOIplV88ao8Ujhbyxe57AVp%2BvdnX6KBLeQ1kccKNK1XPwVgJLYpyct4o%2BdaTOD5Ruc%2Bjjatyb1V6iadU%2BUH5LT0eeHfNYS1nbRikI9zPpw40vIDUAMNvik8MGOqUBs27YdsjrjoTV3tL1zY0O1x%2BgO9hoMTXUWHgACIEcT4%2FbIDT6sclo6NuEJBnrlR7EYv6fmjm0JIjiLmm%2BryJVJ%2B2HPuTRXD7%2ByS%2FBF85JFbiI4an0SKB3%2FG69LEurr7d7zs6bD20RqA%2B5Y1k6WYnD4CJvr5eaWWMWeqboQRbebnF%2FXc9gIHlmW2aDZ1G2r6lkpsgbstE1ArjZjvYNVmJ4g136POLL&X-Amz-Signature=ef5f4aa90c4275502116f87f3fa75ff8198d369294cc3ed86161f967a3600dbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
