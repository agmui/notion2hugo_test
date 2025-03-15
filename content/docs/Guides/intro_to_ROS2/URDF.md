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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NXAX6O6%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICK8Edv%2FvojRRCypWr8g7piThrmDYPBICweuPRW3%2BvKcAiEAwg%2BVV2s8V%2Fpt9uBmko3Fb1Czk9eRYtEjpIUhUHmiA%2Fgq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDNsAnDrSN%2BSSx%2FQYLCrcA4B9ooPvUYyeDm0dMS2xKONnKjkYcKj4%2FfYBOO6r6xV%2Ba%2F8IEVc5nIIoPGqa2VJvIL8EUI3XGx6nGd3%2FYvaq3sFp2K2h9%2B00oQ11uyZ3kpc8hjykLCXwXYWCNoX7jY9M3Ry%2FWxi3zTp4VtscFPfgsh8%2Bk6AWLwBICR3IN%2BhkuStuIo40jNvzlVJrOa6d5AOur8JlC6KUq3k7jv4GXxm4E7B54B6gMawC%2FOJNYrP%2FqCu4vWZrf%2BAXAGnToB1sB1eeqVK7YuAMeMPPXucx6k%2FxsKzf2jutUCSywBKBwC4wDceWCIUrjTyqbrxRycC7NLY3nOfCdHSedMUisvB74MX4VRmofFF1e1K4LqD5%2BzLBxu3OMgv86HPSYQHnjRg34UvmKYkOIUk6a%2FkZWeJs%2BOlcEXR3iGEmutPSFURUsev3qSyFw9pAI6GEa84j7GDVId263MsMuxo9zz3us5ysVXCR80rmb6YImHuCyT5zHDJOJZUH8p%2FxTeqk3Q9li%2B73KuqnmVjaOsMFyd1VazSKeGU6%2Brl9xjHxv2wFlTQNWjjcafcqPMo%2FpVCcn9YSIdMw21DdtGs7i6AMXlStYdXtTIjxDAob69caIxTf7WQdaJCWezdG8p%2FeUhnaeHmd27M%2FMKrh1L4GOqUByLfDlpSqEOu0doVoF6aA6gglTO1HfWzHvvh7ka2VF5Cb96RLXhrb8dfcGASL%2B20Dn%2BQKrGMPs381Imszmq78mrAt40SgelLiQ%2Bz4Yoi1CkU5lfjqQtm44JdMU9J4mI2EDIX8DwrRo2fVPdz95Qj6%2FjcwJggE6UOhL0drkX47ucjHiyXWatHyugFmOrY61ESWp%2F3GhNnj5f0cm29bGbUocNDRDOov&X-Amz-Signature=b004d8b167a023136bc8748d111003697172603abc3c80f7847ab83e593212b3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NXAX6O6%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICK8Edv%2FvojRRCypWr8g7piThrmDYPBICweuPRW3%2BvKcAiEAwg%2BVV2s8V%2Fpt9uBmko3Fb1Czk9eRYtEjpIUhUHmiA%2Fgq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDNsAnDrSN%2BSSx%2FQYLCrcA4B9ooPvUYyeDm0dMS2xKONnKjkYcKj4%2FfYBOO6r6xV%2Ba%2F8IEVc5nIIoPGqa2VJvIL8EUI3XGx6nGd3%2FYvaq3sFp2K2h9%2B00oQ11uyZ3kpc8hjykLCXwXYWCNoX7jY9M3Ry%2FWxi3zTp4VtscFPfgsh8%2Bk6AWLwBICR3IN%2BhkuStuIo40jNvzlVJrOa6d5AOur8JlC6KUq3k7jv4GXxm4E7B54B6gMawC%2FOJNYrP%2FqCu4vWZrf%2BAXAGnToB1sB1eeqVK7YuAMeMPPXucx6k%2FxsKzf2jutUCSywBKBwC4wDceWCIUrjTyqbrxRycC7NLY3nOfCdHSedMUisvB74MX4VRmofFF1e1K4LqD5%2BzLBxu3OMgv86HPSYQHnjRg34UvmKYkOIUk6a%2FkZWeJs%2BOlcEXR3iGEmutPSFURUsev3qSyFw9pAI6GEa84j7GDVId263MsMuxo9zz3us5ysVXCR80rmb6YImHuCyT5zHDJOJZUH8p%2FxTeqk3Q9li%2B73KuqnmVjaOsMFyd1VazSKeGU6%2Brl9xjHxv2wFlTQNWjjcafcqPMo%2FpVCcn9YSIdMw21DdtGs7i6AMXlStYdXtTIjxDAob69caIxTf7WQdaJCWezdG8p%2FeUhnaeHmd27M%2FMKrh1L4GOqUByLfDlpSqEOu0doVoF6aA6gglTO1HfWzHvvh7ka2VF5Cb96RLXhrb8dfcGASL%2B20Dn%2BQKrGMPs381Imszmq78mrAt40SgelLiQ%2Bz4Yoi1CkU5lfjqQtm44JdMU9J4mI2EDIX8DwrRo2fVPdz95Qj6%2FjcwJggE6UOhL0drkX47ucjHiyXWatHyugFmOrY61ESWp%2F3GhNnj5f0cm29bGbUocNDRDOov&X-Amz-Signature=6acbb5cb67bd4cf1cfc0d6fa23e9c16587a378b5a6c46b5c226644f652d76a90&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
