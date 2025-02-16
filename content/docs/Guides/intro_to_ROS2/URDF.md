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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GJALHOP%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCID7oMydLWR1kbGQpjDbbLQogYwrSXajd8LrPII9T%2B9WbAiAY6vji0uw8SBWwPbzIfEX65W4iPwWfUrgsjQqZYGkD%2FCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMsOPwh6%2FLU3MQ7nmBKtwD4hQkmFO0DDWQ7YkDE%2FJXCa3Q8TGALlu0Iwe7IHz9Lqeig0k24C7YFIBBYl1clixIzPbphS1N4Y6yS84gKeu08wb9BktHnk15AtL1Dyt7PJNUB%2B7FyKfUo2Sc4hr%2BSxr87oDogI08ct4c52UAu%2F39aZXarPt69qpxpFVux1bWaop4hFjGpK1fTxWAb4BUJf%2FMO0XT4Jo3TbgirbcyykNba0EOfmzSd64%2BTwzrl0Kh28N53eQS3FeGHbl6Qf0O8oSkpp1mUBXED2PKh2YPARp34R4e6oEcMyaJ5kZM6sNhUcQqs2qV%2FNYrURbiBIMaixpA4F4x1DZLlPLW7Q0NqD%2FsNehk%2BEfVCA0WDFDCIQSZR0BJoxhza3T508C5ry0Xgg5KA%2BtV%2BaPu5faJYTNXG08MVbg%2FLWoNFFFXLkKlugHe4llju9ltpmRSeWhEsdGXFyh2iKx%2BEEpv0TlmfHHvx9hssk6JGUjeF3ZoF64Vtpw%2BILfn9PSWPaLG%2BX0nUfJL%2FA7ztPb2s7r4KG5tW7zvnLe1ZrlAH7Mzr4k93WR6L5JZF%2FbZvE34uAiOWjCpiit4wwKeNRk3ifgdinV55IuwHr%2B86Dk8fcDEgzFEOo%2BSCb2j1LdSaLXkcH9%2B9dcnn%2Fsw6J3HvQY6pgH0nVPmMquvrR8LogcqOJoUJ%2Fk0N9dGYXsCZaXmf%2F9%2FVlqwzy5xZrDoVVGzYZe2w8LzfHGPBjAJCVt0qthSc3KM7BYFrUmdqcx6DltiBg0Yp88ewvnixWDg%2B%2FcZ5BAn6xuweOoqj%2BGYpelMrjaoh9yUxSNfFZMf0yqB04S9g64n5FO32JWaQ2a9505cLl47QJshLt87b8RHWN9FRs19fO063VKDSZAV&X-Amz-Signature=6f92e403665fe40bb34261f0789ecc15a36af700b1f1a777cd4ada246eb578f2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GJALHOP%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCID7oMydLWR1kbGQpjDbbLQogYwrSXajd8LrPII9T%2B9WbAiAY6vji0uw8SBWwPbzIfEX65W4iPwWfUrgsjQqZYGkD%2FCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMsOPwh6%2FLU3MQ7nmBKtwD4hQkmFO0DDWQ7YkDE%2FJXCa3Q8TGALlu0Iwe7IHz9Lqeig0k24C7YFIBBYl1clixIzPbphS1N4Y6yS84gKeu08wb9BktHnk15AtL1Dyt7PJNUB%2B7FyKfUo2Sc4hr%2BSxr87oDogI08ct4c52UAu%2F39aZXarPt69qpxpFVux1bWaop4hFjGpK1fTxWAb4BUJf%2FMO0XT4Jo3TbgirbcyykNba0EOfmzSd64%2BTwzrl0Kh28N53eQS3FeGHbl6Qf0O8oSkpp1mUBXED2PKh2YPARp34R4e6oEcMyaJ5kZM6sNhUcQqs2qV%2FNYrURbiBIMaixpA4F4x1DZLlPLW7Q0NqD%2FsNehk%2BEfVCA0WDFDCIQSZR0BJoxhza3T508C5ry0Xgg5KA%2BtV%2BaPu5faJYTNXG08MVbg%2FLWoNFFFXLkKlugHe4llju9ltpmRSeWhEsdGXFyh2iKx%2BEEpv0TlmfHHvx9hssk6JGUjeF3ZoF64Vtpw%2BILfn9PSWPaLG%2BX0nUfJL%2FA7ztPb2s7r4KG5tW7zvnLe1ZrlAH7Mzr4k93WR6L5JZF%2FbZvE34uAiOWjCpiit4wwKeNRk3ifgdinV55IuwHr%2B86Dk8fcDEgzFEOo%2BSCb2j1LdSaLXkcH9%2B9dcnn%2Fsw6J3HvQY6pgH0nVPmMquvrR8LogcqOJoUJ%2Fk0N9dGYXsCZaXmf%2F9%2FVlqwzy5xZrDoVVGzYZe2w8LzfHGPBjAJCVt0qthSc3KM7BYFrUmdqcx6DltiBg0Yp88ewvnixWDg%2B%2FcZ5BAn6xuweOoqj%2BGYpelMrjaoh9yUxSNfFZMf0yqB04S9g64n5FO32JWaQ2a9505cLl47QJshLt87b8RHWN9FRs19fO063VKDSZAV&X-Amz-Signature=1770430a2886b8905234194db8e6b43bc3d4bbcef4e7b066ede6e1e2f6428bd4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
