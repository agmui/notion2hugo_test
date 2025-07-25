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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JZSHZWW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG0lIqFd0DIw14S1LXwEfXbEoYE3qpZR%2FV1POu%2F8CYQuAiEA6wmNQ7QR7NbeZo9qofkH9QXQhuzYS%2BZjz2xowpMzEwQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDKQ43qz4BJd9v3WpxircA2jJhYrCPDlEP4rXESGDNEcmLX%2B6YtzM821x26NrTYCdeHodFtEMTpYm86S3rCWnud6lzs%2FjGJo5xVRLAYXqbdHFJswfdNMVwACip03xnQviyrkyjkygNJWtg84iTjx%2FRkArsjVxz%2BUsJjRkfLs41j30ks9wFIOI6KGu3VJ5%2BBwbEoecXtZHWVL19EgcUFdvhcuHCZGTGKmtU4IVqM5jEpmmiyOaagYk%2FpeBt9nKZKjbaOso7gPWVNQFY9W0hkdoQJwMDsCBC9DIh18r7L7CCbQ2quPFgxZdVlz7sz4ijeareAwxhSpsJN55Myq9NgVDoVTlXmVuf7ojjqJfgP4zDSx3h3wR44WdkrVnK1E6NPVgXq3NvnrSzwqe7z3cGG%2FDqn83FLfq0Z1sAozTT4pT6%2BVdrOAqiJsxIAH1RfoVc0HT%2FNtA8Ge%2BWOvd3i8dBqBZW8Ud%2FATIJeNPdY27SSK1Cqt2pFPBuGWlt1PsaCcUL%2FpDF18noeGQfzN69NjGLwUFtBlKAeWHyT891xvlG2HGT4iUBIsQNi1d4wP15xSOk1x1%2BIw3UBjJSz%2Bf0Knz%2FnHO1q3VsN5OL4IL1tXIPFTC0rJmiRQVON4yqD2LOr88MYSB4Gt1nfmhSxDhE19JMLH4i8QGOqUBlP07yfTTysI%2BhnJfTRHQk8lQGJB2ggdAmF3SFfOqg%2Byve9G6zz6lyqVtrID4VceUho%2B7RRXqlCDJQNafIJA6Mzyy8yZeLjjLVJata%2BxqaZzwOkNX1a9IauG4f4hldg75R06WUuV7hBwmrb02VoVF4sHAFWX6Z%2B64ye2AxXxKeZ6%2Fv8BOtr0UQExZKOnd4ZnJasjknye3qVC1XFT6GX%2FQcDdZciuH&X-Amz-Signature=49e30a9da183cf37184c87632ad8099514d63cdd0e99245a29aa8f6aa045a193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JZSHZWW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG0lIqFd0DIw14S1LXwEfXbEoYE3qpZR%2FV1POu%2F8CYQuAiEA6wmNQ7QR7NbeZo9qofkH9QXQhuzYS%2BZjz2xowpMzEwQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDKQ43qz4BJd9v3WpxircA2jJhYrCPDlEP4rXESGDNEcmLX%2B6YtzM821x26NrTYCdeHodFtEMTpYm86S3rCWnud6lzs%2FjGJo5xVRLAYXqbdHFJswfdNMVwACip03xnQviyrkyjkygNJWtg84iTjx%2FRkArsjVxz%2BUsJjRkfLs41j30ks9wFIOI6KGu3VJ5%2BBwbEoecXtZHWVL19EgcUFdvhcuHCZGTGKmtU4IVqM5jEpmmiyOaagYk%2FpeBt9nKZKjbaOso7gPWVNQFY9W0hkdoQJwMDsCBC9DIh18r7L7CCbQ2quPFgxZdVlz7sz4ijeareAwxhSpsJN55Myq9NgVDoVTlXmVuf7ojjqJfgP4zDSx3h3wR44WdkrVnK1E6NPVgXq3NvnrSzwqe7z3cGG%2FDqn83FLfq0Z1sAozTT4pT6%2BVdrOAqiJsxIAH1RfoVc0HT%2FNtA8Ge%2BWOvd3i8dBqBZW8Ud%2FATIJeNPdY27SSK1Cqt2pFPBuGWlt1PsaCcUL%2FpDF18noeGQfzN69NjGLwUFtBlKAeWHyT891xvlG2HGT4iUBIsQNi1d4wP15xSOk1x1%2BIw3UBjJSz%2Bf0Knz%2FnHO1q3VsN5OL4IL1tXIPFTC0rJmiRQVON4yqD2LOr88MYSB4Gt1nfmhSxDhE19JMLH4i8QGOqUBlP07yfTTysI%2BhnJfTRHQk8lQGJB2ggdAmF3SFfOqg%2Byve9G6zz6lyqVtrID4VceUho%2B7RRXqlCDJQNafIJA6Mzyy8yZeLjjLVJata%2BxqaZzwOkNX1a9IauG4f4hldg75R06WUuV7hBwmrb02VoVF4sHAFWX6Z%2B64ye2AxXxKeZ6%2Fv8BOtr0UQExZKOnd4ZnJasjknye3qVC1XFT6GX%2FQcDdZciuH&X-Amz-Signature=909b64520a08801e8c583795a51b9ba3c93c6bc57a15018e9e0b9f4687fc850b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JZSHZWW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG0lIqFd0DIw14S1LXwEfXbEoYE3qpZR%2FV1POu%2F8CYQuAiEA6wmNQ7QR7NbeZo9qofkH9QXQhuzYS%2BZjz2xowpMzEwQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDKQ43qz4BJd9v3WpxircA2jJhYrCPDlEP4rXESGDNEcmLX%2B6YtzM821x26NrTYCdeHodFtEMTpYm86S3rCWnud6lzs%2FjGJo5xVRLAYXqbdHFJswfdNMVwACip03xnQviyrkyjkygNJWtg84iTjx%2FRkArsjVxz%2BUsJjRkfLs41j30ks9wFIOI6KGu3VJ5%2BBwbEoecXtZHWVL19EgcUFdvhcuHCZGTGKmtU4IVqM5jEpmmiyOaagYk%2FpeBt9nKZKjbaOso7gPWVNQFY9W0hkdoQJwMDsCBC9DIh18r7L7CCbQ2quPFgxZdVlz7sz4ijeareAwxhSpsJN55Myq9NgVDoVTlXmVuf7ojjqJfgP4zDSx3h3wR44WdkrVnK1E6NPVgXq3NvnrSzwqe7z3cGG%2FDqn83FLfq0Z1sAozTT4pT6%2BVdrOAqiJsxIAH1RfoVc0HT%2FNtA8Ge%2BWOvd3i8dBqBZW8Ud%2FATIJeNPdY27SSK1Cqt2pFPBuGWlt1PsaCcUL%2FpDF18noeGQfzN69NjGLwUFtBlKAeWHyT891xvlG2HGT4iUBIsQNi1d4wP15xSOk1x1%2BIw3UBjJSz%2Bf0Knz%2FnHO1q3VsN5OL4IL1tXIPFTC0rJmiRQVON4yqD2LOr88MYSB4Gt1nfmhSxDhE19JMLH4i8QGOqUBlP07yfTTysI%2BhnJfTRHQk8lQGJB2ggdAmF3SFfOqg%2Byve9G6zz6lyqVtrID4VceUho%2B7RRXqlCDJQNafIJA6Mzyy8yZeLjjLVJata%2BxqaZzwOkNX1a9IauG4f4hldg75R06WUuV7hBwmrb02VoVF4sHAFWX6Z%2B64ye2AxXxKeZ6%2Fv8BOtr0UQExZKOnd4ZnJasjknye3qVC1XFT6GX%2FQcDdZciuH&X-Amz-Signature=bebf729b679870ca8af72ee18201e72b251027c71d0a2032b68380bff2cad7a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JZSHZWW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG0lIqFd0DIw14S1LXwEfXbEoYE3qpZR%2FV1POu%2F8CYQuAiEA6wmNQ7QR7NbeZo9qofkH9QXQhuzYS%2BZjz2xowpMzEwQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDKQ43qz4BJd9v3WpxircA2jJhYrCPDlEP4rXESGDNEcmLX%2B6YtzM821x26NrTYCdeHodFtEMTpYm86S3rCWnud6lzs%2FjGJo5xVRLAYXqbdHFJswfdNMVwACip03xnQviyrkyjkygNJWtg84iTjx%2FRkArsjVxz%2BUsJjRkfLs41j30ks9wFIOI6KGu3VJ5%2BBwbEoecXtZHWVL19EgcUFdvhcuHCZGTGKmtU4IVqM5jEpmmiyOaagYk%2FpeBt9nKZKjbaOso7gPWVNQFY9W0hkdoQJwMDsCBC9DIh18r7L7CCbQ2quPFgxZdVlz7sz4ijeareAwxhSpsJN55Myq9NgVDoVTlXmVuf7ojjqJfgP4zDSx3h3wR44WdkrVnK1E6NPVgXq3NvnrSzwqe7z3cGG%2FDqn83FLfq0Z1sAozTT4pT6%2BVdrOAqiJsxIAH1RfoVc0HT%2FNtA8Ge%2BWOvd3i8dBqBZW8Ud%2FATIJeNPdY27SSK1Cqt2pFPBuGWlt1PsaCcUL%2FpDF18noeGQfzN69NjGLwUFtBlKAeWHyT891xvlG2HGT4iUBIsQNi1d4wP15xSOk1x1%2BIw3UBjJSz%2Bf0Knz%2FnHO1q3VsN5OL4IL1tXIPFTC0rJmiRQVON4yqD2LOr88MYSB4Gt1nfmhSxDhE19JMLH4i8QGOqUBlP07yfTTysI%2BhnJfTRHQk8lQGJB2ggdAmF3SFfOqg%2Byve9G6zz6lyqVtrID4VceUho%2B7RRXqlCDJQNafIJA6Mzyy8yZeLjjLVJata%2BxqaZzwOkNX1a9IauG4f4hldg75R06WUuV7hBwmrb02VoVF4sHAFWX6Z%2B64ye2AxXxKeZ6%2Fv8BOtr0UQExZKOnd4ZnJasjknye3qVC1XFT6GX%2FQcDdZciuH&X-Amz-Signature=6a12daac5b245609a8b782886f2fb4265b92a81e30d2880a5fc3bfe856d9af17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JZSHZWW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG0lIqFd0DIw14S1LXwEfXbEoYE3qpZR%2FV1POu%2F8CYQuAiEA6wmNQ7QR7NbeZo9qofkH9QXQhuzYS%2BZjz2xowpMzEwQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDKQ43qz4BJd9v3WpxircA2jJhYrCPDlEP4rXESGDNEcmLX%2B6YtzM821x26NrTYCdeHodFtEMTpYm86S3rCWnud6lzs%2FjGJo5xVRLAYXqbdHFJswfdNMVwACip03xnQviyrkyjkygNJWtg84iTjx%2FRkArsjVxz%2BUsJjRkfLs41j30ks9wFIOI6KGu3VJ5%2BBwbEoecXtZHWVL19EgcUFdvhcuHCZGTGKmtU4IVqM5jEpmmiyOaagYk%2FpeBt9nKZKjbaOso7gPWVNQFY9W0hkdoQJwMDsCBC9DIh18r7L7CCbQ2quPFgxZdVlz7sz4ijeareAwxhSpsJN55Myq9NgVDoVTlXmVuf7ojjqJfgP4zDSx3h3wR44WdkrVnK1E6NPVgXq3NvnrSzwqe7z3cGG%2FDqn83FLfq0Z1sAozTT4pT6%2BVdrOAqiJsxIAH1RfoVc0HT%2FNtA8Ge%2BWOvd3i8dBqBZW8Ud%2FATIJeNPdY27SSK1Cqt2pFPBuGWlt1PsaCcUL%2FpDF18noeGQfzN69NjGLwUFtBlKAeWHyT891xvlG2HGT4iUBIsQNi1d4wP15xSOk1x1%2BIw3UBjJSz%2Bf0Knz%2FnHO1q3VsN5OL4IL1tXIPFTC0rJmiRQVON4yqD2LOr88MYSB4Gt1nfmhSxDhE19JMLH4i8QGOqUBlP07yfTTysI%2BhnJfTRHQk8lQGJB2ggdAmF3SFfOqg%2Byve9G6zz6lyqVtrID4VceUho%2B7RRXqlCDJQNafIJA6Mzyy8yZeLjjLVJata%2BxqaZzwOkNX1a9IauG4f4hldg75R06WUuV7hBwmrb02VoVF4sHAFWX6Z%2B64ye2AxXxKeZ6%2Fv8BOtr0UQExZKOnd4ZnJasjknye3qVC1XFT6GX%2FQcDdZciuH&X-Amz-Signature=48e67d29948690b625a6bf067eca0b306f93b87620ef7c48cc2902e547914c16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JZSHZWW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG0lIqFd0DIw14S1LXwEfXbEoYE3qpZR%2FV1POu%2F8CYQuAiEA6wmNQ7QR7NbeZo9qofkH9QXQhuzYS%2BZjz2xowpMzEwQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDKQ43qz4BJd9v3WpxircA2jJhYrCPDlEP4rXESGDNEcmLX%2B6YtzM821x26NrTYCdeHodFtEMTpYm86S3rCWnud6lzs%2FjGJo5xVRLAYXqbdHFJswfdNMVwACip03xnQviyrkyjkygNJWtg84iTjx%2FRkArsjVxz%2BUsJjRkfLs41j30ks9wFIOI6KGu3VJ5%2BBwbEoecXtZHWVL19EgcUFdvhcuHCZGTGKmtU4IVqM5jEpmmiyOaagYk%2FpeBt9nKZKjbaOso7gPWVNQFY9W0hkdoQJwMDsCBC9DIh18r7L7CCbQ2quPFgxZdVlz7sz4ijeareAwxhSpsJN55Myq9NgVDoVTlXmVuf7ojjqJfgP4zDSx3h3wR44WdkrVnK1E6NPVgXq3NvnrSzwqe7z3cGG%2FDqn83FLfq0Z1sAozTT4pT6%2BVdrOAqiJsxIAH1RfoVc0HT%2FNtA8Ge%2BWOvd3i8dBqBZW8Ud%2FATIJeNPdY27SSK1Cqt2pFPBuGWlt1PsaCcUL%2FpDF18noeGQfzN69NjGLwUFtBlKAeWHyT891xvlG2HGT4iUBIsQNi1d4wP15xSOk1x1%2BIw3UBjJSz%2Bf0Knz%2FnHO1q3VsN5OL4IL1tXIPFTC0rJmiRQVON4yqD2LOr88MYSB4Gt1nfmhSxDhE19JMLH4i8QGOqUBlP07yfTTysI%2BhnJfTRHQk8lQGJB2ggdAmF3SFfOqg%2Byve9G6zz6lyqVtrID4VceUho%2B7RRXqlCDJQNafIJA6Mzyy8yZeLjjLVJata%2BxqaZzwOkNX1a9IauG4f4hldg75R06WUuV7hBwmrb02VoVF4sHAFWX6Z%2B64ye2AxXxKeZ6%2Fv8BOtr0UQExZKOnd4ZnJasjknye3qVC1XFT6GX%2FQcDdZciuH&X-Amz-Signature=eff77bb4ae0f195209a98c5fbaf2762ec9cee7d1d573f059659c4eca29ff7e47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JZSHZWW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG0lIqFd0DIw14S1LXwEfXbEoYE3qpZR%2FV1POu%2F8CYQuAiEA6wmNQ7QR7NbeZo9qofkH9QXQhuzYS%2BZjz2xowpMzEwQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDKQ43qz4BJd9v3WpxircA2jJhYrCPDlEP4rXESGDNEcmLX%2B6YtzM821x26NrTYCdeHodFtEMTpYm86S3rCWnud6lzs%2FjGJo5xVRLAYXqbdHFJswfdNMVwACip03xnQviyrkyjkygNJWtg84iTjx%2FRkArsjVxz%2BUsJjRkfLs41j30ks9wFIOI6KGu3VJ5%2BBwbEoecXtZHWVL19EgcUFdvhcuHCZGTGKmtU4IVqM5jEpmmiyOaagYk%2FpeBt9nKZKjbaOso7gPWVNQFY9W0hkdoQJwMDsCBC9DIh18r7L7CCbQ2quPFgxZdVlz7sz4ijeareAwxhSpsJN55Myq9NgVDoVTlXmVuf7ojjqJfgP4zDSx3h3wR44WdkrVnK1E6NPVgXq3NvnrSzwqe7z3cGG%2FDqn83FLfq0Z1sAozTT4pT6%2BVdrOAqiJsxIAH1RfoVc0HT%2FNtA8Ge%2BWOvd3i8dBqBZW8Ud%2FATIJeNPdY27SSK1Cqt2pFPBuGWlt1PsaCcUL%2FpDF18noeGQfzN69NjGLwUFtBlKAeWHyT891xvlG2HGT4iUBIsQNi1d4wP15xSOk1x1%2BIw3UBjJSz%2Bf0Knz%2FnHO1q3VsN5OL4IL1tXIPFTC0rJmiRQVON4yqD2LOr88MYSB4Gt1nfmhSxDhE19JMLH4i8QGOqUBlP07yfTTysI%2BhnJfTRHQk8lQGJB2ggdAmF3SFfOqg%2Byve9G6zz6lyqVtrID4VceUho%2B7RRXqlCDJQNafIJA6Mzyy8yZeLjjLVJata%2BxqaZzwOkNX1a9IauG4f4hldg75R06WUuV7hBwmrb02VoVF4sHAFWX6Z%2B64ye2AxXxKeZ6%2Fv8BOtr0UQExZKOnd4ZnJasjknye3qVC1XFT6GX%2FQcDdZciuH&X-Amz-Signature=03ac7795a0e3e69affdcfe09d59e31205d29a04c08794b86425e5e4c37d6857a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JZSHZWW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG0lIqFd0DIw14S1LXwEfXbEoYE3qpZR%2FV1POu%2F8CYQuAiEA6wmNQ7QR7NbeZo9qofkH9QXQhuzYS%2BZjz2xowpMzEwQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDKQ43qz4BJd9v3WpxircA2jJhYrCPDlEP4rXESGDNEcmLX%2B6YtzM821x26NrTYCdeHodFtEMTpYm86S3rCWnud6lzs%2FjGJo5xVRLAYXqbdHFJswfdNMVwACip03xnQviyrkyjkygNJWtg84iTjx%2FRkArsjVxz%2BUsJjRkfLs41j30ks9wFIOI6KGu3VJ5%2BBwbEoecXtZHWVL19EgcUFdvhcuHCZGTGKmtU4IVqM5jEpmmiyOaagYk%2FpeBt9nKZKjbaOso7gPWVNQFY9W0hkdoQJwMDsCBC9DIh18r7L7CCbQ2quPFgxZdVlz7sz4ijeareAwxhSpsJN55Myq9NgVDoVTlXmVuf7ojjqJfgP4zDSx3h3wR44WdkrVnK1E6NPVgXq3NvnrSzwqe7z3cGG%2FDqn83FLfq0Z1sAozTT4pT6%2BVdrOAqiJsxIAH1RfoVc0HT%2FNtA8Ge%2BWOvd3i8dBqBZW8Ud%2FATIJeNPdY27SSK1Cqt2pFPBuGWlt1PsaCcUL%2FpDF18noeGQfzN69NjGLwUFtBlKAeWHyT891xvlG2HGT4iUBIsQNi1d4wP15xSOk1x1%2BIw3UBjJSz%2Bf0Knz%2FnHO1q3VsN5OL4IL1tXIPFTC0rJmiRQVON4yqD2LOr88MYSB4Gt1nfmhSxDhE19JMLH4i8QGOqUBlP07yfTTysI%2BhnJfTRHQk8lQGJB2ggdAmF3SFfOqg%2Byve9G6zz6lyqVtrID4VceUho%2B7RRXqlCDJQNafIJA6Mzyy8yZeLjjLVJata%2BxqaZzwOkNX1a9IauG4f4hldg75R06WUuV7hBwmrb02VoVF4sHAFWX6Z%2B64ye2AxXxKeZ6%2Fv8BOtr0UQExZKOnd4ZnJasjknye3qVC1XFT6GX%2FQcDdZciuH&X-Amz-Signature=b3f3b8fb673e1689d795b13247891b443d0f37c5024cf20e1d551c28555083c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JZSHZWW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG0lIqFd0DIw14S1LXwEfXbEoYE3qpZR%2FV1POu%2F8CYQuAiEA6wmNQ7QR7NbeZo9qofkH9QXQhuzYS%2BZjz2xowpMzEwQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDKQ43qz4BJd9v3WpxircA2jJhYrCPDlEP4rXESGDNEcmLX%2B6YtzM821x26NrTYCdeHodFtEMTpYm86S3rCWnud6lzs%2FjGJo5xVRLAYXqbdHFJswfdNMVwACip03xnQviyrkyjkygNJWtg84iTjx%2FRkArsjVxz%2BUsJjRkfLs41j30ks9wFIOI6KGu3VJ5%2BBwbEoecXtZHWVL19EgcUFdvhcuHCZGTGKmtU4IVqM5jEpmmiyOaagYk%2FpeBt9nKZKjbaOso7gPWVNQFY9W0hkdoQJwMDsCBC9DIh18r7L7CCbQ2quPFgxZdVlz7sz4ijeareAwxhSpsJN55Myq9NgVDoVTlXmVuf7ojjqJfgP4zDSx3h3wR44WdkrVnK1E6NPVgXq3NvnrSzwqe7z3cGG%2FDqn83FLfq0Z1sAozTT4pT6%2BVdrOAqiJsxIAH1RfoVc0HT%2FNtA8Ge%2BWOvd3i8dBqBZW8Ud%2FATIJeNPdY27SSK1Cqt2pFPBuGWlt1PsaCcUL%2FpDF18noeGQfzN69NjGLwUFtBlKAeWHyT891xvlG2HGT4iUBIsQNi1d4wP15xSOk1x1%2BIw3UBjJSz%2Bf0Knz%2FnHO1q3VsN5OL4IL1tXIPFTC0rJmiRQVON4yqD2LOr88MYSB4Gt1nfmhSxDhE19JMLH4i8QGOqUBlP07yfTTysI%2BhnJfTRHQk8lQGJB2ggdAmF3SFfOqg%2Byve9G6zz6lyqVtrID4VceUho%2B7RRXqlCDJQNafIJA6Mzyy8yZeLjjLVJata%2BxqaZzwOkNX1a9IauG4f4hldg75R06WUuV7hBwmrb02VoVF4sHAFWX6Z%2B64ye2AxXxKeZ6%2Fv8BOtr0UQExZKOnd4ZnJasjknye3qVC1XFT6GX%2FQcDdZciuH&X-Amz-Signature=031a506f300a7c32f0b8847af4bb86e31c54dd2f985f349c139f8ed8cc12d93e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466262FU2FQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDmup34zuDSMTuRRF%2F6zpq7UpLONbl3ln9zWwjwcCPHXQIhAO4XWkgZKYu%2FusSYl6R1ahv9AG5%2BC%2BoBI1lMFVqIbRrGKv8DCD0QABoMNjM3NDIzMTgzODA1IgxgrYNf%2BWm4yoGdOIAq3AN3X%2BzGvLoyyGjII7RUBVTpuKXHruEfZrxAfxjOW55vXki1uQrQxUezeKJfS0MU6ZmbGyElNDmOAlzw9%2BKlxq%2FS3OjxillQ7%2FjRSjGJJduACoG60XTZkeixAHivMjgu8gKi7RqVY3K5QE745pAwCrBc0hRNqH3KXvOrlLyKGQGWcqEdXTVTU%2Fg7iNK0sS6x4LSmd9zdPd%2B%2B78nf9gsdrsF30IulupZoXjOP6430A4P3kANSEiq07uMeqniFpnn9VLlew87CpoGnI51GWQWZAfQ1ZU5WD4attlB4mVvfflaDUJiIvRTG0rZmmEge9Wi98x4udDYTLTGN7P9peXjd5Ulrr4Qa566Y3ZedcZRbHP5eIHNa%2BkcnWsJLlqhHnqUAZYSXT7NVEbjifWH0ioCnKi08QNwdSW3z7nMcZTWQbBw4para31ve%2BDK9FgvuOfrcsb2ZBBptSfFoC2F3gnkJ%2FH0zQ5ToKf2UzmTdtKyEiQlTU3p7VwVcAecpsSIwfEoOgJy9NgAdcUN0ZudwEhGq4eJ%2FZ294CEhOVugfJM5DFma6yOJp5BHPQwBmbuH43%2FwD9LbCUd7yPhfrCfRxnjWoD98p5GlQc4taRPUl4suGD3e6PRtnsrAmeUVKVOI48jCJ%2BIvEBjqkAcIowAFa%2FqnKEp3R9nufUiGvFo%2FEUpjhNwehkqxDnM7wl%2B6l7rcCjolC6CGvINpfl2Vb8%2F1nKIrhsQQ3EvQsgQDXza2oha8WouQIGMuE9vDktL1%2BPy23pXfkiXt7Ewj7m%2FovE3RaabczoIzjpKRiHd2j3yUkRPelmg%2FgEVHNl5FAioNT4eo6pbK9o4tUdJCyFfH57owhXhXsA57RzrSqAwBBiARc&X-Amz-Signature=4657d25a2bcfd583de1183144e350c7f147f0eba863eda8bb25cd900cb868b50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JZSHZWW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG0lIqFd0DIw14S1LXwEfXbEoYE3qpZR%2FV1POu%2F8CYQuAiEA6wmNQ7QR7NbeZo9qofkH9QXQhuzYS%2BZjz2xowpMzEwQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDKQ43qz4BJd9v3WpxircA2jJhYrCPDlEP4rXESGDNEcmLX%2B6YtzM821x26NrTYCdeHodFtEMTpYm86S3rCWnud6lzs%2FjGJo5xVRLAYXqbdHFJswfdNMVwACip03xnQviyrkyjkygNJWtg84iTjx%2FRkArsjVxz%2BUsJjRkfLs41j30ks9wFIOI6KGu3VJ5%2BBwbEoecXtZHWVL19EgcUFdvhcuHCZGTGKmtU4IVqM5jEpmmiyOaagYk%2FpeBt9nKZKjbaOso7gPWVNQFY9W0hkdoQJwMDsCBC9DIh18r7L7CCbQ2quPFgxZdVlz7sz4ijeareAwxhSpsJN55Myq9NgVDoVTlXmVuf7ojjqJfgP4zDSx3h3wR44WdkrVnK1E6NPVgXq3NvnrSzwqe7z3cGG%2FDqn83FLfq0Z1sAozTT4pT6%2BVdrOAqiJsxIAH1RfoVc0HT%2FNtA8Ge%2BWOvd3i8dBqBZW8Ud%2FATIJeNPdY27SSK1Cqt2pFPBuGWlt1PsaCcUL%2FpDF18noeGQfzN69NjGLwUFtBlKAeWHyT891xvlG2HGT4iUBIsQNi1d4wP15xSOk1x1%2BIw3UBjJSz%2Bf0Knz%2FnHO1q3VsN5OL4IL1tXIPFTC0rJmiRQVON4yqD2LOr88MYSB4Gt1nfmhSxDhE19JMLH4i8QGOqUBlP07yfTTysI%2BhnJfTRHQk8lQGJB2ggdAmF3SFfOqg%2Byve9G6zz6lyqVtrID4VceUho%2B7RRXqlCDJQNafIJA6Mzyy8yZeLjjLVJata%2BxqaZzwOkNX1a9IauG4f4hldg75R06WUuV7hBwmrb02VoVF4sHAFWX6Z%2B64ye2AxXxKeZ6%2Fv8BOtr0UQExZKOnd4ZnJasjknye3qVC1XFT6GX%2FQcDdZciuH&X-Amz-Signature=5f65aa735dbf0148638df3cf43a464726ae2e1bb19cdf23d27bc832fbb88714f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJA6D7VI%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGFzI2mDl0Rbujp%2BEMxxSoPax5Ta2Mmt2I3i3lJnHA6fAiEA%2B6hNlrAnfvHR%2B3ZQGANtni5e8fYVWxpiszbxIG5xBlYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDI4Phmy%2BsnpRgMWHMircA21sZhafV3BRN9VkHgAG%2BATaR8D8C%2BYGKWHxilFt%2FsxRAbTNCIyZVsW7P31iaqf%2BBnDtsv%2BjPRlbsqTjDLd5LRf1xUE%2BazjStUUB7xMSaeGbV7j%2BeqmQnqRZgAgY9P1Vd0I4tvlqjU3TU6qFmz8EcFM8lWUhBSiY8CkVKgDAylxnjb9IjD3cAQTIQMYvnNadEi0n5W%2B1KF%2F3tqk4S0ZR5gwWzDD8qtDb9gRYM55WRp9v1Qo4bB4OuCmNjN4TjYkoRNjvJGhFcRctoZe62r0XndLCI25YjHdEySykOISaZgGFRwBcwQNoOVUVJhJOUeFnVkHTNFYbQNrtBok9wNkp9AGE5JaRZJiyrouMIh5PjAtzSMsXMEs4H2XD0QL0M3XYAKvdiIEo%2FpNTwF4IxpyiFmp2HZeYibN0CQG%2BhC7wW9opEGvCCYNXLXbwEGTMfpShdU%2FQ2XvEDW7B9bVSdJZr1cXQ3XIkzTZKQ84tIq0amZ%2BkdziHOJyXhwbVYQvZ3PoHx%2FhcSG4SvwfbnMJGrCjinsuOAozF%2BAJbGJMOuBP24S6WkHcyz3AwivtIWXQJVSHcq%2F8iE7oemEpNyCqTLSRWUQ7wpvcPCUCSQYUz%2BjqDxJX8dGuIkrc8Qspyc9p9MMr3i8QGOqUB0ZGiUZBEII6AQquYsJKHL9FcSUh8RwDXKrJTNS2W0RPxn7AxHoG8KXHmO1u8Zgf8gUQfu7E9RXRKajDLrEULa12V3kBDrXNHGptRTv%2Fa9xVageY6WmfP5U30r1pJa6xrh6erCo6TbpEiVQNcUA2cnNpK6rQxDtP3Td4pSnOTuZRiZXwfvJ5Plrwv1Ad%2Fun8vtO0O8%2FeOoVwE4sH1JwYkuD8%2BBRg0&X-Amz-Signature=99df8d515a13eaa346b209d2539759bf5101282e17eb9215437569822b48b876&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJA6D7VI%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGFzI2mDl0Rbujp%2BEMxxSoPax5Ta2Mmt2I3i3lJnHA6fAiEA%2B6hNlrAnfvHR%2B3ZQGANtni5e8fYVWxpiszbxIG5xBlYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDI4Phmy%2BsnpRgMWHMircA21sZhafV3BRN9VkHgAG%2BATaR8D8C%2BYGKWHxilFt%2FsxRAbTNCIyZVsW7P31iaqf%2BBnDtsv%2BjPRlbsqTjDLd5LRf1xUE%2BazjStUUB7xMSaeGbV7j%2BeqmQnqRZgAgY9P1Vd0I4tvlqjU3TU6qFmz8EcFM8lWUhBSiY8CkVKgDAylxnjb9IjD3cAQTIQMYvnNadEi0n5W%2B1KF%2F3tqk4S0ZR5gwWzDD8qtDb9gRYM55WRp9v1Qo4bB4OuCmNjN4TjYkoRNjvJGhFcRctoZe62r0XndLCI25YjHdEySykOISaZgGFRwBcwQNoOVUVJhJOUeFnVkHTNFYbQNrtBok9wNkp9AGE5JaRZJiyrouMIh5PjAtzSMsXMEs4H2XD0QL0M3XYAKvdiIEo%2FpNTwF4IxpyiFmp2HZeYibN0CQG%2BhC7wW9opEGvCCYNXLXbwEGTMfpShdU%2FQ2XvEDW7B9bVSdJZr1cXQ3XIkzTZKQ84tIq0amZ%2BkdziHOJyXhwbVYQvZ3PoHx%2FhcSG4SvwfbnMJGrCjinsuOAozF%2BAJbGJMOuBP24S6WkHcyz3AwivtIWXQJVSHcq%2F8iE7oemEpNyCqTLSRWUQ7wpvcPCUCSQYUz%2BjqDxJX8dGuIkrc8Qspyc9p9MMr3i8QGOqUB0ZGiUZBEII6AQquYsJKHL9FcSUh8RwDXKrJTNS2W0RPxn7AxHoG8KXHmO1u8Zgf8gUQfu7E9RXRKajDLrEULa12V3kBDrXNHGptRTv%2Fa9xVageY6WmfP5U30r1pJa6xrh6erCo6TbpEiVQNcUA2cnNpK6rQxDtP3Td4pSnOTuZRiZXwfvJ5Plrwv1Ad%2Fun8vtO0O8%2FeOoVwE4sH1JwYkuD8%2BBRg0&X-Amz-Signature=68e0520dfde7bb3fe4e1a7016a503c383ad07d4184ba4473d0a49f3394ef6122&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJA6D7VI%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGFzI2mDl0Rbujp%2BEMxxSoPax5Ta2Mmt2I3i3lJnHA6fAiEA%2B6hNlrAnfvHR%2B3ZQGANtni5e8fYVWxpiszbxIG5xBlYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDI4Phmy%2BsnpRgMWHMircA21sZhafV3BRN9VkHgAG%2BATaR8D8C%2BYGKWHxilFt%2FsxRAbTNCIyZVsW7P31iaqf%2BBnDtsv%2BjPRlbsqTjDLd5LRf1xUE%2BazjStUUB7xMSaeGbV7j%2BeqmQnqRZgAgY9P1Vd0I4tvlqjU3TU6qFmz8EcFM8lWUhBSiY8CkVKgDAylxnjb9IjD3cAQTIQMYvnNadEi0n5W%2B1KF%2F3tqk4S0ZR5gwWzDD8qtDb9gRYM55WRp9v1Qo4bB4OuCmNjN4TjYkoRNjvJGhFcRctoZe62r0XndLCI25YjHdEySykOISaZgGFRwBcwQNoOVUVJhJOUeFnVkHTNFYbQNrtBok9wNkp9AGE5JaRZJiyrouMIh5PjAtzSMsXMEs4H2XD0QL0M3XYAKvdiIEo%2FpNTwF4IxpyiFmp2HZeYibN0CQG%2BhC7wW9opEGvCCYNXLXbwEGTMfpShdU%2FQ2XvEDW7B9bVSdJZr1cXQ3XIkzTZKQ84tIq0amZ%2BkdziHOJyXhwbVYQvZ3PoHx%2FhcSG4SvwfbnMJGrCjinsuOAozF%2BAJbGJMOuBP24S6WkHcyz3AwivtIWXQJVSHcq%2F8iE7oemEpNyCqTLSRWUQ7wpvcPCUCSQYUz%2BjqDxJX8dGuIkrc8Qspyc9p9MMr3i8QGOqUB0ZGiUZBEII6AQquYsJKHL9FcSUh8RwDXKrJTNS2W0RPxn7AxHoG8KXHmO1u8Zgf8gUQfu7E9RXRKajDLrEULa12V3kBDrXNHGptRTv%2Fa9xVageY6WmfP5U30r1pJa6xrh6erCo6TbpEiVQNcUA2cnNpK6rQxDtP3Td4pSnOTuZRiZXwfvJ5Plrwv1Ad%2Fun8vtO0O8%2FeOoVwE4sH1JwYkuD8%2BBRg0&X-Amz-Signature=8fb5031b76fae89777afa880d2df6c6d0ee00a8a50e6f5234a685b9ce2d78d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJA6D7VI%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGFzI2mDl0Rbujp%2BEMxxSoPax5Ta2Mmt2I3i3lJnHA6fAiEA%2B6hNlrAnfvHR%2B3ZQGANtni5e8fYVWxpiszbxIG5xBlYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDI4Phmy%2BsnpRgMWHMircA21sZhafV3BRN9VkHgAG%2BATaR8D8C%2BYGKWHxilFt%2FsxRAbTNCIyZVsW7P31iaqf%2BBnDtsv%2BjPRlbsqTjDLd5LRf1xUE%2BazjStUUB7xMSaeGbV7j%2BeqmQnqRZgAgY9P1Vd0I4tvlqjU3TU6qFmz8EcFM8lWUhBSiY8CkVKgDAylxnjb9IjD3cAQTIQMYvnNadEi0n5W%2B1KF%2F3tqk4S0ZR5gwWzDD8qtDb9gRYM55WRp9v1Qo4bB4OuCmNjN4TjYkoRNjvJGhFcRctoZe62r0XndLCI25YjHdEySykOISaZgGFRwBcwQNoOVUVJhJOUeFnVkHTNFYbQNrtBok9wNkp9AGE5JaRZJiyrouMIh5PjAtzSMsXMEs4H2XD0QL0M3XYAKvdiIEo%2FpNTwF4IxpyiFmp2HZeYibN0CQG%2BhC7wW9opEGvCCYNXLXbwEGTMfpShdU%2FQ2XvEDW7B9bVSdJZr1cXQ3XIkzTZKQ84tIq0amZ%2BkdziHOJyXhwbVYQvZ3PoHx%2FhcSG4SvwfbnMJGrCjinsuOAozF%2BAJbGJMOuBP24S6WkHcyz3AwivtIWXQJVSHcq%2F8iE7oemEpNyCqTLSRWUQ7wpvcPCUCSQYUz%2BjqDxJX8dGuIkrc8Qspyc9p9MMr3i8QGOqUB0ZGiUZBEII6AQquYsJKHL9FcSUh8RwDXKrJTNS2W0RPxn7AxHoG8KXHmO1u8Zgf8gUQfu7E9RXRKajDLrEULa12V3kBDrXNHGptRTv%2Fa9xVageY6WmfP5U30r1pJa6xrh6erCo6TbpEiVQNcUA2cnNpK6rQxDtP3Td4pSnOTuZRiZXwfvJ5Plrwv1Ad%2Fun8vtO0O8%2FeOoVwE4sH1JwYkuD8%2BBRg0&X-Amz-Signature=482edb2c1f40469a5a08e53806ff627405f4b25b60425b97440156a9ee77373e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJA6D7VI%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGFzI2mDl0Rbujp%2BEMxxSoPax5Ta2Mmt2I3i3lJnHA6fAiEA%2B6hNlrAnfvHR%2B3ZQGANtni5e8fYVWxpiszbxIG5xBlYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDI4Phmy%2BsnpRgMWHMircA21sZhafV3BRN9VkHgAG%2BATaR8D8C%2BYGKWHxilFt%2FsxRAbTNCIyZVsW7P31iaqf%2BBnDtsv%2BjPRlbsqTjDLd5LRf1xUE%2BazjStUUB7xMSaeGbV7j%2BeqmQnqRZgAgY9P1Vd0I4tvlqjU3TU6qFmz8EcFM8lWUhBSiY8CkVKgDAylxnjb9IjD3cAQTIQMYvnNadEi0n5W%2B1KF%2F3tqk4S0ZR5gwWzDD8qtDb9gRYM55WRp9v1Qo4bB4OuCmNjN4TjYkoRNjvJGhFcRctoZe62r0XndLCI25YjHdEySykOISaZgGFRwBcwQNoOVUVJhJOUeFnVkHTNFYbQNrtBok9wNkp9AGE5JaRZJiyrouMIh5PjAtzSMsXMEs4H2XD0QL0M3XYAKvdiIEo%2FpNTwF4IxpyiFmp2HZeYibN0CQG%2BhC7wW9opEGvCCYNXLXbwEGTMfpShdU%2FQ2XvEDW7B9bVSdJZr1cXQ3XIkzTZKQ84tIq0amZ%2BkdziHOJyXhwbVYQvZ3PoHx%2FhcSG4SvwfbnMJGrCjinsuOAozF%2BAJbGJMOuBP24S6WkHcyz3AwivtIWXQJVSHcq%2F8iE7oemEpNyCqTLSRWUQ7wpvcPCUCSQYUz%2BjqDxJX8dGuIkrc8Qspyc9p9MMr3i8QGOqUB0ZGiUZBEII6AQquYsJKHL9FcSUh8RwDXKrJTNS2W0RPxn7AxHoG8KXHmO1u8Zgf8gUQfu7E9RXRKajDLrEULa12V3kBDrXNHGptRTv%2Fa9xVageY6WmfP5U30r1pJa6xrh6erCo6TbpEiVQNcUA2cnNpK6rQxDtP3Td4pSnOTuZRiZXwfvJ5Plrwv1Ad%2Fun8vtO0O8%2FeOoVwE4sH1JwYkuD8%2BBRg0&X-Amz-Signature=eec439e893bf02cee48262d703dc893416bd5199cf959576045604e94ae221ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJA6D7VI%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGFzI2mDl0Rbujp%2BEMxxSoPax5Ta2Mmt2I3i3lJnHA6fAiEA%2B6hNlrAnfvHR%2B3ZQGANtni5e8fYVWxpiszbxIG5xBlYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDI4Phmy%2BsnpRgMWHMircA21sZhafV3BRN9VkHgAG%2BATaR8D8C%2BYGKWHxilFt%2FsxRAbTNCIyZVsW7P31iaqf%2BBnDtsv%2BjPRlbsqTjDLd5LRf1xUE%2BazjStUUB7xMSaeGbV7j%2BeqmQnqRZgAgY9P1Vd0I4tvlqjU3TU6qFmz8EcFM8lWUhBSiY8CkVKgDAylxnjb9IjD3cAQTIQMYvnNadEi0n5W%2B1KF%2F3tqk4S0ZR5gwWzDD8qtDb9gRYM55WRp9v1Qo4bB4OuCmNjN4TjYkoRNjvJGhFcRctoZe62r0XndLCI25YjHdEySykOISaZgGFRwBcwQNoOVUVJhJOUeFnVkHTNFYbQNrtBok9wNkp9AGE5JaRZJiyrouMIh5PjAtzSMsXMEs4H2XD0QL0M3XYAKvdiIEo%2FpNTwF4IxpyiFmp2HZeYibN0CQG%2BhC7wW9opEGvCCYNXLXbwEGTMfpShdU%2FQ2XvEDW7B9bVSdJZr1cXQ3XIkzTZKQ84tIq0amZ%2BkdziHOJyXhwbVYQvZ3PoHx%2FhcSG4SvwfbnMJGrCjinsuOAozF%2BAJbGJMOuBP24S6WkHcyz3AwivtIWXQJVSHcq%2F8iE7oemEpNyCqTLSRWUQ7wpvcPCUCSQYUz%2BjqDxJX8dGuIkrc8Qspyc9p9MMr3i8QGOqUB0ZGiUZBEII6AQquYsJKHL9FcSUh8RwDXKrJTNS2W0RPxn7AxHoG8KXHmO1u8Zgf8gUQfu7E9RXRKajDLrEULa12V3kBDrXNHGptRTv%2Fa9xVageY6WmfP5U30r1pJa6xrh6erCo6TbpEiVQNcUA2cnNpK6rQxDtP3Td4pSnOTuZRiZXwfvJ5Plrwv1Ad%2Fun8vtO0O8%2FeOoVwE4sH1JwYkuD8%2BBRg0&X-Amz-Signature=cb69b13e7fa42db40317ca3d37b278c5fe4402d09d59efe5cc749142d16bcabb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJA6D7VI%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGFzI2mDl0Rbujp%2BEMxxSoPax5Ta2Mmt2I3i3lJnHA6fAiEA%2B6hNlrAnfvHR%2B3ZQGANtni5e8fYVWxpiszbxIG5xBlYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDI4Phmy%2BsnpRgMWHMircA21sZhafV3BRN9VkHgAG%2BATaR8D8C%2BYGKWHxilFt%2FsxRAbTNCIyZVsW7P31iaqf%2BBnDtsv%2BjPRlbsqTjDLd5LRf1xUE%2BazjStUUB7xMSaeGbV7j%2BeqmQnqRZgAgY9P1Vd0I4tvlqjU3TU6qFmz8EcFM8lWUhBSiY8CkVKgDAylxnjb9IjD3cAQTIQMYvnNadEi0n5W%2B1KF%2F3tqk4S0ZR5gwWzDD8qtDb9gRYM55WRp9v1Qo4bB4OuCmNjN4TjYkoRNjvJGhFcRctoZe62r0XndLCI25YjHdEySykOISaZgGFRwBcwQNoOVUVJhJOUeFnVkHTNFYbQNrtBok9wNkp9AGE5JaRZJiyrouMIh5PjAtzSMsXMEs4H2XD0QL0M3XYAKvdiIEo%2FpNTwF4IxpyiFmp2HZeYibN0CQG%2BhC7wW9opEGvCCYNXLXbwEGTMfpShdU%2FQ2XvEDW7B9bVSdJZr1cXQ3XIkzTZKQ84tIq0amZ%2BkdziHOJyXhwbVYQvZ3PoHx%2FhcSG4SvwfbnMJGrCjinsuOAozF%2BAJbGJMOuBP24S6WkHcyz3AwivtIWXQJVSHcq%2F8iE7oemEpNyCqTLSRWUQ7wpvcPCUCSQYUz%2BjqDxJX8dGuIkrc8Qspyc9p9MMr3i8QGOqUB0ZGiUZBEII6AQquYsJKHL9FcSUh8RwDXKrJTNS2W0RPxn7AxHoG8KXHmO1u8Zgf8gUQfu7E9RXRKajDLrEULa12V3kBDrXNHGptRTv%2Fa9xVageY6WmfP5U30r1pJa6xrh6erCo6TbpEiVQNcUA2cnNpK6rQxDtP3Td4pSnOTuZRiZXwfvJ5Plrwv1Ad%2Fun8vtO0O8%2FeOoVwE4sH1JwYkuD8%2BBRg0&X-Amz-Signature=428a9c754c004024b260ee99359d2ccf6ae8073c1faae0fcdc5aabfb390f1303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
