---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-08-02T10:24:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-08-02T10:24:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XSNYDZJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxbxEYrK9l%2FGwOjhE3mWX%2FS%2BHJBlW1%2FWG7zhcouLiMrwIhAMZF8WvEDd8jXDBq%2FiznQ3KBHo91or1EP3FBTmZr0acAKv8DCBsQABoMNjM3NDIzMTgzODA1Igwt6bE%2BpPQrCs%2BtHLQq3AMqZVqE9Y0JLpaO6e4kfrzCThe6Rqm4Ai4zRiaBnJuoVOc3z7A81kF2tgKDEopNXbjLVlT%2FXyjGTFnlCx5bWWnoqqrmttIqZqrsq%2B46Ny6wy17Kv6Jwmxn0gXngXaL1SUD6LBMqvqj68S7Hv0xNBr2GZuk6uZUUfrN%2BhiKs9FWtnZg0ULzAdxIZCN3BWnTBFDclaZyVmq9uiYbUym3MPIZrqharlf9PCdXxlWvnE2SYJLC7ROhzyB8hCE5xYyNTnYOqUtBZMTJQmSqnjWjZxbSDEb47pFSEAPy0Qaak%2BHDTKviemEjmTqHppCKefizfiakP0pXLw2fOO%2FyyY4jaHkOeGECMXWEI4%2FlXIStO07j79mhUCJV2hYIqyqBwGcfGTZOXzAgxa3XGamnDdTLd6lotiiuHLGmN7n%2BbIODHsxPKN66amNGTtlnbbmT%2Bn%2FFh9tj0ccbfRozDcdwe3TAUUca8WoXmpdYlsY3J2A0%2Be3V5j54yI0rAMAy0O8ksuv4e2pu7TYe1JmtczHvXoVMPJUYpANgBFFgMTzC4uHWewGqSLzqP58le4TMfXwD14JVxDgbkQjJ2SfLCivmpd%2FsHAelrdakW9i6IyZ37RlgBoGgUQdJ8rG9kd113YCBkRDCDnrnEBjqkAY2N1rfmOeDHxLn8DPy%2BIwP1NOeq8ddXqmWXmi9PjJDUFR4qApNn%2BXFtEaQXd9BHOgVX%2FIFMUZ9d0Ph3S%2Ft7AvxveTT7XvpvVCDQcSoYpw4yrmWv0XQksFDqG7tSWaiUgJtLasSsmrvpVx4HPPhHOdL0IVWUwPJwussKjILz%2Fxz4fn9OdKafue4r5iW3%2FO7cwZD449k4%2Fbm98cMU9JjiQGrlfsCv&X-Amz-Signature=09a8ced95ff49b9fba4b8bf18bdd321ae6c446a6fde7e979075cabc66845fe12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XSNYDZJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxbxEYrK9l%2FGwOjhE3mWX%2FS%2BHJBlW1%2FWG7zhcouLiMrwIhAMZF8WvEDd8jXDBq%2FiznQ3KBHo91or1EP3FBTmZr0acAKv8DCBsQABoMNjM3NDIzMTgzODA1Igwt6bE%2BpPQrCs%2BtHLQq3AMqZVqE9Y0JLpaO6e4kfrzCThe6Rqm4Ai4zRiaBnJuoVOc3z7A81kF2tgKDEopNXbjLVlT%2FXyjGTFnlCx5bWWnoqqrmttIqZqrsq%2B46Ny6wy17Kv6Jwmxn0gXngXaL1SUD6LBMqvqj68S7Hv0xNBr2GZuk6uZUUfrN%2BhiKs9FWtnZg0ULzAdxIZCN3BWnTBFDclaZyVmq9uiYbUym3MPIZrqharlf9PCdXxlWvnE2SYJLC7ROhzyB8hCE5xYyNTnYOqUtBZMTJQmSqnjWjZxbSDEb47pFSEAPy0Qaak%2BHDTKviemEjmTqHppCKefizfiakP0pXLw2fOO%2FyyY4jaHkOeGECMXWEI4%2FlXIStO07j79mhUCJV2hYIqyqBwGcfGTZOXzAgxa3XGamnDdTLd6lotiiuHLGmN7n%2BbIODHsxPKN66amNGTtlnbbmT%2Bn%2FFh9tj0ccbfRozDcdwe3TAUUca8WoXmpdYlsY3J2A0%2Be3V5j54yI0rAMAy0O8ksuv4e2pu7TYe1JmtczHvXoVMPJUYpANgBFFgMTzC4uHWewGqSLzqP58le4TMfXwD14JVxDgbkQjJ2SfLCivmpd%2FsHAelrdakW9i6IyZ37RlgBoGgUQdJ8rG9kd113YCBkRDCDnrnEBjqkAY2N1rfmOeDHxLn8DPy%2BIwP1NOeq8ddXqmWXmi9PjJDUFR4qApNn%2BXFtEaQXd9BHOgVX%2FIFMUZ9d0Ph3S%2Ft7AvxveTT7XvpvVCDQcSoYpw4yrmWv0XQksFDqG7tSWaiUgJtLasSsmrvpVx4HPPhHOdL0IVWUwPJwussKjILz%2Fxz4fn9OdKafue4r5iW3%2FO7cwZD449k4%2Fbm98cMU9JjiQGrlfsCv&X-Amz-Signature=792011eed412c71d3720a7b01967c421796cd1afbd373acd40b6c3bceaa4ceaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XSNYDZJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxbxEYrK9l%2FGwOjhE3mWX%2FS%2BHJBlW1%2FWG7zhcouLiMrwIhAMZF8WvEDd8jXDBq%2FiznQ3KBHo91or1EP3FBTmZr0acAKv8DCBsQABoMNjM3NDIzMTgzODA1Igwt6bE%2BpPQrCs%2BtHLQq3AMqZVqE9Y0JLpaO6e4kfrzCThe6Rqm4Ai4zRiaBnJuoVOc3z7A81kF2tgKDEopNXbjLVlT%2FXyjGTFnlCx5bWWnoqqrmttIqZqrsq%2B46Ny6wy17Kv6Jwmxn0gXngXaL1SUD6LBMqvqj68S7Hv0xNBr2GZuk6uZUUfrN%2BhiKs9FWtnZg0ULzAdxIZCN3BWnTBFDclaZyVmq9uiYbUym3MPIZrqharlf9PCdXxlWvnE2SYJLC7ROhzyB8hCE5xYyNTnYOqUtBZMTJQmSqnjWjZxbSDEb47pFSEAPy0Qaak%2BHDTKviemEjmTqHppCKefizfiakP0pXLw2fOO%2FyyY4jaHkOeGECMXWEI4%2FlXIStO07j79mhUCJV2hYIqyqBwGcfGTZOXzAgxa3XGamnDdTLd6lotiiuHLGmN7n%2BbIODHsxPKN66amNGTtlnbbmT%2Bn%2FFh9tj0ccbfRozDcdwe3TAUUca8WoXmpdYlsY3J2A0%2Be3V5j54yI0rAMAy0O8ksuv4e2pu7TYe1JmtczHvXoVMPJUYpANgBFFgMTzC4uHWewGqSLzqP58le4TMfXwD14JVxDgbkQjJ2SfLCivmpd%2FsHAelrdakW9i6IyZ37RlgBoGgUQdJ8rG9kd113YCBkRDCDnrnEBjqkAY2N1rfmOeDHxLn8DPy%2BIwP1NOeq8ddXqmWXmi9PjJDUFR4qApNn%2BXFtEaQXd9BHOgVX%2FIFMUZ9d0Ph3S%2Ft7AvxveTT7XvpvVCDQcSoYpw4yrmWv0XQksFDqG7tSWaiUgJtLasSsmrvpVx4HPPhHOdL0IVWUwPJwussKjILz%2Fxz4fn9OdKafue4r5iW3%2FO7cwZD449k4%2Fbm98cMU9JjiQGrlfsCv&X-Amz-Signature=d8eaa71294251f0242b18e0421d4658dcbc33aa1251177cde6ba9d09bb75c30a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XSNYDZJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxbxEYrK9l%2FGwOjhE3mWX%2FS%2BHJBlW1%2FWG7zhcouLiMrwIhAMZF8WvEDd8jXDBq%2FiznQ3KBHo91or1EP3FBTmZr0acAKv8DCBsQABoMNjM3NDIzMTgzODA1Igwt6bE%2BpPQrCs%2BtHLQq3AMqZVqE9Y0JLpaO6e4kfrzCThe6Rqm4Ai4zRiaBnJuoVOc3z7A81kF2tgKDEopNXbjLVlT%2FXyjGTFnlCx5bWWnoqqrmttIqZqrsq%2B46Ny6wy17Kv6Jwmxn0gXngXaL1SUD6LBMqvqj68S7Hv0xNBr2GZuk6uZUUfrN%2BhiKs9FWtnZg0ULzAdxIZCN3BWnTBFDclaZyVmq9uiYbUym3MPIZrqharlf9PCdXxlWvnE2SYJLC7ROhzyB8hCE5xYyNTnYOqUtBZMTJQmSqnjWjZxbSDEb47pFSEAPy0Qaak%2BHDTKviemEjmTqHppCKefizfiakP0pXLw2fOO%2FyyY4jaHkOeGECMXWEI4%2FlXIStO07j79mhUCJV2hYIqyqBwGcfGTZOXzAgxa3XGamnDdTLd6lotiiuHLGmN7n%2BbIODHsxPKN66amNGTtlnbbmT%2Bn%2FFh9tj0ccbfRozDcdwe3TAUUca8WoXmpdYlsY3J2A0%2Be3V5j54yI0rAMAy0O8ksuv4e2pu7TYe1JmtczHvXoVMPJUYpANgBFFgMTzC4uHWewGqSLzqP58le4TMfXwD14JVxDgbkQjJ2SfLCivmpd%2FsHAelrdakW9i6IyZ37RlgBoGgUQdJ8rG9kd113YCBkRDCDnrnEBjqkAY2N1rfmOeDHxLn8DPy%2BIwP1NOeq8ddXqmWXmi9PjJDUFR4qApNn%2BXFtEaQXd9BHOgVX%2FIFMUZ9d0Ph3S%2Ft7AvxveTT7XvpvVCDQcSoYpw4yrmWv0XQksFDqG7tSWaiUgJtLasSsmrvpVx4HPPhHOdL0IVWUwPJwussKjILz%2Fxz4fn9OdKafue4r5iW3%2FO7cwZD449k4%2Fbm98cMU9JjiQGrlfsCv&X-Amz-Signature=2c53e5ba3124db38b5bc68ed97d7d240edad54c68b6c177ac9ff421d390815a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XSNYDZJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxbxEYrK9l%2FGwOjhE3mWX%2FS%2BHJBlW1%2FWG7zhcouLiMrwIhAMZF8WvEDd8jXDBq%2FiznQ3KBHo91or1EP3FBTmZr0acAKv8DCBsQABoMNjM3NDIzMTgzODA1Igwt6bE%2BpPQrCs%2BtHLQq3AMqZVqE9Y0JLpaO6e4kfrzCThe6Rqm4Ai4zRiaBnJuoVOc3z7A81kF2tgKDEopNXbjLVlT%2FXyjGTFnlCx5bWWnoqqrmttIqZqrsq%2B46Ny6wy17Kv6Jwmxn0gXngXaL1SUD6LBMqvqj68S7Hv0xNBr2GZuk6uZUUfrN%2BhiKs9FWtnZg0ULzAdxIZCN3BWnTBFDclaZyVmq9uiYbUym3MPIZrqharlf9PCdXxlWvnE2SYJLC7ROhzyB8hCE5xYyNTnYOqUtBZMTJQmSqnjWjZxbSDEb47pFSEAPy0Qaak%2BHDTKviemEjmTqHppCKefizfiakP0pXLw2fOO%2FyyY4jaHkOeGECMXWEI4%2FlXIStO07j79mhUCJV2hYIqyqBwGcfGTZOXzAgxa3XGamnDdTLd6lotiiuHLGmN7n%2BbIODHsxPKN66amNGTtlnbbmT%2Bn%2FFh9tj0ccbfRozDcdwe3TAUUca8WoXmpdYlsY3J2A0%2Be3V5j54yI0rAMAy0O8ksuv4e2pu7TYe1JmtczHvXoVMPJUYpANgBFFgMTzC4uHWewGqSLzqP58le4TMfXwD14JVxDgbkQjJ2SfLCivmpd%2FsHAelrdakW9i6IyZ37RlgBoGgUQdJ8rG9kd113YCBkRDCDnrnEBjqkAY2N1rfmOeDHxLn8DPy%2BIwP1NOeq8ddXqmWXmi9PjJDUFR4qApNn%2BXFtEaQXd9BHOgVX%2FIFMUZ9d0Ph3S%2Ft7AvxveTT7XvpvVCDQcSoYpw4yrmWv0XQksFDqG7tSWaiUgJtLasSsmrvpVx4HPPhHOdL0IVWUwPJwussKjILz%2Fxz4fn9OdKafue4r5iW3%2FO7cwZD449k4%2Fbm98cMU9JjiQGrlfsCv&X-Amz-Signature=6395ad8763197908fb31e6b0a5a4a3983b4d7862ed55da04909f68ca1497af35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
      ```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.5, self.timer_callback) # calls timer_callback() every 0.5 sec

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here

        
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


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```
  </details>

