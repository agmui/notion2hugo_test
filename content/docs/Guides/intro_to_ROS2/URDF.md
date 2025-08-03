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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VASL7DL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWpmHFoEX0q7vazl6272QcMYE8iz0ezhQC%2FzV1QkP76AiA7IWjStUJvF6e2csh9fGOyC3IhAunUNbONOeX42K5j1Sr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIML9pO3RXIJddMuolzKtwDlWprN%2FaURgm1FpxLmIDGC4wb4yF3wYwcm14cbtH1jn1d45Sl3bTiJmYmD7kcHqf5o%2Fx5EvcHP5niScsm9sikTjJALXIDevPceBg1%2F%2FNjER5zJkWEMCS%2BVQ%2FgmE4doZsvs%2F4NQmCwArRO9hxniEVoqCWQTZQ%2FYcsi6IEJcc5s1msCQ%2FQYV0wEs9HaktpiygqhEichPN2XW7OQj%2FkT7hCiNPG7mkl%2Fce2uz5wdPIz1lfxSZf4vaLHcheY7uSzeMhXi%2F5S3vr%2B1tNyl92ZdpnB7yq1CeEP43knkcjJXpxkZX6BxRznoUHQaNdz%2BQ1fqyvpbKVqiKifm4Q8UcTJQWNFjI9YApf0GiMSyCVADr8CKpOLXmk8aoGKgUrL%2BH4ztfPTT0lvni7slsfv%2B%2FFQQ94N3I%2F%2FzvUcJEmplyiIVOMAJsM7IgLHiJ%2Bm5%2BlyocZcF7PHBuVjr5Vk34F4bK8yA5PyNbk%2B7y0Qs%2BzGhcb2saRflqmr76Y403SG6goo46Y4oiVNE04AgDd2F79BjVE%2Be1eVC7zGXZxclSWdhlT4sYrhCv8EPLItHgsj2Ciui%2BUXcFgzC6u94qBeFddCDq%2Fwx3YOua0SCjjQaSc2lrhUbPwX%2BTq6VsIYDUITbDEE4SR0wuNK9xAY6pgFY42GQfNmi4VbJDedfR1ZqaWvZLYQHOD6y7unYa15LuAJ0Mdb9qBUrVmx7rY8Dog4zLvcbVc%2FVQQGXAMQlN3erf61MWk0UJUco2tDUu62M2pH0XfLlItzEP8MVKT%2F30q1EC99vkEYqxsPdBNX9Z43iuQWms4%2BjBfUhmY1KfJwVShvC7aaMkZuQTLMMvBbbqI90SdeNwUdygIVeSkod%2BAW00Vb2iDG8&X-Amz-Signature=6397a48d52e33aa42c37092828643d604045022af10c97a0d9bbdc9728389ef2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VASL7DL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWpmHFoEX0q7vazl6272QcMYE8iz0ezhQC%2FzV1QkP76AiA7IWjStUJvF6e2csh9fGOyC3IhAunUNbONOeX42K5j1Sr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIML9pO3RXIJddMuolzKtwDlWprN%2FaURgm1FpxLmIDGC4wb4yF3wYwcm14cbtH1jn1d45Sl3bTiJmYmD7kcHqf5o%2Fx5EvcHP5niScsm9sikTjJALXIDevPceBg1%2F%2FNjER5zJkWEMCS%2BVQ%2FgmE4doZsvs%2F4NQmCwArRO9hxniEVoqCWQTZQ%2FYcsi6IEJcc5s1msCQ%2FQYV0wEs9HaktpiygqhEichPN2XW7OQj%2FkT7hCiNPG7mkl%2Fce2uz5wdPIz1lfxSZf4vaLHcheY7uSzeMhXi%2F5S3vr%2B1tNyl92ZdpnB7yq1CeEP43knkcjJXpxkZX6BxRznoUHQaNdz%2BQ1fqyvpbKVqiKifm4Q8UcTJQWNFjI9YApf0GiMSyCVADr8CKpOLXmk8aoGKgUrL%2BH4ztfPTT0lvni7slsfv%2B%2FFQQ94N3I%2F%2FzvUcJEmplyiIVOMAJsM7IgLHiJ%2Bm5%2BlyocZcF7PHBuVjr5Vk34F4bK8yA5PyNbk%2B7y0Qs%2BzGhcb2saRflqmr76Y403SG6goo46Y4oiVNE04AgDd2F79BjVE%2Be1eVC7zGXZxclSWdhlT4sYrhCv8EPLItHgsj2Ciui%2BUXcFgzC6u94qBeFddCDq%2Fwx3YOua0SCjjQaSc2lrhUbPwX%2BTq6VsIYDUITbDEE4SR0wuNK9xAY6pgFY42GQfNmi4VbJDedfR1ZqaWvZLYQHOD6y7unYa15LuAJ0Mdb9qBUrVmx7rY8Dog4zLvcbVc%2FVQQGXAMQlN3erf61MWk0UJUco2tDUu62M2pH0XfLlItzEP8MVKT%2F30q1EC99vkEYqxsPdBNX9Z43iuQWms4%2BjBfUhmY1KfJwVShvC7aaMkZuQTLMMvBbbqI90SdeNwUdygIVeSkod%2BAW00Vb2iDG8&X-Amz-Signature=f35e0956725ef22ad15d4ef4dad9f4a7dca991c8c5444f8eadd16e80c5310bf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
