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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCPP5MVC%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIAtXAVbpy6iIurRYWeO%2FAHDiTDsaZM1RRobqdaMTBK5EAiB9k4GSM3Vc0dRjurnxi%2FBQdivBOjZDB9rxKByE9TgLiSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMxAQaUiYPkE%2BZQo70KtwDskUAcUkFK63VcNTIdzGFNt6D1kQN7ovmCR6vD8vm7qJZSXtFQvX3rt%2BCy%2F8vibwcTnJYEoS4ScQQYgj%2FK1kE%2BqssDxjxSyhljevkJaOa1XaiPutHMLCq7gRGEXqdD19pGruRYyRfrjQg%2FsNW62JB%2BOLtqv3LCiiGcnyAMv9iHvMeGHWOF2a7H9zqPNBOwVovrFmQ%2FTvorkmyyCNpD7LCXEeMj11kHvob%2FuEr1DbK6%2FGjtbbvVkhRH8i3WBo26RDEOcL65Iu9QEiMUBx6K%2BSARFNcfbTd%2BBUkrDsCOgD1MaC8oz%2F6%2BKZeEHy8Wme9UwqH86NzKXIObl9ivTv1xOOGzip0QnRVIcleJ5hobHZ%2BTbMgL7FQiVJLc%2BSqIsEMNjdJYoOr13hsoQ%2BebKVSyvIsKItMxkxQCDLtEuWFfI4K9NOKVelxVmhp%2FB7SGdmhJybwnAr%2F92sPozs7sfxP9W7YEulBb%2FgJ%2BNmdwja49woFHZdOgWjLwtUHhpG8nx0rq8TdGUFw6owKj53WODmt4gtEL92%2FdASs57mnGMpKEf3WTNZaMdnt0zBJTJ69YrMR8ZKR9UhK0sOjrM83VXDTNv7VCmOwkGBxy%2FeaC%2F7dDHdFRSS%2BxaI1rD%2FzxKN27pQwkZWFvQY6pgEsM7itei68jyL2CuMR1VkOTg3DxTieAqxoUgYJtwfCVfnyMNnprA4HLZFKT%2BF9Tlr5j%2F%2Fz4yVQVljUpfQAHQssoafVgR1L7e%2F%2F7yYwZxk5b8xQudTEmwxYDXMsymMBk2AtvYovFq9CcpPq3UvD2ijvNk3egLyOBIn78Q6EuyRp7aOxe15Ch0V5Askn%2BEufkgzBbX2WOnhuuZ3u9DMEVYMeNlC2J%2FcH&X-Amz-Signature=45134b894dbe257b11385ede0985a7ba40f78bbe34199b2462435826ac2ca659&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCPP5MVC%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIAtXAVbpy6iIurRYWeO%2FAHDiTDsaZM1RRobqdaMTBK5EAiB9k4GSM3Vc0dRjurnxi%2FBQdivBOjZDB9rxKByE9TgLiSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMxAQaUiYPkE%2BZQo70KtwDskUAcUkFK63VcNTIdzGFNt6D1kQN7ovmCR6vD8vm7qJZSXtFQvX3rt%2BCy%2F8vibwcTnJYEoS4ScQQYgj%2FK1kE%2BqssDxjxSyhljevkJaOa1XaiPutHMLCq7gRGEXqdD19pGruRYyRfrjQg%2FsNW62JB%2BOLtqv3LCiiGcnyAMv9iHvMeGHWOF2a7H9zqPNBOwVovrFmQ%2FTvorkmyyCNpD7LCXEeMj11kHvob%2FuEr1DbK6%2FGjtbbvVkhRH8i3WBo26RDEOcL65Iu9QEiMUBx6K%2BSARFNcfbTd%2BBUkrDsCOgD1MaC8oz%2F6%2BKZeEHy8Wme9UwqH86NzKXIObl9ivTv1xOOGzip0QnRVIcleJ5hobHZ%2BTbMgL7FQiVJLc%2BSqIsEMNjdJYoOr13hsoQ%2BebKVSyvIsKItMxkxQCDLtEuWFfI4K9NOKVelxVmhp%2FB7SGdmhJybwnAr%2F92sPozs7sfxP9W7YEulBb%2FgJ%2BNmdwja49woFHZdOgWjLwtUHhpG8nx0rq8TdGUFw6owKj53WODmt4gtEL92%2FdASs57mnGMpKEf3WTNZaMdnt0zBJTJ69YrMR8ZKR9UhK0sOjrM83VXDTNv7VCmOwkGBxy%2FeaC%2F7dDHdFRSS%2BxaI1rD%2FzxKN27pQwkZWFvQY6pgEsM7itei68jyL2CuMR1VkOTg3DxTieAqxoUgYJtwfCVfnyMNnprA4HLZFKT%2BF9Tlr5j%2F%2Fz4yVQVljUpfQAHQssoafVgR1L7e%2F%2F7yYwZxk5b8xQudTEmwxYDXMsymMBk2AtvYovFq9CcpPq3UvD2ijvNk3egLyOBIn78Q6EuyRp7aOxe15Ch0V5Askn%2BEufkgzBbX2WOnhuuZ3u9DMEVYMeNlC2J%2FcH&X-Amz-Signature=fb9a3790f74b27d0065a837c44db1a844c30aa4ce6c80f8dad30f86655735425&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
