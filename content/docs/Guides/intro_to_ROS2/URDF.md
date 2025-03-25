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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KOR3SQE%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGsQq64h5huq1Fsp8%2BHc6f8op5Vxp0jfij1Z0bA3O6uIAiEAxbcW1TdWH4v3wRyc66IQ7%2Fm%2BQYiEdbBGJduKKJ96qIYqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FRcSB2bDUo1NOk9SrcA5cJfgPRdOS9VmZxRGDDBdM3ALwoXhgpjYyTMd2htaLXos%2BXDJ1OEL%2F9aez4ZV8TUDt1dg4PTjXjNI6p0mWKkKoYwTekmLmMioVniZyUrAE9oDq6s0bVq3YJBzIzU4zCdSi1n%2FU3eDwv9kt5KrkfW36j0Irq2fzro0d0%2Fd9zSKg%2B381KoxEhfJEjQDu7Xeuxg%2F0kqD20vV5Am6M0bn%2F0YqQlcpF5eGsf%2Fy06Ejb5fMfGrSBudKecnlrPkcXDjnpn2KS5YwSMwKh97gZmKswaX9%2FgFW9HCi5SSkVy5hL5NkN6E3p1LAIVVSPlYkBCu59gqSe2n9z73XtehjnlSeKMutXyfsFl2nzbSyhi%2FiNamRRLE5TRdzwGUVwLqwTt%2BXVQFE2th6qrgothDaXPJuclJV3EOe0cRrRaU1oEVBD5ZYHFugNT9e94%2Bvmy6Gj7RG%2F2WorQwwFGX3T30kY7oAY9CeSFdDTDN1HCxBNZZV7M%2B2kU6SUJj9qGm6kLDJ%2BjEEKiepdr%2B%2BcU95%2B8We5ItuAJzi15RbvbAzrOYwB9S%2Frb16C%2BGI0xlBq3Ht9KNyhvtJspuJF60cEpPjmctwmScpbrypQfnNeo3sHOW%2BG3qCtbNtateOGAKmUUJkHnPwnEMLPSiL8GOqUBw0ZSdLKJ401So3YpE2UrzqJanuFWwgIoQxyTRiAE2YDWZ0pM29D0omWTS0hD%2B0POV7vNPjBrTxPLXee7j%2Fiwh%2Buma0eULKCjrflmtkyGKojaWb1N5bGRrB8hX3BEaC0bdXsEGmqas9shrOu20biRLDNzWlmq1wcwKIMW6Fbkw6WiBflsxIDvunGMvzCWnI7Sun27JyckJ4ANGV5uE7LK9joaPTT5&X-Amz-Signature=7b4dbb9a27dd41d1b326d8cc67c1f0f6166fa0dffb92ff7c06dcfe5e11d34767&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KOR3SQE%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGsQq64h5huq1Fsp8%2BHc6f8op5Vxp0jfij1Z0bA3O6uIAiEAxbcW1TdWH4v3wRyc66IQ7%2Fm%2BQYiEdbBGJduKKJ96qIYqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FRcSB2bDUo1NOk9SrcA5cJfgPRdOS9VmZxRGDDBdM3ALwoXhgpjYyTMd2htaLXos%2BXDJ1OEL%2F9aez4ZV8TUDt1dg4PTjXjNI6p0mWKkKoYwTekmLmMioVniZyUrAE9oDq6s0bVq3YJBzIzU4zCdSi1n%2FU3eDwv9kt5KrkfW36j0Irq2fzro0d0%2Fd9zSKg%2B381KoxEhfJEjQDu7Xeuxg%2F0kqD20vV5Am6M0bn%2F0YqQlcpF5eGsf%2Fy06Ejb5fMfGrSBudKecnlrPkcXDjnpn2KS5YwSMwKh97gZmKswaX9%2FgFW9HCi5SSkVy5hL5NkN6E3p1LAIVVSPlYkBCu59gqSe2n9z73XtehjnlSeKMutXyfsFl2nzbSyhi%2FiNamRRLE5TRdzwGUVwLqwTt%2BXVQFE2th6qrgothDaXPJuclJV3EOe0cRrRaU1oEVBD5ZYHFugNT9e94%2Bvmy6Gj7RG%2F2WorQwwFGX3T30kY7oAY9CeSFdDTDN1HCxBNZZV7M%2B2kU6SUJj9qGm6kLDJ%2BjEEKiepdr%2B%2BcU95%2B8We5ItuAJzi15RbvbAzrOYwB9S%2Frb16C%2BGI0xlBq3Ht9KNyhvtJspuJF60cEpPjmctwmScpbrypQfnNeo3sHOW%2BG3qCtbNtateOGAKmUUJkHnPwnEMLPSiL8GOqUBw0ZSdLKJ401So3YpE2UrzqJanuFWwgIoQxyTRiAE2YDWZ0pM29D0omWTS0hD%2B0POV7vNPjBrTxPLXee7j%2Fiwh%2Buma0eULKCjrflmtkyGKojaWb1N5bGRrB8hX3BEaC0bdXsEGmqas9shrOu20biRLDNzWlmq1wcwKIMW6Fbkw6WiBflsxIDvunGMvzCWnI7Sun27JyckJ4ANGV5uE7LK9joaPTT5&X-Amz-Signature=2b172d549a834bd77c255a92bc78961aad5d2ee38e97cea08c1ecb000134ad9d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
