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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JG4WUZH%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIBspaoi2NRKgw6ZCjs5WO8JMUPzqd0ik4WN2kJRGktvTAiEAnzEvhBnZ56QfJ3BRWBxCuERQEL8j6mMB%2BQemdkmy7nkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDAj4l0VV%2FLfwnsA1SrcA%2BUDJhshqukja6cc36OniRjaobldZiLlB4lZBV2OsucbZ01a0udJud4ItY2iemKAI349nVnn5k3%2BkDMGlwTfYhinpM%2B%2F1BiZjVuCmnSqxjVaoQXqJse05FETsghzruYu2jueR83r1Rxv64Iovn7WOHTvuVYg3tE%2BDUzZGKw8J2b86%2Fs1z7m%2B9RS0bogM5KzGiD4h0KvNkTnoQSp6owPtGrz2NOtQCHLBaxtLNExhjPZBrwUhxN4xDANPIOvl%2Bk1oMEs0wUzfBwS3MubySLermQTTciIGyqbh1V2pWdA6KIFFuf35%2Bpwu75cx1o2alDbh92vK8d%2FuJghzBz0NYNzszXrvF6oiIAjQHMuzPVi0ACwuvbfUb%2B0mHMfLATc4HronfKgu4KFGPVJOcFe9N3JOKqcEZK2MOSFcszrkfwKbOuYIjva6Y%2BXaWpPl1PTqZyCCWeqBAzm6WMFFASU4Jw4yspsmIlr8KuZDl8S%2BXGnZthHvD7iSZwQvqCLEgXope80rzoIdN%2F41GnAXuChUIjRM3hzOZOEfXWLsCOOVTW3hKzeBSe8NcLYJNcZP8PYhmHLFSusA7ukcgw0RgWZ9OFJ8tT45Uj6NT3%2FRVBPcOuq2ELktv4hRp%2Fl%2ByIrehM%2BxMMmJ88IGOqUB1T9Lp0mDKkpkWmLBpEAykajTVVXMBFll6gJLy1l5vRBRlNHPyPBjq9vWDTdR9iBcwvcyDDRBaQnotRwPsDI0iqEYSZVQAJK%2FIKNXUCGS8oDKmB7%2Ff6ZFydGKfNXUH8IKs8pqI7F8n4pOTwHRCLZAHb5aLIpzHZiDZ8fD0daAAAM9WCey4BqJoXTDZFuzJBFpbXSDedgoVQ9HHMsPu75Z5w9GF6vj&X-Amz-Signature=07d74245dc6a35307c738c02f147028dbf5948f92a034c6e299ad2e44784738b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JG4WUZH%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIBspaoi2NRKgw6ZCjs5WO8JMUPzqd0ik4WN2kJRGktvTAiEAnzEvhBnZ56QfJ3BRWBxCuERQEL8j6mMB%2BQemdkmy7nkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDAj4l0VV%2FLfwnsA1SrcA%2BUDJhshqukja6cc36OniRjaobldZiLlB4lZBV2OsucbZ01a0udJud4ItY2iemKAI349nVnn5k3%2BkDMGlwTfYhinpM%2B%2F1BiZjVuCmnSqxjVaoQXqJse05FETsghzruYu2jueR83r1Rxv64Iovn7WOHTvuVYg3tE%2BDUzZGKw8J2b86%2Fs1z7m%2B9RS0bogM5KzGiD4h0KvNkTnoQSp6owPtGrz2NOtQCHLBaxtLNExhjPZBrwUhxN4xDANPIOvl%2Bk1oMEs0wUzfBwS3MubySLermQTTciIGyqbh1V2pWdA6KIFFuf35%2Bpwu75cx1o2alDbh92vK8d%2FuJghzBz0NYNzszXrvF6oiIAjQHMuzPVi0ACwuvbfUb%2B0mHMfLATc4HronfKgu4KFGPVJOcFe9N3JOKqcEZK2MOSFcszrkfwKbOuYIjva6Y%2BXaWpPl1PTqZyCCWeqBAzm6WMFFASU4Jw4yspsmIlr8KuZDl8S%2BXGnZthHvD7iSZwQvqCLEgXope80rzoIdN%2F41GnAXuChUIjRM3hzOZOEfXWLsCOOVTW3hKzeBSe8NcLYJNcZP8PYhmHLFSusA7ukcgw0RgWZ9OFJ8tT45Uj6NT3%2FRVBPcOuq2ELktv4hRp%2Fl%2ByIrehM%2BxMMmJ88IGOqUB1T9Lp0mDKkpkWmLBpEAykajTVVXMBFll6gJLy1l5vRBRlNHPyPBjq9vWDTdR9iBcwvcyDDRBaQnotRwPsDI0iqEYSZVQAJK%2FIKNXUCGS8oDKmB7%2Ff6ZFydGKfNXUH8IKs8pqI7F8n4pOTwHRCLZAHb5aLIpzHZiDZ8fD0daAAAM9WCey4BqJoXTDZFuzJBFpbXSDedgoVQ9HHMsPu75Z5w9GF6vj&X-Amz-Signature=673f38dd0b53fd4ed017cceb7a9ad1f9e5c7b08aa7fc01e0bb43a77cf2152d07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
