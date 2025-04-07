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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLAHDSLF%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcSS%2BnA6ejj%2F1BS0yNdhK%2BbOFLWlE8Q3aXFLpMolvsfAIhAJK1ZCLI%2FYKB1GefJIPZevvHzGf8iWVUIIvpen0neGsZKv8DCGUQABoMNjM3NDIzMTgzODA1Igy8km%2BwRGnYAV1e2UIq3APPz5h5FwS3AwthwzXDaeVuCFV%2B17f1uOj7jPrulHvWhBaBlaWa9fTNm4mTEoXNZnBq1LLSWPwixFwI9%2FUpExRZPT17qmO%2F24yiJs%2FS3rHA8q3x67mBUnLf4a57R5DDffk%2FDtBPZZ7suUCgVwnZNWSdHX4r0scrT6aeR6AppSKqgvNxl5TXrv7wioIpjYXWS3oLdB9bMzVhTnZYSd1xINhaP4UhsQBHC3HCYK5VQfMxaW7GDfv%2F%2Fu8i5AVpZzAkjzsLDU%2B5J2JRDKBjFWlyQ11EU0OPb3W%2BFSe4TWjjxm9yWQcDAxuM%2F5oDBTJhZbmnxVTXHI8DDnLzh1E3ji1rsJz6MCtZ%2F0KGwJIOax8WPO7GlVL1pPcVsYNFwsTd3wXfk%2FXiEOeFGsZbC05MS0%2BGxKMcMYVca6gsELfyFbT4iO85FADAeiMwWpTlgMw4IEvKvrCyYGEBFTft3FCnBsiZICm%2BWN22cWMiLaIj2FamrFWvU3NukPyX2vE4NYWiD3Dn%2BeHx7e3GnryGFBt0r8nXSIMmON4Hpy71CbXCyHNF1lrD30zWLeyc%2B%2BchLE29UogyHQ3j6%2ByQUdTHT4U4xBcRyzipLPw%2BJtzlzvVfVhUthBEuVCx0P0XDNH7NbN7txDDc5dC%2FBjqkAW3CfOveQvv2qr0fMnT%2F6mBiDy56Job0bWqlmVqjN248o9qbvLmWYa17%2BoU4gk5znRaE3qIqCvxRckyfbq4q%2BDY%2FUv3fHCfznJMTBclSkoP%2Bofisi3BP2RbYWOD2rLuC4Npl6HqMpRDCEqSINrh4S90JC5q924teXAJa9qdyJYxxoHT%2FopsAB54SW5xcddxYhqr9ZEESqHayJN1JOkm%2BLmV6h17j&X-Amz-Signature=442938defdb19d2bb5ca2517fbec53424f8803bdbab3c50a6155eb8123094650&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLAHDSLF%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcSS%2BnA6ejj%2F1BS0yNdhK%2BbOFLWlE8Q3aXFLpMolvsfAIhAJK1ZCLI%2FYKB1GefJIPZevvHzGf8iWVUIIvpen0neGsZKv8DCGUQABoMNjM3NDIzMTgzODA1Igy8km%2BwRGnYAV1e2UIq3APPz5h5FwS3AwthwzXDaeVuCFV%2B17f1uOj7jPrulHvWhBaBlaWa9fTNm4mTEoXNZnBq1LLSWPwixFwI9%2FUpExRZPT17qmO%2F24yiJs%2FS3rHA8q3x67mBUnLf4a57R5DDffk%2FDtBPZZ7suUCgVwnZNWSdHX4r0scrT6aeR6AppSKqgvNxl5TXrv7wioIpjYXWS3oLdB9bMzVhTnZYSd1xINhaP4UhsQBHC3HCYK5VQfMxaW7GDfv%2F%2Fu8i5AVpZzAkjzsLDU%2B5J2JRDKBjFWlyQ11EU0OPb3W%2BFSe4TWjjxm9yWQcDAxuM%2F5oDBTJhZbmnxVTXHI8DDnLzh1E3ji1rsJz6MCtZ%2F0KGwJIOax8WPO7GlVL1pPcVsYNFwsTd3wXfk%2FXiEOeFGsZbC05MS0%2BGxKMcMYVca6gsELfyFbT4iO85FADAeiMwWpTlgMw4IEvKvrCyYGEBFTft3FCnBsiZICm%2BWN22cWMiLaIj2FamrFWvU3NukPyX2vE4NYWiD3Dn%2BeHx7e3GnryGFBt0r8nXSIMmON4Hpy71CbXCyHNF1lrD30zWLeyc%2B%2BchLE29UogyHQ3j6%2ByQUdTHT4U4xBcRyzipLPw%2BJtzlzvVfVhUthBEuVCx0P0XDNH7NbN7txDDc5dC%2FBjqkAW3CfOveQvv2qr0fMnT%2F6mBiDy56Job0bWqlmVqjN248o9qbvLmWYa17%2BoU4gk5znRaE3qIqCvxRckyfbq4q%2BDY%2FUv3fHCfznJMTBclSkoP%2Bofisi3BP2RbYWOD2rLuC4Npl6HqMpRDCEqSINrh4S90JC5q924teXAJa9qdyJYxxoHT%2FopsAB54SW5xcddxYhqr9ZEESqHayJN1JOkm%2BLmV6h17j&X-Amz-Signature=71f885719791698c05db4a50a70154dc06027f675531b4448b47d5ede8bed8e0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
