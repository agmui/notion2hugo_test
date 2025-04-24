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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN4SRFCT%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIBjCjdgEOLMyj%2FjNCfbg5%2Fbd%2FxoAx%2BQSdEWbNqbdJMMUAiASbcaJEwdSOh6LvjArU4qihS8pBC2AR4kfNzc1ylmksSr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMAAHhZK2GOcPmSP%2F5KtwDSkn5VNL01b%2FiALSZJkO%2BxvcWs4qz3WJjSW9DZA0hlaoQ2%2BKe0xZhFbL06YNRXJM%2F%2FNeCex95OUwS4w3Hn7uaa4z6DoXk71V3TmFxC37uiq37sBq42EA5emK1ljX5IpQUh2BWjBYnqv1vRU01OXjMTzKYHF5TBxuDcPk1hq9i2VfdupPoM7c0gKVTkRgZ64NcQBA5IkCcLZ%2F75HxoV1WtXpJBUTn9FdJw3C4v7YLRixLetlDNFP8Xc4ewgFLc7NhdEZifY2Uz4CpKlBwNa9bPpBG30CgYG09iSNgd9QLENmm53%2B%2FYTWo2PqfN5Afbv88k%2FSmxPWOax%2Fi5MRB7%2F8vcXuyNH4K%2BJT2uVM%2FyWKqmE7FcKR7EpRS5Hcj4ykb36F63fM2pG9KMhscKcl42dlosiidriGcF6x0z1ckO9acZUY%2F6uNmGoOCUYx6h%2FpArv8wM6UUFx%2BUD4FG0j%2FWrWUdktCfY8RJH5uOxzyoDbuB8hrFD7cE%2BnzSBCmNfnV0QLHgESPDJihI40bkZgqH9hMMQrGdWvhTFg4v9BSqHIARQo0YXhxPB9OoeseCptBMO3fBgsFhuFkrXLqawpYwgyKVelVKn8amvtB4guwd1acZro8eu39mvt8kOL5enRmMwyp%2BpwAY6pgF1C0ZkIcDP99I0twzELpucZPsCrJ9P8ron1dCimLyoN4TbGEf%2F0jbeoe1P4yEujNOoyvO6grt3OKEhl39UsCY%2B9EdPWFs7b7e591DunFn9KNjLWcLa2EyQ4B0hwHAhilAsN2sn4mY8gPmLHEXlqVgXVZFcPVFVCP4rcAuxoXVsArKcu4HtccI81Jxk%2BeHyR%2BNH%2Bm77oL23A6%2Fr7P2QxU6xOu%2F%2FXpWm&X-Amz-Signature=2aec6dfe7809bc4da0a78317638c9b1780897ea473ef42cdee9c2d18b25a2e08&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN4SRFCT%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIBjCjdgEOLMyj%2FjNCfbg5%2Fbd%2FxoAx%2BQSdEWbNqbdJMMUAiASbcaJEwdSOh6LvjArU4qihS8pBC2AR4kfNzc1ylmksSr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMAAHhZK2GOcPmSP%2F5KtwDSkn5VNL01b%2FiALSZJkO%2BxvcWs4qz3WJjSW9DZA0hlaoQ2%2BKe0xZhFbL06YNRXJM%2F%2FNeCex95OUwS4w3Hn7uaa4z6DoXk71V3TmFxC37uiq37sBq42EA5emK1ljX5IpQUh2BWjBYnqv1vRU01OXjMTzKYHF5TBxuDcPk1hq9i2VfdupPoM7c0gKVTkRgZ64NcQBA5IkCcLZ%2F75HxoV1WtXpJBUTn9FdJw3C4v7YLRixLetlDNFP8Xc4ewgFLc7NhdEZifY2Uz4CpKlBwNa9bPpBG30CgYG09iSNgd9QLENmm53%2B%2FYTWo2PqfN5Afbv88k%2FSmxPWOax%2Fi5MRB7%2F8vcXuyNH4K%2BJT2uVM%2FyWKqmE7FcKR7EpRS5Hcj4ykb36F63fM2pG9KMhscKcl42dlosiidriGcF6x0z1ckO9acZUY%2F6uNmGoOCUYx6h%2FpArv8wM6UUFx%2BUD4FG0j%2FWrWUdktCfY8RJH5uOxzyoDbuB8hrFD7cE%2BnzSBCmNfnV0QLHgESPDJihI40bkZgqH9hMMQrGdWvhTFg4v9BSqHIARQo0YXhxPB9OoeseCptBMO3fBgsFhuFkrXLqawpYwgyKVelVKn8amvtB4guwd1acZro8eu39mvt8kOL5enRmMwyp%2BpwAY6pgF1C0ZkIcDP99I0twzELpucZPsCrJ9P8ron1dCimLyoN4TbGEf%2F0jbeoe1P4yEujNOoyvO6grt3OKEhl39UsCY%2B9EdPWFs7b7e591DunFn9KNjLWcLa2EyQ4B0hwHAhilAsN2sn4mY8gPmLHEXlqVgXVZFcPVFVCP4rcAuxoXVsArKcu4HtccI81Jxk%2BeHyR%2BNH%2Bm77oL23A6%2Fr7P2QxU6xOu%2F%2FXpWm&X-Amz-Signature=a7c7c7b7175512d4ccdc297d9fa7957dded6691612f37446dcbe2d42c8fea14d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
