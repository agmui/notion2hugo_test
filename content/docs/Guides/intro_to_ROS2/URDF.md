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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGICHYSQ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaiB9pq0LJvzuldy%2BiGlIS58QpHgBnJIqctHCrpzdovQIgMHDJZ9oyl8BBwItw2H5GZ8h79Stgqr3Z6A1fLjuskRMq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDZcdSrEFmsHgrQCKircA%2FELHJFfhwU5W1Jj%2BSrU8sEli2IEkd%2BC0poKeVxPjKiJZyZY4I6dt3iG7sV4ocDMzaJIYsTfN1QCCLtITyFe0qrRLESJ4FgPm5ZqBdVvRvJLBXig%2BTNZY9Uw1LY%2BcNx%2F5WLcwYBcM88VfmmKInFxH2PJqJfsJhicNGTIwnuElg%2B60fQgtFY4k5LVSNm%2B6%2BGxLNqKqkL%2FP8SCnd3HdcsUrnSW3EcShGSNcgxtNKz5fFB6L18vmcFeOnundt8tr5BHBoMT3HJyQk0RD9hHyS0DHF2pP0XET6siR7UfqEMX7ZKkFcKcZlHlRqaw%2Fj9EK%2FxrKW9Db0zqdhNVWgeDjclGn%2B%2F35IxQrOgmClkVOCoZSIyztGLAx6yvThkVHvBbyAMN0NhCaue4jNl513wRHFqw%2B955XhORQJ3ROM4sS223tO2wBvsuH%2FAJvY72ceuoAOvFNtRXb8jRtR8%2BKD0gOxN4cxZH%2FNTL5%2FDa%2BYGD5HckESA%2BVpufQaguSlPe0IrdUjLIy51vj7veJMjeqOqN9rAOZN%2FzO1wrBL8zQY55NrfqqSGUTLo87ZoYt7B3f%2BgscR5MKYI8xu6009YhB0I%2BweSyvA8XQ8jYC1Qv41HiqbbCuh8Uw9aKUrAmxrRYCbPpMID46sAGOqUBY5Nrkn8tU8DS5uim8INj6gxJNWshTZrpydG4C%2Fl6ZBVyzYgMdcv0ImaXMg5%2F5Zk%2FPFy8uvqztBKHJC9xJKeaJnrbj2xI%2Fnc%2BO5JwUXCEMavcRRNBUJ9XkXwx4ofow0CCiE0Jx7xsCgi7ApfHwYlQlqWHwiNR4u6gd0lVNum6jXl1%2BYhIXSKQuj%2Ffr3olFQl9JxA7zELNJgJTV0AY6krySCvCoKVU&X-Amz-Signature=7b48ff0290f11adc9233e88cfdb5cb6d00fa8842a3962bcf148014829c411dee&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGICHYSQ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaiB9pq0LJvzuldy%2BiGlIS58QpHgBnJIqctHCrpzdovQIgMHDJZ9oyl8BBwItw2H5GZ8h79Stgqr3Z6A1fLjuskRMq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDZcdSrEFmsHgrQCKircA%2FELHJFfhwU5W1Jj%2BSrU8sEli2IEkd%2BC0poKeVxPjKiJZyZY4I6dt3iG7sV4ocDMzaJIYsTfN1QCCLtITyFe0qrRLESJ4FgPm5ZqBdVvRvJLBXig%2BTNZY9Uw1LY%2BcNx%2F5WLcwYBcM88VfmmKInFxH2PJqJfsJhicNGTIwnuElg%2B60fQgtFY4k5LVSNm%2B6%2BGxLNqKqkL%2FP8SCnd3HdcsUrnSW3EcShGSNcgxtNKz5fFB6L18vmcFeOnundt8tr5BHBoMT3HJyQk0RD9hHyS0DHF2pP0XET6siR7UfqEMX7ZKkFcKcZlHlRqaw%2Fj9EK%2FxrKW9Db0zqdhNVWgeDjclGn%2B%2F35IxQrOgmClkVOCoZSIyztGLAx6yvThkVHvBbyAMN0NhCaue4jNl513wRHFqw%2B955XhORQJ3ROM4sS223tO2wBvsuH%2FAJvY72ceuoAOvFNtRXb8jRtR8%2BKD0gOxN4cxZH%2FNTL5%2FDa%2BYGD5HckESA%2BVpufQaguSlPe0IrdUjLIy51vj7veJMjeqOqN9rAOZN%2FzO1wrBL8zQY55NrfqqSGUTLo87ZoYt7B3f%2BgscR5MKYI8xu6009YhB0I%2BweSyvA8XQ8jYC1Qv41HiqbbCuh8Uw9aKUrAmxrRYCbPpMID46sAGOqUBY5Nrkn8tU8DS5uim8INj6gxJNWshTZrpydG4C%2Fl6ZBVyzYgMdcv0ImaXMg5%2F5Zk%2FPFy8uvqztBKHJC9xJKeaJnrbj2xI%2Fnc%2BO5JwUXCEMavcRRNBUJ9XkXwx4ofow0CCiE0Jx7xsCgi7ApfHwYlQlqWHwiNR4u6gd0lVNum6jXl1%2BYhIXSKQuj%2Ffr3olFQl9JxA7zELNJgJTV0AY6krySCvCoKVU&X-Amz-Signature=6bbc0a4a56fffd953438ec3711c2584dd91ebde88c2424982b7da75b7ec3ada7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
