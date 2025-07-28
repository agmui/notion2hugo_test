---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-24T23:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-24T23:53:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 152
toc: false
icon: ""
---

### What is odometry?

Odometry (odom) is the (x,y) position of where the robot thinks it is on a map

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JPHNGMV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDLh7FSSnrnQwk4RUF9iVW1o8LKv7NI9cJnwMYKyRk12gIgLJYWgyousv5iwFOwtY8mgUi%2B0lgtoqpY3I5hCNws%2FzYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNU093E8aIg9uBBB%2FyrcA6bT1AiwSIh7zPn9XHjVfxURYGL7Pto9sXXqHTegP%2FnAb1MMa80Q9mNpmWcyZkClvSLRvRbvaKmEvPbbOqGih%2BuWiLrySZrYLEjwXuUQxcY%2BfIUVaq%2B8QG6q1GCgWPA0vR9bZy5JeTMJEXpFmLyPKBCAkVUMrqFzpbYnF9RlXdvVnqCNCt6jabuS3a2qAMhEGS2ydKJLWHj0WUK5RMPsOYNiF41iNwOlo2g%2Bz8B8pl7EHtfzvbryxBs%2BZvQ6%2FCIcgSJGHsOOzecIkfwQEVsltiHIkZ6s6fPHvguElYn6uix3UXdjD%2FeasBJixZyLVXbfCKtesBz4Hi5bx9gx9D53Z76DgStNx%2FjHlvaikiUzRCiD974HdAdE1fvL2siXjHPZ3x6Q7EVrsT%2F91n1RY%2FQDMvkD2SCWQjeBG8yTYmZxDYzI5gCE4%2F9amuek96gf3x%2Ff08VLAXxevNRSULunmsb9omY1vBGWxq9FZ%2FNnl%2BXvzfzIl1Azh1pDhCXeoAl%2FbcXA9ztQ4oVBzGMvIMVnAMNNZwK6WMQWGnA%2FtOLXv5Eo7RW%2FVRUF5p46G0uHpz%2FVFtAqiQ2eFf5YKpfozXdKQB7Wr7xY2socWHPxFjSw8viI6pEf0Gx%2BYYycfLzr%2FddXMKGOncQGOqUBOVVOzBeIg%2B%2FKP8xAEwF21uvF2PtM2jccy%2BYFNcYhu25ge1c6E8JbgSTU4tZQnvgiuWH%2BCbxayjtvVpU7wDppG3GfXzzIzwUcFHhz882lX9xitwppJbdwDdRiDOyqCNhKmQry0D7E%2F6xpBbCOjyUGZu%2BJydj212HS%2Bmrdj1RqnYVfAnYA%2B0l53F8h2LduwofOG5vJrBI2lzvCnoVKt8Zqkeqh7FbE&X-Amz-Signature=30d80c43903c771b1a19c5aecf3c63fb3b57d73a79e646cdb150676d1e37278d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
      <summary>Why not ros2_control?</summary>
      This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.
  </details>

{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JPHNGMV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDLh7FSSnrnQwk4RUF9iVW1o8LKv7NI9cJnwMYKyRk12gIgLJYWgyousv5iwFOwtY8mgUi%2B0lgtoqpY3I5hCNws%2FzYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNU093E8aIg9uBBB%2FyrcA6bT1AiwSIh7zPn9XHjVfxURYGL7Pto9sXXqHTegP%2FnAb1MMa80Q9mNpmWcyZkClvSLRvRbvaKmEvPbbOqGih%2BuWiLrySZrYLEjwXuUQxcY%2BfIUVaq%2B8QG6q1GCgWPA0vR9bZy5JeTMJEXpFmLyPKBCAkVUMrqFzpbYnF9RlXdvVnqCNCt6jabuS3a2qAMhEGS2ydKJLWHj0WUK5RMPsOYNiF41iNwOlo2g%2Bz8B8pl7EHtfzvbryxBs%2BZvQ6%2FCIcgSJGHsOOzecIkfwQEVsltiHIkZ6s6fPHvguElYn6uix3UXdjD%2FeasBJixZyLVXbfCKtesBz4Hi5bx9gx9D53Z76DgStNx%2FjHlvaikiUzRCiD974HdAdE1fvL2siXjHPZ3x6Q7EVrsT%2F91n1RY%2FQDMvkD2SCWQjeBG8yTYmZxDYzI5gCE4%2F9amuek96gf3x%2Ff08VLAXxevNRSULunmsb9omY1vBGWxq9FZ%2FNnl%2BXvzfzIl1Azh1pDhCXeoAl%2FbcXA9ztQ4oVBzGMvIMVnAMNNZwK6WMQWGnA%2FtOLXv5Eo7RW%2FVRUF5p46G0uHpz%2FVFtAqiQ2eFf5YKpfozXdKQB7Wr7xY2socWHPxFjSw8viI6pEf0Gx%2BYYycfLzr%2FddXMKGOncQGOqUBOVVOzBeIg%2B%2FKP8xAEwF21uvF2PtM2jccy%2BYFNcYhu25ge1c6E8JbgSTU4tZQnvgiuWH%2BCbxayjtvVpU7wDppG3GfXzzIzwUcFHhz882lX9xitwppJbdwDdRiDOyqCNhKmQry0D7E%2F6xpBbCOjyUGZu%2BJydj212HS%2Bmrdj1RqnYVfAnYA%2B0l53F8h2LduwofOG5vJrBI2lzvCnoVKt8Zqkeqh7FbE&X-Amz-Signature=10b5fe42595e78770ca48b1e522c464b392f06442afbd0d8f4ddc2c2b05cd171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}

#### description:

reads in the physical robot’s wheel angles and publishes them to `/joint_state` 

{{% /alert %}}

There should be a file `mbot_pkg/mbot_pkg/my_node.py`

