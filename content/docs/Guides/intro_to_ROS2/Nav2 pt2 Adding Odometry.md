---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-08-03T21:37:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-08-03T21:37:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DW52UXC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2YAxPg72nuVGUghxCX7AngcbR1l6uVa1vnpzQ57UzGAiB%2BXBMGnP8pNxZ4Rw5B%2FMYRKPKHfkZ2HgaQbAIqXdfvPCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYt4AxS0aCnYOSp8HKtwD8s3Nu2%2FJCxwdZPXR6TMAO%2FQDgOOd7y2T5ZRXaBJrNx2nrsK3tjV6XOqR3hSIWP6PYIJaEhQq9iYoF1VGxF%2Fk5Rv6QIFl6BqD7NVTj7chY7ML%2B2iIbLlfTybLRipUT0tXiNsZdksg4IGaNpoPKCB3kTlHOn9DqMEfUWVpPGtuIKj4iiy8mIQvCVlwQb5sOyngBHFSnfRx6XqD7lHGKyuCDiFwYZj48sztrFZhrT0pJlPxJVM%2Bsfrr0CZBX7391p5kYW3Lp9ceIvM3Y5GoocVQNrRHcZ%2F6ooMV3aGrZQK2%2F5vTcodNPaQX4gOGfABtmfLZ%2BUSO8BSUT9E44LuTQaW6H81S16IqE6w%2FnSJYpidNmaXePJjAAc09bV%2FpTj3pA8RcGthXF123seCg2G3CCxSDu8E6lgIRqyP2vG0a%2FCOv0jVru2QZxu7BjVyp69n0w6qoSiBrTW1kUj3O9b%2FcM6MEDAimJefFH2MEXYe8DNsoO%2BZGF1cr4QNtqCCS%2Fkp9mSgQ5Xj7cDRj4OL5ThnA63wxwBg8vJCPwueWTqw%2BrfymzpppvGwT3SfthxIbsTZPqWfeQ2iR9A0z9WXwDPjFkzqI9CydXHXa4xzOsUVFZmyzHZrrHeaZwJll3lyr8Kkwk9HgxAY6pgGBA6%2B9oD6b2YF0283X60b3b18%2FD9F9uqkhWsGVobcZpOggIh0BayAiRDiohJtgNbvluRQTEts%2Bdug%2BV3AfQTB7CYL%2B3bcv1AHESwZAY7UR%2BZotzueZuISOYXZaCXvI8t%2FJL8enHepBtcQqyNekDdpOv0vXsinCGgm7fFnsuruqiCWbFkA9OfIqt2ZJNAG%2FltMCRKIO5EKSlyW%2FyTij4iTxkGlfRCkG&X-Amz-Signature=c1fdcda7997ada55ebdd00be48537c312a0a1c38c2767853ba39d295c52a6d37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DW52UXC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2YAxPg72nuVGUghxCX7AngcbR1l6uVa1vnpzQ57UzGAiB%2BXBMGnP8pNxZ4Rw5B%2FMYRKPKHfkZ2HgaQbAIqXdfvPCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYt4AxS0aCnYOSp8HKtwD8s3Nu2%2FJCxwdZPXR6TMAO%2FQDgOOd7y2T5ZRXaBJrNx2nrsK3tjV6XOqR3hSIWP6PYIJaEhQq9iYoF1VGxF%2Fk5Rv6QIFl6BqD7NVTj7chY7ML%2B2iIbLlfTybLRipUT0tXiNsZdksg4IGaNpoPKCB3kTlHOn9DqMEfUWVpPGtuIKj4iiy8mIQvCVlwQb5sOyngBHFSnfRx6XqD7lHGKyuCDiFwYZj48sztrFZhrT0pJlPxJVM%2Bsfrr0CZBX7391p5kYW3Lp9ceIvM3Y5GoocVQNrRHcZ%2F6ooMV3aGrZQK2%2F5vTcodNPaQX4gOGfABtmfLZ%2BUSO8BSUT9E44LuTQaW6H81S16IqE6w%2FnSJYpidNmaXePJjAAc09bV%2FpTj3pA8RcGthXF123seCg2G3CCxSDu8E6lgIRqyP2vG0a%2FCOv0jVru2QZxu7BjVyp69n0w6qoSiBrTW1kUj3O9b%2FcM6MEDAimJefFH2MEXYe8DNsoO%2BZGF1cr4QNtqCCS%2Fkp9mSgQ5Xj7cDRj4OL5ThnA63wxwBg8vJCPwueWTqw%2BrfymzpppvGwT3SfthxIbsTZPqWfeQ2iR9A0z9WXwDPjFkzqI9CydXHXa4xzOsUVFZmyzHZrrHeaZwJll3lyr8Kkwk9HgxAY6pgGBA6%2B9oD6b2YF0283X60b3b18%2FD9F9uqkhWsGVobcZpOggIh0BayAiRDiohJtgNbvluRQTEts%2Bdug%2BV3AfQTB7CYL%2B3bcv1AHESwZAY7UR%2BZotzueZuISOYXZaCXvI8t%2FJL8enHepBtcQqyNekDdpOv0vXsinCGgm7fFnsuruqiCWbFkA9OfIqt2ZJNAG%2FltMCRKIO5EKSlyW%2FyTij4iTxkGlfRCkG&X-Amz-Signature=06cc5d4746723868c41fa06ce55b1c42ad0914e71fb9f144043b54e7ab2061b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DW52UXC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2YAxPg72nuVGUghxCX7AngcbR1l6uVa1vnpzQ57UzGAiB%2BXBMGnP8pNxZ4Rw5B%2FMYRKPKHfkZ2HgaQbAIqXdfvPCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYt4AxS0aCnYOSp8HKtwD8s3Nu2%2FJCxwdZPXR6TMAO%2FQDgOOd7y2T5ZRXaBJrNx2nrsK3tjV6XOqR3hSIWP6PYIJaEhQq9iYoF1VGxF%2Fk5Rv6QIFl6BqD7NVTj7chY7ML%2B2iIbLlfTybLRipUT0tXiNsZdksg4IGaNpoPKCB3kTlHOn9DqMEfUWVpPGtuIKj4iiy8mIQvCVlwQb5sOyngBHFSnfRx6XqD7lHGKyuCDiFwYZj48sztrFZhrT0pJlPxJVM%2Bsfrr0CZBX7391p5kYW3Lp9ceIvM3Y5GoocVQNrRHcZ%2F6ooMV3aGrZQK2%2F5vTcodNPaQX4gOGfABtmfLZ%2BUSO8BSUT9E44LuTQaW6H81S16IqE6w%2FnSJYpidNmaXePJjAAc09bV%2FpTj3pA8RcGthXF123seCg2G3CCxSDu8E6lgIRqyP2vG0a%2FCOv0jVru2QZxu7BjVyp69n0w6qoSiBrTW1kUj3O9b%2FcM6MEDAimJefFH2MEXYe8DNsoO%2BZGF1cr4QNtqCCS%2Fkp9mSgQ5Xj7cDRj4OL5ThnA63wxwBg8vJCPwueWTqw%2BrfymzpppvGwT3SfthxIbsTZPqWfeQ2iR9A0z9WXwDPjFkzqI9CydXHXa4xzOsUVFZmyzHZrrHeaZwJll3lyr8Kkwk9HgxAY6pgGBA6%2B9oD6b2YF0283X60b3b18%2FD9F9uqkhWsGVobcZpOggIh0BayAiRDiohJtgNbvluRQTEts%2Bdug%2BV3AfQTB7CYL%2B3bcv1AHESwZAY7UR%2BZotzueZuISOYXZaCXvI8t%2FJL8enHepBtcQqyNekDdpOv0vXsinCGgm7fFnsuruqiCWbFkA9OfIqt2ZJNAG%2FltMCRKIO5EKSlyW%2FyTij4iTxkGlfRCkG&X-Amz-Signature=49ed2ecc0e82ae174577223bcd1a7766ce2aab458629e69a956951432f25c0c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10) # publisher obj
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.5 sec
		
		# gets called every 0.05 seconds
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DW52UXC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2YAxPg72nuVGUghxCX7AngcbR1l6uVa1vnpzQ57UzGAiB%2BXBMGnP8pNxZ4Rw5B%2FMYRKPKHfkZ2HgaQbAIqXdfvPCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYt4AxS0aCnYOSp8HKtwD8s3Nu2%2FJCxwdZPXR6TMAO%2FQDgOOd7y2T5ZRXaBJrNx2nrsK3tjV6XOqR3hSIWP6PYIJaEhQq9iYoF1VGxF%2Fk5Rv6QIFl6BqD7NVTj7chY7ML%2B2iIbLlfTybLRipUT0tXiNsZdksg4IGaNpoPKCB3kTlHOn9DqMEfUWVpPGtuIKj4iiy8mIQvCVlwQb5sOyngBHFSnfRx6XqD7lHGKyuCDiFwYZj48sztrFZhrT0pJlPxJVM%2Bsfrr0CZBX7391p5kYW3Lp9ceIvM3Y5GoocVQNrRHcZ%2F6ooMV3aGrZQK2%2F5vTcodNPaQX4gOGfABtmfLZ%2BUSO8BSUT9E44LuTQaW6H81S16IqE6w%2FnSJYpidNmaXePJjAAc09bV%2FpTj3pA8RcGthXF123seCg2G3CCxSDu8E6lgIRqyP2vG0a%2FCOv0jVru2QZxu7BjVyp69n0w6qoSiBrTW1kUj3O9b%2FcM6MEDAimJefFH2MEXYe8DNsoO%2BZGF1cr4QNtqCCS%2Fkp9mSgQ5Xj7cDRj4OL5ThnA63wxwBg8vJCPwueWTqw%2BrfymzpppvGwT3SfthxIbsTZPqWfeQ2iR9A0z9WXwDPjFkzqI9CydXHXa4xzOsUVFZmyzHZrrHeaZwJll3lyr8Kkwk9HgxAY6pgGBA6%2B9oD6b2YF0283X60b3b18%2FD9F9uqkhWsGVobcZpOggIh0BayAiRDiohJtgNbvluRQTEts%2Bdug%2BV3AfQTB7CYL%2B3bcv1AHESwZAY7UR%2BZotzueZuISOYXZaCXvI8t%2FJL8enHepBtcQqyNekDdpOv0vXsinCGgm7fFnsuruqiCWbFkA9OfIqt2ZJNAG%2FltMCRKIO5EKSlyW%2FyTij4iTxkGlfRCkG&X-Amz-Signature=ae5304f7dda681f121d26a7b3009247f141e79fb8f628cf0f84941f4bf1ed451&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

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
        self.timer = self.create_timer(0.05, self.timer_callback)
		
		# gets called every 0.05 seconds
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DW52UXC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2YAxPg72nuVGUghxCX7AngcbR1l6uVa1vnpzQ57UzGAiB%2BXBMGnP8pNxZ4Rw5B%2FMYRKPKHfkZ2HgaQbAIqXdfvPCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYt4AxS0aCnYOSp8HKtwD8s3Nu2%2FJCxwdZPXR6TMAO%2FQDgOOd7y2T5ZRXaBJrNx2nrsK3tjV6XOqR3hSIWP6PYIJaEhQq9iYoF1VGxF%2Fk5Rv6QIFl6BqD7NVTj7chY7ML%2B2iIbLlfTybLRipUT0tXiNsZdksg4IGaNpoPKCB3kTlHOn9DqMEfUWVpPGtuIKj4iiy8mIQvCVlwQb5sOyngBHFSnfRx6XqD7lHGKyuCDiFwYZj48sztrFZhrT0pJlPxJVM%2Bsfrr0CZBX7391p5kYW3Lp9ceIvM3Y5GoocVQNrRHcZ%2F6ooMV3aGrZQK2%2F5vTcodNPaQX4gOGfABtmfLZ%2BUSO8BSUT9E44LuTQaW6H81S16IqE6w%2FnSJYpidNmaXePJjAAc09bV%2FpTj3pA8RcGthXF123seCg2G3CCxSDu8E6lgIRqyP2vG0a%2FCOv0jVru2QZxu7BjVyp69n0w6qoSiBrTW1kUj3O9b%2FcM6MEDAimJefFH2MEXYe8DNsoO%2BZGF1cr4QNtqCCS%2Fkp9mSgQ5Xj7cDRj4OL5ThnA63wxwBg8vJCPwueWTqw%2BrfymzpppvGwT3SfthxIbsTZPqWfeQ2iR9A0z9WXwDPjFkzqI9CydXHXa4xzOsUVFZmyzHZrrHeaZwJll3lyr8Kkwk9HgxAY6pgGBA6%2B9oD6b2YF0283X60b3b18%2FD9F9uqkhWsGVobcZpOggIh0BayAiRDiohJtgNbvluRQTEts%2Bdug%2BV3AfQTB7CYL%2B3bcv1AHESwZAY7UR%2BZotzueZuISOYXZaCXvI8t%2FJL8enHepBtcQqyNekDdpOv0vXsinCGgm7fFnsuruqiCWbFkA9OfIqt2ZJNAG%2FltMCRKIO5EKSlyW%2FyTij4iTxkGlfRCkG&X-Amz-Signature=47288e34260c05a2b0b0ec5fd9e5cf892018169e545afe8f8dfe95c225a8c4be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

    # gets called every 0.05 seconds
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
      <summary>Final code:</summary>
      
  </details>

