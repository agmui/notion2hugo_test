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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW7K6CNU%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIGkw%2FcaIPT93pGVcCVjMLppbI1usinEJZbx7IekCc8CtAiA0dSjxPOV%2By7g%2BZadw3lnZ8ocmE8UV%2Fcj9vjAW4I9fVyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiYUxbGRn%2BTp8CWx9KtwDhgN%2FqEsvoNAUjNIVqa47YHMz2%2B3Qvygh8NwszAQJDY2BYOYuAHj90VzPbJpCRcuB4evg0Z8f2Cs9nXSc6l6AHIGQZ9UpWXCo4Th4icb5zgmHSrqr%2BN%2BR2rqKfZX9ILKUDCWT6ZetgWfFoKWu2JpCSzwv%2B4JTwo9ofhswwfCGcymYXh60vx8X6oybb2GJzc9ndWa2obFx%2Fr7ZgePlI%2B%2BXzYpK5bVA%2BvFJg%2BbMsya1B3%2BmrAC3PkMtl4oHzIR10ehBW1HhEe6WKQamWKFLq%2BbXPd9XWMKdvn8pBqFn114Lk4XF4K0%2BamQpbrjZWp6%2FUKg4l604vEr9eMD2Gn%2BlifKTYvdZMq4IR01KXF2FjMVzdRalHvm7mLcEoPKxaopjgOESGTyKfSsHxwJc%2FzVbGQwVvHc8t2IUIKqNUYrphm8klKTqoCNjExc867m5OguJfNkavCu3OmjF1sEizdiiuV8rzUWzowzg0CIWf7dKWS6AU47eulaSQId9BKot1FcbbJRP1pRxK3w8sKlYDLla%2FcF3HOzrDXicKdZceTxPsQCP2B%2BMtXiUYNCfBRCizgVoA6pvY8lQJ1FlszT2GSLHHinZqenBgtQWM6I47j7CkIzbgqrNaSo%2FB1qI3Sn2yaAwz9ekwAY6pgGD%2BR%2Bz62nqZRUVr4CBxfMo7iogchUvicWBddI9dSgMUOaQwJz4RuDL0SLtOWbgyuDON4Ss5P%2Fve7vL7frBq2a03J43DTosTDqZ8Bgh0xYNJD%2FvhmYoM1VpawCIVEZ6WijTiWLcyxFJ67xhoLkZC9HQeCwxbBH9m5bQV7NRuLB2zwB%2BEoHWPJb1V6qRyu0SQ2g%2BwFvQ0kJp%2FQ75HFuh0nP5us6X2llx&X-Amz-Signature=4399892a31a47c839f5bc9f9d6e892cd14f0b71b9faef2484d1bbc6c6536b4d9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW7K6CNU%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIGkw%2FcaIPT93pGVcCVjMLppbI1usinEJZbx7IekCc8CtAiA0dSjxPOV%2By7g%2BZadw3lnZ8ocmE8UV%2Fcj9vjAW4I9fVyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiYUxbGRn%2BTp8CWx9KtwDhgN%2FqEsvoNAUjNIVqa47YHMz2%2B3Qvygh8NwszAQJDY2BYOYuAHj90VzPbJpCRcuB4evg0Z8f2Cs9nXSc6l6AHIGQZ9UpWXCo4Th4icb5zgmHSrqr%2BN%2BR2rqKfZX9ILKUDCWT6ZetgWfFoKWu2JpCSzwv%2B4JTwo9ofhswwfCGcymYXh60vx8X6oybb2GJzc9ndWa2obFx%2Fr7ZgePlI%2B%2BXzYpK5bVA%2BvFJg%2BbMsya1B3%2BmrAC3PkMtl4oHzIR10ehBW1HhEe6WKQamWKFLq%2BbXPd9XWMKdvn8pBqFn114Lk4XF4K0%2BamQpbrjZWp6%2FUKg4l604vEr9eMD2Gn%2BlifKTYvdZMq4IR01KXF2FjMVzdRalHvm7mLcEoPKxaopjgOESGTyKfSsHxwJc%2FzVbGQwVvHc8t2IUIKqNUYrphm8klKTqoCNjExc867m5OguJfNkavCu3OmjF1sEizdiiuV8rzUWzowzg0CIWf7dKWS6AU47eulaSQId9BKot1FcbbJRP1pRxK3w8sKlYDLla%2FcF3HOzrDXicKdZceTxPsQCP2B%2BMtXiUYNCfBRCizgVoA6pvY8lQJ1FlszT2GSLHHinZqenBgtQWM6I47j7CkIzbgqrNaSo%2FB1qI3Sn2yaAwz9ekwAY6pgGD%2BR%2Bz62nqZRUVr4CBxfMo7iogchUvicWBddI9dSgMUOaQwJz4RuDL0SLtOWbgyuDON4Ss5P%2Fve7vL7frBq2a03J43DTosTDqZ8Bgh0xYNJD%2FvhmYoM1VpawCIVEZ6WijTiWLcyxFJ67xhoLkZC9HQeCwxbBH9m5bQV7NRuLB2zwB%2BEoHWPJb1V6qRyu0SQ2g%2BwFvQ0kJp%2FQ75HFuh0nP5us6X2llx&X-Amz-Signature=d84a2a41a3fb65c665a230c2fed20ebacfb3a206c89392a513548f1695114df6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
