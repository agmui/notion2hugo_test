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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW6PWXMX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDiuAjDCI%2BkeT0s2qAAlPUNwyZD%2BXPYKCmxtsRRxH0I9wIgRvXSKMMEXcc3jK3SiRZz0tQcwGG440Auarrry2wSwDIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDH89pmcg2V%2FrUzTylircAxij5ZS3Xci%2FV0jYod%2BLhcOXQdyglcX3mt2%2FZYV0A%2FhnR2z%2BUCnkqAjm0CwN3GwnzGCSXt0ZJY2i2PvvXq%2Bk8g3e64vtq4M0EHU3sdpcNlpFOJs9aggr3c7fSEiXojOY2Oq8ol5d3ApiS1XLowChMGx0tLIoURBe8XhLI1PRHp14a2Frp5Tjj9a5wd98tulLGxOt8C8hetE3Xe3lQH7Kmbo5xk4IyQdapQhn1BY6OhlsL1iH4iIc%2BVMNs8IL61m9vfdnuVgo7DoipWXwEbvY2qJNC%2FG02efTNEBHbsywv3JzdSmItjqRMgT6DQ6ZBp7zwDGe4P2T0e0B1Zw63RM6BX4AAlwPN0DQrJD1UBr%2BivWoVEBmlgaPLTi05yAyadRRNwe0HGVpJbhEmwpjr%2BQdI1JPhsVVUNfl%2B%2B5ApDBLFKZITF7P8BV98jg6FxlpyyPQTSfJZOPYu6%2B832xkeTJrIo%2BEyQQX7M2p4WKZHNnN7cveL528H2aril8%2BEuYlwLIe4ViZeP3gc1sTx1%2Ba8r0MvzfcmaA8zxoOzNCSSr9oCRW4%2Bznn6uiWxm5Gh%2FnnI0r4k6%2Fqg1ep8T2K1BfoRGEYKGHbVDS14T7ChvvQTN7t4gdWMiN0JLuWxfu%2B3biQMLXal8QGOqUBzmSnFPCPPsoI77Mjim1xo5rzLkKSioxVWLCMvS2qwAiVq07iqb1tE0lMr%2BcL4%2FGLb3gs5XUq5qAb9TvPbxAsopQGnS7MuyElFYxRFHc2CZg4Es5DCKroqxrgP6rIcL6NRd9%2BnpjipUoK3PgJPe9by085YvO3oc2uukWrj5A%2FFE0rAJO%2BLh5XDo4Mrqy64YY9oInmo0DqaiaNG9k6u82uzUN9Hh%2Ba&X-Amz-Signature=cb05881154d75410d2b3dc7b7a705c8e09bf3325ffcfda7aadfc9d18d389edb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW6PWXMX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDiuAjDCI%2BkeT0s2qAAlPUNwyZD%2BXPYKCmxtsRRxH0I9wIgRvXSKMMEXcc3jK3SiRZz0tQcwGG440Auarrry2wSwDIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDH89pmcg2V%2FrUzTylircAxij5ZS3Xci%2FV0jYod%2BLhcOXQdyglcX3mt2%2FZYV0A%2FhnR2z%2BUCnkqAjm0CwN3GwnzGCSXt0ZJY2i2PvvXq%2Bk8g3e64vtq4M0EHU3sdpcNlpFOJs9aggr3c7fSEiXojOY2Oq8ol5d3ApiS1XLowChMGx0tLIoURBe8XhLI1PRHp14a2Frp5Tjj9a5wd98tulLGxOt8C8hetE3Xe3lQH7Kmbo5xk4IyQdapQhn1BY6OhlsL1iH4iIc%2BVMNs8IL61m9vfdnuVgo7DoipWXwEbvY2qJNC%2FG02efTNEBHbsywv3JzdSmItjqRMgT6DQ6ZBp7zwDGe4P2T0e0B1Zw63RM6BX4AAlwPN0DQrJD1UBr%2BivWoVEBmlgaPLTi05yAyadRRNwe0HGVpJbhEmwpjr%2BQdI1JPhsVVUNfl%2B%2B5ApDBLFKZITF7P8BV98jg6FxlpyyPQTSfJZOPYu6%2B832xkeTJrIo%2BEyQQX7M2p4WKZHNnN7cveL528H2aril8%2BEuYlwLIe4ViZeP3gc1sTx1%2Ba8r0MvzfcmaA8zxoOzNCSSr9oCRW4%2Bznn6uiWxm5Gh%2FnnI0r4k6%2Fqg1ep8T2K1BfoRGEYKGHbVDS14T7ChvvQTN7t4gdWMiN0JLuWxfu%2B3biQMLXal8QGOqUBzmSnFPCPPsoI77Mjim1xo5rzLkKSioxVWLCMvS2qwAiVq07iqb1tE0lMr%2BcL4%2FGLb3gs5XUq5qAb9TvPbxAsopQGnS7MuyElFYxRFHc2CZg4Es5DCKroqxrgP6rIcL6NRd9%2BnpjipUoK3PgJPe9by085YvO3oc2uukWrj5A%2FFE0rAJO%2BLh5XDo4Mrqy64YY9oInmo0DqaiaNG9k6u82uzUN9Hh%2Ba&X-Amz-Signature=65e7c3858a7bbf9f4a66dfa66bf9322c3a558ed466fffcefa42f2f20118c8cd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW6PWXMX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDiuAjDCI%2BkeT0s2qAAlPUNwyZD%2BXPYKCmxtsRRxH0I9wIgRvXSKMMEXcc3jK3SiRZz0tQcwGG440Auarrry2wSwDIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDH89pmcg2V%2FrUzTylircAxij5ZS3Xci%2FV0jYod%2BLhcOXQdyglcX3mt2%2FZYV0A%2FhnR2z%2BUCnkqAjm0CwN3GwnzGCSXt0ZJY2i2PvvXq%2Bk8g3e64vtq4M0EHU3sdpcNlpFOJs9aggr3c7fSEiXojOY2Oq8ol5d3ApiS1XLowChMGx0tLIoURBe8XhLI1PRHp14a2Frp5Tjj9a5wd98tulLGxOt8C8hetE3Xe3lQH7Kmbo5xk4IyQdapQhn1BY6OhlsL1iH4iIc%2BVMNs8IL61m9vfdnuVgo7DoipWXwEbvY2qJNC%2FG02efTNEBHbsywv3JzdSmItjqRMgT6DQ6ZBp7zwDGe4P2T0e0B1Zw63RM6BX4AAlwPN0DQrJD1UBr%2BivWoVEBmlgaPLTi05yAyadRRNwe0HGVpJbhEmwpjr%2BQdI1JPhsVVUNfl%2B%2B5ApDBLFKZITF7P8BV98jg6FxlpyyPQTSfJZOPYu6%2B832xkeTJrIo%2BEyQQX7M2p4WKZHNnN7cveL528H2aril8%2BEuYlwLIe4ViZeP3gc1sTx1%2Ba8r0MvzfcmaA8zxoOzNCSSr9oCRW4%2Bznn6uiWxm5Gh%2FnnI0r4k6%2Fqg1ep8T2K1BfoRGEYKGHbVDS14T7ChvvQTN7t4gdWMiN0JLuWxfu%2B3biQMLXal8QGOqUBzmSnFPCPPsoI77Mjim1xo5rzLkKSioxVWLCMvS2qwAiVq07iqb1tE0lMr%2BcL4%2FGLb3gs5XUq5qAb9TvPbxAsopQGnS7MuyElFYxRFHc2CZg4Es5DCKroqxrgP6rIcL6NRd9%2BnpjipUoK3PgJPe9by085YvO3oc2uukWrj5A%2FFE0rAJO%2BLh5XDo4Mrqy64YY9oInmo0DqaiaNG9k6u82uzUN9Hh%2Ba&X-Amz-Signature=18bacb5577e729185b3fd704b272d44a0c0d62f8f9bdf292ff57d2626a0c619e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW6PWXMX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDiuAjDCI%2BkeT0s2qAAlPUNwyZD%2BXPYKCmxtsRRxH0I9wIgRvXSKMMEXcc3jK3SiRZz0tQcwGG440Auarrry2wSwDIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDH89pmcg2V%2FrUzTylircAxij5ZS3Xci%2FV0jYod%2BLhcOXQdyglcX3mt2%2FZYV0A%2FhnR2z%2BUCnkqAjm0CwN3GwnzGCSXt0ZJY2i2PvvXq%2Bk8g3e64vtq4M0EHU3sdpcNlpFOJs9aggr3c7fSEiXojOY2Oq8ol5d3ApiS1XLowChMGx0tLIoURBe8XhLI1PRHp14a2Frp5Tjj9a5wd98tulLGxOt8C8hetE3Xe3lQH7Kmbo5xk4IyQdapQhn1BY6OhlsL1iH4iIc%2BVMNs8IL61m9vfdnuVgo7DoipWXwEbvY2qJNC%2FG02efTNEBHbsywv3JzdSmItjqRMgT6DQ6ZBp7zwDGe4P2T0e0B1Zw63RM6BX4AAlwPN0DQrJD1UBr%2BivWoVEBmlgaPLTi05yAyadRRNwe0HGVpJbhEmwpjr%2BQdI1JPhsVVUNfl%2B%2B5ApDBLFKZITF7P8BV98jg6FxlpyyPQTSfJZOPYu6%2B832xkeTJrIo%2BEyQQX7M2p4WKZHNnN7cveL528H2aril8%2BEuYlwLIe4ViZeP3gc1sTx1%2Ba8r0MvzfcmaA8zxoOzNCSSr9oCRW4%2Bznn6uiWxm5Gh%2FnnI0r4k6%2Fqg1ep8T2K1BfoRGEYKGHbVDS14T7ChvvQTN7t4gdWMiN0JLuWxfu%2B3biQMLXal8QGOqUBzmSnFPCPPsoI77Mjim1xo5rzLkKSioxVWLCMvS2qwAiVq07iqb1tE0lMr%2BcL4%2FGLb3gs5XUq5qAb9TvPbxAsopQGnS7MuyElFYxRFHc2CZg4Es5DCKroqxrgP6rIcL6NRd9%2BnpjipUoK3PgJPe9by085YvO3oc2uukWrj5A%2FFE0rAJO%2BLh5XDo4Mrqy64YY9oInmo0DqaiaNG9k6u82uzUN9Hh%2Ba&X-Amz-Signature=f6009c0062a4981e80c0cfcf33c5a2929b9a13b59ea05bd88d789db344606113&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW6PWXMX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDiuAjDCI%2BkeT0s2qAAlPUNwyZD%2BXPYKCmxtsRRxH0I9wIgRvXSKMMEXcc3jK3SiRZz0tQcwGG440Auarrry2wSwDIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDH89pmcg2V%2FrUzTylircAxij5ZS3Xci%2FV0jYod%2BLhcOXQdyglcX3mt2%2FZYV0A%2FhnR2z%2BUCnkqAjm0CwN3GwnzGCSXt0ZJY2i2PvvXq%2Bk8g3e64vtq4M0EHU3sdpcNlpFOJs9aggr3c7fSEiXojOY2Oq8ol5d3ApiS1XLowChMGx0tLIoURBe8XhLI1PRHp14a2Frp5Tjj9a5wd98tulLGxOt8C8hetE3Xe3lQH7Kmbo5xk4IyQdapQhn1BY6OhlsL1iH4iIc%2BVMNs8IL61m9vfdnuVgo7DoipWXwEbvY2qJNC%2FG02efTNEBHbsywv3JzdSmItjqRMgT6DQ6ZBp7zwDGe4P2T0e0B1Zw63RM6BX4AAlwPN0DQrJD1UBr%2BivWoVEBmlgaPLTi05yAyadRRNwe0HGVpJbhEmwpjr%2BQdI1JPhsVVUNfl%2B%2B5ApDBLFKZITF7P8BV98jg6FxlpyyPQTSfJZOPYu6%2B832xkeTJrIo%2BEyQQX7M2p4WKZHNnN7cveL528H2aril8%2BEuYlwLIe4ViZeP3gc1sTx1%2Ba8r0MvzfcmaA8zxoOzNCSSr9oCRW4%2Bznn6uiWxm5Gh%2FnnI0r4k6%2Fqg1ep8T2K1BfoRGEYKGHbVDS14T7ChvvQTN7t4gdWMiN0JLuWxfu%2B3biQMLXal8QGOqUBzmSnFPCPPsoI77Mjim1xo5rzLkKSioxVWLCMvS2qwAiVq07iqb1tE0lMr%2BcL4%2FGLb3gs5XUq5qAb9TvPbxAsopQGnS7MuyElFYxRFHc2CZg4Es5DCKroqxrgP6rIcL6NRd9%2BnpjipUoK3PgJPe9by085YvO3oc2uukWrj5A%2FFE0rAJO%2BLh5XDo4Mrqy64YY9oInmo0DqaiaNG9k6u82uzUN9Hh%2Ba&X-Amz-Signature=918330a65cea3e0bc584b9bbe6ef64bf6adb39fd2a0b3b699ecf606c13c22dd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW6PWXMX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDiuAjDCI%2BkeT0s2qAAlPUNwyZD%2BXPYKCmxtsRRxH0I9wIgRvXSKMMEXcc3jK3SiRZz0tQcwGG440Auarrry2wSwDIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDH89pmcg2V%2FrUzTylircAxij5ZS3Xci%2FV0jYod%2BLhcOXQdyglcX3mt2%2FZYV0A%2FhnR2z%2BUCnkqAjm0CwN3GwnzGCSXt0ZJY2i2PvvXq%2Bk8g3e64vtq4M0EHU3sdpcNlpFOJs9aggr3c7fSEiXojOY2Oq8ol5d3ApiS1XLowChMGx0tLIoURBe8XhLI1PRHp14a2Frp5Tjj9a5wd98tulLGxOt8C8hetE3Xe3lQH7Kmbo5xk4IyQdapQhn1BY6OhlsL1iH4iIc%2BVMNs8IL61m9vfdnuVgo7DoipWXwEbvY2qJNC%2FG02efTNEBHbsywv3JzdSmItjqRMgT6DQ6ZBp7zwDGe4P2T0e0B1Zw63RM6BX4AAlwPN0DQrJD1UBr%2BivWoVEBmlgaPLTi05yAyadRRNwe0HGVpJbhEmwpjr%2BQdI1JPhsVVUNfl%2B%2B5ApDBLFKZITF7P8BV98jg6FxlpyyPQTSfJZOPYu6%2B832xkeTJrIo%2BEyQQX7M2p4WKZHNnN7cveL528H2aril8%2BEuYlwLIe4ViZeP3gc1sTx1%2Ba8r0MvzfcmaA8zxoOzNCSSr9oCRW4%2Bznn6uiWxm5Gh%2FnnI0r4k6%2Fqg1ep8T2K1BfoRGEYKGHbVDS14T7ChvvQTN7t4gdWMiN0JLuWxfu%2B3biQMLXal8QGOqUBzmSnFPCPPsoI77Mjim1xo5rzLkKSioxVWLCMvS2qwAiVq07iqb1tE0lMr%2BcL4%2FGLb3gs5XUq5qAb9TvPbxAsopQGnS7MuyElFYxRFHc2CZg4Es5DCKroqxrgP6rIcL6NRd9%2BnpjipUoK3PgJPe9by085YvO3oc2uukWrj5A%2FFE0rAJO%2BLh5XDo4Mrqy64YY9oInmo0DqaiaNG9k6u82uzUN9Hh%2Ba&X-Amz-Signature=2b30556d19fcc3d52ae9c890b1ddb88fc88ef04dfdb7e23c7afec14985e471af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW6PWXMX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDiuAjDCI%2BkeT0s2qAAlPUNwyZD%2BXPYKCmxtsRRxH0I9wIgRvXSKMMEXcc3jK3SiRZz0tQcwGG440Auarrry2wSwDIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDH89pmcg2V%2FrUzTylircAxij5ZS3Xci%2FV0jYod%2BLhcOXQdyglcX3mt2%2FZYV0A%2FhnR2z%2BUCnkqAjm0CwN3GwnzGCSXt0ZJY2i2PvvXq%2Bk8g3e64vtq4M0EHU3sdpcNlpFOJs9aggr3c7fSEiXojOY2Oq8ol5d3ApiS1XLowChMGx0tLIoURBe8XhLI1PRHp14a2Frp5Tjj9a5wd98tulLGxOt8C8hetE3Xe3lQH7Kmbo5xk4IyQdapQhn1BY6OhlsL1iH4iIc%2BVMNs8IL61m9vfdnuVgo7DoipWXwEbvY2qJNC%2FG02efTNEBHbsywv3JzdSmItjqRMgT6DQ6ZBp7zwDGe4P2T0e0B1Zw63RM6BX4AAlwPN0DQrJD1UBr%2BivWoVEBmlgaPLTi05yAyadRRNwe0HGVpJbhEmwpjr%2BQdI1JPhsVVUNfl%2B%2B5ApDBLFKZITF7P8BV98jg6FxlpyyPQTSfJZOPYu6%2B832xkeTJrIo%2BEyQQX7M2p4WKZHNnN7cveL528H2aril8%2BEuYlwLIe4ViZeP3gc1sTx1%2Ba8r0MvzfcmaA8zxoOzNCSSr9oCRW4%2Bznn6uiWxm5Gh%2FnnI0r4k6%2Fqg1ep8T2K1BfoRGEYKGHbVDS14T7ChvvQTN7t4gdWMiN0JLuWxfu%2B3biQMLXal8QGOqUBzmSnFPCPPsoI77Mjim1xo5rzLkKSioxVWLCMvS2qwAiVq07iqb1tE0lMr%2BcL4%2FGLb3gs5XUq5qAb9TvPbxAsopQGnS7MuyElFYxRFHc2CZg4Es5DCKroqxrgP6rIcL6NRd9%2BnpjipUoK3PgJPe9by085YvO3oc2uukWrj5A%2FFE0rAJO%2BLh5XDo4Mrqy64YY9oInmo0DqaiaNG9k6u82uzUN9Hh%2Ba&X-Amz-Signature=979145950d20798fbf160796ddc7819775d99a5fd2b1646225d53cd59ec37792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW6PWXMX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDiuAjDCI%2BkeT0s2qAAlPUNwyZD%2BXPYKCmxtsRRxH0I9wIgRvXSKMMEXcc3jK3SiRZz0tQcwGG440Auarrry2wSwDIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDH89pmcg2V%2FrUzTylircAxij5ZS3Xci%2FV0jYod%2BLhcOXQdyglcX3mt2%2FZYV0A%2FhnR2z%2BUCnkqAjm0CwN3GwnzGCSXt0ZJY2i2PvvXq%2Bk8g3e64vtq4M0EHU3sdpcNlpFOJs9aggr3c7fSEiXojOY2Oq8ol5d3ApiS1XLowChMGx0tLIoURBe8XhLI1PRHp14a2Frp5Tjj9a5wd98tulLGxOt8C8hetE3Xe3lQH7Kmbo5xk4IyQdapQhn1BY6OhlsL1iH4iIc%2BVMNs8IL61m9vfdnuVgo7DoipWXwEbvY2qJNC%2FG02efTNEBHbsywv3JzdSmItjqRMgT6DQ6ZBp7zwDGe4P2T0e0B1Zw63RM6BX4AAlwPN0DQrJD1UBr%2BivWoVEBmlgaPLTi05yAyadRRNwe0HGVpJbhEmwpjr%2BQdI1JPhsVVUNfl%2B%2B5ApDBLFKZITF7P8BV98jg6FxlpyyPQTSfJZOPYu6%2B832xkeTJrIo%2BEyQQX7M2p4WKZHNnN7cveL528H2aril8%2BEuYlwLIe4ViZeP3gc1sTx1%2Ba8r0MvzfcmaA8zxoOzNCSSr9oCRW4%2Bznn6uiWxm5Gh%2FnnI0r4k6%2Fqg1ep8T2K1BfoRGEYKGHbVDS14T7ChvvQTN7t4gdWMiN0JLuWxfu%2B3biQMLXal8QGOqUBzmSnFPCPPsoI77Mjim1xo5rzLkKSioxVWLCMvS2qwAiVq07iqb1tE0lMr%2BcL4%2FGLb3gs5XUq5qAb9TvPbxAsopQGnS7MuyElFYxRFHc2CZg4Es5DCKroqxrgP6rIcL6NRd9%2BnpjipUoK3PgJPe9by085YvO3oc2uukWrj5A%2FFE0rAJO%2BLh5XDo4Mrqy64YY9oInmo0DqaiaNG9k6u82uzUN9Hh%2Ba&X-Amz-Signature=38c5db466d20e6f09cf201ccceb27a78d056e4ce2e53198347013a769f4c539b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW6PWXMX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDiuAjDCI%2BkeT0s2qAAlPUNwyZD%2BXPYKCmxtsRRxH0I9wIgRvXSKMMEXcc3jK3SiRZz0tQcwGG440Auarrry2wSwDIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDH89pmcg2V%2FrUzTylircAxij5ZS3Xci%2FV0jYod%2BLhcOXQdyglcX3mt2%2FZYV0A%2FhnR2z%2BUCnkqAjm0CwN3GwnzGCSXt0ZJY2i2PvvXq%2Bk8g3e64vtq4M0EHU3sdpcNlpFOJs9aggr3c7fSEiXojOY2Oq8ol5d3ApiS1XLowChMGx0tLIoURBe8XhLI1PRHp14a2Frp5Tjj9a5wd98tulLGxOt8C8hetE3Xe3lQH7Kmbo5xk4IyQdapQhn1BY6OhlsL1iH4iIc%2BVMNs8IL61m9vfdnuVgo7DoipWXwEbvY2qJNC%2FG02efTNEBHbsywv3JzdSmItjqRMgT6DQ6ZBp7zwDGe4P2T0e0B1Zw63RM6BX4AAlwPN0DQrJD1UBr%2BivWoVEBmlgaPLTi05yAyadRRNwe0HGVpJbhEmwpjr%2BQdI1JPhsVVUNfl%2B%2B5ApDBLFKZITF7P8BV98jg6FxlpyyPQTSfJZOPYu6%2B832xkeTJrIo%2BEyQQX7M2p4WKZHNnN7cveL528H2aril8%2BEuYlwLIe4ViZeP3gc1sTx1%2Ba8r0MvzfcmaA8zxoOzNCSSr9oCRW4%2Bznn6uiWxm5Gh%2FnnI0r4k6%2Fqg1ep8T2K1BfoRGEYKGHbVDS14T7ChvvQTN7t4gdWMiN0JLuWxfu%2B3biQMLXal8QGOqUBzmSnFPCPPsoI77Mjim1xo5rzLkKSioxVWLCMvS2qwAiVq07iqb1tE0lMr%2BcL4%2FGLb3gs5XUq5qAb9TvPbxAsopQGnS7MuyElFYxRFHc2CZg4Es5DCKroqxrgP6rIcL6NRd9%2BnpjipUoK3PgJPe9by085YvO3oc2uukWrj5A%2FFE0rAJO%2BLh5XDo4Mrqy64YY9oInmo0DqaiaNG9k6u82uzUN9Hh%2Ba&X-Amz-Signature=de9005e726cf629ea60ff49cc8c13e3f9d3f8932cbf70f082ba0f2a9d5c6e633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LSCQSVN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIA1kvP%2BJQiaxiFNcMlv6CKaI75LLbpEcgKWXWrP%2BbA%2BWAiBVLxKmzxV%2FO1ZuvYS8XQ03ylGAXEm254Ry03Ma1oyHOSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMntES1zQAdAH%2BSnxqKtwDDLwKmc4LnqXmPj2pf0eFVkHUnYhg10pOVb1TDFNvh1k475nZOubG3SW9LyjNyiuskTJDvbvbq9yXCOoTDa9PWRhLsX8f2Mqg6f3zxz6ZGmvMA6veXjiqV0ykJs3XgIk5jP2EYHaPTgKoVyZwrFNdY6smOt2m%2Ba620HZIjfC0yvdY9jJvF9XzULUXA74FbIdJi%2BJuGq5e4h6NBoNBIdiyi7F6DpOLa739hQgldPd5arsFiOSqMD7dzsDEPlJyISqTqJkwOH0nSsdKhdDKCYVPo3Ti4qMYNFpIPCH1LS4jqPP1HYwXqzUUgO0KJw2Of7b8zPFRgupOcjTweNry71wkLPG5z7fidUBJin1CnfPOtmcPAWa3%2FM425JFuIt5l8GpJwsm%2BCxH%2FDAh9NKaBiRN%2F1rHeC%2BD4AT%2BRcuJm11TeD77agG5VZcuMCC%2FXmbX7eh215tyXm%2FEe6raIX0B16c3V3a4%2F5oo8nLTFCAPh4MhcBDo4Qx0DInHadsytuUT4NivePijtKwK218hjbC9orOYAjGcL7%2FqvrvCQHQetOVDxNsgqg4mScQAAmw2gucnSCicWq3SqsnBpvk50T0XYYkNCaB1T7laE%2F%2FqghAu0yrNEVe5j32xiFOATRiZ%2Fzf8wuNiXxAY6pgHLYAQZOX2%2BdIpzm%2FfWqaqRZVJWrgcouuTvqdbf6%2BOmeKx44%2FEtt71n7cVEXnJ32pcr5selusM3HHn%2BlAUqrkymH5P%2B38l5MglunoPFPMXCiSayFvBP6nUU6EEYlXx5P2cMzcQcolcNy%2Fo9KfUvG2oQ3AFFiMikvdhGoTw8Smv0YWaWBD4Ckh5ARTJsEmz%2B1qYaIhB3ENLNoyUuhk7QXS5j8qNPZJod&X-Amz-Signature=723d0b95e4c0cdee14a023b7ee27da9e020bb18b0d053e516919ddcec68def02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW6PWXMX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDiuAjDCI%2BkeT0s2qAAlPUNwyZD%2BXPYKCmxtsRRxH0I9wIgRvXSKMMEXcc3jK3SiRZz0tQcwGG440Auarrry2wSwDIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDH89pmcg2V%2FrUzTylircAxij5ZS3Xci%2FV0jYod%2BLhcOXQdyglcX3mt2%2FZYV0A%2FhnR2z%2BUCnkqAjm0CwN3GwnzGCSXt0ZJY2i2PvvXq%2Bk8g3e64vtq4M0EHU3sdpcNlpFOJs9aggr3c7fSEiXojOY2Oq8ol5d3ApiS1XLowChMGx0tLIoURBe8XhLI1PRHp14a2Frp5Tjj9a5wd98tulLGxOt8C8hetE3Xe3lQH7Kmbo5xk4IyQdapQhn1BY6OhlsL1iH4iIc%2BVMNs8IL61m9vfdnuVgo7DoipWXwEbvY2qJNC%2FG02efTNEBHbsywv3JzdSmItjqRMgT6DQ6ZBp7zwDGe4P2T0e0B1Zw63RM6BX4AAlwPN0DQrJD1UBr%2BivWoVEBmlgaPLTi05yAyadRRNwe0HGVpJbhEmwpjr%2BQdI1JPhsVVUNfl%2B%2B5ApDBLFKZITF7P8BV98jg6FxlpyyPQTSfJZOPYu6%2B832xkeTJrIo%2BEyQQX7M2p4WKZHNnN7cveL528H2aril8%2BEuYlwLIe4ViZeP3gc1sTx1%2Ba8r0MvzfcmaA8zxoOzNCSSr9oCRW4%2Bznn6uiWxm5Gh%2FnnI0r4k6%2Fqg1ep8T2K1BfoRGEYKGHbVDS14T7ChvvQTN7t4gdWMiN0JLuWxfu%2B3biQMLXal8QGOqUBzmSnFPCPPsoI77Mjim1xo5rzLkKSioxVWLCMvS2qwAiVq07iqb1tE0lMr%2BcL4%2FGLb3gs5XUq5qAb9TvPbxAsopQGnS7MuyElFYxRFHc2CZg4Es5DCKroqxrgP6rIcL6NRd9%2BnpjipUoK3PgJPe9by085YvO3oc2uukWrj5A%2FFE0rAJO%2BLh5XDo4Mrqy64YY9oInmo0DqaiaNG9k6u82uzUN9Hh%2Ba&X-Amz-Signature=80ed491c0875de24b0f165abcad478a4b44efd589676a7c65f588ba1aeee553f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQGOOCY7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDzSyaRZA69DKV2M4QKd%2BKIBD%2FBeVHfarzpqDPEzdlRJwIhAJfwsXXfVIWSEAwn09Hdv00oqq6xJBz35HDeUP7HRhVDKv8DCHIQABoMNjM3NDIzMTgzODA1IgxIga7FQCrubwfTjn8q3AMuqO8Ub%2FoaEiKbjcyrwuCSH4C0QzX7rZxvFd0xr9TJ%2Fkpij0rhWF%2FbVJ1HokqJIcbStjMZlSVqKi6xTNXNOcc2OtrQtNoc8bsAPxzhEoJCTDWO%2FTyxBzUgt%2BU2gxe7QOycfXP1LSQPrjlMOzgMAu1qRt7DwM5Ayn2jxhWF5rMEkBt3%2B0r7BrjBg7Td7FsoP9z3S%2BjCN7e9px%2BQ4%2FTXG7X%2F5HUwPaIJ0zmqlh6HhjM1FyWVgzWPAoIRoFcLFcA74WzkxibNMhI64sHApKTlqeu1QLbbw9SzeF8rljASj1DkGGrazOWC8s6eqDRd%2Bk7fduJJwLsQx%2BCkyt%2BFK02mWwn0KMiv0BxcjzHiuHqqBoW8W9iB3mUkp1%2BlTwA0Sd06ly4tpXbsfXEER7RPJds5XdwKBt9ifXn4tA40hNMIC4WP%2BUwx2lOJdLTEfCNMZO6UZlCGAuzV4tnsN06yGUXDp%2Bzm%2FG8Cy%2B7OJRrDCw41Znfm%2B8YopN5WdL2%2FRQSVUUZ2DkyDh90FTYqVUJFUd%2FT1cs8e0hhX1Mj%2FVFKr%2FLY2aeu4cb%2Fvn0a3KQvBlgobQFipxSXmeAGXKTWD%2F1NhLVxsCTf1VsUYyBQcGCRFXSA7rW2GJKkip6Rxp2YS0UaluzC52JfEBjqkASgZjAQVpZSbQIZ8YmWyNcMEhCDxwN7jQu30A8rz8QsalE1uw8u6hUhWOczDU6cMWSRpDv%2FlCTcy7J7nKWms1ceEe9rLqRodKhnEMhBPtODcK4N988gG06ZgBRTwlQKpPUjBtv8tStlzM0XH%2Bqv5a8jSDfKLce0Tjbkqq3FshxdJ5TT7fme0MVNlvRBBVFJO8D0kS0FobGMu8Hw2hCS7mCVxXZGz&X-Amz-Signature=2430e5d1717ff12ee114b7d4b56b424b253cba30b53543b1ce8700505f56fd13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQGOOCY7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDzSyaRZA69DKV2M4QKd%2BKIBD%2FBeVHfarzpqDPEzdlRJwIhAJfwsXXfVIWSEAwn09Hdv00oqq6xJBz35HDeUP7HRhVDKv8DCHIQABoMNjM3NDIzMTgzODA1IgxIga7FQCrubwfTjn8q3AMuqO8Ub%2FoaEiKbjcyrwuCSH4C0QzX7rZxvFd0xr9TJ%2Fkpij0rhWF%2FbVJ1HokqJIcbStjMZlSVqKi6xTNXNOcc2OtrQtNoc8bsAPxzhEoJCTDWO%2FTyxBzUgt%2BU2gxe7QOycfXP1LSQPrjlMOzgMAu1qRt7DwM5Ayn2jxhWF5rMEkBt3%2B0r7BrjBg7Td7FsoP9z3S%2BjCN7e9px%2BQ4%2FTXG7X%2F5HUwPaIJ0zmqlh6HhjM1FyWVgzWPAoIRoFcLFcA74WzkxibNMhI64sHApKTlqeu1QLbbw9SzeF8rljASj1DkGGrazOWC8s6eqDRd%2Bk7fduJJwLsQx%2BCkyt%2BFK02mWwn0KMiv0BxcjzHiuHqqBoW8W9iB3mUkp1%2BlTwA0Sd06ly4tpXbsfXEER7RPJds5XdwKBt9ifXn4tA40hNMIC4WP%2BUwx2lOJdLTEfCNMZO6UZlCGAuzV4tnsN06yGUXDp%2Bzm%2FG8Cy%2B7OJRrDCw41Znfm%2B8YopN5WdL2%2FRQSVUUZ2DkyDh90FTYqVUJFUd%2FT1cs8e0hhX1Mj%2FVFKr%2FLY2aeu4cb%2Fvn0a3KQvBlgobQFipxSXmeAGXKTWD%2F1NhLVxsCTf1VsUYyBQcGCRFXSA7rW2GJKkip6Rxp2YS0UaluzC52JfEBjqkASgZjAQVpZSbQIZ8YmWyNcMEhCDxwN7jQu30A8rz8QsalE1uw8u6hUhWOczDU6cMWSRpDv%2FlCTcy7J7nKWms1ceEe9rLqRodKhnEMhBPtODcK4N988gG06ZgBRTwlQKpPUjBtv8tStlzM0XH%2Bqv5a8jSDfKLce0Tjbkqq3FshxdJ5TT7fme0MVNlvRBBVFJO8D0kS0FobGMu8Hw2hCS7mCVxXZGz&X-Amz-Signature=e21f84490c90b3bd659f4d1f7330dbdfeec9e00217c035895ad9a0f6c7605f54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQGOOCY7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDzSyaRZA69DKV2M4QKd%2BKIBD%2FBeVHfarzpqDPEzdlRJwIhAJfwsXXfVIWSEAwn09Hdv00oqq6xJBz35HDeUP7HRhVDKv8DCHIQABoMNjM3NDIzMTgzODA1IgxIga7FQCrubwfTjn8q3AMuqO8Ub%2FoaEiKbjcyrwuCSH4C0QzX7rZxvFd0xr9TJ%2Fkpij0rhWF%2FbVJ1HokqJIcbStjMZlSVqKi6xTNXNOcc2OtrQtNoc8bsAPxzhEoJCTDWO%2FTyxBzUgt%2BU2gxe7QOycfXP1LSQPrjlMOzgMAu1qRt7DwM5Ayn2jxhWF5rMEkBt3%2B0r7BrjBg7Td7FsoP9z3S%2BjCN7e9px%2BQ4%2FTXG7X%2F5HUwPaIJ0zmqlh6HhjM1FyWVgzWPAoIRoFcLFcA74WzkxibNMhI64sHApKTlqeu1QLbbw9SzeF8rljASj1DkGGrazOWC8s6eqDRd%2Bk7fduJJwLsQx%2BCkyt%2BFK02mWwn0KMiv0BxcjzHiuHqqBoW8W9iB3mUkp1%2BlTwA0Sd06ly4tpXbsfXEER7RPJds5XdwKBt9ifXn4tA40hNMIC4WP%2BUwx2lOJdLTEfCNMZO6UZlCGAuzV4tnsN06yGUXDp%2Bzm%2FG8Cy%2B7OJRrDCw41Znfm%2B8YopN5WdL2%2FRQSVUUZ2DkyDh90FTYqVUJFUd%2FT1cs8e0hhX1Mj%2FVFKr%2FLY2aeu4cb%2Fvn0a3KQvBlgobQFipxSXmeAGXKTWD%2F1NhLVxsCTf1VsUYyBQcGCRFXSA7rW2GJKkip6Rxp2YS0UaluzC52JfEBjqkASgZjAQVpZSbQIZ8YmWyNcMEhCDxwN7jQu30A8rz8QsalE1uw8u6hUhWOczDU6cMWSRpDv%2FlCTcy7J7nKWms1ceEe9rLqRodKhnEMhBPtODcK4N988gG06ZgBRTwlQKpPUjBtv8tStlzM0XH%2Bqv5a8jSDfKLce0Tjbkqq3FshxdJ5TT7fme0MVNlvRBBVFJO8D0kS0FobGMu8Hw2hCS7mCVxXZGz&X-Amz-Signature=57e32bd5297a2d748ff868121840ca2c13c0f56684df8f76f2a907fb89bbbee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQGOOCY7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDzSyaRZA69DKV2M4QKd%2BKIBD%2FBeVHfarzpqDPEzdlRJwIhAJfwsXXfVIWSEAwn09Hdv00oqq6xJBz35HDeUP7HRhVDKv8DCHIQABoMNjM3NDIzMTgzODA1IgxIga7FQCrubwfTjn8q3AMuqO8Ub%2FoaEiKbjcyrwuCSH4C0QzX7rZxvFd0xr9TJ%2Fkpij0rhWF%2FbVJ1HokqJIcbStjMZlSVqKi6xTNXNOcc2OtrQtNoc8bsAPxzhEoJCTDWO%2FTyxBzUgt%2BU2gxe7QOycfXP1LSQPrjlMOzgMAu1qRt7DwM5Ayn2jxhWF5rMEkBt3%2B0r7BrjBg7Td7FsoP9z3S%2BjCN7e9px%2BQ4%2FTXG7X%2F5HUwPaIJ0zmqlh6HhjM1FyWVgzWPAoIRoFcLFcA74WzkxibNMhI64sHApKTlqeu1QLbbw9SzeF8rljASj1DkGGrazOWC8s6eqDRd%2Bk7fduJJwLsQx%2BCkyt%2BFK02mWwn0KMiv0BxcjzHiuHqqBoW8W9iB3mUkp1%2BlTwA0Sd06ly4tpXbsfXEER7RPJds5XdwKBt9ifXn4tA40hNMIC4WP%2BUwx2lOJdLTEfCNMZO6UZlCGAuzV4tnsN06yGUXDp%2Bzm%2FG8Cy%2B7OJRrDCw41Znfm%2B8YopN5WdL2%2FRQSVUUZ2DkyDh90FTYqVUJFUd%2FT1cs8e0hhX1Mj%2FVFKr%2FLY2aeu4cb%2Fvn0a3KQvBlgobQFipxSXmeAGXKTWD%2F1NhLVxsCTf1VsUYyBQcGCRFXSA7rW2GJKkip6Rxp2YS0UaluzC52JfEBjqkASgZjAQVpZSbQIZ8YmWyNcMEhCDxwN7jQu30A8rz8QsalE1uw8u6hUhWOczDU6cMWSRpDv%2FlCTcy7J7nKWms1ceEe9rLqRodKhnEMhBPtODcK4N988gG06ZgBRTwlQKpPUjBtv8tStlzM0XH%2Bqv5a8jSDfKLce0Tjbkqq3FshxdJ5TT7fme0MVNlvRBBVFJO8D0kS0FobGMu8Hw2hCS7mCVxXZGz&X-Amz-Signature=115d4129e719af6928fe480830997907b4608abb82586e5bb520067e5d272e58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQGOOCY7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDzSyaRZA69DKV2M4QKd%2BKIBD%2FBeVHfarzpqDPEzdlRJwIhAJfwsXXfVIWSEAwn09Hdv00oqq6xJBz35HDeUP7HRhVDKv8DCHIQABoMNjM3NDIzMTgzODA1IgxIga7FQCrubwfTjn8q3AMuqO8Ub%2FoaEiKbjcyrwuCSH4C0QzX7rZxvFd0xr9TJ%2Fkpij0rhWF%2FbVJ1HokqJIcbStjMZlSVqKi6xTNXNOcc2OtrQtNoc8bsAPxzhEoJCTDWO%2FTyxBzUgt%2BU2gxe7QOycfXP1LSQPrjlMOzgMAu1qRt7DwM5Ayn2jxhWF5rMEkBt3%2B0r7BrjBg7Td7FsoP9z3S%2BjCN7e9px%2BQ4%2FTXG7X%2F5HUwPaIJ0zmqlh6HhjM1FyWVgzWPAoIRoFcLFcA74WzkxibNMhI64sHApKTlqeu1QLbbw9SzeF8rljASj1DkGGrazOWC8s6eqDRd%2Bk7fduJJwLsQx%2BCkyt%2BFK02mWwn0KMiv0BxcjzHiuHqqBoW8W9iB3mUkp1%2BlTwA0Sd06ly4tpXbsfXEER7RPJds5XdwKBt9ifXn4tA40hNMIC4WP%2BUwx2lOJdLTEfCNMZO6UZlCGAuzV4tnsN06yGUXDp%2Bzm%2FG8Cy%2B7OJRrDCw41Znfm%2B8YopN5WdL2%2FRQSVUUZ2DkyDh90FTYqVUJFUd%2FT1cs8e0hhX1Mj%2FVFKr%2FLY2aeu4cb%2Fvn0a3KQvBlgobQFipxSXmeAGXKTWD%2F1NhLVxsCTf1VsUYyBQcGCRFXSA7rW2GJKkip6Rxp2YS0UaluzC52JfEBjqkASgZjAQVpZSbQIZ8YmWyNcMEhCDxwN7jQu30A8rz8QsalE1uw8u6hUhWOczDU6cMWSRpDv%2FlCTcy7J7nKWms1ceEe9rLqRodKhnEMhBPtODcK4N988gG06ZgBRTwlQKpPUjBtv8tStlzM0XH%2Bqv5a8jSDfKLce0Tjbkqq3FshxdJ5TT7fme0MVNlvRBBVFJO8D0kS0FobGMu8Hw2hCS7mCVxXZGz&X-Amz-Signature=92747be4162696b147aaff55a03749b9b69a9e3ca3e514d7667306f59af10d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQGOOCY7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDzSyaRZA69DKV2M4QKd%2BKIBD%2FBeVHfarzpqDPEzdlRJwIhAJfwsXXfVIWSEAwn09Hdv00oqq6xJBz35HDeUP7HRhVDKv8DCHIQABoMNjM3NDIzMTgzODA1IgxIga7FQCrubwfTjn8q3AMuqO8Ub%2FoaEiKbjcyrwuCSH4C0QzX7rZxvFd0xr9TJ%2Fkpij0rhWF%2FbVJ1HokqJIcbStjMZlSVqKi6xTNXNOcc2OtrQtNoc8bsAPxzhEoJCTDWO%2FTyxBzUgt%2BU2gxe7QOycfXP1LSQPrjlMOzgMAu1qRt7DwM5Ayn2jxhWF5rMEkBt3%2B0r7BrjBg7Td7FsoP9z3S%2BjCN7e9px%2BQ4%2FTXG7X%2F5HUwPaIJ0zmqlh6HhjM1FyWVgzWPAoIRoFcLFcA74WzkxibNMhI64sHApKTlqeu1QLbbw9SzeF8rljASj1DkGGrazOWC8s6eqDRd%2Bk7fduJJwLsQx%2BCkyt%2BFK02mWwn0KMiv0BxcjzHiuHqqBoW8W9iB3mUkp1%2BlTwA0Sd06ly4tpXbsfXEER7RPJds5XdwKBt9ifXn4tA40hNMIC4WP%2BUwx2lOJdLTEfCNMZO6UZlCGAuzV4tnsN06yGUXDp%2Bzm%2FG8Cy%2B7OJRrDCw41Znfm%2B8YopN5WdL2%2FRQSVUUZ2DkyDh90FTYqVUJFUd%2FT1cs8e0hhX1Mj%2FVFKr%2FLY2aeu4cb%2Fvn0a3KQvBlgobQFipxSXmeAGXKTWD%2F1NhLVxsCTf1VsUYyBQcGCRFXSA7rW2GJKkip6Rxp2YS0UaluzC52JfEBjqkASgZjAQVpZSbQIZ8YmWyNcMEhCDxwN7jQu30A8rz8QsalE1uw8u6hUhWOczDU6cMWSRpDv%2FlCTcy7J7nKWms1ceEe9rLqRodKhnEMhBPtODcK4N988gG06ZgBRTwlQKpPUjBtv8tStlzM0XH%2Bqv5a8jSDfKLce0Tjbkqq3FshxdJ5TT7fme0MVNlvRBBVFJO8D0kS0FobGMu8Hw2hCS7mCVxXZGz&X-Amz-Signature=1ea313c851123ecff983ac64feffda10efa504607a629fd729789b90b6ccdf69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQGOOCY7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDzSyaRZA69DKV2M4QKd%2BKIBD%2FBeVHfarzpqDPEzdlRJwIhAJfwsXXfVIWSEAwn09Hdv00oqq6xJBz35HDeUP7HRhVDKv8DCHIQABoMNjM3NDIzMTgzODA1IgxIga7FQCrubwfTjn8q3AMuqO8Ub%2FoaEiKbjcyrwuCSH4C0QzX7rZxvFd0xr9TJ%2Fkpij0rhWF%2FbVJ1HokqJIcbStjMZlSVqKi6xTNXNOcc2OtrQtNoc8bsAPxzhEoJCTDWO%2FTyxBzUgt%2BU2gxe7QOycfXP1LSQPrjlMOzgMAu1qRt7DwM5Ayn2jxhWF5rMEkBt3%2B0r7BrjBg7Td7FsoP9z3S%2BjCN7e9px%2BQ4%2FTXG7X%2F5HUwPaIJ0zmqlh6HhjM1FyWVgzWPAoIRoFcLFcA74WzkxibNMhI64sHApKTlqeu1QLbbw9SzeF8rljASj1DkGGrazOWC8s6eqDRd%2Bk7fduJJwLsQx%2BCkyt%2BFK02mWwn0KMiv0BxcjzHiuHqqBoW8W9iB3mUkp1%2BlTwA0Sd06ly4tpXbsfXEER7RPJds5XdwKBt9ifXn4tA40hNMIC4WP%2BUwx2lOJdLTEfCNMZO6UZlCGAuzV4tnsN06yGUXDp%2Bzm%2FG8Cy%2B7OJRrDCw41Znfm%2B8YopN5WdL2%2FRQSVUUZ2DkyDh90FTYqVUJFUd%2FT1cs8e0hhX1Mj%2FVFKr%2FLY2aeu4cb%2Fvn0a3KQvBlgobQFipxSXmeAGXKTWD%2F1NhLVxsCTf1VsUYyBQcGCRFXSA7rW2GJKkip6Rxp2YS0UaluzC52JfEBjqkASgZjAQVpZSbQIZ8YmWyNcMEhCDxwN7jQu30A8rz8QsalE1uw8u6hUhWOczDU6cMWSRpDv%2FlCTcy7J7nKWms1ceEe9rLqRodKhnEMhBPtODcK4N988gG06ZgBRTwlQKpPUjBtv8tStlzM0XH%2Bqv5a8jSDfKLce0Tjbkqq3FshxdJ5TT7fme0MVNlvRBBVFJO8D0kS0FobGMu8Hw2hCS7mCVxXZGz&X-Amz-Signature=d4a5f583b7dda8adfb457cad79f98a99821689acf7bac175aea019302cbae7cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
