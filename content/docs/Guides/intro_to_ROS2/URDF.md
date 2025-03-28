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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7PUCC6K%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDiQEGOyOtBJb6sAT5wVgTb1yim7fuTEECflE88IqU0gIhAMO1OaJC0UoPbuqJOhOugx2Kj0X0Zt7D6oKoBqcJ%2BsJPKv8DCFcQABoMNjM3NDIzMTgzODA1IgyAuIf0y5p5euWYXqYq3ANr5qU1jZimRvdjfIhTaIev1zztjn3uRiGbVtf2PZxlS899uvse4aQm%2Bjb54A0ZcqOcice0%2BOB%2BNPDLV%2BRXS0X%2BVgHvddXB%2BO%2BVaOWW3B%2BEdUoqu47hMNh19ZgHRt%2F%2FwEYKFRwRkn5SBkHl4GBhdSFBMkqRQ8XnKxsyBk4e0RFJGN2FmqhmEBPph%2BypO%2FgtSaUDdt4%2FkFSB7NHnUmW8ltC5q8Y2St%2FkHapBfL9flujlIFccCuhGOBvc2o4GJHcVyuhmdDmyduyh1vVBTeFDuEKfdm0FNeHy5hqwOTAobFUKf6t9BEe4EqXYF2%2F2UaMzyuMokwJXQ9jayWKvOVKdEdxTGbVcHXzWysIMIzyCZYsjqvGudZs5h41DrjQzeaQVYRcH5t72bmIPKrpXKdNPs9UZybklscyQG%2BnhyPphN1NB0KIiM2Y8mQG5YDC5Po9bbIQ%2BT4EkyF6HDd8voAoKeztRxkOb0DEjxQA5tsGfu%2BMW0O9VyIjWithtFlhnmdanaW%2FODjIwDaU4iRKyw91Y1L8hbi2F4ae%2BSN9SHLKhStBN%2BDQWI%2FXmV37YfW7vv2rOwrL8MRE6wo9cEZ7fil6UPRjjn2i5BM0u4U2Y3xpBtAFnACJE%2BFeGgBk6ey4RATDP6Ji%2FBjqkAYhZ95gU%2BQqEozfQLmKx5NTohke%2F23kHiA3L64lp2mjaUiqMfO8aMM8KOjJoHs4n9ak0GCx1tN1nnHHBbzquz0bGQrZj%2BGDWgiiMvqZz6pj%2Bw1A02RybWYbjnVeyD90RJLYJ0GUDsRBDF%2FNZgCqKsuSp1Uw%2FSZxKf%2Bzf2ggkpTdzbves3KE8uyHp3UevLJCsgPyE1V2xTYqn7mPn2NLa1kYac274&X-Amz-Signature=8c08823d0c15b919c6724eb0c3a1e8ccf7642e89c174b7badd51ebf6c8c6caf1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7PUCC6K%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDiQEGOyOtBJb6sAT5wVgTb1yim7fuTEECflE88IqU0gIhAMO1OaJC0UoPbuqJOhOugx2Kj0X0Zt7D6oKoBqcJ%2BsJPKv8DCFcQABoMNjM3NDIzMTgzODA1IgyAuIf0y5p5euWYXqYq3ANr5qU1jZimRvdjfIhTaIev1zztjn3uRiGbVtf2PZxlS899uvse4aQm%2Bjb54A0ZcqOcice0%2BOB%2BNPDLV%2BRXS0X%2BVgHvddXB%2BO%2BVaOWW3B%2BEdUoqu47hMNh19ZgHRt%2F%2FwEYKFRwRkn5SBkHl4GBhdSFBMkqRQ8XnKxsyBk4e0RFJGN2FmqhmEBPph%2BypO%2FgtSaUDdt4%2FkFSB7NHnUmW8ltC5q8Y2St%2FkHapBfL9flujlIFccCuhGOBvc2o4GJHcVyuhmdDmyduyh1vVBTeFDuEKfdm0FNeHy5hqwOTAobFUKf6t9BEe4EqXYF2%2F2UaMzyuMokwJXQ9jayWKvOVKdEdxTGbVcHXzWysIMIzyCZYsjqvGudZs5h41DrjQzeaQVYRcH5t72bmIPKrpXKdNPs9UZybklscyQG%2BnhyPphN1NB0KIiM2Y8mQG5YDC5Po9bbIQ%2BT4EkyF6HDd8voAoKeztRxkOb0DEjxQA5tsGfu%2BMW0O9VyIjWithtFlhnmdanaW%2FODjIwDaU4iRKyw91Y1L8hbi2F4ae%2BSN9SHLKhStBN%2BDQWI%2FXmV37YfW7vv2rOwrL8MRE6wo9cEZ7fil6UPRjjn2i5BM0u4U2Y3xpBtAFnACJE%2BFeGgBk6ey4RATDP6Ji%2FBjqkAYhZ95gU%2BQqEozfQLmKx5NTohke%2F23kHiA3L64lp2mjaUiqMfO8aMM8KOjJoHs4n9ak0GCx1tN1nnHHBbzquz0bGQrZj%2BGDWgiiMvqZz6pj%2Bw1A02RybWYbjnVeyD90RJLYJ0GUDsRBDF%2FNZgCqKsuSp1Uw%2FSZxKf%2Bzf2ggkpTdzbves3KE8uyHp3UevLJCsgPyE1V2xTYqn7mPn2NLa1kYac274&X-Amz-Signature=fb8fe28b738bb73dc7306d5e38ea9dbdc7e340e081e93248ada232ad5726935d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
