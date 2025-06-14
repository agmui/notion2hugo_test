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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC3HD43A%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDQV198H%2BZhfya4yjx2QTcwtprSne1E%2B9Io1xWuxy1D9AIhALsFZlF1cwqkwwMkPozfiPYf%2BtPYJQCaXAqYQtEp1AtzKv8DCCcQABoMNjM3NDIzMTgzODA1IgxAkF80EpuAGTJuAbYq3ANCE9ZU9CVy%2F4tfznW2PX98PFpw3BUK8oiXPK7LZ3snM4o5c1Ru7OHWCFtf69Rh0FTWLZ7mP9A1IfTLhxB%2BUbtbVE3HpiniQcE218t02zNUWn7Vhh0a4IAowVxt5d9miDUu2iDQovF0nePRfpekK1vWNKkKRgpQMay3bRKGv0HRcGMsOoEhwYxnuzl1%2FtuO1wB%2FkmZomR2cAEo6YNyNLLWsjKe2llLC9JuT91dfk970Wh6qGLjN%2Fz5am7BBAlDVuXM4%2Fsp1nkgW4%2BhCmUNCtJA3ec4yDRRRpiDnDZdx2jVgmZClIOHoFjO6UidlALZD%2FdFGq9ERdKre%2FTi%2FSGIj6FmLX7e3UXwz2Mr4Xz7YW6L40OXkM8ni1gQMvFQaoWhEA%2BkkXSOO2i4I8OUwABL9AFVjFmYSGzVaXd6Y%2BkwQptLmEKTBvBbXp7DEti92tS7nvKGT%2B7IQ%2BKiRa3uLACLYL8aNF3xY1MCF9eWBxzu9wwd6%2BzW055KH7gQak7K%2FTSO4uBzu56ZTNcfERPtn1L%2FGwwkJTkaGcvvtZ6jc7ZO9qnAtCqF%2BbRiaXpp%2B5neS5AydtcqB%2BNAwm5UjEAMBIAnH13SQ9Di1nYC7aWGxkjk5TeOIGvkqn3bt4Hm075X5tzD7k7TCBjqkAaDeSRjezD2VAlDu1WDBL6juSeVg0t5WLVp%2BVa9oP3%2BKL5U6%2Fxw5FimecQqDFKyHTqL40KnhhzgMoJNEnlFRuE93NtblWLJ4qLkFgIMtMY0jn65Qp99QlcX1SiLjvVgav52AidA19%2F1735j7UbETMIiMS5PEGYMVtQGDP2LGJNl4INkcCcnbWtMVOJx%2F%2ByvUTU2mN6Wl7TYulyc7NTozLeImSz9e&X-Amz-Signature=8a2ca882c1d0044200fd23fe456910be9b01f1d41e4b976959d4833885941768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC3HD43A%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDQV198H%2BZhfya4yjx2QTcwtprSne1E%2B9Io1xWuxy1D9AIhALsFZlF1cwqkwwMkPozfiPYf%2BtPYJQCaXAqYQtEp1AtzKv8DCCcQABoMNjM3NDIzMTgzODA1IgxAkF80EpuAGTJuAbYq3ANCE9ZU9CVy%2F4tfznW2PX98PFpw3BUK8oiXPK7LZ3snM4o5c1Ru7OHWCFtf69Rh0FTWLZ7mP9A1IfTLhxB%2BUbtbVE3HpiniQcE218t02zNUWn7Vhh0a4IAowVxt5d9miDUu2iDQovF0nePRfpekK1vWNKkKRgpQMay3bRKGv0HRcGMsOoEhwYxnuzl1%2FtuO1wB%2FkmZomR2cAEo6YNyNLLWsjKe2llLC9JuT91dfk970Wh6qGLjN%2Fz5am7BBAlDVuXM4%2Fsp1nkgW4%2BhCmUNCtJA3ec4yDRRRpiDnDZdx2jVgmZClIOHoFjO6UidlALZD%2FdFGq9ERdKre%2FTi%2FSGIj6FmLX7e3UXwz2Mr4Xz7YW6L40OXkM8ni1gQMvFQaoWhEA%2BkkXSOO2i4I8OUwABL9AFVjFmYSGzVaXd6Y%2BkwQptLmEKTBvBbXp7DEti92tS7nvKGT%2B7IQ%2BKiRa3uLACLYL8aNF3xY1MCF9eWBxzu9wwd6%2BzW055KH7gQak7K%2FTSO4uBzu56ZTNcfERPtn1L%2FGwwkJTkaGcvvtZ6jc7ZO9qnAtCqF%2BbRiaXpp%2B5neS5AydtcqB%2BNAwm5UjEAMBIAnH13SQ9Di1nYC7aWGxkjk5TeOIGvkqn3bt4Hm075X5tzD7k7TCBjqkAaDeSRjezD2VAlDu1WDBL6juSeVg0t5WLVp%2BVa9oP3%2BKL5U6%2Fxw5FimecQqDFKyHTqL40KnhhzgMoJNEnlFRuE93NtblWLJ4qLkFgIMtMY0jn65Qp99QlcX1SiLjvVgav52AidA19%2F1735j7UbETMIiMS5PEGYMVtQGDP2LGJNl4INkcCcnbWtMVOJx%2F%2ByvUTU2mN6Wl7TYulyc7NTozLeImSz9e&X-Amz-Signature=05145132ffb82a8f665e7d64f618fb47915445fcde8b0c221e05f3197ca68ecf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