At this point plug in your robot to you laptop/computer

> lf on WSL here is a guide for [Connecting USB devices](https://learn.microsoft.com/en-us/windows/wsl/connect-usb)

{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DW52UXC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2YAxPg72nuVGUghxCX7AngcbR1l6uVa1vnpzQ57UzGAiB%2BXBMGnP8pNxZ4Rw5B%2FMYRKPKHfkZ2HgaQbAIqXdfvPCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYt4AxS0aCnYOSp8HKtwD8s3Nu2%2FJCxwdZPXR6TMAO%2FQDgOOd7y2T5ZRXaBJrNx2nrsK3tjV6XOqR3hSIWP6PYIJaEhQq9iYoF1VGxF%2Fk5Rv6QIFl6BqD7NVTj7chY7ML%2B2iIbLlfTybLRipUT0tXiNsZdksg4IGaNpoPKCB3kTlHOn9DqMEfUWVpPGtuIKj4iiy8mIQvCVlwQb5sOyngBHFSnfRx6XqD7lHGKyuCDiFwYZj48sztrFZhrT0pJlPxJVM%2Bsfrr0CZBX7391p5kYW3Lp9ceIvM3Y5GoocVQNrRHcZ%2F6ooMV3aGrZQK2%2F5vTcodNPaQX4gOGfABtmfLZ%2BUSO8BSUT9E44LuTQaW6H81S16IqE6w%2FnSJYpidNmaXePJjAAc09bV%2FpTj3pA8RcGthXF123seCg2G3CCxSDu8E6lgIRqyP2vG0a%2FCOv0jVru2QZxu7BjVyp69n0w6qoSiBrTW1kUj3O9b%2FcM6MEDAimJefFH2MEXYe8DNsoO%2BZGF1cr4QNtqCCS%2Fkp9mSgQ5Xj7cDRj4OL5ThnA63wxwBg8vJCPwueWTqw%2BrfymzpppvGwT3SfthxIbsTZPqWfeQ2iR9A0z9WXwDPjFkzqI9CydXHXa4xzOsUVFZmyzHZrrHeaZwJll3lyr8Kkwk9HgxAY6pgGBA6%2B9oD6b2YF0283X60b3b18%2FD9F9uqkhWsGVobcZpOggIh0BayAiRDiohJtgNbvluRQTEts%2Bdug%2BV3AfQTB7CYL%2B3bcv1AHESwZAY7UR%2BZotzueZuISOYXZaCXvI8t%2FJL8enHepBtcQqyNekDdpOv0vXsinCGgm7fFnsuruqiCWbFkA9OfIqt2ZJNAG%2FltMCRKIO5EKSlyW%2FyTij4iTxkGlfRCkG&X-Amz-Signature=dcfecf746748ba08bd3d0eefaff1e7e137cce69b51428fb3a026c1e976f06728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DW52UXC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2YAxPg72nuVGUghxCX7AngcbR1l6uVa1vnpzQ57UzGAiB%2BXBMGnP8pNxZ4Rw5B%2FMYRKPKHfkZ2HgaQbAIqXdfvPCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYt4AxS0aCnYOSp8HKtwD8s3Nu2%2FJCxwdZPXR6TMAO%2FQDgOOd7y2T5ZRXaBJrNx2nrsK3tjV6XOqR3hSIWP6PYIJaEhQq9iYoF1VGxF%2Fk5Rv6QIFl6BqD7NVTj7chY7ML%2B2iIbLlfTybLRipUT0tXiNsZdksg4IGaNpoPKCB3kTlHOn9DqMEfUWVpPGtuIKj4iiy8mIQvCVlwQb5sOyngBHFSnfRx6XqD7lHGKyuCDiFwYZj48sztrFZhrT0pJlPxJVM%2Bsfrr0CZBX7391p5kYW3Lp9ceIvM3Y5GoocVQNrRHcZ%2F6ooMV3aGrZQK2%2F5vTcodNPaQX4gOGfABtmfLZ%2BUSO8BSUT9E44LuTQaW6H81S16IqE6w%2FnSJYpidNmaXePJjAAc09bV%2FpTj3pA8RcGthXF123seCg2G3CCxSDu8E6lgIRqyP2vG0a%2FCOv0jVru2QZxu7BjVyp69n0w6qoSiBrTW1kUj3O9b%2FcM6MEDAimJefFH2MEXYe8DNsoO%2BZGF1cr4QNtqCCS%2Fkp9mSgQ5Xj7cDRj4OL5ThnA63wxwBg8vJCPwueWTqw%2BrfymzpppvGwT3SfthxIbsTZPqWfeQ2iR9A0z9WXwDPjFkzqI9CydXHXa4xzOsUVFZmyzHZrrHeaZwJll3lyr8Kkwk9HgxAY6pgGBA6%2B9oD6b2YF0283X60b3b18%2FD9F9uqkhWsGVobcZpOggIh0BayAiRDiohJtgNbvluRQTEts%2Bdug%2BV3AfQTB7CYL%2B3bcv1AHESwZAY7UR%2BZotzueZuISOYXZaCXvI8t%2FJL8enHepBtcQqyNekDdpOv0vXsinCGgm7fFnsuruqiCWbFkA9OfIqt2ZJNAG%2FltMCRKIO5EKSlyW%2FyTij4iTxkGlfRCkG&X-Amz-Signature=5a4e3754e0f968115d3690e36a41421dc9f8c38c1ee55cc26055f2aa333bacd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DW52UXC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2YAxPg72nuVGUghxCX7AngcbR1l6uVa1vnpzQ57UzGAiB%2BXBMGnP8pNxZ4Rw5B%2FMYRKPKHfkZ2HgaQbAIqXdfvPCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYt4AxS0aCnYOSp8HKtwD8s3Nu2%2FJCxwdZPXR6TMAO%2FQDgOOd7y2T5ZRXaBJrNx2nrsK3tjV6XOqR3hSIWP6PYIJaEhQq9iYoF1VGxF%2Fk5Rv6QIFl6BqD7NVTj7chY7ML%2B2iIbLlfTybLRipUT0tXiNsZdksg4IGaNpoPKCB3kTlHOn9DqMEfUWVpPGtuIKj4iiy8mIQvCVlwQb5sOyngBHFSnfRx6XqD7lHGKyuCDiFwYZj48sztrFZhrT0pJlPxJVM%2Bsfrr0CZBX7391p5kYW3Lp9ceIvM3Y5GoocVQNrRHcZ%2F6ooMV3aGrZQK2%2F5vTcodNPaQX4gOGfABtmfLZ%2BUSO8BSUT9E44LuTQaW6H81S16IqE6w%2FnSJYpidNmaXePJjAAc09bV%2FpTj3pA8RcGthXF123seCg2G3CCxSDu8E6lgIRqyP2vG0a%2FCOv0jVru2QZxu7BjVyp69n0w6qoSiBrTW1kUj3O9b%2FcM6MEDAimJefFH2MEXYe8DNsoO%2BZGF1cr4QNtqCCS%2Fkp9mSgQ5Xj7cDRj4OL5ThnA63wxwBg8vJCPwueWTqw%2BrfymzpppvGwT3SfthxIbsTZPqWfeQ2iR9A0z9WXwDPjFkzqI9CydXHXa4xzOsUVFZmyzHZrrHeaZwJll3lyr8Kkwk9HgxAY6pgGBA6%2B9oD6b2YF0283X60b3b18%2FD9F9uqkhWsGVobcZpOggIh0BayAiRDiohJtgNbvluRQTEts%2Bdug%2BV3AfQTB7CYL%2B3bcv1AHESwZAY7UR%2BZotzueZuISOYXZaCXvI8t%2FJL8enHepBtcQqyNekDdpOv0vXsinCGgm7fFnsuruqiCWbFkA9OfIqt2ZJNAG%2FltMCRKIO5EKSlyW%2FyTij4iTxkGlfRCkG&X-Amz-Signature=20301ff042492fcc52b28fd24ebedcbe656a27cafe5e92dde19afd3f2b2f2502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DW52UXC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2YAxPg72nuVGUghxCX7AngcbR1l6uVa1vnpzQ57UzGAiB%2BXBMGnP8pNxZ4Rw5B%2FMYRKPKHfkZ2HgaQbAIqXdfvPCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYt4AxS0aCnYOSp8HKtwD8s3Nu2%2FJCxwdZPXR6TMAO%2FQDgOOd7y2T5ZRXaBJrNx2nrsK3tjV6XOqR3hSIWP6PYIJaEhQq9iYoF1VGxF%2Fk5Rv6QIFl6BqD7NVTj7chY7ML%2B2iIbLlfTybLRipUT0tXiNsZdksg4IGaNpoPKCB3kTlHOn9DqMEfUWVpPGtuIKj4iiy8mIQvCVlwQb5sOyngBHFSnfRx6XqD7lHGKyuCDiFwYZj48sztrFZhrT0pJlPxJVM%2Bsfrr0CZBX7391p5kYW3Lp9ceIvM3Y5GoocVQNrRHcZ%2F6ooMV3aGrZQK2%2F5vTcodNPaQX4gOGfABtmfLZ%2BUSO8BSUT9E44LuTQaW6H81S16IqE6w%2FnSJYpidNmaXePJjAAc09bV%2FpTj3pA8RcGthXF123seCg2G3CCxSDu8E6lgIRqyP2vG0a%2FCOv0jVru2QZxu7BjVyp69n0w6qoSiBrTW1kUj3O9b%2FcM6MEDAimJefFH2MEXYe8DNsoO%2BZGF1cr4QNtqCCS%2Fkp9mSgQ5Xj7cDRj4OL5ThnA63wxwBg8vJCPwueWTqw%2BrfymzpppvGwT3SfthxIbsTZPqWfeQ2iR9A0z9WXwDPjFkzqI9CydXHXa4xzOsUVFZmyzHZrrHeaZwJll3lyr8Kkwk9HgxAY6pgGBA6%2B9oD6b2YF0283X60b3b18%2FD9F9uqkhWsGVobcZpOggIh0BayAiRDiohJtgNbvluRQTEts%2Bdug%2BV3AfQTB7CYL%2B3bcv1AHESwZAY7UR%2BZotzueZuISOYXZaCXvI8t%2FJL8enHepBtcQqyNekDdpOv0vXsinCGgm7fFnsuruqiCWbFkA9OfIqt2ZJNAG%2FltMCRKIO5EKSlyW%2FyTij4iTxkGlfRCkG&X-Amz-Signature=91f7504e377a63eed35e92c516b6c6256f0e7828cd5c86e1f7c306f3d953d185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DW52UXC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2YAxPg72nuVGUghxCX7AngcbR1l6uVa1vnpzQ57UzGAiB%2BXBMGnP8pNxZ4Rw5B%2FMYRKPKHfkZ2HgaQbAIqXdfvPCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYt4AxS0aCnYOSp8HKtwD8s3Nu2%2FJCxwdZPXR6TMAO%2FQDgOOd7y2T5ZRXaBJrNx2nrsK3tjV6XOqR3hSIWP6PYIJaEhQq9iYoF1VGxF%2Fk5Rv6QIFl6BqD7NVTj7chY7ML%2B2iIbLlfTybLRipUT0tXiNsZdksg4IGaNpoPKCB3kTlHOn9DqMEfUWVpPGtuIKj4iiy8mIQvCVlwQb5sOyngBHFSnfRx6XqD7lHGKyuCDiFwYZj48sztrFZhrT0pJlPxJVM%2Bsfrr0CZBX7391p5kYW3Lp9ceIvM3Y5GoocVQNrRHcZ%2F6ooMV3aGrZQK2%2F5vTcodNPaQX4gOGfABtmfLZ%2BUSO8BSUT9E44LuTQaW6H81S16IqE6w%2FnSJYpidNmaXePJjAAc09bV%2FpTj3pA8RcGthXF123seCg2G3CCxSDu8E6lgIRqyP2vG0a%2FCOv0jVru2QZxu7BjVyp69n0w6qoSiBrTW1kUj3O9b%2FcM6MEDAimJefFH2MEXYe8DNsoO%2BZGF1cr4QNtqCCS%2Fkp9mSgQ5Xj7cDRj4OL5ThnA63wxwBg8vJCPwueWTqw%2BrfymzpppvGwT3SfthxIbsTZPqWfeQ2iR9A0z9WXwDPjFkzqI9CydXHXa4xzOsUVFZmyzHZrrHeaZwJll3lyr8Kkwk9HgxAY6pgGBA6%2B9oD6b2YF0283X60b3b18%2FD9F9uqkhWsGVobcZpOggIh0BayAiRDiohJtgNbvluRQTEts%2Bdug%2BV3AfQTB7CYL%2B3bcv1AHESwZAY7UR%2BZotzueZuISOYXZaCXvI8t%2FJL8enHepBtcQqyNekDdpOv0vXsinCGgm7fFnsuruqiCWbFkA9OfIqt2ZJNAG%2FltMCRKIO5EKSlyW%2FyTij4iTxkGlfRCkG&X-Amz-Signature=df31ccd6949a3d2b3f02d124813b7f22ba702faa6eec6b6e56d466c0b466a6cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDZK6L5T%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9j5dihzOJSP89R7zb7ys9fjwUnmPfOvbOTMYgB8%2BGGAIhALAhj2HyCSEoeEB%2Bv1B4vIj7QDnN3%2BMpjMfpl5zsyv83KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIHdVQ%2FUJaK%2FqfYWAq3ANJNEK84uvPC%2BMMicV%2Bb1aK3r7W6oHiFCqVx5pg2n805F8%2FsCYJK0NIsY428HGaUOiwAzmS5sacd4xhTBbExEMvIyQknyuhWTl34ei6VHaE2c8i78Ldj5sznbgOiRyWOuGD3bVSJtiUO0uWQfcZaPcHFbRJtx3Exp0Ce5uRTLrdJrGMhDVk%2B2O7%2FwQjpKxhIirf%2F0WnIMrWXsTlRF2QOcAoNjNLh42jhkUE4b1F7bTxctAmM88gftf1tDdpjKhxh8dHPWmXxxRhy9YL%2BgYkC1fwaRtNCiC%2BXDg9FzvyJ6Hz%2FbyI41LY42UaQCMtdTrQnivLcNouupG0IlGx6AzgppXFXeJ%2FQvS85Y7uRTx24oiNac66%2FdqaPPumeuYolVOzWdPpxK75XWUfp2qYpXYNDq1n24jiByb5Ka3W3BevmjiuTivaUqxcVxxINxBVe8acZmuAgoMX%2BegWS9QF9OXtn52pW3J1D6jvnnO6M%2FmOeLHT2KdluVK0c6IIErsgps8QQAyhm3qjl1yRR9j6fsaQY%2F4kDcHLGIixT7PMltaEC1lPraQ6Wst%2FbM%2F7DwYNPkf%2FRBAtu8V%2FTR405zdU10wG9zopwIhttWcd4V8kmMUqgJeSCItWXhsBm99Bk1AueDDu0eDEBjqkAebaesBeQj3Sk7ZrkygQLwltH1%2ByMIZHVpmDnbFQHdDFIOEUT3Fy0pK3EIFgWeevGWJvuGGf3qyUaKZYHEfzadHyq0uDoV2byoPjnmmJDRk4gYTcHtlMep9J2wt3%2BUQD8dFEwoFUbqWCEjRPrPFKfi%2B8zaYcq6rxIxTVRpEAgGSBaAIvf%2FwjI69tpR9B%2BYGc48EASOvA50EO%2BzxDWxV0bGnjJD4t&X-Amz-Signature=4ba8acfe62c585a6481d10fc118c271d6b206242ef1c457abf28ab9e41ce1f90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
  </details>

But for those who just want the equations/functions I wrote a `calculate_position()` function that converts wheel angles to x,y

`calculate_position()` just takes in:

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
def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
   ...

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


```

```python
 def timer_callback(self):
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here
        current_time = self.get_clock().now().to_msg()
        
        # ============ updating URDF wheel joints ====================
				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calculate_position(new_right_wheel_th, self.right_wheel_th, new_left_wheel_th, self.left_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th
        
        self.get_logger().info(f'x: {self.x} y: {self.y}')
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

now in `timer_callback()` lets broadcast the `odom => base_link` tf frame

first create a tf broadcaster object

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

Then create a message and put `self.x` and `self.y` inside

```python
    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()

				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calculate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.right_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th
        
        self.get_logger().info(f'x: {self.x} y: {self.y}')
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th

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

```

## Running code

```bash
ros2 launch mbot_pkg display.launch.py
```

**Result:**

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRCYY4GP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDae7vHOIHkNhuOoEUgEYm83FcR1Q2999JmNMzdIzFEDAIhAJirhswyq6cVXqnXnAKLZCWSjyBfgL9b6G1l975BMmiaKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzufCb1ycy3bY9oDj0q3AOWzmVaU15S0%2FCELf%2F6Jkc1TgR3ZJjMVKitcGikTKdJQtFjwXB9jIRxRnqR%2F0ckO5eRWqYWA1veGbWR1Czmn5zk73P3qLmvTmKJNf9slf%2B%2FF0lHbnMDQQSc7WHS5zH7H3eISpCIy96Xp7MHkRm4gi1otOBIIcIvtbpkE7ZbCiBirqGrg9MqjU2lsaH2TtaMK24bUBF%2B%2BmJA%2Bpi1j0tejUClIkuFWyUk9aSt3n1SxVyy3gFGnx7Gti1trOKEZIiBQSpA3FzJPKYwIj4FMYqNYMWaen9ayjvNH2Qm4kfI5UnX%2FeZ6Dt5CoQubQEIeJB9PPeG%2BD%2FveXpWEGricVHyQ1Gg102vBrdkeItQ%2BQk06WYebjthp%2BAIT4V3i4XRz810TRhLtYZD%2BZ7M7TZ8kDrIGzkObBtBZmDvpUf9trfXDGVhr4v2ZYn%2FGSYpVqsmzDnx1ZR6l9kOPnb9gOP4gAlqbbL1J6mAvpR6MWiiukLtHTG3Bey1YzIBqLkUX8b6UmZCSsYurTovejgY2DusTQOc8Gvt6O%2Fm799nagr%2FU01JhJEMiN303gR6g4dr1jvRTTpXQ9dELPJGkBKGv2k6By0rRsUAlAVnB%2FWXfqtTqQ6dcpPIahjwcVK2P2crN7dVneTC%2F0eDEBjqkAUsTBdiIb4dxo7zfpXAyf87AxEDYksqFWTxG%2BSzmy4Lz07AqJ14YVE0AzLDb2oWabqLr%2Fl7R5jy5NGmzxhzwlUzmB2TPBwUJNYJO4vLj%2FuNS27pYnWJXJ%2BxoZZgoLntVoMtSDe489v%2BBkDJ9Ca16ZHjpEIHRc0AZOWv9lnpeLPfL4AdT2OvBpqkhe1MOA1BJWdALmAyyfqasgrfcSA7bfdSiwP6y&X-Amz-Signature=493ac6683d15a694f09ad674cb1785704d8c3c648bc2c5e9b753e7e1d3f3283a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRCYY4GP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDae7vHOIHkNhuOoEUgEYm83FcR1Q2999JmNMzdIzFEDAIhAJirhswyq6cVXqnXnAKLZCWSjyBfgL9b6G1l975BMmiaKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzufCb1ycy3bY9oDj0q3AOWzmVaU15S0%2FCELf%2F6Jkc1TgR3ZJjMVKitcGikTKdJQtFjwXB9jIRxRnqR%2F0ckO5eRWqYWA1veGbWR1Czmn5zk73P3qLmvTmKJNf9slf%2B%2FF0lHbnMDQQSc7WHS5zH7H3eISpCIy96Xp7MHkRm4gi1otOBIIcIvtbpkE7ZbCiBirqGrg9MqjU2lsaH2TtaMK24bUBF%2B%2BmJA%2Bpi1j0tejUClIkuFWyUk9aSt3n1SxVyy3gFGnx7Gti1trOKEZIiBQSpA3FzJPKYwIj4FMYqNYMWaen9ayjvNH2Qm4kfI5UnX%2FeZ6Dt5CoQubQEIeJB9PPeG%2BD%2FveXpWEGricVHyQ1Gg102vBrdkeItQ%2BQk06WYebjthp%2BAIT4V3i4XRz810TRhLtYZD%2BZ7M7TZ8kDrIGzkObBtBZmDvpUf9trfXDGVhr4v2ZYn%2FGSYpVqsmzDnx1ZR6l9kOPnb9gOP4gAlqbbL1J6mAvpR6MWiiukLtHTG3Bey1YzIBqLkUX8b6UmZCSsYurTovejgY2DusTQOc8Gvt6O%2Fm799nagr%2FU01JhJEMiN303gR6g4dr1jvRTTpXQ9dELPJGkBKGv2k6By0rRsUAlAVnB%2FWXfqtTqQ6dcpPIahjwcVK2P2crN7dVneTC%2F0eDEBjqkAUsTBdiIb4dxo7zfpXAyf87AxEDYksqFWTxG%2BSzmy4Lz07AqJ14YVE0AzLDb2oWabqLr%2Fl7R5jy5NGmzxhzwlUzmB2TPBwUJNYJO4vLj%2FuNS27pYnWJXJ%2BxoZZgoLntVoMtSDe489v%2BBkDJ9Ca16ZHjpEIHRc0AZOWv9lnpeLPfL4AdT2OvBpqkhe1MOA1BJWdALmAyyfqasgrfcSA7bfdSiwP6y&X-Amz-Signature=e60968825c1bc6439fb3192444080f4bd49e74188e983d1594e016b579a3da0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRCYY4GP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDae7vHOIHkNhuOoEUgEYm83FcR1Q2999JmNMzdIzFEDAIhAJirhswyq6cVXqnXnAKLZCWSjyBfgL9b6G1l975BMmiaKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzufCb1ycy3bY9oDj0q3AOWzmVaU15S0%2FCELf%2F6Jkc1TgR3ZJjMVKitcGikTKdJQtFjwXB9jIRxRnqR%2F0ckO5eRWqYWA1veGbWR1Czmn5zk73P3qLmvTmKJNf9slf%2B%2FF0lHbnMDQQSc7WHS5zH7H3eISpCIy96Xp7MHkRm4gi1otOBIIcIvtbpkE7ZbCiBirqGrg9MqjU2lsaH2TtaMK24bUBF%2B%2BmJA%2Bpi1j0tejUClIkuFWyUk9aSt3n1SxVyy3gFGnx7Gti1trOKEZIiBQSpA3FzJPKYwIj4FMYqNYMWaen9ayjvNH2Qm4kfI5UnX%2FeZ6Dt5CoQubQEIeJB9PPeG%2BD%2FveXpWEGricVHyQ1Gg102vBrdkeItQ%2BQk06WYebjthp%2BAIT4V3i4XRz810TRhLtYZD%2BZ7M7TZ8kDrIGzkObBtBZmDvpUf9trfXDGVhr4v2ZYn%2FGSYpVqsmzDnx1ZR6l9kOPnb9gOP4gAlqbbL1J6mAvpR6MWiiukLtHTG3Bey1YzIBqLkUX8b6UmZCSsYurTovejgY2DusTQOc8Gvt6O%2Fm799nagr%2FU01JhJEMiN303gR6g4dr1jvRTTpXQ9dELPJGkBKGv2k6By0rRsUAlAVnB%2FWXfqtTqQ6dcpPIahjwcVK2P2crN7dVneTC%2F0eDEBjqkAUsTBdiIb4dxo7zfpXAyf87AxEDYksqFWTxG%2BSzmy4Lz07AqJ14YVE0AzLDb2oWabqLr%2Fl7R5jy5NGmzxhzwlUzmB2TPBwUJNYJO4vLj%2FuNS27pYnWJXJ%2BxoZZgoLntVoMtSDe489v%2BBkDJ9Ca16ZHjpEIHRc0AZOWv9lnpeLPfL4AdT2OvBpqkhe1MOA1BJWdALmAyyfqasgrfcSA7bfdSiwP6y&X-Amz-Signature=ede1d53a10d881c5f06d15085a85af38487d812805677168adc19e5fe385e9fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10)
    

    def timer_callback(self):
				...

    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'{msg}')
```

Now we just need some way to send drive commands to `/cmd_vel`

This is where we use **`telop_twist_keyboard`**

{{% alert icon=”👾” context="success" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRCYY4GP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDae7vHOIHkNhuOoEUgEYm83FcR1Q2999JmNMzdIzFEDAIhAJirhswyq6cVXqnXnAKLZCWSjyBfgL9b6G1l975BMmiaKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzufCb1ycy3bY9oDj0q3AOWzmVaU15S0%2FCELf%2F6Jkc1TgR3ZJjMVKitcGikTKdJQtFjwXB9jIRxRnqR%2F0ckO5eRWqYWA1veGbWR1Czmn5zk73P3qLmvTmKJNf9slf%2B%2FF0lHbnMDQQSc7WHS5zH7H3eISpCIy96Xp7MHkRm4gi1otOBIIcIvtbpkE7ZbCiBirqGrg9MqjU2lsaH2TtaMK24bUBF%2B%2BmJA%2Bpi1j0tejUClIkuFWyUk9aSt3n1SxVyy3gFGnx7Gti1trOKEZIiBQSpA3FzJPKYwIj4FMYqNYMWaen9ayjvNH2Qm4kfI5UnX%2FeZ6Dt5CoQubQEIeJB9PPeG%2BD%2FveXpWEGricVHyQ1Gg102vBrdkeItQ%2BQk06WYebjthp%2BAIT4V3i4XRz810TRhLtYZD%2BZ7M7TZ8kDrIGzkObBtBZmDvpUf9trfXDGVhr4v2ZYn%2FGSYpVqsmzDnx1ZR6l9kOPnb9gOP4gAlqbbL1J6mAvpR6MWiiukLtHTG3Bey1YzIBqLkUX8b6UmZCSsYurTovejgY2DusTQOc8Gvt6O%2Fm799nagr%2FU01JhJEMiN303gR6g4dr1jvRTTpXQ9dELPJGkBKGv2k6By0rRsUAlAVnB%2FWXfqtTqQ6dcpPIahjwcVK2P2crN7dVneTC%2F0eDEBjqkAUsTBdiIb4dxo7zfpXAyf87AxEDYksqFWTxG%2BSzmy4Lz07AqJ14YVE0AzLDb2oWabqLr%2Fl7R5jy5NGmzxhzwlUzmB2TPBwUJNYJO4vLj%2FuNS27pYnWJXJ%2BxoZZgoLntVoMtSDe489v%2BBkDJ9Ca16ZHjpEIHRc0AZOWv9lnpeLPfL4AdT2OvBpqkhe1MOA1BJWdALmAyyfqasgrfcSA7bfdSiwP6y&X-Amz-Signature=e7ef471f7cfe30a1a548b36c848420cc8453a68d012fd4a00a89826e2638d9ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRCYY4GP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDae7vHOIHkNhuOoEUgEYm83FcR1Q2999JmNMzdIzFEDAIhAJirhswyq6cVXqnXnAKLZCWSjyBfgL9b6G1l975BMmiaKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzufCb1ycy3bY9oDj0q3AOWzmVaU15S0%2FCELf%2F6Jkc1TgR3ZJjMVKitcGikTKdJQtFjwXB9jIRxRnqR%2F0ckO5eRWqYWA1veGbWR1Czmn5zk73P3qLmvTmKJNf9slf%2B%2FF0lHbnMDQQSc7WHS5zH7H3eISpCIy96Xp7MHkRm4gi1otOBIIcIvtbpkE7ZbCiBirqGrg9MqjU2lsaH2TtaMK24bUBF%2B%2BmJA%2Bpi1j0tejUClIkuFWyUk9aSt3n1SxVyy3gFGnx7Gti1trOKEZIiBQSpA3FzJPKYwIj4FMYqNYMWaen9ayjvNH2Qm4kfI5UnX%2FeZ6Dt5CoQubQEIeJB9PPeG%2BD%2FveXpWEGricVHyQ1Gg102vBrdkeItQ%2BQk06WYebjthp%2BAIT4V3i4XRz810TRhLtYZD%2BZ7M7TZ8kDrIGzkObBtBZmDvpUf9trfXDGVhr4v2ZYn%2FGSYpVqsmzDnx1ZR6l9kOPnb9gOP4gAlqbbL1J6mAvpR6MWiiukLtHTG3Bey1YzIBqLkUX8b6UmZCSsYurTovejgY2DusTQOc8Gvt6O%2Fm799nagr%2FU01JhJEMiN303gR6g4dr1jvRTTpXQ9dELPJGkBKGv2k6By0rRsUAlAVnB%2FWXfqtTqQ6dcpPIahjwcVK2P2crN7dVneTC%2F0eDEBjqkAUsTBdiIb4dxo7zfpXAyf87AxEDYksqFWTxG%2BSzmy4Lz07AqJ14YVE0AzLDb2oWabqLr%2Fl7R5jy5NGmzxhzwlUzmB2TPBwUJNYJO4vLj%2FuNS27pYnWJXJ%2BxoZZgoLntVoMtSDe489v%2BBkDJ9Ca16ZHjpEIHRc0AZOWv9lnpeLPfL4AdT2OvBpqkhe1MOA1BJWdALmAyyfqasgrfcSA7bfdSiwP6y&X-Amz-Signature=91c28f7812b574ec0012c5c630c5e28cb3bfea3cc4026c12c3c6073d9a81e2c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRCYY4GP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDae7vHOIHkNhuOoEUgEYm83FcR1Q2999JmNMzdIzFEDAIhAJirhswyq6cVXqnXnAKLZCWSjyBfgL9b6G1l975BMmiaKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzufCb1ycy3bY9oDj0q3AOWzmVaU15S0%2FCELf%2F6Jkc1TgR3ZJjMVKitcGikTKdJQtFjwXB9jIRxRnqR%2F0ckO5eRWqYWA1veGbWR1Czmn5zk73P3qLmvTmKJNf9slf%2B%2FF0lHbnMDQQSc7WHS5zH7H3eISpCIy96Xp7MHkRm4gi1otOBIIcIvtbpkE7ZbCiBirqGrg9MqjU2lsaH2TtaMK24bUBF%2B%2BmJA%2Bpi1j0tejUClIkuFWyUk9aSt3n1SxVyy3gFGnx7Gti1trOKEZIiBQSpA3FzJPKYwIj4FMYqNYMWaen9ayjvNH2Qm4kfI5UnX%2FeZ6Dt5CoQubQEIeJB9PPeG%2BD%2FveXpWEGricVHyQ1Gg102vBrdkeItQ%2BQk06WYebjthp%2BAIT4V3i4XRz810TRhLtYZD%2BZ7M7TZ8kDrIGzkObBtBZmDvpUf9trfXDGVhr4v2ZYn%2FGSYpVqsmzDnx1ZR6l9kOPnb9gOP4gAlqbbL1J6mAvpR6MWiiukLtHTG3Bey1YzIBqLkUX8b6UmZCSsYurTovejgY2DusTQOc8Gvt6O%2Fm799nagr%2FU01JhJEMiN303gR6g4dr1jvRTTpXQ9dELPJGkBKGv2k6By0rRsUAlAVnB%2FWXfqtTqQ6dcpPIahjwcVK2P2crN7dVneTC%2F0eDEBjqkAUsTBdiIb4dxo7zfpXAyf87AxEDYksqFWTxG%2BSzmy4Lz07AqJ14YVE0AzLDb2oWabqLr%2Fl7R5jy5NGmzxhzwlUzmB2TPBwUJNYJO4vLj%2FuNS27pYnWJXJ%2BxoZZgoLntVoMtSDe489v%2BBkDJ9Ca16ZHjpEIHRc0AZOWv9lnpeLPfL4AdT2OvBpqkhe1MOA1BJWdALmAyyfqasgrfcSA7bfdSiwP6y&X-Amz-Signature=a6c0262baee7b35efb5762201f6e76eebcb5f8622f8b51749ca96f086f38e3a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRCYY4GP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDae7vHOIHkNhuOoEUgEYm83FcR1Q2999JmNMzdIzFEDAIhAJirhswyq6cVXqnXnAKLZCWSjyBfgL9b6G1l975BMmiaKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzufCb1ycy3bY9oDj0q3AOWzmVaU15S0%2FCELf%2F6Jkc1TgR3ZJjMVKitcGikTKdJQtFjwXB9jIRxRnqR%2F0ckO5eRWqYWA1veGbWR1Czmn5zk73P3qLmvTmKJNf9slf%2B%2FF0lHbnMDQQSc7WHS5zH7H3eISpCIy96Xp7MHkRm4gi1otOBIIcIvtbpkE7ZbCiBirqGrg9MqjU2lsaH2TtaMK24bUBF%2B%2BmJA%2Bpi1j0tejUClIkuFWyUk9aSt3n1SxVyy3gFGnx7Gti1trOKEZIiBQSpA3FzJPKYwIj4FMYqNYMWaen9ayjvNH2Qm4kfI5UnX%2FeZ6Dt5CoQubQEIeJB9PPeG%2BD%2FveXpWEGricVHyQ1Gg102vBrdkeItQ%2BQk06WYebjthp%2BAIT4V3i4XRz810TRhLtYZD%2BZ7M7TZ8kDrIGzkObBtBZmDvpUf9trfXDGVhr4v2ZYn%2FGSYpVqsmzDnx1ZR6l9kOPnb9gOP4gAlqbbL1J6mAvpR6MWiiukLtHTG3Bey1YzIBqLkUX8b6UmZCSsYurTovejgY2DusTQOc8Gvt6O%2Fm799nagr%2FU01JhJEMiN303gR6g4dr1jvRTTpXQ9dELPJGkBKGv2k6By0rRsUAlAVnB%2FWXfqtTqQ6dcpPIahjwcVK2P2crN7dVneTC%2F0eDEBjqkAUsTBdiIb4dxo7zfpXAyf87AxEDYksqFWTxG%2BSzmy4Lz07AqJ14YVE0AzLDb2oWabqLr%2Fl7R5jy5NGmzxhzwlUzmB2TPBwUJNYJO4vLj%2FuNS27pYnWJXJ%2BxoZZgoLntVoMtSDe489v%2BBkDJ9Ca16ZHjpEIHRc0AZOWv9lnpeLPfL4AdT2OvBpqkhe1MOA1BJWdALmAyyfqasgrfcSA7bfdSiwP6y&X-Amz-Signature=d4d721981daf1a13b2ea4af1f744e0c48c8b176e81e07c9248728d8dec5df89f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRCYY4GP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDae7vHOIHkNhuOoEUgEYm83FcR1Q2999JmNMzdIzFEDAIhAJirhswyq6cVXqnXnAKLZCWSjyBfgL9b6G1l975BMmiaKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzufCb1ycy3bY9oDj0q3AOWzmVaU15S0%2FCELf%2F6Jkc1TgR3ZJjMVKitcGikTKdJQtFjwXB9jIRxRnqR%2F0ckO5eRWqYWA1veGbWR1Czmn5zk73P3qLmvTmKJNf9slf%2B%2FF0lHbnMDQQSc7WHS5zH7H3eISpCIy96Xp7MHkRm4gi1otOBIIcIvtbpkE7ZbCiBirqGrg9MqjU2lsaH2TtaMK24bUBF%2B%2BmJA%2Bpi1j0tejUClIkuFWyUk9aSt3n1SxVyy3gFGnx7Gti1trOKEZIiBQSpA3FzJPKYwIj4FMYqNYMWaen9ayjvNH2Qm4kfI5UnX%2FeZ6Dt5CoQubQEIeJB9PPeG%2BD%2FveXpWEGricVHyQ1Gg102vBrdkeItQ%2BQk06WYebjthp%2BAIT4V3i4XRz810TRhLtYZD%2BZ7M7TZ8kDrIGzkObBtBZmDvpUf9trfXDGVhr4v2ZYn%2FGSYpVqsmzDnx1ZR6l9kOPnb9gOP4gAlqbbL1J6mAvpR6MWiiukLtHTG3Bey1YzIBqLkUX8b6UmZCSsYurTovejgY2DusTQOc8Gvt6O%2Fm799nagr%2FU01JhJEMiN303gR6g4dr1jvRTTpXQ9dELPJGkBKGv2k6By0rRsUAlAVnB%2FWXfqtTqQ6dcpPIahjwcVK2P2crN7dVneTC%2F0eDEBjqkAUsTBdiIb4dxo7zfpXAyf87AxEDYksqFWTxG%2BSzmy4Lz07AqJ14YVE0AzLDb2oWabqLr%2Fl7R5jy5NGmzxhzwlUzmB2TPBwUJNYJO4vLj%2FuNS27pYnWJXJ%2BxoZZgoLntVoMtSDe489v%2BBkDJ9Ca16ZHjpEIHRc0AZOWv9lnpeLPfL4AdT2OvBpqkhe1MOA1BJWdALmAyyfqasgrfcSA7bfdSiwP6y&X-Amz-Signature=af765931d51c29ca239fbb8172500d8f90684e095bc90e392010d2c966b34ccc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> [`TwistStamped`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)[ official docs](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)

In our code we can just use `msg.twist.linear` or `msg.twist.angular` to extract what we need:

```python
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # send msg to robot ...
```

from there the message can be sent to the robot

> Note if you are in Robomasters you will most likely use `RM_Uart` to send to the type-c

# Adding odom topic

The final topic our node needs to publish is the Odometry.

We did just publish that information into `/tf` with the transform broadcaster.

However, Nav2 still needs it on a separate topic called `/odom` with type `nav_msgs/Odometry`

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRCYY4GP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDae7vHOIHkNhuOoEUgEYm83FcR1Q2999JmNMzdIzFEDAIhAJirhswyq6cVXqnXnAKLZCWSjyBfgL9b6G1l975BMmiaKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzufCb1ycy3bY9oDj0q3AOWzmVaU15S0%2FCELf%2F6Jkc1TgR3ZJjMVKitcGikTKdJQtFjwXB9jIRxRnqR%2F0ckO5eRWqYWA1veGbWR1Czmn5zk73P3qLmvTmKJNf9slf%2B%2FF0lHbnMDQQSc7WHS5zH7H3eISpCIy96Xp7MHkRm4gi1otOBIIcIvtbpkE7ZbCiBirqGrg9MqjU2lsaH2TtaMK24bUBF%2B%2BmJA%2Bpi1j0tejUClIkuFWyUk9aSt3n1SxVyy3gFGnx7Gti1trOKEZIiBQSpA3FzJPKYwIj4FMYqNYMWaen9ayjvNH2Qm4kfI5UnX%2FeZ6Dt5CoQubQEIeJB9PPeG%2BD%2FveXpWEGricVHyQ1Gg102vBrdkeItQ%2BQk06WYebjthp%2BAIT4V3i4XRz810TRhLtYZD%2BZ7M7TZ8kDrIGzkObBtBZmDvpUf9trfXDGVhr4v2ZYn%2FGSYpVqsmzDnx1ZR6l9kOPnb9gOP4gAlqbbL1J6mAvpR6MWiiukLtHTG3Bey1YzIBqLkUX8b6UmZCSsYurTovejgY2DusTQOc8Gvt6O%2Fm799nagr%2FU01JhJEMiN303gR6g4dr1jvRTTpXQ9dELPJGkBKGv2k6By0rRsUAlAVnB%2FWXfqtTqQ6dcpPIahjwcVK2P2crN7dVneTC%2F0eDEBjqkAUsTBdiIb4dxo7zfpXAyf87AxEDYksqFWTxG%2BSzmy4Lz07AqJ14YVE0AzLDb2oWabqLr%2Fl7R5jy5NGmzxhzwlUzmB2TPBwUJNYJO4vLj%2FuNS27pYnWJXJ%2BxoZZgoLntVoMtSDe489v%2BBkDJ9Ca16ZHjpEIHRc0AZOWv9lnpeLPfL4AdT2OvBpqkhe1MOA1BJWdALmAyyfqasgrfcSA7bfdSiwP6y&X-Amz-Signature=19c58d1813cc5e61854af4e0803830be3a93c2ef700da68138917a2d82acc12f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

For those who are curious ROS does provide a Localization node which does most of the work we did above:

- [integrating localization_node](https://docs.nav2.org/setup_guides/odom/setup_robot_localization.html)
- [official localization node guide](https://docs.ros.org/en/melodic/api/robot_localization/html/index.html)

The `localization_node` is useful for doing sensor fusion when you also have an IMU or GPS to add to the localization.
