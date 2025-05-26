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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMCLUDVC%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T051013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIBkLlQsx7RzhCrUW2v62ffEVYw3Pra6V7b%2Fkrzbkg51BAiBcPeQA1W1HQIucqNNi5o1W0Gd7Iscmx3lpJJ29uNCDJCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM2osDx8%2BejAGET47rKtwD9O%2BNwBy30Ql1bUbOQPi7jsTbj5lJ99V%2B1oh9F2k6xQaDEsmnKEgKePqxWqaGKo64H3dOHYWS6znuNm%2FRSMaTGjkY601CvMFWTU5RqWqIFIRM9Hri%2BlGQ%2BiV%2BtN8adkhrl9OK0hX78SfJVpE69MMYUkKtkZRQYFBtMvj%2FWhO69I0n5D5f4lMgIxr1%2B1OdtF2127t7fzG6RkwKPFVOBgoOE0eD5SLID53fcreHpZiSOFltBDDvfLl4f9O0HIy0%2BGScYG0c6KTvGzGSHOuPJ30lC7qC0maSaL2C1vFiNJLb4VmZAAXf%2FTOceNP9JFYsNKcFOTdEIxgwMXKBWpOcGMkq1nhfrdwhZJY2MybjxfyPEmmHuCXHWucpThOlUpv2ZhtIlcuf12yAJNffMl2LW71xjiL3UkiJaIpLtMeBjp1wpuobNXsacPsJOkusV%2FbemqFOeDFbWjt3BYcTIpjjVulVLu9t9x3Se6dH0GvlpXL%2FBb%2BZMnDLNUSZWJ6Pn%2FwWDPUenTCZCxSVSNF2gLJyinCvXqWifxA0g8%2BYMsS3BkHFEbfKTPfovSxZ9bFKgrrRtEwUQslOB1v9jz17A8pAZsUBwhXIrMLRiSdLlReImFhk033KrId9etfmvlPAsukw3p3PwQY6pgE3zDBz6NhDphD9eQVen%2FfxAZoTC3GHCcafhytgB6YcbUpazQSxMQlouVUMLrhTvMHJDX37K3zaRhB44yXYDDlXHzGwLcAgLU1LS6%2Fp1utj6%2BCynh0zDqnQJHBVZZUQ0Pme1qiM3xD9vUizNW2M%2BenAQyT5m8llq8OKKajPFZVsJ3Ej1OxllW02oTgvSb9oM6a4OaSP3nU%2B4FwMNwgjS1E%2BWKQNFO%2FV&X-Amz-Signature=df40a20260f3b6ebb6bf90ffb37c5ec5ee25a54faca02d794ae23808f17e1036&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMCLUDVC%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T051013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIBkLlQsx7RzhCrUW2v62ffEVYw3Pra6V7b%2Fkrzbkg51BAiBcPeQA1W1HQIucqNNi5o1W0Gd7Iscmx3lpJJ29uNCDJCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM2osDx8%2BejAGET47rKtwD9O%2BNwBy30Ql1bUbOQPi7jsTbj5lJ99V%2B1oh9F2k6xQaDEsmnKEgKePqxWqaGKo64H3dOHYWS6znuNm%2FRSMaTGjkY601CvMFWTU5RqWqIFIRM9Hri%2BlGQ%2BiV%2BtN8adkhrl9OK0hX78SfJVpE69MMYUkKtkZRQYFBtMvj%2FWhO69I0n5D5f4lMgIxr1%2B1OdtF2127t7fzG6RkwKPFVOBgoOE0eD5SLID53fcreHpZiSOFltBDDvfLl4f9O0HIy0%2BGScYG0c6KTvGzGSHOuPJ30lC7qC0maSaL2C1vFiNJLb4VmZAAXf%2FTOceNP9JFYsNKcFOTdEIxgwMXKBWpOcGMkq1nhfrdwhZJY2MybjxfyPEmmHuCXHWucpThOlUpv2ZhtIlcuf12yAJNffMl2LW71xjiL3UkiJaIpLtMeBjp1wpuobNXsacPsJOkusV%2FbemqFOeDFbWjt3BYcTIpjjVulVLu9t9x3Se6dH0GvlpXL%2FBb%2BZMnDLNUSZWJ6Pn%2FwWDPUenTCZCxSVSNF2gLJyinCvXqWifxA0g8%2BYMsS3BkHFEbfKTPfovSxZ9bFKgrrRtEwUQslOB1v9jz17A8pAZsUBwhXIrMLRiSdLlReImFhk033KrId9etfmvlPAsukw3p3PwQY6pgE3zDBz6NhDphD9eQVen%2FfxAZoTC3GHCcafhytgB6YcbUpazQSxMQlouVUMLrhTvMHJDX37K3zaRhB44yXYDDlXHzGwLcAgLU1LS6%2Fp1utj6%2BCynh0zDqnQJHBVZZUQ0Pme1qiM3xD9vUizNW2M%2BenAQyT5m8llq8OKKajPFZVsJ3Ej1OxllW02oTgvSb9oM6a4OaSP3nU%2B4FwMNwgjS1E%2BWKQNFO%2FV&X-Amz-Signature=d149ff8385e3ca8c46e406d4edb20e119da72088e10a850e37c2f56671dcd584&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
