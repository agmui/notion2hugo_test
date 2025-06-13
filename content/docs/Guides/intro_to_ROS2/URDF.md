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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLRVDC36%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQC35nbNIdIFPXaZ5F2Zu4YXFDzIWZv7Ipbm66cc99BQIQIgEvC51nsGADt9JtVs436kw6YpSMOxQRWciAucVhCGXzoq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDGC%2BtDSEk5T0epwkXSrcA8BTnhLSSnYYC191t4OlHgIFzcE5BCd6vUejGb13uQg9Ui4gzAdzlRoS0ym3lM22xzmgp88RIrt%2B9q2KbRmYtIffn0bDJIth6GLCMGsQtn%2BHaGc4uv3V2AACO7bG%2FLoMOId%2FUhggS2Lc%2BeNAJiqusJzeevbvOxcDJbNDKXH%2F9t4jNhAmBQiog5CSYDbXw7a0exgZXDwmoSC2IuGR7FE%2Fnbi6rzEC4TPaJilYxbfI4nFF5KU3AEGsFL0eNACVrPqedB4%2FYJ0OPIyz7jA8xnBWgITSLTgqQ%2FAKpNUMX9NOBoWPmgk2izSlASDl5XwbJPdlPOGIjPgGFhXCNByGeovvlxyNNAyIvsIgmujwAjZNIZ3tJLujD34c5e4BJBW4xD25NMBY68g3%2FnaFvTUN4F587HHewhma744toRM5JUXbL7N5mxF97bvx4wwbg4ggvU%2BmyUiSjHaV3eWdxk3eQvenfUMMFyyEIMeEft6JQo5jkFatvbWho4c5mBeIatZkKXVwcz%2BBxYSOv7zK2ulZAuu6TlHaVUaxWb9BDkHDRzuCGSHPfMAHptfkr6QVrl1CZLb%2BuJfZD7hV2VqT78AdnpfzpVpk6fKszVdz23BoOwuTJcTGjmkRB8OoAWPR4mPDMOupsMIGOqUBPFH7uOw2Kwzk8oddtUBiQtgfAUifPr6yf%2BmzKFQO%2BgA378BdPhxXIb3zvHAMtGvWuk049SItaDC%2BmpFmNLnQpVSyfVeRu1ZRjzlUAj%2BspcVsekG8yUyROiVBcw%2FlmjWOS4gI%2FHy6TpfeRK0gkVvCrTsgjl4Ak%2F7%2Ba3v9j%2BKJMGSEx3IN1ahycx324JpyWZUPNh7TYPSS2pU%2FuHq3jhZIdIoLspVf&X-Amz-Signature=8195d594b7ecff7d9050bc0b5e1b4962fb639ced87ff525f5ed81deee09b935a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLRVDC36%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQC35nbNIdIFPXaZ5F2Zu4YXFDzIWZv7Ipbm66cc99BQIQIgEvC51nsGADt9JtVs436kw6YpSMOxQRWciAucVhCGXzoq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDGC%2BtDSEk5T0epwkXSrcA8BTnhLSSnYYC191t4OlHgIFzcE5BCd6vUejGb13uQg9Ui4gzAdzlRoS0ym3lM22xzmgp88RIrt%2B9q2KbRmYtIffn0bDJIth6GLCMGsQtn%2BHaGc4uv3V2AACO7bG%2FLoMOId%2FUhggS2Lc%2BeNAJiqusJzeevbvOxcDJbNDKXH%2F9t4jNhAmBQiog5CSYDbXw7a0exgZXDwmoSC2IuGR7FE%2Fnbi6rzEC4TPaJilYxbfI4nFF5KU3AEGsFL0eNACVrPqedB4%2FYJ0OPIyz7jA8xnBWgITSLTgqQ%2FAKpNUMX9NOBoWPmgk2izSlASDl5XwbJPdlPOGIjPgGFhXCNByGeovvlxyNNAyIvsIgmujwAjZNIZ3tJLujD34c5e4BJBW4xD25NMBY68g3%2FnaFvTUN4F587HHewhma744toRM5JUXbL7N5mxF97bvx4wwbg4ggvU%2BmyUiSjHaV3eWdxk3eQvenfUMMFyyEIMeEft6JQo5jkFatvbWho4c5mBeIatZkKXVwcz%2BBxYSOv7zK2ulZAuu6TlHaVUaxWb9BDkHDRzuCGSHPfMAHptfkr6QVrl1CZLb%2BuJfZD7hV2VqT78AdnpfzpVpk6fKszVdz23BoOwuTJcTGjmkRB8OoAWPR4mPDMOupsMIGOqUBPFH7uOw2Kwzk8oddtUBiQtgfAUifPr6yf%2BmzKFQO%2BgA378BdPhxXIb3zvHAMtGvWuk049SItaDC%2BmpFmNLnQpVSyfVeRu1ZRjzlUAj%2BspcVsekG8yUyROiVBcw%2FlmjWOS4gI%2FHy6TpfeRK0gkVvCrTsgjl4Ak%2F7%2Ba3v9j%2BKJMGSEx3IN1ahycx324JpyWZUPNh7TYPSS2pU%2FuHq3jhZIdIoLspVf&X-Amz-Signature=7657793ca61ccd9ecf4aa48bdd5717ecbd5bb77a8034a4a8b2e034c8a967c603&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
