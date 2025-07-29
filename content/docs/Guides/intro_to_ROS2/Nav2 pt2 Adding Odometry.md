---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-28T21:22:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-28T21:22:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4DCLDY4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGzpluva7Bw%2FukIGEWyKxMaRA5WSbmn%2F2YQgJhOeRbJiAiB15%2B3fojKP301PGW8JioOfVC9IKUOfFQW6dZHNDkeoSiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkkDfGQp0sJb4J5L8KtwDVG1SyRUyoI4o%2BYEFHy0qpHnZftXON%2FoWlyYHmYxOVNQcbv5lD6ZCmXS9yOAyi7wifp0K%2FYMXptAD9VkIgHfOXKeesLZj8XbV7fIUT3JtjYVjEnrXB3S6NGQ04ovXMItGgEIWR9BTTp3GogeT5UfOux14R3oE%2BKdD%2FovA3exyRZu1qFwnPGafpfnXA8E2V1%2B3st6zCzgqSffp5v%2BAP9wVgLxA%2BlI4RTRA0NVeLm1PKelibABbHuvuwcJyypDs%2FUpYmIWP0dNlWgCQnSULQujzwFuuwq1SakfEeY%2F%2FTjV3iqcNHjrwfc4fQ%2F45mcJl28Ma7wwgq9duzso%2B2Kh1Wopsl0YUIcRTTtHtbxjN4hD1NahbRgppDlPfjzpT5bc1fQ0nVc%2F3qFaIJ4l4Eov2kRDIkhQHgAXVY77KFTKyaL5NxgaZeo7PGMXQ19I5rlK7kF1PdcA7EtK6Dd57x2B%2FfGvTR1uapmeq5qlmIqZZUGLf4NM2ydL1jt100nOTcdoiIe%2BURck%2Bdxo2KSDesYSfPXPn4f6ZjLIJ4%2F0mJiRgC4nkIIBNOk188eBhLTG2UdBCq0q786FSHJ6UHCxqiVBWED9vXuXpB3vaVfNUIxaAiynunfZDfryfg6JK8Ua15c4wzM2gxAY6pgH7lfDezMYHTtVbnHdnsnok1rnVjAsyrxVHV0ELexqLAaj4zbgAbeXlRlnUTD02ZfEPRMzaH9BcuSkw44ScqeGRFu81u%2FKSh4YvRpSk4m%2Bv4bOJoS4k5JxZ7YpXzRR%2BwLQcqOZsCpRfTyBPW3iZLBwmV22UYtRPJr7kxAelRY5MYHVLv8IeEtW5Y1xAh3diG5nr%2BeMVhV1tk2b8xatXGhFUlhNCo%2Bn7&X-Amz-Signature=0644adf8939e43d2567fa8065a99cd53a2721e5e0968eda302e59a118687e925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4DCLDY4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGzpluva7Bw%2FukIGEWyKxMaRA5WSbmn%2F2YQgJhOeRbJiAiB15%2B3fojKP301PGW8JioOfVC9IKUOfFQW6dZHNDkeoSiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkkDfGQp0sJb4J5L8KtwDVG1SyRUyoI4o%2BYEFHy0qpHnZftXON%2FoWlyYHmYxOVNQcbv5lD6ZCmXS9yOAyi7wifp0K%2FYMXptAD9VkIgHfOXKeesLZj8XbV7fIUT3JtjYVjEnrXB3S6NGQ04ovXMItGgEIWR9BTTp3GogeT5UfOux14R3oE%2BKdD%2FovA3exyRZu1qFwnPGafpfnXA8E2V1%2B3st6zCzgqSffp5v%2BAP9wVgLxA%2BlI4RTRA0NVeLm1PKelibABbHuvuwcJyypDs%2FUpYmIWP0dNlWgCQnSULQujzwFuuwq1SakfEeY%2F%2FTjV3iqcNHjrwfc4fQ%2F45mcJl28Ma7wwgq9duzso%2B2Kh1Wopsl0YUIcRTTtHtbxjN4hD1NahbRgppDlPfjzpT5bc1fQ0nVc%2F3qFaIJ4l4Eov2kRDIkhQHgAXVY77KFTKyaL5NxgaZeo7PGMXQ19I5rlK7kF1PdcA7EtK6Dd57x2B%2FfGvTR1uapmeq5qlmIqZZUGLf4NM2ydL1jt100nOTcdoiIe%2BURck%2Bdxo2KSDesYSfPXPn4f6ZjLIJ4%2F0mJiRgC4nkIIBNOk188eBhLTG2UdBCq0q786FSHJ6UHCxqiVBWED9vXuXpB3vaVfNUIxaAiynunfZDfryfg6JK8Ua15c4wzM2gxAY6pgH7lfDezMYHTtVbnHdnsnok1rnVjAsyrxVHV0ELexqLAaj4zbgAbeXlRlnUTD02ZfEPRMzaH9BcuSkw44ScqeGRFu81u%2FKSh4YvRpSk4m%2Bv4bOJoS4k5JxZ7YpXzRR%2BwLQcqOZsCpRfTyBPW3iZLBwmV22UYtRPJr7kxAelRY5MYHVLv8IeEtW5Y1xAh3diG5nr%2BeMVhV1tk2b8xatXGhFUlhNCo%2Bn7&X-Amz-Signature=45e087f5be915fff56de82524d46f9522a7790da7ceb3273f0fee37f5b10a89d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4DCLDY4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGzpluva7Bw%2FukIGEWyKxMaRA5WSbmn%2F2YQgJhOeRbJiAiB15%2B3fojKP301PGW8JioOfVC9IKUOfFQW6dZHNDkeoSiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkkDfGQp0sJb4J5L8KtwDVG1SyRUyoI4o%2BYEFHy0qpHnZftXON%2FoWlyYHmYxOVNQcbv5lD6ZCmXS9yOAyi7wifp0K%2FYMXptAD9VkIgHfOXKeesLZj8XbV7fIUT3JtjYVjEnrXB3S6NGQ04ovXMItGgEIWR9BTTp3GogeT5UfOux14R3oE%2BKdD%2FovA3exyRZu1qFwnPGafpfnXA8E2V1%2B3st6zCzgqSffp5v%2BAP9wVgLxA%2BlI4RTRA0NVeLm1PKelibABbHuvuwcJyypDs%2FUpYmIWP0dNlWgCQnSULQujzwFuuwq1SakfEeY%2F%2FTjV3iqcNHjrwfc4fQ%2F45mcJl28Ma7wwgq9duzso%2B2Kh1Wopsl0YUIcRTTtHtbxjN4hD1NahbRgppDlPfjzpT5bc1fQ0nVc%2F3qFaIJ4l4Eov2kRDIkhQHgAXVY77KFTKyaL5NxgaZeo7PGMXQ19I5rlK7kF1PdcA7EtK6Dd57x2B%2FfGvTR1uapmeq5qlmIqZZUGLf4NM2ydL1jt100nOTcdoiIe%2BURck%2Bdxo2KSDesYSfPXPn4f6ZjLIJ4%2F0mJiRgC4nkIIBNOk188eBhLTG2UdBCq0q786FSHJ6UHCxqiVBWED9vXuXpB3vaVfNUIxaAiynunfZDfryfg6JK8Ua15c4wzM2gxAY6pgH7lfDezMYHTtVbnHdnsnok1rnVjAsyrxVHV0ELexqLAaj4zbgAbeXlRlnUTD02ZfEPRMzaH9BcuSkw44ScqeGRFu81u%2FKSh4YvRpSk4m%2Bv4bOJoS4k5JxZ7YpXzRR%2BwLQcqOZsCpRfTyBPW3iZLBwmV22UYtRPJr7kxAelRY5MYHVLv8IeEtW5Y1xAh3diG5nr%2BeMVhV1tk2b8xatXGhFUlhNCo%2Bn7&X-Amz-Signature=a72fbf5ec94b15bc9212b99401863479c2aa3e722e83b61dc98fad42c998e591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4DCLDY4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGzpluva7Bw%2FukIGEWyKxMaRA5WSbmn%2F2YQgJhOeRbJiAiB15%2B3fojKP301PGW8JioOfVC9IKUOfFQW6dZHNDkeoSiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkkDfGQp0sJb4J5L8KtwDVG1SyRUyoI4o%2BYEFHy0qpHnZftXON%2FoWlyYHmYxOVNQcbv5lD6ZCmXS9yOAyi7wifp0K%2FYMXptAD9VkIgHfOXKeesLZj8XbV7fIUT3JtjYVjEnrXB3S6NGQ04ovXMItGgEIWR9BTTp3GogeT5UfOux14R3oE%2BKdD%2FovA3exyRZu1qFwnPGafpfnXA8E2V1%2B3st6zCzgqSffp5v%2BAP9wVgLxA%2BlI4RTRA0NVeLm1PKelibABbHuvuwcJyypDs%2FUpYmIWP0dNlWgCQnSULQujzwFuuwq1SakfEeY%2F%2FTjV3iqcNHjrwfc4fQ%2F45mcJl28Ma7wwgq9duzso%2B2Kh1Wopsl0YUIcRTTtHtbxjN4hD1NahbRgppDlPfjzpT5bc1fQ0nVc%2F3qFaIJ4l4Eov2kRDIkhQHgAXVY77KFTKyaL5NxgaZeo7PGMXQ19I5rlK7kF1PdcA7EtK6Dd57x2B%2FfGvTR1uapmeq5qlmIqZZUGLf4NM2ydL1jt100nOTcdoiIe%2BURck%2Bdxo2KSDesYSfPXPn4f6ZjLIJ4%2F0mJiRgC4nkIIBNOk188eBhLTG2UdBCq0q786FSHJ6UHCxqiVBWED9vXuXpB3vaVfNUIxaAiynunfZDfryfg6JK8Ua15c4wzM2gxAY6pgH7lfDezMYHTtVbnHdnsnok1rnVjAsyrxVHV0ELexqLAaj4zbgAbeXlRlnUTD02ZfEPRMzaH9BcuSkw44ScqeGRFu81u%2FKSh4YvRpSk4m%2Bv4bOJoS4k5JxZ7YpXzRR%2BwLQcqOZsCpRfTyBPW3iZLBwmV22UYtRPJr7kxAelRY5MYHVLv8IeEtW5Y1xAh3diG5nr%2BeMVhV1tk2b8xatXGhFUlhNCo%2Bn7&X-Amz-Signature=1dff0dc1499adc7aebc89d9301725aa46cbc955635221edc7d57a7e331130b29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4DCLDY4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGzpluva7Bw%2FukIGEWyKxMaRA5WSbmn%2F2YQgJhOeRbJiAiB15%2B3fojKP301PGW8JioOfVC9IKUOfFQW6dZHNDkeoSiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkkDfGQp0sJb4J5L8KtwDVG1SyRUyoI4o%2BYEFHy0qpHnZftXON%2FoWlyYHmYxOVNQcbv5lD6ZCmXS9yOAyi7wifp0K%2FYMXptAD9VkIgHfOXKeesLZj8XbV7fIUT3JtjYVjEnrXB3S6NGQ04ovXMItGgEIWR9BTTp3GogeT5UfOux14R3oE%2BKdD%2FovA3exyRZu1qFwnPGafpfnXA8E2V1%2B3st6zCzgqSffp5v%2BAP9wVgLxA%2BlI4RTRA0NVeLm1PKelibABbHuvuwcJyypDs%2FUpYmIWP0dNlWgCQnSULQujzwFuuwq1SakfEeY%2F%2FTjV3iqcNHjrwfc4fQ%2F45mcJl28Ma7wwgq9duzso%2B2Kh1Wopsl0YUIcRTTtHtbxjN4hD1NahbRgppDlPfjzpT5bc1fQ0nVc%2F3qFaIJ4l4Eov2kRDIkhQHgAXVY77KFTKyaL5NxgaZeo7PGMXQ19I5rlK7kF1PdcA7EtK6Dd57x2B%2FfGvTR1uapmeq5qlmIqZZUGLf4NM2ydL1jt100nOTcdoiIe%2BURck%2Bdxo2KSDesYSfPXPn4f6ZjLIJ4%2F0mJiRgC4nkIIBNOk188eBhLTG2UdBCq0q786FSHJ6UHCxqiVBWED9vXuXpB3vaVfNUIxaAiynunfZDfryfg6JK8Ua15c4wzM2gxAY6pgH7lfDezMYHTtVbnHdnsnok1rnVjAsyrxVHV0ELexqLAaj4zbgAbeXlRlnUTD02ZfEPRMzaH9BcuSkw44ScqeGRFu81u%2FKSh4YvRpSk4m%2Bv4bOJoS4k5JxZ7YpXzRR%2BwLQcqOZsCpRfTyBPW3iZLBwmV22UYtRPJr7kxAelRY5MYHVLv8IeEtW5Y1xAh3diG5nr%2BeMVhV1tk2b8xatXGhFUlhNCo%2Bn7&X-Amz-Signature=f7b76721938d30861ca1c7f338bfd310fbc6667590889ddc6228d32c1ef94439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4DCLDY4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGzpluva7Bw%2FukIGEWyKxMaRA5WSbmn%2F2YQgJhOeRbJiAiB15%2B3fojKP301PGW8JioOfVC9IKUOfFQW6dZHNDkeoSiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkkDfGQp0sJb4J5L8KtwDVG1SyRUyoI4o%2BYEFHy0qpHnZftXON%2FoWlyYHmYxOVNQcbv5lD6ZCmXS9yOAyi7wifp0K%2FYMXptAD9VkIgHfOXKeesLZj8XbV7fIUT3JtjYVjEnrXB3S6NGQ04ovXMItGgEIWR9BTTp3GogeT5UfOux14R3oE%2BKdD%2FovA3exyRZu1qFwnPGafpfnXA8E2V1%2B3st6zCzgqSffp5v%2BAP9wVgLxA%2BlI4RTRA0NVeLm1PKelibABbHuvuwcJyypDs%2FUpYmIWP0dNlWgCQnSULQujzwFuuwq1SakfEeY%2F%2FTjV3iqcNHjrwfc4fQ%2F45mcJl28Ma7wwgq9duzso%2B2Kh1Wopsl0YUIcRTTtHtbxjN4hD1NahbRgppDlPfjzpT5bc1fQ0nVc%2F3qFaIJ4l4Eov2kRDIkhQHgAXVY77KFTKyaL5NxgaZeo7PGMXQ19I5rlK7kF1PdcA7EtK6Dd57x2B%2FfGvTR1uapmeq5qlmIqZZUGLf4NM2ydL1jt100nOTcdoiIe%2BURck%2Bdxo2KSDesYSfPXPn4f6ZjLIJ4%2F0mJiRgC4nkIIBNOk188eBhLTG2UdBCq0q786FSHJ6UHCxqiVBWED9vXuXpB3vaVfNUIxaAiynunfZDfryfg6JK8Ua15c4wzM2gxAY6pgH7lfDezMYHTtVbnHdnsnok1rnVjAsyrxVHV0ELexqLAaj4zbgAbeXlRlnUTD02ZfEPRMzaH9BcuSkw44ScqeGRFu81u%2FKSh4YvRpSk4m%2Bv4bOJoS4k5JxZ7YpXzRR%2BwLQcqOZsCpRfTyBPW3iZLBwmV22UYtRPJr7kxAelRY5MYHVLv8IeEtW5Y1xAh3diG5nr%2BeMVhV1tk2b8xatXGhFUlhNCo%2Bn7&X-Amz-Signature=c54bc43be7aaf6e29947605dfcbcfc8f7bbfc18a5872c49d41aae178ccedab6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4DCLDY4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGzpluva7Bw%2FukIGEWyKxMaRA5WSbmn%2F2YQgJhOeRbJiAiB15%2B3fojKP301PGW8JioOfVC9IKUOfFQW6dZHNDkeoSiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkkDfGQp0sJb4J5L8KtwDVG1SyRUyoI4o%2BYEFHy0qpHnZftXON%2FoWlyYHmYxOVNQcbv5lD6ZCmXS9yOAyi7wifp0K%2FYMXptAD9VkIgHfOXKeesLZj8XbV7fIUT3JtjYVjEnrXB3S6NGQ04ovXMItGgEIWR9BTTp3GogeT5UfOux14R3oE%2BKdD%2FovA3exyRZu1qFwnPGafpfnXA8E2V1%2B3st6zCzgqSffp5v%2BAP9wVgLxA%2BlI4RTRA0NVeLm1PKelibABbHuvuwcJyypDs%2FUpYmIWP0dNlWgCQnSULQujzwFuuwq1SakfEeY%2F%2FTjV3iqcNHjrwfc4fQ%2F45mcJl28Ma7wwgq9duzso%2B2Kh1Wopsl0YUIcRTTtHtbxjN4hD1NahbRgppDlPfjzpT5bc1fQ0nVc%2F3qFaIJ4l4Eov2kRDIkhQHgAXVY77KFTKyaL5NxgaZeo7PGMXQ19I5rlK7kF1PdcA7EtK6Dd57x2B%2FfGvTR1uapmeq5qlmIqZZUGLf4NM2ydL1jt100nOTcdoiIe%2BURck%2Bdxo2KSDesYSfPXPn4f6ZjLIJ4%2F0mJiRgC4nkIIBNOk188eBhLTG2UdBCq0q786FSHJ6UHCxqiVBWED9vXuXpB3vaVfNUIxaAiynunfZDfryfg6JK8Ua15c4wzM2gxAY6pgH7lfDezMYHTtVbnHdnsnok1rnVjAsyrxVHV0ELexqLAaj4zbgAbeXlRlnUTD02ZfEPRMzaH9BcuSkw44ScqeGRFu81u%2FKSh4YvRpSk4m%2Bv4bOJoS4k5JxZ7YpXzRR%2BwLQcqOZsCpRfTyBPW3iZLBwmV22UYtRPJr7kxAelRY5MYHVLv8IeEtW5Y1xAh3diG5nr%2BeMVhV1tk2b8xatXGhFUlhNCo%2Bn7&X-Amz-Signature=340cf55eae549dbd8a1701b5d0b8ed3ed72b29b4afe4c134fa158c903d4f7e2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4DCLDY4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGzpluva7Bw%2FukIGEWyKxMaRA5WSbmn%2F2YQgJhOeRbJiAiB15%2B3fojKP301PGW8JioOfVC9IKUOfFQW6dZHNDkeoSiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkkDfGQp0sJb4J5L8KtwDVG1SyRUyoI4o%2BYEFHy0qpHnZftXON%2FoWlyYHmYxOVNQcbv5lD6ZCmXS9yOAyi7wifp0K%2FYMXptAD9VkIgHfOXKeesLZj8XbV7fIUT3JtjYVjEnrXB3S6NGQ04ovXMItGgEIWR9BTTp3GogeT5UfOux14R3oE%2BKdD%2FovA3exyRZu1qFwnPGafpfnXA8E2V1%2B3st6zCzgqSffp5v%2BAP9wVgLxA%2BlI4RTRA0NVeLm1PKelibABbHuvuwcJyypDs%2FUpYmIWP0dNlWgCQnSULQujzwFuuwq1SakfEeY%2F%2FTjV3iqcNHjrwfc4fQ%2F45mcJl28Ma7wwgq9duzso%2B2Kh1Wopsl0YUIcRTTtHtbxjN4hD1NahbRgppDlPfjzpT5bc1fQ0nVc%2F3qFaIJ4l4Eov2kRDIkhQHgAXVY77KFTKyaL5NxgaZeo7PGMXQ19I5rlK7kF1PdcA7EtK6Dd57x2B%2FfGvTR1uapmeq5qlmIqZZUGLf4NM2ydL1jt100nOTcdoiIe%2BURck%2Bdxo2KSDesYSfPXPn4f6ZjLIJ4%2F0mJiRgC4nkIIBNOk188eBhLTG2UdBCq0q786FSHJ6UHCxqiVBWED9vXuXpB3vaVfNUIxaAiynunfZDfryfg6JK8Ua15c4wzM2gxAY6pgH7lfDezMYHTtVbnHdnsnok1rnVjAsyrxVHV0ELexqLAaj4zbgAbeXlRlnUTD02ZfEPRMzaH9BcuSkw44ScqeGRFu81u%2FKSh4YvRpSk4m%2Bv4bOJoS4k5JxZ7YpXzRR%2BwLQcqOZsCpRfTyBPW3iZLBwmV22UYtRPJr7kxAelRY5MYHVLv8IeEtW5Y1xAh3diG5nr%2BeMVhV1tk2b8xatXGhFUlhNCo%2Bn7&X-Amz-Signature=0a67315b4befc31800d1701f92967d1c5c99dca550a9bed100c4b82c42748165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4DCLDY4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGzpluva7Bw%2FukIGEWyKxMaRA5WSbmn%2F2YQgJhOeRbJiAiB15%2B3fojKP301PGW8JioOfVC9IKUOfFQW6dZHNDkeoSiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkkDfGQp0sJb4J5L8KtwDVG1SyRUyoI4o%2BYEFHy0qpHnZftXON%2FoWlyYHmYxOVNQcbv5lD6ZCmXS9yOAyi7wifp0K%2FYMXptAD9VkIgHfOXKeesLZj8XbV7fIUT3JtjYVjEnrXB3S6NGQ04ovXMItGgEIWR9BTTp3GogeT5UfOux14R3oE%2BKdD%2FovA3exyRZu1qFwnPGafpfnXA8E2V1%2B3st6zCzgqSffp5v%2BAP9wVgLxA%2BlI4RTRA0NVeLm1PKelibABbHuvuwcJyypDs%2FUpYmIWP0dNlWgCQnSULQujzwFuuwq1SakfEeY%2F%2FTjV3iqcNHjrwfc4fQ%2F45mcJl28Ma7wwgq9duzso%2B2Kh1Wopsl0YUIcRTTtHtbxjN4hD1NahbRgppDlPfjzpT5bc1fQ0nVc%2F3qFaIJ4l4Eov2kRDIkhQHgAXVY77KFTKyaL5NxgaZeo7PGMXQ19I5rlK7kF1PdcA7EtK6Dd57x2B%2FfGvTR1uapmeq5qlmIqZZUGLf4NM2ydL1jt100nOTcdoiIe%2BURck%2Bdxo2KSDesYSfPXPn4f6ZjLIJ4%2F0mJiRgC4nkIIBNOk188eBhLTG2UdBCq0q786FSHJ6UHCxqiVBWED9vXuXpB3vaVfNUIxaAiynunfZDfryfg6JK8Ua15c4wzM2gxAY6pgH7lfDezMYHTtVbnHdnsnok1rnVjAsyrxVHV0ELexqLAaj4zbgAbeXlRlnUTD02ZfEPRMzaH9BcuSkw44ScqeGRFu81u%2FKSh4YvRpSk4m%2Bv4bOJoS4k5JxZ7YpXzRR%2BwLQcqOZsCpRfTyBPW3iZLBwmV22UYtRPJr7kxAelRY5MYHVLv8IeEtW5Y1xAh3diG5nr%2BeMVhV1tk2b8xatXGhFUlhNCo%2Bn7&X-Amz-Signature=8779696f8f051c3869f3f485aa46a73bc3356f1aad06e8dfa48ded8295e53f4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDIFGERR%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDQ8UQ%2BpejzPPIrMcyisEjWuaAO1ozelUO17rX6Se2j9gIgB7q1MFHOJNHovOe88oYBNUwmjJLz5eApIJxuVTcaJZgqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgWgZVfgLie8epvtyrcAx3HB7XSeJMqL%2FA9TrbCrc0dUx%2F4xp0KEn3%2Bl1FLf%2B7dUOnqNu985wIEuAh0%2FSN1Tar33jSJHfpwi%2B2WM1uGc1KNG9OeZ8H60XzD1XtuNXGTt33p4%2FO693CI9EEG8rGW3F%2FgjnZn7vT4kpSNdZoVbZk2JNyL%2B2s8rn5N00iDEnao8jEnokcwnmkNJtwwZqIk5XSHU9AZbn3ns%2BWZ7hH4NXVz7qdk7PFeIOnDybiPs0gcG9iHujTsIAMeAEZeXckpro%2FHg96C2fLu5%2BuR0Oed%2BRynWbr1pF5y1i43%2BpyoHIU31FdJbME2pRlagh15YjGwyaP0G0frZY4aiVds4ChqcHSDsA3U2zjB1i6HKKCXCVY93q6fkgY3j%2FGlVRT7%2Fe4kMFQ0RuZs%2BksSZQvPIlmaFXaeRGyJwoSblhjtzhZawJBLLnbpatQlia4lE06dnUkuV%2BE2%2BycOWwz4QqjUygIeljMHIQ2npdaOC%2FF05DOyAjhkCSGYwKTXN1Hsblz46jRoo1jueLWxiXc9oQb9J%2BEq%2BHqiHWQPRvGRUWdnlilIEenZlsiKYlbfTgHa0NFjazY9PFxtnKy4IUqflfHZ8e8rNPdemC5fWQIvR%2Fusz0lMode4p4m4Mk2bQwNw4zurMLXNoMQGOqUBIX7FsbzIcUlbZbq%2FoWBruRR0EBEkK79vX6qyTFxQyUN5OF8Dh7U4mT%2FKLBc3q72B5htuKflAglHc%2B4UjCbG9d797%2FJo822djP4rQn84hZxNLCt5gFEnKi8lz58UHqiGzihk9iicxoug%2FuSWtIQHDi9cMElCiwUcdIDgrbbrfEF0NeKjHcE2jPUpRpsxSWVMi2jLnr6ROGiatIpG9iTzwZAa8B8vz&X-Amz-Signature=181f3b9f0b4d1cedf9b8e4a1be0d6e1655943324b54bfda064af9d3511456d94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4DCLDY4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGzpluva7Bw%2FukIGEWyKxMaRA5WSbmn%2F2YQgJhOeRbJiAiB15%2B3fojKP301PGW8JioOfVC9IKUOfFQW6dZHNDkeoSiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkkDfGQp0sJb4J5L8KtwDVG1SyRUyoI4o%2BYEFHy0qpHnZftXON%2FoWlyYHmYxOVNQcbv5lD6ZCmXS9yOAyi7wifp0K%2FYMXptAD9VkIgHfOXKeesLZj8XbV7fIUT3JtjYVjEnrXB3S6NGQ04ovXMItGgEIWR9BTTp3GogeT5UfOux14R3oE%2BKdD%2FovA3exyRZu1qFwnPGafpfnXA8E2V1%2B3st6zCzgqSffp5v%2BAP9wVgLxA%2BlI4RTRA0NVeLm1PKelibABbHuvuwcJyypDs%2FUpYmIWP0dNlWgCQnSULQujzwFuuwq1SakfEeY%2F%2FTjV3iqcNHjrwfc4fQ%2F45mcJl28Ma7wwgq9duzso%2B2Kh1Wopsl0YUIcRTTtHtbxjN4hD1NahbRgppDlPfjzpT5bc1fQ0nVc%2F3qFaIJ4l4Eov2kRDIkhQHgAXVY77KFTKyaL5NxgaZeo7PGMXQ19I5rlK7kF1PdcA7EtK6Dd57x2B%2FfGvTR1uapmeq5qlmIqZZUGLf4NM2ydL1jt100nOTcdoiIe%2BURck%2Bdxo2KSDesYSfPXPn4f6ZjLIJ4%2F0mJiRgC4nkIIBNOk188eBhLTG2UdBCq0q786FSHJ6UHCxqiVBWED9vXuXpB3vaVfNUIxaAiynunfZDfryfg6JK8Ua15c4wzM2gxAY6pgH7lfDezMYHTtVbnHdnsnok1rnVjAsyrxVHV0ELexqLAaj4zbgAbeXlRlnUTD02ZfEPRMzaH9BcuSkw44ScqeGRFu81u%2FKSh4YvRpSk4m%2Bv4bOJoS4k5JxZ7YpXzRR%2BwLQcqOZsCpRfTyBPW3iZLBwmV22UYtRPJr7kxAelRY5MYHVLv8IeEtW5Y1xAh3diG5nr%2BeMVhV1tk2b8xatXGhFUlhNCo%2Bn7&X-Amz-Signature=a23bf369bb95fd1eee012b615b2ca9563ea18cf2ff3705c91af22bce1711adb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQJV47U%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIELyY86sI9C4VxLGoQXU%2FG%2BUyVNglrv4dsLGjmtRRFPwAiAjip0iIsRIadWI2Rm4KRCmkrumg41BvYk5wRpoDklxyyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP5rKXGkJsN4rFI4cKtwD21E5t7y3CiAi6zruPIDPY%2F0OL4V5CYTCE7r7%2BB%2F8KkJyJS418uxopx4CSrSzVnEOxAtEAWCNZ5a%2B6RRtmhyhXulbhjewtd8EvK0ETJy98b5vio9CFP3q4ai4RQfZguiWSUy9BRAkEu7OvFM%2B2JHaS1vNnSX01WLLvt8u0mxe0K9ucMZJCLdODBMRD69QtMpMo6gc2ZtTL0vRHK27W6smqQZoIUYIXZOrYdCfMdYJ%2F2NX2zlvEjli5sR6QvdZeMVHXuUOvA9c4Iu5B%2BHsp83Q%2FGJvQAbiWnSxiQn%2BWDj9IXqxRlXR9tlcEGyI%2FBuO0AT39m2xGi8czUGi6CnHjVg92R2pcnpDwzN%2B6AVZ%2FxEJXO9hEye1uuewEd5yLTUytsg9VIlFjTwoP%2Fi776lT7UBQ6sQ%2B5svX7DjBjhAcvAwK2BgwK2B8HjEc2OdanuXbvPEUIpBeMiX2Mh9GyZAvk7iEQ3M7VK3rPcR%2Bx%2F2URt3sG7JKb%2FzhKtkfuCKP0jP%2Bw%2F4bzEnx4d0f8aicA2Jm7z82DkJbqYmh57yLIrkTwubvycHse5aDizQkCXCNZvY78QKTUiTzJmmveyOnDck7DBqW3%2BHiKWS7%2BlAbgyEa00TUhMwsp%2BziXtC7Nb5fQi8wuc2gxAY6pgEp2Dl8524tgmzjLT7TQySMSQ14gQ8UnE%2B0bG09QGYKHwCakj%2BKA8hpIpBafLetQjDIxzD%2B5fnecE7vMioWek22TPpCeK2kE9gTtEk%2BNEvUivKJAhu8fiZ6slgBa21xh9lAEyAxkY5tW2y423AOthxd3g1%2FxgPkRGHpSBvHvwOXH74mCSST3QVKR45RDQJYZfnnrO4MY4dpO9vH0HP5HqIr10l%2B9KrJ&X-Amz-Signature=da41ae60e276ebc772a285ccb088d343fbb005786d693fe176b8834b6801a90b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQJV47U%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIELyY86sI9C4VxLGoQXU%2FG%2BUyVNglrv4dsLGjmtRRFPwAiAjip0iIsRIadWI2Rm4KRCmkrumg41BvYk5wRpoDklxyyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP5rKXGkJsN4rFI4cKtwD21E5t7y3CiAi6zruPIDPY%2F0OL4V5CYTCE7r7%2BB%2F8KkJyJS418uxopx4CSrSzVnEOxAtEAWCNZ5a%2B6RRtmhyhXulbhjewtd8EvK0ETJy98b5vio9CFP3q4ai4RQfZguiWSUy9BRAkEu7OvFM%2B2JHaS1vNnSX01WLLvt8u0mxe0K9ucMZJCLdODBMRD69QtMpMo6gc2ZtTL0vRHK27W6smqQZoIUYIXZOrYdCfMdYJ%2F2NX2zlvEjli5sR6QvdZeMVHXuUOvA9c4Iu5B%2BHsp83Q%2FGJvQAbiWnSxiQn%2BWDj9IXqxRlXR9tlcEGyI%2FBuO0AT39m2xGi8czUGi6CnHjVg92R2pcnpDwzN%2B6AVZ%2FxEJXO9hEye1uuewEd5yLTUytsg9VIlFjTwoP%2Fi776lT7UBQ6sQ%2B5svX7DjBjhAcvAwK2BgwK2B8HjEc2OdanuXbvPEUIpBeMiX2Mh9GyZAvk7iEQ3M7VK3rPcR%2Bx%2F2URt3sG7JKb%2FzhKtkfuCKP0jP%2Bw%2F4bzEnx4d0f8aicA2Jm7z82DkJbqYmh57yLIrkTwubvycHse5aDizQkCXCNZvY78QKTUiTzJmmveyOnDck7DBqW3%2BHiKWS7%2BlAbgyEa00TUhMwsp%2BziXtC7Nb5fQi8wuc2gxAY6pgEp2Dl8524tgmzjLT7TQySMSQ14gQ8UnE%2B0bG09QGYKHwCakj%2BKA8hpIpBafLetQjDIxzD%2B5fnecE7vMioWek22TPpCeK2kE9gTtEk%2BNEvUivKJAhu8fiZ6slgBa21xh9lAEyAxkY5tW2y423AOthxd3g1%2FxgPkRGHpSBvHvwOXH74mCSST3QVKR45RDQJYZfnnrO4MY4dpO9vH0HP5HqIr10l%2B9KrJ&X-Amz-Signature=ab8cafb44a579534f8d47c8d5c459001a31bc93b7202546b911ed8f9de859e1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQJV47U%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIELyY86sI9C4VxLGoQXU%2FG%2BUyVNglrv4dsLGjmtRRFPwAiAjip0iIsRIadWI2Rm4KRCmkrumg41BvYk5wRpoDklxyyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP5rKXGkJsN4rFI4cKtwD21E5t7y3CiAi6zruPIDPY%2F0OL4V5CYTCE7r7%2BB%2F8KkJyJS418uxopx4CSrSzVnEOxAtEAWCNZ5a%2B6RRtmhyhXulbhjewtd8EvK0ETJy98b5vio9CFP3q4ai4RQfZguiWSUy9BRAkEu7OvFM%2B2JHaS1vNnSX01WLLvt8u0mxe0K9ucMZJCLdODBMRD69QtMpMo6gc2ZtTL0vRHK27W6smqQZoIUYIXZOrYdCfMdYJ%2F2NX2zlvEjli5sR6QvdZeMVHXuUOvA9c4Iu5B%2BHsp83Q%2FGJvQAbiWnSxiQn%2BWDj9IXqxRlXR9tlcEGyI%2FBuO0AT39m2xGi8czUGi6CnHjVg92R2pcnpDwzN%2B6AVZ%2FxEJXO9hEye1uuewEd5yLTUytsg9VIlFjTwoP%2Fi776lT7UBQ6sQ%2B5svX7DjBjhAcvAwK2BgwK2B8HjEc2OdanuXbvPEUIpBeMiX2Mh9GyZAvk7iEQ3M7VK3rPcR%2Bx%2F2URt3sG7JKb%2FzhKtkfuCKP0jP%2Bw%2F4bzEnx4d0f8aicA2Jm7z82DkJbqYmh57yLIrkTwubvycHse5aDizQkCXCNZvY78QKTUiTzJmmveyOnDck7DBqW3%2BHiKWS7%2BlAbgyEa00TUhMwsp%2BziXtC7Nb5fQi8wuc2gxAY6pgEp2Dl8524tgmzjLT7TQySMSQ14gQ8UnE%2B0bG09QGYKHwCakj%2BKA8hpIpBafLetQjDIxzD%2B5fnecE7vMioWek22TPpCeK2kE9gTtEk%2BNEvUivKJAhu8fiZ6slgBa21xh9lAEyAxkY5tW2y423AOthxd3g1%2FxgPkRGHpSBvHvwOXH74mCSST3QVKR45RDQJYZfnnrO4MY4dpO9vH0HP5HqIr10l%2B9KrJ&X-Amz-Signature=50b14ecac2fb8d2c0554bbbea0925fa23d7c77711fb4bd1d40295bbb208c2a4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQJV47U%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIELyY86sI9C4VxLGoQXU%2FG%2BUyVNglrv4dsLGjmtRRFPwAiAjip0iIsRIadWI2Rm4KRCmkrumg41BvYk5wRpoDklxyyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP5rKXGkJsN4rFI4cKtwD21E5t7y3CiAi6zruPIDPY%2F0OL4V5CYTCE7r7%2BB%2F8KkJyJS418uxopx4CSrSzVnEOxAtEAWCNZ5a%2B6RRtmhyhXulbhjewtd8EvK0ETJy98b5vio9CFP3q4ai4RQfZguiWSUy9BRAkEu7OvFM%2B2JHaS1vNnSX01WLLvt8u0mxe0K9ucMZJCLdODBMRD69QtMpMo6gc2ZtTL0vRHK27W6smqQZoIUYIXZOrYdCfMdYJ%2F2NX2zlvEjli5sR6QvdZeMVHXuUOvA9c4Iu5B%2BHsp83Q%2FGJvQAbiWnSxiQn%2BWDj9IXqxRlXR9tlcEGyI%2FBuO0AT39m2xGi8czUGi6CnHjVg92R2pcnpDwzN%2B6AVZ%2FxEJXO9hEye1uuewEd5yLTUytsg9VIlFjTwoP%2Fi776lT7UBQ6sQ%2B5svX7DjBjhAcvAwK2BgwK2B8HjEc2OdanuXbvPEUIpBeMiX2Mh9GyZAvk7iEQ3M7VK3rPcR%2Bx%2F2URt3sG7JKb%2FzhKtkfuCKP0jP%2Bw%2F4bzEnx4d0f8aicA2Jm7z82DkJbqYmh57yLIrkTwubvycHse5aDizQkCXCNZvY78QKTUiTzJmmveyOnDck7DBqW3%2BHiKWS7%2BlAbgyEa00TUhMwsp%2BziXtC7Nb5fQi8wuc2gxAY6pgEp2Dl8524tgmzjLT7TQySMSQ14gQ8UnE%2B0bG09QGYKHwCakj%2BKA8hpIpBafLetQjDIxzD%2B5fnecE7vMioWek22TPpCeK2kE9gTtEk%2BNEvUivKJAhu8fiZ6slgBa21xh9lAEyAxkY5tW2y423AOthxd3g1%2FxgPkRGHpSBvHvwOXH74mCSST3QVKR45RDQJYZfnnrO4MY4dpO9vH0HP5HqIr10l%2B9KrJ&X-Amz-Signature=24a8390f7b5f9a4ccb8f2d19ee7a153ab37499622038d72c8add92bc16485861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQJV47U%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIELyY86sI9C4VxLGoQXU%2FG%2BUyVNglrv4dsLGjmtRRFPwAiAjip0iIsRIadWI2Rm4KRCmkrumg41BvYk5wRpoDklxyyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP5rKXGkJsN4rFI4cKtwD21E5t7y3CiAi6zruPIDPY%2F0OL4V5CYTCE7r7%2BB%2F8KkJyJS418uxopx4CSrSzVnEOxAtEAWCNZ5a%2B6RRtmhyhXulbhjewtd8EvK0ETJy98b5vio9CFP3q4ai4RQfZguiWSUy9BRAkEu7OvFM%2B2JHaS1vNnSX01WLLvt8u0mxe0K9ucMZJCLdODBMRD69QtMpMo6gc2ZtTL0vRHK27W6smqQZoIUYIXZOrYdCfMdYJ%2F2NX2zlvEjli5sR6QvdZeMVHXuUOvA9c4Iu5B%2BHsp83Q%2FGJvQAbiWnSxiQn%2BWDj9IXqxRlXR9tlcEGyI%2FBuO0AT39m2xGi8czUGi6CnHjVg92R2pcnpDwzN%2B6AVZ%2FxEJXO9hEye1uuewEd5yLTUytsg9VIlFjTwoP%2Fi776lT7UBQ6sQ%2B5svX7DjBjhAcvAwK2BgwK2B8HjEc2OdanuXbvPEUIpBeMiX2Mh9GyZAvk7iEQ3M7VK3rPcR%2Bx%2F2URt3sG7JKb%2FzhKtkfuCKP0jP%2Bw%2F4bzEnx4d0f8aicA2Jm7z82DkJbqYmh57yLIrkTwubvycHse5aDizQkCXCNZvY78QKTUiTzJmmveyOnDck7DBqW3%2BHiKWS7%2BlAbgyEa00TUhMwsp%2BziXtC7Nb5fQi8wuc2gxAY6pgEp2Dl8524tgmzjLT7TQySMSQ14gQ8UnE%2B0bG09QGYKHwCakj%2BKA8hpIpBafLetQjDIxzD%2B5fnecE7vMioWek22TPpCeK2kE9gTtEk%2BNEvUivKJAhu8fiZ6slgBa21xh9lAEyAxkY5tW2y423AOthxd3g1%2FxgPkRGHpSBvHvwOXH74mCSST3QVKR45RDQJYZfnnrO4MY4dpO9vH0HP5HqIr10l%2B9KrJ&X-Amz-Signature=e284e183b99683ee7d5fd5ede2b5208f77ad8d83c5ff86428563203c0b7c0bbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQJV47U%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIELyY86sI9C4VxLGoQXU%2FG%2BUyVNglrv4dsLGjmtRRFPwAiAjip0iIsRIadWI2Rm4KRCmkrumg41BvYk5wRpoDklxyyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP5rKXGkJsN4rFI4cKtwD21E5t7y3CiAi6zruPIDPY%2F0OL4V5CYTCE7r7%2BB%2F8KkJyJS418uxopx4CSrSzVnEOxAtEAWCNZ5a%2B6RRtmhyhXulbhjewtd8EvK0ETJy98b5vio9CFP3q4ai4RQfZguiWSUy9BRAkEu7OvFM%2B2JHaS1vNnSX01WLLvt8u0mxe0K9ucMZJCLdODBMRD69QtMpMo6gc2ZtTL0vRHK27W6smqQZoIUYIXZOrYdCfMdYJ%2F2NX2zlvEjli5sR6QvdZeMVHXuUOvA9c4Iu5B%2BHsp83Q%2FGJvQAbiWnSxiQn%2BWDj9IXqxRlXR9tlcEGyI%2FBuO0AT39m2xGi8czUGi6CnHjVg92R2pcnpDwzN%2B6AVZ%2FxEJXO9hEye1uuewEd5yLTUytsg9VIlFjTwoP%2Fi776lT7UBQ6sQ%2B5svX7DjBjhAcvAwK2BgwK2B8HjEc2OdanuXbvPEUIpBeMiX2Mh9GyZAvk7iEQ3M7VK3rPcR%2Bx%2F2URt3sG7JKb%2FzhKtkfuCKP0jP%2Bw%2F4bzEnx4d0f8aicA2Jm7z82DkJbqYmh57yLIrkTwubvycHse5aDizQkCXCNZvY78QKTUiTzJmmveyOnDck7DBqW3%2BHiKWS7%2BlAbgyEa00TUhMwsp%2BziXtC7Nb5fQi8wuc2gxAY6pgEp2Dl8524tgmzjLT7TQySMSQ14gQ8UnE%2B0bG09QGYKHwCakj%2BKA8hpIpBafLetQjDIxzD%2B5fnecE7vMioWek22TPpCeK2kE9gTtEk%2BNEvUivKJAhu8fiZ6slgBa21xh9lAEyAxkY5tW2y423AOthxd3g1%2FxgPkRGHpSBvHvwOXH74mCSST3QVKR45RDQJYZfnnrO4MY4dpO9vH0HP5HqIr10l%2B9KrJ&X-Amz-Signature=775ae19111e4578b5ef90d4046f24fec8d7ad2c3d2ee916bfdbf5f6b64798328&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQJV47U%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIELyY86sI9C4VxLGoQXU%2FG%2BUyVNglrv4dsLGjmtRRFPwAiAjip0iIsRIadWI2Rm4KRCmkrumg41BvYk5wRpoDklxyyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP5rKXGkJsN4rFI4cKtwD21E5t7y3CiAi6zruPIDPY%2F0OL4V5CYTCE7r7%2BB%2F8KkJyJS418uxopx4CSrSzVnEOxAtEAWCNZ5a%2B6RRtmhyhXulbhjewtd8EvK0ETJy98b5vio9CFP3q4ai4RQfZguiWSUy9BRAkEu7OvFM%2B2JHaS1vNnSX01WLLvt8u0mxe0K9ucMZJCLdODBMRD69QtMpMo6gc2ZtTL0vRHK27W6smqQZoIUYIXZOrYdCfMdYJ%2F2NX2zlvEjli5sR6QvdZeMVHXuUOvA9c4Iu5B%2BHsp83Q%2FGJvQAbiWnSxiQn%2BWDj9IXqxRlXR9tlcEGyI%2FBuO0AT39m2xGi8czUGi6CnHjVg92R2pcnpDwzN%2B6AVZ%2FxEJXO9hEye1uuewEd5yLTUytsg9VIlFjTwoP%2Fi776lT7UBQ6sQ%2B5svX7DjBjhAcvAwK2BgwK2B8HjEc2OdanuXbvPEUIpBeMiX2Mh9GyZAvk7iEQ3M7VK3rPcR%2Bx%2F2URt3sG7JKb%2FzhKtkfuCKP0jP%2Bw%2F4bzEnx4d0f8aicA2Jm7z82DkJbqYmh57yLIrkTwubvycHse5aDizQkCXCNZvY78QKTUiTzJmmveyOnDck7DBqW3%2BHiKWS7%2BlAbgyEa00TUhMwsp%2BziXtC7Nb5fQi8wuc2gxAY6pgEp2Dl8524tgmzjLT7TQySMSQ14gQ8UnE%2B0bG09QGYKHwCakj%2BKA8hpIpBafLetQjDIxzD%2B5fnecE7vMioWek22TPpCeK2kE9gTtEk%2BNEvUivKJAhu8fiZ6slgBa21xh9lAEyAxkY5tW2y423AOthxd3g1%2FxgPkRGHpSBvHvwOXH74mCSST3QVKR45RDQJYZfnnrO4MY4dpO9vH0HP5HqIr10l%2B9KrJ&X-Amz-Signature=34b6dde73df9d5f62109c2a73ad40f3bf92e531159fbbc3010059c4ec7acd265&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQJV47U%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIELyY86sI9C4VxLGoQXU%2FG%2BUyVNglrv4dsLGjmtRRFPwAiAjip0iIsRIadWI2Rm4KRCmkrumg41BvYk5wRpoDklxyyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP5rKXGkJsN4rFI4cKtwD21E5t7y3CiAi6zruPIDPY%2F0OL4V5CYTCE7r7%2BB%2F8KkJyJS418uxopx4CSrSzVnEOxAtEAWCNZ5a%2B6RRtmhyhXulbhjewtd8EvK0ETJy98b5vio9CFP3q4ai4RQfZguiWSUy9BRAkEu7OvFM%2B2JHaS1vNnSX01WLLvt8u0mxe0K9ucMZJCLdODBMRD69QtMpMo6gc2ZtTL0vRHK27W6smqQZoIUYIXZOrYdCfMdYJ%2F2NX2zlvEjli5sR6QvdZeMVHXuUOvA9c4Iu5B%2BHsp83Q%2FGJvQAbiWnSxiQn%2BWDj9IXqxRlXR9tlcEGyI%2FBuO0AT39m2xGi8czUGi6CnHjVg92R2pcnpDwzN%2B6AVZ%2FxEJXO9hEye1uuewEd5yLTUytsg9VIlFjTwoP%2Fi776lT7UBQ6sQ%2B5svX7DjBjhAcvAwK2BgwK2B8HjEc2OdanuXbvPEUIpBeMiX2Mh9GyZAvk7iEQ3M7VK3rPcR%2Bx%2F2URt3sG7JKb%2FzhKtkfuCKP0jP%2Bw%2F4bzEnx4d0f8aicA2Jm7z82DkJbqYmh57yLIrkTwubvycHse5aDizQkCXCNZvY78QKTUiTzJmmveyOnDck7DBqW3%2BHiKWS7%2BlAbgyEa00TUhMwsp%2BziXtC7Nb5fQi8wuc2gxAY6pgEp2Dl8524tgmzjLT7TQySMSQ14gQ8UnE%2B0bG09QGYKHwCakj%2BKA8hpIpBafLetQjDIxzD%2B5fnecE7vMioWek22TPpCeK2kE9gTtEk%2BNEvUivKJAhu8fiZ6slgBa21xh9lAEyAxkY5tW2y423AOthxd3g1%2FxgPkRGHpSBvHvwOXH74mCSST3QVKR45RDQJYZfnnrO4MY4dpO9vH0HP5HqIr10l%2B9KrJ&X-Amz-Signature=0564f8d87fbbb0792db397c4f2e3d82a9f11405b4ef1021dc3456c95235d1d1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
