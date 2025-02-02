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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QIDNWOS%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxsSPQzMZaYSx2UctYUu9Vw7VDY0qs968JYsKU0OJWAgIhAMQ4jyy%2FKyHu4jNEYLercMsAG2jSSTWs9duuRZgTJR5QKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuwWkhwMFs9772ktoq3APGFI%2FZQgEoSEuy994POPrhfcPb4WfvM3GSv3pCC5n36%2BSp%2FBKTOFV%2FhbiNU1%2FLhR56ya%2FmNK2qIVyssdfu5M%2FHahu56pK9GjZRsiW8NKbYa%2FnnFNxxNUOEYEfIllAQ1aZHQbiciyrw6NF3qqKUZNk71TBHpwVvKITrZ5cPggaMgQvaSlEKzky4Tt%2BhSxkV7uIeLDKjr6mshB0IhcZY8c0F5vwp%2BBwv84dCkJUYnDrcj%2B59a2Bw4sWO75QEMiB9PTLUklwaxoYRB7%2FnMsHiroT3O0fvlJnd6Oix3%2FPux1Q%2BgIHxrqKGueQ6L%2F3uC2TJZ5GiX1IKk2w2Hegvlypt%2FQy1XKocTN6rvcVCdQotK79pj238OdEz1SW3oRCKN%2BtiaGqtgZtdQ8Nlo%2Fhwxg%2BMG4wRelUvo1p1%2FcB75rHRaSmjLdQSg9BpnqDuaZswA6nDwKP3O72%2FE7ReqNSFXjpJOutK81Rksg%2Bo3SewDsGpYr24q%2F1AGwl6v3QR96vSCPkZ%2Ft2W6dsuuXkTheKySODx73MDGt2CAO6bedQjQVy9FEeU1vZqg6Af%2FrZK%2FmWV0I1OgrgTZ6yUVx8kV17B70q8mqw1%2BhQdX5WGLXWMmOZjHv0X0INgsAIEm%2FYNxVXcmzDqnfy8BjqkAbVLlzH0Yn0VG1mNQfAfx4reRYP4PkWA%2B9o9WGXAdTNCJmtWANe4onbJmCdnzADYNS2T%2F9ZYWSvHjSH7NHttDzZiE71NEcZ9wCSFTqG5rcLN0lJLFBmYFt6SljymsXjVhPngoKD4Mw1bCsoGyZ6zYBFsQO2To9pT3T1JZKvgVvsIcKigiD4%2B2UBgY%2BBg%2FwgOLTYQGVLD7xt9RNiV6bo7XaNfrmz%2F&X-Amz-Signature=53a24f1de7d79e6b5dd9dc26fab8e62faac748af0100987e4e4c0194125b01cc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QIDNWOS%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxsSPQzMZaYSx2UctYUu9Vw7VDY0qs968JYsKU0OJWAgIhAMQ4jyy%2FKyHu4jNEYLercMsAG2jSSTWs9duuRZgTJR5QKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuwWkhwMFs9772ktoq3APGFI%2FZQgEoSEuy994POPrhfcPb4WfvM3GSv3pCC5n36%2BSp%2FBKTOFV%2FhbiNU1%2FLhR56ya%2FmNK2qIVyssdfu5M%2FHahu56pK9GjZRsiW8NKbYa%2FnnFNxxNUOEYEfIllAQ1aZHQbiciyrw6NF3qqKUZNk71TBHpwVvKITrZ5cPggaMgQvaSlEKzky4Tt%2BhSxkV7uIeLDKjr6mshB0IhcZY8c0F5vwp%2BBwv84dCkJUYnDrcj%2B59a2Bw4sWO75QEMiB9PTLUklwaxoYRB7%2FnMsHiroT3O0fvlJnd6Oix3%2FPux1Q%2BgIHxrqKGueQ6L%2F3uC2TJZ5GiX1IKk2w2Hegvlypt%2FQy1XKocTN6rvcVCdQotK79pj238OdEz1SW3oRCKN%2BtiaGqtgZtdQ8Nlo%2Fhwxg%2BMG4wRelUvo1p1%2FcB75rHRaSmjLdQSg9BpnqDuaZswA6nDwKP3O72%2FE7ReqNSFXjpJOutK81Rksg%2Bo3SewDsGpYr24q%2F1AGwl6v3QR96vSCPkZ%2Ft2W6dsuuXkTheKySODx73MDGt2CAO6bedQjQVy9FEeU1vZqg6Af%2FrZK%2FmWV0I1OgrgTZ6yUVx8kV17B70q8mqw1%2BhQdX5WGLXWMmOZjHv0X0INgsAIEm%2FYNxVXcmzDqnfy8BjqkAbVLlzH0Yn0VG1mNQfAfx4reRYP4PkWA%2B9o9WGXAdTNCJmtWANe4onbJmCdnzADYNS2T%2F9ZYWSvHjSH7NHttDzZiE71NEcZ9wCSFTqG5rcLN0lJLFBmYFt6SljymsXjVhPngoKD4Mw1bCsoGyZ6zYBFsQO2To9pT3T1JZKvgVvsIcKigiD4%2B2UBgY%2BBg%2FwgOLTYQGVLD7xt9RNiV6bo7XaNfrmz%2F&X-Amz-Signature=f211232632dadac16b23652b95d5636cac8bdf5e469597bffeb112550f585342&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
