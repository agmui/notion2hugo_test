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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2FVR7TX%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQD%2FPp9ARULHaqXAJzK6z4BDiorUBbSN%2F0jm6938u5FO5QIgfF1wpijavNLnZjoBBq8Z%2F%2FewAbMgcLKfz%2FD9hIm2APcqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMuW1tW%2FErAoqLyB%2FircA5snZbcewyGVlSwDly11IQR7AHuymXK9kbL0l9BW5sY1Fsi%2B%2B5IpseQrOnUklFAsC4MIRCS0paAmOBpktbPLBWi6PHdYBExUekouJd09ByO%2B9eCfnCvBlUjFjlfTfd77Y7vUb7vwzt1TD8pSGClv4pwVUPkY%2F25zBp7Gx5Bzgaib2Nq3DWsMwMPcAFbBTAkw%2BTfcfBYCEUs%2B697YsAbuYRE67V9Pi2O1T3mwsJvj%2FEARZRwoCBMOH%2B5Qgru%2Bp1Zv%2F2mh5bb31u5IbGFabCLFuFyhSPKiYfc394rgDJeUq03YlR83MZ3V9RAOIKIjD66PaH3TfAnHA%2FdrQdW3maRshi4Z6MWSGTTu5hgTfn8wzQUIZ%2F%2F2zn8fKeWCho56yzsLXyTAgVrcbRtf9YDxf%2Bg3NtIV34E8uWB%2FKKTE7vBwe%2BASIxEvDfEcm2qVSe%2F9d3fh%2Bb4uEwfNDrGOXU41SXLeux58VOJUYYcI4VgXykpLzwajV%2FkSanFnPT3kMjmwGXDmgUiVtBTnYV1z1rLU32ozvssfau%2BZx3Sq4V%2FW3MCsnLYiAPlNd14ag3IRHdUmNGJmt2tGYhpqs1c85sSrDbvaT%2Fz6rM8ATkpxhz5zh1gXWuAgaOQc2WjtAGK0rnlAMJbyi8EGOqUBny7FA6Suxh3Fo2CIt6HY95YdTU1f2jBVEh9wZjsNOyE%2F2%2FwKUmKNoEydkgsup6C%2BlgT%2F%2FxnhuVpAsuMoypPOPrY8ejPvlHgVAie9bVhr%2FPJ%2F7BQs2RPorluhvsuSSyvwf7ZZrJlfFTK5z%2F7%2Fi%2FIcJvUrObcSy5om5XJAbUyPp7NEO0gvd8jIEnhqLKknPQBgYkIbKysVLXPdEyaJYNwJXDeRBInd&X-Amz-Signature=5d9fc3408874679686f6b9349ad30805d56eb9503b80d57d36bf509b60e832e0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2FVR7TX%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQD%2FPp9ARULHaqXAJzK6z4BDiorUBbSN%2F0jm6938u5FO5QIgfF1wpijavNLnZjoBBq8Z%2F%2FewAbMgcLKfz%2FD9hIm2APcqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMuW1tW%2FErAoqLyB%2FircA5snZbcewyGVlSwDly11IQR7AHuymXK9kbL0l9BW5sY1Fsi%2B%2B5IpseQrOnUklFAsC4MIRCS0paAmOBpktbPLBWi6PHdYBExUekouJd09ByO%2B9eCfnCvBlUjFjlfTfd77Y7vUb7vwzt1TD8pSGClv4pwVUPkY%2F25zBp7Gx5Bzgaib2Nq3DWsMwMPcAFbBTAkw%2BTfcfBYCEUs%2B697YsAbuYRE67V9Pi2O1T3mwsJvj%2FEARZRwoCBMOH%2B5Qgru%2Bp1Zv%2F2mh5bb31u5IbGFabCLFuFyhSPKiYfc394rgDJeUq03YlR83MZ3V9RAOIKIjD66PaH3TfAnHA%2FdrQdW3maRshi4Z6MWSGTTu5hgTfn8wzQUIZ%2F%2F2zn8fKeWCho56yzsLXyTAgVrcbRtf9YDxf%2Bg3NtIV34E8uWB%2FKKTE7vBwe%2BASIxEvDfEcm2qVSe%2F9d3fh%2Bb4uEwfNDrGOXU41SXLeux58VOJUYYcI4VgXykpLzwajV%2FkSanFnPT3kMjmwGXDmgUiVtBTnYV1z1rLU32ozvssfau%2BZx3Sq4V%2FW3MCsnLYiAPlNd14ag3IRHdUmNGJmt2tGYhpqs1c85sSrDbvaT%2Fz6rM8ATkpxhz5zh1gXWuAgaOQc2WjtAGK0rnlAMJbyi8EGOqUBny7FA6Suxh3Fo2CIt6HY95YdTU1f2jBVEh9wZjsNOyE%2F2%2FwKUmKNoEydkgsup6C%2BlgT%2F%2FxnhuVpAsuMoypPOPrY8ejPvlHgVAie9bVhr%2FPJ%2F7BQs2RPorluhvsuSSyvwf7ZZrJlfFTK5z%2F7%2Fi%2FIcJvUrObcSy5om5XJAbUyPp7NEO0gvd8jIEnhqLKknPQBgYkIbKysVLXPdEyaJYNwJXDeRBInd&X-Amz-Signature=900b50e95d53880d37a9cf1778cb395e71743e8c7e7b80e21c9feb11ac75573b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
