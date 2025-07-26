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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666TNIBHC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCICltiJ8ZjlMPms5xdGXtjDo2zLh3ZCT8pR27ikroAQjPAiBxNzCd%2B4sRtNynFmzwMh%2FKbTMzjJwndWGRQP%2BQVzDp%2Fyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM6IsUmC7AWSOKH3AIKtwDynXOJHR77gxLnB2d4Awx0PZaeq6tONQefhAjPLSjAWFiIXpl4AQmV3XvOcYgEqEc0H4Uydfb43eIfeD6lB5FHcO2ymNxLVk27ck4zxL5DlphARDN6ZNEXvElhnPPa9Sl94S3xqHoE%2F1CaZAO4Zy50mGxnvPiYsbrXOtoWNP%2FUtJ%2BRT0FZjwviA2qYkWGm49hTebKojqhl99ClQn6PCwb42ghCl038Qd3%2FIScB1VK8E9TIjDF0rvn4paLdOAFhiw2j47tT%2B8rbr4%2B%2BqEsN%2FkyooQSu23UutWxzrF7u59HyY6FNUg4sXFcIIOcRmd%2FopE2%2F1N0Sks7rX3vfOxVOpuzJeRJEjhOHjbQKSGJ6zsT5sHbzOU%2FEem5zX7i6sex5NzYOEr3OHRo6TUs757GXpMb7X9XMndIOcmTeMQrjRCtCNQD3zWguLu5xtaqcAzTJHK0O1SihAqj8%2FNEy1H8aHCKtB8zi0aQ7%2BVIcUs23R%2BLJ5Bpi7MMMmBbJ8SFDPyvbswwgMcfNVzdcjK9KpCoXJsbxpAHQCw5RcpQUNemyfUKGkHsUjy%2B%2FYxZGGgyCRKtbo4jv3f%2FUIhnEXFz9HH3ldh7zXB1RQV5cj3AI8WmhL9dhOHMnjEoLLHQ1ePgzaQwwv%2BUxAY6pgGXl6BaB6CYV3rgKEKq6fKYXQ0Sbtg7qiQ5bxc%2BiqZGlCTZoS%2BcQ0o7TD%2BivxZ6aRxB%2BDP64ZXZZQUAFkJLvGugj4fKQ%2Bimq55l8qCE3QsR%2FdicgrWoSw5PFOFu4PRS3q5xxgMo%2B1WMxKGgTTmOXY5z5VmkTg1OD7xNgVWKw%2BG3A3YJK5V7lhrd%2FrQC4tsBuZDi7EuuzKZFNQezoR94eAR3ZqXK0awx&X-Amz-Signature=bf06f60be47fd1f10ea427b3d4630bb2fe7ab29dc02d8c2b5296740f6501bdeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666TNIBHC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCICltiJ8ZjlMPms5xdGXtjDo2zLh3ZCT8pR27ikroAQjPAiBxNzCd%2B4sRtNynFmzwMh%2FKbTMzjJwndWGRQP%2BQVzDp%2Fyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM6IsUmC7AWSOKH3AIKtwDynXOJHR77gxLnB2d4Awx0PZaeq6tONQefhAjPLSjAWFiIXpl4AQmV3XvOcYgEqEc0H4Uydfb43eIfeD6lB5FHcO2ymNxLVk27ck4zxL5DlphARDN6ZNEXvElhnPPa9Sl94S3xqHoE%2F1CaZAO4Zy50mGxnvPiYsbrXOtoWNP%2FUtJ%2BRT0FZjwviA2qYkWGm49hTebKojqhl99ClQn6PCwb42ghCl038Qd3%2FIScB1VK8E9TIjDF0rvn4paLdOAFhiw2j47tT%2B8rbr4%2B%2BqEsN%2FkyooQSu23UutWxzrF7u59HyY6FNUg4sXFcIIOcRmd%2FopE2%2F1N0Sks7rX3vfOxVOpuzJeRJEjhOHjbQKSGJ6zsT5sHbzOU%2FEem5zX7i6sex5NzYOEr3OHRo6TUs757GXpMb7X9XMndIOcmTeMQrjRCtCNQD3zWguLu5xtaqcAzTJHK0O1SihAqj8%2FNEy1H8aHCKtB8zi0aQ7%2BVIcUs23R%2BLJ5Bpi7MMMmBbJ8SFDPyvbswwgMcfNVzdcjK9KpCoXJsbxpAHQCw5RcpQUNemyfUKGkHsUjy%2B%2FYxZGGgyCRKtbo4jv3f%2FUIhnEXFz9HH3ldh7zXB1RQV5cj3AI8WmhL9dhOHMnjEoLLHQ1ePgzaQwwv%2BUxAY6pgGXl6BaB6CYV3rgKEKq6fKYXQ0Sbtg7qiQ5bxc%2BiqZGlCTZoS%2BcQ0o7TD%2BivxZ6aRxB%2BDP64ZXZZQUAFkJLvGugj4fKQ%2Bimq55l8qCE3QsR%2FdicgrWoSw5PFOFu4PRS3q5xxgMo%2B1WMxKGgTTmOXY5z5VmkTg1OD7xNgVWKw%2BG3A3YJK5V7lhrd%2FrQC4tsBuZDi7EuuzKZFNQezoR94eAR3ZqXK0awx&X-Amz-Signature=e3b5e62a825c6251cfb080155b8f986c7fdef6920978ae3fa5c064f2731b9d5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666TNIBHC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCICltiJ8ZjlMPms5xdGXtjDo2zLh3ZCT8pR27ikroAQjPAiBxNzCd%2B4sRtNynFmzwMh%2FKbTMzjJwndWGRQP%2BQVzDp%2Fyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM6IsUmC7AWSOKH3AIKtwDynXOJHR77gxLnB2d4Awx0PZaeq6tONQefhAjPLSjAWFiIXpl4AQmV3XvOcYgEqEc0H4Uydfb43eIfeD6lB5FHcO2ymNxLVk27ck4zxL5DlphARDN6ZNEXvElhnPPa9Sl94S3xqHoE%2F1CaZAO4Zy50mGxnvPiYsbrXOtoWNP%2FUtJ%2BRT0FZjwviA2qYkWGm49hTebKojqhl99ClQn6PCwb42ghCl038Qd3%2FIScB1VK8E9TIjDF0rvn4paLdOAFhiw2j47tT%2B8rbr4%2B%2BqEsN%2FkyooQSu23UutWxzrF7u59HyY6FNUg4sXFcIIOcRmd%2FopE2%2F1N0Sks7rX3vfOxVOpuzJeRJEjhOHjbQKSGJ6zsT5sHbzOU%2FEem5zX7i6sex5NzYOEr3OHRo6TUs757GXpMb7X9XMndIOcmTeMQrjRCtCNQD3zWguLu5xtaqcAzTJHK0O1SihAqj8%2FNEy1H8aHCKtB8zi0aQ7%2BVIcUs23R%2BLJ5Bpi7MMMmBbJ8SFDPyvbswwgMcfNVzdcjK9KpCoXJsbxpAHQCw5RcpQUNemyfUKGkHsUjy%2B%2FYxZGGgyCRKtbo4jv3f%2FUIhnEXFz9HH3ldh7zXB1RQV5cj3AI8WmhL9dhOHMnjEoLLHQ1ePgzaQwwv%2BUxAY6pgGXl6BaB6CYV3rgKEKq6fKYXQ0Sbtg7qiQ5bxc%2BiqZGlCTZoS%2BcQ0o7TD%2BivxZ6aRxB%2BDP64ZXZZQUAFkJLvGugj4fKQ%2Bimq55l8qCE3QsR%2FdicgrWoSw5PFOFu4PRS3q5xxgMo%2B1WMxKGgTTmOXY5z5VmkTg1OD7xNgVWKw%2BG3A3YJK5V7lhrd%2FrQC4tsBuZDi7EuuzKZFNQezoR94eAR3ZqXK0awx&X-Amz-Signature=6f447ce84001d78b33d0f183a854711727845110c4bd945e15b0bc68cba55f2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666TNIBHC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCICltiJ8ZjlMPms5xdGXtjDo2zLh3ZCT8pR27ikroAQjPAiBxNzCd%2B4sRtNynFmzwMh%2FKbTMzjJwndWGRQP%2BQVzDp%2Fyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM6IsUmC7AWSOKH3AIKtwDynXOJHR77gxLnB2d4Awx0PZaeq6tONQefhAjPLSjAWFiIXpl4AQmV3XvOcYgEqEc0H4Uydfb43eIfeD6lB5FHcO2ymNxLVk27ck4zxL5DlphARDN6ZNEXvElhnPPa9Sl94S3xqHoE%2F1CaZAO4Zy50mGxnvPiYsbrXOtoWNP%2FUtJ%2BRT0FZjwviA2qYkWGm49hTebKojqhl99ClQn6PCwb42ghCl038Qd3%2FIScB1VK8E9TIjDF0rvn4paLdOAFhiw2j47tT%2B8rbr4%2B%2BqEsN%2FkyooQSu23UutWxzrF7u59HyY6FNUg4sXFcIIOcRmd%2FopE2%2F1N0Sks7rX3vfOxVOpuzJeRJEjhOHjbQKSGJ6zsT5sHbzOU%2FEem5zX7i6sex5NzYOEr3OHRo6TUs757GXpMb7X9XMndIOcmTeMQrjRCtCNQD3zWguLu5xtaqcAzTJHK0O1SihAqj8%2FNEy1H8aHCKtB8zi0aQ7%2BVIcUs23R%2BLJ5Bpi7MMMmBbJ8SFDPyvbswwgMcfNVzdcjK9KpCoXJsbxpAHQCw5RcpQUNemyfUKGkHsUjy%2B%2FYxZGGgyCRKtbo4jv3f%2FUIhnEXFz9HH3ldh7zXB1RQV5cj3AI8WmhL9dhOHMnjEoLLHQ1ePgzaQwwv%2BUxAY6pgGXl6BaB6CYV3rgKEKq6fKYXQ0Sbtg7qiQ5bxc%2BiqZGlCTZoS%2BcQ0o7TD%2BivxZ6aRxB%2BDP64ZXZZQUAFkJLvGugj4fKQ%2Bimq55l8qCE3QsR%2FdicgrWoSw5PFOFu4PRS3q5xxgMo%2B1WMxKGgTTmOXY5z5VmkTg1OD7xNgVWKw%2BG3A3YJK5V7lhrd%2FrQC4tsBuZDi7EuuzKZFNQezoR94eAR3ZqXK0awx&X-Amz-Signature=f77fd5c917c0bf5851707b623bdb4a40cfdf5bd00127c3dc598fc15debb1b76c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666TNIBHC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCICltiJ8ZjlMPms5xdGXtjDo2zLh3ZCT8pR27ikroAQjPAiBxNzCd%2B4sRtNynFmzwMh%2FKbTMzjJwndWGRQP%2BQVzDp%2Fyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM6IsUmC7AWSOKH3AIKtwDynXOJHR77gxLnB2d4Awx0PZaeq6tONQefhAjPLSjAWFiIXpl4AQmV3XvOcYgEqEc0H4Uydfb43eIfeD6lB5FHcO2ymNxLVk27ck4zxL5DlphARDN6ZNEXvElhnPPa9Sl94S3xqHoE%2F1CaZAO4Zy50mGxnvPiYsbrXOtoWNP%2FUtJ%2BRT0FZjwviA2qYkWGm49hTebKojqhl99ClQn6PCwb42ghCl038Qd3%2FIScB1VK8E9TIjDF0rvn4paLdOAFhiw2j47tT%2B8rbr4%2B%2BqEsN%2FkyooQSu23UutWxzrF7u59HyY6FNUg4sXFcIIOcRmd%2FopE2%2F1N0Sks7rX3vfOxVOpuzJeRJEjhOHjbQKSGJ6zsT5sHbzOU%2FEem5zX7i6sex5NzYOEr3OHRo6TUs757GXpMb7X9XMndIOcmTeMQrjRCtCNQD3zWguLu5xtaqcAzTJHK0O1SihAqj8%2FNEy1H8aHCKtB8zi0aQ7%2BVIcUs23R%2BLJ5Bpi7MMMmBbJ8SFDPyvbswwgMcfNVzdcjK9KpCoXJsbxpAHQCw5RcpQUNemyfUKGkHsUjy%2B%2FYxZGGgyCRKtbo4jv3f%2FUIhnEXFz9HH3ldh7zXB1RQV5cj3AI8WmhL9dhOHMnjEoLLHQ1ePgzaQwwv%2BUxAY6pgGXl6BaB6CYV3rgKEKq6fKYXQ0Sbtg7qiQ5bxc%2BiqZGlCTZoS%2BcQ0o7TD%2BivxZ6aRxB%2BDP64ZXZZQUAFkJLvGugj4fKQ%2Bimq55l8qCE3QsR%2FdicgrWoSw5PFOFu4PRS3q5xxgMo%2B1WMxKGgTTmOXY5z5VmkTg1OD7xNgVWKw%2BG3A3YJK5V7lhrd%2FrQC4tsBuZDi7EuuzKZFNQezoR94eAR3ZqXK0awx&X-Amz-Signature=501c3837a62e2996d796a1252c02424995aad5d1f47124057efb8df0bc767dc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666TNIBHC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCICltiJ8ZjlMPms5xdGXtjDo2zLh3ZCT8pR27ikroAQjPAiBxNzCd%2B4sRtNynFmzwMh%2FKbTMzjJwndWGRQP%2BQVzDp%2Fyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM6IsUmC7AWSOKH3AIKtwDynXOJHR77gxLnB2d4Awx0PZaeq6tONQefhAjPLSjAWFiIXpl4AQmV3XvOcYgEqEc0H4Uydfb43eIfeD6lB5FHcO2ymNxLVk27ck4zxL5DlphARDN6ZNEXvElhnPPa9Sl94S3xqHoE%2F1CaZAO4Zy50mGxnvPiYsbrXOtoWNP%2FUtJ%2BRT0FZjwviA2qYkWGm49hTebKojqhl99ClQn6PCwb42ghCl038Qd3%2FIScB1VK8E9TIjDF0rvn4paLdOAFhiw2j47tT%2B8rbr4%2B%2BqEsN%2FkyooQSu23UutWxzrF7u59HyY6FNUg4sXFcIIOcRmd%2FopE2%2F1N0Sks7rX3vfOxVOpuzJeRJEjhOHjbQKSGJ6zsT5sHbzOU%2FEem5zX7i6sex5NzYOEr3OHRo6TUs757GXpMb7X9XMndIOcmTeMQrjRCtCNQD3zWguLu5xtaqcAzTJHK0O1SihAqj8%2FNEy1H8aHCKtB8zi0aQ7%2BVIcUs23R%2BLJ5Bpi7MMMmBbJ8SFDPyvbswwgMcfNVzdcjK9KpCoXJsbxpAHQCw5RcpQUNemyfUKGkHsUjy%2B%2FYxZGGgyCRKtbo4jv3f%2FUIhnEXFz9HH3ldh7zXB1RQV5cj3AI8WmhL9dhOHMnjEoLLHQ1ePgzaQwwv%2BUxAY6pgGXl6BaB6CYV3rgKEKq6fKYXQ0Sbtg7qiQ5bxc%2BiqZGlCTZoS%2BcQ0o7TD%2BivxZ6aRxB%2BDP64ZXZZQUAFkJLvGugj4fKQ%2Bimq55l8qCE3QsR%2FdicgrWoSw5PFOFu4PRS3q5xxgMo%2B1WMxKGgTTmOXY5z5VmkTg1OD7xNgVWKw%2BG3A3YJK5V7lhrd%2FrQC4tsBuZDi7EuuzKZFNQezoR94eAR3ZqXK0awx&X-Amz-Signature=1fa5aacb00c0ce3701c18b91b940fa7c42ccfa1937e26363382569ba1e2e21e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666TNIBHC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCICltiJ8ZjlMPms5xdGXtjDo2zLh3ZCT8pR27ikroAQjPAiBxNzCd%2B4sRtNynFmzwMh%2FKbTMzjJwndWGRQP%2BQVzDp%2Fyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM6IsUmC7AWSOKH3AIKtwDynXOJHR77gxLnB2d4Awx0PZaeq6tONQefhAjPLSjAWFiIXpl4AQmV3XvOcYgEqEc0H4Uydfb43eIfeD6lB5FHcO2ymNxLVk27ck4zxL5DlphARDN6ZNEXvElhnPPa9Sl94S3xqHoE%2F1CaZAO4Zy50mGxnvPiYsbrXOtoWNP%2FUtJ%2BRT0FZjwviA2qYkWGm49hTebKojqhl99ClQn6PCwb42ghCl038Qd3%2FIScB1VK8E9TIjDF0rvn4paLdOAFhiw2j47tT%2B8rbr4%2B%2BqEsN%2FkyooQSu23UutWxzrF7u59HyY6FNUg4sXFcIIOcRmd%2FopE2%2F1N0Sks7rX3vfOxVOpuzJeRJEjhOHjbQKSGJ6zsT5sHbzOU%2FEem5zX7i6sex5NzYOEr3OHRo6TUs757GXpMb7X9XMndIOcmTeMQrjRCtCNQD3zWguLu5xtaqcAzTJHK0O1SihAqj8%2FNEy1H8aHCKtB8zi0aQ7%2BVIcUs23R%2BLJ5Bpi7MMMmBbJ8SFDPyvbswwgMcfNVzdcjK9KpCoXJsbxpAHQCw5RcpQUNemyfUKGkHsUjy%2B%2FYxZGGgyCRKtbo4jv3f%2FUIhnEXFz9HH3ldh7zXB1RQV5cj3AI8WmhL9dhOHMnjEoLLHQ1ePgzaQwwv%2BUxAY6pgGXl6BaB6CYV3rgKEKq6fKYXQ0Sbtg7qiQ5bxc%2BiqZGlCTZoS%2BcQ0o7TD%2BivxZ6aRxB%2BDP64ZXZZQUAFkJLvGugj4fKQ%2Bimq55l8qCE3QsR%2FdicgrWoSw5PFOFu4PRS3q5xxgMo%2B1WMxKGgTTmOXY5z5VmkTg1OD7xNgVWKw%2BG3A3YJK5V7lhrd%2FrQC4tsBuZDi7EuuzKZFNQezoR94eAR3ZqXK0awx&X-Amz-Signature=666228c2646d58729e3c00ab4b05b80f77a7cdb503d71c59798d522aa5703026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666TNIBHC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCICltiJ8ZjlMPms5xdGXtjDo2zLh3ZCT8pR27ikroAQjPAiBxNzCd%2B4sRtNynFmzwMh%2FKbTMzjJwndWGRQP%2BQVzDp%2Fyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM6IsUmC7AWSOKH3AIKtwDynXOJHR77gxLnB2d4Awx0PZaeq6tONQefhAjPLSjAWFiIXpl4AQmV3XvOcYgEqEc0H4Uydfb43eIfeD6lB5FHcO2ymNxLVk27ck4zxL5DlphARDN6ZNEXvElhnPPa9Sl94S3xqHoE%2F1CaZAO4Zy50mGxnvPiYsbrXOtoWNP%2FUtJ%2BRT0FZjwviA2qYkWGm49hTebKojqhl99ClQn6PCwb42ghCl038Qd3%2FIScB1VK8E9TIjDF0rvn4paLdOAFhiw2j47tT%2B8rbr4%2B%2BqEsN%2FkyooQSu23UutWxzrF7u59HyY6FNUg4sXFcIIOcRmd%2FopE2%2F1N0Sks7rX3vfOxVOpuzJeRJEjhOHjbQKSGJ6zsT5sHbzOU%2FEem5zX7i6sex5NzYOEr3OHRo6TUs757GXpMb7X9XMndIOcmTeMQrjRCtCNQD3zWguLu5xtaqcAzTJHK0O1SihAqj8%2FNEy1H8aHCKtB8zi0aQ7%2BVIcUs23R%2BLJ5Bpi7MMMmBbJ8SFDPyvbswwgMcfNVzdcjK9KpCoXJsbxpAHQCw5RcpQUNemyfUKGkHsUjy%2B%2FYxZGGgyCRKtbo4jv3f%2FUIhnEXFz9HH3ldh7zXB1RQV5cj3AI8WmhL9dhOHMnjEoLLHQ1ePgzaQwwv%2BUxAY6pgGXl6BaB6CYV3rgKEKq6fKYXQ0Sbtg7qiQ5bxc%2BiqZGlCTZoS%2BcQ0o7TD%2BivxZ6aRxB%2BDP64ZXZZQUAFkJLvGugj4fKQ%2Bimq55l8qCE3QsR%2FdicgrWoSw5PFOFu4PRS3q5xxgMo%2B1WMxKGgTTmOXY5z5VmkTg1OD7xNgVWKw%2BG3A3YJK5V7lhrd%2FrQC4tsBuZDi7EuuzKZFNQezoR94eAR3ZqXK0awx&X-Amz-Signature=f71d92832c0262f857309c2fa207599121b69d5be00548290d60907339b6c7ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666TNIBHC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCICltiJ8ZjlMPms5xdGXtjDo2zLh3ZCT8pR27ikroAQjPAiBxNzCd%2B4sRtNynFmzwMh%2FKbTMzjJwndWGRQP%2BQVzDp%2Fyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM6IsUmC7AWSOKH3AIKtwDynXOJHR77gxLnB2d4Awx0PZaeq6tONQefhAjPLSjAWFiIXpl4AQmV3XvOcYgEqEc0H4Uydfb43eIfeD6lB5FHcO2ymNxLVk27ck4zxL5DlphARDN6ZNEXvElhnPPa9Sl94S3xqHoE%2F1CaZAO4Zy50mGxnvPiYsbrXOtoWNP%2FUtJ%2BRT0FZjwviA2qYkWGm49hTebKojqhl99ClQn6PCwb42ghCl038Qd3%2FIScB1VK8E9TIjDF0rvn4paLdOAFhiw2j47tT%2B8rbr4%2B%2BqEsN%2FkyooQSu23UutWxzrF7u59HyY6FNUg4sXFcIIOcRmd%2FopE2%2F1N0Sks7rX3vfOxVOpuzJeRJEjhOHjbQKSGJ6zsT5sHbzOU%2FEem5zX7i6sex5NzYOEr3OHRo6TUs757GXpMb7X9XMndIOcmTeMQrjRCtCNQD3zWguLu5xtaqcAzTJHK0O1SihAqj8%2FNEy1H8aHCKtB8zi0aQ7%2BVIcUs23R%2BLJ5Bpi7MMMmBbJ8SFDPyvbswwgMcfNVzdcjK9KpCoXJsbxpAHQCw5RcpQUNemyfUKGkHsUjy%2B%2FYxZGGgyCRKtbo4jv3f%2FUIhnEXFz9HH3ldh7zXB1RQV5cj3AI8WmhL9dhOHMnjEoLLHQ1ePgzaQwwv%2BUxAY6pgGXl6BaB6CYV3rgKEKq6fKYXQ0Sbtg7qiQ5bxc%2BiqZGlCTZoS%2BcQ0o7TD%2BivxZ6aRxB%2BDP64ZXZZQUAFkJLvGugj4fKQ%2Bimq55l8qCE3QsR%2FdicgrWoSw5PFOFu4PRS3q5xxgMo%2B1WMxKGgTTmOXY5z5VmkTg1OD7xNgVWKw%2BG3A3YJK5V7lhrd%2FrQC4tsBuZDi7EuuzKZFNQezoR94eAR3ZqXK0awx&X-Amz-Signature=afd6620d03b059b64e342c0194fc4186ea9e47f991ecff2dd737ef2853da483f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PRWKXDU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIGtClDj%2BDXDxp6iYSOk%2BXiCiYmFEyJMSnNXy6tfhdMmbAiBddiHartCvWIWwkQsRjG7qwgpsXYjWkaJRGjmM4rIVcSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMDgmTzxZA1P9qvXAlKtwDVc0Ygj8Q%2FXx2fKyttl5Hat51I3C%2F8CSQtPymY9CUx6bNwbP6kAR%2FNaSH%2FapP1BvnHdG13gy6IhfUsQLAslF8gE0bfb1YhghuaejjaLbtUB41G2zl%2BttiYkLMxnwloSgF9YI1u0xhTWSY%2BsMGCQhGBTY02JW6ZUT6aZaZMPavnRdT7JOHCfCn9%2B0Si9dJu3hdLrVcnj8GqqR%2FwlqicgO44pGQMV21r9PEUjiEok3SmRDgU5mJclnABykWxfTImRW%2Bi9frdwz2a%2BKeixxLaEWJvy5DxVbH4euLDeS6Mtyi52s9%2FcC2anasVEViNaHhzYQVBkIjz5YHGW4XNXuy%2FBSiIvRaGyWU9w9MmXg8%2B9V6m84rc0JoIKmB90Gunvvy9Kkh4fEHY%2BYUdEPh0t4xxtRyhESW95sKBtB56HYFGgDhvN%2FLptoyijDt9%2BeltenRU04TcF6vQ%2BET%2FR43zWZXbwVUD7%2B45%2B%2F3E50qIn%2Bs%2FBuq1nev8Ishb%2BRv7VCjPMVheMTdARGMaP1QIg5Gf3uNNwiSrsaXTw15SGJ9dMXBPj40fIxqnDOg%2Fbl1N8pJmDyCv3IJ3umJAMY6HwN1StP9OrvO1%2B4vJPtAOo56mNSquL0eLx4nbp7ITaakvofzvEAwnP%2BUxAY6pgG%2FbtA6ySvTDSzgYl8pxZcqz7HSfHIS9DASiupapWLGCBhFyn%2FvQoJLv8UddiaUHfJKYCiy%2Bu9PLjTjZVRcOLsUiL7h86m2cKxvLKo6nUhBpPhgmwfL569OHYgUvGevBJ8CgNLJiVy7gPiuwMSU6N5D6Mp9T1FYqvFLh4%2Bop3fKYfV%2FZBtw9TDVyWRxzx8SkUfSYwXnVwTPaOMmTzMibFC%2BqMOjteh9&X-Amz-Signature=ccd1a557b634f6895ef4ee1b7c0a82cc9e9b5ac32a123e6d9da9ed6ac0cc35af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666TNIBHC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCICltiJ8ZjlMPms5xdGXtjDo2zLh3ZCT8pR27ikroAQjPAiBxNzCd%2B4sRtNynFmzwMh%2FKbTMzjJwndWGRQP%2BQVzDp%2Fyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM6IsUmC7AWSOKH3AIKtwDynXOJHR77gxLnB2d4Awx0PZaeq6tONQefhAjPLSjAWFiIXpl4AQmV3XvOcYgEqEc0H4Uydfb43eIfeD6lB5FHcO2ymNxLVk27ck4zxL5DlphARDN6ZNEXvElhnPPa9Sl94S3xqHoE%2F1CaZAO4Zy50mGxnvPiYsbrXOtoWNP%2FUtJ%2BRT0FZjwviA2qYkWGm49hTebKojqhl99ClQn6PCwb42ghCl038Qd3%2FIScB1VK8E9TIjDF0rvn4paLdOAFhiw2j47tT%2B8rbr4%2B%2BqEsN%2FkyooQSu23UutWxzrF7u59HyY6FNUg4sXFcIIOcRmd%2FopE2%2F1N0Sks7rX3vfOxVOpuzJeRJEjhOHjbQKSGJ6zsT5sHbzOU%2FEem5zX7i6sex5NzYOEr3OHRo6TUs757GXpMb7X9XMndIOcmTeMQrjRCtCNQD3zWguLu5xtaqcAzTJHK0O1SihAqj8%2FNEy1H8aHCKtB8zi0aQ7%2BVIcUs23R%2BLJ5Bpi7MMMmBbJ8SFDPyvbswwgMcfNVzdcjK9KpCoXJsbxpAHQCw5RcpQUNemyfUKGkHsUjy%2B%2FYxZGGgyCRKtbo4jv3f%2FUIhnEXFz9HH3ldh7zXB1RQV5cj3AI8WmhL9dhOHMnjEoLLHQ1ePgzaQwwv%2BUxAY6pgGXl6BaB6CYV3rgKEKq6fKYXQ0Sbtg7qiQ5bxc%2BiqZGlCTZoS%2BcQ0o7TD%2BivxZ6aRxB%2BDP64ZXZZQUAFkJLvGugj4fKQ%2Bimq55l8qCE3QsR%2FdicgrWoSw5PFOFu4PRS3q5xxgMo%2B1WMxKGgTTmOXY5z5VmkTg1OD7xNgVWKw%2BG3A3YJK5V7lhrd%2FrQC4tsBuZDi7EuuzKZFNQezoR94eAR3ZqXK0awx&X-Amz-Signature=38fa110f49d24a3affb544336e1fa4c40baf22973122d61f1e97fc630919e71f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUATFME7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDtPGt8OKCY%2BED%2FkpyS2Hnnc%2FU5euSWwZWBgcgAPuahygIgWsRAzsw6dWtEpe1A4Y2ndqciN7sb24FDnWXCpXDSyFwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCRDnKThpLA7PGWuWyrcAzLVr56Kf3ExJqNXp2auickEybd2XqPccwMk9GvFugSeYB8mr94wZ5Uh%2BAqMxoEnvI1badj9VT3jFUbYURTwgl%2Fa8%2FW9ONMgW8CY1eFiUApiyzJZEPBJbpz22zUVQ%2BkQ9s7%2B%2FEeQcsFaxzmSuCt8hoaY1%2BREE1iNTd%2BbvGkVrdX54NEAYNe2UcSC2Xw3l%2FQW8IaDIITo69rRgU22Vr6K%2B2dIysHpz1S5mCBgGPYmHNt1G6NzGXia80yVwvTJehZ7WMiWmaYdNC83BOecgt5cAmHgUGuR2pWaI6TynMlBvFZ7mWeMjCgOSR5UCU23R4Kw%2B9Q8wGU%2FSREDiF1pEVFJErTZZr0NPkHWS6uzvtStFU8HJvIfYqCYYEX6cvG%2Flc%2Bhvd19FVi5ZF0lkXULe8UDX4b%2BQCiVCM6zqKVPclwV4LZ4S3r9GIleubkv2EzFKfma29Hw9jRsCQjJpIWH%2Bt2JrFg%2BSmBrmPbsH%2BWHD5M6X9VUME8E9BB%2FOzIjW%2BHzppxnBsS4Y3EjWNM3a6Llxlht1CDP9d7t7JRJVU0H3rgTmJmZfr8Zatt23y33nQNURUFZt9D63n0L37jWPpjW%2BR2Xs9UxANC0iqTb0XE2FHdskKyG08HlpaflYjcpt1GRMJv%2FlMQGOqUBt%2Ff6EBsCMKnNs2tNtLPWaTsvpWj7gkUUa7KtpOVqH3aGNSm%2BasWusyuvSehfH8BiPRiTDPRf0oJ%2FLUSQf8TXtAn2BRrsrP5wv%2FkNjAFIQ1vbwfAqcs1asW5EWplSLxMEB%2BqwMy%2F%2FDA29FZPB48in5AqotM8xwzuOnbvefUe5RW3FtlkPOf6622gdh47RAqUMhwDah%2FRBCBHQUycCQ8gAgOIAcsrG&X-Amz-Signature=d2455e2515fb0c53497b30f2ae4b6a53ab444c8bbbb1ce24cefa34a501b97b5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUATFME7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDtPGt8OKCY%2BED%2FkpyS2Hnnc%2FU5euSWwZWBgcgAPuahygIgWsRAzsw6dWtEpe1A4Y2ndqciN7sb24FDnWXCpXDSyFwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCRDnKThpLA7PGWuWyrcAzLVr56Kf3ExJqNXp2auickEybd2XqPccwMk9GvFugSeYB8mr94wZ5Uh%2BAqMxoEnvI1badj9VT3jFUbYURTwgl%2Fa8%2FW9ONMgW8CY1eFiUApiyzJZEPBJbpz22zUVQ%2BkQ9s7%2B%2FEeQcsFaxzmSuCt8hoaY1%2BREE1iNTd%2BbvGkVrdX54NEAYNe2UcSC2Xw3l%2FQW8IaDIITo69rRgU22Vr6K%2B2dIysHpz1S5mCBgGPYmHNt1G6NzGXia80yVwvTJehZ7WMiWmaYdNC83BOecgt5cAmHgUGuR2pWaI6TynMlBvFZ7mWeMjCgOSR5UCU23R4Kw%2B9Q8wGU%2FSREDiF1pEVFJErTZZr0NPkHWS6uzvtStFU8HJvIfYqCYYEX6cvG%2Flc%2Bhvd19FVi5ZF0lkXULe8UDX4b%2BQCiVCM6zqKVPclwV4LZ4S3r9GIleubkv2EzFKfma29Hw9jRsCQjJpIWH%2Bt2JrFg%2BSmBrmPbsH%2BWHD5M6X9VUME8E9BB%2FOzIjW%2BHzppxnBsS4Y3EjWNM3a6Llxlht1CDP9d7t7JRJVU0H3rgTmJmZfr8Zatt23y33nQNURUFZt9D63n0L37jWPpjW%2BR2Xs9UxANC0iqTb0XE2FHdskKyG08HlpaflYjcpt1GRMJv%2FlMQGOqUBt%2Ff6EBsCMKnNs2tNtLPWaTsvpWj7gkUUa7KtpOVqH3aGNSm%2BasWusyuvSehfH8BiPRiTDPRf0oJ%2FLUSQf8TXtAn2BRrsrP5wv%2FkNjAFIQ1vbwfAqcs1asW5EWplSLxMEB%2BqwMy%2F%2FDA29FZPB48in5AqotM8xwzuOnbvefUe5RW3FtlkPOf6622gdh47RAqUMhwDah%2FRBCBHQUycCQ8gAgOIAcsrG&X-Amz-Signature=7f551fd0315944f125f350bb6366566e9e18ac34e92feba5ff478c9fb16d652e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUATFME7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDtPGt8OKCY%2BED%2FkpyS2Hnnc%2FU5euSWwZWBgcgAPuahygIgWsRAzsw6dWtEpe1A4Y2ndqciN7sb24FDnWXCpXDSyFwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCRDnKThpLA7PGWuWyrcAzLVr56Kf3ExJqNXp2auickEybd2XqPccwMk9GvFugSeYB8mr94wZ5Uh%2BAqMxoEnvI1badj9VT3jFUbYURTwgl%2Fa8%2FW9ONMgW8CY1eFiUApiyzJZEPBJbpz22zUVQ%2BkQ9s7%2B%2FEeQcsFaxzmSuCt8hoaY1%2BREE1iNTd%2BbvGkVrdX54NEAYNe2UcSC2Xw3l%2FQW8IaDIITo69rRgU22Vr6K%2B2dIysHpz1S5mCBgGPYmHNt1G6NzGXia80yVwvTJehZ7WMiWmaYdNC83BOecgt5cAmHgUGuR2pWaI6TynMlBvFZ7mWeMjCgOSR5UCU23R4Kw%2B9Q8wGU%2FSREDiF1pEVFJErTZZr0NPkHWS6uzvtStFU8HJvIfYqCYYEX6cvG%2Flc%2Bhvd19FVi5ZF0lkXULe8UDX4b%2BQCiVCM6zqKVPclwV4LZ4S3r9GIleubkv2EzFKfma29Hw9jRsCQjJpIWH%2Bt2JrFg%2BSmBrmPbsH%2BWHD5M6X9VUME8E9BB%2FOzIjW%2BHzppxnBsS4Y3EjWNM3a6Llxlht1CDP9d7t7JRJVU0H3rgTmJmZfr8Zatt23y33nQNURUFZt9D63n0L37jWPpjW%2BR2Xs9UxANC0iqTb0XE2FHdskKyG08HlpaflYjcpt1GRMJv%2FlMQGOqUBt%2Ff6EBsCMKnNs2tNtLPWaTsvpWj7gkUUa7KtpOVqH3aGNSm%2BasWusyuvSehfH8BiPRiTDPRf0oJ%2FLUSQf8TXtAn2BRrsrP5wv%2FkNjAFIQ1vbwfAqcs1asW5EWplSLxMEB%2BqwMy%2F%2FDA29FZPB48in5AqotM8xwzuOnbvefUe5RW3FtlkPOf6622gdh47RAqUMhwDah%2FRBCBHQUycCQ8gAgOIAcsrG&X-Amz-Signature=315c17afccc3e9ea6bcf2ba2b640a7c4d7858e2ecfa658bcae4a87de6d0ac490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUATFME7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDtPGt8OKCY%2BED%2FkpyS2Hnnc%2FU5euSWwZWBgcgAPuahygIgWsRAzsw6dWtEpe1A4Y2ndqciN7sb24FDnWXCpXDSyFwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCRDnKThpLA7PGWuWyrcAzLVr56Kf3ExJqNXp2auickEybd2XqPccwMk9GvFugSeYB8mr94wZ5Uh%2BAqMxoEnvI1badj9VT3jFUbYURTwgl%2Fa8%2FW9ONMgW8CY1eFiUApiyzJZEPBJbpz22zUVQ%2BkQ9s7%2B%2FEeQcsFaxzmSuCt8hoaY1%2BREE1iNTd%2BbvGkVrdX54NEAYNe2UcSC2Xw3l%2FQW8IaDIITo69rRgU22Vr6K%2B2dIysHpz1S5mCBgGPYmHNt1G6NzGXia80yVwvTJehZ7WMiWmaYdNC83BOecgt5cAmHgUGuR2pWaI6TynMlBvFZ7mWeMjCgOSR5UCU23R4Kw%2B9Q8wGU%2FSREDiF1pEVFJErTZZr0NPkHWS6uzvtStFU8HJvIfYqCYYEX6cvG%2Flc%2Bhvd19FVi5ZF0lkXULe8UDX4b%2BQCiVCM6zqKVPclwV4LZ4S3r9GIleubkv2EzFKfma29Hw9jRsCQjJpIWH%2Bt2JrFg%2BSmBrmPbsH%2BWHD5M6X9VUME8E9BB%2FOzIjW%2BHzppxnBsS4Y3EjWNM3a6Llxlht1CDP9d7t7JRJVU0H3rgTmJmZfr8Zatt23y33nQNURUFZt9D63n0L37jWPpjW%2BR2Xs9UxANC0iqTb0XE2FHdskKyG08HlpaflYjcpt1GRMJv%2FlMQGOqUBt%2Ff6EBsCMKnNs2tNtLPWaTsvpWj7gkUUa7KtpOVqH3aGNSm%2BasWusyuvSehfH8BiPRiTDPRf0oJ%2FLUSQf8TXtAn2BRrsrP5wv%2FkNjAFIQ1vbwfAqcs1asW5EWplSLxMEB%2BqwMy%2F%2FDA29FZPB48in5AqotM8xwzuOnbvefUe5RW3FtlkPOf6622gdh47RAqUMhwDah%2FRBCBHQUycCQ8gAgOIAcsrG&X-Amz-Signature=efa22f3b7e8cd6ebf7d6d8f4e543f69f4e1503407f655aa83452259a29b9674d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUATFME7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDtPGt8OKCY%2BED%2FkpyS2Hnnc%2FU5euSWwZWBgcgAPuahygIgWsRAzsw6dWtEpe1A4Y2ndqciN7sb24FDnWXCpXDSyFwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCRDnKThpLA7PGWuWyrcAzLVr56Kf3ExJqNXp2auickEybd2XqPccwMk9GvFugSeYB8mr94wZ5Uh%2BAqMxoEnvI1badj9VT3jFUbYURTwgl%2Fa8%2FW9ONMgW8CY1eFiUApiyzJZEPBJbpz22zUVQ%2BkQ9s7%2B%2FEeQcsFaxzmSuCt8hoaY1%2BREE1iNTd%2BbvGkVrdX54NEAYNe2UcSC2Xw3l%2FQW8IaDIITo69rRgU22Vr6K%2B2dIysHpz1S5mCBgGPYmHNt1G6NzGXia80yVwvTJehZ7WMiWmaYdNC83BOecgt5cAmHgUGuR2pWaI6TynMlBvFZ7mWeMjCgOSR5UCU23R4Kw%2B9Q8wGU%2FSREDiF1pEVFJErTZZr0NPkHWS6uzvtStFU8HJvIfYqCYYEX6cvG%2Flc%2Bhvd19FVi5ZF0lkXULe8UDX4b%2BQCiVCM6zqKVPclwV4LZ4S3r9GIleubkv2EzFKfma29Hw9jRsCQjJpIWH%2Bt2JrFg%2BSmBrmPbsH%2BWHD5M6X9VUME8E9BB%2FOzIjW%2BHzppxnBsS4Y3EjWNM3a6Llxlht1CDP9d7t7JRJVU0H3rgTmJmZfr8Zatt23y33nQNURUFZt9D63n0L37jWPpjW%2BR2Xs9UxANC0iqTb0XE2FHdskKyG08HlpaflYjcpt1GRMJv%2FlMQGOqUBt%2Ff6EBsCMKnNs2tNtLPWaTsvpWj7gkUUa7KtpOVqH3aGNSm%2BasWusyuvSehfH8BiPRiTDPRf0oJ%2FLUSQf8TXtAn2BRrsrP5wv%2FkNjAFIQ1vbwfAqcs1asW5EWplSLxMEB%2BqwMy%2F%2FDA29FZPB48in5AqotM8xwzuOnbvefUe5RW3FtlkPOf6622gdh47RAqUMhwDah%2FRBCBHQUycCQ8gAgOIAcsrG&X-Amz-Signature=849a20f8d653f1dc509f6c8da63f9b79c0d68018da22a99fee862570c8a0e078&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUATFME7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDtPGt8OKCY%2BED%2FkpyS2Hnnc%2FU5euSWwZWBgcgAPuahygIgWsRAzsw6dWtEpe1A4Y2ndqciN7sb24FDnWXCpXDSyFwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCRDnKThpLA7PGWuWyrcAzLVr56Kf3ExJqNXp2auickEybd2XqPccwMk9GvFugSeYB8mr94wZ5Uh%2BAqMxoEnvI1badj9VT3jFUbYURTwgl%2Fa8%2FW9ONMgW8CY1eFiUApiyzJZEPBJbpz22zUVQ%2BkQ9s7%2B%2FEeQcsFaxzmSuCt8hoaY1%2BREE1iNTd%2BbvGkVrdX54NEAYNe2UcSC2Xw3l%2FQW8IaDIITo69rRgU22Vr6K%2B2dIysHpz1S5mCBgGPYmHNt1G6NzGXia80yVwvTJehZ7WMiWmaYdNC83BOecgt5cAmHgUGuR2pWaI6TynMlBvFZ7mWeMjCgOSR5UCU23R4Kw%2B9Q8wGU%2FSREDiF1pEVFJErTZZr0NPkHWS6uzvtStFU8HJvIfYqCYYEX6cvG%2Flc%2Bhvd19FVi5ZF0lkXULe8UDX4b%2BQCiVCM6zqKVPclwV4LZ4S3r9GIleubkv2EzFKfma29Hw9jRsCQjJpIWH%2Bt2JrFg%2BSmBrmPbsH%2BWHD5M6X9VUME8E9BB%2FOzIjW%2BHzppxnBsS4Y3EjWNM3a6Llxlht1CDP9d7t7JRJVU0H3rgTmJmZfr8Zatt23y33nQNURUFZt9D63n0L37jWPpjW%2BR2Xs9UxANC0iqTb0XE2FHdskKyG08HlpaflYjcpt1GRMJv%2FlMQGOqUBt%2Ff6EBsCMKnNs2tNtLPWaTsvpWj7gkUUa7KtpOVqH3aGNSm%2BasWusyuvSehfH8BiPRiTDPRf0oJ%2FLUSQf8TXtAn2BRrsrP5wv%2FkNjAFIQ1vbwfAqcs1asW5EWplSLxMEB%2BqwMy%2F%2FDA29FZPB48in5AqotM8xwzuOnbvefUe5RW3FtlkPOf6622gdh47RAqUMhwDah%2FRBCBHQUycCQ8gAgOIAcsrG&X-Amz-Signature=73bf3fb25e470a9514d7ccba832d6c90d373c55bfbb4f149f166802ca3d7d8a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUATFME7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDtPGt8OKCY%2BED%2FkpyS2Hnnc%2FU5euSWwZWBgcgAPuahygIgWsRAzsw6dWtEpe1A4Y2ndqciN7sb24FDnWXCpXDSyFwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCRDnKThpLA7PGWuWyrcAzLVr56Kf3ExJqNXp2auickEybd2XqPccwMk9GvFugSeYB8mr94wZ5Uh%2BAqMxoEnvI1badj9VT3jFUbYURTwgl%2Fa8%2FW9ONMgW8CY1eFiUApiyzJZEPBJbpz22zUVQ%2BkQ9s7%2B%2FEeQcsFaxzmSuCt8hoaY1%2BREE1iNTd%2BbvGkVrdX54NEAYNe2UcSC2Xw3l%2FQW8IaDIITo69rRgU22Vr6K%2B2dIysHpz1S5mCBgGPYmHNt1G6NzGXia80yVwvTJehZ7WMiWmaYdNC83BOecgt5cAmHgUGuR2pWaI6TynMlBvFZ7mWeMjCgOSR5UCU23R4Kw%2B9Q8wGU%2FSREDiF1pEVFJErTZZr0NPkHWS6uzvtStFU8HJvIfYqCYYEX6cvG%2Flc%2Bhvd19FVi5ZF0lkXULe8UDX4b%2BQCiVCM6zqKVPclwV4LZ4S3r9GIleubkv2EzFKfma29Hw9jRsCQjJpIWH%2Bt2JrFg%2BSmBrmPbsH%2BWHD5M6X9VUME8E9BB%2FOzIjW%2BHzppxnBsS4Y3EjWNM3a6Llxlht1CDP9d7t7JRJVU0H3rgTmJmZfr8Zatt23y33nQNURUFZt9D63n0L37jWPpjW%2BR2Xs9UxANC0iqTb0XE2FHdskKyG08HlpaflYjcpt1GRMJv%2FlMQGOqUBt%2Ff6EBsCMKnNs2tNtLPWaTsvpWj7gkUUa7KtpOVqH3aGNSm%2BasWusyuvSehfH8BiPRiTDPRf0oJ%2FLUSQf8TXtAn2BRrsrP5wv%2FkNjAFIQ1vbwfAqcs1asW5EWplSLxMEB%2BqwMy%2F%2FDA29FZPB48in5AqotM8xwzuOnbvefUe5RW3FtlkPOf6622gdh47RAqUMhwDah%2FRBCBHQUycCQ8gAgOIAcsrG&X-Amz-Signature=24523330aadba494558478a51b65adedf050e95d7eec9ca40065accbe3e990a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
