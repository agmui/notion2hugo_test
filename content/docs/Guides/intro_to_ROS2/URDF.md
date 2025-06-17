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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRGTUC4S%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMrHXiOVCbTFpIotzaqPFJ7PtusakhZpjnh1%2Bzo%2BhNlQIgBXzL4WZCRgNAW%2Fqz6ZE4eWHvVfFiNz%2FOic03NVrg3ggq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDB60B%2BYPPv4CqR4ziCrcA1EdUTZ6alqr6h8Nl201jk3KR5eBE8yS7o3t65o%2FRy3Zkx2xZYwc6fw8KFSrUjVDtiRxN53xWsYI6YdXGk1KpkmJ0AXi4PWDs9cQMaRECQo1iXZq4E0IMwVvuD6l0MxR0v9feCMCJSG6dmheQY5eHsfnZLsvTdOk9iqsUFwzJZy%2FoAXbMS6e8QQLKDBT3dvsdKK7eKF5EquYd9IKVAs7a3Hvu7oOQVVrXaRGWeqkeJoU6cyX4NLTkWwI03kz%2BlJOAegKjpxdPAQ0qQBLpdoJVOXlzAjo1ftDU2yOd62M48TxaKr56sH8tifOaebJo9xmAIf1gBijuAhtDeGwPykMtMF4lMd2MHRzofK5T6XquktHvFsEYgfnBjzNUNQghtiuucP%2FIZq3Dn4VKXaTRZELb5lZN65AQvlgtABd8g7rJIB%2BYbX9rnhhBx2p8m%2BcCD3Cliyq5QzG51nFoAbCXiUTD%2BCPDAJXWFsO5XSDEEJ%2Fcm4f5i3Cz3aR1PeFi8n%2FQ2UAa3ykeZeuM3xYbfcvoMk5ZGoGgcdq9imTWqkdb9HjxsXXPVCf2Ss5JXn39jRDeTp%2FSRVAUxIxeURLEl7ZDoAdhEN6PzsCLURKFfm0x%2Be%2BZq%2B%2FuO1doFIxZO1xMq2KMJ2Jx8IGOqUBE3GK2nW%2FhAqkf69IVTrOhtnXTdHg5yBHJlXFtEmBkOwGb4eDsoTYcbzgn7U%2FyS5i24qjnPF93I%2B0lIIT9riFKGNU8j8oCMdiHXBABiD3jARSAybHpFN1q9rqw6knrLw6pJpP6Plw4hjLGi%2BZQDHOLsL5F3TOkJ9SEEwDH7Ld2MfHnm8aNiyYgDIt%2FS%2F7LysxYPveMvtt40RYNknnYF%2FizaUEsZVJ&X-Amz-Signature=859838a9871e74d92896c1112ae357c119ea53e52bf80deadc305907487d9b64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRGTUC4S%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMrHXiOVCbTFpIotzaqPFJ7PtusakhZpjnh1%2Bzo%2BhNlQIgBXzL4WZCRgNAW%2Fqz6ZE4eWHvVfFiNz%2FOic03NVrg3ggq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDB60B%2BYPPv4CqR4ziCrcA1EdUTZ6alqr6h8Nl201jk3KR5eBE8yS7o3t65o%2FRy3Zkx2xZYwc6fw8KFSrUjVDtiRxN53xWsYI6YdXGk1KpkmJ0AXi4PWDs9cQMaRECQo1iXZq4E0IMwVvuD6l0MxR0v9feCMCJSG6dmheQY5eHsfnZLsvTdOk9iqsUFwzJZy%2FoAXbMS6e8QQLKDBT3dvsdKK7eKF5EquYd9IKVAs7a3Hvu7oOQVVrXaRGWeqkeJoU6cyX4NLTkWwI03kz%2BlJOAegKjpxdPAQ0qQBLpdoJVOXlzAjo1ftDU2yOd62M48TxaKr56sH8tifOaebJo9xmAIf1gBijuAhtDeGwPykMtMF4lMd2MHRzofK5T6XquktHvFsEYgfnBjzNUNQghtiuucP%2FIZq3Dn4VKXaTRZELb5lZN65AQvlgtABd8g7rJIB%2BYbX9rnhhBx2p8m%2BcCD3Cliyq5QzG51nFoAbCXiUTD%2BCPDAJXWFsO5XSDEEJ%2Fcm4f5i3Cz3aR1PeFi8n%2FQ2UAa3ykeZeuM3xYbfcvoMk5ZGoGgcdq9imTWqkdb9HjxsXXPVCf2Ss5JXn39jRDeTp%2FSRVAUxIxeURLEl7ZDoAdhEN6PzsCLURKFfm0x%2Be%2BZq%2B%2FuO1doFIxZO1xMq2KMJ2Jx8IGOqUBE3GK2nW%2FhAqkf69IVTrOhtnXTdHg5yBHJlXFtEmBkOwGb4eDsoTYcbzgn7U%2FyS5i24qjnPF93I%2B0lIIT9riFKGNU8j8oCMdiHXBABiD3jARSAybHpFN1q9rqw6knrLw6pJpP6Plw4hjLGi%2BZQDHOLsL5F3TOkJ9SEEwDH7Ld2MfHnm8aNiyYgDIt%2FS%2F7LysxYPveMvtt40RYNknnYF%2FizaUEsZVJ&X-Amz-Signature=bdb900881fc173751521fe976c84ef8e3e3654d6bad0ffe6a34a2d32ebb7b26e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
