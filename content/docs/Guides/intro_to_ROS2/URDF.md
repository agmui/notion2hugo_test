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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFJRESOD%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDU57hiESMHGjTWaQrz2OZjg9W3sfdeBc%2Blx2i5R52iGAiBjtCd7sKaHjUuCg6y6OcTcKKLoc6OLghmq9PUb027glyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMKsAgp%2FUpXpPFONRTKtwD3og3WkfiGvLQJ1MmsdhaRBbYvAuDmcMqyMLO%2Boy8mImDarn0mu6Pvw95%2BpkNQ2NiRFLoA9LJPPfxDtY6rB7iY1byHIbsQ1U4LtvYTRXorRBP8Lzffbyqt1%2F15FIJdXzB44%2Bnj6e7SMlfGQg3M6bPijSxvH1UAswH%2FMr0ASqspbGrzaroac4hD41KmK4mwA%2FFkFdtZ06w37FO6rDZj1%2F43tmQFAIPSyjhWOFSVI2jCP%2BjRkulK9p09wFRVpQTnbrvUGG4Vn%2Bc59RzTu5S3rv0gtToW6ujUWIld6TYapJLeBGwfANYbCbc5DEDWwrXL%2BmVFWD2RBzQRtop5nuxO2TVUheeGXEgrUj4MGEPDSzkD276wuyPtlfTQZ%2FfGk8VzRdZ4NffC3a9zk7CIJFVdu%2FJsAIhx1okUIuVcXUrLe4klrgOGUL8L%2BELql%2F6SEvc4GZNL2CTfl%2FHocVqurgJ7KsP7na63B%2BtEcfmS7UCWqkGzUrMimWBTA9ydoHjYfkHAHJ2Wn4%2Bgqpmkc4zn452e9hhkyi0S9R8D5NCeuWHREpJ%2B3deM73A%2B7e%2Fl1ImXZ6r%2Fpd0cynwkpCiaD7DTt3S0vUBXZ95Z85k8zUdGkiPyww0gf0w2TSd3UxdpHcCVdMwm%2FvjwAY6pgHvN4ZHYw2ZHOhl%2FYVfrAe5HVvEeUr%2BZWhkByY%2BTr2%2Bxxs2aRS%2BMgYNPKQkPd5SO1p1pzS5m0npf6Mh1EF5EbO9Ax2SoCkVGQWU5NoQdJzWZ8JuS%2F12i55d0CDJHsX930RRVoz3oU9%2FA%2B%2B%2F2oc6BMY1wrkKI5bapWefb4ljwQQAb7o9WprOxgSIpAvEnVltA1%2BkYgFpTxAtaaARgMECoDsHlwIBFKYt&X-Amz-Signature=4a77114651fdc9c979e6f7479b089cec1f18de73ca51d86e42568f9af3d8e5c0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFJRESOD%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDU57hiESMHGjTWaQrz2OZjg9W3sfdeBc%2Blx2i5R52iGAiBjtCd7sKaHjUuCg6y6OcTcKKLoc6OLghmq9PUb027glyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMKsAgp%2FUpXpPFONRTKtwD3og3WkfiGvLQJ1MmsdhaRBbYvAuDmcMqyMLO%2Boy8mImDarn0mu6Pvw95%2BpkNQ2NiRFLoA9LJPPfxDtY6rB7iY1byHIbsQ1U4LtvYTRXorRBP8Lzffbyqt1%2F15FIJdXzB44%2Bnj6e7SMlfGQg3M6bPijSxvH1UAswH%2FMr0ASqspbGrzaroac4hD41KmK4mwA%2FFkFdtZ06w37FO6rDZj1%2F43tmQFAIPSyjhWOFSVI2jCP%2BjRkulK9p09wFRVpQTnbrvUGG4Vn%2Bc59RzTu5S3rv0gtToW6ujUWIld6TYapJLeBGwfANYbCbc5DEDWwrXL%2BmVFWD2RBzQRtop5nuxO2TVUheeGXEgrUj4MGEPDSzkD276wuyPtlfTQZ%2FfGk8VzRdZ4NffC3a9zk7CIJFVdu%2FJsAIhx1okUIuVcXUrLe4klrgOGUL8L%2BELql%2F6SEvc4GZNL2CTfl%2FHocVqurgJ7KsP7na63B%2BtEcfmS7UCWqkGzUrMimWBTA9ydoHjYfkHAHJ2Wn4%2Bgqpmkc4zn452e9hhkyi0S9R8D5NCeuWHREpJ%2B3deM73A%2B7e%2Fl1ImXZ6r%2Fpd0cynwkpCiaD7DTt3S0vUBXZ95Z85k8zUdGkiPyww0gf0w2TSd3UxdpHcCVdMwm%2FvjwAY6pgHvN4ZHYw2ZHOhl%2FYVfrAe5HVvEeUr%2BZWhkByY%2BTr2%2Bxxs2aRS%2BMgYNPKQkPd5SO1p1pzS5m0npf6Mh1EF5EbO9Ax2SoCkVGQWU5NoQdJzWZ8JuS%2F12i55d0CDJHsX930RRVoz3oU9%2FA%2B%2B%2F2oc6BMY1wrkKI5bapWefb4ljwQQAb7o9WprOxgSIpAvEnVltA1%2BkYgFpTxAtaaARgMECoDsHlwIBFKYt&X-Amz-Signature=82fad804a4dd48e83101418821a091320dadd6e12a763b480018edf0b6b5a0a3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
