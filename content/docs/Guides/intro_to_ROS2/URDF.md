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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5UKZ7P4%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDr3oiyMakl25gRecERW2l2G3WmvxuGQWp2HYi6ACp52AIhAOtfztVsMMt1ZT0PCUP3a4YZLateGiADeiM4LTETCGUbKv8DCHMQABoMNjM3NDIzMTgzODA1IgzXUxUpCWA6PPtIpmsq3AOg%2BZsSWdGuvg%2B%2BvS5mKe0rX5ytAygFg09pZ9Lv96Rg79e23WXJr9KXBQZ97WcbnXyBEo8jzyXMPT46ZecOKxEPXn3f6jjRY%2Fr%2FQ5CYZdis44amtuXwVlnygVJGniz1AHRVdg3G3vQuqfKJ1aSPyIbFlG10p0gTjRxPH%2FweRCXAAq4IKjmd8dIEqKx%2Fml7nN6gscQLBzxLwWC9QZDaNXd5xE33Ta1NqWN96TvpzNp2FlgOEcOdgwhZfQAT9DDHXVlnAbzsU6WexBtyXz%2Fqirs6G2ejBz25gk28fRGCG65eLOnQ2aoBlqJvEZ9Kcshme0LkdMpqswiSPWI4qjQleE41BXNGZ58gJCxlpE6FhDz3x0YWus4A%2Bx6b515o8TRoO6AWBJnn22Dg529NfB4Nj2k4C%2FmwceeIXFIAihou6BJH3mHn%2F1Z3hrA8bizjmLc4YUXxfrH5vs9qux7x02lDW42215ZspqzNcV4Qv9P3wzx8BnQWTDkyqCEUsAaj0f4oYr8ocnd97qFWWXBMVVC2MTEalA3kxnScCSzSlkBnDEc43nQnCY7ZBObA%2BDI0CiNXxTqi8%2BONBtbEbjO0Pk4oS16oR3ni2qpOKl1YvUgYE5Y2yVHdEh6McamHtlTHcaTCZ1PnCBjqkATeRcI141%2Fu%2FEMKV%2BK26qSzUUJudt3V8C9M6ZeKGBbgpWBLgfXVcTd%2Bn3Trw113QJ8yiNnVEmXjPSECBbgNercmRjErkzosqSjrFiv%2FCXwnVg06%2FjdJVxxKREujt6FGlQygdHgSMZE56SsLpWZmYKMrseP8z1Sdo8xtasPQONK%2F%2BoPCcbCgd8hQPzR7SPAio5fO1IHOxjof9a9E18%2FjYOqmqdSii&X-Amz-Signature=c45c061bd89951522a05d7a32d7a4f5654583d4bf963109a67e83d441d439d23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5UKZ7P4%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDr3oiyMakl25gRecERW2l2G3WmvxuGQWp2HYi6ACp52AIhAOtfztVsMMt1ZT0PCUP3a4YZLateGiADeiM4LTETCGUbKv8DCHMQABoMNjM3NDIzMTgzODA1IgzXUxUpCWA6PPtIpmsq3AOg%2BZsSWdGuvg%2B%2BvS5mKe0rX5ytAygFg09pZ9Lv96Rg79e23WXJr9KXBQZ97WcbnXyBEo8jzyXMPT46ZecOKxEPXn3f6jjRY%2Fr%2FQ5CYZdis44amtuXwVlnygVJGniz1AHRVdg3G3vQuqfKJ1aSPyIbFlG10p0gTjRxPH%2FweRCXAAq4IKjmd8dIEqKx%2Fml7nN6gscQLBzxLwWC9QZDaNXd5xE33Ta1NqWN96TvpzNp2FlgOEcOdgwhZfQAT9DDHXVlnAbzsU6WexBtyXz%2Fqirs6G2ejBz25gk28fRGCG65eLOnQ2aoBlqJvEZ9Kcshme0LkdMpqswiSPWI4qjQleE41BXNGZ58gJCxlpE6FhDz3x0YWus4A%2Bx6b515o8TRoO6AWBJnn22Dg529NfB4Nj2k4C%2FmwceeIXFIAihou6BJH3mHn%2F1Z3hrA8bizjmLc4YUXxfrH5vs9qux7x02lDW42215ZspqzNcV4Qv9P3wzx8BnQWTDkyqCEUsAaj0f4oYr8ocnd97qFWWXBMVVC2MTEalA3kxnScCSzSlkBnDEc43nQnCY7ZBObA%2BDI0CiNXxTqi8%2BONBtbEbjO0Pk4oS16oR3ni2qpOKl1YvUgYE5Y2yVHdEh6McamHtlTHcaTCZ1PnCBjqkATeRcI141%2Fu%2FEMKV%2BK26qSzUUJudt3V8C9M6ZeKGBbgpWBLgfXVcTd%2Bn3Trw113QJ8yiNnVEmXjPSECBbgNercmRjErkzosqSjrFiv%2FCXwnVg06%2FjdJVxxKREujt6FGlQygdHgSMZE56SsLpWZmYKMrseP8z1Sdo8xtasPQONK%2F%2BoPCcbCgd8hQPzR7SPAio5fO1IHOxjof9a9E18%2FjYOqmqdSii&X-Amz-Signature=d71540c2623922abd497384216d6aa5f82a193734c47dfec7bc44a7c0c5844ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