This is where we are going to create our custom node to read in wheel angles

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JPHNGMV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDLh7FSSnrnQwk4RUF9iVW1o8LKv7NI9cJnwMYKyRk12gIgLJYWgyousv5iwFOwtY8mgUi%2B0lgtoqpY3I5hCNws%2FzYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNU093E8aIg9uBBB%2FyrcA6bT1AiwSIh7zPn9XHjVfxURYGL7Pto9sXXqHTegP%2FnAb1MMa80Q9mNpmWcyZkClvSLRvRbvaKmEvPbbOqGih%2BuWiLrySZrYLEjwXuUQxcY%2BfIUVaq%2B8QG6q1GCgWPA0vR9bZy5JeTMJEXpFmLyPKBCAkVUMrqFzpbYnF9RlXdvVnqCNCt6jabuS3a2qAMhEGS2ydKJLWHj0WUK5RMPsOYNiF41iNwOlo2g%2Bz8B8pl7EHtfzvbryxBs%2BZvQ6%2FCIcgSJGHsOOzecIkfwQEVsltiHIkZ6s6fPHvguElYn6uix3UXdjD%2FeasBJixZyLVXbfCKtesBz4Hi5bx9gx9D53Z76DgStNx%2FjHlvaikiUzRCiD974HdAdE1fvL2siXjHPZ3x6Q7EVrsT%2F91n1RY%2FQDMvkD2SCWQjeBG8yTYmZxDYzI5gCE4%2F9amuek96gf3x%2Ff08VLAXxevNRSULunmsb9omY1vBGWxq9FZ%2FNnl%2BXvzfzIl1Azh1pDhCXeoAl%2FbcXA9ztQ4oVBzGMvIMVnAMNNZwK6WMQWGnA%2FtOLXv5Eo7RW%2FVRUF5p46G0uHpz%2FVFtAqiQ2eFf5YKpfozXdKQB7Wr7xY2socWHPxFjSw8viI6pEf0Gx%2BYYycfLzr%2FddXMKGOncQGOqUBOVVOzBeIg%2B%2FKP8xAEwF21uvF2PtM2jccy%2BYFNcYhu25ge1c6E8JbgSTU4tZQnvgiuWH%2BCbxayjtvVpU7wDppG3GfXzzIzwUcFHhz882lX9xitwppJbdwDdRiDOyqCNhKmQry0D7E%2F6xpBbCOjyUGZu%2BJydj212HS%2Bmrdj1RqnYVfAnYA%2B0l53F8h2LduwofOG5vJrBI2lzvCnoVKt8Zqkeqh7FbE&X-Amz-Signature=14f1b87fa1fd7ad115b0d6edd4d83c83064a27e75e821476d839812f8549227e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10) # publisher obj
        self.timer = self.create_timer(0.5, self.timer_callback) # calls timer_callback() every 0.5 sec
		
		# gets called every 0.5 seconds
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = 'Hello World'                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info('Publishing: ' + msg.data)   # print msg


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Here is how the basic publisher object works

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JPHNGMV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDLh7FSSnrnQwk4RUF9iVW1o8LKv7NI9cJnwMYKyRk12gIgLJYWgyousv5iwFOwtY8mgUi%2B0lgtoqpY3I5hCNws%2FzYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNU093E8aIg9uBBB%2FyrcA6bT1AiwSIh7zPn9XHjVfxURYGL7Pto9sXXqHTegP%2FnAb1MMa80Q9mNpmWcyZkClvSLRvRbvaKmEvPbbOqGih%2BuWiLrySZrYLEjwXuUQxcY%2BfIUVaq%2B8QG6q1GCgWPA0vR9bZy5JeTMJEXpFmLyPKBCAkVUMrqFzpbYnF9RlXdvVnqCNCt6jabuS3a2qAMhEGS2ydKJLWHj0WUK5RMPsOYNiF41iNwOlo2g%2Bz8B8pl7EHtfzvbryxBs%2BZvQ6%2FCIcgSJGHsOOzecIkfwQEVsltiHIkZ6s6fPHvguElYn6uix3UXdjD%2FeasBJixZyLVXbfCKtesBz4Hi5bx9gx9D53Z76DgStNx%2FjHlvaikiUzRCiD974HdAdE1fvL2siXjHPZ3x6Q7EVrsT%2F91n1RY%2FQDMvkD2SCWQjeBG8yTYmZxDYzI5gCE4%2F9amuek96gf3x%2Ff08VLAXxevNRSULunmsb9omY1vBGWxq9FZ%2FNnl%2BXvzfzIl1Azh1pDhCXeoAl%2FbcXA9ztQ4oVBzGMvIMVnAMNNZwK6WMQWGnA%2FtOLXv5Eo7RW%2FVRUF5p46G0uHpz%2FVFtAqiQ2eFf5YKpfozXdKQB7Wr7xY2socWHPxFjSw8viI6pEf0Gx%2BYYycfLzr%2FddXMKGOncQGOqUBOVVOzBeIg%2B%2FKP8xAEwF21uvF2PtM2jccy%2BYFNcYhu25ge1c6E8JbgSTU4tZQnvgiuWH%2BCbxayjtvVpU7wDppG3GfXzzIzwUcFHhz882lX9xitwppJbdwDdRiDOyqCNhKmQry0D7E%2F6xpBbCOjyUGZu%2BJydj212HS%2Bmrdj1RqnYVfAnYA%2B0l53F8h2LduwofOG5vJrBI2lzvCnoVKt8Zqkeqh7FbE&X-Amz-Signature=9bcb144ee9f396c0de3c72000d45e386fb0c8693c7efe8df1d07e900633e1e5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too

```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin
from nav_msgs.msg import Odometry, Path

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.5, self.timer_callback)
		
		# gets called every 0.5 seconds
    def timer_callback(self):
			...
```

To find out how the `JointState` message is formatted we can run these two commands in two different terminals

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 topic echo /joint_states
```

</div>
</div>

**Output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JPHNGMV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDLh7FSSnrnQwk4RUF9iVW1o8LKv7NI9cJnwMYKyRk12gIgLJYWgyousv5iwFOwtY8mgUi%2B0lgtoqpY3I5hCNws%2FzYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNU093E8aIg9uBBB%2FyrcA6bT1AiwSIh7zPn9XHjVfxURYGL7Pto9sXXqHTegP%2FnAb1MMa80Q9mNpmWcyZkClvSLRvRbvaKmEvPbbOqGih%2BuWiLrySZrYLEjwXuUQxcY%2BfIUVaq%2B8QG6q1GCgWPA0vR9bZy5JeTMJEXpFmLyPKBCAkVUMrqFzpbYnF9RlXdvVnqCNCt6jabuS3a2qAMhEGS2ydKJLWHj0WUK5RMPsOYNiF41iNwOlo2g%2Bz8B8pl7EHtfzvbryxBs%2BZvQ6%2FCIcgSJGHsOOzecIkfwQEVsltiHIkZ6s6fPHvguElYn6uix3UXdjD%2FeasBJixZyLVXbfCKtesBz4Hi5bx9gx9D53Z76DgStNx%2FjHlvaikiUzRCiD974HdAdE1fvL2siXjHPZ3x6Q7EVrsT%2F91n1RY%2FQDMvkD2SCWQjeBG8yTYmZxDYzI5gCE4%2F9amuek96gf3x%2Ff08VLAXxevNRSULunmsb9omY1vBGWxq9FZ%2FNnl%2BXvzfzIl1Azh1pDhCXeoAl%2FbcXA9ztQ4oVBzGMvIMVnAMNNZwK6WMQWGnA%2FtOLXv5Eo7RW%2FVRUF5p46G0uHpz%2FVFtAqiQ2eFf5YKpfozXdKQB7Wr7xY2socWHPxFjSw8viI6pEf0Gx%2BYYycfLzr%2FddXMKGOncQGOqUBOVVOzBeIg%2B%2FKP8xAEwF21uvF2PtM2jccy%2BYFNcYhu25ge1c6E8JbgSTU4tZQnvgiuWH%2BCbxayjtvVpU7wDppG3GfXzzIzwUcFHhz882lX9xitwppJbdwDdRiDOyqCNhKmQry0D7E%2F6xpBbCOjyUGZu%2BJydj212HS%2Bmrdj1RqnYVfAnYA%2B0l53F8h2LduwofOG5vJrBI2lzvCnoVKt8Zqkeqh7FbE&X-Amz-Signature=73796dd26a405982c473488f016ea75a1ce5e58d67d68f73faf1e9fd7d8ac394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

the `ros2 topic echo /joint_states` command showed what the `joint_state_publisher_gui_node` is publishing. 

> [**official** ](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[**`sensor_msg/JointState`**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[ **docs**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)

#### `sensor_msg/JointState` format:

```python
header:
  stamp:
    sec: 1751953191
    nanosec: 173816334
  frame_id: ''
