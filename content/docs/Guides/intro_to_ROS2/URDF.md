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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCZ76VZW%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIC1kLVuuTUsb13XoNB0fxCq2S58R8bfqEoeZ9E%2Fbtl7CAiBRNKMPIm795KQQWPOe7XEBVhTFXwBfX6XFdcp61k%2B2eSr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMfNcH9EgbwOirOfscKtwD02EWAAQr2fkeErfc11a7M4SG4LX%2Bw%2Bim9n4NG%2FjgfAHC4OYLIa1dszMa1sv3jzU8IUpg3T2t1rsLVgUQK553xpT8BkzncQQHwp60CxuOet3o%2BljncOonGTXVfUMZ2rWZChs6cIv71bvOyFuvGgN7T%2FauBSkDK3JW2H6owomKMzloSmxfyqmSw4Jrfo0QK43GFaCWJlCsvSutwh5pnxAgC7E%2BG1yWkiiSdRx5eAZL3PxCqmuN72UdBOPAXdav%2BCSHjGfk6nbZhPqz8fAqUlDVpyPQ6kZj4h6WFqOhpLYGmNik9qBs9T%2BnS8Ddf0luM%2F%2BQv4tasUmIoF4XI1Cu%2FF9dWIDkDMrc8EZssVHP55Rrdx%2Bui58SfzG1W8Qnc2SHpscwuDIRReC8ZqdtFl5GDCTQpxHljCPiSj77rPKE8u%2F5WL%2BgXFGXldArAbrfvrEC7BIOeauJvrTK1tJS22zMYQcgJ5NGxo2rOf05utYkqnPa46UdxbwcK7zKoDjGIjtomkmL%2FCiaa3hd11FwSoW6QtYb0nyQCSfM4Fnm62H2rtdxXFTAihg9mAW0lJarg1s8BN9URo9ZY0CX9%2BIvOOh8Ss8OELsjIqi8LTkSxdgAU58KaV8LysrPgCEJs2PkVZUwtKGUwQY6pgEnTT7X9L6aWP14xYJccuuF1%2FMRnFoVM%2FtEnARnY8PE2Am2HB%2FEtc2%2FmBm%2BSfdgKBMN769EdNRWhesntIDZlNsEDlZ6EmeusOIPwhKX2AsET2UOY55hENRS5bMMWPTemC8C76rtOZ54E01RwCUCqtVvZZUT7CaUNEiIFMmp4fKWdDZHgMbzVFurRq6WHnaJqgp5LrTUcga2ATPW%2BQ%2BzBF1WLudOSO5R&X-Amz-Signature=4f3eb13380195417a62ac822e9e20e7c29852e43cd18d46b4358671997a0bbe8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCZ76VZW%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIC1kLVuuTUsb13XoNB0fxCq2S58R8bfqEoeZ9E%2Fbtl7CAiBRNKMPIm795KQQWPOe7XEBVhTFXwBfX6XFdcp61k%2B2eSr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMfNcH9EgbwOirOfscKtwD02EWAAQr2fkeErfc11a7M4SG4LX%2Bw%2Bim9n4NG%2FjgfAHC4OYLIa1dszMa1sv3jzU8IUpg3T2t1rsLVgUQK553xpT8BkzncQQHwp60CxuOet3o%2BljncOonGTXVfUMZ2rWZChs6cIv71bvOyFuvGgN7T%2FauBSkDK3JW2H6owomKMzloSmxfyqmSw4Jrfo0QK43GFaCWJlCsvSutwh5pnxAgC7E%2BG1yWkiiSdRx5eAZL3PxCqmuN72UdBOPAXdav%2BCSHjGfk6nbZhPqz8fAqUlDVpyPQ6kZj4h6WFqOhpLYGmNik9qBs9T%2BnS8Ddf0luM%2F%2BQv4tasUmIoF4XI1Cu%2FF9dWIDkDMrc8EZssVHP55Rrdx%2Bui58SfzG1W8Qnc2SHpscwuDIRReC8ZqdtFl5GDCTQpxHljCPiSj77rPKE8u%2F5WL%2BgXFGXldArAbrfvrEC7BIOeauJvrTK1tJS22zMYQcgJ5NGxo2rOf05utYkqnPa46UdxbwcK7zKoDjGIjtomkmL%2FCiaa3hd11FwSoW6QtYb0nyQCSfM4Fnm62H2rtdxXFTAihg9mAW0lJarg1s8BN9URo9ZY0CX9%2BIvOOh8Ss8OELsjIqi8LTkSxdgAU58KaV8LysrPgCEJs2PkVZUwtKGUwQY6pgEnTT7X9L6aWP14xYJccuuF1%2FMRnFoVM%2FtEnARnY8PE2Am2HB%2FEtc2%2FmBm%2BSfdgKBMN769EdNRWhesntIDZlNsEDlZ6EmeusOIPwhKX2AsET2UOY55hENRS5bMMWPTemC8C76rtOZ54E01RwCUCqtVvZZUT7CaUNEiIFMmp4fKWdDZHgMbzVFurRq6WHnaJqgp5LrTUcga2ATPW%2BQ%2BzBF1WLudOSO5R&X-Amz-Signature=6b8c9f5b34af1c3ad317ac30ed2b2f5694bbdd88d6c51a2b88822086c5c5249b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
