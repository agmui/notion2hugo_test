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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDQWY65I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPT04FebvBT9RUCAhdGdY9W8NbcOpf3B9mLSc6yVnh6AiEA88JWPKZaYFaKPyb1Xo1yPr2wcWVFdddaekJP9DF2yAYqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtp4OwWQnLZ2EsX9yrcA3pUkE8HCtLdUVpYOOtm%2BG7gyCSb%2Fiaj72yG17JSVSN7xt3wBJOGmPlDBaHwzBUnkukdfRRs8J4VeWynA8S4yUad0fhnUyxqto0zRZYHFQfLYWGf%2BpaHWujAClrHvZena4ecIHBrUCMw9i2LnW3K7X15dFzFK4N%2FLZzzCmF1qiftJElIvl8kRhKFQBYsFttKPKJgbswwN%2BXJapjSV4T1gpfWoezQ4qln%2BN6NI%2BMvzkv0JnJqsVfcdgg1S8DLXGEdJMB%2BerAYC1dqsEDKxO8MFlZQfTYSp6YWib9USMyq%2BY2c4ImYTI%2BXTQJTiJxBN7eP03hDt%2BGZHatlP2llY24PHTZoo59mHNktEmL1evFLBJUhGoTe%2FkmCRNsuzlcWpw0KwpHpHZ67C%2FynqlL5yuCVRt1eKobfPPvw2lZ6O4TYFYdFIj3kva1Q2Bff2o4VWTD3Bm%2F4DU5YJyEXxjb8hyDpOmhQRU7yClRCojK%2BX9RIwJHaXtxJXXEF2GoNxRsu0d42oeY0aXFE2FreV%2FqRWWnG%2Boh6mV3yDBRMbpZtcfkbBkttt2Gxo8L%2Bbxd%2BmegLgQEO8B0kJaWh7SaMbsmQnF1F3JEmMCJZdJdi%2Fz7JXOQ5s4H2aMyBphw8d6%2BfTwopMMWarMQGOqUByW%2FOc8ZzEpSCJ1iqrLvU3SPfdMYOfblFZHSu6RVBMnjQwOzhrH2nm%2BzNd2IkvKzJIF8TwHPTyGqoOqW7TlxTpNcDaorYFyCyR%2B%2B%2BB4iMtuFjzPuy%2F4xrL%2FFHr20pokH5LtoB7nmqRbJKaiBLIAeJEfe%2FFCkoVVLkkMeHhbE6ufsrrihgxEmaYVL0%2FNXao1FmdYjn1ERI7HuMaFKEA9n1FntN2lvf&X-Amz-Signature=f09c4c7a84ca3a8186030abef0917c5ac2908c892d1bd10d7ce5e543f24de357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDQWY65I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPT04FebvBT9RUCAhdGdY9W8NbcOpf3B9mLSc6yVnh6AiEA88JWPKZaYFaKPyb1Xo1yPr2wcWVFdddaekJP9DF2yAYqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtp4OwWQnLZ2EsX9yrcA3pUkE8HCtLdUVpYOOtm%2BG7gyCSb%2Fiaj72yG17JSVSN7xt3wBJOGmPlDBaHwzBUnkukdfRRs8J4VeWynA8S4yUad0fhnUyxqto0zRZYHFQfLYWGf%2BpaHWujAClrHvZena4ecIHBrUCMw9i2LnW3K7X15dFzFK4N%2FLZzzCmF1qiftJElIvl8kRhKFQBYsFttKPKJgbswwN%2BXJapjSV4T1gpfWoezQ4qln%2BN6NI%2BMvzkv0JnJqsVfcdgg1S8DLXGEdJMB%2BerAYC1dqsEDKxO8MFlZQfTYSp6YWib9USMyq%2BY2c4ImYTI%2BXTQJTiJxBN7eP03hDt%2BGZHatlP2llY24PHTZoo59mHNktEmL1evFLBJUhGoTe%2FkmCRNsuzlcWpw0KwpHpHZ67C%2FynqlL5yuCVRt1eKobfPPvw2lZ6O4TYFYdFIj3kva1Q2Bff2o4VWTD3Bm%2F4DU5YJyEXxjb8hyDpOmhQRU7yClRCojK%2BX9RIwJHaXtxJXXEF2GoNxRsu0d42oeY0aXFE2FreV%2FqRWWnG%2Boh6mV3yDBRMbpZtcfkbBkttt2Gxo8L%2Bbxd%2BmegLgQEO8B0kJaWh7SaMbsmQnF1F3JEmMCJZdJdi%2Fz7JXOQ5s4H2aMyBphw8d6%2BfTwopMMWarMQGOqUByW%2FOc8ZzEpSCJ1iqrLvU3SPfdMYOfblFZHSu6RVBMnjQwOzhrH2nm%2BzNd2IkvKzJIF8TwHPTyGqoOqW7TlxTpNcDaorYFyCyR%2B%2B%2BB4iMtuFjzPuy%2F4xrL%2FFHr20pokH5LtoB7nmqRbJKaiBLIAeJEfe%2FFCkoVVLkkMeHhbE6ufsrrihgxEmaYVL0%2FNXao1FmdYjn1ERI7HuMaFKEA9n1FntN2lvf&X-Amz-Signature=575c4b4d30c8084f81daf40ca0524a02fa414d2bdeb0ece4f529aab46fa71c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDQWY65I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPT04FebvBT9RUCAhdGdY9W8NbcOpf3B9mLSc6yVnh6AiEA88JWPKZaYFaKPyb1Xo1yPr2wcWVFdddaekJP9DF2yAYqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtp4OwWQnLZ2EsX9yrcA3pUkE8HCtLdUVpYOOtm%2BG7gyCSb%2Fiaj72yG17JSVSN7xt3wBJOGmPlDBaHwzBUnkukdfRRs8J4VeWynA8S4yUad0fhnUyxqto0zRZYHFQfLYWGf%2BpaHWujAClrHvZena4ecIHBrUCMw9i2LnW3K7X15dFzFK4N%2FLZzzCmF1qiftJElIvl8kRhKFQBYsFttKPKJgbswwN%2BXJapjSV4T1gpfWoezQ4qln%2BN6NI%2BMvzkv0JnJqsVfcdgg1S8DLXGEdJMB%2BerAYC1dqsEDKxO8MFlZQfTYSp6YWib9USMyq%2BY2c4ImYTI%2BXTQJTiJxBN7eP03hDt%2BGZHatlP2llY24PHTZoo59mHNktEmL1evFLBJUhGoTe%2FkmCRNsuzlcWpw0KwpHpHZ67C%2FynqlL5yuCVRt1eKobfPPvw2lZ6O4TYFYdFIj3kva1Q2Bff2o4VWTD3Bm%2F4DU5YJyEXxjb8hyDpOmhQRU7yClRCojK%2BX9RIwJHaXtxJXXEF2GoNxRsu0d42oeY0aXFE2FreV%2FqRWWnG%2Boh6mV3yDBRMbpZtcfkbBkttt2Gxo8L%2Bbxd%2BmegLgQEO8B0kJaWh7SaMbsmQnF1F3JEmMCJZdJdi%2Fz7JXOQ5s4H2aMyBphw8d6%2BfTwopMMWarMQGOqUByW%2FOc8ZzEpSCJ1iqrLvU3SPfdMYOfblFZHSu6RVBMnjQwOzhrH2nm%2BzNd2IkvKzJIF8TwHPTyGqoOqW7TlxTpNcDaorYFyCyR%2B%2B%2BB4iMtuFjzPuy%2F4xrL%2FFHr20pokH5LtoB7nmqRbJKaiBLIAeJEfe%2FFCkoVVLkkMeHhbE6ufsrrihgxEmaYVL0%2FNXao1FmdYjn1ERI7HuMaFKEA9n1FntN2lvf&X-Amz-Signature=bb66c6c5c2623d1339a003e341883c728cfb0de4bebd6fbb50bcedfafcde079e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDQWY65I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPT04FebvBT9RUCAhdGdY9W8NbcOpf3B9mLSc6yVnh6AiEA88JWPKZaYFaKPyb1Xo1yPr2wcWVFdddaekJP9DF2yAYqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtp4OwWQnLZ2EsX9yrcA3pUkE8HCtLdUVpYOOtm%2BG7gyCSb%2Fiaj72yG17JSVSN7xt3wBJOGmPlDBaHwzBUnkukdfRRs8J4VeWynA8S4yUad0fhnUyxqto0zRZYHFQfLYWGf%2BpaHWujAClrHvZena4ecIHBrUCMw9i2LnW3K7X15dFzFK4N%2FLZzzCmF1qiftJElIvl8kRhKFQBYsFttKPKJgbswwN%2BXJapjSV4T1gpfWoezQ4qln%2BN6NI%2BMvzkv0JnJqsVfcdgg1S8DLXGEdJMB%2BerAYC1dqsEDKxO8MFlZQfTYSp6YWib9USMyq%2BY2c4ImYTI%2BXTQJTiJxBN7eP03hDt%2BGZHatlP2llY24PHTZoo59mHNktEmL1evFLBJUhGoTe%2FkmCRNsuzlcWpw0KwpHpHZ67C%2FynqlL5yuCVRt1eKobfPPvw2lZ6O4TYFYdFIj3kva1Q2Bff2o4VWTD3Bm%2F4DU5YJyEXxjb8hyDpOmhQRU7yClRCojK%2BX9RIwJHaXtxJXXEF2GoNxRsu0d42oeY0aXFE2FreV%2FqRWWnG%2Boh6mV3yDBRMbpZtcfkbBkttt2Gxo8L%2Bbxd%2BmegLgQEO8B0kJaWh7SaMbsmQnF1F3JEmMCJZdJdi%2Fz7JXOQ5s4H2aMyBphw8d6%2BfTwopMMWarMQGOqUByW%2FOc8ZzEpSCJ1iqrLvU3SPfdMYOfblFZHSu6RVBMnjQwOzhrH2nm%2BzNd2IkvKzJIF8TwHPTyGqoOqW7TlxTpNcDaorYFyCyR%2B%2B%2BB4iMtuFjzPuy%2F4xrL%2FFHr20pokH5LtoB7nmqRbJKaiBLIAeJEfe%2FFCkoVVLkkMeHhbE6ufsrrihgxEmaYVL0%2FNXao1FmdYjn1ERI7HuMaFKEA9n1FntN2lvf&X-Amz-Signature=c9ba73d5f149ad4c03f5c8830c7d04e0519680b3e089f4923f456a663b8a80d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDQWY65I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPT04FebvBT9RUCAhdGdY9W8NbcOpf3B9mLSc6yVnh6AiEA88JWPKZaYFaKPyb1Xo1yPr2wcWVFdddaekJP9DF2yAYqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtp4OwWQnLZ2EsX9yrcA3pUkE8HCtLdUVpYOOtm%2BG7gyCSb%2Fiaj72yG17JSVSN7xt3wBJOGmPlDBaHwzBUnkukdfRRs8J4VeWynA8S4yUad0fhnUyxqto0zRZYHFQfLYWGf%2BpaHWujAClrHvZena4ecIHBrUCMw9i2LnW3K7X15dFzFK4N%2FLZzzCmF1qiftJElIvl8kRhKFQBYsFttKPKJgbswwN%2BXJapjSV4T1gpfWoezQ4qln%2BN6NI%2BMvzkv0JnJqsVfcdgg1S8DLXGEdJMB%2BerAYC1dqsEDKxO8MFlZQfTYSp6YWib9USMyq%2BY2c4ImYTI%2BXTQJTiJxBN7eP03hDt%2BGZHatlP2llY24PHTZoo59mHNktEmL1evFLBJUhGoTe%2FkmCRNsuzlcWpw0KwpHpHZ67C%2FynqlL5yuCVRt1eKobfPPvw2lZ6O4TYFYdFIj3kva1Q2Bff2o4VWTD3Bm%2F4DU5YJyEXxjb8hyDpOmhQRU7yClRCojK%2BX9RIwJHaXtxJXXEF2GoNxRsu0d42oeY0aXFE2FreV%2FqRWWnG%2Boh6mV3yDBRMbpZtcfkbBkttt2Gxo8L%2Bbxd%2BmegLgQEO8B0kJaWh7SaMbsmQnF1F3JEmMCJZdJdi%2Fz7JXOQ5s4H2aMyBphw8d6%2BfTwopMMWarMQGOqUByW%2FOc8ZzEpSCJ1iqrLvU3SPfdMYOfblFZHSu6RVBMnjQwOzhrH2nm%2BzNd2IkvKzJIF8TwHPTyGqoOqW7TlxTpNcDaorYFyCyR%2B%2B%2BB4iMtuFjzPuy%2F4xrL%2FFHr20pokH5LtoB7nmqRbJKaiBLIAeJEfe%2FFCkoVVLkkMeHhbE6ufsrrihgxEmaYVL0%2FNXao1FmdYjn1ERI7HuMaFKEA9n1FntN2lvf&X-Amz-Signature=6f1eaad7c006c4d4c981fa3b71c7e1703fb523fec197060e0ab0ccd58df459f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDQWY65I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPT04FebvBT9RUCAhdGdY9W8NbcOpf3B9mLSc6yVnh6AiEA88JWPKZaYFaKPyb1Xo1yPr2wcWVFdddaekJP9DF2yAYqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtp4OwWQnLZ2EsX9yrcA3pUkE8HCtLdUVpYOOtm%2BG7gyCSb%2Fiaj72yG17JSVSN7xt3wBJOGmPlDBaHwzBUnkukdfRRs8J4VeWynA8S4yUad0fhnUyxqto0zRZYHFQfLYWGf%2BpaHWujAClrHvZena4ecIHBrUCMw9i2LnW3K7X15dFzFK4N%2FLZzzCmF1qiftJElIvl8kRhKFQBYsFttKPKJgbswwN%2BXJapjSV4T1gpfWoezQ4qln%2BN6NI%2BMvzkv0JnJqsVfcdgg1S8DLXGEdJMB%2BerAYC1dqsEDKxO8MFlZQfTYSp6YWib9USMyq%2BY2c4ImYTI%2BXTQJTiJxBN7eP03hDt%2BGZHatlP2llY24PHTZoo59mHNktEmL1evFLBJUhGoTe%2FkmCRNsuzlcWpw0KwpHpHZ67C%2FynqlL5yuCVRt1eKobfPPvw2lZ6O4TYFYdFIj3kva1Q2Bff2o4VWTD3Bm%2F4DU5YJyEXxjb8hyDpOmhQRU7yClRCojK%2BX9RIwJHaXtxJXXEF2GoNxRsu0d42oeY0aXFE2FreV%2FqRWWnG%2Boh6mV3yDBRMbpZtcfkbBkttt2Gxo8L%2Bbxd%2BmegLgQEO8B0kJaWh7SaMbsmQnF1F3JEmMCJZdJdi%2Fz7JXOQ5s4H2aMyBphw8d6%2BfTwopMMWarMQGOqUByW%2FOc8ZzEpSCJ1iqrLvU3SPfdMYOfblFZHSu6RVBMnjQwOzhrH2nm%2BzNd2IkvKzJIF8TwHPTyGqoOqW7TlxTpNcDaorYFyCyR%2B%2B%2BB4iMtuFjzPuy%2F4xrL%2FFHr20pokH5LtoB7nmqRbJKaiBLIAeJEfe%2FFCkoVVLkkMeHhbE6ufsrrihgxEmaYVL0%2FNXao1FmdYjn1ERI7HuMaFKEA9n1FntN2lvf&X-Amz-Signature=c25423aa9b5233edd00908da4edf10451988931b5e7966c21329311baba8fe03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDQWY65I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPT04FebvBT9RUCAhdGdY9W8NbcOpf3B9mLSc6yVnh6AiEA88JWPKZaYFaKPyb1Xo1yPr2wcWVFdddaekJP9DF2yAYqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtp4OwWQnLZ2EsX9yrcA3pUkE8HCtLdUVpYOOtm%2BG7gyCSb%2Fiaj72yG17JSVSN7xt3wBJOGmPlDBaHwzBUnkukdfRRs8J4VeWynA8S4yUad0fhnUyxqto0zRZYHFQfLYWGf%2BpaHWujAClrHvZena4ecIHBrUCMw9i2LnW3K7X15dFzFK4N%2FLZzzCmF1qiftJElIvl8kRhKFQBYsFttKPKJgbswwN%2BXJapjSV4T1gpfWoezQ4qln%2BN6NI%2BMvzkv0JnJqsVfcdgg1S8DLXGEdJMB%2BerAYC1dqsEDKxO8MFlZQfTYSp6YWib9USMyq%2BY2c4ImYTI%2BXTQJTiJxBN7eP03hDt%2BGZHatlP2llY24PHTZoo59mHNktEmL1evFLBJUhGoTe%2FkmCRNsuzlcWpw0KwpHpHZ67C%2FynqlL5yuCVRt1eKobfPPvw2lZ6O4TYFYdFIj3kva1Q2Bff2o4VWTD3Bm%2F4DU5YJyEXxjb8hyDpOmhQRU7yClRCojK%2BX9RIwJHaXtxJXXEF2GoNxRsu0d42oeY0aXFE2FreV%2FqRWWnG%2Boh6mV3yDBRMbpZtcfkbBkttt2Gxo8L%2Bbxd%2BmegLgQEO8B0kJaWh7SaMbsmQnF1F3JEmMCJZdJdi%2Fz7JXOQ5s4H2aMyBphw8d6%2BfTwopMMWarMQGOqUByW%2FOc8ZzEpSCJ1iqrLvU3SPfdMYOfblFZHSu6RVBMnjQwOzhrH2nm%2BzNd2IkvKzJIF8TwHPTyGqoOqW7TlxTpNcDaorYFyCyR%2B%2B%2BB4iMtuFjzPuy%2F4xrL%2FFHr20pokH5LtoB7nmqRbJKaiBLIAeJEfe%2FFCkoVVLkkMeHhbE6ufsrrihgxEmaYVL0%2FNXao1FmdYjn1ERI7HuMaFKEA9n1FntN2lvf&X-Amz-Signature=4e67d7348075cae1358e21575f38bd200af7a59b8d62fcb5054a6cf155390b9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDQWY65I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPT04FebvBT9RUCAhdGdY9W8NbcOpf3B9mLSc6yVnh6AiEA88JWPKZaYFaKPyb1Xo1yPr2wcWVFdddaekJP9DF2yAYqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtp4OwWQnLZ2EsX9yrcA3pUkE8HCtLdUVpYOOtm%2BG7gyCSb%2Fiaj72yG17JSVSN7xt3wBJOGmPlDBaHwzBUnkukdfRRs8J4VeWynA8S4yUad0fhnUyxqto0zRZYHFQfLYWGf%2BpaHWujAClrHvZena4ecIHBrUCMw9i2LnW3K7X15dFzFK4N%2FLZzzCmF1qiftJElIvl8kRhKFQBYsFttKPKJgbswwN%2BXJapjSV4T1gpfWoezQ4qln%2BN6NI%2BMvzkv0JnJqsVfcdgg1S8DLXGEdJMB%2BerAYC1dqsEDKxO8MFlZQfTYSp6YWib9USMyq%2BY2c4ImYTI%2BXTQJTiJxBN7eP03hDt%2BGZHatlP2llY24PHTZoo59mHNktEmL1evFLBJUhGoTe%2FkmCRNsuzlcWpw0KwpHpHZ67C%2FynqlL5yuCVRt1eKobfPPvw2lZ6O4TYFYdFIj3kva1Q2Bff2o4VWTD3Bm%2F4DU5YJyEXxjb8hyDpOmhQRU7yClRCojK%2BX9RIwJHaXtxJXXEF2GoNxRsu0d42oeY0aXFE2FreV%2FqRWWnG%2Boh6mV3yDBRMbpZtcfkbBkttt2Gxo8L%2Bbxd%2BmegLgQEO8B0kJaWh7SaMbsmQnF1F3JEmMCJZdJdi%2Fz7JXOQ5s4H2aMyBphw8d6%2BfTwopMMWarMQGOqUByW%2FOc8ZzEpSCJ1iqrLvU3SPfdMYOfblFZHSu6RVBMnjQwOzhrH2nm%2BzNd2IkvKzJIF8TwHPTyGqoOqW7TlxTpNcDaorYFyCyR%2B%2B%2BB4iMtuFjzPuy%2F4xrL%2FFHr20pokH5LtoB7nmqRbJKaiBLIAeJEfe%2FFCkoVVLkkMeHhbE6ufsrrihgxEmaYVL0%2FNXao1FmdYjn1ERI7HuMaFKEA9n1FntN2lvf&X-Amz-Signature=b7ac3cdcb4c9a5201e168c66a315b8fb21c9ac3ddb7419e53e7c9f44b729af25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDQWY65I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPT04FebvBT9RUCAhdGdY9W8NbcOpf3B9mLSc6yVnh6AiEA88JWPKZaYFaKPyb1Xo1yPr2wcWVFdddaekJP9DF2yAYqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtp4OwWQnLZ2EsX9yrcA3pUkE8HCtLdUVpYOOtm%2BG7gyCSb%2Fiaj72yG17JSVSN7xt3wBJOGmPlDBaHwzBUnkukdfRRs8J4VeWynA8S4yUad0fhnUyxqto0zRZYHFQfLYWGf%2BpaHWujAClrHvZena4ecIHBrUCMw9i2LnW3K7X15dFzFK4N%2FLZzzCmF1qiftJElIvl8kRhKFQBYsFttKPKJgbswwN%2BXJapjSV4T1gpfWoezQ4qln%2BN6NI%2BMvzkv0JnJqsVfcdgg1S8DLXGEdJMB%2BerAYC1dqsEDKxO8MFlZQfTYSp6YWib9USMyq%2BY2c4ImYTI%2BXTQJTiJxBN7eP03hDt%2BGZHatlP2llY24PHTZoo59mHNktEmL1evFLBJUhGoTe%2FkmCRNsuzlcWpw0KwpHpHZ67C%2FynqlL5yuCVRt1eKobfPPvw2lZ6O4TYFYdFIj3kva1Q2Bff2o4VWTD3Bm%2F4DU5YJyEXxjb8hyDpOmhQRU7yClRCojK%2BX9RIwJHaXtxJXXEF2GoNxRsu0d42oeY0aXFE2FreV%2FqRWWnG%2Boh6mV3yDBRMbpZtcfkbBkttt2Gxo8L%2Bbxd%2BmegLgQEO8B0kJaWh7SaMbsmQnF1F3JEmMCJZdJdi%2Fz7JXOQ5s4H2aMyBphw8d6%2BfTwopMMWarMQGOqUByW%2FOc8ZzEpSCJ1iqrLvU3SPfdMYOfblFZHSu6RVBMnjQwOzhrH2nm%2BzNd2IkvKzJIF8TwHPTyGqoOqW7TlxTpNcDaorYFyCyR%2B%2B%2BB4iMtuFjzPuy%2F4xrL%2FFHr20pokH5LtoB7nmqRbJKaiBLIAeJEfe%2FFCkoVVLkkMeHhbE6ufsrrihgxEmaYVL0%2FNXao1FmdYjn1ERI7HuMaFKEA9n1FntN2lvf&X-Amz-Signature=1f427bb68c0173b56011758ab30c7590b4a045be9759ac874d3218d2510ad633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST7S4LNC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FYQ8qFGkmJkO%2FvlWSd%2B6eSUbhVgzbzMPerIhDhznZlAiEAyv29A2iC7hfZcCPZYTATV6BTKj59v3Non9Jri6CxkcMqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHk9EJIIXozj4%2F5JeircA09YKSw5AX6jQOBdAF0hNKCZwNBuT9nlBcCcSS%2Fbhjfho%2Bpy1u%2BapKNU1%2BBrkc6IAz4brFmihFnCDBGOnJ1Z4PTAA44LitBjtSzAzj7sP6kYG%2Bix6W6KmAVVZhqnmedGv5kIul7qeRQZf1FSW8P1WVfRAwt17zhyhS1Gc7jHDXh%2Fu9JYC8RjBnm9WzNV1PEICODOSHlhontJPx7kCHkiO7OTBnTyFZMCpaQwWgm%2B8Pa7NLe%2B9UKtNqRUhko%2Bsn8sA7qN58wrfsSyFAdtQPWftdAlecFa8lZWSjkds%2Bw78EPGZfP58eYFS6xo%2BMe1n6GqHEH1SldyR%2Fc%2FyHyflj0MZAy2sPFmAwngFgXiyWJKF70wwscRgBZN6IQxdl3DG7Aawog3kIbtMeAr55LOQQR6t19jVuaQhrmlQBLhFnR08JYvxNSwWE4C04jYfsWO%2B7qRNFSR64Kx2vNMeoKqbDJtAWAmGuKeOsbbG2MVcimc%2BGyQNbJYd%2FFxd8LDBBxgB47wpWueBbRKn2nMrXVPGF%2FQQfufYhgwX5sjL%2FDLc48GfYb1HcUb3JeGvdJC29Tn3HA8JPH39SyOAK2blQgxxvA4fKKQkEi1TZd9IdF%2FrjxlywvxZM7R%2FjZPOf5X4j9FMKKZrMQGOqUBORScH0FHw2xhiNKH33y0DP2D0K1dZGzQYBAzzKnVQ6y%2FS2PJ%2Fn1cY5UN0lrW8WBqRDj5ymqdstJXWv7nKTWvn644o1KHzPnDPH34c4XtvvtYpQAqBtujJFnBHKpuzAyqS3sz3%2F%2BkG7Eb5%2BhR1Y2UpIdqc0drk3K1q0jnvcFmZZFYrZmBrK7%2Fm494yZNimci9KCTXRkDpOztWlLOyAGjclYY3ZcJb&X-Amz-Signature=40bc965af42d525ce78487f34ffb7ec1f5d3047f9570100518a31c7bde96bd07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDQWY65I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPT04FebvBT9RUCAhdGdY9W8NbcOpf3B9mLSc6yVnh6AiEA88JWPKZaYFaKPyb1Xo1yPr2wcWVFdddaekJP9DF2yAYqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtp4OwWQnLZ2EsX9yrcA3pUkE8HCtLdUVpYOOtm%2BG7gyCSb%2Fiaj72yG17JSVSN7xt3wBJOGmPlDBaHwzBUnkukdfRRs8J4VeWynA8S4yUad0fhnUyxqto0zRZYHFQfLYWGf%2BpaHWujAClrHvZena4ecIHBrUCMw9i2LnW3K7X15dFzFK4N%2FLZzzCmF1qiftJElIvl8kRhKFQBYsFttKPKJgbswwN%2BXJapjSV4T1gpfWoezQ4qln%2BN6NI%2BMvzkv0JnJqsVfcdgg1S8DLXGEdJMB%2BerAYC1dqsEDKxO8MFlZQfTYSp6YWib9USMyq%2BY2c4ImYTI%2BXTQJTiJxBN7eP03hDt%2BGZHatlP2llY24PHTZoo59mHNktEmL1evFLBJUhGoTe%2FkmCRNsuzlcWpw0KwpHpHZ67C%2FynqlL5yuCVRt1eKobfPPvw2lZ6O4TYFYdFIj3kva1Q2Bff2o4VWTD3Bm%2F4DU5YJyEXxjb8hyDpOmhQRU7yClRCojK%2BX9RIwJHaXtxJXXEF2GoNxRsu0d42oeY0aXFE2FreV%2FqRWWnG%2Boh6mV3yDBRMbpZtcfkbBkttt2Gxo8L%2Bbxd%2BmegLgQEO8B0kJaWh7SaMbsmQnF1F3JEmMCJZdJdi%2Fz7JXOQ5s4H2aMyBphw8d6%2BfTwopMMWarMQGOqUByW%2FOc8ZzEpSCJ1iqrLvU3SPfdMYOfblFZHSu6RVBMnjQwOzhrH2nm%2BzNd2IkvKzJIF8TwHPTyGqoOqW7TlxTpNcDaorYFyCyR%2B%2B%2BB4iMtuFjzPuy%2F4xrL%2FFHr20pokH5LtoB7nmqRbJKaiBLIAeJEfe%2FFCkoVVLkkMeHhbE6ufsrrihgxEmaYVL0%2FNXao1FmdYjn1ERI7HuMaFKEA9n1FntN2lvf&X-Amz-Signature=24881f159f6dc4fd3a130d796f22ca3607e3a748b77d8eb9e47d810fa84c6711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWFQ3GMG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA6jk38gxUwaKZXUNcV7rDWqOM%2FeIxGdvLgt4S9FqK7AiBPwLMPhjvTCIZ%2F1SUSi1%2Fyq7GPeA8Ausbe%2FMj%2BcEcKtSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSB1O08hBJhdU8qtFKtwDdlt5dSJ%2FoDJ7xgwU3iRD5IUh%2Blcw1pBdRlpbkmAjesbn6PGJAD7AHGeFEh7lKUe9X3qrw1dPQPJgSf8g5lg0oTBdVxDbAkPGeguVi7zfupLHqqt0VLdgBMVQzn6GyHeJk%2F%2FaWvys1VrKwYLQIhh4eTmkAsM2QsjZ1v%2BWCqeU%2BYOniJ7yuyI3UHZsaeTFY61hSvMIGYEbZaBTPKcE77dDtLctzsv4dn1SyRbeb8cBMA9bFH7mf4Oe%2FaMKTDZBULCsV7pWNc8hrn53OIbyZYHY%2B1t%2FAfYWSW2kIUvLXDHJQT7ubaefYBCssHWkZuEBeaY4%2BbZUzAXC33ZguCCIdbAIpINcegO609IIalSvaWOCk%2F3jcgTAIC7q8YJg5kzQvaDT32sfYDoxTjIDgarHd%2FHzAkGMBERYXWSSOoi1XxWb0Dr1hZXtR1nQuVWkBa2nl8JNZlJZnyXOrJtjucYvAcW%2Bz5%2BSE4%2B2x9QeOQhxj2hAEDZcSNkGR%2BCrrJlLXvBSYP1PjtMePELsDfn8RXDVCuhnG%2BA27d4FMG8nLLGyg1eOd3ZN612XFaxlL0jhanulm72ZEt%2BiE2fPwifJGX41fbLyhBUdP8kGbXNH%2Bl4aXDroc3PGVQud3GFMU4OHTX8w1c6sxAY6pgEovyLBdOy8p4%2F1NwuXETAgQLPlZixRyx0uKP2lKG48Fc%2Fz7JZ3B%2F%2FMln4YLZODi5i6vLQ%2FEIx4UlxhG%2FC6aw3zaASEi%2FfAtkB2Nd9MZHuobXt8H4SKAiVu0pkUjTOW2KoEdHf8inq%2FNjaWQgMdYAM%2FNIY0Nz6620fft5a2VguyiTYIGyPNyWVbWLE881SJ6G%2B%2BPUHtq1jkmlLf2A7gnbhM7LiKhe9C&X-Amz-Signature=7ea0f3a7528365ae90e83248b5aede84b482a4b390d976d0c4161657cdf3fad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWFQ3GMG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA6jk38gxUwaKZXUNcV7rDWqOM%2FeIxGdvLgt4S9FqK7AiBPwLMPhjvTCIZ%2F1SUSi1%2Fyq7GPeA8Ausbe%2FMj%2BcEcKtSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSB1O08hBJhdU8qtFKtwDdlt5dSJ%2FoDJ7xgwU3iRD5IUh%2Blcw1pBdRlpbkmAjesbn6PGJAD7AHGeFEh7lKUe9X3qrw1dPQPJgSf8g5lg0oTBdVxDbAkPGeguVi7zfupLHqqt0VLdgBMVQzn6GyHeJk%2F%2FaWvys1VrKwYLQIhh4eTmkAsM2QsjZ1v%2BWCqeU%2BYOniJ7yuyI3UHZsaeTFY61hSvMIGYEbZaBTPKcE77dDtLctzsv4dn1SyRbeb8cBMA9bFH7mf4Oe%2FaMKTDZBULCsV7pWNc8hrn53OIbyZYHY%2B1t%2FAfYWSW2kIUvLXDHJQT7ubaefYBCssHWkZuEBeaY4%2BbZUzAXC33ZguCCIdbAIpINcegO609IIalSvaWOCk%2F3jcgTAIC7q8YJg5kzQvaDT32sfYDoxTjIDgarHd%2FHzAkGMBERYXWSSOoi1XxWb0Dr1hZXtR1nQuVWkBa2nl8JNZlJZnyXOrJtjucYvAcW%2Bz5%2BSE4%2B2x9QeOQhxj2hAEDZcSNkGR%2BCrrJlLXvBSYP1PjtMePELsDfn8RXDVCuhnG%2BA27d4FMG8nLLGyg1eOd3ZN612XFaxlL0jhanulm72ZEt%2BiE2fPwifJGX41fbLyhBUdP8kGbXNH%2Bl4aXDroc3PGVQud3GFMU4OHTX8w1c6sxAY6pgEovyLBdOy8p4%2F1NwuXETAgQLPlZixRyx0uKP2lKG48Fc%2Fz7JZ3B%2F%2FMln4YLZODi5i6vLQ%2FEIx4UlxhG%2FC6aw3zaASEi%2FfAtkB2Nd9MZHuobXt8H4SKAiVu0pkUjTOW2KoEdHf8inq%2FNjaWQgMdYAM%2FNIY0Nz6620fft5a2VguyiTYIGyPNyWVbWLE881SJ6G%2B%2BPUHtq1jkmlLf2A7gnbhM7LiKhe9C&X-Amz-Signature=097e31d3c96ce58b7ecf400eb3ad3498c006c3e67451a37f30de8820e3438312&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWFQ3GMG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA6jk38gxUwaKZXUNcV7rDWqOM%2FeIxGdvLgt4S9FqK7AiBPwLMPhjvTCIZ%2F1SUSi1%2Fyq7GPeA8Ausbe%2FMj%2BcEcKtSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSB1O08hBJhdU8qtFKtwDdlt5dSJ%2FoDJ7xgwU3iRD5IUh%2Blcw1pBdRlpbkmAjesbn6PGJAD7AHGeFEh7lKUe9X3qrw1dPQPJgSf8g5lg0oTBdVxDbAkPGeguVi7zfupLHqqt0VLdgBMVQzn6GyHeJk%2F%2FaWvys1VrKwYLQIhh4eTmkAsM2QsjZ1v%2BWCqeU%2BYOniJ7yuyI3UHZsaeTFY61hSvMIGYEbZaBTPKcE77dDtLctzsv4dn1SyRbeb8cBMA9bFH7mf4Oe%2FaMKTDZBULCsV7pWNc8hrn53OIbyZYHY%2B1t%2FAfYWSW2kIUvLXDHJQT7ubaefYBCssHWkZuEBeaY4%2BbZUzAXC33ZguCCIdbAIpINcegO609IIalSvaWOCk%2F3jcgTAIC7q8YJg5kzQvaDT32sfYDoxTjIDgarHd%2FHzAkGMBERYXWSSOoi1XxWb0Dr1hZXtR1nQuVWkBa2nl8JNZlJZnyXOrJtjucYvAcW%2Bz5%2BSE4%2B2x9QeOQhxj2hAEDZcSNkGR%2BCrrJlLXvBSYP1PjtMePELsDfn8RXDVCuhnG%2BA27d4FMG8nLLGyg1eOd3ZN612XFaxlL0jhanulm72ZEt%2BiE2fPwifJGX41fbLyhBUdP8kGbXNH%2Bl4aXDroc3PGVQud3GFMU4OHTX8w1c6sxAY6pgEovyLBdOy8p4%2F1NwuXETAgQLPlZixRyx0uKP2lKG48Fc%2Fz7JZ3B%2F%2FMln4YLZODi5i6vLQ%2FEIx4UlxhG%2FC6aw3zaASEi%2FfAtkB2Nd9MZHuobXt8H4SKAiVu0pkUjTOW2KoEdHf8inq%2FNjaWQgMdYAM%2FNIY0Nz6620fft5a2VguyiTYIGyPNyWVbWLE881SJ6G%2B%2BPUHtq1jkmlLf2A7gnbhM7LiKhe9C&X-Amz-Signature=4046b55fa0e42ec163a0fc1dde3b5e7685cd746f6cba9892ad4fd9730bebd64d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWFQ3GMG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA6jk38gxUwaKZXUNcV7rDWqOM%2FeIxGdvLgt4S9FqK7AiBPwLMPhjvTCIZ%2F1SUSi1%2Fyq7GPeA8Ausbe%2FMj%2BcEcKtSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSB1O08hBJhdU8qtFKtwDdlt5dSJ%2FoDJ7xgwU3iRD5IUh%2Blcw1pBdRlpbkmAjesbn6PGJAD7AHGeFEh7lKUe9X3qrw1dPQPJgSf8g5lg0oTBdVxDbAkPGeguVi7zfupLHqqt0VLdgBMVQzn6GyHeJk%2F%2FaWvys1VrKwYLQIhh4eTmkAsM2QsjZ1v%2BWCqeU%2BYOniJ7yuyI3UHZsaeTFY61hSvMIGYEbZaBTPKcE77dDtLctzsv4dn1SyRbeb8cBMA9bFH7mf4Oe%2FaMKTDZBULCsV7pWNc8hrn53OIbyZYHY%2B1t%2FAfYWSW2kIUvLXDHJQT7ubaefYBCssHWkZuEBeaY4%2BbZUzAXC33ZguCCIdbAIpINcegO609IIalSvaWOCk%2F3jcgTAIC7q8YJg5kzQvaDT32sfYDoxTjIDgarHd%2FHzAkGMBERYXWSSOoi1XxWb0Dr1hZXtR1nQuVWkBa2nl8JNZlJZnyXOrJtjucYvAcW%2Bz5%2BSE4%2B2x9QeOQhxj2hAEDZcSNkGR%2BCrrJlLXvBSYP1PjtMePELsDfn8RXDVCuhnG%2BA27d4FMG8nLLGyg1eOd3ZN612XFaxlL0jhanulm72ZEt%2BiE2fPwifJGX41fbLyhBUdP8kGbXNH%2Bl4aXDroc3PGVQud3GFMU4OHTX8w1c6sxAY6pgEovyLBdOy8p4%2F1NwuXETAgQLPlZixRyx0uKP2lKG48Fc%2Fz7JZ3B%2F%2FMln4YLZODi5i6vLQ%2FEIx4UlxhG%2FC6aw3zaASEi%2FfAtkB2Nd9MZHuobXt8H4SKAiVu0pkUjTOW2KoEdHf8inq%2FNjaWQgMdYAM%2FNIY0Nz6620fft5a2VguyiTYIGyPNyWVbWLE881SJ6G%2B%2BPUHtq1jkmlLf2A7gnbhM7LiKhe9C&X-Amz-Signature=c8abd77f8c6e07692381ec54e6b8fbd2773964617cea085bcf664f3289427b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWFQ3GMG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA6jk38gxUwaKZXUNcV7rDWqOM%2FeIxGdvLgt4S9FqK7AiBPwLMPhjvTCIZ%2F1SUSi1%2Fyq7GPeA8Ausbe%2FMj%2BcEcKtSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSB1O08hBJhdU8qtFKtwDdlt5dSJ%2FoDJ7xgwU3iRD5IUh%2Blcw1pBdRlpbkmAjesbn6PGJAD7AHGeFEh7lKUe9X3qrw1dPQPJgSf8g5lg0oTBdVxDbAkPGeguVi7zfupLHqqt0VLdgBMVQzn6GyHeJk%2F%2FaWvys1VrKwYLQIhh4eTmkAsM2QsjZ1v%2BWCqeU%2BYOniJ7yuyI3UHZsaeTFY61hSvMIGYEbZaBTPKcE77dDtLctzsv4dn1SyRbeb8cBMA9bFH7mf4Oe%2FaMKTDZBULCsV7pWNc8hrn53OIbyZYHY%2B1t%2FAfYWSW2kIUvLXDHJQT7ubaefYBCssHWkZuEBeaY4%2BbZUzAXC33ZguCCIdbAIpINcegO609IIalSvaWOCk%2F3jcgTAIC7q8YJg5kzQvaDT32sfYDoxTjIDgarHd%2FHzAkGMBERYXWSSOoi1XxWb0Dr1hZXtR1nQuVWkBa2nl8JNZlJZnyXOrJtjucYvAcW%2Bz5%2BSE4%2B2x9QeOQhxj2hAEDZcSNkGR%2BCrrJlLXvBSYP1PjtMePELsDfn8RXDVCuhnG%2BA27d4FMG8nLLGyg1eOd3ZN612XFaxlL0jhanulm72ZEt%2BiE2fPwifJGX41fbLyhBUdP8kGbXNH%2Bl4aXDroc3PGVQud3GFMU4OHTX8w1c6sxAY6pgEovyLBdOy8p4%2F1NwuXETAgQLPlZixRyx0uKP2lKG48Fc%2Fz7JZ3B%2F%2FMln4YLZODi5i6vLQ%2FEIx4UlxhG%2FC6aw3zaASEi%2FfAtkB2Nd9MZHuobXt8H4SKAiVu0pkUjTOW2KoEdHf8inq%2FNjaWQgMdYAM%2FNIY0Nz6620fft5a2VguyiTYIGyPNyWVbWLE881SJ6G%2B%2BPUHtq1jkmlLf2A7gnbhM7LiKhe9C&X-Amz-Signature=a64d4dd0374bef54ac9794bf3de29da2a970917962e9f6fc5e76bf96b0e74ee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWFQ3GMG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA6jk38gxUwaKZXUNcV7rDWqOM%2FeIxGdvLgt4S9FqK7AiBPwLMPhjvTCIZ%2F1SUSi1%2Fyq7GPeA8Ausbe%2FMj%2BcEcKtSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSB1O08hBJhdU8qtFKtwDdlt5dSJ%2FoDJ7xgwU3iRD5IUh%2Blcw1pBdRlpbkmAjesbn6PGJAD7AHGeFEh7lKUe9X3qrw1dPQPJgSf8g5lg0oTBdVxDbAkPGeguVi7zfupLHqqt0VLdgBMVQzn6GyHeJk%2F%2FaWvys1VrKwYLQIhh4eTmkAsM2QsjZ1v%2BWCqeU%2BYOniJ7yuyI3UHZsaeTFY61hSvMIGYEbZaBTPKcE77dDtLctzsv4dn1SyRbeb8cBMA9bFH7mf4Oe%2FaMKTDZBULCsV7pWNc8hrn53OIbyZYHY%2B1t%2FAfYWSW2kIUvLXDHJQT7ubaefYBCssHWkZuEBeaY4%2BbZUzAXC33ZguCCIdbAIpINcegO609IIalSvaWOCk%2F3jcgTAIC7q8YJg5kzQvaDT32sfYDoxTjIDgarHd%2FHzAkGMBERYXWSSOoi1XxWb0Dr1hZXtR1nQuVWkBa2nl8JNZlJZnyXOrJtjucYvAcW%2Bz5%2BSE4%2B2x9QeOQhxj2hAEDZcSNkGR%2BCrrJlLXvBSYP1PjtMePELsDfn8RXDVCuhnG%2BA27d4FMG8nLLGyg1eOd3ZN612XFaxlL0jhanulm72ZEt%2BiE2fPwifJGX41fbLyhBUdP8kGbXNH%2Bl4aXDroc3PGVQud3GFMU4OHTX8w1c6sxAY6pgEovyLBdOy8p4%2F1NwuXETAgQLPlZixRyx0uKP2lKG48Fc%2Fz7JZ3B%2F%2FMln4YLZODi5i6vLQ%2FEIx4UlxhG%2FC6aw3zaASEi%2FfAtkB2Nd9MZHuobXt8H4SKAiVu0pkUjTOW2KoEdHf8inq%2FNjaWQgMdYAM%2FNIY0Nz6620fft5a2VguyiTYIGyPNyWVbWLE881SJ6G%2B%2BPUHtq1jkmlLf2A7gnbhM7LiKhe9C&X-Amz-Signature=ec9d39b4ceb6adaebf3bdce42768621532d44e185104a71e241c0d611c84609f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWFQ3GMG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA6jk38gxUwaKZXUNcV7rDWqOM%2FeIxGdvLgt4S9FqK7AiBPwLMPhjvTCIZ%2F1SUSi1%2Fyq7GPeA8Ausbe%2FMj%2BcEcKtSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSB1O08hBJhdU8qtFKtwDdlt5dSJ%2FoDJ7xgwU3iRD5IUh%2Blcw1pBdRlpbkmAjesbn6PGJAD7AHGeFEh7lKUe9X3qrw1dPQPJgSf8g5lg0oTBdVxDbAkPGeguVi7zfupLHqqt0VLdgBMVQzn6GyHeJk%2F%2FaWvys1VrKwYLQIhh4eTmkAsM2QsjZ1v%2BWCqeU%2BYOniJ7yuyI3UHZsaeTFY61hSvMIGYEbZaBTPKcE77dDtLctzsv4dn1SyRbeb8cBMA9bFH7mf4Oe%2FaMKTDZBULCsV7pWNc8hrn53OIbyZYHY%2B1t%2FAfYWSW2kIUvLXDHJQT7ubaefYBCssHWkZuEBeaY4%2BbZUzAXC33ZguCCIdbAIpINcegO609IIalSvaWOCk%2F3jcgTAIC7q8YJg5kzQvaDT32sfYDoxTjIDgarHd%2FHzAkGMBERYXWSSOoi1XxWb0Dr1hZXtR1nQuVWkBa2nl8JNZlJZnyXOrJtjucYvAcW%2Bz5%2BSE4%2B2x9QeOQhxj2hAEDZcSNkGR%2BCrrJlLXvBSYP1PjtMePELsDfn8RXDVCuhnG%2BA27d4FMG8nLLGyg1eOd3ZN612XFaxlL0jhanulm72ZEt%2BiE2fPwifJGX41fbLyhBUdP8kGbXNH%2Bl4aXDroc3PGVQud3GFMU4OHTX8w1c6sxAY6pgEovyLBdOy8p4%2F1NwuXETAgQLPlZixRyx0uKP2lKG48Fc%2Fz7JZ3B%2F%2FMln4YLZODi5i6vLQ%2FEIx4UlxhG%2FC6aw3zaASEi%2FfAtkB2Nd9MZHuobXt8H4SKAiVu0pkUjTOW2KoEdHf8inq%2FNjaWQgMdYAM%2FNIY0Nz6620fft5a2VguyiTYIGyPNyWVbWLE881SJ6G%2B%2BPUHtq1jkmlLf2A7gnbhM7LiKhe9C&X-Amz-Signature=23738e43348b24959fde1acabc979a7f29b4aefa5f26c39d23412823069fcc10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWFQ3GMG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA6jk38gxUwaKZXUNcV7rDWqOM%2FeIxGdvLgt4S9FqK7AiBPwLMPhjvTCIZ%2F1SUSi1%2Fyq7GPeA8Ausbe%2FMj%2BcEcKtSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSB1O08hBJhdU8qtFKtwDdlt5dSJ%2FoDJ7xgwU3iRD5IUh%2Blcw1pBdRlpbkmAjesbn6PGJAD7AHGeFEh7lKUe9X3qrw1dPQPJgSf8g5lg0oTBdVxDbAkPGeguVi7zfupLHqqt0VLdgBMVQzn6GyHeJk%2F%2FaWvys1VrKwYLQIhh4eTmkAsM2QsjZ1v%2BWCqeU%2BYOniJ7yuyI3UHZsaeTFY61hSvMIGYEbZaBTPKcE77dDtLctzsv4dn1SyRbeb8cBMA9bFH7mf4Oe%2FaMKTDZBULCsV7pWNc8hrn53OIbyZYHY%2B1t%2FAfYWSW2kIUvLXDHJQT7ubaefYBCssHWkZuEBeaY4%2BbZUzAXC33ZguCCIdbAIpINcegO609IIalSvaWOCk%2F3jcgTAIC7q8YJg5kzQvaDT32sfYDoxTjIDgarHd%2FHzAkGMBERYXWSSOoi1XxWb0Dr1hZXtR1nQuVWkBa2nl8JNZlJZnyXOrJtjucYvAcW%2Bz5%2BSE4%2B2x9QeOQhxj2hAEDZcSNkGR%2BCrrJlLXvBSYP1PjtMePELsDfn8RXDVCuhnG%2BA27d4FMG8nLLGyg1eOd3ZN612XFaxlL0jhanulm72ZEt%2BiE2fPwifJGX41fbLyhBUdP8kGbXNH%2Bl4aXDroc3PGVQud3GFMU4OHTX8w1c6sxAY6pgEovyLBdOy8p4%2F1NwuXETAgQLPlZixRyx0uKP2lKG48Fc%2Fz7JZ3B%2F%2FMln4YLZODi5i6vLQ%2FEIx4UlxhG%2FC6aw3zaASEi%2FfAtkB2Nd9MZHuobXt8H4SKAiVu0pkUjTOW2KoEdHf8inq%2FNjaWQgMdYAM%2FNIY0Nz6620fft5a2VguyiTYIGyPNyWVbWLE881SJ6G%2B%2BPUHtq1jkmlLf2A7gnbhM7LiKhe9C&X-Amz-Signature=cc14d5154e188d78965dc06ac0f2bacde4f63a630e600a10048b8cde1d75f525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