name:
- drivewhl_l_joint
- drivewhl_r_joint
position:
- -0.7640353333530374
- -0.25446900494077296
velocity: []
effort: []
```

we can fill in the fields roughly the same

```python

    def timer_callback(self):
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here
        current_time = self.get_clock().now().to_msg()
        
        # ============ updating URDF wheel joints ====================
        msg = JointState()                                  # create msg object
        msg.header.stamp = current_time                     # fill it with data
        msg.header.frame_id = ''
        msg.name = ["drivewhl_l_joint","drivewhl_r_joint"]
        msg.position = [new_left_wheel_th, new_right_wheel_th]
        msg.velocity = []
        msg.effort = []
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info(f'Publishing position {new_left_wheel_th}, {new_right_wheel_th}')       # print msg
```

{{% alert context="warning" %}}

## REMEMBER TO GET WHEEL POSITION!!

At this point you would most likely read from your Arduino or from the Raspberry Pi’s GPIO.

if you are in Robomasters this will most likely come from the `RM_Uart` class

{{% /alert %}}

<details>
      <summary>How do I get wheel position from a Raspberry Pi or Arduino?</summary>
      TODO:
  </details>

<details>
      <summary>Final code:</summary>
      
  </details>

At this point plug in your robot to you laptop/computer

TODO: if on WSL reference previous WSL guide

<details>
      <summary>What if I don’t have a robot</summary>
      We can fake the wheel values by doing this
  </details>

## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JPHNGMV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDLh7FSSnrnQwk4RUF9iVW1o8LKv7NI9cJnwMYKyRk12gIgLJYWgyousv5iwFOwtY8mgUi%2B0lgtoqpY3I5hCNws%2FzYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNU093E8aIg9uBBB%2FyrcA6bT1AiwSIh7zPn9XHjVfxURYGL7Pto9sXXqHTegP%2FnAb1MMa80Q9mNpmWcyZkClvSLRvRbvaKmEvPbbOqGih%2BuWiLrySZrYLEjwXuUQxcY%2BfIUVaq%2B8QG6q1GCgWPA0vR9bZy5JeTMJEXpFmLyPKBCAkVUMrqFzpbYnF9RlXdvVnqCNCt6jabuS3a2qAMhEGS2ydKJLWHj0WUK5RMPsOYNiF41iNwOlo2g%2Bz8B8pl7EHtfzvbryxBs%2BZvQ6%2FCIcgSJGHsOOzecIkfwQEVsltiHIkZ6s6fPHvguElYn6uix3UXdjD%2FeasBJixZyLVXbfCKtesBz4Hi5bx9gx9D53Z76DgStNx%2FjHlvaikiUzRCiD974HdAdE1fvL2siXjHPZ3x6Q7EVrsT%2F91n1RY%2FQDMvkD2SCWQjeBG8yTYmZxDYzI5gCE4%2F9amuek96gf3x%2Ff08VLAXxevNRSULunmsb9omY1vBGWxq9FZ%2FNnl%2BXvzfzIl1Azh1pDhCXeoAl%2FbcXA9ztQ4oVBzGMvIMVnAMNNZwK6WMQWGnA%2FtOLXv5Eo7RW%2FVRUF5p46G0uHpz%2FVFtAqiQ2eFf5YKpfozXdKQB7Wr7xY2socWHPxFjSw8viI6pEf0Gx%2BYYycfLzr%2FddXMKGOncQGOqUBOVVOzBeIg%2B%2FKP8xAEwF21uvF2PtM2jccy%2BYFNcYhu25ge1c6E8JbgSTU4tZQnvgiuWH%2BCbxayjtvVpU7wDppG3GfXzzIzwUcFHhz882lX9xitwppJbdwDdRiDOyqCNhKmQry0D7E%2F6xpBbCOjyUGZu%2BJydj212HS%2Bmrdj1RqnYVfAnYA%2B0l53F8h2LduwofOG5vJrBI2lzvCnoVKt8Zqkeqh7FbE&X-Amz-Signature=229b9dece5c6c37bcf5cd55cb079d3c071aefc5bd63f859f9f2d09bcbf01aaec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JPHNGMV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDLh7FSSnrnQwk4RUF9iVW1o8LKv7NI9cJnwMYKyRk12gIgLJYWgyousv5iwFOwtY8mgUi%2B0lgtoqpY3I5hCNws%2FzYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNU093E8aIg9uBBB%2FyrcA6bT1AiwSIh7zPn9XHjVfxURYGL7Pto9sXXqHTegP%2FnAb1MMa80Q9mNpmWcyZkClvSLRvRbvaKmEvPbbOqGih%2BuWiLrySZrYLEjwXuUQxcY%2BfIUVaq%2B8QG6q1GCgWPA0vR9bZy5JeTMJEXpFmLyPKBCAkVUMrqFzpbYnF9RlXdvVnqCNCt6jabuS3a2qAMhEGS2ydKJLWHj0WUK5RMPsOYNiF41iNwOlo2g%2Bz8B8pl7EHtfzvbryxBs%2BZvQ6%2FCIcgSJGHsOOzecIkfwQEVsltiHIkZ6s6fPHvguElYn6uix3UXdjD%2FeasBJixZyLVXbfCKtesBz4Hi5bx9gx9D53Z76DgStNx%2FjHlvaikiUzRCiD974HdAdE1fvL2siXjHPZ3x6Q7EVrsT%2F91n1RY%2FQDMvkD2SCWQjeBG8yTYmZxDYzI5gCE4%2F9amuek96gf3x%2Ff08VLAXxevNRSULunmsb9omY1vBGWxq9FZ%2FNnl%2BXvzfzIl1Azh1pDhCXeoAl%2FbcXA9ztQ4oVBzGMvIMVnAMNNZwK6WMQWGnA%2FtOLXv5Eo7RW%2FVRUF5p46G0uHpz%2FVFtAqiQ2eFf5YKpfozXdKQB7Wr7xY2socWHPxFjSw8viI6pEf0Gx%2BYYycfLzr%2FddXMKGOncQGOqUBOVVOzBeIg%2B%2FKP8xAEwF21uvF2PtM2jccy%2BYFNcYhu25ge1c6E8JbgSTU4tZQnvgiuWH%2BCbxayjtvVpU7wDppG3GfXzzIzwUcFHhz882lX9xitwppJbdwDdRiDOyqCNhKmQry0D7E%2F6xpBbCOjyUGZu%2BJydj212HS%2Bmrdj1RqnYVfAnYA%2B0l53F8h2LduwofOG5vJrBI2lzvCnoVKt8Zqkeqh7FbE&X-Amz-Signature=7b95f179c67bc1473b62d03953b16c07945b9fbef5e028a5c13d186620aa06a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```bash
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run mbot_pkg my_node
```

</div>
</div>

### **rviz result:**

moving the robot should also update the rviz model

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JPHNGMV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDLh7FSSnrnQwk4RUF9iVW1o8LKv7NI9cJnwMYKyRk12gIgLJYWgyousv5iwFOwtY8mgUi%2B0lgtoqpY3I5hCNws%2FzYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNU093E8aIg9uBBB%2FyrcA6bT1AiwSIh7zPn9XHjVfxURYGL7Pto9sXXqHTegP%2FnAb1MMa80Q9mNpmWcyZkClvSLRvRbvaKmEvPbbOqGih%2BuWiLrySZrYLEjwXuUQxcY%2BfIUVaq%2B8QG6q1GCgWPA0vR9bZy5JeTMJEXpFmLyPKBCAkVUMrqFzpbYnF9RlXdvVnqCNCt6jabuS3a2qAMhEGS2ydKJLWHj0WUK5RMPsOYNiF41iNwOlo2g%2Bz8B8pl7EHtfzvbryxBs%2BZvQ6%2FCIcgSJGHsOOzecIkfwQEVsltiHIkZ6s6fPHvguElYn6uix3UXdjD%2FeasBJixZyLVXbfCKtesBz4Hi5bx9gx9D53Z76DgStNx%2FjHlvaikiUzRCiD974HdAdE1fvL2siXjHPZ3x6Q7EVrsT%2F91n1RY%2FQDMvkD2SCWQjeBG8yTYmZxDYzI5gCE4%2F9amuek96gf3x%2Ff08VLAXxevNRSULunmsb9omY1vBGWxq9FZ%2FNnl%2BXvzfzIl1Azh1pDhCXeoAl%2FbcXA9ztQ4oVBzGMvIMVnAMNNZwK6WMQWGnA%2FtOLXv5Eo7RW%2FVRUF5p46G0uHpz%2FVFtAqiQ2eFf5YKpfozXdKQB7Wr7xY2socWHPxFjSw8viI6pEf0Gx%2BYYycfLzr%2FddXMKGOncQGOqUBOVVOzBeIg%2B%2FKP8xAEwF21uvF2PtM2jccy%2BYFNcYhu25ge1c6E8JbgSTU4tZQnvgiuWH%2BCbxayjtvVpU7wDppG3GfXzzIzwUcFHhz882lX9xitwppJbdwDdRiDOyqCNhKmQry0D7E%2F6xpBbCOjyUGZu%2BJydj212HS%2Bmrdj1RqnYVfAnYA%2B0l53F8h2LduwofOG5vJrBI2lzvCnoVKt8Zqkeqh7FbE&X-Amz-Signature=273682d7b5eaa71e0a6da9891c015c3feaae590c1ab65e9a837bb1c130d9aaf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python
		...
		
		# ros2 run mbot_pkg my_node
    my_node = Node( # launches our custom node
        package='mbot_pkg',
        executable='my_node'
    )

    return LaunchDescription([
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz
    ])
```

