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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KOHNDGE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDPpWX2XlL8SEPxW0V5Y%2BC1pkDIwIJLjgmf2u%2F%2BqwDq%2BgIhAKBHon0tCR%2Fd62uwUzeC%2BO%2FHvX8aFhz8wkIu9LjObSbGKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZo%2BugTGkff6K8xBEq3AMupO%2FpnJ%2BRsUpzX6NOuDRHv4C3b248OPLlYxO625JP4Etru4p8PcFpGfdAwRRVMLN1ScS0PGcxtsYD4LzUFBzTjtDrcnZhTXsvSz9fxlJraTGZrK4xsBunwCMpuV5wt%2FlVr5pPyA4fF6%2BrMUqa1kdvw76qE9bttaNoxRLDIT4rHEp8p1dlh9DcgZhgNXRJYDbC4tISNsXKEFhrNe%2BZfAexObv2SsbnOp4HExNzSZ620B5VCuhBwueBkHOTUXtvYH8nmcu70LnmuxsoU%2FB5NilgpNPIFvF3yFnH27EgmI4xSHMuyeSYihiLaFLHxNLsS3OpnD%2B3tdc6JPR6uztzq8Fqh%2FJxlFMxqeUGxN88j0pa5XG3CoTHimkso8uErRdZg5N4auyc6KZ%2Bg24RztyVX2%2FHUB6xNfIr7hMIYbwPQcsL74st9qZZaazMo01oE%2B%2B0NESbKmH0sR9SpPBxsoYG6owuRU06AWqVkoZugh2YLhHMygcte4MGNRzlBSO5gf9lsRMELXDjhbbYGFpLp%2BKSTCxjitOtT5D8imDaYWHt%2BeXO0CACpGFAGkIku%2BLLOK2teC8BqD41aM8Yba3UuefpOSYvBE8IDFQHikDKWCnpufl6ujdJSJgEjgavQhuxXzDRzK6%2FBjqkAZysSMhVH8fXSUS%2BgKYD7JTnZF7aWIODaSJWF%2FFh%2FZvdxlR%2FZvnA7jrV3QUHH%2FMK0GDxwYKneUi%2FO1esa%2Bl27OEtZLnqUd5KZDVNO8NHbzRrUmPMSIrQW%2FTtzEy5BiHeL4B8bXTyRlnuxJuI4q5zOUnEijXRpr4tvjbwtY15rlhZHOrDUNbZ6SrtHLkfnPFE6Q%2FDYVSxd91eIiG%2BhHd6ZlWgnNon&X-Amz-Signature=25c391b303d0c6772f8cb7b5ba6e53c302e4fd42a277b3a918d733fc34914e3f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KOHNDGE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDPpWX2XlL8SEPxW0V5Y%2BC1pkDIwIJLjgmf2u%2F%2BqwDq%2BgIhAKBHon0tCR%2Fd62uwUzeC%2BO%2FHvX8aFhz8wkIu9LjObSbGKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZo%2BugTGkff6K8xBEq3AMupO%2FpnJ%2BRsUpzX6NOuDRHv4C3b248OPLlYxO625JP4Etru4p8PcFpGfdAwRRVMLN1ScS0PGcxtsYD4LzUFBzTjtDrcnZhTXsvSz9fxlJraTGZrK4xsBunwCMpuV5wt%2FlVr5pPyA4fF6%2BrMUqa1kdvw76qE9bttaNoxRLDIT4rHEp8p1dlh9DcgZhgNXRJYDbC4tISNsXKEFhrNe%2BZfAexObv2SsbnOp4HExNzSZ620B5VCuhBwueBkHOTUXtvYH8nmcu70LnmuxsoU%2FB5NilgpNPIFvF3yFnH27EgmI4xSHMuyeSYihiLaFLHxNLsS3OpnD%2B3tdc6JPR6uztzq8Fqh%2FJxlFMxqeUGxN88j0pa5XG3CoTHimkso8uErRdZg5N4auyc6KZ%2Bg24RztyVX2%2FHUB6xNfIr7hMIYbwPQcsL74st9qZZaazMo01oE%2B%2B0NESbKmH0sR9SpPBxsoYG6owuRU06AWqVkoZugh2YLhHMygcte4MGNRzlBSO5gf9lsRMELXDjhbbYGFpLp%2BKSTCxjitOtT5D8imDaYWHt%2BeXO0CACpGFAGkIku%2BLLOK2teC8BqD41aM8Yba3UuefpOSYvBE8IDFQHikDKWCnpufl6ujdJSJgEjgavQhuxXzDRzK6%2FBjqkAZysSMhVH8fXSUS%2BgKYD7JTnZF7aWIODaSJWF%2FFh%2FZvdxlR%2FZvnA7jrV3QUHH%2FMK0GDxwYKneUi%2FO1esa%2Bl27OEtZLnqUd5KZDVNO8NHbzRrUmPMSIrQW%2FTtzEy5BiHeL4B8bXTyRlnuxJuI4q5zOUnEijXRpr4tvjbwtY15rlhZHOrDUNbZ6SrtHLkfnPFE6Q%2FDYVSxd91eIiG%2BhHd6ZlWgnNon&X-Amz-Signature=e886efc792cd0adb871d87fd82ba5e2492a70982d752cd6b96561df6670675fb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
