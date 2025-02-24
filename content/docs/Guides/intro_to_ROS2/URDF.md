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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3LPJBAN%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBet6eBb%2BS%2F6b2%2FSYQRga%2F2t2cn0AJuQBkJCydQFIt97AiEA9%2F2JlrZFev2CKMQRucpK8hRvPsEPLoLqcTZgVYqRf%2F4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDLmS1ltD4o9CZYNOpCrcA86Et2Ue2WV8fLesmA7v%2B%2Bw%2FGH3u6iaWjdolDIWhkaTsAoY0kvNc7oK%2BP9Vk1ExjVb8K8mT3n8gSOe57Y7Y5dnxeeEvzklOfktA8BrfO6YdyxiWQYO6%2BCj7VKPSqv1gone5YGqjBSsh4vt6TnuOlg5hQiJo4CmBwKQhVTaobxALFIicq1KaN5JrzgZBq260YF%2BUTRHFAeAW0UJSAWKIYwTlJqfJk72pePvaHNaJr3jRmeukBtq3fTMZBr1ZHII1XghhgfT6cLSvS2eBdgEQ1cBk9XUVWFXDf4cWwx7h0MEX437pp%2FJoYVpM0QBe7CYuKrAUN2OJ%2FelMdnLQxNLo4rjpFXA%2B6s97KoQLGGf%2B5cU4pITEvtqIGDqn0DH7YuQoxund6ZmQ5sTgfaUo68MzBGf8A%2FdE0zg7Qu2%2BlGbdFETeHtCYqolPecDLzieMlvMcBhnp5ENwAxovXrgILASYWzfHZKhkmAMiJvtnaIsm12PkfjCHswN7ubh0gFpE8ogw5ii8zEI1eHlMXNcNZg%2FoXBrOGQdsh2Wg%2B1JlEKX1BRQZGQJr2%2FhOyS9r3RHjGomhkELgRX0doMxEoj46lnqsG%2Fag12MN1UHRLgqlPpAmHcOiKINLQ3UMEJgP5j%2FsaMN3V870GOqUBa%2FJPRmQrEbH9QEILXHVojNX1Wy7GP0K1GLlhBkJgnbaocPHvtQOLFqmGnbnnwj58JQUcltShqcPdWuvR0NcRzjBM%2Bwi42RvqlMhZ5oByc1UsdSjUOWLuU59xwTzZZndFt%2FVOQP2m8kY7tTCFixMwNMFFlXtOQWTivetqgujN3rLKUCHknZes9CDeIfORDePEpuBcMjOgxyh0Z32PX1QcoiEcmezB&X-Amz-Signature=b12d70c0f7455ecd3cea4a1adc422581df65b5783b59d7dd3fa14bb16e5c9002&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3LPJBAN%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBet6eBb%2BS%2F6b2%2FSYQRga%2F2t2cn0AJuQBkJCydQFIt97AiEA9%2F2JlrZFev2CKMQRucpK8hRvPsEPLoLqcTZgVYqRf%2F4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDLmS1ltD4o9CZYNOpCrcA86Et2Ue2WV8fLesmA7v%2B%2Bw%2FGH3u6iaWjdolDIWhkaTsAoY0kvNc7oK%2BP9Vk1ExjVb8K8mT3n8gSOe57Y7Y5dnxeeEvzklOfktA8BrfO6YdyxiWQYO6%2BCj7VKPSqv1gone5YGqjBSsh4vt6TnuOlg5hQiJo4CmBwKQhVTaobxALFIicq1KaN5JrzgZBq260YF%2BUTRHFAeAW0UJSAWKIYwTlJqfJk72pePvaHNaJr3jRmeukBtq3fTMZBr1ZHII1XghhgfT6cLSvS2eBdgEQ1cBk9XUVWFXDf4cWwx7h0MEX437pp%2FJoYVpM0QBe7CYuKrAUN2OJ%2FelMdnLQxNLo4rjpFXA%2B6s97KoQLGGf%2B5cU4pITEvtqIGDqn0DH7YuQoxund6ZmQ5sTgfaUo68MzBGf8A%2FdE0zg7Qu2%2BlGbdFETeHtCYqolPecDLzieMlvMcBhnp5ENwAxovXrgILASYWzfHZKhkmAMiJvtnaIsm12PkfjCHswN7ubh0gFpE8ogw5ii8zEI1eHlMXNcNZg%2FoXBrOGQdsh2Wg%2B1JlEKX1BRQZGQJr2%2FhOyS9r3RHjGomhkELgRX0doMxEoj46lnqsG%2Fag12MN1UHRLgqlPpAmHcOiKINLQ3UMEJgP5j%2FsaMN3V870GOqUBa%2FJPRmQrEbH9QEILXHVojNX1Wy7GP0K1GLlhBkJgnbaocPHvtQOLFqmGnbnnwj58JQUcltShqcPdWuvR0NcRzjBM%2Bwi42RvqlMhZ5oByc1UsdSjUOWLuU59xwTzZZndFt%2FVOQP2m8kY7tTCFixMwNMFFlXtOQWTivetqgujN3rLKUCHknZes9CDeIfORDePEpuBcMjOgxyh0Z32PX1QcoiEcmezB&X-Amz-Signature=a5b864e49ad667b6deb798f075a3ce2df29b9c7c7aedd68bfe7e809e8ecafbc0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
