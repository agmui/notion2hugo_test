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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HMIUH6W%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDgZn1WxFkY2EyUwS8DKtt3Mq2JiI8du32NPOR12dJyCwIhAPOEaIBASGj4L10kTXxXID9A6hyznwFsz5WQBQM6zug8KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGmiIg%2FROIQj4kunMq3AMSs37P75yuR8F7YvmhZlYm8LEXkNC7e5gP090cpiYHfIwUUfd6P2kH7FzCLh3Fw8zReDNbotNLYOx4rYc%2FeS2KqZJRJjaoNh8I47XH75E1Sxv75MCZxYMSULLKKzlsgpS%2BKaZOOWKHSVDTJ8Xr8PqFFCNlwtY7OT1a6Zqsp8eKyr4soTZzPmFAVffw3KWpFhDmx%2Fg%2BBA3Ia4oI%2BrzLRLcdE62lUo76PApfh4zqaKR%2BpKB8kcYmwOxNYkMwYMkZSFovPl1IWf2wTqKZM7cD4muMVH%2BQJ7y6Qx1YZZ00%2FFcdsaYrdzho391nE180CJvtaMhDQk36w9VvMB%2B1BjDTUUwwGArRqVZXrfkw%2BwLfCzJfV5K5aRvD6WSUwwuuOSsdbUXzfpiTMMjLFe3SDc%2BEeMih7b2Q9nbl4K7b1wPtGetk42tGPTYcnLoZMYVg4MYzeM5iLIDy8V58FsYawuen1QRdsnpIadC89VyzOiJ%2FeOPlUbtiy48TWpHpJqF1OkBSinO73LfIkLLrDIYBcQ3SGHmaXslqFMcsEQfdSbV0GhFYFohHdNHCeVqSG61kQdAIMYl9%2BxIzEL9jHt1i3Na8I2guqgVTbc1cCf4SrgvNk8OyS2a680OuUc%2BnDZwYhTD9je2%2FBjqkASjcHVYGYxUVXC3ch0h7632i4T1R8TL3K%2FdDemp92MZNV28herDYuwWlAEDN8scyhH5H1YMHTwPJzIHSoj9vRHK2qQ1TfMIjqpjzE5T6ddto%2Fdn4hwGd1Edu0uDoSCBZVOZBr3z5EBFwGumq1povYYUsOE%2FY%2BontxLgjk7kv6vAZzGXi2Yx7f1Oo3qI6JXdpgl96NjpgG6Zjv%2BefJlUmvfW62rKM&X-Amz-Signature=843ad381c70b62e5f819f4dce96dc5c6c91fb661b26cf908c60d523f26de310b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HMIUH6W%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDgZn1WxFkY2EyUwS8DKtt3Mq2JiI8du32NPOR12dJyCwIhAPOEaIBASGj4L10kTXxXID9A6hyznwFsz5WQBQM6zug8KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGmiIg%2FROIQj4kunMq3AMSs37P75yuR8F7YvmhZlYm8LEXkNC7e5gP090cpiYHfIwUUfd6P2kH7FzCLh3Fw8zReDNbotNLYOx4rYc%2FeS2KqZJRJjaoNh8I47XH75E1Sxv75MCZxYMSULLKKzlsgpS%2BKaZOOWKHSVDTJ8Xr8PqFFCNlwtY7OT1a6Zqsp8eKyr4soTZzPmFAVffw3KWpFhDmx%2Fg%2BBA3Ia4oI%2BrzLRLcdE62lUo76PApfh4zqaKR%2BpKB8kcYmwOxNYkMwYMkZSFovPl1IWf2wTqKZM7cD4muMVH%2BQJ7y6Qx1YZZ00%2FFcdsaYrdzho391nE180CJvtaMhDQk36w9VvMB%2B1BjDTUUwwGArRqVZXrfkw%2BwLfCzJfV5K5aRvD6WSUwwuuOSsdbUXzfpiTMMjLFe3SDc%2BEeMih7b2Q9nbl4K7b1wPtGetk42tGPTYcnLoZMYVg4MYzeM5iLIDy8V58FsYawuen1QRdsnpIadC89VyzOiJ%2FeOPlUbtiy48TWpHpJqF1OkBSinO73LfIkLLrDIYBcQ3SGHmaXslqFMcsEQfdSbV0GhFYFohHdNHCeVqSG61kQdAIMYl9%2BxIzEL9jHt1i3Na8I2guqgVTbc1cCf4SrgvNk8OyS2a680OuUc%2BnDZwYhTD9je2%2FBjqkASjcHVYGYxUVXC3ch0h7632i4T1R8TL3K%2FdDemp92MZNV28herDYuwWlAEDN8scyhH5H1YMHTwPJzIHSoj9vRHK2qQ1TfMIjqpjzE5T6ddto%2Fdn4hwGd1Edu0uDoSCBZVOZBr3z5EBFwGumq1povYYUsOE%2FY%2BontxLgjk7kv6vAZzGXi2Yx7f1Oo3qI6JXdpgl96NjpgG6Zjv%2BefJlUmvfW62rKM&X-Amz-Signature=4ca76c3d3a4a0a5d0403a401eba8bb57abed534605e36953fb2f4215c91af425&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
