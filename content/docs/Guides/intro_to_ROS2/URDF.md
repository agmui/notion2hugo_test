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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HCLNR4P%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIDeqmjrULFgtQEcjJ559qMQvTwql06JUG8NtD%2FPI5Md4AiABxf3v6jkE8wZu3zqP5mfgVLVS32qNLWbl4aYzpVH49CqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGPl4N8sgbKO33BkzKtwD5c%2Bf2Jvm%2FSxQ%2FoI8XzyTcDQ%2FeAzEBrVoXQtpYfeLI4JOFgu2JSjyc%2Fi2IdPSBdxvbCNUOd%2FzJnJNVhQRV1VAKUVDhdp96JAaV9kyRWBXofKswSq%2FG6czC0fAZM00h%2BOeC4shByo01kI1JWv0K3xNr6x6Y9BU2wHPzg0M4CC9XO55We29s%2FMS19fT22jNVyKg5HgzOeHa5AG1MmGk1kKezUGd970Fegrz8WZOdIX65clB3rbtAwitt0znH7Siu8KkIptf0frFOP7wjaYyFZD%2BjjHf23Jr0iXHjsz%2Bm%2BHMcMIJFhiKN730NsQaHEMya%2FAlCFbxLMG8oKsBKgDCPC31VRgfDhuHz8qzMOUNA31csBuyTEGgny%2Ft1Wd0SBdilh%2FtMPsLUfHqopybAnOghiktrparYx6gB%2FazRJh5jaSX3kF%2B3IpoSSypX29txxJI3krqKznl3ukilD4TOSqIkLFk7TohFsbb4YvshP1CcDIQlCj%2BRJDOlJVkzdRybbWwS1UMOXuKmiQb3bQ8t5Q37jZtn%2B0pj14uaW5woGTF8LWdAfQRD%2B6gGHTz%2FbQAYvtc8qdufBmN5a34v8GS4MoH4CxfRpDZbTACWLCEwDGtK5s2MFKQmYzB5d4ohiTbBr0w2IOixAY6pgEGn4c6kGtuJDgODH9rxiEwcvGBi8A8SDhqDJSFSzfkkMkQdM9ZBtgmUDC9RZs%2FK1QrMCn0jwmf120VID%2Bq1Vk9PmxXiJzCbweEkR9sELx9T8d4XenBDqaxqxyXzAAMQK7rohUPBo7jo9wcmyvbqVPcqw8sbW70BGYb%2BY4rCo7W1gGaWQNMQ%2Fi8FBqUcqZNeJEN4Cc3TPlW%2BLhGxkHlzX0qBHSooCel&X-Amz-Signature=fc28db3c08b24e578df7f3732a8d43190f4404472e6ae4edd18f1dcbed7681c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HCLNR4P%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIDeqmjrULFgtQEcjJ559qMQvTwql06JUG8NtD%2FPI5Md4AiABxf3v6jkE8wZu3zqP5mfgVLVS32qNLWbl4aYzpVH49CqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGPl4N8sgbKO33BkzKtwD5c%2Bf2Jvm%2FSxQ%2FoI8XzyTcDQ%2FeAzEBrVoXQtpYfeLI4JOFgu2JSjyc%2Fi2IdPSBdxvbCNUOd%2FzJnJNVhQRV1VAKUVDhdp96JAaV9kyRWBXofKswSq%2FG6czC0fAZM00h%2BOeC4shByo01kI1JWv0K3xNr6x6Y9BU2wHPzg0M4CC9XO55We29s%2FMS19fT22jNVyKg5HgzOeHa5AG1MmGk1kKezUGd970Fegrz8WZOdIX65clB3rbtAwitt0znH7Siu8KkIptf0frFOP7wjaYyFZD%2BjjHf23Jr0iXHjsz%2Bm%2BHMcMIJFhiKN730NsQaHEMya%2FAlCFbxLMG8oKsBKgDCPC31VRgfDhuHz8qzMOUNA31csBuyTEGgny%2Ft1Wd0SBdilh%2FtMPsLUfHqopybAnOghiktrparYx6gB%2FazRJh5jaSX3kF%2B3IpoSSypX29txxJI3krqKznl3ukilD4TOSqIkLFk7TohFsbb4YvshP1CcDIQlCj%2BRJDOlJVkzdRybbWwS1UMOXuKmiQb3bQ8t5Q37jZtn%2B0pj14uaW5woGTF8LWdAfQRD%2B6gGHTz%2FbQAYvtc8qdufBmN5a34v8GS4MoH4CxfRpDZbTACWLCEwDGtK5s2MFKQmYzB5d4ohiTbBr0w2IOixAY6pgEGn4c6kGtuJDgODH9rxiEwcvGBi8A8SDhqDJSFSzfkkMkQdM9ZBtgmUDC9RZs%2FK1QrMCn0jwmf120VID%2Bq1Vk9PmxXiJzCbweEkR9sELx9T8d4XenBDqaxqxyXzAAMQK7rohUPBo7jo9wcmyvbqVPcqw8sbW70BGYb%2BY4rCo7W1gGaWQNMQ%2Fi8FBqUcqZNeJEN4Cc3TPlW%2BLhGxkHlzX0qBHSooCel&X-Amz-Signature=db9cc8dbbbc0a995bfa91ee0186d009d4a7c0c997b4a7ea9723841a0616aa95c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
