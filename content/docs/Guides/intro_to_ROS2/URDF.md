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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE7CAUU2%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T121334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIGtMaAv0Oa9yituMjyhjzRsSvfkc19mVcYVIxbtaQGjNAiAHz691grO0dvpVqRPkfp8O7%2FZoEpHHXOawuzXcmVaNuCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy9XRuT8tYNFcN%2FLcKtwDzgMYbGUMNIBMXlXKfL6YMWecWbxCHYN3qjn2uc7sobh5CZaG1aFjJeDl82VzfRPt3MDKcf%2Bl4siYHFBPDET2gY1aQ4YhyrA1esj8E1SxHiFuq2K5H7KH7kSX6PHSOK1qhtV5c6MexCMw08iuWJm4eqgIiVfebUF3zSvj9YX0je%2Fx%2BdQjdueqa%2BiugJ%2BXBcYoZK5IfZJedYwb7vAZ1WzoMrAg%2BaNxxKaDEih1KFuVe3HsYvUtiLsnQMvew%2FrF18INNsOHh%2ByTpfdi75K30IyhXI6swgP4VxPpQhXJXFnhOJbEceYL1ANiw3JB3k8mlMg1epg8akC%2B32UM%2B276f55YACnQIg%2BaqAADXQanOYm3yHz2V5vMdA7ur05Rx%2FNcNQYPa9KwgQ4SC5GuSQAPrnf%2B%2B30RHXFdzKsXSjWXqHk7jYnQ%2FYJGDa6NlTX%2BBZ9TufFMol8L8Ez6sl3EU5ALbDtCJ6%2F%2F%2B5Lu%2BFISrYKFs3tv8tDqi3BqWdBwZscw%2FEInTu9Ukyic7SUbQVwKadkavqK6OThqtboGghTB2k%2BON0YhzDjjdvUqUgDJGfiggRlSUDLZ9uPzzJtdAvKkEjj%2Fx%2FWRZ%2BjDTE0Smq7E%2FyOjPr65YyePdC%2BUAx50PLjgIP4wzb3uvwY6pgH7OP0t2%2BS4rUmiHf5ZYbkhatcJbxjfLxe6ZMU6QErFrSdF67opmjoiGJrPTA1ejH7grNNPDI45CzjOaA4Dq0OGyocKJlY2kyrorYU0d%2FGUUU1X0eoDWlSNGybLYeTP%2BYRKhTIIchLrMZtbMVDL%2FABQST71JQj50GClvKmMBscvv8SgQpqnfayI8f7H3IxhCLinCv7WpB09wUjdOAgq0nfqSM%2Fx7%2BZs&X-Amz-Signature=bd600473f7348fc255931e9349c2c47de89d43b8156f8da9da447c4e2324c833&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE7CAUU2%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T121334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIGtMaAv0Oa9yituMjyhjzRsSvfkc19mVcYVIxbtaQGjNAiAHz691grO0dvpVqRPkfp8O7%2FZoEpHHXOawuzXcmVaNuCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy9XRuT8tYNFcN%2FLcKtwDzgMYbGUMNIBMXlXKfL6YMWecWbxCHYN3qjn2uc7sobh5CZaG1aFjJeDl82VzfRPt3MDKcf%2Bl4siYHFBPDET2gY1aQ4YhyrA1esj8E1SxHiFuq2K5H7KH7kSX6PHSOK1qhtV5c6MexCMw08iuWJm4eqgIiVfebUF3zSvj9YX0je%2Fx%2BdQjdueqa%2BiugJ%2BXBcYoZK5IfZJedYwb7vAZ1WzoMrAg%2BaNxxKaDEih1KFuVe3HsYvUtiLsnQMvew%2FrF18INNsOHh%2ByTpfdi75K30IyhXI6swgP4VxPpQhXJXFnhOJbEceYL1ANiw3JB3k8mlMg1epg8akC%2B32UM%2B276f55YACnQIg%2BaqAADXQanOYm3yHz2V5vMdA7ur05Rx%2FNcNQYPa9KwgQ4SC5GuSQAPrnf%2B%2B30RHXFdzKsXSjWXqHk7jYnQ%2FYJGDa6NlTX%2BBZ9TufFMol8L8Ez6sl3EU5ALbDtCJ6%2F%2F%2B5Lu%2BFISrYKFs3tv8tDqi3BqWdBwZscw%2FEInTu9Ukyic7SUbQVwKadkavqK6OThqtboGghTB2k%2BON0YhzDjjdvUqUgDJGfiggRlSUDLZ9uPzzJtdAvKkEjj%2Fx%2FWRZ%2BjDTE0Smq7E%2FyOjPr65YyePdC%2BUAx50PLjgIP4wzb3uvwY6pgH7OP0t2%2BS4rUmiHf5ZYbkhatcJbxjfLxe6ZMU6QErFrSdF67opmjoiGJrPTA1ejH7grNNPDI45CzjOaA4Dq0OGyocKJlY2kyrorYU0d%2FGUUU1X0eoDWlSNGybLYeTP%2BYRKhTIIchLrMZtbMVDL%2FABQST71JQj50GClvKmMBscvv8SgQpqnfayI8f7H3IxhCLinCv7WpB09wUjdOAgq0nfqSM%2Fx7%2BZs&X-Amz-Signature=adccbfb095fc41c1026ca4fee0b4bd35a52fbb2951a7b3251388f452b4502614&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
