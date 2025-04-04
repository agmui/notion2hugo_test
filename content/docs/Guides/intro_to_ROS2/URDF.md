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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF6FR4JM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg%2FXQ5IyABkNBraRduF7FsNFV7CGmg6hwboYdlvsuFnwIgO9TDbQXJMprk8FsAVfqsFrwnU3mIdEkrrz36%2Bz6%2FO3Yq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDJodbdnTtSpFj%2Fn0eircA%2BY3G8yYZe2emiJpoaOv0TfuCd5bXurvHGAkPbCY%2BWHmYSG7NdIpBe7wC0W7jHmLvZrTcUhV7%2FaR7YuG4GOWQ6mEyFoc4LdSC2pRjSA%2FfgJJat8uK6Nr5xhosk5YJLanSUxD1CtyTiRfd%2FNua4AdUdAo7Fs5xg2qFZsicREQQWIr%2BjGleXVchgdejiRPDFJp1giTEhr%2BZAfTTTOigUhjOPyMfTiuv6PMENqie9YpxZ%2B8%2F%2B2Dxuyx06C%2BO8sndh34dVgazbwGgqW%2FP73BLbNkjt%2FGoShMy%2Fgc1kdS%2FH%2F7RNh5slgKltxCjq7kYCK%2FYwEJHMRwFFDPqcU0Lt9kyBBxxr%2BgOebkuM1FEnciTlsdIyugziyiB6ipAJqc%2B8uLHY9ENNi2qVq1agpLnBFZiOwtW5buRmc9JhNvyuslPjIKuM2wve%2FnlmBDbij%2BJtTKmTUzvETE2ou%2BdEr0cUEBOVQA9dxDtM5gwUZ0li5qjezY5UYgw05G6%2BIvml4r9WFi6CGyzYKm6bu9IlvSgXy2Junu09qNPun6NDbjkPOSZA1M5sZ%2Bbct8yIkRTBZl%2Fm4UCK4BG2K3Q9DB1r%2B%2F2hPsQ2SXenAykYz5rZLyB0BBE8Vs%2FyaHvIi%2BogFlVGjTE7ScMLjIvr8GOqUBNzMmJWpyTvf%2ByuIwnAb0jBIP6Qc4aY%2FhmDZS2%2BgwbAEoqI2CrwLgHUSZ79d2xFKcuE6d2WPSdgnhRY0ZuPBMYI%2Fq4YFBPNbfClcMlh09UhlgQVQyelL7EeK1q4SLEPzfN1AiAmEfFardE0d%2FBZY0%2BOiHHYGfhcW%2BjmuIrTEw2QAbXF%2B91CahlWCFjQNlkE4nPY4%2BcgkEsYVq5mzz%2FLkzrhnx7HuE&X-Amz-Signature=4ace1657d6b269facef67496bd9a4f3d5a797ea66a29aeb0eae9b7bea4f25548&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF6FR4JM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg%2FXQ5IyABkNBraRduF7FsNFV7CGmg6hwboYdlvsuFnwIgO9TDbQXJMprk8FsAVfqsFrwnU3mIdEkrrz36%2Bz6%2FO3Yq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDJodbdnTtSpFj%2Fn0eircA%2BY3G8yYZe2emiJpoaOv0TfuCd5bXurvHGAkPbCY%2BWHmYSG7NdIpBe7wC0W7jHmLvZrTcUhV7%2FaR7YuG4GOWQ6mEyFoc4LdSC2pRjSA%2FfgJJat8uK6Nr5xhosk5YJLanSUxD1CtyTiRfd%2FNua4AdUdAo7Fs5xg2qFZsicREQQWIr%2BjGleXVchgdejiRPDFJp1giTEhr%2BZAfTTTOigUhjOPyMfTiuv6PMENqie9YpxZ%2B8%2F%2B2Dxuyx06C%2BO8sndh34dVgazbwGgqW%2FP73BLbNkjt%2FGoShMy%2Fgc1kdS%2FH%2F7RNh5slgKltxCjq7kYCK%2FYwEJHMRwFFDPqcU0Lt9kyBBxxr%2BgOebkuM1FEnciTlsdIyugziyiB6ipAJqc%2B8uLHY9ENNi2qVq1agpLnBFZiOwtW5buRmc9JhNvyuslPjIKuM2wve%2FnlmBDbij%2BJtTKmTUzvETE2ou%2BdEr0cUEBOVQA9dxDtM5gwUZ0li5qjezY5UYgw05G6%2BIvml4r9WFi6CGyzYKm6bu9IlvSgXy2Junu09qNPun6NDbjkPOSZA1M5sZ%2Bbct8yIkRTBZl%2Fm4UCK4BG2K3Q9DB1r%2B%2F2hPsQ2SXenAykYz5rZLyB0BBE8Vs%2FyaHvIi%2BogFlVGjTE7ScMLjIvr8GOqUBNzMmJWpyTvf%2ByuIwnAb0jBIP6Qc4aY%2FhmDZS2%2BgwbAEoqI2CrwLgHUSZ79d2xFKcuE6d2WPSdgnhRY0ZuPBMYI%2Fq4YFBPNbfClcMlh09UhlgQVQyelL7EeK1q4SLEPzfN1AiAmEfFardE0d%2FBZY0%2BOiHHYGfhcW%2BjmuIrTEw2QAbXF%2B91CahlWCFjQNlkE4nPY4%2BcgkEsYVq5mzz%2FLkzrhnx7HuE&X-Amz-Signature=8edbffec4bf05ff14c78d8adb8ecae65989974753adccaf7c05f4c1fd470a1ef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
