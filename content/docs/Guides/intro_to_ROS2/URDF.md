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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNRIJTRT%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQD%2BnNYoxBahcrgOmXd0oFtIqWsWnhohuRcNDER%2FH%2F8FrwIgdU4pvtfFL8gjIVDSsUbGFrJArOIN1Jo3guwRjLJZXcgq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDNBFwxKMTH0u2sRzfCrcAwDoLEPkn8SoeA0zFdMxLJUtGI8UukSb%2F81znqdMQmv8fW97eR8xF520s2xiny2y7tIwOR1tgWnlVnFpTv9RxnNqj1Crb%2FufpO0Qg8tc0GmiYx2qi%2FTLqqHrqXeyrR839kaidj9VhH20QuSe2HjQy7xizNezsFX4ks2yLOU5j8rJKi5%2BmTrMa%2BNA2KbiJP10s%2B455uiJi6%2Bkp%2BCTd2Rqi%2FLLBMr6gmQLJoJm1kPrQIgJXceyELWWr%2F8lSH2Rvvu5f8lnr00UO%2FoKuV9F60aROU9ngtSgPtLURrvwSot7w5lUZj4V6js1EAF0R5jo4ejJDq%2BG6at37Hrq4%2BfkAyBD5K1xBI1CXs2rfWytkjacJYV8jh0u7GDYM7a4QcIDvlWI%2Bg59KTF78snR34ZX3Qp3r1vUK%2FdThRsGysdC5P4SUJx79ePBl%2FWymsyvSJMls4weLb9GRsExBoNltnWcb0ZT%2B1ylXDvrEyf80cigUF8i%2Fc1f0xZbYx96xtCATv6FtPElILFQOgjZBhwiZpABH%2FYhNNq49eMIeLnwqxTs63ydBJeTS3H4KqtMTqNrH1cD%2BfDXNOg1Ab%2BUz24PVcZv5mM0%2BICvq5oRrYIJlvDc6fkLVsCMPNiSSNtiq0uGoboYMMTArL4GOqUBztDCO4C9T%2F5mJtHdClGLtTuY%2F3UeLnT0l9VFnqjNKWepv5rgoNdA616AmSaUblURxKLA2y0G20DpQWAnmD6mQl%2Bn3F77M%2F3a2OER1jYZuxql%2B6YExLyYWNgMNF%2FNapX%2BE%2Br1Pip6h%2BKwKS3lZWu2OySr7kWdTwC6o2N7E332UuJoBfWahrP4HDtpbMWh%2BddXRErm53wY%2FWxlqkeU%2BPmEtu%2FjU%2B3l&X-Amz-Signature=751454fd6351e4ef155c34957681c049cb6869192c46262641cfab7cf93cf91b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNRIJTRT%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQD%2BnNYoxBahcrgOmXd0oFtIqWsWnhohuRcNDER%2FH%2F8FrwIgdU4pvtfFL8gjIVDSsUbGFrJArOIN1Jo3guwRjLJZXcgq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDNBFwxKMTH0u2sRzfCrcAwDoLEPkn8SoeA0zFdMxLJUtGI8UukSb%2F81znqdMQmv8fW97eR8xF520s2xiny2y7tIwOR1tgWnlVnFpTv9RxnNqj1Crb%2FufpO0Qg8tc0GmiYx2qi%2FTLqqHrqXeyrR839kaidj9VhH20QuSe2HjQy7xizNezsFX4ks2yLOU5j8rJKi5%2BmTrMa%2BNA2KbiJP10s%2B455uiJi6%2Bkp%2BCTd2Rqi%2FLLBMr6gmQLJoJm1kPrQIgJXceyELWWr%2F8lSH2Rvvu5f8lnr00UO%2FoKuV9F60aROU9ngtSgPtLURrvwSot7w5lUZj4V6js1EAF0R5jo4ejJDq%2BG6at37Hrq4%2BfkAyBD5K1xBI1CXs2rfWytkjacJYV8jh0u7GDYM7a4QcIDvlWI%2Bg59KTF78snR34ZX3Qp3r1vUK%2FdThRsGysdC5P4SUJx79ePBl%2FWymsyvSJMls4weLb9GRsExBoNltnWcb0ZT%2B1ylXDvrEyf80cigUF8i%2Fc1f0xZbYx96xtCATv6FtPElILFQOgjZBhwiZpABH%2FYhNNq49eMIeLnwqxTs63ydBJeTS3H4KqtMTqNrH1cD%2BfDXNOg1Ab%2BUz24PVcZv5mM0%2BICvq5oRrYIJlvDc6fkLVsCMPNiSSNtiq0uGoboYMMTArL4GOqUBztDCO4C9T%2F5mJtHdClGLtTuY%2F3UeLnT0l9VFnqjNKWepv5rgoNdA616AmSaUblURxKLA2y0G20DpQWAnmD6mQl%2Bn3F77M%2F3a2OER1jYZuxql%2B6YExLyYWNgMNF%2FNapX%2BE%2Br1Pip6h%2BKwKS3lZWu2OySr7kWdTwC6o2N7E332UuJoBfWahrP4HDtpbMWh%2BddXRErm53wY%2FWxlqkeU%2BPmEtu%2FjU%2B3l&X-Amz-Signature=769373914d1424f4417846ebecbca74c9e788d12359ff8d9b3b60d38f4b2ee8a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
