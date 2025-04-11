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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCKQDKOU%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQC3iQY%2BBfUu75JLCbQEXxF8lBRkSs0K7YDoLyupxW1GhgIhAIX1U43ggPJ8NR6QLYNzbiEQUtodjF6Mx9Liki2JWy73KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykLK0kZkMFEXp9sSYq3APpxQ7OVayzb77g6AEzu3laL9Rj%2Fc%2F878mJWPaJcwcKupzQ%2FCQ%2BLXJqLq1hTcWrKZPfvI9KkQHus8Ichr2bdxd2uYj8SRVzm39dx%2BGW8JFCQQh4K9NWI4QT7f0jUaGOOKny0sQ8JMcVTB5c9v33%2Fido%2F%2FqddYRyPidkgpiX68jePUZxSFdUmMZQRFJx2mgGjtLB9P5QBxzGSqxU0t%2FACwU1kreQtYzFJOUGfLrS%2BBhAtSshGGO6SM7M1Fv0GcueFiXWd1LcAcZfgVe7amurn2dlJNgvkvrHxG4fT3JPfiWs87Rb8hxusmBT1Zsv93jZoIAAqObJ4N6UBLYgcuqj3HSkv5XJ0gUt1cKwKXZu0j%2BA5hEHQGl3lbD43v2OZKrpAUOQM2v8MU4%2Fhe1W%2Fq%2BpQYNKBmZFydnews6w%2F5I71O0gyceG8YQYdK9VbK9XpixQNcb5qAcYryp3MtM3uoGD8bYsXuRN7aq0msqlI9UmdwH8Z89AIvRl7Hulfbm%2FnDgYgZ2MMYXnzodO73W3v37vzbnu4cP%2Bp7Ec4WL1nUOj7JjK888mqLrGUUaXkTG2uV9Nc5wK3DyfucU9%2Fgmtf5hX1Zh9%2BlYMCSIfsp%2Bf2FrB68BDVhVrQq529IOdWfvTBjD3teS%2FBjqkAaNcpFh57W8WtndRt%2F9Cc%2BVnoccrbfjxlcP6Ai7JbMgwz0qJfiNGXb77MOntbb01%2B3nko%2B2Fw7MNPVxYjnOWkgLyyUo3OnKQgrmqpb3DN8o%2F1c0daWX27xhFfZA%2BTMBs3BG%2Fb%2BzTh5dLXTmu%2FZPTTJw%2FKglW8XZIZjgXOiUP24AVKJ6PKvlu8ekCHzWicZzJNI5V%2BdT%2BNUSfKlr10Ne9Cg%2F9df%2Fe&X-Amz-Signature=ec847562c78fc10fab4eba1119dc6b58a35966fa2cb06f5fe10e52b5a2ca6058&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCKQDKOU%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQC3iQY%2BBfUu75JLCbQEXxF8lBRkSs0K7YDoLyupxW1GhgIhAIX1U43ggPJ8NR6QLYNzbiEQUtodjF6Mx9Liki2JWy73KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykLK0kZkMFEXp9sSYq3APpxQ7OVayzb77g6AEzu3laL9Rj%2Fc%2F878mJWPaJcwcKupzQ%2FCQ%2BLXJqLq1hTcWrKZPfvI9KkQHus8Ichr2bdxd2uYj8SRVzm39dx%2BGW8JFCQQh4K9NWI4QT7f0jUaGOOKny0sQ8JMcVTB5c9v33%2Fido%2F%2FqddYRyPidkgpiX68jePUZxSFdUmMZQRFJx2mgGjtLB9P5QBxzGSqxU0t%2FACwU1kreQtYzFJOUGfLrS%2BBhAtSshGGO6SM7M1Fv0GcueFiXWd1LcAcZfgVe7amurn2dlJNgvkvrHxG4fT3JPfiWs87Rb8hxusmBT1Zsv93jZoIAAqObJ4N6UBLYgcuqj3HSkv5XJ0gUt1cKwKXZu0j%2BA5hEHQGl3lbD43v2OZKrpAUOQM2v8MU4%2Fhe1W%2Fq%2BpQYNKBmZFydnews6w%2F5I71O0gyceG8YQYdK9VbK9XpixQNcb5qAcYryp3MtM3uoGD8bYsXuRN7aq0msqlI9UmdwH8Z89AIvRl7Hulfbm%2FnDgYgZ2MMYXnzodO73W3v37vzbnu4cP%2Bp7Ec4WL1nUOj7JjK888mqLrGUUaXkTG2uV9Nc5wK3DyfucU9%2Fgmtf5hX1Zh9%2BlYMCSIfsp%2Bf2FrB68BDVhVrQq529IOdWfvTBjD3teS%2FBjqkAaNcpFh57W8WtndRt%2F9Cc%2BVnoccrbfjxlcP6Ai7JbMgwz0qJfiNGXb77MOntbb01%2B3nko%2B2Fw7MNPVxYjnOWkgLyyUo3OnKQgrmqpb3DN8o%2F1c0daWX27xhFfZA%2BTMBs3BG%2Fb%2BzTh5dLXTmu%2FZPTTJw%2FKglW8XZIZjgXOiUP24AVKJ6PKvlu8ekCHzWicZzJNI5V%2BdT%2BNUSfKlr10Ne9Cg%2F9df%2Fe&X-Amz-Signature=86265b9010067c8fedc6b9aab8349ed47ea021efb279a726de7dbd228d83ecf8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
