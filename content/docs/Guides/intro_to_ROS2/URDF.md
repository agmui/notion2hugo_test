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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KUE4F76%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICahwpc5IvGfzRZbTeJ2ljaycD73UUcfQjBqzfJ98Oq9AiEAsRNR6uzQO%2Fzw5gWuVZU2Rf8UoTC%2BZXAN6sppyVKWoXsqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInGZeXfwVO1s50QLSrcAyHu%2Fw3T19CNqCHJt6NJGr39YW0h7yKasOdo6vVZlylYF07bi5O9dwj7QJA2BzYwJTOVYkg1bjskezLVP8rhkrDl1e%2BG5hQMAxqFpVQNh2kcj3OTvcWTeT%2FwOC%2FbgP%2FG95g9bkUVWkG2%2BEiz2oTsS0GxzeTGoMdouBfQ49hIXCakI9zZmXggbDxSyWc1p7WirSeqRMP2LwZ1K8gRIR9sxfpbihPvwKPltVx%2FrGqSp8c7fhblc7MwqkX6sFfUuNT5mxcLz64y5xPPhXkNZn00DqQufwi2iwPpN3S8BrT0YLPOmEsbqhIMtLrTA%2BD3mUQMeQprUrmAe1GhQdKlOngmUmgOSI5MNPFfd%2Faq7MsvjdP0QhmItg3U3IqnLvDXRCsRy%2BSIatEroGljiw2or0jQ5V8%2FEptuZM01QZkQm0nLj4nY1kvulCgaNpX2ku3ZHMf9d3ZB7yI0ZRaXlQ6zgGPzPxQemlKe9mpiJXk1EzAC6rWb5h6Hn2y%2F%2FvdDcTHdulMzrgerup8B%2Fgx65dMy7SqJbT6mjmK%2BeDPNJmEH2N%2FS9uR%2BcKrPfHAYvNOzOZZngumyr5N8qXBPpKaSFOsxbGrC6Jp3yvW%2FD3J%2FQUat4e1GkqZt5XHe0CkuaqAjrIKyMJmcmsIGOqUBXa6OSds8B2Ig%2B0INhvew%2Bbvr6BQ7PgfGwbFjZf%2Buy7zBWr0ajtF8bL9kQtt465wsWoDPv9E19DUQpSW9itC0yS90H7BAISzDkCWqEuWQhjEu14JMGFaO6ismULRRI9eV%2FalgxvtdXhTFxVvPN4y9n4l%2FHIbwx5eltcgL8PGp0dwQtsg4MCMYfJQpx4BBei1ZS%2BQFHSJwbkGVenRKT17j3IVFqNEY&X-Amz-Signature=7f4aa96d7bb417aef04cd775c21861a6fda4cea96efacb7615665b449c442017&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KUE4F76%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICahwpc5IvGfzRZbTeJ2ljaycD73UUcfQjBqzfJ98Oq9AiEAsRNR6uzQO%2Fzw5gWuVZU2Rf8UoTC%2BZXAN6sppyVKWoXsqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInGZeXfwVO1s50QLSrcAyHu%2Fw3T19CNqCHJt6NJGr39YW0h7yKasOdo6vVZlylYF07bi5O9dwj7QJA2BzYwJTOVYkg1bjskezLVP8rhkrDl1e%2BG5hQMAxqFpVQNh2kcj3OTvcWTeT%2FwOC%2FbgP%2FG95g9bkUVWkG2%2BEiz2oTsS0GxzeTGoMdouBfQ49hIXCakI9zZmXggbDxSyWc1p7WirSeqRMP2LwZ1K8gRIR9sxfpbihPvwKPltVx%2FrGqSp8c7fhblc7MwqkX6sFfUuNT5mxcLz64y5xPPhXkNZn00DqQufwi2iwPpN3S8BrT0YLPOmEsbqhIMtLrTA%2BD3mUQMeQprUrmAe1GhQdKlOngmUmgOSI5MNPFfd%2Faq7MsvjdP0QhmItg3U3IqnLvDXRCsRy%2BSIatEroGljiw2or0jQ5V8%2FEptuZM01QZkQm0nLj4nY1kvulCgaNpX2ku3ZHMf9d3ZB7yI0ZRaXlQ6zgGPzPxQemlKe9mpiJXk1EzAC6rWb5h6Hn2y%2F%2FvdDcTHdulMzrgerup8B%2Fgx65dMy7SqJbT6mjmK%2BeDPNJmEH2N%2FS9uR%2BcKrPfHAYvNOzOZZngumyr5N8qXBPpKaSFOsxbGrC6Jp3yvW%2FD3J%2FQUat4e1GkqZt5XHe0CkuaqAjrIKyMJmcmsIGOqUBXa6OSds8B2Ig%2B0INhvew%2Bbvr6BQ7PgfGwbFjZf%2Buy7zBWr0ajtF8bL9kQtt465wsWoDPv9E19DUQpSW9itC0yS90H7BAISzDkCWqEuWQhjEu14JMGFaO6ismULRRI9eV%2FalgxvtdXhTFxVvPN4y9n4l%2FHIbwx5eltcgL8PGp0dwQtsg4MCMYfJQpx4BBei1ZS%2BQFHSJwbkGVenRKT17j3IVFqNEY&X-Amz-Signature=a364fbd40357892eca7e2951f94135b02b3e9834eb0f9a7f62e71b082de7f790&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
