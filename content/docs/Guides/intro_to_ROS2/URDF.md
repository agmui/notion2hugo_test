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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q5LZ43O%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCR1zXw3eY7q7QSJjrrbnvv7JnPWFB6WCucz1uusixVKAIgT8thax%2FbDBUdeHZz1SgPSl5behvMXHuQl2nT2CdOWogq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDPlyCueDrdg40BKqfSrcAyR4z79rJHTlkCWYp0fVRvIeLWa8aBfX2XTURB1qEYz0kUwAlLftRqxrAYVSF87PQpDnuxAkhEX4vZoHTaT5QmNkzHKffXhkTzfbh0WgCVNnulaNlsrXdwDx5ZN6lOieyDpb7Cw4TH4wOlUIl5PDkUbTF0uTLccjoE8Qi4tmZpe08dhZFFHYOTlGIvsbXLSg26XV3xIEtLj8Lx98X%2B4Pr2LmUUMa0je8gXtoQ515CxVK7%2FakNT97aPHcxPQLDzy9LJKad1wgddwgGiutN3jUsjs1EQF7SghgszFVS3g2PvScxqL29mgBVdHsIywMeuDHD%2BH7ENAX3PMqkdBZI%2FsJHHXTdGhFK14TCDbJaqH7MugXjbVCqZJ2C5huaNo859%2FOG6ZlqC1VmVmihrjrRMJx8qf7nAbxxLor7FdqGLFUGcuzJUcln0E6KNE6aujKHnuM74m2gyFKylsnkjlWnTSm5FAStyOk%2FXhbWMigGdIATq3qv1REdJJ%2BoILM3tUwdwbXg3V3R%2F1bpKvkKTW3CKgUEVbn6q27nOmFI3mtQaAfKDYHCQL%2BI8b5wNRYiduf120%2FY1iKY7S9WrsAKBZ6ODx5J9IyeuhqKO7PakqNMVDXNtGxThTg5CgOSeM9CRsKMJSrksQGOqUBlEQRVPWetmY%2FcxncZ4sArcAyNX2xcey%2FKIQZ%2FpE44R3sISM1FMjSmMhNQgPnPuE6jz2XPvojJ%2FrMANeh8HCjAmAhb54CPmPRsIvh6I04JETTAT58Vi6ORmlGSPeb1Dg%2FtXDoOzZbLj7Z%2FUYeKqu6Kngb8xKr1UclKcOptWFtio5ZGjLX6S3MeRb4%2FHfaUnYHhYckyPdsqtm%2B5thFEZBHH3HhxNIm&X-Amz-Signature=1d6cb10667301800adf7f8b424850c28955c26a10f4b905946bb66a9289dd21d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q5LZ43O%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCR1zXw3eY7q7QSJjrrbnvv7JnPWFB6WCucz1uusixVKAIgT8thax%2FbDBUdeHZz1SgPSl5behvMXHuQl2nT2CdOWogq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDPlyCueDrdg40BKqfSrcAyR4z79rJHTlkCWYp0fVRvIeLWa8aBfX2XTURB1qEYz0kUwAlLftRqxrAYVSF87PQpDnuxAkhEX4vZoHTaT5QmNkzHKffXhkTzfbh0WgCVNnulaNlsrXdwDx5ZN6lOieyDpb7Cw4TH4wOlUIl5PDkUbTF0uTLccjoE8Qi4tmZpe08dhZFFHYOTlGIvsbXLSg26XV3xIEtLj8Lx98X%2B4Pr2LmUUMa0je8gXtoQ515CxVK7%2FakNT97aPHcxPQLDzy9LJKad1wgddwgGiutN3jUsjs1EQF7SghgszFVS3g2PvScxqL29mgBVdHsIywMeuDHD%2BH7ENAX3PMqkdBZI%2FsJHHXTdGhFK14TCDbJaqH7MugXjbVCqZJ2C5huaNo859%2FOG6ZlqC1VmVmihrjrRMJx8qf7nAbxxLor7FdqGLFUGcuzJUcln0E6KNE6aujKHnuM74m2gyFKylsnkjlWnTSm5FAStyOk%2FXhbWMigGdIATq3qv1REdJJ%2BoILM3tUwdwbXg3V3R%2F1bpKvkKTW3CKgUEVbn6q27nOmFI3mtQaAfKDYHCQL%2BI8b5wNRYiduf120%2FY1iKY7S9WrsAKBZ6ODx5J9IyeuhqKO7PakqNMVDXNtGxThTg5CgOSeM9CRsKMJSrksQGOqUBlEQRVPWetmY%2FcxncZ4sArcAyNX2xcey%2FKIQZ%2FpE44R3sISM1FMjSmMhNQgPnPuE6jz2XPvojJ%2FrMANeh8HCjAmAhb54CPmPRsIvh6I04JETTAT58Vi6ORmlGSPeb1Dg%2FtXDoOzZbLj7Z%2FUYeKqu6Kngb8xKr1UclKcOptWFtio5ZGjLX6S3MeRb4%2FHfaUnYHhYckyPdsqtm%2B5thFEZBHH3HhxNIm&X-Amz-Signature=e74ea8a06a5f7fdc52835cdc25bd059963fc0e00a8a776dccb5023cdde4031a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