Now you only need `ros2 launch mbot_pkg display.launch.py` to run the whole setup

# Converting wheel angles to x,y (adding odom frame)

Now that we have the wheel angles lets get the (x, y) of the robot like in the GIF at the top of this guide

we do this though the `odom => base_link` transform

TODO: idk get gif from atriculate robotics of `odom => base_link` transform

<details>
      <summary>why </summary>
      This transform is required as in input to Nav2
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JPHNGMV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDLh7FSSnrnQwk4RUF9iVW1o8LKv7NI9cJnwMYKyRk12gIgLJYWgyousv5iwFOwtY8mgUi%2B0lgtoqpY3I5hCNws%2FzYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNU093E8aIg9uBBB%2FyrcA6bT1AiwSIh7zPn9XHjVfxURYGL7Pto9sXXqHTegP%2FnAb1MMa80Q9mNpmWcyZkClvSLRvRbvaKmEvPbbOqGih%2BuWiLrySZrYLEjwXuUQxcY%2BfIUVaq%2B8QG6q1GCgWPA0vR9bZy5JeTMJEXpFmLyPKBCAkVUMrqFzpbYnF9RlXdvVnqCNCt6jabuS3a2qAMhEGS2ydKJLWHj0WUK5RMPsOYNiF41iNwOlo2g%2Bz8B8pl7EHtfzvbryxBs%2BZvQ6%2FCIcgSJGHsOOzecIkfwQEVsltiHIkZ6s6fPHvguElYn6uix3UXdjD%2FeasBJixZyLVXbfCKtesBz4Hi5bx9gx9D53Z76DgStNx%2FjHlvaikiUzRCiD974HdAdE1fvL2siXjHPZ3x6Q7EVrsT%2F91n1RY%2FQDMvkD2SCWQjeBG8yTYmZxDYzI5gCE4%2F9amuek96gf3x%2Ff08VLAXxevNRSULunmsb9omY1vBGWxq9FZ%2FNnl%2BXvzfzIl1Azh1pDhCXeoAl%2FbcXA9ztQ4oVBzGMvIMVnAMNNZwK6WMQWGnA%2FtOLXv5Eo7RW%2FVRUF5p46G0uHpz%2FVFtAqiQ2eFf5YKpfozXdKQB7Wr7xY2socWHPxFjSw8viI6pEf0Gx%2BYYycfLzr%2FddXMKGOncQGOqUBOVVOzBeIg%2B%2FKP8xAEwF21uvF2PtM2jccy%2BYFNcYhu25ge1c6E8JbgSTU4tZQnvgiuWH%2BCbxayjtvVpU7wDppG3GfXzzIzwUcFHhz882lX9xitwppJbdwDdRiDOyqCNhKmQry0D7E%2F6xpBbCOjyUGZu%2BJydj212HS%2Bmrdj1RqnYVfAnYA%2B0l53F8h2LduwofOG5vJrBI2lzvCnoVKt8Zqkeqh7FbE&X-Amz-Signature=a806628922f34be1923b6dbef869d9486b8409d077d8fcd0fd3b88ec2f1c06ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EDHQTJR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDDpx9BGEkAfjGBuB3zKlz0QM5NbKSfGbhc4YFElOJohwIgI0l98zGlkaiK8riI7KRtGykWc3w6qBm689zbnW%2Bvnt4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaarGo4Ff8gjWUCsSrcAxW%2FWzI2YhAUZyBEjjnRB%2B36V5Wm5Ck%2BAoyKha8OEpbcwh8BxlFm2jLTvS0Dyok%2BAHg4QWHcryouzUzXIurigsoTnVedfpyTFd30h%2Fe3pmPut0yFA%2B56uyHi0gEEKkZS5gdeTFKTJO27KmIkYVSRH1lKf4l7RL3vAyxKsnmkpVpNdb%2Bagg1uUbY4ADbV6%2FSc7ejWc02eH9GH2NYFk0NQeH4NM9w%2F8ZYcBlkMZh2F0dbkZAVt2UN5euJSVvpu3Pumtr3j34bTQi%2BjZONzmo56W4Jlw%2BMUBQj8dxfwdwWS7XQAXvIHq4cV0uxwE0FXk4eAVj626Rejha6FEvAnlDIFpSmmjYeQRg8FIpQ%2BR9bXXKRXITunxgMKlKjsZ5r2WkVi7ObxEfTT3BMsAlOElqrJUtHKkdXzYQIRU8JvMsTjyJOdpWhrd9HrWOexCKEkAZj7KFzSanxM%2FEf9IUZ9lsHLw6rxr%2B68bDIMQLbU%2BBMhFMUOaBEK0LJQDRHNRT%2B2SqXrcL%2BnjpLV8KL%2F7T4hX2JmnMFtRaJ8%2FavACQsidsdryngu9sjDPFomOQc5isI0McpjSu2nqHmnpQofyJZfBPPUMQNqlEeJfoUNtX7ytBxbFG5WLluwfpOXdYm2kwmDMNuNncQGOqUBs%2FdJD80naxthV%2B%2FFXbRiR%2B8ZkshgMw3H9kCjNIzz6vO8WBgyux%2BzBsGPtQ%2BSnXOsxfm2cbW6peYjT8SqRYRt4VR4Bif5fwcKc5DAOmKFvyfzTIKsi3LDNGMWAdkztB20j%2Fl%2F3BnoGovOR5130wy3z%2BizH9wRWdC%2FMrS%2BZg9IjILJWswUiobmLpWciEew%2Fp%2B%2F1acQaXiXSp5C0wlvsM031GgZ7ipc&X-Amz-Signature=8655ec774deaf31e9c9d8ae6f06faaddfe222097e33e44e37278b158cd163798&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
  </details>

