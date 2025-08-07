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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOXYUHXA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDtSPqXRjiF4O16Y4FWatzMShC80FXkVxKWl98WyC%2B%2BRAIhAIYPvWzL9%2BhxoUJ6oYNJXsWmwHsoOICtT1NvsY94xeIoKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxe%2Ba6afQRn%2BJifPlQq3AOcuJOqDtu%2FjBnQPsl4bzPbWUx9pFijtiaVk%2FyzaJJF3erersWA4nRpWkp5tGYMpTTy3j6i%2FT24X7Okil8aq4axdXT2nY4Souod8E1WvNZYJmMaiEEvW3uewkuzBrDlDLoLLr2B%2FrBbxqzy0BTrcatwTwBsokEnUl9YTP2xv46Rh24PQZyy%2Fp8dVZOCwEktDZMRkTRfnZpN0wHDy4cPEm%2B6wJm57rwz2aRpM456htffHjyyAVb5Ko8UxQC7%2Bx6qPUXpD450jXbP53OnVVbY5ecJX6ZijQnUSw3rlk5i44GtkmD78jDva%2FDFzGTOJZD0DJlJ2btsCfTu6quj6R7fhnGHSNwySpyzVlx12axWtFFyZwOeS5TTJHOgPZH8t0d4l4DVHDrTd9RVprUu5jWGabw%2FU2yJZhgmWQWoyUCtZ%2B3kHcm1AeXjbKoQAx755iLLWilN56MpECt1jJyLV4DgUSv%2FFvKWo%2BDirc8YLrLVewzA1cfx5Ej6VsJiK2FtkzsGEBEhTWD%2FpT4u3KsxfwIDzYz8mBYZQP4F3MPCpy3xNIeKqF507GjXK6MM%2FfHkEJDMRkGQst%2FvM9TejTT5QopwJww73Ycim%2BNWWUuBsXPW4p%2BtmgC5HxF1S3N2HQXJuTDTlNTEBjqkAR5ONW%2F2bVg6XTGm4hWjmzqhURNCD6yVGNU6k0vjcXknIphQPfajnqKYYHV3dxLFYO7cAdKh9319rPOTmEUb47VjJcx8B5CTtjyRF27ss64ruqyxhuWcInYifgJbD9clkq7ufpkHMURCaWI4Aig7adPK04xd7JT9q8hxyLVqfsakzeTsLZBNA6jitIRThxq8U94XpwAO5MJA2O1QogF3NqFA7JOl&X-Amz-Signature=2137449156ac094e03d6bab1e548e49d2d5053eeaf63034be53c90da365695c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOXYUHXA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDtSPqXRjiF4O16Y4FWatzMShC80FXkVxKWl98WyC%2B%2BRAIhAIYPvWzL9%2BhxoUJ6oYNJXsWmwHsoOICtT1NvsY94xeIoKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxe%2Ba6afQRn%2BJifPlQq3AOcuJOqDtu%2FjBnQPsl4bzPbWUx9pFijtiaVk%2FyzaJJF3erersWA4nRpWkp5tGYMpTTy3j6i%2FT24X7Okil8aq4axdXT2nY4Souod8E1WvNZYJmMaiEEvW3uewkuzBrDlDLoLLr2B%2FrBbxqzy0BTrcatwTwBsokEnUl9YTP2xv46Rh24PQZyy%2Fp8dVZOCwEktDZMRkTRfnZpN0wHDy4cPEm%2B6wJm57rwz2aRpM456htffHjyyAVb5Ko8UxQC7%2Bx6qPUXpD450jXbP53OnVVbY5ecJX6ZijQnUSw3rlk5i44GtkmD78jDva%2FDFzGTOJZD0DJlJ2btsCfTu6quj6R7fhnGHSNwySpyzVlx12axWtFFyZwOeS5TTJHOgPZH8t0d4l4DVHDrTd9RVprUu5jWGabw%2FU2yJZhgmWQWoyUCtZ%2B3kHcm1AeXjbKoQAx755iLLWilN56MpECt1jJyLV4DgUSv%2FFvKWo%2BDirc8YLrLVewzA1cfx5Ej6VsJiK2FtkzsGEBEhTWD%2FpT4u3KsxfwIDzYz8mBYZQP4F3MPCpy3xNIeKqF507GjXK6MM%2FfHkEJDMRkGQst%2FvM9TejTT5QopwJww73Ycim%2BNWWUuBsXPW4p%2BtmgC5HxF1S3N2HQXJuTDTlNTEBjqkAR5ONW%2F2bVg6XTGm4hWjmzqhURNCD6yVGNU6k0vjcXknIphQPfajnqKYYHV3dxLFYO7cAdKh9319rPOTmEUb47VjJcx8B5CTtjyRF27ss64ruqyxhuWcInYifgJbD9clkq7ufpkHMURCaWI4Aig7adPK04xd7JT9q8hxyLVqfsakzeTsLZBNA6jitIRThxq8U94XpwAO5MJA2O1QogF3NqFA7JOl&X-Amz-Signature=e17094e2d9a5e18353645970ed1708b44b02c291c8fa800d7a8c31b71916114b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
