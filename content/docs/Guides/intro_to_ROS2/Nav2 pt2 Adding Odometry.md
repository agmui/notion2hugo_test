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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVMYU7KH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ0xl9IHDvX4PZn9pOXK8aHue9%2BIMWXc7IG59PnjPsoAiEAiIcWz28XECLtJaWP9BkD8O3qqhLBpp69DT1mLIPpaLcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgztkRisrp6%2F2wYkCrcA%2BWxQPtUQkjgWv6QTRIQPIT6tPxGMmNpD3%2FF4QVDLKnegM4royGsJOpAYh8ome6xbEMNvTskL%2BoUnVjimtNG87JPCnsv9%2BZAHNz6BMFMNXwCHZBQLbYqJErBnaZCUBb9KRz4riz324rJA1USS3kjuegDU2O2FAVwAHSHbnIPXXn5PJJIpQfQH1Xp0CZUot2GlamWYC6X8DIvKCd0VjhYxAn%2BXQckPw5j3u4SMKgynMmf%2Bk1F2ob8F5%2F7kM2jqvtJ9F%2BURvAeh0mc%2BNChTEK%2Br05%2FZ1rgzTA1R%2BrrOJm7SgCOW76A6hwLUkf9YQd7QOdT0wKtGjYiZpGPpnNJLMwec4I2zIzG8VNrgRQVDEF%2B7klUVduikaaOBq8XwFXdKtH5Kn%2BbpCMvwQNPsgaepCSgA1f5jGBPAMNRsF9hmNQYh9L3JpbfLJedZWBi%2BZz7DUfcgjlukED0iskJ%2FSbb6AFrZlRKKwppV112w8AqExIBk5m3a%2FjKzjLyS7xWgRsgbh53xi3HmF5mhAQhB%2B2U0dhNa%2FhsPS1qYI6Eb55fW3RG4%2BK3aiyIng8nXNCHMnGUP%2F%2FF%2B%2Fplkg%2FOwGiJWzlhZh64YFSecT6q2jfzcyX5b%2FCDTYERbejl9JaP31uaJ0ccMPiD3sQGOqUBDxz7QEIpgOFZGwcr70iCkC60yLNhRiCkGmY25rvOBkK3oSLpYeHz%2FsEsZ19Nb9SFjEgdPLgOZIEaDQ3%2Fbn3kVTBVa%2FhGQlLXKf8XS9a3%2FbZrO7XF%2BFlXwUPnwIC%2BcqiGW%2F8cqrp%2FpI9ou%2BVpYQSVONNRnUcDL9sLecd5em%2BR1ODf39Zp%2F6tJ0x18ivygVCuhk6wzNQmvrh2ywwb03W%2FmEGBHR9Ur&X-Amz-Signature=d069ec934d49258f64e2554970e6b5219896c99c1551e22760b454509d7cd7fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVMYU7KH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ0xl9IHDvX4PZn9pOXK8aHue9%2BIMWXc7IG59PnjPsoAiEAiIcWz28XECLtJaWP9BkD8O3qqhLBpp69DT1mLIPpaLcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgztkRisrp6%2F2wYkCrcA%2BWxQPtUQkjgWv6QTRIQPIT6tPxGMmNpD3%2FF4QVDLKnegM4royGsJOpAYh8ome6xbEMNvTskL%2BoUnVjimtNG87JPCnsv9%2BZAHNz6BMFMNXwCHZBQLbYqJErBnaZCUBb9KRz4riz324rJA1USS3kjuegDU2O2FAVwAHSHbnIPXXn5PJJIpQfQH1Xp0CZUot2GlamWYC6X8DIvKCd0VjhYxAn%2BXQckPw5j3u4SMKgynMmf%2Bk1F2ob8F5%2F7kM2jqvtJ9F%2BURvAeh0mc%2BNChTEK%2Br05%2FZ1rgzTA1R%2BrrOJm7SgCOW76A6hwLUkf9YQd7QOdT0wKtGjYiZpGPpnNJLMwec4I2zIzG8VNrgRQVDEF%2B7klUVduikaaOBq8XwFXdKtH5Kn%2BbpCMvwQNPsgaepCSgA1f5jGBPAMNRsF9hmNQYh9L3JpbfLJedZWBi%2BZz7DUfcgjlukED0iskJ%2FSbb6AFrZlRKKwppV112w8AqExIBk5m3a%2FjKzjLyS7xWgRsgbh53xi3HmF5mhAQhB%2B2U0dhNa%2FhsPS1qYI6Eb55fW3RG4%2BK3aiyIng8nXNCHMnGUP%2F%2FF%2B%2Fplkg%2FOwGiJWzlhZh64YFSecT6q2jfzcyX5b%2FCDTYERbejl9JaP31uaJ0ccMPiD3sQGOqUBDxz7QEIpgOFZGwcr70iCkC60yLNhRiCkGmY25rvOBkK3oSLpYeHz%2FsEsZ19Nb9SFjEgdPLgOZIEaDQ3%2Fbn3kVTBVa%2FhGQlLXKf8XS9a3%2FbZrO7XF%2BFlXwUPnwIC%2BcqiGW%2F8cqrp%2FpI9ou%2BVpYQSVONNRnUcDL9sLecd5em%2BR1ODf39Zp%2F6tJ0x18ivygVCuhk6wzNQmvrh2ywwb03W%2FmEGBHR9Ur&X-Amz-Signature=2253f4d7f6f1cab3a299ac4ac41523feade6b223c7efdb8b29810261e4fc8b89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVMYU7KH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ0xl9IHDvX4PZn9pOXK8aHue9%2BIMWXc7IG59PnjPsoAiEAiIcWz28XECLtJaWP9BkD8O3qqhLBpp69DT1mLIPpaLcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgztkRisrp6%2F2wYkCrcA%2BWxQPtUQkjgWv6QTRIQPIT6tPxGMmNpD3%2FF4QVDLKnegM4royGsJOpAYh8ome6xbEMNvTskL%2BoUnVjimtNG87JPCnsv9%2BZAHNz6BMFMNXwCHZBQLbYqJErBnaZCUBb9KRz4riz324rJA1USS3kjuegDU2O2FAVwAHSHbnIPXXn5PJJIpQfQH1Xp0CZUot2GlamWYC6X8DIvKCd0VjhYxAn%2BXQckPw5j3u4SMKgynMmf%2Bk1F2ob8F5%2F7kM2jqvtJ9F%2BURvAeh0mc%2BNChTEK%2Br05%2FZ1rgzTA1R%2BrrOJm7SgCOW76A6hwLUkf9YQd7QOdT0wKtGjYiZpGPpnNJLMwec4I2zIzG8VNrgRQVDEF%2B7klUVduikaaOBq8XwFXdKtH5Kn%2BbpCMvwQNPsgaepCSgA1f5jGBPAMNRsF9hmNQYh9L3JpbfLJedZWBi%2BZz7DUfcgjlukED0iskJ%2FSbb6AFrZlRKKwppV112w8AqExIBk5m3a%2FjKzjLyS7xWgRsgbh53xi3HmF5mhAQhB%2B2U0dhNa%2FhsPS1qYI6Eb55fW3RG4%2BK3aiyIng8nXNCHMnGUP%2F%2FF%2B%2Fplkg%2FOwGiJWzlhZh64YFSecT6q2jfzcyX5b%2FCDTYERbejl9JaP31uaJ0ccMPiD3sQGOqUBDxz7QEIpgOFZGwcr70iCkC60yLNhRiCkGmY25rvOBkK3oSLpYeHz%2FsEsZ19Nb9SFjEgdPLgOZIEaDQ3%2Fbn3kVTBVa%2FhGQlLXKf8XS9a3%2FbZrO7XF%2BFlXwUPnwIC%2BcqiGW%2F8cqrp%2FpI9ou%2BVpYQSVONNRnUcDL9sLecd5em%2BR1ODf39Zp%2F6tJ0x18ivygVCuhk6wzNQmvrh2ywwb03W%2FmEGBHR9Ur&X-Amz-Signature=cee618fb4b4c813b9e3c5602992fe4c1d56350910c7aec26f3a339c1f7daa593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVMYU7KH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ0xl9IHDvX4PZn9pOXK8aHue9%2BIMWXc7IG59PnjPsoAiEAiIcWz28XECLtJaWP9BkD8O3qqhLBpp69DT1mLIPpaLcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgztkRisrp6%2F2wYkCrcA%2BWxQPtUQkjgWv6QTRIQPIT6tPxGMmNpD3%2FF4QVDLKnegM4royGsJOpAYh8ome6xbEMNvTskL%2BoUnVjimtNG87JPCnsv9%2BZAHNz6BMFMNXwCHZBQLbYqJErBnaZCUBb9KRz4riz324rJA1USS3kjuegDU2O2FAVwAHSHbnIPXXn5PJJIpQfQH1Xp0CZUot2GlamWYC6X8DIvKCd0VjhYxAn%2BXQckPw5j3u4SMKgynMmf%2Bk1F2ob8F5%2F7kM2jqvtJ9F%2BURvAeh0mc%2BNChTEK%2Br05%2FZ1rgzTA1R%2BrrOJm7SgCOW76A6hwLUkf9YQd7QOdT0wKtGjYiZpGPpnNJLMwec4I2zIzG8VNrgRQVDEF%2B7klUVduikaaOBq8XwFXdKtH5Kn%2BbpCMvwQNPsgaepCSgA1f5jGBPAMNRsF9hmNQYh9L3JpbfLJedZWBi%2BZz7DUfcgjlukED0iskJ%2FSbb6AFrZlRKKwppV112w8AqExIBk5m3a%2FjKzjLyS7xWgRsgbh53xi3HmF5mhAQhB%2B2U0dhNa%2FhsPS1qYI6Eb55fW3RG4%2BK3aiyIng8nXNCHMnGUP%2F%2FF%2B%2Fplkg%2FOwGiJWzlhZh64YFSecT6q2jfzcyX5b%2FCDTYERbejl9JaP31uaJ0ccMPiD3sQGOqUBDxz7QEIpgOFZGwcr70iCkC60yLNhRiCkGmY25rvOBkK3oSLpYeHz%2FsEsZ19Nb9SFjEgdPLgOZIEaDQ3%2Fbn3kVTBVa%2FhGQlLXKf8XS9a3%2FbZrO7XF%2BFlXwUPnwIC%2BcqiGW%2F8cqrp%2FpI9ou%2BVpYQSVONNRnUcDL9sLecd5em%2BR1ODf39Zp%2F6tJ0x18ivygVCuhk6wzNQmvrh2ywwb03W%2FmEGBHR9Ur&X-Amz-Signature=8198358a7317b282876cdc931304ed98cf07e7b8e97bc7c157d3bd4322b349bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVMYU7KH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ0xl9IHDvX4PZn9pOXK8aHue9%2BIMWXc7IG59PnjPsoAiEAiIcWz28XECLtJaWP9BkD8O3qqhLBpp69DT1mLIPpaLcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgztkRisrp6%2F2wYkCrcA%2BWxQPtUQkjgWv6QTRIQPIT6tPxGMmNpD3%2FF4QVDLKnegM4royGsJOpAYh8ome6xbEMNvTskL%2BoUnVjimtNG87JPCnsv9%2BZAHNz6BMFMNXwCHZBQLbYqJErBnaZCUBb9KRz4riz324rJA1USS3kjuegDU2O2FAVwAHSHbnIPXXn5PJJIpQfQH1Xp0CZUot2GlamWYC6X8DIvKCd0VjhYxAn%2BXQckPw5j3u4SMKgynMmf%2Bk1F2ob8F5%2F7kM2jqvtJ9F%2BURvAeh0mc%2BNChTEK%2Br05%2FZ1rgzTA1R%2BrrOJm7SgCOW76A6hwLUkf9YQd7QOdT0wKtGjYiZpGPpnNJLMwec4I2zIzG8VNrgRQVDEF%2B7klUVduikaaOBq8XwFXdKtH5Kn%2BbpCMvwQNPsgaepCSgA1f5jGBPAMNRsF9hmNQYh9L3JpbfLJedZWBi%2BZz7DUfcgjlukED0iskJ%2FSbb6AFrZlRKKwppV112w8AqExIBk5m3a%2FjKzjLyS7xWgRsgbh53xi3HmF5mhAQhB%2B2U0dhNa%2FhsPS1qYI6Eb55fW3RG4%2BK3aiyIng8nXNCHMnGUP%2F%2FF%2B%2Fplkg%2FOwGiJWzlhZh64YFSecT6q2jfzcyX5b%2FCDTYERbejl9JaP31uaJ0ccMPiD3sQGOqUBDxz7QEIpgOFZGwcr70iCkC60yLNhRiCkGmY25rvOBkK3oSLpYeHz%2FsEsZ19Nb9SFjEgdPLgOZIEaDQ3%2Fbn3kVTBVa%2FhGQlLXKf8XS9a3%2FbZrO7XF%2BFlXwUPnwIC%2BcqiGW%2F8cqrp%2FpI9ou%2BVpYQSVONNRnUcDL9sLecd5em%2BR1ODf39Zp%2F6tJ0x18ivygVCuhk6wzNQmvrh2ywwb03W%2FmEGBHR9Ur&X-Amz-Signature=ee96a919066c45559a293b25b45e879579115ac0efdb5ae4a85e535e19615def&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVMYU7KH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ0xl9IHDvX4PZn9pOXK8aHue9%2BIMWXc7IG59PnjPsoAiEAiIcWz28XECLtJaWP9BkD8O3qqhLBpp69DT1mLIPpaLcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgztkRisrp6%2F2wYkCrcA%2BWxQPtUQkjgWv6QTRIQPIT6tPxGMmNpD3%2FF4QVDLKnegM4royGsJOpAYh8ome6xbEMNvTskL%2BoUnVjimtNG87JPCnsv9%2BZAHNz6BMFMNXwCHZBQLbYqJErBnaZCUBb9KRz4riz324rJA1USS3kjuegDU2O2FAVwAHSHbnIPXXn5PJJIpQfQH1Xp0CZUot2GlamWYC6X8DIvKCd0VjhYxAn%2BXQckPw5j3u4SMKgynMmf%2Bk1F2ob8F5%2F7kM2jqvtJ9F%2BURvAeh0mc%2BNChTEK%2Br05%2FZ1rgzTA1R%2BrrOJm7SgCOW76A6hwLUkf9YQd7QOdT0wKtGjYiZpGPpnNJLMwec4I2zIzG8VNrgRQVDEF%2B7klUVduikaaOBq8XwFXdKtH5Kn%2BbpCMvwQNPsgaepCSgA1f5jGBPAMNRsF9hmNQYh9L3JpbfLJedZWBi%2BZz7DUfcgjlukED0iskJ%2FSbb6AFrZlRKKwppV112w8AqExIBk5m3a%2FjKzjLyS7xWgRsgbh53xi3HmF5mhAQhB%2B2U0dhNa%2FhsPS1qYI6Eb55fW3RG4%2BK3aiyIng8nXNCHMnGUP%2F%2FF%2B%2Fplkg%2FOwGiJWzlhZh64YFSecT6q2jfzcyX5b%2FCDTYERbejl9JaP31uaJ0ccMPiD3sQGOqUBDxz7QEIpgOFZGwcr70iCkC60yLNhRiCkGmY25rvOBkK3oSLpYeHz%2FsEsZ19Nb9SFjEgdPLgOZIEaDQ3%2Fbn3kVTBVa%2FhGQlLXKf8XS9a3%2FbZrO7XF%2BFlXwUPnwIC%2BcqiGW%2F8cqrp%2FpI9ou%2BVpYQSVONNRnUcDL9sLecd5em%2BR1ODf39Zp%2F6tJ0x18ivygVCuhk6wzNQmvrh2ywwb03W%2FmEGBHR9Ur&X-Amz-Signature=f6d03f7a750cde8ebb687dd5884390778e1a4e8814c1b29f944af83d04bb2dc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVMYU7KH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ0xl9IHDvX4PZn9pOXK8aHue9%2BIMWXc7IG59PnjPsoAiEAiIcWz28XECLtJaWP9BkD8O3qqhLBpp69DT1mLIPpaLcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgztkRisrp6%2F2wYkCrcA%2BWxQPtUQkjgWv6QTRIQPIT6tPxGMmNpD3%2FF4QVDLKnegM4royGsJOpAYh8ome6xbEMNvTskL%2BoUnVjimtNG87JPCnsv9%2BZAHNz6BMFMNXwCHZBQLbYqJErBnaZCUBb9KRz4riz324rJA1USS3kjuegDU2O2FAVwAHSHbnIPXXn5PJJIpQfQH1Xp0CZUot2GlamWYC6X8DIvKCd0VjhYxAn%2BXQckPw5j3u4SMKgynMmf%2Bk1F2ob8F5%2F7kM2jqvtJ9F%2BURvAeh0mc%2BNChTEK%2Br05%2FZ1rgzTA1R%2BrrOJm7SgCOW76A6hwLUkf9YQd7QOdT0wKtGjYiZpGPpnNJLMwec4I2zIzG8VNrgRQVDEF%2B7klUVduikaaOBq8XwFXdKtH5Kn%2BbpCMvwQNPsgaepCSgA1f5jGBPAMNRsF9hmNQYh9L3JpbfLJedZWBi%2BZz7DUfcgjlukED0iskJ%2FSbb6AFrZlRKKwppV112w8AqExIBk5m3a%2FjKzjLyS7xWgRsgbh53xi3HmF5mhAQhB%2B2U0dhNa%2FhsPS1qYI6Eb55fW3RG4%2BK3aiyIng8nXNCHMnGUP%2F%2FF%2B%2Fplkg%2FOwGiJWzlhZh64YFSecT6q2jfzcyX5b%2FCDTYERbejl9JaP31uaJ0ccMPiD3sQGOqUBDxz7QEIpgOFZGwcr70iCkC60yLNhRiCkGmY25rvOBkK3oSLpYeHz%2FsEsZ19Nb9SFjEgdPLgOZIEaDQ3%2Fbn3kVTBVa%2FhGQlLXKf8XS9a3%2FbZrO7XF%2BFlXwUPnwIC%2BcqiGW%2F8cqrp%2FpI9ou%2BVpYQSVONNRnUcDL9sLecd5em%2BR1ODf39Zp%2F6tJ0x18ivygVCuhk6wzNQmvrh2ywwb03W%2FmEGBHR9Ur&X-Amz-Signature=7c94a9c9a931c53a9089ed4113bdd9a2c9ed1232f5ad10eeda1924ed62e59438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVMYU7KH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ0xl9IHDvX4PZn9pOXK8aHue9%2BIMWXc7IG59PnjPsoAiEAiIcWz28XECLtJaWP9BkD8O3qqhLBpp69DT1mLIPpaLcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgztkRisrp6%2F2wYkCrcA%2BWxQPtUQkjgWv6QTRIQPIT6tPxGMmNpD3%2FF4QVDLKnegM4royGsJOpAYh8ome6xbEMNvTskL%2BoUnVjimtNG87JPCnsv9%2BZAHNz6BMFMNXwCHZBQLbYqJErBnaZCUBb9KRz4riz324rJA1USS3kjuegDU2O2FAVwAHSHbnIPXXn5PJJIpQfQH1Xp0CZUot2GlamWYC6X8DIvKCd0VjhYxAn%2BXQckPw5j3u4SMKgynMmf%2Bk1F2ob8F5%2F7kM2jqvtJ9F%2BURvAeh0mc%2BNChTEK%2Br05%2FZ1rgzTA1R%2BrrOJm7SgCOW76A6hwLUkf9YQd7QOdT0wKtGjYiZpGPpnNJLMwec4I2zIzG8VNrgRQVDEF%2B7klUVduikaaOBq8XwFXdKtH5Kn%2BbpCMvwQNPsgaepCSgA1f5jGBPAMNRsF9hmNQYh9L3JpbfLJedZWBi%2BZz7DUfcgjlukED0iskJ%2FSbb6AFrZlRKKwppV112w8AqExIBk5m3a%2FjKzjLyS7xWgRsgbh53xi3HmF5mhAQhB%2B2U0dhNa%2FhsPS1qYI6Eb55fW3RG4%2BK3aiyIng8nXNCHMnGUP%2F%2FF%2B%2Fplkg%2FOwGiJWzlhZh64YFSecT6q2jfzcyX5b%2FCDTYERbejl9JaP31uaJ0ccMPiD3sQGOqUBDxz7QEIpgOFZGwcr70iCkC60yLNhRiCkGmY25rvOBkK3oSLpYeHz%2FsEsZ19Nb9SFjEgdPLgOZIEaDQ3%2Fbn3kVTBVa%2FhGQlLXKf8XS9a3%2FbZrO7XF%2BFlXwUPnwIC%2BcqiGW%2F8cqrp%2FpI9ou%2BVpYQSVONNRnUcDL9sLecd5em%2BR1ODf39Zp%2F6tJ0x18ivygVCuhk6wzNQmvrh2ywwb03W%2FmEGBHR9Ur&X-Amz-Signature=b35b58c033b5dd13de7e3453272d14e9f18083fbc743c58a5ee8852d0ae38103&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVMYU7KH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ0xl9IHDvX4PZn9pOXK8aHue9%2BIMWXc7IG59PnjPsoAiEAiIcWz28XECLtJaWP9BkD8O3qqhLBpp69DT1mLIPpaLcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgztkRisrp6%2F2wYkCrcA%2BWxQPtUQkjgWv6QTRIQPIT6tPxGMmNpD3%2FF4QVDLKnegM4royGsJOpAYh8ome6xbEMNvTskL%2BoUnVjimtNG87JPCnsv9%2BZAHNz6BMFMNXwCHZBQLbYqJErBnaZCUBb9KRz4riz324rJA1USS3kjuegDU2O2FAVwAHSHbnIPXXn5PJJIpQfQH1Xp0CZUot2GlamWYC6X8DIvKCd0VjhYxAn%2BXQckPw5j3u4SMKgynMmf%2Bk1F2ob8F5%2F7kM2jqvtJ9F%2BURvAeh0mc%2BNChTEK%2Br05%2FZ1rgzTA1R%2BrrOJm7SgCOW76A6hwLUkf9YQd7QOdT0wKtGjYiZpGPpnNJLMwec4I2zIzG8VNrgRQVDEF%2B7klUVduikaaOBq8XwFXdKtH5Kn%2BbpCMvwQNPsgaepCSgA1f5jGBPAMNRsF9hmNQYh9L3JpbfLJedZWBi%2BZz7DUfcgjlukED0iskJ%2FSbb6AFrZlRKKwppV112w8AqExIBk5m3a%2FjKzjLyS7xWgRsgbh53xi3HmF5mhAQhB%2B2U0dhNa%2FhsPS1qYI6Eb55fW3RG4%2BK3aiyIng8nXNCHMnGUP%2F%2FF%2B%2Fplkg%2FOwGiJWzlhZh64YFSecT6q2jfzcyX5b%2FCDTYERbejl9JaP31uaJ0ccMPiD3sQGOqUBDxz7QEIpgOFZGwcr70iCkC60yLNhRiCkGmY25rvOBkK3oSLpYeHz%2FsEsZ19Nb9SFjEgdPLgOZIEaDQ3%2Fbn3kVTBVa%2FhGQlLXKf8XS9a3%2FbZrO7XF%2BFlXwUPnwIC%2BcqiGW%2F8cqrp%2FpI9ou%2BVpYQSVONNRnUcDL9sLecd5em%2BR1ODf39Zp%2F6tJ0x18ivygVCuhk6wzNQmvrh2ywwb03W%2FmEGBHR9Ur&X-Amz-Signature=6ff80f0394716d14a456b2f04db15964f95475aaa90153a47873d58cda429e29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVMYU7KH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ0xl9IHDvX4PZn9pOXK8aHue9%2BIMWXc7IG59PnjPsoAiEAiIcWz28XECLtJaWP9BkD8O3qqhLBpp69DT1mLIPpaLcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgztkRisrp6%2F2wYkCrcA%2BWxQPtUQkjgWv6QTRIQPIT6tPxGMmNpD3%2FF4QVDLKnegM4royGsJOpAYh8ome6xbEMNvTskL%2BoUnVjimtNG87JPCnsv9%2BZAHNz6BMFMNXwCHZBQLbYqJErBnaZCUBb9KRz4riz324rJA1USS3kjuegDU2O2FAVwAHSHbnIPXXn5PJJIpQfQH1Xp0CZUot2GlamWYC6X8DIvKCd0VjhYxAn%2BXQckPw5j3u4SMKgynMmf%2Bk1F2ob8F5%2F7kM2jqvtJ9F%2BURvAeh0mc%2BNChTEK%2Br05%2FZ1rgzTA1R%2BrrOJm7SgCOW76A6hwLUkf9YQd7QOdT0wKtGjYiZpGPpnNJLMwec4I2zIzG8VNrgRQVDEF%2B7klUVduikaaOBq8XwFXdKtH5Kn%2BbpCMvwQNPsgaepCSgA1f5jGBPAMNRsF9hmNQYh9L3JpbfLJedZWBi%2BZz7DUfcgjlukED0iskJ%2FSbb6AFrZlRKKwppV112w8AqExIBk5m3a%2FjKzjLyS7xWgRsgbh53xi3HmF5mhAQhB%2B2U0dhNa%2FhsPS1qYI6Eb55fW3RG4%2BK3aiyIng8nXNCHMnGUP%2F%2FF%2B%2Fplkg%2FOwGiJWzlhZh64YFSecT6q2jfzcyX5b%2FCDTYERbejl9JaP31uaJ0ccMPiD3sQGOqUBDxz7QEIpgOFZGwcr70iCkC60yLNhRiCkGmY25rvOBkK3oSLpYeHz%2FsEsZ19Nb9SFjEgdPLgOZIEaDQ3%2Fbn3kVTBVa%2FhGQlLXKf8XS9a3%2FbZrO7XF%2BFlXwUPnwIC%2BcqiGW%2F8cqrp%2FpI9ou%2BVpYQSVONNRnUcDL9sLecd5em%2BR1ODf39Zp%2F6tJ0x18ivygVCuhk6wzNQmvrh2ywwb03W%2FmEGBHR9Ur&X-Amz-Signature=5e0ed1fc1e847c2e3d1974e28ca04a20fc2676dd91cb0863a411150c5f738dda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLGDVOSV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDn9eAuaxv%2B66MSpw%2B%2Bg1TQGyF1utn5UjQ86jPPIAWRbwIhAJIm547YBGvdyN27yqEYKLsNT6Xi0Mkp8T0TTh8hDe4%2BKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Fl2BdIHfjS%2FLUnzIq3APyE4bAcKA7c1GvfJs%2BtVpTtbIWEixWlb5TIjteCDcnzaeGJlEHlkWzvyXTvqMdgeNRzo%2BQ%2BMoXo%2FrRVIprC35gLKgfIwatXF1M%2FOE0K05T1snKjdmNI3nwMpMWb0su9nd0h5Tvr39aJ1nNIm78XhU8i09DNhJbjGa59%2FF%2FuCocYN6MiIsRXNA4FD%2BwTUR9Tf1%2B%2B%2BBkuEvBALZDiyuhhzee5nBIZw%2BHZKg3N9eGzn6is5dMuv19wfodINB4ybQZXVlKXjFBMOMkeZCVvvHQ5OkHIaqI76DBHXAFa7egOUCjsi7iUJ3OSHRh9D8ZdsPo%2F5MWHAFYdpWgps48SAtigEKeq0Mp8GC9R9biQmW0YUjrbk1zieGU52s%2FF%2B%2FJqeiV%2B2cNciNUQkqeeSUJxN9E7F15j44L340QDMR0dQF6mhCAPxHM%2BG0OQFGQdxRfm3i67HCRD7pGeXFdoUeVM96sucwuhmngjDDvHsRDOFP7NgHrQjLzvShCWQ7x14mtkQjNnq3hxElhViN%2FBUaU3%2BR2C8PVpGhJ2lV%2BOgWFtsUXmQKzIzZp6sf4PAj8AqgpBtgJu2LE6xV7iYXuHps1tEIROI%2FFoetDr24IGqL57g%2B2%2BFaM%2F%2F8gCvdUeGxA8W8ytzDbid7EBjqkAbXkWo8YpPeOUBa7GMvPL35eeU49MdpMFSz55YfbsSS5GrZNSu0XieqRuJLybhd5NMVxcVvODv6KNmG%2FOsxmvntx4iYZItwwUsCd2%2BaClwsfQsnaCLXA5nGLXj9pTw%2BY7LyMJRlxOWfFDgWo6B1cUjwVhOQRnQiib8UJBAxKdDzP7zOCwIK4pQafTJZfgAGJALD34KGSACk8JRwzOWYFQkuZLBvF&X-Amz-Signature=e194a5c4909b0cb5764de8a88ce8a17e0bbebbc879661132139a58ba2cefe433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FSSL6JL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FuOVhg3rlnT2Fv8sI1o5cQSbUhc72jhoiQ5oKPqe5BAiAdtirhXePu5YBYzzGnRgzO8fTFOo4atl%2BuXGkWRsy6bCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F2LOhKAdOD5AGCPMKtwDqbNkjk5MzmNjxI5SlG2bs8bgvSIQsMTE0F3v0n7jmRm3cgTCnHELH3JzbIq1U89BwfJGSwhq%2BiC6NbObO5IsHhxY8Kzo%2FLrn%2FvL45AcnquWVkVf3HYWEMqWsnYBoNi201S%2Fqhkms0RwWQZ2MvJfnUGWunbTaRE28NN7qrybDtLuMfYd6i9cyt3trWfK9qn755YD22Ya8O%2FoyPZ1yOgUril6uA5AYNdec14N3owsXhLCA8MeR7t6nbib275n0L0EQ8%2BDj8v3PN2PN3f82KXAzl97LmqAcr1eRwjVpxVFBaZv4sLzzoE7EtRM36cHkmLhCTgrJus3czuWFnMXrbjT%2F6m2RM2jCN4wZY3vHIWEzyuDN6jYix8gLDYsiJnruV9hj3tExdUaoSN95Knwvqr4dQs9Y3ZJ8ByedX1332%2BSYJsN74NUdIA9y5B2kNjOsiIZvIFg8SyTIe45IP7eY93xQixuvh90mYZp%2FfQ2inKuwGJlKuMbt8XbJzxBl87wjEEnfjwNPJPC01%2FyXNrZzpXGL6VSQ9t5H4OTTQzC9WaDy70BRChkHYFK4N6yitNAgXivr%2BqfUhbUI4zmbL5TVKyeenhiBQYsJQnPoNMTTknOpmUyFEfv7NSZ1xAuzS1Ew6onexAY6pgFs4a%2B7kYKQ0MESclzgqSkycbDg48ujCmDoDCSqyBaDAq77mG6IxzncFfbkE4%2F1UW098l4Sz%2FkasntC2Of2VY1TDD0d38jr1yM%2FwcPhIhJK8lpek%2FDaQEEmkXUUPcP9yoelrOSUbeJ7H0u3L4wLw8YLf2VJsSLkvs1AW2aSjVpLDKHwDwCgCVZtf2uX1AnDY56CC75bEDl168m1lYFvyylQRxOLu9tR&X-Amz-Signature=350518c9df3c4b8163d41beb7f2f34185c896065dd919efab5922d3073cb9847&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FSSL6JL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FuOVhg3rlnT2Fv8sI1o5cQSbUhc72jhoiQ5oKPqe5BAiAdtirhXePu5YBYzzGnRgzO8fTFOo4atl%2BuXGkWRsy6bCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F2LOhKAdOD5AGCPMKtwDqbNkjk5MzmNjxI5SlG2bs8bgvSIQsMTE0F3v0n7jmRm3cgTCnHELH3JzbIq1U89BwfJGSwhq%2BiC6NbObO5IsHhxY8Kzo%2FLrn%2FvL45AcnquWVkVf3HYWEMqWsnYBoNi201S%2Fqhkms0RwWQZ2MvJfnUGWunbTaRE28NN7qrybDtLuMfYd6i9cyt3trWfK9qn755YD22Ya8O%2FoyPZ1yOgUril6uA5AYNdec14N3owsXhLCA8MeR7t6nbib275n0L0EQ8%2BDj8v3PN2PN3f82KXAzl97LmqAcr1eRwjVpxVFBaZv4sLzzoE7EtRM36cHkmLhCTgrJus3czuWFnMXrbjT%2F6m2RM2jCN4wZY3vHIWEzyuDN6jYix8gLDYsiJnruV9hj3tExdUaoSN95Knwvqr4dQs9Y3ZJ8ByedX1332%2BSYJsN74NUdIA9y5B2kNjOsiIZvIFg8SyTIe45IP7eY93xQixuvh90mYZp%2FfQ2inKuwGJlKuMbt8XbJzxBl87wjEEnfjwNPJPC01%2FyXNrZzpXGL6VSQ9t5H4OTTQzC9WaDy70BRChkHYFK4N6yitNAgXivr%2BqfUhbUI4zmbL5TVKyeenhiBQYsJQnPoNMTTknOpmUyFEfv7NSZ1xAuzS1Ew6onexAY6pgFs4a%2B7kYKQ0MESclzgqSkycbDg48ujCmDoDCSqyBaDAq77mG6IxzncFfbkE4%2F1UW098l4Sz%2FkasntC2Of2VY1TDD0d38jr1yM%2FwcPhIhJK8lpek%2FDaQEEmkXUUPcP9yoelrOSUbeJ7H0u3L4wLw8YLf2VJsSLkvs1AW2aSjVpLDKHwDwCgCVZtf2uX1AnDY56CC75bEDl168m1lYFvyylQRxOLu9tR&X-Amz-Signature=810e9a65ce32c30e86628b5ea49f710ea0f085c577f05f972e1756042a71b6e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FSSL6JL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FuOVhg3rlnT2Fv8sI1o5cQSbUhc72jhoiQ5oKPqe5BAiAdtirhXePu5YBYzzGnRgzO8fTFOo4atl%2BuXGkWRsy6bCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F2LOhKAdOD5AGCPMKtwDqbNkjk5MzmNjxI5SlG2bs8bgvSIQsMTE0F3v0n7jmRm3cgTCnHELH3JzbIq1U89BwfJGSwhq%2BiC6NbObO5IsHhxY8Kzo%2FLrn%2FvL45AcnquWVkVf3HYWEMqWsnYBoNi201S%2Fqhkms0RwWQZ2MvJfnUGWunbTaRE28NN7qrybDtLuMfYd6i9cyt3trWfK9qn755YD22Ya8O%2FoyPZ1yOgUril6uA5AYNdec14N3owsXhLCA8MeR7t6nbib275n0L0EQ8%2BDj8v3PN2PN3f82KXAzl97LmqAcr1eRwjVpxVFBaZv4sLzzoE7EtRM36cHkmLhCTgrJus3czuWFnMXrbjT%2F6m2RM2jCN4wZY3vHIWEzyuDN6jYix8gLDYsiJnruV9hj3tExdUaoSN95Knwvqr4dQs9Y3ZJ8ByedX1332%2BSYJsN74NUdIA9y5B2kNjOsiIZvIFg8SyTIe45IP7eY93xQixuvh90mYZp%2FfQ2inKuwGJlKuMbt8XbJzxBl87wjEEnfjwNPJPC01%2FyXNrZzpXGL6VSQ9t5H4OTTQzC9WaDy70BRChkHYFK4N6yitNAgXivr%2BqfUhbUI4zmbL5TVKyeenhiBQYsJQnPoNMTTknOpmUyFEfv7NSZ1xAuzS1Ew6onexAY6pgFs4a%2B7kYKQ0MESclzgqSkycbDg48ujCmDoDCSqyBaDAq77mG6IxzncFfbkE4%2F1UW098l4Sz%2FkasntC2Of2VY1TDD0d38jr1yM%2FwcPhIhJK8lpek%2FDaQEEmkXUUPcP9yoelrOSUbeJ7H0u3L4wLw8YLf2VJsSLkvs1AW2aSjVpLDKHwDwCgCVZtf2uX1AnDY56CC75bEDl168m1lYFvyylQRxOLu9tR&X-Amz-Signature=70761e2fb71387cccb74eb7cd1aec7bb05f7fcf7437169bdd2144695dc22026a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FSSL6JL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FuOVhg3rlnT2Fv8sI1o5cQSbUhc72jhoiQ5oKPqe5BAiAdtirhXePu5YBYzzGnRgzO8fTFOo4atl%2BuXGkWRsy6bCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F2LOhKAdOD5AGCPMKtwDqbNkjk5MzmNjxI5SlG2bs8bgvSIQsMTE0F3v0n7jmRm3cgTCnHELH3JzbIq1U89BwfJGSwhq%2BiC6NbObO5IsHhxY8Kzo%2FLrn%2FvL45AcnquWVkVf3HYWEMqWsnYBoNi201S%2Fqhkms0RwWQZ2MvJfnUGWunbTaRE28NN7qrybDtLuMfYd6i9cyt3trWfK9qn755YD22Ya8O%2FoyPZ1yOgUril6uA5AYNdec14N3owsXhLCA8MeR7t6nbib275n0L0EQ8%2BDj8v3PN2PN3f82KXAzl97LmqAcr1eRwjVpxVFBaZv4sLzzoE7EtRM36cHkmLhCTgrJus3czuWFnMXrbjT%2F6m2RM2jCN4wZY3vHIWEzyuDN6jYix8gLDYsiJnruV9hj3tExdUaoSN95Knwvqr4dQs9Y3ZJ8ByedX1332%2BSYJsN74NUdIA9y5B2kNjOsiIZvIFg8SyTIe45IP7eY93xQixuvh90mYZp%2FfQ2inKuwGJlKuMbt8XbJzxBl87wjEEnfjwNPJPC01%2FyXNrZzpXGL6VSQ9t5H4OTTQzC9WaDy70BRChkHYFK4N6yitNAgXivr%2BqfUhbUI4zmbL5TVKyeenhiBQYsJQnPoNMTTknOpmUyFEfv7NSZ1xAuzS1Ew6onexAY6pgFs4a%2B7kYKQ0MESclzgqSkycbDg48ujCmDoDCSqyBaDAq77mG6IxzncFfbkE4%2F1UW098l4Sz%2FkasntC2Of2VY1TDD0d38jr1yM%2FwcPhIhJK8lpek%2FDaQEEmkXUUPcP9yoelrOSUbeJ7H0u3L4wLw8YLf2VJsSLkvs1AW2aSjVpLDKHwDwCgCVZtf2uX1AnDY56CC75bEDl168m1lYFvyylQRxOLu9tR&X-Amz-Signature=aa2f1f42d424e86eab8e8656cd04aff57e5ee3eb5de05a25180b1d46946f073d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FSSL6JL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FuOVhg3rlnT2Fv8sI1o5cQSbUhc72jhoiQ5oKPqe5BAiAdtirhXePu5YBYzzGnRgzO8fTFOo4atl%2BuXGkWRsy6bCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F2LOhKAdOD5AGCPMKtwDqbNkjk5MzmNjxI5SlG2bs8bgvSIQsMTE0F3v0n7jmRm3cgTCnHELH3JzbIq1U89BwfJGSwhq%2BiC6NbObO5IsHhxY8Kzo%2FLrn%2FvL45AcnquWVkVf3HYWEMqWsnYBoNi201S%2Fqhkms0RwWQZ2MvJfnUGWunbTaRE28NN7qrybDtLuMfYd6i9cyt3trWfK9qn755YD22Ya8O%2FoyPZ1yOgUril6uA5AYNdec14N3owsXhLCA8MeR7t6nbib275n0L0EQ8%2BDj8v3PN2PN3f82KXAzl97LmqAcr1eRwjVpxVFBaZv4sLzzoE7EtRM36cHkmLhCTgrJus3czuWFnMXrbjT%2F6m2RM2jCN4wZY3vHIWEzyuDN6jYix8gLDYsiJnruV9hj3tExdUaoSN95Knwvqr4dQs9Y3ZJ8ByedX1332%2BSYJsN74NUdIA9y5B2kNjOsiIZvIFg8SyTIe45IP7eY93xQixuvh90mYZp%2FfQ2inKuwGJlKuMbt8XbJzxBl87wjEEnfjwNPJPC01%2FyXNrZzpXGL6VSQ9t5H4OTTQzC9WaDy70BRChkHYFK4N6yitNAgXivr%2BqfUhbUI4zmbL5TVKyeenhiBQYsJQnPoNMTTknOpmUyFEfv7NSZ1xAuzS1Ew6onexAY6pgFs4a%2B7kYKQ0MESclzgqSkycbDg48ujCmDoDCSqyBaDAq77mG6IxzncFfbkE4%2F1UW098l4Sz%2FkasntC2Of2VY1TDD0d38jr1yM%2FwcPhIhJK8lpek%2FDaQEEmkXUUPcP9yoelrOSUbeJ7H0u3L4wLw8YLf2VJsSLkvs1AW2aSjVpLDKHwDwCgCVZtf2uX1AnDY56CC75bEDl168m1lYFvyylQRxOLu9tR&X-Amz-Signature=2a04f7ecb5f632caeb65e91c6095ad0896508ff2812220e21f4ce85092cf66f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FSSL6JL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FuOVhg3rlnT2Fv8sI1o5cQSbUhc72jhoiQ5oKPqe5BAiAdtirhXePu5YBYzzGnRgzO8fTFOo4atl%2BuXGkWRsy6bCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F2LOhKAdOD5AGCPMKtwDqbNkjk5MzmNjxI5SlG2bs8bgvSIQsMTE0F3v0n7jmRm3cgTCnHELH3JzbIq1U89BwfJGSwhq%2BiC6NbObO5IsHhxY8Kzo%2FLrn%2FvL45AcnquWVkVf3HYWEMqWsnYBoNi201S%2Fqhkms0RwWQZ2MvJfnUGWunbTaRE28NN7qrybDtLuMfYd6i9cyt3trWfK9qn755YD22Ya8O%2FoyPZ1yOgUril6uA5AYNdec14N3owsXhLCA8MeR7t6nbib275n0L0EQ8%2BDj8v3PN2PN3f82KXAzl97LmqAcr1eRwjVpxVFBaZv4sLzzoE7EtRM36cHkmLhCTgrJus3czuWFnMXrbjT%2F6m2RM2jCN4wZY3vHIWEzyuDN6jYix8gLDYsiJnruV9hj3tExdUaoSN95Knwvqr4dQs9Y3ZJ8ByedX1332%2BSYJsN74NUdIA9y5B2kNjOsiIZvIFg8SyTIe45IP7eY93xQixuvh90mYZp%2FfQ2inKuwGJlKuMbt8XbJzxBl87wjEEnfjwNPJPC01%2FyXNrZzpXGL6VSQ9t5H4OTTQzC9WaDy70BRChkHYFK4N6yitNAgXivr%2BqfUhbUI4zmbL5TVKyeenhiBQYsJQnPoNMTTknOpmUyFEfv7NSZ1xAuzS1Ew6onexAY6pgFs4a%2B7kYKQ0MESclzgqSkycbDg48ujCmDoDCSqyBaDAq77mG6IxzncFfbkE4%2F1UW098l4Sz%2FkasntC2Of2VY1TDD0d38jr1yM%2FwcPhIhJK8lpek%2FDaQEEmkXUUPcP9yoelrOSUbeJ7H0u3L4wLw8YLf2VJsSLkvs1AW2aSjVpLDKHwDwCgCVZtf2uX1AnDY56CC75bEDl168m1lYFvyylQRxOLu9tR&X-Amz-Signature=7ca0fd5f7a5e0570b5c2da19555b270674e3d22ac63298bc5d5d166092266fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FSSL6JL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FuOVhg3rlnT2Fv8sI1o5cQSbUhc72jhoiQ5oKPqe5BAiAdtirhXePu5YBYzzGnRgzO8fTFOo4atl%2BuXGkWRsy6bCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F2LOhKAdOD5AGCPMKtwDqbNkjk5MzmNjxI5SlG2bs8bgvSIQsMTE0F3v0n7jmRm3cgTCnHELH3JzbIq1U89BwfJGSwhq%2BiC6NbObO5IsHhxY8Kzo%2FLrn%2FvL45AcnquWVkVf3HYWEMqWsnYBoNi201S%2Fqhkms0RwWQZ2MvJfnUGWunbTaRE28NN7qrybDtLuMfYd6i9cyt3trWfK9qn755YD22Ya8O%2FoyPZ1yOgUril6uA5AYNdec14N3owsXhLCA8MeR7t6nbib275n0L0EQ8%2BDj8v3PN2PN3f82KXAzl97LmqAcr1eRwjVpxVFBaZv4sLzzoE7EtRM36cHkmLhCTgrJus3czuWFnMXrbjT%2F6m2RM2jCN4wZY3vHIWEzyuDN6jYix8gLDYsiJnruV9hj3tExdUaoSN95Knwvqr4dQs9Y3ZJ8ByedX1332%2BSYJsN74NUdIA9y5B2kNjOsiIZvIFg8SyTIe45IP7eY93xQixuvh90mYZp%2FfQ2inKuwGJlKuMbt8XbJzxBl87wjEEnfjwNPJPC01%2FyXNrZzpXGL6VSQ9t5H4OTTQzC9WaDy70BRChkHYFK4N6yitNAgXivr%2BqfUhbUI4zmbL5TVKyeenhiBQYsJQnPoNMTTknOpmUyFEfv7NSZ1xAuzS1Ew6onexAY6pgFs4a%2B7kYKQ0MESclzgqSkycbDg48ujCmDoDCSqyBaDAq77mG6IxzncFfbkE4%2F1UW098l4Sz%2FkasntC2Of2VY1TDD0d38jr1yM%2FwcPhIhJK8lpek%2FDaQEEmkXUUPcP9yoelrOSUbeJ7H0u3L4wLw8YLf2VJsSLkvs1AW2aSjVpLDKHwDwCgCVZtf2uX1AnDY56CC75bEDl168m1lYFvyylQRxOLu9tR&X-Amz-Signature=a5f66b3ba24b55958b40b461c6e8daa1bb32f59146bf3029ef20c05667339b20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FSSL6JL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FuOVhg3rlnT2Fv8sI1o5cQSbUhc72jhoiQ5oKPqe5BAiAdtirhXePu5YBYzzGnRgzO8fTFOo4atl%2BuXGkWRsy6bCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F2LOhKAdOD5AGCPMKtwDqbNkjk5MzmNjxI5SlG2bs8bgvSIQsMTE0F3v0n7jmRm3cgTCnHELH3JzbIq1U89BwfJGSwhq%2BiC6NbObO5IsHhxY8Kzo%2FLrn%2FvL45AcnquWVkVf3HYWEMqWsnYBoNi201S%2Fqhkms0RwWQZ2MvJfnUGWunbTaRE28NN7qrybDtLuMfYd6i9cyt3trWfK9qn755YD22Ya8O%2FoyPZ1yOgUril6uA5AYNdec14N3owsXhLCA8MeR7t6nbib275n0L0EQ8%2BDj8v3PN2PN3f82KXAzl97LmqAcr1eRwjVpxVFBaZv4sLzzoE7EtRM36cHkmLhCTgrJus3czuWFnMXrbjT%2F6m2RM2jCN4wZY3vHIWEzyuDN6jYix8gLDYsiJnruV9hj3tExdUaoSN95Knwvqr4dQs9Y3ZJ8ByedX1332%2BSYJsN74NUdIA9y5B2kNjOsiIZvIFg8SyTIe45IP7eY93xQixuvh90mYZp%2FfQ2inKuwGJlKuMbt8XbJzxBl87wjEEnfjwNPJPC01%2FyXNrZzpXGL6VSQ9t5H4OTTQzC9WaDy70BRChkHYFK4N6yitNAgXivr%2BqfUhbUI4zmbL5TVKyeenhiBQYsJQnPoNMTTknOpmUyFEfv7NSZ1xAuzS1Ew6onexAY6pgFs4a%2B7kYKQ0MESclzgqSkycbDg48ujCmDoDCSqyBaDAq77mG6IxzncFfbkE4%2F1UW098l4Sz%2FkasntC2Of2VY1TDD0d38jr1yM%2FwcPhIhJK8lpek%2FDaQEEmkXUUPcP9yoelrOSUbeJ7H0u3L4wLw8YLf2VJsSLkvs1AW2aSjVpLDKHwDwCgCVZtf2uX1AnDY56CC75bEDl168m1lYFvyylQRxOLu9tR&X-Amz-Signature=4a13be4f4311033acfebd3a88f5429eaa04f768a6a3eea6bb1fc5a77b4c40e07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FSSL6JL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FuOVhg3rlnT2Fv8sI1o5cQSbUhc72jhoiQ5oKPqe5BAiAdtirhXePu5YBYzzGnRgzO8fTFOo4atl%2BuXGkWRsy6bCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F2LOhKAdOD5AGCPMKtwDqbNkjk5MzmNjxI5SlG2bs8bgvSIQsMTE0F3v0n7jmRm3cgTCnHELH3JzbIq1U89BwfJGSwhq%2BiC6NbObO5IsHhxY8Kzo%2FLrn%2FvL45AcnquWVkVf3HYWEMqWsnYBoNi201S%2Fqhkms0RwWQZ2MvJfnUGWunbTaRE28NN7qrybDtLuMfYd6i9cyt3trWfK9qn755YD22Ya8O%2FoyPZ1yOgUril6uA5AYNdec14N3owsXhLCA8MeR7t6nbib275n0L0EQ8%2BDj8v3PN2PN3f82KXAzl97LmqAcr1eRwjVpxVFBaZv4sLzzoE7EtRM36cHkmLhCTgrJus3czuWFnMXrbjT%2F6m2RM2jCN4wZY3vHIWEzyuDN6jYix8gLDYsiJnruV9hj3tExdUaoSN95Knwvqr4dQs9Y3ZJ8ByedX1332%2BSYJsN74NUdIA9y5B2kNjOsiIZvIFg8SyTIe45IP7eY93xQixuvh90mYZp%2FfQ2inKuwGJlKuMbt8XbJzxBl87wjEEnfjwNPJPC01%2FyXNrZzpXGL6VSQ9t5H4OTTQzC9WaDy70BRChkHYFK4N6yitNAgXivr%2BqfUhbUI4zmbL5TVKyeenhiBQYsJQnPoNMTTknOpmUyFEfv7NSZ1xAuzS1Ew6onexAY6pgFs4a%2B7kYKQ0MESclzgqSkycbDg48ujCmDoDCSqyBaDAq77mG6IxzncFfbkE4%2F1UW098l4Sz%2FkasntC2Of2VY1TDD0d38jr1yM%2FwcPhIhJK8lpek%2FDaQEEmkXUUPcP9yoelrOSUbeJ7H0u3L4wLw8YLf2VJsSLkvs1AW2aSjVpLDKHwDwCgCVZtf2uX1AnDY56CC75bEDl168m1lYFvyylQRxOLu9tR&X-Amz-Signature=15ab82f75293dbab4476b8a5d83be07beb8160fd8cf9ef36c435bd5a83bf71ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