But for those who just want the equations/functions I wrote a `calculate_position()` function

This function just takes in:

- current left & right wheel angles
- most recent measured left & right wheel angles
- robot’s rotation (theta)

and returns the (x,y)

add this above the `MinimalPublisher` class

```python
def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
    """retruns the robots x,y offset given wheel angles

    Args:
        new_right_wheel_th (float): new mesured right wheel angle
        right_angle (float): previous right wheel angle
        new_float_wheel_th (float): new mesured left wheel angle
        left_angle (float): previous left wheel angle
        th (float): robot chassis rotation

    Returns:
        (float, float): x,y offset
    """

    WHEEL_RADIUS = 0.10
    WHEEL_SEPARATION = 0.31+2*0.025 # body + wheel gap (there are 2 wheels)

    # convert rotation to linear distance
    dr = (new_right_wheel_th - right_angle)*WHEEL_RADIUS
    dl = (new_left_wheel_th - left_angle)*WHEEL_RADIUS

    # calcuate movement
    offset = (dr + dl) / 2
    delta_th = (dr - dl) / WHEEL_SEPARATION

    # extract componates
    relative_dx = offset*cos(delta_th)
    relative_dy = offset*sin(delta_th)

    #rotation matrix
    delta_x = relative_dx*cos(th) - relative_dy*sin(th)
    delta_y = relative_dx*sin(th) + relative_dy*cos(th)
    return (delta_x,delta_y,delta_th)

```

Next lets make some variables to store the wheel angle, x, y, and theta (robot rotation)

```python
class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # obj to broadcasts the odom tf frame
```

now in `timer_callback()` lets broadcast the `odom => base_link` tf frame

```python
    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()

				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calcuate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.right_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th

        # create and publish transform message
        odom_trans = TransformStamped()
        odom_trans.header.stamp = current_time
        odom_trans.header.frame_id = "odom"
        odom_trans.child_frame_id = "base_link"
        odom_trans.transform.translation.x = self.x
        odom_trans.transform.translation.y = self.y
        odom_trans.transform.translation.z = 0.0
        q = quaternion_from_euler(0, 0, self.th)
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans)

        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

## Running code

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```bash
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run mbot_pkg my_node
```

</div>
</div>

TODO: get screen cap

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JPHNGMV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDLh7FSSnrnQwk4RUF9iVW1o8LKv7NI9cJnwMYKyRk12gIgLJYWgyousv5iwFOwtY8mgUi%2B0lgtoqpY3I5hCNws%2FzYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNU093E8aIg9uBBB%2FyrcA6bT1AiwSIh7zPn9XHjVfxURYGL7Pto9sXXqHTegP%2FnAb1MMa80Q9mNpmWcyZkClvSLRvRbvaKmEvPbbOqGih%2BuWiLrySZrYLEjwXuUQxcY%2BfIUVaq%2B8QG6q1GCgWPA0vR9bZy5JeTMJEXpFmLyPKBCAkVUMrqFzpbYnF9RlXdvVnqCNCt6jabuS3a2qAMhEGS2ydKJLWHj0WUK5RMPsOYNiF41iNwOlo2g%2Bz8B8pl7EHtfzvbryxBs%2BZvQ6%2FCIcgSJGHsOOzecIkfwQEVsltiHIkZ6s6fPHvguElYn6uix3UXdjD%2FeasBJixZyLVXbfCKtesBz4Hi5bx9gx9D53Z76DgStNx%2FjHlvaikiUzRCiD974HdAdE1fvL2siXjHPZ3x6Q7EVrsT%2F91n1RY%2FQDMvkD2SCWQjeBG8yTYmZxDYzI5gCE4%2F9amuek96gf3x%2Ff08VLAXxevNRSULunmsb9omY1vBGWxq9FZ%2FNnl%2BXvzfzIl1Azh1pDhCXeoAl%2FbcXA9ztQ4oVBzGMvIMVnAMNNZwK6WMQWGnA%2FtOLXv5Eo7RW%2FVRUF5p46G0uHpz%2FVFtAqiQ2eFf5YKpfozXdKQB7Wr7xY2socWHPxFjSw8viI6pEf0Gx%2BYYycfLzr%2FddXMKGOncQGOqUBOVVOzBeIg%2B%2FKP8xAEwF21uvF2PtM2jccy%2BYFNcYhu25ge1c6E8JbgSTU4tZQnvgiuWH%2BCbxayjtvVpU7wDppG3GfXzzIzwUcFHhz882lX9xitwppJbdwDdRiDOyqCNhKmQry0D7E%2F6xpBbCOjyUGZu%2BJydj212HS%2Bmrdj1RqnYVfAnYA%2B0l53F8h2LduwofOG5vJrBI2lzvCnoVKt8Zqkeqh7FbE&X-Amz-Signature=78dcc564cebabe052ba55c4b9cc9510d0f65f5754c52bee70983969f69e5f139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUM6JTRC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDXaRNBhzIheovt6YCvJeRkSxaf4ENTt%2BlFfVC4GmTv6AiEAwwri4ljDE21phScWGiirZi1lRtZrjhC90IePPfSz%2BWIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFV%2BxqAVnXvFYlVncCrcAxwzVnAcSk4QlNUCUgo%2FChuBVX012TNZ3mlsXRaWlgUgQmVmO6mutgNTYYIAUA7dHY97w%2BOu9ROjrHgSrcb42q4evwyVlw6vgtbuytoyVzevXBXXjDiVHPVakOD6Psxf8tcrqiivK%2F6A%2BlSWNAWrIe6cgErDQdIF81ot1%2FQ9M4OkJTDeaFdM0pORI8U6Kl3%2FPxkHg4b4r5XsBGVEQRoNxzosZSc9zMnL0PlKy9ED%2BTyo0qYwElUChphW7li37nzp9KKesGNBwl%2BqZN2ov7H3WNNxrnLLhLZqdg0syU4PiNOqkQM9EGwsNX%2BLkS6djnrqj6nL%2FmElJMHP7LWbeS%2FwRc3vyuG4eC6r%2Bm%2BU41%2Fif8fV%2Fw3TexyEEoNS5BQ85jkDzHxRJWMbch4s0DoVXsua4XHZLUooLY42c858c0b2n0lJE9Tp5VJGWxuK1cFKkfM9D02m9%2FIXNAptpOj47vqgyk2w87u37z9YQygzoGiQQplNofSOytjcVCEe0FBGc0btJCQQcKAduy6xesRKIJ49LW2sQEs7fb4G3enko5Z%2FEkeS5BngI1xTLNC578jqOiLflMNNCOEoyG%2FeiPgCha7TUtBqMHuAOVwtkujv4G0UWPAjRIV7HGQPR8uM5aieMOaNncQGOqUBtY122BjmJcFVMca%2B4hRmSJzWABSODlrQ%2BICoh%2Bq4Xdzt%2FDZ82P7YnunzUWcSq6vdRS96o6rlgd70%2BsFIFn4SfJMwMKCl0dWjknhC0WjN8RppUVeDesCNpDQ0ZMKvZENGGbOoeK4IkNSvqoYvHFmDZVzesY9SFNtvkgxa6docNO4mTHo3FX4QH7rUujPvSZp4%2FN4TWOUgJPdQhawjVYPtfJ3cOHqZ&X-Amz-Signature=81887d26f5e50951c2da77291fbe4325198ab4014ab4725488eeab8406ad14c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self)

        self.subscription = self.create_subscription(Twist, 'cmd_vel', self.listener_callback, 10)
    

    def timer_callback(self):
				...


    def listener_callback(self, msg: Twist):
        self.get_logger().info(f'{msg}')
```

