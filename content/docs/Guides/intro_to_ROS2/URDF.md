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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LLHIYTP%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBo3O0%2Fe8tnZNcMxHnm8gFWnWh4Pu8hguXXGl91AWQRbAiEAkEl%2BxgPGUXjvhRidTkreUYb93nDJz%2FEErso%2FSz6k4O0qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTdkJUYAVY5gFlfMCrcAzXHKTeW3n8WtO%2B%2FmpVwp6EJJDpN54Iw95Bk%2BpaYBKRL%2FBXNkphUVm%2BK1KiL3C%2BDVSw6b5lwpurT5flvkDdTZnexoUSUHf5ukj0J17j3MENyWwWSvPr4KpMU4a%2BbV8QfGdHp1AdiHAVpdoS3wdiWeNVS5I%2FyVEIF07gC3ZP294tnFlveB6HurCsdQaWfckoCYUZKEOAm2OpoBK5Utw9kuaE32KfBH5w0S9gxaQUXqMyBmURA8%2BTeehAbpw97qAMlGgfwd4lmPtEQG5%2BNKpoXpnJZEVig%2Fi3cYmO8w4QCRWny3ktD6kJu18VPWUObTTqWZIAYCQ1GIXxIpGX6XaZzfUo6bm6vZeFWRt3CDUrq9XDZjH6qOf6Ss0A38pYBI6duMleHMHECKqDQJwmnDOyikhzpHFaYARgbe9cYNNTJMoXARJpy3S%2BdQoLG%2F427VbedwrEUjchdQgn8pz9k0JWbpiXjszq6iEmMUtonyWMbP6vZ0u4vx6hKJMAy0kMnZaXpWeXLc6ZVFWHYPgBd8M3Lf9rxYXzMLB2VvGFyLduKXTtoqQm1Em2k93mgtWcZqgxpOLVnIoptBmzRS5j8JlvJOV0W4LqZRm2zuaMaqAevomCJc%2B56DLzp7ibQP%2BHXMOir7bwGOqUB9lGYQnmXue%2Fpu7jzw17dwgIyehqFICsoeL%2BklcFpaZfGjpV4UVLUHmLL%2Fr27fTZy0NMTShYceo%2BSEpWMERwv5glsxjN8z3x1wlL8KCnjz6V%2BACB%2FO79eIjfmIXuooDVP1bBoitfqINKaX9q46vcFs3OVv5hbC45mk1MwdmVXCAPYGwq9KhzzmqUqPJ%2B2%2FcrGybbitqpK6VJ3guv6zX2GjDVLiMUw&X-Amz-Signature=3128fa9b671d10ad49238dc9906c44e4baa26e71bd393c911bd86a711d36f2c5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LLHIYTP%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBo3O0%2Fe8tnZNcMxHnm8gFWnWh4Pu8hguXXGl91AWQRbAiEAkEl%2BxgPGUXjvhRidTkreUYb93nDJz%2FEErso%2FSz6k4O0qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTdkJUYAVY5gFlfMCrcAzXHKTeW3n8WtO%2B%2FmpVwp6EJJDpN54Iw95Bk%2BpaYBKRL%2FBXNkphUVm%2BK1KiL3C%2BDVSw6b5lwpurT5flvkDdTZnexoUSUHf5ukj0J17j3MENyWwWSvPr4KpMU4a%2BbV8QfGdHp1AdiHAVpdoS3wdiWeNVS5I%2FyVEIF07gC3ZP294tnFlveB6HurCsdQaWfckoCYUZKEOAm2OpoBK5Utw9kuaE32KfBH5w0S9gxaQUXqMyBmURA8%2BTeehAbpw97qAMlGgfwd4lmPtEQG5%2BNKpoXpnJZEVig%2Fi3cYmO8w4QCRWny3ktD6kJu18VPWUObTTqWZIAYCQ1GIXxIpGX6XaZzfUo6bm6vZeFWRt3CDUrq9XDZjH6qOf6Ss0A38pYBI6duMleHMHECKqDQJwmnDOyikhzpHFaYARgbe9cYNNTJMoXARJpy3S%2BdQoLG%2F427VbedwrEUjchdQgn8pz9k0JWbpiXjszq6iEmMUtonyWMbP6vZ0u4vx6hKJMAy0kMnZaXpWeXLc6ZVFWHYPgBd8M3Lf9rxYXzMLB2VvGFyLduKXTtoqQm1Em2k93mgtWcZqgxpOLVnIoptBmzRS5j8JlvJOV0W4LqZRm2zuaMaqAevomCJc%2B56DLzp7ibQP%2BHXMOir7bwGOqUB9lGYQnmXue%2Fpu7jzw17dwgIyehqFICsoeL%2BklcFpaZfGjpV4UVLUHmLL%2Fr27fTZy0NMTShYceo%2BSEpWMERwv5glsxjN8z3x1wlL8KCnjz6V%2BACB%2FO79eIjfmIXuooDVP1bBoitfqINKaX9q46vcFs3OVv5hbC45mk1MwdmVXCAPYGwq9KhzzmqUqPJ%2B2%2FcrGybbitqpK6VJ3guv6zX2GjDVLiMUw&X-Amz-Signature=21c39e0de98edb91196b6b7b5a502c6c485cce8b43471c0aba50b078583f6e05&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
