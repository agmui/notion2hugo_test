---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X577K7PB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVzeEGfXw0HGFxpUkqoaW0UbMUKWPrHFz2Nxd1p4U49AiEA%2BC1mFDLKh%2FwdWGfWPVQfSbpO4L3b6zicWcg1WkfsCOYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPMu3kfOJnuZtrXGbyrcA6WDjdeyFB%2F37MNXHDT3%2FglTr%2By%2BWEGVN6j%2BMUMpRu60LePAU6ofBGRpvoOYQ3PCL30teukgHrkvC0whT2v%2FsFTOiJNZww9MTxkvxKvC8YaZB%2B041ENeuBT4nvYMAXu3rAmRNH4DqW8M6dK0MVKd6ZPwGNzTZtEa9qE%2F8n7vs2HqkkKjWo8Qx%2Fm87F%2Fdf%2BqlW7GlsYgfqidMyKib8lrg%2F1SP2BjG3AG1uWGerC3Lmj5k%2BQhiqBigFGzNPgnEStAXAGiqBx%2B9V5IW9ZYWr%2FJwhyMQoBtDZTOFYTGuUyTLoSgzavqG5M8md3VbyMw1Fyq%2BlrC0L%2B1oQva7L%2Fro3PDviFYCXG5SDAcmPOYuuLiJYgiRIJXn073%2FXACdTr2WpwBRYgGgxjycnm0skeVFQVsNYSHE%2F1epOVfRDGF5s78coeaZHRgviShbp5MRzLhJ2i8utWkhhBweW5opatSl4g%2Fs2T5joitHbDdNRyBTrVW2tlsdifzhwC5yh2M5nYVwTBX21jXXKQ7hjR%2By8hlZZ3IinNXjILF9PA0iIxFGzilAMD3EJUs7E5Q46zFMCB28uhQEY%2FiZC2uarjOGvhW9sJfrCHuOibiDfWPAun3rDnU2Xeh%2BttHq1I9Vt9rasqayMIKhu8QGOqUBhPBpTp%2FQbDmFm4PN2DeTJgGPcDl3KK5UJHfm1S3yc9yseWS5kLSMEimz3bt%2BLNpxxtSkv4oLLQhGpVc40ruzfapznWGJJ3q%2FEnANwNs8%2FhlvL3Q3xxFk7vimFoighzqyBCXGmRZmdyQ0A37r%2Fdtm6MdbaId8IUkvibs1MnOzcol0i4o4OM7fvNlIvRkDA10dTOw%2B9FxK0oBnZTHqQKsEVorJEYac&X-Amz-Signature=f0c034318d1dd7899e6425e58a3f4c03751c742ebf1893933784e988b30d59e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X577K7PB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVzeEGfXw0HGFxpUkqoaW0UbMUKWPrHFz2Nxd1p4U49AiEA%2BC1mFDLKh%2FwdWGfWPVQfSbpO4L3b6zicWcg1WkfsCOYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPMu3kfOJnuZtrXGbyrcA6WDjdeyFB%2F37MNXHDT3%2FglTr%2By%2BWEGVN6j%2BMUMpRu60LePAU6ofBGRpvoOYQ3PCL30teukgHrkvC0whT2v%2FsFTOiJNZww9MTxkvxKvC8YaZB%2B041ENeuBT4nvYMAXu3rAmRNH4DqW8M6dK0MVKd6ZPwGNzTZtEa9qE%2F8n7vs2HqkkKjWo8Qx%2Fm87F%2Fdf%2BqlW7GlsYgfqidMyKib8lrg%2F1SP2BjG3AG1uWGerC3Lmj5k%2BQhiqBigFGzNPgnEStAXAGiqBx%2B9V5IW9ZYWr%2FJwhyMQoBtDZTOFYTGuUyTLoSgzavqG5M8md3VbyMw1Fyq%2BlrC0L%2B1oQva7L%2Fro3PDviFYCXG5SDAcmPOYuuLiJYgiRIJXn073%2FXACdTr2WpwBRYgGgxjycnm0skeVFQVsNYSHE%2F1epOVfRDGF5s78coeaZHRgviShbp5MRzLhJ2i8utWkhhBweW5opatSl4g%2Fs2T5joitHbDdNRyBTrVW2tlsdifzhwC5yh2M5nYVwTBX21jXXKQ7hjR%2By8hlZZ3IinNXjILF9PA0iIxFGzilAMD3EJUs7E5Q46zFMCB28uhQEY%2FiZC2uarjOGvhW9sJfrCHuOibiDfWPAun3rDnU2Xeh%2BttHq1I9Vt9rasqayMIKhu8QGOqUBhPBpTp%2FQbDmFm4PN2DeTJgGPcDl3KK5UJHfm1S3yc9yseWS5kLSMEimz3bt%2BLNpxxtSkv4oLLQhGpVc40ruzfapznWGJJ3q%2FEnANwNs8%2FhlvL3Q3xxFk7vimFoighzqyBCXGmRZmdyQ0A37r%2Fdtm6MdbaId8IUkvibs1MnOzcol0i4o4OM7fvNlIvRkDA10dTOw%2B9FxK0oBnZTHqQKsEVorJEYac&X-Amz-Signature=b249ba1c4101f8dac0c59ebc54b49206963c2dc875c42ce89b62219fbc058a99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