Now we just need some way to send drive commands to `/cmd_vel`

This is where we use **`telop_twist_keyboard`**

{{% alert icon=”👾” context="success" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUM6JTRC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDXaRNBhzIheovt6YCvJeRkSxaf4ENTt%2BlFfVC4GmTv6AiEAwwri4ljDE21phScWGiirZi1lRtZrjhC90IePPfSz%2BWIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFV%2BxqAVnXvFYlVncCrcAxwzVnAcSk4QlNUCUgo%2FChuBVX012TNZ3mlsXRaWlgUgQmVmO6mutgNTYYIAUA7dHY97w%2BOu9ROjrHgSrcb42q4evwyVlw6vgtbuytoyVzevXBXXjDiVHPVakOD6Psxf8tcrqiivK%2F6A%2BlSWNAWrIe6cgErDQdIF81ot1%2FQ9M4OkJTDeaFdM0pORI8U6Kl3%2FPxkHg4b4r5XsBGVEQRoNxzosZSc9zMnL0PlKy9ED%2BTyo0qYwElUChphW7li37nzp9KKesGNBwl%2BqZN2ov7H3WNNxrnLLhLZqdg0syU4PiNOqkQM9EGwsNX%2BLkS6djnrqj6nL%2FmElJMHP7LWbeS%2FwRc3vyuG4eC6r%2Bm%2BU41%2Fif8fV%2Fw3TexyEEoNS5BQ85jkDzHxRJWMbch4s0DoVXsua4XHZLUooLY42c858c0b2n0lJE9Tp5VJGWxuK1cFKkfM9D02m9%2FIXNAptpOj47vqgyk2w87u37z9YQygzoGiQQplNofSOytjcVCEe0FBGc0btJCQQcKAduy6xesRKIJ49LW2sQEs7fb4G3enko5Z%2FEkeS5BngI1xTLNC578jqOiLflMNNCOEoyG%2FeiPgCha7TUtBqMHuAOVwtkujv4G0UWPAjRIV7HGQPR8uM5aieMOaNncQGOqUBtY122BjmJcFVMca%2B4hRmSJzWABSODlrQ%2BICoh%2Bq4Xdzt%2FDZ82P7YnunzUWcSq6vdRS96o6rlgd70%2BsFIFn4SfJMwMKCl0dWjknhC0WjN8RppUVeDesCNpDQ0ZMKvZENGGbOoeK4IkNSvqoYvHFmDZVzesY9SFNtvkgxa6docNO4mTHo3FX4QH7rUujPvSZp4%2FN4TWOUgJPdQhawjVYPtfJ3cOHqZ&X-Amz-Signature=ddd2f7c7de382959a0f6caf6f9a1c08566fd34e457d506947af106828a54ad77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

{{< /table >}}

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUM6JTRC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDXaRNBhzIheovt6YCvJeRkSxaf4ENTt%2BlFfVC4GmTv6AiEAwwri4ljDE21phScWGiirZi1lRtZrjhC90IePPfSz%2BWIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFV%2BxqAVnXvFYlVncCrcAxwzVnAcSk4QlNUCUgo%2FChuBVX012TNZ3mlsXRaWlgUgQmVmO6mutgNTYYIAUA7dHY97w%2BOu9ROjrHgSrcb42q4evwyVlw6vgtbuytoyVzevXBXXjDiVHPVakOD6Psxf8tcrqiivK%2F6A%2BlSWNAWrIe6cgErDQdIF81ot1%2FQ9M4OkJTDeaFdM0pORI8U6Kl3%2FPxkHg4b4r5XsBGVEQRoNxzosZSc9zMnL0PlKy9ED%2BTyo0qYwElUChphW7li37nzp9KKesGNBwl%2BqZN2ov7H3WNNxrnLLhLZqdg0syU4PiNOqkQM9EGwsNX%2BLkS6djnrqj6nL%2FmElJMHP7LWbeS%2FwRc3vyuG4eC6r%2Bm%2BU41%2Fif8fV%2Fw3TexyEEoNS5BQ85jkDzHxRJWMbch4s0DoVXsua4XHZLUooLY42c858c0b2n0lJE9Tp5VJGWxuK1cFKkfM9D02m9%2FIXNAptpOj47vqgyk2w87u37z9YQygzoGiQQplNofSOytjcVCEe0FBGc0btJCQQcKAduy6xesRKIJ49LW2sQEs7fb4G3enko5Z%2FEkeS5BngI1xTLNC578jqOiLflMNNCOEoyG%2FeiPgCha7TUtBqMHuAOVwtkujv4G0UWPAjRIV7HGQPR8uM5aieMOaNncQGOqUBtY122BjmJcFVMca%2B4hRmSJzWABSODlrQ%2BICoh%2Bq4Xdzt%2FDZ82P7YnunzUWcSq6vdRS96o6rlgd70%2BsFIFn4SfJMwMKCl0dWjknhC0WjN8RppUVeDesCNpDQ0ZMKvZENGGbOoeK4IkNSvqoYvHFmDZVzesY9SFNtvkgxa6docNO4mTHo3FX4QH7rUujPvSZp4%2FN4TWOUgJPdQhawjVYPtfJ3cOHqZ&X-Amz-Signature=495a71448a7721500e8ca2ae62ba3c7ecf16ba14e11694df42e422fe04715481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUM6JTRC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDXaRNBhzIheovt6YCvJeRkSxaf4ENTt%2BlFfVC4GmTv6AiEAwwri4ljDE21phScWGiirZi1lRtZrjhC90IePPfSz%2BWIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFV%2BxqAVnXvFYlVncCrcAxwzVnAcSk4QlNUCUgo%2FChuBVX012TNZ3mlsXRaWlgUgQmVmO6mutgNTYYIAUA7dHY97w%2BOu9ROjrHgSrcb42q4evwyVlw6vgtbuytoyVzevXBXXjDiVHPVakOD6Psxf8tcrqiivK%2F6A%2BlSWNAWrIe6cgErDQdIF81ot1%2FQ9M4OkJTDeaFdM0pORI8U6Kl3%2FPxkHg4b4r5XsBGVEQRoNxzosZSc9zMnL0PlKy9ED%2BTyo0qYwElUChphW7li37nzp9KKesGNBwl%2BqZN2ov7H3WNNxrnLLhLZqdg0syU4PiNOqkQM9EGwsNX%2BLkS6djnrqj6nL%2FmElJMHP7LWbeS%2FwRc3vyuG4eC6r%2Bm%2BU41%2Fif8fV%2Fw3TexyEEoNS5BQ85jkDzHxRJWMbch4s0DoVXsua4XHZLUooLY42c858c0b2n0lJE9Tp5VJGWxuK1cFKkfM9D02m9%2FIXNAptpOj47vqgyk2w87u37z9YQygzoGiQQplNofSOytjcVCEe0FBGc0btJCQQcKAduy6xesRKIJ49LW2sQEs7fb4G3enko5Z%2FEkeS5BngI1xTLNC578jqOiLflMNNCOEoyG%2FeiPgCha7TUtBqMHuAOVwtkujv4G0UWPAjRIV7HGQPR8uM5aieMOaNncQGOqUBtY122BjmJcFVMca%2B4hRmSJzWABSODlrQ%2BICoh%2Bq4Xdzt%2FDZ82P7YnunzUWcSq6vdRS96o6rlgd70%2BsFIFn4SfJMwMKCl0dWjknhC0WjN8RppUVeDesCNpDQ0ZMKvZENGGbOoeK4IkNSvqoYvHFmDZVzesY9SFNtvkgxa6docNO4mTHo3FX4QH7rUujPvSZp4%2FN4TWOUgJPdQhawjVYPtfJ3cOHqZ&X-Amz-Signature=336100138e70fb1aa754df7c8dba95b9eb46bf1d6e7db89df0827c0899013089&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUM6JTRC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDXaRNBhzIheovt6YCvJeRkSxaf4ENTt%2BlFfVC4GmTv6AiEAwwri4ljDE21phScWGiirZi1lRtZrjhC90IePPfSz%2BWIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFV%2BxqAVnXvFYlVncCrcAxwzVnAcSk4QlNUCUgo%2FChuBVX012TNZ3mlsXRaWlgUgQmVmO6mutgNTYYIAUA7dHY97w%2BOu9ROjrHgSrcb42q4evwyVlw6vgtbuytoyVzevXBXXjDiVHPVakOD6Psxf8tcrqiivK%2F6A%2BlSWNAWrIe6cgErDQdIF81ot1%2FQ9M4OkJTDeaFdM0pORI8U6Kl3%2FPxkHg4b4r5XsBGVEQRoNxzosZSc9zMnL0PlKy9ED%2BTyo0qYwElUChphW7li37nzp9KKesGNBwl%2BqZN2ov7H3WNNxrnLLhLZqdg0syU4PiNOqkQM9EGwsNX%2BLkS6djnrqj6nL%2FmElJMHP7LWbeS%2FwRc3vyuG4eC6r%2Bm%2BU41%2Fif8fV%2Fw3TexyEEoNS5BQ85jkDzHxRJWMbch4s0DoVXsua4XHZLUooLY42c858c0b2n0lJE9Tp5VJGWxuK1cFKkfM9D02m9%2FIXNAptpOj47vqgyk2w87u37z9YQygzoGiQQplNofSOytjcVCEe0FBGc0btJCQQcKAduy6xesRKIJ49LW2sQEs7fb4G3enko5Z%2FEkeS5BngI1xTLNC578jqOiLflMNNCOEoyG%2FeiPgCha7TUtBqMHuAOVwtkujv4G0UWPAjRIV7HGQPR8uM5aieMOaNncQGOqUBtY122BjmJcFVMca%2B4hRmSJzWABSODlrQ%2BICoh%2Bq4Xdzt%2FDZ82P7YnunzUWcSq6vdRS96o6rlgd70%2BsFIFn4SfJMwMKCl0dWjknhC0WjN8RppUVeDesCNpDQ0ZMKvZENGGbOoeK4IkNSvqoYvHFmDZVzesY9SFNtvkgxa6docNO4mTHo3FX4QH7rUujPvSZp4%2FN4TWOUgJPdQhawjVYPtfJ3cOHqZ&X-Amz-Signature=cb6ea53cbbca923f92321804127b42f4e58ed214577642ef6261ab78b22b9b09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

formatting the print better we can see `TwistStamped` is made of 3 parts

```bash
geometry_msgs.msg.TwistStamped(
	header=std_msgs.msg.Header(stamp=builtin_interfaces.msg.Time(sec=1752445192, nanosec=279741976), frame_id=''),
	twist=geometry_msgs.msg.Twist(
		linear=geometry_msgs.msg.Vector3(x=0.5, y=0.0, z=0.0),
		angular=geometry_msgs.msg.Vector3(x=0.0, y=0.0, z=0.0)
	)
)
```

**TwistStamped:**

- header
- **Twist:**
	- linear
	- angular

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUM6JTRC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDXaRNBhzIheovt6YCvJeRkSxaf4ENTt%2BlFfVC4GmTv6AiEAwwri4ljDE21phScWGiirZi1lRtZrjhC90IePPfSz%2BWIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFV%2BxqAVnXvFYlVncCrcAxwzVnAcSk4QlNUCUgo%2FChuBVX012TNZ3mlsXRaWlgUgQmVmO6mutgNTYYIAUA7dHY97w%2BOu9ROjrHgSrcb42q4evwyVlw6vgtbuytoyVzevXBXXjDiVHPVakOD6Psxf8tcrqiivK%2F6A%2BlSWNAWrIe6cgErDQdIF81ot1%2FQ9M4OkJTDeaFdM0pORI8U6Kl3%2FPxkHg4b4r5XsBGVEQRoNxzosZSc9zMnL0PlKy9ED%2BTyo0qYwElUChphW7li37nzp9KKesGNBwl%2BqZN2ov7H3WNNxrnLLhLZqdg0syU4PiNOqkQM9EGwsNX%2BLkS6djnrqj6nL%2FmElJMHP7LWbeS%2FwRc3vyuG4eC6r%2Bm%2BU41%2Fif8fV%2Fw3TexyEEoNS5BQ85jkDzHxRJWMbch4s0DoVXsua4XHZLUooLY42c858c0b2n0lJE9Tp5VJGWxuK1cFKkfM9D02m9%2FIXNAptpOj47vqgyk2w87u37z9YQygzoGiQQplNofSOytjcVCEe0FBGc0btJCQQcKAduy6xesRKIJ49LW2sQEs7fb4G3enko5Z%2FEkeS5BngI1xTLNC578jqOiLflMNNCOEoyG%2FeiPgCha7TUtBqMHuAOVwtkujv4G0UWPAjRIV7HGQPR8uM5aieMOaNncQGOqUBtY122BjmJcFVMca%2B4hRmSJzWABSODlrQ%2BICoh%2Bq4Xdzt%2FDZ82P7YnunzUWcSq6vdRS96o6rlgd70%2BsFIFn4SfJMwMKCl0dWjknhC0WjN8RppUVeDesCNpDQ0ZMKvZENGGbOoeK4IkNSvqoYvHFmDZVzesY9SFNtvkgxa6docNO4mTHo3FX4QH7rUujPvSZp4%2FN4TWOUgJPdQhawjVYPtfJ3cOHqZ&X-Amz-Signature=3af4ad5b8bfdb1f998e095a8fb00a708b6072f2d8ad6287d2bfb4e3474e8ec93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> [`TwistStamped`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)[ official docs](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)

In our code we can just use `msg.twist.linear` or `msg.twist.angular` to extract what we need:

```python
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # send msg to robot ...
```

from there the message can be sent to the robot

> Note if you are in Robomasters you will most likely use `RM_Uart` to send to the type-c

# adding odom topic

The final topic our node needs to publish is the Odometry.

We did just publish that information into `/tf` with the transform broadcaster.

However, Nav2 still needs it on a separate topic called `/odom` with type `nav_msgs/Odometry`

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUM6JTRC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDXaRNBhzIheovt6YCvJeRkSxaf4ENTt%2BlFfVC4GmTv6AiEAwwri4ljDE21phScWGiirZi1lRtZrjhC90IePPfSz%2BWIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFV%2BxqAVnXvFYlVncCrcAxwzVnAcSk4QlNUCUgo%2FChuBVX012TNZ3mlsXRaWlgUgQmVmO6mutgNTYYIAUA7dHY97w%2BOu9ROjrHgSrcb42q4evwyVlw6vgtbuytoyVzevXBXXjDiVHPVakOD6Psxf8tcrqiivK%2F6A%2BlSWNAWrIe6cgErDQdIF81ot1%2FQ9M4OkJTDeaFdM0pORI8U6Kl3%2FPxkHg4b4r5XsBGVEQRoNxzosZSc9zMnL0PlKy9ED%2BTyo0qYwElUChphW7li37nzp9KKesGNBwl%2BqZN2ov7H3WNNxrnLLhLZqdg0syU4PiNOqkQM9EGwsNX%2BLkS6djnrqj6nL%2FmElJMHP7LWbeS%2FwRc3vyuG4eC6r%2Bm%2BU41%2Fif8fV%2Fw3TexyEEoNS5BQ85jkDzHxRJWMbch4s0DoVXsua4XHZLUooLY42c858c0b2n0lJE9Tp5VJGWxuK1cFKkfM9D02m9%2FIXNAptpOj47vqgyk2w87u37z9YQygzoGiQQplNofSOytjcVCEe0FBGc0btJCQQcKAduy6xesRKIJ49LW2sQEs7fb4G3enko5Z%2FEkeS5BngI1xTLNC578jqOiLflMNNCOEoyG%2FeiPgCha7TUtBqMHuAOVwtkujv4G0UWPAjRIV7HGQPR8uM5aieMOaNncQGOqUBtY122BjmJcFVMca%2B4hRmSJzWABSODlrQ%2BICoh%2Bq4Xdzt%2FDZ82P7YnunzUWcSq6vdRS96o6rlgd70%2BsFIFn4SfJMwMKCl0dWjknhC0WjN8RppUVeDesCNpDQ0ZMKvZENGGbOoeK4IkNSvqoYvHFmDZVzesY9SFNtvkgxa6docNO4mTHo3FX4QH7rUujPvSZp4%2FN4TWOUgJPdQhawjVYPtfJ3cOHqZ&X-Amz-Signature=878117e78e579ed395d5ec08fe3706893c4ecb6cf1c5451124b913192dc49af2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Again we just need to make a publisher and fill in the `nav_msgs/Odometry` message format:

```yaml
header:
  stamp:
    sec: 1753330401
    nanosec: 859879019
  frame_id: odom
child_frame_id: base_link
pose:
  pose:
    position:
      x: 0.42549007816038587
      y: 0.20845842868953549
      z: 0.0
    orientation:
      x: 0.0
      y: 0.0
      z: 0.43871361044460205
      w: 0.8986269348348412
  covariance:
  - 0.0
    ...
twist:
  twist:
    linear:
      x: 0.0
      y: 0.0
      z: 0.0
    angular:
      x: 0.0
      y: 0.0
      z: 0.0
  covariance:
  - 0.0
    ...
```

```python
       
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        
        ...

        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 

        self.odom_publisher = self.create_publisher(Odometry, '/odom', 10)


    def timer_callback(self):
        ...
        
        odom_msg = Odometry()
        odom_msg.header.stamp = current_time
        odom_msg.header.frame_id = 'odom'
        odom_msg.child_frame_id = 'base_link'
        odom_msg.pose.pose.position.x = float(self.x)
        odom_msg.pose.pose.position.y = float(self.y)
        odom_msg.pose.pose.position.z = 0.0
        odom_msg.twist.twist.linear.x = 0.0#float(vx)
        odom_msg.twist.twist.linear.y = 0.0#float(vy)
        odom_msg.twist.twist.angular.z = 0.0
        odom_msg.pose.pose.orientation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_publisher.publish(odom_msg)
```

<details>
      <summary>Final code</summary>
      
  </details>

TODO: idk mention + link Robot Localization node
