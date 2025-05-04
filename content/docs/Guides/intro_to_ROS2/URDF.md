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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWJTJEXY%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCICcg3LSHMhEv%2FBG62RwMgRDAvHTWES1nTCAiRWm0Sp1pAiAGZD1KQFqaWJnjWBg%2Fo1acEClXNcpNGna2UExPeXFRzSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyLsFYZspWCak6a2pKtwDoS6mzmiH4lFwu3O%2FTJ84NKJWzuJfNylcgj0Yzk5syRZ0o1L7va6K%2FEd0ClAasKPiM5aDn%2B7a%2F65F5LWgKlsPbxedPW5l78XHGnEX1936fXngFLLnFLWUXsWCs9Mkc5g0J1uj9s40raGPyjT7w9JeeUxalCtGefeT0u34lI1jKU73idNCHDlWmE37OKeLByI1z31hNjptBL5Smbiy%2B5Ll%2B02JwP%2BcftkKkWlgY9xi6Lmh5v00ok%2FlGnwEMiWRjmyQy8fhME%2BynnKYTdWjeUxUuuEmdoinf6IFeamdP%2FOrrl31of%2BD2Bbo3271pEdNGsQuNjLb%2BUFB3nAoaa7GQlldI7B0U%2BdDUGu4AKALpd8ZUZ5ROuJDaf%2B%2F%2FLOaJf9SDWgjDFvqwFJbsXDrnONP1W0KLaWhxn%2BwrPhJdNga59esXyTAnA45nXNmmrWOjclEHuBvMpwHKUEVTonCyuUDX7szlcVXVU%2FkBpwCUZL0P8OQt%2FJTfmTMlYnd6Kp7Z1R8Ys%2BL6KRPn1C0fDUvezJSCxGbcUXtQFhwrjv6Eaw4ZKYMThVTBK0tnTaO9waJQgmKkJWgtMIHaCtitcwewxkG%2Bgqfp%2FIsJdcVqo32jrQe5b4AOJ9VD7Yu1lyQ7Ngo%2Bm4wp%2BvbwAY6pgGxpT6h1BTwQD5MN42Q%2BnJVD3MYBhbhkTUwLDEsJu9VQO%2FXfaBryXN7VsGe4hcxOryZnbVjfNzUVXak37LbhOpzC3wKdvyoLeem8yyX%2BehwFq%2BvkcgxJmkcsvhTOJayxgskzeHsO6gzDw%2BiLnjxL%2Fx%2FbVZcqrQpXrUzMVDDx%2FJIks4aMdcx14QFz5UDweLiNZWSUJucoQPKGHHkHvuOSm6S5XBZDt8U&X-Amz-Signature=d2842f7b3c3648d349cea9f570af0165af6782ae382fba62e295517a304ea0de&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWJTJEXY%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCICcg3LSHMhEv%2FBG62RwMgRDAvHTWES1nTCAiRWm0Sp1pAiAGZD1KQFqaWJnjWBg%2Fo1acEClXNcpNGna2UExPeXFRzSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyLsFYZspWCak6a2pKtwDoS6mzmiH4lFwu3O%2FTJ84NKJWzuJfNylcgj0Yzk5syRZ0o1L7va6K%2FEd0ClAasKPiM5aDn%2B7a%2F65F5LWgKlsPbxedPW5l78XHGnEX1936fXngFLLnFLWUXsWCs9Mkc5g0J1uj9s40raGPyjT7w9JeeUxalCtGefeT0u34lI1jKU73idNCHDlWmE37OKeLByI1z31hNjptBL5Smbiy%2B5Ll%2B02JwP%2BcftkKkWlgY9xi6Lmh5v00ok%2FlGnwEMiWRjmyQy8fhME%2BynnKYTdWjeUxUuuEmdoinf6IFeamdP%2FOrrl31of%2BD2Bbo3271pEdNGsQuNjLb%2BUFB3nAoaa7GQlldI7B0U%2BdDUGu4AKALpd8ZUZ5ROuJDaf%2B%2F%2FLOaJf9SDWgjDFvqwFJbsXDrnONP1W0KLaWhxn%2BwrPhJdNga59esXyTAnA45nXNmmrWOjclEHuBvMpwHKUEVTonCyuUDX7szlcVXVU%2FkBpwCUZL0P8OQt%2FJTfmTMlYnd6Kp7Z1R8Ys%2BL6KRPn1C0fDUvezJSCxGbcUXtQFhwrjv6Eaw4ZKYMThVTBK0tnTaO9waJQgmKkJWgtMIHaCtitcwewxkG%2Bgqfp%2FIsJdcVqo32jrQe5b4AOJ9VD7Yu1lyQ7Ngo%2Bm4wp%2BvbwAY6pgGxpT6h1BTwQD5MN42Q%2BnJVD3MYBhbhkTUwLDEsJu9VQO%2FXfaBryXN7VsGe4hcxOryZnbVjfNzUVXak37LbhOpzC3wKdvyoLeem8yyX%2BehwFq%2BvkcgxJmkcsvhTOJayxgskzeHsO6gzDw%2BiLnjxL%2Fx%2FbVZcqrQpXrUzMVDDx%2FJIks4aMdcx14QFz5UDweLiNZWSUJucoQPKGHHkHvuOSm6S5XBZDt8U&X-Amz-Signature=93a9c8dd544c5b0edf12d48f6f841ea4e52e0ab3da2d176819891d4ac90ee4d2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
