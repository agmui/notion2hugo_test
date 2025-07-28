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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDBNKJD6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIBYoLvlU6m0zc%2F2pvsYdw62P0DlIXqxkifBi1Y1CDc1uAiA%2B1jDoI095XeNBn6mD%2FXHq%2Bl1M3%2Bi7JrHc0YUMD7NN7yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx15VAXMXLjx70J4jKtwDXwUZBE3gmABRI%2Fs%2BML6muWub0Zdl5oit2LISSGd%2F4KI2b1QPCcGahiwmpdVaUmMLaTGs7daPTgw2flqg8KnzUFlA77QHEVC2SK%2BShs%2BIhLe8wkxRWjuWILfK6AUm2i7d%2BIImF1TypftMRLcR%2Bp6jBbjb9mqAFNRxBcHe0ZcQnUcYa3dEm9XZMijSD%2BpeDMgfjBXysRoRJqIJGkcw7xfnVj59A48rJAI3kC2Wv52bzeEZreKJPKv%2Fdl9WhKdQhGTfLPDPCrgskMx%2B%2B6eNnU8GlEmD6kJZIYy6w3ewE9npINU9kxoN0VQnmknE5%2FvNsrke5q9UeQjRHUuJhD%2FpPh8E8jBOwak9Qux4Wn7vDmhFu16b8LKquvUUHaf5MkkvTQXu8qng%2FFYvdUEZyRkcJOjJXtgk6k9SlPTfj5GLoEwAg91sllP5lu264ygguPbd6we6sN8AO%2FDhi4KvYKvxrzk0wIhH%2BSv7z8d2tA7GjOMfIA8StbvUjrajlJcbd6V8HNlRQMVRTmT07D%2B088St6jWkJHhfB7uaQU3s0Am8NJJesfd1d5B5sqNRBW4FVTIxwQytED%2FD%2FqNc7wX%2FCjGlB6UOUBhud87mFcyDg5mNEiG2Vf%2B7D5uqjvoMymfI6Tww5%2B6axAY6pgFgCJ3jsFAPdx%2BFRr7GTzoeiuopAOAAwkrMQsfEGGnGGUqDasLE%2BEHYPGFKVa1frttgX%2B39kDe2Mn1u%2FfA16GTGPqRAAe11XkV1fC3TdJQUtvNz8F88DoegblWEAxL7TOx7KBE5GibfV9aQ%2BO%2FZ4DxlG%2BtxyM%2FTu1LNyhab2PgPwOWhdnZQ7QSZfl6hFEWKwnmfQeAwgSYhebcbc7SjPfU1cdr2R3H9&X-Amz-Signature=b07feaf2f2169c7a85ed88cf0f8fa58ebf9a353e7560d14a0a322d22d5c8efce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDBNKJD6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIBYoLvlU6m0zc%2F2pvsYdw62P0DlIXqxkifBi1Y1CDc1uAiA%2B1jDoI095XeNBn6mD%2FXHq%2Bl1M3%2Bi7JrHc0YUMD7NN7yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx15VAXMXLjx70J4jKtwDXwUZBE3gmABRI%2Fs%2BML6muWub0Zdl5oit2LISSGd%2F4KI2b1QPCcGahiwmpdVaUmMLaTGs7daPTgw2flqg8KnzUFlA77QHEVC2SK%2BShs%2BIhLe8wkxRWjuWILfK6AUm2i7d%2BIImF1TypftMRLcR%2Bp6jBbjb9mqAFNRxBcHe0ZcQnUcYa3dEm9XZMijSD%2BpeDMgfjBXysRoRJqIJGkcw7xfnVj59A48rJAI3kC2Wv52bzeEZreKJPKv%2Fdl9WhKdQhGTfLPDPCrgskMx%2B%2B6eNnU8GlEmD6kJZIYy6w3ewE9npINU9kxoN0VQnmknE5%2FvNsrke5q9UeQjRHUuJhD%2FpPh8E8jBOwak9Qux4Wn7vDmhFu16b8LKquvUUHaf5MkkvTQXu8qng%2FFYvdUEZyRkcJOjJXtgk6k9SlPTfj5GLoEwAg91sllP5lu264ygguPbd6we6sN8AO%2FDhi4KvYKvxrzk0wIhH%2BSv7z8d2tA7GjOMfIA8StbvUjrajlJcbd6V8HNlRQMVRTmT07D%2B088St6jWkJHhfB7uaQU3s0Am8NJJesfd1d5B5sqNRBW4FVTIxwQytED%2FD%2FqNc7wX%2FCjGlB6UOUBhud87mFcyDg5mNEiG2Vf%2B7D5uqjvoMymfI6Tww5%2B6axAY6pgFgCJ3jsFAPdx%2BFRr7GTzoeiuopAOAAwkrMQsfEGGnGGUqDasLE%2BEHYPGFKVa1frttgX%2B39kDe2Mn1u%2FfA16GTGPqRAAe11XkV1fC3TdJQUtvNz8F88DoegblWEAxL7TOx7KBE5GibfV9aQ%2BO%2FZ4DxlG%2BtxyM%2FTu1LNyhab2PgPwOWhdnZQ7QSZfl6hFEWKwnmfQeAwgSYhebcbc7SjPfU1cdr2R3H9&X-Amz-Signature=7a12af48efc25157612679778f74dd5b047e0b2b288e0ffcf3b5289761563d26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDBNKJD6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIBYoLvlU6m0zc%2F2pvsYdw62P0DlIXqxkifBi1Y1CDc1uAiA%2B1jDoI095XeNBn6mD%2FXHq%2Bl1M3%2Bi7JrHc0YUMD7NN7yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx15VAXMXLjx70J4jKtwDXwUZBE3gmABRI%2Fs%2BML6muWub0Zdl5oit2LISSGd%2F4KI2b1QPCcGahiwmpdVaUmMLaTGs7daPTgw2flqg8KnzUFlA77QHEVC2SK%2BShs%2BIhLe8wkxRWjuWILfK6AUm2i7d%2BIImF1TypftMRLcR%2Bp6jBbjb9mqAFNRxBcHe0ZcQnUcYa3dEm9XZMijSD%2BpeDMgfjBXysRoRJqIJGkcw7xfnVj59A48rJAI3kC2Wv52bzeEZreKJPKv%2Fdl9WhKdQhGTfLPDPCrgskMx%2B%2B6eNnU8GlEmD6kJZIYy6w3ewE9npINU9kxoN0VQnmknE5%2FvNsrke5q9UeQjRHUuJhD%2FpPh8E8jBOwak9Qux4Wn7vDmhFu16b8LKquvUUHaf5MkkvTQXu8qng%2FFYvdUEZyRkcJOjJXtgk6k9SlPTfj5GLoEwAg91sllP5lu264ygguPbd6we6sN8AO%2FDhi4KvYKvxrzk0wIhH%2BSv7z8d2tA7GjOMfIA8StbvUjrajlJcbd6V8HNlRQMVRTmT07D%2B088St6jWkJHhfB7uaQU3s0Am8NJJesfd1d5B5sqNRBW4FVTIxwQytED%2FD%2FqNc7wX%2FCjGlB6UOUBhud87mFcyDg5mNEiG2Vf%2B7D5uqjvoMymfI6Tww5%2B6axAY6pgFgCJ3jsFAPdx%2BFRr7GTzoeiuopAOAAwkrMQsfEGGnGGUqDasLE%2BEHYPGFKVa1frttgX%2B39kDe2Mn1u%2FfA16GTGPqRAAe11XkV1fC3TdJQUtvNz8F88DoegblWEAxL7TOx7KBE5GibfV9aQ%2BO%2FZ4DxlG%2BtxyM%2FTu1LNyhab2PgPwOWhdnZQ7QSZfl6hFEWKwnmfQeAwgSYhebcbc7SjPfU1cdr2R3H9&X-Amz-Signature=28c790cb1f0eabd15126e43972a861a0bce88ad5592b226851254699d627f041&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDBNKJD6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIBYoLvlU6m0zc%2F2pvsYdw62P0DlIXqxkifBi1Y1CDc1uAiA%2B1jDoI095XeNBn6mD%2FXHq%2Bl1M3%2Bi7JrHc0YUMD7NN7yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx15VAXMXLjx70J4jKtwDXwUZBE3gmABRI%2Fs%2BML6muWub0Zdl5oit2LISSGd%2F4KI2b1QPCcGahiwmpdVaUmMLaTGs7daPTgw2flqg8KnzUFlA77QHEVC2SK%2BShs%2BIhLe8wkxRWjuWILfK6AUm2i7d%2BIImF1TypftMRLcR%2Bp6jBbjb9mqAFNRxBcHe0ZcQnUcYa3dEm9XZMijSD%2BpeDMgfjBXysRoRJqIJGkcw7xfnVj59A48rJAI3kC2Wv52bzeEZreKJPKv%2Fdl9WhKdQhGTfLPDPCrgskMx%2B%2B6eNnU8GlEmD6kJZIYy6w3ewE9npINU9kxoN0VQnmknE5%2FvNsrke5q9UeQjRHUuJhD%2FpPh8E8jBOwak9Qux4Wn7vDmhFu16b8LKquvUUHaf5MkkvTQXu8qng%2FFYvdUEZyRkcJOjJXtgk6k9SlPTfj5GLoEwAg91sllP5lu264ygguPbd6we6sN8AO%2FDhi4KvYKvxrzk0wIhH%2BSv7z8d2tA7GjOMfIA8StbvUjrajlJcbd6V8HNlRQMVRTmT07D%2B088St6jWkJHhfB7uaQU3s0Am8NJJesfd1d5B5sqNRBW4FVTIxwQytED%2FD%2FqNc7wX%2FCjGlB6UOUBhud87mFcyDg5mNEiG2Vf%2B7D5uqjvoMymfI6Tww5%2B6axAY6pgFgCJ3jsFAPdx%2BFRr7GTzoeiuopAOAAwkrMQsfEGGnGGUqDasLE%2BEHYPGFKVa1frttgX%2B39kDe2Mn1u%2FfA16GTGPqRAAe11XkV1fC3TdJQUtvNz8F88DoegblWEAxL7TOx7KBE5GibfV9aQ%2BO%2FZ4DxlG%2BtxyM%2FTu1LNyhab2PgPwOWhdnZQ7QSZfl6hFEWKwnmfQeAwgSYhebcbc7SjPfU1cdr2R3H9&X-Amz-Signature=6f1ce5744654f5a5d5e7c4554589f73912723ba17b7408fbde6d91a9a81dd0c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDBNKJD6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIBYoLvlU6m0zc%2F2pvsYdw62P0DlIXqxkifBi1Y1CDc1uAiA%2B1jDoI095XeNBn6mD%2FXHq%2Bl1M3%2Bi7JrHc0YUMD7NN7yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx15VAXMXLjx70J4jKtwDXwUZBE3gmABRI%2Fs%2BML6muWub0Zdl5oit2LISSGd%2F4KI2b1QPCcGahiwmpdVaUmMLaTGs7daPTgw2flqg8KnzUFlA77QHEVC2SK%2BShs%2BIhLe8wkxRWjuWILfK6AUm2i7d%2BIImF1TypftMRLcR%2Bp6jBbjb9mqAFNRxBcHe0ZcQnUcYa3dEm9XZMijSD%2BpeDMgfjBXysRoRJqIJGkcw7xfnVj59A48rJAI3kC2Wv52bzeEZreKJPKv%2Fdl9WhKdQhGTfLPDPCrgskMx%2B%2B6eNnU8GlEmD6kJZIYy6w3ewE9npINU9kxoN0VQnmknE5%2FvNsrke5q9UeQjRHUuJhD%2FpPh8E8jBOwak9Qux4Wn7vDmhFu16b8LKquvUUHaf5MkkvTQXu8qng%2FFYvdUEZyRkcJOjJXtgk6k9SlPTfj5GLoEwAg91sllP5lu264ygguPbd6we6sN8AO%2FDhi4KvYKvxrzk0wIhH%2BSv7z8d2tA7GjOMfIA8StbvUjrajlJcbd6V8HNlRQMVRTmT07D%2B088St6jWkJHhfB7uaQU3s0Am8NJJesfd1d5B5sqNRBW4FVTIxwQytED%2FD%2FqNc7wX%2FCjGlB6UOUBhud87mFcyDg5mNEiG2Vf%2B7D5uqjvoMymfI6Tww5%2B6axAY6pgFgCJ3jsFAPdx%2BFRr7GTzoeiuopAOAAwkrMQsfEGGnGGUqDasLE%2BEHYPGFKVa1frttgX%2B39kDe2Mn1u%2FfA16GTGPqRAAe11XkV1fC3TdJQUtvNz8F88DoegblWEAxL7TOx7KBE5GibfV9aQ%2BO%2FZ4DxlG%2BtxyM%2FTu1LNyhab2PgPwOWhdnZQ7QSZfl6hFEWKwnmfQeAwgSYhebcbc7SjPfU1cdr2R3H9&X-Amz-Signature=a6a9be8f5525e1609a7a365e4f53dd93e2183a2dc1c037c0025ad0291ecc4154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDBNKJD6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIBYoLvlU6m0zc%2F2pvsYdw62P0DlIXqxkifBi1Y1CDc1uAiA%2B1jDoI095XeNBn6mD%2FXHq%2Bl1M3%2Bi7JrHc0YUMD7NN7yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx15VAXMXLjx70J4jKtwDXwUZBE3gmABRI%2Fs%2BML6muWub0Zdl5oit2LISSGd%2F4KI2b1QPCcGahiwmpdVaUmMLaTGs7daPTgw2flqg8KnzUFlA77QHEVC2SK%2BShs%2BIhLe8wkxRWjuWILfK6AUm2i7d%2BIImF1TypftMRLcR%2Bp6jBbjb9mqAFNRxBcHe0ZcQnUcYa3dEm9XZMijSD%2BpeDMgfjBXysRoRJqIJGkcw7xfnVj59A48rJAI3kC2Wv52bzeEZreKJPKv%2Fdl9WhKdQhGTfLPDPCrgskMx%2B%2B6eNnU8GlEmD6kJZIYy6w3ewE9npINU9kxoN0VQnmknE5%2FvNsrke5q9UeQjRHUuJhD%2FpPh8E8jBOwak9Qux4Wn7vDmhFu16b8LKquvUUHaf5MkkvTQXu8qng%2FFYvdUEZyRkcJOjJXtgk6k9SlPTfj5GLoEwAg91sllP5lu264ygguPbd6we6sN8AO%2FDhi4KvYKvxrzk0wIhH%2BSv7z8d2tA7GjOMfIA8StbvUjrajlJcbd6V8HNlRQMVRTmT07D%2B088St6jWkJHhfB7uaQU3s0Am8NJJesfd1d5B5sqNRBW4FVTIxwQytED%2FD%2FqNc7wX%2FCjGlB6UOUBhud87mFcyDg5mNEiG2Vf%2B7D5uqjvoMymfI6Tww5%2B6axAY6pgFgCJ3jsFAPdx%2BFRr7GTzoeiuopAOAAwkrMQsfEGGnGGUqDasLE%2BEHYPGFKVa1frttgX%2B39kDe2Mn1u%2FfA16GTGPqRAAe11XkV1fC3TdJQUtvNz8F88DoegblWEAxL7TOx7KBE5GibfV9aQ%2BO%2FZ4DxlG%2BtxyM%2FTu1LNyhab2PgPwOWhdnZQ7QSZfl6hFEWKwnmfQeAwgSYhebcbc7SjPfU1cdr2R3H9&X-Amz-Signature=aef5ac91e65e733bf4eba02681b8faea69ad0181190f28ee7b2d660d0f711e91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDBNKJD6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIBYoLvlU6m0zc%2F2pvsYdw62P0DlIXqxkifBi1Y1CDc1uAiA%2B1jDoI095XeNBn6mD%2FXHq%2Bl1M3%2Bi7JrHc0YUMD7NN7yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx15VAXMXLjx70J4jKtwDXwUZBE3gmABRI%2Fs%2BML6muWub0Zdl5oit2LISSGd%2F4KI2b1QPCcGahiwmpdVaUmMLaTGs7daPTgw2flqg8KnzUFlA77QHEVC2SK%2BShs%2BIhLe8wkxRWjuWILfK6AUm2i7d%2BIImF1TypftMRLcR%2Bp6jBbjb9mqAFNRxBcHe0ZcQnUcYa3dEm9XZMijSD%2BpeDMgfjBXysRoRJqIJGkcw7xfnVj59A48rJAI3kC2Wv52bzeEZreKJPKv%2Fdl9WhKdQhGTfLPDPCrgskMx%2B%2B6eNnU8GlEmD6kJZIYy6w3ewE9npINU9kxoN0VQnmknE5%2FvNsrke5q9UeQjRHUuJhD%2FpPh8E8jBOwak9Qux4Wn7vDmhFu16b8LKquvUUHaf5MkkvTQXu8qng%2FFYvdUEZyRkcJOjJXtgk6k9SlPTfj5GLoEwAg91sllP5lu264ygguPbd6we6sN8AO%2FDhi4KvYKvxrzk0wIhH%2BSv7z8d2tA7GjOMfIA8StbvUjrajlJcbd6V8HNlRQMVRTmT07D%2B088St6jWkJHhfB7uaQU3s0Am8NJJesfd1d5B5sqNRBW4FVTIxwQytED%2FD%2FqNc7wX%2FCjGlB6UOUBhud87mFcyDg5mNEiG2Vf%2B7D5uqjvoMymfI6Tww5%2B6axAY6pgFgCJ3jsFAPdx%2BFRr7GTzoeiuopAOAAwkrMQsfEGGnGGUqDasLE%2BEHYPGFKVa1frttgX%2B39kDe2Mn1u%2FfA16GTGPqRAAe11XkV1fC3TdJQUtvNz8F88DoegblWEAxL7TOx7KBE5GibfV9aQ%2BO%2FZ4DxlG%2BtxyM%2FTu1LNyhab2PgPwOWhdnZQ7QSZfl6hFEWKwnmfQeAwgSYhebcbc7SjPfU1cdr2R3H9&X-Amz-Signature=b90b0b0fb74bc6d3142b7ed42c5aff4052bd75bbef28af4427740338ea4f087d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDBNKJD6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIBYoLvlU6m0zc%2F2pvsYdw62P0DlIXqxkifBi1Y1CDc1uAiA%2B1jDoI095XeNBn6mD%2FXHq%2Bl1M3%2Bi7JrHc0YUMD7NN7yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx15VAXMXLjx70J4jKtwDXwUZBE3gmABRI%2Fs%2BML6muWub0Zdl5oit2LISSGd%2F4KI2b1QPCcGahiwmpdVaUmMLaTGs7daPTgw2flqg8KnzUFlA77QHEVC2SK%2BShs%2BIhLe8wkxRWjuWILfK6AUm2i7d%2BIImF1TypftMRLcR%2Bp6jBbjb9mqAFNRxBcHe0ZcQnUcYa3dEm9XZMijSD%2BpeDMgfjBXysRoRJqIJGkcw7xfnVj59A48rJAI3kC2Wv52bzeEZreKJPKv%2Fdl9WhKdQhGTfLPDPCrgskMx%2B%2B6eNnU8GlEmD6kJZIYy6w3ewE9npINU9kxoN0VQnmknE5%2FvNsrke5q9UeQjRHUuJhD%2FpPh8E8jBOwak9Qux4Wn7vDmhFu16b8LKquvUUHaf5MkkvTQXu8qng%2FFYvdUEZyRkcJOjJXtgk6k9SlPTfj5GLoEwAg91sllP5lu264ygguPbd6we6sN8AO%2FDhi4KvYKvxrzk0wIhH%2BSv7z8d2tA7GjOMfIA8StbvUjrajlJcbd6V8HNlRQMVRTmT07D%2B088St6jWkJHhfB7uaQU3s0Am8NJJesfd1d5B5sqNRBW4FVTIxwQytED%2FD%2FqNc7wX%2FCjGlB6UOUBhud87mFcyDg5mNEiG2Vf%2B7D5uqjvoMymfI6Tww5%2B6axAY6pgFgCJ3jsFAPdx%2BFRr7GTzoeiuopAOAAwkrMQsfEGGnGGUqDasLE%2BEHYPGFKVa1frttgX%2B39kDe2Mn1u%2FfA16GTGPqRAAe11XkV1fC3TdJQUtvNz8F88DoegblWEAxL7TOx7KBE5GibfV9aQ%2BO%2FZ4DxlG%2BtxyM%2FTu1LNyhab2PgPwOWhdnZQ7QSZfl6hFEWKwnmfQeAwgSYhebcbc7SjPfU1cdr2R3H9&X-Amz-Signature=ce36062fd9b81b6a17d0f74635e951345870c27b4bbe2f45cdb75810c72c7eff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDBNKJD6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIBYoLvlU6m0zc%2F2pvsYdw62P0DlIXqxkifBi1Y1CDc1uAiA%2B1jDoI095XeNBn6mD%2FXHq%2Bl1M3%2Bi7JrHc0YUMD7NN7yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx15VAXMXLjx70J4jKtwDXwUZBE3gmABRI%2Fs%2BML6muWub0Zdl5oit2LISSGd%2F4KI2b1QPCcGahiwmpdVaUmMLaTGs7daPTgw2flqg8KnzUFlA77QHEVC2SK%2BShs%2BIhLe8wkxRWjuWILfK6AUm2i7d%2BIImF1TypftMRLcR%2Bp6jBbjb9mqAFNRxBcHe0ZcQnUcYa3dEm9XZMijSD%2BpeDMgfjBXysRoRJqIJGkcw7xfnVj59A48rJAI3kC2Wv52bzeEZreKJPKv%2Fdl9WhKdQhGTfLPDPCrgskMx%2B%2B6eNnU8GlEmD6kJZIYy6w3ewE9npINU9kxoN0VQnmknE5%2FvNsrke5q9UeQjRHUuJhD%2FpPh8E8jBOwak9Qux4Wn7vDmhFu16b8LKquvUUHaf5MkkvTQXu8qng%2FFYvdUEZyRkcJOjJXtgk6k9SlPTfj5GLoEwAg91sllP5lu264ygguPbd6we6sN8AO%2FDhi4KvYKvxrzk0wIhH%2BSv7z8d2tA7GjOMfIA8StbvUjrajlJcbd6V8HNlRQMVRTmT07D%2B088St6jWkJHhfB7uaQU3s0Am8NJJesfd1d5B5sqNRBW4FVTIxwQytED%2FD%2FqNc7wX%2FCjGlB6UOUBhud87mFcyDg5mNEiG2Vf%2B7D5uqjvoMymfI6Tww5%2B6axAY6pgFgCJ3jsFAPdx%2BFRr7GTzoeiuopAOAAwkrMQsfEGGnGGUqDasLE%2BEHYPGFKVa1frttgX%2B39kDe2Mn1u%2FfA16GTGPqRAAe11XkV1fC3TdJQUtvNz8F88DoegblWEAxL7TOx7KBE5GibfV9aQ%2BO%2FZ4DxlG%2BtxyM%2FTu1LNyhab2PgPwOWhdnZQ7QSZfl6hFEWKwnmfQeAwgSYhebcbc7SjPfU1cdr2R3H9&X-Amz-Signature=197b84fdf2cc2d3a742869073a6075818cbcbda89175f0d58221d0765607ef34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RMKDDN7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIHuOzkt2S9EZ0mXaqQRe1Aa9vTamKCk55BvHvRaeWs1KAiEAqVskcbPCO%2BSCv3ZvypCklPJurQkSIrdp5ZZu0zNCbuUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOilTXQTxMxy9G1WSircA%2F%2B9Jox8drwWC1Av%2FJN%2FYVZkHSSpABVw6Ku53vYN2cgQGRsMXnWJ0Q1%2Fb3iwuRXzHvERbuX%2BLmZ8CkbqUelKFBLp9iJTYoRtzTR7Wf1i6jwgn4WI5QXqOdLKlpNtReDq5dgRBeH7HOHHVwRC%2FIlqRiJ4kxEDzLAUckSAtsbgpc5iZZQH5b2S1%2B5Vk9633ApZPKVTHVwxNOz6NCdHpcF8wGPahv%2FFyJM83INu7yd1xNwADwj7hW5UrCys7vR3h9DCRsVTabUFChE4%2Fv13MzEe1OlppEAhe7TjlIUsTs71XwR7KAzmxl0R3UvMxFEmMdbkgs0HcTekzbHPNuTDg4Ms3RyIwxrjJ926gEMdjehjzrw5tvppMlIqHoXzZwqYkHIsAcYfXhYjII8940hSALuHCliLQTqw5FEaX8OJe9ynBzVZiCB5hoB%2BZVFoyJOC4wQ9loGvc6Y5efgTKdFOfvc0AVoVZj5IUzEVaLuLKBwtDSFwRZGTVHOBgvP%2FvqYqr2JdpvTOoSw5f0bm%2FreweaWShfaRebbtnD4CWNzCA%2BsiINdwx057L9%2BlrlcXyFTtbaQF3DVivpl6agU5QjisIZwOjYcpcpGuOn8o3EhraRPfvuKMbHRYpIard2X3KeiQMPnumsQGOqUBBqRtMplSw%2FiHcv8MCod0sq4gmy962ZxCcHlZLxA6o2uWgf53u3d6z%2BK15xa2axvgcX6EaEovxhGWJke98MMh31lY%2FqXY%2Fzv3Ogs2ZSviy3mMz8kl7qqtsmsYY3Aa%2F5Rr3kAFzqN4zIEhIeVmYx4ZFxHhOU8oEYcocZ6xZecJLE%2Fr%2BX3uLjQyhcxG7l1xGaZv9qUsEHsxZBiLO3cakdoHNLfyvzhq&X-Amz-Signature=579383a1b71aae55759b752b204a23f868b30604def3659006fe650bd724db62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDBNKJD6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIBYoLvlU6m0zc%2F2pvsYdw62P0DlIXqxkifBi1Y1CDc1uAiA%2B1jDoI095XeNBn6mD%2FXHq%2Bl1M3%2Bi7JrHc0YUMD7NN7yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx15VAXMXLjx70J4jKtwDXwUZBE3gmABRI%2Fs%2BML6muWub0Zdl5oit2LISSGd%2F4KI2b1QPCcGahiwmpdVaUmMLaTGs7daPTgw2flqg8KnzUFlA77QHEVC2SK%2BShs%2BIhLe8wkxRWjuWILfK6AUm2i7d%2BIImF1TypftMRLcR%2Bp6jBbjb9mqAFNRxBcHe0ZcQnUcYa3dEm9XZMijSD%2BpeDMgfjBXysRoRJqIJGkcw7xfnVj59A48rJAI3kC2Wv52bzeEZreKJPKv%2Fdl9WhKdQhGTfLPDPCrgskMx%2B%2B6eNnU8GlEmD6kJZIYy6w3ewE9npINU9kxoN0VQnmknE5%2FvNsrke5q9UeQjRHUuJhD%2FpPh8E8jBOwak9Qux4Wn7vDmhFu16b8LKquvUUHaf5MkkvTQXu8qng%2FFYvdUEZyRkcJOjJXtgk6k9SlPTfj5GLoEwAg91sllP5lu264ygguPbd6we6sN8AO%2FDhi4KvYKvxrzk0wIhH%2BSv7z8d2tA7GjOMfIA8StbvUjrajlJcbd6V8HNlRQMVRTmT07D%2B088St6jWkJHhfB7uaQU3s0Am8NJJesfd1d5B5sqNRBW4FVTIxwQytED%2FD%2FqNc7wX%2FCjGlB6UOUBhud87mFcyDg5mNEiG2Vf%2B7D5uqjvoMymfI6Tww5%2B6axAY6pgFgCJ3jsFAPdx%2BFRr7GTzoeiuopAOAAwkrMQsfEGGnGGUqDasLE%2BEHYPGFKVa1frttgX%2B39kDe2Mn1u%2FfA16GTGPqRAAe11XkV1fC3TdJQUtvNz8F88DoegblWEAxL7TOx7KBE5GibfV9aQ%2BO%2FZ4DxlG%2BtxyM%2FTu1LNyhab2PgPwOWhdnZQ7QSZfl6hFEWKwnmfQeAwgSYhebcbc7SjPfU1cdr2R3H9&X-Amz-Signature=f86e4a38462d94c7f273fa36356c03b51dcb1021c36112889ed9982bbb3dc1db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TREYDRRM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHC0WDGib%2BmGKlJQw98HzvCr3uj5sPuaZ2Uva4nfkv6QAiB5e0u2FHWotvSyqIBrItcBLBnJn9sY56OHJR1Nurnl4CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmEOYc6JOEbkS1O4DKtwDV%2Bbt4LovW15vg5LYG4WkH0VxmjnmKvh2g0Z7W%2F0s5rGZk2JxhQXqxpT1YftzNuE5ADHZhqzDOnk%2BAbbPFii8NcmEdBrNpxJh8KSFcoet7ofrtTt9FMDxVTlJp2ZtCBWZB4WzZohQoGh2Sk3FaqblPci9rrOdYInQe%2FilAIvFyArH8INAXF4j1dL3RAZGIcbUqDEhLzBEPzDmZKMmQGwFJ4cEE9ZnRy4CI%2FyiScHIxdogYwYFai07uAlw%2F7xP0V2DH7RjxlhozqlpKB6fDMQ9pETGz6POWwgTofiIUsSmOMN45aV09fVhMHyjKqW9b%2FaZUtx%2B%2BjR4gr1%2FENULvjfsGyuypO0bO%2Bw16bZdyzJkMwyzOxUIFTzll0nr0MrjqBjR%2Fg0lHeWMYV%2F0fz70BzHT9qeh3IjCOsu4pFzCWiJ7cNr1Gua6swxUeTXnl7EH95hNEaimQEzC5kxNJ0fAZRST2M9bjd2dDRdTXXwbC2queHQHC%2FOzLcfimogiUwEBUtNcUwoYtvagkogsya7TiChQ3wRJa0du2ZmuOP24BohbdlfVFiFhhtbKlk90MKYWv3HORj5VFcftpjjhVMfwYCuzf2mlqln0uyMXRJb6HQe2s4djwjvLGeP0b80Nu8owou6axAY6pgEgidD9xe75pKo2XzZDuHeE%2Fa2vllc%2BHTXM1FWuH7uin2DerfqwVUX%2BAYBM1noO87h4h1xTcxQ06GisSC21dDN6KAeRjk%2F6pmuRVREIWCxYYcdXPe8obrtLkX3VPKcO69o4UGqnlY3lL4LQ8znHRsWwiIDXX0oKvcDK5u%2BpkiW8PXdqAHSuA7QlQbrM2wLo%2BhgfZlGd5nySlWwVAcdRJiNA%2Bd8sDSj4&X-Amz-Signature=f646722d24e7d9b6329b59ff73e3e71ee83b67e994c63d9435f1b4af3ae6391a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TREYDRRM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHC0WDGib%2BmGKlJQw98HzvCr3uj5sPuaZ2Uva4nfkv6QAiB5e0u2FHWotvSyqIBrItcBLBnJn9sY56OHJR1Nurnl4CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmEOYc6JOEbkS1O4DKtwDV%2Bbt4LovW15vg5LYG4WkH0VxmjnmKvh2g0Z7W%2F0s5rGZk2JxhQXqxpT1YftzNuE5ADHZhqzDOnk%2BAbbPFii8NcmEdBrNpxJh8KSFcoet7ofrtTt9FMDxVTlJp2ZtCBWZB4WzZohQoGh2Sk3FaqblPci9rrOdYInQe%2FilAIvFyArH8INAXF4j1dL3RAZGIcbUqDEhLzBEPzDmZKMmQGwFJ4cEE9ZnRy4CI%2FyiScHIxdogYwYFai07uAlw%2F7xP0V2DH7RjxlhozqlpKB6fDMQ9pETGz6POWwgTofiIUsSmOMN45aV09fVhMHyjKqW9b%2FaZUtx%2B%2BjR4gr1%2FENULvjfsGyuypO0bO%2Bw16bZdyzJkMwyzOxUIFTzll0nr0MrjqBjR%2Fg0lHeWMYV%2F0fz70BzHT9qeh3IjCOsu4pFzCWiJ7cNr1Gua6swxUeTXnl7EH95hNEaimQEzC5kxNJ0fAZRST2M9bjd2dDRdTXXwbC2queHQHC%2FOzLcfimogiUwEBUtNcUwoYtvagkogsya7TiChQ3wRJa0du2ZmuOP24BohbdlfVFiFhhtbKlk90MKYWv3HORj5VFcftpjjhVMfwYCuzf2mlqln0uyMXRJb6HQe2s4djwjvLGeP0b80Nu8owou6axAY6pgEgidD9xe75pKo2XzZDuHeE%2Fa2vllc%2BHTXM1FWuH7uin2DerfqwVUX%2BAYBM1noO87h4h1xTcxQ06GisSC21dDN6KAeRjk%2F6pmuRVREIWCxYYcdXPe8obrtLkX3VPKcO69o4UGqnlY3lL4LQ8znHRsWwiIDXX0oKvcDK5u%2BpkiW8PXdqAHSuA7QlQbrM2wLo%2BhgfZlGd5nySlWwVAcdRJiNA%2Bd8sDSj4&X-Amz-Signature=0319e9a26a7edf5e6fb79d97a1eff65120645c8c9995eaad6e3d5c6e5868b1d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TREYDRRM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHC0WDGib%2BmGKlJQw98HzvCr3uj5sPuaZ2Uva4nfkv6QAiB5e0u2FHWotvSyqIBrItcBLBnJn9sY56OHJR1Nurnl4CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmEOYc6JOEbkS1O4DKtwDV%2Bbt4LovW15vg5LYG4WkH0VxmjnmKvh2g0Z7W%2F0s5rGZk2JxhQXqxpT1YftzNuE5ADHZhqzDOnk%2BAbbPFii8NcmEdBrNpxJh8KSFcoet7ofrtTt9FMDxVTlJp2ZtCBWZB4WzZohQoGh2Sk3FaqblPci9rrOdYInQe%2FilAIvFyArH8INAXF4j1dL3RAZGIcbUqDEhLzBEPzDmZKMmQGwFJ4cEE9ZnRy4CI%2FyiScHIxdogYwYFai07uAlw%2F7xP0V2DH7RjxlhozqlpKB6fDMQ9pETGz6POWwgTofiIUsSmOMN45aV09fVhMHyjKqW9b%2FaZUtx%2B%2BjR4gr1%2FENULvjfsGyuypO0bO%2Bw16bZdyzJkMwyzOxUIFTzll0nr0MrjqBjR%2Fg0lHeWMYV%2F0fz70BzHT9qeh3IjCOsu4pFzCWiJ7cNr1Gua6swxUeTXnl7EH95hNEaimQEzC5kxNJ0fAZRST2M9bjd2dDRdTXXwbC2queHQHC%2FOzLcfimogiUwEBUtNcUwoYtvagkogsya7TiChQ3wRJa0du2ZmuOP24BohbdlfVFiFhhtbKlk90MKYWv3HORj5VFcftpjjhVMfwYCuzf2mlqln0uyMXRJb6HQe2s4djwjvLGeP0b80Nu8owou6axAY6pgEgidD9xe75pKo2XzZDuHeE%2Fa2vllc%2BHTXM1FWuH7uin2DerfqwVUX%2BAYBM1noO87h4h1xTcxQ06GisSC21dDN6KAeRjk%2F6pmuRVREIWCxYYcdXPe8obrtLkX3VPKcO69o4UGqnlY3lL4LQ8znHRsWwiIDXX0oKvcDK5u%2BpkiW8PXdqAHSuA7QlQbrM2wLo%2BhgfZlGd5nySlWwVAcdRJiNA%2Bd8sDSj4&X-Amz-Signature=04f09759509df4fe9e4e9e9c2cca25c3650604a65b195592b06668c7b2613d3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TREYDRRM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHC0WDGib%2BmGKlJQw98HzvCr3uj5sPuaZ2Uva4nfkv6QAiB5e0u2FHWotvSyqIBrItcBLBnJn9sY56OHJR1Nurnl4CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmEOYc6JOEbkS1O4DKtwDV%2Bbt4LovW15vg5LYG4WkH0VxmjnmKvh2g0Z7W%2F0s5rGZk2JxhQXqxpT1YftzNuE5ADHZhqzDOnk%2BAbbPFii8NcmEdBrNpxJh8KSFcoet7ofrtTt9FMDxVTlJp2ZtCBWZB4WzZohQoGh2Sk3FaqblPci9rrOdYInQe%2FilAIvFyArH8INAXF4j1dL3RAZGIcbUqDEhLzBEPzDmZKMmQGwFJ4cEE9ZnRy4CI%2FyiScHIxdogYwYFai07uAlw%2F7xP0V2DH7RjxlhozqlpKB6fDMQ9pETGz6POWwgTofiIUsSmOMN45aV09fVhMHyjKqW9b%2FaZUtx%2B%2BjR4gr1%2FENULvjfsGyuypO0bO%2Bw16bZdyzJkMwyzOxUIFTzll0nr0MrjqBjR%2Fg0lHeWMYV%2F0fz70BzHT9qeh3IjCOsu4pFzCWiJ7cNr1Gua6swxUeTXnl7EH95hNEaimQEzC5kxNJ0fAZRST2M9bjd2dDRdTXXwbC2queHQHC%2FOzLcfimogiUwEBUtNcUwoYtvagkogsya7TiChQ3wRJa0du2ZmuOP24BohbdlfVFiFhhtbKlk90MKYWv3HORj5VFcftpjjhVMfwYCuzf2mlqln0uyMXRJb6HQe2s4djwjvLGeP0b80Nu8owou6axAY6pgEgidD9xe75pKo2XzZDuHeE%2Fa2vllc%2BHTXM1FWuH7uin2DerfqwVUX%2BAYBM1noO87h4h1xTcxQ06GisSC21dDN6KAeRjk%2F6pmuRVREIWCxYYcdXPe8obrtLkX3VPKcO69o4UGqnlY3lL4LQ8znHRsWwiIDXX0oKvcDK5u%2BpkiW8PXdqAHSuA7QlQbrM2wLo%2BhgfZlGd5nySlWwVAcdRJiNA%2Bd8sDSj4&X-Amz-Signature=230d89b207ddd80ae9517553f214903d86bc112797010ca17d3b7bc8b577a66b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TREYDRRM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHC0WDGib%2BmGKlJQw98HzvCr3uj5sPuaZ2Uva4nfkv6QAiB5e0u2FHWotvSyqIBrItcBLBnJn9sY56OHJR1Nurnl4CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmEOYc6JOEbkS1O4DKtwDV%2Bbt4LovW15vg5LYG4WkH0VxmjnmKvh2g0Z7W%2F0s5rGZk2JxhQXqxpT1YftzNuE5ADHZhqzDOnk%2BAbbPFii8NcmEdBrNpxJh8KSFcoet7ofrtTt9FMDxVTlJp2ZtCBWZB4WzZohQoGh2Sk3FaqblPci9rrOdYInQe%2FilAIvFyArH8INAXF4j1dL3RAZGIcbUqDEhLzBEPzDmZKMmQGwFJ4cEE9ZnRy4CI%2FyiScHIxdogYwYFai07uAlw%2F7xP0V2DH7RjxlhozqlpKB6fDMQ9pETGz6POWwgTofiIUsSmOMN45aV09fVhMHyjKqW9b%2FaZUtx%2B%2BjR4gr1%2FENULvjfsGyuypO0bO%2Bw16bZdyzJkMwyzOxUIFTzll0nr0MrjqBjR%2Fg0lHeWMYV%2F0fz70BzHT9qeh3IjCOsu4pFzCWiJ7cNr1Gua6swxUeTXnl7EH95hNEaimQEzC5kxNJ0fAZRST2M9bjd2dDRdTXXwbC2queHQHC%2FOzLcfimogiUwEBUtNcUwoYtvagkogsya7TiChQ3wRJa0du2ZmuOP24BohbdlfVFiFhhtbKlk90MKYWv3HORj5VFcftpjjhVMfwYCuzf2mlqln0uyMXRJb6HQe2s4djwjvLGeP0b80Nu8owou6axAY6pgEgidD9xe75pKo2XzZDuHeE%2Fa2vllc%2BHTXM1FWuH7uin2DerfqwVUX%2BAYBM1noO87h4h1xTcxQ06GisSC21dDN6KAeRjk%2F6pmuRVREIWCxYYcdXPe8obrtLkX3VPKcO69o4UGqnlY3lL4LQ8znHRsWwiIDXX0oKvcDK5u%2BpkiW8PXdqAHSuA7QlQbrM2wLo%2BhgfZlGd5nySlWwVAcdRJiNA%2Bd8sDSj4&X-Amz-Signature=92d2ce0fd5323d2e2cba2e6879ad0e845e2d6afd4a983f93ddf59869197d2863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TREYDRRM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHC0WDGib%2BmGKlJQw98HzvCr3uj5sPuaZ2Uva4nfkv6QAiB5e0u2FHWotvSyqIBrItcBLBnJn9sY56OHJR1Nurnl4CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmEOYc6JOEbkS1O4DKtwDV%2Bbt4LovW15vg5LYG4WkH0VxmjnmKvh2g0Z7W%2F0s5rGZk2JxhQXqxpT1YftzNuE5ADHZhqzDOnk%2BAbbPFii8NcmEdBrNpxJh8KSFcoet7ofrtTt9FMDxVTlJp2ZtCBWZB4WzZohQoGh2Sk3FaqblPci9rrOdYInQe%2FilAIvFyArH8INAXF4j1dL3RAZGIcbUqDEhLzBEPzDmZKMmQGwFJ4cEE9ZnRy4CI%2FyiScHIxdogYwYFai07uAlw%2F7xP0V2DH7RjxlhozqlpKB6fDMQ9pETGz6POWwgTofiIUsSmOMN45aV09fVhMHyjKqW9b%2FaZUtx%2B%2BjR4gr1%2FENULvjfsGyuypO0bO%2Bw16bZdyzJkMwyzOxUIFTzll0nr0MrjqBjR%2Fg0lHeWMYV%2F0fz70BzHT9qeh3IjCOsu4pFzCWiJ7cNr1Gua6swxUeTXnl7EH95hNEaimQEzC5kxNJ0fAZRST2M9bjd2dDRdTXXwbC2queHQHC%2FOzLcfimogiUwEBUtNcUwoYtvagkogsya7TiChQ3wRJa0du2ZmuOP24BohbdlfVFiFhhtbKlk90MKYWv3HORj5VFcftpjjhVMfwYCuzf2mlqln0uyMXRJb6HQe2s4djwjvLGeP0b80Nu8owou6axAY6pgEgidD9xe75pKo2XzZDuHeE%2Fa2vllc%2BHTXM1FWuH7uin2DerfqwVUX%2BAYBM1noO87h4h1xTcxQ06GisSC21dDN6KAeRjk%2F6pmuRVREIWCxYYcdXPe8obrtLkX3VPKcO69o4UGqnlY3lL4LQ8znHRsWwiIDXX0oKvcDK5u%2BpkiW8PXdqAHSuA7QlQbrM2wLo%2BhgfZlGd5nySlWwVAcdRJiNA%2Bd8sDSj4&X-Amz-Signature=dfee8ce297de3a67e22c39e51800115282f1b07cf6be2e3915001c9857a50054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TREYDRRM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHC0WDGib%2BmGKlJQw98HzvCr3uj5sPuaZ2Uva4nfkv6QAiB5e0u2FHWotvSyqIBrItcBLBnJn9sY56OHJR1Nurnl4CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmEOYc6JOEbkS1O4DKtwDV%2Bbt4LovW15vg5LYG4WkH0VxmjnmKvh2g0Z7W%2F0s5rGZk2JxhQXqxpT1YftzNuE5ADHZhqzDOnk%2BAbbPFii8NcmEdBrNpxJh8KSFcoet7ofrtTt9FMDxVTlJp2ZtCBWZB4WzZohQoGh2Sk3FaqblPci9rrOdYInQe%2FilAIvFyArH8INAXF4j1dL3RAZGIcbUqDEhLzBEPzDmZKMmQGwFJ4cEE9ZnRy4CI%2FyiScHIxdogYwYFai07uAlw%2F7xP0V2DH7RjxlhozqlpKB6fDMQ9pETGz6POWwgTofiIUsSmOMN45aV09fVhMHyjKqW9b%2FaZUtx%2B%2BjR4gr1%2FENULvjfsGyuypO0bO%2Bw16bZdyzJkMwyzOxUIFTzll0nr0MrjqBjR%2Fg0lHeWMYV%2F0fz70BzHT9qeh3IjCOsu4pFzCWiJ7cNr1Gua6swxUeTXnl7EH95hNEaimQEzC5kxNJ0fAZRST2M9bjd2dDRdTXXwbC2queHQHC%2FOzLcfimogiUwEBUtNcUwoYtvagkogsya7TiChQ3wRJa0du2ZmuOP24BohbdlfVFiFhhtbKlk90MKYWv3HORj5VFcftpjjhVMfwYCuzf2mlqln0uyMXRJb6HQe2s4djwjvLGeP0b80Nu8owou6axAY6pgEgidD9xe75pKo2XzZDuHeE%2Fa2vllc%2BHTXM1FWuH7uin2DerfqwVUX%2BAYBM1noO87h4h1xTcxQ06GisSC21dDN6KAeRjk%2F6pmuRVREIWCxYYcdXPe8obrtLkX3VPKcO69o4UGqnlY3lL4LQ8znHRsWwiIDXX0oKvcDK5u%2BpkiW8PXdqAHSuA7QlQbrM2wLo%2BhgfZlGd5nySlWwVAcdRJiNA%2Bd8sDSj4&X-Amz-Signature=8e938929f9b75d0d2e2ced91fd9c912f70456cef7468e6e5d91f046a81b3c968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
