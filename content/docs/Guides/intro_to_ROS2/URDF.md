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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3HJYFAA%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNfrtpn4gwkblxOYJ5O%2Fr3mzALwDxeaQkUZxKZfgtpWgIgX4QsFtzTLAPKyaB1u9GeankAozh9CpkUawnrbqaY9LAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMZHcTqs%2Frr%2FUAl6vSrcA3xOXt5tLFJEbpbyETaGb5uffnqVVRA8QK3TeDvgeBi5z1KRzlffQcgBYw%2BClI6Vg7rL3D6f1XkFs781DBZr5mmES3mengPxR2dk8nIHlx5zm651jgncZ0mwnvZpT3ATirjTHHuhQ1B3SqSlOf6fgknTI7I4cUSM7ssgW3HpXKo%2FCJPRcxFSy9E%2BIYVpKK89a%2FNGtXyMFqYE9XQhxHBvPkzfhn19Iakhv5ETmbnEqZlhq6AyyIcE3fGYbKjPMVMlGqQFc0Jy5PuK%2ByZzab5sUVOH9bGVe%2FpH7A5tSt%2BEvXwJV7%2Bwu1JIZzbKwtQx1pgQPlEy%2F6K%2B5bul744%2B9kIRwrgoYPPKCSA53g3mHxPxJ5iUKYPJICFtywgGmgB%2BUXj64NBvIthYl0jK%2BUlveHZADe7CrHlVFofTW16fqF3kOFuJ%2FsUboY8yc16Tjb3OQLQsALlJrfAxwLp4Q3GYGGk7ax0WcJxVI5E2KmLC90ky4cjGUkBiFs31qQ2yCJL7T2NUgSwGP%2Bh3w8f%2FHHvy5bo9E%2BdAlnmzSKZ7wIBhxxER1bKZnvHY1Q28D0iLMoJs7KNoJa2uhC5iiNe%2B8Kw83UJQAE%2BIszvN3w%2FkGGqL27ty%2FlWUpYKPKN106VVQK9sEMKbcn8EGOqUBcNQnHWPcE3SRbJQ7oHDt4XZDBfzVhHkRZYdG2yV94fDeXxT32o3D8pxv6yKst6lBvLg2%2B0S1KEWcEv3JjeelpbBndkrNQpjoieWwhxAAv0gX%2FDHHw3%2FPLA7LtNfIMYgBIyiy8Z93f5MvnQyooXpnzW4GEfJds8VDz3CNEVgnkB8Unu7ei%2FufGz2qdmcF4NRmakLQhq%2FwmKoIt3RAED28vF1sBmYx&X-Amz-Signature=265016c6a704f82ea549f07870e52a5ca815a2758d9609727106ff6fa0501323&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3HJYFAA%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNfrtpn4gwkblxOYJ5O%2Fr3mzALwDxeaQkUZxKZfgtpWgIgX4QsFtzTLAPKyaB1u9GeankAozh9CpkUawnrbqaY9LAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMZHcTqs%2Frr%2FUAl6vSrcA3xOXt5tLFJEbpbyETaGb5uffnqVVRA8QK3TeDvgeBi5z1KRzlffQcgBYw%2BClI6Vg7rL3D6f1XkFs781DBZr5mmES3mengPxR2dk8nIHlx5zm651jgncZ0mwnvZpT3ATirjTHHuhQ1B3SqSlOf6fgknTI7I4cUSM7ssgW3HpXKo%2FCJPRcxFSy9E%2BIYVpKK89a%2FNGtXyMFqYE9XQhxHBvPkzfhn19Iakhv5ETmbnEqZlhq6AyyIcE3fGYbKjPMVMlGqQFc0Jy5PuK%2ByZzab5sUVOH9bGVe%2FpH7A5tSt%2BEvXwJV7%2Bwu1JIZzbKwtQx1pgQPlEy%2F6K%2B5bul744%2B9kIRwrgoYPPKCSA53g3mHxPxJ5iUKYPJICFtywgGmgB%2BUXj64NBvIthYl0jK%2BUlveHZADe7CrHlVFofTW16fqF3kOFuJ%2FsUboY8yc16Tjb3OQLQsALlJrfAxwLp4Q3GYGGk7ax0WcJxVI5E2KmLC90ky4cjGUkBiFs31qQ2yCJL7T2NUgSwGP%2Bh3w8f%2FHHvy5bo9E%2BdAlnmzSKZ7wIBhxxER1bKZnvHY1Q28D0iLMoJs7KNoJa2uhC5iiNe%2B8Kw83UJQAE%2BIszvN3w%2FkGGqL27ty%2FlWUpYKPKN106VVQK9sEMKbcn8EGOqUBcNQnHWPcE3SRbJQ7oHDt4XZDBfzVhHkRZYdG2yV94fDeXxT32o3D8pxv6yKst6lBvLg2%2B0S1KEWcEv3JjeelpbBndkrNQpjoieWwhxAAv0gX%2FDHHw3%2FPLA7LtNfIMYgBIyiy8Z93f5MvnQyooXpnzW4GEfJds8VDz3CNEVgnkB8Unu7ei%2FufGz2qdmcF4NRmakLQhq%2FwmKoIt3RAED28vF1sBmYx&X-Amz-Signature=9610cb541ff03490b4d589334af0c514bac25dad360b75290b67b4bf85c47dbf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
