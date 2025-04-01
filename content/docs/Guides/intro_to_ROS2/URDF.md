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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJC62DYH%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T041141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIBiZFrVZMuaUIeah34vS8hnyWZXwgXAiEhi7psrJPB2nAiEAzTS2DgcxzfRidL%2Fx1WmjqTJy7Srke1tJ4Orx2fvGSscqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXu3qeWIdIQRus7cCrcA3pGdG3mG5uPhYvH0Rm2m69GMcoW%2BnzN0NgxT6pmDU3B32vx%2FRUxXhr1nH3dWIHn%2BKl4kpuS9CkNMUQ%2FGoNzMTvDDvVHrg56WaUNkBEqYDA80ox4mVFq%2FmHmOIBSj4GvdJNWAL4NPgGZEHGmijs3S1GqMhQ0jSnOxTZR8suForR%2FYNd3G4zxeWPmKMPF5UDakR19UI3K%2FFB9v6mIPDJeK9aqFFBc3IdzV0q29iXAB9KqpoKaKAmg6aE42Jeh4muAZmPH3Ll%2BW2bYX2KGZobzPhBosPcvyo7zwWr7U87auhEDCyZ6ZlcRULzF0YI6EHn3zIYYcvgzlArjkc1WRJWZj3nvXv615l%2FWKaTXEbd9uoaiuU4O8DkH3XzYzH5D%2Bvj%2B7i8dl%2F13yuwUWh7d%2BKi5%2FTuXY%2BY%2B11xZYEdu3qzpiC9%2F5AhmYow8Us%2B%2BCSPOXs%2B7JrFbXpEDloYyFVPQ4YFO1B%2FmniP2jrvzollUiFVn9Yn8T7Mw9VfE%2FJ%2FD4qGR1ecJxHifvTKYHmijWX%2BSEgC4i5u%2FFlrZaRsnDLu3nvmT8I9IIqNSAxcxubzStXFFV0DDZillVf4h8BUZ5OOrU4J%2BV%2BuokFtOndyiuwmcSQWP33%2BmIV%2BnZfa3yNo4Xm0jML2krb8GOqUBID5iUMlhgzjfg75tdHlVmzN1%2Fsb45CIkLUyk1dZx94w8cBTTh493e7JXKn3rIsSRGssCtb6%2BjCTy02EmdsTtGEs3u3xwYUcy14xuEsPznAXiFuvcBRLBYKm3BxPLTrBrz956T9RrF2KWevLsEzn8exiAj8cAXGKh5e3zoL1m2EvePPy%2F2HgjGcl%2BRRHGNulvVCr%2FrGZ2yWS%2BYPkXPR8HSChTvt9T&X-Amz-Signature=25332935c7df89f037dc82d4eeb6959b10a431fdd0eed50374230dcf91dc81b5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJC62DYH%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T041141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIBiZFrVZMuaUIeah34vS8hnyWZXwgXAiEhi7psrJPB2nAiEAzTS2DgcxzfRidL%2Fx1WmjqTJy7Srke1tJ4Orx2fvGSscqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXu3qeWIdIQRus7cCrcA3pGdG3mG5uPhYvH0Rm2m69GMcoW%2BnzN0NgxT6pmDU3B32vx%2FRUxXhr1nH3dWIHn%2BKl4kpuS9CkNMUQ%2FGoNzMTvDDvVHrg56WaUNkBEqYDA80ox4mVFq%2FmHmOIBSj4GvdJNWAL4NPgGZEHGmijs3S1GqMhQ0jSnOxTZR8suForR%2FYNd3G4zxeWPmKMPF5UDakR19UI3K%2FFB9v6mIPDJeK9aqFFBc3IdzV0q29iXAB9KqpoKaKAmg6aE42Jeh4muAZmPH3Ll%2BW2bYX2KGZobzPhBosPcvyo7zwWr7U87auhEDCyZ6ZlcRULzF0YI6EHn3zIYYcvgzlArjkc1WRJWZj3nvXv615l%2FWKaTXEbd9uoaiuU4O8DkH3XzYzH5D%2Bvj%2B7i8dl%2F13yuwUWh7d%2BKi5%2FTuXY%2BY%2B11xZYEdu3qzpiC9%2F5AhmYow8Us%2B%2BCSPOXs%2B7JrFbXpEDloYyFVPQ4YFO1B%2FmniP2jrvzollUiFVn9Yn8T7Mw9VfE%2FJ%2FD4qGR1ecJxHifvTKYHmijWX%2BSEgC4i5u%2FFlrZaRsnDLu3nvmT8I9IIqNSAxcxubzStXFFV0DDZillVf4h8BUZ5OOrU4J%2BV%2BuokFtOndyiuwmcSQWP33%2BmIV%2BnZfa3yNo4Xm0jML2krb8GOqUBID5iUMlhgzjfg75tdHlVmzN1%2Fsb45CIkLUyk1dZx94w8cBTTh493e7JXKn3rIsSRGssCtb6%2BjCTy02EmdsTtGEs3u3xwYUcy14xuEsPznAXiFuvcBRLBYKm3BxPLTrBrz956T9RrF2KWevLsEzn8exiAj8cAXGKh5e3zoL1m2EvePPy%2F2HgjGcl%2BRRHGNulvVCr%2FrGZ2yWS%2BYPkXPR8HSChTvt9T&X-Amz-Signature=329c429c5a9aecbbe13ba45d05a12a45d0435741db670fb8d3129869e17d88c6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
