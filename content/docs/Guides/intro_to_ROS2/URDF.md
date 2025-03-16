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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672YPTKSB%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJdCGStpzW5GG8r3a%2BYebuuBx4A7Yg2qOFEDbxSUDvQAiEArxT5YJVJsbRLXrKcs4zE3nZ%2BNNletAaFmsGmlX5MFpkq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDHBN1%2FGwCEb25uf74CrcA25UILeZXqz%2Bww3eDtND%2FIp9lqWYnvBTeg8aFHoCLVS0oeXjKVAG21gjNpZ5udxi6SyN%2F%2BV%2F7lmnN9odgNayK4%2BI1UVqmZTVRF%2BB1MmqlasHMtd7PLoaOcMKGRQ0ATcUwnYVaRw%2Fzp3d%2BxBUW7imEBDhC33tWcIxljpYkX6WIs3jBIuRGsyPNdYrTWe9NdmPs4AmHL7X%2BjDf4t%2Bk1QvtuFfEdKU185Umk8l4dFZ8nAwpzJnrN4OpIl9Qim%2FYl3JVku%2FJIVqb00i4eyUf%2F9PeQ9RSph%2BUfbhdvoyHGVOpCYMogHf7nbrEUmygWufdc84fGKseXLm%2Fv06vYxU8PdDCVE4Sn4qGjqqjehLZ0g2u9eXD9MqZbjjCdDzz9diX6uaWjNQpST8KNs0lAiYFR9nFD8bpjYFPLWaupB5npqED7Au8mmoP80P5hTHeblyljGZ5AjseZjtM63x%2BOK3zuHU9vvMavXHD5rmbo%2FtWV6B09YVe9%2Bg95b5tFBQQQWQQAKKmlW7mvQsZKOc2%2F26Sll69DWn%2FhSOCEgHEn%2FSmObJ1R0I%2B%2FJhON6cDlZQl1lRjBrwVu6aE8xKgvufsKl9McW2riBoJRtJm44jG76PZH7kNpL5UYgqjPUNTJp5YQiteMPL93L4GOqUBecJMhfkZ%2BmFwYdnNNTG%2BaZFBceBq6RZixlgrcTLjF7Kxp4WdLwOReQlNgAF2loms33dGX4vQf1kHboUeWalas5HKX4IhhfsQ84dQcqZPOjFPJzLAxJn0FtpJkiePcNMiZaWoJhTfuE5gpTl49LALYA8hERCDjjYNueriL2TH%2BQtP2H90csjzqYGG7qFbPM%2FSAAmxc5al9L4r9FcwIGDll6mSS1nA&X-Amz-Signature=3d996cbc8732b03f1b54dda304770ea96274255e9e7baacb268563ab72c10908&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672YPTKSB%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJdCGStpzW5GG8r3a%2BYebuuBx4A7Yg2qOFEDbxSUDvQAiEArxT5YJVJsbRLXrKcs4zE3nZ%2BNNletAaFmsGmlX5MFpkq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDHBN1%2FGwCEb25uf74CrcA25UILeZXqz%2Bww3eDtND%2FIp9lqWYnvBTeg8aFHoCLVS0oeXjKVAG21gjNpZ5udxi6SyN%2F%2BV%2F7lmnN9odgNayK4%2BI1UVqmZTVRF%2BB1MmqlasHMtd7PLoaOcMKGRQ0ATcUwnYVaRw%2Fzp3d%2BxBUW7imEBDhC33tWcIxljpYkX6WIs3jBIuRGsyPNdYrTWe9NdmPs4AmHL7X%2BjDf4t%2Bk1QvtuFfEdKU185Umk8l4dFZ8nAwpzJnrN4OpIl9Qim%2FYl3JVku%2FJIVqb00i4eyUf%2F9PeQ9RSph%2BUfbhdvoyHGVOpCYMogHf7nbrEUmygWufdc84fGKseXLm%2Fv06vYxU8PdDCVE4Sn4qGjqqjehLZ0g2u9eXD9MqZbjjCdDzz9diX6uaWjNQpST8KNs0lAiYFR9nFD8bpjYFPLWaupB5npqED7Au8mmoP80P5hTHeblyljGZ5AjseZjtM63x%2BOK3zuHU9vvMavXHD5rmbo%2FtWV6B09YVe9%2Bg95b5tFBQQQWQQAKKmlW7mvQsZKOc2%2F26Sll69DWn%2FhSOCEgHEn%2FSmObJ1R0I%2B%2FJhON6cDlZQl1lRjBrwVu6aE8xKgvufsKl9McW2riBoJRtJm44jG76PZH7kNpL5UYgqjPUNTJp5YQiteMPL93L4GOqUBecJMhfkZ%2BmFwYdnNNTG%2BaZFBceBq6RZixlgrcTLjF7Kxp4WdLwOReQlNgAF2loms33dGX4vQf1kHboUeWalas5HKX4IhhfsQ84dQcqZPOjFPJzLAxJn0FtpJkiePcNMiZaWoJhTfuE5gpTl49LALYA8hERCDjjYNueriL2TH%2BQtP2H90csjzqYGG7qFbPM%2FSAAmxc5al9L4r9FcwIGDll6mSS1nA&X-Amz-Signature=55d20e0664b0603635ae3ddcabd06bb91b4fa127fbaa1c9bf5e87e9d2c213f0f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
