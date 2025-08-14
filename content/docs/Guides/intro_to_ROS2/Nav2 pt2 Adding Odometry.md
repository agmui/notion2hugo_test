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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4BHMNW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ1AClMuB2X777%2BxjOsQIgPanGQRmgMW4KvXdkTJ4o6AiALxdNhzvroN7P0qSgmnQIT%2Bk84jCofgx5vFoLHG0rVcSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMbcRLhN55Wdc%2Fnhr4KtwDBJtgxMTJ%2FS%2FAl%2B1LoZSnoYwai3mK1BqbHpfvG%2BTDBzVFbP%2BxJQkjnkRhH1dUUYxyzg7Vu5lp0Il4ExHMAfG1%2FJaDTx%2FhrAvgnT5c8%2Bxll2X%2FEX1a3qYVSLkIsmufP8NRuiYM5BD%2Bam8%2FlA9Kx4%2BLKc%2Fo88Fgp0dqqYq9deoGz5Eh3W%2FdTl0GS5a8mIBu34FjiaGgBOK20FzUvYHk08Ke4mXt0CmKsGJPnfcAj5ootaV2VT0qDIv835ekTty9l9QxcJSvrwzmsw1CdKoUPG2pTJnId6UYdcF%2B33%2F1xixm7czhtQghz3PZ2%2F%2FhPZ7gAT6iBioQwfn%2FoQsMxkaMRMTiYYNSb6Znsr0TxPCHkts%2BjqAssy%2F9rutEXHY4a5E4%2Bi%2FSyd1HWCmv7AHv3bQ5xTKRl6s7zbzlEC8UVQ2VC16atIJL3KNvw%2FabSU%2FbcTYkKbolHbj1cK34aaO%2FoMY5G4IzsD62V7fTLTDvNt0OllJ8Q5CfBP4u%2BFSDiUB2nPBuQyi77pcyQprjh26hKB3fsc7RbGhH4Tsx%2FUG3euYws0rPBgN1kBAR%2FLUFY9p%2Fufe4UeycF%2FIi70CCyJLwGXYw1iQ%2FtPiBLNORLcgh8oSbQc3R1YoT79Ihf46S0mNk1kMwmoz1xAY6pgEXY8wzLknce5jiFVmjw%2BGn9h47xKwgQCKWN0GzVqLKiWyx%2BBHUc18XEcDKcJVcv0F4EeF%2Bmdr%2Bexm%2FRw0RCHDRONyejnX34psBCIc%2Fmy90xFM0Tu0DqV8anZ0%2FnvBruFJbGwOsz6M1HbHbKTCzRD506zb6sVCI8jHKqplOyR%2Bkn1LQ6oD6aekSnTxLdvehVZ6CZEtVv51tl2h862hgDo%2B8n0ijQ0bQ&X-Amz-Signature=a29240e58d6282f82b25330c0a3560dcc5ca95dd8ee4539a6ab88f37432b538c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4BHMNW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ1AClMuB2X777%2BxjOsQIgPanGQRmgMW4KvXdkTJ4o6AiALxdNhzvroN7P0qSgmnQIT%2Bk84jCofgx5vFoLHG0rVcSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMbcRLhN55Wdc%2Fnhr4KtwDBJtgxMTJ%2FS%2FAl%2B1LoZSnoYwai3mK1BqbHpfvG%2BTDBzVFbP%2BxJQkjnkRhH1dUUYxyzg7Vu5lp0Il4ExHMAfG1%2FJaDTx%2FhrAvgnT5c8%2Bxll2X%2FEX1a3qYVSLkIsmufP8NRuiYM5BD%2Bam8%2FlA9Kx4%2BLKc%2Fo88Fgp0dqqYq9deoGz5Eh3W%2FdTl0GS5a8mIBu34FjiaGgBOK20FzUvYHk08Ke4mXt0CmKsGJPnfcAj5ootaV2VT0qDIv835ekTty9l9QxcJSvrwzmsw1CdKoUPG2pTJnId6UYdcF%2B33%2F1xixm7czhtQghz3PZ2%2F%2FhPZ7gAT6iBioQwfn%2FoQsMxkaMRMTiYYNSb6Znsr0TxPCHkts%2BjqAssy%2F9rutEXHY4a5E4%2Bi%2FSyd1HWCmv7AHv3bQ5xTKRl6s7zbzlEC8UVQ2VC16atIJL3KNvw%2FabSU%2FbcTYkKbolHbj1cK34aaO%2FoMY5G4IzsD62V7fTLTDvNt0OllJ8Q5CfBP4u%2BFSDiUB2nPBuQyi77pcyQprjh26hKB3fsc7RbGhH4Tsx%2FUG3euYws0rPBgN1kBAR%2FLUFY9p%2Fufe4UeycF%2FIi70CCyJLwGXYw1iQ%2FtPiBLNORLcgh8oSbQc3R1YoT79Ihf46S0mNk1kMwmoz1xAY6pgEXY8wzLknce5jiFVmjw%2BGn9h47xKwgQCKWN0GzVqLKiWyx%2BBHUc18XEcDKcJVcv0F4EeF%2Bmdr%2Bexm%2FRw0RCHDRONyejnX34psBCIc%2Fmy90xFM0Tu0DqV8anZ0%2FnvBruFJbGwOsz6M1HbHbKTCzRD506zb6sVCI8jHKqplOyR%2Bkn1LQ6oD6aekSnTxLdvehVZ6CZEtVv51tl2h862hgDo%2B8n0ijQ0bQ&X-Amz-Signature=5b12e6ebf9a29d95cbb26c0eda73463b8b64f55b1083d2ff620918a127c38862&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4BHMNW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ1AClMuB2X777%2BxjOsQIgPanGQRmgMW4KvXdkTJ4o6AiALxdNhzvroN7P0qSgmnQIT%2Bk84jCofgx5vFoLHG0rVcSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMbcRLhN55Wdc%2Fnhr4KtwDBJtgxMTJ%2FS%2FAl%2B1LoZSnoYwai3mK1BqbHpfvG%2BTDBzVFbP%2BxJQkjnkRhH1dUUYxyzg7Vu5lp0Il4ExHMAfG1%2FJaDTx%2FhrAvgnT5c8%2Bxll2X%2FEX1a3qYVSLkIsmufP8NRuiYM5BD%2Bam8%2FlA9Kx4%2BLKc%2Fo88Fgp0dqqYq9deoGz5Eh3W%2FdTl0GS5a8mIBu34FjiaGgBOK20FzUvYHk08Ke4mXt0CmKsGJPnfcAj5ootaV2VT0qDIv835ekTty9l9QxcJSvrwzmsw1CdKoUPG2pTJnId6UYdcF%2B33%2F1xixm7czhtQghz3PZ2%2F%2FhPZ7gAT6iBioQwfn%2FoQsMxkaMRMTiYYNSb6Znsr0TxPCHkts%2BjqAssy%2F9rutEXHY4a5E4%2Bi%2FSyd1HWCmv7AHv3bQ5xTKRl6s7zbzlEC8UVQ2VC16atIJL3KNvw%2FabSU%2FbcTYkKbolHbj1cK34aaO%2FoMY5G4IzsD62V7fTLTDvNt0OllJ8Q5CfBP4u%2BFSDiUB2nPBuQyi77pcyQprjh26hKB3fsc7RbGhH4Tsx%2FUG3euYws0rPBgN1kBAR%2FLUFY9p%2Fufe4UeycF%2FIi70CCyJLwGXYw1iQ%2FtPiBLNORLcgh8oSbQc3R1YoT79Ihf46S0mNk1kMwmoz1xAY6pgEXY8wzLknce5jiFVmjw%2BGn9h47xKwgQCKWN0GzVqLKiWyx%2BBHUc18XEcDKcJVcv0F4EeF%2Bmdr%2Bexm%2FRw0RCHDRONyejnX34psBCIc%2Fmy90xFM0Tu0DqV8anZ0%2FnvBruFJbGwOsz6M1HbHbKTCzRD506zb6sVCI8jHKqplOyR%2Bkn1LQ6oD6aekSnTxLdvehVZ6CZEtVv51tl2h862hgDo%2B8n0ijQ0bQ&X-Amz-Signature=1ca2e2a1cba7e44ae4f81c05d77f28a100eb18f3320cf1eee5e6dbcee23315e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4BHMNW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ1AClMuB2X777%2BxjOsQIgPanGQRmgMW4KvXdkTJ4o6AiALxdNhzvroN7P0qSgmnQIT%2Bk84jCofgx5vFoLHG0rVcSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMbcRLhN55Wdc%2Fnhr4KtwDBJtgxMTJ%2FS%2FAl%2B1LoZSnoYwai3mK1BqbHpfvG%2BTDBzVFbP%2BxJQkjnkRhH1dUUYxyzg7Vu5lp0Il4ExHMAfG1%2FJaDTx%2FhrAvgnT5c8%2Bxll2X%2FEX1a3qYVSLkIsmufP8NRuiYM5BD%2Bam8%2FlA9Kx4%2BLKc%2Fo88Fgp0dqqYq9deoGz5Eh3W%2FdTl0GS5a8mIBu34FjiaGgBOK20FzUvYHk08Ke4mXt0CmKsGJPnfcAj5ootaV2VT0qDIv835ekTty9l9QxcJSvrwzmsw1CdKoUPG2pTJnId6UYdcF%2B33%2F1xixm7czhtQghz3PZ2%2F%2FhPZ7gAT6iBioQwfn%2FoQsMxkaMRMTiYYNSb6Znsr0TxPCHkts%2BjqAssy%2F9rutEXHY4a5E4%2Bi%2FSyd1HWCmv7AHv3bQ5xTKRl6s7zbzlEC8UVQ2VC16atIJL3KNvw%2FabSU%2FbcTYkKbolHbj1cK34aaO%2FoMY5G4IzsD62V7fTLTDvNt0OllJ8Q5CfBP4u%2BFSDiUB2nPBuQyi77pcyQprjh26hKB3fsc7RbGhH4Tsx%2FUG3euYws0rPBgN1kBAR%2FLUFY9p%2Fufe4UeycF%2FIi70CCyJLwGXYw1iQ%2FtPiBLNORLcgh8oSbQc3R1YoT79Ihf46S0mNk1kMwmoz1xAY6pgEXY8wzLknce5jiFVmjw%2BGn9h47xKwgQCKWN0GzVqLKiWyx%2BBHUc18XEcDKcJVcv0F4EeF%2Bmdr%2Bexm%2FRw0RCHDRONyejnX34psBCIc%2Fmy90xFM0Tu0DqV8anZ0%2FnvBruFJbGwOsz6M1HbHbKTCzRD506zb6sVCI8jHKqplOyR%2Bkn1LQ6oD6aekSnTxLdvehVZ6CZEtVv51tl2h862hgDo%2B8n0ijQ0bQ&X-Amz-Signature=734d79a28e76087f67d40ff4cb6a0016d3db20b08b6c11713187129cfbcfe9d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4BHMNW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ1AClMuB2X777%2BxjOsQIgPanGQRmgMW4KvXdkTJ4o6AiALxdNhzvroN7P0qSgmnQIT%2Bk84jCofgx5vFoLHG0rVcSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMbcRLhN55Wdc%2Fnhr4KtwDBJtgxMTJ%2FS%2FAl%2B1LoZSnoYwai3mK1BqbHpfvG%2BTDBzVFbP%2BxJQkjnkRhH1dUUYxyzg7Vu5lp0Il4ExHMAfG1%2FJaDTx%2FhrAvgnT5c8%2Bxll2X%2FEX1a3qYVSLkIsmufP8NRuiYM5BD%2Bam8%2FlA9Kx4%2BLKc%2Fo88Fgp0dqqYq9deoGz5Eh3W%2FdTl0GS5a8mIBu34FjiaGgBOK20FzUvYHk08Ke4mXt0CmKsGJPnfcAj5ootaV2VT0qDIv835ekTty9l9QxcJSvrwzmsw1CdKoUPG2pTJnId6UYdcF%2B33%2F1xixm7czhtQghz3PZ2%2F%2FhPZ7gAT6iBioQwfn%2FoQsMxkaMRMTiYYNSb6Znsr0TxPCHkts%2BjqAssy%2F9rutEXHY4a5E4%2Bi%2FSyd1HWCmv7AHv3bQ5xTKRl6s7zbzlEC8UVQ2VC16atIJL3KNvw%2FabSU%2FbcTYkKbolHbj1cK34aaO%2FoMY5G4IzsD62V7fTLTDvNt0OllJ8Q5CfBP4u%2BFSDiUB2nPBuQyi77pcyQprjh26hKB3fsc7RbGhH4Tsx%2FUG3euYws0rPBgN1kBAR%2FLUFY9p%2Fufe4UeycF%2FIi70CCyJLwGXYw1iQ%2FtPiBLNORLcgh8oSbQc3R1YoT79Ihf46S0mNk1kMwmoz1xAY6pgEXY8wzLknce5jiFVmjw%2BGn9h47xKwgQCKWN0GzVqLKiWyx%2BBHUc18XEcDKcJVcv0F4EeF%2Bmdr%2Bexm%2FRw0RCHDRONyejnX34psBCIc%2Fmy90xFM0Tu0DqV8anZ0%2FnvBruFJbGwOsz6M1HbHbKTCzRD506zb6sVCI8jHKqplOyR%2Bkn1LQ6oD6aekSnTxLdvehVZ6CZEtVv51tl2h862hgDo%2B8n0ijQ0bQ&X-Amz-Signature=760b7dea70a08d28816241a08fb71737930b7ff86c8333cb93f5ab754af3d233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4BHMNW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ1AClMuB2X777%2BxjOsQIgPanGQRmgMW4KvXdkTJ4o6AiALxdNhzvroN7P0qSgmnQIT%2Bk84jCofgx5vFoLHG0rVcSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMbcRLhN55Wdc%2Fnhr4KtwDBJtgxMTJ%2FS%2FAl%2B1LoZSnoYwai3mK1BqbHpfvG%2BTDBzVFbP%2BxJQkjnkRhH1dUUYxyzg7Vu5lp0Il4ExHMAfG1%2FJaDTx%2FhrAvgnT5c8%2Bxll2X%2FEX1a3qYVSLkIsmufP8NRuiYM5BD%2Bam8%2FlA9Kx4%2BLKc%2Fo88Fgp0dqqYq9deoGz5Eh3W%2FdTl0GS5a8mIBu34FjiaGgBOK20FzUvYHk08Ke4mXt0CmKsGJPnfcAj5ootaV2VT0qDIv835ekTty9l9QxcJSvrwzmsw1CdKoUPG2pTJnId6UYdcF%2B33%2F1xixm7czhtQghz3PZ2%2F%2FhPZ7gAT6iBioQwfn%2FoQsMxkaMRMTiYYNSb6Znsr0TxPCHkts%2BjqAssy%2F9rutEXHY4a5E4%2Bi%2FSyd1HWCmv7AHv3bQ5xTKRl6s7zbzlEC8UVQ2VC16atIJL3KNvw%2FabSU%2FbcTYkKbolHbj1cK34aaO%2FoMY5G4IzsD62V7fTLTDvNt0OllJ8Q5CfBP4u%2BFSDiUB2nPBuQyi77pcyQprjh26hKB3fsc7RbGhH4Tsx%2FUG3euYws0rPBgN1kBAR%2FLUFY9p%2Fufe4UeycF%2FIi70CCyJLwGXYw1iQ%2FtPiBLNORLcgh8oSbQc3R1YoT79Ihf46S0mNk1kMwmoz1xAY6pgEXY8wzLknce5jiFVmjw%2BGn9h47xKwgQCKWN0GzVqLKiWyx%2BBHUc18XEcDKcJVcv0F4EeF%2Bmdr%2Bexm%2FRw0RCHDRONyejnX34psBCIc%2Fmy90xFM0Tu0DqV8anZ0%2FnvBruFJbGwOsz6M1HbHbKTCzRD506zb6sVCI8jHKqplOyR%2Bkn1LQ6oD6aekSnTxLdvehVZ6CZEtVv51tl2h862hgDo%2B8n0ijQ0bQ&X-Amz-Signature=2e33bca3bf24f1cee78b507376776e7161ebc7157b67afbc8d848a8fe64f07ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4BHMNW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ1AClMuB2X777%2BxjOsQIgPanGQRmgMW4KvXdkTJ4o6AiALxdNhzvroN7P0qSgmnQIT%2Bk84jCofgx5vFoLHG0rVcSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMbcRLhN55Wdc%2Fnhr4KtwDBJtgxMTJ%2FS%2FAl%2B1LoZSnoYwai3mK1BqbHpfvG%2BTDBzVFbP%2BxJQkjnkRhH1dUUYxyzg7Vu5lp0Il4ExHMAfG1%2FJaDTx%2FhrAvgnT5c8%2Bxll2X%2FEX1a3qYVSLkIsmufP8NRuiYM5BD%2Bam8%2FlA9Kx4%2BLKc%2Fo88Fgp0dqqYq9deoGz5Eh3W%2FdTl0GS5a8mIBu34FjiaGgBOK20FzUvYHk08Ke4mXt0CmKsGJPnfcAj5ootaV2VT0qDIv835ekTty9l9QxcJSvrwzmsw1CdKoUPG2pTJnId6UYdcF%2B33%2F1xixm7czhtQghz3PZ2%2F%2FhPZ7gAT6iBioQwfn%2FoQsMxkaMRMTiYYNSb6Znsr0TxPCHkts%2BjqAssy%2F9rutEXHY4a5E4%2Bi%2FSyd1HWCmv7AHv3bQ5xTKRl6s7zbzlEC8UVQ2VC16atIJL3KNvw%2FabSU%2FbcTYkKbolHbj1cK34aaO%2FoMY5G4IzsD62V7fTLTDvNt0OllJ8Q5CfBP4u%2BFSDiUB2nPBuQyi77pcyQprjh26hKB3fsc7RbGhH4Tsx%2FUG3euYws0rPBgN1kBAR%2FLUFY9p%2Fufe4UeycF%2FIi70CCyJLwGXYw1iQ%2FtPiBLNORLcgh8oSbQc3R1YoT79Ihf46S0mNk1kMwmoz1xAY6pgEXY8wzLknce5jiFVmjw%2BGn9h47xKwgQCKWN0GzVqLKiWyx%2BBHUc18XEcDKcJVcv0F4EeF%2Bmdr%2Bexm%2FRw0RCHDRONyejnX34psBCIc%2Fmy90xFM0Tu0DqV8anZ0%2FnvBruFJbGwOsz6M1HbHbKTCzRD506zb6sVCI8jHKqplOyR%2Bkn1LQ6oD6aekSnTxLdvehVZ6CZEtVv51tl2h862hgDo%2B8n0ijQ0bQ&X-Amz-Signature=b64f5c3dee30a4dcdf01a0678e23457fda54220c4b67415d1dfe5c55280e3951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4BHMNW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ1AClMuB2X777%2BxjOsQIgPanGQRmgMW4KvXdkTJ4o6AiALxdNhzvroN7P0qSgmnQIT%2Bk84jCofgx5vFoLHG0rVcSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMbcRLhN55Wdc%2Fnhr4KtwDBJtgxMTJ%2FS%2FAl%2B1LoZSnoYwai3mK1BqbHpfvG%2BTDBzVFbP%2BxJQkjnkRhH1dUUYxyzg7Vu5lp0Il4ExHMAfG1%2FJaDTx%2FhrAvgnT5c8%2Bxll2X%2FEX1a3qYVSLkIsmufP8NRuiYM5BD%2Bam8%2FlA9Kx4%2BLKc%2Fo88Fgp0dqqYq9deoGz5Eh3W%2FdTl0GS5a8mIBu34FjiaGgBOK20FzUvYHk08Ke4mXt0CmKsGJPnfcAj5ootaV2VT0qDIv835ekTty9l9QxcJSvrwzmsw1CdKoUPG2pTJnId6UYdcF%2B33%2F1xixm7czhtQghz3PZ2%2F%2FhPZ7gAT6iBioQwfn%2FoQsMxkaMRMTiYYNSb6Znsr0TxPCHkts%2BjqAssy%2F9rutEXHY4a5E4%2Bi%2FSyd1HWCmv7AHv3bQ5xTKRl6s7zbzlEC8UVQ2VC16atIJL3KNvw%2FabSU%2FbcTYkKbolHbj1cK34aaO%2FoMY5G4IzsD62V7fTLTDvNt0OllJ8Q5CfBP4u%2BFSDiUB2nPBuQyi77pcyQprjh26hKB3fsc7RbGhH4Tsx%2FUG3euYws0rPBgN1kBAR%2FLUFY9p%2Fufe4UeycF%2FIi70CCyJLwGXYw1iQ%2FtPiBLNORLcgh8oSbQc3R1YoT79Ihf46S0mNk1kMwmoz1xAY6pgEXY8wzLknce5jiFVmjw%2BGn9h47xKwgQCKWN0GzVqLKiWyx%2BBHUc18XEcDKcJVcv0F4EeF%2Bmdr%2Bexm%2FRw0RCHDRONyejnX34psBCIc%2Fmy90xFM0Tu0DqV8anZ0%2FnvBruFJbGwOsz6M1HbHbKTCzRD506zb6sVCI8jHKqplOyR%2Bkn1LQ6oD6aekSnTxLdvehVZ6CZEtVv51tl2h862hgDo%2B8n0ijQ0bQ&X-Amz-Signature=22cb6c3196121eb32b44493a5a99dd57fdb0f7a1a332a00d82ff5b854cc57f11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4BHMNW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ1AClMuB2X777%2BxjOsQIgPanGQRmgMW4KvXdkTJ4o6AiALxdNhzvroN7P0qSgmnQIT%2Bk84jCofgx5vFoLHG0rVcSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMbcRLhN55Wdc%2Fnhr4KtwDBJtgxMTJ%2FS%2FAl%2B1LoZSnoYwai3mK1BqbHpfvG%2BTDBzVFbP%2BxJQkjnkRhH1dUUYxyzg7Vu5lp0Il4ExHMAfG1%2FJaDTx%2FhrAvgnT5c8%2Bxll2X%2FEX1a3qYVSLkIsmufP8NRuiYM5BD%2Bam8%2FlA9Kx4%2BLKc%2Fo88Fgp0dqqYq9deoGz5Eh3W%2FdTl0GS5a8mIBu34FjiaGgBOK20FzUvYHk08Ke4mXt0CmKsGJPnfcAj5ootaV2VT0qDIv835ekTty9l9QxcJSvrwzmsw1CdKoUPG2pTJnId6UYdcF%2B33%2F1xixm7czhtQghz3PZ2%2F%2FhPZ7gAT6iBioQwfn%2FoQsMxkaMRMTiYYNSb6Znsr0TxPCHkts%2BjqAssy%2F9rutEXHY4a5E4%2Bi%2FSyd1HWCmv7AHv3bQ5xTKRl6s7zbzlEC8UVQ2VC16atIJL3KNvw%2FabSU%2FbcTYkKbolHbj1cK34aaO%2FoMY5G4IzsD62V7fTLTDvNt0OllJ8Q5CfBP4u%2BFSDiUB2nPBuQyi77pcyQprjh26hKB3fsc7RbGhH4Tsx%2FUG3euYws0rPBgN1kBAR%2FLUFY9p%2Fufe4UeycF%2FIi70CCyJLwGXYw1iQ%2FtPiBLNORLcgh8oSbQc3R1YoT79Ihf46S0mNk1kMwmoz1xAY6pgEXY8wzLknce5jiFVmjw%2BGn9h47xKwgQCKWN0GzVqLKiWyx%2BBHUc18XEcDKcJVcv0F4EeF%2Bmdr%2Bexm%2FRw0RCHDRONyejnX34psBCIc%2Fmy90xFM0Tu0DqV8anZ0%2FnvBruFJbGwOsz6M1HbHbKTCzRD506zb6sVCI8jHKqplOyR%2Bkn1LQ6oD6aekSnTxLdvehVZ6CZEtVv51tl2h862hgDo%2B8n0ijQ0bQ&X-Amz-Signature=c239fe2728d31f2fcfa4d6b26e24b8580f5dd1409a96c97d525e54799bc1dc69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4BHMNW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ1AClMuB2X777%2BxjOsQIgPanGQRmgMW4KvXdkTJ4o6AiALxdNhzvroN7P0qSgmnQIT%2Bk84jCofgx5vFoLHG0rVcSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMbcRLhN55Wdc%2Fnhr4KtwDBJtgxMTJ%2FS%2FAl%2B1LoZSnoYwai3mK1BqbHpfvG%2BTDBzVFbP%2BxJQkjnkRhH1dUUYxyzg7Vu5lp0Il4ExHMAfG1%2FJaDTx%2FhrAvgnT5c8%2Bxll2X%2FEX1a3qYVSLkIsmufP8NRuiYM5BD%2Bam8%2FlA9Kx4%2BLKc%2Fo88Fgp0dqqYq9deoGz5Eh3W%2FdTl0GS5a8mIBu34FjiaGgBOK20FzUvYHk08Ke4mXt0CmKsGJPnfcAj5ootaV2VT0qDIv835ekTty9l9QxcJSvrwzmsw1CdKoUPG2pTJnId6UYdcF%2B33%2F1xixm7czhtQghz3PZ2%2F%2FhPZ7gAT6iBioQwfn%2FoQsMxkaMRMTiYYNSb6Znsr0TxPCHkts%2BjqAssy%2F9rutEXHY4a5E4%2Bi%2FSyd1HWCmv7AHv3bQ5xTKRl6s7zbzlEC8UVQ2VC16atIJL3KNvw%2FabSU%2FbcTYkKbolHbj1cK34aaO%2FoMY5G4IzsD62V7fTLTDvNt0OllJ8Q5CfBP4u%2BFSDiUB2nPBuQyi77pcyQprjh26hKB3fsc7RbGhH4Tsx%2FUG3euYws0rPBgN1kBAR%2FLUFY9p%2Fufe4UeycF%2FIi70CCyJLwGXYw1iQ%2FtPiBLNORLcgh8oSbQc3R1YoT79Ihf46S0mNk1kMwmoz1xAY6pgEXY8wzLknce5jiFVmjw%2BGn9h47xKwgQCKWN0GzVqLKiWyx%2BBHUc18XEcDKcJVcv0F4EeF%2Bmdr%2Bexm%2FRw0RCHDRONyejnX34psBCIc%2Fmy90xFM0Tu0DqV8anZ0%2FnvBruFJbGwOsz6M1HbHbKTCzRD506zb6sVCI8jHKqplOyR%2Bkn1LQ6oD6aekSnTxLdvehVZ6CZEtVv51tl2h862hgDo%2B8n0ijQ0bQ&X-Amz-Signature=1cd2445c2289f36ec2e0d5701b239a10eb933fc5e4892873bdb5c9e523ad4b6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXCQJFXR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT3FbwCSTv2EnpyzCqDr%2BzzlnsIuS%2BNQaUxjkIj2qwVAiAJUNTRd4CUXe6eIYcJ5lJsxK3kynbjI6lGAbkk0yyjJCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMLGQDND5U3XU86gLmKtwDpuGTf5ZZn0MnvYboeHVc7VJlvzHY2StzqTPuh5He2B55RusMOTVKajeviL64pYPGk24XJKiuuBTxUo6aV49AITACt3yVRz5CXVzF1kre%2Blr4DO4diFnjF1jktHSLHhbFdGjlerDbhflqEvQKR6sms5r2Da4oCfHLHQjxuXqNafAxl89Yc5YzEgQjvXHCbjsKq8F5bkMJupomcEnvBZRBoH7MnKqtshdhJrHqh82WhmlqjnphssXVSXFR1xtzpvck49D5ZcqhIh01OpOWxSh1CEno7X7GtTElz6Aoevq%2BCN8Eb7waQYX7DueRySOB6POHnHkBQfpnfJ1brYHm5m%2FfYJR62G1FkZx2wyD39vK8IIrSwWdWcSfzdw%2BM7ZvuepQkpfZm47buWooSI2Fove30ESUXyV9JdRDMbbS0P15NF4RZxdzvgUwSb6gFw7dAW0Bi3BkbwUQ0cLJ%2Bh8%2BrH7VDRh7cAo3a1WujP2aR19rW6JDdVBpeyN8G2ysxeJOnj4mjlpWZwNoN2MZ1HFdDF5AFN5LuhJzg6FXSCqHnXAJtiVTSBb670%2FKwCggGBIxMvO7xpOhBgCV%2B6i9zJAPRl9udwnp%2BBML%2Bx5l0DjxzakvfY7SPAUZD6yeTKKBkTkAwyIv1xAY6pgF8aFTrvrGIDWfPhFbphtiCkC1Im73eY3uylQd1w3KQYq1rfDSERHurkUj7zvT7cWLgB2%2BI1Bzs%2FLoXN0ZTHJitx8hZMCaNzqldddNgbSgg2TFDTRNX3yaXQ%2BEd8nu5cy4H1vQCzRzZXCBsC1wzOuvfvAPb8I2zLeL7Xc8BsUEdY3TYYbx%2Bp6fmdeAsNJHOytEzlrY3oDnByh8SKas%2FE%2FG9x8l5OzWu&X-Amz-Signature=99b6315c64fe3579617834a34af1bf1999c3c9a18b3d3837e67b31d4a46a0df7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EWNK3ZB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuy9HsIdFLMAoBalr8b%2BI2IQ3PdiXH8WS%2Fiw7NLUql3AIhALr7%2BLJv%2FR5blI0EmTkCszYnTMMHVR%2FMEjoLsoE4GpmJKv8DCDsQABoMNjM3NDIzMTgzODA1Igx%2Bw6aXg%2FES%2FLjsLcwq3AOLqAXXiYaR42q7RULgAOXV1FCZnXGiw%2FFTTJo1rK8A7dAt2i6ybRoDt7FoyCaQnvQhMQJ6wbeEOBxxn6NRYX%2FpsxRMgno69uH1oTpcXcVLIFpcq5rM9OYrujxOVVwHNwjPG7zNQDHYiMSI6K4vYE2PJxEZCuBHLv2UTgs7iKKmBqqhznVUXEp0hKPQbcoEy2b1zsMTN61rZOsWC7GpGOpOULHEgt1CFHstG1jlTzjewa8x%2BOWzBFAAMILeif%2F4m%2BlOZTEbRnrRHD0MQsQpld5dAq0TnTXKxHIndAE6Nx%2BV1P0oFvOZvfAD0kNIGUsCpLsCaeYALRLsAaiNGOeU9jOxkD5uPP92Gc9wRxuQ%2F3fHIp5H4X%2Bqd2N7JtbgE1RM%2FHjjLCiL7m%2F%2Br%2FGEbAtAphB0WKdCziWTDTbAewvxNYRwd3BK6Bp9%2F%2F7LkQfAUKqOgiS7l5G3%2FLHtHvea1lXDLhZkJ4YqrPeW2j%2FHBFKjb5KU4kdf15HNOL4L5eeSwg7utnA4KDnpEVOUkMNHaFb0yc1V6czJKZ1kB3hrtp6QP14x3anHPyG1TYylz8eMEUokmKXLmKNgWcTF25PDlfwfy%2B%2Bv0VqtgaLNuqg6UmQQja6jpbf0T%2Fizf6s9tTA6HjDoi%2FXEBjqkAcuHG6dd%2FqwDeBMfZE7tKMqaMDhV0EkaZin%2FZoQnlguZGEP2VdymWgqPf9%2FFTQTQUqXiTjFL5x3e3J3gYb8%2F2wd06iZN1VeE%2BXkBqsmp9BAMbrvdNCwohUgbB7oq2fvBFsDdojVJ56nwP0Gp%2BKnTbpMife0vZjDItOnpUmGn7OfcQkvcbuXlK8Ygu5xZjaav9Y0ZehuzvUY3Xd8KH7wwYPgedzgB&X-Amz-Signature=d65f73b1d4c2e11d13165c861c176ff80851e58631c68389ca246ba58fe8c524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EWNK3ZB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuy9HsIdFLMAoBalr8b%2BI2IQ3PdiXH8WS%2Fiw7NLUql3AIhALr7%2BLJv%2FR5blI0EmTkCszYnTMMHVR%2FMEjoLsoE4GpmJKv8DCDsQABoMNjM3NDIzMTgzODA1Igx%2Bw6aXg%2FES%2FLjsLcwq3AOLqAXXiYaR42q7RULgAOXV1FCZnXGiw%2FFTTJo1rK8A7dAt2i6ybRoDt7FoyCaQnvQhMQJ6wbeEOBxxn6NRYX%2FpsxRMgno69uH1oTpcXcVLIFpcq5rM9OYrujxOVVwHNwjPG7zNQDHYiMSI6K4vYE2PJxEZCuBHLv2UTgs7iKKmBqqhznVUXEp0hKPQbcoEy2b1zsMTN61rZOsWC7GpGOpOULHEgt1CFHstG1jlTzjewa8x%2BOWzBFAAMILeif%2F4m%2BlOZTEbRnrRHD0MQsQpld5dAq0TnTXKxHIndAE6Nx%2BV1P0oFvOZvfAD0kNIGUsCpLsCaeYALRLsAaiNGOeU9jOxkD5uPP92Gc9wRxuQ%2F3fHIp5H4X%2Bqd2N7JtbgE1RM%2FHjjLCiL7m%2F%2Br%2FGEbAtAphB0WKdCziWTDTbAewvxNYRwd3BK6Bp9%2F%2F7LkQfAUKqOgiS7l5G3%2FLHtHvea1lXDLhZkJ4YqrPeW2j%2FHBFKjb5KU4kdf15HNOL4L5eeSwg7utnA4KDnpEVOUkMNHaFb0yc1V6czJKZ1kB3hrtp6QP14x3anHPyG1TYylz8eMEUokmKXLmKNgWcTF25PDlfwfy%2B%2Bv0VqtgaLNuqg6UmQQja6jpbf0T%2Fizf6s9tTA6HjDoi%2FXEBjqkAcuHG6dd%2FqwDeBMfZE7tKMqaMDhV0EkaZin%2FZoQnlguZGEP2VdymWgqPf9%2FFTQTQUqXiTjFL5x3e3J3gYb8%2F2wd06iZN1VeE%2BXkBqsmp9BAMbrvdNCwohUgbB7oq2fvBFsDdojVJ56nwP0Gp%2BKnTbpMife0vZjDItOnpUmGn7OfcQkvcbuXlK8Ygu5xZjaav9Y0ZehuzvUY3Xd8KH7wwYPgedzgB&X-Amz-Signature=4494225cb44154aeb326d57425b4d38930c5676c867189db020cc54d232c6078&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EWNK3ZB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuy9HsIdFLMAoBalr8b%2BI2IQ3PdiXH8WS%2Fiw7NLUql3AIhALr7%2BLJv%2FR5blI0EmTkCszYnTMMHVR%2FMEjoLsoE4GpmJKv8DCDsQABoMNjM3NDIzMTgzODA1Igx%2Bw6aXg%2FES%2FLjsLcwq3AOLqAXXiYaR42q7RULgAOXV1FCZnXGiw%2FFTTJo1rK8A7dAt2i6ybRoDt7FoyCaQnvQhMQJ6wbeEOBxxn6NRYX%2FpsxRMgno69uH1oTpcXcVLIFpcq5rM9OYrujxOVVwHNwjPG7zNQDHYiMSI6K4vYE2PJxEZCuBHLv2UTgs7iKKmBqqhznVUXEp0hKPQbcoEy2b1zsMTN61rZOsWC7GpGOpOULHEgt1CFHstG1jlTzjewa8x%2BOWzBFAAMILeif%2F4m%2BlOZTEbRnrRHD0MQsQpld5dAq0TnTXKxHIndAE6Nx%2BV1P0oFvOZvfAD0kNIGUsCpLsCaeYALRLsAaiNGOeU9jOxkD5uPP92Gc9wRxuQ%2F3fHIp5H4X%2Bqd2N7JtbgE1RM%2FHjjLCiL7m%2F%2Br%2FGEbAtAphB0WKdCziWTDTbAewvxNYRwd3BK6Bp9%2F%2F7LkQfAUKqOgiS7l5G3%2FLHtHvea1lXDLhZkJ4YqrPeW2j%2FHBFKjb5KU4kdf15HNOL4L5eeSwg7utnA4KDnpEVOUkMNHaFb0yc1V6czJKZ1kB3hrtp6QP14x3anHPyG1TYylz8eMEUokmKXLmKNgWcTF25PDlfwfy%2B%2Bv0VqtgaLNuqg6UmQQja6jpbf0T%2Fizf6s9tTA6HjDoi%2FXEBjqkAcuHG6dd%2FqwDeBMfZE7tKMqaMDhV0EkaZin%2FZoQnlguZGEP2VdymWgqPf9%2FFTQTQUqXiTjFL5x3e3J3gYb8%2F2wd06iZN1VeE%2BXkBqsmp9BAMbrvdNCwohUgbB7oq2fvBFsDdojVJ56nwP0Gp%2BKnTbpMife0vZjDItOnpUmGn7OfcQkvcbuXlK8Ygu5xZjaav9Y0ZehuzvUY3Xd8KH7wwYPgedzgB&X-Amz-Signature=e3baf162b3bcd0ad10718aa1fb33303b44a3d5d11c0473acfd5ef0998ecd761f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EWNK3ZB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuy9HsIdFLMAoBalr8b%2BI2IQ3PdiXH8WS%2Fiw7NLUql3AIhALr7%2BLJv%2FR5blI0EmTkCszYnTMMHVR%2FMEjoLsoE4GpmJKv8DCDsQABoMNjM3NDIzMTgzODA1Igx%2Bw6aXg%2FES%2FLjsLcwq3AOLqAXXiYaR42q7RULgAOXV1FCZnXGiw%2FFTTJo1rK8A7dAt2i6ybRoDt7FoyCaQnvQhMQJ6wbeEOBxxn6NRYX%2FpsxRMgno69uH1oTpcXcVLIFpcq5rM9OYrujxOVVwHNwjPG7zNQDHYiMSI6K4vYE2PJxEZCuBHLv2UTgs7iKKmBqqhznVUXEp0hKPQbcoEy2b1zsMTN61rZOsWC7GpGOpOULHEgt1CFHstG1jlTzjewa8x%2BOWzBFAAMILeif%2F4m%2BlOZTEbRnrRHD0MQsQpld5dAq0TnTXKxHIndAE6Nx%2BV1P0oFvOZvfAD0kNIGUsCpLsCaeYALRLsAaiNGOeU9jOxkD5uPP92Gc9wRxuQ%2F3fHIp5H4X%2Bqd2N7JtbgE1RM%2FHjjLCiL7m%2F%2Br%2FGEbAtAphB0WKdCziWTDTbAewvxNYRwd3BK6Bp9%2F%2F7LkQfAUKqOgiS7l5G3%2FLHtHvea1lXDLhZkJ4YqrPeW2j%2FHBFKjb5KU4kdf15HNOL4L5eeSwg7utnA4KDnpEVOUkMNHaFb0yc1V6czJKZ1kB3hrtp6QP14x3anHPyG1TYylz8eMEUokmKXLmKNgWcTF25PDlfwfy%2B%2Bv0VqtgaLNuqg6UmQQja6jpbf0T%2Fizf6s9tTA6HjDoi%2FXEBjqkAcuHG6dd%2FqwDeBMfZE7tKMqaMDhV0EkaZin%2FZoQnlguZGEP2VdymWgqPf9%2FFTQTQUqXiTjFL5x3e3J3gYb8%2F2wd06iZN1VeE%2BXkBqsmp9BAMbrvdNCwohUgbB7oq2fvBFsDdojVJ56nwP0Gp%2BKnTbpMife0vZjDItOnpUmGn7OfcQkvcbuXlK8Ygu5xZjaav9Y0ZehuzvUY3Xd8KH7wwYPgedzgB&X-Amz-Signature=1577fa1de36890e7730041f3c289a95c7a924ac2e22a2e9b47bdaa0beb603bbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EWNK3ZB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuy9HsIdFLMAoBalr8b%2BI2IQ3PdiXH8WS%2Fiw7NLUql3AIhALr7%2BLJv%2FR5blI0EmTkCszYnTMMHVR%2FMEjoLsoE4GpmJKv8DCDsQABoMNjM3NDIzMTgzODA1Igx%2Bw6aXg%2FES%2FLjsLcwq3AOLqAXXiYaR42q7RULgAOXV1FCZnXGiw%2FFTTJo1rK8A7dAt2i6ybRoDt7FoyCaQnvQhMQJ6wbeEOBxxn6NRYX%2FpsxRMgno69uH1oTpcXcVLIFpcq5rM9OYrujxOVVwHNwjPG7zNQDHYiMSI6K4vYE2PJxEZCuBHLv2UTgs7iKKmBqqhznVUXEp0hKPQbcoEy2b1zsMTN61rZOsWC7GpGOpOULHEgt1CFHstG1jlTzjewa8x%2BOWzBFAAMILeif%2F4m%2BlOZTEbRnrRHD0MQsQpld5dAq0TnTXKxHIndAE6Nx%2BV1P0oFvOZvfAD0kNIGUsCpLsCaeYALRLsAaiNGOeU9jOxkD5uPP92Gc9wRxuQ%2F3fHIp5H4X%2Bqd2N7JtbgE1RM%2FHjjLCiL7m%2F%2Br%2FGEbAtAphB0WKdCziWTDTbAewvxNYRwd3BK6Bp9%2F%2F7LkQfAUKqOgiS7l5G3%2FLHtHvea1lXDLhZkJ4YqrPeW2j%2FHBFKjb5KU4kdf15HNOL4L5eeSwg7utnA4KDnpEVOUkMNHaFb0yc1V6czJKZ1kB3hrtp6QP14x3anHPyG1TYylz8eMEUokmKXLmKNgWcTF25PDlfwfy%2B%2Bv0VqtgaLNuqg6UmQQja6jpbf0T%2Fizf6s9tTA6HjDoi%2FXEBjqkAcuHG6dd%2FqwDeBMfZE7tKMqaMDhV0EkaZin%2FZoQnlguZGEP2VdymWgqPf9%2FFTQTQUqXiTjFL5x3e3J3gYb8%2F2wd06iZN1VeE%2BXkBqsmp9BAMbrvdNCwohUgbB7oq2fvBFsDdojVJ56nwP0Gp%2BKnTbpMife0vZjDItOnpUmGn7OfcQkvcbuXlK8Ygu5xZjaav9Y0ZehuzvUY3Xd8KH7wwYPgedzgB&X-Amz-Signature=e0ebc10e3f995c3ddad0f6c96ecff531e1dfa8395957c49939e0177c0256a05f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EWNK3ZB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuy9HsIdFLMAoBalr8b%2BI2IQ3PdiXH8WS%2Fiw7NLUql3AIhALr7%2BLJv%2FR5blI0EmTkCszYnTMMHVR%2FMEjoLsoE4GpmJKv8DCDsQABoMNjM3NDIzMTgzODA1Igx%2Bw6aXg%2FES%2FLjsLcwq3AOLqAXXiYaR42q7RULgAOXV1FCZnXGiw%2FFTTJo1rK8A7dAt2i6ybRoDt7FoyCaQnvQhMQJ6wbeEOBxxn6NRYX%2FpsxRMgno69uH1oTpcXcVLIFpcq5rM9OYrujxOVVwHNwjPG7zNQDHYiMSI6K4vYE2PJxEZCuBHLv2UTgs7iKKmBqqhznVUXEp0hKPQbcoEy2b1zsMTN61rZOsWC7GpGOpOULHEgt1CFHstG1jlTzjewa8x%2BOWzBFAAMILeif%2F4m%2BlOZTEbRnrRHD0MQsQpld5dAq0TnTXKxHIndAE6Nx%2BV1P0oFvOZvfAD0kNIGUsCpLsCaeYALRLsAaiNGOeU9jOxkD5uPP92Gc9wRxuQ%2F3fHIp5H4X%2Bqd2N7JtbgE1RM%2FHjjLCiL7m%2F%2Br%2FGEbAtAphB0WKdCziWTDTbAewvxNYRwd3BK6Bp9%2F%2F7LkQfAUKqOgiS7l5G3%2FLHtHvea1lXDLhZkJ4YqrPeW2j%2FHBFKjb5KU4kdf15HNOL4L5eeSwg7utnA4KDnpEVOUkMNHaFb0yc1V6czJKZ1kB3hrtp6QP14x3anHPyG1TYylz8eMEUokmKXLmKNgWcTF25PDlfwfy%2B%2Bv0VqtgaLNuqg6UmQQja6jpbf0T%2Fizf6s9tTA6HjDoi%2FXEBjqkAcuHG6dd%2FqwDeBMfZE7tKMqaMDhV0EkaZin%2FZoQnlguZGEP2VdymWgqPf9%2FFTQTQUqXiTjFL5x3e3J3gYb8%2F2wd06iZN1VeE%2BXkBqsmp9BAMbrvdNCwohUgbB7oq2fvBFsDdojVJ56nwP0Gp%2BKnTbpMife0vZjDItOnpUmGn7OfcQkvcbuXlK8Ygu5xZjaav9Y0ZehuzvUY3Xd8KH7wwYPgedzgB&X-Amz-Signature=b2f2b027ef799cb616692de8389216811a5b0b5fc255ea542a316c34eea3aa09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EWNK3ZB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuy9HsIdFLMAoBalr8b%2BI2IQ3PdiXH8WS%2Fiw7NLUql3AIhALr7%2BLJv%2FR5blI0EmTkCszYnTMMHVR%2FMEjoLsoE4GpmJKv8DCDsQABoMNjM3NDIzMTgzODA1Igx%2Bw6aXg%2FES%2FLjsLcwq3AOLqAXXiYaR42q7RULgAOXV1FCZnXGiw%2FFTTJo1rK8A7dAt2i6ybRoDt7FoyCaQnvQhMQJ6wbeEOBxxn6NRYX%2FpsxRMgno69uH1oTpcXcVLIFpcq5rM9OYrujxOVVwHNwjPG7zNQDHYiMSI6K4vYE2PJxEZCuBHLv2UTgs7iKKmBqqhznVUXEp0hKPQbcoEy2b1zsMTN61rZOsWC7GpGOpOULHEgt1CFHstG1jlTzjewa8x%2BOWzBFAAMILeif%2F4m%2BlOZTEbRnrRHD0MQsQpld5dAq0TnTXKxHIndAE6Nx%2BV1P0oFvOZvfAD0kNIGUsCpLsCaeYALRLsAaiNGOeU9jOxkD5uPP92Gc9wRxuQ%2F3fHIp5H4X%2Bqd2N7JtbgE1RM%2FHjjLCiL7m%2F%2Br%2FGEbAtAphB0WKdCziWTDTbAewvxNYRwd3BK6Bp9%2F%2F7LkQfAUKqOgiS7l5G3%2FLHtHvea1lXDLhZkJ4YqrPeW2j%2FHBFKjb5KU4kdf15HNOL4L5eeSwg7utnA4KDnpEVOUkMNHaFb0yc1V6czJKZ1kB3hrtp6QP14x3anHPyG1TYylz8eMEUokmKXLmKNgWcTF25PDlfwfy%2B%2Bv0VqtgaLNuqg6UmQQja6jpbf0T%2Fizf6s9tTA6HjDoi%2FXEBjqkAcuHG6dd%2FqwDeBMfZE7tKMqaMDhV0EkaZin%2FZoQnlguZGEP2VdymWgqPf9%2FFTQTQUqXiTjFL5x3e3J3gYb8%2F2wd06iZN1VeE%2BXkBqsmp9BAMbrvdNCwohUgbB7oq2fvBFsDdojVJ56nwP0Gp%2BKnTbpMife0vZjDItOnpUmGn7OfcQkvcbuXlK8Ygu5xZjaav9Y0ZehuzvUY3Xd8KH7wwYPgedzgB&X-Amz-Signature=05b52e218a03d9a29a321255b6ba2bded5406c3fe4468abb21a9a30c3f9b75f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EWNK3ZB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuy9HsIdFLMAoBalr8b%2BI2IQ3PdiXH8WS%2Fiw7NLUql3AIhALr7%2BLJv%2FR5blI0EmTkCszYnTMMHVR%2FMEjoLsoE4GpmJKv8DCDsQABoMNjM3NDIzMTgzODA1Igx%2Bw6aXg%2FES%2FLjsLcwq3AOLqAXXiYaR42q7RULgAOXV1FCZnXGiw%2FFTTJo1rK8A7dAt2i6ybRoDt7FoyCaQnvQhMQJ6wbeEOBxxn6NRYX%2FpsxRMgno69uH1oTpcXcVLIFpcq5rM9OYrujxOVVwHNwjPG7zNQDHYiMSI6K4vYE2PJxEZCuBHLv2UTgs7iKKmBqqhznVUXEp0hKPQbcoEy2b1zsMTN61rZOsWC7GpGOpOULHEgt1CFHstG1jlTzjewa8x%2BOWzBFAAMILeif%2F4m%2BlOZTEbRnrRHD0MQsQpld5dAq0TnTXKxHIndAE6Nx%2BV1P0oFvOZvfAD0kNIGUsCpLsCaeYALRLsAaiNGOeU9jOxkD5uPP92Gc9wRxuQ%2F3fHIp5H4X%2Bqd2N7JtbgE1RM%2FHjjLCiL7m%2F%2Br%2FGEbAtAphB0WKdCziWTDTbAewvxNYRwd3BK6Bp9%2F%2F7LkQfAUKqOgiS7l5G3%2FLHtHvea1lXDLhZkJ4YqrPeW2j%2FHBFKjb5KU4kdf15HNOL4L5eeSwg7utnA4KDnpEVOUkMNHaFb0yc1V6czJKZ1kB3hrtp6QP14x3anHPyG1TYylz8eMEUokmKXLmKNgWcTF25PDlfwfy%2B%2Bv0VqtgaLNuqg6UmQQja6jpbf0T%2Fizf6s9tTA6HjDoi%2FXEBjqkAcuHG6dd%2FqwDeBMfZE7tKMqaMDhV0EkaZin%2FZoQnlguZGEP2VdymWgqPf9%2FFTQTQUqXiTjFL5x3e3J3gYb8%2F2wd06iZN1VeE%2BXkBqsmp9BAMbrvdNCwohUgbB7oq2fvBFsDdojVJ56nwP0Gp%2BKnTbpMife0vZjDItOnpUmGn7OfcQkvcbuXlK8Ygu5xZjaav9Y0ZehuzvUY3Xd8KH7wwYPgedzgB&X-Amz-Signature=c3e37b9c4dd0a3508cdc98bc89b2287bba00b66740014160441582d2f9aa4a1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EWNK3ZB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuy9HsIdFLMAoBalr8b%2BI2IQ3PdiXH8WS%2Fiw7NLUql3AIhALr7%2BLJv%2FR5blI0EmTkCszYnTMMHVR%2FMEjoLsoE4GpmJKv8DCDsQABoMNjM3NDIzMTgzODA1Igx%2Bw6aXg%2FES%2FLjsLcwq3AOLqAXXiYaR42q7RULgAOXV1FCZnXGiw%2FFTTJo1rK8A7dAt2i6ybRoDt7FoyCaQnvQhMQJ6wbeEOBxxn6NRYX%2FpsxRMgno69uH1oTpcXcVLIFpcq5rM9OYrujxOVVwHNwjPG7zNQDHYiMSI6K4vYE2PJxEZCuBHLv2UTgs7iKKmBqqhznVUXEp0hKPQbcoEy2b1zsMTN61rZOsWC7GpGOpOULHEgt1CFHstG1jlTzjewa8x%2BOWzBFAAMILeif%2F4m%2BlOZTEbRnrRHD0MQsQpld5dAq0TnTXKxHIndAE6Nx%2BV1P0oFvOZvfAD0kNIGUsCpLsCaeYALRLsAaiNGOeU9jOxkD5uPP92Gc9wRxuQ%2F3fHIp5H4X%2Bqd2N7JtbgE1RM%2FHjjLCiL7m%2F%2Br%2FGEbAtAphB0WKdCziWTDTbAewvxNYRwd3BK6Bp9%2F%2F7LkQfAUKqOgiS7l5G3%2FLHtHvea1lXDLhZkJ4YqrPeW2j%2FHBFKjb5KU4kdf15HNOL4L5eeSwg7utnA4KDnpEVOUkMNHaFb0yc1V6czJKZ1kB3hrtp6QP14x3anHPyG1TYylz8eMEUokmKXLmKNgWcTF25PDlfwfy%2B%2Bv0VqtgaLNuqg6UmQQja6jpbf0T%2Fizf6s9tTA6HjDoi%2FXEBjqkAcuHG6dd%2FqwDeBMfZE7tKMqaMDhV0EkaZin%2FZoQnlguZGEP2VdymWgqPf9%2FFTQTQUqXiTjFL5x3e3J3gYb8%2F2wd06iZN1VeE%2BXkBqsmp9BAMbrvdNCwohUgbB7oq2fvBFsDdojVJ56nwP0Gp%2BKnTbpMife0vZjDItOnpUmGn7OfcQkvcbuXlK8Ygu5xZjaav9Y0ZehuzvUY3Xd8KH7wwYPgedzgB&X-Amz-Signature=49273e7bf039390dc8ef6f9642c9681cfae105cfd470f154ea05173713b77997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
