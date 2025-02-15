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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTXOSTSP%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIAoEGCOkBgUh8ueHRBi5%2FkTK1in3jUPTXm7dI%2F3ezIqTAiEAi822Cprl203psCrgsITX9ToKx%2BRZ8NdMQh4QqzHUJ8sq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEZb6ALHB9qHBRayESrcA964SR4Hj8N71s2grnUWwXU0Jx5RdN75AlS47EzggGeodrpVfCzD%2Fn0g8X%2BSkLXNdR%2F%2BB%2Fc41LnPL%2FcAAI1T%2FpFhKL39pWxIYtyVaDdnShM8flKrQJj5f0hvWCHCTzgJ8zJnV24gh6frW94MNk2QXRv7JMB40upu%2FrVun%2F%2BcumUVIhvuhSoaayElc4B1XySViSj6Qp1HmFCEDWm8%2FjEhanQ4qvJs1lxbMwGdpeaN8JStYDid8peypwHrtcW0R1Xjx9cZZKf00wMXObfltw1FAmsydvOes2VwYyD53JVLS%2FnmVzWKBZoBFcXpA413sbh0Wd4NF%2BwubtXIOmN6yXEp4nlHOn0xHrdEWVpeKbd5r%2FsMO4kYrK%2FPe6nN%2FRjXNQY2Vf5mmAF7kydf2NzSjVSHMTrTKu9MIzmYdkVj1WLvPikwLP%2B9%2Br0CcB9RyOiA5xLH8XsfBq%2BQmkmBZSk2MxKDwhRvTWiztskfvJLAHFbMFKnIPx7MdFJr0xM0gmeW1ENPsdrwprE1HnQfJ8szOo9uGR0hLayCzLZu%2BF%2Brmd37x3pKyQKTdrYtf9ZwFoc2JJKilsBBjpJGQBiIq5E4LjhpIMOcUubXa5QFmvydndVc238WEoSqh2Lvf4ipg1PYMMCbw70GOqUB45IIsYr9XmeviG0pc9rF7litw2gf7c%2FgC%2FzS44VgVZa1Wule%2FU3pi0x%2BfxIWOEFos%2ByO4MRJyJaQcU75T9yThzkq%2Fb35yE9lE6%2FTNF1IRI2M9vsv3QVAxx2jpkqB5N%2FjxrY93XgW%2BntNHj6%2B4vSYIj9C2BChdR522N23HMTEH41HOswdOmJ9PL27zt4i2R7pgRmJXnhNSFWwG%2Fh5HkaMZVxsxETq&X-Amz-Signature=7cffd3a4665bcc3a8fe0e1fd81b55991ab39e5db4d5a0c07d03a2e0018cd93cd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTXOSTSP%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIAoEGCOkBgUh8ueHRBi5%2FkTK1in3jUPTXm7dI%2F3ezIqTAiEAi822Cprl203psCrgsITX9ToKx%2BRZ8NdMQh4QqzHUJ8sq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEZb6ALHB9qHBRayESrcA964SR4Hj8N71s2grnUWwXU0Jx5RdN75AlS47EzggGeodrpVfCzD%2Fn0g8X%2BSkLXNdR%2F%2BB%2Fc41LnPL%2FcAAI1T%2FpFhKL39pWxIYtyVaDdnShM8flKrQJj5f0hvWCHCTzgJ8zJnV24gh6frW94MNk2QXRv7JMB40upu%2FrVun%2F%2BcumUVIhvuhSoaayElc4B1XySViSj6Qp1HmFCEDWm8%2FjEhanQ4qvJs1lxbMwGdpeaN8JStYDid8peypwHrtcW0R1Xjx9cZZKf00wMXObfltw1FAmsydvOes2VwYyD53JVLS%2FnmVzWKBZoBFcXpA413sbh0Wd4NF%2BwubtXIOmN6yXEp4nlHOn0xHrdEWVpeKbd5r%2FsMO4kYrK%2FPe6nN%2FRjXNQY2Vf5mmAF7kydf2NzSjVSHMTrTKu9MIzmYdkVj1WLvPikwLP%2B9%2Br0CcB9RyOiA5xLH8XsfBq%2BQmkmBZSk2MxKDwhRvTWiztskfvJLAHFbMFKnIPx7MdFJr0xM0gmeW1ENPsdrwprE1HnQfJ8szOo9uGR0hLayCzLZu%2BF%2Brmd37x3pKyQKTdrYtf9ZwFoc2JJKilsBBjpJGQBiIq5E4LjhpIMOcUubXa5QFmvydndVc238WEoSqh2Lvf4ipg1PYMMCbw70GOqUB45IIsYr9XmeviG0pc9rF7litw2gf7c%2FgC%2FzS44VgVZa1Wule%2FU3pi0x%2BfxIWOEFos%2ByO4MRJyJaQcU75T9yThzkq%2Fb35yE9lE6%2FTNF1IRI2M9vsv3QVAxx2jpkqB5N%2FjxrY93XgW%2BntNHj6%2B4vSYIj9C2BChdR522N23HMTEH41HOswdOmJ9PL27zt4i2R7pgRmJXnhNSFWwG%2Fh5HkaMZVxsxETq&X-Amz-Signature=c9ea72d19673bbc9a875b764ea3942668bd62599fa05f6e056f289ab4daa63e2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
