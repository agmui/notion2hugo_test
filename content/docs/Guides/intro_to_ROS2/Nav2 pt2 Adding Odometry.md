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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2ZJZJAZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FjdgSuQpHoe%2FLZWhClhgsjKL4%2Fwx5xeSBQwKFuIxHXAIhANi3Nt3PQBQEmIJf2gpL1FkGwPyMp6sAs2KnwqqdlCLIKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyr2%2BkztKA5XIglY2oq3AMxAHeF2Dm0M9%2B7h15jK95cMOj1ihG2ExBxSvl2OFd%2BjYX1U2lAaNkxCPCnnXItieNua2Cb8ZGRAmqqmztM42evnZqbR4EpEjXec%2FaMQ%2F65J9dyTJZITS8Wc8iJZVZ6WM4znq9p3dEdOYCtIcgYMhsXo2SY2UTUOyx5xj6smh2nZ4jZNZ7JY0xYH7NrE0EkEUhBFDquQgiTt2wNhkR24BKZZYPbVu9FCSiovrVoUEA8HZ1s8oeIRY27QzlfTWjL0qzM48aM7lnBWXYgM3eONjhGd%2FnfoPg%2BLaG0tJpT4oUSC25YP7Hzj4QjbqRStL4Hlf0rXI7evIsqYV1XTwrtKdv%2B4HLLti0vfuPBVDhL2W3ZlWXKdKFHt0Ds1w8X%2BWu7A1268QsprTd40YzNbpI88p%2BvY7PcrLXQl1kcSYGYIOxYXQ8C4AigdsAgc7JSOK9NU847%2BelQXcbtqE1dP67%2F5YKTloCPY%2F9Gflf4ewnGdinSciFDKLOnLc7XCwtxYRYeSZhyELxZ4k1hQY1kbRP%2F3yfLszACdYfMq85R%2BRzBNdtut2A9taxblPKZ64xLA0%2Fu4qscJbsK3Sq1RUbMOo5IXp9Vppurz9bTGqdIL%2BWpEDeFONKpEHV2EJSm0UDHmTCiwafEBjqkAQ7A5cP%2FYHeEER9qiYku%2BR6EZqjbY%2Bt0L8AhRsoSFYSdq55NKIFRGJpiSaUS%2BSG10oYKGYpIddADjo3siOwEPHIKiD7r1Rt2T7AFSVGM0ZWAcCDnqh4IsgkjIRx8W3KXqPgP86kpUYCTTKQhsjqf2bpUxH2bcU62rJwkfZjqn%2BvbDj2no7F0S0%2BRQRLDNNxXCDdPrnw5bw0PtzI9XnHq7%2Bjrr0Rt&X-Amz-Signature=d2c6d94f5f339c08f4cec50fa5c290b5abdd788273a806eab0a7540bde11bf91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2ZJZJAZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FjdgSuQpHoe%2FLZWhClhgsjKL4%2Fwx5xeSBQwKFuIxHXAIhANi3Nt3PQBQEmIJf2gpL1FkGwPyMp6sAs2KnwqqdlCLIKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyr2%2BkztKA5XIglY2oq3AMxAHeF2Dm0M9%2B7h15jK95cMOj1ihG2ExBxSvl2OFd%2BjYX1U2lAaNkxCPCnnXItieNua2Cb8ZGRAmqqmztM42evnZqbR4EpEjXec%2FaMQ%2F65J9dyTJZITS8Wc8iJZVZ6WM4znq9p3dEdOYCtIcgYMhsXo2SY2UTUOyx5xj6smh2nZ4jZNZ7JY0xYH7NrE0EkEUhBFDquQgiTt2wNhkR24BKZZYPbVu9FCSiovrVoUEA8HZ1s8oeIRY27QzlfTWjL0qzM48aM7lnBWXYgM3eONjhGd%2FnfoPg%2BLaG0tJpT4oUSC25YP7Hzj4QjbqRStL4Hlf0rXI7evIsqYV1XTwrtKdv%2B4HLLti0vfuPBVDhL2W3ZlWXKdKFHt0Ds1w8X%2BWu7A1268QsprTd40YzNbpI88p%2BvY7PcrLXQl1kcSYGYIOxYXQ8C4AigdsAgc7JSOK9NU847%2BelQXcbtqE1dP67%2F5YKTloCPY%2F9Gflf4ewnGdinSciFDKLOnLc7XCwtxYRYeSZhyELxZ4k1hQY1kbRP%2F3yfLszACdYfMq85R%2BRzBNdtut2A9taxblPKZ64xLA0%2Fu4qscJbsK3Sq1RUbMOo5IXp9Vppurz9bTGqdIL%2BWpEDeFONKpEHV2EJSm0UDHmTCiwafEBjqkAQ7A5cP%2FYHeEER9qiYku%2BR6EZqjbY%2Bt0L8AhRsoSFYSdq55NKIFRGJpiSaUS%2BSG10oYKGYpIddADjo3siOwEPHIKiD7r1Rt2T7AFSVGM0ZWAcCDnqh4IsgkjIRx8W3KXqPgP86kpUYCTTKQhsjqf2bpUxH2bcU62rJwkfZjqn%2BvbDj2no7F0S0%2BRQRLDNNxXCDdPrnw5bw0PtzI9XnHq7%2Bjrr0Rt&X-Amz-Signature=e6c3b1d5ff2603448913395a0fb392212f4a6cfecf7c3737757d40dae93647f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2ZJZJAZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FjdgSuQpHoe%2FLZWhClhgsjKL4%2Fwx5xeSBQwKFuIxHXAIhANi3Nt3PQBQEmIJf2gpL1FkGwPyMp6sAs2KnwqqdlCLIKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyr2%2BkztKA5XIglY2oq3AMxAHeF2Dm0M9%2B7h15jK95cMOj1ihG2ExBxSvl2OFd%2BjYX1U2lAaNkxCPCnnXItieNua2Cb8ZGRAmqqmztM42evnZqbR4EpEjXec%2FaMQ%2F65J9dyTJZITS8Wc8iJZVZ6WM4znq9p3dEdOYCtIcgYMhsXo2SY2UTUOyx5xj6smh2nZ4jZNZ7JY0xYH7NrE0EkEUhBFDquQgiTt2wNhkR24BKZZYPbVu9FCSiovrVoUEA8HZ1s8oeIRY27QzlfTWjL0qzM48aM7lnBWXYgM3eONjhGd%2FnfoPg%2BLaG0tJpT4oUSC25YP7Hzj4QjbqRStL4Hlf0rXI7evIsqYV1XTwrtKdv%2B4HLLti0vfuPBVDhL2W3ZlWXKdKFHt0Ds1w8X%2BWu7A1268QsprTd40YzNbpI88p%2BvY7PcrLXQl1kcSYGYIOxYXQ8C4AigdsAgc7JSOK9NU847%2BelQXcbtqE1dP67%2F5YKTloCPY%2F9Gflf4ewnGdinSciFDKLOnLc7XCwtxYRYeSZhyELxZ4k1hQY1kbRP%2F3yfLszACdYfMq85R%2BRzBNdtut2A9taxblPKZ64xLA0%2Fu4qscJbsK3Sq1RUbMOo5IXp9Vppurz9bTGqdIL%2BWpEDeFONKpEHV2EJSm0UDHmTCiwafEBjqkAQ7A5cP%2FYHeEER9qiYku%2BR6EZqjbY%2Bt0L8AhRsoSFYSdq55NKIFRGJpiSaUS%2BSG10oYKGYpIddADjo3siOwEPHIKiD7r1Rt2T7AFSVGM0ZWAcCDnqh4IsgkjIRx8W3KXqPgP86kpUYCTTKQhsjqf2bpUxH2bcU62rJwkfZjqn%2BvbDj2no7F0S0%2BRQRLDNNxXCDdPrnw5bw0PtzI9XnHq7%2Bjrr0Rt&X-Amz-Signature=3409e21bb51f4165d28795a5f5c4105754c8e78fbf8589585732981d07e99032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2ZJZJAZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FjdgSuQpHoe%2FLZWhClhgsjKL4%2Fwx5xeSBQwKFuIxHXAIhANi3Nt3PQBQEmIJf2gpL1FkGwPyMp6sAs2KnwqqdlCLIKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyr2%2BkztKA5XIglY2oq3AMxAHeF2Dm0M9%2B7h15jK95cMOj1ihG2ExBxSvl2OFd%2BjYX1U2lAaNkxCPCnnXItieNua2Cb8ZGRAmqqmztM42evnZqbR4EpEjXec%2FaMQ%2F65J9dyTJZITS8Wc8iJZVZ6WM4znq9p3dEdOYCtIcgYMhsXo2SY2UTUOyx5xj6smh2nZ4jZNZ7JY0xYH7NrE0EkEUhBFDquQgiTt2wNhkR24BKZZYPbVu9FCSiovrVoUEA8HZ1s8oeIRY27QzlfTWjL0qzM48aM7lnBWXYgM3eONjhGd%2FnfoPg%2BLaG0tJpT4oUSC25YP7Hzj4QjbqRStL4Hlf0rXI7evIsqYV1XTwrtKdv%2B4HLLti0vfuPBVDhL2W3ZlWXKdKFHt0Ds1w8X%2BWu7A1268QsprTd40YzNbpI88p%2BvY7PcrLXQl1kcSYGYIOxYXQ8C4AigdsAgc7JSOK9NU847%2BelQXcbtqE1dP67%2F5YKTloCPY%2F9Gflf4ewnGdinSciFDKLOnLc7XCwtxYRYeSZhyELxZ4k1hQY1kbRP%2F3yfLszACdYfMq85R%2BRzBNdtut2A9taxblPKZ64xLA0%2Fu4qscJbsK3Sq1RUbMOo5IXp9Vppurz9bTGqdIL%2BWpEDeFONKpEHV2EJSm0UDHmTCiwafEBjqkAQ7A5cP%2FYHeEER9qiYku%2BR6EZqjbY%2Bt0L8AhRsoSFYSdq55NKIFRGJpiSaUS%2BSG10oYKGYpIddADjo3siOwEPHIKiD7r1Rt2T7AFSVGM0ZWAcCDnqh4IsgkjIRx8W3KXqPgP86kpUYCTTKQhsjqf2bpUxH2bcU62rJwkfZjqn%2BvbDj2no7F0S0%2BRQRLDNNxXCDdPrnw5bw0PtzI9XnHq7%2Bjrr0Rt&X-Amz-Signature=850159387381d7934bec69d27bb8a7d569ce0406c1e84037857ff4a551940328&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2ZJZJAZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FjdgSuQpHoe%2FLZWhClhgsjKL4%2Fwx5xeSBQwKFuIxHXAIhANi3Nt3PQBQEmIJf2gpL1FkGwPyMp6sAs2KnwqqdlCLIKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyr2%2BkztKA5XIglY2oq3AMxAHeF2Dm0M9%2B7h15jK95cMOj1ihG2ExBxSvl2OFd%2BjYX1U2lAaNkxCPCnnXItieNua2Cb8ZGRAmqqmztM42evnZqbR4EpEjXec%2FaMQ%2F65J9dyTJZITS8Wc8iJZVZ6WM4znq9p3dEdOYCtIcgYMhsXo2SY2UTUOyx5xj6smh2nZ4jZNZ7JY0xYH7NrE0EkEUhBFDquQgiTt2wNhkR24BKZZYPbVu9FCSiovrVoUEA8HZ1s8oeIRY27QzlfTWjL0qzM48aM7lnBWXYgM3eONjhGd%2FnfoPg%2BLaG0tJpT4oUSC25YP7Hzj4QjbqRStL4Hlf0rXI7evIsqYV1XTwrtKdv%2B4HLLti0vfuPBVDhL2W3ZlWXKdKFHt0Ds1w8X%2BWu7A1268QsprTd40YzNbpI88p%2BvY7PcrLXQl1kcSYGYIOxYXQ8C4AigdsAgc7JSOK9NU847%2BelQXcbtqE1dP67%2F5YKTloCPY%2F9Gflf4ewnGdinSciFDKLOnLc7XCwtxYRYeSZhyELxZ4k1hQY1kbRP%2F3yfLszACdYfMq85R%2BRzBNdtut2A9taxblPKZ64xLA0%2Fu4qscJbsK3Sq1RUbMOo5IXp9Vppurz9bTGqdIL%2BWpEDeFONKpEHV2EJSm0UDHmTCiwafEBjqkAQ7A5cP%2FYHeEER9qiYku%2BR6EZqjbY%2Bt0L8AhRsoSFYSdq55NKIFRGJpiSaUS%2BSG10oYKGYpIddADjo3siOwEPHIKiD7r1Rt2T7AFSVGM0ZWAcCDnqh4IsgkjIRx8W3KXqPgP86kpUYCTTKQhsjqf2bpUxH2bcU62rJwkfZjqn%2BvbDj2no7F0S0%2BRQRLDNNxXCDdPrnw5bw0PtzI9XnHq7%2Bjrr0Rt&X-Amz-Signature=1c6939c321570fc6edc33cd6dd61b6146cdf266ad122a40bd9a046c7987fb5a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2ZJZJAZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FjdgSuQpHoe%2FLZWhClhgsjKL4%2Fwx5xeSBQwKFuIxHXAIhANi3Nt3PQBQEmIJf2gpL1FkGwPyMp6sAs2KnwqqdlCLIKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyr2%2BkztKA5XIglY2oq3AMxAHeF2Dm0M9%2B7h15jK95cMOj1ihG2ExBxSvl2OFd%2BjYX1U2lAaNkxCPCnnXItieNua2Cb8ZGRAmqqmztM42evnZqbR4EpEjXec%2FaMQ%2F65J9dyTJZITS8Wc8iJZVZ6WM4znq9p3dEdOYCtIcgYMhsXo2SY2UTUOyx5xj6smh2nZ4jZNZ7JY0xYH7NrE0EkEUhBFDquQgiTt2wNhkR24BKZZYPbVu9FCSiovrVoUEA8HZ1s8oeIRY27QzlfTWjL0qzM48aM7lnBWXYgM3eONjhGd%2FnfoPg%2BLaG0tJpT4oUSC25YP7Hzj4QjbqRStL4Hlf0rXI7evIsqYV1XTwrtKdv%2B4HLLti0vfuPBVDhL2W3ZlWXKdKFHt0Ds1w8X%2BWu7A1268QsprTd40YzNbpI88p%2BvY7PcrLXQl1kcSYGYIOxYXQ8C4AigdsAgc7JSOK9NU847%2BelQXcbtqE1dP67%2F5YKTloCPY%2F9Gflf4ewnGdinSciFDKLOnLc7XCwtxYRYeSZhyELxZ4k1hQY1kbRP%2F3yfLszACdYfMq85R%2BRzBNdtut2A9taxblPKZ64xLA0%2Fu4qscJbsK3Sq1RUbMOo5IXp9Vppurz9bTGqdIL%2BWpEDeFONKpEHV2EJSm0UDHmTCiwafEBjqkAQ7A5cP%2FYHeEER9qiYku%2BR6EZqjbY%2Bt0L8AhRsoSFYSdq55NKIFRGJpiSaUS%2BSG10oYKGYpIddADjo3siOwEPHIKiD7r1Rt2T7AFSVGM0ZWAcCDnqh4IsgkjIRx8W3KXqPgP86kpUYCTTKQhsjqf2bpUxH2bcU62rJwkfZjqn%2BvbDj2no7F0S0%2BRQRLDNNxXCDdPrnw5bw0PtzI9XnHq7%2Bjrr0Rt&X-Amz-Signature=de3beb6e89ed616a296eed1d8fa179961c7621b20dd666d3451fd04b7b9d1082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2ZJZJAZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FjdgSuQpHoe%2FLZWhClhgsjKL4%2Fwx5xeSBQwKFuIxHXAIhANi3Nt3PQBQEmIJf2gpL1FkGwPyMp6sAs2KnwqqdlCLIKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyr2%2BkztKA5XIglY2oq3AMxAHeF2Dm0M9%2B7h15jK95cMOj1ihG2ExBxSvl2OFd%2BjYX1U2lAaNkxCPCnnXItieNua2Cb8ZGRAmqqmztM42evnZqbR4EpEjXec%2FaMQ%2F65J9dyTJZITS8Wc8iJZVZ6WM4znq9p3dEdOYCtIcgYMhsXo2SY2UTUOyx5xj6smh2nZ4jZNZ7JY0xYH7NrE0EkEUhBFDquQgiTt2wNhkR24BKZZYPbVu9FCSiovrVoUEA8HZ1s8oeIRY27QzlfTWjL0qzM48aM7lnBWXYgM3eONjhGd%2FnfoPg%2BLaG0tJpT4oUSC25YP7Hzj4QjbqRStL4Hlf0rXI7evIsqYV1XTwrtKdv%2B4HLLti0vfuPBVDhL2W3ZlWXKdKFHt0Ds1w8X%2BWu7A1268QsprTd40YzNbpI88p%2BvY7PcrLXQl1kcSYGYIOxYXQ8C4AigdsAgc7JSOK9NU847%2BelQXcbtqE1dP67%2F5YKTloCPY%2F9Gflf4ewnGdinSciFDKLOnLc7XCwtxYRYeSZhyELxZ4k1hQY1kbRP%2F3yfLszACdYfMq85R%2BRzBNdtut2A9taxblPKZ64xLA0%2Fu4qscJbsK3Sq1RUbMOo5IXp9Vppurz9bTGqdIL%2BWpEDeFONKpEHV2EJSm0UDHmTCiwafEBjqkAQ7A5cP%2FYHeEER9qiYku%2BR6EZqjbY%2Bt0L8AhRsoSFYSdq55NKIFRGJpiSaUS%2BSG10oYKGYpIddADjo3siOwEPHIKiD7r1Rt2T7AFSVGM0ZWAcCDnqh4IsgkjIRx8W3KXqPgP86kpUYCTTKQhsjqf2bpUxH2bcU62rJwkfZjqn%2BvbDj2no7F0S0%2BRQRLDNNxXCDdPrnw5bw0PtzI9XnHq7%2Bjrr0Rt&X-Amz-Signature=dbea0dc7d9de8bde1c4f9bdbe36aca3ac02abc1d0dd8d1697853c4d113b82d18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2ZJZJAZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FjdgSuQpHoe%2FLZWhClhgsjKL4%2Fwx5xeSBQwKFuIxHXAIhANi3Nt3PQBQEmIJf2gpL1FkGwPyMp6sAs2KnwqqdlCLIKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyr2%2BkztKA5XIglY2oq3AMxAHeF2Dm0M9%2B7h15jK95cMOj1ihG2ExBxSvl2OFd%2BjYX1U2lAaNkxCPCnnXItieNua2Cb8ZGRAmqqmztM42evnZqbR4EpEjXec%2FaMQ%2F65J9dyTJZITS8Wc8iJZVZ6WM4znq9p3dEdOYCtIcgYMhsXo2SY2UTUOyx5xj6smh2nZ4jZNZ7JY0xYH7NrE0EkEUhBFDquQgiTt2wNhkR24BKZZYPbVu9FCSiovrVoUEA8HZ1s8oeIRY27QzlfTWjL0qzM48aM7lnBWXYgM3eONjhGd%2FnfoPg%2BLaG0tJpT4oUSC25YP7Hzj4QjbqRStL4Hlf0rXI7evIsqYV1XTwrtKdv%2B4HLLti0vfuPBVDhL2W3ZlWXKdKFHt0Ds1w8X%2BWu7A1268QsprTd40YzNbpI88p%2BvY7PcrLXQl1kcSYGYIOxYXQ8C4AigdsAgc7JSOK9NU847%2BelQXcbtqE1dP67%2F5YKTloCPY%2F9Gflf4ewnGdinSciFDKLOnLc7XCwtxYRYeSZhyELxZ4k1hQY1kbRP%2F3yfLszACdYfMq85R%2BRzBNdtut2A9taxblPKZ64xLA0%2Fu4qscJbsK3Sq1RUbMOo5IXp9Vppurz9bTGqdIL%2BWpEDeFONKpEHV2EJSm0UDHmTCiwafEBjqkAQ7A5cP%2FYHeEER9qiYku%2BR6EZqjbY%2Bt0L8AhRsoSFYSdq55NKIFRGJpiSaUS%2BSG10oYKGYpIddADjo3siOwEPHIKiD7r1Rt2T7AFSVGM0ZWAcCDnqh4IsgkjIRx8W3KXqPgP86kpUYCTTKQhsjqf2bpUxH2bcU62rJwkfZjqn%2BvbDj2no7F0S0%2BRQRLDNNxXCDdPrnw5bw0PtzI9XnHq7%2Bjrr0Rt&X-Amz-Signature=75faa170726f76da3ba7d4e7633bcefc236caf1a1cc67dd1998ebc81e99017c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2ZJZJAZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FjdgSuQpHoe%2FLZWhClhgsjKL4%2Fwx5xeSBQwKFuIxHXAIhANi3Nt3PQBQEmIJf2gpL1FkGwPyMp6sAs2KnwqqdlCLIKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyr2%2BkztKA5XIglY2oq3AMxAHeF2Dm0M9%2B7h15jK95cMOj1ihG2ExBxSvl2OFd%2BjYX1U2lAaNkxCPCnnXItieNua2Cb8ZGRAmqqmztM42evnZqbR4EpEjXec%2FaMQ%2F65J9dyTJZITS8Wc8iJZVZ6WM4znq9p3dEdOYCtIcgYMhsXo2SY2UTUOyx5xj6smh2nZ4jZNZ7JY0xYH7NrE0EkEUhBFDquQgiTt2wNhkR24BKZZYPbVu9FCSiovrVoUEA8HZ1s8oeIRY27QzlfTWjL0qzM48aM7lnBWXYgM3eONjhGd%2FnfoPg%2BLaG0tJpT4oUSC25YP7Hzj4QjbqRStL4Hlf0rXI7evIsqYV1XTwrtKdv%2B4HLLti0vfuPBVDhL2W3ZlWXKdKFHt0Ds1w8X%2BWu7A1268QsprTd40YzNbpI88p%2BvY7PcrLXQl1kcSYGYIOxYXQ8C4AigdsAgc7JSOK9NU847%2BelQXcbtqE1dP67%2F5YKTloCPY%2F9Gflf4ewnGdinSciFDKLOnLc7XCwtxYRYeSZhyELxZ4k1hQY1kbRP%2F3yfLszACdYfMq85R%2BRzBNdtut2A9taxblPKZ64xLA0%2Fu4qscJbsK3Sq1RUbMOo5IXp9Vppurz9bTGqdIL%2BWpEDeFONKpEHV2EJSm0UDHmTCiwafEBjqkAQ7A5cP%2FYHeEER9qiYku%2BR6EZqjbY%2Bt0L8AhRsoSFYSdq55NKIFRGJpiSaUS%2BSG10oYKGYpIddADjo3siOwEPHIKiD7r1Rt2T7AFSVGM0ZWAcCDnqh4IsgkjIRx8W3KXqPgP86kpUYCTTKQhsjqf2bpUxH2bcU62rJwkfZjqn%2BvbDj2no7F0S0%2BRQRLDNNxXCDdPrnw5bw0PtzI9XnHq7%2Bjrr0Rt&X-Amz-Signature=23550ed36b6cb90fa9bcc0cc5768e68e85c38247fdd92b8b706ce3ca19f606ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EID7GMW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLK9ob4AoNjUfoE22tZcm7Qs24rSQLuHzIK9iUIzDVpAIhAMhaaNZD0E22%2F%2FRpbB9Vj8v94AQ3vdWUn2ROgF7D%2FsEDKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdXpCHByyH6a9H4toq3AMplEHkmAjCbF3LyH4CNO5ohoyDkGbLO%2Bq07lYIx2ACgHaCM3PMZsUwvc1keJn6o3pBlzFZVjT1adrdY9W3iydqF7Po1b%2BlCfXtgYlIfjSSk%2F69GQYKhGdwV9FiIJFvEv1ItCgFGBuOHMBZYJrpJ7a4YH7cazjlxhPQPwv7XJ%2FuqLIhOvTm5SmFVb%2BKkNDsOaMsRVeQ795zZa95hZm6knigk6%2FJ%2FzIQGg%2B1b2%2FtZCs31wc0d4DraiJSStRuWQGAJ5vmc3lKu71oHBIN5wvajZJqZINaHo25lu%2BwWfTnet9kdBnP7Dj2n2Ut1w%2BQnKWedhwjJKuF3Vs1dYxRUeyY0LUqn948sZQ1nUbBOmxbJY3T%2F7nQSOvcmLUM78BdwaRk6VG5NYsJElgSCkFFqy5TTCzv%2Bsy%2BE%2B48%2FFf60KP3QtHmAGu6YAKBw2ZNsK1QxRbmWDEFFWcXe25BMv3HqQm%2BzeF%2BxNsww1zsJE8nCfXNeAKD8q4ol%2B5bZgqzu5AOB4vfo6N1LrxAHeCGU9LZedPZZEiRhaZrfv9d%2Fljs85yPGO84FWauzFYwy0h8uvbusUfi5qL2lihDDx4fXouAHc0Ky5t2QulJv%2BNXn8Dd00%2F6m%2FAZ7%2B794uGT5i7P22AgNzDfwKfEBjqkAb2mfMVaWkZaexp%2FkX%2B1dw1HgZF%2BMNx%2FvCcX%2B53SKVeFQXIUHwlm5UnwCCHbmVjknBBDh7VnEcIxPAIUvlnj2roaGsdr85%2BbWvwIxOe4HvsoaQj4SAmiIMLCrjyhdtw6n1SljwF2S1lrM5SxYQ0P8hQSvA08jv7kARBlwyMoePnzzBrI7o8osnnvS1DGSP%2B%2FiQr0uM%2FUC9cvdF8rELdhQf3mm7kZ&X-Amz-Signature=84bb719361e63ed89c98cd1e3dafeb7bf81b0ef4263f886806d80d804284d3b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2ZJZJAZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FjdgSuQpHoe%2FLZWhClhgsjKL4%2Fwx5xeSBQwKFuIxHXAIhANi3Nt3PQBQEmIJf2gpL1FkGwPyMp6sAs2KnwqqdlCLIKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyr2%2BkztKA5XIglY2oq3AMxAHeF2Dm0M9%2B7h15jK95cMOj1ihG2ExBxSvl2OFd%2BjYX1U2lAaNkxCPCnnXItieNua2Cb8ZGRAmqqmztM42evnZqbR4EpEjXec%2FaMQ%2F65J9dyTJZITS8Wc8iJZVZ6WM4znq9p3dEdOYCtIcgYMhsXo2SY2UTUOyx5xj6smh2nZ4jZNZ7JY0xYH7NrE0EkEUhBFDquQgiTt2wNhkR24BKZZYPbVu9FCSiovrVoUEA8HZ1s8oeIRY27QzlfTWjL0qzM48aM7lnBWXYgM3eONjhGd%2FnfoPg%2BLaG0tJpT4oUSC25YP7Hzj4QjbqRStL4Hlf0rXI7evIsqYV1XTwrtKdv%2B4HLLti0vfuPBVDhL2W3ZlWXKdKFHt0Ds1w8X%2BWu7A1268QsprTd40YzNbpI88p%2BvY7PcrLXQl1kcSYGYIOxYXQ8C4AigdsAgc7JSOK9NU847%2BelQXcbtqE1dP67%2F5YKTloCPY%2F9Gflf4ewnGdinSciFDKLOnLc7XCwtxYRYeSZhyELxZ4k1hQY1kbRP%2F3yfLszACdYfMq85R%2BRzBNdtut2A9taxblPKZ64xLA0%2Fu4qscJbsK3Sq1RUbMOo5IXp9Vppurz9bTGqdIL%2BWpEDeFONKpEHV2EJSm0UDHmTCiwafEBjqkAQ7A5cP%2FYHeEER9qiYku%2BR6EZqjbY%2Bt0L8AhRsoSFYSdq55NKIFRGJpiSaUS%2BSG10oYKGYpIddADjo3siOwEPHIKiD7r1Rt2T7AFSVGM0ZWAcCDnqh4IsgkjIRx8W3KXqPgP86kpUYCTTKQhsjqf2bpUxH2bcU62rJwkfZjqn%2BvbDj2no7F0S0%2BRQRLDNNxXCDdPrnw5bw0PtzI9XnHq7%2Bjrr0Rt&X-Amz-Signature=1ea3f1bf30eaecfa796a68ccdce47ac1e05835a3dc5fe15694cbad47244290f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UPY4KK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAo3mac8AHybpCtqw3XptcFjPPD9olk103zYDlgvRcELAiEAmeWeSy0Xxm6pckA9imD8UsdB68SPoR2CVmakkLyCPzwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPxBq3UOba4Ots%2BlyrcA%2BsBMqEVdkA5ZAj9XyXgirorH7HLvrwuJjPJHC23yVYDyC%2FXH7ylVyHyyoXjxIwPXOjTU%2FF5%2B4l%2F2qaoiWVuS5wvL474oEO0rfvDX8jD71dPbEgJ69FiYWUbwedqpQLLKHHMH15KBwQVljdiJYwKBNFQj4q45NG5AVtuCEt%2F6qM%2BPoEwuykMbl%2FcNVEARoZc%2FXqql8m3vuUh0pyUvtsTUlIvKwqTDzAolhUb%2BxlnPXiSEY0MlquvaETgLVU2tU3T0wv7uqnanWREnb7Ozk9wntq61PUWF1NHc37moVHmgYZcGNwg83vrGf3FMHTWCnCAVAgqB5esLwVqqjXeTnpA%2B7eCi%2FZDd6V7%2Bw14wXgVkj2p4LUhqFdNQUyglpBgm4SkbfQtxL7RwfuXouLUH8mfOtNvZRscpkVpjHOyq2goumYTIsFXh%2BbsTKuhZC%2FUOgXimIBaHrVMByBCbEN1B6mQcIYMEnGlmYC%2Fv%2FsktdQOMhno1pZDs7fAMHGtmsNQkD8lYvjK89hQO3sD3lyMk3r8Q9Q5G9u%2B2qUpnjVPBBt%2B3rN7eJUzg%2B%2FE47VvfouC0NYkxnlV8IcyddTd3OkxNB9KkHwkvRezVvrxc2cCrusJiiZfb7hJSfsTGMXrrwd4MJ3Ap8QGOqUBRl7l25RgV5jyHZEOpdy34JEJ0cjk2Fta1XVQuMfGbFyfoSZdIgiYQUOhrztw4gD5UuN3AcwIUehaAv58MPE78TD1CiPyv5WOxRHF9%2BJFWafmejCRfQOH1aq8baVVLsTGYrEa9%2FkLTqKSmcXNv4a5M68C7XHP5VBr6aBTpPAFq%2Blzvu7T5%2FgcTtMFKY2BrG%2B%2BqrpVly3xIgxOtZxD26dqiF5Iwohx&X-Amz-Signature=0a667b6ad1ebcf75c49b899076427db35799396455743c4f7179521da9bb2bbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UPY4KK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAo3mac8AHybpCtqw3XptcFjPPD9olk103zYDlgvRcELAiEAmeWeSy0Xxm6pckA9imD8UsdB68SPoR2CVmakkLyCPzwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPxBq3UOba4Ots%2BlyrcA%2BsBMqEVdkA5ZAj9XyXgirorH7HLvrwuJjPJHC23yVYDyC%2FXH7ylVyHyyoXjxIwPXOjTU%2FF5%2B4l%2F2qaoiWVuS5wvL474oEO0rfvDX8jD71dPbEgJ69FiYWUbwedqpQLLKHHMH15KBwQVljdiJYwKBNFQj4q45NG5AVtuCEt%2F6qM%2BPoEwuykMbl%2FcNVEARoZc%2FXqql8m3vuUh0pyUvtsTUlIvKwqTDzAolhUb%2BxlnPXiSEY0MlquvaETgLVU2tU3T0wv7uqnanWREnb7Ozk9wntq61PUWF1NHc37moVHmgYZcGNwg83vrGf3FMHTWCnCAVAgqB5esLwVqqjXeTnpA%2B7eCi%2FZDd6V7%2Bw14wXgVkj2p4LUhqFdNQUyglpBgm4SkbfQtxL7RwfuXouLUH8mfOtNvZRscpkVpjHOyq2goumYTIsFXh%2BbsTKuhZC%2FUOgXimIBaHrVMByBCbEN1B6mQcIYMEnGlmYC%2Fv%2FsktdQOMhno1pZDs7fAMHGtmsNQkD8lYvjK89hQO3sD3lyMk3r8Q9Q5G9u%2B2qUpnjVPBBt%2B3rN7eJUzg%2B%2FE47VvfouC0NYkxnlV8IcyddTd3OkxNB9KkHwkvRezVvrxc2cCrusJiiZfb7hJSfsTGMXrrwd4MJ3Ap8QGOqUBRl7l25RgV5jyHZEOpdy34JEJ0cjk2Fta1XVQuMfGbFyfoSZdIgiYQUOhrztw4gD5UuN3AcwIUehaAv58MPE78TD1CiPyv5WOxRHF9%2BJFWafmejCRfQOH1aq8baVVLsTGYrEa9%2FkLTqKSmcXNv4a5M68C7XHP5VBr6aBTpPAFq%2Blzvu7T5%2FgcTtMFKY2BrG%2B%2BqrpVly3xIgxOtZxD26dqiF5Iwohx&X-Amz-Signature=31aaee8fabc3e15c14df7089fcf139c549ca2e1580b06b22c35577a4223bf7d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UPY4KK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAo3mac8AHybpCtqw3XptcFjPPD9olk103zYDlgvRcELAiEAmeWeSy0Xxm6pckA9imD8UsdB68SPoR2CVmakkLyCPzwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPxBq3UOba4Ots%2BlyrcA%2BsBMqEVdkA5ZAj9XyXgirorH7HLvrwuJjPJHC23yVYDyC%2FXH7ylVyHyyoXjxIwPXOjTU%2FF5%2B4l%2F2qaoiWVuS5wvL474oEO0rfvDX8jD71dPbEgJ69FiYWUbwedqpQLLKHHMH15KBwQVljdiJYwKBNFQj4q45NG5AVtuCEt%2F6qM%2BPoEwuykMbl%2FcNVEARoZc%2FXqql8m3vuUh0pyUvtsTUlIvKwqTDzAolhUb%2BxlnPXiSEY0MlquvaETgLVU2tU3T0wv7uqnanWREnb7Ozk9wntq61PUWF1NHc37moVHmgYZcGNwg83vrGf3FMHTWCnCAVAgqB5esLwVqqjXeTnpA%2B7eCi%2FZDd6V7%2Bw14wXgVkj2p4LUhqFdNQUyglpBgm4SkbfQtxL7RwfuXouLUH8mfOtNvZRscpkVpjHOyq2goumYTIsFXh%2BbsTKuhZC%2FUOgXimIBaHrVMByBCbEN1B6mQcIYMEnGlmYC%2Fv%2FsktdQOMhno1pZDs7fAMHGtmsNQkD8lYvjK89hQO3sD3lyMk3r8Q9Q5G9u%2B2qUpnjVPBBt%2B3rN7eJUzg%2B%2FE47VvfouC0NYkxnlV8IcyddTd3OkxNB9KkHwkvRezVvrxc2cCrusJiiZfb7hJSfsTGMXrrwd4MJ3Ap8QGOqUBRl7l25RgV5jyHZEOpdy34JEJ0cjk2Fta1XVQuMfGbFyfoSZdIgiYQUOhrztw4gD5UuN3AcwIUehaAv58MPE78TD1CiPyv5WOxRHF9%2BJFWafmejCRfQOH1aq8baVVLsTGYrEa9%2FkLTqKSmcXNv4a5M68C7XHP5VBr6aBTpPAFq%2Blzvu7T5%2FgcTtMFKY2BrG%2B%2BqrpVly3xIgxOtZxD26dqiF5Iwohx&X-Amz-Signature=e6bd8474db5e67a879383f0dde420de12a6dc3730158a80639f63b2546254446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UPY4KK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAo3mac8AHybpCtqw3XptcFjPPD9olk103zYDlgvRcELAiEAmeWeSy0Xxm6pckA9imD8UsdB68SPoR2CVmakkLyCPzwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPxBq3UOba4Ots%2BlyrcA%2BsBMqEVdkA5ZAj9XyXgirorH7HLvrwuJjPJHC23yVYDyC%2FXH7ylVyHyyoXjxIwPXOjTU%2FF5%2B4l%2F2qaoiWVuS5wvL474oEO0rfvDX8jD71dPbEgJ69FiYWUbwedqpQLLKHHMH15KBwQVljdiJYwKBNFQj4q45NG5AVtuCEt%2F6qM%2BPoEwuykMbl%2FcNVEARoZc%2FXqql8m3vuUh0pyUvtsTUlIvKwqTDzAolhUb%2BxlnPXiSEY0MlquvaETgLVU2tU3T0wv7uqnanWREnb7Ozk9wntq61PUWF1NHc37moVHmgYZcGNwg83vrGf3FMHTWCnCAVAgqB5esLwVqqjXeTnpA%2B7eCi%2FZDd6V7%2Bw14wXgVkj2p4LUhqFdNQUyglpBgm4SkbfQtxL7RwfuXouLUH8mfOtNvZRscpkVpjHOyq2goumYTIsFXh%2BbsTKuhZC%2FUOgXimIBaHrVMByBCbEN1B6mQcIYMEnGlmYC%2Fv%2FsktdQOMhno1pZDs7fAMHGtmsNQkD8lYvjK89hQO3sD3lyMk3r8Q9Q5G9u%2B2qUpnjVPBBt%2B3rN7eJUzg%2B%2FE47VvfouC0NYkxnlV8IcyddTd3OkxNB9KkHwkvRezVvrxc2cCrusJiiZfb7hJSfsTGMXrrwd4MJ3Ap8QGOqUBRl7l25RgV5jyHZEOpdy34JEJ0cjk2Fta1XVQuMfGbFyfoSZdIgiYQUOhrztw4gD5UuN3AcwIUehaAv58MPE78TD1CiPyv5WOxRHF9%2BJFWafmejCRfQOH1aq8baVVLsTGYrEa9%2FkLTqKSmcXNv4a5M68C7XHP5VBr6aBTpPAFq%2Blzvu7T5%2FgcTtMFKY2BrG%2B%2BqrpVly3xIgxOtZxD26dqiF5Iwohx&X-Amz-Signature=4695fbdcb6e448e6e18fd07c4ac2c3a65bc8b4c72915c4330d58d759bd95db83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UPY4KK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAo3mac8AHybpCtqw3XptcFjPPD9olk103zYDlgvRcELAiEAmeWeSy0Xxm6pckA9imD8UsdB68SPoR2CVmakkLyCPzwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPxBq3UOba4Ots%2BlyrcA%2BsBMqEVdkA5ZAj9XyXgirorH7HLvrwuJjPJHC23yVYDyC%2FXH7ylVyHyyoXjxIwPXOjTU%2FF5%2B4l%2F2qaoiWVuS5wvL474oEO0rfvDX8jD71dPbEgJ69FiYWUbwedqpQLLKHHMH15KBwQVljdiJYwKBNFQj4q45NG5AVtuCEt%2F6qM%2BPoEwuykMbl%2FcNVEARoZc%2FXqql8m3vuUh0pyUvtsTUlIvKwqTDzAolhUb%2BxlnPXiSEY0MlquvaETgLVU2tU3T0wv7uqnanWREnb7Ozk9wntq61PUWF1NHc37moVHmgYZcGNwg83vrGf3FMHTWCnCAVAgqB5esLwVqqjXeTnpA%2B7eCi%2FZDd6V7%2Bw14wXgVkj2p4LUhqFdNQUyglpBgm4SkbfQtxL7RwfuXouLUH8mfOtNvZRscpkVpjHOyq2goumYTIsFXh%2BbsTKuhZC%2FUOgXimIBaHrVMByBCbEN1B6mQcIYMEnGlmYC%2Fv%2FsktdQOMhno1pZDs7fAMHGtmsNQkD8lYvjK89hQO3sD3lyMk3r8Q9Q5G9u%2B2qUpnjVPBBt%2B3rN7eJUzg%2B%2FE47VvfouC0NYkxnlV8IcyddTd3OkxNB9KkHwkvRezVvrxc2cCrusJiiZfb7hJSfsTGMXrrwd4MJ3Ap8QGOqUBRl7l25RgV5jyHZEOpdy34JEJ0cjk2Fta1XVQuMfGbFyfoSZdIgiYQUOhrztw4gD5UuN3AcwIUehaAv58MPE78TD1CiPyv5WOxRHF9%2BJFWafmejCRfQOH1aq8baVVLsTGYrEa9%2FkLTqKSmcXNv4a5M68C7XHP5VBr6aBTpPAFq%2Blzvu7T5%2FgcTtMFKY2BrG%2B%2BqrpVly3xIgxOtZxD26dqiF5Iwohx&X-Amz-Signature=00f92b09889c97086d549e599939b6a6d185b4e58176d49a4589b3a27de07d21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UPY4KK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAo3mac8AHybpCtqw3XptcFjPPD9olk103zYDlgvRcELAiEAmeWeSy0Xxm6pckA9imD8UsdB68SPoR2CVmakkLyCPzwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPxBq3UOba4Ots%2BlyrcA%2BsBMqEVdkA5ZAj9XyXgirorH7HLvrwuJjPJHC23yVYDyC%2FXH7ylVyHyyoXjxIwPXOjTU%2FF5%2B4l%2F2qaoiWVuS5wvL474oEO0rfvDX8jD71dPbEgJ69FiYWUbwedqpQLLKHHMH15KBwQVljdiJYwKBNFQj4q45NG5AVtuCEt%2F6qM%2BPoEwuykMbl%2FcNVEARoZc%2FXqql8m3vuUh0pyUvtsTUlIvKwqTDzAolhUb%2BxlnPXiSEY0MlquvaETgLVU2tU3T0wv7uqnanWREnb7Ozk9wntq61PUWF1NHc37moVHmgYZcGNwg83vrGf3FMHTWCnCAVAgqB5esLwVqqjXeTnpA%2B7eCi%2FZDd6V7%2Bw14wXgVkj2p4LUhqFdNQUyglpBgm4SkbfQtxL7RwfuXouLUH8mfOtNvZRscpkVpjHOyq2goumYTIsFXh%2BbsTKuhZC%2FUOgXimIBaHrVMByBCbEN1B6mQcIYMEnGlmYC%2Fv%2FsktdQOMhno1pZDs7fAMHGtmsNQkD8lYvjK89hQO3sD3lyMk3r8Q9Q5G9u%2B2qUpnjVPBBt%2B3rN7eJUzg%2B%2FE47VvfouC0NYkxnlV8IcyddTd3OkxNB9KkHwkvRezVvrxc2cCrusJiiZfb7hJSfsTGMXrrwd4MJ3Ap8QGOqUBRl7l25RgV5jyHZEOpdy34JEJ0cjk2Fta1XVQuMfGbFyfoSZdIgiYQUOhrztw4gD5UuN3AcwIUehaAv58MPE78TD1CiPyv5WOxRHF9%2BJFWafmejCRfQOH1aq8baVVLsTGYrEa9%2FkLTqKSmcXNv4a5M68C7XHP5VBr6aBTpPAFq%2Blzvu7T5%2FgcTtMFKY2BrG%2B%2BqrpVly3xIgxOtZxD26dqiF5Iwohx&X-Amz-Signature=de76ec0c8dd992122f4eb7333ef383e13e3d46d13b4b76217616b4eef75aec31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UPY4KK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAo3mac8AHybpCtqw3XptcFjPPD9olk103zYDlgvRcELAiEAmeWeSy0Xxm6pckA9imD8UsdB68SPoR2CVmakkLyCPzwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPxBq3UOba4Ots%2BlyrcA%2BsBMqEVdkA5ZAj9XyXgirorH7HLvrwuJjPJHC23yVYDyC%2FXH7ylVyHyyoXjxIwPXOjTU%2FF5%2B4l%2F2qaoiWVuS5wvL474oEO0rfvDX8jD71dPbEgJ69FiYWUbwedqpQLLKHHMH15KBwQVljdiJYwKBNFQj4q45NG5AVtuCEt%2F6qM%2BPoEwuykMbl%2FcNVEARoZc%2FXqql8m3vuUh0pyUvtsTUlIvKwqTDzAolhUb%2BxlnPXiSEY0MlquvaETgLVU2tU3T0wv7uqnanWREnb7Ozk9wntq61PUWF1NHc37moVHmgYZcGNwg83vrGf3FMHTWCnCAVAgqB5esLwVqqjXeTnpA%2B7eCi%2FZDd6V7%2Bw14wXgVkj2p4LUhqFdNQUyglpBgm4SkbfQtxL7RwfuXouLUH8mfOtNvZRscpkVpjHOyq2goumYTIsFXh%2BbsTKuhZC%2FUOgXimIBaHrVMByBCbEN1B6mQcIYMEnGlmYC%2Fv%2FsktdQOMhno1pZDs7fAMHGtmsNQkD8lYvjK89hQO3sD3lyMk3r8Q9Q5G9u%2B2qUpnjVPBBt%2B3rN7eJUzg%2B%2FE47VvfouC0NYkxnlV8IcyddTd3OkxNB9KkHwkvRezVvrxc2cCrusJiiZfb7hJSfsTGMXrrwd4MJ3Ap8QGOqUBRl7l25RgV5jyHZEOpdy34JEJ0cjk2Fta1XVQuMfGbFyfoSZdIgiYQUOhrztw4gD5UuN3AcwIUehaAv58MPE78TD1CiPyv5WOxRHF9%2BJFWafmejCRfQOH1aq8baVVLsTGYrEa9%2FkLTqKSmcXNv4a5M68C7XHP5VBr6aBTpPAFq%2Blzvu7T5%2FgcTtMFKY2BrG%2B%2BqrpVly3xIgxOtZxD26dqiF5Iwohx&X-Amz-Signature=367d08f4cf68b283814d5f971867e3add2e89bb408073fb97c936548a55a1f3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UPY4KK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAo3mac8AHybpCtqw3XptcFjPPD9olk103zYDlgvRcELAiEAmeWeSy0Xxm6pckA9imD8UsdB68SPoR2CVmakkLyCPzwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPxBq3UOba4Ots%2BlyrcA%2BsBMqEVdkA5ZAj9XyXgirorH7HLvrwuJjPJHC23yVYDyC%2FXH7ylVyHyyoXjxIwPXOjTU%2FF5%2B4l%2F2qaoiWVuS5wvL474oEO0rfvDX8jD71dPbEgJ69FiYWUbwedqpQLLKHHMH15KBwQVljdiJYwKBNFQj4q45NG5AVtuCEt%2F6qM%2BPoEwuykMbl%2FcNVEARoZc%2FXqql8m3vuUh0pyUvtsTUlIvKwqTDzAolhUb%2BxlnPXiSEY0MlquvaETgLVU2tU3T0wv7uqnanWREnb7Ozk9wntq61PUWF1NHc37moVHmgYZcGNwg83vrGf3FMHTWCnCAVAgqB5esLwVqqjXeTnpA%2B7eCi%2FZDd6V7%2Bw14wXgVkj2p4LUhqFdNQUyglpBgm4SkbfQtxL7RwfuXouLUH8mfOtNvZRscpkVpjHOyq2goumYTIsFXh%2BbsTKuhZC%2FUOgXimIBaHrVMByBCbEN1B6mQcIYMEnGlmYC%2Fv%2FsktdQOMhno1pZDs7fAMHGtmsNQkD8lYvjK89hQO3sD3lyMk3r8Q9Q5G9u%2B2qUpnjVPBBt%2B3rN7eJUzg%2B%2FE47VvfouC0NYkxnlV8IcyddTd3OkxNB9KkHwkvRezVvrxc2cCrusJiiZfb7hJSfsTGMXrrwd4MJ3Ap8QGOqUBRl7l25RgV5jyHZEOpdy34JEJ0cjk2Fta1XVQuMfGbFyfoSZdIgiYQUOhrztw4gD5UuN3AcwIUehaAv58MPE78TD1CiPyv5WOxRHF9%2BJFWafmejCRfQOH1aq8baVVLsTGYrEa9%2FkLTqKSmcXNv4a5M68C7XHP5VBr6aBTpPAFq%2Blzvu7T5%2FgcTtMFKY2BrG%2B%2BqrpVly3xIgxOtZxD26dqiF5Iwohx&X-Amz-Signature=15c3c68e057dcfe0c2b9c4221ba0e045466a2efb60bb2144b730f8c3f8244606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
