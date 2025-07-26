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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKHH3IBL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDdpr0zZXEkxxPHQW8geAhX7hEgoX36IQzCA40XsKyh0gIgGJdVOwOjTqa5YYO4w2h%2FuzJLOfX49ppt5yw6pKEP1yMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDKjk%2B7qXBk%2BK7DTp8CrcA4MtQtTVsFdDmbCtiAcqB%2BJO41RmeA3uXXgmzjrm04d2BeKjHoZB69EsWSuVFYjle22gRpEKJ%2FXFr5g1wPakTRrHZYOPdImb8WEcNe8AwsZdhMJ1ZiEkqlbxh6Cozd0yicdtY1BdUvEzW8ihcTx1MO%2FwEmJN5fg3i26Ky23%2B31qnkUrJPEq%2BIC%2F1eKMvUBtBnhPaEFYxsVAIgDeJmTVxdPI6pvFT9cHkVfhEv5d8XqV3fBqHy3JIr6DvL4i5MnMse%2FVmqFBM0ICvnSoRIIqASYne6lvuK8%2Fj2344Nbnn6sPjJDcKYm7BsuCtjjkQtFpQk%2FTuwKM%2F8MMfvNGGAsJVnCt8I52JLL3M4L55WzOrbeLMUUnP4tUhllI6LHPEfUKpxqCIvjMkKkRf9OoLI0cqwHLwXODDH6SpXljvm7cyzS4Bb%2B5BfElf0nJoJFpFjHxw6pwjD3z%2FW7TYnv3Uj0WrQ4Zo%2FtlYhNSIvoq8IPzO%2FNvuJ2sUiSTEXAX%2Bk10XBPS2LLI9dAxj1VKTAWjJC3S9EYjdkOY9Boz0%2FueLw%2FxsLfRVY60fXAtk5PEIcTMdlsPAf2Zk%2BzE0O31ugs6SeG77UDxirdUNeJL1xvQwZ4HrdQLu90E1t3d%2FCQvZw5yrMNqrksQGOqUBAJTaz%2B1BG5OW1GvbD4rVJuGpJkrAvQ%2BbbEOdbi8d10CXTmUSq8ow0FmBN0qcP5HGmRdFXD%2BXhHo7taI8MhqIvUKI5O1bVB8PlUILDnhxSvcnT36VHWJiU0yRc9miTJdfG2AmKquH17i1uU%2B4I5wCMBQkjwinSouEQ7cMg1RX7T3kVjBDceusU0dcPhhDJi7ujsaBja6iLwhtzc17mEiRlxexGU6E&X-Amz-Signature=21b6922348e7a6f94819d0f56aa09138f38daec69d6a81458e4087f7cbdc2e10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKHH3IBL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDdpr0zZXEkxxPHQW8geAhX7hEgoX36IQzCA40XsKyh0gIgGJdVOwOjTqa5YYO4w2h%2FuzJLOfX49ppt5yw6pKEP1yMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDKjk%2B7qXBk%2BK7DTp8CrcA4MtQtTVsFdDmbCtiAcqB%2BJO41RmeA3uXXgmzjrm04d2BeKjHoZB69EsWSuVFYjle22gRpEKJ%2FXFr5g1wPakTRrHZYOPdImb8WEcNe8AwsZdhMJ1ZiEkqlbxh6Cozd0yicdtY1BdUvEzW8ihcTx1MO%2FwEmJN5fg3i26Ky23%2B31qnkUrJPEq%2BIC%2F1eKMvUBtBnhPaEFYxsVAIgDeJmTVxdPI6pvFT9cHkVfhEv5d8XqV3fBqHy3JIr6DvL4i5MnMse%2FVmqFBM0ICvnSoRIIqASYne6lvuK8%2Fj2344Nbnn6sPjJDcKYm7BsuCtjjkQtFpQk%2FTuwKM%2F8MMfvNGGAsJVnCt8I52JLL3M4L55WzOrbeLMUUnP4tUhllI6LHPEfUKpxqCIvjMkKkRf9OoLI0cqwHLwXODDH6SpXljvm7cyzS4Bb%2B5BfElf0nJoJFpFjHxw6pwjD3z%2FW7TYnv3Uj0WrQ4Zo%2FtlYhNSIvoq8IPzO%2FNvuJ2sUiSTEXAX%2Bk10XBPS2LLI9dAxj1VKTAWjJC3S9EYjdkOY9Boz0%2FueLw%2FxsLfRVY60fXAtk5PEIcTMdlsPAf2Zk%2BzE0O31ugs6SeG77UDxirdUNeJL1xvQwZ4HrdQLu90E1t3d%2FCQvZw5yrMNqrksQGOqUBAJTaz%2B1BG5OW1GvbD4rVJuGpJkrAvQ%2BbbEOdbi8d10CXTmUSq8ow0FmBN0qcP5HGmRdFXD%2BXhHo7taI8MhqIvUKI5O1bVB8PlUILDnhxSvcnT36VHWJiU0yRc9miTJdfG2AmKquH17i1uU%2B4I5wCMBQkjwinSouEQ7cMg1RX7T3kVjBDceusU0dcPhhDJi7ujsaBja6iLwhtzc17mEiRlxexGU6E&X-Amz-Signature=951d16889f62d9536ad900afaab32434186eaf2c1efd68175872cad030c5f42e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKHH3IBL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDdpr0zZXEkxxPHQW8geAhX7hEgoX36IQzCA40XsKyh0gIgGJdVOwOjTqa5YYO4w2h%2FuzJLOfX49ppt5yw6pKEP1yMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDKjk%2B7qXBk%2BK7DTp8CrcA4MtQtTVsFdDmbCtiAcqB%2BJO41RmeA3uXXgmzjrm04d2BeKjHoZB69EsWSuVFYjle22gRpEKJ%2FXFr5g1wPakTRrHZYOPdImb8WEcNe8AwsZdhMJ1ZiEkqlbxh6Cozd0yicdtY1BdUvEzW8ihcTx1MO%2FwEmJN5fg3i26Ky23%2B31qnkUrJPEq%2BIC%2F1eKMvUBtBnhPaEFYxsVAIgDeJmTVxdPI6pvFT9cHkVfhEv5d8XqV3fBqHy3JIr6DvL4i5MnMse%2FVmqFBM0ICvnSoRIIqASYne6lvuK8%2Fj2344Nbnn6sPjJDcKYm7BsuCtjjkQtFpQk%2FTuwKM%2F8MMfvNGGAsJVnCt8I52JLL3M4L55WzOrbeLMUUnP4tUhllI6LHPEfUKpxqCIvjMkKkRf9OoLI0cqwHLwXODDH6SpXljvm7cyzS4Bb%2B5BfElf0nJoJFpFjHxw6pwjD3z%2FW7TYnv3Uj0WrQ4Zo%2FtlYhNSIvoq8IPzO%2FNvuJ2sUiSTEXAX%2Bk10XBPS2LLI9dAxj1VKTAWjJC3S9EYjdkOY9Boz0%2FueLw%2FxsLfRVY60fXAtk5PEIcTMdlsPAf2Zk%2BzE0O31ugs6SeG77UDxirdUNeJL1xvQwZ4HrdQLu90E1t3d%2FCQvZw5yrMNqrksQGOqUBAJTaz%2B1BG5OW1GvbD4rVJuGpJkrAvQ%2BbbEOdbi8d10CXTmUSq8ow0FmBN0qcP5HGmRdFXD%2BXhHo7taI8MhqIvUKI5O1bVB8PlUILDnhxSvcnT36VHWJiU0yRc9miTJdfG2AmKquH17i1uU%2B4I5wCMBQkjwinSouEQ7cMg1RX7T3kVjBDceusU0dcPhhDJi7ujsaBja6iLwhtzc17mEiRlxexGU6E&X-Amz-Signature=6a64cfe01c51aa6170656fda10c00b0a26249f02dfbfc0ad55d7b4a4fdd8af0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKHH3IBL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDdpr0zZXEkxxPHQW8geAhX7hEgoX36IQzCA40XsKyh0gIgGJdVOwOjTqa5YYO4w2h%2FuzJLOfX49ppt5yw6pKEP1yMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDKjk%2B7qXBk%2BK7DTp8CrcA4MtQtTVsFdDmbCtiAcqB%2BJO41RmeA3uXXgmzjrm04d2BeKjHoZB69EsWSuVFYjle22gRpEKJ%2FXFr5g1wPakTRrHZYOPdImb8WEcNe8AwsZdhMJ1ZiEkqlbxh6Cozd0yicdtY1BdUvEzW8ihcTx1MO%2FwEmJN5fg3i26Ky23%2B31qnkUrJPEq%2BIC%2F1eKMvUBtBnhPaEFYxsVAIgDeJmTVxdPI6pvFT9cHkVfhEv5d8XqV3fBqHy3JIr6DvL4i5MnMse%2FVmqFBM0ICvnSoRIIqASYne6lvuK8%2Fj2344Nbnn6sPjJDcKYm7BsuCtjjkQtFpQk%2FTuwKM%2F8MMfvNGGAsJVnCt8I52JLL3M4L55WzOrbeLMUUnP4tUhllI6LHPEfUKpxqCIvjMkKkRf9OoLI0cqwHLwXODDH6SpXljvm7cyzS4Bb%2B5BfElf0nJoJFpFjHxw6pwjD3z%2FW7TYnv3Uj0WrQ4Zo%2FtlYhNSIvoq8IPzO%2FNvuJ2sUiSTEXAX%2Bk10XBPS2LLI9dAxj1VKTAWjJC3S9EYjdkOY9Boz0%2FueLw%2FxsLfRVY60fXAtk5PEIcTMdlsPAf2Zk%2BzE0O31ugs6SeG77UDxirdUNeJL1xvQwZ4HrdQLu90E1t3d%2FCQvZw5yrMNqrksQGOqUBAJTaz%2B1BG5OW1GvbD4rVJuGpJkrAvQ%2BbbEOdbi8d10CXTmUSq8ow0FmBN0qcP5HGmRdFXD%2BXhHo7taI8MhqIvUKI5O1bVB8PlUILDnhxSvcnT36VHWJiU0yRc9miTJdfG2AmKquH17i1uU%2B4I5wCMBQkjwinSouEQ7cMg1RX7T3kVjBDceusU0dcPhhDJi7ujsaBja6iLwhtzc17mEiRlxexGU6E&X-Amz-Signature=71316faedb3c7585c8f3c341f95353a2e5e3a3adcb13a4a38aed3745dfc1348f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKHH3IBL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDdpr0zZXEkxxPHQW8geAhX7hEgoX36IQzCA40XsKyh0gIgGJdVOwOjTqa5YYO4w2h%2FuzJLOfX49ppt5yw6pKEP1yMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDKjk%2B7qXBk%2BK7DTp8CrcA4MtQtTVsFdDmbCtiAcqB%2BJO41RmeA3uXXgmzjrm04d2BeKjHoZB69EsWSuVFYjle22gRpEKJ%2FXFr5g1wPakTRrHZYOPdImb8WEcNe8AwsZdhMJ1ZiEkqlbxh6Cozd0yicdtY1BdUvEzW8ihcTx1MO%2FwEmJN5fg3i26Ky23%2B31qnkUrJPEq%2BIC%2F1eKMvUBtBnhPaEFYxsVAIgDeJmTVxdPI6pvFT9cHkVfhEv5d8XqV3fBqHy3JIr6DvL4i5MnMse%2FVmqFBM0ICvnSoRIIqASYne6lvuK8%2Fj2344Nbnn6sPjJDcKYm7BsuCtjjkQtFpQk%2FTuwKM%2F8MMfvNGGAsJVnCt8I52JLL3M4L55WzOrbeLMUUnP4tUhllI6LHPEfUKpxqCIvjMkKkRf9OoLI0cqwHLwXODDH6SpXljvm7cyzS4Bb%2B5BfElf0nJoJFpFjHxw6pwjD3z%2FW7TYnv3Uj0WrQ4Zo%2FtlYhNSIvoq8IPzO%2FNvuJ2sUiSTEXAX%2Bk10XBPS2LLI9dAxj1VKTAWjJC3S9EYjdkOY9Boz0%2FueLw%2FxsLfRVY60fXAtk5PEIcTMdlsPAf2Zk%2BzE0O31ugs6SeG77UDxirdUNeJL1xvQwZ4HrdQLu90E1t3d%2FCQvZw5yrMNqrksQGOqUBAJTaz%2B1BG5OW1GvbD4rVJuGpJkrAvQ%2BbbEOdbi8d10CXTmUSq8ow0FmBN0qcP5HGmRdFXD%2BXhHo7taI8MhqIvUKI5O1bVB8PlUILDnhxSvcnT36VHWJiU0yRc9miTJdfG2AmKquH17i1uU%2B4I5wCMBQkjwinSouEQ7cMg1RX7T3kVjBDceusU0dcPhhDJi7ujsaBja6iLwhtzc17mEiRlxexGU6E&X-Amz-Signature=cc3f6dcd8c503a3e97022735c2bf339f2ba131788deed5be4e85b3bec46b06ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKHH3IBL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDdpr0zZXEkxxPHQW8geAhX7hEgoX36IQzCA40XsKyh0gIgGJdVOwOjTqa5YYO4w2h%2FuzJLOfX49ppt5yw6pKEP1yMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDKjk%2B7qXBk%2BK7DTp8CrcA4MtQtTVsFdDmbCtiAcqB%2BJO41RmeA3uXXgmzjrm04d2BeKjHoZB69EsWSuVFYjle22gRpEKJ%2FXFr5g1wPakTRrHZYOPdImb8WEcNe8AwsZdhMJ1ZiEkqlbxh6Cozd0yicdtY1BdUvEzW8ihcTx1MO%2FwEmJN5fg3i26Ky23%2B31qnkUrJPEq%2BIC%2F1eKMvUBtBnhPaEFYxsVAIgDeJmTVxdPI6pvFT9cHkVfhEv5d8XqV3fBqHy3JIr6DvL4i5MnMse%2FVmqFBM0ICvnSoRIIqASYne6lvuK8%2Fj2344Nbnn6sPjJDcKYm7BsuCtjjkQtFpQk%2FTuwKM%2F8MMfvNGGAsJVnCt8I52JLL3M4L55WzOrbeLMUUnP4tUhllI6LHPEfUKpxqCIvjMkKkRf9OoLI0cqwHLwXODDH6SpXljvm7cyzS4Bb%2B5BfElf0nJoJFpFjHxw6pwjD3z%2FW7TYnv3Uj0WrQ4Zo%2FtlYhNSIvoq8IPzO%2FNvuJ2sUiSTEXAX%2Bk10XBPS2LLI9dAxj1VKTAWjJC3S9EYjdkOY9Boz0%2FueLw%2FxsLfRVY60fXAtk5PEIcTMdlsPAf2Zk%2BzE0O31ugs6SeG77UDxirdUNeJL1xvQwZ4HrdQLu90E1t3d%2FCQvZw5yrMNqrksQGOqUBAJTaz%2B1BG5OW1GvbD4rVJuGpJkrAvQ%2BbbEOdbi8d10CXTmUSq8ow0FmBN0qcP5HGmRdFXD%2BXhHo7taI8MhqIvUKI5O1bVB8PlUILDnhxSvcnT36VHWJiU0yRc9miTJdfG2AmKquH17i1uU%2B4I5wCMBQkjwinSouEQ7cMg1RX7T3kVjBDceusU0dcPhhDJi7ujsaBja6iLwhtzc17mEiRlxexGU6E&X-Amz-Signature=41548ca7b11398b2bd5b0811e5eb0d902de82e6e0d7e8c1fb2d566b48e670246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKHH3IBL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDdpr0zZXEkxxPHQW8geAhX7hEgoX36IQzCA40XsKyh0gIgGJdVOwOjTqa5YYO4w2h%2FuzJLOfX49ppt5yw6pKEP1yMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDKjk%2B7qXBk%2BK7DTp8CrcA4MtQtTVsFdDmbCtiAcqB%2BJO41RmeA3uXXgmzjrm04d2BeKjHoZB69EsWSuVFYjle22gRpEKJ%2FXFr5g1wPakTRrHZYOPdImb8WEcNe8AwsZdhMJ1ZiEkqlbxh6Cozd0yicdtY1BdUvEzW8ihcTx1MO%2FwEmJN5fg3i26Ky23%2B31qnkUrJPEq%2BIC%2F1eKMvUBtBnhPaEFYxsVAIgDeJmTVxdPI6pvFT9cHkVfhEv5d8XqV3fBqHy3JIr6DvL4i5MnMse%2FVmqFBM0ICvnSoRIIqASYne6lvuK8%2Fj2344Nbnn6sPjJDcKYm7BsuCtjjkQtFpQk%2FTuwKM%2F8MMfvNGGAsJVnCt8I52JLL3M4L55WzOrbeLMUUnP4tUhllI6LHPEfUKpxqCIvjMkKkRf9OoLI0cqwHLwXODDH6SpXljvm7cyzS4Bb%2B5BfElf0nJoJFpFjHxw6pwjD3z%2FW7TYnv3Uj0WrQ4Zo%2FtlYhNSIvoq8IPzO%2FNvuJ2sUiSTEXAX%2Bk10XBPS2LLI9dAxj1VKTAWjJC3S9EYjdkOY9Boz0%2FueLw%2FxsLfRVY60fXAtk5PEIcTMdlsPAf2Zk%2BzE0O31ugs6SeG77UDxirdUNeJL1xvQwZ4HrdQLu90E1t3d%2FCQvZw5yrMNqrksQGOqUBAJTaz%2B1BG5OW1GvbD4rVJuGpJkrAvQ%2BbbEOdbi8d10CXTmUSq8ow0FmBN0qcP5HGmRdFXD%2BXhHo7taI8MhqIvUKI5O1bVB8PlUILDnhxSvcnT36VHWJiU0yRc9miTJdfG2AmKquH17i1uU%2B4I5wCMBQkjwinSouEQ7cMg1RX7T3kVjBDceusU0dcPhhDJi7ujsaBja6iLwhtzc17mEiRlxexGU6E&X-Amz-Signature=ea3db91c5711c1864a46ca2f94ba361b6732dfc89bddc0690343cbc20dcfec3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKHH3IBL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDdpr0zZXEkxxPHQW8geAhX7hEgoX36IQzCA40XsKyh0gIgGJdVOwOjTqa5YYO4w2h%2FuzJLOfX49ppt5yw6pKEP1yMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDKjk%2B7qXBk%2BK7DTp8CrcA4MtQtTVsFdDmbCtiAcqB%2BJO41RmeA3uXXgmzjrm04d2BeKjHoZB69EsWSuVFYjle22gRpEKJ%2FXFr5g1wPakTRrHZYOPdImb8WEcNe8AwsZdhMJ1ZiEkqlbxh6Cozd0yicdtY1BdUvEzW8ihcTx1MO%2FwEmJN5fg3i26Ky23%2B31qnkUrJPEq%2BIC%2F1eKMvUBtBnhPaEFYxsVAIgDeJmTVxdPI6pvFT9cHkVfhEv5d8XqV3fBqHy3JIr6DvL4i5MnMse%2FVmqFBM0ICvnSoRIIqASYne6lvuK8%2Fj2344Nbnn6sPjJDcKYm7BsuCtjjkQtFpQk%2FTuwKM%2F8MMfvNGGAsJVnCt8I52JLL3M4L55WzOrbeLMUUnP4tUhllI6LHPEfUKpxqCIvjMkKkRf9OoLI0cqwHLwXODDH6SpXljvm7cyzS4Bb%2B5BfElf0nJoJFpFjHxw6pwjD3z%2FW7TYnv3Uj0WrQ4Zo%2FtlYhNSIvoq8IPzO%2FNvuJ2sUiSTEXAX%2Bk10XBPS2LLI9dAxj1VKTAWjJC3S9EYjdkOY9Boz0%2FueLw%2FxsLfRVY60fXAtk5PEIcTMdlsPAf2Zk%2BzE0O31ugs6SeG77UDxirdUNeJL1xvQwZ4HrdQLu90E1t3d%2FCQvZw5yrMNqrksQGOqUBAJTaz%2B1BG5OW1GvbD4rVJuGpJkrAvQ%2BbbEOdbi8d10CXTmUSq8ow0FmBN0qcP5HGmRdFXD%2BXhHo7taI8MhqIvUKI5O1bVB8PlUILDnhxSvcnT36VHWJiU0yRc9miTJdfG2AmKquH17i1uU%2B4I5wCMBQkjwinSouEQ7cMg1RX7T3kVjBDceusU0dcPhhDJi7ujsaBja6iLwhtzc17mEiRlxexGU6E&X-Amz-Signature=bc2e8d795c022d00636badf9d54df1f11afa9aef5f7c5dd62429b8d74265a4fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKHH3IBL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDdpr0zZXEkxxPHQW8geAhX7hEgoX36IQzCA40XsKyh0gIgGJdVOwOjTqa5YYO4w2h%2FuzJLOfX49ppt5yw6pKEP1yMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDKjk%2B7qXBk%2BK7DTp8CrcA4MtQtTVsFdDmbCtiAcqB%2BJO41RmeA3uXXgmzjrm04d2BeKjHoZB69EsWSuVFYjle22gRpEKJ%2FXFr5g1wPakTRrHZYOPdImb8WEcNe8AwsZdhMJ1ZiEkqlbxh6Cozd0yicdtY1BdUvEzW8ihcTx1MO%2FwEmJN5fg3i26Ky23%2B31qnkUrJPEq%2BIC%2F1eKMvUBtBnhPaEFYxsVAIgDeJmTVxdPI6pvFT9cHkVfhEv5d8XqV3fBqHy3JIr6DvL4i5MnMse%2FVmqFBM0ICvnSoRIIqASYne6lvuK8%2Fj2344Nbnn6sPjJDcKYm7BsuCtjjkQtFpQk%2FTuwKM%2F8MMfvNGGAsJVnCt8I52JLL3M4L55WzOrbeLMUUnP4tUhllI6LHPEfUKpxqCIvjMkKkRf9OoLI0cqwHLwXODDH6SpXljvm7cyzS4Bb%2B5BfElf0nJoJFpFjHxw6pwjD3z%2FW7TYnv3Uj0WrQ4Zo%2FtlYhNSIvoq8IPzO%2FNvuJ2sUiSTEXAX%2Bk10XBPS2LLI9dAxj1VKTAWjJC3S9EYjdkOY9Boz0%2FueLw%2FxsLfRVY60fXAtk5PEIcTMdlsPAf2Zk%2BzE0O31ugs6SeG77UDxirdUNeJL1xvQwZ4HrdQLu90E1t3d%2FCQvZw5yrMNqrksQGOqUBAJTaz%2B1BG5OW1GvbD4rVJuGpJkrAvQ%2BbbEOdbi8d10CXTmUSq8ow0FmBN0qcP5HGmRdFXD%2BXhHo7taI8MhqIvUKI5O1bVB8PlUILDnhxSvcnT36VHWJiU0yRc9miTJdfG2AmKquH17i1uU%2B4I5wCMBQkjwinSouEQ7cMg1RX7T3kVjBDceusU0dcPhhDJi7ujsaBja6iLwhtzc17mEiRlxexGU6E&X-Amz-Signature=39ed5ee0c23ea06d0dea48703b9bbea48d78dd2d4e59828fe64b935f8f579427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FAW5SM3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQC%2BrEY6xchafg9P7HZGBACerofpuaueGfN%2FcEvONeLvnQIgOvo7qT7JOwiQCgwivgmN37eNelvqWAadQj9PrikS4HAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDP2bUGh8BUV5I%2F17mircA6XaJDJiOtJ0sulyd282LsZ%2FTUMtDU%2BAJ8TdkMAsoTDRaOla%2F3onzdKSz%2F2m8vfcslkqFL0%2F2BkIStN5BcNXNtWEnNbb%2FwgEJJN2WPOZpaaIR%2Fa6lMKNrj6thFKx0DotaWXPyPHd4QVwLBz0cFhlwLfO4%2FSdHGVxT%2FK1HJ68jumqQ9B8%2BWTluXxbo7bTOocD8O8gtpEqmf93lwOxL1Y6fhiB%2FHnH3unQw2jSXO%2FoiTxr4TDX4acdrn58jcHOcvjsQdYVVmX7h4CFXft2vjKfG9Y2KXOFW85gGGNWU5bi%2F7GQeOujeuElufO51%2BvRBZMfYrWOpxZJeQl%2FuSBTv8LZu77dQCaJq7JGnIma2psbahhPbCNTVFkyskjZTamJQk4HGN%2BQbfzDGLx5GuwE%2FGfXxq%2BBVCAY9YMq7Abj6uVVaaUopiPiT2pjtSdb4xS3IoRsRWagZ1krrdmMoWvB3%2FEr9Osxu4Mqmk1ja27cKiENWP5ARHX683wsxXU3o3WjKGW5NjSnDsWvyNuBdLR8ytH3KoI6gIgtZfm9IOf6PJ3LStlpm52PlVAzjB4G4gPrfgJu2ItMIiI2Jk4TkB%2ByeLVieQMf04PULJr7Jp1uab7PZV4zxwLjLEnD7kumbQWEMOerksQGOqUBLBwx7VcP%2FOQQbr5cGas4njkQ%2Fn%2FQdpigq0vVNlCH55yV9Jbzv2exv3OEn1fiJluOgZL5WSMhtONJkCCmltENGHp9LFfGswn0SSA8yazpXEbnC9Jm7Wk1ol64lmb5KhFYsxuPvfe51b9KGz3ST1aej3yP0Scrq1LvdeFrDhRAKMrfdqLP4KEyc8QlkkJbxWL5GSIpaQEpx90%2FJ%2F4X6Tm3c6KTg07N&X-Amz-Signature=98721a73e7189933ab88fc0079073811edbfe017dd07d1f1af79bb0caa7e0d81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKHH3IBL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDdpr0zZXEkxxPHQW8geAhX7hEgoX36IQzCA40XsKyh0gIgGJdVOwOjTqa5YYO4w2h%2FuzJLOfX49ppt5yw6pKEP1yMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDKjk%2B7qXBk%2BK7DTp8CrcA4MtQtTVsFdDmbCtiAcqB%2BJO41RmeA3uXXgmzjrm04d2BeKjHoZB69EsWSuVFYjle22gRpEKJ%2FXFr5g1wPakTRrHZYOPdImb8WEcNe8AwsZdhMJ1ZiEkqlbxh6Cozd0yicdtY1BdUvEzW8ihcTx1MO%2FwEmJN5fg3i26Ky23%2B31qnkUrJPEq%2BIC%2F1eKMvUBtBnhPaEFYxsVAIgDeJmTVxdPI6pvFT9cHkVfhEv5d8XqV3fBqHy3JIr6DvL4i5MnMse%2FVmqFBM0ICvnSoRIIqASYne6lvuK8%2Fj2344Nbnn6sPjJDcKYm7BsuCtjjkQtFpQk%2FTuwKM%2F8MMfvNGGAsJVnCt8I52JLL3M4L55WzOrbeLMUUnP4tUhllI6LHPEfUKpxqCIvjMkKkRf9OoLI0cqwHLwXODDH6SpXljvm7cyzS4Bb%2B5BfElf0nJoJFpFjHxw6pwjD3z%2FW7TYnv3Uj0WrQ4Zo%2FtlYhNSIvoq8IPzO%2FNvuJ2sUiSTEXAX%2Bk10XBPS2LLI9dAxj1VKTAWjJC3S9EYjdkOY9Boz0%2FueLw%2FxsLfRVY60fXAtk5PEIcTMdlsPAf2Zk%2BzE0O31ugs6SeG77UDxirdUNeJL1xvQwZ4HrdQLu90E1t3d%2FCQvZw5yrMNqrksQGOqUBAJTaz%2B1BG5OW1GvbD4rVJuGpJkrAvQ%2BbbEOdbi8d10CXTmUSq8ow0FmBN0qcP5HGmRdFXD%2BXhHo7taI8MhqIvUKI5O1bVB8PlUILDnhxSvcnT36VHWJiU0yRc9miTJdfG2AmKquH17i1uU%2B4I5wCMBQkjwinSouEQ7cMg1RX7T3kVjBDceusU0dcPhhDJi7ujsaBja6iLwhtzc17mEiRlxexGU6E&X-Amz-Signature=1a53208730982a43134e8890cc2aedf2f5959cdb618eea5f70a450fefbe22050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPI67B3F%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDpsR9HzWy60p4pivffqFjcEzEbnQCRfnjnIfv9Kx0iAwIgT5li2R0z3ozB7tNxJQgFaNbp3OXHo1nGxqLh4RTxi6gq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIHWJCK%2BKYz4yINJJyrcA1RA0XC6UpNzAyKcLmyZFn8rQF3R5ZBblmw%2FUZPAaY%2B64eYPzUrqZg3MpMXidSV%2FyxBcHIbzhKdBn9BqgkVFDrQ76f5eq3zEXRhkuWz8rYuvDRdnA6swiqwibOXU8s2FJR6nNrIXjy61RBW62qN3YA8XUurzOxMtsm4KtHUi5WLOxJrSOzgQ1XC%2FiE7K89rsW5UmaaFi0Ec00yPEt60fa9Bg2U4McM5tD2nr7yEmBMnkVKb%2FBI%2FWYUU1ouTvM0DRAsER7RyhxxDdzBNeTtUucHd37tohVA%2FN5wh%2Bc%2FHv1RuGS7ZWA45jOV6f6KJqTtO3ueXKolDPdCV9CLzQTW4siqBVSu3Duk0J488FUBnOrS5FaKKiSIWdGPKiRySwxktoMZ0zwH%2FTRG6og5%2FOu8vMF%2BcdD2eSS6ITDHka0IXjvsuRKJG9svbn2QX2ctOdI9Oa4Du40aDYjPrheut1w2dLnmixjLYr%2Bq9tB9soYQHa%2B2ur36LbzGzNN8ng2432CznJWA0fMyzXE3NFf0OmMiVO6qHXX0BaJkD9qvYnBYjrMjQKd3xs00tMK6lvaIwzUUUVOUKNS0M0Qx0dwGYHylYXyNLJLM4%2BjNWL0CSgTOPLRmPHJ8DcX%2BbayKjZKW9rMP2qksQGOqUB7KNvskPoMW3lerS4oKaTCYQHr6kfo6d9rd%2B3b10N7Np0WQewhIFCMncNjy9qysZBp0GSEpqLfD%2BwSdBnUCR5LA2nAGXCg%2Bb%2FMY3JxB4kjBBkoam09QT%2FjCifDa99P87PL0gMvorZ4xeAWVY%2FDi18HEbE%2F11kFjgFPCtH30CNPKUUWDpZq0mpRZ%2FJq4AXpSi2408ysHEft7xm9lR0XT8ZZU8VzZOL&X-Amz-Signature=e9438e16c185bf911185a053b2a441631160b2b025269e2a9f64d362ca246ce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPI67B3F%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDpsR9HzWy60p4pivffqFjcEzEbnQCRfnjnIfv9Kx0iAwIgT5li2R0z3ozB7tNxJQgFaNbp3OXHo1nGxqLh4RTxi6gq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIHWJCK%2BKYz4yINJJyrcA1RA0XC6UpNzAyKcLmyZFn8rQF3R5ZBblmw%2FUZPAaY%2B64eYPzUrqZg3MpMXidSV%2FyxBcHIbzhKdBn9BqgkVFDrQ76f5eq3zEXRhkuWz8rYuvDRdnA6swiqwibOXU8s2FJR6nNrIXjy61RBW62qN3YA8XUurzOxMtsm4KtHUi5WLOxJrSOzgQ1XC%2FiE7K89rsW5UmaaFi0Ec00yPEt60fa9Bg2U4McM5tD2nr7yEmBMnkVKb%2FBI%2FWYUU1ouTvM0DRAsER7RyhxxDdzBNeTtUucHd37tohVA%2FN5wh%2Bc%2FHv1RuGS7ZWA45jOV6f6KJqTtO3ueXKolDPdCV9CLzQTW4siqBVSu3Duk0J488FUBnOrS5FaKKiSIWdGPKiRySwxktoMZ0zwH%2FTRG6og5%2FOu8vMF%2BcdD2eSS6ITDHka0IXjvsuRKJG9svbn2QX2ctOdI9Oa4Du40aDYjPrheut1w2dLnmixjLYr%2Bq9tB9soYQHa%2B2ur36LbzGzNN8ng2432CznJWA0fMyzXE3NFf0OmMiVO6qHXX0BaJkD9qvYnBYjrMjQKd3xs00tMK6lvaIwzUUUVOUKNS0M0Qx0dwGYHylYXyNLJLM4%2BjNWL0CSgTOPLRmPHJ8DcX%2BbayKjZKW9rMP2qksQGOqUB7KNvskPoMW3lerS4oKaTCYQHr6kfo6d9rd%2B3b10N7Np0WQewhIFCMncNjy9qysZBp0GSEpqLfD%2BwSdBnUCR5LA2nAGXCg%2Bb%2FMY3JxB4kjBBkoam09QT%2FjCifDa99P87PL0gMvorZ4xeAWVY%2FDi18HEbE%2F11kFjgFPCtH30CNPKUUWDpZq0mpRZ%2FJq4AXpSi2408ysHEft7xm9lR0XT8ZZU8VzZOL&X-Amz-Signature=859d89aab4925b4c29614e6d4f7186a1f3f7051d75e7c0f2464783a4f8182897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPI67B3F%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDpsR9HzWy60p4pivffqFjcEzEbnQCRfnjnIfv9Kx0iAwIgT5li2R0z3ozB7tNxJQgFaNbp3OXHo1nGxqLh4RTxi6gq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIHWJCK%2BKYz4yINJJyrcA1RA0XC6UpNzAyKcLmyZFn8rQF3R5ZBblmw%2FUZPAaY%2B64eYPzUrqZg3MpMXidSV%2FyxBcHIbzhKdBn9BqgkVFDrQ76f5eq3zEXRhkuWz8rYuvDRdnA6swiqwibOXU8s2FJR6nNrIXjy61RBW62qN3YA8XUurzOxMtsm4KtHUi5WLOxJrSOzgQ1XC%2FiE7K89rsW5UmaaFi0Ec00yPEt60fa9Bg2U4McM5tD2nr7yEmBMnkVKb%2FBI%2FWYUU1ouTvM0DRAsER7RyhxxDdzBNeTtUucHd37tohVA%2FN5wh%2Bc%2FHv1RuGS7ZWA45jOV6f6KJqTtO3ueXKolDPdCV9CLzQTW4siqBVSu3Duk0J488FUBnOrS5FaKKiSIWdGPKiRySwxktoMZ0zwH%2FTRG6og5%2FOu8vMF%2BcdD2eSS6ITDHka0IXjvsuRKJG9svbn2QX2ctOdI9Oa4Du40aDYjPrheut1w2dLnmixjLYr%2Bq9tB9soYQHa%2B2ur36LbzGzNN8ng2432CznJWA0fMyzXE3NFf0OmMiVO6qHXX0BaJkD9qvYnBYjrMjQKd3xs00tMK6lvaIwzUUUVOUKNS0M0Qx0dwGYHylYXyNLJLM4%2BjNWL0CSgTOPLRmPHJ8DcX%2BbayKjZKW9rMP2qksQGOqUB7KNvskPoMW3lerS4oKaTCYQHr6kfo6d9rd%2B3b10N7Np0WQewhIFCMncNjy9qysZBp0GSEpqLfD%2BwSdBnUCR5LA2nAGXCg%2Bb%2FMY3JxB4kjBBkoam09QT%2FjCifDa99P87PL0gMvorZ4xeAWVY%2FDi18HEbE%2F11kFjgFPCtH30CNPKUUWDpZq0mpRZ%2FJq4AXpSi2408ysHEft7xm9lR0XT8ZZU8VzZOL&X-Amz-Signature=12e7f926783302c1a8478b62cc112ffb4e48e1880a92aa8234c766485e746959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPI67B3F%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDpsR9HzWy60p4pivffqFjcEzEbnQCRfnjnIfv9Kx0iAwIgT5li2R0z3ozB7tNxJQgFaNbp3OXHo1nGxqLh4RTxi6gq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIHWJCK%2BKYz4yINJJyrcA1RA0XC6UpNzAyKcLmyZFn8rQF3R5ZBblmw%2FUZPAaY%2B64eYPzUrqZg3MpMXidSV%2FyxBcHIbzhKdBn9BqgkVFDrQ76f5eq3zEXRhkuWz8rYuvDRdnA6swiqwibOXU8s2FJR6nNrIXjy61RBW62qN3YA8XUurzOxMtsm4KtHUi5WLOxJrSOzgQ1XC%2FiE7K89rsW5UmaaFi0Ec00yPEt60fa9Bg2U4McM5tD2nr7yEmBMnkVKb%2FBI%2FWYUU1ouTvM0DRAsER7RyhxxDdzBNeTtUucHd37tohVA%2FN5wh%2Bc%2FHv1RuGS7ZWA45jOV6f6KJqTtO3ueXKolDPdCV9CLzQTW4siqBVSu3Duk0J488FUBnOrS5FaKKiSIWdGPKiRySwxktoMZ0zwH%2FTRG6og5%2FOu8vMF%2BcdD2eSS6ITDHka0IXjvsuRKJG9svbn2QX2ctOdI9Oa4Du40aDYjPrheut1w2dLnmixjLYr%2Bq9tB9soYQHa%2B2ur36LbzGzNN8ng2432CznJWA0fMyzXE3NFf0OmMiVO6qHXX0BaJkD9qvYnBYjrMjQKd3xs00tMK6lvaIwzUUUVOUKNS0M0Qx0dwGYHylYXyNLJLM4%2BjNWL0CSgTOPLRmPHJ8DcX%2BbayKjZKW9rMP2qksQGOqUB7KNvskPoMW3lerS4oKaTCYQHr6kfo6d9rd%2B3b10N7Np0WQewhIFCMncNjy9qysZBp0GSEpqLfD%2BwSdBnUCR5LA2nAGXCg%2Bb%2FMY3JxB4kjBBkoam09QT%2FjCifDa99P87PL0gMvorZ4xeAWVY%2FDi18HEbE%2F11kFjgFPCtH30CNPKUUWDpZq0mpRZ%2FJq4AXpSi2408ysHEft7xm9lR0XT8ZZU8VzZOL&X-Amz-Signature=860ca780f7d1479e40a6c82c38dee41fc9b07eed16752e06e341875c9c5244b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPI67B3F%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDpsR9HzWy60p4pivffqFjcEzEbnQCRfnjnIfv9Kx0iAwIgT5li2R0z3ozB7tNxJQgFaNbp3OXHo1nGxqLh4RTxi6gq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIHWJCK%2BKYz4yINJJyrcA1RA0XC6UpNzAyKcLmyZFn8rQF3R5ZBblmw%2FUZPAaY%2B64eYPzUrqZg3MpMXidSV%2FyxBcHIbzhKdBn9BqgkVFDrQ76f5eq3zEXRhkuWz8rYuvDRdnA6swiqwibOXU8s2FJR6nNrIXjy61RBW62qN3YA8XUurzOxMtsm4KtHUi5WLOxJrSOzgQ1XC%2FiE7K89rsW5UmaaFi0Ec00yPEt60fa9Bg2U4McM5tD2nr7yEmBMnkVKb%2FBI%2FWYUU1ouTvM0DRAsER7RyhxxDdzBNeTtUucHd37tohVA%2FN5wh%2Bc%2FHv1RuGS7ZWA45jOV6f6KJqTtO3ueXKolDPdCV9CLzQTW4siqBVSu3Duk0J488FUBnOrS5FaKKiSIWdGPKiRySwxktoMZ0zwH%2FTRG6og5%2FOu8vMF%2BcdD2eSS6ITDHka0IXjvsuRKJG9svbn2QX2ctOdI9Oa4Du40aDYjPrheut1w2dLnmixjLYr%2Bq9tB9soYQHa%2B2ur36LbzGzNN8ng2432CznJWA0fMyzXE3NFf0OmMiVO6qHXX0BaJkD9qvYnBYjrMjQKd3xs00tMK6lvaIwzUUUVOUKNS0M0Qx0dwGYHylYXyNLJLM4%2BjNWL0CSgTOPLRmPHJ8DcX%2BbayKjZKW9rMP2qksQGOqUB7KNvskPoMW3lerS4oKaTCYQHr6kfo6d9rd%2B3b10N7Np0WQewhIFCMncNjy9qysZBp0GSEpqLfD%2BwSdBnUCR5LA2nAGXCg%2Bb%2FMY3JxB4kjBBkoam09QT%2FjCifDa99P87PL0gMvorZ4xeAWVY%2FDi18HEbE%2F11kFjgFPCtH30CNPKUUWDpZq0mpRZ%2FJq4AXpSi2408ysHEft7xm9lR0XT8ZZU8VzZOL&X-Amz-Signature=c0c519e430eef5b1609739181a7f318bc59d8b85fcf524dad691beed821bf547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPI67B3F%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDpsR9HzWy60p4pivffqFjcEzEbnQCRfnjnIfv9Kx0iAwIgT5li2R0z3ozB7tNxJQgFaNbp3OXHo1nGxqLh4RTxi6gq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIHWJCK%2BKYz4yINJJyrcA1RA0XC6UpNzAyKcLmyZFn8rQF3R5ZBblmw%2FUZPAaY%2B64eYPzUrqZg3MpMXidSV%2FyxBcHIbzhKdBn9BqgkVFDrQ76f5eq3zEXRhkuWz8rYuvDRdnA6swiqwibOXU8s2FJR6nNrIXjy61RBW62qN3YA8XUurzOxMtsm4KtHUi5WLOxJrSOzgQ1XC%2FiE7K89rsW5UmaaFi0Ec00yPEt60fa9Bg2U4McM5tD2nr7yEmBMnkVKb%2FBI%2FWYUU1ouTvM0DRAsER7RyhxxDdzBNeTtUucHd37tohVA%2FN5wh%2Bc%2FHv1RuGS7ZWA45jOV6f6KJqTtO3ueXKolDPdCV9CLzQTW4siqBVSu3Duk0J488FUBnOrS5FaKKiSIWdGPKiRySwxktoMZ0zwH%2FTRG6og5%2FOu8vMF%2BcdD2eSS6ITDHka0IXjvsuRKJG9svbn2QX2ctOdI9Oa4Du40aDYjPrheut1w2dLnmixjLYr%2Bq9tB9soYQHa%2B2ur36LbzGzNN8ng2432CznJWA0fMyzXE3NFf0OmMiVO6qHXX0BaJkD9qvYnBYjrMjQKd3xs00tMK6lvaIwzUUUVOUKNS0M0Qx0dwGYHylYXyNLJLM4%2BjNWL0CSgTOPLRmPHJ8DcX%2BbayKjZKW9rMP2qksQGOqUB7KNvskPoMW3lerS4oKaTCYQHr6kfo6d9rd%2B3b10N7Np0WQewhIFCMncNjy9qysZBp0GSEpqLfD%2BwSdBnUCR5LA2nAGXCg%2Bb%2FMY3JxB4kjBBkoam09QT%2FjCifDa99P87PL0gMvorZ4xeAWVY%2FDi18HEbE%2F11kFjgFPCtH30CNPKUUWDpZq0mpRZ%2FJq4AXpSi2408ysHEft7xm9lR0XT8ZZU8VzZOL&X-Amz-Signature=8dd29431457ea7bc4837e19689aee3a52a0dc3caade932c93bbeb9d4825f7564&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPI67B3F%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDpsR9HzWy60p4pivffqFjcEzEbnQCRfnjnIfv9Kx0iAwIgT5li2R0z3ozB7tNxJQgFaNbp3OXHo1nGxqLh4RTxi6gq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIHWJCK%2BKYz4yINJJyrcA1RA0XC6UpNzAyKcLmyZFn8rQF3R5ZBblmw%2FUZPAaY%2B64eYPzUrqZg3MpMXidSV%2FyxBcHIbzhKdBn9BqgkVFDrQ76f5eq3zEXRhkuWz8rYuvDRdnA6swiqwibOXU8s2FJR6nNrIXjy61RBW62qN3YA8XUurzOxMtsm4KtHUi5WLOxJrSOzgQ1XC%2FiE7K89rsW5UmaaFi0Ec00yPEt60fa9Bg2U4McM5tD2nr7yEmBMnkVKb%2FBI%2FWYUU1ouTvM0DRAsER7RyhxxDdzBNeTtUucHd37tohVA%2FN5wh%2Bc%2FHv1RuGS7ZWA45jOV6f6KJqTtO3ueXKolDPdCV9CLzQTW4siqBVSu3Duk0J488FUBnOrS5FaKKiSIWdGPKiRySwxktoMZ0zwH%2FTRG6og5%2FOu8vMF%2BcdD2eSS6ITDHka0IXjvsuRKJG9svbn2QX2ctOdI9Oa4Du40aDYjPrheut1w2dLnmixjLYr%2Bq9tB9soYQHa%2B2ur36LbzGzNN8ng2432CznJWA0fMyzXE3NFf0OmMiVO6qHXX0BaJkD9qvYnBYjrMjQKd3xs00tMK6lvaIwzUUUVOUKNS0M0Qx0dwGYHylYXyNLJLM4%2BjNWL0CSgTOPLRmPHJ8DcX%2BbayKjZKW9rMP2qksQGOqUB7KNvskPoMW3lerS4oKaTCYQHr6kfo6d9rd%2B3b10N7Np0WQewhIFCMncNjy9qysZBp0GSEpqLfD%2BwSdBnUCR5LA2nAGXCg%2Bb%2FMY3JxB4kjBBkoam09QT%2FjCifDa99P87PL0gMvorZ4xeAWVY%2FDi18HEbE%2F11kFjgFPCtH30CNPKUUWDpZq0mpRZ%2FJq4AXpSi2408ysHEft7xm9lR0XT8ZZU8VzZOL&X-Amz-Signature=7f3b6f8b0118e2322519634a5f2f784da85eeb689c0aed4ff2ac928a2f9b7503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
