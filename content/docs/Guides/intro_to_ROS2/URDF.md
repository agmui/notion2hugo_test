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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWCJL7OT%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1TCSJCvaA2Lm%2BQ5M103OUeJxeiuUa8zXBJh3M153jMAiEAgwNy3LHLBddPDq44VGwsvGRjwAnAAqMYIHGgqt73Etsq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDC7VYftR8Uuc7O0gEircA80O0nGrTC%2FBSfUrDvqSjwjIU%2FCTkATPfinxtC6SUGenhCau%2Bg4bK3xN9hNzbNA%2BdKGI3ImEARUjnDYQvGdxOYLK89bYtcqaU7xkooUrWhs48zFr2iCeyTXvk3lL94lW1LwB5SWoDU5Pyex%2FuArJ3jqk%2BJBddCDgxP6eE1Eo%2FhK6RLLOLTzIfbkmDgIhZWAoS7b0%2BOzqqmMtorakQO4%2BVCEhqRc6tQ8Ye%2FZah2cSvG40Aq08XK0uEITV43tzWnEwJOAIdDV8NN3hkHhqZE6o0HlrnYXSDFuSXLni8tUBcTO58aqxD6hJrurtNKZyPMgKGyReIN7JPPERehyXoPpM4qT5bxnDVCEsVQw0L%2FcYJe%2Fe%2FqVcqTkNgMiH11YPYyWTqwwE0DWxxrFVlkKpj7UGgKWdzJLTbGoYdiSj9sZ0GVCZKWdRylcH7BljG4GhVEyEl%2FbUkTL34vri5nuZIkPW2t1H%2BnEM1xqW5VIPV1abAaEfygFL0ydPspsgnqmdjC3djAXpwJAzO4SCl0U7L3DDWpzyo4Vl4vb5YWXRIDv17i5ymQa7TKkRcogba%2Br6wYuBcb1GGm6b5zlJKM04qgX6dbx3LBT9sccdaVx1lrdGdY8W%2Beek7JGSF2m2LJK5MJna7b0GOqUB8KIbK%2FQesXZmLyuGDWhCiEo0EW2IaZOLXmwttVYNCR3HleMZLb0vujkqOO81SWKQgM2IZYrdy9xsFKrUk3qB1zX76COU9EdNUsvwfJe6FfoM6nmfaD4QcvD75hmI4oJJNh2Z6ZH%2FqNmhXW2m35WlTvM8mng3Xj%2BuhmNFigD1nJ1JSvXFfziTr9TbXo%2FdINBsoQMxA21SwmxubpzjrDHZya68IpZA&X-Amz-Signature=5ae76c8ad2578b8ec3b414f1b07ba526c890aa2f7557722ea42a09cd29b7983b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWCJL7OT%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1TCSJCvaA2Lm%2BQ5M103OUeJxeiuUa8zXBJh3M153jMAiEAgwNy3LHLBddPDq44VGwsvGRjwAnAAqMYIHGgqt73Etsq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDC7VYftR8Uuc7O0gEircA80O0nGrTC%2FBSfUrDvqSjwjIU%2FCTkATPfinxtC6SUGenhCau%2Bg4bK3xN9hNzbNA%2BdKGI3ImEARUjnDYQvGdxOYLK89bYtcqaU7xkooUrWhs48zFr2iCeyTXvk3lL94lW1LwB5SWoDU5Pyex%2FuArJ3jqk%2BJBddCDgxP6eE1Eo%2FhK6RLLOLTzIfbkmDgIhZWAoS7b0%2BOzqqmMtorakQO4%2BVCEhqRc6tQ8Ye%2FZah2cSvG40Aq08XK0uEITV43tzWnEwJOAIdDV8NN3hkHhqZE6o0HlrnYXSDFuSXLni8tUBcTO58aqxD6hJrurtNKZyPMgKGyReIN7JPPERehyXoPpM4qT5bxnDVCEsVQw0L%2FcYJe%2Fe%2FqVcqTkNgMiH11YPYyWTqwwE0DWxxrFVlkKpj7UGgKWdzJLTbGoYdiSj9sZ0GVCZKWdRylcH7BljG4GhVEyEl%2FbUkTL34vri5nuZIkPW2t1H%2BnEM1xqW5VIPV1abAaEfygFL0ydPspsgnqmdjC3djAXpwJAzO4SCl0U7L3DDWpzyo4Vl4vb5YWXRIDv17i5ymQa7TKkRcogba%2Br6wYuBcb1GGm6b5zlJKM04qgX6dbx3LBT9sccdaVx1lrdGdY8W%2Beek7JGSF2m2LJK5MJna7b0GOqUB8KIbK%2FQesXZmLyuGDWhCiEo0EW2IaZOLXmwttVYNCR3HleMZLb0vujkqOO81SWKQgM2IZYrdy9xsFKrUk3qB1zX76COU9EdNUsvwfJe6FfoM6nmfaD4QcvD75hmI4oJJNh2Z6ZH%2FqNmhXW2m35WlTvM8mng3Xj%2BuhmNFigD1nJ1JSvXFfziTr9TbXo%2FdINBsoQMxA21SwmxubpzjrDHZya68IpZA&X-Amz-Signature=3481b0b127d27ca79569e08229d4fce5acadeb61ffc61cd89013cca880da9f38&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
