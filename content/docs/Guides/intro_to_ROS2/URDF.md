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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DRR6DPL%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHH3gtXBYiYjvj7BY4uHyP43ZtOffE5H29vHcEBlnUEAiAzN9%2BgIKfyw5iSR9%2Bb0so9GliBjIiSXGl3rP3JOTh6MSqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu6TaujKjJD4OwriJKtwDLT4Aa7gKGLyNdksSoyHg%2FCOhzI9A65rHIpzIAYGvyZmN28E26RPehsUnlz5mIBQgfUYhTaFV1DV%2FVttOh3%2BVfkY1%2FLqE7oEC5GAUeFzkGmbDHtg8fHppMi4o4xM98RuKXO2ONQJPl2lfFlwCY3YmVNI21XwcJo6o67QRcusIJ3PV4PG54wqYVWCRgyy22h1EWQlYaPV6NA%2BDFykXIPFe1VoBp3Vf%2FOwMArmazxTlfXpOM53QmwVCaL2cnAViquIbq8kJQZtkQSU5Xn1FJnRmJzSVE47OWoMHMosXNPC4Qf%2BAdyuCYcCfnd3xqVNk4iTmyahu2zgqE%2BajksgO8BBpSez9rRfqsQGvcWSnWQP0fCosPjdojQe8xFEZMupvH6T16FiCYpVnn2UHxiJVvVQ8f9I%2FUS2Bvw46dKjIWHlsf3Q%2FqFFiwJdfSafP1PyP5EcSVrlhr3O3V7YecoWLHZIYSTYGhnZwMSi2Iy7BSHCibsFPAZLnJVKhWcRdtl3N66gLKGxaIl3RrNe%2FQm6dHYtQMgxiBNXLON2FSE3NJWHyKqQz%2BMOT6boA84XlBk1GAfbgHXa871fcfRcKw5yFmOEC%2BY%2FdG4QtZYKY6d0OUwOqBO5qCeq6vGclmWzrPYkwoPn4wwY6pgEHR7tgJQ7M18KdtJNH5lDaMzM9%2BtjpaJdn6StVzPN3auDQdCSbaggA4LzIR8QwbvoYqc8zBToWRVh%2BxQCCC4oXePdECYBMYDXLviZ5PTC6CSzVizjqk9JGj3tNb4DfTGRPU1pfmcTHHuoLd5CInVxf8HqAlMZZPJQ70EbnzREpKootJ5p4fm%2FMjW%2F5FDQxeXwiWXb4Uf5jCF3YvbyeNY4NVuqOswWq&X-Amz-Signature=5a19bafa2701dd8e8c614f4db4cf889a67fb79dac68e6ec2601b3b274961879e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DRR6DPL%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHH3gtXBYiYjvj7BY4uHyP43ZtOffE5H29vHcEBlnUEAiAzN9%2BgIKfyw5iSR9%2Bb0so9GliBjIiSXGl3rP3JOTh6MSqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu6TaujKjJD4OwriJKtwDLT4Aa7gKGLyNdksSoyHg%2FCOhzI9A65rHIpzIAYGvyZmN28E26RPehsUnlz5mIBQgfUYhTaFV1DV%2FVttOh3%2BVfkY1%2FLqE7oEC5GAUeFzkGmbDHtg8fHppMi4o4xM98RuKXO2ONQJPl2lfFlwCY3YmVNI21XwcJo6o67QRcusIJ3PV4PG54wqYVWCRgyy22h1EWQlYaPV6NA%2BDFykXIPFe1VoBp3Vf%2FOwMArmazxTlfXpOM53QmwVCaL2cnAViquIbq8kJQZtkQSU5Xn1FJnRmJzSVE47OWoMHMosXNPC4Qf%2BAdyuCYcCfnd3xqVNk4iTmyahu2zgqE%2BajksgO8BBpSez9rRfqsQGvcWSnWQP0fCosPjdojQe8xFEZMupvH6T16FiCYpVnn2UHxiJVvVQ8f9I%2FUS2Bvw46dKjIWHlsf3Q%2FqFFiwJdfSafP1PyP5EcSVrlhr3O3V7YecoWLHZIYSTYGhnZwMSi2Iy7BSHCibsFPAZLnJVKhWcRdtl3N66gLKGxaIl3RrNe%2FQm6dHYtQMgxiBNXLON2FSE3NJWHyKqQz%2BMOT6boA84XlBk1GAfbgHXa871fcfRcKw5yFmOEC%2BY%2FdG4QtZYKY6d0OUwOqBO5qCeq6vGclmWzrPYkwoPn4wwY6pgEHR7tgJQ7M18KdtJNH5lDaMzM9%2BtjpaJdn6StVzPN3auDQdCSbaggA4LzIR8QwbvoYqc8zBToWRVh%2BxQCCC4oXePdECYBMYDXLviZ5PTC6CSzVizjqk9JGj3tNb4DfTGRPU1pfmcTHHuoLd5CInVxf8HqAlMZZPJQ70EbnzREpKootJ5p4fm%2FMjW%2F5FDQxeXwiWXb4Uf5jCF3YvbyeNY4NVuqOswWq&X-Amz-Signature=47d3745336f34e8e23365b225e29a0141e484655c98ba8bd825390c8e194f1ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
