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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD22YHNJ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T061123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4fa9j68swpakPqome%2FOmxd%2FPydxQf9tr3W99eNp8NnQIhANQDvb9oPWKjEFOTTwkeacoyukS5kHL8Q5L%2Fxoajlx3zKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpQ1pUFe3jVhC2l8kq3ANsX7FjwOZNU5wuDqGmoO1h3ObUakEWY10O9l%2Ft4PLlNUAL0xRh83nvXR1eyShp3a0cbhJymncrokMNVV%2FlimQfseM514KIuz7Qo%2BB%2FPKgruz8deoe8ykCyf18oG%2BTEcDcPlLDvh7j4OhFIVqiKbIY76N2QRlFssZFIjQMpt5KXQykXYQNto0mOP9tYc7Fl5JmtYrsh0uQERHxcBc9TQzjgon5l7BcjCEJOXfKXOMmCHi3m%2Baa%2FHij%2FfXObENSRmL4q%2BGVdKJ02xCGf7W5RMN9d7ADxBSF62zWdgMMDeRQBdY0W0Az56gbt4qVoOuPxv%2F5uSzW7xS%2FR1njtSpW%2Fvi88gWXTcrEpQy%2FBdj011%2FIzb1myTsUuho3AzWvm7vED5SZLQy4SGyViPDEaUrMAcBJz2WK6tsD%2BhkHI3cZfmQf9SmU4MUP1f2kcUbUu3X%2FVdg0IVPsx%2BfY0T7zqoyT2%2FFJV1KgDOi9k92vPRSSZT0Smyl3rl5B97LVCY3RdM7Yj8VypZz1Lleex623sb9l9T%2BziGvT4zp2z0d%2FTknnEkzhvSDZrpKkKuRU23DDjA5JAit4h3zrrZG57vgeB6e2%2F7KOLMNLWwoTF0oR1ZthQPIKpRzt4Gty7gnj2i0wu%2BDD9i8%2B%2BBjqkAWxUzmQS8RmMEBtpbjCr7NG5HgQn7WZYy7WdPWTaAoZ7XJ2WuzIZFW65rf3BIMazTgUiEobs737xp1RowB%2FL5camomfvRsWdOG0E5wKmwlkjBaVVE12jcapG3X0TGDkZqcSNJOf7OiSWUh5hY4jyZGsR0GSoMNpU2LWYzx%2BxI4sR7LqiwZSRjrAyNPrN6%2FvJR4tHajW0EHPUxiajFZoYf9YNo8it&X-Amz-Signature=e1d2a8551cae5bd9d6dd19cea2058c7e31ab617e4f834fdb895ab44b3f01105e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD22YHNJ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T061123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4fa9j68swpakPqome%2FOmxd%2FPydxQf9tr3W99eNp8NnQIhANQDvb9oPWKjEFOTTwkeacoyukS5kHL8Q5L%2Fxoajlx3zKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpQ1pUFe3jVhC2l8kq3ANsX7FjwOZNU5wuDqGmoO1h3ObUakEWY10O9l%2Ft4PLlNUAL0xRh83nvXR1eyShp3a0cbhJymncrokMNVV%2FlimQfseM514KIuz7Qo%2BB%2FPKgruz8deoe8ykCyf18oG%2BTEcDcPlLDvh7j4OhFIVqiKbIY76N2QRlFssZFIjQMpt5KXQykXYQNto0mOP9tYc7Fl5JmtYrsh0uQERHxcBc9TQzjgon5l7BcjCEJOXfKXOMmCHi3m%2Baa%2FHij%2FfXObENSRmL4q%2BGVdKJ02xCGf7W5RMN9d7ADxBSF62zWdgMMDeRQBdY0W0Az56gbt4qVoOuPxv%2F5uSzW7xS%2FR1njtSpW%2Fvi88gWXTcrEpQy%2FBdj011%2FIzb1myTsUuho3AzWvm7vED5SZLQy4SGyViPDEaUrMAcBJz2WK6tsD%2BhkHI3cZfmQf9SmU4MUP1f2kcUbUu3X%2FVdg0IVPsx%2BfY0T7zqoyT2%2FFJV1KgDOi9k92vPRSSZT0Smyl3rl5B97LVCY3RdM7Yj8VypZz1Lleex623sb9l9T%2BziGvT4zp2z0d%2FTknnEkzhvSDZrpKkKuRU23DDjA5JAit4h3zrrZG57vgeB6e2%2F7KOLMNLWwoTF0oR1ZthQPIKpRzt4Gty7gnj2i0wu%2BDD9i8%2B%2BBjqkAWxUzmQS8RmMEBtpbjCr7NG5HgQn7WZYy7WdPWTaAoZ7XJ2WuzIZFW65rf3BIMazTgUiEobs737xp1RowB%2FL5camomfvRsWdOG0E5wKmwlkjBaVVE12jcapG3X0TGDkZqcSNJOf7OiSWUh5hY4jyZGsR0GSoMNpU2LWYzx%2BxI4sR7LqiwZSRjrAyNPrN6%2FvJR4tHajW0EHPUxiajFZoYf9YNo8it&X-Amz-Signature=a98dccb2da602f0280a5eacbd555ff2af6a1a5cd491418a7ebae86dd7266d2a5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
