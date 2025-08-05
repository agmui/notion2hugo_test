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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466477YULQX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIGpmfIgtzaO18wlZ9QKY8%2F6AmeDxye324O9ZpmM9Gn9iAiEAwD1RT%2FHVGuiJWuLKFr0F%2BAjyuOjTe8PnY6AgyvizsDsq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNPI0hTfwi7YoYv7cCrcAzQ1i2cZruwdaR7TpxvgVVE6IzoV9fSHLv9HKz91Xotsm4piff34eGKlSpAvoTFwUiiB26axG1eChysMpfJu6kJYEMei85r1%2FLqAHC5fOvLNs%2Bvm2saSh%2BXB8NlVhDZwm0oYIwvwtNwO3GEIdN6ttm%2B3UfFcxSjiCYH4QyUoeRl32T3ipjc0h5VjtDPcRoh5O5OacSVWSNB0akJ%2BQhKRBByW1%2F%2BXdeeXluuAVq5fkKTHS64zMbBVrbt48vLGZFm%2BV5dnspvwHAhI8PRgyujzfxySzckoewCrp4RlPlrBhfAvmIFrrG4rgOFzxShxAQ9JixIe3C%2B24alOOBVyGDvStOYufUNvslZko4%2Fs%2FYTW1N%2BhSm%2F8LHoH6vuo3rLei4nxHBhAmR%2FULtrwYaDSfyhv%2Fxdj2NSse%2BL6YQP82oQWTjxyu8wf98qy5tvfz21zYIHzPqJQ87r2Q%2F4%2FcrdRHrEo9Edr26RLHbTuCOmWFTYpwGIq1qK4%2FnXFk73zzNTjEv0hoK8pzk%2BLqfSa%2Fvj3iHPUtc%2B3j0tRlT1bAWYxBvppXClTKkl17Nr7CZy%2FTDp8Rj6wGpLnK%2BAGH3qL3MFUq3TIcJQe622dhh05uQVSf2MdNpmAvx0Dz1Ym3IfnxyAiMPSsx8QGOqUBTh1jBSdOhT5JqcYmEyyEkV9TG6qu1bZnSRTQp5tApp%2FHE1xloGkR5N33QsbVfHoE5X%2FqNikc34xPr43FH0QAf22jAnqXN2tk6NTW06657QZDTdZexS4EBXpOk0UiMq764So2oDd7pdIu4aLqD%2B8Vnoepg9tIasY49CzyA3m4atBHTuikVwmKKCu4sRtKdBat81m4oht2XaC3%2Bt4Rao9feDXia2fF&X-Amz-Signature=d1ebe9e66c8bb449c969652790d3584da4895678b74f84e117ad21164f1daade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466477YULQX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIGpmfIgtzaO18wlZ9QKY8%2F6AmeDxye324O9ZpmM9Gn9iAiEAwD1RT%2FHVGuiJWuLKFr0F%2BAjyuOjTe8PnY6AgyvizsDsq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNPI0hTfwi7YoYv7cCrcAzQ1i2cZruwdaR7TpxvgVVE6IzoV9fSHLv9HKz91Xotsm4piff34eGKlSpAvoTFwUiiB26axG1eChysMpfJu6kJYEMei85r1%2FLqAHC5fOvLNs%2Bvm2saSh%2BXB8NlVhDZwm0oYIwvwtNwO3GEIdN6ttm%2B3UfFcxSjiCYH4QyUoeRl32T3ipjc0h5VjtDPcRoh5O5OacSVWSNB0akJ%2BQhKRBByW1%2F%2BXdeeXluuAVq5fkKTHS64zMbBVrbt48vLGZFm%2BV5dnspvwHAhI8PRgyujzfxySzckoewCrp4RlPlrBhfAvmIFrrG4rgOFzxShxAQ9JixIe3C%2B24alOOBVyGDvStOYufUNvslZko4%2Fs%2FYTW1N%2BhSm%2F8LHoH6vuo3rLei4nxHBhAmR%2FULtrwYaDSfyhv%2Fxdj2NSse%2BL6YQP82oQWTjxyu8wf98qy5tvfz21zYIHzPqJQ87r2Q%2F4%2FcrdRHrEo9Edr26RLHbTuCOmWFTYpwGIq1qK4%2FnXFk73zzNTjEv0hoK8pzk%2BLqfSa%2Fvj3iHPUtc%2B3j0tRlT1bAWYxBvppXClTKkl17Nr7CZy%2FTDp8Rj6wGpLnK%2BAGH3qL3MFUq3TIcJQe622dhh05uQVSf2MdNpmAvx0Dz1Ym3IfnxyAiMPSsx8QGOqUBTh1jBSdOhT5JqcYmEyyEkV9TG6qu1bZnSRTQp5tApp%2FHE1xloGkR5N33QsbVfHoE5X%2FqNikc34xPr43FH0QAf22jAnqXN2tk6NTW06657QZDTdZexS4EBXpOk0UiMq764So2oDd7pdIu4aLqD%2B8Vnoepg9tIasY49CzyA3m4atBHTuikVwmKKCu4sRtKdBat81m4oht2XaC3%2Bt4Rao9feDXia2fF&X-Amz-Signature=9194364ba70c91156eca00feaf924e5a7746f9769dfb19752c99fa6feed01652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
