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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJRLCB36%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQC%2Bi222fj9J1SSHtaFqSKf4gKWn3r5b6ZM04ILD81aNqgIhAKNuOt8UvhdcroMt3AYL0pL9l5qM%2FXMRQb2NWLAW2PT%2BKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2%2FocJE1zaEZT2ZpMq3ANipv5FomAZCpdPH4By6u5F%2BA2nDCQRd1wuEV0iCDHsJv0U4GH1IuSZq%2F6TGVuM5fU2Z1D7SMirLRfyTXwwAusohQWGpzHB01JlGU5uQ3sx5oNlKDMJ%2Fxd0iQBBgYMX0zaxgxodABwue4XYsqwx92gcs5G25OdKrZGT1%2BqnKQ%2BHh9naAV0pdaM2WV%2FEnmY%2FBqkzClrvARt1vdcOz6qQo3OotFCT%2BCottzGJkm0nhcjyONLegbw1QESFmSkU5XimWi0kqrc7PHhmb2ezRT0tJgb8D7CfVS%2FHFhAHa2L8ORGTct4wKfTfo4LZuYw%2FB0eLMlOAbXU7WAzjhjf3MzQLCDO%2Fa3OkUnskC579zPKQghoXrYyHOS5twFGLhyKrmMY9f76VlmdibPIhESekMJDVyUaFbNRy%2BqIKCpIu4HOmRLceWE4%2BryWM3%2BbqFAf9%2FMWkaO65WmQD8mbBNfRtl6BCYQrLshZF5cD%2B0w8e%2BAZfJjLPyoDJxFsY3607l7Jp%2FBKiyNJI%2BKHUQV%2FyevlqcurtuvdSqf%2BzwMn1h5gpe9ZGIdk6X69CueWLtVb0FLLGh4L5dxI50mS7X9kFy2MHr%2FlheBogtEU0cx%2FFCFaz3XByITA%2BYLJm2UaiSyKV5zAkpjDF2c7ABjqkASxGnOzV8%2Fd9Gk6XdEh8UPrSR5SfHYszgbd4Eq5ts5LBsBuimAmImAWUjdUP2JDWs6VYlwP3wqe7i9Pzpq99bvVnCzUNnrldyCKEybZGEYaDnmxeVSNtVH%2BTl01qqvu56Xj6x50qOB4zP%2FL1CaC%2B%2Fmgo%2Ft7vf2rI26vpHzN2gk2rTQB55iGEjlrRw9i3NkkQ3QtXdAoK563HJFu5Jp8mXfcKq7Bq&X-Amz-Signature=c14fe9885be6aabf4de7a9de64c9b19e73508dcf92a430ac7f767d54a5c2cfa2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJRLCB36%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQC%2Bi222fj9J1SSHtaFqSKf4gKWn3r5b6ZM04ILD81aNqgIhAKNuOt8UvhdcroMt3AYL0pL9l5qM%2FXMRQb2NWLAW2PT%2BKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2%2FocJE1zaEZT2ZpMq3ANipv5FomAZCpdPH4By6u5F%2BA2nDCQRd1wuEV0iCDHsJv0U4GH1IuSZq%2F6TGVuM5fU2Z1D7SMirLRfyTXwwAusohQWGpzHB01JlGU5uQ3sx5oNlKDMJ%2Fxd0iQBBgYMX0zaxgxodABwue4XYsqwx92gcs5G25OdKrZGT1%2BqnKQ%2BHh9naAV0pdaM2WV%2FEnmY%2FBqkzClrvARt1vdcOz6qQo3OotFCT%2BCottzGJkm0nhcjyONLegbw1QESFmSkU5XimWi0kqrc7PHhmb2ezRT0tJgb8D7CfVS%2FHFhAHa2L8ORGTct4wKfTfo4LZuYw%2FB0eLMlOAbXU7WAzjhjf3MzQLCDO%2Fa3OkUnskC579zPKQghoXrYyHOS5twFGLhyKrmMY9f76VlmdibPIhESekMJDVyUaFbNRy%2BqIKCpIu4HOmRLceWE4%2BryWM3%2BbqFAf9%2FMWkaO65WmQD8mbBNfRtl6BCYQrLshZF5cD%2B0w8e%2BAZfJjLPyoDJxFsY3607l7Jp%2FBKiyNJI%2BKHUQV%2FyevlqcurtuvdSqf%2BzwMn1h5gpe9ZGIdk6X69CueWLtVb0FLLGh4L5dxI50mS7X9kFy2MHr%2FlheBogtEU0cx%2FFCFaz3XByITA%2BYLJm2UaiSyKV5zAkpjDF2c7ABjqkASxGnOzV8%2Fd9Gk6XdEh8UPrSR5SfHYszgbd4Eq5ts5LBsBuimAmImAWUjdUP2JDWs6VYlwP3wqe7i9Pzpq99bvVnCzUNnrldyCKEybZGEYaDnmxeVSNtVH%2BTl01qqvu56Xj6x50qOB4zP%2FL1CaC%2B%2Fmgo%2Ft7vf2rI26vpHzN2gk2rTQB55iGEjlrRw9i3NkkQ3QtXdAoK563HJFu5Jp8mXfcKq7Bq&X-Amz-Signature=d9fee87b016349e250527c1c2ed428116c18b4d313699e578fe7fd6428300c44&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
