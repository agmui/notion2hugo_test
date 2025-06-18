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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI2B2OZB%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcIQA6n%2FFerKVpIz98BzffE2N61KnoxKXxBUn0ia5ftAiAZ0W5oV1InFc3G9EKPbP48nEgK4JSlbVOhhiVOdwqkoSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRR54Oc75k7b%2FibpjKtwDSu4uQYMk7r%2Fe8cmktIIJBo%2B51xTOUP%2BQq1QbQFWB6E4DaQ7Uv56yq0Vika0EocZml%2B4k%2FYxaxHJrPC29wXnrcJjHMCHkIl6xVsHqmgmIltahZsxahR7OL7ryZtzyADde%2FmuE9jINYxEzorVJB7BD8TGtlItf6RXpeVPrOFp7ygk0Dcoui2kKKHPQVEpOend0uWfpi5WF%2FDXhhB8SYMmygPcUm8OnLXfbVi%2BHrYvMDSnvppmOM9iiw4gxDLHQVMyKRSiDx30F94BEQ%2FMjFDuzkqYErxOxDz4DGB2C4T1buif2uPze0Pwq9hIRYmbtNOmK9asUyjVRYK3gxMvlBIHVAuN9oCJufNHSpdVAH1IXvYEkPeQjZZ%2FK%2FIJ5Kudcc%2BxxG%2F%2FVc6K%2FuYK5cbX9H51343CVBye%2FYjNQDRuPLNTBt1o8ZaUBLsRG96RBBLOLrn3TbfqtrbGG7OciYa%2F3T4KVJ8quu5SyJkVtwyDZk9ZYsRQHPB1eCI6ipdUpvNQ0zuJQ0GUbVSwWQA1FjAc%2FBxfIjdrZOYH8BlQXSlqvNCB7PZy4kQdDWmV8A7jQ6aGuAP%2FOXfQSUbj%2B%2BM3AUQKIOG7Icsxlb0uqZrpsrRETG5Dfz5gu59jdnMMeI%2BzydxEwn%2FfMwgY6pgH2uY3VuujH%2BItGH90ULlNlnIpYJ5gphbmito%2BDRRV4UXDpa795TqBHmSsJX00CFik3aE7draZrGt3zwwKoOJJxRNVMf0J5F2856XcxYrYCjK3ymlosSi5ecQ%2BAHUrj5Dv0l80yhDI%2BMUBZIhOPII71hHtB16pbIYqPFcwxdR4hdwRj5Hd5GjLAnFbmuPI0an9Q5LzOitfbDT5Kxp3eI0FbKWaswj%2F6&X-Amz-Signature=0444388f3b233ed38a18e7bc288b3e84ac8a5f2b4b740eb4ef2608d0632c5381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI2B2OZB%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcIQA6n%2FFerKVpIz98BzffE2N61KnoxKXxBUn0ia5ftAiAZ0W5oV1InFc3G9EKPbP48nEgK4JSlbVOhhiVOdwqkoSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRR54Oc75k7b%2FibpjKtwDSu4uQYMk7r%2Fe8cmktIIJBo%2B51xTOUP%2BQq1QbQFWB6E4DaQ7Uv56yq0Vika0EocZml%2B4k%2FYxaxHJrPC29wXnrcJjHMCHkIl6xVsHqmgmIltahZsxahR7OL7ryZtzyADde%2FmuE9jINYxEzorVJB7BD8TGtlItf6RXpeVPrOFp7ygk0Dcoui2kKKHPQVEpOend0uWfpi5WF%2FDXhhB8SYMmygPcUm8OnLXfbVi%2BHrYvMDSnvppmOM9iiw4gxDLHQVMyKRSiDx30F94BEQ%2FMjFDuzkqYErxOxDz4DGB2C4T1buif2uPze0Pwq9hIRYmbtNOmK9asUyjVRYK3gxMvlBIHVAuN9oCJufNHSpdVAH1IXvYEkPeQjZZ%2FK%2FIJ5Kudcc%2BxxG%2F%2FVc6K%2FuYK5cbX9H51343CVBye%2FYjNQDRuPLNTBt1o8ZaUBLsRG96RBBLOLrn3TbfqtrbGG7OciYa%2F3T4KVJ8quu5SyJkVtwyDZk9ZYsRQHPB1eCI6ipdUpvNQ0zuJQ0GUbVSwWQA1FjAc%2FBxfIjdrZOYH8BlQXSlqvNCB7PZy4kQdDWmV8A7jQ6aGuAP%2FOXfQSUbj%2B%2BM3AUQKIOG7Icsxlb0uqZrpsrRETG5Dfz5gu59jdnMMeI%2BzydxEwn%2FfMwgY6pgH2uY3VuujH%2BItGH90ULlNlnIpYJ5gphbmito%2BDRRV4UXDpa795TqBHmSsJX00CFik3aE7draZrGt3zwwKoOJJxRNVMf0J5F2856XcxYrYCjK3ymlosSi5ecQ%2BAHUrj5Dv0l80yhDI%2BMUBZIhOPII71hHtB16pbIYqPFcwxdR4hdwRj5Hd5GjLAnFbmuPI0an9Q5LzOitfbDT5Kxp3eI0FbKWaswj%2F6&X-Amz-Signature=4017da1081143dcaea696529ae18fbe6848c14e4420fbcaa4dd03bb5741b0865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
