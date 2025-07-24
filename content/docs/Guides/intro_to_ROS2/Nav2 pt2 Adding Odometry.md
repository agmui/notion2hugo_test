---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-24T10:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-24T10:34:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V3ZSMQC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCu01SEGzBnP5qyDGcD9eMMMzxLwdQAimebfkmS9z8ZigIgevGB7aM%2FpQt%2Fk9QyWxrcHr9sZQJdu2rpuCWpEeH4eVkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDJzdU%2BlvWuct9cgGXCrcA%2F8%2B%2FQxnqvpL6bqwkURujyqBdly0P9OWGT1LA%2FE6VyQcEyGSyEdRD%2FgTgvT74pgbrWs6vlZZaimiXF%2Bp8KFCkcVf4jCyQwxrAgBKM%2FZaadrUK8Wq8PsTSJhNlrEilEpl4GteuQ65znlUC%2BgKY7KOOALBKb28ODiMsFiMcMFZTsjQywcXjRkWOA7wNGG2B3wHYCBQLmgKq6QHl2Nc%2F2ZlzQ%2B%2FajxzTHxBpl%2Fctpa0fl9SMaxomgHPEPJjw67foRNNpLZPBKOKwulNAfOTdnbpRtssBGNX8XxD5ipxbT7L95Rf5jRs%2BBo%2F0g2shmZJIENUw6KWqaTqjM%2BkFhEwffQhl9phDR2Nv4TGaBnIofQZTcv%2FvzSNPiKMehje7rlGhi2LRi%2BA2iSw2fBweuYLLmECvBgJ0Ww2XewdWQ3sg3WmHy99%2Fe03S3YxKet3dIWHLT%2B3QR7LZNnqtA20oI6WtLlpYPvpdHguYlDVI9CUI%2BtkR7TUFRzEV%2FzSq%2B15beaMmuEnF4eNwcPw7eYjZC%2BD%2Fo7UTO7XIzdFvgrk8tjKH5kuLzryXZjAyglNaTusSgvvEM8F8Lo6opwHeNB4WkRm6%2F%2BwdT%2BWTNLP1jQi2k%2F4%2BdOpBFPAzPHJtE7bu6l9baVzMJ7UicQGOqUBCcO7tgvL3ewG22XxmuFTnTk8vky4dzF4PF4EprzPJpbe5k%2FFXwxap3qP1tZkslXO8raoQkeDNsvEAztWfl2VN7CbU6AVcYS6iWGySPORczNW9QAOl9AQgmuy3oy0ClmuVUMTSb9cvaLbczSQ25WVwDynumkt8rxqr9EB4MNA6B1zO9LqYmOrEP5yCrPT%2B7eqIf1g%2BImNtuBsb5EiO%2BBK8movicfM&X-Amz-Signature=45836c05f0d414d1b582114ef51d08fe5f8645a93e46ab90833c577b967931b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
      <summary>Why not </summary>
      This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards.
  </details>

