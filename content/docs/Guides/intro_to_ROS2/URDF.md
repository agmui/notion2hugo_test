---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466656GHW57%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIFFwixM84qH5U4cZu%2FoSbW6T7EYn2VbKZrL3GluB8j8jAiEAhToQ6UNiQkKjpF2G%2Bj2ZTLh6IMrkxQGfXj5gr1n57VEqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNWUE2Y0j7r2J0y4VircAzPtexuy%2BvKRHOE%2BeBOFmYFl9K6%2BBHnzWh%2Fh749lWmCFYSKPQwClCmzJ8XIu5JFtJbxOnD%2FWwoEnL5xHhFWi6AHH4QRSOYLakvNXbZTbKqq1ZS%2BSdeYF6Gmaa27RBTFSX248pRfhy586KrDrBGZHZXj7NRvMOrf0CvbZpRJLkADAXgvBEhDJTNECC4fjLtj1SWTqGwBdvKc0BGqSYuyyxWtGzkRqRbJvqzTwIgdsxm2dUgHC1q%2BxpsVM7p%2F4f%2FDMMIM2BQOmD1rgI1HEGOOSnRpFxllzchNKE7fFKWUR2D8gAY6Kq%2BdhvalQWzj%2BgpGGp8sTQl9vSonfszgHAStuvNFc6t7OG4Hjkr0VX0TOWuZWjqiK7Z0swvz6oClZwbgcCEdrPI%2Fu9pnwdu7o6vnHcX%2BR3YEGgNyNI6IKLphBuKmoP2rsgk91et1IEzkeh%2BIX2oKP5E8BzCp2ECzblXivkjZJCNkVfmcX8r9HclF%2BGuqxoaamKqIex83RALxJ0NzD02e4QEdf%2FAwGJnrXH%2Brq4rljFFDZ0n0aYr4Lju8GLnsHVKwuIjOc781jO4ZdKygKRikJJoluEkomkvDhiOm4Rp%2BzY7PmOXGx%2FQd814uC5p1gWAnGuEn8aJsB7qShMMjez8cGOqUB9rPqX440FiyIdevKsUcNv3G3fI1i23Mf4ZNtwNkgXe6Tavj7NzE%2BK2QE1Tvut0Cgztx%2FR6srDn2py6HMH7PXytNr%2Fv15huzNjElpTKoAqv8f0N6Qg7A%2BkGKBcwWk4i8wy9YL7suhP8orQ48f%2BcfMz9hh7F9pN6CS7m9pj2lDQ%2B%2F3UKR%2F8vOd0rnQIn%2F4ZX2989Mqks8HJFymJBq7kOmxtlLxPPm2&X-Amz-Signature=38fd99c12b603d0188c2738b638d15174ab7c8b39286063e575601fc264e36db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466656GHW57%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIFFwixM84qH5U4cZu%2FoSbW6T7EYn2VbKZrL3GluB8j8jAiEAhToQ6UNiQkKjpF2G%2Bj2ZTLh6IMrkxQGfXj5gr1n57VEqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNWUE2Y0j7r2J0y4VircAzPtexuy%2BvKRHOE%2BeBOFmYFl9K6%2BBHnzWh%2Fh749lWmCFYSKPQwClCmzJ8XIu5JFtJbxOnD%2FWwoEnL5xHhFWi6AHH4QRSOYLakvNXbZTbKqq1ZS%2BSdeYF6Gmaa27RBTFSX248pRfhy586KrDrBGZHZXj7NRvMOrf0CvbZpRJLkADAXgvBEhDJTNECC4fjLtj1SWTqGwBdvKc0BGqSYuyyxWtGzkRqRbJvqzTwIgdsxm2dUgHC1q%2BxpsVM7p%2F4f%2FDMMIM2BQOmD1rgI1HEGOOSnRpFxllzchNKE7fFKWUR2D8gAY6Kq%2BdhvalQWzj%2BgpGGp8sTQl9vSonfszgHAStuvNFc6t7OG4Hjkr0VX0TOWuZWjqiK7Z0swvz6oClZwbgcCEdrPI%2Fu9pnwdu7o6vnHcX%2BR3YEGgNyNI6IKLphBuKmoP2rsgk91et1IEzkeh%2BIX2oKP5E8BzCp2ECzblXivkjZJCNkVfmcX8r9HclF%2BGuqxoaamKqIex83RALxJ0NzD02e4QEdf%2FAwGJnrXH%2Brq4rljFFDZ0n0aYr4Lju8GLnsHVKwuIjOc781jO4ZdKygKRikJJoluEkomkvDhiOm4Rp%2BzY7PmOXGx%2FQd814uC5p1gWAnGuEn8aJsB7qShMMjez8cGOqUB9rPqX440FiyIdevKsUcNv3G3fI1i23Mf4ZNtwNkgXe6Tavj7NzE%2BK2QE1Tvut0Cgztx%2FR6srDn2py6HMH7PXytNr%2Fv15huzNjElpTKoAqv8f0N6Qg7A%2BkGKBcwWk4i8wy9YL7suhP8orQ48f%2BcfMz9hh7F9pN6CS7m9pj2lDQ%2B%2F3UKR%2F8vOd0rnQIn%2F4ZX2989Mqks8HJFymJBq7kOmxtlLxPPm2&X-Amz-Signature=eff6e57ec1d119c6b8f55a8e1deee35901035eb3bbb92a277d077c377c258590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
