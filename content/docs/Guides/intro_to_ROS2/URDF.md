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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFQFGXLX%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG53b%2BN%2BBIMbCIn7Ty35YcuYFiHkq7Cx0%2F91d3JWy69%2FAiBPlf0cz6DH3ZxZ70esSOzv7ANIgrgzCXAZMHgumS%2BOmSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMKdno5kY9TKoEWY7KtwDTmYYTYdVJiyEd%2Bg%2FUjHb5kTMAWN5YTv7BsqAdO5qg7Qkv%2FgZCeB5wD8qTex%2BXJl1rEB5DtIyhDAxOdvV9%2F9uqqHYOfYI1ovEvdKRw9PkB0tJPKOWiY3NGbbOZX1sthuGpgVed0%2BWW3H0txEwmuUouu8B6%2BU5VqvsDQbbbazlJ8dELWVUA8c%2Bp5g%2FNgRp7TSfPImmGqN2JUZQhQZCwkTYPc0W9oRyhq0EgAXjIrN7UDyGhNAW9P1ureIPxhPeEbpn%2BPQoWshEtwXhNUrM6k8ZKbq11Xnp%2BqCcmFWS3J6vpZC2hpRQukwNL0ejvH9Roto3%2BR%2BcR3rWbiVjzWJbZGNNA%2F4FEg6TiFrGjjIlkrvkvF1oVJ1sky2GbcsZbFKhnMROOwb59391G9VUG8VasJ12ZZ19cjp5z5gs8yGYLVaeo%2FnoIR56mQwl3CyTLt8V88etw%2BgKIV%2FrYHZguKwDCbF9JxbvCkqpO0gOFaWCqj1t3gaUx%2BNIG7gnYBgzF7b5YMEJKTDOzAu1WDpcZHoBIyiusL6GBiAMj7j%2F83yZ7Qi4CMFThipHJCGsSxMs00P%2B%2B5BzhMArdwynHbXegbJWaPnHbtDTuajGiIBneI1CCG%2FdYJfOBPaE855Y%2BpaGXEYwk5OUwwY6pgGbpIS6zY7yljkHfjtPB9XIWOMKxoJXGHNDphA6v21n5oa6bjT%2BikRf2MNJ%2B1F6ET776FU0d0TsfaqE14QzL5GGZocGeqbij4T67cZL7xXrbgIYmUVlTWwq1ELETiS5ffotWTIr5rwZnX84FDYK4vzV%2FL5jDQCELlGkV9N8W2NkxpRMkEsSkTNVGh%2F3Zk7StGQdz60SvMG23FSt50WzFM3nQ7xleOM9&X-Amz-Signature=b8846c7d781d81f7f43c978d7b47358e4949c7d2edcbcbcf89a5c96af7d7fafe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFQFGXLX%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG53b%2BN%2BBIMbCIn7Ty35YcuYFiHkq7Cx0%2F91d3JWy69%2FAiBPlf0cz6DH3ZxZ70esSOzv7ANIgrgzCXAZMHgumS%2BOmSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMKdno5kY9TKoEWY7KtwDTmYYTYdVJiyEd%2Bg%2FUjHb5kTMAWN5YTv7BsqAdO5qg7Qkv%2FgZCeB5wD8qTex%2BXJl1rEB5DtIyhDAxOdvV9%2F9uqqHYOfYI1ovEvdKRw9PkB0tJPKOWiY3NGbbOZX1sthuGpgVed0%2BWW3H0txEwmuUouu8B6%2BU5VqvsDQbbbazlJ8dELWVUA8c%2Bp5g%2FNgRp7TSfPImmGqN2JUZQhQZCwkTYPc0W9oRyhq0EgAXjIrN7UDyGhNAW9P1ureIPxhPeEbpn%2BPQoWshEtwXhNUrM6k8ZKbq11Xnp%2BqCcmFWS3J6vpZC2hpRQukwNL0ejvH9Roto3%2BR%2BcR3rWbiVjzWJbZGNNA%2F4FEg6TiFrGjjIlkrvkvF1oVJ1sky2GbcsZbFKhnMROOwb59391G9VUG8VasJ12ZZ19cjp5z5gs8yGYLVaeo%2FnoIR56mQwl3CyTLt8V88etw%2BgKIV%2FrYHZguKwDCbF9JxbvCkqpO0gOFaWCqj1t3gaUx%2BNIG7gnYBgzF7b5YMEJKTDOzAu1WDpcZHoBIyiusL6GBiAMj7j%2F83yZ7Qi4CMFThipHJCGsSxMs00P%2B%2B5BzhMArdwynHbXegbJWaPnHbtDTuajGiIBneI1CCG%2FdYJfOBPaE855Y%2BpaGXEYwk5OUwwY6pgGbpIS6zY7yljkHfjtPB9XIWOMKxoJXGHNDphA6v21n5oa6bjT%2BikRf2MNJ%2B1F6ET776FU0d0TsfaqE14QzL5GGZocGeqbij4T67cZL7xXrbgIYmUVlTWwq1ELETiS5ffotWTIr5rwZnX84FDYK4vzV%2FL5jDQCELlGkV9N8W2NkxpRMkEsSkTNVGh%2F3Zk7StGQdz60SvMG23FSt50WzFM3nQ7xleOM9&X-Amz-Signature=598ce4d3169bd0c929de7ee7cb49e0bd97562301cdc20d4a4d24ff6cd0ee6766&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
