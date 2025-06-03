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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THFFDLLW%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T110803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIGcj%2Fz2EDko4Tl%2FJGP9TPMVNVlI63XC6MQmTPSHF6CbrAiEAygL9jVcaweOBJkUGsJc%2BuHGEUJQJUolgFcRVh17axOoq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDNhWibGME0bbHFyeSyrcAyYFQe%2BPQCe0QLdasmrjL%2Bi8ZRFiIA3EqNAeUH3y5XlPzFa1b8vtmClZdnKUPT20rP%2BTJL%2Bb4WC9aHd%2BwEhEK3fYhvZ7pj6fcqd0DWI5YTTrFF%2FGbshv%2B1XGNtWdHNxGVhU700OdwVj94fyQq3xPux%2BQXXgjM55RK5m%2FeSWfaBjsPqsw7fGBXDVePFacN8IDKKcwrOeMWN%2BGI6QcxjDS5uEVtkYwSK95GI0v6534DCsWijElqm%2FIKF7%2B6TKs2Y%2BP6ARLZocVDx%2FNoSwrp3Xkpl%2BUx19dRpBTM0ZEq5oPs6rxRBB3KUusFKiA6arYGmvhonVChyXl5tc24dYawysm2cw0V%2FyQw1OkWguMak%2FwEs%2BgMYB70DkEaDeJgQVCX0%2Fcg7ORtdgj2wtB4UrfJF2OlWrS5YeBlMNjlx%2FzOfo4pVq9c6fvhsYGW5T%2B1UQZCWxCelKBM%2FwaMBdZLzDBj0cFefg%2F6Xo0XDB2NNK4x02eq7E2d7VIGgMrSyFhxoRk1mCFXAfxxL7XjKsxX%2BYS9CEiJfwmNc78pdMvD1GpBPK%2FIBuJphdbPy2sgJjNO3E4y%2F6%2B8zuw%2BjhN6e9HlCeF5Adg83gIzyyOmzUn0B9VgXvdkSCqbmU1oTaHmc7qQHvMMMit%2B8EGOqUBuIuA3TeRc1p8qxTdwMVLw9wVf%2BL%2FWp19DevDfGua1Ji276QHU8%2Bno9ibKkePWKXPgJPNkmCnaNsHB00b9M7AQncehLYynLtapGLrGV%2BFdQy6Pt46CNyIU94zNZFMf%2BGYRBq2L7OYlwlPf5yD26%2BPCk74QbsrXiTqFsmIlAdQBeFypcIRgQwFXHyL4axwqhKGIX%2Fl5b%2FrUOq7xyWHcFrgIIHUtbEf&X-Amz-Signature=7c08cca20eb2cc9957185adf24278226621ef3c7def107019545b00481d8d579&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THFFDLLW%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T110803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIGcj%2Fz2EDko4Tl%2FJGP9TPMVNVlI63XC6MQmTPSHF6CbrAiEAygL9jVcaweOBJkUGsJc%2BuHGEUJQJUolgFcRVh17axOoq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDNhWibGME0bbHFyeSyrcAyYFQe%2BPQCe0QLdasmrjL%2Bi8ZRFiIA3EqNAeUH3y5XlPzFa1b8vtmClZdnKUPT20rP%2BTJL%2Bb4WC9aHd%2BwEhEK3fYhvZ7pj6fcqd0DWI5YTTrFF%2FGbshv%2B1XGNtWdHNxGVhU700OdwVj94fyQq3xPux%2BQXXgjM55RK5m%2FeSWfaBjsPqsw7fGBXDVePFacN8IDKKcwrOeMWN%2BGI6QcxjDS5uEVtkYwSK95GI0v6534DCsWijElqm%2FIKF7%2B6TKs2Y%2BP6ARLZocVDx%2FNoSwrp3Xkpl%2BUx19dRpBTM0ZEq5oPs6rxRBB3KUusFKiA6arYGmvhonVChyXl5tc24dYawysm2cw0V%2FyQw1OkWguMak%2FwEs%2BgMYB70DkEaDeJgQVCX0%2Fcg7ORtdgj2wtB4UrfJF2OlWrS5YeBlMNjlx%2FzOfo4pVq9c6fvhsYGW5T%2B1UQZCWxCelKBM%2FwaMBdZLzDBj0cFefg%2F6Xo0XDB2NNK4x02eq7E2d7VIGgMrSyFhxoRk1mCFXAfxxL7XjKsxX%2BYS9CEiJfwmNc78pdMvD1GpBPK%2FIBuJphdbPy2sgJjNO3E4y%2F6%2B8zuw%2BjhN6e9HlCeF5Adg83gIzyyOmzUn0B9VgXvdkSCqbmU1oTaHmc7qQHvMMMit%2B8EGOqUBuIuA3TeRc1p8qxTdwMVLw9wVf%2BL%2FWp19DevDfGua1Ji276QHU8%2Bno9ibKkePWKXPgJPNkmCnaNsHB00b9M7AQncehLYynLtapGLrGV%2BFdQy6Pt46CNyIU94zNZFMf%2BGYRBq2L7OYlwlPf5yD26%2BPCk74QbsrXiTqFsmIlAdQBeFypcIRgQwFXHyL4axwqhKGIX%2Fl5b%2FrUOq7xyWHcFrgIIHUtbEf&X-Amz-Signature=b1608412368fabd340291e9c7595e2d2729535f138769289ead7e76a66ee687a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
