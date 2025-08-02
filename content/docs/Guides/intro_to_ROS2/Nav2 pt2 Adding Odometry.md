---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-30T06:16:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-30T06:16:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URXRLSU6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSB1TG4WpWUZad38ZZ2HSAbBJ%2Bhf%2BTQYqlXxdDIjTP%2BwIgKd4gv9k22EQBeZruXRPfWaINDpOWmfcg9KUJSNKJCVIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVMnniYrK8aHnzbaSrcA4i1Rg19u1qdfkMzAx7jiIBCKU8u2TVmvbjGRz0B8YH1QMHIRs1xmWQxNPyP7o8Zey7F8Ul7APWJ5Y%2BcirHmAJi7ULmZ2CUzlk6EAl2YO%2BMMrhJjRi9WKl93SLbORWK2aOXybkZmpVkaHzKG2h%2Bi5VakSQYugcid7CH5uZl%2BVjORHX3YTD6bP64k2KcEdcuANkMS1nCJL2ZT7sEvuMXeFTgPInJJZdJ9fTYE9vFN3zuk5zuOyTXb3CvpgNXLnmoVn9CHtmHH07r9TWJGH3QfcsJfgnWGSsuqNpoxQaASsJuIlDCNKBqnDAmXCY1ZGkAn7Ht4jfCCLgUsrDPkbDjcdIRc9PH9TSBr5ZGP6LQY3m4LHYiIugBMssvj%2Fu19TSj6CX9uSTY6kZUhl1jo18MLYfUoslJ1oIuZ7spRiaXiwfJl2n89Ar%2BHhMC0umhFTkKL3Wp4EBmh5gSjuY0UB1t%2BALYESDaKwBd0g6cXGbkL0JP7RvT1UDJbKRLtFgmJUv6kSa3SyMpPYTqHAC3XzJymHgMsFUqSL4CNpu9%2BdRArnI5sFMulFjUrZ5xVbob1iEBuZU1%2FjlKb3vB%2B7Yfkz2kTNzUV8J1FLyPYCZ7MCnBf2n4poueWreWkxXZ2uTT1MLGttcQGOqUBFQCgkzSTzR0l1O9sbl5iXTi1FeSDmLYOFi53dDqur4i27Jwdy6%2BAh8mtkoNqFRc%2Fpj%2FAijtj877w4%2F6i73PNoiAqtjYrMDG844d1a3qrEPmL94tmoITjgUAcy7unX%2BIhK77UdLs5mcT2esmWHHvB9AAzDXYD5nO132hFpXNdE77nCMyXQ33Q47ZFgR7zgNqWNfrDlcBTMTKqPaiFje3I1mnIF0mB&X-Amz-Signature=deaf9f54ba41c0b7aa8108998c052a4fdd6427da6905a820664e23ee5aa6ef25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URXRLSU6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSB1TG4WpWUZad38ZZ2HSAbBJ%2Bhf%2BTQYqlXxdDIjTP%2BwIgKd4gv9k22EQBeZruXRPfWaINDpOWmfcg9KUJSNKJCVIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVMnniYrK8aHnzbaSrcA4i1Rg19u1qdfkMzAx7jiIBCKU8u2TVmvbjGRz0B8YH1QMHIRs1xmWQxNPyP7o8Zey7F8Ul7APWJ5Y%2BcirHmAJi7ULmZ2CUzlk6EAl2YO%2BMMrhJjRi9WKl93SLbORWK2aOXybkZmpVkaHzKG2h%2Bi5VakSQYugcid7CH5uZl%2BVjORHX3YTD6bP64k2KcEdcuANkMS1nCJL2ZT7sEvuMXeFTgPInJJZdJ9fTYE9vFN3zuk5zuOyTXb3CvpgNXLnmoVn9CHtmHH07r9TWJGH3QfcsJfgnWGSsuqNpoxQaASsJuIlDCNKBqnDAmXCY1ZGkAn7Ht4jfCCLgUsrDPkbDjcdIRc9PH9TSBr5ZGP6LQY3m4LHYiIugBMssvj%2Fu19TSj6CX9uSTY6kZUhl1jo18MLYfUoslJ1oIuZ7spRiaXiwfJl2n89Ar%2BHhMC0umhFTkKL3Wp4EBmh5gSjuY0UB1t%2BALYESDaKwBd0g6cXGbkL0JP7RvT1UDJbKRLtFgmJUv6kSa3SyMpPYTqHAC3XzJymHgMsFUqSL4CNpu9%2BdRArnI5sFMulFjUrZ5xVbob1iEBuZU1%2FjlKb3vB%2B7Yfkz2kTNzUV8J1FLyPYCZ7MCnBf2n4poueWreWkxXZ2uTT1MLGttcQGOqUBFQCgkzSTzR0l1O9sbl5iXTi1FeSDmLYOFi53dDqur4i27Jwdy6%2BAh8mtkoNqFRc%2Fpj%2FAijtj877w4%2F6i73PNoiAqtjYrMDG844d1a3qrEPmL94tmoITjgUAcy7unX%2BIhK77UdLs5mcT2esmWHHvB9AAzDXYD5nO132hFpXNdE77nCMyXQ33Q47ZFgR7zgNqWNfrDlcBTMTKqPaiFje3I1mnIF0mB&X-Amz-Signature=a8f43e491b2beeaf7f4ecb80999284ee61ca263d97c808ddf8be50447afd0dce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URXRLSU6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSB1TG4WpWUZad38ZZ2HSAbBJ%2Bhf%2BTQYqlXxdDIjTP%2BwIgKd4gv9k22EQBeZruXRPfWaINDpOWmfcg9KUJSNKJCVIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVMnniYrK8aHnzbaSrcA4i1Rg19u1qdfkMzAx7jiIBCKU8u2TVmvbjGRz0B8YH1QMHIRs1xmWQxNPyP7o8Zey7F8Ul7APWJ5Y%2BcirHmAJi7ULmZ2CUzlk6EAl2YO%2BMMrhJjRi9WKl93SLbORWK2aOXybkZmpVkaHzKG2h%2Bi5VakSQYugcid7CH5uZl%2BVjORHX3YTD6bP64k2KcEdcuANkMS1nCJL2ZT7sEvuMXeFTgPInJJZdJ9fTYE9vFN3zuk5zuOyTXb3CvpgNXLnmoVn9CHtmHH07r9TWJGH3QfcsJfgnWGSsuqNpoxQaASsJuIlDCNKBqnDAmXCY1ZGkAn7Ht4jfCCLgUsrDPkbDjcdIRc9PH9TSBr5ZGP6LQY3m4LHYiIugBMssvj%2Fu19TSj6CX9uSTY6kZUhl1jo18MLYfUoslJ1oIuZ7spRiaXiwfJl2n89Ar%2BHhMC0umhFTkKL3Wp4EBmh5gSjuY0UB1t%2BALYESDaKwBd0g6cXGbkL0JP7RvT1UDJbKRLtFgmJUv6kSa3SyMpPYTqHAC3XzJymHgMsFUqSL4CNpu9%2BdRArnI5sFMulFjUrZ5xVbob1iEBuZU1%2FjlKb3vB%2B7Yfkz2kTNzUV8J1FLyPYCZ7MCnBf2n4poueWreWkxXZ2uTT1MLGttcQGOqUBFQCgkzSTzR0l1O9sbl5iXTi1FeSDmLYOFi53dDqur4i27Jwdy6%2BAh8mtkoNqFRc%2Fpj%2FAijtj877w4%2F6i73PNoiAqtjYrMDG844d1a3qrEPmL94tmoITjgUAcy7unX%2BIhK77UdLs5mcT2esmWHHvB9AAzDXYD5nO132hFpXNdE77nCMyXQ33Q47ZFgR7zgNqWNfrDlcBTMTKqPaiFje3I1mnIF0mB&X-Amz-Signature=dd89f7336ee8e0f6f88fa0cfd253b1090560cfe843e64685ad091a6f1cf3c1b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URXRLSU6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSB1TG4WpWUZad38ZZ2HSAbBJ%2Bhf%2BTQYqlXxdDIjTP%2BwIgKd4gv9k22EQBeZruXRPfWaINDpOWmfcg9KUJSNKJCVIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVMnniYrK8aHnzbaSrcA4i1Rg19u1qdfkMzAx7jiIBCKU8u2TVmvbjGRz0B8YH1QMHIRs1xmWQxNPyP7o8Zey7F8Ul7APWJ5Y%2BcirHmAJi7ULmZ2CUzlk6EAl2YO%2BMMrhJjRi9WKl93SLbORWK2aOXybkZmpVkaHzKG2h%2Bi5VakSQYugcid7CH5uZl%2BVjORHX3YTD6bP64k2KcEdcuANkMS1nCJL2ZT7sEvuMXeFTgPInJJZdJ9fTYE9vFN3zuk5zuOyTXb3CvpgNXLnmoVn9CHtmHH07r9TWJGH3QfcsJfgnWGSsuqNpoxQaASsJuIlDCNKBqnDAmXCY1ZGkAn7Ht4jfCCLgUsrDPkbDjcdIRc9PH9TSBr5ZGP6LQY3m4LHYiIugBMssvj%2Fu19TSj6CX9uSTY6kZUhl1jo18MLYfUoslJ1oIuZ7spRiaXiwfJl2n89Ar%2BHhMC0umhFTkKL3Wp4EBmh5gSjuY0UB1t%2BALYESDaKwBd0g6cXGbkL0JP7RvT1UDJbKRLtFgmJUv6kSa3SyMpPYTqHAC3XzJymHgMsFUqSL4CNpu9%2BdRArnI5sFMulFjUrZ5xVbob1iEBuZU1%2FjlKb3vB%2B7Yfkz2kTNzUV8J1FLyPYCZ7MCnBf2n4poueWreWkxXZ2uTT1MLGttcQGOqUBFQCgkzSTzR0l1O9sbl5iXTi1FeSDmLYOFi53dDqur4i27Jwdy6%2BAh8mtkoNqFRc%2Fpj%2FAijtj877w4%2F6i73PNoiAqtjYrMDG844d1a3qrEPmL94tmoITjgUAcy7unX%2BIhK77UdLs5mcT2esmWHHvB9AAzDXYD5nO132hFpXNdE77nCMyXQ33Q47ZFgR7zgNqWNfrDlcBTMTKqPaiFje3I1mnIF0mB&X-Amz-Signature=e62493665764c246e822b29628e2668da85f45ecf902771633d4a6c64f1ce4fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URXRLSU6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSB1TG4WpWUZad38ZZ2HSAbBJ%2Bhf%2BTQYqlXxdDIjTP%2BwIgKd4gv9k22EQBeZruXRPfWaINDpOWmfcg9KUJSNKJCVIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVMnniYrK8aHnzbaSrcA4i1Rg19u1qdfkMzAx7jiIBCKU8u2TVmvbjGRz0B8YH1QMHIRs1xmWQxNPyP7o8Zey7F8Ul7APWJ5Y%2BcirHmAJi7ULmZ2CUzlk6EAl2YO%2BMMrhJjRi9WKl93SLbORWK2aOXybkZmpVkaHzKG2h%2Bi5VakSQYugcid7CH5uZl%2BVjORHX3YTD6bP64k2KcEdcuANkMS1nCJL2ZT7sEvuMXeFTgPInJJZdJ9fTYE9vFN3zuk5zuOyTXb3CvpgNXLnmoVn9CHtmHH07r9TWJGH3QfcsJfgnWGSsuqNpoxQaASsJuIlDCNKBqnDAmXCY1ZGkAn7Ht4jfCCLgUsrDPkbDjcdIRc9PH9TSBr5ZGP6LQY3m4LHYiIugBMssvj%2Fu19TSj6CX9uSTY6kZUhl1jo18MLYfUoslJ1oIuZ7spRiaXiwfJl2n89Ar%2BHhMC0umhFTkKL3Wp4EBmh5gSjuY0UB1t%2BALYESDaKwBd0g6cXGbkL0JP7RvT1UDJbKRLtFgmJUv6kSa3SyMpPYTqHAC3XzJymHgMsFUqSL4CNpu9%2BdRArnI5sFMulFjUrZ5xVbob1iEBuZU1%2FjlKb3vB%2B7Yfkz2kTNzUV8J1FLyPYCZ7MCnBf2n4poueWreWkxXZ2uTT1MLGttcQGOqUBFQCgkzSTzR0l1O9sbl5iXTi1FeSDmLYOFi53dDqur4i27Jwdy6%2BAh8mtkoNqFRc%2Fpj%2FAijtj877w4%2F6i73PNoiAqtjYrMDG844d1a3qrEPmL94tmoITjgUAcy7unX%2BIhK77UdLs5mcT2esmWHHvB9AAzDXYD5nO132hFpXNdE77nCMyXQ33Q47ZFgR7zgNqWNfrDlcBTMTKqPaiFje3I1mnIF0mB&X-Amz-Signature=2e29ecc6a49699e77ff87eefa68236601b4896461f5858ef827b7943bc75c8f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URXRLSU6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSB1TG4WpWUZad38ZZ2HSAbBJ%2Bhf%2BTQYqlXxdDIjTP%2BwIgKd4gv9k22EQBeZruXRPfWaINDpOWmfcg9KUJSNKJCVIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVMnniYrK8aHnzbaSrcA4i1Rg19u1qdfkMzAx7jiIBCKU8u2TVmvbjGRz0B8YH1QMHIRs1xmWQxNPyP7o8Zey7F8Ul7APWJ5Y%2BcirHmAJi7ULmZ2CUzlk6EAl2YO%2BMMrhJjRi9WKl93SLbORWK2aOXybkZmpVkaHzKG2h%2Bi5VakSQYugcid7CH5uZl%2BVjORHX3YTD6bP64k2KcEdcuANkMS1nCJL2ZT7sEvuMXeFTgPInJJZdJ9fTYE9vFN3zuk5zuOyTXb3CvpgNXLnmoVn9CHtmHH07r9TWJGH3QfcsJfgnWGSsuqNpoxQaASsJuIlDCNKBqnDAmXCY1ZGkAn7Ht4jfCCLgUsrDPkbDjcdIRc9PH9TSBr5ZGP6LQY3m4LHYiIugBMssvj%2Fu19TSj6CX9uSTY6kZUhl1jo18MLYfUoslJ1oIuZ7spRiaXiwfJl2n89Ar%2BHhMC0umhFTkKL3Wp4EBmh5gSjuY0UB1t%2BALYESDaKwBd0g6cXGbkL0JP7RvT1UDJbKRLtFgmJUv6kSa3SyMpPYTqHAC3XzJymHgMsFUqSL4CNpu9%2BdRArnI5sFMulFjUrZ5xVbob1iEBuZU1%2FjlKb3vB%2B7Yfkz2kTNzUV8J1FLyPYCZ7MCnBf2n4poueWreWkxXZ2uTT1MLGttcQGOqUBFQCgkzSTzR0l1O9sbl5iXTi1FeSDmLYOFi53dDqur4i27Jwdy6%2BAh8mtkoNqFRc%2Fpj%2FAijtj877w4%2F6i73PNoiAqtjYrMDG844d1a3qrEPmL94tmoITjgUAcy7unX%2BIhK77UdLs5mcT2esmWHHvB9AAzDXYD5nO132hFpXNdE77nCMyXQ33Q47ZFgR7zgNqWNfrDlcBTMTKqPaiFje3I1mnIF0mB&X-Amz-Signature=ab49b64b800086945bdbbd4f47d822e2f0ed34bcea1ee61ab7c7bab3a0d845ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URXRLSU6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSB1TG4WpWUZad38ZZ2HSAbBJ%2Bhf%2BTQYqlXxdDIjTP%2BwIgKd4gv9k22EQBeZruXRPfWaINDpOWmfcg9KUJSNKJCVIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVMnniYrK8aHnzbaSrcA4i1Rg19u1qdfkMzAx7jiIBCKU8u2TVmvbjGRz0B8YH1QMHIRs1xmWQxNPyP7o8Zey7F8Ul7APWJ5Y%2BcirHmAJi7ULmZ2CUzlk6EAl2YO%2BMMrhJjRi9WKl93SLbORWK2aOXybkZmpVkaHzKG2h%2Bi5VakSQYugcid7CH5uZl%2BVjORHX3YTD6bP64k2KcEdcuANkMS1nCJL2ZT7sEvuMXeFTgPInJJZdJ9fTYE9vFN3zuk5zuOyTXb3CvpgNXLnmoVn9CHtmHH07r9TWJGH3QfcsJfgnWGSsuqNpoxQaASsJuIlDCNKBqnDAmXCY1ZGkAn7Ht4jfCCLgUsrDPkbDjcdIRc9PH9TSBr5ZGP6LQY3m4LHYiIugBMssvj%2Fu19TSj6CX9uSTY6kZUhl1jo18MLYfUoslJ1oIuZ7spRiaXiwfJl2n89Ar%2BHhMC0umhFTkKL3Wp4EBmh5gSjuY0UB1t%2BALYESDaKwBd0g6cXGbkL0JP7RvT1UDJbKRLtFgmJUv6kSa3SyMpPYTqHAC3XzJymHgMsFUqSL4CNpu9%2BdRArnI5sFMulFjUrZ5xVbob1iEBuZU1%2FjlKb3vB%2B7Yfkz2kTNzUV8J1FLyPYCZ7MCnBf2n4poueWreWkxXZ2uTT1MLGttcQGOqUBFQCgkzSTzR0l1O9sbl5iXTi1FeSDmLYOFi53dDqur4i27Jwdy6%2BAh8mtkoNqFRc%2Fpj%2FAijtj877w4%2F6i73PNoiAqtjYrMDG844d1a3qrEPmL94tmoITjgUAcy7unX%2BIhK77UdLs5mcT2esmWHHvB9AAzDXYD5nO132hFpXNdE77nCMyXQ33Q47ZFgR7zgNqWNfrDlcBTMTKqPaiFje3I1mnIF0mB&X-Amz-Signature=c00ea2305f2b22e4b76b5c997874947e35bd95f158bb977fa6a3da1cb293f8d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URXRLSU6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSB1TG4WpWUZad38ZZ2HSAbBJ%2Bhf%2BTQYqlXxdDIjTP%2BwIgKd4gv9k22EQBeZruXRPfWaINDpOWmfcg9KUJSNKJCVIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVMnniYrK8aHnzbaSrcA4i1Rg19u1qdfkMzAx7jiIBCKU8u2TVmvbjGRz0B8YH1QMHIRs1xmWQxNPyP7o8Zey7F8Ul7APWJ5Y%2BcirHmAJi7ULmZ2CUzlk6EAl2YO%2BMMrhJjRi9WKl93SLbORWK2aOXybkZmpVkaHzKG2h%2Bi5VakSQYugcid7CH5uZl%2BVjORHX3YTD6bP64k2KcEdcuANkMS1nCJL2ZT7sEvuMXeFTgPInJJZdJ9fTYE9vFN3zuk5zuOyTXb3CvpgNXLnmoVn9CHtmHH07r9TWJGH3QfcsJfgnWGSsuqNpoxQaASsJuIlDCNKBqnDAmXCY1ZGkAn7Ht4jfCCLgUsrDPkbDjcdIRc9PH9TSBr5ZGP6LQY3m4LHYiIugBMssvj%2Fu19TSj6CX9uSTY6kZUhl1jo18MLYfUoslJ1oIuZ7spRiaXiwfJl2n89Ar%2BHhMC0umhFTkKL3Wp4EBmh5gSjuY0UB1t%2BALYESDaKwBd0g6cXGbkL0JP7RvT1UDJbKRLtFgmJUv6kSa3SyMpPYTqHAC3XzJymHgMsFUqSL4CNpu9%2BdRArnI5sFMulFjUrZ5xVbob1iEBuZU1%2FjlKb3vB%2B7Yfkz2kTNzUV8J1FLyPYCZ7MCnBf2n4poueWreWkxXZ2uTT1MLGttcQGOqUBFQCgkzSTzR0l1O9sbl5iXTi1FeSDmLYOFi53dDqur4i27Jwdy6%2BAh8mtkoNqFRc%2Fpj%2FAijtj877w4%2F6i73PNoiAqtjYrMDG844d1a3qrEPmL94tmoITjgUAcy7unX%2BIhK77UdLs5mcT2esmWHHvB9AAzDXYD5nO132hFpXNdE77nCMyXQ33Q47ZFgR7zgNqWNfrDlcBTMTKqPaiFje3I1mnIF0mB&X-Amz-Signature=84ec3a9515d706cb8133398f5aceda9dab3682d433193787f3f240c05d7a8af8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URXRLSU6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSB1TG4WpWUZad38ZZ2HSAbBJ%2Bhf%2BTQYqlXxdDIjTP%2BwIgKd4gv9k22EQBeZruXRPfWaINDpOWmfcg9KUJSNKJCVIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVMnniYrK8aHnzbaSrcA4i1Rg19u1qdfkMzAx7jiIBCKU8u2TVmvbjGRz0B8YH1QMHIRs1xmWQxNPyP7o8Zey7F8Ul7APWJ5Y%2BcirHmAJi7ULmZ2CUzlk6EAl2YO%2BMMrhJjRi9WKl93SLbORWK2aOXybkZmpVkaHzKG2h%2Bi5VakSQYugcid7CH5uZl%2BVjORHX3YTD6bP64k2KcEdcuANkMS1nCJL2ZT7sEvuMXeFTgPInJJZdJ9fTYE9vFN3zuk5zuOyTXb3CvpgNXLnmoVn9CHtmHH07r9TWJGH3QfcsJfgnWGSsuqNpoxQaASsJuIlDCNKBqnDAmXCY1ZGkAn7Ht4jfCCLgUsrDPkbDjcdIRc9PH9TSBr5ZGP6LQY3m4LHYiIugBMssvj%2Fu19TSj6CX9uSTY6kZUhl1jo18MLYfUoslJ1oIuZ7spRiaXiwfJl2n89Ar%2BHhMC0umhFTkKL3Wp4EBmh5gSjuY0UB1t%2BALYESDaKwBd0g6cXGbkL0JP7RvT1UDJbKRLtFgmJUv6kSa3SyMpPYTqHAC3XzJymHgMsFUqSL4CNpu9%2BdRArnI5sFMulFjUrZ5xVbob1iEBuZU1%2FjlKb3vB%2B7Yfkz2kTNzUV8J1FLyPYCZ7MCnBf2n4poueWreWkxXZ2uTT1MLGttcQGOqUBFQCgkzSTzR0l1O9sbl5iXTi1FeSDmLYOFi53dDqur4i27Jwdy6%2BAh8mtkoNqFRc%2Fpj%2FAijtj877w4%2F6i73PNoiAqtjYrMDG844d1a3qrEPmL94tmoITjgUAcy7unX%2BIhK77UdLs5mcT2esmWHHvB9AAzDXYD5nO132hFpXNdE77nCMyXQ33Q47ZFgR7zgNqWNfrDlcBTMTKqPaiFje3I1mnIF0mB&X-Amz-Signature=fdeeb48cf1ea4fdda1e5b265a7b1427a6acffc79f80d455282940aa0a3fb72a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY5VC54G%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiiJibTsRfnvj6cB2%2FXvf1k8ep0LYsdAO%2BEJvrNqaCHAiEA5cjnj%2FVZgBwpBLPPkfuXsooCw06ettLl0fyXALG6mRkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUBVZzCDSIpNEHOiircA4%2Fzs7KRfdQsrGyESR9d%2FAIEHsq5o2oimrN5JRcoxs8rSP5ZvnyI9wWN6E1kJGJNU4lx2NXGb8AdBFswQReJpQN6m3YW8PIEvaDKTUzux1eO1%2FEEf%2FxHPSm0pw4FFF5O1N2yMghPCxGx6vSW9rqV6bNiaJR%2Fism2M5V3OQDaX4ttBNovPrXwGC9SK2uZN1GAjM4NgNgmh9CiJWgSfHe5dCze1gVKRWmAYk2I3Hw0G6KlK77MGnBLFIhS6QyXwRcY9kuBMWynibgyLaUiFft65NVSbSNlj0hhJpRmD6RoApytZWqnaymISNLqKMuMZAG4Tta9h%2FONGXWe%2F8Arz7xtadtycbD%2F0DOCZwqi1IICxmfFENV8cWuFLUF6UCMUJ0B6d6qR12%2B3D20NrWMqmrY35vlMWqoKa%2BVBaEvIu0jDsd1T7HJ6B7%2BzAWt9t4PKv%2BRUlohxRTkQauvkYmrIiJM0RkHuRAA7IYbdLYM2hi%2B5cEmq0fiO3GaFc%2FWt2zWE4pwsXsmE%2B0HznKDgat%2B6XvKnULTnYVslhtNUpnxSZjsWVMQv%2B7bHTJpdb5uMPQ7qvOWvkOl1vYxNgO4PYPXbu3YJ4s7cjhY%2FjuMysVaTJdqpGwQfT69RpI5Qqtw%2BXf9dMNettcQGOqUBy39fJ2MHxGKyGY6hEatRdaEYeoHXLTPNK2u4lCYd1MxoZV3JwYTpR475toZ%2F91p%2BhnsGhCZFVctBnpGBg9ozKsiqfSCE82jLKmVRbnYF30x8yiGDR991fEctO9T5Tg6yppzv7R7Q8Prt3%2BM8%2FYd75IyfrUVXJ645QIIiOE4zL8MYag7tUReVHmRTvYGSOvZHwvEanjV8eC4NN1WBVj8iOMy12t4g&X-Amz-Signature=e1e39f591d7badf8f57ef568a5c01f2c940ffb6def535449465425c4de9d491a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URXRLSU6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSB1TG4WpWUZad38ZZ2HSAbBJ%2Bhf%2BTQYqlXxdDIjTP%2BwIgKd4gv9k22EQBeZruXRPfWaINDpOWmfcg9KUJSNKJCVIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVMnniYrK8aHnzbaSrcA4i1Rg19u1qdfkMzAx7jiIBCKU8u2TVmvbjGRz0B8YH1QMHIRs1xmWQxNPyP7o8Zey7F8Ul7APWJ5Y%2BcirHmAJi7ULmZ2CUzlk6EAl2YO%2BMMrhJjRi9WKl93SLbORWK2aOXybkZmpVkaHzKG2h%2Bi5VakSQYugcid7CH5uZl%2BVjORHX3YTD6bP64k2KcEdcuANkMS1nCJL2ZT7sEvuMXeFTgPInJJZdJ9fTYE9vFN3zuk5zuOyTXb3CvpgNXLnmoVn9CHtmHH07r9TWJGH3QfcsJfgnWGSsuqNpoxQaASsJuIlDCNKBqnDAmXCY1ZGkAn7Ht4jfCCLgUsrDPkbDjcdIRc9PH9TSBr5ZGP6LQY3m4LHYiIugBMssvj%2Fu19TSj6CX9uSTY6kZUhl1jo18MLYfUoslJ1oIuZ7spRiaXiwfJl2n89Ar%2BHhMC0umhFTkKL3Wp4EBmh5gSjuY0UB1t%2BALYESDaKwBd0g6cXGbkL0JP7RvT1UDJbKRLtFgmJUv6kSa3SyMpPYTqHAC3XzJymHgMsFUqSL4CNpu9%2BdRArnI5sFMulFjUrZ5xVbob1iEBuZU1%2FjlKb3vB%2B7Yfkz2kTNzUV8J1FLyPYCZ7MCnBf2n4poueWreWkxXZ2uTT1MLGttcQGOqUBFQCgkzSTzR0l1O9sbl5iXTi1FeSDmLYOFi53dDqur4i27Jwdy6%2BAh8mtkoNqFRc%2Fpj%2FAijtj877w4%2F6i73PNoiAqtjYrMDG844d1a3qrEPmL94tmoITjgUAcy7unX%2BIhK77UdLs5mcT2esmWHHvB9AAzDXYD5nO132hFpXNdE77nCMyXQ33Q47ZFgR7zgNqWNfrDlcBTMTKqPaiFje3I1mnIF0mB&X-Amz-Signature=0c4b41fc6558e7b5b2f73cd9d6775450b554d12dfca1365664e85bd603a1c524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653KWB66F%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIa2t3pXc9Iil%2FKp3i3ZfeyX%2FrddYrh1ckj147rxjd%2FgIgPUh0TpOtewNTtesARBxl%2BkEvU1KXXpQGqrK7o60wetQqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIix%2F%2BnnffqEIPpMsSrcA39FhWmHDVHjGUYBVr3BuRxcLT5ZZMZ9m5ldhsxWcvNp%2FuJALDu4oondSEXebmAvtV4hgFEMn49c8Wry3V7eD1RfFME3riBUfd0nT6pK59M%2B5QnQGk9vAlkDg%2FiuTctgTg4BRzkTuSotWojSmzgWsw8zgrm9D91Tcz6rRZsglY0y7LolbCefS9majJEYaVB1eyarvluP6T12Vc1xaVl6ooN%2F22RtejFA9uZ9jOCy92S5ZWpjw8Nl23bvtBSNSAG5G4yN22m5jAQNLPr8CQJ608Up24KMhMp2eJdyLV1EIyX5ohqhwZMGzo%2FNefjZnEjcoQQjAKak%2BeeDSxWRdHktQQT72BeVis3NosyZwScF0AH7dAC372PPX2opcJuemzhHMmiyqzMACBuUDbPvZEyDpM11MZwv6voLBamvuwiXiuCSMokRJEH%2BqBj3njjLEdvnk%2BYWeoFONhjRCqoCMKOFjIe0ZDgsVVt7ouVQBke%2FbYOdSZrNYByC9beDQKb5UMQi7I6e8B8p1Kr0WZTnsjU8cZRNynWzQYHlsBlrH%2FShOLfciVZ%2F%2BdV%2B82ArCVMKqt4aJtAv4x4QVe6k0nUusFtmOQb%2FG3e2xm8kgsERcS4ncn%2B3TwsYzWTuMqIXLqGwMLittcQGOqUBaeb2hpnBdzSkm8loTXQZHYc%2FCDHSrTcgjgbYYI8xmZPcCRKIDObKnBCN0Q7FlkOIwYys6oI0vw981Wdlj7fjKL74Xgb0u5R7juFvTHmuz%2FLPcKGxHTULJ8md8x45Kphk9kpIi9QcAIH8OjVtYRXZiiDu66C%2BKFjBm5Mi3rCcpNdU0DM6%2BNlhGxkUKvoXZElnM8ZORF2IuPA1EZpii2siTC2tSoSO&X-Amz-Signature=86fb01dcc9f29165064ea13c02e7958b2dbbfe2e263f526ec73cfbc517705f8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653KWB66F%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIa2t3pXc9Iil%2FKp3i3ZfeyX%2FrddYrh1ckj147rxjd%2FgIgPUh0TpOtewNTtesARBxl%2BkEvU1KXXpQGqrK7o60wetQqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIix%2F%2BnnffqEIPpMsSrcA39FhWmHDVHjGUYBVr3BuRxcLT5ZZMZ9m5ldhsxWcvNp%2FuJALDu4oondSEXebmAvtV4hgFEMn49c8Wry3V7eD1RfFME3riBUfd0nT6pK59M%2B5QnQGk9vAlkDg%2FiuTctgTg4BRzkTuSotWojSmzgWsw8zgrm9D91Tcz6rRZsglY0y7LolbCefS9majJEYaVB1eyarvluP6T12Vc1xaVl6ooN%2F22RtejFA9uZ9jOCy92S5ZWpjw8Nl23bvtBSNSAG5G4yN22m5jAQNLPr8CQJ608Up24KMhMp2eJdyLV1EIyX5ohqhwZMGzo%2FNefjZnEjcoQQjAKak%2BeeDSxWRdHktQQT72BeVis3NosyZwScF0AH7dAC372PPX2opcJuemzhHMmiyqzMACBuUDbPvZEyDpM11MZwv6voLBamvuwiXiuCSMokRJEH%2BqBj3njjLEdvnk%2BYWeoFONhjRCqoCMKOFjIe0ZDgsVVt7ouVQBke%2FbYOdSZrNYByC9beDQKb5UMQi7I6e8B8p1Kr0WZTnsjU8cZRNynWzQYHlsBlrH%2FShOLfciVZ%2F%2BdV%2B82ArCVMKqt4aJtAv4x4QVe6k0nUusFtmOQb%2FG3e2xm8kgsERcS4ncn%2B3TwsYzWTuMqIXLqGwMLittcQGOqUBaeb2hpnBdzSkm8loTXQZHYc%2FCDHSrTcgjgbYYI8xmZPcCRKIDObKnBCN0Q7FlkOIwYys6oI0vw981Wdlj7fjKL74Xgb0u5R7juFvTHmuz%2FLPcKGxHTULJ8md8x45Kphk9kpIi9QcAIH8OjVtYRXZiiDu66C%2BKFjBm5Mi3rCcpNdU0DM6%2BNlhGxkUKvoXZElnM8ZORF2IuPA1EZpii2siTC2tSoSO&X-Amz-Signature=6a35be0ea63952d58194870f14c8df94dae2955eb6ad3169ee4254e79bf26749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653KWB66F%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIa2t3pXc9Iil%2FKp3i3ZfeyX%2FrddYrh1ckj147rxjd%2FgIgPUh0TpOtewNTtesARBxl%2BkEvU1KXXpQGqrK7o60wetQqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIix%2F%2BnnffqEIPpMsSrcA39FhWmHDVHjGUYBVr3BuRxcLT5ZZMZ9m5ldhsxWcvNp%2FuJALDu4oondSEXebmAvtV4hgFEMn49c8Wry3V7eD1RfFME3riBUfd0nT6pK59M%2B5QnQGk9vAlkDg%2FiuTctgTg4BRzkTuSotWojSmzgWsw8zgrm9D91Tcz6rRZsglY0y7LolbCefS9majJEYaVB1eyarvluP6T12Vc1xaVl6ooN%2F22RtejFA9uZ9jOCy92S5ZWpjw8Nl23bvtBSNSAG5G4yN22m5jAQNLPr8CQJ608Up24KMhMp2eJdyLV1EIyX5ohqhwZMGzo%2FNefjZnEjcoQQjAKak%2BeeDSxWRdHktQQT72BeVis3NosyZwScF0AH7dAC372PPX2opcJuemzhHMmiyqzMACBuUDbPvZEyDpM11MZwv6voLBamvuwiXiuCSMokRJEH%2BqBj3njjLEdvnk%2BYWeoFONhjRCqoCMKOFjIe0ZDgsVVt7ouVQBke%2FbYOdSZrNYByC9beDQKb5UMQi7I6e8B8p1Kr0WZTnsjU8cZRNynWzQYHlsBlrH%2FShOLfciVZ%2F%2BdV%2B82ArCVMKqt4aJtAv4x4QVe6k0nUusFtmOQb%2FG3e2xm8kgsERcS4ncn%2B3TwsYzWTuMqIXLqGwMLittcQGOqUBaeb2hpnBdzSkm8loTXQZHYc%2FCDHSrTcgjgbYYI8xmZPcCRKIDObKnBCN0Q7FlkOIwYys6oI0vw981Wdlj7fjKL74Xgb0u5R7juFvTHmuz%2FLPcKGxHTULJ8md8x45Kphk9kpIi9QcAIH8OjVtYRXZiiDu66C%2BKFjBm5Mi3rCcpNdU0DM6%2BNlhGxkUKvoXZElnM8ZORF2IuPA1EZpii2siTC2tSoSO&X-Amz-Signature=d65018e60bf807a3ef83f58eee73dbf6ad34d276ef0ac92051b3bbfdb2c0a26d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653KWB66F%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIa2t3pXc9Iil%2FKp3i3ZfeyX%2FrddYrh1ckj147rxjd%2FgIgPUh0TpOtewNTtesARBxl%2BkEvU1KXXpQGqrK7o60wetQqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIix%2F%2BnnffqEIPpMsSrcA39FhWmHDVHjGUYBVr3BuRxcLT5ZZMZ9m5ldhsxWcvNp%2FuJALDu4oondSEXebmAvtV4hgFEMn49c8Wry3V7eD1RfFME3riBUfd0nT6pK59M%2B5QnQGk9vAlkDg%2FiuTctgTg4BRzkTuSotWojSmzgWsw8zgrm9D91Tcz6rRZsglY0y7LolbCefS9majJEYaVB1eyarvluP6T12Vc1xaVl6ooN%2F22RtejFA9uZ9jOCy92S5ZWpjw8Nl23bvtBSNSAG5G4yN22m5jAQNLPr8CQJ608Up24KMhMp2eJdyLV1EIyX5ohqhwZMGzo%2FNefjZnEjcoQQjAKak%2BeeDSxWRdHktQQT72BeVis3NosyZwScF0AH7dAC372PPX2opcJuemzhHMmiyqzMACBuUDbPvZEyDpM11MZwv6voLBamvuwiXiuCSMokRJEH%2BqBj3njjLEdvnk%2BYWeoFONhjRCqoCMKOFjIe0ZDgsVVt7ouVQBke%2FbYOdSZrNYByC9beDQKb5UMQi7I6e8B8p1Kr0WZTnsjU8cZRNynWzQYHlsBlrH%2FShOLfciVZ%2F%2BdV%2B82ArCVMKqt4aJtAv4x4QVe6k0nUusFtmOQb%2FG3e2xm8kgsERcS4ncn%2B3TwsYzWTuMqIXLqGwMLittcQGOqUBaeb2hpnBdzSkm8loTXQZHYc%2FCDHSrTcgjgbYYI8xmZPcCRKIDObKnBCN0Q7FlkOIwYys6oI0vw981Wdlj7fjKL74Xgb0u5R7juFvTHmuz%2FLPcKGxHTULJ8md8x45Kphk9kpIi9QcAIH8OjVtYRXZiiDu66C%2BKFjBm5Mi3rCcpNdU0DM6%2BNlhGxkUKvoXZElnM8ZORF2IuPA1EZpii2siTC2tSoSO&X-Amz-Signature=c100e51aa86c141e3075167c2444950c3f1fc1884437f233db6d9d0757b010e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653KWB66F%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIa2t3pXc9Iil%2FKp3i3ZfeyX%2FrddYrh1ckj147rxjd%2FgIgPUh0TpOtewNTtesARBxl%2BkEvU1KXXpQGqrK7o60wetQqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIix%2F%2BnnffqEIPpMsSrcA39FhWmHDVHjGUYBVr3BuRxcLT5ZZMZ9m5ldhsxWcvNp%2FuJALDu4oondSEXebmAvtV4hgFEMn49c8Wry3V7eD1RfFME3riBUfd0nT6pK59M%2B5QnQGk9vAlkDg%2FiuTctgTg4BRzkTuSotWojSmzgWsw8zgrm9D91Tcz6rRZsglY0y7LolbCefS9majJEYaVB1eyarvluP6T12Vc1xaVl6ooN%2F22RtejFA9uZ9jOCy92S5ZWpjw8Nl23bvtBSNSAG5G4yN22m5jAQNLPr8CQJ608Up24KMhMp2eJdyLV1EIyX5ohqhwZMGzo%2FNefjZnEjcoQQjAKak%2BeeDSxWRdHktQQT72BeVis3NosyZwScF0AH7dAC372PPX2opcJuemzhHMmiyqzMACBuUDbPvZEyDpM11MZwv6voLBamvuwiXiuCSMokRJEH%2BqBj3njjLEdvnk%2BYWeoFONhjRCqoCMKOFjIe0ZDgsVVt7ouVQBke%2FbYOdSZrNYByC9beDQKb5UMQi7I6e8B8p1Kr0WZTnsjU8cZRNynWzQYHlsBlrH%2FShOLfciVZ%2F%2BdV%2B82ArCVMKqt4aJtAv4x4QVe6k0nUusFtmOQb%2FG3e2xm8kgsERcS4ncn%2B3TwsYzWTuMqIXLqGwMLittcQGOqUBaeb2hpnBdzSkm8loTXQZHYc%2FCDHSrTcgjgbYYI8xmZPcCRKIDObKnBCN0Q7FlkOIwYys6oI0vw981Wdlj7fjKL74Xgb0u5R7juFvTHmuz%2FLPcKGxHTULJ8md8x45Kphk9kpIi9QcAIH8OjVtYRXZiiDu66C%2BKFjBm5Mi3rCcpNdU0DM6%2BNlhGxkUKvoXZElnM8ZORF2IuPA1EZpii2siTC2tSoSO&X-Amz-Signature=a2c22917e2f667a82ea84cee9c0d908a25465dd74b55456f92bc8871be604810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653KWB66F%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIa2t3pXc9Iil%2FKp3i3ZfeyX%2FrddYrh1ckj147rxjd%2FgIgPUh0TpOtewNTtesARBxl%2BkEvU1KXXpQGqrK7o60wetQqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIix%2F%2BnnffqEIPpMsSrcA39FhWmHDVHjGUYBVr3BuRxcLT5ZZMZ9m5ldhsxWcvNp%2FuJALDu4oondSEXebmAvtV4hgFEMn49c8Wry3V7eD1RfFME3riBUfd0nT6pK59M%2B5QnQGk9vAlkDg%2FiuTctgTg4BRzkTuSotWojSmzgWsw8zgrm9D91Tcz6rRZsglY0y7LolbCefS9majJEYaVB1eyarvluP6T12Vc1xaVl6ooN%2F22RtejFA9uZ9jOCy92S5ZWpjw8Nl23bvtBSNSAG5G4yN22m5jAQNLPr8CQJ608Up24KMhMp2eJdyLV1EIyX5ohqhwZMGzo%2FNefjZnEjcoQQjAKak%2BeeDSxWRdHktQQT72BeVis3NosyZwScF0AH7dAC372PPX2opcJuemzhHMmiyqzMACBuUDbPvZEyDpM11MZwv6voLBamvuwiXiuCSMokRJEH%2BqBj3njjLEdvnk%2BYWeoFONhjRCqoCMKOFjIe0ZDgsVVt7ouVQBke%2FbYOdSZrNYByC9beDQKb5UMQi7I6e8B8p1Kr0WZTnsjU8cZRNynWzQYHlsBlrH%2FShOLfciVZ%2F%2BdV%2B82ArCVMKqt4aJtAv4x4QVe6k0nUusFtmOQb%2FG3e2xm8kgsERcS4ncn%2B3TwsYzWTuMqIXLqGwMLittcQGOqUBaeb2hpnBdzSkm8loTXQZHYc%2FCDHSrTcgjgbYYI8xmZPcCRKIDObKnBCN0Q7FlkOIwYys6oI0vw981Wdlj7fjKL74Xgb0u5R7juFvTHmuz%2FLPcKGxHTULJ8md8x45Kphk9kpIi9QcAIH8OjVtYRXZiiDu66C%2BKFjBm5Mi3rCcpNdU0DM6%2BNlhGxkUKvoXZElnM8ZORF2IuPA1EZpii2siTC2tSoSO&X-Amz-Signature=e9149544f619d22835f251cfac6382c0245db3b9af0a5d2d336887f44e99c14e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653KWB66F%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIa2t3pXc9Iil%2FKp3i3ZfeyX%2FrddYrh1ckj147rxjd%2FgIgPUh0TpOtewNTtesARBxl%2BkEvU1KXXpQGqrK7o60wetQqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIix%2F%2BnnffqEIPpMsSrcA39FhWmHDVHjGUYBVr3BuRxcLT5ZZMZ9m5ldhsxWcvNp%2FuJALDu4oondSEXebmAvtV4hgFEMn49c8Wry3V7eD1RfFME3riBUfd0nT6pK59M%2B5QnQGk9vAlkDg%2FiuTctgTg4BRzkTuSotWojSmzgWsw8zgrm9D91Tcz6rRZsglY0y7LolbCefS9majJEYaVB1eyarvluP6T12Vc1xaVl6ooN%2F22RtejFA9uZ9jOCy92S5ZWpjw8Nl23bvtBSNSAG5G4yN22m5jAQNLPr8CQJ608Up24KMhMp2eJdyLV1EIyX5ohqhwZMGzo%2FNefjZnEjcoQQjAKak%2BeeDSxWRdHktQQT72BeVis3NosyZwScF0AH7dAC372PPX2opcJuemzhHMmiyqzMACBuUDbPvZEyDpM11MZwv6voLBamvuwiXiuCSMokRJEH%2BqBj3njjLEdvnk%2BYWeoFONhjRCqoCMKOFjIe0ZDgsVVt7ouVQBke%2FbYOdSZrNYByC9beDQKb5UMQi7I6e8B8p1Kr0WZTnsjU8cZRNynWzQYHlsBlrH%2FShOLfciVZ%2F%2BdV%2B82ArCVMKqt4aJtAv4x4QVe6k0nUusFtmOQb%2FG3e2xm8kgsERcS4ncn%2B3TwsYzWTuMqIXLqGwMLittcQGOqUBaeb2hpnBdzSkm8loTXQZHYc%2FCDHSrTcgjgbYYI8xmZPcCRKIDObKnBCN0Q7FlkOIwYys6oI0vw981Wdlj7fjKL74Xgb0u5R7juFvTHmuz%2FLPcKGxHTULJ8md8x45Kphk9kpIi9QcAIH8OjVtYRXZiiDu66C%2BKFjBm5Mi3rCcpNdU0DM6%2BNlhGxkUKvoXZElnM8ZORF2IuPA1EZpii2siTC2tSoSO&X-Amz-Signature=2069627fe79406087e9f6e5a67c77ded636cfd2af89e5919a4750d9211b59be3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653KWB66F%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIa2t3pXc9Iil%2FKp3i3ZfeyX%2FrddYrh1ckj147rxjd%2FgIgPUh0TpOtewNTtesARBxl%2BkEvU1KXXpQGqrK7o60wetQqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIix%2F%2BnnffqEIPpMsSrcA39FhWmHDVHjGUYBVr3BuRxcLT5ZZMZ9m5ldhsxWcvNp%2FuJALDu4oondSEXebmAvtV4hgFEMn49c8Wry3V7eD1RfFME3riBUfd0nT6pK59M%2B5QnQGk9vAlkDg%2FiuTctgTg4BRzkTuSotWojSmzgWsw8zgrm9D91Tcz6rRZsglY0y7LolbCefS9majJEYaVB1eyarvluP6T12Vc1xaVl6ooN%2F22RtejFA9uZ9jOCy92S5ZWpjw8Nl23bvtBSNSAG5G4yN22m5jAQNLPr8CQJ608Up24KMhMp2eJdyLV1EIyX5ohqhwZMGzo%2FNefjZnEjcoQQjAKak%2BeeDSxWRdHktQQT72BeVis3NosyZwScF0AH7dAC372PPX2opcJuemzhHMmiyqzMACBuUDbPvZEyDpM11MZwv6voLBamvuwiXiuCSMokRJEH%2BqBj3njjLEdvnk%2BYWeoFONhjRCqoCMKOFjIe0ZDgsVVt7ouVQBke%2FbYOdSZrNYByC9beDQKb5UMQi7I6e8B8p1Kr0WZTnsjU8cZRNynWzQYHlsBlrH%2FShOLfciVZ%2F%2BdV%2B82ArCVMKqt4aJtAv4x4QVe6k0nUusFtmOQb%2FG3e2xm8kgsERcS4ncn%2B3TwsYzWTuMqIXLqGwMLittcQGOqUBaeb2hpnBdzSkm8loTXQZHYc%2FCDHSrTcgjgbYYI8xmZPcCRKIDObKnBCN0Q7FlkOIwYys6oI0vw981Wdlj7fjKL74Xgb0u5R7juFvTHmuz%2FLPcKGxHTULJ8md8x45Kphk9kpIi9QcAIH8OjVtYRXZiiDu66C%2BKFjBm5Mi3rCcpNdU0DM6%2BNlhGxkUKvoXZElnM8ZORF2IuPA1EZpii2siTC2tSoSO&X-Amz-Signature=192d8db270f98ee72bb9398817103b324c0f79099de7f2123da230556275da96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
