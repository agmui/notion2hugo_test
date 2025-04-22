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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEJ7RNRO%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDU9%2BO0gKfsBPnCTwlY0kxSaHNeNXsL%2BRYxmhT%2BCqSc6QIgL5Ura2V1qicL%2F%2FOEUNYnA31tDTaoAhe5WGfRvGnKDDAqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIAKKY37hkzcwgMQSrcA4PukH6RkE%2Fgoukfv3BVqFRDNLA3hByYEQ3ozJeai9ClUYPmhyNobMBgFsa6J35vRAGRP1wXT3P%2BYyGzocBafihuCrYszE14IDgu9Y1onKDhC%2Bp1mz0Ec3cwMiWAr03zN6K9G1vLiXzaCP%2FkvMyHfqzwXC0v%2BsbeAq2zny32rjVs4eJEOSC0Nbukbbz4wbZXcNjcQVl8vC8lCCXco%2FTQkf%2B%2FrBvbMyPk%2BsW%2F74MET%2Bf3soTUCjuYSyGWJIzk%2FsdefiLpQlbxyjwSLkEvmTCbGcwI%2FlKEjwrn8DoeThVuCKLYBUN%2Bbcu%2FmICkiNOCJMGyF84AV7tBlc4I%2F0D3xLCEaoIlNiO8Q4Xmu0wPlKwZmNb%2FDIHWWaKGewwUKUEGxGrIQRWSZgl0BzM8yVPWSAR90xzhJhQij5xJNvgmNwipzV26J%2B9JjxUJQ3O6cFbGN8QULojYo6tVrwVk0a4tyRaeTviuoCONtw%2FgETGwfmBestP417co1QawIXyEPC0hfpWrRomkrCu4oPuF4OcaKvmUwffNwFs5fvCpieOQdFEzQUDCSSQW6UYoIAMdNsFhclcPbGjqSCxXcf%2B1hWpyWHiYJo5DMSvI8O5dP9PiS0Q3n4FiTyNPsF0jW1CRwmW8MJi7n8AGOqUBAgJwcWFI9cOfJlv2se1AXvZK3vgkHFnaN4UelZuHYKhWcdeOKpCbqJt4xCGHE2h0xjkc3l5Gxf8pf5qD7Dig8pzLy6BuYpMO9d%2FUqIX62jnh7ziLG6669aW5DkUTS0H4W%2BM7YsYoOUblCeVYcRGdjg0H3OU6m3ra5Bq5%2BlklEPrcVE7eDvS5PKSKKJJDr0208Je48zEP7PpgtpZ0oEV4j43jEFU2&X-Amz-Signature=977235b2b87ffe6758743f28b7572970220a2f99b0fa152888c5790f3beb0843&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEJ7RNRO%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDU9%2BO0gKfsBPnCTwlY0kxSaHNeNXsL%2BRYxmhT%2BCqSc6QIgL5Ura2V1qicL%2F%2FOEUNYnA31tDTaoAhe5WGfRvGnKDDAqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIAKKY37hkzcwgMQSrcA4PukH6RkE%2Fgoukfv3BVqFRDNLA3hByYEQ3ozJeai9ClUYPmhyNobMBgFsa6J35vRAGRP1wXT3P%2BYyGzocBafihuCrYszE14IDgu9Y1onKDhC%2Bp1mz0Ec3cwMiWAr03zN6K9G1vLiXzaCP%2FkvMyHfqzwXC0v%2BsbeAq2zny32rjVs4eJEOSC0Nbukbbz4wbZXcNjcQVl8vC8lCCXco%2FTQkf%2B%2FrBvbMyPk%2BsW%2F74MET%2Bf3soTUCjuYSyGWJIzk%2FsdefiLpQlbxyjwSLkEvmTCbGcwI%2FlKEjwrn8DoeThVuCKLYBUN%2Bbcu%2FmICkiNOCJMGyF84AV7tBlc4I%2F0D3xLCEaoIlNiO8Q4Xmu0wPlKwZmNb%2FDIHWWaKGewwUKUEGxGrIQRWSZgl0BzM8yVPWSAR90xzhJhQij5xJNvgmNwipzV26J%2B9JjxUJQ3O6cFbGN8QULojYo6tVrwVk0a4tyRaeTviuoCONtw%2FgETGwfmBestP417co1QawIXyEPC0hfpWrRomkrCu4oPuF4OcaKvmUwffNwFs5fvCpieOQdFEzQUDCSSQW6UYoIAMdNsFhclcPbGjqSCxXcf%2B1hWpyWHiYJo5DMSvI8O5dP9PiS0Q3n4FiTyNPsF0jW1CRwmW8MJi7n8AGOqUBAgJwcWFI9cOfJlv2se1AXvZK3vgkHFnaN4UelZuHYKhWcdeOKpCbqJt4xCGHE2h0xjkc3l5Gxf8pf5qD7Dig8pzLy6BuYpMO9d%2FUqIX62jnh7ziLG6669aW5DkUTS0H4W%2BM7YsYoOUblCeVYcRGdjg0H3OU6m3ra5Bq5%2BlklEPrcVE7eDvS5PKSKKJJDr0208Je48zEP7PpgtpZ0oEV4j43jEFU2&X-Amz-Signature=be0f97b22a30adf3802660f481b45a9765cce8094b1d144a2ace61287246e675&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