At this point plug in your robot to you laptop/computer

> lf on WSL here is a guide for [Connecting USB devices](https://learn.microsoft.com/en-us/windows/wsl/connect-usb)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XSNYDZJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxbxEYrK9l%2FGwOjhE3mWX%2FS%2BHJBlW1%2FWG7zhcouLiMrwIhAMZF8WvEDd8jXDBq%2FiznQ3KBHo91or1EP3FBTmZr0acAKv8DCBsQABoMNjM3NDIzMTgzODA1Igwt6bE%2BpPQrCs%2BtHLQq3AMqZVqE9Y0JLpaO6e4kfrzCThe6Rqm4Ai4zRiaBnJuoVOc3z7A81kF2tgKDEopNXbjLVlT%2FXyjGTFnlCx5bWWnoqqrmttIqZqrsq%2B46Ny6wy17Kv6Jwmxn0gXngXaL1SUD6LBMqvqj68S7Hv0xNBr2GZuk6uZUUfrN%2BhiKs9FWtnZg0ULzAdxIZCN3BWnTBFDclaZyVmq9uiYbUym3MPIZrqharlf9PCdXxlWvnE2SYJLC7ROhzyB8hCE5xYyNTnYOqUtBZMTJQmSqnjWjZxbSDEb47pFSEAPy0Qaak%2BHDTKviemEjmTqHppCKefizfiakP0pXLw2fOO%2FyyY4jaHkOeGECMXWEI4%2FlXIStO07j79mhUCJV2hYIqyqBwGcfGTZOXzAgxa3XGamnDdTLd6lotiiuHLGmN7n%2BbIODHsxPKN66amNGTtlnbbmT%2Bn%2FFh9tj0ccbfRozDcdwe3TAUUca8WoXmpdYlsY3J2A0%2Be3V5j54yI0rAMAy0O8ksuv4e2pu7TYe1JmtczHvXoVMPJUYpANgBFFgMTzC4uHWewGqSLzqP58le4TMfXwD14JVxDgbkQjJ2SfLCivmpd%2FsHAelrdakW9i6IyZ37RlgBoGgUQdJ8rG9kd113YCBkRDCDnrnEBjqkAY2N1rfmOeDHxLn8DPy%2BIwP1NOeq8ddXqmWXmi9PjJDUFR4qApNn%2BXFtEaQXd9BHOgVX%2FIFMUZ9d0Ph3S%2Ft7AvxveTT7XvpvVCDQcSoYpw4yrmWv0XQksFDqG7tSWaiUgJtLasSsmrvpVx4HPPhHOdL0IVWUwPJwussKjILz%2Fxz4fn9OdKafue4r5iW3%2FO7cwZD449k4%2Fbm98cMU9JjiQGrlfsCv&X-Amz-Signature=665bf20bee00ee31d5030ecadab170b9ce95fe7e166f12d5d16c58bba4bcb4ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XSNYDZJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxbxEYrK9l%2FGwOjhE3mWX%2FS%2BHJBlW1%2FWG7zhcouLiMrwIhAMZF8WvEDd8jXDBq%2FiznQ3KBHo91or1EP3FBTmZr0acAKv8DCBsQABoMNjM3NDIzMTgzODA1Igwt6bE%2BpPQrCs%2BtHLQq3AMqZVqE9Y0JLpaO6e4kfrzCThe6Rqm4Ai4zRiaBnJuoVOc3z7A81kF2tgKDEopNXbjLVlT%2FXyjGTFnlCx5bWWnoqqrmttIqZqrsq%2B46Ny6wy17Kv6Jwmxn0gXngXaL1SUD6LBMqvqj68S7Hv0xNBr2GZuk6uZUUfrN%2BhiKs9FWtnZg0ULzAdxIZCN3BWnTBFDclaZyVmq9uiYbUym3MPIZrqharlf9PCdXxlWvnE2SYJLC7ROhzyB8hCE5xYyNTnYOqUtBZMTJQmSqnjWjZxbSDEb47pFSEAPy0Qaak%2BHDTKviemEjmTqHppCKefizfiakP0pXLw2fOO%2FyyY4jaHkOeGECMXWEI4%2FlXIStO07j79mhUCJV2hYIqyqBwGcfGTZOXzAgxa3XGamnDdTLd6lotiiuHLGmN7n%2BbIODHsxPKN66amNGTtlnbbmT%2Bn%2FFh9tj0ccbfRozDcdwe3TAUUca8WoXmpdYlsY3J2A0%2Be3V5j54yI0rAMAy0O8ksuv4e2pu7TYe1JmtczHvXoVMPJUYpANgBFFgMTzC4uHWewGqSLzqP58le4TMfXwD14JVxDgbkQjJ2SfLCivmpd%2FsHAelrdakW9i6IyZ37RlgBoGgUQdJ8rG9kd113YCBkRDCDnrnEBjqkAY2N1rfmOeDHxLn8DPy%2BIwP1NOeq8ddXqmWXmi9PjJDUFR4qApNn%2BXFtEaQXd9BHOgVX%2FIFMUZ9d0Ph3S%2Ft7AvxveTT7XvpvVCDQcSoYpw4yrmWv0XQksFDqG7tSWaiUgJtLasSsmrvpVx4HPPhHOdL0IVWUwPJwussKjILz%2Fxz4fn9OdKafue4r5iW3%2FO7cwZD449k4%2Fbm98cMU9JjiQGrlfsCv&X-Amz-Signature=1fa078ebe090c16aa95c1e5acf5ac2c97b80457b58e8cab39157c818f907a3d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XSNYDZJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxbxEYrK9l%2FGwOjhE3mWX%2FS%2BHJBlW1%2FWG7zhcouLiMrwIhAMZF8WvEDd8jXDBq%2FiznQ3KBHo91or1EP3FBTmZr0acAKv8DCBsQABoMNjM3NDIzMTgzODA1Igwt6bE%2BpPQrCs%2BtHLQq3AMqZVqE9Y0JLpaO6e4kfrzCThe6Rqm4Ai4zRiaBnJuoVOc3z7A81kF2tgKDEopNXbjLVlT%2FXyjGTFnlCx5bWWnoqqrmttIqZqrsq%2B46Ny6wy17Kv6Jwmxn0gXngXaL1SUD6LBMqvqj68S7Hv0xNBr2GZuk6uZUUfrN%2BhiKs9FWtnZg0ULzAdxIZCN3BWnTBFDclaZyVmq9uiYbUym3MPIZrqharlf9PCdXxlWvnE2SYJLC7ROhzyB8hCE5xYyNTnYOqUtBZMTJQmSqnjWjZxbSDEb47pFSEAPy0Qaak%2BHDTKviemEjmTqHppCKefizfiakP0pXLw2fOO%2FyyY4jaHkOeGECMXWEI4%2FlXIStO07j79mhUCJV2hYIqyqBwGcfGTZOXzAgxa3XGamnDdTLd6lotiiuHLGmN7n%2BbIODHsxPKN66amNGTtlnbbmT%2Bn%2FFh9tj0ccbfRozDcdwe3TAUUca8WoXmpdYlsY3J2A0%2Be3V5j54yI0rAMAy0O8ksuv4e2pu7TYe1JmtczHvXoVMPJUYpANgBFFgMTzC4uHWewGqSLzqP58le4TMfXwD14JVxDgbkQjJ2SfLCivmpd%2FsHAelrdakW9i6IyZ37RlgBoGgUQdJ8rG9kd113YCBkRDCDnrnEBjqkAY2N1rfmOeDHxLn8DPy%2BIwP1NOeq8ddXqmWXmi9PjJDUFR4qApNn%2BXFtEaQXd9BHOgVX%2FIFMUZ9d0Ph3S%2Ft7AvxveTT7XvpvVCDQcSoYpw4yrmWv0XQksFDqG7tSWaiUgJtLasSsmrvpVx4HPPhHOdL0IVWUwPJwussKjILz%2Fxz4fn9OdKafue4r5iW3%2FO7cwZD449k4%2Fbm98cMU9JjiQGrlfsCv&X-Amz-Signature=e378e6f8b4cdda0d4558af52595ecdc2a2aa838afe9703685c14be33b8cdf852&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XSNYDZJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxbxEYrK9l%2FGwOjhE3mWX%2FS%2BHJBlW1%2FWG7zhcouLiMrwIhAMZF8WvEDd8jXDBq%2FiznQ3KBHo91or1EP3FBTmZr0acAKv8DCBsQABoMNjM3NDIzMTgzODA1Igwt6bE%2BpPQrCs%2BtHLQq3AMqZVqE9Y0JLpaO6e4kfrzCThe6Rqm4Ai4zRiaBnJuoVOc3z7A81kF2tgKDEopNXbjLVlT%2FXyjGTFnlCx5bWWnoqqrmttIqZqrsq%2B46Ny6wy17Kv6Jwmxn0gXngXaL1SUD6LBMqvqj68S7Hv0xNBr2GZuk6uZUUfrN%2BhiKs9FWtnZg0ULzAdxIZCN3BWnTBFDclaZyVmq9uiYbUym3MPIZrqharlf9PCdXxlWvnE2SYJLC7ROhzyB8hCE5xYyNTnYOqUtBZMTJQmSqnjWjZxbSDEb47pFSEAPy0Qaak%2BHDTKviemEjmTqHppCKefizfiakP0pXLw2fOO%2FyyY4jaHkOeGECMXWEI4%2FlXIStO07j79mhUCJV2hYIqyqBwGcfGTZOXzAgxa3XGamnDdTLd6lotiiuHLGmN7n%2BbIODHsxPKN66amNGTtlnbbmT%2Bn%2FFh9tj0ccbfRozDcdwe3TAUUca8WoXmpdYlsY3J2A0%2Be3V5j54yI0rAMAy0O8ksuv4e2pu7TYe1JmtczHvXoVMPJUYpANgBFFgMTzC4uHWewGqSLzqP58le4TMfXwD14JVxDgbkQjJ2SfLCivmpd%2FsHAelrdakW9i6IyZ37RlgBoGgUQdJ8rG9kd113YCBkRDCDnrnEBjqkAY2N1rfmOeDHxLn8DPy%2BIwP1NOeq8ddXqmWXmi9PjJDUFR4qApNn%2BXFtEaQXd9BHOgVX%2FIFMUZ9d0Ph3S%2Ft7AvxveTT7XvpvVCDQcSoYpw4yrmWv0XQksFDqG7tSWaiUgJtLasSsmrvpVx4HPPhHOdL0IVWUwPJwussKjILz%2Fxz4fn9OdKafue4r5iW3%2FO7cwZD449k4%2Fbm98cMU9JjiQGrlfsCv&X-Amz-Signature=04d0923a86a990e20faffc79dab281ca64e184b57e7cf0b7ecb3175b4471c354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XSNYDZJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxbxEYrK9l%2FGwOjhE3mWX%2FS%2BHJBlW1%2FWG7zhcouLiMrwIhAMZF8WvEDd8jXDBq%2FiznQ3KBHo91or1EP3FBTmZr0acAKv8DCBsQABoMNjM3NDIzMTgzODA1Igwt6bE%2BpPQrCs%2BtHLQq3AMqZVqE9Y0JLpaO6e4kfrzCThe6Rqm4Ai4zRiaBnJuoVOc3z7A81kF2tgKDEopNXbjLVlT%2FXyjGTFnlCx5bWWnoqqrmttIqZqrsq%2B46Ny6wy17Kv6Jwmxn0gXngXaL1SUD6LBMqvqj68S7Hv0xNBr2GZuk6uZUUfrN%2BhiKs9FWtnZg0ULzAdxIZCN3BWnTBFDclaZyVmq9uiYbUym3MPIZrqharlf9PCdXxlWvnE2SYJLC7ROhzyB8hCE5xYyNTnYOqUtBZMTJQmSqnjWjZxbSDEb47pFSEAPy0Qaak%2BHDTKviemEjmTqHppCKefizfiakP0pXLw2fOO%2FyyY4jaHkOeGECMXWEI4%2FlXIStO07j79mhUCJV2hYIqyqBwGcfGTZOXzAgxa3XGamnDdTLd6lotiiuHLGmN7n%2BbIODHsxPKN66amNGTtlnbbmT%2Bn%2FFh9tj0ccbfRozDcdwe3TAUUca8WoXmpdYlsY3J2A0%2Be3V5j54yI0rAMAy0O8ksuv4e2pu7TYe1JmtczHvXoVMPJUYpANgBFFgMTzC4uHWewGqSLzqP58le4TMfXwD14JVxDgbkQjJ2SfLCivmpd%2FsHAelrdakW9i6IyZ37RlgBoGgUQdJ8rG9kd113YCBkRDCDnrnEBjqkAY2N1rfmOeDHxLn8DPy%2BIwP1NOeq8ddXqmWXmi9PjJDUFR4qApNn%2BXFtEaQXd9BHOgVX%2FIFMUZ9d0Ph3S%2Ft7AvxveTT7XvpvVCDQcSoYpw4yrmWv0XQksFDqG7tSWaiUgJtLasSsmrvpVx4HPPhHOdL0IVWUwPJwussKjILz%2Fxz4fn9OdKafue4r5iW3%2FO7cwZD449k4%2Fbm98cMU9JjiQGrlfsCv&X-Amz-Signature=d049070c2e2eb7800a4b39bf8d71658020f75d1bf0eccdbb1305dc5814b53bbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647QDEZMU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcfTU%2BlqU368xhZ7lwuVqK1XNhJ3Ss9a7gZaZwW4yT%2BAIhANfYUY0dIodISNB2iEFxkjk3jFNnJCHQ7IcrJTJTAeFMKv8DCBsQABoMNjM3NDIzMTgzODA1IgzEiLbhYNnZxPpEy%2BYq3AP26xkK8qRYPux2USCUo8I7hsQnIlkdgm9DzDnoWsOHt2KHioN4p17qityvjzaKIgWEd4Lxz%2BOdwu9zuGCnye4J%2FJplfcghygven6dB%2B6Gu3ASglg4HrmdNv160po7uOLyEPd1PadIuK3D83GOkzjvPQsP76HCHAOsYWayIubKrnIuNjg4pa4u4z9PuPjf8ZneonvDEEaz9Wfi%2F76nQogLSj03XmYuOFpA2CsCZXb2BfHQccZ8yMcPUaPm%2FqSQIa%2BVHBqZo98PVDzyXoHQ39yWOtkQY91lJvuUBfxVgLilM5SSgiqNENUUlz4rCSjCHuKntJ3vJnp78gxcqt6J1gGsBIsnH0w8XYdNpaVbaACFzOgo0gHr8kTUQSxmNScT5wAAn9axhS3Z3FBSHr6dQpzBmmi0x2UIIVaP2b%2FvTSGAfPxHZBSPkHwl%2Bl2sCggQObnGdYx2Bn%2BGDZYRyzul%2F1XxoeZO46f%2BUscb9JNFNfzx%2B%2FEsG121SfoU7NbfwdkZWD90GKiDxh7LGC1EgWwHWRUbZE%2FRUvlAnpXP7QQYZMC%2BnvnFJNK8NnhTCyFz0a6TDvE5mTHbzSEzSGugvWxVL9nENw7ArG2VuTpOvTIr62ZkNcjKA2oL1hLV0tU4eqDDOnrnEBjqkATM58qkBOPmNjT3M3Gm%2FjlBbynLUy3Zn8RefhXDmibHHoTH73SHt2cDn6JPRI7Of9NfhUMwVGZxhzr3TYYIQWoieHujuipYubpduRBiiYGAFuLzdciGeJIg%2FZq2h49Ppm3%2Bk1m3J7g9PjYQUphKrSw%2Bdfk8OS76QyaORMjUcekh87%2BzHK15c9Kp1X5cVy9OoMEqGhI1TT%2FUlOcDH7ZHsMcVREkvF&X-Amz-Signature=2c5415e9fb032c479c870d0e61526aeb68bc92bcfa995641b7ddc4c8bec88aa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XSNYDZJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxbxEYrK9l%2FGwOjhE3mWX%2FS%2BHJBlW1%2FWG7zhcouLiMrwIhAMZF8WvEDd8jXDBq%2FiznQ3KBHo91or1EP3FBTmZr0acAKv8DCBsQABoMNjM3NDIzMTgzODA1Igwt6bE%2BpPQrCs%2BtHLQq3AMqZVqE9Y0JLpaO6e4kfrzCThe6Rqm4Ai4zRiaBnJuoVOc3z7A81kF2tgKDEopNXbjLVlT%2FXyjGTFnlCx5bWWnoqqrmttIqZqrsq%2B46Ny6wy17Kv6Jwmxn0gXngXaL1SUD6LBMqvqj68S7Hv0xNBr2GZuk6uZUUfrN%2BhiKs9FWtnZg0ULzAdxIZCN3BWnTBFDclaZyVmq9uiYbUym3MPIZrqharlf9PCdXxlWvnE2SYJLC7ROhzyB8hCE5xYyNTnYOqUtBZMTJQmSqnjWjZxbSDEb47pFSEAPy0Qaak%2BHDTKviemEjmTqHppCKefizfiakP0pXLw2fOO%2FyyY4jaHkOeGECMXWEI4%2FlXIStO07j79mhUCJV2hYIqyqBwGcfGTZOXzAgxa3XGamnDdTLd6lotiiuHLGmN7n%2BbIODHsxPKN66amNGTtlnbbmT%2Bn%2FFh9tj0ccbfRozDcdwe3TAUUca8WoXmpdYlsY3J2A0%2Be3V5j54yI0rAMAy0O8ksuv4e2pu7TYe1JmtczHvXoVMPJUYpANgBFFgMTzC4uHWewGqSLzqP58le4TMfXwD14JVxDgbkQjJ2SfLCivmpd%2FsHAelrdakW9i6IyZ37RlgBoGgUQdJ8rG9kd113YCBkRDCDnrnEBjqkAY2N1rfmOeDHxLn8DPy%2BIwP1NOeq8ddXqmWXmi9PjJDUFR4qApNn%2BXFtEaQXd9BHOgVX%2FIFMUZ9d0Ph3S%2Ft7AvxveTT7XvpvVCDQcSoYpw4yrmWv0XQksFDqG7tSWaiUgJtLasSsmrvpVx4HPPhHOdL0IVWUwPJwussKjILz%2Fxz4fn9OdKafue4r5iW3%2FO7cwZD449k4%2Fbm98cMU9JjiQGrlfsCv&X-Amz-Signature=742debdd656f6f9f82adb42475925dd1dfb0a2273718e80a32fa885bbb7dade7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJNWYM6Q%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6kNwXRUwZfz37KEvJxVKG6jssI%2BMCIL3%2BeStG6boydAiEAxhJNUOMP7qDaZXT62LDJUUhnXbvo0Zg3KzYgQfp5j8wq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCZF8qqnDucF1D7NtSrcA6A8KW58ULfTNvMvv%2Bdfti4EIkTZNkJ0KDjsZGtjOrrWHg%2BZUfcNzD1iDCAbfQMJI7ewRsdhaDKtIFnzFOy31fCKafhP9eOk%2Bxjh7cpI6cxGoaAM7U%2F0TT174Vw16l5AkL8nUknnR%2B5xreZ04l7bNhEDdida%2FHlcp9rAeOznwtTRIwzRTiuEPhoNWsKY367mM%2F7QdLCe9EY7KyJGJuLauwR%2FrqXxBEwIXw9wxxMTR3A%2Fo%2B2ab4YSlCpIxaodSu%2B9DzePcQa4k75zUhLsWM%2FvNinIvI0Ze1kAh6PWcMYj5OsFpRcc6pGnayj9LoUF3%2FQVa7lpePmnVcbT2lGJzBD8%2BoZyYcvp92SKuXvRoTr1T3tn3XQynQVxqAp2VfQ9qKhSwRS6LGGejrBPNHFajtPot4BtwvkKeHoc5Opxt8zBbTaz1Is1%2FZGaY%2Bnux699PjuYPEkQvEyHmbGKNnc8M9f0%2Fleit3IKW776rqUKMBpIrqmSZRaQimdW4u2q5u3SGMsutpnGLukIY8LJjle25EpHkmIMDe8HMMaYumzGcs91GHMp7bV0LbGyH192pOkszopuhvvGVOiHxMAhFeCSm%2BBumytohfOxnrmbrz3NZeOLF4oJb1SMdIOIBjk0p8IeMLueucQGOqUBm0BUAMdQf9%2F6jV6OnoiUTc503FsH0QM0GhThzuskQBEpLfPP4tpHQ9VJ7BuAJMF%2FYIfW4vQlC6vNOy9V6k4ocBMPazzy3nRCsUQfw2TQUL2zRN6lLp6RBC7LPQuzrEAF5aQ6%2BTf3A%2F74T7%2B6t2tR887mChdRj0g2qTMtyNe52Qelsr3KbGp3LhYUfJlPBEZKsesO3qg8Xih8EBMoyliviwnCXFLa&X-Amz-Signature=122ca85bbce500f55a287381f7cf2411bca7a83351fb7bb19830a0df504b5ed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJNWYM6Q%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6kNwXRUwZfz37KEvJxVKG6jssI%2BMCIL3%2BeStG6boydAiEAxhJNUOMP7qDaZXT62LDJUUhnXbvo0Zg3KzYgQfp5j8wq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCZF8qqnDucF1D7NtSrcA6A8KW58ULfTNvMvv%2Bdfti4EIkTZNkJ0KDjsZGtjOrrWHg%2BZUfcNzD1iDCAbfQMJI7ewRsdhaDKtIFnzFOy31fCKafhP9eOk%2Bxjh7cpI6cxGoaAM7U%2F0TT174Vw16l5AkL8nUknnR%2B5xreZ04l7bNhEDdida%2FHlcp9rAeOznwtTRIwzRTiuEPhoNWsKY367mM%2F7QdLCe9EY7KyJGJuLauwR%2FrqXxBEwIXw9wxxMTR3A%2Fo%2B2ab4YSlCpIxaodSu%2B9DzePcQa4k75zUhLsWM%2FvNinIvI0Ze1kAh6PWcMYj5OsFpRcc6pGnayj9LoUF3%2FQVa7lpePmnVcbT2lGJzBD8%2BoZyYcvp92SKuXvRoTr1T3tn3XQynQVxqAp2VfQ9qKhSwRS6LGGejrBPNHFajtPot4BtwvkKeHoc5Opxt8zBbTaz1Is1%2FZGaY%2Bnux699PjuYPEkQvEyHmbGKNnc8M9f0%2Fleit3IKW776rqUKMBpIrqmSZRaQimdW4u2q5u3SGMsutpnGLukIY8LJjle25EpHkmIMDe8HMMaYumzGcs91GHMp7bV0LbGyH192pOkszopuhvvGVOiHxMAhFeCSm%2BBumytohfOxnrmbrz3NZeOLF4oJb1SMdIOIBjk0p8IeMLueucQGOqUBm0BUAMdQf9%2F6jV6OnoiUTc503FsH0QM0GhThzuskQBEpLfPP4tpHQ9VJ7BuAJMF%2FYIfW4vQlC6vNOy9V6k4ocBMPazzy3nRCsUQfw2TQUL2zRN6lLp6RBC7LPQuzrEAF5aQ6%2BTf3A%2F74T7%2B6t2tR887mChdRj0g2qTMtyNe52Qelsr3KbGp3LhYUfJlPBEZKsesO3qg8Xih8EBMoyliviwnCXFLa&X-Amz-Signature=93c90e0543a9dfee627d03f1c76079ecd401b591ca2aaec2d1d17beb31287076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJNWYM6Q%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6kNwXRUwZfz37KEvJxVKG6jssI%2BMCIL3%2BeStG6boydAiEAxhJNUOMP7qDaZXT62LDJUUhnXbvo0Zg3KzYgQfp5j8wq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCZF8qqnDucF1D7NtSrcA6A8KW58ULfTNvMvv%2Bdfti4EIkTZNkJ0KDjsZGtjOrrWHg%2BZUfcNzD1iDCAbfQMJI7ewRsdhaDKtIFnzFOy31fCKafhP9eOk%2Bxjh7cpI6cxGoaAM7U%2F0TT174Vw16l5AkL8nUknnR%2B5xreZ04l7bNhEDdida%2FHlcp9rAeOznwtTRIwzRTiuEPhoNWsKY367mM%2F7QdLCe9EY7KyJGJuLauwR%2FrqXxBEwIXw9wxxMTR3A%2Fo%2B2ab4YSlCpIxaodSu%2B9DzePcQa4k75zUhLsWM%2FvNinIvI0Ze1kAh6PWcMYj5OsFpRcc6pGnayj9LoUF3%2FQVa7lpePmnVcbT2lGJzBD8%2BoZyYcvp92SKuXvRoTr1T3tn3XQynQVxqAp2VfQ9qKhSwRS6LGGejrBPNHFajtPot4BtwvkKeHoc5Opxt8zBbTaz1Is1%2FZGaY%2Bnux699PjuYPEkQvEyHmbGKNnc8M9f0%2Fleit3IKW776rqUKMBpIrqmSZRaQimdW4u2q5u3SGMsutpnGLukIY8LJjle25EpHkmIMDe8HMMaYumzGcs91GHMp7bV0LbGyH192pOkszopuhvvGVOiHxMAhFeCSm%2BBumytohfOxnrmbrz3NZeOLF4oJb1SMdIOIBjk0p8IeMLueucQGOqUBm0BUAMdQf9%2F6jV6OnoiUTc503FsH0QM0GhThzuskQBEpLfPP4tpHQ9VJ7BuAJMF%2FYIfW4vQlC6vNOy9V6k4ocBMPazzy3nRCsUQfw2TQUL2zRN6lLp6RBC7LPQuzrEAF5aQ6%2BTf3A%2F74T7%2B6t2tR887mChdRj0g2qTMtyNe52Qelsr3KbGp3LhYUfJlPBEZKsesO3qg8Xih8EBMoyliviwnCXFLa&X-Amz-Signature=0743df470f710181bb48d18f42f2ac419d059a6b9ab6873b4800a0335ea132c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJNWYM6Q%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6kNwXRUwZfz37KEvJxVKG6jssI%2BMCIL3%2BeStG6boydAiEAxhJNUOMP7qDaZXT62LDJUUhnXbvo0Zg3KzYgQfp5j8wq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCZF8qqnDucF1D7NtSrcA6A8KW58ULfTNvMvv%2Bdfti4EIkTZNkJ0KDjsZGtjOrrWHg%2BZUfcNzD1iDCAbfQMJI7ewRsdhaDKtIFnzFOy31fCKafhP9eOk%2Bxjh7cpI6cxGoaAM7U%2F0TT174Vw16l5AkL8nUknnR%2B5xreZ04l7bNhEDdida%2FHlcp9rAeOznwtTRIwzRTiuEPhoNWsKY367mM%2F7QdLCe9EY7KyJGJuLauwR%2FrqXxBEwIXw9wxxMTR3A%2Fo%2B2ab4YSlCpIxaodSu%2B9DzePcQa4k75zUhLsWM%2FvNinIvI0Ze1kAh6PWcMYj5OsFpRcc6pGnayj9LoUF3%2FQVa7lpePmnVcbT2lGJzBD8%2BoZyYcvp92SKuXvRoTr1T3tn3XQynQVxqAp2VfQ9qKhSwRS6LGGejrBPNHFajtPot4BtwvkKeHoc5Opxt8zBbTaz1Is1%2FZGaY%2Bnux699PjuYPEkQvEyHmbGKNnc8M9f0%2Fleit3IKW776rqUKMBpIrqmSZRaQimdW4u2q5u3SGMsutpnGLukIY8LJjle25EpHkmIMDe8HMMaYumzGcs91GHMp7bV0LbGyH192pOkszopuhvvGVOiHxMAhFeCSm%2BBumytohfOxnrmbrz3NZeOLF4oJb1SMdIOIBjk0p8IeMLueucQGOqUBm0BUAMdQf9%2F6jV6OnoiUTc503FsH0QM0GhThzuskQBEpLfPP4tpHQ9VJ7BuAJMF%2FYIfW4vQlC6vNOy9V6k4ocBMPazzy3nRCsUQfw2TQUL2zRN6lLp6RBC7LPQuzrEAF5aQ6%2BTf3A%2F74T7%2B6t2tR887mChdRj0g2qTMtyNe52Qelsr3KbGp3LhYUfJlPBEZKsesO3qg8Xih8EBMoyliviwnCXFLa&X-Amz-Signature=09e4deb22cc36618402acd1db1c7d7ab3dffb28986cdc6ffbb56ea9be573a4fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJNWYM6Q%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6kNwXRUwZfz37KEvJxVKG6jssI%2BMCIL3%2BeStG6boydAiEAxhJNUOMP7qDaZXT62LDJUUhnXbvo0Zg3KzYgQfp5j8wq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCZF8qqnDucF1D7NtSrcA6A8KW58ULfTNvMvv%2Bdfti4EIkTZNkJ0KDjsZGtjOrrWHg%2BZUfcNzD1iDCAbfQMJI7ewRsdhaDKtIFnzFOy31fCKafhP9eOk%2Bxjh7cpI6cxGoaAM7U%2F0TT174Vw16l5AkL8nUknnR%2B5xreZ04l7bNhEDdida%2FHlcp9rAeOznwtTRIwzRTiuEPhoNWsKY367mM%2F7QdLCe9EY7KyJGJuLauwR%2FrqXxBEwIXw9wxxMTR3A%2Fo%2B2ab4YSlCpIxaodSu%2B9DzePcQa4k75zUhLsWM%2FvNinIvI0Ze1kAh6PWcMYj5OsFpRcc6pGnayj9LoUF3%2FQVa7lpePmnVcbT2lGJzBD8%2BoZyYcvp92SKuXvRoTr1T3tn3XQynQVxqAp2VfQ9qKhSwRS6LGGejrBPNHFajtPot4BtwvkKeHoc5Opxt8zBbTaz1Is1%2FZGaY%2Bnux699PjuYPEkQvEyHmbGKNnc8M9f0%2Fleit3IKW776rqUKMBpIrqmSZRaQimdW4u2q5u3SGMsutpnGLukIY8LJjle25EpHkmIMDe8HMMaYumzGcs91GHMp7bV0LbGyH192pOkszopuhvvGVOiHxMAhFeCSm%2BBumytohfOxnrmbrz3NZeOLF4oJb1SMdIOIBjk0p8IeMLueucQGOqUBm0BUAMdQf9%2F6jV6OnoiUTc503FsH0QM0GhThzuskQBEpLfPP4tpHQ9VJ7BuAJMF%2FYIfW4vQlC6vNOy9V6k4ocBMPazzy3nRCsUQfw2TQUL2zRN6lLp6RBC7LPQuzrEAF5aQ6%2BTf3A%2F74T7%2B6t2tR887mChdRj0g2qTMtyNe52Qelsr3KbGp3LhYUfJlPBEZKsesO3qg8Xih8EBMoyliviwnCXFLa&X-Amz-Signature=2063beff63a4eb692bbf0ad291aad0e32dab1e523f4bc9d8994928b3254e506f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJNWYM6Q%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6kNwXRUwZfz37KEvJxVKG6jssI%2BMCIL3%2BeStG6boydAiEAxhJNUOMP7qDaZXT62LDJUUhnXbvo0Zg3KzYgQfp5j8wq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCZF8qqnDucF1D7NtSrcA6A8KW58ULfTNvMvv%2Bdfti4EIkTZNkJ0KDjsZGtjOrrWHg%2BZUfcNzD1iDCAbfQMJI7ewRsdhaDKtIFnzFOy31fCKafhP9eOk%2Bxjh7cpI6cxGoaAM7U%2F0TT174Vw16l5AkL8nUknnR%2B5xreZ04l7bNhEDdida%2FHlcp9rAeOznwtTRIwzRTiuEPhoNWsKY367mM%2F7QdLCe9EY7KyJGJuLauwR%2FrqXxBEwIXw9wxxMTR3A%2Fo%2B2ab4YSlCpIxaodSu%2B9DzePcQa4k75zUhLsWM%2FvNinIvI0Ze1kAh6PWcMYj5OsFpRcc6pGnayj9LoUF3%2FQVa7lpePmnVcbT2lGJzBD8%2BoZyYcvp92SKuXvRoTr1T3tn3XQynQVxqAp2VfQ9qKhSwRS6LGGejrBPNHFajtPot4BtwvkKeHoc5Opxt8zBbTaz1Is1%2FZGaY%2Bnux699PjuYPEkQvEyHmbGKNnc8M9f0%2Fleit3IKW776rqUKMBpIrqmSZRaQimdW4u2q5u3SGMsutpnGLukIY8LJjle25EpHkmIMDe8HMMaYumzGcs91GHMp7bV0LbGyH192pOkszopuhvvGVOiHxMAhFeCSm%2BBumytohfOxnrmbrz3NZeOLF4oJb1SMdIOIBjk0p8IeMLueucQGOqUBm0BUAMdQf9%2F6jV6OnoiUTc503FsH0QM0GhThzuskQBEpLfPP4tpHQ9VJ7BuAJMF%2FYIfW4vQlC6vNOy9V6k4ocBMPazzy3nRCsUQfw2TQUL2zRN6lLp6RBC7LPQuzrEAF5aQ6%2BTf3A%2F74T7%2B6t2tR887mChdRj0g2qTMtyNe52Qelsr3KbGp3LhYUfJlPBEZKsesO3qg8Xih8EBMoyliviwnCXFLa&X-Amz-Signature=1825ceaf87516f742f3cfdd2d110daa4d5e6dbc60c17620e956666304331781e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJNWYM6Q%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6kNwXRUwZfz37KEvJxVKG6jssI%2BMCIL3%2BeStG6boydAiEAxhJNUOMP7qDaZXT62LDJUUhnXbvo0Zg3KzYgQfp5j8wq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCZF8qqnDucF1D7NtSrcA6A8KW58ULfTNvMvv%2Bdfti4EIkTZNkJ0KDjsZGtjOrrWHg%2BZUfcNzD1iDCAbfQMJI7ewRsdhaDKtIFnzFOy31fCKafhP9eOk%2Bxjh7cpI6cxGoaAM7U%2F0TT174Vw16l5AkL8nUknnR%2B5xreZ04l7bNhEDdida%2FHlcp9rAeOznwtTRIwzRTiuEPhoNWsKY367mM%2F7QdLCe9EY7KyJGJuLauwR%2FrqXxBEwIXw9wxxMTR3A%2Fo%2B2ab4YSlCpIxaodSu%2B9DzePcQa4k75zUhLsWM%2FvNinIvI0Ze1kAh6PWcMYj5OsFpRcc6pGnayj9LoUF3%2FQVa7lpePmnVcbT2lGJzBD8%2BoZyYcvp92SKuXvRoTr1T3tn3XQynQVxqAp2VfQ9qKhSwRS6LGGejrBPNHFajtPot4BtwvkKeHoc5Opxt8zBbTaz1Is1%2FZGaY%2Bnux699PjuYPEkQvEyHmbGKNnc8M9f0%2Fleit3IKW776rqUKMBpIrqmSZRaQimdW4u2q5u3SGMsutpnGLukIY8LJjle25EpHkmIMDe8HMMaYumzGcs91GHMp7bV0LbGyH192pOkszopuhvvGVOiHxMAhFeCSm%2BBumytohfOxnrmbrz3NZeOLF4oJb1SMdIOIBjk0p8IeMLueucQGOqUBm0BUAMdQf9%2F6jV6OnoiUTc503FsH0QM0GhThzuskQBEpLfPP4tpHQ9VJ7BuAJMF%2FYIfW4vQlC6vNOy9V6k4ocBMPazzy3nRCsUQfw2TQUL2zRN6lLp6RBC7LPQuzrEAF5aQ6%2BTf3A%2F74T7%2B6t2tR887mChdRj0g2qTMtyNe52Qelsr3KbGp3LhYUfJlPBEZKsesO3qg8Xih8EBMoyliviwnCXFLa&X-Amz-Signature=02a6408543a7748061c1b30c47345fd9299bd52f2363a48190bead781ce56aa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJNWYM6Q%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6kNwXRUwZfz37KEvJxVKG6jssI%2BMCIL3%2BeStG6boydAiEAxhJNUOMP7qDaZXT62LDJUUhnXbvo0Zg3KzYgQfp5j8wq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCZF8qqnDucF1D7NtSrcA6A8KW58ULfTNvMvv%2Bdfti4EIkTZNkJ0KDjsZGtjOrrWHg%2BZUfcNzD1iDCAbfQMJI7ewRsdhaDKtIFnzFOy31fCKafhP9eOk%2Bxjh7cpI6cxGoaAM7U%2F0TT174Vw16l5AkL8nUknnR%2B5xreZ04l7bNhEDdida%2FHlcp9rAeOznwtTRIwzRTiuEPhoNWsKY367mM%2F7QdLCe9EY7KyJGJuLauwR%2FrqXxBEwIXw9wxxMTR3A%2Fo%2B2ab4YSlCpIxaodSu%2B9DzePcQa4k75zUhLsWM%2FvNinIvI0Ze1kAh6PWcMYj5OsFpRcc6pGnayj9LoUF3%2FQVa7lpePmnVcbT2lGJzBD8%2BoZyYcvp92SKuXvRoTr1T3tn3XQynQVxqAp2VfQ9qKhSwRS6LGGejrBPNHFajtPot4BtwvkKeHoc5Opxt8zBbTaz1Is1%2FZGaY%2Bnux699PjuYPEkQvEyHmbGKNnc8M9f0%2Fleit3IKW776rqUKMBpIrqmSZRaQimdW4u2q5u3SGMsutpnGLukIY8LJjle25EpHkmIMDe8HMMaYumzGcs91GHMp7bV0LbGyH192pOkszopuhvvGVOiHxMAhFeCSm%2BBumytohfOxnrmbrz3NZeOLF4oJb1SMdIOIBjk0p8IeMLueucQGOqUBm0BUAMdQf9%2F6jV6OnoiUTc503FsH0QM0GhThzuskQBEpLfPP4tpHQ9VJ7BuAJMF%2FYIfW4vQlC6vNOy9V6k4ocBMPazzy3nRCsUQfw2TQUL2zRN6lLp6RBC7LPQuzrEAF5aQ6%2BTf3A%2F74T7%2B6t2tR887mChdRj0g2qTMtyNe52Qelsr3KbGp3LhYUfJlPBEZKsesO3qg8Xih8EBMoyliviwnCXFLa&X-Amz-Signature=66eddc645428561608af064c2ebd7eb3a5bdf87085d51993f62ffe827f9fc4b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
