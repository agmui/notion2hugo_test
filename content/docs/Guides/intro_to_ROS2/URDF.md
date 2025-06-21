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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MDPQL7L%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT3f%2BHMcXF%2BbMDPyVI0Q734dr4cwLPhOv%2B%2FhqZtj%2F6ugIgHOvx1cjxNEnC2bMs%2BW29z%2Fh52PP35k98oJOQgs4Pe%2F8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1frlpewc7Keq%2B8AircA6DkEXwPZ8S2l4dxXaNJr5HfzCVaxv1fDQKwobM4b02ORP%2BxD8w%2FtjAImwB5wMn2tTgGUjgAhRsTOAB2qK0yLrEWrMEA1MHeio9zM9p5X5VWBCGyVW%2B4hnfoHjPZ2WN5L5p%2FSnIlL%2BD%2FbP0vgAVEFUB1QOa9ZdwrIgWc9ngOkgUT76ovAyD99TrXl9DKOFCDo4EwFYdp1jqoFriPCfreRLj%2BZcQxaMDKr5%2FUhSqnyj9YIqd2qTnvufGdMz4csTyf3T4LOjKwTpPZs%2FI5F14%2BS5iN5H9JZlnCj2z6naK6%2FVr6r%2FiNu7q%2FxDdYIGyGs7c6kjIoKFLmUqHgwvdfO51sNPdbm2Y7oCr4kmkvd8KoEDl0VnYxFNqbPP97%2FFwo7Ozxl%2Fv9ggeR25BVRJY21LWvA4qnG0ofgZiZiqjc40Dp2XJ3%2Bq9NAwz3NbBcdspw3%2F7AjFa8xONAqFVJ8CkM83Cp9VJ9A8NAG95CVJM2wwnsyS0t4DJBCWGuIM3jLsvuU0GghZmvX6IpP4XN%2BaKDm90Z3YbF54IF%2Biywi4VcjIMW2ZEjpkwKaV7TCw1CfWS4NEG4BvOBZvgWxM2cWfx%2BUBTyKMXB9Ms7NilmVnJE3O9u5fSrrEiaXqpGz9Ng7qndMPHR2cIGOqUByRdYjZWbfZPV1tOLgMgBySWowzkPNacK%2FDQx%2BJ%2FzRi7aSjAN8Y3es5m4xvxi3RJZI8qwDY5pYvhR1o%2FwwzeZzFLukzF%2Fs9i%2BWUOei8MLJdrLOiVvTk0pTJBTG%2F1xchegrdNhTAkL%2F4kbVl25OHAdvnILxrn5%2FpnSpaJy4tJ5PmHhDhuBrEXzGbFwu9vcDPS0g93%2BwbXgZU1jyHHvM6gefaeE2Aj8&X-Amz-Signature=4fe9f29c534466c7bb2996914f37ff47c3050f04c1f8f5b1aa0794ffbd6f4a3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MDPQL7L%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT3f%2BHMcXF%2BbMDPyVI0Q734dr4cwLPhOv%2B%2FhqZtj%2F6ugIgHOvx1cjxNEnC2bMs%2BW29z%2Fh52PP35k98oJOQgs4Pe%2F8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1frlpewc7Keq%2B8AircA6DkEXwPZ8S2l4dxXaNJr5HfzCVaxv1fDQKwobM4b02ORP%2BxD8w%2FtjAImwB5wMn2tTgGUjgAhRsTOAB2qK0yLrEWrMEA1MHeio9zM9p5X5VWBCGyVW%2B4hnfoHjPZ2WN5L5p%2FSnIlL%2BD%2FbP0vgAVEFUB1QOa9ZdwrIgWc9ngOkgUT76ovAyD99TrXl9DKOFCDo4EwFYdp1jqoFriPCfreRLj%2BZcQxaMDKr5%2FUhSqnyj9YIqd2qTnvufGdMz4csTyf3T4LOjKwTpPZs%2FI5F14%2BS5iN5H9JZlnCj2z6naK6%2FVr6r%2FiNu7q%2FxDdYIGyGs7c6kjIoKFLmUqHgwvdfO51sNPdbm2Y7oCr4kmkvd8KoEDl0VnYxFNqbPP97%2FFwo7Ozxl%2Fv9ggeR25BVRJY21LWvA4qnG0ofgZiZiqjc40Dp2XJ3%2Bq9NAwz3NbBcdspw3%2F7AjFa8xONAqFVJ8CkM83Cp9VJ9A8NAG95CVJM2wwnsyS0t4DJBCWGuIM3jLsvuU0GghZmvX6IpP4XN%2BaKDm90Z3YbF54IF%2Biywi4VcjIMW2ZEjpkwKaV7TCw1CfWS4NEG4BvOBZvgWxM2cWfx%2BUBTyKMXB9Ms7NilmVnJE3O9u5fSrrEiaXqpGz9Ng7qndMPHR2cIGOqUByRdYjZWbfZPV1tOLgMgBySWowzkPNacK%2FDQx%2BJ%2FzRi7aSjAN8Y3es5m4xvxi3RJZI8qwDY5pYvhR1o%2FwwzeZzFLukzF%2Fs9i%2BWUOei8MLJdrLOiVvTk0pTJBTG%2F1xchegrdNhTAkL%2F4kbVl25OHAdvnILxrn5%2FpnSpaJy4tJ5PmHhDhuBrEXzGbFwu9vcDPS0g93%2BwbXgZU1jyHHvM6gefaeE2Aj8&X-Amz-Signature=9c25188335c85ec18805dac25963ee8337e8688de99637746fb63810703f06ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
