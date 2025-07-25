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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN63RZDL%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCxmHcvTD5dB0UPGTYpu558B4peFdw68m%2F9NVY02cbmHQIhALAeNGrrPPXF%2FgZmHA4BbLzVHaGGOsVfqQu1Fgoqp8ubKv8DCEIQABoMNjM3NDIzMTgzODA1IgznYJGF0M%2BDXpcIqdQq3AP%2F%2Fh3PU5Ohf8Qgq9MQw1myfZfm6IyrJBAQ4%2FqlfvrPDgdvnGrjnRL0Yo71R%2F2Npnt34y2zKGFZ5W8g8SR7NpM3vbRCmCwAAHthD8UZzoIPjRRtObh1m2WHUd0lsYirCp2W3CeGHDKczcXr6fIdikM9yngHFmb%2Fi4NAOi2aKyKHFI4utUUvdhpdMWSnmVBhnjW%2FXFnFRg488ohUN8A0McZTcBIzNQQ6Yfu2AyfSHeGb7Xqgazf%2BKYd9Iqv4%2BkxC%2Fy85GlZ%2FG%2BBnmxW74Ervf1nLlOehdfFmT9UlF635fNx3axdJmbjnBJLa1cdHqZxbCFkV4c9H2hrQ32%2F6CASOUU7DhqjCbRVQewft8ifJvymUbO1B%2FWUpijMoAKv4377d14tgJdC3heuj2FxHDVj3xHKPGeF0Yx4YCZBU9o9BmXypGgHhugDQSNp01rsZObq6qK1MfJS5dmnQNzA%2FDM7XCmXVda5MUarJeL7vhMM7292btWQ2ZUkig4DD%2Fr6wPKf1KD3GpAQBSKgz7jQ7Kjro2pUXJUornpRzJKs41gYSJbvelDm5J5R6DB4R21OTL%2BAbhZK8ZdgYGwOJDtf9aeK6PBRdlL3BTtxHFkb7W7Nkhnb4uqptLyi0dxV8p5HxXjCcjI3EBjqkAYh6VgxH%2FtKmJSnIXUIDTnizQse5p5qEfql%2BBEhwGJ8prdRzQTXMPgzQY1LXdtfq7Zyu17Ez1kKf6N5mT7Swd%2BMueyIHckqiO4Zvuv1HAsxEk5hkV2hbPW%2FdAuUmKVJRnrY3UesxUKyu4LImXM7Of3v6IsKEP3m5UouoKY5GqkwtS4wPEH%2B4z4eckKugaiEWwenrT2%2Ba0vKV%2FvJHJS%2FN0QXawh3n&X-Amz-Signature=014cd1fb7bb3f4e4669e1b9ba7a98ac05c3edd517e0dbac187e6c9c45b425763&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN63RZDL%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCxmHcvTD5dB0UPGTYpu558B4peFdw68m%2F9NVY02cbmHQIhALAeNGrrPPXF%2FgZmHA4BbLzVHaGGOsVfqQu1Fgoqp8ubKv8DCEIQABoMNjM3NDIzMTgzODA1IgznYJGF0M%2BDXpcIqdQq3AP%2F%2Fh3PU5Ohf8Qgq9MQw1myfZfm6IyrJBAQ4%2FqlfvrPDgdvnGrjnRL0Yo71R%2F2Npnt34y2zKGFZ5W8g8SR7NpM3vbRCmCwAAHthD8UZzoIPjRRtObh1m2WHUd0lsYirCp2W3CeGHDKczcXr6fIdikM9yngHFmb%2Fi4NAOi2aKyKHFI4utUUvdhpdMWSnmVBhnjW%2FXFnFRg488ohUN8A0McZTcBIzNQQ6Yfu2AyfSHeGb7Xqgazf%2BKYd9Iqv4%2BkxC%2Fy85GlZ%2FG%2BBnmxW74Ervf1nLlOehdfFmT9UlF635fNx3axdJmbjnBJLa1cdHqZxbCFkV4c9H2hrQ32%2F6CASOUU7DhqjCbRVQewft8ifJvymUbO1B%2FWUpijMoAKv4377d14tgJdC3heuj2FxHDVj3xHKPGeF0Yx4YCZBU9o9BmXypGgHhugDQSNp01rsZObq6qK1MfJS5dmnQNzA%2FDM7XCmXVda5MUarJeL7vhMM7292btWQ2ZUkig4DD%2Fr6wPKf1KD3GpAQBSKgz7jQ7Kjro2pUXJUornpRzJKs41gYSJbvelDm5J5R6DB4R21OTL%2BAbhZK8ZdgYGwOJDtf9aeK6PBRdlL3BTtxHFkb7W7Nkhnb4uqptLyi0dxV8p5HxXjCcjI3EBjqkAYh6VgxH%2FtKmJSnIXUIDTnizQse5p5qEfql%2BBEhwGJ8prdRzQTXMPgzQY1LXdtfq7Zyu17Ez1kKf6N5mT7Swd%2BMueyIHckqiO4Zvuv1HAsxEk5hkV2hbPW%2FdAuUmKVJRnrY3UesxUKyu4LImXM7Of3v6IsKEP3m5UouoKY5GqkwtS4wPEH%2B4z4eckKugaiEWwenrT2%2Ba0vKV%2FvJHJS%2FN0QXawh3n&X-Amz-Signature=43fe5ed797548a76d7b3013c8cfe0bcf8b1210eba5ae9bd11de179ee2d25e2dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
