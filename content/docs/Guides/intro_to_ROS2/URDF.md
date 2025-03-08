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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URYY4EUD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T230142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAnAKRAVFZBhVZE755Occ3KgU%2BzGQADA4cij2225XvTcAiAnQB6IaKqZ2lBiqO3jU3P%2BESCxovXnM6jqTBZPjNXLsir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMAXzILxEeem8%2FPibNKtwD8Wgc6GoGG1%2B11f%2BPG%2B1wBD%2BYW634ZmZqvuxjkBzdXkluxmjNq8qyNTS%2F3WeM%2FIH0N7y9pai5sN5SUIwyQP07o2Tlfm7JOa1RMGiKZQoqf5MRhs5gNKF82XeO6irZORw5hUaV9rU5T4RsFGkaKxGbHpRZzSke9%2BzWiJh%2F7LGnCKSls4poilJv8TrESXzJNDsxhC17U%2FlrOnLdQGZ6vfhViAEzbC5htPVlTNSKvWWW9GRendB4OQQpJT%2FdpK4wFcCpS3i8UKb6JbLoVdTjYRDovp2C20zKrHMDxvllaLUtwGidvZb6LjrBpwx%2F%2B7w3ZaP%2Frb8V323gluPAJvKVncbLq0jqUq0KnS3U%2Fe0kU51uP2%2BsmhcnXGEdE%2FHNQVWzVOmzigOXEjEQcUW6zIhsAaAUf4Krqnecvx8LFk%2BWTGXp1wM2dgdOz8CGUe%2FulpRlsDmoQAbMM%2Bb0UZnNyyd1ZmB7dJ%2FqgOR%2FJoD4wckYtkOhNq1tb9ViTHtzpjrL4Ux08QGwuyo6nTl555%2BQ%2BQi6YspcIKkYuSOY7mrsOOQgdJxAnKzXVhHEAz3b5LworqkT%2BbWIw5Jgs9DBeNP%2BR0WTN3qufCZ9MTbrTE%2Fzrtlwj55DSb8yw8JXIKkKUFektdkw0vKyvgY6pgGM9JM2Wqkbz43FVF14%2FZdSRcfgM6tLRRn%2BtsbW9FlytB%2FkZv88f3qB%2BG6ROrPx8ZKNVLElld1TL5vOhB8Uu6XrWCEaYJ8HBESENqjs%2FN0QrxE3313ImGuxdDVdZFqHIkqOOvYkVmNZj541zkH8DArQeneFZJPg3fRM75MMmkmRNvanvkyURHeVTEDN2R96wapP01UG9RpBsXDuZSKx0Ee4sro0cZ2H&X-Amz-Signature=94115acbab73294503b2c51a4b63f75d59ce4fa2a3c51cdc2a4600c7f6b6856f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URYY4EUD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T230142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAnAKRAVFZBhVZE755Occ3KgU%2BzGQADA4cij2225XvTcAiAnQB6IaKqZ2lBiqO3jU3P%2BESCxovXnM6jqTBZPjNXLsir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMAXzILxEeem8%2FPibNKtwD8Wgc6GoGG1%2B11f%2BPG%2B1wBD%2BYW634ZmZqvuxjkBzdXkluxmjNq8qyNTS%2F3WeM%2FIH0N7y9pai5sN5SUIwyQP07o2Tlfm7JOa1RMGiKZQoqf5MRhs5gNKF82XeO6irZORw5hUaV9rU5T4RsFGkaKxGbHpRZzSke9%2BzWiJh%2F7LGnCKSls4poilJv8TrESXzJNDsxhC17U%2FlrOnLdQGZ6vfhViAEzbC5htPVlTNSKvWWW9GRendB4OQQpJT%2FdpK4wFcCpS3i8UKb6JbLoVdTjYRDovp2C20zKrHMDxvllaLUtwGidvZb6LjrBpwx%2F%2B7w3ZaP%2Frb8V323gluPAJvKVncbLq0jqUq0KnS3U%2Fe0kU51uP2%2BsmhcnXGEdE%2FHNQVWzVOmzigOXEjEQcUW6zIhsAaAUf4Krqnecvx8LFk%2BWTGXp1wM2dgdOz8CGUe%2FulpRlsDmoQAbMM%2Bb0UZnNyyd1ZmB7dJ%2FqgOR%2FJoD4wckYtkOhNq1tb9ViTHtzpjrL4Ux08QGwuyo6nTl555%2BQ%2BQi6YspcIKkYuSOY7mrsOOQgdJxAnKzXVhHEAz3b5LworqkT%2BbWIw5Jgs9DBeNP%2BR0WTN3qufCZ9MTbrTE%2Fzrtlwj55DSb8yw8JXIKkKUFektdkw0vKyvgY6pgGM9JM2Wqkbz43FVF14%2FZdSRcfgM6tLRRn%2BtsbW9FlytB%2FkZv88f3qB%2BG6ROrPx8ZKNVLElld1TL5vOhB8Uu6XrWCEaYJ8HBESENqjs%2FN0QrxE3313ImGuxdDVdZFqHIkqOOvYkVmNZj541zkH8DArQeneFZJPg3fRM75MMmkmRNvanvkyURHeVTEDN2R96wapP01UG9RpBsXDuZSKx0Ee4sro0cZ2H&X-Amz-Signature=9d6426c208fc17a09fba1bfa37d7895d12e89010d6238063905f095cf015a480&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
