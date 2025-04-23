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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DG7J7OD%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIEl1E5%2B3QWxMZwbiYcuX6Sh9P4zsvVqwAGUcVwd1qOZTAiBLa8bJ0fiuFuz8vQWaM5N4J%2BHWkh%2BVFfme7N62uFUqniqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuoBeVbytcP9xjPGmKtwDxvICQ2d0%2FAPCRKw3u3YllUH1K5JMqsuxWQD3CtHx6TAoVjpn4SjH9%2BPfDAMx20mNmKPjsJFELg3qadjorTT9Erz2iUKfgM%2FdZUMnoSwt6zG3HtXNHCzvjSPe8e1r5SSukPLfvqGQLikpblM68AC5hJy32%2B7sT7PtBd%2F%2B%2Bbtz%2B7cr3RWhyq7YyECPKbW9rfoJCk1%2BYRU99qU9qMeQwEbNV9ccN0FE%2BkrJ7O5OzJMkkD86GRXKqNREDuNehTobMYrNrAa6rGvJzc456BvNg2Bc0GPQZQuNVU87sz6y%2Fng3PjXGTece1ZaUB4wmIZ%2BWZSyRd%2FtFG%2BDJTLZpLLfghK14pEAklNnIFLS1Z0IYMnV%2Fu8xpB2chLGaBzalCyx%2F4sNyoS7wjjit3js9cEDUNDxSYCbI5w93wp8RtgQdbu4d49oD1Hjsu2gK3tWNe4nJIbDUx5sXJ8ijGH7K%2BzjjTPANAmNyAMtDCIwIMqInaSbbuFCniC9oFCt6kMMON7fKUIQ9aspNhbN5Xo3NcnuvJTiFZ6TUyCm8vami4v3wNjZEfcNGUgDe%2BqhdE%2B%2FGforKwO9lodoiqNP%2BHMLbFF8I39sHeprKFlNFBGJmKyyBJej9XGiDPkFPBxnyo49V2ZcAwqqOiwAY6pgHF%2BzPmhJacORPbuPgJErkPXuSiS4p%2B4oA6mKvUYJRdG1FGeX8AHVi41q09hK1wxDFzmaTBjoSK3VQXydOR3WXG46LxauhveTCT0fmVA59qAZBFc2zHq32s72zEz2TSi4U5oIKYRRTTOk81vB4x0jj7y1aq%2FCc1%2FDNvM%2Bs8%2Bg6jTfpSSJEjwucPuypIzSdsUijK7l%2B2MT3KRstGtCjjaaHsNxPDyHYP&X-Amz-Signature=647da8c92bc90d794fe3c03f3dca886e4046050ece4b2bd07dcc1f12632090ec&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DG7J7OD%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIEl1E5%2B3QWxMZwbiYcuX6Sh9P4zsvVqwAGUcVwd1qOZTAiBLa8bJ0fiuFuz8vQWaM5N4J%2BHWkh%2BVFfme7N62uFUqniqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuoBeVbytcP9xjPGmKtwDxvICQ2d0%2FAPCRKw3u3YllUH1K5JMqsuxWQD3CtHx6TAoVjpn4SjH9%2BPfDAMx20mNmKPjsJFELg3qadjorTT9Erz2iUKfgM%2FdZUMnoSwt6zG3HtXNHCzvjSPe8e1r5SSukPLfvqGQLikpblM68AC5hJy32%2B7sT7PtBd%2F%2B%2Bbtz%2B7cr3RWhyq7YyECPKbW9rfoJCk1%2BYRU99qU9qMeQwEbNV9ccN0FE%2BkrJ7O5OzJMkkD86GRXKqNREDuNehTobMYrNrAa6rGvJzc456BvNg2Bc0GPQZQuNVU87sz6y%2Fng3PjXGTece1ZaUB4wmIZ%2BWZSyRd%2FtFG%2BDJTLZpLLfghK14pEAklNnIFLS1Z0IYMnV%2Fu8xpB2chLGaBzalCyx%2F4sNyoS7wjjit3js9cEDUNDxSYCbI5w93wp8RtgQdbu4d49oD1Hjsu2gK3tWNe4nJIbDUx5sXJ8ijGH7K%2BzjjTPANAmNyAMtDCIwIMqInaSbbuFCniC9oFCt6kMMON7fKUIQ9aspNhbN5Xo3NcnuvJTiFZ6TUyCm8vami4v3wNjZEfcNGUgDe%2BqhdE%2B%2FGforKwO9lodoiqNP%2BHMLbFF8I39sHeprKFlNFBGJmKyyBJej9XGiDPkFPBxnyo49V2ZcAwqqOiwAY6pgHF%2BzPmhJacORPbuPgJErkPXuSiS4p%2B4oA6mKvUYJRdG1FGeX8AHVi41q09hK1wxDFzmaTBjoSK3VQXydOR3WXG46LxauhveTCT0fmVA59qAZBFc2zHq32s72zEz2TSi4U5oIKYRRTTOk81vB4x0jj7y1aq%2FCc1%2FDNvM%2Bs8%2Bg6jTfpSSJEjwucPuypIzSdsUijK7l%2B2MT3KRstGtCjjaaHsNxPDyHYP&X-Amz-Signature=9b9ecff49e81321fc2e306f91e204e0b248562649c163cce4c5b28eda0d9b2c4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
