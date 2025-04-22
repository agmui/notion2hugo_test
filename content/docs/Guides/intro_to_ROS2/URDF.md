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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTQZERSL%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDcL7KCxzYKyJJ1L7xUU71ouBosz3cKGYS%2FY1vo8Fm2agIgbT8RiF1XyP5Y1ohGSclFAntuPl9aHkEZ74A7l5zMiWkqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfVisX3YbenvBzo4yrcA6JAO3LCLiOIVuIAelq5F61N9FXf4Iu6l6s9rJf%2FFOmt%2B9CzdcyEU%2BhoTXy7Jwb9YiUgg%2FnY%2BF8KVKOg14orB8d5tKe8nopa3TPU2BlvXmaavpQEjKe3ImktUrfAH5c0I1r%2BCty3LZdAUhg2R1QFQb9YHIZXw%2F63mfeR4m2F%2B0NFTqRdvfZ5qA5Ry3DCIiJZJHdNbylTDrfadVyF9i03E9QcrOASZnW7wzeyNTRMrfvgtwc5A8nE7YmdBlKCXib6KnfcNzXfmdvnwj9%2BP7YjfxTNkOsF0o%2FdbrQaybJnBx87NVBPAu6Dt7tGrsF6G7OGkTFUFf%2FE5OXJXx7H%2FvVXH2Z2dHU3bOxkbFcfu8Oe2UMne4icDZLTH6WU3WGY%2Fg%2FNl1nop85kmCrrFQOBGaQuGkxJc%2FpHj3%2FoQdbfl61YTge3DdM38i%2BwZeOuUhN%2FdTYOsmgCsS7g%2BBSQdCz6RBWPLtlb%2B9Uy6INNX3rrTE6oCg69d%2FAXf1zILXl55osgsyDfYmbK2U7sWEc3GCebMUMeILanTLEAt2%2BBcpWaFIjeocBs0h%2BU9xOEGTja0H9cvBao7XmOfwElm2M%2FzXrvleYrYPhI3mQRxQn6%2FvPNu2nC2%2FtBWGib1RRqHN8cx9OrMIHwnMAGOqUBEXg2t%2BzeH56QEGVDVRIoHq2TSmBk5RaCt7j0nAj4fN95I2VTV7f1%2FHtZoeETzaFfpouDFGwAfh0j0%2B9TzJ57afCnPT93AmvCqU%2FBFL6FvOVBL2b35RkiIKsKertm5Awdvc%2BqQX3OYOE86aSoW2WQ0oHSopNscG8nG%2BMH%2Fj6RkYtceLp8o%2Fr0t7XmOMr8h8yPUHuCoBf9zezyobuesmN7kBknzujb&X-Amz-Signature=81f811abe0d3ccfc22bfd489e0c3914fe9b015eace63e664b55a6064bdc0329d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTQZERSL%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDcL7KCxzYKyJJ1L7xUU71ouBosz3cKGYS%2FY1vo8Fm2agIgbT8RiF1XyP5Y1ohGSclFAntuPl9aHkEZ74A7l5zMiWkqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfVisX3YbenvBzo4yrcA6JAO3LCLiOIVuIAelq5F61N9FXf4Iu6l6s9rJf%2FFOmt%2B9CzdcyEU%2BhoTXy7Jwb9YiUgg%2FnY%2BF8KVKOg14orB8d5tKe8nopa3TPU2BlvXmaavpQEjKe3ImktUrfAH5c0I1r%2BCty3LZdAUhg2R1QFQb9YHIZXw%2F63mfeR4m2F%2B0NFTqRdvfZ5qA5Ry3DCIiJZJHdNbylTDrfadVyF9i03E9QcrOASZnW7wzeyNTRMrfvgtwc5A8nE7YmdBlKCXib6KnfcNzXfmdvnwj9%2BP7YjfxTNkOsF0o%2FdbrQaybJnBx87NVBPAu6Dt7tGrsF6G7OGkTFUFf%2FE5OXJXx7H%2FvVXH2Z2dHU3bOxkbFcfu8Oe2UMne4icDZLTH6WU3WGY%2Fg%2FNl1nop85kmCrrFQOBGaQuGkxJc%2FpHj3%2FoQdbfl61YTge3DdM38i%2BwZeOuUhN%2FdTYOsmgCsS7g%2BBSQdCz6RBWPLtlb%2B9Uy6INNX3rrTE6oCg69d%2FAXf1zILXl55osgsyDfYmbK2U7sWEc3GCebMUMeILanTLEAt2%2BBcpWaFIjeocBs0h%2BU9xOEGTja0H9cvBao7XmOfwElm2M%2FzXrvleYrYPhI3mQRxQn6%2FvPNu2nC2%2FtBWGib1RRqHN8cx9OrMIHwnMAGOqUBEXg2t%2BzeH56QEGVDVRIoHq2TSmBk5RaCt7j0nAj4fN95I2VTV7f1%2FHtZoeETzaFfpouDFGwAfh0j0%2B9TzJ57afCnPT93AmvCqU%2FBFL6FvOVBL2b35RkiIKsKertm5Awdvc%2BqQX3OYOE86aSoW2WQ0oHSopNscG8nG%2BMH%2Fj6RkYtceLp8o%2Fr0t7XmOMr8h8yPUHuCoBf9zezyobuesmN7kBknzujb&X-Amz-Signature=81a6185bd1c06d635c63a43b2d156d00184e240dab33564fc66d423e5d12d354&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
