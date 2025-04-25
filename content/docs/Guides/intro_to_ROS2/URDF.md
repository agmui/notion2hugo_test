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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZQRWQRD%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMBzurks8NaZQ4u4hPoigKVaAxw%2FCpKA8bf6RiTMN7rQIhAKx%2BGolZKBE7%2BoQ%2F%2BFDtOAGILq%2F8TtX6lDtwgGCC9O4ZKv8DCDUQABoMNjM3NDIzMTgzODA1IgwUdUUUP6jDQhFqeQkq3AOnrleDCm6oFIhJyZDcaE5xZYe6ccQBK%2FjAHVhgT6n%2FQYYAhEIcPVJb5i9QTrGHB8DqtBvPtk5mkK4tJCEqYbaxacFkI%2F7hiO%2BXgcSaHY0IxWpmB9W3%2FGuHkwYVznCSGDepm%2B46tLlFloBzrWQeYQZIEO8PDVp%2BzGeRXQpOi6JZ9nk53CmilLUtvPJ5%2BQDoK3ZTPVb1kxItGDN9S%2By20BhPqCmljK7TqVI4AhWFjkMq6zJjHVAWUOuzxHmuqJbOC%2FNqBr2zlRDfp3wLLcl5HalnoJHDxNShEiKrEEjnFCBLbpK05YzSy2haluIvAo0p7m%2Bgy0fioGIFKRVrxpNotDM4hGATPOoOya%2B2i298hRLj%2BDBuAZlA6xK6AKKpPW0WCkwxsmQLfOGqwafnndxgPPXyi3rprIJ4mLAR2ShvmUKLTV6Wf1UO6u3pfKJTaxpdoN7sHSKhg6CsBKmzWTmq5JYqurMPYLE%2Bdh8rXvZUCuZULvvSunjWY3WIIEOfNAxtn4domB9LkcE%2BuRRCxFjTqGkBHx9CJ35ECgq98w0uYQWehjGDpcPj9RJiDLbCRbXcSY%2FY31rUX75gAnTnvq56tLua8Q3WEyWn60mHdBVZC7qVbqVe2XTkfOWISik6DzCe0q%2FABjqkAVmeio%2FNZ3BPcxsn96mLCfZxCYamlDh%2FfS5HHNDNniu8R39ni%2FpfcMLoN62AoQclGJAj2zn5i6UDGcuU%2FmqoTEfAxSt4miRaGvfPj%2Brk%2F%2B5OmomfuLg3DOsKLNQEVBNfwuDKLJO5VApWLSIPhamdSjQU9737vx3ikMSGgm67Iz1x0tGGiKm6GCIalRZC7qJOkwj9njvfjhAXWtW6QnrE1Np7%2FlXb&X-Amz-Signature=6f28cf0911c7f79175b9304801385628d240f6bb5e556fb3ee7871f70bd1a923&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZQRWQRD%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMBzurks8NaZQ4u4hPoigKVaAxw%2FCpKA8bf6RiTMN7rQIhAKx%2BGolZKBE7%2BoQ%2F%2BFDtOAGILq%2F8TtX6lDtwgGCC9O4ZKv8DCDUQABoMNjM3NDIzMTgzODA1IgwUdUUUP6jDQhFqeQkq3AOnrleDCm6oFIhJyZDcaE5xZYe6ccQBK%2FjAHVhgT6n%2FQYYAhEIcPVJb5i9QTrGHB8DqtBvPtk5mkK4tJCEqYbaxacFkI%2F7hiO%2BXgcSaHY0IxWpmB9W3%2FGuHkwYVznCSGDepm%2B46tLlFloBzrWQeYQZIEO8PDVp%2BzGeRXQpOi6JZ9nk53CmilLUtvPJ5%2BQDoK3ZTPVb1kxItGDN9S%2By20BhPqCmljK7TqVI4AhWFjkMq6zJjHVAWUOuzxHmuqJbOC%2FNqBr2zlRDfp3wLLcl5HalnoJHDxNShEiKrEEjnFCBLbpK05YzSy2haluIvAo0p7m%2Bgy0fioGIFKRVrxpNotDM4hGATPOoOya%2B2i298hRLj%2BDBuAZlA6xK6AKKpPW0WCkwxsmQLfOGqwafnndxgPPXyi3rprIJ4mLAR2ShvmUKLTV6Wf1UO6u3pfKJTaxpdoN7sHSKhg6CsBKmzWTmq5JYqurMPYLE%2Bdh8rXvZUCuZULvvSunjWY3WIIEOfNAxtn4domB9LkcE%2BuRRCxFjTqGkBHx9CJ35ECgq98w0uYQWehjGDpcPj9RJiDLbCRbXcSY%2FY31rUX75gAnTnvq56tLua8Q3WEyWn60mHdBVZC7qVbqVe2XTkfOWISik6DzCe0q%2FABjqkAVmeio%2FNZ3BPcxsn96mLCfZxCYamlDh%2FfS5HHNDNniu8R39ni%2FpfcMLoN62AoQclGJAj2zn5i6UDGcuU%2FmqoTEfAxSt4miRaGvfPj%2Brk%2F%2B5OmomfuLg3DOsKLNQEVBNfwuDKLJO5VApWLSIPhamdSjQU9737vx3ikMSGgm67Iz1x0tGGiKm6GCIalRZC7qJOkwj9njvfjhAXWtW6QnrE1Np7%2FlXb&X-Amz-Signature=ecc1f8f2a79d3916b0c00ef1279a9329fba17bbc3a58c4e65c0c3aa153b871b0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
