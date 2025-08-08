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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NQOXNBJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDLFeVWY2C64J3oOUvJQFWalUfTQUsVclIk5bGB1XoBOQIhAKPwx2vpq62tLzTRRKPaSdLVAeDa2CUNiirxpCgkTSXKKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfQdYK5b%2FW3BEuiUkq3AOtycJ5KMralcs%2FiFRs0bBmgbVFF3k9flEFoP9g4ilhuUbGpxAi2O5mwZ4KikqjoNty01bKvCJZ1z9Y%2BdRJmsh2o8%2FRibxa%2F6VNeVnsQP866hW%2FoeNikX%2BixkL7gct46FRKxV2rfQLmqRQgz4pkS9KfFgrXNbgwfBYx4rONw66KKiMxlODqwVlC1zMN5eSI4kkIvJJuNpbLqy9L0Mjhs%2BOl%2B87ZrUB4PKg89u5TSvlyMLeymD6GJxA9lxpMSsXUH7n3VTIZ0EzbnmUoDn4A4AlqJrp4qfh8tBWtAXAEnYm%2B01f2Xe%2BryA21G85j7BrhOtWzlo3Z9aBKWY4%2FuChl2lNKJ6917duIsvLMKr%2Boad%2FBv6J6DzPSYKxIC9GDGRJrtfbGk6tk8%2FuHNtVy1x4OnyLs%2FAufHE9L1EFeAI%2FbVRJXJ2uyz0rWu7qATZn%2F5ukpZkVyc4w%2FiDcmH4%2FwNYegxoX%2FA2h%2BiDQDtDyQvn1k2cd6lLB%2FmK%2Bme2yldmnRFnXVsdrPeG8v6piDJBrfsFC9I6AxDDL3weTQ%2FN4n6qrFtvODDNlH5HqdZbQGECe8Bkwu9iX%2BcLcChOwrQJKZo%2BTBNtUeGKhrcxWdgYSTodYtaHa9I0bi%2BEIPQCGMZlWbxTCw7dbEBjqkAf9VFHUlFx1vN5W51vTn3ZUsNMbJtzezmNCFK38SY9CT14Aud5eYYRpJwNASR3OpCSzUrwzlMTiCAt4bFCx%2BZsd58mEFfV8Hg1iwjYtSF2HO4ME8rbpGlQFrMu2PrvQuoWk5ryZNZqV3tlzBhlHVz9OdXavfsaQEAjKJ%2BYF43KsqVgC%2BMQbE9EC26GcLwX4j4fzgyU%2F4naJzcmwqP3H9870lteeI&X-Amz-Signature=0f19e678e477094e17d0be410a24fb0991924202405da769fbd6d44e42a2c515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NQOXNBJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDLFeVWY2C64J3oOUvJQFWalUfTQUsVclIk5bGB1XoBOQIhAKPwx2vpq62tLzTRRKPaSdLVAeDa2CUNiirxpCgkTSXKKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfQdYK5b%2FW3BEuiUkq3AOtycJ5KMralcs%2FiFRs0bBmgbVFF3k9flEFoP9g4ilhuUbGpxAi2O5mwZ4KikqjoNty01bKvCJZ1z9Y%2BdRJmsh2o8%2FRibxa%2F6VNeVnsQP866hW%2FoeNikX%2BixkL7gct46FRKxV2rfQLmqRQgz4pkS9KfFgrXNbgwfBYx4rONw66KKiMxlODqwVlC1zMN5eSI4kkIvJJuNpbLqy9L0Mjhs%2BOl%2B87ZrUB4PKg89u5TSvlyMLeymD6GJxA9lxpMSsXUH7n3VTIZ0EzbnmUoDn4A4AlqJrp4qfh8tBWtAXAEnYm%2B01f2Xe%2BryA21G85j7BrhOtWzlo3Z9aBKWY4%2FuChl2lNKJ6917duIsvLMKr%2Boad%2FBv6J6DzPSYKxIC9GDGRJrtfbGk6tk8%2FuHNtVy1x4OnyLs%2FAufHE9L1EFeAI%2FbVRJXJ2uyz0rWu7qATZn%2F5ukpZkVyc4w%2FiDcmH4%2FwNYegxoX%2FA2h%2BiDQDtDyQvn1k2cd6lLB%2FmK%2Bme2yldmnRFnXVsdrPeG8v6piDJBrfsFC9I6AxDDL3weTQ%2FN4n6qrFtvODDNlH5HqdZbQGECe8Bkwu9iX%2BcLcChOwrQJKZo%2BTBNtUeGKhrcxWdgYSTodYtaHa9I0bi%2BEIPQCGMZlWbxTCw7dbEBjqkAf9VFHUlFx1vN5W51vTn3ZUsNMbJtzezmNCFK38SY9CT14Aud5eYYRpJwNASR3OpCSzUrwzlMTiCAt4bFCx%2BZsd58mEFfV8Hg1iwjYtSF2HO4ME8rbpGlQFrMu2PrvQuoWk5ryZNZqV3tlzBhlHVz9OdXavfsaQEAjKJ%2BYF43KsqVgC%2BMQbE9EC26GcLwX4j4fzgyU%2F4naJzcmwqP3H9870lteeI&X-Amz-Signature=b5ff0a31cfd0ab0c05ebc827b52e9a767c5d206c459bb4464eb0e6255247445a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NQOXNBJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDLFeVWY2C64J3oOUvJQFWalUfTQUsVclIk5bGB1XoBOQIhAKPwx2vpq62tLzTRRKPaSdLVAeDa2CUNiirxpCgkTSXKKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfQdYK5b%2FW3BEuiUkq3AOtycJ5KMralcs%2FiFRs0bBmgbVFF3k9flEFoP9g4ilhuUbGpxAi2O5mwZ4KikqjoNty01bKvCJZ1z9Y%2BdRJmsh2o8%2FRibxa%2F6VNeVnsQP866hW%2FoeNikX%2BixkL7gct46FRKxV2rfQLmqRQgz4pkS9KfFgrXNbgwfBYx4rONw66KKiMxlODqwVlC1zMN5eSI4kkIvJJuNpbLqy9L0Mjhs%2BOl%2B87ZrUB4PKg89u5TSvlyMLeymD6GJxA9lxpMSsXUH7n3VTIZ0EzbnmUoDn4A4AlqJrp4qfh8tBWtAXAEnYm%2B01f2Xe%2BryA21G85j7BrhOtWzlo3Z9aBKWY4%2FuChl2lNKJ6917duIsvLMKr%2Boad%2FBv6J6DzPSYKxIC9GDGRJrtfbGk6tk8%2FuHNtVy1x4OnyLs%2FAufHE9L1EFeAI%2FbVRJXJ2uyz0rWu7qATZn%2F5ukpZkVyc4w%2FiDcmH4%2FwNYegxoX%2FA2h%2BiDQDtDyQvn1k2cd6lLB%2FmK%2Bme2yldmnRFnXVsdrPeG8v6piDJBrfsFC9I6AxDDL3weTQ%2FN4n6qrFtvODDNlH5HqdZbQGECe8Bkwu9iX%2BcLcChOwrQJKZo%2BTBNtUeGKhrcxWdgYSTodYtaHa9I0bi%2BEIPQCGMZlWbxTCw7dbEBjqkAf9VFHUlFx1vN5W51vTn3ZUsNMbJtzezmNCFK38SY9CT14Aud5eYYRpJwNASR3OpCSzUrwzlMTiCAt4bFCx%2BZsd58mEFfV8Hg1iwjYtSF2HO4ME8rbpGlQFrMu2PrvQuoWk5ryZNZqV3tlzBhlHVz9OdXavfsaQEAjKJ%2BYF43KsqVgC%2BMQbE9EC26GcLwX4j4fzgyU%2F4naJzcmwqP3H9870lteeI&X-Amz-Signature=6906a4062188a3baa2222920636ba205fad937d5d2d4607b3ab927281b0e7a14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NQOXNBJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDLFeVWY2C64J3oOUvJQFWalUfTQUsVclIk5bGB1XoBOQIhAKPwx2vpq62tLzTRRKPaSdLVAeDa2CUNiirxpCgkTSXKKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfQdYK5b%2FW3BEuiUkq3AOtycJ5KMralcs%2FiFRs0bBmgbVFF3k9flEFoP9g4ilhuUbGpxAi2O5mwZ4KikqjoNty01bKvCJZ1z9Y%2BdRJmsh2o8%2FRibxa%2F6VNeVnsQP866hW%2FoeNikX%2BixkL7gct46FRKxV2rfQLmqRQgz4pkS9KfFgrXNbgwfBYx4rONw66KKiMxlODqwVlC1zMN5eSI4kkIvJJuNpbLqy9L0Mjhs%2BOl%2B87ZrUB4PKg89u5TSvlyMLeymD6GJxA9lxpMSsXUH7n3VTIZ0EzbnmUoDn4A4AlqJrp4qfh8tBWtAXAEnYm%2B01f2Xe%2BryA21G85j7BrhOtWzlo3Z9aBKWY4%2FuChl2lNKJ6917duIsvLMKr%2Boad%2FBv6J6DzPSYKxIC9GDGRJrtfbGk6tk8%2FuHNtVy1x4OnyLs%2FAufHE9L1EFeAI%2FbVRJXJ2uyz0rWu7qATZn%2F5ukpZkVyc4w%2FiDcmH4%2FwNYegxoX%2FA2h%2BiDQDtDyQvn1k2cd6lLB%2FmK%2Bme2yldmnRFnXVsdrPeG8v6piDJBrfsFC9I6AxDDL3weTQ%2FN4n6qrFtvODDNlH5HqdZbQGECe8Bkwu9iX%2BcLcChOwrQJKZo%2BTBNtUeGKhrcxWdgYSTodYtaHa9I0bi%2BEIPQCGMZlWbxTCw7dbEBjqkAf9VFHUlFx1vN5W51vTn3ZUsNMbJtzezmNCFK38SY9CT14Aud5eYYRpJwNASR3OpCSzUrwzlMTiCAt4bFCx%2BZsd58mEFfV8Hg1iwjYtSF2HO4ME8rbpGlQFrMu2PrvQuoWk5ryZNZqV3tlzBhlHVz9OdXavfsaQEAjKJ%2BYF43KsqVgC%2BMQbE9EC26GcLwX4j4fzgyU%2F4naJzcmwqP3H9870lteeI&X-Amz-Signature=ff264acf6af7624171331ccefc3950efb7c814a1d2454d6ba9d4ac54b84fd868&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NQOXNBJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDLFeVWY2C64J3oOUvJQFWalUfTQUsVclIk5bGB1XoBOQIhAKPwx2vpq62tLzTRRKPaSdLVAeDa2CUNiirxpCgkTSXKKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfQdYK5b%2FW3BEuiUkq3AOtycJ5KMralcs%2FiFRs0bBmgbVFF3k9flEFoP9g4ilhuUbGpxAi2O5mwZ4KikqjoNty01bKvCJZ1z9Y%2BdRJmsh2o8%2FRibxa%2F6VNeVnsQP866hW%2FoeNikX%2BixkL7gct46FRKxV2rfQLmqRQgz4pkS9KfFgrXNbgwfBYx4rONw66KKiMxlODqwVlC1zMN5eSI4kkIvJJuNpbLqy9L0Mjhs%2BOl%2B87ZrUB4PKg89u5TSvlyMLeymD6GJxA9lxpMSsXUH7n3VTIZ0EzbnmUoDn4A4AlqJrp4qfh8tBWtAXAEnYm%2B01f2Xe%2BryA21G85j7BrhOtWzlo3Z9aBKWY4%2FuChl2lNKJ6917duIsvLMKr%2Boad%2FBv6J6DzPSYKxIC9GDGRJrtfbGk6tk8%2FuHNtVy1x4OnyLs%2FAufHE9L1EFeAI%2FbVRJXJ2uyz0rWu7qATZn%2F5ukpZkVyc4w%2FiDcmH4%2FwNYegxoX%2FA2h%2BiDQDtDyQvn1k2cd6lLB%2FmK%2Bme2yldmnRFnXVsdrPeG8v6piDJBrfsFC9I6AxDDL3weTQ%2FN4n6qrFtvODDNlH5HqdZbQGECe8Bkwu9iX%2BcLcChOwrQJKZo%2BTBNtUeGKhrcxWdgYSTodYtaHa9I0bi%2BEIPQCGMZlWbxTCw7dbEBjqkAf9VFHUlFx1vN5W51vTn3ZUsNMbJtzezmNCFK38SY9CT14Aud5eYYRpJwNASR3OpCSzUrwzlMTiCAt4bFCx%2BZsd58mEFfV8Hg1iwjYtSF2HO4ME8rbpGlQFrMu2PrvQuoWk5ryZNZqV3tlzBhlHVz9OdXavfsaQEAjKJ%2BYF43KsqVgC%2BMQbE9EC26GcLwX4j4fzgyU%2F4naJzcmwqP3H9870lteeI&X-Amz-Signature=ff288c601c26a76202762ead8289d3688de51f0d020868cb9edbff1f17122d08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NQOXNBJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDLFeVWY2C64J3oOUvJQFWalUfTQUsVclIk5bGB1XoBOQIhAKPwx2vpq62tLzTRRKPaSdLVAeDa2CUNiirxpCgkTSXKKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfQdYK5b%2FW3BEuiUkq3AOtycJ5KMralcs%2FiFRs0bBmgbVFF3k9flEFoP9g4ilhuUbGpxAi2O5mwZ4KikqjoNty01bKvCJZ1z9Y%2BdRJmsh2o8%2FRibxa%2F6VNeVnsQP866hW%2FoeNikX%2BixkL7gct46FRKxV2rfQLmqRQgz4pkS9KfFgrXNbgwfBYx4rONw66KKiMxlODqwVlC1zMN5eSI4kkIvJJuNpbLqy9L0Mjhs%2BOl%2B87ZrUB4PKg89u5TSvlyMLeymD6GJxA9lxpMSsXUH7n3VTIZ0EzbnmUoDn4A4AlqJrp4qfh8tBWtAXAEnYm%2B01f2Xe%2BryA21G85j7BrhOtWzlo3Z9aBKWY4%2FuChl2lNKJ6917duIsvLMKr%2Boad%2FBv6J6DzPSYKxIC9GDGRJrtfbGk6tk8%2FuHNtVy1x4OnyLs%2FAufHE9L1EFeAI%2FbVRJXJ2uyz0rWu7qATZn%2F5ukpZkVyc4w%2FiDcmH4%2FwNYegxoX%2FA2h%2BiDQDtDyQvn1k2cd6lLB%2FmK%2Bme2yldmnRFnXVsdrPeG8v6piDJBrfsFC9I6AxDDL3weTQ%2FN4n6qrFtvODDNlH5HqdZbQGECe8Bkwu9iX%2BcLcChOwrQJKZo%2BTBNtUeGKhrcxWdgYSTodYtaHa9I0bi%2BEIPQCGMZlWbxTCw7dbEBjqkAf9VFHUlFx1vN5W51vTn3ZUsNMbJtzezmNCFK38SY9CT14Aud5eYYRpJwNASR3OpCSzUrwzlMTiCAt4bFCx%2BZsd58mEFfV8Hg1iwjYtSF2HO4ME8rbpGlQFrMu2PrvQuoWk5ryZNZqV3tlzBhlHVz9OdXavfsaQEAjKJ%2BYF43KsqVgC%2BMQbE9EC26GcLwX4j4fzgyU%2F4naJzcmwqP3H9870lteeI&X-Amz-Signature=f082d102a120027d9ebc2345bde876906cbffae9a340f8f9f69f9550313db998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NQOXNBJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDLFeVWY2C64J3oOUvJQFWalUfTQUsVclIk5bGB1XoBOQIhAKPwx2vpq62tLzTRRKPaSdLVAeDa2CUNiirxpCgkTSXKKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfQdYK5b%2FW3BEuiUkq3AOtycJ5KMralcs%2FiFRs0bBmgbVFF3k9flEFoP9g4ilhuUbGpxAi2O5mwZ4KikqjoNty01bKvCJZ1z9Y%2BdRJmsh2o8%2FRibxa%2F6VNeVnsQP866hW%2FoeNikX%2BixkL7gct46FRKxV2rfQLmqRQgz4pkS9KfFgrXNbgwfBYx4rONw66KKiMxlODqwVlC1zMN5eSI4kkIvJJuNpbLqy9L0Mjhs%2BOl%2B87ZrUB4PKg89u5TSvlyMLeymD6GJxA9lxpMSsXUH7n3VTIZ0EzbnmUoDn4A4AlqJrp4qfh8tBWtAXAEnYm%2B01f2Xe%2BryA21G85j7BrhOtWzlo3Z9aBKWY4%2FuChl2lNKJ6917duIsvLMKr%2Boad%2FBv6J6DzPSYKxIC9GDGRJrtfbGk6tk8%2FuHNtVy1x4OnyLs%2FAufHE9L1EFeAI%2FbVRJXJ2uyz0rWu7qATZn%2F5ukpZkVyc4w%2FiDcmH4%2FwNYegxoX%2FA2h%2BiDQDtDyQvn1k2cd6lLB%2FmK%2Bme2yldmnRFnXVsdrPeG8v6piDJBrfsFC9I6AxDDL3weTQ%2FN4n6qrFtvODDNlH5HqdZbQGECe8Bkwu9iX%2BcLcChOwrQJKZo%2BTBNtUeGKhrcxWdgYSTodYtaHa9I0bi%2BEIPQCGMZlWbxTCw7dbEBjqkAf9VFHUlFx1vN5W51vTn3ZUsNMbJtzezmNCFK38SY9CT14Aud5eYYRpJwNASR3OpCSzUrwzlMTiCAt4bFCx%2BZsd58mEFfV8Hg1iwjYtSF2HO4ME8rbpGlQFrMu2PrvQuoWk5ryZNZqV3tlzBhlHVz9OdXavfsaQEAjKJ%2BYF43KsqVgC%2BMQbE9EC26GcLwX4j4fzgyU%2F4naJzcmwqP3H9870lteeI&X-Amz-Signature=fe5e0e8eaa4dfc74145eea33ed69f985c161cf1b809499b69dca04ed2bbfec24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NQOXNBJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDLFeVWY2C64J3oOUvJQFWalUfTQUsVclIk5bGB1XoBOQIhAKPwx2vpq62tLzTRRKPaSdLVAeDa2CUNiirxpCgkTSXKKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfQdYK5b%2FW3BEuiUkq3AOtycJ5KMralcs%2FiFRs0bBmgbVFF3k9flEFoP9g4ilhuUbGpxAi2O5mwZ4KikqjoNty01bKvCJZ1z9Y%2BdRJmsh2o8%2FRibxa%2F6VNeVnsQP866hW%2FoeNikX%2BixkL7gct46FRKxV2rfQLmqRQgz4pkS9KfFgrXNbgwfBYx4rONw66KKiMxlODqwVlC1zMN5eSI4kkIvJJuNpbLqy9L0Mjhs%2BOl%2B87ZrUB4PKg89u5TSvlyMLeymD6GJxA9lxpMSsXUH7n3VTIZ0EzbnmUoDn4A4AlqJrp4qfh8tBWtAXAEnYm%2B01f2Xe%2BryA21G85j7BrhOtWzlo3Z9aBKWY4%2FuChl2lNKJ6917duIsvLMKr%2Boad%2FBv6J6DzPSYKxIC9GDGRJrtfbGk6tk8%2FuHNtVy1x4OnyLs%2FAufHE9L1EFeAI%2FbVRJXJ2uyz0rWu7qATZn%2F5ukpZkVyc4w%2FiDcmH4%2FwNYegxoX%2FA2h%2BiDQDtDyQvn1k2cd6lLB%2FmK%2Bme2yldmnRFnXVsdrPeG8v6piDJBrfsFC9I6AxDDL3weTQ%2FN4n6qrFtvODDNlH5HqdZbQGECe8Bkwu9iX%2BcLcChOwrQJKZo%2BTBNtUeGKhrcxWdgYSTodYtaHa9I0bi%2BEIPQCGMZlWbxTCw7dbEBjqkAf9VFHUlFx1vN5W51vTn3ZUsNMbJtzezmNCFK38SY9CT14Aud5eYYRpJwNASR3OpCSzUrwzlMTiCAt4bFCx%2BZsd58mEFfV8Hg1iwjYtSF2HO4ME8rbpGlQFrMu2PrvQuoWk5ryZNZqV3tlzBhlHVz9OdXavfsaQEAjKJ%2BYF43KsqVgC%2BMQbE9EC26GcLwX4j4fzgyU%2F4naJzcmwqP3H9870lteeI&X-Amz-Signature=aea05c6083a71dffc73f93939e21d4ed11353e40a00c96e611a8c3da961124f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NQOXNBJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDLFeVWY2C64J3oOUvJQFWalUfTQUsVclIk5bGB1XoBOQIhAKPwx2vpq62tLzTRRKPaSdLVAeDa2CUNiirxpCgkTSXKKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfQdYK5b%2FW3BEuiUkq3AOtycJ5KMralcs%2FiFRs0bBmgbVFF3k9flEFoP9g4ilhuUbGpxAi2O5mwZ4KikqjoNty01bKvCJZ1z9Y%2BdRJmsh2o8%2FRibxa%2F6VNeVnsQP866hW%2FoeNikX%2BixkL7gct46FRKxV2rfQLmqRQgz4pkS9KfFgrXNbgwfBYx4rONw66KKiMxlODqwVlC1zMN5eSI4kkIvJJuNpbLqy9L0Mjhs%2BOl%2B87ZrUB4PKg89u5TSvlyMLeymD6GJxA9lxpMSsXUH7n3VTIZ0EzbnmUoDn4A4AlqJrp4qfh8tBWtAXAEnYm%2B01f2Xe%2BryA21G85j7BrhOtWzlo3Z9aBKWY4%2FuChl2lNKJ6917duIsvLMKr%2Boad%2FBv6J6DzPSYKxIC9GDGRJrtfbGk6tk8%2FuHNtVy1x4OnyLs%2FAufHE9L1EFeAI%2FbVRJXJ2uyz0rWu7qATZn%2F5ukpZkVyc4w%2FiDcmH4%2FwNYegxoX%2FA2h%2BiDQDtDyQvn1k2cd6lLB%2FmK%2Bme2yldmnRFnXVsdrPeG8v6piDJBrfsFC9I6AxDDL3weTQ%2FN4n6qrFtvODDNlH5HqdZbQGECe8Bkwu9iX%2BcLcChOwrQJKZo%2BTBNtUeGKhrcxWdgYSTodYtaHa9I0bi%2BEIPQCGMZlWbxTCw7dbEBjqkAf9VFHUlFx1vN5W51vTn3ZUsNMbJtzezmNCFK38SY9CT14Aud5eYYRpJwNASR3OpCSzUrwzlMTiCAt4bFCx%2BZsd58mEFfV8Hg1iwjYtSF2HO4ME8rbpGlQFrMu2PrvQuoWk5ryZNZqV3tlzBhlHVz9OdXavfsaQEAjKJ%2BYF43KsqVgC%2BMQbE9EC26GcLwX4j4fzgyU%2F4naJzcmwqP3H9870lteeI&X-Amz-Signature=8c248368306a146350d495932379dd3130744ad736e401739c979f283671b101&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NQOXNBJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDLFeVWY2C64J3oOUvJQFWalUfTQUsVclIk5bGB1XoBOQIhAKPwx2vpq62tLzTRRKPaSdLVAeDa2CUNiirxpCgkTSXKKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfQdYK5b%2FW3BEuiUkq3AOtycJ5KMralcs%2FiFRs0bBmgbVFF3k9flEFoP9g4ilhuUbGpxAi2O5mwZ4KikqjoNty01bKvCJZ1z9Y%2BdRJmsh2o8%2FRibxa%2F6VNeVnsQP866hW%2FoeNikX%2BixkL7gct46FRKxV2rfQLmqRQgz4pkS9KfFgrXNbgwfBYx4rONw66KKiMxlODqwVlC1zMN5eSI4kkIvJJuNpbLqy9L0Mjhs%2BOl%2B87ZrUB4PKg89u5TSvlyMLeymD6GJxA9lxpMSsXUH7n3VTIZ0EzbnmUoDn4A4AlqJrp4qfh8tBWtAXAEnYm%2B01f2Xe%2BryA21G85j7BrhOtWzlo3Z9aBKWY4%2FuChl2lNKJ6917duIsvLMKr%2Boad%2FBv6J6DzPSYKxIC9GDGRJrtfbGk6tk8%2FuHNtVy1x4OnyLs%2FAufHE9L1EFeAI%2FbVRJXJ2uyz0rWu7qATZn%2F5ukpZkVyc4w%2FiDcmH4%2FwNYegxoX%2FA2h%2BiDQDtDyQvn1k2cd6lLB%2FmK%2Bme2yldmnRFnXVsdrPeG8v6piDJBrfsFC9I6AxDDL3weTQ%2FN4n6qrFtvODDNlH5HqdZbQGECe8Bkwu9iX%2BcLcChOwrQJKZo%2BTBNtUeGKhrcxWdgYSTodYtaHa9I0bi%2BEIPQCGMZlWbxTCw7dbEBjqkAf9VFHUlFx1vN5W51vTn3ZUsNMbJtzezmNCFK38SY9CT14Aud5eYYRpJwNASR3OpCSzUrwzlMTiCAt4bFCx%2BZsd58mEFfV8Hg1iwjYtSF2HO4ME8rbpGlQFrMu2PrvQuoWk5ryZNZqV3tlzBhlHVz9OdXavfsaQEAjKJ%2BYF43KsqVgC%2BMQbE9EC26GcLwX4j4fzgyU%2F4naJzcmwqP3H9870lteeI&X-Amz-Signature=27dcb6d9ec76ae05f2f1921c1b33ea5c848df7d36d1a6bae28a1eca4d2790e82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TP4ZVVT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHepqmHjJ02FTleTgWods8pMjGd09me7W6A2ZqdwyUDcAiEAt%2BEAJRWz%2F8Fpt5YEko9LY4G%2F%2B8mgSp8Js%2FBJf4h70YYqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDswmjQINAFrsXXZgCrcA%2FpE94VUc50ADK4WGUGNuPhpjFQY2MUvC35ie%2BH5DYGxzAJiPssK%2BhYbnaBcTHQcjGRYpfwZ%2FQZrZks%2FW8Atp6vCGX5Bw9VecnQvs9K4wuSsp1xJWtU91GM85a9H%2Bp5YKNFDgoKtUxmVJ4c74NgKlwTkD5leXV%2BZDkuXWpLGP14XFJyWks8Vaywik30v7LoQwVsNsyhza0HOgW%2B4f4VKCw3HgoiVrtRGo6fDi9jVCS5bf%2FQSWDBLuqUw0%2Fd7P5uG53pTLWqsX%2BlzLK35aCG5VE21yfOcaL8J4thmwKdmNsUdXFsmgP0dxROJwmSnXOUFpzgS1g2eLI11cez6WNc0p4yM1k0t5ZHoklVnT%2BCOBvGBhUj6AJneyUJfSfuugCA1KdZ9F%2FQugdIK%2F2M9HrI%2FB76gxDsiMXhz3Vf26aMMNyT9o85E%2BKEFgoEcQri3Wwwuuc6qPvAJ0r6ilEv5OXRpKuBAetNXtBqsqWkYX7oDihLaZvQZDjJFVzdtm42zq6CfPRj4LExr8yJZaECcGvJe1SOL%2BRUXbwYYRaCaqkApDPng6dXgL0q%2Fz%2B6SMuBZ9GF9KYasc8OdrlFIcLefTPemk4jVtMvKX7e6hpaoAyfI1IisJX6MXqY9YwSaAyHKMKPt1sQGOqUBNsWy7m4kErlKIUa%2BIvX%2FfxpsucHlcPU5lCGusGuXCnUySGIHzGr8hFouzbMcwcmrbSSaNUdTQyb9kUO50ciSHnchCE8pynXZxhkvF1bYQMIYpTr4L0rRjdCBTjgoTFXFT2FaFDAALKhKIDnnL4dT90XDrBlgOct%2B6rID30fnm5MboF2eMK%2B2hLzponEIcOmbJzaALF7yS5BtaNDSbgJkrzWX71UO&X-Amz-Signature=3f9da9f0ec9f4906fdc3b5e789d5ff9af03de7a8de8f70a109178c2ade890b2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KHSIJCP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCJ%2BZ8gCRyqAJ7JKJvQgLurADbkElyCGXsPreJHA65InAIgMC6J4xX8fDxHRDCIeA2TY992jArrobInA6d7kH%2FNz3AqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAGT3ry%2BYV6uUje6SrcAzwVVYwQFJeT40KV7B%2BAxeCvSrVA251kWus3elxo4LPkpT161zTM1yBwL5vzHn8CcemmikxPcAtUfLJjjPHX9p7k3wP9qWaOsiGBSMAfdmga%2FsHfHcaz5AbAHzLyw8VgDLzE7D4fM9MpVeOF4e7EWO6%2BGLH6X%2B%2BiZ1BMVQjgU5pHDM7943VneedmICcYvOiNzqxGq3Zm0jwMyD8dV8vIfhra8g4oKVmgRqx2yMxkc%2FfuXEUCOC8HoOIim63c%2BMvBVCe6mwk7NtrwEfYjKHv534vPXL5AuTJuRrVewoIqMrt%2F5%2B3UgPky4KtFRqxLMx6BOfBz3O4RDU22%2FtAm29vX5F85hF2OBXgbsGYYj2dG2l2QZal3dLUjp4hHJ0AgWIEtXybKxymmYln%2BOUm3oxaXZpHlnAnJfpPk2EZ6yKrpXvSgwa9Rr5G3slKQ46nKxz4Cpd2G7gQB9asMCIFS63yWTG4ND4HKARELag3IZNeiX7rXO6IU1MkQTN3S6ayr3CMzcsGi34t7KiQg%2BVv%2BtqiN1D64vajazgL6BnvC0y3Mls92SyfjzaZWfcr5%2BiNHVaZFK5wYwK5gdmLbgVumQ%2Fx6qx46sxtQkIDjxCkrOHJlx%2FsJ8jZw9p2Cr6IfqFyhMNTt1sQGOqUB0Eoh%2FKAeJPMztMbYWvCsP54PtDvN6pR0wHdcjHXbu1u%2BqqG0pwJOE1cAnF24REUHT9MbVU7Rq7OfnJ4jO7VvMk9CwAWIfpDvTeV6SRUEsGv7QaCSEJRpOk5HGNUc5t3ZkDEirfYaVA%2FhaTqIVhNzSF3pvr78p6MHHgg246d5jpQIp3lKp0aeoVH1oYuelLIgZma2Jcx4dBYvx53Ptl1HtI%2FDm6St&X-Amz-Signature=4dcbe1c6d4ee5d1fe8687d7492344ccc826cdc3598e6d1af2d75428d137bae94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KHSIJCP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCJ%2BZ8gCRyqAJ7JKJvQgLurADbkElyCGXsPreJHA65InAIgMC6J4xX8fDxHRDCIeA2TY992jArrobInA6d7kH%2FNz3AqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAGT3ry%2BYV6uUje6SrcAzwVVYwQFJeT40KV7B%2BAxeCvSrVA251kWus3elxo4LPkpT161zTM1yBwL5vzHn8CcemmikxPcAtUfLJjjPHX9p7k3wP9qWaOsiGBSMAfdmga%2FsHfHcaz5AbAHzLyw8VgDLzE7D4fM9MpVeOF4e7EWO6%2BGLH6X%2B%2BiZ1BMVQjgU5pHDM7943VneedmICcYvOiNzqxGq3Zm0jwMyD8dV8vIfhra8g4oKVmgRqx2yMxkc%2FfuXEUCOC8HoOIim63c%2BMvBVCe6mwk7NtrwEfYjKHv534vPXL5AuTJuRrVewoIqMrt%2F5%2B3UgPky4KtFRqxLMx6BOfBz3O4RDU22%2FtAm29vX5F85hF2OBXgbsGYYj2dG2l2QZal3dLUjp4hHJ0AgWIEtXybKxymmYln%2BOUm3oxaXZpHlnAnJfpPk2EZ6yKrpXvSgwa9Rr5G3slKQ46nKxz4Cpd2G7gQB9asMCIFS63yWTG4ND4HKARELag3IZNeiX7rXO6IU1MkQTN3S6ayr3CMzcsGi34t7KiQg%2BVv%2BtqiN1D64vajazgL6BnvC0y3Mls92SyfjzaZWfcr5%2BiNHVaZFK5wYwK5gdmLbgVumQ%2Fx6qx46sxtQkIDjxCkrOHJlx%2FsJ8jZw9p2Cr6IfqFyhMNTt1sQGOqUB0Eoh%2FKAeJPMztMbYWvCsP54PtDvN6pR0wHdcjHXbu1u%2BqqG0pwJOE1cAnF24REUHT9MbVU7Rq7OfnJ4jO7VvMk9CwAWIfpDvTeV6SRUEsGv7QaCSEJRpOk5HGNUc5t3ZkDEirfYaVA%2FhaTqIVhNzSF3pvr78p6MHHgg246d5jpQIp3lKp0aeoVH1oYuelLIgZma2Jcx4dBYvx53Ptl1HtI%2FDm6St&X-Amz-Signature=28ab63acd1e0582bdd5c6fd0c7737876d1ffd1861830171fb0c4c956fd032381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KHSIJCP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCJ%2BZ8gCRyqAJ7JKJvQgLurADbkElyCGXsPreJHA65InAIgMC6J4xX8fDxHRDCIeA2TY992jArrobInA6d7kH%2FNz3AqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAGT3ry%2BYV6uUje6SrcAzwVVYwQFJeT40KV7B%2BAxeCvSrVA251kWus3elxo4LPkpT161zTM1yBwL5vzHn8CcemmikxPcAtUfLJjjPHX9p7k3wP9qWaOsiGBSMAfdmga%2FsHfHcaz5AbAHzLyw8VgDLzE7D4fM9MpVeOF4e7EWO6%2BGLH6X%2B%2BiZ1BMVQjgU5pHDM7943VneedmICcYvOiNzqxGq3Zm0jwMyD8dV8vIfhra8g4oKVmgRqx2yMxkc%2FfuXEUCOC8HoOIim63c%2BMvBVCe6mwk7NtrwEfYjKHv534vPXL5AuTJuRrVewoIqMrt%2F5%2B3UgPky4KtFRqxLMx6BOfBz3O4RDU22%2FtAm29vX5F85hF2OBXgbsGYYj2dG2l2QZal3dLUjp4hHJ0AgWIEtXybKxymmYln%2BOUm3oxaXZpHlnAnJfpPk2EZ6yKrpXvSgwa9Rr5G3slKQ46nKxz4Cpd2G7gQB9asMCIFS63yWTG4ND4HKARELag3IZNeiX7rXO6IU1MkQTN3S6ayr3CMzcsGi34t7KiQg%2BVv%2BtqiN1D64vajazgL6BnvC0y3Mls92SyfjzaZWfcr5%2BiNHVaZFK5wYwK5gdmLbgVumQ%2Fx6qx46sxtQkIDjxCkrOHJlx%2FsJ8jZw9p2Cr6IfqFyhMNTt1sQGOqUB0Eoh%2FKAeJPMztMbYWvCsP54PtDvN6pR0wHdcjHXbu1u%2BqqG0pwJOE1cAnF24REUHT9MbVU7Rq7OfnJ4jO7VvMk9CwAWIfpDvTeV6SRUEsGv7QaCSEJRpOk5HGNUc5t3ZkDEirfYaVA%2FhaTqIVhNzSF3pvr78p6MHHgg246d5jpQIp3lKp0aeoVH1oYuelLIgZma2Jcx4dBYvx53Ptl1HtI%2FDm6St&X-Amz-Signature=27a904836874f7c5d9269ca42f03aa490d4e4a8a2740532167bb1e99efcc5307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KHSIJCP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCJ%2BZ8gCRyqAJ7JKJvQgLurADbkElyCGXsPreJHA65InAIgMC6J4xX8fDxHRDCIeA2TY992jArrobInA6d7kH%2FNz3AqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAGT3ry%2BYV6uUje6SrcAzwVVYwQFJeT40KV7B%2BAxeCvSrVA251kWus3elxo4LPkpT161zTM1yBwL5vzHn8CcemmikxPcAtUfLJjjPHX9p7k3wP9qWaOsiGBSMAfdmga%2FsHfHcaz5AbAHzLyw8VgDLzE7D4fM9MpVeOF4e7EWO6%2BGLH6X%2B%2BiZ1BMVQjgU5pHDM7943VneedmICcYvOiNzqxGq3Zm0jwMyD8dV8vIfhra8g4oKVmgRqx2yMxkc%2FfuXEUCOC8HoOIim63c%2BMvBVCe6mwk7NtrwEfYjKHv534vPXL5AuTJuRrVewoIqMrt%2F5%2B3UgPky4KtFRqxLMx6BOfBz3O4RDU22%2FtAm29vX5F85hF2OBXgbsGYYj2dG2l2QZal3dLUjp4hHJ0AgWIEtXybKxymmYln%2BOUm3oxaXZpHlnAnJfpPk2EZ6yKrpXvSgwa9Rr5G3slKQ46nKxz4Cpd2G7gQB9asMCIFS63yWTG4ND4HKARELag3IZNeiX7rXO6IU1MkQTN3S6ayr3CMzcsGi34t7KiQg%2BVv%2BtqiN1D64vajazgL6BnvC0y3Mls92SyfjzaZWfcr5%2BiNHVaZFK5wYwK5gdmLbgVumQ%2Fx6qx46sxtQkIDjxCkrOHJlx%2FsJ8jZw9p2Cr6IfqFyhMNTt1sQGOqUB0Eoh%2FKAeJPMztMbYWvCsP54PtDvN6pR0wHdcjHXbu1u%2BqqG0pwJOE1cAnF24REUHT9MbVU7Rq7OfnJ4jO7VvMk9CwAWIfpDvTeV6SRUEsGv7QaCSEJRpOk5HGNUc5t3ZkDEirfYaVA%2FhaTqIVhNzSF3pvr78p6MHHgg246d5jpQIp3lKp0aeoVH1oYuelLIgZma2Jcx4dBYvx53Ptl1HtI%2FDm6St&X-Amz-Signature=a15806341b6ef20b54b4e0fe353feb308921506a81f70f8c7313e7a7c71a5265&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KHSIJCP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCJ%2BZ8gCRyqAJ7JKJvQgLurADbkElyCGXsPreJHA65InAIgMC6J4xX8fDxHRDCIeA2TY992jArrobInA6d7kH%2FNz3AqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAGT3ry%2BYV6uUje6SrcAzwVVYwQFJeT40KV7B%2BAxeCvSrVA251kWus3elxo4LPkpT161zTM1yBwL5vzHn8CcemmikxPcAtUfLJjjPHX9p7k3wP9qWaOsiGBSMAfdmga%2FsHfHcaz5AbAHzLyw8VgDLzE7D4fM9MpVeOF4e7EWO6%2BGLH6X%2B%2BiZ1BMVQjgU5pHDM7943VneedmICcYvOiNzqxGq3Zm0jwMyD8dV8vIfhra8g4oKVmgRqx2yMxkc%2FfuXEUCOC8HoOIim63c%2BMvBVCe6mwk7NtrwEfYjKHv534vPXL5AuTJuRrVewoIqMrt%2F5%2B3UgPky4KtFRqxLMx6BOfBz3O4RDU22%2FtAm29vX5F85hF2OBXgbsGYYj2dG2l2QZal3dLUjp4hHJ0AgWIEtXybKxymmYln%2BOUm3oxaXZpHlnAnJfpPk2EZ6yKrpXvSgwa9Rr5G3slKQ46nKxz4Cpd2G7gQB9asMCIFS63yWTG4ND4HKARELag3IZNeiX7rXO6IU1MkQTN3S6ayr3CMzcsGi34t7KiQg%2BVv%2BtqiN1D64vajazgL6BnvC0y3Mls92SyfjzaZWfcr5%2BiNHVaZFK5wYwK5gdmLbgVumQ%2Fx6qx46sxtQkIDjxCkrOHJlx%2FsJ8jZw9p2Cr6IfqFyhMNTt1sQGOqUB0Eoh%2FKAeJPMztMbYWvCsP54PtDvN6pR0wHdcjHXbu1u%2BqqG0pwJOE1cAnF24REUHT9MbVU7Rq7OfnJ4jO7VvMk9CwAWIfpDvTeV6SRUEsGv7QaCSEJRpOk5HGNUc5t3ZkDEirfYaVA%2FhaTqIVhNzSF3pvr78p6MHHgg246d5jpQIp3lKp0aeoVH1oYuelLIgZma2Jcx4dBYvx53Ptl1HtI%2FDm6St&X-Amz-Signature=1c62e860d2b82fddd8b1993cf301b7623bbcb1b3b1b75be82c6f075f8f3a9573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KHSIJCP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCJ%2BZ8gCRyqAJ7JKJvQgLurADbkElyCGXsPreJHA65InAIgMC6J4xX8fDxHRDCIeA2TY992jArrobInA6d7kH%2FNz3AqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAGT3ry%2BYV6uUje6SrcAzwVVYwQFJeT40KV7B%2BAxeCvSrVA251kWus3elxo4LPkpT161zTM1yBwL5vzHn8CcemmikxPcAtUfLJjjPHX9p7k3wP9qWaOsiGBSMAfdmga%2FsHfHcaz5AbAHzLyw8VgDLzE7D4fM9MpVeOF4e7EWO6%2BGLH6X%2B%2BiZ1BMVQjgU5pHDM7943VneedmICcYvOiNzqxGq3Zm0jwMyD8dV8vIfhra8g4oKVmgRqx2yMxkc%2FfuXEUCOC8HoOIim63c%2BMvBVCe6mwk7NtrwEfYjKHv534vPXL5AuTJuRrVewoIqMrt%2F5%2B3UgPky4KtFRqxLMx6BOfBz3O4RDU22%2FtAm29vX5F85hF2OBXgbsGYYj2dG2l2QZal3dLUjp4hHJ0AgWIEtXybKxymmYln%2BOUm3oxaXZpHlnAnJfpPk2EZ6yKrpXvSgwa9Rr5G3slKQ46nKxz4Cpd2G7gQB9asMCIFS63yWTG4ND4HKARELag3IZNeiX7rXO6IU1MkQTN3S6ayr3CMzcsGi34t7KiQg%2BVv%2BtqiN1D64vajazgL6BnvC0y3Mls92SyfjzaZWfcr5%2BiNHVaZFK5wYwK5gdmLbgVumQ%2Fx6qx46sxtQkIDjxCkrOHJlx%2FsJ8jZw9p2Cr6IfqFyhMNTt1sQGOqUB0Eoh%2FKAeJPMztMbYWvCsP54PtDvN6pR0wHdcjHXbu1u%2BqqG0pwJOE1cAnF24REUHT9MbVU7Rq7OfnJ4jO7VvMk9CwAWIfpDvTeV6SRUEsGv7QaCSEJRpOk5HGNUc5t3ZkDEirfYaVA%2FhaTqIVhNzSF3pvr78p6MHHgg246d5jpQIp3lKp0aeoVH1oYuelLIgZma2Jcx4dBYvx53Ptl1HtI%2FDm6St&X-Amz-Signature=15dfbb0aa96aa8c63a35bf1f770fdb79029c94259db59fcf1d203de9721b0c90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KHSIJCP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCJ%2BZ8gCRyqAJ7JKJvQgLurADbkElyCGXsPreJHA65InAIgMC6J4xX8fDxHRDCIeA2TY992jArrobInA6d7kH%2FNz3AqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAGT3ry%2BYV6uUje6SrcAzwVVYwQFJeT40KV7B%2BAxeCvSrVA251kWus3elxo4LPkpT161zTM1yBwL5vzHn8CcemmikxPcAtUfLJjjPHX9p7k3wP9qWaOsiGBSMAfdmga%2FsHfHcaz5AbAHzLyw8VgDLzE7D4fM9MpVeOF4e7EWO6%2BGLH6X%2B%2BiZ1BMVQjgU5pHDM7943VneedmICcYvOiNzqxGq3Zm0jwMyD8dV8vIfhra8g4oKVmgRqx2yMxkc%2FfuXEUCOC8HoOIim63c%2BMvBVCe6mwk7NtrwEfYjKHv534vPXL5AuTJuRrVewoIqMrt%2F5%2B3UgPky4KtFRqxLMx6BOfBz3O4RDU22%2FtAm29vX5F85hF2OBXgbsGYYj2dG2l2QZal3dLUjp4hHJ0AgWIEtXybKxymmYln%2BOUm3oxaXZpHlnAnJfpPk2EZ6yKrpXvSgwa9Rr5G3slKQ46nKxz4Cpd2G7gQB9asMCIFS63yWTG4ND4HKARELag3IZNeiX7rXO6IU1MkQTN3S6ayr3CMzcsGi34t7KiQg%2BVv%2BtqiN1D64vajazgL6BnvC0y3Mls92SyfjzaZWfcr5%2BiNHVaZFK5wYwK5gdmLbgVumQ%2Fx6qx46sxtQkIDjxCkrOHJlx%2FsJ8jZw9p2Cr6IfqFyhMNTt1sQGOqUB0Eoh%2FKAeJPMztMbYWvCsP54PtDvN6pR0wHdcjHXbu1u%2BqqG0pwJOE1cAnF24REUHT9MbVU7Rq7OfnJ4jO7VvMk9CwAWIfpDvTeV6SRUEsGv7QaCSEJRpOk5HGNUc5t3ZkDEirfYaVA%2FhaTqIVhNzSF3pvr78p6MHHgg246d5jpQIp3lKp0aeoVH1oYuelLIgZma2Jcx4dBYvx53Ptl1HtI%2FDm6St&X-Amz-Signature=74fa5f4b4e3d5d265bdc9e30f149b7772d6bf297955dc7c67fc94fd7a5e25c81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KHSIJCP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCJ%2BZ8gCRyqAJ7JKJvQgLurADbkElyCGXsPreJHA65InAIgMC6J4xX8fDxHRDCIeA2TY992jArrobInA6d7kH%2FNz3AqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAGT3ry%2BYV6uUje6SrcAzwVVYwQFJeT40KV7B%2BAxeCvSrVA251kWus3elxo4LPkpT161zTM1yBwL5vzHn8CcemmikxPcAtUfLJjjPHX9p7k3wP9qWaOsiGBSMAfdmga%2FsHfHcaz5AbAHzLyw8VgDLzE7D4fM9MpVeOF4e7EWO6%2BGLH6X%2B%2BiZ1BMVQjgU5pHDM7943VneedmICcYvOiNzqxGq3Zm0jwMyD8dV8vIfhra8g4oKVmgRqx2yMxkc%2FfuXEUCOC8HoOIim63c%2BMvBVCe6mwk7NtrwEfYjKHv534vPXL5AuTJuRrVewoIqMrt%2F5%2B3UgPky4KtFRqxLMx6BOfBz3O4RDU22%2FtAm29vX5F85hF2OBXgbsGYYj2dG2l2QZal3dLUjp4hHJ0AgWIEtXybKxymmYln%2BOUm3oxaXZpHlnAnJfpPk2EZ6yKrpXvSgwa9Rr5G3slKQ46nKxz4Cpd2G7gQB9asMCIFS63yWTG4ND4HKARELag3IZNeiX7rXO6IU1MkQTN3S6ayr3CMzcsGi34t7KiQg%2BVv%2BtqiN1D64vajazgL6BnvC0y3Mls92SyfjzaZWfcr5%2BiNHVaZFK5wYwK5gdmLbgVumQ%2Fx6qx46sxtQkIDjxCkrOHJlx%2FsJ8jZw9p2Cr6IfqFyhMNTt1sQGOqUB0Eoh%2FKAeJPMztMbYWvCsP54PtDvN6pR0wHdcjHXbu1u%2BqqG0pwJOE1cAnF24REUHT9MbVU7Rq7OfnJ4jO7VvMk9CwAWIfpDvTeV6SRUEsGv7QaCSEJRpOk5HGNUc5t3ZkDEirfYaVA%2FhaTqIVhNzSF3pvr78p6MHHgg246d5jpQIp3lKp0aeoVH1oYuelLIgZma2Jcx4dBYvx53Ptl1HtI%2FDm6St&X-Amz-Signature=c267f4ed18672d7fd291c786450447dfc871f408dd5c9e28747fc1ef0ad296f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KHSIJCP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCJ%2BZ8gCRyqAJ7JKJvQgLurADbkElyCGXsPreJHA65InAIgMC6J4xX8fDxHRDCIeA2TY992jArrobInA6d7kH%2FNz3AqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAGT3ry%2BYV6uUje6SrcAzwVVYwQFJeT40KV7B%2BAxeCvSrVA251kWus3elxo4LPkpT161zTM1yBwL5vzHn8CcemmikxPcAtUfLJjjPHX9p7k3wP9qWaOsiGBSMAfdmga%2FsHfHcaz5AbAHzLyw8VgDLzE7D4fM9MpVeOF4e7EWO6%2BGLH6X%2B%2BiZ1BMVQjgU5pHDM7943VneedmICcYvOiNzqxGq3Zm0jwMyD8dV8vIfhra8g4oKVmgRqx2yMxkc%2FfuXEUCOC8HoOIim63c%2BMvBVCe6mwk7NtrwEfYjKHv534vPXL5AuTJuRrVewoIqMrt%2F5%2B3UgPky4KtFRqxLMx6BOfBz3O4RDU22%2FtAm29vX5F85hF2OBXgbsGYYj2dG2l2QZal3dLUjp4hHJ0AgWIEtXybKxymmYln%2BOUm3oxaXZpHlnAnJfpPk2EZ6yKrpXvSgwa9Rr5G3slKQ46nKxz4Cpd2G7gQB9asMCIFS63yWTG4ND4HKARELag3IZNeiX7rXO6IU1MkQTN3S6ayr3CMzcsGi34t7KiQg%2BVv%2BtqiN1D64vajazgL6BnvC0y3Mls92SyfjzaZWfcr5%2BiNHVaZFK5wYwK5gdmLbgVumQ%2Fx6qx46sxtQkIDjxCkrOHJlx%2FsJ8jZw9p2Cr6IfqFyhMNTt1sQGOqUB0Eoh%2FKAeJPMztMbYWvCsP54PtDvN6pR0wHdcjHXbu1u%2BqqG0pwJOE1cAnF24REUHT9MbVU7Rq7OfnJ4jO7VvMk9CwAWIfpDvTeV6SRUEsGv7QaCSEJRpOk5HGNUc5t3ZkDEirfYaVA%2FhaTqIVhNzSF3pvr78p6MHHgg246d5jpQIp3lKp0aeoVH1oYuelLIgZma2Jcx4dBYvx53Ptl1HtI%2FDm6St&X-Amz-Signature=8c82ca1b57ed4224299f3167a6789bb8d30a8b2280d92b66b1c78a5d2e862385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
