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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQPJ6EI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQC05ijukBbJxKHtCTIJb1b%2F31vCMsKL8zf6R18nsmHgjgIhAJgPfW3Zy%2FXrrS%2BmnT9xYt1yefmWF%2BL2EWxJ6wMePEWeKv8DCG0QABoMNjM3NDIzMTgzODA1Igx%2BLmf6r7eoKW9XNboq3AN7%2BVs94k3LY7Hqwm4KHHYxpqA4iVrE9UgprjXm7b6bQfeKr0WD5c7wJBwKX2Ctav91HEf9iTTmu04mzSuE5PK2IREaZNilE%2BIkK0ZgguFZF18lSDimL9MtRCjeSJipR5DgqkqLwMmS%2FxNoqyU6d%2BbaTI3%2BoKvp%2BYejFfstYW5fX4G%2FjhPeTBPkHwwWKePRZ39Tc06qdXZOOvjQXTe8Cc2kUnCU6DnnDIXKzqVBy%2Fg5XY8pYEBkCwkr3XJgl5%2BThUsndnk0QAUazRwMzBtdcro5pt4zNf6bz29u%2BH2rRcXWs%2Bb2ZmsrTaGqbHe8Rkj5nUQtNoWmSBQq9tn%2FiuSTBDXcKLUvQJGswYSCPvEbsl%2B9W09uZb%2FA0SuA9WqbzhiFjQlGsdiFTgpPSZpdyvGpp59UzpQB1jjp9CSZLtHJ0YfgyHBHC%2BQ4qFF3fgjgit%2FFdLtdJab2RSPkM60ZHe5dzVIELWTCmrK0B0EFX88RceedAYPOiVNjk3LYILG9IaNnyoYdLdWDbP6uNa%2BEo1EugzNoH0m6%2F1HB9SK02WM%2B2ghGOhv7PAa%2FlmBjHwkvYEvUiu5jb9ip3OVrIv7%2FXjqB%2BXB1JSOvEJAhcAWPjKfeNs5%2Fm6An%2Bhchr6lhoWk3LTD5upbEBjqkAc3hsZistxDZv4QmaF1MAHLzfFlgCt2dAPIT5RuE%2Bup362qghDvRsdaPadKGGzslMYRMWsqoWlmYsHnOkK2fbYBZGWCyXKpumylf%2FqsnqEbnZKLBhUiPLDk3lT3fxACak8ijGpXFVJmk%2BJoLvo%2BKW6lJvt2cpKHWpneb1j7DGcF4ZHhUDe8VhLRkG5XzMa%2FAdbW8ig8aq5LOtOtG8Np3WED1Pxle&X-Amz-Signature=6f1dfa245f02e6ba3970abd7202e6d0622617bfdbe03d341d5805e99b5cdda8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQPJ6EI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQC05ijukBbJxKHtCTIJb1b%2F31vCMsKL8zf6R18nsmHgjgIhAJgPfW3Zy%2FXrrS%2BmnT9xYt1yefmWF%2BL2EWxJ6wMePEWeKv8DCG0QABoMNjM3NDIzMTgzODA1Igx%2BLmf6r7eoKW9XNboq3AN7%2BVs94k3LY7Hqwm4KHHYxpqA4iVrE9UgprjXm7b6bQfeKr0WD5c7wJBwKX2Ctav91HEf9iTTmu04mzSuE5PK2IREaZNilE%2BIkK0ZgguFZF18lSDimL9MtRCjeSJipR5DgqkqLwMmS%2FxNoqyU6d%2BbaTI3%2BoKvp%2BYejFfstYW5fX4G%2FjhPeTBPkHwwWKePRZ39Tc06qdXZOOvjQXTe8Cc2kUnCU6DnnDIXKzqVBy%2Fg5XY8pYEBkCwkr3XJgl5%2BThUsndnk0QAUazRwMzBtdcro5pt4zNf6bz29u%2BH2rRcXWs%2Bb2ZmsrTaGqbHe8Rkj5nUQtNoWmSBQq9tn%2FiuSTBDXcKLUvQJGswYSCPvEbsl%2B9W09uZb%2FA0SuA9WqbzhiFjQlGsdiFTgpPSZpdyvGpp59UzpQB1jjp9CSZLtHJ0YfgyHBHC%2BQ4qFF3fgjgit%2FFdLtdJab2RSPkM60ZHe5dzVIELWTCmrK0B0EFX88RceedAYPOiVNjk3LYILG9IaNnyoYdLdWDbP6uNa%2BEo1EugzNoH0m6%2F1HB9SK02WM%2B2ghGOhv7PAa%2FlmBjHwkvYEvUiu5jb9ip3OVrIv7%2FXjqB%2BXB1JSOvEJAhcAWPjKfeNs5%2Fm6An%2Bhchr6lhoWk3LTD5upbEBjqkAc3hsZistxDZv4QmaF1MAHLzfFlgCt2dAPIT5RuE%2Bup362qghDvRsdaPadKGGzslMYRMWsqoWlmYsHnOkK2fbYBZGWCyXKpumylf%2FqsnqEbnZKLBhUiPLDk3lT3fxACak8ijGpXFVJmk%2BJoLvo%2BKW6lJvt2cpKHWpneb1j7DGcF4ZHhUDe8VhLRkG5XzMa%2FAdbW8ig8aq5LOtOtG8Np3WED1Pxle&X-Amz-Signature=0869505a154ad2f6f2c85f661141f3b24a25f60cf4348270a21b54f1d70b4417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQPJ6EI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQC05ijukBbJxKHtCTIJb1b%2F31vCMsKL8zf6R18nsmHgjgIhAJgPfW3Zy%2FXrrS%2BmnT9xYt1yefmWF%2BL2EWxJ6wMePEWeKv8DCG0QABoMNjM3NDIzMTgzODA1Igx%2BLmf6r7eoKW9XNboq3AN7%2BVs94k3LY7Hqwm4KHHYxpqA4iVrE9UgprjXm7b6bQfeKr0WD5c7wJBwKX2Ctav91HEf9iTTmu04mzSuE5PK2IREaZNilE%2BIkK0ZgguFZF18lSDimL9MtRCjeSJipR5DgqkqLwMmS%2FxNoqyU6d%2BbaTI3%2BoKvp%2BYejFfstYW5fX4G%2FjhPeTBPkHwwWKePRZ39Tc06qdXZOOvjQXTe8Cc2kUnCU6DnnDIXKzqVBy%2Fg5XY8pYEBkCwkr3XJgl5%2BThUsndnk0QAUazRwMzBtdcro5pt4zNf6bz29u%2BH2rRcXWs%2Bb2ZmsrTaGqbHe8Rkj5nUQtNoWmSBQq9tn%2FiuSTBDXcKLUvQJGswYSCPvEbsl%2B9W09uZb%2FA0SuA9WqbzhiFjQlGsdiFTgpPSZpdyvGpp59UzpQB1jjp9CSZLtHJ0YfgyHBHC%2BQ4qFF3fgjgit%2FFdLtdJab2RSPkM60ZHe5dzVIELWTCmrK0B0EFX88RceedAYPOiVNjk3LYILG9IaNnyoYdLdWDbP6uNa%2BEo1EugzNoH0m6%2F1HB9SK02WM%2B2ghGOhv7PAa%2FlmBjHwkvYEvUiu5jb9ip3OVrIv7%2FXjqB%2BXB1JSOvEJAhcAWPjKfeNs5%2Fm6An%2Bhchr6lhoWk3LTD5upbEBjqkAc3hsZistxDZv4QmaF1MAHLzfFlgCt2dAPIT5RuE%2Bup362qghDvRsdaPadKGGzslMYRMWsqoWlmYsHnOkK2fbYBZGWCyXKpumylf%2FqsnqEbnZKLBhUiPLDk3lT3fxACak8ijGpXFVJmk%2BJoLvo%2BKW6lJvt2cpKHWpneb1j7DGcF4ZHhUDe8VhLRkG5XzMa%2FAdbW8ig8aq5LOtOtG8Np3WED1Pxle&X-Amz-Signature=d3393e81438aecea470c199091e2e96d9faa4a59224a89ba9a0ec121b2d89682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQPJ6EI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQC05ijukBbJxKHtCTIJb1b%2F31vCMsKL8zf6R18nsmHgjgIhAJgPfW3Zy%2FXrrS%2BmnT9xYt1yefmWF%2BL2EWxJ6wMePEWeKv8DCG0QABoMNjM3NDIzMTgzODA1Igx%2BLmf6r7eoKW9XNboq3AN7%2BVs94k3LY7Hqwm4KHHYxpqA4iVrE9UgprjXm7b6bQfeKr0WD5c7wJBwKX2Ctav91HEf9iTTmu04mzSuE5PK2IREaZNilE%2BIkK0ZgguFZF18lSDimL9MtRCjeSJipR5DgqkqLwMmS%2FxNoqyU6d%2BbaTI3%2BoKvp%2BYejFfstYW5fX4G%2FjhPeTBPkHwwWKePRZ39Tc06qdXZOOvjQXTe8Cc2kUnCU6DnnDIXKzqVBy%2Fg5XY8pYEBkCwkr3XJgl5%2BThUsndnk0QAUazRwMzBtdcro5pt4zNf6bz29u%2BH2rRcXWs%2Bb2ZmsrTaGqbHe8Rkj5nUQtNoWmSBQq9tn%2FiuSTBDXcKLUvQJGswYSCPvEbsl%2B9W09uZb%2FA0SuA9WqbzhiFjQlGsdiFTgpPSZpdyvGpp59UzpQB1jjp9CSZLtHJ0YfgyHBHC%2BQ4qFF3fgjgit%2FFdLtdJab2RSPkM60ZHe5dzVIELWTCmrK0B0EFX88RceedAYPOiVNjk3LYILG9IaNnyoYdLdWDbP6uNa%2BEo1EugzNoH0m6%2F1HB9SK02WM%2B2ghGOhv7PAa%2FlmBjHwkvYEvUiu5jb9ip3OVrIv7%2FXjqB%2BXB1JSOvEJAhcAWPjKfeNs5%2Fm6An%2Bhchr6lhoWk3LTD5upbEBjqkAc3hsZistxDZv4QmaF1MAHLzfFlgCt2dAPIT5RuE%2Bup362qghDvRsdaPadKGGzslMYRMWsqoWlmYsHnOkK2fbYBZGWCyXKpumylf%2FqsnqEbnZKLBhUiPLDk3lT3fxACak8ijGpXFVJmk%2BJoLvo%2BKW6lJvt2cpKHWpneb1j7DGcF4ZHhUDe8VhLRkG5XzMa%2FAdbW8ig8aq5LOtOtG8Np3WED1Pxle&X-Amz-Signature=644087983bb9597bd36c191bd43bce78e3481250081aac628aac3b26536c2b1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQPJ6EI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQC05ijukBbJxKHtCTIJb1b%2F31vCMsKL8zf6R18nsmHgjgIhAJgPfW3Zy%2FXrrS%2BmnT9xYt1yefmWF%2BL2EWxJ6wMePEWeKv8DCG0QABoMNjM3NDIzMTgzODA1Igx%2BLmf6r7eoKW9XNboq3AN7%2BVs94k3LY7Hqwm4KHHYxpqA4iVrE9UgprjXm7b6bQfeKr0WD5c7wJBwKX2Ctav91HEf9iTTmu04mzSuE5PK2IREaZNilE%2BIkK0ZgguFZF18lSDimL9MtRCjeSJipR5DgqkqLwMmS%2FxNoqyU6d%2BbaTI3%2BoKvp%2BYejFfstYW5fX4G%2FjhPeTBPkHwwWKePRZ39Tc06qdXZOOvjQXTe8Cc2kUnCU6DnnDIXKzqVBy%2Fg5XY8pYEBkCwkr3XJgl5%2BThUsndnk0QAUazRwMzBtdcro5pt4zNf6bz29u%2BH2rRcXWs%2Bb2ZmsrTaGqbHe8Rkj5nUQtNoWmSBQq9tn%2FiuSTBDXcKLUvQJGswYSCPvEbsl%2B9W09uZb%2FA0SuA9WqbzhiFjQlGsdiFTgpPSZpdyvGpp59UzpQB1jjp9CSZLtHJ0YfgyHBHC%2BQ4qFF3fgjgit%2FFdLtdJab2RSPkM60ZHe5dzVIELWTCmrK0B0EFX88RceedAYPOiVNjk3LYILG9IaNnyoYdLdWDbP6uNa%2BEo1EugzNoH0m6%2F1HB9SK02WM%2B2ghGOhv7PAa%2FlmBjHwkvYEvUiu5jb9ip3OVrIv7%2FXjqB%2BXB1JSOvEJAhcAWPjKfeNs5%2Fm6An%2Bhchr6lhoWk3LTD5upbEBjqkAc3hsZistxDZv4QmaF1MAHLzfFlgCt2dAPIT5RuE%2Bup362qghDvRsdaPadKGGzslMYRMWsqoWlmYsHnOkK2fbYBZGWCyXKpumylf%2FqsnqEbnZKLBhUiPLDk3lT3fxACak8ijGpXFVJmk%2BJoLvo%2BKW6lJvt2cpKHWpneb1j7DGcF4ZHhUDe8VhLRkG5XzMa%2FAdbW8ig8aq5LOtOtG8Np3WED1Pxle&X-Amz-Signature=4da5d0fe89646e03260b1ee2d81c85008736f798692934622c4d98666d2a3bd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQPJ6EI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQC05ijukBbJxKHtCTIJb1b%2F31vCMsKL8zf6R18nsmHgjgIhAJgPfW3Zy%2FXrrS%2BmnT9xYt1yefmWF%2BL2EWxJ6wMePEWeKv8DCG0QABoMNjM3NDIzMTgzODA1Igx%2BLmf6r7eoKW9XNboq3AN7%2BVs94k3LY7Hqwm4KHHYxpqA4iVrE9UgprjXm7b6bQfeKr0WD5c7wJBwKX2Ctav91HEf9iTTmu04mzSuE5PK2IREaZNilE%2BIkK0ZgguFZF18lSDimL9MtRCjeSJipR5DgqkqLwMmS%2FxNoqyU6d%2BbaTI3%2BoKvp%2BYejFfstYW5fX4G%2FjhPeTBPkHwwWKePRZ39Tc06qdXZOOvjQXTe8Cc2kUnCU6DnnDIXKzqVBy%2Fg5XY8pYEBkCwkr3XJgl5%2BThUsndnk0QAUazRwMzBtdcro5pt4zNf6bz29u%2BH2rRcXWs%2Bb2ZmsrTaGqbHe8Rkj5nUQtNoWmSBQq9tn%2FiuSTBDXcKLUvQJGswYSCPvEbsl%2B9W09uZb%2FA0SuA9WqbzhiFjQlGsdiFTgpPSZpdyvGpp59UzpQB1jjp9CSZLtHJ0YfgyHBHC%2BQ4qFF3fgjgit%2FFdLtdJab2RSPkM60ZHe5dzVIELWTCmrK0B0EFX88RceedAYPOiVNjk3LYILG9IaNnyoYdLdWDbP6uNa%2BEo1EugzNoH0m6%2F1HB9SK02WM%2B2ghGOhv7PAa%2FlmBjHwkvYEvUiu5jb9ip3OVrIv7%2FXjqB%2BXB1JSOvEJAhcAWPjKfeNs5%2Fm6An%2Bhchr6lhoWk3LTD5upbEBjqkAc3hsZistxDZv4QmaF1MAHLzfFlgCt2dAPIT5RuE%2Bup362qghDvRsdaPadKGGzslMYRMWsqoWlmYsHnOkK2fbYBZGWCyXKpumylf%2FqsnqEbnZKLBhUiPLDk3lT3fxACak8ijGpXFVJmk%2BJoLvo%2BKW6lJvt2cpKHWpneb1j7DGcF4ZHhUDe8VhLRkG5XzMa%2FAdbW8ig8aq5LOtOtG8Np3WED1Pxle&X-Amz-Signature=ac75ea1bb343bca686042882944a12d7aa5d6e9b1c084444ddcf597ed7d87940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQPJ6EI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQC05ijukBbJxKHtCTIJb1b%2F31vCMsKL8zf6R18nsmHgjgIhAJgPfW3Zy%2FXrrS%2BmnT9xYt1yefmWF%2BL2EWxJ6wMePEWeKv8DCG0QABoMNjM3NDIzMTgzODA1Igx%2BLmf6r7eoKW9XNboq3AN7%2BVs94k3LY7Hqwm4KHHYxpqA4iVrE9UgprjXm7b6bQfeKr0WD5c7wJBwKX2Ctav91HEf9iTTmu04mzSuE5PK2IREaZNilE%2BIkK0ZgguFZF18lSDimL9MtRCjeSJipR5DgqkqLwMmS%2FxNoqyU6d%2BbaTI3%2BoKvp%2BYejFfstYW5fX4G%2FjhPeTBPkHwwWKePRZ39Tc06qdXZOOvjQXTe8Cc2kUnCU6DnnDIXKzqVBy%2Fg5XY8pYEBkCwkr3XJgl5%2BThUsndnk0QAUazRwMzBtdcro5pt4zNf6bz29u%2BH2rRcXWs%2Bb2ZmsrTaGqbHe8Rkj5nUQtNoWmSBQq9tn%2FiuSTBDXcKLUvQJGswYSCPvEbsl%2B9W09uZb%2FA0SuA9WqbzhiFjQlGsdiFTgpPSZpdyvGpp59UzpQB1jjp9CSZLtHJ0YfgyHBHC%2BQ4qFF3fgjgit%2FFdLtdJab2RSPkM60ZHe5dzVIELWTCmrK0B0EFX88RceedAYPOiVNjk3LYILG9IaNnyoYdLdWDbP6uNa%2BEo1EugzNoH0m6%2F1HB9SK02WM%2B2ghGOhv7PAa%2FlmBjHwkvYEvUiu5jb9ip3OVrIv7%2FXjqB%2BXB1JSOvEJAhcAWPjKfeNs5%2Fm6An%2Bhchr6lhoWk3LTD5upbEBjqkAc3hsZistxDZv4QmaF1MAHLzfFlgCt2dAPIT5RuE%2Bup362qghDvRsdaPadKGGzslMYRMWsqoWlmYsHnOkK2fbYBZGWCyXKpumylf%2FqsnqEbnZKLBhUiPLDk3lT3fxACak8ijGpXFVJmk%2BJoLvo%2BKW6lJvt2cpKHWpneb1j7DGcF4ZHhUDe8VhLRkG5XzMa%2FAdbW8ig8aq5LOtOtG8Np3WED1Pxle&X-Amz-Signature=071e65ba26144f95f0c6ac866be8975762cee2ad8f03ab826c00f0e5f700b2c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQPJ6EI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQC05ijukBbJxKHtCTIJb1b%2F31vCMsKL8zf6R18nsmHgjgIhAJgPfW3Zy%2FXrrS%2BmnT9xYt1yefmWF%2BL2EWxJ6wMePEWeKv8DCG0QABoMNjM3NDIzMTgzODA1Igx%2BLmf6r7eoKW9XNboq3AN7%2BVs94k3LY7Hqwm4KHHYxpqA4iVrE9UgprjXm7b6bQfeKr0WD5c7wJBwKX2Ctav91HEf9iTTmu04mzSuE5PK2IREaZNilE%2BIkK0ZgguFZF18lSDimL9MtRCjeSJipR5DgqkqLwMmS%2FxNoqyU6d%2BbaTI3%2BoKvp%2BYejFfstYW5fX4G%2FjhPeTBPkHwwWKePRZ39Tc06qdXZOOvjQXTe8Cc2kUnCU6DnnDIXKzqVBy%2Fg5XY8pYEBkCwkr3XJgl5%2BThUsndnk0QAUazRwMzBtdcro5pt4zNf6bz29u%2BH2rRcXWs%2Bb2ZmsrTaGqbHe8Rkj5nUQtNoWmSBQq9tn%2FiuSTBDXcKLUvQJGswYSCPvEbsl%2B9W09uZb%2FA0SuA9WqbzhiFjQlGsdiFTgpPSZpdyvGpp59UzpQB1jjp9CSZLtHJ0YfgyHBHC%2BQ4qFF3fgjgit%2FFdLtdJab2RSPkM60ZHe5dzVIELWTCmrK0B0EFX88RceedAYPOiVNjk3LYILG9IaNnyoYdLdWDbP6uNa%2BEo1EugzNoH0m6%2F1HB9SK02WM%2B2ghGOhv7PAa%2FlmBjHwkvYEvUiu5jb9ip3OVrIv7%2FXjqB%2BXB1JSOvEJAhcAWPjKfeNs5%2Fm6An%2Bhchr6lhoWk3LTD5upbEBjqkAc3hsZistxDZv4QmaF1MAHLzfFlgCt2dAPIT5RuE%2Bup362qghDvRsdaPadKGGzslMYRMWsqoWlmYsHnOkK2fbYBZGWCyXKpumylf%2FqsnqEbnZKLBhUiPLDk3lT3fxACak8ijGpXFVJmk%2BJoLvo%2BKW6lJvt2cpKHWpneb1j7DGcF4ZHhUDe8VhLRkG5XzMa%2FAdbW8ig8aq5LOtOtG8Np3WED1Pxle&X-Amz-Signature=da055c85cd3f98d9bdbc65e0c9ccfe2ff9c42da2c858b3d8b9e6439fd9cdd44e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQPJ6EI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQC05ijukBbJxKHtCTIJb1b%2F31vCMsKL8zf6R18nsmHgjgIhAJgPfW3Zy%2FXrrS%2BmnT9xYt1yefmWF%2BL2EWxJ6wMePEWeKv8DCG0QABoMNjM3NDIzMTgzODA1Igx%2BLmf6r7eoKW9XNboq3AN7%2BVs94k3LY7Hqwm4KHHYxpqA4iVrE9UgprjXm7b6bQfeKr0WD5c7wJBwKX2Ctav91HEf9iTTmu04mzSuE5PK2IREaZNilE%2BIkK0ZgguFZF18lSDimL9MtRCjeSJipR5DgqkqLwMmS%2FxNoqyU6d%2BbaTI3%2BoKvp%2BYejFfstYW5fX4G%2FjhPeTBPkHwwWKePRZ39Tc06qdXZOOvjQXTe8Cc2kUnCU6DnnDIXKzqVBy%2Fg5XY8pYEBkCwkr3XJgl5%2BThUsndnk0QAUazRwMzBtdcro5pt4zNf6bz29u%2BH2rRcXWs%2Bb2ZmsrTaGqbHe8Rkj5nUQtNoWmSBQq9tn%2FiuSTBDXcKLUvQJGswYSCPvEbsl%2B9W09uZb%2FA0SuA9WqbzhiFjQlGsdiFTgpPSZpdyvGpp59UzpQB1jjp9CSZLtHJ0YfgyHBHC%2BQ4qFF3fgjgit%2FFdLtdJab2RSPkM60ZHe5dzVIELWTCmrK0B0EFX88RceedAYPOiVNjk3LYILG9IaNnyoYdLdWDbP6uNa%2BEo1EugzNoH0m6%2F1HB9SK02WM%2B2ghGOhv7PAa%2FlmBjHwkvYEvUiu5jb9ip3OVrIv7%2FXjqB%2BXB1JSOvEJAhcAWPjKfeNs5%2Fm6An%2Bhchr6lhoWk3LTD5upbEBjqkAc3hsZistxDZv4QmaF1MAHLzfFlgCt2dAPIT5RuE%2Bup362qghDvRsdaPadKGGzslMYRMWsqoWlmYsHnOkK2fbYBZGWCyXKpumylf%2FqsnqEbnZKLBhUiPLDk3lT3fxACak8ijGpXFVJmk%2BJoLvo%2BKW6lJvt2cpKHWpneb1j7DGcF4ZHhUDe8VhLRkG5XzMa%2FAdbW8ig8aq5LOtOtG8Np3WED1Pxle&X-Amz-Signature=64931302a73107a1e4c4c55d791edf974482670facce3cb6574e1e1cabdfc5b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM5EDXWV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD0bBWWltJrHRXGDEwpxSZIIGDpPH6VKj%2Fk%2BE%2BPaB7OpgIgDwYJLNuuz9bln4JWc6qr5GZt6nQ4Pu%2FsrkP9cP3Pd%2Fsq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHi99yg3C8%2FX4XCHjircAwNoxn6Voad8VnG0ukijxUwYHYXwp8Fl9jr%2FSbitOF6idxXbejhJpAAKLJmzrrJ6qTiKpg9SwARdc4jwHhXnrdJChbd0DeWiIMU1h6TXNTne2Z1Yvvjd9YpU5GnCglhVZlwHPXjdtL7QygTIhMRm9PBgmOPgFxNzWwStiS6ht5AV15gLJoIYvJPP4ur%2B6Vqokdu5JpD0Uqdyfxi6%2FwPO9D13b202IJRYfziaIqqT5C9EJJQVdhN%2Fx1yAIJHRnztoJp61jJY3l25Q1BGr7cxGb6zzMbM0NoZWw5tAjNka3xoabl00MgoJdRg15Slrww4EQkTJIeXPRH97vzVrWnB6Muo32QM8S1%2B5AGiiRqWzjoYIu%2FWpF19OQY2sS5XY7RSkMhLUnSnOOo9B045V6MbDohDRSCS%2B4EoUjlJzrJRHA3Mnz1cX%2FAxzBms5v5RaiYosjIVsu8akFAP2JHzd%2BUo8WqaMZL2T7qLZqWHrZny7ERcYhbCV72OJMEGTrmOMn%2B2cSq%2BNMCdf6JJPGvEwYrXMU3tCHAxzdKG8yiTVek6ZXm%2FAcbIfpVQDboKrliKqYGb7lcvulBbQ%2B0IVnSyZCqgtwULKsIPIKPoIA7Tz6%2B42XUTE%2BXML%2B13ZEJC6AMX4MNG6lsQGOqUBAcrhOLmohdW0Eqd9ZxuOGHhG1zUBh1ubnAcXsFJ9rBrLgVT%2BIHrCyYM71r4nX5mCHS4alZIU5%2B9YOW%2FfT%2BjesuNgDCuyEd6IlrdF2vzF7p557ecGyNjgK8RFHQA6N8nSAclRvF6YNDS68%2Bf9NO8EVP8mKhERFiTZWYKhMwjTd48KHU%2FKv6kkIrvTMyVvhoeY%2F03gfsIVfiudYgSApE0%2BWCDbpnKt&X-Amz-Signature=80094c95bb129cf396d50028acf0a33affd8332bd3c579a563b209921ad3f9f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQPJ6EI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQC05ijukBbJxKHtCTIJb1b%2F31vCMsKL8zf6R18nsmHgjgIhAJgPfW3Zy%2FXrrS%2BmnT9xYt1yefmWF%2BL2EWxJ6wMePEWeKv8DCG0QABoMNjM3NDIzMTgzODA1Igx%2BLmf6r7eoKW9XNboq3AN7%2BVs94k3LY7Hqwm4KHHYxpqA4iVrE9UgprjXm7b6bQfeKr0WD5c7wJBwKX2Ctav91HEf9iTTmu04mzSuE5PK2IREaZNilE%2BIkK0ZgguFZF18lSDimL9MtRCjeSJipR5DgqkqLwMmS%2FxNoqyU6d%2BbaTI3%2BoKvp%2BYejFfstYW5fX4G%2FjhPeTBPkHwwWKePRZ39Tc06qdXZOOvjQXTe8Cc2kUnCU6DnnDIXKzqVBy%2Fg5XY8pYEBkCwkr3XJgl5%2BThUsndnk0QAUazRwMzBtdcro5pt4zNf6bz29u%2BH2rRcXWs%2Bb2ZmsrTaGqbHe8Rkj5nUQtNoWmSBQq9tn%2FiuSTBDXcKLUvQJGswYSCPvEbsl%2B9W09uZb%2FA0SuA9WqbzhiFjQlGsdiFTgpPSZpdyvGpp59UzpQB1jjp9CSZLtHJ0YfgyHBHC%2BQ4qFF3fgjgit%2FFdLtdJab2RSPkM60ZHe5dzVIELWTCmrK0B0EFX88RceedAYPOiVNjk3LYILG9IaNnyoYdLdWDbP6uNa%2BEo1EugzNoH0m6%2F1HB9SK02WM%2B2ghGOhv7PAa%2FlmBjHwkvYEvUiu5jb9ip3OVrIv7%2FXjqB%2BXB1JSOvEJAhcAWPjKfeNs5%2Fm6An%2Bhchr6lhoWk3LTD5upbEBjqkAc3hsZistxDZv4QmaF1MAHLzfFlgCt2dAPIT5RuE%2Bup362qghDvRsdaPadKGGzslMYRMWsqoWlmYsHnOkK2fbYBZGWCyXKpumylf%2FqsnqEbnZKLBhUiPLDk3lT3fxACak8ijGpXFVJmk%2BJoLvo%2BKW6lJvt2cpKHWpneb1j7DGcF4ZHhUDe8VhLRkG5XzMa%2FAdbW8ig8aq5LOtOtG8Np3WED1Pxle&X-Amz-Signature=7c52dccee487a6bf33289930a7d5a2287163774c2e2438f867a2742b9c58a003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NINV3TJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDAXxul8UyGQSREA6XwW6KVymh7Q3lfVPeOS0bvAVDgpAIgIBp5u7uSbIGiy29vE5DUwR73fus%2BUrmXdaCGDPEuQhQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDE5i%2Bg%2BIjSl3cSg4uircA9JvCBlJ0kEh5TC%2FlWxvFwkF0rNRj%2B2AVVxqrYNNslDl1E8VveL4wxPvl6r9t%2BlqNwFUhy9mvXR8Pu2fGC2rW7ECu%2FAMEyVfkDRc7ubsGlY%2Fvoj6xlW9kBkIcd8vjqzlhm3HTSF4q%2FsOfJ5eRrL0tMiB7%2B5XapBcEc7s3FPJlNIFlE1f8xjyVLG7lzhMEz5zEWLGib%2FJ%2BAsJNz7qm2ooDi2gj0LB9uyqxcSkAYhWjCXl4VNQKNSxw%2FhK9I3yZ6MMPG97Pmqk2jPhdXjjmF5wIcSd%2BbWAoXg2Rw7F4sks3n5xL0okV6cfy7DxG2ISS04BHVj2fo%2FyW%2Felv1yQ357D6Fhk%2BcAEFczBX5RNTVXMMIUmoG62ysZDIfWqAr5FlyykgUyMDleduDbog3rT2UlnjDS%2Bf%2BEp2PnIM0vnE9sWokKvu5djLeYlWWI7X9%2FiK2QoX44AnIeGIsPeHnSv1hGwQ9jxvuSpRDImI3BiZetJlsuV1nm4649Vsa0%2Bw50H22XdsVjqMabvpQsITGDfT5vJC5JajEA6%2FIBFXW6cx8AmJhkudOVkiPf564Npryqf0MiIjUULe2kcF81ZmPSy1DXlDp%2Fb%2FIuhxnZ4HUDG2FzNbrVKreksKwYG%2B1zpghnIMLy7lsQGOqUBG1ZtiyXoZQ%2BHyYutRs607yiHamubcTFupuu6AUc2r6KhVgvIS9S99H61V%2FpKULuD05sXGbUTccZ8awdwB2636Rh0rNbJx9a9zQbSEo7aiQtUmL4Xc%2BuOnWJRjrnGsoQ%2BSeodqH5c0SB5Q5EBgHKTZmCoBtk6u9CgZNRarrsC%2BNyDHqsKe5WCgmMAYNZx5nicQicUYfeRjJt4YuvYkCqBmkI40Cmr&X-Amz-Signature=af9c4014915b3217fdd551e51093f21dd9cf4d140c9d326ddd1ce14888208019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NINV3TJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDAXxul8UyGQSREA6XwW6KVymh7Q3lfVPeOS0bvAVDgpAIgIBp5u7uSbIGiy29vE5DUwR73fus%2BUrmXdaCGDPEuQhQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDE5i%2Bg%2BIjSl3cSg4uircA9JvCBlJ0kEh5TC%2FlWxvFwkF0rNRj%2B2AVVxqrYNNslDl1E8VveL4wxPvl6r9t%2BlqNwFUhy9mvXR8Pu2fGC2rW7ECu%2FAMEyVfkDRc7ubsGlY%2Fvoj6xlW9kBkIcd8vjqzlhm3HTSF4q%2FsOfJ5eRrL0tMiB7%2B5XapBcEc7s3FPJlNIFlE1f8xjyVLG7lzhMEz5zEWLGib%2FJ%2BAsJNz7qm2ooDi2gj0LB9uyqxcSkAYhWjCXl4VNQKNSxw%2FhK9I3yZ6MMPG97Pmqk2jPhdXjjmF5wIcSd%2BbWAoXg2Rw7F4sks3n5xL0okV6cfy7DxG2ISS04BHVj2fo%2FyW%2Felv1yQ357D6Fhk%2BcAEFczBX5RNTVXMMIUmoG62ysZDIfWqAr5FlyykgUyMDleduDbog3rT2UlnjDS%2Bf%2BEp2PnIM0vnE9sWokKvu5djLeYlWWI7X9%2FiK2QoX44AnIeGIsPeHnSv1hGwQ9jxvuSpRDImI3BiZetJlsuV1nm4649Vsa0%2Bw50H22XdsVjqMabvpQsITGDfT5vJC5JajEA6%2FIBFXW6cx8AmJhkudOVkiPf564Npryqf0MiIjUULe2kcF81ZmPSy1DXlDp%2Fb%2FIuhxnZ4HUDG2FzNbrVKreksKwYG%2B1zpghnIMLy7lsQGOqUBG1ZtiyXoZQ%2BHyYutRs607yiHamubcTFupuu6AUc2r6KhVgvIS9S99H61V%2FpKULuD05sXGbUTccZ8awdwB2636Rh0rNbJx9a9zQbSEo7aiQtUmL4Xc%2BuOnWJRjrnGsoQ%2BSeodqH5c0SB5Q5EBgHKTZmCoBtk6u9CgZNRarrsC%2BNyDHqsKe5WCgmMAYNZx5nicQicUYfeRjJt4YuvYkCqBmkI40Cmr&X-Amz-Signature=50cfbefc29ed0fdac61a25c632048797d11a3d70c537b660936ddd1b5f199afe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NINV3TJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDAXxul8UyGQSREA6XwW6KVymh7Q3lfVPeOS0bvAVDgpAIgIBp5u7uSbIGiy29vE5DUwR73fus%2BUrmXdaCGDPEuQhQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDE5i%2Bg%2BIjSl3cSg4uircA9JvCBlJ0kEh5TC%2FlWxvFwkF0rNRj%2B2AVVxqrYNNslDl1E8VveL4wxPvl6r9t%2BlqNwFUhy9mvXR8Pu2fGC2rW7ECu%2FAMEyVfkDRc7ubsGlY%2Fvoj6xlW9kBkIcd8vjqzlhm3HTSF4q%2FsOfJ5eRrL0tMiB7%2B5XapBcEc7s3FPJlNIFlE1f8xjyVLG7lzhMEz5zEWLGib%2FJ%2BAsJNz7qm2ooDi2gj0LB9uyqxcSkAYhWjCXl4VNQKNSxw%2FhK9I3yZ6MMPG97Pmqk2jPhdXjjmF5wIcSd%2BbWAoXg2Rw7F4sks3n5xL0okV6cfy7DxG2ISS04BHVj2fo%2FyW%2Felv1yQ357D6Fhk%2BcAEFczBX5RNTVXMMIUmoG62ysZDIfWqAr5FlyykgUyMDleduDbog3rT2UlnjDS%2Bf%2BEp2PnIM0vnE9sWokKvu5djLeYlWWI7X9%2FiK2QoX44AnIeGIsPeHnSv1hGwQ9jxvuSpRDImI3BiZetJlsuV1nm4649Vsa0%2Bw50H22XdsVjqMabvpQsITGDfT5vJC5JajEA6%2FIBFXW6cx8AmJhkudOVkiPf564Npryqf0MiIjUULe2kcF81ZmPSy1DXlDp%2Fb%2FIuhxnZ4HUDG2FzNbrVKreksKwYG%2B1zpghnIMLy7lsQGOqUBG1ZtiyXoZQ%2BHyYutRs607yiHamubcTFupuu6AUc2r6KhVgvIS9S99H61V%2FpKULuD05sXGbUTccZ8awdwB2636Rh0rNbJx9a9zQbSEo7aiQtUmL4Xc%2BuOnWJRjrnGsoQ%2BSeodqH5c0SB5Q5EBgHKTZmCoBtk6u9CgZNRarrsC%2BNyDHqsKe5WCgmMAYNZx5nicQicUYfeRjJt4YuvYkCqBmkI40Cmr&X-Amz-Signature=61554054e842751cb67d37159a956a38ca5da6e44ef605070d946ba94de11233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NINV3TJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDAXxul8UyGQSREA6XwW6KVymh7Q3lfVPeOS0bvAVDgpAIgIBp5u7uSbIGiy29vE5DUwR73fus%2BUrmXdaCGDPEuQhQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDE5i%2Bg%2BIjSl3cSg4uircA9JvCBlJ0kEh5TC%2FlWxvFwkF0rNRj%2B2AVVxqrYNNslDl1E8VveL4wxPvl6r9t%2BlqNwFUhy9mvXR8Pu2fGC2rW7ECu%2FAMEyVfkDRc7ubsGlY%2Fvoj6xlW9kBkIcd8vjqzlhm3HTSF4q%2FsOfJ5eRrL0tMiB7%2B5XapBcEc7s3FPJlNIFlE1f8xjyVLG7lzhMEz5zEWLGib%2FJ%2BAsJNz7qm2ooDi2gj0LB9uyqxcSkAYhWjCXl4VNQKNSxw%2FhK9I3yZ6MMPG97Pmqk2jPhdXjjmF5wIcSd%2BbWAoXg2Rw7F4sks3n5xL0okV6cfy7DxG2ISS04BHVj2fo%2FyW%2Felv1yQ357D6Fhk%2BcAEFczBX5RNTVXMMIUmoG62ysZDIfWqAr5FlyykgUyMDleduDbog3rT2UlnjDS%2Bf%2BEp2PnIM0vnE9sWokKvu5djLeYlWWI7X9%2FiK2QoX44AnIeGIsPeHnSv1hGwQ9jxvuSpRDImI3BiZetJlsuV1nm4649Vsa0%2Bw50H22XdsVjqMabvpQsITGDfT5vJC5JajEA6%2FIBFXW6cx8AmJhkudOVkiPf564Npryqf0MiIjUULe2kcF81ZmPSy1DXlDp%2Fb%2FIuhxnZ4HUDG2FzNbrVKreksKwYG%2B1zpghnIMLy7lsQGOqUBG1ZtiyXoZQ%2BHyYutRs607yiHamubcTFupuu6AUc2r6KhVgvIS9S99H61V%2FpKULuD05sXGbUTccZ8awdwB2636Rh0rNbJx9a9zQbSEo7aiQtUmL4Xc%2BuOnWJRjrnGsoQ%2BSeodqH5c0SB5Q5EBgHKTZmCoBtk6u9CgZNRarrsC%2BNyDHqsKe5WCgmMAYNZx5nicQicUYfeRjJt4YuvYkCqBmkI40Cmr&X-Amz-Signature=9d1ded83ba74a9293dbaf48378ec337acb8a633c9f10d381ffab3170447533b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NINV3TJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDAXxul8UyGQSREA6XwW6KVymh7Q3lfVPeOS0bvAVDgpAIgIBp5u7uSbIGiy29vE5DUwR73fus%2BUrmXdaCGDPEuQhQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDE5i%2Bg%2BIjSl3cSg4uircA9JvCBlJ0kEh5TC%2FlWxvFwkF0rNRj%2B2AVVxqrYNNslDl1E8VveL4wxPvl6r9t%2BlqNwFUhy9mvXR8Pu2fGC2rW7ECu%2FAMEyVfkDRc7ubsGlY%2Fvoj6xlW9kBkIcd8vjqzlhm3HTSF4q%2FsOfJ5eRrL0tMiB7%2B5XapBcEc7s3FPJlNIFlE1f8xjyVLG7lzhMEz5zEWLGib%2FJ%2BAsJNz7qm2ooDi2gj0LB9uyqxcSkAYhWjCXl4VNQKNSxw%2FhK9I3yZ6MMPG97Pmqk2jPhdXjjmF5wIcSd%2BbWAoXg2Rw7F4sks3n5xL0okV6cfy7DxG2ISS04BHVj2fo%2FyW%2Felv1yQ357D6Fhk%2BcAEFczBX5RNTVXMMIUmoG62ysZDIfWqAr5FlyykgUyMDleduDbog3rT2UlnjDS%2Bf%2BEp2PnIM0vnE9sWokKvu5djLeYlWWI7X9%2FiK2QoX44AnIeGIsPeHnSv1hGwQ9jxvuSpRDImI3BiZetJlsuV1nm4649Vsa0%2Bw50H22XdsVjqMabvpQsITGDfT5vJC5JajEA6%2FIBFXW6cx8AmJhkudOVkiPf564Npryqf0MiIjUULe2kcF81ZmPSy1DXlDp%2Fb%2FIuhxnZ4HUDG2FzNbrVKreksKwYG%2B1zpghnIMLy7lsQGOqUBG1ZtiyXoZQ%2BHyYutRs607yiHamubcTFupuu6AUc2r6KhVgvIS9S99H61V%2FpKULuD05sXGbUTccZ8awdwB2636Rh0rNbJx9a9zQbSEo7aiQtUmL4Xc%2BuOnWJRjrnGsoQ%2BSeodqH5c0SB5Q5EBgHKTZmCoBtk6u9CgZNRarrsC%2BNyDHqsKe5WCgmMAYNZx5nicQicUYfeRjJt4YuvYkCqBmkI40Cmr&X-Amz-Signature=6a27505215ebbc865d39a5b07d87920bf4a849c9f8578d3455a22a15b4315899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NINV3TJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDAXxul8UyGQSREA6XwW6KVymh7Q3lfVPeOS0bvAVDgpAIgIBp5u7uSbIGiy29vE5DUwR73fus%2BUrmXdaCGDPEuQhQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDE5i%2Bg%2BIjSl3cSg4uircA9JvCBlJ0kEh5TC%2FlWxvFwkF0rNRj%2B2AVVxqrYNNslDl1E8VveL4wxPvl6r9t%2BlqNwFUhy9mvXR8Pu2fGC2rW7ECu%2FAMEyVfkDRc7ubsGlY%2Fvoj6xlW9kBkIcd8vjqzlhm3HTSF4q%2FsOfJ5eRrL0tMiB7%2B5XapBcEc7s3FPJlNIFlE1f8xjyVLG7lzhMEz5zEWLGib%2FJ%2BAsJNz7qm2ooDi2gj0LB9uyqxcSkAYhWjCXl4VNQKNSxw%2FhK9I3yZ6MMPG97Pmqk2jPhdXjjmF5wIcSd%2BbWAoXg2Rw7F4sks3n5xL0okV6cfy7DxG2ISS04BHVj2fo%2FyW%2Felv1yQ357D6Fhk%2BcAEFczBX5RNTVXMMIUmoG62ysZDIfWqAr5FlyykgUyMDleduDbog3rT2UlnjDS%2Bf%2BEp2PnIM0vnE9sWokKvu5djLeYlWWI7X9%2FiK2QoX44AnIeGIsPeHnSv1hGwQ9jxvuSpRDImI3BiZetJlsuV1nm4649Vsa0%2Bw50H22XdsVjqMabvpQsITGDfT5vJC5JajEA6%2FIBFXW6cx8AmJhkudOVkiPf564Npryqf0MiIjUULe2kcF81ZmPSy1DXlDp%2Fb%2FIuhxnZ4HUDG2FzNbrVKreksKwYG%2B1zpghnIMLy7lsQGOqUBG1ZtiyXoZQ%2BHyYutRs607yiHamubcTFupuu6AUc2r6KhVgvIS9S99H61V%2FpKULuD05sXGbUTccZ8awdwB2636Rh0rNbJx9a9zQbSEo7aiQtUmL4Xc%2BuOnWJRjrnGsoQ%2BSeodqH5c0SB5Q5EBgHKTZmCoBtk6u9CgZNRarrsC%2BNyDHqsKe5WCgmMAYNZx5nicQicUYfeRjJt4YuvYkCqBmkI40Cmr&X-Amz-Signature=3a0b8084869371cc920c9f4d22e577cccba2766218da5cd0c6451b6d1f6d5f6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NINV3TJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDAXxul8UyGQSREA6XwW6KVymh7Q3lfVPeOS0bvAVDgpAIgIBp5u7uSbIGiy29vE5DUwR73fus%2BUrmXdaCGDPEuQhQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDE5i%2Bg%2BIjSl3cSg4uircA9JvCBlJ0kEh5TC%2FlWxvFwkF0rNRj%2B2AVVxqrYNNslDl1E8VveL4wxPvl6r9t%2BlqNwFUhy9mvXR8Pu2fGC2rW7ECu%2FAMEyVfkDRc7ubsGlY%2Fvoj6xlW9kBkIcd8vjqzlhm3HTSF4q%2FsOfJ5eRrL0tMiB7%2B5XapBcEc7s3FPJlNIFlE1f8xjyVLG7lzhMEz5zEWLGib%2FJ%2BAsJNz7qm2ooDi2gj0LB9uyqxcSkAYhWjCXl4VNQKNSxw%2FhK9I3yZ6MMPG97Pmqk2jPhdXjjmF5wIcSd%2BbWAoXg2Rw7F4sks3n5xL0okV6cfy7DxG2ISS04BHVj2fo%2FyW%2Felv1yQ357D6Fhk%2BcAEFczBX5RNTVXMMIUmoG62ysZDIfWqAr5FlyykgUyMDleduDbog3rT2UlnjDS%2Bf%2BEp2PnIM0vnE9sWokKvu5djLeYlWWI7X9%2FiK2QoX44AnIeGIsPeHnSv1hGwQ9jxvuSpRDImI3BiZetJlsuV1nm4649Vsa0%2Bw50H22XdsVjqMabvpQsITGDfT5vJC5JajEA6%2FIBFXW6cx8AmJhkudOVkiPf564Npryqf0MiIjUULe2kcF81ZmPSy1DXlDp%2Fb%2FIuhxnZ4HUDG2FzNbrVKreksKwYG%2B1zpghnIMLy7lsQGOqUBG1ZtiyXoZQ%2BHyYutRs607yiHamubcTFupuu6AUc2r6KhVgvIS9S99H61V%2FpKULuD05sXGbUTccZ8awdwB2636Rh0rNbJx9a9zQbSEo7aiQtUmL4Xc%2BuOnWJRjrnGsoQ%2BSeodqH5c0SB5Q5EBgHKTZmCoBtk6u9CgZNRarrsC%2BNyDHqsKe5WCgmMAYNZx5nicQicUYfeRjJt4YuvYkCqBmkI40Cmr&X-Amz-Signature=67e70dea792b3022d9f7cf638449e971b23b8a98d43f9ed928f6dc14760929be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
