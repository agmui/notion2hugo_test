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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNI7STAI%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIG%2FxhuOV9L11iu00M%2BuEKMf7D6F9uDVzyRNoJ3xamVy7AiBPJ4Ozu9Xrf6cnt%2FKFFcI3p6UADGLofno%2FZ%2FSfTLyifSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM%2FQOjYS24hnWb95wZKtwDHdfvMJkbIlF2xgyBQbkbQI3VH%2Fd0jEt5ZjQC6vgS7BWl6BaAqPVbQilQfE6XoXDQ2ub%2Fgiv14Mt0YO8yGsyyN2RfMxjWjOzh%2FgPzvWVJWY3JEuEAgtndZzCHCOfQj%2Bv4IUrlSv%2BgZdf4c0wOF7pegi5Hx0CyubnScrCN15KWqrHNKMeoX03qRFTcKqCI0CvzBpHDEhb5wFhOKyw91mzg0nO3KzLgmy7WTi4SAEekqpV53ktowHxiEspNPhrpZ7CQ02sykTpTWAzcpGuVhzv3wwAy2Rqqddm2hQeJj1%2Bl7N2hU%2FSPuJZ5sgeMyy%2Flpvl5PqsFilWGrgRwRa83T8h7C%2Fx0lPiqnYscKlPyPpZsoFJnaDdgtsqo4ZgO48WPViSqDBLAJa%2Be%2FmyyV96AU6VG4szAky2TaR2QrCXKudMkfbIb3wJl1a1Q5hCFKlLXRzZnpGuBNaIA62KWykLuLARz0faczyh4ZrTBS1tfCkteLAAOwZ8urOvtrNOasSFs0lTBpUGcNXT1%2FbOLaNLz4ZJU5QH08ZOZB5EeICFkgQA%2BA7jrlBK0n0SzVyMGF%2FNwor3oTTuMlXZRLZKHdFDxr9v4C86858PO8naQBKpefuj2QRAeskL5yNTvF3PiAnAw5qTVwwY6pgHwiZjVapz%2BQTLtLNUXjLf4QH0syCG5yhAmBlkK0OgZ6ChzwhSpuKR2lOLRBv9WjZzdYoJO0rfLCp%2BpztiZHuQEj%2BpYw1vWaQcw%2FYrq8Wmy5ewiy4NSI0DE3pXUjSCRdttaA7ZwoTwTpi1sXwnlB5isxcrabnrQTZ8hSxcyTb9wtiWnK9GpkmZqb2jMSg0zd4g57MyOeLjIz9C8qVUqh0VdRzubRb9y&X-Amz-Signature=b8e2316db56fb9a35fa2ce65b16c03b27470d3430b9e2470b886a324a901f12d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNI7STAI%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIG%2FxhuOV9L11iu00M%2BuEKMf7D6F9uDVzyRNoJ3xamVy7AiBPJ4Ozu9Xrf6cnt%2FKFFcI3p6UADGLofno%2FZ%2FSfTLyifSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM%2FQOjYS24hnWb95wZKtwDHdfvMJkbIlF2xgyBQbkbQI3VH%2Fd0jEt5ZjQC6vgS7BWl6BaAqPVbQilQfE6XoXDQ2ub%2Fgiv14Mt0YO8yGsyyN2RfMxjWjOzh%2FgPzvWVJWY3JEuEAgtndZzCHCOfQj%2Bv4IUrlSv%2BgZdf4c0wOF7pegi5Hx0CyubnScrCN15KWqrHNKMeoX03qRFTcKqCI0CvzBpHDEhb5wFhOKyw91mzg0nO3KzLgmy7WTi4SAEekqpV53ktowHxiEspNPhrpZ7CQ02sykTpTWAzcpGuVhzv3wwAy2Rqqddm2hQeJj1%2Bl7N2hU%2FSPuJZ5sgeMyy%2Flpvl5PqsFilWGrgRwRa83T8h7C%2Fx0lPiqnYscKlPyPpZsoFJnaDdgtsqo4ZgO48WPViSqDBLAJa%2Be%2FmyyV96AU6VG4szAky2TaR2QrCXKudMkfbIb3wJl1a1Q5hCFKlLXRzZnpGuBNaIA62KWykLuLARz0faczyh4ZrTBS1tfCkteLAAOwZ8urOvtrNOasSFs0lTBpUGcNXT1%2FbOLaNLz4ZJU5QH08ZOZB5EeICFkgQA%2BA7jrlBK0n0SzVyMGF%2FNwor3oTTuMlXZRLZKHdFDxr9v4C86858PO8naQBKpefuj2QRAeskL5yNTvF3PiAnAw5qTVwwY6pgHwiZjVapz%2BQTLtLNUXjLf4QH0syCG5yhAmBlkK0OgZ6ChzwhSpuKR2lOLRBv9WjZzdYoJO0rfLCp%2BpztiZHuQEj%2BpYw1vWaQcw%2FYrq8Wmy5ewiy4NSI0DE3pXUjSCRdttaA7ZwoTwTpi1sXwnlB5isxcrabnrQTZ8hSxcyTb9wtiWnK9GpkmZqb2jMSg0zd4g57MyOeLjIz9C8qVUqh0VdRzubRb9y&X-Amz-Signature=6cc49e22828b232e1ada51dcf10368542514c2cc7e9f531c22213461856fa9d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
