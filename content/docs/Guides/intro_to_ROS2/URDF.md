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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZY6C52M%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDi15%2Flir7pkgd4afUjAKx%2FmeSbTeyL8m9h%2FtyP8A%2Bp1QIhANr6E4tjKWFBkzFfKiD6bLHKKujrJ8M4HvZ07K9%2BqmftKv8DCEUQABoMNjM3NDIzMTgzODA1Igw3d8jYunaxdM39Bpwq3APPO3sFKArfAo1%2BXM227ZUkUWoxnJb%2BpODQBDMVldELttW2P3jzjNTQ1IwzI8cwSSiAaYlgI7zk9JEluZ85iufyIMxn%2BiAdOh%2B3dYOHdsRaAI1CJafaMRbY%2B%2Fn29tLvkwuUH%2BEvKWy0mkdMspeQwyEDy6NKTz63nI%2FRHQW2rB4vD4AxLWRGiwD%2B0dqQTlYSydw3GMiZeIZ32HP30QXGaEAAgEdBlilthTzGDxCy99%2FET%2F8VOxVaWBcWkUTfE2mwmxetMaFf8ov8YOQxNlkUVYj%2BRxmP4jdUlsy0Wobj%2B2DvnK6ow%2F%2BhsOqQDh0dHDnCaCF%2FQB4fmYz9kzIHsi1iUKC3YxydpMwho0RMKlxfzY2kPH6dVg1DT6oaoP1XJSPdY%2F%2BIprqaxV7ywp7K4%2BJkaib3VVV5WgYmnINwaGRs64obDpM%2FLwWCaCQgUTBSmZWR5iqdnKhzFy4%2F0LV%2FvBqEd%2FElofO52VscfashoftqhlVV48ZcB%2Bdle7dYIhi4m%2BsgmHCmZx9019WR0MhMyl%2BMBaZ71u4LEZVOW6P6OuOO6vgX%2FbX%2FGjuuEexFXtXuDzvQIUsCHghDKwv5Kofk7Lf8S62a%2ByoKV%2BhCs3R8eNj%2BCYhBUNonGYzBE77f86kDqjCHq9HBBjqkASN1k0YEK2W8kmRUNgg%2BN0QE%2Fzq8phUx1ETyjEicsyR1yF5V6m68Ql1AeME8hVE5Xz7x0%2BrC6IHh5DNoodQjxk4Q3zSPE2%2FXjNJA%2F98e57BDAFfyfd%2Fhc5D0EUcpY%2FNCIS7vbWGINwiAVjejc2ca0%2F9AMQvyPKBwcNwkVfz4yj1l47d02V9HmcMxRB%2FiW7s9AugZwiOtTY0GCOitwIy0Fs5dIt%2F6&X-Amz-Signature=52e112110a468ed3edc876ca1610256bb3d80fa8131ad262b75332b9b95400c2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZY6C52M%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDi15%2Flir7pkgd4afUjAKx%2FmeSbTeyL8m9h%2FtyP8A%2Bp1QIhANr6E4tjKWFBkzFfKiD6bLHKKujrJ8M4HvZ07K9%2BqmftKv8DCEUQABoMNjM3NDIzMTgzODA1Igw3d8jYunaxdM39Bpwq3APPO3sFKArfAo1%2BXM227ZUkUWoxnJb%2BpODQBDMVldELttW2P3jzjNTQ1IwzI8cwSSiAaYlgI7zk9JEluZ85iufyIMxn%2BiAdOh%2B3dYOHdsRaAI1CJafaMRbY%2B%2Fn29tLvkwuUH%2BEvKWy0mkdMspeQwyEDy6NKTz63nI%2FRHQW2rB4vD4AxLWRGiwD%2B0dqQTlYSydw3GMiZeIZ32HP30QXGaEAAgEdBlilthTzGDxCy99%2FET%2F8VOxVaWBcWkUTfE2mwmxetMaFf8ov8YOQxNlkUVYj%2BRxmP4jdUlsy0Wobj%2B2DvnK6ow%2F%2BhsOqQDh0dHDnCaCF%2FQB4fmYz9kzIHsi1iUKC3YxydpMwho0RMKlxfzY2kPH6dVg1DT6oaoP1XJSPdY%2F%2BIprqaxV7ywp7K4%2BJkaib3VVV5WgYmnINwaGRs64obDpM%2FLwWCaCQgUTBSmZWR5iqdnKhzFy4%2F0LV%2FvBqEd%2FElofO52VscfashoftqhlVV48ZcB%2Bdle7dYIhi4m%2BsgmHCmZx9019WR0MhMyl%2BMBaZ71u4LEZVOW6P6OuOO6vgX%2FbX%2FGjuuEexFXtXuDzvQIUsCHghDKwv5Kofk7Lf8S62a%2ByoKV%2BhCs3R8eNj%2BCYhBUNonGYzBE77f86kDqjCHq9HBBjqkASN1k0YEK2W8kmRUNgg%2BN0QE%2Fzq8phUx1ETyjEicsyR1yF5V6m68Ql1AeME8hVE5Xz7x0%2BrC6IHh5DNoodQjxk4Q3zSPE2%2FXjNJA%2F98e57BDAFfyfd%2Fhc5D0EUcpY%2FNCIS7vbWGINwiAVjejc2ca0%2F9AMQvyPKBwcNwkVfz4yj1l47d02V9HmcMxRB%2FiW7s9AugZwiOtTY0GCOitwIy0Fs5dIt%2F6&X-Amz-Signature=8fd145c8164ef0e798eb1d6c22cb2895b364c4caed8dec4a44597b0eef62bf9c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