{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## creating custom node

{{% alert icon=”👾” context="info" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V3ZSMQC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCu01SEGzBnP5qyDGcD9eMMMzxLwdQAimebfkmS9z8ZigIgevGB7aM%2FpQt%2Fk9QyWxrcHr9sZQJdu2rpuCWpEeH4eVkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDJzdU%2BlvWuct9cgGXCrcA%2F8%2B%2FQxnqvpL6bqwkURujyqBdly0P9OWGT1LA%2FE6VyQcEyGSyEdRD%2FgTgvT74pgbrWs6vlZZaimiXF%2Bp8KFCkcVf4jCyQwxrAgBKM%2FZaadrUK8Wq8PsTSJhNlrEilEpl4GteuQ65znlUC%2BgKY7KOOALBKb28ODiMsFiMcMFZTsjQywcXjRkWOA7wNGG2B3wHYCBQLmgKq6QHl2Nc%2F2ZlzQ%2B%2FajxzTHxBpl%2Fctpa0fl9SMaxomgHPEPJjw67foRNNpLZPBKOKwulNAfOTdnbpRtssBGNX8XxD5ipxbT7L95Rf5jRs%2BBo%2F0g2shmZJIENUw6KWqaTqjM%2BkFhEwffQhl9phDR2Nv4TGaBnIofQZTcv%2FvzSNPiKMehje7rlGhi2LRi%2BA2iSw2fBweuYLLmECvBgJ0Ww2XewdWQ3sg3WmHy99%2Fe03S3YxKet3dIWHLT%2B3QR7LZNnqtA20oI6WtLlpYPvpdHguYlDVI9CUI%2BtkR7TUFRzEV%2FzSq%2B15beaMmuEnF4eNwcPw7eYjZC%2BD%2Fo7UTO7XIzdFvgrk8tjKH5kuLzryXZjAyglNaTusSgvvEM8F8Lo6opwHeNB4WkRm6%2F%2BwdT%2BWTNLP1jQi2k%2F4%2BdOpBFPAzPHJtE7bu6l9baVzMJ7UicQGOqUBCcO7tgvL3ewG22XxmuFTnTk8vky4dzF4PF4EprzPJpbe5k%2FFXwxap3qP1tZkslXO8raoQkeDNsvEAztWfl2VN7CbU6AVcYS6iWGySPORczNW9QAOl9AQgmuy3oy0ClmuVUMTSb9cvaLbczSQ25WVwDynumkt8rxqr9EB4MNA6B1zO9LqYmOrEP5yCrPT%2B7eqIf1g%2BImNtuBsb5EiO%2BBK8movicfM&X-Amz-Signature=2cabd11011a134786d071275601f72f02f010c839b372c218e501575469fa863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V3ZSMQC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCu01SEGzBnP5qyDGcD9eMMMzxLwdQAimebfkmS9z8ZigIgevGB7aM%2FpQt%2Fk9QyWxrcHr9sZQJdu2rpuCWpEeH4eVkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDJzdU%2BlvWuct9cgGXCrcA%2F8%2B%2FQxnqvpL6bqwkURujyqBdly0P9OWGT1LA%2FE6VyQcEyGSyEdRD%2FgTgvT74pgbrWs6vlZZaimiXF%2Bp8KFCkcVf4jCyQwxrAgBKM%2FZaadrUK8Wq8PsTSJhNlrEilEpl4GteuQ65znlUC%2BgKY7KOOALBKb28ODiMsFiMcMFZTsjQywcXjRkWOA7wNGG2B3wHYCBQLmgKq6QHl2Nc%2F2ZlzQ%2B%2FajxzTHxBpl%2Fctpa0fl9SMaxomgHPEPJjw67foRNNpLZPBKOKwulNAfOTdnbpRtssBGNX8XxD5ipxbT7L95Rf5jRs%2BBo%2F0g2shmZJIENUw6KWqaTqjM%2BkFhEwffQhl9phDR2Nv4TGaBnIofQZTcv%2FvzSNPiKMehje7rlGhi2LRi%2BA2iSw2fBweuYLLmECvBgJ0Ww2XewdWQ3sg3WmHy99%2Fe03S3YxKet3dIWHLT%2B3QR7LZNnqtA20oI6WtLlpYPvpdHguYlDVI9CUI%2BtkR7TUFRzEV%2FzSq%2B15beaMmuEnF4eNwcPw7eYjZC%2BD%2Fo7UTO7XIzdFvgrk8tjKH5kuLzryXZjAyglNaTusSgvvEM8F8Lo6opwHeNB4WkRm6%2F%2BwdT%2BWTNLP1jQi2k%2F4%2BdOpBFPAzPHJtE7bu6l9baVzMJ7UicQGOqUBCcO7tgvL3ewG22XxmuFTnTk8vky4dzF4PF4EprzPJpbe5k%2FFXwxap3qP1tZkslXO8raoQkeDNsvEAztWfl2VN7CbU6AVcYS6iWGySPORczNW9QAOl9AQgmuy3oy0ClmuVUMTSb9cvaLbczSQ25WVwDynumkt8rxqr9EB4MNA6B1zO9LqYmOrEP5yCrPT%2B7eqIf1g%2BImNtuBsb5EiO%2BBK8movicfM&X-Amz-Signature=2945646d910f6ff30cea058606b55798d03e77e26c0a389fd34a36d5693520a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V3ZSMQC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCu01SEGzBnP5qyDGcD9eMMMzxLwdQAimebfkmS9z8ZigIgevGB7aM%2FpQt%2Fk9QyWxrcHr9sZQJdu2rpuCWpEeH4eVkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDJzdU%2BlvWuct9cgGXCrcA%2F8%2B%2FQxnqvpL6bqwkURujyqBdly0P9OWGT1LA%2FE6VyQcEyGSyEdRD%2FgTgvT74pgbrWs6vlZZaimiXF%2Bp8KFCkcVf4jCyQwxrAgBKM%2FZaadrUK8Wq8PsTSJhNlrEilEpl4GteuQ65znlUC%2BgKY7KOOALBKb28ODiMsFiMcMFZTsjQywcXjRkWOA7wNGG2B3wHYCBQLmgKq6QHl2Nc%2F2ZlzQ%2B%2FajxzTHxBpl%2Fctpa0fl9SMaxomgHPEPJjw67foRNNpLZPBKOKwulNAfOTdnbpRtssBGNX8XxD5ipxbT7L95Rf5jRs%2BBo%2F0g2shmZJIENUw6KWqaTqjM%2BkFhEwffQhl9phDR2Nv4TGaBnIofQZTcv%2FvzSNPiKMehje7rlGhi2LRi%2BA2iSw2fBweuYLLmECvBgJ0Ww2XewdWQ3sg3WmHy99%2Fe03S3YxKet3dIWHLT%2B3QR7LZNnqtA20oI6WtLlpYPvpdHguYlDVI9CUI%2BtkR7TUFRzEV%2FzSq%2B15beaMmuEnF4eNwcPw7eYjZC%2BD%2Fo7UTO7XIzdFvgrk8tjKH5kuLzryXZjAyglNaTusSgvvEM8F8Lo6opwHeNB4WkRm6%2F%2BwdT%2BWTNLP1jQi2k%2F4%2BdOpBFPAzPHJtE7bu6l9baVzMJ7UicQGOqUBCcO7tgvL3ewG22XxmuFTnTk8vky4dzF4PF4EprzPJpbe5k%2FFXwxap3qP1tZkslXO8raoQkeDNsvEAztWfl2VN7CbU6AVcYS6iWGySPORczNW9QAOl9AQgmuy3oy0ClmuVUMTSb9cvaLbczSQ25WVwDynumkt8rxqr9EB4MNA6B1zO9LqYmOrEP5yCrPT%2B7eqIf1g%2BImNtuBsb5EiO%2BBK8movicfM&X-Amz-Signature=6733986e0049b6cbeedf339428b02263e10248368ddd17b7d09bba4f19055b2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V3ZSMQC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCu01SEGzBnP5qyDGcD9eMMMzxLwdQAimebfkmS9z8ZigIgevGB7aM%2FpQt%2Fk9QyWxrcHr9sZQJdu2rpuCWpEeH4eVkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDJzdU%2BlvWuct9cgGXCrcA%2F8%2B%2FQxnqvpL6bqwkURujyqBdly0P9OWGT1LA%2FE6VyQcEyGSyEdRD%2FgTgvT74pgbrWs6vlZZaimiXF%2Bp8KFCkcVf4jCyQwxrAgBKM%2FZaadrUK8Wq8PsTSJhNlrEilEpl4GteuQ65znlUC%2BgKY7KOOALBKb28ODiMsFiMcMFZTsjQywcXjRkWOA7wNGG2B3wHYCBQLmgKq6QHl2Nc%2F2ZlzQ%2B%2FajxzTHxBpl%2Fctpa0fl9SMaxomgHPEPJjw67foRNNpLZPBKOKwulNAfOTdnbpRtssBGNX8XxD5ipxbT7L95Rf5jRs%2BBo%2F0g2shmZJIENUw6KWqaTqjM%2BkFhEwffQhl9phDR2Nv4TGaBnIofQZTcv%2FvzSNPiKMehje7rlGhi2LRi%2BA2iSw2fBweuYLLmECvBgJ0Ww2XewdWQ3sg3WmHy99%2Fe03S3YxKet3dIWHLT%2B3QR7LZNnqtA20oI6WtLlpYPvpdHguYlDVI9CUI%2BtkR7TUFRzEV%2FzSq%2B15beaMmuEnF4eNwcPw7eYjZC%2BD%2Fo7UTO7XIzdFvgrk8tjKH5kuLzryXZjAyglNaTusSgvvEM8F8Lo6opwHeNB4WkRm6%2F%2BwdT%2BWTNLP1jQi2k%2F4%2BdOpBFPAzPHJtE7bu6l9baVzMJ7UicQGOqUBCcO7tgvL3ewG22XxmuFTnTk8vky4dzF4PF4EprzPJpbe5k%2FFXwxap3qP1tZkslXO8raoQkeDNsvEAztWfl2VN7CbU6AVcYS6iWGySPORczNW9QAOl9AQgmuy3oy0ClmuVUMTSb9cvaLbczSQ25WVwDynumkt8rxqr9EB4MNA6B1zO9LqYmOrEP5yCrPT%2B7eqIf1g%2BImNtuBsb5EiO%2BBK8movicfM&X-Amz-Signature=8996985d0a2c8eb06368b6836039062dc53cdfc7950a752e07c5cc0fe1b7a426&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
        self.get_logger().info('Publishing position')       # print msg
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

## Testing our code

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V3ZSMQC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCu01SEGzBnP5qyDGcD9eMMMzxLwdQAimebfkmS9z8ZigIgevGB7aM%2FpQt%2Fk9QyWxrcHr9sZQJdu2rpuCWpEeH4eVkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDJzdU%2BlvWuct9cgGXCrcA%2F8%2B%2FQxnqvpL6bqwkURujyqBdly0P9OWGT1LA%2FE6VyQcEyGSyEdRD%2FgTgvT74pgbrWs6vlZZaimiXF%2Bp8KFCkcVf4jCyQwxrAgBKM%2FZaadrUK8Wq8PsTSJhNlrEilEpl4GteuQ65znlUC%2BgKY7KOOALBKb28ODiMsFiMcMFZTsjQywcXjRkWOA7wNGG2B3wHYCBQLmgKq6QHl2Nc%2F2ZlzQ%2B%2FajxzTHxBpl%2Fctpa0fl9SMaxomgHPEPJjw67foRNNpLZPBKOKwulNAfOTdnbpRtssBGNX8XxD5ipxbT7L95Rf5jRs%2BBo%2F0g2shmZJIENUw6KWqaTqjM%2BkFhEwffQhl9phDR2Nv4TGaBnIofQZTcv%2FvzSNPiKMehje7rlGhi2LRi%2BA2iSw2fBweuYLLmECvBgJ0Ww2XewdWQ3sg3WmHy99%2Fe03S3YxKet3dIWHLT%2B3QR7LZNnqtA20oI6WtLlpYPvpdHguYlDVI9CUI%2BtkR7TUFRzEV%2FzSq%2B15beaMmuEnF4eNwcPw7eYjZC%2BD%2Fo7UTO7XIzdFvgrk8tjKH5kuLzryXZjAyglNaTusSgvvEM8F8Lo6opwHeNB4WkRm6%2F%2BwdT%2BWTNLP1jQi2k%2F4%2BdOpBFPAzPHJtE7bu6l9baVzMJ7UicQGOqUBCcO7tgvL3ewG22XxmuFTnTk8vky4dzF4PF4EprzPJpbe5k%2FFXwxap3qP1tZkslXO8raoQkeDNsvEAztWfl2VN7CbU6AVcYS6iWGySPORczNW9QAOl9AQgmuy3oy0ClmuVUMTSb9cvaLbczSQ25WVwDynumkt8rxqr9EB4MNA6B1zO9LqYmOrEP5yCrPT%2B7eqIf1g%2BImNtuBsb5EiO%2BBK8movicfM&X-Amz-Signature=7bb54486b10f8c385084727024753ab19be251d228e2630f52ef0631f6868a67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V3ZSMQC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCu01SEGzBnP5qyDGcD9eMMMzxLwdQAimebfkmS9z8ZigIgevGB7aM%2FpQt%2Fk9QyWxrcHr9sZQJdu2rpuCWpEeH4eVkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDJzdU%2BlvWuct9cgGXCrcA%2F8%2B%2FQxnqvpL6bqwkURujyqBdly0P9OWGT1LA%2FE6VyQcEyGSyEdRD%2FgTgvT74pgbrWs6vlZZaimiXF%2Bp8KFCkcVf4jCyQwxrAgBKM%2FZaadrUK8Wq8PsTSJhNlrEilEpl4GteuQ65znlUC%2BgKY7KOOALBKb28ODiMsFiMcMFZTsjQywcXjRkWOA7wNGG2B3wHYCBQLmgKq6QHl2Nc%2F2ZlzQ%2B%2FajxzTHxBpl%2Fctpa0fl9SMaxomgHPEPJjw67foRNNpLZPBKOKwulNAfOTdnbpRtssBGNX8XxD5ipxbT7L95Rf5jRs%2BBo%2F0g2shmZJIENUw6KWqaTqjM%2BkFhEwffQhl9phDR2Nv4TGaBnIofQZTcv%2FvzSNPiKMehje7rlGhi2LRi%2BA2iSw2fBweuYLLmECvBgJ0Ww2XewdWQ3sg3WmHy99%2Fe03S3YxKet3dIWHLT%2B3QR7LZNnqtA20oI6WtLlpYPvpdHguYlDVI9CUI%2BtkR7TUFRzEV%2FzSq%2B15beaMmuEnF4eNwcPw7eYjZC%2BD%2Fo7UTO7XIzdFvgrk8tjKH5kuLzryXZjAyglNaTusSgvvEM8F8Lo6opwHeNB4WkRm6%2F%2BwdT%2BWTNLP1jQi2k%2F4%2BdOpBFPAzPHJtE7bu6l9baVzMJ7UicQGOqUBCcO7tgvL3ewG22XxmuFTnTk8vky4dzF4PF4EprzPJpbe5k%2FFXwxap3qP1tZkslXO8raoQkeDNsvEAztWfl2VN7CbU6AVcYS6iWGySPORczNW9QAOl9AQgmuy3oy0ClmuVUMTSb9cvaLbczSQ25WVwDynumkt8rxqr9EB4MNA6B1zO9LqYmOrEP5yCrPT%2B7eqIf1g%2BImNtuBsb5EiO%2BBK8movicfM&X-Amz-Signature=ca4e04bb394e2e9f1367d875093cb9903d9c3da9c02fbb81d5570f29e32b10b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V3ZSMQC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCu01SEGzBnP5qyDGcD9eMMMzxLwdQAimebfkmS9z8ZigIgevGB7aM%2FpQt%2Fk9QyWxrcHr9sZQJdu2rpuCWpEeH4eVkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDJzdU%2BlvWuct9cgGXCrcA%2F8%2B%2FQxnqvpL6bqwkURujyqBdly0P9OWGT1LA%2FE6VyQcEyGSyEdRD%2FgTgvT74pgbrWs6vlZZaimiXF%2Bp8KFCkcVf4jCyQwxrAgBKM%2FZaadrUK8Wq8PsTSJhNlrEilEpl4GteuQ65znlUC%2BgKY7KOOALBKb28ODiMsFiMcMFZTsjQywcXjRkWOA7wNGG2B3wHYCBQLmgKq6QHl2Nc%2F2ZlzQ%2B%2FajxzTHxBpl%2Fctpa0fl9SMaxomgHPEPJjw67foRNNpLZPBKOKwulNAfOTdnbpRtssBGNX8XxD5ipxbT7L95Rf5jRs%2BBo%2F0g2shmZJIENUw6KWqaTqjM%2BkFhEwffQhl9phDR2Nv4TGaBnIofQZTcv%2FvzSNPiKMehje7rlGhi2LRi%2BA2iSw2fBweuYLLmECvBgJ0Ww2XewdWQ3sg3WmHy99%2Fe03S3YxKet3dIWHLT%2B3QR7LZNnqtA20oI6WtLlpYPvpdHguYlDVI9CUI%2BtkR7TUFRzEV%2FzSq%2B15beaMmuEnF4eNwcPw7eYjZC%2BD%2Fo7UTO7XIzdFvgrk8tjKH5kuLzryXZjAyglNaTusSgvvEM8F8Lo6opwHeNB4WkRm6%2F%2BwdT%2BWTNLP1jQi2k%2F4%2BdOpBFPAzPHJtE7bu6l9baVzMJ7UicQGOqUBCcO7tgvL3ewG22XxmuFTnTk8vky4dzF4PF4EprzPJpbe5k%2FFXwxap3qP1tZkslXO8raoQkeDNsvEAztWfl2VN7CbU6AVcYS6iWGySPORczNW9QAOl9AQgmuy3oy0ClmuVUMTSb9cvaLbczSQ25WVwDynumkt8rxqr9EB4MNA6B1zO9LqYmOrEP5yCrPT%2B7eqIf1g%2BImNtuBsb5EiO%2BBK8movicfM&X-Amz-Signature=959e63278ce49adf979db669c0b440774d9c52d7eb48da8da292a33c9492a9e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## updating launch file

Lets add our new node to the launch file

```python
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

# Converting wheel angles to x,y (adding odom frame)

Now that we have the wheel angles lets get the (x, y) of the robot like in the GIF at the top of this guide

we do this though the `odom => base_link` transform

TODO: idk get gif from atriculate robotics of `odom => base_link` transform

<details>
      <summary>why </summary>
      This transform is required as in input to Nav2
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V3ZSMQC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCu01SEGzBnP5qyDGcD9eMMMzxLwdQAimebfkmS9z8ZigIgevGB7aM%2FpQt%2Fk9QyWxrcHr9sZQJdu2rpuCWpEeH4eVkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDJzdU%2BlvWuct9cgGXCrcA%2F8%2B%2FQxnqvpL6bqwkURujyqBdly0P9OWGT1LA%2FE6VyQcEyGSyEdRD%2FgTgvT74pgbrWs6vlZZaimiXF%2Bp8KFCkcVf4jCyQwxrAgBKM%2FZaadrUK8Wq8PsTSJhNlrEilEpl4GteuQ65znlUC%2BgKY7KOOALBKb28ODiMsFiMcMFZTsjQywcXjRkWOA7wNGG2B3wHYCBQLmgKq6QHl2Nc%2F2ZlzQ%2B%2FajxzTHxBpl%2Fctpa0fl9SMaxomgHPEPJjw67foRNNpLZPBKOKwulNAfOTdnbpRtssBGNX8XxD5ipxbT7L95Rf5jRs%2BBo%2F0g2shmZJIENUw6KWqaTqjM%2BkFhEwffQhl9phDR2Nv4TGaBnIofQZTcv%2FvzSNPiKMehje7rlGhi2LRi%2BA2iSw2fBweuYLLmECvBgJ0Ww2XewdWQ3sg3WmHy99%2Fe03S3YxKet3dIWHLT%2B3QR7LZNnqtA20oI6WtLlpYPvpdHguYlDVI9CUI%2BtkR7TUFRzEV%2FzSq%2B15beaMmuEnF4eNwcPw7eYjZC%2BD%2Fo7UTO7XIzdFvgrk8tjKH5kuLzryXZjAyglNaTusSgvvEM8F8Lo6opwHeNB4WkRm6%2F%2BwdT%2BWTNLP1jQi2k%2F4%2BdOpBFPAzPHJtE7bu6l9baVzMJ7UicQGOqUBCcO7tgvL3ewG22XxmuFTnTk8vky4dzF4PF4EprzPJpbe5k%2FFXwxap3qP1tZkslXO8raoQkeDNsvEAztWfl2VN7CbU6AVcYS6iWGySPORczNW9QAOl9AQgmuy3oy0ClmuVUMTSb9cvaLbczSQ25WVwDynumkt8rxqr9EB4MNA6B1zO9LqYmOrEP5yCrPT%2B7eqIf1g%2BImNtuBsb5EiO%2BBK8movicfM&X-Amz-Signature=c7b7e39f5612e8f67624f6ad427fdc91d26c633cb081d094387322733a9b62b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F64K6YB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCrdP7XdvAiiC1Qk136lJITLvXf8D7kHmkWLQVaBhCxmwIhANUdf8TXODFf0zXIEqvkkIPar%2F4b1XbsysgMTaFxEfzWKv8DCDIQABoMNjM3NDIzMTgzODA1Igx1YEEeNmWYkPDEcs4q3AOkJvKQiMDyeGSFyDzj%2FDNTFAnTZnrZMHTG3qrGZUQgRBAKqthX3Og2DMh4ZClET2Zp05GVxYkOJIbCLy84CCzW90OBZPLRfXYZfoJ%2BSKmstGDv5aQChJ9lOtXb3Mb%2BkHr0s4zE0BbauGEqFhPCpzYpd22GRVKMEypFQXehIpQNZPbmRS6RzZxll0wqyW5R3dGWkj84V7CV29o6yukHPhAe5lM0sRpNtJ6KSFTCb8fEh6WFNTWbqGKKoP8Z%2Ba5pWYlZIKg5YcUiFsk5vd%2BZCllMPVkp0KTcSw7cM59E3R%2FAEC%2Fw5pApY1TRmd7XeYw4BaQ5BxTG92oicGf9Q%2FDVFBOnB6i8qZ7dZIpKlCC0hPwryI79HFjQj2luxiZJqg298zfhyGcN%2BQkbApSuSuIZadCt%2BW4bKFkiBm6OfPmC9IU%2F7%2BFWzQKTFhvR7maUCJVRvNcZPvnt%2FX87tsIZOKm497vCcCekK16i%2BKQXEgQfvnHDZItHHoPzGFMt4uJP06fff5iY1GRk8SeHIb66FwrD7WJTVRN3WDHGgaxSPb9nM%2FHKdmS%2FOVSSBXW6h276JQpMOmiUU7cJ5j5NaRw7%2Fn%2BNox0CS7MecSUv1ySraF4t7cot%2BwBVbiVAt2M0VpVOYjC61InEBjqkATV19%2BS5R2CfGyh4hDN6pj4XvqXx3nlWs1A2Zpus6lw5fiztVvvp8PLQuLkA4DJWbfqingGwcrVS%2B1mPeILH0tj09pk7zkkGEyLY2VMtTl049q5gXZanjpqH4bnMLr6PFHHcykWqMbWYEvcuP0eklz0j5Xxfzygyz0DoqRZS80bx703zshUs7Upfl0dtwT0IRh6f3mKWPen47d95JnYpgi1w0QDn&X-Amz-Signature=a74626c7880a03efd1c38eabb47df2963957822bf29c3c15c7f8c9cb3f21f093&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V3ZSMQC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCu01SEGzBnP5qyDGcD9eMMMzxLwdQAimebfkmS9z8ZigIgevGB7aM%2FpQt%2Fk9QyWxrcHr9sZQJdu2rpuCWpEeH4eVkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDJzdU%2BlvWuct9cgGXCrcA%2F8%2B%2FQxnqvpL6bqwkURujyqBdly0P9OWGT1LA%2FE6VyQcEyGSyEdRD%2FgTgvT74pgbrWs6vlZZaimiXF%2Bp8KFCkcVf4jCyQwxrAgBKM%2FZaadrUK8Wq8PsTSJhNlrEilEpl4GteuQ65znlUC%2BgKY7KOOALBKb28ODiMsFiMcMFZTsjQywcXjRkWOA7wNGG2B3wHYCBQLmgKq6QHl2Nc%2F2ZlzQ%2B%2FajxzTHxBpl%2Fctpa0fl9SMaxomgHPEPJjw67foRNNpLZPBKOKwulNAfOTdnbpRtssBGNX8XxD5ipxbT7L95Rf5jRs%2BBo%2F0g2shmZJIENUw6KWqaTqjM%2BkFhEwffQhl9phDR2Nv4TGaBnIofQZTcv%2FvzSNPiKMehje7rlGhi2LRi%2BA2iSw2fBweuYLLmECvBgJ0Ww2XewdWQ3sg3WmHy99%2Fe03S3YxKet3dIWHLT%2B3QR7LZNnqtA20oI6WtLlpYPvpdHguYlDVI9CUI%2BtkR7TUFRzEV%2FzSq%2B15beaMmuEnF4eNwcPw7eYjZC%2BD%2Fo7UTO7XIzdFvgrk8tjKH5kuLzryXZjAyglNaTusSgvvEM8F8Lo6opwHeNB4WkRm6%2F%2BwdT%2BWTNLP1jQi2k%2F4%2BdOpBFPAzPHJtE7bu6l9baVzMJ7UicQGOqUBCcO7tgvL3ewG22XxmuFTnTk8vky4dzF4PF4EprzPJpbe5k%2FFXwxap3qP1tZkslXO8raoQkeDNsvEAztWfl2VN7CbU6AVcYS6iWGySPORczNW9QAOl9AQgmuy3oy0ClmuVUMTSb9cvaLbczSQ25WVwDynumkt8rxqr9EB4MNA6B1zO9LqYmOrEP5yCrPT%2B7eqIf1g%2BImNtuBsb5EiO%2BBK8movicfM&X-Amz-Signature=507c3509a86801956d95c1056b35c358355d55677bc9c0b8050f5cdb9ea28fd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V3ZSMQC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCu01SEGzBnP5qyDGcD9eMMMzxLwdQAimebfkmS9z8ZigIgevGB7aM%2FpQt%2Fk9QyWxrcHr9sZQJdu2rpuCWpEeH4eVkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDJzdU%2BlvWuct9cgGXCrcA%2F8%2B%2FQxnqvpL6bqwkURujyqBdly0P9OWGT1LA%2FE6VyQcEyGSyEdRD%2FgTgvT74pgbrWs6vlZZaimiXF%2Bp8KFCkcVf4jCyQwxrAgBKM%2FZaadrUK8Wq8PsTSJhNlrEilEpl4GteuQ65znlUC%2BgKY7KOOALBKb28ODiMsFiMcMFZTsjQywcXjRkWOA7wNGG2B3wHYCBQLmgKq6QHl2Nc%2F2ZlzQ%2B%2FajxzTHxBpl%2Fctpa0fl9SMaxomgHPEPJjw67foRNNpLZPBKOKwulNAfOTdnbpRtssBGNX8XxD5ipxbT7L95Rf5jRs%2BBo%2F0g2shmZJIENUw6KWqaTqjM%2BkFhEwffQhl9phDR2Nv4TGaBnIofQZTcv%2FvzSNPiKMehje7rlGhi2LRi%2BA2iSw2fBweuYLLmECvBgJ0Ww2XewdWQ3sg3WmHy99%2Fe03S3YxKet3dIWHLT%2B3QR7LZNnqtA20oI6WtLlpYPvpdHguYlDVI9CUI%2BtkR7TUFRzEV%2FzSq%2B15beaMmuEnF4eNwcPw7eYjZC%2BD%2Fo7UTO7XIzdFvgrk8tjKH5kuLzryXZjAyglNaTusSgvvEM8F8Lo6opwHeNB4WkRm6%2F%2BwdT%2BWTNLP1jQi2k%2F4%2BdOpBFPAzPHJtE7bu6l9baVzMJ7UicQGOqUBCcO7tgvL3ewG22XxmuFTnTk8vky4dzF4PF4EprzPJpbe5k%2FFXwxap3qP1tZkslXO8raoQkeDNsvEAztWfl2VN7CbU6AVcYS6iWGySPORczNW9QAOl9AQgmuy3oy0ClmuVUMTSb9cvaLbczSQ25WVwDynumkt8rxqr9EB4MNA6B1zO9LqYmOrEP5yCrPT%2B7eqIf1g%2BImNtuBsb5EiO%2BBK8movicfM&X-Amz-Signature=148142e2c5949a2b76da6f0153ec28db0afe0769893594fed643ac141e34d2ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E3Y6CXX%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIETTjFKKzfS8tWljP1SdVj%2BEndO5YO3LhG0X%2FwCHhN%2B7AiEA%2BPQOGnG4923%2BZEHsWGA3yFY65rCS95NMH%2BP%2B3Vk2Cdsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDA2k2CBTHHN5%2Fb2NZSrcA5xCTXMnmszCxFQZPB9jnrh1%2FVw34hKZpD8TSNI6uxbJI9PaOrgQjRgCj453tmHQWOCGSPnjJMmhLqVQAE%2FIwyb8XuqVM2A8wviUxOppAqjIpmoNKPh28zDntNd7tsdeGwGga2%2B7RkKDdBhvQ6pmbM0E6hU1%2Fc9wIc5OakcHngsvV7S2IfQC2yr5AuKCaATLOtRgJ542sExmQMZy3qIH1coM2NNYl%2BlV0mVLqp8GHLfL8lOvGxZMbg08sfyvqVkqMfuVTtzJKiMjiaJ41bHdohajSn8jtst7Y6nb%2BiOJE%2BrRiVo7hwe4wuRGQlJDi2FdMzO8tEhxZqkiaRhDkhAwgIojHw85jpDBus8yQOtfdNXzoktb8UtcyeYJStJuZjHtfgY6nmWparGJ%2F11xDz9UdJeAqkCDy7MDnFo0toXK%2FKwWKFH6%2F2PM%2F0epDcIwSdiWpgaNZqTnxiFENPiMlU3aNKZsBnmljV1M1J8iMGt91DduqGBiv4fwdhP%2B73nI%2BKphpezW1cwb7QkQgiXFNQ9hi0fCHHHODrMfUP1P%2FtzV1CL59661pyhcBObP9nsa0N3H9ZCtRvg4oCHikxJ3%2BW%2FWjXg50AJgzXTi6QTABSa22RTTFtXFjCKczkypIPGPMMvTicQGOqUBqerpmmVE7LPoD%2BtOomayUObv0Bt%2BNmGvhyMyuJyu6DCu9djhwz0AY1ceV9%2ByK1dKG%2BnEQdSJsdC7LgIFCOADfPJSYnxPK1q0AMBpghhBNPMtve6MJiftePXKTGbSKlgd1HJ02blA3%2FfYetEzEpEKNXADj2nvxTuyCNqozTKtXMQ%2F3Bxk1gXPysVYo0uKw%2FsCSAI5UBiHsYePdLKB8tHSU66blniT&X-Amz-Signature=d2bf12f5d004b64f05f922124262482d1d6844e87fcc1d1714d09beb202cbab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E3Y6CXX%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIETTjFKKzfS8tWljP1SdVj%2BEndO5YO3LhG0X%2FwCHhN%2B7AiEA%2BPQOGnG4923%2BZEHsWGA3yFY65rCS95NMH%2BP%2B3Vk2Cdsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDA2k2CBTHHN5%2Fb2NZSrcA5xCTXMnmszCxFQZPB9jnrh1%2FVw34hKZpD8TSNI6uxbJI9PaOrgQjRgCj453tmHQWOCGSPnjJMmhLqVQAE%2FIwyb8XuqVM2A8wviUxOppAqjIpmoNKPh28zDntNd7tsdeGwGga2%2B7RkKDdBhvQ6pmbM0E6hU1%2Fc9wIc5OakcHngsvV7S2IfQC2yr5AuKCaATLOtRgJ542sExmQMZy3qIH1coM2NNYl%2BlV0mVLqp8GHLfL8lOvGxZMbg08sfyvqVkqMfuVTtzJKiMjiaJ41bHdohajSn8jtst7Y6nb%2BiOJE%2BrRiVo7hwe4wuRGQlJDi2FdMzO8tEhxZqkiaRhDkhAwgIojHw85jpDBus8yQOtfdNXzoktb8UtcyeYJStJuZjHtfgY6nmWparGJ%2F11xDz9UdJeAqkCDy7MDnFo0toXK%2FKwWKFH6%2F2PM%2F0epDcIwSdiWpgaNZqTnxiFENPiMlU3aNKZsBnmljV1M1J8iMGt91DduqGBiv4fwdhP%2B73nI%2BKphpezW1cwb7QkQgiXFNQ9hi0fCHHHODrMfUP1P%2FtzV1CL59661pyhcBObP9nsa0N3H9ZCtRvg4oCHikxJ3%2BW%2FWjXg50AJgzXTi6QTABSa22RTTFtXFjCKczkypIPGPMMvTicQGOqUBqerpmmVE7LPoD%2BtOomayUObv0Bt%2BNmGvhyMyuJyu6DCu9djhwz0AY1ceV9%2ByK1dKG%2BnEQdSJsdC7LgIFCOADfPJSYnxPK1q0AMBpghhBNPMtve6MJiftePXKTGbSKlgd1HJ02blA3%2FfYetEzEpEKNXADj2nvxTuyCNqozTKtXMQ%2F3Bxk1gXPysVYo0uKw%2FsCSAI5UBiHsYePdLKB8tHSU66blniT&X-Amz-Signature=3c7a6b133ce0e3a711aec6cfbbeba44dc65cdcdc781509228a51dd279a00be8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E3Y6CXX%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIETTjFKKzfS8tWljP1SdVj%2BEndO5YO3LhG0X%2FwCHhN%2B7AiEA%2BPQOGnG4923%2BZEHsWGA3yFY65rCS95NMH%2BP%2B3Vk2Cdsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDA2k2CBTHHN5%2Fb2NZSrcA5xCTXMnmszCxFQZPB9jnrh1%2FVw34hKZpD8TSNI6uxbJI9PaOrgQjRgCj453tmHQWOCGSPnjJMmhLqVQAE%2FIwyb8XuqVM2A8wviUxOppAqjIpmoNKPh28zDntNd7tsdeGwGga2%2B7RkKDdBhvQ6pmbM0E6hU1%2Fc9wIc5OakcHngsvV7S2IfQC2yr5AuKCaATLOtRgJ542sExmQMZy3qIH1coM2NNYl%2BlV0mVLqp8GHLfL8lOvGxZMbg08sfyvqVkqMfuVTtzJKiMjiaJ41bHdohajSn8jtst7Y6nb%2BiOJE%2BrRiVo7hwe4wuRGQlJDi2FdMzO8tEhxZqkiaRhDkhAwgIojHw85jpDBus8yQOtfdNXzoktb8UtcyeYJStJuZjHtfgY6nmWparGJ%2F11xDz9UdJeAqkCDy7MDnFo0toXK%2FKwWKFH6%2F2PM%2F0epDcIwSdiWpgaNZqTnxiFENPiMlU3aNKZsBnmljV1M1J8iMGt91DduqGBiv4fwdhP%2B73nI%2BKphpezW1cwb7QkQgiXFNQ9hi0fCHHHODrMfUP1P%2FtzV1CL59661pyhcBObP9nsa0N3H9ZCtRvg4oCHikxJ3%2BW%2FWjXg50AJgzXTi6QTABSa22RTTFtXFjCKczkypIPGPMMvTicQGOqUBqerpmmVE7LPoD%2BtOomayUObv0Bt%2BNmGvhyMyuJyu6DCu9djhwz0AY1ceV9%2ByK1dKG%2BnEQdSJsdC7LgIFCOADfPJSYnxPK1q0AMBpghhBNPMtve6MJiftePXKTGbSKlgd1HJ02blA3%2FfYetEzEpEKNXADj2nvxTuyCNqozTKtXMQ%2F3Bxk1gXPysVYo0uKw%2FsCSAI5UBiHsYePdLKB8tHSU66blniT&X-Amz-Signature=8e167884f61052aa7229d0ea3fd0ff7f1f60f05072004d4a77e40a90ebcf2c61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E3Y6CXX%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIETTjFKKzfS8tWljP1SdVj%2BEndO5YO3LhG0X%2FwCHhN%2B7AiEA%2BPQOGnG4923%2BZEHsWGA3yFY65rCS95NMH%2BP%2B3Vk2Cdsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDA2k2CBTHHN5%2Fb2NZSrcA5xCTXMnmszCxFQZPB9jnrh1%2FVw34hKZpD8TSNI6uxbJI9PaOrgQjRgCj453tmHQWOCGSPnjJMmhLqVQAE%2FIwyb8XuqVM2A8wviUxOppAqjIpmoNKPh28zDntNd7tsdeGwGga2%2B7RkKDdBhvQ6pmbM0E6hU1%2Fc9wIc5OakcHngsvV7S2IfQC2yr5AuKCaATLOtRgJ542sExmQMZy3qIH1coM2NNYl%2BlV0mVLqp8GHLfL8lOvGxZMbg08sfyvqVkqMfuVTtzJKiMjiaJ41bHdohajSn8jtst7Y6nb%2BiOJE%2BrRiVo7hwe4wuRGQlJDi2FdMzO8tEhxZqkiaRhDkhAwgIojHw85jpDBus8yQOtfdNXzoktb8UtcyeYJStJuZjHtfgY6nmWparGJ%2F11xDz9UdJeAqkCDy7MDnFo0toXK%2FKwWKFH6%2F2PM%2F0epDcIwSdiWpgaNZqTnxiFENPiMlU3aNKZsBnmljV1M1J8iMGt91DduqGBiv4fwdhP%2B73nI%2BKphpezW1cwb7QkQgiXFNQ9hi0fCHHHODrMfUP1P%2FtzV1CL59661pyhcBObP9nsa0N3H9ZCtRvg4oCHikxJ3%2BW%2FWjXg50AJgzXTi6QTABSa22RTTFtXFjCKczkypIPGPMMvTicQGOqUBqerpmmVE7LPoD%2BtOomayUObv0Bt%2BNmGvhyMyuJyu6DCu9djhwz0AY1ceV9%2ByK1dKG%2BnEQdSJsdC7LgIFCOADfPJSYnxPK1q0AMBpghhBNPMtve6MJiftePXKTGbSKlgd1HJ02blA3%2FfYetEzEpEKNXADj2nvxTuyCNqozTKtXMQ%2F3Bxk1gXPysVYo0uKw%2FsCSAI5UBiHsYePdLKB8tHSU66blniT&X-Amz-Signature=ed427dc4492a395d55fe5af0d501bf80a16b4c0f4f4c1780947f2391feedb761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E3Y6CXX%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIETTjFKKzfS8tWljP1SdVj%2BEndO5YO3LhG0X%2FwCHhN%2B7AiEA%2BPQOGnG4923%2BZEHsWGA3yFY65rCS95NMH%2BP%2B3Vk2Cdsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDA2k2CBTHHN5%2Fb2NZSrcA5xCTXMnmszCxFQZPB9jnrh1%2FVw34hKZpD8TSNI6uxbJI9PaOrgQjRgCj453tmHQWOCGSPnjJMmhLqVQAE%2FIwyb8XuqVM2A8wviUxOppAqjIpmoNKPh28zDntNd7tsdeGwGga2%2B7RkKDdBhvQ6pmbM0E6hU1%2Fc9wIc5OakcHngsvV7S2IfQC2yr5AuKCaATLOtRgJ542sExmQMZy3qIH1coM2NNYl%2BlV0mVLqp8GHLfL8lOvGxZMbg08sfyvqVkqMfuVTtzJKiMjiaJ41bHdohajSn8jtst7Y6nb%2BiOJE%2BrRiVo7hwe4wuRGQlJDi2FdMzO8tEhxZqkiaRhDkhAwgIojHw85jpDBus8yQOtfdNXzoktb8UtcyeYJStJuZjHtfgY6nmWparGJ%2F11xDz9UdJeAqkCDy7MDnFo0toXK%2FKwWKFH6%2F2PM%2F0epDcIwSdiWpgaNZqTnxiFENPiMlU3aNKZsBnmljV1M1J8iMGt91DduqGBiv4fwdhP%2B73nI%2BKphpezW1cwb7QkQgiXFNQ9hi0fCHHHODrMfUP1P%2FtzV1CL59661pyhcBObP9nsa0N3H9ZCtRvg4oCHikxJ3%2BW%2FWjXg50AJgzXTi6QTABSa22RTTFtXFjCKczkypIPGPMMvTicQGOqUBqerpmmVE7LPoD%2BtOomayUObv0Bt%2BNmGvhyMyuJyu6DCu9djhwz0AY1ceV9%2ByK1dKG%2BnEQdSJsdC7LgIFCOADfPJSYnxPK1q0AMBpghhBNPMtve6MJiftePXKTGbSKlgd1HJ02blA3%2FfYetEzEpEKNXADj2nvxTuyCNqozTKtXMQ%2F3Bxk1gXPysVYo0uKw%2FsCSAI5UBiHsYePdLKB8tHSU66blniT&X-Amz-Signature=b5e2b31d5a0bebc1ce426adfc9e90fb7a4b86635253806e66d2a087e6a2b11f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E3Y6CXX%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIETTjFKKzfS8tWljP1SdVj%2BEndO5YO3LhG0X%2FwCHhN%2B7AiEA%2BPQOGnG4923%2BZEHsWGA3yFY65rCS95NMH%2BP%2B3Vk2Cdsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDA2k2CBTHHN5%2Fb2NZSrcA5xCTXMnmszCxFQZPB9jnrh1%2FVw34hKZpD8TSNI6uxbJI9PaOrgQjRgCj453tmHQWOCGSPnjJMmhLqVQAE%2FIwyb8XuqVM2A8wviUxOppAqjIpmoNKPh28zDntNd7tsdeGwGga2%2B7RkKDdBhvQ6pmbM0E6hU1%2Fc9wIc5OakcHngsvV7S2IfQC2yr5AuKCaATLOtRgJ542sExmQMZy3qIH1coM2NNYl%2BlV0mVLqp8GHLfL8lOvGxZMbg08sfyvqVkqMfuVTtzJKiMjiaJ41bHdohajSn8jtst7Y6nb%2BiOJE%2BrRiVo7hwe4wuRGQlJDi2FdMzO8tEhxZqkiaRhDkhAwgIojHw85jpDBus8yQOtfdNXzoktb8UtcyeYJStJuZjHtfgY6nmWparGJ%2F11xDz9UdJeAqkCDy7MDnFo0toXK%2FKwWKFH6%2F2PM%2F0epDcIwSdiWpgaNZqTnxiFENPiMlU3aNKZsBnmljV1M1J8iMGt91DduqGBiv4fwdhP%2B73nI%2BKphpezW1cwb7QkQgiXFNQ9hi0fCHHHODrMfUP1P%2FtzV1CL59661pyhcBObP9nsa0N3H9ZCtRvg4oCHikxJ3%2BW%2FWjXg50AJgzXTi6QTABSa22RTTFtXFjCKczkypIPGPMMvTicQGOqUBqerpmmVE7LPoD%2BtOomayUObv0Bt%2BNmGvhyMyuJyu6DCu9djhwz0AY1ceV9%2ByK1dKG%2BnEQdSJsdC7LgIFCOADfPJSYnxPK1q0AMBpghhBNPMtve6MJiftePXKTGbSKlgd1HJ02blA3%2FfYetEzEpEKNXADj2nvxTuyCNqozTKtXMQ%2F3Bxk1gXPysVYo0uKw%2FsCSAI5UBiHsYePdLKB8tHSU66blniT&X-Amz-Signature=52083128d07b2bbf7271d251cb2ae9eaab96360b444cf11689a7ec0333d5c553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
